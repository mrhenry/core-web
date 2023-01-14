const html = require('../../html/html');
const { coreWebBrowsers } = require('../browsers');
const he = require('he');

module.exports = function polyfillRowHTML(feature) {
	let row = '';
	for (const browser of coreWebBrowsers) {
		row = row + html`<td>${ he.encode(feature.polyfilled[browser] || '-') }</td>`;
	}

	return row;
}
