import { Component, Host, h, State, Prop } from '@stencil/core';
export class EExpand {
    constructor() {
        this.maxHeight = "100px";
        this.openButtonText = "Show more";
        this.hideButtonText = "Show less";
        this.elevation = "6";
        this.isOpen = false;
    }
    render() {
        return (h(Host, null,
            h("div", { class: "expand__content", style: { maxHeight: !this.isOpen ? this.maxHeight : undefined } },
                h("slot", null)),
            h("button", { class: `expand__button elevation-${this.elevation}`, onClick: () => this.isOpen = !this.isOpen },
                h("slot", { name: "text" }, this.isOpen ? this.hideButtonText : this.openButtonText),
                h("e-icon", { icon: "ph-chevron-up" }))));
    }
    static get is() { return "e-expand"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-expand.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-expand.css"]
    }; }
    static get properties() { return {
        "maxHeight": {
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
            "attribute": "max-height",
            "reflect": false,
            "defaultValue": "\"100px\""
        },
        "openButtonText": {
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
            "attribute": "open-button-text",
            "reflect": false,
            "defaultValue": "\"Show more\""
        },
        "hideButtonText": {
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
            "attribute": "hide-button-text",
            "reflect": false,
            "defaultValue": "\"Show less\""
        },
        "elevation": {
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
            "attribute": "elevation",
            "reflect": false,
            "defaultValue": "\"6\""
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
}
