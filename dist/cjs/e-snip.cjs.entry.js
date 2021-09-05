'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-977a8e5f.js');

const eSnipCss = ":host{display:block}";

const ESnip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
ESnip.style = eSnipCss;

exports.e_snip = ESnip;
