import { EventEmitter } from '../../stencil-public-runtime';
export declare class ECheckbox {
    indeterminate: boolean;
    value: boolean;
    valueChanged: EventEmitter<boolean>;
    valueChangedHandler(ev: any): void;
    private classes;
    render(): any;
}
