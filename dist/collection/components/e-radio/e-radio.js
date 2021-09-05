import { Component, h } from '@stencil/core';
export class ERadio {
    render() {
        return (h("label", { class: "container" },
            h("slot", null, "Eclipse"),
            h("input", { type: "checkbox" }),
            h("span", { class: "checkmark" })));
    }
    static get is() { return "e-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-radio.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-radio.css"]
    }; }
}
