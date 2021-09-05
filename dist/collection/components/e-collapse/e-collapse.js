import { Component, Host, h } from '@stencil/core';
export class ECollapse {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-collapse.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-collapse.css"]
    }; }
}
