import * as fs from 'fs';
import * as path from "path";
import { browsersToEngines } from "../browsers-to-engines/browsers-to-engines";

const modulesDir = path.resolve(__dirname, "../../../core-web/modules");

export async function generateElementQsaScope(mapping: Array<Feature>) {
	const src = fs.readFileSync(
		path.join(__dirname, '../../polyfills/~element-qsa-scope.js'),
		"utf-8"
	);

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
		engines: browsersToEngines(browsers),
		size: src.length,
		isAlias: false,
		providedByCoreWeb: true,
	});
};
