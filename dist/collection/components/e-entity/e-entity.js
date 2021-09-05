import { Component, Host, h } from '@stencil/core';
export class EEntity {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-entity"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-entity.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-entity.css"]
    }; }
}
