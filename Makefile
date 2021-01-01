install:
	npm install

generate: install
	(cd packages/core-web-generator && npm run build)
	(cd packages/core-web && npm run build)

build-pages: install
	mkdir -p packages/pages/dist/browser-compat
	(cd packages/pages && npm run build)

build-example: install
	(cd packages/core-web-example && npm run build)

build-tests: install
	(cd packages/core-web-tests && npm run build)

run-tests: install
	(cd packages/core-web-generator && npm run test)
	(cd packages/core-web-tests && npm run browserstack-runner)

watch-tests: install
	(cd packages/core-web-tests && npm run watch)

version: install
	yarn lerna version --no-git-tag-version --no-push

publish: install
	yarn lerna publish from-package --yes

.PHONY: $(MAKECMDGOALS)
