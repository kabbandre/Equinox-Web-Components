import{r as t,h as e,H as p}from"./p-cc373a46.js";const s=class{constructor(e){t(this,e),this.maxHeight="100px",this.openButtonText="Show more",this.openButtonIcon="ph-caret-down",this.hideButtonText="Show less",this.hideButtonIcon="ph-caret-up",this.elevation="6",this.isOpen=!1}render(){return e(p,null,e("div",{class:"expand__content",style:{maxHeight:this.isOpen?void 0:this.maxHeight}},e("slot",null)),e("div",{class:"expand-wrapper"},e("button",{class:"expand__button elevation-"+this.elevation,onClick:()=>this.isOpen=!this.isOpen},e("slot",{name:"text"},this.isOpen?this.hideButtonText:this.openButtonText),e("e-icon",{size:"14px",icon:this.isOpen?this.hideButtonIcon:this.openButtonIcon}))))}};s.style=":host{display:block}.expand__content{overflow:auto;z-index:0}.expand-wrapper{width:100%;position:relative}.expand__button{margin:0 auto;background:#FFFFFF;padding:0 12px;height:24px;text-transform:uppercase;font-size:12px;line-height:150%;border-radius:100px;border:none;-webkit-box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);z-index:2;display:-ms-flexbox;display:flex;gap:10px;-ms-flex-align:center;align-items:center}.expand-wrapper:before{position:absolute;top:12px;left:0;height:1px;background:var(--gray-300);width:100%;content:'';z-index:-1}";export{s as e_expand}