import { Injector } from './injector.js';
import { required } from '@mrhenry/core-web';

const plugin = function (_, opts) {
	const featureSet = required({
		browsers: Object(opts).browsers || {},
		engines: Object(opts).engines || {},
		browserslist: Object(opts).browserslist || null,
		},
		{
			debug: Object(opts).debug || false,
		}
	);

	const injector = new Injector(
		featureSet,
		{
			debug: Object(opts).debug || false,
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
			Identifier(path, state) {
				injector.handleIdentifier(path, state);
			},
			MemberExpression(path, state) {
				injector.handleMemberExpression(path, state);
			},
			CallExpression(path, state) {
				injector.handleCallExpression(path, state);
				injector.handleCallExpressionStringLiterals(path, state);
				injector.handleElementQsaCallExpression(path, state);
			},
			NewExpression(path, state) {
				injector.handleNewExpression(path, state);
				injector.handleNewExpressionStringLiterals(path, state);
			},
			Program: {
				exit(path, state) {
					if (path.parent && path.parent.comments) {
						path.parent.comments.forEach((comment) => {
							injector.handleIgnoreComment(comment);
						})
					}

					injector.inject(path, state);
				}
			},
		},
		post(state) {
			injector.reset();
		},
	};
};

export default plugin;
export { plugin as 'module.exports' };
