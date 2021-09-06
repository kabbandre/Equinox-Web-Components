import { Component, Event, h, Prop } from '@stencil/core';
export class ECheckbox {
    constructor() {
        this.value = false;
        this.falseValue = false;
        this.trueValue = true;
        this.type = "checkbox";
        this.classes = () => ({
            indeterminate: this.indeterminate,
            [this.type]: true,
            rounded: this.rounded,
            disabled: this.disabled,
            container: true
        });
    }
    valueChangedHandler(checked) {
        if (!this.disabled) {
            this.valueChanged.emit(checked ? this.trueValue : this.falseValue);
        }
    }
    connectedCallback() {
        this.valueChangedHandler(this.value);
    }
    componentDidLoad() {
        this.valueChangedHandler(this.value);
    }
    render() {
        return (h("label", { class: this.classes() },
            h("slot", null),
            h("input", { checked: this.value, ref: el => this.checkboxInput = el, onChange: () => this.valueChangedHandler(this.checkboxInput.checked), type: "checkbox" }),
            h("span", { class: "checkmark" })));
    }
    static get is() { return "e-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-checkbox.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-checkbox.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "value",
            "reflect": true,
            "defaultValue": "false"
        },
        "falseValue": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "ValueType",
                "resolved": "boolean | number | string",
                "references": {
                    "ValueType": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "false-value",
            "reflect": true,
            "defaultValue": "false"
        },
        "trueValue": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "ValueType",
                "resolved": "boolean | number | string",
                "references": {
                    "ValueType": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "true-value",
            "reflect": true,
            "defaultValue": "true"
        },
        "indeterminate": {
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
            "attribute": "indeterminate",
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
        "disabled": {
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
            "attribute": "disabled",
            "reflect": false
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"checkbox\" | \"switch\"",
                "resolved": "\"checkbox\" | \"switch\"",
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
            "defaultValue": "\"checkbox\""
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
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
