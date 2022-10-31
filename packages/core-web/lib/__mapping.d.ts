export const mapping: ({
    name: string;
    deps: string[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    engines: {
        Blink?: undefined;
        EdgeHTML?: undefined;
        Gecko?: undefined;
        Trident?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
    browsers?: undefined;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        android?: undefined;
        ie_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
        ie_mob?: undefined;
        op_mob?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        edge: string;
        edge_mob: string;
        ie: string;
        ie_mob: string;
        safari: string;
        ios_saf: string;
        android?: undefined;
        chrome?: undefined;
        firefox?: undefined;
        firefox_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Trident: string;
        WebKit: string;
        Blink?: undefined;
        Gecko?: undefined;
        Presto?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        bb: string;
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        android?: undefined;
        op_mini?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge_mob?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        ie: string;
        safari: string;
        ios_saf: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        firefox?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Trident: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
        Gecko?: undefined;
        Presto?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        android?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        ie_mob?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        ie: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        firefox?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Trident: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
        Gecko?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        safari: string;
        ios_saf: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        op_mob?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        firefox: string;
        firefox_mob: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        ie?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
        Trident?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        android?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        ie_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        Gecko: string;
        Presto: string;
        WebKit: string;
        EdgeHTML?: undefined;
        Trident?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        android?: undefined;
        ie_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
    };
    engines: {
        Blink: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        op_mini?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
        op_mob?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        edge: string;
        edge_mob: string;
        android?: undefined;
        chrome?: undefined;
        firefox?: undefined;
        firefox_mob?: undefined;
        ie?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Blink?: undefined;
        Gecko?: undefined;
        Trident?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge_mob?: undefined;
        ie_mob?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        safari: string;
        android?: undefined;
        chrome?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        WebKit: string;
        Blink?: undefined;
        Presto?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        bb: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        firefox: string;
        ie: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        firefox: string;
        ie: string;
        ie_mob: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        firefox_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        firefox: string;
        ie: string;
        samsung_mob: string;
        android?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        Gecko: string;
        Trident: string;
        EdgeHTML?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        ie: string;
        android?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        firefox: string;
        ie: string;
        android?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        Gecko: string;
        Trident: string;
        EdgeHTML?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        edge: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        android?: undefined;
        chrome?: undefined;
        edge_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        Trident: string;
        Blink?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        firefox: string;
        firefox_mob: string;
        ie: string;
        safari: string;
        ios_saf: string;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
        Presto?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
        ie?: undefined;
        ie_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        Gecko: string;
        Presto: string;
        WebKit: string;
        EdgeHTML?: undefined;
        Trident?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        ie_mob: string;
        opera: string;
        op_mob: string;
        safari: string;
        ios_saf: string;
        android?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        ie: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        edge?: undefined;
        edge_mob?: undefined;
        firefox?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        samsung_mob?: undefined;
    };
    engines: {
        Blink: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        EdgeHTML?: undefined;
        Gecko?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
        ie_mob?: undefined;
    };
    engines: {
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        Blink?: undefined;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        bb: string;
        chrome: string;
        firefox: string;
        firefox_mob: string;
        ie: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        samsung_mob: string;
        edge?: undefined;
        edge_mob?: undefined;
        ie_mob?: undefined;
    };
    engines: {
        Blink: string;
        Gecko: string;
        Trident: string;
        Presto: string;
        WebKit: string;
        EdgeHTML?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        android: string;
        samsung_mob: string;
        ie: string;
        ie_mob: string;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        Presto: string;
        WebKit: string;
        Trident: string;
        Blink?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        firefox_mob: string;
        opera: string;
        op_mob: string;
        op_mini: string;
        safari: string;
        ios_saf: string;
        android: string;
        samsung_mob: string;
        ie: string;
        ie_mob: string;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        Presto: string;
        WebKit: string;
        Trident: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        edge_mob: string;
        firefox: string;
        safari: string;
        ie: string;
        opera: string;
        android?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        op_mob?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        WebKit: string;
        Trident: string;
        Presto: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        firefox: string;
        safari: string;
        ie: string;
        opera: string;
        android?: undefined;
        edge_mob?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        op_mob?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        EdgeHTML: string;
        Gecko: string;
        WebKit: string;
        Trident: string;
        Presto: string;
        Blink?: undefined;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: string[];
    browsers: {
        chrome: string;
        edge: string;
        firefox: string;
        safari: string;
        ie: string;
        opera: string;
        android?: undefined;
        edge_mob?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        op_mob?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        WebKit: string;
        Trident: string;
        Presto: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    name: string;
    deps: never[];
    browsers: {
        android: string;
        chrome: string;
        edge: string;
        firefox: string;
        safari: string;
        ios_saf: string;
        ie: string;
        opera: string;
        edge_mob?: undefined;
        firefox_mob?: undefined;
        ie_mob?: undefined;
        op_mob?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    engines: {
        Blink: string;
        EdgeHTML: string;
        Gecko: string;
        WebKit: string;
        Trident: string;
        Presto: string;
    };
    size: number;
    isAlias: boolean;
    providedByCoreWeb: boolean;
} | {
    browsers: {
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        edge_mob?: undefined;
        firefox?: undefined;
        firefox_mob?: undefined;
        ie?: undefined;
        ie_mob?: undefined;
        opera?: undefined;
        op_mob?: undefined;
        safari?: undefined;
        ios_saf?: undefined;
        samsung_mob?: undefined;
        op_mini?: undefined;
        bb?: undefined;
    };
    deps: string[];
    engines: {
        Blink?: undefined;
        EdgeHTML?: undefined;
        Gecko?: undefined;
        Trident?: undefined;
        Presto?: undefined;
        WebKit?: undefined;
    };
    isAlias: boolean;
    name: string;
    size: number;
    providedByCoreWeb: boolean;
})[];
