import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var eSelectCss = ":host{display:block}";
var ESelect = /** @class */ (function () {
    function ESelect(hostRef) {
        registerInstance(this, hostRef);
    }
    ESelect.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return ESelect;
}());
ESelect.style = eSelectCss;
export { ESelect as e_select };
