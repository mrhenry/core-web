const Injector = require("./injector");
const { required } = require("@mrhenry/core-web");

module.exports = function() {
	return {
		visitor: {
			ImportDeclaration(path, state) {
				getInjector(state).handleImport(path, state);
			},
			"Identifier|MemberExpression"(path, state) {
				getInjector(state).handleGeneric(path, state);
			},
			Program: {
				exit(path, state) {
					getInjector(state).inject(path, state);
				}
			}
		}
	};
};

const INJECTOR = Symbol();

function getInjector(state) {
	let injector = state.file.get(INJECTOR);
	if (!injector) {
		injector = new Injector(
			required(
				state.opts.browsers || {
					chrome: "41"
				}
			)
		);
		state.file.set(INJECTOR, injector);
	}
	return injector;
}
