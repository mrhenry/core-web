const html = require('../../html/html');
const headRowHTML = require('./table-head');
const polyfillRowHTML = require('./table-row-polyfill');
const nativeRowHTML = require('./table-row-native');
const { nativeTableNotes, polyfillTableNotes } = require('./notes');

module.exports = function tableHTML(feature) {
	const tables = feature.data.map((compat) => {
		return html`
		<table>
			<thead>
				<tr>${headRowHTML(compat)}</tr>
			</thead>
			<tbody>
				<tr><td><span title="${compat.polyfillName}">${ compat.coreWeb.providedByCoreWeb ? 'core-web' : 'polyfill-library' }</span></td>${polyfillRowHTML(compat)}</tr>
				<tr><td><span title="${compat.name}">native</span></td>${nativeRowHTML(compat)}</tr>
			</tbody>
		</table>

		<div class="notes">
			${ nativeTableNotes(compat) }
			${ polyfillTableNotes(compat) }
		</div>
		`;
	}).join('');

	return html`
		<h2>${feature.key}</h2>
		${tables}
	`;
}
