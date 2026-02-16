var m1=Object.defineProperty;var _f=t=>{throw TypeError(t)};var p1=(t,e,n)=>e in t?m1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tt=(t,e,n)=>p1(t,typeof e!="symbol"?e+"":e,n),_1=(t,e,n)=>e.has(t)||_f("Cannot "+n);var yf=(t,e,n)=>e.has(t)?_f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var ja=(t,e,n)=>(_1(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const et={},vs=[],tr=()=>{},ep=()=>!1,sc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Oh=t=>t.startsWith("onUpdate:"),Mt=Object.assign,Fh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y1=Object.prototype.hasOwnProperty,Ve=(t,e)=>y1.call(t,e),fe=Array.isArray,ws=t=>va(t)==="[object Map]",oc=t=>va(t)==="[object Set]",vf=t=>va(t)==="[object Date]",we=t=>typeof t=="function",pt=t=>typeof t=="string",Gn=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",tp=t=>(Je(t)||we(t))&&we(t.then)&&we(t.catch),np=Object.prototype.toString,va=t=>np.call(t),v1=t=>va(t).slice(8,-1),rp=t=>va(t)==="[object Object]",Nh=t=>pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ko=Lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ac=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},w1=/-\w/g,An=ac(t=>t.replace(w1,e=>e.slice(1).toUpperCase())),S1=/\B([A-Z])/g,Wi=ac(t=>t.replace(S1,"-$1").toLowerCase()),lc=ac(t=>t.charAt(0).toUpperCase()+t.slice(1)),qc=ac(t=>t?`on${lc(t)}`:""),ii=(t,e)=>!Object.is(t,e),fl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ip=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},b1=t=>{const e=pt(t)?Number(t):NaN;return isNaN(e)?t:e};let wf;const cc=()=>wf||(wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Is(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=pt(r)?C1(r):Is(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(pt(t)||Je(t))return t}const E1=/;(?![^(]*\))/g,M1=/:([^]+)/,x1=/\/\*[^]*?\*\//g;function C1(t){const e={};return t.replace(x1,"").split(E1).forEach(n=>{if(n){const r=n.split(M1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vt(t){let e="";if(pt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=vt(t[n]);r&&(e+=r+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const k1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P1=Lh(k1);function op(t){return!!t||t===""}function T1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ls(t[r],e[r]);return n}function Ls(t,e){if(t===e)return!0;let n=vf(t),r=vf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gn(t),r=Gn(e),n||r)return t===e;if(n=fe(t),r=fe(e),n||r)return n&&r?T1(t,e):!1;if(n=Je(t),r=Je(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ls(t[o],e[o]))return!1}}return String(t)===String(e)}function R1(t,e){return t.findIndex(n=>Ls(n,e))}const ap=t=>!!(t&&t.__v_isRef===!0),X=t=>pt(t)?t:t==null?"":fe(t)||Je(t)&&(t.toString===np||!we(t.toString))?ap(t)?X(t.value):JSON.stringify(t,lp,2):String(t),lp=(t,e)=>ap(e)?lp(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Hc(r,s)+" =>"]=i,n),{})}:oc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Hc(n))}:Gn(e)?Hc(e):Je(e)&&!fe(e)&&!rp(e)?String(e):e,Hc=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class cp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Qt;try{return Qt=this,e()}finally{Qt=n}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){this._on>0&&--this._on===0&&(Qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function A1(t){return new cp(t)}function I1(){return Qt}let nt;const Zc=new WeakSet;class up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zc.has(this)&&(Zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sf(this),fp(this);const e=nt,n=Fn;nt=this,Fn=!0;try{return this.fn()}finally{gp(this),nt=e,Fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zh(e);this.deps=this.depsTail=void 0,Sf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ou(this)&&this.run()}get dirty(){return Ou(this)}}let hp=0,Po,To;function dp(t,e=!1){if(t.flags|=8,e){t.next=To,To=t;return}t.next=Po,Po=t}function Dh(){hp++}function Gh(){if(--hp>0)return;if(To){let e=To;for(To=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Po;){let e=Po;for(Po=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gp(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),zh(r),L1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function Ou(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ko)||(t.globalVersion=Ko,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ou(t))))return;t.flags|=2;const e=t.dep,n=nt,r=Fn;nt=t,Fn=!0;try{fp(t);const i=t.fn(t._value);(e.version===0||ii(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{nt=n,Fn=r,gp(t),t.flags&=-3}}function zh(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)zh(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function L1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fn=!0;const pp=[];function Ar(){pp.push(Fn),Fn=!1}function Ir(){const t=pp.pop();Fn=t===void 0?!0:t}function Sf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=nt;nt=void 0;try{e()}finally{nt=n}}}let Ko=0;class O1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!nt||!Fn||nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==nt)n=this.activeLink=new O1(nt,this),nt.deps?(n.prevDep=nt.depsTail,nt.depsTail.nextDep=n,nt.depsTail=n):nt.deps=nt.depsTail=n,_p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=nt.depsTail,n.nextDep=void 0,nt.depsTail.nextDep=n,nt.depsTail=n,nt.deps===n&&(nt.deps=r)}return n}trigger(e){this.version++,Ko++,this.notify(e)}notify(e){Dh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gh()}}}function _p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_p(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Fu=new WeakMap,Li=Symbol(""),Nu=Symbol(""),$o=Symbol("");function Nt(t,e,n){if(Fn&&nt){let r=Fu.get(t);r||Fu.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new Bh),i.map=r,i.key=n),i.track()}}function Er(t,e,n,r,i,s){const o=Fu.get(t);if(!o){Ko++;return}const a=l=>{l&&l.trigger()};if(Dh(),e==="clear")o.forEach(a);else{const l=fe(t),c=l&&Nh(n);if(l&&n==="length"){const u=Number(r);o.forEach((h,d)=>{(d==="length"||d===$o||!Gn(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get($o)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Li)),ws(t)&&a(o.get(Nu)));break;case"delete":l||(a(o.get(Li)),ws(t)&&a(o.get(Nu)));break;case"set":ws(t)&&a(o.get(Li));break}}Gh()}function Yi(t){const e=Be(t);return e===t?e:(Nt(e,"iterate",$o),kn(t)?e:e.map(kt))}function uc(t){return Nt(t=Be(t),"iterate",$o),t}const F1={__proto__:null,[Symbol.iterator](){return Xc(this,Symbol.iterator,kt)},concat(...t){return Yi(this).concat(...t.map(e=>fe(e)?Yi(e):e))},entries(){return Xc(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return fr(this,"every",t,e,void 0,arguments)},filter(t,e){return fr(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return fr(this,"find",t,e,kt,arguments)},findIndex(t,e){return fr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return fr(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return fr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return fr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yc(this,"includes",t)},indexOf(...t){return Yc(this,"indexOf",t)},join(t){return Yi(this).join(t)},lastIndexOf(...t){return Yc(this,"lastIndexOf",t)},map(t,e){return fr(this,"map",t,e,void 0,arguments)},pop(){return ao(this,"pop")},push(...t){return ao(this,"push",t)},reduce(t,...e){return bf(this,"reduce",t,e)},reduceRight(t,...e){return bf(this,"reduceRight",t,e)},shift(){return ao(this,"shift")},some(t,e){return fr(this,"some",t,e,void 0,arguments)},splice(...t){return ao(this,"splice",t)},toReversed(){return Yi(this).toReversed()},toSorted(t){return Yi(this).toSorted(t)},toSpliced(...t){return Yi(this).toSpliced(...t)},unshift(...t){return ao(this,"unshift",t)},values(){return Xc(this,"values",kt)}};function Xc(t,e,n){const r=uc(t),i=r[e]();return r!==t&&!kn(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const N1=Array.prototype;function fr(t,e,n,r,i,s){const o=uc(t),a=o!==t&&!kn(t),l=o[e];if(l!==N1[e]){const h=l.apply(t,s);return a?kt(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,kt(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,r);return a&&i?i(u):u}function bf(t,e,n,r){const i=uc(t);let s=n;return i!==t&&(kn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,kt(a),l,t)}),i[e](s,...r)}function Yc(t,e,n){const r=Be(t);Nt(r,"iterate",$o);const i=r[e](...n);return(i===-1||i===!1)&&Vh(n[0])?(n[0]=Be(n[0]),r[e](...n)):i}function ao(t,e,n=[]){Ar(),Dh();const r=Be(t)[e].apply(t,n);return Gh(),Ir(),r}const D1=Lh("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function G1(t){Gn(t)||(t=String(t));const e=Be(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?H1:Ep:s?bp:Sp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!i){let l;if(o&&(l=F1[n]))return l;if(n==="hasOwnProperty")return G1}const a=Reflect.get(e,n,jt(e)?e:r);if((Gn(n)?yp.has(n):D1(n))||(i||Nt(e,"get",n),s))return a;if(jt(a)){const l=o&&Nh(n)?a:a.value;return i&&Je(l)?Gu(l):l}return Je(a)?i?Gu(a):ai(a):a}}class wp extends vp{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const l=li(s);if(!kn(r)&&!li(r)&&(s=Be(s),r=Be(r)),!fe(e)&&jt(s)&&!jt(r))return l||(s.value=r),!0}const o=fe(e)&&Nh(n)?Number(n)<e.length:Ve(e,n),a=Reflect.set(e,n,r,jt(e)?e:i);return e===Be(i)&&(o?ii(r,s)&&Er(e,"set",n,r):Er(e,"add",n,r)),a}deleteProperty(e,n){const r=Ve(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Er(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Gn(n)||!yp.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",fe(e)?"length":Li),Reflect.ownKeys(e)}}class z1 extends vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const B1=new wp,j1=new z1,W1=new wp(!0);const Du=t=>t,Wa=t=>Reflect.getPrototypeOf(t);function V1(t,e,n){return function(...r){const i=this.__v_raw,s=Be(i),o=ws(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Du:e?El:kt;return!e&&Nt(s,"iterate",l?Nu:Li),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function U1(t,e){const n={get(i){const s=this.__v_raw,o=Be(s),a=Be(i);t||(ii(i,a)&&Nt(o,"get",i),Nt(o,"get",a));const{has:l}=Wa(o),c=e?Du:t?El:kt;if(l.call(o,i))return c(s.get(i));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Nt(Be(i),"iterate",Li),i.size},has(i){const s=this.__v_raw,o=Be(s),a=Be(i);return t||(ii(i,a)&&Nt(o,"has",i),Nt(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=Be(a),c=e?Du:t?El:kt;return!t&&Nt(l,"iterate",Li),a.forEach((u,h)=>i.call(s,c(u),c(h),o))}};return Mt(n,t?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(i){!e&&!kn(i)&&!li(i)&&(i=Be(i));const s=Be(this);return Wa(s).has.call(s,i)||(s.add(i),Er(s,"add",i,i)),this},set(i,s){!e&&!kn(s)&&!li(s)&&(s=Be(s));const o=Be(this),{has:a,get:l}=Wa(o);let c=a.call(o,i);c||(i=Be(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,s),c?ii(s,u)&&Er(o,"set",i,s):Er(o,"add",i,s),this},delete(i){const s=Be(this),{has:o,get:a}=Wa(s);let l=o.call(s,i);l||(i=Be(i),l=o.call(s,i)),a&&a.call(s,i);const c=s.delete(i);return l&&Er(s,"delete",i,void 0),c},clear(){const i=Be(this),s=i.size!==0,o=i.clear();return s&&Er(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=V1(i,t,e)}),n}function jh(t,e){const n=U1(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ve(n,i)&&i in r?n:r,i,s)}const K1={get:jh(!1,!1)},$1={get:jh(!1,!0)},q1={get:jh(!0,!1)};const Sp=new WeakMap,bp=new WeakMap,Ep=new WeakMap,H1=new WeakMap;function Z1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X1(t){return t.__v_skip||!Object.isExtensible(t)?0:Z1(v1(t))}function ai(t){return li(t)?t:Wh(t,!1,B1,K1,Sp)}function Mp(t){return Wh(t,!1,W1,$1,bp)}function Gu(t){return Wh(t,!0,j1,q1,Ep)}function Wh(t,e,n,r,i){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=X1(t);if(s===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function Ss(t){return li(t)?Ss(t.__v_raw):!!(t&&t.__v_isReactive)}function li(t){return!!(t&&t.__v_isReadonly)}function kn(t){return!!(t&&t.__v_isShallow)}function Vh(t){return t?!!t.__v_raw:!1}function Be(t){const e=t&&t.__v_raw;return e?Be(e):t}function Y1(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&ip(t,"__v_skip",!0),t}const kt=t=>Je(t)?ai(t):t,El=t=>Je(t)?Gu(t):t;function jt(t){return t?t.__v_isRef===!0:!1}function Tt(t){return xp(t,!1)}function J1(t){return xp(t,!0)}function xp(t,e){return jt(t)?t:new Q1(t,e)}class Q1{constructor(e,n){this.dep=new Bh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Be(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||kn(e)||li(e);e=r?e:Be(e),ii(e,n)&&(this._rawValue=e,this._value=r?e:kt(e),this.dep.trigger())}}function Cr(t){return jt(t)?t.value:t}const ev={get:(t,e,n)=>e==="__v_raw"?t:Cr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return jt(i)&&!jt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Cp(t){return Ss(t)?t:new Proxy(t,ev)}class tv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&nt!==this)return dp(this,!0),!0}get value(){const e=this.dep.track();return mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nv(t,e,n=!1){let r,i;return we(t)?r=t:(r=t.get,i=t.set),new tv(r,i,n)}const Ua={},Ml=new WeakMap;let Mi;function rv(t,e=!1,n=Mi){if(n){let r=Ml.get(n);r||Ml.set(n,r=[]),r.push(t)}}function iv(t,e,n=et){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,c=b=>i?b:kn(b)||i===!1||i===0?Mr(b,1):Mr(b);let u,h,d,f,g=!1,m=!1;if(jt(t)?(h=()=>t.value,g=kn(t)):Ss(t)?(h=()=>c(t),g=!0):fe(t)?(m=!0,g=t.some(b=>Ss(b)||kn(b)),h=()=>t.map(b=>{if(jt(b))return b.value;if(Ss(b))return c(b);if(we(b))return l?l(b,2):b()})):we(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){Ar();try{d()}finally{Ir()}}const b=Mi;Mi=u;try{return l?l(t,3,[f]):t(f)}finally{Mi=b}}:h=tr,e&&i){const b=h,E=i===!0?1/0:i;h=()=>Mr(b(),E)}const p=I1(),_=()=>{u.stop(),p&&p.active&&Fh(p.effects,u)};if(s&&e){const b=e;e=(...E)=>{b(...E),_()}}let y=m?new Array(t.length).fill(Ua):Ua;const w=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const E=u.run();if(i||g||(m?E.some((P,k)=>ii(P,y[k])):ii(E,y))){d&&d();const P=Mi;Mi=u;try{const k=[E,y===Ua?void 0:m&&y[0]===Ua?[]:y,f];y=E,l?l(e,3,k):e(...k)}finally{Mi=P}}}else u.run()};return a&&a(w),u=new up(h),u.scheduler=o?()=>o(w,!1):w,f=b=>rv(b,!1,u),d=u.onStop=()=>{const b=Ml.get(u);if(b){if(l)l(b,4);else for(const E of b)E();Ml.delete(u)}},e?r?w(!0):y=u.run():o?o(w.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Mr(t,e=1/0,n){if(e<=0||!Je(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,jt(t))Mr(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)Mr(t[r],e,n);else if(oc(t)||ws(t))t.forEach(r=>{Mr(r,e,n)});else if(rp(t)){for(const r in t)Mr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Mr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wa(t,e,n,r){try{return r?t(...r):t()}catch(i){hc(i,e,n)}}function zn(t,e,n,r){if(we(t)){const i=wa(t,e,n,r);return i&&tp(i)&&i.catch(s=>{hc(s,e,n)}),i}if(fe(t)){const i=[];for(let s=0;s<t.length;s++)i.push(zn(t[s],e,n,r));return i}}function hc(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(s){Ar(),wa(s,null,10,[t,l,c]),Ir();return}}sv(t,n,i,r,o)}function sv(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const Zt=[];let $n=-1;const bs=[];let qr=null,ss=0;const kp=Promise.resolve();let xl=null;function Uh(t){const e=xl||kp;return t?e.then(this?t.bind(this):t):e}function ov(t){let e=$n+1,n=Zt.length;for(;e<n;){const r=e+n>>>1,i=Zt[r],s=qo(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function Kh(t){if(!(t.flags&1)){const e=qo(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=qo(n)?Zt.push(t):Zt.splice(ov(e),0,t),t.flags|=1,Pp()}}function Pp(){xl||(xl=kp.then(Rp))}function av(t){fe(t)?bs.push(...t):qr&&t.id===-1?qr.splice(ss+1,0,t):t.flags&1||(bs.push(t),t.flags|=1),Pp()}function Ef(t,e,n=$n+1){for(;n<Zt.length;n++){const r=Zt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Zt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Tp(t){if(bs.length){const e=[...new Set(bs)].sort((n,r)=>qo(n)-qo(r));if(bs.length=0,qr){qr.push(...e);return}for(qr=e,ss=0;ss<qr.length;ss++){const n=qr[ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qr=null,ss=0}}const qo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Rp(t){try{for($n=0;$n<Zt.length;$n++){const e=Zt[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<Zt.length;$n++){const e=Zt[$n];e&&(e.flags&=-2)}$n=-1,Zt.length=0,Tp(),xl=null,(Zt.length||bs.length)&&Rp()}}let Pt=null,Ap=null;function Cl(t){const e=Pt;return Pt=t,Ap=t&&t.type.__scopeId||null,e}function sr(t,e=Pt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Rl(-1);const s=Cl(e);let o;try{o=t(...i)}finally{Cl(s),r._d&&Rl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kl(t,e){if(Pt===null)return t;const n=_c(Pt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=et]=e[i];s&&(we(s)&&(s={mounted:s,updated:s}),s.deep&&Mr(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function yi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Ar(),zn(l,n,8,[t.el,a,t,e]),Ir())}}const Ip=Symbol("_vte"),Lp=t=>t.__isTeleport,Ro=t=>t&&(t.disabled||t.disabled===""),Mf=t=>t&&(t.defer||t.defer===""),xf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Cf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,zu=(t,e)=>{const n=t&&t.to;return pt(n)?e?e(n):null:n},Op={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:g,createText:m,createComment:p}}=c,_=Ro(e.props);let{shapeFlag:y,children:w,dynamicChildren:b}=e;if(t==null){const E=e.el=m(""),P=e.anchor=m("");f(E,n,r),f(P,n,r);const k=(C,V)=>{y&16&&u(w,C,V,i,s,o,a,l)},R=()=>{const C=e.target=zu(e.props,g),V=Np(C,e,m,f);C&&(o!=="svg"&&xf(C)?o="svg":o!=="mathml"&&Cf(C)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(C),_||(k(C,V),gl(e,!1)))};_&&(k(n,P),gl(e,!0)),Mf(e.props)?(e.el.__isMounted=!1,$t(()=>{R(),delete e.el.__isMounted},s)):R()}else{if(Mf(e.props)&&t.el.__isMounted===!1){$t(()=>{Op.process(t,e,n,r,i,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const E=e.anchor=t.anchor,P=e.target=t.target,k=e.targetAnchor=t.targetAnchor,R=Ro(t.props),C=R?n:P,V=R?E:k;if(o==="svg"||xf(P)?o="svg":(o==="mathml"||Cf(P))&&(o="mathml"),b?(d(t.dynamicChildren,b,C,i,s,o,a),Zh(t,e,!0)):l||h(t,e,C,V,i,s,o,a,!1),_)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ka(e,n,E,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const W=e.target=zu(e.props,g);W&&Ka(e,W,null,c,0)}else R&&Ka(e,P,k,c,1);gl(e,_)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=t;if(h&&(i(c),i(u)),s&&i(l),o&16){const f=s||!Ro(d);for(let g=0;g<a.length;g++){const m=a[g];r(m,e,n,f,!!m.dynamicChildren)}}},move:Ka,hydrate:lv};function Ka(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),(!h||Ro(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&r(a,e,n)}function lv(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function d(m,p,_,y){p.anchor=h(o(m),p,a(m),n,r,i,s),p.targetStart=_,p.targetAnchor=y}const f=e.target=zu(e.props,l),g=Ro(e.props);if(f){const m=f._lpa||f.firstChild;if(e.shapeFlag&16)if(g)d(t,e,m,m&&o(m));else{e.anchor=o(t);let p=m;for(;p;){if(p&&p.nodeType===8){if(p.data==="teleport start anchor")e.targetStart=p;else if(p.data==="teleport anchor"){e.targetAnchor=p,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}p=o(p)}e.targetAnchor||Np(f,e,u,c),h(m&&o(m),e,f,n,r,i,s)}gl(e,g)}else g&&e.shapeFlag&16&&d(t,e,t,o(t));return e.anchor&&o(e.anchor)}const Fp=Op;function gl(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Np(t,e,n,r){const i=e.targetStart=n(""),s=e.targetAnchor=n("");return i[Ip]=s,t&&(r(i,t),r(s,t)),s}const Sr=Symbol("_leaveCb"),$a=Symbol("_enterCb");function cv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gc(()=>{t.isMounted=!0}),$h(()=>{t.isUnmounting=!0}),t}const En=[Function,Array],Dp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},Gp=t=>{const e=t.subTree;return e.component?Gp(e.component):e},uv={name:"BaseTransition",props:Dp,setup(t,{slots:e}){const n=h0(),r=cv();return()=>{const i=e.default&&jp(e.default(),!0);if(!i||!i.length)return;const s=zp(i),o=Be(t),{mode:a}=o;if(r.isLeaving)return Jc(s);const l=kf(s);if(!l)return Jc(s);let c=Bu(l,o,r,n,h=>c=h);l.type!==Dt&&Ho(l,c);let u=n.subTree&&kf(n.subTree);if(u&&u.type!==Dt&&!ki(u,l)&&Gp(n).type!==Dt){let h=Bu(u,o,r,n);if(Ho(u,h),a==="out-in"&&l.type!==Dt)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},Jc(s);a==="in-out"&&l.type!==Dt?h.delayLeave=(d,f,g)=>{const m=Bp(r,u);m[String(u.key)]=u,d[Sr]=()=>{f(),d[Sr]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function zp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Dt){e=n;break}}return e}const hv=uv;function Bp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Bu(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:p,onAppear:_,onAfterAppear:y,onAppearCancelled:w}=e,b=String(t.key),E=Bp(n,t),P=(C,V)=>{C&&zn(C,r,9,V)},k=(C,V)=>{const W=V[1];P(C,V),fe(C)?C.every(A=>A.length<=1)&&W():C.length<=1&&W()},R={mode:o,persisted:a,beforeEnter(C){let V=l;if(!n.isMounted)if(s)V=p||l;else return;C[Sr]&&C[Sr](!0);const W=E[b];W&&ki(t,W)&&W.el[Sr]&&W.el[Sr](),P(V,[C])},enter(C){let V=c,W=u,A=h;if(!n.isMounted)if(s)V=_||c,W=y||u,A=w||h;else return;let q=!1;const re=C[$a]=ce=>{q||(q=!0,ce?P(A,[C]):P(W,[C]),R.delayedLeave&&R.delayedLeave(),C[$a]=void 0)};V?k(V,[C,re]):re()},leave(C,V){const W=String(t.key);if(C[$a]&&C[$a](!0),n.isUnmounting)return V();P(d,[C]);let A=!1;const q=C[Sr]=re=>{A||(A=!0,V(),re?P(m,[C]):P(g,[C]),C[Sr]=void 0,E[W]===t&&delete E[W])};E[W]=t,f?k(f,[C,q]):q()},clone(C){const V=Bu(C,e,n,r,i);return i&&i(V),V}};return R}function Jc(t){if(dc(t))return t=ci(t),t.children=null,t}function kf(t){if(!dc(t))return Lp(t.type)&&t.children?zp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&we(n.default))return n.default()}}function Ho(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ho(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jp(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Re?(o.patchFlag&128&&i++,r=r.concat(jp(o.children,e,a))):(e||o.type!==Dt)&&r.push(a!=null?ci(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Wp(t,e){return we(t)?Mt({name:t.name},e,{setup:t}):t}function Vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Pl=new WeakMap;function Ao(t,e,n,r,i=!1){if(fe(t)){t.forEach((g,m)=>Ao(g,e&&(fe(e)?e[m]:e),n,r,i));return}if(Es(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ao(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?_c(r.component):r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,h=a.setupState,d=Be(h),f=h===et?ep:g=>Ve(d,g);if(c!=null&&c!==l){if(Pf(e),pt(c))u[c]=null,f(c)&&(h[c]=null);else if(jt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(we(l))wa(l,a,12,[o,u]);else{const g=pt(l),m=jt(l);if(g||m){const p=()=>{if(t.f){const _=g?f(l)?h[l]:u[l]:l.value;if(i)fe(_)&&Fh(_,s);else if(fe(_))_.includes(s)||_.push(s);else if(g)u[l]=[s],f(l)&&(h[l]=u[l]);else{const y=[s];l.value=y,t.k&&(u[t.k]=y)}}else g?(u[l]=o,f(l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const _=()=>{p(),Pl.delete(t)};_.id=-1,Pl.set(t,_),$t(_,n)}else Pf(t),p()}}}function Pf(t){const e=Pl.get(t);e&&(e.flags|=8,Pl.delete(t))}cc().requestIdleCallback;cc().cancelIdleCallback;const Es=t=>!!t.type.__asyncLoader,dc=t=>t.type.__isKeepAlive;function dv(t,e){Up(t,"a",e)}function fv(t,e){Up(t,"da",e)}function Up(t,e,n=Gt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)dc(i.parent.vnode)&&gv(r,e,n,i),i=i.parent}}function gv(t,e,n,r){const i=fc(e,t,r,!0);Kp(()=>{Fh(r[e],i)},n)}function fc(t,e,n=Gt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ar();const a=Sa(n),l=zn(e,n,t,o);return a(),Ir(),l});return r?i.unshift(s):i.push(s),s}}const Or=t=>(e,n=Gt)=>{(!Yo||t==="sp")&&fc(t,(...r)=>e(...r),n)},mv=Or("bm"),gc=Or("m"),pv=Or("bu"),_v=Or("u"),$h=Or("bum"),Kp=Or("um"),yv=Or("sp"),vv=Or("rtg"),wv=Or("rtc");function Sv(t,e=Gt){fc("ec",t,e)}const bv="components";function Hs(t,e){return Mv(bv,t,!0,e)||t}const Ev=Symbol.for("v-ndc");function Mv(t,e,n=!0,r=!1){const i=Pt||Gt;if(i){const s=i.type;{const a=dw(s,!1);if(a&&(a===e||a===An(e)||a===lc(An(e))))return s}const o=Tf(i[t]||s[t],e)||Tf(i.appContext[t],e);return!o&&r?s:o}}function Tf(t,e){return t&&(t[e]||t[An(e)]||t[lc(An(e))])}function gt(t,e,n,r){let i;const s=n,o=fe(t);if(o||pt(t)){const a=o&&Ss(t);let l=!1,c=!1;a&&(l=!kn(t),c=li(t),t=uc(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(l?c?El(kt(t[u])):kt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(Je(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,s)}}else i=[];return i}function xv(t,e,n={},r,i){if(Pt.ce||Pt.parent&&Es(Pt.parent)&&Pt.parent.ce){const c=Object.keys(n).length>0;return F(),yt(Re,null,[Xe("slot",n,r)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),F();const o=s&&$p(s(n)),a=n.key||o&&o.key,l=yt(Re,{key:(a&&!Gn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function $p(t){return t.some(e=>Xo(e)?!(e.type===Dt||e.type===Re&&!$p(e.children)):!0)?t:null}const ju=t=>t?d0(t)?_c(t):ju(t.parent):null,Io=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ju(t.parent),$root:t=>ju(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hp(t),$forceUpdate:t=>t.f||(t.f=()=>{Kh(t.update)}),$nextTick:t=>t.n||(t.n=Uh.bind(t.proxy)),$watch:t=>$v.bind(t)}),Qc=(t,e)=>t!==et&&!t.__isScriptSetup&&Ve(t,e),Cv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Qc(r,e))return o[e]=1,r[e];if(i!==et&&Ve(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ve(c,e))return o[e]=3,s[e];if(n!==et&&Ve(n,e))return o[e]=4,n[e];Wu&&(o[e]=0)}}const u=Io[e];let h,d;if(u)return e==="$attrs"&&Nt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==et&&Ve(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ve(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Qc(i,e)?(i[e]=n,!0):r!==et&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s,type:o}},a){let l,c;return!!(n[a]||t!==et&&a[0]!=="$"&&Ve(t,a)||Qc(e,a)||(l=s[0])&&Ve(l,a)||Ve(r,a)||Ve(Io,a)||Ve(i.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rf(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wu=!0;function kv(t){const e=Hp(t),n=t.proxy,r=t.ctx;Wu=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:m,deactivated:p,beforeDestroy:_,beforeUnmount:y,destroyed:w,unmounted:b,render:E,renderTracked:P,renderTriggered:k,errorCaptured:R,serverPrefetch:C,expose:V,inheritAttrs:W,components:A,directives:q,filters:re}=e;if(c&&Pv(c,r,null),o)for(const ie in o){const ee=o[ie];we(ee)&&(r[ie]=ee.bind(n))}if(i){const ie=i.call(n,n);Je(ie)&&(t.data=ai(ie))}if(Wu=!0,s)for(const ie in s){const ee=s[ie],Ie=we(ee)?ee.bind(n,n):we(ee.get)?ee.get.bind(n,n):tr,me=!we(ee)&&we(ee.set)?ee.set.bind(n):tr,ye=ne({get:Ie,set:me});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ge=>ye.value=ge})}if(a)for(const ie in a)qp(a[ie],r,n,ie);if(l){const ie=we(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ee=>{ml(ee,ie[ee])})}u&&Af(u,t,"c");function z(ie,ee){fe(ee)?ee.forEach(Ie=>ie(Ie.bind(n))):ee&&ie(ee.bind(n))}if(z(mv,h),z(gc,d),z(pv,f),z(_v,g),z(dv,m),z(fv,p),z(Sv,R),z(wv,P),z(vv,k),z($h,y),z(Kp,b),z(yv,C),fe(V))if(V.length){const ie=t.exposed||(t.exposed={});V.forEach(ee=>{Object.defineProperty(ie,ee,{get:()=>n[ee],set:Ie=>n[ee]=Ie,enumerable:!0})})}else t.exposed||(t.exposed={});E&&t.render===tr&&(t.render=E),W!=null&&(t.inheritAttrs=W),A&&(t.components=A),q&&(t.directives=q),C&&Vp(t)}function Pv(t,e,n=tr){fe(t)&&(t=Vu(t));for(const r in t){const i=t[r];let s;Je(i)?"default"in i?s=Pn(i.from||r,i.default,!0):s=Pn(i.from||r):s=Pn(i),jt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Af(t,e,n){zn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){let i=r.includes(".")?o0(n,r):()=>n[r];if(pt(t)){const s=e[t];we(s)&&Tn(i,s)}else if(we(t))Tn(i,t.bind(n));else if(Je(t))if(fe(t))t.forEach(s=>qp(s,e,n,r));else{const s=we(t.handler)?t.handler.bind(n):e[t.handler];we(s)&&Tn(i,s,t)}}function Hp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Tl(l,c,o,!0)),Tl(l,e,o)),Je(e)&&s.set(e,l),l}function Tl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Tl(t,s,n,!0),i&&i.forEach(o=>Tl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Tv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tv={data:If,props:Lf,emits:Lf,methods:wo,computed:wo,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:wo,directives:wo,watch:Av,provide:If,inject:Rv};function If(t,e){return e?t?function(){return Mt(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function Rv(t,e){return wo(Vu(t),Vu(e))}function Vu(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function wo(t,e){return t?Mt(Object.create(null),t,e):e}function Lf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Mt(Object.create(null),Rf(t),Rf(e??{})):e}function Av(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const r in e)n[r]=Kt(t[r],e[r]);return n}function Zp(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iv=0;function Lv(t,e){return function(r,i=null){we(r)||(r=Mt({},r)),i!=null&&!Je(i)&&(i=null);const s=Zp(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Iv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:gw,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&we(u.install)?(o.add(u),u.install(c,...h)):we(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Xe(r,i);return f.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(f,u,d),l=!0,c._container=u,u.__vue_app__=c,_c(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Ms;Ms=c;try{return u()}finally{Ms=h}}};return c}}let Ms=null;function ml(t,e){if(Gt){let n=Gt.provides;const r=Gt.parent&&Gt.parent.provides;r===n&&(n=Gt.provides=Object.create(r)),n[t]=e}}function Pn(t,e,n=!1){const r=h0();if(r||Ms){let i=Ms?Ms._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&we(e)?e.call(r&&r.proxy):e}}const Xp={},Yp=()=>Object.create(Xp),Jp=t=>Object.getPrototypeOf(t)===Xp;function Ov(t,e,n,r=!1){const i={},s=Yp();t.propsDefaults=Object.create(null),Qp(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Mp(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Fv(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Be(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(mc(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ve(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const g=An(d);i[g]=Uu(l,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{Qp(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!Ve(e,h)&&((u=Wi(h))===h||!Ve(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Uu(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ve(e,h))&&(delete s[h],c=!0)}c&&Er(t.attrs,"set","")}function Qp(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ko(l))continue;const c=e[l];let u;i&&Ve(i,u=An(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:mc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Be(n),c=a||et;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Uu(i,l,h,c[h],t,!Ve(c,h))}}return o}function Uu(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Ve(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&we(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Sa(i);r=c[n]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Wi(n))&&(r=!0))}return r}const Nv=new WeakMap;function e0(t,e,n=!1){const r=n?Nv:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!we(t)){const u=h=>{l=!0;const[d,f]=e0(h,e,!0);Mt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Je(t)&&r.set(t,vs),vs;if(fe(s))for(let u=0;u<s.length;u++){const h=An(s[u]);Of(h)&&(o[h]=et)}else if(s)for(const u in s){const h=An(u);if(Of(h)){const d=s[u],f=o[h]=fe(d)||we(d)?{type:d}:Mt({},d),g=f.type;let m=!1,p=!0;if(fe(g))for(let _=0;_<g.length;++_){const y=g[_],w=we(y)&&y.name;if(w==="Boolean"){m=!0;break}else w==="String"&&(p=!1)}else m=we(g)&&g.name==="Boolean";f[0]=m,f[1]=p,(m||Ve(f,"default"))&&a.push(h)}}const c=[o,a];return Je(t)&&r.set(t,c),c}function Of(t){return t[0]!=="$"&&!ko(t)}const qh=t=>t==="_"||t==="_ctx"||t==="$stable",Hh=t=>fe(t)?t.map(qn):[qn(t)],Dv=(t,e,n)=>{if(e._n)return e;const r=sr((...i)=>Hh(e(...i)),n);return r._c=!1,r},t0=(t,e,n)=>{const r=t._ctx;for(const i in t){if(qh(i))continue;const s=t[i];if(we(s))e[i]=Dv(i,s,r);else if(s!=null){const o=Hh(s);e[i]=()=>o}}},n0=(t,e)=>{const n=Hh(e);t.slots.default=()=>n},r0=(t,e,n)=>{for(const r in e)(n||!qh(r))&&(t[r]=e[r])},Gv=(t,e,n)=>{const r=t.slots=Yp();if(t.vnode.shapeFlag&32){const i=e._;i?(r0(r,e,n),n&&ip(r,"_",i,!0)):t0(e,r)}else e&&n0(t,e)},zv=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=et;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:r0(i,e,n):(s=!e.$stable,t0(e,i)),o=e}else e&&(n0(t,e),o={default:1});if(s)for(const a in i)!qh(a)&&o[a]==null&&delete i[a]},$t=ew;function Bv(t){return jv(t)}function jv(t,e){const n=cc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=tr,insertStaticContent:g}=t,m=(v,M,x,L=null,N=null,I=null,Z=void 0,$=null,j=!!M.dynamicChildren)=>{if(v===M)return;v&&!ki(v,M)&&(L=T(v),ge(v,N,I,!0),v=null),M.patchFlag===-2&&(j=!1,M.dynamicChildren=null);const{type:D,ref:se,shapeFlag:Y}=M;switch(D){case pc:p(v,M,x,L);break;case Dt:_(v,M,x,L);break;case tu:v==null&&y(M,x,L,Z);break;case Re:A(v,M,x,L,N,I,Z,$,j);break;default:Y&1?E(v,M,x,L,N,I,Z,$,j):Y&6?q(v,M,x,L,N,I,Z,$,j):(Y&64||Y&128)&&D.process(v,M,x,L,N,I,Z,$,j,te)}se!=null&&N?Ao(se,v&&v.ref,I,M||v,!M):se==null&&v&&v.ref!=null&&Ao(v.ref,null,I,v,!0)},p=(v,M,x,L)=>{if(v==null)r(M.el=a(M.children),x,L);else{const N=M.el=v.el;M.children!==v.children&&c(N,M.children)}},_=(v,M,x,L)=>{v==null?r(M.el=l(M.children||""),x,L):M.el=v.el},y=(v,M,x,L)=>{[v.el,v.anchor]=g(v.children,M,x,L,v.el,v.anchor)},w=({el:v,anchor:M},x,L)=>{let N;for(;v&&v!==M;)N=d(v),r(v,x,L),v=N;r(M,x,L)},b=({el:v,anchor:M})=>{let x;for(;v&&v!==M;)x=d(v),i(v),v=x;i(M)},E=(v,M,x,L,N,I,Z,$,j)=>{if(M.type==="svg"?Z="svg":M.type==="math"&&(Z="mathml"),v==null)P(M,x,L,N,I,Z,$,j);else{const D=v.el&&v.el._isVueCE?v.el:null;try{D&&D._beginPatch(),C(v,M,N,I,Z,$,j)}finally{D&&D._endPatch()}}},P=(v,M,x,L,N,I,Z,$)=>{let j,D;const{props:se,shapeFlag:Y,transition:oe,dirs:ue}=v;if(j=v.el=o(v.type,I,se&&se.is,se),Y&8?u(j,v.children):Y&16&&R(v.children,j,null,L,N,eu(v,I),Z,$),ue&&yi(v,null,L,"created"),k(j,v,v.scopeId,Z,L),se){for(const Pe in se)Pe!=="value"&&!ko(Pe)&&s(j,Pe,null,se[Pe],I,L);"value"in se&&s(j,"value",null,se.value,I),(D=se.onVnodeBeforeMount)&&Kn(D,L,v)}ue&&yi(v,null,L,"beforeMount");const be=Wv(N,oe);be&&oe.beforeEnter(j),r(j,M,x),((D=se&&se.onVnodeMounted)||be||ue)&&$t(()=>{D&&Kn(D,L,v),be&&oe.enter(j),ue&&yi(v,null,L,"mounted")},N)},k=(v,M,x,L,N)=>{if(x&&f(v,x),L)for(let I=0;I<L.length;I++)f(v,L[I]);if(N){let I=N.subTree;if(M===I||l0(I.type)&&(I.ssContent===M||I.ssFallback===M)){const Z=N.vnode;k(v,Z,Z.scopeId,Z.slotScopeIds,N.parent)}}},R=(v,M,x,L,N,I,Z,$,j=0)=>{for(let D=j;D<v.length;D++){const se=v[D]=$?Hr(v[D]):qn(v[D]);m(null,se,M,x,L,N,I,Z,$)}},C=(v,M,x,L,N,I,Z)=>{const $=M.el=v.el;let{patchFlag:j,dynamicChildren:D,dirs:se}=M;j|=v.patchFlag&16;const Y=v.props||et,oe=M.props||et;let ue;if(x&&vi(x,!1),(ue=oe.onVnodeBeforeUpdate)&&Kn(ue,x,M,v),se&&yi(M,v,x,"beforeUpdate"),x&&vi(x,!0),(Y.innerHTML&&oe.innerHTML==null||Y.textContent&&oe.textContent==null)&&u($,""),D?V(v.dynamicChildren,D,$,x,L,eu(M,N),I):Z||ee(v,M,$,null,x,L,eu(M,N),I,!1),j>0){if(j&16)W($,Y,oe,x,N);else if(j&2&&Y.class!==oe.class&&s($,"class",null,oe.class,N),j&4&&s($,"style",Y.style,oe.style,N),j&8){const be=M.dynamicProps;for(let Pe=0;Pe<be.length;Pe++){const ke=be[Pe],De=Y[ke],At=oe[ke];(At!==De||ke==="value")&&s($,ke,De,At,N,x)}}j&1&&v.children!==M.children&&u($,M.children)}else!Z&&D==null&&W($,Y,oe,x,N);((ue=oe.onVnodeUpdated)||se)&&$t(()=>{ue&&Kn(ue,x,M,v),se&&yi(M,v,x,"updated")},L)},V=(v,M,x,L,N,I,Z)=>{for(let $=0;$<M.length;$++){const j=v[$],D=M[$],se=j.el&&(j.type===Re||!ki(j,D)||j.shapeFlag&198)?h(j.el):x;m(j,D,se,null,L,N,I,Z,!0)}},W=(v,M,x,L,N)=>{if(M!==x){if(M!==et)for(const I in M)!ko(I)&&!(I in x)&&s(v,I,M[I],null,N,L);for(const I in x){if(ko(I))continue;const Z=x[I],$=M[I];Z!==$&&I!=="value"&&s(v,I,$,Z,N,L)}"value"in x&&s(v,"value",M.value,x.value,N)}},A=(v,M,x,L,N,I,Z,$,j)=>{const D=M.el=v?v.el:a(""),se=M.anchor=v?v.anchor:a("");let{patchFlag:Y,dynamicChildren:oe,slotScopeIds:ue}=M;ue&&($=$?$.concat(ue):ue),v==null?(r(D,x,L),r(se,x,L),R(M.children||[],x,se,N,I,Z,$,j)):Y>0&&Y&64&&oe&&v.dynamicChildren?(V(v.dynamicChildren,oe,x,N,I,Z,$),(M.key!=null||N&&M===N.subTree)&&Zh(v,M,!0)):ee(v,M,x,se,N,I,Z,$,j)},q=(v,M,x,L,N,I,Z,$,j)=>{M.slotScopeIds=$,v==null?M.shapeFlag&512?N.ctx.activate(M,x,L,Z,j):re(M,x,L,N,I,Z,j):ce(v,M,j)},re=(v,M,x,L,N,I,Z)=>{const $=v.component=aw(v,L,N);if(dc(v)&&($.ctx.renderer=te),lw($,!1,Z),$.asyncDep){if(N&&N.registerDep($,z,Z),!v.el){const j=$.subTree=Xe(Dt);_(null,j,M,x),v.placeholder=j.el}}else z($,v,M,x,N,I,Z)},ce=(v,M,x)=>{const L=M.component=v.component;if(Jv(v,M,x))if(L.asyncDep&&!L.asyncResolved){ie(L,M,x);return}else L.next=M,L.update();else M.el=v.el,L.vnode=M},z=(v,M,x,L,N,I,Z)=>{const $=()=>{if(v.isMounted){let{next:Y,bu:oe,u:ue,parent:be,vnode:Pe}=v;{const dn=i0(v);if(dn){Y&&(Y.el=Pe.el,ie(v,Y,Z)),dn.asyncDep.then(()=>{v.isUnmounted||$()});return}}let ke=Y,De;vi(v,!1),Y?(Y.el=Pe.el,ie(v,Y,Z)):Y=Pe,oe&&fl(oe),(De=Y.props&&Y.props.onVnodeBeforeUpdate)&&Kn(De,be,Y,Pe),vi(v,!0);const At=Nf(v),hn=v.subTree;v.subTree=At,m(hn,At,h(hn.el),T(hn),v,N,I),Y.el=At.el,ke===null&&Qv(v,At.el),ue&&$t(ue,N),(De=Y.props&&Y.props.onVnodeUpdated)&&$t(()=>Kn(De,be,Y,Pe),N)}else{let Y;const{el:oe,props:ue}=M,{bm:be,m:Pe,parent:ke,root:De,type:At}=v,hn=Es(M);vi(v,!1),be&&fl(be),!hn&&(Y=ue&&ue.onVnodeBeforeMount)&&Kn(Y,ke,M),vi(v,!0);{De.ce&&De.ce._def.shadowRoot!==!1&&De.ce._injectChildStyle(At);const dn=v.subTree=Nf(v);m(null,dn,x,L,v,N,I),M.el=dn.el}if(Pe&&$t(Pe,N),!hn&&(Y=ue&&ue.onVnodeMounted)){const dn=M;$t(()=>Kn(Y,ke,dn),N)}(M.shapeFlag&256||ke&&Es(ke.vnode)&&ke.vnode.shapeFlag&256)&&v.a&&$t(v.a,N),v.isMounted=!0,M=x=L=null}};v.scope.on();const j=v.effect=new up($);v.scope.off();const D=v.update=j.run.bind(j),se=v.job=j.runIfDirty.bind(j);se.i=v,se.id=v.uid,j.scheduler=()=>Kh(se),vi(v,!0),D()},ie=(v,M,x)=>{M.component=v;const L=v.vnode.props;v.vnode=M,v.next=null,Fv(v,M.props,L,x),zv(v,M.children,x),Ar(),Ef(v),Ir()},ee=(v,M,x,L,N,I,Z,$,j=!1)=>{const D=v&&v.children,se=v?v.shapeFlag:0,Y=M.children,{patchFlag:oe,shapeFlag:ue}=M;if(oe>0){if(oe&128){me(D,Y,x,L,N,I,Z,$,j);return}else if(oe&256){Ie(D,Y,x,L,N,I,Z,$,j);return}}ue&8?(se&16&&He(D,N,I),Y!==D&&u(x,Y)):se&16?ue&16?me(D,Y,x,L,N,I,Z,$,j):He(D,N,I,!0):(se&8&&u(x,""),ue&16&&R(Y,x,L,N,I,Z,$,j))},Ie=(v,M,x,L,N,I,Z,$,j)=>{v=v||vs,M=M||vs;const D=v.length,se=M.length,Y=Math.min(D,se);let oe;for(oe=0;oe<Y;oe++){const ue=M[oe]=j?Hr(M[oe]):qn(M[oe]);m(v[oe],ue,x,null,N,I,Z,$,j)}D>se?He(v,N,I,!0,!1,Y):R(M,x,L,N,I,Z,$,j,Y)},me=(v,M,x,L,N,I,Z,$,j)=>{let D=0;const se=M.length;let Y=v.length-1,oe=se-1;for(;D<=Y&&D<=oe;){const ue=v[D],be=M[D]=j?Hr(M[D]):qn(M[D]);if(ki(ue,be))m(ue,be,x,null,N,I,Z,$,j);else break;D++}for(;D<=Y&&D<=oe;){const ue=v[Y],be=M[oe]=j?Hr(M[oe]):qn(M[oe]);if(ki(ue,be))m(ue,be,x,null,N,I,Z,$,j);else break;Y--,oe--}if(D>Y){if(D<=oe){const ue=oe+1,be=ue<se?M[ue].el:L;for(;D<=oe;)m(null,M[D]=j?Hr(M[D]):qn(M[D]),x,be,N,I,Z,$,j),D++}}else if(D>oe)for(;D<=Y;)ge(v[D],N,I,!0),D++;else{const ue=D,be=D,Pe=new Map;for(D=be;D<=oe;D++){const Vt=M[D]=j?Hr(M[D]):qn(M[D]);Vt.key!=null&&Pe.set(Vt.key,D)}let ke,De=0;const At=oe-be+1;let hn=!1,dn=0;const cr=new Array(At);for(D=0;D<At;D++)cr[D]=0;for(D=ue;D<=Y;D++){const Vt=v[D];if(De>=At){ge(Vt,N,I,!0);continue}let fn;if(Vt.key!=null)fn=Pe.get(Vt.key);else for(ke=be;ke<=oe;ke++)if(cr[ke-be]===0&&ki(Vt,M[ke])){fn=ke;break}fn===void 0?ge(Vt,N,I,!0):(cr[fn-be]=D+1,fn>=dn?dn=fn:hn=!0,m(Vt,M[fn],x,null,N,I,Z,$,j),De++)}const Ba=hn?Vv(cr):vs;for(ke=Ba.length-1,D=At-1;D>=0;D--){const Vt=be+D,fn=M[Vt],ro=M[Vt+1],Xi=Vt+1<se?ro.el||ro.placeholder:L;cr[D]===0?m(null,fn,x,Xi,N,I,Z,$,j):hn&&(ke<0||D!==Ba[ke]?ye(fn,x,Xi,2):ke--)}}},ye=(v,M,x,L,N=null)=>{const{el:I,type:Z,transition:$,children:j,shapeFlag:D}=v;if(D&6){ye(v.component.subTree,M,x,L);return}if(D&128){v.suspense.move(M,x,L);return}if(D&64){Z.move(v,M,x,te);return}if(Z===Re){r(I,M,x);for(let Y=0;Y<j.length;Y++)ye(j[Y],M,x,L);r(v.anchor,M,x);return}if(Z===tu){w(v,M,x);return}if(L!==2&&D&1&&$)if(L===0)$.beforeEnter(I),r(I,M,x),$t(()=>$.enter(I),N);else{const{leave:Y,delayLeave:oe,afterLeave:ue}=$,be=()=>{v.ctx.isUnmounted?i(I):r(I,M,x)},Pe=()=>{I._isLeaving&&I[Sr](!0),Y(I,()=>{be(),ue&&ue()})};oe?oe(I,be,Pe):Pe()}else r(I,M,x)},ge=(v,M,x,L=!1,N=!1)=>{const{type:I,props:Z,ref:$,children:j,dynamicChildren:D,shapeFlag:se,patchFlag:Y,dirs:oe,cacheIndex:ue}=v;if(Y===-2&&(N=!1),$!=null&&(Ar(),Ao($,null,x,v,!0),Ir()),ue!=null&&(M.renderCache[ue]=void 0),se&256){M.ctx.deactivate(v);return}const be=se&1&&oe,Pe=!Es(v);let ke;if(Pe&&(ke=Z&&Z.onVnodeBeforeUnmount)&&Kn(ke,M,v),se&6)ot(v.component,x,L);else{if(se&128){v.suspense.unmount(x,L);return}be&&yi(v,null,M,"beforeUnmount"),se&64?v.type.remove(v,M,x,te,L):D&&!D.hasOnce&&(I!==Re||Y>0&&Y&64)?He(D,M,x,!1,!0):(I===Re&&Y&384||!N&&se&16)&&He(j,M,x),L&&Le(v)}(Pe&&(ke=Z&&Z.onVnodeUnmounted)||be)&&$t(()=>{ke&&Kn(ke,M,v),be&&yi(v,null,M,"unmounted")},x)},Le=v=>{const{type:M,el:x,anchor:L,transition:N}=v;if(M===Re){U(x,L);return}if(M===tu){b(v);return}const I=()=>{i(x),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:Z,delayLeave:$}=N,j=()=>Z(x,I);$?$(v.el,I,j):j()}else I()},U=(v,M)=>{let x;for(;v!==M;)x=d(v),i(v),v=x;i(M)},ot=(v,M,x)=>{const{bum:L,scope:N,job:I,subTree:Z,um:$,m:j,a:D}=v;Ff(j),Ff(D),L&&fl(L),N.stop(),I&&(I.flags|=8,ge(Z,v,M,x)),$&&$t($,M),$t(()=>{v.isUnmounted=!0},M)},He=(v,M,x,L=!1,N=!1,I=0)=>{for(let Z=I;Z<v.length;Z++)ge(v[Z],M,x,L,N)},T=v=>{if(v.shapeFlag&6)return T(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const M=d(v.anchor||v.el),x=M&&M[Ip];return x?d(x):M};let J=!1;const H=(v,M,x)=>{v==null?M._vnode&&ge(M._vnode,null,null,!0):m(M._vnode||null,v,M,null,null,null,x),M._vnode=v,J||(J=!0,Ef(),Tp(),J=!1)},te={p:m,um:ge,m:ye,r:Le,mt:re,mc:R,pc:ee,pbc:V,n:T,o:t};return{render:H,hydrate:void 0,createApp:Lv(H)}}function eu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Wv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zh(t,e,n=!1){const r=t.children,i=e.children;if(fe(r)&&fe(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Hr(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Zh(o,a)),a.type===pc&&a.patchFlag!==-1&&(a.el=o.el),a.type===Dt&&!a.el&&(a.el=o.el)}}function Vv(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function i0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:i0(e)}function Ff(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uv=Symbol.for("v-scx"),Kv=()=>Pn(Uv);function Tn(t,e,n){return s0(t,e,n)}function s0(t,e,n=et){const{immediate:r,deep:i,flush:s,once:o}=n,a=Mt({},n),l=e&&r||!e&&s!=="post";let c;if(Yo){if(s==="sync"){const f=Kv();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=tr,f.resume=tr,f.pause=tr,f}}const u=Gt;a.call=(f,g,m)=>zn(f,u,g,m);let h=!1;s==="post"?a.scheduler=f=>{$t(f,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(f,g)=>{g?f():Kh(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=iv(t,e,a);return Yo&&(c?c.push(d):l&&d()),d}function $v(t,e,n){const r=this.proxy,i=pt(t)?t.includes(".")?o0(r,t):()=>r[t]:t.bind(r,r);let s;we(e)?s=e:(s=e.handler,n=e);const o=Sa(this),a=s0(i,s.bind(r),n);return o(),a}function o0(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const qv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${Wi(e)}Modifiers`];function Hv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||et;let i=n;const s=e.startsWith("update:"),o=s&&qv(r,e.slice(7));o&&(o.trim&&(i=n.map(u=>pt(u)?u.trim():u)),o.number&&(i=n.map(sp)));let a,l=r[a=qc(e)]||r[a=qc(An(e))];!l&&s&&(l=r[a=qc(Wi(e))]),l&&zn(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zn(c,t,6,i)}}const Zv=new WeakMap;function a0(t,e,n=!1){const r=n?Zv:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!we(t)){const l=c=>{const u=a0(c,e,!0);u&&(a=!0,Mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Je(t)&&r.set(t,null),null):(fe(s)?s.forEach(l=>o[l]=null):Mt(o,s),Je(t)&&r.set(t,o),o)}function mc(t,e){return!t||!sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Wi(e))||Ve(t,e))}function Nf(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:m}=t,p=Cl(t);let _,y;try{if(n.shapeFlag&4){const b=i||r,E=b;_=qn(c.call(E,b,u,h,f,d,g)),y=a}else{const b=e;_=qn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),y=e.props?a:Xv(a)}}catch(b){Lo.length=0,hc(b,t,1),_=Xe(Dt)}let w=_;if(y&&m!==!1){const b=Object.keys(y),{shapeFlag:E}=w;b.length&&E&7&&(s&&b.some(Oh)&&(y=Yv(y,s)),w=ci(w,y,!1,!0))}return n.dirs&&(w=ci(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Ho(w,n.transition),_=w,Cl(p),_}const Xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||sc(n))&&((e||(e={}))[n]=t[n]);return e},Yv=(t,e)=>{const n={};for(const r in t)(!Oh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Jv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Df(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!mc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Df(r,o,c):!0:!!o;return!1}function Df(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!mc(n,s))return!0}return!1}function Qv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const l0=t=>t.__isSuspense;function ew(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):av(t)}const Re=Symbol.for("v-fgt"),pc=Symbol.for("v-txt"),Dt=Symbol.for("v-cmt"),tu=Symbol.for("v-stc"),Lo=[];let _n=null;function F(t=!1){Lo.push(_n=t?null:[])}function tw(){Lo.pop(),_n=Lo[Lo.length-1]||null}let Zo=1;function Rl(t,e=!1){Zo+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function c0(t){return t.dynamicChildren=Zo>0?_n||vs:null,tw(),Zo>0&&_n&&_n.push(t),t}function B(t,e,n,r,i,s){return c0(S(t,e,n,r,i,s,!0))}function yt(t,e,n,r,i){return c0(Xe(t,e,n,r,i,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function ki(t,e){return t.type===e.type&&t.key===e.key}const u0=({key:t})=>t??null,pl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pt(t)||jt(t)||we(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,r=0,i=null,s=t===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&u0(e),ref:e&&pl(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pt};return a?(Xh(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=pt(n)?8:16),Zo>0&&!o&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const Xe=nw;function nw(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Ev)&&(t=Dt),Xo(t)){const a=ci(t,e,!0);return n&&Xh(a,n),Zo>0&&!s&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag=-2,a}if(fw(t)&&(t=t.__vccOpts),e){e=rw(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=vt(a)),Je(l)&&(Vh(l)&&!fe(l)&&(l=Mt({},l)),e.style=Is(l))}const o=pt(t)?1:l0(t)?128:Lp(t)?64:Je(t)?4:we(t)?2:0;return S(t,e,n,r,i,o,s,!0)}function rw(t){return t?Vh(t)||Jp(t)?Mt({},t):t:null}function ci(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?iw(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&u0(c),ref:e&&e.ref?n&&s?fe(s)?s.concat(pl(e)):[s,pl(e)]:pl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ci(t.ssContent),ssFallback:t.ssFallback&&ci(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ho(u,l.clone(u)),u}function On(t=" ",e=0){return Xe(pc,null,t,e)}function Ye(t="",e=!1){return e?(F(),yt(Dt,null,t)):Xe(Dt,null,t)}function qn(t){return t==null||typeof t=="boolean"?Xe(Dt):fe(t)?Xe(Re,null,t.slice()):Xo(t)?Hr(t):Xe(pc,null,String(t))}function Hr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ci(t)}function Xh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Xh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Jp(e)?e._ctx=Pt:i===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[On(e)]):n=8);t.children=e,t.shapeFlag|=n}function iw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=vt([e.class,r.class]));else if(i==="style")e.style=Is([e.style,r.style]);else if(sc(i)){const s=e[i],o=r[i];o&&s!==o&&!(fe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Kn(t,e,n,r=null){zn(t,e,7,[n,r])}const sw=Zp();let ow=0;function aw(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||sw,s={uid:ow++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:e0(r,i),emitsOptions:a0(r,i),emit:null,emitted:null,propsDefaults:et,inheritAttrs:r.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hv.bind(null,s),t.ce&&t.ce(s),s}let Gt=null;const h0=()=>Gt||Pt;let Al,Ku;{const t=cc(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Al=e("__VUE_INSTANCE_SETTERS__",n=>Gt=n),Ku=e("__VUE_SSR_SETTERS__",n=>Yo=n)}const Sa=t=>{const e=Gt;return Al(t),t.scope.on(),()=>{t.scope.off(),Al(e)}},Gf=()=>{Gt&&Gt.scope.off(),Al(null)};function d0(t){return t.vnode.shapeFlag&4}let Yo=!1;function lw(t,e=!1,n=!1){e&&Ku(e);const{props:r,children:i}=t.vnode,s=d0(t);Ov(t,r,s,e),Gv(t,i,n||e);const o=s?cw(t,e):void 0;return e&&Ku(!1),o}function cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cv);const{setup:r}=n;if(r){Ar();const i=t.setupContext=r.length>1?hw(t):null,s=Sa(t),o=wa(r,t,0,[t.props,i]),a=tp(o);if(Ir(),s(),(a||t.sp)&&!Es(t)&&Vp(t),a){if(o.then(Gf,Gf),e)return o.then(l=>{zf(t,l)}).catch(l=>{hc(l,t,0)});t.asyncDep=o}else zf(t,o)}else f0(t)}function zf(t,e,n){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=Cp(e)),f0(t)}function f0(t,e,n){const r=t.type;t.render||(t.render=r.render||tr);{const i=Sa(t);Ar();try{kv(t)}finally{Ir(),i()}}}const uw={get(t,e){return Nt(t,"get",""),t[e]}};function hw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uw),slots:t.slots,emit:t.emit,expose:e}}function _c(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cp(Y1(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Io)return Io[n](t)},has(e,n){return n in e||n in Io}})):t.proxy}function dw(t,e=!0){return we(t)?t.displayName||t.name:t.name||e&&t.__name}function fw(t){return we(t)&&"__vccOpts"in t}const ne=(t,e)=>nv(t,e,Yo);function Yh(t,e,n){try{Rl(-1);const r=arguments.length;return r===2?Je(e)&&!fe(e)?Xo(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xo(n)&&(n=[n]),Xe(t,e,n))}finally{Rl(1)}}const gw="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $u;const Bf=typeof window<"u"&&window.trustedTypes;if(Bf)try{$u=Bf.createPolicy("vue",{createHTML:t=>t})}catch{}const g0=$u?t=>$u.createHTML(t):t=>t,mw="http://www.w3.org/2000/svg",pw="http://www.w3.org/1998/Math/MathML",wr=typeof document<"u"?document:null,jf=wr&&wr.createElement("template"),_w={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?wr.createElementNS(mw,t):e==="mathml"?wr.createElementNS(pw,t):n?wr.createElement(t,{is:n}):wr.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>wr.createTextNode(t),createComment:t=>wr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{jf.innerHTML=g0(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=jf.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gr="transition",lo="animation",Jo=Symbol("_vtc"),m0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yw=Mt({},Dp,m0),vw=t=>(t.displayName="Transition",t.props=yw,t),qu=vw((t,{slots:e})=>Yh(hv,ww(t),e)),wi=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wf=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function ww(t){const e={};for(const A in t)A in m0||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=Sw(i),m=g&&g[0],p=g&&g[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:w,onLeave:b,onLeaveCancelled:E,onBeforeAppear:P=_,onAppear:k=y,onAppearCancelled:R=w}=e,C=(A,q,re,ce)=>{A._enterCancelled=ce,Si(A,q?u:a),Si(A,q?c:o),re&&re()},V=(A,q)=>{A._isLeaving=!1,Si(A,h),Si(A,f),Si(A,d),q&&q()},W=A=>(q,re)=>{const ce=A?k:y,z=()=>C(q,A,re);wi(ce,[q,z]),Vf(()=>{Si(q,A?l:s),gr(q,A?u:a),Wf(ce)||Uf(q,r,m,z)})};return Mt(e,{onBeforeEnter(A){wi(_,[A]),gr(A,s),gr(A,o)},onBeforeAppear(A){wi(P,[A]),gr(A,l),gr(A,c)},onEnter:W(!1),onAppear:W(!0),onLeave(A,q){A._isLeaving=!0;const re=()=>V(A,q);gr(A,h),A._enterCancelled?(gr(A,d),qf(A)):(qf(A),gr(A,d)),Vf(()=>{A._isLeaving&&(Si(A,h),gr(A,f),Wf(b)||Uf(A,r,p,re))}),wi(b,[A,re])},onEnterCancelled(A){C(A,!1,void 0,!0),wi(w,[A])},onAppearCancelled(A){C(A,!0,void 0,!0),wi(R,[A])},onLeaveCancelled(A){V(A),wi(E,[A])}})}function Sw(t){if(t==null)return null;if(Je(t))return[nu(t.enter),nu(t.leave)];{const e=nu(t);return[e,e]}}function nu(t){return b1(t)}function gr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Jo]||(t[Jo]=new Set)).add(e)}function Si(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Jo];n&&(n.delete(e),n.size||(t[Jo]=void 0))}function Vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bw=0;function Uf(t,e,n,r){const i=t._endId=++bw,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Ew(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),s()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Ew(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(`${Gr}Delay`),s=r(`${Gr}Duration`),o=Kf(i,s),a=r(`${lo}Delay`),l=r(`${lo}Duration`),c=Kf(a,l);let u=null,h=0,d=0;e===Gr?o>0&&(u=Gr,h=o,d=s.length):e===lo?c>0&&(u=lo,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Gr:lo:null,d=u?u===Gr?s.length:l.length:0);const f=u===Gr&&/\b(?:transform|all)(?:,|$)/.test(r(`${Gr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Kf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>$f(n)+$f(t[r])))}function $f(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qf(t){return(t?t.ownerDocument:document).body.offsetHeight}function Mw(t,e,n){const r=t[Jo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Il=Symbol("_vod"),p0=Symbol("_vsh"),xw={name:"show",beforeMount(t,{value:e},{transition:n}){t[Il]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):co(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),co(t,!0),r.enter(t)):r.leave(t,()=>{co(t,!1)}):co(t,e))},beforeUnmount(t,{value:e}){co(t,e)}};function co(t,e){t.style.display=e?t[Il]:"none",t[p0]=!e}const Cw=Symbol(""),kw=/(?:^|;)\s*display\s*:/;function Pw(t,e,n){const r=t.style,i=pt(n);let s=!1;if(n&&!i){if(e)if(pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&_l(r,a,"")}else for(const o in e)n[o]==null&&_l(r,o,"");for(const o in n)o==="display"&&(s=!0),_l(r,o,n[o])}else if(i){if(e!==n){const o=r[Cw];o&&(n+=";"+o),r.cssText=n,s=kw.test(n)}}else e&&t.removeAttribute("style");Il in t&&(t[Il]=s?r.display:"",t[p0]&&(r.display="none"))}const Hf=/\s*!important$/;function _l(t,e,n){if(fe(n))n.forEach(r=>_l(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tw(t,e);Hf.test(n)?t.setProperty(Wi(r),n.replace(Hf,""),"important"):t[r]=n}}const Zf=["Webkit","Moz","ms"],ru={};function Tw(t,e){const n=ru[e];if(n)return n;let r=An(e);if(r!=="filter"&&r in t)return ru[e]=r;r=lc(r);for(let i=0;i<Zf.length;i++){const s=Zf[i]+r;if(s in t)return ru[e]=s}return e}const Xf="http://www.w3.org/1999/xlink";function Yf(t,e,n,r,i,s=P1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xf,e.slice(6,e.length)):t.setAttributeNS(Xf,e,n):n==null||s&&!op(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Gn(n)?String(n):n)}function Jf(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?g0(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=op(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Jh(t,e,n,r){t.addEventListener(e,n,r)}function Rw(t,e,n,r){t.removeEventListener(e,n,r)}const Qf=Symbol("_vei");function Aw(t,e,n,r,i=null){const s=t[Qf]||(t[Qf]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Iw(e);if(r){const c=s[e]=Fw(r,i);Jh(t,a,c,l)}else o&&(Rw(t,a,o,l),s[e]=void 0)}}const eg=/(?:Once|Passive|Capture)$/;function Iw(t){let e;if(eg.test(t)){e={};let r;for(;r=t.match(eg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wi(t.slice(2)),e]}let iu=0;const Lw=Promise.resolve(),Ow=()=>iu||(Lw.then(()=>iu=0),iu=Date.now());function Fw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zn(Nw(r,n.value),e,5,[r])};return n.value=t,n.attached=Ow(),n}function Nw(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const tg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dw=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?Mw(t,r,o):e==="style"?Pw(t,n,r):sc(e)?Oh(e)||Aw(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gw(t,e,r,o))?(Jf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yf(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!pt(r))?Jf(t,An(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yf(t,e,r,o))};function Gw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&tg(e)&&we(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return tg(e)&&pt(n)?!1:e in t}const Ll=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>fl(e,n):e},xs=Symbol("_assign"),zw={created(t,{value:e},n){t.checked=Ls(e,n.props.value),t[xs]=Ll(n),Jh(t,"change",()=>{t[xs](Qo(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[xs]=Ll(r),e!==n&&(t.checked=Ls(e,r.props.value))}},ng={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=oc(e);Jh(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sp(Qo(o)):Qo(o));t[xs](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,Uh(()=>{t._assigning=!1})}),t[xs]=Ll(r)},mounted(t,{value:e}){rg(t,e)},beforeUpdate(t,e,n){t[xs]=Ll(n)},updated(t,{value:e}){t._assigning||rg(t,e)}};function rg(t,e){const n=t.multiple,r=fe(e);if(!(n&&!r&&!oc(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],a=Qo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=R1(e,a)>-1}else o.selected=e.has(a);else if(Ls(Qo(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qo(t){return"_value"in t?t._value:t.value}const Bw=["ctrl","shift","alt","meta"],jw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bw.some(n=>t[`${n}Key`]&&!e.includes(n))},_0=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=jw[e[o]];if(a&&a(i,e))return}return t(i,...s)})},Ww=Mt({patchProp:Dw},_w);let ig;function Vw(){return ig||(ig=Bv(Ww))}const Uw=(...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=$w(r);if(!i)return;const s=e._component;!we(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Kw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Kw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $w(t){return pt(t)?document.querySelector(t):t}function qw(){return y0().__VUE_DEVTOOLS_GLOBAL_HOOK__}function y0(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Hw=typeof Proxy=="function",Zw="devtools-plugin:setup",Xw="plugin:settings:set";let Ji,Hu;function Yw(){var t;return Ji!==void 0||(typeof window<"u"&&window.performance?(Ji=!0,Hu=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Ji=!0,Hu=globalThis.perf_hooks.performance):Ji=!1),Ji}function Jw(){return Yw()?Hu.now():Date.now()}class Qw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}s=o},now(){return Jw()}},n&&n.on(Xw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function eS(t,e){const n=t,r=y0(),i=qw(),s=Hw&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(Zw,t,e);else{const o=s?new Qw(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const os=typeof document<"u";function v0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&v0(t.default)}const We=Object.assign;function su(t,e){const n={};for(const r in e){const i=e[r];n[r]=Bn(i)?i.map(t):t(i)}return n}const Oo=()=>{},Bn=Array.isArray;function sg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const w0=/#/g,nS=/&/g,rS=/\//g,iS=/=/g,sS=/\?/g,S0=/\+/g,oS=/%5B/g,aS=/%5D/g,b0=/%5E/g,lS=/%60/g,E0=/%7B/g,cS=/%7C/g,M0=/%7D/g,uS=/%20/g;function Qh(t){return t==null?"":encodeURI(""+t).replace(cS,"|").replace(oS,"[").replace(aS,"]")}function hS(t){return Qh(t).replace(E0,"{").replace(M0,"}").replace(b0,"^")}function Zu(t){return Qh(t).replace(S0,"%2B").replace(uS,"+").replace(w0,"%23").replace(nS,"%26").replace(lS,"`").replace(E0,"{").replace(M0,"}").replace(b0,"^")}function dS(t){return Zu(t).replace(iS,"%3D")}function fS(t){return Qh(t).replace(w0,"%23").replace(sS,"%3F")}function gS(t){return fS(t).replace(rS,"%2F")}function ea(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const mS=/\/$/,pS=t=>t.replace(mS,"");function ou(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=wS(r??e,n),{fullPath:r+s+o,path:r,query:i,hash:ea(o)}}function _S(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function og(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yS(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Os(e.matched[r],n.matched[i])&&x0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function x0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vS(t[n],e[n]))return!1;return!0}function vS(t,e){return Bn(t)?ag(t,e):Bn(e)?ag(e,t):t===e}function ag(t,e){return Bn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const zr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Xu=function(t){return t.pop="pop",t.push="push",t}({}),au=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function SS(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pS(t)}const bS=/^[^#]+#/;function ES(t,e){return t.replace(bS,"#")+e}function MS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yc=()=>({left:window.scrollX,top:window.scrollY});function xS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=MS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lg(t,e){return(history.state?history.state.position-e:-1)+t}const Yu=new Map;function CS(t,e){Yu.set(t,e)}function kS(t){const e=Yu.get(t);return Yu.delete(t),e}function PS(t){return typeof t=="string"||t&&typeof t=="object"}function C0(t){return typeof t=="string"||typeof t=="symbol"}let dt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const k0=Symbol("");dt.MATCHER_NOT_FOUND+"",dt.NAVIGATION_GUARD_REDIRECT+"",dt.NAVIGATION_ABORTED+"",dt.NAVIGATION_CANCELLED+"",dt.NAVIGATION_DUPLICATED+"";function Fs(t,e){return We(new Error,{type:t,[k0]:!0},e)}function mr(t,e){return t instanceof Error&&k0 in t&&(e==null||!!(t.type&e))}const TS=["params","query","hash"];function RS(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of TS)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function AS(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(S0," "),s=i.indexOf("="),o=ea(s<0?i:i.slice(0,s)),a=s<0?null:ea(i.slice(s+1));if(o in e){let l=e[o];Bn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function cg(t){let e="";for(let n in t){const r=t[n];if(n=dS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bn(r)?r.map(i=>i&&Zu(i)):[r&&Zu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function IS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const LS=Symbol(""),ug=Symbol(""),vc=Symbol(""),ed=Symbol(""),Ju=Symbol("");function uo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zr(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Fs(dt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):PS(d)?l(Fs(dt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&r.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(r&&r.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function lu(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(v0(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Zr(c,n,r,o,a,i))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=tS(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&Zr(d,n,r,o,a,i)()}))}}return s}function OS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Os(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Os(c,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let FS=()=>location.protocol+"//"+location.host;function P0(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let o=i.includes(t.slice(s))?t.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),og(a,"")}return og(n,t)+r+i}function NS(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=P0(t,location),g=n.value,m=e.value;let p=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}p=m?d.position-m.position:0}else r(f);i.forEach(_=>{_(n.value,g,{delta:p,type:Xu.pop,direction:p?p>0?au.forward:au.back:au.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(We({},d.state,{scroll:yc()}),"")}}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function hg(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?yc():null}}function DS(t){const{history:e,location:n}=window,r={value:P0(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:FS()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){s(l,We({},e.state,hg(i.value.back,l,i.value.forward,!0),c,{position:i.value.position}),!0),r.value=l}function a(l,c){const u=We({},i.value,e.state,{forward:l,scroll:yc()});s(u.current,u,!0),s(l,We({},hg(r.value,l,null),{position:u.position+1},c),!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function GS(t){t=SS(t);const e=DS(t),n=NS(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=We({location:"",base:t,go:r,createHref:ES.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}let Pi=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var St=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(St||{});const zS={type:Pi.Static,value:""},BS=/[a-zA-Z0-9_]/;function jS(t){if(!t)return[[]];if(t==="/")return[[zS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=St.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===St.Static?s.push({type:Pi.Static,value:c}):n===St.Param||n===St.ParamRegExp||n===St.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Pi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==St.ParamRegExp){r=n,n=St.EscapeNext;continue}switch(n){case St.Static:l==="/"?(c&&h(),o()):l===":"?(h(),n=St.Param):d();break;case St.EscapeNext:d(),n=r;break;case St.Param:l==="("?n=St.ParamRegExp:BS.test(l)?d():(h(),n=St.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case St.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=St.ParamRegExpEnd:u+=l;break;case St.ParamRegExpEnd:h(),n=St.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===St.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}const dg="[^/]+?",WS={sensitive:!1,strict:!1,start:!0,end:!0};var qt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(qt||{});const VS=/[.+*?^${}()[\]/\\]/g;function US(t,e){const n=We({},WS,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[qt.Root];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=qt.Segment+(n.sensitive?qt.BonusCaseSensitive:0);if(d.type===Pi.Static)h||(i+="/"),i+=d.value.replace(VS,"\\$&"),f+=qt.Static;else if(d.type===Pi.Param){const{value:g,repeatable:m,optional:p,regexp:_}=d;s.push({name:g,repeatable:m,optional:p});const y=_||dg;if(y!==dg){f+=qt.BonusCustomRegExp;try{`${y}`}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+b.message)}}let w=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(w=p&&c.length<2?`(?:/${w})`:"/"+w),p&&(w+="?"),i+=w,f+=qt.Dynamic,p&&(f+=qt.BonusOptional),m&&(f+=qt.BonusRepeatable),y===".*"&&(f+=qt.BonusWildcard)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=qt.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===Pi.Static)u+=f.value;else if(f.type===Pi.Param){const{value:g,repeatable:m,optional:p}=f,_=g in c?c[g]:"";if(Bn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Bn(_)?_.join("/"):_;if(!y)if(p)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function KS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===qt.Static+qt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===qt.Static+qt.Segment?1:-1:0}function T0(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=KS(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(fg(r))return 1;if(fg(i))return-1}return i.length-r.length}function fg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $S={strict:!1,end:!0,sensitive:!1};function qS(t,e,n){const r=US(jS(t.path),n),i=We(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function HS(t,e){const n=[],r=new Map;e=sg($S,e);function i(h){return r.get(h)}function s(h,d,f){const g=!f,m=mg(h);m.aliasOf=f&&f.record;const p=sg(e,h),_=[m];if("alias"in h){const b=typeof h.alias=="string"?[h.alias]:h.alias;for(const E of b)_.push(mg(We({},m,{components:f?f.record.components:m.components,path:E,aliasOf:f?f.record:m})))}let y,w;for(const b of _){const{path:E}=b;if(d&&E[0]!=="/"){const P=d.record.path,k=P[P.length-1]==="/"?"":"/";b.path=d.record.path+(E&&k+E)}if(y=qS(b,d,p),f?f.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&h.name&&!pg(y)&&o(h.name)),R0(y)&&l(y),m.children){const P=m.children;for(let k=0;k<P.length;k++)s(P[k],y,f&&f.children[k])}f=f||y}return w?()=>{o(w)}:Oo}function o(h){if(C0(h)){const d=r.get(h);d&&(r.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=YS(h,n);n.splice(d,0,h),h.record.name&&!pg(h)&&r.set(h.record.name,h)}function c(h,d){let f,g={},m,p;if("name"in h&&h.name){if(f=r.get(h.name),!f)throw Fs(dt.MATCHER_NOT_FOUND,{location:h});p=f.record.name,g=We(gg(d.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),h.params&&gg(h.params,f.keys.map(w=>w.name))),m=f.stringify(g)}else if(h.path!=null)m=h.path,f=n.find(w=>w.re.test(m)),f&&(g=f.parse(m),p=f.record.name);else{if(f=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!f)throw Fs(dt.MATCHER_NOT_FOUND,{location:h,currentLocation:d});p=f.record.name,g=We({},d.params,h.params),m=f.stringify(g)}const _=[];let y=f;for(;y;)_.unshift(y.record),y=y.parent;return{name:p,path:m,params:g,matched:_,meta:XS(_)}}t.forEach(h=>s(h));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function gg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ZS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ZS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XS(t){return t.reduce((e,n)=>We(e,n.meta),{})}function YS(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;T0(t,e[s])<0?r=s:n=s+1}const i=JS(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function JS(t){let e=t;for(;e=e.parent;)if(R0(e)&&T0(t,e)===0)return e}function R0({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _g(t){const e=Pn(vc),n=Pn(ed),r=ne(()=>{const l=Cr(t.to);return e.resolve(l)}),i=ne(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Os.bind(null,u));if(d>-1)return d;const f=yg(l[c-2]);return c>1&&yg(u)===f&&h[h.length-1].path!==f?h.findIndex(Os.bind(null,l[c-2])):d}),s=ne(()=>i.value>-1&&rb(n.params,r.value.params)),o=ne(()=>i.value>-1&&i.value===n.matched.length-1&&x0(n.params,r.value.params));function a(l={}){if(nb(l)){const c=e[Cr(t.replace)?"replace":"push"](Cr(t.to)).catch(Oo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:ne(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function QS(t){return t.length===1?t[0]:t}const eb=Wp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_g,setup(t,{slots:e}){const n=ai(_g(t)),{options:r}=Pn(vc),i=ne(()=>({[vg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&QS(e.default(n));return t.custom?s:Yh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),tb=eb;function nb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rb(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Bn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function yg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vg=(t,e,n)=>t??e??n,ib=Wp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pn(Ju),i=ne(()=>t.route||r.value),s=Pn(ug,0),o=ne(()=>{let c=Cr(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ne(()=>i.value.matched[o.value]);ml(ug,ne(()=>o.value+1)),ml(LS,a),ml(Ju,i);const l=Tt();return Tn(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Os(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return wg(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,p=Yh(d,We({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return wg(n.default,{Component:p,route:c})||p}}});function wg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sb=ib;function ob(t){const e=HS(t.routes,t),n=t.parseQuery||AS,r=t.stringifyQuery||cg,i=t.history,s=uo(),o=uo(),a=uo(),l=J1(zr);let c=zr;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=su.bind(null,T=>""+T),h=su.bind(null,gS),d=su.bind(null,ea);function f(T,J){let H,te;return C0(T)?(H=e.getRecordMatcher(T),te=J):te=T,e.addRoute(te,H)}function g(T){const J=e.getRecordMatcher(T);J&&e.removeRoute(J)}function m(){return e.getRoutes().map(T=>T.record)}function p(T){return!!e.getRecordMatcher(T)}function _(T,J){if(J=We({},J||l.value),typeof T=="string"){const x=ou(n,T,J.path),L=e.resolve({path:x.path},J),N=i.createHref(x.fullPath);return We(x,L,{params:d(L.params),hash:ea(x.hash),redirectedFrom:void 0,href:N})}let H;if(T.path!=null)H=We({},T,{path:ou(n,T.path,J.path).path});else{const x=We({},T.params);for(const L in x)x[L]==null&&delete x[L];H=We({},T,{params:h(x)}),J.params=h(J.params)}const te=e.resolve(H,J),xe=T.hash||"";te.params=u(d(te.params));const v=_S(r,We({},T,{hash:hS(xe),path:te.path})),M=i.createHref(v);return We({fullPath:v,hash:xe,query:r===cg?IS(T.query):T.query||{}},te,{redirectedFrom:void 0,href:M})}function y(T){return typeof T=="string"?ou(n,T,l.value.path):We({},T)}function w(T,J){if(c!==T)return Fs(dt.NAVIGATION_CANCELLED,{from:J,to:T})}function b(T){return k(T)}function E(T){return b(We(y(T),{replace:!0}))}function P(T,J){const H=T.matched[T.matched.length-1];if(H&&H.redirect){const{redirect:te}=H;let xe=typeof te=="function"?te(T,J):te;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=y(xe):{path:xe},xe.params={}),We({query:T.query,hash:T.hash,params:xe.path!=null?{}:T.params},xe)}}function k(T,J){const H=c=_(T),te=l.value,xe=T.state,v=T.force,M=T.replace===!0,x=P(H,te);if(x)return k(We(y(x),{state:typeof x=="object"?We({},xe,x.state):xe,force:v,replace:M}),J||H);const L=H;L.redirectedFrom=J;let N;return!v&&yS(r,te,H)&&(N=Fs(dt.NAVIGATION_DUPLICATED,{to:L,from:te}),ye(te,te,!0,!1)),(N?Promise.resolve(N):V(L,te)).catch(I=>mr(I)?mr(I,dt.NAVIGATION_GUARD_REDIRECT)?I:me(I):ee(I,L,te)).then(I=>{if(I){if(mr(I,dt.NAVIGATION_GUARD_REDIRECT))return k(We({replace:M},y(I.to),{state:typeof I.to=="object"?We({},xe,I.to.state):xe,force:v}),J||L)}else I=A(L,te,!0,M,xe);return W(L,te,I),I})}function R(T,J){const H=w(T,J);return H?Promise.reject(H):Promise.resolve()}function C(T){const J=U.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(T):T()}function V(T,J){let H;const[te,xe,v]=OS(T,J);H=lu(te.reverse(),"beforeRouteLeave",T,J);for(const x of te)x.leaveGuards.forEach(L=>{H.push(Zr(L,T,J))});const M=R.bind(null,T,J);return H.push(M),He(H).then(()=>{H=[];for(const x of s.list())H.push(Zr(x,T,J));return H.push(M),He(H)}).then(()=>{H=lu(xe,"beforeRouteUpdate",T,J);for(const x of xe)x.updateGuards.forEach(L=>{H.push(Zr(L,T,J))});return H.push(M),He(H)}).then(()=>{H=[];for(const x of v)if(x.beforeEnter)if(Bn(x.beforeEnter))for(const L of x.beforeEnter)H.push(Zr(L,T,J));else H.push(Zr(x.beforeEnter,T,J));return H.push(M),He(H)}).then(()=>(T.matched.forEach(x=>x.enterCallbacks={}),H=lu(v,"beforeRouteEnter",T,J,C),H.push(M),He(H))).then(()=>{H=[];for(const x of o.list())H.push(Zr(x,T,J));return H.push(M),He(H)}).catch(x=>mr(x,dt.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function W(T,J,H){a.list().forEach(te=>C(()=>te(T,J,H)))}function A(T,J,H,te,xe){const v=w(T,J);if(v)return v;const M=J===zr,x=os?history.state:{};H&&(te||M?i.replace(T.fullPath,We({scroll:M&&x&&x.scroll},xe)):i.push(T.fullPath,xe)),l.value=T,ye(T,J,H,M),me()}let q;function re(){q||(q=i.listen((T,J,H)=>{if(!ot.listening)return;const te=_(T),xe=P(te,ot.currentRoute.value);if(xe){k(We(xe,{replace:!0,force:!0}),te).catch(Oo);return}c=te;const v=l.value;os&&CS(lg(v.fullPath,H.delta),yc()),V(te,v).catch(M=>mr(M,dt.NAVIGATION_ABORTED|dt.NAVIGATION_CANCELLED)?M:mr(M,dt.NAVIGATION_GUARD_REDIRECT)?(k(We(y(M.to),{force:!0}),te).then(x=>{mr(x,dt.NAVIGATION_ABORTED|dt.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===Xu.pop&&i.go(-1,!1)}).catch(Oo),Promise.reject()):(H.delta&&i.go(-H.delta,!1),ee(M,te,v))).then(M=>{M=M||A(te,v,!1),M&&(H.delta&&!mr(M,dt.NAVIGATION_CANCELLED)?i.go(-H.delta,!1):H.type===Xu.pop&&mr(M,dt.NAVIGATION_ABORTED|dt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),W(te,v,M)}).catch(Oo)}))}let ce=uo(),z=uo(),ie;function ee(T,J,H){me(T);const te=z.list();return te.length?te.forEach(xe=>xe(T,J,H)):console.error(T),Promise.reject(T)}function Ie(){return ie&&l.value!==zr?Promise.resolve():new Promise((T,J)=>{ce.add([T,J])})}function me(T){return ie||(ie=!T,re(),ce.list().forEach(([J,H])=>T?H(T):J()),ce.reset()),T}function ye(T,J,H,te){const{scrollBehavior:xe}=t;if(!os||!xe)return Promise.resolve();const v=!H&&kS(lg(T.fullPath,0))||(te||!H)&&history.state&&history.state.scroll||null;return Uh().then(()=>xe(T,J,v)).then(M=>M&&xS(M)).catch(M=>ee(M,T,J))}const ge=T=>i.go(T);let Le;const U=new Set,ot={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:m,resolve:_,options:t,push:b,replace:E,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:z.add,isReady:Ie,install(T){T.component("RouterLink",tb),T.component("RouterView",sb),T.config.globalProperties.$router=ot,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Cr(l)}),os&&!Le&&l.value===zr&&(Le=!0,b(i.location).catch(te=>{}));const J={};for(const te in zr)Object.defineProperty(J,te,{get:()=>l.value[te],enumerable:!0});T.provide(vc,ot),T.provide(ed,Mp(J)),T.provide(Ju,l);const H=T.unmount;U.add(T),T.unmount=function(){U.delete(T),U.size<1&&(c=zr,q&&q(),q=null,l.value=zr,Le=!1,ie=!1),H()}}};function He(T){return T.reduce((J,H)=>J.then(()=>C(H)),Promise.resolve())}return ot}function ab(){return Pn(vc)}function wc(t){return Pn(ed)}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var A0="store";function ln(t){return t===void 0&&(t=null),Pn(t!==null?t:A0)}function Zs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function lb(t){return t!==null&&typeof t=="object"}function cb(t){return t&&typeof t.then=="function"}function ub(t,e){return function(){return t(e)}}function I0(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function L0(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Sc(t,n,[],t._modules.root,!0),td(t,n,e)}function td(t,e,n){var r=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={},a={},l=A1(!0);l.run(function(){Zs(s,function(c,u){o[u]=ub(c,t),a[u]=ne(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=ai({data:e}),t._scope=l,t.strict&&mb(t),r&&n&&t._withCommit(function(){r.data=null}),i&&i.stop()}function Sc(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=nd(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var c=r.context=hb(t,o,n);r.forEachMutation(function(u,h){var d=o+h;db(t,d,u,c)}),r.forEachAction(function(u,h){var d=u.root?h:o+h,f=u.handler||u;fb(t,d,f,c)}),r.forEachGetter(function(u,h){var d=o+h;gb(t,d,u,c)}),r.forEachChild(function(u,h){Sc(t,e,n.concat(h),u,i)})}function hb(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var l=Ol(s,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:r?t.commit:function(s,o,a){var l=Ol(s,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return O0(t,e)}},state:{get:function(){return nd(t.state,n)}}}),i}function O0(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function db(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function fb(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return cb(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function gb(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function mb(t){Tn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function nd(t,e){return e.reduce(function(n,r){return n[r]},t)}function Ol(t,e,n){return lb(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var pb="vuex bindings",Sg="vuex:mutations",cu="vuex:actions",Qi="vuex",_b=0;function yb(t,e){eS({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[pb]},function(n){n.addTimelineLayer({id:Sg,label:"Vuex Mutations",color:bg}),n.addTimelineLayer({id:cu,label:"Vuex Actions",color:bg}),n.addInspector({id:Qi,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Qi)if(r.filter){var i=[];G0(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[D0(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Qi){var i=r.nodeId;O0(e,i),r.state=Sb(Eb(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Qi){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit(function(){r.set(e._state.data,s,r.state.value)})}}),e.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Qi),n.sendInspectorState(Qi),n.addTimelineEvent({layerId:Sg,event:{time:Date.now(),title:r.type,data:s}})}),e.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=_b++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:cu,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:cu,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var bg=8702998,vb=6710886,wb=16777215,F0={label:"namespaced",textColor:wb,backgroundColor:vb};function N0(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function D0(t,e){return{id:e||"root",label:N0(e),tags:t.namespaced?[F0]:[],children:Object.keys(t._children).map(function(n){return D0(t._children[n],e+n+"/")})}}function G0(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[F0]:[]}),Object.keys(e._children).forEach(function(i){G0(t,e._children[i],n,r+i+"/")})}function Sb(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var s=bb(e);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?N0(o):o,editable:!1,value:Qu(function(){return s[o]})}})}return i}function bb(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=Qu(function(){return t[n]})}else e[n]=Qu(function(){return t[n]})}),e}function Eb(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Qu(t){try{return t()}catch(e){return e}}var Vn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},z0={namespaced:{configurable:!0}};z0.namespaced.get=function(){return!!this._rawModule.namespaced};Vn.prototype.addChild=function(e,n){this._children[e]=n};Vn.prototype.removeChild=function(e){delete this._children[e]};Vn.prototype.getChild=function(e){return this._children[e]};Vn.prototype.hasChild=function(e){return e in this._children};Vn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vn.prototype.forEachChild=function(e){Zs(this._children,e)};Vn.prototype.forEachGetter=function(e){this._rawModule.getters&&Zs(this._rawModule.getters,e)};Vn.prototype.forEachAction=function(e){this._rawModule.actions&&Zs(this._rawModule.actions,e)};Vn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Zs(this._rawModule.mutations,e)};Object.defineProperties(Vn.prototype,z0);var Vi=function(e){this.register([],e,!1)};Vi.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Vi.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};Vi.prototype.update=function(e){B0([],this.root,e)};Vi.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new Vn(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&Zs(n.modules,function(a,l){i.register(e.concat(l),a,r)})};Vi.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);i&&i.runtime&&n.removeChild(r)};Vi.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function B0(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;B0(t.concat(r),e.getChild(r),n.modules[r])}}function Mb(t){return new cn(t)}var cn=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Vi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(d,f){return l.call(o,d,f)},this.commit=function(d,f,g){return c.call(o,d,f,g)},this.strict=i;var u=this._modules.root.state;Sc(this,u,[],this._modules.root),td(this,u),r.forEach(function(h){return h(n)})},rd={state:{configurable:!0}};cn.prototype.install=function(e,n){e.provide(n||A0,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&yb(e,this)};rd.state.get=function(){return this._state.data};rd.state.set=function(t){};cn.prototype.commit=function(e,n,r){var i=this,s=Ol(e,n,r),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};cn.prototype.dispatch=function(e,n){var r=this,i=Ol(e,n),s=i.type,o=i.payload,a={type:s,payload:o},l=this._actions[s];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(d){try{r._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,r.state)})}catch{}u(d)},function(d){try{r._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,r.state,d)})}catch{}h(d)})})}};cn.prototype.subscribe=function(e,n){return I0(e,this._subscribers,n)};cn.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return I0(r,this._actionSubscribers,n)};cn.prototype.watch=function(e,n,r){var i=this;return Tn(function(){return e(i.state,i.getters)},n,Object.assign({},r))};cn.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};cn.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Sc(this,this.state,e,this._modules.get(e),r.preserveState),td(this,this.state)};cn.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=nd(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),L0(this)};cn.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};cn.prototype.hotUpdate=function(e){this._modules.update(e),L0(this,!0)};cn.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(cn.prototype,rd);const xb=[{id:"common",title:"Grundlagen",description:"Gemeinsame Grundlagen vor der Wahl eines Spezialisierungs-Tracks.",modules:[{id:"js-fundamentals",title:"JavaScript Grundlagen",description:"Lerne die Grundlagen von modernem JavaScript.",icon:"📜",track:"common",lessons:[{id:"intro",title:"Was ist JavaScript?",type:"markdown",content:"js_fundamentals/intro.md"},{id:"eloquent-js",title:"Eloquent JavaScript (Buch)",type:"external-link",url:"https://eloquentjavascript.net/"},{id:"codecademy",title:"Codecademy JS-Kurs",type:"external-link",url:"https://www.codecademy.com/learn/introduction-to-javascript"},{id:"quiz-1",title:"JS-Grundlagen Quiz #1",type:"quiz",quizId:"js_fundamentals_1"}]},{id:"vue-basics",title:"Vue + Vuex Grundlagen",description:"Verstehe, wie wir SPAs mit Vue 3, Vue Router und Vuex strukturieren.",icon:"🧩",track:"common",lessons:[{id:"vue-intro",title:"Vue 3 Grundlagen",type:"markdown",content:"vue_basics/intro.md"},{id:"vuex-guide",title:"Vuex Patterns",type:"markdown",content:"vue_basics/vuex.md"},{id:"router-docs",title:"Vue Router Anleitung",type:"external-link",url:"https://router.vuejs.org/guide/"}]},{id:"geo-basics",title:"Geo-Grundlagen",description:"Projektionen, WMS, WFS und Karten-Konzepte.",icon:"🗺️",track:"common",lessons:[{id:"projections-theory",title:"Koordinatensysteme & Projektionen",type:"markdown",content:"geo_basics/projections.md"},{id:"wms-vs-wfs",title:"WMS vs WFS",type:"markdown",content:"geo_basics/wms_vs_wfs.md"},{id:"wms-playground",title:"WMS Playground",type:"geo-playground",configId:"wms_basic"},{id:"wfs-playground",title:"WFS Playground",type:"geo-playground",configId:"wfs_basic"},{id:"geo-tasklist",title:"Geo-Aufgaben",type:"task-list",tasksId:"geo_basics_tasks"}]}]},{id:"masterportal",title:"Masterportal-Track",description:"Spezialisiere dich auf den Masterportal-Stack und seine Erweiterungspunkte.",modules:[{id:"masterportal",title:"Masterportal Übersicht",description:"Architektur, Konfiguration und Erweiterungspunkte.",icon:"🏛️",track:"masterportal",lessons:[{id:"overview",title:"Was ist Masterportal?",type:"markdown",content:"masterportal/overview.md"},{id:"installation",title:"Installation & Setup",type:"markdown",content:"masterportal/installation.md"},{id:"config-structure",title:"Konfigurationsstruktur",type:"markdown",content:"masterportal/config_structure.md"},{id:"portal-setup",title:"Ein Portal aufsetzen",type:"markdown",content:"masterportal/portal_setup.md"},{id:"config-practice",title:"Praktische Übung: Config anpassen",type:"markdown",content:"masterportal/config.md"},{id:"architecture",title:"Architektur verstehen",type:"markdown",content:"masterportal/architecture.md"},{id:"tool-development",title:"Tool-Entwicklung",type:"markdown",content:"masterportal/tool_development.md"},{id:"masterportal-docs",title:"Offizielle Dokumentation",type:"external-link",url:"https://www.masterportal.org/dokumentation/dokumentation"}]},{id:"testing",title:"Testing mit Mocha/Chai/Sinon",description:"Test-Philosophie, Tools und Best Practices.",icon:"🧪",track:"masterportal",lessons:[{id:"testing-stack",title:"Unser Testing-Stack",type:"markdown",content:"testing/stack.md"},{id:"mocha-resources",title:"Mocha Dokumentation",type:"external-link",url:"https://mochajs.org/"}]},{id:"capstone",title:"Abschlussprojekt",description:"Kombiniere alles in einer kleinen Geo-Anwendung.",icon:"🚀",track:"masterportal",lessons:[{id:"brief",title:"Projektbeschreibung",type:"markdown",content:"capstone/brief.md"},{id:"task-checklist",title:"Build-Checkliste",type:"task-list",tasksId:"capstone_tasks"}]}]},{id:"polar",title:"POLAR-Track",description:"Spezialisiere dich auf POLAR – Plugin-basierte OpenLayers-Anwendungen mit Vue 3 und Vuetify.",modules:[{id:"polar-quickstart",title:"POLAR in 15 Minuten",description:"Schnelleinstieg: Was ist POLAR, Repo-Struktur und erste Schritte.",icon:"⚡",track:"polar",lessons:[{id:"quick-start",title:"POLAR Quick Start Guide",type:"markdown",content:"polar/quick_start.md"},{id:"polar-docs",title:"POLAR Offizielle Dokumentation",type:"external-link",url:"https://github.com/Dataport/polar"}]},{id:"polar-week1",title:"Woche 1: Architektur & Setup",description:"Monorepo verstehen, Snowbox starten, Plugin-Lifecycle kennenlernen.",icon:"🏗️",track:"polar",lessons:[{id:"w1-architecture",title:"POLAR-Architektur verstehen",type:"markdown",content:"polar/week1_architecture.md"},{id:"w1-tasks",title:"Hands-on: Snowbox & Store erkunden",type:"task-list",tasksId:"polar_week1_tasks"},{id:"w1-quiz",title:"Knowledge Check Woche 1",type:"quiz",quizId:"polar_week1_quiz"}]},{id:"polar-week2",title:"Woche 2: Plugin-Anatomie",description:"Store-Module, Vue-Components mit Vuetify, 9Layout-System.",icon:"🧩",track:"polar",lessons:[{id:"w2-plugin-anatomy",title:"Plugin-Struktur im Detail",type:"markdown",content:"polar/week2_plugin_anatomy.md"},{id:"w2-tasks",title:"Hands-on: Counter-Plugin erstellen",type:"task-list",tasksId:"polar_week2_tasks"},{id:"w2-quiz",title:"Knowledge Check Woche 2",type:"quiz",quizId:"polar_week2_quiz"}]},{id:"polar-week3",title:"Woche 3: Client-Entwicklung",description:"Generic vs. Specialized Clients, addPlugins.ts, Map-Konfiguration.",icon:"🖥️",track:"polar",lessons:[{id:"w3-client-dev",title:"Client-Entwicklung verstehen",type:"markdown",content:"polar/week3_client_development.md"},{id:"w3-tasks",title:"Hands-on: Dashboard-Client aufsetzen",type:"task-list",tasksId:"polar_week3_tasks"},{id:"w3-quiz",title:"Knowledge Check Woche 3",type:"quiz",quizId:"polar_week3_quiz"}]},{id:"polar-week4",title:"Woche 4: Testing & Qualität",description:"Jest + Playwright, createTestMountParameters, Code-Coverage.",icon:"🧪",track:"polar",lessons:[{id:"w4-testing",title:"Testing-Strategien für POLAR",type:"markdown",content:"polar/week4_testing.md"},{id:"w4-tasks",title:"Hands-on: Tests für Counter-Plugin",type:"task-list",tasksId:"polar_week4_tasks"},{id:"w4-quiz",title:"Knowledge Check Woche 4",type:"quiz",quizId:"polar_week4_quiz"}]},{id:"polar-week5",title:"Woche 5: Release & Produktion",description:"Semantic Versioning, CHANGELOG, NPM-Publishing, CI/CD.",icon:"🚀",track:"polar",lessons:[{id:"w5-release",title:"Release-Prozesse verstehen",type:"markdown",content:"polar/week5_release.md"},{id:"w5-tasks",title:"Hands-on: Counter-Plugin releasen",type:"task-list",tasksId:"polar_week5_tasks"},{id:"w5-quiz",title:"Knowledge Check Woche 5",type:"quiz",quizId:"polar_week5_quiz"}]},{id:"polar-capstone",title:"Capstone: MeasureTool-Plugin",description:"Realistisches Projekt: Distanz- und Flächenmessung auf der Karte.",icon:"📏",track:"polar",lessons:[{id:"capstone-brief",title:"Capstone-Projektbeschreibung",type:"markdown",content:"polar/capstone_brief.md"},{id:"capstone-tasks",title:"Capstone Meilensteine",type:"task-list",tasksId:"polar_capstone_tasks"}]}]}],Cb={tracks:xb},j0=Cb.tracks||[],id=j0.flatMap(t=>(t.modules||[]).map(e=>({...e,track:e.track||t.id}))),bc=t=>{const e=Array.isArray(t)?t:t?[t]:[];return id.filter(n=>n.track==="common"||e.includes(n.track))},Ec=t=>id.find(e=>e.id===t),Eg=()=>id,wt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},kb={class:"sidebar"},Pb={class:"sidebar__nav"},Tb={class:"sidebar__icon"},Rb={key:0,class:"sidebar__check"},Ab={__name:"Sidebar",setup(t){const e=wc(),n=ln(),r=ne(()=>[{label:"Dashboard",to:{name:"dashboard"},icon:"📊"},...bc(n.state.tracks.enabled).map(s=>({label:s.title,to:{name:"module",params:{id:s.id}},icon:s.icon,moduleId:s.id,isCompleted:n.getters["progress/moduleProgress"](s.id)===100})),{label:"Erfolge",to:{name:"achievements"},icon:"🏆"},{label:"Team",to:{name:"team"},icon:"👥"},{label:"FAQ",to:{name:"faq"},icon:"❓"}]),i=s=>{var o;return s?s.name==="dashboard"?e.name==="dashboard":s.name==="team"?e.name==="team":s.name==="achievements"?e.name==="achievements":s.name==="faq"?e.name==="faq":e.params.id===((o=s.params)==null?void 0:o.id):!1};return(s,o)=>{const a=Hs("RouterLink");return F(),B("aside",kb,[o[0]||(o[0]=S("div",{class:"sidebar__header"},[S("div",{class:"logo"},"🧭"),S("div",null,[S("p",{class:"sidebar__title"},"Onboarding"),S("p",{class:"sidebar__subtitle"},"Academy")])],-1)),S("nav",Pb,[(F(!0),B(Re,null,gt(r.value,l=>(F(),yt(a,{key:l.label,to:l.to,class:vt(["sidebar__link",{"sidebar__link--active":i(l.to),"sidebar__link--completed":l.isCompleted}])},{default:sr(()=>[S("span",Tb,X(l.icon||"•"),1),S("span",null,X(l.label),1),l.isCompleted?(F(),B("span",Rb,"✓")):Ye("",!0)]),_:2},1032,["to","class"]))),128))])])}}},Ib=wt(Ab,[["__scopeId","data-v-883bfc7f"]]),Xs={"js-fundamentals":{id:"js-fundamentals",name:"JavaScript-Meister",description:"Modul JavaScript-Grundlagen abgeschlossen",image:"/src/data/img/badges/javascript.png",moduleId:"js-fundamentals",type:"module",track:"common"},"vue-basics":{id:"vue-basics",name:"Vue-Experte",description:"Vue + Vuex Grundlagen gemeistert",image:"/src/data/img/badges/vue.png",moduleId:"vue-basics",type:"module",track:"common"},"geo-basics":{id:"geo-basics",name:"Geo-Spezialist",description:"Geo-Grundlagen abgeschlossen - Projektionen, WMS, WFS",image:"/src/data/img/badges/geoBasics.png",moduleId:"geo-basics",type:"module",track:"common"},masterportal:{id:"masterportal",name:"Masterportal-Experte",description:"Masterportal-Übersicht abgeschlossen",image:"/src/data/img/badges/masterportalOverview.png",moduleId:"masterportal",type:"module",track:"masterportal"},testing:{id:"testing",name:"Testing-Guru",description:"Testing mit Mocha/Chai/Sinon gemeistert",image:"/src/data/img/badges/testing.png",moduleId:"testing",type:"module",track:"masterportal"},capstone:{id:"capstone",name:"Abschlussprojekt-Champion",description:"Abschlussprojekt abgeschlossen",image:"/src/data/img/badges/capstoneProject.png",moduleId:"capstone",type:"module",track:"masterportal"},"polar-mapping":{id:"polar-mapping",name:"POLAR Framework Expert",description:"Completed POLAR Framework Basics",image:"/src/data/img/badges/polarBasics.png",moduleId:"polar-mapping",type:"module",track:"polar"},"polar-quickstart":{id:"polar-quickstart",name:"POLAR Quick Starter",description:"POLAR in 15 Minuten gemeistert",image:"/src/data/img/badges/polarQuickstart.png",moduleId:"polar-quickstart",type:"module",track:"polar"},"polar-week1":{id:"polar-week1",name:"POLAR Architekt",description:"Woche 1: Architektur & Setup abgeschlossen",image:"/src/data/img/badges/polarWeek1.png",moduleId:"polar-week1",type:"module",track:"polar"},"polar-week2":{id:"polar-week2",name:"Plugin-Entwickler",description:"Woche 2: Plugin-Anatomie gemeistert",image:"/src/data/img/badges/polarWeek2.png",moduleId:"polar-week2",type:"module",track:"polar"},"polar-week3":{id:"polar-week3",name:"Client-Spezialist",description:"Woche 3: Client-Entwicklung abgeschlossen",image:"/src/data/img/badges/polarWeek3.png",moduleId:"polar-week3",type:"module",track:"polar"},"polar-week4":{id:"polar-week4",name:"Testing-Profi",description:"Woche 4: Testing & Qualität gemeistert",image:"/src/data/img/badges/polarWeek4.png",moduleId:"polar-week4",type:"module",track:"polar"},"polar-week5":{id:"polar-week5",name:"Release-Manager",description:"Woche 5: Release & Produktion abgeschlossen",image:"/src/data/img/badges/polarWeek5.png",moduleId:"polar-week5",type:"module",track:"polar"},"polar-capstone":{id:"polar-capstone",name:"MeasureTool-Champion",description:"Capstone-Projekt: MeasureTool-Plugin erfolgreich entwickelt",image:"/src/data/img/badges/polarCapstone.png",moduleId:"polar-capstone",type:"module",track:"polar"},"masterportal-track":{id:"masterportal-track",name:"Masterportal-Meister",description:"Gesamten Masterportal-Track abgeschlossen",image:"/src/data/img/badges/masterportalTrackCompletion.png",type:"track",track:"masterportal",requiredModules:["js-fundamentals","vue-basics","geo-basics","masterportal","testing","capstone"]},"polar-track":{id:"polar-track",name:"POLAR-Meister",description:"Gesamten POLAR-Track abgeschlossen (5 Wochen + Capstone)",image:"/src/data/img/badges/polarTrackCompletion.png",type:"track",track:"polar",requiredModules:["js-fundamentals","vue-basics","geo-basics","polar-quickstart","polar-week1","polar-week2","polar-week3","polar-week4","polar-week5","polar-capstone"]}},sd=()=>Object.values(Xs),uu=()=>Object.values(Xs).filter(t=>t.type==="module"),Lb=()=>Object.values(Xs).filter(t=>t.type==="track"),Ob=t=>Xs[t]||null,od=t=>Object.values(Xs).find(e=>e.moduleId===t),Fb={class:"topbar"},Nb={class:"topbar__title"},Db={class:"topbar__actions"},Gb={class:"badge-indicator__count"},zb={key:0,class:"badge-indicator__dot"},Bb={class:"topbar__user"},jb={class:"avatar"},Wb={__name:"TopBar",props:{title:{type:[String,Object],default:"Dashboard"},userName:{type:[String,Object],default:"Nachwuchskraft"}},emits:["open-tutorial"],setup(t,{emit:e}){const n=t,r=e,i=ln(),s=ne(()=>i.getters["badges/earnedBadges"].length),o=sd().length,a=ne(()=>i.getters["badges/unviewedCount"]),l=ne(()=>a.value>0),c=()=>{window.location.href="/achievements"},u=()=>{r("open-tutorial")};return(h,d)=>(F(),B("header",Fb,[S("div",Nb,X(n.title),1),S("div",Db,[S("button",{class:"tutorial-btn",onClick:u,title:"Tutorial anzeigen"},[...d[0]||(d[0]=[S("span",{class:"tutorial-btn__icon"},"❓",-1)])]),S("button",{class:vt(["badge-indicator",{"badge-indicator--unviewed":l.value}]),onClick:c},[d[1]||(d[1]=S("span",{class:"badge-indicator__icon"},"🏆",-1)),S("span",Gb,X(s.value)+"/"+X(Cr(o)),1),l.value?(F(),B("span",zb)):Ye("",!0)],2),S("div",Bb,[S("div",jb,X(String(n.userName).charAt(0)),1),S("span",null,X(n.userName),1)])])]))}},Vb=wt(Wb,[["__scopeId","data-v-945c3875"]]),Ub={class:"modal-content"},Kb={class:"modal-body"},$b={class:"badge-display"},qb=["src","alt"],Hb={class:"badge-name"},Zb={class:"badge-description"},Xb={__name:"BadgeUnlockModal",setup(t){const e=ln(),n=Tt(!1),r=Tt(null),i=ne(()=>e.getters["badges/lastEarnedBadge"]);Tn(i,a=>{if(a){const l=Ob(a);l&&(r.value=l,n.value=!0)}});const s=()=>{r.value&&e.commit("badges/markBadgeViewed",r.value.id),n.value=!1,r.value=null},o=a=>{a.target===a.currentTarget&&s()};return(a,l)=>(F(),yt(Fp,{to:"body"},[Xe(qu,{name:"modal"},{default:sr(()=>[n.value&&r.value?(F(),B("div",{key:0,class:"modal-backdrop",onClick:o},[S("div",Ub,[S("div",{class:"modal-header"},[l[0]||(l[0]=S("h2",{class:"modal-title"},"🎉 Abzeichen freigeschaltet!",-1)),S("button",{class:"modal-close",onClick:s,"aria-label":"Schließen"},"×")]),S("div",Kb,[S("div",$b,[S("img",{src:r.value.image,alt:r.value.name,class:"badge-image"},null,8,qb)]),S("h3",Hb,X(r.value.name),1),S("p",Zb,X(r.value.description),1)]),S("div",{class:"modal-footer"},[S("button",{class:"btn-primary",onClick:s},"Fantastisch!")])])])):Ye("",!0)]),_:1})]))}},Yb=wt(Xb,[["__scopeId","data-v-077c7123"]]),Jb={class:"modal-content"},Qb={class:"modal-header"},eE={class:"slide-indicator"},tE=["onClick"],nE={class:"modal-body"},rE={class:"slide-icon"},iE={class:"slide-title"},sE={class:"slide-description"},oE={class:"feature-list"},aE={class:"feature-emoji"},lE={class:"feature-text"},cE={class:"modal-footer"},Mg=4,uE={__name:"IntroductionModal",emits:["close"],setup(t,{emit:e}){const n=ln(),r=e,i=Tt(0),s=[{icon:"🚀",title:"Willkommen in der Onboarding Academy!",description:"Deine Reise zum Geo-Entwickler bei Dataport beginnt hier. Lerne in deinem eigenen Tempo und sammle Abzeichen auf dem Weg.",features:[{emoji:"📚",text:"Grundlagen-Track: JavaScript, Vue.js & Geo-Basics"},{emoji:"⚡",text:"Spezialisierung: Masterportal oder POLAR Framework"},{emoji:"🎯",text:"Capstone-Projekt: Zeig dein Können!"}]},{icon:"📖",title:"Vielfältige Lernformate",description:"Jedes Modul bietet unterschiedliche Lesson-Typen für abwechslungsreiches Lernen.",features:[{emoji:"📝",text:"Markdown-Inhalte: Strukturierte Lerntexte"},{emoji:"❓",text:"Quizzes: Teste dein Wissen (70% zum Bestehen)"},{emoji:"✅",text:"Task-Listen: Praktische Aufgaben zum Abhaken"},{emoji:"🗺️",text:"Geo-Playgrounds: Interaktive Karten-Demos"}]},{icon:"🏆",title:"Achievements & Fortschritt",description:"Verfolge deinen Fortschritt und schalte Abzeichen frei, während du lernst.",features:[{emoji:"🎖️",text:"9 Abzeichen zum Freischalten (Module & Tracks)"},{emoji:"📊",text:"Progress-Tracking für jedes Modul"},{emoji:"🎉",text:"Badge-Benachrichtigungen bei Erfolgen"},{emoji:"💾",text:"Automatische Speicherung deines Fortschritts"}]},{icon:"🎓",title:"Los geht's!",description:"Alles bereit? Starte mit dem Dashboard und wähle deinen ersten Track.",features:[{emoji:"🏠",text:"Dashboard: Übersicht & Track-Auswahl"},{emoji:"📚",text:"Module: Lessons & Seitennavigation"},{emoji:"🏅",text:"Achievements: Deine Badge-Sammlung"},{emoji:"👥",text:"Team: Deine Ansprechpartner bei Fragen"}]}],o=ne(()=>s[i.value]),a=ne(()=>i.value===0),l=ne(()=>i.value===Mg-1),c=()=>{l.value||i.value++},u=()=>{a.value||i.value--},h=g=>{i.value=g},d=()=>{n.commit("user/markIntroSeen"),r("close")},f=()=>{d()};return(g,m)=>(F(),yt(Fp,{to:"body"},[Xe(qu,{name:"modal"},{default:sr(()=>[S("div",{class:"modal-backdrop",onClick:_0(f,["self"])},[S("div",Jb,[S("div",Qb,[S("div",eE,[(F(),B(Re,null,gt(Mg,p=>S("span",{key:p,class:vt(["dot",{active:p-1===i.value}]),onClick:_=>h(p-1)},null,10,tE)),64))]),S("button",{class:"modal-close",onClick:f,"aria-label":"Überspringen"},"×")]),S("div",nE,[Xe(qu,{name:"slide",mode:"out-in"},{default:sr(()=>[(F(),B("div",{key:i.value,class:"slide-content"},[S("div",rE,X(o.value.icon),1),S("h2",iE,X(o.value.title),1),S("p",sE,X(o.value.description),1),S("ul",oE,[(F(!0),B(Re,null,gt(o.value.features,(p,_)=>(F(),B("li",{key:_,class:"feature-item"},[S("span",aE,X(p.emoji),1),S("span",lE,X(p.text),1)]))),128))])]))]),_:1})]),S("div",cE,[a.value?Ye("",!0):(F(),B("button",{key:0,class:"btn-secondary",onClick:u}," ← Zurück ")),m[0]||(m[0]=S("div",{class:"spacer"},null,-1)),l.value?(F(),B("button",{key:2,class:"btn-primary",onClick:d}," Jetzt starten! 🚀 ")):(F(),B("button",{key:1,class:"btn-primary",onClick:c}," Weiter → "))])])])]),_:1})]))}},hE=wt(uE,[["__scopeId","data-v-d565e31a"]]),dE={class:"layout"},fE={class:"layout__main"},gE={class:"layout__content"},mE={__name:"AppLayout",props:{title:{type:[String,Object],default:"Onboarding Academy"},userName:{type:[String,Object],default:"Nachwuchskraft"}},setup(t){const e=t,n=ln(),r=wc(),i=Tt(!1),s=ne(()=>n.getters["user/hasSeenIntro"]);gc(()=>{!s.value&&r.name==="dashboard"&&setTimeout(()=>{i.value=!0},500)});const o=()=>{i.value=!0},a=()=>{i.value=!1};return(l,c)=>(F(),B("div",dE,[Xe(Ib,{class:"layout__sidebar"}),S("div",fE,[Xe(Vb,{title:e.title,"user-name":e.userName,onOpenTutorial:o},null,8,["title","user-name"]),S("main",gE,[xv(l.$slots,"default",{},void 0)])]),Xe(Yb),i.value?(F(),yt(hE,{key:0,onClose:a})):Ye("",!0)]))}},pE=wt(mE,[["__scopeId","data-v-da14ae39"]]),_E={__name:"App",setup(t){const e=wc(),n=ln(),r=ne(()=>{if(e.name==="dashboard")return"Dashboard";if(e.name==="team")return"Team";if(e.name==="module"){const s=Ec(e.params.id);return s?s.title:"Module"}return"Onboarding Academy"}),i=ne(()=>n.state.user.name);return(s,o)=>{const a=Hs("router-view");return F(),yt(pE,{title:r.value,"user-name":i.value},{default:sr(()=>[Xe(a)]),_:1},8,["title","user-name"])}}},yE={class:"progress"},vE={key:0,class:"progress__label"},wE={class:"progress__track"},SE={class:"progress__percent"},bE={__name:"ProgressBar",props:{value:{type:Number,default:0},label:{type:String,default:""}},setup(t){const e=t;return(n,r)=>(F(),B("div",yE,[e.label?(F(),B("div",vE,X(e.label),1)):Ye("",!0),S("div",wE,[S("div",{class:"progress__value",style:Is({width:`${Math.min(e.value,100)}%`})},null,4)]),S("span",SE,X(Math.round(e.value))+"%",1)]))}},ad=wt(bE,[["__scopeId","data-v-534b4916"]]),EE={class:"module-card__icon"},ME={class:"module-card__title"},xE={class:"module-card__description"},CE={key:0,class:"module-card__badge"},kE=["src","alt"],PE={class:"module-card__progress","aria-label":"Module progress"},TE={class:"module-card__percentage"},RE={__name:"ModuleCard",props:{module:{type:Object,required:!0},progress:{type:Number,default:0}},setup(t){const e=t,n=ln(),r=ne(()=>Math.round(e.progress)),i=ne(()=>r.value===100),s=ne(()=>od(e.module.id)),o=ne(()=>s.value?n.getters["badges/hasBadge"](s.value.id):!1);return(a,l)=>{const c=Hs("RouterLink");return F(),yt(c,{to:{name:"module",params:{id:e.module.id}},class:"module-card"},{default:sr(()=>[S("div",EE,X(e.module.icon),1),S("h3",ME,X(e.module.title),1),S("p",xE,X(e.module.description),1),i.value&&o.value&&s.value?(F(),B("div",CE,[S("img",{src:s.value.image,alt:s.value.name,class:"module-card__badge-image"},null,8,kE)])):Ye("",!0),S("div",PE,[Xe(ad,{value:r.value},null,8,["value"]),S("span",TE,X(r.value)+"%",1)])]),_:1},8,["to"])}}},AE=wt(RE,[["__scopeId","data-v-139fdd41"]]),IE={class:"badge-mini-showcase__label"},LE={class:"badge-count"},OE={key:0,class:"badge-mini-showcase__badges"},FE=["title"],NE=["src","alt"],DE={key:0,class:"badge-mini badge-mini--more"},GE={class:"badge-mini__plus"},zE={key:1,class:"badge-mini-showcase__empty"},BE={__name:"BadgeMiniShowcase",setup(t){const e=ln(),n=sd(),r=ne(()=>e.getters["badges/earnedBadges"]),i=ne(()=>n.filter(l=>r.value.includes(l.id)).slice(0,6)),s=ne(()=>r.value.length),o=ne(()=>n.length),a=ne(()=>s.value>6);return(l,c)=>{const u=Hs("RouterLink");return F(),yt(u,{to:"/achievements",class:"badge-mini-showcase"},{default:sr(()=>[S("div",IE,[c[0]||(c[0]=S("span",{class:"badge-icon"},"🏆",-1)),S("span",LE,X(s.value)+"/"+X(o.value),1)]),i.value.length>0?(F(),B("div",OE,[(F(!0),B(Re,null,gt(i.value,h=>(F(),B("div",{key:h.id,class:"badge-mini",title:h.name},[S("img",{src:h.image,alt:h.name,class:"badge-mini__image"},null,8,NE)],8,FE))),128)),a.value?(F(),B("div",DE,[S("span",GE,"+"+X(s.value-6),1)])):Ye("",!0)])):(F(),B("div",zE,[...c[1]||(c[1]=[S("span",{class:"empty-text"},"Noch keine Abzeichen",-1)])]))]),_:1})}}},jE=wt(BE,[["__scopeId","data-v-0b1f0c07"]]),WE={class:"dashboard"},VE={class:"card dashboard__hero"},UE={class:"eyebrow"},KE={class:"dashboard__progress"},$E={class:"dashboard__actions"},qE={class:"card dashboard__tracks"},HE={class:"dashboard__tracks-header"},ZE={class:"dashboard__track-grid"},XE={class:"track-card__header"},YE={class:"eyebrow"},JE={key:0,class:"track-card__badge"},QE={class:"muted"},eM=["disabled","onClick"],tM={key:0,class:"card dashboard__next"},nM={class:"muted"},rM={class:"dashboard__modules"},iM={__name:"DashboardView",setup(t){const e=ln(),n=ne(()=>e.getters["progress/overallProgress"]),r=m=>e.getters["progress/moduleProgress"](m),i=ne(()=>e.getters["tracks/enabledTracks"]),s=["js-fundamentals","vue-basics","geo-basics"],o=ne(()=>s.every(m=>r(m)===100)),a=ne(()=>j0.filter(m=>m.id!=="common")),l=ne(()=>bc(i.value)),c=m=>e.getters["tracks/isTrackEnabled"](m),u=ne(()=>{for(const m of l.value)for(const p of m.lessons)if(!e.getters["progress/isLessonCompleted"](m.id,p.id))return{module:m,lesson:p};return null}),h=Tt(!1),d=()=>{["js-fundamentals","vue-basics","geo-basics"].forEach(p=>{const _=l.value.find(y=>y.id===p);_&&_.lessons.forEach(y=>{e.commit("progress/completeLesson",{moduleId:p,lessonId:y.id})})})},f=()=>{h.value?(e.commit("progress/resetProgress"),e.commit("quiz/resetQuizResults"),e.commit("tracks/resetTrack"),e.commit("badges/resetBadges"),Object.keys(localStorage).forEach(m=>{m.startsWith("onboarding-tasks-")&&localStorage.removeItem(m)}),h.value=!1,window.location.reload()):(h.value=!0,setTimeout(()=>{h.value=!1},3e3))},g=m=>{o.value&&e.commit("tracks/toggleTrack",m)};return Tn(()=>Eg().map(p=>({id:p.id,progress:r(p.id)})),m=>{m.forEach(({id:p,progress:_})=>{if(_===100){const y=od(p);y&&!e.getters["badges/hasBadge"](y.id)&&e.commit("badges/earnBadge",y.id)}})},{deep:!0,immediate:!0}),Tn(()=>Eg().map(m=>r(m.id)),()=>{["masterportal","polar"].forEach(m=>{const p=Xs[`${m}-track`];p&&p.requiredModules&&p.requiredModules.every(y=>r(y)===100)&&!e.getters["badges/hasBadge"](p.id)&&e.commit("badges/earnBadge",p.id)})},{deep:!0,immediate:!0}),(m,p)=>{const _=Hs("RouterLink");return F(),B("div",WE,[S("section",VE,[S("div",null,[S("p",UE,"Hi, "+X(Cr(e).getters["user/name"]||Cr(e).state.user.name)+" 👋",1),p[0]||(p[0]=S("h1",null,"Willkommen in der Onboarding Academy",-1)),p[1]||(p[1]=S("p",{class:"muted"}," Verfolge deinen Fortschritt in JavaScript, Vue und Geo-Entwicklungsthemen. Schließe die Grundlagenmodule ab, wähle eine Spezialisierung und arbeite dich zum Abschlussprojekt vor. ",-1))]),S("div",KE,[Xe(ad,{label:"Gesamtfortschritt",value:n.value},null,8,["value"]),Xe(jE),S("div",$E,[S("button",{onClick:d,class:"debug-btn",title:"Debug: Alle Grundlagenmodule abschließen"}," 🚀 Springe zur Spezialisierung "),S("button",{onClick:f,class:vt(["reset-btn",{"reset-btn--confirm":h.value}])},X(h.value?"Klicke erneut zum Bestätigen":"Fortschritt zurücksetzen"),3)])])]),S("section",qE,[S("div",HE,[p[2]||(p[2]=S("div",null,[S("p",{class:"eyebrow"},"Wähle deine Spezialisierungen"),S("h3",null,"Schalte Tracks nach Geo-Grundlagen frei"),S("p",{class:"muted"}," Schließe die Geo-Grundlagen ab, um Spezialisierungs-Tracks freizuschalten. Du kannst beide Tracks aktivieren und parallel oder nacheinander bearbeiten. ")],-1)),S("div",{class:vt(["dashboard__track-status",{"dashboard__track-status--ready":o.value}])},X(o.value?"Tracks freigeschaltet":"Schließe alle Grundlagenmodule ab zum Freischalten"),3)]),S("div",ZE,[(F(!0),B(Re,null,gt(a.value,y=>(F(),B("div",{key:y.id,class:vt(["track-card",{"track-card--selected":c(y.id),"track-card--locked":!o.value}])},[S("div",XE,[S("div",null,[S("p",YE,X(y.title),1),S("h4",null,X(y.description),1)]),c(y.id)?(F(),B("span",JE,"Aktiv")):Ye("",!0)]),S("p",QE,X(y.modules.length)+" Module",1),S("button",{class:vt(["track-card__button",{"track-card__button--active":c(y.id)}]),disabled:!o.value,onClick:w=>g(y.id)},X(c(y.id)?"Deaktivieren":o.value?"Track aktivieren":"Gesperrt"),11,eM)],2))),128))])]),u.value?(F(),B("section",tM,[S("div",null,[p[3]||(p[3]=S("p",{class:"eyebrow"},"Nächste empfohlene Lektion",-1)),S("h3",null,X(u.value.module.title),1),S("p",nM,X(u.value.lesson.title),1)]),Xe(_,{class:"next-btn",to:{name:"module",params:{id:u.value.module.id},query:{lesson:u.value.lesson.id}}},{default:sr(()=>[...p[4]||(p[4]=[On(" Weiter → ",-1)])]),_:1},8,["to"])])):Ye("",!0),S("section",rM,[(F(!0),B(Re,null,gt(l.value,y=>(F(),yt(AE,{key:y.id,module:y,progress:r(y.id)},null,8,["module","progress"]))),128))])])}}},sM=wt(iM,[["__scopeId","data-v-9536fffb"]]),oM=`# Capstone-Projekt: WFS Feature-Distanz-Messtool\r
\r
## Projektübersicht\r
\r
Gratulation! Du hast alle Grundlagen gemeistert. Jetzt ist es Zeit, dein Wissen in einem **echten Masterportal-Tool** anzuwenden.\r
\r
**Deine Aufgabe:** Entwickle ein Tool für das Masterportal, das die **Distanz zwischen zwei WFS-Features** misst und visualisiert.\r
\r
## Warum dieses Projekt?\r
\r
Als Geo-Entwickler wirst du häufig Tools bauen, die:\r
- Mit der Karte interagieren (Feature-Selektion)\r
- Geodaten verarbeiten (Distanz-Berechnung)\r
- Ergebnisse visualisieren (Linien, Labels)\r
- Eine benutzerfreundliche UI bieten\r
\r
Dieses Projekt vereint all diese Skills!\r
\r
## Funktionale Anforderungen\r
\r
### Must-Have Features\r
\r
**1. Feature-Selektion**\r
- User kann auf WFS-Features auf der Karte klicken\r
- Zwei Features müssen ausgewählt werden können\r
- Bereits ausgewählte Features werden visuell hervorgehoben (z.B. andersfarbiger Marker)\r
\r
**2. Distanz-Berechnung**\r
- Berechne die Luftlinie zwischen beiden Features in Metern\r
- Nutze OpenLayers \`getDistance()\` Funktion\r
- Runde auf 2 Nachkommastellen\r
\r
**3. Visualisierung**\r
- Zeichne eine Linie zwischen den beiden Features\r
- Zeige die Distanz in einem Label auf der Karte\r
- Optional: Mid-Point-Marker mit Distanz-Text\r
\r
**4. User Interface**\r
- Tool-Fenster mit:\r
  - Anleitung: "Klicke auf zwei Features..."\r
  - Anzeige der ausgewählten Features (Name/ID)\r
  - Berechnete Distanz prominent angezeigt\r
  - "Zurücksetzen"-Button zum Löschen der Auswahl\r
  - "Schließen"-Button\r
\r
**5. Cleanup**\r
- Beim Schließen des Tools: Alle Marker/Linien entfernen\r
- Bei "Zurücksetzen": Neue Auswahl möglich\r
\r
### Nice-to-Have Features\r
\r
**Optional, wenn Zeit bleibt:**\r
\r
- **Multiple Distanzen:** Mehr als 2 Features, zeige alle Paar-Distanzen\r
- **Route statt Luftlinie:** Nutze Routing-Service für echte Wegstrecke\r
- **Export:** Ergebnisse als CSV oder JSON exportieren\r
- **Historien-Log:** Liste der letzten Messungen\r
- **Feature-Suche:** Suche Features per Name statt Klick\r
\r
## Technische Anforderungen\r
\r
### Architektur\r
\r
Dein Tool besteht aus:\r
\r
\`\`\`\r
src/modules/tools/featureDistance/\r
├── components/\r
│   └── FeatureDistance.vue   # Vue-Komponente mit Template\r
├── store/\r
│   ├── index.js              # Store-Konfiguration\r
│   ├── state.js              # State-Definition\r
│   ├── mutations.js          # State-Änderungen\r
│   ├── actions.js            # Business-Logik\r
│   └── getters.js            # Computed Properties\r
└── tests/\r
    └── unit/\r
        └── store/            # Unit-Tests für Store\r
\`\`\`\r
\r
### Technologie-Stack\r
\r
- **Vue 3:** Komponentenbasierte UI mit Options API\r
- **Vuex 4:** State Management für Tool-State\r
- **OpenLayers:** Karten-Interaktion, Geometrie-Operationen\r
- **i18next:** Mehrsprachigkeit (über \`$t()\`)\r
\r
### WFS-Layer verwenden\r
\r
Nutze einen verfügbaren WFS-Layer aus der **services.json** deiner Portal-Config.\r
\r
**Beispiel-Dienste im Masterportal:**\r
- Deutsche Städte (Natural Earth via Geoserver)\r
- Hamburg Schulen (wenn in services.json definiert)\r
- Oder ein eigener Test-WFS\r
\r
**Config-Beispiel:**\r
\r
\`\`\`json\r
{\r
  "id": "wfs_cities",\r
  "name": "Deutsche Städte",\r
  "url": "https://example.com/geoserver/wfs",\r
  "typ": "WFS",\r
  "featureType": "cities",\r
  "version": "2.0.0"\r
}\r
\`\`\`\r
\r
## Abnahmekriterien\r
\r
### Funktionalität (60%)\r
\r
✅ Tool kann über Menü aktiviert werden  \r
✅ Click auf WFS-Feature selektiert es  \r
✅ Zwei Features können ausgewählt werden  \r
✅ Distanz wird korrekt berechnet (in Metern)  \r
✅ Verbindungslinie wird auf Karte gezeichnet  \r
✅ UI zeigt ausgewählte Features und Distanz  \r
✅ "Zurücksetzen" löscht Auswahl und Visualisierung  \r
✅ Schließen des Tools entfernt alle Elemente von der Karte  \r
\r
### Code-Qualität (25%)\r
\r
✅ Code folgt ESLint-Regeln des Projekts  \r
✅ Sinnvolle Variablen-/Funktionsnamen  \r
✅ Kommentare an wichtigen Stellen  \r
✅ Keine Console-Errors im Browser  \r
✅ Model und View klar getrennt  \r
✅ Events statt direkter Funktionsaufrufe  \r
\r
### Testing (15%)\r
\r
✅ Mindestens 3 Unit-Tests geschrieben  \r
✅ Tests decken wichtigste Funktionen ab:\r
  - Feature-Selektion\r
  - Distanz-Berechnung\r
  - Cleanup beim Schließen  \r
\r
**Test-Framework:** Mocha + Chai (bereits im Masterportal vorhanden)\r
\r
**Test-Datei:**\r
\`\`\`\r
test/unittests/modules/tools/featureDistance/model.test.js\r
\`\`\`\r
\r
## Zeitrahmen\r
\r
**Geschätzte Dauer:** 16-24 Stunden (2-3 Arbeitstage)\r
\r
**Aufteilung:**\r
- **Setup & Architektur:** 2-3h\r
- **Feature-Selektion implementieren:** 4-5h\r
- **Distanz-Berechnung & Visualisierung:** 4-5h\r
- **UI-Entwicklung:** 3-4h\r
- **Testing:** 2-3h\r
- **Debugging & Polishing:** 2-3h\r
\r
## Schritt-für-Schritt-Anleitung\r
\r
### Phase 1: Setup (1h)\r
\r
1. **Tool-Ordner erstellen**\r
   \`\`\`bash\r
   cd masterportal/src/modules/tools\r
   mkdir -p featureDistance/components\r
   mkdir -p featureDistance/store\r
   mkdir -p featureDistance/tests/unit/store\r
   \`\`\`\r
\r
2. **Grundstruktur anlegen**\r
   \`\`\`bash\r
   touch featureDistance/components/FeatureDistance.vue\r
   touch featureDistance/store/index.js\r
   touch featureDistance/store/state.js\r
   touch featureDistance/store/mutations.js\r
   touch featureDistance/store/actions.js\r
   touch featureDistance/store/getters.js\r
   \`\`\`\r
\r
3. **In config.json aktivieren**\r
   \`\`\`json\r
   {\r
     "Portalconfig": {\r
       "menu": {\r
         "tools": {\r
           "children": {\r
             "featureDistance": {\r
               "name": "translate#additional:modules.tools.featureDistance.title",\r
               "icon": "bi-rulers"\r
             }\r
           }\r
         }\r
       }\r
     }\r
   }\r
   \`\`\`\r
\r
4. **i18n Übersetzungen hinzufügen**\r
   \`\`\`json\r
   // locales/de/additional.json\r
   {\r
     "modules": {\r
       "tools": {\r
         "featureDistance": {\r
           "title": "Feature-Distanz",\r
           "instruction": "Klicke auf zwei Features, um die Distanz zu berechnen",\r
           "feature1": "Feature 1:",\r
           "feature2": "Feature 2:",\r
           "distance": "Distanz:",\r
           "reset": "Zurücksetzen",\r
           "noFeature": "Kein Feature"\r
         }\r
       }\r
     }\r
   }\r
   \`\`\`\r
\r
### Phase 2: Vuex Store-Grundstruktur (2h)\r
\r
**store/state.js:**\r
\r
\`\`\`javascript\r
const state = {\r
    // Tool ist aktiv oder nicht\r
    active: false,\r
    \r
    // Die beiden ausgewählten Features\r
    selectedFeatures: [],\r
    \r
    // Berechnete Distanz in Metern\r
    distance: null,\r
    \r
    // OpenLayers Layer für Visualisierung\r
    vectorLayer: null,\r
    \r
    // Click-Listener-Referenz\r
    clickListener: null\r
};\r
\r
export default state;\r
\`\`\`\r
\r
**store/mutations.js:**\r
\r
\`\`\`javascript\r
export default {\r
    setActive(state, active) {\r
        state.active = active;\r
    },\r
    \r
    addSelectedFeature(state, feature) {\r
        if (state.selectedFeatures.length < 2) {\r
            state.selectedFeatures.push(feature);\r
        }\r
    },\r
    \r
    clearSelection(state) {\r
        state.selectedFeatures = [];\r
        state.distance = null;\r
    },\r
    \r
    setDistance(state, distance) {\r
        state.distance = distance;\r
    },\r
    \r
    setVectorLayer(state, layer) {\r
        state.vectorLayer = layer;\r
    },\r
    \r
    setClickListener(state, listener) {\r
        state.clickListener = listener;\r
    }\r
};\r
\`\`\`\r
\r
**store/actions.js:**\r
\r
\`\`\`javascript\r
import {getDistance} from "ol/sphere";\r
import VectorLayer from "ol/layer/Vector";\r
import VectorSource from "ol/source/Vector";\r
import Feature from "ol/Feature";\r
import LineString from "ol/geom/LineString";\r
import {Style, Stroke, Fill, Text} from "ol/style";\r
\r
export default {\r
    /**\r
     * Aktiviert das Tool\r
     */\r
    activate({commit, dispatch, rootGetters}) {\r
        commit("setActive", true);\r
        \r
        // Vector Layer für Visualisierung erstellen\r
        const layer = new VectorLayer({\r
            id: "featureDistanceLayer",\r
            source: new VectorSource(),\r
            alwaysOnTop: true,\r
            style: new Style({\r
                stroke: new Stroke({\r
                    color: "#FF0000",\r
                    width: 2\r
                })\r
            })\r
        });\r
        \r
        const map = rootGetters["Maps/getMap"]("2D");\r
        map.addLayer(layer);\r
        commit("setVectorLayer", layer);\r
        \r
        // Click-Listener registrieren\r
        dispatch("registerClickListener");\r
    },\r
    \r
    /**\r
     * Deaktiviert das Tool und räumt auf\r
     */\r
    deactivate({state, commit, rootGetters}) {\r
        commit("setActive", false);\r
        \r
        // Layer entfernen\r
        if (state.vectorLayer) {\r
            const map = rootGetters["Maps/getMap"]("2D");\r
            map.removeLayer(state.vectorLayer);\r
            commit("setVectorLayer", null);\r
        }\r
        \r
        // Click-Listener entfernen\r
        if (state.clickListener) {\r
            const map = rootGetters["Maps/getMap"]("2D");\r
            map.un("singleclick", state.clickListener);\r
            commit("setClickListener", null);\r
        }\r
        \r
        commit("clearSelection");\r
    },\r
    \r
    /**\r
     * Registriert Klick-Listener auf der Karte\r
     */\r
    registerClickListener({state, commit, dispatch, rootGetters}) {\r
        const map = rootGetters["Maps/getMap"]("2D");\r
        \r
        const listener = (evt) => {\r
            // Feature am Klick-Punkt finden\r
            const features = map.getFeaturesAtPixel(evt.pixel, {\r
                layerFilter: (layer) => {\r
                    // Nur WFS-Layer\r
                    return layer.get("typ") === "WFS";\r
                }\r
            });\r
            \r
            if (features && features.length > 0) {\r
                dispatch("selectFeature", features[0]);\r
            }\r
        };\r
        \r
        map.on("singleclick", listener);\r
        commit("setClickListener", listener);\r
    },\r
    \r
    /**\r
     * Selektiert ein Feature\r
     */\r
    selectFeature({state, commit, dispatch}, feature) {\r
        if (state.selectedFeatures.length < 2) {\r
            commit("addSelectedFeature", feature);\r
            \r
            // Wenn 2 Features ausgewählt: Distanz berechnen\r
            if (state.selectedFeatures.length === 2) {\r
                dispatch("calculateDistance");\r
            }\r
        }\r
    },\r
    \r
    /**\r
     * Berechnet Distanz und zeichnet Linie\r
     */\r
    calculateDistance({state, commit}) {\r
        const [feature1, feature2] = state.selectedFeatures;\r
        \r
        // Koordinaten extrahieren (Feature-Center)\r
        const geom1 = feature1.getGeometry();\r
        const geom2 = feature2.getGeometry();\r
        const coord1 = geom1.getCoordinates ? geom1.getCoordinates() : geom1.getExtent().slice(0, 2);\r
        const coord2 = geom2.getCoordinates ? geom2.getCoordinates() : geom2.getExtent().slice(0, 2);\r
        \r
        // Distanz berechnen\r
        const distance = getDistance(coord1, coord2);\r
        commit("setDistance", Math.round(distance * 100) / 100);  // Auf 2 Nachkommastellen\r
        \r
        // Linie zeichnen\r
        const line = new Feature({\r
            geometry: new LineString([coord1, coord2])\r
        });\r
        \r
        // Distanz-Label\r
        const midpoint = [\r
            (coord1[0] + coord2[0]) / 2,\r
            (coord1[1] + coord2[1]) / 2\r
        ];\r
        \r
        const label = new Feature({\r
            geometry: new Point(midpoint)\r
        });\r
        \r
        label.setStyle(new Style({\r
            text: new Text({\r
                text: \`\${distance.toFixed(2)} m\`,\r
                font: "bold 14px Arial",\r
                fill: new Fill({color: "#000"}),\r
                stroke: new Stroke({color: "#FFF", width: 3}),\r
                offsetY: -10\r
            })\r
        }));\r
        \r
        // Zu Layer hinzufügen\r
        state.vectorLayer.getSource().clear();\r
        state.vectorLayer.getSource().addFeatures([line, label]);\r
    },\r
    \r
    /**\r
     * Setzt Auswahl zurück\r
     */\r
    reset({state, commit}) {\r
        commit("clearSelection");\r
        \r
        if (state.vectorLayer) {\r
            state.vectorLayer.getSource().clear();\r
        }\r
    }\r
};\r
\`\`\`\r
\r
**store/getters.js:**\r
\r
\`\`\`javascript\r
export default {\r
    isActive: (state) => state.active,\r
    \r
    hasFirstFeature: (state) => state.selectedFeatures.length >= 1,\r
    hasSecondFeature: (state) => state.selectedFeatures.length >= 2,\r
    \r
    firstFeature: (state) => state.selectedFeatures[0] || null,\r
    secondFeature: (state) => state.selectedFeatures[1] || null,\r
    \r
    distance: (state) => state.distance,\r
    \r
    distanceFormatted: (state) => {\r
        if (state.distance === null) return null;\r
        \r
        if (state.distance >= 1000) {\r
            return \`\${(state.distance / 1000).toFixed(2)} km\`;\r
        }\r
        return \`\${state.distance.toFixed(2)} m\`;\r
    }\r
};\r
\`\`\`\r
\r
**store/index.js:**\r
\r
\`\`\`javascript\r
import state from "./state";\r
import mutations from "./mutations";\r
import actions from "./actions";\r
import getters from "./getters";\r
\r
export default {\r
    namespaced: true,\r
    state,\r
    mutations,\r
    actions,\r
    getters\r
};\r
\`\`\`\r
\r
### Phase 3: Vue-Komponente (2-3h)\r
\r
**components/FeatureDistance.vue:**\r
\r
\`\`\`vue\r
<script>\r
import {mapGetters, mapActions} from "vuex";\r
import ToolTemplate from "../../ToolTemplate.vue";\r
\r
export default {\r
    name: "FeatureDistance",\r
    components: {\r
        ToolTemplate\r
    },\r
    computed: {\r
        ...mapGetters("Tools/FeatureDistance", [\r
            "isActive",\r
            "hasFirstFeature",\r
            "hasSecondFeature",\r
            "firstFeature",\r
            "secondFeature",\r
            "distanceFormatted"\r
        ])\r
    },\r
    methods: {\r
        ...mapActions("Tools/FeatureDistance", [\r
            "reset"\r
        ]),\r
        \r
        close() {\r
            this.$store.commit("Tools/FeatureDistance/setActive", false);\r
        },\r
        \r
        getFeatureName(feature) {\r
            if (!feature) return this.$t("additional:modules.tools.featureDistance.noFeature");\r
            \r
            // Versuche verschiedene Properties für Namen\r
            return feature.get("name") \r
                || feature.get("NAME") \r
                || feature.get("id") \r
                || feature.getId() \r
                || "Unbekannt";\r
        }\r
    }\r
};\r
<\/script>\r
\r
<template>\r
    <ToolTemplate\r
        :title="$t('additional:modules.tools.featureDistance.title')"\r
        :icon="'bi-rulers'"\r
        @close="close"\r
    >\r
        <div class="feature-distance-tool">\r
            <!-- Anleitung -->\r
            <p class="instruction">\r
                {{ $t('additional:modules.tools.featureDistance.instruction') }}\r
            </p>\r
            \r
            <!-- Feature 1 -->\r
            <div class="feature-info">\r
                <strong>{{ $t('additional:modules.tools.featureDistance.feature1') }}</strong>\r
                <span :class="{'selected': hasFirstFeature, 'pending': !hasFirstFeature}">\r
                    {{ getFeatureName(firstFeature) }}\r
                </span>\r
            </div>\r
            \r
            <!-- Feature 2 -->\r
            <div class="feature-info">\r
                <strong>{{ $t('additional:modules.tools.featureDistance.feature2') }}</strong>\r
                <span :class="{'selected': hasSecondFeature, 'pending': !hasSecondFeature}">\r
                    {{ getFeatureName(secondFeature) }}\r
                </span>\r
            </div>\r
            \r
            <!-- Distanz-Anzeige -->\r
            <div \r
                v-if="distanceFormatted" \r
                class="distance-result"\r
            >\r
                <strong>{{ $t('additional:modules.tools.featureDistance.distance') }}</strong>\r
                <span class="distance-value">{{ distanceFormatted }}</span>\r
            </div>\r
            \r
            <!-- Aktionen -->\r
            <div class="actions">\r
                <button \r
                    class="btn btn-secondary"\r
                    @click="reset"\r
                    :disabled="!hasFirstFeature"\r
                >\r
                    {{ $t('additional:modules.tools.featureDistance.reset') }}\r
                </button>\r
            </div>\r
        </div>\r
    </ToolTemplate>\r
</template>\r
\r
<style lang="scss" scoped>\r
.feature-distance-tool {\r
    padding: 1rem;\r
    \r
    .instruction {\r
        color: #666;\r
        font-style: italic;\r
        margin-bottom: 1rem;\r
    }\r
    \r
    .feature-info {\r
        display: flex;\r
        justify-content: space-between;\r
        padding: 0.5rem;\r
        margin-bottom: 0.5rem;\r
        background: #f5f5f5;\r
        border-radius: 4px;\r
        \r
        span.selected {\r
            color: #28a745;\r
            font-weight: bold;\r
        }\r
        \r
        span.pending {\r
            color: #999;\r
            font-style: italic;\r
        }\r
    }\r
    \r
    .distance-result {\r
        display: flex;\r
        justify-content: space-between;\r
        padding: 1rem;\r
        margin: 1rem 0;\r
        background: #e3f2fd;\r
        border-left: 4px solid #2196F3;\r
        border-radius: 4px;\r
        \r
        .distance-value {\r
            font-size: 1.25rem;\r
            font-weight: bold;\r
            color: #1976D2;\r
        }\r
    }\r
    \r
    .actions {\r
        display: flex;\r
        justify-content: flex-end;\r
        margin-top: 1rem;\r
    }\r
}\r
</style>\r
\r
\r
    clearSelection: function () {\r
        this.set("selectedFeatures", []);\r
        this.set("distance", null);\r
        // TODO: Visualisierung entfernen\r
    }\r
});\r
\r
export default FeatureDistanceModel;\r
\`\`\`\r
\r
### Phase 3: Feature-Selektion (4h)\r
\r
Implementiere:\r
- Map-Click-Event-Listener\r
- Feature-Detection unter Mauszeiger\r
- Speichern in \`selectedFeatures\` Array\r
- Maximal 2 Features\r
\r
### Phase 4: Distanz-Berechnung (3h)\r
\r
Implementiere:\r
- \`calculateDistance()\` Methode\r
- OpenLayers \`getDistance()\` nutzen\r
- Koordinaten aus Feature-Geometrien extrahieren\r
\r
### Phase 5: Visualisierung (4h)\r
\r
Implementiere:\r
- Vector-Layer für Linie erstellen\r
- LineString-Feature zeichnen\r
- Style (Farbe, Breite)\r
- Optional: Text-Label mit Distanz\r
\r
### Phase 6: UI-Entwicklung (3h)\r
\r
**template.html & view.js:**\r
- Tool-Fenster mit Backbone-Template\r
- Event-Listener für Buttons\r
- Dynamisches Update bei Model-Änderungen\r
\r
### Phase 7: Testing (3h)\r
\r
**test/unittests/modules/tools/featureDistance/model.test.js:**\r
\r
\`\`\`javascript\r
import FeatureDistanceModel from "@modules/tools/featureDistance/model";\r
import Feature from "ol/Feature";\r
import Point from "ol/geom/Point";\r
\r
describe("tools/featureDistance/model", function () {\r
    let model;\r
\r
    beforeEach(function () {\r
        model = new FeatureDistanceModel();\r
    });\r
\r
    it("should start with empty selection", function () {\r
        expect(model.get("selectedFeatures")).to.be.an("array").that.is.empty;\r
    });\r
\r
    it("should calculate distance between two points", function () {\r
        const feat1 = new Feature({geometry: new Point([0, 0])});\r
        const feat2 = new Feature({geometry: new Point([100, 0])});\r
        \r
        model.set("selectedFeatures", [feat1, feat2]);\r
        model.calculateDistance();\r
        \r
        expect(model.get("distance")).to.be.closeTo(100, 0.01);\r
    });\r
\r
    // TODO: Weitere Tests\r
});\r
\`\`\`\r
\r
## Abgabe\r
\r
### Was du abgibst:\r
\r
1. **Code:**\r
   - Komplettes \`featureDistance/\` Verzeichnis\r
   - Registrierung in \`tools.js\`\r
   - Test-Datei(en)\r
\r
2. **Dokumentation:**\r
   - README.md im Tool-Ordner mit:\r
     - Kurzbeschreibung\r
     - Verwendung\r
     - Bekannte Limitierungen\r
     - Mögliche Erweiterungen\r
\r
3. **Demo:**\r
   - Screen-Recording (2-3 Min) oder\r
   - Live-Demo im Team-Meeting\r
\r
4. **Reflection (optional):**\r
   - Was war schwierig?\r
   - Was hast du gelernt?\r
   - Was würdest du anders machen?\r
\r
## Bewertung\r
\r
**Bestanden, wenn:**\r
- Alle Must-Have Features funktionieren\r
- Mindestens 3 Tests vorhanden und grün\r
- Code ist sauber und dokumentiert\r
- Demo zeigt funktionierende Anwendung\r
\r
**Bonus-Punkte für:**\r
- Nice-to-Have Features implementiert\r
- Besonders sauberer, idiomatischer Code\r
- Umfangreiche Test-Abdeckung\r
- Herausragende UI/UX\r
\r
## Hilfe & Ressourcen\r
\r
**Bei Problemen:**\r
\r
1. **Schaue dir bestehende Tools an:**\r
   - \`src/modules/tools/measure/\` - ähnliche Funktionalität\r
   - \`src/modules/tools/draw/\` - Visualisierung\r
   - \`src/modules/tools/coordToolkit/\` - einfaches Beispiel\r
\r
2. **Dokumentation:**\r
   - Masterportal: https://www.masterportal.org/dokumentation\r
   - OpenLayers API: https://openlayers.org/en/latest/apidoc/\r
   - Backbone.js: https://backbonejs.org/\r
\r
3. **Team fragen:**\r
   - Daily Standup: 11:30 Uhr\r
   - Dein Mentor steht zur Verfügung\r
   - Code-Review mit Senior-Dev vereinbaren\r
\r
**FAQ-Sektion dieser Academy nutzen!**\r
\r
## Los geht's!\r
\r
Du hast alles gelernt, was du brauchst. Viel Erfolg bei deinem ersten großen Masterportal-Tool! 🚀\r
\r
**Tipp:** Starte mit dem Minimum Viable Product (MVP) - erst wenn das funktioniert, baue Nice-to-Haves.\r
\r
Bei Fragen: Nicht zögern, das Team zu fragen. Viel Erfolg! 🎉\r
\r
`,aM=`# Entwicklungsumgebung einrichten\r
\r
## Einführung\r
\r
Als neue Nachwuchskraft im Team wirst du mit verschiedenen Tools und Technologien arbeiten. Dieser Guide führt dich durch die komplette Einrichtung deiner Entwicklungsumgebung - vom ersten Git-Clone bis zum erfolgreichen Build.\r
\r
## Übersicht: Was wirst du einrichten?\r
\r
- **Git:** Versionskontrolle und Zusammenarbeit\r
- **IDE:** VSCode oder IntelliJ für Code-Editing\r
- **Node.js & npm:** JavaScript-Runtime und Paketmanager\r
- **Masterportal:** Das Hauptprojekt\r
- **Browser DevTools:** Debugging-Werkzeuge\r
\r
## Schritt 1: Git installieren und konfigurieren\r
\r
### Git installieren\r
\r
**Windows:**\r
- Download von https://git-scm.com/download/win\r
- Installer ausführen, Standard-Optionen akzeptieren\r
\r
**macOS:**\r
\`\`\`bash\r
brew install git\r
\`\`\`\r
\r
**Linux:**\r
\`\`\`bash\r
sudo apt-get install git  # Debian/Ubuntu\r
sudo yum install git      # RedHat/CentOS\r
\`\`\`\r
\r
### Git konfigurieren\r
\r
\`\`\`bash\r
# Deinen Namen setzen\r
git config --global user.name "Dein Name"\r
\r
# Deine E-Mail setzen\r
git config --global user.email "deine.email@example.com"\r
\r
# Standard-Editor festlegen (optional)\r
git config --global core.editor "code --wait"  # VSCode\r
\r
# Prüfen\r
git config --list\r
\`\`\`\r
\r
### SSH-Key für Bitbucket einrichten\r
\r
Für den Zugriff auf das Masterportal-Repository benötigst du einen SSH-Key:\r
\r
\`\`\`bash\r
# SSH-Key generieren\r
ssh-keygen -t ed25519 -C "deine.email@example.com"\r
\r
# Wenn ed25519 nicht unterstützt wird:\r
ssh-keygen -t rsa -b 4096 -C "deine.email@example.com"\r
\r
# Key-Pfad: Standard akzeptieren (~/.ssh/id_ed25519)\r
# Passphrase: Optional, aber empfohlen\r
\`\`\`\r
\r
**Public Key zu Bitbucket hinzufügen:**\r
\r
1. Key anzeigen:\r
   \`\`\`bash\r
   cat ~/.ssh/id_ed25519.pub\r
   \`\`\`\r
\r
2. Kopiere den kompletten Output\r
\r
3. Bitbucket öffnen: https://bitbucket.org/account/settings/ssh-keys/\r
\r
4. "Add key" klicken und Key einfügen\r
\r
**Verbindung testen:**\r
\r
\`\`\`bash\r
ssh -T git@bitbucket.org\r
\`\`\`\r
\r
Erwartete Ausgabe: \`authenticated via ssh key\`\r
\r
## Schritt 2: Node.js & npm installieren\r
\r
### Erforderliche Versionen prüfen\r
\r
Die exakten Versionen stehen in der \`package.json\` des Masterportals unter \`engines\`. Typischerweise:\r
\r
- **Node.js:** v18.x oder v20.x\r
- **npm:** v9.x oder v10.x\r
\r
### Node.js installieren\r
\r
**Option 1: Node Version Manager (NVM) - Empfohlen**\r
\r
NVM ermöglicht das Wechseln zwischen Node-Versionen:\r
\r
**Windows (nvm-windows):**\r
- Download: https://github.com/coreybutler/nvm-windows/releases\r
- Installieren, dann:\r
\r
\`\`\`bash\r
nvm install 20\r
nvm use 20\r
\`\`\`\r
\r
**macOS/Linux:**\r
\r
\`\`\`bash\r
# NVM installieren\r
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\r
\r
# Shell neu starten, dann:\r
nvm install 20\r
nvm use 20\r
\`\`\`\r
\r
**Option 2: Direkt von nodejs.org**\r
\r
- Download: https://nodejs.org/\r
- LTS-Version wählen\r
- Installer ausführen\r
\r
### Versionen prüfen\r
\r
\`\`\`bash\r
node --version  # Sollte v20.x.x anzeigen\r
npm --version   # Sollte v10.x.x anzeigen\r
\`\`\`\r
\r
## Schritt 3: IDE einrichten\r
\r
### Option A: Visual Studio Code (Empfohlen für Einsteiger)\r
\r
**Installation:**\r
- Download: https://code.visualstudio.com/\r
- Installieren\r
\r
**Empfohlene Extensions:**\r
\r
Öffne VSCode und installiere (\`Strg+Shift+X\`):\r
\r
1. **ESLint** (\`dbaeumer.vscode-eslint\`)\r
   - Zeigt Linting-Fehler direkt im Editor\r
\r
2. **Prettier** (\`esbenp.prettier-vscode\`)\r
   - Code-Formatierung\r
\r
3. **Vetur** (\`octref.vetur\`)\r
   - Vue.js Syntax-Highlighting & Intellisense\r
\r
4. **GitLens** (\`eamodio.gitlens\`)\r
   - Git-Blame und History im Editor\r
\r
5. **Path Intellisense** (\`christian-kohler.path-intellisense\`)\r
   - Auto-Completion für Dateipfade\r
\r
6. **Bracket Pair Colorizer** (built-in seit VSCode 1.60)\r
   - Farbige Klammern für bessere Übersicht\r
\r
7. **JavaScript (ES6) code snippets** (\`xabikos.JavaScriptSnippets\`)\r
   - Schnelle Code-Snippets\r
\r
8. **npm Intellisense** (\`christian-kohler.npm-intellisense\`)\r
   - Auto-Complete für npm-Module\r
\r
**VSCode Einstellungen (\`settings.json\`):**\r
\r
\`\`\`json\r
{\r
  "editor.formatOnSave": true,\r
  "editor.defaultFormatter": "esbenp.prettier-vscode",\r
  "eslint.validate": ["javascript", "javascriptreact", "vue"],\r
  "editor.codeActionsOnSave": {\r
    "source.fixAll.eslint": true\r
  },\r
  "files.eol": "\\n",\r
  "git.autofetch": true\r
}\r
\`\`\`\r
\r
**Workspace-Settings für Masterportal:**\r
\r
Im Masterportal-Ordner \`.vscode/settings.json\` erstellen:\r
\r
\`\`\`json\r
{\r
  "search.exclude": {\r
    "**/node_modules": true,\r
    "**/dist": true,\r
    "**/build": true\r
  },\r
  "files.exclude": {\r
    "**/.git": true\r
  }\r
}\r
\`\`\`\r
\r
### Option B: IntelliJ IDEA / WebStorm\r
\r
**Installation:**\r
- Download: https://www.jetbrains.com/webstorm/\r
- Oder IntelliJ IDEA Ultimate mit JavaScript-Plugin\r
\r
**Plugins:**\r
- Vue.js\r
- ESLint\r
- Prettier\r
- GitToolBox\r
\r
**Einstellungen:**\r
- \`Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint\` aktivieren\r
- \`Preferences > Languages & Frameworks > JavaScript > Prettier\` aktivieren\r
- \`On Save Actions\`: "Reformat code" und "Optimize imports" aktivieren\r
\r
### Team absprechen!\r
\r
⚠️ **Wichtig:** Sprich mit deinem Team ab, welche Extensions und Settings sie verwenden. So bleibt der Code-Style konsistent!\r
\r
## Schritt 4: Masterportal klonen und einrichten\r
\r
### Repository klonen\r
\r
\`\`\`bash\r
# In deinen Workspace-Ordner navigieren\r
cd ~/Projekte  # oder wo du deine Projekte speicherst\r
\r
# Masterportal klonen\r
git clone git@bitbucket.org:geowerkstatt-hamburg/masterportal.git\r
\r
# In den Ordner wechseln\r
cd masterportal\r
\`\`\`\r
\r
### Branch wechseln\r
\r
Das Team arbeitet üblicherweise auf dem \`dev\`-Branch:\r
\r
\`\`\`bash\r
# Auf dev-Branch wechseln\r
git checkout dev\r
\r
# Aktuellste Version holen\r
git pull origin dev\r
\`\`\`\r
\r
### Dependencies installieren\r
\r
**VPN-Problematik beachten!**\r
\r
Je nach PC-Konfiguration:\r
\r
- **Variante 1:** VPN **an** lassen während \`npm install\`\r
- **Variante 2:** VPN **aus** schalten während \`npm install\`\r
\r
Wenn es hängt, andere Variante probieren!\r
\r
\`\`\`bash\r
npm install\r
\`\`\`\r
\r
**Dauer:** 2-5 Minuten (beim ersten Mal)\r
\r
**Häufige Fehler:**\r
\r
**❌ \`ERR! network timeout\`**\r
→ VPN-Status wechseln (an/aus)\r
\r
**❌ \`EACCES: permission denied\`**\r
→ npm mit falschen Rechten installiert, neu installieren\r
\r
**❌ \`gyp ERR! node-gyp -v\`**\r
→ Node-Version falsch, prüfe \`node --version\`\r
\r
### Projekt-Struktur verstehen\r
\r
\`\`\`bash\r
# Hauptordner anschauen\r
ls -la\r
\`\`\`\r
\r
Wichtige Ordner:\r
\r
\`\`\`\r
masterportal/\r
├── src/                  # Quellcode\r
│   ├── modules/         # Tools, Controls, etc.\r
│   ├── core/            # Kernfunktionalität\r
│   └── plugins/         # Backbone-Plugins\r
├── portal/              # Portal-Konfigurationen\r
│   ├── basic/           # Beispiel-Portal\r
│   └── master/          # Weiteres Beispiel\r
├── test/                # Tests (Unit, E2E)\r
├── doc/                 # Dokumentation\r
├── dist/                # Build-Output (wird generiert)\r
├── node_modules/        # Dependencies (nach npm install)\r
├── package.json         # Projekt-Metadaten & Scripts\r
├── webpack.config.js    # Build-Konfiguration\r
└── .eslintrc.js         # Linting-Regeln\r
\`\`\`\r
\r
## Schritt 5: Entwicklungsserver starten\r
\r
### Dev-Server starten\r
\r
\`\`\`bash\r
npm start\r
\`\`\`\r
\r
**Was passiert:**\r
- Webpack kompiliert den Code\r
- Dev-Server startet auf Port 9001\r
- Browser öffnet automatisch (oder manuell: http://localhost:9001)\r
- Live-Reload: Änderungen werden automatisch neu geladen\r
\r
**Erwartete Ausgabe:**\r
\r
\`\`\`\r
Compiled successfully!\r
\r
You can now view the portal in the browser.\r
\r
  Local:            http://localhost:9001\r
  On Your Network:  http://192.168.x.x:9001\r
\`\`\`\r
\r
### VPN-Problematik beim Browser-Zugriff\r
\r
**Problem:** Seite lädt nicht, obwohl Server läuft.\r
\r
**Lösungen:**\r
\r
1. **VPN aus-/anschalten** und neu versuchen\r
2. **Andere Ports prüfen:** Ist 9001 bereits belegt?\r
   \`\`\`bash\r
   # Windows\r
   netstat -ano | findstr :9001\r
   \r
   # macOS/Linux\r
   lsof -i :9001\r
   \`\`\`\r
\r
3. **Firewall prüfen:** Blockiert sie localhost?\r
\r
4. **Manuell öffnen:** Gib URL direkt im Browser ein\r
\r
5. **Browser-Cache leeren:** \`Strg+Shift+Del\`\r
\r
### Portal auswählen\r
\r
Nach dem Start siehst du eine Liste der verfügbaren Portale:\r
\r
\`\`\`\r
Available portals:\r
- http://localhost:9001/portal/basic/\r
- http://localhost:9001/portal/master/\r
\`\`\`\r
\r
Klicke auf eines, um es zu öffnen.\r
\r
## Schritt 6: Wichtige npm-Befehle\r
\r
Alle Befehle findest du in der \`package.json\` unter \`scripts\`:\r
\r
\`\`\`bash\r
# Projekt-Struktur anschauen\r
cat package.json | grep -A 20 "scripts"\r
\`\`\`\r
\r
**Die wichtigsten Befehle:**\r
\r
| Befehl | Beschreibung |\r
|--------|--------------|\r
| \`npm start\` | Dev-Server starten (Port 9001) |\r
| \`npm run build\` | Production-Build erstellen |\r
| \`npm test\` | Alle Tests ausführen |\r
| \`npm run test:unit\` | Nur Unit-Tests |\r
| \`npm run test:e2e\` | Nur End-to-End-Tests |\r
| \`npm run lint\` | ESLint ausführen (Code-Qualität prüfen) |\r
| \`npm run lint:fix\` | ESLint-Fehler automatisch fixen |\r
| \`npm run dev\` | Dev-Build (ohne Server) |\r
\r
**Workflow-Beispiel:**\r
\r
\`\`\`bash\r
# 1. Feature entwickeln (Dev-Server läuft)\r
npm start\r
\r
# 2. Code ändern, speichern → automatisch neu geladen\r
\r
# 3. Linting prüfen\r
npm run lint\r
\r
# 4. Tests ausführen\r
npm test\r
\r
# 5. Production-Build testen\r
npm run build\r
\`\`\`\r
\r
## Schritt 7: Browser DevTools einrichten\r
\r
### Chrome/Edge DevTools\r
\r
**Öffnen:** \`F12\` oder \`Rechtsklick > Untersuchen\`\r
\r
**Wichtige Tabs:**\r
\r
1. **Console:**\r
   - JavaScript-Fehler anzeigen\r
   - \`console.log()\`-Ausgaben sehen\r
   - Interaktiv Code ausführen\r
\r
2. **Network:**\r
   - HTTP-Requests verfolgen (WMS, WFS, etc.)\r
   - Lade-Zeiten analysieren\r
   - Failed Requests identifizieren\r
\r
3. **Sources:**\r
   - Breakpoints setzen\r
   - Step-by-step debuggen\r
   - Source Maps: Originaler Code sichtbar\r
\r
4. **Application:**\r
   - LocalStorage inspizieren\r
   - Session Storage\r
   - Cookies\r
\r
**Nützliche Console-Befehle für Masterportal:**\r
\r
\`\`\`javascript\r
// Karte holen\r
const map = Radio.request("Map", "getMap");\r
\r
// Alle Layer anzeigen\r
Radio.request("ModelList", "getCollection").toJSON();\r
\r
// Specific Layer holen\r
const layer = Radio.request("ModelList", "getModelByAttributes", {\r
  id: "wfs_schulen"\r
});\r
\`\`\`\r
\r
### Vue DevTools (für diese Academy)\r
\r
Da diese Onboarding-Academy mit Vue 3 gebaut ist:\r
\r
**Installation:**\r
- Chrome: https://chrome.google.com/webstore → "Vue.js devtools"\r
- Firefox: https://addons.mozilla.org → "Vue.js devtools"\r
\r
**Features:**\r
- Vuex State inspizieren\r
- Component-Tree anzeigen\r
- Events tracken\r
\r
## Schritt 8: Git-Workflow verstehen\r
\r
### Branching-Strategie\r
\r
Frage dein Team nach der genauen Strategie! Typisch:\r
\r
- **\`main\`/\`master\`:** Produktions-Code\r
- **\`dev\`/\`develop\`:** Entwicklungs-Branch\r
- **Feature-Branches:** \`feature/mein-neues-tool\`\r
- **Bugfix-Branches:** \`bugfix/layer-loading-error\`\r
\r
### Typischer Workflow\r
\r
\`\`\`bash\r
# 1. Aktuellsten dev-Branch holen\r
git checkout dev\r
git pull origin dev\r
\r
# 2. Feature-Branch erstellen\r
git checkout -b feature/mein-tool\r
\r
# 3. Änderungen machen, committen\r
git add src/modules/tools/meinTool/\r
git commit -m "feat: Add distance measurement tool"\r
\r
# 4. Auf Bitbucket pushen\r
git push origin feature/mein-tool\r
\r
# 5. Pull Request erstellen (auf Bitbucket)\r
\r
# 6. Nach Merge: Branch löschen\r
git branch -d feature/mein-tool\r
\`\`\`\r
\r
### Commit-Message-Konventionen\r
\r
Frage dein Team! Oft wird Conventional Commits verwendet:\r
\r
\`\`\`\r
feat: Neues Feature\r
fix: Bugfix\r
docs: Dokumentation\r
style: Code-Formatierung (keine Logik-Änderung)\r
refactor: Code-Umstrukturierung\r
test: Tests hinzufügen/ändern\r
chore: Build-Prozess, Dependencies, etc.\r
\`\`\`\r
\r
**Beispiele:**\r
\r
\`\`\`bash\r
git commit -m "feat: Add WFS feature selection in measurement tool"\r
git commit -m "fix: Resolve CORS issue with external WMS services"\r
git commit -m "docs: Update installation guide for Windows users"\r
\`\`\`\r
\r
## Schritt 9: Häufige Probleme & Lösungen\r
\r
### Problem: \`npm install\` schlägt fehl\r
\r
**Ursache:** Node/npm-Version falsch oder VPN-Probleme\r
\r
**Lösung:**\r
\`\`\`bash\r
# 1. Version prüfen\r
node --version\r
npm --version\r
\r
# 2. Richtige Version mit NVM installieren\r
nvm install 20\r
nvm use 20\r
\r
# 3. Cache leeren\r
npm cache clean --force\r
\r
# 4. node_modules löschen und neu installieren\r
rm -rf node_modules package-lock.json\r
npm install\r
\r
# 5. VPN an/aus schalten\r
\`\`\`\r
\r
### Problem: Dev-Server startet nicht\r
\r
**Ursache:** Port bereits belegt\r
\r
**Lösung:**\r
\`\`\`bash\r
# Port 9001 prüfen (Windows)\r
netstat -ano | findstr :9001\r
\r
# Port 9001 prüfen (macOS/Linux)\r
lsof -i :9001\r
\r
# Prozess beenden oder anderen Port nutzen\r
# In webpack.config.js: devServer.port ändern\r
\`\`\`\r
\r
### Problem: Browser zeigt leere Seite\r
\r
**Ursache:** JavaScript-Fehler oder falscher Pfad\r
\r
**Lösung:**\r
1. Browser-Console öffnen (F12)\r
2. Fehler lesen und googeln\r
3. Cache leeren (Strg+Shift+Del)\r
4. Hard Reload (Strg+F5)\r
\r
### Problem: ESLint-Fehler überall\r
\r
**Ursache:** Code folgt nicht den Projekt-Standards\r
\r
**Lösung:**\r
\`\`\`bash\r
# Auto-Fix versuchen\r
npm run lint:fix\r
\r
# Einzelne Fehler manuell fixen\r
# ESLint-Regeln in .eslintrc.js nachschauen\r
\`\`\`\r
\r
### Problem: Git-Push schlägt fehl\r
\r
**Ursache:** SSH-Key fehlt oder Branch-Protection\r
\r
**Lösung:**\r
\`\`\`bash\r
# SSH-Verbindung testen\r
ssh -T git@bitbucket.org\r
\r
# Bei Fehlern: SSH-Key neu einrichten (siehe Schritt 1)\r
\r
# Branch-Protection: Pushe auf Feature-Branch, nicht direkt auf dev\r
git checkout -b feature/mein-branch\r
git push origin feature/mein-branch\r
\`\`\`\r
\r
## Checkliste: Setup abgeschlossen?\r
\r
Prüfe, ob alles funktioniert:\r
\r
✅ Git installiert und konfiguriert  \r
✅ SSH-Key für Bitbucket eingerichtet  \r
✅ Node.js & npm in richtiger Version  \r
✅ IDE (VSCode/IntelliJ) mit Extensions eingerichtet  \r
✅ Masterportal geklont  \r
✅ \`npm install\` erfolgreich  \r
✅ \`npm start\` startet Dev-Server  \r
✅ Portal im Browser lädt ohne Fehler  \r
✅ Browser DevTools verstanden  \r
✅ Git-Workflow verstanden  \r
\r
## Nächste Schritte\r
\r
Du bist jetzt bereit für:\r
\r
- **Masterportal-Module:** Lerne die Architektur kennen\r
- **Erste Config-Änderungen:** Füge Layer hinzu\r
- **Tool-Entwicklung:** Programmiere eigene Features\r
- **Testing:** Schreibe Tests für deinen Code\r
\r
## Hilfe & Ressourcen\r
\r
**Bei Problemen:**\r
\r
1. **Team-Chat:** Frage erfahrene Kollegen\r
2. **FAQ:** Schaue in die FAQ-Sektion dieser Academy\r
3. **Dokumentation:** https://www.masterportal.org/dokumentation\r
4. **Stack Overflow:** Suche nach Fehlermeldungen\r
\r
**Wichtige Kontakte:**\r
\r
- Tech-Lead: [siehe Team-Seite]\r
- Mentor: [wird dir zugeteilt]\r
- Daily Standups: 11:30 Uhr via Skype\r
\r
Willkommen im Team! 🎉\r
`,lM=`## Gängige Projektionssysteme im Masterportal\r
\r
Bei der Arbeit mit geografischen Daten im Masterportal wirst du regelmäßig auf diese Koordinatenreferenzsysteme stoßen:\r
\r
### EPSG:25832 (ETRS89 / UTM Zone 32N)\r
Ein projiziertes Koordinatensystem, das häufig für deutsche geografische Daten verwendet wird. Koordinaten werden in Metern gemessen (Rechtswert, Hochwert). Das Hamburger Stadtzentrum liegt ungefähr bei \`569000, 5935000\`.\r
\r
### WGS84 Decimal (EPSG:4326)\r
Das Standard-GPS-Koordinatensystem mit Dezimalgraden. Koordinaten reichen von -180 bis 180 für Längengrad und -90 bis 90 für Breitengrad. Angezeigt als \`Längengrad, Breitengrad\` (z.B. \`9.993, 53.551\`).\r
\r
### WGS84 Lat/Lon\r
Dasselbe EPSG:4326-System, aber mit Koordinaten in der traditionellen \`Breitengrad, Längengrad\`-Reihenfolge angezeigt (z.B. \`53.551°N, 9.993°E\`).\r
\r
## Arbeiten mit Projektionen\r
\r
OpenLayers verwendet standardmäßig EPSG:3857, aber viele unserer Datensätze liegen in EPSG:25832 vor. Bei der Arbeit mit dem Masterportal solltest du immer:\r
\r
- Das CRS des Datensatzes bestätigen und bei Bedarf reprojizieren\r
- Die \`ol/proj\`-Helfer für Konvertierungen nutzen\r
- Annahmen in Pull Requests dokumentieren\r
\r
Probiere den interaktiven Koordinaten-Transformer unten aus, um zu sehen, wie derselbe Ort in verschiedenen Koordinatensystemen dargestellt wird. Dann schwenke die Playground-Karte und inspiziere die View-Koordinaten (EPSG:3857) über die DevTools-Console mit \`map.getView().getCenter()\`.\r
`,cM=`# WMS vs WFS – Zwei Standards, zwei Welten\r
\r
Web Map Service (WMS) und Web Feature Service (WFS) sind zwei fundamentale OGC-Standards für Geodaten im Web. Beide liefern Kartendaten über HTTP, aber auf völlig unterschiedliche Weise.\r
\r
---\r
\r
## WMS – Web Map Service\r
\r
**WMS liefert vorgerenderte Rasterbilder (Tiles).**\r
\r
### Charakteristika\r
\r
- **Ausgabe:** PNG, JPEG oder andere Bildformate\r
- **Daten:** Fertig gerenderte Karten als Pixel-Grafiken\r
- **Interaktion:** Nur visuelle Darstellung, keine Feature-Abfragen\r
- **Performance:** Sehr schnell, da Server das Rendering übernimmt\r
- **Verwendung:** Hintergrundkarten, Luftbilder, Themenkarten\r
\r
### Typische WMS-Anfrage\r
\r
\`\`\`\r
https://example.com/wms?\r
  SERVICE=WMS&\r
  VERSION=1.3.0&\r
  REQUEST=GetMap&\r
  LAYERS=roads&\r
  WIDTH=256&\r
  HEIGHT=256&\r
  BBOX=9.9,53.5,10.0,53.6&\r
  FORMAT=image/png\r
\`\`\`\r
\r
**Antwort:** Ein Bild (PNG/JPEG)\r
\r
### Vorteile\r
\r
✅ Sehr performant – Server cached vorgerenderte Tiles\r
✅ Funktioniert bei komplexen Visualisierungen (Schummerung, Satellitenbilder)\r
✅ Geringe Client-Last (nur Bilder anzeigen)\r
✅ Konsistente Darstellung über alle Clients\r
\r
### Nachteile\r
\r
❌ Keine Interaktion mit einzelnen Objekten\r
❌ Keine Attribut-Abfragen möglich\r
❌ Styling nur serverseitig steuerbar\r
❌ Nicht für Analyse oder Feature-Selektion geeignet\r
\r
---\r
\r
## WFS – Web Feature Service\r
\r
**WFS liefert strukturierte Vektordaten (Features mit Geometrie und Attributen).**\r
\r
### Charakteristika\r
\r
- **Ausgabe:** GeoJSON, GML (XML) oder andere Vektorformate\r
- **Daten:** Einzelne Features mit Geometrie + Properties\r
- **Interaktion:** Klickbar, abfragbar, editierbar (WFS-T)\r
- **Performance:** Langsamer bei vielen Features\r
- **Verwendung:** POIs, Grenzen, analysierbare Objekte\r
\r
### Typische WFS-Anfrage\r
\r
\`\`\`\r
https://example.com/wfs?\r
  SERVICE=WFS&\r
  VERSION=2.0.0&\r
  REQUEST=GetFeature&\r
  TYPENAME=cities&\r
  OUTPUTFORMAT=application/json&\r
  BBOX=9.9,53.5,10.0,53.6\r
\`\`\`\r
\r
**Antwort:** GeoJSON mit Features:\r
\r
\`\`\`json\r
{\r
  "type": "FeatureCollection",\r
  "features": [\r
    {\r
      "type": "Feature",\r
      "geometry": { "type": "Point", "coordinates": [9.993, 53.551] },\r
      "properties": { "name": "Hamburg", "population": 1899160 }\r
    }\r
  ]\r
}\r
\`\`\`\r
\r
### Vorteile\r
\r
✅ Zugriff auf alle Feature-Attribute\r
✅ Client-seitiges Styling möglich\r
✅ Interaktiv: Klicken, Highlighten, Filtern\r
✅ Räumliche Analysen durchführbar\r
✅ WFS-T: Editieren, Erstellen, Löschen von Features\r
\r
### Nachteile\r
\r
❌ Langsamer bei großen Datenmengen\r
❌ Client muss Rendering übernehmen\r
❌ Netzwerk-Traffic höher (JSON/XML statt Bilder)\r
❌ Nicht geeignet für Rasterdaten (Luftbilder, DEMs)\r
\r
---\r
\r
## 🎯 Wann was verwenden?\r
\r
| Anwendungsfall | Standard | Grund |\r
|----------------|----------|-------|\r
| Hintergrundkarte (OSM, Google Maps) | WMS | Schnell, cached, nur visuell |\r
| Luftbilder / Satellitenbilder | WMS | Rasterdaten, keine Features |\r
| POIs anzeigen und anklicken | WFS | Attribut-Zugriff, Interaktion |\r
| Administrative Grenzen analysieren | WFS | Vektordaten für räumliche Analysen |\r
| Komplexe Themenkarte (vorgerendert) | WMS | Serverseitiges Styling, Performance |\r
| Feature-Editierung | WFS-T | Nur WFS unterstützt Transaktionen |\r
| Routenplanung | WFS | Vektordaten für Algorithmen nötig |\r
\r
---\r
\r
## 💡 Kombination in der Praxis\r
\r
In echten Anwendungen kombinierst du oft beide:\r
\r
1. **WMS als Hintergrund** – z.B. OpenStreetMap-Karte oder Luftbild\r
2. **WFS für interaktive Layer** – z.B. Standorte, Grenzen, Messungen\r
\r
\`\`\`javascript\r
// Basis-Layer (WMS)\r
const backgroundLayer = new TileLayer({\r
  source: new TileWMS({\r
    url: 'https://ows.terrestris.de/osm/service',\r
    params: { LAYERS: 'OSM-WMS' }\r
  })\r
});\r
\r
// Interaktiver Layer (WFS)\r
const poisLayer = new VectorLayer({\r
  source: new VectorSource({\r
    url: 'https://example.com/wfs?service=WFS&request=GetFeature...',\r
    format: new GeoJSON()\r
  })\r
});\r
\`\`\`\r
\r
---\r
\r
## 📝 Zusammenfassung\r
\r
| Aspekt | WMS | WFS |\r
|--------|-----|-----|\r
| **Format** | Raster (PNG, JPEG) | Vektor (GeoJSON, GML) |\r
| **Daten** | Pixel | Features mit Properties |\r
| **Interaktion** | Keine | Klickbar, abfragbar |\r
| **Performance** | ⚡ Sehr schnell | 🐢 Langsamer |\r
| **Styling** | Serverseitig | Client-seitig |\r
| **Use Case** | Hintergrundkarten, Luftbilder | POIs, Analyse, Editierung |\r
\r
> **Faustregel:** WMS für Ansicht, WFS für Interaktion.\r
\r
Probiere beide Standards jetzt in den Playground-Lektionen aus!\r
`,uM=`JavaScript ist die Grundlage für alles, was wir entwickeln. Es treibt unsere Benutzeroberflächen an, verbindet Backend-Services und integriert spezialisierte Geo-Bibliotheken wie OpenLayers und Masterportal. Ohne solides Verständnis der JavaScript-Grundlagen kannst du nicht verstehen, wie unsere Anwendungen funktionieren oder effektiv zum Code beitragen.\r
\r
## Warum JavaScript wichtig ist\r
\r
Moderne Webanwendungen sind interaktiv, datengetrieben und in Echtzeit. JavaScript macht dies möglich, indem es direkt im Browser läuft, Benutzerinteraktionen verarbeitet, den Anwendungszustand verwaltet und mit Servern kommuniziert. In unseren Geo-Anwendungen orchestriert JavaScript das Karten-Rendering, Layer-Management, Feature-Auswahl und Koordinatentransformationen.\r
\r
## Was du wissen musst\r
\r
Du solltest vertraut sein mit:\r
\r
- **Kernkonzepte der Sprache** — Variablen, Funktionen, Objekte, Arrays und Kontrollfluss\r
- **Asynchrone Programmierung** — Promises, async/await und Verarbeitung von API-Antworten\r
- **Moderne Syntax** — ES-Module, Destructuring, Arrow Functions und Template Literals\r
- **DOM-Manipulation** — Elemente auswählen, Inhalte aktualisieren und Events behandeln\r
- **Error Handling** — try/catch-Blöcke und defensive Programmierpraktiken\r
\r
Diese Grundlagen erscheinen überall in unserer Codebasis. Egal ob du eine Vue-Komponente erstellst, ein Masterportal-Widget konfigurierst oder WFS-Antworten verarbeitest — du wirst täglich auf diese JavaScript-Konzepte angewiesen sein.\r
\r
## Lernpfad\r
\r
Beginne damit, die Grundlagen zu wiederholen, wenn irgendetwas unklar ist. Die externen Ressourcen in den kommenden Lektionen bieten umfassende Abdeckung der JavaScript-Mechanismen. Fokussiere dich auf Verständnis statt Auswendiglernen — du wirst viel Praxis bekommen, diese Konzepte in echten Projekten anzuwenden.\r
\r
Nimm dir Zeit, Lücken in deinem Wissen früh zu identifizieren. Wenn async/await dich verwirrt oder du unsicher bist, wie Module funktionieren, markiere es jetzt. Deine Mentor:innen können dich durch die kniffligen Teile führen, bevor sie zu Blockern bei echten Aufgaben werden.\r
`,hM=`\uFEFF# Masterportal Architektur verstehen

## Überblick

Das Masterportal Version 3 folgt einer **komponentenbasierten Architektur** auf Basis von **Vue 3** und **Vuex**. Das Verständnis dieser Architektur ist essentiell, um eigene Tools zu entwickeln.

## Architektur-Diagramm

\`\`\`
┌─────────────────────────────────────────────────────┐
│          Masterportal v3 (Vue 3 + Vuex)             │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │    Core      │  │   Modules    │  │  Addons   │ │
│  │              │  │              │  │           │ │
│  │ - Map        │  │ - Tools      │  │ - Custom  │ │
│  │ - Vuex Store │  │ - Menu       │  │   Logic   │ │
│  │ - i18n       │  │ - Controls   │  │           │ │
│  │ - API Bridge │  │ - SearchBar  │  │           │ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
│                                                      │
│  ┌──────────────────────────────────────────────┐  │
│  │           OpenLayers (Karten-Engine)         │  │
│  └──────────────────────────────────────────────┘  │
│                                                      │
│  ┌──────────────────────────────────────────────┐  │
│  │        Vue 3 + Vuex 4 (Framework)            │  │
│  └──────────────────────────────────────────────┘  │
│                                                      │
└─────────────────────────────────────────────────────┘
\`\`\`

## Technologie-Stack

**Masterportal v3 basiert auf:**

- **Vue 3** (v3.5.22): JavaScript-Framework mit Composition API
- **Vuex 4** (v4.1.0): State Management
- **OpenLayers**: Karten-Engine
- **Bootstrap 5** (v5.3.8): UI-Components
- **Webpack 4** (v4.47.0): Build-System
- **i18next** (v25.5.2): Internationalisierung
- **Axios** (v1.12.2): HTTP-Client
- **Chart.js** (v4.5.0): Diagramme

## Core-Komponenten

### 1. Map (Karte)

Verwaltet die OpenLayers-Karte zentral:

\`\`\`javascript
// Über den Vuex Store zugreifen
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters("Maps", ["getLayerById", "getMap"])
    },
    methods: {
        addLayerToMap() {
            const map = this.getMap("2D");
            map.addLayer(myLayer);
        }
    }
};
\`\`\`

### 2. Vuex Store

Zentrales State Management mit mehreren Modulen:

\`\`\`
store/
├── index.js              # Root Store
├── Maps/                 # Karten-Verwaltung
├── Tools/                # Tool-States
│   ├── Draw/
│   ├── Measure/
│   └── MeinTool/
├── Menu/                 # Menü-State
└── Language/             # i18n-State
\`\`\`

**Typischer Store-Zugriff:**

\`\`\`javascript
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
    computed: {
        ...mapState("Tools/Draw", ["active", "drawType"]),
        ...mapGetters("Tools/Draw", ["isDrawing"])
    },
    methods: {
        ...mapActions("Tools/Draw", ["startDrawing"]),
        ...mapMutations("Tools/Draw", ["setActive"])
    }
};
\`\`\`

### 3. i18n (Internationalisierung)

Alle Texte werden über i18next verwaltet:

\`\`\`javascript
// In Templates
{{ $t("common:button.save") }}
{{ $t("additional:modules.tools.measure.title") }}

// In JavaScript
this.$t("common:button.save")
\`\`\`

**Übersetzungsdateien:**
\`\`\`
locales/
├── de/
│   ├── common.json
│   └── additional.json
└── en/
    ├── common.json
    └── additional.json
\`\`\`

### 4. MasterportalAPI

Bridge zu OpenLayers-Funktionalität:

\`\`\`javascript
import {getDistance} from "ol/sphere";
import {getArea, getLength} from "ol/sphere";

// Direkter Zugriff auf OpenLayers-Funktionen
const distance = getDistance(coord1, coord2);
\`\`\`

## Module-Struktur

### Tools

Tools sind Vue-Komponenten mit eigenem Vuex-Store:

\`\`\`
src/modules/tools/
├── draw/
│   ├── components/
│   │   └── Draw.vue          # Vue-Komponente
│   ├── store/
│   │   ├── index.js          # Store-Konfiguration
│   │   ├── actions.js        # Async-Logik
│   │   ├── mutations.js      # State-Änderungen
│   │   ├── getters.js        # Abgeleitete Werte
│   │   └── state.js          # Initialer State
│   ├── tests/
│   │   └── unit/             # Unit-Tests
│   └── doc/                  # Dokumentation
\`\`\`

### Controls

UI-Controls wie Zoom, Scale, etc.:

\`\`\`
src/modules/controls/
├── zoom/
├── orientation/
└── totalView/
\`\`\`

### Menu

Menü-System (Desktop/Mobile/Table):

\`\`\`
src/modules/menu/
├── desktop/
├── mobile/
└── table/
\`\`\`

## Vue 3 Konzepte

### 1. Vue-Komponenten

**Options API (Standard in Masterportal v3):**

\`\`\`vue
<script>
export default {
    name: "MeineTool",
    data() {
        return {
            count: 0
        };
    },
    computed: {
        doubleCount() {
            return this.count * 2;
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    mounted() {
        console.log("Component mounted");
    }
};
<\/script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <p>Double: {{ doubleCount }}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 1rem;
}
</style>
\`\`\`

**Composition API (modern, optional):**

\`\`\`vue
<script>
import {ref, computed, onMounted} from "vue";

export default {
    name: "MeinTool",
    setup() {
        const count = ref(0);
        const doubleCount = computed(() => count.value * 2);
        
        const increment = () => {
            count.value++;
        };
        
        onMounted(() => {
            console.log("Component mounted");
        });
        
        return {count, doubleCount, increment};
    }
};
<\/script>
\`\`\`

### 2. Vuex Store

**State:** Der "Single Source of Truth"

\`\`\`javascript
// state.js
const state = {
    active: false,
    selectedFeatures: [],
    distance: null
};

export default state;
\`\`\`

**Mutations:** Synchrone State-Änderungen

\`\`\`javascript
// mutations.js
export default {
    setActive(state, value) {
        state.active = value;
    },
    setDistance(state, distance) {
        state.distance = distance;
    }
};
\`\`\`

**Actions:** Asynchrone Logik

\`\`\`javascript
// actions.js
export default {
    async fetchData({commit}) {
        const data = await fetch("/api/data");
        commit("setData", data);
    },
    
    calculateDistance({state, commit}) {
        // Logik...
        commit("setDistance", result);
    }
};
\`\`\`

**Getters:** Abgeleitete Werte

\`\`\`javascript
// getters.js
export default {
    isActive: (state) => state.active,
    hasFeatures: (state) => state.selectedFeatures.length > 0,
    featureCount: (state) => state.selectedFeatures.length
};
\`\`\`

## OpenLayers Integration

### Layer-Management

\`\`\`javascript
// Layer zur Karte hinzufügen
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

const vectorLayer = new VectorLayer({
    id: "myToolLayer",
    source: new VectorSource(),
    alwaysOnTop: true
});

const map = this.getMap("2D");
map.addLayer(vectorLayer);
\`\`\`

### Interaktionen

\`\`\`javascript
import {Select, Draw} from "ol/interaction";
import {click} from "ol/events/condition";

// Feature-Selektion
const select = new Select({
    condition: click,
    style: highlightStyle
});

map.addInteraction(select);

select.on("select", (evt) => {
    const features = evt.target.getFeatures().getArray();
    this.setSelectedFeatures(features);
});
\`\`\`

### Geometrie-Operationen

\`\`\`javascript
import {getDistance, getLength, getArea} from "ol/sphere";

// Distanz zwischen Punkten
const distance = getDistance([lon1, lat1], [lon2, lat2]);

// Länge einer Linie
const length = getLength(lineStringGeometry);

// Fläche eines Polygons
const area = getArea(polygonGeometry);
\`\`\`

## Datenfluss im Masterportal v3

\`\`\`
User-Aktion (z.B. Button-Click)
    ↓
Vue-Komponente fängt Event ab (@click="...")
    ↓
Komponente ruft Vuex Action auf
    ↓
Action verarbeitet Logik (API-Calls, Berechnungen)
    ↓
Action committed Mutation(s)
    ↓
Mutation ändert State
    ↓
Vue Reactivity triggert Re-Render
    ↓
UI wird aktualisiert
\`\`\`

## Best Practices

### 1. Vuex für State Management

✅ **Gut:**
\`\`\`javascript
// In Action
commit("setSelectedFeatures", features);

// In Komponente
computed: {
    ...mapState("Tools/MeinTool", ["selectedFeatures"])
}
\`\`\`

❌ **Schlecht:**
\`\`\`javascript
// State direkt in Komponente
data() {
    return {
        selectedFeatures: []  // Nicht teilbar zwischen Komponenten
    };
}
\`\`\`

### 2. Cleanup beim Deaktivieren

✅ **Gut:**
\`\`\`javascript
// In Action
deactivate({commit, rootState}) {
    // Layer entfernen
    const map = rootState.Maps.map;
    const layer = map.getLayerById("myToolLayer");
    if (layer) {
        map.removeLayer(layer);
    }
    
    // State zurücksetzen
    commit("clearSelection");
    commit("setActive", false);
}
\`\`\`

### 3. i18n für alle Texte

✅ **Gut:**
\`\`\`vue
<template>
    <h4>{{ $t("additional:modules.tools.meinTool.title") }}</h4>
</template>
\`\`\`

❌ **Schlecht:**
\`\`\`vue
<template>
    <h4>Mein Tool</h4>  <!-- Hardcoded Deutsch -->
</template>
\`\`\`

## Debugging-Workflow

### 1. Vue DevTools

Browser-Extension für:
- Vuex State inspizieren
- Component-Tree visualisieren
- Events tracken

### 2. Console-Logs in Actions

\`\`\`javascript
export default {
    calculateDistance({state, commit}) {
        console.log("Calculating distance for:", state.selectedFeatures);
        const result = /* ... */;
        console.log("Result:", result);
        commit("setDistance", result);
    }
};
\`\`\`

### 3. Vuex Logger

\`\`\`javascript
// store/index.js
import {createLogger} from "vuex";

const plugins = process.env.NODE_ENV !== "production" 
    ? [createLogger()] 
    : [];

export default new Vuex.Store({
    // ...
    plugins
});
\`\`\`

## Weiterführende Ressourcen

- **Vue 3 Dokumentation:** https://vuejs.org/
- **Vuex 4 Dokumentation:** https://vuex.vuejs.org/
- **OpenLayers API:** https://openlayers.org/en/latest/apidoc/
- **Masterportal Doku:** https://www.masterportal.org/dokumentation
- **Beispiel-Tools:** \`src/modules/tools/\` im Repository

## Zusammenfassung

Das Masterportal v3 kombiniert:
- **Vue 3** für komponentenbasierte UI
- **Vuex 4** für zentrales State Management
- **OpenLayers** für Karten-Funktionalität
- **i18next** für Mehrsprachigkeit
- **Bootstrap 5** für konsistentes UI

Diese moderne Architektur ermöglicht wartbare und skalierbare Geo-Anwendungen! 🏗️

## OpenLayers Integration

### Layer-Typen

**Tile-Layer (WMS, XYZ):**

\`\`\`javascript
import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";

const wmsLayer = new TileLayer({
    source: new TileWMS({
        url: "https://example.com/wms",
        params: {
            "LAYERS": "my_layer",
            "VERSION": "1.3.0"
        }
    })
});
\`\`\`

**Vector-Layer (WFS, GeoJSON):**

\`\`\`javascript
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";

const vectorLayer = new VectorLayer({
    source: new VectorSource({
        url: "https://example.com/wfs?request=GetFeature",
        format: new GeoJSON()
    })
});
\`\`\`

### Features & Geometrien

\`\`\`javascript
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import Polygon from "ol/geom/Polygon";

// Punkt erstellen
const pointFeature = new Feature({
    geometry: new Point([565874, 5934140]),
    name: "Hamburg"
});

// Eigenschaften setzen
pointFeature.set("typ", "Stadt");
pointFeature.set("einwohner", 1900000);

// Geometrie holen
const coords = pointFeature.getGeometry().getCoordinates();
\`\`\`

### Styling

\`\`\`javascript
import {Style, Stroke, Fill, Circle, Text} from "ol/style";

const style = new Style({
    image: new Circle({
        radius: 8,
        fill: new Fill({color: "blue"}),
        stroke: new Stroke({color: "white", width: 2})
    }),
    stroke: new Stroke({
        color: "red",
        width: 3
    }),
    fill: new Fill({
        color: "rgba(255, 0, 0, 0.3)"
    }),
    text: new Text({
        text: "Label",
        fill: new Fill({color: "black"}),
        stroke: new Stroke({color: "white", width: 3})
    })
});

feature.setStyle(style);
\`\`\`

### Interaktionen

\`\`\`javascript
import {Select, Draw, Modify} from "ol/interaction";

// Feature-Selektion
const select = new Select({
    condition: click,
    style: highlightStyle
});

map.addInteraction(select);

select.on("select", (evt) => {
    const features = evt.target.getFeatures().getArray();
    console.log("Selected:", features);
});

// Zeichnen
const draw = new Draw({
    source: vectorSource,
    type: "LineString"
});

map.addInteraction(draw);
\`\`\`

## Best Practices

### 1. Immer Cleanup

✅ **Gut:**
\`\`\`javascript
stopTool: function () {
    this.unregisterListener();
    this.clearLayer();
    this.set("selectedFeatures", []);
}
\`\`\`

❌ **Schlecht:**
\`\`\`javascript
// Listener und Layer bleiben aktiv → Memory Leak
\`\`\`

### 2. Separation of Concerns

✅ **Gut:**
\`\`\`javascript
// Action: Business-Logik
calculateDistance({commit}, {f1, f2}) {
    const distance = getDistance(
        f1.getGeometry().getCoordinates(),
        f2.getGeometry().getCoordinates()
    );
    commit("setDistance", distance);
}

// Component: UI-Update
computed: {
    ...mapState("Tools/MeinTool", ["distance"]),
    displayDistance() {
        return this.distance + " m";
    }
}
\`\`\`

❌ **Schlecht:**
\`\`\`javascript
// Alles in der Komponente vermischt
\`\`\`

## Debugging-Workflow

1. **Console-Logs in Actions**
   \`\`\`javascript
   console.log("Method called with:", arguments);
   \`\`\`

2. **Source Maps nutzen**
   - Webpack generiert Source Maps
   - Originaler Code im Debugger sichtbar

## Weiterführende Ressourcen

- **OpenLayers API:** https://openlayers.org/en/latest/apidoc/
- **Masterportal Code:** https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/dev/
- **Beispiel-Tools im Repo:** \`src/modules/tools/\`

## Zusammenfassung

Das Masterportal v3 kombiniert:
- **Vue 3** für komponentenbasierte UI
- **Vuex 4** für zentrales State Management
- **OpenLayers** für Karten-Funktionalität
- **Modulare Architektur** für Erweiterbarkeit

Diese moderne Architektur ermöglicht es, komplexe Geo-Anwendungen strukturiert und wartbar zu entwickeln! 🏗️
`,dM=`# Praktische Übung: Deine erste Config-Anpassung\r
\r
## Ziel dieser Lektion\r
\r
Du wirst lernen, wie man in einer echten Masterportal-Umgebung arbeitet, indem du:\r
\r
1. Eine **Sandbox-Config duplizierst** zum sicheren Experimentieren\r
2. Ein **WMS + WFS-Paar registrierst** \r
3. Die Änderungen **in der UI validierst**\r
4. Deine Änderungen **dokumentierst** für zukünftige Teammitglieder\r
\r
## Schritt 1: Sandbox-Config duplizieren\r
\r
### Warum eine Sandbox?\r
\r
Eine Sandbox-Config ist eine Kopie eines bestehenden Portals, in der du **gefahrlos experimentieren** kannst, ohne produktive Portale zu beeinträchtigen.\r
\r
### Config duplizieren\r
\r
\`\`\`bash\r
cd masterportal/portal\r
cp -r basic sandbox-[dein-name]\r
cd sandbox-[dein-name]\r
\`\`\`\r
\r
Beispiel:\r
\`\`\`bash\r
cp -r basic sandbox-maria\r
cd sandbox-maria\r
\`\`\`\r
\r
### Portal-Titel anpassen\r
\r
Öffne \`config.json\` und ändere den Titel:\r
\r
\`\`\`json\r
{\r
  "portalConfig": {\r
    "portalTitle": {\r
      "title": "Sandbox - Maria",\r
      "logo": "https://www.masterportal.org/files/masterportal/img/Logo_Masterportal.svg"\r
    }\r
  }\r
}\r
\`\`\`\r
\r
### Testen\r
\r
\`\`\`bash\r
cd ../..\r
npm start\r
\`\`\`\r
\r
Öffne: \`http://localhost:9001/portal/sandbox-maria/\`\r
\r
✅ Dein Sandbox-Portal sollte jetzt mit deinem Namen erscheinen!\r
\r
## Schritt 2: WMS + WFS-Paar registrieren\r
\r
### Was ist ein WMS + WFS-Paar?\r
\r
Oftmals gibt es für denselben Datensatz zwei Services:\r
\r
- **WMS:** Zeigt die Daten als **Rasterbild** (schnell, für Hintergrund)\r
- **WFS:** Liefert die **Vektordaten** (Features mit Attributen, interaktiv)\r
\r
**Beispiel:** Krankenhäuser\r
- WMS: Rote Kreuze auf der Karte (Bild)\r
- WFS: Punkte mit Attributen (Name, Adresse, Bettenzahl)\r
\r
### Schritt 2.1: WMS in services.json hinzufügen\r
\r
Öffne \`resources/services.json\` und füge hinzu:\r
\r
\`\`\`json\r
[\r
  {\r
    "id": "wms_krankenhaeuser",\r
    "name": "Krankenhäuser (WMS)",\r
    "url": "https://geodienste.hamburg.de/HH_WMS_Krankenhaeuser",\r
    "typ": "WMS",\r
    "layers": "krankenhaus",\r
    "format": "image/png",\r
    "version": "1.3.0",\r
    "transparent": true,\r
    "singleTile": false\r
  },\r
  {\r
    "id": "wfs_krankenhaeuser",\r
    "name": "Krankenhäuser (WFS)",\r
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser",\r
    "typ": "WFS",\r
    "featureType": "krankenhaus",\r
    "version": "2.0.0",\r
    "outputFormat": "application/json"\r
  }\r
]\r
\`\`\`\r
\r
**Anatomie eines Layer-Eintrags:**\r
\r
| Feld | Beschreibung | Beispiel |\r
|------|--------------|----------|\r
| \`id\` | Eindeutige Kennung (selbst gewählt) | \`"wms_krankenhaeuser"\` |\r
| \`name\` | Anzeigename für User | \`"Krankenhäuser"\` |\r
| \`url\` | Service-Endpoint | \`"https://..."\` |\r
| \`typ\` | Service-Typ | \`"WMS"\`, \`"WFS"\`, \`"WCS"\` |\r
| \`layers\` | Layer-Name (WMS) | \`"krankenhaus"\` |\r
| \`featureType\` | Feature-Typ (WFS) | \`"krankenhaus"\` |\r
| \`version\` | OGC-Version | \`"1.3.0"\`, \`"2.0.0"\` |\r
| \`format\` | Bildformat (WMS) | \`"image/png"\` |\r
| \`outputFormat\` | Datenformat (WFS) | \`"application/json"\` |\r
\r
### Schritt 2.2: Layer in config.json aktivieren\r
\r
Öffne \`config.json\` und füge die Layer unter \`layerConfig\` hinzu:\r
\r
\`\`\`json\r
{\r
  "layerConfig": {\r
    "subjectlayer": {\r
      "elements": [\r
        {\r
          "id": "wms_krankenhaeuser",\r
              "id": "wms_krankenhaeuser",\r
              "name": "Krankenhäuser (Rasterbild)",\r
              "visibility": false,\r
              "transparency": 50\r
            },\r
            {\r
              "id": "wfs_krankenhaeuser",\r
              "name": "Krankenhäuser (Interaktiv)",\r
              "visibility": true,\r
              "styleId": "krankenhaus_style",\r
              "mouseHoverField": "name"\r
            }\r
          ]\r
        }\r
      }\r
    }\r
  }\r
}\r
\`\`\`\r
\r
**Config-Flags erklärt:**\r
\r
| Flag | Bedeutung | Werte |\r
|------|-----------|-------|\r
| \`visibility\` | Beim Start sichtbar? | \`true\` / \`false\` |\r
| \`transparency\` | Transparenz in % | \`0\` (opak) bis \`100\` (unsichtbar) |\r
| \`styleId\` | Referenz zu style.json | String (z.B. \`"krankenhaus_style"\`) |\r
| \`mouseHoverField\` | Welches Attribut bei Hover zeigen? | Attributname (z.B. \`"name"\`) |\r
\r
### Schritt 2.3: Style definieren (optional)\r
\r
Falls du WFS-Features stylen willst, öffne \`resources/style.json\`:\r
\r
\`\`\`json\r
[\r
  {\r
    "styleId": "krankenhaus_style",\r
    "rules": [\r
      {\r
        "style": {\r
          "type": "icon",\r
          "imageName": "hospital.svg",\r
          "imageScale": 1.2,\r
          "imageWidth": 32,\r
          "imageHeight": 32\r
        }\r
      }\r
    ]\r
  }\r
]\r
\`\`\`\r
\r
## Schritt 3: In der UI validieren\r
\r
### Browser neu laden\r
\r
Drücke \`Strg + F5\` (Cache-Refresh) oder starte \`npm start\` neu.\r
\r
### Checkliste\r
\r
✅ **Portal lädt ohne Fehler?**  \r
   → Öffne Browser-Console (F12), schaue nach Fehlermeldungen\r
\r
✅ **Layer erscheinen im Menü?**  \r
   → Öffne das Layer-Menü, suche "Gesundheit" → "Krankenhäuser"\r
\r
✅ **WFS-Layer ist interaktiv?**  \r
   → Klicke auf ein Feature, öffnet sich ein Info-Fenster?\r
\r
✅ **WMS-Layer zeigt Bild?**  \r
   → Aktiviere den WMS-Layer, siehst du die Symbole?\r
\r
### Häufige Probleme\r
\r
**❌ Layer erscheint nicht im Menü**\r
\r
Prüfe:\r
- ID in \`services.json\` und \`config.json\` identisch?\r
- JSON-Syntax korrekt? (keine Kommas am Ende)\r
- Browser-Cache geleert?\r
\r
**❌ WMS zeigt nichts**\r
\r
Prüfe:\r
- URL korrekt?\r
- Layer-Name korrekt? (Case-sensitive!)\r
- Im richtigen Kartenausschnitt? (Zoom rein/raus)\r
\r
**❌ WFS-Features nicht klickbar**\r
\r
Prüfe:\r
- \`featureType\` korrekt?\r
- WFS-Service antwortet? (Network-Tab in Browser-Console)\r
- GFI-Tool (GetFeatureInfo) aktiviert?\r
\r
### Debugging mit Browser-Tools\r
\r
**Console-Tab:**\r
\r
Nutze die Browser Console (F12) um Fehler zu finden:\r
\r
\`\`\`javascript\r
// Fehler und Warnungen werden hier angezeigt\r
// Prüfe auf:\r
// - JSON Syntax-Fehler\r
// - 404 Fehler beim Laden von Config-Dateien\r
// - WMS/WFS Service-Fehler\r
\`\`\`\r
\r
**Network-Tab:**\r
\r
- Filtere auf "wfs" oder "wms" um Service-Requests zu sehen\r
- Status Codes prüfen:\r
  - \`200\` = OK\r
  - \`404\` = Service nicht gefunden (URL prüfen)\r
  - \`500\` = Server-Fehler (Service-Problem)\r
  - \`CORS-Fehler\` = Service muss CORS-Header setzen\r
\r
**Application-Tab:**\r
\r
- Local Storage/Session Storage prüfen\r
- Gespeicherte Portal-Einstellungen ansehen\r
\r
> 💡 **Tipp**: Mit den Vue DevTools (Browser-Extension) kannst du auch den Vuex Store inspizieren und sehen, welche Layer geladen sind.\r
\r
## Schritt 4: Änderungen dokumentieren\r
\r
### Warum dokumentieren?\r
\r
**Für zukünftige Nachwuchskräfte** und dein Team:\r
- Was hast du geändert?\r
- Warum diese Konfiguration?\r
- Welche Flags bewirken was?\r
\r
### Dokumentations-Template\r
\r
Erstelle eine Datei \`CHANGELOG.md\` in deinem Portal-Ordner:\r
\r
\`\`\`markdown\r
# Sandbox-Maria Changelog\r
\r
## 2026-01-09: WMS + WFS Krankenhäuser hinzugefügt\r
\r
### Änderungen\r
\r
1. **services.json:**\r
   - \`wms_krankenhaeuser\`: Rasterbild der Krankenhausstandorte\r
   - \`wfs_krankenhaeuser\`: Vektordaten mit Attributen\r
\r
2. **config.json:**\r
   - Neuer Ordner "Gesundheit" unter Fachdaten\r
   - WFS-Layer standardmäßig sichtbar (visibility: true)\r
   - WMS-Layer mit 50% Transparenz\r
\r
3. **style.json:**\r
   - \`krankenhaus_style\`: Rotes Kreuz-Icon\r
\r
### Config-Flags erklärt\r
\r
- **visibility: true** → Layer beim Start anzeigen\r
- **transparency: 50** → 50% durchsichtig\r
- **mouseHoverField: "name"** → Bei Hover über Feature: Name anzeigen\r
- **styleId** → Verbindet Layer mit Style-Definition\r
\r
### Getestet\r
\r
✅ Layer erscheinen im Menü  \r
✅ WFS-Features klickbar und zeigen Attribute  \r
✅ WMS-Layer zeigt Symbole an richtigen Positionen  \r
✅ Keine Console-Errors  \r
\r
### Lessons Learned\r
\r
- IDs müssen zwischen services.json und config.json **exakt** übereinstimmen\r
- Browser-Cache muss geleert werden nach Config-Änderungen\r
- WFS ist interaktiver aber langsamer als WMS\r
- Für viele Features: WMS verwenden, für Details: WFS\r
\`\`\`\r
\r
### Dokumentation ins Repo committen\r
\r
\`\`\`bash\r
git add CHANGELOG.md\r
git commit -m "docs: Add Krankenhäuser WMS+WFS layer documentation"\r
\`\`\`\r
\r
## Best Practices\r
\r
### ✅ Do's\r
\r
- **Sprechende IDs verwenden:** \`wfs_krankenhaeuser\` statt \`layer_123\`\r
- **Konsistente Benennung:** Wenn WMS + WFS, gleichen Namen verwenden\r
- **Ordner-Struktur nutzen:** Gruppiere Layer thematisch\r
- **Changelog pflegen:** Dokumentiere alle Änderungen\r
- **Testen auf verschiedenen Zoom-Levels:** Manche Layer nur auf bestimmten Scales sichtbar\r
\r
### ❌ Don'ts\r
\r
- **Keine Produktiv-Configs direkt ändern:** Immer erst in Sandbox testen!\r
- **Keine unvalidierte JSON:** Vor Commit mit jsonlint.com prüfen\r
- **Keine Hardcoded Credentials:** API-Keys gehören nicht in Configs\r
- **Nicht ohne Tests committen:** Immer lokal testen vor Push\r
\r
## Zusammenfassung\r
\r
Du hast gelernt:\r
\r
1. ✅ Sandbox-Config erstellen und testen\r
2. ✅ Layer in \`services.json\` definieren\r
3. ✅ Layer in \`config.json\` aktivieren\r
4. ✅ Styles in \`style.json\` anpassen\r
5. ✅ In der UI validieren\r
6. ✅ Debugging mit Browser-Tools\r
7. ✅ Änderungen dokumentieren\r
\r
## Nächste Schritte\r
\r
- **Experimentiere** mit anderen Layer-Typen (XYZ, Vector Tiles, GeoJSON)\r
- **Erkunde** weitere Config-Flags in der offiziellen Dokumentation\r
- **Frage** erfahrene Teammitglieder nach Best Practices für dein Projekt\r
- **Bereite dich vor** auf Tool-Entwicklung (nächstes Modul)\r
\r
Gut gemacht! Du bist jetzt bereit für komplexere Konfigurationen und eigene Tool-Entwicklung! 🎉\r
`,fM=`# Masterportal Konfigurationsstruktur\r
\r
## Überblick\r
\r
Das Masterportal wird vollständig über JSON-Konfigurationsdateien gesteuert. Diese Dateien definieren, welche Layer verfügbar sind, wie das Portal aussieht und welche Tools angeboten werden.\r
\r
> 💡 **Wichtige Terminologie**: Die offizielle Masterportal-Dokumentation verwendet die Begriffe \`portalConfig\` und \`layerConfig\` (CamelCase). In manchen älteren Dokumenten findest du auch \`Portalconfig\` und \`Themenconfig\` - beide Schreibweisen beziehen sich auf dieselben Konzepte.\r
\r
## Die zwei Arten von Konfigurationsdateien\r
\r
### 1. Globale Konfigurationsdateien\r
\r
Diese Dateien beschreiben zentrale Informationen, die von **mehreren Portalen** genutzt werden können:\r
\r
#### \`services.json\`\r
\r
Listet **alle verfügbaren Layer** auf. Hier werden WMS-, WFS-, WCS- und andere Geodienste definiert.\r
\r
**Beispiel-Struktur:**\r
\r
\`\`\`json\r
[\r
  {\r
    "id": "1234",\r
    "name": "Luftbilder Hamburg",\r
    "url": "https://geodienste.hamburg.de/HH_WMS_DOP",\r
    "typ": "WMS",\r
    "layers": "luftbilder_rgb",\r
    "format": "image/png",\r
    "version": "1.3.0"\r
  },\r
  {\r
    "id": "5678",\r
    "name": "Krankenhäuser",\r
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser",\r
    "typ": "WFS",\r
    "featureType": "krankenhaus",\r
    "version": "2.0.0"\r
  }\r
]\r
\`\`\`\r
\r
**Wichtige Eigenschaften:**\r
- \`id\`: Eindeutige Kennung (wird in config.json referenziert)\r
- \`typ\`: Layer-Typ (WMS, WFS, WCS, etc.)\r
- \`url\`: Dienst-URL\r
- \`layers\`/\`featureType\`: Layer-Name auf dem Server\r
\r
#### \`rest-services.json\`\r
\r
URLs zu verschiedenen **externen Services** wie Geocoder, Routing, Drucken, etc.\r
\r
**Beispiel:**\r
\r
\`\`\`json\r
[\r
  {\r
    "id": "geocoder",\r
    "name": "BKG Geocoder",\r
    "url": "https://sg.geodatenzentrum.de/gdz_geokodierung__[VERSION]/geosearch.json",\r
    "typ": "WFS"\r
  },\r
  {\r
    "id": "routing",\r
    "name": "BKG Routing Service",\r
    "url": "https://sg.geodatenzentrum.de/gdz_routing__[VERSION]",\r
    "typ": "ROUTING"\r
  }\r
]\r
\`\`\`\r
\r
#### \`style.json\`\r
\r
Enthält **Style-Definitionen** für Vektorlayer (z.B. WFS). Definiert Farben, Linienstärken, Icons, etc.\r
\r
**Beispiel:**\r
\r
\`\`\`json\r
[\r
  {\r
    "styleId": "krankenhaus_style",\r
    "rules": [\r
      {\r
        "style": {\r
          "type": "icon",\r
          "imageName": "hospital.png",\r
          "imageScale": 1.5\r
        }\r
      }\r
    ]\r
  }\r
]\r
\`\`\`\r
\r
### 2. Portal-spezifische Konfigurationsdateien\r
\r
Diese Dateien definieren ein **konkretes Portal-Instanz**:\r
\r
#### \`config.js\`\r
\r
Konfiguriert **Pfade** zu weiteren Konfigurationsdateien und Services.\r
\r
**Beispiel:**\r
\r
\`\`\`javascript\r
const Config = {\r
  portalConf: "./config.json",\r
  layerConf: "../resources/services.json",\r
  restConf: "../resources/rest-services.json",\r
  styleConf: "../resources/style.json"\r
};\r
\`\`\`\r
\r
**Wichtig:** Die Dateien \`index.html\`, \`config.js\` und \`config.json\` müssen im **gleichen Pfad** liegen!\r
\r
#### \`config.json\`\r
\r
Die **Hauptkonfigurationsdatei** eines Portals. Hier wird alles definiert:\r
\r
- **Portalname & Titel**\r
- **Karteneinstellungen** (Zentrum, Zoom, Projektionen)\r
- **Verfügbare Layer** (Referenz zu IDs aus services.json)\r
- **Aktivierte Tools** (Koordinatentool, Routing, Zeichnen, etc.)\r
- **UI-Elemente** (Menüs, Buttons, Suchleiste)\r
\r
**Vereinfachtes Beispiel:**\r
\r
\`\`\`json\r
{\r
  "portalConfig": {\r
    "portalTitle": {\r
      "title": "Mein erstes Portal",\r
      "logo": "logo.png"\r
    },\r
    "map": {\r
      "mapView": {\r
        "center": [565874, 5934140],\r
        "epsg": "EPSG:25832",\r
        "startZoom": 5\r
      }\r
    },\r
    "menu": {\r
      "tools": {\r
        "children": {\r
          "coordToolkit": {},\r
          "draw": {},\r
          "measure": {},\r
          "routing": {}\r
        }\r
      }\r
    }\r
  },\r
  "layerConfig": {\r
    "baselayer": {\r
      "elements": [\r
        {\r
          "id": "1234"\r
        }\r
      ]\r
    },\r
    "subjectlayer": {\r
      "elements": [\r
        {\r
          "id": "5678"\r
        }\r
      ]\r
    }\r
  }\r
}\r
\`\`\`\r
\r
**Wichtige Abschnitte:**\r
\r
- **portalConfig:** Portal-Aussehen und Verhalten\r
  - \`portalTitle\`: Titel und Logo\r
  - \`map.mapView\`: Karten-Initialisierung\r
  - \`menu\`: Verfügbare Tools und Menüs\r
\r
- **layerConfig:** Layer-Organisation\r
  - \`baselayer\`: Hintergrundkarten (OSM, Luftbilder, etc.)\r
  - \`subjectlayer\`: Thematische Layer (POIs, WFS-Daten)\r
\r
> 💡 **Alternative Terminologie**: In älteren Portalen findest du manchmal \`Portalconfig\` und \`Themenconfig\` statt \`portalConfig\` und \`layerConfig\`. Die offizielle Dokumentation (Version 3.x) nutzt \`portalConfig\` und \`layerConfig\`.\r
\r
## Zusammenspiel der Dateien\r
\r
\`\`\`\r
┌─────────────────────────────────────────────┐\r
│  Portal: http://mein-portal.de/portal/demo  │\r
└─────────────────────────────────────────────┘\r
                    │\r
                    ▼\r
        ┌───────────────────────┐\r
        │   index.html          │\r
        └───────────────────────┘\r
                    │\r
                    ▼\r
        ┌───────────────────────┐\r
        │   config.js           │  ◄───── definiert Pfade\r
        └───────────────────────┘\r
                    │\r
        ┌───────────┴───────────────────────────┐\r
        │                                       │\r
        ▼                                       ▼\r
┌───────────────────┐               ┌──────────────────────┐\r
│   config.json     │               │ Globale Configs:     │\r
│                   │               │ - services.json      │\r
│ - Portal-Layout   │◄──referenziert│ - rest-services.json │\r
│ - Tools           │               │ - style.json         │\r
│ - Layer-IDs       │               └──────────────────────┘\r
└───────────────────┘\r
\`\`\`\r
\r
## Anschauliche Tools in der config.json\r
\r
Für neue Teammitglieder sind diese Tools besonders **anschaulich** und hilfreich zum Lernen:\r
\r
### 1. **Koordinatentool** (\`coordToolkit\`)\r
\r
Zeigt Koordinaten des Mauszeigers in verschiedenen Projektionen an.\r
\r
\`\`\`json\r
"coordToolkit": {\r
  "name": "Koordinatenabfrage",\r
  "zoomLevel": 7\r
}\r
\`\`\`\r
\r
### 2. **Zeichnen** (\`draw\`)\r
\r
Ermöglicht das Zeichnen von Punkten, Linien, Polygonen auf der Karte.\r
\r
\`\`\`json\r
"draw": {\r
  "name": "Zeichnen / Schreiben",\r
  "renderToWindow": true\r
}\r
\`\`\`\r
\r
### 3. **Strecke messen** (\`measure\`)\r
\r
Misst Entfernungen und Flächen.\r
\r
\`\`\`json\r
"measure": {\r
  "name": "Strecke / Fläche messen"\r
}\r
\`\`\`\r
\r
### 4. **Routing** (\`routing\`)\r
\r
Berechnet Routen zwischen zwei oder mehr Punkten.\r
\r
\`\`\`json\r
"routing": {\r
  "name": "Routing",\r
  "directionsSettings": {\r
    "type": "ORS"\r
  }\r
}\r
\`\`\`\r
\r
## Wo finde ich verfügbare Dienste?\r
\r
Alle verfügbaren Geodienste findest du in der **services.json** der Portal-Konfiguration:\r
\r
\`\`\`bash\r
masterportal/portal/[portal-name]/resources/services.json\r
\`\`\`\r
\r
Zum Beispiel:\r
- \`masterportal/portal/basic/resources/services.json\`\r
- \`masterportal/portal/master/resources/services.json\`\r
\r
## Best Practices\r
\r
✅ **Verwende sprechende IDs** in services.json (z.B. "luftbilder_2023" statt "123")\r
\r
✅ **Kommentiere config.json** nicht - JSON unterstützt keine Kommentare! Nutze stattdessen eine separate README.md\r
\r
✅ **Teste nach jeder Änderung** - Config-Fehler sind die häufigste Fehlerquelle!\r
\r
✅ **Verwende JSON-Validator** - Überprüfe die Syntax vor dem Speichern\r
\r
⚠️ **Achtung:** Ein einzelnes fehlendes Komma oder falsches Anführungszeichen kann das gesamte Portal unbenutzbar machen!\r
\r
## Nächste Schritte\r
\r
Im nächsten Schritt lernst du:\r
- Wie du ein Portal **ohne Programmierung** nur durch Bearbeiten der config.json aufsetzt\r
- Wie du Layer hinzufügst und entfernst\r
- Wie du Tools aktivierst und konfigurierst\r
\r
## Weiterführende Links\r
\r
- Offizielle Config-Dokumentation: https://www.masterportal.org/dokumentation/dokumentation\r
- Beispiel-Portale im Repository: \`masterportal/portal/\`\r
`,gM=`# Masterportal Installation & Setup\r
\r
## Einführung\r
\r
Das Masterportal ist ein Open Source Framework zur Erstellung von Web-GIS-Anwendungen. In diesem Guide lernst du, wie du das Masterportal auf deinem lokalen Rechner einrichtest und zum Laufen bringst.\r
\r
## Voraussetzungen prüfen\r
\r
Bevor du startest, stelle sicher, dass du Node.js und npm installiert hast.\r
\r
### Node.js & npm Version\r
\r
Das Masterportal definiert in der \`package.json\` unter \`engines\` die erforderlichen Versionen. **Wichtig**: Verwende genau die angegebenen Versionen, da falsche Versionen die häufigste Fehlerquelle sind!\r
\r
Prüfe deine installierten Versionen:\r
\r
\`\`\`bash\r
node --version\r
npm --version\r
\`\`\`\r
\r
> 💡 **Tipp**: Die offiziellen Anforderungen findest du im Repository in der \`package.json\` unter \`engines\`. Für Version 3.x wird typischerweise Node.js 22.x benötigt.\r
\r
## Repository klonen\r
\r
Das Masterportal wird auf Bitbucket gehostet:\r
\r
\`\`\`bash\r
git clone https://bitbucket.org/geowerkstatt-hamburg/masterportal.git\r
cd masterportal\r
\`\`\`\r
\r
Für die aktuelle Entwicklungsversion (Version 3.x) wechsle zum \`dev\` Branch:\r
\r
\`\`\`bash\r
git checkout dev\r
\`\`\`\r
\r
> 💡 **Hinweis**: Der \`dev\`-Branch ist der Hauptentwicklungszweig für Version 3. Für stabile Releases siehe die Tags im Repository.\r
\r
## Installation der Dependencies\r
\r
### VPN-Hinweis ⚠️\r
\r
Je nach PC-Modell und Konfiguration kann es zu Problemen mit npm-Installation kommen:\r
\r
- **Mit VPN:** Manche PCs können nur mit aktivem VPN npm-Pakete herunterladen\r
- **Ohne VPN:** Andere PCs benötigen die VPN-Verbindung ausgeschaltet\r
- **Lösung:** Probiere beide Varianten aus, wenn \`npm install\` hängt oder fehlschlägt\r
\r
### Dependencies installieren\r
\r
\`\`\`bash\r
npm install\r
\`\`\`\r
\r
Dieser Befehl kann einige Minuten dauern und installiert alle benötigten Pakete.\r
\r
## Entwicklungsserver starten\r
\r
Nach erfolgreicher Installation kannst du den Dev-Server starten:\r
\r
\`\`\`bash\r
npm start\r
\`\`\`\r
\r
Das Masterportal sollte nun automatisch im Browser unter \`http://localhost:9001\` öffnen.\r
\r
### Browser-Zugriff-Probleme\r
\r
Falls die Seite nicht lädt:\r
\r
1. **VPN-Status prüfen:** Auch hier kann VPN an/aus den Unterschied machen\r
2. **Port prüfen:** Ist Port 9001 bereits belegt?\r
3. **Firewall:** Blockiert die Firewall den Zugriff?\r
4. **Manuell öffnen:** Gib \`http://localhost:9001\` direkt im Browser ein\r
\r
## Wichtige npm-Befehle\r
\r
Alle relevanten Befehle findest du in der \`package.json\` unter \`scripts\`. Die wichtigsten:\r
\r
\`\`\`bash\r
# Entwicklungsserver starten (mit Live-Reload)\r
npm start\r
\r
# Production-Build erstellen (alle Portale)\r
npm run build\r
\r
# Build nur für Beispiel-Portale\r
npm run buildExamples\r
\r
# Unit-Tests ausführen\r
npm test\r
# oder mit Watch-Mode\r
npm run test:watch\r
\r
# Linter ausführen\r
npm run lint\r
\r
# JSDoc-Dokumentation generieren\r
npm run buildJsDoc\r
\`\`\`\r
\r
> 💡 **Tipp**: Nach \`npm start\` öffnet sich automatisch der Browser unter \`http://localhost:9001\`. Dort findest du verschiedene Beispiel-Portale:\r
> - \`http://localhost:9001/portal/basic\` - Einfaches Portal\r
> - \`http://localhost:9001/portal/master\` - Portal mit umfangreicher Config\r
> - \`http://localhost:9001/portal/auto\` - Automatisch generierte Layer-Liste\r
\r
## Projektstruktur verstehen\r
\r
Nach dem Klonen siehst du folgende Hauptordner:\r
\r
\`\`\`\r
masterportal/\r
├── src/                 # Quellcode\r
│   ├── modules/        # Tool-Module (Vue 3 Komponenten)\r
│   ├── core/           # Kernfunktionalität\r
│   └── shared/         # Geteilte Komponenten\r
├── portal/             # Portal-Konfigurationen\r
│   ├── Basic/          # Beispiel-Portal "Basic"\r
│   └── Master/         # Beispiel-Portal "Master"\r
├── test/               # Tests\r
├── doc/                # Dokumentation\r
└── package.json        # Dependencies & Scripts\r
\`\`\`\r
\r
## Nächste Schritte\r
\r
✅ Du hast das Masterportal erfolgreich installiert!\r
\r
Weiter geht es mit:\r
- **Config-Struktur:** Lerne die JSON-Konfigurationsdateien kennen\r
- **Portal aufsetzen:** Erstelle dein erstes eigenes Portal\r
- **Tool-Entwicklung:** Programmiere eigene Werkzeuge\r
\r
## Troubleshooting\r
\r
### \`npm install\` schlägt fehl\r
\r
1. **Node/npm Version prüfen**: Siehe Abschnitt "Voraussetzungen prüfen"\r
2. **VPN an/aus schalten**: Je nach Netzwerk-Konfiguration kann dies helfen\r
3. **Cache leeren und neu installieren**:\r
   \`\`\`bash\r
   npm cache clean --force\r
   rm -rf node_modules package-lock.json\r
   npm install\r
   \`\`\`\r
4. **Proxy-Konfiguration prüfen**: Falls hinter einem Corporate Proxy (siehe VPN-Hinweis oben)\r
\r
### Build-Fehler\r
\r
- **Console prüfen**: Schaue nach spezifischen Fehlermeldungen\r
- **Dependencies prüfen**: \`npm install\` erneut ausführen\r
- **Branch-Status prüfen**: \`git status\` - sind alle Dateien committet?\r
- **Node-Version verifizieren**: Falsche Node-Version ist häufigster Grund\r
\r
### \`npm start\` startet nicht oder Port 9001 belegt\r
\r
- **Port ändern**: In der webpack-Konfiguration den Port anpassen\r
- **Prozess killen**: \`lsof -i :9001\` (Mac/Linux) oder Task-Manager (Windows)\r
\r
### Weitere Hilfe\r
\r
- **Offizielle Dokumentation**: https://www.masterportal.org/dokumentation\r
- **Issues im Repository**: https://bitbucket.org/geowerkstatt-hamburg/masterportal/issues\r
- **Team-Chat**: Frage erfahrene Kollegen\r
`,mM=`# Masterportal Übersicht\r
\r
## Was ist das Masterportal?\r
\r
Das Masterportal ist ein **Open Source Web-GIS-Framework**, entwickelt von der Geowerkstatt Hamburg. Es ermöglicht die Erstellung von benutzerfreundlichen Kartenanwendungen ohne tiefgreifende Programmierkenntnisse.\r
\r
## Kernkonzept\r
\r
Das Masterportal **wrappet OpenLayers** mit konfigurationsgesteuerten Widgets und bietet:\r
\r
- **Konfigurationsbasiert:** Erstelle vollständige Portale nur durch JSON-Konfiguration\r
- **Modular:** Nutze vordefinierte Tools (Messen, Zeichnen, Routing, etc.)\r
- **Erweiterbar:** Entwickle eigene Tools mit JavaScript\r
- **OGC-konform:** Unterstützt WMS, WFS, WCS und weitere Standards\r
\r
## High-Level-Architektur\r
\r
\`\`\`\r
┌─────────────────────────────────────────────┐\r
│         Masterportal Anwendung              │\r
├─────────────────────────────────────────────┤\r
│                                             │\r
│  PortalConfig-Dateien                       │\r
│  - config.json (Portal-Einstellungen)       │\r
│  - services.json (Layer-Definitionen)       │\r
│  - style.json (Visualisierung)              │\r
│                                             │\r
│  ┌─────────────┐  ┌─────────────┐          │\r
│  │   Tools     │  │  Addons     │          │\r
│  │ (Standard)  │  │ (Custom)    │          │\r
│  └─────────────┘  └─────────────┘          │\r
│                                             │\r
│  ┌───────────────────────────────────────┐ │\r
│  │     OpenLayers (Karten-Engine)        │ │\r
│  └───────────────────────────────────────┘ │\r
│                                             │\r
│  ┌───────────────────────────────────────┐ │\r
│  │    Services (WMS, WFS, OGC APIs)      │ │\r
│  └───────────────────────────────────────┘ │\r
└─────────────────────────────────────────────┘\r
\`\`\`\r
\r
## Hauptkomponenten\r
\r
### 1. PortalConfig-Dateien\r
\r
Definieren **Layer, Tools und UI-Module** deines Portals:\r
\r
- \`config.json\`: Hauptkonfiguration (Titel, Karte, Menü)\r
- \`services.json\`: Alle verfügbaren Geodienste\r
- \`rest-services.json\`: Externe Services (Geocoder, Routing)\r
- \`style.json\`: Visualisierung von Vektorlayern\r
\r
### 2. Tools (Vordefiniert)\r
\r
Das Masterportal kommt mit vielen fertigen Werkzeugen:\r
\r
- **Koordinatentool:** Zeige Mausposition in verschiedenen Projektionen\r
- **Zeichnen:** Punkt, Linie, Polygon, Text auf Karte\r
- **Messen:** Distanzen und Flächen\r
- **Routing:** Route zwischen Punkten berechnen\r
- **Feature-Info:** Informationen zu Kartenobjekten abfragen\r
- **Filter:** Layer-Daten filtern\r
- **Drucken:** Karte als PDF exportieren\r
\r
### 3. Addons\r
\r
**Addons** erweitern das Masterportal mit eigener Logik:\r
\r
- Werden mit **Vue 3 Komponenten** entwickelt\r
- Können eigene Backend-Services integrieren\r
- Implementieren spezifische Business-Logik\r
- Leben im \`addons/\` Ordner außerhalb des Core\r
\r
### 4. Services\r
\r
**Services** kapseln APIs und Geodienste:\r
\r
- **WMS** (Web Map Service): Rasterkarten\r
- **WFS** (Web Feature Service): Vektordaten\r
- **WCS** (Web Coverage Service): Rasterdaten mit Werten\r
- **CSW** (Catalogue Service): Metadaten-Suche\r
- **OGC API Features:** Moderne Alternative zu WFS\r
\r
## Typischer Workflow im Team\r
\r
### Phase 1: Onboarding (Du bist hier!)\r
\r
1. **Repository klonen** und lokalen Dev-Server starten\r
2. **Beispiel-Portale** erkunden\r
3. **Konfiguration verstehen**: services.json, config.json\r
4. **Einfache Änderungen**: Layer hinzufügen, Tools aktivieren\r
\r
### Phase 2: Erste Aufgaben\r
\r
1. **Dupliziere eine Sandbox-Config** zum Experimentieren\r
2. **Registriere ein WMS + WFS-Paar** in services.json\r
3. **Validiere in der Masterportal-UI** - funktioniert alles?\r
4. **Dokumentiere** was jedes Config-Flag bewirkt\r
\r
### Phase 3: Tool-Entwicklung\r
\r
1. **Analysiere bestehende Tools** im Repository (\`src/modules/tools/\`)\r
2. **Entwickle eigenes Tool** mit Vue 3, Vuex 4 & OpenLayers\r
3. **Teste** mit Unit-Tests (Mocha, Chai, Sinon)\r
4. **Code-Review** mit erfahrenen Teammitgliedern\r
\r
### Phase 4: Deployment\r
\r
1. **Config-Änderungen** in Git committen\r
2. **Pull Request** erstellen\r
3. **Review-Prozess** durchlaufen\r
4. **Deployment** in Produktion (oft automatisiert)\r
\r
## Warum Masterportal lernen?\r
\r
### Für dich als Nachwuchskraft:\r
\r
✅ **Schneller Einstieg** in professionelle Geo-Entwicklung  \r
✅ **Praktische Skills** in Vue 3, OpenLayers und modernem JavaScript  \r
✅ **Open Source Contribution** - dein Code wird von vielen genutzt  \r
✅ **Community** - aktive Entwickler-Community in Hamburg  \r
\r
### Für das Team:\r
\r
✅ **Konsistenz** - alle Portale basieren auf gleicher Architektur  \r
✅ **Wiederverwendbarkeit** - Tools einmal entwickeln, überall nutzen  \r
✅ **Wartbarkeit** - klare Struktur, gute Dokumentation  \r
✅ **Standards** - OGC-konform, interoperabel  \r
\r
## Versionierung\r
\r
**Wichtig:** Das Masterportal existiert in mehreren Hauptversionen:\r
\r
- **Version 2.x:** Basiert auf Backbone.js und Vue 2 (Legacy)\r
- **Version 3.x:** Aktuelle Version - vollständig auf Vue 3 + Vuex 4 migriert\r
\r
**Dein Team nutzt Version 3.x** - diese verwendet ausschließlich Vue 3 und Vuex 4.\r
\r
> ⚠️ **Achtung**: Achte bei der Suche nach Beispielen und Dokumentation darauf, dass du **Version 3.x** Material verwendest. Code-Beispiele mit Backbone.js stammen aus Version 2 und sind nicht mehr relevant!\r
\r
## Nächste Schritte\r
\r
In den folgenden Lektionen lernst du:\r
\r
1. **Installation & Setup:** Masterportal lokal zum Laufen bringen\r
2. **Config-Struktur:** Alle Config-Dateien im Detail\r
3. **Portal aufsetzen:** Dein erstes eigenes Portal (ohne Code!)\r
4. **Tool-Entwicklung:** Eigene Werkzeuge programmieren\r
5. **Testing:** Tools professionell testen\r
\r
## Weiterführende Ressourcen\r
\r
- **Offizielle Website:** https://www.masterportal.org\r
- **Dokumentation:** https://www.masterportal.org/dokumentation (Version 3.x)\r
- **Repository:** https://bitbucket.org/geowerkstatt-hamburg/masterportal\r
- **Community:** Issues und Discussions im Repository\r
- **Beispiel-Portale:** Im Repository unter \`portal/\` (Basic, Master, etc.)\r
\r
Lass uns loslegen! 🚀\r
`,pM=`# Ein Portal aufsetzen (ohne Programmierung)\r
\r
## Einführung\r
\r
Eine der Stärken des Masterportals ist, dass du ein **vollständiges Web-GIS** erstellen kannst, **ohne eine einzige Zeile Code zu schreiben**. Alles geschieht durch Bearbeiten der \`config.json\`.\r
\r
In dieser Lektion lernst du, wie du dein eigenes Portal von Grund auf konfigurierst.\r
\r
## Schritt 1: Portal-Ordner erstellen\r
\r
Erstelle einen neuen Ordner für dein Portal:\r
\r
\`\`\`bash\r
cd masterportal/portal\r
mkdir mein-erstes-portal\r
cd mein-erstes-portal\r
\`\`\`\r
\r
## Schritt 2: Grunddateien anlegen\r
\r
Kopiere die Grundstruktur von einem Beispiel-Portal:\r
\r
\`\`\`bash\r
# Von einem bestehenden Portal kopieren (Achtung: Großschreibung!)\r
cp -r ../Basic/* .\r
\`\`\`\r
\r
> 💡 **Windows**: Nutze \`xcopy /E /I ..\\Basic .\` oder kopiere den Ordner im Explorer\r
\r
Du solltest nun haben:\r
\`\`\`\r
mein-erstes-portal/\r
├── index.html\r
├── config.js\r
├── config.json\r
└── resources/\r
    ├── services.json\r
    ├── rest-services.json\r
    └── style.json\r
\`\`\`\r
\r
## Schritt 3: config.js anpassen\r
\r
Öffne \`config.js\` und prüfe die Pfade:\r
\r
\`\`\`javascript\r
const Config = {\r
  portalConf: "./config.json",\r
  layerConf: "./resources/services.json",\r
  restConf: "./resources/rest-services.json",\r
  styleConf: "./resources/style.json"\r
};\r
\`\`\`\r
\r
**Wichtig:** Die Pfade müssen relativ zu deinem Portal-Ordner korrekt sein!\r
\r
## Schritt 4: config.json bearbeiten\r
\r
Jetzt kommt der Hauptteil - die \`config.json\` konfigurieren.\r
\r
### Portal-Titel setzen\r
\r
\`\`\`json\r
{\r
  "portalConfig": {\r
    "portalTitle": {\r
      "title": "Mein Geo-Portal",\r
      "logo": "https://example.com/logo.png",\r
      "link": "https://example.com",\r
      "toolTip": "Zurück zur Startseite"\r
    }\r
  }\r
}\r
\`\`\`\r
\r
### Kartenansicht konfigurieren\r
\r
Definiere, wo die Karte beim Start zentriert sein soll:\r
\r
\`\`\`json\r
"portalConfig": {\r
  "map": {\r
    "mapView": {\r
      "center": [565874, 5934140],\r
      "epsg": "EPSG:25832",\r
      "startZoom": 5,\r
      "extent": [454591, 5809000, 700000, 6075769]\r
    }\r
  }\r
}\r
\`\`\`\r
\r
**Parameter erklärt:**\r
- \`center\`: Startkoordinaten [x, y] in der angegebenen Projektion\r
- \`epsg\`: Projektionssystem (z.B. EPSG:25832 für UTM Zone 32N)\r
- \`startZoom\`: Zoom-Level beim Start (0 = herausgezoomt, höhere Werte = näher)\r
- \`extent\`: Maximaler Kartenausschnitt [minX, minY, maxX, maxY]\r
\r
**Tipp:** Koordinaten für deine Stadt findest du z.B. auf [epsg.io](https://epsg.io/transform)\r
\r
### Suchfunktion aktivieren\r
\r
\`\`\`json\r
"portalConfig": {\r
  "map": {\r
    "mapView": { /* ... */ }\r
  },\r
  "mainMenu": {\r
    "searchBar": {\r
      "gazetteer": {\r
        "minChars": 3,\r
        "serviceId": "bkg_geosearch",\r
        "searchStreets": true,\r
        "searchHouseNumbers": true,\r
        "searchAddress": true\r
      }\r
    }\r
  }\r
}\r
\`\`\`\r
\r
> 💡 Die \`serviceId\` referenziert einen Eintrag in der \`rest-services.json\`.\r
\r
## Schritt 5: Layer hinzufügen\r
\r
Layer werden in zwei Schritten eingebunden:\r
\r
### 5.1 Layer in services.json definieren\r
\r
Öffne \`resources/services.json\` und füge einen Layer hinzu:\r
\r
\`\`\`json\r
[\r
  {\r
    "id": "openstreetmap",\r
    "name": "OpenStreetMap",\r
    "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",\r
    "typ": "XYZ",\r
    "tileSize": 256,\r
    "attribution": "© OpenStreetMap contributors"\r
  },\r
  {\r
    "id": "wfs_schulen",\r
    "name": "Schulen",\r
    "url": "https://geodienste.example.de/wfs_schulen",\r
    "typ": "WFS",\r
    "featureType": "schulen",\r
    "version": "2.0.0",\r
    "outputFormat": "application/json"\r
  }\r
]\r
\`\`\`\r
\r
### 5.2 Layer in config.json aktivieren\r
\r
Füge die Layer-IDs in der \`config.json\` unter \`layerConfig\` hinzu:\r
\r
\`\`\`json\r
"layerConfig": {\r
  "baselayer": {\r
    "elements": [\r
      {\r
        "id": "openstreetmap",\r
        "name": "OpenStreetMap",\r
        "visibility": true\r
      }\r
    ]\r
  },\r
  "subjectlayer": {\r
    "elements": [\r
      {\r
        "id": "wfs_schulen",\r
        "name": "Schulstandorte",\r
        "visibility": false,\r
        "styleId": "schulen_style"\r
      }\r
    ]\r
  }\r
}\r
\`\`\`\r
\r
**Parameter erklärt:**\r
- \`id\`: Referenz zur services.json\r
- \`visibility\`: Soll der Layer beim Start sichtbar sein?\r
- \`styleId\`: Optionale Referenz zur style.json\r
\r
> 💡 **Alternative Terminologie**: In älteren Portalen findest du manchmal \`Themenconfig\` mit \`Hintergrundkarten\` und \`Fachdaten\`. Die offizielle v3 Doku nutzt \`layerConfig\` mit \`baselayer\` und \`subjectlayer\`.\r
\r
## Schritt 6: Tools aktivieren\r
\r
Aktiviere nützliche Werkzeuge für deine User:\r
\r
\`\`\`json\r
"menu": {\r
  "tools": {\r
    "children": {\r
      "coordToolkit": {\r
        "name": "Koordinaten anzeigen",\r
        "zoomLevel": 7\r
      },\r
      "draw": {\r
        "name": "Zeichnen",\r
        "renderToWindow": true,\r
        "drawSymbolSettings": {\r
          "font": ["Arial"],\r
          "fontSize": [16, 32, 64],\r
          "color": ["#ff0000", "#00ff00", "#0000ff"]\r
        }\r
      },\r
      "measure": {\r
        "name": "Messen",\r
        "earthRadius": 6378137\r
      },\r
      "routing": {\r
        "name": "Route berechnen",\r
        "directionsSettings": {\r
          "type": "ORS"\r
        }\r
      },\r
      "gfi": {\r
        "name": "Informationen abfragen",\r
        "active": true\r
      }\r
    }\r
  }\r
}\r
\`\`\`\r
\r
**Besonders anschauliche Tools für Einsteiger:**\r
- \`coordToolkit\`: Zeigt Mauskoordinaten in verschiedenen Projektionen\r
- \`draw\`: Zeichnen auf der Karte\r
- \`measure\`: Distanzen und Flächen messen\r
- \`routing\`: Routen zwischen Punkten berechnen\r
\r
## Schritt 7: Portal testen\r
\r
Starte den Entwicklungsserver:\r
\r
\`\`\`bash\r
cd masterportal\r
npm start\r
\`\`\`\r
\r
Öffne dein Portal im Browser:\r
\`\`\`\r
http://localhost:9001/portal/mein-erstes-portal/\r
\`\`\`\r
\r
## Typische Config-Fehler vermeiden\r
\r
### ❌ Fehler 1: JSON-Syntax\r
\r
\`\`\`json\r
// FALSCH - Trailing Comma\r
{\r
  "name": "Test",\r
  "value": 123,  ← Letztes Komma entfernen!\r
}\r
\`\`\`\r
\r
\`\`\`json\r
// RICHTIG\r
{\r
  "name": "Test",\r
  "value": 123\r
}\r
\`\`\`\r
\r
### ❌ Fehler 2: Falsche Layer-ID\r
\r
\`\`\`json\r
// Layer in config.json referenziert "schulen_123"\r
{\r
  "id": "schulen_123",\r
  "name": "Schulen"\r
}\r
\`\`\`\r
\r
Aber in \`services.json\` heißt er:\r
\`\`\`json\r
{\r
  "id": "wfs_schulen",  ← ID stimmt nicht überein!\r
  "name": "Schulen"\r
}\r
\`\`\`\r
\r
**Lösung:** IDs müssen exakt übereinstimmen!\r
\r
### ❌ Fehler 3: Pfade in config.js falsch\r
\r
\`\`\`javascript\r
// FALSCH - Pfad existiert nicht\r
const Config = {\r
  portalConf: "../config.json",  ← Pfad falsch\r
};\r
\`\`\`\r
\r
**Lösung:** Prüfe, ob die Dateien wirklich an den angegebenen Pfaden liegen!\r
\r
## Validation-Tools nutzen\r
\r
Vor dem Testen: JSON validieren!\r
\r
**Online:**\r
- https://jsonlint.com/\r
- https://jsonformatter.curiousconcept.com/\r
\r
**VSCode:**\r
- JSON-Schema-Validation aktivieren\r
- Extension: "JSON Tools"\r
\r
**Command Line:**\r
\`\`\`bash\r
# Mit jq prüfen (muss installiert sein)\r
cat config.json | jq .\r
\`\`\`\r
\r
## Debugging-Tipps\r
\r
### Browser-Console öffnen\r
\r
\`F12\` oder \`Rechtsklick > Untersuchen > Console\`\r
\r
**Typische Fehlermeldungen:**\r
\r
\`\`\`\r
SyntaxError: Unexpected token } in JSON\r
→ JSON-Syntax-Fehler, prüfe Kommas und Klammern\r
\r
Failed to load resource: 404 (Not Found) - services.json\r
→ Pfad in config.js falsch\r
\r
Layer with id 'xyz' not found\r
→ Layer-ID in config.json existiert nicht in services.json\r
\`\`\`\r
\r
### Network-Tab prüfen\r
\r
Schaue nach fehlgeschlagenen Requests:\r
- Werden alle Config-Files geladen?\r
- Antworten die WMS/WFS-Dienste?\r
\r
### Config-Fehler beheben\r
\r
1. **JSON-Syntax prüfen** (jsonlint.com)\r
2. **Pfade prüfen** (existieren die Dateien?)\r
3. **Layer-IDs prüfen** (services.json ↔ config.json)\r
4. **Browser-Cache leeren** (Strg+F5)\r
5. **Server neu starten** (npm start)\r
\r
## Checkliste: Mein erstes Portal\r
\r
✅ Portal-Ordner erstellt  \r
✅ Grunddateien (index.html, config.js, config.json) vorhanden  \r
✅ config.js: Pfade korrekt konfiguriert  \r
✅ config.json: Portal-Titel gesetzt  \r
✅ config.json: Kartenansicht konfiguriert  \r
✅ services.json: Layer definiert  \r
✅ config.json: Layer in layerConfig aktiviert  \r
✅ config.json: Tools aktiviert  \r
✅ JSON-Syntax validiert  \r
✅ Portal im Browser getestet  \r
\r
## Nächste Schritte\r
\r
Du hast jetzt ein funktionierendes Portal **ohne eine Zeile Code**! 🎉\r
\r
Als Nächstes:\r
- **Styles anpassen:** Lerne, wie du Vektorlayer mit style.json stylst\r
- **Tool-Entwicklung:** Programmiere eigene Werkzeuge (z.B. Entfernungsmessung zwischen Features)\r
- **Advanced Config:** Nutze komplexere Portal-Features (Filter, Drucken, Export)\r
\r
## Weiterführende Ressourcen\r
\r
- Config.json-Schema: https://www.masterportal.org/dokumentation/dokumentation\r
- Beispiel-Portale: \`masterportal/portal/basic/\`, \`masterportal/portal/master/\`\r
- Community: https://bitbucket.org/geowerkstatt-hamburg/masterportal/issues\r
`,_M=`# Tool-Entwicklung im Masterportal\r
\r
## Einführung\r
\r
Nachdem du gelernt hast, ein Portal durch Config-Bearbeitung zu erstellen, ist der nächste Schritt die **echte Programmierung**: die Entwicklung eigener Tools.\r
\r
Tools sind interaktive Komponenten, die Nutzern erweiterte Funktionalität bieten - z.B. Messungen, Analysen, Datenexporte oder eigene Visualisierungen.\r
\r
## Was ist ein Tool?\r
\r
Ein Tool im Masterportal ist ein eigenständiges Modul, das:\r
\r
- Eine **UI-Komponente** bereitstellt (z.B. ein Fenster mit Buttons und Eingabefeldern)\r
- Mit der **Karte interagiert** (Layer hinzufügen, Features selektieren, Geometrien zeichnen)\r
- **Geodaten verarbeitet** (z.B. Distanzen berechnen, Features filtern)\r
- **Events** behandelt (Klicks auf der Karte, User-Input)\r
\r
**Beispiele für Tools:**\r
- Koordinatentool\r
- Zeichenwerkzeug\r
- Routenplaner\r
- Feature-Info-Abfrage\r
- Export-Tool (PDF, CSV)\r
- Messtool für Abstände zwischen Features ← Dein Capstone-Projekt!\r
\r
## Technologie-Stack\r
\r
**Masterportal Version 3 basiert auf:**\r
\r
- **Vue 3**: Modernes JavaScript-Framework mit Composition API und Options API\r
- **Vuex 4**: State Management\r
- **OpenLayers**: Karten-Bibliothek\r
- **Webpack**: Build-System\r
- **Bootstrap 5**: UI-Components\r
- **ES6+ JavaScript**: Moderne JavaScript-Syntax\r
\r
> ⚠️ **Wichtig**: Version 3 ist eine komplette Neuentwicklung und nutzt **ausschließlich Vue 3 + Vuex 4**. Falls du irgendwo Backbone.js-Code siehst, stammt dieser aus Version 2 und ist nicht mehr relevant!\r
\r
## Ordnerstruktur für Tools\r
\r
Tools liegen im Ordner:\r
\r
\`\`\`\r
masterportal/src/modules/tools/\r
├── coordToolkit/         # Koordinatenwerkzeug\r
├── draw/                 # Zeichenwerkzeug\r
├── measure/              # Messwerkzeug\r
├── routing/              # Routing-Tool\r
└── meinTool/            # Dein neues Tool\r
    ├── components/       # Vue-Komponenten\r
    │   └── MeinTool.vue  # Haupt-Komponente\r
    ├── store/           # Vuex Store\r
    │   ├── actions.js\r
    │   ├── getters.js\r
    │   ├── mutations.js\r
    │   └── state.js\r
    ├── tests/           # Unit-Tests\r
    └── doc/             # Dokumentation\r
\`\`\`\r
\r
## Anatomie eines Tools (Vue 3)\r
\r
### 1. Vue-Komponente (\`MeinTool.vue\`)\r
\r
\`\`\`vue\r
<script>\r
import {mapGetters, mapActions, mapMutations} from "vuex";\r
import getters from "../store/getters";\r
import mutations from "../store/mutations";\r
\r
export default {\r
    name: "MeinTool",\r
    computed: {\r
        ...mapGetters("Tools/MeinTool", Object.keys(getters)),\r
    },\r
    methods: {\r
        ...mapActions("Tools/MeinTool", ["someAction"]),\r
        ...mapMutations("Tools/MeinTool", Object.keys(mutations)),\r
        \r
        onCalculateDistance() {\r
            // Distanz berechnen\r
            this.calculateDistance();\r
        }\r
    }\r
};\r
<\/script>\r
\r
<template>\r
    <div id="mein-tool">\r
        <div class="tool-header">\r
            <h4>{{ $t("additional:modules.tools.meinTool.title") }}</h4>\r
        </div>\r
        \r
        <div class="tool-body">\r
            <p>{{ $t("additional:modules.tools.meinTool.description") }}</p>\r
            \r
            <div class="selection-info">\r
                <strong>Ausgewählte Features:</strong>\r
                <span>{{ selectedFeatures.length }}</span>\r
            </div>\r
            \r
            <button \r
                v-if="selectedFeatures.length >= 2"\r
                class="btn btn-primary"\r
                @click="onCalculateDistance"\r
            >\r
                {{ $t("additional:modules.tools.meinTool.calculate") }}\r
            </button>\r
            \r
            <div v-if="distance !== null" class="result">\r
                <strong>Distanz:</strong> {{ distance.toFixed(2) }} m\r
            </div>\r
        </div>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
#mein-tool {\r
    .tool-header {\r
        padding: 15px;\r
        border-bottom: 1px solid #e0e0e0;\r
    }\r
    \r
    .tool-body {\r
        padding: 15px;\r
    }\r
    \r
    .result {\r
        margin: 15px 0;\r
        padding: 15px;\r
        background: #e8f5e9;\r
        border-left: 4px solid #4caf50;\r
    }\r
}\r
</style>\r
\`\`\`\r
\r
### 2. Vuex Store (\`store/state.js\`)\r
\r
\`\`\`javascript\r
const state = {\r
    active: false,\r
    id: "meinTool",\r
    name: "Mein Tool",\r
    icon: "bi-rulers",\r
    renderToWindow: true,\r
    resizableWindow: true,\r
    isVisibleInMenu: true,\r
    deactivateGFI: true,\r
    \r
    // Tool-spezifische Properties\r
    selectedFeatures: [],\r
    distance: null\r
};\r
\r
export default state;\r
\`\`\`\r
\r
### 3. Vuex Mutations (\`store/mutations.js\`)\r
\r
\`\`\`javascript\r
export default {\r
    setActive(state, value) {\r
        state.active = value;\r
    },\r
    setSelectedFeatures(state, features) {\r
        state.selectedFeatures = features;\r
    },\r
    setDistance(state, distance) {\r
        state.distance = distance;\r
    },\r
    addFeature(state, feature) {\r
        if (state.selectedFeatures.length < 2) {\r
            state.selectedFeatures.push(feature);\r
        }\r
    },\r
    clearSelection(state) {\r
        state.selectedFeatures = [];\r
        state.distance = null;\r
    }\r
};\r
\`\`\`\r
\r
### 4. Vuex Actions (\`store/actions.js\`)\r
\r
\`\`\`javascript\r
import {getDistance} from "ol/sphere";\r
\r
export default {\r
    calculateDistance({state, commit}) {\r
        if (state.selectedFeatures.length !== 2) {\r
            return;\r
        }\r
        \r
        const coord1 = state.selectedFeatures[0].getGeometry().getCoordinates();\r
        const coord2 = state.selectedFeatures[1].getGeometry().getCoordinates();\r
        \r
        const distance = getDistance(coord1, coord2);\r
        commit("setDistance", distance);\r
    },\r
    \r
    registerMapClickListener({dispatch}) {\r
        // Map-Click-Events registrieren\r
        // Details siehe Masterportal-Doku\r
    }\r
};\r
\`\`\`\r
\r
### 5. Vuex Getters (\`store/getters.js\`)\r
\r
\`\`\`javascript\r
export default {\r
    active: (state) => state.active,\r
    selectedFeatures: (state) => state.selectedFeatures,\r
    distance: (state) => state.distance,\r
    canCalculate: (state) => state.selectedFeatures.length === 2\r
};\r
\`\`\`\r
\r
## Tool registrieren\r
\r
### 1. Tool-Ordner unter \`src/modules/tools/\` erstellen\r
\r
### 2. In \`src/modules/tools/index.js\` registrieren:\r
\r
\`\`\`javascript\r
import MeinToolComponent from "./meinTool/components/MeinTool.vue";\r
import MeinToolStore from "./meinTool/store/index";\r
\r
export default {\r
    // ... andere Tools\r
    MeinTool: {\r
        component: MeinToolComponent,\r
        store: MeinToolStore\r
    }\r
};\r
\`\`\`\r
\r
### 3. In \`config.json\` aktivieren:\r
\r
\`\`\`json\r
{\r
  "portalConfig": {\r
    "menu": {\r
      "tools": {\r
        "children": {\r
          "meinTool": {\r
            "name": "translate#additional:modules.tools.meinTool.title",\r
            "icon": "bi-rulers"\r
          }\r
        }\r
      }\r
    }\r
  }\r
}\r
\`\`\`\r
\r
### 4. Übersetzungen hinzufügen (\`locales/de/additional.json\`):\r
\r
\`\`\`json\r
{\r
  "modules": {\r
    "tools": {\r
      "meinTool": {\r
        "title": "Mein Tool",\r
        "description": "Klicke auf zwei Features, um die Distanz zu berechnen.",\r
        "calculate": "Distanz berechnen"\r
      }\r
    }\r
  }\r
}\r
\`\`\`\r
\r
## Mit OpenLayers arbeiten\r
\r
### Features von WFS-Layer holen\r
\r
\`\`\`javascript\r
// In einer Vuex Action\r
getWfsFeatures({rootGetters}) {\r
    const layerId = "wfs_schulen";\r
    // Zugriff über Vuex Store auf Map-Layer\r
    const layer = rootGetters["Maps/getLayerById"](layerId);\r
    \r
    if (layer && layer.getSource) {\r
        const features = layer.getSource().getFeatures();\r
        return features;\r
    }\r
    return [];\r
}\r
\`\`\`\r
\r
### Geometrie-Operationen\r
\r
\`\`\`javascript\r
import {getDistance, getLength, getArea} from "ol/sphere";\r
\r
// Distanz zwischen zwei Punkten\r
const distance = getDistance(coord1, coord2);\r
\r
// Länge einer LineString\r
const length = getLength(lineStringGeometry);\r
\r
// Fläche eines Polygons\r
const area = getArea(polygonGeometry);\r
\`\`\`\r
\r
### Vector-Layer für Visualisierung\r
\r
\`\`\`javascript\r
import VectorLayer from "ol/layer/Vector";\r
import VectorSource from "ol/source/Vector";\r
import {Style, Stroke, Fill} from "ol/style";\r
import Feature from "ol/Feature";\r
import LineString from "ol/geom/LineString";\r
\r
// In einer Vuex Action\r
addVisualizationLayer({rootGetters}) {\r
    const map = rootGetters["Maps/getMap"]("2D");\r
    \r
    // Vector-Layer erstellen\r
    const vectorLayer = new VectorLayer({\r
        id: "meinTool_visualization",\r
        source: new VectorSource(),\r
        style: new Style({\r
            stroke: new Stroke({\r
                color: "red",\r
                width: 3\r
            })\r
        }),\r
        alwaysOnTop: true\r
    });\r
    \r
    // Zur Karte hinzufügen\r
    map.addLayer(vectorLayer);\r
    \r
    // Linie zeichnen\r
    const lineFeature = new Feature({\r
        geometry: new LineString([coord1, coord2])\r
    });\r
    \r
    vectorLayer.getSource().addFeature(lineFeature);\r
}\r
\`\`\`\r
\r
## Debugging-Tipps\r
\r
### 1. Vue DevTools\r
\r
Browser-Extension installieren:\r
- Chrome: "Vue.js devtools"\r
- Firefox: "Vue.js devtools"\r
\r
**Features:**\r
- Vuex State inspizieren\r
- Component-Tree anzeigen\r
- Events tracken\r
- Performance-Analyse\r
\r
### 2. Console-Logs\r
\r
\`\`\`javascript\r
console.log("Tool activated:", this.active);\r
console.log("Selected features:", this.selectedFeatures);\r
console.log("Distance calculated:", this.distance);\r
\`\`\`\r
\r
### 3. Vuex Logger\r
\r
In \`store/index.js\`:\r
\r
\`\`\`javascript\r
import {createLogger} from "vuex";\r
\r
const debug = process.env.NODE_ENV !== "production";\r
\r
export default {\r
    // ... store config\r
    plugins: debug ? [createLogger()] : []\r
};\r
\`\`\`\r
\r
## Testing\r
\r
Tests mit Mocha + Chai:\r
\r
\`\`\`javascript\r
// tests/unit/store/actions.spec.js\r
import {expect} from "chai";\r
import actions from "../../../store/actions";\r
\r
describe("tools/meinTool/actions", () => {\r
    let commit, state;\r
    \r
    beforeEach(() => {\r
        commit = sinon.spy();\r
        state = {\r
            selectedFeatures: []\r
        };\r
    });\r
    \r
    it("should calculate distance correctly", () => {\r
        const feature1 = createMockFeature([0, 0]);\r
        const feature2 = createMockFeature([100, 0]);\r
        \r
        state.selectedFeatures = [feature1, feature2];\r
        \r
        actions.calculateDistance({state, commit});\r
        \r
        expect(commit.calledWith("setDistance")).to.be.true;\r
        expect(commit.args[0][1]).to.be.closeTo(100, 0.01);\r
    });\r
});\r
\`\`\`\r
\r
## Best Practices\r
\r
✅ **Composition API nutzen** (wenn möglich, für neue Tools)\r
\r
✅ **Vuex State zentral verwalten** - UI-Logik von Business-Logik trennen\r
\r
✅ **i18n für Texte** - Alle User-Texte übersetzbar machen\r
\r
✅ **Cleanup beim Deaktivieren** - Layer und Listener entfernen\r
\r
✅ **Bootstrap-Components nutzen** - Konsistentes UI\r
\r
✅ **Accessibility beachten** - ARIA-Labels, Keyboard-Navigation\r
\r
## Migration von v2 zu v3\r
\r
Falls du alte Backbone-basierte Tools siehst:\r
\r
**Backbone (v2)** → **Vue 3 (v3)**\r
- \`Model.extend()\` → Vuex Store\r
- \`View.extend()\` → Vue-Komponente\r
- \`this.get("prop")\` → \`this.prop\` (computed)\r
- \`this.set("prop", value)\` → \`this.setProp(value)\` (mutation)\r
- \`this.listenTo()\` → \`watch()\` oder computed properties\r
\r
## Nächste Schritte\r
\r
Du bist jetzt bereit für dein **Capstone-Projekt**! 🚀\r
\r
Die Aufgabe:\r
> Baue ein **Messtool für Abstände zwischen WFS-Features** mit Vue 3 und Vuex\r
\r
Nutze das Gelernte:\r
- Vue 3 Komponente mit Template\r
- Vuex Store für State Management\r
- OpenLayers für Geometrie-Operationen\r
- i18n für Übersetzungen\r
\r
## Ressourcen\r
\r
- **Masterportal v3 Doku:** https://www.masterportal.org/dokumentation\r
- **Vue 3 Docs:** https://vuejs.org/\r
- **Vuex 4 Docs:** https://vuex.vuejs.org/\r
- **OpenLayers API:** https://openlayers.org/en/latest/apidoc/\r
- **Beispiel-Tools:** \`src/modules/tools/\` im Repository\r
\r
**Wichtig:** Schaue dir **existierende v3-Tools** im Repository an als Referenz! Diese Tools (wie \`draw\`, \`measure\`, \`coordToolkit\`) sind vollständig in Vue 3 + Vuex 4 geschrieben und bieten best-practice Beispiele.\r
\r
## Zusammenfassung\r
\r
Du hast gelernt:\r
\r
✅ **Tool-Struktur**: Wie ein Vue 3 Tool mit Komponente + Vuex Store aufgebaut ist  \r
✅ **Tool-Registrierung**: Wie Tools im Masterportal registriert werden  \r
✅ **OpenLayers Integration**: Wie du mit der Karte interagierst  \r
✅ **State Management**: Wie Vuex 4 für zentrale Datenhaltung genutzt wird  \r
✅ **Debugging**: Wie du Tools mit Vue DevTools debuggst  \r
✅ **Testing**: Wie Unit-Tests für Tools geschrieben werden\r
\r
## Dein Capstone-Projekt\r
\r
**Aufgabe**: Baue ein **Messtool für Abstände zwischen WFS-Features**\r
\r
**Anforderungen:**\r
- Nutzer kann zwei Features auf der Karte anklicken\r
- Die Distanz zwischen den Features wird berechnet und angezeigt\r
- Eine Linie zwischen den Features wird visualisiert\r
- Das Tool hat ein aufgeräumtes UI mit Bootstrap 5\r
- Alle Texte sind mehrsprachig (i18n)\r
- Unit-Tests existieren für die wichtigsten Funktionen\r
\r
**Viel Erfolg!** 🚀\r
`,yM=`# Capstone-Projekt: MeasureTool-Plugin\r
\r
## 🎯 Projektziel\r
\r
Entwickle ein vollständiges, produktionsreifes POLAR-Plugin, das Distanzen und Flächen auf der Karte misst. Das Plugin demonstriert alle erlernten Fähigkeiten aus den 5 Wochen: Plugin-Anatomie, OpenLayers-Integration, Testing und Release-Workflow.\r
\r
## 📋 Anforderungen\r
\r
### Funktionale Anforderungen\r
\r
1. **Messmodi**\r
   - Distanz-Messung (LineString)\r
   - Flächen-Messung (Polygon)\r
   - Umschaltung zwischen Modi via Toggle-Buttons\r
\r
2. **User-Interface**\r
   - Vuetify-Card mit Tool-Buttons\r
   - Anzeige der aktuellen Messung (Distanz in km, Fläche in km²)\r
   - "Messung löschen"-Button\r
   - "Messung beenden"-Button\r
\r
3. **Karten-Interaktion**\r
   - OpenLayers Draw-Interaction\r
   - Geometrien werden auf der Karte gezeichnet\r
   - Tooltips zeigen Zwischenergebnisse beim Zeichnen\r
   - Features bleiben nach Beendigung sichtbar\r
\r
4. **Berechnungen**\r
   - Geodätische Distanzberechnung (Haversine-Formel)\r
   - Flächen-Berechnung (Geodätisch korrekt)\r
   - Einheiten: Meter/Kilometer für Distanz, m²/km² für Flächen\r
\r
### Technische Anforderungen\r
\r
1. **Plugin-Struktur**\r
   - Factory-Pattern mit Options (initialMode, position)\r
   - Vuex-Store-Module (State, Getters, Actions, Mutations)\r
   - Vue-Component mit Vuetify\r
   - TypeScript mit strikten Types\r
\r
2. **Code-Qualität**\r
   - ESLint ohne Fehler\r
   - TypeScript Type-Check ohne Fehler\r
   - Unit-Tests mit ≥80% Coverage\r
   - E2E-Test mit Playwright\r
\r
3. **Dokumentation**\r
   - README.md mit Installation, Usage, API\r
   - CHANGELOG.md (v1.0.0)\r
   - Inline-Code-Kommentare für komplexe Logik\r
\r
## 🏗️ Meilensteine\r
\r
### Milestone 1: Projekt-Boilerplate ✅\r
\r
**Aufgaben**:\r
- Erstelle Ordnerstruktur: \`packages/plugins/MeasureTool/\`\r
- \`package.json\` mit Dependencies (@polar/core, openlayers, vue, vuetify)\r
- \`types.ts\` mit Interfaces (MeasureToolOptions, MeasureMode, MeasureResult)\r
- \`index.ts\` mit leerer Factory und Store-Skeleton\r
\r
**Acceptance Criteria**:\r
- ✅ Ordner existiert mit korrekter Struktur\r
- ✅ \`npm install\` läuft ohne Fehler\r
- ✅ TypeScript kompiliert (noch keine Funktionalität)\r
\r
---\r
\r
### Milestone 2: Vuex-Store implementieren ✅\r
\r
**Aufgaben**:\r
- **State**:\r
  \`\`\`typescript\r
  {\r
    mode: 'distance' | 'area' | null,\r
    isActive: boolean,\r
    currentMeasurement: number | null,\r
    features: Feature[],\r
    drawInteraction: Draw | null\r
  }\r
  \`\`\`\r
\r
- **Getters**:\r
  - \`getMode\`, \`isActive\`, \`getCurrentMeasurement\`, \`getFeatures\`\r
\r
- **Mutations**:\r
  - \`SET_MODE\`, \`SET_ACTIVE\`, \`SET_MEASUREMENT\`, \`ADD_FEATURE\`, \`CLEAR_FEATURES\`, \`SET_DRAW_INTERACTION\`\r
\r
- **Actions**:\r
  - \`startMeasurement({ mode })\`: Startet Messung mit Draw-Interaction\r
  - \`stopMeasurement()\`: Beendet Messung, entfernt Interaction\r
  - \`clearMeasurements()\`: Löscht alle Features von der Karte\r
  - \`calculateMeasurement({ feature })\`: Berechnet Distanz/Fläche\r
\r
**Acceptance Criteria**:\r
- ✅ Store-Module ist vollständig definiert\r
- ✅ Actions haben korrekten Typ (async)\r
- ✅ Keine TypeScript-Fehler\r
\r
---\r
\r
### Milestone 3: Vue-Component mit UI ✅\r
\r
**Aufgaben**:\r
- \`components/MeasureToolComponent.vue\` erstellen\r
- UI-Elemente:\r
  - Toggle-Buttons für Modi (v-btn-toggle)\r
  - Aktuelle Messung-Anzeige (v-card-text)\r
  - Action-Buttons (Löschen, Beenden)\r
- Vuex-Anbindung via \`computed\` und \`methods\`\r
- Styling mit Vuetify-Theme\r
\r
**Beispiel-Template**:\r
\`\`\`vue\r
<template>\r
  <v-card class="measure-tool" elevation="2">\r
    <v-card-title>\r
      <v-icon left>mdi-ruler</v-icon>\r
      Messwerkzeug\r
    </v-card-title>\r
    \r
    <v-card-text>\r
      <v-btn-toggle v-model="selectedMode" mandatory>\r
        <v-btn value="distance">\r
          <v-icon>mdi-ruler</v-icon>\r
          Distanz\r
        </v-btn>\r
        <v-btn value="area">\r
          <v-icon>mdi-vector-square</v-icon>\r
          Fläche\r
        </v-btn>\r
      </v-btn-toggle>\r
      \r
      <div v-if="currentMeasurement" class="mt-3">\r
        <strong>Messung:</strong>\r
        {{ formattedMeasurement }}\r
      </div>\r
    </v-card-text>\r
    \r
    <v-card-actions>\r
      <v-btn @click="handleClear" color="error" small>\r
        Löschen\r
      </v-btn>\r
      <v-btn @click="handleStop" color="primary" small>\r
        Beenden\r
      </v-btn>\r
    </v-card-actions>\r
  </v-card>\r
</template>\r
\`\`\`\r
\r
**Acceptance Criteria**:\r
- ✅ Component rendert in Snowbox\r
- ✅ Buttons sind klickbar (noch ohne Funktionalität)\r
- ✅ Vuetify-Styling ist konsistent\r
\r
---\r
\r
### Milestone 4: OpenLayers-Integration ✅\r
\r
**Aufgaben**:\r
- Implementiere \`startMeasurement\`-Action:\r
  - Erstelle VectorSource und VectorLayer für Measurements\r
  - Füge Draw-Interaction hinzu (type: 'LineString' oder 'Polygon')\r
  - Event-Listener: \`drawend\` → \`calculateMeasurement\`\r
\r
- Implementiere \`calculateMeasurement\`-Action:\r
  - Nutze \`getLength()\` (ol/sphere) für Distanzen\r
  - Nutze \`getArea()\` (ol/sphere) für Flächen\r
  - Formatiere Ergebnis (m → km bei > 1000m)\r
\r
- Implementiere \`clearMeasurements\`-Action:\r
  - Entferne alle Features von VectorSource\r
  - Reset State\r
\r
**Beispiel-Code**:\r
\`\`\`typescript\r
import { Draw } from 'ol/interaction'\r
import { Vector as VectorSource } from 'ol/source'\r
import { Vector as VectorLayer } from 'ol/layer'\r
import { getLength, getArea } from 'ol/sphere'\r
\r
actions: {\r
  startMeasurement({ commit, rootGetters }, { mode }) {\r
    const map = rootGetters['map/getMap']\r
    \r
    // Vector-Layer für Messungen (falls noch nicht vorhanden)\r
    let measureLayer = map.getLayers().getArray().find(l => l.get('name') === 'measure')\r
    if (!measureLayer) {\r
      const source = new VectorSource()\r
      measureLayer = new VectorLayer({ source, properties: { name: 'measure' } })\r
      map.addLayer(measureLayer)\r
    }\r
    \r
    // Draw-Interaction\r
    const drawInteraction = new Draw({\r
      source: measureLayer.getSource(),\r
      type: mode === 'distance' ? 'LineString' : 'Polygon'\r
    })\r
    \r
    drawInteraction.on('drawend', (event) => {\r
      this.dispatch('plugins/measureTool/calculateMeasurement', { feature: event.feature })\r
    })\r
    \r
    map.addInteraction(drawInteraction)\r
    commit('SET_DRAW_INTERACTION', drawInteraction)\r
    commit('SET_ACTIVE', true)\r
  },\r
  \r
  calculateMeasurement({ commit, state }, { feature }) {\r
    const geometry = feature.getGeometry()\r
    let measurement = 0\r
    \r
    if (state.mode === 'distance') {\r
      measurement = getLength(geometry, { projection: 'EPSG:3857' })\r
    } else {\r
      measurement = getArea(geometry, { projection: 'EPSG:3857' })\r
    }\r
    \r
    commit('SET_MEASUREMENT', measurement)\r
  }\r
}\r
\`\`\`\r
\r
**Acceptance Criteria**:\r
- ✅ Zeichnen auf Karte funktioniert\r
- ✅ Messung wird berechnet und angezeigt\r
- ✅ Löschen entfernt Features von Karte\r
- ✅ Modi-Wechsel funktioniert\r
\r
---\r
\r
### Milestone 5: NineLayoutTag & Integration ✅\r
\r
**Aufgaben**:\r
- Konfiguriere \`nineLayoutTag: 'top-right'\` in Factory\r
- Registriere Plugin in \`packages/clients/generic/src/addPlugins.ts\`:\r
  \`\`\`typescript\r
  import { MeasureTool } from '@polar/measure-tool'\r
  \r
  export const plugins = [\r
    // ...\r
    MeasureTool({ position: 'top-right' })\r
  ]\r
  \`\`\`\r
- Teste in Snowbox\r
\r
**Acceptance Criteria**:\r
- ✅ Plugin erscheint an korrekter Position in Snowbox\r
- ✅ Keine Überlappung mit anderen Plugins\r
- ✅ Responsive Verhalten auf Mobile\r
\r
---\r
\r
### Milestone 6: Unit-Tests (≥80% Coverage) ✅\r
\r
**Aufgaben**:\r
- Erstelle \`__tests__/measureTool.spec.ts\`\r
- **Store-Tests** (mindestens 12 Tests):\r
  - Mutations: SET_MODE, SET_ACTIVE, SET_MEASUREMENT, ADD_FEATURE, CLEAR_FEATURES\r
  - Actions: startMeasurement, stopMeasurement, clearMeasurements, calculateMeasurement\r
  - Getters: Alle Getters testen\r
\r
- **Component-Tests** (mindestens 6 Tests):\r
  - Rendering mit verschiedenen States\r
  - Button-Clicks triggern Actions\r
  - Conditional Rendering (z.B. Messung nur anzeigen wenn vorhanden)\r
  - Mode-Wechsel\r
\r
- **Utility-Tests** (falls separate Utility-Funktionen):\r
  - Formatierung (z.B. \`formatDistance(1234)\` → "1.23 km")\r
\r
**Beispiel-Test**:\r
\`\`\`typescript\r
describe('MeasureTool Store', () => {\r
  it('startMeasurement adds draw interaction to map', async () => {\r
    const mockMap = {\r
      addInteraction: jest.fn(),\r
      addLayer: jest.fn(),\r
      getLayers: () => ({ getArray: () => [] })\r
    }\r
    \r
    const store = createStore({\r
      modules: {\r
        map: { getters: { getMap: () => mockMap } },\r
        plugins: { modules: { measureTool: measureToolStore } }\r
      }\r
    })\r
    \r
    await store.dispatch('plugins/measureTool/startMeasurement', { mode: 'distance' })\r
    \r
    expect(mockMap.addInteraction).toHaveBeenCalled()\r
    expect(store.state.plugins.measureTool.isActive).toBe(true)\r
  })\r
})\r
\`\`\`\r
\r
**Acceptance Criteria**:\r
- ✅ \`npm test MeasureTool\` läuft ohne Fehler\r
- ✅ Coverage ≥ 80% für alle Metriken (Statements, Branches, Functions, Lines)\r
- ✅ Tests sind aussagekräftig (keine "smoke tests")\r
\r
---\r
\r
### Milestone 7: E2E-Test mit Playwright ✅\r
\r
**Aufgaben**:\r
- Erstelle \`e2e/measureTool.spec.ts\`\r
- **Test-Szenarien**:\r
  1. Plugin ist sichtbar in Snowbox\r
  2. Distanz-Messung: Klicke Punkte auf Karte → Messung wird angezeigt\r
  3. Flächen-Messung: Zeichne Polygon → Fläche wird berechnet\r
  4. Löschen-Button entfernt Messungen\r
  5. Modi-Wechsel funktioniert\r
\r
**Beispiel-Test**:\r
\`\`\`typescript\r
test('measures distance on map', async ({ page }) => {\r
  await page.goto('http://localhost:5173')\r
  \r
  // Warte auf MeasureTool-Plugin\r
  await expect(page.locator('.measure-tool')).toBeVisible()\r
  \r
  // Wähle Distanz-Modus (sollte bereits aktiv sein)\r
  await page.click('button[value="distance"]')\r
  \r
  // Klicke zwei Punkte auf Karte (koordinaten relativ zu Map-Element)\r
  const mapElement = page.locator('#map')\r
  const box = await mapElement.boundingBox()\r
  \r
  await page.mouse.click(box.x + 100, box.y + 100) // Startpunkt\r
  await page.mouse.dblclick(box.x + 300, box.y + 100) // Endpunkt (dblclick beendet Zeichnen)\r
  \r
  // Warte auf Messung\r
  await page.waitForTimeout(500)\r
  \r
  // Messung sollte angezeigt werden (>0)\r
  const measurementText = await page.locator('.measure-tool .v-card-text').textContent()\r
  expect(measurementText).toContain('km') // oder 'm' je nach Distanz\r
})\r
\`\`\`\r
\r
**Acceptance Criteria**:\r
- ✅ E2E-Tests passieren: \`npm run test:e2e measureTool\`\r
- ✅ Tests laufen in Chrome, Firefox, Safari\r
- ✅ Tests sind stabil (keine Flakiness)\r
\r
---\r
\r
### Milestone 8: README & Release ✅\r
\r
**Aufgaben**:\r
- **README.md** erstellen:\r
  \`\`\`markdown\r
  # @polar/measure-tool\r
  \r
  A POLAR plugin for measuring distances and areas on the map.\r
  \r
  ## Installation\r
  \\\`\\\`\\\`bash\r
  npm install @polar/measure-tool\r
  \\\`\\\`\\\`\r
  \r
  ## Usage\r
  \\\`\\\`\\\`typescript\r
  import { MeasureTool } from '@polar/measure-tool'\r
  \r
  const plugins = [\r
    MeasureTool({\r
      position: 'top-right',\r
      initialMode: 'distance'\r
    })\r
  ]\r
  \\\`\\\`\\\`\r
  \r
  ## API\r
  \r
  ### Options\r
  - \`position\`: NineLayoutTag position (default: 'top-right')\r
  - \`initialMode\`: 'distance' | 'area' (default: 'distance')\r
  \r
  ### Store Actions\r
  - \`startMeasurement({ mode })\`: Start measurement\r
  - \`stopMeasurement()\`: Stop measurement\r
  - \`clearMeasurements()\`: Remove all measurements\r
  \r
  ## License\r
  MIT\r
  \`\`\`\r
\r
- **CHANGELOG.md** erstellen:\r
  \`\`\`markdown\r
  # Changelog - @polar/measure-tool\r
  \r
  ## [1.0.0] - 2024-02-13\r
  \r
  ### Added\r
  - Initial release\r
  - Distance measurement (geodetic, LineString)\r
  - Area measurement (geodetic, Polygon)\r
  - Vuetify UI with mode toggle\r
  - OpenLayers Draw integration\r
  - Unit tests (85% coverage)\r
  - E2E tests with Playwright\r
  \`\`\`\r
\r
- **package.json** finalisieren:\r
  \`\`\`json\r
  {\r
    "name": "@polar/measure-tool",\r
    "version": "1.0.0",\r
    "description": "Measure distances and areas on POLAR maps",\r
    "main": "dist/index.js",\r
    "types": "dist/index.d.ts",\r
    "files": ["dist"],\r
    "publishConfig": {\r
      "access": "public"\r
    },\r
    "peerDependencies": {\r
      "@polar/core": "^2.0.0",\r
      "vue": "^3.3.0",\r
      "vuetify": "^3.0.0"\r
    }\r
  }\r
  \`\`\`\r
\r
**Acceptance Criteria**:\r
- ✅ README ist vollständig und verständlich\r
- ✅ CHANGELOG folgt Keep a Changelog Format\r
- ✅ package.json ist korrekt konfiguriert\r
- ✅ Dry-Run: \`npm publish --dry-run\` erfolgreich\r
\r
---\r
\r
## 📊 Demo-Checkliste\r
\r
Vor der finalen Präsentation stelle sicher:\r
\r
### Funktionalität\r
- [ ] Snowbox startet ohne Fehler: \`npm run snowbox\`\r
- [ ] MeasureTool-Plugin ist sichtbar und korrekt positioniert\r
- [ ] Distanz-Messung funktioniert (mehrere Punkte klicken)\r
- [ ] Flächen-Messung funktioniert (Polygon zeichnen)\r
- [ ] Messergebnisse sind korrekt und formatiert (km, km²)\r
- [ ] Löschen-Button entfernt alle Messungen von Karte\r
- [ ] Beenden-Button stoppt aktuelle Messung\r
- [ ] Modi-Wechsel funktioniert ohne Reload\r
\r
### Code-Qualität\r
- [ ] ESLint: \`npm run lint\` → keine Fehler\r
- [ ] TypeScript: \`npm run type-check\` → keine Fehler\r
- [ ] Unit-Tests: \`npm test MeasureTool\` → alle grün, Coverage ≥80%\r
- [ ] E2E-Tests: \`npm run test:e2e measureTool\` → alle grün\r
- [ ] Build: \`npm run build --scope=@polar/measure-tool\` → dist/ korrekt\r
\r
### Dokumentation\r
- [ ] README.md mit klaren Anweisungen\r
- [ ] CHANGELOG.md mit v1.0.0-Eintrag\r
- [ ] Inline-Code-Kommentare für komplexe Logik\r
- [ ] TypeScript-Interfaces sind dokumentiert (JSDoc)\r
\r
### Code-Review-Readiness\r
- [ ] Sinnvolle Commit-Messages (Conventional Commits)\r
- [ ] Branch-Name: \`feature/measure-tool-plugin\`\r
- [ ] PR-Beschreibung vorbereitet (Motivation, Changes, Screenshots)\r
- [ ] Keine Debug-Console-Logs im Production-Code\r
- [ ] Keine TODO-Kommentare ohne Tickets\r
\r
---\r
\r
## 🎓 Bewertungskriterien\r
\r
| Kriterium | Gewichtung | Beschreibung |\r
|-----------|------------|--------------|\r
| **Funktionalität** | 25% | Feature funktioniert wie spezifiziert, keine Bugs |\r
| **Code-Qualität** | 25% | Sauberer Code, TypeScript-Types, ESLint-Compliance |\r
| **Tests** | 20% | Unit-Tests + E2E-Tests, Coverage ≥80% |\r
| **Architektur** | 15% | Plugin folgt POLAR-Patterns (Factory, Store, 9Layout) |\r
| **Dokumentation** | 10% | README, CHANGELOG, Code-Kommentare |\r
| **Git/Workflow** | 5% | Sinnvolle Commits, Branch-Management |\r
\r
**Passing Grade**: ≥70% Gesamtpunktzahl\r
\r
---\r
\r
## 💡 Hilfreiche Ressourcen\r
\r
- **OpenLayers Docs**: https://openlayers.org/en/latest/apidoc/\r
  - Draw Interaction: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html\r
  - Sphere Module (Distanz/Fläche): https://openlayers.org/en/latest/apidoc/module-ol_sphere.html\r
\r
- **Vuetify Components**: https://vuetifyjs.com/en/components/\r
  - Buttons: https://vuetifyjs.com/en/components/buttons/\r
  - Cards: https://vuetifyjs.com/en/components/cards/\r
\r
- **Playwright Docs**: https://playwright.dev/docs/intro\r
  - Mouse Actions: https://playwright.dev/docs/api/class-mouse\r
\r
- **POLAR-Referenz-Plugins**:\r
  - Zoom-Plugin (einfach): \`packages/plugins/Zoom/\`\r
  - LayerChooser-Plugin (komplex): \`packages/plugins/LayerChooser/\`\r
\r
---\r
\r
**Viel Erfolg! 🚀** Bei Fragen wende dich an deinen Mentor oder nutze die POLAR-Community (Slack, GitHub Discussions).\r
`,vM=`# POLAR Curriculum – Evidenz-Mapping\r
\r
## Übersicht\r
\r
Dieses Dokument zeigt die Ableitung aller Curriculum-Inhalte aus konkreten Files im POLAR-Repository. Jedes Lernmodul, jede Aufgabe und jedes Konzept ist mit realen Code-Beispielen und Dokumenten verknüpft.\r
\r
**Ziel**: Sicherstellen, dass das Curriculum auf der tatsächlichen POLAR-Architektur basiert und nicht theoretisch ist.\r
\r
---\r
\r
## Mapping-Tabelle\r
\r
| Curriculum-Element | Woche | POLAR-Repository-Files | Konzepte abgeleitet von |\r
|-------------------|-------|------------------------|------------------------|\r
| **"POLAR in 15 Minuten"** | Quick Start | \`README.md\` (Root)<br>\`nx.json\`<br>\`packages/core/docs/gettingStarted.md\` | Repository-Struktur, Setup-Kommandos, Monorepo-Konfiguration |\r
| **Monorepo-Architektur** | Woche 1 | \`nx.json\`<br>\`package.json\` (Root)<br>\`packages/*/package.json\` | Nx-Workspaces, Shared Dependencies, Build-Targets |\r
| **Plugin Factory Pattern** | Woche 1 & 2 | \`packages/plugins/Zoom/index.ts\`<br>\`packages/plugins/LayerChooser/index.ts\` | Factory-Funktion, Plugin-Options-Interface |\r
| **Core Map-Initialisierung** | Woche 1 | \`packages/core/src/createMap.ts\` | OpenLayers-Map-Setup, Plugin-Lifecycle-Hooks |\r
| **Vuex-Store-Module** | Woche 2 | \`packages/plugins/Zoom/index.ts\` (storeModule)<br>\`packages/core/src/types/store.ts\` | Namespaced Modules, State/Getters/Actions/Mutations |\r
| **Vue-Components mit Vuetify** | Woche 2 | \`packages/plugins/Zoom/components/ZoomComponent.vue\` | v-btn, v-card, Vuex-Anbindung (mapActions, mapGetters) |\r
| **9Layout-System** | Woche 2 | \`packages/core/docs/9layout.md\`<br>\`packages/core/src/components/NineLayout.vue\` | NineLayoutTag, Positionierungs-Grid |\r
| **OpenLayers-Interactions** | Woche 2 | \`packages/plugins/MeasureTool/\` (falls vorhanden)<br>Alternative: Draw-Interaction-Beispiel in Docs | Draw, Select, Modify Interactions |\r
| **Generic Client (Snowbox)** | Woche 3 | \`packages/clients/generic/src/polar-client.ts\`<br>\`packages/clients/generic/src/addPlugins.ts\` | Vue-App-Setup, Plugin-Array-Konfiguration |\r
| **Client Map-Konfiguration** | Woche 3 | \`packages/clients/generic/src/mapConfiguration.ts\` | OpenLayers View, Layers, Projection-Setup |\r
| **Specialized Clients** | Woche 3 | \`packages/clients/specialized/\` (z.B. \`stadtplan/\`) | Client-spezifische Themes, Custom-Plugins |\r
| **Plugin-Chaining via Vuex** | Woche 3 | \`packages/clients/*/src/polar-client.ts\` (store.watch-Beispiele) | Reactive Plugin-Kommunikation über Store |\r
| **Jest-Konfiguration** | Woche 4 | \`jest.config.ts\`<br>\`packages/plugins/Zoom/__tests__/zoom.spec.ts\` | Unit-Tests für Store und Components |\r
| **createTestMountParameters** | Woche 4 | \`packages/core/src/test-utils/createTestMountParameters.ts\` | Vue Test Utils Helper für POLAR-Components |\r
| **Playwright E2E-Tests** | Woche 4 | \`e2e/zoom.spec.ts\`<br>\`playwright.config.ts\` | Browser-Interaktionen, Page-Object-Pattern |\r
| **Coverage-Thresholds** | Woche 4 | \`jest.config.ts\` (coverageThreshold) | 80% für Statements, Branches, Functions, Lines |\r
| **Semantic Versioning** | Woche 5 | \`CONTRIBUTING.md\` (Release-Section)<br>\`packages/*/package.json\` (version) | MAJOR.MINOR.PATCH-Schema |\r
| **CHANGELOG-Format** | Woche 5 | \`CHANGELOG.md\` (Root oder einzelne Packages) | Keep a Changelog Format (Added, Changed, Fixed, etc.) |\r
| **NPM-Publishing-Script** | Woche 5 | \`publishPackages.js\`<br>\`package.json\` (scripts: "publish:packages") | Automated Release-Workflow |\r
| **CI/CD-Pipeline** | Woche 5 | \`.github/workflows/release.yml\` (falls vorhanden)<br>Alternative: CI-Docs | GitHub Actions für Tests + NPM-Publish |\r
| **Conventional Commits** | Woche 5 | \`CONTRIBUTING.md\` (Commit-Konventionen)<br>Git-History (Beispiel-Commits) | \`feat:\`, \`fix:\`, \`BREAKING CHANGE:\` |\r
| **Capstone: MeasureTool** | Woche 5+ | \`packages/plugins/MeasureTool/\` (falls vorhanden)<br>Alternativen: \`AddressSearch\`, \`Draw\`-Plugin | Komplexes Plugin mit OpenLayers-Geometrie-Berechnungen |\r
\r
---\r
\r
## Detaillierte Evidenz pro Woche\r
\r
### Woche 1: Architektur & Setup\r
\r
#### Pflichtlektüre-Files im POLAR-Repo\r
\r
1. **README.md** (Root)\r
   - **Relevante Abschnitte**: \r
     - "Getting Started"\r
     - "Project Structure"\r
     - "Development Workflow"\r
   - **Lerninhalte abgeleitet**: Monorepo-Übersicht, Kommandos (\`npm run snowbox\`)\r
\r
2. **nx.json**\r
   - **Relevante Abschnitte**: \r
     - \`targets\` (build, test, lint)\r
     - \`implicitDependencies\`\r
   - **Lerninhalte abgeleitet**: Nx-Task-Orchestrierung, Dependency-Graph\r
\r
3. **packages/core/docs/gettingStarted.md**\r
   - **Relevante Abschnitte**: \r
     - "Core Concepts"\r
     - "Plugin Development Basics"\r
   - **Lerninhalte abgeleitet**: Map-Lifecycle, Store-Setup, Plugin-API\r
\r
4. **packages/core/src/createMap.ts**\r
   - **Relevante Zeilen**: \r
     - Map-Initialisierung (ca. Zeile 10-30)\r
     - Plugin-Registration-Loop (ca. Zeile 50-70)\r
   - **Lerninhalte abgeleitet**: OpenLayers-Integration, Plugin-Lifecycle-Hooks\r
\r
5. **packages/clients/generic/src/polar-client.ts**\r
   - **Relevante Zeilen**: \r
     - Vue-App-Setup (ca. Zeile 1-20)\r
     - Store + Router-Integration (ca. Zeile 25-40)\r
   - **Lerninhalte abgeleitet**: Client-Entry-Point, Vuex/Router-Setup\r
\r
6. **packages/clients/generic/src/addPlugins.ts**\r
   - **Relevante Zeilen**: \r
     - Plugin-Array-Definition (alle Zeilen)\r
     - Plugin-Factory-Aufrufe mit Options\r
   - **Lerninhalte abgeleitet**: Plugin-Registration, Store-Paths\r
\r
---\r
\r
### Woche 2: Plugin-Anatomie\r
\r
#### Pflichtlektüre-Files im POLAR-Repo\r
\r
1. **packages/plugins/Zoom/index.ts**\r
   - **Vollständige Datei** als Referenz-Implementierung\r
   - **Lerninhalte abgeleitet**: \r
     - Factory-Pattern (\`export const Zoom = (options) => ...\`)\r
     - Store-Module-Definition (State, Getters, Actions, Mutations)\r
     - Plugin-Interface (\`name\`, \`storeModule\`, \`component\`)\r
\r
2. **packages/plugins/Zoom/components/ZoomComponent.vue**\r
   - **Template-Abschnitt**: Vuetify-Buttons (v-btn), Icons (v-icon)\r
   - **Script-Abschnitt**: Vuex-Anbindung (computed, methods mit dispatch)\r
   - **Lerninhalte abgeleitet**: Vue 3 Composition API (oder Options API), Vuetify-Komponenten\r
\r
3. **packages/plugins/LayerChooser/index.ts**\r
   - **Store-Module**: Komplexere State-Struktur (Array von Layers)\r
   - **Lerninhalte abgeleitet**: Verschachtelte Store-Logik, Array-Manipulation in Mutations\r
\r
4. **packages/core/src/types/plugin.ts**\r
   - **Interface \`PolarPlugin\`**: Required und Optional Properties\r
   - **Lerninhalte abgeleitet**: TypeScript-Interfaces für Plugins, Type-Guards\r
\r
5. **packages/core/docs/9layout.md**\r
   - **Relevante Abschnitte**: \r
     - Grid-Zones-Diagramm\r
     - NineLayoutTag-Enum\r
   - **Lerninhalte abgeleitet**: Positionierungs-System, Responsive-Behavior\r
\r
6. **packages/plugins/MeasureTool/** (oder ähnliches Tool-Plugin)\r
   - **Relevante Zeilen**: \r
     - OpenLayers Draw-Interaction-Setup\r
     - Event-Listener (\`drawend\`, \`drawstart\`)\r
   - **Lerninhalte abgeleitet**: Map-Interaktionen, Geometrie-Handling\r
\r
---\r
\r
### Woche 3: Client-Entwicklung\r
\r
#### Pflichtlektüre-Files im POLAR-Repo\r
\r
1. **packages/clients/generic/src/polar-client.ts**\r
   - **Vue-App-Setup**: \`createApp()\`, Plugin-Installation (Vuetify, Router, Store)\r
   - **Lerninhalte abgeleitet**: Vue 3 App-Initialisierung, Global-Plugins\r
\r
2. **packages/clients/generic/src/addPlugins.ts**\r
   - **Plugin-Array**: Alle registrierten Plugins\r
   - **Plugin-Options**: Beispiele für Options-Übergabe\r
   - **Lerninhalte abgeleitet**: Plugin-Konfiguration, Conditional-Plugins (via ENV-Variables)\r
\r
3. **packages/clients/generic/src/mapConfiguration.ts**\r
   - **OpenLayers View**: Center, Zoom, MinZoom, MaxZoom\r
   - **Layers-Array**: Base-Layer (OSM, WMS)\r
   - **Lerninhalte abgeleitet**: Map-Config-Struktur, Layer-Definition\r
\r
4. **packages/clients/specialized/** (z.B. \`stadtplan/\`)\r
   - **Custom-Theme**: Vuetify-Theme-Konfiguration\r
   - **Custom-Assets**: Logos, Farben\r
   - **Lerninhalte abgeleitet**: Client-spezifisches Branding\r
\r
5. **packages/core/docs/clientGuide.md**\r
   - **Best Practices**: Deployment, Environment-Variables\r
   - **Lerninhalte abgeleitet**: Production-Build, Bundle-Optimierung\r
\r
---\r
\r
### Woche 4: Testing & Qualität\r
\r
#### Pflichtlektüre-Files im POLAR-Repo\r
\r
1. **jest.config.ts** (Root)\r
   - **Transform-Regeln**: Vue, TypeScript, ESM\r
   - **Coverage-Thresholds**: 80% für alle Metriken\r
   - **Lerninhalte abgeleitet**: Jest-Setup für Monorepo\r
\r
2. **packages/plugins/Zoom/__tests__/zoom.spec.ts**\r
   - **Store-Tests**: Mutations, Actions, Getters\r
   - **Component-Tests**: Mount, User-Interaktionen\r
   - **Lerninhalte abgeleitet**: Unit-Test-Patterns für POLAR-Plugins\r
\r
3. **packages/core/src/test-utils/createTestMountParameters.ts**\r
   - **Helper-Funktion**: Mount-Options mit Vuetify, Store, Mocks\r
   - **Lerninhalte abgeleitet**: Reusable Test-Utilities\r
\r
4. **e2e/zoom.spec.ts**\r
   - **Playwright-Tests**: Page-Navigation, Element-Locators, Assertions\r
   - **Lerninhalte abgeleitet**: E2E-Test-Struktur, Browser-Interaktionen\r
\r
5. **e2e/fixtures/mapFixture.ts** (falls vorhanden)\r
   - **Custom-Fixtures**: Map-Initialisierung für Tests\r
   - **Lerninhalte abgeleitet**: Playwright-Fixtures-Pattern\r
\r
6. **CONTRIBUTING.md → Testing-Section**\r
   - **Test-Konventionen**: Naming, File-Structure\r
   - **PR-Requirements**: Coverage ≥ 80%\r
   - **Lerninhalte abgeleitet**: Team-weite Testing-Standards\r
\r
---\r
\r
### Woche 5: Release & Produktion\r
\r
#### Pflichtlektüre-Files im POLAR-Repo\r
\r
1. **publishPackages.js** (Root)\r
   - **Version-Bump-Logik**: Liest package.json, bumpt Version\r
   - **NPM-Publish-Command**: \`npm publish\` für jedes Package\r
   - **Lerninhalte abgeleitet**: Automatisiertes Release-Script\r
\r
2. **CHANGELOG.md** (Root oder einzelne Packages)\r
   - **Format**: \`[Unreleased]\`, \`[1.2.0] - 2024-01-15\`\r
   - **Kategorien**: Added, Changed, Fixed, Deprecated, Removed, Security\r
   - **Lerninhalte abgeleitet**: Keep a Changelog Format\r
\r
3. **CONTRIBUTING.md → Release-Section**\r
   - **Release-Workflow**: Pre-Checks, Version-Bump, Tag, Publish\r
   - **PR-Labels**: \`enhancement\`, \`bug\`, \`breaking-change\`\r
   - **Lerninhalte abgeleitet**: Git-Workflow für Releases\r
\r
4. **.github/workflows/release.yml** (falls vorhanden)\r
   - **GitHub Actions-Steps**: Checkout, Setup Node, Install, Test, Build, Publish\r
   - **Secrets**: \`NPM_TOKEN\`, \`GITHUB_TOKEN\`\r
   - **Lerninhalte abgeleitet**: CI/CD für NPM-Publishing\r
\r
5. **packages/core/package.json → publishConfig**\r
   - **Access-Level**: \`"public"\` oder \`"restricted"\`\r
   - **Registry**: Default oder Custom (z.B. GitHub Packages)\r
   - **Lerninhalte abgeleitet**: NPM-Registry-Konfiguration\r
\r
6. **Semver-Dokumentation**: https://semver.org/lang/de/\r
   - **Externe Ressource**, aber in \`CONTRIBUTING.md\` referenziert\r
   - **Lerninhalte abgeleitet**: MAJOR.MINOR.PATCH-Schema\r
\r
---\r
\r
## Capstone-Projekt: MeasureTool-Plugin\r
\r
### Evidenz-Files\r
\r
1. **Referenz-Plugin im Repo** (falls vorhanden):\r
   - \`packages/plugins/MeasureTool/\` (vollständige Implementierung als Vorbild)\r
   - Alternative: \`packages/plugins/Draw/\` oder ähnliches Tool-Plugin\r
\r
2. **OpenLayers-Dokumentation**:\r
   - Draw-Interaction: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html\r
   - Sphere-Module: https://openlayers.org/en/latest/apidoc/module-ol_sphere.html\r
\r
3. **E2E-Test-Beispiel**:\r
   - \`e2e/zoom.spec.ts\` (als Pattern für MeasureTool-E2E-Tests)\r
\r
### Capstone-Anforderungen abgeleitet von\r
\r
- **Funktionale Anforderungen**: Kombinieren typische POLAR-Plugin-Features (UI, Store, Map-Interaction)\r
- **Technische Anforderungen**: Basieren auf POLAR-Best-Practices aus Wochen 1-5\r
- **Meilensteine**: Spiegeln den iterativen Plugin-Development-Workflow wider\r
\r
---\r
\r
## Validierung der Evidenz\r
\r
### Checkliste für Curriculum-Maintainer\r
\r
Beim Update des Curriculums:\r
\r
- [ ] **Alle referenzierten Files existieren** im POLAR-Repository (oder Alternatives sind dokumentiert)\r
- [ ] **Zeilen-/Abschnitts-Referenzen sind aktuell** (Files können sich ändern)\r
- [ ] **Externe Links sind gültig** (z.B. OpenLayers-Docs, Semver-Docs)\r
- [ ] **Beispiel-Code kompiliert** (Copy-Paste aus Curriculum sollte funktionieren)\r
- [ ] **Tests sind ausführbar** (Quiz-Antworten sind korrekt, Tasks sind machbar)\r
\r
### Bei POLAR-Repository-Updates\r
\r
Wenn POLAR-Repo sich ändert (z.B. Breaking Changes, neue Features):\r
\r
1. **Evidenz-Mapping reviewen**: Sind referenzierte Files noch vorhanden?\r
2. **Curriculum anpassen**: Beispiel-Code aktualisieren\r
3. **Tests updaten**: Quiz-Fragen, Task-Beschreibungen anpassen\r
4. **CHANGELOG pflegen**: Dokumentiere Curriculum-Änderungen\r
\r
---\r
\r
## Zusammenfassung\r
\r
**Alle Curriculum-Inhalte** basieren auf realen POLAR-Repository-Files:\r
\r
- **Woche 1**: \`README.md\`, \`nx.json\`, \`createMap.ts\`, \`addPlugins.ts\`\r
- **Woche 2**: \`Zoom/index.ts\`, \`ZoomComponent.vue\`, \`9layout.md\`\r
- **Woche 3**: \`polar-client.ts\`, \`mapConfiguration.ts\`, Specialized-Clients\r
- **Woche 4**: \`jest.config.ts\`, \`zoom.spec.ts\`, \`createTestMountParameters.ts\`\r
- **Woche 5**: \`publishPackages.js\`, \`CHANGELOG.md\`, \`CONTRIBUTING.md\`\r
- **Capstone**: \`MeasureTool/\` (oder ähnliche Tool-Plugins)\r
\r
**Keine theoretischen Konzepte ohne Code-Basis!** Jedes Lernziel ist mit konkreten Implementierungen verknüpft.\r
`,wM=`# POLAR – Einführung ins Framework\r
\r
## 🧭 Was ist POLAR?\r
\r
**POLAR** (Plugins for OpenLAyeRs) ist eine **Open-Source Bibliothek von Dataport**, mit der man **konfigurierbare, modulare Karten-Clients** für Webanwendungen erstellen kann – besonders für den öffentlichen Sektor (Verwaltungsprozesse, Bürgerportale).\r
\r
### Kernmerkmale\r
\r
* ⭐️ **EUPL-Lizenz** – freie Nutzung in Europa\r
* 📦 **Plugin-basierte Architektur** – einzelne Funktionen als wiederverwendbare Module\r
* 🗺️ **Basierend auf OpenLayers** + MasterportalAPI + Vue/TypeScript\r
* 📱 **Responsive, mobile-freundlich** UI\r
* 🏢 Wird produktiv in Behörden genutzt (Hamburg, Schleswig-Holstein, Bremen)\r
\r
## 🎯 Einsatzzweck\r
\r
POLAR kann entweder als **Stand-alone Karte** in Webseiten eingebunden oder als **Teil eines Formulars/Prozesses** verwendet werden (z. B. Geodaten-Eingabe in Verwaltungsanträgen).\r
\r
### Beispiele für Anwendungsfälle\r
\r
* Bürger können Parzellen markieren oder Positionen setzen\r
* Verwaltung kann Karten im Antragssystem nutzen\r
* Geodaten visualisieren und auswerten\r
\r
## 🏗️ Architektur\r
\r
POLAR besteht aus **kleinen, isolierten Modulen**:\r
\r
* Jedes Modul kapselt eine spezifische Funktionalität\r
* Module lassen sich kombinieren und ersetzen\r
* Für client-spezifische Logik können eigene Plugins ergänzt werden\r
\r
## 🔌 Wichtige Plugins\r
\r
| Plugin | Funktion |\r
|--------|----------|\r
| **AddressSearch** | Suchfeld für Adressen inkl. Reverse-Geocoding |\r
| **Pins** | Marker setzen/verschieben |\r
| **Routing** | Routenberechnung (OpenRouteService) |\r
| **LayerChooser** | Auswahl von Hintergrund- & Overlay-Layers |\r
| **Gfi** | Feature-Informationen anzeigen |\r
| **Draw** | Geometrien einzeichnen |\r
| **Export** | Screenshot/Funktionen exportieren |\r
| **Zoom, Toast, Scale** | UI-Elemente (Zoom, Infomeldungen, Maßstab) |\r
\r
## 🚀 Quick Start\r
\r
### Installation\r
\r
\`\`\`bash\r
npm install @polar/client-generic\r
\`\`\`\r
\r
### Einfaches Beispiel\r
\r
\`\`\`javascript\r
import polar from '@polar/client-generic'\r
\r
polar.createMap({\r
  containerId: 'polarstern',\r
  services: 'https://geodienste.hamburg.de/services-internet.json',\r
  mapConfiguration: {\r
    layers: [{ id: '453', visibility: true, type: 'background' }]\r
  }\r
})\r
\`\`\`\r
\r
\`\`\`html\r
<div id="polarstern" style="width:680px; height:420px;"></div>\r
\`\`\`\r
\r
## 📚 Ressourcen\r
\r
* **GitHub**: [https://github.com/Dataport/polar](https://github.com/Dataport/polar)\r
* **Website**: [https://dataport.github.io/polar/](https://dataport.github.io/polar/)\r
* **Dokumentation**: [https://dataport.github.io/polar/documentation.html](https://dataport.github.io/polar/documentation.html)\r
\r
## ✅ Lernziel\r
\r
Wenn du verstehst, was POLAR ist, wie die Plugin-Architektur funktioniert und wie man eine einfache Karte einbindet, kannst du diese Lektion als abgeschlossen markieren.\r
`,SM=`# POLAR in 15 Minuten\r
\r
## Was ist POLAR?\r
\r
**POLAR** (Plugin-based OpenLayers Application Runtime) ist ein modernes OpenLayers-Plugin-Framework, das auf Vue 3, Vuetify und Vuex basiert. Es ermöglicht die schnelle Entwicklung von WebGIS-Anwendungen durch ein modulares Plugin-System.\r
\r
### Kernmerkmale\r
- 🧩 **Plugin-basierte Architektur**: Jede Feature ist ein eigenständiges, wiederverwendbares Plugin\r
- 📦 **Monorepo-Struktur**: Alle Packages (Core, Plugins, Clients) in einem Repository\r
- 🎨 **Vue 3 + Vuetify**: Moderne Reactive UI mit Material Design\r
- 🗺️ **OpenLayers Integration**: Vollständige Karteninteraktionen und Layer-Management\r
- 🔄 **Vuex State Management**: Zentrale Store-Architektur für Plugin-Kommunikation\r
\r
## Repo-Struktur\r
\r
\`\`\`\r
polar/\r
├── packages/\r
│   ├── core/                  # Kern-Framework (createMap, Store-Setup)\r
│   │   ├── src/\r
│   │   │   ├── createMap.ts   # Map-Initialisierung\r
│   │   │   ├── types/         # TypeScript-Definitionen\r
│   │   │   └── utils/         # Hilfs-Funktionen\r
│   │   └── package.json\r
│   │\r
│   ├── plugins/               # Alle Plugins (Zoom, LayerChooser, etc.)\r
│   │   ├── Zoom/\r
│   │   │   ├── index.ts       # Plugin Factory & Store\r
│   │   │   ├── components/    # Vue-Components\r
│   │   │   └── types.ts       # Plugin-spezifische Types\r
│   │   ├── LayerChooser/\r
│   │   ├── AddressSearch/\r
│   │   └── ...\r
│   │\r
│   ├── clients/               # Anwendungs-Clients\r
│   │   ├── generic/           # Generic Client (Snowbox)\r
│   │   │   ├── src/\r
│   │   │   │   ├── polar-client.ts      # Client-Entry\r
│   │   │   │   ├── addPlugins.ts        # Plugin-Registration\r
│   │   │   │   └── mapConfiguration.ts  # Map-Config\r
│   │   │   └── index.html\r
│   │   └── specialized/       # Spezialisierte Clients\r
│   │\r
│   └── lib-build/             # Build-Tools (Vite Config)\r
│\r
├── e2e/                       # Playwright E2E-Tests\r
│   ├── zoom.spec.ts\r
│   └── fixtures/\r
│\r
├── nx.json                    # Nx Monorepo Config\r
├── jest.config.ts             # Test Config\r
├── publishPackages.js         # Release Script\r
└── README.md                  # Haupt-Dokumentation\r
\`\`\`\r
\r
## Setup-Kommandos\r
\r
### Voraussetzungen\r
- Node.js ≥ 18\r
- npm ≥ 9\r
\r
### Installation\r
\r
\`\`\`bash\r
# Repository klonen\r
git clone https://github.com/your-org/polar.git\r
cd polar\r
\r
# Dependencies installieren\r
npm install\r
\r
# Snowbox (Generic Client) starten\r
npm run snowbox\r
\r
# Browser öffnet automatisch: http://localhost:5173\r
\`\`\`\r
\r
### Weitere Kommandos\r
\r
\`\`\`bash\r
# Alle Tests ausführen\r
npm test\r
\r
# E2E-Tests\r
npm run test:e2e\r
\r
# Type-Checking\r
npm run type-check\r
\r
# Spezifisches Plugin builden\r
npm run build --scope=@polar/zoom\r
\r
# Alle Packages builden\r
npm run build:all\r
\`\`\`\r
\r
## Erste Anlaufstellen – Map\r
\r
### 1. **README.md** (Repo-Root)\r
   - Architektur-Übersicht\r
   - Getting Started Guide\r
   - Contribution Guidelines\r
\r
### 2. **packages/core/docs/gettingStarted.md**\r
   - Setup-Details\r
   - Core-Konzepte (Store, Map-Lifecycle)\r
   - Plugin-Development Basics\r
\r
### 3. **packages/plugins/Zoom/index.ts**\r
   - Referenz-Implementierung eines einfachen Plugins\r
   - Factory Pattern\r
   - Store-Module-Registration\r
\r
### 4. **packages/clients/generic/src/addPlugins.ts**\r
   - Wie Plugins registriert werden\r
   - Plugin-Konfiguration und -Initialisierung\r
   - Vuex-Paths und Store-Mapping\r
\r
### 5. **packages/core/src/createMap.ts**\r
   - Map-Initialisierung\r
   - Plugin-Lifecycle\r
   - Store-Setup\r
\r
### 6. **e2e/zoom.spec.ts**\r
   - E2E-Test-Beispiel\r
   - Playwright-Patterns\r
   - UI-Interaktions-Tests\r
\r
### 7. **CONTRIBUTING.md**\r
   - Code-Style & Linting\r
   - PR-Prozess\r
   - Release-Workflow\r
\r
## Nächste Schritte\r
\r
1. **Snowbox lokal starten** und mit der Karte interagieren\r
2. **Plugin-Liste erkunden**: Alle verfügbaren Plugins in \`packages/plugins/\`\r
3. **Ein einfaches Plugin lesen**: Start mit \`Zoom\` oder \`PanButtons\`\r
4. **Store-Architektur verstehen**: DevTools öffnen und Vuex-State inspizieren\r
5. **Erstes Feature-Branch**: \`git checkout -b feature/my-first-change\`\r
\r
---\r
\r
**Tipp**: Nutze die Browser DevTools (F12) → Vue Tab, um die Component-Hierarchie und Vuex-State live zu inspizieren!\r
`,bM=`# Woche 1: POLAR-Architektur & Setup\r
\r
## 🎯 Lernziele\r
\r
Nach dieser Woche kannst du:\r
- Die Monorepo-Struktur von POLAR navigieren und verstehen\r
- Snowbox lokal starten und debuggen\r
- Die Rolle von Core, Plugins und Clients erklären\r
- Das Plugin-System und Factory Pattern beschreiben\r
- Den Vuex-Store inspizieren und Plugin-State nachvollziehen\r
\r
## 📚 Pflichtlektüre\r
\r
Lies die folgenden Files im POLAR-Repository:\r
\r
1. **README.md** (Repo-Root)\r
   - Überblick über das gesamte Projekt\r
   - Architektur-Diagramm\r
   - Quick Start Guide\r
\r
2. **nx.json**\r
   - Monorepo-Konfiguration mit Nx\r
   - Build-Targets und Task-Dependencies\r
   - Verstehe, wie \`npm run snowbox\` intern aufgelöst wird\r
\r
3. **packages/core/docs/gettingStarted.md**\r
   - Core-Konzepte: Map-Lifecycle, Store-Setup\r
   - Plugin-Entwicklung Basics\r
   - API-Übersicht\r
\r
4. **packages/core/src/createMap.ts**\r
   - Entry-Point der Map-Initialisierung\r
   - Plugin-Registration und -Lifecycle\r
   - OpenLayers-Integration\r
\r
5. **packages/clients/generic/src/polar-client.ts**\r
   - Client-Entry-Point\r
   - Vue-App-Setup\r
   - Router und Store-Integration\r
\r
6. **packages/clients/generic/src/addPlugins.ts**\r
   - Wie Plugins zum Client hinzugefügt werden\r
   - Plugin-Konfiguration\r
   - Store-Paths und Namespacing\r
\r
## 🏗️ Architektur-Konzepte\r
\r
### Monorepo-Struktur\r
\r
POLAR nutzt Nx als Monorepo-Tool:\r
- **Packages**: Einzelne NPM-Packages mit eigenen \`package.json\`\r
- **Shared Dependencies**: \`node_modules\` im Root\r
- **Task Orchestration**: \`nx run <target>\` für Builds, Tests, etc.\r
\r
### Core, Plugins, Clients\r
\r
\`\`\`\r
┌─────────────────────────────────────────┐\r
│           Client (Snowbox)              │\r
│  - Vue App Entry                        │\r
│  - Plugin Registration (addPlugins.ts)  │\r
│  - Map Configuration                    │\r
└────────────┬────────────────────────────┘\r
             │ importiert\r
             ↓\r
┌─────────────────────────────────────────┐\r
│              Core                       │\r
│  - createMap()                          │\r
│  - Store-Setup                          │\r
│  - Plugin-Lifecycle                     │\r
└────────────┬────────────────────────────┘\r
             │ lädt\r
             ↓\r
┌─────────────────────────────────────────┐\r
│         Plugins (Zoom, etc.)            │\r
│  - Factory-Funktion                     │\r
│  - Store-Module                         │\r
│  - Vue-Components                       │\r
└─────────────────────────────────────────┘\r
\`\`\`\r
\r
### Plugin-Lifecycle\r
\r
1. **Registration**: Client ruft Plugin-Factory in \`addPlugins.ts\`\r
2. **Store-Module**: Plugin registriert Vuex-Module\r
3. **Component-Mounting**: Vue-Component wird in 9Layout eingehängt\r
4. **Map-Interaction**: Plugin interagiert mit OpenLayers-Map via Core-API\r
\r
### Factory Pattern\r
\r
Jedes Plugin exportiert eine Factory-Funktion:\r
\r
\`\`\`typescript\r
export const Zoom = (options?: ZoomOptions) => {\r
  return {\r
    name: 'zoom',\r
    storeModule: zoomStoreModule,\r
    component: ZoomComponent,\r
    // ...weitere Config\r
  }\r
}\r
\`\`\`\r
\r
Vorteile:\r
- **Konfigurierbar**: Options können übergeben werden\r
- **Lazy Loading**: Plugin wird erst bei Bedarf initialisiert\r
- **Testbar**: Factory kann mit Mock-Options getestet werden\r
\r
## 🔍 Hands-on: Snowbox erkunden\r
\r
### Task 1: Snowbox starten und DevTools nutzen\r
\r
1. Starte Snowbox: \`npm run snowbox\`\r
2. Öffne Browser DevTools (F12)\r
3. Navigiere zum **Vue Tab** (ggf. Vue DevTools Extension installieren)\r
4. Inspiziere die Component-Hierarchie: Finde \`<Zoom>\`, \`<LayerChooser>\`, etc.\r
5. Wechsle zum **Vuex Tab**:\r
   - Finde das \`zoom\`-Modul im State\r
   - Trigger eine Zoom-Action (+ Button in der Karte klicken)\r
   - Beobachte die State-Änderung in DevTools\r
\r
### Task 2: Plugin-Liste erstellen\r
\r
Erstelle eine Markdown-Liste aller verfügbaren Plugins:\r
\r
1. Navigiere zu \`packages/plugins/\`\r
2. Liste alle Ordner auf\r
3. Für jedes Plugin: Öffne \`index.ts\` und notiere den Plugin-Namen (aus Factory-Export)\r
4. Gruppiere Plugins nach Kategorie (z.B. "Map Control", "Layer Management", "Tools")\r
\r
Beispiel-Struktur:\r
\`\`\`markdown\r
## Map Controls\r
- Zoom\r
- PanButtons\r
- ...\r
\r
## Layer Management\r
- LayerChooser\r
- ...\r
\`\`\`\r
\r
### Task 3: Store-Struktur dokumentieren\r
\r
Öffne \`packages/core/src/types/store.ts\` (oder ähnliche Type-Definition) und:\r
\r
1. Identifiziere das Root-State-Interface\r
2. Liste alle Top-Level-Module auf (z.B. \`map\`, \`plugins\`, ...)\r
3. Erkläre in eigenen Worten, warum Plugins ihre eigenen Store-Module haben\r
\r
## 📝 Knowledge Check\r
\r
Beantworte die folgenden Fragen (schriftlich oder im Pair-Discussion):\r
\r
1. **Was ist der Unterschied zwischen einem Client und einem Plugin?**\r
   - Client = Anwendung (z.B. Snowbox), die Plugins nutzt\r
   - Plugin = Feature-Modul (z.B. Zoom), das in Clients integriert wird\r
\r
2. **Warum nutzt POLAR ein Monorepo statt separater Repositories?**\r
   - Gemeinsame Dependencies\r
   - Atomare Commits über Package-Grenzen hinweg\r
   - Einfachere lokale Entwicklung (kein npm link)\r
\r
3. **Wo wird die OpenLayers-Map-Instanz erstellt?**\r
   - In \`packages/core/src/createMap.ts\`\r
\r
4. **Wie kommunizieren Plugins untereinander?**\r
   - Über den zentralen Vuex-Store\r
   - Plugins können State anderer Plugins lesen (via Getters)\r
   - Plugins können Actions anderer Plugins dispatchen\r
\r
5. **Was ist der Vorteil des Factory Patterns bei Plugins?**\r
   - Konfigurierbarkeit zur Laufzeit\r
   - Lazy Initialization\r
   - Bessere Testbarkeit\r
\r
## 🚀 Bonus-Challenge\r
\r
Erstelle ein minimales "Hello World"-Plugin:\r
\r
1. Erstelle einen neuen Ordner: \`packages/plugins/HelloWorld/\`\r
2. Implementiere:\r
   - \`index.ts\` mit Factory-Funktion\r
   - Einfaches Store-Module (State mit \`message: 'Hello POLAR!'\`)\r
   - Vue-Component, die \`message\` anzeigt\r
3. Registriere Plugin in \`addPlugins.ts\`\r
4. Starte Snowbox und verifiziere, dass "Hello POLAR!" angezeigt wird\r
\r
Akzeptanzkriterien:\r
- ✅ Plugin erscheint in Vuex-DevTools unter \`plugins/helloWorld\`\r
- ✅ Component ist im DOM sichtbar\r
- ✅ Keine TypeScript-Fehler\r
\r
---\r
\r
**Checkpoint**: Bis Ende Woche 1 solltest du Snowbox fehlerfrei starten können und die grundlegende Architektur verstehen. Alle Fragen klären, bevor du zu Woche 2 gehst!\r
`,EM=`# Woche 2: Plugin-Anatomie\r
\r
## 🎯 Lernziele\r
\r
Nach dieser Woche kannst du:\r
- Ein neues Plugin von Grund auf erstellen\r
- Store-Module mit State, Getters, Actions und Mutations implementieren\r
- Vue-Components mit Vuetify-Komponenten bauen\r
- Das 9Layout-System verstehen und nutzen\r
- OpenLayers-Interactions in Plugins integrieren\r
\r
## 📚 Pflichtlektüre\r
\r
1. **packages/plugins/Zoom/index.ts**\r
   - Vollständige Plugin-Implementierung\r
   - Store-Module-Definition\r
   - Factory-Funktion mit Options\r
\r
2. **packages/plugins/Zoom/components/ZoomComponent.vue**\r
   - Vuetify-Button-Components\r
   - Vuex-Store-Anbindung (mapActions, mapGetters)\r
   - Event-Handling\r
\r
3. **packages/plugins/LayerChooser/index.ts**\r
   - Komplexeres Plugin-Beispiel\r
   - Verschachtelte Store-Structure (Layer-Array)\r
   - Dynamische Component-Rendering\r
\r
4. **packages/core/src/types/plugin.ts**\r
   - Plugin-Interface-Definition\r
   - Pflichtfelder und optionale Properties\r
   - Type-Guards\r
\r
5. **packages/core/docs/9layout.md**\r
   - Dokumentation des 9-Zonen-Layout-Systems\r
   - NineLayoutTag und Positionierung\r
   - Responsive Behavior\r
\r
6. **packages/plugins/MeasureTool/** (falls vorhanden, sonst ähnliches Tool-Plugin)\r
   - OpenLayers-Interaction-Beispiel\r
   - Event-Listener-Management\r
   - Geometrie-Berechnungen\r
\r
## 🏗️ Plugin-Anatomie im Detail\r
\r
### Dateistruktur eines Plugins\r
\r
\`\`\`\r
packages/plugins/MyPlugin/\r
├── index.ts              # Factory & Store-Export\r
├── types.ts              # TypeScript Interfaces\r
├── components/\r
│   ├── MyPluginComponent.vue    # Haupt-Component\r
│   └── MyPluginSubComponent.vue # Sub-Components\r
├── utils/\r
│   └── calculations.ts   # Helper-Funktionen\r
├── __tests__/\r
│   └── myPlugin.spec.ts  # Unit-Tests\r
└── package.json          # Plugin-Dependencies\r
\`\`\`\r
\r
### Factory-Funktion (index.ts)\r
\r
\`\`\`typescript\r
import { MyPluginOptions } from './types'\r
import MyPluginComponent from './components/MyPluginComponent.vue'\r
\r
// Store-Module\r
const myPluginStore = {\r
  namespaced: true,\r
  state: () => ({\r
    active: false,\r
    value: 0\r
  }),\r
  getters: {\r
    isActive: (state) => state.active\r
  },\r
  mutations: {\r
    SET_ACTIVE(state, active) {\r
      state.active = active\r
    }\r
  },\r
  actions: {\r
    toggle({ commit, state }) {\r
      commit('SET_ACTIVE', !state.active)\r
    }\r
  }\r
}\r
\r
// Factory\r
export const MyPlugin = (options?: MyPluginOptions) => ({\r
  name: 'myPlugin',\r
  storeModule: myPluginStore,\r
  component: MyPluginComponent,\r
  nineLayoutTag: options?.position || 'top-left',\r
  // Weitere Config...\r
})\r
\`\`\`\r
\r
### Vue-Component mit Vuetify\r
\r
\`\`\`vue\r
<template>\r
  <v-card class="my-plugin">\r
    <v-card-title>My Plugin</v-card-title>\r
    <v-card-text>\r
      <v-btn @click="handleClick" color="primary">\r
        Action\r
      </v-btn>\r
      <div>{{ currentValue }}</div>\r
    </v-card-text>\r
  </v-card>\r
</template>\r
\r
<script setup>\r
import { computed } from 'vue'\r
import { useStore } from 'vuex'\r
\r
const store = useStore()\r
\r
const currentValue = computed(() => \r
  store.getters['plugins/myPlugin/getValue']\r
)\r
\r
const handleClick = () => {\r
  store.dispatch('plugins/myPlugin/increment')\r
}\r
<\/script>\r
\r
<style scoped>\r
.my-plugin {\r
  max-width: 300px;\r
}\r
</style>\r
\`\`\`\r
\r
## 🎨 9Layout-System\r
\r
POLAR nutzt ein 9-Zonen-Grid für Plugin-Positionierung:\r
\r
\`\`\`\r
┌─────────────────────────────────────┐\r
│ top-left    top-center   top-right  │\r
│                                     │\r
│                                     │\r
│ mid-left      (Map)      mid-right │\r
│                                     │\r
│                                     │\r
│ bottom-left bottom-center bottom-.. │\r
└─────────────────────────────────────┘\r
\`\`\`\r
\r
**NineLayoutTag**: Jedes Plugin definiert seine Position via \`nineLayoutTag\` Property.\r
\r
Beispiele:\r
- \`Zoom\` → \`top-left\`\r
- \`LayerChooser\` → \`top-right\`\r
- \`Attribution\` → \`bottom-right\`\r
\r
## 🔧 OpenLayers-Integration\r
\r
### Map-Zugriff im Plugin\r
\r
\`\`\`typescript\r
// In Store-Action\r
actions: {\r
  zoomIn({ rootGetters }) {\r
    const map = rootGetters['map/getMap'] // OpenLayers Map-Instanz\r
    const view = map.getView()\r
    view.animate({ zoom: view.getZoom() + 1 })\r
  }\r
}\r
\`\`\`\r
\r
### Interaction hinzufügen\r
\r
\`\`\`typescript\r
import { Draw } from 'ol/interaction'\r
import { Vector as VectorSource } from 'ol/source'\r
\r
actions: {\r
  startDrawing({ rootGetters, commit }) {\r
    const map = rootGetters['map/getMap']\r
    const source = new VectorSource()\r
    \r
    const drawInteraction = new Draw({\r
      source,\r
      type: 'LineString'\r
    })\r
    \r
    drawInteraction.on('drawend', (event) => {\r
      commit('ADD_FEATURE', event.feature)\r
    })\r
    \r
    map.addInteraction(drawInteraction)\r
    commit('SET_DRAW_INTERACTION', drawInteraction)\r
  },\r
  \r
  stopDrawing({ state, rootGetters }) {\r
    if (state.drawInteraction) {\r
      const map = rootGetters['map/getMap']\r
      map.removeInteraction(state.drawInteraction)\r
    }\r
  }\r
}\r
\`\`\`\r
\r
## 🛠️ Hands-on: Counter-Plugin erstellen\r
\r
Erstelle ein vollständiges "Counter"-Plugin mit folgenden Features:\r
\r
### Requirements\r
- **UI**: Zwei Buttons (+ / -) und Anzeige des aktuellen Werts\r
- **Store**: State mit \`count\`, Actions \`increment\` / \`decrement\`, Getter \`getCount\`\r
- **Position**: \`top-left\` im 9Layout\r
- **Styling**: Vuetify-Components mit Primary-Color\r
\r
### Acceptance Criteria\r
- ✅ Counter startet bei 0\r
- ✅ Buttons funktionieren und ändern den Count\r
- ✅ Store-Modul ist unter \`plugins/counter\` registriert\r
- ✅ Component nutzt Vuetify (\`v-btn\`, \`v-card\`)\r
- ✅ TypeScript ohne Fehler\r
- ✅ Plugin erscheint in Snowbox an korrekter Position\r
\r
### Schritt-für-Schritt\r
\r
1. **Ordner erstellen**: \`packages/plugins/Counter/\`\r
2. **types.ts**: Interface für Options definieren\r
3. **index.ts**: Factory + Store-Module implementieren\r
4. **components/CounterComponent.vue**: UI bauen\r
5. **addPlugins.ts**: Plugin registrieren: \`Counter()\`\r
6. **Testen**: Snowbox starten und Counter bedienen\r
\r
## 📝 Knowledge Check\r
\r
1. **Was ist der Unterschied zwischen einem Getter und einer Computed Property in der Component?**\r
   - Getter: Vuex-Store-Ebene (für Store-Logik)\r
   - Computed: Component-Ebene (nutzt oft Getter)\r
\r
2. **Warum ist \`namespaced: true\` im Store-Module wichtig?**\r
   - Verhindert Namenskollisionen zwischen Plugins\r
   - Ermöglicht Scoped Actions/Mutations: \`plugins/myPlugin/action\`\r
\r
3. **Wann sollte man eine Action statt einer Mutation nutzen?**\r
   - Actions für asynchrone Operationen (API-Calls, Map-Interactions)\r
   - Mutations nur für synchrone State-Änderungen\r
\r
4. **Wie greift ein Plugin auf die OpenLayers-Map zu?**\r
   - Via \`rootGetters['map/getMap']\` im Store\r
\r
5. **Was passiert, wenn zwei Plugins den gleichen \`nineLayoutTag\` haben?**\r
   - Beide werden in der gleichen Zone gerendert (übereinander oder nebeneinander, je nach CSS)\r
\r
## 🚀 Bonus-Challenge\r
\r
Erweitere das Counter-Plugin:\r
\r
1. **Reset-Button**: Setzt Counter auf 0 zurück\r
2. **Persistent State**: Speichere Count im LocalStorage und lade beim Start\r
3. **Max-Value**: Warnung (Toast oder Dialog), wenn Counter > 10\r
4. **Animation**: Vuetify Transition beim Count-Wechsel\r
5. **Unit-Tests**: Teste Store-Actions mit Jest\r
\r
---\r
\r
**Checkpoint**: Du solltest jetzt eigenständig neue Plugins erstellen können. In Woche 3 lernst du, wie Clients Plugins konfigurieren und Specialized Clients aufgebaut werden.\r
`,MM=`# Woche 3: Client-Entwicklung\r
\r
## 🎯 Lernziele\r
\r
Nach dieser Woche kannst du:\r
- Den Unterschied zwischen Generic und Specialized Clients erklären\r
- Einen neuen Client von Grund auf aufsetzen\r
- Plugins via \`addPlugins.ts\` konfigurieren und initialisieren\r
- Map-Konfigurationen (Layer, View, Controls) anpassen\r
- Plugin-Chaining via Vuex-Paths implementieren\r
- Client-spezifische Themes und Layouts erstellen\r
\r
## 📚 Pflichtlektüre\r
\r
1. **packages/clients/generic/src/polar-client.ts**\r
   - Client-Entry-Point\r
   - Vue-App-Setup mit Router und Store\r
   - Vuetify-Konfiguration\r
\r
2. **packages/clients/generic/src/addPlugins.ts**\r
   - Plugin-Array-Definition\r
   - Plugin-Options übergeben\r
   - Store-Paths für Plugin-Kommunikation\r
\r
3. **packages/clients/generic/src/mapConfiguration.ts**\r
   - OpenLayers-Map-Config (View, Layers, Projection)\r
   - Initial-Extent und Zoom-Levels\r
   - Base-Layer-Definition\r
\r
4. **packages/clients/specialized/** (falls vorhanden, z.B. \`clients/stadtplan/\`)\r
   - Spezialisierter Client-Aufbau\r
   - Custom-Plugins und -Themes\r
   - Client-spezifische Assets\r
\r
5. **packages/core/docs/clientGuide.md**\r
   - Best Practices für Client-Entwicklung\r
   - Deployment-Strategien\r
   - Environment-Variables\r
\r
## 🏗️ Generic vs. Specialized Clients\r
\r
### Generic Client (Snowbox)\r
\r
**Zweck**: Entwicklungs- und Demo-Umgebung\r
- Enthält **alle** verfügbaren Plugins\r
- Flexible Konfiguration\r
- Gut für Testing und Prototyping\r
\r
**Struktur**:\r
\`\`\`\r
packages/clients/generic/\r
├── src/\r
│   ├── polar-client.ts       # Entry\r
│   ├── addPlugins.ts         # Alle Plugins\r
│   ├── mapConfiguration.ts   # Standard-Map-Config\r
│   └── index.html\r
├── public/                   # Assets\r
└── vite.config.js\r
\`\`\`\r
\r
### Specialized Client (z.B. Stadtplan)\r
\r
**Zweck**: Produktions-Anwendung mit spezifischem Feature-Set\r
- Nur benötigte Plugins\r
- Custom-Branding und Theme\r
- Optimierter Build (kleinere Bundle-Size)\r
\r
**Struktur**:\r
\`\`\`\r
packages/clients/stadtplan/\r
├── src/\r
│   ├── polar-client.ts\r
│   ├── addPlugins.ts         # Nur benötigte Plugins\r
│   ├── mapConfiguration.ts   # Stadt-spezifische Config\r
│   ├── theme/\r
│   │   └── stadtplan-theme.ts # Custom Vuetify-Theme\r
│   └── assets/\r
│       └── logo-stadtplan.svg\r
└── vite.config.js            # Client-spezifische Build-Config\r
\`\`\`\r
\r
## 🔌 Plugin-Konfiguration in addPlugins.ts\r
\r
### Basis-Beispiel\r
\r
\`\`\`typescript\r
import { Zoom } from '@polar/zoom'\r
import { LayerChooser } from '@polar/layer-chooser'\r
import { AddressSearch } from '@polar/address-search'\r
\r
export const plugins = [\r
  // Plugin ohne Options\r
  Zoom(),\r
  \r
  // Plugin mit Options\r
  LayerChooser({\r
    position: 'top-right',\r
    initiallyOpen: true,\r
    allowLayerReordering: true\r
  }),\r
  \r
  // Plugin mit Service-Config\r
  AddressSearch({\r
    serviceUrl: 'https://api.example.com/geocode',\r
    minSearchLength: 3,\r
    debounceTime: 300\r
  })\r
]\r
\`\`\`\r
\r
### Advanced: Conditional Plugins\r
\r
\`\`\`typescript\r
export const plugins = [\r
  Zoom(),\r
  \r
  // Nur in Production\r
  ...(import.meta.env.PROD ? [Analytics()] : []),\r
  \r
  // Basierend auf Feature-Flag\r
  ...(import.meta.env.VITE_ENABLE_3D === 'true' ? [ThreeDView()] : [])\r
]\r
\`\`\`\r
\r
## 🗺️ Map-Konfiguration\r
\r
### mapConfiguration.ts\r
\r
\`\`\`typescript\r
import { Map, View } from 'ol'\r
import TileLayer from 'ol/layer/Tile'\r
import OSM from 'ol/source/OSM'\r
import { fromLonLat } from 'ol/proj'\r
\r
export const createMapConfiguration = () => {\r
  return {\r
    target: 'map', // DOM-Element-ID\r
    \r
    view: new View({\r
      center: fromLonLat([10.0, 53.5]), // Hamburg\r
      zoom: 12,\r
      minZoom: 8,\r
      maxZoom: 19\r
    }),\r
    \r
    layers: [\r
      // Base Layer\r
      new TileLayer({\r
        source: new OSM(),\r
        properties: { name: 'OpenStreetMap' }\r
      })\r
    ],\r
    \r
    controls: [] // Defaults von OpenLayers überschreiben\r
  }\r
}\r
\`\`\`\r
\r
### Client-spezifische Layer\r
\r
\`\`\`typescript\r
// Stadtplan-Client mit WMS-Layer\r
import TileLayer from 'ol/layer/Tile'\r
import TileWMS from 'ol/source/TileWMS'\r
\r
const stadtplanLayer = new TileLayer({\r
  source: new TileWMS({\r
    url: 'https://stadtplan.example.com/wms',\r
    params: {\r
      'LAYERS': 'stadtplan_basiskarte',\r
      'TILED': true\r
    },\r
    serverType: 'geoserver'\r
  }),\r
  properties: { name: 'Stadtplan Basiskarte' }\r
})\r
\`\`\`\r
\r
## 🔗 Plugin-Chaining via Vuex-Paths\r
\r
**Szenario**: Ein AddressSearch-Plugin soll nach erfolgreicher Suche automatisch zum Ergebnis zoomen.\r
\r
### AddressSearch Store (vereinfacht)\r
\r
\`\`\`typescript\r
// In @polar/address-search\r
const store = {\r
  state: () => ({\r
    selectedResult: null\r
  }),\r
  mutations: {\r
    SET_RESULT(state, result) {\r
      state.selectedResult = result\r
    }\r
  }\r
}\r
\`\`\`\r
\r
### Zoom Store horcht auf AddressSearch\r
\r
\`\`\`typescript\r
// In @polar/zoom\r
const store = {\r
  actions: {\r
    // Action wird von außen getriggert\r
    zoomToCoordinate({ rootGetters }, { lon, lat }) {\r
      const map = rootGetters['map/getMap']\r
      map.getView().animate({\r
        center: fromLonLat([lon, lat]),\r
        zoom: 16,\r
        duration: 1000\r
      })\r
    }\r
  }\r
}\r
\`\`\`\r
\r
### Verknüpfung im Client\r
\r
\`\`\`typescript\r
// In polar-client.ts oder als Plugin-Option\r
store.watch(\r
  (state) => state.plugins.addressSearch.selectedResult,\r
  (newResult) => {\r
    if (newResult) {\r
      store.dispatch('plugins/zoom/zoomToCoordinate', {\r
        lon: newResult.lon,\r
        lat: newResult.lat\r
      })\r
    }\r
  }\r
)\r
\`\`\`\r
\r
**Alternative**: Events via Event-Bus (falls im Core implementiert)\r
\r
## 🛠️ Hands-on: Eigenen Client erstellen\r
\r
### Task: "Dashboard-Client" aufsetzen\r
\r
Erstelle einen spezialisierten Client für ein Verwaltungs-Dashboard.\r
\r
#### Requirements\r
- **Plugins**: Nur Zoom, LayerChooser, Legend (keine Adresssuche, kein Routing)\r
- **Map**: Fokus auf Berlin (13.4, 52.5), Zoom 10-18\r
- **Theme**: Custom Vuetify-Theme mit Blau-Tönen (Primary: #1E3A8A)\r
- **Logo**: Eigenes Logo in der TopBar\r
\r
#### Schritte\r
\r
1. **Client-Ordner erstellen**\r
   \`\`\`bash\r
   mkdir -p packages/clients/dashboard/src\r
   cd packages/clients/dashboard\r
   \`\`\`\r
\r
2. **package.json** (kopiere von \`generic/package.json\`, passe \`name\` an)\r
\r
3. **vite.config.js**\r
   \`\`\`javascript\r
   import { defineConfig } from 'vite'\r
   import vue from '@vitejs/plugin-vue'\r
   \r
   export default defineConfig({\r
     plugins: [vue()],\r
     server: {\r
       port: 5174\r
     }\r
   })\r
   \`\`\`\r
\r
4. **src/polar-client.ts** (adaptiere von Generic Client)\r
\r
5. **src/addPlugins.ts**\r
   \`\`\`typescript\r
   import { Zoom } from '@polar/zoom'\r
   import { LayerChooser } from '@polar/layer-chooser'\r
   import { Legend } from '@polar/legend'\r
   \r
   export const plugins = [\r
     Zoom({ position: 'top-left' }),\r
     LayerChooser({ position: 'top-right' }),\r
     Legend({ position: 'bottom-right' })\r
   ]\r
   \`\`\`\r
\r
6. **src/mapConfiguration.ts**\r
   \`\`\`typescript\r
   import { fromLonLat } from 'ol/proj'\r
   // ...\r
   center: fromLonLat([13.4, 52.5]), // Berlin\r
   zoom: 11\r
   \`\`\`\r
\r
7. **src/theme/dashboard-theme.ts**\r
   \`\`\`typescript\r
   export const dashboardTheme = {\r
     primary: '#1E3A8A',\r
     secondary: '#64748B',\r
     accent: '#3B82F6'\r
   }\r
   \`\`\`\r
\r
8. **NPM-Script hinzufügen** (in Root \`package.json\`)\r
   \`\`\`json\r
   "scripts": {\r
     "dashboard": "vite packages/clients/dashboard"\r
   }\r
   \`\`\`\r
\r
9. **Testen**: \`npm run dashboard\` → Browser öffnet auf \`localhost:5174\`\r
\r
#### Acceptance Criteria\r
- ✅ Dashboard-Client startet auf Port 5174\r
- ✅ Nur 3 Plugins sind sichtbar (Zoom, LayerChooser, Legend)\r
- ✅ Karte zeigt Berlin als Initial-View\r
- ✅ Custom-Theme ist aktiv (Buttons sind blau #1E3A8A)\r
- ✅ Keine Build-Errors\r
\r
## 📝 Knowledge Check\r
\r
1. **Warum sollte man Specialized Clients statt nur Generic Client nutzen?**\r
   - Kleinere Bundle-Size (nur benötigte Plugins)\r
   - Bessere Performance\r
   - Client-spezifisches Branding\r
   - Einfacheres Deployment (weniger Features = weniger Config)\r
\r
2. **Was ist der Unterschied zwischen \`addPlugins.ts\` und \`mapConfiguration.ts\`?**\r
   - \`addPlugins.ts\`: Plugin-Konfiguration (welche Features)\r
   - \`mapConfiguration.ts\`: OpenLayers-Map-Setup (Layers, View, Projection)\r
\r
3. **Wie kann ein Plugin auf State eines anderen Plugins zugreifen?**\r
   - Via \`rootGetters['plugins/otherPlugin/someGetter']\`\r
   - Oder via \`store.watch()\` für reaktive Updates\r
\r
4. **Was sind die Vor-/Nachteile von Plugin-Chaining via Vuex?**\r
   - ✅ Vorteile: Zentrale State-Management, Reactive Updates\r
   - ❌ Nachteile: Tight Coupling (Plugins kennen sich gegenseitig)\r
\r
5. **Wann sollte man Environment-Variables nutzen?**\r
   - API-URLs (unterschiedlich für Dev/Prod)\r
   - Feature-Flags (Features ein-/ausschalten)\r
   - Secrets (API-Keys, nur in CI/CD)\r
\r
## 🚀 Bonus-Challenge\r
\r
Erweitere den Dashboard-Client:\r
\r
1. **Multi-Tenancy**: Lade Map-Config basierend auf URL-Parameter (\`?tenant=berlin\`)\r
2. **Custom Plugin**: Erstelle ein "Dashboard-Widget"-Plugin, das Statistiken anzeigt\r
3. **Lazy Loading**: Lade Legend-Plugin nur, wenn User auf Button klickt\r
4. **Theme-Switcher**: Dark/Light-Mode-Toggle in der TopBar\r
5. **E2E-Test**: Playwright-Test, der Dashboard-Client startet und Zoom testet\r
\r
---\r
\r
**Checkpoint**: Du kannst jetzt vollständige POLAR-Clients entwickeln und deployen. Woche 4 fokussiert auf Testing und Qualitätssicherung.\r
`,xM=`# Woche 4: Testing & Qualität\r
\r
## 🎯 Lernziele\r
\r
Nach dieser Woche kannst du:\r
- Unit-Tests für Plugins mit Jest schreiben\r
- \`createTestMountParameters\` für Component-Tests nutzen\r
- E2E-Tests mit Playwright implementieren\r
- Code-Coverage messen und interpretieren\r
- Linting und Type-Checking in CI/CD integrieren\r
- Test-Driven Development (TDD) für Plugin-Entwicklung anwenden\r
\r
## 📚 Pflichtlektüre\r
\r
1. **jest.config.ts** (Repo-Root)\r
   - Jest-Konfiguration für Monorepo\r
   - Transform-Regeln für Vue/TypeScript\r
   - Coverage-Thresholds\r
\r
2. **packages/plugins/Zoom/__tests__/zoom.spec.ts**\r
   - Unit-Test-Beispiel für Plugin\r
   - Store-Modul-Tests (Actions, Mutations, Getters)\r
   - Component-Mount-Tests\r
\r
3. **packages/core/src/test-utils/createTestMountParameters.ts**\r
   - Helper-Funktion für Vue-Component-Tests\r
   - Mock-Store-Setup\r
   - Mount-Options mit Vuetify\r
\r
4. **e2e/zoom.spec.ts**\r
   - Playwright E2E-Test\r
   - Page-Interaktionen (click, fill, expect)\r
   - Screenshot-Vergleiche\r
\r
5. **e2e/fixtures/mapFixture.ts** (falls vorhanden)\r
   - Custom-Fixtures für Map-Tests\r
   - Map-Initialisierung in Tests\r
\r
6. **CONTRIBUTING.md → Testing-Section**\r
   - Test-Konventionen\r
   - PR-Requirements (Coverage ≥ 80%)\r
\r
## 🧪 Testing-Stack\r
\r
### 1. Unit-Tests: Jest + Vue Test Utils\r
\r
**Was wird getestet?**\r
- Store-Logik (Actions, Mutations, Getters)\r
- Component-Rendering und User-Interactions\r
- Utility-Funktionen\r
\r
**Tools**:\r
- **Jest**: Test-Runner und Assertion-Library\r
- **@vue/test-utils**: Vue-Component-Mounting\r
- **@pinia/testing** oder Vuex-Mocks: Store-Testing\r
\r
### 2. E2E-Tests: Playwright\r
\r
**Was wird getestet?**\r
- Vollständige User-Flows (z.B. Adresssuche → Zoom → Layer aktivieren)\r
- Cross-Browser-Kompatibilität\r
- Visual Regression (Screenshots)\r
\r
**Tools**:\r
- **Playwright**: Browser-Automatisierung\r
- **playwright-test**: Test-Runner mit Fixtures\r
\r
### 3. Type-Checking: TypeScript Compiler\r
\r
\`\`\`bash\r
npm run type-check  # tsc --noEmit\r
\`\`\`\r
\r
### 4. Linting: ESLint + Prettier\r
\r
\`\`\`bash\r
npm run lint        # ESLint\r
npm run format      # Prettier\r
\`\`\`\r
\r
## 📝 Unit-Tests schreiben\r
\r
### Store-Modul testen\r
\r
\`\`\`typescript\r
// packages/plugins/Counter/__tests__/counter.spec.ts\r
import { createStore } from 'vuex'\r
import { counterStoreModule } from '../index'\r
\r
describe('Counter Plugin Store', () => {\r
  let store\r
  \r
  beforeEach(() => {\r
    store = createStore({\r
      modules: {\r
        counter: counterStoreModule\r
      }\r
    })\r
  })\r
  \r
  describe('Mutations', () => {\r
    it('SET_COUNT sets the count', () => {\r
      store.commit('counter/SET_COUNT', 42)\r
      expect(store.state.counter.count).toBe(42)\r
    })\r
  })\r
  \r
  describe('Actions', () => {\r
    it('increment increases count by 1', async () => {\r
      await store.dispatch('counter/increment')\r
      expect(store.state.counter.count).toBe(1)\r
    })\r
    \r
    it('decrement decreases count by 1', async () => {\r
      store.commit('counter/SET_COUNT', 5)\r
      await store.dispatch('counter/decrement')\r
      expect(store.state.counter.count).toBe(4)\r
    })\r
  })\r
  \r
  describe('Getters', () => {\r
    it('getCount returns current count', () => {\r
      store.commit('counter/SET_COUNT', 10)\r
      expect(store.getters['counter/getCount']).toBe(10)\r
    })\r
    \r
    it('isPositive returns true when count > 0', () => {\r
      store.commit('counter/SET_COUNT', 1)\r
      expect(store.getters['counter/isPositive']).toBe(true)\r
    })\r
  })\r
})\r
\`\`\`\r
\r
### Component testen mit createTestMountParameters\r
\r
\`\`\`typescript\r
// packages/plugins/Counter/__tests__/CounterComponent.spec.ts\r
import { mount } from '@vue/test-utils'\r
import { createStore } from 'vuex'\r
import CounterComponent from '../components/CounterComponent.vue'\r
import { createTestMountParameters } from '@polar/core/test-utils'\r
\r
describe('CounterComponent', () => {\r
  let store\r
  \r
  beforeEach(() => {\r
    store = createStore({\r
      modules: {\r
        plugins: {\r
          namespaced: true,\r
          modules: {\r
            counter: {\r
              namespaced: true,\r
              state: { count: 0 },\r
              getters: { getCount: (state) => state.count },\r
              actions: { \r
                increment: jest.fn(),\r
                decrement: jest.fn()\r
              }\r
            }\r
          }\r
        }\r
      }\r
    })\r
  })\r
  \r
  it('renders current count', () => {\r
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))\r
    expect(wrapper.text()).toContain('0')\r
  })\r
  \r
  it('calls increment action when + button clicked', async () => {\r
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))\r
    \r
    await wrapper.find('[data-testid="increment-btn"]').trigger('click')\r
    \r
    expect(store._actions['plugins/counter/increment']).toHaveBeenCalled()\r
  })\r
  \r
  it('displays updated count after state change', async () => {\r
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))\r
    \r
    store.state.plugins.counter.count = 5\r
    await wrapper.vm.$nextTick()\r
    \r
    expect(wrapper.text()).toContain('5')\r
  })\r
})\r
\`\`\`\r
\r
### createTestMountParameters erklärt\r
\r
\`\`\`typescript\r
// Vereinfachte Implementierung\r
export function createTestMountParameters(options = {}) {\r
  return {\r
    global: {\r
      plugins: [\r
        options.store || createStore({}),\r
        createVuetify() // Vuetify-Plugin für Tests\r
      ],\r
      mocks: {\r
        $t: (key) => key // i18n-Mock\r
      }\r
    }\r
  }\r
}\r
\`\`\`\r
\r
## 🌐 E2E-Tests mit Playwright\r
\r
### Basis-Struktur\r
\r
\`\`\`typescript\r
// e2e/counter.spec.ts\r
import { test, expect } from '@playwright/test'\r
\r
test.describe('Counter Plugin', () => {\r
  test.beforeEach(async ({ page }) => {\r
    await page.goto('http://localhost:5173') // Snowbox\r
  })\r
  \r
  test('increments count on button click', async ({ page }) => {\r
    // Plugin ist sichtbar\r
    await expect(page.locator('.counter-plugin')).toBeVisible()\r
    \r
    // Initial-Wert ist 0\r
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('0')\r
    \r
    // + Button klicken\r
    await page.click('[data-testid="increment-btn"]')\r
    \r
    // Count ist jetzt 1\r
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('1')\r
  })\r
  \r
  test('decrements count on button click', async ({ page }) => {\r
    // Erst auf 5 erhöhen\r
    for (let i = 0; i < 5; i++) {\r
      await page.click('[data-testid="increment-btn"]')\r
    }\r
    \r
    // Dann dekrementieren\r
    await page.click('[data-testid="decrement-btn"]')\r
    \r
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('4')\r
  })\r
})\r
\`\`\`\r
\r
### Map-Interaktionen testen\r
\r
\`\`\`typescript\r
test('zoom buttons change map zoom level', async ({ page }) => {\r
  await page.goto('http://localhost:5173')\r
  \r
  // Initial-Zoom ermitteln (via Browser-Console-Aufruf)\r
  const initialZoom = await page.evaluate(() => {\r
    return window.polarMap.getView().getZoom()\r
  })\r
  \r
  // Zoom-In klicken\r
  await page.click('[data-testid="zoom-in-btn"]')\r
  \r
  // Warten auf Animation\r
  await page.waitForTimeout(500)\r
  \r
  // Neuer Zoom sollte höher sein\r
  const newZoom = await page.evaluate(() => {\r
    return window.polarMap.getView().getZoom()\r
  })\r
  \r
  expect(newZoom).toBeGreaterThan(initialZoom)\r
})\r
\`\`\`\r
\r
## 📊 Coverage messen\r
\r
\`\`\`bash\r
# Alle Tests mit Coverage\r
npm run test:coverage\r
\r
# Nur spezifisches Plugin\r
npm run test:coverage -- packages/plugins/Counter\r
\`\`\`\r
\r
### Coverage-Report interpretieren\r
\r
\`\`\`\r
File                     | % Stmts | % Branch | % Funcs | % Lines\r
-------------------------|---------|----------|---------|--------\r
Counter/index.ts         |   100   |   100    |   100   |   100\r
Counter/components/      |   95    |   80     |   100   |   95\r
-------------------------|---------|----------|---------|--------\r
All files                |   97.5  |   85     |   100   |   97.3\r
\`\`\`\r
\r
**Thresholds** (in \`jest.config.ts\`):\r
- Statements: ≥ 80%\r
- Branches: ≥ 75%\r
- Functions: ≥ 80%\r
- Lines: ≥ 80%\r
\r
## 🛠️ Hands-on: Tests für Counter-Plugin\r
\r
### Task 1: Unit-Tests schreiben\r
\r
Erstelle \`packages/plugins/Counter/__tests__/counter.spec.ts\` mit:\r
\r
1. **Store-Tests** (mindestens 8 Tests):\r
   - Mutations: SET_COUNT\r
   - Actions: increment, decrement, reset\r
   - Getters: getCount, isPositive, isNegative\r
\r
2. **Component-Tests** (mindestens 5 Tests):\r
   - Rendering mit initialem Count\r
   - Button-Clicks triggern Actions\r
   - Conditional Rendering (z.B. Disable Decrement-Button bei count=0)\r
\r
#### Acceptance Criteria\r
- ✅ Alle Tests passieren: \`npm test Counter\`\r
- ✅ Coverage ≥ 80% für alle Metriken\r
- ✅ Keine ESLint-Warnings\r
\r
### Task 2: E2E-Test schreiben\r
\r
Erstelle \`e2e/counter.spec.ts\` mit:\r
\r
1. **Basic Flow**: Increment → Decrement → Reset\r
2. **Edge Case**: Decrement bei count=0 (Button sollte disabled sein)\r
3. **Persistence** (falls implementiert): Count bleibt nach Page-Reload erhalten\r
\r
#### Acceptance Criteria\r
- ✅ E2E-Tests passieren: \`npm run test:e2e\`\r
- ✅ Test läuft in Chrome, Firefox und Safari (via Playwright-Config)\r
\r
### Task 3: TDD für neue Feature\r
\r
Implementiere "Increment by 10"-Feature **test-first**:\r
\r
1. **Schreibe Test** (rot):\r
   \`\`\`typescript\r
   it('incrementByTen increases count by 10', async () => {\r
     await store.dispatch('counter/incrementByTen')\r
     expect(store.state.counter.count).toBe(10)\r
   })\r
   \`\`\`\r
\r
2. **Test läuft fehl** (erwartungsgemäß)\r
\r
3. **Implementiere Feature**:\r
   \`\`\`typescript\r
   actions: {\r
     incrementByTen({ commit, state }) {\r
       commit('SET_COUNT', state.count + 10)\r
     }\r
   }\r
   \`\`\`\r
\r
4. **Test läuft durch** (grün)\r
\r
5. **Refactor**: Optional Code-Optimierungen\r
\r
## 📝 Knowledge Check\r
\r
1. **Was ist der Unterschied zwischen Unit-Tests und E2E-Tests?**\r
   - Unit: Isolierte Komponenten/Funktionen (schnell, fokussiert)\r
   - E2E: Vollständiger User-Flow (langsam, integrativ)\r
\r
2. **Warum sollte man Store-Logik separat von Components testen?**\r
   - Bessere Isolation (leichter zu debuggen)\r
   - Store ist oft wiederverwendbar (mehrere Components)\r
   - Einfachere Mocks\r
\r
3. **Was macht \`createTestMountParameters\`?**\r
   - Konfiguriert Vue Test Utils für POLAR-Components\r
   - Fügt Vuetify, Store, Router hinzu\r
   - Mockt globale Dependencies (z.B. i18n)\r
\r
4. **Wann sollte man Snapshots statt Assertions nutzen?**\r
   - Für komplexe HTML-Strukturen (z.B. gesamte Component)\r
   - Bei stabilem UI (wenig Änderungen erwartet)\r
   - **Vorsicht**: Snapshots können "blind" approven (immer reviewen!)\r
\r
5. **Wie testet man asynchrone Actions?**\r
   - Mit \`async/await\` oder \`.then()\`\r
   - \`flushPromises()\` für Vue-Updates\r
   - Mock-Timer für Debounce/Throttle\r
\r
## 🚀 Bonus-Challenge\r
\r
1. **Visual Regression**: Playwright-Screenshot-Tests für Counter-UI\r
2. **Mutation-Testing**: Nutze \`stryker-mutator\` für Mutation-Testing\r
3. **Performance-Tests**: Messe Rendering-Zeit mit Playwright-Trace\r
4. **A11y-Tests**: Integriere \`axe-playwright\` für Accessibility-Checks\r
5. **CI-Integration**: GitHub Actions Workflow für Tests + Coverage-Report\r
\r
---\r
\r
**Checkpoint**: Dein Code sollte jetzt robust getestet sein. In Woche 5 lernst du Release-Prozesse und NPM-Publishing.\r
`,CM=`# Woche 5: Release & Produktion\r
\r
## 🎯 Lernziele\r
\r
Nach dieser Woche kannst du:\r
- Semantic Versioning korrekt anwenden\r
- CHANGELOGs pflegen und automatisch generieren\r
- NPM-Packages publishen (Public und Private Registry)\r
- CI/CD-Pipelines für POLAR-Projekte konfigurieren\r
- Release-Branches und Git-Tags verwalten\r
- Breaking Changes kommunizieren und migrieren\r
\r
## 📚 Pflichtlektüre\r
\r
1. **publishPackages.js** (Repo-Root)\r
   - Automatisiertes NPM-Publishing-Script\r
   - Version-Bump-Logik\r
   - Dependency-Updates zwischen Packages\r
\r
2. **CHANGELOG.md** (Repo-Root oder einzelne Packages)\r
   - Struktur: [Unreleased], [1.2.0] - 2024-01-15\r
   - Kategorien: Added, Changed, Deprecated, Removed, Fixed, Security\r
\r
3. **CONTRIBUTING.md → Release-Section**\r
   - Release-Workflow\r
   - Version-Bump-Regeln\r
   - PR-Labels für Changelog-Generierung\r
\r
4. **.github/workflows/release.yml** (falls vorhanden)\r
   - GitHub Actions für automatische Releases\r
   - NPM-Token-Handling\r
   - Build + Test + Publish-Pipeline\r
\r
5. **packages/core/package.json → publishConfig**\r
   - NPM-Registry-Konfiguration\r
   - Access-Level (public/restricted)\r
\r
6. **Semver-Dokumentation**: https://semver.org/lang/de/\r
   - MAJOR.MINOR.PATCH-Schema\r
   - Breaking Changes vs. Features vs. Bugfixes\r
\r
## 📦 Semantic Versioning\r
\r
### Schema: MAJOR.MINOR.PATCH\r
\r
- **MAJOR** (1.0.0 → 2.0.0): Breaking Changes\r
  - API-Änderungen, die bestehenden Code brechen\r
  - Beispiel: Plugin-Factory-Signatur ändert sich\r
\r
- **MINOR** (1.1.0 → 1.2.0): Neue Features (backward-compatible)\r
  - Neue Plugins, neue Actions in Store\r
  - Beispiel: Neues "Export"-Feature im LayerChooser\r
\r
- **PATCH** (1.1.1 → 1.1.2): Bugfixes\r
  - Keine neuen Features, nur Korrekturen\r
  - Beispiel: Zoom-Button funktionierte nicht im Safari\r
\r
### Pre-Release-Versionen\r
\r
- **Alpha**: \`1.2.0-alpha.1\` (intern, instabil)\r
- **Beta**: \`1.2.0-beta.1\` (extern, Feature-Complete aber buggy)\r
- **Release Candidate**: \`1.2.0-rc.1\` (letzte Tests vor Release)\r
\r
### Version-Dependencies\r
\r
\`\`\`json\r
// package.json\r
{\r
  "dependencies": {\r
    "@polar/core": "^2.1.0",     // Compatible mit 2.x.x (< 3.0.0)\r
    "@polar/zoom": "~1.3.2",     // Compatible mit 1.3.x (< 1.4.0)\r
    "vue": "3.4.0"               // Exakt 3.4.0\r
  }\r
}\r
\`\`\`\r
\r
Regeln:\r
- **^** (Caret): MINOR und PATCH updates ok\r
- **~** (Tilde): Nur PATCH updates ok\r
- **Keine Prefix**: Exakte Version\r
\r
## 📝 CHANGELOG pflegen\r
\r
### Struktur (Keep a Changelog Format)\r
\r
\`\`\`markdown\r
# Changelog\r
\r
All notable changes to this project will be documented in this file.\r
\r
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),\r
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\r
\r
## [Unreleased]\r
\r
### Added\r
- New "MeasureTool" plugin for distance and area measurements\r
\r
### Changed\r
- Zoom animation duration reduced from 1000ms to 500ms\r
\r
### Fixed\r
- LayerChooser: Fixed drag-and-drop on touch devices\r
\r
## [2.1.0] - 2024-02-10\r
\r
### Added\r
- AddressSearch: Support for custom geocoding services\r
- New \`onMapReady\` lifecycle hook for plugins\r
\r
### Changed\r
- **BREAKING**: Renamed \`createPolarMap\` to \`createMap\`\r
- Updated Vuetify to 3.5.0\r
\r
### Deprecated\r
- \`oldPluginAPI\` will be removed in v3.0.0\r
\r
### Removed\r
- IE11 support (EOL)\r
\r
### Fixed\r
- Fixed memory leak in OpenLayers event listeners\r
\r
### Security\r
- Updated dependencies with known vulnerabilities\r
\r
## [2.0.0] - 2024-01-15\r
\r
...\r
\`\`\`\r
\r
### Automatische Generierung\r
\r
Tools:\r
- **conventional-changelog**: Generiert CHANGELOG aus Git-Commits (wenn Conventional Commits genutzt werden)\r
- **lerna-changelog**: Für Monorepos (liest PR-Labels)\r
\r
\`\`\`bash\r
# Mit conventional-changelog\r
npx conventional-changelog -p angular -i CHANGELOG.md -s\r
\`\`\`\r
\r
### Conventional Commits\r
\r
\`\`\`bash\r
# Format: <type>(<scope>): <subject>\r
\r
feat(zoom): add custom animation duration option\r
fix(layer-chooser): resolve drag-and-drop bug on iOS\r
docs(readme): update installation instructions\r
chore(deps): bump vue from 3.3.0 to 3.4.0\r
refactor(core): simplify map initialization logic\r
test(zoom): add unit tests for zoom actions\r
\`\`\`\r
\r
Types:\r
- \`feat\`: Neue Feature → MINOR version bump\r
- \`fix\`: Bugfix → PATCH version bump\r
- \`feat!\` oder \`BREAKING CHANGE:\`: Breaking Change → MAJOR version bump\r
\r
## 🚀 Release-Workflow\r
\r
### 1. Pre-Release-Checks\r
\r
\`\`\`bash\r
# Alle Tests laufen durch\r
npm test\r
npm run test:e2e\r
\r
# Type-Check ohne Fehler\r
npm run type-check\r
\r
# Linting erfolgreich\r
npm run lint\r
\r
# Build funktioniert\r
npm run build:all\r
\`\`\`\r
\r
### 2. Version Bump\r
\r
\`\`\`bash\r
# Manuell in package.json(s)\r
# Oder mit Script:\r
npm run version:bump -- --type minor\r
# → Bumpt alle Packages von 2.0.0 auf 2.1.0\r
\`\`\`\r
\r
### 3. CHANGELOG aktualisieren\r
\r
\`\`\`markdown\r
## [Unreleased]\r
→\r
## [2.1.0] - 2024-02-13\r
\r
### Added\r
- ...\r
\`\`\`\r
\r
### 4. Commit + Tag\r
\r
\`\`\`bash\r
git add .\r
git commit -m "chore(release): v2.1.0"\r
git tag v2.1.0\r
git push origin main --tags\r
\`\`\`\r
\r
### 5. NPM-Publishing\r
\r
\`\`\`bash\r
# Manuell\r
npm run publish:packages\r
\r
# Oder automatisch via CI/CD (siehe unten)\r
\`\`\`\r
\r
### 6. GitHub Release erstellen\r
\r
- Gehe zu GitHub → Releases → "Draft a new release"\r
- Tag: \`v2.1.0\`\r
- Title: \`Release 2.1.0\`\r
- Description: Kopiere CHANGELOG-Abschnitt\r
- Attach Assets (optional): Build-Artefakte, Docs\r
\r
## 🤖 CI/CD mit GitHub Actions\r
\r
### .github/workflows/release.yml\r
\r
\`\`\`yaml\r
name: Release\r
\r
on:\r
  push:\r
    tags:\r
      - 'v*.*.*'\r
\r
jobs:\r
  release:\r
    runs-on: ubuntu-latest\r
    steps:\r
      - uses: actions/checkout@v4\r
      \r
      - name: Setup Node.js\r
        uses: actions/setup-node@v4\r
        with:\r
          node-version: '18'\r
          registry-url: 'https://registry.npmjs.org'\r
      \r
      - name: Install dependencies\r
        run: npm ci\r
      \r
      - name: Run tests\r
        run: npm test\r
      \r
      - name: Build packages\r
        run: npm run build:all\r
      \r
      - name: Publish to NPM\r
        run: npm run publish:packages\r
        env:\r
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}\r
      \r
      - name: Create GitHub Release\r
        uses: actions/create-release@v1\r
        env:\r
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}\r
        with:\r
          tag_name: \${{ github.ref }}\r
          release_name: Release \${{ github.ref }}\r
          body_path: ./CHANGELOG.md\r
\`\`\`\r
\r
### NPM-Token konfigurieren\r
\r
1. Generiere Token auf npmjs.com: Account Settings → Access Tokens → Generate New Token (Automation)\r
2. Füge Token zu GitHub Secrets hinzu: Repo Settings → Secrets and variables → Actions → New repository secret\r
   - Name: \`NPM_TOKEN\`\r
   - Value: \`npm_...\`\r
\r
## 🛠️ Hands-on: Release durchführen\r
\r
### Task: Release v1.0.0 des Counter-Plugins\r
\r
#### Voraussetzungen\r
- Counter-Plugin ist fertig entwickelt\r
- Tests sind geschrieben und passieren\r
- Dokumentation ist aktuell\r
\r
#### Schritte\r
\r
1. **CHANGELOG erstellen**: \`packages/plugins/Counter/CHANGELOG.md\`\r
   \`\`\`markdown\r
   # Changelog - @polar/counter\r
   \r
   ## [1.0.0] - 2024-02-13\r
   \r
   ### Added\r
   - Initial release\r
   - Increment, decrement, reset functionality\r
   - Vuetify-styled UI\r
   - Unit and E2E tests\r
   \`\`\`\r
\r
2. **package.json aktualisieren**\r
   \`\`\`json\r
   {\r
     "name": "@polar/counter",\r
     "version": "1.0.0",\r
     "description": "Simple counter plugin for POLAR",\r
     "main": "dist/index.js",\r
     "types": "dist/index.d.ts",\r
     "publishConfig": {\r
       "access": "public"\r
     }\r
   }\r
   \`\`\`\r
\r
3. **README erstellen**: \`packages/plugins/Counter/README.md\`\r
   - Installation: \`npm install @polar/counter\`\r
   - Usage-Beispiel\r
   - API-Dokumentation (Options, Store-Actions, etc.)\r
\r
4. **Build testen**\r
   \`\`\`bash\r
   npm run build --scope=@polar/counter\r
   # Überprüfe dist/-Ordner\r
   \`\`\`\r
\r
5. **Dry-Run-Publish** (testet ohne zu publishen)\r
   \`\`\`bash\r
   cd packages/plugins/Counter\r
   npm publish --dry-run\r
   \`\`\`\r
\r
6. **Publish** (falls alles ok)\r
   \`\`\`bash\r
   npm publish\r
   \`\`\`\r
\r
7. **Git-Tag**\r
   \`\`\`bash\r
   git add .\r
   git commit -m "chore(counter): release v1.0.0"\r
   git tag counter-v1.0.0\r
   git push origin main --tags\r
   \`\`\`\r
\r
#### Acceptance Criteria\r
- ✅ Package ist auf NPM verfügbar: \`npm view @polar/counter\`\r
- ✅ README wird auf NPM-Seite angezeigt\r
- ✅ Git-Tag existiert im Repository\r
- ✅ CHANGELOG ist vollständig\r
\r
## 🔧 Breaking Changes managen\r
\r
### Szenario: API-Änderung in Plugin-Factory\r
\r
**Alt** (v1.x):\r
\`\`\`typescript\r
export const Zoom = (position: string) => ({ ... })\r
\`\`\`\r
\r
**Neu** (v2.0):\r
\`\`\`typescript\r
export const Zoom = (options: { position: string, duration?: number }) => ({ ... })\r
\`\`\`\r
\r
### Migration Guide erstellen\r
\r
\`\`\`markdown\r
# Migration Guide: v1.x → v2.0\r
\r
## Breaking Changes\r
\r
### Plugin Factories now accept Options Object\r
\r
**Before** (v1.x):\r
\`\`\`typescript\r
Zoom('top-left')\r
\`\`\`\r
\r
**After** (v2.0):\r
\`\`\`typescript\r
Zoom({ position: 'top-left' })\r
\`\`\`\r
\r
**Migration Script** (optional):\r
Find-and-replace in your \`addPlugins.ts\`:\r
- Search: \`Zoom\\('([^']+)'\\)\`\r
- Replace: \`Zoom({ position: '$1' })\`\r
\`\`\`\r
\r
### Deprecation-Phase nutzen\r
\r
\`\`\`typescript\r
export const Zoom = (positionOrOptions) => {\r
  if (typeof positionOrOptions === 'string') {\r
    // Alt-API (deprecated)\r
    console.warn('Passing position as string is deprecated. Use { position: "..." } instead.')\r
    return createZoomPlugin({ position: positionOrOptions })\r
  }\r
  // Neu-API\r
  return createZoomPlugin(positionOrOptions)\r
}\r
\`\`\`\r
\r
→ User bekommen Warning, Code funktioniert aber noch (grace period)\r
\r
## 📝 Knowledge Check\r
\r
1. **Wann ist ein MAJOR-Version-Bump nötig?**\r
   - Bei Breaking Changes (API-Änderungen, entfernte Features)\r
\r
2. **Was gehört in einen CHANGELOG-Eintrag?**\r
   - Kategorien: Added, Changed, Fixed, Deprecated, Removed, Security\r
   - User-facing Changes (interne Refactorings meist nicht)\r
\r
3. **Warum sind Conventional Commits hilfreich?**\r
   - Automatische CHANGELOG-Generierung\r
   - Automatische Version-Bumps (via semantic-release)\r
   - Bessere Git-History-Lesbarkeit\r
\r
4. **Was ist der Unterschied zwischen \`npm publish\` und \`npm pack\`?**\r
   - \`npm pack\`: Erstellt .tgz-File (lokal testbar mit \`npm install ./package.tgz\`)\r
   - \`npm publish\`: Uploaded Package zu NPM-Registry\r
\r
5. **Wie kommuniziert man Breaking Changes an User?**\r
   - CHANGELOG mit **BREAKING** Tag\r
   - Migration Guide\r
   - Major-Version-Bump (semver)\r
   - Deprecation-Warnings (wenn möglich)\r
\r
## 🚀 Bonus-Challenge\r
\r
1. **Monorepo-Releases**: Nutze \`lerna\` oder \`nx\` für koordinierte Multi-Package-Releases\r
2. **Automated Releases**: Konfiguriere \`semantic-release\` für vollautomatisches Publishing\r
3. **Private NPM Registry**: Richte Verdaccio (lokal) oder GitHub Packages ein\r
4. **Release Notes**: Generiere Release-Notes aus GitHub-Issues (Labels "enhancement", "bug")\r
5. **Rollback-Strategie**: Dokumentiere, wie ein fehlerhaftes Release zurückgezogen wird (\`npm unpublish\` Regeln)\r
\r
---\r
\r
**Checkpoint**: Du beherrschst jetzt den kompletten POLAR-Development-Lifecycle von Setup bis Release. Bereit für das Capstone-Projekt!\r
`,kM=`Unser empfohlener Flow:\r
\r
- Mocha orchestriert Suites und Hooks\r
- Chai bietet ausdrucksstarke Assertions\r
- Sinon mockt Timer, Netzwerk-Calls und DOM-APIs\r
\r
Übe, für jede UI-Store-Interaktion einen Happy-Path- und einen Failure-Path-Test zu schreiben.\r
`,PM=`Vue ist das Framework, das unsere Benutzeroberflächen und Masterportal-Widgets antreibt. Es kümmert sich um alles — vom Rendern dynamischer Inhalte über das Verwalten des Anwendungszustands bis zum Reagieren auf Benutzerinteraktionen. Das Verständnis der Vue-Grundlagen ist essenziell für das Erstellen und Warten der Komponenten, mit denen du täglich arbeiten wirst.\r
\r
## Warum Vue wichtig ist\r
\r
Vue gibt uns eine deklarative, reaktive Art, Interfaces zu erstellen. Anstatt das DOM manuell zu aktualisieren, wenn sich Daten ändern, hält Vue die UI automatisch mit dem Anwendungszustand synchron. Das macht unseren Code sauberer, vorhersagbarer und einfacher zu testen. In Masterportal wrappen Vue-Komponenten Karten-Interaktionen, Layer-Controls und Konfigurationspanels.\r
\r
## Was du wissen musst\r
\r
Du solltest vertraut sein mit:\r
\r
- **Single File Components (SFC)** — wie \`<script setup>\`, \`<template>\` und \`<style>\` zusammenarbeiten\r
- **Reaktivität** — Verwendung von \`ref\` und \`reactive\`, um Daten zu erstellen, die UI-Updates auslösen\r
- **Komponenten-Kommunikation** — Props zum Weitergeben von Daten nach unten, Emits zum Senden von Events nach oben\r
- **Lifecycle Hooks** — wann Komponenten mounten, updaten und unmounten\r
- **Composables** — Extrahieren und Wiederverwenden reaktiver Logik über Komponenten hinweg\r
- **Vuex Patterns** — wie wir den Anwendungszustand in Modulen organisieren\r
\r
Diese Konzepte erscheinen in jeder Vue-Komponente, der du begegnen wirst. Egal ob du ein neues Widget baust, bestehende Funktionalität aktualisierst oder Probleme debuggst — du musst verstehen, wie Vues Reaktivitätssystem und Komponentenmodell funktionieren.\r
\r
## Lernpfad\r
\r
Fokussiere dich zuerst auf die Kernkonzepte. Die externen Ressourcen in späteren Lektionen bieten detaillierte Erklärungen und interaktive Beispiele. Achte besonders auf die Composition API (mit \`<script setup>\`), da wir diese in unserer Codebasis verwenden, nicht die ältere Options API.\r
\r
Wenn reaktive Daten, Lifecycle Hooks oder Vuex-Module unklar sind, sprich früh an. Deine Mentor:innen können dich durch praktische Beispiele aus unseren echten Widgets führen, um diese Muster konkret zu machen, bevor du mit der Implementierung von Features beginnst.\r
`,TM=`# Vuex State Management Patterns\r
\r
Vuex ist die zentrale State-Management-Lösung für Vue-Anwendungen. Es bietet einen **Single Source of Truth** für den gesamten Anwendungszustand und ermöglicht vorhersagbare State-Änderungen durch ein strukturiertes Pattern.\r
\r
---\r
\r
## Grundlegende Konzepte\r
\r
### State\r
Der State ist das zentrale Datenobjekt deiner Anwendung. Alle Komponenten können darauf zugreifen, aber niemals direkt verändern.\r
\r
\`\`\`javascript\r
// store/modules/user.js\r
const state = {\r
  name: '',\r
  role: '',\r
  isAuthenticated: false\r
}\r
\`\`\`\r
\r
### Mutations\r
Mutations sind die **einzige** Möglichkeit, den State zu ändern. Sie müssen **synchron** sein.\r
\r
\`\`\`javascript\r
const mutations = {\r
  setUser(state, payload) {\r
    state.name = payload.name;\r
    state.role = payload.role;\r
    state.isAuthenticated = true;\r
  },\r
  \r
  clearUser(state) {\r
    state.name = '';\r
    state.role = '';\r
    state.isAuthenticated = false;\r
  }\r
}\r
\`\`\`\r
\r
> **Wichtig:** Mutations erhalten immer \`state\` als ersten Parameter und optional einen \`payload\` als zweiten.\r
\r
### Actions\r
Actions enthalten **asynchrone** Logik (API-Calls, Timeouts) und committen Mutations.\r
\r
\`\`\`javascript\r
const actions = {\r
  async login({ commit }, credentials) {\r
    try {\r
      const response = await authApi.login(credentials);\r
      commit('setUser', response.data);\r
      return response.data;\r
    } catch (error) {\r
      console.error('Login fehlgeschlagen:', error);\r
      throw error;\r
    }\r
  },\r
  \r
  logout({ commit }) {\r
    commit('clearUser');\r
    // Optional: API-Call zum Invalidieren des Tokens\r
  }\r
}\r
\`\`\`\r
\r
### Getters\r
Getters sind berechnete Properties für den Store – ideal für abgeleitete Daten.\r
\r
\`\`\`javascript\r
const getters = {\r
  fullName: (state) => \`\${state.firstName} \${state.lastName}\`,\r
  \r
  isAdmin: (state) => state.role === 'admin',\r
  \r
  // Getter können andere Getter verwenden\r
  greeting: (state, getters) => \`Hallo, \${getters.fullName}!\`\r
}\r
\`\`\`\r
\r
---\r
\r
## Module mit Namespaces\r
\r
Für größere Anwendungen organisierst du den Store in **namespaced modules**.\r
\r
\`\`\`javascript\r
// store/index.js\r
import { createStore } from 'vuex'\r
import user from './modules/user'\r
import progress from './modules/progress'\r
import map from './modules/map'\r
\r
export default createStore({\r
  modules: {\r
    user,\r
    progress,\r
    map\r
  }\r
})\r
\`\`\`\r
\r
\`\`\`javascript\r
// store/modules/progress.js\r
export default {\r
  namespaced: true,  // Wichtig!\r
  \r
  state: {\r
    completedLessons: [],\r
    moduleProgress: {}\r
  },\r
  \r
  mutations: {\r
    completeLesson(state, { moduleId, lessonId }) {\r
      const key = \`\${moduleId}-\${lessonId}\`;\r
      if (!state.completedLessons.includes(key)) {\r
        state.completedLessons.push(key);\r
      }\r
    }\r
  },\r
  \r
  getters: {\r
    moduleProgress: (state) => (moduleId) => {\r
      // Berechne Fortschritt für ein Modul\r
      const lessons = state.completedLessons.filter(\r
        key => key.startsWith(moduleId)\r
      );\r
      return lessons.length;\r
    }\r
  },\r
  \r
  actions: {\r
    async syncProgress({ commit, state }) {\r
      await api.saveProgress(state.completedLessons);\r
    }\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
## Verwendung in Komponenten\r
\r
### State & Getters abrufen\r
\r
\`\`\`vue\r
<script setup>\r
import { computed } from 'vue'\r
import { useStore } from 'vuex'\r
\r
const store = useStore()\r
\r
// State direkt\r
const userName = computed(() => store.state.user.name)\r
\r
// Mit Getter\r
const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])\r
\r
// Modularer Getter mit Parameter\r
const moduleProgress = computed(() => \r
  store.getters['progress/moduleProgress']('js-fundamentals')\r
)\r
<\/script>\r
\`\`\`\r
\r
### Mutations committen\r
\r
\`\`\`javascript\r
// Ohne Namespace\r
store.commit('setUser', userData)\r
\r
// Mit Namespace\r
store.commit('progress/completeLesson', {\r
  moduleId: 'js-fundamentals',\r
  lessonId: 'intro'\r
})\r
\`\`\`\r
\r
### Actions dispatchen\r
\r
\`\`\`javascript\r
// Asynchron mit await\r
const user = await store.dispatch('user/login', {\r
  email: 'user@example.com',\r
  password: 'secret'\r
})\r
\r
// Oder mit Promise\r
store.dispatch('progress/syncProgress')\r
  .then(() => console.log('Gespeichert!'))\r
  .catch(err => console.error(err))\r
\`\`\`\r
\r
---\r
\r
## ✅ Best Practices für unser Team\r
\r
### 1. Modulstruktur spiegelt Backend-Konzepte\r
Organisiere Module analog zu Backend-Entities:\r
\r
\`\`\`\r
store/\r
├── modules/\r
│   ├── user.js       # Authentifizierung, Profil\r
│   ├── progress.js   # Lernfortschritt\r
│   ├── badges.js     # Errungenschaften\r
│   ├── tracks.js     # Track-Aktivierung\r
│   └── map.js        # Kartenzustand (Masterportal)\r
\`\`\`\r
\r
### 2. Getter für berechnete Daten\r
Vermeide Logik in Komponenten – lagere sie in Getter aus:\r
\r
\`\`\`javascript\r
// ❌ Schlecht: Logik in Komponente\r
const progress = computed(() => {\r
  const total = modules.value.length\r
  const completed = modules.value.filter(m => m.completed).length\r
  return Math.round((completed / total) * 100)\r
})\r
\r
// ✅ Gut: Getter im Store\r
// store/getters.js\r
overallProgress: (state) => {\r
  const total = state.modules.length\r
  const completed = state.modules.filter(m => m.completed).length\r
  return Math.round((completed / total) * 100)\r
}\r
\`\`\`\r
\r
### 3. Mutations bleiben synchron\r
\`\`\`javascript\r
// ❌ Niemals async in Mutations\r
mutations: {\r
  async loadUser(state) {  // FALSCH!\r
    const user = await api.getUser()\r
    state.user = user\r
  }\r
}\r
\r
// ✅ Async-Logik in Actions\r
actions: {\r
  async loadUser({ commit }) {\r
    const user = await api.getUser()\r
    commit('setUser', user)\r
  }\r
}\r
\`\`\`\r
\r
### 4. Payload-Objekte statt mehrerer Parameter\r
\`\`\`javascript\r
// ❌ Unübersichtlich\r
commit('updateLesson', moduleId, lessonId, completed, timestamp)\r
\r
// ✅ Sauber mit Objekt\r
commit('updateLesson', {\r
  moduleId,\r
  lessonId,\r
  completed,\r
  timestamp\r
})\r
\`\`\`\r
\r
---\r
\r
## 💼 Use Cases aus dieser Academy\r
\r
### Use Case 1: Lesson Completion\r
\`\`\`javascript\r
// In LessonRenderer.vue\r
const markCompleted = () => {\r
  store.commit('progress/completeLesson', {\r
    moduleId: props.moduleId,\r
    lessonId: props.lesson.id\r
  })\r
  \r
  // Badge-Logik wird durch Watcher getriggert\r
}\r
\`\`\`\r
\r
### Use Case 2: Badge-Vergabe mit Watchers\r
\`\`\`javascript\r
// In DashboardView.vue\r
watch(\r
  () => store.getters['progress/moduleProgress']('vue-basics'),\r
  (progress) => {\r
    if (progress === 100) {\r
      const badge = getBadgeForModule('vue-basics')\r
      if (!store.getters['badges/hasBadge'](badge.id)) {\r
        store.commit('badges/earnBadge', badge.id)\r
      }\r
    }\r
  }\r
)\r
\`\`\`\r
\r
### Use Case 3: Track-Freischaltung\r
\`\`\`javascript\r
// store/modules/tracks.js\r
mutations: {\r
  toggleTrack(state, trackId) {\r
    if (state.enabled.includes(trackId)) {\r
      state.enabled = state.enabled.filter(id => id !== trackId)\r
    } else {\r
      state.enabled.push(trackId)\r
    }\r
  }\r
}\r
\r
getters: {\r
  isTrackEnabled: (state) => (trackId) => {\r
    return state.enabled.includes(trackId)\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
## 🔍 Debugging-Tipps\r
\r
### Vue DevTools\r
Nutze die Vue DevTools Browser-Extension:\r
- **Vuex Tab**: Sieh alle State-Änderungen in Echtzeit\r
- **Time Travel**: Springe zwischen Mutations zurück\r
- **State Inspector**: Untersuche den aktuellen Store-Zustand\r
\r
### Console Logging\r
\`\`\`javascript\r
mutations: {\r
  completeLesson(state, payload) {\r
    console.log('[MUTATION] completeLesson:', payload)\r
    // ... Mutation-Logik\r
  }\r
}\r
\`\`\`\r
\r
### Strict Mode (nur Development)\r
\`\`\`javascript\r
export default createStore({\r
  strict: process.env.NODE_ENV !== 'production',\r
  // ...\r
})\r
\`\`\`\r
\r
> **Hinweis:** Im Strict Mode wirft Vuex einen Error, wenn State außerhalb von Mutations geändert wird. Dies hilft dir, unbeabsichtigte State-Änderungen zu vermeiden.\r
\r
---\r
\r
## 📝 Zusammenfassung\r
\r
✅ **State** = Single Source of Truth\r
✅ **Mutations** = Synchrone State-Änderungen\r
✅ **Actions** = Asynchrone Logik + Mutations committen\r
✅ **Getters** = Berechnete/abgeleitete Daten\r
✅ **Modules** = Organisiere großen Store in logische Einheiten\r
✅ **Namespaces** = Vermeide Namenskonflikte zwischen Modulen\r
\r
Studiere den Store dieser Academy (\`src/store/\`) als Referenz für Best Practices in echten Projekten!\r
`;function ld(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ui=ld();function W0(t){Ui=t}const V0=/[&<>"']/,RM=new RegExp(V0.source,"g"),U0=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,AM=new RegExp(U0.source,"g"),IM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xg=t=>IM[t];function gn(t,e){if(e){if(V0.test(t))return t.replace(RM,xg)}else if(U0.test(t))return t.replace(AM,xg);return t}const LM=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function OM(t){return t.replace(LM,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const FM=/(^|[^\[])\^/g;function Qe(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(FM,"$1"),n=n.replace(i,o),r},getRegex:()=>new RegExp(n,e)};return r}function Cg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Fo={exec:()=>null};function kg(t,e){const n=t.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function qa(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function NM(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Pg(t,e,n,r){const i=e.href,s=e.title?gn(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:n,href:i,title:s,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,a}return{type:"image",raw:n,href:i,title:s,text:gn(o)}}function DM(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=r.length?i.slice(r.length):i}).join(`
`)}class Fl{constructor(e){tt(this,"options");tt(this,"rules");tt(this,"lexer");this.options=e||Ui}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:qa(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=DM(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=qa(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const r=qa(n[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(r);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:s,text:r}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,s={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const o=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let u=!1;if(!(n=o.exec(e))||this.rules.block.hr.test(e))break;a=n[0],e=e.substring(a.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,_=>" ".repeat(3*_.length)),d=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=h.trimStart()):(f=n[2].search(/[^ ]/),f=f>4?1:f,l=h.slice(f),f+=n[1].length);let g=!1;if(!h&&/^ *$/.test(d)&&(a+=d+`
`,e=e.substring(d.length+1),u=!0),!u){const _=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),w=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),b=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const E=e.split(`
`,1)[0];if(d=E,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),w.test(d)||b.test(d)||_.test(d)||y.test(e))break;if(d.search(/[^ ]/)>=f||!d.trim())l+=`
`+d.slice(f);else{if(g||h.search(/[^ ]/)>=4||w.test(h)||b.test(h)||y.test(h))break;l+=`
`+d}!g&&!d.trim()&&(g=!0),a+=E+`
`,e=e.substring(E.length+1),h=d.slice(f)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let m=null,p;this.options.gfm&&(m=/^\[[ xX]\] /.exec(l),m&&(p=m[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!m,checked:p,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const h=s.items[u].tokens.filter(f=>f.type==="space"),d=h.length>0&&h.some(f=>/\n.*\n/.test(f.raw));s.loose=d}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:s}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=kg(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),s=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const a of i)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of r)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)o.rows.push(kg(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:gn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=qa(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=NM(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],s=o[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Pg(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),s=n[i.toLowerCase()];if(!s){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return Pg(r,s,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const o=[...i[0]].length-1;let a,l,c=o,u=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(i=h.exec(n))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=[...a].length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=[...i[0]][0].length,f=e.slice(0,o+i.index+d+l);if(Math.min(o,l)%2){const m=f.slice(1,-1);return{type:"em",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}const g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),s=/^ /.test(r)&&/ $/.test(r);return i&&s&&(r=r.substring(1,r.length-1)),r=gn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=gn(n[1]),i="mailto:"+r):(r=gn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=gn(n[0]),s="mailto:"+i;else{let o;do o=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(o!==n[0]);i=gn(n[0]),n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=gn(n[0]),{type:"text",raw:n[0],text:r}}}}const GM=/^(?: *(?:\n|$))+/,zM=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,BM=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ba=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,jM=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,K0=/(?:[*+-]|\d{1,9}[.)])/,$0=Qe(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,K0).getRegex(),cd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,WM=/^[^\n]+/,ud=/(?!\s*\])(?:\\.|[^\[\]\\])+/,VM=Qe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ud).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),UM=Qe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,K0).getRegex(),Mc="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",hd=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,KM=Qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",hd).replace("tag",Mc).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),q0=Qe(cd).replace("hr",ba).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mc).getRegex(),$M=Qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",q0).getRegex(),dd={blockquote:$M,code:zM,def:VM,fences:BM,heading:jM,hr:ba,html:KM,lheading:$0,list:UM,newline:GM,paragraph:q0,table:Fo,text:WM},Tg=Qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ba).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mc).getRegex(),qM={...dd,table:Tg,paragraph:Qe(cd).replace("hr",ba).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Tg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mc).getRegex()},HM={...dd,html:Qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",hd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fo,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Qe(cd).replace("hr",ba).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$0).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},H0=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ZM=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Z0=/^( {2,}|\\)\n(?!\s*$)/,XM=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ea="\\p{P}$+<=>`^|~",YM=Qe(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ea).getRegex(),JM=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,QM=Qe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ea).getRegex(),ex=Qe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ea).getRegex(),tx=Qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ea).getRegex(),nx=Qe(/\\([punct])/,"gu").replace(/punct/g,Ea).getRegex(),rx=Qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ix=Qe(hd).replace("(?:-->|$)","-->").getRegex(),sx=Qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ix).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Nl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ox=Qe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Nl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),X0=Qe(/^!?\[(label)\]\[(ref)\]/).replace("label",Nl).replace("ref",ud).getRegex(),Y0=Qe(/^!?\[(ref)\](?:\[\])?/).replace("ref",ud).getRegex(),ax=Qe("reflink|nolink(?!\\()","g").replace("reflink",X0).replace("nolink",Y0).getRegex(),fd={_backpedal:Fo,anyPunctuation:nx,autolink:rx,blockSkip:JM,br:Z0,code:ZM,del:Fo,emStrongLDelim:QM,emStrongRDelimAst:ex,emStrongRDelimUnd:tx,escape:H0,link:ox,nolink:Y0,punctuation:YM,reflink:X0,reflinkSearch:ax,tag:sx,text:XM,url:Fo},lx={...fd,link:Qe(/^!?\[(label)\]\((.*?)\)/).replace("label",Nl).getRegex(),reflink:Qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Nl).getRegex()},eh={...fd,escape:Qe(H0).replace("])","~|])").getRegex(),url:Qe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},cx={...eh,br:Qe(Z0).replace("{2,}","*").getRegex(),text:Qe(eh.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ha={normal:dd,gfm:qM,pedantic:HM},ho={normal:fd,gfm:eh,breaks:cx,pedantic:lx};class Xn{constructor(e){tt(this,"tokens");tt(this,"options");tt(this,"state");tt(this,"tokenizer");tt(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ui,this.options.tokenizer=this.options.tokenizer||new Fl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ha.normal,inline:ho.normal};this.options.pedantic?(n.block=Ha.pedantic,n.inline=ho.pedantic):this.options.gfm&&(n.block=Ha.gfm,this.options.breaks?n.inline=ho.breaks:n.inline=ho.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ha,inline:ho}}static lex(e,n){return new Xn(n).lex(e)}static lexInline(e,n){return new Xn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let r,i,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+r.raw,i.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){i=n[n.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(r),o=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,s,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,o,c)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(s)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),l=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class Dl{constructor(e){tt(this,"options");this.options=e||Ui}code(e,n,r){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+gn(i)+'">'+(r?e:gn(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:gn(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,r){return`<h${n}>${e}</h${n}>
`}hr(){return`<hr>
`}list(e,n,r){const i=n?"ol":"ul",s=n&&r!==1?' start="'+r+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e,n,r){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,n,r){const i=Cg(e);if(i===null)return r;e=i;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+r+"</a>",s}image(e,n,r){const i=Cg(e);if(i===null)return r;e=i;let s=`<img src="${e}" alt="${r}"`;return n&&(s+=` title="${n}"`),s+=">",s}text(e){return e}}class gd{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,r){return""+r}image(e,n,r){return""+r}br(){return""}}class Yn{constructor(e){tt(this,"options");tt(this,"renderer");tt(this,"textRenderer");this.options=e||Ui,this.options.renderer=this.options.renderer||new Dl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new gd}static parse(e,n){return new Yn(n).parse(e)}static parseInline(e,n){return new Yn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{const o=s;r+=this.renderer.heading(this.parseInline(o.tokens),o.depth,OM(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;r+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let c="";for(let u=0;u<o.rows.length;u++){const h=o.rows[u];l="";for(let d=0;d<h.length;d++)l+=this.renderer.tablecell(this.parseInline(h[d].tokens),{header:!1,align:o.align[d]});c+=this.renderer.tablerow(l)}r+=this.renderer.table(a,c);continue}case"blockquote":{const o=s,a=this.parse(o.tokens);r+=this.renderer.blockquote(a);continue}case"list":{const o=s,a=o.ordered,l=o.start,c=o.loose;let u="";for(let h=0;h<o.items.length;h++){const d=o.items[h],f=d.checked,g=d.task;let m="";if(d.task){const p=this.renderer.checkbox(!!f);c?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=p+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=p+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:p+" "}):m+=p+" "}m+=this.parse(d.tokens,c),u+=this.renderer.listitem(m,g,!!f)}r+=this.renderer.list(u,a,l);continue}case"html":{const o=s;r+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;r+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,a=o.tokens?this.parseInline(o.tokens):o.text;for(;i+1<e.length&&e[i+1].type==="text";)o=e[++i],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);r+=n?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=o||"";continue}}switch(s.type){case"escape":{const o=s;r+=n.text(o.text);break}case"html":{const o=s;r+=n.html(o.text);break}case"link":{const o=s;r+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break}case"image":{const o=s;r+=n.image(o.href,o.title,o.text);break}case"strong":{const o=s;r+=n.strong(this.parseInline(o.tokens,n));break}case"em":{const o=s;r+=n.em(this.parseInline(o.tokens,n));break}case"codespan":{const o=s;r+=n.codespan(o.text);break}case"br":{r+=n.br();break}case"del":{const o=s;r+=n.del(this.parseInline(o.tokens,n));break}case"text":{const o=s;r+=n.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}}class No{constructor(e){tt(this,"options");this.options=e||Ui}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}tt(No,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var ji,th,J0;class ux{constructor(...e){yf(this,ji);tt(this,"defaults",ld());tt(this,"options",this.setOptions);tt(this,"parse",ja(this,ji,th).call(this,Xn.lex,Yn.parse));tt(this,"parseInline",ja(this,ji,th).call(this,Xn.lexInline,Yn.parseInline));tt(this,"Parser",Yn);tt(this,"Renderer",Dl);tt(this,"TextRenderer",gd);tt(this,"Lexer",Xn);tt(this,"Tokenizer",Fl);tt(this,"Hooks",No);this.use(...e)}walkTokens(e,n){var i,s;let r=[];for(const o of e)switch(r=r.concat(n.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)r=r.concat(this.walkTokens(l.tokens,n));for(const l of a.rows)for(const c of l)r=r.concat(this.walkTokens(c.tokens,n));break}case"list":{const a=o;r=r.concat(this.walkTokens(a.items,n));break}default:{const a=o;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);r=r.concat(this.walkTokens(c,n))}):a.tokens&&(r=r.concat(this.walkTokens(a.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=n.renderers[s.name];o?n.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=n[s.level];o?o.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),i.extensions=n),r.renderer){const s=this.defaults.renderer||new Dl(this.defaults);for(const o in r.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=r.renderer[a],c=s[a];s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h||""}}i.renderer=s}if(r.tokenizer){const s=this.defaults.tokenizer||new Fl(this.defaults);for(const o in r.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=r.tokenizer[a],c=s[a];s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}i.tokenizer=s}if(r.hooks){const s=this.defaults.hooks||new No;for(const o in r.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=r.hooks[a],c=s[a];No.passThroughHooks.has(o)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(d=>c.call(s,d));const h=l.call(s,u);return c.call(s,h)}:s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}i.hooks=s}if(r.walkTokens){const s=this.defaults.walkTokens,o=r.walkTokens;i.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Xn.lex(e,n??this.defaults)}parser(e,n){return Yn.parse(e,n??this.defaults)}}ji=new WeakSet,th=function(e,n){return(r,i)=>{const s={...i},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=ja(this,ji,J0).call(this,!!o.silent,!!o.async);if(typeof r>"u"||r===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(r):r).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>n(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(r=o.hooks.preprocess(r));let l=e(r,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=n(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},J0=function(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+gn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}};const Ni=new ux;function je(t,e){return Ni.parse(t,e)}je.options=je.setOptions=function(t){return Ni.setOptions(t),je.defaults=Ni.defaults,W0(je.defaults),je};je.getDefaults=ld;je.defaults=Ui;je.use=function(...t){return Ni.use(...t),je.defaults=Ni.defaults,W0(je.defaults),je};je.walkTokens=function(t,e){return Ni.walkTokens(t,e)};je.parseInline=Ni.parseInline;je.Parser=Yn;je.parser=Yn.parse;je.Renderer=Dl;je.TextRenderer=gd;je.Lexer=Xn;je.lexer=Xn.lex;je.Tokenizer=Fl;je.Hooks=No;je.parse=je;je.options;je.setOptions;je.use;je.walkTokens;je.parseInline;Yn.parse;Xn.lex;const Q0="JavaScript-Grundlagen Quiz",e_=[{question:"Welche Schlüsselwörter erzeugen Block-Scope?",options:["Nur var","Nur let","let und const","function"],answer:2},{question:"Wofür wird const hauptsächlich verwendet?",options:["Konstante Referenz","Unveränderlicher String","Nur Zahlen","Nur Funktionen"],answer:0},{question:"Was gibt typeof null zurück?",options:['"object"','"null"','"undefined"','"number"'],answer:0},{question:"Was ist der Unterschied zwischen == und ===?",options:["Kein Unterschied","== vergleicht mit Type Coercion","=== erzwingt Type Coercion","Beide erzwingen Type Coercion"],answer:1},{question:"Wie erstellt man einen Template String?",options:["Einfache Anführungszeichen","Doppelte Anführungszeichen","Backticks","Schrägstrich-Klammern"],answer:2},{question:"Was macht Array.prototype.map?",options:["Filtert Elemente","Verändert das Original-Array","Gibt ein neues Array zurück","Entfernt Duplikate"],answer:2},{question:"Was macht Array.prototype.filter?",options:["Transformiert Elemente","Wählt Elemente basierend auf einer Bedingung aus","Reduziert auf einen einzelnen Wert","Sortiert das Array"],answer:1},{question:"Was gibt Array.prototype.reduce typischerweise zurück?",options:["Ein einzelnes Ergebnis","Ein neues Array","Ein sortiertes Array","Ein Objekt mit Längen-Info"],answer:0},{question:"Wie erstellt man eine flache Kopie eines Arrays?",options:["const copy = arr;","const copy = [...arr];","const copy = arr.map();","const copy = arr.copy();"],answer:1},{question:"Was passiert bei const { name } = user;?",options:["Objekt wird zu String konvertiert","Property name wird extrahiert","Alle Properties werden gelöscht","Eine Methode wird aufgerufen"],answer:1},{question:"Was macht die Rest-Parameter-Syntax (...args)?",options:["Erstellt ein Objekt","Konvertiert zu Zahlen","Bündelt verbleibende Argumente in ein Array","Entfernt Argumente"],answer:2},{question:"Was macht die Spread-Syntax ... in Arrays?",options:["Erstellt ein Promise","Fügt Array-Elemente einzeln ein","Startet eine Schleife","Prüft Typen"],answer:1},{question:"Was ist eine Arrow Function?",options:["Eine Funktion ohne Rückgabewert","Kompakte Syntax für Funktionen","Spezielle Klassen-Funktion","Nur-Browser-Funktion"],answer:1},{question:"Wann ist eine Variable undefined?",options:["Wenn nicht deklariert","Wenn deklariert ohne Wert","Nach delete","Bei Berechnungsfehler"],answer:1},{question:"Was bedeutet truthy?",options:["Nur true",'Jeder Wert außer false, 0, "", null, undefined, NaN',"Alle Zahlen","Nur Strings"],answer:1},{question:"Wie setzt man einen Default-Parameter?",options:["function f(a = 1)","function f(a := 1)","function f(default a)","function f(a ? 1)"],answer:0},{question:'Was gibt Number("5") + 1 zurück?',options:['"51"',"6","NaN","51"],answer:1},{question:'Was passiert bei setTimeout(() => console.log("A"), 0); console.log("B");?',options:["A vor B","B vor A","A und B zusammen","Keine Ausgabe"],answer:1},{question:"Wie prüft man, ob ein Array ein Element enthält?",options:["arr.has(value)","arr.includes(value)","arr.contains(value)","arr.findIndex(value)"],answer:1},{question:"Wie konvertiert man einen String zu einer Zahl ohne Number?",options:['+"42"','"42".toArray()','parseArray("42")',"String(42)"],answer:0}],hx={title:Q0,questions:e_},dx=Object.freeze(Object.defineProperty({__proto__:null,default:hx,questions:e_,title:Q0},Symbol.toStringTag,{value:"Module"})),t_="Woche 1: Architektur & Setup - Quiz",n_=[{question:"Was ist der Hauptzweck des POLAR-Frameworks?",options:["Backend-API für Geodaten","Plugin-basierte OpenLayers-Anwendungen entwickeln","Datenbank-Management-System","CSS-Framework für WebGIS"],answer:1},{question:"Welche Technologien nutzt POLAR im Core?",options:["React + Redux + Leaflet","Vue 3 + Vuex + OpenLayers","Angular + NgRx + Mapbox","Svelte + Leaflet"],answer:1},{question:"Was ist die Aufgabe der createMap()-Funktion in packages/core/?",options:["HTML-Element erstellen","OpenLayers-Map initialisieren und Plugin-Lifecycle starten","Vuex-Store konfigurieren","Router-Setup"],answer:1},{question:"Wo werden Plugins im POLAR-Monorepo registriert?",options:["In packages/core/src/createMap.ts","In packages/clients/<client>/src/addPlugins.ts","In nx.json","In jest.config.ts"],answer:1},{question:"Was ist der Vorteil des Factory Patterns bei Plugins?",options:["Plugins sind schneller","Plugins können zur Laufzeit konfiguriert werden","Plugins brauchen weniger Code","Plugins sind automatisch getestet"],answer:1}],fx={title:t_,questions:n_},gx=Object.freeze(Object.defineProperty({__proto__:null,default:fx,questions:n_,title:t_},Symbol.toStringTag,{value:"Module"})),r_="Woche 2: Plugin-Anatomie - Quiz",i_=[{question:"Welche Properties MUSS eine Plugin-Factory mindestens zurückgeben?",options:["Nur name","name, storeModule, component","name, version, author","component, template, styles"],answer:1},{question:"Warum sollte man 'namespaced: true' im Store-Module setzen?",options:["Bessere Performance","Verhindert Namenskollisionen zwischen Plugins","Ermöglicht Hot-Reload","Ist für TypeScript erforderlich"],answer:1},{question:"Wofür ist das 9Layout-System zuständig?",options:["CSS-Grid-Definition","Positionierung von Plugins in 9 Zonen","Map-Projektion","Responsive Breakpoints"],answer:1},{question:"Wie greift ein Plugin auf die OpenLayers-Map zu?",options:["window.map","this.$map","rootGetters['map/getMap']","import map from '@polar/core'"],answer:2},{question:"Wann sollte man Actions statt Mutations nutzen?",options:["Immer","Nur für asynchrone Operationen","Nur für synchrone State-Änderungen","Nie, Mutations sind ausreichend"],answer:1}],mx={title:r_,questions:i_},px=Object.freeze(Object.defineProperty({__proto__:null,default:mx,questions:i_,title:r_},Symbol.toStringTag,{value:"Module"})),s_="Woche 3: Client-Entwicklung - Quiz",o_=[{question:"Was ist der Hauptunterschied zwischen Generic und Specialized Clients?",options:["Generic nutzt Vue 2, Specialized Vue 3","Generic hat alle Plugins, Specialized nur benötigte","Generic ist für Development, Specialized für Testing","Kein Unterschied"],answer:1},{question:"Wo wird die Map-Konfiguration (View, Layers) definiert?",options:["In addPlugins.ts","In mapConfiguration.ts","In vite.config.js","In index.html"],answer:1},{question:"Wie kann ein Plugin auf State eines anderen Plugins reagieren?",options:["Direkter Import: import { state } from '@polar/other-plugin'","Via store.watch() auf Plugin-State","Via window.addEventListener()","Ist nicht möglich"],answer:1},{question:"Welche Vorteile hat ein Specialized Client?",options:["Schnellere Development-Zeit","Kleinere Bundle-Size und client-spezifisches Branding","Automatische Tests","Bessere TypeScript-Support"],answer:1},{question:"Wofür werden Environment-Variables (import.meta.env) genutzt?",options:["Plugin-Registrierung","API-URLs und Feature-Flags für Dev/Prod","CSS-Styling","TypeScript-Konfiguration"],answer:1}],_x={title:s_,questions:o_},yx=Object.freeze(Object.defineProperty({__proto__:null,default:_x,questions:o_,title:s_},Symbol.toStringTag,{value:"Module"})),a_="Woche 4: Testing & Qualität - Quiz",l_=[{question:"Was ist der Hauptunterschied zwischen Unit- und E2E-Tests?",options:["Unit-Tests sind schneller","Unit-Tests testen isolierte Komponenten, E2E testen vollständige User-Flows","E2E-Tests sind besser","Kein Unterschied, nur andere Tools"],answer:1},{question:"Was macht createTestMountParameters()?",options:["Erstellt neue Plugins","Konfiguriert Vue Test Utils mit Vuetify, Store, Mocks","Startet Playwright-Browser","Generiert Test-Dateien"],answer:1},{question:"Welches Tool wird für E2E-Tests in POLAR verwendet?",options:["Cypress","Selenium","Playwright","Puppeteer"],answer:2},{question:"Was bedeutet eine Coverage von 80% Statements?",options:["80% der Funktionen sind getestet","80% der Code-Zeilen wurden während Tests ausgeführt","80% der Tests sind bestanden","80% der Files haben Tests"],answer:1},{question:"Was ist Test-Driven Development (TDD)?",options:["Tests nur am Ende schreiben","Test zuerst schreiben (rot), dann implementieren (grün), dann refactoren","Automatische Test-Generierung","Tests nur für Production-Code"],answer:1}],vx={title:a_,questions:l_},wx=Object.freeze(Object.defineProperty({__proto__:null,default:vx,questions:l_,title:a_},Symbol.toStringTag,{value:"Module"})),c_="Woche 5: Release & Produktion - Quiz",u_=[{question:"Nach welchem Schema funktioniert Semantic Versioning?",options:["YEAR.MONTH.DAY","MAJOR.MINOR.PATCH","VERSION.BUILD.REVISION","Gibt es kein festes Schema"],answer:1},{question:"Wann ist ein MAJOR-Version-Bump erforderlich?",options:["Bei jedem Bugfix","Bei Breaking Changes (API-Änderungen)","Bei neuen Features","Jeden Monat"],answer:1},{question:"Was gehört NICHT in einen CHANGELOG?",options:["Neue Features (Added)","Bugfixes (Fixed)","Interne Code-Refactorings","Breaking Changes"],answer:2},{question:"Was ist der Unterschied zwischen 'npm publish' und 'npm pack'?",options:["Kein Unterschied","pack erstellt .tgz lokal, publish uploaded zu NPM","publish ist schneller","pack ist deprecated"],answer:1},{question:"Was ist der Vorteil von Conventional Commits (z.B. 'feat:', 'fix:')?",options:["Bessere Git-Performance","Automatische CHANGELOG-Generierung und Version-Bumps","Weniger Merge-Konflikte","Automatische Code-Reviews"],answer:1}],Sx={title:c_,questions:u_},bx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx,questions:u_,title:c_},Symbol.toStringTag,{value:"Module"})),Ex={class:"quiz"},Mx={class:"quiz__question-text"},xx={key:0,class:"quiz__indicator quiz__indicator--correct"},Cx={key:1,class:"quiz__indicator quiz__indicator--incorrect"},kx=["name","value","onUpdate:modelValue","disabled"],Px=["disabled"],Tx={key:0,class:"quiz__warning"},Rx={key:0,class:"quiz__results"},Ax={class:"quiz__result"},Ix={key:0,class:"quiz__result quiz__result--success"},Lx={key:1,class:"quiz__result quiz__result--warning"},Ox={__name:"Quiz",props:{quizId:{type:String,required:!0},moduleId:{type:String,required:!0},lessonId:{type:String,required:!0}},emits:["passed"],setup(t,{emit:e}){const n=t,r=e,i=ln(),s=Object.assign({"../data/quiz/js_fundamentals_1.json":dx,"../data/quiz/polar_week1_quiz.json":gx,"../data/quiz/polar_week2_quiz.json":px,"../data/quiz/polar_week3_quiz.json":yx,"../data/quiz/polar_week4_quiz.json":wx,"../data/quiz/polar_week5_quiz.json":bx}),o=ne(()=>{const g=s[`../data/quiz/${n.quizId}.json`];return(g==null?void 0:g.default)||{title:"Quiz",questions:[]}}),a=ai({}),l=Tt(!1),c=Tt(0),u=ai({}),h=ne(()=>(o.value.questions||[]).every((m,p)=>a[p]!==void 0)),d=()=>{const g=o.value.questions||[];if(!g.length){l.value=!0,c.value=0;return}let m=0;g.forEach((p,_)=>{const y=a[_]===p.answer;u[_]=y,y&&(m+=1)}),c.value=Math.round(m/g.length*100),l.value=!0,i.commit("quiz/saveResult",{quizId:n.quizId,score:c.value,total:g.length}),c.value>=70&&(i.commit("progress/completeLesson",{moduleId:n.moduleId,lessonId:n.lessonId}),r("passed"))},f=()=>{(o.value.questions||[]).forEach((m,p)=>{u[p]===!1&&(delete a[p],delete u[p])}),l.value=!1,c.value=0};return(g,m)=>(F(),B("div",Ex,[S("h3",null,X(o.value.title),1),S("form",{class:"quiz__list",onSubmit:_0(d,["prevent"])},[(F(!0),B(Re,null,gt(o.value.questions,(p,_)=>(F(),B("div",{key:_,class:vt(["quiz__question",{"quiz__question--correct":u[_]===!0,"quiz__question--incorrect":l.value&&u[_]===!1}])},[S("p",Mx,[On(X(_+1)+". "+X(p.question)+" ",1),u[_]===!0?(F(),B("span",xx,"✓")):Ye("",!0),l.value&&u[_]===!1?(F(),B("span",Cx,"✗")):Ye("",!0)]),(F(!0),B(Re,null,gt(p.options,(y,w)=>(F(),B("label",{key:w,class:vt(["quiz__option",{"quiz__option--selected":a[_]===w,"quiz__option--correct":u[_]===!0&&w===p.answer,"quiz__option--incorrect":l.value&&a[_]===w&&w!==p.answer}])},[kl(S("input",{type:"radio",name:`q-${_}`,value:w,"onUpdate:modelValue":b=>a[_]=b,disabled:l.value||u[_]===!0},null,8,kx),[[zw,a[_]]]),S("span",null,X(y),1)],2))),128))],2))),128)),S("button",{class:"primary-btn",type:"submit",disabled:l.value||!h.value},X(l.value?"Quiz abgeschlossen":"Quiz absenden"),9,Px),!h.value&&!l.value?(F(),B("p",Tx,"Bitte beantworte alle Fragen, bevor du das Quiz absendest.")):Ye("",!0)],32),l.value?(F(),B("div",Rx,[S("p",Ax,"Punktzahl: "+X(c.value)+"%",1),c.value>=70?(F(),B("p",Ix,"Gut gemacht! Lektion als abgeschlossen markiert.")):(F(),B("p",Lx,"Du benötigst mindestens 70% zum Bestehen. Versuche die fehlgeschlagenen Fragen erneut!")),c.value<70?(F(),B("button",{key:2,onClick:f,class:"ghost-btn"},"Fehlgeschlagene Fragen wiederholen")):Ye("",!0)])):Ye("",!0)]))}},Fx=wt(Ox,[["__scopeId","data-v-47f9192b"]]),Nx=[{id:"setup",text:"Tool-Ordner erstellen, in tools.js registrieren, in config.json aktivieren"},{id:"model-structure",text:"Model-Grundstruktur mit defaults, initialize, startTool, stopTool implementieren"},{id:"map-click",text:"Map-Click-Listener registrieren und Features unter Mauszeiger erkennen"},{id:"feature-selection",text:"Feature-Selektion implementieren (max. 2 Features speichern)"},{id:"distance-calc",text:"Distanz-Berechnung mit OpenLayers getDistance() implementieren"},{id:"visualization",text:"Vector-Layer erstellen und Verbindungslinie zwischen Features zeichnen"},{id:"template",text:"template.html erstellen mit Tool-Fenster-Struktur"},{id:"view",text:"view.js implementieren mit Events und render-Methode"},{id:"styling",text:"style.css schreiben für Tool-Fenster und Linien-Visualisierung"},{id:"reset-button",text:"Zurücksetzen-Button implementieren (Auswahl löschen, Karte säubern)"},{id:"cleanup",text:"stopTool() vervollständigen - alle Listener und Layer entfernen"},{id:"testing",text:"Mindestens 3 Unit-Tests mit Mocha/Chai schreiben"},{id:"eslint",text:"npm run lint ausführen und alle Fehler beheben"},{id:"documentation",text:"README.md im Tool-Ordner schreiben (Beschreibung, Verwendung)"},{id:"manual-test",text:"Alle Features manuell im Browser testen und Bugs fixen"},{id:"demo",text:"Screen-Recording erstellen oder Live-Demo vorbereiten"}],Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),Gx=[{id:"proj",text:"Erkläre EPSG:3857 vs EPSG:4326 deinem Mentor."},{id:"wms",text:"Lade mindestens einen WMS-Layer im Playground."},{id:"wfs",text:"Inspiziere die Properties eines WFS-Features."}],zx=Object.freeze(Object.defineProperty({__proto__:null,default:Gx},Symbol.toStringTag,{value:"Module"})),Bx=[{id:"capstone-m1",text:"Milestone 1: Erstelle Projekt-Boilerplate (Ordner, package.json, types.ts, leerer Store)"},{id:"capstone-m2",text:"Milestone 2: Implementiere Vuex-Store (State, Getters, Actions, Mutations)"},{id:"capstone-m3",text:"Milestone 3: Baue Vue-Component mit Vuetify (Buttons, Messung-Anzeige)"},{id:"capstone-m4",text:"Milestone 4: Integriere OpenLayers (Draw-Interaction, Berechnungen)"},{id:"capstone-m5",text:"Milestone 5: Registriere Plugin in Snowbox (addPlugins.ts, 9Layout)"},{id:"capstone-m6",text:"Milestone 6: Schreibe Unit-Tests (≥80% Coverage, Store + Component)"},{id:"capstone-m7",text:"Milestone 7: Erstelle E2E-Test mit Playwright (Distanz + Fläche messen)"},{id:"capstone-m8",text:"Milestone 8: Finalisiere README, CHANGELOG und npm publish --dry-run"}],jx=Object.freeze(Object.defineProperty({__proto__:null,default:Bx},Symbol.toStringTag,{value:"Module"})),Wx=[{id:"w1-snowbox",text:"Starte Snowbox lokal und öffne DevTools (Vue + Vuex Tab)"},{id:"w1-plugins",text:"Erstelle eine Liste aller Plugins in packages/plugins/ mit Kategorie"},{id:"w1-store",text:"Dokumentiere die Vuex-Store-Struktur (Root-Module und Plugin-Module)"},{id:"w1-createmap",text:"Lies packages/core/src/createMap.ts und erkläre den Map-Lifecycle"},{id:"w1-bonus",text:"[Bonus] Erstelle ein 'HelloWorld'-Plugin mit Factory, Store und Component"}],Vx=Object.freeze(Object.defineProperty({__proto__:null,default:Wx},Symbol.toStringTag,{value:"Module"})),Ux=[{id:"w2-counter-factory",text:"Erstelle Factory-Funktion für Counter-Plugin mit Options-Interface"},{id:"w2-counter-store",text:"Implementiere Store-Module: State (count), Actions (increment/decrement), Getters"},{id:"w2-counter-component",text:"Baue Vue-Component mit Vuetify (v-btn, v-card) und Store-Anbindung"},{id:"w2-nine-layout",text:"Integriere Counter-Plugin in 9Layout (Position: top-left)"},{id:"w2-snowbox-test",text:"Registriere Plugin in addPlugins.ts und teste in Snowbox"},{id:"w2-bonus",text:"[Bonus] Erweitere Counter mit Reset-Button und LocalStorage-Persistenz"}],Kx=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),$x=[{id:"w3-client-setup",text:"Erstelle packages/clients/dashboard/ mit package.json und vite.config.js"},{id:"w3-addplugins",text:"Konfiguriere addPlugins.ts mit Zoom, LayerChooser, Legend (nur diese 3)"},{id:"w3-mapconfig",text:"Passe mapConfiguration.ts an: Berlin als Center (13.4, 52.5), Zoom 11"},{id:"w3-theme",text:"Erstelle Custom Vuetify-Theme mit Primary-Color #1E3A8A"},{id:"w3-npm-script",text:"Füge 'dashboard'-Script zu Root package.json hinzu und teste Start"},{id:"w3-bonus",text:"[Bonus] Implementiere Theme-Switcher (Dark/Light) in TopBar"}],qx=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),Hx=[{id:"w4-store-tests",text:"Schreibe Unit-Tests für Counter-Store (mindestens 8 Tests für Mutations/Actions/Getters)"},{id:"w4-component-tests",text:"Teste CounterComponent mit @vue/test-utils und createTestMountParameters (5 Tests)"},{id:"w4-coverage",text:"Erreiche ≥80% Code-Coverage für Counter-Plugin (npm run test:coverage)"},{id:"w4-e2e",text:"Erstelle e2e/counter.spec.ts mit Playwright (Test: Increment → Decrement → Reset)"},{id:"w4-tdd",text:"Implementiere 'IncrementByTen'-Feature test-first (TDD-Workflow)"},{id:"w4-bonus",text:"[Bonus] Integriere Visual Regression Tests mit Playwright-Screenshots"}],Zx=Object.freeze(Object.defineProperty({__proto__:null,default:Hx},Symbol.toStringTag,{value:"Module"})),Xx=[{id:"w5-changelog",text:"Erstelle CHANGELOG.md für Counter-Plugin (v1.0.0 mit Added/Fixed/Changed)"},{id:"w5-readme",text:"Schreibe README.md mit Installation, Usage, API-Dokumentation"},{id:"w5-package-json",text:"Konfiguriere package.json: Version 1.0.0, publishConfig, main/types fields"},{id:"w5-build",text:"Build Counter-Plugin und teste Dry-Run: npm publish --dry-run"},{id:"w5-git-tag",text:"Erstelle Git-Commit + Tag für Release: git tag counter-v1.0.0"},{id:"w5-bonus",text:"[Bonus] Richte GitHub Actions Workflow für automatisches NPM-Publishing ein"}],Yx=Object.freeze(Object.defineProperty({__proto__:null,default:Xx},Symbol.toStringTag,{value:"Module"})),Jx={class:"task-list"},Qx=["onClick"],e2=["checked"],Rg="onboarding-tasks-",t2={__name:"TaskList",props:{tasksId:{type:String,required:!0}},emits:["completed"],setup(t,{emit:e}){const n=t,r=e,i=Object.assign({"../data/tasks/capstone_tasks.json":Dx,"../data/tasks/geo_basics_tasks.json":zx,"../data/tasks/polar_capstone_tasks.json":jx,"../data/tasks/polar_week1_tasks.json":Vx,"../data/tasks/polar_week2_tasks.json":Kx,"../data/tasks/polar_week3_tasks.json":qx,"../data/tasks/polar_week4_tasks.json":Zx,"../data/tasks/polar_week5_tasks.json":Yx}),s=ne(()=>{var c;return((c=i[`../data/tasks/${n.tasksId}.json`])==null?void 0:c.default)||[]}),o=ai({});(()=>{if(typeof window>"u")return;const c=localStorage.getItem(`${Rg}${n.tasksId}`);c&&Object.assign(o,JSON.parse(c))})();const l=c=>{o[c]=!o[c]};return Tn(o,()=>{typeof window>"u"||(localStorage.setItem(`${Rg}${n.tasksId}`,JSON.stringify(o)),s.value.length&&s.value.every(c=>o[c.id])&&r("completed"))},{deep:!0,immediate:!0}),(c,u)=>(F(),B("div",Jx,[(F(!0),B(Re,null,gt(s.value,h=>(F(),B("div",{key:h.id,class:"task-item",onClick:d=>l(h.id)},[S("input",{type:"checkbox",checked:o[h.id],readonly:""},null,8,e2),S("span",null,X(h.text),1)],8,Qx))),128))]))}},n2=wt(t2,[["__scopeId","data-v-04b86cc1"]]);class Fr{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const Ns={PROPERTYCHANGE:"propertychange"};class md{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function r2(t,e,n){let r,i;n=n||kr;let s=0,o=t.length,a=!1;for(;s<o;)r=s+(o-s>>1),i=+n(t[r],e),i<0?s=r+1:(o=r,a=!i);return a?s:~s}function kr(t,e){return t>e?1:t<e?-1:0}function pd(t,e,n){if(t[0]<=e)return 0;const r=t.length;if(e<=t[r-1])return r-1;if(typeof n=="function"){for(let i=1;i<r;++i){const s=t[i];if(s===e)return i;if(s<e)return n(e,t[i-1],s)>0?i-1:i}return r-1}if(n>0){for(let i=1;i<r;++i)if(t[i]<e)return i-1;return r-1}if(n<0){for(let i=1;i<r;++i)if(t[i]<=e)return i;return r-1}for(let i=1;i<r;++i){if(t[i]==e)return i;if(t[i]<e)return t[i-1]-e<e-t[i]?i-1:i}return r-1}function i2(t,e,n){for(;e<n;){const r=t[e];t[e]=t[n],t[n]=r,++e,--n}}function Yt(t,e){const n=Array.isArray(e)?e:[e],r=n.length;for(let i=0;i<r;i++)t[t.length]=n[i]}function mi(t,e){const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function s2(t,e,n){const r=e||kr;return t.every(function(i,s){if(s===0)return!0;const o=r(t[s-1],i);return!(o>0||o===0)})}function ta(){return!0}function xc(){return!1}function Ds(){}function h_(t){let e=!1,n,r,i;return function(){const s=Array.prototype.slice.call(arguments);return(!e||this!==i||!mi(s,r))&&(e=!0,i=this,r=s,n=t.apply(this,arguments)),n}}function o2(t){function e(){let n;try{n=t()}catch(r){return Promise.reject(r)}return n instanceof Promise?n:Promise.resolve(n)}return e()}function Ma(t){for(const e in t)delete t[e]}function Di(t){let e;for(e in t)return!1;return!e}class Cc extends md{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,n){if(!e||!n)return;const r=this.listeners_||(this.listeners_={}),i=r[e]||(r[e]=[]);i.includes(n)||i.push(n)}dispatchEvent(e){const n=typeof e=="string",r=n?e:e.type,i=this.listeners_&&this.listeners_[r];if(!i)return;const s=n?new Fr(e):e;s.target||(s.target=this.eventTarget_||this);const o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});r in o||(o[r]=0,a[r]=0),++o[r];let l;for(let c=0,u=i.length;c<u;++c)if("handleEvent"in i[c]?l=i[c].handleEvent(s):l=i[c].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--o[r]===0){let c=a[r];for(delete a[r];c--;)this.removeEventListener(r,Ds);delete o[r]}return l}disposeInternal(){this.listeners_&&Ma(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,n){if(!this.listeners_)return;const r=this.listeners_[e];if(!r)return;const i=r.indexOf(n);i!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(r[i]=Ds,++this.pendingRemovals_[e]):(r.splice(i,1),r.length===0&&delete this.listeners_[e]))}}const Se={CHANGE:"change",ERROR:"error",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function Fe(t,e,n,r,i){if(r&&r!==t&&(n=n.bind(r)),i){const o=n;n=function(){t.removeEventListener(e,n),o.apply(this,arguments)}}const s={target:t,type:e,listener:n};return t.addEventListener(e,n),s}function Gl(t,e,n,r){return Fe(t,e,n,r,!0)}function st(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),Ma(t))}class xa extends Cc{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(Se.CHANGE)}getRevision(){return this.revision_}onInternal(e,n){if(Array.isArray(e)){const r=e.length,i=new Array(r);for(let s=0;s<r;++s)i[s]=Fe(this,e[s],n);return i}return Fe(this,e,n)}onceInternal(e,n){let r;if(Array.isArray(e)){const i=e.length;r=new Array(i);for(let s=0;s<i;++s)r[s]=Gl(this,e[s],n)}else r=Gl(this,e,n);return n.ol_key=r,r}unInternal(e,n){const r=n.ol_key;if(r)a2(r);else if(Array.isArray(e))for(let i=0,s=e.length;i<s;++i)this.removeEventListener(e[i],n);else this.removeEventListener(e,n)}}xa.prototype.on;xa.prototype.once;xa.prototype.un;function a2(t){if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)st(t[e]);else st(t)}function pe(){throw new Error("Unimplemented abstract method.")}let l2=0;function qe(t){return t.ol_uid||(t.ol_uid=String(++l2))}class Ag extends Fr{constructor(e,n,r){super(e),this.key=n,this.oldValue=r}}class lr extends xa{constructor(e){super(),this.on,this.once,this.un,qe(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let n;return this.values_&&this.values_.hasOwnProperty(e)&&(n=this.values_[e]),n}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,n){let r;r=`change:${e}`,this.hasListener(r)&&this.dispatchEvent(new Ag(r,e,n)),r=Ns.PROPERTYCHANGE,this.hasListener(r)&&this.dispatchEvent(new Ag(r,e,n))}addChangeListener(e,n){this.addEventListener(`change:${e}`,n)}removeChangeListener(e,n){this.removeEventListener(`change:${e}`,n)}set(e,n,r){const i=this.values_||(this.values_={});if(r)i[e]=n;else{const s=i[e];i[e]=n,s!==n&&this.notify(e,s)}}setProperties(e,n){for(const r in e)this.set(r,e[r],n)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,n){if(this.values_&&e in this.values_){const r=this.values_[e];delete this.values_[e],Di(this.values_)&&(this.values_=null),n||this.notify(e,r)}}}const tn={ADD:"add",REMOVE:"remove"},Ig={LENGTH:"length"};class Za extends Fr{constructor(e,n,r){super(e),this.element=n,this.index=r}}class Jn extends lr{constructor(e,n){if(super(),this.on,this.once,this.un,n=n||{},this.unique_=!!n.unique,this.array_=e||[],this.unique_)for(let r=0,i=this.array_.length;r<i;++r)this.assertUnique_(this.array_[r],r);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let n=0,r=e.length;n<r;++n)this.push(e[n]);return this}forEach(e){const n=this.array_;for(let r=0,i=n.length;r<i;++r)e(n[r],r,n)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Ig.LENGTH)}insertAt(e,n){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(n),this.array_.splice(e,0,n),this.updateLength_(),this.dispatchEvent(new Za(tn.ADD,n,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){this.unique_&&this.assertUnique_(e);const n=this.getLength();return this.insertAt(n,e),this.getLength()}remove(e){const n=this.array_;for(let r=0,i=n.length;r<i;++r)if(n[r]===e)return this.removeAt(r)}removeAt(e){if(e<0||e>=this.getLength())return;const n=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Za(tn.REMOVE,n,e)),n}setAt(e,n){const r=this.getLength();if(e>=r){this.insertAt(e,n);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(n,e);const i=this.array_[e];this.array_[e]=n,this.dispatchEvent(new Za(tn.REMOVE,i,e)),this.dispatchEvent(new Za(tn.ADD,n,e))}updateLength_(){this.set(Ig.LENGTH,this.array_.length)}assertUnique_(e,n){for(let r=0,i=this.array_.length;r<i;++r)if(this.array_[r]===e&&r!==n)throw new Error("Duplicate item added to a unique collection")}}const Ze={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};function Ne(t,e){if(!t)throw new Error(e)}function mt(t,e,n){return Math.min(Math.max(t,e),n)}function c2(t,e,n,r,i,s){const o=i-n,a=s-r;if(o!==0||a!==0){const l=((t-n)*o+(e-r)*a)/(o*o+a*a);l>1?(n=i,r=s):l>0&&(n+=o*l,r+=a*l)}return Oi(t,e,n,r)}function Oi(t,e,n,r){const i=n-t,s=r-e;return i*i+s*s}function u2(t){const e=t.length;for(let r=0;r<e;r++){let i=r,s=Math.abs(t[r][r]);for(let a=r+1;a<e;a++){const l=Math.abs(t[a][r]);l>s&&(s=l,i=a)}if(s===0)return null;const o=t[i];t[i]=t[r],t[r]=o;for(let a=r+1;a<e;a++){const l=-t[a][r]/t[r][r];for(let c=r;c<e+1;c++)r==c?t[a][c]=0:t[a][c]+=l*t[r][c]}}const n=new Array(e);for(let r=e-1;r>=0;r--){n[r]=t[r][e]/t[r][r];for(let i=r-1;i>=0;i--)t[i][e]-=t[i][r]*n[r]}return n}function yl(t){return t*Math.PI/180}function Fi(t,e){const n=t%e;return n*e<0?n+e:n}function mn(t,e,n){return t+n*(e-t)}function kc(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}function Lg(t,e){return Math.round(kc(t,e))}function Xa(t,e){return Math.floor(kc(t,e))}function Ya(t,e){return Math.ceil(kc(t,e))}class d_ extends lr{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;const n=Object.assign({},e);typeof e.properties=="object"&&(delete n.properties,Object.assign(n,e.properties)),n[Ze.OPACITY]=e.opacity!==void 0?e.opacity:1,Ne(typeof n[Ze.OPACITY]=="number","Layer opacity must be a number"),n[Ze.VISIBLE]=e.visible!==void 0?e.visible:!0,n[Ze.Z_INDEX]=e.zIndex,n[Ze.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,n[Ze.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,n[Ze.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,n[Ze.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=n.className!==void 0?n.className:"ol-layer",delete n.className,this.setProperties(n),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){const n=this.state_||{layer:this,managed:e===void 0?!0:e},r=this.getZIndex();return n.opacity=mt(Math.round(this.getOpacity()*100)/100,0,1),n.visible=this.getVisible(),n.extent=this.getExtent(),n.zIndex=r===void 0&&!n.managed?1/0:r,n.maxResolution=this.getMaxResolution(),n.minResolution=Math.max(this.getMinResolution(),0),n.minZoom=this.getMinZoom(),n.maxZoom=this.getMaxZoom(),this.state_=n,n}getLayersArray(e){return pe()}getLayerStatesArray(e){return pe()}getExtent(){return this.get(Ze.EXTENT)}getMaxResolution(){return this.get(Ze.MAX_RESOLUTION)}getMinResolution(){return this.get(Ze.MIN_RESOLUTION)}getMinZoom(){return this.get(Ze.MIN_ZOOM)}getMaxZoom(){return this.get(Ze.MAX_ZOOM)}getOpacity(){return this.get(Ze.OPACITY)}getSourceState(){return pe()}getVisible(){return this.get(Ze.VISIBLE)}getZIndex(){return this.get(Ze.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(Ze.EXTENT,e)}setMaxResolution(e){this.set(Ze.MAX_RESOLUTION,e)}setMinResolution(e){this.set(Ze.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(Ze.MAX_ZOOM,e)}setMinZoom(e){this.set(Ze.MIN_ZOOM,e)}setOpacity(e){Ne(typeof e=="number","Layer opacity must be a number"),this.set(Ze.OPACITY,e)}setVisible(e){this.set(Ze.VISIBLE,e)}setZIndex(e){this.set(Ze.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Cn={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},Ot={ANIMATING:0,INTERACTING:1},In={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},h2=42,_d=256,yd={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};let vd=class{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||yd[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}};const Ca=6378137,ds=Math.PI*Ca,d2=[-ds,-ds,ds,ds],f2=[-180,-85,180,85],Ja=Ca*Math.log(Math.tan(Math.PI/2));class es extends vd{constructor(e){super({code:e,units:"m",extent:d2,global:!0,worldExtent:f2,getPointResolution:function(n,r){return n/Math.cosh(r[1]/Ca)}})}}const Og=[new es("EPSG:3857"),new es("EPSG:102100"),new es("EPSG:102113"),new es("EPSG:900913"),new es("http://www.opengis.net/def/crs/EPSG/0/3857"),new es("http://www.opengis.net/gml/srs/epsg.xml#3857")];function g2(t,e,n){const r=t.length;n=n>1?n:2,e===void 0&&(n>2?e=t.slice():e=new Array(r));for(let i=0;i<r;i+=n){e[i]=ds*t[i]/180;let s=Ca*Math.log(Math.tan(Math.PI*(+t[i+1]+90)/360));s>Ja?s=Ja:s<-Ja&&(s=-Ja),e[i+1]=s}return e}function m2(t,e,n){const r=t.length;n=n>1?n:2,e===void 0&&(n>2?e=t.slice():e=new Array(r));for(let i=0;i<r;i+=n)e[i]=180*t[i]/ds,e[i+1]=360*Math.atan(Math.exp(t[i+1]/Ca))/Math.PI-90;return e}const p2=6378137,Fg=[-180,-90,180,90],_2=Math.PI*p2/180;class bi extends vd{constructor(e,n){super({code:e,units:"degrees",extent:Fg,axisOrientation:n,global:!0,metersPerUnit:_2,worldExtent:Fg})}}const Ng=[new bi("CRS:84"),new bi("EPSG:4326","neu"),new bi("urn:ogc:def:crs:OGC:1.3:CRS84"),new bi("urn:ogc:def:crs:OGC:2:84"),new bi("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new bi("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new bi("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let nh={};function y2(t){return nh[t]||nh[t.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function v2(t,e){nh[t]=e}let Cs={};function Gs(t,e,n){const r=t.getCode(),i=e.getCode();r in Cs||(Cs[r]={}),Cs[r][i]=n}function f_(t,e){let n;return t in Cs&&e in Cs[t]&&(n=Cs[t][e]),n}const bt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Dg(t){const e=vn();for(let n=0,r=t.length;n<r;++n)Do(e,t[n]);return e}function w2(t,e,n){const r=Math.min.apply(null,t),i=Math.min.apply(null,e),s=Math.max.apply(null,t),o=Math.max.apply(null,e);return jn(r,i,s,o,n)}function na(t,e,n){return n?(n[0]=t[0]-e,n[1]=t[1]-e,n[2]=t[2]+e,n[3]=t[3]+e,n):[t[0]-e,t[1]-e,t[2]+e,t[3]+e]}function g_(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t.slice()}function Ki(t,e,n){let r,i;return e<t[0]?r=t[0]-e:t[2]<e?r=e-t[2]:r=0,n<t[1]?i=t[1]-n:t[3]<n?i=n-t[3]:i=0,r*r+i*i}function zs(t,e){return wd(t,e[0],e[1])}function fs(t,e){return t[0]<=e[0]&&e[2]<=t[2]&&t[1]<=e[1]&&e[3]<=t[3]}function wd(t,e,n){return t[0]<=e&&e<=t[2]&&t[1]<=n&&n<=t[3]}function rh(t,e){const n=t[0],r=t[1],i=t[2],s=t[3],o=e[0],a=e[1];let l=bt.UNKNOWN;return o<n?l=l|bt.LEFT:o>i&&(l=l|bt.RIGHT),a<r?l=l|bt.BELOW:a>s&&(l=l|bt.ABOVE),l===bt.UNKNOWN&&(l=bt.INTERSECTING),l}function vn(){return[1/0,1/0,-1/0,-1/0]}function jn(t,e,n,r,i){return i?(i[0]=t,i[1]=e,i[2]=n,i[3]=r,i):[t,e,n,r]}function Ys(t){return jn(1/0,1/0,-1/0,-1/0,t)}function m_(t,e){const n=t[0],r=t[1];return jn(n,r,n,r,e)}function Sd(t,e,n,r,i){const s=Ys(i);return __(s,t,e,n,r)}function ra(t,e){return t[0]==e[0]&&t[2]==e[2]&&t[1]==e[1]&&t[3]==e[3]}function p_(t,e){return e[0]<t[0]&&(t[0]=e[0]),e[2]>t[2]&&(t[2]=e[2]),e[1]<t[1]&&(t[1]=e[1]),e[3]>t[3]&&(t[3]=e[3]),t}function Do(t,e){e[0]<t[0]&&(t[0]=e[0]),e[0]>t[2]&&(t[2]=e[0]),e[1]<t[1]&&(t[1]=e[1]),e[1]>t[3]&&(t[3]=e[1])}function __(t,e,n,r,i){for(;n<r;n+=i)S2(t,e[n],e[n+1]);return t}function S2(t,e,n){t[0]=Math.min(t[0],e),t[1]=Math.min(t[1],n),t[2]=Math.max(t[2],e),t[3]=Math.max(t[3],n)}function y_(t,e){let n;return n=e(Pc(t)),n||(n=e(Tc(t)),n)||(n=e(Rc(t)),n)||(n=e($i(t)),n)?n:!1}function ih(t){let e=0;return ka(t)||(e=ze(t)*zt(t)),e}function Pc(t){return[t[0],t[1]]}function Tc(t){return[t[2],t[1]]}function ui(t){return[(t[0]+t[2])/2,(t[1]+t[3])/2]}function b2(t,e){let n;if(e==="bottom-left")n=Pc(t);else if(e==="bottom-right")n=Tc(t);else if(e==="top-left")n=$i(t);else if(e==="top-right")n=Rc(t);else throw new Error("Invalid corner");return n}function sh(t,e,n,r,i){const[s,o,a,l,c,u,h,d]=oh(t,e,n,r);return jn(Math.min(s,a,c,h),Math.min(o,l,u,d),Math.max(s,a,c,h),Math.max(o,l,u,d),i)}function oh(t,e,n,r){const i=e*r[0]/2,s=e*r[1]/2,o=Math.cos(n),a=Math.sin(n),l=i*o,c=i*a,u=s*o,h=s*a,d=t[0],f=t[1];return[d-l+h,f-c-u,d-l-h,f-c+u,d+l-h,f+c+u,d+l+h,f+c-u,d-l+h,f-c-u]}function zt(t){return t[3]-t[1]}function Go(t,e,n){const r=n||vn();return rn(t,e)?(t[0]>e[0]?r[0]=t[0]:r[0]=e[0],t[1]>e[1]?r[1]=t[1]:r[1]=e[1],t[2]<e[2]?r[2]=t[2]:r[2]=e[2],t[3]<e[3]?r[3]=t[3]:r[3]=e[3]):Ys(r),r}function $i(t){return[t[0],t[3]]}function Rc(t){return[t[2],t[3]]}function ze(t){return t[2]-t[0]}function rn(t,e){return t[0]<=e[2]&&t[2]>=e[0]&&t[1]<=e[3]&&t[3]>=e[1]}function ka(t){return t[2]<t[0]||t[3]<t[1]}function E2(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t}function M2(t,e,n){let r=!1;const i=rh(t,e),s=rh(t,n);if(i===bt.INTERSECTING||s===bt.INTERSECTING)r=!0;else{const o=t[0],a=t[1],l=t[2],c=t[3],u=e[0],h=e[1],d=n[0],f=n[1],g=(f-h)/(d-u);let m,p;s&bt.ABOVE&&!(i&bt.ABOVE)&&(m=d-(f-c)/g,r=m>=o&&m<=l),!r&&s&bt.RIGHT&&!(i&bt.RIGHT)&&(p=f-(d-l)*g,r=p>=a&&p<=c),!r&&s&bt.BELOW&&!(i&bt.BELOW)&&(m=d-(f-a)/g,r=m>=o&&m<=l),!r&&s&bt.LEFT&&!(i&bt.LEFT)&&(p=f-(d-o)*g,r=p>=a&&p<=c)}return r}function x2(t,e,n,r){if(ka(t))return Ys(n);let i=[];i=[t[0],t[1],t[2],t[1],t[2],t[3],t[0],t[3]],e(i,i,2);const s=[],o=[];for(let a=0,l=i.length;a<l;a+=2)s.push(i[a]),o.push(i[a+1]);return w2(s,o,n)}function v_(t,e){const n=e.getExtent(),r=ui(t);if(e.canWrapX()&&(r[0]<n[0]||r[0]>=n[2])){const i=ze(n),o=Math.floor((r[0]-n[0])/i)*i;t[0]-=o,t[2]-=o}return t}function w_(t,e,n){if(e.canWrapX()){const r=e.getExtent();if(!isFinite(t[0])||!isFinite(t[2]))return[[r[0],t[1],r[2],t[3]]];v_(t,e);const i=ze(r);if(ze(t)>i&&!n)return[[r[0],t[1],r[2],t[3]]];if(t[0]<r[0])return[[t[0]+i,t[1],r[2],t[3]],[r[0],t[1],t[2],t[3]]];if(t[2]>r[2])return[[t[0],t[1],r[2],t[3]],[r[0],t[1],t[2]-i,t[3]]]}return[t]}function S_(t,e){const n=(""+t).split("."),r=(""+e).split(".");for(let i=0;i<Math.max(n.length,r.length);i++){const s=parseInt(n[i]||"0",10),o=parseInt(r[i]||"0",10);if(s>o)return 1;if(o>s)return-1}return 0}function C2(t,e){return t[0]+=+e[0],t[1]+=+e[1],t}function zl(t,e){let n=!0;for(let r=t.length-1;r>=0;--r)if(t[r]!=e[r]){n=!1;break}return n}function bd(t,e){const n=Math.cos(e),r=Math.sin(e),i=t[0]*n-t[1]*r,s=t[1]*n+t[0]*r;return t[0]=i,t[1]=s,t}function k2(t,e){return t[0]*=e,t[1]*=e,t}function b_(t,e){if(e.canWrapX()){const n=ze(e.getExtent()),r=E_(t,e,n);r&&(t[0]-=r*n)}return t}function E_(t,e,n){const r=e.getExtent();let i=0;return e.canWrapX()&&(t[0]<r[0]||t[0]>r[2])&&(n=n||ze(r),i=Math.floor((t[0]-r[0])/n)),i}const P2=63710088e-1;function Gg(t,e,n){n=n||P2;const r=yl(t[1]),i=yl(e[1]),s=(i-r)/2,o=yl(e[0]-t[0])/2,a=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(r)*Math.cos(i);return 2*n*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}function M_(...t){console.warn(...t)}let ah=!0;function x_(t){ah=!1}function Ed(t,e){if(e!==void 0){for(let n=0,r=t.length;n<r;++n)e[n]=t[n];e=e}else e=t.slice();return e}function C_(t,e){if(e!==void 0&&t!==e){for(let n=0,r=t.length;n<r;++n)e[n]=t[n];t=e}return t}function k_(t){v2(t.getCode(),t),Gs(t,t,Ed)}function T2(t){t.forEach(k_)}function Ae(t){return typeof t=="string"?y2(t):t||null}function zg(t,e,n,r){t=Ae(t);let i;const s=t.getPointResolutionFunc();if(s)i=s(e,n);else{const o=t.getUnits();if(o=="degrees"&&!r||r=="degrees")i=e;else{const a=xd(t,Ae("EPSG:4326"));if(a===C_&&o!=="degrees")i=e*t.getMetersPerUnit();else{let c=[n[0]-e/2,n[1],n[0]+e/2,n[1],n[0],n[1]-e/2,n[0],n[1]+e/2];c=a(c,c,2);const u=Gg(c.slice(0,2),c.slice(2,4)),h=Gg(c.slice(4,6),c.slice(6,8));i=(u+h)/2}const l=t.getMetersPerUnit();l!==void 0&&(i/=l)}}return i}function lh(t){T2(t),t.forEach(function(e){t.forEach(function(n){e!==n&&Gs(e,n,Ed)})})}function R2(t,e,n,r){t.forEach(function(i){e.forEach(function(s){Gs(i,s,n),Gs(s,i,r)})})}function Md(t,e){return t?typeof t=="string"?Ae(t):t:Ae(e)}function Bg(t){return function(e,n,r){const i=e.length;r=r!==void 0?r:2,n=n!==void 0?n:new Array(i);for(let s=0;s<i;s+=r){const o=t(e.slice(s,s+r)),a=o.length;for(let l=0,c=r;l<c;++l)n[s+l]=l>=a?e[s+l]:o[l]}return n}}function A2(t,e,n,r){const i=Ae(t),s=Ae(e);Gs(i,s,Bg(n)),Gs(s,i,Bg(r))}function jg(t,e){return x_(),Jr(t,"EPSG:4326","EPSG:3857")}function Yr(t,e){if(t===e)return!0;const n=t.getUnits()===e.getUnits();return(t.getCode()===e.getCode()||xd(t,e)===Ed)&&n}function xd(t,e){const n=t.getCode(),r=e.getCode();let i=f_(n,r);return i||(i=C_),i}function Bs(t,e){const n=Ae(t),r=Ae(e);return xd(n,r)}function Jr(t,e,n){return Bs(e,n)(t,void 0,t.length)}function I2(t,e,n,r){const i=Bs(e,n);return x2(t,i,void 0)}function ch(t,e){return t}function yr(t,e){return ah&&!zl(t,[0,0])&&t[0]>=-180&&t[0]<=180&&t[1]>=-90&&t[1]<=90&&(ah=!1,M_("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),t}function P_(t,e){return t}function Ti(t,e){return t}function Wg(t,e,n){return function(r){let i,s;if(t.canWrapX()){const o=t.getExtent(),a=ze(o);r=r.slice(0),s=E_(r,t,a),s&&(r[0]=r[0]-s*a),r[0]=mt(r[0],o[0],o[2]),r[1]=mt(r[1],o[1],o[3]),i=n(r)}else i=n(r);return s&&e.canWrapX()&&(i[0]+=s*ze(e.getExtent())),i}}function L2(){lh(Og),lh(Ng),R2(Ng,Og,g2,m2)}L2();function Vg(t,e,n){return function(r,i,s,o,a){if(!r)return;if(!i&&!e)return r;const l=e?0:s[0]*i,c=e?0:s[1]*i,u=a?a[0]:0,h=a?a[1]:0;let d=t[0]+l/2+u,f=t[2]-l/2+u,g=t[1]+c/2+h,m=t[3]-c/2+h;d>f&&(d=(f+d)/2,f=d),g>m&&(g=(m+g)/2,m=g);let p=mt(r[0],d,f),_=mt(r[1],g,m);if(o&&n&&i){const y=30*i;p+=-y*Math.log(1+Math.max(0,d-r[0])/y)+y*Math.log(1+Math.max(0,r[0]-f)/y),_+=-y*Math.log(1+Math.max(0,g-r[1])/y)+y*Math.log(1+Math.max(0,r[1]-m)/y)}return[p,_]}}function O2(t){return t}function Cd(t,e,n,r){const i=ze(e)/n[0],s=zt(e)/n[1];return r?Math.min(t,Math.max(i,s)):Math.min(t,Math.min(i,s))}function kd(t,e,n){let r=Math.min(t,e);const i=50;return r*=Math.log(1+i*Math.max(0,t/e-1))/i+1,n&&(r=Math.max(r,n),r/=Math.log(1+i*Math.max(0,n/t-1))/i+1),mt(r,n/2,e*2)}function F2(t,e,n,r){return e=e!==void 0?e:!0,function(i,s,o,a){if(i!==void 0){const l=t[0],c=t[t.length-1],u=n?Cd(l,n,o,r):l;if(a)return e?kd(i,u,c):mt(i,c,u);const h=Math.min(u,i),d=Math.floor(pd(t,h,s));return t[d]>u&&d<t.length-1?t[d+1]:t[d]}}}function N2(t,e,n,r,i,s){return r=r!==void 0?r:!0,n=n!==void 0?n:0,function(o,a,l,c){if(o!==void 0){const u=i?Cd(e,i,l,s):e;if(c)return r?kd(o,u,n):mt(o,n,u);const h=1e-9,d=Math.ceil(Math.log(e/u)/Math.log(t)-h),f=-a*(.5-h)+.5,g=Math.min(u,o),m=Math.floor(Math.log(e/g)/Math.log(t)+f),p=Math.max(d,m),_=e/Math.pow(t,p);return mt(_,n,u)}}}function Ug(t,e,n,r,i){return n=n!==void 0?n:!0,function(s,o,a,l){if(s!==void 0){const c=r?Cd(t,r,a,i):t;return!n||!l?mt(s,e,c):kd(s,c,e)}}}function Pd(t){if(t!==void 0)return 0}function Kg(t){if(t!==void 0)return t}function D2(t){const e=2*Math.PI/t;return function(n,r){if(r)return n;if(n!==void 0)return n=Math.floor(n/e+.5)*e,n}}function G2(t){const e=yl(5);return function(n,r){return r||n===void 0?n:Math.abs(n)<=e?0:n}}function T_(t){return Math.pow(t,3)}function Js(t){return 1-T_(1-t)}function z2(t){return 3*t*t-2*t*t*t}function B2(t){return t}new Array(6);function Nn(){return[1,0,0,1,0,0]}function j2(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function Ct(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function Lr(t,e,n,r,i,s,o,a){const l=Math.sin(s),c=Math.cos(s);return t[0]=r*c,t[1]=i*l,t[2]=-r*l,t[3]=i*c,t[4]=o*r*c-a*r*l+e,t[5]=o*i*l+a*i*c+n,t}function R_(t,e){const n=W2(e);Ne(n!==0,"Transformation matrix cannot be inverted");const r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5];return t[0]=o/n,t[1]=-i/n,t[2]=-s/n,t[3]=r/n,t[4]=(s*l-o*a)/n,t[5]=-(r*l-i*a)/n,t}function W2(t){return t[0]*t[3]-t[1]*t[2]}const $g=[1e6,1e6,1e6,1e6,2,2];function V2(t){return"matrix("+t.map((n,r)=>Math.round(n*$g[r])/$g[r]).join(", ")+")"}function si(t,e,n,r,i,s){s=s||[];let o=0;for(let a=e;a<n;a+=r){const l=t[a],c=t[a+1];s[o++]=i[0]*l+i[2]*c+i[4],s[o++]=i[1]*l+i[3]*c+i[5]}return s&&s.length!=o&&(s.length=o),s}function A_(t,e,n,r,i,s,o){o=o||[];const a=Math.cos(i),l=Math.sin(i),c=s[0],u=s[1];let h=0;for(let d=e;d<n;d+=r){const f=t[d]-c,g=t[d+1]-u;o[h++]=c+f*a-g*l,o[h++]=u+f*l+g*a;for(let m=d+2;m<d+r;++m)o[h++]=t[m]}return o&&o.length!=h&&(o.length=h),o}function U2(t,e,n,r,i,s,o,a){a=a||[];const l=o[0],c=o[1];let u=0;for(let h=e;h<n;h+=r){const d=t[h]-l,f=t[h+1]-c;a[u++]=l+i*d,a[u++]=c+s*f;for(let g=h+2;g<h+r;++g)a[u++]=t[g]}return a&&a.length!=u&&(a.length=u),a}function K2(t,e,n,r,i,s,o){o=o||[];let a=0;for(let l=e;l<n;l+=r){o[a++]=t[l]+i,o[a++]=t[l+1]+s;for(let c=l+2;c<l+r;++c)o[a++]=t[c]}return o&&o.length!=a&&(o.length=a),o}const qg=Nn();class Td extends lr{constructor(){super(),this.extent_=vn(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=h_((e,n,r)=>{if(!r)return this.getSimplifiedGeometry(n);const i=this.clone();return i.applyTransform(r),i.getSimplifiedGeometry(n)})}simplifyTransformed(e,n){return this.simplifyTransformedInternal(this.getRevision(),e,n)}clone(){return pe()}closestPointXY(e,n,r,i){return pe()}containsXY(e,n){const r=this.getClosestPoint([e,n]);return r[0]===e&&r[1]===n}getClosestPoint(e,n){return n=n||[NaN,NaN],this.closestPointXY(e[0],e[1],n,1/0),n}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return pe()}getExtent(e){if(this.extentRevision_!=this.getRevision()){const n=this.computeExtent(this.extent_);(isNaN(n[0])||isNaN(n[1]))&&Ys(n),this.extentRevision_=this.getRevision()}return E2(this.extent_,e)}rotate(e,n){pe()}scale(e,n,r){pe()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return pe()}getType(){return pe()}applyTransform(e){pe()}intersectsExtent(e){return pe()}translate(e,n){pe()}transform(e,n){const r=Ae(e),i=r.getUnits()=="tile-pixels"?function(s,o,a){const l=r.getExtent(),c=r.getWorldExtent(),u=zt(c)/zt(l);return Lr(qg,c[0],c[3],u,-u,0,0,0),si(s,0,s.length,a,qg,o),Bs(r,n)(s,o,a)}:Bs(r,n);return this.applyTransform(i),this}}class qi extends Td{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(e){return Sd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return pe()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const n=this.getSimplifiedGeometryInternal(e);return n.getFlatCoordinates().length<this.flatCoordinates.length?n:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,n){this.stride=Hg(e),this.layout=e,this.flatCoordinates=n}setCoordinates(e,n){pe()}setLayout(e,n,r){let i;if(e)i=Hg(e);else{for(let s=0;s<r;++s){if(n.length===0){this.layout="XY",this.stride=2;return}n=n[0]}i=n.length,e=Hi(i)}this.layout=e,this.stride=i}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(e,n){const r=this.getFlatCoordinates();if(r){const i=this.getStride();A_(r,0,r.length,i,e,n,r),this.changed()}}scale(e,n,r){n===void 0&&(n=e),r||(r=ui(this.getExtent()));const i=this.getFlatCoordinates();if(i){const s=this.getStride();U2(i,0,i.length,s,e,n,r,i),this.changed()}}translate(e,n){const r=this.getFlatCoordinates();if(r){const i=this.getStride();K2(r,0,r.length,i,e,n,r),this.changed()}}}function Hi(t){let e;return t==2?e="XY":t==3?e="XYZ":t==4&&(e="XYZM"),e}function Hg(t){let e;return t=="XY"?e=2:t=="XYZ"||t=="XYM"?e=3:t=="XYZM"&&(e=4),e}function $2(t,e,n){const r=t.getFlatCoordinates();if(!r)return null;const i=t.getStride();return si(r,0,r.length,i,e,n)}function Zg(t,e,n,r,i,s,o){const a=t[e],l=t[e+1],c=t[n]-a,u=t[n+1]-l;let h;if(c===0&&u===0)h=e;else{const d=((i-a)*c+(s-l)*u)/(c*c+u*u);if(d>1)h=n;else if(d>0){for(let f=0;f<r;++f)o[f]=mn(t[e+f],t[n+f],d);o.length=r;return}else h=e}for(let d=0;d<r;++d)o[d]=t[h+d];o.length=r}function Rd(t,e,n,r,i){let s=t[e],o=t[e+1];for(e+=r;e<n;e+=r){const a=t[e],l=t[e+1],c=Oi(s,o,a,l);c>i&&(i=c),s=a,o=l}return i}function Ad(t,e,n,r,i){for(let s=0,o=n.length;s<o;++s){const a=n[s];i=Rd(t,e,a,r,i),e=a}return i}function q2(t,e,n,r,i){for(let s=0,o=n.length;s<o;++s){const a=n[s];i=Ad(t,e,a,r,i),e=a[a.length-1]}return i}function Id(t,e,n,r,i,s,o,a,l,c,u){if(e==n)return c;let h,d;if(i===0){if(d=Oi(o,a,t[e],t[e+1]),d<c){for(h=0;h<r;++h)l[h]=t[e+h];return l.length=r,d}return c}u=u||[NaN,NaN];let f=e+r;for(;f<n;)if(Zg(t,f-r,f,r,o,a,u),d=Oi(o,a,u[0],u[1]),d<c){for(c=d,h=0;h<r;++h)l[h]=u[h];l.length=r,f+=r}else f+=r*Math.max((Math.sqrt(d)-Math.sqrt(c))/i|0,1);if(s&&(Zg(t,n-r,e,r,o,a,u),d=Oi(o,a,u[0],u[1]),d<c)){for(c=d,h=0;h<r;++h)l[h]=u[h];l.length=r}return c}function Ld(t,e,n,r,i,s,o,a,l,c,u){u=u||[NaN,NaN];for(let h=0,d=n.length;h<d;++h){const f=n[h];c=Id(t,e,f,r,i,s,o,a,l,c,u),e=f}return c}function H2(t,e,n,r,i,s,o,a,l,c,u){u=u||[NaN,NaN];for(let h=0,d=n.length;h<d;++h){const f=n[h];c=Ld(t,e,f,r,i,s,o,a,l,c,u),e=f[f.length-1]}return c}function Z2(t,e,n,r){for(let i=0,s=n.length;i<s;++i)t[e++]=n[i];return e}function Ac(t,e,n,r){for(let i=0,s=n.length;i<s;++i){const o=n[i];for(let a=0;a<r;++a)t[e++]=o[a]}return e}function Pa(t,e,n,r,i){i=i||[];let s=0;for(let o=0,a=n.length;o<a;++o){const l=Ac(t,e,n[o],r);i[s++]=l,e=l}return i.length=s,i}function I_(t,e,n,r,i){i=i||[];let s=0;for(let o=0,a=n.length;o<a;++o){const l=Pa(t,e,n[o],r,i[s]);l.length===0&&(l[0]=e),i[s++]=l,e=l[l.length-1]}return i.length=s,i}function Ic(t,e,n,r,i,s,o){const a=(n-e)/r;if(a<3){for(;e<n;e+=r)s[o++]=t[e],s[o++]=t[e+1];return o}const l=new Array(a);l[0]=1,l[a-1]=1;const c=[e,n-r];let u=0;for(;c.length>0;){const h=c.pop(),d=c.pop();let f=0;const g=t[d],m=t[d+1],p=t[h],_=t[h+1];for(let y=d+r;y<h;y+=r){const w=t[y],b=t[y+1],E=c2(w,b,g,m,p,_);E>f&&(u=y,f=E)}f>i&&(l[(u-e)/r]=1,d+r<u&&c.push(d,u),u+r<h&&c.push(u,h))}for(let h=0;h<a;++h)l[h]&&(s[o++]=t[e+h*r],s[o++]=t[e+h*r+1]);return o}function L_(t,e,n,r,i,s,o,a){for(let l=0,c=n.length;l<c;++l){const u=n[l];o=Ic(t,e,u,r,i,s,o),a.push(o),e=u}return o}function xi(t,e){return e*Math.round(t/e)}function X2(t,e,n,r,i,s,o){if(e==n)return o;let a=xi(t[e],i),l=xi(t[e+1],i);e+=r,s[o++]=a,s[o++]=l;let c,u;do if(c=xi(t[e],i),u=xi(t[e+1],i),e+=r,e==n)return s[o++]=c,s[o++]=u,o;while(c==a&&u==l);for(;e<n;){const h=xi(t[e],i),d=xi(t[e+1],i);if(e+=r,h==c&&d==u)continue;const f=c-a,g=u-l,m=h-a,p=d-l;if(f*p==g*m&&(f<0&&m<f||f==m||f>0&&m>f)&&(g<0&&p<g||g==p||g>0&&p>g)){c=h,u=d;continue}s[o++]=c,s[o++]=u,a=c,l=u,c=h,u=d}return s[o++]=c,s[o++]=u,o}function Od(t,e,n,r,i,s,o,a){for(let l=0,c=n.length;l<c;++l){const u=n[l];o=X2(t,e,u,r,i,s,o),a.push(o),e=u}return o}function Y2(t,e,n,r,i,s,o,a){for(let l=0,c=n.length;l<c;++l){const u=n[l],h=[];o=Od(t,e,u,r,i,s,o,h),a.push(h),e=u[u.length-1]}return o}function Qr(t,e,n,r,i){i=i!==void 0?i:[];let s=0;for(let o=e;o<n;o+=r)i[s++]=t.slice(o,o+r);return i.length=s,i}function ia(t,e,n,r,i){i=i!==void 0?i:[];let s=0;for(let o=0,a=n.length;o<a;++o){const l=n[o];i[s++]=Qr(t,e,l,r,i[s]),e=l}return i.length=s,i}function uh(t,e,n,r,i){i=i!==void 0?i:[];let s=0;for(let o=0,a=n.length;o<a;++o){const l=n[o];i[s++]=l.length===1&&l[0]===e?[]:ia(t,e,l,r,i[s]),e=l[l.length-1]}return i.length=s,i}function O_(t,e,n,r){let i=0,s=t[n-r],o=t[n-r+1];for(;e<n;e+=r){const a=t[e],l=t[e+1];i+=o*a-s*l,s=a,o=l}return i/2}function F_(t,e,n,r){let i=0;for(let s=0,o=n.length;s<o;++s){const a=n[s];i+=O_(t,e,a,r),e=a}return i}function J2(t,e,n,r){let i=0;for(let s=0,o=n.length;s<o;++s){const a=n[s];i+=F_(t,e,a,r),e=a[a.length-1]}return i}class js extends qi{constructor(e,n){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,n!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(n,e):this.setCoordinates(e,n)}clone(){return new js(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,n,r,i){return i<Ki(this.getExtent(),e,n)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Rd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Id(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,n,r,i))}getArea(){return O_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return Qr(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){const n=[];return n.length=Ic(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n,0),new js(n,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,n){this.setLayout(n,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ac(this.flatCoordinates,0,e,this.stride),this.changed()}}let sa=class N_ extends qi{constructor(e,n){super(),this.setCoordinates(e,n)}clone(){const e=new N_(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,n,r,i){const s=this.flatCoordinates,o=Oi(e,n,s[0],s[1]);if(o<i){const a=this.stride;for(let l=0;l<a;++l)r[l]=s[l];return r.length=a,o}return i}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return m_(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return wd(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,n){this.setLayout(n,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Z2(this.flatCoordinates,0,e,this.stride),this.changed()}};function Q2(t,e,n,r,i){return!y_(i,function(o){return!Ri(t,e,n,r,o[0],o[1])})}function Ri(t,e,n,r,i,s){let o=0,a=t[n-r],l=t[n-r+1];for(;e<n;e+=r){const c=t[e],u=t[e+1];l<=s?u>s&&(c-a)*(s-l)-(i-a)*(u-l)>0&&o++:u<=s&&(c-a)*(s-l)-(i-a)*(u-l)<0&&o--,a=c,l=u}return o!==0}function Fd(t,e,n,r,i,s){if(n.length===0||!Ri(t,e,n[0],r,i,s))return!1;for(let o=1,a=n.length;o<a;++o)if(Ri(t,n[o-1],n[o],r,i,s))return!1;return!0}function eC(t,e,n,r,i,s){if(n.length===0)return!1;for(let o=0,a=n.length;o<a;++o){const l=n[o];if(Fd(t,e,l,r,i,s))return!0;e=l[l.length-1]}return!1}function Nd(t,e,n,r,i,s,o){let a,l,c,u,h,d,f;const g=i[s+1],m=[];for(let y=0,w=n.length;y<w;++y){const b=n[y];for(u=t[b-r],d=t[b-r+1],a=e;a<b;a+=r)h=t[a],f=t[a+1],(g<=d&&f<=g||d<=g&&g<=f)&&(c=(g-d)/(f-d)*(h-u)+u,m.push(c)),u=h,d=f}let p=NaN,_=-1/0;for(m.sort(kr),u=m[0],a=1,l=m.length;a<l;++a){h=m[a];const y=Math.abs(h-u);y>_&&(c=(u+h)/2,Fd(t,e,n,r,c,g)&&(p=c,_=y)),u=h}return isNaN(p)&&(p=i[s]),o?(o.push(p,g,_),o):[p,g,_]}function D_(t,e,n,r,i){let s=[];for(let o=0,a=n.length;o<a;++o){const l=n[o];s=Nd(t,e,l,r,i,2*o,s),e=l[l.length-1]}return s}function G_(t,e,n,r,i){let s;for(e+=r;e<n;e+=r)if(s=i(t.slice(e-r,e),t.slice(e,e+r)),s)return s;return!1}function Lc(t,e,n,r,i){const s=__(vn(),t,e,n,r);return rn(i,s)?fs(i,s)||s[0]>=i[0]&&s[2]<=i[2]||s[1]>=i[1]&&s[3]<=i[3]?!0:G_(t,e,n,r,function(o,a){return M2(i,o,a)}):!1}function tC(t,e,n,r,i){for(let s=0,o=n.length;s<o;++s){if(Lc(t,e,n[s],r,i))return!0;e=n[s]}return!1}function z_(t,e,n,r,i){return!!(Lc(t,e,n,r,i)||Ri(t,e,n,r,i[0],i[1])||Ri(t,e,n,r,i[0],i[3])||Ri(t,e,n,r,i[2],i[1])||Ri(t,e,n,r,i[2],i[3]))}function B_(t,e,n,r,i){if(!z_(t,e,n[0],r,i))return!1;if(n.length===1)return!0;for(let s=1,o=n.length;s<o;++s)if(Q2(t,n[s-1],n[s],r,i)&&!Lc(t,n[s-1],n[s],r,i))return!1;return!0}function nC(t,e,n,r,i){for(let s=0,o=n.length;s<o;++s){const a=n[s];if(B_(t,e,a,r,i))return!0;e=a[a.length-1]}return!1}function rC(t,e,n,r){for(;e<n-r;){for(let i=0;i<r;++i){const s=t[e+i];t[e+i]=t[n-r+i],t[n-r+i]=s}e+=r,n-=r}}function Dd(t,e,n,r){let i=0,s=t[n-r],o=t[n-r+1];for(;e<n;e+=r){const a=t[e],l=t[e+1];i+=(a-s)*(l+o),s=a,o=l}return i===0?void 0:i>0}function Gd(t,e,n,r,i){i=i!==void 0?i:!1;for(let s=0,o=n.length;s<o;++s){const a=n[s],l=Dd(t,e,a,r);if(s===0){if(i&&l||!i&&!l)return!1}else if(i&&!l||!i&&l)return!1;e=a}return!0}function j_(t,e,n,r,i){for(let s=0,o=n.length;s<o;++s){const a=n[s];if(!Gd(t,e,a,r,i))return!1;a.length&&(e=a[a.length-1])}return!0}function Bl(t,e,n,r,i){i=i!==void 0?i:!1;for(let s=0,o=n.length;s<o;++s){const a=n[s],l=Dd(t,e,a,r);(s===0?i&&l||!i&&!l:i&&!l||!i&&l)&&rC(t,e,a,r),e=a}return e}function hh(t,e,n,r,i){for(let s=0,o=n.length;s<o;++s)e=Bl(t,e,n[s],r,i);return e}function iC(t,e){const n=[];let r=0,i=0,s;for(let o=0,a=e.length;o<a;++o){const l=e[o],c=Dd(t,r,l,2);if(s===void 0&&(s=c),c===s)n.push(e.slice(i,o+1));else{if(n.length===0)continue;n[n.length-1].push(e[i])}i=o+1,r=l}return n}class or extends qi{constructor(e,n,r){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,n!==void 0&&r?(this.setFlatCoordinates(n,e),this.ends_=r):this.setCoordinates(e,n)}appendLinearRing(e){this.flatCoordinates?Yt(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new or(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,n,r,i){return i<Ki(this.getExtent(),e,n)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ad(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ld(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,n,r,i))}containsXY(e,n){return Fd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,n)}getArea(){return F_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let n;return e!==void 0?(n=this.getOrientedFlatCoordinates().slice(),Bl(n,0,this.ends_,this.stride,e)):n=this.flatCoordinates,ia(n,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const e=ui(this.getExtent());this.flatInteriorPoint_=Nd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new sa(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new js(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){const e=this.layout,n=this.flatCoordinates,r=this.ends_,i=[];let s=0;for(let o=0,a=r.length;o<a;++o){const l=r[o],c=new js(n.slice(s,l),e);i.push(c),s=l}return i}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;Gd(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Bl(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const n=[],r=[];return n.length=Od(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),n,0,r),new or(n,"XY",r)}getType(){return"Polygon"}intersectsExtent(e){return B_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const r=Pa(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=r.length===0?0:r[r.length-1],this.changed()}}function Xg(t){if(ka(t))throw new Error("Cannot create polygon from empty extent");const e=t[0],n=t[1],r=t[2],i=t[3],s=[e,n,e,i,r,i,r,n,e,n];return new or(s,"XY",[s.length])}const hu=0;class Hn extends lr{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Md(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&x_(),e.center&&(e.center=yr(e.center,this.projection_)),e.extent&&(e.extent=Ti(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){const n=Object.assign({},e);for(const a in In)delete n[a];this.setProperties(n,!0);const r=oC(e);this.maxResolution_=r.maxResolution,this.minResolution_=r.minResolution,this.zoomFactor_=r.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=r.minZoom;const i=sC(e),s=r.constraint,o=aC(e);this.constraints_={center:i,resolution:s,rotation:o},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let n=this.padding_;this.padding_=e;const r=this.getCenterInternal();if(r){const i=e||[0,0,0,0];n=n||[0,0,0,0];const s=this.getResolution(),o=s/2*(i[3]-n[3]+n[1]-i[1]),a=s/2*(i[0]-n[0]+n[2]-i[2]);this.setCenterInternal([r[0]+o,r[1]-a])}}getUpdatedOptions_(e){const n=this.getProperties();return n.resolution!==void 0?n.resolution=this.getResolution():n.zoom=this.getZoom(),n.center=this.getCenterInternal(),n.rotation=this.getRotation(),Object.assign({},n,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const n=new Array(arguments.length);for(let r=0;r<n.length;++r){let i=arguments[r];i.center&&(i=Object.assign({},i),i.center=yr(i.center,this.getProjection())),i.anchor&&(i=Object.assign({},i),i.anchor=yr(i.anchor,this.getProjection())),n[r]=i}this.animateInternal.apply(this,n)}animateInternal(e){let n=arguments.length,r;n>1&&typeof arguments[n-1]=="function"&&(r=arguments[n-1],--n);let i=0;for(;i<n&&!this.isDef();++i){const u=arguments[i];u.center&&this.setCenterInternal(u.center),u.zoom!==void 0?this.setZoom(u.zoom):u.resolution&&this.setResolution(u.resolution),u.rotation!==void 0&&this.setRotation(u.rotation)}if(i===n){r&&Qa(r,!0);return}let s=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_;const c=[];for(;i<n;++i){const u=arguments[i],h={start:s,complete:!1,anchor:u.anchor,duration:u.duration!==void 0?u.duration:1e3,easing:u.easing||z2,callback:r};if(u.center&&(h.sourceCenter=o,h.targetCenter=u.center.slice(),o=h.targetCenter),u.zoom!==void 0?(h.sourceResolution=a,h.targetResolution=this.getResolutionForZoom(u.zoom),a=h.targetResolution):u.resolution&&(h.sourceResolution=a,h.targetResolution=u.resolution,a=h.targetResolution),u.rotation!==void 0){h.sourceRotation=l;const d=Fi(u.rotation-l+Math.PI,2*Math.PI)-Math.PI;h.targetRotation=l+d,l=h.targetRotation}lC(h)?h.complete=!0:s+=h.duration,c.push(h)}this.animations_.push(c),this.setHint(Ot.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Ot.ANIMATING]>0}getInteracting(){return this.hints_[Ot.INTERACTING]>0}cancelAnimations(){this.setHint(Ot.ANIMATING,-this.hints_[Ot.ANIMATING]);let e;for(let n=0,r=this.animations_.length;n<r;++n){const i=this.animations_[n];if(i[0].callback&&Qa(i[0].callback,!1),!e)for(let s=0,o=i.length;s<o;++s){const a=i[s];if(!a.complete){e=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const e=Date.now();let n=!1;for(let r=this.animations_.length-1;r>=0;--r){const i=this.animations_[r];let s=!0;for(let o=0,a=i.length;o<a;++o){const l=i[o];if(l.complete)continue;const c=e-l.start;let u=l.duration>0?c/l.duration:1;u>=1?(l.complete=!0,u=1):s=!1;const h=l.easing(u);if(l.sourceCenter){const d=l.sourceCenter[0],f=l.sourceCenter[1],g=l.targetCenter[0],m=l.targetCenter[1];this.nextCenter_=l.targetCenter;const p=d+h*(g-d),_=f+h*(m-f);this.targetCenter_=[p,_]}if(l.sourceResolution&&l.targetResolution){const d=h===1?l.targetResolution:l.sourceResolution+h*(l.targetResolution-l.sourceResolution);if(l.anchor){const f=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(d,0,f,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=d,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const d=h===1?Fi(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+h*(l.targetRotation-l.sourceRotation);if(l.anchor){const f=this.constraints_.rotation(d,!0);this.targetCenter_=this.calculateCenterRotate(f,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=d}if(this.applyTargetState_(!0),n=!0,!l.complete)break}if(s){this.animations_[r]=null,this.setHint(Ot.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const o=i[0].callback;o&&Qa(o,!0)}}this.animations_=this.animations_.filter(Boolean),n&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,n){let r;const i=this.getCenterInternal();return i!==void 0&&(r=[i[0]-n[0],i[1]-n[1]],bd(r,e-this.getRotation()),C2(r,n)),r}calculateCenterZoom(e,n){let r;const i=this.getCenterInternal(),s=this.getResolution();if(i!==void 0&&s!==void 0){const o=n[0]-e*(n[0]-i[0])/s,a=n[1]-e*(n[1]-i[1])/s;r=[o,a]}return r}getViewportSize_(e){const n=this.viewportSize_;if(e){const r=n[0],i=n[1];return[Math.abs(r*Math.cos(e))+Math.abs(i*Math.sin(e)),Math.abs(r*Math.sin(e))+Math.abs(i*Math.cos(e))]}return n}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const e=this.getCenterInternal();return e&&ch(e,this.getProjection())}getCenterInternal(){return this.get(In.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){const n=this.calculateExtentInternal(e);return P_(n,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();const n=this.getCenterInternal();Ne(n,"The view center is not defined");const r=this.getResolution();Ne(r!==void 0,"The view resolution is not defined");const i=this.getRotation();return Ne(i!==void 0,"The view rotation is not defined"),sh(n,r,i,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(In.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,n){return this.getResolutionForExtentInternal(Ti(e,this.getProjection()),n)}getResolutionForExtentInternal(e,n){n=n||this.getViewportSizeMinusPadding_();const r=ze(e)/n[0],i=zt(e)/n[1];return Math.max(r,i)}getResolutionForValueFunction(e){e=e||2;const n=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,i=Math.log(n/r)/Math.log(e);return function(s){return n/Math.pow(e,s*i)}}getRotation(){return this.get(In.ROTATION)}getValueForResolutionFunction(e){const n=Math.log(e||2),r=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,s=Math.log(r/i)/n;return function(o){return Math.log(r/o)/n/s}}getViewportSizeMinusPadding_(e){let n=this.getViewportSize_(e);const r=this.padding_;return r&&(n=[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]),n}getState(){const e=this.getProjection(),n=this.getResolution(),r=this.getRotation();let i=this.getCenterInternal();const s=this.padding_;if(s){const o=this.getViewportSizeMinusPadding_();i=du(i,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],n,r)}return{center:i.slice(0),projection:e!==void 0?e:null,resolution:n,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:r,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e;const n=this.getResolution();return n!==void 0&&(e=this.getZoomForResolution(n)),e}getZoomForResolution(e){let n=this.minZoom_||0,r,i;if(this.resolutions_){const s=pd(this.resolutions_,e,1);n=s,r=this.resolutions_[s],s==this.resolutions_.length-1?i=2:i=r/this.resolutions_[s+1]}else r=this.maxResolution_,i=this.zoomFactor_;return n+Math.log(r/e)/Math.log(i)}getResolutionForZoom(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const n=mt(Math.floor(e),0,this.resolutions_.length-2),r=this.resolutions_[n]/this.resolutions_[n+1];return this.resolutions_[n]/Math.pow(r,mt(e-n,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,n){let r;if(Ne(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){Ne(!ka(e),"Cannot fit empty extent provided as `geometry`");const i=Ti(e,this.getProjection());r=Xg(i)}else if(e.getType()==="Circle"){const i=Ti(e.getExtent(),this.getProjection());r=Xg(i),r.rotate(this.getRotation(),ui(i))}else r=e;this.fitInternal(r,n)}rotatedExtentForGeometry(e){const n=this.getRotation(),r=Math.cos(n),i=Math.sin(-n),s=e.getFlatCoordinates(),o=e.getStride();let a=1/0,l=1/0,c=-1/0,u=-1/0;for(let h=0,d=s.length;h<d;h+=o){const f=s[h]*r-s[h+1]*i,g=s[h]*i+s[h+1]*r;a=Math.min(a,f),l=Math.min(l,g),c=Math.max(c,f),u=Math.max(u,g)}return[a,l,c,u]}fitInternal(e,n){n=n||{};let r=n.size;r||(r=this.getViewportSizeMinusPadding_());const i=n.padding!==void 0?n.padding:[0,0,0,0],s=n.nearest!==void 0?n.nearest:!1;let o;n.minResolution!==void 0?o=n.minResolution:n.maxZoom!==void 0?o=this.getResolutionForZoom(n.maxZoom):o=0;const a=this.rotatedExtentForGeometry(e);let l=this.getResolutionForExtentInternal(a,[r[0]-i[1]-i[3],r[1]-i[0]-i[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,s?0:1);const c=this.getRotation(),u=Math.sin(c),h=Math.cos(c),d=ui(a);d[0]+=(i[1]-i[3])/2*l,d[1]+=(i[0]-i[2])/2*l;const f=d[0]*h-d[1]*u,g=d[1]*h+d[0]*u,m=this.getConstrainedCenter([f,g],l),p=n.callback?n.callback:Ds;n.duration!==void 0?this.animateInternal({resolution:l,center:m,duration:n.duration,easing:n.easing},p):(this.targetResolution_=l,this.targetCenter_=m,this.applyTargetState_(!1,!0),Qa(p,!0))}centerOn(e,n,r){this.centerOnInternal(yr(e,this.getProjection()),n,r)}centerOnInternal(e,n,r){this.setCenterInternal(du(e,n,r,this.getResolution(),this.getRotation()))}calculateCenterShift(e,n,r,i){let s;const o=this.padding_;if(o&&e){const a=this.getViewportSizeMinusPadding_(-r),l=du(e,i,[a[0]/2+o[3],a[1]/2+o[0]],n,r);s=[e[0]-l[0],e[1]-l[1]]}return s}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){const n=ch(this.targetCenter_,this.getProjection());this.setCenter([n[0]+e[0],n[1]+e[1]])}adjustCenterInternal(e){const n=this.targetCenter_;this.setCenterInternal([n[0]+e[0],n[1]+e[1]])}adjustResolution(e,n){n=n&&yr(n,this.getProjection()),this.adjustResolutionInternal(e,n)}adjustResolutionInternal(e,n){const r=this.getAnimating()||this.getInteracting(),i=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*e,0,i,r);n&&(this.targetCenter_=this.calculateCenterZoom(s,n)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,n){this.adjustResolution(Math.pow(this.zoomFactor_,-e),n)}adjustRotation(e,n){n&&(n=yr(n,this.getProjection())),this.adjustRotationInternal(e,n)}adjustRotationInternal(e,n){const r=this.getAnimating()||this.getInteracting(),i=this.constraints_.rotation(this.targetRotation_+e,r);n&&(this.targetCenter_=this.calculateCenterRotate(i,n)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&yr(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,n){return this.hints_[e]+=n,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,n){const r=this.getAnimating()||this.getInteracting()||n,i=this.constraints_.rotation(this.targetRotation_,r),s=this.getViewportSize_(i),o=this.constraints_.resolution(this.targetResolution_,0,s,r),a=this.constraints_.center(this.targetCenter_,o,s,r,this.calculateCenterShift(this.targetCenter_,o,i,s));this.get(In.ROTATION)!==i&&this.set(In.ROTATION,i),this.get(In.RESOLUTION)!==o&&(this.set(In.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(In.CENTER)||!zl(this.get(In.CENTER),a))&&this.set(In.CENTER,a),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,n,r){e=e!==void 0?e:200;const i=n||0,s=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(s),a=this.constraints_.resolution(this.targetResolution_,i,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,s,o));if(e===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=s,this.targetCenter_=l,this.applyTargetState_();return}r=r||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==s||!this.getCenterInternal()||!zl(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:l,resolution:a,duration:e,easing:Js,anchor:r}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Ot.INTERACTING,1)}endInteraction(e,n,r){r=r&&yr(r,this.getProjection()),this.endInteractionInternal(e,n,r)}endInteractionInternal(e,n,r){this.getInteracting()&&(this.setHint(Ot.INTERACTING,-1),this.resolveConstraints(e,n,r))}getConstrainedCenter(e,n){const r=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,n||this.getResolution(),r)}getConstrainedZoom(e,n){const r=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(r,n))}getConstrainedResolution(e,n){n=n||0;const r=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,n,r)}}function Qa(t,e){setTimeout(function(){t(e)},0)}function sC(t){if(t.extent!==void 0){const n=t.smoothExtentConstraint!==void 0?t.smoothExtentConstraint:!0;return Vg(t.extent,t.constrainOnlyCenter,n)}const e=Md(t.projection,"EPSG:3857");if(t.multiWorld!==!0&&e.isGlobal()){const n=e.getExtent().slice();return n[0]=-1/0,n[2]=1/0,Vg(n,!1,!1)}return O2}function oC(t){let e,n,r,o=t.minZoom!==void 0?t.minZoom:hu,a=t.maxZoom!==void 0?t.maxZoom:28;const l=t.zoomFactor!==void 0?t.zoomFactor:2,c=t.multiWorld!==void 0?t.multiWorld:!1,u=t.smoothResolutionConstraint!==void 0?t.smoothResolutionConstraint:!0,h=t.showFullExtent!==void 0?t.showFullExtent:!1,d=Md(t.projection,"EPSG:3857"),f=d.getExtent();let g=t.constrainOnlyCenter,m=t.extent;if(!c&&!m&&d.isGlobal()&&(g=!1,m=f),t.resolutions!==void 0){const p=t.resolutions;n=p[o],r=p[a]!==void 0?p[a]:p[p.length-1],t.constrainResolution?e=F2(p,u,!g&&m,h):e=Ug(n,r,u,!g&&m,h)}else{const _=(f?Math.max(ze(f),zt(f)):360*yd.degrees/d.getMetersPerUnit())/_d/Math.pow(2,hu),y=_/Math.pow(2,28-hu);n=t.maxResolution,n!==void 0?o=0:n=_/Math.pow(l,o),r=t.minResolution,r===void 0&&(t.maxZoom!==void 0?t.maxResolution!==void 0?r=n/Math.pow(l,a):r=_/Math.pow(l,a):r=y),a=o+Math.floor(Math.log(n/r)/Math.log(l)),r=n/Math.pow(l,a-o),t.constrainResolution?e=N2(l,n,r,u,!g&&m,h):e=Ug(n,r,u,!g&&m,h)}return{constraint:e,maxResolution:n,minResolution:r,minZoom:o,zoomFactor:l}}function aC(t){if(t.enableRotation!==void 0?t.enableRotation:!0){const n=t.constrainRotation;return n===void 0||n===!0?G2():n===!1?Kg:typeof n=="number"?D2(n):Kg}return Pd}function lC(t){return!(t.sourceCenter&&t.targetCenter&&!zl(t.sourceCenter,t.targetCenter)||t.sourceResolution!==t.targetResolution||t.sourceRotation!==t.targetRotation)}function du(t,e,n,r,i){const s=Math.cos(-i);let o=Math.sin(-i),a=t[0]*s-t[1]*o,l=t[1]*s+t[0]*o;a+=(e[0]/2-n[0])*r,l+=(n[1]-e[1]/2)*r,o=-o;const c=a*s-l*o,u=l*s+a*o;return[c,u]}class Oc extends d_{constructor(e){const n=Object.assign({},e);delete n.source,super(n),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(Ze.SOURCE,this.handleSourcePropertyChange_);const r=e.source?e.source:null;this.setSource(r)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(Ze.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(st(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const e=this.getSource();e&&(this.sourceChangeKey_=Fe(e,Se.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let n;const r=this.getMapInternal();!e&&r&&(e=r.getView()),e instanceof Hn?n={viewState:e.getState(),extent:e.calculateExtent()}:n=e,!n.layerStatesArray&&r&&(n.layerStatesArray=r.getLayerGroup().getLayerStatesArray());let i;n.layerStatesArray?i=n.layerStatesArray.find(o=>o.layer===this):i=this.getLayerState();const s=this.getExtent();return zd(i,n.viewState)&&(!s||rn(s,n.extent))}getAttributions(e){if(!this.isVisible(e))return[];let n;const r=this.getSource();if(r&&(n=r.getAttributions()),!n)return[];const i=e instanceof Hn?e.getViewStateAndExtent():e;let s=n(i);return Array.isArray(s)||(s=[s]),s}render(e,n){const r=this.getRenderer();return r.prepareFrame(e)?(this.rendered=!0,r.renderFrame(e,n)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(e,n){}renderDeferred(e){const n=this.getRenderer();n&&n.renderDeferred(e)}setMapInternal(e){e||this.unrender(),this.set(Ze.MAP,e)}getMapInternal(){return this.get(Ze.MAP)}setMap(e){this.mapPrecomposeKey_&&(st(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(st(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=Fe(e,Cn.PRECOMPOSE,function(n){const i=n.frameState.layerStatesArray,s=this.getLayerState(!1);Ne(!i.some(function(o){return o.layer===s.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),i.push(s)},this),this.mapRenderKey_=Fe(this,Se.CHANGE,e.render,e),this.changed())}setSource(e){this.set(Ze.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function zd(t,e){if(!t.visible)return!1;const n=e.resolution;if(n<t.minResolution||n>=t.maxResolution)return!1;const r=e.zoom;return r>t.minZoom&&r<=t.maxZoom}function cC(t,e,n,r,i){W_(t,e,n||0,r||t.length-1,i||uC)}function W_(t,e,n,r,i){for(;r>n;){if(r-n>600){var s=r-n+1,o=e-n+1,a=Math.log(s),l=.5*Math.exp(2*a/3),c=.5*Math.sqrt(a*l*(s-l)/s)*(o-s/2<0?-1:1),u=Math.max(n,Math.floor(e-o*l/s+c)),h=Math.min(r,Math.floor(e+(s-o)*l/s+c));W_(t,e,u,h,i)}var d=t[e],f=n,g=r;for(fo(t,n,e),i(t[r],d)>0&&fo(t,n,r);f<g;){for(fo(t,f,g),f++,g--;i(t[f],d)<0;)f++;for(;i(t[g],d)>0;)g--}i(t[n],d)===0?fo(t,n,g):(g++,fo(t,g,r)),g<=e&&(n=g+1),e<=g&&(r=g-1)}}function fo(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function uC(t,e){return t<e?-1:t>e?1:0}let V_=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let n=this.data;const r=[];if(!tl(e,n))return r;const i=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const a=n.children[o],l=n.leaf?i(a):a;tl(e,l)&&(n.leaf?r.push(a):gu(e,l)?this._all(a,r):s.push(a))}n=s.pop()}return r}collides(e){let n=this.data;if(!tl(e,n))return!1;const r=[];for(;n;){for(let i=0;i<n.children.length;i++){const s=n.children[i],o=n.leaf?this.toBBox(s):s;if(tl(e,o)){if(n.leaf||gu(e,o))return!0;r.push(s)}}n=r.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let r=0;r<e.length;r++)this.insert(e[r]);return this}let n=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=as([]),this}remove(e,n){if(!e)return this;let r=this.data;const i=this.toBBox(e),s=[],o=[];let a,l,c;for(;r||s.length;){if(r||(r=s.pop(),l=s[s.length-1],a=o.pop(),c=!0),r.leaf){const u=hC(e,r.children,n);if(u!==-1)return r.children.splice(u,1),s.push(r),this._condense(s),this}!c&&!r.leaf&&gu(r,i)?(s.push(r),o.push(a),a=0,l=r,r=r.children[0]):l?(a++,r=l.children[a],c=!1):r=null}return this}toBBox(e){return e}compareMinX(e,n){return e.minX-n.minX}compareMinY(e,n){return e.minY-n.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,n){const r=[];for(;e;)e.leaf?n.push(...e.children):r.push(...e.children),e=r.pop();return n}_build(e,n,r,i){const s=r-n+1;let o=this._maxEntries,a;if(s<=o)return a=as(e.slice(n,r+1)),ts(a,this.toBBox),a;i||(i=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,i-1))),a=as([]),a.leaf=!1,a.height=i;const l=Math.ceil(s/o),c=l*Math.ceil(Math.sqrt(o));Yg(e,n,r,c,this.compareMinX);for(let u=n;u<=r;u+=c){const h=Math.min(u+c-1,r);Yg(e,u,h,l,this.compareMinY);for(let d=u;d<=h;d+=l){const f=Math.min(d+l-1,h);a.children.push(this._build(e,d,f,i-1))}}return ts(a,this.toBBox),a}_chooseSubtree(e,n,r,i){for(;i.push(n),!(n.leaf||i.length-1===r);){let s=1/0,o=1/0,a;for(let l=0;l<n.children.length;l++){const c=n.children[l],u=fu(c),h=gC(e,c)-u;h<o?(o=h,s=u<s?u:s,a=c):h===o&&u<s&&(s=u,a=c)}n=a||n.children[0]}return n}_insert(e,n,r){const i=r?e:this.toBBox(e),s=[],o=this._chooseSubtree(i,this.data,n,s);for(o.children.push(e),bo(o,i);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(i,s,n)}_split(e,n){const r=e[n],i=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,i);const o=this._chooseSplitIndex(r,s,i),a=as(r.children.splice(o,r.children.length-o));a.height=r.height,a.leaf=r.leaf,ts(r,this.toBBox),ts(a,this.toBBox),n?e[n-1].children.push(a):this._splitRoot(r,a)}_splitRoot(e,n){this.data=as([e,n]),this.data.height=e.height+1,this.data.leaf=!1,ts(this.data,this.toBBox)}_chooseSplitIndex(e,n,r){let i,s=1/0,o=1/0;for(let a=n;a<=r-n;a++){const l=So(e,0,a,this.toBBox),c=So(e,a,r,this.toBBox),u=mC(l,c),h=fu(l)+fu(c);u<s?(s=u,i=a,o=h<o?h:o):u===s&&h<o&&(o=h,i=a)}return i||r-n}_chooseSplitAxis(e,n,r){const i=e.leaf?this.compareMinX:dC,s=e.leaf?this.compareMinY:fC,o=this._allDistMargin(e,n,r,i),a=this._allDistMargin(e,n,r,s);o<a&&e.children.sort(i)}_allDistMargin(e,n,r,i){e.children.sort(i);const s=this.toBBox,o=So(e,0,n,s),a=So(e,r-n,r,s);let l=el(o)+el(a);for(let c=n;c<r-n;c++){const u=e.children[c];bo(o,e.leaf?s(u):u),l+=el(o)}for(let c=r-n-1;c>=n;c--){const u=e.children[c];bo(a,e.leaf?s(u):u),l+=el(a)}return l}_adjustParentBBoxes(e,n,r){for(let i=r;i>=0;i--)bo(n[i],e)}_condense(e){for(let n=e.length-1,r;n>=0;n--)e[n].children.length===0?n>0?(r=e[n-1].children,r.splice(r.indexOf(e[n]),1)):this.clear():ts(e[n],this.toBBox)}};function hC(t,e,n){if(!n)return e.indexOf(t);for(let r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function ts(t,e){So(t,0,t.children.length,e,t)}function So(t,e,n,r,i){i||(i=as(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s=e;s<n;s++){const o=t.children[s];bo(i,t.leaf?r(o):o)}return i}function bo(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function dC(t,e){return t.minX-e.minX}function fC(t,e){return t.minY-e.minY}function fu(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function el(t){return t.maxX-t.minX+(t.maxY-t.minY)}function gC(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function mC(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function gu(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function tl(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function as(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Yg(t,e,n,r,i){const s=[e,n];for(;s.length;){if(n=s.pop(),e=s.pop(),n-e<=r)continue;const o=e+Math.ceil((n-e)/r/2)*r;cC(t,o,e,n,i),s.push(e,o,o,n)}}const Ce={IDLE:0,LOADING:1,LOADED:2,ERROR:3};function Jg(t){return t[0]>0&&t[1]>0}function pC(t,e,n){return n===void 0&&(n=[0,0]),n[0]=t[0]*e+.5|0,n[1]=t[1]*e+.5|0,n}function yn(t,e){return Array.isArray(t)?t:(e===void 0?e=[t,t]:(e[0]=t,e[1]=t),e)}class Fc{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=yn(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){const e=this.getScale();return new Fc({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return pe()}getImage(e){return pe()}getHitDetectionImage(){return pe()}getPixelRatio(e){return 1}getImageState(){return pe()}getImageSize(){return pe()}getOrigin(){return pe()}getSize(){return pe()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=yn(e)}listenImageChange(e){pe()}load(){pe()}unlistenImageChange(e){pe()}ready(){return Promise.resolve()}}const oa={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},Bt={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"],whitepoint:{2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}}};Bt.max=Bt.whitepoint[2].D65;Bt.rgb=function(t,e){e=e||Bt.whitepoint[2].E;var n=t[0]/e[0],r=t[1]/e[1],i=t[2]/e[2],s,o,a;return s=n*3.240969941904521+r*-1.537383177570093+i*-.498610760293,o=n*-.96924363628087+r*1.87596750150772+i*.041555057407175,a=n*.055630079696993+r*-.20397695888897+i*1.056971514242878,s=s>.0031308?1.055*Math.pow(s,1/2.4)-.055:s=s*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,s=Math.min(Math.max(0,s),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[s*255,o*255,a*255]};oa.xyz=function(t,e){var n=t[0]/255,r=t[1]/255,i=t[2]/255;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var s=n*.41239079926595+r*.35758433938387+i*.18048078840183,o=n*.21263900587151+r*.71516867876775+i*.072192315360733,a=n*.019330818715591+r*.11919477979462+i*.95053215224966;return e=e||Bt.whitepoint[2].E,[s*e[0],o*e[1],a*e[2]]};var Bd={name:"luv",min:[0,-134,-140],max:[100,224,122],channel:["lightness","u","v"],alias:["LUV","cieluv","cie1976"],xyz:function(t,e,n){var r,i,s,o,a,l,c,u,h,d,f,g,m;if(s=t[0],o=t[1],a=t[2],s===0)return[0,0,0];var p=.0011070564598794539;return e=e||"D65",n=n||2,h=Bt.whitepoint[n][e][0],d=Bt.whitepoint[n][e][1],f=Bt.whitepoint[n][e][2],g=4*h/(h+15*d+3*f),m=9*d/(h+15*d+3*f),r=o/(13*s)+g||0,i=a/(13*s)+m||0,c=s>8?d*Math.pow((s+16)/116,3):d*s*p,l=c*9*r/(4*i)||0,u=c*(12-3*r-20*i)/(4*i)||0,[l,c,u]}};Bt.luv=function(t,e,n){var r,i,s,o,a,l,c,u,h,d,f,g,m,p=.008856451679035631,_=903.2962962962961;e=e||"D65",n=n||2,h=Bt.whitepoint[n][e][0],d=Bt.whitepoint[n][e][1],f=Bt.whitepoint[n][e][2],g=4*h/(h+15*d+3*f),m=9*d/(h+15*d+3*f),l=t[0],c=t[1],u=t[2],r=4*l/(l+15*c+3*u)||0,i=9*c/(l+15*c+3*u)||0;var y=c/d;return s=y<=p?_*y:116*Math.pow(y,1/3)-16,o=13*s*(r-g),a=13*s*(i-m),[s,o,a]};var U_={name:"lchuv",channel:["lightness","chroma","hue"],alias:["LCHuv","cielchuv"],min:[0,0,0],max:[100,100,360],luv:function(t){var e=t[0],n=t[1],r=t[2],i,s,o;return o=r/360*2*Math.PI,i=n*Math.cos(o),s=n*Math.sin(o),[e,i,s]},xyz:function(t){return Bd.xyz(U_.luv(t))}};Bd.lchuv=function(t){var e=t[0],n=t[1],r=t[2],i=Math.sqrt(n*n+r*r),s=Math.atan2(r,n),o=s*360/2/Math.PI;return o<0&&(o+=360),[e,i,o]};Bt.lchuv=function(t){return Bd.lchuv(Bt.luv(t))};const dh={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const t in dh)Object.freeze(dh[t]);const Qg=Object.freeze(dh);var em={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function _C(t){var u,h;var e,n=[],r=1,i;if(typeof t=="number")return{space:"rgb",values:[t>>>16,(t&65280)>>>8,t&255],alpha:1};if(typeof t=="number")return{space:"rgb",values:[t>>>16,(t&65280)>>>8,t&255],alpha:1};if(t=String(t).toLowerCase(),Qg[t])n=Qg[t].slice(),i="rgb";else if(t==="transparent")r=0,i="rgb",n=[0,0,0];else if(t[0]==="#"){var s=t.slice(1),o=s.length,a=o<=4;r=1,a?(n=[parseInt(s[0]+s[0],16),parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16)],o===4&&(r=parseInt(s[3]+s[3],16)/255)):(n=[parseInt(s[0]+s[1],16),parseInt(s[2]+s[3],16),parseInt(s[4]+s[5],16)],o===8&&(r=parseInt(s[6]+s[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),i="rgb"}else if(e=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(t)){var l=e[1];i=l.replace(/a$/,"");var c=i==="cmyk"?4:i==="gray"?1:3;n=e[2].trim().split(/\s*[,\/]\s*|\s+/),i==="color"&&(i=n.shift()),n=n.map(function(d,f){if(d[d.length-1]==="%")return d=parseFloat(d)/100,f===3?d:i==="rgb"?d*255:i[0]==="h"||i[0]==="l"&&!f?d*100:i==="lab"?d*125:i==="lch"?f<2?d*150:d*360:i[0]==="o"&&!f?d:i==="oklab"?d*.4:i==="oklch"?f<2?d*.4:d*360:d;if(i[f]==="h"||f===2&&i[i.length-1]==="h"){if(em[d]!==void 0)return em[d];if(d.endsWith("deg"))return parseFloat(d);if(d.endsWith("turn"))return parseFloat(d)*360;if(d.endsWith("grad"))return parseFloat(d)*360/400;if(d.endsWith("rad"))return parseFloat(d)*180/Math.PI}return d==="none"?0:parseFloat(d)}),r=n.length>c?n.pop():1}else/[0-9](?:\s|\/|,)/.test(t)&&(n=t.match(/([0-9]+)/g).map(function(d){return parseFloat(d)}),i=((h=(u=t.match(/([a-z])/ig))==null?void 0:u.join(""))==null?void 0:h.toLowerCase())||"rgb");return{space:i,values:n,alpha:r}}var mu={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(t){var e=t[0]/360,n=t[1]/100,r=t[2]/100,i,s,o,a,l,c=0;if(n===0)return l=r*255,[l,l,l];for(s=r<.5?r*(1+n):r+n-r*n,i=2*r-s,a=[0,0,0];c<3;)o=e+1/3*-(c-1),o<0?o++:o>1&&o--,l=6*o<1?i+(s-i)*6*o:2*o<1?s:3*o<2?i+(s-i)*(2/3-o)*6:i,a[c++]=l*255;return a}};oa.hsl=function(t){var e=t[0]/255,n=t[1]/255,r=t[2]/255,i=Math.min(e,n,r),s=Math.max(e,n,r),o=s-i,a,l,c;return s===i?a=0:e===s?a=(n-r)/o:n===s?a=2+(r-e)/o:r===s&&(a=4+(e-n)/o),a=Math.min(a*60,360),a<0&&(a+=360),c=(i+s)/2,s===i?l=0:c<=.5?l=o/(s+i):l=o/(2-s-i),[a,l*100,c*100]};function yC(t){Array.isArray(t)&&t.raw&&(t=String.raw(...arguments)),t instanceof Number&&(t=+t);var e,n=_C(t);if(!n.space)return[];const r=n.space[0]==="h"?mu.min:oa.min,i=n.space[0]==="h"?mu.max:oa.max;return e=Array(3),e[0]=Math.min(Math.max(n.values[0],r[0]),i[0]),e[1]=Math.min(Math.max(n.values[1],r[1]),i[1]),e[2]=Math.min(Math.max(n.values[2],r[2]),i[2]),n.space[0]==="h"&&(e=mu.rgb(e)),e.push(Math.min(Math.max(n.alpha,0),1)),e}function vC(t){return typeof t=="string"?t:Wd(t)}const wC=1024,go={};let pu=0;function SC(t){if(t.length===4)return t;const e=t.slice();return e[3]=1,e}function tm(t){const e=Bt.lchuv(oa.xyz(t));return e[3]=t[3],e}function bC(t){const e=Bt.rgb(U_.xyz(t));return e[3]=t[3],e}function jd(t){if(go.hasOwnProperty(t))return go[t];if(pu>=wC){let n=0;for(const r in go)n++&3||(delete go[r],--pu)}const e=yC(t);if(e.length!==4)throw new Error('Failed to parse "'+t+'" as color');for(const n of e)if(isNaN(n))throw new Error('Failed to parse "'+t+'" as color');return K_(e),go[t]=e,++pu,e}function aa(t){return Array.isArray(t)?t:jd(t)}function K_(t){return t[0]=mt(t[0]+.5|0,0,255),t[1]=mt(t[1]+.5|0,0,255),t[2]=mt(t[2]+.5|0,0,255),t[3]=mt(t[3],0,1),t}function Wd(t){let e=t[0];e!=(e|0)&&(e=e+.5|0);let n=t[1];n!=(n|0)&&(n=n+.5|0);let r=t[2];r!=(r|0)&&(r=r+.5|0);const i=t[3]===void 0?1:Math.round(t[3]*1e3)/1e3;return"rgba("+e+","+n+","+r+","+i+")"}function EC(t){try{return jd(t),!0}catch{return!1}}const hi=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",MC=hi.includes("firefox"),xC=hi.includes("safari")&&!hi.includes("chrom");xC&&(hi.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(hi));const CC=hi.includes("webkit")&&!hi.includes("edge"),$_=hi.includes("macintosh"),q_=typeof devicePixelRatio<"u"?devicePixelRatio:1,H_=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Z_=typeof Image<"u"&&Image.prototype.decode,X_=function(){let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return t}();function Rt(t,e,n,r){let i;return n&&n.length?i=n.shift():H_?i=new OffscreenCanvas(t||300,e||300):i=document.createElement("canvas"),t&&(i.width=t),e&&(i.height=e),i.getContext("2d",r)}let _u;function jl(){return _u||(_u=Rt(1,1)),_u}function Nc(t){const e=t.canvas;e.width=1,e.height=1,t.clearRect(0,0,1,1)}function nm(t,e){const n=e.parentNode;n&&n.replaceChild(t,e)}function fh(t){return t&&t.parentNode?t.parentNode.removeChild(t):null}function kC(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function PC(t,e){const n=t.childNodes;for(let r=0;;++r){const i=n[r],s=e[r];if(!i&&!s)break;if(i!==s){if(!i){t.appendChild(s);continue}if(!s){t.removeChild(i),--r;continue}t.insertBefore(s,i)}}}function TC(t,e,n){const r=t;let i=!0,s=!1,o=!1;const a=[Gl(r,Se.LOAD,function(){o=!0,s||e()})];return r.src&&Z_?(s=!0,r.decode().then(function(){i&&e()}).catch(function(l){i&&(o?e():n())})):a.push(Gl(r,Se.ERROR,n)),function(){i=!1,a.forEach(st)}}function RC(t,e){return new Promise((n,r)=>{function i(){o(),n(t)}function s(){o(),r(new Error("Image load error"))}function o(){t.removeEventListener("load",i),t.removeEventListener("error",s)}t.addEventListener("load",i),t.addEventListener("error",s)})}function AC(t,e){return e&&(t.src=e),t.src&&Z_?new Promise((n,r)=>t.decode().then(()=>n(t)).catch(i=>t.complete&&t.width?n(t):r(i))):RC(t)}class IC{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(const n in this.cache_){const r=this.cache_[n];!(e++&3)&&!r.hasListener()&&(delete this.cache_[n],delete this.patternCache_[n],--this.cacheSize_)}}}get(e,n,r){const i=yu(e,n,r);return i in this.cache_?this.cache_[i]:null}getPattern(e,n,r){const i=yu(e,n,r);return i in this.patternCache_?this.patternCache_[i]:null}set(e,n,r,i,s){const o=yu(e,n,r),a=o in this.cache_;this.cache_[o]=i,s&&(i.getImageState()===Ce.IDLE&&i.load(),i.getImageState()===Ce.LOADING?i.ready().then(()=>{this.patternCache_[o]=jl().createPattern(i.getImage(1),"repeat")}):this.patternCache_[o]=jl().createPattern(i.getImage(1),"repeat")),a||++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}}function yu(t,e,n){const r=n?aa(n):"null";return e+":"+t+":"+r}const Qn=new IC;let mo=null;class LC extends Cc{constructor(e,n,r,i,s){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=r,this.canvas_={},this.color_=s,this.imageState_=i===void 0?Ce.IDLE:i,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=n,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===Ce.LOADED){mo||(mo=Rt(1,1,void 0,{willReadFrequently:!0})),mo.drawImage(this.image_,0,0);try{mo.getImageData(0,0,1,1),this.tainted_=!1}catch{mo=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(Se.CHANGE)}handleImageError_(){this.imageState_=Ce.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=Ce.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){const e=this.size_[0],n=this.size_[1],r=Rt(e,n);r.fillRect(0,0,e,n),this.hitDetectionImage_=r.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===Ce.IDLE){this.image_||this.initializeImage_(),this.imageState_=Ce.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&AC(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==Ce.LOADED)return;const n=this.image_,r=document.createElement("canvas");r.width=Math.ceil(n.width*e),r.height=Math.ceil(n.height*e);const i=r.getContext("2d");i.scale(e,e),i.drawImage(n,0,0),i.globalCompositeOperation="multiply",i.fillStyle=vC(this.color_),i.fillRect(0,0,r.width/e,r.height/e),i.globalCompositeOperation="destination-in",i.drawImage(n,0,0),this.canvas_[e]=r}ready(){return this.ready_||(this.ready_=new Promise(e=>{this.imageState_===Ce.LOADED||this.imageState_===Ce.ERROR?e():this.addEventListener(Se.CHANGE,function n(){(this.imageState_===Ce.LOADED||this.imageState_===Ce.ERROR)&&(this.removeEventListener(Se.CHANGE,n),e())})})),this.ready_}}function Vd(t,e,n,r,i,s){let o=e===void 0?void 0:Qn.get(e,n,i);return o||(o=new LC(t,t&&"src"in t?t.src||void 0:e,n,r,i),Qn.set(e,n,i,o,s)),s&&o&&!Qn.getPattern(e,n,i)&&Qn.set(e,n,i,o,s),o}function er(t){return t?Array.isArray(t)?Wd(t):typeof t=="object"&&"src"in t?OC(t):t:null}function OC(t){if(!t.offset||!t.size)return Qn.getPattern(t.src,"anonymous",t.color);const e=t.src+":"+t.offset,n=Qn.getPattern(e,void 0,t.color);if(n)return n;const r=Qn.get(t.src,"anonymous",null);if(r.getImageState()!==Ce.LOADED)return null;const i=Rt(t.size[0],t.size[1]);return i.drawImage(r.getImage(1),t.offset[0],t.offset[1],t.size[0],t.size[1],0,0,t.size[0],t.size[1]),Vd(i.canvas,e,void 0,Ce.LOADED,t.color,!0),Qn.getPattern(e,void 0,t.color)}const nl="ol-hidden",Dc="ol-unselectable",Ud="ol-control",rm="ol-collapsed",FC=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),im=["style","variant","weight","size","lineHeight","family"],Y_=function(t){const e=t.match(FC);if(!e)return null;const n={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"};for(let r=0,i=im.length;r<i;++r){const s=e[r+1];s!==void 0&&(n[im[r]]=s)}return n.families=n.family.split(/,\s?/),n},J_="10px sans-serif",nn="#000",Ws="round",Pr=[],Tr=0,Vs="round",la=10,ca="#000",ua="center",Wl="middle",Ai=[0,0,0,0],ha=1,vr=new lr;let ls=null,gh;const mh={},NC=function(){const e="32px ",n=["monospace","serif"],r=n.length,i="wmytzilWMYTZIL@#/&?$%10";let s,o;function a(c,u,h){let d=!0;for(let f=0;f<r;++f){const g=n[f];if(o=Vl(c+" "+u+" "+e+g,i),h!=g){const m=Vl(c+" "+u+" "+e+h+","+g,i);d=d&&m!=o}}return!!d}function l(){let c=!0;const u=vr.getKeys();for(let h=0,d=u.length;h<d;++h){const f=u[h];vr.get(f)<100&&(a.apply(this,f.split(`
`))?(Ma(mh),ls=null,gh=void 0,vr.set(f,100)):(vr.set(f,vr.get(f)+1,!0),c=!1))}c&&(clearInterval(s),s=void 0)}return function(c){const u=Y_(c);if(!u)return;const h=u.families;for(let d=0,f=h.length;d<f;++d){const g=h[d],m=u.style+`
`+u.weight+`
`+g;vr.get(m)===void 0&&(vr.set(m,100,!0),a(u.style,u.weight,g)||(vr.set(m,0,!0),s===void 0&&(s=setInterval(l,32))))}}}(),DC=function(){let t;return function(e){let n=mh[e];if(n==null){if(H_){const r=Y_(e),i=Q_(e,"Žg");n=(isNaN(Number(r.lineHeight))?1.2:Number(r.lineHeight))*(i.actualBoundingBoxAscent+i.actualBoundingBoxDescent)}else t||(t=document.createElement("div"),t.innerHTML="M",t.style.minHeight="0",t.style.maxHeight="none",t.style.height="auto",t.style.padding="0",t.style.border="none",t.style.position="absolute",t.style.display="block",t.style.left="-99999px"),t.style.font=e,document.body.appendChild(t),n=t.offsetHeight,document.body.removeChild(t);mh[e]=n}return n}}();function Q_(t,e){return ls||(ls=Rt(1,1)),t!=gh&&(ls.font=t,gh=ls.font),ls.measureText(e)}function Vl(t,e){return Q_(t,e).width}function sm(t,e,n){if(e in n)return n[e];const r=e.split(`
`).reduce((i,s)=>Math.max(i,Vl(t,s)),0);return n[e]=r,r}function GC(t,e){const n=[],r=[],i=[];let s=0,o=0,a=0,l=0;for(let c=0,u=e.length;c<=u;c+=2){const h=e[c];if(h===`
`||c===u){s=Math.max(s,o),i.push(o),o=0,a+=l,l=0;continue}const d=e[c+1]||t.font,f=Vl(d,h);n.push(f),o+=f;const g=DC(d);r.push(g),l=Math.max(l,g)}return{width:s,height:a,widths:n,heights:r,lineWidths:i}}function zC(t,e,n,r,i,s,o,a,l,c,u){t.save(),n!==1&&(t.globalAlpha===void 0?t.globalAlpha=h=>h.globalAlpha*=n:t.globalAlpha*=n),e&&t.transform.apply(t,e),r.contextInstructions?(t.translate(l,c),t.scale(u[0],u[1]),BC(r,t)):u[0]<0||u[1]<0?(t.translate(l,c),t.scale(u[0],u[1]),t.drawImage(r,i,s,o,a,0,0,o,a)):t.drawImage(r,i,s,o,a,l,c,o*u[0],a*u[1]),t.restore()}function BC(t,e){const n=t.contextInstructions;for(let r=0,i=n.length;r<i;r+=2)Array.isArray(n[r+1])?e[n[r]].apply(e,n[r+1]):e[n[r]]=n[r+1]}class Gc extends Fc{constructor(e){super({opacity:1,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode}),this.canvases_,this.hitDetectionCanvas_=null,this.fill_=e.fill!==void 0?e.fill:null,this.origin_=[0,0],this.points_=e.points,this.radius_=e.radius,this.radius2_=e.radius2,this.angle_=e.angle!==void 0?e.angle:0,this.stroke_=e.stroke!==void 0?e.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?Ce.LOADING:Ce.LOADED,this.imageState_===Ce.LOADING&&this.ready().then(()=>this.imageState_=Ce.LOADED),this.render()}clone(){const e=this.getScale(),n=new Gc({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}getAnchor(){const e=this.size_,n=this.getDisplacement(),r=this.getScaleArray();return[e[0]/2-n[0]/r[0],e[1]/2+n[1]/r[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(e){let n=this.canvases_[e];if(!n){const r=this.renderOptions_,i=Rt(r.size*e,r.size*e);this.draw_(r,i,e),n=i.canvas,this.canvases_[e]=n}return n}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius_}getRadius2(){return this.radius2_}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,n,r){if(n===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return n;let i=this.radius_,s=this.radius2_===void 0?i:this.radius2_;if(i<s){const P=i;i=s,s=P}const o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=s*Math.sin(a),c=Math.sqrt(s*s-l*l),u=i-c,h=Math.sqrt(l*l+u*u),d=h/l;if(e==="miter"&&d<=r)return d*n;const f=n/2/d,g=n/2*(u/h),p=Math.sqrt((i+f)*(i+f)+g*g)-i;if(this.radius2_===void 0||e==="bevel")return p*2;const _=i*Math.sin(a),y=Math.sqrt(i*i-_*_),w=s-y,E=Math.sqrt(_*_+w*w)/_;if(E<=r){const P=E*n/2-s-i;return 2*Math.max(p,P)}return p*2}createRenderOptions(){let e=Ws,n=Vs,r=0,i=null,s=0,o,a=0;this.stroke_&&(o=er(this.stroke_.getColor()??ca),a=this.stroke_.getWidth()??ha,i=this.stroke_.getLineDash(),s=this.stroke_.getLineDashOffset()??0,n=this.stroke_.getLineJoin()??Vs,e=this.stroke_.getLineCap()??Ws,r=this.stroke_.getMiterLimit()??la);const l=this.calculateLineJoinSize_(n,a,r),c=Math.max(this.radius_,this.radius2_||0),u=Math.ceil(2*c+l);return{strokeStyle:o,strokeWidth:a,size:u,lineCap:e,lineDash:i,lineDashOffset:s,lineJoin:n,miterLimit:r}}render(){this.renderOptions_=this.createRenderOptions();const e=this.renderOptions_.size;this.canvases_={},this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,n,r){if(n.scale(r,r),n.translate(e.size/2,e.size/2),this.createPath_(n),this.fill_){let i=this.fill_.getColor();i===null&&(i=nn),n.fillStyle=er(i),n.fill()}e.strokeStyle&&(n.strokeStyle=e.strokeStyle,n.lineWidth=e.strokeWidth,e.lineDash&&(n.setLineDash(e.lineDash),n.lineDashOffset=e.lineDashOffset),n.lineCap=e.lineCap,n.lineJoin=e.lineJoin,n.miterLimit=e.miterLimit,n.stroke())}createHitDetectionCanvas_(e){let n;if(this.fill_){let r=this.fill_.getColor(),i=0;typeof r=="string"&&(r=aa(r)),r===null?i=1:Array.isArray(r)&&(i=r.length===4?r[3]:1),i===0&&(n=Rt(e.size,e.size),this.drawHitDetectionCanvas_(e,n))}return n?n.canvas:this.getImage(1)}createPath_(e){let n=this.points_;const r=this.radius_;if(n===1/0)e.arc(0,0,r,0,2*Math.PI);else{const i=this.radius2_===void 0?r:this.radius2_;this.radius2_!==void 0&&(n*=2);const s=this.angle_-Math.PI/2,o=2*Math.PI/n;for(let a=0;a<n;a++){const l=s+a*o,c=a%2===0?r:i;e.lineTo(c*Math.cos(l),c*Math.sin(l))}e.closePath()}}drawHitDetectionCanvas_(e,n){n.translate(e.size/2,e.size/2),this.createPath_(n),n.fillStyle=nn,n.fill(),e.strokeStyle&&(n.strokeStyle=e.strokeStyle,n.lineWidth=e.strokeWidth,e.lineDash&&(n.setLineDash(e.lineDash),n.lineDashOffset=e.lineDashOffset),n.lineJoin=e.lineJoin,n.miterLimit=e.miterLimit,n.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}}class Us extends Gc{constructor(e){e=e||{radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale!==void 0?e.scale:1,rotation:e.rotation!==void 0?e.rotation:0,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode})}clone(){const e=this.getScale(),n=new Us({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}setRadius(e){this.radius_=e,this.render()}}class xr{constructor(e){e=e||{},this.patternImage_=null,this.color_=null,e.color!==void 0&&this.setColor(e.color)}clone(){const e=this.getColor();return new xr({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(e){if(e!==null&&typeof e=="object"&&"src"in e){const n=Vd(null,e.src,"anonymous",void 0,e.offset?null:e.color?e.color:null,!(e.offset&&e.size));n.ready().then(()=>{this.patternImage_=null}),n.getImageState()===Ce.IDLE&&n.load(),n.getImageState()===Ce.LOADING&&(this.patternImage_=n)}this.color_=e}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}}class ei{constructor(e){e=e||{},this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}clone(){const e=this.getColor();return new ei({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setWidth(e){this.width_=e}}class Rr{constructor(e){e=e||{},this.geometry_=null,this.geometryFunction_=om,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}clone(){let e=this.getGeometry();return e&&typeof e=="object"&&(e=e.clone()),new Rr({geometry:e??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e=="function"?this.geometryFunction_=e:typeof e=="string"?this.geometryFunction_=function(n){return n.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=om,this.geometry_=e}setZIndex(e){this.zIndex_=e}}function jC(t){let e;if(typeof t=="function")e=t;else{let n;Array.isArray(t)?n=t:(Ne(typeof t.getZIndex=="function","Expected an `Style` or an array of `Style`"),n=[t]),e=function(){return n}}return e}let vu=null;function ey(t,e){if(!vu){const n=new xr({color:"rgba(255,255,255,0.4)"}),r=new ei({color:"#3399CC",width:1.25});vu=[new Rr({image:new Us({fill:n,stroke:r,radius:5}),fill:n,stroke:r})]}return vu}function om(t){return t.getGeometry()}function am(t,e,n,r){return n!==void 0&&r!==void 0?[n/t,r/e]:n!==void 0?n/t:r!==void 0?r/e:1}class zc extends Fc{constructor(e){e=e||{};const n=e.opacity!==void 0?e.opacity:1,r=e.rotation!==void 0?e.rotation:0,i=e.scale!==void 0?e.scale:1,s=e.rotateWithView!==void 0?e.rotateWithView:!1;super({opacity:n,rotation:r,scale:i,displacement:e.displacement!==void 0?e.displacement:[0,0],rotateWithView:s,declutterMode:e.declutterMode}),this.anchor_=e.anchor!==void 0?e.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin!==void 0?e.anchorOrigin:"top-left",this.anchorXUnits_=e.anchorXUnits!==void 0?e.anchorXUnits:"fraction",this.anchorYUnits_=e.anchorYUnits!==void 0?e.anchorYUnits:"fraction",this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null;const o=e.img!==void 0?e.img:null;let a=e.src;Ne(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||qe(o)),Ne(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),Ne(!((e.width!==void 0||e.height!==void 0)&&e.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(e.src!==void 0?l=Ce.IDLE:o!==void 0&&("complete"in o?o.complete?l=o.src?Ce.LOADED:Ce.IDLE:l=Ce.LOADING:l=Ce.LOADED),this.color_=e.color!==void 0?aa(e.color):null,this.iconImage_=Vd(o,a,this.crossOrigin_,l,this.color_),this.offset_=e.offset!==void 0?e.offset:[0,0],this.offsetOrigin_=e.offsetOrigin!==void 0?e.offsetOrigin:"top-left",this.origin_=null,this.size_=e.size!==void 0?e.size:null,e.width!==void 0||e.height!==void 0){let c,u;if(e.size)[c,u]=e.size;else{const h=this.getImage(1);if(h.width&&h.height)c=h.width,u=h.height;else if(h instanceof HTMLImageElement){this.initialOptions_=e;const d=()=>{if(this.unlistenImageChange(d),!this.initialOptions_)return;const f=this.iconImage_.getSize();this.setScale(am(f[0],f[1],e.width,e.height))};this.listenImageChange(d);return}}c!==void 0&&this.setScale(am(c,u,e.width,e.height))}}clone(){let e,n,r;return this.initialOptions_?(n=this.initialOptions_.width,r=this.initialOptions_.height):(e=this.getScale(),e=Array.isArray(e)?e.slice():e),new zc({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:e,width:n,height:r,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;const i=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!i)return null;e=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(e[0]*=i[0]),this.anchorYUnits_=="fraction"&&(e[1]*=i[1])}if(this.anchorOrigin_!="top-left"){if(!i)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(e[0]=-e[0]+i[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(e[1]=-e[1]+i[1])}this.normalizedAnchor_=e}const n=this.getDisplacement(),r=this.getScaleArray();return[e[0]-n[0]/r[0],e[1]+n[1]/r[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!="top-left"){const n=this.getSize(),r=this.iconImage_.getSize();if(!n||!r)return null;e=e.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(e[0]=r[0]-n[0]-e[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(e[1]=r[1]-n[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){const e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==Ce.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){const e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==Ce.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(Se.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(Se.CHANGE,e)}ready(){return this.iconImage_.ready()}}const WC="#333";class Kd{constructor(e){e=e||{},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=yn(e.scale!==void 0?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill!==void 0?e.fill:new xr({color:WC}),this.maxAngle_=e.maxAngle!==void 0?e.maxAngle:Math.PI/4,this.placement_=e.placement!==void 0?e.placement:"point",this.overflow_=!!e.overflow,this.stroke_=e.stroke!==void 0?e.stroke:null,this.offsetX_=e.offsetX!==void 0?e.offsetX:0,this.offsetY_=e.offsetY!==void 0?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding,this.declutterMode_=e.declutterMode}clone(){const e=this.getScale();return new Kd({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=yn(e!==void 0?e:1)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}}let Zi=0;const Qs=0,ut=1<<Zi++,le=1<<Zi++,pn=1<<Zi++,Et=1<<Zi++,nr=1<<Zi++,zo=1<<Zi++,It=Math.pow(2,Zi)-1,ty={[ut]:"boolean",[le]:"number",[pn]:"string",[Et]:"color",[nr]:"number[]",[zo]:"size"},VC=Object.keys(ty).map(Number).sort(kr);function Wt(t){const e=[];for(const n of VC)UC(t,n)&&e.push(ty[n]);return e.length===0?"untyped":e.length<3?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e[e.length-1]}function UC(t,e){return(t&e)===e}function rr(t,e){return!!(t&e)}function Bc(t,e){return t===e}class ti{constructor(e,n){this.type=e,this.value=n}}class KC{constructor(e,n,...r){this.type=e,this.operator=n,this.args=r}}function ny(){return{variables:new Set,properties:new Set,featureId:!1,geometryType:!1,style:{}}}function $C(t){switch(t){case"string":return pn;case"color":return Et;case"number":return le;case"boolean":return ut;case"number[]":return nr;default:throw new Error(`Unrecognized type hint: ${t}`)}}function $e(t,e,n){switch(typeof t){case"boolean":return new ti(ut,t);case"number":return new ti(n===zo?zo:le,t);case"string":{let i=pn;return EC(t)&&(i|=Et),Bc(i&n,Qs)||(i&=n),new ti(i,t)}}if(!Array.isArray(t))throw new Error("Expression must be an array or a primitive value");if(t.length===0)throw new Error("Empty expression");if(typeof t[0]=="string")return ik(t,e,n);for(const i of t)if(typeof i!="number")throw new Error("Expected an array of numbers");let r=nr;return t.length===2?r|=zo:(t.length===3||t.length===4)&&(r|=Et),n&&(r&=n),new ti(r,t)}const O={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Coalesce:"coalesce",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette",ToString:"to-string"},qC={[O.Get]:ve(([t,e])=>e!==void 0?$C(e.value):It,Me(1,2),HC),[O.Var]:ve(([t])=>t.type,Me(1,1),ZC),[O.Id]:ve(le|pn,po,XC),[O.Concat]:ve(pn,Me(2,1/0),Oe(It)),[O.GeometryType]:ve(pn,po,YC),[O.Resolution]:ve(le,po),[O.Zoom]:ve(le,po),[O.Time]:ve(le,po),[O.Any]:ve(ut,Me(2,1/0),Oe(ut)),[O.All]:ve(ut,Me(2,1/0),Oe(ut)),[O.Not]:ve(ut,Me(1,1),Oe(ut)),[O.Equal]:ve(ut,Me(2,2),Oe(It),Br),[O.NotEqual]:ve(ut,Me(2,2),Oe(It),Br),[O.GreaterThan]:ve(ut,Me(2,2),Oe(It),Br),[O.GreaterThanOrEqualTo]:ve(ut,Me(2,2),Oe(It),Br),[O.LessThan]:ve(ut,Me(2,2),Oe(It),Br),[O.LessThanOrEqualTo]:ve(ut,Me(2,2),Oe(It),Br),[O.Multiply]:ve(t=>{let e=le|Et;for(let n=0;n<t.length;n++)e&=t[n].type;return e},Me(2,1/0),Oe(le|Et),Br),[O.Coalesce]:ve(t=>{let e=It;for(let n=1;n<t.length;n+=2)e&=t[n].type;return e&=t[t.length-1].type,e},Me(2,1/0),Oe(It),Br),[O.Divide]:ve(le,Me(2,2),Oe(le)),[O.Add]:ve(le,Me(2,1/0),Oe(le)),[O.Subtract]:ve(le,Me(2,2),Oe(le)),[O.Clamp]:ve(le,Me(3,3),Oe(le)),[O.Mod]:ve(le,Me(2,2),Oe(le)),[O.Pow]:ve(le,Me(2,2),Oe(le)),[O.Abs]:ve(le,Me(1,1),Oe(le)),[O.Floor]:ve(le,Me(1,1),Oe(le)),[O.Ceil]:ve(le,Me(1,1),Oe(le)),[O.Round]:ve(le,Me(1,1),Oe(le)),[O.Sin]:ve(le,Me(1,1),Oe(le)),[O.Cos]:ve(le,Me(1,1),Oe(le)),[O.Atan]:ve(le,Me(1,2),Oe(le)),[O.Sqrt]:ve(le,Me(1,1),Oe(le)),[O.Match]:ve(t=>{let e=It;for(let n=2;n<t.length;n+=2)e&=t[n].type;return e&=t[t.length-1].type,e},Me(4,1/0),lm,QC),[O.Between]:ve(ut,Me(3,3),Oe(le)),[O.Interpolate]:ve(t=>{let e=Et|le;for(let n=3;n<t.length;n+=2)e&=t[n].type;return e},Me(6,1/0),lm,ek),[O.Case]:ve(t=>{let e=It;for(let n=1;n<t.length;n+=2)e&=t[n].type;return e&=t[t.length-1].type,e},Me(3,1/0),JC,tk),[O.In]:ve(ut,Me(2,2),nk),[O.Number]:ve(le,Me(1,1/0),Oe(It)),[O.String]:ve(pn,Me(1,1/0),Oe(It)),[O.Array]:ve(t=>t.length===2?nr|zo:t.length===3||t.length===4?nr|Et:nr,Me(1,1/0),Oe(le)),[O.Color]:ve(Et,Me(1,4),Oe(le)),[O.Band]:ve(le,Me(1,3),Oe(le)),[O.Palette]:ve(Et,Me(2,2),rk),[O.ToString]:ve(pn,Me(1,1),Oe(ut|le|pn|Et))};function HC(t,e){const n=$e(t[1],e);if(!(n instanceof ti))throw new Error("Expected a literal argument for get operation");if(typeof n.value!="string")throw new Error("Expected a string argument for get operation");if(e.properties.add(n.value),t.length===3){const r=$e(t[2],e);return[n,r]}return[n]}function ZC(t,e,n,r){const i=t[1];if(typeof i!="string")throw new Error("Expected a string argument for var operation");if(e.variables.add(i),!("variables"in e.style)||e.style.variables[i]===void 0)return[new ti(It,i)];const s=e.style.variables[i],o=$e(s,e);if(o.value=i,r&&!rr(r,o.type))throw new Error(`The variable ${i} has type ${Wt(o.type)} but the following type was expected: ${Wt(r)}`);return[o]}function XC(t,e){e.featureId=!0}function YC(t,e){e.geometryType=!0}function po(t,e){const n=t[0];if(t.length!==1)throw new Error(`Expected no arguments for ${n} operation`);return[]}function Me(t,e){return function(n,r){const i=n[0],s=n.length-1;if(t===e){if(s!==t){const o=t===1?"":"s";throw new Error(`Expected ${t} argument${o} for ${i}, got ${s}`)}}else if(s<t||s>e){const o=e===1/0?`${t} or more`:`${t} to ${e}`;throw new Error(`Expected ${o} arguments for ${i}, got ${s}`)}}}function Oe(t){return function(e,n){const r=e[0],i=e.length-1,s=new Array(i);for(let o=0;o<i;++o){const a=$e(e[o+1],n);if(!rr(t,a.type)){const l=Wt(t),c=Wt(a.type);throw new Error(`Unexpected type for argument ${o} of ${r} operation, got ${l} but expected ${c}`)}a.type&=t,s[o]=a}return s}}function Br(t,e,n){const r=t[0],i=t.length-1;let s=It;for(let a=0;a<n.length;++a)s&=n[a].type;if(s===Qs)throw new Error(`No common type could be found for arguments of ${r} operation`);const o=new Array(i);for(let a=0;a<i;++a)o[a]=$e(t[a+1],e,s);return o}function JC(t,e){const n=t[0],r=t.length-1;if(r%2===0)throw new Error(`An odd amount of arguments was expected for operation ${n}, got ${JSON.stringify(r)} instead`)}function lm(t,e){const n=t[0],r=t.length-1;if(r%2===1)throw new Error(`An even amount of arguments was expected for operation ${n}, got ${JSON.stringify(r)} instead`)}function QC(t,e,n,r){const i=t.length-1;let o=$e(t[1],e).type;const a=$e(t[t.length-1],e);let l=r!==void 0?r&a.type:a.type;const c=new Array(i-2);for(let h=0;h<i-2;h+=2){const d=$e(t[h+2],e),f=$e(t[h+3],e);o&=d.type,l&=f.type,c[h]=d,c[h+1]=f}const u=pn|le|ut;if(!rr(u,o))throw new Error(`Expected an input of type ${Wt(u)} for the interpolate operation, got ${Wt(o)} instead`);if(o&=u,Bc(l,Qs))throw new Error("Could not find a common output type for the following match operation: "+JSON.stringify(t));for(let h=0;h<i-2;h+=2){const d=$e(t[h+2],e,o),f=$e(t[h+3],e,l);c[h]=d,c[h+1]=f}return[$e(t[1],e,o),...c,$e(t[t.length-1],e,l)]}function ek(t,e,n,r){const i=t[1];let s;switch(i[0]){case"linear":s=1;break;case"exponential":if(s=i[1],typeof s!="number")throw new Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(s)} instead`);break;default:s=null}if(!s)throw new Error(`Invalid interpolation type: ${JSON.stringify(i)}`);s=$e(s,e);let o=$e(t[2],e);if(!rr(le,o.type))throw new Error(`Expected an input of type number for the interpolate operation, got ${Wt(o.type)} instead`);o=$e(t[2],e,le);const a=new Array(t.length-3);for(let l=0;l<a.length;l+=2){let c=$e(t[l+3],e);if(!rr(le,c.type))throw new Error(`Expected all stop input values in the interpolate operation to be of type number, got ${Wt(c.type)} at position ${l+2} instead`);let u=$e(t[l+4],e);if(!rr(le|Et,u.type))throw new Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${Wt(u.type)} at position ${l+3} instead`);c=$e(t[l+3],e,le),u=$e(t[l+4],e,le|Et),a[l]=c,a[l+1]=u}return[s,o,...a]}function tk(t,e,n,r){const i=$e(t[t.length-1],e,r);let s=r!==void 0?r&i.type:i.type;const o=new Array(t.length-1);for(let a=0;a<o.length-1;a+=2){const l=$e(t[a+1],e),c=$e(t[a+2],e,r);if(!rr(ut,l.type))throw new Error(`Expected all conditions in the case operation to be of type boolean, got ${Wt(l.type)} at position ${a} instead`);s&=c.type,o[a]=l,o[a+1]=c}if(Bc(s,Qs))throw new Error("Could not find a common output type for the following case operation: "+JSON.stringify(t));for(let a=0;a<o.length-1;a+=2)o[a+1]=$e(t[a+2],e,s);return o[o.length-1]=$e(t[t.length-1],e,s),o}function nk(t,e){let n=t[2];if(!Array.isArray(n))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');if(typeof n[0]=="string"){if(n[0]!=="literal")throw new Error('For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.');if(!Array.isArray(n[1]))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');n=n[1]}let r=pn|le;const i=new Array(n.length);for(let o=0;o<i.length;o++){const a=$e(n[o],e);r&=a.type,i[o]=a}if(Bc(r,Qs))throw new Error("Could not find a common type for the following in operation: "+JSON.stringify(t));return[$e(t[1],e,r),...i]}function rk(t,e){const n=$e(t[1],e,le);if(n.type!==le)throw new Error(`The first argument of palette must be an number, got ${Wt(n.type)} instead`);const r=t[2];if(!Array.isArray(r))throw new Error("The second argument of palette must be an array");const i=new Array(r.length);for(let s=0;s<i.length;s++){const o=$e(r[s],e,Et);if(!(o instanceof ti))throw new Error(`The palette color at index ${s} must be a literal value`);if(!rr(o.type,Et))throw new Error(`The palette color at index ${s} should be of type color, got ${Wt(o.type)} instead`);i[s]=o}return[n,...i]}function ve(t,...e){return function(n,r,i){const s=n[0];let o=[];for(let l=0;l<e.length;l++)o=e[l](n,r,o,i)||o;let a=typeof t=="function"?t(o):t;if(i!==void 0){if(!rr(a,i))throw new Error(`The following expression was expected to return ${Wt(i)}, but returns ${Wt(a)} instead: ${JSON.stringify(n)}`);a&=i}if(a===Qs)throw new Error(`No matching type was found for the following expression: ${JSON.stringify(n)}`);return new KC(a,s,...o)}}function ik(t,e,n){const r=t[0],i=qC[r];if(!i)throw new Error(`Unknown operator: ${r}`);return i(t,e,n)}function ry(t){if(!t)return"";const e=t.getType();switch(e){case"Point":case"LineString":case"Polygon":return e;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return e.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return ry(t.getGeometries()[0]);default:return""}}function iy(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function Nr(t,e,n){const r=$e(t,n);if(!rr(e,r.type)){const i=Wt(e),s=Wt(r.type);throw new Error(`Expected expression to be of type ${i}, got ${s}`)}return Wn(r)}function Wn(t,e){if(t instanceof ti){if(t.type===Et&&typeof t.value=="string"){const r=jd(t.value);return function(){return r}}return function(){return t.value}}const n=t.operator;switch(n){case O.Number:case O.String:case O.Coalesce:return sk(t);case O.Get:case O.Var:return ok(t);case O.Id:return r=>r.featureId;case O.GeometryType:return r=>r.geometryType;case O.Concat:{const r=t.args.map(i=>Wn(i));return i=>"".concat(...r.map(s=>s(i).toString()))}case O.Resolution:return r=>r.resolution;case O.Any:case O.All:case O.Between:case O.In:case O.Not:return lk(t);case O.Equal:case O.NotEqual:case O.LessThan:case O.LessThanOrEqualTo:case O.GreaterThan:case O.GreaterThanOrEqualTo:return ak(t);case O.Multiply:case O.Divide:case O.Add:case O.Subtract:case O.Clamp:case O.Mod:case O.Pow:case O.Abs:case O.Floor:case O.Ceil:case O.Round:case O.Sin:case O.Cos:case O.Atan:case O.Sqrt:return ck(t);case O.Case:return uk(t);case O.Match:return hk(t);case O.Interpolate:return dk(t);case O.ToString:return fk(t);default:throw new Error(`Unsupported operator ${n}`)}}function sk(t,e){const n=t.operator,r=t.args.length,i=new Array(r);for(let s=0;s<r;++s)i[s]=Wn(t.args[s]);switch(n){case O.Coalesce:return s=>{for(let o=0;o<r;++o){const a=i[o](s);if(typeof a<"u"&&a!==null)return a}throw new Error("Expected one of the values to be non-null")};case O.Number:case O.String:return s=>{for(let o=0;o<r;++o){const a=i[o](s);if(typeof a===n)return a}throw new Error(`Expected one of the values to be a ${n}`)};default:throw new Error(`Unsupported assertion operator ${n}`)}}function ok(t,e){const r=t.args[0].value;switch(t.operator){case O.Get:return i=>i.properties[r];case O.Var:return i=>i.variables[r];default:throw new Error(`Unsupported accessor operator ${t.operator}`)}}function ak(t,e){const n=t.operator,r=Wn(t.args[0]),i=Wn(t.args[1]);switch(n){case O.Equal:return s=>r(s)===i(s);case O.NotEqual:return s=>r(s)!==i(s);case O.LessThan:return s=>r(s)<i(s);case O.LessThanOrEqualTo:return s=>r(s)<=i(s);case O.GreaterThan:return s=>r(s)>i(s);case O.GreaterThanOrEqualTo:return s=>r(s)>=i(s);default:throw new Error(`Unsupported comparison operator ${n}`)}}function lk(t,e){const n=t.operator,r=t.args.length,i=new Array(r);for(let s=0;s<r;++s)i[s]=Wn(t.args[s]);switch(n){case O.Any:return s=>{for(let o=0;o<r;++o)if(i[o](s))return!0;return!1};case O.All:return s=>{for(let o=0;o<r;++o)if(!i[o](s))return!1;return!0};case O.Between:return s=>{const o=i[0](s),a=i[1](s),l=i[2](s);return o>=a&&o<=l};case O.In:return s=>{const o=i[0](s);for(let a=1;a<r;++a)if(o===i[a](s))return!0;return!1};case O.Not:return s=>!i[0](s);default:throw new Error(`Unsupported logical operator ${n}`)}}function ck(t,e){const n=t.operator,r=t.args.length,i=new Array(r);for(let s=0;s<r;++s)i[s]=Wn(t.args[s]);switch(n){case O.Multiply:return s=>{let o=1;for(let a=0;a<r;++a)o*=i[a](s);return o};case O.Divide:return s=>i[0](s)/i[1](s);case O.Add:return s=>{let o=0;for(let a=0;a<r;++a)o+=i[a](s);return o};case O.Subtract:return s=>i[0](s)-i[1](s);case O.Clamp:return s=>{const o=i[0](s),a=i[1](s);if(o<a)return a;const l=i[2](s);return o>l?l:o};case O.Mod:return s=>i[0](s)%i[1](s);case O.Pow:return s=>Math.pow(i[0](s),i[1](s));case O.Abs:return s=>Math.abs(i[0](s));case O.Floor:return s=>Math.floor(i[0](s));case O.Ceil:return s=>Math.ceil(i[0](s));case O.Round:return s=>Math.round(i[0](s));case O.Sin:return s=>Math.sin(i[0](s));case O.Cos:return s=>Math.cos(i[0](s));case O.Atan:return r===2?s=>Math.atan2(i[0](s),i[1](s)):s=>Math.atan(i[0](s));case O.Sqrt:return s=>Math.sqrt(i[0](s));default:throw new Error(`Unsupported numeric operator ${n}`)}}function uk(t,e){const n=t.args.length,r=new Array(n);for(let i=0;i<n;++i)r[i]=Wn(t.args[i]);return i=>{for(let s=0;s<n-1;s+=2)if(r[s](i))return r[s+1](i);return r[n-1](i)}}function hk(t,e){const n=t.args.length,r=new Array(n);for(let i=0;i<n;++i)r[i]=Wn(t.args[i]);return i=>{const s=r[0](i);for(let o=1;o<n;o+=2)if(s===r[o](i))return r[o+1](i);return r[n-1](i)}}function dk(t,e){const n=t.args.length,r=new Array(n);for(let i=0;i<n;++i)r[i]=Wn(t.args[i]);return i=>{const s=r[0](i),o=r[1](i);let a,l;for(let c=2;c<n;c+=2){const u=r[c](i);let h=r[c+1](i);const d=Array.isArray(h);if(d&&(h=SC(h)),u>=o)return c===2?h:d?gk(s,o,a,l,u,h):Eo(s,o,a,l,u,h);a=u,l=h}return l}}function fk(t,e){const n=t.operator,r=t.args.length,i=new Array(r);for(let s=0;s<r;++s)i[s]=Wn(t.args[s]);switch(n){case O.ToString:return s=>{const o=i[0](s);return t.args[0].type===Et?Wd(o):o.toString()};default:throw new Error(`Unsupported convert operator ${n}`)}}function Eo(t,e,n,r,i,s){const o=i-n;if(o===0)return r;const a=e-n,l=t===1?a/o:(Math.pow(t,a)-1)/(Math.pow(t,o)-1);return r+l*(s-r)}function gk(t,e,n,r,i,s){if(i-n===0)return r;const a=tm(r),l=tm(s);let c=l[2]-a[2];c>180?c-=360:c<-180&&(c+=360);const u=[Eo(t,e,n,a[0],i,l[0]),Eo(t,e,n,a[1],i,l[1]),a[2]+Eo(t,e,n,0,i,c),Eo(t,e,n,r[3],i,s[3])];return K_(bC(u))}function mk(t){return!0}function pk(t){const e=ny(),n=_k(t,e),r=iy();return function(i,s){if(r.properties=i.getPropertiesInternal(),r.resolution=s,e.featureId){const o=i.getId();o!==void 0?r.featureId=o:r.featureId=null}return e.geometryType&&(r.geometryType=ry(i.getGeometry())),n(r)}}function cm(t){const e=ny(),n=t.length,r=new Array(n);for(let o=0;o<n;++o)r[o]=ph(t[o],e);const i=iy(),s=new Array(n);return function(o,a){if(i.properties=o.getPropertiesInternal(),i.resolution=a,e.featureId){const c=o.getId();c!==void 0?i.featureId=c:i.featureId=null}let l=0;for(let c=0;c<n;++c){const u=r[c](i);u&&(s[l]=u,l+=1)}return s.length=l,s}}function _k(t,e){const n=t.length,r=new Array(n);for(let i=0;i<n;++i){const s=t[i],o="filter"in s?Nr(s.filter,ut,e):mk;let a;if(Array.isArray(s.style)){const l=s.style.length;a=new Array(l);for(let c=0;c<l;++c)a[c]=ph(s.style[c],e)}else a=[ph(s.style,e)];r[i]={filter:o,styles:a}}return function(i){const s=[];let o=!1;for(let a=0;a<n;++a){const l=r[a].filter;if(l(i)&&!(t[a].else&&o)){o=!0;for(const c of r[a].styles){const u=c(i);u&&s.push(u)}}}return s}}function ph(t,e){const n=da(t,"",e),r=fa(t,"",e),i=yk(t,e),s=vk(t,e),o=sn(t,"z-index",e);if(!n&&!r&&!i&&!s&&!Di(t))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(t));const a=new Rr;return function(l){let c=!0;if(n){const u=n(l);u&&(c=!1),a.setFill(u)}if(r){const u=r(l);u&&(c=!1),a.setStroke(u)}if(i){const u=i(l);u&&(c=!1),a.setText(u)}if(s){const u=s(l);u&&(c=!1),a.setImage(u)}return o&&a.setZIndex(o(l)),c?null:a}}function da(t,e,n){let r;if(e+"fill-pattern-src"in t?r=Ek(t,e+"fill-",n):r=$d(t,e+"fill-color",n),!r)return null;const i=new xr;return function(s){const o=r(s);return o==="none"?null:(i.setColor(o),i)}}function fa(t,e,n){const r=sn(t,e+"stroke-width",n),i=$d(t,e+"stroke-color",n);if(!r&&!i)return null;const s=br(t,e+"stroke-line-cap",n),o=br(t,e+"stroke-line-join",n),a=sy(t,e+"stroke-line-dash",n),l=sn(t,e+"stroke-line-dash-offset",n),c=sn(t,e+"stroke-miter-limit",n),u=new ei;return function(h){if(i){const d=i(h);if(d==="none")return null;u.setColor(d)}if(r&&u.setWidth(r(h)),s){const d=s(h);if(d!=="butt"&&d!=="round"&&d!=="square")throw new Error("Expected butt, round, or square line cap");u.setLineCap(d)}if(o){const d=o(h);if(d!=="bevel"&&d!=="round"&&d!=="miter")throw new Error("Expected bevel, round, or miter line join");u.setLineJoin(d)}return a&&u.setLineDash(a(h)),l&&u.setLineDashOffset(l(h)),c&&u.setMiterLimit(c(h)),u}}function yk(t,e){const n="text-",r=br(t,n+"value",e);if(!r)return null;const i=da(t,n,e),s=da(t,n+"background-",e),o=fa(t,n,e),a=fa(t,n+"background-",e),l=br(t,n+"font",e),c=sn(t,n+"max-angle",e),u=sn(t,n+"offset-x",e),h=sn(t,n+"offset-y",e),d=ga(t,n+"overflow",e),f=br(t,n+"placement",e),g=sn(t,n+"repeat",e),m=jc(t,n+"scale",e),p=ga(t,n+"rotate-with-view",e),_=sn(t,n+"rotation",e),y=br(t,n+"align",e),w=br(t,n+"justify",e),b=br(t,n+"baseline",e),E=sy(t,n+"padding",e),P=Wc(t,n+"declutter-mode"),k=new Kd({declutterMode:P});return function(R){if(k.setText(r(R)),i&&k.setFill(i(R)),s&&k.setBackgroundFill(s(R)),o&&k.setStroke(o(R)),a&&k.setBackgroundStroke(a(R)),l&&k.setFont(l(R)),c&&k.setMaxAngle(c(R)),u&&k.setOffsetX(u(R)),h&&k.setOffsetY(h(R)),d&&k.setOverflow(d(R)),f){const C=f(R);if(C!=="point"&&C!=="line")throw new Error("Expected point or line for text-placement");k.setPlacement(C)}if(g&&k.setRepeat(g(R)),m&&k.setScale(m(R)),p&&k.setRotateWithView(p(R)),_&&k.setRotation(_(R)),y){const C=y(R);if(C!=="left"&&C!=="center"&&C!=="right"&&C!=="end"&&C!=="start")throw new Error("Expected left, right, center, start, or end for text-align");k.setTextAlign(C)}if(w){const C=w(R);if(C!=="left"&&C!=="right"&&C!=="center")throw new Error("Expected left, right, or center for text-justify");k.setJustify(C)}if(b){const C=b(R);if(C!=="bottom"&&C!=="top"&&C!=="middle"&&C!=="alphabetic"&&C!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");k.setTextBaseline(C)}return E&&k.setPadding(E(R)),k}}function vk(t,e){return"icon-src"in t?wk(t,e):"shape-points"in t?Sk(t,e):"circle-radius"in t?bk(t,e):null}function wk(t,e){const n="icon-",r=n+"src",i=oy(t[r],r),s=Ul(t,n+"anchor",e),o=jc(t,n+"scale",e),a=sn(t,n+"opacity",e),l=Ul(t,n+"displacement",e),c=sn(t,n+"rotation",e),u=ga(t,n+"rotate-with-view",e),h=hm(t,n+"anchor-origin"),d=dm(t,n+"anchor-x-units"),f=dm(t,n+"anchor-y-units"),g=kk(t,n+"color"),m=xk(t,n+"cross-origin"),p=Ck(t,n+"offset"),_=hm(t,n+"offset-origin"),y=Kl(t,n+"width"),w=Kl(t,n+"height"),b=Mk(t,n+"size"),E=Wc(t,n+"declutter-mode"),P=new zc({src:i,anchorOrigin:h,anchorXUnits:d,anchorYUnits:f,color:g,crossOrigin:m,offset:p,offsetOrigin:_,height:w,width:y,size:b,declutterMode:E});return function(k){return a&&P.setOpacity(a(k)),l&&P.setDisplacement(l(k)),c&&P.setRotation(c(k)),u&&P.setRotateWithView(u(k)),o&&P.setScale(o(k)),s&&P.setAnchor(s(k)),P}}function Sk(t,e){const n="shape-",r=n+"points",i=n+"radius",s=_h(t[r],r),o=_h(t[i],i),a=da(t,n,e),l=fa(t,n,e),c=jc(t,n+"scale",e),u=Ul(t,n+"displacement",e),h=sn(t,n+"rotation",e),d=ga(t,n+"rotate-with-view",e),f=Kl(t,n+"radius2"),g=Kl(t,n+"angle"),m=Wc(t,n+"declutter-mode"),p=new Gc({points:s,radius:o,radius2:f,angle:g,declutterMode:m});return function(_){return a&&p.setFill(a(_)),l&&p.setStroke(l(_)),u&&p.setDisplacement(u(_)),h&&p.setRotation(h(_)),d&&p.setRotateWithView(d(_)),c&&p.setScale(c(_)),p}}function bk(t,e){const n="circle-",r=da(t,n,e),i=fa(t,n,e),s=sn(t,n+"radius",e),o=jc(t,n+"scale",e),a=Ul(t,n+"displacement",e),l=sn(t,n+"rotation",e),c=ga(t,n+"rotate-with-view",e),u=Wc(t,n+"declutter-mode"),h=new Us({radius:5,declutterMode:u});return function(d){return s&&h.setRadius(s(d)),r&&h.setFill(r(d)),i&&h.setStroke(i(d)),a&&h.setDisplacement(a(d)),l&&h.setRotation(l(d)),c&&h.setRotateWithView(c(d)),o&&h.setScale(o(d)),h}}function sn(t,e,n){if(!(e in t))return;const r=Nr(t[e],le,n);return function(i){return _h(r(i),e)}}function br(t,e,n){if(!(e in t))return null;const r=Nr(t[e],pn,n);return function(i){return oy(r(i),e)}}function Ek(t,e,n){const r=br(t,e+"pattern-src",n),i=um(t,e+"pattern-offset",n),s=um(t,e+"pattern-size",n),o=$d(t,e+"color",n);return function(a){return{src:r(a),offset:i&&i(a),size:s&&s(a),color:o&&o(a)}}}function ga(t,e,n){if(!(e in t))return null;const r=Nr(t[e],ut,n);return function(i){const s=r(i);if(typeof s!="boolean")throw new Error(`Expected a boolean for ${e}`);return s}}function $d(t,e,n){if(!(e in t))return null;const r=Nr(t[e],Et|pn,n);return function(i){return ay(r(i),e)}}function sy(t,e,n){if(!(e in t))return null;const r=Nr(t[e],nr,n);return function(i){return Ta(r(i),e)}}function Ul(t,e,n){if(!(e in t))return null;const r=Nr(t[e],nr,n);return function(i){const s=Ta(r(i),e);if(s.length!==2)throw new Error(`Expected two numbers for ${e}`);return s}}function um(t,e,n){if(!(e in t))return null;const r=Nr(t[e],nr,n);return function(i){return ly(r(i),e)}}function jc(t,e,n){if(!(e in t))return null;const r=Nr(t[e],nr|le,n);return function(i){return Pk(r(i),e)}}function Kl(t,e){const n=t[e];if(n!==void 0){if(typeof n!="number")throw new Error(`Expected a number for ${e}`);return n}}function Mk(t,e){const n=t[e];if(n!==void 0){if(typeof n=="number")return yn(n);if(!Array.isArray(n))throw new Error(`Expected a number or size array for ${e}`);if(n.length!==2||typeof n[0]!="number"||typeof n[1]!="number")throw new Error(`Expected a number or size array for ${e}`);return n}}function xk(t,e){const n=t[e];if(n!==void 0){if(typeof n!="string")throw new Error(`Expected a string for ${e}`);return n}}function hm(t,e){const n=t[e];if(n!==void 0){if(n!=="bottom-left"&&n!=="bottom-right"&&n!=="top-left"&&n!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);return n}}function dm(t,e){const n=t[e];if(n!==void 0){if(n!=="pixels"&&n!=="fraction")throw new Error(`Expected pixels or fraction for ${e}`);return n}}function Ck(t,e){const n=t[e];if(n!==void 0)return Ta(n,e)}function Wc(t,e){const n=t[e];if(n!==void 0){if(typeof n!="string")throw new Error(`Expected a string for ${e}`);if(n!=="declutter"&&n!=="obstacle"&&n!=="none")throw new Error(`Expected declutter, obstacle, or none for ${e}`);return n}}function kk(t,e){const n=t[e];if(n!==void 0)return ay(n,e)}function Ta(t,e){if(!Array.isArray(t))throw new Error(`Expected an array for ${e}`);const n=t.length;for(let r=0;r<n;++r)if(typeof t[r]!="number")throw new Error(`Expected an array of numbers for ${e}`);return t}function oy(t,e){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);return t}function _h(t,e){if(typeof t!="number")throw new Error(`Expected a number for ${e}`);return t}function ay(t,e){if(typeof t=="string")return t;const n=Ta(t,e),r=n.length;if(r<3||r>4)throw new Error(`Expected a color with 3 or 4 values for ${e}`);return n}function ly(t,e){const n=Ta(t,e);if(n.length!==2)throw new Error(`Expected an array of two numbers for ${e}`);return n}function Pk(t,e){return typeof t=="number"?t:ly(t,e)}const fm={RENDER_ORDER:"renderOrder"};class cy extends Oc{constructor(e){e=e||{};const n=Object.assign({},e);delete n.style,delete n.renderBuffer,delete n.updateWhileAnimating,delete n.updateWhileInteracting,super(n),this.declutter_=e.declutter?String(e.declutter):void 0,this.renderBuffer_=e.renderBuffer!==void 0?e.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0?e.updateWhileAnimating:!1,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0?e.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(fm.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e,n){const r=this.getDeclutter();r in e.declutter||(e.declutter[r]=new V_(9)),this.getRenderer().renderDeclutter(e,n)}setRenderOrder(e){this.set(fm.RENDER_ORDER,e)}setStyle(e){this.style_=e===void 0?ey:e;const n=Tk(e);this.styleFunction_=e===null?void 0:jC(n),this.changed()}}function Tk(t){if(t===void 0)return ey;if(!t)return null;if(typeof t=="function"||t instanceof Rr)return t;if(!Array.isArray(t))return cm([t]);if(t.length===0)return[];const e=t.length,n=t[0];if(n instanceof Rr){const i=new Array(e);for(let s=0;s<e;++s){const o=t[s];if(!(o instanceof Rr))throw new Error("Expected a list of style instances");i[s]=o}return i}if("style"in n){const i=new Array(e);for(let s=0;s<e;++s){const o=t[s];if(!("style"in o))throw new Error("Expected a list of rules with a style property");i[s]=o}return pk(i)}return cm(t)}class Rk extends md{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,n){pe()}calculateMatrices2D(e){const n=e.viewState,r=e.coordinateToPixelTransform,i=e.pixelToCoordinateTransform;Lr(r,e.size[0]/2,e.size[1]/2,1/n.resolution,-1/n.resolution,-n.rotation,-n.center[0],-n.center[1]),R_(i,r)}forEachFeatureAtCoordinate(e,n,r,i,s,o,a,l){let c;const u=n.viewState;function h(b,E,P,k){return s.call(o,E,b?P:null,k)}const d=u.projection,f=b_(e.slice(),d),g=[[0,0]];if(d.canWrapX()&&i){const b=d.getExtent(),E=ze(b);g.push([-E,0],[E,0])}const m=n.layerStatesArray,p=m.length,_=[],y=[];for(let b=0;b<g.length;b++)for(let E=p-1;E>=0;--E){const P=m[E],k=P.layer;if(k.hasRenderer()&&zd(P,u)&&a.call(l,k)){const R=k.getRenderer(),C=k.getSource();if(R&&C){const V=C.getWrapX()?f:e,W=h.bind(null,P.managed);y[0]=V[0]+g[b][0],y[1]=V[1]+g[b][1],c=R.forEachFeatureAtCoordinate(y,n,r,W,_)}if(c)return c}}if(_.length===0)return;const w=1/_.length;return _.forEach((b,E)=>b.distanceSq+=E*w),_.sort((b,E)=>b.distanceSq-E.distanceSq),_.some(b=>c=b.callback(b.feature,b.layer,b.geometry)),c}hasFeatureAtCoordinate(e,n,r,i,s,o){return this.forEachFeatureAtCoordinate(e,n,r,i,ta,this,s,o)!==void 0}getMap(){return this.map_}renderFrame(e){pe()}scheduleExpireIconCache(e){Qn.canExpireCache()&&e.postRenderFunctions.push(Ak)}}function Ak(t,e){Qn.expire()}class uy extends Fr{constructor(e,n,r,i){super(e),this.inversePixelTransform=n,this.frameState=r,this.context=i}}class Ik extends Rk{constructor(e){super(e),this.fontChangeListenerKey_=Fe(vr,Ns.PROPERTYCHANGE,e.redrawText.bind(e)),this.element_=document.createElement("div");const n=this.element_.style;n.position="absolute",n.width="100%",n.height="100%",n.zIndex="0",this.element_.className=Dc+" ol-layers";const r=e.getViewport();r.insertBefore(this.element_,r.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,n){const r=this.getMap();if(r.hasListener(e)){const i=new uy(e,void 0,n);r.dispatchEvent(i)}}disposeInternal(){st(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(Cn.PRECOMPOSE,e);const n=e.layerStatesArray.sort(function(a,l){return a.zIndex-l.zIndex});n.some(a=>a.layer instanceof cy&&a.layer.getDeclutter())&&(e.declutter={});const i=e.viewState;this.children_.length=0;const s=[];let o=null;for(let a=0,l=n.length;a<l;++a){const c=n[a];e.layerIndex=a;const u=c.layer,h=u.getSourceState();if(!zd(c,i)||h!="ready"&&h!="undefined"){u.unrender();continue}const d=u.render(e,o);d&&(d!==o&&(this.children_.push(d),o=d),s.push(c))}this.declutter(e,s),PC(this.element_,this.children_),this.dispatchRenderEvent(Cn.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}declutter(e,n){if(e.declutter){for(let r=n.length-1;r>=0;--r){const i=n[r],s=i.layer;s.getDeclutter()&&s.renderDeclutter(e,i)}n.forEach(r=>r.layer.renderDeferred(e))}}}class Xr extends Fr{constructor(e,n){super(e),this.layer=n}}const wu={LAYERS:"layers"};class eo extends d_{constructor(e){e=e||{};const n=Object.assign({},e);delete n.layers;let r=e.layers;super(n),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(wu.LAYERS,this.handleLayersChanged_),r?Array.isArray(r)?r=new Jn(r.slice(),{unique:!0}):Ne(typeof r.getArray=="function","Expected `layers` to be an array or a `Collection`"):r=new Jn(void 0,{unique:!0}),this.setLayers(r)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(st),this.layersListenerKeys_.length=0;const e=this.getLayers();this.layersListenerKeys_.push(Fe(e,tn.ADD,this.handleLayersAdd_,this),Fe(e,tn.REMOVE,this.handleLayersRemove_,this));for(const r in this.listenerKeys_)this.listenerKeys_[r].forEach(st);Ma(this.listenerKeys_);const n=e.getArray();for(let r=0,i=n.length;r<i;r++){const s=n[r];this.registerLayerListeners_(s),this.dispatchEvent(new Xr("addlayer",s))}this.changed()}registerLayerListeners_(e){const n=[Fe(e,Ns.PROPERTYCHANGE,this.handleLayerChange_,this),Fe(e,Se.CHANGE,this.handleLayerChange_,this)];e instanceof eo&&n.push(Fe(e,"addlayer",this.handleLayerGroupAdd_,this),Fe(e,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[qe(e)]=n}handleLayerGroupAdd_(e){this.dispatchEvent(new Xr("addlayer",e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new Xr("removelayer",e.layer))}handleLayersAdd_(e){const n=e.element;this.registerLayerListeners_(n),this.dispatchEvent(new Xr("addlayer",n)),this.changed()}handleLayersRemove_(e){const n=e.element,r=qe(n);this.listenerKeys_[r].forEach(st),delete this.listenerKeys_[r],this.dispatchEvent(new Xr("removelayer",n)),this.changed()}getLayers(){return this.get(wu.LAYERS)}setLayers(e){const n=this.getLayers();if(n){const r=n.getArray();for(let i=0,s=r.length;i<s;++i)this.dispatchEvent(new Xr("removelayer",r[i]))}this.set(wu.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(n){n.getLayersArray(e)}),e}getLayerStatesArray(e){const n=e!==void 0?e:[],r=n.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(n)});const i=this.getLayerState();let s=i.zIndex;!e&&i.zIndex===void 0&&(s=0);for(let o=r,a=n.length;o<a;o++){const l=n[o];l.opacity*=i.opacity,l.visible=l.visible&&i.visible,l.maxResolution=Math.min(l.maxResolution,i.maxResolution),l.minResolution=Math.max(l.minResolution,i.minResolution),l.minZoom=Math.max(l.minZoom,i.minZoom),l.maxZoom=Math.min(l.maxZoom,i.maxZoom),i.extent!==void 0&&(l.extent!==void 0?l.extent=Go(l.extent,i.extent):l.extent=i.extent),l.zIndex===void 0&&(l.zIndex=s)}return n}getSourceState(){return"ready"}}class cs extends Fr{constructor(e,n,r){super(e),this.map=n,this.frameState=r!==void 0?r:null}}class Kr extends cs{constructor(e,n,r,i,s,o){super(e,n,s),this.originalEvent=r,this.pixel_=null,this.coordinate_=null,this.dragging=i!==void 0?i:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const ht={SINGLECLICK:"singleclick",CLICK:Se.CLICK,DBLCLICK:Se.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"},yh={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown"};class Lk extends Cc{constructor(e,n){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=n===void 0?1:n,this.down_=null;const r=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=r,this.pointerdownListenerKey_=Fe(r,yh.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=Fe(r,yh.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(Se.TOUCHMOVE,this.boundHandleTouchMove_,X_?{passive:!1}:!1)}emulateClick_(e){let n=new Kr(ht.CLICK,this.map_,e);this.dispatchEvent(n),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,n=new Kr(ht.DBLCLICK,this.map_,e),this.dispatchEvent(n)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const r=new Kr(ht.SINGLECLICK,this.map_,e);this.dispatchEvent(r)},250)}updateActivePointers_(e){const n=e,r=n.pointerId;if(n.type==ht.POINTERUP||n.type==ht.POINTERCANCEL){delete this.trackedTouches_[r];for(const i in this.trackedTouches_)if(this.trackedTouches_[i].target!==n.target){delete this.trackedTouches_[i];break}}else(n.type==ht.POINTERDOWN||n.type==ht.POINTERMOVE)&&(this.trackedTouches_[r]=n);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);const n=new Kr(ht.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(n),this.emulateClicks_&&!n.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(st),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);const n=new Kr(ht.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(n),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){const r=this.map_.getOwnerDocument();this.dragListenerKeys_.push(Fe(r,ht.POINTERMOVE,this.handlePointerMove_,this),Fe(r,ht.POINTERUP,this.handlePointerUp_,this),Fe(this.element_,ht.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==r&&this.dragListenerKeys_.push(Fe(this.element_.getRootNode(),ht.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;const n=new Kr(ht.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(n)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;const n=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Kr(ht.POINTERMOVE,this.map_,e,n))}handleTouchMove_(e){const n=this.originalPointerMoveEvent_;(!n||n.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(st(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(Se.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(st(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(st),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const $r={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},Lt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},$l=1/0;class Ok{constructor(e,n){this.priorityFunction_=e,this.keyFunction_=n,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Ma(this.queuedElements_)}dequeue(){const e=this.elements_,n=this.priorities_,r=e[0];e.length==1?(e.length=0,n.length=0):(e[0]=e.pop(),n[0]=n.pop(),this.siftUp_(0));const i=this.keyFunction_(r);return delete this.queuedElements_[i],r}enqueue(e){Ne(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const n=this.priorityFunction_(e);return n!=$l?(this.elements_.push(e),this.priorities_.push(n),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){const n=this.elements_,r=this.priorities_,i=n.length,s=n[e],o=r[e],a=e;for(;e<i>>1;){const l=this.getLeftChildIndex_(e),c=this.getRightChildIndex_(e),u=c<i&&r[c]<r[l]?c:l;n[e]=n[u],r[e]=r[u],e=u}n[e]=s,r[e]=o,this.siftDown_(a,e)}siftDown_(e,n){const r=this.elements_,i=this.priorities_,s=r[n],o=i[n];for(;n>e;){const a=this.getParentIndex_(n);if(i[a]>o)r[n]=r[a],i[n]=i[a],n=a;else break}r[n]=s,i[n]=o}reprioritize(){const e=this.priorityFunction_,n=this.elements_,r=this.priorities_;let i=0;const s=n.length;let o,a,l;for(a=0;a<s;++a)o=n[a],l=e(o),l==$l?delete this.queuedElements_[this.keyFunction_(o)]:(r[i]=l,n[i++]=o);n.length=i,r.length=i,this.heapify_()}}const de={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class Fk extends Ok{constructor(e,n){super(function(r){return e.apply(null,r)},function(r){return r[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=n,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){const n=super.enqueue(e);return n&&e[0].addEventListener(Se.CHANGE,this.boundHandleTileChange_),n}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){const n=e.target,r=n.getState();if(r===de.LOADED||r===de.ERROR||r===de.EMPTY){r!==de.ERROR&&n.removeEventListener(Se.CHANGE,this.boundHandleTileChange_);const i=n.getKey();i in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[i],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,n){let r=0,i,s,o;for(;this.tilesLoading_<e&&r<n&&this.getCount()>0;)s=this.dequeue()[0],o=s.getKey(),i=s.getState(),i===de.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++r,s.load())}}function Nk(t,e,n,r,i){if(!t||!(n in t.wantedTiles)||!t.wantedTiles[n][e.getKey()])return $l;const s=t.viewState.center,o=r[0]-s[0],a=r[1]-s[1];return 65536*Math.log(i)+Math.sqrt(o*o+a*a)/i}class qd extends lr{constructor(e){super();const n=e.element;n&&!e.target&&!n.style.pointerEvents&&(n.style.pointerEvents="auto"),this.element=n||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){fh(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&fh(this.element);for(let n=0,r=this.listenerKeys.length;n<r;++n)st(this.listenerKeys[n]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==Ds&&this.listenerKeys.push(Fe(e,$r.POSTRENDER,this.render,this)),e.render())}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}}class Dk extends qd{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const n=e.className!==void 0?e.className:"ol-attribution",r=e.tipLabel!==void 0?e.tipLabel:"Attributions",i=e.expandClassName!==void 0?e.expandClassName:n+"-expand",s=e.collapseLabel!==void 0?e.collapseLabel:"›",o=e.collapseClassName!==void 0?e.collapseClassName:n+"-collapse";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s,this.collapseLabel_.className=o):this.collapseLabel_=s;const a=e.label!==void 0?e.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=i):this.label_=a;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=r,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(Se.CLICK,this.handleClick_.bind(this),!1);const c=n+" "+Dc+" "+Ud+(this.collapsed_&&this.collapsible_?" "+rm:"")+(this.collapsible_?"":" ol-uncollapsible"),u=this.element;u.className=c,u.appendChild(this.toggleButton_),u.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){const n=Array.from(new Set(this.getMap().getAllLayers().flatMap(i=>i.getAttributions(e)))),r=!this.getMap().getAllLayers().some(i=>i.getSource()&&i.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(r),n}async updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const n=await Promise.all(this.collectSourceAttributions_(e).map(i=>o2(()=>i))),r=n.length>0;if(this.renderedVisible_!=r&&(this.element.style.display=r?"":"none",this.renderedVisible_=r),!mi(n,this.renderedAttributions_)){kC(this.ulElement_);for(let i=0,s=n.length;i<s;++i){const o=document.createElement("li");o.innerHTML=n[i],this.ulElement_.appendChild(o)}this.renderedAttributions_=n}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(rm),this.collapsed_?nm(this.collapseLabel_,this.label_):nm(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}}class Gk extends qd{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});const n=e.className!==void 0?e.className:"ol-rotate",r=e.label!==void 0?e.label:"⇧",i=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof r=="string"?(this.label_=document.createElement("span"),this.label_.className=i,this.label_.textContent=r):(this.label_=r,this.label_.classList.add(i));const s=e.tipLabel?e.tipLabel:"Reset rotation",o=document.createElement("button");o.className=n+"-reset",o.setAttribute("type","button"),o.title=s,o.appendChild(this.label_),o.addEventListener(Se.CLICK,this.handleClick_.bind(this),!1);const a=n+" "+Dc+" "+Ud,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(nl)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const n=this.getMap().getView();if(!n)return;const r=n.getRotation();r!==void 0&&(this.duration_>0&&r%(2*Math.PI)!==0?n.animate({rotation:0,duration:this.duration_,easing:Js}):n.setRotation(0))}render(e){const n=e.frameState;if(!n)return;const r=n.viewState.rotation;if(r!=this.rotation_){const i="rotate("+r+"rad)";if(this.autoHide_){const s=this.element.classList.contains(nl);!s&&r===0?this.element.classList.add(nl):s&&r!==0&&this.element.classList.remove(nl)}this.label_.style.transform=i}this.rotation_=r}}class zk extends qd{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});const n=e.className!==void 0?e.className:"ol-zoom",r=e.delta!==void 0?e.delta:1,i=e.zoomInClassName!==void 0?e.zoomInClassName:n+"-in",s=e.zoomOutClassName!==void 0?e.zoomOutClassName:n+"-out",o=e.zoomInLabel!==void 0?e.zoomInLabel:"+",a=e.zoomOutLabel!==void 0?e.zoomOutLabel:"–",l=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",c=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",u=document.createElement("button");u.className=i,u.setAttribute("type","button"),u.title=l,u.appendChild(typeof o=="string"?document.createTextNode(o):o),u.addEventListener(Se.CLICK,this.handleClick_.bind(this,r),!1);const h=document.createElement("button");h.className=s,h.setAttribute("type","button"),h.title=c,h.appendChild(typeof a=="string"?document.createTextNode(a):a),h.addEventListener(Se.CLICK,this.handleClick_.bind(this,-r),!1);const d=n+" "+Dc+" "+Ud,f=this.element;f.className=d,f.appendChild(u),f.appendChild(h),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,n){n.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){const r=this.getMap().getView();if(!r)return;const i=r.getZoom();if(i!==void 0){const s=r.getConstrainedZoom(i+e);this.duration_>0?(r.getAnimating()&&r.cancelAnimations(),r.animate({zoom:s,duration:this.duration_,easing:Js})):r.setZoom(s)}}}function Bk(t){t=t||{};const e=new Jn;return(t.zoom!==void 0?t.zoom:!0)&&e.push(new zk(t.zoomOptions)),(t.rotate!==void 0?t.rotate:!0)&&e.push(new Gk(t.rotateOptions)),(t.attribution!==void 0?t.attribution:!0)&&e.push(new Dk(t.attributionOptions)),e}const gm={ACTIVE:"active"};class Ra extends lr{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(gm.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(gm.ACTIVE,e)}setMap(e){this.map_=e}}function jk(t,e,n){const r=t.getCenterInternal();if(r){const i=[r[0]+e[0],r[1]+e[1]];t.animateInternal({duration:n!==void 0?n:250,easing:B2,center:t.getConstrainedCenter(i)})}}function Hd(t,e,n,r){const i=t.getZoom();if(i===void 0)return;const s=t.getConstrainedZoom(i+e),o=t.getResolutionForZoom(s);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:o,anchor:n,duration:r!==void 0?r:250,easing:Js})}class Wk extends Ra{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let n=!1;if(e.type==ht.DBLCLICK){const r=e.originalEvent,i=e.map,s=e.coordinate,o=r.shiftKey?-this.delta_:this.delta_,a=i.getView();Hd(a,o,s,this.duration_),r.preventDefault(),n=!0}return!n}}class Aa extends Ra{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let n=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==ht.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==ht.POINTERUP){const r=this.handleUpEvent(e);this.handlingDownUpSequence=r&&this.targetPointers.length>0}}else if(e.type==ht.POINTERDOWN){const r=this.handleDownEvent(e);this.handlingDownUpSequence=r,n=this.stopDown(r)}else e.type==ht.POINTERMOVE&&this.handleMoveEvent(e);return!n}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}}function Zd(t){const e=t.length;let n=0,r=0;for(let i=0;i<e;i++)n+=t[i].clientX,r+=t[i].clientY;return{clientX:n/e,clientY:r/e}}function vh(t){const e=arguments;return function(n){let r=!0;for(let i=0,s=e.length;i<s&&(r=r&&e[i](n),!!r);++i);return r}}const Vk=function(t){const e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Uk=function(t){const e=t.map.getTargetElement(),n=t.map.getOwnerDocument().activeElement;return e.contains(n)},hy=function(t){return t.map.getTargetElement().hasAttribute("tabindex")?Uk(t):!0},Kk=ta,dy=function(t){const e=t.originalEvent;return e.button==0&&!(CC&&$_&&e.ctrlKey)},fy=function(t){const e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},$k=function(t){const e=t.originalEvent;return $_?e.metaKey:e.ctrlKey},qk=function(t){const e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},gy=function(t){const e=t.originalEvent,n=e.target.tagName;return n!=="INPUT"&&n!=="SELECT"&&n!=="TEXTAREA"&&!e.target.isContentEditable},Su=function(t){const e=t.originalEvent;return Ne(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.pointerType=="mouse"},Hk=function(t){const e=t.originalEvent;return Ne(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&e.button===0};class Zk extends Aa{constructor(e){super({stopDown:xc}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const n=e.condition?e.condition:vh(fy,Hk);this.condition_=e.onFocusOnly?vh(hy,n):n,this.noKinetic_=!1}handleDragEvent(e){const n=e.map;this.panning_||(this.panning_=!0,n.getView().beginInteraction());const r=this.targetPointers,i=n.getEventPixel(Zd(r));if(r.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(i[0],i[1]),this.lastCentroid){const s=[this.lastCentroid[0]-i[0],i[1]-this.lastCentroid[1]],a=e.map.getView();k2(s,a.getResolution()),bd(s,a.getRotation()),a.adjustCenterInternal(s)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=i,this.lastPointersCount_=r.length,e.originalEvent.preventDefault()}handleUpEvent(e){const n=e.map,r=n.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const i=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),o=r.getCenterInternal(),a=n.getPixelFromCoordinateInternal(o),l=n.getCoordinateFromPixelInternal([a[0]-i*Math.cos(s),a[1]-i*Math.sin(s)]);r.animateInternal({center:r.getConstrainedCenter(l),duration:500,easing:Js})}return this.panning_&&(this.panning_=!1,r.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){const r=e.map.getView();return this.lastCentroid=null,r.getAnimating()&&r.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}class Xk extends Aa{constructor(e){e=e||{},super({stopDown:xc}),this.condition_=e.condition?e.condition:Vk,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!Su(e))return;const n=e.map,r=n.getView();if(r.getConstraints().rotation===Pd)return;const i=n.getSize(),s=e.pixel,o=Math.atan2(i[1]/2-s[1],s[0]-i[0]/2);if(this.lastAngle_!==void 0){const a=o-this.lastAngle_;r.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(e){return Su(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return Su(e)&&dy(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}class Yk extends md{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const e=this.startPixel_,n=this.endPixel_,r="px",i=this.element_.style;i.left=Math.min(e[0],n[0])+r,i.top=Math.min(e[1],n[1])+r,i.width=Math.abs(n[0]-e[0])+r,i.height=Math.abs(n[1]-e[1])+r}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const n=this.element_.style;n.left="inherit",n.top="inherit",n.width="inherit",n.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,n){this.startPixel_=e,this.endPixel_=n,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;const e=this.startPixel_,n=this.endPixel_,i=[e,[e[0],n[1]],n,[n[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);i[4]=i[0].slice(),this.geometry_?this.geometry_.setCoordinates([i]):this.geometry_=new or([i])}getGeometry(){return this.geometry_}}const _o={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class rl extends Fr{constructor(e,n,r){super(e),this.coordinate=n,this.mapBrowserEvent=r}}class Jk extends Aa{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.box_=new Yk(e.className||"ol-dragbox"),this.minArea_=e.minArea!==void 0?e.minArea:64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition?e.condition:dy,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(e,n,r){const i=r[0]-n[0],s=r[1]-n[1];return i*i+s*s>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.startPixel_&&(this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new rl(_o.BOXDRAG,e.coordinate,e)))}handleUpEvent(e){if(!this.startPixel_)return!1;this.box_.setMap(null);const n=this.boxEndCondition_(e,this.startPixel_,e.pixel);return n&&this.onBoxEnd(e),this.dispatchEvent(new rl(n?_o.BOXEND:_o.BOXCANCEL,e.coordinate,e)),!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new rl(_o.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}setActive(e){e||(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new rl(_o.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setActive(e)}}class Qk extends Jk{constructor(e){e=e||{};const n=e.condition?e.condition:qk;super({condition:n,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){const r=this.getMap().getView();let i=this.getGeometry();if(this.out_){const s=r.rotatedExtentForGeometry(i),o=r.getResolutionForExtentInternal(s),a=r.getResolution()/o;i=i.clone(),i.scale(a*a)}r.fitInternal(i,{duration:this.duration_,easing:Js})}}const Ei={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class eP extends Ra{constructor(e){super(),e=e||{},this.defaultCondition_=function(n){return fy(n)&&gy(n)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let n=!1;if(e.type==Se.KEYDOWN){const r=e.originalEvent,i=r.key;if(this.condition_(e)&&(i==Ei.DOWN||i==Ei.LEFT||i==Ei.RIGHT||i==Ei.UP)){const o=e.map.getView(),a=o.getResolution()*this.pixelDelta_;let l=0,c=0;i==Ei.DOWN?c=-a:i==Ei.LEFT?l=-a:i==Ei.RIGHT?l=a:c=a;const u=[l,c];bd(u,o.getRotation()),jk(o,u,this.duration_),r.preventDefault(),n=!0}}return!n}}class tP extends Ra{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(n){return!$k(n)&&gy(n)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let n=!1;if(e.type==Se.KEYDOWN||e.type==Se.KEYPRESS){const r=e.originalEvent,i=r.key;if(this.condition_(e)&&(i==="+"||i==="-")){const s=e.map,o=i==="+"?this.delta_:-this.delta_,a=s.getView();Hd(a,o,void 0,this.duration_),r.preventDefault(),n=!0}}return!n}}class nP{constructor(e,n,r){this.decay_=e,this.minVelocity_=n,this.delay_=r,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,n){this.points_.push(e,n,Date.now())}end(){if(this.points_.length<6)return!1;const e=Date.now()-this.delay_,n=this.points_.length-3;if(this.points_[n+2]<e)return!1;let r=n-3;for(;r>0&&this.points_[r+2]>e;)r-=3;const i=this.points_[n+2]-this.points_[r+2];if(i<1e3/60)return!1;const s=this.points_[n]-this.points_[r],o=this.points_[n+1]-this.points_[r+1];return this.angle_=Math.atan2(o,s),this.initialVelocity_=Math.sqrt(s*s+o*o)/i,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}class rP extends Ra{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;const n=e.condition?e.condition:Kk;this.condition_=e.onFocusOnly?vh(hy,n):n,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const e=this.getMap();if(!e)return;e.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(e){if(!this.condition_(e)||e.type!==Se.WHEEL)return!0;const r=e.map,i=e.originalEvent;i.preventDefault(),this.useAnchor_&&(this.lastAnchor_=e.coordinate);let s;if(e.type==Se.WHEEL&&(s=i.deltaY,MC&&i.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(s/=q_),i.deltaMode===WheelEvent.DOM_DELTA_LINE&&(s*=40)),s===0)return!1;this.lastDelta_=s;const o=Date.now();this.startTime_===void 0&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(s)<4?"trackpad":"wheel");const a=r.getView();if(this.mode_==="trackpad"&&!(a.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(a.getAnimating()&&a.cancelAnimations(),a.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),a.adjustZoom(-s/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=o,!1;this.totalDelta_+=s;const l=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,r),l),!1}handleWheelZoom_(e){const n=e.getView();n.getAnimating()&&n.cancelAnimations();let r=-mt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(n.getConstrainResolution()||this.constrainResolution_)&&(r=r?r>0?1:-1:0),Hd(n,r,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}}class iP extends Aa{constructor(e){e=e||{};const n=e;n.stopDown||(n.stopDown=xc),super(n),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let n=0;const r=this.targetPointers[0],i=this.targetPointers[1],s=Math.atan2(i.clientY-r.clientY,i.clientX-r.clientX);if(this.lastAngle_!==void 0){const l=s-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),n=l}this.lastAngle_=s;const o=e.map,a=o.getView();a.getConstraints().rotation!==Pd&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(Zd(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(n,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){const n=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||n.getView().beginInteraction(),!0}return!1}}class sP extends Aa{constructor(e){e=e||{};const n=e;n.stopDown||(n.stopDown=xc),super(n),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let n=1;const r=this.targetPointers[0],i=this.targetPointers[1],s=r.clientX-i.clientX,o=r.clientY-i.clientY,a=Math.sqrt(s*s+o*o);this.lastDistance_!==void 0&&(n=this.lastDistance_/a),this.lastDistance_=a;const l=e.map,c=l.getView();n!=1&&(this.lastScaleDelta_=n),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(Zd(this.targetPointers))),l.render(),c.adjustResolutionInternal(n,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){const r=e.map.getView(),i=this.lastScaleDelta_>1?1:-1;return r.endInteraction(this.duration_,i),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){const n=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||n.getView().beginInteraction(),!0}return!1}}function oP(t){t=t||{};const e=new Jn,n=new nP(-.005,.05,100);return(t.altShiftDragRotate!==void 0?t.altShiftDragRotate:!0)&&e.push(new Xk),(t.doubleClickZoom!==void 0?t.doubleClickZoom:!0)&&e.push(new Wk({delta:t.zoomDelta,duration:t.zoomDuration})),(t.dragPan!==void 0?t.dragPan:!0)&&e.push(new Zk({onFocusOnly:t.onFocusOnly,kinetic:n})),(t.pinchRotate!==void 0?t.pinchRotate:!0)&&e.push(new iP),(t.pinchZoom!==void 0?t.pinchZoom:!0)&&e.push(new sP({duration:t.zoomDuration})),(t.keyboard!==void 0?t.keyboard:!0)&&(e.push(new eP),e.push(new tP({delta:t.zoomDelta,duration:t.zoomDuration}))),(t.mouseWheelZoom!==void 0?t.mouseWheelZoom:!0)&&e.push(new rP({onFocusOnly:t.onFocusOnly,duration:t.zoomDuration})),(t.shiftDragZoom!==void 0?t.shiftDragZoom:!0)&&e.push(new Qk({duration:t.zoomDuration})),e}function my(t){if(t instanceof Oc){t.setMapInternal(null);return}t instanceof eo&&t.getLayers().forEach(my)}function py(t,e){if(t instanceof Oc){t.setMapInternal(e);return}if(t instanceof eo){const n=t.getLayers().getArray();for(let r=0,i=n.length;r<i;++r)py(n[r],e)}}let aP=class extends lr{constructor(e){super(),e=e||{},this.on,this.once,this.un;const n=lP(e);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:q_,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=Nn(),this.pixelToCoordinateTransform_=Nn(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=n.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=n.controls||Bk(),this.interactions=n.interactions||oP({onFocusOnly:!0}),this.overlays_=n.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Fk(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Lt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Lt.VIEW,this.handleViewChanged_),this.addChangeListener(Lt.SIZE,this.handleSizeChanged_),this.addChangeListener(Lt.TARGET,this.handleTargetChanged_),this.setProperties(n.values);const r=this;e.view&&!(e.view instanceof Hn)&&e.view.then(function(i){r.setView(new Hn(i))}),this.controls.addEventListener(tn.ADD,i=>{i.element.setMap(this)}),this.controls.addEventListener(tn.REMOVE,i=>{i.element.setMap(null)}),this.interactions.addEventListener(tn.ADD,i=>{i.element.setMap(this)}),this.interactions.addEventListener(tn.REMOVE,i=>{i.element.setMap(null)}),this.overlays_.addEventListener(tn.ADD,i=>{this.addOverlayInternal_(i.element)}),this.overlays_.addEventListener(tn.REMOVE,i=>{const s=i.element.getId();s!==void 0&&delete this.overlayIdIndex_[s.toString()],i.element.setMap(null)}),this.controls.forEach(i=>{i.setMap(this)}),this.interactions.forEach(i=>{i.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){py(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){const n=e.getId();n!==void 0&&(this.overlayIdIndex_[n.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,n,r){if(!this.frameState_||!this.renderer_)return;const i=this.getCoordinateFromPixelInternal(e);r=r!==void 0?r:{};const s=r.hitTolerance!==void 0?r.hitTolerance:0,o=r.layerFilter!==void 0?r.layerFilter:ta,a=r.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(i,this.frameState_,s,a,n,null,o,null)}getFeaturesAtPixel(e,n){const r=[];return this.forEachFeatureAtPixel(e,function(i){r.push(i)},n),r}getAllLayers(){const e=[];function n(r){r.forEach(function(i){i instanceof eo?n(i.getLayers()):e.push(i)})}return n(this.getLayers()),e}hasFeatureAtPixel(e,n){if(!this.frameState_||!this.renderer_)return!1;const r=this.getCoordinateFromPixelInternal(e);n=n!==void 0?n:{};const i=n.layerFilter!==void 0?n.layerFilter:ta,s=n.hitTolerance!==void 0?n.hitTolerance:0,o=n.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(r,this.frameState_,s,o,i,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){const r=this.viewport_.getBoundingClientRect(),i=this.getSize(),s=r.width/i[0],o=r.height/i[1],a="changedTouches"in e?e.changedTouches[0]:e;return[(a.clientX-r.left)/s,(a.clientY-r.top)/o]}getTarget(){return this.get(Lt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return ch(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){const n=this.frameState_;return n?Ct(n.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){const n=this.overlayIdIndex_[e.toString()];return n!==void 0?n:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Lt.LAYERGROUP)}setLayers(e){const n=this.getLayerGroup();if(e instanceof Jn){n.setLayers(e);return}const r=n.getLayers();r.clear(),r.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const e=this.getLayerGroup().getLayerStatesArray();for(let n=0,r=e.length;n<r;++n){const i=e[n];if(!i.visible)continue;const s=i.layer.getRenderer();if(s&&!s.ready)return!0;const o=i.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(e){const n=yr(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(n)}getPixelFromCoordinateInternal(e){const n=this.frameState_;return n?Ct(n.coordinateToPixelTransform,e.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(Lt.SIZE)}getView(){return this.get(Lt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,n,r,i){return Nk(this.frameState_,e,n,r,i)}handleBrowserEvent(e,n){n=n||e.type;const r=new Kr(n,this,e);this.handleMapBrowserEvent(r)}handleMapBrowserEvent(e){if(!this.frameState_)return;const n=e.originalEvent,r=n.type;if(r===yh.POINTERDOWN||r===Se.WHEEL||r===Se.KEYDOWN){const i=this.getOwnerDocument(),s=this.viewport_.getRootNode?this.viewport_.getRootNode():i,o=n.target;if(this.overlayContainerStopEvent_.contains(o)||!(s===i?i.documentElement:s).contains(o))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){const i=this.getInteractions().getArray().slice();for(let s=i.length-1;s>=0;s--){const o=i[s];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){const e=this.frameState_,n=this.tileQueue_;if(!n.isEmpty()){let i=this.maxTilesLoading_,s=i;if(e){const o=e.viewHints;if(o[Ot.ANIMATING]||o[Ot.INTERACTING]){const a=Date.now()-e.time>8;i=a?0:8,s=a?0:2}}n.getTilesLoading()<i&&(n.reprioritize(),n.loadMoreTiles(i,s))}e&&this.renderer_&&!e.animate&&(this.renderComplete_===!0?(this.hasListener(Cn.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Cn.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new cs($r.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new cs($r.LOADSTART,this,e))));const r=this.postRenderFunctions_;for(let i=0,s=r.length;i<s;++i)r[i](this,e);r.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let r=0,i=this.targetChangeHandlerKeys_.length;r<i;++r)st(this.targetChangeHandlerKeys_[r]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(Se.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(Se.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,fh(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const r=this.targetElement_.getRootNode();r instanceof ShadowRoot&&this.resizeObserver_.unobserve(r.host),this.setSize(void 0)}const e=this.getTarget(),n=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=n,!n)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{n.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Ik(this)),this.mapBrowserEventHandler_=new Lk(this,this.moveTolerance_);for(const s in ht)this.mapBrowserEventHandler_.addEventListener(ht[s],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(Se.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(Se.WHEEL,this.boundHandleBrowserEvent_,X_?{passive:!1}:!1);const r=this.keyboardEventTarget_?this.keyboardEventTarget_:n;this.targetChangeHandlerKeys_=[Fe(r,Se.KEYDOWN,this.handleBrowserEvent,this),Fe(r,Se.KEYPRESS,this.handleBrowserEvent,this)];const i=n.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.observe(i.host),this.resizeObserver_.observe(n)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(st(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(st(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=Fe(e,Ns.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Fe(e,Se.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(st),this.layerGroupPropertyListenerKeys_=null);const e=this.getLayerGroup();e&&(this.handleLayerAdd_(new Xr("addlayer",e)),this.layerGroupPropertyListenerKeys_=[Fe(e,Ns.PROPERTYCHANGE,this.render,this),Fe(e,Se.CHANGE,this.render,this),Fe(e,"addlayer",this.handleLayerAdd_,this),Fe(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const e=this.getLayerGroup().getLayerStatesArray();for(let n=0,r=e.length;n<r;++n){const i=e[n].layer;i.hasRenderer()&&i.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){my(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){const n=this.getSize(),r=this.getView(),i=this.frameState_;let s=null;if(n!==void 0&&Jg(n)&&r&&r.isDef()){const o=r.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=r.getState();if(s={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:sh(a.center,a.resolution,a.rotation,n),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:n,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:qe(this),renderTargets:{}},a.nextCenter&&a.nextResolution){const l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;s.nextExtent=sh(a.nextCenter,a.nextResolution,l,n)}}this.frameState_=s,this.renderer_.renderFrame(s),s&&(s.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,s.postRenderFunctions),i&&(!this.previousExtent_||!ka(this.previousExtent_)&&!ra(s.extent,this.previousExtent_))&&(this.dispatchEvent(new cs($r.MOVESTART,this,i)),this.previousExtent_=Ys(this.previousExtent_)),this.previousExtent_&&!s.viewHints[Ot.ANIMATING]&&!s.viewHints[Ot.INTERACTING]&&!ra(s.extent,this.previousExtent_)&&(this.dispatchEvent(new cs($r.MOVEEND,this,s)),g_(s.extent,this.previousExtent_))),this.dispatchEvent(new cs($r.POSTRENDER,this,s)),this.renderComplete_=this.hasListener($r.LOADSTART)||this.hasListener($r.LOADEND)||this.hasListener(Cn.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){const n=this.getLayerGroup();n&&this.handleLayerRemove_(new Xr("removelayer",n)),this.set(Lt.LAYERGROUP,e)}setSize(e){this.set(Lt.SIZE,e)}setTarget(e){this.set(Lt.TARGET,e)}setView(e){if(!e||e instanceof Hn){this.set(Lt.VIEW,e);return}this.set(Lt.VIEW,new Hn);const n=this;e.then(function(r){n.setView(new Hn(r))})}updateSize(){const e=this.getTargetElement();let n;if(e){const i=getComputedStyle(e),s=e.offsetWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderRightWidth),o=e.offsetHeight-parseFloat(i.borderTopWidth)-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderBottomWidth);!isNaN(s)&&!isNaN(o)&&(n=[s,o],!Jg(n)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&M_("No map visible because the map container's width or height are 0."))}const r=this.getSize();n&&(!r||!mi(n,r))&&(this.setSize(n),this.updateViewportSize_(n))}updateViewportSize_(e){const n=this.getView();n&&n.setViewportSize(e)}};function lP(t){let e=null;t.keyboardEventTarget!==void 0&&(e=typeof t.keyboardEventTarget=="string"?document.getElementById(t.keyboardEventTarget):t.keyboardEventTarget);const n={},r=t.layers&&typeof t.layers.getLayers=="function"?t.layers:new eo({layers:t.layers});n[Lt.LAYERGROUP]=r,n[Lt.TARGET]=t.target,n[Lt.VIEW]=t.view instanceof Hn?t.view:new Hn;let i;t.controls!==void 0&&(Array.isArray(t.controls)?i=new Jn(t.controls.slice()):(Ne(typeof t.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),i=t.controls));let s;t.interactions!==void 0&&(Array.isArray(t.interactions)?s=new Jn(t.interactions.slice()):(Ne(typeof t.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),s=t.interactions));let o;return t.overlays!==void 0?Array.isArray(t.overlays)?o=new Jn(t.overlays.slice()):(Ne(typeof t.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=t.overlays):o=new Jn,{controls:i,interactions:s,keyboardEventTarget:e,overlays:o,values:n}}const il={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class cP extends Oc{constructor(e){e=e||{};const n=Object.assign({},e);delete n.preload,delete n.useInterimTilesOnError,super(n),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(il.PRELOAD)}setPreload(e){this.set(il.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(il.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(il.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}class uP extends xa{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e}getFeatures(e){return pe()}getData(e){return null}prepareFrame(e){return pe()}renderFrame(e,n){return pe()}loadedTileCallback(e,n,r){e[n]||(e[n]={}),e[n][r.tileCoord.toString()]=r}createLoadedTileFinder(e,n,r){return(i,s)=>{const o=this.loadedTileCallback.bind(this,r,i);return e.forEachLoadedTile(n,i,s,o)}}forEachFeatureAtCoordinate(e,n,r,i,s){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){const n=e.target;(n.getState()===Ce.LOADED||n.getState()===Ce.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let n=e.getState();return n!=Ce.LOADED&&n!=Ce.ERROR&&e.addEventListener(Se.CHANGE,this.boundHandleImageChange_),n==Ce.IDLE&&(e.load(),n=e.getState()),n==Ce.LOADED}renderIfReadyAndVisible(){const e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}renderDeferred(e){}disposeInternal(){delete this.layer_,super.disposeInternal()}}class _y{constructor(){tt(this,"pushMethodArgs_",(...e)=>(this.instructions_[this.zIndex+this.offset_].push(e),this));this.instructions_=[],this.zIndex=0,this.offset_=0,this.context_=new Proxy(jl(),{get:(e,n)=>{if(typeof jl()[n]=="function")return this.instructions_[this.zIndex+this.offset_]||(this.instructions_[this.zIndex+this.offset_]=[]),this.instructions_[this.zIndex+this.offset_].push(n),this.pushMethodArgs_},set:(e,n,r)=>(this.instructions_[this.zIndex+this.offset_]||(this.instructions_[this.zIndex+this.offset_]=[]),this.instructions_[this.zIndex+this.offset_].push(n,r),!0)})}pushFunction(e){this.instructions_[this.zIndex+this.offset_].push(e)}getContext(){return this.context_}draw(e){this.instructions_.forEach(n=>{for(let r=0,i=n.length;r<i;++r){const s=n[r];if(typeof s=="function"){s(e);continue}const o=n[++r];if(typeof e[s]=="function")e[s](...o);else{if(typeof o=="function"){e[s]=o(e);continue}e[s]=o}}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}}const mm=[];let us=null;function hP(){us=Rt(1,1,void 0,{willReadFrequently:!0})}class yy extends uP{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=Nn(),this.pixelTransform=Nn(),this.inversePixelTransform=Nn(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(e,n,r){us||hP(),us.clearRect(0,0,1,1);let i;try{us.drawImage(e,n,r,1,1,0,0,1,1),i=us.getImageData(0,0,1,1).data}catch{return us=null,null}return i}getBackground(e){let r=this.getLayer().getBackground();return typeof r=="function"&&(r=r(e.viewState.resolution)),r||void 0}useContainer(e,n,r){const i=this.getLayer().getClassName();let s,o;if(e&&e.className===i&&(!r||e&&e.style.backgroundColor&&mi(aa(e.style.backgroundColor),aa(r)))){const a=e.firstElementChild;a instanceof HTMLCanvasElement&&(o=a.getContext("2d"))}if(o&&o.canvas.style.transform===n?(this.container=e,this.context=o,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){s=document.createElement("div"),s.className=i;let a=s.style;a.position="absolute",a.width="100%",a.height="100%",o=Rt();const l=o.canvas;s.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=s,this.context=o}!this.containerReused&&r&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=r)}clipUnrotated(e,n,r){const i=$i(r),s=Rc(r),o=Tc(r),a=Pc(r);Ct(n.coordinateToPixelTransform,i),Ct(n.coordinateToPixelTransform,s),Ct(n.coordinateToPixelTransform,o),Ct(n.coordinateToPixelTransform,a);const l=this.inversePixelTransform;Ct(l,i),Ct(l,s),Ct(l,o),Ct(l,a),e.save(),e.beginPath(),e.moveTo(Math.round(i[0]),Math.round(i[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.clip()}prepareContainer(e,n){const r=e.extent,i=e.viewState.resolution,s=e.viewState.rotation,o=e.pixelRatio,a=Math.round(ze(r)/i*o),l=Math.round(zt(r)/i*o);Lr(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/o,1/o,s,-a/2,-l/2),R_(this.inversePixelTransform,this.pixelTransform);const c=V2(this.pixelTransform);if(this.useContainer(n,c,this.getBackground(e)),!this.containerReused){const u=this.context.canvas;u.width!=a||u.height!=l?(u.width=a,u.height=l):this.context.clearRect(0,0,a,l),c!==u.style.transform&&(u.style.transform=c)}}dispatchRenderEvent_(e,n,r){const i=this.getLayer();if(i.hasListener(e)){const s=new uy(e,this.inversePixelTransform,r,n);i.dispatchEvent(s)}}preRender(e,n){this.frameState=n,!n.declutter&&this.dispatchRenderEvent_(Cn.PRERENDER,e,n)}postRender(e,n){n.declutter||this.dispatchRenderEvent_(Cn.POSTRENDER,e,n)}renderDeferredInternal(e){}getRenderContext(e){return e.declutter&&!this.deferredContext_&&(this.deferredContext_=new _y),e.declutter?this.deferredContext_.getContext():this.context}renderDeferred(e){e.declutter&&(this.dispatchRenderEvent_(Cn.PRERENDER,this.context,e),e.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(e),this.dispatchRenderEvent_(Cn.POSTRENDER,this.context,e))}getRenderTransform(e,n,r,i,s,o,a){const l=s/2,c=o/2,u=i/n,h=-u,d=-e[0]+a,f=-e[1];return Lr(this.tempTransform,l,c,u,h,-r,d,f)}disposeInternal(){delete this.frameState,super.disposeInternal()}}class vy extends Cc{constructor(e,n,r){super(),r=r||{},this.tileCoord=e,this.state=n,this.interimTile=null,this.key="",this.transition_=r.transition===void 0?250:r.transition,this.transitionStarts_={},this.interpolate=!!r.interpolate}changed(){this.dispatchEvent(Se.CHANGE)}release(){this.state===de.ERROR&&this.setState(de.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){let e=this.interimTile;if(!e)return this;do{if(e.getState()==de.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this}refreshInterimChain(){let e=this.interimTile;if(!e)return;let n=this;do{if(e.getState()==de.LOADED){e.interimTile=null;break}e.getState()==de.LOADING?n=e:e.getState()==de.IDLE?n.interimTile=e.interimTile:n=e,e=n.interimTile}while(e)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==de.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}load(){pe()}getAlpha(e,n){if(!this.transition_)return 1;let r=this.transitionStarts_[e];if(!r)r=n,this.transitionStarts_[e]=r;else if(r===-1)return 1;const i=n-r+1e3/60;return i>=this.transition_?1:T_(i/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}}class wy extends vy{constructor(e,n,r,i,s,o){super(e,n,o),this.crossOrigin_=i,this.src_=r,this.key=r,this.image_=new Image,i!==null&&(this.image_.crossOrigin=i),this.unlisten_=null,this.tileLoadFunction_=s}getImage(){return this.image_}setImage(e){this.image_=e,this.state=de.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=de.ERROR,this.unlistenImage_(),this.image_=dP(),this.changed()}handleImageLoad_(){const e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=de.LOADED:this.state=de.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==de.ERROR&&(this.state=de.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==de.IDLE&&(this.state=de.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=TC(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function dP(){const t=Rt(1,1);return t.fillStyle="rgba(0,0,0,0)",t.fillRect(0,0,1,1),t.canvas}const fP=.5,gP=10,pm=.25;class mP{constructor(e,n,r,i,s,o){this.sourceProj_=e,this.targetProj_=n;let a={};const l=Bs(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){const w=y[0]+"/"+y[1];return a[w]||(a[w]=l(y)),a[w]},this.maxSourceExtent_=i,this.errorThresholdSquared_=s*s,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!i&&!!this.sourceProj_.getExtent()&&ze(i)>=ze(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?ze(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?ze(this.targetProj_.getExtent()):null;const c=$i(r),u=Rc(r),h=Tc(r),d=Pc(r),f=this.transformInv_(c),g=this.transformInv_(u),m=this.transformInv_(h),p=this.transformInv_(d),_=gP+(o?Math.max(0,Math.ceil(Math.log2(ih(r)/(o*o*256*256)))):0);if(this.addQuad_(c,u,h,d,f,g,m,p,_),this.wrapsXInSource_){let y=1/0;this.triangles_.forEach(function(w,b,E){y=Math.min(y,w.source[0][0],w.source[1][0],w.source[2][0])}),this.triangles_.forEach(w=>{if(Math.max(w.source[0][0],w.source[1][0],w.source[2][0])-y>this.sourceWorldWidth_/2){const b=[[w.source[0][0],w.source[0][1]],[w.source[1][0],w.source[1][1]],[w.source[2][0],w.source[2][1]]];b[0][0]-y>this.sourceWorldWidth_/2&&(b[0][0]-=this.sourceWorldWidth_),b[1][0]-y>this.sourceWorldWidth_/2&&(b[1][0]-=this.sourceWorldWidth_),b[2][0]-y>this.sourceWorldWidth_/2&&(b[2][0]-=this.sourceWorldWidth_);const E=Math.min(b[0][0],b[1][0],b[2][0]);Math.max(b[0][0],b[1][0],b[2][0])-E<this.sourceWorldWidth_/2&&(w.source=b)}})}a={}}addTriangle_(e,n,r,i,s,o){this.triangles_.push({source:[i,s,o],target:[e,n,r]})}addQuad_(e,n,r,i,s,o,a,l,c){const u=Dg([s,o,a,l]),h=this.sourceWorldWidth_?ze(u)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&h>.5&&h<1;let g=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const p=Dg([e,n,r,i]);g=ze(p)/this.targetWorldWidth_>pm||g}!f&&this.sourceProj_.isGlobal()&&h&&(g=h>pm||g)}if(!g&&this.maxSourceExtent_&&isFinite(u[0])&&isFinite(u[1])&&isFinite(u[2])&&isFinite(u[3])&&!rn(u,this.maxSourceExtent_))return;let m=0;if(!g&&(!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(c>0)g=!0;else if(m=(!isFinite(s[0])||!isFinite(s[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),m!=1&&m!=2&&m!=4&&m!=8)return}if(c>0){if(!g){const p=[(e[0]+r[0])/2,(e[1]+r[1])/2],_=this.transformInv_(p);let y;f?y=(Fi(s[0],d)+Fi(a[0],d))/2-Fi(_[0],d):y=(s[0]+a[0])/2-_[0];const w=(s[1]+a[1])/2-_[1];g=y*y+w*w>this.errorThresholdSquared_}if(g){if(Math.abs(e[0]-r[0])<=Math.abs(e[1]-r[1])){const p=[(n[0]+r[0])/2,(n[1]+r[1])/2],_=this.transformInv_(p),y=[(i[0]+e[0])/2,(i[1]+e[1])/2],w=this.transformInv_(y);this.addQuad_(e,n,p,y,s,o,_,w,c-1),this.addQuad_(y,p,r,i,w,_,a,l,c-1)}else{const p=[(e[0]+n[0])/2,(e[1]+n[1])/2],_=this.transformInv_(p),y=[(r[0]+i[0])/2,(r[1]+i[1])/2],w=this.transformInv_(y);this.addQuad_(e,p,y,i,s,_,w,l,c-1),this.addQuad_(p,n,r,y,_,o,a,w,c-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}m&11||this.addTriangle_(e,r,i,s,a,l),m&14||this.addTriangle_(e,r,n,s,a,o),m&&(m&13||this.addTriangle_(n,i,e,o,l,s),m&7||this.addTriangle_(n,i,r,o,l,a))}calculateSourceExtent(){const e=vn();return this.triangles_.forEach(function(n,r,i){const s=n.source;Do(e,s[0]),Do(e,s[1]),Do(e,s[2])}),e}getTriangles(){return this.triangles_}}let bu;const ks=[];function _m(t,e,n,r,i){t.beginPath(),t.moveTo(0,0),t.lineTo(e,n),t.lineTo(r,i),t.closePath(),t.save(),t.clip(),t.fillRect(0,0,Math.max(e,r)+1,Math.max(n,i)),t.restore()}function Eu(t,e){return Math.abs(t[e*4]-210)>2||Math.abs(t[e*4+3]-.75*255)>2}function pP(){if(bu===void 0){const t=Rt(6,6,ks);t.globalCompositeOperation="lighter",t.fillStyle="rgba(210, 0, 0, 0.75)",_m(t,4,5,4,0),_m(t,4,5,0,5);const e=t.getImageData(0,0,3,3).data;bu=Eu(e,0)||Eu(e,4)||Eu(e,8),Nc(t),ks.push(t.canvas)}return bu}function wh(t,e,n,r){const i=Jr(n,e,t);let s=zg(e,r,n);const o=e.getMetersPerUnit();o!==void 0&&(s*=o);const a=t.getMetersPerUnit();a!==void 0&&(s/=a);const l=t.getExtent();if(!l||zs(l,i)){const c=zg(t,s,i)/s;isFinite(c)&&c>0&&(s/=c)}return s}function _P(t,e,n,r){const i=ui(n);let s=wh(t,e,i,r);return(!isFinite(s)||s<=0)&&y_(n,function(o){return s=wh(t,e,o,r),isFinite(s)&&s>0}),s}function yP(t,e,n,r,i,s,o,a,l,c,u,h,d,f){const g=Rt(Math.round(n*t),Math.round(n*e),ks);if(h||(g.imageSmoothingEnabled=!1),l.length===0)return g.canvas;g.scale(n,n);function m(E){return Math.round(E*n)/n}g.globalCompositeOperation="lighter";const p=vn();l.forEach(function(E,P,k){p_(p,E.extent)});let _;const y=n/r,w=(h?1:1+Math.pow(2,-24))/y;_=Rt(Math.round(ze(p)*y),Math.round(zt(p)*y),ks),h||(_.imageSmoothingEnabled=!1),l.forEach(function(E,P,k){if(E.image.width>0&&E.image.height>0){if(E.clipExtent){_.save();const A=(E.clipExtent[0]-p[0])*y,q=-(E.clipExtent[3]-p[3])*y,re=ze(E.clipExtent)*y,ce=zt(E.clipExtent)*y;_.rect(h?A:Math.round(A),h?q:Math.round(q),h?re:Math.round(A+re)-Math.round(A),h?ce:Math.round(q+ce)-Math.round(q)),_.clip()}const R=(E.extent[0]-p[0])*y,C=-(E.extent[3]-p[3])*y,V=ze(E.extent)*y,W=zt(E.extent)*y;_.drawImage(E.image,c,c,E.image.width-2*c,E.image.height-2*c,h?R:Math.round(R),h?C:Math.round(C),h?V:Math.round(R+V)-Math.round(R),h?W:Math.round(C+W)-Math.round(C)),E.clipExtent&&_.restore()}});const b=$i(o);return a.getTriangles().forEach(function(E,P,k){const R=E.source,C=E.target;let V=R[0][0],W=R[0][1],A=R[1][0],q=R[1][1],re=R[2][0],ce=R[2][1];const z=m((C[0][0]-b[0])/s),ie=m(-(C[0][1]-b[1])/s),ee=m((C[1][0]-b[0])/s),Ie=m(-(C[1][1]-b[1])/s),me=m((C[2][0]-b[0])/s),ye=m(-(C[2][1]-b[1])/s),ge=V,Le=W;V=0,W=0,A-=ge,q-=Le,re-=ge,ce-=Le;const U=[[A,q,0,0,ee-z],[re,ce,0,0,me-z],[0,0,A,q,Ie-ie],[0,0,re,ce,ye-ie]],ot=u2(U);if(!ot)return;if(g.save(),g.beginPath(),pP()||!h){g.moveTo(ee,Ie);const T=4,J=z-ee,H=ie-Ie;for(let te=0;te<T;te++)g.lineTo(ee+m((te+1)*J/T),Ie+m(te*H/(T-1))),te!=T-1&&g.lineTo(ee+m((te+1)*J/T),Ie+m((te+1)*H/(T-1)));g.lineTo(me,ye)}else g.moveTo(ee,Ie),g.lineTo(z,ie),g.lineTo(me,ye);g.clip(),g.transform(ot[0],ot[2],ot[1],ot[3],z,ie),g.translate(p[0]-ge,p[3]-Le);let He;if(_)He=_.canvas,g.scale(w,-w);else{const T=l[0],J=T.extent;He=T.image,g.scale(ze(J)/He.width,-zt(J)/He.height)}g.drawImage(He,0,0),g.restore()}),_&&(Nc(_),ks.push(_.canvas)),u&&(g.save(),g.globalCompositeOperation="source-over",g.strokeStyle="black",g.lineWidth=1,a.getTriangles().forEach(function(E,P,k){const R=E.target,C=(R[0][0]-b[0])/s,V=-(R[0][1]-b[1])/s,W=(R[1][0]-b[0])/s,A=-(R[1][1]-b[1])/s,q=(R[2][0]-b[0])/s,re=-(R[2][1]-b[1])/s;g.beginPath(),g.moveTo(W,A),g.lineTo(C,V),g.lineTo(q,re),g.closePath(),g.stroke()}),g.restore()),g.canvas}class Sh extends vy{constructor(e,n,r,i,s,o,a,l,c,u,h,d){super(s,de.IDLE,d),this.renderEdges_=h!==void 0?h:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=n,this.targetTileGrid_=i,this.wrappedTileCoord_=o||s,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=e.canWrapX()?e.getExtent():void 0;const f=i.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent();let m=this.sourceTileGrid_.getExtent();const p=g?Go(f,g):f;if(ih(p)===0){this.state=de.EMPTY;return}const _=e.getExtent();_&&(m?m=Go(m,_):m=_);const y=i.getResolution(this.wrappedTileCoord_[0]),w=_P(e,r,p,y);if(!isFinite(w)||w<=0){this.state=de.EMPTY;return}const b=u!==void 0?u:fP;if(this.triangulation_=new mP(e,r,p,m,w*b,y),this.triangulation_.getTriangles().length===0){this.state=de.EMPTY;return}this.sourceZ_=n.getZForResolution(w);let E=this.triangulation_.calculateSourceExtent();if(m&&(e.canWrapX()?(E[1]=mt(E[1],m[1],m[3]),E[3]=mt(E[3],m[1],m[3])):E=Go(E,m)),!ih(E))this.state=de.EMPTY;else{let P=0,k=0;e.canWrapX()&&(P=ze(_),k=Math.floor((E[0]-_[0])/P)),w_(E.slice(),e,!0).forEach(C=>{const V=n.getTileRangeForExtentAndZ(C,this.sourceZ_);for(let W=V.minX;W<=V.maxX;W++)for(let A=V.minY;A<=V.maxY;A++){const q=c(this.sourceZ_,W,A,a);if(q){const re=k*P;this.sourceTiles_.push({tile:q,offset:re})}}++k}),this.sourceTiles_.length===0&&(this.state=de.EMPTY)}}getImage(){return this.canvas_}reproject_(){const e=[];if(this.sourceTiles_.forEach(n=>{var i;const r=n.tile;if(r&&r.getState()==de.LOADED){const s=this.sourceTileGrid_.getTileCoordExtent(r.tileCoord);s[0]+=n.offset,s[2]+=n.offset;const o=(i=this.clipExtent_)==null?void 0:i.slice();o&&(o[0]+=n.offset,o[2]+=n.offset),e.push({extent:s,clipExtent:o,image:r.getImage()})}}),this.sourceTiles_.length=0,e.length===0)this.state=de.ERROR;else{const n=this.wrappedTileCoord_[0],r=this.targetTileGrid_.getTileSize(n),i=typeof r=="number"?r:r[0],s=typeof r=="number"?r:r[1],o=this.targetTileGrid_.getResolution(n),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=yP(i,s,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=de.LOADED}this.changed()}load(){if(this.state==de.IDLE){this.state=de.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:n})=>{const r=n.getState();if(r==de.IDLE||r==de.LOADING){e++;const i=Fe(n,Se.CHANGE,function(s){const o=n.getState();(o==de.LOADED||o==de.ERROR||o==de.EMPTY)&&(st(i),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(i)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:n},r,i){n.getState()==de.IDLE&&n.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(st),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Nc(this.canvas_.getContext("2d")),ks.push(this.canvas_),this.canvas_=null),super.release()}}class Xd{constructor(e,n,r,i){this.minX=e,this.maxX=n,this.minY=r,this.maxY=i}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,n){return this.minX<=e&&e<=this.maxX&&this.minY<=n&&n<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}}function ns(t,e,n,r,i){return i!==void 0?(i.minX=t,i.maxX=e,i.minY=n,i.maxY=r,i):new Xd(t,e,n,r)}class vP extends yy{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=vn(),this.tmpTileRange_=new Xd(0,0,0,0)}isDrawableTile(e){const n=this.getLayer(),r=e.getState(),i=n.getUseInterimTilesOnError();return r==de.LOADED||r==de.EMPTY||r==de.ERROR&&!i}getTile(e,n,r,i){const s=i.pixelRatio,o=i.viewState.projection,a=this.getLayer();let c=a.getSource().getTile(e,n,r,s,o);return c.getState()==de.ERROR&&a.getUseInterimTilesOnError()&&a.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(c)||(c=c.getInterimTile()),c}getData(e){const n=this.frameState;if(!n)return null;const r=this.getLayer(),i=Ct(n.pixelToCoordinateTransform,e.slice()),s=r.getExtent();if(s&&!zs(s,i))return null;const o=n.pixelRatio,a=n.viewState.projection,l=n.viewState,c=r.getRenderSource(),u=c.getTileGridForProjection(l.projection),h=c.getTilePixelRatio(n.pixelRatio);for(let d=u.getZForResolution(l.resolution);d>=u.getMinZoom();--d){const f=u.getTileCoordForCoordAndZ(i,d),g=c.getTile(d,f[1],f[2],o,a);if(!(g instanceof wy||g instanceof Sh)||g instanceof Sh&&g.getState()===de.EMPTY)return null;if(g.getState()!==de.LOADED)continue;const m=u.getOrigin(d),p=yn(u.getTileSize(d)),_=u.getResolution(d),y=Math.floor(h*((i[0]-m[0])/_-f[1]*p[0])),w=Math.floor(h*((m[1]-i[1])/_-f[2]*p[1])),b=Math.round(h*c.getGutterForProjection(l.projection));return this.getImageData(g.getImage(),y+b,w+b)}return null}loadedTileCallback(e,n,r){return this.isDrawableTile(r)?super.loadedTileCallback(e,n,r):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,n){const r=e.layerStatesArray[e.layerIndex],i=e.viewState,s=i.projection,o=i.resolution,a=i.center,l=i.rotation,c=e.pixelRatio,u=this.getLayer(),h=u.getSource(),d=h.getRevision(),f=h.getTileGridForProjection(s),g=f.getZForResolution(o,h.zDirection),m=f.getResolution(g);let p=e.extent;const _=e.viewState.resolution,y=h.getTilePixelRatio(c);this.prepareContainer(e,n);const w=this.context.canvas.width,b=this.context.canvas.height,E=r.extent&&Ti(r.extent);E&&(p=Go(p,Ti(r.extent)));const P=m*w/2/y,k=m*b/2/y,R=[a[0]-P,a[1]-k,a[0]+P,a[1]+k],C=f.getTileRangeForExtentAndZ(p,g),V={};V[g]={};const W=this.createLoadedTileFinder(h,s,V),A=this.tmpExtent,q=this.tmpTileRange_;this.newTiles_=!1;const re=l?oh(i.center,_,l,e.size):void 0;for(let ye=C.minX;ye<=C.maxX;++ye)for(let ge=C.minY;ge<=C.maxY;++ge){if(l&&!f.tileCoordIntersectsViewport([g,ye,ge],re))continue;const Le=this.getTile(g,ye,ge,e);if(this.isDrawableTile(Le)){const He=qe(this);if(Le.getState()==de.LOADED){V[g][Le.tileCoord.toString()]=Le;let T=Le.inTransition(He);T&&r.opacity!==1&&(Le.endTransition(He),T=!1),!this.newTiles_&&(T||!this.renderedTiles.includes(Le))&&(this.newTiles_=!0)}if(Le.getAlpha(He,e.time)===1)continue}const U=f.getTileCoordChildTileRange(Le.tileCoord,q,A);let ot=!1;U&&(ot=W(g+1,U)),ot||f.forEachTileCoordParentTileRange(Le.tileCoord,W,q,A)}const ce=m/o*c/y,z=this.getRenderContext(e);Lr(this.tempTransform,w/2,b/2,ce,ce,0,-w/2,-b/2),E&&this.clipUnrotated(z,e,E),h.getInterpolate()||(z.imageSmoothingEnabled=!1),this.preRender(z,e),this.renderedTiles.length=0;let ie=Object.keys(V).map(Number);ie.sort(kr);let ee,Ie,me;r.opacity===1&&(!this.containerReused||h.getOpaque(e.viewState.projection))?ie=ie.reverse():(ee=[],Ie=[]);for(let ye=ie.length-1;ye>=0;--ye){const ge=ie[ye],Le=h.getTilePixelSize(ge,c,s),ot=f.getResolution(ge)/m,He=Le[0]*ot*ce,T=Le[1]*ot*ce,J=f.getTileCoordForCoordAndZ($i(R),ge),H=f.getTileCoordExtent(J),te=Ct(this.tempTransform,[y*(H[0]-R[0])/m,y*(R[3]-H[3])/m]),xe=y*h.getGutterForProjection(s),v=V[ge];for(const M in v){const x=v[M],L=x.tileCoord,N=J[1]-L[1],I=Math.round(te[0]-(N-1)*He),Z=J[2]-L[2],$=Math.round(te[1]-(Z-1)*T),j=Math.round(te[0]-N*He),D=Math.round(te[1]-Z*T),se=I-j,Y=$-D,oe=g===ge,ue=oe&&x.getAlpha(qe(this),e.time)!==1;let be=!1;if(!ue)if(ee){me=[j,D,j+se,D,j+se,D+Y,j,D+Y];for(let Pe=0,ke=ee.length;Pe<ke;++Pe)if(g!==ge&&ge<Ie[Pe]){const De=ee[Pe];rn([j,D,j+se,D+Y],[De[0],De[3],De[4],De[7]])&&(be||(z.save(),be=!0),z.beginPath(),z.moveTo(me[0],me[1]),z.lineTo(me[2],me[3]),z.lineTo(me[4],me[5]),z.lineTo(me[6],me[7]),z.moveTo(De[6],De[7]),z.lineTo(De[4],De[5]),z.lineTo(De[2],De[3]),z.lineTo(De[0],De[1]),z.clip())}ee.push(me),Ie.push(ge)}else z.clearRect(j,D,se,Y);this.drawTileImage(x,e,j,D,se,Y,xe,oe),ee&&!ue?(be&&z.restore(),this.renderedTiles.unshift(x)):this.renderedTiles.push(x),this.updateUsedTiles(e.usedTiles,h,x)}}return this.renderedRevision=d,this.renderedResolution=m,this.extentChanged=!this.renderedExtent_||!ra(this.renderedExtent_,R),this.renderedExtent_=R,this.renderedPixelRatio=c,this.renderedProjection=s,this.manageTilePyramid(e,h,f,c,s,p,g,u.getPreload()),this.scheduleExpireCache(e,h),this.postRender(this.context,e),r.extent&&z.restore(),z.imageSmoothingEnabled=!0,this.container}drawTileImage(e,n,r,i,s,o,a,l){const c=this.getTileImage(e);if(!c)return;const u=this.getRenderContext(n),h=qe(this),d=n.layerStatesArray[n.layerIndex],f=d.opacity*(l?e.getAlpha(h,n.time):1),g=f!==u.globalAlpha;g&&(u.save(),u.globalAlpha=f),u.drawImage(c,a,a,c.width-2*a,c.height-2*a,r,i,s,o),g&&u.restore(),f!==d.opacity?n.animate=!0:l&&e.endTransition(h)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,n){if(n.canExpireCache()){const r=(function(i,s,o){const a=qe(i);a in o.usedTiles&&i.expireCache(o.viewState.projection,o.usedTiles[a])}).bind(null,n);e.postRenderFunctions.push(r)}}updateUsedTiles(e,n,r){const i=qe(n);i in e||(e[i]={}),e[i][r.getKey()]=!0}manageTilePyramid(e,n,r,i,s,o,a,l,c){const u=qe(n);u in e.wantedTiles||(e.wantedTiles[u]={});const h=e.wantedTiles[u],d=e.tileQueue,f=r.getMinZoom(),g=e.viewState.rotation,m=g?oh(e.viewState.center,e.viewState.resolution,g,e.size):void 0;let p=0,_,y,w,b,E,P;for(P=f;P<=a;++P)for(y=r.getTileRangeForExtentAndZ(o,P,y),w=r.getResolution(P),b=y.minX;b<=y.maxX;++b)for(E=y.minY;E<=y.maxY;++E)g&&!r.tileCoordIntersectsViewport([P,b,E],m)||(a-P<=l?(++p,_=n.getTile(P,b,E,i,s),_.getState()==de.IDLE&&(h[_.getKey()]=!0,d.isKeyQueued(_.getKey())||d.enqueue([_,u,r.getTileCoordCenter(_.tileCoord),w])),c!==void 0&&c(_)):n.useTile(P,b,E,s));n.updateCacheSize(p,s)}}class ym extends cP{constructor(e){super(e)}createRenderer(){return new vP(this)}}const he={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},sl=[he.FILL],ni=[he.STROKE],Ii=[he.BEGIN_PATH],vm=[he.CLOSE_PATH];class Sy{drawCustom(e,n,r,i,s){}drawGeometry(e){}setStyle(e){}drawCircle(e,n,r){}drawFeature(e,n,r){}drawGeometryCollection(e,n,r){}drawLineString(e,n,r){}drawMultiLineString(e,n,r){}drawMultiPoint(e,n,r){}drawMultiPolygon(e,n,r){}drawPoint(e,n,r){}drawPolygon(e,n,r){}drawText(e,n,r){}setFillStrokeStyle(e,n){}setImageStyle(e,n){}setTextStyle(e,n){}}class Ia extends Sy{constructor(e,n,r,i){super(),this.tolerance=e,this.maxExtent=n,this.pixelRatio=i,this.maxLineWidth=0,this.resolution=r,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(e){const n=this.pixelRatio;return n==1?e:e.map(function(r){return r*n})}appendFlatPointCoordinates(e,n){const r=this.getBufferedMaxExtent(),i=this.tmpCoordinate_,s=this.coordinates;let o=s.length;for(let a=0,l=e.length;a<l;a+=n)i[0]=e[a],i[1]=e[a+1],zs(r,i)&&(s[o++]=i[0],s[o++]=i[1]);return o}appendFlatLineCoordinates(e,n,r,i,s,o){const a=this.coordinates;let l=a.length;const c=this.getBufferedMaxExtent();o&&(n+=i);let u=e[n],h=e[n+1];const d=this.tmpCoordinate_;let f=!0,g,m,p;for(g=n+i;g<r;g+=i)d[0]=e[g],d[1]=e[g+1],p=rh(c,d),p!==m?(f&&(a[l++]=u,a[l++]=h,f=!1),a[l++]=d[0],a[l++]=d[1]):p===bt.INTERSECTING?(a[l++]=d[0],a[l++]=d[1],f=!1):f=!0,u=d[0],h=d[1],m=p;return(s&&f||g===n+i)&&(a[l++]=u,a[l++]=h),l}drawCustomCoordinates_(e,n,r,i,s){for(let o=0,a=r.length;o<a;++o){const l=r[o],c=this.appendFlatLineCoordinates(e,n,l,i,!1,!1);s.push(c),n=l}return n}drawCustom(e,n,r,i,s){this.beginGeometry(e,n,s);const o=e.getType(),a=e.getStride(),l=this.coordinates.length;let c,u,h,d,f;switch(o){case"MultiPolygon":c=e.getOrientedFlatCoordinates(),d=[];const g=e.getEndss();f=0;for(let m=0,p=g.length;m<p;++m){const _=[];f=this.drawCustomCoordinates_(c,f,g[m],a,_),d.push(_)}this.instructions.push([he.CUSTOM,l,d,e,r,uh,s]),this.hitDetectionInstructions.push([he.CUSTOM,l,d,e,i||r,uh,s]);break;case"Polygon":case"MultiLineString":h=[],c=o=="Polygon"?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),f=this.drawCustomCoordinates_(c,0,e.getEnds(),a,h),this.instructions.push([he.CUSTOM,l,h,e,r,ia,s]),this.hitDetectionInstructions.push([he.CUSTOM,l,h,e,i||r,ia,s]);break;case"LineString":case"Circle":c=e.getFlatCoordinates(),u=this.appendFlatLineCoordinates(c,0,c.length,a,!1,!1),this.instructions.push([he.CUSTOM,l,u,e,r,Qr,s]),this.hitDetectionInstructions.push([he.CUSTOM,l,u,e,i||r,Qr,s]);break;case"MultiPoint":c=e.getFlatCoordinates(),u=this.appendFlatPointCoordinates(c,a),u>l&&(this.instructions.push([he.CUSTOM,l,u,e,r,Qr,s]),this.hitDetectionInstructions.push([he.CUSTOM,l,u,e,i||r,Qr,s]));break;case"Point":c=e.getFlatCoordinates(),this.coordinates.push(c[0],c[1]),u=this.coordinates.length,this.instructions.push([he.CUSTOM,l,u,e,r,void 0,s]),this.hitDetectionInstructions.push([he.CUSTOM,l,u,e,i||r,void 0,s]);break}this.endGeometry(n)}beginGeometry(e,n,r){this.beginGeometryInstruction1_=[he.BEGIN_GEOMETRY,n,0,e,r],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[he.BEGIN_GEOMETRY,n,0,e,r],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){const e=this.hitDetectionInstructions;e.reverse();let n;const r=e.length;let i,s,o=-1;for(n=0;n<r;++n)i=e[n],s=i[0],s==he.END_GEOMETRY?o=n:s==he.BEGIN_GEOMETRY&&(i[2]=n,i2(this.hitDetectionInstructions,o,n),o=-1)}setFillStrokeStyle(e,n){const r=this.state;if(e){const i=e.getColor();r.fillPatternScale=i&&typeof i=="object"&&"src"in i?this.pixelRatio:1,r.fillStyle=er(i||nn)}else r.fillStyle=void 0;if(n){const i=n.getColor();r.strokeStyle=er(i||ca);const s=n.getLineCap();r.lineCap=s!==void 0?s:Ws;const o=n.getLineDash();r.lineDash=o?o.slice():Pr;const a=n.getLineDashOffset();r.lineDashOffset=a||Tr;const l=n.getLineJoin();r.lineJoin=l!==void 0?l:Vs;const c=n.getWidth();r.lineWidth=c!==void 0?c:ha;const u=n.getMiterLimit();r.miterLimit=u!==void 0?u:la,r.lineWidth>this.maxLineWidth&&(this.maxLineWidth=r.lineWidth,this.bufferedMaxExtent_=null)}else r.strokeStyle=void 0,r.lineCap=void 0,r.lineDash=null,r.lineDashOffset=void 0,r.lineJoin=void 0,r.lineWidth=void 0,r.miterLimit=void 0}createFill(e){const n=e.fillStyle,r=[he.SET_FILL_STYLE,n];return typeof n!="string"&&r.push(e.fillPatternScale),r}applyStroke(e){this.instructions.push(this.createStroke(e))}createStroke(e){return[he.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,this.applyPixelRatio(e.lineDash),e.lineDashOffset*this.pixelRatio]}updateFillStyle(e,n){const r=e.fillStyle;(typeof r!="string"||e.currentFillStyle!=r)&&(r!==void 0&&this.instructions.push(n.call(this,e)),e.currentFillStyle=r)}updateStrokeStyle(e,n){const r=e.strokeStyle,i=e.lineCap,s=e.lineDash,o=e.lineDashOffset,a=e.lineJoin,l=e.lineWidth,c=e.miterLimit;(e.currentStrokeStyle!=r||e.currentLineCap!=i||s!=e.currentLineDash&&!mi(e.currentLineDash,s)||e.currentLineDashOffset!=o||e.currentLineJoin!=a||e.currentLineWidth!=l||e.currentMiterLimit!=c)&&(r!==void 0&&n.call(this,e),e.currentStrokeStyle=r,e.currentLineCap=i,e.currentLineDash=s,e.currentLineDashOffset=o,e.currentLineJoin=a,e.currentLineWidth=l,e.currentMiterLimit=c)}endGeometry(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;const n=[he.END_GEOMETRY,e];this.instructions.push(n),this.hitDetectionInstructions.push(n)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=g_(this.maxExtent),this.maxLineWidth>0)){const e=this.resolution*(this.maxLineWidth+1)/2;na(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}}class wP extends Ia{constructor(e,n,r,i){super(e,n,r,i),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(e,n,r){if(!this.image_||this.maxExtent&&!zs(this.maxExtent,e.getFlatCoordinates()))return;this.beginGeometry(e,n,r);const i=e.getFlatCoordinates(),s=e.getStride(),o=this.coordinates.length,a=this.appendFlatPointCoordinates(i,s);this.instructions.push([he.DRAW_IMAGE,o,a,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([he.DRAW_IMAGE,o,a,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(n)}drawMultiPoint(e,n,r){if(!this.image_)return;this.beginGeometry(e,n,r);const i=e.getFlatCoordinates(),s=[];for(let l=0,c=i.length;l<c;l+=e.getStride())(!this.maxExtent||zs(this.maxExtent,i.slice(l,l+2)))&&s.push(i[l],i[l+1]);const o=this.coordinates.length,a=this.appendFlatPointCoordinates(s,2);this.instructions.push([he.DRAW_IMAGE,o,a,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([he.DRAW_IMAGE,o,a,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(n)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(e,n){const r=e.getAnchor(),i=e.getSize(),s=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=r[0],this.anchorY_=r[1],this.hitDetectionImage_=e.getHitDetectionImage(),this.image_=e.getImage(this.pixelRatio),this.height_=i[1],this.opacity_=e.getOpacity(),this.originX_=s[0],this.originY_=s[1],this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=i[0],this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=n}}class SP extends Ia{constructor(e,n,r,i){super(e,n,r,i)}drawFlatCoordinates_(e,n,r,i){const s=this.coordinates.length,o=this.appendFlatLineCoordinates(e,n,r,i,!1,!1),a=[he.MOVE_TO_LINE_TO,s,o];return this.instructions.push(a),this.hitDetectionInstructions.push(a),r}drawLineString(e,n,r){const i=this.state,s=i.strokeStyle,o=i.lineWidth;if(s===void 0||o===void 0)return;this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(e,n,r),this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Pr,Tr],Ii);const a=e.getFlatCoordinates(),l=e.getStride();this.drawFlatCoordinates_(a,0,a.length,l),this.hitDetectionInstructions.push(ni),this.endGeometry(n)}drawMultiLineString(e,n,r){const i=this.state,s=i.strokeStyle,o=i.lineWidth;if(s===void 0||o===void 0)return;this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(e,n,r),this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Pr,Tr],Ii);const a=e.getEnds(),l=e.getFlatCoordinates(),c=e.getStride();let u=0;for(let h=0,d=a.length;h<d;++h)u=this.drawFlatCoordinates_(l,u,a[h],c);this.hitDetectionInstructions.push(ni),this.endGeometry(n)}finish(){const e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push(ni),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(ni),e.lastStroke=this.coordinates.length),e.lastStroke=0,super.applyStroke(e),this.instructions.push(Ii)}}class wm extends Ia{constructor(e,n,r,i){super(e,n,r,i)}drawFlatCoordinatess_(e,n,r,i){const s=this.state,o=s.fillStyle!==void 0,a=s.strokeStyle!==void 0,l=r.length;this.instructions.push(Ii),this.hitDetectionInstructions.push(Ii);for(let c=0;c<l;++c){const u=r[c],h=this.coordinates.length,d=this.appendFlatLineCoordinates(e,n,u,i,!0,!a),f=[he.MOVE_TO_LINE_TO,h,d];this.instructions.push(f),this.hitDetectionInstructions.push(f),a&&(this.instructions.push(vm),this.hitDetectionInstructions.push(vm)),n=u}return o&&(this.instructions.push(sl),this.hitDetectionInstructions.push(sl)),a&&(this.instructions.push(ni),this.hitDetectionInstructions.push(ni)),n}drawCircle(e,n,r){const i=this.state,s=i.fillStyle,o=i.strokeStyle;if(s===void 0&&o===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,n,r),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_FILL_STYLE,nn]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Pr,Tr]);const a=e.getFlatCoordinates(),l=e.getStride(),c=this.coordinates.length;this.appendFlatLineCoordinates(a,0,a.length,l,!1,!1);const u=[he.CIRCLE,c];this.instructions.push(Ii,u),this.hitDetectionInstructions.push(Ii,u),i.fillStyle!==void 0&&(this.instructions.push(sl),this.hitDetectionInstructions.push(sl)),i.strokeStyle!==void 0&&(this.instructions.push(ni),this.hitDetectionInstructions.push(ni)),this.endGeometry(n)}drawPolygon(e,n,r){const i=this.state,s=i.fillStyle,o=i.strokeStyle;if(s===void 0&&o===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,n,r),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_FILL_STYLE,nn]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Pr,Tr]);const a=e.getEnds(),l=e.getOrientedFlatCoordinates(),c=e.getStride();this.drawFlatCoordinatess_(l,0,a,c),this.endGeometry(n)}drawMultiPolygon(e,n,r){const i=this.state,s=i.fillStyle,o=i.strokeStyle;if(s===void 0&&o===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,n,r),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_FILL_STYLE,nn]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Pr,Tr]);const a=e.getEndss(),l=e.getOrientedFlatCoordinates(),c=e.getStride();let u=0;for(let h=0,d=a.length;h<d;++h)u=this.drawFlatCoordinatess_(l,u,a[h],c);this.endGeometry(n)}finish(){this.reverseHitDetectionInstructions(),this.state=null;const e=this.tolerance;if(e!==0){const n=this.coordinates;for(let r=0,i=n.length;r<i;++r)n[r]=xi(n[r],e)}return super.finish()}setFillStrokeStyles_(){const e=this.state;e.fillStyle!==void 0&&this.updateFillStyle(e,this.createFill),e.strokeStyle!==void 0&&this.updateStrokeStyle(e,this.applyStroke)}}function bP(t,e,n,r,i){const s=[];let o=n,a=0,l=e.slice(n,2);for(;a<t&&o+i<r;){const[c,u]=l.slice(-2),h=e[o+i],d=e[o+i+1],f=Math.sqrt((h-c)*(h-c)+(d-u)*(d-u));if(a+=f,a>=t){const g=(t-a+f)/f,m=mn(c,h,g),p=mn(u,d,g);l.push(m,p),s.push(l),l=[m,p],a==t&&(o+=i),a=0}else if(a<t)l.push(e[o+i],e[o+i+1]),o+=i;else{const g=f-a,m=mn(c,h,g/f),p=mn(u,d,g/f);l.push(m,p),s.push(l),l=[m,p],a=0,o+=i}}return a>0&&s.push(l),s}function EP(t,e,n,r,i){let s=n,o=n,a=0,l=0,c=n,u,h,d,f,g,m,p,_,y,w;for(h=n;h<r;h+=i){const b=e[h],E=e[h+1];g!==void 0&&(y=b-g,w=E-m,f=Math.sqrt(y*y+w*w),p!==void 0&&(l+=d,u=Math.acos((p*y+_*w)/(d*f)),u>t&&(l>a&&(a=l,s=c,o=h),l=0,c=h-i)),d=f,p=y,_=w),g=b,m=E}return l+=f,l>a?[c,h]:[s,o]}const ql={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1};class MP extends Ia{constructor(e,n,r,i){super(e,n,r,i),this.labels_=null,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[nn]={fillStyle:nn},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_="",this.fillKey_="",this.strokeKey_="",this.declutterMode_=void 0,this.declutterImageWithText_=void 0}finish(){const e=super.finish();return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e}drawText(e,n,r){const i=this.textFillState_,s=this.textStrokeState_,o=this.textState_;if(this.text_===""||!o||!i&&!s)return;const a=this.coordinates;let l=a.length;const c=e.getType();let u=null,h=e.getStride();if(o.placement==="line"&&(c=="LineString"||c=="MultiLineString"||c=="Polygon"||c=="MultiPolygon")){if(!rn(this.maxExtent,e.getExtent()))return;let d;if(u=e.getFlatCoordinates(),c=="LineString")d=[u.length];else if(c=="MultiLineString")d=e.getEnds();else if(c=="Polygon")d=e.getEnds().slice(0,1);else if(c=="MultiPolygon"){const p=e.getEndss();d=[];for(let _=0,y=p.length;_<y;++_)d.push(p[_][0])}this.beginGeometry(e,n,r);const f=o.repeat,g=f?void 0:o.textAlign;let m=0;for(let p=0,_=d.length;p<_;++p){let y;f?y=bP(f*this.resolution,u,m,d[p],h):y=[u.slice(m,d[p])];for(let w=0,b=y.length;w<b;++w){const E=y[w];let P=0,k=E.length;if(g==null){const C=EP(o.maxAngle,E,0,E.length,2);P=C[0],k=C[1]}for(let C=P;C<k;C+=h)a.push(E[C],E[C+1]);const R=a.length;m=d[p],this.drawChars_(l,R),l=R}}this.endGeometry(n)}else{let d=o.overflow?null:[];switch(c){case"Point":case"MultiPoint":u=e.getFlatCoordinates();break;case"LineString":u=e.getFlatMidpoint();break;case"Circle":u=e.getCenter();break;case"MultiLineString":u=e.getFlatMidpoints(),h=2;break;case"Polygon":u=e.getFlatInteriorPoint(),o.overflow||d.push(u[2]/this.resolution),h=3;break;case"MultiPolygon":const y=e.getFlatInteriorPoints();u=[];for(let w=0,b=y.length;w<b;w+=3)o.overflow||d.push(y[w+2]/this.resolution),u.push(y[w],y[w+1]);if(u.length===0)return;h=2;break}const f=this.appendFlatPointCoordinates(u,h);if(f===l)return;if(d&&(f-l)/2!==u.length/h){let y=l/2;d=d.filter((w,b)=>{const E=a[(y+b)*2]===u[b*h]&&a[(y+b)*2+1]===u[b*h+1];return E||--y,E})}this.saveTextStates_(),(o.backgroundFill||o.backgroundStroke)&&(this.setFillStrokeStyle(o.backgroundFill,o.backgroundStroke),o.backgroundFill&&this.updateFillStyle(this.state,this.createFill),o.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(e,n,r);let g=o.padding;if(g!=Ai&&(o.scale[0]<0||o.scale[1]<0)){let y=o.padding[0],w=o.padding[1],b=o.padding[2],E=o.padding[3];o.scale[0]<0&&(w=-w,E=-E),o.scale[1]<0&&(y=-y,b=-b),g=[y,w,b,E]}const m=this.pixelRatio;this.instructions.push([he.DRAW_IMAGE,l,f,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterMode_,this.declutterImageWithText_,g==Ai?Ai:g.map(function(y){return y*m}),!!o.backgroundFill,!!o.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,d]);const p=1/m,_=this.state.fillStyle;o.backgroundFill&&(this.state.fillStyle=nn,this.hitDetectionInstructions.push(this.createFill(this.state))),this.hitDetectionInstructions.push([he.DRAW_IMAGE,l,f,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[p,p],NaN,this.declutterMode_,this.declutterImageWithText_,g,!!o.backgroundFill,!!o.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?nn:this.fillKey_,this.textOffsetX_,this.textOffsetY_,d]),o.backgroundFill&&(this.state.fillStyle=_,this.hitDetectionInstructions.push(this.createFill(this.state))),this.endGeometry(n)}}saveTextStates_(){const e=this.textStrokeState_,n=this.textState_,r=this.textFillState_,i=this.strokeKey_;e&&(i in this.strokeStates||(this.strokeStates[i]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));const s=this.textKey_;s in this.textStates||(this.textStates[s]={font:n.font,textAlign:n.textAlign||ua,justify:n.justify,textBaseline:n.textBaseline||Wl,scale:n.scale});const o=this.fillKey_;r&&(o in this.fillStates||(this.fillStates[o]={fillStyle:r.fillStyle}))}drawChars_(e,n){const r=this.textStrokeState_,i=this.textState_,s=this.strokeKey_,o=this.textKey_,a=this.fillKey_;this.saveTextStates_();const l=this.pixelRatio,c=ql[i.textBaseline],u=this.textOffsetY_*l,h=this.text_,d=r?r.lineWidth*Math.abs(i.scale[0])/2:0;this.instructions.push([he.DRAW_CHARS,e,n,c,i.overflow,a,i.maxAngle,l,u,s,d*l,h,o,1,this.declutterMode_]),this.hitDetectionInstructions.push([he.DRAW_CHARS,e,n,c,i.overflow,a&&nn,i.maxAngle,l,u,s,d*l,h,o,1/l,this.declutterMode_])}setTextStyle(e,n){let r,i,s;if(!e)this.text_="";else{const o=e.getFill();o?(i=this.textFillState_,i||(i={},this.textFillState_=i),i.fillStyle=er(o.getColor()||nn)):(i=null,this.textFillState_=i);const a=e.getStroke();if(!a)s=null,this.textStrokeState_=s;else{s=this.textStrokeState_,s||(s={},this.textStrokeState_=s);const g=a.getLineDash(),m=a.getLineDashOffset(),p=a.getWidth(),_=a.getMiterLimit();s.lineCap=a.getLineCap()||Ws,s.lineDash=g?g.slice():Pr,s.lineDashOffset=m===void 0?Tr:m,s.lineJoin=a.getLineJoin()||Vs,s.lineWidth=p===void 0?ha:p,s.miterLimit=_===void 0?la:_,s.strokeStyle=er(a.getColor()||ca)}r=this.textState_;const l=e.getFont()||J_;NC(l);const c=e.getScaleArray();r.overflow=e.getOverflow(),r.font=l,r.maxAngle=e.getMaxAngle(),r.placement=e.getPlacement(),r.textAlign=e.getTextAlign(),r.repeat=e.getRepeat(),r.justify=e.getJustify(),r.textBaseline=e.getTextBaseline()||Wl,r.backgroundFill=e.getBackgroundFill(),r.backgroundStroke=e.getBackgroundStroke(),r.padding=e.getPadding()||Ai,r.scale=c===void 0?[1,1]:c;const u=e.getOffsetX(),h=e.getOffsetY(),d=e.getRotateWithView(),f=e.getRotation();this.text_=e.getText()||"",this.textOffsetX_=u===void 0?0:u,this.textOffsetY_=h===void 0?0:h,this.textRotateWithView_=d===void 0?!1:d,this.textRotation_=f===void 0?0:f,this.strokeKey_=s?(typeof s.strokeStyle=="string"?s.strokeStyle:qe(s.strokeStyle))+s.lineCap+s.lineDashOffset+"|"+s.lineWidth+s.lineJoin+s.miterLimit+"["+s.lineDash.join()+"]":"",this.textKey_=r.font+r.scale+(r.textAlign||"?")+(r.repeat||"?")+(r.justify||"?")+(r.textBaseline||"?"),this.fillKey_=i&&i.fillStyle?typeof i.fillStyle=="string"?i.fillStyle:"|"+qe(i.fillStyle):""}this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=n}}const xP={Circle:wm,Default:Ia,Image:wP,LineString:SP,Polygon:wm,Text:MP};class CP{constructor(e,n,r,i){this.tolerance_=e,this.maxExtent_=n,this.pixelRatio_=i,this.resolution_=r,this.buildersByZIndex_={}}finish(){const e={};for(const n in this.buildersByZIndex_){e[n]=e[n]||{};const r=this.buildersByZIndex_[n];for(const i in r){const s=r[i].finish();e[n][i]=s}}return e}getBuilder(e,n){const r=e!==void 0?e.toString():"0";let i=this.buildersByZIndex_[r];i===void 0&&(i={},this.buildersByZIndex_[r]=i);let s=i[n];if(s===void 0){const o=xP[n];s=new o(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),i[n]=s}return s}}function kP(t,e,n,r,i,s,o,a,l,c,u,h){let d=t[e],f=t[e+1],g=0,m=0,p=0,_=0;function y(){g=d,m=f,e+=r,d=t[e],f=t[e+1],_+=p,p=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m))}do y();while(e<n-r&&_+p<s);let w=p===0?0:(s-_)/p;const b=mn(g,d,w),E=mn(m,f,w),P=e-r,k=_,R=s+a*l(c,i,u);for(;e<n-r&&_+p<R;)y();w=p===0?0:(R-_)/p;const C=mn(g,d,w),V=mn(m,f,w);let W;if(h){const z=[b,E,C,V];A_(z,0,4,2,h,z,z),W=z[0]>z[2]}else W=b>C;const A=Math.PI,q=[],re=P+r===e;e=P,p=0,_=k,d=t[e],f=t[e+1];let ce;if(re){y(),ce=Math.atan2(f-m,d-g),W&&(ce+=ce>0?-A:A);const z=(C+b)/2,ie=(V+E)/2;return q[0]=[z,ie,(R-s)/2,ce,i],q}i=i.replace(/\n/g," ");for(let z=0,ie=i.length;z<ie;){y();let ee=Math.atan2(f-m,d-g);if(W&&(ee+=ee>0?-A:A),ce!==void 0){let U=ee-ce;if(U+=U>A?-2*A:U<-A?2*A:0,Math.abs(U)>o)return null}ce=ee;const Ie=z;let me=0;for(;z<ie;++z){const U=W?ie-z-1:z,ot=a*l(c,i[U],u);if(e+r<n&&_+p<s+me+ot/2)break;me+=ot}if(z===Ie)continue;const ye=W?i.substring(ie-Ie,ie-z):i.substring(Ie,z);w=p===0?0:(s+me/2-_)/p;const ge=mn(g,d,w),Le=mn(m,f,w);q.push([ge,Le,me/2,ee,ye]),s+=me}return q}function by(t,e,n,r){let i=t[e],s=t[e+1],o=0;for(let a=e+r;a<n;a+=r){const l=t[a],c=t[a+1];o+=Math.sqrt((l-i)*(l-i)+(c-s)*(c-s)),i=l,s=c}return o}const rs=vn(),jr=[],pr=[],_r=[],Wr=[];function Sm(t){return t[3].declutterBox}const bm=new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");function Mu(t,e){return e==="start"?e=bm.test(t)?"right":"left":e==="end"&&(e=bm.test(t)?"left":"right"),ql[e]}function PP(t,e,n){return n>0&&t.push(`
`,""),t.push(e,""),t}class TP{constructor(e,n,r,i,s){this.overlaps=r,this.pixelRatio=n,this.resolution=e,this.alignAndScaleFill_,this.instructions=i.instructions,this.coordinates=i.coordinates,this.coordinateCache_={},this.renderedTransform_=Nn(),this.hitDetectionInstructions=i.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=i.fillStates||{},this.strokeStates=i.strokeStates||{},this.textStates=i.textStates||{},this.widths_={},this.labels_={},this.zIndexContext_=s?new _y:null}getZIndexContext(){return this.zIndexContext_}createLabel(e,n,r,i){const s=e+n+r+i;if(this.labels_[s])return this.labels_[s];const o=i?this.strokeStates[i]:null,a=r?this.fillStates[r]:null,l=this.textStates[n],c=this.pixelRatio,u=[l.scale[0]*c,l.scale[1]*c],h=Array.isArray(e),d=l.justify?ql[l.justify]:Mu(Array.isArray(e)?e[0]:e,l.textAlign||ua),f=i&&o.lineWidth?o.lineWidth:0,g=h?e:e.split(`
`).reduce(PP,[]),{width:m,height:p,widths:_,heights:y,lineWidths:w}=GC(l,g),b=m+f,E=[],P=(b+2)*u[0],k=(p+f)*u[1],R={width:P<0?Math.floor(P):Math.ceil(P),height:k<0?Math.floor(k):Math.ceil(k),contextInstructions:E};(u[0]!=1||u[1]!=1)&&E.push("scale",u),i&&(E.push("strokeStyle",o.strokeStyle),E.push("lineWidth",f),E.push("lineCap",o.lineCap),E.push("lineJoin",o.lineJoin),E.push("miterLimit",o.miterLimit),E.push("setLineDash",[o.lineDash]),E.push("lineDashOffset",o.lineDashOffset)),r&&E.push("fillStyle",a.fillStyle),E.push("textBaseline","middle"),E.push("textAlign","center");const C=.5-d;let V=d*b+C*f;const W=[],A=[];let q=0,re=0,ce=0,z=0,ie;for(let ee=0,Ie=g.length;ee<Ie;ee+=2){const me=g[ee];if(me===`
`){re+=q,q=0,V=d*b+C*f,++z;continue}const ye=g[ee+1]||l.font;ye!==ie&&(i&&W.push("font",ye),r&&A.push("font",ye),ie=ye),q=Math.max(q,y[ce]);const ge=[me,V+C*_[ce]+d*(_[ce]-w[z]),.5*(f+q)+re];V+=_[ce],i&&W.push("strokeText",ge),r&&A.push("fillText",ge),++ce}return Array.prototype.push.apply(E,W),Array.prototype.push.apply(E,A),this.labels_[s]=R,R}replayTextBackground_(e,n,r,i,s,o,a){e.beginPath(),e.moveTo.apply(e,n),e.lineTo.apply(e,r),e.lineTo.apply(e,i),e.lineTo.apply(e,s),e.lineTo.apply(e,n),o&&(this.alignAndScaleFill_=o[2],this.fill_(e)),a&&(this.setStrokeStyle_(e,a),e.stroke())}calculateImageOrLabelDimensions_(e,n,r,i,s,o,a,l,c,u,h,d,f,g,m,p){a*=d[0],l*=d[1];let _=r-a,y=i-l;const w=s+c>e?e-c:s,b=o+u>n?n-u:o,E=g[3]+w*d[0]+g[1],P=g[0]+b*d[1]+g[2],k=_-g[3],R=y-g[0];(m||h!==0)&&(jr[0]=k,Wr[0]=k,jr[1]=R,pr[1]=R,pr[0]=k+E,_r[0]=pr[0],_r[1]=R+P,Wr[1]=_r[1]);let C;return h!==0?(C=Lr(Nn(),r,i,1,1,h,-r,-i),Ct(C,jr),Ct(C,pr),Ct(C,_r),Ct(C,Wr),jn(Math.min(jr[0],pr[0],_r[0],Wr[0]),Math.min(jr[1],pr[1],_r[1],Wr[1]),Math.max(jr[0],pr[0],_r[0],Wr[0]),Math.max(jr[1],pr[1],_r[1],Wr[1]),rs)):jn(Math.min(k,k+E),Math.min(R,R+P),Math.max(k,k+E),Math.max(R,R+P),rs),f&&(_=Math.round(_),y=Math.round(y)),{drawImageX:_,drawImageY:y,drawImageW:w,drawImageH:b,originX:c,originY:u,declutterBox:{minX:rs[0],minY:rs[1],maxX:rs[2],maxY:rs[3],value:p},canvasTransform:C,scale:d}}replayImageOrLabel_(e,n,r,i,s,o,a){const l=!!(o||a),c=i.declutterBox,u=a?a[2]*i.scale[0]/2:0;return c.minX-u<=n[0]&&c.maxX+u>=0&&c.minY-u<=n[1]&&c.maxY+u>=0&&(l&&this.replayTextBackground_(e,jr,pr,_r,Wr,o,a),zC(e,i.canvasTransform,s,r,i.originX,i.originY,i.drawImageW,i.drawImageH,i.drawImageX,i.drawImageY,i.scale)),!0}fill_(e){const n=this.alignAndScaleFill_;if(n){const r=Ct(this.renderedTransform_,[0,0]),i=512*this.pixelRatio;e.save(),e.translate(r[0]%i,r[1]%i),n!==1&&e.scale(n,n),e.rotate(this.viewRotation_)}e.fill(),n&&e.restore()}setStrokeStyle_(e,n){e.strokeStyle=n[1],e.lineWidth=n[2],e.lineCap=n[3],e.lineJoin=n[4],e.miterLimit=n[5],e.lineDashOffset=n[7],e.setLineDash(n[6])}drawLabelWithPointPlacement_(e,n,r,i){const s=this.textStates[n],o=this.createLabel(e,n,i,r),a=this.strokeStates[r],l=this.pixelRatio,c=Mu(Array.isArray(e)?e[0]:e,s.textAlign||ua),u=ql[s.textBaseline||Wl],h=a&&a.lineWidth?a.lineWidth:0,d=o.width/l-2*s.scale[0],f=c*d+2*(.5-c)*h,g=u*o.height/l+2*(.5-u)*h;return{label:o,anchorX:f,anchorY:g}}execute_(e,n,r,i,s,o,a,l){const c=this.zIndexContext_;let u;this.pixelCoordinates_&&mi(r,this.renderedTransform_)?u=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),u=si(this.coordinates,0,this.coordinates.length,2,r,this.pixelCoordinates_),j2(this.renderedTransform_,r));let h=0;const d=i.length;let f=0,g,m,p,_,y,w,b,E,P,k,R,C,V,W=0,A=0,q=null,re=null;const ce=this.coordinateCache_,z=this.viewRotation_,ie=Math.round(Math.atan2(-r[1],r[0])*1e12)/1e12,ee={context:e,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:z},Ie=this.instructions!=i||this.overlaps?0:200;let me,ye,ge,Le;for(;h<d;){const U=i[h];switch(U[0]){case he.BEGIN_GEOMETRY:me=U[1],Le=U[3],me.getGeometry()?a!==void 0&&!rn(a,Le.getExtent())?h=U[2]+1:++h:h=U[2],c&&(c.zIndex=U[4]);break;case he.BEGIN_PATH:W>Ie&&(this.fill_(e),W=0),A>Ie&&(e.stroke(),A=0),!W&&!A&&(e.beginPath(),y=NaN,w=NaN),++h;break;case he.CIRCLE:f=U[1];const He=u[f],T=u[f+1],J=u[f+2],H=u[f+3],te=J-He,xe=H-T,v=Math.sqrt(te*te+xe*xe);e.moveTo(He+v,T),e.arc(He,T,v,0,2*Math.PI,!0),++h;break;case he.CLOSE_PATH:e.closePath(),++h;break;case he.CUSTOM:f=U[1],g=U[2];const M=U[3],x=U[4],L=U[5];ee.geometry=M,ee.feature=me,h in ce||(ce[h]=[]);const N=ce[h];L?L(u,f,g,2,N):(N[0]=u[f],N[1]=u[f+1],N.length=2),c&&(c.zIndex=U[6]),x(N,ee),++h;break;case he.DRAW_IMAGE:f=U[1],g=U[2],P=U[3],m=U[4],p=U[5];let I=U[6];const Z=U[7],$=U[8],j=U[9],D=U[10];let se=U[11];const Y=U[12];let oe=U[13];_=U[14]||"declutter";const ue=U[15];if(!P&&U.length>=20){k=U[19],R=U[20],C=U[21],V=U[22];const wn=this.drawLabelWithPointPlacement_(k,R,C,V);P=wn.label,U[3]=P;const _i=U[23];m=(wn.anchorX-_i)*this.pixelRatio,U[4]=m;const Sn=U[24];p=(wn.anchorY-Sn)*this.pixelRatio,U[5]=p,I=P.height,U[6]=I,oe=P.width,U[13]=oe}let be;U.length>25&&(be=U[25]);let Pe,ke,De;U.length>17?(Pe=U[16],ke=U[17],De=U[18]):(Pe=Ai,ke=!1,De=!1),D&&ie?se+=z:!D&&!ie&&(se-=z);let At=0;for(;f<g;f+=2){if(be&&be[At++]<oe/this.pixelRatio)continue;const wn=this.calculateImageOrLabelDimensions_(P.width,P.height,u[f],u[f+1],oe,I,m,p,$,j,se,Y,s,Pe,ke||De,me),_i=[e,n,P,wn,Z,ke?q:null,De?re:null];if(l){let Sn,Un,bn;if(ue){const ct=g-f;if(!ue[ct]){ue[ct]={args:_i,declutterMode:_};continue}const Ut=ue[ct];Sn=Ut.args,Un=Ut.declutterMode,delete ue[ct],bn=Sm(Sn)}let ur,hr;if(Sn&&(Un!=="declutter"||!l.collides(bn))&&(ur=!0),(_!=="declutter"||!l.collides(wn.declutterBox))&&(hr=!0),Un==="declutter"&&_==="declutter"){const ct=ur&&hr;ur=ct,hr=ct}ur&&(Un!=="none"&&l.insert(bn),this.replayImageOrLabel_.apply(this,Sn)),hr&&(_!=="none"&&l.insert(wn.declutterBox),this.replayImageOrLabel_.apply(this,_i))}else this.replayImageOrLabel_.apply(this,_i)}++h;break;case he.DRAW_CHARS:const hn=U[1],dn=U[2],cr=U[3],Ba=U[4];V=U[5];const Vt=U[6],fn=U[7],ro=U[8];C=U[9];const Xi=U[10];k=U[11],R=U[12];const gf=[U[13],U[13]];_=U[14]||"declutter";const $c=this.textStates[R],io=$c.font,so=[$c.scale[0]*fn,$c.scale[1]*fn];let oo;io in this.widths_?oo=this.widths_[io]:(oo={},this.widths_[io]=oo);const mf=by(u,hn,dn,2),pf=Math.abs(so[0])*sm(io,k,oo);if(Ba||pf<=mf){const wn=this.textStates[R].textAlign,_i=(mf-pf)*Mu(k,wn),Sn=kP(u,hn,dn,2,k,_i,Vt,Math.abs(so[0]),sm,io,oo,ie?0:this.viewRotation_);e:if(Sn){const Un=[];let bn,ur,hr,ct,Ut;if(C)for(bn=0,ur=Sn.length;bn<ur;++bn){Ut=Sn[bn],hr=Ut[4],ct=this.createLabel(hr,R,"",C),m=Ut[2]+(so[0]<0?-Xi:Xi),p=cr*ct.height+(.5-cr)*2*Xi*so[1]/so[0]-ro;const dr=this.calculateImageOrLabelDimensions_(ct.width,ct.height,Ut[0],Ut[1],ct.width,ct.height,m,p,0,0,Ut[3],gf,!1,Ai,!1,me);if(l&&_==="declutter"&&l.collides(dr.declutterBox))break e;Un.push([e,n,ct,dr,1,null,null])}if(V)for(bn=0,ur=Sn.length;bn<ur;++bn){Ut=Sn[bn],hr=Ut[4],ct=this.createLabel(hr,R,V,""),m=Ut[2],p=cr*ct.height-ro;const dr=this.calculateImageOrLabelDimensions_(ct.width,ct.height,Ut[0],Ut[1],ct.width,ct.height,m,p,0,0,Ut[3],gf,!1,Ai,!1,me);if(l&&_==="declutter"&&l.collides(dr.declutterBox))break e;Un.push([e,n,ct,dr,1,null,null])}l&&_!=="none"&&l.load(Un.map(Sm));for(let dr=0,g1=Un.length;dr<g1;++dr)this.replayImageOrLabel_.apply(this,Un[dr])}}++h;break;case he.END_GEOMETRY:if(o!==void 0){me=U[1];const wn=o(me,Le,_);if(wn)return wn}++h;break;case he.FILL:Ie?W++:this.fill_(e),++h;break;case he.MOVE_TO_LINE_TO:for(f=U[1],g=U[2],ye=u[f],ge=u[f+1],e.moveTo(ye,ge),y=ye+.5|0,w=ge+.5|0,f+=2;f<g;f+=2)ye=u[f],ge=u[f+1],b=ye+.5|0,E=ge+.5|0,(f==g-2||b!==y||E!==w)&&(e.lineTo(ye,ge),y=b,w=E);++h;break;case he.SET_FILL_STYLE:q=U,this.alignAndScaleFill_=U[2],W&&(this.fill_(e),W=0,A&&(e.stroke(),A=0)),e.fillStyle=U[1],++h;break;case he.SET_STROKE_STYLE:re=U,A&&(e.stroke(),A=0),this.setStrokeStyle_(e,U),++h;break;case he.STROKE:Ie?A++:e.stroke(),++h;break;default:++h;break}}W&&this.fill_(e),A&&e.stroke()}execute(e,n,r,i,s,o){this.viewRotation_=i,this.execute_(e,n,r,this.instructions,s,void 0,void 0,o)}executeHitDetection(e,n,r,i,s){return this.viewRotation_=r,this.execute_(e,[e.canvas.width,e.canvas.height],n,this.hitDetectionInstructions,!0,i,s)}}const gs=["Polygon","Circle","LineString","Image","Text","Default"],Ey=["Image","Text"],RP=gs.filter(t=>!Ey.includes(t));class AP{constructor(e,n,r,i,s,o,a){this.maxExtent_=e,this.overlaps_=i,this.pixelRatio_=r,this.resolution_=n,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=Nn(),this.renderedContext_=null,this.deferredZIndexContexts_={},this.createExecutors_(s,a)}clip(e,n){const r=this.getClipCoords(n);e.beginPath(),e.moveTo(r[0],r[1]),e.lineTo(r[2],r[3]),e.lineTo(r[4],r[5]),e.lineTo(r[6],r[7]),e.clip()}createExecutors_(e,n){for(const r in e){let i=this.executorsByZIndex_[r];i===void 0&&(i={},this.executorsByZIndex_[r]=i);const s=e[r];for(const o in s){const a=s[o];i[o]=new TP(this.resolution_,this.pixelRatio_,this.overlaps_,a,n)}}}hasExecutors(e){for(const n in this.executorsByZIndex_){const r=this.executorsByZIndex_[n];for(let i=0,s=e.length;i<s;++i)if(e[i]in r)return!0}return!1}forEachFeatureAtCoordinate(e,n,r,i,s,o){i=Math.round(i);const a=i*2+1,l=Lr(this.hitDetectionTransform_,i+.5,i+.5,1/n,-1/n,-r,-e[0],-e[1]),c=!this.hitDetectionContext_;c&&(this.hitDetectionContext_=Rt(a,a,void 0,{willReadFrequently:!0}));const u=this.hitDetectionContext_;u.canvas.width!==a||u.canvas.height!==a?(u.canvas.width=a,u.canvas.height=a):c||u.clearRect(0,0,a,a);let h;this.renderBuffer_!==void 0&&(h=vn(),Do(h,e),na(h,n*(this.renderBuffer_+i),h));const d=IP(i);let f;function g(E,P,k){const R=u.getImageData(0,0,a,a).data;for(let C=0,V=d.length;C<V;C++)if(R[d[C]]>0){if(!o||k==="none"||f!=="Image"&&f!=="Text"||o.includes(E)){const W=(d[C]-3)/4,A=i-W%a,q=i-(W/a|0),re=s(E,P,A*A+q*q);if(re)return re}u.clearRect(0,0,a,a);break}}const m=Object.keys(this.executorsByZIndex_).map(Number);m.sort(kr);let p,_,y,w,b;for(p=m.length-1;p>=0;--p){const E=m[p].toString();for(y=this.executorsByZIndex_[E],_=gs.length-1;_>=0;--_)if(f=gs[_],w=y[f],w!==void 0&&(b=w.executeHitDetection(u,l,r,g,h),b))return b}}getClipCoords(e){const n=this.maxExtent_;if(!n)return null;const r=n[0],i=n[1],s=n[2],o=n[3],a=[r,i,r,o,s,o,s,i];return si(a,0,8,2,e,a),a}isEmpty(){return Di(this.executorsByZIndex_)}execute(e,n,r,i,s,o,a){const l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(kr),o=o||gs;const c=gs.length;let u,h,d,f,g;for(a&&l.reverse(),u=0,h=l.length;u<h;++u){const m=l[u].toString();for(g=this.executorsByZIndex_[m],d=0,f=o.length;d<f;++d){const p=o[d],_=g[p];if(_!==void 0){const y=a===null?void 0:_.getZIndexContext(),w=y?y.getContext():e,b=this.maxExtent_&&p!=="Image"&&p!=="Text";if(b&&(w.save(),this.clip(w,r)),!y||p==="Text"||p==="Image"?_.execute(w,n,r,i,s,a):y.pushFunction(E=>_.execute(E,n,r,i,s,a)),b&&w.restore(),y){y.offset();const E=l[u]*c+d;this.deferredZIndexContexts_[E]||(this.deferredZIndexContexts_[E]=[]),this.deferredZIndexContexts_[E].push(y)}}}}this.renderedContext_=e}getDeferredZIndexContexts(){return this.deferredZIndexContexts_}getRenderedContext(){return this.renderedContext_}renderDeferred(){const e=this.deferredZIndexContexts_,n=Object.keys(e).map(Number).sort(kr);for(let r=0,i=n.length;r<i;++r)e[n[r]].forEach(s=>{s.draw(this.renderedContext_),s.clear()}),e[n[r]].length=0}}const xu={};function IP(t){if(xu[t]!==void 0)return xu[t];const e=t*2+1,n=t*t,r=new Array(n+1);for(let s=0;s<=t;++s)for(let o=0;o<=t;++o){const a=s*s+o*o;if(a>n)break;let l=r[a];l||(l=[],r[a]=l),l.push(((t+s)*e+(t+o))*4+3),s>0&&l.push(((t-s)*e+(t+o))*4+3),o>0&&(l.push(((t+s)*e+(t-o))*4+3),s>0&&l.push(((t-s)*e+(t-o))*4+3))}const i=[];for(let s=0,o=r.length;s<o;++s)r[s]&&i.push(...r[s]);return xu[t]=i,i}class LP extends Sy{constructor(e,n,r,i,s,o,a){super(),this.context_=e,this.pixelRatio_=n,this.extent_=r,this.transform_=i,this.transformRotation_=i?kc(Math.atan2(i[1],i[0]),10):0,this.viewRotation_=s,this.squaredTolerance_=o,this.userTransform_=a,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=Nn()}drawImages_(e,n,r,i){if(!this.image_)return;const s=si(e,n,r,i,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.tmpLocalTransform_,l=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=l*this.imageOpacity_);let c=this.imageRotation_;this.transformRotation_===0&&(c-=this.viewRotation_),this.imageRotateWithView_&&(c+=this.viewRotation_);for(let u=0,h=s.length;u<h;u+=2){const d=s[u]-this.imageAnchorX_,f=s[u+1]-this.imageAnchorY_;if(c!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){const g=d+this.imageAnchorX_,m=f+this.imageAnchorY_;Lr(a,g,m,1,1,c,-g,-m),o.save(),o.transform.apply(o,a),o.translate(g,m),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.restore()}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,d,f,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=l)}drawText_(e,n,r,i){if(!this.textState_||this.text_==="")return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);const s=si(e,n,r,i,this.transform_,this.pixelCoordinates_),o=this.context_;let a=this.textRotation_;for(this.transformRotation_===0&&(a-=this.viewRotation_),this.textRotateWithView_&&(a+=this.viewRotation_);n<r;n+=i){const l=s[n]+this.textOffsetX_,c=s[n+1]+this.textOffsetY_;a!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(o.save(),o.translate(l-this.textOffsetX_,c-this.textOffsetY_),o.rotate(a),o.translate(this.textOffsetX_,this.textOffsetY_),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.restore()):(this.textStrokeState_&&o.strokeText(this.text_,l,c),this.textFillState_&&o.fillText(this.text_,l,c))}}moveToLineTo_(e,n,r,i,s){const o=this.context_,a=si(e,n,r,i,this.transform_,this.pixelCoordinates_);o.moveTo(a[0],a[1]);let l=a.length;s&&(l-=2);for(let c=2;c<l;c+=2)o.lineTo(a[c],a[c+1]);return s&&o.closePath(),r}drawRings_(e,n,r,i){for(let s=0,o=r.length;s<o;++s)n=this.moveToLineTo_(e,n,r[s],i,!0);return n}drawCircle(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!rn(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const n=$2(e,this.transform_,this.pixelCoordinates_),r=n[2]-n[0],i=n[3]-n[1],s=Math.sqrt(r*r+i*i),o=this.context_;o.beginPath(),o.arc(n[0],n[1],s,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(e.getCenter(),0,2,2)}}setStyle(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())}setTransform(e){this.transform_=e}drawGeometry(e){switch(e.getType()){case"Point":this.drawPoint(e);break;case"LineString":this.drawLineString(e);break;case"Polygon":this.drawPolygon(e);break;case"MultiPoint":this.drawMultiPoint(e);break;case"MultiLineString":this.drawMultiLineString(e);break;case"MultiPolygon":this.drawMultiPolygon(e);break;case"GeometryCollection":this.drawGeometryCollection(e);break;case"Circle":this.drawCircle(e);break}}drawFeature(e,n){const r=n.getGeometryFunction()(e);r&&(this.setStyle(n),this.drawGeometry(r))}drawGeometryCollection(e){const n=e.getGeometriesArray();for(let r=0,i=n.length;r<i;++r)this.drawGeometry(n[r])}drawPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const n=e.getFlatCoordinates(),r=e.getStride();this.image_&&this.drawImages_(n,0,n.length,r),this.text_!==""&&this.drawText_(n,0,n.length,r)}drawMultiPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const n=e.getFlatCoordinates(),r=e.getStride();this.image_&&this.drawImages_(n,0,n.length,r),this.text_!==""&&this.drawText_(n,0,n.length,r)}drawLineString(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!rn(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const n=this.context_,r=e.getFlatCoordinates();n.beginPath(),this.moveToLineTo_(r,0,r.length,e.getStride(),!1),n.stroke()}if(this.text_!==""){const n=e.getFlatMidpoint();this.drawText_(n,0,2,2)}}}drawMultiLineString(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const n=e.getExtent();if(rn(this.extent_,n)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const r=this.context_,i=e.getFlatCoordinates();let s=0;const o=e.getEnds(),a=e.getStride();r.beginPath();for(let l=0,c=o.length;l<c;++l)s=this.moveToLineTo_(i,s,o[l],a,!1);r.stroke()}if(this.text_!==""){const r=e.getFlatMidpoints();this.drawText_(r,0,r.length,2)}}}drawPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!rn(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const n=this.context_;n.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride()),this.fillState_&&n.fill(),this.strokeState_&&n.stroke()}if(this.text_!==""){const n=e.getFlatInteriorPoint();this.drawText_(n,0,2,2)}}}drawMultiPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!rn(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const n=this.context_,r=e.getOrientedFlatCoordinates();let i=0;const s=e.getEndss(),o=e.getStride();n.beginPath();for(let a=0,l=s.length;a<l;++a){const c=s[a];i=this.drawRings_(r,i,c,o)}this.fillState_&&n.fill(),this.strokeState_&&n.stroke()}if(this.text_!==""){const n=e.getFlatInteriorPoints();this.drawText_(n,0,n.length,2)}}}setContextFillState_(e){const n=this.context_,r=this.contextFillState_;r?r.fillStyle!=e.fillStyle&&(r.fillStyle=e.fillStyle,n.fillStyle=e.fillStyle):(n.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})}setContextStrokeState_(e){const n=this.context_,r=this.contextStrokeState_;r?(r.lineCap!=e.lineCap&&(r.lineCap=e.lineCap,n.lineCap=e.lineCap),mi(r.lineDash,e.lineDash)||n.setLineDash(r.lineDash=e.lineDash),r.lineDashOffset!=e.lineDashOffset&&(r.lineDashOffset=e.lineDashOffset,n.lineDashOffset=e.lineDashOffset),r.lineJoin!=e.lineJoin&&(r.lineJoin=e.lineJoin,n.lineJoin=e.lineJoin),r.lineWidth!=e.lineWidth&&(r.lineWidth=e.lineWidth,n.lineWidth=e.lineWidth),r.miterLimit!=e.miterLimit&&(r.miterLimit=e.miterLimit,n.miterLimit=e.miterLimit),r.strokeStyle!=e.strokeStyle&&(r.strokeStyle=e.strokeStyle,n.strokeStyle=e.strokeStyle)):(n.lineCap=e.lineCap,n.setLineDash(e.lineDash),n.lineDashOffset=e.lineDashOffset,n.lineJoin=e.lineJoin,n.lineWidth=e.lineWidth,n.miterLimit=e.miterLimit,n.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})}setContextTextState_(e){const n=this.context_,r=this.contextTextState_,i=e.textAlign?e.textAlign:ua;r?(r.font!=e.font&&(r.font=e.font,n.font=e.font),r.textAlign!=i&&(r.textAlign=i,n.textAlign=i),r.textBaseline!=e.textBaseline&&(r.textBaseline=e.textBaseline,n.textBaseline=e.textBaseline)):(n.font=e.font,n.textAlign=i,n.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:i,textBaseline:e.textBaseline})}setFillStrokeStyle(e,n){if(!e)this.fillState_=null;else{const r=e.getColor();this.fillState_={fillStyle:er(r||nn)}}if(!n)this.strokeState_=null;else{const r=n.getColor(),i=n.getLineCap(),s=n.getLineDash(),o=n.getLineDashOffset(),a=n.getLineJoin(),l=n.getWidth(),c=n.getMiterLimit(),u=s||Pr;this.strokeState_={lineCap:i!==void 0?i:Ws,lineDash:this.pixelRatio_===1?u:u.map(h=>h*this.pixelRatio_),lineDashOffset:(o||Tr)*this.pixelRatio_,lineJoin:a!==void 0?a:Vs,lineWidth:(l!==void 0?l:ha)*this.pixelRatio_,miterLimit:c!==void 0?c:la,strokeStyle:er(r||ca)}}}setImageStyle(e){let n;if(!e||!(n=e.getSize())){this.image_=null;return}const r=e.getPixelRatio(this.pixelRatio_),i=e.getAnchor(),s=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=i[0]*r,this.imageAnchorY_=i[1]*r,this.imageHeight_=n[1]*r,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=s[0],this.imageOriginY_=s[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation();const o=e.getScaleArray();this.imageScale_=[o[0]*this.pixelRatio_/r,o[1]*this.pixelRatio_/r],this.imageWidth_=n[0]*r}setTextStyle(e){if(!e)this.text_="";else{const n=e.getFill();if(!n)this.textFillState_=null;else{const f=n.getColor();this.textFillState_={fillStyle:er(f||nn)}}const r=e.getStroke();if(!r)this.textStrokeState_=null;else{const f=r.getColor(),g=r.getLineCap(),m=r.getLineDash(),p=r.getLineDashOffset(),_=r.getLineJoin(),y=r.getWidth(),w=r.getMiterLimit();this.textStrokeState_={lineCap:g!==void 0?g:Ws,lineDash:m||Pr,lineDashOffset:p||Tr,lineJoin:_!==void 0?_:Vs,lineWidth:y!==void 0?y:ha,miterLimit:w!==void 0?w:la,strokeStyle:er(f||ca)}}const i=e.getFont(),s=e.getOffsetX(),o=e.getOffsetY(),a=e.getRotateWithView(),l=e.getRotation(),c=e.getScaleArray(),u=e.getText(),h=e.getTextAlign(),d=e.getTextBaseline();this.textState_={font:i!==void 0?i:J_,textAlign:h!==void 0?h:ua,textBaseline:d!==void 0?d:Wl},this.text_=u!==void 0?Array.isArray(u)?u.reduce((f,g,m)=>f+=m%2?" ":g,""):u:"",this.textOffsetX_=s!==void 0?this.pixelRatio_*s:0,this.textOffsetY_=o!==void 0?this.pixelRatio_*o:0,this.textRotateWithView_=a!==void 0?a:!1,this.textRotation_=l!==void 0?l:0,this.textScale_=[this.pixelRatio_*c[0],this.pixelRatio_*c[1]]}}}const Zn=.5;function OP(t,e,n,r,i,s,o,a,l){const c=i,u=t[0]*Zn,h=t[1]*Zn,d=Rt(u,h);d.imageSmoothingEnabled=!1;const f=d.canvas,g=new LP(d,Zn,i,null,o,a,null),m=n.length,p=Math.floor((256*256*256-1)/m),_={};for(let w=1;w<=m;++w){const b=n[w-1],E=b.getStyleFunction()||r;if(!E)continue;let P=E(b,s);if(!P)continue;Array.isArray(P)||(P=[P]);const R=(w*p).toString(16).padStart(7,"#00000");for(let C=0,V=P.length;C<V;++C){const W=P[C],A=W.getGeometryFunction()(b);if(!A||!rn(c,A.getExtent()))continue;const q=W.clone(),re=q.getFill();re&&re.setColor(R);const ce=q.getStroke();ce&&(ce.setColor(R),ce.setLineDash(null)),q.setText(void 0);const z=W.getImage();if(z){const me=z.getImageSize();if(!me)continue;const ye=Rt(me[0],me[1],void 0,{alpha:!1}),ge=ye.canvas;ye.fillStyle=R,ye.fillRect(0,0,ge.width,ge.height),q.setImage(new zc({img:ge,anchor:z.getAnchor(),anchorXUnits:"pixels",anchorYUnits:"pixels",offset:z.getOrigin(),opacity:1,size:z.getSize(),scale:z.getScale(),rotation:z.getRotation(),rotateWithView:z.getRotateWithView()}))}const ie=q.getZIndex()||0;let ee=_[ie];ee||(ee={},_[ie]=ee,ee.Polygon=[],ee.Circle=[],ee.LineString=[],ee.Point=[]);const Ie=A.getType();if(Ie==="GeometryCollection"){const me=A.getGeometriesArrayRecursive();for(let ye=0,ge=me.length;ye<ge;++ye){const Le=me[ye];ee[Le.getType().replace("Multi","")].push(Le,q)}}else ee[Ie.replace("Multi","")].push(A,q)}}const y=Object.keys(_).map(Number).sort(kr);for(let w=0,b=y.length;w<b;++w){const E=_[y[w]];for(const P in E){const k=E[P];for(let R=0,C=k.length;R<C;R+=2){g.setStyle(k[R+1]);for(let V=0,W=e.length;V<W;++V)g.setTransform(e[V]),g.drawGeometry(k[R])}}}return d.getImageData(0,0,f.width,f.height)}function FP(t,e,n){const r=[];if(n){const i=Math.floor(Math.round(t[0])*Zn),s=Math.floor(Math.round(t[1])*Zn),o=(mt(i,0,n.width-1)+mt(s,0,n.height-1)*n.width)*4,a=n.data[o],l=n.data[o+1],u=n.data[o+2]+256*(l+256*a),h=Math.floor((256*256*256-1)/e.length);u&&u%h===0&&r.push(e[u/h-1])}return r}const NP=.5,My={Point:UP,LineString:jP,Polygon:$P,MultiPoint:KP,MultiLineString:WP,MultiPolygon:VP,GeometryCollection:BP,Circle:GP};function DP(t,e){return parseInt(qe(t),10)-parseInt(qe(e),10)}function Em(t,e){const n=xy(t,e);return n*n}function xy(t,e){return NP*t/e}function GP(t,e,n,r,i){const s=n.getFill(),o=n.getStroke();if(s||o){const l=t.getBuilder(n.getZIndex(),"Circle");l.setFillStrokeStyle(s,o),l.drawCircle(e,r,i)}const a=n.getText();if(a&&a.getText()){const l=t.getBuilder(n.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,r)}}function Mm(t,e,n,r,i,s,o,a){const l=[],c=n.getImage();if(c){let d=!0;const f=c.getImageState();f==Ce.LOADED||f==Ce.ERROR?d=!1:f==Ce.IDLE&&c.load(),d&&l.push(c.ready())}const u=n.getFill();u&&u.loading()&&l.push(u.ready());const h=l.length>0;return h&&Promise.all(l).then(()=>i(null)),zP(t,e,n,r,s,o,a),h}function zP(t,e,n,r,i,s,o){const a=n.getGeometryFunction()(e);if(!a)return;const l=a.simplifyTransformed(r,i);if(n.getRenderer())Cy(t,l,n,e,o);else{const u=My[l.getType()];u(t,l,n,e,o,s)}}function Cy(t,e,n,r,i){if(e.getType()=="GeometryCollection"){const o=e.getGeometries();for(let a=0,l=o.length;a<l;++a)Cy(t,o[a],n,r,i);return}t.getBuilder(n.getZIndex(),"Default").drawCustom(e,r,n.getRenderer(),n.getHitDetectionRenderer(),i)}function BP(t,e,n,r,i,s){const o=e.getGeometriesArray();let a,l;for(a=0,l=o.length;a<l;++a){const c=My[o[a].getType()];c(t,o[a],n,r,i,s)}}function jP(t,e,n,r,i){const s=n.getStroke();if(s){const a=t.getBuilder(n.getZIndex(),"LineString");a.setFillStrokeStyle(null,s),a.drawLineString(e,r,i)}const o=n.getText();if(o&&o.getText()){const a=t.getBuilder(n.getZIndex(),"Text");a.setTextStyle(o),a.drawText(e,r,i)}}function WP(t,e,n,r,i){const s=n.getStroke();if(s){const a=t.getBuilder(n.getZIndex(),"LineString");a.setFillStrokeStyle(null,s),a.drawMultiLineString(e,r,i)}const o=n.getText();if(o&&o.getText()){const a=t.getBuilder(n.getZIndex(),"Text");a.setTextStyle(o),a.drawText(e,r,i)}}function VP(t,e,n,r,i){const s=n.getFill(),o=n.getStroke();if(o||s){const l=t.getBuilder(n.getZIndex(),"Polygon");l.setFillStrokeStyle(s,o),l.drawMultiPolygon(e,r,i)}const a=n.getText();if(a&&a.getText()){const l=t.getBuilder(n.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,r,i)}}function UP(t,e,n,r,i,s){const o=n.getImage(),a=n.getText(),l=a&&a.getText(),c=s&&o&&l?{}:void 0;if(o){if(o.getImageState()!=Ce.LOADED)return;const u=t.getBuilder(n.getZIndex(),"Image");u.setImageStyle(o,c),u.drawPoint(e,r,i)}if(l){const u=t.getBuilder(n.getZIndex(),"Text");u.setTextStyle(a,c),u.drawText(e,r,i)}}function KP(t,e,n,r,i,s){const o=n.getImage(),a=o&&o.getOpacity()!==0,l=n.getText(),c=l&&l.getText(),u=s&&a&&c?{}:void 0;if(a){if(o.getImageState()!=Ce.LOADED)return;const h=t.getBuilder(n.getZIndex(),"Image");h.setImageStyle(o,u),h.drawMultiPoint(e,r,i)}if(c){const h=t.getBuilder(n.getZIndex(),"Text");h.setTextStyle(l,u),h.drawText(e,r,i)}}function $P(t,e,n,r,i){const s=n.getFill(),o=n.getStroke();if(s||o){const l=t.getBuilder(n.getZIndex(),"Polygon");l.setFillStrokeStyle(s,o),l.drawPolygon(e,r,i)}const a=n.getText();if(a&&a.getText()){const l=t.getBuilder(n.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,r,i)}}class qP extends yy{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.clipped_=!1,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=vn(),this.wrappedRenderedExtent_=vn(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedPixelRatio_=1,this.renderedRenderOrder_=null,this.renderedFrameDeclutter_,this.replayGroup_=null,this.replayGroupChanged=!0,this.clipping=!0,this.targetContext_=null,this.opacity_=1}renderWorlds(e,n,r){const i=n.extent,s=n.viewState,o=s.center,a=s.resolution,l=s.projection,c=s.rotation,u=l.getExtent(),h=this.getLayer().getSource(),d=this.getLayer().getDeclutter(),f=n.pixelRatio,g=n.viewHints,m=!(g[Ot.ANIMATING]||g[Ot.INTERACTING]),p=this.context,_=Math.round(ze(i)/a*f),y=Math.round(zt(i)/a*f),w=h.getWrapX()&&l.canWrapX(),b=w?ze(u):null,E=w?Math.ceil((i[2]-u[2])/b)+1:1;let P=w?Math.floor((i[0]-u[0])/b):0;do{let k=this.getRenderTransform(o,a,0,f,_,y,P*b);n.declutter&&(k=k.slice(0)),e.execute(p,[p.canvas.width,p.canvas.height],k,c,m,r===void 0?gs:r?Ey:RP,r?d&&n.declutter[d]:void 0)}while(++P<E)}setDrawContext_(){this.opacity_!==1&&(this.targetContext_=this.context,this.context=Rt(this.context.canvas.width,this.context.canvas.height,mm))}resetDrawContext_(){if(this.opacity_!==1){const e=this.targetContext_.globalAlpha;this.targetContext_.globalAlpha=this.opacity_,this.targetContext_.drawImage(this.context.canvas,0,0),this.targetContext_.globalAlpha=e,Nc(this.context),mm.push(this.context.canvas),this.context=this.targetContext_,this.targetContext_=null}}renderDeclutter(e){!this.replayGroup_||!this.getLayer().getDeclutter()||this.renderWorlds(this.replayGroup_,e,!0)}renderDeferredInternal(e){this.replayGroup_&&(this.replayGroup_.renderDeferred(),this.clipped_&&this.context.restore(),this.resetDrawContext_())}renderFrame(e,n){const r=e.layerStatesArray[e.layerIndex];this.opacity_=r.opacity;const i=e.viewState;this.prepareContainer(e,n);const s=this.context,o=this.replayGroup_;let a=o&&!o.isEmpty();if(!a&&!(this.getLayer().hasListener(Cn.PRERENDER)||this.getLayer().hasListener(Cn.POSTRENDER)))return null;if(this.setDrawContext_(),this.preRender(s,e),i.projection,this.clipped_=!1,a&&r.extent&&this.clipping){const l=Ti(r.extent);a=rn(l,e.extent),this.clipped_=a&&!fs(l,e.extent),this.clipped_&&this.clipUnrotated(s,e,l)}return a&&this.renderWorlds(o,e,this.getLayer().getDeclutter()?!1:void 0),!e.declutter&&this.clipped_&&s.restore(),this.postRender(s,e),this.renderedRotation_!==i.rotation&&(this.renderedRotation_=i.rotation,this.hitDetectionImageData_=null),e.declutter||this.resetDrawContext_(),this.container}getFeatures(e){return new Promise(n=>{if(this.frameState&&!this.hitDetectionImageData_&&!this.animatingOrInteracting_){const r=this.frameState.size.slice(),i=this.renderedCenter_,s=this.renderedResolution_,o=this.renderedRotation_,a=this.renderedProjection_,l=this.wrappedRenderedExtent_,c=this.getLayer(),u=[],h=r[0]*Zn,d=r[1]*Zn;u.push(this.getRenderTransform(i,s,o,Zn,h,d,0).slice());const f=c.getSource(),g=a.getExtent();if(f.getWrapX()&&a.canWrapX()&&!fs(g,l)){let m=l[0];const p=ze(g);let _=0,y;for(;m<g[0];)--_,y=p*_,u.push(this.getRenderTransform(i,s,o,Zn,h,d,y).slice()),m+=p;for(_=0,m=l[2];m>g[2];)++_,y=p*_,u.push(this.getRenderTransform(i,s,o,Zn,h,d,y).slice()),m-=p}this.hitDetectionImageData_=OP(r,u,this.renderedFeatures_,c.getStyleFunction(),l,s,o,Em(s,this.renderedPixelRatio_))}n(FP(e,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(e,n,r,i,s){if(!this.replayGroup_)return;const o=n.viewState.resolution,a=n.viewState.rotation,l=this.getLayer(),c={},u=function(g,m,p){const _=qe(g),y=c[_];if(y){if(y!==!0&&p<y.distanceSq){if(p===0)return c[_]=!0,s.splice(s.lastIndexOf(y),1),i(g,l,m);y.geometry=m,y.distanceSq=p}}else{if(p===0)return c[_]=!0,i(g,l,m);s.push(c[_]={feature:g,layer:l,geometry:m,distanceSq:p,callback:i})}};let h;const d=[this.replayGroup_],f=this.getLayer().getDeclutter();return d.some(g=>h=g.forEachFeatureAtCoordinate(e,o,a,r,u,f&&n.declutter[f]?n.declutter[f].all().map(m=>m.value):null)),h}handleFontsChanged(){const e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}prepareFrame(e){const n=this.getLayer(),r=n.getSource();if(!r)return!1;const i=e.viewHints[Ot.ANIMATING],s=e.viewHints[Ot.INTERACTING],o=n.getUpdateWhileAnimating(),a=n.getUpdateWhileInteracting();if(this.ready&&!o&&i||!a&&s)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;const l=e.extent,c=e.viewState,u=c.projection,h=c.resolution,d=e.pixelRatio,f=n.getRevision(),g=n.getRenderBuffer();let m=n.getRenderOrder();m===void 0&&(m=DP);const p=c.center.slice(),_=na(l,g*h),y=_.slice(),w=[_.slice()],b=u.getExtent();if(r.getWrapX()&&u.canWrapX()&&!fs(b,e.extent)){const re=ze(b),ce=Math.max(ze(_)/2,re);_[0]=b[0]-ce,_[2]=b[2]+ce,b_(p,u);const z=v_(w[0],u);z[0]<b[0]&&z[2]<b[2]?w.push([z[0]+re,z[1],z[2]+re,z[3]]):z[0]>b[0]&&z[2]>b[2]&&w.push([z[0]-re,z[1],z[2]-re,z[3]])}if(this.ready&&this.renderedResolution_==h&&this.renderedRevision_==f&&this.renderedRenderOrder_==m&&this.renderedFrameDeclutter_===!!e.declutter&&fs(this.wrappedRenderedExtent_,_))return mi(this.renderedExtent_,y)||(this.hitDetectionImageData_=null,this.renderedExtent_=y),this.renderedCenter_=p,this.replayGroupChanged=!1,!0;this.replayGroup_=null;const E=new CP(xy(h,d),_,h,d);let P;for(let re=0,ce=w.length;re<ce;++re)r.loadFeatures(w[re],h,u);const k=Em(h,d);let R=!0;const C=(re,ce)=>{let z;const ie=re.getStyleFunction()||n.getStyleFunction();if(ie&&(z=ie(re,h)),z){const ee=this.renderFeature(re,k,z,E,P,this.getLayer().getDeclutter(),ce);R=R&&!ee}},V=P_(_),W=r.getFeaturesInExtent(V);m&&W.sort(m);for(let re=0,ce=W.length;re<ce;++re)C(W[re],re);this.renderedFeatures_=W,this.ready=R;const A=E.finish(),q=new AP(_,h,d,r.getOverlaps(),A,n.getRenderBuffer(),!!e.declutter);return this.renderedResolution_=h,this.renderedRevision_=f,this.renderedRenderOrder_=m,this.renderedFrameDeclutter_=!!e.declutter,this.renderedExtent_=y,this.wrappedRenderedExtent_=_,this.renderedCenter_=p,this.renderedProjection_=u,this.renderedPixelRatio_=d,this.replayGroup_=q,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(e,n,r,i,s,o,a){if(!r)return!1;let l=!1;if(Array.isArray(r))for(let c=0,u=r.length;c<u;++c)l=Mm(i,e,r[c],n,this.boundHandleStyleImageChange_,s,o,a)||l;else l=Mm(i,e,r,n,this.boundHandleStyleImageChange_,s,o,a);return l}}class HP extends cy{constructor(e){super(e)}createRenderer(){return new qP(this)}}class ZP{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let n=this.oldest_;for(;n;)e(n.value_,n.key_,this),n=n.newer}get(e,n){const r=this.entries_[e];return Ne(r!==void 0,"Tried to get a value for a key that does not exist in the cache"),r===this.newest_||(r===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(r.newer.older=r.older,r.older.newer=r.newer),r.newer=null,r.older=this.newest_,this.newest_.newer=r,this.newest_=r),r.value_}remove(e){const n=this.entries_[e];return Ne(n!==void 0,"Tried to get a value for a key that does not exist in the cache"),n===this.newest_?(this.newest_=n.older,this.newest_&&(this.newest_.newer=null)):n===this.oldest_?(this.oldest_=n.newer,this.oldest_&&(this.oldest_.older=null)):(n.newer.older=n.older,n.older.newer=n.newer),delete this.entries_[e],--this.count_,n.value_}getCount(){return this.count_}getKeys(){const e=new Array(this.count_);let n=0,r;for(r=this.newest_;r;r=r.older)e[n++]=r.key_;return e}getValues(){const e=new Array(this.count_);let n=0,r;for(r=this.newest_;r;r=r.older)e[n++]=r.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){var n;return(n=this.entries_[e])==null?void 0:n.value_}pop(){const e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,n){this.get(e),this.entries_[e].value_=n}set(e,n){Ne(!(e in this.entries_),"Tried to set a value for a key that is used already");const r={key_:e,newer:null,older:this.newest_,value_:n};this.newest_?this.newest_.newer=r:this.oldest_=r,this.newest_=r,this.entries_[e]=r,++this.count_}setSize(e){this.highWaterMark=e}}function xm(t,e,n,r){return r!==void 0?(r[0]=t,r[1]=e,r[2]=n,r):[t,e,n]}function Vc(t,e,n){return t+"/"+e+"/"+n}function ky(t){return Vc(t[0],t[1],t[2])}function XP(t){return t.split("/").map(Number)}function Py(t){return(t[1]<<t[0])+t[2]}function YP(t,e){const n=t[0],r=t[1],i=t[2];if(e.getMinZoom()>n||n>e.getMaxZoom())return!1;const s=e.getFullTileRange(n);return s?s.containsXY(r,i):!0}class Ty extends ZP{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(e){for(;this.canExpireCache()&&!(this.peekLast().getKey()in e);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const e=this.peekFirstKey(),r=XP(e)[0];this.forEach(i=>{i.tileCoord[0]!==r&&(this.remove(ky(i.tileCoord)),i.release())})}}const Cu={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};class Ry extends lr{constructor(e){super(),this.projection=Ae(e.projection),this.attributions_=Cm(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;const n=this;this.viewPromise_=new Promise(function(r,i){n.viewResolver=r,n.viewRejector=i})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=Cm(e),this.changed()}setState(e){this.state_=e,this.changed()}}function Cm(t){return t?Array.isArray(t)?function(e){return t}:typeof t=="function"?t:function(e){return[t]}:null}const is=[0,0,0],Vr=5;class Ay{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,Ne(s2(this.resolutions_,(i,s)=>s-i),"`resolutions` must be sorted in descending order");let n;if(!e.origins){for(let i=0,s=this.resolutions_.length-1;i<s;++i)if(!n)n=this.resolutions_[i]/this.resolutions_[i+1];else if(this.resolutions_[i]/this.resolutions_[i+1]!==n){n=void 0;break}}this.zoomFactor_=n,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,Ne(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const r=e.extent;r!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=$i(r)),Ne(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,Ne(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:_d,Ne(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=r!==void 0?r:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map((i,s)=>{const o=new Xd(Math.min(0,i[0]),Math.max(i[0]-1,-1),Math.min(0,i[1]),Math.max(i[1]-1,-1));if(r){const a=this.getTileRangeForExtentAndZ(r,s);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):r&&this.calculateTileRanges_(r)}forEachTileCoord(e,n,r){const i=this.getTileRangeForExtentAndZ(e,n);for(let s=i.minX,o=i.maxX;s<=o;++s)for(let a=i.minY,l=i.maxY;a<=l;++a)r([n,s,a])}forEachTileCoordParentTileRange(e,n,r,i){let s,o,a,l=null,c=e[0]-1;for(this.zoomFactor_===2?(o=e[1],a=e[2]):l=this.getTileCoordExtent(e,i);c>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),s=ns(o,o,a,a,r)):s=this.getTileRangeForExtentAndZ(l,c,r),n(c,s))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,n,r){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){const s=e[1]*2,o=e[2]*2;return ns(s,s+1,o,o+1,n)}const i=this.getTileCoordExtent(e,r||this.tmpExtent_);return this.getTileRangeForExtentAndZ(i,e[0]+1,n)}return null}getTileRangeForTileCoordAndZ(e,n,r){if(n>this.maxZoom||n<this.minZoom)return null;const i=e[0],s=e[1],o=e[2];if(n===i)return ns(s,o,s,o,r);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,n-i),c=Math.floor(s*l),u=Math.floor(o*l);if(n<i)return ns(c,c,u,u,r);const h=Math.floor(l*(s+1))-1,d=Math.floor(l*(o+1))-1;return ns(c,h,u,d,r)}const a=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,n,r)}getTileRangeForExtentAndZ(e,n,r){this.getTileCoordForXYAndZ_(e[0],e[3],n,!1,is);const i=is[1],s=is[2];this.getTileCoordForXYAndZ_(e[2],e[1],n,!0,is);const o=is[1],a=is[2];return ns(i,o,s,a,r)}getTileCoordCenter(e){const n=this.getOrigin(e[0]),r=this.getResolution(e[0]),i=yn(this.getTileSize(e[0]),this.tmpSize_);return[n[0]+(e[1]+.5)*i[0]*r,n[1]-(e[2]+.5)*i[1]*r]}getTileCoordExtent(e,n){const r=this.getOrigin(e[0]),i=this.getResolution(e[0]),s=yn(this.getTileSize(e[0]),this.tmpSize_),o=r[0]+e[1]*s[0]*i,a=r[1]-(e[2]+1)*s[1]*i,l=o+s[0]*i,c=a+s[1]*i;return jn(o,a,l,c,n)}getTileCoordForCoordAndResolution(e,n,r){return this.getTileCoordForXYAndResolution_(e[0],e[1],n,!1,r)}getTileCoordForXYAndResolution_(e,n,r,i,s){const o=this.getZForResolution(r),a=r/this.getResolution(o),l=this.getOrigin(o),c=yn(this.getTileSize(o),this.tmpSize_);let u=a*(e-l[0])/r/c[0],h=a*(l[1]-n)/r/c[1];return i?(u=Ya(u,Vr)-1,h=Ya(h,Vr)-1):(u=Xa(u,Vr),h=Xa(h,Vr)),xm(o,u,h,s)}getTileCoordForXYAndZ_(e,n,r,i,s){const o=this.getOrigin(r),a=this.getResolution(r),l=yn(this.getTileSize(r),this.tmpSize_);let c=(e-o[0])/a/l[0],u=(o[1]-n)/a/l[1];return i?(c=Ya(c,Vr)-1,u=Ya(u,Vr)-1):(c=Xa(c,Vr),u=Xa(u,Vr)),xm(r,c,u,s)}getTileCoordForCoordAndZ(e,n,r){return this.getTileCoordForXYAndZ_(e[0],e[1],n,!1,r)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,n){const r=pd(this.resolutions_,e,n||0);return mt(r,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,n){return z_(n,0,n.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){const n=this.resolutions_.length,r=new Array(n);for(let i=this.minZoom;i<n;++i)r[i]=this.getTileRangeForExtentAndZ(e,i);this.fullTileRanges_=r}}function Iy(t){let e=t.getDefaultTileGrid();return e||(e=tT(t),t.setDefaultTileGrid(e)),e}function JP(t,e,n){const r=e[0],i=t.getTileCoordCenter(e),s=Yd(n);if(!zs(s,i)){const o=ze(s),a=Math.ceil((s[0]-i[0])/o);return i[0]+=o*a,t.getTileCoordForCoordAndZ(i,r)}return e}function QP(t,e,n,r){r=r!==void 0?r:"top-left";const i=Ly(t,e,n);return new Ay({extent:t,origin:b2(t,r),resolutions:i,tileSize:n})}function eT(t){const e=t||{},n=e.extent||Ae("EPSG:3857").getExtent(),r={extent:n,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:Ly(n,e.maxZoom,e.tileSize,e.maxResolution)};return new Ay(r)}function Ly(t,e,n,r){e=e!==void 0?e:h2,n=yn(n!==void 0?n:_d);const i=zt(t),s=ze(t);r=r>0?r:Math.max(s/n[0],i/n[1]);const o=e+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=r/Math.pow(2,l);return a}function tT(t,e,n,r){const i=Yd(t);return QP(i,e,n,r)}function Yd(t){t=Ae(t);let e=t.getExtent();if(!e){const n=180*yd.degrees/t.getMetersPerUnit();e=jn(-n,-n,n,n)}return e}class nT extends Ry{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.opaque_=e.opaque!==void 0?e.opaque:!1,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;const n=[256,256];this.tileGrid&&yn(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),n),this.tileCache=new Ty(e.cacheSize||0),this.tmpSize=[0,0],this.key_=e.key||"",this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(e,n){const r=this.getTileCacheForProjection(e);r&&r.expireCache(n)}forEachLoadedTile(e,n,r,i){const s=this.getTileCacheForProjection(e);if(!s)return!1;let o=!0,a,l,c;for(let u=r.minX;u<=r.maxX;++u)for(let h=r.minY;h<=r.maxY;++h)l=Vc(n,u,h),c=!1,s.containsKey(l)&&(a=s.get(l),c=a.getState()===de.LOADED,c&&(c=i(a)!==!1)),c||(o=!1);return o}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getOpaque(e){return this.opaque_}getResolutions(e){const n=e?this.getTileGridForProjection(e):this.tileGrid;return n?n.getResolutions():null}getTile(e,n,r,i,s){return pe()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:Iy(e)}getTileCacheForProjection(e){const n=this.getProjection();return Ne(n===null||Yr(n,e),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,n,r){const i=this.getTileGridForProjection(r),s=this.getTilePixelRatio(n),o=yn(i.getTileSize(e),this.tmpSize);return s==1?o:pC(o,s,this.tmpSize)}getTileCoordForTileUrlFunction(e,n){n=n!==void 0?n:this.getProjection();const r=this.getTileGridForProjection(n);return this.getWrapX()&&n.isGlobal()&&(e=JP(r,e,n)),YP(e,r)?e:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(e,n){const r=this.getTileCacheForProjection(n);e>r.highWaterMark&&(r.highWaterMark=e)}useTile(e,n,r,i){}}class rT extends Fr{constructor(e,n){super(e),this.tile=n}}function iT(t,e){const n=/\{z\}/g,r=/\{x\}/g,i=/\{y\}/g,s=/\{-y\}/g;return function(o,a,l){if(o)return t.replace(n,o[0].toString()).replace(r,o[1].toString()).replace(i,o[2].toString()).replace(s,function(){const c=o[0],u=e.getFullTileRange(c);if(!u)throw new Error("The {-y} placeholder requires a tile grid with extent");return(u.getHeight()-o[2]-1).toString()})}}function sT(t,e){const n=t.length,r=new Array(n);for(let i=0;i<n;++i)r[i]=iT(t[i],e);return oT(r)}function oT(t){return t.length===1?t[0]:function(e,n,r){if(!e)return;const i=Py(e),s=Fi(i,t.length);return t[s](e,n,r)}}function aT(t){const e=[];let n=/\{([a-z])-([a-z])\}/.exec(t);if(n){const r=n[1].charCodeAt(0),i=n[2].charCodeAt(0);let s;for(s=r;s<=i;++s)e.push(t.replace(n[0],String.fromCharCode(s)));return e}if(n=/\{(\d+)-(\d+)\}/.exec(t),n){const r=parseInt(n[2],10);for(let i=parseInt(n[1],10);i<=r;i++)e.push(t.replace(n[0],i.toString()));return e}return e.push(t),e}class Jd extends nT{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===Jd.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const n=e.target,r=qe(n),i=n.getState();let s;i==de.LOADING?(this.tileLoadingKeys_[r]=!0,s=Cu.TILELOADSTART):r in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[r],s=i==de.ERROR?Cu.TILELOADERROR:i==de.LOADED?Cu.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new rT(s,n))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,n){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof n<"u"?this.setKey(n):this.changed()}setUrl(e){const n=aT(e);this.urls=n,this.setUrls(n)}setUrls(e){this.urls=e;const n=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(sT(e,this.tileGrid),n):this.setKey(n)}tileUrlFunction(e,n,r){}useTile(e,n,r){const i=Vc(e,n,r);this.tileCache.containsKey(i)&&this.tileCache.get(i)}}class Oy extends Jd{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:lT,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:wy,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,n){const r=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==r?n:{});for(const i in this.tileCacheForProjection){const s=this.tileCacheForProjection[i];s.expireCache(s==r?n:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!Yr(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!Yr(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const n=this.getProjection();if(this.tileGrid&&(!n||Yr(n,e)))return this.tileGrid;const r=qe(e);return r in this.tileGridForProjection||(this.tileGridForProjection[r]=Iy(e)),this.tileGridForProjection[r]}getTileCacheForProjection(e){const n=this.getProjection();if(!n||Yr(n,e))return this.tileCache;const r=qe(e);return r in this.tileCacheForProjection||(this.tileCacheForProjection[r]=new Ty(this.tileCache.highWaterMark)),this.tileCacheForProjection[r]}createTile_(e,n,r,i,s,o){const a=[e,n,r],l=this.getTileCoordForTileUrlFunction(a,s),c=l?this.tileUrlFunction(l,i,s):void 0,u=new this.tileClass(a,c!==void 0?de.IDLE:de.EMPTY,c!==void 0?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return u.key=o,u.addEventListener(Se.CHANGE,this.handleTileChange.bind(this)),u}getTile(e,n,r,i,s){const o=this.getProjection();if(!o||!s||Yr(o,s))return this.getTileInternal(e,n,r,i,o||s);const a=this.getTileCacheForProjection(s),l=[e,n,r];let c;const u=ky(l);a.containsKey(u)&&(c=a.get(u));const h=this.getKey();if(c&&c.key==h)return c;const d=this.getTileGridForProjection(o),f=this.getTileGridForProjection(s),g=this.getTileCoordForTileUrlFunction(l,s),m=new Sh(o,d,s,f,l,g,this.getTilePixelRatio(i),this.getGutter(),(p,_,y,w)=>this.getTileInternal(p,_,y,w,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return m.key=h,c?(m.interimTile=c,m.refreshInterimChain(),a.replace(u,m)):a.set(u,m),m}getTileInternal(e,n,r,i,s){let o=null;const a=Vc(e,n,r),l=this.getKey();if(!this.tileCache.containsKey(a))o=this.createTile_(e,n,r,i,s,l),this.tileCache.set(a,o);else if(o=this.tileCache.get(a),o.key!=l){const c=o;o=this.createTile_(e,n,r,i,s,l),c.getState()==de.IDLE?o.interimTile=c.interimTile:o.interimTile=c,o.refreshInterimChain(),this.tileCache.replace(a,o)}return o}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const n in this.tileCacheForProjection)this.tileCacheForProjection[n].clear();this.changed()}}setTileGridForProjection(e,n){const r=Ae(e);if(r){const i=qe(r);i in this.tileGridForProjection||(this.tileGridForProjection[i]=n)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function lT(t,e){t.getImage().src=e}class cT extends Oy{constructor(e){e=e||{};const n=e.projection!==void 0?e.projection:"EPSG:3857",r=e.tileGrid!==void 0?e.tileGrid:eT({extent:Yd(n),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:n,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}const uT='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';class hT extends cT{constructor(e){e=e||{};let n;e.attributions!==void 0?n=e.attributions:n=[uT];const r=e.crossOrigin!==void 0?e.crossOrigin:"anonymous",i=e.url!==void 0?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:n,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:r,interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:19,opaque:e.opaque!==void 0?e.opaque:!0,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:i,wrapX:e.wrapX,zDirection:e.zDirection})}}const km=4;function Fy(t,e){const n=[];Object.keys(e).forEach(function(i){e[i]!==null&&e[i]!==void 0&&n.push(i+"="+encodeURIComponent(e[i]))});const r=n.join("&");return t=t.replace(/[?&]$/,""),t+=t.includes("?")?"&":"?",t+r}const bh="1.3.0";function dT(t,e,n,r,i){i.WIDTH=n[0],i.HEIGHT=n[1];const s=r.getAxisOrientation();let o;const a=S_(i.VERSION,"1.3")>=0;return i[a?"CRS":"SRS"]=r.getCode(),a&&s.substr(0,2)=="ne"?o=[e[1],e[0],e[3],e[2]]:o=e,i.BBOX=o.join(","),Fy(t,i)}function fT(t,e,n,r,i,s,o){s=Object.assign({REQUEST:"GetMap"},s);const a=e/n,l=[Lg(ze(t)/a,km),Lg(zt(t)/a,km)];if(n!=1)switch(o){case"geoserver":const u=90*n+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+u:s.FORMAT_OPTIONS="dpi:"+u;break;case"mapserver":s.MAP_RESOLUTION=90*n;break;case"carmentaserver":case"qgis":s.DPI=90*n;break;default:throw new Error("Unknown `serverType` configured")}return dT(i,t,l,r,s)}function Pm(t,e){return Object.assign({REQUEST:e,SERVICE:"WMS",VERSION:bh,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},t)}class gT extends Oy{constructor(e){e=e||{};const n=Object.assign({},e.params),r="TRANSPARENT"in n?n.TRANSPARENT:!0;super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:!r,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0,this.params_=n,this.v13_=!0,this.serverType_=e.serverType,this.hidpi_=e.hidpi!==void 0?e.hidpi:!0,this.tmpExtent_=vn(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(e,n,r,i){const s=Ae(r),o=this.getProjection()||s;let a=this.getTileGrid();a||(a=this.getTileGridForProjection(o));const l=Jr(e,s,o),c=wh(o,s,e,n),u=a.getZForResolution(c,this.zDirection),h=a.getResolution(u),d=a.getTileCoordForCoordAndZ(l,u);if(a.getResolutions().length<=d[0])return;let f=a.getTileCoordExtent(d,this.tmpExtent_);const g=this.gutter_;g!==0&&(f=na(f,h*g,f));const m={QUERY_LAYERS:this.params_.LAYERS};Object.assign(m,Pm(this.params_,"GetFeatureInfo"),i);const p=Math.floor((l[0]-f[0])/h),_=Math.floor((f[3]-l[1])/h);return m[this.v13_?"I":"X"]=p,m[this.v13_?"J":"Y"]=_,this.getRequestUrl_(d,f,1,o||s,m)}getLegendUrl(e,n){if(this.urls[0]===void 0)return;const r={SERVICE:"WMS",VERSION:bh,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(n===void 0||n.LAYER===void 0){const i=this.params_.LAYERS;if(!(!Array.isArray(i)||i.length===1))return;r.LAYER=i}if(e!==void 0){const i=this.getProjection()?this.getProjection().getMetersPerUnit():1,s=28e-5;r.SCALE=e*i/s}return Object.assign(r,n),Fy(this.urls[0],r)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(e,n,r,i,s){const o=this.urls;if(!o)return;let a;if(o.length==1)a=o[0];else{const l=Fi(Py(e),o.length);a=o[l]}return fT(n,(this.tileGrid||this.getTileGridForProjection(i)).getResolution(e[0]),r,i,a,s,this.serverType_)}getTilePixelRatio(e){return!this.hidpi_||this.serverType_===void 0?1:e}getKeyForParams_(){let e=0;const n=[];for(const r in this.params_)n[e++]=r+"-"+this.params_[r];return n.join("/")}updateParams(e){Object.assign(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){const e=this.params_.VERSION||bh;this.v13_=S_(e,"1.3")>=0}tileUrlFunction(e,n,r){let i=this.getTileGrid();if(i||(i=this.getTileGridForProjection(r)),i.getResolutions().length<=e[0])return;n!=1&&(!this.hidpi_||this.serverType_===void 0)&&(n=1);const s=i.getResolution(e[0]);let o=i.getTileCoordExtent(e,this.tmpExtent_);const a=this.gutter_;a!==0&&(o=na(o,s*a,o));const l=Object.assign({},Pm(this.params_,"GetMap"));return this.getRequestUrl_(e,o,n,r,l)}}class Tm{constructor(e){this.rbush_=new V_(e),this.items_={}}insert(e,n){const r={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:n};this.rbush_.insert(r),this.items_[qe(n)]=r}load(e,n){const r=new Array(n.length);for(let i=0,s=n.length;i<s;i++){const o=e[i],a=n[i],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};r[i]=l,this.items_[qe(a)]=l}this.rbush_.load(r)}remove(e){const n=qe(e),r=this.items_[n];return delete this.items_[n],this.rbush_.remove(r)!==null}update(e,n){const r=this.items_[qe(n)],i=[r.minX,r.minY,r.maxX,r.maxY];ra(i,e)||(this.remove(n),this.insert(e,n))}getAll(){return this.rbush_.all().map(function(n){return n.value})}getInExtent(e){const n={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this.rbush_.search(n).map(function(i){return i.value})}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,n){return this.forEach_(this.getInExtent(e),n)}forEach_(e,n){let r;for(let i=0,s=e.length;i<s;i++)if(r=n(e[i]),r)return r;return r}isEmpty(){return Di(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){const n=this.rbush_.toJSON();return jn(n.minX,n.minY,n.maxX,n.maxY,e)}concat(e){this.rbush_.load(e.rbush_.all());for(const n in e.items_)this.items_[n]=e.items_[n]}}class La extends lr{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if(typeof e.getSimplifiedGeometry=="function"){const n=e;this.setGeometry(n)}else{const n=e;this.setProperties(n)}}clone(){const e=new La(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const n=this.getGeometry();n&&e.setGeometry(n.clone());const r=this.getStyle();return r&&e.setStyle(r),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&(st(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=Fe(e,Se.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?mT(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}function mT(t){if(typeof t=="function")return t;let e;return Array.isArray(t)?e=t:(Ne(typeof t.getZIndex=="function","Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),e=[t]),function(){return e}}class Hl extends Td{constructor(e){super(),this.geometries_=e,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(st),this.changeEventsKeys_.length=0}listenGeometriesChange_(){const e=this.geometries_;for(let n=0,r=e.length;n<r;++n)this.changeEventsKeys_.push(Fe(e[n],Se.CHANGE,this.changed,this))}clone(){const e=new Hl(ku(this.geometries_));return e.applyProperties(this),e}closestPointXY(e,n,r,i){if(i<Ki(this.getExtent(),e,n))return i;const s=this.geometries_;for(let o=0,a=s.length;o<a;++o)i=s[o].closestPointXY(e,n,r,i);return i}containsXY(e,n){const r=this.geometries_;for(let i=0,s=r.length;i<s;++i)if(r[i].containsXY(e,n))return!0;return!1}computeExtent(e){Ys(e);const n=this.geometries_;for(let r=0,i=n.length;r<i;++r)p_(e,n[r].getExtent());return e}getGeometries(){return ku(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].getType()===this.getType()?e=e.concat(n[r].getGeometriesArrayRecursive()):e.push(n[r]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const n=[],r=this.geometries_;let i=!1;for(let s=0,o=r.length;s<o;++s){const a=r[s],l=a.getSimplifiedGeometry(e);n.push(l),l!==a&&(i=!0)}return i?new Hl(n):(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getType(){return"GeometryCollection"}intersectsExtent(e){const n=this.geometries_;for(let r=0,i=n.length;r<i;++r)if(n[r].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,n){const r=this.geometries_;for(let i=0,s=r.length;i<s;++i)r[i].rotate(e,n);this.changed()}scale(e,n,r){r||(r=ui(this.getExtent()));const i=this.geometries_;for(let s=0,o=i.length;s<o;++s)i[s].scale(e,n,r);this.changed()}setGeometries(e){this.setGeometriesArray(ku(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].applyTransform(e);this.changed()}translate(e,n){const r=this.geometries_;for(let i=0,s=r.length;i<s;++i)r[i].translate(e,n);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function ku(t){return t.map(e=>e.clone())}function Zl(t,e,n,r,i,s,o){let a,l;const c=(n-e)/r;if(c===1)a=e;else if(c===2)a=e,l=i;else if(c!==0){let u=t[e],h=t[e+1],d=0;const f=[0];for(let p=e+r;p<n;p+=r){const _=t[p],y=t[p+1];d+=Math.sqrt((_-u)*(_-u)+(y-h)*(y-h)),f.push(d),u=_,h=y}const g=i*d,m=r2(f,g);m<0?(l=(g-f[-m-2])/(f[-m-1]-f[-m-2]),a=e+(-m-2)*r):a=e+m*r}o=o>1?o:2,s=s||new Array(o);for(let u=0;u<o;++u)s[u]=a===void 0?NaN:l===void 0?t[a+u]:mn(t[a+u],t[a+r+u],l);return s}function Eh(t,e,n,r,i,s){if(n==e)return null;let o;if(i<t[e+r-1])return s?(o=t.slice(e,e+r),o[r-1]=i,o):null;if(t[n-1]<i)return s?(o=t.slice(n-r,n),o[r-1]=i,o):null;if(i==t[e+r-1])return t.slice(e,e+r);let a=e/r,l=n/r;for(;a<l;){const d=a+l>>1;i<t[(d+1)*r-1]?l=d:a=d+1}const c=t[a*r-1];if(i==c)return t.slice((a-1)*r,(a-1)*r+r);const u=t[(a+1)*r-1],h=(i-c)/(u-c);o=[];for(let d=0;d<r-1;++d)o.push(mn(t[(a-1)*r+d],t[a*r+d],h));return o.push(i),o}function pT(t,e,n,r,i,s,o){if(o)return Eh(t,e,n[n.length-1],r,i,s);let a;if(i<t[r-1])return s?(a=t.slice(0,r),a[r-1]=i,a):null;if(t[t.length-1]<i)return s?(a=t.slice(t.length-r),a[r-1]=i,a):null;for(let l=0,c=n.length;l<c;++l){const u=n[l];if(e!=u){if(i<t[e+r-1])return null;if(i<=t[u-1])return Eh(t,e,u,r,i,!1);e=u}}return null}class di extends qi{constructor(e,n){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,n!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(n,e):this.setCoordinates(e,n)}appendCoordinate(e){Yt(this.flatCoordinates,e),this.changed()}clone(){const e=new di(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,n,r,i){return i<Ki(this.getExtent(),e,n)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Rd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Id(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,e,n,r,i))}forEachSegment(e){return G_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinateAtM(e,n){return this.layout!="XYM"&&this.layout!="XYZM"?null:(n=n!==void 0?n:!1,Eh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n))}getCoordinates(){return Qr(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(e,n){return Zl(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n,this.stride)}getLength(){return by(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(e){const n=[];return n.length=Ic(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n,0),new di(n,"XY")}getType(){return"LineString"}intersectsExtent(e){return Lc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ac(this.flatCoordinates,0,e,this.stride),this.changed()}}class Ks extends qi{constructor(e,n,r){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,n);else if(n!==void 0&&r)this.setFlatCoordinates(n,e),this.ends_=r;else{const i=e,s=[],o=[];for(let l=0,c=i.length;l<c;++l){const u=i[l];Yt(s,u.getFlatCoordinates()),o.push(s.length)}const a=i.length===0?this.getLayout():i[0].getLayout();this.setFlatCoordinates(a,s),this.ends_=o}}appendLineString(e){Yt(this.flatCoordinates,e.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new Ks(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,n,r,i){return i<Ki(this.getExtent(),e,n)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ad(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ld(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,e,n,r,i))}getCoordinateAtM(e,n,r){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(n=n!==void 0?n:!1,r=r!==void 0?r:!1,pT(this.flatCoordinates,0,this.ends_,this.stride,e,n,r))}getCoordinates(){return ia(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(e){return e<0||this.ends_.length<=e?null:new di(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLineStrings(){const e=this.flatCoordinates,n=this.ends_,r=this.layout,i=[];let s=0;for(let o=0,a=n.length;o<a;++o){const l=n[o],c=new di(e.slice(s,l),r);i.push(c),s=l}return i}getFlatMidpoints(){const e=[],n=this.flatCoordinates;let r=0;const i=this.ends_,s=this.stride;for(let o=0,a=i.length;o<a;++o){const l=i[o],c=Zl(n,r,l,s,.5);Yt(e,c),r=l}return e}getSimplifiedGeometryInternal(e){const n=[],r=[];return n.length=L_(this.flatCoordinates,0,this.ends_,this.stride,e,n,0,r),new Ks(n,"XY",r)}getType(){return"MultiLineString"}intersectsExtent(e){return tC(this.flatCoordinates,0,this.ends_,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const r=Pa(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=r.length===0?0:r[r.length-1],this.changed()}}class Oa extends qi{constructor(e,n){super(),n&&!Array.isArray(e[0])?this.setFlatCoordinates(n,e):this.setCoordinates(e,n)}appendPoint(e){Yt(this.flatCoordinates,e.getFlatCoordinates()),this.changed()}clone(){const e=new Oa(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,n,r,i){if(i<Ki(this.getExtent(),e,n))return i;const s=this.flatCoordinates,o=this.stride;for(let a=0,l=s.length;a<l;a+=o){const c=Oi(e,n,s[a],s[a+1]);if(c<i){i=c;for(let u=0;u<o;++u)r[u]=s[a+u];r.length=o}}return i}getCoordinates(){return Qr(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(e){const n=this.flatCoordinates.length/this.stride;return e<0||n<=e?null:new sa(this.flatCoordinates.slice(e*this.stride,(e+1)*this.stride),this.layout)}getPoints(){const e=this.flatCoordinates,n=this.layout,r=this.stride,i=[];for(let s=0,o=e.length;s<o;s+=r){const a=new sa(e.slice(s,s+r),n);i.push(a)}return i}getType(){return"MultiPoint"}intersectsExtent(e){const n=this.flatCoordinates,r=this.stride;for(let i=0,s=n.length;i<s;i+=r){const o=n[i],a=n[i+1];if(wd(e,o,a))return!0}return!1}setCoordinates(e,n){this.setLayout(n,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ac(this.flatCoordinates,0,e,this.stride),this.changed()}}function Ny(t,e,n,r){const i=[];let s=vn();for(let o=0,a=n.length;o<a;++o){const l=n[o];s=Sd(t,e,l[0],r),i.push((s[0]+s[2])/2,(s[1]+s[3])/2),e=l[l.length-1]}return i}class $s extends qi{constructor(e,n,r){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!r&&!Array.isArray(e[0])){const i=e,s=[],o=[];for(let a=0,l=i.length;a<l;++a){const c=i[a],u=s.length,h=c.getEnds();for(let d=0,f=h.length;d<f;++d)h[d]+=u;Yt(s,c.getFlatCoordinates()),o.push(h)}n=i.length===0?this.getLayout():i[0].getLayout(),e=s,r=o}n!==void 0&&r?(this.setFlatCoordinates(n,e),this.endss_=r):this.setCoordinates(e,n)}appendPolygon(e){let n;if(!this.flatCoordinates)this.flatCoordinates=e.getFlatCoordinates().slice(),n=e.getEnds().slice(),this.endss_.push();else{const r=this.flatCoordinates.length;Yt(this.flatCoordinates,e.getFlatCoordinates()),n=e.getEnds().slice();for(let i=0,s=n.length;i<s;++i)n[i]+=r}this.endss_.push(n),this.changed()}clone(){const e=this.endss_.length,n=new Array(e);for(let i=0;i<e;++i)n[i]=this.endss_[i].slice();const r=new $s(this.flatCoordinates.slice(),this.layout,n);return r.applyProperties(this),r}closestPointXY(e,n,r,i){return i<Ki(this.getExtent(),e,n)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(q2(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),H2(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,e,n,r,i))}containsXY(e,n){return eC(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e,n)}getArea(){return J2(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(e){let n;return e!==void 0?(n=this.getOrientedFlatCoordinates().slice(),hh(n,0,this.endss_,this.stride,e)):n=this.flatCoordinates,uh(n,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const e=Ny(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=D_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new Oa(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;j_(e,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=hh(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const n=[],r=[];return n.length=Y2(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(e),n,0,r),new $s(n,"XY",r)}getPolygon(e){if(e<0||this.endss_.length<=e)return null;let n;if(e===0)n=0;else{const s=this.endss_[e-1];n=s[s.length-1]}const r=this.endss_[e].slice(),i=r[r.length-1];if(n!==0)for(let s=0,o=r.length;s<o;++s)r[s]-=n;return new or(this.flatCoordinates.slice(n,i),this.layout,r)}getPolygons(){const e=this.layout,n=this.flatCoordinates,r=this.endss_,i=[];let s=0;for(let o=0,a=r.length;o<a;++o){const l=r[o].slice(),c=l[l.length-1];if(s!==0)for(let h=0,d=l.length;h<d;++h)l[h]-=s;const u=new or(n.slice(s,c),e,l);i.push(u),s=c}return i}getType(){return"MultiPolygon"}intersectsExtent(e){return nC(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,3),this.flatCoordinates||(this.flatCoordinates=[]);const r=I_(this.flatCoordinates,0,e,this.stride,this.endss_);if(r.length===0)this.flatCoordinates.length=0;else{const i=r[r.length-1];this.flatCoordinates.length=i.length===0?0:i[i.length-1]}this.changed()}}const Rm=Nn();class en{constructor(e,n,r,i,s,o){this.styleFunction,this.extent_,this.id_=o,this.type_=e,this.flatCoordinates_=n,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=r||null,this.properties_=s,this.squaredTolerance_,this.stride_=i,this.simplifiedGeometry_}get(e){return this.properties_[e]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?m_(this.flatCoordinates_):Sd(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){const e=ui(this.getExtent());this.flatInteriorPoints_=Nd(this.flatCoordinates_,0,this.ends_,2,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){const e=iC(this.flatCoordinates_,this.ends_),n=Ny(this.flatCoordinates_,0,e,2);this.flatInteriorPoints_=D_(this.flatCoordinates_,0,e,2,n)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=Zl(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];const e=this.flatCoordinates_;let n=0;const r=this.ends_;for(let i=0,s=r.length;i<s;++i){const o=r[i],a=Zl(e,n,o,2,.5);Yt(this.flatMidpoints_,a),n=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,n){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=Ae(e);const n=e.getExtent(),r=e.getWorldExtent();if(n&&r){const i=zt(r)/zt(n);Lr(Rm,r[0],r[3],i,-i,0,0,0),si(this.flatCoordinates_,0,this.flatCoordinates_.length,2,Rm,this.flatCoordinates_)}}applyTransform(e){e(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){var e;return new en(this.type_,this.flatCoordinates_.slice(),(e=this.ends_)==null?void 0:e.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=h_((e,n)=>{if(e===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),n&&this.simplifiedGeometry_.applyTransform(n);const r=this.simplifiedGeometry_.getFlatCoordinates();let i;switch(this.type_){case"LineString":r.length=Ic(r,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,e,r,0),i=[r.length];break;case"MultiLineString":i=[],r.length=L_(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,e,r,0,i);break;case"Polygon":i=[],r.length=Od(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(e),r,0,i);break}return i&&(this.simplifiedGeometry_=new en(this.type_,r,i,2,this.properties_,this.id_)),this.squaredTolerance_=e,this.simplifiedGeometry_}),this}}en.prototype.getFlatCoordinates=en.prototype.getOrientedFlatCoordinates;const Mn={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function _T(t,e){return[[-1/0,-1/0,1/0,1/0]]}let yT=!1;function vT(t,e,n,r,i,s,o){const a=new XMLHttpRequest;a.open("GET",typeof t=="function"?t(n,r,i):t,!0),e.getType()=="arraybuffer"&&(a.responseType="arraybuffer"),a.withCredentials=yT,a.onload=function(l){if(!a.status||a.status>=200&&a.status<300){const c=e.getType();try{let u;c=="text"||c=="json"?u=a.responseText:c=="xml"?u=a.responseXML||a.responseText:c=="arraybuffer"&&(u=a.response),u?s(e.readFeatures(u,{extent:n,featureProjection:i}),e.readProjection(u)):o()}catch{o()}}else o()},a.onerror=o,a.send()}function Am(t,e){return function(n,r,i,s,o){const a=this;vT(t,e,n,r,i,function(l,c){a.addFeatures(l),s!==void 0&&s(l)},o||Ds)}}class Ur extends Fr{constructor(e,n,r){super(e),this.feature=n,this.features=r}}class wT extends Ry{constructor(e){e=e||{},super({attributions:e.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:e.wrapX!==void 0?e.wrapX:!0}),this.on,this.once,this.un,this.loader_=Ds,this.format_=e.format,this.overlaps_=e.overlaps===void 0?!0:e.overlaps,this.url_=e.url,e.loader!==void 0?this.loader_=e.loader:this.url_!==void 0&&(Ne(this.format_,"`format` must be set when `url` is set"),this.loader_=Am(this.url_,this.format_)),this.strategy_=e.strategy!==void 0?e.strategy:_T;const n=e.useSpatialIndex!==void 0?e.useSpatialIndex:!0;this.featuresRtree_=n?new Tm:null,this.loadedExtentsRtree_=new Tm,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let r,i;Array.isArray(e.features)?i=e.features:e.features&&(r=e.features,i=r.getArray()),!n&&r===void 0&&(r=new Jn(i)),i!==void 0&&this.addFeaturesInternal(i),r!==void 0&&this.bindFeaturesCollection_(r)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){const n=qe(e);if(!this.addToIndex_(n,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(n,e);const r=e.getGeometry();if(r){const i=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(i,e)}else this.nullGeometryFeatures_[n]=e;this.dispatchEvent(new Ur(Mn.ADDFEATURE,e))}setupChangeEvents_(e,n){n instanceof en||(this.featureChangeKeys_[e]=[Fe(n,Se.CHANGE,this.handleFeatureChange_,this),Fe(n,Ns.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(e,n){let r=!0;if(n.getId()!==void 0){const i=String(n.getId());if(!(i in this.idIndex_))this.idIndex_[i]=n;else if(n instanceof en){const s=this.idIndex_[i];s instanceof en?Array.isArray(s)?s.push(n):this.idIndex_[i]=[s,n]:r=!1}else r=!1}return r&&(Ne(!(e in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[e]=n),r}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){const n=[],r=[],i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s],l=qe(a);this.addToIndex_(l,a)&&r.push(a)}for(let s=0,o=r.length;s<o;s++){const a=r[s],l=qe(a);this.setupChangeEvents_(l,a);const c=a.getGeometry();if(c){const u=c.getExtent();n.push(u),i.push(a)}else this.nullGeometryFeatures_[l]=a}if(this.featuresRtree_&&this.featuresRtree_.load(n,i),this.hasListener(Mn.ADDFEATURE))for(let s=0,o=r.length;s<o;s++)this.dispatchEvent(new Ur(Mn.ADDFEATURE,r[s]))}bindFeaturesCollection_(e){let n=!1;this.addEventListener(Mn.ADDFEATURE,function(r){n||(n=!0,e.push(r.feature),n=!1)}),this.addEventListener(Mn.REMOVEFEATURE,function(r){n||(n=!0,e.remove(r.feature),n=!1)}),e.addEventListener(tn.ADD,r=>{n||(n=!0,this.addFeature(r.element),n=!1)}),e.addEventListener(tn.REMOVE,r=>{n||(n=!0,this.removeFeature(r.element),n=!1)}),this.featuresCollection_=e}clear(e){if(e){for(const r in this.featureChangeKeys_)this.featureChangeKeys_[r].forEach(st);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const r=i=>{this.removeFeatureInternal(i)};this.featuresRtree_.forEach(r);for(const i in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[i])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const n=new Ur(Mn.CLEAR);this.dispatchEvent(n),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,n){const r=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(r,function(i){const s=i.getGeometry();if(s instanceof en||s.intersectsCoordinate(e))return n(i)})}forEachFeatureInExtent(e,n){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,n);this.featuresCollection_&&this.featuresCollection_.forEach(n)}forEachFeatureIntersectingExtent(e,n){return this.forEachFeatureInExtent(e,function(r){const i=r.getGeometry();if(i instanceof en||i.intersectsExtent(e)){const s=n(r);if(s)return s}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),Di(this.nullGeometryFeatures_)||Yt(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){const n=[];return this.forEachFeatureAtCoordinateDirect(e,function(r){n.push(r)}),n}getFeaturesInExtent(e,n){if(this.featuresRtree_){if(!(n&&n.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);const i=w_(e,n);return[].concat(...i.map(s=>this.featuresRtree_.getInExtent(s)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,n){const r=e[0],i=e[1];let s=null;const o=[NaN,NaN];let a=1/0;const l=[-1/0,-1/0,1/0,1/0];return n=n||ta,this.featuresRtree_.forEachInExtent(l,function(c){if(n(c)){const u=c.getGeometry(),h=a;if(a=u instanceof en?0:u.closestPointXY(r,i,o,a),a<h){s=c;const d=Math.sqrt(a);l[0]=r-d,l[1]=i-d,l[2]=r+d,l[3]=i+d}}}),s}getExtent(e){return this.featuresRtree_.getExtent(e)}getFeatureById(e){const n=this.idIndex_[e.toString()];return n!==void 0?n:null}getFeatureByUid(e){const n=this.uidIndex_[e];return n!==void 0?n:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){const n=e.target,r=qe(n),i=n.getGeometry();if(!i)r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(n),this.nullGeometryFeatures_[r]=n);else{const o=i.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(o,n)):this.featuresRtree_&&this.featuresRtree_.update(o,n)}const s=n.getId();if(s!==void 0){const o=s.toString();this.idIndex_[o]!==n&&(this.removeFromIdIndex_(n),this.idIndex_[o]=n)}else this.removeFromIdIndex_(n),this.uidIndex_[r]=n;this.changed(),this.dispatchEvent(new Ur(Mn.CHANGEFEATURE,n))}hasFeature(e){const n=e.getId();return n!==void 0?n in this.idIndex_:qe(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&Di(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0}loadFeatures(e,n,r){const i=this.loadedExtentsRtree_,s=this.strategy_(e,n,r);for(let o=0,a=s.length;o<a;++o){const l=s[o];i.forEachInExtent(l,function(u){return fs(u.extent,l)})||(++this.loadingExtentsCount_,this.dispatchEvent(new Ur(Mn.FEATURESLOADSTART)),this.loader_.call(this,l,n,r,u=>{--this.loadingExtentsCount_,this.dispatchEvent(new Ur(Mn.FEATURESLOADEND,void 0,u))},()=>{--this.loadingExtentsCount_,this.dispatchEvent(new Ur(Mn.FEATURESLOADERROR))}),i.insert(l,{extent:l.slice()}))}this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){const n=this.loadedExtentsRtree_;let r;n.forEachInExtent(e,function(i){if(ra(i.extent,e))return r=i,!0}),r&&n.remove(r)}removeFeatures(e){const n=[];for(let r=0,i=e.length;r<i;++r){const s=e[r],o=this.removeFeatureInternal(s);o&&n.push(o)}n.length>0&&this.changed()}removeFeature(e){if(!e)return;this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){const n=qe(e);if(!(n in this.uidIndex_))return;n in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[n]:this.featuresRtree_&&this.featuresRtree_.remove(e);const r=this.featureChangeKeys_[n];r==null||r.forEach(st),delete this.featureChangeKeys_[n];const i=e.getId();if(i!==void 0){const s=i.toString(),o=this.idIndex_[s];o===e?delete this.idIndex_[s]:Array.isArray(o)&&(o.splice(o.indexOf(e),1),o.length===1&&(this.idIndex_[s]=o[0]))}return delete this.uidIndex_[n],this.hasListener(Mn.REMOVEFEATURE)&&this.dispatchEvent(new Ur(Mn.REMOVEFEATURE,e)),e}removeFromIdIndex_(e){let n=!1;for(const r in this.idIndex_){const i=this.idIndex_[r];if(e instanceof en&&Array.isArray(i)&&i.includes(e))i.splice(i.indexOf(e),1);else if(this.idIndex_[r]===e){delete this.idIndex_[r],n=!0;break}}return n}setLoader(e){this.loader_=e}setUrl(e){Ne(this.format_,"`format` must be set when `url` is set"),this.url_=e,this.setLoader(Am(e,this.format_))}}class Dy{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=La,this.supportedMediaTypes=null}getReadOptions(e,n){if(n){let r=n.dataProjection?Ae(n.dataProjection):this.readProjection(e);n.extent&&r&&r.getUnits()==="tile-pixels"&&(r=Ae(r),r.setWorldExtent(n.extent)),n={dataProjection:r,featureProjection:n.featureProjection}}return this.adaptOptions(n)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return pe()}readFeature(e,n){return pe()}readFeatures(e,n){return pe()}readGeometry(e,n){return pe()}readProjection(e){return pe()}writeFeature(e,n){return pe()}writeFeatures(e,n){return pe()}writeGeometry(e,n){return pe()}}function to(t,e,n){const r=n?Ae(n.featureProjection):null,i=n?Ae(n.dataProjection):null;let s=t;if(r&&i&&!Yr(r,i)){e&&(s=t.clone());const o=e?r:i,a=e?i:r;o.getUnits()==="tile-pixels"?s.transform(o,a):s.applyTransform(Bs(o,a))}if(e&&n&&n.decimals!==void 0){const o=Math.pow(10,n.decimals),a=function(l){for(let c=0,u=l.length;c<u;++c)l[c]=Math.round(l[c]*o)/o;return l};s===t&&(s=t.clone()),s.applyTransform(a)}return s}function Qd(t,e){const n=e?Ae(e.featureProjection):null,r=e?Ae(e.dataProjection):null;return n&&r&&!Yr(n,r)?I2(t,r,n):t}const ST={Point:sa,LineString:di,Polygon:or,MultiPoint:Oa,MultiLineString:Ks,MultiPolygon:$s};function bT(t,e,n){return Array.isArray(e[0])?(j_(t,0,e,n)||(t=t.slice(),hh(t,0,e,n)),t):(Gd(t,0,e,n)||(t=t.slice(),Bl(t,0,e,n)),t)}function Gy(t,e){var s;const n=t.geometry;if(!n)return[];if(Array.isArray(n))return n.map(o=>Gy({...t,geometry:o})).flat();const r=n.type==="MultiPolygon"?"Polygon":n.type;if(r==="GeometryCollection"||r==="Circle")throw new Error("Unsupported geometry type: "+r);const i=n.layout.length;return to(new en(r,r==="Polygon"?bT(n.flatCoordinates,n.ends,i):n.flatCoordinates,(s=n.ends)==null?void 0:s.flat(),i,t.properties||{},t.id).enableSimplifyTransformed(),!1,e)}function ef(t,e){if(!t)return null;if(Array.isArray(t)){const r=t.map(i=>ef(i,e));return new Hl(r)}const n=ST[t.type];return to(new n(t.flatCoordinates,t.layout,t.ends),!1,e)}class ET extends Dy{constructor(){super()}getType(){return"json"}readFeature(e,n){return this.readFeatureFromObject(ol(e),this.getReadOptions(e,n))}readFeatures(e,n){return this.readFeaturesFromObject(ol(e),this.getReadOptions(e,n))}readFeatureFromObject(e,n){return pe()}readFeaturesFromObject(e,n){return pe()}readGeometry(e,n){return this.readGeometryFromObject(ol(e),this.getReadOptions(e,n))}readGeometryFromObject(e,n){return pe()}readProjection(e){return this.readProjectionFromObject(ol(e))}readProjectionFromObject(e){return pe()}writeFeature(e,n){return JSON.stringify(this.writeFeatureObject(e,n))}writeFeatureObject(e,n){return pe()}writeFeatures(e,n){return JSON.stringify(this.writeFeaturesObject(e,n))}writeFeaturesObject(e,n){return pe()}writeGeometry(e,n){return JSON.stringify(this.writeGeometryObject(e,n))}writeGeometryObject(e,n){return pe()}}function ol(t){if(typeof t=="string"){const e=JSON.parse(t);return e||null}return t!==null?t:null}class MT extends ET{constructor(e){e=e||{},super(),this.dataProjection=Ae(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=Ae(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,n){let r=null;e.type==="Feature"?r=e:r={type:"Feature",geometry:e,properties:null};const i=tf(r.geometry);if(this.featureClass===en)return Gy({geometry:i,id:r.id,properties:r.properties},n);const s=new La;return this.geometryName_?s.setGeometryName(this.geometryName_):this.extractGeometryName_&&r.geometry_name&&s.setGeometryName(r.geometry_name),s.setGeometry(ef(i,n)),"id"in r&&s.setId(r.id),r.properties&&s.setProperties(r.properties,!0),s}readFeaturesFromObject(e,n){const r=e;let i=null;if(r.type==="FeatureCollection"){const s=e;i=[];const o=s.features;for(let a=0,l=o.length;a<l;++a){const c=this.readFeatureFromObject(o[a],n);c&&i.push(c)}}else i=[this.readFeatureFromObject(e,n)];return i.flat()}readGeometryFromObject(e,n){return xT(e,n)}readProjectionFromObject(e){const n=e.crs;let r;if(n)if(n.type=="name")r=Ae(n.properties.name);else if(n.type==="EPSG")r=Ae("EPSG:"+n.properties.code);else throw new Error("Unknown SRS type");else r=this.dataProjection;return r}writeFeatureObject(e,n){n=this.adaptOptions(n);const r={type:"Feature",geometry:null,properties:null},i=e.getId();if(i!==void 0&&(r.id=i),!e.hasProperties())return r;const s=e.getProperties(),o=e.getGeometry();return o&&(r.geometry=Mh(o,n),delete s[e.getGeometryName()]),Di(s)||(r.properties=s),r}writeFeaturesObject(e,n){n=this.adaptOptions(n);const r=[];for(let i=0,s=e.length;i<s;++i)r.push(this.writeFeatureObject(e[i],n));return{type:"FeatureCollection",features:r}}writeGeometryObject(e,n){return Mh(e,this.adaptOptions(n))}}function tf(t,e){if(!t)return null;let n;switch(t.type){case"Point":{n=kT(t);break}case"LineString":{n=PT(t);break}case"Polygon":{n=IT(t);break}case"MultiPoint":{n=RT(t);break}case"MultiLineString":{n=TT(t);break}case"MultiPolygon":{n=AT(t);break}case"GeometryCollection":{n=CT(t);break}default:throw new Error("Unsupported GeoJSON type: "+t.type)}return n}function xT(t,e){const n=tf(t);return ef(n,e)}function CT(t,e){return t.geometries.map(function(r){return tf(r)})}function kT(t){const e=t.coordinates;return{type:"Point",flatCoordinates:e,layout:Hi(e.length)}}function PT(t){var r;const e=t.coordinates,n=e.flat();return{type:"LineString",flatCoordinates:n,ends:[n.length],layout:Hi(((r=e[0])==null?void 0:r.length)||2)}}function TT(t){var s,o;const e=t.coordinates,n=((o=(s=e[0])==null?void 0:s[0])==null?void 0:o.length)||2,r=[],i=Pa(r,0,e,n);return{type:"MultiLineString",flatCoordinates:r,ends:i,layout:Hi(n)}}function RT(t){var n;const e=t.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:Hi(((n=e[0])==null?void 0:n.length)||2)}}function AT(t){var s,o;const e=t.coordinates,n=[],r=((o=(s=e[0])==null?void 0:s[0])==null?void 0:o[0].length)||2,i=I_(n,0,e,r);return{type:"MultiPolygon",flatCoordinates:n,ends:i,layout:Hi(r)}}function IT(t){var s,o;const e=t.coordinates,n=[],r=(o=(s=e[0])==null?void 0:s[0])==null?void 0:o.length,i=Pa(n,0,e,r);return{type:"Polygon",flatCoordinates:n,ends:i,layout:Hi(r)}}function Mh(t,e){t=to(t,!0,e);const n=t.getType();let r;switch(n){case"Point":{r=GT(t);break}case"LineString":{r=OT(t);break}case"Polygon":{r=zT(t,e);break}case"MultiPoint":{r=NT(t);break}case"MultiLineString":{r=FT(t);break}case"MultiPolygon":{r=DT(t,e);break}case"GeometryCollection":{r=LT(t,e);break}case"Circle":{r={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+n)}return r}function LT(t,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:t.getGeometriesArray().map(function(r){return Mh(r,e)})}}function OT(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}function FT(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}function NT(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}function DT(t,e){let n;return e&&(n=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(n)}}function GT(t,e){return{type:"Point",coordinates:t.getCoordinates()}}function zT(t,e){let n;return e&&(n=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(n)}}const BT="http://www.w3.org/2001/XMLSchema-instance";function rt(t,e){return jy().createElementNS(t,e)}function Xl(t,e){return zy(t,e,[]).join("")}function zy(t,e,n){if(t.nodeType==Node.CDATA_SECTION_NODE||t.nodeType==Node.TEXT_NODE)n.push(t.nodeValue);else{let r;for(r=t.firstChild;r;r=r.nextSibling)zy(r,e,n)}return n}function al(t){return"documentElement"in t}function jT(t,e,n){return t.getAttributeNS(e,n)||""}function ll(t){return new DOMParser().parseFromString(t,"application/xml")}function WT(t,e){return function(n,r){const i=t.call(this,n,r);if(i!==void 0){const s=r[r.length-1];Yt(s,i)}}}function lt(t,e){return function(n,r){const i=t.call(e!==void 0?e:this,n,r);i!==void 0&&r[r.length-1].push(i)}}function Ge(t,e){return function(n,r){const i=t.call(e!==void 0?e:this,n,r);i!==void 0&&(r[r.length-1]=i)}}function _e(t,e){return function(n,r,i){t.call(e!==void 0?e:this,n,r,i),i[i.length-1].node.appendChild(n)}}function Ps(t,e){return function(n,r,i){const o=r[r.length-1].node;let a=t;a===void 0&&(a=i);const l=e!==void 0?e:o.namespaceURI;return rt(l,a)}}const By=Ps();function Ts(t,e,n,r){let i;for(i=e.firstElementChild;i;i=i.nextElementSibling){const s=t[i.namespaceURI];if(s!==void 0){const o=s[i.localName];o!==void 0&&o.call(r,i,n)}}}function it(t,e,n,r,i){return r.push(t),Ts(e,n,r,i),r.pop()}function VT(t,e,n,r,i,s){const o=(i!==void 0?i:n).length;let a,l;for(let c=0;c<o;++c)a=n[c],a!==void 0&&(l=e.call(s!==void 0?s:this,a,r,i!==void 0?i[c]:void 0),l!==void 0&&t[l.namespaceURI][l.localName].call(s,l,a,r))}function Ht(t,e,n,r,i,s,o){return i.push(t),VT(e,n,r,i,s,o),i.pop()}let Pu;function UT(){return Pu===void 0&&typeof XMLSerializer<"u"&&(Pu=new XMLSerializer),Pu}let Tu;function jy(){return Tu===void 0&&typeof document<"u"&&(Tu=document.implementation.createDocument("","",null)),Tu}class KT extends Dy{constructor(){super(),this.xmlSerializer_=UT()}getType(){return"xml"}readFeature(e,n){if(!e)return null;if(typeof e=="string"){const r=ll(e);return this.readFeatureFromDocument(r,n)}return al(e)?this.readFeatureFromDocument(e,n):this.readFeatureFromNode(e,n)}readFeatureFromDocument(e,n){const r=this.readFeaturesFromDocument(e,n);return r.length>0?r[0]:null}readFeatureFromNode(e,n){return null}readFeatures(e,n){if(!e)return[];if(typeof e=="string"){const r=ll(e);return this.readFeaturesFromDocument(r,n)}return al(e)?this.readFeaturesFromDocument(e,n):this.readFeaturesFromNode(e,n)}readFeaturesFromDocument(e,n){const r=[];for(let i=e.firstChild;i;i=i.nextSibling)i.nodeType==Node.ELEMENT_NODE&&Yt(r,this.readFeaturesFromNode(i,n));return r}readFeaturesFromNode(e,n){return pe()}readGeometry(e,n){if(!e)return null;if(typeof e=="string"){const r=ll(e);return this.readGeometryFromDocument(r,n)}return al(e)?this.readGeometryFromDocument(e,n):this.readGeometryFromNode(e,n)}readGeometryFromDocument(e,n){return null}readGeometryFromNode(e,n){return null}readProjection(e){if(!e)return null;if(typeof e=="string"){const n=ll(e);return this.readProjectionFromDocument(n)}return al(e)?this.readProjectionFromDocument(e):this.readProjectionFromNode(e)}readProjectionFromDocument(e){return this.dataProjection}readProjectionFromNode(e){return this.dataProjection}writeFeature(e,n){const r=this.writeFeatureNode(e,n);return this.xmlSerializer_.serializeToString(r)}writeFeatureNode(e,n){return null}writeFeatures(e,n){const r=this.writeFeaturesNode(e,n);return this.xmlSerializer_.serializeToString(r)}writeFeaturesNode(e,n){return null}writeGeometry(e,n){const r=this.writeGeometryNode(e,n);return this.xmlSerializer_.serializeToString(r)}writeGeometryNode(e,n){return null}}const Uc="http://www.opengis.net/gml",$T=/^\s*$/;class Ee extends KT{constructor(e){super(),e=e||{},this.featureType=e.featureType,this.featureNS=e.featureNS,this.srsName=e.srsName,this.schemaLocation="",this.FEATURE_COLLECTION_PARSERS={},this.FEATURE_COLLECTION_PARSERS[this.namespace]={featureMember:lt(this.readFeaturesInternal),featureMembers:Ge(this.readFeaturesInternal)},this.supportedMediaTypes=["application/gml+xml"]}readFeaturesInternal(e,n){const r=e.localName;let i=null;if(r=="FeatureCollection")i=it([],this.FEATURE_COLLECTION_PARSERS,e,n,this);else if(r=="featureMembers"||r=="featureMember"||r=="member"){const s=n[0];let o=s.featureType,a=s.featureNS;const l="p",c="p0";if(!o&&e.childNodes){o=[],a={};for(let d=0,f=e.childNodes.length;d<f;++d){const g=e.childNodes[d];if(g.nodeType===1){const m=g.nodeName.split(":").pop();if(!o.includes(m)){let p="",_=0;const y=g.namespaceURI;for(const w in a){if(a[w]===y){p=w;break}++_}p||(p=l+_,a[p]=y),o.push(p+":"+m)}}}r!="featureMember"&&(s.featureType=o,s.featureNS=a)}if(typeof a=="string"){const d=a;a={},a[c]=d}const u={},h=Array.isArray(o)?o:[o];for(const d in a){const f={};for(let g=0,m=h.length;g<m;++g)(h[g].includes(":")?h[g].split(":")[0]:c)===d&&(f[h[g].split(":").pop()]=r=="featureMembers"?lt(this.readFeatureElement,this):Ge(this.readFeatureElement,this));u[a[d]]=f}r=="featureMember"||r=="member"?i=it(void 0,u,e,n):i=it([],u,e,n)}return i===null&&(i=[]),i}readGeometryOrExtent(e,n){const r=n[0];return r.srsName=e.firstElementChild.getAttribute("srsName"),r.srsDimension=e.firstElementChild.getAttribute("srsDimension"),it(null,this.GEOMETRY_PARSERS,e,n,this)}readExtentElement(e,n){const r=n[0],i=this.readGeometryOrExtent(e,n);return i?Qd(i,r):void 0}readGeometryElement(e,n){const r=n[0],i=this.readGeometryOrExtent(e,n);return i?to(i,!1,r):void 0}readFeatureElementInternal(e,n,r){let i;const s={};for(let l=e.firstElementChild;l;l=l.nextElementSibling){let c;const u=l.localName;l.childNodes.length===0||l.childNodes.length===1&&(l.firstChild.nodeType===3||l.firstChild.nodeType===4)?(c=Xl(l,!1),$T.test(c)&&(c=void 0)):(r&&(c=u==="boundedBy"?this.readExtentElement(l,n):this.readGeometryElement(l,n)),c?u!=="boundedBy"&&(i=u):c=this.readFeatureElementInternal(l,n,!1));const h=l.attributes.length;if(h>0&&!(c instanceof Td)){c={_content_:c};for(let d=0;d<h;d++){const f=l.attributes[d].name;c[f]=l.attributes[d].value}}s[u]?(s[u]instanceof Array||(s[u]=[s[u]]),s[u].push(c)):s[u]=c}if(!r)return s;const o=new La(s);i&&o.setGeometryName(i);const a=e.getAttribute("fid")||jT(e,this.namespace,"id");return a&&o.setId(a),o}readFeatureElement(e,n){return this.readFeatureElementInternal(e,n,!0)}readPoint(e,n){const r=this.readFlatCoordinatesFromNode(e,n);if(r)return new sa(r,"XYZ")}readMultiPoint(e,n){const r=it([],this.MULTIPOINT_PARSERS,e,n,this);if(r)return new Oa(r)}readMultiLineString(e,n){const r=it([],this.MULTILINESTRING_PARSERS,e,n,this);if(r)return new Ks(r)}readMultiPolygon(e,n){const r=it([],this.MULTIPOLYGON_PARSERS,e,n,this);if(r)return new $s(r)}pointMemberParser(e,n){Ts(this.POINTMEMBER_PARSERS,e,n,this)}lineStringMemberParser(e,n){Ts(this.LINESTRINGMEMBER_PARSERS,e,n,this)}polygonMemberParser(e,n){Ts(this.POLYGONMEMBER_PARSERS,e,n,this)}readLineString(e,n){const r=this.readFlatCoordinatesFromNode(e,n);if(r)return new di(r,"XYZ")}readFlatLinearRing(e,n){const r=it(null,this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,n,this);if(r)return r}readLinearRing(e,n){const r=this.readFlatCoordinatesFromNode(e,n);if(r)return new js(r,"XYZ")}readPolygon(e,n){const r=it([null],this.FLAT_LINEAR_RINGS_PARSERS,e,n,this);if(r&&r[0]){const i=r[0],s=[i.length];let o,a;for(o=1,a=r.length;o<a;++o)Yt(i,r[o]),s.push(i.length);return new or(i,"XYZ",s)}}readFlatCoordinatesFromNode(e,n){return it(null,this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,n,this)}readGeometryFromNode(e,n){const r=this.readGeometryElement(e,[this.getReadOptions(e,n||{})]);return r||null}readFeaturesFromNode(e,n){const r={featureType:this.featureType,featureNS:this.featureNS};return r&&Object.assign(r,this.getReadOptions(e,n)),this.readFeaturesInternal(e,[r])||[]}readProjectionFromNode(e){return Ae(this.srsName?this.srsName:e.firstElementChild.getAttribute("srsName"))}}Ee.prototype.namespace=Uc;Ee.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{}};Ee.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{}};Ee.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{}};Ee.prototype.MULTIPOINT_PARSERS={"http://www.opengis.net/gml":{pointMember:lt(Ee.prototype.pointMemberParser),pointMembers:lt(Ee.prototype.pointMemberParser)}};Ee.prototype.MULTILINESTRING_PARSERS={"http://www.opengis.net/gml":{lineStringMember:lt(Ee.prototype.lineStringMemberParser),lineStringMembers:lt(Ee.prototype.lineStringMemberParser)}};Ee.prototype.MULTIPOLYGON_PARSERS={"http://www.opengis.net/gml":{polygonMember:lt(Ee.prototype.polygonMemberParser),polygonMembers:lt(Ee.prototype.polygonMemberParser)}};Ee.prototype.POINTMEMBER_PARSERS={"http://www.opengis.net/gml":{Point:lt(Ee.prototype.readFlatCoordinatesFromNode)}};Ee.prototype.LINESTRINGMEMBER_PARSERS={"http://www.opengis.net/gml":{LineString:lt(Ee.prototype.readLineString)}};Ee.prototype.POLYGONMEMBER_PARSERS={"http://www.opengis.net/gml":{Polygon:lt(Ee.prototype.readPolygon)}};Ee.prototype.RING_PARSERS={"http://www.opengis.net/gml":{LinearRing:Ge(Ee.prototype.readFlatLinearRing)}};function cl(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function ir(t,e){t.appendChild(jy().createTextNode(e))}const qT=Uc+" http://schemas.opengis.net/gml/2.1.2/feature.xsd",HT={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};class Te extends Ee{constructor(e){e=e||{},super(e),this.FEATURE_COLLECTION_PARSERS[Uc].featureMember=lt(this.readFeaturesInternal),this.schemaLocation=e.schemaLocation?e.schemaLocation:qT}readFlatCoordinates(e,n){const r=Xl(e,!1).replace(/^\s*|\s*$/g,""),s=n[0].srsName;let o="enu";if(s){const c=Ae(s);c&&(o=c.getAxisOrientation())}const a=r.trim().split(/\s+/),l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c].split(/,+/),d=parseFloat(h[0]),f=parseFloat(h[1]),g=h.length===3?parseFloat(h[2]):0;o.substr(0,2)==="en"?l.push(d,f,g):l.push(f,d,g)}return l}readBox(e,n){const r=it([null],this.BOX_PARSERS_,e,n,this);return jn(r[1][0],r[1][1],r[1][3],r[1][4])}innerBoundaryIsParser(e,n){const r=it(void 0,this.RING_PARSERS,e,n,this);r&&n[n.length-1].push(r)}outerBoundaryIsParser(e,n){const r=it(void 0,this.RING_PARSERS,e,n,this);if(r){const i=n[n.length-1];i[0]=r}}GEOMETRY_NODE_FACTORY_(e,n,r){const i=n[n.length-1],s=i.multiSurface,o=i.surface,a=i.multiCurve;return Array.isArray(e)?r="Envelope":(r=e.getType(),r==="MultiPolygon"&&s===!0?r="MultiSurface":r==="Polygon"&&o===!0?r="Surface":r==="MultiLineString"&&a===!0&&(r="MultiCurve")),rt("http://www.opengis.net/gml",r)}writeFeatureElement(e,n,r){const i=n.getId();i&&e.setAttribute("fid",i);const s=r[r.length-1],o=s.featureNS,a=n.getGeometryName();s.serializers||(s.serializers={},s.serializers[o]={});const l=[],c=[];if(n.hasProperties()){const h=n.getProperties();for(const d in h){const f=h[d];f!==null&&(l.push(d),c.push(f),d==a||typeof f.getSimplifiedGeometry=="function"?d in s.serializers[o]||(s.serializers[o][d]=_e(this.writeGeometryElement,this)):d in s.serializers[o]||(s.serializers[o][d]=_e(ir)))}}const u=Object.assign({},s);u.node=e,Ht(u,s.serializers,Ps(void 0,o),c,r,l)}writeCurveOrLineString(e,n,r){const s=r[r.length-1].srsName;if(e.nodeName!=="LineStringSegment"&&s&&e.setAttribute("srsName",s),e.nodeName==="LineString"||e.nodeName==="LineStringSegment"){const o=this.createCoordinatesNode_(e.namespaceURI);e.appendChild(o),this.writeCoordinates_(o,n,r)}else if(e.nodeName==="Curve"){const o=rt(e.namespaceURI,"segments");e.appendChild(o),this.writeCurveSegments_(o,n,r)}}writeLineStringOrCurveMember(e,n,r){const i=this.GEOMETRY_NODE_FACTORY_(n,r);i&&(e.appendChild(i),this.writeCurveOrLineString(i,n,r))}writeMultiCurveOrLineString(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName,a=i.curve;o&&e.setAttribute("srsName",o);const l=n.getLineStrings();Ht({node:e,hasZ:s,srsName:o,curve:a},this.LINESTRINGORCURVEMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,r,void 0,this)}writeGeometryElement(e,n,r){const i=r[r.length-1],s=Object.assign({},i);s.node=e;let o;Array.isArray(n)?o=Qd(n,i):o=to(n,!0,i),Ht(s,this.GEOMETRY_SERIALIZERS,this.GEOMETRY_NODE_FACTORY_,[o],r,void 0,this)}createCoordinatesNode_(e){const n=rt(e,"coordinates");return n.setAttribute("decimal","."),n.setAttribute("cs",","),n.setAttribute("ts"," "),n}writeCoordinates_(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName,a=n.getCoordinates(),l=a.length,c=new Array(l);for(let u=0;u<l;++u){const h=a[u];c[u]=this.getCoords_(h,o,s)}ir(e,c.join(" "))}writeCurveSegments_(e,n,r){const i=rt(e.namespaceURI,"LineStringSegment");e.appendChild(i),this.writeCurveOrLineString(i,n,r)}writeSurfaceOrPolygon(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName;if(e.nodeName!=="PolygonPatch"&&o&&e.setAttribute("srsName",o),e.nodeName==="Polygon"||e.nodeName==="PolygonPatch"){const a=n.getLinearRings();Ht({node:e,hasZ:s,srsName:o},this.RING_SERIALIZERS,this.RING_NODE_FACTORY_,a,r,void 0,this)}else if(e.nodeName==="Surface"){const a=rt(e.namespaceURI,"patches");e.appendChild(a),this.writeSurfacePatches_(a,n,r)}}RING_NODE_FACTORY_(e,n,r){const i=n[n.length-1],s=i.node,o=i.exteriorWritten;return o===void 0&&(i.exteriorWritten=!0),rt(s.namespaceURI,o!==void 0?"innerBoundaryIs":"outerBoundaryIs")}writeSurfacePatches_(e,n,r){const i=rt(e.namespaceURI,"PolygonPatch");e.appendChild(i),this.writeSurfaceOrPolygon(i,n,r)}writeRing(e,n,r){const i=rt(e.namespaceURI,"LinearRing");e.appendChild(i),this.writeLinearRing(i,n,r)}getCoords_(e,n,r){let i="enu";n&&(i=Ae(n).getAxisOrientation());let s=i.substr(0,2)==="en"?e[0]+","+e[1]:e[1]+","+e[0];if(r){const o=e[2]||0;s+=","+o}return s}writePoint(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName;o&&e.setAttribute("srsName",o);const a=this.createCoordinatesNode_(e.namespaceURI);e.appendChild(a);const l=n.getCoordinates(),c=this.getCoords_(l,o,s);ir(a,c)}writeMultiPoint(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName;o&&e.setAttribute("srsName",o);const a=n.getPoints();Ht({node:e,hasZ:s,srsName:o},this.POINTMEMBER_SERIALIZERS,Ps("pointMember"),a,r,void 0,this)}writePointMember(e,n,r){const i=rt(e.namespaceURI,"Point");e.appendChild(i),this.writePoint(i,n,r)}writeLinearRing(e,n,r){const s=r[r.length-1].srsName;s&&e.setAttribute("srsName",s);const o=this.createCoordinatesNode_(e.namespaceURI);e.appendChild(o),this.writeCoordinates_(o,n,r)}writeMultiSurfaceOrPolygon(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName,a=i.surface;o&&e.setAttribute("srsName",o);const l=n.getPolygons();Ht({node:e,hasZ:s,srsName:o,surface:a},this.SURFACEORPOLYGONMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,r,void 0,this)}writeSurfaceOrPolygonMember(e,n,r){const i=this.GEOMETRY_NODE_FACTORY_(n,r);i&&(e.appendChild(i),this.writeSurfaceOrPolygon(i,n,r))}writeEnvelope(e,n,r){const s=r[r.length-1].srsName;s&&e.setAttribute("srsName",s);const o=["lowerCorner","upperCorner"],a=[n[0]+" "+n[1],n[2]+" "+n[3]];Ht({node:e},this.ENVELOPE_SERIALIZERS,By,a,r,o,this)}MULTIGEOMETRY_MEMBER_NODE_FACTORY_(e,n,r){const i=n[n.length-1].node;return rt("http://www.opengis.net/gml",HT[i.nodeName])}}Te.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{coordinates:Ge(Te.prototype.readFlatCoordinates)}};Te.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{innerBoundaryIs:Te.prototype.innerBoundaryIsParser,outerBoundaryIs:Te.prototype.outerBoundaryIsParser}};Te.prototype.BOX_PARSERS_={"http://www.opengis.net/gml":{coordinates:lt(Te.prototype.readFlatCoordinates)}};Te.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{Point:Ge(Ee.prototype.readPoint),MultiPoint:Ge(Ee.prototype.readMultiPoint),LineString:Ge(Ee.prototype.readLineString),MultiLineString:Ge(Ee.prototype.readMultiLineString),LinearRing:Ge(Ee.prototype.readLinearRing),Polygon:Ge(Ee.prototype.readPolygon),MultiPolygon:Ge(Ee.prototype.readMultiPolygon),Box:Ge(Te.prototype.readBox)}};Te.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml":{Curve:_e(Te.prototype.writeCurveOrLineString),MultiCurve:_e(Te.prototype.writeMultiCurveOrLineString),Point:_e(Te.prototype.writePoint),MultiPoint:_e(Te.prototype.writeMultiPoint),LineString:_e(Te.prototype.writeCurveOrLineString),MultiLineString:_e(Te.prototype.writeMultiCurveOrLineString),LinearRing:_e(Te.prototype.writeLinearRing),Polygon:_e(Te.prototype.writeSurfaceOrPolygon),MultiPolygon:_e(Te.prototype.writeMultiSurfaceOrPolygon),Surface:_e(Te.prototype.writeSurfaceOrPolygon),MultiSurface:_e(Te.prototype.writeMultiSurfaceOrPolygon),Envelope:_e(Te.prototype.writeEnvelope)}};Te.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{lineStringMember:_e(Te.prototype.writeLineStringOrCurveMember),curveMember:_e(Te.prototype.writeLineStringOrCurveMember)}};Te.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml":{outerBoundaryIs:_e(Te.prototype.writeRing),innerBoundaryIs:_e(Te.prototype.writeRing)}};Te.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{pointMember:_e(Te.prototype.writePointMember)}};Te.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{surfaceMember:_e(Te.prototype.writeSurfaceOrPolygonMember),polygonMember:_e(Te.prototype.writeSurfaceOrPolygonMember)}};Te.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml":{lowerCorner:_e(ir),upperCorner:_e(ir)}};const ZT=Uc+" http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",XT={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};class ae extends Ee{constructor(e){e=e||{},super(e),this.surface_=e.surface!==void 0?e.surface:!1,this.curve_=e.curve!==void 0?e.curve:!1,this.multiCurve_=e.multiCurve!==void 0?e.multiCurve:!0,this.multiSurface_=e.multiSurface!==void 0?e.multiSurface:!0,this.schemaLocation=e.schemaLocation?e.schemaLocation:ZT,this.hasZ=e.hasZ!==void 0?e.hasZ:!1}readMultiCurve(e,n){const r=it([],this.MULTICURVE_PARSERS,e,n,this);if(r)return new Ks(r)}readFlatCurveRing(e,n){const r=it([],this.MULTICURVE_PARSERS,e,n,this),i=[];for(let s=0,o=r.length;s<o;++s)Yt(i,r[s].getFlatCoordinates());return i}readMultiSurface(e,n){const r=it([],this.MULTISURFACE_PARSERS,e,n,this);if(r)return new $s(r)}curveMemberParser(e,n){Ts(this.CURVEMEMBER_PARSERS,e,n,this)}surfaceMemberParser(e,n){Ts(this.SURFACEMEMBER_PARSERS,e,n,this)}readPatch(e,n){return it([null],this.PATCHES_PARSERS,e,n,this)}readSegment(e,n){return it([],this.SEGMENTS_PARSERS,e,n,this)}readPolygonPatch(e,n){return it([null],this.FLAT_LINEAR_RINGS_PARSERS,e,n,this)}readLineStringSegment(e,n){return it([null],this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,n,this)}interiorParser(e,n){const r=it(void 0,this.RING_PARSERS,e,n,this);r&&n[n.length-1].push(r)}exteriorParser(e,n){const r=it(void 0,this.RING_PARSERS,e,n,this);if(r){const i=n[n.length-1];i[0]=r}}readSurface(e,n){const r=it([null],this.SURFACE_PARSERS,e,n,this);if(r&&r[0]){const i=r[0],s=[i.length];let o,a;for(o=1,a=r.length;o<a;++o)Yt(i,r[o]),s.push(i.length);return new or(i,"XYZ",s)}}readCurve(e,n){const r=it([null],this.CURVE_PARSERS,e,n,this);if(r)return new di(r,"XYZ")}readEnvelope(e,n){const r=it([null],this.ENVELOPE_PARSERS,e,n,this);return jn(r[1][0],r[1][1],r[2][0],r[2][1])}readFlatPos(e,n){let r=Xl(e,!1);const i=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,s=[];let o;for(;o=i.exec(r);)s.push(parseFloat(o[1])),r=r.substr(o[0].length);if(r!=="")return;const l=n[0].srsName;let c="enu";if(l&&(c=Ae(l).getAxisOrientation()),c==="neu"){let h,d;for(h=0,d=s.length;h<d;h+=3){const f=s[h],g=s[h+1];s[h]=g,s[h+1]=f}}const u=s.length;if(u==2&&s.push(0),u!==0)return s}readFlatPosList(e,n){const r=Xl(e,!1).replace(/^\s*|\s*$/g,""),i=n[0],s=i.srsName,o=i.srsDimension;let a="enu";s&&(a=Ae(s).getAxisOrientation());const l=r.split(/\s+/);let c=2;e.getAttribute("srsDimension")?c=cl(e.getAttribute("srsDimension")):e.getAttribute("dimension")?c=cl(e.getAttribute("dimension")):e.parentNode.getAttribute("srsDimension")?c=cl(e.parentNode.getAttribute("srsDimension")):o&&(c=cl(o));let u,h,d;const f=[];for(let g=0,m=l.length;g<m;g+=c)u=parseFloat(l[g]),h=parseFloat(l[g+1]),d=c===3?parseFloat(l[g+2]):0,a.substr(0,2)==="en"?f.push(u,h,d):f.push(h,u,d);return f}writePos_(e,n,r){const i=r[r.length-1],s=i.hasZ,o=s?"3":"2";e.setAttribute("srsDimension",o);const a=i.srsName;let l="enu";a&&(l=Ae(a).getAxisOrientation());const c=n.getCoordinates();let u;if(l.substr(0,2)==="en"?u=c[0]+" "+c[1]:u=c[1]+" "+c[0],s){const h=c[2]||0;u+=" "+h}ir(e,u)}getCoords_(e,n,r){let i="enu";n&&(i=Ae(n).getAxisOrientation());let s=i.substr(0,2)==="en"?e[0]+" "+e[1]:e[1]+" "+e[0];if(r){const o=e[2]||0;s+=" "+o}return s}writePosList_(e,n,r){const i=r[r.length-1],s=i.hasZ,o=s?"3":"2";e.setAttribute("srsDimension",o);const a=i.srsName,l=n.getCoordinates(),c=l.length,u=new Array(c);let h;for(let d=0;d<c;++d)h=l[d],u[d]=this.getCoords_(h,a,s);ir(e,u.join(" "))}writePoint(e,n,r){const s=r[r.length-1].srsName;s&&e.setAttribute("srsName",s);const o=rt(e.namespaceURI,"pos");e.appendChild(o),this.writePos_(o,n,r)}writeEnvelope(e,n,r){const s=r[r.length-1].srsName;s&&e.setAttribute("srsName",s);const o=["lowerCorner","upperCorner"],a=[n[0]+" "+n[1],n[2]+" "+n[3]];Ht({node:e},this.ENVELOPE_SERIALIZERS,By,a,r,o,this)}writeLinearRing(e,n,r){const s=r[r.length-1].srsName;s&&e.setAttribute("srsName",s);const o=rt(e.namespaceURI,"posList");e.appendChild(o),this.writePosList_(o,n,r)}RING_NODE_FACTORY_(e,n,r){const i=n[n.length-1],s=i.node,o=i.exteriorWritten;return o===void 0&&(i.exteriorWritten=!0),rt(s.namespaceURI,o!==void 0?"interior":"exterior")}writeSurfaceOrPolygon(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName;if(e.nodeName!=="PolygonPatch"&&o&&e.setAttribute("srsName",o),e.nodeName==="Polygon"||e.nodeName==="PolygonPatch"){const a=n.getLinearRings();Ht({node:e,hasZ:s,srsName:o},this.RING_SERIALIZERS,this.RING_NODE_FACTORY_,a,r,void 0,this)}else if(e.nodeName==="Surface"){const a=rt(e.namespaceURI,"patches");e.appendChild(a),this.writeSurfacePatches_(a,n,r)}}writeCurveOrLineString(e,n,r){const s=r[r.length-1].srsName;if(e.nodeName!=="LineStringSegment"&&s&&e.setAttribute("srsName",s),e.nodeName==="LineString"||e.nodeName==="LineStringSegment"){const o=rt(e.namespaceURI,"posList");e.appendChild(o),this.writePosList_(o,n,r)}else if(e.nodeName==="Curve"){const o=rt(e.namespaceURI,"segments");e.appendChild(o),this.writeCurveSegments_(o,n,r)}}writeMultiSurfaceOrPolygon(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName,a=i.surface;o&&e.setAttribute("srsName",o);const l=n.getPolygons();Ht({node:e,hasZ:s,srsName:o,surface:a},this.SURFACEORPOLYGONMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,r,void 0,this)}writeMultiPoint(e,n,r){const i=r[r.length-1],s=i.srsName,o=i.hasZ;s&&e.setAttribute("srsName",s);const a=n.getPoints();Ht({node:e,hasZ:o,srsName:s},this.POINTMEMBER_SERIALIZERS,Ps("pointMember"),a,r,void 0,this)}writeMultiCurveOrLineString(e,n,r){const i=r[r.length-1],s=i.hasZ,o=i.srsName,a=i.curve;o&&e.setAttribute("srsName",o);const l=n.getLineStrings();Ht({node:e,hasZ:s,srsName:o,curve:a},this.LINESTRINGORCURVEMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,r,void 0,this)}writeRing(e,n,r){const i=rt(e.namespaceURI,"LinearRing");e.appendChild(i),this.writeLinearRing(i,n,r)}writeSurfaceOrPolygonMember(e,n,r){const i=this.GEOMETRY_NODE_FACTORY_(n,r);i&&(e.appendChild(i),this.writeSurfaceOrPolygon(i,n,r))}writePointMember(e,n,r){const i=rt(e.namespaceURI,"Point");e.appendChild(i),this.writePoint(i,n,r)}writeLineStringOrCurveMember(e,n,r){const i=this.GEOMETRY_NODE_FACTORY_(n,r);i&&(e.appendChild(i),this.writeCurveOrLineString(i,n,r))}writeSurfacePatches_(e,n,r){const i=rt(e.namespaceURI,"PolygonPatch");e.appendChild(i),this.writeSurfaceOrPolygon(i,n,r)}writeCurveSegments_(e,n,r){const i=rt(e.namespaceURI,"LineStringSegment");e.appendChild(i),this.writeCurveOrLineString(i,n,r)}writeGeometryElement(e,n,r){const i=r[r.length-1],s=Object.assign({},i);s.node=e;let o;Array.isArray(n)?o=Qd(n,i):o=to(n,!0,i),Ht(s,this.GEOMETRY_SERIALIZERS,this.GEOMETRY_NODE_FACTORY_,[o],r,void 0,this)}writeFeatureElement(e,n,r){const i=n.getId();i&&e.setAttribute("fid",i);const s=r[r.length-1],o=s.featureNS,a=n.getGeometryName();s.serializers||(s.serializers={},s.serializers[o]={});const l=[],c=[];if(n.hasProperties()){const h=n.getProperties();for(const d in h){const f=h[d];f!==null&&(l.push(d),c.push(f),d==a||typeof f.getSimplifiedGeometry=="function"?d in s.serializers[o]||(s.serializers[o][d]=_e(this.writeGeometryElement,this)):d in s.serializers[o]||(s.serializers[o][d]=_e(ir)))}}const u=Object.assign({},s);u.node=e,Ht(u,s.serializers,Ps(void 0,o),c,r,l)}writeFeatureMembers_(e,n,r){const i=r[r.length-1],s=i.featureType,o=i.featureNS,a={};a[o]={},a[o][s]=_e(this.writeFeatureElement,this);const l=Object.assign({},i);l.node=e,Ht(l,a,Ps(s,o),n,r)}MULTIGEOMETRY_MEMBER_NODE_FACTORY_(e,n,r){const i=n[n.length-1].node;return rt(this.namespace,XT[i.nodeName])}GEOMETRY_NODE_FACTORY_(e,n,r){const i=n[n.length-1],s=i.multiSurface,o=i.surface,a=i.curve,l=i.multiCurve;return Array.isArray(e)?r="Envelope":(r=e.getType(),r==="MultiPolygon"&&s===!0?r="MultiSurface":r==="Polygon"&&o===!0?r="Surface":r==="LineString"&&a===!0?r="Curve":r==="MultiLineString"&&l===!0&&(r="MultiCurve")),rt(this.namespace,r)}writeGeometryNode(e,n){n=this.adaptOptions(n);const r=rt(this.namespace,"geom"),i={node:r,hasZ:this.hasZ,srsName:this.srsName,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_};return n&&Object.assign(i,n),this.writeGeometryElement(r,e,[i]),r}writeFeaturesNode(e,n){n=this.adaptOptions(n);const r=rt(this.namespace,"featureMembers");r.setAttributeNS(BT,"xsi:schemaLocation",this.schemaLocation);const i={srsName:this.srsName,hasZ:this.hasZ,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_,featureNS:this.featureNS,featureType:this.featureType};return n&&Object.assign(i,n),this.writeFeatureMembers_(r,e,[i]),r}}ae.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{pos:Ge(ae.prototype.readFlatPos),posList:Ge(ae.prototype.readFlatPosList),coordinates:Ge(Te.prototype.readFlatCoordinates)}};ae.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{interior:ae.prototype.interiorParser,exterior:ae.prototype.exteriorParser}};ae.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{Point:Ge(Ee.prototype.readPoint),MultiPoint:Ge(Ee.prototype.readMultiPoint),LineString:Ge(Ee.prototype.readLineString),MultiLineString:Ge(Ee.prototype.readMultiLineString),LinearRing:Ge(Ee.prototype.readLinearRing),Polygon:Ge(Ee.prototype.readPolygon),MultiPolygon:Ge(Ee.prototype.readMultiPolygon),Surface:Ge(ae.prototype.readSurface),MultiSurface:Ge(ae.prototype.readMultiSurface),Curve:Ge(ae.prototype.readCurve),MultiCurve:Ge(ae.prototype.readMultiCurve),Envelope:Ge(ae.prototype.readEnvelope)}};ae.prototype.MULTICURVE_PARSERS={"http://www.opengis.net/gml":{curveMember:lt(ae.prototype.curveMemberParser),curveMembers:lt(ae.prototype.curveMemberParser)}};ae.prototype.MULTISURFACE_PARSERS={"http://www.opengis.net/gml":{surfaceMember:lt(ae.prototype.surfaceMemberParser),surfaceMembers:lt(ae.prototype.surfaceMemberParser)}};ae.prototype.CURVEMEMBER_PARSERS={"http://www.opengis.net/gml":{LineString:lt(Ee.prototype.readLineString),Curve:lt(ae.prototype.readCurve)}};ae.prototype.SURFACEMEMBER_PARSERS={"http://www.opengis.net/gml":{Polygon:lt(Ee.prototype.readPolygon),Surface:lt(ae.prototype.readSurface)}};ae.prototype.SURFACE_PARSERS={"http://www.opengis.net/gml":{patches:Ge(ae.prototype.readPatch)}};ae.prototype.CURVE_PARSERS={"http://www.opengis.net/gml":{segments:Ge(ae.prototype.readSegment)}};ae.prototype.ENVELOPE_PARSERS={"http://www.opengis.net/gml":{lowerCorner:lt(ae.prototype.readFlatPosList),upperCorner:lt(ae.prototype.readFlatPosList)}};ae.prototype.PATCHES_PARSERS={"http://www.opengis.net/gml":{PolygonPatch:Ge(ae.prototype.readPolygonPatch)}};ae.prototype.SEGMENTS_PARSERS={"http://www.opengis.net/gml":{LineStringSegment:WT(ae.prototype.readLineStringSegment)}};Ee.prototype.RING_PARSERS={"http://www.opengis.net/gml":{LinearRing:Ge(Ee.prototype.readFlatLinearRing),Ring:Ge(ae.prototype.readFlatCurveRing)}};ae.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml":{exterior:_e(ae.prototype.writeRing),interior:_e(ae.prototype.writeRing)}};ae.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml":{lowerCorner:_e(ir),upperCorner:_e(ir)}};ae.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{surfaceMember:_e(ae.prototype.writeSurfaceOrPolygonMember),polygonMember:_e(ae.prototype.writeSurfaceOrPolygonMember)}};ae.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{pointMember:_e(ae.prototype.writePointMember)}};ae.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{lineStringMember:_e(ae.prototype.writeLineStringOrCurveMember),curveMember:_e(ae.prototype.writeLineStringOrCurveMember)}};ae.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml":{Curve:_e(ae.prototype.writeCurveOrLineString),MultiCurve:_e(ae.prototype.writeMultiCurveOrLineString),Point:_e(ae.prototype.writePoint),MultiPoint:_e(ae.prototype.writeMultiPoint),LineString:_e(ae.prototype.writeCurveOrLineString),MultiLineString:_e(ae.prototype.writeMultiCurveOrLineString),LinearRing:_e(ae.prototype.writeLinearRing),Polygon:_e(ae.prototype.writeSurfaceOrPolygon),MultiPolygon:_e(ae.prototype.writeMultiSurfaceOrPolygon),Surface:_e(ae.prototype.writeSurfaceOrPolygon),MultiSurface:_e(ae.prototype.writeMultiSurfaceOrPolygon),Envelope:_e(ae.prototype.writeEnvelope)}};const YT={type:"wms",title:"WMS: Sentinel-2 Satellitenbilder",description:"Web Map Service mit hochauflösenden Satellitenbildern vom BKG. Zeigt Hamburg aus dem Copernicus Sentinel-2 Deutschlandmosaik.",url:"https://sgx.geodatenzentrum.de/wms_sentinel2_de",params:{LAYERS:"rgb",FORMAT:"image/png",VERSION:"1.3.0",TRANSPARENT:!1},center:[9.993,53.551],zoom:12},JT={type:"osm",title:"Projektions-Playground",description:"Interaktive Karte zum Erkunden von Projektionen. Nutze map.getView().getCenter() in der DevTools-Console.",center:[9.993,53.551],zoom:12},QT={wms_basic:YT,projection_demo:JT},eR={type:"wfs",title:"WFS: Deutsche Städte",description:"Web Feature Service mit Vektordaten. Zeigt Städte in Deutschland aus Natural Earth Daten. Klicke auf Features für Details.",url:"https://ahocevar.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=ne:ne_10m_populated_places&outputFormat=application/json&bbox=5.5,47.0,15.5,55.5,EPSG:4326&maxFeatures=100",center:[10.5,51],zoom:6},tR={wfs_basic:eR},nR={key:0,class:"map-playground"},rR={class:"map-playground__info"},iR={class:"muted"},sR={key:0,class:"feature-info"},oR={class:"feature-properties"},aR={class:"property-key"},lR={class:"property-value"},cR={key:1,class:"muted"},uR={__name:"MapPlayground",props:{configId:{type:String,required:!0}},setup(t){const e=t,n=Tt(null),r=Tt(null),i=Tt(!0);let s,o,a=null;const l=ne(()=>QT[e.configId]||tR[e.configId]),c=()=>{var d,f;n.value&&(s=new aP({target:n.value,layers:[new ym({source:new hT})],view:new Hn({center:jg(((d=l.value)==null?void 0:d.center)||[10,51]),zoom:((f=l.value)==null?void 0:f.zoom)||5})}),window.map=s,s.on("singleclick",g=>{var m;r.value=null,a&&(a.setStyle(void 0),a=null),((m=l.value)==null?void 0:m.type)==="wfs"&&o&&s.forEachFeatureAtPixel(g.pixel,p=>{a=p;const _=new Rr({image:new Us({radius:12,fill:new xr({color:"rgba(255, 140, 0, 0.8)"}),stroke:new ei({color:"#1e5945",width:3})}),stroke:new ei({color:"#1e5945",width:4}),fill:new xr({color:"rgba(255, 140, 0, 0.4)"})});p.setStyle(_);const y={...p.getProperties()};delete y.geometry;const w=["NAME","NAMEASCII","name","FEATURECLA","TYPE","type","POP_MAX","GN_POP","population","LATITUDE","LONGITUDE","lat","lon","ADM0NAME","SOV0NAME","country","ADM1NAME","state","TIMEZONE","timezone"],b={};for(const[E,P]of Object.entries(y))if(w.includes(E)){let k=E;E==="NAMEASCII"?k="Name (ASCII)":E==="FEATURECLA"?k="Type":E==="POP_MAX"||E==="GN_POP"?k="Population":E==="ADM0NAME"||E==="SOV0NAME"?k="Country":E==="ADM1NAME"?k="State/Region":E==="TIMEZONE"?k="Timezone":E==="LATITUDE"?k="Latitude":E==="LONGITUDE"&&(k="Longitude"),b[k]=P}r.value=Object.keys(b).length>0?b:y})}),u())},u=async()=>{if(!(!l.value||!s)){if(o&&s.removeLayer(o),i.value=!0,l.value.center&&s.getView().animate({center:jg(l.value.center),zoom:l.value.zoom||5,duration:500}),l.value.type==="wms")o=new ym({source:new gT({url:l.value.url,params:l.value.params,crossOrigin:"anonymous"})}),s.addLayer(o);else if(l.value.type==="wfs"){const d=new wT,f=new Rr({image:new Us({radius:8,fill:new xr({color:"rgba(255, 140, 0, 0.8)"}),stroke:new ei({color:"#ff6600",width:2})}),stroke:new ei({color:"#ff6600",width:3}),fill:new xr({color:"rgba(255, 140, 0, 0.3)"})});o=new HP({source:d,style:f}),s.addLayer(o);try{const g=await fetch(l.value.url),m=g.headers.get("content-type");let p;if(m&&m.includes("application/json")){const _=await g.json();p=new MT().readFeatures(_,{featureProjection:s.getView().getProjection()})}else{const _=await g.text();p=new ae({featureNS:"http://inspire.ec.europa.eu/schemas/cp/4.0",featureType:"CadastralParcel"}).readFeatures(_,{dataProjection:"EPSG:25832",featureProjection:s.getView().getProjection()})}if(d.addFeatures(p),p.length>0){const _=d.getExtent();s.getView().fit(_,{padding:[50,50,50,50],duration:500})}}catch{}}}},h=()=>{i.value=!i.value,o&&o.setVisible(i.value)};return gc(c),Tn(()=>e.configId,()=>{u()}),$h(()=>{s&&(s.setTarget(void 0),window.map=void 0)}),(d,f)=>l.value?(F(),B("div",nR,[S("div",rR,[S("p",iR,X(l.value.description),1),l.value.type==="wms"||l.value.type==="wfs"?(F(),B("button",{key:0,class:"ghost-btn",onClick:h},X(i.value?"Hide":"Show")+" layer",1)):Ye("",!0)]),S("div",{ref_key:"mapTarget",ref:n,class:"map-container"},null,512),r.value?(F(),B("div",sR,[f[0]||(f[0]=S("h4",null,"Feature Properties",-1)),S("div",oR,[(F(!0),B(Re,null,gt(r.value,(g,m)=>(F(),B("div",{key:m,class:"property-row"},[S("span",aR,X(m),1),S("span",lR,X(g),1)]))),128))])])):Ye("",!0)])):(F(),B("p",cR,"Configuration not found."))}},Im=wt(uR,[["__scopeId","data-v-a1b510aa"]]);function hR(t){const e=Object.keys(t.defs),n=e.length;let r,i;for(r=0;r<n;++r){const s=e[r];if(!Ae(s)){const o=t.defs(s);let a=o.units;!a&&o.projName==="longlat"&&(a="degrees"),k_(new vd({code:s,axisOrientation:o.axis,metersPerUnit:o.to_meter,units:a}))}}for(r=0;r<n;++r){const s=e[r],o=Ae(s);for(i=0;i<n;++i){const a=e[i],l=Ae(a);if(!f_(s,a))if(t.defs[s]===t.defs[a])lh([o,l]);else{const c=t(s,a);A2(o,l,Wg(o,l,c.forward),Wg(l,o,c.inverse))}}}}function dR(t){t("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),t("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),t("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var e=1;e<=60;++e)t("EPSG:"+(32600+e),"+proj=utm +zone="+e+" +datum=WGS84 +units=m"),t("EPSG:"+(32700+e),"+proj=utm +zone="+e+" +south +datum=WGS84 +units=m");t("EPSG:5041","+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),t("EPSG:5042","+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),t.WGS84=t["EPSG:4326"],t["EPSG:3785"]=t["EPSG:3857"],t.GOOGLE=t["EPSG:3857"],t["EPSG:900913"]=t["EPSG:3857"],t["EPSG:102113"]=t["EPSG:3857"]}var Gi=1,zi=2,Rs=3,fR=4,xh=5,Lm=6378137,gR=6356752314e-3,Om=.0066943799901413165,Bo=484813681109536e-20,G=Math.PI/2,mR=.16666666666666666,pR=.04722222222222222,_R=.022156084656084655,K=1e-10,ft=.017453292519943295,an=57.29577951308232,Ue=Math.PI/4,ma=Math.PI*2,_t=3.14159265359,un={};un.greenwich=0;un.lisbon=-9.131906111111;un.paris=2.337229166667;un.bogota=-74.080916666667;un.madrid=-3.687938888889;un.rome=12.452333333333;un.bern=7.439583333333;un.jakarta=106.807719444444;un.ferro=-17.666666666667;un.brussels=4.367975;un.stockholm=18.058277777778;un.athens=23.7163375;un.oslo=10.722916666667;const yR={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var Fm=/[\s_\-\/\(\)]/g;function fi(t,e){if(t[e])return t[e];for(var n=Object.keys(t),r=e.toLowerCase().replace(Fm,""),i=-1,s,o;++i<n.length;)if(s=n[i],o=s.toLowerCase().replace(Fm,""),o===r)return t[s]}function Ch(t){var e={},n=t.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,l){var c=l.split("=");return c.push(!0),a[c[0].toLowerCase()]=c[1],a},{}),r,i,s,o={proj:"projName",datum:"datumCode",rf:function(a){e.rf=parseFloat(a)},lat_0:function(a){e.lat0=a*ft},lat_1:function(a){e.lat1=a*ft},lat_2:function(a){e.lat2=a*ft},lat_ts:function(a){e.lat_ts=a*ft},lon_0:function(a){e.long0=a*ft},lon_1:function(a){e.long1=a*ft},lon_2:function(a){e.long2=a*ft},alpha:function(a){e.alpha=parseFloat(a)*ft},gamma:function(a){e.rectified_grid_angle=parseFloat(a)*ft},lonc:function(a){e.longc=a*ft},x_0:function(a){e.x0=parseFloat(a)},y_0:function(a){e.y0=parseFloat(a)},k_0:function(a){e.k0=parseFloat(a)},k:function(a){e.k0=parseFloat(a)},a:function(a){e.a=parseFloat(a)},b:function(a){e.b=parseFloat(a)},r:function(a){e.a=e.b=parseFloat(a)},r_a:function(){e.R_A=!0},zone:function(a){e.zone=parseInt(a,10)},south:function(){e.utmSouth=!0},towgs84:function(a){e.datum_params=a.split(",").map(function(l){return parseFloat(l)})},to_meter:function(a){e.to_meter=parseFloat(a)},units:function(a){e.units=a;var l=fi(yR,a);l&&(e.to_meter=l.to_meter)},from_greenwich:function(a){e.from_greenwich=a*ft},pm:function(a){var l=fi(un,a);e.from_greenwich=(l||parseFloat(a))*ft},nadgrids:function(a){a==="@null"?e.datumCode="none":e.nadgrids=a},axis:function(a){var l="ewnsud";a.length===3&&l.indexOf(a.substr(0,1))!==-1&&l.indexOf(a.substr(1,1))!==-1&&l.indexOf(a.substr(2,1))!==-1&&(e.axis=a)},approx:function(){e.approx=!0},over:function(){e.over=!0}};for(r in n)i=n[r],r in o?(s=o[r],typeof s=="function"?s(i):e[s]=i):e[r]=i;return typeof e.datumCode=="string"&&e.datumCode!=="WGS84"&&(e.datumCode=e.datumCode.toLowerCase()),e.projStr=t,e}class Wy{static getId(e){const n=e.find(r=>Array.isArray(r)&&r[0]==="ID");return n&&n.length>=3?{authority:n[1],code:parseInt(n[2],10)}:null}static convertUnit(e,n="unit"){if(!e||e.length<3)return{type:n,name:"unknown",conversion_factor:null};const r=e[1],i=parseFloat(e[2])||null,s=e.find(a=>Array.isArray(a)&&a[0]==="ID"),o=s?{authority:s[1],code:parseInt(s[2],10)}:null;return{type:n,name:r,conversion_factor:i,id:o}}static convertAxis(e){const n=e[1]||"Unknown";let r;const i=n.match(/^\((.)\)$/);if(i){const c=i[1].toUpperCase();if(c==="E")r="east";else if(c==="N")r="north";else if(c==="U")r="up";else throw new Error(`Unknown axis abbreviation: ${c}`)}else r=e[2]?e[2].toLowerCase():"unknown";const s=e.find(c=>Array.isArray(c)&&c[0]==="ORDER"),o=s?parseInt(s[1],10):null,a=e.find(c=>Array.isArray(c)&&(c[0]==="LENGTHUNIT"||c[0]==="ANGLEUNIT"||c[0]==="SCALEUNIT")),l=this.convertUnit(a);return{name:n,direction:r,unit:l,order:o}}static extractAxes(e){return e.filter(n=>Array.isArray(n)&&n[0]==="AXIS").map(n=>this.convertAxis(n)).sort((n,r)=>(n.order||0)-(r.order||0))}static convert(e,n={}){switch(e[0]){case"PROJCRS":n.type="ProjectedCRS",n.name=e[1],n.base_crs=e.find(d=>Array.isArray(d)&&d[0]==="BASEGEOGCRS")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="BASEGEOGCRS")):null,n.conversion=e.find(d=>Array.isArray(d)&&d[0]==="CONVERSION")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="CONVERSION")):null;const r=e.find(d=>Array.isArray(d)&&d[0]==="CS");r&&(n.coordinate_system={type:r[1],axis:this.extractAxes(e)});const i=e.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT");if(i){const d=this.convertUnit(i);n.coordinate_system.unit=d}n.id=this.getId(e);break;case"BASEGEOGCRS":case"GEOGCRS":n.type="GeographicCRS",n.name=e[1];const s=e.find(d=>Array.isArray(d)&&(d[0]==="DATUM"||d[0]==="ENSEMBLE"));if(s){const d=this.convert(s);s[0]==="ENSEMBLE"?n.datum_ensemble=d:n.datum=d;const f=e.find(g=>Array.isArray(g)&&g[0]==="PRIMEM");f&&f[1]!=="Greenwich"&&(d.prime_meridian={name:f[1],longitude:parseFloat(f[2])})}n.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(e)},n.id=this.getId(e);break;case"DATUM":n.type="GeodeticReferenceFrame",n.name=e[1],n.ellipsoid=e.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":n.type="DatumEnsemble",n.name=e[1],n.members=e.filter(d=>Array.isArray(d)&&d[0]==="MEMBER").map(d=>({type:"DatumEnsembleMember",name:d[1],id:this.getId(d)}));const o=e.find(d=>Array.isArray(d)&&d[0]==="ENSEMBLEACCURACY");o&&(n.accuracy=parseFloat(o[1]));const a=e.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID");a&&(n.ellipsoid=this.convert(a)),n.id=this.getId(e);break;case"ELLIPSOID":n.type="Ellipsoid",n.name=e[1],n.semi_major_axis=parseFloat(e[2]),n.inverse_flattening=parseFloat(e[3]),e.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT")&&this.convert(e.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT"),n);break;case"CONVERSION":n.type="Conversion",n.name=e[1],n.method=e.find(d=>Array.isArray(d)&&d[0]==="METHOD")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="METHOD")):null,n.parameters=e.filter(d=>Array.isArray(d)&&d[0]==="PARAMETER").map(d=>this.convert(d));break;case"METHOD":n.type="Method",n.name=e[1],n.id=this.getId(e);break;case"PARAMETER":n.type="Parameter",n.name=e[1],n.value=parseFloat(e[2]),n.unit=this.convertUnit(e.find(d=>Array.isArray(d)&&(d[0]==="LENGTHUNIT"||d[0]==="ANGLEUNIT"||d[0]==="SCALEUNIT"))),n.id=this.getId(e);break;case"BOUNDCRS":n.type="BoundCRS";const l=e.find(d=>Array.isArray(d)&&d[0]==="SOURCECRS");if(l){const d=l.find(f=>Array.isArray(f));n.source_crs=d?this.convert(d):null}const c=e.find(d=>Array.isArray(d)&&d[0]==="TARGETCRS");if(c){const d=c.find(f=>Array.isArray(f));n.target_crs=d?this.convert(d):null}const u=e.find(d=>Array.isArray(d)&&d[0]==="ABRIDGEDTRANSFORMATION");u?n.transformation=this.convert(u):n.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(n.type="Transformation",n.name=e[1],n.method=e.find(d=>Array.isArray(d)&&d[0]==="METHOD")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="METHOD")):null,n.parameters=e.filter(d=>Array.isArray(d)&&(d[0]==="PARAMETER"||d[0]==="PARAMETERFILE")).map(d=>{if(d[0]==="PARAMETER")return this.convert(d);if(d[0]==="PARAMETERFILE")return{name:d[1],value:d[2],id:{authority:"EPSG",code:8656}}}),n.parameters.length===7){const d=n.parameters[6];d.name==="Scale difference"&&(d.value=Math.round((d.value-1)*1e12)/1e6)}n.id=this.getId(e);break;case"AXIS":n.coordinate_system||(n.coordinate_system={type:"unspecified",axis:[]}),n.coordinate_system.axis.push(this.convertAxis(e));break;case"LENGTHUNIT":const h=this.convertUnit(e,"LinearUnit");n.coordinate_system&&n.coordinate_system.axis&&n.coordinate_system.axis.forEach(d=>{d.unit||(d.unit=h)}),h.conversion_factor&&h.conversion_factor!==1&&n.semi_major_axis&&(n.semi_major_axis={value:n.semi_major_axis,unit:h});break;default:n.keyword=e[0];break}return n}}class vR extends Wy{static convert(e,n={}){return super.convert(e,n),n.coordinate_system&&n.coordinate_system.subtype==="Cartesian"&&delete n.coordinate_system,n.usage&&delete n.usage,n}}class wR extends Wy{static convert(e,n={}){super.convert(e,n);const r=e.find(s=>Array.isArray(s)&&s[0]==="CS");r&&(n.coordinate_system={subtype:r[1],axis:this.extractAxes(e)});const i=e.find(s=>Array.isArray(s)&&s[0]==="USAGE");if(i){const s=i.find(l=>Array.isArray(l)&&l[0]==="SCOPE"),o=i.find(l=>Array.isArray(l)&&l[0]==="AREA"),a=i.find(l=>Array.isArray(l)&&l[0]==="BBOX");n.usage={},s&&(n.usage.scope=s[1]),o&&(n.usage.area=o[1]),a&&(n.usage.bbox=a.slice(1))}return n}}function SR(t){return t.find(e=>Array.isArray(e)&&e[0]==="USAGE")?"2019":(t.find(e=>Array.isArray(e)&&e[0]==="CS")||t[0]==="BOUNDCRS"||t[0]==="PROJCRS"||t[0]==="GEOGCRS","2015")}function bR(t){return(SR(t)==="2019"?wR:vR).convert(t)}function ER(t){const e=t.toUpperCase();return e.includes("PROJCRS")||e.includes("GEOGCRS")||e.includes("BOUNDCRS")||e.includes("VERTCRS")||e.includes("LENGTHUNIT")||e.includes("ANGLEUNIT")||e.includes("SCALEUNIT")?"WKT2":(e.includes("PROJCS")||e.includes("GEOGCS")||e.includes("LOCAL_CS")||e.includes("VERT_CS")||e.includes("UNIT"),"WKT1")}var pa=1,Vy=2,Uy=3,Yl=4,Ky=5,nf=-1,MR=/\s/,xR=/[A-Za-z]/,CR=/[A-Za-z84_]/,Kc=/[,\]]/,$y=/[\d\.E\-\+]/;function Dr(t){if(typeof t!="string")throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=pa}Dr.prototype.readCharicter=function(){var t=this.text[this.place++];if(this.state!==Yl)for(;MR.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case pa:return this.neutral(t);case Vy:return this.keyword(t);case Yl:return this.quoted(t);case Ky:return this.afterquote(t);case Uy:return this.number(t);case nf:return}};Dr.prototype.afterquote=function(t){if(t==='"'){this.word+='"',this.state=Yl;return}if(Kc.test(t)){this.word=this.word.trim(),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in afterquote yet, index '+this.place)};Dr.prototype.afterItem=function(t){if(t===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=pa;return}if(t==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=pa,this.currentObject=this.stack.pop(),this.currentObject||(this.state=nf);return}};Dr.prototype.number=function(t){if($y.test(t)){this.word+=t;return}if(Kc.test(t)){this.word=parseFloat(this.word),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in number yet, index '+this.place)};Dr.prototype.quoted=function(t){if(t==='"'){this.state=Ky;return}this.word+=t};Dr.prototype.keyword=function(t){if(CR.test(t)){this.word+=t;return}if(t==="["){var e=[];e.push(this.word),this.level++,this.root===null?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,this.state=pa;return}if(Kc.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in keyword yet, index '+this.place)};Dr.prototype.neutral=function(t){if(xR.test(t)){this.word=t,this.state=Vy;return}if(t==='"'){this.word="",this.state=Yl;return}if($y.test(t)){this.word=t,this.state=Uy;return}if(Kc.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in neutral yet, index '+this.place)};Dr.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===nf)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function kR(t){var e=new Dr(t);return e.output()}function Ru(t,e,n){Array.isArray(e)&&(n.unshift(e),e=null);var r=e?{}:t,i=n.reduce(function(s,o){return ms(o,s),s},r);e&&(t[e]=i)}function ms(t,e){if(!Array.isArray(t)){e[t]=!0;return}var n=t.shift();if(n==="PARAMETER"&&(n=t.shift()),t.length===1){if(Array.isArray(t[0])){e[n]={},ms(t[0],e[n]);return}e[n]=t[0];return}if(!t.length){e[n]=!0;return}if(n==="TOWGS84"){e[n]=t;return}if(n==="AXIS"){n in e||(e[n]=[]),e[n].push(t);return}Array.isArray(n)||(e[n]={});var r;switch(n){case"UNIT":case"PRIMEM":case"VERT_DATUM":e[n]={name:t[0].toLowerCase(),convert:t[1]},t.length===3&&ms(t[2],e[n]);return;case"SPHEROID":case"ELLIPSOID":e[n]={name:t[0],a:t[1],rf:t[2]},t.length===4&&ms(t[3],e[n]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":t[0]=["name",t[0]],Ru(e,n,t);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":t[0]=["name",t[0]],Ru(e,n,t),e[n].type=n;return;default:for(r=-1;++r<t.length;)if(!Array.isArray(t[r]))return ms(t,e[n]);return Ru(e,n,t)}}var PR=.017453292519943295;function Ln(t){return t*PR}function qy(t){const e=(t.projName||"").toLowerCase().replace(/_/g," ");!t.long0&&t.longc&&(e==="albers conic equal area"||e==="lambert azimuthal equal area")&&(t.long0=t.longc),!t.lat_ts&&t.lat1&&(e==="stereographic south pole"||e==="polar stereographic (variant b)")?(t.lat0=Ln(t.lat1>0?90:-90),t.lat_ts=t.lat1,delete t.lat1):!t.lat_ts&&t.lat0&&(e==="polar stereographic"||e==="polar stereographic (variant a)")&&(t.lat_ts=t.lat0,t.lat0=Ln(t.lat0>0?90:-90),delete t.lat1)}function Nm(t){let e={units:null,to_meter:void 0};return typeof t=="string"?(e.units=t.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.units==="meter"&&(e.to_meter=1)):t&&t.name&&(e.units=t.name.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.to_meter=t.conversion_factor),e}function Dm(t){return typeof t=="object"?t.value*t.unit.conversion_factor:t}function Gm(t,e){t.ellipsoid.radius?(e.a=t.ellipsoid.radius,e.rf=0):(e.a=Dm(t.ellipsoid.semi_major_axis),t.ellipsoid.inverse_flattening!==void 0?e.rf=t.ellipsoid.inverse_flattening:t.ellipsoid.semi_major_axis!==void 0&&t.ellipsoid.semi_minor_axis!==void 0&&(e.rf=e.a/(e.a-Dm(t.ellipsoid.semi_minor_axis))))}function Jl(t,e={}){return!t||typeof t!="object"?t:t.type==="BoundCRS"?(Jl(t.source_crs,e),t.transformation&&(t.transformation.method&&t.transformation.method.name==="NTv2"?e.nadgrids=t.transformation.parameters[0].value:e.datum_params=t.transformation.parameters.map(n=>n.value)),e):(Object.keys(t).forEach(n=>{const r=t[n];if(r!==null)switch(n){case"name":if(e.srsCode)break;e.name=r,e.srsCode=r;break;case"type":r==="GeographicCRS"?e.projName="longlat":r==="ProjectedCRS"&&t.conversion&&t.conversion.method&&(e.projName=t.conversion.method.name);break;case"datum":case"datum_ensemble":r.ellipsoid&&(e.ellps=r.ellipsoid.name,Gm(r,e)),r.prime_meridian&&(e.from_greenwich=r.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":e.ellps=r.name,Gm(r,e);break;case"prime_meridian":e.long0=(r.longitude||0)*Math.PI/180;break;case"coordinate_system":if(r.axis){if(e.axis=r.axis.map(i=>{const s=i.direction;if(s==="east")return"e";if(s==="north")return"n";if(s==="west")return"w";if(s==="south")return"s";throw new Error(`Unknown axis direction: ${s}`)}).join("")+"u",r.unit){const{units:i,to_meter:s}=Nm(r.unit);e.units=i,e.to_meter=s}else if(r.axis[0]&&r.axis[0].unit){const{units:i,to_meter:s}=Nm(r.axis[0].unit);e.units=i,e.to_meter=s}}break;case"id":r.authority&&r.code&&(e.title=r.authority+":"+r.code);break;case"conversion":r.method&&r.method.name&&(e.projName=r.method.name),r.parameters&&r.parameters.forEach(i=>{const s=i.name.toLowerCase().replace(/\s+/g,"_"),o=i.value;i.unit&&i.unit.conversion_factor?e[s]=o*i.unit.conversion_factor:i.unit==="degree"?e[s]=o*Math.PI/180:e[s]=o});break;case"unit":r.name&&(e.units=r.name.toLowerCase(),e.units==="metre"&&(e.units="meter")),r.conversion_factor&&(e.to_meter=r.conversion_factor);break;case"base_crs":Jl(r,e),e.datumCode=r.id?r.id.authority+"_"+r.id.code:r.name;break}}),e.latitude_of_false_origin!==void 0&&(e.lat0=e.latitude_of_false_origin),e.longitude_of_false_origin!==void 0&&(e.long0=e.longitude_of_false_origin),e.latitude_of_standard_parallel!==void 0&&(e.lat0=e.latitude_of_standard_parallel,e.lat1=e.latitude_of_standard_parallel),e.latitude_of_1st_standard_parallel!==void 0&&(e.lat1=e.latitude_of_1st_standard_parallel),e.latitude_of_2nd_standard_parallel!==void 0&&(e.lat2=e.latitude_of_2nd_standard_parallel),e.latitude_of_projection_centre!==void 0&&(e.lat0=e.latitude_of_projection_centre),e.longitude_of_projection_centre!==void 0&&(e.longc=e.longitude_of_projection_centre),e.easting_at_false_origin!==void 0&&(e.x0=e.easting_at_false_origin),e.northing_at_false_origin!==void 0&&(e.y0=e.northing_at_false_origin),e.latitude_of_natural_origin!==void 0&&(e.lat0=e.latitude_of_natural_origin),e.longitude_of_natural_origin!==void 0&&(e.long0=e.longitude_of_natural_origin),e.longitude_of_origin!==void 0&&(e.long0=e.longitude_of_origin),e.false_easting!==void 0&&(e.x0=e.false_easting),e.easting_at_projection_centre&&(e.x0=e.easting_at_projection_centre),e.false_northing!==void 0&&(e.y0=e.false_northing),e.northing_at_projection_centre&&(e.y0=e.northing_at_projection_centre),e.standard_parallel_1!==void 0&&(e.lat1=e.standard_parallel_1),e.standard_parallel_2!==void 0&&(e.lat2=e.standard_parallel_2),e.scale_factor_at_natural_origin!==void 0&&(e.k0=e.scale_factor_at_natural_origin),e.scale_factor_at_projection_centre!==void 0&&(e.k0=e.scale_factor_at_projection_centre),e.scale_factor_on_pseudo_standard_parallel!==void 0&&(e.k0=e.scale_factor_on_pseudo_standard_parallel),e.azimuth!==void 0&&(e.alpha=e.azimuth),e.azimuth_at_projection_centre!==void 0&&(e.alpha=e.azimuth_at_projection_centre),e.angle_from_rectified_to_skew_grid&&(e.rectified_grid_angle=e.angle_from_rectified_to_skew_grid),qy(e),e)}var TR=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function RR(t,e){var n=e[0],r=e[1];!(n in t)&&r in t&&(t[n]=t[r],e.length===3&&(t[n]=e[2](t[n])))}function Hy(t){for(var e=Object.keys(t),n=0,r=e.length;n<r;++n){var i=e[n];TR.indexOf(i)!==-1&&AR(t[i]),typeof t[i]=="object"&&Hy(t[i])}}function AR(t){if(t.AUTHORITY){var e=Object.keys(t.AUTHORITY)[0];e&&e in t.AUTHORITY&&(t.title=e+":"+t.AUTHORITY[e])}if(t.type==="GEOGCS"?t.projName="longlat":t.type==="LOCAL_CS"?(t.projName="identity",t.local=!0):typeof t.PROJECTION=="object"?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.AXIS){for(var n="",r=0,i=t.AXIS.length;r<i;++r){var s=[t.AXIS[r][0].toLowerCase(),t.AXIS[r][1].toLowerCase()];s[0].indexOf("north")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="north"?n+="n":s[0].indexOf("south")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="south"?n+="s":s[0].indexOf("east")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="east"?n+="e":(s[0].indexOf("west")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="west")&&(n+="w")}n.length===2&&(n+="u"),n.length===3&&(t.axis=n)}t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.UNIT.convert&&(t.type==="GEOGCS"?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var o=t.GEOGCS;t.type==="GEOGCS"&&(o=t),o&&(o.DATUM?t.datumCode=o.DATUM.name.toLowerCase():t.datumCode=o.name.toLowerCase(),t.datumCode.slice(0,2)==="d_"&&(t.datumCode=t.datumCode.slice(2)),t.datumCode==="new_zealand_1949"&&(t.datumCode="nzgd49"),(t.datumCode==="wgs_1984"||t.datumCode==="world_geodetic_system_1984")&&(t.PROJECTION==="Mercator_Auxiliary_Sphere"&&(t.sphere=!0),t.datumCode="wgs84"),t.datumCode==="belge_1972"&&(t.datumCode="rnb72"),o.DATUM&&o.DATUM.SPHEROID&&(t.ellps=o.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),t.ellps.toLowerCase().slice(0,13)==="international"&&(t.ellps="intl"),t.a=o.DATUM.SPHEROID.a,t.rf=parseFloat(o.DATUM.SPHEROID.rf,10)),o.DATUM&&o.DATUM.TOWGS84&&(t.datum_params=o.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),t.datumCode==="ch1903+"&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a),t.rectified_grid_angle&&(t.rectified_grid_angle=Ln(t.rectified_grid_angle));function a(u){var h=t.to_meter||1;return u*h}var l=function(u){return RR(t,u)},c=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Ln],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Ln],["x0","false_easting",a],["y0","false_northing",a],["long0","central_meridian",Ln],["lat0","latitude_of_origin",Ln],["lat0","standard_parallel_1",Ln],["lat1","standard_parallel_1",Ln],["lat2","standard_parallel_2",Ln],["azimuth","Azimuth"],["alpha","azimuth",Ln],["srsCode","name"]];c.forEach(l),qy(t)}function Ql(t){if(typeof t=="object")return Jl(t);const e=ER(t);var n=kR(t);if(e==="WKT2"){const s=bR(n);return Jl(s)}var r=n[0],i={};return ms(n,i),Hy(i),i[r]}function xt(t){var e=this;if(arguments.length===2){var n=arguments[1];typeof n=="string"?n.charAt(0)==="+"?xt[t]=Ch(arguments[1]):xt[t]=Ql(arguments[1]):n&&typeof n=="object"&&!("projName"in n)?xt[t]=Ql(arguments[1]):(xt[t]=n,n||delete xt[t])}else if(arguments.length===1){if(Array.isArray(t))return t.map(function(r){return Array.isArray(r)?xt.apply(e,r):xt(r)});if(typeof t=="string"){if(t in xt)return xt[t]}else"EPSG"in t?xt["EPSG:"+t.EPSG]=t:"ESRI"in t?xt["ESRI:"+t.ESRI]=t:"IAU2000"in t?xt["IAU2000:"+t.IAU2000]=t:console.log(t);return}}dR(xt);function IR(t){return typeof t=="string"}function LR(t){return t in xt}function OR(t){return t.indexOf("+")!==0&&t.indexOf("[")!==-1||typeof t=="object"&&!("srsCode"in t)}var FR=["3857","900913","3785","102113"];function NR(t){var e=fi(t,"authority");if(e){var n=fi(e,"epsg");return n&&FR.indexOf(n)>-1}}function DR(t){var e=fi(t,"extension");if(e)return fi(e,"proj4")}function GR(t){return t[0]==="+"}function zR(t){if(IR(t)){if(LR(t))return xt[t];if(OR(t)){var e=Ql(t);if(NR(e))return xt["EPSG:3857"];var n=DR(e);return n?Ch(n):e}if(GR(t))return Ch(t)}else return"projName"in t?t:Ql(t)}function zm(t,e){t=t||{};var n,r;if(!e)return t;for(r in e)n=e[r],n!==void 0&&(t[r]=n);return t}function ar(t,e,n){var r=t*e;return n/Math.sqrt(1-r*r)}function Fa(t){return t<0?-1:1}function Q(t,e){return e||Math.abs(t)<=_t?t:t-Fa(t)*ma}function Dn(t,e,n){var r=t*n,i=.5*t;return r=Math.pow((1-r)/(1+r),i),Math.tan(.5*(G-e))/r}function _a(t,e){for(var n=.5*t,r,i,s=G-2*Math.atan(e),o=0;o<=15;o++)if(r=t*Math.sin(s),i=G-2*Math.atan(e*Math.pow((1-r)/(1+r),n))-s,s+=i,Math.abs(i)<=1e-10)return s;return-9999}function BR(){var t=this.b/this.a;this.es=1-t*t,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=ar(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function jR(t){var e=t.x,n=t.y;if(n*an>90&&n*an<-90&&e*an>180&&e*an<-180)return null;var r,i;if(Math.abs(Math.abs(n)-G)<=K)return null;if(this.sphere)r=this.x0+this.a*this.k0*Q(e-this.long0,this.over),i=this.y0+this.a*this.k0*Math.log(Math.tan(Ue+.5*n));else{var s=Math.sin(n),o=Dn(this.e,n,s);r=this.x0+this.a*this.k0*Q(e-this.long0,this.over),i=this.y0-this.a*this.k0*Math.log(o)}return t.x=r,t.y=i,t}function WR(t){var e=t.x-this.x0,n=t.y-this.y0,r,i;if(this.sphere)i=G-2*Math.atan(Math.exp(-n/(this.a*this.k0)));else{var s=Math.exp(-n/(this.a*this.k0));if(i=_a(this.e,s),i===-9999)return null}return r=Q(this.long0+e/(this.a*this.k0),this.over),t.x=r,t.y=i,t}var VR=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"];const UR={init:BR,forward:jR,inverse:WR,names:VR};function KR(){}function Bm(t){return t}var Zy=["longlat","identity"];const $R={init:KR,forward:Bm,inverse:Bm,names:Zy};var qR=[UR,$R],Ci={},ps=[];function Xy(t,e){var n=ps.length;return t.names?(ps[n]=t,t.names.forEach(function(r){Ci[r.toLowerCase()]=n}),this):(console.log(e),!0)}function Yy(t){return t.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}function HR(t){if(!t)return!1;var e=t.toLowerCase();if(typeof Ci[e]<"u"&&ps[Ci[e]]||(e=Yy(e),e in Ci&&ps[Ci[e]]))return ps[Ci[e]]}function ZR(){qR.forEach(Xy)}const XR={start:ZR,add:Xy,get:HR};var Jy={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"},andrae:{a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"},clrk80:{a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:63558348467e-4,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};const YR=Jy.WGS84;function JR(t,e,n,r){var i=t*t,s=e*e,o=(i-s)/i,a=0;r?(t*=1-o*(mR+o*(pR+o*_R)),i=t*t,o=0):a=Math.sqrt(o);var l=(i-s)/s;return{es:o,e:a,ep2:l}}function QR(t,e,n,r,i){if(!t){var s=fi(Jy,r);s||(s=YR),t=s.a,e=s.b,n=s.rf}return n&&!e&&(e=(1-1/n)*t),(n===0||Math.abs(t-e)<K)&&(i=!0,e=t),{a:t,b:e,rf:n,sphere:i}}var vl={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-8.393,0.749,-10.276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"374,150,588"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"}};for(var eA in vl){var Au=vl[eA];Au.datumName&&(vl[Au.datumName]=Au)}function tA(t,e,n,r,i,s,o){var a={};return t===void 0||t==="none"?a.datum_type=xh:a.datum_type=fR,e&&(a.datum_params=e.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=Gi),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=zi,a.datum_params[3]*=Bo,a.datum_params[4]*=Bo,a.datum_params[5]*=Bo,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=Rs,a.grids=o),a.a=n,a.b=r,a.es=i,a.ep2=s,a}var rf={};function nA(t,e,n){return e instanceof ArrayBuffer?rA(t,e,n):{ready:iA(t,e)}}function rA(t,e,n){var r=!0;n!==void 0&&n.includeErrorFields===!1&&(r=!1);var i=new DataView(e),s=aA(i),o=lA(i,s),a=cA(i,o,s,r),l={header:o,subgrids:a};return rf[t]=l,l}async function iA(t,e){for(var n=[],r=await e.getImageCount(),i=r-1;i>=0;i--){var s=await e.getImage(i),o=await s.readRasters(),a=o,l=[s.getWidth(),s.getHeight()],c=s.getBoundingBox().map(jm),u=[s.fileDirectory.ModelPixelScale[0],s.fileDirectory.ModelPixelScale[1]].map(jm),h=c[0]+(l[0]-1)*u[0],d=c[3]-(l[1]-1)*u[1],f=a[0],g=a[1],m=[];for(let y=l[1]-1;y>=0;y--)for(let w=l[0]-1;w>=0;w--){var p=y*l[0]+w;m.push([-ri(g[p]),ri(f[p])])}n.push({del:u,lim:l,ll:[-h,d],cvs:m})}var _={header:{nSubgrids:r},subgrids:n};return rf[t]=_,_}function sA(t){if(t===void 0)return null;var e=t.split(",");return e.map(oA)}function oA(t){if(t.length===0)return null;var e=t[0]==="@";return e&&(t=t.slice(1)),t==="null"?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:t,mandatory:!e,grid:rf[t]||null,isNull:!1}}function jm(t){return t*Math.PI/180}function ri(t){return t/3600*Math.PI/180}function aA(t){var e=t.getInt32(8,!1);return e===11?!1:(e=t.getInt32(8,!0),e!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function lA(t,e){return{nFields:t.getInt32(8,e),nSubgridFields:t.getInt32(24,e),nSubgrids:t.getInt32(40,e),shiftType:kh(t,56,64).trim(),fromSemiMajorAxis:t.getFloat64(120,e),fromSemiMinorAxis:t.getFloat64(136,e),toSemiMajorAxis:t.getFloat64(152,e),toSemiMinorAxis:t.getFloat64(168,e)}}function kh(t,e,n){return String.fromCharCode.apply(null,new Uint8Array(t.buffer.slice(e,n)))}function cA(t,e,n,r){for(var i=176,s=[],o=0;o<e.nSubgrids;o++){var a=hA(t,i,n),l=dA(t,i,a,n,r),c=Math.round(1+(a.upperLongitude-a.lowerLongitude)/a.longitudeInterval),u=Math.round(1+(a.upperLatitude-a.lowerLatitude)/a.latitudeInterval);s.push({ll:[ri(a.lowerLongitude),ri(a.lowerLatitude)],del:[ri(a.longitudeInterval),ri(a.latitudeInterval)],lim:[c,u],count:a.gridNodeCount,cvs:uA(l)});var h=16;r===!1&&(h=8),i+=176+a.gridNodeCount*h}return s}function uA(t){return t.map(function(e){return[ri(e.longitudeShift),ri(e.latitudeShift)]})}function hA(t,e,n){return{name:kh(t,e+8,e+16).trim(),parent:kh(t,e+24,e+24+8).trim(),lowerLatitude:t.getFloat64(e+72,n),upperLatitude:t.getFloat64(e+88,n),lowerLongitude:t.getFloat64(e+104,n),upperLongitude:t.getFloat64(e+120,n),latitudeInterval:t.getFloat64(e+136,n),longitudeInterval:t.getFloat64(e+152,n),gridNodeCount:t.getInt32(e+168,n)}}function dA(t,e,n,r,i){var s=e+176,o=16;i===!1&&(o=8);for(var a=[],l=0;l<n.gridNodeCount;l++){var c={latitudeShift:t.getFloat32(s+l*o,r),longitudeShift:t.getFloat32(s+l*o+4,r)};i!==!1&&(c.latitudeAccuracy=t.getFloat32(s+l*o+8,r),c.longitudeAccuracy=t.getFloat32(s+l*o+12,r)),a.push(c)}return a}function Rn(t,e){if(!(this instanceof Rn))return new Rn(t);this.forward=null,this.inverse=null,this.init=null,this.name,this.names=null,this.title,e=e||function(c){if(c)throw c};var n=zR(t);if(typeof n!="object"){e("Could not parse to valid json: "+t);return}var r=Rn.projections.get(n.projName);if(!r){e("Could not get projection name from: "+t);return}if(n.datumCode&&n.datumCode!=="none"){var i=fi(vl,n.datumCode);i&&(n.datum_params=n.datum_params||(i.towgs84?i.towgs84.split(","):null),n.ellps=i.ellipse,n.datumName=i.datumName?i.datumName:n.datumCode)}n.k0=n.k0||1,n.axis=n.axis||"enu",n.ellps=n.ellps||"wgs84",n.lat1=n.lat1||n.lat0;var s=QR(n.a,n.b,n.rf,n.ellps,n.sphere),o=JR(s.a,s.b,s.rf,n.R_A),a=sA(n.nadgrids),l=n.datum||tA(n.datumCode,n.datum_params,s.a,s.b,o.es,o.ep2,a);zm(this,n),zm(this,r),this.a=s.a,this.b=s.b,this.rf=s.rf,this.sphere=s.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,"init"in this&&typeof this.init=="function"&&this.init(),e(null,this)}Rn.projections=XR;Rn.projections.start();function fA(t,e){return t.datum_type!==e.datum_type||t.a!==e.a||Math.abs(t.es-e.es)>5e-11?!1:t.datum_type===Gi?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]:t.datum_type===zi?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]&&t.datum_params[3]===e.datum_params[3]&&t.datum_params[4]===e.datum_params[4]&&t.datum_params[5]===e.datum_params[5]&&t.datum_params[6]===e.datum_params[6]:!0}function Qy(t,e,n){var r=t.x,i=t.y,s=t.z?t.z:0,o,a,l,c;if(i<-G&&i>-1.001*G)i=-G;else if(i>G&&i<1.001*G)i=G;else{if(i<-G)return{x:-1/0,y:-1/0,z:t.z};if(i>G)return{x:1/0,y:1/0,z:t.z}}return r>Math.PI&&(r-=2*Math.PI),a=Math.sin(i),c=Math.cos(i),l=a*a,o=n/Math.sqrt(1-e*l),{x:(o+s)*c*Math.cos(r),y:(o+s)*c*Math.sin(r),z:(o*(1-e)+s)*a}}function e1(t,e,n,r){var i=1e-12,s=i*i,o=30,a,l,c,u,h,d,f,g,m,p,_,y,w,b=t.x,E=t.y,P=t.z?t.z:0,k,R,C;if(a=Math.sqrt(b*b+E*E),l=Math.sqrt(b*b+E*E+P*P),a/n<i){if(k=0,l/n<i)return R=G,C=-r,{x:t.x,y:t.y,z:t.z}}else k=Math.atan2(E,b);c=P/l,u=a/l,h=1/Math.sqrt(1-e*(2-e)*u*u),g=u*(1-e)*h,m=c*h,w=0;do w++,f=n/Math.sqrt(1-e*m*m),C=a*g+P*m-f*(1-e*m*m),d=e*f/(f+C),h=1/Math.sqrt(1-d*(2-d)*u*u),p=u*(1-d)*h,_=c*h,y=_*g-p*m,g=p,m=_;while(y*y>s&&w<o);return R=Math.atan(_/Math.abs(p)),{x:k,y:R,z:C}}function gA(t,e,n){if(e===Gi)return{x:t.x+n[0],y:t.y+n[1],z:t.z+n[2]};if(e===zi){var r=n[0],i=n[1],s=n[2],o=n[3],a=n[4],l=n[5],c=n[6];return{x:c*(t.x-l*t.y+a*t.z)+r,y:c*(l*t.x+t.y-o*t.z)+i,z:c*(-a*t.x+o*t.y+t.z)+s}}}function mA(t,e,n){if(e===Gi)return{x:t.x-n[0],y:t.y-n[1],z:t.z-n[2]};if(e===zi){var r=n[0],i=n[1],s=n[2],o=n[3],a=n[4],l=n[5],c=n[6],u=(t.x-r)/c,h=(t.y-i)/c,d=(t.z-s)/c;return{x:u+l*h-a*d,y:-l*u+h+o*d,z:a*u-o*h+d}}}function ul(t){return t===Gi||t===zi}function pA(t,e,n){if(fA(t,e)||t.datum_type===xh||e.datum_type===xh)return n;var r=t.a,i=t.es;if(t.datum_type===Rs){var s=Wm(t,!1,n);if(s!==0)return;r=Lm,i=Om}var o=e.a,a=e.b,l=e.es;if(e.datum_type===Rs&&(o=Lm,a=gR,l=Om),i===l&&r===o&&!ul(t.datum_type)&&!ul(e.datum_type))return n;if(n=Qy(n,i,r),ul(t.datum_type)&&(n=gA(n,t.datum_type,t.datum_params)),ul(e.datum_type)&&(n=mA(n,e.datum_type,e.datum_params)),n=e1(n,l,o,a),e.datum_type===Rs){var c=Wm(e,!0,n);if(c!==0)return}return n}function Wm(t,e,n){if(t.grids===null||t.grids.length===0)return console.log("Grid shift grids not found"),-1;var r={x:-n.x,y:n.y},i={x:Number.NaN,y:Number.NaN},s=[];e:for(var o=0;o<t.grids.length;o++){var a=t.grids[o];if(s.push(a.name),a.isNull){i=r;break}if(a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var l=a.grid.subgrids,c=0,u=l.length;c<u;c++){var h=l[c],d=(Math.abs(h.del[1])+Math.abs(h.del[0]))/1e4,f=h.ll[0]-d,g=h.ll[1]-d,m=h.ll[0]+(h.lim[0]-1)*h.del[0]+d,p=h.ll[1]+(h.lim[1]-1)*h.del[1]+d;if(!(g>r.y||f>r.x||p<r.y||m<r.x)&&(i=_A(r,e,h),!isNaN(i.x)))break e}}return isNaN(i.x)?(console.log("Failed to find a grid shift table for location '"+-r.x*an+" "+r.y*an+" tried: '"+s+"'"),-1):(n.x=-i.x,n.y=i.y,0)}function _A(t,e,n){var r={x:Number.NaN,y:Number.NaN};if(isNaN(t.x))return r;var i={x:t.x,y:t.y};i.x-=n.ll[0],i.y-=n.ll[1],i.x=Q(i.x-Math.PI)+Math.PI;var s=Vm(i,n);if(e){if(isNaN(s.x))return r;s.x=i.x-s.x,s.y=i.y-s.y;var o=9,a=1e-12,l,c;do{if(c=Vm(s,n),isNaN(c.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:i.x-(c.x+s.x),y:i.y-(c.y+s.y)},s.x+=l.x,s.y+=l.y}while(o--&&Math.abs(l.x)>a&&Math.abs(l.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),r;r.x=Q(s.x+n.ll[0]),r.y=s.y+n.ll[1]}else isNaN(s.x)||(r.x=t.x+s.x,r.y=t.y+s.y);return r}function Vm(t,e){var n={x:t.x/e.del[0],y:t.y/e.del[1]},r={x:Math.floor(n.x),y:Math.floor(n.y)},i={x:n.x-1*r.x,y:n.y-1*r.y},s={x:Number.NaN,y:Number.NaN},o;if(r.x<0||r.x>=e.lim[0]||r.y<0||r.y>=e.lim[1])return s;o=r.y*e.lim[0]+r.x;var a={x:e.cvs[o][0],y:e.cvs[o][1]};o++;var l={x:e.cvs[o][0],y:e.cvs[o][1]};o+=e.lim[0];var c={x:e.cvs[o][0],y:e.cvs[o][1]};o--;var u={x:e.cvs[o][0],y:e.cvs[o][1]},h=i.x*i.y,d=i.x*(1-i.y),f=(1-i.x)*(1-i.y),g=(1-i.x)*i.y;return s.x=f*a.x+d*l.x+g*u.x+h*c.x,s.y=f*a.y+d*l.y+g*u.y+h*c.y,s}function Um(t,e,n){var r=n.x,i=n.y,s=n.z||0,o,a,l,c={};for(l=0;l<3;l++)if(!(e&&l===2&&n.z===void 0))switch(l===0?(o=r,"ew".indexOf(t.axis[l])!==-1?a="x":a="y"):l===1?(o=i,"ns".indexOf(t.axis[l])!==-1?a="y":a="x"):(o=s,a="z"),t.axis[l]){case"e":c[a]=o;break;case"w":c[a]=-o;break;case"n":c[a]=o;break;case"s":c[a]=-o;break;case"u":n[a]!==void 0&&(c.z=o);break;case"d":n[a]!==void 0&&(c.z=-o);break;default:return null}return c}function t1(t){var e={x:t[0],y:t[1]};return t.length>2&&(e.z=t[2]),t.length>3&&(e.m=t[3]),e}function yA(t){Km(t.x),Km(t.y)}function Km(t){if(typeof Number.isFinite=="function"){if(Number.isFinite(t))return;throw new TypeError("coordinates must be finite numbers")}if(typeof t!="number"||t!==t||!isFinite(t))throw new TypeError("coordinates must be finite numbers")}function vA(t,e){return(t.datum.datum_type===Gi||t.datum.datum_type===zi||t.datum.datum_type===Rs)&&e.datumCode!=="WGS84"||(e.datum.datum_type===Gi||e.datum.datum_type===zi||e.datum.datum_type===Rs)&&t.datumCode!=="WGS84"}function ec(t,e,n,r){var i;Array.isArray(n)?n=t1(n):n={x:n.x,y:n.y,z:n.z,m:n.m};var s=n.z!==void 0;if(yA(n),t.datum&&e.datum&&vA(t,e)&&(i=new Rn("WGS84"),n=ec(t,i,n,r),t=i),r&&t.axis!=="enu"&&(n=Um(t,!1,n)),t.projName==="longlat")n={x:n.x*ft,y:n.y*ft,z:n.z||0};else if(t.to_meter&&(n={x:n.x*t.to_meter,y:n.y*t.to_meter,z:n.z||0}),n=t.inverse(n),!n)return;if(t.from_greenwich&&(n.x+=t.from_greenwich),n=pA(t.datum,e.datum,n),!!n)return n=n,e.from_greenwich&&(n={x:n.x-e.from_greenwich,y:n.y,z:n.z||0}),e.projName==="longlat"?n={x:n.x*an,y:n.y*an,z:n.z||0}:(n=e.forward(n),e.to_meter&&(n={x:n.x/e.to_meter,y:n.y/e.to_meter,z:n.z||0})),r&&e.axis!=="enu"?Um(e,!0,n):(n&&!s&&delete n.z,n)}var $m=Rn("WGS84");function Iu(t,e,n,r){var i,s,o;return Array.isArray(n)?(i=ec(t,e,n,r)||{x:NaN,y:NaN},n.length>2?typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"?typeof i.z=="number"?[i.x,i.y,i.z].concat(n.slice(3)):[i.x,i.y,n[2]].concat(n.slice(3)):[i.x,i.y].concat(n.slice(2)):[i.x,i.y]):(s=ec(t,e,n,r),o=Object.keys(n),o.length===2||o.forEach(function(a){if(typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;s[a]=n[a]}),s)}function hl(t){return t instanceof Rn?t:typeof t=="object"&&"oProj"in t?t.oProj:Rn(t)}function wA(t,e,n){var r,i,s=!1,o;return typeof e>"u"?(i=hl(t),r=$m,s=!0):(typeof e.x<"u"||Array.isArray(e))&&(n=e,i=hl(t),r=$m,s=!0),r||(r=hl(t)),i||(i=hl(e)),n?Iu(r,i,n):(o={forward:function(a,l){return Iu(r,i,a,l)},inverse:function(a,l){return Iu(i,r,a,l)}},s&&(o.oProj=i),o)}var qm=6,n1="AJSAJS",r1="AFAFAF",_s=65,Jt=73,xn=79,Mo=86,xo=90;const SA={forward:i1,inverse:bA,toPoint:s1};function i1(t,e){return e=e||5,xA(EA({lat:t[1],lon:t[0]}),e)}function bA(t){var e=sf(a1(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function s1(t){var e=sf(a1(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function Lu(t){return t*(Math.PI/180)}function Hm(t){return 180*(t/Math.PI)}function EA(t){var e=t.lat,n=t.lon,r=6378137,i=.00669438,s=.9996,o,a,l,c,u,h,d,f=Lu(e),g=Lu(n),m,p;p=Math.floor((n+180)/6)+1,n===180&&(p=60),e>=56&&e<64&&n>=3&&n<12&&(p=32),e>=72&&e<84&&(n>=0&&n<9?p=31:n>=9&&n<21?p=33:n>=21&&n<33?p=35:n>=33&&n<42&&(p=37)),o=(p-1)*6-180+3,m=Lu(o),a=i/(1-i),l=r/Math.sqrt(1-i*Math.sin(f)*Math.sin(f)),c=Math.tan(f)*Math.tan(f),u=a*Math.cos(f)*Math.cos(f),h=Math.cos(f)*(g-m),d=r*((1-i/4-3*i*i/64-5*i*i*i/256)*f-(3*i/8+3*i*i/32+45*i*i*i/1024)*Math.sin(2*f)+(15*i*i/256+45*i*i*i/1024)*Math.sin(4*f)-35*i*i*i/3072*Math.sin(6*f));var _=s*l*(h+(1-c+u)*h*h*h/6+(5-18*c+c*c+72*u-58*a)*h*h*h*h*h/120)+5e5,y=s*(d+l*Math.tan(f)*(h*h/2+(5-c+9*u+4*u*u)*h*h*h*h/24+(61-58*c+c*c+600*u-330*a)*h*h*h*h*h*h/720));return e<0&&(y+=1e7),{northing:Math.round(y),easting:Math.round(_),zoneNumber:p,zoneLetter:MA(e)}}function sf(t){var e=t.northing,n=t.easting,r=t.zoneLetter,i=t.zoneNumber;if(i<0||i>60)return null;var s=.9996,o=6378137,a=.00669438,l,c=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),u,h,d,f,g,m,p,_,y,w=n-5e5,b=e;r<"N"&&(b-=1e7),p=(i-1)*6-180+3,l=a/(1-a),m=b/s,_=m/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),y=_+(3*c/2-27*c*c*c/32)*Math.sin(2*_)+(21*c*c/16-55*c*c*c*c/32)*Math.sin(4*_)+151*c*c*c/96*Math.sin(6*_),u=o/Math.sqrt(1-a*Math.sin(y)*Math.sin(y)),h=Math.tan(y)*Math.tan(y),d=l*Math.cos(y)*Math.cos(y),f=o*(1-a)/Math.pow(1-a*Math.sin(y)*Math.sin(y),1.5),g=w/(u*s);var E=y-u*Math.tan(y)/f*(g*g/2-(5+3*h+10*d-4*d*d-9*l)*g*g*g*g/24+(61+90*h+298*d+45*h*h-252*l-3*d*d)*g*g*g*g*g*g/720);E=Hm(E);var P=(g-(1+2*h+d)*g*g*g/6+(5-2*d+28*h-3*d*d+8*l+24*h*h)*g*g*g*g*g/120)/Math.cos(y);P=p+Hm(P);var k;if(t.accuracy){var R=sf({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});k={top:R.lat,right:R.lon,bottom:E,left:P}}else k={lat:E,lon:P};return k}function MA(t){var e="Z";return 84>=t&&t>=72?e="X":72>t&&t>=64?e="W":64>t&&t>=56?e="V":56>t&&t>=48?e="U":48>t&&t>=40?e="T":40>t&&t>=32?e="S":32>t&&t>=24?e="R":24>t&&t>=16?e="Q":16>t&&t>=8?e="P":8>t&&t>=0?e="N":0>t&&t>=-8?e="M":-8>t&&t>=-16?e="L":-16>t&&t>=-24?e="K":-24>t&&t>=-32?e="J":-32>t&&t>=-40?e="H":-40>t&&t>=-48?e="G":-48>t&&t>=-56?e="F":-56>t&&t>=-64?e="E":-64>t&&t>=-72?e="D":-72>t&&t>=-80&&(e="C"),e}function xA(t,e){var n="00000"+t.easting,r="00000"+t.northing;return t.zoneNumber+t.zoneLetter+CA(t.easting,t.northing,t.zoneNumber)+n.substr(n.length-5,e)+r.substr(r.length-5,e)}function CA(t,e,n){var r=o1(n),i=Math.floor(t/1e5),s=Math.floor(e/1e5)%20;return kA(i,s,r)}function o1(t){var e=t%qm;return e===0&&(e=qm),e}function kA(t,e,n){var r=n-1,i=n1.charCodeAt(r),s=r1.charCodeAt(r),o=i+t-1,a=s+e,l=!1;o>xo&&(o=o-xo+_s-1,l=!0),(o===Jt||i<Jt&&o>Jt||(o>Jt||i<Jt)&&l)&&o++,(o===xn||i<xn&&o>xn||(o>xn||i<xn)&&l)&&(o++,o===Jt&&o++),o>xo&&(o=o-xo+_s-1),a>Mo?(a=a-Mo+_s-1,l=!0):l=!1,(a===Jt||s<Jt&&a>Jt||(a>Jt||s<Jt)&&l)&&a++,(a===xn||s<xn&&a>xn||(a>xn||s<xn)&&l)&&(a++,a===Jt&&a++),a>Mo&&(a=a-Mo+_s-1);var c=String.fromCharCode(o)+String.fromCharCode(a);return c}function a1(t){if(t&&t.length===0)throw"MGRSPoint coverting from nothing";for(var e=t.length,n=null,r="",i,s=0;!/[A-Z]/.test(i=t.charAt(s));){if(s>=2)throw"MGRSPoint bad conversion from: "+t;r+=i,s++}var o=parseInt(r,10);if(s===0||s+3>e)throw"MGRSPoint bad conversion from: "+t;var a=t.charAt(s++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+t;n=t.substring(s,s+=2);for(var l=o1(o),c=PA(n.charAt(0),l),u=TA(n.charAt(1),l);u<RA(a);)u+=2e6;var h=e-s;if(h%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+t;var d=h/2,f=0,g=0,m,p,_,y,w;return d>0&&(m=1e5/Math.pow(10,d),p=t.substring(s,s+d),f=parseFloat(p)*m,_=t.substring(s+d),g=parseFloat(_)*m),y=f+c,w=g+u,{easting:y,northing:w,zoneLetter:a,zoneNumber:o,accuracy:m}}function PA(t,e){for(var n=n1.charCodeAt(e-1),r=1e5,i=!1;n!==t.charCodeAt(0);){if(n++,n===Jt&&n++,n===xn&&n++,n>xo){if(i)throw"Bad character: "+t;n=_s,i=!0}r+=1e5}return r}function TA(t,e){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var n=r1.charCodeAt(e-1),r=0,i=!1;n!==t.charCodeAt(0);){if(n++,n===Jt&&n++,n===xn&&n++,n>Mo){if(i)throw"Bad character: "+t;n=_s,i=!0}r+=1e5}return r}function RA(t){var e;switch(t){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+t}function qs(t,e,n){if(!(this instanceof qs))return new qs(t,e,n);if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2]||0;else if(typeof t=="object")this.x=t.x,this.y=t.y,this.z=t.z||0;else if(typeof t=="string"&&typeof e>"u"){var r=t.split(",");this.x=parseFloat(r[0]),this.y=parseFloat(r[1]),this.z=parseFloat(r[2])||0}else this.x=t,this.y=e,this.z=n||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}qs.fromMGRS=function(t){return new qs(s1(t))};qs.prototype.toMGRS=function(t){return i1([this.x,this.y],t)};var AA=1,IA=.25,Zm=.046875,Xm=.01953125,Ym=.01068115234375,LA=.75,OA=.46875,FA=.013020833333333334,NA=.007120768229166667,DA=.3645833333333333,GA=.005696614583333333,zA=.3076171875;function of(t){var e=[];e[0]=AA-t*(IA+t*(Zm+t*(Xm+t*Ym))),e[1]=t*(LA-t*(Zm+t*(Xm+t*Ym)));var n=t*t;return e[2]=n*(OA-t*(FA+t*NA)),n*=t,e[3]=n*(DA-t*GA),e[4]=n*t*zA,e}function no(t,e,n,r){return n*=e,e*=e,r[0]*t-n*(r[1]+e*(r[2]+e*(r[3]+e*r[4])))}var BA=20;function af(t,e,n){for(var r=1/(1-e),i=t,s=BA;s;--s){var o=Math.sin(i),a=1-e*o*o;if(a=(no(i,o,Math.cos(i),n)-t)*(a*Math.sqrt(a))*r,i-=a,Math.abs(a)<K)return i}return i}function jA(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=of(this.es),this.ml0=no(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function WA(t){var e=t.x,n=t.y,r=Q(e-this.long0,this.over),i,s,o,a=Math.sin(n),l=Math.cos(n);if(this.es){var u=l*r,h=Math.pow(u,2),d=this.ep2*Math.pow(l,2),f=Math.pow(d,2),g=Math.abs(l)>K?Math.tan(n):0,m=Math.pow(g,2),p=Math.pow(m,2);i=1-this.es*Math.pow(a,2),u=u/Math.sqrt(i);var _=no(n,a,l,this.en);s=this.a*(this.k0*u*(1+h/6*(1-m+d+h/20*(5-18*m+p+14*d-58*m*d+h/42*(61+179*p-p*m-479*m)))))+this.x0,o=this.a*(this.k0*(_-this.ml0+a*r*u/2*(1+h/12*(5-m+9*d+4*f+h/30*(61+p-58*m+270*d-330*m*d+h/56*(1385+543*p-p*m-3111*m))))))+this.y0}else{var c=l*Math.sin(r);if(Math.abs(Math.abs(c)-1)<K)return 93;if(s=.5*this.a*this.k0*Math.log((1+c)/(1-c))+this.x0,o=l*Math.cos(r)/Math.sqrt(1-Math.pow(c,2)),c=Math.abs(o),c>=1){if(c-1>K)return 93;o=0}else o=Math.acos(o);n<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return t.x=s,t.y=o,t}function VA(t){var e,n,r,i,s=(t.x-this.x0)*(1/this.a),o=(t.y-this.y0)*(1/this.a);if(this.es)if(e=this.ml0+o/this.k0,n=af(e,this.es,this.en),Math.abs(n)<G){var h=Math.sin(n),d=Math.cos(n),f=Math.abs(d)>K?Math.tan(n):0,g=this.ep2*Math.pow(d,2),m=Math.pow(g,2),p=Math.pow(f,2),_=Math.pow(p,2);e=1-this.es*Math.pow(h,2);var y=s*Math.sqrt(e)/this.k0,w=Math.pow(y,2);e=e*f,r=n-e*w/(1-this.es)*.5*(1-w/12*(5+3*p-9*g*p+g-4*m-w/30*(61+90*p-252*g*p+45*_+46*g-w/56*(1385+3633*p+4095*_+1574*_*p)))),i=Q(this.long0+y*(1-w/6*(1+2*p+g-w/20*(5+28*p+24*_+8*g*p+6*g-w/42*(61+662*p+1320*_+720*_*p))))/d,this.over)}else r=G*Fa(o),i=0;else{var a=Math.exp(s/this.k0),l=.5*(a-1/a),c=this.lat0+o/this.k0,u=Math.cos(c);e=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(l,2))),r=Math.asin(e),o<0&&(r=-r),l===0&&u===0?i=0:i=Q(Math.atan2(l,u)+this.long0,this.over)}return t.x=i,t.y=r,t}var UA=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const wl={init:jA,forward:WA,inverse:VA,names:UA};function l1(t){var e=Math.exp(t);return e=(e-1/e)/2,e}function on(t,e){t=Math.abs(t),e=Math.abs(e);var n=Math.max(t,e),r=Math.min(t,e)/(n||1);return n*Math.sqrt(1+Math.pow(r,2))}function KA(t){var e=1+t,n=e-1;return n===0?t:t*Math.log(e)/n}function $A(t){var e=Math.abs(t);return e=KA(e*(1+e/(on(1,e)+1))),t<0?-e:e}function lf(t,e){for(var n=2*Math.cos(2*e),r=t.length-1,i=t[r],s=0,o;--r>=0;)o=-s+n*i+t[r],s=i,i=o;return e+o*Math.sin(2*e)}function qA(t,e){for(var n=2*Math.cos(e),r=t.length-1,i=t[r],s=0,o;--r>=0;)o=-s+n*i+t[r],s=i,i=o;return Math.sin(e)*o}function HA(t){var e=Math.exp(t);return e=(e+1/e)/2,e}function c1(t,e,n){for(var r=Math.sin(e),i=Math.cos(e),s=l1(n),o=HA(n),a=2*i*o,l=-2*r*s,c=t.length-1,u=t[c],h=0,d=0,f=0,g,m;--c>=0;)g=d,m=h,d=u,h=f,u=-g+a*d-l*h+t[c],f=-m+l*d+a*h;return a=r*o,l=i*s,[a*u-l*f,a*f+l*u]}function ZA(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(wl.init.apply(this),this.forward=wl.forward,this.inverse=wl.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),e=t/(2-t),n=e;this.cgb[0]=e*(2+e*(-2/3+e*(-2+e*(116/45+e*(26/45+e*(-2854/675)))))),this.cbg[0]=e*(-2+e*(2/3+e*(4/3+e*(-82/45+e*(32/45+e*(4642/4725)))))),n=n*e,this.cgb[1]=n*(7/3+e*(-8/5+e*(-227/45+e*(2704/315+e*(2323/945))))),this.cbg[1]=n*(5/3+e*(-16/15+e*(-13/9+e*(904/315+e*(-1522/945))))),n=n*e,this.cgb[2]=n*(56/15+e*(-136/35+e*(-1262/105+e*(73814/2835)))),this.cbg[2]=n*(-26/15+e*(34/21+e*(8/5+e*(-12686/2835)))),n=n*e,this.cgb[3]=n*(4279/630+e*(-332/35+e*(-399572/14175))),this.cbg[3]=n*(1237/630+e*(-12/5+e*(-24832/14175))),n=n*e,this.cgb[4]=n*(4174/315+e*(-144838/6237)),this.cbg[4]=n*(-734/315+e*(109598/31185)),n=n*e,this.cgb[5]=n*(601676/22275),this.cbg[5]=n*(444337/155925),n=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+n*(1/4+n*(1/64+n/256))),this.utg[0]=e*(-.5+e*(2/3+e*(-37/96+e*(1/360+e*(81/512+e*(-96199/604800)))))),this.gtu[0]=e*(.5+e*(-2/3+e*(5/16+e*(41/180+e*(-127/288+e*(7891/37800)))))),this.utg[1]=n*(-1/48+e*(-1/15+e*(437/1440+e*(-46/105+e*(1118711/3870720))))),this.gtu[1]=n*(13/48+e*(-3/5+e*(557/1440+e*(281/630+e*(-1983433/1935360))))),n=n*e,this.utg[2]=n*(-17/480+e*(37/840+e*(209/4480+e*(-5569/90720)))),this.gtu[2]=n*(61/240+e*(-103/140+e*(15061/26880+e*(167603/181440)))),n=n*e,this.utg[3]=n*(-4397/161280+e*(11/504+e*(830251/7257600))),this.gtu[3]=n*(49561/161280+e*(-179/168+e*(6601661/7257600))),n=n*e,this.utg[4]=n*(-4583/161280+e*(108847/3991680)),this.gtu[4]=n*(34729/80640+e*(-3418889/1995840)),n=n*e,this.utg[5]=n*(-20648693/638668800),this.gtu[5]=n*(212378941/319334400);var r=lf(this.cbg,this.lat0);this.Zb=-this.Qn*(r+qA(this.gtu,2*r))}function XA(t){var e=Q(t.x-this.long0,this.over),n=t.y;n=lf(this.cbg,n);var r=Math.sin(n),i=Math.cos(n),s=Math.sin(e),o=Math.cos(e);n=Math.atan2(r,o*i),e=Math.atan2(s*i,on(r,i*o)),e=$A(Math.tan(e));var a=c1(this.gtu,2*n,2*e);n=n+a[0],e=e+a[1];var l,c;return Math.abs(e)<=2.623395162778?(l=this.a*(this.Qn*e)+this.x0,c=this.a*(this.Qn*n+this.Zb)+this.y0):(l=1/0,c=1/0),t.x=l,t.y=c,t}function YA(t){var e=(t.x-this.x0)*(1/this.a),n=(t.y-this.y0)*(1/this.a);n=(n-this.Zb)/this.Qn,e=e/this.Qn;var r,i;if(Math.abs(e)<=2.623395162778){var s=c1(this.utg,2*n,2*e);n=n+s[0],e=e+s[1],e=Math.atan(l1(e));var o=Math.sin(n),a=Math.cos(n),l=Math.sin(e),c=Math.cos(e);n=Math.atan2(o*c,on(l,c*a)),e=Math.atan2(l,c*a),r=Q(e+this.long0,this.over),i=lf(this.cgb,n)}else r=1/0,i=1/0;return t.x=r,t.y=i,t}var JA=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Sl={init:ZA,forward:XA,inverse:YA,names:JA};function QA(t,e){if(t===void 0){if(t=Math.floor((Q(e)+Math.PI)*30/Math.PI)+1,t<0)return 0;if(t>60)return 60}return t}var eI="etmerc";function tI(){var t=QA(this.zone,this.long0);if(t===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(t)-183)*ft,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Sl.init.apply(this),this.forward=Sl.forward,this.inverse=Sl.inverse}var nI=["Universal Transverse Mercator System","utm"];const rI={init:tI,names:nI,dependsOn:eI};function cf(t,e){return Math.pow((1-t)/(1+t),e)}var iI=20;function sI(){var t=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*t*t),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(t/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Ue)/(Math.pow(Math.tan(.5*this.lat0+Ue),this.C)*cf(this.e*t,this.ratexp))}function oI(t){var e=t.x,n=t.y;return t.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*n+Ue),this.C)*cf(this.e*Math.sin(n),this.ratexp))-G,t.x=this.C*e,t}function aI(t){for(var e=1e-14,n=t.x/this.C,r=t.y,i=Math.pow(Math.tan(.5*r+Ue)/this.K,1/this.C),s=iI;s>0&&(r=2*Math.atan(i*cf(this.e*Math.sin(t.y),-.5*this.e))-G,!(Math.abs(r-t.y)<e));--s)t.y=r;return s?(t.x=n,t.y=r,t):null}const uf={init:sI,forward:oI,inverse:aI};function lI(){uf.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function cI(t){var e,n,r,i;return t.x=Q(t.x-this.long0,this.over),uf.forward.apply(this,[t]),e=Math.sin(t.y),n=Math.cos(t.y),r=Math.cos(t.x),i=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*n*r),t.x=i*n*Math.sin(t.x),t.y=i*(this.cosc0*e-this.sinc0*n*r),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function uI(t){var e,n,r,i,s;if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,s=on(t.x,t.y)){var o=2*Math.atan2(s,this.R2);e=Math.sin(o),n=Math.cos(o),i=Math.asin(n*this.sinc0+t.y*e*this.cosc0/s),r=Math.atan2(t.x*e,s*this.cosc0*n-t.y*this.sinc0*e)}else i=this.phic0,r=0;return t.x=r,t.y=i,uf.inverse.apply(this,[t]),t.x=Q(t.x+this.long0,this.over),t}var hI=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const dI={init:lI,forward:cI,inverse:uI,names:hI};function hf(t,e,n){return e*=n,Math.tan(.5*(G+t))*Math.pow((1-e)/(1+e),.5*n)}function fI(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=K&&(this.k0=.5*(1+Fa(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=K&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=K&&Math.abs(Math.cos(this.lat_ts))>K&&(this.k0=.5*this.cons*ar(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/Dn(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=ar(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(hf(this.lat0,this.sinlat0,this.e))-G,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function gI(t){var e=t.x,n=t.y,r=Math.sin(n),i=Math.cos(n),s,o,a,l,c,u,h=Q(e-this.long0,this.over);return Math.abs(Math.abs(e-this.long0)-Math.PI)<=K&&Math.abs(n+this.lat0)<=K?(t.x=NaN,t.y=NaN,t):this.sphere?(s=2*this.k0/(1+this.sinlat0*r+this.coslat0*i*Math.cos(h)),t.x=this.a*s*i*Math.sin(h)+this.x0,t.y=this.a*s*(this.coslat0*r-this.sinlat0*i*Math.cos(h))+this.y0,t):(o=2*Math.atan(hf(n,r,this.e))-G,l=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=K?(c=Dn(this.e,n*this.con,this.con*r),u=2*this.a*this.k0*c/this.cons,t.x=this.x0+u*Math.sin(e-this.long0),t.y=this.y0-this.con*u*Math.cos(e-this.long0),t):(Math.abs(this.sinlat0)<K?(s=2*this.a*this.k0/(1+l*Math.cos(h)),t.y=s*a):(s=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*l*Math.cos(h))),t.y=s*(this.cosX0*a-this.sinX0*l*Math.cos(h))+this.y0),t.x=s*l*Math.sin(h)+this.x0,t))}function mI(t){t.x-=this.x0,t.y-=this.y0;var e,n,r,i,s,o=Math.sqrt(t.x*t.x+t.y*t.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return e=this.long0,n=this.lat0,o<=K?(t.x=e,t.y=n,t):(n=Math.asin(Math.cos(a)*this.sinlat0+t.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<K?this.lat0>0?e=Q(this.long0+Math.atan2(t.x,-1*t.y),this.over):e=Q(this.long0+Math.atan2(t.x,t.y),this.over):e=Q(this.long0+Math.atan2(t.x*Math.sin(a),o*this.coslat0*Math.cos(a)-t.y*this.sinlat0*Math.sin(a)),this.over),t.x=e,t.y=n,t)}else if(Math.abs(this.coslat0)<=K){if(o<=K)return n=this.lat0,e=this.long0,t.x=e,t.y=n,t;t.x*=this.con,t.y*=this.con,r=o*this.cons/(2*this.a*this.k0),n=this.con*_a(this.e,r),e=this.con*Q(this.con*this.long0+Math.atan2(t.x,-1*t.y),this.over)}else i=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,o<=K?s=this.X0:(s=Math.asin(Math.cos(i)*this.sinX0+t.y*Math.sin(i)*this.cosX0/o),e=Q(this.long0+Math.atan2(t.x*Math.sin(i),o*this.cosX0*Math.cos(i)-t.y*this.sinX0*Math.sin(i)),this.over)),n=-1*_a(this.e,Math.tan(.5*(G+s)));return t.x=e,t.y=n,t}var pI=["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"];const _I={init:fI,forward:gI,inverse:mI,names:pI,ssfn_:hf};function yI(){var t=this.lat0;this.lambda0=this.long0;var e=Math.sin(t),n=this.a,r=this.rf,i=1/r,s=2*i-Math.pow(i,2),o=this.e=Math.sqrt(s);this.R=this.k0*n*Math.sqrt(1-s)/(1-s*Math.pow(e,2)),this.alpha=Math.sqrt(1+s/(1-s)*Math.pow(Math.cos(t),4)),this.b0=Math.asin(e/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+t/2)),c=Math.log((1+o*e)/(1-o*e));this.K=a-this.alpha*l+this.alpha*o/2*c}function vI(t){var e=Math.log(Math.tan(Math.PI/4-t.y/2)),n=this.e/2*Math.log((1+this.e*Math.sin(t.y))/(1-this.e*Math.sin(t.y))),r=-this.alpha*(e+n)+this.K,i=2*(Math.atan(Math.exp(r))-Math.PI/4),s=this.alpha*(t.x-this.lambda0),o=Math.atan(Math.sin(s)/(Math.sin(this.b0)*Math.tan(i)+Math.cos(this.b0)*Math.cos(s))),a=Math.asin(Math.cos(this.b0)*Math.sin(i)-Math.sin(this.b0)*Math.cos(i)*Math.cos(s));return t.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,t.x=this.R*o+this.x0,t}function wI(t){for(var e=t.x-this.x0,n=t.y-this.y0,r=e/this.R,i=2*(Math.atan(Math.exp(n/this.R))-Math.PI/4),s=Math.asin(Math.cos(this.b0)*Math.sin(i)+Math.sin(this.b0)*Math.cos(i)*Math.cos(r)),o=Math.atan(Math.sin(r)/(Math.cos(this.b0)*Math.cos(r)-Math.sin(this.b0)*Math.tan(i))),a=this.lambda0+o/this.alpha,l=0,c=s,u=-1e3,h=0;Math.abs(c-u)>1e-7;){if(++h>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+s/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(c))/2)),u=c,c=2*Math.atan(Math.exp(l))-Math.PI/2}return t.x=a,t.y=c,t}var SI=["somerc"];const bI={init:yI,forward:vI,inverse:wI,names:SI};var hs=1e-7;function EI(t){var e=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],n=typeof t.projName=="object"?Object.keys(t.projName)[0]:t.projName;return"no_uoff"in t||"no_off"in t||e.indexOf(n)!==-1||e.indexOf(Yy(n))!==-1}function MI(){var t,e,n,r,i,s,o,a,l,c,u=0,h,d=0,f=0,g=0,m=0,p=0,_=0;this.no_off=EI(this),this.no_rot="no_rot"in this;var y=!1;"alpha"in this&&(y=!0);var w=!1;if("rectified_grid_angle"in this&&(w=!0),y&&(_=this.alpha),w&&(u=this.rectified_grid_angle),y||w)d=this.longc;else if(f=this.long1,m=this.lat1,g=this.long2,p=this.lat2,Math.abs(m-p)<=hs||(t=Math.abs(m))<=hs||Math.abs(t-G)<=hs||Math.abs(Math.abs(this.lat0)-G)<=hs||Math.abs(Math.abs(p)-G)<=hs)throw new Error;var b=1-this.es;e=Math.sqrt(b),Math.abs(this.lat0)>K?(a=Math.sin(this.lat0),n=Math.cos(this.lat0),t=1-this.es*a*a,this.B=n*n,this.B=Math.sqrt(1+this.es*this.B*this.B/b),this.A=this.B*this.k0*e/t,r=this.B*e/(n*Math.sqrt(t)),i=r*r-1,i<=0?i=0:(i=Math.sqrt(i),this.lat0<0&&(i=-i)),this.E=i+=r,this.E*=Math.pow(Dn(this.e,this.lat0,a),this.B)):(this.B=1/e,this.A=this.k0,this.E=r=i=1),y||w?(y?(h=Math.asin(Math.sin(_)/r),w||(u=_)):(h=u,_=Math.asin(r*Math.sin(h))),this.lam0=d-Math.asin(.5*(i-1/i)*Math.tan(h))/this.B):(s=Math.pow(Dn(this.e,m,Math.sin(m)),this.B),o=Math.pow(Dn(this.e,p,Math.sin(p)),this.B),i=this.E/s,l=(o-s)/(o+s),c=this.E*this.E,c=(c-o*s)/(c+o*s),t=f-g,t<-Math.PI?g-=ma:t>Math.PI&&(g+=ma),this.lam0=Q(.5*(f+g)-Math.atan(c*Math.tan(.5*this.B*(f-g))/l)/this.B,this.over),h=Math.atan(2*Math.sin(this.B*Q(f-this.lam0,this.over))/(i-1/i)),u=_=Math.asin(r*Math.sin(h))),this.singam=Math.sin(h),this.cosgam=Math.cos(h),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(r*r-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),i=.5*h,this.v_pole_n=this.ArB*Math.log(Math.tan(Ue-i)),this.v_pole_s=this.ArB*Math.log(Math.tan(Ue+i))}function xI(t){var e={},n,r,i,s,o,a,l,c;if(t.x=t.x-this.lam0,Math.abs(Math.abs(t.y)-G)>K){if(o=this.E/Math.pow(Dn(this.e,t.y,Math.sin(t.y)),this.B),a=1/o,n=.5*(o-a),r=.5*(o+a),s=Math.sin(this.B*t.x),i=(n*this.singam-s*this.cosgam)/r,Math.abs(Math.abs(i)-1)<K)throw new Error;c=.5*this.ArB*Math.log((1-i)/(1+i)),a=Math.cos(this.B*t.x),Math.abs(a)<hs?l=this.A*t.x:l=this.ArB*Math.atan2(n*this.cosgam+s*this.singam,a)}else c=t.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*t.y;return this.no_rot?(e.x=l,e.y=c):(l-=this.u_0,e.x=c*this.cosrot+l*this.sinrot,e.y=l*this.cosrot-c*this.sinrot),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function CI(t){var e,n,r,i,s,o,a,l={};if(t.x=(t.x-this.x0)*(1/this.a),t.y=(t.y-this.y0)*(1/this.a),this.no_rot?(n=t.y,e=t.x):(n=t.x*this.cosrot-t.y*this.sinrot,e=t.y*this.cosrot+t.x*this.sinrot+this.u_0),r=Math.exp(-this.BrA*n),i=.5*(r-1/r),s=.5*(r+1/r),o=Math.sin(this.BrA*e),a=(o*this.cosgam+i*this.singam)/s,Math.abs(Math.abs(a)-1)<K)l.x=0,l.y=a<0?-G:G;else{if(l.y=this.E/Math.sqrt((1+a)/(1-a)),l.y=_a(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(i*this.cosgam-o*this.singam,Math.cos(this.BrA*e))}return l.x+=this.lam0,l}var kI=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const PI={init:MI,forward:xI,inverse:CI,names:kI};function TI(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<K)){var t=this.b/this.a;this.e=Math.sqrt(1-t*t);var e=Math.sin(this.lat1),n=Math.cos(this.lat1),r=ar(this.e,e,n),i=Dn(this.e,this.lat1,e),s=Math.sin(this.lat2),o=Math.cos(this.lat2),a=ar(this.e,s,o),l=Dn(this.e,this.lat2,s),c=Math.abs(Math.abs(this.lat0)-G)<K?0:Dn(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>K?this.ns=Math.log(r/a)/Math.log(i/l):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=r/(this.ns*Math.pow(i,this.ns)),this.rh=this.a*this.f0*Math.pow(c,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function RI(t){var e=t.x,n=t.y;Math.abs(2*Math.abs(n)-Math.PI)<=K&&(n=Fa(n)*(G-2*K));var r=Math.abs(Math.abs(n)-G),i,s;if(r>K)i=Dn(this.e,n,Math.sin(n)),s=this.a*this.f0*Math.pow(i,this.ns);else{if(r=n*this.ns,r<=0)return null;s=0}var o=this.ns*Q(e-this.long0,this.over);return t.x=this.k0*(s*Math.sin(o))+this.x0,t.y=this.k0*(this.rh-s*Math.cos(o))+this.y0,t}function AI(t){var e,n,r,i,s,o=(t.x-this.x0)/this.k0,a=this.rh-(t.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(o*o+a*a),n=1):(e=-Math.sqrt(o*o+a*a),n=-1);var l=0;if(e!==0&&(l=Math.atan2(n*o,n*a)),e!==0||this.ns>0){if(n=1/this.ns,r=Math.pow(e/(this.a*this.f0),n),i=_a(this.e,r),i===-9999)return null}else i=-G;return s=Q(l/this.ns+this.long0,this.over),t.x=s,t.y=i,t}var II=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const LI={init:TI,forward:RI,inverse:AI,names:II};function OI(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function FI(t){var e,n,r,i,s,o,a,l=t.x,c=t.y,u=Q(l-this.long0,this.over);return e=Math.pow((1+this.e*Math.sin(c))/(1-this.e*Math.sin(c)),this.alfa*this.e/2),n=2*(Math.atan(this.k*Math.pow(Math.tan(c/2+this.s45),this.alfa)/e)-this.s45),r=-u*this.alfa,i=Math.asin(Math.cos(this.ad)*Math.sin(n)+Math.sin(this.ad)*Math.cos(n)*Math.cos(r)),s=Math.asin(Math.cos(n)*Math.sin(r)/Math.cos(i)),o=this.n*s,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(i/2+this.s45),this.n),t.y=a*Math.cos(o)/1,t.x=a*Math.sin(o)/1,this.czech||(t.y*=-1,t.x*=-1),t}function NI(t){var e,n,r,i,s,o,a,l,c=t.x;t.x=t.y,t.y=c,this.czech||(t.y*=-1,t.x*=-1),o=Math.sqrt(t.x*t.x+t.y*t.y),s=Math.atan2(t.y,t.x),i=s/Math.sin(this.s0),r=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(r)-Math.sin(this.ad)*Math.cos(r)*Math.cos(i)),n=Math.asin(Math.cos(r)*Math.sin(i)/Math.cos(e)),t.x=this.long0-n/this.alfa,a=e,l=0;var u=0;do t.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-t.y)<1e-10&&(l=1),a=t.y,u+=1;while(l===0&&u<15);return u>=15?null:t}var DI=["Krovak","krovak"];const GI={init:OI,forward:FI,inverse:NI,names:DI};function Xt(t,e,n,r,i){return t*i-e*Math.sin(2*i)+n*Math.sin(4*i)-r*Math.sin(6*i)}function Na(t){return 1-.25*t*(1+t/16*(3+1.25*t))}function Da(t){return .375*t*(1+.25*t*(1+.46875*t))}function Ga(t){return .05859375*t*t*(1+.75*t)}function za(t){return t*t*t*(35/3072)}function df(t,e,n){var r=e*n;return t/Math.sqrt(1-r*r)}function pi(t){return Math.abs(t)<G?t:t-Fa(t)*Math.PI}function tc(t,e,n,r,i){var s,o;s=t/e;for(var a=0;a<15;a++)if(o=(t-(e*s-n*Math.sin(2*s)+r*Math.sin(4*s)-i*Math.sin(6*s)))/(e-2*n*Math.cos(2*s)+4*r*Math.cos(4*s)-6*i*Math.cos(6*s)),s+=o,Math.abs(o)<=1e-10)return s;return NaN}function zI(){this.sphere||(this.e0=Na(this.es),this.e1=Da(this.es),this.e2=Ga(this.es),this.e3=za(this.es),this.ml0=this.a*Xt(this.e0,this.e1,this.e2,this.e3,this.lat0))}function BI(t){var e,n,r=t.x,i=t.y;if(r=Q(r-this.long0,this.over),this.sphere)e=this.a*Math.asin(Math.cos(i)*Math.sin(r)),n=this.a*(Math.atan2(Math.tan(i),Math.cos(r))-this.lat0);else{var s=Math.sin(i),o=Math.cos(i),a=df(this.a,this.e,s),l=Math.tan(i)*Math.tan(i),c=r*Math.cos(i),u=c*c,h=this.es*o*o/(1-this.es),d=this.a*Xt(this.e0,this.e1,this.e2,this.e3,i);e=a*c*(1-u*l*(1/6-(8-l+8*h)*u/120)),n=d-this.ml0+a*s/o*u*(.5+(5-l+6*h)*u/24)}return t.x=e+this.x0,t.y=n+this.y0,t}function jI(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,n=t.y/this.a,r,i;if(this.sphere){var s=n+this.lat0;r=Math.asin(Math.sin(s)*Math.cos(e)),i=Math.atan2(Math.tan(e),Math.cos(s))}else{var o=this.ml0/this.a+n,a=tc(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-G)<=K)return t.x=this.long0,t.y=G,n<0&&(t.y*=-1),t;var l=df(this.a,this.e,Math.sin(a)),c=l*l*l/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(a),2),h=e*this.a/l,d=h*h;r=a-l*Math.tan(a)/c*h*h*(.5-(1+3*u)*h*h/24),i=h*(1-d*(u/3+(1+3*u)*u*d/15))/Math.cos(a)}return t.x=Q(i+this.long0,this.over),t.y=pi(r),t}var WI=["Cassini","Cassini_Soldner","cass"];const VI={init:zI,forward:BI,inverse:jI,names:WI};function oi(t,e){var n;return t>1e-7?(n=t*e,(1-t*t)*(e/(1-n*n)-.5/t*Math.log((1-n)/(1+n)))):2*e}var Ph=1,Th=2,Rh=3,bl=4;function UI(){var t=Math.abs(this.lat0);if(Math.abs(t-G)<K?this.mode=this.lat0<0?Ph:Th:Math.abs(t)<K?this.mode=Rh:this.mode=bl,this.es>0){var e;switch(this.qp=oi(this.e,1),this.mmf=.5/(1-this.es),this.apa=QI(this.es),this.mode){case Th:this.dd=1;break;case Ph:this.dd=1;break;case Rh:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case bl:this.rq=Math.sqrt(.5*this.qp),e=Math.sin(this.lat0),this.sinb1=oi(this.e,e)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*e*e)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===bl&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function KI(t){var e,n,r,i,s,o,a,l,c,u,h=t.x,d=t.y;if(h=Q(h-this.long0,this.over),this.sphere){if(s=Math.sin(d),u=Math.cos(d),r=Math.cos(h),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(n=this.mode===this.EQUIT?1+u*r:1+this.sinph0*s+this.cosph0*u*r,n<=K)return null;n=Math.sqrt(2/n),e=n*u*Math.sin(h),n*=this.mode===this.EQUIT?s:this.cosph0*s-this.sinph0*u*r}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(r=-r),Math.abs(d+this.lat0)<K)return null;n=Ue-d*.5,n=2*(this.mode===this.S_POLE?Math.cos(n):Math.sin(n)),e=n*Math.sin(h),n*=r}}else{switch(a=0,l=0,c=0,r=Math.cos(h),i=Math.sin(h),s=Math.sin(d),o=oi(this.e,s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,l=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:c=1+this.sinb1*a+this.cosb1*l*r;break;case this.EQUIT:c=1+l*r;break;case this.N_POLE:c=G+d,o=this.qp-o;break;case this.S_POLE:c=d-G,o=this.qp+o;break}if(Math.abs(c)<K)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:c=Math.sqrt(2/c),this.mode===this.OBLIQ?n=this.ymf*c*(this.cosb1*a-this.sinb1*l*r):n=(c=Math.sqrt(2/(1+l*r)))*a*this.ymf,e=this.xmf*c*l*i;break;case this.N_POLE:case this.S_POLE:o>=0?(e=(c=Math.sqrt(o))*i,n=r*(this.mode===this.S_POLE?c:-c)):e=n=0;break}}return t.x=this.a*e+this.x0,t.y=this.a*n+this.y0,t}function $I(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,n=t.y/this.a,r,i,s,o,a,l,c;if(this.sphere){var u=0,h,d=0;if(h=Math.sqrt(e*e+n*n),i=h*.5,i>1)return null;switch(i=2*Math.asin(i),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(d=Math.sin(i),u=Math.cos(i)),this.mode){case this.EQUIT:i=Math.abs(h)<=K?0:Math.asin(n*d/h),e*=d,n=u*h;break;case this.OBLIQ:i=Math.abs(h)<=K?this.lat0:Math.asin(u*this.sinph0+n*d*this.cosph0/h),e*=d*this.cosph0,n=(u-Math.sin(i)*this.sinph0)*h;break;case this.N_POLE:n=-n,i=G-i;break;case this.S_POLE:i-=G;break}r=n===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(e,n)}else{if(c=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e/=this.dd,n*=this.dd,l=Math.sqrt(e*e+n*n),l<K)return t.x=this.long0,t.y=this.lat0,t;o=2*Math.asin(.5*l/this.rq),s=Math.cos(o),e*=o=Math.sin(o),this.mode===this.OBLIQ?(c=s*this.sinb1+n*o*this.cosb1/l,a=this.qp*c,n=l*this.cosb1*s-n*this.sinb1*o):(c=n*o/l,a=this.qp*c,n=l*s)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),a=e*e+n*n,!a)return t.x=this.long0,t.y=this.lat0,t;c=1-a/this.qp,this.mode===this.S_POLE&&(c=-c)}r=Math.atan2(e,n),i=e4(Math.asin(c),this.apa)}return t.x=Q(this.long0+r,this.over),t.y=i,t}var qI=.3333333333333333,HI=.17222222222222222,ZI=.10257936507936508,XI=.06388888888888888,YI=.0664021164021164,JI=.016415012942191543;function QI(t){var e,n=[];return n[0]=t*qI,e=t*t,n[0]+=e*HI,n[1]=e*XI,e*=t,n[0]+=e*ZI,n[1]+=e*YI,n[2]=e*JI,n}function e4(t,e){var n=t+t;return t+e[0]*Math.sin(n)+e[1]*Math.sin(n+n)+e[2]*Math.sin(n+n+n)}var t4=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const n4={init:UI,forward:KI,inverse:$I,names:t4,S_POLE:Ph,N_POLE:Th,EQUIT:Rh,OBLIQ:bl};function gi(t){return Math.abs(t)>1&&(t=t>1?1:-1),Math.asin(t)}function r4(){Math.abs(this.lat1+this.lat2)<K||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=ar(this.e3,this.sin_po,this.cos_po),this.qs1=oi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=ar(this.e3,this.sin_po,this.cos_po),this.qs2=oi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=oi(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>K?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function i4(t){var e=t.x,n=t.y;this.sin_phi=Math.sin(n),this.cos_phi=Math.cos(n);var r=oi(this.e3,this.sin_phi),i=this.a*Math.sqrt(this.c-this.ns0*r)/this.ns0,s=this.ns0*Q(e-this.long0,this.over),o=i*Math.sin(s)+this.x0,a=this.rh-i*Math.cos(s)+this.y0;return t.x=o,t.y=a,t}function s4(t){var e,n,r,i,s,o;return t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns0>=0?(e=Math.sqrt(t.x*t.x+t.y*t.y),r=1):(e=-Math.sqrt(t.x*t.x+t.y*t.y),r=-1),i=0,e!==0&&(i=Math.atan2(r*t.x,r*t.y)),r=e*this.ns0/this.a,this.sphere?o=Math.asin((this.c-r*r)/(2*this.ns0)):(n=(this.c-r*r)/this.ns0,o=this.phi1z(this.e3,n)),s=Q(i/this.ns0+this.long0,this.over),t.x=s,t.y=o,t}function o4(t,e){var n,r,i,s,o,a=gi(.5*e);if(t<K)return a;for(var l=t*t,c=1;c<=25;c++)if(n=Math.sin(a),r=Math.cos(a),i=t*n,s=1-i*i,o=.5*s*s/r*(e/(1-l)-n/s+.5/t*Math.log((1-i)/(1+i))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var a4=["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"];const l4={init:r4,forward:i4,inverse:s4,names:a4,phi1z:o4};function c4(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function u4(t){var e,n,r,i,s,o,a,l,c=t.x,u=t.y;return r=Q(c-this.long0,this.over),e=Math.sin(u),n=Math.cos(u),i=Math.cos(r),o=this.sin_p14*e+this.cos_p14*n*i,s=1,o>0||Math.abs(o)<=K?(a=this.x0+this.a*s*n*Math.sin(r)/o,l=this.y0+this.a*s*(this.cos_p14*e-this.sin_p14*n*i)/o):(a=this.x0+this.infinity_dist*n*Math.sin(r),l=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*n*i)),t.x=a,t.y=l,t}function h4(t){var e,n,r,i,s,o;return t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,(e=Math.sqrt(t.x*t.x+t.y*t.y))?(i=Math.atan2(e,this.rc),n=Math.sin(i),r=Math.cos(i),o=gi(r*this.sin_p14+t.y*n*this.cos_p14/e),s=Math.atan2(t.x*n,e*this.cos_p14*r-t.y*this.sin_p14*n),s=Q(this.long0+s,this.over)):(o=this.phic0,s=0),t.x=s,t.y=o,t}var d4=["gnom"];const f4={init:c4,forward:u4,inverse:h4,names:d4};function g4(t,e){var n=1-(1-t*t)/(2*t)*Math.log((1-t)/(1+t));if(Math.abs(Math.abs(e)-n)<1e-6)return e<0?-1*G:G;for(var r=Math.asin(.5*e),i,s,o,a,l=0;l<30;l++)if(s=Math.sin(r),o=Math.cos(r),a=t*s,i=Math.pow(1-a*a,2)/(2*o)*(e/(1-t*t)-s/(1-a*a)+.5/t*Math.log((1-a)/(1+a))),r+=i,Math.abs(i)<=1e-10)return r;return NaN}function m4(){this.sphere||(this.k0=ar(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function p4(t){var e=t.x,n=t.y,r,i,s=Q(e-this.long0,this.over);if(this.sphere)r=this.x0+this.a*s*Math.cos(this.lat_ts),i=this.y0+this.a*Math.sin(n)/Math.cos(this.lat_ts);else{var o=oi(this.e,Math.sin(n));r=this.x0+this.a*this.k0*s,i=this.y0+this.a*o*.5/this.k0}return t.x=r,t.y=i,t}function _4(t){t.x-=this.x0,t.y-=this.y0;var e,n;return this.sphere?(e=Q(this.long0+t.x/this.a/Math.cos(this.lat_ts),this.over),n=Math.asin(t.y/this.a*Math.cos(this.lat_ts))):(n=g4(this.e,2*t.y*this.k0/this.a),e=Q(this.long0+t.x/(this.a*this.k0),this.over)),t.x=e,t.y=n,t}var y4=["cea"];const v4={init:m4,forward:p4,inverse:_4,names:y4};function w4(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function S4(t){var e=t.x,n=t.y,r=Q(e-this.long0,this.over),i=pi(n-this.lat0);return t.x=this.x0+this.a*r*this.rc,t.y=this.y0+this.a*i,t}function b4(t){var e=t.x,n=t.y;return t.x=Q(this.long0+(e-this.x0)/(this.a*this.rc),this.over),t.y=pi(this.lat0+(n-this.y0)/this.a),t}var E4=["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"];const M4={init:w4,forward:S4,inverse:b4,names:E4};var Jm=20;function x4(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Na(this.es),this.e1=Da(this.es),this.e2=Ga(this.es),this.e3=za(this.es),this.ml0=this.a*Xt(this.e0,this.e1,this.e2,this.e3,this.lat0)}function C4(t){var e=t.x,n=t.y,r,i,s,o=Q(e-this.long0,this.over);if(s=o*Math.sin(n),this.sphere)Math.abs(n)<=K?(r=this.a*o,i=-1*this.a*this.lat0):(r=this.a*Math.sin(s)/Math.tan(n),i=this.a*(pi(n-this.lat0)+(1-Math.cos(s))/Math.tan(n)));else if(Math.abs(n)<=K)r=this.a*o,i=-1*this.ml0;else{var a=df(this.a,this.e,Math.sin(n))/Math.tan(n);r=a*Math.sin(s),i=this.a*Xt(this.e0,this.e1,this.e2,this.e3,n)-this.ml0+a*(1-Math.cos(s))}return t.x=r+this.x0,t.y=i+this.y0,t}function k4(t){var e,n,r,i,s,o,a,l,c;if(r=t.x-this.x0,i=t.y-this.y0,this.sphere)if(Math.abs(i+this.a*this.lat0)<=K)e=Q(r/this.a+this.long0,this.over),n=0;else{o=this.lat0+i/this.a,a=r*r/this.a/this.a+o*o,l=o;var u;for(s=Jm;s;--s)if(u=Math.tan(l),c=-1*(o*(l*u+1)-l-.5*(l*l+a)*u)/((l-o)/u-1),l+=c,Math.abs(c)<=K){n=l;break}e=Q(this.long0+Math.asin(r*Math.tan(l)/this.a)/Math.sin(n),this.over)}else if(Math.abs(i+this.ml0)<=K)n=0,e=Q(this.long0+r/this.a,this.over);else{o=(this.ml0+i)/this.a,a=r*r/this.a/this.a+o*o,l=o;var h,d,f,g,m;for(s=Jm;s;--s)if(m=this.e*Math.sin(l),h=Math.sqrt(1-m*m)*Math.tan(l),d=this.a*Xt(this.e0,this.e1,this.e2,this.e3,l),f=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),g=d/this.a,c=(o*(h*g+1)-g-.5*h*(g*g+a))/(this.es*Math.sin(2*l)*(g*g+a-2*o*g)/(4*h)+(o-g)*(h*f-2/Math.sin(2*l))-f),l-=c,Math.abs(c)<=K){n=l;break}h=Math.sqrt(1-this.es*Math.pow(Math.sin(n),2))*Math.tan(n),e=Q(this.long0+Math.asin(r*h/this.a)/Math.sin(n),this.over)}return t.x=e,t.y=n,t}var P4=["Polyconic","American_Polyconic","poly"];const T4={init:x4,forward:C4,inverse:k4,names:P4};function R4(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function A4(t){var e,n=t.x,r=t.y,i=r-this.lat0,s=n-this.long0,o=i/Bo*1e-5,a=s,l=1,c=0;for(e=1;e<=10;e++)l=l*o,c=c+this.A[e]*l;var u=c,h=a,d=1,f=0,g,m,p=0,_=0;for(e=1;e<=6;e++)g=d*u-f*h,m=f*u+d*h,d=g,f=m,p=p+this.B_re[e]*d-this.B_im[e]*f,_=_+this.B_im[e]*d+this.B_re[e]*f;return t.x=_*this.a+this.x0,t.y=p*this.a+this.y0,t}function I4(t){var e,n=t.x,r=t.y,i=n-this.x0,s=r-this.y0,o=s/this.a,a=i/this.a,l=1,c=0,u,h,d=0,f=0;for(e=1;e<=6;e++)u=l*o-c*a,h=c*o+l*a,l=u,c=h,d=d+this.C_re[e]*l-this.C_im[e]*c,f=f+this.C_im[e]*l+this.C_re[e]*c;for(var g=0;g<this.iterations;g++){var m=d,p=f,_,y,w=o,b=a;for(e=2;e<=6;e++)_=m*d-p*f,y=p*d+m*f,m=_,p=y,w=w+(e-1)*(this.B_re[e]*m-this.B_im[e]*p),b=b+(e-1)*(this.B_im[e]*m+this.B_re[e]*p);m=1,p=0;var E=this.B_re[1],P=this.B_im[1];for(e=2;e<=6;e++)_=m*d-p*f,y=p*d+m*f,m=_,p=y,E=E+e*(this.B_re[e]*m-this.B_im[e]*p),P=P+e*(this.B_im[e]*m+this.B_re[e]*p);var k=E*E+P*P;d=(w*E+b*P)/k,f=(b*E-w*P)/k}var R=d,C=f,V=1,W=0;for(e=1;e<=9;e++)V=V*R,W=W+this.D[e]*V;var A=this.lat0+W*Bo*1e5,q=this.long0+C;return t.x=q,t.y=A,t}var L4=["New_Zealand_Map_Grid","nzmg"];const O4={init:R4,forward:A4,inverse:I4,names:L4};function F4(){}function N4(t){var e=t.x,n=t.y,r=Q(e-this.long0,this.over),i=this.x0+this.a*r,s=this.y0+this.a*Math.log(Math.tan(Math.PI/4+n/2.5))*1.25;return t.x=i,t.y=s,t}function D4(t){t.x-=this.x0,t.y-=this.y0;var e=Q(this.long0+t.x/this.a,this.over),n=2.5*(Math.atan(Math.exp(.8*t.y/this.a))-Math.PI/4);return t.x=e,t.y=n,t}var G4=["Miller_Cylindrical","mill"];const z4={init:F4,forward:N4,inverse:D4,names:G4};var B4=20;function j4(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=of(this.es)}function W4(t){var e,n,r=t.x,i=t.y;if(r=Q(r-this.long0,this.over),this.sphere){if(!this.m)i=this.n!==1?Math.asin(this.n*Math.sin(i)):i;else for(var s=this.n*Math.sin(i),o=B4;o;--o){var a=(this.m*i+Math.sin(i)-s)/(this.m+Math.cos(i));if(i-=a,Math.abs(a)<K)break}e=this.a*this.C_x*r*(this.m+Math.cos(i)),n=this.a*this.C_y*i}else{var l=Math.sin(i),c=Math.cos(i);n=this.a*no(i,l,c,this.en),e=this.a*r*c/Math.sqrt(1-this.es*l*l)}return t.x=e,t.y=n,t}function V4(t){var e,n,r,i;return t.x-=this.x0,r=t.x/this.a,t.y-=this.y0,e=t.y/this.a,this.sphere?(e/=this.C_y,r=r/(this.C_x*(this.m+Math.cos(e))),this.m?e=gi((this.m*e+Math.sin(e))/this.n):this.n!==1&&(e=gi(Math.sin(e)/this.n)),r=Q(r+this.long0,this.over),e=pi(e)):(e=af(t.y/this.a,this.es,this.en),i=Math.abs(e),i<G?(i=Math.sin(e),n=this.long0+t.x*Math.sqrt(1-this.es*i*i)/(this.a*Math.cos(e)),r=Q(n,this.over)):i-K<G&&(r=this.long0)),t.x=r,t.y=e,t}var U4=["Sinusoidal","sinu"];const K4={init:j4,forward:W4,inverse:V4,names:U4};function $4(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0}function q4(t){for(var e=t.x,n=t.y,r=Q(e-this.long0,this.over),i=n,s=Math.PI*Math.sin(n);;){var o=-(i+Math.sin(i)-s)/(1+Math.cos(i));if(i+=o,Math.abs(o)<K)break}i/=2,Math.PI/2-Math.abs(n)<K&&(r=0);var a=.900316316158*this.a*r*Math.cos(i)+this.x0,l=1.4142135623731*this.a*Math.sin(i)+this.y0;return t.x=a,t.y=l,t}function H4(t){var e,n;t.x-=this.x0,t.y-=this.y0,n=t.y/(1.4142135623731*this.a),Math.abs(n)>.999999999999&&(n=.999999999999),e=Math.asin(n);var r=Q(this.long0+t.x/(.900316316158*this.a*Math.cos(e)),this.over);r<-Math.PI&&(r=-Math.PI),r>Math.PI&&(r=Math.PI),n=(2*e+Math.sin(2*e))/Math.PI,Math.abs(n)>1&&(n=1);var i=Math.asin(n);return t.x=r,t.y=i,t}var Z4=["Mollweide","moll"];const X4={init:$4,forward:q4,inverse:H4,names:Z4};function Y4(){Math.abs(this.lat1+this.lat2)<K||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Na(this.es),this.e1=Da(this.es),this.e2=Ga(this.es),this.e3=za(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=ar(this.e,this.sin_phi,this.cos_phi),this.ml1=Xt(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<K?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=ar(this.e,this.sin_phi,this.cos_phi),this.ml2=Xt(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Xt(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function J4(t){var e=t.x,n=t.y,r;if(this.sphere)r=this.a*(this.g-n);else{var i=Xt(this.e0,this.e1,this.e2,this.e3,n);r=this.a*(this.g-i)}var s=this.ns*Q(e-this.long0,this.over),o=this.x0+r*Math.sin(s),a=this.y0+this.rh-r*Math.cos(s);return t.x=o,t.y=a,t}function Q4(t){t.x-=this.x0,t.y=this.rh-t.y+this.y0;var e,n,r,i;this.ns>=0?(n=Math.sqrt(t.x*t.x+t.y*t.y),e=1):(n=-Math.sqrt(t.x*t.x+t.y*t.y),e=-1);var s=0;if(n!==0&&(s=Math.atan2(e*t.x,e*t.y)),this.sphere)return i=Q(this.long0+s/this.ns,this.over),r=pi(this.g-n/this.a),t.x=i,t.y=r,t;var o=this.g-n/this.a;return r=tc(o,this.e0,this.e1,this.e2,this.e3),i=Q(this.long0+s/this.ns,this.over),t.x=i,t.y=r,t}var eL=["Equidistant_Conic","eqdc"];const tL={init:Y4,forward:J4,inverse:Q4,names:eL};function nL(){this.R=this.a}function rL(t){var e=t.x,n=t.y,r=Q(e-this.long0,this.over),i,s;Math.abs(n)<=K&&(i=this.x0+this.R*r,s=this.y0);var o=gi(2*Math.abs(n/Math.PI));(Math.abs(r)<=K||Math.abs(Math.abs(n)-G)<=K)&&(i=this.x0,n>=0?s=this.y0+Math.PI*this.R*Math.tan(.5*o):s=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/r-r/Math.PI),l=a*a,c=Math.sin(o),u=Math.cos(o),h=u/(c+u-1),d=h*h,f=h*(2/c-1),g=f*f,m=Math.PI*this.R*(a*(h-g)+Math.sqrt(l*(h-g)*(h-g)-(g+l)*(d-g)))/(g+l);r<0&&(m=-m),i=this.x0+m;var p=l+h;return m=Math.PI*this.R*(f*p-a*Math.sqrt((g+l)*(l+1)-p*p))/(g+l),n>=0?s=this.y0+m:s=this.y0-m,t.x=i,t.y=s,t}function iL(t){var e,n,r,i,s,o,a,l,c,u,h,d,f;return t.x-=this.x0,t.y-=this.y0,h=Math.PI*this.R,r=t.x/h,i=t.y/h,s=r*r+i*i,o=-Math.abs(i)*(1+s),a=o-2*i*i+r*r,l=-2*o+1+2*i*i+s*s,f=i*i/l+(2*a*a*a/l/l/l-9*o*a/l/l)/27,c=(o-a*a/3/l)/l,u=2*Math.sqrt(-c/3),h=3*f/c/u,Math.abs(h)>1&&(h>=0?h=1:h=-1),d=Math.acos(h)/3,t.y>=0?n=(-u*Math.cos(d+Math.PI/3)-a/3/l)*Math.PI:n=-(-u*Math.cos(d+Math.PI/3)-a/3/l)*Math.PI,Math.abs(r)<K?e=this.long0:e=Q(this.long0+Math.PI*(s-1+Math.sqrt(1+2*(r*r-i*i)+s*s))/2/r,this.over),t.x=e,t.y=n,t}var sL=["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"];const oL={init:nL,forward:rL,inverse:iL,names:sL};function aL(t,e,n,r,i,s){const o=r-e,a=Math.atan((1-s)*Math.tan(t)),l=Math.atan((1-s)*Math.tan(n)),c=Math.sin(a),u=Math.cos(a),h=Math.sin(l),d=Math.cos(l);let f=o,g,m=100,p,_,y,w,b,E,P,k,R,C,V,W,A,q;do{if(p=Math.sin(f),_=Math.cos(f),y=Math.sqrt(d*p*(d*p)+(u*h-c*d*_)*(u*h-c*d*_)),y===0)return{azi1:0,s12:0};w=c*h+u*d*_,b=Math.atan2(y,w),E=u*d*p/y,P=1-E*E,k=P!==0?w-2*c*h/P:0,R=s/16*P*(4+s*(4-3*P)),g=f,f=o+(1-R)*s*E*(b+R*y*(k+R*w*(-1+2*k*k)))}while(Math.abs(f-g)>1e-12&&--m>0);return m===0?{azi1:NaN,s12:NaN}:(C=P*(i*i-i*(1-s)*(i*(1-s)))/(i*(1-s)*(i*(1-s))),V=1+C/16384*(4096+C*(-768+C*(320-175*C))),W=C/1024*(256+C*(-128+C*(74-47*C))),A=W*y*(k+W/4*(w*(-1+2*k*k)-W/6*k*(-3+4*y*y)*(-3+4*k*k))),q=i*(1-s)*V*(b-A),{azi1:Math.atan2(d*p,u*h-c*d*_),s12:q})}function lL(t,e,n,r,i,s){const o=Math.atan((1-s)*Math.tan(t)),a=Math.sin(o),l=Math.cos(o),c=Math.sin(n),u=Math.cos(n),h=Math.atan2(a,l*u),d=l*c,f=1-d*d,g=f*(i*i-i*(1-s)*(i*(1-s)))/(i*(1-s)*(i*(1-s))),m=1+g/16384*(4096+g*(-768+g*(320-175*g))),p=g/1024*(256+g*(-128+g*(74-47*g)));let _=r/(i*(1-s)*m),y,w=100,b,E,P,k;do b=Math.cos(2*h+_),E=Math.sin(_),P=Math.cos(_),k=p*E*(b+p/4*(P*(-1+2*b*b)-p/6*b*(-3+4*E*E)*(-3+4*b*b))),y=_,_=r/(i*(1-s)*m)+k;while(Math.abs(_-y)>1e-12&&--w>0);if(w===0)return{lat2:NaN,lon2:NaN};const R=a*E-l*P*u,C=Math.atan2(a*P+l*E*u,(1-s)*Math.sqrt(d*d+R*R)),V=Math.atan2(E*c,l*P-a*E*u),W=s/16*f*(4+s*(4-3*f)),A=V-(1-W)*s*d*(_+W*E*(b+W*P*(-1+2*b*b))),q=e+A;return{lat2:C,lon2:q}}function cL(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))}function uL(t){var e=t.x,n=t.y,r=Math.sin(t.y),i=Math.cos(t.y),s=Q(e-this.long0,this.over),o,a,l,c,u,h,d,f,g,m,p;return this.sphere?Math.abs(this.sin_p12-1)<=K?(t.x=this.x0+this.a*(G-n)*Math.sin(s),t.y=this.y0-this.a*(G-n)*Math.cos(s),t):Math.abs(this.sin_p12+1)<=K?(t.x=this.x0+this.a*(G+n)*Math.sin(s),t.y=this.y0+this.a*(G+n)*Math.cos(s),t):(g=this.sin_p12*r+this.cos_p12*i*Math.cos(s),d=Math.acos(g),f=d?d/Math.sin(d):1,t.x=this.x0+this.a*f*i*Math.sin(s),t.y=this.y0+this.a*f*(this.cos_p12*r-this.sin_p12*i*Math.cos(s)),t):(o=Na(this.es),a=Da(this.es),l=Ga(this.es),c=za(this.es),Math.abs(this.sin_p12-1)<=K?(u=this.a*Xt(o,a,l,c,G),h=this.a*Xt(o,a,l,c,n),t.x=this.x0+(u-h)*Math.sin(s),t.y=this.y0-(u-h)*Math.cos(s),t):Math.abs(this.sin_p12+1)<=K?(u=this.a*Xt(o,a,l,c,G),h=this.a*Xt(o,a,l,c,n),t.x=this.x0+(u+h)*Math.sin(s),t.y=this.y0+(u+h)*Math.cos(s),t):Math.abs(e)<K&&Math.abs(n-this.lat0)<K?(t.x=t.y=0,t):(m=aL(this.lat0,this.long0,n,e,this.a,this.f),p=m.azi1,t.x=m.s12*Math.sin(p),t.y=m.s12*Math.cos(p),t))}function hL(t){t.x-=this.x0,t.y-=this.y0;var e,n,r,i,s,o,a,l,c,u,h,d,f,g,m,p;return this.sphere?(e=Math.sqrt(t.x*t.x+t.y*t.y),e>2*G*this.a?void 0:(n=e/this.a,r=Math.sin(n),i=Math.cos(n),s=this.long0,Math.abs(e)<=K?o=this.lat0:(o=gi(i*this.sin_p12+t.y*r*this.cos_p12/e),a=Math.abs(this.lat0)-G,Math.abs(a)<=K?this.lat0>=0?s=Q(this.long0+Math.atan2(t.x,-t.y),this.over):s=Q(this.long0-Math.atan2(-t.x,t.y),this.over):s=Q(this.long0+Math.atan2(t.x*r,e*this.cos_p12*i-t.y*this.sin_p12*r),this.over)),t.x=s,t.y=o,t)):(l=Na(this.es),c=Da(this.es),u=Ga(this.es),h=za(this.es),Math.abs(this.sin_p12-1)<=K?(d=this.a*Xt(l,c,u,h,G),e=Math.sqrt(t.x*t.x+t.y*t.y),f=d-e,o=tc(f/this.a,l,c,u,h),s=Q(this.long0+Math.atan2(t.x,-1*t.y),this.over),t.x=s,t.y=o,t):Math.abs(this.sin_p12+1)<=K?(d=this.a*Xt(l,c,u,h,G),e=Math.sqrt(t.x*t.x+t.y*t.y),f=e-d,o=tc(f/this.a,l,c,u,h),s=Q(this.long0+Math.atan2(t.x,t.y),this.over),t.x=s,t.y=o,t):(g=Math.atan2(t.x,t.y),m=Math.sqrt(t.x*t.x+t.y*t.y),p=lL(this.lat0,this.long0,g,m,this.a,this.f),t.x=p.lon2,t.y=p.lat2,t))}var dL=["Azimuthal_Equidistant","aeqd"];const fL={init:cL,forward:uL,inverse:hL,names:dL};function gL(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function mL(t){var e,n,r,i,s,o,a,l,c=t.x,u=t.y;return r=Q(c-this.long0,this.over),e=Math.sin(u),n=Math.cos(u),i=Math.cos(r),o=this.sin_p14*e+this.cos_p14*n*i,s=1,(o>0||Math.abs(o)<=K)&&(a=this.a*s*n*Math.sin(r),l=this.y0+this.a*s*(this.cos_p14*e-this.sin_p14*n*i)),t.x=a,t.y=l,t}function pL(t){var e,n,r,i,s,o,a;return t.x-=this.x0,t.y-=this.y0,e=Math.sqrt(t.x*t.x+t.y*t.y),n=gi(e/this.a),r=Math.sin(n),i=Math.cos(n),o=this.long0,Math.abs(e)<=K?(a=this.lat0,t.x=o,t.y=a,t):(a=gi(i*this.sin_p14+t.y*r*this.cos_p14/e),s=Math.abs(this.lat0)-G,Math.abs(s)<=K?(this.lat0>=0?o=Q(this.long0+Math.atan2(t.x,-t.y),this.over):o=Q(this.long0-Math.atan2(-t.x,t.y),this.over),t.x=o,t.y=a,t):(o=Q(this.long0+Math.atan2(t.x*r,e*this.cos_p14*i-t.y*this.sin_p14*r),this.over),t.x=o,t.y=a,t))}var _L=["ortho"];const yL={init:gL,forward:mL,inverse:pL,names:_L};var at={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},Ke={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function vL(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=G-Ue/2?this.face=at.TOP:this.lat0<=-(G-Ue/2)?this.face=at.BOTTOM:Math.abs(this.long0)<=Ue?this.face=at.FRONT:Math.abs(this.long0)<=G+Ue?this.face=this.long0>0?at.RIGHT:at.LEFT:this.face=at.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function wL(t){var e={x:0,y:0},n,r,i,s,o,a,l={value:0};if(t.x-=this.long0,this.es!==0?n=Math.atan(this.one_minus_f_squared*Math.tan(t.y)):n=t.y,r=t.x,this.face===at.TOP)s=G-n,r>=Ue&&r<=G+Ue?(l.value=Ke.AREA_0,i=r-G):r>G+Ue||r<=-(G+Ue)?(l.value=Ke.AREA_1,i=r>0?r-_t:r+_t):r>-(G+Ue)&&r<=-Ue?(l.value=Ke.AREA_2,i=r+G):(l.value=Ke.AREA_3,i=r);else if(this.face===at.BOTTOM)s=G+n,r>=Ue&&r<=G+Ue?(l.value=Ke.AREA_0,i=-r+G):r<Ue&&r>=-Ue?(l.value=Ke.AREA_1,i=-r):r<-Ue&&r>=-(G+Ue)?(l.value=Ke.AREA_2,i=-r-G):(l.value=Ke.AREA_3,i=r>0?-r+_t:-r-_t);else{var c,u,h,d,f,g,m;this.face===at.RIGHT?r=As(r,+G):this.face===at.BACK?r=As(r,+_t):this.face===at.LEFT&&(r=As(r,-G)),d=Math.sin(n),f=Math.cos(n),g=Math.sin(r),m=Math.cos(r),c=f*m,u=f*g,h=d,this.face===at.FRONT?(s=Math.acos(c),i=dl(s,h,u,l)):this.face===at.RIGHT?(s=Math.acos(u),i=dl(s,h,-c,l)):this.face===at.BACK?(s=Math.acos(-c),i=dl(s,h,-u,l)):this.face===at.LEFT?(s=Math.acos(-u),i=dl(s,h,c,l)):(s=i=0,l.value=Ke.AREA_0)}return a=Math.atan(12/_t*(i+Math.acos(Math.sin(i)*Math.cos(Ue))-G)),o=Math.sqrt((1-Math.cos(s))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(i))))),l.value===Ke.AREA_1?a+=G:l.value===Ke.AREA_2?a+=_t:l.value===Ke.AREA_3&&(a+=1.5*_t),e.x=o*Math.cos(a),e.y=o*Math.sin(a),e.x=e.x*this.a+this.x0,e.y=e.y*this.a+this.y0,t.x=e.x,t.y=e.y,t}function SL(t){var e={lam:0,phi:0},n,r,i,s,o,a,l,c,u,h={value:0};if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,r=Math.atan(Math.sqrt(t.x*t.x+t.y*t.y)),n=Math.atan2(t.y,t.x),t.x>=0&&t.x>=Math.abs(t.y)?h.value=Ke.AREA_0:t.y>=0&&t.y>=Math.abs(t.x)?(h.value=Ke.AREA_1,n-=G):t.x<0&&-t.x>=Math.abs(t.y)?(h.value=Ke.AREA_2,n=n<0?n+_t:n-_t):(h.value=Ke.AREA_3,n+=G),u=_t/12*Math.tan(n),o=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),a=Math.atan(o),i=Math.cos(n),s=Math.tan(r),l=1-i*i*s*s*(1-Math.cos(Math.atan(1/Math.cos(a)))),l<-1?l=-1:l>1&&(l=1),this.face===at.TOP)c=Math.acos(l),e.phi=G-c,h.value===Ke.AREA_0?e.lam=a+G:h.value===Ke.AREA_1?e.lam=a<0?a+_t:a-_t:h.value===Ke.AREA_2?e.lam=a-G:e.lam=a;else if(this.face===at.BOTTOM)c=Math.acos(l),e.phi=c-G,h.value===Ke.AREA_0?e.lam=-a+G:h.value===Ke.AREA_1?e.lam=-a:h.value===Ke.AREA_2?e.lam=-a-G:e.lam=a<0?-a-_t:-a+_t;else{var d,f,g;d=l,u=d*d,u>=1?g=0:g=Math.sqrt(1-u)*Math.sin(a),u+=g*g,u>=1?f=0:f=Math.sqrt(1-u),h.value===Ke.AREA_1?(u=f,f=-g,g=u):h.value===Ke.AREA_2?(f=-f,g=-g):h.value===Ke.AREA_3&&(u=f,f=g,g=-u),this.face===at.RIGHT?(u=d,d=-f,f=u):this.face===at.BACK?(d=-d,f=-f):this.face===at.LEFT&&(u=d,d=f,f=-u),e.phi=Math.acos(-g)-G,e.lam=Math.atan2(f,d),this.face===at.RIGHT?e.lam=As(e.lam,-G):this.face===at.BACK?e.lam=As(e.lam,-_t):this.face===at.LEFT&&(e.lam=As(e.lam,+G))}if(this.es!==0){var m,p,_;m=e.phi<0?1:0,p=Math.tan(e.phi),_=this.b/Math.sqrt(p*p+this.one_minus_f_squared),e.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),m&&(e.phi=-e.phi)}return e.lam+=this.long0,t.x=e.lam,t.y=e.phi,t}function dl(t,e,n,r){var i;return t<K?(r.value=Ke.AREA_0,i=0):(i=Math.atan2(e,n),Math.abs(i)<=Ue?r.value=Ke.AREA_0:i>Ue&&i<=G+Ue?(r.value=Ke.AREA_1,i-=G):i>G+Ue||i<=-(G+Ue)?(r.value=Ke.AREA_2,i=i>=0?i-_t:i+_t):(r.value=Ke.AREA_3,i+=G)),i}function As(t,e){var n=t+e;return n<-_t?n+=ma:n>+_t&&(n-=ma),n}var bL=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const EL={init:vL,forward:wL,inverse:SL,names:bL};var Ah=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Co=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],u1=.8487,h1=1.3523,d1=an/5,ML=1/d1,ys=18,nc=function(t,e){return t[0]+e*(t[1]+e*(t[2]+e*t[3]))},xL=function(t,e){return t[1]+e*(2*t[2]+e*3*t[3])};function CL(t,e,n,r){for(var i=e;r;--r){var s=t(i);if(i-=s,Math.abs(s)<n)break}return i}function kL(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function PL(t){var e=Q(t.x-this.long0,this.over),n=Math.abs(t.y),r=Math.floor(n*d1);r<0?r=0:r>=ys&&(r=ys-1),n=an*(n-ML*r);var i={x:nc(Ah[r],n)*e,y:nc(Co[r],n)};return t.y<0&&(i.y=-i.y),i.x=i.x*this.a*u1+this.x0,i.y=i.y*this.a*h1+this.y0,i}function TL(t){var e={x:(t.x-this.x0)/(this.a*u1),y:Math.abs(t.y-this.y0)/(this.a*h1)};if(e.y>=1)e.x/=Ah[ys][0],e.y=t.y<0?-G:G;else{var n=Math.floor(e.y*ys);for(n<0?n=0:n>=ys&&(n=ys-1);;)if(Co[n][0]>e.y)--n;else if(Co[n+1][0]<=e.y)++n;else break;var r=Co[n],i=5*(e.y-r[0])/(Co[n+1][0]-r[0]);i=CL(function(s){return(nc(r,s)-e.y)/xL(r,s)},i,K,100),e.x/=nc(Ah[n],i),e.y=(5*n+i)*ft,t.y<0&&(e.y=-e.y)}return e.x=Q(e.x+this.long0,this.over),e}var RL=["Robinson","robin"];const AL={init:kL,forward:PL,inverse:TL,names:RL};function IL(){this.name="geocent"}function LL(t){var e=Qy(t,this.es,this.a);return e}function OL(t){var e=e1(t,this.es,this.a,this.b);return e}var FL=["Geocentric","geocentric","geocent","Geocent"];const NL={init:IL,forward:LL,inverse:OL,names:FL};var Ft={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},yo={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function DL(){if(Object.keys(yo).forEach((function(n){if(typeof this[n]>"u")this[n]=yo[n].def;else{if(yo[n].num&&isNaN(this[n]))throw new Error("Invalid parameter value, must be numeric "+n+" = "+this[n]);yo[n].num&&(this[n]=parseFloat(this[n]))}yo[n].degrees&&(this[n]=this[n]*ft)}).bind(this)),Math.abs(Math.abs(this.lat0)-G)<K?this.mode=this.lat0<0?Ft.S_POLE:Ft.N_POLE:Math.abs(this.lat0)<K?this.mode=Ft.EQUIT:(this.mode=Ft.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var t=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(t),this.sw=Math.sin(t)}function GL(t){t.x-=this.long0;var e=Math.sin(t.y),n=Math.cos(t.y),r=Math.cos(t.x),i,s;switch(this.mode){case Ft.OBLIQ:s=this.sinph0*e+this.cosph0*n*r;break;case Ft.EQUIT:s=n*r;break;case Ft.S_POLE:s=-e;break;case Ft.N_POLE:s=e;break}switch(s=this.pn1/(this.p-s),i=s*n*Math.sin(t.x),this.mode){case Ft.OBLIQ:s*=this.cosph0*e-this.sinph0*n*r;break;case Ft.EQUIT:s*=e;break;case Ft.N_POLE:s*=-(n*r);break;case Ft.S_POLE:s*=n*r;break}var o,a;return o=s*this.cg+i*this.sg,a=1/(o*this.sw*this.h1+this.cw),i=(i*this.cg-s*this.sg)*this.cw*a,s=o*a,t.x=i*this.a,t.y=s*this.a,t}function zL(t){t.x/=this.a,t.y/=this.a;var e={x:t.x,y:t.y},n,r,i;i=1/(this.pn1-t.y*this.sw),n=this.pn1*t.x*i,r=this.pn1*t.y*this.cw*i,t.x=n*this.cg+r*this.sg,t.y=r*this.cg-n*this.sg;var s=on(t.x,t.y);if(Math.abs(s)<K)e.x=0,e.y=t.y;else{var o,a;switch(a=1-s*s*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/s+s/this.pn1),o=Math.sqrt(1-a*a),this.mode){case Ft.OBLIQ:e.y=Math.asin(o*this.sinph0+t.y*a*this.cosph0/s),t.y=(o-this.sinph0*Math.sin(e.y))*s,t.x*=a*this.cosph0;break;case Ft.EQUIT:e.y=Math.asin(t.y*a/s),t.y=o*s,t.x*=a;break;case Ft.N_POLE:e.y=Math.asin(o),t.y=-t.y;break;case Ft.S_POLE:e.y=-Math.asin(o);break}e.x=Math.atan2(t.x,t.y)}return t.x=e.x+this.long0,t.y=e.y,t}var BL=["Tilted_Perspective","tpers"];const jL={init:DL,forward:GL,inverse:zL,names:BL};function WL(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var t=1-this.es,e=1/t;this.radius_p=Math.sqrt(t),this.radius_p2=t,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function VL(t){var e=t.x,n=t.y,r,i,s,o;if(e=e-this.long0,this.shape==="ellipse"){n=Math.atan(this.radius_p2*Math.tan(n));var a=this.radius_p/on(this.radius_p*Math.cos(n),Math.sin(n));if(i=a*Math.cos(e)*Math.cos(n),s=a*Math.sin(e)*Math.cos(n),o=a*Math.sin(n),(this.radius_g-i)*i-s*s-o*o*this.radius_p_inv2<0)return t.x=Number.NaN,t.y=Number.NaN,t;r=this.radius_g-i,this.flip_axis?(t.x=this.radius_g_1*Math.atan(s/on(o,r)),t.y=this.radius_g_1*Math.atan(o/r)):(t.x=this.radius_g_1*Math.atan(s/r),t.y=this.radius_g_1*Math.atan(o/on(s,r)))}else this.shape==="sphere"&&(r=Math.cos(n),i=Math.cos(e)*r,s=Math.sin(e)*r,o=Math.sin(n),r=this.radius_g-i,this.flip_axis?(t.x=this.radius_g_1*Math.atan(s/on(o,r)),t.y=this.radius_g_1*Math.atan(o/r)):(t.x=this.radius_g_1*Math.atan(s/r),t.y=this.radius_g_1*Math.atan(o/on(s,r))));return t.x=t.x*this.a,t.y=t.y*this.a,t}function UL(t){var e=-1,n=0,r=0,i,s,o,a;if(t.x=t.x/this.a,t.y=t.y/this.a,this.shape==="ellipse"){this.flip_axis?(r=Math.tan(t.y/this.radius_g_1),n=Math.tan(t.x/this.radius_g_1)*on(1,r)):(n=Math.tan(t.x/this.radius_g_1),r=Math.tan(t.y/this.radius_g_1)*on(1,n));var l=r/this.radius_p;if(i=n*n+l*l+e*e,s=2*this.radius_g*e,o=s*s-4*i*this.C,o<0)return t.x=Number.NaN,t.y=Number.NaN,t;a=(-s-Math.sqrt(o))/(2*i),e=this.radius_g+a*e,n*=a,r*=a,t.x=Math.atan2(n,e),t.y=Math.atan(r*Math.cos(t.x)/e),t.y=Math.atan(this.radius_p_inv2*Math.tan(t.y))}else if(this.shape==="sphere"){if(this.flip_axis?(r=Math.tan(t.y/this.radius_g_1),n=Math.tan(t.x/this.radius_g_1)*Math.sqrt(1+r*r)):(n=Math.tan(t.x/this.radius_g_1),r=Math.tan(t.y/this.radius_g_1)*Math.sqrt(1+n*n)),i=n*n+r*r+e*e,s=2*this.radius_g*e,o=s*s-4*i*this.C,o<0)return t.x=Number.NaN,t.y=Number.NaN,t;a=(-s-Math.sqrt(o))/(2*i),e=this.radius_g+a*e,n*=a,r*=a,t.x=Math.atan2(n,e),t.y=Math.atan(r*Math.cos(t.x)/e)}return t.x=t.x+this.long0,t}var KL=["Geostationary Satellite View","Geostationary_Satellite","geos"];const $L={init:WL,forward:VL,inverse:UL,names:KL};var jo=1.340264,Wo=-.081106,Vo=893e-6,Uo=.003796,rc=Math.sqrt(3)/2;function qL(){this.es=0,this.long0=this.long0!==void 0?this.long0:0,this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0}function HL(t){var e=Q(t.x-this.long0,this.over),n=t.y,r=Math.asin(rc*Math.sin(n)),i=r*r,s=i*i*i;return t.x=e*Math.cos(r)/(rc*(jo+3*Wo*i+s*(7*Vo+9*Uo*i))),t.y=r*(jo+Wo*i+s*(Vo+Uo*i)),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function ZL(t){t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a;var e=1e-9,n=12,r=t.y,i,s,o,a,l,c;for(c=0;c<n&&(i=r*r,s=i*i*i,o=r*(jo+Wo*i+s*(Vo+Uo*i))-t.y,a=jo+3*Wo*i+s*(7*Vo+9*Uo*i),r-=l=o/a,!(Math.abs(l)<e));++c);return i=r*r,s=i*i*i,t.x=rc*t.x*(jo+3*Wo*i+s*(7*Vo+9*Uo*i))/Math.cos(r),t.y=Math.asin(Math.sin(r)/rc),t.x=Q(t.x+this.long0,this.over),t}var XL=["eqearth","Equal Earth","Equal_Earth"];const YL={init:qL,forward:HL,inverse:ZL,names:XL};var ya=1e-10;function JL(){var t;if(this.phi1=this.lat1,Math.abs(this.phi1)<ya)throw new Error;this.es?(this.en=of(this.es),this.m1=no(this.phi1,this.am1=Math.sin(this.phi1),t=Math.cos(this.phi1),this.en),this.am1=t/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=e3,this.forward=QL):(Math.abs(this.phi1)+ya>=G?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=n3,this.forward=t3)}function QL(t){var e=Q(t.x-(this.long0||0),this.over),n=t.y,r,i,s;return r=this.am1+this.m1-no(n,i=Math.sin(n),s=Math.cos(n),this.en),i=s*e/(r*Math.sqrt(1-this.es*i*i)),t.x=r*Math.sin(i),t.y=this.am1-r*Math.cos(i),t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function e3(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,n,r,i;if(n=on(t.x,t.y=this.am1-t.y),i=af(this.am1+this.m1-n,this.es,this.en),(e=Math.abs(i))<G)e=Math.sin(i),r=n*Math.atan2(t.x,t.y)*Math.sqrt(1-this.es*e*e)/Math.cos(i);else if(Math.abs(e-G)<=ya)r=0;else throw new Error;return t.x=Q(r+(this.long0||0),this.over),t.y=pi(i),t}function t3(t){var e=Q(t.x-(this.long0||0),this.over),n=t.y,r,i;return i=this.cphi1+this.phi1-n,Math.abs(i)>ya?(t.x=i*Math.sin(r=e*Math.cos(n)/i),t.y=this.cphi1-i*Math.cos(r)):t.x=t.y=0,t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function n3(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,n,r=on(t.x,t.y=this.cphi1-t.y);if(n=this.cphi1+this.phi1-r,Math.abs(n)>G)throw new Error;return Math.abs(Math.abs(n)-G)<=ya?e=0:e=r*Math.atan2(t.x,t.y)/Math.cos(n),t.x=Q(e+(this.long0||0),this.over),t.y=pi(n),t}var r3=["bonne","Bonne (Werner lat_1=90)"];const i3={init:JL,names:r3},Qm={OBLIQUE:{forward:c3,inverse:h3},TRANSVERSE:{forward:u3,inverse:d3}},ic={ROTATE:{o_alpha:"oAlpha",o_lon_c:"oLongC",o_lat_c:"oLatC"},NEW_POLE:{o_lat_p:"oLatP",o_lon_p:"oLongP"},NEW_EQUATOR:{o_lon_1:"oLong1",o_lat_1:"oLat1",o_lon_2:"oLong2",o_lat_2:"oLat2"}};function s3(){if(this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.title=this.title||"General Oblique Transformation",this.isIdentity=Zy.includes(this.o_proj),!this.o_proj)throw new Error("Missing parameter: o_proj");if(this.o_proj==="ob_tran")throw new Error("Invalid value for o_proj: "+this.o_proj);const t=this.projStr.replace("+proj=ob_tran","").replace("+o_proj=","+proj=").trim(),e=Rn(t);if(!e)throw new Error("Invalid parameter: o_proj. Unknown projection "+this.o_proj);e.long0=0,this.obliqueProjection=e;let n;const r=Object.keys(ic),i=a=>{if(typeof this[a]>"u")return;const l=parseFloat(this[a])*ft;if(isNaN(l))throw new Error("Invalid value for "+a+": "+this[a]);return l};for(let a=0;a<r.length;a++){const l=r[a],c=ic[l],u=Object.entries(c);if(u.some(([d])=>typeof this[d]<"u")){n=c;for(let d=0;d<u.length;d++){const[f,g]=u[d],m=i(f);if(typeof m>"u")throw new Error("Missing parameter: "+f+".");this[g]=m}break}}if(!n)throw new Error("No valid parameters provided for ob_tran projection.");const{lamp:s,phip:o}=l3(this,n);this.lamp=s,Math.abs(o)>K?(this.cphip=Math.cos(o),this.sphip=Math.sin(o),this.projectionType=Qm.OBLIQUE):this.projectionType=Qm.TRANSVERSE}function o3(t){return this.projectionType.forward(this,t)}function a3(t){return this.projectionType.inverse(this,t)}function l3(t,e){let n,r;if(e===ic.ROTATE){let i=t.oLongC,s=t.oLatC,o=t.oAlpha;if(Math.abs(Math.abs(s)-G)<=K)throw new Error("Invalid value for o_lat_c: "+t.o_lat_c+" should be < 90°");r=i+Math.atan2(-1*Math.cos(o),-1*Math.sin(o)*Math.sin(s)),n=Math.asin(Math.cos(s)*Math.sin(o))}else if(e===ic.NEW_POLE)r=t.oLongP,n=t.oLatP;else{let i=t.oLong1,s=t.oLat1,o=t.oLong2,a=t.oLat2,l=Math.abs(s);if(Math.abs(s)>G-K)throw new Error("Invalid value for o_lat_1: "+t.o_lat_1+" should be < 90°");if(Math.abs(a)>G-K)throw new Error("Invalid value for o_lat_2: "+t.o_lat_2+" should be < 90°");if(Math.abs(s-a)<K)throw new Error("Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2");if(l<K)throw new Error("Invalid value for o_lat_1: o_lat_1 should be different from zero");r=Math.atan2(Math.cos(s)*Math.sin(a)*Math.cos(i)-Math.sin(s)*Math.cos(a)*Math.cos(o),Math.sin(s)*Math.cos(a)*Math.sin(o)-Math.cos(s)*Math.sin(a)*Math.sin(i)),n=Math.atan(-1*Math.cos(r-i)/Math.tan(s))}return{lamp:r,phip:n}}function c3(t,e){let{x:n,y:r}=e;n+=t.long0;const i=Math.cos(n),s=Math.sin(r),o=Math.cos(r);e.x=Q(Math.atan2(o*Math.sin(n),t.sphip*o*i+t.cphip*s)+t.lamp),e.y=Math.asin(t.sphip*s-t.cphip*o*i);const a=t.obliqueProjection.forward(e);return t.isIdentity&&(a.x*=an,a.y*=an),a}function u3(t,e){let{x:n,y:r}=e;n+=t.long0;const i=Math.cos(r),s=Math.cos(n);e.x=Q(Math.atan2(i*Math.sin(n),Math.sin(r))+t.lamp),e.y=Math.asin(-1*i*s);const o=t.obliqueProjection.forward(e);return t.isIdentity&&(o.x*=an,o.y*=an),o}function h3(t,e){t.isIdentity&&(e.x*=ft,e.y*=ft);const n=t.obliqueProjection.inverse(e);let{x:r,y:i}=n;if(r<Number.MAX_VALUE){r-=t.lamp;const s=Math.cos(r),o=Math.sin(i),a=Math.cos(i);e.x=Math.atan2(a*Math.sin(r),t.sphip*a*s-t.cphip*o),e.y=Math.asin(t.sphip*o+t.cphip*a*s)}return e.x=Q(e.x+t.long0),e}function d3(t,e){t.isIdentity&&(e.x*=ft,e.y*=ft);const n=t.obliqueProjection.inverse(e);let{x:r,y:i}=n;if(r<Number.MAX_VALUE){const s=Math.cos(i);r-=t.lamp,e.x=Math.atan2(s*Math.sin(r),-1*Math.sin(i)),e.y=Math.asin(s*Math.cos(r))}return e.x=Q(e.x+t.long0),e}var f3=["General Oblique Transformation","General_Oblique_Transformation","ob_tran"];const g3={init:s3,forward:o3,inverse:a3,names:f3};function m3(t){t.Proj.projections.add(wl),t.Proj.projections.add(Sl),t.Proj.projections.add(rI),t.Proj.projections.add(dI),t.Proj.projections.add(_I),t.Proj.projections.add(bI),t.Proj.projections.add(PI),t.Proj.projections.add(LI),t.Proj.projections.add(GI),t.Proj.projections.add(VI),t.Proj.projections.add(n4),t.Proj.projections.add(l4),t.Proj.projections.add(f4),t.Proj.projections.add(v4),t.Proj.projections.add(M4),t.Proj.projections.add(T4),t.Proj.projections.add(O4),t.Proj.projections.add(z4),t.Proj.projections.add(K4),t.Proj.projections.add(X4),t.Proj.projections.add(tL),t.Proj.projections.add(oL),t.Proj.projections.add(fL),t.Proj.projections.add(yL),t.Proj.projections.add(EL),t.Proj.projections.add(AL),t.Proj.projections.add(NL),t.Proj.projections.add(jL),t.Proj.projections.add($L),t.Proj.projections.add(YL),t.Proj.projections.add(i3),t.Proj.projections.add(g3)}const Ih=Object.assign(wA,{defaultDatum:"WGS84",Proj:Rn,WGS84:new Rn("WGS84"),Point:qs,toPoint:t1,defs:xt,nadgrid:nA,transform:ec,mgrs:SA,version:"__VERSION__"});m3(Ih);const p3={class:"coordinate-transformer"},_3={class:"transformer__controls"},y3={class:"control-group"},v3=["value"],w3={class:"control-group"},S3=["value"],b3={class:"transformer__result"},E3={class:"result__header"},M3={class:"result__format"},x3={class:"result__coordinates"},C3={class:"result__description"},k3={class:"transformer__all-systems"},P3={class:"eyebrow"},T3={class:"all-systems__grid"},R3={class:"system-card"},A3={class:"system-card__value"},I3={class:"system-card"},L3={class:"system-card__value"},O3={class:"system-card"},F3={class:"system-card__value"},N3={class:"system-card"},D3={class:"system-card__value"},G3={__name:"CoordinateTransformer",setup(t){Ih.defs("EPSG:25832","+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),hR(Ih);const e=[{id:"epsg25832",label:"EPSG:25832 (UTM 32N)",description:"Projizierte Koordinaten in Metern",code:"EPSG:25832"},{id:"epsg3857",label:"EPSG:3857 (Web Mercator)",description:"Standard-Projektion für Web-Mapping (OpenLayers, Google Maps)",code:"EPSG:3857"},{id:"wgs84-decimal",label:"WGS84 Decimal",description:"Längengrad, Breitengrad in Dezimalgrad",code:"EPSG:4326"},{id:"wgs84-latlon",label:"WGS84 Lat/Lon",description:"Breitengrad, Längengrad (traditionelle Reihenfolge)",code:"EPSG:4326"}],n=[{name:"Hamburg Rathaus (City Hall)",epsg25832:[569e3,5935e3]},{name:"Hamburg Airport",epsg25832:[568500,5940500]},{name:"Hamburg Port",epsg25832:[565e3,5931e3]},{name:"Alster Lake",epsg25832:[569500,5936e3]}],r=Tt("epsg25832"),i=Tt(n[0]),s=ne(()=>{const l=i.value.epsg25832;switch(r.value){case"epsg25832":return{display:`${l[0].toFixed(0)}, ${l[1].toFixed(0)}`,unit:"m",format:"Easting, Northing"};case"epsg3857":{const c=Jr(l,"EPSG:25832","EPSG:3857");return{display:`${c[0].toFixed(2)}, ${c[1].toFixed(2)}`,unit:"m",format:"X, Y"}}case"wgs84-decimal":{const c=Jr(l,"EPSG:25832","EPSG:4326");return{display:`${c[0].toFixed(6)}, ${c[1].toFixed(6)}`,unit:"°",format:"Longitude, Latitude"}}case"wgs84-latlon":{const c=Jr(l,"EPSG:25832","EPSG:4326"),u=c[1]>=0?"N":"S",h=c[0]>=0?"E":"W";return{display:`${Math.abs(c[1]).toFixed(6)}°${u}, ${Math.abs(c[0]).toFixed(6)}°${h}`,unit:"",format:"Latitude, Longitude"}}default:return{display:"Unknown projection",unit:"",format:""}}}),o=ne(()=>{const l=i.value.epsg25832,c=Jr(l,"EPSG:25832","EPSG:4326"),u=Jr(l,"EPSG:25832","EPSG:3857");return{epsg25832:`${l[0].toFixed(0)}, ${l[1].toFixed(0)} m`,epsg3857:`${u[0].toFixed(2)}, ${u[1].toFixed(2)} m`,wgs84Decimal:`${c[0].toFixed(6)}°, ${c[1].toFixed(6)}°`,wgs84LatLon:`${Math.abs(c[1]).toFixed(6)}°${c[1]>=0?"N":"S"}, ${Math.abs(c[0]).toFixed(6)}°${c[0]>=0?"E":"W"}`}}),a=ne(()=>e.find(l=>l.id===r.value));return(l,c)=>{var u,h;return F(),B("div",p3,[c[8]||(c[8]=S("h3",null,"Interaktiver Koordinaten-Transformer",-1)),c[9]||(c[9]=S("p",{class:"muted"},"Wähle einen Ort und ein Projektionssystem aus, um zu sehen, wie Koordinaten dargestellt werden.",-1)),S("div",_3,[S("div",y3,[c[2]||(c[2]=S("label",{class:"control-label"},"Ort",-1)),kl(S("select",{"onUpdate:modelValue":c[0]||(c[0]=d=>i.value=d),class:"transformer__select"},[(F(),B(Re,null,gt(n,d=>S("option",{key:d.name,value:d},X(d.name),9,v3)),64))],512),[[ng,i.value]])]),S("div",w3,[c[3]||(c[3]=S("label",{class:"control-label"},"Koordinatensystem",-1)),kl(S("select",{"onUpdate:modelValue":c[1]||(c[1]=d=>r.value=d),class:"transformer__select"},[(F(),B(Re,null,gt(e,d=>S("option",{key:d.id,value:d.id},X(d.label),9,S3)),64))],512),[[ng,r.value]])])]),S("div",b3,[S("div",E3,[S("h4",null,X((u=a.value)==null?void 0:u.label),1),S("span",M3,X(s.value.format),1)]),S("div",x3,X(s.value.display),1),S("p",C3,X((h=a.value)==null?void 0:h.description),1)]),S("div",k3,[S("p",P3,"Alle Koordinatensysteme für "+X(i.value.name),1),S("div",T3,[S("div",R3,[c[4]||(c[4]=S("div",{class:"system-card__label"},"EPSG:25832",-1)),S("div",A3,X(o.value.epsg25832),1)]),S("div",I3,[c[5]||(c[5]=S("div",{class:"system-card__label"},"EPSG:3857",-1)),S("div",L3,X(o.value.epsg3857),1)]),S("div",O3,[c[6]||(c[6]=S("div",{class:"system-card__label"},"WGS84 Decimal",-1)),S("div",F3,X(o.value.wgs84Decimal),1)]),S("div",N3,[c[7]||(c[7]=S("div",{class:"system-card__label"},"WGS84 Lat/Lon",-1)),S("div",D3,X(o.value.wgs84LatLon),1)])])])])}}},z3=wt(G3,[["__scopeId","data-v-20d69487"]]),B3={class:"lesson"},j3={class:"lesson__header"},W3={key:0,class:"lesson__body"},V3=["innerHTML"],U3={key:1,class:"lesson__body"},K3=["href"],$3={key:5,class:"lesson__body"},q3=["disabled"],H3={__name:"LessonRenderer",props:{lesson:{type:Object,required:!0},moduleId:{type:String,required:!0}},emits:["complete"],setup(t,{emit:e}){const n=t,r=e,i=ln(),s=ne(()=>i.getters["progress/isLessonCompleted"](n.moduleId,n.lesson.id)),o=Object.assign({"../data/content/capstone/brief.md":oM,"../data/content/dev_environment.md":aM,"../data/content/geo_basics/projections.md":lM,"../data/content/geo_basics/wms_vs_wfs.md":cM,"../data/content/js_fundamentals/intro.md":uM,"../data/content/masterportal/architecture.md":hM,"../data/content/masterportal/config.md":dM,"../data/content/masterportal/config_structure.md":fM,"../data/content/masterportal/installation.md":gM,"../data/content/masterportal/overview.md":mM,"../data/content/masterportal/portal_setup.md":pM,"../data/content/masterportal/tool_development.md":_M,"../data/content/polar/capstone_brief.md":yM,"../data/content/polar/evidence_mapping.md":vM,"../data/content/polar/overview.md":wM,"../data/content/polar/quick_start.md":SM,"../data/content/polar/week1_architecture.md":bM,"../data/content/polar/week2_plugin_anatomy.md":EM,"../data/content/polar/week3_client_development.md":MM,"../data/content/polar/week4_testing.md":xM,"../data/content/polar/week5_release.md":CM,"../data/content/testing/stack.md":kM,"../data/content/vue_basics/intro.md":PM,"../data/content/vue_basics/vuex.md":TM});je.setOptions({breaks:!0,gfm:!0});const a=ne(()=>{if(n.lesson.type!=="markdown")return"";const f=`../data/content/${n.lesson.content}`,g=o[f];return g?je.parse(g):"Content coming soon."}),l=["markdown","external-link","geo-playground"],c=ne(()=>l.includes(n.lesson.type)),u=ne(()=>n.lesson.id==="projections-theory"),h=ne(()=>n.lesson.id==="projections-theory"),d=()=>{s.value||r("complete")};return(f,g)=>(F(),B("div",B3,[S("header",j3,[g[0]||(g[0]=S("p",{class:"eyebrow"},"Lektion",-1)),S("h2",null,X(t.lesson.title),1)]),t.lesson.type==="markdown"?(F(),B("div",W3,[S("div",{innerHTML:a.value},null,8,V3),u.value?(F(),yt(z3,{key:0})):Ye("",!0),h.value?(F(),yt(Im,{key:1,"config-id":"projection_demo"})):Ye("",!0)])):t.lesson.type==="external-link"?(F(),B("div",U3,[g[1]||(g[1]=S("p",{class:"muted"},"Schaue dir die externe Ressource an und mache Notizen in deinem Journal.",-1)),S("a",{href:t.lesson.url,class:"primary-btn",target:"_blank",rel:"noreferrer"},"Ressource öffnen ↗",8,K3)])):t.lesson.type==="quiz"?(F(),yt(Fx,{key:2,"quiz-id":t.lesson.quizId,"module-id":t.moduleId,"lesson-id":t.lesson.id,onPassed:d},null,8,["quiz-id","module-id","lesson-id"])):t.lesson.type==="geo-playground"?(F(),yt(Im,{key:3,"config-id":t.lesson.configId},null,8,["config-id"])):t.lesson.type==="task-list"?(F(),yt(n2,{key:4,"tasks-id":t.lesson.tasksId,onCompleted:d},null,8,["tasks-id"])):(F(),B("div",$3,[...g[2]||(g[2]=[S("p",null,"Lektionstyp noch nicht unterstützt.",-1)])])),c.value?(F(),B("button",{key:6,class:vt(["ghost-btn",{"ghost-btn--completed":s.value}]),onClick:d,disabled:s.value},X(s.value?"✓ Abgeschlossen":"Als abgeschlossen markieren"),11,q3)):Ye("",!0)]))}},Z3=wt(H3,[["__scopeId","data-v-b10ef5a4"]]),X3={key:0,class:"module-view"},Y3={class:"module-view__sidebar card"},J3={class:"module-view__header"},Q3={class:"lesson-list"},eO=["onClick"],tO={class:"lesson-title"},nO={class:"lesson-type"},rO={key:0,class:"module-view__content card"},iO={key:1,class:"module-view__content card"},sO={key:1,class:"card"},oO={key:0},aO={key:1},lO={__name:"ModuleView",setup(t){const e=wc(),n=ab(),r=ln(),i=ne(()=>bc(r.state.tracks.enabled)),s=ne(()=>i.value.find(g=>g.id===e.params.id)),o=ne(()=>!s.value&&Ec(e.params.id)),a=ne(()=>{var g;return((g=s.value)==null?void 0:g.lessons)||[]}),l=ne(()=>{var g;return e.query.lesson||((g=a.value[0])==null?void 0:g.id)}),c=ne(()=>a.value.find(g=>g.id===l.value)),u=g=>{n.replace({name:"module",params:{id:e.params.id},query:{lesson:g}})},h=ne(()=>r.getters["progress/moduleProgress"](e.params.id)),d=g=>r.getters["progress/isLessonCompleted"](e.params.id,g),f=()=>{c.value&&r.commit("progress/completeLesson",{moduleId:e.params.id,lessonId:c.value.id})};return Tn(h,g=>{if(g===100){const m=od(e.params.id);m&&!r.getters["badges/hasBadge"](m.id)&&r.commit("badges/earnBadge",m.id)}}),(g,m)=>s.value?(F(),B("div",X3,[S("aside",Y3,[S("div",J3,[S("h2",null,X(s.value.title),1),Xe(ad,{value:h.value},null,8,["value"])]),S("ul",Q3,[(F(!0),B(Re,null,gt(a.value,p=>(F(),B("li",{key:p.id,class:vt(["lesson-list__item",{"lesson-list__item--active":p.id===l.value}]),onClick:_=>u(p.id)},[S("div",null,[S("p",tO,X(p.title),1),S("p",nO,X(p.type),1)]),S("span",{class:vt(["lesson-status",{"lesson-status--done":d(p.id)}])},X(d(p.id)?"✓":""),3)],10,eO))),128))])]),c.value?(F(),B("section",rO,[Xe(Z3,{lesson:c.value,"module-id":s.value.id,onComplete:f},null,8,["lesson","module-id"])])):(F(),B("section",iO,[...m[0]||(m[0]=[S("p",null,"Wähle eine Lektion, um zu starten.",-1)])]))])):(F(),B("div",sO,[o.value?(F(),B("p",oO,"Dieses Modul ist Teil eines anderen Tracks. Wechsle den Track vom Dashboard aus, um darauf zuzugreifen.")):(F(),B("p",aO,"Modul nicht gefunden."))]))}},cO=wt(lO,[["__scopeId","data-v-fe08d439"]]),uO={class:"team"},hO={class:"team__grid"},dO=["onMouseenter"],fO=["src","alt"],gO={key:1},mO={class:"team-card__info"},pO={class:"team-card__name"},_O={class:"team-card__role"},yO=["onClick","title"],vO={key:0,class:"email-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wO={key:1,class:"email-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},SO={class:"email-text"},bO={class:"card meetings-section"},EO={class:"meetings-grid"},MO={class:"meeting-card__header"},xO={class:"meeting-card__icon"},CO={class:"meeting-card__title-group"},kO={class:"meeting-card__title"},PO={class:"meeting-card__frequency"},TO={class:"meeting-card__description"},RO={class:"meeting-card__footer"},AO={key:0,class:"meeting-card__time"},IO={class:"meeting-card__location"},LO={__name:"TeamView",setup(t){const e=[{name:"Dr. Christian Zirkelbach",role:"Gruppenleiter",initials:"CZ",image:"/src/data/img/zirkelbach.png",email:"christian.zirkelbach@dataport.de"},{name:"Carina Brühl",role:"Entwicklerin",initials:"CB",email:"carina.bruehl@dataport.de"},{name:"Finn-Rasmus Darge",role:"Entwickler",initials:"FD",image:"/src/data/img/darge.png",email:"finn-rasmus.darge@dataport.de"},{name:"Leonard Dietrich",role:"Softwaretester",initials:"LD",email:"leonard.dietrich@dataport.de"},{name:"Konstantin Holm",role:"Entwickler",initials:"KH",image:"/src/data/img/holm.png",email:"konstantin.holm@dataport.de"},{name:"Melanie Michaela Klamp",role:"Entwicklerin",initials:"MK",email:"melaniemichaela.klamp@dataport.de"},{name:"Martina Niese",role:"Entwicklerin",initials:"MN",email:"martina.niese@dataport.de"},{name:"Hendrik Oenings",role:"Entwickler",initials:"HO",email:"hendrik.oenings@dataport.de"},{name:"Michel René Ptak",role:"Entwickler",initials:"MP",email:""},{name:"Judith Rasch",role:"Entwicklerin (Vertretung von Christian)",initials:"JR",email:"judith.rasch@dataport.de"},{name:"Markus Rullkötter",role:"Entwickler",initials:"MR",email:"markus.rullkoetter@dataport.de"},{name:"Pascal Röhling",role:"Entwickler",initials:"PR",image:"/src/data/img/röhling.png",email:"pascal.roehling@dataport.de"},{name:"Dennis Sen",role:"Entwickler",initials:"DS",image:"/src/data/img/sen.png",email:"dennis.sen@dataport.de"}],n=[{title:"Daily",icon:"💬",frequency:"Täglich",time:"11:30 - 12:00 Uhr",description:"Täglicher Austausch in unserer Gruppe per Skype, jeder berichtet woran er gerade arbeitet oder es wird Smalltalk (privat) gehalten.",location:"Skype",color:"blue"},{title:"Extended Daily",icon:"📋",frequency:"Wöchentlich (im Wechsel)",time:"10:00 - 11:00 Uhr",description:"Längerer Daily per Skype bei dem die laufenden Projekte tiefergehend besprochen werden und Christian organisatorische Themen aus Führungsrunden behandelt oder wir Teamevents etc. planen. Findet im Wechsel mit dem Bi-Weekly statt.",location:"Skype",color:"purple"},{title:"Bi-Weekly",icon:"🏢",frequency:"Wöchentlich (im Wechsel)",time:"10:00 - 12:00 Uhr",description:"Das gleiche wie Extended Daily aber vor Ort meist in Flintbek oder alternativ in Altenholz. Findet im Wechsel mit dem Extended Daily statt.",location:"Flintbek / Altenholz",color:"green"},{title:"Geo JourFixe",icon:"🌍",frequency:"Donnerstags",time:"10:00 - 11:00 Uhr",description:"Austausch mit unseren Kollegen bei DA um über laufende oder neue Projekte zu sprechen.",location:"Skype",color:"orange"}],r=Tt(null),i=Tt(null),s=async o=>{try{await navigator.clipboard.writeText(o),i.value=o,setTimeout(()=>{i.value=null},2e3)}catch(a){console.error("Fehler beim Kopieren:",a)}};return(o,a)=>(F(),B("div",uO,[a[6]||(a[6]=S("section",{class:"card team__header"},[S("div",null,[S("p",{class:"eyebrow"},"Lerne das Team kennen 👥"),S("h1",null,"Deine Kolleg:innen"),S("p",{class:"muted"}," Lerne die Menschen kennen, mit denen du zusammenarbeiten wirst. Unser Team vereint Entwickler:innen, Tester:innen und Führungskräfte, um innovative Geo-Anwendungen zu entwickeln. Zögere nicht, dich zu melden — alle sind hier, um dir zum Erfolg zu verhelfen. ")])],-1)),S("section",hO,[(F(),B(Re,null,gt(e,(l,c)=>S("div",{key:l.name,class:"team-card card",style:Is({animationDelay:`${c*.05}s`}),onMouseenter:u=>r.value=l.name,onMouseleave:a[0]||(a[0]=u=>r.value=null)},[S("div",{class:vt(["team-card__avatar",{"team-card__avatar--image":l.image}])},[l.image?(F(),B("img",{key:0,src:l.image,alt:l.name},null,8,fO)):(F(),B("span",gO,X(l.initials),1))],2),S("div",mO,[S("h3",pO,X(l.name),1),S("p",_O,X(l.role),1),l.email?(F(),B("button",{key:0,onClick:u=>s(l.email),class:vt(["team-card__email",{"team-card__email--visible":r.value===l.name}]),title:i.value===l.email?"Kopiert!":"Klicken zum Kopieren"},[i.value===l.email?(F(),B("svg",vO,[...a[1]||(a[1]=[S("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):(F(),B("svg",wO,[...a[2]||(a[2]=[S("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},null,-1),S("polyline",{points:"22,6 12,13 2,6"},null,-1)])])),S("span",SO,X(i.value===l.email?"Kopiert!":l.email),1)],10,yO)):Ye("",!0)])],44,dO)),64))]),S("section",bO,[a[5]||(a[5]=S("div",{class:"meetings-header"},[S("p",{class:"eyebrow"},"Wichtige Termine 📅"),S("h2",null,"Team-Meetings & Austausch"),S("p",{class:"muted"}," Unsere regelmäßigen Meetings halten dich auf dem Laufenden und bieten Raum für Austausch und Zusammenarbeit. ")],-1)),S("div",EO,[(F(),B(Re,null,gt(n,(l,c)=>S("div",{key:l.title,class:vt(["meeting-card",`meeting-card--${l.color}`]),style:Is({animationDelay:`${c*.1}s`})},[S("div",MO,[S("div",xO,X(l.icon),1),S("div",CO,[S("h3",kO,X(l.title),1),S("span",PO,X(l.frequency),1)])]),S("p",TO,X(l.description),1),S("div",RO,[l.time?(F(),B("span",AO,[a[3]||(a[3]=S("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[S("circle",{cx:"12",cy:"12",r:"10"}),S("polyline",{points:"12 6 12 12 16 14"})],-1)),On(" "+X(l.time),1)])):Ye("",!0),S("span",IO,[a[4]||(a[4]=S("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[S("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),S("circle",{cx:"12",cy:"10",r:"3"})],-1)),On(" "+X(l.location),1)])])],6)),64))])])]))}},OO=wt(LO,[["__scopeId","data-v-07f4fd5b"]]),FO={class:"badge-card__image-wrapper"},NO=["src","alt"],DO={key:0,class:"badge-card__lock"},GO={class:"badge-card__info"},zO={class:"badge-card__name"},BO={class:"badge-card__description"},jO={__name:"BadgeCard",props:{badge:{type:Object,required:!0},earned:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)}},setup(t){const e=t,n=ne(()=>({"badge-card--small":e.size==="small","badge-card--medium":e.size==="medium","badge-card--large":e.size==="large"}));return(r,i)=>(F(),B("div",{class:vt(["badge-card",[n.value,{"badge-card--locked":!t.earned}]])},[S("div",FO,[S("img",{src:t.badge.image,alt:t.badge.name,class:"badge-card__image"},null,8,NO),t.earned?Ye("",!0):(F(),B("div",DO,"🔒"))]),S("div",GO,[S("h4",zO,X(t.badge.name),1),S("p",BO,X(t.badge.description),1)])],2))}},vo=wt(jO,[["__scopeId","data-v-da310cd9"]]),WO={class:"badge-showcase"},VO={class:"badge-showcase__header"},UO={class:"badge-showcase__stats"},KO={class:"badge-showcase__progress-ring"},$O={width:"60",height:"60",viewBox:"0 0 60 60"},qO=["stroke-dasharray"],HO={x:"30",y:"35","text-anchor":"middle","font-size":"14","font-weight":"700",fill:"var(--color-text)"},ZO={key:0,class:"badge-showcase__groups"},XO={key:0,class:"badge-group"},YO={class:"badge-showcase__grid"},JO={key:1,class:"badge-group"},QO={class:"badge-showcase__grid"},eF={key:2,class:"badge-group"},tF={class:"badge-showcase__grid"},nF={key:3,class:"badge-group"},rF={class:"badge-showcase__grid badge-showcase__grid--large"},iF={key:1,class:"badge-showcase__grid"},sF={key:2,class:"badge-showcase__empty"},oF={__name:"BadgeShowcase",props:{filter:{type:String,default:"all",validator:t=>["all","earned","locked"].includes(t)},size:{type:String,default:"medium"},groupByTrack:{type:Boolean,default:!0}},setup(t){const e=ln(),n=t,r=sd(),i=ne(()=>e.getters["badges/earnedBadges"]),s=g=>g.map(m=>({...m,earned:i.value.includes(m.id)})),o=g=>n.filter==="earned"?g.filter(m=>m.earned):n.filter==="locked"?g.filter(m=>!m.earned):g,a=ne(()=>{const g=s(uu().filter(m=>m.track==="common"));return o(g)}),l=ne(()=>{const g=s(uu().filter(m=>m.track==="masterportal"));return o(g)}),c=ne(()=>{const g=s(uu().filter(m=>m.track==="polar"));return o(g)}),u=ne(()=>{const g=s(Lb());return o(g)}),h=ne(()=>{const g=s(r);return o(g)}),d=ne(()=>i.value.length),f=ne(()=>r.length);return(g,m)=>(F(),B("div",WO,[S("div",VO,[S("div",null,[m[0]||(m[0]=S("h3",{class:"badge-showcase__title"},"Deine Erfolge",-1)),S("p",UO,X(d.value)+" / "+X(f.value)+" Abzeichen erhalten ",1)]),S("div",KO,[(F(),B("svg",$O,[m[1]||(m[1]=S("circle",{cx:"30",cy:"30",r:"25",fill:"none",stroke:"rgba(255, 255, 255, 0.1)","stroke-width":"6"},null,-1)),S("circle",{cx:"30",cy:"30",r:"25",fill:"none",stroke:"var(--color-accent)","stroke-width":"6","stroke-linecap":"round","stroke-dasharray":`${d.value/f.value*157} 157`,transform:"rotate(-90 30 30)"},null,8,qO),S("text",HO,X(Math.round(d.value/f.value*100))+"% ",1)]))])]),t.groupByTrack?(F(),B("div",ZO,[a.value.length>0?(F(),B("div",XO,[m[2]||(m[2]=S("h4",{class:"badge-group__title"},"Grundlagen",-1)),S("div",YO,[(F(!0),B(Re,null,gt(a.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])])):Ye("",!0),l.value.length>0?(F(),B("div",JO,[m[3]||(m[3]=S("h4",{class:"badge-group__title"},"🏛️ Masterportal-Spezialisierung",-1)),S("div",QO,[(F(!0),B(Re,null,gt(l.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])])):Ye("",!0),c.value.length>0?(F(),B("div",eF,[m[4]||(m[4]=S("h4",{class:"badge-group__title"},"🗺️ POLAR-Spezialisierung",-1)),S("div",tF,[(F(!0),B(Re,null,gt(c.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])])):Ye("",!0),u.value.length>0?(F(),B("div",nF,[m[5]||(m[5]=S("h4",{class:"badge-group__title"},"🏆 Track-Meisterschaft",-1)),S("div",rF,[(F(!0),B(Re,null,gt(u.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:"large"},null,8,["badge","earned"]))),128))])])):Ye("",!0)])):(F(),B("div",iF,[(F(!0),B(Re,null,gt(h.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])),h.value.length===0&&!t.groupByTrack?(F(),B("p",sF," Noch keine Abzeichen in dieser Kategorie. Lerne weiter, um Erfolge freizuschalten! ")):Ye("",!0)]))}},aF=wt(oF,[["__scopeId","data-v-ea5248b0"]]),lF={class:"achievements"},cF={class:"card"},uF={__name:"AchievementsView",setup(t){const e=ln();return ne(()=>e.getters["user/name"]||e.state.user.name),(n,r)=>(F(),B("div",lF,[r[0]||(r[0]=S("section",{class:"card achievements__hero"},[S("div",null,[S("p",{class:"eyebrow"},"Deine Reise 🏆"),S("h1",null,"Erfolge & Abzeichen"),S("p",{class:"muted"}," Verfolge deinen Fortschritt und zeige deine Errungenschaften. Jedes Abzeichen repräsentiert einen Meilenstein in deiner Lernreise durch JavaScript, Vue und Geo-Entwicklung. ")])],-1)),S("section",cF,[Xe(aF,{size:"medium",filter:"all","group-by-track":!0})])]))}},hF=wt(uF,[["__scopeId","data-v-ed5abe61"]]),dF={class:"faq-view"},fF={class:"faq-content"},gF={class:"category-title"},mF={class:"faq-list"},pF=["onClick"],_F={class:"question-text"},yF={class:"faq-answer"},vF=["innerHTML"],wF={class:"faq-footer"},SF={class:"callout-box"},bF={class:"contact-info"},EF={__name:"FAQView",setup(t){const e=Tt([{id:"config-errors",category:"Konfiguration",question:"Mein Portal lädt nicht, ich sehe nur eine leere Seite. Was ist falsch?",answer:`Die häufigste Ursache sind **Fehler in der config.json**. Selbst ein fehlendes Komma oder ein falsches Anführungszeichen kann das gesamte Portal unbenutzbar machen.

**Debugging-Schritte:**

1. **Browser-Console öffnen** (F12)
   - Siehst du Fehlermeldungen? Oft steht dort "SyntaxError: Unexpected token" oder "Failed to parse JSON"

2. **JSON validieren**
   - Kopiere deine config.json zu https://jsonlint.com/
   - Dort werden Syntax-Fehler sofort angezeigt

3. **Häufige Fehler:**
   - Trailing Comma: \`{"name": "test",}\` ❌
   - Fehlende Anführungszeichen: \`{name: "test"}\` ❌
   - Falsche Pfade in config.js

4. **Schnell-Fix:**
   - Kopiere eine funktionierende Beispiel-Config (z.B. aus \`portal/basic/\`)
   - Übernimm deine Änderungen schrittweise

5. **Cache leeren**
   - Manchmal cached der Browser alte Configs
   - Drücke Strg+Shift+Del oder Strg+F5 (Hard Reload)`},{id:"node-version",category:"Installation",question:'Ich bekomme Fehler bei "npm install". Was soll ich tun?',answer:`**Falsche Node/npm-Version** ist die häufigste Ursache.

**Lösung:**

1. **Erforderliche Version prüfen**
   \`\`\`bash
   cat package.json | grep engines
   \`\`\`
   
   Dort steht, welche Node-Version benötigt wird (z.B. "node": ">=18.0.0")

2. **Aktuelle Version prüfen**
   \`\`\`bash
   node --version
   npm --version
   \`\`\`

3. **Richtige Version installieren mit NVM**
   \`\`\`bash
   # Beispiel für Node 20
   nvm install 20
   nvm use 20
   \`\`\`

4. **Dependencies neu installieren**
   \`\`\`bash
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   \`\`\`

5. **Wenn es immer noch fehlschlägt: VPN!**
   - Siehe nächste FAQ`},{id:"vpn-issues",category:"Installation",question:"npm install oder der Browser hängt. Liegt es am VPN?",answer:`Ja, **VPN-Probleme** sind sehr häufig und hängen vom PC-Modell ab!

**Problem 1: npm install hängt oder schlägt fehl**

Je nach Konfiguration benötigst du:
- **VPN AN:** Manche PCs können nur mit aktivem VPN auf npm-Registry zugreifen
- **VPN AUS:** Andere PCs blocken mit VPN

**Lösung:**
1. npm install starten
2. Wenn es nach 30 Sekunden hängt: Abbrechen (Strg+C)
3. VPN-Status wechseln (an → aus oder aus → an)
4. Erneut versuchen

**Problem 2: Browser öffnet Portal nicht**

Gleiches Spiel:
- Manche PCs können localhost nur mit VPN öffnen
- Andere nur ohne VPN

**Lösung:**
- npm start läuft, Browser zeigt nichts?
- VPN-Status wechseln und neu laden (Strg+F5)

**Tipp:** Merke dir, welche Einstellung bei deinem PC funktioniert!`},{id:"layer-not-showing",category:"Konfiguration",question:"Ich habe einen Layer hinzugefügt, aber er erscheint nicht im Portal. Warum?",answer:`Mehrere mögliche Ursachen:

**1. ID-Mismatch zwischen services.json und config.json**

services.json:
\`\`\`json
{
  "id": "wfs_schulen",  // ← Diese ID
  "name": "Schulen"
}
\`\`\`

config.json:
\`\`\`json
{
  "id": "schulen_wfs",  // ← Andere ID ❌
  "name": "Schulen"
}
\`\`\`

**Lösung:** IDs müssen **exakt** übereinstimmen!

**2. Layer in falschem Kartenausschnitt**

Manche Layer haben eingeschränkte Extents (z.B. nur Hamburg).

**Lösung:**
- Zoom rein/raus
- Prüfe in services.json, ob \`extent\` definiert ist
- Navigiere zum richtigen Bereich

**3. Layer-Sichtbarkeit**

\`\`\`json
{
  "id": "wfs_schulen",
  "visibility": false  // ← Layer ist standardmäßig unsichtbar!
}
\`\`\`

**Lösung:** 
- Setze \`visibility: true\`
- Oder aktiviere Layer manuell im Layer-Menü

**4. WFS-Service antwortet nicht**

**Lösung:**
- Browser DevTools öffnen (F12) → Network-Tab
- Filter auf "wfs" setzen
- Siehst du den Request? Welcher Status Code?
  - 200 = OK
  - 404 = Service nicht gefunden
  - 500 = Server-Fehler
- Bei 404/500: URL in services.json prüfen

**5. Browser-Cache**

**Lösung:** Cache leeren mit Strg+Shift+Del oder Hard Reload (Strg+F5)`},{id:"wms-vs-wfs",category:"Geo-Konzepte",question:"Soll ich WMS oder WFS verwenden?",answer:`**Kommt auf den Use-Case an:**

**WMS (Web Map Service) - Rasterbild**

✅ **Vorteile:**
- Sehr schnell, auch bei vielen Features
- Server rendert das Bild → wenig Client-Last
- Gut für Hintergrundkarten

❌ **Nachteile:**
- Nicht interaktiv (nur Bild)
- Keine Feature-Selektion
- Kein Zugriff auf Attribut-Daten

**Wann nutzen:**
- Hintergrundkarten (Luftbilder, Basiskarten)
- Viele Features (>10.000)
- Performance wichtiger als Interaktivität

---

**WFS (Web Feature Service) - Vektordaten**

✅ **Vorteile:**
- Vollständig interaktiv
- Feature-Selektion möglich
- Zugriff auf alle Attribut-Daten
- Client-seitiges Styling
- Filtern, Suchen, Analysieren

❌ **Nachteile:**
- Langsamer bei vielen Features
- Mehr Client-Last (Browser rendert)
- Größere Datenmenge

**Wann nutzen:**
- Interaktive Layer (POIs, Gebäude)
- Wenige bis mittlere Feature-Anzahl (<5.000)
- Feature-Informationen wichtig
- Selektion/Analyse nötig

---

**Optimal: Beide kombinieren!**

Für denselben Datensatz:
- **WMS** als schnelle Übersicht beim Rauszoomen
- **WFS** zum Einzoomen und Interagieren

Masterportal kann automatisch wechseln basierend auf Zoom-Level!`},{id:"cors-errors",category:"Debugging",question:'Was bedeutet "CORS policy" Fehler in der Console?',answer:`**CORS (Cross-Origin Resource Sharing)** ist ein Browser-Sicherheitsmechanismus.

**Der Fehler:**
\`\`\`
Access to fetch at 'https://geodienste.example.de/wfs' from origin 
'http://localhost:9001' has been blocked by CORS policy
\`\`\`

**Bedeutung:**
Der externe Geodienst erlaubt **keine Anfragen** von deiner lokalen Entwicklungsumgebung.

**Lösungen:**

**1. Server-seitig (Empfohlen)**
- Frage den Service-Betreiber, ob er CORS aktivieren kann
- Nicht immer möglich bei externen Diensten

**2. Proxy nutzen**
Masterportal kann Requests über einen Proxy leiten:

In config.json:
\`\`\`json
{
  "proxyUrl": "https://cors-anywhere.herokuapp.com/"
}
\`\`\`

**3. Lokaler Proxy**
Nutze einen lokalen Proxy wie \`cors-anywhere\`:

\`\`\`bash
npm install -g cors-anywhere
cors-anywhere
\`\`\`

**4. Browser-Extension (NUR für Entwicklung!)**
- Chrome: "CORS Unblock" Extension
- ⚠️ **Nie in Produktion nutzen!**

**5. Anderen Service verwenden**
- Suche nach CORS-enabled Alternativen
- Viele offizielle OGC-Services haben CORS aktiviert

**Tipp:** services.json im Masterportal-Repo enthält bereits funktionierende CORS-enabled Services!`},{id:"debugging-tools",category:"Debugging",question:"Wie debugge ich ein Masterportal-Tool?",answer:`**Effektives Debugging in 5 Schritten:**

**1. Console-Logs strategisch einsetzen**

\`\`\`javascript
// In deinem Tool-Model
onMapClick: function (evt) {
    console.log("Map clicked at:", evt.coordinate);
    console.log("Features:", this.get("selectedFeatures"));
    
    // Objekte detailliert anschauen
    console.table(this.get("selectedFeatures"));
}
\`\`\`

**2. Browser DevTools nutzen**

- **Breakpoints setzen** (F12 → Sources → Klick auf Zeilennummer)
- **Step-through** mit F10 (nächste Zeile) / F11 (in Funktion springen)
- **Watch Expressions** für Variablen

**3. Backbone DevTools**

Browser-Extension installieren:
- Chrome: "Backbone Debugger"
- Zeigt alle Models, Collections, Events

**4. Radio-Events tracken**

\`\`\`javascript
// In Browser-Console
Radio.DEBUG = true;  // Alle Radio-Events werden geloggt
\`\`\`

**5. Masterportal-spezifische Helper**

\`\`\`javascript
// In Browser-Console (F12)

// Karte holen
const map = Radio.request("Map", "getMap");

// Alle Layer anzeigen
Radio.request("ModelList", "getCollection").toJSON();

// Specific Layer
const layer = Radio.request("ModelList", "getModelByAttributes", {
  id: "wfs_schulen"
});

console.log(layer.get("layer").getSource().getFeatures());
\`\`\`

**6. Source Maps prüfen**

Webpack generiert Source Maps → Original-Code in DevTools sichtbar

Falls nicht: In webpack.config.js prüfen:
\`\`\`javascript
devtool: 'source-map'
\`\`\`

**7. Häufige Fehlerquellen**

- **"Radio is not defined"** → \`import Radio from "backbone.radio"\` vergessen
- **Features nicht gefunden** → Layer noch nicht geladen (async!)
- **Events werden nicht gefeuert** → Listener nicht registriert / falsch
- **UI rendert nicht** → \`this.render()\` aufrufen

**Pro-Tipp:** Schaue dir bestehende Tools an (\`src/modules/tools/\`) - sie sind gute Referenzen!`},{id:"git-workflow",category:"Git & Collaboration",question:"Wie läuft der Git-Workflow im Team ab?",answer:`**Standard-Workflow (kann je nach Team variieren!):**

**1. Aktuellsten Code holen**
\`\`\`bash
git checkout dev
git pull origin dev
\`\`\`

**2. Feature-Branch erstellen**
\`\`\`bash
git checkout -b feature/mein-neues-tool
\`\`\`

**3. Änderungen entwickeln**
- Code schreiben
- Testen
- Committen (siehe Commit-Messages)

**4. Committen mit aussagekräftigen Messages**
\`\`\`bash
git add src/modules/tools/meinTool/
git commit -m "feat: Add distance measurement between WFS features"
\`\`\`

**Commit-Message-Format (Conventional Commits):**
\`\`\`
<typ>: <kurze beschreibung>

<optional: längere beschreibung>
\`\`\`

**Typen:**
- \`feat:\` Neues Feature
- \`fix:\` Bugfix
- \`docs:\` Dokumentation
- \`style:\` Code-Formatierung
- \`refactor:\` Code-Umstrukturierung
- \`test:\` Tests
- \`chore:\` Build, Dependencies

**5. Auf Bitbucket pushen**
\`\`\`bash
git push origin feature/mein-neues-tool
\`\`\`

**6. Pull Request erstellen**
- Auf Bitbucket navigieren
- "Create Pull Request" klicken
- Beschreibung hinzufügen:
  - Was hast du geändert?
  - Warum?
  - Screenshots falls UI-Änderungen
- Reviewer zuweisen (meist Tech-Lead oder Senior)

**7. Code-Review**
- Reviewer gibt Feedback
- Du nimmst Änderungen vor
- Push zu gleichem Branch → PR wird automatisch aktualisiert

**8. Nach Merge: Aufräumen**
\`\`\`bash
git checkout dev
git pull origin dev
git branch -d feature/mein-neues-tool  # Lokalen Branch löschen
\`\`\`

**Best Practices:**

✅ **Kleine, fokussierte Commits** - nicht alles in einen Commit packen
✅ **Aussagekräftige Messages** - "fix stuff" ist schlecht
✅ **Regelmäßig rebases** vom dev-Branch, um Konflikte zu vermeiden
✅ **Vor dem Pushen testen** - \`npm test\`, \`npm run lint\`
✅ **Keine Credentials committen** - Keys, Passwörter gehören in .env

❌ **Nicht direkt auf dev/main pushen** - immer über Feature-Branch + PR
❌ **Keine riesigen PRs** - besser in kleinere aufteilen

**Frage dein Team:** Jedes Team hat leicht unterschiedliche Konventionen!`},{id:"projections",category:"Geo-Konzepte",question:"Ich verstehe Projektionen nicht. Welche soll ich wann nutzen?",answer:`**Projektionen kurz erklärt:**

Die Erde ist eine Kugel, aber Karten sind flach. **Projektionen** sind mathematische Transformationen, um die Kugel auf eine Ebene abzubilden.

**Die 3 wichtigsten für Deutschland:**

**1. EPSG:4326 (WGS84) - Geografische Koordinaten**

- **Format:** Längengrad, Breitengrad in Grad
- **Beispiel:** 9.993682, 53.551086 (Hamburg)
- **Einheit:** Grad (°)

✅ **Wann nutzen:**
- GPS-Daten
- Google Maps, OpenStreetMap
- Internationale Anwendungen

❌ **Nachteile:**
- Schwer zu messen (Grad ≠ Meter)
- Verzerrt bei großen Gebieten

---

**2. EPSG:25832 (UTM Zone 32N) - Metrisch für Deutschland**

- **Format:** Meter (Ost, Nord)
- **Beispiel:** 565874, 5934140 (Hamburg)
- **Einheit:** Meter

✅ **Wann nutzen:**
- Deutsche Kataster-Daten
- Präzise Messungen
- Amtliche Karten

❌ **Nachteile:**
- Nur für bestimmte Zone (Deutschland: 32N)
- Nicht global verwendbar

---

**3. EPSG:3857 (Web Mercator) - Online-Karten**

- **Format:** Pseudo-Mercator in Metern
- **Beispiel:** 1113194, 7081997 (Hamburg)
- **Einheit:** Meter (aber verzerrt)

✅ **Wann nutzen:**
- OpenStreetMap, Google Maps
- Web-Anwendungen
- Kachel-Basiskarten (Tiles)

❌ **Nachteile:**
- Starke Verzerrung zu Polen hin
- Ungenau für Messungen

---

**Faustregel:**

🌍 **GPS/Global:** EPSG:4326 (WGS84)
🇩🇪 **Deutschland/Präzise:** EPSG:25832 (UTM)
💻 **Web/Online-Karten:** EPSG:3857 (Web Mercator)

**Koordinaten umrechnen:**

Nutze das **Koordinatentransformer-Tool** in dieser Academy (Geo-Grundlagen Modul) oder https://epsg.io/transform

**Im Masterportal:**

config.json:
\`\`\`json
{
  "mapView": {
    "epsg": "EPSG:25832",  // ← Projektion für deine Karte
    "center": [565874, 5934140]
  }
}
\`\`\`

Masterportal transformiert automatisch zwischen Projektionen!`},{id:"eslint-errors",category:"Code-Qualität",question:"ESLint zeigt hunderte Fehler. Muss ich alle fixen?",answer:`**Ja und Nein - es kommt drauf an:**

**1. Neue Dateien: Ja!**

Bei **neuem Code** solltest du alle ESLint-Regeln befolgen:
- Konsistenz im Team
- Code-Qualität
- Automatische Checks in CI/CD

**2. Bestehende Dateien: Nur deine Änderungen!**

Wenn du eine alte Datei bearbeitest:
- Fixe nur die Zeilen, die du änderst
- Nicht die gesamte Datei refactoren (zu großer PR)

**Auto-Fix nutzen:**

\`\`\`bash
# Viele Fehler werden automatisch gefixed
npm run lint:fix
\`\`\`

**Häufige ESLint-Fehler & Fixes:**

**1. "no-unused-vars"**
\`\`\`javascript
// ❌ Fehler
import something from "module";  // aber nicht genutzt

// ✅ Fix: Entfernen oder nutzen
\`\`\`

**2. "quotes"**
\`\`\`javascript
// ❌ Fehler (Projekt nutzt double quotes)
const name = 'test';

// ✅ Fix
const name = "test";
\`\`\`

**3. "semi"**
\`\`\`javascript
// ❌ Fehler (Semikolon fehlt)
const x = 5

// ✅ Fix
const x = 5;
\`\`\`

**4. "indent"**
\`\`\`javascript
// ❌ Fehler (falsche Einrückung)
function test() {
 return true;
}

// ✅ Fix (4 Spaces)
function test() {
    return true;
}
\`\`\`

**ESLint im Editor:**

VSCode mit ESLint-Extension zeigt Fehler sofort beim Tippen!

settings.json:
\`\`\`json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true  // Auto-Fix beim Speichern
  }
}
\`\`\`

**Spezifische Regel deaktivieren (wenn wirklich nötig):**

\`\`\`javascript
/* eslint-disable no-console */
console.log("Debug-Info");  // Jetzt erlaubt
/* eslint-enable no-console */
\`\`\`

**Aber:** Sprich mit dem Team, bevor du Regeln deaktivierst!

**Projekt-Regeln anschauen:**

\`\`\`bash
cat .eslintrc.js  # Welche Regeln gelten?
\`\`\`

**Best Practice:**
✅ Führe \`npm run lint\` vor jedem Commit aus
✅ Fixe Fehler in deinen Änderungen
✅ Frage bei Unklarheiten im Team nach`}]),n=Tt(null),r=o=>{n.value=n.value===o?null:o},i=[...new Set(e.value.map(o=>o.category))],s=o=>je(o,{breaks:!0});return(o,a)=>{const l=Hs("router-link");return F(),B("div",dF,[a[7]||(a[7]=S("div",{class:"faq-hero"},[S("h1",null,"Häufig gestellte Fragen"),S("p",{class:"subtitle"}," Antworten auf die häufigsten Fragen beim Onboarding und der täglichen Arbeit mit dem Masterportal. ")],-1)),S("div",fF,[(F(),B(Re,null,gt(i,c=>S("div",{key:c,class:"faq-category"},[S("h2",gF,X(c),1),S("div",mF,[(F(!0),B(Re,null,gt(e.value.filter(u=>u.category===c),u=>(F(),B("div",{key:u.id,class:vt(["faq-item",{"is-open":n.value===u.id}])},[S("button",{class:"faq-question",onClick:h=>r(u.id)},[S("span",_F,X(u.question),1),S("span",{class:vt(["chevron",{"chevron--open":n.value===u.id}])},"▼",2)],8,pF),kl(S("div",yF,[S("div",{class:"answer-content",innerHTML:s(u.answer)},null,8,vF)],512),[[xw,n.value===u.id]])],2))),128))])])),64)),S("div",wF,[S("div",SF,[a[5]||(a[5]=S("h3",null,"📬 Deine Frage ist nicht dabei?",-1)),a[6]||(a[6]=S("p",null,[On(" Stelle deine Frage im "),S("strong",null,"Team-Chat"),On(" oder sprich deinen "),S("strong",null,"Mentor"),On(" an. Häufig gestellte Fragen werden hier ergänzt! ")],-1)),S("p",bF,[a[1]||(a[1]=On(" 💬 Daily Standups: ",-1)),a[2]||(a[2]=S("strong",null,"11:30 Uhr via Skype",-1)),a[3]||(a[3]=S("br",null,null,-1)),a[4]||(a[4]=On(" 👥 Siehe auch: ",-1)),Xe(l,{to:"/team"},{default:sr(()=>[...a[0]||(a[0]=[On("Team-Kontakte",-1)])]),_:1})])])])])])}}},MF=wt(EF,[["__scopeId","data-v-495fc4b7"]]),xF=ob({history:GS(),routes:[{path:"/",name:"dashboard",component:sM},{path:"/module/:id",name:"module",component:cO,props:!0},{path:"/team",name:"team",component:OO},{path:"/achievements",name:"achievements",component:hF},{path:"/faq",name:"faq",component:MF}]}),f1="onboarding-academy-state",Bi=(()=>{if(typeof window>"u")return{};try{return JSON.parse(localStorage.getItem(f1))||{}}catch{return{}}})(),CF={namespaced:!0,state:()=>{var t,e;return{name:((t=Bi.user)==null?void 0:t.name)||"Nachwuchskraft",hasSeenIntro:((e=Bi.user)==null?void 0:e.hasSeenIntro)||!1}},mutations:{setName(t,e){t.name=e},markIntroSeen(t){t.hasSeenIntro=!0}},getters:{name:t=>t.name,hasSeenIntro:t=>t.hasSeenIntro}},kF={namespaced:!0,state:()=>{var t;return{completedLessons:((t=Bi.progress)==null?void 0:t.completedLessons)||[]}},mutations:{completeLesson(t,{moduleId:e,lessonId:n}){const r=`${e}:${n}`;t.completedLessons.includes(r)||t.completedLessons.push(r)},resetProgress(t){t.completedLessons=[]}},getters:{isLessonCompleted:t=>(e,n)=>t.completedLessons.includes(`${e}:${n}`),moduleProgress:t=>e=>{const n=Ec(e);if(!n)return 0;const r=n.lessons.length;if(!r)return 0;const i=n.lessons.filter(s=>t.completedLessons.includes(`${e}:${s.id}`)).length;return Math.round(i/r*100)},overallProgress:(t,e,n)=>{const r=bc(n.tracks.enabled),i=r.reduce((o,a)=>o+a.lessons.length,0);if(!i)return 0;const s=r.reduce((o,a)=>{const l=a.lessons.filter(c=>t.completedLessons.includes(`${a.id}:${c.id}`)).length;return o+l},0);return Math.round(s/i*100)}}},PF={namespaced:!0,state:()=>{var t;return{enabled:((t=Bi.tracks)==null?void 0:t.enabled)||[]}},mutations:{toggleTrack(t,e){const n=t.enabled.indexOf(e);n>-1?t.enabled.splice(n,1):t.enabled.push(e)},resetTrack(t){t.enabled=[]}},getters:{enabledTracks:t=>t.enabled,isTrackEnabled:t=>e=>t.enabled.includes(e),hasEnabledTracks:t=>t.enabled.length>0,isModuleActive:t=>e=>{const n=Ec(e);return n?n.track==="common"||t.enabled.includes(n.track):!1}}},TF={namespaced:!0,state:()=>{var t;return{results:((t=Bi.quiz)==null?void 0:t.results)||{}}},mutations:{saveResult(t,{quizId:e,score:n,total:r}){t.results[e]={score:n,total:r}},resetQuizResults(t){t.results={}}}},RF={namespaced:!0,state:()=>{var t,e;return{earned:((t=Bi.badges)==null?void 0:t.earned)||[],lastEarned:null,viewedBadges:((e=Bi.badges)==null?void 0:e.viewedBadges)||[]}},mutations:{earnBadge(t,e){t.earned.includes(e)||(t.earned.push(e),t.lastEarned=e)},markBadgeViewed(t,e){t.viewedBadges.includes(e)||t.viewedBadges.push(e),t.lastEarned===e&&(t.lastEarned=null)},resetBadges(t){t.earned=[],t.lastEarned=null,t.viewedBadges=[]}},getters:{hasBadge:t=>e=>t.earned.includes(e),earnedBadges:t=>t.earned,unviewedBadges:t=>t.earned.filter(e=>!t.viewedBadges.includes(e)),unviewedCount:(t,e)=>e.unviewedBadges.length,lastEarnedBadge:t=>t.lastEarned}},AF=t=>{t.subscribe((e,n)=>{if(typeof window>"u")return;const r={user:n.user,progress:n.progress,quiz:n.quiz,tracks:n.tracks,badges:n.badges};localStorage.setItem(f1,JSON.stringify(r))})},IF=Mb({modules:{user:CF,progress:kF,quiz:TF,tracks:PF,badges:RF},plugins:[AF]}),ff=Uw(_E);ff.use(IF);ff.use(xF);ff.mount("#app");
