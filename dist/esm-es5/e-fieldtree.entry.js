import { r as registerInstance, h, H as Host } from './index-ba575c47.js';
var eFieldtreeCss = ":host{display:block}";
var EFieldtree = /** @class */ (function () {
    function EFieldtree(hostRef) {
        registerInstance(this, hostRef);
    }
    EFieldtree.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EFieldtree;
}());
EFieldtree.style = eFieldtreeCss;
export { EFieldtree as e_fieldtree };
