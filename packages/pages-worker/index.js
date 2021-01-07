const uaParser = import('./vendor-ua-parser/ua_parser_wasm');

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	const url = new URL(request.url);
	const ua = (await uaParser).parse(request.headers.get('User-Agent') || '');

	if (url.pathname === '/.ua') {
		return new Response(JSON.stringify(ua), { headers: { 'content-type': 'application/json' } });
	}

	try {
		const resp = await fetch('https://mrhenry.github.io/core-web' + url.pathname);

		let pageTarget = null;

		return new HTMLRewriter()
			.on('meta[name="ua-targets"]', {
				element(element) {
					const targets = (element.getAttribute('content') || '').split(' ');

					for (let target of targets) {
						target = Number(target);
						if (Number.isNaN(target)) { continue; }
						if (target > 0 && target <= ua.estimated_year_of_release) {
							pageTarget = Math.max(pageTarget, target);
						}
					}
				},
			})
			.on('[ua-target]', {
				element(element) {
					const target = element.getAttribute('ua-target');
					if (!pageTarget && target === 'fallback') {
						// keep fallbacks even when there isn't a matching target
						return;
					}

					if (!pageTarget) {
						element.remove();
						return;
					}

					if (Number(target) !== pageTarget) {
						element.remove();
						return;
					}
				},
			})
			.onDocument({
				end(end) {
					let info = JSON.stringify({ ua, pageTarget });
					end.append(`<!-- target: ${info} -->`, { html: true });
				}
			})
			.transform(resp);
	} catch (error) {
		return new Response(error.message);
	}
}


