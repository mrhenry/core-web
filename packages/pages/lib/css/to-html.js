const html = require('../html/html')

module.exports = function cssTags(assetMap, entryPoint) {
	let targets = [
		'2020'
	];

	if (process.env.GITHUB_ACTIONS) {
		targets = [
			'2020',
			'2018',
			'2016',
			'2014',
			'2013',
			'2011'
		];
	}

	let cssTags = targets.flatMap((target) => {
		return Object.keys(assetMap.css[entryPoint][target].manifest).sort((a, b) => {
			if (a === 'all') {
				return -1;
			}

			if (b === 'all') {
				return 1;
			}

			return 0;
		}).flatMap((mediaQueries) => {
			const tags = [
				html`<link rel="stylesheet" media="${mediaQueries}" href="/css/${assetMap.css[entryPoint][target].manifest[mediaQueries].base}" ua-target="${target}">`
			];

			if (target === '2011') {
				tags.push(
					html`<link rel="stylesheet" media="${mediaQueries}" href="/css/${assetMap.css[entryPoint][target].manifest[mediaQueries].base}" ua-target="fallback">`
				);
			}

			return tags;
		});
	})

	if (process.env.GITHUB_ACTIONS) {
		return html`
${cssTags.join('\n')}
`;
	}

	return html`
${cssTags.join('\n')}
`;
}
