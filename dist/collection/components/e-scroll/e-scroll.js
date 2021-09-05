import { Component, Host, h } from '@stencil/core';
export class EScroll {
    render() {
        return (h(Host, null,
            h("div", { style: { maxHeight: '200px', overflow: 'auto' }, class: "e-scroll" },
                h("slot", null))));
    }
    static get is() { return "e-scroll"; }
    static get encapsulation() { return "shadow"; }
}
