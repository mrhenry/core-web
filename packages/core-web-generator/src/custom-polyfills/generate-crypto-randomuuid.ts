import fs from 'node:fs';
import path from "node:path";
import { browsersToEngines } from "../browsers-to-engines/browsers-to-engines.js";
import { Feature } from '../types/index.js';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
