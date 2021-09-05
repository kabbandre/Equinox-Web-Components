/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { AvatarSizes } from "./types";
export namespace Components {
    interface EAvatar {
        "color": string;
        "outlined": boolean;
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
        "indeterminate": boolean;
    }
    interface ECollapse {
    }
    interface EDescription {
    }
    interface EEntity {
    }
    interface EFeedback {
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
    }
    interface EMenu {
    }
    interface EModal {
    }
    interface EPreview {
    }
    interface ERadio {
    }
    interface ESelect {
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
    interface HTMLECollapseElement extends Components.ECollapse, HTMLStencilElement {
    }
    var HTMLECollapseElement: {
        prototype: HTMLECollapseElement;
        new (): HTMLECollapseElement;
    };
    interface HTMLEDescriptionElement extends Components.EDescription, HTMLStencilElement {
    }
    var HTMLEDescriptionElement: {
        prototype: HTMLEDescriptionElement;
        new (): HTMLEDescriptionElement;
    };
    interface HTMLEEntityElement extends Components.EEntity, HTMLStencilElement {
    }
    var HTMLEEntityElement: {
        prototype: HTMLEEntityElement;
        new (): HTMLEEntityElement;
    };
    interface HTMLEFeedbackElement extends Components.EFeedback, HTMLStencilElement {
    }
    var HTMLEFeedbackElement: {
        prototype: HTMLEFeedbackElement;
        new (): HTMLEFeedbackElement;
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
    interface HTMLEModalElement extends Components.EModal, HTMLStencilElement {
    }
    var HTMLEModalElement: {
        prototype: HTMLEModalElement;
        new (): HTMLEModalElement;
    };
    interface HTMLEPreviewElement extends Components.EPreview, HTMLStencilElement {
    }
    var HTMLEPreviewElement: {
        prototype: HTMLEPreviewElement;
        new (): HTMLEPreviewElement;
    };
    interface HTMLERadioElement extends Components.ERadio, HTMLStencilElement {
    }
    var HTMLERadioElement: {
        prototype: HTMLERadioElement;
        new (): HTMLERadioElement;
    };
    interface HTMLESelectElement extends Components.ESelect, HTMLStencilElement {
    }
    var HTMLESelectElement: {
        prototype: HTMLESelectElement;
        new (): HTMLESelectElement;
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
        "e-collapse": HTMLECollapseElement;
        "e-description": HTMLEDescriptionElement;
        "e-entity": HTMLEEntityElement;
        "e-feedback": HTMLEFeedbackElement;
        "e-fieldtree": HTMLEFieldtreeElement;
        "e-icon": HTMLEIconElement;
        "e-input": HTMLEInputElement;
        "e-menu": HTMLEMenuElement;
        "e-modal": HTMLEModalElement;
        "e-preview": HTMLEPreviewElement;
        "e-radio": HTMLERadioElement;
        "e-select": HTMLESelectElement;
        "e-textarea": HTMLETextareaElement;
        "simple-config": HTMLSimpleConfigElement;
    }
}
declare namespace LocalJSX {
    interface EAvatar {
        "color"?: string;
        "outlined"?: boolean;
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
        "indeterminate"?: boolean;
    }
    interface ECollapse {
    }
    interface EDescription {
    }
    interface EEntity {
    }
    interface EFeedback {
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
    }
    interface EMenu {
    }
    interface EModal {
    }
    interface EPreview {
    }
    interface ERadio {
    }
    interface ESelect {
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
        "e-collapse": ECollapse;
        "e-description": EDescription;
        "e-entity": EEntity;
        "e-feedback": EFeedback;
        "e-fieldtree": EFieldtree;
        "e-icon": EIcon;
        "e-input": EInput;
        "e-menu": EMenu;
        "e-modal": EModal;
        "e-preview": EPreview;
        "e-radio": ERadio;
        "e-select": ESelect;
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
            "e-collapse": LocalJSX.ECollapse & JSXBase.HTMLAttributes<HTMLECollapseElement>;
            "e-description": LocalJSX.EDescription & JSXBase.HTMLAttributes<HTMLEDescriptionElement>;
            "e-entity": LocalJSX.EEntity & JSXBase.HTMLAttributes<HTMLEEntityElement>;
            "e-feedback": LocalJSX.EFeedback & JSXBase.HTMLAttributes<HTMLEFeedbackElement>;
            "e-fieldtree": LocalJSX.EFieldtree & JSXBase.HTMLAttributes<HTMLEFieldtreeElement>;
            "e-icon": LocalJSX.EIcon & JSXBase.HTMLAttributes<HTMLEIconElement>;
            "e-input": LocalJSX.EInput & JSXBase.HTMLAttributes<HTMLEInputElement>;
            "e-menu": LocalJSX.EMenu & JSXBase.HTMLAttributes<HTMLEMenuElement>;
            "e-modal": LocalJSX.EModal & JSXBase.HTMLAttributes<HTMLEModalElement>;
            "e-preview": LocalJSX.EPreview & JSXBase.HTMLAttributes<HTMLEPreviewElement>;
            "e-radio": LocalJSX.ERadio & JSXBase.HTMLAttributes<HTMLERadioElement>;
            "e-select": LocalJSX.ESelect & JSXBase.HTMLAttributes<HTMLESelectElement>;
            "e-textarea": LocalJSX.ETextarea & JSXBase.HTMLAttributes<HTMLETextareaElement>;
            "simple-config": LocalJSX.SimpleConfig & JSXBase.HTMLAttributes<HTMLSimpleConfigElement>;
        }
    }
}
