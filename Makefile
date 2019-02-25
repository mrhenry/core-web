install:
	yarn
	yarn bootstrap

generate: yarn
	(cd packages/core-web-generator && yarn build)

build-example: yarn
	(cd packages/core-web-example && yarn build)

.PHONY: yarn $(MAKECMDGOALS)
