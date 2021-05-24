var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(event.toLocaleString('es', { timeZone: 'UTC' }));
console.log(event.toLocaleString(['nl-BE', 'af'], { timeZone: 'UTC' }));
console.log(event.toLocaleString(['en', 'nl-BE'], { timeZone: 'UTC' }));

const number = 123456.789;
console.log(new Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' }).format(number));

customElements.define('mr-x', class extends HTMLElement { });

var query = 'p:last-child';
document.querySelectorAll(`:scope ${query}`);

// ["@mrhenry/core-web", {
// 	browsers: {
// 		// chrome: "71",
// 		// firefox: "64",
//
// 		// chrome: "63",
// 		// firefox: "57",
// 		// edge: "18",
// 		// opera: "57",
// 		// safari: "12",
//
// 		chrome: "31",
// 		firefox: "26",
// 		edge: "12",
// 		opera: "26",
// 		safari: "8",
// 		ie: "11",
// 	}
// }]
