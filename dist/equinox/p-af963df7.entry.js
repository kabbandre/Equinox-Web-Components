import{r as t,h as o}from"./p-3c922a41.js";const i=class{constructor(i){t(this,i),this.size="xs",this.prependIcon="",this.appendIcon="",this.classes=()=>({rounded:this.rounded,disabled:this.disabled,icon:!!this.icon,[this.size]:!0}),this.renderIcon=t=>t&&o("e-icon",{icon:t}),this.renderContent=()=>this.icon?o("e-icon",{icon:this.icon}):[o("slot",{name:"prepend-icon"},this.renderIcon(this.prependIcon)),o("slot",null),o("slot",{name:"append-icon"},this.renderIcon(this.appendIcon))]}render(){return o("button",{class:this.classes()},this.renderContent())}};i.style=":host{display:block}button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:10px;-webkit-transition:.3s ease;transition:.3s ease;line-height:150%;background:#fff;color:#000;padding:4px 8px;border-radius:4px;border:none}button:hover,button:active{background:#000;color:#fff}button:focus{background:#fff;color:#000;-webkit-box-shadow:0 0 0 1px #cbd5e0;box-shadow:0 0 0 1px #cbd5e0}button.disabled{background:#cbd5e0;color:#fff}button.xs{font-size:12px;height:26px}button.xs.icon{width:26px}button.sm{font-size:12px;height:32px}button.sm.icon{font-size:18px;width:32px}button.md{font-size:12px;height:38px}button.md.icon{font-size:26px;width:38px}button.lg{font-size:14px;height:42px}button.lg.icon{font-size:30px;width:42px}button.xl{font-size:14px;height:46px}button.xl.icon{font-size:32px;width:46px}button.xll{font-size:16px;height:56px}button.xll.icon{font-size:32px;width:56px}button.icon{padding:0;border-radius:100%}button.rounded{border-radius:100px}";export{i as e_btn}