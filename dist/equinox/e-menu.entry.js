import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

const eMenuCss = ":host{display:block}";

const EMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EMenu.style = eMenuCss;

export { EMenu as e_menu };
