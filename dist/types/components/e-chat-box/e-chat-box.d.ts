import { EventEmitter } from '../../stencil-public-runtime';
export declare class EChatBox {
    type: string;
    value: string;
    placeholder: string;
    outerPrependIcon: string;
    prependIcon: string;
    appendIcon: string;
    outerAppendIcon: string;
    backdrop: boolean;
    dark: boolean;
    backdropBlur: "weak" | "medium" | "strong";
    private classes;
    outerPrependClick: EventEmitter<string>;
    onOuterPrependClick(): void;
    prependClick: EventEmitter<string>;
    onPrependClick(): void;
    appendClick: EventEmitter<string>;
    onAppendClick(): void;
    outerAppendClick: EventEmitter<string>;
    onOuterAppendClick(): void;
    valueChange: EventEmitter;
    handleChange(event: any): void;
    render(): any;
}
