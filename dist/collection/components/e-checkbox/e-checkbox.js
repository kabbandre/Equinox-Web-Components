import { Component, Event, h, Prop } from '@stencil/core';
export class ECheckbox {
    constructor() {
        this.value = false;
        this.classes = () => ({
            indeterminate: this.indeterminate,
            container: true
        });
    }
    valueChangedHandler(checked) {
        this.valueChanged.emit(checked);
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
        }
    }; }
    static get events() { return [{
            "method": "valueChanged",
            "name": "checkedChanged",
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
