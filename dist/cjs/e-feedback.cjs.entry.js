'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');

const eFeedbackCss = ":host{display:block}";

const EFeedback = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
EFeedback.style = eFeedbackCss;

exports.e_feedback = EFeedback;
