const m = require("../lib/ast-matcher");
const p = require("path");

module.exports = [
	m("Blob"),
	m("BlobBuilder"),
	m("URL.createObjectURL"),
	m("URL.revokeObjectURL")
];
