import { b as bootstrapLazy } from './index-ba575c47.js';
import { a as patchEsm } from './patch-b5b4dfa6.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["e-chat-box",[[1,"e-chat-box",{"type":[1],"value":[1025],"placeholder":[1],"outerPrependIcon":[1,"outer-prepend-icon"],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"],"outerAppendIcon":[1,"outer-append-icon"],"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-chip",[[1,"e-chip",{"color":[1],"textColor":[1,"text-color"],"text":[4],"outlined":[4],"disabled":[4],"shadow":[4],"rounded":[4],"prependIcon":[1,"prepend-icon"]}]]],["e-collapse",[[1,"e-collapse",{"headerTitle":[1,"header-title"],"openIcon":[1,"open-icon"],"closeIcon":[1,"close-icon"],"isOpen":[32]}]]],["e-expand",[[1,"e-expand",{"maxHeight":[1,"max-height"],"openButtonText":[1,"open-button-text"],"hideButtonText":[1,"hide-button-text"],"elevation":[1],"isOpen":[32]}]]],["e-input",[[1,"e-input",{"outlined":[4],"ghost":[4],"rounded":[4],"size":[1],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"],"placeholder":[1],"type":[1],"value":[1032]}]]],["e-avatar",[[1,"e-avatar",{"size":[1],"color":[1],"text":[1]}]]],["e-card",[[1,"e-card",{"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-checkbox",[[1,"e-checkbox",{"indeterminate":[4],"value":[1028]}]]],["e-fieldtree",[[1,"e-fieldtree"]]],["e-menu",[[1,"e-menu"]]],["e-progress",[[1,"e-progress",{"bgColor":[1,"bg-color"],"barColor":[1,"bar-color"],"value":[2],"maxValue":[2,"max-value"],"height":[1],"width":[1]}]]],["e-radio",[[1,"e-radio",{"value":[1],"checked":[1028]}]]],["e-radio-group",[[1,"e-radio-group",{"value":[1025]},[[0,"valueChanged","onSelectionChange"]]]]],["e-scroll",[[1,"e-scroll"]]],["e-select",[[1,"e-select"]]],["e-snip",[[1,"e-snip"]]],["e-switch",[[1,"e-switch"]]],["e-tabs",[[1,"e-tabs",{"tabs":[1],"deserializedTabs":[32],"selectedTab":[32]}]]],["e-textarea",[[1,"e-textarea"]]],["simple-config",[[1,"simple-config",{"simpleText":[1,"simple-text"],"aNumber":[2,"a-number"],"bNumber":[2,"b-number"],"isChecked":[4,"is-checked"],"startDate":[1,"start-date"],"backgroundColor":[1,"background-color"],"poorlyNamedProp":[1,"poorly-named-prop"]}]]],["e-icon",[[1,"e-icon",{"icon":[1],"color":[1],"size":[1]}]]],["e-btn",[[1,"e-btn",{"rounded":[4],"disabled":[4],"icon":[1],"size":[1],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"]}]]]], options);
  });
};

export { defineCustomElements };
