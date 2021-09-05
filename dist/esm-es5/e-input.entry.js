import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var eInputCss = ":host{display:block}";
var EInput = /** @class */ (function () {
    function EInput(hostRef) {
        registerInstance(this, hostRef);
    }
    EInput.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EInput;
}());
EInput.style = eInputCss;
export { EInput as e_input };
