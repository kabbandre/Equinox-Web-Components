var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,i=0,n=arguments.length;i<n;i++)e+=arguments[i].length;for(var s=Array(e),r=0,i=0;i<n;i++)for(var l=arguments[i],t=0,d=l.length;t<d;t++,r++)s[r]=l[t];return s};System.register(["./p-33ebdb75.system.js","./p-e203184a.system.js"],(function(e){"use strict";var i,n,s,r,l,t;return{setters:[function(e){i=e.r;n=e.h;s=e.H},function(e){r=e.f;l=e.s;t=e.d}],execute:function(){var d=":host{display:block}";var a=e("e_fieldtree",function(){function e(e){var s=this;i(this,e);this.fields='[{"id":1,"icon":"ph-folder","name":"Cats","children":[{"id":2,"icon":"ph-file","name":"Color cats","children":[{"id":3,"name":"Yellow cats"},{"id":4,"name":"Black cats"}]}]},{"id":5,"icon":"ph-folder","name":"Dogs","children":[{"id":6,"icon":"ph-file","name":"Color dogs","children":[{"id":7,"name":"Yellow dogs"},{"id":8,"name":"Black dogs"}]}]},{"id":9,"icon":"ph-folder","name":"Fishes","children":[{"id":10,"icon":"ph-file","name":"Color Fishes","children":[{"id":11,"name":"Yellow Fishes"},{"id":12,"name":"Black Fishes"}]}]}]';this.deserializedFields=[];this.changeOpen=function(e){var i=e.id,n=e.isOpen;var t=r(s.deserializedFields,"id",i);l(s.deserializedFields,__spreadArrays(t,["isOpen"]),!n);s.deserializedFields=s.deserializedFields.map((function(e){return e}))};this.parseFields=function(e,i){if(i===void 0){i=1}return e.map((function(e){return n("div",{style:{display:"flex",cursor:"pointer"}},n("div",{style:{display:"flex",alignItems:"baseline"},onClick:function(){return s.changeOpen(e)}},i===1&&e.children&&n("e-icon",{size:"24px",style:{marginRight:"33px"},icon:e.isOpen?"ph-minus-circle":"ph-plus-circle"})),n("div",null,n("div",{style:{display:"flex",alignItems:"center",gap:"8px"},onClick:function(){return s.changeOpen(e)}},n("e-icon",{size:"24px",icon:e.icon}),e.name),n("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"}},e.isOpen&&e.children&&s.parseFields(e.children,i+1))))}))}}e.prototype.componentWillLoad=function(){this.deserializedFields=t(this.fields)};e.prototype.parseTabsProp=function(e){if(e)this.deserializedFields=t(this.fields)};e.prototype.render=function(){return n(s,null,this.parseFields(this.deserializedFields))};Object.defineProperty(e,"watchers",{get:function(){return{fields:["parseTabsProp"]}},enumerable:false,configurable:true});return e}());a.style=d}}}));