const parser = require('ua-parser-js');
const semver = require('semver');
const bcdBrowsers = require('./bcd-browsers.json');

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	try {
		const resp = await fetch('https://mrhenry.github.io/core-web' + new URL(request.url).pathname);

		if (!request.headers.get('User-Agent')) {
			return cleanupIfNoUA(resp);
		}

		const ua = parser(request.headers.get('User-Agent'));
		if (!ua || !ua.browser || !ua.browser.name) {
			return cleanupIfNoUA(resp);
		}

		if (!ua || !ua.engine || !ua.engine.name) {
			return cleanupIfNoUA(resp);
		}

		let engine = ua.engine;
		if (engine.name === "WebKit") {
			engine = webkitVersion(ua);
		}

		let possibleTargets = targets.filter((target) => {
			if (target.engines[engine.name] && semver.satisfies(semver.coerce(engine.version), '>= ' + target.engines[engine.name])) {
				return true;
			}

			return false;
		});

		let pageTarget;

		return new HTMLRewriter()
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
					end.append(`<!-- target: ${pageTarget.name} - engine: ${engine.name}/${engine.version} -->`, {html: true});
				}
			})
			.transform(resp);
	} catch (error) {
		return new Response(error.message);
	}
}

function cleanupIfNoUA(resp) {
	return new HTMLRewriter()
		.on('[ua-target]', {
			element(element) {
				element.remove();
			},
		})
		.transform(resp);
}

const targets = [
	{
		name: '2020',
		engines: {
			"Blink": "87",
			"Gecko": "83",
			"WebKit": "610.1.28",
		},
	},
	{
		name: '2018',
		engines: {
			"Blink": "71",
			"Gecko": "64",
			"EdgeHTML": "18",
			"WebKit": "606.1.36",
		},
	},
	{
		name: '2016',
		engines: {
			"Blink": "51",
			"Gecko": "54",
			"EdgeHTML": "14",
			"WebKit": "602.1.50",
		},
	},
	{
		name: '2014',
		engines: {
			"Blink": "39",
			"Gecko": "34",
			"EdgeHTML": "12",
			"WebKit": "538.35",
		},
	},
	{
		name: '2013',
		engines: {
			"Blink": "30",
			"Gecko": "26",
			"Trident" : "7.0",
			"WebKit": "537.51",
		},
	},
	{
		name: 'fallback',
		engines: {
			"Blink": "26",
			"Gecko": "10",
			"Presto": "2.10",
			"Trident" : "5.0",
			"WebKit": "534.30",
		},
	},
];

function webkitVersion(ua) {
	if (!ua || !ua.browser || !ua.browser.major) {
		return ua.engine;
	}

	if (!ua.engine || ua.engine.name !== "WebKit") {
		return ua.engine;
	}

	const bcdSafariReleases = Object.keys(bcdBrowsers.safari.releases);
	bcdSafariReleases.sort((a, b) => {
		const av = semver.coerce(a);
		const bv = semver.coerce(b);
		if (semver.lt(av, bv)) {
			return -1;
		}

		if (semver.gt(av, bv)) {
			return 1;
		}

		return 0;
	});

	const bcdSafariReleaseVersion = bcdSafariReleases.find((x) => {
		const bcdVersion = semver.coerce(x);
		const uaVersion = semver.coerce(`${ua.browser.major}.${ua.browser.minor || 0}`);
		return semver.lte(uaVersion, bcdVersion);
	});

	if (bcdSafariReleaseVersion) {
		const release = bcdBrowsers.safari.releases[bcdSafariReleaseVersion];
		return {
			name: "WebKit",
			version: release.engine_version,
		};
	}

	const bcdSafariIOSReleases = Object.keys(bcdBrowsers.safari_ios.releases);
	bcdSafariIOSReleases.sort((a, b) => {
		const av = semver.coerce(a);
		const bv = semver.coerce(b);
		if (semver.lt(av, bv)) {
			return -1;
		}

		if (semver.gt(av, bv)) {
			return 1;
		}

		return 0;
	});

	const bcdSafariIOSReleaseVersion = bcdSafariIOSReleases.find((x) => {
		const bcdVersion = semver.coerce(x);
		const uaVersion = semver.coerce(`${ua.browser.major}.${ua.browser.minor || 0}`);
		return semver.lte(uaVersion, bcdVersion);
	});

	if (bcdSafariIOSReleaseVersion) {
		const release = bcdBrowsers.safari_ios.releases[bcdSafariIOSReleaseVersion];
		return {
			name: "WebKit",
			version: release.engine_version,
		};
	}

	return ua.engine;
}
