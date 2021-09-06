var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, h, H as Host } from './index-ab05bccf.js';
import { f as findPath, s as setPath, d as deserializeJSON } from './utils-8fac59ff.js';
var eFieldtreeCss = ":host{display:block}.branch-open{position:relative}.branch-open:before{position:absolute;height:calc(100% - 28px);width:1px;content:'';left:12px;top:28px;background:var(--gray-300)}";
var EFieldtree = /** @class */ (function () {
    function EFieldtree(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.fields = "[{\"id\":1,\"icon\":\"ph-folder\",\"name\":\"Cats\",\"children\":[{\"id\":2,\"icon\":\"ph-file\",\"name\":\"Color cats\",\"children\":[{\"id\":3,\"name\":\"Yellow cats\"},{\"id\":4,\"name\":\"Black cats\"}]}]},{\"id\":5,\"icon\":\"ph-folder\",\"name\":\"Dogs\",\"children\":[{\"id\":6,\"icon\":\"ph-file\",\"name\":\"Color dogs\",\"children\":[{\"id\":7,\"name\":\"Yellow dogs\"},{\"id\":8,\"name\":\"Black dogs\"}]}]},{\"id\":9,\"icon\":\"ph-folder\",\"name\":\"Fishes\",\"children\":[{\"id\":10,\"icon\":\"ph-file\",\"name\":\"Color Fishes\",\"children\":[{\"id\":11,\"name\":\"Yellow Fishes\"},{\"id\":12,\"name\":\"Black Fishes\"}]}]}]";
        this.deserializedFields = [];
        this.changeOpen = function (_a) {
            var id = _a.id, isOpen = _a.isOpen;
            var path = findPath(_this.deserializedFields, 'id', id);
            setPath(_this.deserializedFields, __spreadArrays(path, ['isOpen']), !isOpen);
            _this.deserializedFields = _this.deserializedFields.map(function (field) { return field; });
        };
        this.parseFields = function (fields, level) {
            if (level === void 0) { level = 1; }
            return fields.map(function (field) { return h("div", { style: { display: 'flex', cursor: 'pointer', padding: '6px 0' } }, h("div", { style: { display: 'flex', alignItems: 'baseline' }, onClick: function () { return _this.changeOpen(field); } }, level === 1 && field.children && h("e-icon", { size: "24px", style: { marginRight: '33px' }, icon: field.isOpen ? "ph-minus-circle" : "ph-plus-circle" })), h("div", { class: "branch " + (field.isOpen ? 'branch-open' : '') }, h("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, onClick: function () { return _this.changeOpen(field); } }, h("e-icon", { size: "24px", icon: field.icon }), field.name), h("div", { style: { marginLeft: '20px', display: 'flex', flexDirection: 'column' } }, field.isOpen && field.children && _this.parseFields(field.children, level + 1)))); });
        };
    }
    EFieldtree.prototype.componentWillLoad = function () {
        this.deserializedFields = deserializeJSON(this.fields);
    };
    EFieldtree.prototype.parseTabsProp = function (newValue) {
        if (newValue)
            this.deserializedFields = deserializeJSON(this.fields);
    };
    EFieldtree.prototype.render = function () {
        return (h(Host, null, this.parseFields(this.deserializedFields)));
    };
    Object.defineProperty(EFieldtree, "watchers", {
        get: function () {
            return {
                "fields": ["parseTabsProp"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return EFieldtree;
}());
EFieldtree.style = eFieldtreeCss;
export { EFieldtree as e_fieldtree };
