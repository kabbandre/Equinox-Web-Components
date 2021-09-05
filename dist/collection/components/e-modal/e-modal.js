import { Component, Host, h } from '@stencil/core';
export class EModal {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-modal.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-modal.css"]
    }; }
}
