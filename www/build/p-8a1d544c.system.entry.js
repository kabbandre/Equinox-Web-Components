System.register(["./p-33ebdb75.system.js","./p-d09fe91f.system.js"],(function(e){"use strict";var i,t,s,n,r;return{setters:[function(e){i=e.r;t=e.h;s=e.H},function(e){n=e.f;r=e.d}],execute:function(){var l=":host{display:block}";var d=e("e_fieldtree",function(){function e(e){var s=this;i(this,e);this.fields='[{"id":"1","title":"asd","icon":"ph-smiley","children":[{"id":"2","title":"child","icon":"ph-check"}]}]';this.deserializedFields=[];this.parseFields=function(e){return e.map((function(e){return t("div",null,t("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return n(e,"id",e.id)}},t("e-icon",{icon:e.icon}),e.title),""+e.isOpen,e.isOpen&&e.children&&s.parseFields(e.children))}))}}e.prototype.componentWillLoad=function(){this.deserializedFields=r(this.fields)};e.prototype.parseTabsProp=function(e){if(e)this.deserializedFields=r(this.fields)};e.prototype.render=function(){return t(s,null,this.parseFields(this.deserializedFields))};Object.defineProperty(e,"watchers",{get:function(){return{fields:["parseTabsProp"]}},enumerable:false,configurable:true});return e}());d.style=l}}}));