const  html = require('../../html/html');

module.exports = function pageHTML(tables) {
	return html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Compat Data</title>
	<style>
		html {
			font-size: 16px;
		}

		* {
			font-family: monospace;
		}

		table {
			border-spacing: 5px;
			margin-bottom: 30px;
			margin-top: 30px;
		}

		th {
			padding: 12px;
			text-align: right;
		}

		th+th {
			text-align: center;
		}

		td {
			font-size: 0.875rem;
			min-width: 150px;
			padding: 12px 5px;
			text-align: right;
		}

		td+td {
			background-color: #ddfff7;
			border: 1px solid #ddd;
			min-width: 90px;
			text-align: center;
		}

		tr+tr > td+td {
			background-color: #dde4ff;
		}

		.wrapper {
			margin: 100px auto;
			max-width: 1000px;
		}

		.notes {
			margin-bottom: 70px;
			margin-left: 170px;
			max-width: 650px;
		}

		.notes h3 {
			font-size: 0.875rem;
		}

		.notes p {
			font-size: 0.75rem;
		}
	</style>
</head>
<body>
	<div class="wrapper">
		<h1>Core Web : Browser compat data</h1>

		${tables}

		<pre><code style="font-size:10px;">${ (new Date()).toString() }</code></pre>
	</div>
</body>
</html>
`;
}
