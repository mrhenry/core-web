type MappingItem = {
	// Feature name.
	name: string

	// Browsers that do not support the feature natively.
	browsers: Record<string, string>
	// Engines that do not support the feature natively.
	engines: Record<string, string>
	// Feature dependencies.
	deps: Array<string>

	// Feature is an alias and does not provide code.
	isAlias: boolean
	// Size of the feature code.
	size: number
	// If the feature has a custom matcher for babel.
	hasCustomMatcher: boolean
	// If the polyfill was added in core-web and not upstream in polyfill-library.
	providedByCoreWeb: boolean
}

type AliasItem = {
	// Feature name.
	name: string
	// Aliases for the feature.
	entries: Array<string>
}
