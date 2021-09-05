import { Component, h, Prop } from '@stencil/core';
export class ECheckbox {
    constructor() {
        this.classes = () => ({
            indeterminate: this.indeterminate,
            container: true
        });
    }
    render() {
        return (h("label", { class: this.classes() },
            h("slot", null),
            h("input", { type: "checkbox" }),
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
        }
    }; }
}
