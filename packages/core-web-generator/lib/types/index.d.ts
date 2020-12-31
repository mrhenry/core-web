declare type MappingItem = {
    name: string;
    browsers: Record<string, string>;
    engines: Record<string, string>;
    deps: Array<string>;
    isAlias: boolean;
    size: number;
    hasCustomMatcher: boolean;
    providedByCoreWeb: boolean;
};
declare type AliasItem = {
    name: string;
    entries: Array<string>;
};
