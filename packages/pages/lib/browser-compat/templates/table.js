const html = require('../../html/html');
const headRowHTML = require('./table-head');
const polyfillRowHTML = require('./table-row-polyfill');
const nativeRowHTML = require('./table-row-native');
const { nativeTableNotes, polyfillTableNotes } = require('./notes');
const { engines } = require('@mrhenry/core-web/lib/__engines');
const { browsersToEngines } = require('@mrhenry/core-web-generator/lib/browsers-to-engines/browsers-to-engines');
const { coreWebBrowsers } = require('../browsers');

module.exports = function tableHTML(feature) {
	const tables = feature.data.map((compat) => {
		const engineMappingNative = lastVersionAdded(compat);

		return html`
		<table class="compat-table">
			<thead>
				<tr>${headRowHTML(compat)}</tr>
			</thead>
			<tbody>
				<tr><td><span title="${compat.polyfillName}">${ compat.coreWeb.providedByCoreWeb ? 'core-web' : 'polyfill-library' }</span></td>${polyfillRowHTML(compat)}</tr>
				<tr><td><span title="${compat.name}">native</span></td>${nativeRowHTML(compat)}</tr>
			</tbody>
		</table>

		<div class="compat-table-notes">
			${ nativeTableNotes(compat) }
			${ polyfillTableNotes(compat) }
		</div>

		<table class="compat-table">
			<thead>
				<tr><th></th>${engines.map((engine) => { return html`<th>${engine}</th>` }).join('')}</tr>
			</thead>
			<tbody>
				<tr><td>polyfill-library</td>${engines.map((engine) => { return html`<td>${(!!compat.coreWeb.engines[engine]) ? compat.coreWeb.engines[engine] : '-'}</td>` }).join('')}</tr>
				<tr><td>native</td>${engines.map((engine) => { return html`<td>${(!!engineMappingNative[engine]) ? engineMappingNative[engine] : '-'}</td>` }).join('')}</tr>
			</tbody>
		</table>
		`;
	}).join('');

	return html`
		<h3 id="${feature.key}" class="compat-table-header"><a href="#${feature.key}">${feature.key}</a></h3>
		${tables}
	`;
}

function lastVersionAdded(compat) {
	let out = {};

	for (const browser of coreWebBrowsers) {
		if (!Array.isArray(compat.native[browser])) {
			out[browser] = compat.native[browser].version_added;
			continue;
		}

		compat.native[browser].forEach((release) => {
			if (release.version_added) {
				out[browser] = release.version_added;
			}
		});
	}

	// this function was not really intended for this use.
	// needs a few adjustments.
	const mapped = browsersToEngines(out);
	for (const engine in mapped) {
		const version = mapped[engine];
		if (version.includes('>= ')) {
			mapped[engine] = version.slice(3);
			continue;
		}

		if (version.includes('-')) {
			const min = version.split('-')[0].trim();
			const max = version.split('-')[1].trim();

			mapped[engine] = max;
		}
	}

	return mapped;
}
