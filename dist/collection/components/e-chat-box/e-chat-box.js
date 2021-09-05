import { Component, Host, h, Prop, Event } from '@stencil/core';
export class EChatBox {
    constructor() {
        this.type = 'text';
        this.placeholder = "Message to...";
        this.outerPrependIcon = "ph-plus";
        this.prependIcon = "ph-smiley-sticker";
        this.appendIcon = "ph-dots-three";
        this.outerAppendIcon = "ph-paper-plane";
        this.backdrop = true;
        this.dark = true;
        this.backdropBlur = "weak";
        this.classes = () => {
            const classes = {
                'e-chat-box': true,
            };
            const setting = {
                style: this.dark ? 'dark' : 'light',
                blur: this.backdropBlur
            };
            if (this.backdrop) {
                classes[`silicon-${setting.style}-${setting.blur}`] = true;
            }
            return Object.assign(Object.assign({}, classes), { [setting.style]: true });
        };
    }
    onOuterPrependClick() {
        this.outerPrependClick.emit('outer-prepend-click');
    }
    onPrependClick() {
        this.prependClick.emit('prepend-click');
    }
    onAppendClick() {
        this.appendClick.emit('append-click');
    }
    onOuterAppendClick() {
        this.outerAppendClick.emit('outer-append-click');
    }
    handleChange(event) {
        const val = event.target.value;
        console.log(val);
        this.value = val;
        this.valueChange.emit(val);
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.classes() },
                h("slot", { name: "outer-prepend" },
                    h("e-btn", { onClick: this.onOuterPrependClick.bind(this), icon: this.outerPrependIcon, size: "sm" })),
                h("slot", { name: "prepend" },
                    h("e-btn", { onClick: this.onPrependClick.bind(this), icon: this.prependIcon, size: "sm" })),
                h("input", { type: this.type, value: this.value, onInput: event => this.handleChange(event), placeholder: this.placeholder }),
                h("slot", { name: "append" },
                    h("e-btn", { onClick: this.onAppendClick.bind(this), icon: this.appendIcon, size: "sm" })),
                h("slot", { name: "outer-append" },
                    h("e-btn", { onClick: this.onOuterAppendClick.bind(this), icon: this.outerAppendIcon, size: "sm" })))));
    }
    static get is() { return "e-chat-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-chat-box.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-chat-box.css"]
    }; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'text'"
        },
        "value": {
            "type": "string",
            "mutable": true,
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
            "attribute": "value",
            "reflect": false
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\"Message to...\""
        },
        "outerPrependIcon": {
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
            "attribute": "outer-prepend-icon",
            "reflect": false,
            "defaultValue": "\"ph-plus\""
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
            "reflect": false,
            "defaultValue": "\"ph-smiley-sticker\""
        },
        "appendIcon": {
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
            "attribute": "append-icon",
            "reflect": false,
            "defaultValue": "\"ph-dots-three\""
        },
        "outerAppendIcon": {
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
            "attribute": "outer-append-icon",
            "reflect": false,
            "defaultValue": "\"ph-paper-plane\""
        },
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
            "reflect": true,
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
            "reflect": true,
            "defaultValue": "true"
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
            "reflect": true,
            "defaultValue": "\"weak\""
        }
    }; }
    static get events() { return [{
            "method": "outerPrependClick",
            "name": "outerPrependClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "prependClick",
            "name": "prependClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "appendClick",
            "name": "appendClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "outerAppendClick",
            "name": "outerAppendClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "valueChange",
            "name": "valueChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
