'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-977a8e5f.js');

const eSwitchCss = ":host{display:block}";

const ESwitch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
ESwitch.style = eSwitchCss;

exports.e_switch = ESwitch;
