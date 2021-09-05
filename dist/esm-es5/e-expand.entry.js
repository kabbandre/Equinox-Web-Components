import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';
var eExpandCss = ":host{display:block}.expand__content{overflow:auto;z-index:0}.expand__button{display:block;margin:-12px auto 0;background:#FFFFFF;padding:0 12px;height:24px;text-transform:uppercase;font-size:12px;line-height:150%;border-radius:100px;border:none;-webkit-box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);z-index:2}";
var EExpand = /** @class */ (function () {
    function EExpand(hostRef) {
        registerInstance(this, hostRef);
        this.maxHeight = "100px";
        this.openButtonText = "Show more";
        this.hideButtonText = "Show less";
        this.elevation = "6";
        this.isOpen = false;
    }
    EExpand.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "expand__content", style: { maxHeight: !this.isOpen ? this.maxHeight : undefined } }, h("slot", null)), h("button", { class: "expand__button elevation-" + this.elevation, onClick: function () { return _this.isOpen = !_this.isOpen; } }, h("slot", { name: "text" }, this.isOpen ? this.hideButtonText : this.openButtonText), h("e-icon", { icon: "ph-chevron-up" }))));
    };
    return EExpand;
}());
EExpand.style = eExpandCss;
export { EExpand as e_expand };
