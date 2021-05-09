const { createCanvas, loadImage } = require('canvas');
const path = require('path');

let logo;
let logoLoader = async () => {
	if (logo) {
		return logo;
	}

	return await loadImage(path.join(__dirname, 'logo.png'));
}

module.exports = async function polyfillCardOGImage(feature) {
	const canvas = createCanvas(1200, 630);
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = '#f0ffff';
	ctx.fillRect(0, 0, 1200, 630);

	ctx.strokeStyle = '#000080';
	ctx.fillStyle = '#000080';
	const nameFontSize = Math.min(80, Math.round(80 * (1 / feature.name.length * 21)));
	ctx.font = `${nameFontSize}px monospace`;

	ctx.fillText(feature.name, 50, 100, 900);
	ctx.font = '50px monospace';
	ctx.fillText('polyfill', 50, 200);

	ctx.font = '50px monospace';
	ctx.fillText('core-web', 50, 565);

	ctx.font = '50px monospace';
	if (feature.coreWeb.size < 1024) {
		const kbSize = `${feature.coreWeb.size}b`;
		const kbSizeWidth = ctx.measureText(kbSize).width;
		ctx.fillText(kbSize, 1200 - (50 + kbSizeWidth), 565);
	} else {
		const kbSize = `${Math.round(feature.coreWeb.size / 1024)}kb`;
		const kbSizeWidth = ctx.measureText(kbSize).width;
		ctx.fillText(kbSize, 1200 - (50 + kbSizeWidth), 565);
	}

	const logoImage = await logoLoader();
	ctx.drawImage(logoImage, 1200 - (50 + 80), 50, 80, 80);
	
	return canvas.toBuffer('image/jpeg');
}
