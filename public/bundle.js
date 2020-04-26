var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function c(t,e,n){t.$$.on_destroy.push(s(e,n))}function l(t,e,n=e){return t.set(n),e}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),h=u?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&h(p)}function v(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function $(){return b(" ")}function x(){return b("")}function k(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e){e=""+e,t.data!==e&&(t.data=e)}function O(t,e){(null!=e||t.value)&&(t.value=e)}function E(t,e,n){t.classList[n?"add":"remove"](e)}function P(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const C=new Set;let S,I=0;function A(t,e,n,r,o,i,a,s=0){const c=16.666/r;let l="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*i(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,h=t.ownerDocument;C.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(w("style")).sheet),p=h.__svelte_rules||(h.__svelte_rules={});p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${r}ms linear ${o}ms 1 both`,I+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),I-=o,I||h(()=>{I||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function M(t){S=t}function T(){if(!S)throw new Error("Function called outside component initialization");return S}function N(t){T().$$.on_mount.push(t)}const R=[],D=[],B=[],q=[],F=Promise.resolve();let G=!1;function U(t){B.push(t)}let V=!1;const H=new Set;function Y(){if(!V){V=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];M(e),Z(e.$$)}for(R.length=0;D.length;)D.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];H.has(e)||(H.add(e),e())}B.length=0}while(R.length);for(;q.length;)q.pop()();G=!1,V=!1,H.clear()}}function Z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}let W;function J(t,e,n){t.dispatchEvent(P(`${e?"intro":"outro"}${n}`))}const K=new Set;let Q;function X(){Q={r:0,c:[],p:Q}}function tt(){Q.r||o(Q.c),Q=Q.p}function et(t,e){t&&t.i&&(K.delete(t),t.i(e))}function nt(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const rt={duration:0};function ot(n,r,a,s){let c=r(n,a),l=s?0:1,u=null,v=null,m=null;function g(){m&&z(n,m)}function y(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(r){const{delay:i=0,duration:a=300,easing:s=e,tick:w=t,css:b}=c||rt,$={start:f()+i,b:r};r||($.group=Q,Q.r+=1),u?v=$:(b&&(g(),m=A(n,l,r,a,i,s,b)),r&&w(0,1),u=y($,a),U(()=>J(n,r,"start")),function(t){let e;0===d.size&&h(p),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(v&&t>v.start&&(u=y(v,a),v=null,J(n,u.b,"start"),b&&(g(),m=A(n,l,u.b,u.duration,0,s,c.css))),u)if(t>=u.end)w(l=u.b,1-l),J(n,u.b,"end"),v||(u.b?g():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*s(e/u.duration),w(l,1-l)}return!(!u&&!v)}))}return{run(t){i(c)?(W||(W=Promise.resolve(),W.then(()=>{W=null})),W).then(()=>{c=c(),w(t)}):w(t)},end(){g(),u=v=null}}}function it(t,e){nt(t,1,1,()=>{e.delete(t.key)})}function at(t){t&&t.c()}function st(t,e,r){const{fragment:a,on_mount:s,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=s.map(n).filter(i);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function ct(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(R.push(t),G||(G=!0,F.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,i,a,s,c,l=[-1]){const u=S;M(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=i?i(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&lt(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(g)}else h.fragment&&h.fragment.c();n.intro&&et(e.$$.fragment),st(e,n.target,n.anchor),Y()}M(u)}class ft{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var ht=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var e=function(t){var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof u?e:u,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function u(){}function f(){}function h(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(k([])));v&&v!==e&&n.call(v,o)&&(d=v);var m=h.prototype=u.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,s){var l=c(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=m.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new y(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));var dt=function(t){if(Array.isArray(t))return t};var pt=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}};var vt=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var mt=function(t,e){return dt(t)||pt(t,e)||vt()};function gt(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var yt=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){gt(i,r,o,a,s,"next",t)}function s(t){gt(i,r,o,a,s,"throw",t)}a(void 0)}))}};var wt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};const bt=[];function $t(e,n=t){let r;const o=[];function i(t){if(a(e,t)&&(e=t,r)){const t=!bt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),bt.push(n,e)}if(t){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,s=t){const c=[a,s];return o.push(c),1===o.length&&(r=n(i)||t),a(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function xt(e,n,r){const a=!Array.isArray(e),c=a?[e]:e,l=n.length<2;return{subscribe:$t(r,e=>{let r=!1;const u=[];let f=0,h=t;const d=()=>{if(f)return;h();const r=n(a?u[0]:u,e);l?e(r):h=i(r)?r:t},p=c.map((t,e)=>s(t,t=>{u[e]=t,f&=~(1<<e),r&&d()},()=>{f|=1<<e}));return r=!0,d(),function(){o(p),h()}}).subscribe}}var kt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function _t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var jt=function(t,e,n){return e&&_t(t.prototype,e),n&&_t(t,n),t};function Ot(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return Et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Et(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function Et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Lt=["region-unknown","region-zero","region-one","region-two","region-three","region-four","region-five"],Pt=Lt.length-5;var Ct=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];kt(this,t),this.name=e,this.raw=n,this.perPop=r}return jt(t,[{key:"valueAt",value:function(t){return void 0!==t&&t>=0&&t<this.raw.length?{name:this.name,raw:this.raw[t],perPop:this.perPop[t]}:{name:this.name,raw:null,perPop:null}}}]),t}(),St=function(){function t(){kt(this,t),this.table={}}return jt(t,[{key:"update",value:function(t,e,n,r){var o,i=e.reduce((function(t,e){return t+r[e].Pop}),0),a=n.reduce((function(t,e){return t.push(e/(i/1e4)),t}),[]),s=new Ct(t,n,a),c=Ot(e);try{for(c.s();!(o=c.n()).done;){var l=o.value;this.table[l]=s}}catch(t){c.e(t)}finally{c.f()}return s}},{key:"data",value:function(t,e){return t in this.table?this.table[t].valueAt(e):(new Ct).valueAt()}}]),t}(),It=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;kt(this,t),this.value=e}return jt(t,[{key:"update",value:function(t){this.value=t.reduce((function(t,e){return e>t?e:t}),this.value)}},{key:"getIntervals",value:function(){return new zt(this.value)}}]),t}(),At=[Lt,5,function(t,e){if(null==t||null==t)return 0;if(0==t)return 1;var n=Math.floor(t/e);return Pt+Math.min(4,n)},function(t,e){if(0==t)return{unknown:!0};if(1==t)return{zero:!0};var n=(t-1)*e;if(t==Pt)return{to:n};var r=(t-Pt)*e;return t-1==5?{from:r}:{from:r,to:n}}],zt=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:At,r=mt(n,4),o=r[0],i=r[1],a=r[2],s=r[3];kt(this,t),this.styles=o,this.getInterval=a,this.getDescription=s,this.size=Math.round(e/i/i)*i;var c=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)-1);c>1&&(this.size=Math.round(this.size/c)*c)}return jt(t,[{key:"getRangeByIndex",value:function(t){return{values:this.getDescription(t,this.size),style:this.styles[t]}}},{key:"getRange",value:function(t){var e=this.getInterval(t,this.size);return this.getRangeByIndex(e)}},{key:"getStyle",value:function(t){var e=this.getInterval(t,this.size);return this.styles[e]}},{key:Symbol.iterator,value:ht.mark((function t(){var e;return ht.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.size>0)){t.next=8;break}e=0;case 2:if(!(e<this.styles.length)){t.next=8;break}return t.next=5,this.getRangeByIndex(e);case 5:e++,t.next=2;break;case 8:case"end":return t.stop()}}),t,this)}))}]),t}();function Mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Mt(Object(n),!0).forEach((function(e){wt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Nt=$t(),Rt=$t({}),Dt=$t([]),Bt=$t({}),qt=$t({}),Ft=$t(),Gt=$t(),Ut=$t();Dt.subscribe((function(t){t&&t.length>0&&Ft.set(t[t.length-1])}));var Vt=xt([Dt,Ft],(function(t){var e=mt(t,2),n=e[0],r=e[1];return n.indexOf(r)})),Ht=$t("perPop"),Yt=$t(),Zt=$t(),Wt=xt([Ht,Zt],(function(t){var e=mt(t,2),n=e[0],r=e[1];return r&&n in r?r[n].getIntervals():new zt(0)})),Jt=xt([Ht,Yt,Zt],(function(t){var e=mt(t,3),n=e[0],r=e[1],o=e[2];return o&&n in o&&r&&Object.keys(r.table).length>0?function(t,e,n){var r=n[t].getIntervals();return function(n,o){var i=e.data(n,o);return i&&t in i?Tt({},i,{style:r.getStyle(i[t])}):Kt}}(n,r,o):Qt})),Kt=Tt({},(new Ct).valueAt(),{style:null});function Qt(){return Kt}function Xt(){return te.apply(this,arguments)}function te(){return(te=yt(ht.mark((function t(){var e,n,r;return ht.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=fetch("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json").then((function(t){return t.json()})).then((function(t){return console.log("Boundaries loaded")||t})),n=fetch("./data/Population-mid-2018.json").then((function(t){return t.json()})).then((function(t){return console.log("Population loaded")||t})),r=fetch("./data/Coronavirus-COVID-19-number-of-cases-in-England.json").then((function(t){return t.json()})).then((function(t){return console.log("Cases loaded")||t})),t.abrupt("return",Promise.all([e,n,r]).then(ee).then(ne).catch((function(t){return console.error(t)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ee(t){for(var e=mt(t,3),n=e[0],r=e[1],o=e[2],i=new St,a={raw:new It,perPop:new It},s=0,c=Object.entries(o.CasesByRegion);s<c.length;s++){var l=mt(c[s],2),u=l[0],f=l[1],h=f.Codes,d=f.Cases,p=i.update(u,h,d,r);a.raw.update(p.raw),a.perPop.update(p.perPop)}return[n,r,o,i,a]}function ne(t){var e=mt(t,5),n=e[0],r=e[1],o=e[2],i=e[3],a=e[4];Dt.set(o.Labels),Bt.set(o.Summary),qt.set(o.CasesByRegion),Rt.set(r),Nt.set(n),Yt.set(i),Zt.set(a)}function re(e){let n;return{c(){n=w("header"),n.innerHTML='<h1 class="svelte-r1hr4i">Interactive map of Coronavirus (COVID-19) cases (cumulative, lab-confirmed) in England</h1>',_(n,"class","svelte-r1hr4i")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class oe extends ft{constructor(t){super(),ut(this,t,null,re,a,{})}}function ie(t,e,n){const r=t.slice();return r[3]=e[n].values,r[4]=e[n].style,r}function ae(t){let e;return{c(){e=b("Total cases in region")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function se(t){let e;return{c(){e=b("Cases per 10,000 people")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function ce(t){let e,n,r,o,i,a,s,c,l,u,f=t[3].from+"",h=t[3].to-1+"";return{c(){e=w("div"),n=w("div"),r=w("div"),i=$(),a=w("div"),s=b(f),c=b("-"),l=b(h),u=$(),_(n,"class",o="colour "+t[4]+" svelte-jzwllk"),_(a,"class","label"),_(e,"class","keyitem")},m(t,o){m(t,e,o),v(e,n),v(n,r),v(e,i),v(e,a),v(a,s),v(a,c),v(a,l),v(e,u)},p(t,e){2&e&&o!==(o="colour "+t[4]+" svelte-jzwllk")&&_(n,"class",o),2&e&&f!==(f=t[3].from+"")&&j(s,f),2&e&&h!==(h=t[3].to-1+"")&&j(l,h)},d(t){t&&g(e)}}}function le(t){let e,n,r,o,i,a,s,c,l,u=t[3].from+"";return{c(){e=w("div"),n=w("div"),r=w("div"),i=$(),a=w("div"),s=b(u),c=b(" or more"),l=$(),_(n,"class",o="colour "+t[4]+" svelte-jzwllk"),_(a,"class","label"),_(e,"class","keyitem")},m(t,o){m(t,e,o),v(e,n),v(n,r),v(e,i),v(e,a),v(a,s),v(a,c),v(e,l)},p(t,e){2&e&&o!==(o="colour "+t[4]+" svelte-jzwllk")&&_(n,"class",o),2&e&&u!==(u=t[3].from+"")&&j(s,u)},d(t){t&&g(e)}}}function ue(t){let e,n,r,o,i,a,s,c,l,u=t[3].to+"";return{c(){e=w("div"),n=w("div"),r=w("div"),i=$(),a=w("div"),s=b("Less than "),c=b(u),l=$(),_(n,"class",o="colour "+t[4]+" svelte-jzwllk"),_(a,"class","label"),_(e,"class","keyitem")},m(t,o){m(t,e,o),v(e,n),v(n,r),v(e,i),v(e,a),v(a,s),v(a,c),v(e,l)},p(t,e){2&e&&o!==(o="colour "+t[4]+" svelte-jzwllk")&&_(n,"class",o),2&e&&u!==(u=t[3].to+"")&&j(c,u)},d(t){t&&g(e)}}}function fe(t){let e,n,r,o,i,a,s;return{c(){e=w("div"),n=w("div"),r=w("div"),i=$(),a=w("div"),a.textContent="Zero",s=$(),_(n,"class",o="colour "+t[4]+" svelte-jzwllk"),_(a,"class","label"),_(e,"class","keyitem")},m(t,o){m(t,e,o),v(e,n),v(n,r),v(e,i),v(e,a),v(e,s)},p(t,e){2&e&&o!==(o="colour "+t[4]+" svelte-jzwllk")&&_(n,"class",o)},d(t){t&&g(e)}}}function he(t){let e,n,r,o,i,a,s;return{c(){e=w("div"),n=w("div"),r=w("div"),i=$(),a=w("div"),a.textContent="Unknown",s=$(),_(n,"class",o="colour "+t[4]+" svelte-jzwllk"),_(a,"class","label"),_(e,"class","keyitem")},m(t,o){m(t,e,o),v(e,n),v(n,r),v(e,i),v(e,a),v(e,s)},p(t,e){2&e&&o!==(o="colour "+t[4]+" svelte-jzwllk")&&_(n,"class",o)},d(t){t&&g(e)}}}function de(t){let e;function n(t,e){return t[3].unknown?he:t[3].zero?fe:t[3].to&&!t[3].from?ue:!t[3].to&&t[3].from?le:ce}let r=n(t),o=r(t);return{c(){o.c(),e=x()},m(t,n){o.m(t,n),m(t,e,n)},p(t,i){r===(r=n(t))&&o?o.p(t,i):(o.d(1),o=r(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){o.d(t),t&&g(e)}}}function pe(e){let n,r,o,i;function a(t,e){return"perPop"==t[0]?se:ae}let s=a(e),c=s(e),l=[...e[1]],u=[];for(let t=0;t<l.length;t+=1)u[t]=de(ie(e,l,t));return{c(){n=w("div"),c.c(),r=$();for(let t=0;t<u.length;t+=1)u[t].c();o=x(),_(n,"class","title svelte-jzwllk")},m(t,a,s){m(t,n,a),c.m(n,null),m(t,r,a);for(let e=0;e<u.length;e+=1)u[e].m(t,a);m(t,o,a),s&&i(),i=k(n,"click",e[2])},p(t,[e]){if(s!==(s=a(t))&&(c.d(1),c=s(t),c&&(c.c(),c.m(n,null))),2&e){let n;for(l=[...t[1]],n=0;n<l.length;n+=1){const r=ie(t,l,n);u[n]?u[n].p(r,e):(u[n]=de(r),u[n].c(),u[n].m(o.parentNode,o))}for(;n<u.length;n+=1)u[n].d(1);u.length=l.length}},i:t,o:t,d(t){t&&g(n),c.d(),t&&g(r),y(u,t),t&&g(o),i()}}}function ve(t,e,n){let r,o;return c(t,Ht,t=>n(0,r=t)),c(t,Wt,t=>n(1,o=t)),[r,o,function(){l(Ht,r="raw"==r?"perPop":"raw")}]}class me extends ft{constructor(t){super(),ut(this,t,ve,pe,a,{})}}var ge,ye,we={lat:52.914639,lon:-1.47189};function be(t){var e=t.feature.properties.mergedAuthority||t.feature.properties.ctyua19nm,n=t.feature.properties.casesCount,r=t.feature.properties.casesCountPerPop;return null==n?"\n\t\t<span>".concat(e,"</span>\n\t\t<br/>No data\n\t\t"):"\n\t\t<span>".concat(e,"</span>\n\t\t<br/>").concat(n," case").concat(1==n?"":"s","\n\t\t<br/>").concat(+r.toFixed(2)," per 10,000 people\n\t\t")}function $e(t,e){var n=be(e);e.bindPopup(n,{className:"region-popup",closeOnClick:!1}).addTo(ge),e.openPopup(t)}function xe(e){let n,r;return{c(){n=w("section"),r=w("div"),_(r,"class","svelte-n9bg7i"),_(n,"class","svelte-n9bg7i")},m(t,o){m(t,n,o),v(n,r),e[5](r)},p:t,i:t,o:t,d(t){t&&g(n),e[5](null)}}}function ke(t,e,n){let r,o,i,a,s;return c(t,Nt,t=>n(1,r=t)),c(t,Jt,t=>n(2,o=t)),c(t,Vt,t=>n(3,i=t)),c(t,Gt,t=>n(4,a=t)),N(()=>function(t){if(null==ge){(ge=L.map(t,{center:we,zoom:7})).getPane("overlayPane").classList.add("blend-overlay-pane"),L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:20,ext:"png"}).addTo(ge);var e=L.control({position:"topright"});e.onAdd=function(){return L.DomUtil.create("div","info legend")},e.addTo(ge),new me({target:e._container})}}(s)),t.$$.update=()=>{2&t.$$.dirty&&function(t){null!=ge&&null!=t&&(ye&&ye.remove(),(ye=L.geoJSON(t,{style:function(t){return{fillOpacity:.5,weight:0}},onEachFeature:function(t,e){e.on({click:function(t){return $e(t.latlng,t.sourceTarget)}})}})).addTo(ge))}(r),12&t.$$.dirty&&function(t,e){if(null!=ye&&-1!=e)for(var n=0,r=Object.values(ye._layers);n<r.length;n++){var o=r[n],i=t(o.feature.properties.ctyua19cd,e);if(o._path.setAttribute("fill-opacity",1),o._path.setAttribute("class","leaflet-interactive "+i.style),o.feature.properties.casesCount=i.raw,o.feature.properties.casesCountPerPop=i.perPop,i&&o.feature.properties.ctyua19nm!=i.name&&(o.feature.properties.mergedAuthority=i.name),o.isPopupOpen()){var a=o.getPopup(),s=be(o);a.setContent(s)}}}(o,i),16&t.$$.dirty&&function(t){if(null!=ge)if(t&&t.length>0){var e=Object.values(ye._layers).find((function(e){return t==e.feature.properties.ctyua19cd}));if(e)$e(L.latLng(e.feature.properties.lat,e.feature.properties.long),e),ge.setView(e.getCenter(),9,{animate:!0}),window.scrollTo(0,0)}else ge.closePopup(),ge.setView(we,7,{animate:!0}),window.scrollTo(0,0)}(a)},[s,r,o,i,a,function(t){D[t?"unshift":"push"](()=>{n(0,s=t)})}]}class _e extends ft{constructor(t){super(),ut(this,t,ke,xe,a,{})}}function je(e){let n,r,o,i,a,s,c;return{c(){n=w("section"),r=w("h2"),o=b(e[0]),i=$(),a=w("input"),_(r,"class","svelte-m3mxtw"),_(a,"type","range"),_(a,"min","0"),_(a,"max",s=e[1].length-1),a.value=e[2],_(a,"class","svelte-m3mxtw"),_(n,"class","svelte-m3mxtw")},m(t,s,l){m(t,n,s),v(n,r),v(r,o),v(n,i),v(n,a),l&&c(),c=k(a,"input",e[3])},p(t,[e]){1&e&&j(o,t[0]),2&e&&s!==(s=t[1].length-1)&&_(a,"max",s),4&e&&(a.value=t[2])},i:t,o:t,d(t){t&&g(n),c()}}}function Oe(t,e,n){let r,o,i;c(t,Ft,t=>n(4,r=t)),c(t,Dt,t=>n(1,o=t)),c(t,Vt,t=>n(2,i=t));const a=new Intl.DateTimeFormat("en-GB",{weekday:"short",year:"numeric",month:"long",day:"numeric"});let s="Date";return t.$$.update=()=>{16&t.$$.dirty&&r&&n(0,s=a.format(new Date(r)))},[s,o,i,t=>{Ft.set(o[t.target.value])}]}class Ee extends ft{constructor(t){super(),ut(this,t,Oe,je,a,{})}}function Le(e){let n,r,i,a,s,c,l,u,f;return{c(){n=w("section"),r=w("h2"),r.textContent="Search for a region",i=$(),a=w("div"),s=w("input"),c=$(),l=w("div"),u=w("button"),u.innerHTML='<img src="img/close.svg" alt="clear" class="svelte-qj2m8d">',_(r,"class","svelte-qj2m8d"),_(s,"class","svelte-qj2m8d"),_(u,"class","svelte-qj2m8d"),_(l,"class","svelte-qj2m8d"),_(a,"class","inputgroup svelte-qj2m8d"),_(n,"class","svelte-qj2m8d")},m(t,h,d){m(t,n,h),v(n,r),v(n,i),v(n,a),v(a,s),O(s,e[0]),v(a,c),v(a,l),v(l,u),d&&o(f),f=[k(s,"input",e[2]),k(u,"click",e[1])]},p(t,[e]){1&e&&s.value!==t[0]&&O(s,t[0])},i:t,o:t,d(t){t&&g(n),o(f)}}}function Pe(t,e,n){let r;c(t,Ut,t=>n(0,r=t));return[r,()=>Ut.set(""),function(){r=this.value,Ut.set(r)}]}class Ce extends ft{constructor(t){super(),ut(this,t,Pe,Le,a,{})}}function Se(e){let n,r,o;const i=new Ee({}),a=new Ce({});return{c(){n=w("section"),at(i.$$.fragment),r=$(),at(a.$$.fragment),_(n,"class","svelte-1dtbawg")},m(t,e){m(t,n,e),st(i,n,null),v(n,r),st(a,n,null),o=!0},p:t,i(t){o||(et(i.$$.fragment,t),et(a.$$.fragment,t),o=!0)},o(t){nt(i.$$.fragment,t),nt(a.$$.fragment,t),o=!1},d(t){t&&g(n),ct(i),ct(a)}}}class Ie extends ft{constructor(t){super(),ut(this,t,null,Se,a,{})}}function Ae(t,{delay:n=0,duration:r=400,easing:o=e}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>`opacity: ${t*i}`}}function ze(t){let e,n,r,o,i,a,s,c,l,u,f,h;return{c(){e=w("div"),n=w("div"),r=b(t[0]),o=$(),i=w("span"),a=b(t[2]),s=$(),c=w("span"),l=b(t[3]),_(n,"class","name svelte-4wr1yv"),_(i,"class","count svelte-4wr1yv"),_(c,"class","change svelte-4wr1yv"),E(c,"increase",t[4]),E(c,"decrease",t[5]),E(c,"same",t[6]),_(e,"class","item svelte-4wr1yv"),E(e,"hoverable",t[1]),E(e,"selected",t[7])},m(u,d,p){m(u,e,d),v(e,n),v(n,r),v(e,o),v(e,i),v(i,a),v(e,s),v(e,c),v(c,l),f=!0,p&&h(),h=k(e,"click",t[12])},p(t,[n]){(!f||1&n)&&j(r,t[0]),(!f||4&n)&&j(a,t[2]),(!f||8&n)&&j(l,t[3]),16&n&&E(c,"increase",t[4]),32&n&&E(c,"decrease",t[5]),64&n&&E(c,"same",t[6]),2&n&&E(e,"hoverable",t[1]),128&n&&E(e,"selected",t[7])},i(t){f||(U(()=>{u||(u=ot(e,Ae,{},!0)),u.run(1)}),f=!0)},o(t){u||(u=ot(e,Ae,{},!1)),u.run(0),f=!1},d(t){t&&g(e),t&&u&&u.end(),h()}}}function Me(t,e,n){let{name:r}=e,{cases:o}=e,{caseIndex:i}=e,{code:a=null}=e,{focusRegion:s=null}=e;const c=function(){const t=T();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=P(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}();let l,u,f,h,d,p;return t.$set=t=>{"name"in t&&n(0,r=t.name),"cases"in t&&n(9,o=t.cases),"caseIndex"in t&&n(10,i=t.caseIndex),"code"in t&&n(1,a=t.code),"focusRegion"in t&&n(11,s=t.focusRegion)},t.$$.update=()=>{3598&t.$$.dirty&&(n(2,l=o[i]),n(3,u=0==i?l:l-o[Math.max(i-1,0)]),n(4,f=u>0),n(5,h=u<0),n(6,d=0==u),n(7,p=a&&a==s))},[r,a,l,u,f,h,d,p,c,o,i,s,()=>c("click",a)]}class Te extends ft{constructor(t){super(),ut(this,t,Me,ze,a,{name:0,cases:9,caseIndex:10,code:1,focusRegion:11})}}function Ne(t,e,n){const r=t.slice();return r[2]=e[n][0],r[3]=e[n][1],r}function Re(t){let e;const n=new Te({props:{name:t[2],cases:t[3],caseIndex:t[1]}});return{c(){at(n.$$.fragment)},m(t,r){st(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.name=t[2]),1&e&&(r.cases=t[3]),2&e&&(r.caseIndex=t[1]),n.$set(r)},i(t){e||(et(n.$$.fragment,t),e=!0)},o(t){nt(n.$$.fragment,t),e=!1},d(t){ct(n,t)}}}function De(t){let e,n,r,o,i,a=Object.entries(t[0]),s=[];for(let e=0;e<a.length;e+=1)s[e]=Re(Ne(t,a,e));const c=t=>nt(s[t],1,1,()=>{s[t]=null});return{c(){e=w("section"),n=w("h2"),n.textContent="Summary",r=$(),o=w("div");for(let t=0;t<s.length;t+=1)s[t].c();_(n,"class","svelte-cgyc1b"),_(o,"class","container svelte-cgyc1b"),_(e,"class","svelte-cgyc1b")},m(t,a){m(t,e,a),v(e,n),v(e,r),v(e,o);for(let t=0;t<s.length;t+=1)s[t].m(o,null);i=!0},p(t,[e]){if(3&e){let n;for(a=Object.entries(t[0]),n=0;n<a.length;n+=1){const r=Ne(t,a,n);s[n]?(s[n].p(r,e),et(s[n],1)):(s[n]=Re(r),s[n].c(),et(s[n],1),s[n].m(o,null))}for(X(),n=a.length;n<s.length;n+=1)c(n);tt()}},i(t){if(!i){for(let t=0;t<a.length;t+=1)et(s[t]);i=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)nt(s[t]);i=!1},d(t){t&&g(e),y(s,t)}}}function Be(t,e,n){let r,o;return c(t,Bt,t=>n(0,r=t)),c(t,Vt,t=>n(1,o=t)),[r,o]}class qe extends ft{constructor(t){super(),ut(this,t,Be,De,a,{})}}function Fe(e){let n,r;return{c(){n=w("h2"),r=b(e[0]),_(n,"class","svelte-cofq7b")},m(t,e){m(t,n,e),v(n,r)},p(t,[e]){1&e&&j(r,t[0])},i:t,o:t,d(t){t&&g(n)}}}function Ge(t,e,n){let{prefix:r}=e;return t.$set=t=>{"prefix"in t&&n(0,r=t.prefix)},[r]}class Ue extends ft{constructor(t){super(),ut(this,t,Ge,Fe,a,{prefix:0})}}function Ve(t,e,n){const r=t.slice();return r[12]=e[n].name,r[13]=e[n].item,r}function He(t,e,n){const r=t.slice();return r[8]=e[n][0],r[9]=e[n][1],r}function Ye(t,e){let n,r;const o=new Te({props:{name:e[12],cases:e[13].Cases,caseIndex:e[2],code:e[13].Codes[0],focusRegion:e[1]}});return o.$on("click",e[3]),{key:t,first:null,c(){n=x(),at(o.$$.fragment),this.first=n},m(t,e){m(t,n,e),st(o,t,e),r=!0},p(t,e){const n={};1&e&&(n.name=t[12]),1&e&&(n.cases=t[13].Cases),4&e&&(n.caseIndex=t[2]),1&e&&(n.code=t[13].Codes[0]),2&e&&(n.focusRegion=t[1]),o.$set(n)},i(t){r||(et(o.$$.fragment,t),r=!0)},o(t){nt(o.$$.fragment,t),r=!1},d(t){t&&g(n),ct(o,t)}}}function Ze(t){let e,n,r,o=[],i=new Map;const a=new Ue({props:{prefix:t[8]}});let s=t[9];const c=t=>t[12];for(let e=0;e<s.length;e+=1){let n=Ve(t,s,e),r=c(n);i.set(r,o[e]=Ye(r,n))}return{c(){at(a.$$.fragment),e=$(),n=w("div");for(let t=0;t<o.length;t+=1)o[t].c();_(n,"class","container svelte-ox950")},m(t,i){st(a,t,i),m(t,e,i),m(t,n,i);for(let t=0;t<o.length;t+=1)o[t].m(n,null);r=!0},p(t,e){const r={};if(1&e&&(r.prefix=t[8]),a.$set(r),15&e){const r=t[9];X(),o=function(t,e,n,r,o,i,a,s,c,l,u,f){let h=t.length,d=i.length,p=h;const v={};for(;p--;)v[t[p].key]=p;const m=[],g=new Map,y=new Map;for(p=d;p--;){const t=f(o,i,p),s=n(t);let c=a.get(s);c?r&&c.p(t,e):(c=l(s,t),c.c()),g.set(s,m[p]=c),s in v&&y.set(s,Math.abs(p-v[s]))}const w=new Set,b=new Set;function $(t){et(t,1),t.m(s,u,a.has(t.key)),a.set(t.key,t),u=t.first,d--}for(;h&&d;){const e=m[d-1],n=t[h-1],r=e.key,o=n.key;e===n?(u=e.first,h--,d--):g.has(o)?!a.has(r)||w.has(r)?$(e):b.has(o)?h--:y.get(r)>y.get(o)?(b.add(r),$(e)):(w.add(o),h--):(c(n,a),h--)}for(;h--;){const e=t[h];g.has(e.key)||c(e,a)}for(;d;)$(m[d-1]);return m}(o,e,c,1,t,r,i,n,it,Ye,null,Ve),tt()}},i(t){if(!r){et(a.$$.fragment,t);for(let t=0;t<s.length;t+=1)et(o[t]);r=!0}},o(t){nt(a.$$.fragment,t);for(let t=0;t<o.length;t+=1)nt(o[t]);r=!1},d(t){ct(a,t),t&&g(e),t&&g(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}function We(t){let e,n,r;const o=new Ue({props:{prefix:"-"}});return{c(){at(o.$$.fragment),e=$(),n=w("div"),n.textContent="No regions found",_(n,"class","no-regions svelte-ox950")},m(t,i){st(o,t,i),m(t,e,i),m(t,n,i),r=!0},i(t){r||(et(o.$$.fragment,t),r=!0)},o(t){nt(o.$$.fragment,t),r=!1},d(t){ct(o,t),t&&g(e),t&&g(n)}}}function Je(t){let e,n,r,o=0==Object.keys(t[0]).length,i=Object.entries(t[0]),a=[];for(let e=0;e<i.length;e+=1)a[e]=Ze(He(t,i,e));const s=t=>nt(a[t],1,1,()=>{a[t]=null});let c=o&&We();return{c(){e=w("section");for(let t=0;t<a.length;t+=1)a[t].c();n=$(),c&&c.c(),_(e,"class","svelte-ox950")},m(t,o){m(t,e,o);for(let t=0;t<a.length;t+=1)a[t].m(e,null);v(e,n),c&&c.m(e,null),r=!0},p(t,[r]){if(15&r){let o;for(i=Object.entries(t[0]),o=0;o<i.length;o+=1){const s=He(t,i,o);a[o]?(a[o].p(s,r),et(a[o],1)):(a[o]=Ze(s),a[o].c(),et(a[o],1),a[o].m(e,n))}for(X(),o=i.length;o<a.length;o+=1)s(o);tt()}1&r&&(o=0==Object.keys(t[0]).length),o?c?1&r&&et(c,1):(c=We(),c.c(),et(c,1),c.m(e,null)):c&&(X(),nt(c,1,1,()=>{c=null}),tt())},i(t){if(!r){for(let t=0;t<i.length;t+=1)et(a[t]);et(c),r=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)nt(a[t]);nt(c),r=!1},d(t){t&&g(e),y(a,t),c&&c.d()}}}function Ke(t,e,n){let r,o,i,a;c(t,Gt,t=>n(1,r=t)),c(t,qt,t=>n(4,o=t)),c(t,Ut,t=>n(5,i=t)),c(t,Vt,t=>n(2,a=t));let s=[],l=(t,[e,n])=>{let r=e[0];return r in t?t[r].push({name:e,item:n}):t[r]=[{name:e,item:n}],t};return t.$$.update=()=>{48&t.$$.dirty&&n(0,s=Object.entries(o).filter(([t,e])=>{return n=i,t.toUpperCase().includes((n||"").toUpperCase());var n}).reduce(l,{}))},[s,r,a,t=>{t.detail==r?Gt.set(null):Gt.set(t.detail)}]}class Qe extends ft{constructor(t){super(),ut(this,t,Ke,Je,a,{})}}function Xe(e){let n;return{c(){n=w("footer"),n.innerHTML='<ul class="svelte-xv4q4t"><li>Source: Office for National Statistics licensed under the Open Government Licence v.3.0</li> \n\t\t<li>Website <a href="https://github.com/Temetra/COVID-19-Interactive-Map-England">available on GitHub</a>, licensed under MIT</li></ul>',_(n,"class","svelte-xv4q4t")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class tn extends ft{constructor(t){super(),ut(this,t,null,Xe,a,{})}}function en(e){let n,r,o,i,a,s,c;const l=new oe({}),u=new _e({}),f=new Ie({}),h=new qe({}),d=new Qe({}),p=new tn({});return{c(){n=w("div"),at(l.$$.fragment),r=$(),at(u.$$.fragment),o=$(),at(f.$$.fragment),i=$(),at(h.$$.fragment),a=$(),at(d.$$.fragment),s=$(),at(p.$$.fragment),_(n,"class","container svelte-dg7yne")},m(t,e){m(t,n,e),st(l,n,null),v(n,r),st(u,n,null),v(n,o),st(f,n,null),v(n,i),st(h,n,null),v(n,a),st(d,n,null),v(n,s),st(p,n,null),c=!0},p:t,i(t){c||(et(l.$$.fragment,t),et(u.$$.fragment,t),et(f.$$.fragment,t),et(h.$$.fragment,t),et(d.$$.fragment,t),et(p.$$.fragment,t),c=!0)},o(t){nt(l.$$.fragment,t),nt(u.$$.fragment,t),nt(f.$$.fragment,t),nt(h.$$.fragment,t),nt(d.$$.fragment,t),nt(p.$$.fragment,t),c=!1},d(t){t&&g(n),ct(l),ct(u),ct(f),ct(h),ct(d),ct(p)}}}function nn(t){return N(Xt),[]}var rn=new class extends ft{constructor(t){super(),ut(this,t,nn,en,a,{})}}({target:document.body});return window.app=rn,rn}();
