import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

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
