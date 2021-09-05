'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');

const SimpleConfig = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * A simple text field
         */
        this.simpleText = "simple in the band!";
        /**
         * A simple number field
         */
        this.aNumber = 555;
        /**
         * Another number field
         */
        this.bNumber = 46;
        /**
         * A boolean field
         */
        this.isChecked = true;
    }
    render() {
        return (index.h("dl", null, index.h("dt", null, "We've got:"), index.h("dd", null, this.simpleText), index.h("dt", null, "Backwards down the number line:"), index.h("dd", null, this.aNumber), index.h("dt", null, "Days 'till the coal ran out:"), index.h("dd", null, this.bNumber), index.h("dt", null, "Llama:"), index.h("dd", null, this.isChecked ? 'Taboot Taboot' : '(keep it on press)'), index.h("dt", null, "Time turns elastic:"), index.h("dd", null, this.startDate), index.h("dt", null, "Spewing forth their color:"), index.h("dd", { style: { backgroundColor: this.backgroundColor || 'transparent' } }, this.backgroundColor || '(none)'), index.h("dt", null, "Spectral colors in the void:"), index.h("dd", { style: { backgroundColor: this.poorlyNamedProp || 'transparent' } }, this.poorlyNamedProp || '(none)')));
    }
};

exports.simple_config = SimpleConfig;
