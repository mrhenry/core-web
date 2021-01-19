"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWebComponents = void 0;
const fs = require("fs");
const path = require("path");
const browsers_to_engines_1 = require("./browsers-to-engines/browsers-to-engines");
const modulesDir = path.resolve(__dirname, "../../core-web/modules");
async function generateWebComponents(mapping) {
    await generateTemplate(mapping);
    await generateShadyDOM(mapping);
    await generateShadyCSS(mapping);
    await generateCustomElements(mapping);
}
exports.generateWebComponents = generateWebComponents;
;
async function generateTemplate(mapping) {
    const src = fs.readFileSync(require.resolve("@webcomponents/template"), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "HTMLTemplateElement.js"), src);
    const browsers = {
        chrome: "<35",
        edge: "<15",
        edge_mob: "<15",
        firefox: "<22",
        safari: "<9",
        ie: "*",
        opera: "<22"
    };
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
        browsers: browsers,
        engines: browsers_to_engines_1.browsersToEngines(browsers),
        hasCustomMatcher: true,
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
async function generateShadyDOM(mapping) {
    const src = fs.readFileSync(require.resolve("@webcomponents/shadydom/shadydom.min.js"), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "~shadydom.js"), src);
    const browsers = {
        chrome: "<53",
        edge: "<79",
        edge_mob: "*",
        firefox: "<63",
        safari: "*",
        ie: "*",
        opera: "<40"
    };
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
        browsers: browsers,
        engines: browsers_to_engines_1.browsersToEngines(browsers),
        hasCustomMatcher: true,
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
async function generateShadyCSS(mapping) {
    const scopingShim = fs.readFileSync(require.resolve("@webcomponents/shadycss/scoping-shim.min.js"), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "~shadycss-scoping-shim.js"), scopingShim);
    const applyShim = fs.readFileSync(require.resolve("@webcomponents/shadycss/apply-shim.min.js"), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "~shadycss-apply-shim.js"), applyShim);
    const customStyleInterface = fs.readFileSync(require.resolve("@webcomponents/shadycss/custom-style-interface.min.js"), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "~shadycss-custom-style-interface.js"), customStyleInterface);
    const scopingShimBrowsers = {
        chrome: "<53",
        edge: "<79",
        edge_mob: "*",
        firefox: "<63",
        safari: "*",
        ie: "*",
        opera: "<40"
    };
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
        browsers: scopingShimBrowsers,
        engines: browsers_to_engines_1.browsersToEngines(scopingShimBrowsers),
        hasCustomMatcher: true,
        size: scopingShim.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
    const applyShimBrowsers = {
        chrome: "<53",
        edge: "<79",
        edge_mob: "*",
        firefox: "<63",
        safari: "*",
        ie: "*",
        opera: "<40"
    };
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
        browsers: applyShimBrowsers,
        engines: browsers_to_engines_1.browsersToEngines(applyShimBrowsers),
        hasCustomMatcher: true,
        size: applyShim.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
    const customStyleInterfaceBrowsers = {
        chrome: "<53",
        edge: "<79",
        edge_mob: "*",
        firefox: "<63",
        safari: "*",
        ie: "*",
        opera: "<40"
    };
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
        browsers: customStyleInterfaceBrowsers,
        engines: browsers_to_engines_1.browsersToEngines(customStyleInterfaceBrowsers),
        hasCustomMatcher: true,
        size: customStyleInterface.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
async function generateCustomElements(mapping) {
    let src = fs.readFileSync(require.resolve("@webcomponents/custom-elements"), "utf-8");
    // Reflect.construct is a depedency from core-js needed when Sub/Superclasses are transpiled by Babel.
    // Babel does not detect this correctly.
    // Injecting usage of Reflect.construct fixes this.
    const reflectHack = `;(function(){ try { var _reflectConstructHack = Reflect.construct } catch(err) {} })();\n`;
    src = reflectHack + src;
    fs.writeFileSync(path.join(modulesDir, "~custom-elements.js"), src);
    const browsers = {
        chrome: "<67",
        edge: "<79",
        edge_mob: "*",
        firefox: "<63",
        safari: "<11",
        ie: "*",
        opera: "<64",
        op_mob: "<46",
        op_mini: "*",
        samsung_mob: '<8'
    };
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
        browsers: browsers,
        engines: browsers_to_engines_1.browsersToEngines(browsers),
        hasCustomMatcher: true,
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
//# sourceMappingURL=generate-webcomponents.js.map