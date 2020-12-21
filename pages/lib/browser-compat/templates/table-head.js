const html = require('../../html/html');
const { coreWebBrowsers } = require('../browsers');

module.exports = function headRowHTML(compat) {
	let row = '';
	for (const browser of coreWebBrowsers) {
		row = row + html`<th>${ browser }</th>`;
	}

	return html`<th><a href="${compat.mdn.__compat.mdn_url}" title="${ compat.name }" target="_blank">MDN</a></th>${row}`;
}
