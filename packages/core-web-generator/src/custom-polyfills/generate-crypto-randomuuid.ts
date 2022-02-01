import * as fs from 'fs';
import * as path from "path";
import { browsersToEngines } from "../browsers-to-engines/browsers-to-engines";

const modulesDir = path.resolve(__dirname, "../../../core-web/modules");

export async function generateCryptoRandomUUID(mapping: Array<Feature>) {
	const src = fs.readFileSync(
		path.join(__dirname, '../../polyfills/crypto.randomUUID.js'),
		"utf-8"
	);

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
		engines: browsersToEngines(browsers),
		size: src.length,
		isAlias: false,
		providedByCoreWeb: true,
	});
};
