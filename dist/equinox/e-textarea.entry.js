import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

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
