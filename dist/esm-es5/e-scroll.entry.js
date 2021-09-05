import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';
var EScroll = /** @class */ (function () {
    function EScroll(hostRef) {
        registerInstance(this, hostRef);
    }
    EScroll.prototype.render = function () {
        return (h(Host, null, h("div", { style: { maxHeight: '200px', overflow: 'auto' }, class: "e-scroll" }, h("slot", null))));
    };
    return EScroll;
}());
export { EScroll as e_scroll };
