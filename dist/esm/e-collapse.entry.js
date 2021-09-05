import { r as registerInstance, h } from './index-ab05bccf.js';

const eCollapseCss = ":host{display:block}.e-collapse-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;font-size:16px;line-height:150%}.e-collapse__text{font-size:12px;line-height:150%;color:var(--gray-600)}";

const ECollapse = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openIcon = "ph-plus-circle";
        this.closeIcon = "ph-x-circle";
        this.isOpen = false;
    }
    render() {
        return (h("div", { class: "e-collapse" }, h("div", { class: "e-collapse-header", onClick: () => this.isOpen = !this.isOpen }, h("slot", { name: "title" }, this.headerTitle), h("e-icon", { size: "24px", icon: this.isOpen ? this.closeIcon : this.openIcon })), h("hr", null), this.isOpen && (h("div", { class: "e-collapse__text" }, h("slot", null)))));
    }
};
ECollapse.style = eCollapseCss;

export { ECollapse as e_collapse };
