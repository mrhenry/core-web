declare type Feature = {
    name: string;
    browsers: Record<string, string>;
    engines: Record<string, string>;
    deps: Array<string>;
    isAlias: boolean;
    size: number;
    providedByCoreWeb: boolean;
};
declare type FeatureAlias = {
    name: string;
    entries: Array<string>;
};
