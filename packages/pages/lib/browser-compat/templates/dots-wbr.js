module.exports = {
	dotsWBR: function dotsWBR(str) {
		return str.split('.').join('.<wbr>');
	},
	dotsZeroWidthSpace: function dotsZeroWidthSpace(str) {
		return str.split('.').join('.​'); /* "&ZeroWidthSpace;" is here trust me */
	}
}

