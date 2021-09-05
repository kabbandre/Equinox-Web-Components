'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');

const getAbbr = (str) => {
    if (str) {
        return str.split(' ').length >= 2 ? str.match(/\b(\w)/g).join('') : str.substr(0, 2);
    }
    else {
        return "";
    }
};

const eAvatarCss = ":host{display:block}.e-avatar{-webkit-transition:.3s ease;transition:.3s ease;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;color:var(--gray-600);height:42px;width:42px;font-size:16px;line-height:150%;border-radius:100px}.e-avatar.xs{height:24px;width:24px;font-size:12px}.e-avatar.lg{height:56px;width:56px;font-size:18px}.e-avatar.xl,.e-avatar.xxl{height:72px;width:72px;font-size:18px}.e-avatar:focus,.e-avatar:active{-webkit-box-shadow:0 0 0 3px var(--primary);box-shadow:0 0 0 3px var(--primary)}";

const EAvatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = "md";
        this.color = "#CBD5E0";
        this.classes = () => ({
            'e-avatar': true,
            outlined: this.outlined,
            [this.size]: true
        });
        this.styles = () => ({
            backgroundColor: this.color,
        });
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: this.classes(), style: this.styles() }, index.h("slot", null, getAbbr(this.text)))));
    }
};
EAvatar.style = eAvatarCss;

exports.e_avatar = EAvatar;
