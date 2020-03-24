var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function u(t,e,n){t.$$.on_destroy.push(l(e,n))}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function g(){return d("")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.data!==e&&(t.data=e)}function b(t,e){(null!=e||t.value)&&(t.value=e)}function $(t,e,n){t.classList[n?"add":"remove"](e)}let w;function O(t){w=t}function x(t){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(t)}const C=[],j=[],_=[],A=[],P=Promise.resolve();let T=!1;function S(t){_.push(t)}let E=!1;const M=new Set;function N(){if(!E){E=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];O(e),k(e.$$)}for(C.length=0;j.length;)j.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];M.has(e)||(M.add(e),e())}_.length=0}while(C.length);for(;A.length;)A.pop()();T=!1,E=!1,M.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const D=new Set;function I(t,e){t&&t.i&&(D.delete(t),t.i(e))}function U(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),(void 0).c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function B(t){t&&t.c()}function H(t,n,c){const{fragment:l,on_mount:u,on_destroy:i,after_update:s}=t.$$;l&&l.m(n,c),S(()=>{const n=u.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(S)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(C.push(t),T||(T=!0,P.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,o,c,l,u,i,s=[-1]){const a=w;O(e);const f=o.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:s};let d=!1;p.ctx=c?c(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&q(e,t)),n}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!l&&l(p.ctx),o.target&&(o.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):p.fragment&&p.fragment.c(),o.intro&&I(e.$$.fragment),H(e,o.target,o.anchor),N()),O(a)}class F{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function G(e){let n;return{c(){n=p("header"),n.innerHTML="<h1>Interactive map of Coronavirus (COVID-19) cases in England</h1>",v(n,"class","svelte-1t0ytpt")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class W extends F{constructor(t){super(),z(this,t,null,G,c,{})}}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach((function(e){Z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function K(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Q,X,tt,et={lat:52.914639,lon:-1.47189};function nt(t){if(null==Q||null==t)return null;X&&X.remove(),(X=L.control({position:"topright"})).onAdd=function(){var e=L.DomUtil.create("div","info legend"),n=!0,r=!1,o=void 0;try{for(var c,l=function(t){if(0==t)return[];var e=ut(t),n=e.map((function(t){return t-1}));return n.shift(),n.push(t),["Unknown"].concat(K(e.map((function(t,e){return 0==e?"0 cases":"".concat(t,"-").concat(n[e]," cases")})))).map((function(t,e){return{label:t,color:ct[e]}}))}(t)[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var u=c.value;e.innerHTML+='<div class="keyitem">\n\t\t\t\t<div class="color '.concat(u.color,'"><div></div></div>\n\t\t\t\t<div class="label">').concat(u.label,"</div>\n\t\t\t</div>")}}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return e},X.addTo(Q)}function rt(t){var e=t.feature.properties.mergedAuthority||t.feature.properties.ctyua19nm,n=t.feature.properties.casesCount;return null==n?"".concat(e,"<br/>No data"):"".concat(e,"<br/>").concat(n," case").concat(1==n?"":"s")}function ot(t,e){var n=rt(e);e.bindPopup(n,{className:"region-popup"}).addTo(Q),e.openPopup(t)}var ct=["region-unknown","region-zero","region-one","region-two","region-three","region-four","region-five"],lt=Array(ct.length-2);function ut(t){return[0].concat(K(Array.from(lt,(function(e,n){return Math.ceil(t/(ct.length-2)*n+1)}))))}function it(t,e){if(null==t)return ct[0];for(var n=ut(e),r=n.length;r>=0;r--)if(t>=n[r])return ct[r+1]}const st=[];function at(e,n=t){let r;const o=[];function l(t){if(c(e,t)&&(e=t,r)){const t=!st.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(c,u=t){const i=[c,u];return o.push(i),1===o.length&&(r=n(l)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ft(e,n,c){const u=!Array.isArray(e),i=u?[e]:e,s=n.length<2;return{subscribe:at(c,e=>{let c=!1;const a=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=n(u?a[0]:a,e);s?e(r):p=o(r)?r:t},h=i.map((t,e)=>l(t,t=>{a[e]=t,f&=~(1<<e),c&&d()},()=>{f|=1<<e}));return c=!0,d(),function(){r(h),p()}}).subscribe}}var pt=at(),dt=at([]),ht=at({}),gt=at({}),mt=at(),vt=at(),yt=at(),bt=ft([mt,dt],(function(t){var e=Y(t,2),n=e[0];return e[1].indexOf(n)})),$t=ft(gt,(function(t){return function(t){return Object.values(t).reduce((function(t,e){return e.Cases.reduce((function(t,e){return Math.max(t,e)}),t)}),0)}(t)})),wt=(ft([gt,bt],(function(t){var e=Y(t,2);return function(t,e){return Object.values(t).reduce((function(t,n){return Math.max(t,n.Cases[e])}),0)}(e[0],e[1])})),ft(gt,(function(t){return function(t){return Object.entries(t).reduce((function(t,e){var n=Y(e,2),r=n[0],o=n[1],c=o.Codes.reduce((function(t,e){return R({},t,Z({},e,{Name:r,Cases:o.Cases}))}),{});return R({},t,{},c)}),{})}(t)})));function Ot(e){let n;return{c(){n=p("section"),n.innerHTML='<div id="leaflet_ele" class="svelte-191riyy"></div>',v(n,"class","svelte-191riyy")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}function xt(t,e,n){let r,o,c,l,i;return u(t,pt,t=>n(0,r=t)),u(t,$t,t=>n(1,o=t)),u(t,wt,t=>n(2,c=t)),u(t,bt,t=>n(3,l=t)),u(t,vt,t=>n(4,i=t)),t.$$.update=()=>{1&t.$$.dirty&&function(t){null==Q&&null!=t&&((Q=L.map("leaflet_ele",{center:et,zoom:7})).getPane("overlayPane").classList.add("blend-overlay-pane"),L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:20,ext:"png"}).addTo(Q),tt&&tt.remove(),(tt=L.geoJSON(t,{style:function(t){return{fillOpacity:.5,weight:0}},onEachFeature:function(t,e){e.on({click:function(t){return ot(t.latlng,t.sourceTarget)}})}})).addTo(Q))}(r),2&t.$$.dirty&&nt(o),14&t.$$.dirty&&function(t,e,n){if(null!=tt)for(var r=0,o=Object.values(tt._layers);r<o.length;r++){var c=o[r],l=e[c.feature.properties.ctyua19cd],u=l?l.Cases[n]:null;if(c._path.setAttribute("fill-opacity",1),c._path.setAttribute("class","leaflet-interactive "+it(u,t)),c.feature.properties.casesCount=u,l&&c.feature.properties.ctyua19nm!=l.Name&&(c.feature.properties.mergedAuthority=l.Name),c.isPopupOpen()){var i=c.getPopup(),s=rt(c);i.setContent(s)}}}(o,c,l),16&t.$$.dirty&&function(t){if(null!=Q)if(t&&t.length>0){var e=Object.values(tt._layers).find((function(e){return t==e.feature.properties.ctyua19cd}));if(e)ot(L.latLng(e.feature.properties.lat,e.feature.properties.long),e),Q.setView(e.getCenter(),9,{animate:!0}),window.scrollTo(0,0)}else Q.closePopup(),Q.setView(et,7,{animate:!0}),window.scrollTo(0,0)}(i)},[]}dt.subscribe((function(t){t&&t.length>0&&mt.set(t[t.length-1])}));class Ct extends F{constructor(t){super(),z(this,t,xt,Ot,c,{})}}function jt(e){let n,r,o,c,l,u;return{c(){n=p("section"),r=p("h2"),r.textContent="Pick date within range",o=h(),c=p("input"),v(c,"type","range"),v(c,"min","0"),v(c,"max",l=e[0].length-1),c.value=e[1],v(c,"class","svelte-1hicb22"),v(n,"class","svelte-1hicb22")},m(t,l){s(t,n,l),i(n,r),i(n,o),i(n,c),u=m(c,"input",e[2])},p(t,[e]){1&e&&l!==(l=t[0].length-1)&&v(c,"max",l),2&e&&(c.value=t[1])},i:t,o:t,d(t){t&&a(n),u()}}}function _t(t,e,n){let r,o;u(t,dt,t=>n(0,r=t)),u(t,bt,t=>n(1,o=t));return[r,o,t=>{mt.set(r[t.target.value])}]}class At extends F{constructor(t){super(),z(this,t,_t,jt,c,{})}}function Lt(e){let n,r,o,c,l,u,f;return{c(){n=p("section"),r=p("h2"),r.textContent="Choose a date",o=h(),c=p("input"),v(c,"type","date"),c.required=!0,c.value=e[0],v(c,"min",l=e[1][0]),v(c,"max",u=e[1][e[1].length-1]),v(c,"class","svelte-vg1ni"),v(n,"class","svelte-vg1ni")},m(t,l){s(t,n,l),i(n,r),i(n,o),i(n,c),f=m(c,"change",e[2])},p(t,[e]){1&e&&(c.value=t[0]),2&e&&l!==(l=t[1][0])&&v(c,"min",l),2&e&&u!==(u=t[1][t[1].length-1])&&v(c,"max",u)},i:t,o:t,d(t){t&&a(n),f()}}}function Pt(t,e,n){let r,o;u(t,mt,t=>n(0,r=t)),u(t,dt,t=>n(1,o=t));return[r,o,t=>{mt.set(t.target.value)}]}class Tt extends F{constructor(t){super(),z(this,t,Pt,Lt,c,{})}}function St(e){let n,o,c,l,u,f,d,g,y;return{c(){n=p("section"),o=p("h2"),o.textContent="Search for a region",c=h(),l=p("div"),u=p("input"),f=h(),d=p("div"),g=p("button"),g.textContent="×",v(u,"class","svelte-1g8bci8"),v(g,"class","svelte-1g8bci8"),v(d,"class","svelte-1g8bci8"),v(l,"class","inputgroup svelte-1g8bci8"),v(n,"class","svelte-1g8bci8")},m(t,r){s(t,n,r),i(n,o),i(n,c),i(n,l),i(l,u),b(u,e[0]),i(l,f),i(l,d),i(d,g),y=[m(u,"input",e[2]),m(g,"click",e[1])]},p(t,[e]){1&e&&u.value!==t[0]&&b(u,t[0])},i:t,o:t,d(t){t&&a(n),r(y)}}}function Et(t,e,n){let r;u(t,yt,t=>n(0,r=t));return[r,()=>yt.set(""),function(){r=this.value,yt.set(r)}]}class Mt extends F{constructor(t){super(),z(this,t,Et,St,c,{})}}function Nt(t,e,n){const r=t.slice();return r[14]=e[n],r[16]=n,r}function kt(t,e,n){const r=t.slice();return r[10]=e[n][0],r[11]=e[n][1],r}function Dt(t,e,n){const r=t.slice();return r[14]=e[n],r[16]=n,r}function It(t,e,n){const r=t.slice();return r[10]=e[n][0],r[17]=e[n][1].Cases,r[18]=e[n][1].Codes,r}function Ut(t,e,n){const r=t.slice();return r[22]=e[n],r}function Bt(t){let e,n,r,o,c=t[22]+"";return{c(){e=p("th"),n=d("Cases on "),r=p("span"),o=d(c),v(r,"class","svelte-1puyo7e"),v(e,"class","svelte-1puyo7e"),$(e,"show",t[22]==t[3])},m(t,c){s(t,e,c),i(e,n),i(e,r),i(r,o)},p(t,n){4&n&&c!==(c=t[22]+"")&&y(o,c),12&n&&$(e,"show",t[22]==t[3])},d(t){t&&a(e)}}}function Ht(t){let e,n,r,o,c,l,u=t[10]+"",g=t[17],b=[];for(let e=0;e<g.length;e+=1)b[e]=Vt(Dt(t,g,e));function w(...e){return t[9](t[18],...e)}return{c(){e=p("tr"),n=p("td"),r=d(u),o=h();for(let t=0;t<b.length;t+=1)b[t].c();c=h(),v(n,"class","show svelte-1puyo7e"),$(e,"region-selected",t[18][0]==t[0])},m(t,u){s(t,e,u),i(e,n),i(n,r),i(e,o);for(let t=0;t<b.length;t+=1)b[t].m(e,null);i(e,c),l=m(e,"click",w)},p(n,o){if(t=n,16&o&&u!==(u=t[10]+"")&&y(r,u),48&o){let n;for(g=t[17],n=0;n<g.length;n+=1){const r=Dt(t,g,n);b[n]?b[n].p(r,o):(b[n]=Vt(r),b[n].c(),b[n].m(e,c))}for(;n<b.length;n+=1)b[n].d(1);b.length=g.length}17&o&&$(e,"region-selected",t[18][0]==t[0])},d(t){t&&a(e),f(b,t),l()}}}function Vt(t){let e,n,r=t[14]+"";return{c(){e=p("td"),n=d(r),v(e,"class","svelte-1puyo7e"),$(e,"show",t[16]==t[5])},m(t,r){s(t,e,r),i(e,n)},p(t,o){16&o&&r!==(r=t[14]+"")&&y(n,r),32&o&&$(e,"show",t[16]==t[5])},d(t){t&&a(e)}}}function qt(t){let e,n=t[1](t[10]),r=n&&Ht(t);return{c(){r&&r.c(),e=g()},m(t,n){r&&r.m(t,n),s(t,e,n)},p(t,o){18&o&&(n=t[1](t[10])),n?r?r.p(t,o):(r=Ht(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&a(e)}}}function zt(t){let e,n,r,o,c,l=t[10]+"",u=t[11],g=[];for(let e=0;e<u.length;e+=1)g[e]=Ft(Nt(t,u,e));return{c(){e=p("tr"),n=p("td"),r=d(l),o=h();for(let t=0;t<g.length;t+=1)g[t].c();c=h(),v(n,"class","show svelte-1puyo7e")},m(t,l){s(t,e,l),i(e,n),i(n,r),i(e,o);for(let t=0;t<g.length;t+=1)g[t].m(e,null);i(e,c)},p(t,n){if(64&n&&l!==(l=t[10]+"")&&y(r,l),96&n){let r;for(u=t[11],r=0;r<u.length;r+=1){const o=Nt(t,u,r);g[r]?g[r].p(o,n):(g[r]=Ft(o),g[r].c(),g[r].m(e,c))}for(;r<g.length;r+=1)g[r].d(1);g.length=u.length}},d(t){t&&a(e),f(g,t)}}}function Ft(t){let e,n,r=t[14]+"";return{c(){e=p("td"),n=d(r),v(e,"class","svelte-1puyo7e"),$(e,"show",t[16]==t[5])},m(t,r){s(t,e,r),i(e,n)},p(t,o){64&o&&r!==(r=t[14]+"")&&y(n,r),32&o&&$(e,"show",t[16]==t[5])},d(t){t&&a(e)}}}function Gt(t){let e,n=t[1](t[10]),r=n&&zt(t);return{c(){r&&r.c(),e=g()},m(t,n){r&&r.m(t,n),s(t,e,n)},p(t,o){66&o&&(n=t[1](t[10])),n?r?r.p(t,o):(r=zt(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&a(e)}}}function Wt(e){let n,r,o,c,l,u,d,g,m,y,b,$,w,O=e[2],x=[];for(let t=0;t<O.length;t+=1)x[t]=Bt(Ut(e,O,t));let C=Object.entries(e[4]),j=[];for(let t=0;t<C.length;t+=1)j[t]=qt(It(e,C,t));let _=Object.entries(e[6]),A=[];for(let t=0;t<_.length;t+=1)A[t]=Gt(kt(e,_,t));return{c(){n=p("section"),r=p("h2"),r.textContent="Confirmed cases by Upper Tier Local Authority",o=h(),c=p("div"),l=p("table"),u=p("thead"),d=p("tr"),g=p("th"),g.textContent="UTLA",m=h();for(let t=0;t<x.length;t+=1)x[t].c();y=h(),b=p("tbody");for(let t=0;t<j.length;t+=1)j[t].c();$=h(),w=p("tfoot");for(let t=0;t<A.length;t+=1)A[t].c();v(g,"class","show svelte-1puyo7e"),v(l,"class","svelte-1puyo7e"),v(c,"class","tablecontainer svelte-1puyo7e"),v(n,"class","svelte-1puyo7e")},m(t,e){s(t,n,e),i(n,r),i(n,o),i(n,c),i(c,l),i(l,u),i(u,d),i(d,g),i(d,m);for(let t=0;t<x.length;t+=1)x[t].m(d,null);i(l,y),i(l,b);for(let t=0;t<j.length;t+=1)j[t].m(b,null);i(l,$),i(l,w);for(let t=0;t<A.length;t+=1)A[t].m(w,null)},p(t,[e]){if(12&e){let n;for(O=t[2],n=0;n<O.length;n+=1){const r=Ut(t,O,n);x[n]?x[n].p(r,e):(x[n]=Bt(r),x[n].c(),x[n].m(d,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=O.length}if(179&e){let n;for(C=Object.entries(t[4]),n=0;n<C.length;n+=1){const r=It(t,C,n);j[n]?j[n].p(r,e):(j[n]=qt(r),j[n].c(),j[n].m(b,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=C.length}if(98&e){let n;for(_=Object.entries(t[6]),n=0;n<_.length;n+=1){const r=kt(t,_,n);A[n]?A[n].p(r,e):(A[n]=Gt(r),A[n].c(),A[n].m(w,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=_.length}},i:t,o:t,d(t){t&&a(n),f(x,t),f(j,t),f(A,t)}}}function Zt(t,e,n){let r,o,c,l,i,s,a;u(t,vt,t=>n(0,r=t)),u(t,yt,t=>n(8,o=t)),u(t,dt,t=>n(2,c=t)),u(t,mt,t=>n(3,l=t)),u(t,gt,t=>n(4,i=t)),u(t,bt,t=>n(5,s=t)),u(t,ht,t=>n(6,a=t));var f=t=>{t==r?vt.set(null):vt.set(t)};let p;return t.$$.update=()=>{256&t.$$.dirty&&n(1,p=t=>null==o||o.length<1||t.toUpperCase().includes(o.toUpperCase()))},[r,p,c,l,i,s,a,f,o,t=>f(t[0])]}class Jt extends F{constructor(t){super(),z(this,t,Zt,Wt,c,{})}}function Rt(e){let n;return{c(){n=p("footer"),n.innerHTML='<ul class="svelte-2d2g1l"><li>Source: Office for National Statistics licensed under the Open Government Licence v.3.0</li> \n\t\t<li>Website <a href="https://github.com/Temetra/COVID-19-Interactive-Map-England">available on GitHub</a>, licensed under MIT</li></ul>',v(n,"class","svelte-2d2g1l")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class Yt extends F{constructor(t){super(),z(this,t,null,Rt,c,{})}}function Kt(e){let n,r,o,c,l,u,f,d;const g=new W({}),m=new Ct({}),y=new At({}),b=new Tt({}),$=new Mt({}),w=new Jt({}),O=new Yt({});return{c(){n=p("div"),B(g.$$.fragment),r=h(),B(m.$$.fragment),o=h(),B(y.$$.fragment),c=h(),B(b.$$.fragment),l=h(),B($.$$.fragment),u=h(),B(w.$$.fragment),f=h(),B(O.$$.fragment),v(n,"class","container svelte-mh3wqq")},m(t,e){s(t,n,e),H(g,n,null),i(n,r),H(m,n,null),i(n,o),H(y,n,null),i(n,c),H(b,n,null),i(n,l),H($,n,null),i(n,u),H(w,n,null),i(n,f),H(O,n,null),d=!0},p:t,i(t){d||(I(g.$$.fragment,t),I(m.$$.fragment,t),I(y.$$.fragment,t),I(b.$$.fragment,t),I($.$$.fragment,t),I(w.$$.fragment,t),I(O.$$.fragment,t),d=!0)},o(t){U(g.$$.fragment,t),U(m.$$.fragment,t),U(y.$$.fragment,t),U(b.$$.fragment,t),U($.$$.fragment,t),U(w.$$.fragment,t),U(O.$$.fragment,t),d=!1},d(t){t&&a(n),V(g),V(m),V(y),V(b),V($),V(w),V(O)}}}function Qt(t){return x(async()=>{fetch("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json").then(t=>t.json()).then(t=>pt.set(t)).then(()=>fetch("./data/Coronavirus-COVID-19-number-of-cases-in-England.json")).then(t=>t.json()).then(t=>{dt.set(t.Labels),ht.set(t.Summary),gt.set(t.CasesByRegion)}).catch(t=>console.error(t))}),[]}var Xt=new class extends F{constructor(t){super(),z(this,t,Qt,Kt,c,{})}}({target:document.body});return window.app=Xt,Xt}();
