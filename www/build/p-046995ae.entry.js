import{r as e,h as t}from"./p-a35f7b5b.js";const n=class{constructor(t){e(this,t),this.classes=()=>({indeterminate:this.indeterminate,container:!0})}render(){return t("label",{class:this.classes()},t("slot",null,"Eclipse"),t("input",{type:"checkbox"}),t("span",{class:"checkmark"}))}};n.style=':host{display:block}.container{display:block;position:relative;padding-left:36px;cursor:pointer;padding-top:2px;font-size:16px;line-height:150%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{-webkit-transition:.3s ease;transition:.3s ease;position:absolute;top:0;left:0;height:24px;width:24px;background-color:var(--gray-100);border-radius:4px;border:1px solid var(--gray-100)}.container:hover input~.checkmark{background-color:var(--gray-200)}.container input:checked~.checkmark{background-color:var(--primary)}.checkmark:after{content:"";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{-webkit-transition:.3s ease;transition:.3s ease;width:100%;font-size:22px;color:#fff;text-align:center;font-family:"Phosphor";content:"\\f0e7"}.indeterminate.container .checkmark:after{content:"\\f21a"}';export{n as e_checkbox}