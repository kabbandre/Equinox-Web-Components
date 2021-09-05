import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var eCollapseCss = ":host{display:block}";
var ECollapse = /** @class */ (function () {
    function ECollapse(hostRef) {
        registerInstance(this, hostRef);
    }
    ECollapse.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return ECollapse;
}());
ECollapse.style = eCollapseCss;
export { ECollapse as e_collapse };
