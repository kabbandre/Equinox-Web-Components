'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2df85821.js');

const eRadioCss = ":host{display:block}.container{display:block;position:relative;padding-left:36px;cursor:pointer;padding-top:1px;font-size:16px;line-height:150%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{-webkit-transition:.3s ease;transition:.3s ease;position:absolute;top:0;left:0;height:24px;width:24px;background-color:var(--gray-100);border-radius:50%}.container:hover input~.checkmark{background-color:var(--gray-200)}.checkmark:after{-webkit-transition:display .3s ease;transition:display .3s ease;content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{width:15px;height:15px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;background:var(--primary)}";

const ERadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("label", { class: "container" }, index.h("slot", null, "Eclipse"), index.h("input", { type: "checkbox" }), index.h("span", { class: "checkmark" })));
    }
};
ERadio.style = eRadioCss;

exports.e_radio = ERadio;
