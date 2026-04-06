import fs from 'node:fs';
import path from "node:path";
import { browsersToEngines } from "../browsers-to-engines/browsers-to-engines.js";
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modulesDir = path.resolve(__dirname, "../../../core-web/modules");
export async function generateElementQsaScope(mapping) {
    const src = fs.readFileSync(path.join(__dirname, '../../polyfills/~element-qsa-scope.js'), "utf-8");
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
            "Element.prototype.matches",
            "Element.prototype.closest",
        ],
        browsers: browsers,
        engines: browsersToEngines(browsers),
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
;
//# sourceMappingURL=generate-element-qsa-scope.js.map