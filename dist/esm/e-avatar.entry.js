import { r as registerInstance, h, H as Host } from './index-5e231675.js';
import { g as getAbbr } from './utils-be29ec57.js';

const eAvatarCss = ":host{display:block}.e-avatar{overflow:hidden;-webkit-transition:.3s ease;transition:.3s ease;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;color:var(--gray-600);height:42px;width:42px;font-size:16px;line-height:150%;border-radius:100px}.e-avatar.xs{height:24px;width:24px;font-size:12px}.e-avatar.lg{height:56px;width:56px;font-size:18px}.e-avatar.xl,.e-avatar.xxl{height:72px;width:72px;font-size:18px}.e-avatar:focus,.e-avatar:active{-webkit-box-shadow:0 0 0 3px var(--primary);box-shadow:0 0 0 3px var(--primary)}";

const EAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = "md";
        this.color = "#CBD5E0";
        this.classes = () => ({
            'e-avatar': true,
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
