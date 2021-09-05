import { r as registerInstance, h, H as Host } from './index-ba575c47.js';
var eSwitchCss = ":host{display:block}";
var ESwitch = /** @class */ (function () {
    function ESwitch(hostRef) {
        registerInstance(this, hostRef);
    }
    ESwitch.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return ESwitch;
}());
ESwitch.style = eSwitchCss;
export { ESwitch as e_switch };
