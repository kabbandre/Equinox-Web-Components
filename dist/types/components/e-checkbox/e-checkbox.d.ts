import { EventEmitter } from '../../stencil-public-runtime';
export declare class ECheckbox {
    checkboxInput: HTMLInputElement;
    value: boolean;
    valueChanged: EventEmitter;
    valueChangedHandler(checked: boolean): void;
    indeterminate: boolean;
    private classes;
    render(): any;
}
