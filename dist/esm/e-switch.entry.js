import { r as registerInstance, h, H as Host } from './index-5e231675.js';

const eSwitchCss = ":host{display:block}";

const ESwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
ESwitch.style = eSwitchCss;

export { ESwitch as e_switch };