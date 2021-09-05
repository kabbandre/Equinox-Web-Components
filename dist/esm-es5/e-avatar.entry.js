import { r as registerInstance, h, H as Host } from './index-90ef84af.js';
var getAbbr = function (str) {
    if (str) {
        return str.split(' ').length >= 2 ? str.match(/\b(\w)/g).join('') : str.substr(0, 2);
    }
    else {
        return "";
    }
};
var eAvatarCss = ":host{display:block}.e-avatar{-webkit-transition:.3s ease;transition:.3s ease;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;color:var(--gray-600);height:42px;width:42px;font-size:16px;line-height:150%;border-radius:100px}.e-avatar.xs{height:24px;width:24px;font-size:12px}.e-avatar.lg{height:56px;width:56px;font-size:18px}.e-avatar.xl,.e-avatar.xxl{height:72px;width:72px;font-size:18px}.e-avatar:focus,.e-avatar:active{-webkit-box-shadow:0 0 0 3px var(--primary);box-shadow:0 0 0 3px var(--primary)}";
var EAvatar = /** @class */ (function () {
    function EAvatar(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.size = "md";
        this.color = "#CBD5E0";
        this.classes = function () {
            var _a;
            return (_a = {
                    'e-avatar': true,
                    outlined: _this.outlined
                },
                _a[_this.size] = true,
                _a);
        };
        this.styles = function () { return ({
            backgroundColor: _this.color,
        }); };
    }
    EAvatar.prototype.render = function () {
        return (h(Host, null, h("div", { class: this.classes(), style: this.styles() }, h("slot", null, getAbbr(this.text)))));
    };
    return EAvatar;
}());
EAvatar.style = eAvatarCss;
export { EAvatar as e_avatar };
