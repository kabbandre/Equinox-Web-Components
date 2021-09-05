import { Component, Host, h } from '@stencil/core';
export class EFieldtree {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-fieldtree"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-fieldtree.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-fieldtree.css"]
    }; }
}
