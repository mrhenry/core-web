const path = require('path');
const targets = require('./targets');

module.exports = [
	...targets.flatMap((target) => {
		return [
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
									targets: {
										browsers: target.presetEnvBrowsers
									},
									plugins: [
										[
											'polyfill-corejs3',
											{
												method: 'usage-global',
												version: '3.999999.999999',
												exclude: [
													"web.dom-collections.iterator",
													"web.dom-collections.for-each"
												]
											}
										]
									],
									presets: [
										[
											"@babel/preset-env",
											{}
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
									targets: {
										browsers: target.presetEnvBrowsers
									},
									plugins: [
										[
											'@mrhenry/core-web',
											{
												browsers: target.coreWebBrowsers,
												engines: target.coreWebEngines,
												debug: entryPoint.debug
											}
										],
										[
											'polyfill-corejs3',
											{
												method: 'usage-global',
												version: '3.999999.999999',
												exclude: [
													"web.dom-collections.iterator",
													"web.dom-collections.for-each"
												]
											}
										]
									],
									presets: [
										[
											'@babel/preset-env',
											{}
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
