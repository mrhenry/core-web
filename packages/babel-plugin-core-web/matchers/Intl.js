const m = require("../lib/ast-matcher");

module.exports = [
	m("Intl"),
	m("localeCompare"),
	m("toLocaleString"),
	m("toLocaleDateString"),
	m("toLocaleTimeString")
];
