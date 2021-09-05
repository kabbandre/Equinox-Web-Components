import { r as registerInstance, h, H as Host } from './index-ba575c47.js';

const eSnipCss = ":host{display:block}";

const ESnip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
ESnip.style = eSnipCss;

export { ESnip as e_snip };
