const m = require('../lib/ast-matcher');

module.exports = [
	m('customElements.define'),
	m('customElements.polyfillWrapFlushCallback'),
];
