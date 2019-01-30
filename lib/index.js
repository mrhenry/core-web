const {
	buildInjector,
	injectPost
} = require('./injector');
const {
	required
} = require('./features');

module.exports = function() {
	return {
		visitor: {
			'Identifier|MemberExpression'(path, state) {
				if (!state.injector) {
					state.injector = buildInjector(required(state.opts.browsers || {chrome:'41'}));
				}
				state.injector(path, state);
			},
			'Program': {
				exit(path, state) {
					injectPost(state);
				}
			}
		}
	};
};
