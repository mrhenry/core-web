const parser = require('ua-parser-js');
const semver = require('semver');

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	const resp = await fetch('https://mrhenry.github.io/core-web' + new URL(request.url).pathname);

	if (!request.headers.get('User-Agent')) {
		return cleanupIfNoMatch(resp);
	}

	const ua = parser(request.headers.get('User-Agent'));
	if (!ua || !ua.browser) {
		return cleanupIfNoMatch(resp);
	}

	let uaBrowserName = ua.browser.name.toLowerCase();
	if (uaBrowserName === 'mobile safari') {
		uaBrowserName = 'safari';
	}

	let possibleTargets = targets.filter((target) => {
		if (target.browsers[uaBrowserName] && semver.satisfies(semver.coerce(ua.browser.major), '>= ' + target.browsers[uaBrowserName])) {
			return true;
		}

		return false;
	});

	if (!possibleTargets.length) {
		return cleanupIfNoMatch(resp);
	}

	let pageTarget;
	let buildTargets;

	return new HTMLRewriter()
		.on('[name="ua-targets"]', {
			element(element) {
				buildTargets = (element.getAttribute('content') || '').split(' ');
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
				if (!pageTarget) {
					element.remove();
					return;
				}

				if (pageTarget && target !== pageTarget.name) {
					element.remove();
				}
			},
		})
		.transform(resp);
}

function cleanupIfNoMatch(resp) {
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
		browsers: {
			chrome: '87',
			edge: '87',
			firefox: '83',
			opera: '72',
			safari: '14',
			samsung: '13.0',
		},
	},
	{
		name: '2019',
		browsers: {
			chrome: '79',
			firefox: '71',
			opera: '65',
			safari: '13',
			samsung: '10.1',
		},
	},
	{
		name: '2018',
		browsers: {
			chrome: '71',
			edge: '18',
			firefox: '64',
			opera: '57',
			safari: '12',
			samsung: '8.2',
		},
	},
	{
		name: '2017',
		browsers: {
			chrome: '63',
			edge: '16',
			firefox: '57',
			opera: '49',
			safari: '11',
			samsung: '6.4',
		},
	},
	{
		name: '2016',
		browsers: {
			chrome: '55',
			edge: '14',
			firefox: '50',
			opera: '42',
			safari: '10',
			samsung: '5.4',
		},
	},
	{
		name: '2015',
		browsers: {
			chrome: '47',
			edge: '13',
			firefox: '43',
			opera: '34',
			safari: '9',
		},
	},
	{
		name: '2014',
		browsers: {
			chrome: '39',
			firefox: '34',
			opera: '26',
			safari: '8',
			android: '4.4.4',
		},
	},
	{
		name: '2013',
		browsers: {
			chrome: '31',
			firefox: '26',
			ie: '11',
			opera: '18',
			safari: '7',
			android: '4.4',
		},
	},
	{
		name: 'legacy',
		browsers: {
			chrome: '17',
			firefox: '10',
			ie: '9',
			opera: '12',
			safari: '5.1',
			android: '4',
		},
	},
];
