const path = require('path');
const targets = require('./targets');

module.exports = [
	...targets.flatMap((target) => {
		return [
			{
				entry: { 'index': './js/index.js' },
				filename: `[name].[contenthash].${target.name}.js`,
				debug: true,
			},
			{
				entry: { 'e2e': './js/e2e.js' },
				filename: `[name].${target.name}.js`,
				debug: false,
			}
		].map((entryPoint) => {
			return {
				mode: 'production',
				context: path.resolve(__dirname, 'lib'),
				output: {
					path: path.resolve(__dirname, 'dist/js'),
					filename: entryPoint.filename
				},
				entry: entryPoint.entry,
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
												useBuiltIns: 'usage',
												exclude: [
													"web.dom-collections.iterator",
													"web.dom-collections.for-each"
												]
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
												debug: entryPoint.debug
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
												useBuiltIns: 'usage',
												exclude: [
													"web.dom-collections.iterator",
													"web.dom-collections.for-each"
												]
											}
										]
									]
								}
							}
						}
					]
				}
			};
		});
	})
];
