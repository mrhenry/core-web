module.exports = [
	{
		name: '2020',
		webpackTarget: [
			'web',
			'browserslist:Chrome 87 or Edge 87 or Firefox 83 or Opera 72 or Safari 14 or Samsung 13'
		],
		presetEnvBrowsers: [
			'chrome >= 87',
			'edge >= 87',
			'firefox >= 83',
			'opera >= 72',
			'safari >= 14',
			'samsung >= 13.0',
		],
		coreWebBrowsers: {
			chrome: '87',
			edge: '87',
			firefox: '83',
			opera: '72',
			safari: '14',
			samsung_mob: '13.0',
		},
	},
	
	{
		name: '2018',
		webpackTarget: [
			'web',
			'browserslist:Chrome 71 or Edge 18 or Firefox 64 or Opera 57 or Safari 12 or Samsung 8.2'
		],
		presetEnvBrowsers: [
			'chrome >= 71',
			'edge >= 18',
			'firefox >= 64',
			'opera >= 57',
			'safari >= 12',
			'samsung >= 8.2',
		],
		coreWebBrowsers: {
			chrome: '71',
			edge: '18',
			firefox: '64',
			opera: '57',
			safari: '12',
			samsung_mob: '8.2',
		},
	},
	
	{
		name: '2014',
		webpackTarget: [
			'web',
			'browserslist:Chrome 39 or Firefox 34 or Opera 26 or Safari 8 or Samsung 13 or Android 4.4.4'
		],
		presetEnvBrowsers: [
			'chrome >= 39',
			'firefox >= 34',
			'opera >= 26',
			'safari >= 8',
			'android >= 4.4.4',
		],
		coreWebBrowsers: {
			chrome: '39',
			firefox: '34',
			opera: '26',
			safari: '8',
			android: '4.4.4',
		},
	},
	
	{
		name: '2013',
		webpackTarget: [
			'web',
			'browserslist:Chrome 31 or Firefox 26 or IE 11 or Opera 18 or Safari 7 or Android 4.4'
		],
		presetEnvBrowsers: [
			'chrome >= 31',
			'firefox >= 26',
			'ie >= 11',
			'opera >= 18',
			'safari >= 7',
			'android >= 4.4',
		],
		coreWebBrowsers: {
			chrome: '31',
			firefox: '26',
			ie: '11',
			opera: '18',
			safari: '7',
			android: '4.4',
		},
	},
	
	{
		name: 'fallback',
		webpackTarget: [
			'web',
			'browserslist:Chrome 17 or Firefox 10 or IE 9 or Opera 12 or Safari 5.1 or Android 4'
		],
		presetEnvBrowsers: [
			'chrome >= 17',
			'firefox >= 10',
			'ie >= 8',
			'opera >= 12',
			'safari >= 5.1',
			'android >= 4',
		],
		coreWebBrowsers: {
			chrome: '17',
			firefox: '10',
			ie: '9',
			opera: '12',
			safari: '5.1',
			android: '4',
		},
	}
]
