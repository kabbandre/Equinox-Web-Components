import { r as registerInstance, c as createEvent, h, H as Host } from './index-ab05bccf.js';
import { d as deserializeJSON } from './utils-8fac59ff.js';
var eTabsCss = ":host{display:block}.tabs{display:-ms-flexbox;display:flex;gap:12px}.tabs .tab{cursor:pointer;color:var(--primary);background:var(--gray-50);padding:12px;border-radius:100px}.tabs .tab.active{color:#fff;background:var(--primary)}.tabs .tab.disabled{color:var(--gray-500);background:transparent}.tabs .tab.text{padding:12px 0;color:var(--gray-500);background:transparent}.tabs .tab.text.active{color:var(--primary);font-weight:bold}.tabs .tab.text.disabled{color:var(--gray-300)}.tabs .tab.underline{padding:6px;color:var(--primary)}";
var ETabs = /** @class */ (function () {
    function ETabs(hostRef) {
        registerInstance(this, hostRef);
        this.tabSelected = createEvent(this, "tabSelected", 7);
        this.tabs = "[{\"key\":\"Stencil\",\"title\":\"www.stenciljs.com\"},{\"key\":\"Google\",\"title\":\"www.google.com\"}]";
        this.deserializedTabs = [];
        this.selectedTab = {
            title: null,
            key: null
        };
    }
    ETabs.prototype.componentWillLoad = function () {
        this.deserializedTabs = deserializeJSON(this.tabs);
    };
    ETabs.prototype.parseTabsProp = function (newValue) {
        if (newValue)
            this.deserializedTabs = deserializeJSON(this.tabs);
    };
    ETabs.prototype.tabSelectedHandler = function (tab) {
        this.selectedTab = Object.assign({}, tab);
        this.tabSelected.emit(tab);
    };
    ETabs.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "tabs" }, this.deserializedTabs.map(function (tab) { return (h("div", { class: "tab " + (_this.selectedTab.key === tab.key && 'active'), onClick: function () { return !tab.disabled && _this.tabSelectedHandler(tab); } }, tab.title)); }))));
    };
    Object.defineProperty(ETabs, "watchers", {
        get: function () {
            return {
                "tabs": ["parseTabsProp"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ETabs;
}());
ETabs.style = eTabsCss;
export { ETabs as e_tabs };
