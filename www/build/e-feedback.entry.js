import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

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
