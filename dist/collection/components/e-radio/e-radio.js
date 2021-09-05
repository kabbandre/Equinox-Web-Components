import { Component, Event, h, Prop } from '@stencil/core';
export class ERadio {
    constructor() {
        this.checked = false;
    }
    valueChangedHandler() {
        this.checked = true;
        this.valueChanged.emit({
            AT_TARGET: 0,
            BUBBLING_PHASE: 0,
            CAPTURING_PHASE: 0,
            NONE: 0,
            bubbles: false,
            cancelBubble: false,
            cancelable: false,
            composed: false,
            composedPath() {
                return [];
            },
            currentTarget: undefined,
            defaultPrevented: false,
            eventPhase: 0,
            initCustomEvent() { },
            initEvent() { },
            isTrusted: false,
            returnValue: false,
            srcElement: undefined,
            target: undefined,
            timeStamp: 0,
            type: "",
            preventDefault() { },
            stopImmediatePropagation() { },
            stopPropagation() { },
            detail: this.value
        });
    }
    render() {
        return (h("label", { class: "container" },
            h("slot", null, "Eclipse"),
            h("input", { checked: this.checked, onClick: this.valueChangedHandler.bind(this), type: "checkbox" }),
            h("span", { class: "checkmark" })));
    }
    static get is() { return "e-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-radio.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-radio.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false
        },
        "checked": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "checked",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "valueChanged",
            "name": "valueChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "CustomEvent",
                "resolved": "CustomEvent<any>",
                "references": {
                    "CustomEvent": {
                        "location": "global"
                    }
                }
            }
        }]; }
}
