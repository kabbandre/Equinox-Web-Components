System.register(["./p-59cde139.system.js"],(function(t){"use strict";var e,n,i;return{setters:[function(t){e=t.r;n=t.c;i=t.h}],execute:function(){var r=':host{display:block}.container{display:block;position:relative;padding-left:36px;cursor:pointer;padding-top:1px;font-size:16px;line-height:150%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{-webkit-transition:.3s ease;transition:.3s ease;position:absolute;top:0;left:0;height:24px;width:24px;background-color:var(--gray-100);border-radius:50%}.container:hover input~.checkmark{background-color:var(--gray-200)}.checkmark:after{-webkit-transition:display .3s ease;transition:display .3s ease;content:"";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{width:15px;height:15px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;background:var(--primary)}';var a=t("e_radio",function(){function t(t){e(this,t);this.input=n(this,"input",7)}t.prototype.inputHandler=function(t){this.value=t.target?t.target.value:null;this.input.emit(this.value)};t.prototype.render=function(){var t=this;return i("label",{class:"container"},i("slot",null,"Eclipse"),i("input",{name:this.name,onInput:function(e){return t.inputHandler(e)},type:"checkbox"}),i("span",{class:"checkmark"}))};return t}());a.style=r}}}));