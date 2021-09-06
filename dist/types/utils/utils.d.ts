export declare function format(first: string, middle: string, last: string): string;
export declare const getAbbr: (str: any) => string;
export declare const deserializeJSON: (json: any, component?: string) => any;
export declare const findPath: (object: any, name: any, value: any, currentPath?: string[]) => string[];
export declare const setPath: (object: any, path: string[], value: any) => any;
