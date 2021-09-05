import { EventEmitter } from '../../stencil-public-runtime';
declare type Tab = {
    title?: string;
    key?: string;
    disabled?: boolean;
};
export declare class ETabs {
    tabs: string;
    componentWillLoad(): void;
    parseTabsProp(newValue: string): void;
    deserializedTabs: Tab[];
    selectedTab: Tab;
    tabSelected: EventEmitter<Tab>;
    tabSelectedHandler(tab: Tab): void;
    render(): any;
}
export {};
