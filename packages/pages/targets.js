if (process.env.GITHUB_ACTIONS) {
	module.exports = [
		{
			name: '2022',
			webpackTarget: [
				'web',
				'browserslist:Chrome 102 or Firefox 101'
			],
			presetEnvBrowsers: [
				'chrome >= 102',
				'firefox >= 101',
			],
			coreWebBrowsers: {
				'chrome': '102',
				'firefox': '101',
			},
		},
		{
			name: '2021',
			webpackTarget: [
				'web',
				'browserslist:Chrome 94 or Firefox 93 or Safari 15'
			],
			presetEnvBrowsers: [
				'chrome >= 94',
				'firefox >= 93',
				'safari >= 15',
			],
			coreWebBrowsers: {
				'chrome': '94',
				'firefox': '93',
				'safari': '15',
			},
		},

		{
			name: '2020',
			webpackTarget: [
				'web',
				'browserslist:Chrome 87 or Firefox 83 or Safari 14'
			],
			presetEnvBrowsers: [
				'chrome >= 87',
				'firefox >= 83',
				'safari >= 14',
			],
			coreWebBrowsers: {
				'chrome':'87',
				'firefox':'83',
				'safari':'14',
				'ios_saf': '14',
			},
		},
		
		{
			name: '2018',
			webpackTarget: [
				'web',
				'browserslist:Chrome 71 or Edge 18 or Firefox 64 or Safari 12'
			],
			presetEnvBrowsers: [
				'chrome >= 71',
				'edge >= 18',
				'firefox >= 64',
				'safari >= 12',
			],
			coreWebBrowsers: {
				'chrome':'71',
				'edge':'18',
				'firefox':'64',
				'safari':'12',
				'ios_saf':'12',
			},
		},

		{
			name: '2016',
			webpackTarget: [
				'web',
				'browserslist:Chrome 51 or Edge 14 or Firefox 54 or Safari 10'
			],
			presetEnvBrowsers: [
				'chrome >= 51',
				'edge >= 14',
				'firefox >= 54',
				'safari >= 10',
			],
			coreWebBrowsers: {
				'chrome': '51',
				'edge': '14',
				'firefox': '54',
				'safari': '10',
				'ios_saf': '10',
			},
		},
		
		{
			name: '2014',
			webpackTarget: [
				'web',
				'browserslist:Chrome 39 or Edge 12 or Firefox 34 or Safari 8'
			],
			presetEnvBrowsers: [
				'chrome >= 39',
				'edge >= 12',
				'firefox >= 34',
				'safari >= 8',
			],
			coreWebBrowsers: {
				'chrome': '39',
				'edge': '12',
				'firefox': '34',
				'safari': '8',
				'ios_saf': '8',
			},
		},
		
		{
			name: '2013',
			webpackTarget: [
				'web',
				'browserslist:Chrome 31 or Firefox 26 or IE 11 or Safari 7 or Android 4.4'
			],
			presetEnvBrowsers: [
				'chrome >= 31',
				'firefox >= 26',
				'ie >= 11',
				'safari >= 7',
				'android >= 4.4',
			],
			coreWebBrowsers: {
				'chrome': '31',
				'firefox': '26',
				'ie': '11',
				'safari': '7',
				'ios_saf': '7',
				'android': '4.4',
			},
		},
		
		{
			name: '2011',
			webpackTarget: [
				'web',
				'browserslist:Chrome 17 or Firefox 10 or IE 9 or Opera 12 or Safari 5.1 or Android 4'
			],
			presetEnvBrowsers: [
				'chrome >= 17',
				'firefox >= 10',
				'ie >= 9',
				'opera >= 12',
				'safari >= 5.1',
				'android >= 4',
			],
			coreWebBrowsers: {
				'chrome': '17',
				'firefox': '10',
				'ie': '9',
				'opera': '12',
				'safari': '5.1',
				'ios_saf': '5.1',
				'android': '4',
			},
		}
	];
} else {
	module.exports = [
		{
			name: '2022',
			webpackTarget: [
				'web',
				'browserslist:Chrome 102 or Firefox 101'
			],
			presetEnvBrowsers: [
				'chrome >= 102',
				'firefox >= 101',
			],
			coreWebBrowsers: {
				'chrome': '102',
				'firefox': '101',
			},
		},
	];
}
