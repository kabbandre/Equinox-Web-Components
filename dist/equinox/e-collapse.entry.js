import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

const eCollapseCss = ":host{display:block}";

const ECollapse = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
ECollapse.style = eCollapseCss;

export { ECollapse as e_collapse };
