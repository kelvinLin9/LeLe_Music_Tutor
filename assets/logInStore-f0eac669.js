import{a3 as ra,a4 as ia,a5 as pi,a6 as sa,a7 as oa,a8 as aa,a9 as ua,aa as ve,ab as la,ac as ha,ad as ca,ae as Mt,Z as ns,$ as St,af as Qn}from"./index-4c4afcbf.js";import{d as rs,g as fa,s as da,a as pa,c as ga,G as ma,b as Xn,F as _a,e as ya,o as Ea,f as va}from"./dataStore-717fd150.js";import{S as Nt}from"./sweetalert2-7ce81659.js";var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Vr=Vr||{},y=Ta||self;function In(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Oe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ia(e){return Object.prototype.hasOwnProperty.call(e,Yn)&&e[Yn]||(e[Yn]=++Aa)}var Yn="closure_uid_"+(1e9*Math.random()>>>0),Aa=0;function wa(e,t,n){return e.call.apply(e.bind,arguments)}function Ra(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=wa:X=Ra,X.apply(null,arguments)}function Ke(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function j(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function wt(){this.s=this.s,this.o=this.o}var Pa=0;wt.prototype.s=!1;wt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Pa!=0)&&Ia(this)};wt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const is=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Sr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function gi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(In(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Va=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",()=>{},t),y.removeEventListener("test",()=>{},t)}catch{}return e}();function Te(e){return/^[\s\xa0]*$/.test(e)}function An(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function ht(e){return An().indexOf(e)!=-1}function Cr(e){return Cr[" "](e),e}Cr[" "]=function(){};function Sa(e,t){var n=vu;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ca=ht("Opera"),Wt=ht("Trident")||ht("MSIE"),ss=ht("Edge"),ur=ss||Wt,os=ht("Gecko")&&!(An().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge"))&&!(ht("Trident")||ht("MSIE"))&&!ht("Edge"),Da=An().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge");function as(){var e=y.document;return e?e.documentMode:void 0}var lr;t:{var Jn="",Zn=function(){var e=An();if(os)return/rv:([^\);]+)(\)|;)/.exec(e);if(ss)return/Edge\/([\d\.]+)/.exec(e);if(Wt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Da)return/WebKit\/(\S+)/.exec(e);if(Ca)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Zn&&(Jn=Zn?Zn[1]:""),Wt){var tr=as();if(tr!=null&&tr>parseFloat(Jn)){lr=String(tr);break t}}lr=Jn}var hr;if(y.document&&Wt){var mi=as();hr=mi||parseInt(lr,10)||void 0}else hr=void 0;var ka=hr;function Ie(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(os){t:{try{Cr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Na[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ie.$.h.call(this)}}j(Ie,Y);var Na={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),xa=0;function Oa(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++xa,this.fa=this.ia=!1}function wn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Dr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Ma(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function us(e){const t={};for(const n in e)t[n]=e[n];return t}const _i="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ls(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<_i.length;s++)n=_i[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Rn(e){this.src=e,this.g={},this.h=0}Rn.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=fr(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Oa(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function cr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=is(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(wn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fr(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var kr="closure_lm_"+(1e6*Math.random()|0),er={};function hs(e,t,n,r,i){if(r&&r.once)return fs(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)hs(e,t[s],n,r,i);return null}return n=Or(n),e&&e[Me]?e.O(t,n,Oe(r)?!!r.capture:!!r,i):cs(e,t,n,!1,r,i)}function cs(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Oe(i)?!!i.capture:!!i,a=xr(e);if(a||(e[kr]=a=new Rn(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Fa(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Va||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ps(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fa(){function e(n){return t.call(e.src,e.listener,n)}const t=La;return e}function fs(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fs(e,t[s],n,r,i);return null}return n=Or(n),e&&e[Me]?e.P(t,n,Oe(r)?!!r.capture:!!r,i):cs(e,t,n,!0,r,i)}function ds(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ds(e,t[s],n,r,i);else r=Oe(r)?!!r.capture:!!r,n=Or(n),e&&e[Me]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=fr(s,n,r,i),-1<n&&(wn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=xr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fr(t,n,r,i)),(n=-1<e?t[e]:null)&&Nr(n))}function Nr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Me])cr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ps(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=xr(t))?(cr(n,e),n.h==0&&(n.src=null,t[kr]=null)):wn(e)}}}function ps(e){return e in er?er[e]:er[e]="on"+e}function La(e,t){if(e.fa)e=!0;else{t=new Ie(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Nr(e),e=n.call(r,t)}return e}function xr(e){return e=e[kr],e instanceof Rn?e:null}var nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Or(e){return typeof e=="function"?e:(e[nr]||(e[nr]=function(t){return e.handleEvent(t)}),e[nr])}function U(){wt.call(this),this.i=new Rn(this),this.S=this,this.J=null}j(U,wt);U.prototype[Me]=!0;U.prototype.removeEventListener=function(e,t,n,r){ds(this,e,t,n,r)};function z(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(r,e),ls(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=He(o,r,!0,t)&&i}if(o=t.g=e,i=He(o,r,!0,t)&&i,i=He(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=He(o,r,!1,t)&&i}U.prototype.N=function(){if(U.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)wn(n[r]);delete e.g[t],e.h--}}this.J=null};U.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};U.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function He(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&cr(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mr=y.JSON.stringify;class ba{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ua(){var e=Fr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ba{constructor(){this.h=this.g=null}add(t,n){const r=gs.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var gs=new ba(()=>new ja,e=>e.reset());class ja{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $a(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function qa(e){y.setTimeout(()=>{throw e},0)}let Ae,we=!1,Fr=new Ba,ms=()=>{const e=y.Promise.resolve(void 0);Ae=()=>{e.then(Ga)}};var Ga=()=>{for(var e;e=Ua();){try{e.h.call(e.g)}catch(n){qa(n)}var t=gs;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}we=!1};function Pn(e,t){U.call(this),this.h=e||1,this.g=t||y,this.j=X(this.qb,this),this.l=Date.now()}j(Pn,U);p=Pn.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),z(this,"tick"),this.ga&&(Lr(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){Pn.$.N.call(this),Lr(this),delete this.g};function br(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function _s(e){e.g=br(()=>{e.g=null,e.i&&(e.i=!1,_s(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class za extends wt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:_s(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(e){wt.call(this),this.h=e,this.g={}}j(Re,wt);var yi=[];function ys(e,t,n,r){Array.isArray(n)||(n&&(yi[0]=n.toString()),n=yi);for(var i=0;i<n.length;i++){var s=hs(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Es(e){Dr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Nr(t)},e),e.g={}}Re.prototype.N=function(){Re.$.N.call(this),Es(this)};Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vn(){this.g=!0}Vn.prototype.Ea=function(){this.g=!1};function Ka(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var h=l[0];l=l[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Ha(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function zt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qa(e,n)+(r?" "+r:"")})}function Wa(e,t){e.info(function(){return"TIMEOUT: "+t})}Vn.prototype.info=function(){};function Qa(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mr(n)}catch{return t}}var Ut={},Ei=null;function Sn(){return Ei=Ei||new U}Ut.Ta="serverreachability";function vs(e){Y.call(this,Ut.Ta,e)}j(vs,Y);function Pe(e){const t=Sn();z(t,new vs(t))}Ut.STAT_EVENT="statevent";function Ts(e,t){Y.call(this,Ut.STAT_EVENT,e),this.stat=t}j(Ts,Y);function tt(e){const t=Sn();z(t,new Ts(t,e))}Ut.Ua="timingevent";function Is(e,t){Y.call(this,Ut.Ua,e),this.size=t}j(Is,Y);function Fe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var Cn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},As={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ur(){}Ur.prototype.h=null;function vi(e){return e.h||(e.h=e.i())}function ws(){}var Le={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Br(){Y.call(this,"d")}j(Br,Y);function jr(){Y.call(this,"c")}j(jr,Y);var dr;function Dn(){}j(Dn,Ur);Dn.prototype.g=function(){return new XMLHttpRequest};Dn.prototype.i=function(){return{}};dr=new Dn;function be(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Re(this),this.P=Xa,e=ur?125:void 0,this.V=new Pn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Rs}function Rs(){this.i=null,this.g="",this.h=!1}var Xa=45e3,pr={},on={};p=be.prototype;p.setTimeout=function(e){this.P=e};function gr(e,t,n){e.L=1,e.v=Nn(yt(t)),e.s=n,e.S=!0,Ps(e,null)}function Ps(e,t){e.G=Date.now(),Ue(e),e.A=yt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Os(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Rs,e.g=eo(e.l,n?t:null,!e.s),0<e.O&&(e.M=new za(X(e.Pa,e,e.g),e.O)),ys(e.U,e.g,"readystatechange",e.nb),t=e.I?us(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Pe(),Ka(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;const t=this.M;t&&ct(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{const h=ct(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||ur||this.g&&(this.h.h||this.g.ja()||wi(this.g)))){this.J||h!=4||t==7||(t==8||0>=c?Pe(3):Pe(2)),kn(this);var n=this.g.da();this.ca=n;e:if(Vs(this)){var r=wi(this.g);e="";var i=r.length,s=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),pe(this);var o="";break e}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ha(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Te(a)){var l=a;break e}}l=null}if(n=l)zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mr(this,n);else{this.i=!1,this.o=3,tt(12),Ct(this),pe(this);break t}}this.S?(Ss(this,h,o),ur&&this.i&&h==3&&(ys(this.U,this.V,"tick",this.mb),this.V.start())):(zt(this.j,this.m,o,null),mr(this,o)),h==4&&Ct(this),this.i&&!this.J&&(h==4?Ys(this.l,this):(this.i=!1,Ue(this)))}else _u(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Ct(this),pe(this)}}}catch{}finally{}};function Vs(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Ss(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=Ya(e,n),i==on){t==4&&(e.o=4,tt(14),r=!1),zt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==pr){e.o=4,tt(15),zt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else zt(e.j,e.m,i,null),mr(e,i);Vs(e)&&i!=on&&i!=pr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hr(t),t.M=!0,tt(11))):(zt(e.j,e.m,n,"[Invalid Chunked Response]"),Ct(e),pe(e))}p.mb=function(){if(this.g){var e=ct(this.g),t=this.g.ja();this.C<t.length&&(kn(this),Ss(this,e,t),this.i&&e!=4&&Ue(this))}};function Ya(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?on:(n=Number(t.substring(n,r)),isNaN(n)?pr:(r+=1,r+n>t.length?on:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,Ct(this)};function Ue(e){e.Y=Date.now()+e.P,Cs(e,e.P)}function Cs(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Fe(X(e.lb,e),t)}function kn(e){e.B&&(y.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Wa(this.j,this.A),this.L!=2&&(Pe(),tt(17)),Ct(this),this.o=2,pe(this)):Cs(this,this.Y-e)};function pe(e){e.l.H==0||e.J||Ys(e.l,e)}function Ct(e){kn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Lr(e.V),Es(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function mr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||_r(n.i,e))){if(!e.K&&_r(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)ln(n),Mn(n);else break t;Kr(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Fe(X(n.ib,n),6e3));if(1>=Ls(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Dt(n,11)}else if((e.K||n.g==e)&&ln(n),!Te(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const h=l[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=l[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const g=l[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&($r(s,s.h),s.h=null))}if(r.F){const S=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,C(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=to(r,r.J?r.pa:null,r.Y),o.K){bs(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(kn(a),Ue(a)),r.g=o}else Qs(r);0<n.j.length&&Fn(n)}else l[0]!="stop"&&l[0]!="close"||Dt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Dt(n,7):zr(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Pe(4)}catch{}}function Ja(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(In(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Za(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(In(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ds(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(In(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Za(e),r=Ja(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var ks=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof xt){this.h=e.h,an(this,e.j),this.s=e.s,this.g=e.g,un(this,e.m),this.l=e.l;var t=e.i,n=new Ve;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ti(this,n),this.o=e.o}else e&&(t=String(e).match(ks))?(this.h=!1,an(this,t[1]||"",!0),this.s=fe(t[2]||""),this.g=fe(t[3]||"",!0),un(this,t[4]),this.l=fe(t[5]||"",!0),Ti(this,t[6]||"",!0),this.o=fe(t[7]||"")):(this.h=!1,this.i=new Ve(null,this.h))}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(de(t,Ii,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(de(t,Ii,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(de(n,n.charAt(0)=="/"?ru:nu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",de(n,su)),e.join("")};function yt(e){return new xt(e)}function an(e,t,n){e.j=n?fe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function un(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ti(e,t,n){t instanceof Ve?(e.i=t,ou(e.i,e.h)):(n||(t=de(t,iu)),e.i=new Ve(t,e.h))}function C(e,t,n){e.i.set(t,n)}function Nn(e){return C(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function fe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function de(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,eu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function eu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ii=/[#\/\?@]/g,nu=/[#\?:]/g,ru=/[#\?]/g,iu=/[#\?@]/g,su=/#/g;function Ve(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Rt(e){e.g||(e.g=new Map,e.h=0,e.i&&tu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=Ve.prototype;p.add=function(e,t){Rt(this),this.i=null,e=re(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ns(e,t){Rt(e),t=re(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function xs(e,t){return Rt(e),t=re(e,t),e.g.has(t)}p.forEach=function(e,t){Rt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){Rt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){Rt(this);let t=[];if(typeof e=="string")xs(this,e)&&(t=t.concat(this.g.get(re(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return Rt(this),this.i=null,e=re(this,e),xs(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Os(e,t,n){Ns(e,t),0<n.length&&(e.i=null,e.g.set(re(e,t),Sr(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function re(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ou(e,t){t&&!e.j&&(Rt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ns(this,r),Os(this,i,n))},e)),e.j=t}var au=class{constructor(e,t){this.g=e,this.map=t}};function Ms(e){this.l=e||uu,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uu=10;function Fs(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ls(e){return e.h?1:e.g?e.g.size:0}function _r(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function $r(e,t){e.g?e.g.add(t):e.h=t}function bs(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ms.prototype.cancel=function(){if(this.i=Us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Us(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Sr(e.i)}var lu=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function hu(){this.g=new lu}function cu(e,t,n){const r=n||"";try{Ds(e,function(i,s){let o=i;Oe(i)&&(o=Mr(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function fu(e,t){const n=new Vn;if(y.Image){const r=new Image;r.onload=Ke(We,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ke(We,n,r,"TestLoadImage: error",!1,t),r.onabort=Ke(We,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ke(We,n,r,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function We(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Be(e){this.l=e.fc||null,this.j=e.ob||!1}j(Be,Ur);Be.prototype.g=function(){return new xn(this.l,this.j)};Be.prototype.i=function(e){return function(){return e}}({});function xn(e,t){U.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=qr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(xn,U);var qr=0;p=xn.prototype;p.open=function(e,t){if(this.readyState!=qr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Se(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=qr};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Se(this)),this.g&&(this.readyState=3,Se(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bs(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Bs(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?je(this):Se(this),this.readyState==3&&Bs(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,je(this))};p.Ya=function(e){this.g&&(this.response=e,je(this))};p.ka=function(){this.g&&je(this)};function je(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Se(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Se(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var du=y.JSON.parse;function N(e){U.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=js,this.L=this.M=!1}j(N,U);var js="",pu=/^https?$/i,gu=["POST","PUT"];p=N.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dr.g(),this.C=this.u?vi(this.u):vi(dr),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Ai(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=y.FormData&&e instanceof y.FormData,!(0<=is(gu,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gs(this),0<this.B&&((this.L=mu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=br(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ai(this,s)}};function mu(e){return Wt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Vr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function Ai(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,$s(e),On(e)}function $s(e){e.F||(e.F=!0,z(e,"complete"),z(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),On(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),N.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?qs(this):this.kb())};p.kb=function(){qs(this)};function qs(e){if(e.h&&typeof Vr<"u"&&(!e.C[1]||ct(e)!=4||e.da()!=2)){if(e.v&&ct(e)==4)br(e.La,0,e);else if(z(e,"readystatechange"),ct(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(ks)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!pu.test(i?i.toLowerCase():"")}n=r}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var s=2<ct(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",$s(e)}}finally{On(e)}}}}function On(e,t){if(e.g){Gs(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=r}catch{}}}function Gs(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function ct(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),du(t)}};function wi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case js:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function _u(e){const t={};e=(e.g&&2<=ct(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Te(e[r]))continue;var n=$a(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Ma(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zs(e){let t="";return Dr(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Gr(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=zs(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):C(e,t,n))}function le(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ks(e){this.Ga=0,this.j=[],this.l=new Vn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=le("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=le("baseRetryDelayMs",5e3,e),this.hb=le("retryDelaySeedMs",1e4,e),this.eb=le("forwardChannelMaxRetries",2,e),this.xa=le("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ms(e&&e.concurrentRequestLimit),this.Ja=new hu,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Ks.prototype;p.ra=8;p.H=1;function zr(e){if(Hs(e),e.H==3){var t=e.W++,n=yt(e.I);if(C(n,"SID",e.K),C(n,"RID",t),C(n,"TYPE","terminate"),$e(e,n),t=new be(e,e.l,t),t.L=2,t.v=Nn(yt(n)),n=!1,y.navigator&&y.navigator.sendBeacon)try{n=y.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=eo(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ue(t)}Zs(e)}function Mn(e){e.g&&(Hr(e),e.g.cancel(),e.g=null)}function Hs(e){Mn(e),e.u&&(y.clearTimeout(e.u),e.u=null),ln(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function Fn(e){if(!Fs(e.i)&&!e.m){e.m=!0;var t=e.Na;Ae||ms(),we||(Ae(),we=!0),Fr.add(t,e),e.C=0}}function yu(e,t){return Ls(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Fe(X(e.Na,e,t),Js(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new be(this,this.l,e);let s=this.s;if(this.U&&(s?(s=us(s),ls(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ws(this,i,t),n=yt(this.I),C(n,"RID",e),C(n,"CVER",22),this.F&&C(n,"X-HTTP-Session-Id",this.F),$e(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(zs(s)))+"&"+t:this.o&&Gr(n,this.o,s)),$r(this.i,i),this.bb&&C(n,"TYPE","init"),this.P?(C(n,"$req",t),C(n,"SID","null"),i.aa=!0,gr(i,n,null)):gr(i,n,t),this.H=2}}else this.H==3&&(e?Ri(this,e):this.j.length==0||Fs(this.i)||Ri(this))};function Ri(e,t){var n;t?n=t.m:n=e.W++;const r=yt(e.I);C(r,"SID",e.K),C(r,"RID",n),C(r,"AID",e.V),$e(e,r),e.o&&e.s&&Gr(r,e.o,e.s),n=new be(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ws(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),$r(e.i,n),gr(n,r,t)}function $e(e,t){e.na&&Dr(e.na,function(n,r){C(t,r,n)}),e.h&&Ds({},function(n,r){C(t,r,n)})}function Ws(e,t,n){n=Math.min(e.j.length,n);var r=e.h?X(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const h=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{cu(h,o,"req"+l+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Qs(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ae||ms(),we||(Ae(),we=!0),Fr.add(t,e),e.A=0}}function Kr(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Fe(X(e.Ma,e),Js(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,Xs(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Fe(X(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Mn(this),Xs(this))};function Hr(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function Xs(e){e.g=new be(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=yt(e.wa);C(t,"RID","rpc"),C(t,"SID",e.K),C(t,"AID",e.V),C(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&C(t,"TO",e.qa),C(t,"TYPE","xmlhttp"),$e(e,t),e.o&&e.s&&Gr(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Nn(yt(t)),n.s=null,n.S=!0,Ps(n,e)}p.ib=function(){this.v!=null&&(this.v=null,Mn(this),Kr(this),tt(19))};function ln(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function Ys(e,t){var n=null;if(e.g==t){ln(e),Hr(e),e.g=null;var r=2}else if(_r(e.i,t))n=t.F,bs(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Sn(),z(r,new Is(r,n)),Fn(e)}else Qs(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&yu(e,t)||r==2&&Kr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Dt(e,5);break;case 4:Dt(e,10);break;case 3:Dt(e,6);break;default:Dt(e,2)}}}function Js(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Dt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=X(e.pb,e);n||(n=new xt("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||an(n,"https"),Nn(n)),fu(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),Zs(e),Hs(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Zs(e){if(e.H=0,e.ma=[],e.h){const t=Us(e.i);(t.length!=0||e.j.length!=0)&&(gi(e.ma,t),gi(e.ma,e.j),e.i.i.length=0,Sr(e.j),e.j.length=0),e.h.ya()}}function to(e,t,n){var r=n instanceof xt?yt(n):new xt(n);if(r.g!="")t&&(r.g=t+"."+r.g),un(r,r.m);else{var i=y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new xt(null);r&&an(s,r),t&&(s.g=t),i&&un(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&C(r,n,t),C(r,"VER",e.ra),$e(e,r),r}function eo(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new N(new Be({ob:!0})):new N(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function no(){}p=no.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function hn(){if(Wt&&!(10<=Number(ka)))throw Error("Environmental error: no available transport.")}hn.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){U.call(this),this.g=new Ks(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Te(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Te(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ie(this)}j(rt,U);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=to(e,null,e.Y),Fn(e)};rt.prototype.close=function(){zr(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Mr(e),e=n);t.j.push(new au(t.fb++,e)),t.H==3&&Fn(t)};rt.prototype.N=function(){this.g.h=null,delete this.j,zr(this.g),delete this.g,rt.$.N.call(this)};function ro(e){Br.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(ro,Br);function io(){jr.call(this),this.status=1}j(io,jr);function ie(e){this.g=e}j(ie,no);ie.prototype.Ba=function(){z(this.g,"a")};ie.prototype.Aa=function(e){z(this.g,new ro(e))};ie.prototype.za=function(e){z(this.g,new io)};ie.prototype.ya=function(){z(this.g,"b")};function Eu(){this.blockSize=-1}function dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}j(dt,Eu);dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}dt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)rr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){rr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){rr(this,r),i=0;break}}this.h=i,this.i+=t};dt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function P(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var vu={};function Wr(e){return-128<=e&&128>e?Sa(e,function(t){return new P([t|0],0>t?-1:0)}):new P([e|0],0>e?-1:0)}function ft(e){if(isNaN(e)||!isFinite(e))return Kt;if(0>e)return G(ft(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=yr;return new P(t,0)}function so(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(so(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ft(Math.pow(t,8)),r=Kt,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=ft(Math.pow(t,s)),r=r.R(s).add(ft(o))):(r=r.R(n),r=r.add(ft(o)))}return r}var yr=4294967296,Kt=Wr(0),Er=Wr(1),Pi=Wr(16777216);p=P.prototype;p.ea=function(){if(st(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:yr+r)*t,t*=yr}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(gt(this))return"0";if(st(this))return"-"+G(this).toString(e);for(var t=ft(Math.pow(e,6)),n=this,r="";;){var i=fn(n,t).g;n=cn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,gt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function gt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function st(e){return e.h==-1}p.X=function(e){return e=cn(this,e),st(e)?-1:gt(e)?0:1};function G(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new P(n,~e.h).add(Er)}p.abs=function(){return st(this)?G(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new P(n,n[n.length-1]&-2147483648?-1:0)};function cn(e,t){return e.add(G(t))}p.R=function(e){if(gt(this)||gt(e))return Kt;if(st(this))return st(e)?G(this).R(G(e)):G(G(this).R(e));if(st(e))return G(this.R(G(e)));if(0>this.X(Pi)&&0>e.X(Pi))return ft(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Qe(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Qe(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qe(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qe(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new P(n,0)};function Qe(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function he(e,t){this.g=e,this.h=t}function fn(e,t){if(gt(t))throw Error("division by zero");if(gt(e))return new he(Kt,Kt);if(st(e))return t=fn(G(e),t),new he(G(t.g),G(t.h));if(st(t))return t=fn(e,G(t)),new he(G(t.g),t.h);if(30<e.g.length){if(st(e)||st(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Er,r=t;0>=r.X(e);)n=Vi(n),r=Vi(r);var i=jt(n,1),s=jt(r,1);for(r=jt(r,2),n=jt(n,2);!gt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=jt(r,1),n=jt(n,1)}return t=cn(e,i.R(t)),new he(i,t)}for(i=Kt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ft(n),o=s.R(t);st(o)||0<o.X(e);)n-=r,s=ft(n),o=s.R(t);gt(s)&&(s=Er),i=i.add(s),e=cn(e,o)}return new he(i,e)}p.gb=function(e){return fn(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new P(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new P(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new P(n,this.h^e.h)};function Vi(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new P(n,e.h)}function jt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new P(i,e.h)}hn.prototype.createWebChannel=hn.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Cn.NO_ERROR=0;Cn.TIMEOUT=8;Cn.HTTP_ERROR=6;As.COMPLETE="complete";ws.EventType=Le;Le.OPEN="a";Le.CLOSE="b";Le.ERROR="c";Le.MESSAGE="d";U.prototype.listen=U.prototype.O;N.prototype.listenOnce=N.prototype.P;N.prototype.getLastError=N.prototype.Sa;N.prototype.getLastErrorCode=N.prototype.Ia;N.prototype.getStatus=N.prototype.da;N.prototype.getResponseJson=N.prototype.Wa;N.prototype.getResponseText=N.prototype.ja;N.prototype.send=N.prototype.ha;N.prototype.setWithCredentials=N.prototype.Oa;dt.prototype.digest=dt.prototype.l;dt.prototype.reset=dt.prototype.reset;dt.prototype.update=dt.prototype.j;P.prototype.add=P.prototype.add;P.prototype.multiply=P.prototype.R;P.prototype.modulo=P.prototype.gb;P.prototype.compare=P.prototype.X;P.prototype.toNumber=P.prototype.ea;P.prototype.toString=P.prototype.toString;P.prototype.getBits=P.prototype.D;P.fromNumber=ft;P.fromString=so;var Tu=function(){return new hn},Iu=function(){return Sn()},ir=Cn,Au=As,wu=Ut,Si={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ru=Be,Xe=ws,Pu=N,Vu=P;const Ci="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}H.UNAUTHENTICATED=new H(null),H.GOOGLE_CREDENTIALS=new H("google-credentials-uid"),H.FIRST_PARTY=new H("first-party-uid"),H.MOCK_USER=new H("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let se="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new ca("@firebase/firestore");function Di(){return Ft.logLevel}function _(e,...t){if(Ft.logLevel<=ve.DEBUG){const n=t.map(Qr);Ft.debug(`Firestore (${se}): ${e}`,...n)}}function Lt(e,...t){if(Ft.logLevel<=ve.ERROR){const n=t.map(Qr);Ft.error(`Firestore (${se}): ${e}`,...n)}}function dn(e,...t){if(Ft.logLevel<=ve.WARN){const n=t.map(Qr);Ft.warn(`Firestore (${se}): ${e}`,...n)}}function Qr(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${se}) INTERNAL ASSERTION FAILED: `+e;throw Lt(t),new Error(t)}function B(e,t){e||I()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends sa{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Su{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(H.UNAUTHENTICATED))}shutdown(){}}class Cu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Du{constructor(t){this.t=t,this.currentUser=H.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ot,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ot)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new oo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new H(t)}}class ku{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=H.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nu{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new ku(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(H.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ou{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new xu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Mu(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function V(e,t){return e<t?-1:e>t?1:0}function Qt(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return b.fromMillis(Date.now())}static fromDate(t){return b.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new b(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new b(0,0))}static max(){return new k(new b(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,n,r){n===void 0?n=0:n>t.length&&I(),r===void 0?r=t.length-n:r>t.length-n&&I(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ce.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ce?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ce{construct(t,n,r){return new O(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new E(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Fu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Ce{construct(t,n,r){return new Q(t,n,r)}static isValidIdentifier(t){return Fu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new E(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new E(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(O.fromString(t))}static fromName(t){return new T(O.fromString(t).popFirst(5))}static empty(){return new T(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new O(t.slice()))}}function Lu(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=k.fromTimestamp(r===1e9?new b(n+1,0):new b(n,r));return new Tt(i,T.empty(),t)}function bu(e){return new Tt(e.readTime,e.key,-1)}class Tt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Tt(k.min(),T.empty(),-1)}static max(){return new Tt(k.max(),T.empty(),-1)}}function Uu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ju{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Bu)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(i=>i?d.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new d((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(t[l]).next(h=>{o[l]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new d((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Ln(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}lo.ae=-1;function Xr(e){return e==null}function pn(e){return e===0&&1/e==-1/0}function $u(e){return typeof e=="number"&&Number.isInteger(e)&&!pn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function oe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ho(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n){this.comparator=t,this.root=n||$.EMPTY}insert(t,n){return new nt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??$.RED,this.left=i??$.EMPTY,this.right=s??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new $(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return $.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,n,r,i,s){return this}insert(t,n,r){return new $(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ni(this.data.getIterator())}getIteratorFrom(t){return new Ni(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof et)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new et(this.comparator);return n.data=t,n}}class Ni{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new ut([])}unionWith(t){let n=new et(Q.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qt(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qu("Invalid base64 string: "+s):s}}(t);return new Et(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Et(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Gu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(e){if(B(!!e),typeof e=="string"){let t=0;const n=Gu.exec(e);if(B(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:q(e.seconds),nanos:q(e.nanos)}}function q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function De(e){return typeof e=="string"?Et.fromBase64String(e):Et.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function co(e){const t=e.mapValue.fields.__previous_value__;return Yr(t)?co(t):t}function gn(e){const t=bt(e.mapValue.fields.__local_write_time__.timestampValue);return new b(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,n,r,i,s,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class mn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yr(e)?4:Ku(e)?9007199254740991:10:I()}function pt(e,t){if(e===t)return!0;const n=Xt(e);if(n!==Xt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return gn(e).isEqual(gn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bt(i.timestampValue),a=bt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return De(i.bytesValue).isEqual(De(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return q(i.geoPointValue.latitude)===q(s.geoPointValue.latitude)&&q(i.geoPointValue.longitude)===q(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return q(i.integerValue)===q(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=q(i.doubleValue),a=q(s.doubleValue);return o===a?pn(o)===pn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Qt(e.arrayValue.values||[],t.arrayValue.values||[],pt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ki(o)!==ki(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!pt(o[u],a[u])))return!1;return!0}(e,t);default:return I()}}function ke(e,t){return(e.values||[]).find(n=>pt(n,t))!==void 0}function Yt(e,t){if(e===t)return 0;const n=Xt(e),r=Xt(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=q(s.integerValue||s.doubleValue),u=q(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return xi(e.timestampValue,t.timestampValue);case 4:return xi(gn(e),gn(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(s,o){const a=De(s),u=De(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const h=V(a[l],u[l]);if(h!==0)return h}return V(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=V(q(s.latitude),q(o.latitude));return a!==0?a:V(q(s.longitude),q(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const h=Yt(a[l],u[l]);if(h)return h}return V(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Je.mapValue&&o===Je.mapValue)return 0;if(s===Je.mapValue)return 1;if(o===Je.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},h=Object.keys(l);u.sort(),h.sort();for(let c=0;c<u.length&&c<h.length;++c){const g=V(u[c],h[c]);if(g!==0)return g;const m=Yt(a[u[c]],l[h[c]]);if(m!==0)return m}return V(u.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function xi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=bt(e),r=bt(t),i=V(n.seconds,r.seconds);return i!==0?i:V(n.nanos,r.nanos)}function Jt(e){return vr(e)}function vr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=bt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return De(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return T.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vr(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vr(n.fields[o])}`;return i+"}"}(e.mapValue):I()}function Tr(e){return!!e&&"integerValue"in e}function Jr(e){return!!e&&"arrayValue"in e}function rn(e){return!!e&&"mapValue"in e}function ge(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return oe(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ge(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ge(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ku(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.value=t}static empty(){return new ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!rn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ge(n)}setAll(t){let n=Q.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ge(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());rn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];rn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){oe(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ot(ge(this.value))}}function fo(e){const t=[];return oe(e.fields,(n,r)=>{const i=new Q([n]);if(rn(r)){const s=fo(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new at(t,0,k.min(),k.min(),k.min(),ot.empty(),0)}static newFoundDocument(t,n,r,i){return new at(t,1,n,k.min(),r,i,0)}static newNoDocument(t,n){return new at(t,2,n,k.min(),k.min(),ot.empty(),0)}static newUnknownDocument(t,n){return new at(t,3,n,k.min(),k.min(),ot.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n){this.position=t,this.inclusive=n}}function Oi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),n.key):r=Yt(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,n="asc"){this.field=t,this.dir=n}}function Hu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{}class L extends po{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Qu(t,n,r):n==="array-contains"?new Ju(t,r):n==="in"?new Zu(t,r):n==="not-in"?new tl(t,r):n==="array-contains-any"?new el(t,r):new L(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Xu(t,r):new Yu(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yt(n,this.value)):n!==null&&Xt(this.value)===Xt(n)&&this.matchesComparison(Yt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class It extends po{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new It(t,n)}matches(t){return go(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function go(e){return e.op==="and"}function mo(e){return Wu(e)&&go(e)}function Wu(e){for(const t of e.filters)if(t instanceof It)return!1;return!0}function Ir(e){if(e instanceof L)return e.field.canonicalString()+e.op.toString()+Jt(e.value);if(mo(e))return e.filters.map(t=>Ir(t)).join(",");{const t=e.filters.map(n=>Ir(n)).join(",");return`${e.op}(${t})`}}function _o(e,t){return e instanceof L?function(r,i){return i instanceof L&&r.op===i.op&&r.field.isEqual(i.field)&&pt(r.value,i.value)}(e,t):e instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_o(o,i.filters[a]),!0):!1}(e,t):void I()}function yo(e){return e instanceof L?function(n){return`${n.field.canonicalString()} ${n.op} ${Jt(n.value)}`}(e):e instanceof It?function(n){return n.op.toString()+" {"+n.getFilters().map(yo).join(" ,")+"}"}(e):"Filter"}class Qu extends L{constructor(t,n,r){super(t,n,r),this.key=T.fromName(r.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class Xu extends L{constructor(t,n){super(t,"in",n),this.keys=Eo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Yu extends L{constructor(t,n){super(t,"not-in",n),this.keys=Eo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Eo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>T.fromName(r.referenceValue))}class Ju extends L{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Jr(n)&&ke(n.arrayValue,this.value)}}class Zu extends L{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ke(this.value.arrayValue,n)}}class tl extends L{constructor(t,n){super(t,"not-in",n)}matches(t){if(ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ke(this.value.arrayValue,n)}}class el extends L{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Jr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ke(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Fi(e,t=null,n=[],r=[],i=null,s=null,o=null){return new nl(e,t,n,r,i,s,o)}function Zr(e){const t=D(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ir(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Jt(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Jt(r)).join(",")),t.he=n}return t.he}function ti(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Hu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!_o(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Mi(e.startAt,t.startAt)&&Mi(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function rl(e,t,n,r,i,s,o,a){return new bn(e,t,n,r,i,s,o,a)}function il(e){return new bn(e)}function Li(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function sl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ol(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function al(e){return e.collectionGroup!==null}function _e(e){const t=D(e);if(t.Pe===null){t.Pe=[];const n=ol(t),r=sl(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new me(n)),t.Pe.push(new me(Q.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new me(Q.keyField(),s))}}}return t.Pe}function Zt(e){const t=D(e);return t.Ie||(t.Ie=ul(t,_e(e))),t.Ie}function ul(e,t){if(e.limitType==="F")return Fi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new me(i.field,s)});const n=e.endAt?new _n(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new _n(e.startAt.position,e.startAt.inclusive):null;return Fi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ar(e,t,n){return new bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function vo(e,t){return ti(Zt(e),Zt(t))&&e.limitType===t.limitType}function To(e){return`${Zr(Zt(e))}|lt:${e.limitType}`}function bi(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yo(i)).join(", ")}]`),Xr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Jt(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Jt(i)).join(",")),`Target(${r})`}(Zt(e))}; limitType=${e.limitType})`}function ei(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of _e(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=Oi(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,_e(r),i)||r.endAt&&!function(o,a,u){const l=Oi(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,_e(r),i))}(e,t)}function ll(e){return(t,n)=>{let r=!1;for(const i of _e(e)){const s=hl(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hl(e,t,n){const r=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?Yt(u,l):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){oe(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return ho(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new nt(T.comparator);function yn(){return cl}const Io=new nt(T.comparator);function Ze(...e){let t=Io;for(const n of e)t=t.insert(n.key,n);return t}function Ao(e){let t=Io;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function kt(){return ye()}function wo(){return ye()}function ye(){return new ae(e=>e.toString(),(e,t)=>e.isEqual(t))}const fl=new nt(T.comparator),dl=new et(T.comparator);function W(...e){let t=dl;for(const n of e)t=t.add(n);return t}const pl=new et(V);function gl(){return pl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pn(t)?"-0":t}}function Po(e){return{integerValue:""+e}}function ml(e,t){return $u(t)?Po(t):Ro(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this._=void 0}}function _l(e,t,n){return e instanceof En?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yr(s)&&(s=co(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof te?So(e,t):e instanceof ee?Co(e,t):function(i,s){const o=Vo(i,s),a=Ui(o)+Ui(i.Ee);return Tr(o)&&Tr(i.Ee)?Po(a):Ro(i.serializer,a)}(e,t)}function yl(e,t,n){return e instanceof te?So(e,t):e instanceof ee?Co(e,t):n}function Vo(e,t){return e instanceof vn?function(r){return Tr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class En extends Un{}class te extends Un{constructor(t){super(),this.elements=t}}function So(e,t){const n=Do(t);for(const r of e.elements)n.some(i=>pt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ee extends Un{constructor(t){super(),this.elements=t}}function Co(e,t){let n=Do(t);for(const r of e.elements)n=n.filter(i=>!pt(i,r));return{arrayValue:{values:n}}}class vn extends Un{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function Ui(e){return q(e.integerValue||e.doubleValue)}function Do(e){return Jr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,n){this.field=t,this.transform=n}}function El(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof te&&i instanceof te||r instanceof ee&&i instanceof ee?Qt(r.elements,i.elements,pt):r instanceof vn&&i instanceof vn?pt(r.Ee,i.Ee):r instanceof En&&i instanceof En}(e.transform,t.transform)}class vl{constructor(t,n){this.version=t,this.transformResults=n}}class mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mt}static exists(t){return new mt(void 0,t)}static updateTime(t){return new mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Bn{}function No(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Oo(e.key,mt.none()):new jn(e.key,e.data,mt.none());{const n=e.data,r=ot.empty();let i=new et(Q.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bt(e.key,r,new ut(i.toArray()),mt.none())}}function Tl(e,t,n){e instanceof jn?function(i,s,o){const a=i.value.clone(),u=ji(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Bt?function(i,s,o){if(!sn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ji(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(xo(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ee(e,t,n,r){return e instanceof jn?function(s,o,a,u){if(!sn(s.precondition,o))return a;const l=s.value.clone(),h=$i(s.fieldTransforms,u,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Bt?function(s,o,a,u){if(!sn(s.precondition,o))return a;const l=$i(s.fieldTransforms,u,o),h=o.data;return h.setAll(xo(s)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(s,o,a){return sn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Il(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Vo(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function Bi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qt(r,i,(s,o)=>El(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class jn extends Bn{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bt extends Bn{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ji(e,t,n){const r=new Map;B(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,yl(o,a,n[i]))}return r}function $i(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_l(s,o,t))}return r}class Oo extends Bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Al extends Bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Tl(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ee(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ee(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=wo();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=No(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(k.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),W())}isEqual(t){return this.batchId===t.batchId&&Qt(this.mutations,t.mutations,(n,r)=>Bi(n,r))&&Qt(this.baseMutations,t.baseMutations,(n,r)=>Bi(n,r))}}class ni{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){B(t.mutations.length===r.length);let i=function(){return fl}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ni(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,A;function Pl(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Vl(e){if(e===void 0)return Lt("GRPC error has no .code"),f.UNKNOWN;switch(e){case x.OK:return f.OK;case x.CANCELLED:return f.CANCELLED;case x.UNKNOWN:return f.UNKNOWN;case x.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case x.INTERNAL:return f.INTERNAL;case x.UNAVAILABLE:return f.UNAVAILABLE;case x.UNAUTHENTICATED:return f.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case x.NOT_FOUND:return f.NOT_FOUND;case x.ALREADY_EXISTS:return f.ALREADY_EXISTS;case x.PERMISSION_DENIED:return f.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case x.ABORTED:return f.ABORTED;case x.OUT_OF_RANGE:return f.OUT_OF_RANGE;case x.UNIMPLEMENTED:return f.UNIMPLEMENTED;case x.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(A=x||(x={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Vu([4294967295,4294967295],0);class Sl{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function wr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Dl(e,t){return wr(e,t.toTimestamp())}function Ht(e){return B(!!e),k.fromTimestamp(function(n){const r=bt(n);return new b(r.seconds,r.nanos)}(e))}function Mo(e,t){return function(r){return new O(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function kl(e){const t=O.fromString(e);return B(Ul(t)),t}function Rr(e,t){return Mo(e.databaseId,t.path)}function Nl(e){const t=kl(e);return t.length===4?O.emptyPath():Ol(t)}function xl(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ol(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function qi(e,t,n){return{name:Rr(e,t),fields:n.value.mapValue.fields}}function Ml(e,t){let n;if(t instanceof jn)n={update:qi(e,t.key,t.value)};else if(t instanceof Oo)n={delete:Rr(e,t.key)};else if(t instanceof Bt)n={update:qi(e,t.key,t.data),updateMask:bl(t.fieldMask)};else{if(!(t instanceof Al))return I();n={verify:Rr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof En)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof te)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ee)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vn)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw I()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Dl(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:I()}(e,t.precondition)),n}function Fl(e,t){return e&&e.length>0?(B(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Ht(i.updateTime):Ht(s);return o.isEqual(k.min())&&(o=Ht(s)),new vl(o,i.transformResults||[])}(n,t))):[]}function Ll(e){let t=Nl(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){B(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(c){const g=Fo(c);return g instanceof It&&mo(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(g=>function(w){return new me(Gt(w.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(c){let g;return g=typeof c=="object"?c.value:c,Xr(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(c){const g=!!c.before,m=c.values||[];return new _n(m,g)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const g=!c.before,m=c.values||[];return new _n(m,g)}(n.endAt)),rl(t,i,o,s,a,"F",u,l)}function Fo(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gt(n.unaryFilter.field);return L.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gt(n.unaryFilter.field);return L.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gt(n.unaryFilter.field);return L.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gt(n.unaryFilter.field);return L.create(o,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(n){return L.create(Gt(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return It.create(n.compositeFilter.filters.map(r=>Fo(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return I()}}(n.compositeFilter.op))}(e):I()}function Gt(e){return Q.fromServerFormat(e.fieldPath)}function bl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ul(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this.lt=t}}function jl(e){const t=Ll({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ar(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.on=new ql}addToCollectionParentIndex(t,n){return this.on.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(Tt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(Tt.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class ql{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new et(O.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new et(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new ne(0)}static Nn(){return new ne(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.changes=new ae(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ee(r.mutation,i,ut.empty(),b.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,W()).next(()=>r))}getLocalViewOfDocuments(t,n,r=W()){const i=kt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ze();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=kt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,W()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=yn();const o=ye(),a=function(){return ye()}();return n.forEach((u,l)=>{const h=r.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof Bt)?s=s.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Ee(h.mutation,l,h.mutation.getFieldMask(),b.now())):o.set(l.key,ut.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var c;return a.set(l,new zl(h,(c=o.get(l))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ye();let i=new nt((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let h=r.get(u)||ut.empty();h=a.applyToLocalView(l,h),r.set(u,h);const c=(i.get(a.batchId)||W()).add(u);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,c=wo();h.forEach(g=>{if(!s.has(g)){const m=No(n.get(g),r.get(g));m!==null&&c.set(g,m),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,c))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):al(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):d.resolve(kt());let a=-1,u=s;return o.next(l=>d.forEach(l,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?d.resolve():this.remoteDocumentCache.getEntry(t,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,u,l,W())).next(h=>({batchId:a,changes:Ao(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(r=>{let i=Ze();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ze();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(h,c){return new bn(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(l=>{l.forEach((h,c)=>{s=s.insert(h,c)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,at.newInvalidDocument(l)))});let o=Ze();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&Ee(l.mutation,u,ut.empty(),b.now()),ei(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return d.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ht(i.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:jl(i.bundledQuery),readTime:Ht(i.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.overlays=new nt(T.comparator),this.lr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=kt();return d.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.Pt(t,n,s)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const i=kt(),s=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new nt((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=kt(),s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=kt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return d.resolve(a)}Pt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rl(n,r));let s=this.lr.get(n);s===void 0&&(s=W(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.hr=new et(F.Pr),this.Ir=new et(F.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new F(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new F(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new T(new O([])),r=new F(n,t),i=new F(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new T(new O([])),r=new F(n,t),i=new F(n,t+1);let s=W();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new F(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class F{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return T.comparator(t.key,n.key)||V(t.gr,n.gr)}static Tr(t,n){return V(t.gr,n.gr)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new et(F.Pr)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wl(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new F(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return d.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new F(n,0),i=new F(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),d.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new et(V);return n.forEach(i=>{const s=new F(i,0),o=new F(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),d.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new F(new T(s),0);let a=new et(V);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gr)),!0)},o),d.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){B(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return d.forEach(n.mutations,i=>{const s=new F(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new F(n,0),i=this.yr.firstAfterOrEqual(r);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this.vr=t,this.docs=function(){return new nt(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(t,n){let r=yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=yn();const o=n.path,a=new T(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:h}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Uu(bu(h),r)<=0||(i.has(h.key)||ei(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return d.resolve(s)}getAllFromCollectionGroup(t,n,r,i){I()}Cr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Yl(this)}getSize(t){return d.resolve(this.size)}}class Yl extends Gl{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t){this.persistence=t,this.Fr=new ae(n=>Zr(n),ti),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ri,this.targetCount=0,this.Nr=ne.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),d.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new ne(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.kn(n),d.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(s).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n){this.Br={},this.overlays={},this.Lr=new lo(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Jl(this),this.indexManager=new $l,this.remoteDocumentCache=function(i){return new Xl(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Bl(n),this.Kr=new Hl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Wl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Ql(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const i=new th(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return d.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class th extends ju{constructor(t){super(),this.currentSequenceNumber=t}}class ii{constructor(t){this.persistence=t,this.Gr=new ri,this.zr=null}static jr(t){return new ii(t)}get Hr(){if(this.zr)return this.zr;throw I()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),d.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Hr,r=>{const i=T.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,k.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return d.or([()=>d.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new si(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.Ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Wi(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(Li(n))return d.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ar(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=W(...s);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.zi(n,a);return this.ji(n,l,o,u.readTime)?this.Ui(t,Ar(n,null,"F")):this.Hi(t,l,n,u)}))})))}Wi(t,n,r,i){return Li(n)||i.isEqual(k.min())?this.Gi(t,n):this.$i.getDocuments(t,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(Di()<=ve.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bi(n)),this.Hi(t,o,n,Lu(i,-1)))})}zi(t,n){let r=new et(ll(t));return n.forEach((i,s)=>{ei(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return Di()<=ve.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",bi(n)),this.$i.getDocumentsMatchingQuery(t,n,Tt.min())}Hi(t,n,r,i){return this.$i.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n,r,i){this.persistence=t,this.Ji=n,this.serializer=i,this.Yi=new nt(V),this.Zi=new ae(s=>Zr(s),ti),this.Xi=new Map,this.es=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.ts(r)}ts(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kl(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Yi))}}function rh(e,t,n,r){return new nh(e,t,n,r)}async function Lo(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=W();for(const l of i){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ns:l,removedBatchIds:o,addedBatchIds:a}))})})}function ih(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.es.newChangeBuffer({trackRemovals:!0});return function(a,u,l,h){const c=l.batch,g=c.keys();let m=d.resolve();return g.forEach(w=>{m=m.next(()=>h.getEntry(u,w)).next(S=>{const R=l.docVersions.get(w);B(R!==null),S.version.compareTo(R)<0&&(c.applyToRemoteDocument(S,l),S.isValidDocument()&&(S.setReadTime(l.commitVersion),h.addEntry(S)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=W();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function sh(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function oh(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Gi{constructor(){this.activeTargetIds=gl()}Ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}Is(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ah{constructor(){this.Js=new Gi,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Js.Ps(t),this.Ys[t]||"not-current"}updateQueryState(t,n,r){this.Ys[t]=n}removeLocalQueryTarget(t){this.Js.Is(t)}isLocalQueryTarget(t){return this.Js.activeTargetIds.has(t)}clearQueryState(t){delete this.Ys[t]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(t){return this.Js.activeTargetIds.has(t)}start(){return this.Js=new Gi,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{Zs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(t){this.io.push(t)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.io)t(0)}ro(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.io)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=null;function sr(){return tn===null?tn=function(){return 268435456+Math.round(2147483648*Math.random())}():tn++,"0x"+tn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.oo=t.oo,this._o=t._o}ao(t){this.uo=t}co(t){this.lo=t}onMessage(t){this.ho=t}close(){this._o()}send(t){this.oo(t)}Po(){this.uo()}Io(t){this.lo(t)}To(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="WebChannelConnection";class ch extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=sr(),u=this.fo(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(l,s,o),this.yo(n,u,l,i).then(h=>(_("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw dn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+se}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=lh[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}yo(t,n,r,i){const s=sr();return new Promise((o,a)=>{const u=new Pu;u.setWithCredentials(!0),u.listenOnce(Au.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ir.NO_ERROR:const h=u.getResponseJson();_(K,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case ir.TIMEOUT:_(K,`RPC '${t}' ${s} timed out`),a(new E(f.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const c=u.getStatus();if(_(K,`RPC '${t}' ${s} failed with status:`,c,"response text:",u.getResponseText()),c>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const w=function(R){const J=R.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(J)>=0?J:f.UNKNOWN}(m.status);a(new E(w,m.message))}else a(new E(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new E(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{_(K,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);_(K,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}So(t,n,r){const i=sr(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Tu(),a=Iu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new Ru({})),this.po(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");_(K,`Creating RPC '${t}' stream ${i}: ${h}`,u);const c=o.createWebChannel(h,u);let g=!1,m=!1;const w=new hh({oo:R=>{m?_(K,`Not sending because RPC '${t}' stream ${i} is closed:`,R):(g||(_(K,`Opening RPC '${t}' stream ${i} transport.`),c.open(),g=!0),_(K,`RPC '${t}' stream ${i} sending:`,R),c.send(R))},_o:()=>c.close()}),S=(R,J,it)=>{R.listen(J,vt=>{try{it(vt)}catch(Pt){setTimeout(()=>{throw Pt},0)}})};return S(c,Xe.EventType.OPEN,()=>{m||_(K,`RPC '${t}' stream ${i} transport opened.`)}),S(c,Xe.EventType.CLOSE,()=>{m||(m=!0,_(K,`RPC '${t}' stream ${i} transport closed`),w.Io())}),S(c,Xe.EventType.ERROR,R=>{m||(m=!0,dn(K,`RPC '${t}' stream ${i} transport errored:`,R),w.Io(new E(f.UNAVAILABLE,"The operation could not be completed")))}),S(c,Xe.EventType.MESSAGE,R=>{var J;if(!m){const it=R.data[0];B(!!it);const vt=it,Pt=vt.error||((J=vt[0])===null||J===void 0?void 0:J.error);if(Pt){_(K,`RPC '${t}' stream ${i} received error:`,Pt);const ci=Pt.status;let Wn=function(na){const di=x[na];if(di!==void 0)return Vl(di)}(ci),fi=Pt.message;Wn===void 0&&(Wn=f.INTERNAL,fi="Unknown error status: "+ci+" with message "+Pt.message),m=!0,w.Io(new E(Wn,fi)),c.close()}else _(K,`RPC '${t}' stream ${i} received:`,it),w.To(it)}}),S(a,wu.STAT_EVENT,R=>{R.stat===Si.PROXY?_(K,`RPC '${t}' stream ${i} detected buffering proxy`):R.stat===Si.NOPROXY&&_(K,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.Po()},0),w}}function or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){return new Sl(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new bo(t,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(t){this.Yo(),this.stream.send(t)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(t,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,t!==4?this.$o.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Lt(n.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Xo(){}auth(){this.state=1;const t=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{t(()=>{const i=new E(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(t,n){const r=this.e_(this.qo);this.stream=this.r_(t,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}e_(t){return n=>{this.si.enqueueAndForget(()=>this.qo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dh extends fh{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(t,n){return this.connection.So("Write",t,n)}onMessage(t){if(B(!!t.streamToken),this.lastStreamToken=t.streamToken,this.__){this.$o.reset();const n=Fl(t.writeResults,t.commitTime),r=Ht(t.commitTime);return this.listener.c_(r,n)}return B(!t.writeResults||t.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const t={};t.database=xl(this.serializer),this.Jo(t)}u_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Ml(this.serializer,r))};this.Jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}mo(t,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(f.UNKNOWN,i.toString())})}wo(t,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(f.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class gh{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(t){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.V_("Offline")))}set(t){this.g_(),this.E_=0,t==="Online"&&(this.A_=!1),this.V_(t)}V_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}m_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(Lt(n),this.A_=!1):_("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{Ge(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=D(u);l.w_.add(4),await qe(l),l.D_.set("Unknown"),l.w_.delete(4),await qn(l)}(this))})}),this.D_=new gh(r,i)}}async function qn(e){if(Ge(e))for(const t of e.S_)await t(!0)}async function qe(e){for(const t of e.S_)await t(!1)}function Ge(e){return D(e).w_.size===0}async function Uo(e,t,n){if(!Ln(t))throw t;e.w_.add(1),await qe(e),e.D_.set("Offline"),n||(n=()=>sh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.w_.delete(1),await qn(e)})}function Bo(e,t){return t().catch(n=>Uo(e,n,t))}async function Gn(e){const t=D(e),n=At(t);let r=t.p_.length>0?t.p_[t.p_.length-1].batchId:-1;for(;_h(t);)try{const i=await oh(t.localStore,r);if(i===null){t.p_.length===0&&n.jo();break}r=i.batchId,yh(t,i)}catch(i){await Uo(t,i)}jo(t)&&$o(t)}function _h(e){return Ge(e)&&e.p_.length<10}function yh(e,t){e.p_.push(t);const n=At(e);n.Wo()&&n.a_&&n.u_(t.mutations)}function jo(e){return Ge(e)&&!At(e).Uo()&&e.p_.length>0}function $o(e){At(e).start()}async function Eh(e){At(e).h_()}async function vh(e){const t=At(e);for(const n of e.p_)t.u_(n.mutations)}async function Th(e,t,n){const r=e.p_.shift(),i=ni.from(r,t,n);await Bo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Gn(e)}async function Ih(e,t){t&&At(e).a_&&await async function(r,i){if(function(o){return Pl(o)&&o!==f.ABORTED}(i.code)){const s=r.p_.shift();At(r).zo(),await Bo(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gn(r)}}(e,t),jo(e)&&$o(e)}async function Ki(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Ge(n);n.w_.add(3),await qe(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.w_.delete(3),await qn(n)}async function Ah(e,t){const n=D(e);t?(n.w_.delete(2),await qn(n)):t||(n.w_.add(2),await qe(n),n.D_.set("Unknown"))}function At(e){return e.F_||(e.F_=function(n,r,i){const s=D(n);return s.I_(),new dh(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ao:Eh.bind(null,e),co:Ih.bind(null,e),l_:vh.bind(null,e),c_:Th.bind(null,e)}),e.S_.push(async t=>{t?(e.F_.zo(),await Gn(e)):(await e.F_.stop(),e.p_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.p_.length} pending writes`),e.p_=[]))})),e.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new oi(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qo(e,t){if(Lt("AsyncQueue",`${t}: ${e}`),Ln(e))return new E(f.UNAVAILABLE,`${t}: ${e}`);throw e}class wh{constructor(){this.queries=new ae(t=>To(t),vo),this.onlineState="Unknown",this.N_=new Set}}function Rh(e){e.N_.forEach(t=>{t.next()})}class Ph{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new ae(a=>To(a),vo),this.Aa=new Map,this.Ra=new Set,this.Va=new nt(T.comparator),this.ma=new Map,this.fa=new ri,this.ga={},this.pa=new Map,this.ya=ne.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function Vh(e,t,n){const r=kh(e);try{const i=await function(o,a){const u=D(o),l=b.now(),h=a.reduce((m,w)=>m.add(w.key),W());let c,g;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=yn(),S=W();return u.es.getEntries(m,h).next(R=>{w=R,w.forEach((J,it)=>{it.isValidDocument()||(S=S.add(J))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,w)).next(R=>{c=R;const J=[];for(const it of a){const vt=Il(it,c.get(it.key).overlayedDocument);vt!=null&&J.push(new Bt(it.key,vt,fo(vt.value.mapValue),mt.exists(!0)))}return u.mutationQueue.addMutationBatch(m,l,J,a)}).next(R=>{g=R;const J=R.applyToLocalDocumentSet(c,S);return u.documentOverlayCache.saveOverlays(m,R.batchId,J)})}).then(()=>({batchId:g.batchId,changes:Ao(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.ga[o.currentUser.toKey()];l||(l=new nt(V)),l=l.insert(a,u),o.ga[o.currentUser.toKey()]=l}(r,i.batchId,n),await zn(r,i.changes),await Gn(r.remoteStore)}catch(i){const s=qo(i,"Failed to persist write");n.reject(s)}}function Hi(e,t,n){const r=D(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=D(o);u.onlineState=a;let l=!1;u.queries.forEach((h,c)=>{for(const g of c.listeners)g.B_(a)&&(l=!0)}),l&&Rh(u)}(r.eventManager,t),i.length&&r.Ea.i_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sh(e,t){const n=D(e),r=t.batch.batchId;try{const i=await ih(n.localStore,t);zo(n,r,null),Go(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zn(n,i)}catch(i){await uo(i)}}async function Ch(e,t,n){const r=D(e);try{const i=await function(o,a){const u=D(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return u.mutationQueue.lookupMutationBatch(l,a).next(c=>(B(c!==null),h=c.keys(),u.mutationQueue.removeMutationBatch(l,c))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>u.localDocuments.getDocuments(l,h))})}(r.localStore,t);zo(r,t,n),Go(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zn(r,i)}catch(i){await uo(i)}}function Go(e,t){(e.pa.get(t)||[]).forEach(n=>{n.resolve()}),e.pa.delete(t)}function zo(e,t,n){const r=D(e);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.ga[r.currentUser.toKey()]=i}}async function zn(e,t,n){const r=D(e),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,u)=>{o.push(r.Sa(u,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=si.Qi(u.targetId,l);s.push(h)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(u,l){const h=D(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(l,g=>d.forEach(g.ki,m=>h.persistence.referenceDelegate.addReference(c,g.targetId,m)).next(()=>d.forEach(g.qi,m=>h.persistence.referenceDelegate.removeReference(c,g.targetId,m)))))}catch(c){if(!Ln(c))throw c;_("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const g=c.targetId;if(!c.fromCache){const m=h.Yi.get(g),w=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(w);h.Yi=h.Yi.insert(g,S)}}}(r.localStore,s))}async function Dh(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Lo(n.localStore,t);n.currentUser=t,function(s,o){s.pa.forEach(a=>{a.forEach(u=>{u.reject(new E(f.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(n,r.ns)}}function kh(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Sh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ch.bind(null,t),t}class Wi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$n(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return rh(this.persistence,new eh,t.initialUser,this.serializer)}createPersistence(t){return new Zl(ii.jr,this.serializer)}createSharedClientState(t){return new ah}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hi(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dh.bind(null,this.syncEngine),await Ah(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wh}()}createDatastore(t){const n=$n(t.databaseInfo.databaseId),r=function(s){return new ch(s)}(t.databaseInfo);return function(s,o,a,u){return new ph(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new mh(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Hi(this.syncEngine,n,0),function(){return zi.v()?new zi:new uh}())}createSyncEngine(t,n){return function(i,s,o,a,u,l,h){const c=new Ph(i,s,o,a,u,l);return h&&(c.wa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=D(n);_("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await qe(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=H.UNAUTHENTICATED,this.clientId=ao.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=qo(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ar(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lo(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Qi(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Mh(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Ki(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Ki(t.remoteStore,s)),e._onlineComponents=t}function Oh(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Mh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await ar(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Oh(n))throw n;dn("Error using user provided cache. Falling back to memory cache: "+n),await ar(e,new Wi)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await ar(e,new Wi);return e._offlineComponents}async function Fh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Qi(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Qi(e,new Nh))),e._onlineComponents}function Lh(e){return Fh(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(e,t,n){if(!n)throw new E(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Uh(e,t,n,r){if(t===!0&&r===!0)throw new E(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Yi(e){if(!T.isDocumentKey(e))throw new E(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ai(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Pr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ai(e);throw new E(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new E(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Uh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ko((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new E(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new E(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new E(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ui{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ji({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ji(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Su;switch(r.type){case"firstParty":return new Nu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xi.get(n);r&&(_("ComponentProvider","Removing Datastore"),Xi.delete(n),r.terminate())}(this),Promise.resolve()}}function Bh(e,t,n,r={}){var i;const s=(e=Pr(e,ui))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=H.MOCK_USER;else{a=la(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new E(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new H(l)}e._authCredentials=new Cu(new oo(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new li(this.firestore,t,this._query)}}class _t{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class Ne extends li{constructor(t,n,r){super(t,n,il(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new T(t))}withConverter(t){return new Ne(this.firestore,t,this._path)}}function $t(e,t,...n){if(e=Mt(e),arguments.length===1&&(t=ao.V()),bh("doc","path",t),e instanceof ui){const r=O.fromString(t,...n);return Yi(r),new _t(e,null,new T(r))}{if(!(e instanceof _t||e instanceof Ne))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return Yi(r),new _t(e.firestore,e instanceof Ne?e.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new bo(this,"async_queue_retry"),this.eu=()=>{const n=or();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=or();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=or();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new Ot;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!Ln(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const i=oi.createAndSchedule(this,t,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&I()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}class Ho extends ui{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new jh}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wo(this),this._firestoreClient.terminate()}}function $h(e,t){const n=typeof e=="object"?e:oa(),r=typeof e=="string"?e:t||"(default)",i=aa(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ua("firestore");s&&Bh(i,...s)}return i}function qh(e){return e._firestoreClient||Wo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Wo(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,l,h){return new zu(a,u,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ko(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new xh(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xe(Et.fromBase64String(t))}catch(n){throw new E(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new xe(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=/^__.*__$/;class Xo{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Bt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Yo(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Kn{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(t){return new Kn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.Iu(t),i}Tu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(t){return this.lu({path:void 0,Pu:!0})}du(t){return Tn(t,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Iu(this.path.get(t))}Iu(t){if(t.length===0)throw this.du("Document fields must not be empty");if(Yo(this.cu)&&Gh.test(t))throw this.du('Document fields cannot begin and end with "__"')}}class zh{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||$n(t)}Vu(t,n,r,i=!1){return new Kn({cu:t,methodName:n,Ru:r,path:Q.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kh(e){const t=e._freezeSettings(),n=$n(e._databaseId);return new zh(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Hn extends ze{_toFieldTransform(t){if(t.cu!==2)throw t.cu===1?t.du(`${this._methodName}() can only appear at the top level of your update data`):t.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hn}}function Jo(e,t,n){return new Kn({cu:3,Ru:t.settings.Ru,methodName:e._methodName,Pu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Hh extends ze{constructor(t,n){super(t),this.mu=n}_toFieldTransform(t){const n=Jo(this,t,!0),r=this.mu.map(s=>ue(s,n)),i=new te(r);return new ko(t.path,i)}isEqual(t){return this===t}}class Wh extends ze{constructor(t,n){super(t),this.mu=n}_toFieldTransform(t){const n=Jo(this,t,!0),r=this.mu.map(s=>ue(s,n)),i=new ee(r);return new ko(t.path,i)}isEqual(t){return this===t}}function Qh(e,t,n,r){const i=e.Vu(1,t,n);ta("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();oe(r,(u,l)=>{const h=ea(t,u,n);l=Mt(l);const c=i.Tu(h);if(l instanceof Hn)s.push(h);else{const g=ue(l,c);g!=null&&(s.push(h),o.set(h,g))}});const a=new ut(s);return new Xo(o,a,i.fieldTransforms)}function Xh(e,t,n,r,i,s){const o=e.Vu(1,t,n),a=[Zi(t,r,n)],u=[i];if(s.length%2!=0)throw new E(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Zi(t,s[g])),u.push(s[g+1]);const l=[],h=ot.empty();for(let g=a.length-1;g>=0;--g)if(!Zh(l,a[g])){const m=a[g];let w=u[g];w=Mt(w);const S=o.Tu(m);if(w instanceof Hn)l.push(m);else{const R=ue(w,S);R!=null&&(l.push(m),h.set(m,R))}}const c=new ut(l);return new Xo(h,c,o.fieldTransforms)}function ue(e,t){if(Zo(e=Mt(e)))return ta("Unsupported field value:",t,e),Yh(e,t);if(e instanceof ze)return function(r,i){if(!Yo(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Pu&&t.cu!==4)throw t.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ue(a,i.Eu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ml(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=b.fromDate(r);return{timestampValue:wr(i.serializer,s)}}if(r instanceof b){const s=new b(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wr(i.serializer,s)}}if(r instanceof Qo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:Cl(i.serializer,r._byteString)};if(r instanceof _t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${ai(r)}`)}(e,t)}function Yh(e,t){const n={};return ho(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oe(e,(r,i)=>{const s=ue(i,t.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Zo(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof b||e instanceof Qo||e instanceof xe||e instanceof _t||e instanceof ze)}function ta(e,t,n){if(!Zo(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ai(n);throw r==="an object"?t.du(e+" a custom object"):t.du(e+" "+r)}}function Zi(e,t,n){if((t=Mt(t))instanceof hi)return t._internalPath;if(typeof t=="string")return ea(e,t);throw Tn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Jh=new RegExp("[~\\*/\\[\\]]");function ea(e,t,n){if(t.search(Jh)>=0)throw Tn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hi(...t.split("."))._internalPath}catch{throw Tn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Tn(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new E(f.INVALID_ARGUMENT,a+e+u)}function Zh(e,t){return e.some(n=>n.isEqual(t))}function Vt(e,t,n,...r){e=Pr(e,_t);const i=Pr(e.firestore,Ho),s=Kh(i);let o;return o=typeof(t=Mt(t))=="string"||t instanceof hi?Xh(s,"updateDoc",e._key,t,n,r):Qh(s,"updateDoc",e._key,t),tc(i,[o.toMutation(e._key,mt.exists(!0))])}function tc(e,t){return function(r,i){const s=new Ot;return r.asyncQueue.enqueueAndForget(async()=>Vh(await Lh(r),i,s)),s.promise}(qh(e),t)}function ce(...e){return new Hh("arrayUnion",e)}function ts(...e){return new Wh("arrayRemove",e)}(function(t,n=!0){(function(i){se=i})(ha),ra(new ia("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ho(new Du(r.getProvider("auth-internal")),new Ou(r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new E(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(l.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),pi(Ci,"4.1.1",t),pi(Ci,"4.1.1","esm2017")})();const qt=$h(),M=rs(),es=Nt.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",Nt.stopTimer),e.addEventListener("mouseleave",Nt.resumeTimer)}}),en=Nt.mixin({confirmButtonColor:"#ff715f"}),ec=ns("cartStore",{state:()=>({cartPageState:"cart",couponCode:"",couponValue:1,checkAllValue:!1,cartCheckboxWrap:[],payWrap:{payData:[],total:0,finalTotal:0,couponUse:""}}),actions:{async addCart(e,t){const n={timestamp:new Date().getTime(),courseId:t};console.log(n);const r=$t(qt,e,"student");await Vt(r,{myCart:ce(n)}),es.fire({icon:"success",title:"成功加入購物車"}),M.getStudentFirebaseData()},async buyNow(e,t){const n={timestamp:new Date().getTime(),courseId:t};console.log(n);const r=$t(qt,e,"student");await Vt(r,{myCart:ce(n)}),St.push("/CartPage")},async deleteCart(e,t,n){console.log(e,t,n),this.cartCheckboxWrap=[],this.checkAllValue=!1;const r=M.studentData.myCart.filter(s=>s.timestamp===t),i=$t(qt,e,"student");await Vt(i,{myCart:ts(r[0])}),es.fire({icon:"success",title:"成功刪除購物車項目"}),M.onAuthStateChanged()},addToPayWrap(){if(this.cartCheckboxWrap.length===0)en.fire("請選擇結帳項目");else{this.cartPageState="pay";let e=0;this.cartCheckboxWrap.forEach(t=>{e+=parseInt(M.userCartCourses[t][0].data.price);let n={courseId:"",courseName:"",price:""};n.courseId=M.userCartCourses[t][0].id,n.courseName=M.userCartCourses[t][0].data.courseName,n.price=M.userCartCourses[t][0].data.price,this.payWrap.payData.push(n)}),this.payWrap.total=e,this.payWrap.finalTotal=Math.trunc(e*this.couponValue)}},addCouponCode(){console.log(M.couponData);for(let e in M.couponData)if(console.log(e),console.log(M.couponData[e]),this.couponCode===e){en.fire("成功加入折扣碼"),this.couponValue=M.couponData[e],this.payWrap.couponUse=e;return}en.fire({title:"折扣碼不存在",confirmButtonColor:"#ff715f"})},async confirmToPay(){const e={timestamp:new Date().getTime(),payData:this.payWrap},t=$t(qt,M.user.uid,"student");await Vt(t,{payHistory:ce(e)});for(let r=0;r<this.payWrap.payData.length;r++){const i=$t(qt,"MusicTutorCourses",this.payWrap.payData[r].courseId),s=new Date().getTime();let o={timestamp:s,courseId:this.payWrap.payData[r].courseId,classSchedule:""},a={timestamp:s,uid:M.teacherData.uid,classSchedule:""};await Vt(t,{myStudyCourses:ce(o)}),await Vt(i,{whoBuy:ce(a)})}const n=$t(qt,M.user.uid,"student");for(let r=0;r<this.cartCheckboxWrap.length;r++)await Vt(n,{myCart:ts(M.studentData.myCart[this.cartCheckboxWrap[r]])});this.cartPageState="cart",this.couponCode="",this.couponValue=1,this.cartCheckboxWrap=[],this.payWrap={payData:[],total:0,finalTotal:0,couponUse:""},en.fire("成功完成付款"),St.push("/AllCourses"),M.onAuthStateChanged()},checkAll(){this.checkAllValue?this.cartCheckboxWrap=[]:M.userCartCourses.forEach((e,t)=>{this.cartCheckboxWrap.push(t)})}},getters:{cartTotal(){return()=>{let e=0;return this.cartCheckboxWrap.forEach(t=>{e+=parseInt(M.userCartCourses[t][0].data.price)}),e}}}}),lt=fa(),v=rs(),nn=ec(),Z=Nt.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",Nt.stopTimer),e.addEventListener("mouseleave",Nt.resumeTimer)}}),lc=ns("logInStore",{state:()=>({logInPage:!0,logInForm:{user:{email:"",password:""}},signUpForm:{user:{displayName:"",email:"",password:"",confirmation:""}},AccountSettingState:!1,userProviderData:[],ProviderState:{password:!1,google:!1,facebook:!1,github:!1},resetPasswordEmail:""}),actions:{signOut(){da(lt),St.push("/UserLogin"),v.courseData={},v.user={},v.isMember=!1,v.teacherData={uid:"",accountCreateTime:"",lastLogInTime:"",email:"",displayName:"",teacherImg:"",gender:"",birthday:"",address:"",phoneNumber:"",teachArea:[],teacherIntro:"",ckeditor:"",ckeditorImg:"",instagram:"",facebook:"",discord:"",expertise:"",educationalBackground:"",myTeachCourses:[],language:[],musicStyle:[],allTeachTime:0,studentAssess:[],calenderTeacherColor:{color:"#c3dcbe",textColor:"#000000"},calenderStudentColor:{color:"#c5b2d6",textColor:"#000000"}},v.studentData={myStudyCourses:[],myCart:[],payHistory:[],allStudyTime:0,myBookmarkCourses:[],myBookmarkTeacher:[]},v.AllCoursesFirebaseData=[],v.otherTeacherData=[],v.beATeacherData={uid:"",displayName:"",gender:"",courseImg:"",courseName:"",courseIntro:"",courseCategory:"",courseMethod:[],cityName:"",time:0,price:0,timestamp:""},v.couponData=[],v.userTeacherCourses=[],v.userStudentCourses=[],v.userBookmarkCourses=[],v.userCartCourses=[],v.top6courses=[],v.youLikeCourses=[],nn.couponCode="",nn.couponValue=1,nn.cartCheckboxWrap=[],nn.payWrap={payData:[],total:0,finalTotal:0,couponUse:""},v.classScheduleData=[],v.classScheduleStudentData=[],v.classScheduleId="",v.classScheduleIndex=0,v.classScheduleTime="",v.calenderDataAll=[],v.calenderDataNameTemp="",this.userProviderData=[],this.ProviderState={password:!1,google:!1,facebook:!1,github:!1}},logIn(){pa(lt,this.logInForm.user.email,this.logInForm.user.password).then(()=>{v.isMember=!0,this.logInForm.user.email="",this.logInForm.user.password="",St.push("/"),Z.fire({icon:"success",title:"恭喜登入成功"})}).catch(e=>{Z.fire(e.message)})},async signUp(){await ga(lt,this.signUpForm.user.email,this.signUpForm.user.password).then(e=>{v.user=e.user,console.log(this.signUpForm.user.displayName),v.teacherData.displayName=this.signUpForm.user.displayName,console.log(v.teacherData.displayName),Z.fire({icon:"success",title:"恭喜註冊成功"}),this.logInPage=!0,this.signUpForm.user.displayName="",this.signUpForm.user.email="",this.signUpForm.user.password="",this.signUpForm.user.confirmation="",v.SetFirebaseMemberData()}).catch(e=>{Z.fire({icon:"error",title:e})})},async signInWithGoogle(){const e=new ma;Xn(lt,e).then(t=>{v.user=t.user,v.isMember=!0,console.log(this.AccountSettingState),this.AccountSettingState?(Z.fire({timer:3e3,icon:"success",title:`Google帳號驗證成功，歡迎${t.user.displayName} `}),this.AccountSettingState=!1):(Z.fire({timer:3e3,icon:"success",title:`登入成功，歡迎${t.user.displayName} `,text:`上次登入時間：${Qn(t.user.metadata.lastSignInTime).format("YYYY/MM/DD")}`}),t.user.metadata.creationTime===t.user.metadata.lastSignInTime?(console.log("第一次登入"),v.teacherData.displayName=t.user.displayName,v.SetFirebaseMemberData()):St.push("/"))}).catch(t=>{Z.fire({icon:"error",title:t})})},async signInWithFacebook(){const e=new _a;Xn(lt,e).then(t=>{v.user=t.user,v.isMember=!0,console.log(this.AccountSettingState),this.AccountSettingState?(Z.fire({timer:3e3,icon:"success",title:`Facebook帳號驗證成功，歡迎${t.user.displayName} `}),this.AccountSettingState=!1):(Z.fire({timer:3e3,icon:"success",title:`登入成功，歡迎${t.user.displayName} `,text:`上次登入時間：${Qn(t.user.metadata.lastSignInTime).format("YYYY/MM/DD")}`}),t.user.metadata.creationTime===t.user.metadata.lastSignInTime?(console.log("第一次登入"),v.teacherData.displayName=t.user.displayName,v.SetFirebaseMemberData()):St.push("/"))}).catch(t=>{Z.fire({icon:"error",title:t})})},async signInWithGithub(){const e=new ya;Xn(lt,e).then(t=>{v.user=t.user,v.isMember=!0,console.log(this.AccountSettingState),this.AccountSettingState?(Z.fire({timer:3e3,icon:"success",title:`Google帳號驗證成功，歡迎${t.user.displayName} `}),this.AccountSettingState=!1):(Z.fire({timer:3e3,icon:"success",title:`登入成功，歡迎${t.user.displayName} `,text:`上次登入時間：${Qn(t.user.metadata.lastSignInTime).format("YYYY/MM/DD")}`}),t.user.metadata.creationTime===t.user.metadata.lastSignInTime?(console.log("第一次登入"),v.teacherData.displayName=t.user.displayName,v.SetFirebaseMemberData()):St.push("/"))}).catch(t=>{Z.fire({icon:"error",title:t})})},getCurrentUser(){Ea(lt,e=>{if(e){const t=lt.currentUser;this.userProviderData=t.providerData,console.log(t),t!==null&&t.providerData.forEach(n=>{console.log(n.providerId),n.providerId==="password"?this.ProviderState.password=!0:n.providerId==="google.com"?this.ProviderState.google=!0:n.providerId==="facebook"?this.ProviderState.facebook=!0:n.providerId==="github"&&(this.ProviderState.github=!0)})}else console.log("已登出")})},updateUserEmail(){const e=lt.currentUser;console.log(e)},sendEmailVerification(){},sendPasswordResetEmail(){va(lt,this.resetPasswordEmail).then(()=>{Z.fire({timer:3e3,icon:"success",title:"已送出密碼驗證信"}),this.resetPasswordEmail=""}).catch(e=>{Z.fire({timer:3e3,icon:"error",title:e})}),this.resetPasswordEmail=""}}});export{ec as c,lc as l};
