System.register(["./p-59cde139.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.r;r=e.h}],execute:function(){var o=":host{display:block}button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:10px;-webkit-transition:.3s ease;transition:.3s ease;line-height:150%;background:var(--gray-200);color:var(--primary);padding:4px 8px;border-radius:4px;border:none}button.text,button.outlined,button.disabled,button.shadow{background:none}button.outlined{border:1px solid var(--primary)}button.disabled{color:var(--gray-300) !important}button.shadow{-webkit-box-shadow:0 0 7px rgba(231,204,180,0.22);box-shadow:0 0 7px rgba(231,204,180,0.22);border:1px solid linear-gradient(90deg,#e7ccb4 0%,rgba(255,255,255,0) 100%);border-image-source:linear-gradient(0,#f2f2f2,#f2f2f2),linear-gradient(90deg,#e7ccb4 0%,rgba(255,255,255,0) 100%)}button.rounded{border-radius:100px}";var n=e("e_chip",function(){function e(e){var o=this;t(this,e);this.classes=function(){return{text:o.text,outlined:o.outlined,disabled:o.disabled,shadow:o.shadow,rounded:o.rounded}};this.styles=function(){var e={};if(o.textColor){e.color=o.textColor}if(o.color){if(o.outlined){e.borderColor=o.color}if(!o.outlined&&!o.shadow&&!o.text&&!o.disabled){e.background=o.color}}return e};this.renderIcon=function(e){return e&&r("e-icon",{icon:e})}}e.prototype.render=function(){return r("button",{class:this.classes(),style:this.styles()},r("slot",{name:"prepend"},this.renderIcon(this.prependIcon)),r("slot",null),r("slot",{name:"append"}))};return e}());n.style=o}}}));