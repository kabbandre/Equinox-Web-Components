'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2df85821.js');

const eExpandCss = ":host{display:block}.expand__content{overflow:auto;z-index:0}.expand__button{display:block;margin:-12px auto 0;background:#FFFFFF;padding:0 12px;height:24px;text-transform:uppercase;font-size:12px;line-height:150%;border-radius:100px;border:none;-webkit-box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);z-index:2}";

const EExpand = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.maxHeight = "100px";
        this.openButtonText = "Show more";
        this.hideButtonText = "Show less";
        this.elevation = "6";
        this.isOpen = false;
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "expand__content", style: { maxHeight: !this.isOpen ? this.maxHeight : undefined } }, index.h("slot", null)), index.h("button", { class: `expand__button elevation-${this.elevation}`, onClick: () => this.isOpen = !this.isOpen }, index.h("slot", { name: "text" }, this.isOpen ? this.hideButtonText : this.openButtonText), index.h("e-icon", { icon: "ph-chevron-up" }))));
    }
};
EExpand.style = eExpandCss;

exports.e_expand = EExpand;
