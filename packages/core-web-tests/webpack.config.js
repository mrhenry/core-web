const path = require('path');

module.exports = [
	configBuilder({
		name: 'modern',
		target: ['web', 'browserslist:last 2 versions and > 2%'],
		coreJsBrowsers: [
			'chrome >= 80',
			'firefox >= 76',
			'opera >= 70',
			'safari >= 13',
		],
		coreWebBrowsers: {
			chrome: '80',
			firefox: '76',
			opera: '70',
			safari: '13',
		},
	}),

	configBuilder({
		name: 'main',
		target: ['web', 'browserslist:Edge 18 or Safari 10 or Firefox 40'],
		coreJsBrowsers: [
			'chrome >= 56',
			'edge >= 18',
			'firefox >= 40',
			'safari >= 10',
		],
		coreWebBrowsers: {
			chrome: '56',
			edge: '18',
			firefox: '40',
			safari: '10',
		},
	}),

	configBuilder({
		name: 'old',
		target: ['web', 'es5'],
		coreJsBrowsers: [
			'chrome >= 31',
			'edge >= 12',
			'firefox >= 26',
			'opera >= 26',
			'safari >= 6',
			'ie >= 11'
		],
		coreWebEngines: {
			Blink: '31',
			Gecko: '26',
			EdgeHTML: '12',
			WebKit: '536.25',
			Trident: '7'
		},
	}),

	configBuilder({
		name: 'ancient',
		target: ['web', 'browserslist:IE 8'],
		coreJsBrowsers: [
			'chrome >= 26',
			'edge >= 12',
			'firefox >= 26',
			'opera >= 26',
			'safari >= 6',
			'ie >= 8'
		],
		coreWebBrowsers: {
			chrome: '31',
			firefox: '26',
			edge: '12',
			opera: '26',
			safari: '6',
			ie: '8'
		}
	}),
];

function configBuilder(opts) {
	return {
		mode: 'production',
		context: path.resolve(__dirname, 'src'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: `[name].bundle-${opts.name}.js`
		},
		entry: {
			'non-interactive': './non_interactive.js'
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
										engines: opts.coreWebEngines
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
