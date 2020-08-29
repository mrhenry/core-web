const denodeify = require("denodeify");
const path = require("path");
const fs = require("fs");
const writeFile = denodeify(fs.writeFile);
const readFile = denodeify(fs.readFile);

const modulesDir = path.resolve(__dirname, "../core-web/modules");
const detectorsDir = path.resolve(
	__dirname,
	"../babel-plugin-core-web/detectors"
);

module.exports = async function generateWebComponents(mapping) {
	await generateTemplate(mapping);
	await generateShadyDOM(mapping);
	await generateShadyCSS(mapping);
	await generateCustomElements(mapping);
};

async function generateTemplate(mapping) {
	const src = await readFile(
		require.resolve("@webcomponents/template"),
		"utf-8"
	);
	await writeFile(path.join(modulesDir, "HTMLTemplateElement.js"), src);
	mapping.push({
		name: "HTMLTemplateElement",
		deps: [
			"console.error",
			"console.log",
			"console",
			"document.head",
			"document",
			"DocumentFragment",
			"Element.prototype.cloneNode",
			"Element",
			"HTMLDocument",
			"Window"
		],
		browsers: {
			chrome: "<35",
			edge: "<15",
			edge_mob: "<15",
			firefox: "<22",
			safari: "<9",
			ie: "*",
			opera: "<22"
		},
		detector: true
	});
}

async function generateShadyDOM(mapping) {
	const src = await readFile(
		require.resolve("@webcomponents/shadydom/shadydom.min.js"),
		"utf-8"
	);
	await writeFile(path.join(modulesDir, "~shadydom.js"), src);
	mapping.push({
		name: "~shadydom",
		deps: [
			"console.error",
			"console.log",
			"console",
			"CustomEvent",
			"document.head",
			"document.querySelector",
			"document",
			"DocumentFragment",
			"Element.prototype.cloneNode",
			"Element.prototype.matches",
			"Element",
			"Event",
			"HTMLDocument",
			"HTMLTemplateElement",
			"MutationObserver",
			"Node.prototype.contains",
			"NodeList.prototype.forEach",
			"Window"
		],
		browsers: {
			chrome: "<53",
			edge: "<79",
			edge_mob: "*",
			firefox: "<63",
			safari: "*",
			ie: "*",
			opera: "<40"
		},
		detector: true
	});
}

async function generateShadyCSS(mapping) {
	const scopingShim = await readFile(
		require.resolve("@webcomponents/shadycss/scoping-shim.min.js"),
		"utf-8"
	);
	await writeFile(
		path.join(modulesDir, "~shadycss-scoping-shim.js"),
		scopingShim
	);

	const applyShim = await readFile(
		require.resolve("@webcomponents/shadycss/apply-shim.min.js"),
		"utf-8"
	);
	await writeFile(path.join(modulesDir, "~shadycss-apply-shim.js"), applyShim);

	const customStyleInterface = await readFile(
		require.resolve("@webcomponents/shadycss/custom-style-interface.min.js"),
		"utf-8"
	);
	await writeFile(
		path.join(modulesDir, "~shadycss-custom-style-interface.js"),
		customStyleInterface
	);

	mapping.push({
		name: "~shadycss-scoping-shim",
		deps: [
			"~shadydom",
			"console.error",
			"console.log",
			"console",
			"CustomEvent",
			"document.head",
			"document.querySelector",
			"document",
			"DocumentFragment",
			"DOMTokenList",
			"Element.prototype.classList",
			"Element.prototype.cloneNode",
			"Element.prototype.matches",
			"Element.prototype.remove",
			"Element",
			"Event",
			"getComputedStyle",
			"HTMLDocument",
			"HTMLTemplateElement",
			"matchMedia",
			"MutationObserver",
			"Node.prototype.contains",
			"NodeList.prototype.forEach",
			"requestAnimationFrame",
			"Window"
		],
		browsers: {
			chrome: "<53",
			edge: "<79",
			edge_mob: "*",
			firefox: "<63",
			safari: "*",
			ie: "*",
			opera: "<40"
		},
		detector: true
	});

	mapping.push({
		name: "~shadycss-apply-shim",
		deps: [
			"~shadycss-scoping-shim",
			"~shadydom",
			"console.error",
			"console.log",
			"console",
			"CustomEvent",
			"document.head",
			"document.querySelector",
			"document",
			"DocumentFragment",
			"Element.prototype.cloneNode",
			"Element.prototype.matches",
			"Element",
			"Event",
			"getComputedStyle",
			"HTMLDocument",
			"HTMLTemplateElement",
			"matchMedia",
			"MutationObserver",
			"Node.prototype.contains",
			"NodeList.prototype.forEach",
			"requestAnimationFrame",
			"Window"
		],
		browsers: {
			chrome: "<53",
			edge: "<79",
			edge_mob: "*",
			firefox: "<63",
			safari: "*",
			ie: "*",
			opera: "<40"
		},
		detector: true
	});

	mapping.push({
		name: "~shadycss-custom-style-interface",
		deps: [
			"~shadycss-apply-shim",
			"~shadycss-scoping-shim",
			"~shadydom",
			"console.error",
			"console.log",
			"console",
			"CustomEvent",
			"document.head",
			"document.querySelector",
			"document",
			"DocumentFragment",
			"DOMTokenList",
			"Element.prototype.classList",
			"Element.prototype.cloneNode",
			"Element.prototype.matches",
			"Element.prototype.remove",
			"Element",
			"Event",
			"getComputedStyle",
			"HTMLDocument",
			"HTMLTemplateElement",
			"matchMedia",
			"MutationObserver",
			"Node.prototype.contains",
			"NodeList.prototype.forEach",
			"requestAnimationFrame",
			"Window"
		],
		browsers: {
			chrome: "<53",
			edge: "<79",
			edge_mob: "*",
			firefox: "<63",
			safari: "*",
			ie: "*",
			opera: "<40"
		},
		detector: true
	});
}

async function generateCustomElements(mapping) {
	const src = await readFile(
		require.resolve("@webcomponents/custom-elements"),
		"utf-8"
	);
	await writeFile(path.join(modulesDir, "~custom-elements.js"), src);
	mapping.push({
		name: "~custom-elements",
		deps: [
			"console.error",
			"console.log",
			"console.warn",
			"console",
			"CustomEvent",
			"document.head",
			"document.querySelector",
			"document",
			"DocumentFragment.prototype.append",
			"DocumentFragment.prototype.prepend",
			"DocumentFragment",
			"Element.prototype.after",
			"Element.prototype.append",
			"Element.prototype.before",
			"Element.prototype.cloneNode",
			"Element.prototype.matches",
			"Element.prototype.prepend",
			"Element.prototype.remove",
			"Element.prototype.replaceWith",
			"Element",
			"Event",
			"HTMLDocument",
			"HTMLTemplateElement",
			"MutationObserver",
			"Node.prototype.contains",
			"NodeList.prototype.forEach",
			"Window"
		],
		browsers: {
			chrome: "<67",
			edge: "<79",
			edge_mob: "*",
			firefox: "<63",
			safari: "<11",
			ie: "*",
			opera: "<65",
			samsung_mob: '<8'
		},
		detector: true
	});
}
