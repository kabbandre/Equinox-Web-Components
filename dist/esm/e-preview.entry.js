import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

const ePreviewCss = ":host{display:block}.toolbar{display:-ms-flexbox;display:flex}";

const EPreview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.wrapperStyle = () => ({
            height: '100vh',
            width: '100vw',
            background: 'url(/bg.png)',
            backgroundRepeat: 'no-repeat'
        });
    }
    render() {
        return (h(Host, null, h("div", { style: this.wrapperStyle() }, h("div", { class: "toolbar" }, "EQUINOX"), h("img", { src: "/logo-outlined.svg", alt: "Logo outlined" }), h("img", { src: "/logo.svg", alt: "Logo" }))));
    }
};
EPreview.style = ePreviewCss;

export { EPreview as e_preview };