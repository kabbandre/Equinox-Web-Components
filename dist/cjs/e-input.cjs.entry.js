'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2969b752.js');

const eInputCss = ":host{display:-ms-flexbox;display:flex}.input-wrapper{-webkit-transition:all .3s ease;transition:all .3s ease;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:12px;padding:0 22px;background:var(--gray-100);border-radius:3px}.input-wrapper input{color:var(--gray-500)}.input-wrapper.outlined{background:none;-webkit-box-shadow:0 0 0 1px var(--gray-300);box-shadow:0 0 0 1px var(--gray-300)}.input-wrapper.ghost{background:none}.input-wrapper:hover{-webkit-box-shadow:0 0 0 1px var(--gray-400);box-shadow:0 0 0 1px var(--gray-400)}.input-wrapper:focus-within{-webkit-box-shadow:0 0 0 1px var(--primary);box-shadow:0 0 0 1px var(--primary)}.input-wrapper:focus-within input{color:var(--primary)}.input-wrapper.rounded{border-radius:100px}.input-wrapper.xs{height:26px}.input-wrapper.sm{height:32px}.input-wrapper.md{height:38px}.input-wrapper.lg{height:42px}.input-wrapper.xl{height:46px}.input-wrapper.xxl{height:56px}.input-wrapper input{background:transparent;outline:none;border:none}";

const EInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valueChanged = index.createEvent(this, "valueChanged", 7);
        this.size = "md";
        this.type = "text";
        this.classes = () => ({
            outlined: this.outlined,
            ghost: this.ghost,
            rounded: this.rounded,
            [this.size]: true,
            ['input-wrapper']: true
        });
        this.renderIcon = (icon) => (icon && index.h("e-icon", { size: "18px", icon: icon }));
    }
    valueChangedHandler(ev) {
        this.value = ev.target ? ev.target.value : null;
        this.valueChanged.emit(this.value);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: this.classes() }, index.h("slot", { name: "prepend-icon" }, this.renderIcon(this.prependIcon)), index.h("input", { placeholder: this.placeholder, value: this.value, onInput: (ev) => this.valueChangedHandler(ev) }), index.h("slot", { name: "append-icon" }, this.renderIcon(this.appendIcon)))));
    }
};
EInput.style = eInputCss;

exports.e_input = EInput;
