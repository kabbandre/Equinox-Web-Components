import { r as registerInstance, c as createEvent, h } from './index-ab05bccf.js';
var eRadioCss = ":host{display:block}.container{display:block;position:relative;padding-left:36px;cursor:pointer;padding-top:1px;font-size:16px;line-height:150%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{-webkit-transition:.3s ease;transition:.3s ease;position:absolute;top:0;left:0;height:24px;width:24px;background-color:var(--gray-100);border-radius:50%}.container:hover input~.checkmark{background-color:var(--gray-200)}.checkmark:after{-webkit-transition:display .3s ease;transition:display .3s ease;content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{width:15px;height:15px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;background:var(--primary)}";
var ERadio = /** @class */ (function () {
    function ERadio(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.checked = false;
    }
    ERadio.prototype.valueChangedHandler = function () {
        this.checked = true;
        this.valueChanged.emit({
            AT_TARGET: 0,
            BUBBLING_PHASE: 0,
            CAPTURING_PHASE: 0,
            NONE: 0,
            bubbles: false,
            cancelBubble: false,
            cancelable: false,
            composed: false,
            composedPath: function () {
                return [];
            },
            currentTarget: undefined,
            defaultPrevented: false,
            eventPhase: 0,
            initCustomEvent: function () { },
            initEvent: function () { },
            isTrusted: false,
            returnValue: false,
            srcElement: undefined,
            target: undefined,
            timeStamp: 0,
            type: "",
            preventDefault: function () { },
            stopImmediatePropagation: function () { },
            stopPropagation: function () { },
            detail: this.value
        });
    };
    ERadio.prototype.render = function () {
        return (h("label", { class: "container" }, h("slot", null, "Eclipse"), h("input", { checked: this.checked, onClick: this.valueChangedHandler.bind(this), type: "checkbox" }), h("span", { class: "checkmark" })));
    };
    return ERadio;
}());
ERadio.style = eRadioCss;
export { ERadio as e_radio };
