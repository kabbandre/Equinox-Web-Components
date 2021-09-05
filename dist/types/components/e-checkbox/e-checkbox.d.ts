import { EventEmitter } from '../../stencil-public-runtime';
export declare class ECheckbox {
    indeterminate: boolean;
    value: boolean;
    input: EventEmitter<boolean>;
    inputHandler(ev: any): void;
    private classes;
    render(): any;
}
