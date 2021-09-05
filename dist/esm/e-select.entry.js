import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

const eSelectCss = ":host{display:block}";

const ESelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
ESelect.style = eSelectCss;

export { ESelect as e_select };
