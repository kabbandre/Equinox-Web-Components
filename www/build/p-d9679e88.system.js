var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),i=0,t=0;t<e;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)n[i]=o[a];return n};System.register([],(function(r){"use strict";return{execute:function(){var t=r("g",(function(r){if(r){return r.split(" ").length>=2?r.match(/\b(\w)/g).join(""):r.substr(0,2)}else{return""}}));var e=r("d",(function(r,t){if(t===void 0){t="unknown"}try{r=r.split("&quot;").join('"');return JSON.parse(r)}catch(e){console.log(r,e);alert("Error while trying to parse JSON in "+t+" component")}}));var n=r("f",(function(r,t,e,i){if(i===void 0){i=[]}var o;if(!r||typeof r!=="object")return;if(r[t]===e)return i;for(var a=0,u=Object.keys(r);a<u.length;a++){var s=u[a];if(s===t&&r[s]===e){o=i}else{o=n(r[s],t,e,__spreadArrays(i,[s]))}if(o)break}return o}));var i=r("s",(function(r,t,e){return t.reduce((function(r,n,i){return r[n]=t.length===++i?e:r[n]||{}}),r)}))}}}));