import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var eModalCss = ":host{display:block}";
var EModal = /** @class */ (function () {
    function EModal(hostRef) {
        registerInstance(this, hostRef);
    }
    EModal.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EModal;
}());
EModal.style = eModalCss;
export { EModal as e_modal };
