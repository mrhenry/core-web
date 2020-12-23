const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const targets = require('./targets');
const fs = require('fs');

fs.readFile('./lib/css/index.css', async (err, css) => {
	if (err) {
		console.warn(err);
		process.exit(1);
	}

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
			to: `./dist/index.${target.name}.css`
		}).then(async (result) => {
			await fs.writeFile(`./dist/index.${target.name}.css`, result.css, () => true)
			if (result.map) {
				await fs.writeFile(`./dist/index.${target.name}.css.map`, result.map.toString(), () => true)
			}
		});
	}
});
