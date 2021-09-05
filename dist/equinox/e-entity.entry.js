import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

const eEntityCss = ":host{display:block}";

const EEntity = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EEntity.style = eEntityCss;

export { EEntity as e_entity };
