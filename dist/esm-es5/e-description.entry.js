import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var eDescriptionCss = ":host{display:block}";
var EDescription = /** @class */ (function () {
    function EDescription(hostRef) {
        registerInstance(this, hostRef);
    }
    EDescription.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EDescription;
}());
EDescription.style = eDescriptionCss;
export { EDescription as e_description };
