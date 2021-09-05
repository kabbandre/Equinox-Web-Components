import { Component, Host, h, Prop } from '@stencil/core';
export class ECard {
    constructor() {
        this.backdrop = true;
        this.backdropBlur = "weak";
        this.classes = () => {
            if (this.backdrop) {
                const setting = {
                    style: this.dark ? 'dark' : 'light',
                    blur: this.backdropBlur
                };
                return {
                    [`silicon-${setting.style}-${setting.blur}`]: true,
                    'e-card': true
                };
            }
            else {
                return {};
            }
        };
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.classes() },
                h("slot", null))));
    }
    static get is() { return "e-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-card.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-card.css"]
    }; }
    static get properties() { return {
        "backdrop": {
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
            "attribute": "backdrop",
            "reflect": false,
            "defaultValue": "true"
        },
        "dark": {
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
            "attribute": "dark",
            "reflect": false
        },
        "backdropBlur": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"weak\" | \"medium\" | \"strong\"",
                "resolved": "\"medium\" | \"strong\" | \"weak\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "backdrop-blur",
            "reflect": false,
            "defaultValue": "\"weak\""
        }
    }; }
}
