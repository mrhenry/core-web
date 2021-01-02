const Injector = require("./injector");
const { required } = require("@mrhenry/core-web");

module.exports = function (_, opts) {
	const featureSet = required({
		browsers: opts.browsers || {},
		engines: opts.engines || {},
		},
		{
			debug: opts.debug || false,
		}
	);

	const injector = new Injector(
		featureSet,
		{
			debug: opts.debug || false,
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
