import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var eFeedbackCss = ":host{display:block}";
var EFeedback = /** @class */ (function () {
    function EFeedback(hostRef) {
        registerInstance(this, hostRef);
    }
    EFeedback.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return EFeedback;
}());
EFeedback.style = eFeedbackCss;
export { EFeedback as e_feedback };
