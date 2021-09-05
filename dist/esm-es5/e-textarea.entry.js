import { r as registerInstance, h, H as Host } from './index-5e231675.js';
var eTextareaCss = ":host{display:block}";
var ETextarea = /** @class */ (function () {
    function ETextarea(hostRef) {
        registerInstance(this, hostRef);
    }
    ETextarea.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return ETextarea;
}());
ETextarea.style = eTextareaCss;
export { ETextarea as e_textarea };
