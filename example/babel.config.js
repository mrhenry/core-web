module.exports = function(api) {
	api.cache(true);
	return {
		plugins: [
			["../lib/index", {
				browsers: {
					// chrome: "71",
					// firefox: "64",

					// chrome: "63",
					// firefox: "57",
					// edge: "18",
					// opera: "57",
					// safari: "12",

					chrome: "31",
					firefox: "26",
					edge: "12",
					opera: "26",
					safari: "8",
					ie: "11",
				}
			}]
		]
	};
};
