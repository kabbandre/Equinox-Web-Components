import { Component, Host, h } from '@stencil/core';
export class ESnip {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-snip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-snip.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-snip.css"]
    }; }
}
