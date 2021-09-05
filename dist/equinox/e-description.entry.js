import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

const eDescriptionCss = ":host{display:block}";

const EDescription = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EDescription.style = eDescriptionCss;

export { EDescription as e_description };
