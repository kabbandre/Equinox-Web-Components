import{r as i,h as e,H as s}from"./p-cc373a46.js";import{f as n,s as l,d as o}from"./p-b72f83c8.js";const t=class{constructor(s){i(this,s),this.fields='[{"id":1,"icon":"ph-folder","name":"Cats","children":[{"id":2,"icon":"ph-file","name":"Color cats","children":[{"id":3,"name":"Yellow cats"},{"id":4,"name":"Black cats"}]}]},{"id":5,"icon":"ph-folder","name":"Dogs","children":[{"id":6,"icon":"ph-file","name":"Color dogs","children":[{"id":7,"name":"Yellow dogs"},{"id":8,"name":"Black dogs"}]}]},{"id":9,"icon":"ph-folder","name":"Fishes","children":[{"id":10,"icon":"ph-file","name":"Color Fishes","children":[{"id":11,"name":"Yellow Fishes"},{"id":12,"name":"Black Fishes"}]}]}]',this.deserializedFields=[],this.changeOpen=({id:i,isOpen:e})=>{const s=n(this.deserializedFields,"id",i);l(this.deserializedFields,[...s,"isOpen"],!e),this.deserializedFields=this.deserializedFields.map(i=>i)},this.parseFields=(i,s=1)=>i.map(i=>e("div",{style:{display:"flex",cursor:"pointer",padding:"6px 0"}},e("div",{style:{display:"flex",alignItems:"baseline"},onClick:()=>this.changeOpen(i)},1===s&&i.children&&e("e-icon",{size:"24px",style:{marginRight:"33px"},icon:i.isOpen?"ph-minus-circle":"ph-plus-circle"})),e("div",{class:"branch "+(i.isOpen?"branch-open":"")},e("div",{style:{display:"flex",alignItems:"center",gap:"8px"},onClick:()=>this.changeOpen(i)},e("e-icon",{size:"24px",icon:i.icon}),i.name),e("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"}},i.isOpen&&i.children&&this.parseFields(i.children,s+1)))))}componentWillLoad(){this.deserializedFields=o(this.fields)}parseTabsProp(i){i&&(this.deserializedFields=o(this.fields))}render(){return e(s,null,this.parseFields(this.deserializedFields))}static get watchers(){return{fields:["parseTabsProp"]}}};t.style=":host{display:block}.branch-open{position:relative}.branch-open:before{position:absolute;height:calc(100% - 17px);width:1px;content:'';left:12px;top:17px;background:var(--gray-300)}";export{t as e_fieldtree}