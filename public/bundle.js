var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function a(t,e,n){t.$$.on_destroy.push(i(e,n))}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),f=l?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&f(p)}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function O(t,e){(null!=e||t.value)&&(t.value=e)}function j(t,e,n){t.classList[n?"add":"remove"](e)}function _(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let C,k,A=0,E={};function S(t,e,n,r,o,s,c,i=0){const a=16.666/r;let l="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*s(t);l+=100*t+`%{${c(r,1-r)}}\n`}const u=l+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`;if(!E[f]){if(!C){const t=$("style");document.head.appendChild(t),C=t.sheet}E[f]=!0,C.insertRule(`@keyframes ${f} ${u}`,C.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${o}ms 1 both`,A+=1,f}function M(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--A&&f(()=>{if(A)return;let t=C.cssRules.length;for(;t--;)C.deleteRule(t);E={}})}function P(t){k=t}function T(){if(!k)throw new Error("Function called outside component initialization");return k}const q=[],I=[],D=[],N=[],R=Promise.resolve();let B=!1;function z(t){D.push(t)}let H=!1;const U=new Set;function V(){if(!H){H=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];P(e),F(e.$$)}for(q.length=0;I.length;)I.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];U.has(e)||(U.add(e),e())}D.length=0}while(q.length);for(;N.length;)N.pop()();B=!1,H=!1,U.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let G;function W(t,e,n){t.dispatchEvent(_(`${e?"intro":"outro"}${n}`))}const Z=new Set;let J;function Y(){J={r:0,c:[],p:J}}function K(){J.r||o(J.c),J=J.p}function Q(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(Z.has(t))return;Z.add(t),J.c.push(()=>{Z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const tt={duration:0};function et(n,r,c,i){let a=r(n,c),l=i?0:1,m=null,g=null,h=null;function $(){h&&M(n,h)}function v(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(r){const{delay:s=0,duration:c=300,easing:i=e,tick:y=t,css:b}=a||tt,w={start:u()+s,b:r};r||(w.group=J,J.r+=1),m?g=w:(b&&($(),h=S(n,l,r,c,s,i,b)),r&&y(0,1),m=v(w,c),z(()=>W(n,r,"start")),function(t){let e;0===d.size&&f(p),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(g&&t>g.start&&(m=v(g,c),g=null,W(n,m.b,"start"),b&&($(),h=S(n,l,m.b,m.duration,0,i,a.css))),m)if(t>=m.end)y(l=m.b,1-l),W(n,m.b,"end"),g||(m.b?$():--m.group.r||o(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;l=m.a+m.d*i(e/m.duration),y(l,1-l)}return!(!m&&!g)}))}return{run(t){s(a)?(G||(G=Promise.resolve(),G.then(()=>{G=null})),G).then(()=>{a=a(),y(t)}):y(t)},end(){$(),m=g=null}}}function nt(t,e){X(t,1,1,()=>{e.delete(t.key)})}function rt(t){t&&t.c()}function ot(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,r),z(()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(z)}function st(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(q.push(t),B||(B=!0,R.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,s,c,i,a,l=[-1]){const u=k;P(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let p=!1;d.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&ct(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target&&(n.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):d.fragment&&d.fragment.c(),n.intro&&Q(e.$$.fragment),ot(e,n.target,n.anchor),V()),P(u)}class at{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function lt(e){let n;return{c(){n=$("header"),n.innerHTML='<h1 class="svelte-r1hr4i">Interactive map of Coronavirus (COVID-19) cases in England</h1>',w(n,"class","svelte-r1hr4i")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class ut extends at{constructor(t){super(),it(this,t,null,lt,c,{})}}function ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(n),!0).forEach((function(e){ft(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function mt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,s=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,s=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function gt(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var ht,$t,vt,yt={lat:52.914639,lon:-1.47189};function bt(t){if(null==ht||null==t)return null;$t&&$t.remove(),($t=L.control({position:"topright"})).onAdd=function(){var e=L.DomUtil.create("div","info legend"),n=!0,r=!1,o=void 0;try{for(var s,c=function(t){if(0==t)return[];var e=_t(t),n=e.map((function(t){return t-1}));return n.shift(),n.push(t),["Unknown"].concat(gt(e.map((function(t,e){return 0==e?"0 cases":"".concat(t,"-").concat(n[e]," cases")})))).map((function(t,e){return{label:t,color:Ot[e]}}))}(t)[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var i=s.value;e.innerHTML+='<div class="keyitem">\n\t\t\t\t<div class="color '.concat(i.color,'"><div></div></div>\n\t\t\t\t<div class="label">').concat(i.label,"</div>\n\t\t\t</div>")}}catch(t){r=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return e},$t.addTo(ht)}function wt(t){var e=t.feature.properties.mergedAuthority||t.feature.properties.ctyua19nm,n=t.feature.properties.casesCount;return null==n?"".concat(e,"<br/>No data"):"".concat(e,"<br/>").concat(n," case").concat(1==n?"":"s")}function xt(t,e){var n=wt(e);e.bindPopup(n,{className:"region-popup"}).addTo(ht),e.openPopup(t)}var Ot=["region-unknown","region-zero","region-one","region-two","region-three","region-four","region-five"],jt=Array(Ot.length-2);function _t(t){return[0].concat(gt(Array.from(jt,(function(e,n){return Math.ceil(t/(Ot.length-2)*n+1)}))))}function Ct(t,e){if(null==t)return Ot[0];for(var n=_t(e),r=n.length;r>=0;r--)if(t>=n[r])return Ot[r+1]}const kt=[];function At(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!kt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),kt.push(n,e)}if(t){for(let t=0;t<kt.length;t+=2)kt[t][0](kt[t+1]);kt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function Et(e,n,r){const c=!Array.isArray(e),a=c?[e]:e,l=n.length<2;return{subscribe:At(r,e=>{let r=!1;const u=[];let f=0,d=t;const p=()=>{if(f)return;d();const r=n(c?u[0]:u,e);l?e(r):d=s(r)?r:t},m=a.map((t,e)=>i(t,t=>{u[e]=t,f&=~(1<<e),r&&p()},()=>{f|=1<<e}));return r=!0,p(),function(){o(m),d()}}).subscribe}}var St=At(),Mt=At([]),Lt=At({}),Pt=At({}),Tt=At(),qt=At(),It=At(),Dt=Et([Tt,Mt],(function(t){var e=mt(t,2),n=e[0];return e[1].indexOf(n)})),Nt=Et(Pt,(function(t){return function(t){return Object.values(t).reduce((function(t,e){return e.Cases.reduce((function(t,e){return Math.max(t,e)}),t)}),0)}(t)})),Rt=(Et([Pt,Dt],(function(t){var e=mt(t,2);return function(t,e){return Object.values(t).reduce((function(t,n){return Math.max(t,n.Cases[e])}),0)}(e[0],e[1])})),Et(Pt,(function(t){return function(t){return Object.entries(t).reduce((function(t,e){var n=mt(e,2),r=n[0],o=n[1],s=o.Codes.reduce((function(t,e){return pt({},t,ft({},e,{Name:r,Cases:o.Cases}))}),{});return pt({},t,{},s)}),{})}(t)})));function Bt(e){let n;return{c(){n=$("section"),n.innerHTML='<div id="leaflet_ele" class="svelte-1gesra4"></div>',w(n,"class","svelte-1gesra4")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function zt(t,e,n){let r,o,s,c,i;return a(t,St,t=>n(0,r=t)),a(t,Nt,t=>n(1,o=t)),a(t,Rt,t=>n(2,s=t)),a(t,Dt,t=>n(3,c=t)),a(t,qt,t=>n(4,i=t)),t.$$.update=()=>{1&t.$$.dirty&&function(t){null==ht&&null!=t&&((ht=L.map("leaflet_ele",{center:yt,zoom:7})).getPane("overlayPane").classList.add("blend-overlay-pane"),L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:20,ext:"png"}).addTo(ht),vt&&vt.remove(),(vt=L.geoJSON(t,{style:function(t){return{fillOpacity:.5,weight:0}},onEachFeature:function(t,e){e.on({click:function(t){return xt(t.latlng,t.sourceTarget)}})}})).addTo(ht))}(r),2&t.$$.dirty&&bt(o),14&t.$$.dirty&&function(t,e,n){if(null!=vt)for(var r=0,o=Object.values(vt._layers);r<o.length;r++){var s=o[r],c=e[s.feature.properties.ctyua19cd],i=c?c.Cases[n]:null;if(s._path.setAttribute("fill-opacity",1),s._path.setAttribute("class","leaflet-interactive "+Ct(i,t)),s.feature.properties.casesCount=i,c&&s.feature.properties.ctyua19nm!=c.Name&&(s.feature.properties.mergedAuthority=c.Name),s.isPopupOpen()){var a=s.getPopup(),l=wt(s);a.setContent(l)}}}(o,s,c),16&t.$$.dirty&&function(t){if(null!=ht)if(t&&t.length>0){var e=Object.values(vt._layers).find((function(e){return t==e.feature.properties.ctyua19cd}));if(e)xt(L.latLng(e.feature.properties.lat,e.feature.properties.long),e),ht.setView(e.getCenter(),9,{animate:!0}),window.scrollTo(0,0)}else ht.closePopup(),ht.setView(yt,7,{animate:!0}),window.scrollTo(0,0)}(i)},[]}Mt.subscribe((function(t){t&&t.length>0&&Tt.set(t[t.length-1])}));class Ht extends at{constructor(t){super(),it(this,t,zt,Bt,c,{})}}function Ut(e){let n,r,o,s,c,i,a;return{c(){n=$("section"),r=$("h2"),o=v(e[0]),s=y(),c=$("input"),w(r,"class","svelte-m3mxtw"),w(c,"type","range"),w(c,"min","0"),w(c,"max",i=e[1].length-1),c.value=e[2],w(c,"class","svelte-m3mxtw"),w(n,"class","svelte-m3mxtw")},m(t,i){g(t,n,i),m(n,r),m(r,o),m(n,s),m(n,c),a=b(c,"input",e[3])},p(t,[e]){1&e&&x(o,t[0]),2&e&&i!==(i=t[1].length-1)&&w(c,"max",i),4&e&&(c.value=t[2])},i:t,o:t,d(t){t&&h(n),a()}}}function Vt(t,e,n){let r,o,s;a(t,Tt,t=>n(4,r=t)),a(t,Mt,t=>n(1,o=t)),a(t,Dt,t=>n(2,s=t));const c=new Intl.DateTimeFormat("en-GB",{weekday:"short",year:"numeric",month:"long",day:"numeric"});let i="Date";return t.$$.update=()=>{16&t.$$.dirty&&r&&n(0,i=c.format(new Date(r)))},[i,o,s,t=>{Tt.set(o[t.target.value])}]}class Ft extends at{constructor(t){super(),it(this,t,Vt,Ut,c,{})}}function Gt(e){let n,r,s,c,i,a,l,u,f;return{c(){n=$("section"),r=$("h2"),r.textContent="Search for a region",s=y(),c=$("div"),i=$("input"),a=y(),l=$("div"),u=$("button"),u.innerHTML='<img src="img/close.svg" alt="clear" class="svelte-qj2m8d">',w(r,"class","svelte-qj2m8d"),w(i,"class","svelte-qj2m8d"),w(u,"class","svelte-qj2m8d"),w(l,"class","svelte-qj2m8d"),w(c,"class","inputgroup svelte-qj2m8d"),w(n,"class","svelte-qj2m8d")},m(t,o){g(t,n,o),m(n,r),m(n,s),m(n,c),m(c,i),O(i,e[0]),m(c,a),m(c,l),m(l,u),f=[b(i,"input",e[2]),b(u,"click",e[1])]},p(t,[e]){1&e&&i.value!==t[0]&&O(i,t[0])},i:t,o:t,d(t){t&&h(n),o(f)}}}function Wt(t,e,n){let r;a(t,It,t=>n(0,r=t));return[r,()=>It.set(""),function(){r=this.value,It.set(r)}]}class Zt extends at{constructor(t){super(),it(this,t,Wt,Gt,c,{})}}function Jt(e){let n,r,o;const s=new Ft({}),c=new Zt({});return{c(){n=$("section"),rt(s.$$.fragment),r=y(),rt(c.$$.fragment),w(n,"class","svelte-1nlevl2")},m(t,e){g(t,n,e),ot(s,n,null),m(n,r),ot(c,n,null),o=!0},p:t,i(t){o||(Q(s.$$.fragment,t),Q(c.$$.fragment,t),o=!0)},o(t){X(s.$$.fragment,t),X(c.$$.fragment,t),o=!1},d(t){t&&h(n),st(s),st(c)}}}class Yt extends at{constructor(t){super(),it(this,t,null,Jt,c,{})}}function Kt(e){let n,r;return{c(){n=$("h2"),r=v(e[0]),w(n,"class","svelte-1mhnqvg")},m(t,e){g(t,n,e),m(n,r)},p(t,[e]){1&e&&x(r,t[0])},i:t,o:t,d(t){t&&h(n)}}}function Qt(t,e,n){let{prefix:r}=e;return t.$set=t=>{"prefix"in t&&n(0,r=t.prefix)},[r]}class Xt extends at{constructor(t){super(),it(this,t,Qt,Kt,c,{prefix:0})}}function te(t,{delay:n=0,duration:r=400,easing:o=e}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>`opacity: ${t*s}`}}function ee(t){let e,n,r,o,s,c,i,a,l,u,f,d;return{c(){e=$("div"),n=$("div"),r=v(t[0]),o=y(),s=$("span"),c=v(t[2]),i=y(),a=$("span"),l=v(t[3]),w(n,"class","name svelte-3p80bq"),w(s,"class","count svelte-3p80bq"),w(a,"class","change svelte-3p80bq"),j(a,"increase",t[4]),j(a,"decrease",t[5]),j(a,"same",t[6]),w(e,"class","item svelte-3p80bq"),j(e,"selected",t[7])},m(u,p){g(u,e,p),m(e,n),m(n,r),m(e,o),m(e,s),m(s,c),m(e,i),m(e,a),m(a,l),f=!0,d=b(e,"click",t[11])},p(t,[n]){(!f||1&n)&&x(r,t[0]),(!f||4&n)&&x(c,t[2]),(!f||8&n)&&x(l,t[3]),16&n&&j(a,"increase",t[4]),32&n&&j(a,"decrease",t[5]),64&n&&j(a,"same",t[6]),128&n&&j(e,"selected",t[7])},i(t){f||(z(()=>{u||(u=et(e,te,{},!0)),u.run(1)}),f=!0)},o(t){u||(u=et(e,te,{},!1)),u.run(0),f=!1},d(t){t&&h(e),t&&u&&u.end(),d()}}}function ne(t,e,n){let{name:r}=e,{item:o}=e,{caseIndex:s}=e,{focusRegion:c}=e;const i=function(){const t=T();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=_(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}();let a,l,u,f,d,p;return t.$set=t=>{"name"in t&&n(0,r=t.name),"item"in t&&n(1,o=t.item),"caseIndex"in t&&n(9,s=t.caseIndex),"focusRegion"in t&&n(10,c=t.focusRegion)},t.$$.update=()=>{1550&t.$$.dirty&&(n(2,a=o.Cases[s]),n(3,l=0==s?a:a-o.Cases[Math.max(s-1,0)]),n(4,u=l>0),n(5,f=l<0),n(6,d=0==l),n(7,p=o.Codes[0]==c))},[r,o,a,l,u,f,d,p,i,s,c,()=>i("click",o.Codes[0])]}class re extends at{constructor(t){super(),it(this,t,ne,ee,c,{name:0,item:1,caseIndex:9,focusRegion:10})}}function oe(t,e,n){const r=t.slice();return r[12]=e[n].name,r[13]=e[n].item,r}function se(t,e,n){const r=t.slice();return r[8]=e[n][0],r[9]=e[n][1],r}function ce(t,e){let n,r;const o=new re({props:{name:e[12],item:e[13],caseIndex:e[2],focusRegion:e[1]}});return o.$on("click",e[3]),{key:t,first:null,c(){n=v(""),rt(o.$$.fragment),this.first=n},m(t,e){g(t,n,e),ot(o,t,e),r=!0},p(t,e){const n={};1&e&&(n.name=t[12]),1&e&&(n.item=t[13]),4&e&&(n.caseIndex=t[2]),2&e&&(n.focusRegion=t[1]),o.$set(n)},i(t){r||(Q(o.$$.fragment,t),r=!0)},o(t){X(o.$$.fragment,t),r=!1},d(t){t&&h(n),st(o,t)}}}function ie(t){let e,n,r,o=[],s=new Map;const c=new Xt({props:{prefix:t[8]}});let i=t[9];const a=t=>t[12];for(let e=0;e<i.length;e+=1){let n=oe(t,i,e),r=a(n);s.set(r,o[e]=ce(r,n))}return{c(){rt(c.$$.fragment),e=y(),n=$("div");for(let t=0;t<o.length;t+=1)o[t].c();w(n,"class","container svelte-ox950")},m(t,s){ot(c,t,s),g(t,e,s),g(t,n,s);for(let t=0;t<o.length;t+=1)o[t].m(n,null);r=!0},p(t,e){const r={};if(1&e&&(r.prefix=t[8]),c.$set(r),15&e){const r=t[9];Y(),o=function(t,e,n,r,o,s,c,i,a,l,u,f){let d=t.length,p=s.length,m=d;const g={};for(;m--;)g[t[m].key]=m;const h=[],$=new Map,v=new Map;for(m=p;m--;){const t=f(o,s,m),i=n(t);let a=c.get(i);a?r&&a.p(t,e):(a=l(i,t),a.c()),$.set(i,h[m]=a),i in g&&v.set(i,Math.abs(m-g[i]))}const y=new Set,b=new Set;function w(t){Q(t,1),t.m(i,u),c.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=h[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(u=e.first,d--,p--):$.has(o)?!c.has(r)||y.has(r)?w(e):b.has(o)?d--:v.get(r)>v.get(o)?(b.add(r),w(e)):(y.add(o),d--):(a(n,c),d--)}for(;d--;){const e=t[d];$.has(e.key)||a(e,c)}for(;p;)w(h[p-1]);return h}(o,e,a,1,t,r,s,n,nt,ce,null,oe),K()}},i(t){if(!r){Q(c.$$.fragment,t);for(let t=0;t<i.length;t+=1)Q(o[t]);r=!0}},o(t){X(c.$$.fragment,t);for(let t=0;t<o.length;t+=1)X(o[t]);r=!1},d(t){st(c,t),t&&h(e),t&&h(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}function ae(t){let e,n,r;const o=new Xt({props:{prefix:"-"}});return{c(){rt(o.$$.fragment),e=y(),n=$("div"),n.textContent="No regions found",w(n,"class","no-regions svelte-ox950")},m(t,s){ot(o,t,s),g(t,e,s),g(t,n,s),r=!0},i(t){r||(Q(o.$$.fragment,t),r=!0)},o(t){X(o.$$.fragment,t),r=!1},d(t){st(o,t),t&&h(e),t&&h(n)}}}function le(t){let e,n,r,o=0==Object.keys(t[0]).length,s=Object.entries(t[0]),c=[];for(let e=0;e<s.length;e+=1)c[e]=ie(se(t,s,e));const i=t=>X(c[t],1,1,()=>{c[t]=null});let a=o&&ae();return{c(){e=$("section");for(let t=0;t<c.length;t+=1)c[t].c();n=y(),a&&a.c(),w(e,"class","svelte-ox950")},m(t,o){g(t,e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null);m(e,n),a&&a.m(e,null),r=!0},p(t,[r]){if(15&r){let o;for(s=Object.entries(t[0]),o=0;o<s.length;o+=1){const i=se(t,s,o);c[o]?(c[o].p(i,r),Q(c[o],1)):(c[o]=ie(i),c[o].c(),Q(c[o],1),c[o].m(e,n))}for(Y(),o=s.length;o<c.length;o+=1)i(o);K()}1&r&&(o=0==Object.keys(t[0]).length),o?a?Q(a,1):(a=ae(),a.c(),Q(a,1),a.m(e,null)):a&&(Y(),X(a,1,1,()=>{a=null}),K())},i(t){if(!r){for(let t=0;t<s.length;t+=1)Q(c[t]);Q(a),r=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)X(c[t]);X(a),r=!1},d(t){t&&h(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t),a&&a.d()}}}function ue(t,e,n){let r,o,s,c;a(t,qt,t=>n(1,r=t)),a(t,Pt,t=>n(4,o=t)),a(t,It,t=>n(5,s=t)),a(t,Dt,t=>n(2,c=t));let i=[],l=(t,[e,n])=>{let r=e[0];return r in t?t[r].push({name:e,item:n}):t[r]=[{name:e,item:n}],t};return t.$$.update=()=>{48&t.$$.dirty&&n(0,i=Object.entries(o).filter(([t,e])=>((t,e)=>t.toUpperCase().includes((e||"").toUpperCase()))(t,s)).reduce(l,{}))},[i,r,c,t=>{t.detail==r?qt.set(null):qt.set(t.detail)}]}class fe extends at{constructor(t){super(),it(this,t,ue,le,c,{})}}function de(e){let n;return{c(){n=$("footer"),n.innerHTML='<ul class="svelte-xv4q4t"><li>Source: Office for National Statistics licensed under the Open Government Licence v.3.0</li> \n\t\t<li>Website <a href="https://github.com/Temetra/COVID-19-Interactive-Map-England">available on GitHub</a>, licensed under MIT</li></ul>',w(n,"class","svelte-xv4q4t")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class pe extends at{constructor(t){super(),it(this,t,null,de,c,{})}}function me(e){let n,r,o,s,c,i;const a=new ut({}),l=new Ht({}),u=new Yt({}),f=new fe({}),d=new pe({});return{c(){n=$("div"),rt(a.$$.fragment),r=y(),rt(l.$$.fragment),o=y(),rt(u.$$.fragment),s=y(),rt(f.$$.fragment),c=y(),rt(d.$$.fragment),w(n,"class","container svelte-1hfdsq")},m(t,e){g(t,n,e),ot(a,n,null),m(n,r),ot(l,n,null),m(n,o),ot(u,n,null),m(n,s),ot(f,n,null),m(n,c),ot(d,n,null),i=!0},p:t,i(t){i||(Q(a.$$.fragment,t),Q(l.$$.fragment,t),Q(u.$$.fragment,t),Q(f.$$.fragment,t),Q(d.$$.fragment,t),i=!0)},o(t){X(a.$$.fragment,t),X(l.$$.fragment,t),X(u.$$.fragment,t),X(f.$$.fragment,t),X(d.$$.fragment,t),i=!1},d(t){t&&h(n),st(a),st(l),st(u),st(f),st(d)}}}function ge(t){var e;return e=async()=>{fetch("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json").then(t=>t.json()).then(t=>St.set(t)).then(()=>fetch("./data/Coronavirus-COVID-19-number-of-cases-in-England.json")).then(t=>t.json()).then(t=>{Mt.set(t.Labels),Lt.set(t.Summary),Pt.set(t.CasesByRegion)}).catch(t=>console.error(t))},T().$$.on_mount.push(e),[]}var he=new class extends at{constructor(t){super(),it(this,t,ge,me,c,{})}}({target:document.body});return window.app=he,he}();
