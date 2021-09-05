'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-977a8e5f.js');

const eCollapseCss = ":host{display:block}.e-collapse-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;font-size:16px;line-height:150%}.e-collapse__text{font-size:12px;line-height:150%;color:var(--gray-600)}";

const ECollapse = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openIcon = "ph-plus-circle";
        this.closeIcon = "ph-x-circle";
        this.isOpen = false;
    }
    render() {
        return (index.h("div", { class: "e-collapse" }, index.h("div", { class: "e-collapse-header", onClick: () => this.isOpen = !this.isOpen }, index.h("slot", { name: "title" }, this.headerTitle), index.h("e-icon", { size: "24px", icon: this.isOpen ? this.closeIcon : this.openIcon })), index.h("hr", null), this.isOpen && (index.h("div", { class: "e-collapse__text" }, index.h("slot", null)))));
    }
};
ECollapse.style = eCollapseCss;

exports.e_collapse = ECollapse;
