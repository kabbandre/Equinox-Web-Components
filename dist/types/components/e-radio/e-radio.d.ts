import { EventEmitter } from '../../stencil-public-runtime';
export declare class ERadio {
    value: string;
    checked: boolean;
    valueChanged: EventEmitter<string>;
    valueChangedHandler(): void;
    render(): any;
}
