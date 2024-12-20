"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateElementQsaSHas = generateElementQsaSHas;
const fs = require("fs");
const path = require("path");
const browsers_to_engines_1 = require("../browsers-to-engines/browsers-to-engines");
const modulesDir = path.resolve(__dirname, "../../../core-web/modules");
async function generateElementQsaSHas(mapping) {
    const src = fs.readFileSync(path.join(__dirname, '../../polyfills/~element-qsa-has.js'), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "~element-qsa-has.js"), src);
    const browsers = {
        chrome: "<105",
        edge: "<105",
        firefox: "*",
        safari: "15.4",
        ie: "*",
        opera: "<91"
    };
    mapping.push({
        name: "~element-qsa-has",
        deps: [
            "~element-qsa-scope",
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
;
//# sourceMappingURL=generate-element-qsa-has.js.map