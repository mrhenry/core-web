packages := ./ ./packages/babel-plugin-core-web ./packages/core-web ./packages/core-web-example ./packages/core-web-generator ./packages/core-web-tests ./packages/pages ./packages/pages-worker

node_modules: ./package-lock.json
	rm -rf ./node_modules
	npm install
	touch ./node_modules

install: node_modules

generate: install
	(cd packages/core-web-generator && npm run build)
	(cd packages/core-web && npm run build)

build-example: install
	(cd packages/core-web-example && npm run build)

build-tests: install
	(cd packages/core-web-tests && npm run build)

build-pages: install
	(cd packages/pages && npm run build)

build-pages-worker: install
	(cd packages/pages-worker && npm run build)

build: install generate build-example build-tests build-pages build-pages-worker

run-tests: install
	(cd packages/core-web-generator && npm run test)
	(cd packages/babel-plugin-core-web && npm run test)
	(cd packages/core-web-tests && npm run browserstack-runner)

run-tests-e2e: build-pages
	(cd ./.github/bin/browserstack-proxy && sh ./run-e2e.sh)

watch-tests: install
	(cd packages/core-web-tests && npm run watch)

version-patch: $(packages)

$(packages): install
	(cd $@ && npm version patch --no-git-tag-version)

publish: install
	(cd ./packages/core-web && npm publish)
	(cd ./packages/babel-plugin-core-web && npm publish)

.PHONY: $(MAKECMDGOALS)
