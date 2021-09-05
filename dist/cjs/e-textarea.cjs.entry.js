'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2969b752.js');

const eTextareaCss = ":host{display:block}";

const ETextarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
ETextarea.style = eTextareaCss;

exports.e_textarea = ETextarea;
