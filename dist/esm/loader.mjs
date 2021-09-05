import { b as bootstrapLazy } from './index-90ef84af.js';
import { a as patchEsm } from './patch-b82f8608.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["e-card",[[1,"e-card",{"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-chat-box",[[1,"e-chat-box",{"type":[1],"value":[1025],"placeholder":[1],"outerPrependIcon":[1,"outer-prepend-icon"],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"],"outerAppendIcon":[1,"outer-append-icon"],"backdrop":[4],"dark":[4],"backdropBlur":[1,"backdrop-blur"]}]]],["e-checkbox",[[1,"e-checkbox",{"indeterminate":[4]}]]],["e-collapse",[[1,"e-collapse"]]],["e-description",[[1,"e-description"]]],["e-entity",[[1,"e-entity"]]],["e-feedback",[[1,"e-feedback"]]],["e-fieldtree",[[1,"e-fieldtree"]]],["e-input",[[1,"e-input"]]],["e-menu",[[1,"e-menu"]]],["e-modal",[[1,"e-modal"]]],["e-preview",[[1,"e-preview"]]],["e-radio",[[1,"e-radio"]]],["e-select",[[1,"e-select"]]],["e-textarea",[[1,"e-textarea"]]],["simple-config",[[1,"simple-config",{"simpleText":[1,"simple-text"],"aNumber":[2,"a-number"],"bNumber":[2,"b-number"],"isChecked":[4,"is-checked"],"startDate":[1,"start-date"],"backgroundColor":[1,"background-color"],"poorlyNamedProp":[1,"poorly-named-prop"]}]]],["e-icon",[[1,"e-icon",{"icon":[1],"color":[1],"size":[1]}]]],["e-btn",[[1,"e-btn",{"rounded":[4],"disabled":[4],"icon":[1],"size":[1],"prependIcon":[1,"prepend-icon"],"appendIcon":[1,"append-icon"]}]]],["e-avatar",[[1,"e-avatar",{"size":[1],"color":[1],"outlined":[4],"text":[1]}]]]], options);
  });
};

export { defineCustomElements };
