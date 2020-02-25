install:
	yarn
	yarn bootstrap

generate: yarn
	(cd packages/core-web-generator && yarn build)

build-example: yarn
	(cd packages/core-web-example && yarn build)

version: yarn
	yarn lerna version --no-git-tag-version --no-push

publish: yarn
	yarn lerna publish from-package --yes

.PHONY: yarn $(MAKECMDGOALS)
