import{r as t,h as e}from"./p-f293e636.js";const s=class{constructor(s){t(this,s),this.classes=()=>({text:this.text,outlined:this.outlined,disabled:this.disabled,shadow:this.shadow,rounded:this.rounded}),this.styles=()=>{const t={};return this.textColor&&(t.color=this.textColor),this.color&&(this.outlined&&(t.borderColor=this.color),this.outlined||this.shadow||this.text||this.disabled||(t.background=this.color)),t},this.renderIcon=t=>t&&e("e-icon",{icon:t})}render(){return e("button",{class:this.classes(),style:this.styles()},e("slot",{name:"prepend"},this.renderIcon(this.prependIcon)),e("slot",null),e("slot",{name:"append"}))}};s.style=":host{display:block}button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:10px;-webkit-transition:.3s ease;transition:.3s ease;line-height:150%;background:var(--gray-200);color:var(--primary);padding:4px 8px;border-radius:4px;border:none}button.text,button.outlined,button.disabled,button.shadow{background:none}button.outlined{border:1px solid var(--primary)}button.disabled{color:var(--gray-300) !important}button.shadow{-webkit-box-shadow:0 0 7px rgba(231,204,180,0.22);box-shadow:0 0 7px rgba(231,204,180,0.22);border:1px solid linear-gradient(90deg,#e7ccb4 0%,rgba(255,255,255,0) 100%);border-image-source:linear-gradient(0,#f2f2f2,#f2f2f2),linear-gradient(90deg,#e7ccb4 0%,rgba(255,255,255,0) 100%)}button.rounded{border-radius:100px}";export{s as e_chip}