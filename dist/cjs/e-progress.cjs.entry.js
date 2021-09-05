'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2df85821.js');

const EProgress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, null, index.h("div", { style: this.outerStyle() }, index.h("div", { style: this.innerStyle() }))));
    }
};

exports.e_progress = EProgress;
