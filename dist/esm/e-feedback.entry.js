import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

const eFeedbackCss = ":host{display:block}";

const EFeedback = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EFeedback.style = eFeedbackCss;

export { EFeedback as e_feedback };
