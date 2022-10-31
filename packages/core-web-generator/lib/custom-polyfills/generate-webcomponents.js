"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWebComponents = void 0;
const fs = require("fs");
const path = require("path");
const browsers_to_engines_1 = require("../browsers-to-engines/browsers-to-engines");
const modulesDir = path.resolve(__dirname, "../../../core-web/modules");
async function generateWebComponents(mapping) {
    await generateTemplate(mapping);
    await generateShadyDOM(mapping);
    await generateShadyCSS(mapping);
    await generateCustomElements(mapping);
}
exports.generateWebComponents = generateWebComponents;
;
async function generateTemplate(mapping) {
    const src = fs.readFileSync(require.resolve("@webcomponents/template"), "utf-8").toString().replace(/\/\/# sourceMappingURL.*?\n/, '');
    fs.writeFileSync(path.join(modulesDir, "HTMLTemplateElement.js"), src);
    const browsers = {
        chrome: "<26",
        edge: "<13",
        edge_mob: "<13",
        firefox: "<22",
        firefox_mob: "<22",
        opera: "<15",
        op_mob: "<14",
        op_mini: "*",
        safari: "<8.0",
        ios_saf: "<8.0",
        android: "<4.4",
        samsung_mob: "<1.5",
        ie: "*",
        ie_mob: "*",
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
        engines: (0, browsers_to_engines_1.browsersToEngines)(browsers),
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
async function generateShadyDOM(mapping) {
    const nativeQSA = `\n;(function(){ try { window['ShadyDOM'] = window['ShadyDOM'] || {}; window['ShadyDOM']['querySelectorImplementation'] = window['ShadyDOM']['querySelectorImplementation'] || 'native'; } catch(err) {} })();\n`;
    const src = fs.readFileSync(require.resolve("@webcomponents/shadydom/shadydom.min.js"), "utf-8").toString().replace(/\/\/# sourceMappingURL.*?\n/, '');
    fs.writeFileSync(path.join(modulesDir, "~shadydom.js"), nativeQSA + src);
    const browsers = {
        chrome: "<53",
        edge: "<79",
        edge_mob: "<79",
        firefox: "<63",
        firefox_mob: "<63",
        opera: "<40",
        op_mob: "<41",
        op_mini: "*",
        safari: "<10.0",
        ios_saf: "<10.0",
        android: "<53",
        samsung_mob: "<6.0",
        ie: "*",
        ie_mob: "*",
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
        engines: (0, browsers_to_engines_1.browsersToEngines)(browsers),
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
// TODO : evaluate ShadyCSS
async function generateShadyCSS(mapping) {
    const scopingShim = fs.readFileSync(require.resolve("@webcomponents/shadycss/scoping-shim.min.js"), "utf-8").toString().replace(/\/\/# sourceMappingURL.*?\n/, '');
    fs.writeFileSync(path.join(modulesDir, "~shadycss-scoping-shim.js"), scopingShim);
    const customStyleInterface = fs.readFileSync(require.resolve("@webcomponents/shadycss/custom-style-interface.min.js"), "utf-8").toString().replace(/\/\/# sourceMappingURL.*?\n/, '');
    fs.writeFileSync(path.join(modulesDir, "~shadycss-custom-style-interface.js"), customStyleInterface);
    const scopingShimBrowsers = {
        chrome: "<53",
        edge: "<79",
        edge_mob: "<79",
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
        engines: (0, browsers_to_engines_1.browsersToEngines)(scopingShimBrowsers),
        size: scopingShim.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
    const customStyleInterfaceBrowsers = {
        chrome: "<53",
        edge: "<79",
        edge_mob: "<79",
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
        engines: (0, browsers_to_engines_1.browsersToEngines)(customStyleInterfaceBrowsers),
        size: customStyleInterface.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
async function generateCustomElements(mapping) {
    let src = fs.readFileSync(require.resolve("@webcomponents/custom-elements"), "utf-8").toString().replace(/\/\/# sourceMappingURL.*?\n/, '');
    // Reflect.construct is a dependency from core-js needed when Sub/Superclasses are transpiled by Babel.
    // Babel does not detect this correctly.
    // Injecting usage of Reflect.construct fixes this.
    const reflectHack = `;(function(){ try { var _reflectConstructHack = Reflect.construct } catch(err) {} })();\n`;
    src = reflectHack + src;
    fs.writeFileSync(path.join(modulesDir, "~custom-elements.js"), src);
    const browsers = {
        chrome: "<67",
        edge: "<79",
        edge_mob: "<79",
        firefox: "<63",
        firefox_mob: "<63",
        opera: "<54",
        op_mob: "<48",
        op_mini: "*",
        safari: "<10.1",
        ios_saf: "<10.3",
        android: "<4.4",
        samsung_mob: "<9.0",
        ie: "*",
        ie_mob: "*"
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
        engines: (0, browsers_to_engines_1.browsersToEngines)(browsers),
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
//# sourceMappingURL=generate-webcomponents.js.map