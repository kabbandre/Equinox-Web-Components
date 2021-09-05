import { r as registerInstance, h, H as Host } from './index-90ef84af.js';

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
