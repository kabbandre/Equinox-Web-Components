import { Component, h, State, Prop } from '@stencil/core';
export class ECollapse {
    constructor() {
        this.openIcon = "ph-plus-circle";
        this.closeIcon = "ph-x-circle";
        this.isOpen = false;
    }
    render() {
        return (h("div", { class: "e-collapse" },
            h("div", { class: "e-collapse-header", onClick: () => this.isOpen = !this.isOpen },
                h("slot", { name: "title" }, this.headerTitle),
                h("e-icon", { size: "24px", icon: this.isOpen ? this.closeIcon : this.openIcon })),
            h("hr", null),
            this.isOpen && (h("div", { class: "e-collapse__text" },
                h("slot", null)))));
    }
    static get is() { return "e-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-collapse.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-collapse.css"]
    }; }
    static get properties() { return {
        "headerTitle": {
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
            "attribute": "header-title",
            "reflect": false
        },
        "openIcon": {
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
            "attribute": "open-icon",
            "reflect": false,
            "defaultValue": "\"ph-plus-circle\""
        },
        "closeIcon": {
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
            "attribute": "close-icon",
            "reflect": false,
            "defaultValue": "\"ph-x-circle\""
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
}
