interface Field {
    id: number;
    name: string;
    icon?: string;
    children?: Field[];
    isOpen?: boolean;
}
export declare class EFieldtree {
    fields: string;
    componentWillLoad(): void;
    parseTabsProp(newValue: string): void;
    deserializedFields: Field[];
    private changeOpen;
    private parseFields;
    render(): any;
}
export {};
