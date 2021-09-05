'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');

const eFieldtreeCss = ":host{display:block}";

const EFieldtree = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
EFieldtree.style = eFieldtreeCss;

exports.e_fieldtree = EFieldtree;
