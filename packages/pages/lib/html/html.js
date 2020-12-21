// Tagged template literal which also triggers syntax help.
function html(strings, ...keys) {
	return strings.flatMap((s, index) => {
		return [s, keys[index] || ''];
	}).join('');
}

module.exports = html;
