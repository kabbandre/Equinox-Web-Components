import { Component, h, Prop } from '@stencil/core';
export class EChip {
    constructor() {
        this.classes = () => ({
            text: this.text,
            outlined: this.outlined,
            disabled: this.disabled,
            shadow: this.shadow,
            rounded: this.rounded,
        });
        this.styles = () => {
            const styles = {};
            if (this.textColor) {
                styles.color = this.textColor;
            }
            if (this.color) {
                if (this.outlined) {
                    styles.borderColor = this.color;
                }
                if (!this.outlined && !this.shadow && !this.text && !this.disabled) {
                    styles.background = this.color;
                }
            }
            return styles;
        };
        this.renderIcon = (icon) => (icon && h("e-icon", { icon: icon }));
    }
    render() {
        return (h("button", { class: this.classes(), style: this.styles() },
            h("slot", { name: "prepend" }, this.renderIcon(this.prependIcon)),
            h("slot", null),
            h("slot", { name: "append" })));
    }
    static get is() { return "e-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-chip.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-chip.css"]
    }; }
    static get properties() { return {
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
            "reflect": false
        },
        "textColor": {
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
            "attribute": "text-color",
            "reflect": false
        },
        "text": {
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
            "attribute": "text",
            "reflect": false
        },
        "outlined": {
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
            "attribute": "outlined",
            "reflect": false
        },
        "disabled": {
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
            "attribute": "disabled",
            "reflect": false
        },
        "shadow": {
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
            "attribute": "shadow",
            "reflect": false
        },
        "rounded": {
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
            "attribute": "rounded",
            "reflect": false
        },
        "prependIcon": {
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
            "attribute": "prepend-icon",
            "reflect": false
        }
    }; }
}
