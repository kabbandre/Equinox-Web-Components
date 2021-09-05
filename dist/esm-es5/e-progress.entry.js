import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';
var EProgress = /** @class */ (function () {
    function EProgress(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.bgColor = "var(--purple-100)";
        this.barColor = "var(--purple-400)";
        this.value = 0;
        this.maxValue = 100;
        this.height = "4px";
        this.width = "260px";
        this.outerStyle = function () { return ({
            background: _this.bgColor,
            height: _this.height,
            width: _this.width
        }); };
        this.innerStyle = function () { return ({
            background: _this.barColor,
            width: _this.value + "%",
            height: '100%'
        }); };
    }
    EProgress.prototype.render = function () {
        return (h(Host, null, h("div", { style: this.outerStyle() }, h("div", { style: this.innerStyle() }))));
    };
    return EProgress;
}());
export { EProgress as e_progress };
