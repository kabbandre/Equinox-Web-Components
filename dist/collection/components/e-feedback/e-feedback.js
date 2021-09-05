import { Component, Host, h } from '@stencil/core';
export class EFeedback {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "e-feedback"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-feedback.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-feedback.css"]
    }; }
}
