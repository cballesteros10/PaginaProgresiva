if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>r(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3898c35e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"imagen_progresiva.png",revision:"c3631c652abe1185b1874da24af0b7c7"},{url:"index.html",revision:"a5a9f0608835d3c5739aca6ec058822d"},{url:"manifest.json",revision:"c78e2e8862929b047d27e87b430a098d"},{url:"script.js",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
