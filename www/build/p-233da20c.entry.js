import{r as i,h as e,H as n}from"./p-cc373a46.js";import{f as a,d}from"./p-de896ffd.js";const s=class{constructor(n){i(this,n),this.fields='[{"id":1,"name":"Applications :","children":[{"id":2,"name":"Calendar : app"},{"id":3,"name":"Chrome : app"},{"id":4,"name":"Webstorm : app"}]},{"id":5,"name":"Documents :","children":[{"id":6,"name":"vuetify :","children":[{"id":7,"name":"src :","children":[{"id":8,"name":"index : ts"},{"id":9,"name":"bootstrap : ts"}]}]},{"id":10,"name":"material2 :","children":[{"id":11,"name":"src :","children":[{"id":12,"name":"v-btn : ts"},{"id":13,"name":"v-card : ts"},{"id":14,"name":"v-window : ts"}]}]}]},{"id":15,"name":"Downloads :","children":[{"id":16,"name":"October : pdf"},{"id":17,"name":"November : pdf"},{"id":18,"name":"Tutorial : html"}]},{"id":19,"name":"Videos :","children":[{"id":20,"name":"Tutorials :","children":[{"id":21,"name":"Basic layouts : mp4"},{"id":22,"name":"Advanced techniques : mp4"},{"id":23,"name":"All about app : dir"}]},{"id":24,"name":"Intro : mov"},{"id":25,"name":"Conference introduction : avi"}]}]',this.deserializedFields=[],this.changeOpen=({id:i})=>{const e=a(this.deserializedFields,"id",i);console.log(this.deserializedFields[e])},this.parseFields=i=>i.map(i=>e("div",null,e("div",{style:{display:"flex",cursor:"pointer"},onClick:()=>this.changeOpen(i)},e("e-icon",{icon:i.icon}),i.name),""+i.isOpen,i.children&&this.parseFields(i.children)))}componentWillLoad(){this.deserializedFields=d(this.fields)}parseTabsProp(i){i&&(this.deserializedFields=d(this.fields))}render(){return e(n,null,this.parseFields(this.deserializedFields))}static get watchers(){return{fields:["parseTabsProp"]}}};s.style=":host{display:block}";export{s as e_fieldtree}