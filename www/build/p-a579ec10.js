const o=o=>o?o.split(" ").length>=2?o.match(/\b(\w)/g).join(""):o.substr(0,2):"",r=(o,r="unknown")=>{try{return o=o.split("&quot;").join('"'),JSON.parse(o)}catch(t){console.log(o,t),alert(`Error while trying to parse JSON in ${r} component`)}},t=(o,r,n,e="root",s=e)=>{for(const a in o)if(a==r&&o[a]==n)s=e;else if("object"==typeof o[a])return t(o[a],r,n,e+"."+a,s);return s+"."+r};export{t as a,r as d,o as g}