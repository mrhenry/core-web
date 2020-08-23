install:
	yarn
	yarn lerna bootstrap

generate: yarn
	(cd packages/core-web-generator && yarn build)

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
