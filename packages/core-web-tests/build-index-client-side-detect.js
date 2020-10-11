const fs = require('fs');
const { clientSideDetect } = require('@mrhenry/core-web');

main();

function main() {
	const detectors = [
		detectorTemplate({
			name: 'modern',
			browsers: {
				chrome: '80',
				firefox: '76',
				opera: '70',
				safari: '13',
			}
		}),
		detectorTemplate({
			name: 'main',
			browsers: {
				chrome: '56',
				edge: '18',
				firefox: '40',
				safari: '10',
			}
		}),
		detectorTemplate({
			name: 'old',
			browsers: {
				opera: '71'
			}
		}),
		detectorTemplate({
			name: 'safari-latest',
			browsers: {
				chrome: '31',
				firefox: '26',
				edge: '12',
				opera: '26',
				safari: '6',
				ie: '11'
			}
		}),
		detectorTemplate({
			name: 'ancient',
			browsers: {
				ie: '8',
			}
		}),
	].join('\n\n');

	fs.writeFileSync(
		process.cwd() + '/index-client-side-detect.html',
		indexTemplate(detectors)
	);	
}

function detectorTemplate(opts) {
	return `
	if ${clientSideDetect(opts.browsers)} {
		var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
		var script = window.document.createElement( 'script' );
		script.src = '/dist/non-interactive.bundle-${opts.name}.js';
		ref.parentNode.insertBefore( script, ref );

		var qunitEl = window.document.getElementById( 'qunit' );
		var name = window.document.createElement( 'p' );
		name.innerHTML = '${opts.name}';
		qunitEl.parentNode.insertBefore( name, qunitEl );
		
		return;
	}
`;
}
		
function indexTemplate(detectors) {
	return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>QUnit</title>
		<link
			rel="stylesheet"
			href="qunit-2.9.2.css"
		/>
	</head>
	<body>
		<ul>
			<li><a href="/">Overview</a></li>
			<li><a href="/index-main.html">Main</a></li>
			<li><a href="/index-client-side-detect.html">Client Side Detect</a></li>
		</ul>

		<div id="qunit"></div>
		<div id="qunit-fixture"></div>
		<script src="qunit-2.9.2.js"></script>
		<script>(function(){${detectors}}());</script>
	</body>
</html>
`;
}
