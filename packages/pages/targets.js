if (process.env.GITHUB_ACTIONS) {
	module.exports = [
		{
			name: '2021',
			webpackTarget: [
				'web',
				'browserslist:Chrome 87 or Firefox 83 or Safari 14'
			],
			presetEnvBrowsers: [
				'chrome >= 87',
				'firefox >= 83',
				'safari >= 14',
			],
			coreWebEngines: {
				"Blink": "87",
				"Gecko": "83",
				"WebKit": "610.1.28",
			},
		},

		{
			name: '2019',
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
			coreWebEngines: {
				"Blink": "71",
				"Gecko": "64",
				"EdgeHTML": "18",
				"WebKit": "606.1.36",
			},
		},

		{
			name: '2017',
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
			coreWebEngines: {
				"Blink": "51",
				"Gecko": "54",
				"EdgeHTML": "14",
				"WebKit": "602.1.50",
			},
		},

		{
			name: '2015',
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
			coreWebEngines: {
				"Blink": "39",
				"Gecko": "34",
				"EdgeHTML": "12",
				"WebKit": "538.35",
			},
		},

		{
			name: '2014',
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
			coreWebEngines: {
				"Blink": "30",
				"Gecko": "26",
				"Trident": "7.0",
				"WebKit": "537.51",
			},
		},

		{
			name: '2012',
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
			coreWebEngines: {
				"Blink": "26",
				"Gecko": "10",
				"Presto": "2.10",
				"Trident": "5.0",
				"WebKit": "534.30",
			},
		}
	];
} else {
	module.exports = [
		{
			name: '2021',
			webpackTarget: [
				'web',
				'browserslist:Chrome 87 or Firefox 83 or Safari 14'
			],
			presetEnvBrowsers: [
				'chrome >= 87',
				'firefox >= 83',
				'safari >= 14',
			],
			coreWebEngines: {
				"Blink": "87",
				"Gecko": "83",
				"WebKit": "610.1.28",
			},
		},
	];
}
