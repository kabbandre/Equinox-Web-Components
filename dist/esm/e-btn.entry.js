import { r as registerInstance, h } from './index-90ef84af.js';

const eBtnCss = ":host{display:block}button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:10px;-webkit-transition:.3s ease;transition:.3s ease;line-height:150%;background:#fff;color:#000;padding:4px 8px;border-radius:4px;border:none}button:hover,button:active{background:#000;color:#fff}button:focus{background:#fff;color:#000;-webkit-box-shadow:0 0 0 1px #cbd5e0;box-shadow:0 0 0 1px #cbd5e0}button.disabled{background:#cbd5e0;color:#fff}button.xs{font-size:12px;height:26px}button.xs.icon{width:26px}button.sm{font-size:12px;height:32px}button.sm.icon{font-size:18px;width:32px}button.md{font-size:12px;height:38px}button.md.icon{font-size:26px;width:38px}button.lg{font-size:14px;height:42px}button.lg.icon{font-size:30px;width:42px}button.xl{font-size:14px;height:46px}button.xl.icon{font-size:32px;width:46px}button.xll{font-size:16px;height:56px}button.xll.icon{font-size:32px;width:56px}button.icon{padding:0;border-radius:100%}button.rounded{border-radius:100px}";

const EBtn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Turn button into the icon button. Pass icon code to this attribute.
         */
        this.icon = "ph-plus";
        /**
         * Button size
         */
        this.size = "xs";
        /**
         * Prepend icon
         */
        this.prependIcon = "";
        /**
         * Append icon
         */
        this.appendIcon = "";
        this.classes = () => ({
            rounded: this.rounded,
            disabled: this.disabled,
            icon: !!this.icon,
            [this.size]: true
        });
        this.renderIcon = (icon) => (icon && h("e-icon", { icon: icon }));
        this.renderContent = () => {
            if (this.icon) {
                return (h("e-icon", { icon: this.icon }));
            }
            else {
                return [
                    h("slot", { name: "prepend-icon" }, this.renderIcon(this.prependIcon)),
                    h("slot", null, "Eclipse"),
                    h("slot", { name: "append-icon" }, this.renderIcon(this.appendIcon))
                ];
            }
        };
    }
    render() {
        return (h("button", { class: this.classes() }, this.renderContent()));
    }
};
EBtn.style = eBtnCss;

export { EBtn as e_btn };
