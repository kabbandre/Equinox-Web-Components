import { Component, Host, h } from '@stencil/core';
export class ETextarea {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-textarea.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-textarea.css"]
    }; }
}
