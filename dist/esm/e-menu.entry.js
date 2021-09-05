import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';

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
