import{r as s,h as t,H as i}from"./p-cc373a46.js";import{d as e}from"./p-d58f8a45.js";const r=class{constructor(i){s(this,i),this.fields='[{"title":"asd","icon":"ph-smiley","children":[{"title":"child","icon":"ph-check"}]}]',this.deserializedFields=[],this.parseFields=s=>s.map(s=>t("div",null,t("e-icon",{icon:s.icon}),s.title,s.children&&this.parseFields(s.children)))}componentWillLoad(){this.deserializedFields=e(this.fields)}parseTabsProp(s){s&&(this.deserializedFields=e(this.fields))}render(){return t(i,null,this.parseFields(this.deserializedFields))}static get watchers(){return{fields:["parseTabsProp"]}}};r.style=":host{display:block}";export{r as e_fieldtree}