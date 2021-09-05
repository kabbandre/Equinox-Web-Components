import { Component, Host, h } from '@stencil/core';
export class EPreview {
    constructor() {
        this.wrapperStyle = () => ({
            height: '100vh',
            width: '100vw',
            background: 'url(/bg.png)',
            backgroundRepeat: 'no-repeat'
        });
    }
    render() {
        return (h(Host, null,
            h("div", { style: this.wrapperStyle() },
                h("div", { class: "toolbar" }, "EQUINOX"),
                h("img", { src: "/logo-outlined.svg", alt: "Logo outlined" }),
                h("img", { src: "/logo.svg", alt: "Logo" }))));
    }
    static get is() { return "e-preview"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-preview.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-preview.css"]
    }; }
}
