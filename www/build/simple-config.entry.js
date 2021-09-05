import { r as registerInstance, h } from './index-bf5c848e.js';

const SimpleConfig = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("dl", null, h("dt", null, "We've got:"), h("dd", null, this.simpleText), h("dt", null, "Backwards down the number line:"), h("dd", null, this.aNumber), h("dt", null, "Days 'till the coal ran out:"), h("dd", null, this.bNumber), h("dt", null, "Llama:"), h("dd", null, this.isChecked ? 'Taboot Taboot' : '(keep it on press)'), h("dt", null, "Time turns elastic:"), h("dd", null, this.startDate), h("dt", null, "Spewing forth their color:"), h("dd", { style: { backgroundColor: this.backgroundColor || 'transparent' } }, this.backgroundColor || '(none)'), h("dt", null, "Spectral colors in the void:"), h("dd", { style: { backgroundColor: this.poorlyNamedProp || 'transparent' } }, this.poorlyNamedProp || '(none)')));
    }
};

export { SimpleConfig as simple_config };
