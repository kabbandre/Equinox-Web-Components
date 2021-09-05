'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2969b752.js');
const utils = require('./utils-2895112e.js');

const eTabsCss = ":host{display:block}.tabs{display:-ms-flexbox;display:flex;gap:12px}.tabs .tab{cursor:pointer;color:var(--primary);background:var(--gray-50);padding:12px;border-radius:100px}.tabs .tab.active{color:#fff;background:var(--primary)}.tabs .tab.disabled{color:var(--gray-500);background:transparent}.tabs .tab.text{padding:12px 0;color:var(--gray-500);background:transparent}.tabs .tab.text.active{color:var(--primary);font-weight:bold}.tabs .tab.text.disabled{color:var(--gray-300)}.tabs .tab.underline{padding:6px;color:var(--primary)}";

const ETabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabSelected = index.createEvent(this, "tabSelected", 7);
        this.tabs = "[{\"key\":\"Stencil\",\"title\":\"www.stenciljs.com\"},{\"key\":\"Google\",\"title\":\"www.google.com\"}]";
        this.deserializedTabs = [];
        this.selectedTab = {
            title: null,
            key: null
        };
    }
    componentWillLoad() {
        this.deserializedTabs = utils.deserializeJSON(this.tabs);
    }
    parseTabsProp(newValue) {
        if (newValue)
            this.deserializedTabs = utils.deserializeJSON(this.tabs);
    }
    tabSelectedHandler(tab) {
        this.selectedTab = Object.assign({}, tab);
        this.tabSelected.emit(tab);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "tabs" }, this.deserializedTabs.map(tab => (index.h("div", { class: `tab ${this.selectedTab.key === tab.key && 'active'}`, onClick: () => !tab.disabled && this.tabSelectedHandler(tab) }, tab.title))))));
    }
    static get watchers() { return {
        "tabs": ["parseTabsProp"]
    }; }
};
ETabs.style = eTabsCss;

exports.e_tabs = ETabs;
