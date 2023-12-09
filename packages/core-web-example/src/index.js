// core-web-ignore @mrhenry/core-web/modules/console.warn
/* core-web-ignore @mrhenry/core-web/modules/console.error */
/*! core-web-ignore @mrhenry/core-web/modules/console.table */

// Manually add a polyfill
import "@mrhenry/core-web/modules/Element.prototype.after";

customElements.define('mr-x', class extends HTMLElement { });

var query = 'p:last-child';
document.querySelectorAll(`:scope ${query}`);

console.warn('A warning!'); /* no polyfill because it is marked as ignored above */
console.error('An error'); /* no polyfill because it is marked as ignored above */
console.table(['A table']); /* no polyfill because it is marked as ignored above */

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
