import{r as t,c as o,h as s,g as e}from"./p-3c922a41.js";const n=class{constructor(s){t(this,s),this.valueChanged=o(this,"valueChanged",7)}onValueChange(){var t;null===(t=this.findRadios())||void 0===t||t.forEach(t=>{t.checked=t.value===this.value})}connectedCallback(){this.onValueChange()}componentDidLoad(){this.onValueChange()}onSelectionChange(t){this.value=t.target.value}findRadios(){var t,o;return console.log(null===(t=this.host.shadowRoot.querySelector("slot"))||void 0===t?void 0:t.assignedElements()),null===(o=this.host.shadowRoot.querySelector("slot"))||void 0===o?void 0:o.assignedElements()}render(){return s("slot",null)}get host(){return e(this)}static get watchers(){return{value:["onValueChange"]}}};export{n as e_radio_group}