const path = require("path");

module.exports = [
	configBuilder({
		name: "engines",
		target: ["web", "browserslist:IE 8"],
		coreJsBrowsers: [
			"chrome >= 26",
			"edge >= 12",
			"firefox >= 26",
			"opera >= 26",
			"safari >= 6",
			"ie >= 8"
		],
		coreWebEngines: {
			Gecko: "26",
			EdgeHTML: "12",
			Blink: "31",
			WebKit: "536.25",
			Trident: "4.0"
		}
	}),

	configBuilder({
		name: "browsers",
		target: ["web", "browserslist:IE 8"],
		coreJsBrowsers: [
			"chrome >= 26",
			"edge >= 12",
			"firefox >= 26",
			"opera >= 26",
			"safari >= 6",
			"ie >= 8"
		],
		coreWebBrowsers: {
			chrome: "31",
			firefox: "26",
			edge: "12",
			opera: "26",
			safari: "6",
			ie: "8"
		}
	}),
];

function configBuilder(opts) {
	return {
		mode: "production",
		context: path.resolve(__dirname, "src"),
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: `[name].bundle-${opts.name}.js`
		},
		entry: {
			"non-interactive": "./non_interactive.js",
			"non-interactive-qsa": "./non_interactive_qsa.js"
		},
		devtool: "source-map",
		target: opts.target,
		optimization: {
			minimize: false
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: /(core-web\/modules|core-web\/helpers)/,
					use: {
						loader: "babel-loader",
						options: {
							comments: false,
							presets: [
								[
									"@babel/preset-env",
									{
										corejs: "^3.6.3",
										targets: {
											browsers: opts.coreJsBrowsers
										},
										useBuiltIns: "usage",
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
						loader: "babel-loader",
						options: {
							comments: false,
							plugins: [
								[
									"@mrhenry/core-web",
									{
										browsers: opts.coreWebBrowsers,
										engines: opts.coreWebEngines,
										debug: false,
									}
								]
							],
							presets: [
								[
									"@babel/preset-env",
									{
										corejs: "^3.6.3",
										targets: {
											browsers: opts.coreJsBrowsers
										},
										useBuiltIns: "usage",
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
}
