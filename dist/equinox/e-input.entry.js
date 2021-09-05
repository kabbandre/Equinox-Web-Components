import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

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
