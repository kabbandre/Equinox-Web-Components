import { EventEmitter } from '../../stencil-public-runtime';
export declare class ERadioGroup {
    host: any;
    value?: string;
    onValueChange(): void;
    valueChanged: EventEmitter<void>;
    onSelectionChange(event: Event): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    private findNestedRadios;
    render(): any;
}
