const { createCanvas, loadImage } = require('canvas');
const path = require('path');

let logo;
let logoLoader = async () => {
	if (logo) {
		return logo;
	}

	return await loadImage(path.join(__dirname, 'logo.png'));
}

module.exports = {
	polyfillCardOGImage: polyfillCardOGImage,
	allPolyfillsCardOGImage: allPolyfillsCardOGImage,
	coreWebCardOGImage: coreWebCardOGImage
};

async function polyfillCardOGImage(feature) {
	const canvas = createCanvas(1200, 628);
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = '#ffd41b';
	ctx.fillRect(0, 0, 1200, 628);

	ctx.strokeStyle = '#000';
	ctx.fillStyle = '#000';
	const nameFontSize = Math.min(80, Math.round(80 * (1 / feature.name.length * 21)));
	ctx.font = `${nameFontSize}px monospace`;

	ctx.fillText(cleanName(feature.name), 75, 125, 900);
	ctx.font = '50px monospace';
	ctx.fillText('polyfill', 75, 225);

	ctx.font = '50px monospace';
	ctx.fillText('core-web', 75, 538);

	ctx.font = '50px monospace';
	if (feature.coreWeb.size < 1024) {
		const kbSize = `${feature.coreWeb.size}b`;
		const kbSizeWidth = ctx.measureText(kbSize).width;
		ctx.fillText(kbSize, 1200 - (75 + kbSizeWidth), 538);
	} else {
		const kbSize = `${Math.round(feature.coreWeb.size / 1024)}kb`;
		const kbSizeWidth = ctx.measureText(kbSize).width;
		ctx.fillText(kbSize, 1200 - (75 + kbSizeWidth), 538);
	}

	const logoImage = await logoLoader();
	ctx.drawImage(logoImage, 1200 - (75 + 80), 75, 80, 80);
	
	return canvas.toBuffer('image/jpeg');
}

async function allPolyfillsCardOGImage() {
	const canvas = createCanvas(1200, 628);
	const ctx = canvas.getContext('2d');

	const title = 'All polyfills'

	ctx.fillStyle = '#ffd41b';
	ctx.fillRect(0, 0, 1200, 628);

	ctx.strokeStyle = '#000';
	ctx.fillStyle = '#000';
	const nameFontSize = Math.min(80, Math.round(80 * (1 / title.length * 21)));
	ctx.font = `${nameFontSize}px monospace`;

	ctx.fillText(title, 75, 125, 900);

	ctx.font = '50px monospace';
	ctx.fillText('core-web', 75, 538);

	const logoImage = await logoLoader();
	ctx.drawImage(logoImage, 1200 - (75 + 80), 75, 80, 80);
	
	return canvas.toBuffer('image/jpeg');
}

async function coreWebCardOGImage() {
	const canvas = createCanvas(1200, 628);
	const ctx = canvas.getContext('2d');

	const title = 'Automatically import polyfills'

	ctx.fillStyle = '#ffd41b';
	ctx.fillRect(0, 0, 1200, 628);

	ctx.strokeStyle = '#000';
	ctx.fillStyle = '#000';
	const nameFontSize = Math.min(80, Math.round(80 * (1 / title.length * 21)));
	ctx.font = `${nameFontSize}px monospace`;

	ctx.fillText(title, 75, 125, 900);

	ctx.font = '50px monospace';
	ctx.fillText('core-web', 75, 538);

	const logoImage = await logoLoader();
	ctx.drawImage(logoImage, 1200 - (75 + 80), 75, 80, 80);
	
	return canvas.toBuffer('image/jpeg');
}

function cleanName(str) {
	let out = str;
	if (out.indexOf('Console.') === 0) {
		out = out.replace('Console.', 'console.');
	}

	if (out.indexOf('Window.') === 0 && out.indexOf('.prototype.') === -1) {
		out = out.replace('Window.', 'window.');
	}

	if (out.indexOf('Document.') === 0 && out.indexOf('.prototype.') === -1) {
		out = out.replace('Document.', 'document.');
	}

	if (out.indexOf('Navigator.') === 0 && out.indexOf('.prototype.') === -1) {
		out = out.replace('Navigator.', 'navigator.');
	}

	if (out.indexOf('Performance.') === 0) {
		out = out.replace('Performance.', 'performance.');
	}

	return out;
}
