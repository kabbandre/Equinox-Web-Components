var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(t.next(e))}catch(r){i(r)}}function o(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(o){s=[6,o];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t=e("N","equinox");var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=0;var c=false;var v=e("w",typeof window!=="undefined"?window:{});var d=e("C",v.CSS);var h=e("d",v.document||{head:{}});var p=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)},ce:function(e,r){return new CustomEvent(e,r)}});var m=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=e("a",(function(e){return Promise.resolve(e)}));var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=function(e,r,n,t){if(n){n.map((function(n){var t=n[0],a=n[1],i=n[2];var s=e;var o=w(r,i);var l=N(t);p.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return p.rel(s,a,o,l)}))}))}};var w=function(e,r){return function(n){{if(e.$flags$&256){e.$lazyInstance$[r](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,n])}}}};var N=function(e){return(e&2)!==0};var R="{visibility:hidden}.hydrated{visibility:inherit}";var S=function(e,r){if(r===void 0){r=""}{return function(){return}}};var _=function(e,r){{return function(){return}}};var x=new WeakMap;var C=function(e,r,n){var t=ze.get(e);if(y&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}ze.set(e,t)};var L=function(e,r,n,t){var a=k(r);var i=ze.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=x.get(e);var o=void 0;if(!s){x.set(e,s=new Set)}if(!s.has(a)){{if(p.$cssShim$){o=p.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var T=function(e){var r=e.$cmpMeta$;var n=e.$hostElement$;var t=r.$flags$;var a=S("attachStyles",r.$tagName$);var i=L(m&&n.shadowRoot?n.shadowRoot:n.getRootNode(),r,e.$modeName$,n);if(t&10){n["s-sc"]=i;n.classList.add(i+"-h")}a()};var k=function(e,r){return"sc-"+e.$tagName$};var E={};var M=function(e){return e!=null};var j=function(){};var A=function(e){e=typeof e;return e==="object"||e==="function"};var P=typeof Deno!=="undefined";var B=!P&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var I=P&&Deno.build.os==="windows";var O=B?process.cwd:P?Deno.cwd:function(){return"/"};var q=B?process.exit:P?Deno.exit:j;var z=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!A(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?U(null,a):a)}o=s}}};f(n);if(r){if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=U(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var U=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$name$=null}return n};var H=e("H",{});var D=function(e){return e&&e.$tag$===H};var V=function(e,r,n,t,a,i){if(n!==t){var s=Be(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=F(n);var $=F(t);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in n){if(!t||t[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in t){if(!n||t[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,t[u])}else{e.style[u]=t[u]}}}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Be(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(n){p.rel(e,r,n,false)}if(t){p.ael(e,r,t,false)}}else{var c=A(t);if((s||c&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var d=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=d){e[r]=d}}else{e[r]=t}}catch(h){}}if(t==null||t===false){if(t!==false||e.getAttribute(r)===""){{e.removeAttribute(r)}}}else if((!s||i&4||a)&&!c){t=t===true?"":t;{e.setAttribute(r,t)}}}}};var W=/\s/;var F=function(e){return!e?[]:e.split(W)};var G=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||E;var s=r.$attrs$||E;{for(t in i){if(!(t in s)){V(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){V(a,t,i[t],s[t],n,r.$flags$)}};var Q=function(e,r,n,t){var l=r.$children$[n];var u=0;var c;var v;var d;if(!o){f=true;if(l.$tag$==="slot"){if(a){t.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{c=l.$elm$=h.createElement(l.$flags$&2?"slot-fb":l.$tag$);{G(null,l,$)}if(M(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=Q(e,l,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[n];if(d&&d.$tag$===l.$tag$&&e.$elm$){J(e.$elm$,false)}}}return c};var J=function(e,r){p.$flags$|=1;var n=e.childNodes;for(var t=n.length-1;t>=0;t--){var a=n[t];if(a["s-hn"]!==s&&a["s-ol"]){re(a).insertBefore(a,ee(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){J(a,r)}}p.$flags$&=~1};var K=function(e,r,n,t,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(t[a]){l=Q(null,n,a,e);if(l){t[a].$elm$=l;o.insertBefore(l,ee(r))}}}};var X=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{J(a,true)}}a.remove()}}};var Y=function(e,r,n,t){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=t.length-1;var $=t[0];var u=t[f];var c;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if($==null){$=t[++i]}else if(u==null){u=t[--f]}else if(Z(o,$)){ne(o,$);o=r[++a];$=t[++i]}else if(Z(l,u)){ne(l,u);l=r[--s];u=t[--f]}else if(Z(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){J(o.$elm$.parentNode,false)}ne(o,u);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];u=t[--f]}else if(Z(l,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){J(l.$elm$.parentNode,false)}ne(l,$);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];$=t[++i]}else{{c=Q(r&&r[i],n,i,e);$=t[++i]}if(c){{re(o.$elm$).insertBefore(c,ee(o.$elm$))}}}}if(a>s){K(e,t[f+1]==null?null:t[f+1].$elm$,n,t,i,f)}else if(i>f){X(r,a,s)}};var Z=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var ee=function(e){return e&&e["s-ol"]||e};var re=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ne=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{if(i==="slot");else{G(e,r,$)}}if(t!==null&&a!==null){Y(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}K(n,null,r,a,0,a.length-1)}else if(t!==null){X(t,0,t.length-1)}}else if(o=n["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){n.data=s}};var te=function(e){var r=e.childNodes;var n;var t;var a;var i;var s;var o;for(t=0,a=r.length;t<a;t++){n=r[t];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==n["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){n.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){n.hidden=true;break}}}}}te(n)}}};var ae=[];var ie=function(e){var r;var n;var t;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(n=r["s-cr"])){t=n.parentNode.childNodes;a=r["s-sn"];for(s=t.length-1;s>=0;s--){n=t[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==r["s-hn"]){if(se(n,a)){i=ae.find((function(e){return e.$nodeToRelocate$===n}));l=true;n["s-sn"]=n["s-sn"]||a;if(i){i.$slotRefNode$=r}else{ae.push({$slotRefNode$:r,$nodeToRelocate$:n})}if(n["s-sr"]){ae.map((function(e){if(se(e.$nodeToRelocate$,n["s-sn"])){i=ae.find((function(e){return e.$nodeToRelocate$===n}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ae.some((function(e){return e.$nodeToRelocate$===n}))){ae.push({$nodeToRelocate$:n})}}}}if(r.nodeType===1){ie(r)}}};var se=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var oe=function(e,r){var n=e.$hostElement$;var t=e.$cmpMeta$;var $=e.$vnode$||U(null,null);var u=D(r)?r:z(null,null,r);s=n.tagName;u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=n.shadowRoot||n;{a=n["s-sc"]}{i=n["s-cr"];o=m&&(t.$flags$&1)!==0;l=false}ne($,u);{p.$flags$|=1;if(f){ie(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ae.length;w++){c=ae[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<ae.length;w++){c=ae[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){te(u.$elm$)}p.$flags$&=~1;ae.length=0}};var le=e("g",(function(e){return je(e).$hostElement$}));var fe=e("c",(function(e,r,n){var t=le(e);return{emit:function(e){return $e(t,r,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}}));var $e=function(e,r,n){var t=p.ce(r,n);e.dispatchEvent(t);return t};var ue=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ce=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ue(e,e.$ancestorComponent$);var n=function(){return ve(e,r)};return Je(n)};var ve=function(e,r){var n=S("scheduleUpdate",e.$cmpMeta$.$tagName$);var t=e.$lazyInstance$;var a;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],n=e[1];return ye(t,r,n)}));e.$queuedListeners$=null}}{a=ye(t,"componentWillLoad")}}n();return be(a,(function(){return de(e,t,r)}))};var de=function(e,r,n){var t=e.$hostElement$;var a=S("update",e.$cmpMeta$.$tagName$);var i=t["s-rc"];if(n){T(e)}var s=S("render",e.$cmpMeta$.$tagName$);{{oe(e,he(e,r))}}if(p.$cssShim$){p.$cssShim$.updateHost(t)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}s();a();{var o=t["s-p"];var l=function(){return pe(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var he=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(n){Ie(n)}return r};var pe=function(e){var r=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var t=S("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{we(n)}{ye(a,"componentDidLoad")}t();{e.$onReadyResolve$(n);if(!i){ge()}}}else{t()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Qe((function(){return ce(e,false)}))}e.$flags$&=~(4|512)}};var me=function(e){{var r=je(e);var n=r.$hostElement$.isConnected;if(n&&(r.$flags$&(2|16))===2){ce(r,false)}return n}};var ge=function(e){{we(h.documentElement)}{p.$flags$|=2}Qe((function(){return $e(v,"appload",{detail:{namespace:t}})}))};var ye=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){Ie(t)}}return undefined};var be=function(e,r){return e&&e.then?e.then(r):r()};var we=function(e){return e.classList.add("hydrated")};var Ne=function(e,r){if(e!=null&&!A(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Re=function(e,r){return je(e).$instanceValues$.get(r)};var Se=function(e,r,n,t){var a=je(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;n=Ne(n,t.$members$[r][0]);if((!(s&8)||i===undefined)&&n!==i){a.$instanceValues$.set(r,n);if(o){if(t.$watchers$&&s&128){var l=t.$watchers$[r];if(l){l.map((function(e){try{o[e](n,i,r)}catch(t){Ie(t)}}))}}if((s&(2|16))===2){ce(a,false)}}}};var _e=function(e,r,n){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var t=Object.entries(r.$members$);var a=e.prototype;t.map((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return Re(this,t)},set:function(e){Se(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;p.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var xe=function(e,t,a,i,s){return __awaiter(n,void 0,void 0,(function(){var e,n,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((t.$flags$&32)===0))return[3,5];t.$flags$|=32;s=qe(a);if(!s.then)return[3,2];e=_();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}_e(s,a,2);s.isProxied=true}n=S("createInstance",a.$tagName$);{t.$flags$|=8}try{new s(t)}catch(c){Ie(c)}{t.$flags$&=~8}{t.$flags$|=128}n();Ce(t.$lazyInstance$);if(!s.style)return[3,5];i=s.style;o=k(a);if(!!ze.has(o))return[3,5];l=S("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-50811587.system.js").then((function(e){return e.scopeCss(i,o,false)}))];case 3:i=u.sent();u.label=4;case 4:C(o,i,!!(a.$flags$&1));l();u.label=5;case 5:f=t.$ancestorComponent$;$=function(){return ce(t,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Ce=function(e){{ye(e,"connectedCallback")}};var Le=function(e){if((p.$flags$&1)===0){var r=je(e);var n=r.$cmpMeta$;var t=S("connectedCallback",n.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(n.$flags$&(4|8)){Te(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ue(r,r.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{Qe((function(){return xe(e,r,n)}))}}else{b(e,r,n.$listeners$);Ce(r.$lazyInstance$)}t()}};var Te=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var ke=function(e){if((p.$flags$&1)===0){var r=je(e);{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(p.$cssShim$){p.$cssShim$.removeHost(e)}}};var Ee=e("b",(function(e,r){if(r===void 0){r={}}var n=S();var t=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var o=s.querySelector("meta[charset]");var l=h.createElement("style");var f=[];var $;var u=true;Object.assign(p,r);p.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;{if(r.syncQueue){p.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}{n.$listeners$=r[3]}{n.$watchers$={}}if(!m&&n.$flags$&1){n.$flags$|=8}var s=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;Pe(r,n);if(n.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return t}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{p.jmp((function(){return Le(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;p.jmp((function(){return ke(e)}))};r.prototype.forceUpdate=function(){me(this)};r.prototype.componentOnReady=function(){return je(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){t.push(s);i.define(s,_e(o,n,1))}}))}));{l.innerHTML=t+R;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{p.jmp((function(){return $=setTimeout(ge,30)}))}}n()}));var Me=new WeakMap;var je=function(e){return Me.get(e)};var Ae=e("r",(function(e,r){return Me.set(r.$lazyInstance$=e,r)}));var Pe=function(e,r){var n={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,n,r.$listeners$);return Me.set(e,n)};var Be=function(e,r){return r in e};var Ie=function(e){return console.error(e)};var Oe=new Map;var qe=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=Oe.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Oe.set(i,e)}return e[a]}),Ie)};var ze=new Map;var Ue=[];var He=[];var De=[];var Ve=function(e,r){return function(n){e.push(n);if(!c){c=true;if(r&&p.$flags$&4){Qe(Ge)}else{p.raf(Ge)}}}};var We=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){Ie(n)}}e.length=0};var Fe=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){Ie(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var Ge=function(){{u++}We(Ue);{var e=(p.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;Fe(He,e);Fe(De,e);if(He.length>0){De.push.apply(De,He);He.length=0}if(c=Ue.length+He.length+De.length>0){p.raf(Ge)}else{u=0}}};var Qe=function(e){return g().then(e)};var Je=Ve(He,true)}}}));