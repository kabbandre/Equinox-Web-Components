'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-977a8e5f.js');

const ERadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valueChanged = index.createEvent(this, "valueChanged", 7);
    }
    onValueChange() {
        const radios = this.findNestedRadios();
        radios && radios.forEach(radio => {
            radio.checked = radio.value === this.value;
        });
    }
    onSelectionChange(event) {
        const radio = event.target;
        // @ts-ignore
        this.value = radio.value;
    }
    connectedCallback() {
        this.onValueChange();
    }
    componentDidLoad() {
        this.onValueChange();
    }
    findNestedRadios() {
        const slot = this.host.shadowRoot.querySelector('slot');
        return slot && slot.assignedElements();
    }
    render() {
        return index.h("slot", null);
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
};

exports.e_radio_group = ERadioGroup;
