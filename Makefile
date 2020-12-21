install:
	yarn
	yarn bootstrap

generate: yarn
	(cd packages/core-web-generator && yarn build)

build-pages: yarn
	mkdir -p packages/pages/dist/browser-compat
	echo "console.log('2020')" > packages/pages/dist/index.2020.js
	echo "console.log('2019')" > packages/pages/dist/index.2019.js
	echo "console.log('2018')" > packages/pages/dist/index.2018.js
	echo "console.log('2014')" > packages/pages/dist/index.2014.js
	echo "console.log('legacy')" > packages/pages/dist/index.legacy.js
	(cd packages/pages && yarn build)

build-example: yarn
	(cd packages/core-web-example && yarn build)

build-tests: yarn
	(cd packages/core-web-tests && yarn build)

run-tests: yarn
	(cd packages/core-web-tests && yarn browserstack-runner)

build-watch-tests: yarn
	yarn --cwd packages/core-web-tests webpack -w

version: yarn
	yarn lerna version --no-git-tag-version --no-push

publish: yarn
	yarn lerna publish from-package --yes

.PHONY: yarn $(MAKECMDGOALS)
