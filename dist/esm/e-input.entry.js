import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

const eInputCss = ":host{display:block}";

const EInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EInput.style = eInputCss;

export { EInput as e_input };
