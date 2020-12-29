const path = require('path');
const targets = require('./targets');

module.exports = [
	...targets.map((target) => {
		return {
			mode: 'production',
			context: path.resolve(__dirname, 'lib'),
			output: {
				path: path.resolve(__dirname, 'dist'),
				filename: `[name].${target.name}.js`
			},
			entry: {
				'index': './js/index.js'
			},
			devtool: 'source-map',
			target: target.webpackTarget,
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
												browsers: target.presetEnvBrowsers
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
											browsers: target.coreWebBrowsers,
											engines: target.coreWebEngines,
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
												browsers: target.presetEnvBrowsers
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
	})
];
