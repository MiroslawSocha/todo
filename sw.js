if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const d=e=>r(e,n),f={module:{uri:n},exports:o,require:d};i[n]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-53875188"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.css",revision:"d4f97a7a2778b51b48d48b3fa95a53e0"},{url:"index.html",revision:"6ed8065354241a3af76eb0d56f82e253"},{url:"index.js",revision:"d32f00e77d525bb751f3adba1ff31c8d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
