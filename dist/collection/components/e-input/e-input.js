import { Component, Host, h, Prop, Event } from '@stencil/core';
export class EInput {
    constructor() {
        this.size = "md";
        this.type = "text";
        this.classes = () => ({
            outlined: this.outlined,
            ghost: this.ghost,
            rounded: this.rounded,
            [this.size]: true,
            ['input-wrapper']: true
        });
        this.renderIcon = (icon) => (icon && h("e-icon", { size: "18px", icon: icon }));
    }
    valueChangedHandler(ev) {
        this.value = ev.target ? ev.target.value : null;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.classes() },
                h("slot", { name: "prepend-icon" }, this.renderIcon(this.prependIcon)),
                h("input", { placeholder: this.placeholder, value: this.value, onInput: (ev) => this.valueChangedHandler(ev) }),
                h("slot", { name: "append-icon" }, this.renderIcon(this.appendIcon)))));
    }
    static get is() { return "e-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-input.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-input.css"]
    }; }
    static get properties() { return {
        "outlined": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "outlined",
            "reflect": false
        },
        "ghost": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "ghost",
            "reflect": false
        },
        "rounded": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "rounded",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "InputSizes",
                "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
                "references": {
                    "InputSizes": {
                        "location": "import",
                        "path": "../../types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"md\""
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "prepend-icon",
            "reflect": false
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "append-icon",
            "reflect": false
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"text\""
        },
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "string | number",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "valueChanged",
            "name": "valueChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string | number",
                "resolved": "number | string",
                "references": {}
            }
        }]; }
}
