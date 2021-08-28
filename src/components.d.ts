/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
        /**
          * Just a random bool lol
         */
        "test": boolean;
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
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSimpleConfigElement extends Components.SimpleConfig, HTMLStencilElement {
    }
    var HTMLSimpleConfigElement: {
        prototype: HTMLSimpleConfigElement;
        new (): HTMLSimpleConfigElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "simple-config": HTMLSimpleConfigElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
        /**
          * Just a random bool lol
         */
        "test"?: boolean;
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
        "my-component": MyComponent;
        "simple-config": SimpleConfig;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "simple-config": LocalJSX.SimpleConfig & JSXBase.HTMLAttributes<HTMLSimpleConfigElement>;
        }
    }
}
