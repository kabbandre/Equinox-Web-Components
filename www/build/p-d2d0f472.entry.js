import{r as t,c as a,h as r,H as s}from"./p-cc373a46.js";import{d as e}from"./p-b72f83c8.js";const i=class{constructor(r){t(this,r),this.tabSelected=a(this,"tabSelected",7),this.tabs='[{"key":"Stencil","title":"www.stenciljs.com"},{"key":"Google","title":"www.google.com"}]',this.deserializedTabs=[],this.selectedTab={title:null,key:null}}componentWillLoad(){this.deserializedTabs=e(this.tabs)}parseTabsProp(t){t&&(this.deserializedTabs=e(this.tabs))}tabSelectedHandler(t){this.selectedTab=Object.assign({},t),this.tabSelected.emit(t)}render(){return r(s,null,r("div",{class:"tabs"},this.deserializedTabs.map(t=>r("div",{class:"tab "+(this.selectedTab.key===t.key&&"active"),onClick:()=>!t.disabled&&this.tabSelectedHandler(t)},t.title))))}static get watchers(){return{tabs:["parseTabsProp"]}}};i.style=":host{display:block}.tabs{display:-ms-flexbox;display:flex;gap:12px}.tabs .tab{cursor:pointer;color:var(--primary);background:var(--gray-50);padding:12px;border-radius:100px}.tabs .tab.active{color:#fff;background:var(--primary)}.tabs .tab.disabled{color:var(--gray-500);background:transparent}.tabs .tab.text{padding:12px 0;color:var(--gray-500);background:transparent}.tabs .tab.text.active{color:var(--primary);font-weight:bold}.tabs .tab.text.disabled{color:var(--gray-300)}.tabs .tab.underline{padding:6px;color:var(--primary)}";export{i as e_tabs}