import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var eEntityCss = ":host{display:block}";
var EEntity = /** @class */ (function () {
    function EEntity(hostRef) {
        registerInstance(this, hostRef);
    }
    EEntity.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EEntity;
}());
EEntity.style = eEntityCss;
export { EEntity as e_entity };
