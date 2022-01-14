const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const targets = require('./targets');
const fs = require('fs');
const path = require('path');
const postcssSplitByMedia = require('postcss-split-by-media');

const { createHash } = require('crypto');

fs.readFile('./lib/css/index.css', async (err, css) => {
	if (err) {
		console.warn(err);
		process.exit(1);
	}

	const contentHash = await postcss([
		postcssImport({
				root: './lib/css'
			}),
		]).process(css, {
			map: false,
			from: './lib/css/index.css',
		}).then((result) => {
			const hash = createHash('sha256');

			hash.update(result.css);
			return hash.copy().digest('hex').slice(0, 20);
		});

	if (!fs.existsSync(path.join(__dirname, './dist/css'))) {
		fs.mkdirSync(path.join(__dirname, './dist/css'), {recursive: true});
	}
	
	for (const target of targets) {
		let manifest = undefined;

		const mainResult = await postcss([
			postcssImport({
				root: './lib/css'
			}),
			postcssPresetEnv({
				stage: 2,
				browsers: target.presetEnvBrowsers,
				autoprefixer: {
					grid: true,
					supports: false,
				},
				features: {
					'blank-pseudo-class': false, // requires JS
					'focus-visible-pseudo-class': false, // requires JS
					'focus-within-pseudo-class': false, // requires JS
					'has-pseudo-class': false, //  requires JS
					'prefers-color-scheme-query': false, // requires JS
				},
			}),
			postcssSplitByMedia({
				onManifest: (m) => {
					manifest = m;
				}
			})
		]).process(css, {
			map: {
				inline: false,
			},
			from: './lib/css/index.css',
			to: `./dist/css/index.${contentHash}.${target.name}.css`
		});

		fs.writeFileSync(`./dist/css/index.${contentHash}.${target.name}.css`, mainResult.css);
		if (mainResult.map) {
			fs.writeFileSync(`./dist/css/index.${contentHash}.${target.name}.css.map`, mainResult.map.toString());
		}

		fs.writeFileSync(`./dist/css/index.${contentHash}.${target.name}.manifest.json`, JSON.stringify(manifest));

		for (const mediaQuery of Object.keys(manifest)) {
			const info = manifest[mediaQuery];

			const splitResult = await postcss([
				cssnano()
			]).process(fs.readFileSync(`./dist/css/${info.base}`), {
				map: {
					inline: false,
				},
				from: `./dist/css/${info.base}`,
				to: `./dist/css/${info.base}`
			});
			
			fs.writeFileSync(`./dist/css/${info.base}`, splitResult.css);
			if (splitResult.map) {
				fs.writeFileSync(`./dist/css/${info.base}.map`, splitResult.map.toString());
			}
		}

	}
});
