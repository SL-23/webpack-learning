(()=>{"use strict";var e,t,n,o,r,a={490:(e,t,n)=>{const o=JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false},{"id":1560865205310,"text":"Course","completed":false}]'),r={notification:"E0yvz8SDFF78Hbsu2uXH"},a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIj48cGF0aCBkPSJNMjYuOTggNS45OWExIDEgMCAwIDAtLjY4Ny4zMDNMMTEgMjEuNTg2bC02LjI5My02LjI5M2ExIDEgMCAxIDAtMS40MTQgMS40MTRsNyA3YTEgMSAwIDAgMCAxLjQxNCAwbDE2LTE2YTEgMSAwIDAgMC0uNzI3LTEuNzE3eiIvPjwvc3ZnPg==",i=n(92).iv`
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: -3px;
  left: -5px;
`;let c=o;function d(){return c}function l(e){const t=e.map((function(e){const t=e.completed?"completed":"",n=e.completed?"checked":"";return`\n            <li data-id="${e.id}" class="${t}">\n                <span class="custom-checkbox">\n                    <img class="check" src="${a}" width="22" height="22"></img>\n                    <input class="${i}" data-element="real-checkbox" type="checkbox" ${n} />\n                </span>\n                <label>${e.text}</label>\n                <span class="delete"></span>\n            </li>\n        `}));document.querySelector(".todo-list").innerHTML=t.join(""),new Promise((e=>{setTimeout((()=>{e(["images/motivational-pictures/mountain.webp","images/motivational-pictures/darts.webp","images/motivational-pictures/passion.webp"])}),700)})).then((e=>{const t=`<div class="motivational-pictures">\n      ${e.map((e=>'<img class="header-image" src="'+e+'" alt="Motivational pic"/>')).join("")}\n    </div>`;document.querySelector(".motivational-pictures-container").innerHTML=t}))}function s(e){return parseInt(e.dataset.id||e.parentNode.dataset.id||e.parentNode.parentNode.dataset.id,10)}var u=n(130);function p(e){var t;let n=e.target.value;var o;t=n.replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s{2,}/g," "),n=(0,u.Z)(t),o={id:Date.now(),text:n,completed:!1},c.push(o),l(d()),document.querySelector(".new-todo").value="",function(){const e=document.createElement("div");e.classList.add("alert","alert-success",r.notification),e.setAttribute("role","alert"),e.innerHTML="Todo item added!!!",document.body.appendChild(e),setTimeout((function(){const e=document.querySelector(`.${r.notification}`);e.parentNode.removeChild(e)}),2e3)}()}window.addEventListener("load",(function(){l(d())})),document.addEventListener("change",(function(e){e.target.classList.contains("new-todo")&&p(e)})),document.addEventListener("click",(function(e){e.target.classList.contains("delete")&&function(e){Promise.all([n.e(672).then(n.bind(n,138)),n.e(729).then(n.t.bind(n,755,23))]).then((function(t){let[{Modal:n},{default:o}]=t;const r=s(e.target);o("#modal-delete-button").data("todo-id",r),n.getOrCreateInstance(document.getElementById("modal-delete-todo")).show()}))}(e),"real-checkbox"===e.target.dataset.element&&function(e){!function(e,t){const n=c.findIndex((function(t){return t.id===e}));c[n].completed=t}(s(e.target),e.target.checked),l(d())}(e),"modal-delete-button"===e.target.id&&Promise.all([n.e(672).then(n.bind(n,138)),n.e(729).then(n.t.bind(n,755,23))]).then((function(e){let[{Modal:t},{default:n}]=e;var o;o=n("#modal-delete-button").data("todo-id"),c=c.filter((function(e){return e.id!==o})),l(d()),t.getOrCreateInstance(document.getElementById("modal-delete-todo")).hide()}))}))}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e].call(n.exports,n,n.exports,c),n.exports}c.m=a,e=[],c.O=(t,n,o,r)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,o,r]=e[s],i=!0,d=0;d<n.length;d++)(!1&r||a>=r)&&Object.keys(c.O).every((e=>c.O[e](n[d])))?n.splice(d--,1):(i=!1,r<a&&(a=r));if(i){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,o,r]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(r,a),r},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e,t),t)),[])),c.u=e=>"js/"+{672:"bootstrap",729:"jquery"}[e]+"."+{672:"79102917ba6f",729:"d5abbdb13080"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},r="webpack-optimization-starter:",c.l=(e,t,n,a)=>{if(o[e])o[e].push(t);else{var i,d;if(void 0!==n)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){i=u;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",r+n),i.src=e),o[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(m);var r=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(n))),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),d&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"})(),(()=>{var e={179:0};c.f.j=(t,n)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=r);var a=c.p+c.u(t),i=new Error;c.l(a,(n=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,o[1](i)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,i,d]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in i)c.o(i,o)&&(c.m[o]=i[o]);if(d)var s=d(c)}for(t&&t(n);l<a.length;l++)r=a[l],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(s)},n=globalThis.webpackChunkwebpack_optimization_starter=globalThis.webpackChunkwebpack_optimization_starter||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var d=c.O(void 0,[588,705],(()=>c(490)));d=c.O(d)})();
//# sourceMappingURL=main.a2e1ae285a75.js.map