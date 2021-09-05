'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');

const eDescriptionCss = ":host{display:block}";

const EDescription = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
EDescription.style = eDescriptionCss;

exports.e_description = EDescription;
