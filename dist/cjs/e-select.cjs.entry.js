'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-977a8e5f.js');

const eSelectCss = ":host{display:block}";

const ESelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
ESelect.style = eSelectCss;

exports.e_select = ESelect;
