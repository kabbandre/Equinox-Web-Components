import { Component, Host, h, Prop, State, Watch, Event } from '@stencil/core';
import { deserializeJSON } from "../../utils/utils";
export class ETabs {
    constructor() {
        this.tabs = "[{\"key\":\"Stencil\",\"title\":\"www.stenciljs.com\"},{\"key\":\"Google\",\"title\":\"www.google.com\"}]";
        this.deserializedTabs = [];
        this.selectedTab = {
            title: null,
            key: null
        };
    }
    componentWillLoad() {
        this.deserializedTabs = deserializeJSON(this.tabs);
    }
    parseTabsProp(newValue) {
        if (newValue)
            this.deserializedTabs = deserializeJSON(this.tabs);
    }
    tabSelectedHandler(tab) {
        this.selectedTab = Object.assign({}, tab);
        this.tabSelected.emit(tab);
    }
    render() {
        return (h(Host, null,
            h("div", { class: "tabs" }, this.deserializedTabs.map(tab => (h("div", { class: `tab ${this.selectedTab.key === tab.key && 'active'}`, onClick: () => !tab.disabled && this.tabSelectedHandler(tab) }, tab.title))))));
    }
    static get is() { return "e-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["e-tabs.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["e-tabs.css"]
    }; }
    static get properties() { return {
        "tabs": {
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
            "attribute": "tabs",
            "reflect": false,
            "defaultValue": "\"[{\\\"key\\\":\\\"Stencil\\\",\\\"title\\\":\\\"www.stenciljs.com\\\"},{\\\"key\\\":\\\"Google\\\",\\\"title\\\":\\\"www.google.com\\\"}]\""
        }
    }; }
    static get states() { return {
        "deserializedTabs": {},
        "selectedTab": {}
    }; }
    static get events() { return [{
            "method": "tabSelected",
            "name": "tabSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "Tab",
                "resolved": "{ title?: string; key?: string; disabled?: boolean; }",
                "references": {
                    "Tab": {
                        "location": "global"
                    }
                }
            }
        }]; }
    static get watchers() { return [{
            "propName": "tabs",
            "methodName": "parseTabsProp"
        }]; }
}
