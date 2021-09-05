import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';

const eTextareaCss = ":host{display:block}";

const ETextarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
ETextarea.style = eTextareaCss;

export { ETextarea as e_textarea };
