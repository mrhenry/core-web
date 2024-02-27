const html = require('../../html/html');
const polyfillLibrary = require("@mrhenry/polyfill-library");
const { coreWebBrowsers } = require('../browsers');

const polyfillNotes = {};
async function gatherPolyfillNotes() {
	const features = await polyfillLibrary.listAllPolyfills();
	for (const feature of features) {
		const meta = await polyfillLibrary.describePolyfill(feature);
		if (!meta.notes) {
			continue;
		}

		const notes = Array.isArray(meta.notes) ? meta.notes : [meta.notes];

		polyfillNotes[feature] = polyfillNotes[feature] || [];
		polyfillNotes[feature].push(...notes);

		if (meta.aliases && Array.isArray(meta.aliases)) {
			meta.aliases.forEach((alias) => {
				polyfillNotes[alias] = polyfillNotes[alias] || [];
				polyfillNotes[alias].push(...notes);
			});
		}
	}
}

function nativeNotesToArray(versionInfo) {
	const allNotes = [];
	if (Array.isArray(versionInfo.notes)) {
		allNotes.push(...versionInfo.notes);
	} else if (versionInfo.notes) {
		allNotes.push(versionInfo.notes);
	}

	if (versionInfo.alternative_name) {
		allNotes.push('Alternate name : ' + versionInfo.alternative_name);
	}

	return allNotes;
}


function nativeTableNotes(feature) {
	let notes = '';
	for (const browser of coreWebBrowsers) {
		if (feature.native && Array.isArray(feature.native[browser])) {
			notes = notes + feature.native[browser].map((versionInfo) => {
				if (versionInfo.notes || versionInfo.alternative_name) {
					const allNotes = nativeNotesToArray(versionInfo);
					return allNotes.map((note) => {
						let version = versionInfo.version_added || versionInfo.version_removed || '';
						if (`${version}` === 'true') {
							version = '';
						}
						return html`<p>${ browser } ${ version } : ${ note }</p>`
					}).join('');
				}

				return '';
			}).join('');
		} else if (feature.native && feature.native[browser] && feature.native[browser].version_added) {
			if (feature.native[browser].notes || feature.native[browser].alternative_name) {
				const allNotes = nativeNotesToArray(feature.native[browser]);
				notes = notes + allNotes.map((note) => {
					let version = feature.native[browser].version_added || '';
					if (`${version}` === 'true') {
						version = '';
					}
					return html`<p>${ browser } ${ version } : ${ note }</p>`
				}).join('');
			}
		}
	}

	if (!notes) {
		return '';
	}

	return html`<h3>mdn notes : </h3>${notes}`;
}

function polyfillTableNotes(feature) {
	if (!polyfillNotes[feature.polyfillName]) {
		return '';
	}

	const notes = polyfillNotes[feature.polyfillName].map((note) => {
		return html`<p>${ note }</p>`
	}).join('');

	if (!notes) {
		return '';
	}

	return html`<h3>@mrhenry/polyfill-library notes : </h3>${notes}`;
}

module.exports = {
	nativeNotesToArray: nativeNotesToArray,
	nativeTableNotes: nativeTableNotes,
	polyfillTableNotes: polyfillTableNotes,
	gatherPolyfillNotes: gatherPolyfillNotes
}
