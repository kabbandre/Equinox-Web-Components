import { Component, Host, h, Prop } from '@stencil/core';
export class EProgress {
    constructor() {
        this.bgColor = "var(--purple-100)";
        this.barColor = "var(--purple-400)";
        this.value = 0;
        this.maxValue = 100;
        this.height = "4px";
        this.width = "260px";
        this.outerStyle = () => ({
            background: this.bgColor,
            height: this.height,
            width: this.width
        });
        this.innerStyle = () => ({
            background: this.barColor,
            width: `${this.value}%`,
            height: '100%'
        });
    }
    render() {
        return (h(Host, null,
            h("div", { style: this.outerStyle() },
                h("div", { style: this.innerStyle() }))));
    }
    static get is() { return "e-progress"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bgColor": {
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
            "attribute": "bg-color",
            "reflect": false,
            "defaultValue": "\"var(--purple-100)\""
        },
        "barColor": {
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
            "attribute": "bar-color",
            "reflect": false,
            "defaultValue": "\"var(--purple-400)\""
        },
        "value": {
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
                "text": ""
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        },
        "maxValue": {
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
                "text": ""
            },
            "attribute": "max-value",
            "reflect": false,
            "defaultValue": "100"
        },
        "height": {
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
            "attribute": "height",
            "reflect": false,
            "defaultValue": "\"4px\""
        },
        "width": {
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
            "attribute": "width",
            "reflect": false,
            "defaultValue": "\"260px\""
        }
    }; }
}
