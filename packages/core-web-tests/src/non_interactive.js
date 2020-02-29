function importAll(r) {
	r.keys().forEach(r);
}

// eslint-disable-next-line no-undef, no-useless-escape
importAll(require.context('./', true, /test_[^\/]+\.js$/));
