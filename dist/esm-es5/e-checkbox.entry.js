import { r as registerInstance, c as createEvent, h } from './index-ab05bccf.js';
var eCheckboxCss = ":host{display:block}.switch.container{position:relative;display:inline-block;width:60px;height:34px}.switch.container input{opacity:0;width:0;height:0}.switch .checkmark{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:4px}.switch .checkmark:before{position:absolute;content:\"\";height:26px;width:26px;left:4px;bottom:4px;border-radius:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}.switch input:checked+.checkmark{background-color:var(--primary)}.switch input:focus+.checkmark{-webkit-box-shadow:0 0 1px var(--primary);box-shadow:0 0 1px var(--primary)}.switch input:checked+.checkmark:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.switch .checkmark.round{border-radius:100px}.switch .checkmark.round:before{border-radius:50%}.checkbox.container{display:block;position:relative;padding-left:36px;cursor:pointer;padding-top:2px;font-size:16px;line-height:150%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox.container input{position:absolute;cursor:pointer;opacity:0;height:0;width:0}.checkbox .checkmark{-webkit-transition:.3s ease;transition:.3s ease;position:absolute;top:0;left:0;height:24px;width:24px;background-color:var(--gray-100);border-radius:4px;border:1px solid var(--gray-100)}.checkbox.container:hover input~.checkmark{background-color:var(--gray-200)}.checkbox.container input:checked~.checkmark{background-color:var(--primary)}.checkbox .checkmark:after{content:\"\";position:absolute;display:none}.checkbox.container input:checked~.checkmark:after{display:block}.checkbox.container .checkmark:after{-webkit-transition:.3s ease;transition:.3s ease;width:100%;font-size:22px;color:#fff;text-align:center;font-family:\"Phosphor\";content:\"\\f0e7\"}.indeterminate.checkbox.container .checkmark:after{content:\"\\f21a\"}";
var ECheckbox = /** @class */ (function () {
    function ECheckbox(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.value = false;
        this.falseValue = false;
        this.trueValue = true;
        this.type = "checkbox";
        this.classes = function () {
            var _a;
            return (_a = {
                    indeterminate: _this.indeterminate
                },
                _a[_this.type] = true,
                _a.rounded = _this.rounded,
                _a.disabled = _this.disabled,
                _a.container = true,
                _a);
        };
    }
    ECheckbox.prototype.valueChangedHandler = function (checked) {
        if (!this.disabled) {
            this.valueChanged.emit(checked ? this.trueValue : this.falseValue);
        }
    };
    ECheckbox.prototype.render = function () {
        var _this = this;
        return (h("label", { class: this.classes() }, h("slot", null), h("input", { checked: this.value, ref: function (el) { return _this.checkboxInput = el; }, onChange: function () { return _this.valueChangedHandler(_this.checkboxInput.checked); }, type: "checkbox" }), h("span", { class: "checkmark" })));
    };
    return ECheckbox;
}());
ECheckbox.style = eCheckboxCss;
export { ECheckbox as e_checkbox };
