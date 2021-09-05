import { r as registerInstance, h, e as Host } from './index-bf5c848e.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
const getAbbr = (str) => {
    if (str) {
        return str.split(' ').length >= 2 ? str.match(/\b(\w)/g).join('') : str.substr(0, 2);
    }
    else {
        return "";
    }
};

const eAvatarCss = ":host{display:block}.e-avatar{transition:0.3s ease;display:flex;align-items:center;justify-content:center;text-transform:uppercase;color:var(--gray-600);height:42px;width:42px;font-size:16px;line-height:150%;border-radius:100px}.e-avatar.xs{height:24px;width:24px;font-size:12px}.e-avatar.lg{height:56px;width:56px;font-size:18px}.e-avatar.xl,.e-avatar.xxl{height:72px;width:72px;font-size:18px}.e-avatar:focus,.e-avatar:active{box-shadow:0 0 0 3px var(--primary)}";

const EAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("div", { class: this.classes(), style: this.styles() }, h("slot", null, getAbbr(this.text)))));
    }
};
EAvatar.style = eAvatarCss;

export { EAvatar as e_avatar };
