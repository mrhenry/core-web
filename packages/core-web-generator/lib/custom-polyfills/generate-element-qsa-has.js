import fs from 'node:fs';
import path from "node:path";
import { browsersToEngines } from "../browsers-to-engines/browsers-to-engines.js";
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modulesDir = path.resolve(__dirname, "../../../core-web/modules");
export async function generateElementQsaSHas(mapping) {
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
        engines: browsersToEngines(browsers),
        size: src.length,
        isAlias: false,
        providedByCoreWeb: true,
    });
}
;
//# sourceMappingURL=generate-element-qsa-has.js.map