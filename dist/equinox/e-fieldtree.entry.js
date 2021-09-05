import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

const eFieldtreeCss = ":host{display:block}";

const EFieldtree = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EFieldtree.style = eFieldtreeCss;

export { EFieldtree as e_fieldtree };
