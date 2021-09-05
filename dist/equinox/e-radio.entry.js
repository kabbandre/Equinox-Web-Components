import { r as registerInstance, h } from './index-bf5c848e.js';

const eRadioCss = ":host{display:block}.container{display:block;position:relative;padding-left:36px;cursor:pointer;padding-top:1px;font-size:16px;line-height:150%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{transition:0.3s ease;position:absolute;top:0;left:0;height:24px;width:24px;background-color:var(--gray-100);border-radius:50%}.container:hover input~.checkmark{background-color:var(--gray-200)}.checkmark:after{transition:display 0.3s ease;content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{width:15px;height:15px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;background:var(--primary)}";

const ERadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("label", { class: "container" }, h("slot", null, "Eclipse"), h("input", { type: "checkbox" }), h("span", { class: "checkmark" })));
    }
};
ERadio.style = eRadioCss;

export { ERadio as e_radio };
