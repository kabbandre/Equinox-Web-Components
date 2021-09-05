import { InputSizes } from "../../types";
export declare class EInput {
    outlined: boolean;
    ghost: boolean;
    rounded: boolean;
    size: InputSizes;
    prependIcon: string;
    appendIcon: string;
    placeholder: string;
    value: string;
    private classes;
    private renderIcon;
    render(): any;
}
