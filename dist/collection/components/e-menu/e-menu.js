import { Component, Host, h } from '@stencil/core';
export class EMenu {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-menu.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-menu.css"]
    }; }
}
