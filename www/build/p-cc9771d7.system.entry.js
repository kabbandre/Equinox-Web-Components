System.register(["./p-33ebdb75.system.js","./p-5415cfc5.system.js"],(function(e){"use strict";var i,n,d,t,r;return{setters:[function(e){i=e.r;n=e.h;d=e.H},function(e){t=e.f;r=e.d}],execute:function(){var s=":host{display:block}";var a=e("e_fieldtree",function(){function e(e){var d=this;i(this,e);this.fields='[{"id":1,"name":"Applications :","children":[{"id":2,"name":"Calendar : app"},{"id":3,"name":"Chrome : app"},{"id":4,"name":"Webstorm : app"}]},{"id":5,"name":"Documents :","children":[{"id":6,"name":"vuetify :","children":[{"id":7,"name":"src :","children":[{"id":8,"name":"index : ts"},{"id":9,"name":"bootstrap : ts"}]}]},{"id":10,"name":"material2 :","children":[{"id":11,"name":"src :","children":[{"id":12,"name":"v-btn : ts"},{"id":13,"name":"v-card : ts"},{"id":14,"name":"v-window : ts"}]}]}]},{"id":15,"name":"Downloads :","children":[{"id":16,"name":"October : pdf"},{"id":17,"name":"November : pdf"},{"id":18,"name":"Tutorial : html"}]},{"id":19,"name":"Videos :","children":[{"id":20,"name":"Tutorials :","children":[{"id":21,"name":"Basic layouts : mp4"},{"id":22,"name":"Advanced techniques : mp4"},{"id":23,"name":"All about app : dir"}]},{"id":24,"name":"Intro : mov"},{"id":25,"name":"Conference introduction : avi"}]}]';this.deserializedFields=[];this.parseFields=function(e){return e.map((function(e){return n("div",null,n("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return console.log(t(d.fields,"id",e.id))}},n("e-icon",{icon:e.icon}),e.name),""+e.isOpen,e.children&&d.parseFields(e.children))}))}}e.prototype.componentWillLoad=function(){this.deserializedFields=r(this.fields)};e.prototype.parseTabsProp=function(e){if(e)this.deserializedFields=r(this.fields)};e.prototype.render=function(){return n(d,null,this.parseFields(this.deserializedFields))};Object.defineProperty(e,"watchers",{get:function(){return{fields:["parseTabsProp"]}},enumerable:false,configurable:true});return e}());a.style=s}}}));