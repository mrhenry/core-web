"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCryptoRandomUUID = void 0;
const fs = require("fs");
const path = require("path");
const browsers_to_engines_1 = require("../browsers-to-engines/browsers-to-engines");
const modulesDir = path.resolve(__dirname, "../../../core-web/modules");
async function generateCryptoRandomUUID(mapping) {
    const src = fs.readFileSync(path.join(__dirname, '../../polyfills/crypto.randomUUID.js'), "utf-8");
    fs.writeFileSync(path.join(modulesDir, "crypto.randomUUID.js"), src);
    const browsers = {
        android: "<92",
        chrome: "<92",
        edge: "<92",
        firefox: "<95",
        safari: "<15.3",
        ios_saf: "<15.3",
        ie: ">10",
        opera: "<78"
    };
    mapping.push({
        name: "crypto.randomUUID",
        deps: [],
        browsers: browsers,
        engines: (0, browsers_to_engines_1.browsersToEngines)(browsers),
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
exports.generateCryptoRandomUUID = generateCryptoRandomUUID;
;
//# sourceMappingURL=generate-crypto-randomuuid.js.map