'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2969b752.js');
const utils = require('./utils-22b3d28f.js');

const eFieldtreeCss = ":host{display:block}.branch-open{position:relative}.branch-open:before{position:absolute;height:calc(100% - 28px);width:1px;content:'';left:12px;top:28px;background:var(--gray-300)}";

const EFieldtree = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fields = "[{\"id\":1,\"icon\":\"ph-folder\",\"name\":\"Cats\",\"children\":[{\"id\":2,\"icon\":\"ph-file\",\"name\":\"Color cats\",\"children\":[{\"id\":3,\"name\":\"Yellow cats\"},{\"id\":4,\"name\":\"Black cats\"}]}]},{\"id\":5,\"icon\":\"ph-folder\",\"name\":\"Dogs\",\"children\":[{\"id\":6,\"icon\":\"ph-file\",\"name\":\"Color dogs\",\"children\":[{\"id\":7,\"name\":\"Yellow dogs\"},{\"id\":8,\"name\":\"Black dogs\"}]}]},{\"id\":9,\"icon\":\"ph-folder\",\"name\":\"Fishes\",\"children\":[{\"id\":10,\"icon\":\"ph-file\",\"name\":\"Color Fishes\",\"children\":[{\"id\":11,\"name\":\"Yellow Fishes\"},{\"id\":12,\"name\":\"Black Fishes\"}]}]}]";
        this.deserializedFields = [];
        this.changeOpen = ({ id, isOpen }) => {
            const path = utils.findPath(this.deserializedFields, 'id', id);
            utils.setPath(this.deserializedFields, [...path, 'isOpen'], !isOpen);
            this.deserializedFields = this.deserializedFields.map(field => field);
        };
        this.parseFields = (fields, level = 1) => {
            return fields.map(field => index.h("div", { style: { display: 'flex', cursor: 'pointer', padding: '6px 0' } }, index.h("div", { style: { display: 'flex', alignItems: 'baseline' }, onClick: () => this.changeOpen(field) }, level === 1 && field.children && index.h("e-icon", { size: "24px", style: { marginRight: '33px' }, icon: field.isOpen ? "ph-minus-circle" : "ph-plus-circle" })), index.h("div", { class: `branch ${field.isOpen ? 'branch-open' : ''}` }, index.h("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, onClick: () => this.changeOpen(field) }, index.h("e-icon", { size: "24px", icon: field.icon }), field.name), index.h("div", { style: { marginLeft: '20px', display: 'flex', flexDirection: 'column' } }, field.isOpen && field.children && this.parseFields(field.children, level + 1)))));
        };
    }
    componentWillLoad() {
        this.deserializedFields = utils.deserializeJSON(this.fields);
    }
    parseTabsProp(newValue) {
        if (newValue)
            this.deserializedFields = utils.deserializeJSON(this.fields);
    }
    render() {
        return (index.h(index.Host, null, this.parseFields(this.deserializedFields)));
    }
    static get watchers() { return {
        "fields": ["parseTabsProp"]
    }; }
};
EFieldtree.style = eFieldtreeCss;

exports.e_fieldtree = EFieldtree;
