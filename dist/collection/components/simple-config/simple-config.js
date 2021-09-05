import { Component, Prop, h } from '@stencil/core';
export class SimpleConfig {
    constructor() {
        /**
         * A simple text field
         */
        this.simpleText = "simple in the band!";
        /**
         * A simple number field
         */
        this.aNumber = 555;
        /**
         * Another number field
         */
        this.bNumber = 46;
        /**
         * A boolean field
         */
        this.isChecked = true;
    }
    render() {
        return (h("dl", null,
            h("dt", null, "We've got:"),
            h("dd", null, this.simpleText),
            h("dt", null, "Backwards down the number line:"),
            h("dd", null, this.aNumber),
            h("dt", null, "Days 'till the coal ran out:"),
            h("dd", null, this.bNumber),
            h("dt", null, "Llama:"),
            h("dd", null, this.isChecked ? 'Taboot Taboot' : '(keep it on press)'),
            h("dt", null, "Time turns elastic:"),
            h("dd", null, this.startDate),
            h("dt", null, "Spewing forth their color:"),
            h("dd", { style: { backgroundColor: this.backgroundColor || 'transparent' } }, this.backgroundColor || '(none)'),
            h("dt", null, "Spectral colors in the void:"),
            h("dd", { style: { backgroundColor: this.poorlyNamedProp || 'transparent' } }, this.poorlyNamedProp || '(none)')));
    }
    static get is() { return "simple-config"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "simpleText": {
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
                "text": "A simple text field"
            },
            "attribute": "simple-text",
            "reflect": false,
            "defaultValue": "\"simple in the band!\""
        },
        "aNumber": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "A simple number field"
            },
            "attribute": "a-number",
            "reflect": false,
            "defaultValue": "555"
        },
        "bNumber": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Another number field"
            },
            "attribute": "b-number",
            "reflect": false,
            "defaultValue": "46"
        },
        "isChecked": {
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
                "text": "A boolean field"
            },
            "attribute": "is-checked",
            "reflect": false,
            "defaultValue": "true"
        },
        "startDate": {
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
                "text": "A date field"
            },
            "attribute": "start-date",
            "reflect": false
        },
        "backgroundColor": {
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
                "text": "A string field which represents a color"
            },
            "attribute": "background-color",
            "reflect": false
        },
        "poorlyNamedProp": {
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
                "text": "A poorly named field which should hold a color value"
            },
            "attribute": "poorly-named-prop",
            "reflect": false
        }
    }; }
}
