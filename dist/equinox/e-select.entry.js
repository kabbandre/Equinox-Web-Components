import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

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
