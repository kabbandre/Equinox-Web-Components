import { EventEmitter } from '../../stencil-public-runtime';
declare type ValueType = string | boolean | number;
export declare class ECheckbox {
    checkboxInput: HTMLInputElement;
    value: boolean;
    falseValue: ValueType;
    trueValue: ValueType;
    valueChanged: EventEmitter;
    valueChangedHandler(checked: boolean): void;
    indeterminate: boolean;
    rounded: boolean;
    disabled: boolean;
    type: "checkbox" | "switch";
    private classes;
    connectedCallback(): void;
    componentDidLoad(): void;
    render(): any;
}
export {};
