"use strict";(globalThis.webpackChunkwebpack_optimization_starter=globalThis.webpackChunkwebpack_optimization_starter||[]).push([[100],{8240:(e,t,n)=>{n.d(t,{fi:()=>w,kZ:()=>y});var r=n(400),o=n(2163),i=n(2057),a=n(2556),s=n(6333),c=n(4063),f=n(7252),u=n(611),d=n(138);function l(e,t,n){void 0===n&&(n=!1);var l,p,m=(0,a.Re)(t),v=(0,a.Re)(t)&&function(e){var t=e.getBoundingClientRect(),n=(0,d.NM)(t.width)/e.offsetWidth||1,r=(0,d.NM)(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),h=(0,f.Z)(t),g=(0,r.Z)(e,v,n),b={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(m||!m&&!n)&&(("body"!==(0,s.Z)(t)||(0,u.Z)(h))&&(b=(l=t)!==(0,i.Z)(l)&&(0,a.Re)(l)?{scrollLeft:(p=l).scrollLeft,scrollTop:p.scrollTop}:(0,o.Z)(l)),(0,a.Re)(t)?((Z=(0,r.Z)(t,!0)).x+=t.clientLeft,Z.y+=t.clientTop):h&&(Z.x=(0,c.Z)(h))),{x:g.left+b.scrollLeft-Z.x,y:g.top+b.scrollTop-Z.y,width:g.width,height:g.height}}var p=n(583),m=n(3624),v=n(3779),h=n(7701);function g(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var b={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?b:o;return function(e,t,n){void 0===n&&(n=i);var o,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},b,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],u=!1,d={state:c,setOptions:function(n){var o="function"==typeof n?n(c.options):n;y(),c.options=Object.assign({},i,c.options,o),c.scrollParents={reference:(0,a.kK)(e)?(0,m.Z)(e):e.contextElement?(0,m.Z)(e.contextElement):[],popper:(0,m.Z)(t)};var s,u,l=function(e){var t=g(e);return h.xs.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,c.options.modifiers),u=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return c.orderedModifiers=l.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:d,options:r});f.push(i||function(){})}})),d.update()},forceUpdate:function(){if(!u){var e=c.elements,t=e.reference,n=e.popper;if(Z(t,n)){c.rects={reference:l(t,(0,v.Z)(n),"fixed"===c.options.strategy),popper:(0,p.Z)(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,f=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:f,instance:d})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){d.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){y(),u=!0}};if(!Z(e,t))return d;function y(){f.forEach((function(e){return e()})),f=[]}return d.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),d}}var w=y()},4985:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2556);function o(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},400:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2556),o=n(138),i=n(2057),a=n(7977);function s(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var s=e.getBoundingClientRect(),c=1,f=1;t&&(0,r.Re)(e)&&(c=e.offsetWidth>0&&(0,o.NM)(s.width)/e.offsetWidth||1,f=e.offsetHeight>0&&(0,o.NM)(s.height)/e.offsetHeight||1);var u=((0,r.kK)(e)?(0,i.Z)(e):window).visualViewport,d=!(0,a.Z)()&&n,l=(s.left+(d&&u?u.offsetLeft:0))/c,p=(s.top+(d&&u?u.offsetTop:0))/f,m=s.width/c,v=s.height/f;return{width:m,height:v,top:p,right:l+m,bottom:p+v,left:l,x:l,y:p}}},3062:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2057);function o(e){return(0,r.Z)(e).getComputedStyle(e)}},7252:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2556);function o(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},583:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(400);function o(e){var t=(0,r.Z)(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}},6333:(e,t,n)=>{function r(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{Z:()=>r})},3779:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2057),o=n(6333),i=n(3062),a=n(2556);function s(e){return["table","td","th"].indexOf((0,o.Z)(e))>=0}var c=n(5923),f=n(5918);function u(e){return(0,a.Re)(e)&&"fixed"!==(0,i.Z)(e).position?e.offsetParent:null}function d(e){for(var t=(0,r.Z)(e),n=u(e);n&&s(n)&&"static"===(0,i.Z)(n).position;)n=u(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?t:n||function(e){var t=/firefox/i.test((0,f.Z)());if(/Trident/i.test((0,f.Z)())&&(0,a.Re)(e)&&"fixed"===(0,i.Z)(e).position)return null;var n=(0,c.Z)(e);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}},5923:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(6333),o=n(7252),i=n(2556);function a(e){return"html"===(0,r.Z)(e)?e:e.assignedSlot||e.parentNode||((0,i.Zq)(e)?e.host:null)||(0,o.Z)(e)}},2057:(e,t,n)=>{function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{Z:()=>r})},2163:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2057);function o(e){var t=(0,r.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},4063:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(400),o=n(7252),i=n(2163);function a(e){return(0,r.Z)((0,o.Z)(e)).left+(0,i.Z)(e).scrollLeft}},2556:(e,t,n)=>{n.d(t,{Re:()=>i,Zq:()=>a,kK:()=>o});var r=n(2057);function o(e){return e instanceof(0,r.Z)(e).Element||e instanceof Element}function i(e){return e instanceof(0,r.Z)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof(0,r.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},7977:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(5918);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},611:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3062);function o(e){var t=(0,r.Z)(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},3624:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(5923),o=n(611),i=n(6333),a=n(2556);function s(e){return["html","body","#document"].indexOf((0,i.Z)(e))>=0?e.ownerDocument.body:(0,a.Re)(e)&&(0,o.Z)(e)?e:s((0,r.Z)(e))}var c=n(2057);function f(e,t){var n;void 0===t&&(t=[]);var i=s(e),a=i===(null==(n=e.ownerDocument)?void 0:n.body),u=(0,c.Z)(i),d=a?[u].concat(u.visualViewport||[],(0,o.Z)(i)?i:[]):i,l=t.concat(d);return a?l:l.concat(f((0,r.Z)(d)))}},7701:(e,t,n)=>{n.d(t,{BL:()=>f,Ct:()=>h,DH:()=>w,F2:()=>i,I:()=>o,MS:()=>j,N7:()=>g,Pj:()=>l,XM:()=>y,YP:()=>m,bw:()=>v,cW:()=>k,d7:()=>s,ij:()=>b,iv:()=>O,k5:()=>p,mv:()=>c,r5:()=>Z,t$:()=>a,ut:()=>u,wX:()=>x,we:()=>r,xs:()=>E,zV:()=>d});var r="top",o="bottom",i="right",a="left",s="auto",c=[r,o,i,a],f="start",u="end",d="clippingParents",l="viewport",p="popper",m="reference",v=c.reduce((function(e,t){return e.concat([t+"-"+f,t+"-"+u])}),[]),h=[].concat(c,[s]).reduce((function(e,t){return e.concat([t,t+"-"+f,t+"-"+u])}),[]),g="beforeRead",b="read",Z="afterRead",y="beforeMain",w="main",x="afterMain",O="beforeWrite",k="write",j="afterWrite",E=[g,b,Z,y,w,x,O,k,j]},9704:(e,t,n)=>{n.r(t),n.d(t,{afterMain:()=>r.wX,afterRead:()=>r.r5,afterWrite:()=>r.MS,applyStyles:()=>o.Z,arrow:()=>i.Z,auto:()=>r.d7,basePlacements:()=>r.mv,beforeMain:()=>r.XM,beforeRead:()=>r.N7,beforeWrite:()=>r.iv,bottom:()=>r.I,clippingParents:()=>r.zV,computeStyles:()=>a.Z,createPopper:()=>v.fi,createPopperBase:()=>p.fi,createPopperLite:()=>g,detectOverflow:()=>m.Z,end:()=>r.ut,eventListeners:()=>s.Z,flip:()=>c.Z,hide:()=>f.Z,left:()=>r.t$,main:()=>r.DH,modifierPhases:()=>r.xs,offset:()=>u.Z,placements:()=>r.Ct,popper:()=>r.k5,popperGenerator:()=>p.kZ,popperOffsets:()=>d.Z,preventOverflow:()=>l.Z,read:()=>r.ij,reference:()=>r.YP,right:()=>r.F2,start:()=>r.BL,top:()=>r.we,variationPlacements:()=>r.bw,viewport:()=>r.Pj,write:()=>r.cW});var r=n(7701),o=n(7824),i=n(6896),a=n(6531),s=n(2372),c=n(5228),f=n(9892),u=n(2122),d=n(7421),l=n(3920),p=n(8240),m=n(9966),v=n(804),h=[s.Z,d.Z,a.Z,o.Z],g=(0,p.kZ)({defaultModifiers:h})},7824:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(6333),o=n(2556);const i={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},a=t.elements[e];(0,o.Re)(a)&&(0,r.Z)(a)&&(Object.assign(a.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],a=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,o.Re)(i)&&(0,r.Z)(i)&&(Object.assign(i.style,s),Object.keys(a).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]}},6896:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(6206),o=n(583),i=n(4985),a=n(3779),s=n(1516),c=n(7516),f=n(3293),u=n(3706),d=n(7701);const l={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,l=e.options,p=n.elements.arrow,m=n.modifiersData.popperOffsets,v=(0,r.Z)(n.placement),h=(0,s.Z)(v),g=[d.t$,d.F2].indexOf(v)>=0?"height":"width";if(p&&m){var b=function(e,t){return e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,f.Z)("number"!=typeof e?e:(0,u.Z)(e,d.mv))}(l.padding,n),Z=(0,o.Z)(p),y="y"===h?d.we:d.t$,w="y"===h?d.I:d.F2,x=n.rects.reference[g]+n.rects.reference[h]-m[h]-n.rects.popper[g],O=m[h]-n.rects.reference[h],k=(0,a.Z)(p),j=k?"y"===h?k.clientHeight||0:k.clientWidth||0:0,E=x/2-O/2,M=b[y],D=j-Z[g]-b[w],L=j/2-Z[g]/2+E,P=(0,c.u)(M,L,D),R=h;n.modifiersData[i]=((t={})[R]=P,t.centerOffset=P-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&(0,i.Z)(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},6531:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7701),o=n(3779),i=n(2057),a=n(7252),s=n(3062),c=n(6206),f=n(4943),u=n(138),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};function l(e){var t,n=e.popper,c=e.popperRect,f=e.placement,l=e.variation,p=e.offsets,m=e.position,v=e.gpuAcceleration,h=e.adaptive,g=e.roundOffsets,b=e.isFixed,Z=p.x,y=void 0===Z?0:Z,w=p.y,x=void 0===w?0:w,O="function"==typeof g?g({x:y,y:x}):{x:y,y:x};y=O.x,x=O.y;var k=p.hasOwnProperty("x"),j=p.hasOwnProperty("y"),E=r.t$,M=r.we,D=window;if(h){var L=(0,o.Z)(n),P="clientHeight",R="clientWidth";L===(0,i.Z)(n)&&(L=(0,a.Z)(n),"static"!==(0,s.Z)(L).position&&"absolute"===m&&(P="scrollHeight",R="scrollWidth")),(f===r.we||(f===r.t$||f===r.F2)&&l===r.ut)&&(M=r.I,x-=(b&&L===D&&D.visualViewport?D.visualViewport.height:L[P])-c.height,x*=v?1:-1),f!==r.t$&&(f!==r.we&&f!==r.I||l!==r.ut)||(E=r.F2,y-=(b&&L===D&&D.visualViewport?D.visualViewport.width:L[R])-c.width,y*=v?1:-1)}var F,A=Object.assign({position:m},h&&d),H=!0===g?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:(0,u.NM)(n*o)/o||0,y:(0,u.NM)(r*o)/o||0}}({x:y,y:x},(0,i.Z)(n)):{x:y,y:x};return y=H.x,x=H.y,v?Object.assign({},A,((F={})[M]=j?"0":"",F[E]=k?"0":"",F.transform=(D.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",F)):Object.assign({},A,((t={})[M]=j?x+"px":"",t[E]=k?y+"px":"",t.transform="",t))}const p={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,d={placement:(0,c.Z)(t.placement),variation:(0,f.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,l(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,l(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},2372:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2057),o={passive:!0};const i={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,a=i.scroll,s=void 0===a||a,c=i.resize,f=void 0===c||c,u=(0,r.Z)(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach((function(e){e.addEventListener("scroll",n.update,o)})),f&&u.addEventListener("resize",n.update,o),function(){s&&d.forEach((function(e){e.removeEventListener("scroll",n.update,o)})),f&&u.removeEventListener("resize",n.update,o)}},data:{}}},5228:(e,t,n)=>{n.d(t,{Z:()=>d});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(e){return e.replace(/left|right|bottom|top/g,(function(e){return r[e]}))}var i=n(6206),a={start:"end",end:"start"};function s(e){return e.replace(/start|end/g,(function(e){return a[e]}))}var c=n(9966),f=n(4943),u=n(7701);const d={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,d=void 0===a||a,l=n.altAxis,p=void 0===l||l,m=n.fallbackPlacements,v=n.padding,h=n.boundary,g=n.rootBoundary,b=n.altBoundary,Z=n.flipVariations,y=void 0===Z||Z,w=n.allowedAutoPlacements,x=t.options.placement,O=(0,i.Z)(x),k=m||(O!==x&&y?function(e){if((0,i.Z)(e)===u.d7)return[];var t=o(e);return[s(e),t,s(t)]}(x):[o(x)]),j=[x].concat(k).reduce((function(e,n){return e.concat((0,i.Z)(n)===u.d7?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,d=n.flipVariations,l=n.allowedAutoPlacements,p=void 0===l?u.Ct:l,m=(0,f.Z)(r),v=m?d?u.bw:u.bw.filter((function(e){return(0,f.Z)(e)===m})):u.mv,h=v.filter((function(e){return p.indexOf(e)>=0}));0===h.length&&(h=v);var g=h.reduce((function(t,n){return t[n]=(0,c.Z)(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[(0,i.Z)(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}(t,{placement:n,boundary:h,rootBoundary:g,padding:v,flipVariations:y,allowedAutoPlacements:w}):n)}),[]),E=t.rects.reference,M=t.rects.popper,D=new Map,L=!0,P=j[0],R=0;R<j.length;R++){var F=j[R],A=(0,i.Z)(F),H=(0,f.Z)(F)===u.BL,$=[u.we,u.I].indexOf(A)>=0,B=$?"width":"height",q=(0,c.Z)(t,{placement:F,boundary:h,rootBoundary:g,altBoundary:b,padding:v}),C=$?H?u.F2:u.t$:H?u.I:u.we;E[B]>M[B]&&(C=o(C));var W=o(C),T=[];if(d&&T.push(q[A]<=0),p&&T.push(q[C]<=0,q[W]<=0),T.every((function(e){return e}))){P=F,L=!1;break}D.set(F,T)}if(L)for(var I=function(e){var t=j.find((function(t){var n=D.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},S=y?3:1;S>0&&"break"!==I(S);S--);t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},9892:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7701),o=n(9966);function i(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function a(e){return[r.we,r.F2,r.I,r.t$].some((function(t){return e[t]>=0}))}const s={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,s=t.rects.popper,c=t.modifiersData.preventOverflow,f=(0,o.Z)(t,{elementContext:"reference"}),u=(0,o.Z)(t,{altBoundary:!0}),d=i(f,r),l=i(u,s,c),p=a(d),m=a(l);t.modifiersData[n]={referenceClippingOffsets:d,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}}},2122:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(6206),o=n(7701);const i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,s=void 0===a?[0,0]:a,c=o.Ct.reduce((function(e,n){return e[n]=function(e,t,n){var i=(0,r.Z)(e),a=[o.t$,o.we].indexOf(i)>=0?-1:1,s="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=s[0],f=s[1];return c=c||0,f=(f||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:f,y:c}:{x:c,y:f}}(n,t.rects,s),e}),{}),f=c[t.placement],u=f.x,d=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=c}}},7421:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2581);const o={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=(0,r.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},3920:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7701),o=n(6206),i=n(1516),a=n(7516),s=n(583),c=n(3779),f=n(9966),u=n(4943),d=n(3607),l=n(138);const p={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,p=e.name,m=n.mainAxis,v=void 0===m||m,h=n.altAxis,g=void 0!==h&&h,b=n.boundary,Z=n.rootBoundary,y=n.altBoundary,w=n.padding,x=n.tether,O=void 0===x||x,k=n.tetherOffset,j=void 0===k?0:k,E=(0,f.Z)(t,{boundary:b,rootBoundary:Z,padding:w,altBoundary:y}),M=(0,o.Z)(t.placement),D=(0,u.Z)(t.placement),L=!D,P=(0,i.Z)(M),R="x"===P?"y":"x",F=t.modifiersData.popperOffsets,A=t.rects.reference,H=t.rects.popper,$="function"==typeof j?j(Object.assign({},t.rects,{placement:t.placement})):j,B="number"==typeof $?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(F){if(v){var W,T="y"===P?r.we:r.t$,I="y"===P?r.I:r.F2,S="y"===P?"height":"width",V=F[P],N=V+E[T],K=V-E[I],z=O?-H[S]/2:0,U=D===r.BL?A[S]:H[S],_=D===r.BL?-H[S]:-A[S],X=t.elements.arrow,Y=O&&X?(0,s.Z)(X):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,d.Z)(),J=Q[T],G=Q[I],ee=(0,a.u)(0,A[S],Y[S]),te=L?A[S]/2-z-ee-J-B.mainAxis:U-ee-J-B.mainAxis,ne=L?-A[S]/2+z+ee+G+B.mainAxis:_+ee+G+B.mainAxis,re=t.elements.arrow&&(0,c.Z)(t.elements.arrow),oe=re?"y"===P?re.clientTop||0:re.clientLeft||0:0,ie=null!=(W=null==q?void 0:q[P])?W:0,ae=V+te-ie-oe,se=V+ne-ie,ce=(0,a.u)(O?(0,l.VV)(N,ae):N,V,O?(0,l.Fp)(K,se):K);F[P]=ce,C[P]=ce-V}if(g){var fe,ue="x"===P?r.we:r.t$,de="x"===P?r.I:r.F2,le=F[R],pe="y"===R?"height":"width",me=le+E[ue],ve=le-E[de],he=-1!==[r.we,r.t$].indexOf(M),ge=null!=(fe=null==q?void 0:q[R])?fe:0,be=he?me:le-A[pe]-H[pe]-ge+B.altAxis,Ze=he?le+A[pe]+H[pe]-ge-B.altAxis:ve,ye=O&&he?(0,a.q)(be,le,Ze):(0,a.u)(O?be:me,le,O?Ze:ve);F[R]=ye,C[R]=ye-le}t.modifiersData[p]=C}},requiresIfExists:["offset"]}},804:(e,t,n)=>{n.d(t,{fi:()=>m});var r=n(8240),o=n(2372),i=n(7421),a=n(6531),s=n(7824),c=n(2122),f=n(5228),u=n(3920),d=n(6896),l=n(9892),p=[o.Z,i.Z,a.Z,s.Z,c.Z,f.Z,u.Z,d.Z,l.Z],m=(0,r.kZ)({defaultModifiers:p})},2581:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(6206),o=n(4943),i=n(1516),a=n(7701);function s(e){var t,n=e.reference,s=e.element,c=e.placement,f=c?(0,r.Z)(c):null,u=c?(0,o.Z)(c):null,d=n.x+n.width/2-s.width/2,l=n.y+n.height/2-s.height/2;switch(f){case a.we:t={x:d,y:n.y-s.height};break;case a.I:t={x:d,y:n.y+n.height};break;case a.F2:t={x:n.x+n.width,y:l};break;case a.t$:t={x:n.x-s.width,y:l};break;default:t={x:n.x,y:n.y}}var p=f?(0,i.Z)(f):null;if(null!=p){var m="y"===p?"height":"width";switch(u){case a.BL:t[p]=t[p]-(n[m]/2-s[m]/2);break;case a.ut:t[p]=t[p]+(n[m]/2-s[m]/2)}}return t}},9966:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(7701),o=n(2057),i=n(7252),a=n(4063),s=n(7977),c=n(3062),f=n(2163),u=n(138),d=n(3624),l=n(3779),p=n(2556),m=n(400),v=n(5923),h=n(4985),g=n(6333);function b(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Z(e,t,n){return t===r.Pj?b(function(e,t){var n=(0,o.Z)(e),r=(0,i.Z)(e),c=n.visualViewport,f=r.clientWidth,u=r.clientHeight,d=0,l=0;if(c){f=c.width,u=c.height;var p=(0,s.Z)();(p||!p&&"fixed"===t)&&(d=c.offsetLeft,l=c.offsetTop)}return{width:f,height:u,x:d+(0,a.Z)(e),y:l}}(e,n)):(0,p.kK)(t)?function(e,t){var n=(0,m.Z)(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):b(function(e){var t,n=(0,i.Z)(e),r=(0,f.Z)(e),o=null==(t=e.ownerDocument)?void 0:t.body,s=(0,u.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),d=(0,u.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+(0,a.Z)(e),p=-r.scrollTop;return"rtl"===(0,c.Z)(o||n).direction&&(l+=(0,u.Fp)(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:d,x:l,y:p}}((0,i.Z)(e)))}var y=n(2581),w=n(3293),x=n(3706);function O(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=void 0===o?e.placement:o,s=n.strategy,f=void 0===s?e.strategy:s,O=n.boundary,k=void 0===O?r.zV:O,j=n.rootBoundary,E=void 0===j?r.Pj:j,M=n.elementContext,D=void 0===M?r.k5:M,L=n.altBoundary,P=void 0!==L&&L,R=n.padding,F=void 0===R?0:R,A=(0,w.Z)("number"!=typeof F?F:(0,x.Z)(F,r.mv)),H=D===r.k5?r.YP:r.k5,$=e.rects.popper,B=e.elements[P?H:D],q=function(e,t,n,r){var o="clippingParents"===t?function(e){var t=(0,d.Z)((0,v.Z)(e)),n=["absolute","fixed"].indexOf((0,c.Z)(e).position)>=0&&(0,p.Re)(e)?(0,l.Z)(e):e;return(0,p.kK)(n)?t.filter((function(e){return(0,p.kK)(e)&&(0,h.Z)(e,n)&&"body"!==(0,g.Z)(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=Z(e,n,r);return t.top=(0,u.Fp)(o.top,t.top),t.right=(0,u.VV)(o.right,t.right),t.bottom=(0,u.VV)(o.bottom,t.bottom),t.left=(0,u.Fp)(o.left,t.left),t}),Z(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}((0,p.kK)(B)?B:B.contextElement||(0,i.Z)(e.elements.popper),k,E,f),C=(0,m.Z)(e.elements.reference),W=(0,y.Z)({reference:C,element:$,strategy:"absolute",placement:a}),T=b(Object.assign({},$,W)),I=D===r.k5?T:C,S={top:q.top-I.top+A.top,bottom:I.bottom-q.bottom+A.bottom,left:q.left-I.left+A.left,right:I.right-q.right+A.right},V=e.modifiersData.offset;if(D===r.k5&&V){var N=V[a];Object.keys(S).forEach((function(e){var t=[r.F2,r.I].indexOf(e)>=0?1:-1,n=[r.we,r.I].indexOf(e)>=0?"y":"x";S[e]+=N[n]*t}))}return S}},3706:(e,t,n)=>{function r(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}n.d(t,{Z:()=>r})},6206:(e,t,n)=>{function r(e){return e.split("-")[0]}n.d(t,{Z:()=>r})},3607:(e,t,n)=>{function r(){return{top:0,right:0,bottom:0,left:0}}n.d(t,{Z:()=>r})},1516:(e,t,n)=>{function r(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}n.d(t,{Z:()=>r})},4943:(e,t,n)=>{function r(e){return e.split("-")[1]}n.d(t,{Z:()=>r})},138:(e,t,n)=>{n.d(t,{Fp:()=>r,NM:()=>i,VV:()=>o});var r=Math.max,o=Math.min,i=Math.round},3293:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3607);function o(e){return Object.assign({},(0,r.Z)(),e)}},5918:(e,t,n)=>{function r(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}n.d(t,{Z:()=>r})},7516:(e,t,n)=>{n.d(t,{q:()=>i,u:()=>o});var r=n(138);function o(e,t,n){return(0,r.Fp)(e,(0,r.VV)(t,n))}function i(e,t,n){var r=o(e,t,n);return r>n?n:r}},5790:(e,t,n)=>{const r=JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false},{"id":1560865205310,"text":"Course","completed":false}]'),o={notification:"E0yvz8SDFF78Hbsu2uXH"};var i=n(2834);const a=n(3029).iv`
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: -3px;
  left: -5px;
`;let s=r;function c(){return s}function f(e){const t=e.map((function(e){const t=e.completed?"completed":"",n=e.completed?"checked":"";return`\n            <li data-id="${e.id}" class="${t}">\n                <span class="custom-checkbox">\n                    <img class="check" src="${i}" width="22" height="22"></img>\n                    <input class="${a}" data-element="real-checkbox" type="checkbox" ${n} />\n                </span>\n                <label>${e.text}</label>\n                <span class="delete"></span>\n            </li>\n        `}));document.querySelector(".todo-list").innerHTML=t.join(""),new Promise((e=>{setTimeout((()=>{e(["images/motivational-pictures/mountain.webp","images/motivational-pictures/darts.webp","images/motivational-pictures/passion.webp"])}),700)})).then((e=>{const t=`<div class="motivational-pictures">\n      ${e.map((e=>'<img class="header-image" src="'+e+'" alt="Motivational pic"/>')).join("")}\n    </div>`;document.querySelector(".motivational-pictures-container").innerHTML=t}))}function u(e){return parseInt(e.dataset.id||e.parentNode.dataset.id||e.parentNode.parentNode.dataset.id,10)}var d=n(6130),l=n(9909),p=n(9755),m=n.n(p);function v(e){var t;let n=e.target.value;var r;t=n.replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s{2,}/g," "),n=(0,d.Z)(t),r={id:Date.now(),text:n,completed:!1},s.push(r),f(c()),document.querySelector(".new-todo").value="",function(){const e=document.createElement("div");e.classList.add("alert","alert-success",o.notification),e.setAttribute("role","alert"),e.innerHTML="Todo item added!!!",document.body.appendChild(e),setTimeout((function(){const e=document.querySelector(`.${o.notification}`);e.parentNode.removeChild(e)}),2e3)}()}window.addEventListener("load",(function(){f(c())})),document.addEventListener("change",(function(e){e.target.classList.contains("new-todo")&&v(e)})),document.addEventListener("click",(function(e){var t;e.target.classList.contains("delete")&&function(e){const t=u(e.target);m()("#modal-delete-button").data("todo-id",t),l.u_.getOrCreateInstance(document.getElementById("modal-delete-todo")).show()}(e),"real-checkbox"===e.target.dataset.element&&function(e){!function(e,t){const n=s.findIndex((function(t){return t.id===e}));s[n].completed=t}(u(e.target),e.target.checked),f(c())}(e),"modal-delete-button"===e.target.id&&(t=m()("#modal-delete-button").data("todo-id"),s=s.filter((function(e){return e.id!==t})),f(c()),l.u_.getOrCreateInstance(document.getElementById("modal-delete-todo")).hide())}))},7563:(e,t,n)=>{n.d(t,{Ab:()=>a,Fr:()=>s,G$:()=>i,JM:()=>d,K$:()=>f,MS:()=>r,h5:()=>c,lK:()=>u,uj:()=>o});var r="-ms-",o="-moz-",i="-webkit-",a="comm",s="rule",c="decl",f="@import",u="@keyframes",d="@layer"},8160:(e,t,n)=>{n.d(t,{cD:()=>i,qR:()=>o});var r=n(6686);function o(e){var t=(0,r.Ei)(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function i(e){return function(t){t.root||(t=t.return)&&e(t)}}},2190:(e,t,n)=>{n.d(t,{MY:()=>a});var r=n(7563),o=n(6686),i=n(6411);function a(e){return(0,i.cE)(s("",null,null,null,[""],e=(0,i.un)(e),0,[0],e))}function s(e,t,n,r,a,d,l,p,m){for(var v=0,h=0,g=l,b=0,Z=0,y=0,w=1,x=1,O=1,k=0,j="",E=a,M=d,D=r,L=j;x;)switch(y=k,k=(0,i.lp)()){case 40:if(108!=y&&58==(0,o.uO)(L,g-1)){-1!=(0,o.Cw)(L+=(0,o.gx)((0,i.iF)(k),"&","&\f"),"&\f")&&(O=-1);break}case 34:case 39:case 91:L+=(0,i.iF)(k);break;case 9:case 10:case 13:case 32:L+=(0,i.Qb)(y);break;case 92:L+=(0,i.kq)((0,i.Ud)()-1,7);continue;case 47:switch((0,i.fj)()){case 42:case 47:(0,o.R3)(f((0,i.q6)((0,i.lp)(),(0,i.Ud)()),t,n),m);break;default:L+="/"}break;case 123*w:p[v++]=(0,o.to)(L)*O;case 125*w:case 59:case 0:switch(k){case 0:case 125:x=0;case 59+h:-1==O&&(L=(0,o.gx)(L,/\f/g,"")),Z>0&&(0,o.to)(L)-g&&(0,o.R3)(Z>32?u(L+";",r,n,g-1):u((0,o.gx)(L," ","")+";",r,n,g-2),m);break;case 59:L+=";";default:if((0,o.R3)(D=c(L,t,n,v,h,a,p,j,E=[],M=[],g),d),123===k)if(0===h)s(L,t,D,D,E,d,g,p,M);else switch(99===b&&110===(0,o.uO)(L,3)?100:b){case 100:case 108:case 109:case 115:s(e,D,D,r&&(0,o.R3)(c(e,D,D,0,0,a,p,j,a,E=[],g),M),a,M,g,p,r?E:M);break;default:s(L,D,D,D,[""],M,0,p,M)}}v=h=Z=0,w=O=1,j=L="",g=l;break;case 58:g=1+(0,o.to)(L),Z=y;default:if(w<1)if(123==k)--w;else if(125==k&&0==w++&&125==(0,i.mp)())continue;switch(L+=(0,o.Dp)(k),k*w){case 38:O=h>0?1:(L+="\f",-1);break;case 44:p[v++]=((0,o.to)(L)-1)*O,O=1;break;case 64:45===(0,i.fj)()&&(L+=(0,i.iF)((0,i.lp)())),b=(0,i.fj)(),h=g=(0,o.to)(j=L+=(0,i.QU)((0,i.Ud)())),k++;break;case 45:45===y&&2==(0,o.to)(L)&&(w=0)}}return d}function c(e,t,n,a,s,c,f,u,d,l,p){for(var m=s-1,v=0===s?c:[""],h=(0,o.Ei)(v),g=0,b=0,Z=0;g<a;++g)for(var y=0,w=(0,o.tb)(e,m+1,m=(0,o.Wn)(b=f[g])),x=e;y<h;++y)(x=(0,o.fy)(b>0?v[y]+" "+w:(0,o.gx)(w,/&\f/g,v[y])))&&(d[Z++]=x);return(0,i.dH)(e,t,n,0===s?r.Fr:u,d,l,p)}function f(e,t,n){return(0,i.dH)(e,t,n,r.Ab,(0,o.Dp)((0,i.Tb)()),(0,o.tb)(e,2,-2),0)}function u(e,t,n,a){return(0,i.dH)(e,t,n,r.h5,(0,o.tb)(e,0,a),(0,o.tb)(e,a+1,-1),a)}},211:(e,t,n)=>{n.d(t,{P:()=>a,q:()=>i});var r=n(7563),o=n(6686);function i(e,t){for(var n="",r=(0,o.Ei)(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function a(e,t,n,a){switch(e.type){case r.JM:if(e.children.length)break;case r.K$:case r.h5:return e.return=e.return||e.value;case r.Ab:return"";case r.lK:return e.return=e.value+"{"+i(e.children,a)+"}";case r.Fr:e.value=e.props.join(",")}return(0,o.to)(n=i(e.children,a))?e.return=e.value+"{"+n+"}":""}},6411:(e,t,n)=>{n.d(t,{FK:()=>s,JG:()=>d,QU:()=>E,Qb:()=>x,Tb:()=>l,Ud:()=>h,cE:()=>y,dH:()=>u,fj:()=>v,iF:()=>w,kq:()=>O,lp:()=>m,mp:()=>p,q6:()=>j,r:()=>b,tP:()=>g,un:()=>Z});var r=n(6686),o=1,i=1,a=0,s=0,c=0,f="";function u(e,t,n,r,a,s,c){return{value:e,root:t,parent:n,type:r,props:a,children:s,line:o,column:i,length:c,return:""}}function d(e,t){return(0,r.f0)(u("",null,null,"",null,null,0),e,{length:-e.length},t)}function l(){return c}function p(){return c=s>0?(0,r.uO)(f,--s):0,i--,10===c&&(i=1,o--),c}function m(){return c=s<a?(0,r.uO)(f,s++):0,i++,10===c&&(i=1,o++),c}function v(){return(0,r.uO)(f,s)}function h(){return s}function g(e,t){return(0,r.tb)(f,e,t)}function b(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z(e){return o=i=1,a=(0,r.to)(f=e),s=0,[]}function y(e){return f="",e}function w(e){return(0,r.fy)(g(s-1,k(91===e?e+2:40===e?e+1:e)))}function x(e){for(;(c=v())&&c<33;)m();return b(e)>2||b(c)>3?"":" "}function O(e,t){for(;--t&&m()&&!(c<48||c>102||c>57&&c<65||c>70&&c<97););return g(e,h()+(t<6&&32==v()&&32==m()))}function k(e){for(;m();)switch(c){case e:return s;case 34:case 39:34!==e&&39!==e&&k(c);break;case 40:41===e&&k(e);break;case 92:m()}return s}function j(e,t){for(;m()&&e+c!==57&&(e+c!==84||47!==v()););return"/*"+g(t,s-1)+"*"+(0,r.Dp)(47===e?e:m())}function E(e){for(;!b(v());)m();return g(e,s)}},6686:(e,t,n)=>{n.d(t,{$e:()=>h,Cw:()=>u,Dp:()=>o,EQ:()=>c,Ei:()=>m,R3:()=>v,Wn:()=>r,f0:()=>i,fy:()=>s,gx:()=>f,tb:()=>l,to:()=>p,uO:()=>d,vp:()=>a});var r=Math.abs,o=String.fromCharCode,i=Object.assign;function a(e,t){return 45^d(e,0)?(((t<<2^d(e,0))<<2^d(e,1))<<2^d(e,2))<<2^d(e,3):0}function s(e){return e.trim()}function c(e,t){return(e=t.exec(e))?e[0]:e}function f(e,t,n){return e.replace(t,n)}function u(e,t){return e.indexOf(t)}function d(e,t){return 0|e.charCodeAt(t)}function l(e,t,n){return e.slice(t,n)}function p(e){return e.length}function m(e){return e.length}function v(e,t){return t.push(e),e}function h(e,t){return e.map(t).join("")}}}]);
//# sourceMappingURL=main-e96e9bea.cb0e0e9726fe.js.map