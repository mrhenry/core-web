import * as sources from "polyfill-library/lib/sources.js";
import * as vm from 'vm';
import * as fs from 'fs';

export async function getIntlTimeZoneOptionsExpressionCandidates(): Promise<Array<string>> {
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

async function extractTimeZoneData(feature: string): Promise<{zones?: Array<string>} | null> {
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
	return ctx.result as ({ zones?: Array<string> } | null);
}

async function streamToString(stream: fs.ReadStream) {
	return new Promise((resolve) => {
		let out = '';

		stream.on('data', (chunk: Buffer) => {
			out += chunk.toString("utf-8");
		});

		stream.on('end', () => {
			resolve(out);
		});
	});
}
