'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-977a8e5f.js');

const EScroll = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { style: { maxHeight: '200px', overflow: 'auto' }, class: "e-scroll" }, index.h("slot", null))));
    }
};

exports.e_scroll = EScroll;
