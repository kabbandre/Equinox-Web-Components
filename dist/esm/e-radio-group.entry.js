import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ab05bccf.js';

const ERadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
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
        return h("slot", null);
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
};

export { ERadioGroup as e_radio_group };
