import { Component, Event, h, Prop } from '@stencil/core';
export class ERadio {
    constructor() {
        this.checked = false;
    }
    valueChangedHandler() {
        this.checked = true;
        this.valueChanged.emit();
    }
    render() {
        return (h("label", { class: "container" },
            h("slot", null, "Eclipse"),
            h("input", { checked: this.checked, onClick: this.valueChangedHandler.bind(this), type: "checkbox" }),
            h("span", { class: "checkmark" })));
    }
    static get is() { return "e-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-radio.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-radio.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false
        },
        "checked": {
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
            "attribute": "checked",
            "reflect": true,
            "defaultValue": "false"
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
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
}
