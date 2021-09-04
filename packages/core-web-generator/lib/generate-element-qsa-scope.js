"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateElementQsaScope = void 0;
const fs = require("fs");
const path = require("path");
const browsers_to_engines_1 = require("./browsers-to-engines/browsers-to-engines");
const modulesDir = path.resolve(__dirname, "../../core-web/modules");
async function generateElementQsaScope(mapping) {
    const src = fs.readFileSync(path.join(__dirname, '../polyfills/~element-qsa-scope.js'), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "~element-qsa-scope.js"), src);
    const browsers = {
        chrome: "<27",
        edge: "<79",
        firefox: "<32",
        safari: "<7",
        ie: "*",
        opera: "<15"
    };
    mapping.push({
        name: "~element-qsa-scope",
        deps: [
            "document.querySelector",
            "Element",
        ],
        browsers: browsers,
        engines: (0, browsers_to_engines_1.browsersToEngines)(browsers),
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
exports.generateElementQsaScope = generateElementQsaScope;
;
//# sourceMappingURL=generate-element-qsa-scope.js.map