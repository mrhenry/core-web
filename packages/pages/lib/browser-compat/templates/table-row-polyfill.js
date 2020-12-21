const html = require('../../html/html');
const { coreWebBrowsers } = require('../browsers');

module.exports = function polyfillRowHTML(feature) {
	let row = '';
	for (const browser of coreWebBrowsers) {
		row = row + html`<td>${ feature.polyfilled[browser] || '-' }</td>`;
	}

	return row;
}
