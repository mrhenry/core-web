const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const targets = require('./targets');
const fs = require('fs');
const path = require('path');

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

	for (const target of targets) {
		await postcss([
			postcssImport({
				root: './lib/css'
			}),
			postcssPresetEnv({
				stage: 1,
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
				},
			}),
			cssnano(),
		]).process(css, {
			map: {
				inline: false,
			},
			from: './lib/css/index.css',
			to: `./dist/css/index.${contentHash}.${target.name}.css`
		}).then((result) => {
			if (!fs.existsSync(path.join(__dirname, './dist/css'))) {
				fs.mkdirSync(path.join(__dirname, './dist/css'), {recursive: true});
			}
			
			fs.writeFileSync(`./dist/css/index.${contentHash}.${target.name}.css`, result.css);
			if (result.map) {
				fs.writeFileSync(`./dist/css/index.${contentHash}.${target.name}.css.map`, result.map.toString());
			}
		});
	}
});
