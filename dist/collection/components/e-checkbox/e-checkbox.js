import { Component, Event, h, Prop } from '@stencil/core';
export class ECheckbox {
    constructor() {
        this.classes = () => ({
            indeterminate: this.indeterminate,
            container: true
        });
    }
    inputHandler(ev) {
        this.value = ev.target ? ev.target.value : null;
        this.input.emit(this.value);
    }
    render() {
        return (h("label", { class: this.classes() },
            h("slot", null),
            h("input", { onInput: (ev) => this.inputHandler(ev), type: "checkbox" }),
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
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "input",
            "name": "input",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            }
        }]; }
}
