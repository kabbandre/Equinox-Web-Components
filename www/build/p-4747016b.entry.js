import{r as t,h as s,H as e}from"./p-cc373a46.js";const p=class{constructor(s){t(this,s),this.maxHeight="100px",this.openButtonText="Show more",this.openButtonIcon="ph-caret-up",this.hideButtonText="Show less",this.hideButtonIcon="ph-caret-down",this.elevation="6",this.isOpen=!1}render(){return s(e,null,s("div",{class:"expand__content",style:{maxHeight:this.isOpen?void 0:this.maxHeight}},s("slot",null)),s("button",{class:"expand__button elevation-"+this.elevation,onClick:()=>this.isOpen=!this.isOpen},s("slot",{name:"text"},this.isOpen?this.hideButtonText:this.openButtonText),s("e-icon",{icon:this.isOpen?this.hideButtonIcon:this.openButtonIcon})))}};p.style=":host{display:block}.expand__content{overflow:auto;z-index:0}.expand__button{margin:0 auto;background:#FFFFFF;padding:0 12px;height:24px;text-transform:uppercase;font-size:12px;line-height:150%;border-radius:100px;border:none;-webkit-box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);z-index:2;display:-ms-flexbox;display:flex;gap:10px;-ms-flex-align:center;align-items:center}";export{p as e_expand}