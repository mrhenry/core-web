export declare function names(): string[];
export declare function get(name: string): Feature | undefined;
export declare function has(name: string): boolean;
export declare function required(targets: {
    browsers?: Record<string, string>;
    engines?: Record<string, string>;
}, opts?: {
    debug?: boolean;
}): string[];
