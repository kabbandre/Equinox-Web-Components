import { Component, Event, h, Prop } from '@stencil/core';
export class ERadio {
    valueChangedHandler(ev) {
        this.value = ev.target ? ev.target.value : null;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (h("label", { class: "container" },
            h("slot", null, "Eclipse"),
            h("input", { name: this.name, onInput: (ev) => this.valueChangedHandler(ev), type: "checkbox" }),
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
        "name": {
            "type": "string",
            "mutable": true,
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
            "attribute": "name",
            "reflect": false
        },
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
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
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
