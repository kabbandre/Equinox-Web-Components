import { Component, Element, Event, h, Listen, Prop, Watch, } from '@stencil/core';
export class ERadioGroup {
    onValueChange() {
        const radios = this.findNestedRadios();
        radios && radios.forEach(radio => {
            radio.checked = radio.value === this.value;
        });
    }
    onSelectionChange(event) {
        const radio = event.target;
        // @ts-ignore
        this.value = radio.value;
    }
    connectedCallback() {
        this.onValueChange();
    }
    componentDidLoad() {
        this.onValueChange();
    }
    findNestedRadios() {
        const slot = this.host.shadowRoot.querySelector('slot');
        return slot && slot.assignedElements();
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "e-radio-group"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": true,
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
            "attribute": "value",
            "reflect": false
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
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "onValueChange"
        }]; }
    static get listeners() { return [{
            "name": "valueChanged",
            "method": "onSelectionChange",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
