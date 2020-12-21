const path = require('path');

module.exports = [
	configBuilder({
		name: '2020',
		target: [
			'web',
			'browserslist:Chrome 87 or Edge 87 or Firefox 83 or Opera 72 or Safari 14 or Samsung 13'
		],
		coreJsBrowsers: [
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
	}),

	configBuilder({
		name: '2018',
		target: [
			'web',
			'browserslist:Chrome 71 or Edge 18 or Firefox 64 or Opera 57 or Safari 12 or Samsung 8.2'
		],
		coreJsBrowsers: [
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
	}),

	configBuilder({
		name: '2014',
		target: [
			'web',
			'browserslist:Chrome 39 or Firefox 34 or Opera 26 or Safari 8 or Samsung 13 or Android 4.4.4'
		],
		coreJsBrowsers: [
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
	}),

	configBuilder({
		name: '2013',
		target: [
			'web',
			'browserslist:Chrome 31 or Firefox 26 or IE 11 or Opera 18 or Safari 7 or Android 4.4'
		],
		coreJsBrowsers: [
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
	}),

	configBuilder({
		name: 'legacy',
		target: [
			'web',
			'browserslist:Chrome 17 or Firefox 10 or IE 9 or Opera 12 or Safari 5.1 or Android 4'
		],
		coreJsBrowsers: [
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
	}),
];

function configBuilder(opts) {
	return {
		mode: 'production',
		context: path.resolve(__dirname, 'lib'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: `[name].${opts.name}.js`
		},
		entry: {
			'index': './js/index.js'
		},
		devtool: 'source-map',
		target: opts.target,
		optimization: {
			minimize: true
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: /(core-web\/modules|core-web\/helpers)/,
					use: {
						loader: 'babel-loader',
						options: {
							comments: false,
							presets: [
								[
									'@babel/preset-env',
									{
										corejs: '^3.6.3',
										targets: {
											browsers: opts.coreJsBrowsers
										},
										useBuiltIns: 'usage'
									}
								]
							]
						}
					}
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|core-web\/modules|core-web\/helpers)/,
					use: {
						loader: 'babel-loader',
						options: {
							comments: false,
							plugins: [
								[
									'@mrhenry/core-web',
									{
										browsers: opts.coreWebBrowsers,
										debug: true
									}
								]
							],
							presets: [
								[
									'@babel/preset-env',
									{
										corejs: '^3.6.3',
										targets: {
											browsers: opts.coreJsBrowsers
										},
										useBuiltIns: 'usage'
									}
								]
							]
						}
					}
				}
			]
		}
	};
}
