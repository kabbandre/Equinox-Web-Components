System.register(["./p-33ebdb75.system.js","./p-090ae5ab.system.js"],(function(e){"use strict";var i,t,s,n;return{setters:[function(e){i=e.r;t=e.h;s=e.H},function(e){n=e.d}],execute:function(){var r=":host{display:block}";var l=e("e_fieldtree",function(){function e(e){var s=this;i(this,e);this.fields='[{"title":"asd","icon":"ph-smiley","children":[{"title":"child","icon":"ph-check"}]}]';this.deserializedFields=[];this.parseFields=function(e){return e.map((function(e){return t("div",null,t("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return e.isOpen=!e.isOpen}},t("e-icon",{icon:e.icon}),e.title),!!e.isOpen.toString(),e.isOpen&&s.parseFields(e.children))}))}}e.prototype.componentWillLoad=function(){this.deserializedFields=n(this.fields)};e.prototype.parseTabsProp=function(e){if(e)this.deserializedFields=n(this.fields)};e.prototype.render=function(){return t(s,null,this.parseFields(this.deserializedFields))};Object.defineProperty(e,"watchers",{get:function(){return{fields:["parseTabsProp"]}},enumerable:false,configurable:true});return e}());l.style=r}}}));