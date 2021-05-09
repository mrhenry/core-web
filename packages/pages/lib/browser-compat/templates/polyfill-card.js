const  html = require('../../html/html');
const siteFooter = require('../../landing/templates/site-footer');
const path = require('path');
const { dotsWBR, dotsZeroWidthSpace } = require('./dots-wbr');

module.exports = function polyfillCardHTML(assetMap, feature, sitemap) {
	return html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>${dotsZeroWidthSpace(feature.name)} | core-web</title>
	<meta name="description" content="Polyfill for ${feature.name}">
	<meta name="author" content="Mr. Henry">
	<meta name="publisher" content="Mr. Henry">
	<meta name="copyright" content="Mr. Henry">
	<meta name="robots" content="index,follow">
	<meta name="distribution" content="Global">
	<meta property="og:type" content="website">
	<meta property="og:title" content="${dotsZeroWidthSpace(feature.name)} | core-web">
	<meta property="og:url" content="https://core-web.mrhenry.studio${sitemap[feature.name]}">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="630">
	<meta property="og:image" content="https://core-web.mrhenry.studio${sitemap[feature.name]}og-image.jpg">
	<meta property="og:site_name" content="core-web">
	<meta property="og:description" content="Polyfill for ${feature.name}">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="wearemrhenry">
	<meta name="twitter:title" content="${dotsZeroWidthSpace(feature.name)} | core-web">
	<meta name="twitter:description" content="Polyfill for ${feature.name}">
	<meta name="twitter:image" content="https://core-web.mrhenry.studio${sitemap[feature.name]}og-image.jpg">

	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸</text></svg>">
	${indexCss(assetMap)}
</head>
<body>
	<main id="main-content">
		<div class="wrapper">
			<div class="site-header">
				<a
					class="logo"
					href="/"
				>
					core-web
				</a>
			</div>
		</div>

		<div class="section">
			<div class="wrapper">
				<h2>
					${dotsWBR(feature.name)} <span style="font-family: monospace; font-size: 0.8em;">polyfill</span>
				</h2>
			</div>
		</div>

		${browsers(feature)}

		${links(feature)}

		${notes(feature)}

		${dependencies(feature, sitemap)}
	</main>

	${siteFooter()}
</body>
</html>
`;
}

function indexCss(assetMap) {
	if (process.env.GITHUB_ACTIONS) {
		return html`<meta name="ua-targets" content="2020 2018 2016 2014 2013 2011">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2020'].fullName}" ua-target="2020">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2018'].fullName}" ua-target="2018">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2016'].fullName}" ua-target="2016">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2014'].fullName}" ua-target="2014">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2013'].fullName}" ua-target="2013">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2011'].fullName}" ua-target="2011">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2011'].fullName}" ua-target="fallback">
`;
	}

	return html`
<link rel="stylesheet" href="/css/${assetMap.css['index']['2020'].fullName}">
`;
}

function dependencies(feature, sitemap) {
	if (!feature.coreWeb.deps || !feature.coreWeb.deps.length) {
		return '';
	}

	const list = feature.coreWeb.deps.filter((dep) => {
		return dep.indexOf('_') !== 0;
	}).map((dep) => {
		if (sitemap && sitemap[dep]) {
			return html`
		<li>
			<a href="${sitemap[dep]}">${dotsWBR(dep)}</a>
		</li>
	`;
		}

		return html`
		<li>
			${dep}
		</li>
	`;
	});

	if (!list.length) {
		return '';
	}

	return html`
	<div class="section">
		<div class="wrapper">
			<h3>
				Dependencies
			</h3>

			<ul>
				${list.join('')}
			</ul>
		</div>
	</div>
	`;
}

function links(feature) {
	const list = [];
	
	if (feature.polyfillio && feature.polyfillio.docs) {
		list.push(
			html`
				<li>
					<a href="${feature.polyfillio.docs}" target="_blank" rel="noopener">documentation</a>
				</li>
			`
		);
	}

	if (feature.polyfillio && feature.polyfillio.spec) {
		list.push(
			html`
				<li>
					<a href="${feature.polyfillio.spec}" target="_blank" rel="noopener">specification</a>
				</li>
			`
		);
	}

	if (feature.polyfillio && feature.polyfillio.repo) {
		list.push(
			html`
				<li>
					<a href="${feature.polyfillio.repo}" target="_blank" rel="noopener">source code</a>
				</li>
			`
		);
	}

	if (feature.polyfillio && feature.polyfillio.baseDir) {
		list.push(
			html`
				<li>
					<a href="${path.join('https://github.com/Financial-Times/polyfill-library/tree/master/polyfills/', feature.polyfillio.baseDir)}" target="_blank" rel="noopener">polyfill-library</a>
				</li>
			`
		);
	}

	if (!list.length) {
		return '';
	}

	return html`
	<div class="section">
		<div class="wrapper">
			<h3>
				Links
			</h3>

			<ul>
				${list.join('')}
			</ul>
		</div>
	</div>
	`;
}

function notes(feature) {
	let list = [];
	
	if (feature.polyfillio && feature.polyfillio.notes) {
		if (Array.isArray(feature.polyfillio.notes)) {
			list = feature.polyfillio.notes.map((note) => {
				return html`
				<li>
					${note}
				</li>
				`;
			});
		} else {
			list.push(
				html`
				<li>
					${feature.polyfillio.notes}
				</li>
				`
			)
		}
	}

	if (!list.length) {
		return '';
	}

	return html`
	<div class="section">
		<div class="wrapper">
			<h3>
				Notes
			</h3>

			<ul>
				${list.join('')}
			</ul>
		</div>
	</div>
	`;
}

function prettyBrowser(browser) {
	switch (browser) {
		case "android":
			return 'Android Webview';
		case "bb":
			return 'Blackberry';
		case "blackberry":
			return 'Blackberry';
		case "chrome":
			return 'Chrome';
		case "edge":
			return 'Edge';
		case "edge_mob":
			return 'Edge Mobile';
		case "firefox":
			return 'Firefox';
		case "firefox_mob":
			return 'Firefox Android';
		case "ie":
			return 'IE';
		case "ie_mob":
			return 'IE Mobile';
		case "ios_chr":
			return 'iOS Chrome';
		case "ios_saf":
			return 'iOS Safari';
		case "op_mini":
			return 'Opera Mini';
		case "op_mob":
			return 'Opera Android';
		case "opera":
			return 'Opera';
		case "safari":
			return 'Safari';
		case "samsung_mob":
			return 'Samsung Mobile';
	
		default:
			return browser;
	}
}

function browsers(feature) {
	let list = [];
	
	if (feature.coreWeb && feature.coreWeb.browsers) {
		for (const browser in feature.coreWeb.browsers) {
			const version = feature.coreWeb.browsers[browser];
			list.push(
				html`
					<li>
						<div style="display: flex;justify-content: space-between; max-width: 220px;">
							<div>${prettyBrowser(browser)}:</div>
							<div>${version}</div>
						</div>
					</li>
				`
			);
		}
	}

	if (!list.length) {
		return '';
	}

	return html`
	<div class="section">
		<div class="wrapper">
			<h3>
				Browsers
			</h3>

			<ul>
				${list.join('')}
			</ul>
		</div>
	</div>
	`;
}
