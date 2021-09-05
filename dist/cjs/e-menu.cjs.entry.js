'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2df85821.js');

const eMenuCss = ":host{display:block}";

const EMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
EMenu.style = eMenuCss;

exports.e_menu = EMenu;
