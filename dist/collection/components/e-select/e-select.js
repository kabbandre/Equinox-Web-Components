import { Component, Host, h } from '@stencil/core';
export class ESelect {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-select.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-select.css"]
    }; }
}
