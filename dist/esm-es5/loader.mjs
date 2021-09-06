import { b as bootstrapLazy } from './index-ab05bccf.js';
import { a as patchEsm } from './patch-082e2511.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["e-chat-box", [[1, "e-chat-box", { "type": [1], "value": [1025], "placeholder": [1], "outerPrependIcon": [1, "outer-prepend-icon"], "prependIcon": [1, "prepend-icon"], "appendIcon": [1, "append-icon"], "outerAppendIcon": [1, "outer-append-icon"], "backdrop": [516], "dark": [516], "backdropBlur": [513, "backdrop-blur"] }]]], ["e-chip", [[1, "e-chip", { "color": [1], "textColor": [1, "text-color"], "text": [4], "outlined": [4], "disabled": [4], "shadow": [4], "rounded": [4], "prependIcon": [1, "prepend-icon"] }]]], ["e-collapse", [[1, "e-collapse", { "headerTitle": [1, "header-title"], "openIcon": [1, "open-icon"], "closeIcon": [1, "close-icon"], "isOpen": [32] }]]], ["e-expand", [[1, "e-expand", { "maxHeight": [1, "max-height"], "openButtonText": [1, "open-button-text"], "openButtonIcon": [1, "open-button-icon"], "hideButtonText": [1, "hide-button-text"], "hideButtonIcon": [1, "hide-button-icon"], "elevation": [1], "isOpen": [32] }]]], ["e-fieldtree", [[1, "e-fieldtree", { "fields": [1], "deserializedFields": [32] }]]], ["e-input", [[1, "e-input", { "outlined": [4], "ghost": [4], "rounded": [4], "size": [1], "prependIcon": [1, "prepend-icon"], "appendIcon": [1, "append-icon"], "placeholder": [1], "type": [1], "value": [1544] }]]], ["e-avatar", [[1, "e-avatar", { "size": [1], "color": [1], "text": [1] }]]], ["e-card", [[1, "e-card", { "backdrop": [516], "dark": [516], "backdropBlur": [513, "backdrop-blur"] }]]], ["e-checkbox", [[1, "e-checkbox", { "value": [1540], "falseValue": [520, "false-value"], "trueValue": [520, "true-value"], "indeterminate": [4], "rounded": [4], "disabled": [4], "type": [1] }]]], ["e-menu", [[1, "e-menu"]]], ["e-progress", [[1, "e-progress", { "bgColor": [1, "bg-color"], "barColor": [1, "bar-color"], "value": [2], "maxValue": [2, "max-value"], "height": [1], "width": [1] }]]], ["e-radio", [[1, "e-radio", { "value": [1], "checked": [1540] }]]], ["e-radio-group", [[1, "e-radio-group", { "value": [1025] }, [[0, "valueChanged", "onSelectionChange"]]]]], ["e-tabs", [[1, "e-tabs", { "tabs": [1], "deserializedTabs": [32], "selectedTab": [32] }]]], ["e-icon", [[1, "e-icon", { "icon": [1], "color": [1], "size": [1] }]]], ["e-btn", [[1, "e-btn", { "rounded": [4], "disabled": [4], "icon": [1], "size": [1], "prependIcon": [1, "prepend-icon"], "appendIcon": [1, "append-icon"] }]]]], options);
    });
};
export { defineCustomElements };
