const e="equinox";let t,n,l,o=!1,s=!1,i=!1,c=0,r=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},p=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),y=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),b=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=e,i=m(t,o),c=h(n);d.ael(s,l,i,c),(t.o=t.o||[]).push(()=>d.rel(s,l,i,c))})},m=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},h=e=>0!=(2&e),w=new WeakMap,g=e=>"sc-"+e.u,_={},j=e=>"object"==(e=typeof e)||"function"===e,k="undefined"!=typeof Deno,v=!(k||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),M=(k&&Deno,v?process:k&&Deno,v?process:k&&Deno,(e,t,...n)=>{let l=null,o=null,s=!1,i=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!j(l))&&(l+=""),s&&i?c[c.length-1].p+=l:c.push(s?S(null,l):l),i=s)};if(r(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=S(e,null);return a.$=t,c.length>0&&(a.m=c),a.h=o,a}),S=(e,t)=>({t:0,g:e,p:t,_:null,m:null,$:null,h:null}),x={},C=(e,t,n,l,o,s)=>{if(n!==l){let c=fe(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=O(n),s=O(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if(c||"o"!==t[0]||"n"!==t[1]){const r=j(l);if((c||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&s||o)&&!r&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):fe(a,r)?r.slice(2):r[2]+t.slice(3),n&&d.rel(e,t,n,!1),l&&d.ael(e,t,l,!1)}},q=/\s/,O=e=>e?e.split(q):[],R=(e,t,n,l)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.$||_,i=t.$||_;for(l in s)l in i||C(o,l,s[l],void 0,n,t.t);for(l in i)C(o,l,s[l],i[l],n,t.t)},D=(e,s,c,r)=>{let a,f,d,p=s.m[c],$=0;if(o||(i=!0,"slot"===p.g&&(t&&r.classList.add(t+"-s"),p.t|=p.m?2:1)),null!==p.p)a=p._=u.createTextNode(p.p);else if(1&p.t)a=p._=u.createTextNode("");else if(a=p._=u.createElement(2&p.t?"slot-fb":p.g),R(null,p,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),p.m)for($=0;$<p.m.length;++$)f=D(e,p,$,a),f&&a.appendChild(f);return a["s-hn"]=l,3&p.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=p.h||"",d=e&&e.m&&e.m[c],d&&d.g===p.g&&e._&&T(e._,!1)),a},T=(e,t)=>{d.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(U(e).insertBefore(e,N(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&T(e,t)}d.t&=-2},L=(e,t,n,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===l&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=D(null,n,s,e),c&&(o[s]._=c,r.insertBefore(c,N(t))))},P=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(s=!0,(o=l._)["s-ol"]?o["s-ol"].remove():T(o,!0),o.remove())},E=(e,t)=>e.g===t.g&&("slot"!==e.g||e.h===t.h),N=e=>e&&e["s-ol"]||e,U=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,W=(e,t)=>{const n=t._=e._,l=e.m,o=t.m,s=t.p;let i;null===s?("slot"===t.g||R(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,i=0,c=t.length-1,r=t[0],a=t[c],f=l.length-1,u=l[0],d=l[f];for(;s<=c&&i<=f;)null==r?r=t[++s]:null==a?a=t[--c]:null==u?u=l[++i]:null==d?d=l[--f]:E(r,u)?(W(r,u),r=t[++s],u=l[++i]):E(a,d)?(W(a,d),a=t[--c],d=l[--f]):E(r,d)?("slot"!==r.g&&"slot"!==d.g||T(r._.parentNode,!1),W(r,d),e.insertBefore(r._,a._.nextSibling),r=t[++s],d=l[--f]):E(a,u)?("slot"!==r.g&&"slot"!==d.g||T(a._.parentNode,!1),W(a,u),e.insertBefore(a._,r._),a=t[--c],u=l[++i]):(o=D(t&&t[i],n,i,e),u=l[++i],o&&U(r._).insertBefore(o,N(r._)));s>c?L(e,null==l[f+1]?null:l[f+1]._,n,l,i,f):i>f&&P(t,s,c)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),L(n,null,t,o,0,o.length-1)):null!==l&&P(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.p!==s&&(n.data=s)},A=e=>{let t,n,l,o,s,i,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==t["s-hn"])if(i=c[o].nodeType,""!==s){if(1===i&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==c[o].textContent.trim()){t.hidden=!0;break}A(t)}},F=[],H=e=>{let t,n,l,o,i,c,r=0,a=e.childNodes,f=a.length;for(;r<f;r++){if(t=a[r],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(V(n,o)?(i=F.find(e=>e.j===n),s=!0,n["s-sn"]=n["s-sn"]||o,i?i.k=t:F.push({k:t,j:n}),n["s-sr"]&&F.map(e=>{V(e.j,n["s-sn"])&&(i=F.find(e=>e.j===n),i&&!e.k&&(e.k=i.k))})):F.some(e=>e.j===n)||F.push({j:n}));1===t.nodeType&&H(t)}},V=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,z=e=>ce(e).v,B=(e,t,n)=>{const l=z(e);return{emit:e=>G(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},G=(e,t,n)=>{const l=d.ce(t,n);return e.dispatchEvent(l),l},I=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.M=t))},J=(e,t)=>{if(e.t|=16,!(4&e.t))return I(e,e.S),je(()=>K(e,t));e.t|=512},K=(e,t)=>{const n=e.s;let l;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>ee(n,e,t)),e.i=null),l=ee(n,"componentWillLoad")),te(l,()=>Q(e,n,t))},Q=(e,c,r)=>{const a=e.v,f=a["s-rc"];r&&(e=>{const t=e.C,n=e.v,l=t.t,o=((e,t)=>{let n=g(t),l=$e.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=w.get(e=e.head||e);o||w.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);((e,c)=>{const r=e.v,a=e.C,f=e.q||S(null,null),$=(e=>e&&e.g===x)(c)?c:M(null,null,c);if(l=r.tagName,$.g=null,$.t|=4,e.q=$,$._=f._=r.shadowRoot||r,t=r["s-sc"],n=r["s-cr"],o=p&&0!=(1&a.t),s=!1,W(f,$),d.t|=1,i){let e,t,n,l,o,s;H($._);let i=0;for(;i<F.length;i++)e=F[i],t=e.j,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<F.length;i++)if(e=F[i],t=e.j,e.k){for(l=e.k.parentNode,o=e.k.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&A($._),d.t&=-2,F.length=0})(e,X(e,c)),f&&(f.map(e=>e()),a["s-rc"]=void 0);{const t=a["s-p"],n=()=>Y(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},X=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){ue(n)}return t},Y=e=>{const t=e.v,n=e.s,l=e.S;64&e.t||(e.t|=64,ne(t),ee(n,"componentDidLoad"),e.O(t),l||Z()),e.M&&(e.M(),e.M=void 0),512&e.t&&_e(()=>J(e,!1)),e.t&=-517},Z=()=>{ne(u.documentElement),d.t|=2,_e(()=>G(a,"appload",{detail:{namespace:"equinox"}}))},ee=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){ue(l)}},te=(e,t)=>e&&e.then?e.then(t):t(),ne=e=>e.classList.add("hydrated"),le=(e,t,n)=>{if(t.R){e.watchers&&(t.D=e.watchers);const l=Object.entries(t.R),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>ce(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ce(e),s=o.T.get(t),i=o.t,c=o.s;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.R[t][0]),!(8&i&&void 0!==s||n===s)&&(o.T.set(t,n),c)){if(l.D&&128&i){const e=l.D[t];e&&e.map(e=>{try{c[e](n,s,t)}catch(l){ue(l)}})}2==(18&i)&&J(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){d.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},oe=e=>{ee(e,"connectedCallback")},se=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=u.head,i=s.querySelector("meta[charset]"),c=u.createElement("style"),r=[];let f,$=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",u.baseURI).href,t.syncQueue&&(d.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],R:t[2],L:t[3]};s.R=t[2],s.L=t[3],s.D={},!p&&1&s.t&&(s.t|=8);const i=s.u,c=class extends HTMLElement{constructor(e){super(e),ae(e=this,s),1&s.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),$?r.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=ce(e),n=t.C,l=()=>{};if(1&t.t)b(e,t,n.L),oe(t.s);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){I(t,t.S=n);break}}n.R&&Object.entries(n.R).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),_e(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=pe(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.D=o.watchers,le(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){ue(c)}t.t&=-9,t.t|=128,e(),oe(t.s)}if(o.style){let e=o.style;const t=g(n);if(!$e.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_equinox("./p-7faff4bb.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=$e.get(e);y&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,$e.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.S,i=()=>J(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n))}l()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=ce(this);e.o&&(e.o.map(e=>e()),e.o=void 0)}})())}forceUpdate(){(()=>{{const e=ce(this);e.v.isConnected&&2==(18&e.t)&&J(e,!1)}})()}componentOnReady(){return ce(this).P}};s.N=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,le(c,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,i?i.nextSibling:s.firstChild),$=!1,r.length?r.map(e=>e.connectedCallback()):d.jmp(()=>f=setTimeout(Z,30))},ie=new WeakMap,ce=e=>ie.get(e),re=(e,t)=>ie.set(t.s=e,t),ae=(e,t)=>{const n={t:0,v:e,C:t,T:new Map};return n.P=new Promise(e=>n.O=e),e["s-p"]=[],e["s-rc"]=[],b(e,n,t.L),ie.set(e,n)},fe=(e,t)=>t in e,ue=e=>console.error(e),de=new Map,pe=e=>{const t=e.u.replace(/-/g,"_"),n=e.N,l=de.get(n);return l?l[t]:__sc_import_equinox(`./${n}.entry.js`).then(e=>(de.set(n,e),e[t]),ue)},$e=new Map,ye=[],be=[],me=[],he=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&d.t?_e(ge):d.raf(ge))},we=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){ue(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},ge=()=>{c++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ue(t)}e.length=0})(ye);{const e=2==(6&d.t)?performance.now()+14*Math.ceil(.1*c):1/0;we(be,e),we(me,e),be.length>0&&(me.push(...be),be.length=0),(r=ye.length+be.length+me.length>0)?d.raf(ge):c=0}},_e=e=>$().then(e),je=he(be,!0);export{f as C,x as H,e as N,$ as a,se as b,B as c,u as d,z as g,M as h,d as p,re as r,a as w}