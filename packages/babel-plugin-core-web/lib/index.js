const Injector = require("./injector");
const { required } = require("@mrhenry/core-web");

module.exports = function (_, opts) {
	const featureSet = required(
		opts.browsers || {
			chrome: "41"
		},
		{
			debug: opts.debug || false,
			excludeDeprecated: opts.excludeDeprecated  || false,
		}
	);

	const injector = new Injector(
		featureSet,
		{
			debug: opts.debug || false,
			excludeDeprecated: opts.excludeDeprecated || false,
		}
	);

	return {
		pre(state) {
			injector.reset();
		},
		visitor: {
			ImportDeclaration(path, state) {
				injector.handleImport(path, state);
			},
			"Identifier|MemberExpression"(path, state) {
				injector.handleGeneric(path, state);
			},
			Program: {
				exit(path, state) {
					injector.inject(path, state);
				}
			},
		},
		post(state) {
			injector.reset();
		},
	};
};
