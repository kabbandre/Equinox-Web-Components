import { r as registerInstance, h, H as Host } from './index-ba575c47.js';
var eMenuCss = ":host{display:block}";
var EMenu = /** @class */ (function () {
    function EMenu(hostRef) {
        registerInstance(this, hostRef);
    }
    EMenu.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EMenu;
}());
EMenu.style = eMenuCss;
export { EMenu as e_menu };
