import { EventEmitter } from '../../stencil-public-runtime';
export declare class ERadio {
    value: string;
    checked: boolean;
    valueChanged: EventEmitter<void>;
    valueChangedHandler(): void;
    render(): any;
}
