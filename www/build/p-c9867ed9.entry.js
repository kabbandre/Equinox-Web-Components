import{r as t,c as e,h as i}from"./p-cc373a46.js";const o=class{constructor(i){t(this,i),this.valueChanged=e(this,"valueChanged",7),this.value=!1,this.falseValue=!1,this.trueValue=!0,this.type="checkbox",this.classes=()=>({indeterminate:this.indeterminate,[this.type]:!0,rounded:this.rounded,disabled:this.disabled,container:!0})}valueChangedHandler(t){this.disabled||this.valueChanged.emit(t?this.trueValue:this.falseValue)}connectedCallback(){this.valueChangedHandler(this.value)}componentDidLoad(){this.valueChangedHandler(this.value)}render(){return i("label",{class:this.classes()},i("slot",null),i("input",{checked:this.value,ref:t=>this.checkboxInput=t,onChange:()=>this.valueChangedHandler(this.checkboxInput.checked),type:"checkbox"}),i("span",{class:"checkmark"}))}};o.style=':host{display:block}.switch.container{position:relative;display:inline-block;width:60px;height:34px}.switch.container input{opacity:0;width:0;height:0}.switch .checkmark{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:4px}.switch .checkmark:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;border-radius:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}.switch input:checked+.checkmark{background-color:var(--primary)}.switch input:focus+.checkmark{-webkit-box-shadow:0 0 1px var(--primary);box-shadow:0 0 1px var(--primary)}.switch input:checked+.checkmark:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.switch .checkmark.round{border-radius:100px}.switch .checkmark.round:before{border-radius:50%}.checkbox.container{display:block;position:relative;padding-left:36px;cursor:pointer;padding-top:2px;font-size:16px;line-height:150%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox.container input{position:absolute;cursor:pointer;opacity:0;height:0;width:0}.checkbox .checkmark{-webkit-transition:.3s ease;transition:.3s ease;position:absolute;top:0;left:0;height:24px;width:24px;background-color:var(--gray-100);border-radius:4px;border:1px solid var(--gray-100)}.checkbox.container:hover input~.checkmark{background-color:var(--gray-200)}.checkbox.container input:checked~.checkmark{background-color:var(--primary)}.checkbox .checkmark:after{content:"";position:absolute;display:none}.checkbox.container input:checked~.checkmark:after{display:block}.checkbox.container .checkmark:after{-webkit-transition:.3s ease;transition:.3s ease;width:100%;font-size:22px;color:#fff;text-align:center;font-family:"Phosphor";content:"\\f0e7"}.indeterminate.checkbox.container .checkmark:after{content:"\\f21a"}';export{o as e_checkbox}