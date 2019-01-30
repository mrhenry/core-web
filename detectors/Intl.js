const m = require('../lib/ast-matcher');

module.exports = [
  m('Intl'),
  m('toLocaleString'),
	m('toLocaleDateString'),
	m('toLocaleTimeString'),
];
