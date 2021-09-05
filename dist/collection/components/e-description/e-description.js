import { Component, Host, h } from '@stencil/core';
export class EDescription {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-description"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-description.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-description.css"]
    }; }
}
