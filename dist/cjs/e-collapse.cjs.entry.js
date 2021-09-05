'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');

const eCollapseCss = ":host{display:block}";

const ECollapse = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
ECollapse.style = eCollapseCss;

exports.e_collapse = ECollapse;
