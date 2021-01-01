const coreWebBrowsers = [
	'android',
	'chrome',
	'edge',
	'firefox',
	'ie',
	'opera',
	'safari',
	'ios_saf',
];


function browsersCoreWebToMDN(browser) {
	// core web
	// "android": "<67"
	// "chrome": "4 - 65",
	// "edge": "12 - 15",
	// "edge_mob": "*",
	// "firefox": "2 - 56",
	// "firefox_mob": "<64",
	// "ie": "10 - *",
	// "ie_mob": "10 - *",
	// "ios_saf": "3.2 - 11.2",
	// "opera": "10 - 52",
	// "safari": "3.1 - 12",
	// "samsung_mob": "*",

	// mdn
	// chrome: [Object],
	// chrome_android: [Object],
	// edge: [Array],
	// firefox: [Object],
	// firefox_android: [Object],
	// ie: [Object],
	// opera: [Object],
	// opera_android: [Object],
	// safari: [Object],
	// safari_ios: [Object],
	// samsunginternet_android: [Object],
	// webview_android: [Object]
		
	if (browser === 'android') {
		return 'webview_android';
	}

	if (browser === 'edge_mob') {
		return;
	}

	if (browser === 'firefox_mob') {
		return;
	}

	if (browser === 'ie_mob') {
		return;
	}

	if (browser === 'samsung_mob') {
		return;
	}

	if (browser === 'ios_saf') {
		return 'safari_ios';
	}

	return browser;
}

module.exports = {
	coreWebBrowsers: coreWebBrowsers,
	browsersCoreWebToMDN: browsersCoreWebToMDN,
}
