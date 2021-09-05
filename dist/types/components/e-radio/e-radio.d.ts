import { EventEmitter } from '../../stencil-public-runtime';
export declare class ERadio {
    name: string;
    value: any;
    valueChanged: EventEmitter;
    valueChangedHandler(ev: any): void;
    render(): any;
}
