const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssBundler = require('@csstools/postcss-bundler');
const postcssMinify = require('@csstools/postcss-minify');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSplitByMedia = require('postcss-split-by-media');
const targets = require('./targets');
const { createHash } = require('crypto');

const cwd = process.cwd();

fs.readFile('./lib/css/index.css', async (err, css) => {
	if (err) {
		console.warn(err);
		process.exit(1);
	}

	const contentHash = await postcss([
			postcssBundler()
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
			postcssBundler(),
			postcssPresetEnv({
				stage: 1,
				minimumVendorImplementations: 0,
				browsers: target.presetEnvBrowsers,
				autoprefixer: {
					grid: false,
					supports: true,
				},
				enableClientSidePolyfills: false,
				preserve: true,
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
				postcssMinify()
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
