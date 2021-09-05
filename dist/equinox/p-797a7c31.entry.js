import{r as p,c as r,h as i,H as t}from"./p-f293e636.js";const a=class{constructor(t){p(this,t),this.valueChanged=r(this,"valueChanged",7),this.size="md",this.type="text",this.classes=()=>({outlined:this.outlined,ghost:this.ghost,rounded:this.rounded,[this.size]:!0,"input-wrapper":!0}),this.renderIcon=p=>p&&i("e-icon",{size:"18px",icon:p})}valueChangedHandler(p){this.value=p.target?p.target.value:null,this.valueChanged.emit(this.value)}render(){return i(t,null,i("div",{class:this.classes()},i("slot",{name:"prepend-icon"},this.renderIcon(this.prependIcon)),i("input",{placeholder:this.placeholder,value:this.value,onInput:p=>this.valueChangedHandler(p)}),i("slot",{name:"append-icon"},this.renderIcon(this.appendIcon))))}};a.style=":host{display:-ms-flexbox;display:flex}.input-wrapper{-webkit-transition:all .3s ease;transition:all .3s ease;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:12px;padding:0 22px;background:var(--gray-100);border-radius:3px}.input-wrapper input{color:var(--gray-500)}.input-wrapper.outlined{background:none;-webkit-box-shadow:0 0 0 1px var(--gray-300);box-shadow:0 0 0 1px var(--gray-300)}.input-wrapper.ghost{background:none}.input-wrapper:hover{-webkit-box-shadow:0 0 0 1px var(--gray-400);box-shadow:0 0 0 1px var(--gray-400)}.input-wrapper:focus-within{-webkit-box-shadow:0 0 0 1px var(--primary);box-shadow:0 0 0 1px var(--primary)}.input-wrapper:focus-within input{color:var(--primary)}.input-wrapper.rounded{border-radius:100px}.input-wrapper.xs{height:26px}.input-wrapper.sm{height:32px}.input-wrapper.md{height:38px}.input-wrapper.lg{height:42px}.input-wrapper.xl{height:46px}.input-wrapper.xxl{height:56px}.input-wrapper input{background:transparent;outline:none;border:none}";export{a as e_input}