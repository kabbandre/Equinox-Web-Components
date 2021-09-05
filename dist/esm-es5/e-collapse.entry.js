import { r as registerInstance, h } from './index-5e231675.js';
var eCollapseCss = ":host{display:block}.e-collapse-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;font-size:16px;line-height:150%}.e-collapse__text{font-size:12px;line-height:150%;color:var(--gray-600)}";
var ECollapse = /** @class */ (function () {
    function ECollapse(hostRef) {
        registerInstance(this, hostRef);
        this.openIcon = "ph-plus-circle";
        this.closeIcon = "ph-x-circle";
        this.isOpen = false;
    }
    ECollapse.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "e-collapse" }, h("div", { class: "e-collapse-header", onClick: function () { return _this.isOpen = !_this.isOpen; } }, h("slot", { name: "title" }, this.headerTitle), h("e-icon", { size: "24px", icon: this.isOpen ? this.closeIcon : this.openIcon })), h("hr", null), this.isOpen && (h("div", { class: "e-collapse__text" }, h("slot", null)))));
    };
    return ECollapse;
}());
ECollapse.style = eCollapseCss;
export { ECollapse as e_collapse };
