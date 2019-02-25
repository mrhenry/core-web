const m = require('../lib/ast-matcher');

module.exports = [
  m('HTMLTemplateElement'),
  m(`document.createElement('template')`),
];
