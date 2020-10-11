const path = require('path');

module.exports = [
	configBuilder({
		name: 'modern',
		target: ['web', 'browserslist:last 2 versions and > 2%'],
		core_js_browsers: [
			'chrome >= 80',
			'firefox >= 76',
			'opera >= 70',
			'safari >= 13',
		],
		core_web_browsers: {
			chrome: '80',
			firefox: '76',
			opera: '70',
			safari: '13',
		}
	}),

	configBuilder({
		name: 'main',
		target: ['web', 'browserslist:Edge 18 or Safari 10 or Firefox 40'],
		core_js_browsers: [
			'chrome >= 56',
			'edge >= 18',
			'firefox >= 40',
			'safari >= 10',
		],
		core_web_browsers: {
			chrome: '56',
			edge: '18',
			firefox: '40',
			safari: '10',
		}
	}),

	configBuilder({
		name: 'old',
		target: ['web', 'browserslist:IE 11 or Safari 6 or Opera 26'],
		core_js_browsers: [
			'chrome >= 31',
			'edge >= 12',
			'firefox >= 26',
			'opera >= 26',
			'safari >= 6',
			'ie >= 11'
		],
		core_web_browsers: {
			chrome: '31',
			firefox: '26',
			edge: '12',
			opera: '26',
			safari: '6',
			ie: '11'
		}
	}),

	configBuilder({
		name: 'ancient',
		target: ['web', 'browserslist:IE 8'],
		core_js_browsers: [
			'ie >= 8',
		],
		core_web_browsers: {
			ie: '8',
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
		module: {
			rules: [
				{
					test: /\.js$/,
					include: /core-web\/modules/,
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
											browsers: opts.core_js_browsers
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
					exclude: /(node_modules|core-web\/modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							comments: false,
							plugins: [
								[
									'@mrhenry/core-web',
									{
										browsers: opts.core_web_browsers
									}
								]
							],
							presets: [
								[
									'@babel/preset-env',
									{
										corejs: '^3.6.3',
										targets: {
											browsers: opts.core_js_browsers
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
