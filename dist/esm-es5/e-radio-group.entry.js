import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ab05bccf.js';
var ERadioGroup = /** @class */ (function () {
    function ERadioGroup(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
    }
    ERadioGroup.prototype.onValueChange = function () {
        var _this = this;
        var radios = this.findNestedRadios();
        radios && radios.forEach(function (radio) {
            radio.checked = radio.value === _this.value;
        });
    };
    ERadioGroup.prototype.onSelectionChange = function (event) {
        var radio = event.target;
        // @ts-ignore
        this.value = radio.value;
    };
    ERadioGroup.prototype.connectedCallback = function () {
        this.onValueChange();
    };
    ERadioGroup.prototype.componentDidLoad = function () {
        this.onValueChange();
    };
    ERadioGroup.prototype.findNestedRadios = function () {
        var slot = this.host.shadowRoot.querySelector('slot');
        return slot && slot.assignedElements();
    };
    ERadioGroup.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(ERadioGroup.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ERadioGroup, "watchers", {
        get: function () {
            return {
                "value": ["onValueChange"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ERadioGroup;
}());
export { ERadioGroup as e_radio_group };
