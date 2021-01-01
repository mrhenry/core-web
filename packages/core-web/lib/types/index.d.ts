declare type Feature = {
    name: string;
    browsers: Record<string, string>;
    engines: Record<string, string>;
    deps: Array<string>;
    isAlias: boolean;
    size: number;
    hasCustomMatcher: boolean;
    providedByCoreWeb: boolean;
};
