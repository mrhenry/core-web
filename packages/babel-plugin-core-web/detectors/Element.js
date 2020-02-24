const m = require('../lib/ast-matcher');

module.exports = [
	m('Element'),
	m('HTMLElement'),
	m('hasAttribute'),
	m('document.createElement'),
];
