System.register(["./p-b9f8ff46.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.r;e=t.h}],execute:function(){var o=":host{display:block}button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:10px;-webkit-transition:.3s ease;transition:.3s ease;line-height:150%;background:#fff;color:#000;padding:4px 8px;border-radius:4px;border:none}button:hover,button:active{background:#000;color:#fff}button:focus{background:#fff;color:#000;-webkit-box-shadow:0 0 0 1px #cbd5e0;box-shadow:0 0 0 1px #cbd5e0}button.disabled{background:#cbd5e0;color:#fff}button.xs{font-size:12px;height:26px}button.xs.icon{width:26px}button.sm{font-size:12px;height:32px}button.sm.icon{font-size:18px;width:32px}button.md{font-size:12px;height:38px}button.md.icon{font-size:26px;width:38px}button.lg{font-size:14px;height:42px}button.lg.icon{font-size:30px;width:42px}button.xl{font-size:14px;height:46px}button.xl.icon{font-size:32px;width:46px}button.xll{font-size:16px;height:56px}button.xll.icon{font-size:32px;width:56px}button.icon{padding:0;border-radius:100%}button.rounded{border-radius:100px}";var i=t("e_btn",function(){function t(t){var o=this;n(this,t);this.icon="ph-plus";this.size="xs";this.prependIcon="";this.appendIcon="";this.classes=function(){var t;return t={rounded:o.rounded,disabled:o.disabled,icon:!!o.icon},t[o.size]=true,t};this.renderIcon=function(t){return t&&e("e-icon",{icon:t})};this.renderContent=function(){if(o.icon){return e("e-icon",{icon:o.icon})}else{return[e("slot",{name:"prepend-icon"},o.renderIcon(o.prependIcon)),e("slot",null,"Eclipse"),e("slot",{name:"append-icon"},o.renderIcon(o.appendIcon))]}}}t.prototype.render=function(){return e("button",{class:this.classes()},this.renderContent())};return t}());i.style=o}}}));