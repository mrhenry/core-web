"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntlTimeZoneOptionsExpressionCandidates = void 0;
const sources = require("polyfill-library/lib/sources.js");
const vm = require("vm");
async function getIntlTimeZoneOptionsExpressionCandidates() {
    const goldenTimeZoneData = await extractTimeZoneData('Intl.DateTimeFormat.~timeZone.golden');
    if (!goldenTimeZoneData || !goldenTimeZoneData.zones) {
        return [];
    }
    return goldenTimeZoneData.zones.flatMap((zone) => {
        const zoneName = zone.split('|')[0];
        if (!zoneName) {
            return [];
        }
        return [
            `new Intl.DateTimeFormat($1, { timeZone: '${zoneName}' })`,
            `$_instance.toLocaleDateString($1, { timeZone: '${zoneName}'})`,
            `$_instance.toLocaleTimeString($1, { timeZone: '${zoneName}'})`,
        ];
    }).filter((x) => {
        return !!x;
    });
}
exports.getIntlTimeZoneOptionsExpressionCandidates = getIntlTimeZoneOptionsExpressionCandidates;
async function extractTimeZoneData(feature) {
    var ctx = {
        result: null,
        require: require
    };
    var sandbox = vm.createContext(ctx);
    var script = new vm.Script(`
 		var Intl = {
 			DateTimeFormat: {
 				__addTZData: function(x) {
 					result = x;
 				}
 			}
 		};
 		${await streamToString(sources.streamPolyfillSource(feature, "raw"))};
 	`);
    script.runInContext(sandbox, { timeout: 1000 });
    return ctx.result;
}
async function streamToString(stream) {
    return new Promise((resolve) => {
        let out = '';
        stream.on('data', (chunk) => {
            out += chunk.toString("utf-8");
        });
        stream.on('end', () => {
            resolve(out);
        });
    });
}
//# sourceMappingURL=generate-intl-timezone-mapping-candidates.js.map