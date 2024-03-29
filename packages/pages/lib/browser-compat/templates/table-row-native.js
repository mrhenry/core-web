const html = require('../../html/html');
const { nativeNotesToArray } = require('./notes');
const { coreWebBrowsers } = require('../browsers');
const he = require('he');

module.exports = function nativeRowHTML(feature) {
	let row = '';
	for (const browser of coreWebBrowsers) {
		let native = '-';
		if (feature.native && Array.isArray(feature.native[browser])) {
			native = feature.native[browser].map((versionInfo) => {
				let out = [];
				if (versionInfo.version_added) {
					out.push(
						html`<span>${he.encode(versionInfo.version_added)}</span>`
					);
				}

				if (versionInfo.version_removed) {
					out.push(
						html`<span style="color:red;">${he.encode(versionInfo.version_removed)}</span>`
					);
				}

				if (versionInfo.notes || versionInfo.alternative_name) {
					return html`<span title="${nativeNotesToArray(versionInfo).join('\n')}">${out.join(' - ')} ⓘ</span>`
				}

				return out.join(' - ');
			}).filter((x) => { return !!x }).join('<br>');
		} else if (feature.native && feature.native[browser] && feature.native[browser].version_added) {
			native = he.encode(feature.native[browser].version_added);

			if (feature.native[browser].notes || feature.native[browser].alternative_name) {
				native = html`<span title="${nativeNotesToArray(feature.native[browser]).join('\n')}">${native} ⓘ</span>`;
			}
		}

		row = row + html`<td>${ native }</td>`;
	}

	return row;
}
