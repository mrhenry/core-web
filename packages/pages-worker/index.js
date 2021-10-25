const semver = require('semver');

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	const uaParser = import('./vendor-ua-parser/ua_parser_wasm');
	const parseUA = (await uaParser).parse;
	const ua = parseUA(request.headers.get('User-Agent') || '');

	const url = new URL(request.url);

	if (url.pathname === '/.ua') {
		return new Response(JSON.stringify(ua), { headers: { 'content-type': 'application/json' } });
	}

	try {
		const upstreamResponse = await fetch('https://mrhenry.github.io/core-web' + url.pathname);

		let equivalentUA = ua.equivalent_browser;
		let possibleTargets = [];
		let pageTarget;

		let knownOldEngine = false;

		if (equivalentUA && equivalentUA.kind && equivalentUA.version) {
			possibleTargets = targets.filter((target) => {
				if (target.browsers[equivalentUA.kind] && semver.satisfies(semver.coerce(equivalentUA.version), '>= ' + target.browsers[equivalentUA.kind])) {
					return true;
				}

				return false;
			});

			if (possibleTargets.length === 0) {
				const target = targets[targets.length - 1];
				if (target.browsers[equivalentUA.kind] && semver.lt(semver.coerce(equivalentUA.version), semver.coerce(target.browsers[equivalentUA.kind]))) {
					knownOldEngine = true;
				}
			}
		}

		if (possibleTargets.length === 0 && !knownOldEngine) {
			possibleTargets = targets.filter((target) => { return target.name === '2016' });
		}

		const resp = new HTMLRewriter()
			.on('meta[name="ua-targets"]', {
				element(element) {
					const buildTargets = (element.getAttribute('content') || '').split(' ');
					for (const target of possibleTargets) {
						if (buildTargets.indexOf(target.name) > -1 && !pageTarget) {
							pageTarget = target;
						}
					}
				},
			})
			.on('[ua-target]', {
				element(element) {
					const target = element.getAttribute('ua-target');
					if (!pageTarget && target === 'fallback') {
						// keep fallbacks even when there isn't a matching target
						return;
					}

					if (!pageTarget) {
						element.remove();
						return;
					}

					if (target !== pageTarget.name) {
						element.remove();
						return;
					}
				},
			})
			.onDocument({
				end(end) {
					if (pageTarget && pageTarget.name && equivalentUA && equivalentUA.kind) {
						end.append(`<!-- target: ${pageTarget.name} - ua: ${equivalentUA.kind}/${equivalentUA.version || 'unknown'} -->`, { html: true });
					}
				}
			})
			.transform(upstreamResponse);
		
		
		if (/([-a-zA-Z0-9]+)\.([a-f0-9]{20})\.(.+?)\.js$/.test(url.pathname)) { // index.b155b505505e529f8a86.2020.js
			resp.headers.set('cache-control', 'public, max-age=31536000, immutable');
		}

		if (/([-a-zA-Z0-9]+)\.([a-f0-9]{20})\.(.+?)\.css$/.test(url.pathname)) { // index.d203129fd72032c3ca2e.2020.css
			resp.headers.set('cache-control', 'public, max-age=31536000, immutable');
		}

		if (/\.woff$/.test(url.pathname) || /\.woff2$/.test(url.pathname)) { // Atkinson-Hyperlegible-Bold-102.woff | Atkinson-Hyperlegible-Bold-102.woff2
			resp.headers.set('cache-control', 'public, max-age=31536000, immutable');
		}

		return resp;
	} catch (error) {
		return new Response(error.message);
	}
}

const targets = [
	{
		name: '2021',
		browsers: {
			'CHROME': '94',
			'FIREFOX': '93',
		},
	},
	{
		name: '2020',
		browsers: {
			'CHROME':'87',
			'FIREFOX':'83',
			'SAFARI':'14',
		},
	},
	{
		name: '2018',
		browsers: {
			'CHROME':'71',
			'EDGE':'18',
			'FIREFOX':'64',
			'SAFARI':'12',
		},
	},
	{
		name: '2016',
		browsers: {
			'CHROME': '51',
			'EDGE': '14',
			'FIREFOX': '54',
			'SAFARI': '10',
		},
	},
	{
		name: '2014',
		browsers: {
			'CHROME': '39',
			'EDGE': '12',
			'FIREFOX': '34',
			'SAFARI': '8',
		},
	},
	{
		name: '2013',
		browsers: {
			'CHROME': '31',
			'FIREFOX': '26',
			'INTERNET_EXPLORER': '11',
			'SAFARI': '7',
		},
	},
	{
		name: '2011',
		browsers: {
			'CHROME': '17',
			'FIREFOX': '10',
			'INTERNET_EXPLORER': '9',
			'OPERA': '12',
			'SAFARI': '5.1',
		},
	},
];
