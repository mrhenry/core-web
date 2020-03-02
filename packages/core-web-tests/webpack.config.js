const path = require("path");
const babelPresetEnv = require("@babel/preset-env");

module.exports = {
	mode: "production",
	context: path.resolve(__dirname, "src"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js"
	},
	entry: {
		"non-interactive": "./non_interactive.js"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /core-web\/modules/,
				use: {
					loader: "babel-loader",
					options: {
						comments: false,
						presets: [
							[
								babelPresetEnv,
								{
									corejs: "^3.6.3",
									targets: {
										browsers: [
											"chrome >= 31",
											"edge >= 12",
											"firefox >= 26",
											"opera >= 26",
											"safari >= 6",
											"ie >= 11"
										]
									},
									useBuiltIns: "usage"
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
					loader: "babel-loader",
					options: {
						comments: false,
						plugins: [
							[
								"@mrhenry/core-web",
								{
									browsers: {
										chrome: "31",
										firefox: "26",
										edge: "12",
										opera: "26",
										safari: "6",
										ie: "11"
									}
								}
							]
						],
						presets: [
							[
								babelPresetEnv,
								{
									corejs: "^3.6.3",
									targets: {
										browsers: [
											"chrome >= 31",
											"edge >= 12",
											"firefox >= 26",
											"opera >= 26",
											"safari >= 6",
											"ie >= 11"
										]
									},
									useBuiltIns: "usage"
								}
							]
						]
					}
				}
			}
		]
	}
};
