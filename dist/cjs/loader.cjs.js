'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f70d3dff.js');
const patch = require('./patch-8527a2c9.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["e-card.cjs",[[1,"e-card",{"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-chat-box.cjs",[[1,"e-chat-box",{"type":[1],"value":[1025],"placeholder":[1],"outerPrependIcon":[1,"outer-prepend-icon"],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"],"outerAppendIcon":[1,"outer-append-icon"],"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-checkbox.cjs",[[1,"e-checkbox",{"indeterminate":[4]}]]],["e-collapse.cjs",[[1,"e-collapse"]]],["e-description.cjs",[[1,"e-description"]]],["e-entity.cjs",[[1,"e-entity"]]],["e-feedback.cjs",[[1,"e-feedback"]]],["e-fieldtree.cjs",[[1,"e-fieldtree"]]],["e-input.cjs",[[1,"e-input"]]],["e-menu.cjs",[[1,"e-menu"]]],["e-modal.cjs",[[1,"e-modal"]]],["e-preview.cjs",[[1,"e-preview"]]],["e-radio.cjs",[[1,"e-radio"]]],["e-select.cjs",[[1,"e-select"]]],["e-textarea.cjs",[[1,"e-textarea"]]],["simple-config.cjs",[[1,"simple-config",{"simpleText":[1,"simple-text"],"aNumber":[2,"a-number"],"bNumber":[2,"b-number"],"isChecked":[4,"is-checked"],"startDate":[1,"start-date"],"backgroundColor":[1,"background-color"],"poorlyNamedProp":[1,"poorly-named-prop"]}]]],["e-icon.cjs",[[1,"e-icon",{"icon":[1],"color":[1],"size":[1]}]]],["e-btn.cjs",[[1,"e-btn",{"rounded":[4],"disabled":[4],"icon":[1],"size":[1],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"]}]]],["e-avatar.cjs",[[1,"e-avatar",{"size":[1],"color":[1],"outlined":[4],"text":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
