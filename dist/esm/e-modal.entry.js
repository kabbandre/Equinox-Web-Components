import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

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
