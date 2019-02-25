import "@mrhenry/core-web/modules/Intl.~locale.nl-BE";
import "@mrhenry/core-web/modules/Intl.~locale.nl-NL";
import "@mrhenry/core-web/modules/Intl.~locale.fr-BE";
import "@mrhenry/core-web/modules/Intl.~locale.fr-FR";

var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(event.toLocaleString('nl-BE', { timeZone: 'UTC' }));

customElements.define('mr-x', class extends HTMLElement {

})

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
