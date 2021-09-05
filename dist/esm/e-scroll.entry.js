import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';

const EScroll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { style: { maxHeight: '200px', overflow: 'auto' }, class: "e-scroll" }, h("slot", null))));
    }
};

export { EScroll as e_scroll };
