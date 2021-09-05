'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2969b752.js');
const patch = require('./patch-34a4e932.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["e-chat-box.cjs",[[1,"e-chat-box",{"type":[1],"value":[1025],"placeholder":[1],"outerPrependIcon":[1,"outer-prepend-icon"],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"],"outerAppendIcon":[1,"outer-append-icon"],"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-chip.cjs",[[1,"e-chip",{"color":[1],"textColor":[1,"text-color"],"text":[4],"outlined":[4],"disabled":[4],"shadow":[4],"rounded":[4],"prependIcon":[1,"prepend-icon"]}]]],["e-collapse.cjs",[[1,"e-collapse",{"headerTitle":[1,"header-title"],"openIcon":[1,"open-icon"],"closeIcon":[1,"close-icon"],"isOpen":[32]}]]],["e-expand.cjs",[[1,"e-expand",{"maxHeight":[1,"max-height"],"openButtonText":[1,"open-button-text"],"hideButtonText":[1,"hide-button-text"],"elevation":[1],"isOpen":[32]}]]],["e-input.cjs",[[1,"e-input",{"outlined":[4],"ghost":[4],"rounded":[4],"size":[1],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"],"placeholder":[1],"type":[1],"value":[1544]}]]],["e-avatar.cjs",[[1,"e-avatar",{"size":[1],"color":[1],"text":[1]}]]],["e-card.cjs",[[1,"e-card",{"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-checkbox.cjs",[[1,"e-checkbox",{"value":[1540],"indeterminate":[4]}]]],["e-fieldtree.cjs",[[1,"e-fieldtree"]]],["e-menu.cjs",[[1,"e-menu"]]],["e-progress.cjs",[[1,"e-progress",{"bgColor":[1,"bg-color"],"barColor":[1,"bar-color"],"value":[2],"maxValue":[2,"max-value"],"height":[1],"width":[1]}]]],["e-radio.cjs",[[1,"e-radio",{"value":[1],"checked":[1540]}]]],["e-radio-group.cjs",[[1,"e-radio-group",{"value":[1025]},[[0,"valueChanged","onSelectionChange"]]]]],["e-scroll.cjs",[[1,"e-scroll"]]],["e-select.cjs",[[1,"e-select"]]],["e-snip.cjs",[[1,"e-snip"]]],["e-switch.cjs",[[1,"e-switch"]]],["e-tabs.cjs",[[1,"e-tabs",{"tabs":[1],"deserializedTabs":[32],"selectedTab":[32]}]]],["e-textarea.cjs",[[1,"e-textarea"]]],["simple-config.cjs",[[1,"simple-config",{"simpleText":[1,"simple-text"],"aNumber":[2,"a-number"],"bNumber":[2,"b-number"],"isChecked":[4,"is-checked"],"startDate":[1,"start-date"],"backgroundColor":[1,"background-color"],"poorlyNamedProp":[1,"poorly-named-prop"]}]]],["e-icon.cjs",[[1,"e-icon",{"icon":[1],"color":[1],"size":[1]}]]],["e-btn.cjs",[[1,"e-btn",{"rounded":[4],"disabled":[4],"icon":[1],"size":[1],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
