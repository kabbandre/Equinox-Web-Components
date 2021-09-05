import { Component, h, Prop } from '@stencil/core';
export class EIcon {
    constructor() {
        /**
         * Size of the icon
         */
        this.size = "inherit";
    }
    render() {
        const { color, size: fontSize } = this;
        return h("i", { class: this.icon, style: { color, fontSize } });
    }
    static get is() { return "e-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-icon.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-icon.css"]
    }; }
    static get properties() { return {
        "icon": {
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
                "text": "Icon from Phosphor Icons library"
            },
            "attribute": "icon",
            "reflect": false
        },
        "color": {
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
                "text": "Color of the icon"
            },
            "attribute": "color",
            "reflect": false
        },
        "size": {
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
                "text": "Size of the icon"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"inherit\""
        }
    }; }
}
