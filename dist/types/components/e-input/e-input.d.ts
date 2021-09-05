import { EventEmitter } from '../../stencil-public-runtime';
import { InputSizes } from "../../types";
export declare class EInput {
    outlined: boolean;
    ghost: boolean;
    rounded: boolean;
    size: InputSizes;
    prependIcon: string;
    appendIcon: string;
    placeholder: string;
    type: string;
    value: string | number;
    valueChanged: EventEmitter<string | number>;
    valueChangedHandler(ev: any): void;
    private classes;
    private renderIcon;
    render(): any;
}
