import { Component, Host, h } from '@stencil/core';
export class ESwitch {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-switch.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-switch.css"]
    }; }
}
