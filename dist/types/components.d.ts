/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { AvatarSizes, InputSizes } from "./types";
export namespace Components {
    interface EAvatar {
        "color": string;
        "size": AvatarSizes;
        "text"?: string;
    }
    interface EBtn {
        /**
          * Append icon
         */
        "appendIcon"?: string;
        /**
          * Disable button
         */
        "disabled"?: boolean;
        /**
          * Turn button into the icon button. Pass icon code to this attribute.
         */
        "icon"?: string;
        /**
          * Prepend icon
         */
        "prependIcon"?: string;
        /**
          * Make button edges rounded
         */
        "rounded"?: boolean;
        /**
          * Button size
         */
        "size"?: "xs" | "sm" | "md" | "lg" | "xl" | "xll";
    }
    interface ECard {
        "backdrop": boolean;
        "backdropBlur": "weak" | "medium" | "strong";
        "dark": boolean;
    }
    interface EChatBox {
        "appendIcon": string;
        "backdrop": boolean;
        "backdropBlur": "weak" | "medium" | "strong";
        "dark": boolean;
        "outerAppendIcon": string;
        "outerPrependIcon": string;
        "placeholder": string;
        "prependIcon": string;
        "type": string;
        "value": string;
    }
    interface ECheckbox {
        "disabled": boolean;
        "falseValue": ValueType;
        "indeterminate": boolean;
        "rounded": boolean;
        "trueValue": ValueType;
        "type": "checkbox" | "switch";
        "value": boolean;
    }
    interface EChip {
        "color": string;
        "disabled": boolean;
        "outlined": boolean;
        "prependIcon": string;
        "rounded": boolean;
        "shadow": boolean;
        "text": boolean;
        "textColor": string;
    }
    interface ECollapse {
        "closeIcon": string;
        "headerTitle": string;
        "openIcon": string;
    }
    interface EExpand {
        "elevation": string;
        "hideButtonText": string;
        "maxHeight": string;
        "openButtonText": string;
    }
    interface EFieldtree {
    }
    interface EIcon {
        /**
          * Color of the icon
         */
        "color": string;
        /**
          * Icon from Phosphor Icons library
         */
        "icon": string;
        /**
          * Size of the icon
         */
        "size": string;
    }
    interface EInput {
        "appendIcon": string;
        "ghost": boolean;
        "outlined": boolean;
        "placeholder": string;
        "prependIcon": string;
        "rounded": boolean;
        "size": InputSizes;
        "type": string;
        "value": string | number;
    }
    interface EMenu {
    }
    interface EProgress {
        "barColor": string;
        "bgColor": string;
        "height": string;
        "maxValue": number;
        "value": number;
        "width": string;
    }
    interface ERadio {
        "checked": boolean;
        "value": string;
    }
    interface ERadioGroup {
        "value"?: string;
    }
    interface EScroll {
    }
    interface ESelect {
    }
    interface ESnip {
    }
    interface ETabs {
        "tabs": string;
    }
    interface ETextarea {
    }
    interface SimpleConfig {
        /**
          * A simple number field
         */
        "aNumber": number;
        /**
          * Another number field
         */
        "bNumber": number;
        /**
          * A string field which represents a color
         */
        "backgroundColor": string;
        /**
          * A boolean field
         */
        "isChecked": boolean;
        /**
          * A poorly named field which should hold a color value
         */
        "poorlyNamedProp": string;
        /**
          * A simple text field
         */
        "simpleText": string;
        /**
          * A date field
         */
        "startDate": string;
    }
}
declare global {
    interface HTMLEAvatarElement extends Components.EAvatar, HTMLStencilElement {
    }
    var HTMLEAvatarElement: {
        prototype: HTMLEAvatarElement;
        new (): HTMLEAvatarElement;
    };
    interface HTMLEBtnElement extends Components.EBtn, HTMLStencilElement {
    }
    var HTMLEBtnElement: {
        prototype: HTMLEBtnElement;
        new (): HTMLEBtnElement;
    };
    interface HTMLECardElement extends Components.ECard, HTMLStencilElement {
    }
    var HTMLECardElement: {
        prototype: HTMLECardElement;
        new (): HTMLECardElement;
    };
    interface HTMLEChatBoxElement extends Components.EChatBox, HTMLStencilElement {
    }
    var HTMLEChatBoxElement: {
        prototype: HTMLEChatBoxElement;
        new (): HTMLEChatBoxElement;
    };
    interface HTMLECheckboxElement extends Components.ECheckbox, HTMLStencilElement {
    }
    var HTMLECheckboxElement: {
        prototype: HTMLECheckboxElement;
        new (): HTMLECheckboxElement;
    };
    interface HTMLEChipElement extends Components.EChip, HTMLStencilElement {
    }
    var HTMLEChipElement: {
        prototype: HTMLEChipElement;
        new (): HTMLEChipElement;
    };
    interface HTMLECollapseElement extends Components.ECollapse, HTMLStencilElement {
    }
    var HTMLECollapseElement: {
        prototype: HTMLECollapseElement;
        new (): HTMLECollapseElement;
    };
    interface HTMLEExpandElement extends Components.EExpand, HTMLStencilElement {
    }
    var HTMLEExpandElement: {
        prototype: HTMLEExpandElement;
        new (): HTMLEExpandElement;
    };
    interface HTMLEFieldtreeElement extends Components.EFieldtree, HTMLStencilElement {
    }
    var HTMLEFieldtreeElement: {
        prototype: HTMLEFieldtreeElement;
        new (): HTMLEFieldtreeElement;
    };
    interface HTMLEIconElement extends Components.EIcon, HTMLStencilElement {
    }
    var HTMLEIconElement: {
        prototype: HTMLEIconElement;
        new (): HTMLEIconElement;
    };
    interface HTMLEInputElement extends Components.EInput, HTMLStencilElement {
    }
    var HTMLEInputElement: {
        prototype: HTMLEInputElement;
        new (): HTMLEInputElement;
    };
    interface HTMLEMenuElement extends Components.EMenu, HTMLStencilElement {
    }
    var HTMLEMenuElement: {
        prototype: HTMLEMenuElement;
        new (): HTMLEMenuElement;
    };
    interface HTMLEProgressElement extends Components.EProgress, HTMLStencilElement {
    }
    var HTMLEProgressElement: {
        prototype: HTMLEProgressElement;
        new (): HTMLEProgressElement;
    };
    interface HTMLERadioElement extends Components.ERadio, HTMLStencilElement {
    }
    var HTMLERadioElement: {
        prototype: HTMLERadioElement;
        new (): HTMLERadioElement;
    };
    interface HTMLERadioGroupElement extends Components.ERadioGroup, HTMLStencilElement {
    }
    var HTMLERadioGroupElement: {
        prototype: HTMLERadioGroupElement;
        new (): HTMLERadioGroupElement;
    };
    interface HTMLEScrollElement extends Components.EScroll, HTMLStencilElement {
    }
    var HTMLEScrollElement: {
        prototype: HTMLEScrollElement;
        new (): HTMLEScrollElement;
    };
    interface HTMLESelectElement extends Components.ESelect, HTMLStencilElement {
    }
    var HTMLESelectElement: {
        prototype: HTMLESelectElement;
        new (): HTMLESelectElement;
    };
    interface HTMLESnipElement extends Components.ESnip, HTMLStencilElement {
    }
    var HTMLESnipElement: {
        prototype: HTMLESnipElement;
        new (): HTMLESnipElement;
    };
    interface HTMLETabsElement extends Components.ETabs, HTMLStencilElement {
    }
    var HTMLETabsElement: {
        prototype: HTMLETabsElement;
        new (): HTMLETabsElement;
    };
    interface HTMLETextareaElement extends Components.ETextarea, HTMLStencilElement {
    }
    var HTMLETextareaElement: {
        prototype: HTMLETextareaElement;
        new (): HTMLETextareaElement;
    };
    interface HTMLSimpleConfigElement extends Components.SimpleConfig, HTMLStencilElement {
    }
    var HTMLSimpleConfigElement: {
        prototype: HTMLSimpleConfigElement;
        new (): HTMLSimpleConfigElement;
    };
    interface HTMLElementTagNameMap {
        "e-avatar": HTMLEAvatarElement;
        "e-btn": HTMLEBtnElement;
        "e-card": HTMLECardElement;
        "e-chat-box": HTMLEChatBoxElement;
        "e-checkbox": HTMLECheckboxElement;
        "e-chip": HTMLEChipElement;
        "e-collapse": HTMLECollapseElement;
        "e-expand": HTMLEExpandElement;
        "e-fieldtree": HTMLEFieldtreeElement;
        "e-icon": HTMLEIconElement;
        "e-input": HTMLEInputElement;
        "e-menu": HTMLEMenuElement;
        "e-progress": HTMLEProgressElement;
        "e-radio": HTMLERadioElement;
        "e-radio-group": HTMLERadioGroupElement;
        "e-scroll": HTMLEScrollElement;
        "e-select": HTMLESelectElement;
        "e-snip": HTMLESnipElement;
        "e-tabs": HTMLETabsElement;
        "e-textarea": HTMLETextareaElement;
        "simple-config": HTMLSimpleConfigElement;
    }
}
declare namespace LocalJSX {
    interface EAvatar {
        "color"?: string;
        "size"?: AvatarSizes;
        "text"?: string;
    }
    interface EBtn {
        /**
          * Append icon
         */
        "appendIcon"?: string;
        /**
          * Disable button
         */
        "disabled"?: boolean;
        /**
          * Turn button into the icon button. Pass icon code to this attribute.
         */
        "icon"?: string;
        /**
          * Prepend icon
         */
        "prependIcon"?: string;
        /**
          * Make button edges rounded
         */
        "rounded"?: boolean;
        /**
          * Button size
         */
        "size"?: "xs" | "sm" | "md" | "lg" | "xl" | "xll";
    }
    interface ECard {
        "backdrop"?: boolean;
        "backdropBlur"?: "weak" | "medium" | "strong";
        "dark"?: boolean;
    }
    interface EChatBox {
        "appendIcon"?: string;
        "backdrop"?: boolean;
        "backdropBlur"?: "weak" | "medium" | "strong";
        "dark"?: boolean;
        "onAppendClick"?: (event: CustomEvent<string>) => void;
        "onOuterAppendClick"?: (event: CustomEvent<string>) => void;
        "onOuterPrependClick"?: (event: CustomEvent<string>) => void;
        "onPrependClick"?: (event: CustomEvent<string>) => void;
        "onValueChange"?: (event: CustomEvent<any>) => void;
        "outerAppendIcon"?: string;
        "outerPrependIcon"?: string;
        "placeholder"?: string;
        "prependIcon"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface ECheckbox {
        "disabled"?: boolean;
        "falseValue"?: ValueType;
        "indeterminate"?: boolean;
        "onValueChanged"?: (event: CustomEvent<any>) => void;
        "rounded"?: boolean;
        "trueValue"?: ValueType;
        "type"?: "checkbox" | "switch";
        "value"?: boolean;
    }
    interface EChip {
        "color"?: string;
        "disabled"?: boolean;
        "outlined"?: boolean;
        "prependIcon"?: string;
        "rounded"?: boolean;
        "shadow"?: boolean;
        "text"?: boolean;
        "textColor"?: string;
    }
    interface ECollapse {
        "closeIcon"?: string;
        "headerTitle"?: string;
        "openIcon"?: string;
    }
    interface EExpand {
        "elevation"?: string;
        "hideButtonText"?: string;
        "maxHeight"?: string;
        "openButtonText"?: string;
    }
    interface EFieldtree {
    }
    interface EIcon {
        /**
          * Color of the icon
         */
        "color"?: string;
        /**
          * Icon from Phosphor Icons library
         */
        "icon"?: string;
        /**
          * Size of the icon
         */
        "size"?: string;
    }
    interface EInput {
        "appendIcon"?: string;
        "ghost"?: boolean;
        "onValueChanged"?: (event: CustomEvent<string | number>) => void;
        "outlined"?: boolean;
        "placeholder"?: string;
        "prependIcon"?: string;
        "rounded"?: boolean;
        "size"?: InputSizes;
        "type"?: string;
        "value"?: string | number;
    }
    interface EMenu {
    }
    interface EProgress {
        "barColor"?: string;
        "bgColor"?: string;
        "height"?: string;
        "maxValue"?: number;
        "value"?: number;
        "width"?: string;
    }
    interface ERadio {
        "checked"?: boolean;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "value": string;
    }
    interface ERadioGroup {
        "onValueChanged"?: (event: CustomEvent<void>) => void;
        "value"?: string;
    }
    interface EScroll {
    }
    interface ESelect {
    }
    interface ESnip {
    }
    interface ETabs {
        "onTabSelected"?: (event: CustomEvent<Tab>) => void;
        "tabs"?: string;
    }
    interface ETextarea {
    }
    interface SimpleConfig {
        /**
          * A simple number field
         */
        "aNumber"?: number;
        /**
          * Another number field
         */
        "bNumber"?: number;
        /**
          * A string field which represents a color
         */
        "backgroundColor"?: string;
        /**
          * A boolean field
         */
        "isChecked"?: boolean;
        /**
          * A poorly named field which should hold a color value
         */
        "poorlyNamedProp"?: string;
        /**
          * A simple text field
         */
        "simpleText"?: string;
        /**
          * A date field
         */
        "startDate"?: string;
    }
    interface IntrinsicElements {
        "e-avatar": EAvatar;
        "e-btn": EBtn;
        "e-card": ECard;
        "e-chat-box": EChatBox;
        "e-checkbox": ECheckbox;
        "e-chip": EChip;
        "e-collapse": ECollapse;
        "e-expand": EExpand;
        "e-fieldtree": EFieldtree;
        "e-icon": EIcon;
        "e-input": EInput;
        "e-menu": EMenu;
        "e-progress": EProgress;
        "e-radio": ERadio;
        "e-radio-group": ERadioGroup;
        "e-scroll": EScroll;
        "e-select": ESelect;
        "e-snip": ESnip;
        "e-tabs": ETabs;
        "e-textarea": ETextarea;
        "simple-config": SimpleConfig;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "e-avatar": LocalJSX.EAvatar & JSXBase.HTMLAttributes<HTMLEAvatarElement>;
            "e-btn": LocalJSX.EBtn & JSXBase.HTMLAttributes<HTMLEBtnElement>;
            "e-card": LocalJSX.ECard & JSXBase.HTMLAttributes<HTMLECardElement>;
            "e-chat-box": LocalJSX.EChatBox & JSXBase.HTMLAttributes<HTMLEChatBoxElement>;
            "e-checkbox": LocalJSX.ECheckbox & JSXBase.HTMLAttributes<HTMLECheckboxElement>;
            "e-chip": LocalJSX.EChip & JSXBase.HTMLAttributes<HTMLEChipElement>;
            "e-collapse": LocalJSX.ECollapse & JSXBase.HTMLAttributes<HTMLECollapseElement>;
            "e-expand": LocalJSX.EExpand & JSXBase.HTMLAttributes<HTMLEExpandElement>;
            "e-fieldtree": LocalJSX.EFieldtree & JSXBase.HTMLAttributes<HTMLEFieldtreeElement>;
            "e-icon": LocalJSX.EIcon & JSXBase.HTMLAttributes<HTMLEIconElement>;
            "e-input": LocalJSX.EInput & JSXBase.HTMLAttributes<HTMLEInputElement>;
            "e-menu": LocalJSX.EMenu & JSXBase.HTMLAttributes<HTMLEMenuElement>;
            "e-progress": LocalJSX.EProgress & JSXBase.HTMLAttributes<HTMLEProgressElement>;
            "e-radio": LocalJSX.ERadio & JSXBase.HTMLAttributes<HTMLERadioElement>;
            "e-radio-group": LocalJSX.ERadioGroup & JSXBase.HTMLAttributes<HTMLERadioGroupElement>;
            "e-scroll": LocalJSX.EScroll & JSXBase.HTMLAttributes<HTMLEScrollElement>;
            "e-select": LocalJSX.ESelect & JSXBase.HTMLAttributes<HTMLESelectElement>;
            "e-snip": LocalJSX.ESnip & JSXBase.HTMLAttributes<HTMLESnipElement>;
            "e-tabs": LocalJSX.ETabs & JSXBase.HTMLAttributes<HTMLETabsElement>;
            "e-textarea": LocalJSX.ETextarea & JSXBase.HTMLAttributes<HTMLETextareaElement>;
            "simple-config": LocalJSX.SimpleConfig & JSXBase.HTMLAttributes<HTMLSimpleConfigElement>;
        }
    }
}
