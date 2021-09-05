import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

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
