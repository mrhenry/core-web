const {
	clientSideDetect
} = require("@mrhenry/core-web");

console.log(
	clientSideDetect({
		chrome: "79",
		firefox: "71",
		opera: "65",
	})
);

console.log(
	clientSideDetect({
		chrome: "63",
		firefox: "57",
		opera: "57",
		safari: "12",
		samsung_mob: "8",
	})
);


console.log(
	clientSideDetect({
		chrome: "31",
		edge: "12",
		firefox: "26",
		opera: "26",
		safari: "8",
	})
);

console.log(
	clientSideDetect({
		ie: "11",
		safari: "7"
	})
);


console.log(
	clientSideDetect({
		ie: "10"
	})
);


console.log(
	clientSideDetect({
		ie: "9"
	})
);

console.log(
	clientSideDetect({
		ie: "8"
	})
);
