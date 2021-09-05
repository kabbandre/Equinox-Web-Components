import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';

const EProgress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bgColor = "var(--purple-100)";
        this.barColor = "var(--purple-400)";
        this.value = 0;
        this.maxValue = 100;
        this.height = "4px";
        this.width = "260px";
        this.outerStyle = () => ({
            background: this.bgColor,
            height: this.height,
            width: this.width
        });
        this.innerStyle = () => ({
            background: this.barColor,
            width: `${this.value}%`,
            height: '100%'
        });
    }
    render() {
        return (h(Host, null, h("div", { style: this.outerStyle() }, h("div", { style: this.innerStyle() }))));
    }
};

export { EProgress as e_progress };
