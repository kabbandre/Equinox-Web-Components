import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';
var eSnipCss = ":host{display:block}";
var ESnip = /** @class */ (function () {
    function ESnip(hostRef) {
        registerInstance(this, hostRef);
    }
    ESnip.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return ESnip;
}());
ESnip.style = eSnipCss;
export { ESnip as e_snip };
