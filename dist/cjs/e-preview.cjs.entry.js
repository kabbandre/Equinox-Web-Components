'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');

const ePreviewCss = ":host{display:block}.toolbar{display:-ms-flexbox;display:flex}";

const EPreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.wrapperStyle = () => ({
            height: '100vh',
            width: '100vw',
            background: 'url(/bg.png)',
            backgroundRepeat: 'no-repeat'
        });
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { style: this.wrapperStyle() }, index.h("div", { class: "toolbar" }, "EQUINOX"), index.h("img", { src: "/logo-outlined.svg", alt: "Logo outlined" }), index.h("img", { src: "/logo.svg", alt: "Logo" }))));
    }
};
EPreview.style = ePreviewCss;

exports.e_preview = EPreview;
