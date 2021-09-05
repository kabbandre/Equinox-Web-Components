import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

const eModalCss = ":host{display:block}";

const EModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EModal.style = eModalCss;

export { EModal as e_modal };
