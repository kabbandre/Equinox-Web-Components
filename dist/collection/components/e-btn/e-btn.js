import { Component, h, Prop } from '@stencil/core';
export class EBtn {
    constructor() {
        /**
         * Button size
         */
        this.size = "xs";
        /**
         * Prepend icon
         */
        this.prependIcon = "";
        /**
         * Append icon
         */
        this.appendIcon = "";
        this.classes = () => ({
            rounded: this.rounded,
            disabled: this.disabled,
            icon: !!this.icon,
            [this.size]: true
        });
        this.renderIcon = (icon) => (icon && h("e-icon", { icon: icon }));
        this.renderContent = () => {
            if (this.icon) {
                return (h("e-icon", { icon: this.icon }));
            }
            else {
                return [
                    h("slot", { name: "prepend-icon" }, this.renderIcon(this.prependIcon)),
                    h("slot", null),
                    h("slot", { name: "append-icon" }, this.renderIcon(this.appendIcon))
                ];
            }
        };
    }
    render() {
        return (h("button", { class: this.classes() }, this.renderContent()));
    }
    static get is() { return "e-btn"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-btn.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-btn.css"]
    }; }
    static get properties() { return {
        "rounded": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Make button edges rounded"
            },
            "attribute": "rounded",
            "reflect": false
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Disable button"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Turn button into the icon button. Pass icon code to this attribute."
            },
            "attribute": "icon",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"xll\"",
                "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xll\" | \"xs\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Button size"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"xs\""
        },
        "prependIcon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Prepend icon"
            },
            "attribute": "prepend-icon",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "appendIcon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Append icon"
            },
            "attribute": "append-icon",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
}
