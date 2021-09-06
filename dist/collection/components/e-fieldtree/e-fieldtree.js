import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { deserializeJSON, findPath, setPath } from "../../utils/utils";
export class EFieldtree {
    constructor() {
        this.fields = "[{\"id\":1,\"icon\":\"ph-folder\",\"name\":\"Cats\",\"children\":[{\"id\":2,\"icon\":\"ph-file\",\"name\":\"Color cats\",\"children\":[{\"id\":3,\"name\":\"Yellow cats\"},{\"id\":4,\"name\":\"Black cats\"}]}]},{\"id\":5,\"icon\":\"ph-folder\",\"name\":\"Dogs\",\"children\":[{\"id\":6,\"icon\":\"ph-file\",\"name\":\"Color dogs\",\"children\":[{\"id\":7,\"name\":\"Yellow dogs\"},{\"id\":8,\"name\":\"Black dogs\"}]}]},{\"id\":9,\"icon\":\"ph-folder\",\"name\":\"Fishes\",\"children\":[{\"id\":10,\"icon\":\"ph-file\",\"name\":\"Color Fishes\",\"children\":[{\"id\":11,\"name\":\"Yellow Fishes\"},{\"id\":12,\"name\":\"Black Fishes\"}]}]}]";
        this.deserializedFields = [];
        this.changeOpen = ({ id, isOpen }) => {
            const path = findPath(this.deserializedFields, 'id', id);
            setPath(this.deserializedFields, [...path, 'isOpen'], !isOpen);
            this.deserializedFields = this.deserializedFields.map(field => field);
        };
        this.parseFields = (fields, level = 1) => {
            return fields.map(field => h("div", { style: { display: 'flex', cursor: 'pointer', padding: '6px 0' } },
                h("div", { style: { display: 'flex', alignItems: 'baseline' }, onClick: () => this.changeOpen(field) }, level === 1 && field.children && h("e-icon", { size: "24px", style: { marginRight: '33px' }, icon: field.isOpen ? "ph-minus-circle" : "ph-plus-circle" })),
                h("div", { class: `branch ${field.isOpen ? 'branch-open' : ''}` },
                    h("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, onClick: () => this.changeOpen(field) },
                        h("e-icon", { size: "24px", icon: field.icon }),
                        field.name),
                    h("div", { style: { marginLeft: '20px', display: 'flex', flexDirection: 'column' } }, field.isOpen && field.children && this.parseFields(field.children, level + 1)))));
        };
    }
    componentWillLoad() {
        this.deserializedFields = deserializeJSON(this.fields);
    }
    parseTabsProp(newValue) {
        if (newValue)
            this.deserializedFields = deserializeJSON(this.fields);
    }
    render() {
        return (h(Host, null, this.parseFields(this.deserializedFields)));
    }
    static get is() { return "e-fieldtree"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-fieldtree.css"]
    }; }
    static get styleUrls() { return {
        "$": ["e-fieldtree.css"]
    }; }
    static get properties() { return {
        "fields": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fields",
            "reflect": false,
            "defaultValue": "\"[{\\\"id\\\":1,\\\"icon\\\":\\\"ph-folder\\\",\\\"name\\\":\\\"Cats\\\",\\\"children\\\":[{\\\"id\\\":2,\\\"icon\\\":\\\"ph-file\\\",\\\"name\\\":\\\"Color cats\\\",\\\"children\\\":[{\\\"id\\\":3,\\\"name\\\":\\\"Yellow cats\\\"},{\\\"id\\\":4,\\\"name\\\":\\\"Black cats\\\"}]}]},{\\\"id\\\":5,\\\"icon\\\":\\\"ph-folder\\\",\\\"name\\\":\\\"Dogs\\\",\\\"children\\\":[{\\\"id\\\":6,\\\"icon\\\":\\\"ph-file\\\",\\\"name\\\":\\\"Color dogs\\\",\\\"children\\\":[{\\\"id\\\":7,\\\"name\\\":\\\"Yellow dogs\\\"},{\\\"id\\\":8,\\\"name\\\":\\\"Black dogs\\\"}]}]},{\\\"id\\\":9,\\\"icon\\\":\\\"ph-folder\\\",\\\"name\\\":\\\"Fishes\\\",\\\"children\\\":[{\\\"id\\\":10,\\\"icon\\\":\\\"ph-file\\\",\\\"name\\\":\\\"Color Fishes\\\",\\\"children\\\":[{\\\"id\\\":11,\\\"name\\\":\\\"Yellow Fishes\\\"},{\\\"id\\\":12,\\\"name\\\":\\\"Black Fishes\\\"}]}]}]\""
        }
    }; }
    static get states() { return {
        "deserializedFields": {}
    }; }
    static get watchers() { return [{
            "propName": "fields",
            "methodName": "parseTabsProp"
        }]; }
}
