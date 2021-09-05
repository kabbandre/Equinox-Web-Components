import { Component, Host, h, Prop } from '@stencil/core';
import { getAbbr } from "../../utils/utils";
export class EAvatar {
    constructor() {
        this.size = "md";
        this.color = "#CBD5E0";
        this.classes = () => ({
            'e-avatar': true,
            [this.size]: true
        });
        this.styles = () => ({
            backgroundColor: this.color,
        });
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.classes(), style: this.styles() },
                h("slot", null, getAbbr(this.text)))));
    }
    static get is() { return "e-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-avatar.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-avatar.css"]
    }; }
    static get properties() { return {
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "AvatarSizes",
                "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
                "references": {
                    "AvatarSizes": {
                        "location": "import",
                        "path": "../../types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"md\""
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
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"#CBD5E0\""
        },
        "text": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "text",
            "reflect": false
        }
    }; }
}
