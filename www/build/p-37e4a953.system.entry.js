System.register(["./p-33ebdb75.system.js","./p-587ea244.system.js"],(function(t){"use strict";var e,a,r,s,i;return{setters:[function(t){e=t.r;a=t.c;r=t.h;s=t.H},function(t){i=t.d}],execute:function(){var n=":host{display:block}.tabs{display:-ms-flexbox;display:flex;gap:12px}.tabs .tab{cursor:pointer;color:var(--primary);background:var(--gray-50);padding:12px;border-radius:100px}.tabs .tab.active{color:#fff;background:var(--primary)}.tabs .tab.disabled{color:var(--gray-500);background:transparent}.tabs .tab.text{padding:12px 0;color:var(--gray-500);background:transparent}.tabs .tab.text.active{color:var(--primary);font-weight:bold}.tabs .tab.text.disabled{color:var(--gray-300)}.tabs .tab.underline{padding:6px;color:var(--primary)}";var o=t("e_tabs",function(){function t(t){e(this,t);this.tabSelected=a(this,"tabSelected",7);this.tabs='[{"key":"Stencil","title":"www.stenciljs.com"},{"key":"Google","title":"www.google.com"}]';this.deserializedTabs=[];this.selectedTab={title:null,key:null}}t.prototype.componentWillLoad=function(){this.deserializedTabs=i(this.tabs)};t.prototype.parseTabsProp=function(t){if(t)this.deserializedTabs=i(this.tabs)};t.prototype.tabSelectedHandler=function(t){this.selectedTab=Object.assign({},t);this.tabSelected.emit(t)};t.prototype.render=function(){var t=this;return r(s,null,r("div",{class:"tabs"},this.deserializedTabs.map((function(e){return r("div",{class:"tab "+(t.selectedTab.key===e.key&&"active"),onClick:function(){return!e.disabled&&t.tabSelectedHandler(e)}},e.title)}))))};Object.defineProperty(t,"watchers",{get:function(){return{tabs:["parseTabsProp"]}},enumerable:false,configurable:true});return t}());o.style=n}}}));