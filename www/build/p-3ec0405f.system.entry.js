var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,i=0,n=arguments.length;i<n;i++)e+=arguments[i].length;for(var r=Array(e),s=0,i=0;i<n;i++)for(var d=arguments[i],t=0,a=d.length;t<a;t++,s++)r[s]=d[t];return r};System.register(["./p-33ebdb75.system.js","./p-e203184a.system.js"],(function(e){"use strict";var i,n,r,s,d,t;return{setters:[function(e){i=e.r;n=e.h;r=e.H},function(e){s=e.f;d=e.s;t=e.d}],execute:function(){var a=":host{display:block}";var l=e("e_fieldtree",function(){function e(e){var r=this;i(this,e);this.fields='[{"id":1,"name":"Applications :","children":[{"id":2,"name":"Calendar : app"},{"id":3,"name":"Chrome : app"},{"id":4,"name":"Webstorm : app"}]},{"id":5,"name":"Documents :","children":[{"id":6,"name":"vuetify :","children":[{"id":7,"name":"src :","children":[{"id":8,"name":"index : ts"},{"id":9,"name":"bootstrap : ts"}]}]},{"id":10,"name":"material2 :","children":[{"id":11,"name":"src :","children":[{"id":12,"name":"v-btn : ts"},{"id":13,"name":"v-card : ts"},{"id":14,"name":"v-window : ts"}]}]}]},{"id":15,"name":"Downloads :","children":[{"id":16,"name":"October : pdf"},{"id":17,"name":"November : pdf"},{"id":18,"name":"Tutorial : html"}]},{"id":19,"name":"Videos :","children":[{"id":20,"name":"Tutorials :","children":[{"id":21,"name":"Basic layouts : mp4"},{"id":22,"name":"Advanced techniques : mp4"},{"id":23,"name":"All about app : dir"}]},{"id":24,"name":"Intro : mov"},{"id":25,"name":"Conference introduction : avi"}]}]';this.deserializedFields=[];this.changeOpen=function(e){var i=e.id,n=e.isOpen;var t=s(r.deserializedFields,"id",i);d(r.deserializedFields,__spreadArrays(t,["isOpen"]),!n);r.deserializedFields=r.deserializedFields.map((function(e){return e}))};this.parseFields=function(e,i){if(i===void 0){i=1}return e.map((function(e){return n("div",null,n("div",{style:{display:"flex",cursor:"pointer"}},i===1&&n("e-icon",{style:{marginRight:"33px"},icon:e.isOpen?"ph-minus":"ph-plus"}),n("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return r.changeOpen(e)}},n("e-icon",{icon:e.icon}),e.name)),n("div",{style:{marginLeft:"20px"}},e.isOpen&&e.children&&r.parseFields(e.children,i++)))}))}}e.prototype.componentWillLoad=function(){this.deserializedFields=t(this.fields)};e.prototype.parseTabsProp=function(e){if(e)this.deserializedFields=t(this.fields)};e.prototype.render=function(){return n(r,null,this.parseFields(this.deserializedFields))};Object.defineProperty(e,"watchers",{get:function(){return{fields:["parseTabsProp"]}},enumerable:false,configurable:true});return e}());l.style=a}}}));