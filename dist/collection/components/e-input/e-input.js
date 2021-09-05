import { Component, Host, h } from '@stencil/core';
export class EInput {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-input.css"]
    }; }
}
