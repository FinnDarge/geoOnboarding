var m1=Object.defineProperty;var _f=t=>{throw TypeError(t)};var p1=(t,e,n)=>e in t?m1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tt=(t,e,n)=>p1(t,typeof e!="symbol"?e+"":e,n),_1=(t,e,n)=>e.has(t)||_f("Cannot "+n);var yf=(t,e,n)=>e.has(t)?_f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var ja=(t,e,n)=>(_1(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const et={},vr=[],ti=()=>{},ep=()=>!1,rc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Oh=t=>t.startsWith("onUpdate:"),Mt=Object.assign,Fh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y1=Object.prototype.hasOwnProperty,Ve=(t,e)=>y1.call(t,e),fe=Array.isArray,wr=t=>va(t)==="[object Map]",oc=t=>va(t)==="[object Set]",vf=t=>va(t)==="[object Date]",we=t=>typeof t=="function",pt=t=>typeof t=="string",Gn=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",tp=t=>(Je(t)||we(t))&&we(t.then)&&we(t.catch),np=Object.prototype.toString,va=t=>np.call(t),v1=t=>va(t).slice(8,-1),ip=t=>va(t)==="[object Object]",Nh=t=>pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ko=Lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ac=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},w1=/-\w/g,An=ac(t=>t.replace(w1,e=>e.slice(1).toUpperCase())),S1=/\B([A-Z])/g,Ws=ac(t=>t.replace(S1,"-$1").toLowerCase()),lc=ac(t=>t.charAt(0).toUpperCase()+t.slice(1)),qc=ac(t=>t?`on${lc(t)}`:""),ss=(t,e)=>!Object.is(t,e),fl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},rp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},b1=t=>{const e=pt(t)?Number(t):NaN;return isNaN(e)?t:e};let wf;const cc=()=>wf||(wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ir(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=pt(i)?C1(i):Ir(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(pt(t)||Je(t))return t}const E1=/;(?![^(]*\))/g,M1=/:([^]+)/,x1=/\/\*[^]*?\*\//g;function C1(t){const e={};return t.replace(x1,"").split(E1).forEach(n=>{if(n){const i=n.split(M1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vt(t){let e="";if(pt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const i=vt(t[n]);i&&(e+=i+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const k1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P1=Lh(k1);function op(t){return!!t||t===""}function T1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Lr(t[i],e[i]);return n}function Lr(t,e){if(t===e)return!0;let n=vf(t),i=vf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Gn(t),i=Gn(e),n||i)return t===e;if(n=fe(t),i=fe(e),n||i)return n&&i?T1(t,e):!1;if(n=Je(t),i=Je(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Lr(t[o],e[o]))return!1}}return String(t)===String(e)}function R1(t,e){return t.findIndex(n=>Lr(n,e))}const ap=t=>!!(t&&t.__v_isRef===!0),X=t=>pt(t)?t:t==null?"":fe(t)||Je(t)&&(t.toString===np||!we(t.toString))?ap(t)?X(t.value):JSON.stringify(t,lp,2):String(t),lp=(t,e)=>ap(e)?lp(t,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Hc(i,r)+" =>"]=s,n),{})}:oc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Hc(n))}:Gn(e)?Hc(e):Je(e)&&!fe(e)&&!ip(e)?String(e):e,Hc=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class cp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Qt;try{return Qt=this,e()}finally{Qt=n}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){this._on>0&&--this._on===0&&(Qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function A1(t){return new cp(t)}function I1(){return Qt}let nt;const Zc=new WeakSet;class up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zc.has(this)&&(Zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sf(this),fp(this);const e=nt,n=Fn;nt=this,Fn=!0;try{return this.fn()}finally{gp(this),nt=e,Fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zh(e);this.deps=this.depsTail=void 0,Sf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ou(this)&&this.run()}get dirty(){return Ou(this)}}let hp=0,Po,To;function dp(t,e=!1){if(t.flags|=8,e){t.next=To,To=t;return}t.next=Po,Po=t}function Dh(){hp++}function Gh(){if(--hp>0)return;if(To){let e=To;for(To=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Po;){let e=Po;for(Po=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function fp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),zh(i),L1(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ou(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ko)||(t.globalVersion=Ko,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ou(t))))return;t.flags|=2;const e=t.dep,n=nt,i=Fn;nt=t,Fn=!0;try{fp(t);const s=t.fn(t._value);(e.version===0||ss(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{nt=n,Fn=i,gp(t),t.flags&=-3}}function zh(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)zh(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function L1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fn=!0;const pp=[];function Ai(){pp.push(Fn),Fn=!1}function Ii(){const t=pp.pop();Fn=t===void 0?!0:t}function Sf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=nt;nt=void 0;try{e()}finally{nt=n}}}let Ko=0;class O1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!nt||!Fn||nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==nt)n=this.activeLink=new O1(nt,this),nt.deps?(n.prevDep=nt.depsTail,nt.depsTail.nextDep=n,nt.depsTail=n):nt.deps=nt.depsTail=n,_p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=nt.depsTail,n.nextDep=void 0,nt.depsTail.nextDep=n,nt.depsTail=n,nt.deps===n&&(nt.deps=i)}return n}trigger(e){this.version++,Ko++,this.notify(e)}notify(e){Dh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gh()}}}function _p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_p(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Fu=new WeakMap,Ls=Symbol(""),Nu=Symbol(""),$o=Symbol("");function Nt(t,e,n){if(Fn&&nt){let i=Fu.get(t);i||Fu.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Bh),s.map=i,s.key=n),s.track()}}function Ei(t,e,n,i,s,r){const o=Fu.get(t);if(!o){Ko++;return}const a=l=>{l&&l.trigger()};if(Dh(),e==="clear")o.forEach(a);else{const l=fe(t),c=l&&Nh(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===$o||!Gn(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get($o)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ls)),wr(t)&&a(o.get(Nu)));break;case"delete":l||(a(o.get(Ls)),wr(t)&&a(o.get(Nu)));break;case"set":wr(t)&&a(o.get(Ls));break}}Gh()}function Ys(t){const e=Be(t);return e===t?e:(Nt(e,"iterate",$o),kn(t)?e:e.map(kt))}function uc(t){return Nt(t=Be(t),"iterate",$o),t}const F1={__proto__:null,[Symbol.iterator](){return Xc(this,Symbol.iterator,kt)},concat(...t){return Ys(this).concat(...t.map(e=>fe(e)?Ys(e):e))},entries(){return Xc(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return fi(this,"every",t,e,void 0,arguments)},filter(t,e){return fi(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return fi(this,"find",t,e,kt,arguments)},findIndex(t,e){return fi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return fi(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return fi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return fi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yc(this,"includes",t)},indexOf(...t){return Yc(this,"indexOf",t)},join(t){return Ys(this).join(t)},lastIndexOf(...t){return Yc(this,"lastIndexOf",t)},map(t,e){return fi(this,"map",t,e,void 0,arguments)},pop(){return ao(this,"pop")},push(...t){return ao(this,"push",t)},reduce(t,...e){return bf(this,"reduce",t,e)},reduceRight(t,...e){return bf(this,"reduceRight",t,e)},shift(){return ao(this,"shift")},some(t,e){return fi(this,"some",t,e,void 0,arguments)},splice(...t){return ao(this,"splice",t)},toReversed(){return Ys(this).toReversed()},toSorted(t){return Ys(this).toSorted(t)},toSpliced(...t){return Ys(this).toSpliced(...t)},unshift(...t){return ao(this,"unshift",t)},values(){return Xc(this,"values",kt)}};function Xc(t,e,n){const i=uc(t),s=i[e]();return i!==t&&!kn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const N1=Array.prototype;function fi(t,e,n,i,s,r){const o=uc(t),a=o!==t&&!kn(t),l=o[e];if(l!==N1[e]){const h=l.apply(t,r);return a?kt(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,kt(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function bf(t,e,n,i){const s=uc(t);let r=n;return s!==t&&(kn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,kt(a),l,t)}),s[e](r,...i)}function Yc(t,e,n){const i=Be(t);Nt(i,"iterate",$o);const s=i[e](...n);return(s===-1||s===!1)&&Vh(n[0])?(n[0]=Be(n[0]),i[e](...n)):s}function ao(t,e,n=[]){Ai(),Dh();const i=Be(t)[e].apply(t,n);return Gh(),Ii(),i}const D1=Lh("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function G1(t){Gn(t)||(t=String(t));const e=Be(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?H1:Ep:r?bp:Sp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=fe(e);if(!s){let l;if(o&&(l=F1[n]))return l;if(n==="hasOwnProperty")return G1}const a=Reflect.get(e,n,jt(e)?e:i);if((Gn(n)?yp.has(n):D1(n))||(s||Nt(e,"get",n),r))return a;if(jt(a)){const l=o&&Nh(n)?a:a.value;return s&&Je(l)?Gu(l):l}return Je(a)?s?Gu(a):as(a):a}}class wp extends vp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ls(r);if(!kn(i)&&!ls(i)&&(r=Be(r),i=Be(i)),!fe(e)&&jt(r)&&!jt(i))return l||(r.value=i),!0}const o=fe(e)&&Nh(n)?Number(n)<e.length:Ve(e,n),a=Reflect.set(e,n,i,jt(e)?e:s);return e===Be(s)&&(o?ss(i,r)&&Ei(e,"set",n,i):Ei(e,"add",n,i)),a}deleteProperty(e,n){const i=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ei(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Gn(n)||!yp.has(n))&&Nt(e,"has",n),i}ownKeys(e){return Nt(e,"iterate",fe(e)?"length":Ls),Reflect.ownKeys(e)}}class z1 extends vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const B1=new wp,j1=new z1,W1=new wp(!0);const Du=t=>t,Wa=t=>Reflect.getPrototypeOf(t);function V1(t,e,n){return function(...i){const s=this.__v_raw,r=Be(s),o=wr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Du:e?El:kt;return!e&&Nt(r,"iterate",l?Nu:Ls),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function U1(t,e){const n={get(s){const r=this.__v_raw,o=Be(r),a=Be(s);t||(ss(s,a)&&Nt(o,"get",s),Nt(o,"get",a));const{has:l}=Wa(o),c=e?Du:t?El:kt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Nt(Be(s),"iterate",Ls),s.size},has(s){const r=this.__v_raw,o=Be(r),a=Be(s);return t||(ss(s,a)&&Nt(o,"has",s),Nt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Be(a),c=e?Du:t?El:kt;return!t&&Nt(l,"iterate",Ls),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Mt(n,t?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(s){!e&&!kn(s)&&!ls(s)&&(s=Be(s));const r=Be(this);return Wa(r).has.call(r,s)||(r.add(s),Ei(r,"add",s,s)),this},set(s,r){!e&&!kn(r)&&!ls(r)&&(r=Be(r));const o=Be(this),{has:a,get:l}=Wa(o);let c=a.call(o,s);c||(s=Be(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ss(r,u)&&Ei(o,"set",s,r):Ei(o,"add",s,r),this},delete(s){const r=Be(this),{has:o,get:a}=Wa(r);let l=o.call(r,s);l||(s=Be(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ei(r,"delete",s,void 0),c},clear(){const s=Be(this),r=s.size!==0,o=s.clear();return r&&Ei(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=V1(s,t,e)}),n}function jh(t,e){const n=U1(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ve(n,s)&&s in i?n:i,s,r)}const K1={get:jh(!1,!1)},$1={get:jh(!1,!0)},q1={get:jh(!0,!1)};const Sp=new WeakMap,bp=new WeakMap,Ep=new WeakMap,H1=new WeakMap;function Z1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X1(t){return t.__v_skip||!Object.isExtensible(t)?0:Z1(v1(t))}function as(t){return ls(t)?t:Wh(t,!1,B1,K1,Sp)}function Mp(t){return Wh(t,!1,W1,$1,bp)}function Gu(t){return Wh(t,!0,j1,q1,Ep)}function Wh(t,e,n,i,s){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=X1(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function Sr(t){return ls(t)?Sr(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function kn(t){return!!(t&&t.__v_isShallow)}function Vh(t){return t?!!t.__v_raw:!1}function Be(t){const e=t&&t.__v_raw;return e?Be(e):t}function Y1(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&sp(t,"__v_skip",!0),t}const kt=t=>Je(t)?as(t):t,El=t=>Je(t)?Gu(t):t;function jt(t){return t?t.__v_isRef===!0:!1}function Tt(t){return xp(t,!1)}function J1(t){return xp(t,!0)}function xp(t,e){return jt(t)?t:new Q1(t,e)}class Q1{constructor(e,n){this.dep=new Bh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Be(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||kn(e)||ls(e);e=i?e:Be(e),ss(e,n)&&(this._rawValue=e,this._value=i?e:kt(e),this.dep.trigger())}}function Ci(t){return jt(t)?t.value:t}const ev={get:(t,e,n)=>e==="__v_raw"?t:Ci(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return jt(s)&&!jt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Cp(t){return Sr(t)?t:new Proxy(t,ev)}class tv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&nt!==this)return dp(this,!0),!0}get value(){const e=this.dep.track();return mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nv(t,e,n=!1){let i,s;return we(t)?i=t:(i=t.get,s=t.set),new tv(i,s,n)}const Ua={},Ml=new WeakMap;let Ms;function iv(t,e=!1,n=Ms){if(n){let i=Ml.get(n);i||Ml.set(n,i=[]),i.push(t)}}function sv(t,e,n=et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=b=>s?b:kn(b)||s===!1||s===0?Mi(b,1):Mi(b);let u,h,d,f,g=!1,m=!1;if(jt(t)?(h=()=>t.value,g=kn(t)):Sr(t)?(h=()=>c(t),g=!0):fe(t)?(m=!0,g=t.some(b=>Sr(b)||kn(b)),h=()=>t.map(b=>{if(jt(b))return b.value;if(Sr(b))return c(b);if(we(b))return l?l(b,2):b()})):we(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){Ai();try{d()}finally{Ii()}}const b=Ms;Ms=u;try{return l?l(t,3,[f]):t(f)}finally{Ms=b}}:h=ti,e&&s){const b=h,E=s===!0?1/0:s;h=()=>Mi(b(),E)}const p=I1(),_=()=>{u.stop(),p&&p.active&&Fh(p.effects,u)};if(r&&e){const b=e;e=(...E)=>{b(...E),_()}}let y=m?new Array(t.length).fill(Ua):Ua;const w=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const E=u.run();if(s||g||(m?E.some((P,k)=>ss(P,y[k])):ss(E,y))){d&&d();const P=Ms;Ms=u;try{const k=[E,y===Ua?void 0:m&&y[0]===Ua?[]:y,f];y=E,l?l(e,3,k):e(...k)}finally{Ms=P}}}else u.run()};return a&&a(w),u=new up(h),u.scheduler=o?()=>o(w,!1):w,f=b=>iv(b,!1,u),d=u.onStop=()=>{const b=Ml.get(u);if(b){if(l)l(b,4);else for(const E of b)E();Ml.delete(u)}},e?i?w(!0):y=u.run():o?o(w.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Mi(t,e=1/0,n){if(e<=0||!Je(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,jt(t))Mi(t.value,e,n);else if(fe(t))for(let i=0;i<t.length;i++)Mi(t[i],e,n);else if(oc(t)||wr(t))t.forEach(i=>{Mi(i,e,n)});else if(ip(t)){for(const i in t)Mi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Mi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wa(t,e,n,i){try{return i?t(...i):t()}catch(s){hc(s,e,n)}}function zn(t,e,n,i){if(we(t)){const s=wa(t,e,n,i);return s&&tp(s)&&s.catch(r=>{hc(r,e,n)}),s}if(fe(t)){const s=[];for(let r=0;r<t.length;r++)s.push(zn(t[r],e,n,i));return s}}function hc(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){Ai(),wa(r,null,10,[t,l,c]),Ii();return}}rv(t,n,s,i,o)}function rv(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Zt=[];let $n=-1;const br=[];let qi=null,rr=0;const kp=Promise.resolve();let xl=null;function Uh(t){const e=xl||kp;return t?e.then(this?t.bind(this):t):e}function ov(t){let e=$n+1,n=Zt.length;for(;e<n;){const i=e+n>>>1,s=Zt[i],r=qo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Kh(t){if(!(t.flags&1)){const e=qo(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=qo(n)?Zt.push(t):Zt.splice(ov(e),0,t),t.flags|=1,Pp()}}function Pp(){xl||(xl=kp.then(Rp))}function av(t){fe(t)?br.push(...t):qi&&t.id===-1?qi.splice(rr+1,0,t):t.flags&1||(br.push(t),t.flags|=1),Pp()}function Ef(t,e,n=$n+1){for(;n<Zt.length;n++){const i=Zt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Zt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Tp(t){if(br.length){const e=[...new Set(br)].sort((n,i)=>qo(n)-qo(i));if(br.length=0,qi){qi.push(...e);return}for(qi=e,rr=0;rr<qi.length;rr++){const n=qi[rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qi=null,rr=0}}const qo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Rp(t){try{for($n=0;$n<Zt.length;$n++){const e=Zt[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<Zt.length;$n++){const e=Zt[$n];e&&(e.flags&=-2)}$n=-1,Zt.length=0,Tp(),xl=null,(Zt.length||br.length)&&Rp()}}let Pt=null,Ap=null;function Cl(t){const e=Pt;return Pt=t,Ap=t&&t.type.__scopeId||null,e}function ri(t,e=Pt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Rl(-1);const r=Cl(e);let o;try{o=t(...s)}finally{Cl(r),i._d&&Rl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function kl(t,e){if(Pt===null)return t;const n=_c(Pt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=et]=e[s];r&&(we(r)&&(r={mounted:r,updated:r}),r.deep&&Mi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ys(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ai(),zn(l,n,8,[t.el,a,t,e]),Ii())}}const Ip=Symbol("_vte"),Lp=t=>t.__isTeleport,Ro=t=>t&&(t.disabled||t.disabled===""),Mf=t=>t&&(t.defer||t.defer===""),xf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Cf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,zu=(t,e)=>{const n=t&&t.to;return pt(n)?e?e(n):null:n},Op={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:g,createText:m,createComment:p}}=c,_=Ro(e.props);let{shapeFlag:y,children:w,dynamicChildren:b}=e;if(t==null){const E=e.el=m(""),P=e.anchor=m("");f(E,n,i),f(P,n,i);const k=(C,V)=>{y&16&&u(w,C,V,s,r,o,a,l)},R=()=>{const C=e.target=zu(e.props,g),V=Np(C,e,m,f);C&&(o!=="svg"&&xf(C)?o="svg":o!=="mathml"&&Cf(C)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(C),_||(k(C,V),gl(e,!1)))};_&&(k(n,P),gl(e,!0)),Mf(e.props)?(e.el.__isMounted=!1,$t(()=>{R(),delete e.el.__isMounted},r)):R()}else{if(Mf(e.props)&&t.el.__isMounted===!1){$t(()=>{Op.process(t,e,n,i,s,r,o,a,l,c)},r);return}e.el=t.el,e.targetStart=t.targetStart;const E=e.anchor=t.anchor,P=e.target=t.target,k=e.targetAnchor=t.targetAnchor,R=Ro(t.props),C=R?n:P,V=R?E:k;if(o==="svg"||xf(P)?o="svg":(o==="mathml"||Cf(P))&&(o="mathml"),b?(d(t.dynamicChildren,b,C,s,r,o,a),Zh(t,e,!0)):l||h(t,e,C,V,s,r,o,a,!1),_)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ka(e,n,E,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const W=e.target=zu(e.props,g);W&&Ka(e,W,null,c,0)}else R&&Ka(e,P,k,c,1);gl(e,_)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=t;if(h&&(s(c),s(u)),r&&s(l),o&16){const f=r||!Ro(d);for(let g=0;g<a.length;g++){const m=a[g];i(m,e,n,f,!!m.dynamicChildren)}}},move:Ka,hydrate:lv};function Ka(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&i(o,e,n),(!h||Ro(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);h&&i(a,e,n)}function lv(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function d(m,p,_,y){p.anchor=h(o(m),p,a(m),n,i,s,r),p.targetStart=_,p.targetAnchor=y}const f=e.target=zu(e.props,l),g=Ro(e.props);if(f){const m=f._lpa||f.firstChild;if(e.shapeFlag&16)if(g)d(t,e,m,m&&o(m));else{e.anchor=o(t);let p=m;for(;p;){if(p&&p.nodeType===8){if(p.data==="teleport start anchor")e.targetStart=p;else if(p.data==="teleport anchor"){e.targetAnchor=p,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}p=o(p)}e.targetAnchor||Np(f,e,u,c),h(m&&o(m),e,f,n,i,s,r)}gl(e,g)}else g&&e.shapeFlag&16&&d(t,e,t,o(t));return e.anchor&&o(e.anchor)}const Fp=Op;function gl(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Np(t,e,n,i){const s=e.targetStart=n(""),r=e.targetAnchor=n("");return s[Ip]=r,t&&(i(s,t),i(r,t)),r}const Si=Symbol("_leaveCb"),$a=Symbol("_enterCb");function cv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gc(()=>{t.isMounted=!0}),$h(()=>{t.isUnmounting=!0}),t}const En=[Function,Array],Dp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},Gp=t=>{const e=t.subTree;return e.component?Gp(e.component):e},uv={name:"BaseTransition",props:Dp,setup(t,{slots:e}){const n=h0(),i=cv();return()=>{const s=e.default&&jp(e.default(),!0);if(!s||!s.length)return;const r=zp(s),o=Be(t),{mode:a}=o;if(i.isLeaving)return Jc(r);const l=kf(r);if(!l)return Jc(r);let c=Bu(l,o,i,n,h=>c=h);l.type!==Dt&&Ho(l,c);let u=n.subTree&&kf(n.subTree);if(u&&u.type!==Dt&&!ks(u,l)&&Gp(n).type!==Dt){let h=Bu(u,o,i,n);if(Ho(u,h),a==="out-in"&&l.type!==Dt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},Jc(r);a==="in-out"&&l.type!==Dt?h.delayLeave=(d,f,g)=>{const m=Bp(i,u);m[String(u.key)]=u,d[Si]=()=>{f(),d[Si]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function zp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Dt){e=n;break}}return e}const hv=uv;function Bp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Bu(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:p,onAppear:_,onAfterAppear:y,onAppearCancelled:w}=e,b=String(t.key),E=Bp(n,t),P=(C,V)=>{C&&zn(C,i,9,V)},k=(C,V)=>{const W=V[1];P(C,V),fe(C)?C.every(A=>A.length<=1)&&W():C.length<=1&&W()},R={mode:o,persisted:a,beforeEnter(C){let V=l;if(!n.isMounted)if(r)V=p||l;else return;C[Si]&&C[Si](!0);const W=E[b];W&&ks(t,W)&&W.el[Si]&&W.el[Si](),P(V,[C])},enter(C){let V=c,W=u,A=h;if(!n.isMounted)if(r)V=_||c,W=y||u,A=w||h;else return;let q=!1;const ie=C[$a]=ce=>{q||(q=!0,ce?P(A,[C]):P(W,[C]),R.delayedLeave&&R.delayedLeave(),C[$a]=void 0)};V?k(V,[C,ie]):ie()},leave(C,V){const W=String(t.key);if(C[$a]&&C[$a](!0),n.isUnmounting)return V();P(d,[C]);let A=!1;const q=C[Si]=ie=>{A||(A=!0,V(),ie?P(m,[C]):P(g,[C]),C[Si]=void 0,E[W]===t&&delete E[W])};E[W]=t,f?k(f,[C,q]):q()},clone(C){const V=Bu(C,e,n,i,s);return s&&s(V),V}};return R}function Jc(t){if(dc(t))return t=cs(t),t.children=null,t}function kf(t){if(!dc(t))return Lp(t.type)&&t.children?zp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&we(n.default))return n.default()}}function Ho(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ho(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jp(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Re?(o.patchFlag&128&&s++,i=i.concat(jp(o.children,e,a))):(e||o.type!==Dt)&&i.push(a!=null?cs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Wp(t,e){return we(t)?Mt({name:t.name},e,{setup:t}):t}function Vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Pl=new WeakMap;function Ao(t,e,n,i,s=!1){if(fe(t)){t.forEach((g,m)=>Ao(g,e&&(fe(e)?e[m]:e),n,i,s));return}if(Er(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ao(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?_c(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,h=a.setupState,d=Be(h),f=h===et?ep:g=>Ve(d,g);if(c!=null&&c!==l){if(Pf(e),pt(c))u[c]=null,f(c)&&(h[c]=null);else if(jt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(we(l))wa(l,a,12,[o,u]);else{const g=pt(l),m=jt(l);if(g||m){const p=()=>{if(t.f){const _=g?f(l)?h[l]:u[l]:l.value;if(s)fe(_)&&Fh(_,r);else if(fe(_))_.includes(r)||_.push(r);else if(g)u[l]=[r],f(l)&&(h[l]=u[l]);else{const y=[r];l.value=y,t.k&&(u[t.k]=y)}}else g?(u[l]=o,f(l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const _=()=>{p(),Pl.delete(t)};_.id=-1,Pl.set(t,_),$t(_,n)}else Pf(t),p()}}}function Pf(t){const e=Pl.get(t);e&&(e.flags|=8,Pl.delete(t))}cc().requestIdleCallback;cc().cancelIdleCallback;const Er=t=>!!t.type.__asyncLoader,dc=t=>t.type.__isKeepAlive;function dv(t,e){Up(t,"a",e)}function fv(t,e){Up(t,"da",e)}function Up(t,e,n=Gt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)dc(s.parent.vnode)&&gv(i,e,n,s),s=s.parent}}function gv(t,e,n,i){const s=fc(e,t,i,!0);Kp(()=>{Fh(i[e],s)},n)}function fc(t,e,n=Gt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ai();const a=Sa(n),l=zn(e,n,t,o);return a(),Ii(),l});return i?s.unshift(r):s.push(r),r}}const Oi=t=>(e,n=Gt)=>{(!Yo||t==="sp")&&fc(t,(...i)=>e(...i),n)},mv=Oi("bm"),gc=Oi("m"),pv=Oi("bu"),_v=Oi("u"),$h=Oi("bum"),Kp=Oi("um"),yv=Oi("sp"),vv=Oi("rtg"),wv=Oi("rtc");function Sv(t,e=Gt){fc("ec",t,e)}const bv="components";function Hr(t,e){return Mv(bv,t,!0,e)||t}const Ev=Symbol.for("v-ndc");function Mv(t,e,n=!0,i=!1){const s=Pt||Gt;if(s){const r=s.type;{const a=dw(r,!1);if(a&&(a===e||a===An(e)||a===lc(An(e))))return r}const o=Tf(s[t]||r[t],e)||Tf(s.appContext[t],e);return!o&&i?r:o}}function Tf(t,e){return t&&(t[e]||t[An(e)]||t[lc(An(e))])}function gt(t,e,n,i){let s;const r=n,o=fe(t);if(o||pt(t)){const a=o&&Sr(t);let l=!1,c=!1;a&&(l=!kn(t),c=ls(t),t=uc(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?c?El(kt(t[u])):kt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Je(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}function xv(t,e,n={},i,s){if(Pt.ce||Pt.parent&&Er(Pt.parent)&&Pt.parent.ce){const c=Object.keys(n).length>0;return F(),yt(Re,null,[Xe("slot",n,i)],c?-2:64)}let r=t[e];r&&r._c&&(r._d=!1),F();const o=r&&$p(r(n)),a=n.key||o&&o.key,l=yt(Re,{key:(a&&!Gn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return r&&r._c&&(r._d=!0),l}function $p(t){return t.some(e=>Xo(e)?!(e.type===Dt||e.type===Re&&!$p(e.children)):!0)?t:null}const ju=t=>t?d0(t)?_c(t):ju(t.parent):null,Io=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ju(t.parent),$root:t=>ju(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hp(t),$forceUpdate:t=>t.f||(t.f=()=>{Kh(t.update)}),$nextTick:t=>t.n||(t.n=Uh.bind(t.proxy)),$watch:t=>$v.bind(t)}),Qc=(t,e)=>t!==et&&!t.__isScriptSetup&&Ve(t,e),Cv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Qc(i,e))return o[e]=1,i[e];if(s!==et&&Ve(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ve(c,e))return o[e]=3,r[e];if(n!==et&&Ve(n,e))return o[e]=4,n[e];Wu&&(o[e]=0)}}const u=Io[e];let h,d;if(u)return e==="$attrs"&&Nt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==et&&Ve(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ve(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Qc(s,e)?(s[e]=n,!0):i!==et&&Ve(i,e)?(i[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(n[a]||t!==et&&a[0]!=="$"&&Ve(t,a)||Qc(e,a)||(l=r[0])&&Ve(l,a)||Ve(i,a)||Ve(Io,a)||Ve(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rf(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wu=!0;function kv(t){const e=Hp(t),n=t.proxy,i=t.ctx;Wu=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:m,deactivated:p,beforeDestroy:_,beforeUnmount:y,destroyed:w,unmounted:b,render:E,renderTracked:P,renderTriggered:k,errorCaptured:R,serverPrefetch:C,expose:V,inheritAttrs:W,components:A,directives:q,filters:ie}=e;if(c&&Pv(c,i,null),o)for(const se in o){const ee=o[se];we(ee)&&(i[se]=ee.bind(n))}if(s){const se=s.call(n,n);Je(se)&&(t.data=as(se))}if(Wu=!0,r)for(const se in r){const ee=r[se],Ie=we(ee)?ee.bind(n,n):we(ee.get)?ee.get.bind(n,n):ti,me=!we(ee)&&we(ee.set)?ee.set.bind(n):ti,ye=ne({get:Ie,set:me});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ge=>ye.value=ge})}if(a)for(const se in a)qp(a[se],i,n,se);if(l){const se=we(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ee=>{ml(ee,se[ee])})}u&&Af(u,t,"c");function z(se,ee){fe(ee)?ee.forEach(Ie=>se(Ie.bind(n))):ee&&se(ee.bind(n))}if(z(mv,h),z(gc,d),z(pv,f),z(_v,g),z(dv,m),z(fv,p),z(Sv,R),z(wv,P),z(vv,k),z($h,y),z(Kp,b),z(yv,C),fe(V))if(V.length){const se=t.exposed||(t.exposed={});V.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:Ie=>n[ee]=Ie,enumerable:!0})})}else t.exposed||(t.exposed={});E&&t.render===ti&&(t.render=E),W!=null&&(t.inheritAttrs=W),A&&(t.components=A),q&&(t.directives=q),C&&Vp(t)}function Pv(t,e,n=ti){fe(t)&&(t=Vu(t));for(const i in t){const s=t[i];let r;Je(s)?"default"in s?r=Pn(s.from||i,s.default,!0):r=Pn(s.from||i):r=Pn(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Af(t,e,n){zn(fe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,i){let s=i.includes(".")?o0(n,i):()=>n[i];if(pt(t)){const r=e[t];we(r)&&Tn(s,r)}else if(we(t))Tn(s,t.bind(n));else if(Je(t))if(fe(t))t.forEach(r=>qp(r,e,n,i));else{const r=we(t.handler)?t.handler.bind(n):e[t.handler];we(r)&&Tn(s,r,t)}}function Hp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Tl(l,c,o,!0)),Tl(l,e,o)),Je(e)&&r.set(e,l),l}function Tl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Tl(t,r,n,!0),s&&s.forEach(o=>Tl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tv={data:If,props:Lf,emits:Lf,methods:wo,computed:wo,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:wo,directives:wo,watch:Av,provide:If,inject:Rv};function If(t,e){return e?t?function(){return Mt(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function Rv(t,e){return wo(Vu(t),Vu(e))}function Vu(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function wo(t,e){return t?Mt(Object.create(null),t,e):e}function Lf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Mt(Object.create(null),Rf(t),Rf(e??{})):e}function Av(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const i in e)n[i]=Kt(t[i],e[i]);return n}function Zp(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iv=0;function Lv(t,e){return function(i,s=null){we(i)||(i=Mt({},i)),s!=null&&!Je(s)&&(s=null);const r=Zp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Iv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:gw,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&we(u.install)?(o.add(u),u.install(c,...h)):we(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Xe(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(f,u,d),l=!0,c._container=u,u.__vue_app__=c,_c(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Mr;Mr=c;try{return u()}finally{Mr=h}}};return c}}let Mr=null;function ml(t,e){if(Gt){let n=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===n&&(n=Gt.provides=Object.create(i)),n[t]=e}}function Pn(t,e,n=!1){const i=h0();if(i||Mr){let s=Mr?Mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&we(e)?e.call(i&&i.proxy):e}}const Xp={},Yp=()=>Object.create(Xp),Jp=t=>Object.getPrototypeOf(t)===Xp;function Ov(t,e,n,i=!1){const s={},r=Yp();t.propsDefaults=Object.create(null),Qp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Mp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Fv(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Be(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(mc(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ve(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=An(d);s[g]=Uu(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Qp(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ve(e,h)&&((u=Ws(h))===h||!Ve(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Uu(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ve(e,h))&&(delete r[h],c=!0)}c&&Ei(t.attrs,"set","")}function Qp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ko(l))continue;const c=e[l];let u;s&&Ve(s,u=An(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:mc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Be(n),c=a||et;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Uu(s,l,h,c[h],t,!Ve(c,h))}}return o}function Uu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ve(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&we(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Sa(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ws(n))&&(i=!0))}return i}const Nv=new WeakMap;function e0(t,e,n=!1){const i=n?Nv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!we(t)){const u=h=>{l=!0;const[d,f]=e0(h,e,!0);Mt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Je(t)&&i.set(t,vr),vr;if(fe(r))for(let u=0;u<r.length;u++){const h=An(r[u]);Of(h)&&(o[h]=et)}else if(r)for(const u in r){const h=An(u);if(Of(h)){const d=r[u],f=o[h]=fe(d)||we(d)?{type:d}:Mt({},d),g=f.type;let m=!1,p=!0;if(fe(g))for(let _=0;_<g.length;++_){const y=g[_],w=we(y)&&y.name;if(w==="Boolean"){m=!0;break}else w==="String"&&(p=!1)}else m=we(g)&&g.name==="Boolean";f[0]=m,f[1]=p,(m||Ve(f,"default"))&&a.push(h)}}const c=[o,a];return Je(t)&&i.set(t,c),c}function Of(t){return t[0]!=="$"&&!ko(t)}const qh=t=>t==="_"||t==="_ctx"||t==="$stable",Hh=t=>fe(t)?t.map(qn):[qn(t)],Dv=(t,e,n)=>{if(e._n)return e;const i=ri((...s)=>Hh(e(...s)),n);return i._c=!1,i},t0=(t,e,n)=>{const i=t._ctx;for(const s in t){if(qh(s))continue;const r=t[s];if(we(r))e[s]=Dv(s,r,i);else if(r!=null){const o=Hh(r);e[s]=()=>o}}},n0=(t,e)=>{const n=Hh(e);t.slots.default=()=>n},i0=(t,e,n)=>{for(const i in e)(n||!qh(i))&&(t[i]=e[i])},Gv=(t,e,n)=>{const i=t.slots=Yp();if(t.vnode.shapeFlag&32){const s=e._;s?(i0(i,e,n),n&&sp(i,"_",s,!0)):t0(e,i)}else e&&n0(t,e)},zv=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:i0(s,e,n):(r=!e.$stable,t0(e,s)),o=e}else e&&(n0(t,e),o={default:1});if(r)for(const a in s)!qh(a)&&o[a]==null&&delete s[a]},$t=ew;function Bv(t){return jv(t)}function jv(t,e){const n=cc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=ti,insertStaticContent:g}=t,m=(v,M,x,L=null,N=null,I=null,Z=void 0,$=null,j=!!M.dynamicChildren)=>{if(v===M)return;v&&!ks(v,M)&&(L=T(v),ge(v,N,I,!0),v=null),M.patchFlag===-2&&(j=!1,M.dynamicChildren=null);const{type:D,ref:re,shapeFlag:Y}=M;switch(D){case pc:p(v,M,x,L);break;case Dt:_(v,M,x,L);break;case tu:v==null&&y(M,x,L,Z);break;case Re:A(v,M,x,L,N,I,Z,$,j);break;default:Y&1?E(v,M,x,L,N,I,Z,$,j):Y&6?q(v,M,x,L,N,I,Z,$,j):(Y&64||Y&128)&&D.process(v,M,x,L,N,I,Z,$,j,te)}re!=null&&N?Ao(re,v&&v.ref,I,M||v,!M):re==null&&v&&v.ref!=null&&Ao(v.ref,null,I,v,!0)},p=(v,M,x,L)=>{if(v==null)i(M.el=a(M.children),x,L);else{const N=M.el=v.el;M.children!==v.children&&c(N,M.children)}},_=(v,M,x,L)=>{v==null?i(M.el=l(M.children||""),x,L):M.el=v.el},y=(v,M,x,L)=>{[v.el,v.anchor]=g(v.children,M,x,L,v.el,v.anchor)},w=({el:v,anchor:M},x,L)=>{let N;for(;v&&v!==M;)N=d(v),i(v,x,L),v=N;i(M,x,L)},b=({el:v,anchor:M})=>{let x;for(;v&&v!==M;)x=d(v),s(v),v=x;s(M)},E=(v,M,x,L,N,I,Z,$,j)=>{if(M.type==="svg"?Z="svg":M.type==="math"&&(Z="mathml"),v==null)P(M,x,L,N,I,Z,$,j);else{const D=v.el&&v.el._isVueCE?v.el:null;try{D&&D._beginPatch(),C(v,M,N,I,Z,$,j)}finally{D&&D._endPatch()}}},P=(v,M,x,L,N,I,Z,$)=>{let j,D;const{props:re,shapeFlag:Y,transition:oe,dirs:ue}=v;if(j=v.el=o(v.type,I,re&&re.is,re),Y&8?u(j,v.children):Y&16&&R(v.children,j,null,L,N,eu(v,I),Z,$),ue&&ys(v,null,L,"created"),k(j,v,v.scopeId,Z,L),re){for(const Pe in re)Pe!=="value"&&!ko(Pe)&&r(j,Pe,null,re[Pe],I,L);"value"in re&&r(j,"value",null,re.value,I),(D=re.onVnodeBeforeMount)&&Kn(D,L,v)}ue&&ys(v,null,L,"beforeMount");const be=Wv(N,oe);be&&oe.beforeEnter(j),i(j,M,x),((D=re&&re.onVnodeMounted)||be||ue)&&$t(()=>{D&&Kn(D,L,v),be&&oe.enter(j),ue&&ys(v,null,L,"mounted")},N)},k=(v,M,x,L,N)=>{if(x&&f(v,x),L)for(let I=0;I<L.length;I++)f(v,L[I]);if(N){let I=N.subTree;if(M===I||l0(I.type)&&(I.ssContent===M||I.ssFallback===M)){const Z=N.vnode;k(v,Z,Z.scopeId,Z.slotScopeIds,N.parent)}}},R=(v,M,x,L,N,I,Z,$,j=0)=>{for(let D=j;D<v.length;D++){const re=v[D]=$?Hi(v[D]):qn(v[D]);m(null,re,M,x,L,N,I,Z,$)}},C=(v,M,x,L,N,I,Z)=>{const $=M.el=v.el;let{patchFlag:j,dynamicChildren:D,dirs:re}=M;j|=v.patchFlag&16;const Y=v.props||et,oe=M.props||et;let ue;if(x&&vs(x,!1),(ue=oe.onVnodeBeforeUpdate)&&Kn(ue,x,M,v),re&&ys(M,v,x,"beforeUpdate"),x&&vs(x,!0),(Y.innerHTML&&oe.innerHTML==null||Y.textContent&&oe.textContent==null)&&u($,""),D?V(v.dynamicChildren,D,$,x,L,eu(M,N),I):Z||ee(v,M,$,null,x,L,eu(M,N),I,!1),j>0){if(j&16)W($,Y,oe,x,N);else if(j&2&&Y.class!==oe.class&&r($,"class",null,oe.class,N),j&4&&r($,"style",Y.style,oe.style,N),j&8){const be=M.dynamicProps;for(let Pe=0;Pe<be.length;Pe++){const ke=be[Pe],De=Y[ke],At=oe[ke];(At!==De||ke==="value")&&r($,ke,De,At,N,x)}}j&1&&v.children!==M.children&&u($,M.children)}else!Z&&D==null&&W($,Y,oe,x,N);((ue=oe.onVnodeUpdated)||re)&&$t(()=>{ue&&Kn(ue,x,M,v),re&&ys(M,v,x,"updated")},L)},V=(v,M,x,L,N,I,Z)=>{for(let $=0;$<M.length;$++){const j=v[$],D=M[$],re=j.el&&(j.type===Re||!ks(j,D)||j.shapeFlag&198)?h(j.el):x;m(j,D,re,null,L,N,I,Z,!0)}},W=(v,M,x,L,N)=>{if(M!==x){if(M!==et)for(const I in M)!ko(I)&&!(I in x)&&r(v,I,M[I],null,N,L);for(const I in x){if(ko(I))continue;const Z=x[I],$=M[I];Z!==$&&I!=="value"&&r(v,I,$,Z,N,L)}"value"in x&&r(v,"value",M.value,x.value,N)}},A=(v,M,x,L,N,I,Z,$,j)=>{const D=M.el=v?v.el:a(""),re=M.anchor=v?v.anchor:a("");let{patchFlag:Y,dynamicChildren:oe,slotScopeIds:ue}=M;ue&&($=$?$.concat(ue):ue),v==null?(i(D,x,L),i(re,x,L),R(M.children||[],x,re,N,I,Z,$,j)):Y>0&&Y&64&&oe&&v.dynamicChildren?(V(v.dynamicChildren,oe,x,N,I,Z,$),(M.key!=null||N&&M===N.subTree)&&Zh(v,M,!0)):ee(v,M,x,re,N,I,Z,$,j)},q=(v,M,x,L,N,I,Z,$,j)=>{M.slotScopeIds=$,v==null?M.shapeFlag&512?N.ctx.activate(M,x,L,Z,j):ie(M,x,L,N,I,Z,j):ce(v,M,j)},ie=(v,M,x,L,N,I,Z)=>{const $=v.component=aw(v,L,N);if(dc(v)&&($.ctx.renderer=te),lw($,!1,Z),$.asyncDep){if(N&&N.registerDep($,z,Z),!v.el){const j=$.subTree=Xe(Dt);_(null,j,M,x),v.placeholder=j.el}}else z($,v,M,x,N,I,Z)},ce=(v,M,x)=>{const L=M.component=v.component;if(Jv(v,M,x))if(L.asyncDep&&!L.asyncResolved){se(L,M,x);return}else L.next=M,L.update();else M.el=v.el,L.vnode=M},z=(v,M,x,L,N,I,Z)=>{const $=()=>{if(v.isMounted){let{next:Y,bu:oe,u:ue,parent:be,vnode:Pe}=v;{const dn=s0(v);if(dn){Y&&(Y.el=Pe.el,se(v,Y,Z)),dn.asyncDep.then(()=>{v.isUnmounted||$()});return}}let ke=Y,De;vs(v,!1),Y?(Y.el=Pe.el,se(v,Y,Z)):Y=Pe,oe&&fl(oe),(De=Y.props&&Y.props.onVnodeBeforeUpdate)&&Kn(De,be,Y,Pe),vs(v,!0);const At=Nf(v),hn=v.subTree;v.subTree=At,m(hn,At,h(hn.el),T(hn),v,N,I),Y.el=At.el,ke===null&&Qv(v,At.el),ue&&$t(ue,N),(De=Y.props&&Y.props.onVnodeUpdated)&&$t(()=>Kn(De,be,Y,Pe),N)}else{let Y;const{el:oe,props:ue}=M,{bm:be,m:Pe,parent:ke,root:De,type:At}=v,hn=Er(M);vs(v,!1),be&&fl(be),!hn&&(Y=ue&&ue.onVnodeBeforeMount)&&Kn(Y,ke,M),vs(v,!0);{De.ce&&De.ce._def.shadowRoot!==!1&&De.ce._injectChildStyle(At);const dn=v.subTree=Nf(v);m(null,dn,x,L,v,N,I),M.el=dn.el}if(Pe&&$t(Pe,N),!hn&&(Y=ue&&ue.onVnodeMounted)){const dn=M;$t(()=>Kn(Y,ke,dn),N)}(M.shapeFlag&256||ke&&Er(ke.vnode)&&ke.vnode.shapeFlag&256)&&v.a&&$t(v.a,N),v.isMounted=!0,M=x=L=null}};v.scope.on();const j=v.effect=new up($);v.scope.off();const D=v.update=j.run.bind(j),re=v.job=j.runIfDirty.bind(j);re.i=v,re.id=v.uid,j.scheduler=()=>Kh(re),vs(v,!0),D()},se=(v,M,x)=>{M.component=v;const L=v.vnode.props;v.vnode=M,v.next=null,Fv(v,M.props,L,x),zv(v,M.children,x),Ai(),Ef(v),Ii()},ee=(v,M,x,L,N,I,Z,$,j=!1)=>{const D=v&&v.children,re=v?v.shapeFlag:0,Y=M.children,{patchFlag:oe,shapeFlag:ue}=M;if(oe>0){if(oe&128){me(D,Y,x,L,N,I,Z,$,j);return}else if(oe&256){Ie(D,Y,x,L,N,I,Z,$,j);return}}ue&8?(re&16&&He(D,N,I),Y!==D&&u(x,Y)):re&16?ue&16?me(D,Y,x,L,N,I,Z,$,j):He(D,N,I,!0):(re&8&&u(x,""),ue&16&&R(Y,x,L,N,I,Z,$,j))},Ie=(v,M,x,L,N,I,Z,$,j)=>{v=v||vr,M=M||vr;const D=v.length,re=M.length,Y=Math.min(D,re);let oe;for(oe=0;oe<Y;oe++){const ue=M[oe]=j?Hi(M[oe]):qn(M[oe]);m(v[oe],ue,x,null,N,I,Z,$,j)}D>re?He(v,N,I,!0,!1,Y):R(M,x,L,N,I,Z,$,j,Y)},me=(v,M,x,L,N,I,Z,$,j)=>{let D=0;const re=M.length;let Y=v.length-1,oe=re-1;for(;D<=Y&&D<=oe;){const ue=v[D],be=M[D]=j?Hi(M[D]):qn(M[D]);if(ks(ue,be))m(ue,be,x,null,N,I,Z,$,j);else break;D++}for(;D<=Y&&D<=oe;){const ue=v[Y],be=M[oe]=j?Hi(M[oe]):qn(M[oe]);if(ks(ue,be))m(ue,be,x,null,N,I,Z,$,j);else break;Y--,oe--}if(D>Y){if(D<=oe){const ue=oe+1,be=ue<re?M[ue].el:L;for(;D<=oe;)m(null,M[D]=j?Hi(M[D]):qn(M[D]),x,be,N,I,Z,$,j),D++}}else if(D>oe)for(;D<=Y;)ge(v[D],N,I,!0),D++;else{const ue=D,be=D,Pe=new Map;for(D=be;D<=oe;D++){const Vt=M[D]=j?Hi(M[D]):qn(M[D]);Vt.key!=null&&Pe.set(Vt.key,D)}let ke,De=0;const At=oe-be+1;let hn=!1,dn=0;const ci=new Array(At);for(D=0;D<At;D++)ci[D]=0;for(D=ue;D<=Y;D++){const Vt=v[D];if(De>=At){ge(Vt,N,I,!0);continue}let fn;if(Vt.key!=null)fn=Pe.get(Vt.key);else for(ke=be;ke<=oe;ke++)if(ci[ke-be]===0&&ks(Vt,M[ke])){fn=ke;break}fn===void 0?ge(Vt,N,I,!0):(ci[fn-be]=D+1,fn>=dn?dn=fn:hn=!0,m(Vt,M[fn],x,null,N,I,Z,$,j),De++)}const Ba=hn?Vv(ci):vr;for(ke=Ba.length-1,D=At-1;D>=0;D--){const Vt=be+D,fn=M[Vt],io=M[Vt+1],Xs=Vt+1<re?io.el||io.placeholder:L;ci[D]===0?m(null,fn,x,Xs,N,I,Z,$,j):hn&&(ke<0||D!==Ba[ke]?ye(fn,x,Xs,2):ke--)}}},ye=(v,M,x,L,N=null)=>{const{el:I,type:Z,transition:$,children:j,shapeFlag:D}=v;if(D&6){ye(v.component.subTree,M,x,L);return}if(D&128){v.suspense.move(M,x,L);return}if(D&64){Z.move(v,M,x,te);return}if(Z===Re){i(I,M,x);for(let Y=0;Y<j.length;Y++)ye(j[Y],M,x,L);i(v.anchor,M,x);return}if(Z===tu){w(v,M,x);return}if(L!==2&&D&1&&$)if(L===0)$.beforeEnter(I),i(I,M,x),$t(()=>$.enter(I),N);else{const{leave:Y,delayLeave:oe,afterLeave:ue}=$,be=()=>{v.ctx.isUnmounted?s(I):i(I,M,x)},Pe=()=>{I._isLeaving&&I[Si](!0),Y(I,()=>{be(),ue&&ue()})};oe?oe(I,be,Pe):Pe()}else i(I,M,x)},ge=(v,M,x,L=!1,N=!1)=>{const{type:I,props:Z,ref:$,children:j,dynamicChildren:D,shapeFlag:re,patchFlag:Y,dirs:oe,cacheIndex:ue}=v;if(Y===-2&&(N=!1),$!=null&&(Ai(),Ao($,null,x,v,!0),Ii()),ue!=null&&(M.renderCache[ue]=void 0),re&256){M.ctx.deactivate(v);return}const be=re&1&&oe,Pe=!Er(v);let ke;if(Pe&&(ke=Z&&Z.onVnodeBeforeUnmount)&&Kn(ke,M,v),re&6)ot(v.component,x,L);else{if(re&128){v.suspense.unmount(x,L);return}be&&ys(v,null,M,"beforeUnmount"),re&64?v.type.remove(v,M,x,te,L):D&&!D.hasOnce&&(I!==Re||Y>0&&Y&64)?He(D,M,x,!1,!0):(I===Re&&Y&384||!N&&re&16)&&He(j,M,x),L&&Le(v)}(Pe&&(ke=Z&&Z.onVnodeUnmounted)||be)&&$t(()=>{ke&&Kn(ke,M,v),be&&ys(v,null,M,"unmounted")},x)},Le=v=>{const{type:M,el:x,anchor:L,transition:N}=v;if(M===Re){U(x,L);return}if(M===tu){b(v);return}const I=()=>{s(x),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:Z,delayLeave:$}=N,j=()=>Z(x,I);$?$(v.el,I,j):j()}else I()},U=(v,M)=>{let x;for(;v!==M;)x=d(v),s(v),v=x;s(M)},ot=(v,M,x)=>{const{bum:L,scope:N,job:I,subTree:Z,um:$,m:j,a:D}=v;Ff(j),Ff(D),L&&fl(L),N.stop(),I&&(I.flags|=8,ge(Z,v,M,x)),$&&$t($,M),$t(()=>{v.isUnmounted=!0},M)},He=(v,M,x,L=!1,N=!1,I=0)=>{for(let Z=I;Z<v.length;Z++)ge(v[Z],M,x,L,N)},T=v=>{if(v.shapeFlag&6)return T(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const M=d(v.anchor||v.el),x=M&&M[Ip];return x?d(x):M};let J=!1;const H=(v,M,x)=>{v==null?M._vnode&&ge(M._vnode,null,null,!0):m(M._vnode||null,v,M,null,null,null,x),M._vnode=v,J||(J=!0,Ef(),Tp(),J=!1)},te={p:m,um:ge,m:ye,r:Le,mt:ie,mc:R,pc:ee,pbc:V,n:T,o:t};return{render:H,hydrate:void 0,createApp:Lv(H)}}function eu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Wv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zh(t,e,n=!1){const i=t.children,s=e.children;if(fe(i)&&fe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Hi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Zh(o,a)),a.type===pc&&a.patchFlag!==-1&&(a.el=o.el),a.type===Dt&&!a.el&&(a.el=o.el)}}function Vv(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function s0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:s0(e)}function Ff(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uv=Symbol.for("v-scx"),Kv=()=>Pn(Uv);function Tn(t,e,n){return r0(t,e,n)}function r0(t,e,n=et){const{immediate:i,deep:s,flush:r,once:o}=n,a=Mt({},n),l=e&&i||!e&&r!=="post";let c;if(Yo){if(r==="sync"){const f=Kv();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=ti,f.resume=ti,f.pause=ti,f}}const u=Gt;a.call=(f,g,m)=>zn(f,u,g,m);let h=!1;r==="post"?a.scheduler=f=>{$t(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,g)=>{g?f():Kh(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=sv(t,e,a);return Yo&&(c?c.push(d):l&&d()),d}function $v(t,e,n){const i=this.proxy,s=pt(t)?t.includes(".")?o0(i,t):()=>i[t]:t.bind(i,i);let r;we(e)?r=e:(r=e.handler,n=e);const o=Sa(this),a=r0(s,r.bind(i),n);return o(),a}function o0(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const qv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${Ws(e)}Modifiers`];function Hv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||et;let s=n;const r=e.startsWith("update:"),o=r&&qv(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>pt(u)?u.trim():u)),o.number&&(s=n.map(rp)));let a,l=i[a=qc(e)]||i[a=qc(An(e))];!l&&r&&(l=i[a=qc(Ws(e))]),l&&zn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zn(c,t,6,s)}}const Zv=new WeakMap;function a0(t,e,n=!1){const i=n?Zv:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!we(t)){const l=c=>{const u=a0(c,e,!0);u&&(a=!0,Mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Je(t)&&i.set(t,null),null):(fe(r)?r.forEach(l=>o[l]=null):Mt(o,r),Je(t)&&i.set(t,o),o)}function mc(t,e){return!t||!rc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Ws(e))||Ve(t,e))}function Nf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:m}=t,p=Cl(t);let _,y;try{if(n.shapeFlag&4){const b=s||i,E=b;_=qn(c.call(E,b,u,h,f,d,g)),y=a}else{const b=e;_=qn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),y=e.props?a:Xv(a)}}catch(b){Lo.length=0,hc(b,t,1),_=Xe(Dt)}let w=_;if(y&&m!==!1){const b=Object.keys(y),{shapeFlag:E}=w;b.length&&E&7&&(r&&b.some(Oh)&&(y=Yv(y,r)),w=cs(w,y,!1,!0))}return n.dirs&&(w=cs(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Ho(w,n.transition),_=w,Cl(p),_}const Xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||rc(n))&&((e||(e={}))[n]=t[n]);return e},Yv=(t,e)=>{const n={};for(const i in t)(!Oh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Jv(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Df(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!mc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Df(i,o,c):!0:!!o;return!1}function Df(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!mc(n,r))return!0}return!1}function Qv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const l0=t=>t.__isSuspense;function ew(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):av(t)}const Re=Symbol.for("v-fgt"),pc=Symbol.for("v-txt"),Dt=Symbol.for("v-cmt"),tu=Symbol.for("v-stc"),Lo=[];let _n=null;function F(t=!1){Lo.push(_n=t?null:[])}function tw(){Lo.pop(),_n=Lo[Lo.length-1]||null}let Zo=1;function Rl(t,e=!1){Zo+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function c0(t){return t.dynamicChildren=Zo>0?_n||vr:null,tw(),Zo>0&&_n&&_n.push(t),t}function B(t,e,n,i,s,r){return c0(S(t,e,n,i,s,r,!0))}function yt(t,e,n,i,s){return c0(Xe(t,e,n,i,s,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const u0=({key:t})=>t??null,pl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pt(t)||jt(t)||we(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,i=0,s=null,r=t===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&u0(e),ref:e&&pl(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return a?(Xh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=pt(n)?8:16),Zo>0&&!o&&_n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_n.push(l),l}const Xe=nw;function nw(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Ev)&&(t=Dt),Xo(t)){const a=cs(t,e,!0);return n&&Xh(a,n),Zo>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag=-2,a}if(fw(t)&&(t=t.__vccOpts),e){e=iw(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=vt(a)),Je(l)&&(Vh(l)&&!fe(l)&&(l=Mt({},l)),e.style=Ir(l))}const o=pt(t)?1:l0(t)?128:Lp(t)?64:Je(t)?4:we(t)?2:0;return S(t,e,n,i,s,o,r,!0)}function iw(t){return t?Vh(t)||Jp(t)?Mt({},t):t:null}function cs(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?sw(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&u0(c),ref:e&&e.ref?n&&r?fe(r)?r.concat(pl(e)):[r,pl(e)]:pl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ho(u,l.clone(u)),u}function On(t=" ",e=0){return Xe(pc,null,t,e)}function Ye(t="",e=!1){return e?(F(),yt(Dt,null,t)):Xe(Dt,null,t)}function qn(t){return t==null||typeof t=="boolean"?Xe(Dt):fe(t)?Xe(Re,null,t.slice()):Xo(t)?Hi(t):Xe(pc,null,String(t))}function Hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function Xh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Xh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Jp(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),i&64?(n=16,e=[On(e)]):n=8);t.children=e,t.shapeFlag|=n}function sw(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=vt([e.class,i.class]));else if(s==="style")e.style=Ir([e.style,i.style]);else if(rc(s)){const r=e[s],o=i[s];o&&r!==o&&!(fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Kn(t,e,n,i=null){zn(t,e,7,[n,i])}const rw=Zp();let ow=0;function aw(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||rw,r={uid:ow++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:e0(i,s),emitsOptions:a0(i,s),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Hv.bind(null,r),t.ce&&t.ce(r),r}let Gt=null;const h0=()=>Gt||Pt;let Al,Ku;{const t=cc(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Al=e("__VUE_INSTANCE_SETTERS__",n=>Gt=n),Ku=e("__VUE_SSR_SETTERS__",n=>Yo=n)}const Sa=t=>{const e=Gt;return Al(t),t.scope.on(),()=>{t.scope.off(),Al(e)}},Gf=()=>{Gt&&Gt.scope.off(),Al(null)};function d0(t){return t.vnode.shapeFlag&4}let Yo=!1;function lw(t,e=!1,n=!1){e&&Ku(e);const{props:i,children:s}=t.vnode,r=d0(t);Ov(t,i,r,e),Gv(t,s,n||e);const o=r?cw(t,e):void 0;return e&&Ku(!1),o}function cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cv);const{setup:i}=n;if(i){Ai();const s=t.setupContext=i.length>1?hw(t):null,r=Sa(t),o=wa(i,t,0,[t.props,s]),a=tp(o);if(Ii(),r(),(a||t.sp)&&!Er(t)&&Vp(t),a){if(o.then(Gf,Gf),e)return o.then(l=>{zf(t,l)}).catch(l=>{hc(l,t,0)});t.asyncDep=o}else zf(t,o)}else f0(t)}function zf(t,e,n){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=Cp(e)),f0(t)}function f0(t,e,n){const i=t.type;t.render||(t.render=i.render||ti);{const s=Sa(t);Ai();try{kv(t)}finally{Ii(),s()}}}const uw={get(t,e){return Nt(t,"get",""),t[e]}};function hw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uw),slots:t.slots,emit:t.emit,expose:e}}function _c(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cp(Y1(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Io)return Io[n](t)},has(e,n){return n in e||n in Io}})):t.proxy}function dw(t,e=!0){return we(t)?t.displayName||t.name:t.name||e&&t.__name}function fw(t){return we(t)&&"__vccOpts"in t}const ne=(t,e)=>nv(t,e,Yo);function Yh(t,e,n){try{Rl(-1);const i=arguments.length;return i===2?Je(e)&&!fe(e)?Xo(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Xo(n)&&(n=[n]),Xe(t,e,n))}finally{Rl(1)}}const gw="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $u;const Bf=typeof window<"u"&&window.trustedTypes;if(Bf)try{$u=Bf.createPolicy("vue",{createHTML:t=>t})}catch{}const g0=$u?t=>$u.createHTML(t):t=>t,mw="http://www.w3.org/2000/svg",pw="http://www.w3.org/1998/Math/MathML",wi=typeof document<"u"?document:null,jf=wi&&wi.createElement("template"),_w={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?wi.createElementNS(mw,t):e==="mathml"?wi.createElementNS(pw,t):n?wi.createElement(t,{is:n}):wi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>wi.createTextNode(t),createComment:t=>wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{jf.innerHTML=g0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=jf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gi="transition",lo="animation",Jo=Symbol("_vtc"),m0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yw=Mt({},Dp,m0),vw=t=>(t.displayName="Transition",t.props=yw,t),qu=vw((t,{slots:e})=>Yh(hv,ww(t),e)),ws=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wf=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function ww(t){const e={};for(const A in t)A in m0||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=Sw(s),m=g&&g[0],p=g&&g[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:w,onLeave:b,onLeaveCancelled:E,onBeforeAppear:P=_,onAppear:k=y,onAppearCancelled:R=w}=e,C=(A,q,ie,ce)=>{A._enterCancelled=ce,Ss(A,q?u:a),Ss(A,q?c:o),ie&&ie()},V=(A,q)=>{A._isLeaving=!1,Ss(A,h),Ss(A,f),Ss(A,d),q&&q()},W=A=>(q,ie)=>{const ce=A?k:y,z=()=>C(q,A,ie);ws(ce,[q,z]),Vf(()=>{Ss(q,A?l:r),gi(q,A?u:a),Wf(ce)||Uf(q,i,m,z)})};return Mt(e,{onBeforeEnter(A){ws(_,[A]),gi(A,r),gi(A,o)},onBeforeAppear(A){ws(P,[A]),gi(A,l),gi(A,c)},onEnter:W(!1),onAppear:W(!0),onLeave(A,q){A._isLeaving=!0;const ie=()=>V(A,q);gi(A,h),A._enterCancelled?(gi(A,d),qf(A)):(qf(A),gi(A,d)),Vf(()=>{A._isLeaving&&(Ss(A,h),gi(A,f),Wf(b)||Uf(A,i,p,ie))}),ws(b,[A,ie])},onEnterCancelled(A){C(A,!1,void 0,!0),ws(w,[A])},onAppearCancelled(A){C(A,!0,void 0,!0),ws(R,[A])},onLeaveCancelled(A){V(A),ws(E,[A])}})}function Sw(t){if(t==null)return null;if(Je(t))return[nu(t.enter),nu(t.leave)];{const e=nu(t);return[e,e]}}function nu(t){return b1(t)}function gi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Jo]||(t[Jo]=new Set)).add(e)}function Ss(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Jo];n&&(n.delete(e),n.size||(t[Jo]=void 0))}function Vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bw=0;function Uf(t,e,n,i){const s=t._endId=++bw,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Ew(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Ew(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Gi}Delay`),r=i(`${Gi}Duration`),o=Kf(s,r),a=i(`${lo}Delay`),l=i(`${lo}Duration`),c=Kf(a,l);let u=null,h=0,d=0;e===Gi?o>0&&(u=Gi,h=o,d=r.length):e===lo?c>0&&(u=lo,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Gi:lo:null,d=u?u===Gi?r.length:l.length:0);const f=u===Gi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Gi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Kf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>$f(n)+$f(t[i])))}function $f(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qf(t){return(t?t.ownerDocument:document).body.offsetHeight}function Mw(t,e,n){const i=t[Jo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Il=Symbol("_vod"),p0=Symbol("_vsh"),xw={name:"show",beforeMount(t,{value:e},{transition:n}){t[Il]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):co(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),co(t,!0),i.enter(t)):i.leave(t,()=>{co(t,!1)}):co(t,e))},beforeUnmount(t,{value:e}){co(t,e)}};function co(t,e){t.style.display=e?t[Il]:"none",t[p0]=!e}const Cw=Symbol(""),kw=/(?:^|;)\s*display\s*:/;function Pw(t,e,n){const i=t.style,s=pt(n);let r=!1;if(n&&!s){if(e)if(pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&_l(i,a,"")}else for(const o in e)n[o]==null&&_l(i,o,"");for(const o in n)o==="display"&&(r=!0),_l(i,o,n[o])}else if(s){if(e!==n){const o=i[Cw];o&&(n+=";"+o),i.cssText=n,r=kw.test(n)}}else e&&t.removeAttribute("style");Il in t&&(t[Il]=r?i.display:"",t[p0]&&(i.display="none"))}const Hf=/\s*!important$/;function _l(t,e,n){if(fe(n))n.forEach(i=>_l(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Tw(t,e);Hf.test(n)?t.setProperty(Ws(i),n.replace(Hf,""),"important"):t[i]=n}}const Zf=["Webkit","Moz","ms"],iu={};function Tw(t,e){const n=iu[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return iu[e]=i;i=lc(i);for(let s=0;s<Zf.length;s++){const r=Zf[s]+i;if(r in t)return iu[e]=r}return e}const Xf="http://www.w3.org/1999/xlink";function Yf(t,e,n,i,s,r=P1(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xf,e.slice(6,e.length)):t.setAttributeNS(Xf,e,n):n==null||r&&!op(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Gn(n)?String(n):n)}function Jf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?g0(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=op(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Jh(t,e,n,i){t.addEventListener(e,n,i)}function Rw(t,e,n,i){t.removeEventListener(e,n,i)}const Qf=Symbol("_vei");function Aw(t,e,n,i,s=null){const r=t[Qf]||(t[Qf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Iw(e);if(i){const c=r[e]=Fw(i,s);Jh(t,a,c,l)}else o&&(Rw(t,a,o,l),r[e]=void 0)}}const eg=/(?:Once|Passive|Capture)$/;function Iw(t){let e;if(eg.test(t)){e={};let i;for(;i=t.match(eg);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ws(t.slice(2)),e]}let su=0;const Lw=Promise.resolve(),Ow=()=>su||(Lw.then(()=>su=0),su=Date.now());function Fw(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;zn(Nw(i,n.value),e,5,[i])};return n.value=t,n.attached=Ow(),n}function Nw(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const tg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dw=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Mw(t,i,o):e==="style"?Pw(t,n,i):rc(e)?Oh(e)||Aw(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gw(t,e,i,o))?(Jf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!pt(i))?Jf(t,An(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Yf(t,e,i,o))};function Gw(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&tg(e)&&we(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tg(e)&&pt(n)?!1:e in t}const Ll=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>fl(e,n):e},xr=Symbol("_assign"),zw={created(t,{value:e},n){t.checked=Lr(e,n.props.value),t[xr]=Ll(n),Jh(t,"change",()=>{t[xr](Qo(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[xr]=Ll(i),e!==n&&(t.checked=Lr(e,i.props.value))}},ng={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=oc(e);Jh(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?rp(Qo(o)):Qo(o));t[xr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Uh(()=>{t._assigning=!1})}),t[xr]=Ll(i)},mounted(t,{value:e}){ig(t,e)},beforeUpdate(t,e,n){t[xr]=Ll(n)},updated(t,{value:e}){t._assigning||ig(t,e)}};function ig(t,e){const n=t.multiple,i=fe(e);if(!(n&&!i&&!oc(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Qo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=R1(e,a)>-1}else o.selected=e.has(a);else if(Lr(Qo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qo(t){return"_value"in t?t._value:t.value}const Bw=["ctrl","shift","alt","meta"],jw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bw.some(n=>t[`${n}Key`]&&!e.includes(n))},_0=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=jw[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Ww=Mt({patchProp:Dw},_w);let sg;function Vw(){return sg||(sg=Bv(Ww))}const Uw=(...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=$w(i);if(!s)return;const r=e._component;!we(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Kw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Kw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $w(t){return pt(t)?document.querySelector(t):t}function qw(){return y0().__VUE_DEVTOOLS_GLOBAL_HOOK__}function y0(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Hw=typeof Proxy=="function",Zw="devtools-plugin:setup",Xw="plugin:settings:set";let Js,Hu;function Yw(){var t;return Js!==void 0||(typeof window<"u"&&window.performance?(Js=!0,Hu=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Js=!0,Hu=globalThis.perf_hooks.performance):Js=!1),Js}function Jw(){return Yw()?Hu.now():Date.now()}class Qw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return Jw()}},n&&n.on(Xw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function eS(t,e){const n=t,i=y0(),s=qw(),r=Hw&&n.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(Zw,t,e);else{const o=r?new Qw(n,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const or=typeof document<"u";function v0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&v0(t.default)}const We=Object.assign;function ru(t,e){const n={};for(const i in e){const s=e[i];n[i]=Bn(s)?s.map(t):t(s)}return n}const Oo=()=>{},Bn=Array.isArray;function rg(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const w0=/#/g,nS=/&/g,iS=/\//g,sS=/=/g,rS=/\?/g,S0=/\+/g,oS=/%5B/g,aS=/%5D/g,b0=/%5E/g,lS=/%60/g,E0=/%7B/g,cS=/%7C/g,M0=/%7D/g,uS=/%20/g;function Qh(t){return t==null?"":encodeURI(""+t).replace(cS,"|").replace(oS,"[").replace(aS,"]")}function hS(t){return Qh(t).replace(E0,"{").replace(M0,"}").replace(b0,"^")}function Zu(t){return Qh(t).replace(S0,"%2B").replace(uS,"+").replace(w0,"%23").replace(nS,"%26").replace(lS,"`").replace(E0,"{").replace(M0,"}").replace(b0,"^")}function dS(t){return Zu(t).replace(sS,"%3D")}function fS(t){return Qh(t).replace(w0,"%23").replace(rS,"%3F")}function gS(t){return fS(t).replace(iS,"%2F")}function ea(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const mS=/\/$/,pS=t=>t.replace(mS,"");function ou(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=wS(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:ea(o)}}function _S(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function og(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yS(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Or(e.matched[i],n.matched[s])&&x0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function x0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vS(t[n],e[n]))return!1;return!0}function vS(t,e){return Bn(t)?ag(t,e):Bn(e)?ag(e,t):t===e}function ag(t,e){return Bn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function wS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const zi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Xu=function(t){return t.pop="pop",t.push="push",t}({}),au=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function SS(t){if(!t)if(or){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pS(t)}const bS=/^[^#]+#/;function ES(t,e){return t.replace(bS,"#")+e}function MS(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const yc=()=>({left:window.scrollX,top:window.scrollY});function xS(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=MS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lg(t,e){return(history.state?history.state.position-e:-1)+t}const Yu=new Map;function CS(t,e){Yu.set(t,e)}function kS(t){const e=Yu.get(t);return Yu.delete(t),e}function PS(t){return typeof t=="string"||t&&typeof t=="object"}function C0(t){return typeof t=="string"||typeof t=="symbol"}let dt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const k0=Symbol("");dt.MATCHER_NOT_FOUND+"",dt.NAVIGATION_GUARD_REDIRECT+"",dt.NAVIGATION_ABORTED+"",dt.NAVIGATION_CANCELLED+"",dt.NAVIGATION_DUPLICATED+"";function Fr(t,e){return We(new Error,{type:t,[k0]:!0},e)}function mi(t,e){return t instanceof Error&&k0 in t&&(e==null||!!(t.type&e))}const TS=["params","query","hash"];function RS(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of TS)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function AS(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(S0," "),r=s.indexOf("="),o=ea(r<0?s:s.slice(0,r)),a=r<0?null:ea(s.slice(r+1));if(o in e){let l=e[o];Bn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function cg(t){let e="";for(let n in t){const i=t[n];if(n=dS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bn(i)?i.map(s=>s&&Zu(s)):[i&&Zu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function IS(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Bn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const LS=Symbol(""),ug=Symbol(""),vc=Symbol(""),ed=Symbol(""),Ju=Symbol("");function uo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Fr(dt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):PS(d)?l(Fr(dt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function lu(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(v0(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Zi(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=tS(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&Zi(d,n,i,o,a,s)()}))}}return r}function OS(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Or(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Or(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let FS=()=>location.protocol+"//"+location.host;function P0(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),og(a,"")}return og(n,t)+i+s}function NS(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=P0(t,location),g=n.value,m=e.value;let p=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}p=m?d.position-m.position:0}else i(f);s.forEach(_=>{_(n.value,g,{delta:p,type:Xu.pop,direction:p?p>0?au.forward:au.back:au.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(We({},d.state,{scroll:yc()}),"")}}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function hg(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?yc():null}}function DS(t){const{history:e,location:n}=window,i={value:P0(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:FS()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){r(l,We({},e.state,hg(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=We({},s.value,e.state,{forward:l,scroll:yc()});r(u.current,u,!0),r(l,We({},hg(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function GS(t){t=SS(t);const e=DS(t),n=NS(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=We({location:"",base:t,go:i,createHref:ES.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ps=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var St=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(St||{});const zS={type:Ps.Static,value:""},BS=/[a-zA-Z0-9_]/;function jS(t){if(!t)return[[]];if(t==="/")return[[zS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=St.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===St.Static?r.push({type:Ps.Static,value:c}):n===St.Param||n===St.ParamRegExp||n===St.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ps.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==St.ParamRegExp){i=n,n=St.EscapeNext;continue}switch(n){case St.Static:l==="/"?(c&&h(),o()):l===":"?(h(),n=St.Param):d();break;case St.EscapeNext:d(),n=i;break;case St.Param:l==="("?n=St.ParamRegExp:BS.test(l)?d():(h(),n=St.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case St.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=St.ParamRegExpEnd:u+=l;break;case St.ParamRegExpEnd:h(),n=St.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===St.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}const dg="[^/]+?",WS={sensitive:!1,strict:!1,start:!0,end:!0};var qt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(qt||{});const VS=/[.+*?^${}()[\]/\\]/g;function US(t,e){const n=We({},WS,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[qt.Root];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=qt.Segment+(n.sensitive?qt.BonusCaseSensitive:0);if(d.type===Ps.Static)h||(s+="/"),s+=d.value.replace(VS,"\\$&"),f+=qt.Static;else if(d.type===Ps.Param){const{value:g,repeatable:m,optional:p,regexp:_}=d;r.push({name:g,repeatable:m,optional:p});const y=_||dg;if(y!==dg){f+=qt.BonusCustomRegExp;try{`${y}`}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+b.message)}}let w=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(w=p&&c.length<2?`(?:/${w})`:"/"+w),p&&(w+="?"),s+=w,f+=qt.Dynamic,p&&(f+=qt.BonusOptional),m&&(f+=qt.BonusRepeatable),y===".*"&&(f+=qt.BonusWildcard)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=qt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===Ps.Static)u+=f.value;else if(f.type===Ps.Param){const{value:g,repeatable:m,optional:p}=f,_=g in c?c[g]:"";if(Bn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Bn(_)?_.join("/"):_;if(!y)if(p)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function KS(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===qt.Static+qt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===qt.Static+qt.Segment?1:-1:0}function T0(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=KS(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(fg(i))return 1;if(fg(s))return-1}return s.length-i.length}function fg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $S={strict:!1,end:!0,sensitive:!1};function qS(t,e,n){const i=US(jS(t.path),n),s=We(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HS(t,e){const n=[],i=new Map;e=rg($S,e);function s(h){return i.get(h)}function r(h,d,f){const g=!f,m=mg(h);m.aliasOf=f&&f.record;const p=rg(e,h),_=[m];if("alias"in h){const b=typeof h.alias=="string"?[h.alias]:h.alias;for(const E of b)_.push(mg(We({},m,{components:f?f.record.components:m.components,path:E,aliasOf:f?f.record:m})))}let y,w;for(const b of _){const{path:E}=b;if(d&&E[0]!=="/"){const P=d.record.path,k=P[P.length-1]==="/"?"":"/";b.path=d.record.path+(E&&k+E)}if(y=qS(b,d,p),f?f.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&h.name&&!pg(y)&&o(h.name)),R0(y)&&l(y),m.children){const P=m.children;for(let k=0;k<P.length;k++)r(P[k],y,f&&f.children[k])}f=f||y}return w?()=>{o(w)}:Oo}function o(h){if(C0(h)){const d=i.get(h);d&&(i.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=YS(h,n);n.splice(d,0,h),h.record.name&&!pg(h)&&i.set(h.record.name,h)}function c(h,d){let f,g={},m,p;if("name"in h&&h.name){if(f=i.get(h.name),!f)throw Fr(dt.MATCHER_NOT_FOUND,{location:h});p=f.record.name,g=We(gg(d.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),h.params&&gg(h.params,f.keys.map(w=>w.name))),m=f.stringify(g)}else if(h.path!=null)m=h.path,f=n.find(w=>w.re.test(m)),f&&(g=f.parse(m),p=f.record.name);else{if(f=d.name?i.get(d.name):n.find(w=>w.re.test(d.path)),!f)throw Fr(dt.MATCHER_NOT_FOUND,{location:h,currentLocation:d});p=f.record.name,g=We({},d.params,h.params),m=f.stringify(g)}const _=[];let y=f;for(;y;)_.unshift(y.record),y=y.parent;return{name:p,path:m,params:g,matched:_,meta:XS(_)}}t.forEach(h=>r(h));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function gg(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function mg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ZS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ZS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function pg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XS(t){return t.reduce((e,n)=>We(e,n.meta),{})}function YS(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;T0(t,e[r])<0?i=r:n=r+1}const s=JS(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function JS(t){let e=t;for(;e=e.parent;)if(R0(e)&&T0(t,e)===0)return e}function R0({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _g(t){const e=Pn(vc),n=Pn(ed),i=ne(()=>{const l=Ci(t.to);return e.resolve(l)}),s=ne(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Or.bind(null,u));if(d>-1)return d;const f=yg(l[c-2]);return c>1&&yg(u)===f&&h[h.length-1].path!==f?h.findIndex(Or.bind(null,l[c-2])):d}),r=ne(()=>s.value>-1&&ib(n.params,i.value.params)),o=ne(()=>s.value>-1&&s.value===n.matched.length-1&&x0(n.params,i.value.params));function a(l={}){if(nb(l)){const c=e[Ci(t.replace)?"replace":"push"](Ci(t.to)).catch(Oo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ne(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function QS(t){return t.length===1?t[0]:t}const eb=Wp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_g,setup(t,{slots:e}){const n=as(_g(t)),{options:i}=Pn(vc),s=ne(()=>({[vg(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[vg(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&QS(e.default(n));return t.custom?r:Yh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),tb=eb;function nb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ib(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Bn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function yg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vg=(t,e,n)=>t??e??n,sb=Wp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Pn(Ju),s=ne(()=>t.route||i.value),r=Pn(ug,0),o=ne(()=>{let c=Ci(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ne(()=>s.value.matched[o.value]);ml(ug,ne(()=>o.value+1)),ml(LS,a),ml(Ju,s);const l=Tt();return Tn(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Or(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return wg(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,p=Yh(d,We({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return wg(n.default,{Component:p,route:c})||p}}});function wg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rb=sb;function ob(t){const e=HS(t.routes,t),n=t.parseQuery||AS,i=t.stringifyQuery||cg,s=t.history,r=uo(),o=uo(),a=uo(),l=J1(zi);let c=zi;or&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ru.bind(null,T=>""+T),h=ru.bind(null,gS),d=ru.bind(null,ea);function f(T,J){let H,te;return C0(T)?(H=e.getRecordMatcher(T),te=J):te=T,e.addRoute(te,H)}function g(T){const J=e.getRecordMatcher(T);J&&e.removeRoute(J)}function m(){return e.getRoutes().map(T=>T.record)}function p(T){return!!e.getRecordMatcher(T)}function _(T,J){if(J=We({},J||l.value),typeof T=="string"){const x=ou(n,T,J.path),L=e.resolve({path:x.path},J),N=s.createHref(x.fullPath);return We(x,L,{params:d(L.params),hash:ea(x.hash),redirectedFrom:void 0,href:N})}let H;if(T.path!=null)H=We({},T,{path:ou(n,T.path,J.path).path});else{const x=We({},T.params);for(const L in x)x[L]==null&&delete x[L];H=We({},T,{params:h(x)}),J.params=h(J.params)}const te=e.resolve(H,J),xe=T.hash||"";te.params=u(d(te.params));const v=_S(i,We({},T,{hash:hS(xe),path:te.path})),M=s.createHref(v);return We({fullPath:v,hash:xe,query:i===cg?IS(T.query):T.query||{}},te,{redirectedFrom:void 0,href:M})}function y(T){return typeof T=="string"?ou(n,T,l.value.path):We({},T)}function w(T,J){if(c!==T)return Fr(dt.NAVIGATION_CANCELLED,{from:J,to:T})}function b(T){return k(T)}function E(T){return b(We(y(T),{replace:!0}))}function P(T,J){const H=T.matched[T.matched.length-1];if(H&&H.redirect){const{redirect:te}=H;let xe=typeof te=="function"?te(T,J):te;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=y(xe):{path:xe},xe.params={}),We({query:T.query,hash:T.hash,params:xe.path!=null?{}:T.params},xe)}}function k(T,J){const H=c=_(T),te=l.value,xe=T.state,v=T.force,M=T.replace===!0,x=P(H,te);if(x)return k(We(y(x),{state:typeof x=="object"?We({},xe,x.state):xe,force:v,replace:M}),J||H);const L=H;L.redirectedFrom=J;let N;return!v&&yS(i,te,H)&&(N=Fr(dt.NAVIGATION_DUPLICATED,{to:L,from:te}),ye(te,te,!0,!1)),(N?Promise.resolve(N):V(L,te)).catch(I=>mi(I)?mi(I,dt.NAVIGATION_GUARD_REDIRECT)?I:me(I):ee(I,L,te)).then(I=>{if(I){if(mi(I,dt.NAVIGATION_GUARD_REDIRECT))return k(We({replace:M},y(I.to),{state:typeof I.to=="object"?We({},xe,I.to.state):xe,force:v}),J||L)}else I=A(L,te,!0,M,xe);return W(L,te,I),I})}function R(T,J){const H=w(T,J);return H?Promise.reject(H):Promise.resolve()}function C(T){const J=U.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(T):T()}function V(T,J){let H;const[te,xe,v]=OS(T,J);H=lu(te.reverse(),"beforeRouteLeave",T,J);for(const x of te)x.leaveGuards.forEach(L=>{H.push(Zi(L,T,J))});const M=R.bind(null,T,J);return H.push(M),He(H).then(()=>{H=[];for(const x of r.list())H.push(Zi(x,T,J));return H.push(M),He(H)}).then(()=>{H=lu(xe,"beforeRouteUpdate",T,J);for(const x of xe)x.updateGuards.forEach(L=>{H.push(Zi(L,T,J))});return H.push(M),He(H)}).then(()=>{H=[];for(const x of v)if(x.beforeEnter)if(Bn(x.beforeEnter))for(const L of x.beforeEnter)H.push(Zi(L,T,J));else H.push(Zi(x.beforeEnter,T,J));return H.push(M),He(H)}).then(()=>(T.matched.forEach(x=>x.enterCallbacks={}),H=lu(v,"beforeRouteEnter",T,J,C),H.push(M),He(H))).then(()=>{H=[];for(const x of o.list())H.push(Zi(x,T,J));return H.push(M),He(H)}).catch(x=>mi(x,dt.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function W(T,J,H){a.list().forEach(te=>C(()=>te(T,J,H)))}function A(T,J,H,te,xe){const v=w(T,J);if(v)return v;const M=J===zi,x=or?history.state:{};H&&(te||M?s.replace(T.fullPath,We({scroll:M&&x&&x.scroll},xe)):s.push(T.fullPath,xe)),l.value=T,ye(T,J,H,M),me()}let q;function ie(){q||(q=s.listen((T,J,H)=>{if(!ot.listening)return;const te=_(T),xe=P(te,ot.currentRoute.value);if(xe){k(We(xe,{replace:!0,force:!0}),te).catch(Oo);return}c=te;const v=l.value;or&&CS(lg(v.fullPath,H.delta),yc()),V(te,v).catch(M=>mi(M,dt.NAVIGATION_ABORTED|dt.NAVIGATION_CANCELLED)?M:mi(M,dt.NAVIGATION_GUARD_REDIRECT)?(k(We(y(M.to),{force:!0}),te).then(x=>{mi(x,dt.NAVIGATION_ABORTED|dt.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===Xu.pop&&s.go(-1,!1)}).catch(Oo),Promise.reject()):(H.delta&&s.go(-H.delta,!1),ee(M,te,v))).then(M=>{M=M||A(te,v,!1),M&&(H.delta&&!mi(M,dt.NAVIGATION_CANCELLED)?s.go(-H.delta,!1):H.type===Xu.pop&&mi(M,dt.NAVIGATION_ABORTED|dt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),W(te,v,M)}).catch(Oo)}))}let ce=uo(),z=uo(),se;function ee(T,J,H){me(T);const te=z.list();return te.length?te.forEach(xe=>xe(T,J,H)):console.error(T),Promise.reject(T)}function Ie(){return se&&l.value!==zi?Promise.resolve():new Promise((T,J)=>{ce.add([T,J])})}function me(T){return se||(se=!T,ie(),ce.list().forEach(([J,H])=>T?H(T):J()),ce.reset()),T}function ye(T,J,H,te){const{scrollBehavior:xe}=t;if(!or||!xe)return Promise.resolve();const v=!H&&kS(lg(T.fullPath,0))||(te||!H)&&history.state&&history.state.scroll||null;return Uh().then(()=>xe(T,J,v)).then(M=>M&&xS(M)).catch(M=>ee(M,T,J))}const ge=T=>s.go(T);let Le;const U=new Set,ot={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:m,resolve:_,options:t,push:b,replace:E,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:z.add,isReady:Ie,install(T){T.component("RouterLink",tb),T.component("RouterView",rb),T.config.globalProperties.$router=ot,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ci(l)}),or&&!Le&&l.value===zi&&(Le=!0,b(s.location).catch(te=>{}));const J={};for(const te in zi)Object.defineProperty(J,te,{get:()=>l.value[te],enumerable:!0});T.provide(vc,ot),T.provide(ed,Mp(J)),T.provide(Ju,l);const H=T.unmount;U.add(T),T.unmount=function(){U.delete(T),U.size<1&&(c=zi,q&&q(),q=null,l.value=zi,Le=!1,se=!1),H()}}};function He(T){return T.reduce((J,H)=>J.then(()=>C(H)),Promise.resolve())}return ot}function ab(){return Pn(vc)}function wc(t){return Pn(ed)}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var A0="store";function ln(t){return t===void 0&&(t=null),Pn(t!==null?t:A0)}function Zr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function lb(t){return t!==null&&typeof t=="object"}function cb(t){return t&&typeof t.then=="function"}function ub(t,e){return function(){return t(e)}}function I0(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function L0(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Sc(t,n,[],t._modules.root,!0),td(t,n,e)}function td(t,e,n){var i=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},a={},l=A1(!0);l.run(function(){Zr(r,function(c,u){o[u]=ub(c,t),a[u]=ne(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=as({data:e}),t._scope=l,t.strict&&mb(t),i&&n&&t._withCommit(function(){i.data=null}),s&&s.stop()}function Sc(t,e,n,i,s){var r=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!r&&!s){var a=nd(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=i.state})}var c=i.context=hb(t,o,n);i.forEachMutation(function(u,h){var d=o+h;db(t,d,u,c)}),i.forEachAction(function(u,h){var d=u.root?h:o+h,f=u.handler||u;fb(t,d,f,c)}),i.forEachGetter(function(u,h){var d=o+h;gb(t,d,u,c)}),i.forEachChild(function(u,h){Sc(t,e,n.concat(h),u,s)})}function hb(t,e,n){var i=e==="",s={dispatch:i?t.dispatch:function(r,o,a){var l=Ol(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:i?t.commit:function(r,o,a){var l=Ol(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(s,{getters:{get:i?function(){return t.getters}:function(){return O0(t,e)}},state:{get:function(){return nd(t.state,n)}}}),s}function O0(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function db(t,e,n,i){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,i.state,o)})}function fb(t,e,n,i){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},o);return cb(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function gb(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(i.state,i.getters,r.state,r.getters)})}function mb(t){Tn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function nd(t,e){return e.reduce(function(n,i){return n[i]},t)}function Ol(t,e,n){return lb(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var pb="vuex bindings",Sg="vuex:mutations",cu="vuex:actions",Qs="vuex",_b=0;function yb(t,e){eS({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[pb]},function(n){n.addTimelineLayer({id:Sg,label:"Vuex Mutations",color:bg}),n.addTimelineLayer({id:cu,label:"Vuex Actions",color:bg}),n.addInspector({id:Qs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===t&&i.inspectorId===Qs)if(i.filter){var s=[];G0(s,e._modules.root,i.filter,""),i.rootNodes=s}else i.rootNodes=[D0(e._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===t&&i.inspectorId===Qs){var s=i.nodeId;O0(e,s),i.state=Sb(Eb(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(i){if(i.app===t&&i.inspectorId===Qs){var s=i.nodeId,r=i.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){i.set(e._state.data,r,i.state.value)})}}),e.subscribe(function(i,s){var r={};i.payload&&(r.payload=i.payload),r.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Qs),n.sendInspectorState(Qs),n.addTimelineEvent({layerId:Sg,event:{time:Date.now(),title:i.type,data:r}})}),e.subscribeAction({before:function(i,s){var r={};i.payload&&(r.payload=i.payload),i._id=_b++,i._time=Date.now(),r.state=s,n.addTimelineEvent({layerId:cu,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:r}})},after:function(i,s){var r={},o=Date.now()-i._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(r.payload=i.payload),r.state=s,n.addTimelineEvent({layerId:cu,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:r}})}})})}var bg=8702998,vb=6710886,wb=16777215,F0={label:"namespaced",textColor:wb,backgroundColor:vb};function N0(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function D0(t,e){return{id:e||"root",label:N0(e),tags:t.namespaced?[F0]:[],children:Object.keys(t._children).map(function(n){return D0(t._children[n],e+n+"/")})}}function G0(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[F0]:[]}),Object.keys(e._children).forEach(function(s){G0(t,e._children[s],n,i+s+"/")})}function Sb(t,e,n){e=n==="root"?e:e[n];var i=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(i.length){var r=bb(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?N0(o):o,editable:!1,value:Qu(function(){return r[o]})}})}return s}function bb(t){var e={};return Object.keys(t).forEach(function(n){var i=n.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=Qu(function(){return t[n]})}else e[n]=Qu(function(){return t[n]})}),e}function Eb(t,e){var n=e.split("/").filter(function(i){return i});return n.reduce(function(i,s,r){var o=i[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Qu(t){try{return t()}catch(e){return e}}var Vn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},z0={namespaced:{configurable:!0}};z0.namespaced.get=function(){return!!this._rawModule.namespaced};Vn.prototype.addChild=function(e,n){this._children[e]=n};Vn.prototype.removeChild=function(e){delete this._children[e]};Vn.prototype.getChild=function(e){return this._children[e]};Vn.prototype.hasChild=function(e){return e in this._children};Vn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vn.prototype.forEachChild=function(e){Zr(this._children,e)};Vn.prototype.forEachGetter=function(e){this._rawModule.getters&&Zr(this._rawModule.getters,e)};Vn.prototype.forEachAction=function(e){this._rawModule.actions&&Zr(this._rawModule.actions,e)};Vn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Zr(this._rawModule.mutations,e)};Object.defineProperties(Vn.prototype,z0);var Vs=function(e){this.register([],e,!1)};Vs.prototype.get=function(e){return e.reduce(function(n,i){return n.getChild(i)},this.root)};Vs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(i,s){return n=n.getChild(s),i+(n.namespaced?s+"/":"")},"")};Vs.prototype.update=function(e){B0([],this.root,e)};Vs.prototype.register=function(e,n,i){var s=this;i===void 0&&(i=!0);var r=new Vn(n,i);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Zr(n.modules,function(a,l){s.register(e.concat(l),a,i)})};Vs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1],s=n.getChild(i);s&&s.runtime&&n.removeChild(i)};Vs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1];return n?n.hasChild(i):!1};function B0(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return;B0(t.concat(i),e.getChild(i),n.modules[i])}}function Mb(t){return new cn(t)}var cn=function(e){var n=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Vs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(d,f){return l.call(o,d,f)},this.commit=function(d,f,g){return c.call(o,d,f,g)},this.strict=s;var u=this._modules.root.state;Sc(this,u,[],this._modules.root),td(this,u),i.forEach(function(h){return h(n)})},id={state:{configurable:!0}};cn.prototype.install=function(e,n){e.provide(n||A0,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&yb(e,this)};id.state.get=function(){return this._state.data};id.state.set=function(t){};cn.prototype.commit=function(e,n,i){var s=this,r=Ol(e,n,i),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};cn.prototype.dispatch=function(e,n){var i=this,s=Ol(e,n),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(d){try{i._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,i.state)})}catch{}u(d)},function(d){try{i._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,i.state,d)})}catch{}h(d)})})}};cn.prototype.subscribe=function(e,n){return I0(e,this._subscribers,n)};cn.prototype.subscribeAction=function(e,n){var i=typeof e=="function"?{before:e}:e;return I0(i,this._actionSubscribers,n)};cn.prototype.watch=function(e,n,i){var s=this;return Tn(function(){return e(s.state,s.getters)},n,Object.assign({},i))};cn.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};cn.prototype.registerModule=function(e,n,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Sc(this,this.state,e,this._modules.get(e),i.preserveState),td(this,this.state)};cn.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=nd(n.state,e.slice(0,-1));delete i[e[e.length-1]]}),L0(this)};cn.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};cn.prototype.hotUpdate=function(e){this._modules.update(e),L0(this,!0)};cn.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(cn.prototype,id);const xb=[{id:"common",title:"Grundlagen",description:"Gemeinsame Grundlagen vor der Wahl eines Spezialisierungs-Tracks.",modules:[{id:"js-fundamentals",title:"JavaScript Grundlagen",description:"Lerne die Grundlagen von modernem JavaScript.",icon:"📜",track:"common",lessons:[{id:"intro",title:"Was ist JavaScript?",type:"markdown",content:"js_fundamentals/intro.md"},{id:"eloquent-js",title:"Eloquent JavaScript (Buch)",type:"external-link",url:"https://eloquentjavascript.net/"},{id:"codecademy",title:"Codecademy JS-Kurs",type:"external-link",url:"https://www.codecademy.com/learn/introduction-to-javascript"},{id:"quiz-1",title:"JS-Grundlagen Quiz #1",type:"quiz",quizId:"js_fundamentals_1"}]},{id:"vue-basics",title:"Vue + Vuex Grundlagen",description:"Verstehe, wie wir SPAs mit Vue 3, Vue Router und Vuex strukturieren.",icon:"🧩",track:"common",lessons:[{id:"vue-intro",title:"Vue 3 Grundlagen",type:"markdown",content:"vue_basics/intro.md"},{id:"vuex-guide",title:"Vuex Patterns",type:"markdown",content:"vue_basics/vuex.md"},{id:"router-docs",title:"Vue Router Anleitung",type:"external-link",url:"https://router.vuejs.org/guide/"}]},{id:"geo-basics",title:"Geo-Grundlagen",description:"Projektionen, WMS, WFS und Karten-Konzepte.",icon:"🗺️",track:"common",lessons:[{id:"projections-theory",title:"Koordinatensysteme & Projektionen",type:"markdown",content:"geo_basics/projections.md"},{id:"wms-vs-wfs",title:"WMS vs WFS",type:"markdown",content:"geo_basics/wms_vs_wfs.md"},{id:"wms-playground",title:"WMS Playground",type:"geo-playground",configId:"wms_basic"},{id:"wfs-playground",title:"WFS Playground",type:"geo-playground",configId:"wfs_basic"},{id:"geo-tasklist",title:"Geo-Aufgaben",type:"task-list",tasksId:"geo_basics_tasks"}]}]},{id:"masterportal",title:"Masterportal-Track",description:"Spezialisiere dich auf den Masterportal-Stack und seine Erweiterungspunkte.",modules:[{id:"masterportal",title:"Masterportal Übersicht",description:"Architektur, Konfiguration und Erweiterungspunkte.",icon:"🏛️",track:"masterportal",lessons:[{id:"overview",title:"Was ist Masterportal?",type:"markdown",content:"masterportal/overview.md"},{id:"installation",title:"Installation & Setup",type:"markdown",content:"masterportal/installation.md"},{id:"config-structure",title:"Konfigurationsstruktur",type:"markdown",content:"masterportal/config_structure.md"},{id:"portal-setup",title:"Ein Portal aufsetzen",type:"markdown",content:"masterportal/portal_setup.md"},{id:"config-practice",title:"Praktische Übung: Config anpassen",type:"markdown",content:"masterportal/config.md"},{id:"architecture",title:"Architektur verstehen",type:"markdown",content:"masterportal/architecture.md"},{id:"tool-development",title:"Tool-Entwicklung",type:"markdown",content:"masterportal/tool_development.md"},{id:"masterportal-docs",title:"Offizielle Dokumentation",type:"external-link",url:"https://www.masterportal.org/dokumentation/dokumentation"}]},{id:"testing",title:"Testing mit Mocha/Chai/Sinon",description:"Test-Philosophie, Tools und Best Practices.",icon:"🧪",track:"masterportal",lessons:[{id:"testing-stack",title:"Unser Testing-Stack",type:"markdown",content:"testing/stack.md"},{id:"mocha-resources",title:"Mocha Dokumentation",type:"external-link",url:"https://mochajs.org/"}]},{id:"capstone",title:"Abschlussprojekt",description:"Kombiniere alles in einer kleinen Geo-Anwendung.",icon:"🚀",track:"masterportal",lessons:[{id:"brief",title:"Projektbeschreibung",type:"markdown",content:"capstone/brief.md"},{id:"task-checklist",title:"Build-Checkliste",type:"task-list",tasksId:"capstone_tasks"}]}]},{id:"polar",title:"POLAR-Track",description:"Spezialisiere dich auf POLAR – Plugin-basierte OpenLayers-Anwendungen mit Vue 3 und Vuetify.",modules:[{id:"polar-quickstart",title:"POLAR in 15 Minuten",description:"Schnelleinstieg: Was ist POLAR, Repo-Struktur und erste Schritte.",icon:"⚡",track:"polar",lessons:[{id:"quick-start",title:"POLAR Quick Start Guide",type:"markdown",content:"polar/quick_start.md"},{id:"polar-docs",title:"POLAR Offizielle Dokumentation",type:"external-link",url:"https://github.com/Dataport/polar"}]},{id:"polar-week1",title:"Woche 1: Architektur & Setup",description:"Monorepo verstehen, Snowbox starten, Plugin-Lifecycle kennenlernen.",icon:"🏗️",track:"polar",lessons:[{id:"w1-architecture",title:"POLAR-Architektur verstehen",type:"markdown",content:"polar/week1_architecture.md"},{id:"w1-tasks",title:"Hands-on: Snowbox & Store erkunden",type:"task-list",tasksId:"polar_week1_tasks"},{id:"w1-quiz",title:"Knowledge Check Woche 1",type:"quiz",quizId:"polar_week1_quiz"}]},{id:"polar-week2",title:"Woche 2: Plugin-Anatomie",description:"Store-Module, Vue-Components mit Vuetify, 9Layout-System.",icon:"🧩",track:"polar",lessons:[{id:"w2-plugin-anatomy",title:"Plugin-Struktur im Detail",type:"markdown",content:"polar/week2_plugin_anatomy.md"},{id:"w2-tasks",title:"Hands-on: Counter-Plugin erstellen",type:"task-list",tasksId:"polar_week2_tasks"},{id:"w2-quiz",title:"Knowledge Check Woche 2",type:"quiz",quizId:"polar_week2_quiz"}]},{id:"polar-week3",title:"Woche 3: Client-Entwicklung",description:"Generic vs. Specialized Clients, addPlugins.ts, Map-Konfiguration.",icon:"🖥️",track:"polar",lessons:[{id:"w3-client-dev",title:"Client-Entwicklung verstehen",type:"markdown",content:"polar/week3_client_development.md"},{id:"w3-tasks",title:"Hands-on: Dashboard-Client aufsetzen",type:"task-list",tasksId:"polar_week3_tasks"},{id:"w3-quiz",title:"Knowledge Check Woche 3",type:"quiz",quizId:"polar_week3_quiz"}]},{id:"polar-week4",title:"Woche 4: Testing & Qualität",description:"Jest + Playwright, createTestMountParameters, Code-Coverage.",icon:"🧪",track:"polar",lessons:[{id:"w4-testing",title:"Testing-Strategien für POLAR",type:"markdown",content:"polar/week4_testing.md"},{id:"w4-tasks",title:"Hands-on: Tests für Counter-Plugin",type:"task-list",tasksId:"polar_week4_tasks"},{id:"w4-quiz",title:"Knowledge Check Woche 4",type:"quiz",quizId:"polar_week4_quiz"}]},{id:"polar-week5",title:"Woche 5: Release & Produktion",description:"Semantic Versioning, CHANGELOG, NPM-Publishing, CI/CD.",icon:"🚀",track:"polar",lessons:[{id:"w5-release",title:"Release-Prozesse verstehen",type:"markdown",content:"polar/week5_release.md"},{id:"w5-tasks",title:"Hands-on: Counter-Plugin releasen",type:"task-list",tasksId:"polar_week5_tasks"},{id:"w5-quiz",title:"Knowledge Check Woche 5",type:"quiz",quizId:"polar_week5_quiz"}]},{id:"polar-capstone",title:"Capstone: MeasureTool-Plugin",description:"Realistisches Projekt: Distanz- und Flächenmessung auf der Karte.",icon:"📏",track:"polar",lessons:[{id:"capstone-brief",title:"Capstone-Projektbeschreibung",type:"markdown",content:"polar/capstone_brief.md"},{id:"capstone-tasks",title:"Capstone Meilensteine",type:"task-list",tasksId:"polar_capstone_tasks"}]}]}],Cb={tracks:xb},j0=Cb.tracks||[],sd=j0.flatMap(t=>(t.modules||[]).map(e=>({...e,track:e.track||t.id}))),bc=t=>{const e=Array.isArray(t)?t:t?[t]:[];return sd.filter(n=>n.track==="common"||e.includes(n.track))},Ec=t=>sd.find(e=>e.id===t),Eg=()=>sd,wt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},kb={class:"sidebar"},Pb={class:"sidebar__nav"},Tb={class:"sidebar__icon"},Rb={key:0,class:"sidebar__check"},Ab={__name:"Sidebar",setup(t){const e=wc(),n=ln(),i=ne(()=>[{label:"Dashboard",to:{name:"dashboard"},icon:"📊"},...bc(n.state.tracks.enabled).map(r=>({label:r.title,to:{name:"module",params:{id:r.id}},icon:r.icon,moduleId:r.id,isCompleted:n.getters["progress/moduleProgress"](r.id)===100})),{label:"Erfolge",to:{name:"achievements"},icon:"🏆"},{label:"Team",to:{name:"team"},icon:"👥"},{label:"FAQ",to:{name:"faq"},icon:"❓"}]),s=r=>{var o;return r?r.name==="dashboard"?e.name==="dashboard":r.name==="team"?e.name==="team":r.name==="achievements"?e.name==="achievements":r.name==="faq"?e.name==="faq":e.params.id===((o=r.params)==null?void 0:o.id):!1};return(r,o)=>{const a=Hr("RouterLink");return F(),B("aside",kb,[o[0]||(o[0]=S("div",{class:"sidebar__header"},[S("div",{class:"logo"},"🧭"),S("div",null,[S("p",{class:"sidebar__title"},"Onboarding"),S("p",{class:"sidebar__subtitle"},"Academy")])],-1)),S("nav",Pb,[(F(!0),B(Re,null,gt(i.value,l=>(F(),yt(a,{key:l.label,to:l.to,class:vt(["sidebar__link",{"sidebar__link--active":s(l.to),"sidebar__link--completed":l.isCompleted}])},{default:ri(()=>[S("span",Tb,X(l.icon||"•"),1),S("span",null,X(l.label),1),l.isCompleted?(F(),B("span",Rb,"✓")):Ye("",!0)]),_:2},1032,["to","class"]))),128))])])}}},Ib=wt(Ab,[["__scopeId","data-v-4774d0f1"]]),Xr={"js-fundamentals":{id:"js-fundamentals",name:"JavaScript-Meister",description:"Modul JavaScript-Grundlagen abgeschlossen",image:"/src/data/img/badges/javascript.png",moduleId:"js-fundamentals",type:"module",track:"common"},"vue-basics":{id:"vue-basics",name:"Vue-Experte",description:"Vue + Vuex Grundlagen gemeistert",image:"/src/data/img/badges/vue.png",moduleId:"vue-basics",type:"module",track:"common"},"geo-basics":{id:"geo-basics",name:"Geo-Spezialist",description:"Geo-Grundlagen abgeschlossen - Projektionen, WMS, WFS",image:"/src/data/img/badges/geoBasics.png",moduleId:"geo-basics",type:"module",track:"common"},masterportal:{id:"masterportal",name:"Masterportal-Experte",description:"Masterportal-Übersicht abgeschlossen",image:"/src/data/img/badges/masterportalOverview.png",moduleId:"masterportal",type:"module",track:"masterportal"},testing:{id:"testing",name:"Testing-Guru",description:"Testing mit Mocha/Chai/Sinon gemeistert",image:"/src/data/img/badges/testing.png",moduleId:"testing",type:"module",track:"masterportal"},capstone:{id:"capstone",name:"Abschlussprojekt-Champion",description:"Abschlussprojekt abgeschlossen",image:"/src/data/img/badges/capstoneProject.png",moduleId:"capstone",type:"module",track:"masterportal"},"polar-mapping":{id:"polar-mapping",name:"POLAR Framework Expert",description:"Completed POLAR Framework Basics",image:"/src/data/img/badges/polarBasics.png",moduleId:"polar-mapping",type:"module",track:"polar"},"polar-quickstart":{id:"polar-quickstart",name:"POLAR Quick Starter",description:"POLAR in 15 Minuten gemeistert",image:"/src/data/img/badges/polarQuickstart.png",moduleId:"polar-quickstart",type:"module",track:"polar"},"polar-week1":{id:"polar-week1",name:"POLAR Architekt",description:"Woche 1: Architektur & Setup abgeschlossen",image:"/src/data/img/badges/polarWeek1.png",moduleId:"polar-week1",type:"module",track:"polar"},"polar-week2":{id:"polar-week2",name:"Plugin-Entwickler",description:"Woche 2: Plugin-Anatomie gemeistert",image:"/src/data/img/badges/polarWeek2.png",moduleId:"polar-week2",type:"module",track:"polar"},"polar-week3":{id:"polar-week3",name:"Client-Spezialist",description:"Woche 3: Client-Entwicklung abgeschlossen",image:"/src/data/img/badges/polarWeek3.png",moduleId:"polar-week3",type:"module",track:"polar"},"polar-week4":{id:"polar-week4",name:"Testing-Profi",description:"Woche 4: Testing & Qualität gemeistert",image:"/src/data/img/badges/polarWeek4.png",moduleId:"polar-week4",type:"module",track:"polar"},"polar-week5":{id:"polar-week5",name:"Release-Manager",description:"Woche 5: Release & Produktion abgeschlossen",image:"/src/data/img/badges/polarWeek5.png",moduleId:"polar-week5",type:"module",track:"polar"},"polar-capstone":{id:"polar-capstone",name:"MeasureTool-Champion",description:"Capstone-Projekt: MeasureTool-Plugin erfolgreich entwickelt",image:"/src/data/img/badges/polarCapstone.png",moduleId:"polar-capstone",type:"module",track:"polar"},"masterportal-track":{id:"masterportal-track",name:"Masterportal-Meister",description:"Gesamten Masterportal-Track abgeschlossen",image:"/src/data/img/badges/masterportalTrackCompletion.png",type:"track",track:"masterportal",requiredModules:["js-fundamentals","vue-basics","geo-basics","masterportal","testing","capstone"]},"polar-track":{id:"polar-track",name:"POLAR-Meister",description:"Gesamten POLAR-Track abgeschlossen (5 Wochen + Capstone)",image:"/src/data/img/badges/polarTrackCompletion.png",type:"track",track:"polar",requiredModules:["js-fundamentals","vue-basics","geo-basics","polar-quickstart","polar-week1","polar-week2","polar-week3","polar-week4","polar-week5","polar-capstone"]}},rd=()=>Object.values(Xr),uu=()=>Object.values(Xr).filter(t=>t.type==="module"),Lb=()=>Object.values(Xr).filter(t=>t.type==="track"),Ob=t=>Xr[t]||null,od=t=>Object.values(Xr).find(e=>e.moduleId===t),Fb={class:"topbar"},Nb={class:"topbar__title"},Db={class:"topbar__actions"},Gb={class:"badge-indicator__count"},zb={key:0,class:"badge-indicator__dot"},Bb={class:"topbar__user"},jb={class:"avatar"},Wb={__name:"TopBar",props:{title:{type:[String,Object],default:"Dashboard"},userName:{type:[String,Object],default:"Nachwuchskraft"}},emits:["open-tutorial"],setup(t,{emit:e}){const n=t,i=e,s=ln(),r=ne(()=>s.getters["badges/earnedBadges"].length),o=rd().length,a=ne(()=>s.getters["badges/unviewedCount"]),l=ne(()=>a.value>0),c=()=>{window.location.href="/achievements"},u=()=>{i("open-tutorial")};return(h,d)=>(F(),B("header",Fb,[S("div",Nb,X(n.title),1),S("div",Db,[S("button",{class:"tutorial-btn",onClick:u,title:"Tutorial anzeigen"},[...d[0]||(d[0]=[S("span",{class:"tutorial-btn__icon"},"❓",-1)])]),S("button",{class:vt(["badge-indicator",{"badge-indicator--unviewed":l.value}]),onClick:c},[d[1]||(d[1]=S("span",{class:"badge-indicator__icon"},"🏆",-1)),S("span",Gb,X(r.value)+"/"+X(Ci(o)),1),l.value?(F(),B("span",zb)):Ye("",!0)],2),S("div",Bb,[S("div",jb,X(String(n.userName).charAt(0)),1),S("span",null,X(n.userName),1)])])]))}},Vb=wt(Wb,[["__scopeId","data-v-02d60a61"]]),Ub={class:"modal-content"},Kb={class:"modal-body"},$b={class:"badge-display"},qb=["src","alt"],Hb={class:"badge-name"},Zb={class:"badge-description"},Xb={__name:"BadgeUnlockModal",setup(t){const e=ln(),n=Tt(!1),i=Tt(null),s=ne(()=>e.getters["badges/lastEarnedBadge"]);Tn(s,a=>{if(a){const l=Ob(a);l&&(i.value=l,n.value=!0)}});const r=()=>{i.value&&e.commit("badges/markBadgeViewed",i.value.id),n.value=!1,i.value=null},o=a=>{a.target===a.currentTarget&&r()};return(a,l)=>(F(),yt(Fp,{to:"body"},[Xe(qu,{name:"modal"},{default:ri(()=>[n.value&&i.value?(F(),B("div",{key:0,class:"modal-backdrop",onClick:o},[S("div",Ub,[S("div",{class:"modal-header"},[l[0]||(l[0]=S("h2",{class:"modal-title"},"🎉 Abzeichen freigeschaltet!",-1)),S("button",{class:"modal-close",onClick:r,"aria-label":"Schließen"},"×")]),S("div",Kb,[S("div",$b,[S("img",{src:i.value.image,alt:i.value.name,class:"badge-image"},null,8,qb)]),S("h3",Hb,X(i.value.name),1),S("p",Zb,X(i.value.description),1)]),S("div",{class:"modal-footer"},[S("button",{class:"btn-primary",onClick:r},"Fantastisch!")])])])):Ye("",!0)]),_:1})]))}},Yb=wt(Xb,[["__scopeId","data-v-d68ab6d6"]]),Jb={class:"modal-content"},Qb={class:"modal-header"},eE={class:"slide-indicator"},tE=["onClick"],nE={class:"modal-body"},iE={class:"slide-icon"},sE={class:"slide-title"},rE={class:"slide-description"},oE={class:"feature-list"},aE={class:"feature-emoji"},lE={class:"feature-text"},cE={class:"modal-footer"},Mg=4,uE={__name:"IntroductionModal",emits:["close"],setup(t,{emit:e}){const n=ln(),i=e,s=Tt(0),r=[{icon:"🚀",title:"Willkommen in der Onboarding Academy!",description:"Deine Reise zum Geo-Entwickler bei Dataport beginnt hier. Lerne in deinem eigenen Tempo und sammle Abzeichen auf dem Weg.",features:[{emoji:"📚",text:"Grundlagen-Track: JavaScript, Vue.js & Geo-Basics"},{emoji:"⚡",text:"Spezialisierung: Masterportal oder POLAR Framework"},{emoji:"🎯",text:"Capstone-Projekt: Zeig dein Können!"}]},{icon:"📖",title:"Vielfältige Lernformate",description:"Jedes Modul bietet unterschiedliche Lesson-Typen für abwechslungsreiches Lernen.",features:[{emoji:"📝",text:"Markdown-Inhalte: Strukturierte Lerntexte"},{emoji:"❓",text:"Quizzes: Teste dein Wissen (70% zum Bestehen)"},{emoji:"✅",text:"Task-Listen: Praktische Aufgaben zum Abhaken"},{emoji:"🗺️",text:"Geo-Playgrounds: Interaktive Karten-Demos"}]},{icon:"🏆",title:"Achievements & Fortschritt",description:"Verfolge deinen Fortschritt und schalte Abzeichen frei, während du lernst.",features:[{emoji:"🎖️",text:"9 Abzeichen zum Freischalten (Module & Tracks)"},{emoji:"📊",text:"Progress-Tracking für jedes Modul"},{emoji:"🎉",text:"Badge-Benachrichtigungen bei Erfolgen"},{emoji:"💾",text:"Automatische Speicherung deines Fortschritts"}]},{icon:"🎓",title:"Los geht's!",description:"Alles bereit? Starte mit dem Dashboard und wähle deinen ersten Track.",features:[{emoji:"🏠",text:"Dashboard: Übersicht & Track-Auswahl"},{emoji:"📚",text:"Module: Lessons & Seitennavigation"},{emoji:"🏅",text:"Achievements: Deine Badge-Sammlung"},{emoji:"👥",text:"Team: Deine Ansprechpartner bei Fragen"}]}],o=ne(()=>r[s.value]),a=ne(()=>s.value===0),l=ne(()=>s.value===Mg-1),c=()=>{l.value||s.value++},u=()=>{a.value||s.value--},h=g=>{s.value=g},d=()=>{n.commit("user/markIntroSeen"),i("close")},f=()=>{d()};return(g,m)=>(F(),yt(Fp,{to:"body"},[Xe(qu,{name:"modal"},{default:ri(()=>[S("div",{class:"modal-backdrop",onClick:_0(f,["self"])},[S("div",Jb,[S("div",Qb,[S("div",eE,[(F(),B(Re,null,gt(Mg,p=>S("span",{key:p,class:vt(["dot",{active:p-1===s.value}]),onClick:_=>h(p-1)},null,10,tE)),64))]),S("button",{class:"modal-close",onClick:f,"aria-label":"Überspringen"},"×")]),S("div",nE,[Xe(qu,{name:"slide",mode:"out-in"},{default:ri(()=>[(F(),B("div",{key:s.value,class:"slide-content"},[S("div",iE,X(o.value.icon),1),S("h2",sE,X(o.value.title),1),S("p",rE,X(o.value.description),1),S("ul",oE,[(F(!0),B(Re,null,gt(o.value.features,(p,_)=>(F(),B("li",{key:_,class:"feature-item"},[S("span",aE,X(p.emoji),1),S("span",lE,X(p.text),1)]))),128))])]))]),_:1})]),S("div",cE,[a.value?Ye("",!0):(F(),B("button",{key:0,class:"btn-secondary",onClick:u}," ← Zurück ")),m[0]||(m[0]=S("div",{class:"spacer"},null,-1)),l.value?(F(),B("button",{key:2,class:"btn-primary",onClick:d}," Jetzt starten! 🚀 ")):(F(),B("button",{key:1,class:"btn-primary",onClick:c}," Weiter → "))])])])]),_:1})]))}},hE=wt(uE,[["__scopeId","data-v-f910cf83"]]),dE={class:"layout"},fE={class:"layout__main"},gE={class:"layout__content"},mE={__name:"AppLayout",props:{title:{type:[String,Object],default:"Onboarding Academy"},userName:{type:[String,Object],default:"Nachwuchskraft"}},setup(t){const e=t,n=ln(),i=wc(),s=Tt(!1),r=ne(()=>n.getters["user/hasSeenIntro"]);gc(()=>{!r.value&&i.name==="dashboard"&&setTimeout(()=>{s.value=!0},500)});const o=()=>{s.value=!0},a=()=>{s.value=!1};return(l,c)=>(F(),B("div",dE,[Xe(Ib,{class:"layout__sidebar"}),S("div",fE,[Xe(Vb,{title:e.title,"user-name":e.userName,onOpenTutorial:o},null,8,["title","user-name"]),S("main",gE,[xv(l.$slots,"default",{},void 0)])]),Xe(Yb),s.value?(F(),yt(hE,{key:0,onClose:a})):Ye("",!0)]))}},pE=wt(mE,[["__scopeId","data-v-86d38b45"]]),_E={__name:"App",setup(t){const e=wc(),n=ln(),i=ne(()=>{if(e.name==="dashboard")return"Dashboard";if(e.name==="team")return"Team";if(e.name==="module"){const r=Ec(e.params.id);return r?r.title:"Module"}return"Onboarding Academy"}),s=ne(()=>n.state.user.name);return(r,o)=>{const a=Hr("router-view");return F(),yt(pE,{title:i.value,"user-name":s.value},{default:ri(()=>[Xe(a)]),_:1},8,["title","user-name"])}}},yE={class:"progress"},vE={key:0,class:"progress__label"},wE={class:"progress__track"},SE={class:"progress__percent"},bE={__name:"ProgressBar",props:{value:{type:Number,default:0},label:{type:String,default:""}},setup(t){const e=t;return(n,i)=>(F(),B("div",yE,[e.label?(F(),B("div",vE,X(e.label),1)):Ye("",!0),S("div",wE,[S("div",{class:"progress__value",style:Ir({width:`${Math.min(e.value,100)}%`})},null,4)]),S("span",SE,X(Math.round(e.value))+"%",1)]))}},ad=wt(bE,[["__scopeId","data-v-4c153e21"]]),EE={class:"module-card__icon"},ME={class:"module-card__title"},xE={class:"module-card__description"},CE={key:0,class:"module-card__badge"},kE=["src","alt"],PE={class:"module-card__progress","aria-label":"Module progress"},TE={class:"module-card__percentage"},RE={__name:"ModuleCard",props:{module:{type:Object,required:!0},progress:{type:Number,default:0}},setup(t){const e=t,n=ln(),i=ne(()=>Math.round(e.progress)),s=ne(()=>i.value===100),r=ne(()=>od(e.module.id)),o=ne(()=>r.value?n.getters["badges/hasBadge"](r.value.id):!1);return(a,l)=>{const c=Hr("RouterLink");return F(),yt(c,{to:{name:"module",params:{id:e.module.id}},class:"module-card"},{default:ri(()=>[S("div",EE,X(e.module.icon),1),S("h3",ME,X(e.module.title),1),S("p",xE,X(e.module.description),1),s.value&&o.value&&r.value?(F(),B("div",CE,[S("img",{src:r.value.image,alt:r.value.name,class:"module-card__badge-image"},null,8,kE)])):Ye("",!0),S("div",PE,[Xe(ad,{value:i.value},null,8,["value"]),S("span",TE,X(i.value)+"%",1)])]),_:1},8,["to"])}}},AE=wt(RE,[["__scopeId","data-v-da462d03"]]),IE={class:"badge-mini-showcase__label"},LE={class:"badge-count"},OE={key:0,class:"badge-mini-showcase__badges"},FE=["title"],NE=["src","alt"],DE={key:0,class:"badge-mini badge-mini--more"},GE={class:"badge-mini__plus"},zE={key:1,class:"badge-mini-showcase__empty"},BE={__name:"BadgeMiniShowcase",setup(t){const e=ln(),n=rd(),i=ne(()=>e.getters["badges/earnedBadges"]),s=ne(()=>n.filter(l=>i.value.includes(l.id)).slice(0,6)),r=ne(()=>i.value.length),o=ne(()=>n.length),a=ne(()=>r.value>6);return(l,c)=>{const u=Hr("RouterLink");return F(),yt(u,{to:"/achievements",class:"badge-mini-showcase"},{default:ri(()=>[S("div",IE,[c[0]||(c[0]=S("span",{class:"badge-icon"},"🏆",-1)),S("span",LE,X(r.value)+"/"+X(o.value),1)]),s.value.length>0?(F(),B("div",OE,[(F(!0),B(Re,null,gt(s.value,h=>(F(),B("div",{key:h.id,class:"badge-mini",title:h.name},[S("img",{src:h.image,alt:h.name,class:"badge-mini__image"},null,8,NE)],8,FE))),128)),a.value?(F(),B("div",DE,[S("span",GE,"+"+X(r.value-6),1)])):Ye("",!0)])):(F(),B("div",zE,[...c[1]||(c[1]=[S("span",{class:"empty-text"},"Noch keine Abzeichen",-1)])]))]),_:1})}}},jE=wt(BE,[["__scopeId","data-v-526b9be7"]]),WE={class:"dashboard"},VE={class:"card dashboard__hero"},UE={class:"eyebrow"},KE={class:"dashboard__progress"},$E={class:"dashboard__actions"},qE={class:"card dashboard__tracks"},HE={class:"dashboard__tracks-header"},ZE={class:"dashboard__track-grid"},XE={class:"track-card__header"},YE={class:"eyebrow"},JE={key:0,class:"track-card__badge"},QE={class:"muted"},eM=["disabled","onClick"],tM={key:0,class:"card dashboard__next"},nM={class:"muted"},iM={class:"dashboard__modules"},sM={__name:"DashboardView",setup(t){const e=ln(),n=ne(()=>e.getters["progress/overallProgress"]),i=m=>e.getters["progress/moduleProgress"](m),s=ne(()=>e.getters["tracks/enabledTracks"]),r=["js-fundamentals","vue-basics","geo-basics"],o=ne(()=>r.every(m=>i(m)===100)),a=ne(()=>j0.filter(m=>m.id!=="common")),l=ne(()=>bc(s.value)),c=m=>e.getters["tracks/isTrackEnabled"](m),u=ne(()=>{for(const m of l.value)for(const p of m.lessons)if(!e.getters["progress/isLessonCompleted"](m.id,p.id))return{module:m,lesson:p};return null}),h=Tt(!1),d=()=>{["js-fundamentals","vue-basics","geo-basics"].forEach(p=>{const _=l.value.find(y=>y.id===p);_&&_.lessons.forEach(y=>{e.commit("progress/completeLesson",{moduleId:p,lessonId:y.id})})})},f=()=>{h.value?(e.commit("progress/resetProgress"),e.commit("quiz/resetQuizResults"),e.commit("tracks/resetTrack"),e.commit("badges/resetBadges"),Object.keys(localStorage).forEach(m=>{m.startsWith("onboarding-tasks-")&&localStorage.removeItem(m)}),h.value=!1,window.location.reload()):(h.value=!0,setTimeout(()=>{h.value=!1},3e3))},g=m=>{o.value&&e.commit("tracks/toggleTrack",m)};return Tn(()=>Eg().map(p=>({id:p.id,progress:i(p.id)})),m=>{m.forEach(({id:p,progress:_})=>{if(_===100){const y=od(p);y&&!e.getters["badges/hasBadge"](y.id)&&e.commit("badges/earnBadge",y.id)}})},{deep:!0,immediate:!0}),Tn(()=>Eg().map(m=>i(m.id)),()=>{["masterportal","polar"].forEach(m=>{const p=Xr[`${m}-track`];p&&p.requiredModules&&p.requiredModules.every(y=>i(y)===100)&&!e.getters["badges/hasBadge"](p.id)&&e.commit("badges/earnBadge",p.id)})},{deep:!0,immediate:!0}),(m,p)=>{const _=Hr("RouterLink");return F(),B("div",WE,[S("section",VE,[S("div",null,[S("p",UE,"Hi, "+X(Ci(e).getters["user/name"]||Ci(e).state.user.name)+" 👋",1),p[0]||(p[0]=S("h1",null,"Willkommen in der Onboarding Academy",-1)),p[1]||(p[1]=S("p",{class:"muted"}," Verfolge deinen Fortschritt in JavaScript, Vue und Geo-Entwicklungsthemen. Schließe die Grundlagenmodule ab, wähle eine Spezialisierung und arbeite dich zum Abschlussprojekt vor. ",-1))]),S("div",KE,[Xe(ad,{label:"Gesamtfortschritt",value:n.value},null,8,["value"]),Xe(jE),S("div",$E,[S("button",{onClick:d,class:"debug-btn",title:"Debug: Alle Grundlagenmodule abschließen"}," 🚀 Springe zur Spezialisierung "),S("button",{onClick:f,class:vt(["reset-btn",{"reset-btn--confirm":h.value}])},X(h.value?"Klicke erneut zum Bestätigen":"Fortschritt zurücksetzen"),3)])])]),S("section",qE,[S("div",HE,[p[2]||(p[2]=S("div",null,[S("p",{class:"eyebrow"},"Wähle deine Spezialisierungen"),S("h3",null,"Schalte Tracks nach Geo-Grundlagen frei"),S("p",{class:"muted"}," Schließe die Geo-Grundlagen ab, um Spezialisierungs-Tracks freizuschalten. Du kannst beide Tracks aktivieren und parallel oder nacheinander bearbeiten. ")],-1)),S("div",{class:vt(["dashboard__track-status",{"dashboard__track-status--ready":o.value}])},X(o.value?"Tracks freigeschaltet":"Schließe alle Grundlagenmodule ab zum Freischalten"),3)]),S("div",ZE,[(F(!0),B(Re,null,gt(a.value,y=>(F(),B("div",{key:y.id,class:vt(["track-card",{"track-card--selected":c(y.id),"track-card--locked":!o.value}])},[S("div",XE,[S("div",null,[S("p",YE,X(y.title),1),S("h4",null,X(y.description),1)]),c(y.id)?(F(),B("span",JE,"Aktiv")):Ye("",!0)]),S("p",QE,X(y.modules.length)+" Module",1),S("button",{class:vt(["track-card__button",{"track-card__button--active":c(y.id)}]),disabled:!o.value,onClick:w=>g(y.id)},X(c(y.id)?"Deaktivieren":o.value?"Track aktivieren":"Gesperrt"),11,eM)],2))),128))])]),u.value?(F(),B("section",tM,[S("div",null,[p[3]||(p[3]=S("p",{class:"eyebrow"},"Nächste empfohlene Lektion",-1)),S("h3",null,X(u.value.module.title),1),S("p",nM,X(u.value.lesson.title),1)]),Xe(_,{class:"next-btn",to:{name:"module",params:{id:u.value.module.id},query:{lesson:u.value.lesson.id}}},{default:ri(()=>[...p[4]||(p[4]=[On(" Weiter → ",-1)])]),_:1},8,["to"])])):Ye("",!0),S("section",iM,[(F(!0),B(Re,null,gt(l.value,y=>(F(),yt(AE,{key:y.id,module:y,progress:i(y.id)},null,8,["module","progress"]))),128))])])}}},rM=wt(sM,[["__scopeId","data-v-ab365ec9"]]),oM=`# Capstone-Projekt: WFS Feature-Distanz-Messtool

## Projektübersicht

Gratulation! Du hast alle Grundlagen gemeistert. Jetzt ist es Zeit, dein Wissen in einem **echten Masterportal-Tool** anzuwenden.

**Deine Aufgabe:** Entwickle ein Tool für das Masterportal, das die **Distanz zwischen zwei WFS-Features** misst und visualisiert.

## Warum dieses Projekt?

Als Geo-Entwickler wirst du häufig Tools bauen, die:
- Mit der Karte interagieren (Feature-Selektion)
- Geodaten verarbeiten (Distanz-Berechnung)
- Ergebnisse visualisieren (Linien, Labels)
- Eine benutzerfreundliche UI bieten

Dieses Projekt vereint all diese Skills!

## Funktionale Anforderungen

### Must-Have Features

**1. Feature-Selektion**
- User kann auf WFS-Features auf der Karte klicken
- Zwei Features müssen ausgewählt werden können
- Bereits ausgewählte Features werden visuell hervorgehoben (z.B. andersfarbiger Marker)

**2. Distanz-Berechnung**
- Berechne die Luftlinie zwischen beiden Features in Metern
- Nutze OpenLayers \`getDistance()\` Funktion
- Runde auf 2 Nachkommastellen

**3. Visualisierung**
- Zeichne eine Linie zwischen den beiden Features
- Zeige die Distanz in einem Label auf der Karte
- Optional: Mid-Point-Marker mit Distanz-Text

**4. User Interface**
- Tool-Fenster mit:
  - Anleitung: "Klicke auf zwei Features..."
  - Anzeige der ausgewählten Features (Name/ID)
  - Berechnete Distanz prominent angezeigt
  - "Zurücksetzen"-Button zum Löschen der Auswahl
  - "Schließen"-Button

**5. Cleanup**
- Beim Schließen des Tools: Alle Marker/Linien entfernen
- Bei "Zurücksetzen": Neue Auswahl möglich

### Nice-to-Have Features

**Optional, wenn Zeit bleibt:**

- **Multiple Distanzen:** Mehr als 2 Features, zeige alle Paar-Distanzen
- **Route statt Luftlinie:** Nutze Routing-Service für echte Wegstrecke
- **Export:** Ergebnisse als CSV oder JSON exportieren
- **Historien-Log:** Liste der letzten Messungen
- **Feature-Suche:** Suche Features per Name statt Klick

## Technische Anforderungen

### Architektur

Dein Tool besteht aus:

\`\`\`
src/modules/tools/featureDistance/
├── components/
│   └── FeatureDistance.vue   # Vue-Komponente mit Template
├── store/
│   ├── index.js              # Store-Konfiguration
│   ├── state.js              # State-Definition
│   ├── mutations.js          # State-Änderungen
│   ├── actions.js            # Business-Logik
│   └── getters.js            # Computed Properties
└── tests/
    └── unit/
        └── store/            # Unit-Tests für Store
\`\`\`

### Technologie-Stack

- **Vue 3:** Komponentenbasierte UI mit Options API
- **Vuex 4:** State Management für Tool-State
- **OpenLayers:** Karten-Interaktion, Geometrie-Operationen
- **i18next:** Mehrsprachigkeit (über \`$t()\`)

### WFS-Layer verwenden

Nutze einen verfügbaren WFS-Layer aus der **services.json** deiner Portal-Config.

**Beispiel-Dienste im Masterportal:**
- Deutsche Städte (Natural Earth via Geoserver)
- Hamburg Schulen (wenn in services.json definiert)
- Oder ein eigener Test-WFS

**Config-Beispiel:**

\`\`\`json
{
  "id": "wfs_cities",
  "name": "Deutsche Städte",
  "url": "https://example.com/geoserver/wfs",
  "typ": "WFS",
  "featureType": "cities",
  "version": "2.0.0"
}
\`\`\`

## Abnahmekriterien

### Funktionalität (60%)

✅ Tool kann über Menü aktiviert werden  
✅ Click auf WFS-Feature selektiert es  
✅ Zwei Features können ausgewählt werden  
✅ Distanz wird korrekt berechnet (in Metern)  
✅ Verbindungslinie wird auf Karte gezeichnet  
✅ UI zeigt ausgewählte Features und Distanz  
✅ "Zurücksetzen" löscht Auswahl und Visualisierung  
✅ Schließen des Tools entfernt alle Elemente von der Karte  

### Code-Qualität (25%)

✅ Code folgt ESLint-Regeln des Projekts  
✅ Sinnvolle Variablen-/Funktionsnamen  
✅ Kommentare an wichtigen Stellen  
✅ Keine Console-Errors im Browser  
✅ Model und View klar getrennt  
✅ Events statt direkter Funktionsaufrufe  

### Testing (15%)

✅ Mindestens 3 Unit-Tests geschrieben  
✅ Tests decken wichtigste Funktionen ab:
  - Feature-Selektion
  - Distanz-Berechnung
  - Cleanup beim Schließen  

**Test-Framework:** Mocha + Chai (bereits im Masterportal vorhanden)

**Test-Datei:**
\`\`\`
test/unittests/modules/tools/featureDistance/model.test.js
\`\`\`

## Zeitrahmen

**Geschätzte Dauer:** 16-24 Stunden (2-3 Arbeitstage)

**Aufteilung:**
- **Setup & Architektur:** 2-3h
- **Feature-Selektion implementieren:** 4-5h
- **Distanz-Berechnung & Visualisierung:** 4-5h
- **UI-Entwicklung:** 3-4h
- **Testing:** 2-3h
- **Debugging & Polishing:** 2-3h

## Schritt-für-Schritt-Anleitung

### Phase 1: Setup (1h)

1. **Tool-Ordner erstellen**
   \`\`\`bash
   cd masterportal/src/modules/tools
   mkdir -p featureDistance/components
   mkdir -p featureDistance/store
   mkdir -p featureDistance/tests/unit/store
   \`\`\`

2. **Grundstruktur anlegen**
   \`\`\`bash
   touch featureDistance/components/FeatureDistance.vue
   touch featureDistance/store/index.js
   touch featureDistance/store/state.js
   touch featureDistance/store/mutations.js
   touch featureDistance/store/actions.js
   touch featureDistance/store/getters.js
   \`\`\`

3. **In config.json aktivieren**
   \`\`\`json
   {
     "Portalconfig": {
       "menu": {
         "tools": {
           "children": {
             "featureDistance": {
               "name": "translate#additional:modules.tools.featureDistance.title",
               "icon": "bi-rulers"
             }
           }
         }
       }
     }
   }
   \`\`\`

4. **i18n Übersetzungen hinzufügen**
   \`\`\`json
   // locales/de/additional.json
   {
     "modules": {
       "tools": {
         "featureDistance": {
           "title": "Feature-Distanz",
           "instruction": "Klicke auf zwei Features, um die Distanz zu berechnen",
           "feature1": "Feature 1:",
           "feature2": "Feature 2:",
           "distance": "Distanz:",
           "reset": "Zurücksetzen",
           "noFeature": "Kein Feature"
         }
       }
     }
   }
   \`\`\`

### Phase 2: Vuex Store-Grundstruktur (2h)

**store/state.js:**

\`\`\`javascript
const state = {
    // Tool ist aktiv oder nicht
    active: false,
    
    // Die beiden ausgewählten Features
    selectedFeatures: [],
    
    // Berechnete Distanz in Metern
    distance: null,
    
    // OpenLayers Layer für Visualisierung
    vectorLayer: null,
    
    // Click-Listener-Referenz
    clickListener: null
};

export default state;
\`\`\`

**store/mutations.js:**

\`\`\`javascript
export default {
    setActive(state, active) {
        state.active = active;
    },
    
    addSelectedFeature(state, feature) {
        if (state.selectedFeatures.length < 2) {
            state.selectedFeatures.push(feature);
        }
    },
    
    clearSelection(state) {
        state.selectedFeatures = [];
        state.distance = null;
    },
    
    setDistance(state, distance) {
        state.distance = distance;
    },
    
    setVectorLayer(state, layer) {
        state.vectorLayer = layer;
    },
    
    setClickListener(state, listener) {
        state.clickListener = listener;
    }
};
\`\`\`

**store/actions.js:**

\`\`\`javascript
import {getDistance} from "ol/sphere";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";
import {Style, Stroke, Fill, Text} from "ol/style";

export default {
    /**
     * Aktiviert das Tool
     */
    activate({commit, dispatch, rootGetters}) {
        commit("setActive", true);
        
        // Vector Layer für Visualisierung erstellen
        const layer = new VectorLayer({
            id: "featureDistanceLayer",
            source: new VectorSource(),
            alwaysOnTop: true,
            style: new Style({
                stroke: new Stroke({
                    color: "#FF0000",
                    width: 2
                })
            })
        });
        
        const map = rootGetters["Maps/getMap"]("2D");
        map.addLayer(layer);
        commit("setVectorLayer", layer);
        
        // Click-Listener registrieren
        dispatch("registerClickListener");
    },
    
    /**
     * Deaktiviert das Tool und räumt auf
     */
    deactivate({state, commit, rootGetters}) {
        commit("setActive", false);
        
        // Layer entfernen
        if (state.vectorLayer) {
            const map = rootGetters["Maps/getMap"]("2D");
            map.removeLayer(state.vectorLayer);
            commit("setVectorLayer", null);
        }
        
        // Click-Listener entfernen
        if (state.clickListener) {
            const map = rootGetters["Maps/getMap"]("2D");
            map.un("singleclick", state.clickListener);
            commit("setClickListener", null);
        }
        
        commit("clearSelection");
    },
    
    /**
     * Registriert Klick-Listener auf der Karte
     */
    registerClickListener({state, commit, dispatch, rootGetters}) {
        const map = rootGetters["Maps/getMap"]("2D");
        
        const listener = (evt) => {
            // Feature am Klick-Punkt finden
            const features = map.getFeaturesAtPixel(evt.pixel, {
                layerFilter: (layer) => {
                    // Nur WFS-Layer
                    return layer.get("typ") === "WFS";
                }
            });
            
            if (features && features.length > 0) {
                dispatch("selectFeature", features[0]);
            }
        };
        
        map.on("singleclick", listener);
        commit("setClickListener", listener);
    },
    
    /**
     * Selektiert ein Feature
     */
    selectFeature({state, commit, dispatch}, feature) {
        if (state.selectedFeatures.length < 2) {
            commit("addSelectedFeature", feature);
            
            // Wenn 2 Features ausgewählt: Distanz berechnen
            if (state.selectedFeatures.length === 2) {
                dispatch("calculateDistance");
            }
        }
    },
    
    /**
     * Berechnet Distanz und zeichnet Linie
     */
    calculateDistance({state, commit}) {
        const [feature1, feature2] = state.selectedFeatures;
        
        // Koordinaten extrahieren (Feature-Center)
        const geom1 = feature1.getGeometry();
        const geom2 = feature2.getGeometry();
        const coord1 = geom1.getCoordinates ? geom1.getCoordinates() : geom1.getExtent().slice(0, 2);
        const coord2 = geom2.getCoordinates ? geom2.getCoordinates() : geom2.getExtent().slice(0, 2);
        
        // Distanz berechnen
        const distance = getDistance(coord1, coord2);
        commit("setDistance", Math.round(distance * 100) / 100);  // Auf 2 Nachkommastellen
        
        // Linie zeichnen
        const line = new Feature({
            geometry: new LineString([coord1, coord2])
        });
        
        // Distanz-Label
        const midpoint = [
            (coord1[0] + coord2[0]) / 2,
            (coord1[1] + coord2[1]) / 2
        ];
        
        const label = new Feature({
            geometry: new Point(midpoint)
        });
        
        label.setStyle(new Style({
            text: new Text({
                text: \`\${distance.toFixed(2)} m\`,
                font: "bold 14px Arial",
                fill: new Fill({color: "#000"}),
                stroke: new Stroke({color: "#FFF", width: 3}),
                offsetY: -10
            })
        }));
        
        // Zu Layer hinzufügen
        state.vectorLayer.getSource().clear();
        state.vectorLayer.getSource().addFeatures([line, label]);
    },
    
    /**
     * Setzt Auswahl zurück
     */
    reset({state, commit}) {
        commit("clearSelection");
        
        if (state.vectorLayer) {
            state.vectorLayer.getSource().clear();
        }
    }
};
\`\`\`

**store/getters.js:**

\`\`\`javascript
export default {
    isActive: (state) => state.active,
    
    hasFirstFeature: (state) => state.selectedFeatures.length >= 1,
    hasSecondFeature: (state) => state.selectedFeatures.length >= 2,
    
    firstFeature: (state) => state.selectedFeatures[0] || null,
    secondFeature: (state) => state.selectedFeatures[1] || null,
    
    distance: (state) => state.distance,
    
    distanceFormatted: (state) => {
        if (state.distance === null) return null;
        
        if (state.distance >= 1000) {
            return \`\${(state.distance / 1000).toFixed(2)} km\`;
        }
        return \`\${state.distance.toFixed(2)} m\`;
    }
};
\`\`\`

**store/index.js:**

\`\`\`javascript
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
\`\`\`

### Phase 3: Vue-Komponente (2-3h)

**components/FeatureDistance.vue:**

\`\`\`vue
<script>
import {mapGetters, mapActions} from "vuex";
import ToolTemplate from "../../ToolTemplate.vue";

export default {
    name: "FeatureDistance",
    components: {
        ToolTemplate
    },
    computed: {
        ...mapGetters("Tools/FeatureDistance", [
            "isActive",
            "hasFirstFeature",
            "hasSecondFeature",
            "firstFeature",
            "secondFeature",
            "distanceFormatted"
        ])
    },
    methods: {
        ...mapActions("Tools/FeatureDistance", [
            "reset"
        ]),
        
        close() {
            this.$store.commit("Tools/FeatureDistance/setActive", false);
        },
        
        getFeatureName(feature) {
            if (!feature) return this.$t("additional:modules.tools.featureDistance.noFeature");
            
            // Versuche verschiedene Properties für Namen
            return feature.get("name") 
                || feature.get("NAME") 
                || feature.get("id") 
                || feature.getId() 
                || "Unbekannt";
        }
    }
};
<\/script>

<template>
    <ToolTemplate
        :title="$t('additional:modules.tools.featureDistance.title')"
        :icon="'bi-rulers'"
        @close="close"
    >
        <div class="feature-distance-tool">
            <!-- Anleitung -->
            <p class="instruction">
                {{ $t('additional:modules.tools.featureDistance.instruction') }}
            </p>
            
            <!-- Feature 1 -->
            <div class="feature-info">
                <strong>{{ $t('additional:modules.tools.featureDistance.feature1') }}</strong>
                <span :class="{'selected': hasFirstFeature, 'pending': !hasFirstFeature}">
                    {{ getFeatureName(firstFeature) }}
                </span>
            </div>
            
            <!-- Feature 2 -->
            <div class="feature-info">
                <strong>{{ $t('additional:modules.tools.featureDistance.feature2') }}</strong>
                <span :class="{'selected': hasSecondFeature, 'pending': !hasSecondFeature}">
                    {{ getFeatureName(secondFeature) }}
                </span>
            </div>
            
            <!-- Distanz-Anzeige -->
            <div 
                v-if="distanceFormatted" 
                class="distance-result"
            >
                <strong>{{ $t('additional:modules.tools.featureDistance.distance') }}</strong>
                <span class="distance-value">{{ distanceFormatted }}</span>
            </div>
            
            <!-- Aktionen -->
            <div class="actions">
                <button 
                    class="btn btn-secondary"
                    @click="reset"
                    :disabled="!hasFirstFeature"
                >
                    {{ $t('additional:modules.tools.featureDistance.reset') }}
                </button>
            </div>
        </div>
    </ToolTemplate>
</template>

<style lang="scss" scoped>
.feature-distance-tool {
    padding: 1rem;
    
    .instruction {
        color: #666;
        font-style: italic;
        margin-bottom: 1rem;
    }
    
    .feature-info {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        background: #f5f5f5;
        border-radius: 4px;
        
        span.selected {
            color: #28a745;
            font-weight: bold;
        }
        
        span.pending {
            color: #999;
            font-style: italic;
        }
    }
    
    .distance-result {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin: 1rem 0;
        background: #e3f2fd;
        border-left: 4px solid #2196F3;
        border-radius: 4px;
        
        .distance-value {
            font-size: 1.25rem;
            font-weight: bold;
            color: #1976D2;
        }
    }
    
    .actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
    }
}
</style>


    clearSelection: function () {
        this.set("selectedFeatures", []);
        this.set("distance", null);
        // TODO: Visualisierung entfernen
    }
});

export default FeatureDistanceModel;
\`\`\`

### Phase 3: Feature-Selektion (4h)

Implementiere:
- Map-Click-Event-Listener
- Feature-Detection unter Mauszeiger
- Speichern in \`selectedFeatures\` Array
- Maximal 2 Features

### Phase 4: Distanz-Berechnung (3h)

Implementiere:
- \`calculateDistance()\` Methode
- OpenLayers \`getDistance()\` nutzen
- Koordinaten aus Feature-Geometrien extrahieren

### Phase 5: Visualisierung (4h)

Implementiere:
- Vector-Layer für Linie erstellen
- LineString-Feature zeichnen
- Style (Farbe, Breite)
- Optional: Text-Label mit Distanz

### Phase 6: UI-Entwicklung (3h)

**template.html & view.js:**
- Tool-Fenster mit Backbone-Template
- Event-Listener für Buttons
- Dynamisches Update bei Model-Änderungen

### Phase 7: Testing (3h)

**test/unittests/modules/tools/featureDistance/model.test.js:**

\`\`\`javascript
import FeatureDistanceModel from "@modules/tools/featureDistance/model";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";

describe("tools/featureDistance/model", function () {
    let model;

    beforeEach(function () {
        model = new FeatureDistanceModel();
    });

    it("should start with empty selection", function () {
        expect(model.get("selectedFeatures")).to.be.an("array").that.is.empty;
    });

    it("should calculate distance between two points", function () {
        const feat1 = new Feature({geometry: new Point([0, 0])});
        const feat2 = new Feature({geometry: new Point([100, 0])});
        
        model.set("selectedFeatures", [feat1, feat2]);
        model.calculateDistance();
        
        expect(model.get("distance")).to.be.closeTo(100, 0.01);
    });

    // TODO: Weitere Tests
});
\`\`\`

## Abgabe

### Was du abgibst:

1. **Code:**
   - Komplettes \`featureDistance/\` Verzeichnis
   - Registrierung in \`tools.js\`
   - Test-Datei(en)

2. **Dokumentation:**
   - README.md im Tool-Ordner mit:
     - Kurzbeschreibung
     - Verwendung
     - Bekannte Limitierungen
     - Mögliche Erweiterungen

3. **Demo:**
   - Screen-Recording (2-3 Min) oder
   - Live-Demo im Team-Meeting

4. **Reflection (optional):**
   - Was war schwierig?
   - Was hast du gelernt?
   - Was würdest du anders machen?

## Bewertung

**Bestanden, wenn:**
- Alle Must-Have Features funktionieren
- Mindestens 3 Tests vorhanden und grün
- Code ist sauber und dokumentiert
- Demo zeigt funktionierende Anwendung

**Bonus-Punkte für:**
- Nice-to-Have Features implementiert
- Besonders sauberer, idiomatischer Code
- Umfangreiche Test-Abdeckung
- Herausragende UI/UX

## Hilfe & Ressourcen

**Bei Problemen:**

1. **Schaue dir bestehende Tools an:**
   - \`src/modules/tools/measure/\` - ähnliche Funktionalität
   - \`src/modules/tools/draw/\` - Visualisierung
   - \`src/modules/tools/coordToolkit/\` - einfaches Beispiel

2. **Dokumentation:**
   - Masterportal: https://www.masterportal.org/dokumentation
   - OpenLayers API: https://openlayers.org/en/latest/apidoc/
   - Backbone.js: https://backbonejs.org/

3. **Team fragen:**
   - Daily Standup: 11:30 Uhr
   - Dein Mentor steht zur Verfügung
   - Code-Review mit Senior-Dev vereinbaren

**FAQ-Sektion dieser Academy nutzen!**

## Los geht's!

Du hast alles gelernt, was du brauchst. Viel Erfolg bei deinem ersten großen Masterportal-Tool! 🚀

**Tipp:** Starte mit dem Minimum Viable Product (MVP) - erst wenn das funktioniert, baue Nice-to-Haves.

Bei Fragen: Nicht zögern, das Team zu fragen. Viel Erfolg! 🎉

`,aM=`# Entwicklungsumgebung einrichten

## Einführung

Als neue Nachwuchskraft im Team wirst du mit verschiedenen Tools und Technologien arbeiten. Dieser Guide führt dich durch die komplette Einrichtung deiner Entwicklungsumgebung - vom ersten Git-Clone bis zum erfolgreichen Build.

## Übersicht: Was wirst du einrichten?

- **Git:** Versionskontrolle und Zusammenarbeit
- **IDE:** VSCode oder IntelliJ für Code-Editing
- **Node.js & npm:** JavaScript-Runtime und Paketmanager
- **Masterportal:** Das Hauptprojekt
- **Browser DevTools:** Debugging-Werkzeuge

## Schritt 1: Git installieren und konfigurieren

### Git installieren

**Windows:**
- Download von https://git-scm.com/download/win
- Installer ausführen, Standard-Optionen akzeptieren

**macOS:**
\`\`\`bash
brew install git
\`\`\`

**Linux:**
\`\`\`bash
sudo apt-get install git  # Debian/Ubuntu
sudo yum install git      # RedHat/CentOS
\`\`\`

### Git konfigurieren

\`\`\`bash
# Deinen Namen setzen
git config --global user.name "Dein Name"

# Deine E-Mail setzen
git config --global user.email "deine.email@example.com"

# Standard-Editor festlegen (optional)
git config --global core.editor "code --wait"  # VSCode

# Prüfen
git config --list
\`\`\`

### SSH-Key für Bitbucket einrichten

Für den Zugriff auf das Masterportal-Repository benötigst du einen SSH-Key:

\`\`\`bash
# SSH-Key generieren
ssh-keygen -t ed25519 -C "deine.email@example.com"

# Wenn ed25519 nicht unterstützt wird:
ssh-keygen -t rsa -b 4096 -C "deine.email@example.com"

# Key-Pfad: Standard akzeptieren (~/.ssh/id_ed25519)
# Passphrase: Optional, aber empfohlen
\`\`\`

**Public Key zu Bitbucket hinzufügen:**

1. Key anzeigen:
   \`\`\`bash
   cat ~/.ssh/id_ed25519.pub
   \`\`\`

2. Kopiere den kompletten Output

3. Bitbucket öffnen: https://bitbucket.org/account/settings/ssh-keys/

4. "Add key" klicken und Key einfügen

**Verbindung testen:**

\`\`\`bash
ssh -T git@bitbucket.org
\`\`\`

Erwartete Ausgabe: \`authenticated via ssh key\`

## Schritt 2: Node.js & npm installieren

### Erforderliche Versionen prüfen

Die exakten Versionen stehen in der \`package.json\` des Masterportals unter \`engines\`. Typischerweise:

- **Node.js:** v18.x oder v20.x
- **npm:** v9.x oder v10.x

### Node.js installieren

**Option 1: Node Version Manager (NVM) - Empfohlen**

NVM ermöglicht das Wechseln zwischen Node-Versionen:

**Windows (nvm-windows):**
- Download: https://github.com/coreybutler/nvm-windows/releases
- Installieren, dann:

\`\`\`bash
nvm install 20
nvm use 20
\`\`\`

**macOS/Linux:**

\`\`\`bash
# NVM installieren
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Shell neu starten, dann:
nvm install 20
nvm use 20
\`\`\`

**Option 2: Direkt von nodejs.org**

- Download: https://nodejs.org/
- LTS-Version wählen
- Installer ausführen

### Versionen prüfen

\`\`\`bash
node --version  # Sollte v20.x.x anzeigen
npm --version   # Sollte v10.x.x anzeigen
\`\`\`

## Schritt 3: IDE einrichten

### Option A: Visual Studio Code (Empfohlen für Einsteiger)

**Installation:**
- Download: https://code.visualstudio.com/
- Installieren

**Empfohlene Extensions:**

Öffne VSCode und installiere (\`Strg+Shift+X\`):

1. **ESLint** (\`dbaeumer.vscode-eslint\`)
   - Zeigt Linting-Fehler direkt im Editor

2. **Prettier** (\`esbenp.prettier-vscode\`)
   - Code-Formatierung

3. **Vetur** (\`octref.vetur\`)
   - Vue.js Syntax-Highlighting & Intellisense

4. **GitLens** (\`eamodio.gitlens\`)
   - Git-Blame und History im Editor

5. **Path Intellisense** (\`christian-kohler.path-intellisense\`)
   - Auto-Completion für Dateipfade

6. **Bracket Pair Colorizer** (built-in seit VSCode 1.60)
   - Farbige Klammern für bessere Übersicht

7. **JavaScript (ES6) code snippets** (\`xabikos.JavaScriptSnippets\`)
   - Schnelle Code-Snippets

8. **npm Intellisense** (\`christian-kohler.npm-intellisense\`)
   - Auto-Complete für npm-Module

**VSCode Einstellungen (\`settings.json\`):**

\`\`\`json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.eol": "\\n",
  "git.autofetch": true
}
\`\`\`

**Workspace-Settings für Masterportal:**

Im Masterportal-Ordner \`.vscode/settings.json\` erstellen:

\`\`\`json
{
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/build": true
  },
  "files.exclude": {
    "**/.git": true
  }
}
\`\`\`

### Option B: IntelliJ IDEA / WebStorm

**Installation:**
- Download: https://www.jetbrains.com/webstorm/
- Oder IntelliJ IDEA Ultimate mit JavaScript-Plugin

**Plugins:**
- Vue.js
- ESLint
- Prettier
- GitToolBox

**Einstellungen:**
- \`Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint\` aktivieren
- \`Preferences > Languages & Frameworks > JavaScript > Prettier\` aktivieren
- \`On Save Actions\`: "Reformat code" und "Optimize imports" aktivieren

### Team absprechen!

⚠️ **Wichtig:** Sprich mit deinem Team ab, welche Extensions und Settings sie verwenden. So bleibt der Code-Style konsistent!

## Schritt 4: Masterportal klonen und einrichten

### Repository klonen

\`\`\`bash
# In deinen Workspace-Ordner navigieren
cd ~/Projekte  # oder wo du deine Projekte speicherst

# Masterportal klonen
git clone git@bitbucket.org:geowerkstatt-hamburg/masterportal.git

# In den Ordner wechseln
cd masterportal
\`\`\`

### Branch wechseln

Das Team arbeitet üblicherweise auf dem \`dev\`-Branch:

\`\`\`bash
# Auf dev-Branch wechseln
git checkout dev

# Aktuellste Version holen
git pull origin dev
\`\`\`

### Dependencies installieren

**VPN-Problematik beachten!**

Je nach PC-Konfiguration:

- **Variante 1:** VPN **an** lassen während \`npm install\`
- **Variante 2:** VPN **aus** schalten während \`npm install\`

Wenn es hängt, andere Variante probieren!

\`\`\`bash
npm install
\`\`\`

**Dauer:** 2-5 Minuten (beim ersten Mal)

**Häufige Fehler:**

**❌ \`ERR! network timeout\`**
→ VPN-Status wechseln (an/aus)

**❌ \`EACCES: permission denied\`**
→ npm mit falschen Rechten installiert, neu installieren

**❌ \`gyp ERR! node-gyp -v\`**
→ Node-Version falsch, prüfe \`node --version\`

### Projekt-Struktur verstehen

\`\`\`bash
# Hauptordner anschauen
ls -la
\`\`\`

Wichtige Ordner:

\`\`\`
masterportal/
├── src/                  # Quellcode
│   ├── modules/         # Tools, Controls, etc.
│   ├── core/            # Kernfunktionalität
│   └── plugins/         # Backbone-Plugins
├── portal/              # Portal-Konfigurationen
│   ├── basic/           # Beispiel-Portal
│   └── master/          # Weiteres Beispiel
├── test/                # Tests (Unit, E2E)
├── doc/                 # Dokumentation
├── dist/                # Build-Output (wird generiert)
├── node_modules/        # Dependencies (nach npm install)
├── package.json         # Projekt-Metadaten & Scripts
├── webpack.config.js    # Build-Konfiguration
└── .eslintrc.js         # Linting-Regeln
\`\`\`

## Schritt 5: Entwicklungsserver starten

### Dev-Server starten

\`\`\`bash
npm start
\`\`\`

**Was passiert:**
- Webpack kompiliert den Code
- Dev-Server startet auf Port 9001
- Browser öffnet automatisch (oder manuell: http://localhost:9001)
- Live-Reload: Änderungen werden automatisch neu geladen

**Erwartete Ausgabe:**

\`\`\`
Compiled successfully!

You can now view the portal in the browser.

  Local:            http://localhost:9001
  On Your Network:  http://192.168.x.x:9001
\`\`\`

### VPN-Problematik beim Browser-Zugriff

**Problem:** Seite lädt nicht, obwohl Server läuft.

**Lösungen:**

1. **VPN aus-/anschalten** und neu versuchen
2. **Andere Ports prüfen:** Ist 9001 bereits belegt?
   \`\`\`bash
   # Windows
   netstat -ano | findstr :9001
   
   # macOS/Linux
   lsof -i :9001
   \`\`\`

3. **Firewall prüfen:** Blockiert sie localhost?

4. **Manuell öffnen:** Gib URL direkt im Browser ein

5. **Browser-Cache leeren:** \`Strg+Shift+Del\`

### Portal auswählen

Nach dem Start siehst du eine Liste der verfügbaren Portale:

\`\`\`
Available portals:
- http://localhost:9001/portal/basic/
- http://localhost:9001/portal/master/
\`\`\`

Klicke auf eines, um es zu öffnen.

## Schritt 6: Wichtige npm-Befehle

Alle Befehle findest du in der \`package.json\` unter \`scripts\`:

\`\`\`bash
# Projekt-Struktur anschauen
cat package.json | grep -A 20 "scripts"
\`\`\`

**Die wichtigsten Befehle:**

| Befehl | Beschreibung |
|--------|--------------|
| \`npm start\` | Dev-Server starten (Port 9001) |
| \`npm run build\` | Production-Build erstellen |
| \`npm test\` | Alle Tests ausführen |
| \`npm run test:unit\` | Nur Unit-Tests |
| \`npm run test:e2e\` | Nur End-to-End-Tests |
| \`npm run lint\` | ESLint ausführen (Code-Qualität prüfen) |
| \`npm run lint:fix\` | ESLint-Fehler automatisch fixen |
| \`npm run dev\` | Dev-Build (ohne Server) |

**Workflow-Beispiel:**

\`\`\`bash
# 1. Feature entwickeln (Dev-Server läuft)
npm start

# 2. Code ändern, speichern → automatisch neu geladen

# 3. Linting prüfen
npm run lint

# 4. Tests ausführen
npm test

# 5. Production-Build testen
npm run build
\`\`\`

## Schritt 7: Browser DevTools einrichten

### Chrome/Edge DevTools

**Öffnen:** \`F12\` oder \`Rechtsklick > Untersuchen\`

**Wichtige Tabs:**

1. **Console:**
   - JavaScript-Fehler anzeigen
   - \`console.log()\`-Ausgaben sehen
   - Interaktiv Code ausführen

2. **Network:**
   - HTTP-Requests verfolgen (WMS, WFS, etc.)
   - Lade-Zeiten analysieren
   - Failed Requests identifizieren

3. **Sources:**
   - Breakpoints setzen
   - Step-by-step debuggen
   - Source Maps: Originaler Code sichtbar

4. **Application:**
   - LocalStorage inspizieren
   - Session Storage
   - Cookies

**Nützliche Console-Befehle für Masterportal:**

\`\`\`javascript
// Karte holen
const map = Radio.request("Map", "getMap");

// Alle Layer anzeigen
Radio.request("ModelList", "getCollection").toJSON();

// Specific Layer holen
const layer = Radio.request("ModelList", "getModelByAttributes", {
  id: "wfs_schulen"
});
\`\`\`

### Vue DevTools (für diese Academy)

Da diese Onboarding-Academy mit Vue 3 gebaut ist:

**Installation:**
- Chrome: https://chrome.google.com/webstore → "Vue.js devtools"
- Firefox: https://addons.mozilla.org → "Vue.js devtools"

**Features:**
- Vuex State inspizieren
- Component-Tree anzeigen
- Events tracken

## Schritt 8: Git-Workflow verstehen

### Branching-Strategie

Frage dein Team nach der genauen Strategie! Typisch:

- **\`main\`/\`master\`:** Produktions-Code
- **\`dev\`/\`develop\`:** Entwicklungs-Branch
- **Feature-Branches:** \`feature/mein-neues-tool\`
- **Bugfix-Branches:** \`bugfix/layer-loading-error\`

### Typischer Workflow

\`\`\`bash
# 1. Aktuellsten dev-Branch holen
git checkout dev
git pull origin dev

# 2. Feature-Branch erstellen
git checkout -b feature/mein-tool

# 3. Änderungen machen, committen
git add src/modules/tools/meinTool/
git commit -m "feat: Add distance measurement tool"

# 4. Auf Bitbucket pushen
git push origin feature/mein-tool

# 5. Pull Request erstellen (auf Bitbucket)

# 6. Nach Merge: Branch löschen
git branch -d feature/mein-tool
\`\`\`

### Commit-Message-Konventionen

Frage dein Team! Oft wird Conventional Commits verwendet:

\`\`\`
feat: Neues Feature
fix: Bugfix
docs: Dokumentation
style: Code-Formatierung (keine Logik-Änderung)
refactor: Code-Umstrukturierung
test: Tests hinzufügen/ändern
chore: Build-Prozess, Dependencies, etc.
\`\`\`

**Beispiele:**

\`\`\`bash
git commit -m "feat: Add WFS feature selection in measurement tool"
git commit -m "fix: Resolve CORS issue with external WMS services"
git commit -m "docs: Update installation guide for Windows users"
\`\`\`

## Schritt 9: Häufige Probleme & Lösungen

### Problem: \`npm install\` schlägt fehl

**Ursache:** Node/npm-Version falsch oder VPN-Probleme

**Lösung:**
\`\`\`bash
# 1. Version prüfen
node --version
npm --version

# 2. Richtige Version mit NVM installieren
nvm install 20
nvm use 20

# 3. Cache leeren
npm cache clean --force

# 4. node_modules löschen und neu installieren
rm -rf node_modules package-lock.json
npm install

# 5. VPN an/aus schalten
\`\`\`

### Problem: Dev-Server startet nicht

**Ursache:** Port bereits belegt

**Lösung:**
\`\`\`bash
# Port 9001 prüfen (Windows)
netstat -ano | findstr :9001

# Port 9001 prüfen (macOS/Linux)
lsof -i :9001

# Prozess beenden oder anderen Port nutzen
# In webpack.config.js: devServer.port ändern
\`\`\`

### Problem: Browser zeigt leere Seite

**Ursache:** JavaScript-Fehler oder falscher Pfad

**Lösung:**
1. Browser-Console öffnen (F12)
2. Fehler lesen und googeln
3. Cache leeren (Strg+Shift+Del)
4. Hard Reload (Strg+F5)

### Problem: ESLint-Fehler überall

**Ursache:** Code folgt nicht den Projekt-Standards

**Lösung:**
\`\`\`bash
# Auto-Fix versuchen
npm run lint:fix

# Einzelne Fehler manuell fixen
# ESLint-Regeln in .eslintrc.js nachschauen
\`\`\`

### Problem: Git-Push schlägt fehl

**Ursache:** SSH-Key fehlt oder Branch-Protection

**Lösung:**
\`\`\`bash
# SSH-Verbindung testen
ssh -T git@bitbucket.org

# Bei Fehlern: SSH-Key neu einrichten (siehe Schritt 1)

# Branch-Protection: Pushe auf Feature-Branch, nicht direkt auf dev
git checkout -b feature/mein-branch
git push origin feature/mein-branch
\`\`\`

## Checkliste: Setup abgeschlossen?

Prüfe, ob alles funktioniert:

✅ Git installiert und konfiguriert  
✅ SSH-Key für Bitbucket eingerichtet  
✅ Node.js & npm in richtiger Version  
✅ IDE (VSCode/IntelliJ) mit Extensions eingerichtet  
✅ Masterportal geklont  
✅ \`npm install\` erfolgreich  
✅ \`npm start\` startet Dev-Server  
✅ Portal im Browser lädt ohne Fehler  
✅ Browser DevTools verstanden  
✅ Git-Workflow verstanden  

## Nächste Schritte

Du bist jetzt bereit für:

- **Masterportal-Module:** Lerne die Architektur kennen
- **Erste Config-Änderungen:** Füge Layer hinzu
- **Tool-Entwicklung:** Programmiere eigene Features
- **Testing:** Schreibe Tests für deinen Code

## Hilfe & Ressourcen

**Bei Problemen:**

1. **Team-Chat:** Frage erfahrene Kollegen
2. **FAQ:** Schaue in die FAQ-Sektion dieser Academy
3. **Dokumentation:** https://www.masterportal.org/dokumentation
4. **Stack Overflow:** Suche nach Fehlermeldungen

**Wichtige Kontakte:**

- Tech-Lead: [siehe Team-Seite]
- Mentor: [wird dir zugeteilt]
- Daily Standups: 11:30 Uhr via Skype

Willkommen im Team! 🎉
`,lM=`## Gängige Projektionssysteme im Masterportal

Bei der Arbeit mit geografischen Daten im Masterportal wirst du regelmäßig auf diese Koordinatenreferenzsysteme stoßen:

### EPSG:25832 (ETRS89 / UTM Zone 32N)
Ein projiziertes Koordinatensystem, das häufig für deutsche geografische Daten verwendet wird. Koordinaten werden in Metern gemessen (Rechtswert, Hochwert). Das Hamburger Stadtzentrum liegt ungefähr bei \`569000, 5935000\`.

### WGS84 Decimal (EPSG:4326)
Das Standard-GPS-Koordinatensystem mit Dezimalgraden. Koordinaten reichen von -180 bis 180 für Längengrad und -90 bis 90 für Breitengrad. Angezeigt als \`Längengrad, Breitengrad\` (z.B. \`9.993, 53.551\`).

### WGS84 Lat/Lon
Dasselbe EPSG:4326-System, aber mit Koordinaten in der traditionellen \`Breitengrad, Längengrad\`-Reihenfolge angezeigt (z.B. \`53.551°N, 9.993°E\`).

## Arbeiten mit Projektionen

OpenLayers verwendet standardmäßig EPSG:3857, aber viele unserer Datensätze liegen in EPSG:25832 vor. Bei der Arbeit mit dem Masterportal solltest du immer:

- Das CRS des Datensatzes bestätigen und bei Bedarf reprojizieren
- Die \`ol/proj\`-Helfer für Konvertierungen nutzen
- Annahmen in Pull Requests dokumentieren

Probiere den interaktiven Koordinaten-Transformer unten aus, um zu sehen, wie derselbe Ort in verschiedenen Koordinatensystemen dargestellt wird. Dann schwenke die Playground-Karte und inspiziere die View-Koordinaten (EPSG:3857) über die DevTools-Console mit \`map.getView().getCenter()\`.
`,cM=`# WMS vs WFS – Zwei Standards, zwei Welten

Web Map Service (WMS) und Web Feature Service (WFS) sind zwei fundamentale OGC-Standards für Geodaten im Web. Beide liefern Kartendaten über HTTP, aber auf völlig unterschiedliche Weise.

---

## WMS – Web Map Service

**WMS liefert vorgerenderte Rasterbilder (Tiles).**

### Charakteristika

- **Ausgabe:** PNG, JPEG oder andere Bildformate
- **Daten:** Fertig gerenderte Karten als Pixel-Grafiken
- **Interaktion:** Nur visuelle Darstellung, keine Feature-Abfragen
- **Performance:** Sehr schnell, da Server das Rendering übernimmt
- **Verwendung:** Hintergrundkarten, Luftbilder, Themenkarten

### Typische WMS-Anfrage

\`\`\`
https://example.com/wms?
  SERVICE=WMS&
  VERSION=1.3.0&
  REQUEST=GetMap&
  LAYERS=roads&
  WIDTH=256&
  HEIGHT=256&
  BBOX=9.9,53.5,10.0,53.6&
  FORMAT=image/png
\`\`\`

**Antwort:** Ein Bild (PNG/JPEG)

### Vorteile

✅ Sehr performant – Server cached vorgerenderte Tiles
✅ Funktioniert bei komplexen Visualisierungen (Schummerung, Satellitenbilder)
✅ Geringe Client-Last (nur Bilder anzeigen)
✅ Konsistente Darstellung über alle Clients

### Nachteile

❌ Keine Interaktion mit einzelnen Objekten
❌ Keine Attribut-Abfragen möglich
❌ Styling nur serverseitig steuerbar
❌ Nicht für Analyse oder Feature-Selektion geeignet

---

## WFS – Web Feature Service

**WFS liefert strukturierte Vektordaten (Features mit Geometrie und Attributen).**

### Charakteristika

- **Ausgabe:** GeoJSON, GML (XML) oder andere Vektorformate
- **Daten:** Einzelne Features mit Geometrie + Properties
- **Interaktion:** Klickbar, abfragbar, editierbar (WFS-T)
- **Performance:** Langsamer bei vielen Features
- **Verwendung:** POIs, Grenzen, analysierbare Objekte

### Typische WFS-Anfrage

\`\`\`
https://example.com/wfs?
  SERVICE=WFS&
  VERSION=2.0.0&
  REQUEST=GetFeature&
  TYPENAME=cities&
  OUTPUTFORMAT=application/json&
  BBOX=9.9,53.5,10.0,53.6
\`\`\`

**Antwort:** GeoJSON mit Features:

\`\`\`json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [9.993, 53.551] },
      "properties": { "name": "Hamburg", "population": 1899160 }
    }
  ]
}
\`\`\`

### Vorteile

✅ Zugriff auf alle Feature-Attribute
✅ Client-seitiges Styling möglich
✅ Interaktiv: Klicken, Highlighten, Filtern
✅ Räumliche Analysen durchführbar
✅ WFS-T: Editieren, Erstellen, Löschen von Features

### Nachteile

❌ Langsamer bei großen Datenmengen
❌ Client muss Rendering übernehmen
❌ Netzwerk-Traffic höher (JSON/XML statt Bilder)
❌ Nicht geeignet für Rasterdaten (Luftbilder, DEMs)

---

## 🎯 Wann was verwenden?

| Anwendungsfall | Standard | Grund |
|----------------|----------|-------|
| Hintergrundkarte (OSM, Google Maps) | WMS | Schnell, cached, nur visuell |
| Luftbilder / Satellitenbilder | WMS | Rasterdaten, keine Features |
| POIs anzeigen und anklicken | WFS | Attribut-Zugriff, Interaktion |
| Administrative Grenzen analysieren | WFS | Vektordaten für räumliche Analysen |
| Komplexe Themenkarte (vorgerendert) | WMS | Serverseitiges Styling, Performance |
| Feature-Editierung | WFS-T | Nur WFS unterstützt Transaktionen |
| Routenplanung | WFS | Vektordaten für Algorithmen nötig |

---

## 💡 Kombination in der Praxis

In echten Anwendungen kombinierst du oft beide:

1. **WMS als Hintergrund** – z.B. OpenStreetMap-Karte oder Luftbild
2. **WFS für interaktive Layer** – z.B. Standorte, Grenzen, Messungen

\`\`\`javascript
// Basis-Layer (WMS)
const backgroundLayer = new TileLayer({
  source: new TileWMS({
    url: 'https://ows.terrestris.de/osm/service',
    params: { LAYERS: 'OSM-WMS' }
  })
});

// Interaktiver Layer (WFS)
const poisLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://example.com/wfs?service=WFS&request=GetFeature...',
    format: new GeoJSON()
  })
});
\`\`\`

---

## 📝 Zusammenfassung

| Aspekt | WMS | WFS |
|--------|-----|-----|
| **Format** | Raster (PNG, JPEG) | Vektor (GeoJSON, GML) |
| **Daten** | Pixel | Features mit Properties |
| **Interaktion** | Keine | Klickbar, abfragbar |
| **Performance** | ⚡ Sehr schnell | 🐢 Langsamer |
| **Styling** | Serverseitig | Client-seitig |
| **Use Case** | Hintergrundkarten, Luftbilder | POIs, Analyse, Editierung |

> **Faustregel:** WMS für Ansicht, WFS für Interaktion.

Probiere beide Standards jetzt in den Playground-Lektionen aus!
`,uM=`JavaScript ist die Grundlage für alles, was wir entwickeln. Es treibt unsere Benutzeroberflächen an, verbindet Backend-Services und integriert spezialisierte Geo-Bibliotheken wie OpenLayers und Masterportal. Ohne solides Verständnis der JavaScript-Grundlagen kannst du nicht verstehen, wie unsere Anwendungen funktionieren oder effektiv zum Code beitragen.

## Warum JavaScript wichtig ist

Moderne Webanwendungen sind interaktiv, datengetrieben und in Echtzeit. JavaScript macht dies möglich, indem es direkt im Browser läuft, Benutzerinteraktionen verarbeitet, den Anwendungszustand verwaltet und mit Servern kommuniziert. In unseren Geo-Anwendungen orchestriert JavaScript das Karten-Rendering, Layer-Management, Feature-Auswahl und Koordinatentransformationen.

## Was du wissen musst

Du solltest vertraut sein mit:

- **Kernkonzepte der Sprache** — Variablen, Funktionen, Objekte, Arrays und Kontrollfluss
- **Asynchrone Programmierung** — Promises, async/await und Verarbeitung von API-Antworten
- **Moderne Syntax** — ES-Module, Destructuring, Arrow Functions und Template Literals
- **DOM-Manipulation** — Elemente auswählen, Inhalte aktualisieren und Events behandeln
- **Error Handling** — try/catch-Blöcke und defensive Programmierpraktiken

Diese Grundlagen erscheinen überall in unserer Codebasis. Egal ob du eine Vue-Komponente erstellst, ein Masterportal-Widget konfigurierst oder WFS-Antworten verarbeitest — du wirst täglich auf diese JavaScript-Konzepte angewiesen sein.

## Lernpfad

Beginne damit, die Grundlagen zu wiederholen, wenn irgendetwas unklar ist. Die externen Ressourcen in den kommenden Lektionen bieten umfassende Abdeckung der JavaScript-Mechanismen. Fokussiere dich auf Verständnis statt Auswendiglernen — du wirst viel Praxis bekommen, diese Konzepte in echten Projekten anzuwenden.

Nimm dir Zeit, Lücken in deinem Wissen früh zu identifizieren. Wenn async/await dich verwirrt oder du unsicher bist, wie Module funktionieren, markiere es jetzt. Deine Mentor:innen können dich durch die kniffligen Teile führen, bevor sie zu Blockern bei echten Aufgaben werden.
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
`,dM=`# Praktische Übung: Deine erste Config-Anpassung

## Ziel dieser Lektion

Du wirst lernen, wie man in einer echten Masterportal-Umgebung arbeitet, indem du:

1. Eine **Sandbox-Config duplizierst** zum sicheren Experimentieren
2. Ein **WMS + WFS-Paar registrierst** 
3. Die Änderungen **in der UI validierst**
4. Deine Änderungen **dokumentierst** für zukünftige Teammitglieder

## Schritt 1: Sandbox-Config duplizieren

### Warum eine Sandbox?

Eine Sandbox-Config ist eine Kopie eines bestehenden Portals, in der du **gefahrlos experimentieren** kannst, ohne produktive Portale zu beeinträchtigen.

### Config duplizieren

\`\`\`bash
cd masterportal/portal
cp -r basic sandbox-[dein-name]
cd sandbox-[dein-name]
\`\`\`

Beispiel:
\`\`\`bash
cp -r basic sandbox-maria
cd sandbox-maria
\`\`\`

### Portal-Titel anpassen

Öffne \`config.json\` und ändere den Titel:

\`\`\`json
{
  "portalConfig": {
    "portalTitle": {
      "title": "Sandbox - Maria",
      "logo": "https://www.masterportal.org/files/masterportal/img/Logo_Masterportal.svg"
    }
  }
}
\`\`\`

### Testen

\`\`\`bash
cd ../..
npm start
\`\`\`

Öffne: \`http://localhost:9001/portal/sandbox-maria/\`

✅ Dein Sandbox-Portal sollte jetzt mit deinem Namen erscheinen!

## Schritt 2: WMS + WFS-Paar registrieren

### Was ist ein WMS + WFS-Paar?

Oftmals gibt es für denselben Datensatz zwei Services:

- **WMS:** Zeigt die Daten als **Rasterbild** (schnell, für Hintergrund)
- **WFS:** Liefert die **Vektordaten** (Features mit Attributen, interaktiv)

**Beispiel:** Krankenhäuser
- WMS: Rote Kreuze auf der Karte (Bild)
- WFS: Punkte mit Attributen (Name, Adresse, Bettenzahl)

### Schritt 2.1: WMS in services.json hinzufügen

Öffne \`resources/services.json\` und füge hinzu:

\`\`\`json
[
  {
    "id": "wms_krankenhaeuser",
    "name": "Krankenhäuser (WMS)",
    "url": "https://geodienste.hamburg.de/HH_WMS_Krankenhaeuser",
    "typ": "WMS",
    "layers": "krankenhaus",
    "format": "image/png",
    "version": "1.3.0",
    "transparent": true,
    "singleTile": false
  },
  {
    "id": "wfs_krankenhaeuser",
    "name": "Krankenhäuser (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser",
    "typ": "WFS",
    "featureType": "krankenhaus",
    "version": "2.0.0",
    "outputFormat": "application/json"
  }
]
\`\`\`

**Anatomie eines Layer-Eintrags:**

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| \`id\` | Eindeutige Kennung (selbst gewählt) | \`"wms_krankenhaeuser"\` |
| \`name\` | Anzeigename für User | \`"Krankenhäuser"\` |
| \`url\` | Service-Endpoint | \`"https://..."\` |
| \`typ\` | Service-Typ | \`"WMS"\`, \`"WFS"\`, \`"WCS"\` |
| \`layers\` | Layer-Name (WMS) | \`"krankenhaus"\` |
| \`featureType\` | Feature-Typ (WFS) | \`"krankenhaus"\` |
| \`version\` | OGC-Version | \`"1.3.0"\`, \`"2.0.0"\` |
| \`format\` | Bildformat (WMS) | \`"image/png"\` |
| \`outputFormat\` | Datenformat (WFS) | \`"application/json"\` |

### Schritt 2.2: Layer in config.json aktivieren

Öffne \`config.json\` und füge die Layer unter \`layerConfig\` hinzu:

\`\`\`json
{
  "layerConfig": {
    "subjectlayer": {
      "elements": [
        {
          "id": "wms_krankenhaeuser",
              "id": "wms_krankenhaeuser",
              "name": "Krankenhäuser (Rasterbild)",
              "visibility": false,
              "transparency": 50
            },
            {
              "id": "wfs_krankenhaeuser",
              "name": "Krankenhäuser (Interaktiv)",
              "visibility": true,
              "styleId": "krankenhaus_style",
              "mouseHoverField": "name"
            }
          ]
        }
      }
    }
  }
}
\`\`\`

**Config-Flags erklärt:**

| Flag | Bedeutung | Werte |
|------|-----------|-------|
| \`visibility\` | Beim Start sichtbar? | \`true\` / \`false\` |
| \`transparency\` | Transparenz in % | \`0\` (opak) bis \`100\` (unsichtbar) |
| \`styleId\` | Referenz zu style.json | String (z.B. \`"krankenhaus_style"\`) |
| \`mouseHoverField\` | Welches Attribut bei Hover zeigen? | Attributname (z.B. \`"name"\`) |

### Schritt 2.3: Style definieren (optional)

Falls du WFS-Features stylen willst, öffne \`resources/style.json\`:

\`\`\`json
[
  {
    "styleId": "krankenhaus_style",
    "rules": [
      {
        "style": {
          "type": "icon",
          "imageName": "hospital.svg",
          "imageScale": 1.2,
          "imageWidth": 32,
          "imageHeight": 32
        }
      }
    ]
  }
]
\`\`\`

## Schritt 3: In der UI validieren

### Browser neu laden

Drücke \`Strg + F5\` (Cache-Refresh) oder starte \`npm start\` neu.

### Checkliste

✅ **Portal lädt ohne Fehler?**  
   → Öffne Browser-Console (F12), schaue nach Fehlermeldungen

✅ **Layer erscheinen im Menü?**  
   → Öffne das Layer-Menü, suche "Gesundheit" → "Krankenhäuser"

✅ **WFS-Layer ist interaktiv?**  
   → Klicke auf ein Feature, öffnet sich ein Info-Fenster?

✅ **WMS-Layer zeigt Bild?**  
   → Aktiviere den WMS-Layer, siehst du die Symbole?

### Häufige Probleme

**❌ Layer erscheint nicht im Menü**

Prüfe:
- ID in \`services.json\` und \`config.json\` identisch?
- JSON-Syntax korrekt? (keine Kommas am Ende)
- Browser-Cache geleert?

**❌ WMS zeigt nichts**

Prüfe:
- URL korrekt?
- Layer-Name korrekt? (Case-sensitive!)
- Im richtigen Kartenausschnitt? (Zoom rein/raus)

**❌ WFS-Features nicht klickbar**

Prüfe:
- \`featureType\` korrekt?
- WFS-Service antwortet? (Network-Tab in Browser-Console)
- GFI-Tool (GetFeatureInfo) aktiviert?

### Debugging mit Browser-Tools

**Console-Tab:**

Nutze die Browser Console (F12) um Fehler zu finden:

\`\`\`javascript
// Fehler und Warnungen werden hier angezeigt
// Prüfe auf:
// - JSON Syntax-Fehler
// - 404 Fehler beim Laden von Config-Dateien
// - WMS/WFS Service-Fehler
\`\`\`

**Network-Tab:**

- Filtere auf "wfs" oder "wms" um Service-Requests zu sehen
- Status Codes prüfen:
  - \`200\` = OK
  - \`404\` = Service nicht gefunden (URL prüfen)
  - \`500\` = Server-Fehler (Service-Problem)
  - \`CORS-Fehler\` = Service muss CORS-Header setzen

**Application-Tab:**

- Local Storage/Session Storage prüfen
- Gespeicherte Portal-Einstellungen ansehen

> 💡 **Tipp**: Mit den Vue DevTools (Browser-Extension) kannst du auch den Vuex Store inspizieren und sehen, welche Layer geladen sind.

## Schritt 4: Änderungen dokumentieren

### Warum dokumentieren?

**Für zukünftige Nachwuchskräfte** und dein Team:
- Was hast du geändert?
- Warum diese Konfiguration?
- Welche Flags bewirken was?

### Dokumentations-Template

Erstelle eine Datei \`CHANGELOG.md\` in deinem Portal-Ordner:

\`\`\`markdown
# Sandbox-Maria Changelog

## 2026-01-09: WMS + WFS Krankenhäuser hinzugefügt

### Änderungen

1. **services.json:**
   - \`wms_krankenhaeuser\`: Rasterbild der Krankenhausstandorte
   - \`wfs_krankenhaeuser\`: Vektordaten mit Attributen

2. **config.json:**
   - Neuer Ordner "Gesundheit" unter Fachdaten
   - WFS-Layer standardmäßig sichtbar (visibility: true)
   - WMS-Layer mit 50% Transparenz

3. **style.json:**
   - \`krankenhaus_style\`: Rotes Kreuz-Icon

### Config-Flags erklärt

- **visibility: true** → Layer beim Start anzeigen
- **transparency: 50** → 50% durchsichtig
- **mouseHoverField: "name"** → Bei Hover über Feature: Name anzeigen
- **styleId** → Verbindet Layer mit Style-Definition

### Getestet

✅ Layer erscheinen im Menü  
✅ WFS-Features klickbar und zeigen Attribute  
✅ WMS-Layer zeigt Symbole an richtigen Positionen  
✅ Keine Console-Errors  

### Lessons Learned

- IDs müssen zwischen services.json und config.json **exakt** übereinstimmen
- Browser-Cache muss geleert werden nach Config-Änderungen
- WFS ist interaktiver aber langsamer als WMS
- Für viele Features: WMS verwenden, für Details: WFS
\`\`\`

### Dokumentation ins Repo committen

\`\`\`bash
git add CHANGELOG.md
git commit -m "docs: Add Krankenhäuser WMS+WFS layer documentation"
\`\`\`

## Best Practices

### ✅ Do's

- **Sprechende IDs verwenden:** \`wfs_krankenhaeuser\` statt \`layer_123\`
- **Konsistente Benennung:** Wenn WMS + WFS, gleichen Namen verwenden
- **Ordner-Struktur nutzen:** Gruppiere Layer thematisch
- **Changelog pflegen:** Dokumentiere alle Änderungen
- **Testen auf verschiedenen Zoom-Levels:** Manche Layer nur auf bestimmten Scales sichtbar

### ❌ Don'ts

- **Keine Produktiv-Configs direkt ändern:** Immer erst in Sandbox testen!
- **Keine unvalidierte JSON:** Vor Commit mit jsonlint.com prüfen
- **Keine Hardcoded Credentials:** API-Keys gehören nicht in Configs
- **Nicht ohne Tests committen:** Immer lokal testen vor Push

## Zusammenfassung

Du hast gelernt:

1. ✅ Sandbox-Config erstellen und testen
2. ✅ Layer in \`services.json\` definieren
3. ✅ Layer in \`config.json\` aktivieren
4. ✅ Styles in \`style.json\` anpassen
5. ✅ In der UI validieren
6. ✅ Debugging mit Browser-Tools
7. ✅ Änderungen dokumentieren

## Nächste Schritte

- **Experimentiere** mit anderen Layer-Typen (XYZ, Vector Tiles, GeoJSON)
- **Erkunde** weitere Config-Flags in der offiziellen Dokumentation
- **Frage** erfahrene Teammitglieder nach Best Practices für dein Projekt
- **Bereite dich vor** auf Tool-Entwicklung (nächstes Modul)

Gut gemacht! Du bist jetzt bereit für komplexere Konfigurationen und eigene Tool-Entwicklung! 🎉
`,fM=`# Masterportal Konfigurationsstruktur

## Überblick

Das Masterportal wird vollständig über JSON-Konfigurationsdateien gesteuert. Diese Dateien definieren, welche Layer verfügbar sind, wie das Portal aussieht und welche Tools angeboten werden.

> 💡 **Wichtige Terminologie**: Die offizielle Masterportal-Dokumentation verwendet die Begriffe \`portalConfig\` und \`layerConfig\` (CamelCase). In manchen älteren Dokumenten findest du auch \`Portalconfig\` und \`Themenconfig\` - beide Schreibweisen beziehen sich auf dieselben Konzepte.

## Die zwei Arten von Konfigurationsdateien

### 1. Globale Konfigurationsdateien

Diese Dateien beschreiben zentrale Informationen, die von **mehreren Portalen** genutzt werden können:

#### \`services.json\`

Listet **alle verfügbaren Layer** auf. Hier werden WMS-, WFS-, WCS- und andere Geodienste definiert.

**Beispiel-Struktur:**

\`\`\`json
[
  {
    "id": "1234",
    "name": "Luftbilder Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WMS_DOP",
    "typ": "WMS",
    "layers": "luftbilder_rgb",
    "format": "image/png",
    "version": "1.3.0"
  },
  {
    "id": "5678",
    "name": "Krankenhäuser",
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser",
    "typ": "WFS",
    "featureType": "krankenhaus",
    "version": "2.0.0"
  }
]
\`\`\`

**Wichtige Eigenschaften:**
- \`id\`: Eindeutige Kennung (wird in config.json referenziert)
- \`typ\`: Layer-Typ (WMS, WFS, WCS, etc.)
- \`url\`: Dienst-URL
- \`layers\`/\`featureType\`: Layer-Name auf dem Server

#### \`rest-services.json\`

URLs zu verschiedenen **externen Services** wie Geocoder, Routing, Drucken, etc.

**Beispiel:**

\`\`\`json
[
  {
    "id": "geocoder",
    "name": "BKG Geocoder",
    "url": "https://sg.geodatenzentrum.de/gdz_geokodierung__[VERSION]/geosearch.json",
    "typ": "WFS"
  },
  {
    "id": "routing",
    "name": "BKG Routing Service",
    "url": "https://sg.geodatenzentrum.de/gdz_routing__[VERSION]",
    "typ": "ROUTING"
  }
]
\`\`\`

#### \`style.json\`

Enthält **Style-Definitionen** für Vektorlayer (z.B. WFS). Definiert Farben, Linienstärken, Icons, etc.

**Beispiel:**

\`\`\`json
[
  {
    "styleId": "krankenhaus_style",
    "rules": [
      {
        "style": {
          "type": "icon",
          "imageName": "hospital.png",
          "imageScale": 1.5
        }
      }
    ]
  }
]
\`\`\`

### 2. Portal-spezifische Konfigurationsdateien

Diese Dateien definieren ein **konkretes Portal-Instanz**:

#### \`config.js\`

Konfiguriert **Pfade** zu weiteren Konfigurationsdateien und Services.

**Beispiel:**

\`\`\`javascript
const Config = {
  portalConf: "./config.json",
  layerConf: "../resources/services.json",
  restConf: "../resources/rest-services.json",
  styleConf: "../resources/style.json"
};
\`\`\`

**Wichtig:** Die Dateien \`index.html\`, \`config.js\` und \`config.json\` müssen im **gleichen Pfad** liegen!

#### \`config.json\`

Die **Hauptkonfigurationsdatei** eines Portals. Hier wird alles definiert:

- **Portalname & Titel**
- **Karteneinstellungen** (Zentrum, Zoom, Projektionen)
- **Verfügbare Layer** (Referenz zu IDs aus services.json)
- **Aktivierte Tools** (Koordinatentool, Routing, Zeichnen, etc.)
- **UI-Elemente** (Menüs, Buttons, Suchleiste)

**Vereinfachtes Beispiel:**

\`\`\`json
{
  "portalConfig": {
    "portalTitle": {
      "title": "Mein erstes Portal",
      "logo": "logo.png"
    },
    "map": {
      "mapView": {
        "center": [565874, 5934140],
        "epsg": "EPSG:25832",
        "startZoom": 5
      }
    },
    "menu": {
      "tools": {
        "children": {
          "coordToolkit": {},
          "draw": {},
          "measure": {},
          "routing": {}
        }
      }
    }
  },
  "layerConfig": {
    "baselayer": {
      "elements": [
        {
          "id": "1234"
        }
      ]
    },
    "subjectlayer": {
      "elements": [
        {
          "id": "5678"
        }
      ]
    }
  }
}
\`\`\`

**Wichtige Abschnitte:**

- **portalConfig:** Portal-Aussehen und Verhalten
  - \`portalTitle\`: Titel und Logo
  - \`map.mapView\`: Karten-Initialisierung
  - \`menu\`: Verfügbare Tools und Menüs

- **layerConfig:** Layer-Organisation
  - \`baselayer\`: Hintergrundkarten (OSM, Luftbilder, etc.)
  - \`subjectlayer\`: Thematische Layer (POIs, WFS-Daten)

> 💡 **Alternative Terminologie**: In älteren Portalen findest du manchmal \`Portalconfig\` und \`Themenconfig\` statt \`portalConfig\` und \`layerConfig\`. Die offizielle Dokumentation (Version 3.x) nutzt \`portalConfig\` und \`layerConfig\`.

## Zusammenspiel der Dateien

\`\`\`
┌─────────────────────────────────────────────┐
│  Portal: http://mein-portal.de/portal/demo  │
└─────────────────────────────────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │   index.html          │
        └───────────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │   config.js           │  ◄───── definiert Pfade
        └───────────────────────┘
                    │
        ┌───────────┴───────────────────────────┐
        │                                       │
        ▼                                       ▼
┌───────────────────┐               ┌──────────────────────┐
│   config.json     │               │ Globale Configs:     │
│                   │               │ - services.json      │
│ - Portal-Layout   │◄──referenziert│ - rest-services.json │
│ - Tools           │               │ - style.json         │
│ - Layer-IDs       │               └──────────────────────┘
└───────────────────┘
\`\`\`

## Anschauliche Tools in der config.json

Für neue Teammitglieder sind diese Tools besonders **anschaulich** und hilfreich zum Lernen:

### 1. **Koordinatentool** (\`coordToolkit\`)

Zeigt Koordinaten des Mauszeigers in verschiedenen Projektionen an.

\`\`\`json
"coordToolkit": {
  "name": "Koordinatenabfrage",
  "zoomLevel": 7
}
\`\`\`

### 2. **Zeichnen** (\`draw\`)

Ermöglicht das Zeichnen von Punkten, Linien, Polygonen auf der Karte.

\`\`\`json
"draw": {
  "name": "Zeichnen / Schreiben",
  "renderToWindow": true
}
\`\`\`

### 3. **Strecke messen** (\`measure\`)

Misst Entfernungen und Flächen.

\`\`\`json
"measure": {
  "name": "Strecke / Fläche messen"
}
\`\`\`

### 4. **Routing** (\`routing\`)

Berechnet Routen zwischen zwei oder mehr Punkten.

\`\`\`json
"routing": {
  "name": "Routing",
  "directionsSettings": {
    "type": "ORS"
  }
}
\`\`\`

## Wo finde ich verfügbare Dienste?

Alle verfügbaren Geodienste findest du in der **services.json** der Portal-Konfiguration:

\`\`\`bash
masterportal/portal/[portal-name]/resources/services.json
\`\`\`

Zum Beispiel:
- \`masterportal/portal/basic/resources/services.json\`
- \`masterportal/portal/master/resources/services.json\`

## Best Practices

✅ **Verwende sprechende IDs** in services.json (z.B. "luftbilder_2023" statt "123")

✅ **Kommentiere config.json** nicht - JSON unterstützt keine Kommentare! Nutze stattdessen eine separate README.md

✅ **Teste nach jeder Änderung** - Config-Fehler sind die häufigste Fehlerquelle!

✅ **Verwende JSON-Validator** - Überprüfe die Syntax vor dem Speichern

⚠️ **Achtung:** Ein einzelnes fehlendes Komma oder falsches Anführungszeichen kann das gesamte Portal unbenutzbar machen!

## Nächste Schritte

Im nächsten Schritt lernst du:
- Wie du ein Portal **ohne Programmierung** nur durch Bearbeiten der config.json aufsetzt
- Wie du Layer hinzufügst und entfernst
- Wie du Tools aktivierst und konfigurierst

## Weiterführende Links

- Offizielle Config-Dokumentation: https://www.masterportal.org/dokumentation/dokumentation
- Beispiel-Portale im Repository: \`masterportal/portal/\`
`,gM=`# Masterportal Installation & Setup

## Einführung

Das Masterportal ist ein Open Source Framework zur Erstellung von Web-GIS-Anwendungen. In diesem Guide lernst du, wie du das Masterportal auf deinem lokalen Rechner einrichtest und zum Laufen bringst.

## Voraussetzungen prüfen

Bevor du startest, stelle sicher, dass du Node.js und npm installiert hast.

### Node.js & npm Version

Das Masterportal definiert in der \`package.json\` unter \`engines\` die erforderlichen Versionen. **Wichtig**: Verwende genau die angegebenen Versionen, da falsche Versionen die häufigste Fehlerquelle sind!

Prüfe deine installierten Versionen:

\`\`\`bash
node --version
npm --version
\`\`\`

> 💡 **Tipp**: Die offiziellen Anforderungen findest du im Repository in der \`package.json\` unter \`engines\`. Für Version 3.x wird typischerweise Node.js 22.x benötigt.

## Repository klonen

Das Masterportal wird auf Bitbucket gehostet:

\`\`\`bash
git clone https://bitbucket.org/geowerkstatt-hamburg/masterportal.git
cd masterportal
\`\`\`

Für die aktuelle Entwicklungsversion (Version 3.x) wechsle zum \`dev\` Branch:

\`\`\`bash
git checkout dev
\`\`\`

> 💡 **Hinweis**: Der \`dev\`-Branch ist der Hauptentwicklungszweig für Version 3. Für stabile Releases siehe die Tags im Repository.

## Installation der Dependencies

### VPN-Hinweis ⚠️

Je nach PC-Modell und Konfiguration kann es zu Problemen mit npm-Installation kommen:

- **Mit VPN:** Manche PCs können nur mit aktivem VPN npm-Pakete herunterladen
- **Ohne VPN:** Andere PCs benötigen die VPN-Verbindung ausgeschaltet
- **Lösung:** Probiere beide Varianten aus, wenn \`npm install\` hängt oder fehlschlägt

### Dependencies installieren

\`\`\`bash
npm install
\`\`\`

Dieser Befehl kann einige Minuten dauern und installiert alle benötigten Pakete.

## Entwicklungsserver starten

Nach erfolgreicher Installation kannst du den Dev-Server starten:

\`\`\`bash
npm start
\`\`\`

Das Masterportal sollte nun automatisch im Browser unter \`http://localhost:9001\` öffnen.

### Browser-Zugriff-Probleme

Falls die Seite nicht lädt:

1. **VPN-Status prüfen:** Auch hier kann VPN an/aus den Unterschied machen
2. **Port prüfen:** Ist Port 9001 bereits belegt?
3. **Firewall:** Blockiert die Firewall den Zugriff?
4. **Manuell öffnen:** Gib \`http://localhost:9001\` direkt im Browser ein

## Wichtige npm-Befehle

Alle relevanten Befehle findest du in der \`package.json\` unter \`scripts\`. Die wichtigsten:

\`\`\`bash
# Entwicklungsserver starten (mit Live-Reload)
npm start

# Production-Build erstellen (alle Portale)
npm run build

# Build nur für Beispiel-Portale
npm run buildExamples

# Unit-Tests ausführen
npm test
# oder mit Watch-Mode
npm run test:watch

# Linter ausführen
npm run lint

# JSDoc-Dokumentation generieren
npm run buildJsDoc
\`\`\`

> 💡 **Tipp**: Nach \`npm start\` öffnet sich automatisch der Browser unter \`http://localhost:9001\`. Dort findest du verschiedene Beispiel-Portale:
> - \`http://localhost:9001/portal/basic\` - Einfaches Portal
> - \`http://localhost:9001/portal/master\` - Portal mit umfangreicher Config
> - \`http://localhost:9001/portal/auto\` - Automatisch generierte Layer-Liste

## Projektstruktur verstehen

Nach dem Klonen siehst du folgende Hauptordner:

\`\`\`
masterportal/
├── src/                 # Quellcode
│   ├── modules/        # Tool-Module (Vue 3 Komponenten)
│   ├── core/           # Kernfunktionalität
│   └── shared/         # Geteilte Komponenten
├── portal/             # Portal-Konfigurationen
│   ├── Basic/          # Beispiel-Portal "Basic"
│   └── Master/         # Beispiel-Portal "Master"
├── test/               # Tests
├── doc/                # Dokumentation
└── package.json        # Dependencies & Scripts
\`\`\`

## Nächste Schritte

✅ Du hast das Masterportal erfolgreich installiert!

Weiter geht es mit:
- **Config-Struktur:** Lerne die JSON-Konfigurationsdateien kennen
- **Portal aufsetzen:** Erstelle dein erstes eigenes Portal
- **Tool-Entwicklung:** Programmiere eigene Werkzeuge

## Troubleshooting

### \`npm install\` schlägt fehl

1. **Node/npm Version prüfen**: Siehe Abschnitt "Voraussetzungen prüfen"
2. **VPN an/aus schalten**: Je nach Netzwerk-Konfiguration kann dies helfen
3. **Cache leeren und neu installieren**:
   \`\`\`bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   \`\`\`
4. **Proxy-Konfiguration prüfen**: Falls hinter einem Corporate Proxy (siehe VPN-Hinweis oben)

### Build-Fehler

- **Console prüfen**: Schaue nach spezifischen Fehlermeldungen
- **Dependencies prüfen**: \`npm install\` erneut ausführen
- **Branch-Status prüfen**: \`git status\` - sind alle Dateien committet?
- **Node-Version verifizieren**: Falsche Node-Version ist häufigster Grund

### \`npm start\` startet nicht oder Port 9001 belegt

- **Port ändern**: In der webpack-Konfiguration den Port anpassen
- **Prozess killen**: \`lsof -i :9001\` (Mac/Linux) oder Task-Manager (Windows)

### Weitere Hilfe

- **Offizielle Dokumentation**: https://www.masterportal.org/dokumentation
- **Issues im Repository**: https://bitbucket.org/geowerkstatt-hamburg/masterportal/issues
- **Team-Chat**: Frage erfahrene Kollegen
`,mM=`# Masterportal Übersicht

## Was ist das Masterportal?

Das Masterportal ist ein **Open Source Web-GIS-Framework**, entwickelt von der Geowerkstatt Hamburg. Es ermöglicht die Erstellung von benutzerfreundlichen Kartenanwendungen ohne tiefgreifende Programmierkenntnisse.

## Kernkonzept

Das Masterportal **wrappet OpenLayers** mit konfigurationsgesteuerten Widgets und bietet:

- **Konfigurationsbasiert:** Erstelle vollständige Portale nur durch JSON-Konfiguration
- **Modular:** Nutze vordefinierte Tools (Messen, Zeichnen, Routing, etc.)
- **Erweiterbar:** Entwickle eigene Tools mit JavaScript
- **OGC-konform:** Unterstützt WMS, WFS, WCS und weitere Standards

## High-Level-Architektur

\`\`\`
┌─────────────────────────────────────────────┐
│         Masterportal Anwendung              │
├─────────────────────────────────────────────┤
│                                             │
│  PortalConfig-Dateien                       │
│  - config.json (Portal-Einstellungen)       │
│  - services.json (Layer-Definitionen)       │
│  - style.json (Visualisierung)              │
│                                             │
│  ┌─────────────┐  ┌─────────────┐          │
│  │   Tools     │  │  Addons     │          │
│  │ (Standard)  │  │ (Custom)    │          │
│  └─────────────┘  └─────────────┘          │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │     OpenLayers (Karten-Engine)        │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │    Services (WMS, WFS, OGC APIs)      │ │
│  └───────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
\`\`\`

## Hauptkomponenten

### 1. PortalConfig-Dateien

Definieren **Layer, Tools und UI-Module** deines Portals:

- \`config.json\`: Hauptkonfiguration (Titel, Karte, Menü)
- \`services.json\`: Alle verfügbaren Geodienste
- \`rest-services.json\`: Externe Services (Geocoder, Routing)
- \`style.json\`: Visualisierung von Vektorlayern

### 2. Tools (Vordefiniert)

Das Masterportal kommt mit vielen fertigen Werkzeugen:

- **Koordinatentool:** Zeige Mausposition in verschiedenen Projektionen
- **Zeichnen:** Punkt, Linie, Polygon, Text auf Karte
- **Messen:** Distanzen und Flächen
- **Routing:** Route zwischen Punkten berechnen
- **Feature-Info:** Informationen zu Kartenobjekten abfragen
- **Filter:** Layer-Daten filtern
- **Drucken:** Karte als PDF exportieren

### 3. Addons

**Addons** erweitern das Masterportal mit eigener Logik:

- Werden mit **Vue 3 Komponenten** entwickelt
- Können eigene Backend-Services integrieren
- Implementieren spezifische Business-Logik
- Leben im \`addons/\` Ordner außerhalb des Core

### 4. Services

**Services** kapseln APIs und Geodienste:

- **WMS** (Web Map Service): Rasterkarten
- **WFS** (Web Feature Service): Vektordaten
- **WCS** (Web Coverage Service): Rasterdaten mit Werten
- **CSW** (Catalogue Service): Metadaten-Suche
- **OGC API Features:** Moderne Alternative zu WFS

## Typischer Workflow im Team

### Phase 1: Onboarding (Du bist hier!)

1. **Repository klonen** und lokalen Dev-Server starten
2. **Beispiel-Portale** erkunden
3. **Konfiguration verstehen**: services.json, config.json
4. **Einfache Änderungen**: Layer hinzufügen, Tools aktivieren

### Phase 2: Erste Aufgaben

1. **Dupliziere eine Sandbox-Config** zum Experimentieren
2. **Registriere ein WMS + WFS-Paar** in services.json
3. **Validiere in der Masterportal-UI** - funktioniert alles?
4. **Dokumentiere** was jedes Config-Flag bewirkt

### Phase 3: Tool-Entwicklung

1. **Analysiere bestehende Tools** im Repository (\`src/modules/tools/\`)
2. **Entwickle eigenes Tool** mit Vue 3, Vuex 4 & OpenLayers
3. **Teste** mit Unit-Tests (Mocha, Chai, Sinon)
4. **Code-Review** mit erfahrenen Teammitgliedern

### Phase 4: Deployment

1. **Config-Änderungen** in Git committen
2. **Pull Request** erstellen
3. **Review-Prozess** durchlaufen
4. **Deployment** in Produktion (oft automatisiert)

## Warum Masterportal lernen?

### Für dich als Nachwuchskraft:

✅ **Schneller Einstieg** in professionelle Geo-Entwicklung  
✅ **Praktische Skills** in Vue 3, OpenLayers und modernem JavaScript  
✅ **Open Source Contribution** - dein Code wird von vielen genutzt  
✅ **Community** - aktive Entwickler-Community in Hamburg  

### Für das Team:

✅ **Konsistenz** - alle Portale basieren auf gleicher Architektur  
✅ **Wiederverwendbarkeit** - Tools einmal entwickeln, überall nutzen  
✅ **Wartbarkeit** - klare Struktur, gute Dokumentation  
✅ **Standards** - OGC-konform, interoperabel  

## Versionierung

**Wichtig:** Das Masterportal existiert in mehreren Hauptversionen:

- **Version 2.x:** Basiert auf Backbone.js und Vue 2 (Legacy)
- **Version 3.x:** Aktuelle Version - vollständig auf Vue 3 + Vuex 4 migriert

**Dein Team nutzt Version 3.x** - diese verwendet ausschließlich Vue 3 und Vuex 4.

> ⚠️ **Achtung**: Achte bei der Suche nach Beispielen und Dokumentation darauf, dass du **Version 3.x** Material verwendest. Code-Beispiele mit Backbone.js stammen aus Version 2 und sind nicht mehr relevant!

## Nächste Schritte

In den folgenden Lektionen lernst du:

1. **Installation & Setup:** Masterportal lokal zum Laufen bringen
2. **Config-Struktur:** Alle Config-Dateien im Detail
3. **Portal aufsetzen:** Dein erstes eigenes Portal (ohne Code!)
4. **Tool-Entwicklung:** Eigene Werkzeuge programmieren
5. **Testing:** Tools professionell testen

## Weiterführende Ressourcen

- **Offizielle Website:** https://www.masterportal.org
- **Dokumentation:** https://www.masterportal.org/dokumentation (Version 3.x)
- **Repository:** https://bitbucket.org/geowerkstatt-hamburg/masterportal
- **Community:** Issues und Discussions im Repository
- **Beispiel-Portale:** Im Repository unter \`portal/\` (Basic, Master, etc.)

Lass uns loslegen! 🚀
`,pM=`# Ein Portal aufsetzen (ohne Programmierung)

## Einführung

Eine der Stärken des Masterportals ist, dass du ein **vollständiges Web-GIS** erstellen kannst, **ohne eine einzige Zeile Code zu schreiben**. Alles geschieht durch Bearbeiten der \`config.json\`.

In dieser Lektion lernst du, wie du dein eigenes Portal von Grund auf konfigurierst.

## Schritt 1: Portal-Ordner erstellen

Erstelle einen neuen Ordner für dein Portal:

\`\`\`bash
cd masterportal/portal
mkdir mein-erstes-portal
cd mein-erstes-portal
\`\`\`

## Schritt 2: Grunddateien anlegen

Kopiere die Grundstruktur von einem Beispiel-Portal:

\`\`\`bash
# Von einem bestehenden Portal kopieren (Achtung: Großschreibung!)
cp -r ../Basic/* .
\`\`\`

> 💡 **Windows**: Nutze \`xcopy /E /I ..\\Basic .\` oder kopiere den Ordner im Explorer

Du solltest nun haben:
\`\`\`
mein-erstes-portal/
├── index.html
├── config.js
├── config.json
└── resources/
    ├── services.json
    ├── rest-services.json
    └── style.json
\`\`\`

## Schritt 3: config.js anpassen

Öffne \`config.js\` und prüfe die Pfade:

\`\`\`javascript
const Config = {
  portalConf: "./config.json",
  layerConf: "./resources/services.json",
  restConf: "./resources/rest-services.json",
  styleConf: "./resources/style.json"
};
\`\`\`

**Wichtig:** Die Pfade müssen relativ zu deinem Portal-Ordner korrekt sein!

## Schritt 4: config.json bearbeiten

Jetzt kommt der Hauptteil - die \`config.json\` konfigurieren.

### Portal-Titel setzen

\`\`\`json
{
  "portalConfig": {
    "portalTitle": {
      "title": "Mein Geo-Portal",
      "logo": "https://example.com/logo.png",
      "link": "https://example.com",
      "toolTip": "Zurück zur Startseite"
    }
  }
}
\`\`\`

### Kartenansicht konfigurieren

Definiere, wo die Karte beim Start zentriert sein soll:

\`\`\`json
"portalConfig": {
  "map": {
    "mapView": {
      "center": [565874, 5934140],
      "epsg": "EPSG:25832",
      "startZoom": 5,
      "extent": [454591, 5809000, 700000, 6075769]
    }
  }
}
\`\`\`

**Parameter erklärt:**
- \`center\`: Startkoordinaten [x, y] in der angegebenen Projektion
- \`epsg\`: Projektionssystem (z.B. EPSG:25832 für UTM Zone 32N)
- \`startZoom\`: Zoom-Level beim Start (0 = herausgezoomt, höhere Werte = näher)
- \`extent\`: Maximaler Kartenausschnitt [minX, minY, maxX, maxY]

**Tipp:** Koordinaten für deine Stadt findest du z.B. auf [epsg.io](https://epsg.io/transform)

### Suchfunktion aktivieren

\`\`\`json
"portalConfig": {
  "map": {
    "mapView": { /* ... */ }
  },
  "mainMenu": {
    "searchBar": {
      "gazetteer": {
        "minChars": 3,
        "serviceId": "bkg_geosearch",
        "searchStreets": true,
        "searchHouseNumbers": true,
        "searchAddress": true
      }
    }
  }
}
\`\`\`

> 💡 Die \`serviceId\` referenziert einen Eintrag in der \`rest-services.json\`.

## Schritt 5: Layer hinzufügen

Layer werden in zwei Schritten eingebunden:

### 5.1 Layer in services.json definieren

Öffne \`resources/services.json\` und füge einen Layer hinzu:

\`\`\`json
[
  {
    "id": "openstreetmap",
    "name": "OpenStreetMap",
    "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    "typ": "XYZ",
    "tileSize": 256,
    "attribution": "© OpenStreetMap contributors"
  },
  {
    "id": "wfs_schulen",
    "name": "Schulen",
    "url": "https://geodienste.example.de/wfs_schulen",
    "typ": "WFS",
    "featureType": "schulen",
    "version": "2.0.0",
    "outputFormat": "application/json"
  }
]
\`\`\`

### 5.2 Layer in config.json aktivieren

Füge die Layer-IDs in der \`config.json\` unter \`layerConfig\` hinzu:

\`\`\`json
"layerConfig": {
  "baselayer": {
    "elements": [
      {
        "id": "openstreetmap",
        "name": "OpenStreetMap",
        "visibility": true
      }
    ]
  },
  "subjectlayer": {
    "elements": [
      {
        "id": "wfs_schulen",
        "name": "Schulstandorte",
        "visibility": false,
        "styleId": "schulen_style"
      }
    ]
  }
}
\`\`\`

**Parameter erklärt:**
- \`id\`: Referenz zur services.json
- \`visibility\`: Soll der Layer beim Start sichtbar sein?
- \`styleId\`: Optionale Referenz zur style.json

> 💡 **Alternative Terminologie**: In älteren Portalen findest du manchmal \`Themenconfig\` mit \`Hintergrundkarten\` und \`Fachdaten\`. Die offizielle v3 Doku nutzt \`layerConfig\` mit \`baselayer\` und \`subjectlayer\`.

## Schritt 6: Tools aktivieren

Aktiviere nützliche Werkzeuge für deine User:

\`\`\`json
"menu": {
  "tools": {
    "children": {
      "coordToolkit": {
        "name": "Koordinaten anzeigen",
        "zoomLevel": 7
      },
      "draw": {
        "name": "Zeichnen",
        "renderToWindow": true,
        "drawSymbolSettings": {
          "font": ["Arial"],
          "fontSize": [16, 32, 64],
          "color": ["#ff0000", "#00ff00", "#0000ff"]
        }
      },
      "measure": {
        "name": "Messen",
        "earthRadius": 6378137
      },
      "routing": {
        "name": "Route berechnen",
        "directionsSettings": {
          "type": "ORS"
        }
      },
      "gfi": {
        "name": "Informationen abfragen",
        "active": true
      }
    }
  }
}
\`\`\`

**Besonders anschauliche Tools für Einsteiger:**
- \`coordToolkit\`: Zeigt Mauskoordinaten in verschiedenen Projektionen
- \`draw\`: Zeichnen auf der Karte
- \`measure\`: Distanzen und Flächen messen
- \`routing\`: Routen zwischen Punkten berechnen

## Schritt 7: Portal testen

Starte den Entwicklungsserver:

\`\`\`bash
cd masterportal
npm start
\`\`\`

Öffne dein Portal im Browser:
\`\`\`
http://localhost:9001/portal/mein-erstes-portal/
\`\`\`

## Typische Config-Fehler vermeiden

### ❌ Fehler 1: JSON-Syntax

\`\`\`json
// FALSCH - Trailing Comma
{
  "name": "Test",
  "value": 123,  ← Letztes Komma entfernen!
}
\`\`\`

\`\`\`json
// RICHTIG
{
  "name": "Test",
  "value": 123
}
\`\`\`

### ❌ Fehler 2: Falsche Layer-ID

\`\`\`json
// Layer in config.json referenziert "schulen_123"
{
  "id": "schulen_123",
  "name": "Schulen"
}
\`\`\`

Aber in \`services.json\` heißt er:
\`\`\`json
{
  "id": "wfs_schulen",  ← ID stimmt nicht überein!
  "name": "Schulen"
}
\`\`\`

**Lösung:** IDs müssen exakt übereinstimmen!

### ❌ Fehler 3: Pfade in config.js falsch

\`\`\`javascript
// FALSCH - Pfad existiert nicht
const Config = {
  portalConf: "../config.json",  ← Pfad falsch
};
\`\`\`

**Lösung:** Prüfe, ob die Dateien wirklich an den angegebenen Pfaden liegen!

## Validation-Tools nutzen

Vor dem Testen: JSON validieren!

**Online:**
- https://jsonlint.com/
- https://jsonformatter.curiousconcept.com/

**VSCode:**
- JSON-Schema-Validation aktivieren
- Extension: "JSON Tools"

**Command Line:**
\`\`\`bash
# Mit jq prüfen (muss installiert sein)
cat config.json | jq .
\`\`\`

## Debugging-Tipps

### Browser-Console öffnen

\`F12\` oder \`Rechtsklick > Untersuchen > Console\`

**Typische Fehlermeldungen:**

\`\`\`
SyntaxError: Unexpected token } in JSON
→ JSON-Syntax-Fehler, prüfe Kommas und Klammern

Failed to load resource: 404 (Not Found) - services.json
→ Pfad in config.js falsch

Layer with id 'xyz' not found
→ Layer-ID in config.json existiert nicht in services.json
\`\`\`

### Network-Tab prüfen

Schaue nach fehlgeschlagenen Requests:
- Werden alle Config-Files geladen?
- Antworten die WMS/WFS-Dienste?

### Config-Fehler beheben

1. **JSON-Syntax prüfen** (jsonlint.com)
2. **Pfade prüfen** (existieren die Dateien?)
3. **Layer-IDs prüfen** (services.json ↔ config.json)
4. **Browser-Cache leeren** (Strg+F5)
5. **Server neu starten** (npm start)

## Checkliste: Mein erstes Portal

✅ Portal-Ordner erstellt  
✅ Grunddateien (index.html, config.js, config.json) vorhanden  
✅ config.js: Pfade korrekt konfiguriert  
✅ config.json: Portal-Titel gesetzt  
✅ config.json: Kartenansicht konfiguriert  
✅ services.json: Layer definiert  
✅ config.json: Layer in layerConfig aktiviert  
✅ config.json: Tools aktiviert  
✅ JSON-Syntax validiert  
✅ Portal im Browser getestet  

## Nächste Schritte

Du hast jetzt ein funktionierendes Portal **ohne eine Zeile Code**! 🎉

Als Nächstes:
- **Styles anpassen:** Lerne, wie du Vektorlayer mit style.json stylst
- **Tool-Entwicklung:** Programmiere eigene Werkzeuge (z.B. Entfernungsmessung zwischen Features)
- **Advanced Config:** Nutze komplexere Portal-Features (Filter, Drucken, Export)

## Weiterführende Ressourcen

- Config.json-Schema: https://www.masterportal.org/dokumentation/dokumentation
- Beispiel-Portale: \`masterportal/portal/basic/\`, \`masterportal/portal/master/\`
- Community: https://bitbucket.org/geowerkstatt-hamburg/masterportal/issues
`,_M=`# Tool-Entwicklung im Masterportal

## Einführung

Nachdem du gelernt hast, ein Portal durch Config-Bearbeitung zu erstellen, ist der nächste Schritt die **echte Programmierung**: die Entwicklung eigener Tools.

Tools sind interaktive Komponenten, die Nutzern erweiterte Funktionalität bieten - z.B. Messungen, Analysen, Datenexporte oder eigene Visualisierungen.

## Was ist ein Tool?

Ein Tool im Masterportal ist ein eigenständiges Modul, das:

- Eine **UI-Komponente** bereitstellt (z.B. ein Fenster mit Buttons und Eingabefeldern)
- Mit der **Karte interagiert** (Layer hinzufügen, Features selektieren, Geometrien zeichnen)
- **Geodaten verarbeitet** (z.B. Distanzen berechnen, Features filtern)
- **Events** behandelt (Klicks auf der Karte, User-Input)

**Beispiele für Tools:**
- Koordinatentool
- Zeichenwerkzeug
- Routenplaner
- Feature-Info-Abfrage
- Export-Tool (PDF, CSV)
- Messtool für Abstände zwischen Features ← Dein Capstone-Projekt!

## Technologie-Stack

**Masterportal Version 3 basiert auf:**

- **Vue 3**: Modernes JavaScript-Framework mit Composition API und Options API
- **Vuex 4**: State Management
- **OpenLayers**: Karten-Bibliothek
- **Webpack**: Build-System
- **Bootstrap 5**: UI-Components
- **ES6+ JavaScript**: Moderne JavaScript-Syntax

> ⚠️ **Wichtig**: Version 3 ist eine komplette Neuentwicklung und nutzt **ausschließlich Vue 3 + Vuex 4**. Falls du irgendwo Backbone.js-Code siehst, stammt dieser aus Version 2 und ist nicht mehr relevant!

## Ordnerstruktur für Tools

Tools liegen im Ordner:

\`\`\`
masterportal/src/modules/tools/
├── coordToolkit/         # Koordinatenwerkzeug
├── draw/                 # Zeichenwerkzeug
├── measure/              # Messwerkzeug
├── routing/              # Routing-Tool
└── meinTool/            # Dein neues Tool
    ├── components/       # Vue-Komponenten
    │   └── MeinTool.vue  # Haupt-Komponente
    ├── store/           # Vuex Store
    │   ├── actions.js
    │   ├── getters.js
    │   ├── mutations.js
    │   └── state.js
    ├── tests/           # Unit-Tests
    └── doc/             # Dokumentation
\`\`\`

## Anatomie eines Tools (Vue 3)

### 1. Vue-Komponente (\`MeinTool.vue\`)

\`\`\`vue
<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
import getters from "../store/getters";
import mutations from "../store/mutations";

export default {
    name: "MeinTool",
    computed: {
        ...mapGetters("Tools/MeinTool", Object.keys(getters)),
    },
    methods: {
        ...mapActions("Tools/MeinTool", ["someAction"]),
        ...mapMutations("Tools/MeinTool", Object.keys(mutations)),
        
        onCalculateDistance() {
            // Distanz berechnen
            this.calculateDistance();
        }
    }
};
<\/script>

<template>
    <div id="mein-tool">
        <div class="tool-header">
            <h4>{{ $t("additional:modules.tools.meinTool.title") }}</h4>
        </div>
        
        <div class="tool-body">
            <p>{{ $t("additional:modules.tools.meinTool.description") }}</p>
            
            <div class="selection-info">
                <strong>Ausgewählte Features:</strong>
                <span>{{ selectedFeatures.length }}</span>
            </div>
            
            <button 
                v-if="selectedFeatures.length >= 2"
                class="btn btn-primary"
                @click="onCalculateDistance"
            >
                {{ $t("additional:modules.tools.meinTool.calculate") }}
            </button>
            
            <div v-if="distance !== null" class="result">
                <strong>Distanz:</strong> {{ distance.toFixed(2) }} m
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#mein-tool {
    .tool-header {
        padding: 15px;
        border-bottom: 1px solid #e0e0e0;
    }
    
    .tool-body {
        padding: 15px;
    }
    
    .result {
        margin: 15px 0;
        padding: 15px;
        background: #e8f5e9;
        border-left: 4px solid #4caf50;
    }
}
</style>
\`\`\`

### 2. Vuex Store (\`store/state.js\`)

\`\`\`javascript
const state = {
    active: false,
    id: "meinTool",
    name: "Mein Tool",
    icon: "bi-rulers",
    renderToWindow: true,
    resizableWindow: true,
    isVisibleInMenu: true,
    deactivateGFI: true,
    
    // Tool-spezifische Properties
    selectedFeatures: [],
    distance: null
};

export default state;
\`\`\`

### 3. Vuex Mutations (\`store/mutations.js\`)

\`\`\`javascript
export default {
    setActive(state, value) {
        state.active = value;
    },
    setSelectedFeatures(state, features) {
        state.selectedFeatures = features;
    },
    setDistance(state, distance) {
        state.distance = distance;
    },
    addFeature(state, feature) {
        if (state.selectedFeatures.length < 2) {
            state.selectedFeatures.push(feature);
        }
    },
    clearSelection(state) {
        state.selectedFeatures = [];
        state.distance = null;
    }
};
\`\`\`

### 4. Vuex Actions (\`store/actions.js\`)

\`\`\`javascript
import {getDistance} from "ol/sphere";

export default {
    calculateDistance({state, commit}) {
        if (state.selectedFeatures.length !== 2) {
            return;
        }
        
        const coord1 = state.selectedFeatures[0].getGeometry().getCoordinates();
        const coord2 = state.selectedFeatures[1].getGeometry().getCoordinates();
        
        const distance = getDistance(coord1, coord2);
        commit("setDistance", distance);
    },
    
    registerMapClickListener({dispatch}) {
        // Map-Click-Events registrieren
        // Details siehe Masterportal-Doku
    }
};
\`\`\`

### 5. Vuex Getters (\`store/getters.js\`)

\`\`\`javascript
export default {
    active: (state) => state.active,
    selectedFeatures: (state) => state.selectedFeatures,
    distance: (state) => state.distance,
    canCalculate: (state) => state.selectedFeatures.length === 2
};
\`\`\`

## Tool registrieren

### 1. Tool-Ordner unter \`src/modules/tools/\` erstellen

### 2. In \`src/modules/tools/index.js\` registrieren:

\`\`\`javascript
import MeinToolComponent from "./meinTool/components/MeinTool.vue";
import MeinToolStore from "./meinTool/store/index";

export default {
    // ... andere Tools
    MeinTool: {
        component: MeinToolComponent,
        store: MeinToolStore
    }
};
\`\`\`

### 3. In \`config.json\` aktivieren:

\`\`\`json
{
  "portalConfig": {
    "menu": {
      "tools": {
        "children": {
          "meinTool": {
            "name": "translate#additional:modules.tools.meinTool.title",
            "icon": "bi-rulers"
          }
        }
      }
    }
  }
}
\`\`\`

### 4. Übersetzungen hinzufügen (\`locales/de/additional.json\`):

\`\`\`json
{
  "modules": {
    "tools": {
      "meinTool": {
        "title": "Mein Tool",
        "description": "Klicke auf zwei Features, um die Distanz zu berechnen.",
        "calculate": "Distanz berechnen"
      }
    }
  }
}
\`\`\`

## Mit OpenLayers arbeiten

### Features von WFS-Layer holen

\`\`\`javascript
// In einer Vuex Action
getWfsFeatures({rootGetters}) {
    const layerId = "wfs_schulen";
    // Zugriff über Vuex Store auf Map-Layer
    const layer = rootGetters["Maps/getLayerById"](layerId);
    
    if (layer && layer.getSource) {
        const features = layer.getSource().getFeatures();
        return features;
    }
    return [];
}
\`\`\`

### Geometrie-Operationen

\`\`\`javascript
import {getDistance, getLength, getArea} from "ol/sphere";

// Distanz zwischen zwei Punkten
const distance = getDistance(coord1, coord2);

// Länge einer LineString
const length = getLength(lineStringGeometry);

// Fläche eines Polygons
const area = getArea(polygonGeometry);
\`\`\`

### Vector-Layer für Visualisierung

\`\`\`javascript
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Style, Stroke, Fill} from "ol/style";
import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";

// In einer Vuex Action
addVisualizationLayer({rootGetters}) {
    const map = rootGetters["Maps/getMap"]("2D");
    
    // Vector-Layer erstellen
    const vectorLayer = new VectorLayer({
        id: "meinTool_visualization",
        source: new VectorSource(),
        style: new Style({
            stroke: new Stroke({
                color: "red",
                width: 3
            })
        }),
        alwaysOnTop: true
    });
    
    // Zur Karte hinzufügen
    map.addLayer(vectorLayer);
    
    // Linie zeichnen
    const lineFeature = new Feature({
        geometry: new LineString([coord1, coord2])
    });
    
    vectorLayer.getSource().addFeature(lineFeature);
}
\`\`\`

## Debugging-Tipps

### 1. Vue DevTools

Browser-Extension installieren:
- Chrome: "Vue.js devtools"
- Firefox: "Vue.js devtools"

**Features:**
- Vuex State inspizieren
- Component-Tree anzeigen
- Events tracken
- Performance-Analyse

### 2. Console-Logs

\`\`\`javascript
console.log("Tool activated:", this.active);
console.log("Selected features:", this.selectedFeatures);
console.log("Distance calculated:", this.distance);
\`\`\`

### 3. Vuex Logger

In \`store/index.js\`:

\`\`\`javascript
import {createLogger} from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default {
    // ... store config
    plugins: debug ? [createLogger()] : []
};
\`\`\`

## Testing

Tests mit Mocha + Chai:

\`\`\`javascript
// tests/unit/store/actions.spec.js
import {expect} from "chai";
import actions from "../../../store/actions";

describe("tools/meinTool/actions", () => {
    let commit, state;
    
    beforeEach(() => {
        commit = sinon.spy();
        state = {
            selectedFeatures: []
        };
    });
    
    it("should calculate distance correctly", () => {
        const feature1 = createMockFeature([0, 0]);
        const feature2 = createMockFeature([100, 0]);
        
        state.selectedFeatures = [feature1, feature2];
        
        actions.calculateDistance({state, commit});
        
        expect(commit.calledWith("setDistance")).to.be.true;
        expect(commit.args[0][1]).to.be.closeTo(100, 0.01);
    });
});
\`\`\`

## Best Practices

✅ **Composition API nutzen** (wenn möglich, für neue Tools)

✅ **Vuex State zentral verwalten** - UI-Logik von Business-Logik trennen

✅ **i18n für Texte** - Alle User-Texte übersetzbar machen

✅ **Cleanup beim Deaktivieren** - Layer und Listener entfernen

✅ **Bootstrap-Components nutzen** - Konsistentes UI

✅ **Accessibility beachten** - ARIA-Labels, Keyboard-Navigation

## Migration von v2 zu v3

Falls du alte Backbone-basierte Tools siehst:

**Backbone (v2)** → **Vue 3 (v3)**
- \`Model.extend()\` → Vuex Store
- \`View.extend()\` → Vue-Komponente
- \`this.get("prop")\` → \`this.prop\` (computed)
- \`this.set("prop", value)\` → \`this.setProp(value)\` (mutation)
- \`this.listenTo()\` → \`watch()\` oder computed properties

## Nächste Schritte

Du bist jetzt bereit für dein **Capstone-Projekt**! 🚀

Die Aufgabe:
> Baue ein **Messtool für Abstände zwischen WFS-Features** mit Vue 3 und Vuex

Nutze das Gelernte:
- Vue 3 Komponente mit Template
- Vuex Store für State Management
- OpenLayers für Geometrie-Operationen
- i18n für Übersetzungen

## Ressourcen

- **Masterportal v3 Doku:** https://www.masterportal.org/dokumentation
- **Vue 3 Docs:** https://vuejs.org/
- **Vuex 4 Docs:** https://vuex.vuejs.org/
- **OpenLayers API:** https://openlayers.org/en/latest/apidoc/
- **Beispiel-Tools:** \`src/modules/tools/\` im Repository

**Wichtig:** Schaue dir **existierende v3-Tools** im Repository an als Referenz! Diese Tools (wie \`draw\`, \`measure\`, \`coordToolkit\`) sind vollständig in Vue 3 + Vuex 4 geschrieben und bieten best-practice Beispiele.

## Zusammenfassung

Du hast gelernt:

✅ **Tool-Struktur**: Wie ein Vue 3 Tool mit Komponente + Vuex Store aufgebaut ist  
✅ **Tool-Registrierung**: Wie Tools im Masterportal registriert werden  
✅ **OpenLayers Integration**: Wie du mit der Karte interagierst  
✅ **State Management**: Wie Vuex 4 für zentrale Datenhaltung genutzt wird  
✅ **Debugging**: Wie du Tools mit Vue DevTools debuggst  
✅ **Testing**: Wie Unit-Tests für Tools geschrieben werden

## Dein Capstone-Projekt

**Aufgabe**: Baue ein **Messtool für Abstände zwischen WFS-Features**

**Anforderungen:**
- Nutzer kann zwei Features auf der Karte anklicken
- Die Distanz zwischen den Features wird berechnet und angezeigt
- Eine Linie zwischen den Features wird visualisiert
- Das Tool hat ein aufgeräumtes UI mit Bootstrap 5
- Alle Texte sind mehrsprachig (i18n)
- Unit-Tests existieren für die wichtigsten Funktionen

**Viel Erfolg!** 🚀
`,yM=`# Capstone-Projekt: MeasureTool-Plugin

## 🎯 Projektziel

Entwickle ein vollständiges, produktionsreifes POLAR-Plugin, das Distanzen und Flächen auf der Karte misst. Das Plugin demonstriert alle erlernten Fähigkeiten aus den 5 Wochen: Plugin-Anatomie, OpenLayers-Integration, Testing und Release-Workflow.

## 📋 Anforderungen

### Funktionale Anforderungen

1. **Messmodi**
   - Distanz-Messung (LineString)
   - Flächen-Messung (Polygon)
   - Umschaltung zwischen Modi via Toggle-Buttons

2. **User-Interface**
   - Vuetify-Card mit Tool-Buttons
   - Anzeige der aktuellen Messung (Distanz in km, Fläche in km²)
   - "Messung löschen"-Button
   - "Messung beenden"-Button

3. **Karten-Interaktion**
   - OpenLayers Draw-Interaction
   - Geometrien werden auf der Karte gezeichnet
   - Tooltips zeigen Zwischenergebnisse beim Zeichnen
   - Features bleiben nach Beendigung sichtbar

4. **Berechnungen**
   - Geodätische Distanzberechnung (Haversine-Formel)
   - Flächen-Berechnung (Geodätisch korrekt)
   - Einheiten: Meter/Kilometer für Distanz, m²/km² für Flächen

### Technische Anforderungen

1. **Plugin-Struktur**
   - Factory-Pattern mit Options (initialMode, position)
   - Vuex-Store-Module (State, Getters, Actions, Mutations)
   - Vue-Component mit Vuetify
   - TypeScript mit strikten Types

2. **Code-Qualität**
   - ESLint ohne Fehler
   - TypeScript Type-Check ohne Fehler
   - Unit-Tests mit ≥80% Coverage
   - E2E-Test mit Playwright

3. **Dokumentation**
   - README.md mit Installation, Usage, API
   - CHANGELOG.md (v1.0.0)
   - Inline-Code-Kommentare für komplexe Logik

## 🏗️ Meilensteine

### Milestone 1: Projekt-Boilerplate ✅

**Aufgaben**:
- Erstelle Ordnerstruktur: \`packages/plugins/MeasureTool/\`
- \`package.json\` mit Dependencies (@polar/core, openlayers, vue, vuetify)
- \`types.ts\` mit Interfaces (MeasureToolOptions, MeasureMode, MeasureResult)
- \`index.ts\` mit leerer Factory und Store-Skeleton

**Acceptance Criteria**:
- ✅ Ordner existiert mit korrekter Struktur
- ✅ \`npm install\` läuft ohne Fehler
- ✅ TypeScript kompiliert (noch keine Funktionalität)

---

### Milestone 2: Vuex-Store implementieren ✅

**Aufgaben**:
- **State**:
  \`\`\`typescript
  {
    mode: 'distance' | 'area' | null,
    isActive: boolean,
    currentMeasurement: number | null,
    features: Feature[],
    drawInteraction: Draw | null
  }
  \`\`\`

- **Getters**:
  - \`getMode\`, \`isActive\`, \`getCurrentMeasurement\`, \`getFeatures\`

- **Mutations**:
  - \`SET_MODE\`, \`SET_ACTIVE\`, \`SET_MEASUREMENT\`, \`ADD_FEATURE\`, \`CLEAR_FEATURES\`, \`SET_DRAW_INTERACTION\`

- **Actions**:
  - \`startMeasurement({ mode })\`: Startet Messung mit Draw-Interaction
  - \`stopMeasurement()\`: Beendet Messung, entfernt Interaction
  - \`clearMeasurements()\`: Löscht alle Features von der Karte
  - \`calculateMeasurement({ feature })\`: Berechnet Distanz/Fläche

**Acceptance Criteria**:
- ✅ Store-Module ist vollständig definiert
- ✅ Actions haben korrekten Typ (async)
- ✅ Keine TypeScript-Fehler

---

### Milestone 3: Vue-Component mit UI ✅

**Aufgaben**:
- \`components/MeasureToolComponent.vue\` erstellen
- UI-Elemente:
  - Toggle-Buttons für Modi (v-btn-toggle)
  - Aktuelle Messung-Anzeige (v-card-text)
  - Action-Buttons (Löschen, Beenden)
- Vuex-Anbindung via \`computed\` und \`methods\`
- Styling mit Vuetify-Theme

**Beispiel-Template**:
\`\`\`vue
<template>
  <v-card class="measure-tool" elevation="2">
    <v-card-title>
      <v-icon left>mdi-ruler</v-icon>
      Messwerkzeug
    </v-card-title>
    
    <v-card-text>
      <v-btn-toggle v-model="selectedMode" mandatory>
        <v-btn value="distance">
          <v-icon>mdi-ruler</v-icon>
          Distanz
        </v-btn>
        <v-btn value="area">
          <v-icon>mdi-vector-square</v-icon>
          Fläche
        </v-btn>
      </v-btn-toggle>
      
      <div v-if="currentMeasurement" class="mt-3">
        <strong>Messung:</strong>
        {{ formattedMeasurement }}
      </div>
    </v-card-text>
    
    <v-card-actions>
      <v-btn @click="handleClear" color="error" small>
        Löschen
      </v-btn>
      <v-btn @click="handleStop" color="primary" small>
        Beenden
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
\`\`\`

**Acceptance Criteria**:
- ✅ Component rendert in Snowbox
- ✅ Buttons sind klickbar (noch ohne Funktionalität)
- ✅ Vuetify-Styling ist konsistent

---

### Milestone 4: OpenLayers-Integration ✅

**Aufgaben**:
- Implementiere \`startMeasurement\`-Action:
  - Erstelle VectorSource und VectorLayer für Measurements
  - Füge Draw-Interaction hinzu (type: 'LineString' oder 'Polygon')
  - Event-Listener: \`drawend\` → \`calculateMeasurement\`

- Implementiere \`calculateMeasurement\`-Action:
  - Nutze \`getLength()\` (ol/sphere) für Distanzen
  - Nutze \`getArea()\` (ol/sphere) für Flächen
  - Formatiere Ergebnis (m → km bei > 1000m)

- Implementiere \`clearMeasurements\`-Action:
  - Entferne alle Features von VectorSource
  - Reset State

**Beispiel-Code**:
\`\`\`typescript
import { Draw } from 'ol/interaction'
import { Vector as VectorSource } from 'ol/source'
import { Vector as VectorLayer } from 'ol/layer'
import { getLength, getArea } from 'ol/sphere'

actions: {
  startMeasurement({ commit, rootGetters }, { mode }) {
    const map = rootGetters['map/getMap']
    
    // Vector-Layer für Messungen (falls noch nicht vorhanden)
    let measureLayer = map.getLayers().getArray().find(l => l.get('name') === 'measure')
    if (!measureLayer) {
      const source = new VectorSource()
      measureLayer = new VectorLayer({ source, properties: { name: 'measure' } })
      map.addLayer(measureLayer)
    }
    
    // Draw-Interaction
    const drawInteraction = new Draw({
      source: measureLayer.getSource(),
      type: mode === 'distance' ? 'LineString' : 'Polygon'
    })
    
    drawInteraction.on('drawend', (event) => {
      this.dispatch('plugins/measureTool/calculateMeasurement', { feature: event.feature })
    })
    
    map.addInteraction(drawInteraction)
    commit('SET_DRAW_INTERACTION', drawInteraction)
    commit('SET_ACTIVE', true)
  },
  
  calculateMeasurement({ commit, state }, { feature }) {
    const geometry = feature.getGeometry()
    let measurement = 0
    
    if (state.mode === 'distance') {
      measurement = getLength(geometry, { projection: 'EPSG:3857' })
    } else {
      measurement = getArea(geometry, { projection: 'EPSG:3857' })
    }
    
    commit('SET_MEASUREMENT', measurement)
  }
}
\`\`\`

**Acceptance Criteria**:
- ✅ Zeichnen auf Karte funktioniert
- ✅ Messung wird berechnet und angezeigt
- ✅ Löschen entfernt Features von Karte
- ✅ Modi-Wechsel funktioniert

---

### Milestone 5: NineLayoutTag & Integration ✅

**Aufgaben**:
- Konfiguriere \`nineLayoutTag: 'top-right'\` in Factory
- Registriere Plugin in \`packages/clients/generic/src/addPlugins.ts\`:
  \`\`\`typescript
  import { MeasureTool } from '@polar/measure-tool'
  
  export const plugins = [
    // ...
    MeasureTool({ position: 'top-right' })
  ]
  \`\`\`
- Teste in Snowbox

**Acceptance Criteria**:
- ✅ Plugin erscheint an korrekter Position in Snowbox
- ✅ Keine Überlappung mit anderen Plugins
- ✅ Responsive Verhalten auf Mobile

---

### Milestone 6: Unit-Tests (≥80% Coverage) ✅

**Aufgaben**:
- Erstelle \`__tests__/measureTool.spec.ts\`
- **Store-Tests** (mindestens 12 Tests):
  - Mutations: SET_MODE, SET_ACTIVE, SET_MEASUREMENT, ADD_FEATURE, CLEAR_FEATURES
  - Actions: startMeasurement, stopMeasurement, clearMeasurements, calculateMeasurement
  - Getters: Alle Getters testen

- **Component-Tests** (mindestens 6 Tests):
  - Rendering mit verschiedenen States
  - Button-Clicks triggern Actions
  - Conditional Rendering (z.B. Messung nur anzeigen wenn vorhanden)
  - Mode-Wechsel

- **Utility-Tests** (falls separate Utility-Funktionen):
  - Formatierung (z.B. \`formatDistance(1234)\` → "1.23 km")

**Beispiel-Test**:
\`\`\`typescript
describe('MeasureTool Store', () => {
  it('startMeasurement adds draw interaction to map', async () => {
    const mockMap = {
      addInteraction: jest.fn(),
      addLayer: jest.fn(),
      getLayers: () => ({ getArray: () => [] })
    }
    
    const store = createStore({
      modules: {
        map: { getters: { getMap: () => mockMap } },
        plugins: { modules: { measureTool: measureToolStore } }
      }
    })
    
    await store.dispatch('plugins/measureTool/startMeasurement', { mode: 'distance' })
    
    expect(mockMap.addInteraction).toHaveBeenCalled()
    expect(store.state.plugins.measureTool.isActive).toBe(true)
  })
})
\`\`\`

**Acceptance Criteria**:
- ✅ \`npm test MeasureTool\` läuft ohne Fehler
- ✅ Coverage ≥ 80% für alle Metriken (Statements, Branches, Functions, Lines)
- ✅ Tests sind aussagekräftig (keine "smoke tests")

---

### Milestone 7: E2E-Test mit Playwright ✅

**Aufgaben**:
- Erstelle \`e2e/measureTool.spec.ts\`
- **Test-Szenarien**:
  1. Plugin ist sichtbar in Snowbox
  2. Distanz-Messung: Klicke Punkte auf Karte → Messung wird angezeigt
  3. Flächen-Messung: Zeichne Polygon → Fläche wird berechnet
  4. Löschen-Button entfernt Messungen
  5. Modi-Wechsel funktioniert

**Beispiel-Test**:
\`\`\`typescript
test('measures distance on map', async ({ page }) => {
  await page.goto('http://localhost:5173')
  
  // Warte auf MeasureTool-Plugin
  await expect(page.locator('.measure-tool')).toBeVisible()
  
  // Wähle Distanz-Modus (sollte bereits aktiv sein)
  await page.click('button[value="distance"]')
  
  // Klicke zwei Punkte auf Karte (koordinaten relativ zu Map-Element)
  const mapElement = page.locator('#map')
  const box = await mapElement.boundingBox()
  
  await page.mouse.click(box.x + 100, box.y + 100) // Startpunkt
  await page.mouse.dblclick(box.x + 300, box.y + 100) // Endpunkt (dblclick beendet Zeichnen)
  
  // Warte auf Messung
  await page.waitForTimeout(500)
  
  // Messung sollte angezeigt werden (>0)
  const measurementText = await page.locator('.measure-tool .v-card-text').textContent()
  expect(measurementText).toContain('km') // oder 'm' je nach Distanz
})
\`\`\`

**Acceptance Criteria**:
- ✅ E2E-Tests passieren: \`npm run test:e2e measureTool\`
- ✅ Tests laufen in Chrome, Firefox, Safari
- ✅ Tests sind stabil (keine Flakiness)

---

### Milestone 8: README & Release ✅

**Aufgaben**:
- **README.md** erstellen:
  \`\`\`markdown
  # @polar/measure-tool
  
  A POLAR plugin for measuring distances and areas on the map.
  
  ## Installation
  \\\`\\\`\\\`bash
  npm install @polar/measure-tool
  \\\`\\\`\\\`
  
  ## Usage
  \\\`\\\`\\\`typescript
  import { MeasureTool } from '@polar/measure-tool'
  
  const plugins = [
    MeasureTool({
      position: 'top-right',
      initialMode: 'distance'
    })
  ]
  \\\`\\\`\\\`
  
  ## API
  
  ### Options
  - \`position\`: NineLayoutTag position (default: 'top-right')
  - \`initialMode\`: 'distance' | 'area' (default: 'distance')
  
  ### Store Actions
  - \`startMeasurement({ mode })\`: Start measurement
  - \`stopMeasurement()\`: Stop measurement
  - \`clearMeasurements()\`: Remove all measurements
  
  ## License
  MIT
  \`\`\`

- **CHANGELOG.md** erstellen:
  \`\`\`markdown
  # Changelog - @polar/measure-tool
  
  ## [1.0.0] - 2024-02-13
  
  ### Added
  - Initial release
  - Distance measurement (geodetic, LineString)
  - Area measurement (geodetic, Polygon)
  - Vuetify UI with mode toggle
  - OpenLayers Draw integration
  - Unit tests (85% coverage)
  - E2E tests with Playwright
  \`\`\`

- **package.json** finalisieren:
  \`\`\`json
  {
    "name": "@polar/measure-tool",
    "version": "1.0.0",
    "description": "Measure distances and areas on POLAR maps",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "files": ["dist"],
    "publishConfig": {
      "access": "public"
    },
    "peerDependencies": {
      "@polar/core": "^2.0.0",
      "vue": "^3.3.0",
      "vuetify": "^3.0.0"
    }
  }
  \`\`\`

**Acceptance Criteria**:
- ✅ README ist vollständig und verständlich
- ✅ CHANGELOG folgt Keep a Changelog Format
- ✅ package.json ist korrekt konfiguriert
- ✅ Dry-Run: \`npm publish --dry-run\` erfolgreich

---

## 📊 Demo-Checkliste

Vor der finalen Präsentation stelle sicher:

### Funktionalität
- [ ] Snowbox startet ohne Fehler: \`npm run snowbox\`
- [ ] MeasureTool-Plugin ist sichtbar und korrekt positioniert
- [ ] Distanz-Messung funktioniert (mehrere Punkte klicken)
- [ ] Flächen-Messung funktioniert (Polygon zeichnen)
- [ ] Messergebnisse sind korrekt und formatiert (km, km²)
- [ ] Löschen-Button entfernt alle Messungen von Karte
- [ ] Beenden-Button stoppt aktuelle Messung
- [ ] Modi-Wechsel funktioniert ohne Reload

### Code-Qualität
- [ ] ESLint: \`npm run lint\` → keine Fehler
- [ ] TypeScript: \`npm run type-check\` → keine Fehler
- [ ] Unit-Tests: \`npm test MeasureTool\` → alle grün, Coverage ≥80%
- [ ] E2E-Tests: \`npm run test:e2e measureTool\` → alle grün
- [ ] Build: \`npm run build --scope=@polar/measure-tool\` → dist/ korrekt

### Dokumentation
- [ ] README.md mit klaren Anweisungen
- [ ] CHANGELOG.md mit v1.0.0-Eintrag
- [ ] Inline-Code-Kommentare für komplexe Logik
- [ ] TypeScript-Interfaces sind dokumentiert (JSDoc)

### Code-Review-Readiness
- [ ] Sinnvolle Commit-Messages (Conventional Commits)
- [ ] Branch-Name: \`feature/measure-tool-plugin\`
- [ ] PR-Beschreibung vorbereitet (Motivation, Changes, Screenshots)
- [ ] Keine Debug-Console-Logs im Production-Code
- [ ] Keine TODO-Kommentare ohne Tickets

---

## 🎓 Bewertungskriterien

| Kriterium | Gewichtung | Beschreibung |
|-----------|------------|--------------|
| **Funktionalität** | 25% | Feature funktioniert wie spezifiziert, keine Bugs |
| **Code-Qualität** | 25% | Sauberer Code, TypeScript-Types, ESLint-Compliance |
| **Tests** | 20% | Unit-Tests + E2E-Tests, Coverage ≥80% |
| **Architektur** | 15% | Plugin folgt POLAR-Patterns (Factory, Store, 9Layout) |
| **Dokumentation** | 10% | README, CHANGELOG, Code-Kommentare |
| **Git/Workflow** | 5% | Sinnvolle Commits, Branch-Management |

**Passing Grade**: ≥70% Gesamtpunktzahl

---

## 💡 Hilfreiche Ressourcen

- **OpenLayers Docs**: https://openlayers.org/en/latest/apidoc/
  - Draw Interaction: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html
  - Sphere Module (Distanz/Fläche): https://openlayers.org/en/latest/apidoc/module-ol_sphere.html

- **Vuetify Components**: https://vuetifyjs.com/en/components/
  - Buttons: https://vuetifyjs.com/en/components/buttons/
  - Cards: https://vuetifyjs.com/en/components/cards/

- **Playwright Docs**: https://playwright.dev/docs/intro
  - Mouse Actions: https://playwright.dev/docs/api/class-mouse

- **POLAR-Referenz-Plugins**:
  - Zoom-Plugin (einfach): \`packages/plugins/Zoom/\`
  - LayerChooser-Plugin (komplex): \`packages/plugins/LayerChooser/\`

---

**Viel Erfolg! 🚀** Bei Fragen wende dich an deinen Mentor oder nutze die POLAR-Community (Slack, GitHub Discussions).
`,vM=`# POLAR Curriculum – Evidenz-Mapping

## Übersicht

Dieses Dokument zeigt die Ableitung aller Curriculum-Inhalte aus konkreten Files im POLAR-Repository. Jedes Lernmodul, jede Aufgabe und jedes Konzept ist mit realen Code-Beispielen und Dokumenten verknüpft.

**Ziel**: Sicherstellen, dass das Curriculum auf der tatsächlichen POLAR-Architektur basiert und nicht theoretisch ist.

---

## Mapping-Tabelle

| Curriculum-Element | Woche | POLAR-Repository-Files | Konzepte abgeleitet von |
|-------------------|-------|------------------------|------------------------|
| **"POLAR in 15 Minuten"** | Quick Start | \`README.md\` (Root)<br>\`nx.json\`<br>\`packages/core/docs/gettingStarted.md\` | Repository-Struktur, Setup-Kommandos, Monorepo-Konfiguration |
| **Monorepo-Architektur** | Woche 1 | \`nx.json\`<br>\`package.json\` (Root)<br>\`packages/*/package.json\` | Nx-Workspaces, Shared Dependencies, Build-Targets |
| **Plugin Factory Pattern** | Woche 1 & 2 | \`packages/plugins/Zoom/index.ts\`<br>\`packages/plugins/LayerChooser/index.ts\` | Factory-Funktion, Plugin-Options-Interface |
| **Core Map-Initialisierung** | Woche 1 | \`packages/core/src/createMap.ts\` | OpenLayers-Map-Setup, Plugin-Lifecycle-Hooks |
| **Vuex-Store-Module** | Woche 2 | \`packages/plugins/Zoom/index.ts\` (storeModule)<br>\`packages/core/src/types/store.ts\` | Namespaced Modules, State/Getters/Actions/Mutations |
| **Vue-Components mit Vuetify** | Woche 2 | \`packages/plugins/Zoom/components/ZoomComponent.vue\` | v-btn, v-card, Vuex-Anbindung (mapActions, mapGetters) |
| **9Layout-System** | Woche 2 | \`packages/core/docs/9layout.md\`<br>\`packages/core/src/components/NineLayout.vue\` | NineLayoutTag, Positionierungs-Grid |
| **OpenLayers-Interactions** | Woche 2 | \`packages/plugins/MeasureTool/\` (falls vorhanden)<br>Alternative: Draw-Interaction-Beispiel in Docs | Draw, Select, Modify Interactions |
| **Generic Client (Snowbox)** | Woche 3 | \`packages/clients/generic/src/polar-client.ts\`<br>\`packages/clients/generic/src/addPlugins.ts\` | Vue-App-Setup, Plugin-Array-Konfiguration |
| **Client Map-Konfiguration** | Woche 3 | \`packages/clients/generic/src/mapConfiguration.ts\` | OpenLayers View, Layers, Projection-Setup |
| **Specialized Clients** | Woche 3 | \`packages/clients/specialized/\` (z.B. \`stadtplan/\`) | Client-spezifische Themes, Custom-Plugins |
| **Plugin-Chaining via Vuex** | Woche 3 | \`packages/clients/*/src/polar-client.ts\` (store.watch-Beispiele) | Reactive Plugin-Kommunikation über Store |
| **Jest-Konfiguration** | Woche 4 | \`jest.config.ts\`<br>\`packages/plugins/Zoom/__tests__/zoom.spec.ts\` | Unit-Tests für Store und Components |
| **createTestMountParameters** | Woche 4 | \`packages/core/src/test-utils/createTestMountParameters.ts\` | Vue Test Utils Helper für POLAR-Components |
| **Playwright E2E-Tests** | Woche 4 | \`e2e/zoom.spec.ts\`<br>\`playwright.config.ts\` | Browser-Interaktionen, Page-Object-Pattern |
| **Coverage-Thresholds** | Woche 4 | \`jest.config.ts\` (coverageThreshold) | 80% für Statements, Branches, Functions, Lines |
| **Semantic Versioning** | Woche 5 | \`CONTRIBUTING.md\` (Release-Section)<br>\`packages/*/package.json\` (version) | MAJOR.MINOR.PATCH-Schema |
| **CHANGELOG-Format** | Woche 5 | \`CHANGELOG.md\` (Root oder einzelne Packages) | Keep a Changelog Format (Added, Changed, Fixed, etc.) |
| **NPM-Publishing-Script** | Woche 5 | \`publishPackages.js\`<br>\`package.json\` (scripts: "publish:packages") | Automated Release-Workflow |
| **CI/CD-Pipeline** | Woche 5 | \`.github/workflows/release.yml\` (falls vorhanden)<br>Alternative: CI-Docs | GitHub Actions für Tests + NPM-Publish |
| **Conventional Commits** | Woche 5 | \`CONTRIBUTING.md\` (Commit-Konventionen)<br>Git-History (Beispiel-Commits) | \`feat:\`, \`fix:\`, \`BREAKING CHANGE:\` |
| **Capstone: MeasureTool** | Woche 5+ | \`packages/plugins/MeasureTool/\` (falls vorhanden)<br>Alternativen: \`AddressSearch\`, \`Draw\`-Plugin | Komplexes Plugin mit OpenLayers-Geometrie-Berechnungen |

---

## Detaillierte Evidenz pro Woche

### Woche 1: Architektur & Setup

#### Pflichtlektüre-Files im POLAR-Repo

1. **README.md** (Root)
   - **Relevante Abschnitte**: 
     - "Getting Started"
     - "Project Structure"
     - "Development Workflow"
   - **Lerninhalte abgeleitet**: Monorepo-Übersicht, Kommandos (\`npm run snowbox\`)

2. **nx.json**
   - **Relevante Abschnitte**: 
     - \`targets\` (build, test, lint)
     - \`implicitDependencies\`
   - **Lerninhalte abgeleitet**: Nx-Task-Orchestrierung, Dependency-Graph

3. **packages/core/docs/gettingStarted.md**
   - **Relevante Abschnitte**: 
     - "Core Concepts"
     - "Plugin Development Basics"
   - **Lerninhalte abgeleitet**: Map-Lifecycle, Store-Setup, Plugin-API

4. **packages/core/src/createMap.ts**
   - **Relevante Zeilen**: 
     - Map-Initialisierung (ca. Zeile 10-30)
     - Plugin-Registration-Loop (ca. Zeile 50-70)
   - **Lerninhalte abgeleitet**: OpenLayers-Integration, Plugin-Lifecycle-Hooks

5. **packages/clients/generic/src/polar-client.ts**
   - **Relevante Zeilen**: 
     - Vue-App-Setup (ca. Zeile 1-20)
     - Store + Router-Integration (ca. Zeile 25-40)
   - **Lerninhalte abgeleitet**: Client-Entry-Point, Vuex/Router-Setup

6. **packages/clients/generic/src/addPlugins.ts**
   - **Relevante Zeilen**: 
     - Plugin-Array-Definition (alle Zeilen)
     - Plugin-Factory-Aufrufe mit Options
   - **Lerninhalte abgeleitet**: Plugin-Registration, Store-Paths

---

### Woche 2: Plugin-Anatomie

#### Pflichtlektüre-Files im POLAR-Repo

1. **packages/plugins/Zoom/index.ts**
   - **Vollständige Datei** als Referenz-Implementierung
   - **Lerninhalte abgeleitet**: 
     - Factory-Pattern (\`export const Zoom = (options) => ...\`)
     - Store-Module-Definition (State, Getters, Actions, Mutations)
     - Plugin-Interface (\`name\`, \`storeModule\`, \`component\`)

2. **packages/plugins/Zoom/components/ZoomComponent.vue**
   - **Template-Abschnitt**: Vuetify-Buttons (v-btn), Icons (v-icon)
   - **Script-Abschnitt**: Vuex-Anbindung (computed, methods mit dispatch)
   - **Lerninhalte abgeleitet**: Vue 3 Composition API (oder Options API), Vuetify-Komponenten

3. **packages/plugins/LayerChooser/index.ts**
   - **Store-Module**: Komplexere State-Struktur (Array von Layers)
   - **Lerninhalte abgeleitet**: Verschachtelte Store-Logik, Array-Manipulation in Mutations

4. **packages/core/src/types/plugin.ts**
   - **Interface \`PolarPlugin\`**: Required und Optional Properties
   - **Lerninhalte abgeleitet**: TypeScript-Interfaces für Plugins, Type-Guards

5. **packages/core/docs/9layout.md**
   - **Relevante Abschnitte**: 
     - Grid-Zones-Diagramm
     - NineLayoutTag-Enum
   - **Lerninhalte abgeleitet**: Positionierungs-System, Responsive-Behavior

6. **packages/plugins/MeasureTool/** (oder ähnliches Tool-Plugin)
   - **Relevante Zeilen**: 
     - OpenLayers Draw-Interaction-Setup
     - Event-Listener (\`drawend\`, \`drawstart\`)
   - **Lerninhalte abgeleitet**: Map-Interaktionen, Geometrie-Handling

---

### Woche 3: Client-Entwicklung

#### Pflichtlektüre-Files im POLAR-Repo

1. **packages/clients/generic/src/polar-client.ts**
   - **Vue-App-Setup**: \`createApp()\`, Plugin-Installation (Vuetify, Router, Store)
   - **Lerninhalte abgeleitet**: Vue 3 App-Initialisierung, Global-Plugins

2. **packages/clients/generic/src/addPlugins.ts**
   - **Plugin-Array**: Alle registrierten Plugins
   - **Plugin-Options**: Beispiele für Options-Übergabe
   - **Lerninhalte abgeleitet**: Plugin-Konfiguration, Conditional-Plugins (via ENV-Variables)

3. **packages/clients/generic/src/mapConfiguration.ts**
   - **OpenLayers View**: Center, Zoom, MinZoom, MaxZoom
   - **Layers-Array**: Base-Layer (OSM, WMS)
   - **Lerninhalte abgeleitet**: Map-Config-Struktur, Layer-Definition

4. **packages/clients/specialized/** (z.B. \`stadtplan/\`)
   - **Custom-Theme**: Vuetify-Theme-Konfiguration
   - **Custom-Assets**: Logos, Farben
   - **Lerninhalte abgeleitet**: Client-spezifisches Branding

5. **packages/core/docs/clientGuide.md**
   - **Best Practices**: Deployment, Environment-Variables
   - **Lerninhalte abgeleitet**: Production-Build, Bundle-Optimierung

---

### Woche 4: Testing & Qualität

#### Pflichtlektüre-Files im POLAR-Repo

1. **jest.config.ts** (Root)
   - **Transform-Regeln**: Vue, TypeScript, ESM
   - **Coverage-Thresholds**: 80% für alle Metriken
   - **Lerninhalte abgeleitet**: Jest-Setup für Monorepo

2. **packages/plugins/Zoom/__tests__/zoom.spec.ts**
   - **Store-Tests**: Mutations, Actions, Getters
   - **Component-Tests**: Mount, User-Interaktionen
   - **Lerninhalte abgeleitet**: Unit-Test-Patterns für POLAR-Plugins

3. **packages/core/src/test-utils/createTestMountParameters.ts**
   - **Helper-Funktion**: Mount-Options mit Vuetify, Store, Mocks
   - **Lerninhalte abgeleitet**: Reusable Test-Utilities

4. **e2e/zoom.spec.ts**
   - **Playwright-Tests**: Page-Navigation, Element-Locators, Assertions
   - **Lerninhalte abgeleitet**: E2E-Test-Struktur, Browser-Interaktionen

5. **e2e/fixtures/mapFixture.ts** (falls vorhanden)
   - **Custom-Fixtures**: Map-Initialisierung für Tests
   - **Lerninhalte abgeleitet**: Playwright-Fixtures-Pattern

6. **CONTRIBUTING.md → Testing-Section**
   - **Test-Konventionen**: Naming, File-Structure
   - **PR-Requirements**: Coverage ≥ 80%
   - **Lerninhalte abgeleitet**: Team-weite Testing-Standards

---

### Woche 5: Release & Produktion

#### Pflichtlektüre-Files im POLAR-Repo

1. **publishPackages.js** (Root)
   - **Version-Bump-Logik**: Liest package.json, bumpt Version
   - **NPM-Publish-Command**: \`npm publish\` für jedes Package
   - **Lerninhalte abgeleitet**: Automatisiertes Release-Script

2. **CHANGELOG.md** (Root oder einzelne Packages)
   - **Format**: \`[Unreleased]\`, \`[1.2.0] - 2024-01-15\`
   - **Kategorien**: Added, Changed, Fixed, Deprecated, Removed, Security
   - **Lerninhalte abgeleitet**: Keep a Changelog Format

3. **CONTRIBUTING.md → Release-Section**
   - **Release-Workflow**: Pre-Checks, Version-Bump, Tag, Publish
   - **PR-Labels**: \`enhancement\`, \`bug\`, \`breaking-change\`
   - **Lerninhalte abgeleitet**: Git-Workflow für Releases

4. **.github/workflows/release.yml** (falls vorhanden)
   - **GitHub Actions-Steps**: Checkout, Setup Node, Install, Test, Build, Publish
   - **Secrets**: \`NPM_TOKEN\`, \`GITHUB_TOKEN\`
   - **Lerninhalte abgeleitet**: CI/CD für NPM-Publishing

5. **packages/core/package.json → publishConfig**
   - **Access-Level**: \`"public"\` oder \`"restricted"\`
   - **Registry**: Default oder Custom (z.B. GitHub Packages)
   - **Lerninhalte abgeleitet**: NPM-Registry-Konfiguration

6. **Semver-Dokumentation**: https://semver.org/lang/de/
   - **Externe Ressource**, aber in \`CONTRIBUTING.md\` referenziert
   - **Lerninhalte abgeleitet**: MAJOR.MINOR.PATCH-Schema

---

## Capstone-Projekt: MeasureTool-Plugin

### Evidenz-Files

1. **Referenz-Plugin im Repo** (falls vorhanden):
   - \`packages/plugins/MeasureTool/\` (vollständige Implementierung als Vorbild)
   - Alternative: \`packages/plugins/Draw/\` oder ähnliches Tool-Plugin

2. **OpenLayers-Dokumentation**:
   - Draw-Interaction: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html
   - Sphere-Module: https://openlayers.org/en/latest/apidoc/module-ol_sphere.html

3. **E2E-Test-Beispiel**:
   - \`e2e/zoom.spec.ts\` (als Pattern für MeasureTool-E2E-Tests)

### Capstone-Anforderungen abgeleitet von

- **Funktionale Anforderungen**: Kombinieren typische POLAR-Plugin-Features (UI, Store, Map-Interaction)
- **Technische Anforderungen**: Basieren auf POLAR-Best-Practices aus Wochen 1-5
- **Meilensteine**: Spiegeln den iterativen Plugin-Development-Workflow wider

---

## Validierung der Evidenz

### Checkliste für Curriculum-Maintainer

Beim Update des Curriculums:

- [ ] **Alle referenzierten Files existieren** im POLAR-Repository (oder Alternatives sind dokumentiert)
- [ ] **Zeilen-/Abschnitts-Referenzen sind aktuell** (Files können sich ändern)
- [ ] **Externe Links sind gültig** (z.B. OpenLayers-Docs, Semver-Docs)
- [ ] **Beispiel-Code kompiliert** (Copy-Paste aus Curriculum sollte funktionieren)
- [ ] **Tests sind ausführbar** (Quiz-Antworten sind korrekt, Tasks sind machbar)

### Bei POLAR-Repository-Updates

Wenn POLAR-Repo sich ändert (z.B. Breaking Changes, neue Features):

1. **Evidenz-Mapping reviewen**: Sind referenzierte Files noch vorhanden?
2. **Curriculum anpassen**: Beispiel-Code aktualisieren
3. **Tests updaten**: Quiz-Fragen, Task-Beschreibungen anpassen
4. **CHANGELOG pflegen**: Dokumentiere Curriculum-Änderungen

---

## Zusammenfassung

**Alle Curriculum-Inhalte** basieren auf realen POLAR-Repository-Files:

- **Woche 1**: \`README.md\`, \`nx.json\`, \`createMap.ts\`, \`addPlugins.ts\`
- **Woche 2**: \`Zoom/index.ts\`, \`ZoomComponent.vue\`, \`9layout.md\`
- **Woche 3**: \`polar-client.ts\`, \`mapConfiguration.ts\`, Specialized-Clients
- **Woche 4**: \`jest.config.ts\`, \`zoom.spec.ts\`, \`createTestMountParameters.ts\`
- **Woche 5**: \`publishPackages.js\`, \`CHANGELOG.md\`, \`CONTRIBUTING.md\`
- **Capstone**: \`MeasureTool/\` (oder ähnliche Tool-Plugins)

**Keine theoretischen Konzepte ohne Code-Basis!** Jedes Lernziel ist mit konkreten Implementierungen verknüpft.
`,wM=`# POLAR – Einführung ins Framework

## 🧭 Was ist POLAR?

**POLAR** (Plugins for OpenLAyeRs) ist eine **Open-Source Bibliothek von Dataport**, mit der man **konfigurierbare, modulare Karten-Clients** für Webanwendungen erstellen kann – besonders für den öffentlichen Sektor (Verwaltungsprozesse, Bürgerportale).

### Kernmerkmale

* ⭐️ **EUPL-Lizenz** – freie Nutzung in Europa
* 📦 **Plugin-basierte Architektur** – einzelne Funktionen als wiederverwendbare Module
* 🗺️ **Basierend auf OpenLayers** + MasterportalAPI + Vue/TypeScript
* 📱 **Responsive, mobile-freundlich** UI
* 🏢 Wird produktiv in Behörden genutzt (Hamburg, Schleswig-Holstein, Bremen)

## 🎯 Einsatzzweck

POLAR kann entweder als **Stand-alone Karte** in Webseiten eingebunden oder als **Teil eines Formulars/Prozesses** verwendet werden (z. B. Geodaten-Eingabe in Verwaltungsanträgen).

### Beispiele für Anwendungsfälle

* Bürger können Parzellen markieren oder Positionen setzen
* Verwaltung kann Karten im Antragssystem nutzen
* Geodaten visualisieren und auswerten

## 🏗️ Architektur

POLAR besteht aus **kleinen, isolierten Modulen**:

* Jedes Modul kapselt eine spezifische Funktionalität
* Module lassen sich kombinieren und ersetzen
* Für client-spezifische Logik können eigene Plugins ergänzt werden

## 🔌 Wichtige Plugins

| Plugin | Funktion |
|--------|----------|
| **AddressSearch** | Suchfeld für Adressen inkl. Reverse-Geocoding |
| **Pins** | Marker setzen/verschieben |
| **Routing** | Routenberechnung (OpenRouteService) |
| **LayerChooser** | Auswahl von Hintergrund- & Overlay-Layers |
| **Gfi** | Feature-Informationen anzeigen |
| **Draw** | Geometrien einzeichnen |
| **Export** | Screenshot/Funktionen exportieren |
| **Zoom, Toast, Scale** | UI-Elemente (Zoom, Infomeldungen, Maßstab) |

## 🚀 Quick Start

### Installation

\`\`\`bash
npm install @polar/client-generic
\`\`\`

### Einfaches Beispiel

\`\`\`javascript
import polar from '@polar/client-generic'

polar.createMap({
  containerId: 'polarstern',
  services: 'https://geodienste.hamburg.de/services-internet.json',
  mapConfiguration: {
    layers: [{ id: '453', visibility: true, type: 'background' }]
  }
})
\`\`\`

\`\`\`html
<div id="polarstern" style="width:680px; height:420px;"></div>
\`\`\`

## 📚 Ressourcen

* **GitHub**: [https://github.com/Dataport/polar](https://github.com/Dataport/polar)
* **Website**: [https://dataport.github.io/polar/](https://dataport.github.io/polar/)
* **Dokumentation**: [https://dataport.github.io/polar/documentation.html](https://dataport.github.io/polar/documentation.html)

## ✅ Lernziel

Wenn du verstehst, was POLAR ist, wie die Plugin-Architektur funktioniert und wie man eine einfache Karte einbindet, kannst du diese Lektion als abgeschlossen markieren.
`,SM=`# POLAR in 15 Minuten

## Was ist POLAR?

**POLAR** (Plugin-based OpenLayers Application Runtime) ist ein modernes OpenLayers-Plugin-Framework, das auf Vue 3, Vuetify und Vuex basiert. Es ermöglicht die schnelle Entwicklung von WebGIS-Anwendungen durch ein modulares Plugin-System.

### Kernmerkmale
- 🧩 **Plugin-basierte Architektur**: Jede Feature ist ein eigenständiges, wiederverwendbares Plugin
- 📦 **Monorepo-Struktur**: Alle Packages (Core, Plugins, Clients) in einem Repository
- 🎨 **Vue 3 + Vuetify**: Moderne Reactive UI mit Material Design
- 🗺️ **OpenLayers Integration**: Vollständige Karteninteraktionen und Layer-Management
- 🔄 **Vuex State Management**: Zentrale Store-Architektur für Plugin-Kommunikation

## Repo-Struktur

\`\`\`
polar/
├── packages/
│   ├── core/                  # Kern-Framework (createMap, Store-Setup)
│   │   ├── src/
│   │   │   ├── createMap.ts   # Map-Initialisierung
│   │   │   ├── types/         # TypeScript-Definitionen
│   │   │   └── utils/         # Hilfs-Funktionen
│   │   └── package.json
│   │
│   ├── plugins/               # Alle Plugins (Zoom, LayerChooser, etc.)
│   │   ├── Zoom/
│   │   │   ├── index.ts       # Plugin Factory & Store
│   │   │   ├── components/    # Vue-Components
│   │   │   └── types.ts       # Plugin-spezifische Types
│   │   ├── LayerChooser/
│   │   ├── AddressSearch/
│   │   └── ...
│   │
│   ├── clients/               # Anwendungs-Clients
│   │   ├── generic/           # Generic Client (Snowbox)
│   │   │   ├── src/
│   │   │   │   ├── polar-client.ts      # Client-Entry
│   │   │   │   ├── addPlugins.ts        # Plugin-Registration
│   │   │   │   └── mapConfiguration.ts  # Map-Config
│   │   │   └── index.html
│   │   └── specialized/       # Spezialisierte Clients
│   │
│   └── lib-build/             # Build-Tools (Vite Config)
│
├── e2e/                       # Playwright E2E-Tests
│   ├── zoom.spec.ts
│   └── fixtures/
│
├── nx.json                    # Nx Monorepo Config
├── jest.config.ts             # Test Config
├── publishPackages.js         # Release Script
└── README.md                  # Haupt-Dokumentation
\`\`\`

## Setup-Kommandos

### Voraussetzungen
- Node.js ≥ 18
- npm ≥ 9

### Installation

\`\`\`bash
# Repository klonen
git clone https://github.com/your-org/polar.git
cd polar

# Dependencies installieren
npm install

# Snowbox (Generic Client) starten
npm run snowbox

# Browser öffnet automatisch: http://localhost:5173
\`\`\`

### Weitere Kommandos

\`\`\`bash
# Alle Tests ausführen
npm test

# E2E-Tests
npm run test:e2e

# Type-Checking
npm run type-check

# Spezifisches Plugin builden
npm run build --scope=@polar/zoom

# Alle Packages builden
npm run build:all
\`\`\`

## Erste Anlaufstellen – Map

### 1. **README.md** (Repo-Root)
   - Architektur-Übersicht
   - Getting Started Guide
   - Contribution Guidelines

### 2. **packages/core/docs/gettingStarted.md**
   - Setup-Details
   - Core-Konzepte (Store, Map-Lifecycle)
   - Plugin-Development Basics

### 3. **packages/plugins/Zoom/index.ts**
   - Referenz-Implementierung eines einfachen Plugins
   - Factory Pattern
   - Store-Module-Registration

### 4. **packages/clients/generic/src/addPlugins.ts**
   - Wie Plugins registriert werden
   - Plugin-Konfiguration und -Initialisierung
   - Vuex-Paths und Store-Mapping

### 5. **packages/core/src/createMap.ts**
   - Map-Initialisierung
   - Plugin-Lifecycle
   - Store-Setup

### 6. **e2e/zoom.spec.ts**
   - E2E-Test-Beispiel
   - Playwright-Patterns
   - UI-Interaktions-Tests

### 7. **CONTRIBUTING.md**
   - Code-Style & Linting
   - PR-Prozess
   - Release-Workflow

## Nächste Schritte

1. **Snowbox lokal starten** und mit der Karte interagieren
2. **Plugin-Liste erkunden**: Alle verfügbaren Plugins in \`packages/plugins/\`
3. **Ein einfaches Plugin lesen**: Start mit \`Zoom\` oder \`PanButtons\`
4. **Store-Architektur verstehen**: DevTools öffnen und Vuex-State inspizieren
5. **Erstes Feature-Branch**: \`git checkout -b feature/my-first-change\`

---

**Tipp**: Nutze die Browser DevTools (F12) → Vue Tab, um die Component-Hierarchie und Vuex-State live zu inspizieren!
`,bM=`# Woche 1: POLAR-Architektur & Setup

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Die Monorepo-Struktur von POLAR navigieren und verstehen
- Snowbox lokal starten und debuggen
- Die Rolle von Core, Plugins und Clients erklären
- Das Plugin-System und Factory Pattern beschreiben
- Den Vuex-Store inspizieren und Plugin-State nachvollziehen

## 📚 Pflichtlektüre

Lies die folgenden Files im POLAR-Repository:

1. **README.md** (Repo-Root)
   - Überblick über das gesamte Projekt
   - Architektur-Diagramm
   - Quick Start Guide

2. **nx.json**
   - Monorepo-Konfiguration mit Nx
   - Build-Targets und Task-Dependencies
   - Verstehe, wie \`npm run snowbox\` intern aufgelöst wird

3. **packages/core/docs/gettingStarted.md**
   - Core-Konzepte: Map-Lifecycle, Store-Setup
   - Plugin-Entwicklung Basics
   - API-Übersicht

4. **packages/core/src/createMap.ts**
   - Entry-Point der Map-Initialisierung
   - Plugin-Registration und -Lifecycle
   - OpenLayers-Integration

5. **packages/clients/generic/src/polar-client.ts**
   - Client-Entry-Point
   - Vue-App-Setup
   - Router und Store-Integration

6. **packages/clients/generic/src/addPlugins.ts**
   - Wie Plugins zum Client hinzugefügt werden
   - Plugin-Konfiguration
   - Store-Paths und Namespacing

## 🏗️ Architektur-Konzepte

### Monorepo-Struktur

POLAR nutzt Nx als Monorepo-Tool:
- **Packages**: Einzelne NPM-Packages mit eigenen \`package.json\`
- **Shared Dependencies**: \`node_modules\` im Root
- **Task Orchestration**: \`nx run <target>\` für Builds, Tests, etc.

### Core, Plugins, Clients

\`\`\`
┌─────────────────────────────────────────┐
│           Client (Snowbox)              │
│  - Vue App Entry                        │
│  - Plugin Registration (addPlugins.ts)  │
│  - Map Configuration                    │
└────────────┬────────────────────────────┘
             │ importiert
             ↓
┌─────────────────────────────────────────┐
│              Core                       │
│  - createMap()                          │
│  - Store-Setup                          │
│  - Plugin-Lifecycle                     │
└────────────┬────────────────────────────┘
             │ lädt
             ↓
┌─────────────────────────────────────────┐
│         Plugins (Zoom, etc.)            │
│  - Factory-Funktion                     │
│  - Store-Module                         │
│  - Vue-Components                       │
└─────────────────────────────────────────┘
\`\`\`

### Plugin-Lifecycle

1. **Registration**: Client ruft Plugin-Factory in \`addPlugins.ts\`
2. **Store-Module**: Plugin registriert Vuex-Module
3. **Component-Mounting**: Vue-Component wird in 9Layout eingehängt
4. **Map-Interaction**: Plugin interagiert mit OpenLayers-Map via Core-API

### Factory Pattern

Jedes Plugin exportiert eine Factory-Funktion:

\`\`\`typescript
export const Zoom = (options?: ZoomOptions) => {
  return {
    name: 'zoom',
    storeModule: zoomStoreModule,
    component: ZoomComponent,
    // ...weitere Config
  }
}
\`\`\`

Vorteile:
- **Konfigurierbar**: Options können übergeben werden
- **Lazy Loading**: Plugin wird erst bei Bedarf initialisiert
- **Testbar**: Factory kann mit Mock-Options getestet werden

## 🔍 Hands-on: Snowbox erkunden

### Task 1: Snowbox starten und DevTools nutzen

1. Starte Snowbox: \`npm run snowbox\`
2. Öffne Browser DevTools (F12)
3. Navigiere zum **Vue Tab** (ggf. Vue DevTools Extension installieren)
4. Inspiziere die Component-Hierarchie: Finde \`<Zoom>\`, \`<LayerChooser>\`, etc.
5. Wechsle zum **Vuex Tab**:
   - Finde das \`zoom\`-Modul im State
   - Trigger eine Zoom-Action (+ Button in der Karte klicken)
   - Beobachte die State-Änderung in DevTools

### Task 2: Plugin-Liste erstellen

Erstelle eine Markdown-Liste aller verfügbaren Plugins:

1. Navigiere zu \`packages/plugins/\`
2. Liste alle Ordner auf
3. Für jedes Plugin: Öffne \`index.ts\` und notiere den Plugin-Namen (aus Factory-Export)
4. Gruppiere Plugins nach Kategorie (z.B. "Map Control", "Layer Management", "Tools")

Beispiel-Struktur:
\`\`\`markdown
## Map Controls
- Zoom
- PanButtons
- ...

## Layer Management
- LayerChooser
- ...
\`\`\`

### Task 3: Store-Struktur dokumentieren

Öffne \`packages/core/src/types/store.ts\` (oder ähnliche Type-Definition) und:

1. Identifiziere das Root-State-Interface
2. Liste alle Top-Level-Module auf (z.B. \`map\`, \`plugins\`, ...)
3. Erkläre in eigenen Worten, warum Plugins ihre eigenen Store-Module haben

## 📝 Knowledge Check

Beantworte die folgenden Fragen (schriftlich oder im Pair-Discussion):

1. **Was ist der Unterschied zwischen einem Client und einem Plugin?**
   - Client = Anwendung (z.B. Snowbox), die Plugins nutzt
   - Plugin = Feature-Modul (z.B. Zoom), das in Clients integriert wird

2. **Warum nutzt POLAR ein Monorepo statt separater Repositories?**
   - Gemeinsame Dependencies
   - Atomare Commits über Package-Grenzen hinweg
   - Einfachere lokale Entwicklung (kein npm link)

3. **Wo wird die OpenLayers-Map-Instanz erstellt?**
   - In \`packages/core/src/createMap.ts\`

4. **Wie kommunizieren Plugins untereinander?**
   - Über den zentralen Vuex-Store
   - Plugins können State anderer Plugins lesen (via Getters)
   - Plugins können Actions anderer Plugins dispatchen

5. **Was ist der Vorteil des Factory Patterns bei Plugins?**
   - Konfigurierbarkeit zur Laufzeit
   - Lazy Initialization
   - Bessere Testbarkeit

## 🚀 Bonus-Challenge

Erstelle ein minimales "Hello World"-Plugin:

1. Erstelle einen neuen Ordner: \`packages/plugins/HelloWorld/\`
2. Implementiere:
   - \`index.ts\` mit Factory-Funktion
   - Einfaches Store-Module (State mit \`message: 'Hello POLAR!'\`)
   - Vue-Component, die \`message\` anzeigt
3. Registriere Plugin in \`addPlugins.ts\`
4. Starte Snowbox und verifiziere, dass "Hello POLAR!" angezeigt wird

Akzeptanzkriterien:
- ✅ Plugin erscheint in Vuex-DevTools unter \`plugins/helloWorld\`
- ✅ Component ist im DOM sichtbar
- ✅ Keine TypeScript-Fehler

---

**Checkpoint**: Bis Ende Woche 1 solltest du Snowbox fehlerfrei starten können und die grundlegende Architektur verstehen. Alle Fragen klären, bevor du zu Woche 2 gehst!
`,EM=`# Woche 2: Plugin-Anatomie

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Ein neues Plugin von Grund auf erstellen
- Store-Module mit State, Getters, Actions und Mutations implementieren
- Vue-Components mit Vuetify-Komponenten bauen
- Das 9Layout-System verstehen und nutzen
- OpenLayers-Interactions in Plugins integrieren

## 📚 Pflichtlektüre

1. **packages/plugins/Zoom/index.ts**
   - Vollständige Plugin-Implementierung
   - Store-Module-Definition
   - Factory-Funktion mit Options

2. **packages/plugins/Zoom/components/ZoomComponent.vue**
   - Vuetify-Button-Components
   - Vuex-Store-Anbindung (mapActions, mapGetters)
   - Event-Handling

3. **packages/plugins/LayerChooser/index.ts**
   - Komplexeres Plugin-Beispiel
   - Verschachtelte Store-Structure (Layer-Array)
   - Dynamische Component-Rendering

4. **packages/core/src/types/plugin.ts**
   - Plugin-Interface-Definition
   - Pflichtfelder und optionale Properties
   - Type-Guards

5. **packages/core/docs/9layout.md**
   - Dokumentation des 9-Zonen-Layout-Systems
   - NineLayoutTag und Positionierung
   - Responsive Behavior

6. **packages/plugins/MeasureTool/** (falls vorhanden, sonst ähnliches Tool-Plugin)
   - OpenLayers-Interaction-Beispiel
   - Event-Listener-Management
   - Geometrie-Berechnungen

## 🏗️ Plugin-Anatomie im Detail

### Dateistruktur eines Plugins

\`\`\`
packages/plugins/MyPlugin/
├── index.ts              # Factory & Store-Export
├── types.ts              # TypeScript Interfaces
├── components/
│   ├── MyPluginComponent.vue    # Haupt-Component
│   └── MyPluginSubComponent.vue # Sub-Components
├── utils/
│   └── calculations.ts   # Helper-Funktionen
├── __tests__/
│   └── myPlugin.spec.ts  # Unit-Tests
└── package.json          # Plugin-Dependencies
\`\`\`

### Factory-Funktion (index.ts)

\`\`\`typescript
import { MyPluginOptions } from './types'
import MyPluginComponent from './components/MyPluginComponent.vue'

// Store-Module
const myPluginStore = {
  namespaced: true,
  state: () => ({
    active: false,
    value: 0
  }),
  getters: {
    isActive: (state) => state.active
  },
  mutations: {
    SET_ACTIVE(state, active) {
      state.active = active
    }
  },
  actions: {
    toggle({ commit, state }) {
      commit('SET_ACTIVE', !state.active)
    }
  }
}

// Factory
export const MyPlugin = (options?: MyPluginOptions) => ({
  name: 'myPlugin',
  storeModule: myPluginStore,
  component: MyPluginComponent,
  nineLayoutTag: options?.position || 'top-left',
  // Weitere Config...
})
\`\`\`

### Vue-Component mit Vuetify

\`\`\`vue
<template>
  <v-card class="my-plugin">
    <v-card-title>My Plugin</v-card-title>
    <v-card-text>
      <v-btn @click="handleClick" color="primary">
        Action
      </v-btn>
      <div>{{ currentValue }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const currentValue = computed(() => 
  store.getters['plugins/myPlugin/getValue']
)

const handleClick = () => {
  store.dispatch('plugins/myPlugin/increment')
}
<\/script>

<style scoped>
.my-plugin {
  max-width: 300px;
}
</style>
\`\`\`

## 🎨 9Layout-System

POLAR nutzt ein 9-Zonen-Grid für Plugin-Positionierung:

\`\`\`
┌─────────────────────────────────────┐
│ top-left    top-center   top-right  │
│                                     │
│                                     │
│ mid-left      (Map)      mid-right │
│                                     │
│                                     │
│ bottom-left bottom-center bottom-.. │
└─────────────────────────────────────┘
\`\`\`

**NineLayoutTag**: Jedes Plugin definiert seine Position via \`nineLayoutTag\` Property.

Beispiele:
- \`Zoom\` → \`top-left\`
- \`LayerChooser\` → \`top-right\`
- \`Attribution\` → \`bottom-right\`

## 🔧 OpenLayers-Integration

### Map-Zugriff im Plugin

\`\`\`typescript
// In Store-Action
actions: {
  zoomIn({ rootGetters }) {
    const map = rootGetters['map/getMap'] // OpenLayers Map-Instanz
    const view = map.getView()
    view.animate({ zoom: view.getZoom() + 1 })
  }
}
\`\`\`

### Interaction hinzufügen

\`\`\`typescript
import { Draw } from 'ol/interaction'
import { Vector as VectorSource } from 'ol/source'

actions: {
  startDrawing({ rootGetters, commit }) {
    const map = rootGetters['map/getMap']
    const source = new VectorSource()
    
    const drawInteraction = new Draw({
      source,
      type: 'LineString'
    })
    
    drawInteraction.on('drawend', (event) => {
      commit('ADD_FEATURE', event.feature)
    })
    
    map.addInteraction(drawInteraction)
    commit('SET_DRAW_INTERACTION', drawInteraction)
  },
  
  stopDrawing({ state, rootGetters }) {
    if (state.drawInteraction) {
      const map = rootGetters['map/getMap']
      map.removeInteraction(state.drawInteraction)
    }
  }
}
\`\`\`

## 🛠️ Hands-on: Counter-Plugin erstellen

Erstelle ein vollständiges "Counter"-Plugin mit folgenden Features:

### Requirements
- **UI**: Zwei Buttons (+ / -) und Anzeige des aktuellen Werts
- **Store**: State mit \`count\`, Actions \`increment\` / \`decrement\`, Getter \`getCount\`
- **Position**: \`top-left\` im 9Layout
- **Styling**: Vuetify-Components mit Primary-Color

### Acceptance Criteria
- ✅ Counter startet bei 0
- ✅ Buttons funktionieren und ändern den Count
- ✅ Store-Modul ist unter \`plugins/counter\` registriert
- ✅ Component nutzt Vuetify (\`v-btn\`, \`v-card\`)
- ✅ TypeScript ohne Fehler
- ✅ Plugin erscheint in Snowbox an korrekter Position

### Schritt-für-Schritt

1. **Ordner erstellen**: \`packages/plugins/Counter/\`
2. **types.ts**: Interface für Options definieren
3. **index.ts**: Factory + Store-Module implementieren
4. **components/CounterComponent.vue**: UI bauen
5. **addPlugins.ts**: Plugin registrieren: \`Counter()\`
6. **Testen**: Snowbox starten und Counter bedienen

## 📝 Knowledge Check

1. **Was ist der Unterschied zwischen einem Getter und einer Computed Property in der Component?**
   - Getter: Vuex-Store-Ebene (für Store-Logik)
   - Computed: Component-Ebene (nutzt oft Getter)

2. **Warum ist \`namespaced: true\` im Store-Module wichtig?**
   - Verhindert Namenskollisionen zwischen Plugins
   - Ermöglicht Scoped Actions/Mutations: \`plugins/myPlugin/action\`

3. **Wann sollte man eine Action statt einer Mutation nutzen?**
   - Actions für asynchrone Operationen (API-Calls, Map-Interactions)
   - Mutations nur für synchrone State-Änderungen

4. **Wie greift ein Plugin auf die OpenLayers-Map zu?**
   - Via \`rootGetters['map/getMap']\` im Store

5. **Was passiert, wenn zwei Plugins den gleichen \`nineLayoutTag\` haben?**
   - Beide werden in der gleichen Zone gerendert (übereinander oder nebeneinander, je nach CSS)

## 🚀 Bonus-Challenge

Erweitere das Counter-Plugin:

1. **Reset-Button**: Setzt Counter auf 0 zurück
2. **Persistent State**: Speichere Count im LocalStorage und lade beim Start
3. **Max-Value**: Warnung (Toast oder Dialog), wenn Counter > 10
4. **Animation**: Vuetify Transition beim Count-Wechsel
5. **Unit-Tests**: Teste Store-Actions mit Jest

---

**Checkpoint**: Du solltest jetzt eigenständig neue Plugins erstellen können. In Woche 3 lernst du, wie Clients Plugins konfigurieren und Specialized Clients aufgebaut werden.
`,MM=`# Woche 3: Client-Entwicklung

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Den Unterschied zwischen Generic und Specialized Clients erklären
- Einen neuen Client von Grund auf aufsetzen
- Plugins via \`addPlugins.ts\` konfigurieren und initialisieren
- Map-Konfigurationen (Layer, View, Controls) anpassen
- Plugin-Chaining via Vuex-Paths implementieren
- Client-spezifische Themes und Layouts erstellen

## 📚 Pflichtlektüre

1. **packages/clients/generic/src/polar-client.ts**
   - Client-Entry-Point
   - Vue-App-Setup mit Router und Store
   - Vuetify-Konfiguration

2. **packages/clients/generic/src/addPlugins.ts**
   - Plugin-Array-Definition
   - Plugin-Options übergeben
   - Store-Paths für Plugin-Kommunikation

3. **packages/clients/generic/src/mapConfiguration.ts**
   - OpenLayers-Map-Config (View, Layers, Projection)
   - Initial-Extent und Zoom-Levels
   - Base-Layer-Definition

4. **packages/clients/specialized/** (falls vorhanden, z.B. \`clients/stadtplan/\`)
   - Spezialisierter Client-Aufbau
   - Custom-Plugins und -Themes
   - Client-spezifische Assets

5. **packages/core/docs/clientGuide.md**
   - Best Practices für Client-Entwicklung
   - Deployment-Strategien
   - Environment-Variables

## 🏗️ Generic vs. Specialized Clients

### Generic Client (Snowbox)

**Zweck**: Entwicklungs- und Demo-Umgebung
- Enthält **alle** verfügbaren Plugins
- Flexible Konfiguration
- Gut für Testing und Prototyping

**Struktur**:
\`\`\`
packages/clients/generic/
├── src/
│   ├── polar-client.ts       # Entry
│   ├── addPlugins.ts         # Alle Plugins
│   ├── mapConfiguration.ts   # Standard-Map-Config
│   └── index.html
├── public/                   # Assets
└── vite.config.js
\`\`\`

### Specialized Client (z.B. Stadtplan)

**Zweck**: Produktions-Anwendung mit spezifischem Feature-Set
- Nur benötigte Plugins
- Custom-Branding und Theme
- Optimierter Build (kleinere Bundle-Size)

**Struktur**:
\`\`\`
packages/clients/stadtplan/
├── src/
│   ├── polar-client.ts
│   ├── addPlugins.ts         # Nur benötigte Plugins
│   ├── mapConfiguration.ts   # Stadt-spezifische Config
│   ├── theme/
│   │   └── stadtplan-theme.ts # Custom Vuetify-Theme
│   └── assets/
│       └── logo-stadtplan.svg
└── vite.config.js            # Client-spezifische Build-Config
\`\`\`

## 🔌 Plugin-Konfiguration in addPlugins.ts

### Basis-Beispiel

\`\`\`typescript
import { Zoom } from '@polar/zoom'
import { LayerChooser } from '@polar/layer-chooser'
import { AddressSearch } from '@polar/address-search'

export const plugins = [
  // Plugin ohne Options
  Zoom(),
  
  // Plugin mit Options
  LayerChooser({
    position: 'top-right',
    initiallyOpen: true,
    allowLayerReordering: true
  }),
  
  // Plugin mit Service-Config
  AddressSearch({
    serviceUrl: 'https://api.example.com/geocode',
    minSearchLength: 3,
    debounceTime: 300
  })
]
\`\`\`

### Advanced: Conditional Plugins

\`\`\`typescript
export const plugins = [
  Zoom(),
  
  // Nur in Production
  ...(import.meta.env.PROD ? [Analytics()] : []),
  
  // Basierend auf Feature-Flag
  ...(import.meta.env.VITE_ENABLE_3D === 'true' ? [ThreeDView()] : [])
]
\`\`\`

## 🗺️ Map-Konfiguration

### mapConfiguration.ts

\`\`\`typescript
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'

export const createMapConfiguration = () => {
  return {
    target: 'map', // DOM-Element-ID
    
    view: new View({
      center: fromLonLat([10.0, 53.5]), // Hamburg
      zoom: 12,
      minZoom: 8,
      maxZoom: 19
    }),
    
    layers: [
      // Base Layer
      new TileLayer({
        source: new OSM(),
        properties: { name: 'OpenStreetMap' }
      })
    ],
    
    controls: [] // Defaults von OpenLayers überschreiben
  }
}
\`\`\`

### Client-spezifische Layer

\`\`\`typescript
// Stadtplan-Client mit WMS-Layer
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'

const stadtplanLayer = new TileLayer({
  source: new TileWMS({
    url: 'https://stadtplan.example.com/wms',
    params: {
      'LAYERS': 'stadtplan_basiskarte',
      'TILED': true
    },
    serverType: 'geoserver'
  }),
  properties: { name: 'Stadtplan Basiskarte' }
})
\`\`\`

## 🔗 Plugin-Chaining via Vuex-Paths

**Szenario**: Ein AddressSearch-Plugin soll nach erfolgreicher Suche automatisch zum Ergebnis zoomen.

### AddressSearch Store (vereinfacht)

\`\`\`typescript
// In @polar/address-search
const store = {
  state: () => ({
    selectedResult: null
  }),
  mutations: {
    SET_RESULT(state, result) {
      state.selectedResult = result
    }
  }
}
\`\`\`

### Zoom Store horcht auf AddressSearch

\`\`\`typescript
// In @polar/zoom
const store = {
  actions: {
    // Action wird von außen getriggert
    zoomToCoordinate({ rootGetters }, { lon, lat }) {
      const map = rootGetters['map/getMap']
      map.getView().animate({
        center: fromLonLat([lon, lat]),
        zoom: 16,
        duration: 1000
      })
    }
  }
}
\`\`\`

### Verknüpfung im Client

\`\`\`typescript
// In polar-client.ts oder als Plugin-Option
store.watch(
  (state) => state.plugins.addressSearch.selectedResult,
  (newResult) => {
    if (newResult) {
      store.dispatch('plugins/zoom/zoomToCoordinate', {
        lon: newResult.lon,
        lat: newResult.lat
      })
    }
  }
)
\`\`\`

**Alternative**: Events via Event-Bus (falls im Core implementiert)

## 🛠️ Hands-on: Eigenen Client erstellen

### Task: "Dashboard-Client" aufsetzen

Erstelle einen spezialisierten Client für ein Verwaltungs-Dashboard.

#### Requirements
- **Plugins**: Nur Zoom, LayerChooser, Legend (keine Adresssuche, kein Routing)
- **Map**: Fokus auf Berlin (13.4, 52.5), Zoom 10-18
- **Theme**: Custom Vuetify-Theme mit Blau-Tönen (Primary: #1E3A8A)
- **Logo**: Eigenes Logo in der TopBar

#### Schritte

1. **Client-Ordner erstellen**
   \`\`\`bash
   mkdir -p packages/clients/dashboard/src
   cd packages/clients/dashboard
   \`\`\`

2. **package.json** (kopiere von \`generic/package.json\`, passe \`name\` an)

3. **vite.config.js**
   \`\`\`javascript
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   
   export default defineConfig({
     plugins: [vue()],
     server: {
       port: 5174
     }
   })
   \`\`\`

4. **src/polar-client.ts** (adaptiere von Generic Client)

5. **src/addPlugins.ts**
   \`\`\`typescript
   import { Zoom } from '@polar/zoom'
   import { LayerChooser } from '@polar/layer-chooser'
   import { Legend } from '@polar/legend'
   
   export const plugins = [
     Zoom({ position: 'top-left' }),
     LayerChooser({ position: 'top-right' }),
     Legend({ position: 'bottom-right' })
   ]
   \`\`\`

6. **src/mapConfiguration.ts**
   \`\`\`typescript
   import { fromLonLat } from 'ol/proj'
   // ...
   center: fromLonLat([13.4, 52.5]), // Berlin
   zoom: 11
   \`\`\`

7. **src/theme/dashboard-theme.ts**
   \`\`\`typescript
   export const dashboardTheme = {
     primary: '#1E3A8A',
     secondary: '#64748B',
     accent: '#3B82F6'
   }
   \`\`\`

8. **NPM-Script hinzufügen** (in Root \`package.json\`)
   \`\`\`json
   "scripts": {
     "dashboard": "vite packages/clients/dashboard"
   }
   \`\`\`

9. **Testen**: \`npm run dashboard\` → Browser öffnet auf \`localhost:5174\`

#### Acceptance Criteria
- ✅ Dashboard-Client startet auf Port 5174
- ✅ Nur 3 Plugins sind sichtbar (Zoom, LayerChooser, Legend)
- ✅ Karte zeigt Berlin als Initial-View
- ✅ Custom-Theme ist aktiv (Buttons sind blau #1E3A8A)
- ✅ Keine Build-Errors

## 📝 Knowledge Check

1. **Warum sollte man Specialized Clients statt nur Generic Client nutzen?**
   - Kleinere Bundle-Size (nur benötigte Plugins)
   - Bessere Performance
   - Client-spezifisches Branding
   - Einfacheres Deployment (weniger Features = weniger Config)

2. **Was ist der Unterschied zwischen \`addPlugins.ts\` und \`mapConfiguration.ts\`?**
   - \`addPlugins.ts\`: Plugin-Konfiguration (welche Features)
   - \`mapConfiguration.ts\`: OpenLayers-Map-Setup (Layers, View, Projection)

3. **Wie kann ein Plugin auf State eines anderen Plugins zugreifen?**
   - Via \`rootGetters['plugins/otherPlugin/someGetter']\`
   - Oder via \`store.watch()\` für reaktive Updates

4. **Was sind die Vor-/Nachteile von Plugin-Chaining via Vuex?**
   - ✅ Vorteile: Zentrale State-Management, Reactive Updates
   - ❌ Nachteile: Tight Coupling (Plugins kennen sich gegenseitig)

5. **Wann sollte man Environment-Variables nutzen?**
   - API-URLs (unterschiedlich für Dev/Prod)
   - Feature-Flags (Features ein-/ausschalten)
   - Secrets (API-Keys, nur in CI/CD)

## 🚀 Bonus-Challenge

Erweitere den Dashboard-Client:

1. **Multi-Tenancy**: Lade Map-Config basierend auf URL-Parameter (\`?tenant=berlin\`)
2. **Custom Plugin**: Erstelle ein "Dashboard-Widget"-Plugin, das Statistiken anzeigt
3. **Lazy Loading**: Lade Legend-Plugin nur, wenn User auf Button klickt
4. **Theme-Switcher**: Dark/Light-Mode-Toggle in der TopBar
5. **E2E-Test**: Playwright-Test, der Dashboard-Client startet und Zoom testet

---

**Checkpoint**: Du kannst jetzt vollständige POLAR-Clients entwickeln und deployen. Woche 4 fokussiert auf Testing und Qualitätssicherung.
`,xM=`# Woche 4: Testing & Qualität

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Unit-Tests für Plugins mit Jest schreiben
- \`createTestMountParameters\` für Component-Tests nutzen
- E2E-Tests mit Playwright implementieren
- Code-Coverage messen und interpretieren
- Linting und Type-Checking in CI/CD integrieren
- Test-Driven Development (TDD) für Plugin-Entwicklung anwenden

## 📚 Pflichtlektüre

1. **jest.config.ts** (Repo-Root)
   - Jest-Konfiguration für Monorepo
   - Transform-Regeln für Vue/TypeScript
   - Coverage-Thresholds

2. **packages/plugins/Zoom/__tests__/zoom.spec.ts**
   - Unit-Test-Beispiel für Plugin
   - Store-Modul-Tests (Actions, Mutations, Getters)
   - Component-Mount-Tests

3. **packages/core/src/test-utils/createTestMountParameters.ts**
   - Helper-Funktion für Vue-Component-Tests
   - Mock-Store-Setup
   - Mount-Options mit Vuetify

4. **e2e/zoom.spec.ts**
   - Playwright E2E-Test
   - Page-Interaktionen (click, fill, expect)
   - Screenshot-Vergleiche

5. **e2e/fixtures/mapFixture.ts** (falls vorhanden)
   - Custom-Fixtures für Map-Tests
   - Map-Initialisierung in Tests

6. **CONTRIBUTING.md → Testing-Section**
   - Test-Konventionen
   - PR-Requirements (Coverage ≥ 80%)

## 🧪 Testing-Stack

### 1. Unit-Tests: Jest + Vue Test Utils

**Was wird getestet?**
- Store-Logik (Actions, Mutations, Getters)
- Component-Rendering und User-Interactions
- Utility-Funktionen

**Tools**:
- **Jest**: Test-Runner und Assertion-Library
- **@vue/test-utils**: Vue-Component-Mounting
- **@pinia/testing** oder Vuex-Mocks: Store-Testing

### 2. E2E-Tests: Playwright

**Was wird getestet?**
- Vollständige User-Flows (z.B. Adresssuche → Zoom → Layer aktivieren)
- Cross-Browser-Kompatibilität
- Visual Regression (Screenshots)

**Tools**:
- **Playwright**: Browser-Automatisierung
- **playwright-test**: Test-Runner mit Fixtures

### 3. Type-Checking: TypeScript Compiler

\`\`\`bash
npm run type-check  # tsc --noEmit
\`\`\`

### 4. Linting: ESLint + Prettier

\`\`\`bash
npm run lint        # ESLint
npm run format      # Prettier
\`\`\`

## 📝 Unit-Tests schreiben

### Store-Modul testen

\`\`\`typescript
// packages/plugins/Counter/__tests__/counter.spec.ts
import { createStore } from 'vuex'
import { counterStoreModule } from '../index'

describe('Counter Plugin Store', () => {
  let store
  
  beforeEach(() => {
    store = createStore({
      modules: {
        counter: counterStoreModule
      }
    })
  })
  
  describe('Mutations', () => {
    it('SET_COUNT sets the count', () => {
      store.commit('counter/SET_COUNT', 42)
      expect(store.state.counter.count).toBe(42)
    })
  })
  
  describe('Actions', () => {
    it('increment increases count by 1', async () => {
      await store.dispatch('counter/increment')
      expect(store.state.counter.count).toBe(1)
    })
    
    it('decrement decreases count by 1', async () => {
      store.commit('counter/SET_COUNT', 5)
      await store.dispatch('counter/decrement')
      expect(store.state.counter.count).toBe(4)
    })
  })
  
  describe('Getters', () => {
    it('getCount returns current count', () => {
      store.commit('counter/SET_COUNT', 10)
      expect(store.getters['counter/getCount']).toBe(10)
    })
    
    it('isPositive returns true when count > 0', () => {
      store.commit('counter/SET_COUNT', 1)
      expect(store.getters['counter/isPositive']).toBe(true)
    })
  })
})
\`\`\`

### Component testen mit createTestMountParameters

\`\`\`typescript
// packages/plugins/Counter/__tests__/CounterComponent.spec.ts
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import CounterComponent from '../components/CounterComponent.vue'
import { createTestMountParameters } from '@polar/core/test-utils'

describe('CounterComponent', () => {
  let store
  
  beforeEach(() => {
    store = createStore({
      modules: {
        plugins: {
          namespaced: true,
          modules: {
            counter: {
              namespaced: true,
              state: { count: 0 },
              getters: { getCount: (state) => state.count },
              actions: { 
                increment: jest.fn(),
                decrement: jest.fn()
              }
            }
          }
        }
      }
    })
  })
  
  it('renders current count', () => {
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))
    expect(wrapper.text()).toContain('0')
  })
  
  it('calls increment action when + button clicked', async () => {
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))
    
    await wrapper.find('[data-testid="increment-btn"]').trigger('click')
    
    expect(store._actions['plugins/counter/increment']).toHaveBeenCalled()
  })
  
  it('displays updated count after state change', async () => {
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))
    
    store.state.plugins.counter.count = 5
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toContain('5')
  })
})
\`\`\`

### createTestMountParameters erklärt

\`\`\`typescript
// Vereinfachte Implementierung
export function createTestMountParameters(options = {}) {
  return {
    global: {
      plugins: [
        options.store || createStore({}),
        createVuetify() // Vuetify-Plugin für Tests
      ],
      mocks: {
        $t: (key) => key // i18n-Mock
      }
    }
  }
}
\`\`\`

## 🌐 E2E-Tests mit Playwright

### Basis-Struktur

\`\`\`typescript
// e2e/counter.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Counter Plugin', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173') // Snowbox
  })
  
  test('increments count on button click', async ({ page }) => {
    // Plugin ist sichtbar
    await expect(page.locator('.counter-plugin')).toBeVisible()
    
    // Initial-Wert ist 0
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('0')
    
    // + Button klicken
    await page.click('[data-testid="increment-btn"]')
    
    // Count ist jetzt 1
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('1')
  })
  
  test('decrements count on button click', async ({ page }) => {
    // Erst auf 5 erhöhen
    for (let i = 0; i < 5; i++) {
      await page.click('[data-testid="increment-btn"]')
    }
    
    // Dann dekrementieren
    await page.click('[data-testid="decrement-btn"]')
    
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('4')
  })
})
\`\`\`

### Map-Interaktionen testen

\`\`\`typescript
test('zoom buttons change map zoom level', async ({ page }) => {
  await page.goto('http://localhost:5173')
  
  // Initial-Zoom ermitteln (via Browser-Console-Aufruf)
  const initialZoom = await page.evaluate(() => {
    return window.polarMap.getView().getZoom()
  })
  
  // Zoom-In klicken
  await page.click('[data-testid="zoom-in-btn"]')
  
  // Warten auf Animation
  await page.waitForTimeout(500)
  
  // Neuer Zoom sollte höher sein
  const newZoom = await page.evaluate(() => {
    return window.polarMap.getView().getZoom()
  })
  
  expect(newZoom).toBeGreaterThan(initialZoom)
})
\`\`\`

## 📊 Coverage messen

\`\`\`bash
# Alle Tests mit Coverage
npm run test:coverage

# Nur spezifisches Plugin
npm run test:coverage -- packages/plugins/Counter
\`\`\`

### Coverage-Report interpretieren

\`\`\`
File                     | % Stmts | % Branch | % Funcs | % Lines
-------------------------|---------|----------|---------|--------
Counter/index.ts         |   100   |   100    |   100   |   100
Counter/components/      |   95    |   80     |   100   |   95
-------------------------|---------|----------|---------|--------
All files                |   97.5  |   85     |   100   |   97.3
\`\`\`

**Thresholds** (in \`jest.config.ts\`):
- Statements: ≥ 80%
- Branches: ≥ 75%
- Functions: ≥ 80%
- Lines: ≥ 80%

## 🛠️ Hands-on: Tests für Counter-Plugin

### Task 1: Unit-Tests schreiben

Erstelle \`packages/plugins/Counter/__tests__/counter.spec.ts\` mit:

1. **Store-Tests** (mindestens 8 Tests):
   - Mutations: SET_COUNT
   - Actions: increment, decrement, reset
   - Getters: getCount, isPositive, isNegative

2. **Component-Tests** (mindestens 5 Tests):
   - Rendering mit initialem Count
   - Button-Clicks triggern Actions
   - Conditional Rendering (z.B. Disable Decrement-Button bei count=0)

#### Acceptance Criteria
- ✅ Alle Tests passieren: \`npm test Counter\`
- ✅ Coverage ≥ 80% für alle Metriken
- ✅ Keine ESLint-Warnings

### Task 2: E2E-Test schreiben

Erstelle \`e2e/counter.spec.ts\` mit:

1. **Basic Flow**: Increment → Decrement → Reset
2. **Edge Case**: Decrement bei count=0 (Button sollte disabled sein)
3. **Persistence** (falls implementiert): Count bleibt nach Page-Reload erhalten

#### Acceptance Criteria
- ✅ E2E-Tests passieren: \`npm run test:e2e\`
- ✅ Test läuft in Chrome, Firefox und Safari (via Playwright-Config)

### Task 3: TDD für neue Feature

Implementiere "Increment by 10"-Feature **test-first**:

1. **Schreibe Test** (rot):
   \`\`\`typescript
   it('incrementByTen increases count by 10', async () => {
     await store.dispatch('counter/incrementByTen')
     expect(store.state.counter.count).toBe(10)
   })
   \`\`\`

2. **Test läuft fehl** (erwartungsgemäß)

3. **Implementiere Feature**:
   \`\`\`typescript
   actions: {
     incrementByTen({ commit, state }) {
       commit('SET_COUNT', state.count + 10)
     }
   }
   \`\`\`

4. **Test läuft durch** (grün)

5. **Refactor**: Optional Code-Optimierungen

## 📝 Knowledge Check

1. **Was ist der Unterschied zwischen Unit-Tests und E2E-Tests?**
   - Unit: Isolierte Komponenten/Funktionen (schnell, fokussiert)
   - E2E: Vollständiger User-Flow (langsam, integrativ)

2. **Warum sollte man Store-Logik separat von Components testen?**
   - Bessere Isolation (leichter zu debuggen)
   - Store ist oft wiederverwendbar (mehrere Components)
   - Einfachere Mocks

3. **Was macht \`createTestMountParameters\`?**
   - Konfiguriert Vue Test Utils für POLAR-Components
   - Fügt Vuetify, Store, Router hinzu
   - Mockt globale Dependencies (z.B. i18n)

4. **Wann sollte man Snapshots statt Assertions nutzen?**
   - Für komplexe HTML-Strukturen (z.B. gesamte Component)
   - Bei stabilem UI (wenig Änderungen erwartet)
   - **Vorsicht**: Snapshots können "blind" approven (immer reviewen!)

5. **Wie testet man asynchrone Actions?**
   - Mit \`async/await\` oder \`.then()\`
   - \`flushPromises()\` für Vue-Updates
   - Mock-Timer für Debounce/Throttle

## 🚀 Bonus-Challenge

1. **Visual Regression**: Playwright-Screenshot-Tests für Counter-UI
2. **Mutation-Testing**: Nutze \`stryker-mutator\` für Mutation-Testing
3. **Performance-Tests**: Messe Rendering-Zeit mit Playwright-Trace
4. **A11y-Tests**: Integriere \`axe-playwright\` für Accessibility-Checks
5. **CI-Integration**: GitHub Actions Workflow für Tests + Coverage-Report

---

**Checkpoint**: Dein Code sollte jetzt robust getestet sein. In Woche 5 lernst du Release-Prozesse und NPM-Publishing.
`,CM=`# Woche 5: Release & Produktion

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Semantic Versioning korrekt anwenden
- CHANGELOGs pflegen und automatisch generieren
- NPM-Packages publishen (Public und Private Registry)
- CI/CD-Pipelines für POLAR-Projekte konfigurieren
- Release-Branches und Git-Tags verwalten
- Breaking Changes kommunizieren und migrieren

## 📚 Pflichtlektüre

1. **publishPackages.js** (Repo-Root)
   - Automatisiertes NPM-Publishing-Script
   - Version-Bump-Logik
   - Dependency-Updates zwischen Packages

2. **CHANGELOG.md** (Repo-Root oder einzelne Packages)
   - Struktur: [Unreleased], [1.2.0] - 2024-01-15
   - Kategorien: Added, Changed, Deprecated, Removed, Fixed, Security

3. **CONTRIBUTING.md → Release-Section**
   - Release-Workflow
   - Version-Bump-Regeln
   - PR-Labels für Changelog-Generierung

4. **.github/workflows/release.yml** (falls vorhanden)
   - GitHub Actions für automatische Releases
   - NPM-Token-Handling
   - Build + Test + Publish-Pipeline

5. **packages/core/package.json → publishConfig**
   - NPM-Registry-Konfiguration
   - Access-Level (public/restricted)

6. **Semver-Dokumentation**: https://semver.org/lang/de/
   - MAJOR.MINOR.PATCH-Schema
   - Breaking Changes vs. Features vs. Bugfixes

## 📦 Semantic Versioning

### Schema: MAJOR.MINOR.PATCH

- **MAJOR** (1.0.0 → 2.0.0): Breaking Changes
  - API-Änderungen, die bestehenden Code brechen
  - Beispiel: Plugin-Factory-Signatur ändert sich

- **MINOR** (1.1.0 → 1.2.0): Neue Features (backward-compatible)
  - Neue Plugins, neue Actions in Store
  - Beispiel: Neues "Export"-Feature im LayerChooser

- **PATCH** (1.1.1 → 1.1.2): Bugfixes
  - Keine neuen Features, nur Korrekturen
  - Beispiel: Zoom-Button funktionierte nicht im Safari

### Pre-Release-Versionen

- **Alpha**: \`1.2.0-alpha.1\` (intern, instabil)
- **Beta**: \`1.2.0-beta.1\` (extern, Feature-Complete aber buggy)
- **Release Candidate**: \`1.2.0-rc.1\` (letzte Tests vor Release)

### Version-Dependencies

\`\`\`json
// package.json
{
  "dependencies": {
    "@polar/core": "^2.1.0",     // Compatible mit 2.x.x (< 3.0.0)
    "@polar/zoom": "~1.3.2",     // Compatible mit 1.3.x (< 1.4.0)
    "vue": "3.4.0"               // Exakt 3.4.0
  }
}
\`\`\`

Regeln:
- **^** (Caret): MINOR und PATCH updates ok
- **~** (Tilde): Nur PATCH updates ok
- **Keine Prefix**: Exakte Version

## 📝 CHANGELOG pflegen

### Struktur (Keep a Changelog Format)

\`\`\`markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New "MeasureTool" plugin for distance and area measurements

### Changed
- Zoom animation duration reduced from 1000ms to 500ms

### Fixed
- LayerChooser: Fixed drag-and-drop on touch devices

## [2.1.0] - 2024-02-10

### Added
- AddressSearch: Support for custom geocoding services
- New \`onMapReady\` lifecycle hook for plugins

### Changed
- **BREAKING**: Renamed \`createPolarMap\` to \`createMap\`
- Updated Vuetify to 3.5.0

### Deprecated
- \`oldPluginAPI\` will be removed in v3.0.0

### Removed
- IE11 support (EOL)

### Fixed
- Fixed memory leak in OpenLayers event listeners

### Security
- Updated dependencies with known vulnerabilities

## [2.0.0] - 2024-01-15

...
\`\`\`

### Automatische Generierung

Tools:
- **conventional-changelog**: Generiert CHANGELOG aus Git-Commits (wenn Conventional Commits genutzt werden)
- **lerna-changelog**: Für Monorepos (liest PR-Labels)

\`\`\`bash
# Mit conventional-changelog
npx conventional-changelog -p angular -i CHANGELOG.md -s
\`\`\`

### Conventional Commits

\`\`\`bash
# Format: <type>(<scope>): <subject>

feat(zoom): add custom animation duration option
fix(layer-chooser): resolve drag-and-drop bug on iOS
docs(readme): update installation instructions
chore(deps): bump vue from 3.3.0 to 3.4.0
refactor(core): simplify map initialization logic
test(zoom): add unit tests for zoom actions
\`\`\`

Types:
- \`feat\`: Neue Feature → MINOR version bump
- \`fix\`: Bugfix → PATCH version bump
- \`feat!\` oder \`BREAKING CHANGE:\`: Breaking Change → MAJOR version bump

## 🚀 Release-Workflow

### 1. Pre-Release-Checks

\`\`\`bash
# Alle Tests laufen durch
npm test
npm run test:e2e

# Type-Check ohne Fehler
npm run type-check

# Linting erfolgreich
npm run lint

# Build funktioniert
npm run build:all
\`\`\`

### 2. Version Bump

\`\`\`bash
# Manuell in package.json(s)
# Oder mit Script:
npm run version:bump -- --type minor
# → Bumpt alle Packages von 2.0.0 auf 2.1.0
\`\`\`

### 3. CHANGELOG aktualisieren

\`\`\`markdown
## [Unreleased]
→
## [2.1.0] - 2024-02-13

### Added
- ...
\`\`\`

### 4. Commit + Tag

\`\`\`bash
git add .
git commit -m "chore(release): v2.1.0"
git tag v2.1.0
git push origin main --tags
\`\`\`

### 5. NPM-Publishing

\`\`\`bash
# Manuell
npm run publish:packages

# Oder automatisch via CI/CD (siehe unten)
\`\`\`

### 6. GitHub Release erstellen

- Gehe zu GitHub → Releases → "Draft a new release"
- Tag: \`v2.1.0\`
- Title: \`Release 2.1.0\`
- Description: Kopiere CHANGELOG-Abschnitt
- Attach Assets (optional): Build-Artefakte, Docs

## 🤖 CI/CD mit GitHub Actions

### .github/workflows/release.yml

\`\`\`yaml
name: Release

on:
  push:
    tags:
      - 'v*.*.*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build packages
        run: npm run build:all
      
      - name: Publish to NPM
        run: npm run publish:packages
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
      
      - name: Create GitHub Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: \${{ github.ref }}
          release_name: Release \${{ github.ref }}
          body_path: ./CHANGELOG.md
\`\`\`

### NPM-Token konfigurieren

1. Generiere Token auf npmjs.com: Account Settings → Access Tokens → Generate New Token (Automation)
2. Füge Token zu GitHub Secrets hinzu: Repo Settings → Secrets and variables → Actions → New repository secret
   - Name: \`NPM_TOKEN\`
   - Value: \`npm_...\`

## 🛠️ Hands-on: Release durchführen

### Task: Release v1.0.0 des Counter-Plugins

#### Voraussetzungen
- Counter-Plugin ist fertig entwickelt
- Tests sind geschrieben und passieren
- Dokumentation ist aktuell

#### Schritte

1. **CHANGELOG erstellen**: \`packages/plugins/Counter/CHANGELOG.md\`
   \`\`\`markdown
   # Changelog - @polar/counter
   
   ## [1.0.0] - 2024-02-13
   
   ### Added
   - Initial release
   - Increment, decrement, reset functionality
   - Vuetify-styled UI
   - Unit and E2E tests
   \`\`\`

2. **package.json aktualisieren**
   \`\`\`json
   {
     "name": "@polar/counter",
     "version": "1.0.0",
     "description": "Simple counter plugin for POLAR",
     "main": "dist/index.js",
     "types": "dist/index.d.ts",
     "publishConfig": {
       "access": "public"
     }
   }
   \`\`\`

3. **README erstellen**: \`packages/plugins/Counter/README.md\`
   - Installation: \`npm install @polar/counter\`
   - Usage-Beispiel
   - API-Dokumentation (Options, Store-Actions, etc.)

4. **Build testen**
   \`\`\`bash
   npm run build --scope=@polar/counter
   # Überprüfe dist/-Ordner
   \`\`\`

5. **Dry-Run-Publish** (testet ohne zu publishen)
   \`\`\`bash
   cd packages/plugins/Counter
   npm publish --dry-run
   \`\`\`

6. **Publish** (falls alles ok)
   \`\`\`bash
   npm publish
   \`\`\`

7. **Git-Tag**
   \`\`\`bash
   git add .
   git commit -m "chore(counter): release v1.0.0"
   git tag counter-v1.0.0
   git push origin main --tags
   \`\`\`

#### Acceptance Criteria
- ✅ Package ist auf NPM verfügbar: \`npm view @polar/counter\`
- ✅ README wird auf NPM-Seite angezeigt
- ✅ Git-Tag existiert im Repository
- ✅ CHANGELOG ist vollständig

## 🔧 Breaking Changes managen

### Szenario: API-Änderung in Plugin-Factory

**Alt** (v1.x):
\`\`\`typescript
export const Zoom = (position: string) => ({ ... })
\`\`\`

**Neu** (v2.0):
\`\`\`typescript
export const Zoom = (options: { position: string, duration?: number }) => ({ ... })
\`\`\`

### Migration Guide erstellen

\`\`\`markdown
# Migration Guide: v1.x → v2.0

## Breaking Changes

### Plugin Factories now accept Options Object

**Before** (v1.x):
\`\`\`typescript
Zoom('top-left')
\`\`\`

**After** (v2.0):
\`\`\`typescript
Zoom({ position: 'top-left' })
\`\`\`

**Migration Script** (optional):
Find-and-replace in your \`addPlugins.ts\`:
- Search: \`Zoom\\('([^']+)'\\)\`
- Replace: \`Zoom({ position: '$1' })\`
\`\`\`

### Deprecation-Phase nutzen

\`\`\`typescript
export const Zoom = (positionOrOptions) => {
  if (typeof positionOrOptions === 'string') {
    // Alt-API (deprecated)
    console.warn('Passing position as string is deprecated. Use { position: "..." } instead.')
    return createZoomPlugin({ position: positionOrOptions })
  }
  // Neu-API
  return createZoomPlugin(positionOrOptions)
}
\`\`\`

→ User bekommen Warning, Code funktioniert aber noch (grace period)

## 📝 Knowledge Check

1. **Wann ist ein MAJOR-Version-Bump nötig?**
   - Bei Breaking Changes (API-Änderungen, entfernte Features)

2. **Was gehört in einen CHANGELOG-Eintrag?**
   - Kategorien: Added, Changed, Fixed, Deprecated, Removed, Security
   - User-facing Changes (interne Refactorings meist nicht)

3. **Warum sind Conventional Commits hilfreich?**
   - Automatische CHANGELOG-Generierung
   - Automatische Version-Bumps (via semantic-release)
   - Bessere Git-History-Lesbarkeit

4. **Was ist der Unterschied zwischen \`npm publish\` und \`npm pack\`?**
   - \`npm pack\`: Erstellt .tgz-File (lokal testbar mit \`npm install ./package.tgz\`)
   - \`npm publish\`: Uploaded Package zu NPM-Registry

5. **Wie kommuniziert man Breaking Changes an User?**
   - CHANGELOG mit **BREAKING** Tag
   - Migration Guide
   - Major-Version-Bump (semver)
   - Deprecation-Warnings (wenn möglich)

## 🚀 Bonus-Challenge

1. **Monorepo-Releases**: Nutze \`lerna\` oder \`nx\` für koordinierte Multi-Package-Releases
2. **Automated Releases**: Konfiguriere \`semantic-release\` für vollautomatisches Publishing
3. **Private NPM Registry**: Richte Verdaccio (lokal) oder GitHub Packages ein
4. **Release Notes**: Generiere Release-Notes aus GitHub-Issues (Labels "enhancement", "bug")
5. **Rollback-Strategie**: Dokumentiere, wie ein fehlerhaftes Release zurückgezogen wird (\`npm unpublish\` Regeln)

---

**Checkpoint**: Du beherrschst jetzt den kompletten POLAR-Development-Lifecycle von Setup bis Release. Bereit für das Capstone-Projekt!
`,kM=`Unser empfohlener Flow:

- Mocha orchestriert Suites und Hooks
- Chai bietet ausdrucksstarke Assertions
- Sinon mockt Timer, Netzwerk-Calls und DOM-APIs

Übe, für jede UI-Store-Interaktion einen Happy-Path- und einen Failure-Path-Test zu schreiben.
`,PM=`Vue ist das Framework, das unsere Benutzeroberflächen und Masterportal-Widgets antreibt. Es kümmert sich um alles — vom Rendern dynamischer Inhalte über das Verwalten des Anwendungszustands bis zum Reagieren auf Benutzerinteraktionen. Das Verständnis der Vue-Grundlagen ist essenziell für das Erstellen und Warten der Komponenten, mit denen du täglich arbeiten wirst.

## Warum Vue wichtig ist

Vue gibt uns eine deklarative, reaktive Art, Interfaces zu erstellen. Anstatt das DOM manuell zu aktualisieren, wenn sich Daten ändern, hält Vue die UI automatisch mit dem Anwendungszustand synchron. Das macht unseren Code sauberer, vorhersagbarer und einfacher zu testen. In Masterportal wrappen Vue-Komponenten Karten-Interaktionen, Layer-Controls und Konfigurationspanels.

## Was du wissen musst

Du solltest vertraut sein mit:

- **Single File Components (SFC)** — wie \`<script setup>\`, \`<template>\` und \`<style>\` zusammenarbeiten
- **Reaktivität** — Verwendung von \`ref\` und \`reactive\`, um Daten zu erstellen, die UI-Updates auslösen
- **Komponenten-Kommunikation** — Props zum Weitergeben von Daten nach unten, Emits zum Senden von Events nach oben
- **Lifecycle Hooks** — wann Komponenten mounten, updaten und unmounten
- **Composables** — Extrahieren und Wiederverwenden reaktiver Logik über Komponenten hinweg
- **Vuex Patterns** — wie wir den Anwendungszustand in Modulen organisieren

Diese Konzepte erscheinen in jeder Vue-Komponente, der du begegnen wirst. Egal ob du ein neues Widget baust, bestehende Funktionalität aktualisierst oder Probleme debuggst — du musst verstehen, wie Vues Reaktivitätssystem und Komponentenmodell funktionieren.

## Lernpfad

Fokussiere dich zuerst auf die Kernkonzepte. Die externen Ressourcen in späteren Lektionen bieten detaillierte Erklärungen und interaktive Beispiele. Achte besonders auf die Composition API (mit \`<script setup>\`), da wir diese in unserer Codebasis verwenden, nicht die ältere Options API.

Wenn reaktive Daten, Lifecycle Hooks oder Vuex-Module unklar sind, sprich früh an. Deine Mentor:innen können dich durch praktische Beispiele aus unseren echten Widgets führen, um diese Muster konkret zu machen, bevor du mit der Implementierung von Features beginnst.
`,TM=`# Vuex State Management Patterns

Vuex ist die zentrale State-Management-Lösung für Vue-Anwendungen. Es bietet einen **Single Source of Truth** für den gesamten Anwendungszustand und ermöglicht vorhersagbare State-Änderungen durch ein strukturiertes Pattern.

---

## Grundlegende Konzepte

### State
Der State ist das zentrale Datenobjekt deiner Anwendung. Alle Komponenten können darauf zugreifen, aber niemals direkt verändern.

\`\`\`javascript
// store/modules/user.js
const state = {
  name: '',
  role: '',
  isAuthenticated: false
}
\`\`\`

### Mutations
Mutations sind die **einzige** Möglichkeit, den State zu ändern. Sie müssen **synchron** sein.

\`\`\`javascript
const mutations = {
  setUser(state, payload) {
    state.name = payload.name;
    state.role = payload.role;
    state.isAuthenticated = true;
  },
  
  clearUser(state) {
    state.name = '';
    state.role = '';
    state.isAuthenticated = false;
  }
}
\`\`\`

> **Wichtig:** Mutations erhalten immer \`state\` als ersten Parameter und optional einen \`payload\` als zweiten.

### Actions
Actions enthalten **asynchrone** Logik (API-Calls, Timeouts) und committen Mutations.

\`\`\`javascript
const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await authApi.login(credentials);
      commit('setUser', response.data);
      return response.data;
    } catch (error) {
      console.error('Login fehlgeschlagen:', error);
      throw error;
    }
  },
  
  logout({ commit }) {
    commit('clearUser');
    // Optional: API-Call zum Invalidieren des Tokens
  }
}
\`\`\`

### Getters
Getters sind berechnete Properties für den Store – ideal für abgeleitete Daten.

\`\`\`javascript
const getters = {
  fullName: (state) => \`\${state.firstName} \${state.lastName}\`,
  
  isAdmin: (state) => state.role === 'admin',
  
  // Getter können andere Getter verwenden
  greeting: (state, getters) => \`Hallo, \${getters.fullName}!\`
}
\`\`\`

---

## Module mit Namespaces

Für größere Anwendungen organisierst du den Store in **namespaced modules**.

\`\`\`javascript
// store/index.js
import { createStore } from 'vuex'
import user from './modules/user'
import progress from './modules/progress'
import map from './modules/map'

export default createStore({
  modules: {
    user,
    progress,
    map
  }
})
\`\`\`

\`\`\`javascript
// store/modules/progress.js
export default {
  namespaced: true,  // Wichtig!
  
  state: {
    completedLessons: [],
    moduleProgress: {}
  },
  
  mutations: {
    completeLesson(state, { moduleId, lessonId }) {
      const key = \`\${moduleId}-\${lessonId}\`;
      if (!state.completedLessons.includes(key)) {
        state.completedLessons.push(key);
      }
    }
  },
  
  getters: {
    moduleProgress: (state) => (moduleId) => {
      // Berechne Fortschritt für ein Modul
      const lessons = state.completedLessons.filter(
        key => key.startsWith(moduleId)
      );
      return lessons.length;
    }
  },
  
  actions: {
    async syncProgress({ commit, state }) {
      await api.saveProgress(state.completedLessons);
    }
  }
}
\`\`\`

---

## Verwendung in Komponenten

### State & Getters abrufen

\`\`\`vue
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// State direkt
const userName = computed(() => store.state.user.name)

// Mit Getter
const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

// Modularer Getter mit Parameter
const moduleProgress = computed(() => 
  store.getters['progress/moduleProgress']('js-fundamentals')
)
<\/script>
\`\`\`

### Mutations committen

\`\`\`javascript
// Ohne Namespace
store.commit('setUser', userData)

// Mit Namespace
store.commit('progress/completeLesson', {
  moduleId: 'js-fundamentals',
  lessonId: 'intro'
})
\`\`\`

### Actions dispatchen

\`\`\`javascript
// Asynchron mit await
const user = await store.dispatch('user/login', {
  email: 'user@example.com',
  password: 'secret'
})

// Oder mit Promise
store.dispatch('progress/syncProgress')
  .then(() => console.log('Gespeichert!'))
  .catch(err => console.error(err))
\`\`\`

---

## ✅ Best Practices für unser Team

### 1. Modulstruktur spiegelt Backend-Konzepte
Organisiere Module analog zu Backend-Entities:

\`\`\`
store/
├── modules/
│   ├── user.js       # Authentifizierung, Profil
│   ├── progress.js   # Lernfortschritt
│   ├── badges.js     # Errungenschaften
│   ├── tracks.js     # Track-Aktivierung
│   └── map.js        # Kartenzustand (Masterportal)
\`\`\`

### 2. Getter für berechnete Daten
Vermeide Logik in Komponenten – lagere sie in Getter aus:

\`\`\`javascript
// ❌ Schlecht: Logik in Komponente
const progress = computed(() => {
  const total = modules.value.length
  const completed = modules.value.filter(m => m.completed).length
  return Math.round((completed / total) * 100)
})

// ✅ Gut: Getter im Store
// store/getters.js
overallProgress: (state) => {
  const total = state.modules.length
  const completed = state.modules.filter(m => m.completed).length
  return Math.round((completed / total) * 100)
}
\`\`\`

### 3. Mutations bleiben synchron
\`\`\`javascript
// ❌ Niemals async in Mutations
mutations: {
  async loadUser(state) {  // FALSCH!
    const user = await api.getUser()
    state.user = user
  }
}

// ✅ Async-Logik in Actions
actions: {
  async loadUser({ commit }) {
    const user = await api.getUser()
    commit('setUser', user)
  }
}
\`\`\`

### 4. Payload-Objekte statt mehrerer Parameter
\`\`\`javascript
// ❌ Unübersichtlich
commit('updateLesson', moduleId, lessonId, completed, timestamp)

// ✅ Sauber mit Objekt
commit('updateLesson', {
  moduleId,
  lessonId,
  completed,
  timestamp
})
\`\`\`

---

## 💼 Use Cases aus dieser Academy

### Use Case 1: Lesson Completion
\`\`\`javascript
// In LessonRenderer.vue
const markCompleted = () => {
  store.commit('progress/completeLesson', {
    moduleId: props.moduleId,
    lessonId: props.lesson.id
  })
  
  // Badge-Logik wird durch Watcher getriggert
}
\`\`\`

### Use Case 2: Badge-Vergabe mit Watchers
\`\`\`javascript
// In DashboardView.vue
watch(
  () => store.getters['progress/moduleProgress']('vue-basics'),
  (progress) => {
    if (progress === 100) {
      const badge = getBadgeForModule('vue-basics')
      if (!store.getters['badges/hasBadge'](badge.id)) {
        store.commit('badges/earnBadge', badge.id)
      }
    }
  }
)
\`\`\`

### Use Case 3: Track-Freischaltung
\`\`\`javascript
// store/modules/tracks.js
mutations: {
  toggleTrack(state, trackId) {
    if (state.enabled.includes(trackId)) {
      state.enabled = state.enabled.filter(id => id !== trackId)
    } else {
      state.enabled.push(trackId)
    }
  }
}

getters: {
  isTrackEnabled: (state) => (trackId) => {
    return state.enabled.includes(trackId)
  }
}
\`\`\`

---

## 🔍 Debugging-Tipps

### Vue DevTools
Nutze die Vue DevTools Browser-Extension:
- **Vuex Tab**: Sieh alle State-Änderungen in Echtzeit
- **Time Travel**: Springe zwischen Mutations zurück
- **State Inspector**: Untersuche den aktuellen Store-Zustand

### Console Logging
\`\`\`javascript
mutations: {
  completeLesson(state, payload) {
    console.log('[MUTATION] completeLesson:', payload)
    // ... Mutation-Logik
  }
}
\`\`\`

### Strict Mode (nur Development)
\`\`\`javascript
export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  // ...
})
\`\`\`

> **Hinweis:** Im Strict Mode wirft Vuex einen Error, wenn State außerhalb von Mutations geändert wird. Dies hilft dir, unbeabsichtigte State-Änderungen zu vermeiden.

---

## 📝 Zusammenfassung

✅ **State** = Single Source of Truth
✅ **Mutations** = Synchrone State-Änderungen
✅ **Actions** = Asynchrone Logik + Mutations committen
✅ **Getters** = Berechnete/abgeleitete Daten
✅ **Modules** = Organisiere großen Store in logische Einheiten
✅ **Namespaces** = Vermeide Namenskonflikte zwischen Modulen

Studiere den Store dieser Academy (\`src/store/\`) als Referenz für Best Practices in echten Projekten!
`;function ld(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Us=ld();function W0(t){Us=t}const V0=/[&<>"']/,RM=new RegExp(V0.source,"g"),U0=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,AM=new RegExp(U0.source,"g"),IM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xg=t=>IM[t];function gn(t,e){if(e){if(V0.test(t))return t.replace(RM,xg)}else if(U0.test(t))return t.replace(AM,xg);return t}const LM=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function OM(t){return t.replace(LM,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const FM=/(^|[^\[])\^/g;function Qe(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const i={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(FM,"$1"),n=n.replace(s,o),i},getRegex:()=>new RegExp(n,e)};return i}function Cg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Fo={exec:()=>null};function kg(t,e){const n=t.replace(/\|/g,(r,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=n.split(/ \|/);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i}function qa(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i&&t.charAt(i-s-1)===e;)s++;return t.slice(0,i-s)}function NM(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return-1}function Pg(t,e,n,i){const s=e.href,r=e.title?gn(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:n,href:s,title:r,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:n,href:s,title:r,text:gn(o)}}function DM(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const i=n[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[o]=r;return o.length>=i.length?s.slice(i.length):s}).join(`
`)}class Fl{constructor(e){tt(this,"options");tt(this,"rules");tt(this,"lexer");this.options=e||Us}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:qa(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=DM(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(/#$/.test(i)){const s=qa(i,"#");(this.options.pedantic||!s||/ $/.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const i=qa(n[0].replace(/^ *>[ \t]?/gm,""),`
`),s=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(i);return this.lexer.state.top=s,{type:"blockquote",raw:n[0],tokens:r,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const s=i.length>1,r={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const o=new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let u=!1;if(!(n=o.exec(e))||this.rules.block.hr.test(e))break;a=n[0],e=e.substring(a.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,_=>" ".repeat(3*_.length)),d=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=h.trimStart()):(f=n[2].search(/[^ ]/),f=f>4?1:f,l=h.slice(f),f+=n[1].length);let g=!1;if(!h&&/^ *$/.test(d)&&(a+=d+`
`,e=e.substring(d.length+1),u=!0),!u){const _=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),w=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),b=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const E=e.split(`
`,1)[0];if(d=E,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),w.test(d)||b.test(d)||_.test(d)||y.test(e))break;if(d.search(/[^ ]/)>=f||!d.trim())l+=`
`+d.slice(f);else{if(g||h.search(/[^ ]/)>=4||w.test(h)||b.test(h)||y.test(h))break;l+=`
`+d}!g&&!d.trim()&&(g=!0),a+=E+`
`,e=e.substring(E.length+1),h=d.slice(f)}}r.loose||(c?r.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let m=null,p;this.options.gfm&&(m=/^\[[ xX]\] /.exec(l),m&&(p=m[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:a,task:!!m,checked:p,loose:!1,text:l,tokens:[]}),r.raw+=a}r.items[r.items.length-1].raw=a.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let u=0;u<r.items.length;u++)if(this.lexer.state.top=!1,r.items[u].tokens=this.lexer.blockTokens(r.items[u].text,[]),!r.loose){const h=r.items[u].tokens.filter(f=>f.type==="space"),d=h.length>0&&h.some(f=>/\n.*\n/.test(f.raw));r.loose=d}if(r.loose)for(let u=0;u<r.items.length;u++)r.items[u].loose=!0;return r}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(/\s+/g," "),s=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:r}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const i=kg(n[1]),s=n[2].replace(/^\||\| *$/g,"").split("|"),r=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const a of s)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of i)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of r)o.rows.push(kg(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:gn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=qa(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=NM(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let s=n[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],r=o[3])}else r=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(i)?s=s.slice(1):s=s.slice(1,-1)),Pg(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(/\s+/g," "),r=n[s.toLowerCase()];if(!r){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return Pg(i,r,i[0],this.lexer)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...s[0]].length-1;let a,l,c=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(s=h.exec(n))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=[...s[0]][0].length,f=e.slice(0,o+s.index+d+l);if(Math.min(o,l)%2){const m=f.slice(1,-1);return{type:"em",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}const g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(/\n/g," ");const s=/[^ ]/.test(i),r=/^ /.test(i)&&/ $/.test(i);return s&&r&&(i=i.substring(1,i.length-1)),i=gn(i,!0),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=gn(n[1]),s="mailto:"+i):(i=gn(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let s,r;if(n[2]==="@")s=gn(n[0]),r="mailto:"+s;else{let o;do o=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(o!==n[0]);s=gn(n[0]),n[1]==="www."?r="http://"+n[0]:r=n[0]}return{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=n[0]:i=gn(n[0]),{type:"text",raw:n[0],text:i}}}}const GM=/^(?: *(?:\n|$))+/,zM=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,BM=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ba=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,jM=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,K0=/(?:[*+-]|\d{1,9}[.)])/,$0=Qe(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,K0).getRegex(),cd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,WM=/^[^\n]+/,ud=/(?!\s*\])(?:\\.|[^\[\]\\])+/,VM=Qe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ud).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),UM=Qe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,K0).getRegex(),Mc="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",hd=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,KM=Qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",hd).replace("tag",Mc).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),q0=Qe(cd).replace("hr",ba).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mc).getRegex(),$M=Qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",q0).getRegex(),dd={blockquote:$M,code:zM,def:VM,fences:BM,heading:jM,hr:ba,html:KM,lheading:$0,list:UM,newline:GM,paragraph:q0,table:Fo,text:WM},Tg=Qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ba).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mc).getRegex(),qM={...dd,table:Tg,paragraph:Qe(cd).replace("hr",ba).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Tg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mc).getRegex()},HM={...dd,html:Qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",hd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fo,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Qe(cd).replace("hr",ba).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$0).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},H0=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ZM=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Z0=/^( {2,}|\\)\n(?!\s*$)/,XM=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ea="\\p{P}$+<=>`^|~",YM=Qe(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ea).getRegex(),JM=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,QM=Qe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ea).getRegex(),ex=Qe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ea).getRegex(),tx=Qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ea).getRegex(),nx=Qe(/\\([punct])/,"gu").replace(/punct/g,Ea).getRegex(),ix=Qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sx=Qe(hd).replace("(?:-->|$)","-->").getRegex(),rx=Qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sx).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Nl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ox=Qe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Nl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),X0=Qe(/^!?\[(label)\]\[(ref)\]/).replace("label",Nl).replace("ref",ud).getRegex(),Y0=Qe(/^!?\[(ref)\](?:\[\])?/).replace("ref",ud).getRegex(),ax=Qe("reflink|nolink(?!\\()","g").replace("reflink",X0).replace("nolink",Y0).getRegex(),fd={_backpedal:Fo,anyPunctuation:nx,autolink:ix,blockSkip:JM,br:Z0,code:ZM,del:Fo,emStrongLDelim:QM,emStrongRDelimAst:ex,emStrongRDelimUnd:tx,escape:H0,link:ox,nolink:Y0,punctuation:YM,reflink:X0,reflinkSearch:ax,tag:rx,text:XM,url:Fo},lx={...fd,link:Qe(/^!?\[(label)\]\((.*?)\)/).replace("label",Nl).getRegex(),reflink:Qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Nl).getRegex()},eh={...fd,escape:Qe(H0).replace("])","~|])").getRegex(),url:Qe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},cx={...eh,br:Qe(Z0).replace("{2,}","*").getRegex(),text:Qe(eh.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ha={normal:dd,gfm:qM,pedantic:HM},ho={normal:fd,gfm:eh,breaks:cx,pedantic:lx};class Xn{constructor(e){tt(this,"tokens");tt(this,"options");tt(this,"state");tt(this,"tokenizer");tt(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Us,this.options.tokenizer=this.options.tokenizer||new Fl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ha.normal,inline:ho.normal};this.options.pedantic?(n.block=Ha.pedantic,n.inline=ho.pedantic):this.options.gfm&&(n.block=Ha.gfm,this.options.breaks?n.inline=ho.breaks:n.inline=ho.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ha,inline:ho}}static lex(e,n){return new Xn(n).lex(e)}static lexInline(e,n){return new Xn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let i,s,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r))){s=n[n.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i),o=r.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i,s,r,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),s=n[n.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(r)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class Dl{constructor(e){tt(this,"options");this.options=e||Us}code(e,n,i){var r;const s=(r=(n||"").match(/^\S*/))==null?void 0:r[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+gn(s)+'">'+(i?e:gn(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:gn(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,i){return`<h${n}>${e}</h${n}>
`}hr(){return`<hr>
`}list(e,n,i){const s=n?"ol":"ul",r=n&&i!==1?' start="'+i+'"':"";return"<"+s+r+`>
`+e+"</"+s+`>
`}listitem(e,n,i){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const i=n.header?"th":"td";return(n.align?`<${i} align="${n.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,n,i){const s=Cg(e);if(s===null)return i;e=s;let r='<a href="'+e+'"';return n&&(r+=' title="'+n+'"'),r+=">"+i+"</a>",r}image(e,n,i){const s=Cg(e);if(s===null)return i;e=s;let r=`<img src="${e}" alt="${i}"`;return n&&(r+=` title="${n}"`),r+=">",r}text(e){return e}}class gd{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,i){return""+i}image(e,n,i){return""+i}br(){return""}}class Yn{constructor(e){tt(this,"options");tt(this,"renderer");tt(this,"textRenderer");this.options=e||Us,this.options.renderer=this.options.renderer||new Dl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new gd}static parse(e,n){return new Yn(n).parse(e)}static parseInline(e,n){return new Yn(n).parseInline(e)}parse(e,n=!0){let i="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const o=r,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){i+=a||"";continue}}switch(r.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{const o=r;i+=this.renderer.heading(this.parseInline(o.tokens),o.depth,OM(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=r;i+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=r;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let c="";for(let u=0;u<o.rows.length;u++){const h=o.rows[u];l="";for(let d=0;d<h.length;d++)l+=this.renderer.tablecell(this.parseInline(h[d].tokens),{header:!1,align:o.align[d]});c+=this.renderer.tablerow(l)}i+=this.renderer.table(a,c);continue}case"blockquote":{const o=r,a=this.parse(o.tokens);i+=this.renderer.blockquote(a);continue}case"list":{const o=r,a=o.ordered,l=o.start,c=o.loose;let u="";for(let h=0;h<o.items.length;h++){const d=o.items[h],f=d.checked,g=d.task;let m="";if(d.task){const p=this.renderer.checkbox(!!f);c?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=p+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=p+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:p+" "}):m+=p+" "}m+=this.parse(d.tokens,c),u+=this.renderer.listitem(m,g,!!f)}i+=this.renderer.list(u,a,l);continue}case"html":{const o=r;i+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=r;i+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=r,a=o.tokens?this.parseInline(o.tokens):o.text;for(;s+1<e.length&&e[s+1].type==="text";)o=e[++s],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);i+=n?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}parseInline(e,n){n=n||this.renderer;let i="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){i+=o||"";continue}}switch(r.type){case"escape":{const o=r;i+=n.text(o.text);break}case"html":{const o=r;i+=n.html(o.text);break}case"link":{const o=r;i+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break}case"image":{const o=r;i+=n.image(o.href,o.title,o.text);break}case"strong":{const o=r;i+=n.strong(this.parseInline(o.tokens,n));break}case"em":{const o=r;i+=n.em(this.parseInline(o.tokens,n));break}case"codespan":{const o=r;i+=n.codespan(o.text);break}case"br":{i+=n.br();break}case"del":{const o=r;i+=n.del(this.parseInline(o.tokens,n));break}case"text":{const o=r;i+=n.text(o.text);break}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}}class No{constructor(e){tt(this,"options");this.options=e||Us}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}tt(No,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var js,th,J0;class ux{constructor(...e){yf(this,js);tt(this,"defaults",ld());tt(this,"options",this.setOptions);tt(this,"parse",ja(this,js,th).call(this,Xn.lex,Yn.parse));tt(this,"parseInline",ja(this,js,th).call(this,Xn.lexInline,Yn.parseInline));tt(this,"Parser",Yn);tt(this,"Renderer",Dl);tt(this,"TextRenderer",gd);tt(this,"Lexer",Xn);tt(this,"Tokenizer",Fl);tt(this,"Hooks",No);this.use(...e)}walkTokens(e,n){var s,r;let i=[];for(const o of e)switch(i=i.concat(n.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)i=i.concat(this.walkTokens(l.tokens,n));for(const l of a.rows)for(const c of l)i=i.concat(this.walkTokens(c.tokens,n));break}case"list":{const a=o;i=i.concat(this.walkTokens(a.items,n));break}default:{const a=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);i=i.concat(this.walkTokens(c,n))}):a.tokens&&(i=i.concat(this.walkTokens(a.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=n.renderers[r.name];o?n.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=n[r.level];o?o.unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),s.extensions=n),i.renderer){const r=this.defaults.renderer||new Dl(this.defaults);for(const o in i.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.renderer[a],c=r[a];r[a]=(...u)=>{let h=l.apply(r,u);return h===!1&&(h=c.apply(r,u)),h||""}}s.renderer=r}if(i.tokenizer){const r=this.defaults.tokenizer||new Fl(this.defaults);for(const o in i.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=i.tokenizer[a],c=r[a];r[a]=(...u)=>{let h=l.apply(r,u);return h===!1&&(h=c.apply(r,u)),h}}s.tokenizer=r}if(i.hooks){const r=this.defaults.hooks||new No;for(const o in i.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.hooks[a],c=r[a];No.passThroughHooks.has(o)?r[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(r,u)).then(d=>c.call(r,d));const h=l.call(r,u);return c.call(r,h)}:r[a]=(...u)=>{let h=l.apply(r,u);return h===!1&&(h=c.apply(r,u)),h}}s.hooks=r}if(i.walkTokens){const r=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),r&&(l=l.concat(r.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Xn.lex(e,n??this.defaults)}parser(e,n){return Yn.parse(e,n??this.defaults)}}js=new WeakSet,th=function(e,n){return(i,s)=>{const r={...s},o={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=ja(this,js,J0).call(this,!!o.silent,!!o.async);if(typeof i>"u"||i===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>n(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(i=o.hooks.preprocess(i));let l=e(i,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=n(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},J0=function(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+gn(i.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(i);throw i}};const Ns=new ux;function je(t,e){return Ns.parse(t,e)}je.options=je.setOptions=function(t){return Ns.setOptions(t),je.defaults=Ns.defaults,W0(je.defaults),je};je.getDefaults=ld;je.defaults=Us;je.use=function(...t){return Ns.use(...t),je.defaults=Ns.defaults,W0(je.defaults),je};je.walkTokens=function(t,e){return Ns.walkTokens(t,e)};je.parseInline=Ns.parseInline;je.Parser=Yn;je.parser=Yn.parse;je.Renderer=Dl;je.TextRenderer=gd;je.Lexer=Xn;je.lexer=Xn.lex;je.Tokenizer=Fl;je.Hooks=No;je.parse=je;je.options;je.setOptions;je.use;je.walkTokens;je.parseInline;Yn.parse;Xn.lex;const Q0="JavaScript-Grundlagen Quiz",e_=[{question:"Welche Schlüsselwörter erzeugen Block-Scope?",options:["Nur var","Nur let","let und const","function"],answer:2},{question:"Wofür wird const hauptsächlich verwendet?",options:["Konstante Referenz","Unveränderlicher String","Nur Zahlen","Nur Funktionen"],answer:0},{question:"Was gibt typeof null zurück?",options:['"object"','"null"','"undefined"','"number"'],answer:0},{question:"Was ist der Unterschied zwischen == und ===?",options:["Kein Unterschied","== vergleicht mit Type Coercion","=== erzwingt Type Coercion","Beide erzwingen Type Coercion"],answer:1},{question:"Wie erstellt man einen Template String?",options:["Einfache Anführungszeichen","Doppelte Anführungszeichen","Backticks","Schrägstrich-Klammern"],answer:2},{question:"Was macht Array.prototype.map?",options:["Filtert Elemente","Verändert das Original-Array","Gibt ein neues Array zurück","Entfernt Duplikate"],answer:2},{question:"Was macht Array.prototype.filter?",options:["Transformiert Elemente","Wählt Elemente basierend auf einer Bedingung aus","Reduziert auf einen einzelnen Wert","Sortiert das Array"],answer:1},{question:"Was gibt Array.prototype.reduce typischerweise zurück?",options:["Ein einzelnes Ergebnis","Ein neues Array","Ein sortiertes Array","Ein Objekt mit Längen-Info"],answer:0},{question:"Wie erstellt man eine flache Kopie eines Arrays?",options:["const copy = arr;","const copy = [...arr];","const copy = arr.map();","const copy = arr.copy();"],answer:1},{question:"Was passiert bei const { name } = user;?",options:["Objekt wird zu String konvertiert","Property name wird extrahiert","Alle Properties werden gelöscht","Eine Methode wird aufgerufen"],answer:1},{question:"Was macht die Rest-Parameter-Syntax (...args)?",options:["Erstellt ein Objekt","Konvertiert zu Zahlen","Bündelt verbleibende Argumente in ein Array","Entfernt Argumente"],answer:2},{question:"Was macht die Spread-Syntax ... in Arrays?",options:["Erstellt ein Promise","Fügt Array-Elemente einzeln ein","Startet eine Schleife","Prüft Typen"],answer:1},{question:"Was ist eine Arrow Function?",options:["Eine Funktion ohne Rückgabewert","Kompakte Syntax für Funktionen","Spezielle Klassen-Funktion","Nur-Browser-Funktion"],answer:1},{question:"Wann ist eine Variable undefined?",options:["Wenn nicht deklariert","Wenn deklariert ohne Wert","Nach delete","Bei Berechnungsfehler"],answer:1},{question:"Was bedeutet truthy?",options:["Nur true",'Jeder Wert außer false, 0, "", null, undefined, NaN',"Alle Zahlen","Nur Strings"],answer:1},{question:"Wie setzt man einen Default-Parameter?",options:["function f(a = 1)","function f(a := 1)","function f(default a)","function f(a ? 1)"],answer:0},{question:'Was gibt Number("5") + 1 zurück?',options:['"51"',"6","NaN","51"],answer:1},{question:'Was passiert bei setTimeout(() => console.log("A"), 0); console.log("B");?',options:["A vor B","B vor A","A und B zusammen","Keine Ausgabe"],answer:1},{question:"Wie prüft man, ob ein Array ein Element enthält?",options:["arr.has(value)","arr.includes(value)","arr.contains(value)","arr.findIndex(value)"],answer:1},{question:"Wie konvertiert man einen String zu einer Zahl ohne Number?",options:['+"42"','"42".toArray()','parseArray("42")',"String(42)"],answer:0}],hx={title:Q0,questions:e_},dx=Object.freeze(Object.defineProperty({__proto__:null,default:hx,questions:e_,title:Q0},Symbol.toStringTag,{value:"Module"})),t_="Woche 1: Architektur & Setup - Quiz",n_=[{question:"Was ist der Hauptzweck des POLAR-Frameworks?",options:["Backend-API für Geodaten","Plugin-basierte OpenLayers-Anwendungen entwickeln","Datenbank-Management-System","CSS-Framework für WebGIS"],answer:1},{question:"Welche Technologien nutzt POLAR im Core?",options:["React + Redux + Leaflet","Vue 3 + Vuex + OpenLayers","Angular + NgRx + Mapbox","Svelte + Leaflet"],answer:1},{question:"Was ist die Aufgabe der createMap()-Funktion in packages/core/?",options:["HTML-Element erstellen","OpenLayers-Map initialisieren und Plugin-Lifecycle starten","Vuex-Store konfigurieren","Router-Setup"],answer:1},{question:"Wo werden Plugins im POLAR-Monorepo registriert?",options:["In packages/core/src/createMap.ts","In packages/clients/<client>/src/addPlugins.ts","In nx.json","In jest.config.ts"],answer:1},{question:"Was ist der Vorteil des Factory Patterns bei Plugins?",options:["Plugins sind schneller","Plugins können zur Laufzeit konfiguriert werden","Plugins brauchen weniger Code","Plugins sind automatisch getestet"],answer:1}],fx={title:t_,questions:n_},gx=Object.freeze(Object.defineProperty({__proto__:null,default:fx,questions:n_,title:t_},Symbol.toStringTag,{value:"Module"})),i_="Woche 2: Plugin-Anatomie - Quiz",s_=[{question:"Welche Properties MUSS eine Plugin-Factory mindestens zurückgeben?",options:["Nur name","name, storeModule, component","name, version, author","component, template, styles"],answer:1},{question:"Warum sollte man 'namespaced: true' im Store-Module setzen?",options:["Bessere Performance","Verhindert Namenskollisionen zwischen Plugins","Ermöglicht Hot-Reload","Ist für TypeScript erforderlich"],answer:1},{question:"Wofür ist das 9Layout-System zuständig?",options:["CSS-Grid-Definition","Positionierung von Plugins in 9 Zonen","Map-Projektion","Responsive Breakpoints"],answer:1},{question:"Wie greift ein Plugin auf die OpenLayers-Map zu?",options:["window.map","this.$map","rootGetters['map/getMap']","import map from '@polar/core'"],answer:2},{question:"Wann sollte man Actions statt Mutations nutzen?",options:["Immer","Nur für asynchrone Operationen","Nur für synchrone State-Änderungen","Nie, Mutations sind ausreichend"],answer:1}],mx={title:i_,questions:s_},px=Object.freeze(Object.defineProperty({__proto__:null,default:mx,questions:s_,title:i_},Symbol.toStringTag,{value:"Module"})),r_="Woche 3: Client-Entwicklung - Quiz",o_=[{question:"Was ist der Hauptunterschied zwischen Generic und Specialized Clients?",options:["Generic nutzt Vue 2, Specialized Vue 3","Generic hat alle Plugins, Specialized nur benötigte","Generic ist für Development, Specialized für Testing","Kein Unterschied"],answer:1},{question:"Wo wird die Map-Konfiguration (View, Layers) definiert?",options:["In addPlugins.ts","In mapConfiguration.ts","In vite.config.js","In index.html"],answer:1},{question:"Wie kann ein Plugin auf State eines anderen Plugins reagieren?",options:["Direkter Import: import { state } from '@polar/other-plugin'","Via store.watch() auf Plugin-State","Via window.addEventListener()","Ist nicht möglich"],answer:1},{question:"Welche Vorteile hat ein Specialized Client?",options:["Schnellere Development-Zeit","Kleinere Bundle-Size und client-spezifisches Branding","Automatische Tests","Bessere TypeScript-Support"],answer:1},{question:"Wofür werden Environment-Variables (import.meta.env) genutzt?",options:["Plugin-Registrierung","API-URLs und Feature-Flags für Dev/Prod","CSS-Styling","TypeScript-Konfiguration"],answer:1}],_x={title:r_,questions:o_},yx=Object.freeze(Object.defineProperty({__proto__:null,default:_x,questions:o_,title:r_},Symbol.toStringTag,{value:"Module"})),a_="Woche 4: Testing & Qualität - Quiz",l_=[{question:"Was ist der Hauptunterschied zwischen Unit- und E2E-Tests?",options:["Unit-Tests sind schneller","Unit-Tests testen isolierte Komponenten, E2E testen vollständige User-Flows","E2E-Tests sind besser","Kein Unterschied, nur andere Tools"],answer:1},{question:"Was macht createTestMountParameters()?",options:["Erstellt neue Plugins","Konfiguriert Vue Test Utils mit Vuetify, Store, Mocks","Startet Playwright-Browser","Generiert Test-Dateien"],answer:1},{question:"Welches Tool wird für E2E-Tests in POLAR verwendet?",options:["Cypress","Selenium","Playwright","Puppeteer"],answer:2},{question:"Was bedeutet eine Coverage von 80% Statements?",options:["80% der Funktionen sind getestet","80% der Code-Zeilen wurden während Tests ausgeführt","80% der Tests sind bestanden","80% der Files haben Tests"],answer:1},{question:"Was ist Test-Driven Development (TDD)?",options:["Tests nur am Ende schreiben","Test zuerst schreiben (rot), dann implementieren (grün), dann refactoren","Automatische Test-Generierung","Tests nur für Production-Code"],answer:1}],vx={title:a_,questions:l_},wx=Object.freeze(Object.defineProperty({__proto__:null,default:vx,questions:l_,title:a_},Symbol.toStringTag,{value:"Module"})),c_="Woche 5: Release & Produktion - Quiz",u_=[{question:"Nach welchem Schema funktioniert Semantic Versioning?",options:["YEAR.MONTH.DAY","MAJOR.MINOR.PATCH","VERSION.BUILD.REVISION","Gibt es kein festes Schema"],answer:1},{question:"Wann ist ein MAJOR-Version-Bump erforderlich?",options:["Bei jedem Bugfix","Bei Breaking Changes (API-Änderungen)","Bei neuen Features","Jeden Monat"],answer:1},{question:"Was gehört NICHT in einen CHANGELOG?",options:["Neue Features (Added)","Bugfixes (Fixed)","Interne Code-Refactorings","Breaking Changes"],answer:2},{question:"Was ist der Unterschied zwischen 'npm publish' und 'npm pack'?",options:["Kein Unterschied","pack erstellt .tgz lokal, publish uploaded zu NPM","publish ist schneller","pack ist deprecated"],answer:1},{question:"Was ist der Vorteil von Conventional Commits (z.B. 'feat:', 'fix:')?",options:["Bessere Git-Performance","Automatische CHANGELOG-Generierung und Version-Bumps","Weniger Merge-Konflikte","Automatische Code-Reviews"],answer:1}],Sx={title:c_,questions:u_},bx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx,questions:u_,title:c_},Symbol.toStringTag,{value:"Module"})),Ex={class:"quiz"},Mx={class:"quiz__question-text"},xx={key:0,class:"quiz__indicator quiz__indicator--correct"},Cx={key:1,class:"quiz__indicator quiz__indicator--incorrect"},kx=["name","value","onUpdate:modelValue","disabled"],Px=["disabled"],Tx={key:0,class:"quiz__warning"},Rx={key:0,class:"quiz__results"},Ax={class:"quiz__result"},Ix={key:0,class:"quiz__result quiz__result--success"},Lx={key:1,class:"quiz__result quiz__result--warning"},Ox={__name:"Quiz",props:{quizId:{type:String,required:!0},moduleId:{type:String,required:!0},lessonId:{type:String,required:!0}},emits:["passed"],setup(t,{emit:e}){const n=t,i=e,s=ln(),r=Object.assign({"../data/quiz/js_fundamentals_1.json":dx,"../data/quiz/polar_week1_quiz.json":gx,"../data/quiz/polar_week2_quiz.json":px,"../data/quiz/polar_week3_quiz.json":yx,"../data/quiz/polar_week4_quiz.json":wx,"../data/quiz/polar_week5_quiz.json":bx}),o=ne(()=>{const g=r[`../data/quiz/${n.quizId}.json`];return(g==null?void 0:g.default)||{title:"Quiz",questions:[]}}),a=as({}),l=Tt(!1),c=Tt(0),u=as({}),h=ne(()=>(o.value.questions||[]).every((m,p)=>a[p]!==void 0)),d=()=>{const g=o.value.questions||[];if(!g.length){l.value=!0,c.value=0;return}let m=0;g.forEach((p,_)=>{const y=a[_]===p.answer;u[_]=y,y&&(m+=1)}),c.value=Math.round(m/g.length*100),l.value=!0,s.commit("quiz/saveResult",{quizId:n.quizId,score:c.value,total:g.length}),c.value>=70&&(s.commit("progress/completeLesson",{moduleId:n.moduleId,lessonId:n.lessonId}),i("passed"))},f=()=>{(o.value.questions||[]).forEach((m,p)=>{u[p]===!1&&(delete a[p],delete u[p])}),l.value=!1,c.value=0};return(g,m)=>(F(),B("div",Ex,[S("h3",null,X(o.value.title),1),S("form",{class:"quiz__list",onSubmit:_0(d,["prevent"])},[(F(!0),B(Re,null,gt(o.value.questions,(p,_)=>(F(),B("div",{key:_,class:vt(["quiz__question",{"quiz__question--correct":u[_]===!0,"quiz__question--incorrect":l.value&&u[_]===!1}])},[S("p",Mx,[On(X(_+1)+". "+X(p.question)+" ",1),u[_]===!0?(F(),B("span",xx,"✓")):Ye("",!0),l.value&&u[_]===!1?(F(),B("span",Cx,"✗")):Ye("",!0)]),(F(!0),B(Re,null,gt(p.options,(y,w)=>(F(),B("label",{key:w,class:vt(["quiz__option",{"quiz__option--selected":a[_]===w,"quiz__option--correct":u[_]===!0&&w===p.answer,"quiz__option--incorrect":l.value&&a[_]===w&&w!==p.answer}])},[kl(S("input",{type:"radio",name:`q-${_}`,value:w,"onUpdate:modelValue":b=>a[_]=b,disabled:l.value||u[_]===!0},null,8,kx),[[zw,a[_]]]),S("span",null,X(y),1)],2))),128))],2))),128)),S("button",{class:"primary-btn",type:"submit",disabled:l.value||!h.value},X(l.value?"Quiz abgeschlossen":"Quiz absenden"),9,Px),!h.value&&!l.value?(F(),B("p",Tx,"Bitte beantworte alle Fragen, bevor du das Quiz absendest.")):Ye("",!0)],32),l.value?(F(),B("div",Rx,[S("p",Ax,"Punktzahl: "+X(c.value)+"%",1),c.value>=70?(F(),B("p",Ix,"Gut gemacht! Lektion als abgeschlossen markiert.")):(F(),B("p",Lx,"Du benötigst mindestens 70% zum Bestehen. Versuche die fehlgeschlagenen Fragen erneut!")),c.value<70?(F(),B("button",{key:2,onClick:f,class:"ghost-btn"},"Fehlgeschlagene Fragen wiederholen")):Ye("",!0)])):Ye("",!0)]))}},Fx=wt(Ox,[["__scopeId","data-v-65d34f31"]]),Nx=[{id:"setup",text:"Tool-Ordner erstellen, in tools.js registrieren, in config.json aktivieren"},{id:"model-structure",text:"Model-Grundstruktur mit defaults, initialize, startTool, stopTool implementieren"},{id:"map-click",text:"Map-Click-Listener registrieren und Features unter Mauszeiger erkennen"},{id:"feature-selection",text:"Feature-Selektion implementieren (max. 2 Features speichern)"},{id:"distance-calc",text:"Distanz-Berechnung mit OpenLayers getDistance() implementieren"},{id:"visualization",text:"Vector-Layer erstellen und Verbindungslinie zwischen Features zeichnen"},{id:"template",text:"template.html erstellen mit Tool-Fenster-Struktur"},{id:"view",text:"view.js implementieren mit Events und render-Methode"},{id:"styling",text:"style.css schreiben für Tool-Fenster und Linien-Visualisierung"},{id:"reset-button",text:"Zurücksetzen-Button implementieren (Auswahl löschen, Karte säubern)"},{id:"cleanup",text:"stopTool() vervollständigen - alle Listener und Layer entfernen"},{id:"testing",text:"Mindestens 3 Unit-Tests mit Mocha/Chai schreiben"},{id:"eslint",text:"npm run lint ausführen und alle Fehler beheben"},{id:"documentation",text:"README.md im Tool-Ordner schreiben (Beschreibung, Verwendung)"},{id:"manual-test",text:"Alle Features manuell im Browser testen und Bugs fixen"},{id:"demo",text:"Screen-Recording erstellen oder Live-Demo vorbereiten"}],Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),Gx=[{id:"proj",text:"Erkläre EPSG:3857 vs EPSG:4326 deinem Mentor."},{id:"wms",text:"Lade mindestens einen WMS-Layer im Playground."},{id:"wfs",text:"Inspiziere die Properties eines WFS-Features."}],zx=Object.freeze(Object.defineProperty({__proto__:null,default:Gx},Symbol.toStringTag,{value:"Module"})),Bx=[{id:"capstone-m1",text:"Milestone 1: Erstelle Projekt-Boilerplate (Ordner, package.json, types.ts, leerer Store)"},{id:"capstone-m2",text:"Milestone 2: Implementiere Vuex-Store (State, Getters, Actions, Mutations)"},{id:"capstone-m3",text:"Milestone 3: Baue Vue-Component mit Vuetify (Buttons, Messung-Anzeige)"},{id:"capstone-m4",text:"Milestone 4: Integriere OpenLayers (Draw-Interaction, Berechnungen)"},{id:"capstone-m5",text:"Milestone 5: Registriere Plugin in Snowbox (addPlugins.ts, 9Layout)"},{id:"capstone-m6",text:"Milestone 6: Schreibe Unit-Tests (≥80% Coverage, Store + Component)"},{id:"capstone-m7",text:"Milestone 7: Erstelle E2E-Test mit Playwright (Distanz + Fläche messen)"},{id:"capstone-m8",text:"Milestone 8: Finalisiere README, CHANGELOG und npm publish --dry-run"}],jx=Object.freeze(Object.defineProperty({__proto__:null,default:Bx},Symbol.toStringTag,{value:"Module"})),Wx=[{id:"w1-snowbox",text:"Starte Snowbox lokal und öffne DevTools (Vue + Vuex Tab)"},{id:"w1-plugins",text:"Erstelle eine Liste aller Plugins in packages/plugins/ mit Kategorie"},{id:"w1-store",text:"Dokumentiere die Vuex-Store-Struktur (Root-Module und Plugin-Module)"},{id:"w1-createmap",text:"Lies packages/core/src/createMap.ts und erkläre den Map-Lifecycle"},{id:"w1-bonus",text:"[Bonus] Erstelle ein 'HelloWorld'-Plugin mit Factory, Store und Component"}],Vx=Object.freeze(Object.defineProperty({__proto__:null,default:Wx},Symbol.toStringTag,{value:"Module"})),Ux=[{id:"w2-counter-factory",text:"Erstelle Factory-Funktion für Counter-Plugin mit Options-Interface"},{id:"w2-counter-store",text:"Implementiere Store-Module: State (count), Actions (increment/decrement), Getters"},{id:"w2-counter-component",text:"Baue Vue-Component mit Vuetify (v-btn, v-card) und Store-Anbindung"},{id:"w2-nine-layout",text:"Integriere Counter-Plugin in 9Layout (Position: top-left)"},{id:"w2-snowbox-test",text:"Registriere Plugin in addPlugins.ts und teste in Snowbox"},{id:"w2-bonus",text:"[Bonus] Erweitere Counter mit Reset-Button und LocalStorage-Persistenz"}],Kx=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),$x=[{id:"w3-client-setup",text:"Erstelle packages/clients/dashboard/ mit package.json und vite.config.js"},{id:"w3-addplugins",text:"Konfiguriere addPlugins.ts mit Zoom, LayerChooser, Legend (nur diese 3)"},{id:"w3-mapconfig",text:"Passe mapConfiguration.ts an: Berlin als Center (13.4, 52.5), Zoom 11"},{id:"w3-theme",text:"Erstelle Custom Vuetify-Theme mit Primary-Color #1E3A8A"},{id:"w3-npm-script",text:"Füge 'dashboard'-Script zu Root package.json hinzu und teste Start"},{id:"w3-bonus",text:"[Bonus] Implementiere Theme-Switcher (Dark/Light) in TopBar"}],qx=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),Hx=[{id:"w4-store-tests",text:"Schreibe Unit-Tests für Counter-Store (mindestens 8 Tests für Mutations/Actions/Getters)"},{id:"w4-component-tests",text:"Teste CounterComponent mit @vue/test-utils und createTestMountParameters (5 Tests)"},{id:"w4-coverage",text:"Erreiche ≥80% Code-Coverage für Counter-Plugin (npm run test:coverage)"},{id:"w4-e2e",text:"Erstelle e2e/counter.spec.ts mit Playwright (Test: Increment → Decrement → Reset)"},{id:"w4-tdd",text:"Implementiere 'IncrementByTen'-Feature test-first (TDD-Workflow)"},{id:"w4-bonus",text:"[Bonus] Integriere Visual Regression Tests mit Playwright-Screenshots"}],Zx=Object.freeze(Object.defineProperty({__proto__:null,default:Hx},Symbol.toStringTag,{value:"Module"})),Xx=[{id:"w5-changelog",text:"Erstelle CHANGELOG.md für Counter-Plugin (v1.0.0 mit Added/Fixed/Changed)"},{id:"w5-readme",text:"Schreibe README.md mit Installation, Usage, API-Dokumentation"},{id:"w5-package-json",text:"Konfiguriere package.json: Version 1.0.0, publishConfig, main/types fields"},{id:"w5-build",text:"Build Counter-Plugin und teste Dry-Run: npm publish --dry-run"},{id:"w5-git-tag",text:"Erstelle Git-Commit + Tag für Release: git tag counter-v1.0.0"},{id:"w5-bonus",text:"[Bonus] Richte GitHub Actions Workflow für automatisches NPM-Publishing ein"}],Yx=Object.freeze(Object.defineProperty({__proto__:null,default:Xx},Symbol.toStringTag,{value:"Module"})),Jx={class:"task-list"},Qx=["onClick"],e2=["checked"],Rg="onboarding-tasks-",t2={__name:"TaskList",props:{tasksId:{type:String,required:!0}},emits:["completed"],setup(t,{emit:e}){const n=t,i=e,s=Object.assign({"../data/tasks/capstone_tasks.json":Dx,"../data/tasks/geo_basics_tasks.json":zx,"../data/tasks/polar_capstone_tasks.json":jx,"../data/tasks/polar_week1_tasks.json":Vx,"../data/tasks/polar_week2_tasks.json":Kx,"../data/tasks/polar_week3_tasks.json":qx,"../data/tasks/polar_week4_tasks.json":Zx,"../data/tasks/polar_week5_tasks.json":Yx}),r=ne(()=>{var c;return((c=s[`../data/tasks/${n.tasksId}.json`])==null?void 0:c.default)||[]}),o=as({});(()=>{if(typeof window>"u")return;const c=localStorage.getItem(`${Rg}${n.tasksId}`);c&&Object.assign(o,JSON.parse(c))})();const l=c=>{o[c]=!o[c]};return Tn(o,()=>{typeof window>"u"||(localStorage.setItem(`${Rg}${n.tasksId}`,JSON.stringify(o)),r.value.length&&r.value.every(c=>o[c.id])&&i("completed"))},{deep:!0,immediate:!0}),(c,u)=>(F(),B("div",Jx,[(F(!0),B(Re,null,gt(r.value,h=>(F(),B("div",{key:h.id,class:"task-item",onClick:d=>l(h.id)},[S("input",{type:"checkbox",checked:o[h.id],readonly:""},null,8,e2),S("span",null,X(h.text),1)],8,Qx))),128))]))}},n2=wt(t2,[["__scopeId","data-v-7dd421c6"]]);class Fi{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const Nr={PROPERTYCHANGE:"propertychange"};class md{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function i2(t,e,n){let i,s;n=n||ki;let r=0,o=t.length,a=!1;for(;r<o;)i=r+(o-r>>1),s=+n(t[i],e),s<0?r=i+1:(o=i,a=!s);return a?r:~r}function ki(t,e){return t>e?1:t<e?-1:0}function pd(t,e,n){if(t[0]<=e)return 0;const i=t.length;if(e<=t[i-1])return i-1;if(typeof n=="function"){for(let s=1;s<i;++s){const r=t[s];if(r===e)return s;if(r<e)return n(e,t[s-1],r)>0?s-1:s}return i-1}if(n>0){for(let s=1;s<i;++s)if(t[s]<e)return s-1;return i-1}if(n<0){for(let s=1;s<i;++s)if(t[s]<=e)return s;return i-1}for(let s=1;s<i;++s){if(t[s]==e)return s;if(t[s]<e)return t[s-1]-e<e-t[s]?s-1:s}return i-1}function s2(t,e,n){for(;e<n;){const i=t[e];t[e]=t[n],t[n]=i,++e,--n}}function Yt(t,e){const n=Array.isArray(e)?e:[e],i=n.length;for(let s=0;s<i;s++)t[t.length]=n[s]}function ms(t,e){const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function r2(t,e,n){const i=e||ki;return t.every(function(s,r){if(r===0)return!0;const o=i(t[r-1],s);return!(o>0||o===0)})}function ta(){return!0}function xc(){return!1}function Dr(){}function h_(t){let e=!1,n,i,s;return function(){const r=Array.prototype.slice.call(arguments);return(!e||this!==s||!ms(r,i))&&(e=!0,s=this,i=r,n=t.apply(this,arguments)),n}}function o2(t){function e(){let n;try{n=t()}catch(i){return Promise.reject(i)}return n instanceof Promise?n:Promise.resolve(n)}return e()}function Ma(t){for(const e in t)delete t[e]}function Ds(t){let e;for(e in t)return!1;return!e}class Cc extends md{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,n){if(!e||!n)return;const i=this.listeners_||(this.listeners_={}),s=i[e]||(i[e]=[]);s.includes(n)||s.push(n)}dispatchEvent(e){const n=typeof e=="string",i=n?e:e.type,s=this.listeners_&&this.listeners_[i];if(!s)return;const r=n?new Fi(e):e;r.target||(r.target=this.eventTarget_||this);const o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});i in o||(o[i]=0,a[i]=0),++o[i];let l;for(let c=0,u=s.length;c<u;++c)if("handleEvent"in s[c]?l=s[c].handleEvent(r):l=s[c].call(this,r),l===!1||r.propagationStopped){l=!1;break}if(--o[i]===0){let c=a[i];for(delete a[i];c--;)this.removeEventListener(i,Dr);delete o[i]}return l}disposeInternal(){this.listeners_&&Ma(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,n){if(!this.listeners_)return;const i=this.listeners_[e];if(!i)return;const s=i.indexOf(n);s!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(i[s]=Dr,++this.pendingRemovals_[e]):(i.splice(s,1),i.length===0&&delete this.listeners_[e]))}}const Se={CHANGE:"change",ERROR:"error",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function Fe(t,e,n,i,s){if(i&&i!==t&&(n=n.bind(i)),s){const o=n;n=function(){t.removeEventListener(e,n),o.apply(this,arguments)}}const r={target:t,type:e,listener:n};return t.addEventListener(e,n),r}function Gl(t,e,n,i){return Fe(t,e,n,i,!0)}function rt(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),Ma(t))}class xa extends Cc{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(Se.CHANGE)}getRevision(){return this.revision_}onInternal(e,n){if(Array.isArray(e)){const i=e.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=Fe(this,e[r],n);return s}return Fe(this,e,n)}onceInternal(e,n){let i;if(Array.isArray(e)){const s=e.length;i=new Array(s);for(let r=0;r<s;++r)i[r]=Gl(this,e[r],n)}else i=Gl(this,e,n);return n.ol_key=i,i}unInternal(e,n){const i=n.ol_key;if(i)a2(i);else if(Array.isArray(e))for(let s=0,r=e.length;s<r;++s)this.removeEventListener(e[s],n);else this.removeEventListener(e,n)}}xa.prototype.on;xa.prototype.once;xa.prototype.un;function a2(t){if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)rt(t[e]);else rt(t)}function pe(){throw new Error("Unimplemented abstract method.")}let l2=0;function qe(t){return t.ol_uid||(t.ol_uid=String(++l2))}class Ag extends Fi{constructor(e,n,i){super(e),this.key=n,this.oldValue=i}}class li extends xa{constructor(e){super(),this.on,this.once,this.un,qe(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let n;return this.values_&&this.values_.hasOwnProperty(e)&&(n=this.values_[e]),n}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,n){let i;i=`change:${e}`,this.hasListener(i)&&this.dispatchEvent(new Ag(i,e,n)),i=Nr.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new Ag(i,e,n))}addChangeListener(e,n){this.addEventListener(`change:${e}`,n)}removeChangeListener(e,n){this.removeEventListener(`change:${e}`,n)}set(e,n,i){const s=this.values_||(this.values_={});if(i)s[e]=n;else{const r=s[e];s[e]=n,r!==n&&this.notify(e,r)}}setProperties(e,n){for(const i in e)this.set(i,e[i],n)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,n){if(this.values_&&e in this.values_){const i=this.values_[e];delete this.values_[e],Ds(this.values_)&&(this.values_=null),n||this.notify(e,i)}}}const tn={ADD:"add",REMOVE:"remove"},Ig={LENGTH:"length"};class Za extends Fi{constructor(e,n,i){super(e),this.element=n,this.index=i}}class Jn extends li{constructor(e,n){if(super(),this.on,this.once,this.un,n=n||{},this.unique_=!!n.unique,this.array_=e||[],this.unique_)for(let i=0,s=this.array_.length;i<s;++i)this.assertUnique_(this.array_[i],i);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let n=0,i=e.length;n<i;++n)this.push(e[n]);return this}forEach(e){const n=this.array_;for(let i=0,s=n.length;i<s;++i)e(n[i],i,n)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Ig.LENGTH)}insertAt(e,n){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(n),this.array_.splice(e,0,n),this.updateLength_(),this.dispatchEvent(new Za(tn.ADD,n,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){this.unique_&&this.assertUnique_(e);const n=this.getLength();return this.insertAt(n,e),this.getLength()}remove(e){const n=this.array_;for(let i=0,s=n.length;i<s;++i)if(n[i]===e)return this.removeAt(i)}removeAt(e){if(e<0||e>=this.getLength())return;const n=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Za(tn.REMOVE,n,e)),n}setAt(e,n){const i=this.getLength();if(e>=i){this.insertAt(e,n);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(n,e);const s=this.array_[e];this.array_[e]=n,this.dispatchEvent(new Za(tn.REMOVE,s,e)),this.dispatchEvent(new Za(tn.ADD,n,e))}updateLength_(){this.set(Ig.LENGTH,this.array_.length)}assertUnique_(e,n){for(let i=0,s=this.array_.length;i<s;++i)if(this.array_[i]===e&&i!==n)throw new Error("Duplicate item added to a unique collection")}}const Ze={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};function Ne(t,e){if(!t)throw new Error(e)}function mt(t,e,n){return Math.min(Math.max(t,e),n)}function c2(t,e,n,i,s,r){const o=s-n,a=r-i;if(o!==0||a!==0){const l=((t-n)*o+(e-i)*a)/(o*o+a*a);l>1?(n=s,i=r):l>0&&(n+=o*l,i+=a*l)}return Os(t,e,n,i)}function Os(t,e,n,i){const s=n-t,r=i-e;return s*s+r*r}function u2(t){const e=t.length;for(let i=0;i<e;i++){let s=i,r=Math.abs(t[i][i]);for(let a=i+1;a<e;a++){const l=Math.abs(t[a][i]);l>r&&(r=l,s=a)}if(r===0)return null;const o=t[s];t[s]=t[i],t[i]=o;for(let a=i+1;a<e;a++){const l=-t[a][i]/t[i][i];for(let c=i;c<e+1;c++)i==c?t[a][c]=0:t[a][c]+=l*t[i][c]}}const n=new Array(e);for(let i=e-1;i>=0;i--){n[i]=t[i][e]/t[i][i];for(let s=i-1;s>=0;s--)t[s][e]-=t[s][i]*n[i]}return n}function yl(t){return t*Math.PI/180}function Fs(t,e){const n=t%e;return n*e<0?n+e:n}function mn(t,e,n){return t+n*(e-t)}function kc(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}function Lg(t,e){return Math.round(kc(t,e))}function Xa(t,e){return Math.floor(kc(t,e))}function Ya(t,e){return Math.ceil(kc(t,e))}class d_ extends li{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;const n=Object.assign({},e);typeof e.properties=="object"&&(delete n.properties,Object.assign(n,e.properties)),n[Ze.OPACITY]=e.opacity!==void 0?e.opacity:1,Ne(typeof n[Ze.OPACITY]=="number","Layer opacity must be a number"),n[Ze.VISIBLE]=e.visible!==void 0?e.visible:!0,n[Ze.Z_INDEX]=e.zIndex,n[Ze.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,n[Ze.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,n[Ze.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,n[Ze.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=n.className!==void 0?n.className:"ol-layer",delete n.className,this.setProperties(n),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){const n=this.state_||{layer:this,managed:e===void 0?!0:e},i=this.getZIndex();return n.opacity=mt(Math.round(this.getOpacity()*100)/100,0,1),n.visible=this.getVisible(),n.extent=this.getExtent(),n.zIndex=i===void 0&&!n.managed?1/0:i,n.maxResolution=this.getMaxResolution(),n.minResolution=Math.max(this.getMinResolution(),0),n.minZoom=this.getMinZoom(),n.maxZoom=this.getMaxZoom(),this.state_=n,n}getLayersArray(e){return pe()}getLayerStatesArray(e){return pe()}getExtent(){return this.get(Ze.EXTENT)}getMaxResolution(){return this.get(Ze.MAX_RESOLUTION)}getMinResolution(){return this.get(Ze.MIN_RESOLUTION)}getMinZoom(){return this.get(Ze.MIN_ZOOM)}getMaxZoom(){return this.get(Ze.MAX_ZOOM)}getOpacity(){return this.get(Ze.OPACITY)}getSourceState(){return pe()}getVisible(){return this.get(Ze.VISIBLE)}getZIndex(){return this.get(Ze.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(Ze.EXTENT,e)}setMaxResolution(e){this.set(Ze.MAX_RESOLUTION,e)}setMinResolution(e){this.set(Ze.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(Ze.MAX_ZOOM,e)}setMinZoom(e){this.set(Ze.MIN_ZOOM,e)}setOpacity(e){Ne(typeof e=="number","Layer opacity must be a number"),this.set(Ze.OPACITY,e)}setVisible(e){this.set(Ze.VISIBLE,e)}setZIndex(e){this.set(Ze.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Cn={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},Ot={ANIMATING:0,INTERACTING:1},In={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},h2=42,_d=256,yd={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};let vd=class{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||yd[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}};const Ca=6378137,dr=Math.PI*Ca,d2=[-dr,-dr,dr,dr],f2=[-180,-85,180,85],Ja=Ca*Math.log(Math.tan(Math.PI/2));class er extends vd{constructor(e){super({code:e,units:"m",extent:d2,global:!0,worldExtent:f2,getPointResolution:function(n,i){return n/Math.cosh(i[1]/Ca)}})}}const Og=[new er("EPSG:3857"),new er("EPSG:102100"),new er("EPSG:102113"),new er("EPSG:900913"),new er("http://www.opengis.net/def/crs/EPSG/0/3857"),new er("http://www.opengis.net/gml/srs/epsg.xml#3857")];function g2(t,e,n){const i=t.length;n=n>1?n:2,e===void 0&&(n>2?e=t.slice():e=new Array(i));for(let s=0;s<i;s+=n){e[s]=dr*t[s]/180;let r=Ca*Math.log(Math.tan(Math.PI*(+t[s+1]+90)/360));r>Ja?r=Ja:r<-Ja&&(r=-Ja),e[s+1]=r}return e}function m2(t,e,n){const i=t.length;n=n>1?n:2,e===void 0&&(n>2?e=t.slice():e=new Array(i));for(let s=0;s<i;s+=n)e[s]=180*t[s]/dr,e[s+1]=360*Math.atan(Math.exp(t[s+1]/Ca))/Math.PI-90;return e}const p2=6378137,Fg=[-180,-90,180,90],_2=Math.PI*p2/180;class bs extends vd{constructor(e,n){super({code:e,units:"degrees",extent:Fg,axisOrientation:n,global:!0,metersPerUnit:_2,worldExtent:Fg})}}const Ng=[new bs("CRS:84"),new bs("EPSG:4326","neu"),new bs("urn:ogc:def:crs:OGC:1.3:CRS84"),new bs("urn:ogc:def:crs:OGC:2:84"),new bs("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new bs("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new bs("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let nh={};function y2(t){return nh[t]||nh[t.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function v2(t,e){nh[t]=e}let Cr={};function Gr(t,e,n){const i=t.getCode(),s=e.getCode();i in Cr||(Cr[i]={}),Cr[i][s]=n}function f_(t,e){let n;return t in Cr&&e in Cr[t]&&(n=Cr[t][e]),n}const bt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Dg(t){const e=vn();for(let n=0,i=t.length;n<i;++n)Do(e,t[n]);return e}function w2(t,e,n){const i=Math.min.apply(null,t),s=Math.min.apply(null,e),r=Math.max.apply(null,t),o=Math.max.apply(null,e);return jn(i,s,r,o,n)}function na(t,e,n){return n?(n[0]=t[0]-e,n[1]=t[1]-e,n[2]=t[2]+e,n[3]=t[3]+e,n):[t[0]-e,t[1]-e,t[2]+e,t[3]+e]}function g_(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t.slice()}function Ks(t,e,n){let i,s;return e<t[0]?i=t[0]-e:t[2]<e?i=e-t[2]:i=0,n<t[1]?s=t[1]-n:t[3]<n?s=n-t[3]:s=0,i*i+s*s}function zr(t,e){return wd(t,e[0],e[1])}function fr(t,e){return t[0]<=e[0]&&e[2]<=t[2]&&t[1]<=e[1]&&e[3]<=t[3]}function wd(t,e,n){return t[0]<=e&&e<=t[2]&&t[1]<=n&&n<=t[3]}function ih(t,e){const n=t[0],i=t[1],s=t[2],r=t[3],o=e[0],a=e[1];let l=bt.UNKNOWN;return o<n?l=l|bt.LEFT:o>s&&(l=l|bt.RIGHT),a<i?l=l|bt.BELOW:a>r&&(l=l|bt.ABOVE),l===bt.UNKNOWN&&(l=bt.INTERSECTING),l}function vn(){return[1/0,1/0,-1/0,-1/0]}function jn(t,e,n,i,s){return s?(s[0]=t,s[1]=e,s[2]=n,s[3]=i,s):[t,e,n,i]}function Yr(t){return jn(1/0,1/0,-1/0,-1/0,t)}function m_(t,e){const n=t[0],i=t[1];return jn(n,i,n,i,e)}function Sd(t,e,n,i,s){const r=Yr(s);return __(r,t,e,n,i)}function ia(t,e){return t[0]==e[0]&&t[2]==e[2]&&t[1]==e[1]&&t[3]==e[3]}function p_(t,e){return e[0]<t[0]&&(t[0]=e[0]),e[2]>t[2]&&(t[2]=e[2]),e[1]<t[1]&&(t[1]=e[1]),e[3]>t[3]&&(t[3]=e[3]),t}function Do(t,e){e[0]<t[0]&&(t[0]=e[0]),e[0]>t[2]&&(t[2]=e[0]),e[1]<t[1]&&(t[1]=e[1]),e[1]>t[3]&&(t[3]=e[1])}function __(t,e,n,i,s){for(;n<i;n+=s)S2(t,e[n],e[n+1]);return t}function S2(t,e,n){t[0]=Math.min(t[0],e),t[1]=Math.min(t[1],n),t[2]=Math.max(t[2],e),t[3]=Math.max(t[3],n)}function y_(t,e){let n;return n=e(Pc(t)),n||(n=e(Tc(t)),n)||(n=e(Rc(t)),n)||(n=e($s(t)),n)?n:!1}function sh(t){let e=0;return ka(t)||(e=ze(t)*zt(t)),e}function Pc(t){return[t[0],t[1]]}function Tc(t){return[t[2],t[1]]}function us(t){return[(t[0]+t[2])/2,(t[1]+t[3])/2]}function b2(t,e){let n;if(e==="bottom-left")n=Pc(t);else if(e==="bottom-right")n=Tc(t);else if(e==="top-left")n=$s(t);else if(e==="top-right")n=Rc(t);else throw new Error("Invalid corner");return n}function rh(t,e,n,i,s){const[r,o,a,l,c,u,h,d]=oh(t,e,n,i);return jn(Math.min(r,a,c,h),Math.min(o,l,u,d),Math.max(r,a,c,h),Math.max(o,l,u,d),s)}function oh(t,e,n,i){const s=e*i[0]/2,r=e*i[1]/2,o=Math.cos(n),a=Math.sin(n),l=s*o,c=s*a,u=r*o,h=r*a,d=t[0],f=t[1];return[d-l+h,f-c-u,d-l-h,f-c+u,d+l-h,f+c+u,d+l+h,f+c-u,d-l+h,f-c-u]}function zt(t){return t[3]-t[1]}function Go(t,e,n){const i=n||vn();return sn(t,e)?(t[0]>e[0]?i[0]=t[0]:i[0]=e[0],t[1]>e[1]?i[1]=t[1]:i[1]=e[1],t[2]<e[2]?i[2]=t[2]:i[2]=e[2],t[3]<e[3]?i[3]=t[3]:i[3]=e[3]):Yr(i),i}function $s(t){return[t[0],t[3]]}function Rc(t){return[t[2],t[3]]}function ze(t){return t[2]-t[0]}function sn(t,e){return t[0]<=e[2]&&t[2]>=e[0]&&t[1]<=e[3]&&t[3]>=e[1]}function ka(t){return t[2]<t[0]||t[3]<t[1]}function E2(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t}function M2(t,e,n){let i=!1;const s=ih(t,e),r=ih(t,n);if(s===bt.INTERSECTING||r===bt.INTERSECTING)i=!0;else{const o=t[0],a=t[1],l=t[2],c=t[3],u=e[0],h=e[1],d=n[0],f=n[1],g=(f-h)/(d-u);let m,p;r&bt.ABOVE&&!(s&bt.ABOVE)&&(m=d-(f-c)/g,i=m>=o&&m<=l),!i&&r&bt.RIGHT&&!(s&bt.RIGHT)&&(p=f-(d-l)*g,i=p>=a&&p<=c),!i&&r&bt.BELOW&&!(s&bt.BELOW)&&(m=d-(f-a)/g,i=m>=o&&m<=l),!i&&r&bt.LEFT&&!(s&bt.LEFT)&&(p=f-(d-o)*g,i=p>=a&&p<=c)}return i}function x2(t,e,n,i){if(ka(t))return Yr(n);let s=[];s=[t[0],t[1],t[2],t[1],t[2],t[3],t[0],t[3]],e(s,s,2);const r=[],o=[];for(let a=0,l=s.length;a<l;a+=2)r.push(s[a]),o.push(s[a+1]);return w2(r,o,n)}function v_(t,e){const n=e.getExtent(),i=us(t);if(e.canWrapX()&&(i[0]<n[0]||i[0]>=n[2])){const s=ze(n),o=Math.floor((i[0]-n[0])/s)*s;t[0]-=o,t[2]-=o}return t}function w_(t,e,n){if(e.canWrapX()){const i=e.getExtent();if(!isFinite(t[0])||!isFinite(t[2]))return[[i[0],t[1],i[2],t[3]]];v_(t,e);const s=ze(i);if(ze(t)>s&&!n)return[[i[0],t[1],i[2],t[3]]];if(t[0]<i[0])return[[t[0]+s,t[1],i[2],t[3]],[i[0],t[1],t[2],t[3]]];if(t[2]>i[2])return[[t[0],t[1],i[2],t[3]],[i[0],t[1],t[2]-s,t[3]]]}return[t]}function S_(t,e){const n=(""+t).split("."),i=(""+e).split(".");for(let s=0;s<Math.max(n.length,i.length);s++){const r=parseInt(n[s]||"0",10),o=parseInt(i[s]||"0",10);if(r>o)return 1;if(o>r)return-1}return 0}function C2(t,e){return t[0]+=+e[0],t[1]+=+e[1],t}function zl(t,e){let n=!0;for(let i=t.length-1;i>=0;--i)if(t[i]!=e[i]){n=!1;break}return n}function bd(t,e){const n=Math.cos(e),i=Math.sin(e),s=t[0]*n-t[1]*i,r=t[1]*n+t[0]*i;return t[0]=s,t[1]=r,t}function k2(t,e){return t[0]*=e,t[1]*=e,t}function b_(t,e){if(e.canWrapX()){const n=ze(e.getExtent()),i=E_(t,e,n);i&&(t[0]-=i*n)}return t}function E_(t,e,n){const i=e.getExtent();let s=0;return e.canWrapX()&&(t[0]<i[0]||t[0]>i[2])&&(n=n||ze(i),s=Math.floor((t[0]-i[0])/n)),s}const P2=63710088e-1;function Gg(t,e,n){n=n||P2;const i=yl(t[1]),s=yl(e[1]),r=(s-i)/2,o=yl(e[0]-t[0])/2,a=Math.sin(r)*Math.sin(r)+Math.sin(o)*Math.sin(o)*Math.cos(i)*Math.cos(s);return 2*n*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}function M_(...t){console.warn(...t)}let ah=!0;function x_(t){ah=!1}function Ed(t,e){if(e!==void 0){for(let n=0,i=t.length;n<i;++n)e[n]=t[n];e=e}else e=t.slice();return e}function C_(t,e){if(e!==void 0&&t!==e){for(let n=0,i=t.length;n<i;++n)e[n]=t[n];t=e}return t}function k_(t){v2(t.getCode(),t),Gr(t,t,Ed)}function T2(t){t.forEach(k_)}function Ae(t){return typeof t=="string"?y2(t):t||null}function zg(t,e,n,i){t=Ae(t);let s;const r=t.getPointResolutionFunc();if(r)s=r(e,n);else{const o=t.getUnits();if(o=="degrees"&&!i||i=="degrees")s=e;else{const a=xd(t,Ae("EPSG:4326"));if(a===C_&&o!=="degrees")s=e*t.getMetersPerUnit();else{let c=[n[0]-e/2,n[1],n[0]+e/2,n[1],n[0],n[1]-e/2,n[0],n[1]+e/2];c=a(c,c,2);const u=Gg(c.slice(0,2),c.slice(2,4)),h=Gg(c.slice(4,6),c.slice(6,8));s=(u+h)/2}const l=t.getMetersPerUnit();l!==void 0&&(s/=l)}}return s}function lh(t){T2(t),t.forEach(function(e){t.forEach(function(n){e!==n&&Gr(e,n,Ed)})})}function R2(t,e,n,i){t.forEach(function(s){e.forEach(function(r){Gr(s,r,n),Gr(r,s,i)})})}function Md(t,e){return t?typeof t=="string"?Ae(t):t:Ae(e)}function Bg(t){return function(e,n,i){const s=e.length;i=i!==void 0?i:2,n=n!==void 0?n:new Array(s);for(let r=0;r<s;r+=i){const o=t(e.slice(r,r+i)),a=o.length;for(let l=0,c=i;l<c;++l)n[r+l]=l>=a?e[r+l]:o[l]}return n}}function A2(t,e,n,i){const s=Ae(t),r=Ae(e);Gr(s,r,Bg(n)),Gr(r,s,Bg(i))}function jg(t,e){return x_(),Ji(t,"EPSG:4326","EPSG:3857")}function Yi(t,e){if(t===e)return!0;const n=t.getUnits()===e.getUnits();return(t.getCode()===e.getCode()||xd(t,e)===Ed)&&n}function xd(t,e){const n=t.getCode(),i=e.getCode();let s=f_(n,i);return s||(s=C_),s}function Br(t,e){const n=Ae(t),i=Ae(e);return xd(n,i)}function Ji(t,e,n){return Br(e,n)(t,void 0,t.length)}function I2(t,e,n,i){const s=Br(e,n);return x2(t,s,void 0)}function ch(t,e){return t}function yi(t,e){return ah&&!zl(t,[0,0])&&t[0]>=-180&&t[0]<=180&&t[1]>=-90&&t[1]<=90&&(ah=!1,M_("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),t}function P_(t,e){return t}function Ts(t,e){return t}function Wg(t,e,n){return function(i){let s,r;if(t.canWrapX()){const o=t.getExtent(),a=ze(o);i=i.slice(0),r=E_(i,t,a),r&&(i[0]=i[0]-r*a),i[0]=mt(i[0],o[0],o[2]),i[1]=mt(i[1],o[1],o[3]),s=n(i)}else s=n(i);return r&&e.canWrapX()&&(s[0]+=r*ze(e.getExtent())),s}}function L2(){lh(Og),lh(Ng),R2(Ng,Og,g2,m2)}L2();function Vg(t,e,n){return function(i,s,r,o,a){if(!i)return;if(!s&&!e)return i;const l=e?0:r[0]*s,c=e?0:r[1]*s,u=a?a[0]:0,h=a?a[1]:0;let d=t[0]+l/2+u,f=t[2]-l/2+u,g=t[1]+c/2+h,m=t[3]-c/2+h;d>f&&(d=(f+d)/2,f=d),g>m&&(g=(m+g)/2,m=g);let p=mt(i[0],d,f),_=mt(i[1],g,m);if(o&&n&&s){const y=30*s;p+=-y*Math.log(1+Math.max(0,d-i[0])/y)+y*Math.log(1+Math.max(0,i[0]-f)/y),_+=-y*Math.log(1+Math.max(0,g-i[1])/y)+y*Math.log(1+Math.max(0,i[1]-m)/y)}return[p,_]}}function O2(t){return t}function Cd(t,e,n,i){const s=ze(e)/n[0],r=zt(e)/n[1];return i?Math.min(t,Math.max(s,r)):Math.min(t,Math.min(s,r))}function kd(t,e,n){let i=Math.min(t,e);const s=50;return i*=Math.log(1+s*Math.max(0,t/e-1))/s+1,n&&(i=Math.max(i,n),i/=Math.log(1+s*Math.max(0,n/t-1))/s+1),mt(i,n/2,e*2)}function F2(t,e,n,i){return e=e!==void 0?e:!0,function(s,r,o,a){if(s!==void 0){const l=t[0],c=t[t.length-1],u=n?Cd(l,n,o,i):l;if(a)return e?kd(s,u,c):mt(s,c,u);const h=Math.min(u,s),d=Math.floor(pd(t,h,r));return t[d]>u&&d<t.length-1?t[d+1]:t[d]}}}function N2(t,e,n,i,s,r){return i=i!==void 0?i:!0,n=n!==void 0?n:0,function(o,a,l,c){if(o!==void 0){const u=s?Cd(e,s,l,r):e;if(c)return i?kd(o,u,n):mt(o,n,u);const h=1e-9,d=Math.ceil(Math.log(e/u)/Math.log(t)-h),f=-a*(.5-h)+.5,g=Math.min(u,o),m=Math.floor(Math.log(e/g)/Math.log(t)+f),p=Math.max(d,m),_=e/Math.pow(t,p);return mt(_,n,u)}}}function Ug(t,e,n,i,s){return n=n!==void 0?n:!0,function(r,o,a,l){if(r!==void 0){const c=i?Cd(t,i,a,s):t;return!n||!l?mt(r,e,c):kd(r,c,e)}}}function Pd(t){if(t!==void 0)return 0}function Kg(t){if(t!==void 0)return t}function D2(t){const e=2*Math.PI/t;return function(n,i){if(i)return n;if(n!==void 0)return n=Math.floor(n/e+.5)*e,n}}function G2(t){const e=yl(5);return function(n,i){return i||n===void 0?n:Math.abs(n)<=e?0:n}}function T_(t){return Math.pow(t,3)}function Jr(t){return 1-T_(1-t)}function z2(t){return 3*t*t-2*t*t*t}function B2(t){return t}new Array(6);function Nn(){return[1,0,0,1,0,0]}function j2(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function Ct(t,e){const n=e[0],i=e[1];return e[0]=t[0]*n+t[2]*i+t[4],e[1]=t[1]*n+t[3]*i+t[5],e}function Li(t,e,n,i,s,r,o,a){const l=Math.sin(r),c=Math.cos(r);return t[0]=i*c,t[1]=s*l,t[2]=-i*l,t[3]=s*c,t[4]=o*i*c-a*i*l+e,t[5]=o*s*l+a*s*c+n,t}function R_(t,e){const n=W2(e);Ne(n!==0,"Transformation matrix cannot be inverted");const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5];return t[0]=o/n,t[1]=-s/n,t[2]=-r/n,t[3]=i/n,t[4]=(r*l-o*a)/n,t[5]=-(i*l-s*a)/n,t}function W2(t){return t[0]*t[3]-t[1]*t[2]}const $g=[1e6,1e6,1e6,1e6,2,2];function V2(t){return"matrix("+t.map((n,i)=>Math.round(n*$g[i])/$g[i]).join(", ")+")"}function rs(t,e,n,i,s,r){r=r||[];let o=0;for(let a=e;a<n;a+=i){const l=t[a],c=t[a+1];r[o++]=s[0]*l+s[2]*c+s[4],r[o++]=s[1]*l+s[3]*c+s[5]}return r&&r.length!=o&&(r.length=o),r}function A_(t,e,n,i,s,r,o){o=o||[];const a=Math.cos(s),l=Math.sin(s),c=r[0],u=r[1];let h=0;for(let d=e;d<n;d+=i){const f=t[d]-c,g=t[d+1]-u;o[h++]=c+f*a-g*l,o[h++]=u+f*l+g*a;for(let m=d+2;m<d+i;++m)o[h++]=t[m]}return o&&o.length!=h&&(o.length=h),o}function U2(t,e,n,i,s,r,o,a){a=a||[];const l=o[0],c=o[1];let u=0;for(let h=e;h<n;h+=i){const d=t[h]-l,f=t[h+1]-c;a[u++]=l+s*d,a[u++]=c+r*f;for(let g=h+2;g<h+i;++g)a[u++]=t[g]}return a&&a.length!=u&&(a.length=u),a}function K2(t,e,n,i,s,r,o){o=o||[];let a=0;for(let l=e;l<n;l+=i){o[a++]=t[l]+s,o[a++]=t[l+1]+r;for(let c=l+2;c<l+i;++c)o[a++]=t[c]}return o&&o.length!=a&&(o.length=a),o}const qg=Nn();class Td extends li{constructor(){super(),this.extent_=vn(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=h_((e,n,i)=>{if(!i)return this.getSimplifiedGeometry(n);const s=this.clone();return s.applyTransform(i),s.getSimplifiedGeometry(n)})}simplifyTransformed(e,n){return this.simplifyTransformedInternal(this.getRevision(),e,n)}clone(){return pe()}closestPointXY(e,n,i,s){return pe()}containsXY(e,n){const i=this.getClosestPoint([e,n]);return i[0]===e&&i[1]===n}getClosestPoint(e,n){return n=n||[NaN,NaN],this.closestPointXY(e[0],e[1],n,1/0),n}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return pe()}getExtent(e){if(this.extentRevision_!=this.getRevision()){const n=this.computeExtent(this.extent_);(isNaN(n[0])||isNaN(n[1]))&&Yr(n),this.extentRevision_=this.getRevision()}return E2(this.extent_,e)}rotate(e,n){pe()}scale(e,n,i){pe()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return pe()}getType(){return pe()}applyTransform(e){pe()}intersectsExtent(e){return pe()}translate(e,n){pe()}transform(e,n){const i=Ae(e),s=i.getUnits()=="tile-pixels"?function(r,o,a){const l=i.getExtent(),c=i.getWorldExtent(),u=zt(c)/zt(l);return Li(qg,c[0],c[3],u,-u,0,0,0),rs(r,0,r.length,a,qg,o),Br(i,n)(r,o,a)}:Br(i,n);return this.applyTransform(s),this}}class qs extends Td{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(e){return Sd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return pe()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const n=this.getSimplifiedGeometryInternal(e);return n.getFlatCoordinates().length<this.flatCoordinates.length?n:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,n){this.stride=Hg(e),this.layout=e,this.flatCoordinates=n}setCoordinates(e,n){pe()}setLayout(e,n,i){let s;if(e)s=Hg(e);else{for(let r=0;r<i;++r){if(n.length===0){this.layout="XY",this.stride=2;return}n=n[0]}s=n.length,e=Hs(s)}this.layout=e,this.stride=s}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(e,n){const i=this.getFlatCoordinates();if(i){const s=this.getStride();A_(i,0,i.length,s,e,n,i),this.changed()}}scale(e,n,i){n===void 0&&(n=e),i||(i=us(this.getExtent()));const s=this.getFlatCoordinates();if(s){const r=this.getStride();U2(s,0,s.length,r,e,n,i,s),this.changed()}}translate(e,n){const i=this.getFlatCoordinates();if(i){const s=this.getStride();K2(i,0,i.length,s,e,n,i),this.changed()}}}function Hs(t){let e;return t==2?e="XY":t==3?e="XYZ":t==4&&(e="XYZM"),e}function Hg(t){let e;return t=="XY"?e=2:t=="XYZ"||t=="XYM"?e=3:t=="XYZM"&&(e=4),e}function $2(t,e,n){const i=t.getFlatCoordinates();if(!i)return null;const s=t.getStride();return rs(i,0,i.length,s,e,n)}function Zg(t,e,n,i,s,r,o){const a=t[e],l=t[e+1],c=t[n]-a,u=t[n+1]-l;let h;if(c===0&&u===0)h=e;else{const d=((s-a)*c+(r-l)*u)/(c*c+u*u);if(d>1)h=n;else if(d>0){for(let f=0;f<i;++f)o[f]=mn(t[e+f],t[n+f],d);o.length=i;return}else h=e}for(let d=0;d<i;++d)o[d]=t[h+d];o.length=i}function Rd(t,e,n,i,s){let r=t[e],o=t[e+1];for(e+=i;e<n;e+=i){const a=t[e],l=t[e+1],c=Os(r,o,a,l);c>s&&(s=c),r=a,o=l}return s}function Ad(t,e,n,i,s){for(let r=0,o=n.length;r<o;++r){const a=n[r];s=Rd(t,e,a,i,s),e=a}return s}function q2(t,e,n,i,s){for(let r=0,o=n.length;r<o;++r){const a=n[r];s=Ad(t,e,a,i,s),e=a[a.length-1]}return s}function Id(t,e,n,i,s,r,o,a,l,c,u){if(e==n)return c;let h,d;if(s===0){if(d=Os(o,a,t[e],t[e+1]),d<c){for(h=0;h<i;++h)l[h]=t[e+h];return l.length=i,d}return c}u=u||[NaN,NaN];let f=e+i;for(;f<n;)if(Zg(t,f-i,f,i,o,a,u),d=Os(o,a,u[0],u[1]),d<c){for(c=d,h=0;h<i;++h)l[h]=u[h];l.length=i,f+=i}else f+=i*Math.max((Math.sqrt(d)-Math.sqrt(c))/s|0,1);if(r&&(Zg(t,n-i,e,i,o,a,u),d=Os(o,a,u[0],u[1]),d<c)){for(c=d,h=0;h<i;++h)l[h]=u[h];l.length=i}return c}function Ld(t,e,n,i,s,r,o,a,l,c,u){u=u||[NaN,NaN];for(let h=0,d=n.length;h<d;++h){const f=n[h];c=Id(t,e,f,i,s,r,o,a,l,c,u),e=f}return c}function H2(t,e,n,i,s,r,o,a,l,c,u){u=u||[NaN,NaN];for(let h=0,d=n.length;h<d;++h){const f=n[h];c=Ld(t,e,f,i,s,r,o,a,l,c,u),e=f[f.length-1]}return c}function Z2(t,e,n,i){for(let s=0,r=n.length;s<r;++s)t[e++]=n[s];return e}function Ac(t,e,n,i){for(let s=0,r=n.length;s<r;++s){const o=n[s];for(let a=0;a<i;++a)t[e++]=o[a]}return e}function Pa(t,e,n,i,s){s=s||[];let r=0;for(let o=0,a=n.length;o<a;++o){const l=Ac(t,e,n[o],i);s[r++]=l,e=l}return s.length=r,s}function I_(t,e,n,i,s){s=s||[];let r=0;for(let o=0,a=n.length;o<a;++o){const l=Pa(t,e,n[o],i,s[r]);l.length===0&&(l[0]=e),s[r++]=l,e=l[l.length-1]}return s.length=r,s}function Ic(t,e,n,i,s,r,o){const a=(n-e)/i;if(a<3){for(;e<n;e+=i)r[o++]=t[e],r[o++]=t[e+1];return o}const l=new Array(a);l[0]=1,l[a-1]=1;const c=[e,n-i];let u=0;for(;c.length>0;){const h=c.pop(),d=c.pop();let f=0;const g=t[d],m=t[d+1],p=t[h],_=t[h+1];for(let y=d+i;y<h;y+=i){const w=t[y],b=t[y+1],E=c2(w,b,g,m,p,_);E>f&&(u=y,f=E)}f>s&&(l[(u-e)/i]=1,d+i<u&&c.push(d,u),u+i<h&&c.push(u,h))}for(let h=0;h<a;++h)l[h]&&(r[o++]=t[e+h*i],r[o++]=t[e+h*i+1]);return o}function L_(t,e,n,i,s,r,o,a){for(let l=0,c=n.length;l<c;++l){const u=n[l];o=Ic(t,e,u,i,s,r,o),a.push(o),e=u}return o}function xs(t,e){return e*Math.round(t/e)}function X2(t,e,n,i,s,r,o){if(e==n)return o;let a=xs(t[e],s),l=xs(t[e+1],s);e+=i,r[o++]=a,r[o++]=l;let c,u;do if(c=xs(t[e],s),u=xs(t[e+1],s),e+=i,e==n)return r[o++]=c,r[o++]=u,o;while(c==a&&u==l);for(;e<n;){const h=xs(t[e],s),d=xs(t[e+1],s);if(e+=i,h==c&&d==u)continue;const f=c-a,g=u-l,m=h-a,p=d-l;if(f*p==g*m&&(f<0&&m<f||f==m||f>0&&m>f)&&(g<0&&p<g||g==p||g>0&&p>g)){c=h,u=d;continue}r[o++]=c,r[o++]=u,a=c,l=u,c=h,u=d}return r[o++]=c,r[o++]=u,o}function Od(t,e,n,i,s,r,o,a){for(let l=0,c=n.length;l<c;++l){const u=n[l];o=X2(t,e,u,i,s,r,o),a.push(o),e=u}return o}function Y2(t,e,n,i,s,r,o,a){for(let l=0,c=n.length;l<c;++l){const u=n[l],h=[];o=Od(t,e,u,i,s,r,o,h),a.push(h),e=u[u.length-1]}return o}function Qi(t,e,n,i,s){s=s!==void 0?s:[];let r=0;for(let o=e;o<n;o+=i)s[r++]=t.slice(o,o+i);return s.length=r,s}function sa(t,e,n,i,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=n.length;o<a;++o){const l=n[o];s[r++]=Qi(t,e,l,i,s[r]),e=l}return s.length=r,s}function uh(t,e,n,i,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=n.length;o<a;++o){const l=n[o];s[r++]=l.length===1&&l[0]===e?[]:sa(t,e,l,i,s[r]),e=l[l.length-1]}return s.length=r,s}function O_(t,e,n,i){let s=0,r=t[n-i],o=t[n-i+1];for(;e<n;e+=i){const a=t[e],l=t[e+1];s+=o*a-r*l,r=a,o=l}return s/2}function F_(t,e,n,i){let s=0;for(let r=0,o=n.length;r<o;++r){const a=n[r];s+=O_(t,e,a,i),e=a}return s}function J2(t,e,n,i){let s=0;for(let r=0,o=n.length;r<o;++r){const a=n[r];s+=F_(t,e,a,i),e=a[a.length-1]}return s}class jr extends qs{constructor(e,n){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,n!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(n,e):this.setCoordinates(e,n)}clone(){return new jr(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,n,i,s){return s<Ks(this.getExtent(),e,n)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Rd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Id(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,n,i,s))}getArea(){return O_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return Qi(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){const n=[];return n.length=Ic(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n,0),new jr(n,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,n){this.setLayout(n,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ac(this.flatCoordinates,0,e,this.stride),this.changed()}}let ra=class N_ extends qs{constructor(e,n){super(),this.setCoordinates(e,n)}clone(){const e=new N_(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,n,i,s){const r=this.flatCoordinates,o=Os(e,n,r[0],r[1]);if(o<s){const a=this.stride;for(let l=0;l<a;++l)i[l]=r[l];return i.length=a,o}return s}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return m_(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return wd(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,n){this.setLayout(n,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Z2(this.flatCoordinates,0,e,this.stride),this.changed()}};function Q2(t,e,n,i,s){return!y_(s,function(o){return!Rs(t,e,n,i,o[0],o[1])})}function Rs(t,e,n,i,s,r){let o=0,a=t[n-i],l=t[n-i+1];for(;e<n;e+=i){const c=t[e],u=t[e+1];l<=r?u>r&&(c-a)*(r-l)-(s-a)*(u-l)>0&&o++:u<=r&&(c-a)*(r-l)-(s-a)*(u-l)<0&&o--,a=c,l=u}return o!==0}function Fd(t,e,n,i,s,r){if(n.length===0||!Rs(t,e,n[0],i,s,r))return!1;for(let o=1,a=n.length;o<a;++o)if(Rs(t,n[o-1],n[o],i,s,r))return!1;return!0}function eC(t,e,n,i,s,r){if(n.length===0)return!1;for(let o=0,a=n.length;o<a;++o){const l=n[o];if(Fd(t,e,l,i,s,r))return!0;e=l[l.length-1]}return!1}function Nd(t,e,n,i,s,r,o){let a,l,c,u,h,d,f;const g=s[r+1],m=[];for(let y=0,w=n.length;y<w;++y){const b=n[y];for(u=t[b-i],d=t[b-i+1],a=e;a<b;a+=i)h=t[a],f=t[a+1],(g<=d&&f<=g||d<=g&&g<=f)&&(c=(g-d)/(f-d)*(h-u)+u,m.push(c)),u=h,d=f}let p=NaN,_=-1/0;for(m.sort(ki),u=m[0],a=1,l=m.length;a<l;++a){h=m[a];const y=Math.abs(h-u);y>_&&(c=(u+h)/2,Fd(t,e,n,i,c,g)&&(p=c,_=y)),u=h}return isNaN(p)&&(p=s[r]),o?(o.push(p,g,_),o):[p,g,_]}function D_(t,e,n,i,s){let r=[];for(let o=0,a=n.length;o<a;++o){const l=n[o];r=Nd(t,e,l,i,s,2*o,r),e=l[l.length-1]}return r}function G_(t,e,n,i,s){let r;for(e+=i;e<n;e+=i)if(r=s(t.slice(e-i,e),t.slice(e,e+i)),r)return r;return!1}function Lc(t,e,n,i,s){const r=__(vn(),t,e,n,i);return sn(s,r)?fr(s,r)||r[0]>=s[0]&&r[2]<=s[2]||r[1]>=s[1]&&r[3]<=s[3]?!0:G_(t,e,n,i,function(o,a){return M2(s,o,a)}):!1}function tC(t,e,n,i,s){for(let r=0,o=n.length;r<o;++r){if(Lc(t,e,n[r],i,s))return!0;e=n[r]}return!1}function z_(t,e,n,i,s){return!!(Lc(t,e,n,i,s)||Rs(t,e,n,i,s[0],s[1])||Rs(t,e,n,i,s[0],s[3])||Rs(t,e,n,i,s[2],s[1])||Rs(t,e,n,i,s[2],s[3]))}function B_(t,e,n,i,s){if(!z_(t,e,n[0],i,s))return!1;if(n.length===1)return!0;for(let r=1,o=n.length;r<o;++r)if(Q2(t,n[r-1],n[r],i,s)&&!Lc(t,n[r-1],n[r],i,s))return!1;return!0}function nC(t,e,n,i,s){for(let r=0,o=n.length;r<o;++r){const a=n[r];if(B_(t,e,a,i,s))return!0;e=a[a.length-1]}return!1}function iC(t,e,n,i){for(;e<n-i;){for(let s=0;s<i;++s){const r=t[e+s];t[e+s]=t[n-i+s],t[n-i+s]=r}e+=i,n-=i}}function Dd(t,e,n,i){let s=0,r=t[n-i],o=t[n-i+1];for(;e<n;e+=i){const a=t[e],l=t[e+1];s+=(a-r)*(l+o),r=a,o=l}return s===0?void 0:s>0}function Gd(t,e,n,i,s){s=s!==void 0?s:!1;for(let r=0,o=n.length;r<o;++r){const a=n[r],l=Dd(t,e,a,i);if(r===0){if(s&&l||!s&&!l)return!1}else if(s&&!l||!s&&l)return!1;e=a}return!0}function j_(t,e,n,i,s){for(let r=0,o=n.length;r<o;++r){const a=n[r];if(!Gd(t,e,a,i,s))return!1;a.length&&(e=a[a.length-1])}return!0}function Bl(t,e,n,i,s){s=s!==void 0?s:!1;for(let r=0,o=n.length;r<o;++r){const a=n[r],l=Dd(t,e,a,i);(r===0?s&&l||!s&&!l:s&&!l||!s&&l)&&iC(t,e,a,i),e=a}return e}function hh(t,e,n,i,s){for(let r=0,o=n.length;r<o;++r)e=Bl(t,e,n[r],i,s);return e}function sC(t,e){const n=[];let i=0,s=0,r;for(let o=0,a=e.length;o<a;++o){const l=e[o],c=Dd(t,i,l,2);if(r===void 0&&(r=c),c===r)n.push(e.slice(s,o+1));else{if(n.length===0)continue;n[n.length-1].push(e[s])}s=o+1,i=l}return n}class oi extends qs{constructor(e,n,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,n!==void 0&&i?(this.setFlatCoordinates(n,e),this.ends_=i):this.setCoordinates(e,n)}appendLinearRing(e){this.flatCoordinates?Yt(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new oi(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,n,i,s){return s<Ks(this.getExtent(),e,n)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ad(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ld(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,n,i,s))}containsXY(e,n){return Fd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,n)}getArea(){return F_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let n;return e!==void 0?(n=this.getOrientedFlatCoordinates().slice(),Bl(n,0,this.ends_,this.stride,e)):n=this.flatCoordinates,sa(n,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const e=us(this.getExtent());this.flatInteriorPoint_=Nd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new ra(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new jr(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){const e=this.layout,n=this.flatCoordinates,i=this.ends_,s=[];let r=0;for(let o=0,a=i.length;o<a;++o){const l=i[o],c=new jr(n.slice(r,l),e);s.push(c),r=l}return s}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;Gd(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Bl(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const n=[],i=[];return n.length=Od(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),n,0,i),new oi(n,"XY",i)}getType(){return"Polygon"}intersectsExtent(e){return B_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=Pa(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}}function Xg(t){if(ka(t))throw new Error("Cannot create polygon from empty extent");const e=t[0],n=t[1],i=t[2],s=t[3],r=[e,n,e,s,i,s,i,n,e,n];return new oi(r,"XY",[r.length])}const hu=0;class Hn extends li{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Md(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&x_(),e.center&&(e.center=yi(e.center,this.projection_)),e.extent&&(e.extent=Ts(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){const n=Object.assign({},e);for(const a in In)delete n[a];this.setProperties(n,!0);const i=oC(e);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=i.minZoom;const s=rC(e),r=i.constraint,o=aC(e);this.constraints_={center:s,resolution:r,rotation:o},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let n=this.padding_;this.padding_=e;const i=this.getCenterInternal();if(i){const s=e||[0,0,0,0];n=n||[0,0,0,0];const r=this.getResolution(),o=r/2*(s[3]-n[3]+n[1]-s[1]),a=r/2*(s[0]-n[0]+n[2]-s[2]);this.setCenterInternal([i[0]+o,i[1]-a])}}getUpdatedOptions_(e){const n=this.getProperties();return n.resolution!==void 0?n.resolution=this.getResolution():n.zoom=this.getZoom(),n.center=this.getCenterInternal(),n.rotation=this.getRotation(),Object.assign({},n,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const n=new Array(arguments.length);for(let i=0;i<n.length;++i){let s=arguments[i];s.center&&(s=Object.assign({},s),s.center=yi(s.center,this.getProjection())),s.anchor&&(s=Object.assign({},s),s.anchor=yi(s.anchor,this.getProjection())),n[i]=s}this.animateInternal.apply(this,n)}animateInternal(e){let n=arguments.length,i;n>1&&typeof arguments[n-1]=="function"&&(i=arguments[n-1],--n);let s=0;for(;s<n&&!this.isDef();++s){const u=arguments[s];u.center&&this.setCenterInternal(u.center),u.zoom!==void 0?this.setZoom(u.zoom):u.resolution&&this.setResolution(u.resolution),u.rotation!==void 0&&this.setRotation(u.rotation)}if(s===n){i&&Qa(i,!0);return}let r=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_;const c=[];for(;s<n;++s){const u=arguments[s],h={start:r,complete:!1,anchor:u.anchor,duration:u.duration!==void 0?u.duration:1e3,easing:u.easing||z2,callback:i};if(u.center&&(h.sourceCenter=o,h.targetCenter=u.center.slice(),o=h.targetCenter),u.zoom!==void 0?(h.sourceResolution=a,h.targetResolution=this.getResolutionForZoom(u.zoom),a=h.targetResolution):u.resolution&&(h.sourceResolution=a,h.targetResolution=u.resolution,a=h.targetResolution),u.rotation!==void 0){h.sourceRotation=l;const d=Fs(u.rotation-l+Math.PI,2*Math.PI)-Math.PI;h.targetRotation=l+d,l=h.targetRotation}lC(h)?h.complete=!0:r+=h.duration,c.push(h)}this.animations_.push(c),this.setHint(Ot.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Ot.ANIMATING]>0}getInteracting(){return this.hints_[Ot.INTERACTING]>0}cancelAnimations(){this.setHint(Ot.ANIMATING,-this.hints_[Ot.ANIMATING]);let e;for(let n=0,i=this.animations_.length;n<i;++n){const s=this.animations_[n];if(s[0].callback&&Qa(s[0].callback,!1),!e)for(let r=0,o=s.length;r<o;++r){const a=s[r];if(!a.complete){e=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const e=Date.now();let n=!1;for(let i=this.animations_.length-1;i>=0;--i){const s=this.animations_[i];let r=!0;for(let o=0,a=s.length;o<a;++o){const l=s[o];if(l.complete)continue;const c=e-l.start;let u=l.duration>0?c/l.duration:1;u>=1?(l.complete=!0,u=1):r=!1;const h=l.easing(u);if(l.sourceCenter){const d=l.sourceCenter[0],f=l.sourceCenter[1],g=l.targetCenter[0],m=l.targetCenter[1];this.nextCenter_=l.targetCenter;const p=d+h*(g-d),_=f+h*(m-f);this.targetCenter_=[p,_]}if(l.sourceResolution&&l.targetResolution){const d=h===1?l.targetResolution:l.sourceResolution+h*(l.targetResolution-l.sourceResolution);if(l.anchor){const f=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(d,0,f,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=d,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const d=h===1?Fs(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+h*(l.targetRotation-l.sourceRotation);if(l.anchor){const f=this.constraints_.rotation(d,!0);this.targetCenter_=this.calculateCenterRotate(f,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=d}if(this.applyTargetState_(!0),n=!0,!l.complete)break}if(r){this.animations_[i]=null,this.setHint(Ot.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const o=s[0].callback;o&&Qa(o,!0)}}this.animations_=this.animations_.filter(Boolean),n&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,n){let i;const s=this.getCenterInternal();return s!==void 0&&(i=[s[0]-n[0],s[1]-n[1]],bd(i,e-this.getRotation()),C2(i,n)),i}calculateCenterZoom(e,n){let i;const s=this.getCenterInternal(),r=this.getResolution();if(s!==void 0&&r!==void 0){const o=n[0]-e*(n[0]-s[0])/r,a=n[1]-e*(n[1]-s[1])/r;i=[o,a]}return i}getViewportSize_(e){const n=this.viewportSize_;if(e){const i=n[0],s=n[1];return[Math.abs(i*Math.cos(e))+Math.abs(s*Math.sin(e)),Math.abs(i*Math.sin(e))+Math.abs(s*Math.cos(e))]}return n}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const e=this.getCenterInternal();return e&&ch(e,this.getProjection())}getCenterInternal(){return this.get(In.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){const n=this.calculateExtentInternal(e);return P_(n,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();const n=this.getCenterInternal();Ne(n,"The view center is not defined");const i=this.getResolution();Ne(i!==void 0,"The view resolution is not defined");const s=this.getRotation();return Ne(s!==void 0,"The view rotation is not defined"),rh(n,i,s,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(In.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,n){return this.getResolutionForExtentInternal(Ts(e,this.getProjection()),n)}getResolutionForExtentInternal(e,n){n=n||this.getViewportSizeMinusPadding_();const i=ze(e)/n[0],s=zt(e)/n[1];return Math.max(i,s)}getResolutionForValueFunction(e){e=e||2;const n=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,s=Math.log(n/i)/Math.log(e);return function(r){return n/Math.pow(e,r*s)}}getRotation(){return this.get(In.ROTATION)}getValueForResolutionFunction(e){const n=Math.log(e||2),i=this.getConstrainedResolution(this.maxResolution_),s=this.minResolution_,r=Math.log(i/s)/n;return function(o){return Math.log(i/o)/n/r}}getViewportSizeMinusPadding_(e){let n=this.getViewportSize_(e);const i=this.padding_;return i&&(n=[n[0]-i[1]-i[3],n[1]-i[0]-i[2]]),n}getState(){const e=this.getProjection(),n=this.getResolution(),i=this.getRotation();let s=this.getCenterInternal();const r=this.padding_;if(r){const o=this.getViewportSizeMinusPadding_();s=du(s,this.getViewportSize_(),[o[0]/2+r[3],o[1]/2+r[0]],n,i)}return{center:s.slice(0),projection:e!==void 0?e:null,resolution:n,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e;const n=this.getResolution();return n!==void 0&&(e=this.getZoomForResolution(n)),e}getZoomForResolution(e){let n=this.minZoom_||0,i,s;if(this.resolutions_){const r=pd(this.resolutions_,e,1);n=r,i=this.resolutions_[r],r==this.resolutions_.length-1?s=2:s=i/this.resolutions_[r+1]}else i=this.maxResolution_,s=this.zoomFactor_;return n+Math.log(i/e)/Math.log(s)}getResolutionForZoom(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const n=mt(Math.floor(e),0,this.resolutions_.length-2),i=this.resolutions_[n]/this.resolutions_[n+1];return this.resolutions_[n]/Math.pow(i,mt(e-n,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,n){let i;if(Ne(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){Ne(!ka(e),"Cannot fit empty extent provided as `geometry`");const s=Ts(e,this.getProjection());i=Xg(s)}else if(e.getType()==="Circle"){const s=Ts(e.getExtent(),this.getProjection());i=Xg(s),i.rotate(this.getRotation(),us(s))}else i=e;this.fitInternal(i,n)}rotatedExtentForGeometry(e){const n=this.getRotation(),i=Math.cos(n),s=Math.sin(-n),r=e.getFlatCoordinates(),o=e.getStride();let a=1/0,l=1/0,c=-1/0,u=-1/0;for(let h=0,d=r.length;h<d;h+=o){const f=r[h]*i-r[h+1]*s,g=r[h]*s+r[h+1]*i;a=Math.min(a,f),l=Math.min(l,g),c=Math.max(c,f),u=Math.max(u,g)}return[a,l,c,u]}fitInternal(e,n){n=n||{};let i=n.size;i||(i=this.getViewportSizeMinusPadding_());const s=n.padding!==void 0?n.padding:[0,0,0,0],r=n.nearest!==void 0?n.nearest:!1;let o;n.minResolution!==void 0?o=n.minResolution:n.maxZoom!==void 0?o=this.getResolutionForZoom(n.maxZoom):o=0;const a=this.rotatedExtentForGeometry(e);let l=this.getResolutionForExtentInternal(a,[i[0]-s[1]-s[3],i[1]-s[0]-s[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,r?0:1);const c=this.getRotation(),u=Math.sin(c),h=Math.cos(c),d=us(a);d[0]+=(s[1]-s[3])/2*l,d[1]+=(s[0]-s[2])/2*l;const f=d[0]*h-d[1]*u,g=d[1]*h+d[0]*u,m=this.getConstrainedCenter([f,g],l),p=n.callback?n.callback:Dr;n.duration!==void 0?this.animateInternal({resolution:l,center:m,duration:n.duration,easing:n.easing},p):(this.targetResolution_=l,this.targetCenter_=m,this.applyTargetState_(!1,!0),Qa(p,!0))}centerOn(e,n,i){this.centerOnInternal(yi(e,this.getProjection()),n,i)}centerOnInternal(e,n,i){this.setCenterInternal(du(e,n,i,this.getResolution(),this.getRotation()))}calculateCenterShift(e,n,i,s){let r;const o=this.padding_;if(o&&e){const a=this.getViewportSizeMinusPadding_(-i),l=du(e,s,[a[0]/2+o[3],a[1]/2+o[0]],n,i);r=[e[0]-l[0],e[1]-l[1]]}return r}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){const n=ch(this.targetCenter_,this.getProjection());this.setCenter([n[0]+e[0],n[1]+e[1]])}adjustCenterInternal(e){const n=this.targetCenter_;this.setCenterInternal([n[0]+e[0],n[1]+e[1]])}adjustResolution(e,n){n=n&&yi(n,this.getProjection()),this.adjustResolutionInternal(e,n)}adjustResolutionInternal(e,n){const i=this.getAnimating()||this.getInteracting(),s=this.getViewportSize_(this.getRotation()),r=this.constraints_.resolution(this.targetResolution_*e,0,s,i);n&&(this.targetCenter_=this.calculateCenterZoom(r,n)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,n){this.adjustResolution(Math.pow(this.zoomFactor_,-e),n)}adjustRotation(e,n){n&&(n=yi(n,this.getProjection())),this.adjustRotationInternal(e,n)}adjustRotationInternal(e,n){const i=this.getAnimating()||this.getInteracting(),s=this.constraints_.rotation(this.targetRotation_+e,i);n&&(this.targetCenter_=this.calculateCenterRotate(s,n)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&yi(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,n){return this.hints_[e]+=n,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,n){const i=this.getAnimating()||this.getInteracting()||n,s=this.constraints_.rotation(this.targetRotation_,i),r=this.getViewportSize_(s),o=this.constraints_.resolution(this.targetResolution_,0,r,i),a=this.constraints_.center(this.targetCenter_,o,r,i,this.calculateCenterShift(this.targetCenter_,o,s,r));this.get(In.ROTATION)!==s&&this.set(In.ROTATION,s),this.get(In.RESOLUTION)!==o&&(this.set(In.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(In.CENTER)||!zl(this.get(In.CENTER),a))&&this.set(In.CENTER,a),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,n,i){e=e!==void 0?e:200;const s=n||0,r=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,s,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,r,o));if(e===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=r,this.targetCenter_=l,this.applyTargetState_();return}i=i||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==r||!this.getCenterInternal()||!zl(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:l,resolution:a,duration:e,easing:Jr,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Ot.INTERACTING,1)}endInteraction(e,n,i){i=i&&yi(i,this.getProjection()),this.endInteractionInternal(e,n,i)}endInteractionInternal(e,n,i){this.getInteracting()&&(this.setHint(Ot.INTERACTING,-1),this.resolveConstraints(e,n,i))}getConstrainedCenter(e,n){const i=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,n||this.getResolution(),i)}getConstrainedZoom(e,n){const i=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(i,n))}getConstrainedResolution(e,n){n=n||0;const i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,n,i)}}function Qa(t,e){setTimeout(function(){t(e)},0)}function rC(t){if(t.extent!==void 0){const n=t.smoothExtentConstraint!==void 0?t.smoothExtentConstraint:!0;return Vg(t.extent,t.constrainOnlyCenter,n)}const e=Md(t.projection,"EPSG:3857");if(t.multiWorld!==!0&&e.isGlobal()){const n=e.getExtent().slice();return n[0]=-1/0,n[2]=1/0,Vg(n,!1,!1)}return O2}function oC(t){let e,n,i,o=t.minZoom!==void 0?t.minZoom:hu,a=t.maxZoom!==void 0?t.maxZoom:28;const l=t.zoomFactor!==void 0?t.zoomFactor:2,c=t.multiWorld!==void 0?t.multiWorld:!1,u=t.smoothResolutionConstraint!==void 0?t.smoothResolutionConstraint:!0,h=t.showFullExtent!==void 0?t.showFullExtent:!1,d=Md(t.projection,"EPSG:3857"),f=d.getExtent();let g=t.constrainOnlyCenter,m=t.extent;if(!c&&!m&&d.isGlobal()&&(g=!1,m=f),t.resolutions!==void 0){const p=t.resolutions;n=p[o],i=p[a]!==void 0?p[a]:p[p.length-1],t.constrainResolution?e=F2(p,u,!g&&m,h):e=Ug(n,i,u,!g&&m,h)}else{const _=(f?Math.max(ze(f),zt(f)):360*yd.degrees/d.getMetersPerUnit())/_d/Math.pow(2,hu),y=_/Math.pow(2,28-hu);n=t.maxResolution,n!==void 0?o=0:n=_/Math.pow(l,o),i=t.minResolution,i===void 0&&(t.maxZoom!==void 0?t.maxResolution!==void 0?i=n/Math.pow(l,a):i=_/Math.pow(l,a):i=y),a=o+Math.floor(Math.log(n/i)/Math.log(l)),i=n/Math.pow(l,a-o),t.constrainResolution?e=N2(l,n,i,u,!g&&m,h):e=Ug(n,i,u,!g&&m,h)}return{constraint:e,maxResolution:n,minResolution:i,minZoom:o,zoomFactor:l}}function aC(t){if(t.enableRotation!==void 0?t.enableRotation:!0){const n=t.constrainRotation;return n===void 0||n===!0?G2():n===!1?Kg:typeof n=="number"?D2(n):Kg}return Pd}function lC(t){return!(t.sourceCenter&&t.targetCenter&&!zl(t.sourceCenter,t.targetCenter)||t.sourceResolution!==t.targetResolution||t.sourceRotation!==t.targetRotation)}function du(t,e,n,i,s){const r=Math.cos(-s);let o=Math.sin(-s),a=t[0]*r-t[1]*o,l=t[1]*r+t[0]*o;a+=(e[0]/2-n[0])*i,l+=(n[1]-e[1]/2)*i,o=-o;const c=a*r-l*o,u=l*r+a*o;return[c,u]}class Oc extends d_{constructor(e){const n=Object.assign({},e);delete n.source,super(n),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(Ze.SOURCE,this.handleSourcePropertyChange_);const i=e.source?e.source:null;this.setSource(i)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(Ze.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(rt(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const e=this.getSource();e&&(this.sourceChangeKey_=Fe(e,Se.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let n;const i=this.getMapInternal();!e&&i&&(e=i.getView()),e instanceof Hn?n={viewState:e.getState(),extent:e.calculateExtent()}:n=e,!n.layerStatesArray&&i&&(n.layerStatesArray=i.getLayerGroup().getLayerStatesArray());let s;n.layerStatesArray?s=n.layerStatesArray.find(o=>o.layer===this):s=this.getLayerState();const r=this.getExtent();return zd(s,n.viewState)&&(!r||sn(r,n.extent))}getAttributions(e){if(!this.isVisible(e))return[];let n;const i=this.getSource();if(i&&(n=i.getAttributions()),!n)return[];const s=e instanceof Hn?e.getViewStateAndExtent():e;let r=n(s);return Array.isArray(r)||(r=[r]),r}render(e,n){const i=this.getRenderer();return i.prepareFrame(e)?(this.rendered=!0,i.renderFrame(e,n)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(e,n){}renderDeferred(e){const n=this.getRenderer();n&&n.renderDeferred(e)}setMapInternal(e){e||this.unrender(),this.set(Ze.MAP,e)}getMapInternal(){return this.get(Ze.MAP)}setMap(e){this.mapPrecomposeKey_&&(rt(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(rt(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=Fe(e,Cn.PRECOMPOSE,function(n){const s=n.frameState.layerStatesArray,r=this.getLayerState(!1);Ne(!s.some(function(o){return o.layer===r.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),s.push(r)},this),this.mapRenderKey_=Fe(this,Se.CHANGE,e.render,e),this.changed())}setSource(e){this.set(Ze.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function zd(t,e){if(!t.visible)return!1;const n=e.resolution;if(n<t.minResolution||n>=t.maxResolution)return!1;const i=e.zoom;return i>t.minZoom&&i<=t.maxZoom}function cC(t,e,n,i,s){W_(t,e,n||0,i||t.length-1,s||uC)}function W_(t,e,n,i,s){for(;i>n;){if(i-n>600){var r=i-n+1,o=e-n+1,a=Math.log(r),l=.5*Math.exp(2*a/3),c=.5*Math.sqrt(a*l*(r-l)/r)*(o-r/2<0?-1:1),u=Math.max(n,Math.floor(e-o*l/r+c)),h=Math.min(i,Math.floor(e+(r-o)*l/r+c));W_(t,e,u,h,s)}var d=t[e],f=n,g=i;for(fo(t,n,e),s(t[i],d)>0&&fo(t,n,i);f<g;){for(fo(t,f,g),f++,g--;s(t[f],d)<0;)f++;for(;s(t[g],d)>0;)g--}s(t[n],d)===0?fo(t,n,g):(g++,fo(t,g,i)),g<=e&&(n=g+1),e<=g&&(i=g-1)}}function fo(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function uC(t,e){return t<e?-1:t>e?1:0}let V_=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let n=this.data;const i=[];if(!tl(e,n))return i;const s=this.toBBox,r=[];for(;n;){for(let o=0;o<n.children.length;o++){const a=n.children[o],l=n.leaf?s(a):a;tl(e,l)&&(n.leaf?i.push(a):gu(e,l)?this._all(a,i):r.push(a))}n=r.pop()}return i}collides(e){let n=this.data;if(!tl(e,n))return!1;const i=[];for(;n;){for(let s=0;s<n.children.length;s++){const r=n.children[s],o=n.leaf?this.toBBox(r):r;if(tl(e,o)){if(n.leaf||gu(e,o))return!0;i.push(r)}}n=i.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let i=0;i<e.length;i++)this.insert(e[i]);return this}let n=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const i=this.data;this.data=n,n=i}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=ar([]),this}remove(e,n){if(!e)return this;let i=this.data;const s=this.toBBox(e),r=[],o=[];let a,l,c;for(;i||r.length;){if(i||(i=r.pop(),l=r[r.length-1],a=o.pop(),c=!0),i.leaf){const u=hC(e,i.children,n);if(u!==-1)return i.children.splice(u,1),r.push(i),this._condense(r),this}!c&&!i.leaf&&gu(i,s)?(r.push(i),o.push(a),a=0,l=i,i=i.children[0]):l?(a++,i=l.children[a],c=!1):i=null}return this}toBBox(e){return e}compareMinX(e,n){return e.minX-n.minX}compareMinY(e,n){return e.minY-n.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,n){const i=[];for(;e;)e.leaf?n.push(...e.children):i.push(...e.children),e=i.pop();return n}_build(e,n,i,s){const r=i-n+1;let o=this._maxEntries,a;if(r<=o)return a=ar(e.slice(n,i+1)),tr(a,this.toBBox),a;s||(s=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/Math.pow(o,s-1))),a=ar([]),a.leaf=!1,a.height=s;const l=Math.ceil(r/o),c=l*Math.ceil(Math.sqrt(o));Yg(e,n,i,c,this.compareMinX);for(let u=n;u<=i;u+=c){const h=Math.min(u+c-1,i);Yg(e,u,h,l,this.compareMinY);for(let d=u;d<=h;d+=l){const f=Math.min(d+l-1,h);a.children.push(this._build(e,d,f,s-1))}}return tr(a,this.toBBox),a}_chooseSubtree(e,n,i,s){for(;s.push(n),!(n.leaf||s.length-1===i);){let r=1/0,o=1/0,a;for(let l=0;l<n.children.length;l++){const c=n.children[l],u=fu(c),h=gC(e,c)-u;h<o?(o=h,r=u<r?u:r,a=c):h===o&&u<r&&(r=u,a=c)}n=a||n.children[0]}return n}_insert(e,n,i){const s=i?e:this.toBBox(e),r=[],o=this._chooseSubtree(s,this.data,n,r);for(o.children.push(e),bo(o,s);n>=0&&r[n].children.length>this._maxEntries;)this._split(r,n),n--;this._adjustParentBBoxes(s,r,n)}_split(e,n){const i=e[n],s=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,s);const o=this._chooseSplitIndex(i,r,s),a=ar(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,tr(i,this.toBBox),tr(a,this.toBBox),n?e[n-1].children.push(a):this._splitRoot(i,a)}_splitRoot(e,n){this.data=ar([e,n]),this.data.height=e.height+1,this.data.leaf=!1,tr(this.data,this.toBBox)}_chooseSplitIndex(e,n,i){let s,r=1/0,o=1/0;for(let a=n;a<=i-n;a++){const l=So(e,0,a,this.toBBox),c=So(e,a,i,this.toBBox),u=mC(l,c),h=fu(l)+fu(c);u<r?(r=u,s=a,o=h<o?h:o):u===r&&h<o&&(o=h,s=a)}return s||i-n}_chooseSplitAxis(e,n,i){const s=e.leaf?this.compareMinX:dC,r=e.leaf?this.compareMinY:fC,o=this._allDistMargin(e,n,i,s),a=this._allDistMargin(e,n,i,r);o<a&&e.children.sort(s)}_allDistMargin(e,n,i,s){e.children.sort(s);const r=this.toBBox,o=So(e,0,n,r),a=So(e,i-n,i,r);let l=el(o)+el(a);for(let c=n;c<i-n;c++){const u=e.children[c];bo(o,e.leaf?r(u):u),l+=el(o)}for(let c=i-n-1;c>=n;c--){const u=e.children[c];bo(a,e.leaf?r(u):u),l+=el(a)}return l}_adjustParentBBoxes(e,n,i){for(let s=i;s>=0;s--)bo(n[s],e)}_condense(e){for(let n=e.length-1,i;n>=0;n--)e[n].children.length===0?n>0?(i=e[n-1].children,i.splice(i.indexOf(e[n]),1)):this.clear():tr(e[n],this.toBBox)}};function hC(t,e,n){if(!n)return e.indexOf(t);for(let i=0;i<e.length;i++)if(n(t,e[i]))return i;return-1}function tr(t,e){So(t,0,t.children.length,e,t)}function So(t,e,n,i,s){s||(s=ar(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r=e;r<n;r++){const o=t.children[r];bo(s,t.leaf?i(o):o)}return s}function bo(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function dC(t,e){return t.minX-e.minX}function fC(t,e){return t.minY-e.minY}function fu(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function el(t){return t.maxX-t.minX+(t.maxY-t.minY)}function gC(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function mC(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function gu(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function tl(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function ar(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Yg(t,e,n,i,s){const r=[e,n];for(;r.length;){if(n=r.pop(),e=r.pop(),n-e<=i)continue;const o=e+Math.ceil((n-e)/i/2)*i;cC(t,o,e,n,s),r.push(e,o,o,n)}}const Ce={IDLE:0,LOADING:1,LOADED:2,ERROR:3};function Jg(t){return t[0]>0&&t[1]>0}function pC(t,e,n){return n===void 0&&(n=[0,0]),n[0]=t[0]*e+.5|0,n[1]=t[1]*e+.5|0,n}function yn(t,e){return Array.isArray(t)?t:(e===void 0?e=[t,t]:(e[0]=t,e[1]=t),e)}class Fc{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=yn(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){const e=this.getScale();return new Fc({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return pe()}getImage(e){return pe()}getHitDetectionImage(){return pe()}getPixelRatio(e){return 1}getImageState(){return pe()}getImageSize(){return pe()}getOrigin(){return pe()}getSize(){return pe()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=yn(e)}listenImageChange(e){pe()}load(){pe()}unlistenImageChange(e){pe()}ready(){return Promise.resolve()}}const oa={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},Bt={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"],whitepoint:{2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}}};Bt.max=Bt.whitepoint[2].D65;Bt.rgb=function(t,e){e=e||Bt.whitepoint[2].E;var n=t[0]/e[0],i=t[1]/e[1],s=t[2]/e[2],r,o,a;return r=n*3.240969941904521+i*-1.537383177570093+s*-.498610760293,o=n*-.96924363628087+i*1.87596750150772+s*.041555057407175,a=n*.055630079696993+i*-.20397695888897+s*1.056971514242878,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r=r*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,r=Math.min(Math.max(0,r),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[r*255,o*255,a*255]};oa.xyz=function(t,e){var n=t[0]/255,i=t[1]/255,s=t[2]/255;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92;var r=n*.41239079926595+i*.35758433938387+s*.18048078840183,o=n*.21263900587151+i*.71516867876775+s*.072192315360733,a=n*.019330818715591+i*.11919477979462+s*.95053215224966;return e=e||Bt.whitepoint[2].E,[r*e[0],o*e[1],a*e[2]]};var Bd={name:"luv",min:[0,-134,-140],max:[100,224,122],channel:["lightness","u","v"],alias:["LUV","cieluv","cie1976"],xyz:function(t,e,n){var i,s,r,o,a,l,c,u,h,d,f,g,m;if(r=t[0],o=t[1],a=t[2],r===0)return[0,0,0];var p=.0011070564598794539;return e=e||"D65",n=n||2,h=Bt.whitepoint[n][e][0],d=Bt.whitepoint[n][e][1],f=Bt.whitepoint[n][e][2],g=4*h/(h+15*d+3*f),m=9*d/(h+15*d+3*f),i=o/(13*r)+g||0,s=a/(13*r)+m||0,c=r>8?d*Math.pow((r+16)/116,3):d*r*p,l=c*9*i/(4*s)||0,u=c*(12-3*i-20*s)/(4*s)||0,[l,c,u]}};Bt.luv=function(t,e,n){var i,s,r,o,a,l,c,u,h,d,f,g,m,p=.008856451679035631,_=903.2962962962961;e=e||"D65",n=n||2,h=Bt.whitepoint[n][e][0],d=Bt.whitepoint[n][e][1],f=Bt.whitepoint[n][e][2],g=4*h/(h+15*d+3*f),m=9*d/(h+15*d+3*f),l=t[0],c=t[1],u=t[2],i=4*l/(l+15*c+3*u)||0,s=9*c/(l+15*c+3*u)||0;var y=c/d;return r=y<=p?_*y:116*Math.pow(y,1/3)-16,o=13*r*(i-g),a=13*r*(s-m),[r,o,a]};var U_={name:"lchuv",channel:["lightness","chroma","hue"],alias:["LCHuv","cielchuv"],min:[0,0,0],max:[100,100,360],luv:function(t){var e=t[0],n=t[1],i=t[2],s,r,o;return o=i/360*2*Math.PI,s=n*Math.cos(o),r=n*Math.sin(o),[e,s,r]},xyz:function(t){return Bd.xyz(U_.luv(t))}};Bd.lchuv=function(t){var e=t[0],n=t[1],i=t[2],s=Math.sqrt(n*n+i*i),r=Math.atan2(i,n),o=r*360/2/Math.PI;return o<0&&(o+=360),[e,s,o]};Bt.lchuv=function(t){return Bd.lchuv(Bt.luv(t))};const dh={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const t in dh)Object.freeze(dh[t]);const Qg=Object.freeze(dh);var em={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function _C(t){var u,h;var e,n=[],i=1,s;if(typeof t=="number")return{space:"rgb",values:[t>>>16,(t&65280)>>>8,t&255],alpha:1};if(typeof t=="number")return{space:"rgb",values:[t>>>16,(t&65280)>>>8,t&255],alpha:1};if(t=String(t).toLowerCase(),Qg[t])n=Qg[t].slice(),s="rgb";else if(t==="transparent")i=0,s="rgb",n=[0,0,0];else if(t[0]==="#"){var r=t.slice(1),o=r.length,a=o<=4;i=1,a?(n=[parseInt(r[0]+r[0],16),parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16)],o===4&&(i=parseInt(r[3]+r[3],16)/255)):(n=[parseInt(r[0]+r[1],16),parseInt(r[2]+r[3],16),parseInt(r[4]+r[5],16)],o===8&&(i=parseInt(r[6]+r[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),s="rgb"}else if(e=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(t)){var l=e[1];s=l.replace(/a$/,"");var c=s==="cmyk"?4:s==="gray"?1:3;n=e[2].trim().split(/\s*[,\/]\s*|\s+/),s==="color"&&(s=n.shift()),n=n.map(function(d,f){if(d[d.length-1]==="%")return d=parseFloat(d)/100,f===3?d:s==="rgb"?d*255:s[0]==="h"||s[0]==="l"&&!f?d*100:s==="lab"?d*125:s==="lch"?f<2?d*150:d*360:s[0]==="o"&&!f?d:s==="oklab"?d*.4:s==="oklch"?f<2?d*.4:d*360:d;if(s[f]==="h"||f===2&&s[s.length-1]==="h"){if(em[d]!==void 0)return em[d];if(d.endsWith("deg"))return parseFloat(d);if(d.endsWith("turn"))return parseFloat(d)*360;if(d.endsWith("grad"))return parseFloat(d)*360/400;if(d.endsWith("rad"))return parseFloat(d)*180/Math.PI}return d==="none"?0:parseFloat(d)}),i=n.length>c?n.pop():1}else/[0-9](?:\s|\/|,)/.test(t)&&(n=t.match(/([0-9]+)/g).map(function(d){return parseFloat(d)}),s=((h=(u=t.match(/([a-z])/ig))==null?void 0:u.join(""))==null?void 0:h.toLowerCase())||"rgb");return{space:s,values:n,alpha:i}}var mu={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100,s,r,o,a,l,c=0;if(n===0)return l=i*255,[l,l,l];for(r=i<.5?i*(1+n):i+n-i*n,s=2*i-r,a=[0,0,0];c<3;)o=e+1/3*-(c-1),o<0?o++:o>1&&o--,l=6*o<1?s+(r-s)*6*o:2*o<1?r:3*o<2?s+(r-s)*(2/3-o)*6:s,a[c++]=l*255;return a}};oa.hsl=function(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=r-s,a,l,c;return r===s?a=0:e===r?a=(n-i)/o:n===r?a=2+(i-e)/o:i===r&&(a=4+(e-n)/o),a=Math.min(a*60,360),a<0&&(a+=360),c=(s+r)/2,r===s?l=0:c<=.5?l=o/(r+s):l=o/(2-r-s),[a,l*100,c*100]};function yC(t){Array.isArray(t)&&t.raw&&(t=String.raw(...arguments)),t instanceof Number&&(t=+t);var e,n=_C(t);if(!n.space)return[];const i=n.space[0]==="h"?mu.min:oa.min,s=n.space[0]==="h"?mu.max:oa.max;return e=Array(3),e[0]=Math.min(Math.max(n.values[0],i[0]),s[0]),e[1]=Math.min(Math.max(n.values[1],i[1]),s[1]),e[2]=Math.min(Math.max(n.values[2],i[2]),s[2]),n.space[0]==="h"&&(e=mu.rgb(e)),e.push(Math.min(Math.max(n.alpha,0),1)),e}function vC(t){return typeof t=="string"?t:Wd(t)}const wC=1024,go={};let pu=0;function SC(t){if(t.length===4)return t;const e=t.slice();return e[3]=1,e}function tm(t){const e=Bt.lchuv(oa.xyz(t));return e[3]=t[3],e}function bC(t){const e=Bt.rgb(U_.xyz(t));return e[3]=t[3],e}function jd(t){if(go.hasOwnProperty(t))return go[t];if(pu>=wC){let n=0;for(const i in go)n++&3||(delete go[i],--pu)}const e=yC(t);if(e.length!==4)throw new Error('Failed to parse "'+t+'" as color');for(const n of e)if(isNaN(n))throw new Error('Failed to parse "'+t+'" as color');return K_(e),go[t]=e,++pu,e}function aa(t){return Array.isArray(t)?t:jd(t)}function K_(t){return t[0]=mt(t[0]+.5|0,0,255),t[1]=mt(t[1]+.5|0,0,255),t[2]=mt(t[2]+.5|0,0,255),t[3]=mt(t[3],0,1),t}function Wd(t){let e=t[0];e!=(e|0)&&(e=e+.5|0);let n=t[1];n!=(n|0)&&(n=n+.5|0);let i=t[2];i!=(i|0)&&(i=i+.5|0);const s=t[3]===void 0?1:Math.round(t[3]*1e3)/1e3;return"rgba("+e+","+n+","+i+","+s+")"}function EC(t){try{return jd(t),!0}catch{return!1}}const hs=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",MC=hs.includes("firefox"),xC=hs.includes("safari")&&!hs.includes("chrom");xC&&(hs.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(hs));const CC=hs.includes("webkit")&&!hs.includes("edge"),$_=hs.includes("macintosh"),q_=typeof devicePixelRatio<"u"?devicePixelRatio:1,H_=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Z_=typeof Image<"u"&&Image.prototype.decode,X_=function(){let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return t}();function Rt(t,e,n,i){let s;return n&&n.length?s=n.shift():H_?s=new OffscreenCanvas(t||300,e||300):s=document.createElement("canvas"),t&&(s.width=t),e&&(s.height=e),s.getContext("2d",i)}let _u;function jl(){return _u||(_u=Rt(1,1)),_u}function Nc(t){const e=t.canvas;e.width=1,e.height=1,t.clearRect(0,0,1,1)}function nm(t,e){const n=e.parentNode;n&&n.replaceChild(t,e)}function fh(t){return t&&t.parentNode?t.parentNode.removeChild(t):null}function kC(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function PC(t,e){const n=t.childNodes;for(let i=0;;++i){const s=n[i],r=e[i];if(!s&&!r)break;if(s!==r){if(!s){t.appendChild(r);continue}if(!r){t.removeChild(s),--i;continue}t.insertBefore(r,s)}}}function TC(t,e,n){const i=t;let s=!0,r=!1,o=!1;const a=[Gl(i,Se.LOAD,function(){o=!0,r||e()})];return i.src&&Z_?(r=!0,i.decode().then(function(){s&&e()}).catch(function(l){s&&(o?e():n())})):a.push(Gl(i,Se.ERROR,n)),function(){s=!1,a.forEach(rt)}}function RC(t,e){return new Promise((n,i)=>{function s(){o(),n(t)}function r(){o(),i(new Error("Image load error"))}function o(){t.removeEventListener("load",s),t.removeEventListener("error",r)}t.addEventListener("load",s),t.addEventListener("error",r)})}function AC(t,e){return e&&(t.src=e),t.src&&Z_?new Promise((n,i)=>t.decode().then(()=>n(t)).catch(s=>t.complete&&t.width?n(t):i(s))):RC(t)}class IC{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(const n in this.cache_){const i=this.cache_[n];!(e++&3)&&!i.hasListener()&&(delete this.cache_[n],delete this.patternCache_[n],--this.cacheSize_)}}}get(e,n,i){const s=yu(e,n,i);return s in this.cache_?this.cache_[s]:null}getPattern(e,n,i){const s=yu(e,n,i);return s in this.patternCache_?this.patternCache_[s]:null}set(e,n,i,s,r){const o=yu(e,n,i),a=o in this.cache_;this.cache_[o]=s,r&&(s.getImageState()===Ce.IDLE&&s.load(),s.getImageState()===Ce.LOADING?s.ready().then(()=>{this.patternCache_[o]=jl().createPattern(s.getImage(1),"repeat")}):this.patternCache_[o]=jl().createPattern(s.getImage(1),"repeat")),a||++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}}function yu(t,e,n){const i=n?aa(n):"null";return e+":"+t+":"+i}const Qn=new IC;let mo=null;class LC extends Cc{constructor(e,n,i,s,r){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=i,this.canvas_={},this.color_=r,this.imageState_=s===void 0?Ce.IDLE:s,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=n,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===Ce.LOADED){mo||(mo=Rt(1,1,void 0,{willReadFrequently:!0})),mo.drawImage(this.image_,0,0);try{mo.getImageData(0,0,1,1),this.tainted_=!1}catch{mo=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(Se.CHANGE)}handleImageError_(){this.imageState_=Ce.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=Ce.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){const e=this.size_[0],n=this.size_[1],i=Rt(e,n);i.fillRect(0,0,e,n),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===Ce.IDLE){this.image_||this.initializeImage_(),this.imageState_=Ce.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&AC(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==Ce.LOADED)return;const n=this.image_,i=document.createElement("canvas");i.width=Math.ceil(n.width*e),i.height=Math.ceil(n.height*e);const s=i.getContext("2d");s.scale(e,e),s.drawImage(n,0,0),s.globalCompositeOperation="multiply",s.fillStyle=vC(this.color_),s.fillRect(0,0,i.width/e,i.height/e),s.globalCompositeOperation="destination-in",s.drawImage(n,0,0),this.canvas_[e]=i}ready(){return this.ready_||(this.ready_=new Promise(e=>{this.imageState_===Ce.LOADED||this.imageState_===Ce.ERROR?e():this.addEventListener(Se.CHANGE,function n(){(this.imageState_===Ce.LOADED||this.imageState_===Ce.ERROR)&&(this.removeEventListener(Se.CHANGE,n),e())})})),this.ready_}}function Vd(t,e,n,i,s,r){let o=e===void 0?void 0:Qn.get(e,n,s);return o||(o=new LC(t,t&&"src"in t?t.src||void 0:e,n,i,s),Qn.set(e,n,s,o,r)),r&&o&&!Qn.getPattern(e,n,s)&&Qn.set(e,n,s,o,r),o}function ei(t){return t?Array.isArray(t)?Wd(t):typeof t=="object"&&"src"in t?OC(t):t:null}function OC(t){if(!t.offset||!t.size)return Qn.getPattern(t.src,"anonymous",t.color);const e=t.src+":"+t.offset,n=Qn.getPattern(e,void 0,t.color);if(n)return n;const i=Qn.get(t.src,"anonymous",null);if(i.getImageState()!==Ce.LOADED)return null;const s=Rt(t.size[0],t.size[1]);return s.drawImage(i.getImage(1),t.offset[0],t.offset[1],t.size[0],t.size[1],0,0,t.size[0],t.size[1]),Vd(s.canvas,e,void 0,Ce.LOADED,t.color,!0),Qn.getPattern(e,void 0,t.color)}const nl="ol-hidden",Dc="ol-unselectable",Ud="ol-control",im="ol-collapsed",FC=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),sm=["style","variant","weight","size","lineHeight","family"],Y_=function(t){const e=t.match(FC);if(!e)return null;const n={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"};for(let i=0,s=sm.length;i<s;++i){const r=e[i+1];r!==void 0&&(n[sm[i]]=r)}return n.families=n.family.split(/,\s?/),n},J_="10px sans-serif",nn="#000",Wr="round",Pi=[],Ti=0,Vr="round",la=10,ca="#000",ua="center",Wl="middle",As=[0,0,0,0],ha=1,vi=new li;let lr=null,gh;const mh={},NC=function(){const e="32px ",n=["monospace","serif"],i=n.length,s="wmytzilWMYTZIL@#/&?$%10";let r,o;function a(c,u,h){let d=!0;for(let f=0;f<i;++f){const g=n[f];if(o=Vl(c+" "+u+" "+e+g,s),h!=g){const m=Vl(c+" "+u+" "+e+h+","+g,s);d=d&&m!=o}}return!!d}function l(){let c=!0;const u=vi.getKeys();for(let h=0,d=u.length;h<d;++h){const f=u[h];vi.get(f)<100&&(a.apply(this,f.split(`
`))?(Ma(mh),lr=null,gh=void 0,vi.set(f,100)):(vi.set(f,vi.get(f)+1,!0),c=!1))}c&&(clearInterval(r),r=void 0)}return function(c){const u=Y_(c);if(!u)return;const h=u.families;for(let d=0,f=h.length;d<f;++d){const g=h[d],m=u.style+`
`+u.weight+`
`+g;vi.get(m)===void 0&&(vi.set(m,100,!0),a(u.style,u.weight,g)||(vi.set(m,0,!0),r===void 0&&(r=setInterval(l,32))))}}}(),DC=function(){let t;return function(e){let n=mh[e];if(n==null){if(H_){const i=Y_(e),s=Q_(e,"Žg");n=(isNaN(Number(i.lineHeight))?1.2:Number(i.lineHeight))*(s.actualBoundingBoxAscent+s.actualBoundingBoxDescent)}else t||(t=document.createElement("div"),t.innerHTML="M",t.style.minHeight="0",t.style.maxHeight="none",t.style.height="auto",t.style.padding="0",t.style.border="none",t.style.position="absolute",t.style.display="block",t.style.left="-99999px"),t.style.font=e,document.body.appendChild(t),n=t.offsetHeight,document.body.removeChild(t);mh[e]=n}return n}}();function Q_(t,e){return lr||(lr=Rt(1,1)),t!=gh&&(lr.font=t,gh=lr.font),lr.measureText(e)}function Vl(t,e){return Q_(t,e).width}function rm(t,e,n){if(e in n)return n[e];const i=e.split(`
`).reduce((s,r)=>Math.max(s,Vl(t,r)),0);return n[e]=i,i}function GC(t,e){const n=[],i=[],s=[];let r=0,o=0,a=0,l=0;for(let c=0,u=e.length;c<=u;c+=2){const h=e[c];if(h===`
`||c===u){r=Math.max(r,o),s.push(o),o=0,a+=l,l=0;continue}const d=e[c+1]||t.font,f=Vl(d,h);n.push(f),o+=f;const g=DC(d);i.push(g),l=Math.max(l,g)}return{width:r,height:a,widths:n,heights:i,lineWidths:s}}function zC(t,e,n,i,s,r,o,a,l,c,u){t.save(),n!==1&&(t.globalAlpha===void 0?t.globalAlpha=h=>h.globalAlpha*=n:t.globalAlpha*=n),e&&t.transform.apply(t,e),i.contextInstructions?(t.translate(l,c),t.scale(u[0],u[1]),BC(i,t)):u[0]<0||u[1]<0?(t.translate(l,c),t.scale(u[0],u[1]),t.drawImage(i,s,r,o,a,0,0,o,a)):t.drawImage(i,s,r,o,a,l,c,o*u[0],a*u[1]),t.restore()}function BC(t,e){const n=t.contextInstructions;for(let i=0,s=n.length;i<s;i+=2)Array.isArray(n[i+1])?e[n[i]].apply(e,n[i+1]):e[n[i]]=n[i+1]}class Gc extends Fc{constructor(e){super({opacity:1,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode}),this.canvases_,this.hitDetectionCanvas_=null,this.fill_=e.fill!==void 0?e.fill:null,this.origin_=[0,0],this.points_=e.points,this.radius_=e.radius,this.radius2_=e.radius2,this.angle_=e.angle!==void 0?e.angle:0,this.stroke_=e.stroke!==void 0?e.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?Ce.LOADING:Ce.LOADED,this.imageState_===Ce.LOADING&&this.ready().then(()=>this.imageState_=Ce.LOADED),this.render()}clone(){const e=this.getScale(),n=new Gc({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}getAnchor(){const e=this.size_,n=this.getDisplacement(),i=this.getScaleArray();return[e[0]/2-n[0]/i[0],e[1]/2+n[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(e){let n=this.canvases_[e];if(!n){const i=this.renderOptions_,s=Rt(i.size*e,i.size*e);this.draw_(i,s,e),n=s.canvas,this.canvases_[e]=n}return n}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius_}getRadius2(){return this.radius2_}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,n,i){if(n===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return n;let s=this.radius_,r=this.radius2_===void 0?s:this.radius2_;if(s<r){const P=s;s=r,r=P}const o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=r*Math.sin(a),c=Math.sqrt(r*r-l*l),u=s-c,h=Math.sqrt(l*l+u*u),d=h/l;if(e==="miter"&&d<=i)return d*n;const f=n/2/d,g=n/2*(u/h),p=Math.sqrt((s+f)*(s+f)+g*g)-s;if(this.radius2_===void 0||e==="bevel")return p*2;const _=s*Math.sin(a),y=Math.sqrt(s*s-_*_),w=r-y,E=Math.sqrt(_*_+w*w)/_;if(E<=i){const P=E*n/2-r-s;return 2*Math.max(p,P)}return p*2}createRenderOptions(){let e=Wr,n=Vr,i=0,s=null,r=0,o,a=0;this.stroke_&&(o=ei(this.stroke_.getColor()??ca),a=this.stroke_.getWidth()??ha,s=this.stroke_.getLineDash(),r=this.stroke_.getLineDashOffset()??0,n=this.stroke_.getLineJoin()??Vr,e=this.stroke_.getLineCap()??Wr,i=this.stroke_.getMiterLimit()??la);const l=this.calculateLineJoinSize_(n,a,i),c=Math.max(this.radius_,this.radius2_||0),u=Math.ceil(2*c+l);return{strokeStyle:o,strokeWidth:a,size:u,lineCap:e,lineDash:s,lineDashOffset:r,lineJoin:n,miterLimit:i}}render(){this.renderOptions_=this.createRenderOptions();const e=this.renderOptions_.size;this.canvases_={},this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,n,i){if(n.scale(i,i),n.translate(e.size/2,e.size/2),this.createPath_(n),this.fill_){let s=this.fill_.getColor();s===null&&(s=nn),n.fillStyle=ei(s),n.fill()}e.strokeStyle&&(n.strokeStyle=e.strokeStyle,n.lineWidth=e.strokeWidth,e.lineDash&&(n.setLineDash(e.lineDash),n.lineDashOffset=e.lineDashOffset),n.lineCap=e.lineCap,n.lineJoin=e.lineJoin,n.miterLimit=e.miterLimit,n.stroke())}createHitDetectionCanvas_(e){let n;if(this.fill_){let i=this.fill_.getColor(),s=0;typeof i=="string"&&(i=aa(i)),i===null?s=1:Array.isArray(i)&&(s=i.length===4?i[3]:1),s===0&&(n=Rt(e.size,e.size),this.drawHitDetectionCanvas_(e,n))}return n?n.canvas:this.getImage(1)}createPath_(e){let n=this.points_;const i=this.radius_;if(n===1/0)e.arc(0,0,i,0,2*Math.PI);else{const s=this.radius2_===void 0?i:this.radius2_;this.radius2_!==void 0&&(n*=2);const r=this.angle_-Math.PI/2,o=2*Math.PI/n;for(let a=0;a<n;a++){const l=r+a*o,c=a%2===0?i:s;e.lineTo(c*Math.cos(l),c*Math.sin(l))}e.closePath()}}drawHitDetectionCanvas_(e,n){n.translate(e.size/2,e.size/2),this.createPath_(n),n.fillStyle=nn,n.fill(),e.strokeStyle&&(n.strokeStyle=e.strokeStyle,n.lineWidth=e.strokeWidth,e.lineDash&&(n.setLineDash(e.lineDash),n.lineDashOffset=e.lineDashOffset),n.lineJoin=e.lineJoin,n.miterLimit=e.miterLimit,n.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}}class Ur extends Gc{constructor(e){e=e||{radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale!==void 0?e.scale:1,rotation:e.rotation!==void 0?e.rotation:0,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode})}clone(){const e=this.getScale(),n=new Ur({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}setRadius(e){this.radius_=e,this.render()}}class xi{constructor(e){e=e||{},this.patternImage_=null,this.color_=null,e.color!==void 0&&this.setColor(e.color)}clone(){const e=this.getColor();return new xi({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(e){if(e!==null&&typeof e=="object"&&"src"in e){const n=Vd(null,e.src,"anonymous",void 0,e.offset?null:e.color?e.color:null,!(e.offset&&e.size));n.ready().then(()=>{this.patternImage_=null}),n.getImageState()===Ce.IDLE&&n.load(),n.getImageState()===Ce.LOADING&&(this.patternImage_=n)}this.color_=e}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}}class es{constructor(e){e=e||{},this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}clone(){const e=this.getColor();return new es({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setWidth(e){this.width_=e}}class Ri{constructor(e){e=e||{},this.geometry_=null,this.geometryFunction_=om,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}clone(){let e=this.getGeometry();return e&&typeof e=="object"&&(e=e.clone()),new Ri({geometry:e??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e=="function"?this.geometryFunction_=e:typeof e=="string"?this.geometryFunction_=function(n){return n.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=om,this.geometry_=e}setZIndex(e){this.zIndex_=e}}function jC(t){let e;if(typeof t=="function")e=t;else{let n;Array.isArray(t)?n=t:(Ne(typeof t.getZIndex=="function","Expected an `Style` or an array of `Style`"),n=[t]),e=function(){return n}}return e}let vu=null;function ey(t,e){if(!vu){const n=new xi({color:"rgba(255,255,255,0.4)"}),i=new es({color:"#3399CC",width:1.25});vu=[new Ri({image:new Ur({fill:n,stroke:i,radius:5}),fill:n,stroke:i})]}return vu}function om(t){return t.getGeometry()}function am(t,e,n,i){return n!==void 0&&i!==void 0?[n/t,i/e]:n!==void 0?n/t:i!==void 0?i/e:1}class zc extends Fc{constructor(e){e=e||{};const n=e.opacity!==void 0?e.opacity:1,i=e.rotation!==void 0?e.rotation:0,s=e.scale!==void 0?e.scale:1,r=e.rotateWithView!==void 0?e.rotateWithView:!1;super({opacity:n,rotation:i,scale:s,displacement:e.displacement!==void 0?e.displacement:[0,0],rotateWithView:r,declutterMode:e.declutterMode}),this.anchor_=e.anchor!==void 0?e.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin!==void 0?e.anchorOrigin:"top-left",this.anchorXUnits_=e.anchorXUnits!==void 0?e.anchorXUnits:"fraction",this.anchorYUnits_=e.anchorYUnits!==void 0?e.anchorYUnits:"fraction",this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null;const o=e.img!==void 0?e.img:null;let a=e.src;Ne(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||qe(o)),Ne(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),Ne(!((e.width!==void 0||e.height!==void 0)&&e.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(e.src!==void 0?l=Ce.IDLE:o!==void 0&&("complete"in o?o.complete?l=o.src?Ce.LOADED:Ce.IDLE:l=Ce.LOADING:l=Ce.LOADED),this.color_=e.color!==void 0?aa(e.color):null,this.iconImage_=Vd(o,a,this.crossOrigin_,l,this.color_),this.offset_=e.offset!==void 0?e.offset:[0,0],this.offsetOrigin_=e.offsetOrigin!==void 0?e.offsetOrigin:"top-left",this.origin_=null,this.size_=e.size!==void 0?e.size:null,e.width!==void 0||e.height!==void 0){let c,u;if(e.size)[c,u]=e.size;else{const h=this.getImage(1);if(h.width&&h.height)c=h.width,u=h.height;else if(h instanceof HTMLImageElement){this.initialOptions_=e;const d=()=>{if(this.unlistenImageChange(d),!this.initialOptions_)return;const f=this.iconImage_.getSize();this.setScale(am(f[0],f[1],e.width,e.height))};this.listenImageChange(d);return}}c!==void 0&&this.setScale(am(c,u,e.width,e.height))}}clone(){let e,n,i;return this.initialOptions_?(n=this.initialOptions_.width,i=this.initialOptions_.height):(e=this.getScale(),e=Array.isArray(e)?e.slice():e),new zc({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:e,width:n,height:i,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;const s=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!s)return null;e=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(e[0]*=s[0]),this.anchorYUnits_=="fraction"&&(e[1]*=s[1])}if(this.anchorOrigin_!="top-left"){if(!s)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(e[0]=-e[0]+s[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(e[1]=-e[1]+s[1])}this.normalizedAnchor_=e}const n=this.getDisplacement(),i=this.getScaleArray();return[e[0]-n[0]/i[0],e[1]+n[1]/i[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!="top-left"){const n=this.getSize(),i=this.iconImage_.getSize();if(!n||!i)return null;e=e.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(e[0]=i[0]-n[0]-e[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(e[1]=i[1]-n[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){const e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==Ce.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){const e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==Ce.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(Se.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(Se.CHANGE,e)}ready(){return this.iconImage_.ready()}}const WC="#333";class Kd{constructor(e){e=e||{},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=yn(e.scale!==void 0?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill!==void 0?e.fill:new xi({color:WC}),this.maxAngle_=e.maxAngle!==void 0?e.maxAngle:Math.PI/4,this.placement_=e.placement!==void 0?e.placement:"point",this.overflow_=!!e.overflow,this.stroke_=e.stroke!==void 0?e.stroke:null,this.offsetX_=e.offsetX!==void 0?e.offsetX:0,this.offsetY_=e.offsetY!==void 0?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding,this.declutterMode_=e.declutterMode}clone(){const e=this.getScale();return new Kd({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=yn(e!==void 0?e:1)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}}let Zs=0;const Qr=0,ut=1<<Zs++,le=1<<Zs++,pn=1<<Zs++,Et=1<<Zs++,ni=1<<Zs++,zo=1<<Zs++,It=Math.pow(2,Zs)-1,ty={[ut]:"boolean",[le]:"number",[pn]:"string",[Et]:"color",[ni]:"number[]",[zo]:"size"},VC=Object.keys(ty).map(Number).sort(ki);function Wt(t){const e=[];for(const n of VC)UC(t,n)&&e.push(ty[n]);return e.length===0?"untyped":e.length<3?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e[e.length-1]}function UC(t,e){return(t&e)===e}function ii(t,e){return!!(t&e)}function Bc(t,e){return t===e}class ts{constructor(e,n){this.type=e,this.value=n}}class KC{constructor(e,n,...i){this.type=e,this.operator=n,this.args=i}}function ny(){return{variables:new Set,properties:new Set,featureId:!1,geometryType:!1,style:{}}}function $C(t){switch(t){case"string":return pn;case"color":return Et;case"number":return le;case"boolean":return ut;case"number[]":return ni;default:throw new Error(`Unrecognized type hint: ${t}`)}}function $e(t,e,n){switch(typeof t){case"boolean":return new ts(ut,t);case"number":return new ts(n===zo?zo:le,t);case"string":{let s=pn;return EC(t)&&(s|=Et),Bc(s&n,Qr)||(s&=n),new ts(s,t)}}if(!Array.isArray(t))throw new Error("Expression must be an array or a primitive value");if(t.length===0)throw new Error("Empty expression");if(typeof t[0]=="string")return sk(t,e,n);for(const s of t)if(typeof s!="number")throw new Error("Expected an array of numbers");let i=ni;return t.length===2?i|=zo:(t.length===3||t.length===4)&&(i|=Et),n&&(i&=n),new ts(i,t)}const O={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Coalesce:"coalesce",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette",ToString:"to-string"},qC={[O.Get]:ve(([t,e])=>e!==void 0?$C(e.value):It,Me(1,2),HC),[O.Var]:ve(([t])=>t.type,Me(1,1),ZC),[O.Id]:ve(le|pn,po,XC),[O.Concat]:ve(pn,Me(2,1/0),Oe(It)),[O.GeometryType]:ve(pn,po,YC),[O.Resolution]:ve(le,po),[O.Zoom]:ve(le,po),[O.Time]:ve(le,po),[O.Any]:ve(ut,Me(2,1/0),Oe(ut)),[O.All]:ve(ut,Me(2,1/0),Oe(ut)),[O.Not]:ve(ut,Me(1,1),Oe(ut)),[O.Equal]:ve(ut,Me(2,2),Oe(It),Bi),[O.NotEqual]:ve(ut,Me(2,2),Oe(It),Bi),[O.GreaterThan]:ve(ut,Me(2,2),Oe(It),Bi),[O.GreaterThanOrEqualTo]:ve(ut,Me(2,2),Oe(It),Bi),[O.LessThan]:ve(ut,Me(2,2),Oe(It),Bi),[O.LessThanOrEqualTo]:ve(ut,Me(2,2),Oe(It),Bi),[O.Multiply]:ve(t=>{let e=le|Et;for(let n=0;n<t.length;n++)e&=t[n].type;return e},Me(2,1/0),Oe(le|Et),Bi),[O.Coalesce]:ve(t=>{let e=It;for(let n=1;n<t.length;n+=2)e&=t[n].type;return e&=t[t.length-1].type,e},Me(2,1/0),Oe(It),Bi),[O.Divide]:ve(le,Me(2,2),Oe(le)),[O.Add]:ve(le,Me(2,1/0),Oe(le)),[O.Subtract]:ve(le,Me(2,2),Oe(le)),[O.Clamp]:ve(le,Me(3,3),Oe(le)),[O.Mod]:ve(le,Me(2,2),Oe(le)),[O.Pow]:ve(le,Me(2,2),Oe(le)),[O.Abs]:ve(le,Me(1,1),Oe(le)),[O.Floor]:ve(le,Me(1,1),Oe(le)),[O.Ceil]:ve(le,Me(1,1),Oe(le)),[O.Round]:ve(le,Me(1,1),Oe(le)),[O.Sin]:ve(le,Me(1,1),Oe(le)),[O.Cos]:ve(le,Me(1,1),Oe(le)),[O.Atan]:ve(le,Me(1,2),Oe(le)),[O.Sqrt]:ve(le,Me(1,1),Oe(le)),[O.Match]:ve(t=>{let e=It;for(let n=2;n<t.length;n+=2)e&=t[n].type;return e&=t[t.length-1].type,e},Me(4,1/0),lm,QC),[O.Between]:ve(ut,Me(3,3),Oe(le)),[O.Interpolate]:ve(t=>{let e=Et|le;for(let n=3;n<t.length;n+=2)e&=t[n].type;return e},Me(6,1/0),lm,ek),[O.Case]:ve(t=>{let e=It;for(let n=1;n<t.length;n+=2)e&=t[n].type;return e&=t[t.length-1].type,e},Me(3,1/0),JC,tk),[O.In]:ve(ut,Me(2,2),nk),[O.Number]:ve(le,Me(1,1/0),Oe(It)),[O.String]:ve(pn,Me(1,1/0),Oe(It)),[O.Array]:ve(t=>t.length===2?ni|zo:t.length===3||t.length===4?ni|Et:ni,Me(1,1/0),Oe(le)),[O.Color]:ve(Et,Me(1,4),Oe(le)),[O.Band]:ve(le,Me(1,3),Oe(le)),[O.Palette]:ve(Et,Me(2,2),ik),[O.ToString]:ve(pn,Me(1,1),Oe(ut|le|pn|Et))};function HC(t,e){const n=$e(t[1],e);if(!(n instanceof ts))throw new Error("Expected a literal argument for get operation");if(typeof n.value!="string")throw new Error("Expected a string argument for get operation");if(e.properties.add(n.value),t.length===3){const i=$e(t[2],e);return[n,i]}return[n]}function ZC(t,e,n,i){const s=t[1];if(typeof s!="string")throw new Error("Expected a string argument for var operation");if(e.variables.add(s),!("variables"in e.style)||e.style.variables[s]===void 0)return[new ts(It,s)];const r=e.style.variables[s],o=$e(r,e);if(o.value=s,i&&!ii(i,o.type))throw new Error(`The variable ${s} has type ${Wt(o.type)} but the following type was expected: ${Wt(i)}`);return[o]}function XC(t,e){e.featureId=!0}function YC(t,e){e.geometryType=!0}function po(t,e){const n=t[0];if(t.length!==1)throw new Error(`Expected no arguments for ${n} operation`);return[]}function Me(t,e){return function(n,i){const s=n[0],r=n.length-1;if(t===e){if(r!==t){const o=t===1?"":"s";throw new Error(`Expected ${t} argument${o} for ${s}, got ${r}`)}}else if(r<t||r>e){const o=e===1/0?`${t} or more`:`${t} to ${e}`;throw new Error(`Expected ${o} arguments for ${s}, got ${r}`)}}}function Oe(t){return function(e,n){const i=e[0],s=e.length-1,r=new Array(s);for(let o=0;o<s;++o){const a=$e(e[o+1],n);if(!ii(t,a.type)){const l=Wt(t),c=Wt(a.type);throw new Error(`Unexpected type for argument ${o} of ${i} operation, got ${l} but expected ${c}`)}a.type&=t,r[o]=a}return r}}function Bi(t,e,n){const i=t[0],s=t.length-1;let r=It;for(let a=0;a<n.length;++a)r&=n[a].type;if(r===Qr)throw new Error(`No common type could be found for arguments of ${i} operation`);const o=new Array(s);for(let a=0;a<s;++a)o[a]=$e(t[a+1],e,r);return o}function JC(t,e){const n=t[0],i=t.length-1;if(i%2===0)throw new Error(`An odd amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`)}function lm(t,e){const n=t[0],i=t.length-1;if(i%2===1)throw new Error(`An even amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`)}function QC(t,e,n,i){const s=t.length-1;let o=$e(t[1],e).type;const a=$e(t[t.length-1],e);let l=i!==void 0?i&a.type:a.type;const c=new Array(s-2);for(let h=0;h<s-2;h+=2){const d=$e(t[h+2],e),f=$e(t[h+3],e);o&=d.type,l&=f.type,c[h]=d,c[h+1]=f}const u=pn|le|ut;if(!ii(u,o))throw new Error(`Expected an input of type ${Wt(u)} for the interpolate operation, got ${Wt(o)} instead`);if(o&=u,Bc(l,Qr))throw new Error("Could not find a common output type for the following match operation: "+JSON.stringify(t));for(let h=0;h<s-2;h+=2){const d=$e(t[h+2],e,o),f=$e(t[h+3],e,l);c[h]=d,c[h+1]=f}return[$e(t[1],e,o),...c,$e(t[t.length-1],e,l)]}function ek(t,e,n,i){const s=t[1];let r;switch(s[0]){case"linear":r=1;break;case"exponential":if(r=s[1],typeof r!="number")throw new Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(r)} instead`);break;default:r=null}if(!r)throw new Error(`Invalid interpolation type: ${JSON.stringify(s)}`);r=$e(r,e);let o=$e(t[2],e);if(!ii(le,o.type))throw new Error(`Expected an input of type number for the interpolate operation, got ${Wt(o.type)} instead`);o=$e(t[2],e,le);const a=new Array(t.length-3);for(let l=0;l<a.length;l+=2){let c=$e(t[l+3],e);if(!ii(le,c.type))throw new Error(`Expected all stop input values in the interpolate operation to be of type number, got ${Wt(c.type)} at position ${l+2} instead`);let u=$e(t[l+4],e);if(!ii(le|Et,u.type))throw new Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${Wt(u.type)} at position ${l+3} instead`);c=$e(t[l+3],e,le),u=$e(t[l+4],e,le|Et),a[l]=c,a[l+1]=u}return[r,o,...a]}function tk(t,e,n,i){const s=$e(t[t.length-1],e,i);let r=i!==void 0?i&s.type:s.type;const o=new Array(t.length-1);for(let a=0;a<o.length-1;a+=2){const l=$e(t[a+1],e),c=$e(t[a+2],e,i);if(!ii(ut,l.type))throw new Error(`Expected all conditions in the case operation to be of type boolean, got ${Wt(l.type)} at position ${a} instead`);r&=c.type,o[a]=l,o[a+1]=c}if(Bc(r,Qr))throw new Error("Could not find a common output type for the following case operation: "+JSON.stringify(t));for(let a=0;a<o.length-1;a+=2)o[a+1]=$e(t[a+2],e,r);return o[o.length-1]=$e(t[t.length-1],e,r),o}function nk(t,e){let n=t[2];if(!Array.isArray(n))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');if(typeof n[0]=="string"){if(n[0]!=="literal")throw new Error('For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.');if(!Array.isArray(n[1]))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');n=n[1]}let i=pn|le;const s=new Array(n.length);for(let o=0;o<s.length;o++){const a=$e(n[o],e);i&=a.type,s[o]=a}if(Bc(i,Qr))throw new Error("Could not find a common type for the following in operation: "+JSON.stringify(t));return[$e(t[1],e,i),...s]}function ik(t,e){const n=$e(t[1],e,le);if(n.type!==le)throw new Error(`The first argument of palette must be an number, got ${Wt(n.type)} instead`);const i=t[2];if(!Array.isArray(i))throw new Error("The second argument of palette must be an array");const s=new Array(i.length);for(let r=0;r<s.length;r++){const o=$e(i[r],e,Et);if(!(o instanceof ts))throw new Error(`The palette color at index ${r} must be a literal value`);if(!ii(o.type,Et))throw new Error(`The palette color at index ${r} should be of type color, got ${Wt(o.type)} instead`);s[r]=o}return[n,...s]}function ve(t,...e){return function(n,i,s){const r=n[0];let o=[];for(let l=0;l<e.length;l++)o=e[l](n,i,o,s)||o;let a=typeof t=="function"?t(o):t;if(s!==void 0){if(!ii(a,s))throw new Error(`The following expression was expected to return ${Wt(s)}, but returns ${Wt(a)} instead: ${JSON.stringify(n)}`);a&=s}if(a===Qr)throw new Error(`No matching type was found for the following expression: ${JSON.stringify(n)}`);return new KC(a,r,...o)}}function sk(t,e,n){const i=t[0],s=qC[i];if(!s)throw new Error(`Unknown operator: ${i}`);return s(t,e,n)}function iy(t){if(!t)return"";const e=t.getType();switch(e){case"Point":case"LineString":case"Polygon":return e;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return e.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return iy(t.getGeometries()[0]);default:return""}}function sy(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function Ni(t,e,n){const i=$e(t,n);if(!ii(e,i.type)){const s=Wt(e),r=Wt(i.type);throw new Error(`Expected expression to be of type ${s}, got ${r}`)}return Wn(i)}function Wn(t,e){if(t instanceof ts){if(t.type===Et&&typeof t.value=="string"){const i=jd(t.value);return function(){return i}}return function(){return t.value}}const n=t.operator;switch(n){case O.Number:case O.String:case O.Coalesce:return rk(t);case O.Get:case O.Var:return ok(t);case O.Id:return i=>i.featureId;case O.GeometryType:return i=>i.geometryType;case O.Concat:{const i=t.args.map(s=>Wn(s));return s=>"".concat(...i.map(r=>r(s).toString()))}case O.Resolution:return i=>i.resolution;case O.Any:case O.All:case O.Between:case O.In:case O.Not:return lk(t);case O.Equal:case O.NotEqual:case O.LessThan:case O.LessThanOrEqualTo:case O.GreaterThan:case O.GreaterThanOrEqualTo:return ak(t);case O.Multiply:case O.Divide:case O.Add:case O.Subtract:case O.Clamp:case O.Mod:case O.Pow:case O.Abs:case O.Floor:case O.Ceil:case O.Round:case O.Sin:case O.Cos:case O.Atan:case O.Sqrt:return ck(t);case O.Case:return uk(t);case O.Match:return hk(t);case O.Interpolate:return dk(t);case O.ToString:return fk(t);default:throw new Error(`Unsupported operator ${n}`)}}function rk(t,e){const n=t.operator,i=t.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=Wn(t.args[r]);switch(n){case O.Coalesce:return r=>{for(let o=0;o<i;++o){const a=s[o](r);if(typeof a<"u"&&a!==null)return a}throw new Error("Expected one of the values to be non-null")};case O.Number:case O.String:return r=>{for(let o=0;o<i;++o){const a=s[o](r);if(typeof a===n)return a}throw new Error(`Expected one of the values to be a ${n}`)};default:throw new Error(`Unsupported assertion operator ${n}`)}}function ok(t,e){const i=t.args[0].value;switch(t.operator){case O.Get:return s=>s.properties[i];case O.Var:return s=>s.variables[i];default:throw new Error(`Unsupported accessor operator ${t.operator}`)}}function ak(t,e){const n=t.operator,i=Wn(t.args[0]),s=Wn(t.args[1]);switch(n){case O.Equal:return r=>i(r)===s(r);case O.NotEqual:return r=>i(r)!==s(r);case O.LessThan:return r=>i(r)<s(r);case O.LessThanOrEqualTo:return r=>i(r)<=s(r);case O.GreaterThan:return r=>i(r)>s(r);case O.GreaterThanOrEqualTo:return r=>i(r)>=s(r);default:throw new Error(`Unsupported comparison operator ${n}`)}}function lk(t,e){const n=t.operator,i=t.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=Wn(t.args[r]);switch(n){case O.Any:return r=>{for(let o=0;o<i;++o)if(s[o](r))return!0;return!1};case O.All:return r=>{for(let o=0;o<i;++o)if(!s[o](r))return!1;return!0};case O.Between:return r=>{const o=s[0](r),a=s[1](r),l=s[2](r);return o>=a&&o<=l};case O.In:return r=>{const o=s[0](r);for(let a=1;a<i;++a)if(o===s[a](r))return!0;return!1};case O.Not:return r=>!s[0](r);default:throw new Error(`Unsupported logical operator ${n}`)}}function ck(t,e){const n=t.operator,i=t.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=Wn(t.args[r]);switch(n){case O.Multiply:return r=>{let o=1;for(let a=0;a<i;++a)o*=s[a](r);return o};case O.Divide:return r=>s[0](r)/s[1](r);case O.Add:return r=>{let o=0;for(let a=0;a<i;++a)o+=s[a](r);return o};case O.Subtract:return r=>s[0](r)-s[1](r);case O.Clamp:return r=>{const o=s[0](r),a=s[1](r);if(o<a)return a;const l=s[2](r);return o>l?l:o};case O.Mod:return r=>s[0](r)%s[1](r);case O.Pow:return r=>Math.pow(s[0](r),s[1](r));case O.Abs:return r=>Math.abs(s[0](r));case O.Floor:return r=>Math.floor(s[0](r));case O.Ceil:return r=>Math.ceil(s[0](r));case O.Round:return r=>Math.round(s[0](r));case O.Sin:return r=>Math.sin(s[0](r));case O.Cos:return r=>Math.cos(s[0](r));case O.Atan:return i===2?r=>Math.atan2(s[0](r),s[1](r)):r=>Math.atan(s[0](r));case O.Sqrt:return r=>Math.sqrt(s[0](r));default:throw new Error(`Unsupported numeric operator ${n}`)}}function uk(t,e){const n=t.args.length,i=new Array(n);for(let s=0;s<n;++s)i[s]=Wn(t.args[s]);return s=>{for(let r=0;r<n-1;r+=2)if(i[r](s))return i[r+1](s);return i[n-1](s)}}function hk(t,e){const n=t.args.length,i=new Array(n);for(let s=0;s<n;++s)i[s]=Wn(t.args[s]);return s=>{const r=i[0](s);for(let o=1;o<n;o+=2)if(r===i[o](s))return i[o+1](s);return i[n-1](s)}}function dk(t,e){const n=t.args.length,i=new Array(n);for(let s=0;s<n;++s)i[s]=Wn(t.args[s]);return s=>{const r=i[0](s),o=i[1](s);let a,l;for(let c=2;c<n;c+=2){const u=i[c](s);let h=i[c+1](s);const d=Array.isArray(h);if(d&&(h=SC(h)),u>=o)return c===2?h:d?gk(r,o,a,l,u,h):Eo(r,o,a,l,u,h);a=u,l=h}return l}}function fk(t,e){const n=t.operator,i=t.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=Wn(t.args[r]);switch(n){case O.ToString:return r=>{const o=s[0](r);return t.args[0].type===Et?Wd(o):o.toString()};default:throw new Error(`Unsupported convert operator ${n}`)}}function Eo(t,e,n,i,s,r){const o=s-n;if(o===0)return i;const a=e-n,l=t===1?a/o:(Math.pow(t,a)-1)/(Math.pow(t,o)-1);return i+l*(r-i)}function gk(t,e,n,i,s,r){if(s-n===0)return i;const a=tm(i),l=tm(r);let c=l[2]-a[2];c>180?c-=360:c<-180&&(c+=360);const u=[Eo(t,e,n,a[0],s,l[0]),Eo(t,e,n,a[1],s,l[1]),a[2]+Eo(t,e,n,0,s,c),Eo(t,e,n,i[3],s,r[3])];return K_(bC(u))}function mk(t){return!0}function pk(t){const e=ny(),n=_k(t,e),i=sy();return function(s,r){if(i.properties=s.getPropertiesInternal(),i.resolution=r,e.featureId){const o=s.getId();o!==void 0?i.featureId=o:i.featureId=null}return e.geometryType&&(i.geometryType=iy(s.getGeometry())),n(i)}}function cm(t){const e=ny(),n=t.length,i=new Array(n);for(let o=0;o<n;++o)i[o]=ph(t[o],e);const s=sy(),r=new Array(n);return function(o,a){if(s.properties=o.getPropertiesInternal(),s.resolution=a,e.featureId){const c=o.getId();c!==void 0?s.featureId=c:s.featureId=null}let l=0;for(let c=0;c<n;++c){const u=i[c](s);u&&(r[l]=u,l+=1)}return r.length=l,r}}function _k(t,e){const n=t.length,i=new Array(n);for(let s=0;s<n;++s){const r=t[s],o="filter"in r?Ni(r.filter,ut,e):mk;let a;if(Array.isArray(r.style)){const l=r.style.length;a=new Array(l);for(let c=0;c<l;++c)a[c]=ph(r.style[c],e)}else a=[ph(r.style,e)];i[s]={filter:o,styles:a}}return function(s){const r=[];let o=!1;for(let a=0;a<n;++a){const l=i[a].filter;if(l(s)&&!(t[a].else&&o)){o=!0;for(const c of i[a].styles){const u=c(s);u&&r.push(u)}}}return r}}function ph(t,e){const n=da(t,"",e),i=fa(t,"",e),s=yk(t,e),r=vk(t,e),o=rn(t,"z-index",e);if(!n&&!i&&!s&&!r&&!Ds(t))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(t));const a=new Ri;return function(l){let c=!0;if(n){const u=n(l);u&&(c=!1),a.setFill(u)}if(i){const u=i(l);u&&(c=!1),a.setStroke(u)}if(s){const u=s(l);u&&(c=!1),a.setText(u)}if(r){const u=r(l);u&&(c=!1),a.setImage(u)}return o&&a.setZIndex(o(l)),c?null:a}}function da(t,e,n){let i;if(e+"fill-pattern-src"in t?i=Ek(t,e+"fill-",n):i=$d(t,e+"fill-color",n),!i)return null;const s=new xi;return function(r){const o=i(r);return o==="none"?null:(s.setColor(o),s)}}function fa(t,e,n){const i=rn(t,e+"stroke-width",n),s=$d(t,e+"stroke-color",n);if(!i&&!s)return null;const r=bi(t,e+"stroke-line-cap",n),o=bi(t,e+"stroke-line-join",n),a=ry(t,e+"stroke-line-dash",n),l=rn(t,e+"stroke-line-dash-offset",n),c=rn(t,e+"stroke-miter-limit",n),u=new es;return function(h){if(s){const d=s(h);if(d==="none")return null;u.setColor(d)}if(i&&u.setWidth(i(h)),r){const d=r(h);if(d!=="butt"&&d!=="round"&&d!=="square")throw new Error("Expected butt, round, or square line cap");u.setLineCap(d)}if(o){const d=o(h);if(d!=="bevel"&&d!=="round"&&d!=="miter")throw new Error("Expected bevel, round, or miter line join");u.setLineJoin(d)}return a&&u.setLineDash(a(h)),l&&u.setLineDashOffset(l(h)),c&&u.setMiterLimit(c(h)),u}}function yk(t,e){const n="text-",i=bi(t,n+"value",e);if(!i)return null;const s=da(t,n,e),r=da(t,n+"background-",e),o=fa(t,n,e),a=fa(t,n+"background-",e),l=bi(t,n+"font",e),c=rn(t,n+"max-angle",e),u=rn(t,n+"offset-x",e),h=rn(t,n+"offset-y",e),d=ga(t,n+"overflow",e),f=bi(t,n+"placement",e),g=rn(t,n+"repeat",e),m=jc(t,n+"scale",e),p=ga(t,n+"rotate-with-view",e),_=rn(t,n+"rotation",e),y=bi(t,n+"align",e),w=bi(t,n+"justify",e),b=bi(t,n+"baseline",e),E=ry(t,n+"padding",e),P=Wc(t,n+"declutter-mode"),k=new Kd({declutterMode:P});return function(R){if(k.setText(i(R)),s&&k.setFill(s(R)),r&&k.setBackgroundFill(r(R)),o&&k.setStroke(o(R)),a&&k.setBackgroundStroke(a(R)),l&&k.setFont(l(R)),c&&k.setMaxAngle(c(R)),u&&k.setOffsetX(u(R)),h&&k.setOffsetY(h(R)),d&&k.setOverflow(d(R)),f){const C=f(R);if(C!=="point"&&C!=="line")throw new Error("Expected point or line for text-placement");k.setPlacement(C)}if(g&&k.setRepeat(g(R)),m&&k.setScale(m(R)),p&&k.setRotateWithView(p(R)),_&&k.setRotation(_(R)),y){const C=y(R);if(C!=="left"&&C!=="center"&&C!=="right"&&C!=="end"&&C!=="start")throw new Error("Expected left, right, center, start, or end for text-align");k.setTextAlign(C)}if(w){const C=w(R);if(C!=="left"&&C!=="right"&&C!=="center")throw new Error("Expected left, right, or center for text-justify");k.setJustify(C)}if(b){const C=b(R);if(C!=="bottom"&&C!=="top"&&C!=="middle"&&C!=="alphabetic"&&C!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");k.setTextBaseline(C)}return E&&k.setPadding(E(R)),k}}function vk(t,e){return"icon-src"in t?wk(t,e):"shape-points"in t?Sk(t,e):"circle-radius"in t?bk(t,e):null}function wk(t,e){const n="icon-",i=n+"src",s=oy(t[i],i),r=Ul(t,n+"anchor",e),o=jc(t,n+"scale",e),a=rn(t,n+"opacity",e),l=Ul(t,n+"displacement",e),c=rn(t,n+"rotation",e),u=ga(t,n+"rotate-with-view",e),h=hm(t,n+"anchor-origin"),d=dm(t,n+"anchor-x-units"),f=dm(t,n+"anchor-y-units"),g=kk(t,n+"color"),m=xk(t,n+"cross-origin"),p=Ck(t,n+"offset"),_=hm(t,n+"offset-origin"),y=Kl(t,n+"width"),w=Kl(t,n+"height"),b=Mk(t,n+"size"),E=Wc(t,n+"declutter-mode"),P=new zc({src:s,anchorOrigin:h,anchorXUnits:d,anchorYUnits:f,color:g,crossOrigin:m,offset:p,offsetOrigin:_,height:w,width:y,size:b,declutterMode:E});return function(k){return a&&P.setOpacity(a(k)),l&&P.setDisplacement(l(k)),c&&P.setRotation(c(k)),u&&P.setRotateWithView(u(k)),o&&P.setScale(o(k)),r&&P.setAnchor(r(k)),P}}function Sk(t,e){const n="shape-",i=n+"points",s=n+"radius",r=_h(t[i],i),o=_h(t[s],s),a=da(t,n,e),l=fa(t,n,e),c=jc(t,n+"scale",e),u=Ul(t,n+"displacement",e),h=rn(t,n+"rotation",e),d=ga(t,n+"rotate-with-view",e),f=Kl(t,n+"radius2"),g=Kl(t,n+"angle"),m=Wc(t,n+"declutter-mode"),p=new Gc({points:r,radius:o,radius2:f,angle:g,declutterMode:m});return function(_){return a&&p.setFill(a(_)),l&&p.setStroke(l(_)),u&&p.setDisplacement(u(_)),h&&p.setRotation(h(_)),d&&p.setRotateWithView(d(_)),c&&p.setScale(c(_)),p}}function bk(t,e){const n="circle-",i=da(t,n,e),s=fa(t,n,e),r=rn(t,n+"radius",e),o=jc(t,n+"scale",e),a=Ul(t,n+"displacement",e),l=rn(t,n+"rotation",e),c=ga(t,n+"rotate-with-view",e),u=Wc(t,n+"declutter-mode"),h=new Ur({radius:5,declutterMode:u});return function(d){return r&&h.setRadius(r(d)),i&&h.setFill(i(d)),s&&h.setStroke(s(d)),a&&h.setDisplacement(a(d)),l&&h.setRotation(l(d)),c&&h.setRotateWithView(c(d)),o&&h.setScale(o(d)),h}}function rn(t,e,n){if(!(e in t))return;const i=Ni(t[e],le,n);return function(s){return _h(i(s),e)}}function bi(t,e,n){if(!(e in t))return null;const i=Ni(t[e],pn,n);return function(s){return oy(i(s),e)}}function Ek(t,e,n){const i=bi(t,e+"pattern-src",n),s=um(t,e+"pattern-offset",n),r=um(t,e+"pattern-size",n),o=$d(t,e+"color",n);return function(a){return{src:i(a),offset:s&&s(a),size:r&&r(a),color:o&&o(a)}}}function ga(t,e,n){if(!(e in t))return null;const i=Ni(t[e],ut,n);return function(s){const r=i(s);if(typeof r!="boolean")throw new Error(`Expected a boolean for ${e}`);return r}}function $d(t,e,n){if(!(e in t))return null;const i=Ni(t[e],Et|pn,n);return function(s){return ay(i(s),e)}}function ry(t,e,n){if(!(e in t))return null;const i=Ni(t[e],ni,n);return function(s){return Ta(i(s),e)}}function Ul(t,e,n){if(!(e in t))return null;const i=Ni(t[e],ni,n);return function(s){const r=Ta(i(s),e);if(r.length!==2)throw new Error(`Expected two numbers for ${e}`);return r}}function um(t,e,n){if(!(e in t))return null;const i=Ni(t[e],ni,n);return function(s){return ly(i(s),e)}}function jc(t,e,n){if(!(e in t))return null;const i=Ni(t[e],ni|le,n);return function(s){return Pk(i(s),e)}}function Kl(t,e){const n=t[e];if(n!==void 0){if(typeof n!="number")throw new Error(`Expected a number for ${e}`);return n}}function Mk(t,e){const n=t[e];if(n!==void 0){if(typeof n=="number")return yn(n);if(!Array.isArray(n))throw new Error(`Expected a number or size array for ${e}`);if(n.length!==2||typeof n[0]!="number"||typeof n[1]!="number")throw new Error(`Expected a number or size array for ${e}`);return n}}function xk(t,e){const n=t[e];if(n!==void 0){if(typeof n!="string")throw new Error(`Expected a string for ${e}`);return n}}function hm(t,e){const n=t[e];if(n!==void 0){if(n!=="bottom-left"&&n!=="bottom-right"&&n!=="top-left"&&n!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);return n}}function dm(t,e){const n=t[e];if(n!==void 0){if(n!=="pixels"&&n!=="fraction")throw new Error(`Expected pixels or fraction for ${e}`);return n}}function Ck(t,e){const n=t[e];if(n!==void 0)return Ta(n,e)}function Wc(t,e){const n=t[e];if(n!==void 0){if(typeof n!="string")throw new Error(`Expected a string for ${e}`);if(n!=="declutter"&&n!=="obstacle"&&n!=="none")throw new Error(`Expected declutter, obstacle, or none for ${e}`);return n}}function kk(t,e){const n=t[e];if(n!==void 0)return ay(n,e)}function Ta(t,e){if(!Array.isArray(t))throw new Error(`Expected an array for ${e}`);const n=t.length;for(let i=0;i<n;++i)if(typeof t[i]!="number")throw new Error(`Expected an array of numbers for ${e}`);return t}function oy(t,e){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);return t}function _h(t,e){if(typeof t!="number")throw new Error(`Expected a number for ${e}`);return t}function ay(t,e){if(typeof t=="string")return t;const n=Ta(t,e),i=n.length;if(i<3||i>4)throw new Error(`Expected a color with 3 or 4 values for ${e}`);return n}function ly(t,e){const n=Ta(t,e);if(n.length!==2)throw new Error(`Expected an array of two numbers for ${e}`);return n}function Pk(t,e){return typeof t=="number"?t:ly(t,e)}const fm={RENDER_ORDER:"renderOrder"};class cy extends Oc{constructor(e){e=e||{};const n=Object.assign({},e);delete n.style,delete n.renderBuffer,delete n.updateWhileAnimating,delete n.updateWhileInteracting,super(n),this.declutter_=e.declutter?String(e.declutter):void 0,this.renderBuffer_=e.renderBuffer!==void 0?e.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0?e.updateWhileAnimating:!1,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0?e.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(fm.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e,n){const i=this.getDeclutter();i in e.declutter||(e.declutter[i]=new V_(9)),this.getRenderer().renderDeclutter(e,n)}setRenderOrder(e){this.set(fm.RENDER_ORDER,e)}setStyle(e){this.style_=e===void 0?ey:e;const n=Tk(e);this.styleFunction_=e===null?void 0:jC(n),this.changed()}}function Tk(t){if(t===void 0)return ey;if(!t)return null;if(typeof t=="function"||t instanceof Ri)return t;if(!Array.isArray(t))return cm([t]);if(t.length===0)return[];const e=t.length,n=t[0];if(n instanceof Ri){const s=new Array(e);for(let r=0;r<e;++r){const o=t[r];if(!(o instanceof Ri))throw new Error("Expected a list of style instances");s[r]=o}return s}if("style"in n){const s=new Array(e);for(let r=0;r<e;++r){const o=t[r];if(!("style"in o))throw new Error("Expected a list of rules with a style property");s[r]=o}return pk(s)}return cm(t)}class Rk extends md{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,n){pe()}calculateMatrices2D(e){const n=e.viewState,i=e.coordinateToPixelTransform,s=e.pixelToCoordinateTransform;Li(i,e.size[0]/2,e.size[1]/2,1/n.resolution,-1/n.resolution,-n.rotation,-n.center[0],-n.center[1]),R_(s,i)}forEachFeatureAtCoordinate(e,n,i,s,r,o,a,l){let c;const u=n.viewState;function h(b,E,P,k){return r.call(o,E,b?P:null,k)}const d=u.projection,f=b_(e.slice(),d),g=[[0,0]];if(d.canWrapX()&&s){const b=d.getExtent(),E=ze(b);g.push([-E,0],[E,0])}const m=n.layerStatesArray,p=m.length,_=[],y=[];for(let b=0;b<g.length;b++)for(let E=p-1;E>=0;--E){const P=m[E],k=P.layer;if(k.hasRenderer()&&zd(P,u)&&a.call(l,k)){const R=k.getRenderer(),C=k.getSource();if(R&&C){const V=C.getWrapX()?f:e,W=h.bind(null,P.managed);y[0]=V[0]+g[b][0],y[1]=V[1]+g[b][1],c=R.forEachFeatureAtCoordinate(y,n,i,W,_)}if(c)return c}}if(_.length===0)return;const w=1/_.length;return _.forEach((b,E)=>b.distanceSq+=E*w),_.sort((b,E)=>b.distanceSq-E.distanceSq),_.some(b=>c=b.callback(b.feature,b.layer,b.geometry)),c}hasFeatureAtCoordinate(e,n,i,s,r,o){return this.forEachFeatureAtCoordinate(e,n,i,s,ta,this,r,o)!==void 0}getMap(){return this.map_}renderFrame(e){pe()}scheduleExpireIconCache(e){Qn.canExpireCache()&&e.postRenderFunctions.push(Ak)}}function Ak(t,e){Qn.expire()}class uy extends Fi{constructor(e,n,i,s){super(e),this.inversePixelTransform=n,this.frameState=i,this.context=s}}class Ik extends Rk{constructor(e){super(e),this.fontChangeListenerKey_=Fe(vi,Nr.PROPERTYCHANGE,e.redrawText.bind(e)),this.element_=document.createElement("div");const n=this.element_.style;n.position="absolute",n.width="100%",n.height="100%",n.zIndex="0",this.element_.className=Dc+" ol-layers";const i=e.getViewport();i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,n){const i=this.getMap();if(i.hasListener(e)){const s=new uy(e,void 0,n);i.dispatchEvent(s)}}disposeInternal(){rt(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(Cn.PRECOMPOSE,e);const n=e.layerStatesArray.sort(function(a,l){return a.zIndex-l.zIndex});n.some(a=>a.layer instanceof cy&&a.layer.getDeclutter())&&(e.declutter={});const s=e.viewState;this.children_.length=0;const r=[];let o=null;for(let a=0,l=n.length;a<l;++a){const c=n[a];e.layerIndex=a;const u=c.layer,h=u.getSourceState();if(!zd(c,s)||h!="ready"&&h!="undefined"){u.unrender();continue}const d=u.render(e,o);d&&(d!==o&&(this.children_.push(d),o=d),r.push(c))}this.declutter(e,r),PC(this.element_,this.children_),this.dispatchRenderEvent(Cn.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}declutter(e,n){if(e.declutter){for(let i=n.length-1;i>=0;--i){const s=n[i],r=s.layer;r.getDeclutter()&&r.renderDeclutter(e,s)}n.forEach(i=>i.layer.renderDeferred(e))}}}class Xi extends Fi{constructor(e,n){super(e),this.layer=n}}const wu={LAYERS:"layers"};class eo extends d_{constructor(e){e=e||{};const n=Object.assign({},e);delete n.layers;let i=e.layers;super(n),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(wu.LAYERS,this.handleLayersChanged_),i?Array.isArray(i)?i=new Jn(i.slice(),{unique:!0}):Ne(typeof i.getArray=="function","Expected `layers` to be an array or a `Collection`"):i=new Jn(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(rt),this.layersListenerKeys_.length=0;const e=this.getLayers();this.layersListenerKeys_.push(Fe(e,tn.ADD,this.handleLayersAdd_,this),Fe(e,tn.REMOVE,this.handleLayersRemove_,this));for(const i in this.listenerKeys_)this.listenerKeys_[i].forEach(rt);Ma(this.listenerKeys_);const n=e.getArray();for(let i=0,s=n.length;i<s;i++){const r=n[i];this.registerLayerListeners_(r),this.dispatchEvent(new Xi("addlayer",r))}this.changed()}registerLayerListeners_(e){const n=[Fe(e,Nr.PROPERTYCHANGE,this.handleLayerChange_,this),Fe(e,Se.CHANGE,this.handleLayerChange_,this)];e instanceof eo&&n.push(Fe(e,"addlayer",this.handleLayerGroupAdd_,this),Fe(e,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[qe(e)]=n}handleLayerGroupAdd_(e){this.dispatchEvent(new Xi("addlayer",e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new Xi("removelayer",e.layer))}handleLayersAdd_(e){const n=e.element;this.registerLayerListeners_(n),this.dispatchEvent(new Xi("addlayer",n)),this.changed()}handleLayersRemove_(e){const n=e.element,i=qe(n);this.listenerKeys_[i].forEach(rt),delete this.listenerKeys_[i],this.dispatchEvent(new Xi("removelayer",n)),this.changed()}getLayers(){return this.get(wu.LAYERS)}setLayers(e){const n=this.getLayers();if(n){const i=n.getArray();for(let s=0,r=i.length;s<r;++s)this.dispatchEvent(new Xi("removelayer",i[s]))}this.set(wu.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(n){n.getLayersArray(e)}),e}getLayerStatesArray(e){const n=e!==void 0?e:[],i=n.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(n)});const s=this.getLayerState();let r=s.zIndex;!e&&s.zIndex===void 0&&(r=0);for(let o=i,a=n.length;o<a;o++){const l=n[o];l.opacity*=s.opacity,l.visible=l.visible&&s.visible,l.maxResolution=Math.min(l.maxResolution,s.maxResolution),l.minResolution=Math.max(l.minResolution,s.minResolution),l.minZoom=Math.max(l.minZoom,s.minZoom),l.maxZoom=Math.min(l.maxZoom,s.maxZoom),s.extent!==void 0&&(l.extent!==void 0?l.extent=Go(l.extent,s.extent):l.extent=s.extent),l.zIndex===void 0&&(l.zIndex=r)}return n}getSourceState(){return"ready"}}class cr extends Fi{constructor(e,n,i){super(e),this.map=n,this.frameState=i!==void 0?i:null}}class Ki extends cr{constructor(e,n,i,s,r,o){super(e,n,r),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=s!==void 0?s:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const ht={SINGLECLICK:"singleclick",CLICK:Se.CLICK,DBLCLICK:Se.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"},yh={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown"};class Lk extends Cc{constructor(e,n){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=n===void 0?1:n,this.down_=null;const i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=Fe(i,yh.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=Fe(i,yh.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(Se.TOUCHMOVE,this.boundHandleTouchMove_,X_?{passive:!1}:!1)}emulateClick_(e){let n=new Ki(ht.CLICK,this.map_,e);this.dispatchEvent(n),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,n=new Ki(ht.DBLCLICK,this.map_,e),this.dispatchEvent(n)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const i=new Ki(ht.SINGLECLICK,this.map_,e);this.dispatchEvent(i)},250)}updateActivePointers_(e){const n=e,i=n.pointerId;if(n.type==ht.POINTERUP||n.type==ht.POINTERCANCEL){delete this.trackedTouches_[i];for(const s in this.trackedTouches_)if(this.trackedTouches_[s].target!==n.target){delete this.trackedTouches_[s];break}}else(n.type==ht.POINTERDOWN||n.type==ht.POINTERMOVE)&&(this.trackedTouches_[i]=n);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);const n=new Ki(ht.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(n),this.emulateClicks_&&!n.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(rt),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);const n=new Ki(ht.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(n),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){const i=this.map_.getOwnerDocument();this.dragListenerKeys_.push(Fe(i,ht.POINTERMOVE,this.handlePointerMove_,this),Fe(i,ht.POINTERUP,this.handlePointerUp_,this),Fe(this.element_,ht.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==i&&this.dragListenerKeys_.push(Fe(this.element_.getRootNode(),ht.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;const n=new Ki(ht.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(n)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;const n=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Ki(ht.POINTERMOVE,this.map_,e,n))}handleTouchMove_(e){const n=this.originalPointerMoveEvent_;(!n||n.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(rt(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(Se.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(rt(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(rt),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const $i={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},Lt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},$l=1/0;class Ok{constructor(e,n){this.priorityFunction_=e,this.keyFunction_=n,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Ma(this.queuedElements_)}dequeue(){const e=this.elements_,n=this.priorities_,i=e[0];e.length==1?(e.length=0,n.length=0):(e[0]=e.pop(),n[0]=n.pop(),this.siftUp_(0));const s=this.keyFunction_(i);return delete this.queuedElements_[s],i}enqueue(e){Ne(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const n=this.priorityFunction_(e);return n!=$l?(this.elements_.push(e),this.priorities_.push(n),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){const n=this.elements_,i=this.priorities_,s=n.length,r=n[e],o=i[e],a=e;for(;e<s>>1;){const l=this.getLeftChildIndex_(e),c=this.getRightChildIndex_(e),u=c<s&&i[c]<i[l]?c:l;n[e]=n[u],i[e]=i[u],e=u}n[e]=r,i[e]=o,this.siftDown_(a,e)}siftDown_(e,n){const i=this.elements_,s=this.priorities_,r=i[n],o=s[n];for(;n>e;){const a=this.getParentIndex_(n);if(s[a]>o)i[n]=i[a],s[n]=s[a],n=a;else break}i[n]=r,s[n]=o}reprioritize(){const e=this.priorityFunction_,n=this.elements_,i=this.priorities_;let s=0;const r=n.length;let o,a,l;for(a=0;a<r;++a)o=n[a],l=e(o),l==$l?delete this.queuedElements_[this.keyFunction_(o)]:(i[s]=l,n[s++]=o);n.length=s,i.length=s,this.heapify_()}}const de={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class Fk extends Ok{constructor(e,n){super(function(i){return e.apply(null,i)},function(i){return i[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=n,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){const n=super.enqueue(e);return n&&e[0].addEventListener(Se.CHANGE,this.boundHandleTileChange_),n}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){const n=e.target,i=n.getState();if(i===de.LOADED||i===de.ERROR||i===de.EMPTY){i!==de.ERROR&&n.removeEventListener(Se.CHANGE,this.boundHandleTileChange_);const s=n.getKey();s in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[s],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,n){let i=0,s,r,o;for(;this.tilesLoading_<e&&i<n&&this.getCount()>0;)r=this.dequeue()[0],o=r.getKey(),s=r.getState(),s===de.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++i,r.load())}}function Nk(t,e,n,i,s){if(!t||!(n in t.wantedTiles)||!t.wantedTiles[n][e.getKey()])return $l;const r=t.viewState.center,o=i[0]-r[0],a=i[1]-r[1];return 65536*Math.log(s)+Math.sqrt(o*o+a*a)/s}class qd extends li{constructor(e){super();const n=e.element;n&&!e.target&&!n.style.pointerEvents&&(n.style.pointerEvents="auto"),this.element=n||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){fh(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&fh(this.element);for(let n=0,i=this.listenerKeys.length;n<i;++n)rt(this.listenerKeys[n]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==Dr&&this.listenerKeys.push(Fe(e,$i.POSTRENDER,this.render,this)),e.render())}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}}class Dk extends qd{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const n=e.className!==void 0?e.className:"ol-attribution",i=e.tipLabel!==void 0?e.tipLabel:"Attributions",s=e.expandClassName!==void 0?e.expandClassName:n+"-expand",r=e.collapseLabel!==void 0?e.collapseLabel:"›",o=e.collapseClassName!==void 0?e.collapseClassName:n+"-collapse";typeof r=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=r,this.collapseLabel_.className=o):this.collapseLabel_=r;const a=e.label!==void 0?e.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=s):this.label_=a;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(Se.CLICK,this.handleClick_.bind(this),!1);const c=n+" "+Dc+" "+Ud+(this.collapsed_&&this.collapsible_?" "+im:"")+(this.collapsible_?"":" ol-uncollapsible"),u=this.element;u.className=c,u.appendChild(this.toggleButton_),u.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){const n=Array.from(new Set(this.getMap().getAllLayers().flatMap(s=>s.getAttributions(e)))),i=!this.getMap().getAllLayers().some(s=>s.getSource()&&s.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(i),n}async updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const n=await Promise.all(this.collectSourceAttributions_(e).map(s=>o2(()=>s))),i=n.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!ms(n,this.renderedAttributions_)){kC(this.ulElement_);for(let s=0,r=n.length;s<r;++s){const o=document.createElement("li");o.innerHTML=n[s],this.ulElement_.appendChild(o)}this.renderedAttributions_=n}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(im),this.collapsed_?nm(this.collapseLabel_,this.label_):nm(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}}class Gk extends qd{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});const n=e.className!==void 0?e.className:"ol-rotate",i=e.label!==void 0?e.label:"⇧",s=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof i=="string"?(this.label_=document.createElement("span"),this.label_.className=s,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(s));const r=e.tipLabel?e.tipLabel:"Reset rotation",o=document.createElement("button");o.className=n+"-reset",o.setAttribute("type","button"),o.title=r,o.appendChild(this.label_),o.addEventListener(Se.CLICK,this.handleClick_.bind(this),!1);const a=n+" "+Dc+" "+Ud,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(nl)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const n=this.getMap().getView();if(!n)return;const i=n.getRotation();i!==void 0&&(this.duration_>0&&i%(2*Math.PI)!==0?n.animate({rotation:0,duration:this.duration_,easing:Jr}):n.setRotation(0))}render(e){const n=e.frameState;if(!n)return;const i=n.viewState.rotation;if(i!=this.rotation_){const s="rotate("+i+"rad)";if(this.autoHide_){const r=this.element.classList.contains(nl);!r&&i===0?this.element.classList.add(nl):r&&i!==0&&this.element.classList.remove(nl)}this.label_.style.transform=s}this.rotation_=i}}class zk extends qd{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});const n=e.className!==void 0?e.className:"ol-zoom",i=e.delta!==void 0?e.delta:1,s=e.zoomInClassName!==void 0?e.zoomInClassName:n+"-in",r=e.zoomOutClassName!==void 0?e.zoomOutClassName:n+"-out",o=e.zoomInLabel!==void 0?e.zoomInLabel:"+",a=e.zoomOutLabel!==void 0?e.zoomOutLabel:"–",l=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",c=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=l,u.appendChild(typeof o=="string"?document.createTextNode(o):o),u.addEventListener(Se.CLICK,this.handleClick_.bind(this,i),!1);const h=document.createElement("button");h.className=r,h.setAttribute("type","button"),h.title=c,h.appendChild(typeof a=="string"?document.createTextNode(a):a),h.addEventListener(Se.CLICK,this.handleClick_.bind(this,-i),!1);const d=n+" "+Dc+" "+Ud,f=this.element;f.className=d,f.appendChild(u),f.appendChild(h),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,n){n.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){const i=this.getMap().getView();if(!i)return;const s=i.getZoom();if(s!==void 0){const r=i.getConstrainedZoom(s+e);this.duration_>0?(i.getAnimating()&&i.cancelAnimations(),i.animate({zoom:r,duration:this.duration_,easing:Jr})):i.setZoom(r)}}}function Bk(t){t=t||{};const e=new Jn;return(t.zoom!==void 0?t.zoom:!0)&&e.push(new zk(t.zoomOptions)),(t.rotate!==void 0?t.rotate:!0)&&e.push(new Gk(t.rotateOptions)),(t.attribution!==void 0?t.attribution:!0)&&e.push(new Dk(t.attributionOptions)),e}const gm={ACTIVE:"active"};class Ra extends li{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(gm.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(gm.ACTIVE,e)}setMap(e){this.map_=e}}function jk(t,e,n){const i=t.getCenterInternal();if(i){const s=[i[0]+e[0],i[1]+e[1]];t.animateInternal({duration:n!==void 0?n:250,easing:B2,center:t.getConstrainedCenter(s)})}}function Hd(t,e,n,i){const s=t.getZoom();if(s===void 0)return;const r=t.getConstrainedZoom(s+e),o=t.getResolutionForZoom(r);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:o,anchor:n,duration:i!==void 0?i:250,easing:Jr})}class Wk extends Ra{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let n=!1;if(e.type==ht.DBLCLICK){const i=e.originalEvent,s=e.map,r=e.coordinate,o=i.shiftKey?-this.delta_:this.delta_,a=s.getView();Hd(a,o,r,this.duration_),i.preventDefault(),n=!0}return!n}}class Aa extends Ra{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let n=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==ht.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==ht.POINTERUP){const i=this.handleUpEvent(e);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(e.type==ht.POINTERDOWN){const i=this.handleDownEvent(e);this.handlingDownUpSequence=i,n=this.stopDown(i)}else e.type==ht.POINTERMOVE&&this.handleMoveEvent(e);return!n}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}}function Zd(t){const e=t.length;let n=0,i=0;for(let s=0;s<e;s++)n+=t[s].clientX,i+=t[s].clientY;return{clientX:n/e,clientY:i/e}}function vh(t){const e=arguments;return function(n){let i=!0;for(let s=0,r=e.length;s<r&&(i=i&&e[s](n),!!i);++s);return i}}const Vk=function(t){const e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Uk=function(t){const e=t.map.getTargetElement(),n=t.map.getOwnerDocument().activeElement;return e.contains(n)},hy=function(t){return t.map.getTargetElement().hasAttribute("tabindex")?Uk(t):!0},Kk=ta,dy=function(t){const e=t.originalEvent;return e.button==0&&!(CC&&$_&&e.ctrlKey)},fy=function(t){const e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},$k=function(t){const e=t.originalEvent;return $_?e.metaKey:e.ctrlKey},qk=function(t){const e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},gy=function(t){const e=t.originalEvent,n=e.target.tagName;return n!=="INPUT"&&n!=="SELECT"&&n!=="TEXTAREA"&&!e.target.isContentEditable},Su=function(t){const e=t.originalEvent;return Ne(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.pointerType=="mouse"},Hk=function(t){const e=t.originalEvent;return Ne(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&e.button===0};class Zk extends Aa{constructor(e){super({stopDown:xc}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const n=e.condition?e.condition:vh(fy,Hk);this.condition_=e.onFocusOnly?vh(hy,n):n,this.noKinetic_=!1}handleDragEvent(e){const n=e.map;this.panning_||(this.panning_=!0,n.getView().beginInteraction());const i=this.targetPointers,s=n.getEventPixel(Zd(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(s[0],s[1]),this.lastCentroid){const r=[this.lastCentroid[0]-s[0],s[1]-this.lastCentroid[1]],a=e.map.getView();k2(r,a.getResolution()),bd(r,a.getRotation()),a.adjustCenterInternal(r)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=s,this.lastPointersCount_=i.length,e.originalEvent.preventDefault()}handleUpEvent(e){const n=e.map,i=n.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const s=this.kinetic_.getDistance(),r=this.kinetic_.getAngle(),o=i.getCenterInternal(),a=n.getPixelFromCoordinateInternal(o),l=n.getCoordinateFromPixelInternal([a[0]-s*Math.cos(r),a[1]-s*Math.sin(r)]);i.animateInternal({center:i.getConstrainedCenter(l),duration:500,easing:Jr})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){const i=e.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}class Xk extends Aa{constructor(e){e=e||{},super({stopDown:xc}),this.condition_=e.condition?e.condition:Vk,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!Su(e))return;const n=e.map,i=n.getView();if(i.getConstraints().rotation===Pd)return;const s=n.getSize(),r=e.pixel,o=Math.atan2(s[1]/2-r[1],r[0]-s[0]/2);if(this.lastAngle_!==void 0){const a=o-this.lastAngle_;i.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(e){return Su(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return Su(e)&&dy(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}class Yk extends md{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const e=this.startPixel_,n=this.endPixel_,i="px",s=this.element_.style;s.left=Math.min(e[0],n[0])+i,s.top=Math.min(e[1],n[1])+i,s.width=Math.abs(n[0]-e[0])+i,s.height=Math.abs(n[1]-e[1])+i}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const n=this.element_.style;n.left="inherit",n.top="inherit",n.width="inherit",n.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,n){this.startPixel_=e,this.endPixel_=n,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;const e=this.startPixel_,n=this.endPixel_,s=[e,[e[0],n[1]],n,[n[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);s[4]=s[0].slice(),this.geometry_?this.geometry_.setCoordinates([s]):this.geometry_=new oi([s])}getGeometry(){return this.geometry_}}const _o={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class il extends Fi{constructor(e,n,i){super(e),this.coordinate=n,this.mapBrowserEvent=i}}class Jk extends Aa{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.box_=new Yk(e.className||"ol-dragbox"),this.minArea_=e.minArea!==void 0?e.minArea:64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition?e.condition:dy,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(e,n,i){const s=i[0]-n[0],r=i[1]-n[1];return s*s+r*r>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.startPixel_&&(this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new il(_o.BOXDRAG,e.coordinate,e)))}handleUpEvent(e){if(!this.startPixel_)return!1;this.box_.setMap(null);const n=this.boxEndCondition_(e,this.startPixel_,e.pixel);return n&&this.onBoxEnd(e),this.dispatchEvent(new il(n?_o.BOXEND:_o.BOXCANCEL,e.coordinate,e)),!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new il(_o.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}setActive(e){e||(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new il(_o.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setActive(e)}}class Qk extends Jk{constructor(e){e=e||{};const n=e.condition?e.condition:qk;super({condition:n,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){const i=this.getMap().getView();let s=this.getGeometry();if(this.out_){const r=i.rotatedExtentForGeometry(s),o=i.getResolutionForExtentInternal(r),a=i.getResolution()/o;s=s.clone(),s.scale(a*a)}i.fitInternal(s,{duration:this.duration_,easing:Jr})}}const Es={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class eP extends Ra{constructor(e){super(),e=e||{},this.defaultCondition_=function(n){return fy(n)&&gy(n)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let n=!1;if(e.type==Se.KEYDOWN){const i=e.originalEvent,s=i.key;if(this.condition_(e)&&(s==Es.DOWN||s==Es.LEFT||s==Es.RIGHT||s==Es.UP)){const o=e.map.getView(),a=o.getResolution()*this.pixelDelta_;let l=0,c=0;s==Es.DOWN?c=-a:s==Es.LEFT?l=-a:s==Es.RIGHT?l=a:c=a;const u=[l,c];bd(u,o.getRotation()),jk(o,u,this.duration_),i.preventDefault(),n=!0}}return!n}}class tP extends Ra{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(n){return!$k(n)&&gy(n)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let n=!1;if(e.type==Se.KEYDOWN||e.type==Se.KEYPRESS){const i=e.originalEvent,s=i.key;if(this.condition_(e)&&(s==="+"||s==="-")){const r=e.map,o=s==="+"?this.delta_:-this.delta_,a=r.getView();Hd(a,o,void 0,this.duration_),i.preventDefault(),n=!0}}return!n}}class nP{constructor(e,n,i){this.decay_=e,this.minVelocity_=n,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,n){this.points_.push(e,n,Date.now())}end(){if(this.points_.length<6)return!1;const e=Date.now()-this.delay_,n=this.points_.length-3;if(this.points_[n+2]<e)return!1;let i=n-3;for(;i>0&&this.points_[i+2]>e;)i-=3;const s=this.points_[n+2]-this.points_[i+2];if(s<1e3/60)return!1;const r=this.points_[n]-this.points_[i],o=this.points_[n+1]-this.points_[i+1];return this.angle_=Math.atan2(o,r),this.initialVelocity_=Math.sqrt(r*r+o*o)/s,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}class iP extends Ra{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;const n=e.condition?e.condition:Kk;this.condition_=e.onFocusOnly?vh(hy,n):n,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const e=this.getMap();if(!e)return;e.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(e){if(!this.condition_(e)||e.type!==Se.WHEEL)return!0;const i=e.map,s=e.originalEvent;s.preventDefault(),this.useAnchor_&&(this.lastAnchor_=e.coordinate);let r;if(e.type==Se.WHEEL&&(r=s.deltaY,MC&&s.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(r/=q_),s.deltaMode===WheelEvent.DOM_DELTA_LINE&&(r*=40)),r===0)return!1;this.lastDelta_=r;const o=Date.now();this.startTime_===void 0&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(r)<4?"trackpad":"wheel");const a=i.getView();if(this.mode_==="trackpad"&&!(a.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(a.getAnimating()&&a.cancelAnimations(),a.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),a.adjustZoom(-r/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=o,!1;this.totalDelta_+=r;const l=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),l),!1}handleWheelZoom_(e){const n=e.getView();n.getAnimating()&&n.cancelAnimations();let i=-mt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(n.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),Hd(n,i,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}}class sP extends Aa{constructor(e){e=e||{};const n=e;n.stopDown||(n.stopDown=xc),super(n),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let n=0;const i=this.targetPointers[0],s=this.targetPointers[1],r=Math.atan2(s.clientY-i.clientY,s.clientX-i.clientX);if(this.lastAngle_!==void 0){const l=r-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),n=l}this.lastAngle_=r;const o=e.map,a=o.getView();a.getConstraints().rotation!==Pd&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(Zd(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(n,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){const n=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||n.getView().beginInteraction(),!0}return!1}}class rP extends Aa{constructor(e){e=e||{};const n=e;n.stopDown||(n.stopDown=xc),super(n),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let n=1;const i=this.targetPointers[0],s=this.targetPointers[1],r=i.clientX-s.clientX,o=i.clientY-s.clientY,a=Math.sqrt(r*r+o*o);this.lastDistance_!==void 0&&(n=this.lastDistance_/a),this.lastDistance_=a;const l=e.map,c=l.getView();n!=1&&(this.lastScaleDelta_=n),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(Zd(this.targetPointers))),l.render(),c.adjustResolutionInternal(n,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){const i=e.map.getView(),s=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,s),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){const n=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||n.getView().beginInteraction(),!0}return!1}}function oP(t){t=t||{};const e=new Jn,n=new nP(-.005,.05,100);return(t.altShiftDragRotate!==void 0?t.altShiftDragRotate:!0)&&e.push(new Xk),(t.doubleClickZoom!==void 0?t.doubleClickZoom:!0)&&e.push(new Wk({delta:t.zoomDelta,duration:t.zoomDuration})),(t.dragPan!==void 0?t.dragPan:!0)&&e.push(new Zk({onFocusOnly:t.onFocusOnly,kinetic:n})),(t.pinchRotate!==void 0?t.pinchRotate:!0)&&e.push(new sP),(t.pinchZoom!==void 0?t.pinchZoom:!0)&&e.push(new rP({duration:t.zoomDuration})),(t.keyboard!==void 0?t.keyboard:!0)&&(e.push(new eP),e.push(new tP({delta:t.zoomDelta,duration:t.zoomDuration}))),(t.mouseWheelZoom!==void 0?t.mouseWheelZoom:!0)&&e.push(new iP({onFocusOnly:t.onFocusOnly,duration:t.zoomDuration})),(t.shiftDragZoom!==void 0?t.shiftDragZoom:!0)&&e.push(new Qk({duration:t.zoomDuration})),e}function my(t){if(t instanceof Oc){t.setMapInternal(null);return}t instanceof eo&&t.getLayers().forEach(my)}function py(t,e){if(t instanceof Oc){t.setMapInternal(e);return}if(t instanceof eo){const n=t.getLayers().getArray();for(let i=0,s=n.length;i<s;++i)py(n[i],e)}}let aP=class extends li{constructor(e){super(),e=e||{},this.on,this.once,this.un;const n=lP(e);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:q_,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=Nn(),this.pixelToCoordinateTransform_=Nn(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=n.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=n.controls||Bk(),this.interactions=n.interactions||oP({onFocusOnly:!0}),this.overlays_=n.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Fk(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Lt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Lt.VIEW,this.handleViewChanged_),this.addChangeListener(Lt.SIZE,this.handleSizeChanged_),this.addChangeListener(Lt.TARGET,this.handleTargetChanged_),this.setProperties(n.values);const i=this;e.view&&!(e.view instanceof Hn)&&e.view.then(function(s){i.setView(new Hn(s))}),this.controls.addEventListener(tn.ADD,s=>{s.element.setMap(this)}),this.controls.addEventListener(tn.REMOVE,s=>{s.element.setMap(null)}),this.interactions.addEventListener(tn.ADD,s=>{s.element.setMap(this)}),this.interactions.addEventListener(tn.REMOVE,s=>{s.element.setMap(null)}),this.overlays_.addEventListener(tn.ADD,s=>{this.addOverlayInternal_(s.element)}),this.overlays_.addEventListener(tn.REMOVE,s=>{const r=s.element.getId();r!==void 0&&delete this.overlayIdIndex_[r.toString()],s.element.setMap(null)}),this.controls.forEach(s=>{s.setMap(this)}),this.interactions.forEach(s=>{s.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){py(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){const n=e.getId();n!==void 0&&(this.overlayIdIndex_[n.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,n,i){if(!this.frameState_||!this.renderer_)return;const s=this.getCoordinateFromPixelInternal(e);i=i!==void 0?i:{};const r=i.hitTolerance!==void 0?i.hitTolerance:0,o=i.layerFilter!==void 0?i.layerFilter:ta,a=i.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(s,this.frameState_,r,a,n,null,o,null)}getFeaturesAtPixel(e,n){const i=[];return this.forEachFeatureAtPixel(e,function(s){i.push(s)},n),i}getAllLayers(){const e=[];function n(i){i.forEach(function(s){s instanceof eo?n(s.getLayers()):e.push(s)})}return n(this.getLayers()),e}hasFeatureAtPixel(e,n){if(!this.frameState_||!this.renderer_)return!1;const i=this.getCoordinateFromPixelInternal(e);n=n!==void 0?n:{};const s=n.layerFilter!==void 0?n.layerFilter:ta,r=n.hitTolerance!==void 0?n.hitTolerance:0,o=n.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,r,o,s,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){const i=this.viewport_.getBoundingClientRect(),s=this.getSize(),r=i.width/s[0],o=i.height/s[1],a="changedTouches"in e?e.changedTouches[0]:e;return[(a.clientX-i.left)/r,(a.clientY-i.top)/o]}getTarget(){return this.get(Lt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return ch(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){const n=this.frameState_;return n?Ct(n.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){const n=this.overlayIdIndex_[e.toString()];return n!==void 0?n:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Lt.LAYERGROUP)}setLayers(e){const n=this.getLayerGroup();if(e instanceof Jn){n.setLayers(e);return}const i=n.getLayers();i.clear(),i.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const e=this.getLayerGroup().getLayerStatesArray();for(let n=0,i=e.length;n<i;++n){const s=e[n];if(!s.visible)continue;const r=s.layer.getRenderer();if(r&&!r.ready)return!0;const o=s.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(e){const n=yi(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(n)}getPixelFromCoordinateInternal(e){const n=this.frameState_;return n?Ct(n.coordinateToPixelTransform,e.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(Lt.SIZE)}getView(){return this.get(Lt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,n,i,s){return Nk(this.frameState_,e,n,i,s)}handleBrowserEvent(e,n){n=n||e.type;const i=new Ki(n,this,e);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(e){if(!this.frameState_)return;const n=e.originalEvent,i=n.type;if(i===yh.POINTERDOWN||i===Se.WHEEL||i===Se.KEYDOWN){const s=this.getOwnerDocument(),r=this.viewport_.getRootNode?this.viewport_.getRootNode():s,o=n.target;if(this.overlayContainerStopEvent_.contains(o)||!(r===s?s.documentElement:r).contains(o))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){const s=this.getInteractions().getArray().slice();for(let r=s.length-1;r>=0;r--){const o=s[r];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){const e=this.frameState_,n=this.tileQueue_;if(!n.isEmpty()){let s=this.maxTilesLoading_,r=s;if(e){const o=e.viewHints;if(o[Ot.ANIMATING]||o[Ot.INTERACTING]){const a=Date.now()-e.time>8;s=a?0:8,r=a?0:2}}n.getTilesLoading()<s&&(n.reprioritize(),n.loadMoreTiles(s,r))}e&&this.renderer_&&!e.animate&&(this.renderComplete_===!0?(this.hasListener(Cn.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Cn.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new cr($i.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new cr($i.LOADSTART,this,e))));const i=this.postRenderFunctions_;for(let s=0,r=i.length;s<r;++s)i[s](this,e);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let i=0,s=this.targetChangeHandlerKeys_.length;i<s;++i)rt(this.targetChangeHandlerKeys_[i]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(Se.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(Se.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,fh(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const i=this.targetElement_.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.unobserve(i.host),this.setSize(void 0)}const e=this.getTarget(),n=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=n,!n)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{n.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Ik(this)),this.mapBrowserEventHandler_=new Lk(this,this.moveTolerance_);for(const r in ht)this.mapBrowserEventHandler_.addEventListener(ht[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(Se.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(Se.WHEEL,this.boundHandleBrowserEvent_,X_?{passive:!1}:!1);const i=this.keyboardEventTarget_?this.keyboardEventTarget_:n;this.targetChangeHandlerKeys_=[Fe(i,Se.KEYDOWN,this.handleBrowserEvent,this),Fe(i,Se.KEYPRESS,this.handleBrowserEvent,this)];const s=n.getRootNode();s instanceof ShadowRoot&&this.resizeObserver_.observe(s.host),this.resizeObserver_.observe(n)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(rt(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(rt(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=Fe(e,Nr.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Fe(e,Se.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(rt),this.layerGroupPropertyListenerKeys_=null);const e=this.getLayerGroup();e&&(this.handleLayerAdd_(new Xi("addlayer",e)),this.layerGroupPropertyListenerKeys_=[Fe(e,Nr.PROPERTYCHANGE,this.render,this),Fe(e,Se.CHANGE,this.render,this),Fe(e,"addlayer",this.handleLayerAdd_,this),Fe(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const e=this.getLayerGroup().getLayerStatesArray();for(let n=0,i=e.length;n<i;++n){const s=e[n].layer;s.hasRenderer()&&s.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){my(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){const n=this.getSize(),i=this.getView(),s=this.frameState_;let r=null;if(n!==void 0&&Jg(n)&&i&&i.isDef()){const o=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=i.getState();if(r={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:rh(a.center,a.resolution,a.rotation,n),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:n,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:qe(this),renderTargets:{}},a.nextCenter&&a.nextResolution){const l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;r.nextExtent=rh(a.nextCenter,a.nextResolution,l,n)}}this.frameState_=r,this.renderer_.renderFrame(r),r&&(r.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,r.postRenderFunctions),s&&(!this.previousExtent_||!ka(this.previousExtent_)&&!ia(r.extent,this.previousExtent_))&&(this.dispatchEvent(new cr($i.MOVESTART,this,s)),this.previousExtent_=Yr(this.previousExtent_)),this.previousExtent_&&!r.viewHints[Ot.ANIMATING]&&!r.viewHints[Ot.INTERACTING]&&!ia(r.extent,this.previousExtent_)&&(this.dispatchEvent(new cr($i.MOVEEND,this,r)),g_(r.extent,this.previousExtent_))),this.dispatchEvent(new cr($i.POSTRENDER,this,r)),this.renderComplete_=this.hasListener($i.LOADSTART)||this.hasListener($i.LOADEND)||this.hasListener(Cn.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){const n=this.getLayerGroup();n&&this.handleLayerRemove_(new Xi("removelayer",n)),this.set(Lt.LAYERGROUP,e)}setSize(e){this.set(Lt.SIZE,e)}setTarget(e){this.set(Lt.TARGET,e)}setView(e){if(!e||e instanceof Hn){this.set(Lt.VIEW,e);return}this.set(Lt.VIEW,new Hn);const n=this;e.then(function(i){n.setView(new Hn(i))})}updateSize(){const e=this.getTargetElement();let n;if(e){const s=getComputedStyle(e),r=e.offsetWidth-parseFloat(s.borderLeftWidth)-parseFloat(s.paddingLeft)-parseFloat(s.paddingRight)-parseFloat(s.borderRightWidth),o=e.offsetHeight-parseFloat(s.borderTopWidth)-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom)-parseFloat(s.borderBottomWidth);!isNaN(r)&&!isNaN(o)&&(n=[r,o],!Jg(n)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&M_("No map visible because the map container's width or height are 0."))}const i=this.getSize();n&&(!i||!ms(n,i))&&(this.setSize(n),this.updateViewportSize_(n))}updateViewportSize_(e){const n=this.getView();n&&n.setViewportSize(e)}};function lP(t){let e=null;t.keyboardEventTarget!==void 0&&(e=typeof t.keyboardEventTarget=="string"?document.getElementById(t.keyboardEventTarget):t.keyboardEventTarget);const n={},i=t.layers&&typeof t.layers.getLayers=="function"?t.layers:new eo({layers:t.layers});n[Lt.LAYERGROUP]=i,n[Lt.TARGET]=t.target,n[Lt.VIEW]=t.view instanceof Hn?t.view:new Hn;let s;t.controls!==void 0&&(Array.isArray(t.controls)?s=new Jn(t.controls.slice()):(Ne(typeof t.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),s=t.controls));let r;t.interactions!==void 0&&(Array.isArray(t.interactions)?r=new Jn(t.interactions.slice()):(Ne(typeof t.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),r=t.interactions));let o;return t.overlays!==void 0?Array.isArray(t.overlays)?o=new Jn(t.overlays.slice()):(Ne(typeof t.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=t.overlays):o=new Jn,{controls:s,interactions:r,keyboardEventTarget:e,overlays:o,values:n}}const sl={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class cP extends Oc{constructor(e){e=e||{};const n=Object.assign({},e);delete n.preload,delete n.useInterimTilesOnError,super(n),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(sl.PRELOAD)}setPreload(e){this.set(sl.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(sl.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(sl.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}class uP extends xa{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e}getFeatures(e){return pe()}getData(e){return null}prepareFrame(e){return pe()}renderFrame(e,n){return pe()}loadedTileCallback(e,n,i){e[n]||(e[n]={}),e[n][i.tileCoord.toString()]=i}createLoadedTileFinder(e,n,i){return(s,r)=>{const o=this.loadedTileCallback.bind(this,i,s);return e.forEachLoadedTile(n,s,r,o)}}forEachFeatureAtCoordinate(e,n,i,s,r){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){const n=e.target;(n.getState()===Ce.LOADED||n.getState()===Ce.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let n=e.getState();return n!=Ce.LOADED&&n!=Ce.ERROR&&e.addEventListener(Se.CHANGE,this.boundHandleImageChange_),n==Ce.IDLE&&(e.load(),n=e.getState()),n==Ce.LOADED}renderIfReadyAndVisible(){const e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}renderDeferred(e){}disposeInternal(){delete this.layer_,super.disposeInternal()}}class _y{constructor(){tt(this,"pushMethodArgs_",(...e)=>(this.instructions_[this.zIndex+this.offset_].push(e),this));this.instructions_=[],this.zIndex=0,this.offset_=0,this.context_=new Proxy(jl(),{get:(e,n)=>{if(typeof jl()[n]=="function")return this.instructions_[this.zIndex+this.offset_]||(this.instructions_[this.zIndex+this.offset_]=[]),this.instructions_[this.zIndex+this.offset_].push(n),this.pushMethodArgs_},set:(e,n,i)=>(this.instructions_[this.zIndex+this.offset_]||(this.instructions_[this.zIndex+this.offset_]=[]),this.instructions_[this.zIndex+this.offset_].push(n,i),!0)})}pushFunction(e){this.instructions_[this.zIndex+this.offset_].push(e)}getContext(){return this.context_}draw(e){this.instructions_.forEach(n=>{for(let i=0,s=n.length;i<s;++i){const r=n[i];if(typeof r=="function"){r(e);continue}const o=n[++i];if(typeof e[r]=="function")e[r](...o);else{if(typeof o=="function"){e[r]=o(e);continue}e[r]=o}}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}}const mm=[];let ur=null;function hP(){ur=Rt(1,1,void 0,{willReadFrequently:!0})}class yy extends uP{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=Nn(),this.pixelTransform=Nn(),this.inversePixelTransform=Nn(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(e,n,i){ur||hP(),ur.clearRect(0,0,1,1);let s;try{ur.drawImage(e,n,i,1,1,0,0,1,1),s=ur.getImageData(0,0,1,1).data}catch{return ur=null,null}return s}getBackground(e){let i=this.getLayer().getBackground();return typeof i=="function"&&(i=i(e.viewState.resolution)),i||void 0}useContainer(e,n,i){const s=this.getLayer().getClassName();let r,o;if(e&&e.className===s&&(!i||e&&e.style.backgroundColor&&ms(aa(e.style.backgroundColor),aa(i)))){const a=e.firstElementChild;a instanceof HTMLCanvasElement&&(o=a.getContext("2d"))}if(o&&o.canvas.style.transform===n?(this.container=e,this.context=o,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){r=document.createElement("div"),r.className=s;let a=r.style;a.position="absolute",a.width="100%",a.height="100%",o=Rt();const l=o.canvas;r.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=r,this.context=o}!this.containerReused&&i&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=i)}clipUnrotated(e,n,i){const s=$s(i),r=Rc(i),o=Tc(i),a=Pc(i);Ct(n.coordinateToPixelTransform,s),Ct(n.coordinateToPixelTransform,r),Ct(n.coordinateToPixelTransform,o),Ct(n.coordinateToPixelTransform,a);const l=this.inversePixelTransform;Ct(l,s),Ct(l,r),Ct(l,o),Ct(l,a),e.save(),e.beginPath(),e.moveTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.clip()}prepareContainer(e,n){const i=e.extent,s=e.viewState.resolution,r=e.viewState.rotation,o=e.pixelRatio,a=Math.round(ze(i)/s*o),l=Math.round(zt(i)/s*o);Li(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/o,1/o,r,-a/2,-l/2),R_(this.inversePixelTransform,this.pixelTransform);const c=V2(this.pixelTransform);if(this.useContainer(n,c,this.getBackground(e)),!this.containerReused){const u=this.context.canvas;u.width!=a||u.height!=l?(u.width=a,u.height=l):this.context.clearRect(0,0,a,l),c!==u.style.transform&&(u.style.transform=c)}}dispatchRenderEvent_(e,n,i){const s=this.getLayer();if(s.hasListener(e)){const r=new uy(e,this.inversePixelTransform,i,n);s.dispatchEvent(r)}}preRender(e,n){this.frameState=n,!n.declutter&&this.dispatchRenderEvent_(Cn.PRERENDER,e,n)}postRender(e,n){n.declutter||this.dispatchRenderEvent_(Cn.POSTRENDER,e,n)}renderDeferredInternal(e){}getRenderContext(e){return e.declutter&&!this.deferredContext_&&(this.deferredContext_=new _y),e.declutter?this.deferredContext_.getContext():this.context}renderDeferred(e){e.declutter&&(this.dispatchRenderEvent_(Cn.PRERENDER,this.context,e),e.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(e),this.dispatchRenderEvent_(Cn.POSTRENDER,this.context,e))}getRenderTransform(e,n,i,s,r,o,a){const l=r/2,c=o/2,u=s/n,h=-u,d=-e[0]+a,f=-e[1];return Li(this.tempTransform,l,c,u,h,-i,d,f)}disposeInternal(){delete this.frameState,super.disposeInternal()}}class vy extends Cc{constructor(e,n,i){super(),i=i||{},this.tileCoord=e,this.state=n,this.interimTile=null,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(Se.CHANGE)}release(){this.state===de.ERROR&&this.setState(de.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){let e=this.interimTile;if(!e)return this;do{if(e.getState()==de.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this}refreshInterimChain(){let e=this.interimTile;if(!e)return;let n=this;do{if(e.getState()==de.LOADED){e.interimTile=null;break}e.getState()==de.LOADING?n=e:e.getState()==de.IDLE?n.interimTile=e.interimTile:n=e,e=n.interimTile}while(e)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==de.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}load(){pe()}getAlpha(e,n){if(!this.transition_)return 1;let i=this.transitionStarts_[e];if(!i)i=n,this.transitionStarts_[e]=i;else if(i===-1)return 1;const s=n-i+1e3/60;return s>=this.transition_?1:T_(s/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}}class wy extends vy{constructor(e,n,i,s,r,o){super(e,n,o),this.crossOrigin_=s,this.src_=i,this.key=i,this.image_=new Image,s!==null&&(this.image_.crossOrigin=s),this.unlisten_=null,this.tileLoadFunction_=r}getImage(){return this.image_}setImage(e){this.image_=e,this.state=de.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=de.ERROR,this.unlistenImage_(),this.image_=dP(),this.changed()}handleImageLoad_(){const e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=de.LOADED:this.state=de.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==de.ERROR&&(this.state=de.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==de.IDLE&&(this.state=de.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=TC(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function dP(){const t=Rt(1,1);return t.fillStyle="rgba(0,0,0,0)",t.fillRect(0,0,1,1),t.canvas}const fP=.5,gP=10,pm=.25;class mP{constructor(e,n,i,s,r,o){this.sourceProj_=e,this.targetProj_=n;let a={};const l=Br(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){const w=y[0]+"/"+y[1];return a[w]||(a[w]=l(y)),a[w]},this.maxSourceExtent_=s,this.errorThresholdSquared_=r*r,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!s&&!!this.sourceProj_.getExtent()&&ze(s)>=ze(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?ze(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?ze(this.targetProj_.getExtent()):null;const c=$s(i),u=Rc(i),h=Tc(i),d=Pc(i),f=this.transformInv_(c),g=this.transformInv_(u),m=this.transformInv_(h),p=this.transformInv_(d),_=gP+(o?Math.max(0,Math.ceil(Math.log2(sh(i)/(o*o*256*256)))):0);if(this.addQuad_(c,u,h,d,f,g,m,p,_),this.wrapsXInSource_){let y=1/0;this.triangles_.forEach(function(w,b,E){y=Math.min(y,w.source[0][0],w.source[1][0],w.source[2][0])}),this.triangles_.forEach(w=>{if(Math.max(w.source[0][0],w.source[1][0],w.source[2][0])-y>this.sourceWorldWidth_/2){const b=[[w.source[0][0],w.source[0][1]],[w.source[1][0],w.source[1][1]],[w.source[2][0],w.source[2][1]]];b[0][0]-y>this.sourceWorldWidth_/2&&(b[0][0]-=this.sourceWorldWidth_),b[1][0]-y>this.sourceWorldWidth_/2&&(b[1][0]-=this.sourceWorldWidth_),b[2][0]-y>this.sourceWorldWidth_/2&&(b[2][0]-=this.sourceWorldWidth_);const E=Math.min(b[0][0],b[1][0],b[2][0]);Math.max(b[0][0],b[1][0],b[2][0])-E<this.sourceWorldWidth_/2&&(w.source=b)}})}a={}}addTriangle_(e,n,i,s,r,o){this.triangles_.push({source:[s,r,o],target:[e,n,i]})}addQuad_(e,n,i,s,r,o,a,l,c){const u=Dg([r,o,a,l]),h=this.sourceWorldWidth_?ze(u)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&h>.5&&h<1;let g=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const p=Dg([e,n,i,s]);g=ze(p)/this.targetWorldWidth_>pm||g}!f&&this.sourceProj_.isGlobal()&&h&&(g=h>pm||g)}if(!g&&this.maxSourceExtent_&&isFinite(u[0])&&isFinite(u[1])&&isFinite(u[2])&&isFinite(u[3])&&!sn(u,this.maxSourceExtent_))return;let m=0;if(!g&&(!isFinite(r[0])||!isFinite(r[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(c>0)g=!0;else if(m=(!isFinite(r[0])||!isFinite(r[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),m!=1&&m!=2&&m!=4&&m!=8)return}if(c>0){if(!g){const p=[(e[0]+i[0])/2,(e[1]+i[1])/2],_=this.transformInv_(p);let y;f?y=(Fs(r[0],d)+Fs(a[0],d))/2-Fs(_[0],d):y=(r[0]+a[0])/2-_[0];const w=(r[1]+a[1])/2-_[1];g=y*y+w*w>this.errorThresholdSquared_}if(g){if(Math.abs(e[0]-i[0])<=Math.abs(e[1]-i[1])){const p=[(n[0]+i[0])/2,(n[1]+i[1])/2],_=this.transformInv_(p),y=[(s[0]+e[0])/2,(s[1]+e[1])/2],w=this.transformInv_(y);this.addQuad_(e,n,p,y,r,o,_,w,c-1),this.addQuad_(y,p,i,s,w,_,a,l,c-1)}else{const p=[(e[0]+n[0])/2,(e[1]+n[1])/2],_=this.transformInv_(p),y=[(i[0]+s[0])/2,(i[1]+s[1])/2],w=this.transformInv_(y);this.addQuad_(e,p,y,s,r,_,w,l,c-1),this.addQuad_(p,n,i,y,_,o,a,w,c-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}m&11||this.addTriangle_(e,i,s,r,a,l),m&14||this.addTriangle_(e,i,n,r,a,o),m&&(m&13||this.addTriangle_(n,s,e,o,l,r),m&7||this.addTriangle_(n,s,i,o,l,a))}calculateSourceExtent(){const e=vn();return this.triangles_.forEach(function(n,i,s){const r=n.source;Do(e,r[0]),Do(e,r[1]),Do(e,r[2])}),e}getTriangles(){return this.triangles_}}let bu;const kr=[];function _m(t,e,n,i,s){t.beginPath(),t.moveTo(0,0),t.lineTo(e,n),t.lineTo(i,s),t.closePath(),t.save(),t.clip(),t.fillRect(0,0,Math.max(e,i)+1,Math.max(n,s)),t.restore()}function Eu(t,e){return Math.abs(t[e*4]-210)>2||Math.abs(t[e*4+3]-.75*255)>2}function pP(){if(bu===void 0){const t=Rt(6,6,kr);t.globalCompositeOperation="lighter",t.fillStyle="rgba(210, 0, 0, 0.75)",_m(t,4,5,4,0),_m(t,4,5,0,5);const e=t.getImageData(0,0,3,3).data;bu=Eu(e,0)||Eu(e,4)||Eu(e,8),Nc(t),kr.push(t.canvas)}return bu}function wh(t,e,n,i){const s=Ji(n,e,t);let r=zg(e,i,n);const o=e.getMetersPerUnit();o!==void 0&&(r*=o);const a=t.getMetersPerUnit();a!==void 0&&(r/=a);const l=t.getExtent();if(!l||zr(l,s)){const c=zg(t,r,s)/r;isFinite(c)&&c>0&&(r/=c)}return r}function _P(t,e,n,i){const s=us(n);let r=wh(t,e,s,i);return(!isFinite(r)||r<=0)&&y_(n,function(o){return r=wh(t,e,o,i),isFinite(r)&&r>0}),r}function yP(t,e,n,i,s,r,o,a,l,c,u,h,d,f){const g=Rt(Math.round(n*t),Math.round(n*e),kr);if(h||(g.imageSmoothingEnabled=!1),l.length===0)return g.canvas;g.scale(n,n);function m(E){return Math.round(E*n)/n}g.globalCompositeOperation="lighter";const p=vn();l.forEach(function(E,P,k){p_(p,E.extent)});let _;const y=n/i,w=(h?1:1+Math.pow(2,-24))/y;_=Rt(Math.round(ze(p)*y),Math.round(zt(p)*y),kr),h||(_.imageSmoothingEnabled=!1),l.forEach(function(E,P,k){if(E.image.width>0&&E.image.height>0){if(E.clipExtent){_.save();const A=(E.clipExtent[0]-p[0])*y,q=-(E.clipExtent[3]-p[3])*y,ie=ze(E.clipExtent)*y,ce=zt(E.clipExtent)*y;_.rect(h?A:Math.round(A),h?q:Math.round(q),h?ie:Math.round(A+ie)-Math.round(A),h?ce:Math.round(q+ce)-Math.round(q)),_.clip()}const R=(E.extent[0]-p[0])*y,C=-(E.extent[3]-p[3])*y,V=ze(E.extent)*y,W=zt(E.extent)*y;_.drawImage(E.image,c,c,E.image.width-2*c,E.image.height-2*c,h?R:Math.round(R),h?C:Math.round(C),h?V:Math.round(R+V)-Math.round(R),h?W:Math.round(C+W)-Math.round(C)),E.clipExtent&&_.restore()}});const b=$s(o);return a.getTriangles().forEach(function(E,P,k){const R=E.source,C=E.target;let V=R[0][0],W=R[0][1],A=R[1][0],q=R[1][1],ie=R[2][0],ce=R[2][1];const z=m((C[0][0]-b[0])/r),se=m(-(C[0][1]-b[1])/r),ee=m((C[1][0]-b[0])/r),Ie=m(-(C[1][1]-b[1])/r),me=m((C[2][0]-b[0])/r),ye=m(-(C[2][1]-b[1])/r),ge=V,Le=W;V=0,W=0,A-=ge,q-=Le,ie-=ge,ce-=Le;const U=[[A,q,0,0,ee-z],[ie,ce,0,0,me-z],[0,0,A,q,Ie-se],[0,0,ie,ce,ye-se]],ot=u2(U);if(!ot)return;if(g.save(),g.beginPath(),pP()||!h){g.moveTo(ee,Ie);const T=4,J=z-ee,H=se-Ie;for(let te=0;te<T;te++)g.lineTo(ee+m((te+1)*J/T),Ie+m(te*H/(T-1))),te!=T-1&&g.lineTo(ee+m((te+1)*J/T),Ie+m((te+1)*H/(T-1)));g.lineTo(me,ye)}else g.moveTo(ee,Ie),g.lineTo(z,se),g.lineTo(me,ye);g.clip(),g.transform(ot[0],ot[2],ot[1],ot[3],z,se),g.translate(p[0]-ge,p[3]-Le);let He;if(_)He=_.canvas,g.scale(w,-w);else{const T=l[0],J=T.extent;He=T.image,g.scale(ze(J)/He.width,-zt(J)/He.height)}g.drawImage(He,0,0),g.restore()}),_&&(Nc(_),kr.push(_.canvas)),u&&(g.save(),g.globalCompositeOperation="source-over",g.strokeStyle="black",g.lineWidth=1,a.getTriangles().forEach(function(E,P,k){const R=E.target,C=(R[0][0]-b[0])/r,V=-(R[0][1]-b[1])/r,W=(R[1][0]-b[0])/r,A=-(R[1][1]-b[1])/r,q=(R[2][0]-b[0])/r,ie=-(R[2][1]-b[1])/r;g.beginPath(),g.moveTo(W,A),g.lineTo(C,V),g.lineTo(q,ie),g.closePath(),g.stroke()}),g.restore()),g.canvas}class Sh extends vy{constructor(e,n,i,s,r,o,a,l,c,u,h,d){super(r,de.IDLE,d),this.renderEdges_=h!==void 0?h:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=n,this.targetTileGrid_=s,this.wrappedTileCoord_=o||r,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=e.canWrapX()?e.getExtent():void 0;const f=s.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent();let m=this.sourceTileGrid_.getExtent();const p=g?Go(f,g):f;if(sh(p)===0){this.state=de.EMPTY;return}const _=e.getExtent();_&&(m?m=Go(m,_):m=_);const y=s.getResolution(this.wrappedTileCoord_[0]),w=_P(e,i,p,y);if(!isFinite(w)||w<=0){this.state=de.EMPTY;return}const b=u!==void 0?u:fP;if(this.triangulation_=new mP(e,i,p,m,w*b,y),this.triangulation_.getTriangles().length===0){this.state=de.EMPTY;return}this.sourceZ_=n.getZForResolution(w);let E=this.triangulation_.calculateSourceExtent();if(m&&(e.canWrapX()?(E[1]=mt(E[1],m[1],m[3]),E[3]=mt(E[3],m[1],m[3])):E=Go(E,m)),!sh(E))this.state=de.EMPTY;else{let P=0,k=0;e.canWrapX()&&(P=ze(_),k=Math.floor((E[0]-_[0])/P)),w_(E.slice(),e,!0).forEach(C=>{const V=n.getTileRangeForExtentAndZ(C,this.sourceZ_);for(let W=V.minX;W<=V.maxX;W++)for(let A=V.minY;A<=V.maxY;A++){const q=c(this.sourceZ_,W,A,a);if(q){const ie=k*P;this.sourceTiles_.push({tile:q,offset:ie})}}++k}),this.sourceTiles_.length===0&&(this.state=de.EMPTY)}}getImage(){return this.canvas_}reproject_(){const e=[];if(this.sourceTiles_.forEach(n=>{var s;const i=n.tile;if(i&&i.getState()==de.LOADED){const r=this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);r[0]+=n.offset,r[2]+=n.offset;const o=(s=this.clipExtent_)==null?void 0:s.slice();o&&(o[0]+=n.offset,o[2]+=n.offset),e.push({extent:r,clipExtent:o,image:i.getImage()})}}),this.sourceTiles_.length=0,e.length===0)this.state=de.ERROR;else{const n=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(n),s=typeof i=="number"?i:i[0],r=typeof i=="number"?i:i[1],o=this.targetTileGrid_.getResolution(n),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=yP(s,r,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=de.LOADED}this.changed()}load(){if(this.state==de.IDLE){this.state=de.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:n})=>{const i=n.getState();if(i==de.IDLE||i==de.LOADING){e++;const s=Fe(n,Se.CHANGE,function(r){const o=n.getState();(o==de.LOADED||o==de.ERROR||o==de.EMPTY)&&(rt(s),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(s)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:n},i,s){n.getState()==de.IDLE&&n.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(rt),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Nc(this.canvas_.getContext("2d")),kr.push(this.canvas_),this.canvas_=null),super.release()}}class Xd{constructor(e,n,i,s){this.minX=e,this.maxX=n,this.minY=i,this.maxY=s}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,n){return this.minX<=e&&e<=this.maxX&&this.minY<=n&&n<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}}function nr(t,e,n,i,s){return s!==void 0?(s.minX=t,s.maxX=e,s.minY=n,s.maxY=i,s):new Xd(t,e,n,i)}class vP extends yy{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=vn(),this.tmpTileRange_=new Xd(0,0,0,0)}isDrawableTile(e){const n=this.getLayer(),i=e.getState(),s=n.getUseInterimTilesOnError();return i==de.LOADED||i==de.EMPTY||i==de.ERROR&&!s}getTile(e,n,i,s){const r=s.pixelRatio,o=s.viewState.projection,a=this.getLayer();let c=a.getSource().getTile(e,n,i,r,o);return c.getState()==de.ERROR&&a.getUseInterimTilesOnError()&&a.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(c)||(c=c.getInterimTile()),c}getData(e){const n=this.frameState;if(!n)return null;const i=this.getLayer(),s=Ct(n.pixelToCoordinateTransform,e.slice()),r=i.getExtent();if(r&&!zr(r,s))return null;const o=n.pixelRatio,a=n.viewState.projection,l=n.viewState,c=i.getRenderSource(),u=c.getTileGridForProjection(l.projection),h=c.getTilePixelRatio(n.pixelRatio);for(let d=u.getZForResolution(l.resolution);d>=u.getMinZoom();--d){const f=u.getTileCoordForCoordAndZ(s,d),g=c.getTile(d,f[1],f[2],o,a);if(!(g instanceof wy||g instanceof Sh)||g instanceof Sh&&g.getState()===de.EMPTY)return null;if(g.getState()!==de.LOADED)continue;const m=u.getOrigin(d),p=yn(u.getTileSize(d)),_=u.getResolution(d),y=Math.floor(h*((s[0]-m[0])/_-f[1]*p[0])),w=Math.floor(h*((m[1]-s[1])/_-f[2]*p[1])),b=Math.round(h*c.getGutterForProjection(l.projection));return this.getImageData(g.getImage(),y+b,w+b)}return null}loadedTileCallback(e,n,i){return this.isDrawableTile(i)?super.loadedTileCallback(e,n,i):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,n){const i=e.layerStatesArray[e.layerIndex],s=e.viewState,r=s.projection,o=s.resolution,a=s.center,l=s.rotation,c=e.pixelRatio,u=this.getLayer(),h=u.getSource(),d=h.getRevision(),f=h.getTileGridForProjection(r),g=f.getZForResolution(o,h.zDirection),m=f.getResolution(g);let p=e.extent;const _=e.viewState.resolution,y=h.getTilePixelRatio(c);this.prepareContainer(e,n);const w=this.context.canvas.width,b=this.context.canvas.height,E=i.extent&&Ts(i.extent);E&&(p=Go(p,Ts(i.extent)));const P=m*w/2/y,k=m*b/2/y,R=[a[0]-P,a[1]-k,a[0]+P,a[1]+k],C=f.getTileRangeForExtentAndZ(p,g),V={};V[g]={};const W=this.createLoadedTileFinder(h,r,V),A=this.tmpExtent,q=this.tmpTileRange_;this.newTiles_=!1;const ie=l?oh(s.center,_,l,e.size):void 0;for(let ye=C.minX;ye<=C.maxX;++ye)for(let ge=C.minY;ge<=C.maxY;++ge){if(l&&!f.tileCoordIntersectsViewport([g,ye,ge],ie))continue;const Le=this.getTile(g,ye,ge,e);if(this.isDrawableTile(Le)){const He=qe(this);if(Le.getState()==de.LOADED){V[g][Le.tileCoord.toString()]=Le;let T=Le.inTransition(He);T&&i.opacity!==1&&(Le.endTransition(He),T=!1),!this.newTiles_&&(T||!this.renderedTiles.includes(Le))&&(this.newTiles_=!0)}if(Le.getAlpha(He,e.time)===1)continue}const U=f.getTileCoordChildTileRange(Le.tileCoord,q,A);let ot=!1;U&&(ot=W(g+1,U)),ot||f.forEachTileCoordParentTileRange(Le.tileCoord,W,q,A)}const ce=m/o*c/y,z=this.getRenderContext(e);Li(this.tempTransform,w/2,b/2,ce,ce,0,-w/2,-b/2),E&&this.clipUnrotated(z,e,E),h.getInterpolate()||(z.imageSmoothingEnabled=!1),this.preRender(z,e),this.renderedTiles.length=0;let se=Object.keys(V).map(Number);se.sort(ki);let ee,Ie,me;i.opacity===1&&(!this.containerReused||h.getOpaque(e.viewState.projection))?se=se.reverse():(ee=[],Ie=[]);for(let ye=se.length-1;ye>=0;--ye){const ge=se[ye],Le=h.getTilePixelSize(ge,c,r),ot=f.getResolution(ge)/m,He=Le[0]*ot*ce,T=Le[1]*ot*ce,J=f.getTileCoordForCoordAndZ($s(R),ge),H=f.getTileCoordExtent(J),te=Ct(this.tempTransform,[y*(H[0]-R[0])/m,y*(R[3]-H[3])/m]),xe=y*h.getGutterForProjection(r),v=V[ge];for(const M in v){const x=v[M],L=x.tileCoord,N=J[1]-L[1],I=Math.round(te[0]-(N-1)*He),Z=J[2]-L[2],$=Math.round(te[1]-(Z-1)*T),j=Math.round(te[0]-N*He),D=Math.round(te[1]-Z*T),re=I-j,Y=$-D,oe=g===ge,ue=oe&&x.getAlpha(qe(this),e.time)!==1;let be=!1;if(!ue)if(ee){me=[j,D,j+re,D,j+re,D+Y,j,D+Y];for(let Pe=0,ke=ee.length;Pe<ke;++Pe)if(g!==ge&&ge<Ie[Pe]){const De=ee[Pe];sn([j,D,j+re,D+Y],[De[0],De[3],De[4],De[7]])&&(be||(z.save(),be=!0),z.beginPath(),z.moveTo(me[0],me[1]),z.lineTo(me[2],me[3]),z.lineTo(me[4],me[5]),z.lineTo(me[6],me[7]),z.moveTo(De[6],De[7]),z.lineTo(De[4],De[5]),z.lineTo(De[2],De[3]),z.lineTo(De[0],De[1]),z.clip())}ee.push(me),Ie.push(ge)}else z.clearRect(j,D,re,Y);this.drawTileImage(x,e,j,D,re,Y,xe,oe),ee&&!ue?(be&&z.restore(),this.renderedTiles.unshift(x)):this.renderedTiles.push(x),this.updateUsedTiles(e.usedTiles,h,x)}}return this.renderedRevision=d,this.renderedResolution=m,this.extentChanged=!this.renderedExtent_||!ia(this.renderedExtent_,R),this.renderedExtent_=R,this.renderedPixelRatio=c,this.renderedProjection=r,this.manageTilePyramid(e,h,f,c,r,p,g,u.getPreload()),this.scheduleExpireCache(e,h),this.postRender(this.context,e),i.extent&&z.restore(),z.imageSmoothingEnabled=!0,this.container}drawTileImage(e,n,i,s,r,o,a,l){const c=this.getTileImage(e);if(!c)return;const u=this.getRenderContext(n),h=qe(this),d=n.layerStatesArray[n.layerIndex],f=d.opacity*(l?e.getAlpha(h,n.time):1),g=f!==u.globalAlpha;g&&(u.save(),u.globalAlpha=f),u.drawImage(c,a,a,c.width-2*a,c.height-2*a,i,s,r,o),g&&u.restore(),f!==d.opacity?n.animate=!0:l&&e.endTransition(h)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,n){if(n.canExpireCache()){const i=(function(s,r,o){const a=qe(s);a in o.usedTiles&&s.expireCache(o.viewState.projection,o.usedTiles[a])}).bind(null,n);e.postRenderFunctions.push(i)}}updateUsedTiles(e,n,i){const s=qe(n);s in e||(e[s]={}),e[s][i.getKey()]=!0}manageTilePyramid(e,n,i,s,r,o,a,l,c){const u=qe(n);u in e.wantedTiles||(e.wantedTiles[u]={});const h=e.wantedTiles[u],d=e.tileQueue,f=i.getMinZoom(),g=e.viewState.rotation,m=g?oh(e.viewState.center,e.viewState.resolution,g,e.size):void 0;let p=0,_,y,w,b,E,P;for(P=f;P<=a;++P)for(y=i.getTileRangeForExtentAndZ(o,P,y),w=i.getResolution(P),b=y.minX;b<=y.maxX;++b)for(E=y.minY;E<=y.maxY;++E)g&&!i.tileCoordIntersectsViewport([P,b,E],m)||(a-P<=l?(++p,_=n.getTile(P,b,E,s,r),_.getState()==de.IDLE&&(h[_.getKey()]=!0,d.isKeyQueued(_.getKey())||d.enqueue([_,u,i.getTileCoordCenter(_.tileCoord),w])),c!==void 0&&c(_)):n.useTile(P,b,E,r));n.updateCacheSize(p,r)}}class ym extends cP{constructor(e){super(e)}createRenderer(){return new vP(this)}}const he={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},rl=[he.FILL],ns=[he.STROKE],Is=[he.BEGIN_PATH],vm=[he.CLOSE_PATH];class Sy{drawCustom(e,n,i,s,r){}drawGeometry(e){}setStyle(e){}drawCircle(e,n,i){}drawFeature(e,n,i){}drawGeometryCollection(e,n,i){}drawLineString(e,n,i){}drawMultiLineString(e,n,i){}drawMultiPoint(e,n,i){}drawMultiPolygon(e,n,i){}drawPoint(e,n,i){}drawPolygon(e,n,i){}drawText(e,n,i){}setFillStrokeStyle(e,n){}setImageStyle(e,n){}setTextStyle(e,n){}}class Ia extends Sy{constructor(e,n,i,s){super(),this.tolerance=e,this.maxExtent=n,this.pixelRatio=s,this.maxLineWidth=0,this.resolution=i,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(e){const n=this.pixelRatio;return n==1?e:e.map(function(i){return i*n})}appendFlatPointCoordinates(e,n){const i=this.getBufferedMaxExtent(),s=this.tmpCoordinate_,r=this.coordinates;let o=r.length;for(let a=0,l=e.length;a<l;a+=n)s[0]=e[a],s[1]=e[a+1],zr(i,s)&&(r[o++]=s[0],r[o++]=s[1]);return o}appendFlatLineCoordinates(e,n,i,s,r,o){const a=this.coordinates;let l=a.length;const c=this.getBufferedMaxExtent();o&&(n+=s);let u=e[n],h=e[n+1];const d=this.tmpCoordinate_;let f=!0,g,m,p;for(g=n+s;g<i;g+=s)d[0]=e[g],d[1]=e[g+1],p=ih(c,d),p!==m?(f&&(a[l++]=u,a[l++]=h,f=!1),a[l++]=d[0],a[l++]=d[1]):p===bt.INTERSECTING?(a[l++]=d[0],a[l++]=d[1],f=!1):f=!0,u=d[0],h=d[1],m=p;return(r&&f||g===n+s)&&(a[l++]=u,a[l++]=h),l}drawCustomCoordinates_(e,n,i,s,r){for(let o=0,a=i.length;o<a;++o){const l=i[o],c=this.appendFlatLineCoordinates(e,n,l,s,!1,!1);r.push(c),n=l}return n}drawCustom(e,n,i,s,r){this.beginGeometry(e,n,r);const o=e.getType(),a=e.getStride(),l=this.coordinates.length;let c,u,h,d,f;switch(o){case"MultiPolygon":c=e.getOrientedFlatCoordinates(),d=[];const g=e.getEndss();f=0;for(let m=0,p=g.length;m<p;++m){const _=[];f=this.drawCustomCoordinates_(c,f,g[m],a,_),d.push(_)}this.instructions.push([he.CUSTOM,l,d,e,i,uh,r]),this.hitDetectionInstructions.push([he.CUSTOM,l,d,e,s||i,uh,r]);break;case"Polygon":case"MultiLineString":h=[],c=o=="Polygon"?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),f=this.drawCustomCoordinates_(c,0,e.getEnds(),a,h),this.instructions.push([he.CUSTOM,l,h,e,i,sa,r]),this.hitDetectionInstructions.push([he.CUSTOM,l,h,e,s||i,sa,r]);break;case"LineString":case"Circle":c=e.getFlatCoordinates(),u=this.appendFlatLineCoordinates(c,0,c.length,a,!1,!1),this.instructions.push([he.CUSTOM,l,u,e,i,Qi,r]),this.hitDetectionInstructions.push([he.CUSTOM,l,u,e,s||i,Qi,r]);break;case"MultiPoint":c=e.getFlatCoordinates(),u=this.appendFlatPointCoordinates(c,a),u>l&&(this.instructions.push([he.CUSTOM,l,u,e,i,Qi,r]),this.hitDetectionInstructions.push([he.CUSTOM,l,u,e,s||i,Qi,r]));break;case"Point":c=e.getFlatCoordinates(),this.coordinates.push(c[0],c[1]),u=this.coordinates.length,this.instructions.push([he.CUSTOM,l,u,e,i,void 0,r]),this.hitDetectionInstructions.push([he.CUSTOM,l,u,e,s||i,void 0,r]);break}this.endGeometry(n)}beginGeometry(e,n,i){this.beginGeometryInstruction1_=[he.BEGIN_GEOMETRY,n,0,e,i],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[he.BEGIN_GEOMETRY,n,0,e,i],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){const e=this.hitDetectionInstructions;e.reverse();let n;const i=e.length;let s,r,o=-1;for(n=0;n<i;++n)s=e[n],r=s[0],r==he.END_GEOMETRY?o=n:r==he.BEGIN_GEOMETRY&&(s[2]=n,s2(this.hitDetectionInstructions,o,n),o=-1)}setFillStrokeStyle(e,n){const i=this.state;if(e){const s=e.getColor();i.fillPatternScale=s&&typeof s=="object"&&"src"in s?this.pixelRatio:1,i.fillStyle=ei(s||nn)}else i.fillStyle=void 0;if(n){const s=n.getColor();i.strokeStyle=ei(s||ca);const r=n.getLineCap();i.lineCap=r!==void 0?r:Wr;const o=n.getLineDash();i.lineDash=o?o.slice():Pi;const a=n.getLineDashOffset();i.lineDashOffset=a||Ti;const l=n.getLineJoin();i.lineJoin=l!==void 0?l:Vr;const c=n.getWidth();i.lineWidth=c!==void 0?c:ha;const u=n.getMiterLimit();i.miterLimit=u!==void 0?u:la,i.lineWidth>this.maxLineWidth&&(this.maxLineWidth=i.lineWidth,this.bufferedMaxExtent_=null)}else i.strokeStyle=void 0,i.lineCap=void 0,i.lineDash=null,i.lineDashOffset=void 0,i.lineJoin=void 0,i.lineWidth=void 0,i.miterLimit=void 0}createFill(e){const n=e.fillStyle,i=[he.SET_FILL_STYLE,n];return typeof n!="string"&&i.push(e.fillPatternScale),i}applyStroke(e){this.instructions.push(this.createStroke(e))}createStroke(e){return[he.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,this.applyPixelRatio(e.lineDash),e.lineDashOffset*this.pixelRatio]}updateFillStyle(e,n){const i=e.fillStyle;(typeof i!="string"||e.currentFillStyle!=i)&&(i!==void 0&&this.instructions.push(n.call(this,e)),e.currentFillStyle=i)}updateStrokeStyle(e,n){const i=e.strokeStyle,s=e.lineCap,r=e.lineDash,o=e.lineDashOffset,a=e.lineJoin,l=e.lineWidth,c=e.miterLimit;(e.currentStrokeStyle!=i||e.currentLineCap!=s||r!=e.currentLineDash&&!ms(e.currentLineDash,r)||e.currentLineDashOffset!=o||e.currentLineJoin!=a||e.currentLineWidth!=l||e.currentMiterLimit!=c)&&(i!==void 0&&n.call(this,e),e.currentStrokeStyle=i,e.currentLineCap=s,e.currentLineDash=r,e.currentLineDashOffset=o,e.currentLineJoin=a,e.currentLineWidth=l,e.currentMiterLimit=c)}endGeometry(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;const n=[he.END_GEOMETRY,e];this.instructions.push(n),this.hitDetectionInstructions.push(n)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=g_(this.maxExtent),this.maxLineWidth>0)){const e=this.resolution*(this.maxLineWidth+1)/2;na(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}}class wP extends Ia{constructor(e,n,i,s){super(e,n,i,s),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(e,n,i){if(!this.image_||this.maxExtent&&!zr(this.maxExtent,e.getFlatCoordinates()))return;this.beginGeometry(e,n,i);const s=e.getFlatCoordinates(),r=e.getStride(),o=this.coordinates.length,a=this.appendFlatPointCoordinates(s,r);this.instructions.push([he.DRAW_IMAGE,o,a,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([he.DRAW_IMAGE,o,a,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(n)}drawMultiPoint(e,n,i){if(!this.image_)return;this.beginGeometry(e,n,i);const s=e.getFlatCoordinates(),r=[];for(let l=0,c=s.length;l<c;l+=e.getStride())(!this.maxExtent||zr(this.maxExtent,s.slice(l,l+2)))&&r.push(s[l],s[l+1]);const o=this.coordinates.length,a=this.appendFlatPointCoordinates(r,2);this.instructions.push([he.DRAW_IMAGE,o,a,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([he.DRAW_IMAGE,o,a,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(n)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(e,n){const i=e.getAnchor(),s=e.getSize(),r=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=i[0],this.anchorY_=i[1],this.hitDetectionImage_=e.getHitDetectionImage(),this.image_=e.getImage(this.pixelRatio),this.height_=s[1],this.opacity_=e.getOpacity(),this.originX_=r[0],this.originY_=r[1],this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=s[0],this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=n}}class SP extends Ia{constructor(e,n,i,s){super(e,n,i,s)}drawFlatCoordinates_(e,n,i,s){const r=this.coordinates.length,o=this.appendFlatLineCoordinates(e,n,i,s,!1,!1),a=[he.MOVE_TO_LINE_TO,r,o];return this.instructions.push(a),this.hitDetectionInstructions.push(a),i}drawLineString(e,n,i){const s=this.state,r=s.strokeStyle,o=s.lineWidth;if(r===void 0||o===void 0)return;this.updateStrokeStyle(s,this.applyStroke),this.beginGeometry(e,n,i),this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,Pi,Ti],Is);const a=e.getFlatCoordinates(),l=e.getStride();this.drawFlatCoordinates_(a,0,a.length,l),this.hitDetectionInstructions.push(ns),this.endGeometry(n)}drawMultiLineString(e,n,i){const s=this.state,r=s.strokeStyle,o=s.lineWidth;if(r===void 0||o===void 0)return;this.updateStrokeStyle(s,this.applyStroke),this.beginGeometry(e,n,i),this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,Pi,Ti],Is);const a=e.getEnds(),l=e.getFlatCoordinates(),c=e.getStride();let u=0;for(let h=0,d=a.length;h<d;++h)u=this.drawFlatCoordinates_(l,u,a[h],c);this.hitDetectionInstructions.push(ns),this.endGeometry(n)}finish(){const e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push(ns),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(ns),e.lastStroke=this.coordinates.length),e.lastStroke=0,super.applyStroke(e),this.instructions.push(Is)}}class wm extends Ia{constructor(e,n,i,s){super(e,n,i,s)}drawFlatCoordinatess_(e,n,i,s){const r=this.state,o=r.fillStyle!==void 0,a=r.strokeStyle!==void 0,l=i.length;this.instructions.push(Is),this.hitDetectionInstructions.push(Is);for(let c=0;c<l;++c){const u=i[c],h=this.coordinates.length,d=this.appendFlatLineCoordinates(e,n,u,s,!0,!a),f=[he.MOVE_TO_LINE_TO,h,d];this.instructions.push(f),this.hitDetectionInstructions.push(f),a&&(this.instructions.push(vm),this.hitDetectionInstructions.push(vm)),n=u}return o&&(this.instructions.push(rl),this.hitDetectionInstructions.push(rl)),a&&(this.instructions.push(ns),this.hitDetectionInstructions.push(ns)),n}drawCircle(e,n,i){const s=this.state,r=s.fillStyle,o=s.strokeStyle;if(r===void 0&&o===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,n,i),s.fillStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_FILL_STYLE,nn]),s.strokeStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,Pi,Ti]);const a=e.getFlatCoordinates(),l=e.getStride(),c=this.coordinates.length;this.appendFlatLineCoordinates(a,0,a.length,l,!1,!1);const u=[he.CIRCLE,c];this.instructions.push(Is,u),this.hitDetectionInstructions.push(Is,u),s.fillStyle!==void 0&&(this.instructions.push(rl),this.hitDetectionInstructions.push(rl)),s.strokeStyle!==void 0&&(this.instructions.push(ns),this.hitDetectionInstructions.push(ns)),this.endGeometry(n)}drawPolygon(e,n,i){const s=this.state,r=s.fillStyle,o=s.strokeStyle;if(r===void 0&&o===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,n,i),s.fillStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_FILL_STYLE,nn]),s.strokeStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,Pi,Ti]);const a=e.getEnds(),l=e.getOrientedFlatCoordinates(),c=e.getStride();this.drawFlatCoordinatess_(l,0,a,c),this.endGeometry(n)}drawMultiPolygon(e,n,i){const s=this.state,r=s.fillStyle,o=s.strokeStyle;if(r===void 0&&o===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,n,i),s.fillStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_FILL_STYLE,nn]),s.strokeStyle!==void 0&&this.hitDetectionInstructions.push([he.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,Pi,Ti]);const a=e.getEndss(),l=e.getOrientedFlatCoordinates(),c=e.getStride();let u=0;for(let h=0,d=a.length;h<d;++h)u=this.drawFlatCoordinatess_(l,u,a[h],c);this.endGeometry(n)}finish(){this.reverseHitDetectionInstructions(),this.state=null;const e=this.tolerance;if(e!==0){const n=this.coordinates;for(let i=0,s=n.length;i<s;++i)n[i]=xs(n[i],e)}return super.finish()}setFillStrokeStyles_(){const e=this.state;e.fillStyle!==void 0&&this.updateFillStyle(e,this.createFill),e.strokeStyle!==void 0&&this.updateStrokeStyle(e,this.applyStroke)}}function bP(t,e,n,i,s){const r=[];let o=n,a=0,l=e.slice(n,2);for(;a<t&&o+s<i;){const[c,u]=l.slice(-2),h=e[o+s],d=e[o+s+1],f=Math.sqrt((h-c)*(h-c)+(d-u)*(d-u));if(a+=f,a>=t){const g=(t-a+f)/f,m=mn(c,h,g),p=mn(u,d,g);l.push(m,p),r.push(l),l=[m,p],a==t&&(o+=s),a=0}else if(a<t)l.push(e[o+s],e[o+s+1]),o+=s;else{const g=f-a,m=mn(c,h,g/f),p=mn(u,d,g/f);l.push(m,p),r.push(l),l=[m,p],a=0,o+=s}}return a>0&&r.push(l),r}function EP(t,e,n,i,s){let r=n,o=n,a=0,l=0,c=n,u,h,d,f,g,m,p,_,y,w;for(h=n;h<i;h+=s){const b=e[h],E=e[h+1];g!==void 0&&(y=b-g,w=E-m,f=Math.sqrt(y*y+w*w),p!==void 0&&(l+=d,u=Math.acos((p*y+_*w)/(d*f)),u>t&&(l>a&&(a=l,r=c,o=h),l=0,c=h-s)),d=f,p=y,_=w),g=b,m=E}return l+=f,l>a?[c,h]:[r,o]}const ql={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1};class MP extends Ia{constructor(e,n,i,s){super(e,n,i,s),this.labels_=null,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[nn]={fillStyle:nn},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_="",this.fillKey_="",this.strokeKey_="",this.declutterMode_=void 0,this.declutterImageWithText_=void 0}finish(){const e=super.finish();return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e}drawText(e,n,i){const s=this.textFillState_,r=this.textStrokeState_,o=this.textState_;if(this.text_===""||!o||!s&&!r)return;const a=this.coordinates;let l=a.length;const c=e.getType();let u=null,h=e.getStride();if(o.placement==="line"&&(c=="LineString"||c=="MultiLineString"||c=="Polygon"||c=="MultiPolygon")){if(!sn(this.maxExtent,e.getExtent()))return;let d;if(u=e.getFlatCoordinates(),c=="LineString")d=[u.length];else if(c=="MultiLineString")d=e.getEnds();else if(c=="Polygon")d=e.getEnds().slice(0,1);else if(c=="MultiPolygon"){const p=e.getEndss();d=[];for(let _=0,y=p.length;_<y;++_)d.push(p[_][0])}this.beginGeometry(e,n,i);const f=o.repeat,g=f?void 0:o.textAlign;let m=0;for(let p=0,_=d.length;p<_;++p){let y;f?y=bP(f*this.resolution,u,m,d[p],h):y=[u.slice(m,d[p])];for(let w=0,b=y.length;w<b;++w){const E=y[w];let P=0,k=E.length;if(g==null){const C=EP(o.maxAngle,E,0,E.length,2);P=C[0],k=C[1]}for(let C=P;C<k;C+=h)a.push(E[C],E[C+1]);const R=a.length;m=d[p],this.drawChars_(l,R),l=R}}this.endGeometry(n)}else{let d=o.overflow?null:[];switch(c){case"Point":case"MultiPoint":u=e.getFlatCoordinates();break;case"LineString":u=e.getFlatMidpoint();break;case"Circle":u=e.getCenter();break;case"MultiLineString":u=e.getFlatMidpoints(),h=2;break;case"Polygon":u=e.getFlatInteriorPoint(),o.overflow||d.push(u[2]/this.resolution),h=3;break;case"MultiPolygon":const y=e.getFlatInteriorPoints();u=[];for(let w=0,b=y.length;w<b;w+=3)o.overflow||d.push(y[w+2]/this.resolution),u.push(y[w],y[w+1]);if(u.length===0)return;h=2;break}const f=this.appendFlatPointCoordinates(u,h);if(f===l)return;if(d&&(f-l)/2!==u.length/h){let y=l/2;d=d.filter((w,b)=>{const E=a[(y+b)*2]===u[b*h]&&a[(y+b)*2+1]===u[b*h+1];return E||--y,E})}this.saveTextStates_(),(o.backgroundFill||o.backgroundStroke)&&(this.setFillStrokeStyle(o.backgroundFill,o.backgroundStroke),o.backgroundFill&&this.updateFillStyle(this.state,this.createFill),o.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(e,n,i);let g=o.padding;if(g!=As&&(o.scale[0]<0||o.scale[1]<0)){let y=o.padding[0],w=o.padding[1],b=o.padding[2],E=o.padding[3];o.scale[0]<0&&(w=-w,E=-E),o.scale[1]<0&&(y=-y,b=-b),g=[y,w,b,E]}const m=this.pixelRatio;this.instructions.push([he.DRAW_IMAGE,l,f,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterMode_,this.declutterImageWithText_,g==As?As:g.map(function(y){return y*m}),!!o.backgroundFill,!!o.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,d]);const p=1/m,_=this.state.fillStyle;o.backgroundFill&&(this.state.fillStyle=nn,this.hitDetectionInstructions.push(this.createFill(this.state))),this.hitDetectionInstructions.push([he.DRAW_IMAGE,l,f,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[p,p],NaN,this.declutterMode_,this.declutterImageWithText_,g,!!o.backgroundFill,!!o.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?nn:this.fillKey_,this.textOffsetX_,this.textOffsetY_,d]),o.backgroundFill&&(this.state.fillStyle=_,this.hitDetectionInstructions.push(this.createFill(this.state))),this.endGeometry(n)}}saveTextStates_(){const e=this.textStrokeState_,n=this.textState_,i=this.textFillState_,s=this.strokeKey_;e&&(s in this.strokeStates||(this.strokeStates[s]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));const r=this.textKey_;r in this.textStates||(this.textStates[r]={font:n.font,textAlign:n.textAlign||ua,justify:n.justify,textBaseline:n.textBaseline||Wl,scale:n.scale});const o=this.fillKey_;i&&(o in this.fillStates||(this.fillStates[o]={fillStyle:i.fillStyle}))}drawChars_(e,n){const i=this.textStrokeState_,s=this.textState_,r=this.strokeKey_,o=this.textKey_,a=this.fillKey_;this.saveTextStates_();const l=this.pixelRatio,c=ql[s.textBaseline],u=this.textOffsetY_*l,h=this.text_,d=i?i.lineWidth*Math.abs(s.scale[0])/2:0;this.instructions.push([he.DRAW_CHARS,e,n,c,s.overflow,a,s.maxAngle,l,u,r,d*l,h,o,1,this.declutterMode_]),this.hitDetectionInstructions.push([he.DRAW_CHARS,e,n,c,s.overflow,a&&nn,s.maxAngle,l,u,r,d*l,h,o,1/l,this.declutterMode_])}setTextStyle(e,n){let i,s,r;if(!e)this.text_="";else{const o=e.getFill();o?(s=this.textFillState_,s||(s={},this.textFillState_=s),s.fillStyle=ei(o.getColor()||nn)):(s=null,this.textFillState_=s);const a=e.getStroke();if(!a)r=null,this.textStrokeState_=r;else{r=this.textStrokeState_,r||(r={},this.textStrokeState_=r);const g=a.getLineDash(),m=a.getLineDashOffset(),p=a.getWidth(),_=a.getMiterLimit();r.lineCap=a.getLineCap()||Wr,r.lineDash=g?g.slice():Pi,r.lineDashOffset=m===void 0?Ti:m,r.lineJoin=a.getLineJoin()||Vr,r.lineWidth=p===void 0?ha:p,r.miterLimit=_===void 0?la:_,r.strokeStyle=ei(a.getColor()||ca)}i=this.textState_;const l=e.getFont()||J_;NC(l);const c=e.getScaleArray();i.overflow=e.getOverflow(),i.font=l,i.maxAngle=e.getMaxAngle(),i.placement=e.getPlacement(),i.textAlign=e.getTextAlign(),i.repeat=e.getRepeat(),i.justify=e.getJustify(),i.textBaseline=e.getTextBaseline()||Wl,i.backgroundFill=e.getBackgroundFill(),i.backgroundStroke=e.getBackgroundStroke(),i.padding=e.getPadding()||As,i.scale=c===void 0?[1,1]:c;const u=e.getOffsetX(),h=e.getOffsetY(),d=e.getRotateWithView(),f=e.getRotation();this.text_=e.getText()||"",this.textOffsetX_=u===void 0?0:u,this.textOffsetY_=h===void 0?0:h,this.textRotateWithView_=d===void 0?!1:d,this.textRotation_=f===void 0?0:f,this.strokeKey_=r?(typeof r.strokeStyle=="string"?r.strokeStyle:qe(r.strokeStyle))+r.lineCap+r.lineDashOffset+"|"+r.lineWidth+r.lineJoin+r.miterLimit+"["+r.lineDash.join()+"]":"",this.textKey_=i.font+i.scale+(i.textAlign||"?")+(i.repeat||"?")+(i.justify||"?")+(i.textBaseline||"?"),this.fillKey_=s&&s.fillStyle?typeof s.fillStyle=="string"?s.fillStyle:"|"+qe(s.fillStyle):""}this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=n}}const xP={Circle:wm,Default:Ia,Image:wP,LineString:SP,Polygon:wm,Text:MP};class CP{constructor(e,n,i,s){this.tolerance_=e,this.maxExtent_=n,this.pixelRatio_=s,this.resolution_=i,this.buildersByZIndex_={}}finish(){const e={};for(const n in this.buildersByZIndex_){e[n]=e[n]||{};const i=this.buildersByZIndex_[n];for(const s in i){const r=i[s].finish();e[n][s]=r}}return e}getBuilder(e,n){const i=e!==void 0?e.toString():"0";let s=this.buildersByZIndex_[i];s===void 0&&(s={},this.buildersByZIndex_[i]=s);let r=s[n];if(r===void 0){const o=xP[n];r=new o(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),s[n]=r}return r}}function kP(t,e,n,i,s,r,o,a,l,c,u,h){let d=t[e],f=t[e+1],g=0,m=0,p=0,_=0;function y(){g=d,m=f,e+=i,d=t[e],f=t[e+1],_+=p,p=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m))}do y();while(e<n-i&&_+p<r);let w=p===0?0:(r-_)/p;const b=mn(g,d,w),E=mn(m,f,w),P=e-i,k=_,R=r+a*l(c,s,u);for(;e<n-i&&_+p<R;)y();w=p===0?0:(R-_)/p;const C=mn(g,d,w),V=mn(m,f,w);let W;if(h){const z=[b,E,C,V];A_(z,0,4,2,h,z,z),W=z[0]>z[2]}else W=b>C;const A=Math.PI,q=[],ie=P+i===e;e=P,p=0,_=k,d=t[e],f=t[e+1];let ce;if(ie){y(),ce=Math.atan2(f-m,d-g),W&&(ce+=ce>0?-A:A);const z=(C+b)/2,se=(V+E)/2;return q[0]=[z,se,(R-r)/2,ce,s],q}s=s.replace(/\n/g," ");for(let z=0,se=s.length;z<se;){y();let ee=Math.atan2(f-m,d-g);if(W&&(ee+=ee>0?-A:A),ce!==void 0){let U=ee-ce;if(U+=U>A?-2*A:U<-A?2*A:0,Math.abs(U)>o)return null}ce=ee;const Ie=z;let me=0;for(;z<se;++z){const U=W?se-z-1:z,ot=a*l(c,s[U],u);if(e+i<n&&_+p<r+me+ot/2)break;me+=ot}if(z===Ie)continue;const ye=W?s.substring(se-Ie,se-z):s.substring(Ie,z);w=p===0?0:(r+me/2-_)/p;const ge=mn(g,d,w),Le=mn(m,f,w);q.push([ge,Le,me/2,ee,ye]),r+=me}return q}function by(t,e,n,i){let s=t[e],r=t[e+1],o=0;for(let a=e+i;a<n;a+=i){const l=t[a],c=t[a+1];o+=Math.sqrt((l-s)*(l-s)+(c-r)*(c-r)),s=l,r=c}return o}const ir=vn(),ji=[],pi=[],_i=[],Wi=[];function Sm(t){return t[3].declutterBox}const bm=new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");function Mu(t,e){return e==="start"?e=bm.test(t)?"right":"left":e==="end"&&(e=bm.test(t)?"left":"right"),ql[e]}function PP(t,e,n){return n>0&&t.push(`
`,""),t.push(e,""),t}class TP{constructor(e,n,i,s,r){this.overlaps=i,this.pixelRatio=n,this.resolution=e,this.alignAndScaleFill_,this.instructions=s.instructions,this.coordinates=s.coordinates,this.coordinateCache_={},this.renderedTransform_=Nn(),this.hitDetectionInstructions=s.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=s.fillStates||{},this.strokeStates=s.strokeStates||{},this.textStates=s.textStates||{},this.widths_={},this.labels_={},this.zIndexContext_=r?new _y:null}getZIndexContext(){return this.zIndexContext_}createLabel(e,n,i,s){const r=e+n+i+s;if(this.labels_[r])return this.labels_[r];const o=s?this.strokeStates[s]:null,a=i?this.fillStates[i]:null,l=this.textStates[n],c=this.pixelRatio,u=[l.scale[0]*c,l.scale[1]*c],h=Array.isArray(e),d=l.justify?ql[l.justify]:Mu(Array.isArray(e)?e[0]:e,l.textAlign||ua),f=s&&o.lineWidth?o.lineWidth:0,g=h?e:e.split(`
`).reduce(PP,[]),{width:m,height:p,widths:_,heights:y,lineWidths:w}=GC(l,g),b=m+f,E=[],P=(b+2)*u[0],k=(p+f)*u[1],R={width:P<0?Math.floor(P):Math.ceil(P),height:k<0?Math.floor(k):Math.ceil(k),contextInstructions:E};(u[0]!=1||u[1]!=1)&&E.push("scale",u),s&&(E.push("strokeStyle",o.strokeStyle),E.push("lineWidth",f),E.push("lineCap",o.lineCap),E.push("lineJoin",o.lineJoin),E.push("miterLimit",o.miterLimit),E.push("setLineDash",[o.lineDash]),E.push("lineDashOffset",o.lineDashOffset)),i&&E.push("fillStyle",a.fillStyle),E.push("textBaseline","middle"),E.push("textAlign","center");const C=.5-d;let V=d*b+C*f;const W=[],A=[];let q=0,ie=0,ce=0,z=0,se;for(let ee=0,Ie=g.length;ee<Ie;ee+=2){const me=g[ee];if(me===`
`){ie+=q,q=0,V=d*b+C*f,++z;continue}const ye=g[ee+1]||l.font;ye!==se&&(s&&W.push("font",ye),i&&A.push("font",ye),se=ye),q=Math.max(q,y[ce]);const ge=[me,V+C*_[ce]+d*(_[ce]-w[z]),.5*(f+q)+ie];V+=_[ce],s&&W.push("strokeText",ge),i&&A.push("fillText",ge),++ce}return Array.prototype.push.apply(E,W),Array.prototype.push.apply(E,A),this.labels_[r]=R,R}replayTextBackground_(e,n,i,s,r,o,a){e.beginPath(),e.moveTo.apply(e,n),e.lineTo.apply(e,i),e.lineTo.apply(e,s),e.lineTo.apply(e,r),e.lineTo.apply(e,n),o&&(this.alignAndScaleFill_=o[2],this.fill_(e)),a&&(this.setStrokeStyle_(e,a),e.stroke())}calculateImageOrLabelDimensions_(e,n,i,s,r,o,a,l,c,u,h,d,f,g,m,p){a*=d[0],l*=d[1];let _=i-a,y=s-l;const w=r+c>e?e-c:r,b=o+u>n?n-u:o,E=g[3]+w*d[0]+g[1],P=g[0]+b*d[1]+g[2],k=_-g[3],R=y-g[0];(m||h!==0)&&(ji[0]=k,Wi[0]=k,ji[1]=R,pi[1]=R,pi[0]=k+E,_i[0]=pi[0],_i[1]=R+P,Wi[1]=_i[1]);let C;return h!==0?(C=Li(Nn(),i,s,1,1,h,-i,-s),Ct(C,ji),Ct(C,pi),Ct(C,_i),Ct(C,Wi),jn(Math.min(ji[0],pi[0],_i[0],Wi[0]),Math.min(ji[1],pi[1],_i[1],Wi[1]),Math.max(ji[0],pi[0],_i[0],Wi[0]),Math.max(ji[1],pi[1],_i[1],Wi[1]),ir)):jn(Math.min(k,k+E),Math.min(R,R+P),Math.max(k,k+E),Math.max(R,R+P),ir),f&&(_=Math.round(_),y=Math.round(y)),{drawImageX:_,drawImageY:y,drawImageW:w,drawImageH:b,originX:c,originY:u,declutterBox:{minX:ir[0],minY:ir[1],maxX:ir[2],maxY:ir[3],value:p},canvasTransform:C,scale:d}}replayImageOrLabel_(e,n,i,s,r,o,a){const l=!!(o||a),c=s.declutterBox,u=a?a[2]*s.scale[0]/2:0;return c.minX-u<=n[0]&&c.maxX+u>=0&&c.minY-u<=n[1]&&c.maxY+u>=0&&(l&&this.replayTextBackground_(e,ji,pi,_i,Wi,o,a),zC(e,s.canvasTransform,r,i,s.originX,s.originY,s.drawImageW,s.drawImageH,s.drawImageX,s.drawImageY,s.scale)),!0}fill_(e){const n=this.alignAndScaleFill_;if(n){const i=Ct(this.renderedTransform_,[0,0]),s=512*this.pixelRatio;e.save(),e.translate(i[0]%s,i[1]%s),n!==1&&e.scale(n,n),e.rotate(this.viewRotation_)}e.fill(),n&&e.restore()}setStrokeStyle_(e,n){e.strokeStyle=n[1],e.lineWidth=n[2],e.lineCap=n[3],e.lineJoin=n[4],e.miterLimit=n[5],e.lineDashOffset=n[7],e.setLineDash(n[6])}drawLabelWithPointPlacement_(e,n,i,s){const r=this.textStates[n],o=this.createLabel(e,n,s,i),a=this.strokeStates[i],l=this.pixelRatio,c=Mu(Array.isArray(e)?e[0]:e,r.textAlign||ua),u=ql[r.textBaseline||Wl],h=a&&a.lineWidth?a.lineWidth:0,d=o.width/l-2*r.scale[0],f=c*d+2*(.5-c)*h,g=u*o.height/l+2*(.5-u)*h;return{label:o,anchorX:f,anchorY:g}}execute_(e,n,i,s,r,o,a,l){const c=this.zIndexContext_;let u;this.pixelCoordinates_&&ms(i,this.renderedTransform_)?u=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),u=rs(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),j2(this.renderedTransform_,i));let h=0;const d=s.length;let f=0,g,m,p,_,y,w,b,E,P,k,R,C,V,W=0,A=0,q=null,ie=null;const ce=this.coordinateCache_,z=this.viewRotation_,se=Math.round(Math.atan2(-i[1],i[0])*1e12)/1e12,ee={context:e,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:z},Ie=this.instructions!=s||this.overlaps?0:200;let me,ye,ge,Le;for(;h<d;){const U=s[h];switch(U[0]){case he.BEGIN_GEOMETRY:me=U[1],Le=U[3],me.getGeometry()?a!==void 0&&!sn(a,Le.getExtent())?h=U[2]+1:++h:h=U[2],c&&(c.zIndex=U[4]);break;case he.BEGIN_PATH:W>Ie&&(this.fill_(e),W=0),A>Ie&&(e.stroke(),A=0),!W&&!A&&(e.beginPath(),y=NaN,w=NaN),++h;break;case he.CIRCLE:f=U[1];const He=u[f],T=u[f+1],J=u[f+2],H=u[f+3],te=J-He,xe=H-T,v=Math.sqrt(te*te+xe*xe);e.moveTo(He+v,T),e.arc(He,T,v,0,2*Math.PI,!0),++h;break;case he.CLOSE_PATH:e.closePath(),++h;break;case he.CUSTOM:f=U[1],g=U[2];const M=U[3],x=U[4],L=U[5];ee.geometry=M,ee.feature=me,h in ce||(ce[h]=[]);const N=ce[h];L?L(u,f,g,2,N):(N[0]=u[f],N[1]=u[f+1],N.length=2),c&&(c.zIndex=U[6]),x(N,ee),++h;break;case he.DRAW_IMAGE:f=U[1],g=U[2],P=U[3],m=U[4],p=U[5];let I=U[6];const Z=U[7],$=U[8],j=U[9],D=U[10];let re=U[11];const Y=U[12];let oe=U[13];_=U[14]||"declutter";const ue=U[15];if(!P&&U.length>=20){k=U[19],R=U[20],C=U[21],V=U[22];const wn=this.drawLabelWithPointPlacement_(k,R,C,V);P=wn.label,U[3]=P;const _s=U[23];m=(wn.anchorX-_s)*this.pixelRatio,U[4]=m;const Sn=U[24];p=(wn.anchorY-Sn)*this.pixelRatio,U[5]=p,I=P.height,U[6]=I,oe=P.width,U[13]=oe}let be;U.length>25&&(be=U[25]);let Pe,ke,De;U.length>17?(Pe=U[16],ke=U[17],De=U[18]):(Pe=As,ke=!1,De=!1),D&&se?re+=z:!D&&!se&&(re-=z);let At=0;for(;f<g;f+=2){if(be&&be[At++]<oe/this.pixelRatio)continue;const wn=this.calculateImageOrLabelDimensions_(P.width,P.height,u[f],u[f+1],oe,I,m,p,$,j,re,Y,r,Pe,ke||De,me),_s=[e,n,P,wn,Z,ke?q:null,De?ie:null];if(l){let Sn,Un,bn;if(ue){const ct=g-f;if(!ue[ct]){ue[ct]={args:_s,declutterMode:_};continue}const Ut=ue[ct];Sn=Ut.args,Un=Ut.declutterMode,delete ue[ct],bn=Sm(Sn)}let ui,hi;if(Sn&&(Un!=="declutter"||!l.collides(bn))&&(ui=!0),(_!=="declutter"||!l.collides(wn.declutterBox))&&(hi=!0),Un==="declutter"&&_==="declutter"){const ct=ui&&hi;ui=ct,hi=ct}ui&&(Un!=="none"&&l.insert(bn),this.replayImageOrLabel_.apply(this,Sn)),hi&&(_!=="none"&&l.insert(wn.declutterBox),this.replayImageOrLabel_.apply(this,_s))}else this.replayImageOrLabel_.apply(this,_s)}++h;break;case he.DRAW_CHARS:const hn=U[1],dn=U[2],ci=U[3],Ba=U[4];V=U[5];const Vt=U[6],fn=U[7],io=U[8];C=U[9];const Xs=U[10];k=U[11],R=U[12];const gf=[U[13],U[13]];_=U[14]||"declutter";const $c=this.textStates[R],so=$c.font,ro=[$c.scale[0]*fn,$c.scale[1]*fn];let oo;so in this.widths_?oo=this.widths_[so]:(oo={},this.widths_[so]=oo);const mf=by(u,hn,dn,2),pf=Math.abs(ro[0])*rm(so,k,oo);if(Ba||pf<=mf){const wn=this.textStates[R].textAlign,_s=(mf-pf)*Mu(k,wn),Sn=kP(u,hn,dn,2,k,_s,Vt,Math.abs(ro[0]),rm,so,oo,se?0:this.viewRotation_);e:if(Sn){const Un=[];let bn,ui,hi,ct,Ut;if(C)for(bn=0,ui=Sn.length;bn<ui;++bn){Ut=Sn[bn],hi=Ut[4],ct=this.createLabel(hi,R,"",C),m=Ut[2]+(ro[0]<0?-Xs:Xs),p=ci*ct.height+(.5-ci)*2*Xs*ro[1]/ro[0]-io;const di=this.calculateImageOrLabelDimensions_(ct.width,ct.height,Ut[0],Ut[1],ct.width,ct.height,m,p,0,0,Ut[3],gf,!1,As,!1,me);if(l&&_==="declutter"&&l.collides(di.declutterBox))break e;Un.push([e,n,ct,di,1,null,null])}if(V)for(bn=0,ui=Sn.length;bn<ui;++bn){Ut=Sn[bn],hi=Ut[4],ct=this.createLabel(hi,R,V,""),m=Ut[2],p=ci*ct.height-io;const di=this.calculateImageOrLabelDimensions_(ct.width,ct.height,Ut[0],Ut[1],ct.width,ct.height,m,p,0,0,Ut[3],gf,!1,As,!1,me);if(l&&_==="declutter"&&l.collides(di.declutterBox))break e;Un.push([e,n,ct,di,1,null,null])}l&&_!=="none"&&l.load(Un.map(Sm));for(let di=0,g1=Un.length;di<g1;++di)this.replayImageOrLabel_.apply(this,Un[di])}}++h;break;case he.END_GEOMETRY:if(o!==void 0){me=U[1];const wn=o(me,Le,_);if(wn)return wn}++h;break;case he.FILL:Ie?W++:this.fill_(e),++h;break;case he.MOVE_TO_LINE_TO:for(f=U[1],g=U[2],ye=u[f],ge=u[f+1],e.moveTo(ye,ge),y=ye+.5|0,w=ge+.5|0,f+=2;f<g;f+=2)ye=u[f],ge=u[f+1],b=ye+.5|0,E=ge+.5|0,(f==g-2||b!==y||E!==w)&&(e.lineTo(ye,ge),y=b,w=E);++h;break;case he.SET_FILL_STYLE:q=U,this.alignAndScaleFill_=U[2],W&&(this.fill_(e),W=0,A&&(e.stroke(),A=0)),e.fillStyle=U[1],++h;break;case he.SET_STROKE_STYLE:ie=U,A&&(e.stroke(),A=0),this.setStrokeStyle_(e,U),++h;break;case he.STROKE:Ie?A++:e.stroke(),++h;break;default:++h;break}}W&&this.fill_(e),A&&e.stroke()}execute(e,n,i,s,r,o){this.viewRotation_=s,this.execute_(e,n,i,this.instructions,r,void 0,void 0,o)}executeHitDetection(e,n,i,s,r){return this.viewRotation_=i,this.execute_(e,[e.canvas.width,e.canvas.height],n,this.hitDetectionInstructions,!0,s,r)}}const gr=["Polygon","Circle","LineString","Image","Text","Default"],Ey=["Image","Text"],RP=gr.filter(t=>!Ey.includes(t));class AP{constructor(e,n,i,s,r,o,a){this.maxExtent_=e,this.overlaps_=s,this.pixelRatio_=i,this.resolution_=n,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=Nn(),this.renderedContext_=null,this.deferredZIndexContexts_={},this.createExecutors_(r,a)}clip(e,n){const i=this.getClipCoords(n);e.beginPath(),e.moveTo(i[0],i[1]),e.lineTo(i[2],i[3]),e.lineTo(i[4],i[5]),e.lineTo(i[6],i[7]),e.clip()}createExecutors_(e,n){for(const i in e){let s=this.executorsByZIndex_[i];s===void 0&&(s={},this.executorsByZIndex_[i]=s);const r=e[i];for(const o in r){const a=r[o];s[o]=new TP(this.resolution_,this.pixelRatio_,this.overlaps_,a,n)}}}hasExecutors(e){for(const n in this.executorsByZIndex_){const i=this.executorsByZIndex_[n];for(let s=0,r=e.length;s<r;++s)if(e[s]in i)return!0}return!1}forEachFeatureAtCoordinate(e,n,i,s,r,o){s=Math.round(s);const a=s*2+1,l=Li(this.hitDetectionTransform_,s+.5,s+.5,1/n,-1/n,-i,-e[0],-e[1]),c=!this.hitDetectionContext_;c&&(this.hitDetectionContext_=Rt(a,a,void 0,{willReadFrequently:!0}));const u=this.hitDetectionContext_;u.canvas.width!==a||u.canvas.height!==a?(u.canvas.width=a,u.canvas.height=a):c||u.clearRect(0,0,a,a);let h;this.renderBuffer_!==void 0&&(h=vn(),Do(h,e),na(h,n*(this.renderBuffer_+s),h));const d=IP(s);let f;function g(E,P,k){const R=u.getImageData(0,0,a,a).data;for(let C=0,V=d.length;C<V;C++)if(R[d[C]]>0){if(!o||k==="none"||f!=="Image"&&f!=="Text"||o.includes(E)){const W=(d[C]-3)/4,A=s-W%a,q=s-(W/a|0),ie=r(E,P,A*A+q*q);if(ie)return ie}u.clearRect(0,0,a,a);break}}const m=Object.keys(this.executorsByZIndex_).map(Number);m.sort(ki);let p,_,y,w,b;for(p=m.length-1;p>=0;--p){const E=m[p].toString();for(y=this.executorsByZIndex_[E],_=gr.length-1;_>=0;--_)if(f=gr[_],w=y[f],w!==void 0&&(b=w.executeHitDetection(u,l,i,g,h),b))return b}}getClipCoords(e){const n=this.maxExtent_;if(!n)return null;const i=n[0],s=n[1],r=n[2],o=n[3],a=[i,s,i,o,r,o,r,s];return rs(a,0,8,2,e,a),a}isEmpty(){return Ds(this.executorsByZIndex_)}execute(e,n,i,s,r,o,a){const l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(ki),o=o||gr;const c=gr.length;let u,h,d,f,g;for(a&&l.reverse(),u=0,h=l.length;u<h;++u){const m=l[u].toString();for(g=this.executorsByZIndex_[m],d=0,f=o.length;d<f;++d){const p=o[d],_=g[p];if(_!==void 0){const y=a===null?void 0:_.getZIndexContext(),w=y?y.getContext():e,b=this.maxExtent_&&p!=="Image"&&p!=="Text";if(b&&(w.save(),this.clip(w,i)),!y||p==="Text"||p==="Image"?_.execute(w,n,i,s,r,a):y.pushFunction(E=>_.execute(E,n,i,s,r,a)),b&&w.restore(),y){y.offset();const E=l[u]*c+d;this.deferredZIndexContexts_[E]||(this.deferredZIndexContexts_[E]=[]),this.deferredZIndexContexts_[E].push(y)}}}}this.renderedContext_=e}getDeferredZIndexContexts(){return this.deferredZIndexContexts_}getRenderedContext(){return this.renderedContext_}renderDeferred(){const e=this.deferredZIndexContexts_,n=Object.keys(e).map(Number).sort(ki);for(let i=0,s=n.length;i<s;++i)e[n[i]].forEach(r=>{r.draw(this.renderedContext_),r.clear()}),e[n[i]].length=0}}const xu={};function IP(t){if(xu[t]!==void 0)return xu[t];const e=t*2+1,n=t*t,i=new Array(n+1);for(let r=0;r<=t;++r)for(let o=0;o<=t;++o){const a=r*r+o*o;if(a>n)break;let l=i[a];l||(l=[],i[a]=l),l.push(((t+r)*e+(t+o))*4+3),r>0&&l.push(((t-r)*e+(t+o))*4+3),o>0&&(l.push(((t+r)*e+(t-o))*4+3),r>0&&l.push(((t-r)*e+(t-o))*4+3))}const s=[];for(let r=0,o=i.length;r<o;++r)i[r]&&s.push(...i[r]);return xu[t]=s,s}class LP extends Sy{constructor(e,n,i,s,r,o,a){super(),this.context_=e,this.pixelRatio_=n,this.extent_=i,this.transform_=s,this.transformRotation_=s?kc(Math.atan2(s[1],s[0]),10):0,this.viewRotation_=r,this.squaredTolerance_=o,this.userTransform_=a,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=Nn()}drawImages_(e,n,i,s){if(!this.image_)return;const r=rs(e,n,i,s,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.tmpLocalTransform_,l=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=l*this.imageOpacity_);let c=this.imageRotation_;this.transformRotation_===0&&(c-=this.viewRotation_),this.imageRotateWithView_&&(c+=this.viewRotation_);for(let u=0,h=r.length;u<h;u+=2){const d=r[u]-this.imageAnchorX_,f=r[u+1]-this.imageAnchorY_;if(c!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){const g=d+this.imageAnchorX_,m=f+this.imageAnchorY_;Li(a,g,m,1,1,c,-g,-m),o.save(),o.transform.apply(o,a),o.translate(g,m),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.restore()}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,d,f,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=l)}drawText_(e,n,i,s){if(!this.textState_||this.text_==="")return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);const r=rs(e,n,i,s,this.transform_,this.pixelCoordinates_),o=this.context_;let a=this.textRotation_;for(this.transformRotation_===0&&(a-=this.viewRotation_),this.textRotateWithView_&&(a+=this.viewRotation_);n<i;n+=s){const l=r[n]+this.textOffsetX_,c=r[n+1]+this.textOffsetY_;a!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(o.save(),o.translate(l-this.textOffsetX_,c-this.textOffsetY_),o.rotate(a),o.translate(this.textOffsetX_,this.textOffsetY_),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.restore()):(this.textStrokeState_&&o.strokeText(this.text_,l,c),this.textFillState_&&o.fillText(this.text_,l,c))}}moveToLineTo_(e,n,i,s,r){const o=this.context_,a=rs(e,n,i,s,this.transform_,this.pixelCoordinates_);o.moveTo(a[0],a[1]);let l=a.length;r&&(l-=2);for(let c=2;c<l;c+=2)o.lineTo(a[c],a[c+1]);return r&&o.closePath(),i}drawRings_(e,n,i,s){for(let r=0,o=i.length;r<o;++r)n=this.moveToLineTo_(e,n,i[r],s,!0);return n}drawCircle(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!sn(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const n=$2(e,this.transform_,this.pixelCoordinates_),i=n[2]-n[0],s=n[3]-n[1],r=Math.sqrt(i*i+s*s),o=this.context_;o.beginPath(),o.arc(n[0],n[1],r,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(e.getCenter(),0,2,2)}}setStyle(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())}setTransform(e){this.transform_=e}drawGeometry(e){switch(e.getType()){case"Point":this.drawPoint(e);break;case"LineString":this.drawLineString(e);break;case"Polygon":this.drawPolygon(e);break;case"MultiPoint":this.drawMultiPoint(e);break;case"MultiLineString":this.drawMultiLineString(e);break;case"MultiPolygon":this.drawMultiPolygon(e);break;case"GeometryCollection":this.drawGeometryCollection(e);break;case"Circle":this.drawCircle(e);break}}drawFeature(e,n){const i=n.getGeometryFunction()(e);i&&(this.setStyle(n),this.drawGeometry(i))}drawGeometryCollection(e){const n=e.getGeometriesArray();for(let i=0,s=n.length;i<s;++i)this.drawGeometry(n[i])}drawPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const n=e.getFlatCoordinates(),i=e.getStride();this.image_&&this.drawImages_(n,0,n.length,i),this.text_!==""&&this.drawText_(n,0,n.length,i)}drawMultiPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const n=e.getFlatCoordinates(),i=e.getStride();this.image_&&this.drawImages_(n,0,n.length,i),this.text_!==""&&this.drawText_(n,0,n.length,i)}drawLineString(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!sn(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const n=this.context_,i=e.getFlatCoordinates();n.beginPath(),this.moveToLineTo_(i,0,i.length,e.getStride(),!1),n.stroke()}if(this.text_!==""){const n=e.getFlatMidpoint();this.drawText_(n,0,2,2)}}}drawMultiLineString(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const n=e.getExtent();if(sn(this.extent_,n)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const i=this.context_,s=e.getFlatCoordinates();let r=0;const o=e.getEnds(),a=e.getStride();i.beginPath();for(let l=0,c=o.length;l<c;++l)r=this.moveToLineTo_(s,r,o[l],a,!1);i.stroke()}if(this.text_!==""){const i=e.getFlatMidpoints();this.drawText_(i,0,i.length,2)}}}drawPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!sn(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const n=this.context_;n.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride()),this.fillState_&&n.fill(),this.strokeState_&&n.stroke()}if(this.text_!==""){const n=e.getFlatInteriorPoint();this.drawText_(n,0,2,2)}}}drawMultiPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!sn(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const n=this.context_,i=e.getOrientedFlatCoordinates();let s=0;const r=e.getEndss(),o=e.getStride();n.beginPath();for(let a=0,l=r.length;a<l;++a){const c=r[a];s=this.drawRings_(i,s,c,o)}this.fillState_&&n.fill(),this.strokeState_&&n.stroke()}if(this.text_!==""){const n=e.getFlatInteriorPoints();this.drawText_(n,0,n.length,2)}}}setContextFillState_(e){const n=this.context_,i=this.contextFillState_;i?i.fillStyle!=e.fillStyle&&(i.fillStyle=e.fillStyle,n.fillStyle=e.fillStyle):(n.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})}setContextStrokeState_(e){const n=this.context_,i=this.contextStrokeState_;i?(i.lineCap!=e.lineCap&&(i.lineCap=e.lineCap,n.lineCap=e.lineCap),ms(i.lineDash,e.lineDash)||n.setLineDash(i.lineDash=e.lineDash),i.lineDashOffset!=e.lineDashOffset&&(i.lineDashOffset=e.lineDashOffset,n.lineDashOffset=e.lineDashOffset),i.lineJoin!=e.lineJoin&&(i.lineJoin=e.lineJoin,n.lineJoin=e.lineJoin),i.lineWidth!=e.lineWidth&&(i.lineWidth=e.lineWidth,n.lineWidth=e.lineWidth),i.miterLimit!=e.miterLimit&&(i.miterLimit=e.miterLimit,n.miterLimit=e.miterLimit),i.strokeStyle!=e.strokeStyle&&(i.strokeStyle=e.strokeStyle,n.strokeStyle=e.strokeStyle)):(n.lineCap=e.lineCap,n.setLineDash(e.lineDash),n.lineDashOffset=e.lineDashOffset,n.lineJoin=e.lineJoin,n.lineWidth=e.lineWidth,n.miterLimit=e.miterLimit,n.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})}setContextTextState_(e){const n=this.context_,i=this.contextTextState_,s=e.textAlign?e.textAlign:ua;i?(i.font!=e.font&&(i.font=e.font,n.font=e.font),i.textAlign!=s&&(i.textAlign=s,n.textAlign=s),i.textBaseline!=e.textBaseline&&(i.textBaseline=e.textBaseline,n.textBaseline=e.textBaseline)):(n.font=e.font,n.textAlign=s,n.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:s,textBaseline:e.textBaseline})}setFillStrokeStyle(e,n){if(!e)this.fillState_=null;else{const i=e.getColor();this.fillState_={fillStyle:ei(i||nn)}}if(!n)this.strokeState_=null;else{const i=n.getColor(),s=n.getLineCap(),r=n.getLineDash(),o=n.getLineDashOffset(),a=n.getLineJoin(),l=n.getWidth(),c=n.getMiterLimit(),u=r||Pi;this.strokeState_={lineCap:s!==void 0?s:Wr,lineDash:this.pixelRatio_===1?u:u.map(h=>h*this.pixelRatio_),lineDashOffset:(o||Ti)*this.pixelRatio_,lineJoin:a!==void 0?a:Vr,lineWidth:(l!==void 0?l:ha)*this.pixelRatio_,miterLimit:c!==void 0?c:la,strokeStyle:ei(i||ca)}}}setImageStyle(e){let n;if(!e||!(n=e.getSize())){this.image_=null;return}const i=e.getPixelRatio(this.pixelRatio_),s=e.getAnchor(),r=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=s[0]*i,this.imageAnchorY_=s[1]*i,this.imageHeight_=n[1]*i,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=r[0],this.imageOriginY_=r[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation();const o=e.getScaleArray();this.imageScale_=[o[0]*this.pixelRatio_/i,o[1]*this.pixelRatio_/i],this.imageWidth_=n[0]*i}setTextStyle(e){if(!e)this.text_="";else{const n=e.getFill();if(!n)this.textFillState_=null;else{const f=n.getColor();this.textFillState_={fillStyle:ei(f||nn)}}const i=e.getStroke();if(!i)this.textStrokeState_=null;else{const f=i.getColor(),g=i.getLineCap(),m=i.getLineDash(),p=i.getLineDashOffset(),_=i.getLineJoin(),y=i.getWidth(),w=i.getMiterLimit();this.textStrokeState_={lineCap:g!==void 0?g:Wr,lineDash:m||Pi,lineDashOffset:p||Ti,lineJoin:_!==void 0?_:Vr,lineWidth:y!==void 0?y:ha,miterLimit:w!==void 0?w:la,strokeStyle:ei(f||ca)}}const s=e.getFont(),r=e.getOffsetX(),o=e.getOffsetY(),a=e.getRotateWithView(),l=e.getRotation(),c=e.getScaleArray(),u=e.getText(),h=e.getTextAlign(),d=e.getTextBaseline();this.textState_={font:s!==void 0?s:J_,textAlign:h!==void 0?h:ua,textBaseline:d!==void 0?d:Wl},this.text_=u!==void 0?Array.isArray(u)?u.reduce((f,g,m)=>f+=m%2?" ":g,""):u:"",this.textOffsetX_=r!==void 0?this.pixelRatio_*r:0,this.textOffsetY_=o!==void 0?this.pixelRatio_*o:0,this.textRotateWithView_=a!==void 0?a:!1,this.textRotation_=l!==void 0?l:0,this.textScale_=[this.pixelRatio_*c[0],this.pixelRatio_*c[1]]}}}const Zn=.5;function OP(t,e,n,i,s,r,o,a,l){const c=s,u=t[0]*Zn,h=t[1]*Zn,d=Rt(u,h);d.imageSmoothingEnabled=!1;const f=d.canvas,g=new LP(d,Zn,s,null,o,a,null),m=n.length,p=Math.floor((256*256*256-1)/m),_={};for(let w=1;w<=m;++w){const b=n[w-1],E=b.getStyleFunction()||i;if(!E)continue;let P=E(b,r);if(!P)continue;Array.isArray(P)||(P=[P]);const R=(w*p).toString(16).padStart(7,"#00000");for(let C=0,V=P.length;C<V;++C){const W=P[C],A=W.getGeometryFunction()(b);if(!A||!sn(c,A.getExtent()))continue;const q=W.clone(),ie=q.getFill();ie&&ie.setColor(R);const ce=q.getStroke();ce&&(ce.setColor(R),ce.setLineDash(null)),q.setText(void 0);const z=W.getImage();if(z){const me=z.getImageSize();if(!me)continue;const ye=Rt(me[0],me[1],void 0,{alpha:!1}),ge=ye.canvas;ye.fillStyle=R,ye.fillRect(0,0,ge.width,ge.height),q.setImage(new zc({img:ge,anchor:z.getAnchor(),anchorXUnits:"pixels",anchorYUnits:"pixels",offset:z.getOrigin(),opacity:1,size:z.getSize(),scale:z.getScale(),rotation:z.getRotation(),rotateWithView:z.getRotateWithView()}))}const se=q.getZIndex()||0;let ee=_[se];ee||(ee={},_[se]=ee,ee.Polygon=[],ee.Circle=[],ee.LineString=[],ee.Point=[]);const Ie=A.getType();if(Ie==="GeometryCollection"){const me=A.getGeometriesArrayRecursive();for(let ye=0,ge=me.length;ye<ge;++ye){const Le=me[ye];ee[Le.getType().replace("Multi","")].push(Le,q)}}else ee[Ie.replace("Multi","")].push(A,q)}}const y=Object.keys(_).map(Number).sort(ki);for(let w=0,b=y.length;w<b;++w){const E=_[y[w]];for(const P in E){const k=E[P];for(let R=0,C=k.length;R<C;R+=2){g.setStyle(k[R+1]);for(let V=0,W=e.length;V<W;++V)g.setTransform(e[V]),g.drawGeometry(k[R])}}}return d.getImageData(0,0,f.width,f.height)}function FP(t,e,n){const i=[];if(n){const s=Math.floor(Math.round(t[0])*Zn),r=Math.floor(Math.round(t[1])*Zn),o=(mt(s,0,n.width-1)+mt(r,0,n.height-1)*n.width)*4,a=n.data[o],l=n.data[o+1],u=n.data[o+2]+256*(l+256*a),h=Math.floor((256*256*256-1)/e.length);u&&u%h===0&&i.push(e[u/h-1])}return i}const NP=.5,My={Point:UP,LineString:jP,Polygon:$P,MultiPoint:KP,MultiLineString:WP,MultiPolygon:VP,GeometryCollection:BP,Circle:GP};function DP(t,e){return parseInt(qe(t),10)-parseInt(qe(e),10)}function Em(t,e){const n=xy(t,e);return n*n}function xy(t,e){return NP*t/e}function GP(t,e,n,i,s){const r=n.getFill(),o=n.getStroke();if(r||o){const l=t.getBuilder(n.getZIndex(),"Circle");l.setFillStrokeStyle(r,o),l.drawCircle(e,i,s)}const a=n.getText();if(a&&a.getText()){const l=t.getBuilder(n.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,i)}}function Mm(t,e,n,i,s,r,o,a){const l=[],c=n.getImage();if(c){let d=!0;const f=c.getImageState();f==Ce.LOADED||f==Ce.ERROR?d=!1:f==Ce.IDLE&&c.load(),d&&l.push(c.ready())}const u=n.getFill();u&&u.loading()&&l.push(u.ready());const h=l.length>0;return h&&Promise.all(l).then(()=>s(null)),zP(t,e,n,i,r,o,a),h}function zP(t,e,n,i,s,r,o){const a=n.getGeometryFunction()(e);if(!a)return;const l=a.simplifyTransformed(i,s);if(n.getRenderer())Cy(t,l,n,e,o);else{const u=My[l.getType()];u(t,l,n,e,o,r)}}function Cy(t,e,n,i,s){if(e.getType()=="GeometryCollection"){const o=e.getGeometries();for(let a=0,l=o.length;a<l;++a)Cy(t,o[a],n,i,s);return}t.getBuilder(n.getZIndex(),"Default").drawCustom(e,i,n.getRenderer(),n.getHitDetectionRenderer(),s)}function BP(t,e,n,i,s,r){const o=e.getGeometriesArray();let a,l;for(a=0,l=o.length;a<l;++a){const c=My[o[a].getType()];c(t,o[a],n,i,s,r)}}function jP(t,e,n,i,s){const r=n.getStroke();if(r){const a=t.getBuilder(n.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawLineString(e,i,s)}const o=n.getText();if(o&&o.getText()){const a=t.getBuilder(n.getZIndex(),"Text");a.setTextStyle(o),a.drawText(e,i,s)}}function WP(t,e,n,i,s){const r=n.getStroke();if(r){const a=t.getBuilder(n.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawMultiLineString(e,i,s)}const o=n.getText();if(o&&o.getText()){const a=t.getBuilder(n.getZIndex(),"Text");a.setTextStyle(o),a.drawText(e,i,s)}}function VP(t,e,n,i,s){const r=n.getFill(),o=n.getStroke();if(o||r){const l=t.getBuilder(n.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawMultiPolygon(e,i,s)}const a=n.getText();if(a&&a.getText()){const l=t.getBuilder(n.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,i,s)}}function UP(t,e,n,i,s,r){const o=n.getImage(),a=n.getText(),l=a&&a.getText(),c=r&&o&&l?{}:void 0;if(o){if(o.getImageState()!=Ce.LOADED)return;const u=t.getBuilder(n.getZIndex(),"Image");u.setImageStyle(o,c),u.drawPoint(e,i,s)}if(l){const u=t.getBuilder(n.getZIndex(),"Text");u.setTextStyle(a,c),u.drawText(e,i,s)}}function KP(t,e,n,i,s,r){const o=n.getImage(),a=o&&o.getOpacity()!==0,l=n.getText(),c=l&&l.getText(),u=r&&a&&c?{}:void 0;if(a){if(o.getImageState()!=Ce.LOADED)return;const h=t.getBuilder(n.getZIndex(),"Image");h.setImageStyle(o,u),h.drawMultiPoint(e,i,s)}if(c){const h=t.getBuilder(n.getZIndex(),"Text");h.setTextStyle(l,u),h.drawText(e,i,s)}}function $P(t,e,n,i,s){const r=n.getFill(),o=n.getStroke();if(r||o){const l=t.getBuilder(n.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawPolygon(e,i,s)}const a=n.getText();if(a&&a.getText()){const l=t.getBuilder(n.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,i,s)}}class qP extends yy{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.clipped_=!1,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=vn(),this.wrappedRenderedExtent_=vn(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedPixelRatio_=1,this.renderedRenderOrder_=null,this.renderedFrameDeclutter_,this.replayGroup_=null,this.replayGroupChanged=!0,this.clipping=!0,this.targetContext_=null,this.opacity_=1}renderWorlds(e,n,i){const s=n.extent,r=n.viewState,o=r.center,a=r.resolution,l=r.projection,c=r.rotation,u=l.getExtent(),h=this.getLayer().getSource(),d=this.getLayer().getDeclutter(),f=n.pixelRatio,g=n.viewHints,m=!(g[Ot.ANIMATING]||g[Ot.INTERACTING]),p=this.context,_=Math.round(ze(s)/a*f),y=Math.round(zt(s)/a*f),w=h.getWrapX()&&l.canWrapX(),b=w?ze(u):null,E=w?Math.ceil((s[2]-u[2])/b)+1:1;let P=w?Math.floor((s[0]-u[0])/b):0;do{let k=this.getRenderTransform(o,a,0,f,_,y,P*b);n.declutter&&(k=k.slice(0)),e.execute(p,[p.canvas.width,p.canvas.height],k,c,m,i===void 0?gr:i?Ey:RP,i?d&&n.declutter[d]:void 0)}while(++P<E)}setDrawContext_(){this.opacity_!==1&&(this.targetContext_=this.context,this.context=Rt(this.context.canvas.width,this.context.canvas.height,mm))}resetDrawContext_(){if(this.opacity_!==1){const e=this.targetContext_.globalAlpha;this.targetContext_.globalAlpha=this.opacity_,this.targetContext_.drawImage(this.context.canvas,0,0),this.targetContext_.globalAlpha=e,Nc(this.context),mm.push(this.context.canvas),this.context=this.targetContext_,this.targetContext_=null}}renderDeclutter(e){!this.replayGroup_||!this.getLayer().getDeclutter()||this.renderWorlds(this.replayGroup_,e,!0)}renderDeferredInternal(e){this.replayGroup_&&(this.replayGroup_.renderDeferred(),this.clipped_&&this.context.restore(),this.resetDrawContext_())}renderFrame(e,n){const i=e.layerStatesArray[e.layerIndex];this.opacity_=i.opacity;const s=e.viewState;this.prepareContainer(e,n);const r=this.context,o=this.replayGroup_;let a=o&&!o.isEmpty();if(!a&&!(this.getLayer().hasListener(Cn.PRERENDER)||this.getLayer().hasListener(Cn.POSTRENDER)))return null;if(this.setDrawContext_(),this.preRender(r,e),s.projection,this.clipped_=!1,a&&i.extent&&this.clipping){const l=Ts(i.extent);a=sn(l,e.extent),this.clipped_=a&&!fr(l,e.extent),this.clipped_&&this.clipUnrotated(r,e,l)}return a&&this.renderWorlds(o,e,this.getLayer().getDeclutter()?!1:void 0),!e.declutter&&this.clipped_&&r.restore(),this.postRender(r,e),this.renderedRotation_!==s.rotation&&(this.renderedRotation_=s.rotation,this.hitDetectionImageData_=null),e.declutter||this.resetDrawContext_(),this.container}getFeatures(e){return new Promise(n=>{if(this.frameState&&!this.hitDetectionImageData_&&!this.animatingOrInteracting_){const i=this.frameState.size.slice(),s=this.renderedCenter_,r=this.renderedResolution_,o=this.renderedRotation_,a=this.renderedProjection_,l=this.wrappedRenderedExtent_,c=this.getLayer(),u=[],h=i[0]*Zn,d=i[1]*Zn;u.push(this.getRenderTransform(s,r,o,Zn,h,d,0).slice());const f=c.getSource(),g=a.getExtent();if(f.getWrapX()&&a.canWrapX()&&!fr(g,l)){let m=l[0];const p=ze(g);let _=0,y;for(;m<g[0];)--_,y=p*_,u.push(this.getRenderTransform(s,r,o,Zn,h,d,y).slice()),m+=p;for(_=0,m=l[2];m>g[2];)++_,y=p*_,u.push(this.getRenderTransform(s,r,o,Zn,h,d,y).slice()),m-=p}this.hitDetectionImageData_=OP(i,u,this.renderedFeatures_,c.getStyleFunction(),l,r,o,Em(r,this.renderedPixelRatio_))}n(FP(e,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(e,n,i,s,r){if(!this.replayGroup_)return;const o=n.viewState.resolution,a=n.viewState.rotation,l=this.getLayer(),c={},u=function(g,m,p){const _=qe(g),y=c[_];if(y){if(y!==!0&&p<y.distanceSq){if(p===0)return c[_]=!0,r.splice(r.lastIndexOf(y),1),s(g,l,m);y.geometry=m,y.distanceSq=p}}else{if(p===0)return c[_]=!0,s(g,l,m);r.push(c[_]={feature:g,layer:l,geometry:m,distanceSq:p,callback:s})}};let h;const d=[this.replayGroup_],f=this.getLayer().getDeclutter();return d.some(g=>h=g.forEachFeatureAtCoordinate(e,o,a,i,u,f&&n.declutter[f]?n.declutter[f].all().map(m=>m.value):null)),h}handleFontsChanged(){const e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}prepareFrame(e){const n=this.getLayer(),i=n.getSource();if(!i)return!1;const s=e.viewHints[Ot.ANIMATING],r=e.viewHints[Ot.INTERACTING],o=n.getUpdateWhileAnimating(),a=n.getUpdateWhileInteracting();if(this.ready&&!o&&s||!a&&r)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;const l=e.extent,c=e.viewState,u=c.projection,h=c.resolution,d=e.pixelRatio,f=n.getRevision(),g=n.getRenderBuffer();let m=n.getRenderOrder();m===void 0&&(m=DP);const p=c.center.slice(),_=na(l,g*h),y=_.slice(),w=[_.slice()],b=u.getExtent();if(i.getWrapX()&&u.canWrapX()&&!fr(b,e.extent)){const ie=ze(b),ce=Math.max(ze(_)/2,ie);_[0]=b[0]-ce,_[2]=b[2]+ce,b_(p,u);const z=v_(w[0],u);z[0]<b[0]&&z[2]<b[2]?w.push([z[0]+ie,z[1],z[2]+ie,z[3]]):z[0]>b[0]&&z[2]>b[2]&&w.push([z[0]-ie,z[1],z[2]-ie,z[3]])}if(this.ready&&this.renderedResolution_==h&&this.renderedRevision_==f&&this.renderedRenderOrder_==m&&this.renderedFrameDeclutter_===!!e.declutter&&fr(this.wrappedRenderedExtent_,_))return ms(this.renderedExtent_,y)||(this.hitDetectionImageData_=null,this.renderedExtent_=y),this.renderedCenter_=p,this.replayGroupChanged=!1,!0;this.replayGroup_=null;const E=new CP(xy(h,d),_,h,d);let P;for(let ie=0,ce=w.length;ie<ce;++ie)i.loadFeatures(w[ie],h,u);const k=Em(h,d);let R=!0;const C=(ie,ce)=>{let z;const se=ie.getStyleFunction()||n.getStyleFunction();if(se&&(z=se(ie,h)),z){const ee=this.renderFeature(ie,k,z,E,P,this.getLayer().getDeclutter(),ce);R=R&&!ee}},V=P_(_),W=i.getFeaturesInExtent(V);m&&W.sort(m);for(let ie=0,ce=W.length;ie<ce;++ie)C(W[ie],ie);this.renderedFeatures_=W,this.ready=R;const A=E.finish(),q=new AP(_,h,d,i.getOverlaps(),A,n.getRenderBuffer(),!!e.declutter);return this.renderedResolution_=h,this.renderedRevision_=f,this.renderedRenderOrder_=m,this.renderedFrameDeclutter_=!!e.declutter,this.renderedExtent_=y,this.wrappedRenderedExtent_=_,this.renderedCenter_=p,this.renderedProjection_=u,this.renderedPixelRatio_=d,this.replayGroup_=q,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(e,n,i,s,r,o,a){if(!i)return!1;let l=!1;if(Array.isArray(i))for(let c=0,u=i.length;c<u;++c)l=Mm(s,e,i[c],n,this.boundHandleStyleImageChange_,r,o,a)||l;else l=Mm(s,e,i,n,this.boundHandleStyleImageChange_,r,o,a);return l}}class HP extends cy{constructor(e){super(e)}createRenderer(){return new qP(this)}}class ZP{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let n=this.oldest_;for(;n;)e(n.value_,n.key_,this),n=n.newer}get(e,n){const i=this.entries_[e];return Ne(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(e){const n=this.entries_[e];return Ne(n!==void 0,"Tried to get a value for a key that does not exist in the cache"),n===this.newest_?(this.newest_=n.older,this.newest_&&(this.newest_.newer=null)):n===this.oldest_?(this.oldest_=n.newer,this.oldest_&&(this.oldest_.older=null)):(n.newer.older=n.older,n.older.newer=n.newer),delete this.entries_[e],--this.count_,n.value_}getCount(){return this.count_}getKeys(){const e=new Array(this.count_);let n=0,i;for(i=this.newest_;i;i=i.older)e[n++]=i.key_;return e}getValues(){const e=new Array(this.count_);let n=0,i;for(i=this.newest_;i;i=i.older)e[n++]=i.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){var n;return(n=this.entries_[e])==null?void 0:n.value_}pop(){const e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,n){this.get(e),this.entries_[e].value_=n}set(e,n){Ne(!(e in this.entries_),"Tried to set a value for a key that is used already");const i={key_:e,newer:null,older:this.newest_,value_:n};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[e]=i,++this.count_}setSize(e){this.highWaterMark=e}}function xm(t,e,n,i){return i!==void 0?(i[0]=t,i[1]=e,i[2]=n,i):[t,e,n]}function Vc(t,e,n){return t+"/"+e+"/"+n}function ky(t){return Vc(t[0],t[1],t[2])}function XP(t){return t.split("/").map(Number)}function Py(t){return(t[1]<<t[0])+t[2]}function YP(t,e){const n=t[0],i=t[1],s=t[2];if(e.getMinZoom()>n||n>e.getMaxZoom())return!1;const r=e.getFullTileRange(n);return r?r.containsXY(i,s):!0}class Ty extends ZP{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(e){for(;this.canExpireCache()&&!(this.peekLast().getKey()in e);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const e=this.peekFirstKey(),i=XP(e)[0];this.forEach(s=>{s.tileCoord[0]!==i&&(this.remove(ky(s.tileCoord)),s.release())})}}const Cu={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};class Ry extends li{constructor(e){super(),this.projection=Ae(e.projection),this.attributions_=Cm(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;const n=this;this.viewPromise_=new Promise(function(i,s){n.viewResolver=i,n.viewRejector=s})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=Cm(e),this.changed()}setState(e){this.state_=e,this.changed()}}function Cm(t){return t?Array.isArray(t)?function(e){return t}:typeof t=="function"?t:function(e){return[t]}:null}const sr=[0,0,0],Vi=5;class Ay{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,Ne(r2(this.resolutions_,(s,r)=>r-s),"`resolutions` must be sorted in descending order");let n;if(!e.origins){for(let s=0,r=this.resolutions_.length-1;s<r;++s)if(!n)n=this.resolutions_[s]/this.resolutions_[s+1];else if(this.resolutions_[s]/this.resolutions_[s+1]!==n){n=void 0;break}}this.zoomFactor_=n,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,Ne(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const i=e.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=$s(i)),Ne(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,Ne(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:_d,Ne(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i!==void 0?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map((s,r)=>{const o=new Xd(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(i){const a=this.getTileRangeForExtentAndZ(i,r);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):i&&this.calculateTileRanges_(i)}forEachTileCoord(e,n,i){const s=this.getTileRangeForExtentAndZ(e,n);for(let r=s.minX,o=s.maxX;r<=o;++r)for(let a=s.minY,l=s.maxY;a<=l;++a)i([n,r,a])}forEachTileCoordParentTileRange(e,n,i,s){let r,o,a,l=null,c=e[0]-1;for(this.zoomFactor_===2?(o=e[1],a=e[2]):l=this.getTileCoordExtent(e,s);c>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),r=nr(o,o,a,a,i)):r=this.getTileRangeForExtentAndZ(l,c,i),n(c,r))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,n,i){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){const r=e[1]*2,o=e[2]*2;return nr(r,r+1,o,o+1,n)}const s=this.getTileCoordExtent(e,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,e[0]+1,n)}return null}getTileRangeForTileCoordAndZ(e,n,i){if(n>this.maxZoom||n<this.minZoom)return null;const s=e[0],r=e[1],o=e[2];if(n===s)return nr(r,o,r,o,i);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,n-s),c=Math.floor(r*l),u=Math.floor(o*l);if(n<s)return nr(c,c,u,u,i);const h=Math.floor(l*(r+1))-1,d=Math.floor(l*(o+1))-1;return nr(c,h,u,d,i)}const a=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,n,i)}getTileRangeForExtentAndZ(e,n,i){this.getTileCoordForXYAndZ_(e[0],e[3],n,!1,sr);const s=sr[1],r=sr[2];this.getTileCoordForXYAndZ_(e[2],e[1],n,!0,sr);const o=sr[1],a=sr[2];return nr(s,o,r,a,i)}getTileCoordCenter(e){const n=this.getOrigin(e[0]),i=this.getResolution(e[0]),s=yn(this.getTileSize(e[0]),this.tmpSize_);return[n[0]+(e[1]+.5)*s[0]*i,n[1]-(e[2]+.5)*s[1]*i]}getTileCoordExtent(e,n){const i=this.getOrigin(e[0]),s=this.getResolution(e[0]),r=yn(this.getTileSize(e[0]),this.tmpSize_),o=i[0]+e[1]*r[0]*s,a=i[1]-(e[2]+1)*r[1]*s,l=o+r[0]*s,c=a+r[1]*s;return jn(o,a,l,c,n)}getTileCoordForCoordAndResolution(e,n,i){return this.getTileCoordForXYAndResolution_(e[0],e[1],n,!1,i)}getTileCoordForXYAndResolution_(e,n,i,s,r){const o=this.getZForResolution(i),a=i/this.getResolution(o),l=this.getOrigin(o),c=yn(this.getTileSize(o),this.tmpSize_);let u=a*(e-l[0])/i/c[0],h=a*(l[1]-n)/i/c[1];return s?(u=Ya(u,Vi)-1,h=Ya(h,Vi)-1):(u=Xa(u,Vi),h=Xa(h,Vi)),xm(o,u,h,r)}getTileCoordForXYAndZ_(e,n,i,s,r){const o=this.getOrigin(i),a=this.getResolution(i),l=yn(this.getTileSize(i),this.tmpSize_);let c=(e-o[0])/a/l[0],u=(o[1]-n)/a/l[1];return s?(c=Ya(c,Vi)-1,u=Ya(u,Vi)-1):(c=Xa(c,Vi),u=Xa(u,Vi)),xm(i,c,u,r)}getTileCoordForCoordAndZ(e,n,i){return this.getTileCoordForXYAndZ_(e[0],e[1],n,!1,i)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,n){const i=pd(this.resolutions_,e,n||0);return mt(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,n){return z_(n,0,n.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){const n=this.resolutions_.length,i=new Array(n);for(let s=this.minZoom;s<n;++s)i[s]=this.getTileRangeForExtentAndZ(e,s);this.fullTileRanges_=i}}function Iy(t){let e=t.getDefaultTileGrid();return e||(e=tT(t),t.setDefaultTileGrid(e)),e}function JP(t,e,n){const i=e[0],s=t.getTileCoordCenter(e),r=Yd(n);if(!zr(r,s)){const o=ze(r),a=Math.ceil((r[0]-s[0])/o);return s[0]+=o*a,t.getTileCoordForCoordAndZ(s,i)}return e}function QP(t,e,n,i){i=i!==void 0?i:"top-left";const s=Ly(t,e,n);return new Ay({extent:t,origin:b2(t,i),resolutions:s,tileSize:n})}function eT(t){const e=t||{},n=e.extent||Ae("EPSG:3857").getExtent(),i={extent:n,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:Ly(n,e.maxZoom,e.tileSize,e.maxResolution)};return new Ay(i)}function Ly(t,e,n,i){e=e!==void 0?e:h2,n=yn(n!==void 0?n:_d);const s=zt(t),r=ze(t);i=i>0?i:Math.max(r/n[0],s/n[1]);const o=e+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=i/Math.pow(2,l);return a}function tT(t,e,n,i){const s=Yd(t);return QP(s,e,n,i)}function Yd(t){t=Ae(t);let e=t.getExtent();if(!e){const n=180*yd.degrees/t.getMetersPerUnit();e=jn(-n,-n,n,n)}return e}class nT extends Ry{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.opaque_=e.opaque!==void 0?e.opaque:!1,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;const n=[256,256];this.tileGrid&&yn(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),n),this.tileCache=new Ty(e.cacheSize||0),this.tmpSize=[0,0],this.key_=e.key||"",this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(e,n){const i=this.getTileCacheForProjection(e);i&&i.expireCache(n)}forEachLoadedTile(e,n,i,s){const r=this.getTileCacheForProjection(e);if(!r)return!1;let o=!0,a,l,c;for(let u=i.minX;u<=i.maxX;++u)for(let h=i.minY;h<=i.maxY;++h)l=Vc(n,u,h),c=!1,r.containsKey(l)&&(a=r.get(l),c=a.getState()===de.LOADED,c&&(c=s(a)!==!1)),c||(o=!1);return o}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getOpaque(e){return this.opaque_}getResolutions(e){const n=e?this.getTileGridForProjection(e):this.tileGrid;return n?n.getResolutions():null}getTile(e,n,i,s,r){return pe()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:Iy(e)}getTileCacheForProjection(e){const n=this.getProjection();return Ne(n===null||Yi(n,e),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,n,i){const s=this.getTileGridForProjection(i),r=this.getTilePixelRatio(n),o=yn(s.getTileSize(e),this.tmpSize);return r==1?o:pC(o,r,this.tmpSize)}getTileCoordForTileUrlFunction(e,n){n=n!==void 0?n:this.getProjection();const i=this.getTileGridForProjection(n);return this.getWrapX()&&n.isGlobal()&&(e=JP(i,e,n)),YP(e,i)?e:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(e,n){const i=this.getTileCacheForProjection(n);e>i.highWaterMark&&(i.highWaterMark=e)}useTile(e,n,i,s){}}class iT extends Fi{constructor(e,n){super(e),this.tile=n}}function sT(t,e){const n=/\{z\}/g,i=/\{x\}/g,s=/\{y\}/g,r=/\{-y\}/g;return function(o,a,l){if(o)return t.replace(n,o[0].toString()).replace(i,o[1].toString()).replace(s,o[2].toString()).replace(r,function(){const c=o[0],u=e.getFullTileRange(c);if(!u)throw new Error("The {-y} placeholder requires a tile grid with extent");return(u.getHeight()-o[2]-1).toString()})}}function rT(t,e){const n=t.length,i=new Array(n);for(let s=0;s<n;++s)i[s]=sT(t[s],e);return oT(i)}function oT(t){return t.length===1?t[0]:function(e,n,i){if(!e)return;const s=Py(e),r=Fs(s,t.length);return t[r](e,n,i)}}function aT(t){const e=[];let n=/\{([a-z])-([a-z])\}/.exec(t);if(n){const i=n[1].charCodeAt(0),s=n[2].charCodeAt(0);let r;for(r=i;r<=s;++r)e.push(t.replace(n[0],String.fromCharCode(r)));return e}if(n=/\{(\d+)-(\d+)\}/.exec(t),n){const i=parseInt(n[2],10);for(let s=parseInt(n[1],10);s<=i;s++)e.push(t.replace(n[0],s.toString()));return e}return e.push(t),e}class Jd extends nT{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===Jd.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const n=e.target,i=qe(n),s=n.getState();let r;s==de.LOADING?(this.tileLoadingKeys_[i]=!0,r=Cu.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],r=s==de.ERROR?Cu.TILELOADERROR:s==de.LOADED?Cu.TILELOADEND:void 0),r!=null&&this.dispatchEvent(new iT(r,n))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,n){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof n<"u"?this.setKey(n):this.changed()}setUrl(e){const n=aT(e);this.urls=n,this.setUrls(n)}setUrls(e){this.urls=e;const n=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(rT(e,this.tileGrid),n):this.setKey(n)}tileUrlFunction(e,n,i){}useTile(e,n,i){const s=Vc(e,n,i);this.tileCache.containsKey(s)&&this.tileCache.get(s)}}class Oy extends Jd{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:lT,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:wy,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,n){const i=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==i?n:{});for(const s in this.tileCacheForProjection){const r=this.tileCacheForProjection[s];r.expireCache(r==i?n:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!Yi(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!Yi(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const n=this.getProjection();if(this.tileGrid&&(!n||Yi(n,e)))return this.tileGrid;const i=qe(e);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=Iy(e)),this.tileGridForProjection[i]}getTileCacheForProjection(e){const n=this.getProjection();if(!n||Yi(n,e))return this.tileCache;const i=qe(e);return i in this.tileCacheForProjection||(this.tileCacheForProjection[i]=new Ty(this.tileCache.highWaterMark)),this.tileCacheForProjection[i]}createTile_(e,n,i,s,r,o){const a=[e,n,i],l=this.getTileCoordForTileUrlFunction(a,r),c=l?this.tileUrlFunction(l,s,r):void 0,u=new this.tileClass(a,c!==void 0?de.IDLE:de.EMPTY,c!==void 0?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return u.key=o,u.addEventListener(Se.CHANGE,this.handleTileChange.bind(this)),u}getTile(e,n,i,s,r){const o=this.getProjection();if(!o||!r||Yi(o,r))return this.getTileInternal(e,n,i,s,o||r);const a=this.getTileCacheForProjection(r),l=[e,n,i];let c;const u=ky(l);a.containsKey(u)&&(c=a.get(u));const h=this.getKey();if(c&&c.key==h)return c;const d=this.getTileGridForProjection(o),f=this.getTileGridForProjection(r),g=this.getTileCoordForTileUrlFunction(l,r),m=new Sh(o,d,r,f,l,g,this.getTilePixelRatio(s),this.getGutter(),(p,_,y,w)=>this.getTileInternal(p,_,y,w,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return m.key=h,c?(m.interimTile=c,m.refreshInterimChain(),a.replace(u,m)):a.set(u,m),m}getTileInternal(e,n,i,s,r){let o=null;const a=Vc(e,n,i),l=this.getKey();if(!this.tileCache.containsKey(a))o=this.createTile_(e,n,i,s,r,l),this.tileCache.set(a,o);else if(o=this.tileCache.get(a),o.key!=l){const c=o;o=this.createTile_(e,n,i,s,r,l),c.getState()==de.IDLE?o.interimTile=c.interimTile:o.interimTile=c,o.refreshInterimChain(),this.tileCache.replace(a,o)}return o}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const n in this.tileCacheForProjection)this.tileCacheForProjection[n].clear();this.changed()}}setTileGridForProjection(e,n){const i=Ae(e);if(i){const s=qe(i);s in this.tileGridForProjection||(this.tileGridForProjection[s]=n)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function lT(t,e){t.getImage().src=e}class cT extends Oy{constructor(e){e=e||{};const n=e.projection!==void 0?e.projection:"EPSG:3857",i=e.tileGrid!==void 0?e.tileGrid:eT({extent:Yd(n),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:n,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}const uT='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';class hT extends cT{constructor(e){e=e||{};let n;e.attributions!==void 0?n=e.attributions:n=[uT];const i=e.crossOrigin!==void 0?e.crossOrigin:"anonymous",s=e.url!==void 0?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:n,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:i,interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:19,opaque:e.opaque!==void 0?e.opaque:!0,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:s,wrapX:e.wrapX,zDirection:e.zDirection})}}const km=4;function Fy(t,e){const n=[];Object.keys(e).forEach(function(s){e[s]!==null&&e[s]!==void 0&&n.push(s+"="+encodeURIComponent(e[s]))});const i=n.join("&");return t=t.replace(/[?&]$/,""),t+=t.includes("?")?"&":"?",t+i}const bh="1.3.0";function dT(t,e,n,i,s){s.WIDTH=n[0],s.HEIGHT=n[1];const r=i.getAxisOrientation();let o;const a=S_(s.VERSION,"1.3")>=0;return s[a?"CRS":"SRS"]=i.getCode(),a&&r.substr(0,2)=="ne"?o=[e[1],e[0],e[3],e[2]]:o=e,s.BBOX=o.join(","),Fy(t,s)}function fT(t,e,n,i,s,r,o){r=Object.assign({REQUEST:"GetMap"},r);const a=e/n,l=[Lg(ze(t)/a,km),Lg(zt(t)/a,km)];if(n!=1)switch(o){case"geoserver":const u=90*n+.5|0;"FORMAT_OPTIONS"in r?r.FORMAT_OPTIONS+=";dpi:"+u:r.FORMAT_OPTIONS="dpi:"+u;break;case"mapserver":r.MAP_RESOLUTION=90*n;break;case"carmentaserver":case"qgis":r.DPI=90*n;break;default:throw new Error("Unknown `serverType` configured")}return dT(s,t,l,i,r)}function Pm(t,e){return Object.assign({REQUEST:e,SERVICE:"WMS",VERSION:bh,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},t)}class gT extends Oy{constructor(e){e=e||{};const n=Object.assign({},e.params),i="TRANSPARENT"in n?n.TRANSPARENT:!0;super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:!i,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0,this.params_=n,this.v13_=!0,this.serverType_=e.serverType,this.hidpi_=e.hidpi!==void 0?e.hidpi:!0,this.tmpExtent_=vn(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(e,n,i,s){const r=Ae(i),o=this.getProjection()||r;let a=this.getTileGrid();a||(a=this.getTileGridForProjection(o));const l=Ji(e,r,o),c=wh(o,r,e,n),u=a.getZForResolution(c,this.zDirection),h=a.getResolution(u),d=a.getTileCoordForCoordAndZ(l,u);if(a.getResolutions().length<=d[0])return;let f=a.getTileCoordExtent(d,this.tmpExtent_);const g=this.gutter_;g!==0&&(f=na(f,h*g,f));const m={QUERY_LAYERS:this.params_.LAYERS};Object.assign(m,Pm(this.params_,"GetFeatureInfo"),s);const p=Math.floor((l[0]-f[0])/h),_=Math.floor((f[3]-l[1])/h);return m[this.v13_?"I":"X"]=p,m[this.v13_?"J":"Y"]=_,this.getRequestUrl_(d,f,1,o||r,m)}getLegendUrl(e,n){if(this.urls[0]===void 0)return;const i={SERVICE:"WMS",VERSION:bh,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(n===void 0||n.LAYER===void 0){const s=this.params_.LAYERS;if(!(!Array.isArray(s)||s.length===1))return;i.LAYER=s}if(e!==void 0){const s=this.getProjection()?this.getProjection().getMetersPerUnit():1,r=28e-5;i.SCALE=e*s/r}return Object.assign(i,n),Fy(this.urls[0],i)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(e,n,i,s,r){const o=this.urls;if(!o)return;let a;if(o.length==1)a=o[0];else{const l=Fs(Py(e),o.length);a=o[l]}return fT(n,(this.tileGrid||this.getTileGridForProjection(s)).getResolution(e[0]),i,s,a,r,this.serverType_)}getTilePixelRatio(e){return!this.hidpi_||this.serverType_===void 0?1:e}getKeyForParams_(){let e=0;const n=[];for(const i in this.params_)n[e++]=i+"-"+this.params_[i];return n.join("/")}updateParams(e){Object.assign(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){const e=this.params_.VERSION||bh;this.v13_=S_(e,"1.3")>=0}tileUrlFunction(e,n,i){let s=this.getTileGrid();if(s||(s=this.getTileGridForProjection(i)),s.getResolutions().length<=e[0])return;n!=1&&(!this.hidpi_||this.serverType_===void 0)&&(n=1);const r=s.getResolution(e[0]);let o=s.getTileCoordExtent(e,this.tmpExtent_);const a=this.gutter_;a!==0&&(o=na(o,r*a,o));const l=Object.assign({},Pm(this.params_,"GetMap"));return this.getRequestUrl_(e,o,n,i,l)}}class Tm{constructor(e){this.rbush_=new V_(e),this.items_={}}insert(e,n){const i={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:n};this.rbush_.insert(i),this.items_[qe(n)]=i}load(e,n){const i=new Array(n.length);for(let s=0,r=n.length;s<r;s++){const o=e[s],a=n[s],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};i[s]=l,this.items_[qe(a)]=l}this.rbush_.load(i)}remove(e){const n=qe(e),i=this.items_[n];return delete this.items_[n],this.rbush_.remove(i)!==null}update(e,n){const i=this.items_[qe(n)],s=[i.minX,i.minY,i.maxX,i.maxY];ia(s,e)||(this.remove(n),this.insert(e,n))}getAll(){return this.rbush_.all().map(function(n){return n.value})}getInExtent(e){const n={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this.rbush_.search(n).map(function(s){return s.value})}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,n){return this.forEach_(this.getInExtent(e),n)}forEach_(e,n){let i;for(let s=0,r=e.length;s<r;s++)if(i=n(e[s]),i)return i;return i}isEmpty(){return Ds(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){const n=this.rbush_.toJSON();return jn(n.minX,n.minY,n.maxX,n.maxY,e)}concat(e){this.rbush_.load(e.rbush_.all());for(const n in e.items_)this.items_[n]=e.items_[n]}}class La extends li{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if(typeof e.getSimplifiedGeometry=="function"){const n=e;this.setGeometry(n)}else{const n=e;this.setProperties(n)}}clone(){const e=new La(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const n=this.getGeometry();n&&e.setGeometry(n.clone());const i=this.getStyle();return i&&e.setStyle(i),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&(rt(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=Fe(e,Se.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?mT(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}function mT(t){if(typeof t=="function")return t;let e;return Array.isArray(t)?e=t:(Ne(typeof t.getZIndex=="function","Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),e=[t]),function(){return e}}class Hl extends Td{constructor(e){super(),this.geometries_=e,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(rt),this.changeEventsKeys_.length=0}listenGeometriesChange_(){const e=this.geometries_;for(let n=0,i=e.length;n<i;++n)this.changeEventsKeys_.push(Fe(e[n],Se.CHANGE,this.changed,this))}clone(){const e=new Hl(ku(this.geometries_));return e.applyProperties(this),e}closestPointXY(e,n,i,s){if(s<Ks(this.getExtent(),e,n))return s;const r=this.geometries_;for(let o=0,a=r.length;o<a;++o)s=r[o].closestPointXY(e,n,i,s);return s}containsXY(e,n){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)if(i[s].containsXY(e,n))return!0;return!1}computeExtent(e){Yr(e);const n=this.geometries_;for(let i=0,s=n.length;i<s;++i)p_(e,n[i].getExtent());return e}getGeometries(){return ku(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const n=this.geometries_;for(let i=0,s=n.length;i<s;++i)n[i].getType()===this.getType()?e=e.concat(n[i].getGeometriesArrayRecursive()):e.push(n[i]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const n=[],i=this.geometries_;let s=!1;for(let r=0,o=i.length;r<o;++r){const a=i[r],l=a.getSimplifiedGeometry(e);n.push(l),l!==a&&(s=!0)}return s?new Hl(n):(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getType(){return"GeometryCollection"}intersectsExtent(e){const n=this.geometries_;for(let i=0,s=n.length;i<s;++i)if(n[i].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,n){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].rotate(e,n);this.changed()}scale(e,n,i){i||(i=us(this.getExtent()));const s=this.geometries_;for(let r=0,o=s.length;r<o;++r)s[r].scale(e,n,i);this.changed()}setGeometries(e){this.setGeometriesArray(ku(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const n=this.geometries_;for(let i=0,s=n.length;i<s;++i)n[i].applyTransform(e);this.changed()}translate(e,n){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].translate(e,n);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function ku(t){return t.map(e=>e.clone())}function Zl(t,e,n,i,s,r,o){let a,l;const c=(n-e)/i;if(c===1)a=e;else if(c===2)a=e,l=s;else if(c!==0){let u=t[e],h=t[e+1],d=0;const f=[0];for(let p=e+i;p<n;p+=i){const _=t[p],y=t[p+1];d+=Math.sqrt((_-u)*(_-u)+(y-h)*(y-h)),f.push(d),u=_,h=y}const g=s*d,m=i2(f,g);m<0?(l=(g-f[-m-2])/(f[-m-1]-f[-m-2]),a=e+(-m-2)*i):a=e+m*i}o=o>1?o:2,r=r||new Array(o);for(let u=0;u<o;++u)r[u]=a===void 0?NaN:l===void 0?t[a+u]:mn(t[a+u],t[a+i+u],l);return r}function Eh(t,e,n,i,s,r){if(n==e)return null;let o;if(s<t[e+i-1])return r?(o=t.slice(e,e+i),o[i-1]=s,o):null;if(t[n-1]<s)return r?(o=t.slice(n-i,n),o[i-1]=s,o):null;if(s==t[e+i-1])return t.slice(e,e+i);let a=e/i,l=n/i;for(;a<l;){const d=a+l>>1;s<t[(d+1)*i-1]?l=d:a=d+1}const c=t[a*i-1];if(s==c)return t.slice((a-1)*i,(a-1)*i+i);const u=t[(a+1)*i-1],h=(s-c)/(u-c);o=[];for(let d=0;d<i-1;++d)o.push(mn(t[(a-1)*i+d],t[a*i+d],h));return o.push(s),o}function pT(t,e,n,i,s,r,o){if(o)return Eh(t,e,n[n.length-1],i,s,r);let a;if(s<t[i-1])return r?(a=t.slice(0,i),a[i-1]=s,a):null;if(t[t.length-1]<s)return r?(a=t.slice(t.length-i),a[i-1]=s,a):null;for(let l=0,c=n.length;l<c;++l){const u=n[l];if(e!=u){if(s<t[e+i-1])return null;if(s<=t[u-1])return Eh(t,e,u,i,s,!1);e=u}}return null}class ds extends qs{constructor(e,n){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,n!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(n,e):this.setCoordinates(e,n)}appendCoordinate(e){Yt(this.flatCoordinates,e),this.changed()}clone(){const e=new ds(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,n,i,s){return s<Ks(this.getExtent(),e,n)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Rd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Id(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,e,n,i,s))}forEachSegment(e){return G_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinateAtM(e,n){return this.layout!="XYM"&&this.layout!="XYZM"?null:(n=n!==void 0?n:!1,Eh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n))}getCoordinates(){return Qi(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(e,n){return Zl(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n,this.stride)}getLength(){return by(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(e){const n=[];return n.length=Ic(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,n,0),new ds(n,"XY")}getType(){return"LineString"}intersectsExtent(e){return Lc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ac(this.flatCoordinates,0,e,this.stride),this.changed()}}class Kr extends qs{constructor(e,n,i){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,n);else if(n!==void 0&&i)this.setFlatCoordinates(n,e),this.ends_=i;else{const s=e,r=[],o=[];for(let l=0,c=s.length;l<c;++l){const u=s[l];Yt(r,u.getFlatCoordinates()),o.push(r.length)}const a=s.length===0?this.getLayout():s[0].getLayout();this.setFlatCoordinates(a,r),this.ends_=o}}appendLineString(e){Yt(this.flatCoordinates,e.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new Kr(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,n,i,s){return s<Ks(this.getExtent(),e,n)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ad(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ld(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,e,n,i,s))}getCoordinateAtM(e,n,i){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(n=n!==void 0?n:!1,i=i!==void 0?i:!1,pT(this.flatCoordinates,0,this.ends_,this.stride,e,n,i))}getCoordinates(){return sa(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(e){return e<0||this.ends_.length<=e?null:new ds(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLineStrings(){const e=this.flatCoordinates,n=this.ends_,i=this.layout,s=[];let r=0;for(let o=0,a=n.length;o<a;++o){const l=n[o],c=new ds(e.slice(r,l),i);s.push(c),r=l}return s}getFlatMidpoints(){const e=[],n=this.flatCoordinates;let i=0;const s=this.ends_,r=this.stride;for(let o=0,a=s.length;o<a;++o){const l=s[o],c=Zl(n,i,l,r,.5);Yt(e,c),i=l}return e}getSimplifiedGeometryInternal(e){const n=[],i=[];return n.length=L_(this.flatCoordinates,0,this.ends_,this.stride,e,n,0,i),new Kr(n,"XY",i)}getType(){return"MultiLineString"}intersectsExtent(e){return tC(this.flatCoordinates,0,this.ends_,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=Pa(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}}class Oa extends qs{constructor(e,n){super(),n&&!Array.isArray(e[0])?this.setFlatCoordinates(n,e):this.setCoordinates(e,n)}appendPoint(e){Yt(this.flatCoordinates,e.getFlatCoordinates()),this.changed()}clone(){const e=new Oa(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,n,i,s){if(s<Ks(this.getExtent(),e,n))return s;const r=this.flatCoordinates,o=this.stride;for(let a=0,l=r.length;a<l;a+=o){const c=Os(e,n,r[a],r[a+1]);if(c<s){s=c;for(let u=0;u<o;++u)i[u]=r[a+u];i.length=o}}return s}getCoordinates(){return Qi(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(e){const n=this.flatCoordinates.length/this.stride;return e<0||n<=e?null:new ra(this.flatCoordinates.slice(e*this.stride,(e+1)*this.stride),this.layout)}getPoints(){const e=this.flatCoordinates,n=this.layout,i=this.stride,s=[];for(let r=0,o=e.length;r<o;r+=i){const a=new ra(e.slice(r,r+i),n);s.push(a)}return s}getType(){return"MultiPoint"}intersectsExtent(e){const n=this.flatCoordinates,i=this.stride;for(let s=0,r=n.length;s<r;s+=i){const o=n[s],a=n[s+1];if(wd(e,o,a))return!0}return!1}setCoordinates(e,n){this.setLayout(n,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ac(this.flatCoordinates,0,e,this.stride),this.changed()}}function Ny(t,e,n,i){const s=[];let r=vn();for(let o=0,a=n.length;o<a;++o){const l=n[o];r=Sd(t,e,l[0],i),s.push((r[0]+r[2])/2,(r[1]+r[3])/2),e=l[l.length-1]}return s}class $r extends qs{constructor(e,n,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(e[0])){const s=e,r=[],o=[];for(let a=0,l=s.length;a<l;++a){const c=s[a],u=r.length,h=c.getEnds();for(let d=0,f=h.length;d<f;++d)h[d]+=u;Yt(r,c.getFlatCoordinates()),o.push(h)}n=s.length===0?this.getLayout():s[0].getLayout(),e=r,i=o}n!==void 0&&i?(this.setFlatCoordinates(n,e),this.endss_=i):this.setCoordinates(e,n)}appendPolygon(e){let n;if(!this.flatCoordinates)this.flatCoordinates=e.getFlatCoordinates().slice(),n=e.getEnds().slice(),this.endss_.push();else{const i=this.flatCoordinates.length;Yt(this.flatCoordinates,e.getFlatCoordinates()),n=e.getEnds().slice();for(let s=0,r=n.length;s<r;++s)n[s]+=i}this.endss_.push(n),this.changed()}clone(){const e=this.endss_.length,n=new Array(e);for(let s=0;s<e;++s)n[s]=this.endss_[s].slice();const i=new $r(this.flatCoordinates.slice(),this.layout,n);return i.applyProperties(this),i}closestPointXY(e,n,i,s){return s<Ks(this.getExtent(),e,n)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(q2(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),H2(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,e,n,i,s))}containsXY(e,n){return eC(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e,n)}getArea(){return J2(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(e){let n;return e!==void 0?(n=this.getOrientedFlatCoordinates().slice(),hh(n,0,this.endss_,this.stride,e)):n=this.flatCoordinates,uh(n,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const e=Ny(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=D_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new Oa(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;j_(e,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=hh(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const n=[],i=[];return n.length=Y2(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(e),n,0,i),new $r(n,"XY",i)}getPolygon(e){if(e<0||this.endss_.length<=e)return null;let n;if(e===0)n=0;else{const r=this.endss_[e-1];n=r[r.length-1]}const i=this.endss_[e].slice(),s=i[i.length-1];if(n!==0)for(let r=0,o=i.length;r<o;++r)i[r]-=n;return new oi(this.flatCoordinates.slice(n,s),this.layout,i)}getPolygons(){const e=this.layout,n=this.flatCoordinates,i=this.endss_,s=[];let r=0;for(let o=0,a=i.length;o<a;++o){const l=i[o].slice(),c=l[l.length-1];if(r!==0)for(let h=0,d=l.length;h<d;++h)l[h]-=r;const u=new oi(n.slice(r,c),e,l);s.push(u),r=c}return s}getType(){return"MultiPolygon"}intersectsExtent(e){return nC(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e)}setCoordinates(e,n){this.setLayout(n,e,3),this.flatCoordinates||(this.flatCoordinates=[]);const i=I_(this.flatCoordinates,0,e,this.stride,this.endss_);if(i.length===0)this.flatCoordinates.length=0;else{const s=i[i.length-1];this.flatCoordinates.length=s.length===0?0:s[s.length-1]}this.changed()}}const Rm=Nn();class en{constructor(e,n,i,s,r,o){this.styleFunction,this.extent_,this.id_=o,this.type_=e,this.flatCoordinates_=n,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=i||null,this.properties_=r,this.squaredTolerance_,this.stride_=s,this.simplifiedGeometry_}get(e){return this.properties_[e]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?m_(this.flatCoordinates_):Sd(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){const e=us(this.getExtent());this.flatInteriorPoints_=Nd(this.flatCoordinates_,0,this.ends_,2,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){const e=sC(this.flatCoordinates_,this.ends_),n=Ny(this.flatCoordinates_,0,e,2);this.flatInteriorPoints_=D_(this.flatCoordinates_,0,e,2,n)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=Zl(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];const e=this.flatCoordinates_;let n=0;const i=this.ends_;for(let s=0,r=i.length;s<r;++s){const o=i[s],a=Zl(e,n,o,2,.5);Yt(this.flatMidpoints_,a),n=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,n){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=Ae(e);const n=e.getExtent(),i=e.getWorldExtent();if(n&&i){const s=zt(i)/zt(n);Li(Rm,i[0],i[3],s,-s,0,0,0),rs(this.flatCoordinates_,0,this.flatCoordinates_.length,2,Rm,this.flatCoordinates_)}}applyTransform(e){e(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){var e;return new en(this.type_,this.flatCoordinates_.slice(),(e=this.ends_)==null?void 0:e.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=h_((e,n)=>{if(e===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),n&&this.simplifiedGeometry_.applyTransform(n);const i=this.simplifiedGeometry_.getFlatCoordinates();let s;switch(this.type_){case"LineString":i.length=Ic(i,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,e,i,0),s=[i.length];break;case"MultiLineString":s=[],i.length=L_(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,e,i,0,s);break;case"Polygon":s=[],i.length=Od(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(e),i,0,s);break}return s&&(this.simplifiedGeometry_=new en(this.type_,i,s,2,this.properties_,this.id_)),this.squaredTolerance_=e,this.simplifiedGeometry_}),this}}en.prototype.getFlatCoordinates=en.prototype.getOrientedFlatCoordinates;const Mn={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function _T(t,e){return[[-1/0,-1/0,1/0,1/0]]}let yT=!1;function vT(t,e,n,i,s,r,o){const a=new XMLHttpRequest;a.open("GET",typeof t=="function"?t(n,i,s):t,!0),e.getType()=="arraybuffer"&&(a.responseType="arraybuffer"),a.withCredentials=yT,a.onload=function(l){if(!a.status||a.status>=200&&a.status<300){const c=e.getType();try{let u;c=="text"||c=="json"?u=a.responseText:c=="xml"?u=a.responseXML||a.responseText:c=="arraybuffer"&&(u=a.response),u?r(e.readFeatures(u,{extent:n,featureProjection:s}),e.readProjection(u)):o()}catch{o()}}else o()},a.onerror=o,a.send()}function Am(t,e){return function(n,i,s,r,o){const a=this;vT(t,e,n,i,s,function(l,c){a.addFeatures(l),r!==void 0&&r(l)},o||Dr)}}class Ui extends Fi{constructor(e,n,i){super(e),this.feature=n,this.features=i}}class wT extends Ry{constructor(e){e=e||{},super({attributions:e.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:e.wrapX!==void 0?e.wrapX:!0}),this.on,this.once,this.un,this.loader_=Dr,this.format_=e.format,this.overlaps_=e.overlaps===void 0?!0:e.overlaps,this.url_=e.url,e.loader!==void 0?this.loader_=e.loader:this.url_!==void 0&&(Ne(this.format_,"`format` must be set when `url` is set"),this.loader_=Am(this.url_,this.format_)),this.strategy_=e.strategy!==void 0?e.strategy:_T;const n=e.useSpatialIndex!==void 0?e.useSpatialIndex:!0;this.featuresRtree_=n?new Tm:null,this.loadedExtentsRtree_=new Tm,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let i,s;Array.isArray(e.features)?s=e.features:e.features&&(i=e.features,s=i.getArray()),!n&&i===void 0&&(i=new Jn(s)),s!==void 0&&this.addFeaturesInternal(s),i!==void 0&&this.bindFeaturesCollection_(i)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){const n=qe(e);if(!this.addToIndex_(n,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(n,e);const i=e.getGeometry();if(i){const s=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(s,e)}else this.nullGeometryFeatures_[n]=e;this.dispatchEvent(new Ui(Mn.ADDFEATURE,e))}setupChangeEvents_(e,n){n instanceof en||(this.featureChangeKeys_[e]=[Fe(n,Se.CHANGE,this.handleFeatureChange_,this),Fe(n,Nr.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(e,n){let i=!0;if(n.getId()!==void 0){const s=String(n.getId());if(!(s in this.idIndex_))this.idIndex_[s]=n;else if(n instanceof en){const r=this.idIndex_[s];r instanceof en?Array.isArray(r)?r.push(n):this.idIndex_[s]=[r,n]:i=!1}else i=!1}return i&&(Ne(!(e in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[e]=n),i}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){const n=[],i=[],s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r],l=qe(a);this.addToIndex_(l,a)&&i.push(a)}for(let r=0,o=i.length;r<o;r++){const a=i[r],l=qe(a);this.setupChangeEvents_(l,a);const c=a.getGeometry();if(c){const u=c.getExtent();n.push(u),s.push(a)}else this.nullGeometryFeatures_[l]=a}if(this.featuresRtree_&&this.featuresRtree_.load(n,s),this.hasListener(Mn.ADDFEATURE))for(let r=0,o=i.length;r<o;r++)this.dispatchEvent(new Ui(Mn.ADDFEATURE,i[r]))}bindFeaturesCollection_(e){let n=!1;this.addEventListener(Mn.ADDFEATURE,function(i){n||(n=!0,e.push(i.feature),n=!1)}),this.addEventListener(Mn.REMOVEFEATURE,function(i){n||(n=!0,e.remove(i.feature),n=!1)}),e.addEventListener(tn.ADD,i=>{n||(n=!0,this.addFeature(i.element),n=!1)}),e.addEventListener(tn.REMOVE,i=>{n||(n=!0,this.removeFeature(i.element),n=!1)}),this.featuresCollection_=e}clear(e){if(e){for(const i in this.featureChangeKeys_)this.featureChangeKeys_[i].forEach(rt);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const i=s=>{this.removeFeatureInternal(s)};this.featuresRtree_.forEach(i);for(const s in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[s])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const n=new Ui(Mn.CLEAR);this.dispatchEvent(n),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,n){const i=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(i,function(s){const r=s.getGeometry();if(r instanceof en||r.intersectsCoordinate(e))return n(s)})}forEachFeatureInExtent(e,n){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,n);this.featuresCollection_&&this.featuresCollection_.forEach(n)}forEachFeatureIntersectingExtent(e,n){return this.forEachFeatureInExtent(e,function(i){const s=i.getGeometry();if(s instanceof en||s.intersectsExtent(e)){const r=n(i);if(r)return r}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),Ds(this.nullGeometryFeatures_)||Yt(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){const n=[];return this.forEachFeatureAtCoordinateDirect(e,function(i){n.push(i)}),n}getFeaturesInExtent(e,n){if(this.featuresRtree_){if(!(n&&n.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);const s=w_(e,n);return[].concat(...s.map(r=>this.featuresRtree_.getInExtent(r)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,n){const i=e[0],s=e[1];let r=null;const o=[NaN,NaN];let a=1/0;const l=[-1/0,-1/0,1/0,1/0];return n=n||ta,this.featuresRtree_.forEachInExtent(l,function(c){if(n(c)){const u=c.getGeometry(),h=a;if(a=u instanceof en?0:u.closestPointXY(i,s,o,a),a<h){r=c;const d=Math.sqrt(a);l[0]=i-d,l[1]=s-d,l[2]=i+d,l[3]=s+d}}}),r}getExtent(e){return this.featuresRtree_.getExtent(e)}getFeatureById(e){const n=this.idIndex_[e.toString()];return n!==void 0?n:null}getFeatureByUid(e){const n=this.uidIndex_[e];return n!==void 0?n:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){const n=e.target,i=qe(n),s=n.getGeometry();if(!s)i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(n),this.nullGeometryFeatures_[i]=n);else{const o=s.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(o,n)):this.featuresRtree_&&this.featuresRtree_.update(o,n)}const r=n.getId();if(r!==void 0){const o=r.toString();this.idIndex_[o]!==n&&(this.removeFromIdIndex_(n),this.idIndex_[o]=n)}else this.removeFromIdIndex_(n),this.uidIndex_[i]=n;this.changed(),this.dispatchEvent(new Ui(Mn.CHANGEFEATURE,n))}hasFeature(e){const n=e.getId();return n!==void 0?n in this.idIndex_:qe(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&Ds(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0}loadFeatures(e,n,i){const s=this.loadedExtentsRtree_,r=this.strategy_(e,n,i);for(let o=0,a=r.length;o<a;++o){const l=r[o];s.forEachInExtent(l,function(u){return fr(u.extent,l)})||(++this.loadingExtentsCount_,this.dispatchEvent(new Ui(Mn.FEATURESLOADSTART)),this.loader_.call(this,l,n,i,u=>{--this.loadingExtentsCount_,this.dispatchEvent(new Ui(Mn.FEATURESLOADEND,void 0,u))},()=>{--this.loadingExtentsCount_,this.dispatchEvent(new Ui(Mn.FEATURESLOADERROR))}),s.insert(l,{extent:l.slice()}))}this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){const n=this.loadedExtentsRtree_;let i;n.forEachInExtent(e,function(s){if(ia(s.extent,e))return i=s,!0}),i&&n.remove(i)}removeFeatures(e){const n=[];for(let i=0,s=e.length;i<s;++i){const r=e[i],o=this.removeFeatureInternal(r);o&&n.push(o)}n.length>0&&this.changed()}removeFeature(e){if(!e)return;this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){const n=qe(e);if(!(n in this.uidIndex_))return;n in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[n]:this.featuresRtree_&&this.featuresRtree_.remove(e);const i=this.featureChangeKeys_[n];i==null||i.forEach(rt),delete this.featureChangeKeys_[n];const s=e.getId();if(s!==void 0){const r=s.toString(),o=this.idIndex_[r];o===e?delete this.idIndex_[r]:Array.isArray(o)&&(o.splice(o.indexOf(e),1),o.length===1&&(this.idIndex_[r]=o[0]))}return delete this.uidIndex_[n],this.hasListener(Mn.REMOVEFEATURE)&&this.dispatchEvent(new Ui(Mn.REMOVEFEATURE,e)),e}removeFromIdIndex_(e){let n=!1;for(const i in this.idIndex_){const s=this.idIndex_[i];if(e instanceof en&&Array.isArray(s)&&s.includes(e))s.splice(s.indexOf(e),1);else if(this.idIndex_[i]===e){delete this.idIndex_[i],n=!0;break}}return n}setLoader(e){this.loader_=e}setUrl(e){Ne(this.format_,"`format` must be set when `url` is set"),this.url_=e,this.setLoader(Am(e,this.format_))}}class Dy{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=La,this.supportedMediaTypes=null}getReadOptions(e,n){if(n){let i=n.dataProjection?Ae(n.dataProjection):this.readProjection(e);n.extent&&i&&i.getUnits()==="tile-pixels"&&(i=Ae(i),i.setWorldExtent(n.extent)),n={dataProjection:i,featureProjection:n.featureProjection}}return this.adaptOptions(n)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return pe()}readFeature(e,n){return pe()}readFeatures(e,n){return pe()}readGeometry(e,n){return pe()}readProjection(e){return pe()}writeFeature(e,n){return pe()}writeFeatures(e,n){return pe()}writeGeometry(e,n){return pe()}}function to(t,e,n){const i=n?Ae(n.featureProjection):null,s=n?Ae(n.dataProjection):null;let r=t;if(i&&s&&!Yi(i,s)){e&&(r=t.clone());const o=e?i:s,a=e?s:i;o.getUnits()==="tile-pixels"?r.transform(o,a):r.applyTransform(Br(o,a))}if(e&&n&&n.decimals!==void 0){const o=Math.pow(10,n.decimals),a=function(l){for(let c=0,u=l.length;c<u;++c)l[c]=Math.round(l[c]*o)/o;return l};r===t&&(r=t.clone()),r.applyTransform(a)}return r}function Qd(t,e){const n=e?Ae(e.featureProjection):null,i=e?Ae(e.dataProjection):null;return n&&i&&!Yi(n,i)?I2(t,i,n):t}const ST={Point:ra,LineString:ds,Polygon:oi,MultiPoint:Oa,MultiLineString:Kr,MultiPolygon:$r};function bT(t,e,n){return Array.isArray(e[0])?(j_(t,0,e,n)||(t=t.slice(),hh(t,0,e,n)),t):(Gd(t,0,e,n)||(t=t.slice(),Bl(t,0,e,n)),t)}function Gy(t,e){var r;const n=t.geometry;if(!n)return[];if(Array.isArray(n))return n.map(o=>Gy({...t,geometry:o})).flat();const i=n.type==="MultiPolygon"?"Polygon":n.type;if(i==="GeometryCollection"||i==="Circle")throw new Error("Unsupported geometry type: "+i);const s=n.layout.length;return to(new en(i,i==="Polygon"?bT(n.flatCoordinates,n.ends,s):n.flatCoordinates,(r=n.ends)==null?void 0:r.flat(),s,t.properties||{},t.id).enableSimplifyTransformed(),!1,e)}function ef(t,e){if(!t)return null;if(Array.isArray(t)){const i=t.map(s=>ef(s,e));return new Hl(i)}const n=ST[t.type];return to(new n(t.flatCoordinates,t.layout,t.ends),!1,e)}class ET extends Dy{constructor(){super()}getType(){return"json"}readFeature(e,n){return this.readFeatureFromObject(ol(e),this.getReadOptions(e,n))}readFeatures(e,n){return this.readFeaturesFromObject(ol(e),this.getReadOptions(e,n))}readFeatureFromObject(e,n){return pe()}readFeaturesFromObject(e,n){return pe()}readGeometry(e,n){return this.readGeometryFromObject(ol(e),this.getReadOptions(e,n))}readGeometryFromObject(e,n){return pe()}readProjection(e){return this.readProjectionFromObject(ol(e))}readProjectionFromObject(e){return pe()}writeFeature(e,n){return JSON.stringify(this.writeFeatureObject(e,n))}writeFeatureObject(e,n){return pe()}writeFeatures(e,n){return JSON.stringify(this.writeFeaturesObject(e,n))}writeFeaturesObject(e,n){return pe()}writeGeometry(e,n){return JSON.stringify(this.writeGeometryObject(e,n))}writeGeometryObject(e,n){return pe()}}function ol(t){if(typeof t=="string"){const e=JSON.parse(t);return e||null}return t!==null?t:null}class MT extends ET{constructor(e){e=e||{},super(),this.dataProjection=Ae(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=Ae(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,n){let i=null;e.type==="Feature"?i=e:i={type:"Feature",geometry:e,properties:null};const s=tf(i.geometry);if(this.featureClass===en)return Gy({geometry:s,id:i.id,properties:i.properties},n);const r=new La;return this.geometryName_?r.setGeometryName(this.geometryName_):this.extractGeometryName_&&i.geometry_name&&r.setGeometryName(i.geometry_name),r.setGeometry(ef(s,n)),"id"in i&&r.setId(i.id),i.properties&&r.setProperties(i.properties,!0),r}readFeaturesFromObject(e,n){const i=e;let s=null;if(i.type==="FeatureCollection"){const r=e;s=[];const o=r.features;for(let a=0,l=o.length;a<l;++a){const c=this.readFeatureFromObject(o[a],n);c&&s.push(c)}}else s=[this.readFeatureFromObject(e,n)];return s.flat()}readGeometryFromObject(e,n){return xT(e,n)}readProjectionFromObject(e){const n=e.crs;let i;if(n)if(n.type=="name")i=Ae(n.properties.name);else if(n.type==="EPSG")i=Ae("EPSG:"+n.properties.code);else throw new Error("Unknown SRS type");else i=this.dataProjection;return i}writeFeatureObject(e,n){n=this.adaptOptions(n);const i={type:"Feature",geometry:null,properties:null},s=e.getId();if(s!==void 0&&(i.id=s),!e.hasProperties())return i;const r=e.getProperties(),o=e.getGeometry();return o&&(i.geometry=Mh(o,n),delete r[e.getGeometryName()]),Ds(r)||(i.properties=r),i}writeFeaturesObject(e,n){n=this.adaptOptions(n);const i=[];for(let s=0,r=e.length;s<r;++s)i.push(this.writeFeatureObject(e[s],n));return{type:"FeatureCollection",features:i}}writeGeometryObject(e,n){return Mh(e,this.adaptOptions(n))}}function tf(t,e){if(!t)return null;let n;switch(t.type){case"Point":{n=kT(t);break}case"LineString":{n=PT(t);break}case"Polygon":{n=IT(t);break}case"MultiPoint":{n=RT(t);break}case"MultiLineString":{n=TT(t);break}case"MultiPolygon":{n=AT(t);break}case"GeometryCollection":{n=CT(t);break}default:throw new Error("Unsupported GeoJSON type: "+t.type)}return n}function xT(t,e){const n=tf(t);return ef(n,e)}function CT(t,e){return t.geometries.map(function(i){return tf(i)})}function kT(t){const e=t.coordinates;return{type:"Point",flatCoordinates:e,layout:Hs(e.length)}}function PT(t){var i;const e=t.coordinates,n=e.flat();return{type:"LineString",flatCoordinates:n,ends:[n.length],layout:Hs(((i=e[0])==null?void 0:i.length)||2)}}function TT(t){var r,o;const e=t.coordinates,n=((o=(r=e[0])==null?void 0:r[0])==null?void 0:o.length)||2,i=[],s=Pa(i,0,e,n);return{type:"MultiLineString",flatCoordinates:i,ends:s,layout:Hs(n)}}function RT(t){var n;const e=t.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:Hs(((n=e[0])==null?void 0:n.length)||2)}}function AT(t){var r,o;const e=t.coordinates,n=[],i=((o=(r=e[0])==null?void 0:r[0])==null?void 0:o[0].length)||2,s=I_(n,0,e,i);return{type:"MultiPolygon",flatCoordinates:n,ends:s,layout:Hs(i)}}function IT(t){var r,o;const e=t.coordinates,n=[],i=(o=(r=e[0])==null?void 0:r[0])==null?void 0:o.length,s=Pa(n,0,e,i);return{type:"Polygon",flatCoordinates:n,ends:s,layout:Hs(i)}}function Mh(t,e){t=to(t,!0,e);const n=t.getType();let i;switch(n){case"Point":{i=GT(t);break}case"LineString":{i=OT(t);break}case"Polygon":{i=zT(t,e);break}case"MultiPoint":{i=NT(t);break}case"MultiLineString":{i=FT(t);break}case"MultiPolygon":{i=DT(t,e);break}case"GeometryCollection":{i=LT(t,e);break}case"Circle":{i={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+n)}return i}function LT(t,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:t.getGeometriesArray().map(function(i){return Mh(i,e)})}}function OT(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}function FT(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}function NT(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}function DT(t,e){let n;return e&&(n=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(n)}}function GT(t,e){return{type:"Point",coordinates:t.getCoordinates()}}function zT(t,e){let n;return e&&(n=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(n)}}const BT="http://www.w3.org/2001/XMLSchema-instance";function it(t,e){return jy().createElementNS(t,e)}function Xl(t,e){return zy(t,e,[]).join("")}function zy(t,e,n){if(t.nodeType==Node.CDATA_SECTION_NODE||t.nodeType==Node.TEXT_NODE)n.push(t.nodeValue);else{let i;for(i=t.firstChild;i;i=i.nextSibling)zy(i,e,n)}return n}function al(t){return"documentElement"in t}function jT(t,e,n){return t.getAttributeNS(e,n)||""}function ll(t){return new DOMParser().parseFromString(t,"application/xml")}function WT(t,e){return function(n,i){const s=t.call(this,n,i);if(s!==void 0){const r=i[i.length-1];Yt(r,s)}}}function lt(t,e){return function(n,i){const s=t.call(e!==void 0?e:this,n,i);s!==void 0&&i[i.length-1].push(s)}}function Ge(t,e){return function(n,i){const s=t.call(e!==void 0?e:this,n,i);s!==void 0&&(i[i.length-1]=s)}}function _e(t,e){return function(n,i,s){t.call(e!==void 0?e:this,n,i,s),s[s.length-1].node.appendChild(n)}}function Pr(t,e){return function(n,i,s){const o=i[i.length-1].node;let a=t;a===void 0&&(a=s);const l=e!==void 0?e:o.namespaceURI;return it(l,a)}}const By=Pr();function Tr(t,e,n,i){let s;for(s=e.firstElementChild;s;s=s.nextElementSibling){const r=t[s.namespaceURI];if(r!==void 0){const o=r[s.localName];o!==void 0&&o.call(i,s,n)}}}function st(t,e,n,i,s){return i.push(t),Tr(e,n,i,s),i.pop()}function VT(t,e,n,i,s,r){const o=(s!==void 0?s:n).length;let a,l;for(let c=0;c<o;++c)a=n[c],a!==void 0&&(l=e.call(r!==void 0?r:this,a,i,s!==void 0?s[c]:void 0),l!==void 0&&t[l.namespaceURI][l.localName].call(r,l,a,i))}function Ht(t,e,n,i,s,r,o){return s.push(t),VT(e,n,i,s,r,o),s.pop()}let Pu;function UT(){return Pu===void 0&&typeof XMLSerializer<"u"&&(Pu=new XMLSerializer),Pu}let Tu;function jy(){return Tu===void 0&&typeof document<"u"&&(Tu=document.implementation.createDocument("","",null)),Tu}class KT extends Dy{constructor(){super(),this.xmlSerializer_=UT()}getType(){return"xml"}readFeature(e,n){if(!e)return null;if(typeof e=="string"){const i=ll(e);return this.readFeatureFromDocument(i,n)}return al(e)?this.readFeatureFromDocument(e,n):this.readFeatureFromNode(e,n)}readFeatureFromDocument(e,n){const i=this.readFeaturesFromDocument(e,n);return i.length>0?i[0]:null}readFeatureFromNode(e,n){return null}readFeatures(e,n){if(!e)return[];if(typeof e=="string"){const i=ll(e);return this.readFeaturesFromDocument(i,n)}return al(e)?this.readFeaturesFromDocument(e,n):this.readFeaturesFromNode(e,n)}readFeaturesFromDocument(e,n){const i=[];for(let s=e.firstChild;s;s=s.nextSibling)s.nodeType==Node.ELEMENT_NODE&&Yt(i,this.readFeaturesFromNode(s,n));return i}readFeaturesFromNode(e,n){return pe()}readGeometry(e,n){if(!e)return null;if(typeof e=="string"){const i=ll(e);return this.readGeometryFromDocument(i,n)}return al(e)?this.readGeometryFromDocument(e,n):this.readGeometryFromNode(e,n)}readGeometryFromDocument(e,n){return null}readGeometryFromNode(e,n){return null}readProjection(e){if(!e)return null;if(typeof e=="string"){const n=ll(e);return this.readProjectionFromDocument(n)}return al(e)?this.readProjectionFromDocument(e):this.readProjectionFromNode(e)}readProjectionFromDocument(e){return this.dataProjection}readProjectionFromNode(e){return this.dataProjection}writeFeature(e,n){const i=this.writeFeatureNode(e,n);return this.xmlSerializer_.serializeToString(i)}writeFeatureNode(e,n){return null}writeFeatures(e,n){const i=this.writeFeaturesNode(e,n);return this.xmlSerializer_.serializeToString(i)}writeFeaturesNode(e,n){return null}writeGeometry(e,n){const i=this.writeGeometryNode(e,n);return this.xmlSerializer_.serializeToString(i)}writeGeometryNode(e,n){return null}}const Uc="http://www.opengis.net/gml",$T=/^\s*$/;class Ee extends KT{constructor(e){super(),e=e||{},this.featureType=e.featureType,this.featureNS=e.featureNS,this.srsName=e.srsName,this.schemaLocation="",this.FEATURE_COLLECTION_PARSERS={},this.FEATURE_COLLECTION_PARSERS[this.namespace]={featureMember:lt(this.readFeaturesInternal),featureMembers:Ge(this.readFeaturesInternal)},this.supportedMediaTypes=["application/gml+xml"]}readFeaturesInternal(e,n){const i=e.localName;let s=null;if(i=="FeatureCollection")s=st([],this.FEATURE_COLLECTION_PARSERS,e,n,this);else if(i=="featureMembers"||i=="featureMember"||i=="member"){const r=n[0];let o=r.featureType,a=r.featureNS;const l="p",c="p0";if(!o&&e.childNodes){o=[],a={};for(let d=0,f=e.childNodes.length;d<f;++d){const g=e.childNodes[d];if(g.nodeType===1){const m=g.nodeName.split(":").pop();if(!o.includes(m)){let p="",_=0;const y=g.namespaceURI;for(const w in a){if(a[w]===y){p=w;break}++_}p||(p=l+_,a[p]=y),o.push(p+":"+m)}}}i!="featureMember"&&(r.featureType=o,r.featureNS=a)}if(typeof a=="string"){const d=a;a={},a[c]=d}const u={},h=Array.isArray(o)?o:[o];for(const d in a){const f={};for(let g=0,m=h.length;g<m;++g)(h[g].includes(":")?h[g].split(":")[0]:c)===d&&(f[h[g].split(":").pop()]=i=="featureMembers"?lt(this.readFeatureElement,this):Ge(this.readFeatureElement,this));u[a[d]]=f}i=="featureMember"||i=="member"?s=st(void 0,u,e,n):s=st([],u,e,n)}return s===null&&(s=[]),s}readGeometryOrExtent(e,n){const i=n[0];return i.srsName=e.firstElementChild.getAttribute("srsName"),i.srsDimension=e.firstElementChild.getAttribute("srsDimension"),st(null,this.GEOMETRY_PARSERS,e,n,this)}readExtentElement(e,n){const i=n[0],s=this.readGeometryOrExtent(e,n);return s?Qd(s,i):void 0}readGeometryElement(e,n){const i=n[0],s=this.readGeometryOrExtent(e,n);return s?to(s,!1,i):void 0}readFeatureElementInternal(e,n,i){let s;const r={};for(let l=e.firstElementChild;l;l=l.nextElementSibling){let c;const u=l.localName;l.childNodes.length===0||l.childNodes.length===1&&(l.firstChild.nodeType===3||l.firstChild.nodeType===4)?(c=Xl(l,!1),$T.test(c)&&(c=void 0)):(i&&(c=u==="boundedBy"?this.readExtentElement(l,n):this.readGeometryElement(l,n)),c?u!=="boundedBy"&&(s=u):c=this.readFeatureElementInternal(l,n,!1));const h=l.attributes.length;if(h>0&&!(c instanceof Td)){c={_content_:c};for(let d=0;d<h;d++){const f=l.attributes[d].name;c[f]=l.attributes[d].value}}r[u]?(r[u]instanceof Array||(r[u]=[r[u]]),r[u].push(c)):r[u]=c}if(!i)return r;const o=new La(r);s&&o.setGeometryName(s);const a=e.getAttribute("fid")||jT(e,this.namespace,"id");return a&&o.setId(a),o}readFeatureElement(e,n){return this.readFeatureElementInternal(e,n,!0)}readPoint(e,n){const i=this.readFlatCoordinatesFromNode(e,n);if(i)return new ra(i,"XYZ")}readMultiPoint(e,n){const i=st([],this.MULTIPOINT_PARSERS,e,n,this);if(i)return new Oa(i)}readMultiLineString(e,n){const i=st([],this.MULTILINESTRING_PARSERS,e,n,this);if(i)return new Kr(i)}readMultiPolygon(e,n){const i=st([],this.MULTIPOLYGON_PARSERS,e,n,this);if(i)return new $r(i)}pointMemberParser(e,n){Tr(this.POINTMEMBER_PARSERS,e,n,this)}lineStringMemberParser(e,n){Tr(this.LINESTRINGMEMBER_PARSERS,e,n,this)}polygonMemberParser(e,n){Tr(this.POLYGONMEMBER_PARSERS,e,n,this)}readLineString(e,n){const i=this.readFlatCoordinatesFromNode(e,n);if(i)return new ds(i,"XYZ")}readFlatLinearRing(e,n){const i=st(null,this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,n,this);if(i)return i}readLinearRing(e,n){const i=this.readFlatCoordinatesFromNode(e,n);if(i)return new jr(i,"XYZ")}readPolygon(e,n){const i=st([null],this.FLAT_LINEAR_RINGS_PARSERS,e,n,this);if(i&&i[0]){const s=i[0],r=[s.length];let o,a;for(o=1,a=i.length;o<a;++o)Yt(s,i[o]),r.push(s.length);return new oi(s,"XYZ",r)}}readFlatCoordinatesFromNode(e,n){return st(null,this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,n,this)}readGeometryFromNode(e,n){const i=this.readGeometryElement(e,[this.getReadOptions(e,n||{})]);return i||null}readFeaturesFromNode(e,n){const i={featureType:this.featureType,featureNS:this.featureNS};return i&&Object.assign(i,this.getReadOptions(e,n)),this.readFeaturesInternal(e,[i])||[]}readProjectionFromNode(e){return Ae(this.srsName?this.srsName:e.firstElementChild.getAttribute("srsName"))}}Ee.prototype.namespace=Uc;Ee.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{}};Ee.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{}};Ee.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{}};Ee.prototype.MULTIPOINT_PARSERS={"http://www.opengis.net/gml":{pointMember:lt(Ee.prototype.pointMemberParser),pointMembers:lt(Ee.prototype.pointMemberParser)}};Ee.prototype.MULTILINESTRING_PARSERS={"http://www.opengis.net/gml":{lineStringMember:lt(Ee.prototype.lineStringMemberParser),lineStringMembers:lt(Ee.prototype.lineStringMemberParser)}};Ee.prototype.MULTIPOLYGON_PARSERS={"http://www.opengis.net/gml":{polygonMember:lt(Ee.prototype.polygonMemberParser),polygonMembers:lt(Ee.prototype.polygonMemberParser)}};Ee.prototype.POINTMEMBER_PARSERS={"http://www.opengis.net/gml":{Point:lt(Ee.prototype.readFlatCoordinatesFromNode)}};Ee.prototype.LINESTRINGMEMBER_PARSERS={"http://www.opengis.net/gml":{LineString:lt(Ee.prototype.readLineString)}};Ee.prototype.POLYGONMEMBER_PARSERS={"http://www.opengis.net/gml":{Polygon:lt(Ee.prototype.readPolygon)}};Ee.prototype.RING_PARSERS={"http://www.opengis.net/gml":{LinearRing:Ge(Ee.prototype.readFlatLinearRing)}};function cl(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function si(t,e){t.appendChild(jy().createTextNode(e))}const qT=Uc+" http://schemas.opengis.net/gml/2.1.2/feature.xsd",HT={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};class Te extends Ee{constructor(e){e=e||{},super(e),this.FEATURE_COLLECTION_PARSERS[Uc].featureMember=lt(this.readFeaturesInternal),this.schemaLocation=e.schemaLocation?e.schemaLocation:qT}readFlatCoordinates(e,n){const i=Xl(e,!1).replace(/^\s*|\s*$/g,""),r=n[0].srsName;let o="enu";if(r){const c=Ae(r);c&&(o=c.getAxisOrientation())}const a=i.trim().split(/\s+/),l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c].split(/,+/),d=parseFloat(h[0]),f=parseFloat(h[1]),g=h.length===3?parseFloat(h[2]):0;o.substr(0,2)==="en"?l.push(d,f,g):l.push(f,d,g)}return l}readBox(e,n){const i=st([null],this.BOX_PARSERS_,e,n,this);return jn(i[1][0],i[1][1],i[1][3],i[1][4])}innerBoundaryIsParser(e,n){const i=st(void 0,this.RING_PARSERS,e,n,this);i&&n[n.length-1].push(i)}outerBoundaryIsParser(e,n){const i=st(void 0,this.RING_PARSERS,e,n,this);if(i){const s=n[n.length-1];s[0]=i}}GEOMETRY_NODE_FACTORY_(e,n,i){const s=n[n.length-1],r=s.multiSurface,o=s.surface,a=s.multiCurve;return Array.isArray(e)?i="Envelope":(i=e.getType(),i==="MultiPolygon"&&r===!0?i="MultiSurface":i==="Polygon"&&o===!0?i="Surface":i==="MultiLineString"&&a===!0&&(i="MultiCurve")),it("http://www.opengis.net/gml",i)}writeFeatureElement(e,n,i){const s=n.getId();s&&e.setAttribute("fid",s);const r=i[i.length-1],o=r.featureNS,a=n.getGeometryName();r.serializers||(r.serializers={},r.serializers[o]={});const l=[],c=[];if(n.hasProperties()){const h=n.getProperties();for(const d in h){const f=h[d];f!==null&&(l.push(d),c.push(f),d==a||typeof f.getSimplifiedGeometry=="function"?d in r.serializers[o]||(r.serializers[o][d]=_e(this.writeGeometryElement,this)):d in r.serializers[o]||(r.serializers[o][d]=_e(si)))}}const u=Object.assign({},r);u.node=e,Ht(u,r.serializers,Pr(void 0,o),c,i,l)}writeCurveOrLineString(e,n,i){const r=i[i.length-1].srsName;if(e.nodeName!=="LineStringSegment"&&r&&e.setAttribute("srsName",r),e.nodeName==="LineString"||e.nodeName==="LineStringSegment"){const o=this.createCoordinatesNode_(e.namespaceURI);e.appendChild(o),this.writeCoordinates_(o,n,i)}else if(e.nodeName==="Curve"){const o=it(e.namespaceURI,"segments");e.appendChild(o),this.writeCurveSegments_(o,n,i)}}writeLineStringOrCurveMember(e,n,i){const s=this.GEOMETRY_NODE_FACTORY_(n,i);s&&(e.appendChild(s),this.writeCurveOrLineString(s,n,i))}writeMultiCurveOrLineString(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName,a=s.curve;o&&e.setAttribute("srsName",o);const l=n.getLineStrings();Ht({node:e,hasZ:r,srsName:o,curve:a},this.LINESTRINGORCURVEMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,i,void 0,this)}writeGeometryElement(e,n,i){const s=i[i.length-1],r=Object.assign({},s);r.node=e;let o;Array.isArray(n)?o=Qd(n,s):o=to(n,!0,s),Ht(r,this.GEOMETRY_SERIALIZERS,this.GEOMETRY_NODE_FACTORY_,[o],i,void 0,this)}createCoordinatesNode_(e){const n=it(e,"coordinates");return n.setAttribute("decimal","."),n.setAttribute("cs",","),n.setAttribute("ts"," "),n}writeCoordinates_(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName,a=n.getCoordinates(),l=a.length,c=new Array(l);for(let u=0;u<l;++u){const h=a[u];c[u]=this.getCoords_(h,o,r)}si(e,c.join(" "))}writeCurveSegments_(e,n,i){const s=it(e.namespaceURI,"LineStringSegment");e.appendChild(s),this.writeCurveOrLineString(s,n,i)}writeSurfaceOrPolygon(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName;if(e.nodeName!=="PolygonPatch"&&o&&e.setAttribute("srsName",o),e.nodeName==="Polygon"||e.nodeName==="PolygonPatch"){const a=n.getLinearRings();Ht({node:e,hasZ:r,srsName:o},this.RING_SERIALIZERS,this.RING_NODE_FACTORY_,a,i,void 0,this)}else if(e.nodeName==="Surface"){const a=it(e.namespaceURI,"patches");e.appendChild(a),this.writeSurfacePatches_(a,n,i)}}RING_NODE_FACTORY_(e,n,i){const s=n[n.length-1],r=s.node,o=s.exteriorWritten;return o===void 0&&(s.exteriorWritten=!0),it(r.namespaceURI,o!==void 0?"innerBoundaryIs":"outerBoundaryIs")}writeSurfacePatches_(e,n,i){const s=it(e.namespaceURI,"PolygonPatch");e.appendChild(s),this.writeSurfaceOrPolygon(s,n,i)}writeRing(e,n,i){const s=it(e.namespaceURI,"LinearRing");e.appendChild(s),this.writeLinearRing(s,n,i)}getCoords_(e,n,i){let s="enu";n&&(s=Ae(n).getAxisOrientation());let r=s.substr(0,2)==="en"?e[0]+","+e[1]:e[1]+","+e[0];if(i){const o=e[2]||0;r+=","+o}return r}writePoint(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName;o&&e.setAttribute("srsName",o);const a=this.createCoordinatesNode_(e.namespaceURI);e.appendChild(a);const l=n.getCoordinates(),c=this.getCoords_(l,o,r);si(a,c)}writeMultiPoint(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName;o&&e.setAttribute("srsName",o);const a=n.getPoints();Ht({node:e,hasZ:r,srsName:o},this.POINTMEMBER_SERIALIZERS,Pr("pointMember"),a,i,void 0,this)}writePointMember(e,n,i){const s=it(e.namespaceURI,"Point");e.appendChild(s),this.writePoint(s,n,i)}writeLinearRing(e,n,i){const r=i[i.length-1].srsName;r&&e.setAttribute("srsName",r);const o=this.createCoordinatesNode_(e.namespaceURI);e.appendChild(o),this.writeCoordinates_(o,n,i)}writeMultiSurfaceOrPolygon(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName,a=s.surface;o&&e.setAttribute("srsName",o);const l=n.getPolygons();Ht({node:e,hasZ:r,srsName:o,surface:a},this.SURFACEORPOLYGONMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,i,void 0,this)}writeSurfaceOrPolygonMember(e,n,i){const s=this.GEOMETRY_NODE_FACTORY_(n,i);s&&(e.appendChild(s),this.writeSurfaceOrPolygon(s,n,i))}writeEnvelope(e,n,i){const r=i[i.length-1].srsName;r&&e.setAttribute("srsName",r);const o=["lowerCorner","upperCorner"],a=[n[0]+" "+n[1],n[2]+" "+n[3]];Ht({node:e},this.ENVELOPE_SERIALIZERS,By,a,i,o,this)}MULTIGEOMETRY_MEMBER_NODE_FACTORY_(e,n,i){const s=n[n.length-1].node;return it("http://www.opengis.net/gml",HT[s.nodeName])}}Te.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{coordinates:Ge(Te.prototype.readFlatCoordinates)}};Te.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{innerBoundaryIs:Te.prototype.innerBoundaryIsParser,outerBoundaryIs:Te.prototype.outerBoundaryIsParser}};Te.prototype.BOX_PARSERS_={"http://www.opengis.net/gml":{coordinates:lt(Te.prototype.readFlatCoordinates)}};Te.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{Point:Ge(Ee.prototype.readPoint),MultiPoint:Ge(Ee.prototype.readMultiPoint),LineString:Ge(Ee.prototype.readLineString),MultiLineString:Ge(Ee.prototype.readMultiLineString),LinearRing:Ge(Ee.prototype.readLinearRing),Polygon:Ge(Ee.prototype.readPolygon),MultiPolygon:Ge(Ee.prototype.readMultiPolygon),Box:Ge(Te.prototype.readBox)}};Te.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml":{Curve:_e(Te.prototype.writeCurveOrLineString),MultiCurve:_e(Te.prototype.writeMultiCurveOrLineString),Point:_e(Te.prototype.writePoint),MultiPoint:_e(Te.prototype.writeMultiPoint),LineString:_e(Te.prototype.writeCurveOrLineString),MultiLineString:_e(Te.prototype.writeMultiCurveOrLineString),LinearRing:_e(Te.prototype.writeLinearRing),Polygon:_e(Te.prototype.writeSurfaceOrPolygon),MultiPolygon:_e(Te.prototype.writeMultiSurfaceOrPolygon),Surface:_e(Te.prototype.writeSurfaceOrPolygon),MultiSurface:_e(Te.prototype.writeMultiSurfaceOrPolygon),Envelope:_e(Te.prototype.writeEnvelope)}};Te.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{lineStringMember:_e(Te.prototype.writeLineStringOrCurveMember),curveMember:_e(Te.prototype.writeLineStringOrCurveMember)}};Te.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml":{outerBoundaryIs:_e(Te.prototype.writeRing),innerBoundaryIs:_e(Te.prototype.writeRing)}};Te.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{pointMember:_e(Te.prototype.writePointMember)}};Te.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{surfaceMember:_e(Te.prototype.writeSurfaceOrPolygonMember),polygonMember:_e(Te.prototype.writeSurfaceOrPolygonMember)}};Te.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml":{lowerCorner:_e(si),upperCorner:_e(si)}};const ZT=Uc+" http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",XT={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};class ae extends Ee{constructor(e){e=e||{},super(e),this.surface_=e.surface!==void 0?e.surface:!1,this.curve_=e.curve!==void 0?e.curve:!1,this.multiCurve_=e.multiCurve!==void 0?e.multiCurve:!0,this.multiSurface_=e.multiSurface!==void 0?e.multiSurface:!0,this.schemaLocation=e.schemaLocation?e.schemaLocation:ZT,this.hasZ=e.hasZ!==void 0?e.hasZ:!1}readMultiCurve(e,n){const i=st([],this.MULTICURVE_PARSERS,e,n,this);if(i)return new Kr(i)}readFlatCurveRing(e,n){const i=st([],this.MULTICURVE_PARSERS,e,n,this),s=[];for(let r=0,o=i.length;r<o;++r)Yt(s,i[r].getFlatCoordinates());return s}readMultiSurface(e,n){const i=st([],this.MULTISURFACE_PARSERS,e,n,this);if(i)return new $r(i)}curveMemberParser(e,n){Tr(this.CURVEMEMBER_PARSERS,e,n,this)}surfaceMemberParser(e,n){Tr(this.SURFACEMEMBER_PARSERS,e,n,this)}readPatch(e,n){return st([null],this.PATCHES_PARSERS,e,n,this)}readSegment(e,n){return st([],this.SEGMENTS_PARSERS,e,n,this)}readPolygonPatch(e,n){return st([null],this.FLAT_LINEAR_RINGS_PARSERS,e,n,this)}readLineStringSegment(e,n){return st([null],this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,n,this)}interiorParser(e,n){const i=st(void 0,this.RING_PARSERS,e,n,this);i&&n[n.length-1].push(i)}exteriorParser(e,n){const i=st(void 0,this.RING_PARSERS,e,n,this);if(i){const s=n[n.length-1];s[0]=i}}readSurface(e,n){const i=st([null],this.SURFACE_PARSERS,e,n,this);if(i&&i[0]){const s=i[0],r=[s.length];let o,a;for(o=1,a=i.length;o<a;++o)Yt(s,i[o]),r.push(s.length);return new oi(s,"XYZ",r)}}readCurve(e,n){const i=st([null],this.CURVE_PARSERS,e,n,this);if(i)return new ds(i,"XYZ")}readEnvelope(e,n){const i=st([null],this.ENVELOPE_PARSERS,e,n,this);return jn(i[1][0],i[1][1],i[2][0],i[2][1])}readFlatPos(e,n){let i=Xl(e,!1);const s=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,r=[];let o;for(;o=s.exec(i);)r.push(parseFloat(o[1])),i=i.substr(o[0].length);if(i!=="")return;const l=n[0].srsName;let c="enu";if(l&&(c=Ae(l).getAxisOrientation()),c==="neu"){let h,d;for(h=0,d=r.length;h<d;h+=3){const f=r[h],g=r[h+1];r[h]=g,r[h+1]=f}}const u=r.length;if(u==2&&r.push(0),u!==0)return r}readFlatPosList(e,n){const i=Xl(e,!1).replace(/^\s*|\s*$/g,""),s=n[0],r=s.srsName,o=s.srsDimension;let a="enu";r&&(a=Ae(r).getAxisOrientation());const l=i.split(/\s+/);let c=2;e.getAttribute("srsDimension")?c=cl(e.getAttribute("srsDimension")):e.getAttribute("dimension")?c=cl(e.getAttribute("dimension")):e.parentNode.getAttribute("srsDimension")?c=cl(e.parentNode.getAttribute("srsDimension")):o&&(c=cl(o));let u,h,d;const f=[];for(let g=0,m=l.length;g<m;g+=c)u=parseFloat(l[g]),h=parseFloat(l[g+1]),d=c===3?parseFloat(l[g+2]):0,a.substr(0,2)==="en"?f.push(u,h,d):f.push(h,u,d);return f}writePos_(e,n,i){const s=i[i.length-1],r=s.hasZ,o=r?"3":"2";e.setAttribute("srsDimension",o);const a=s.srsName;let l="enu";a&&(l=Ae(a).getAxisOrientation());const c=n.getCoordinates();let u;if(l.substr(0,2)==="en"?u=c[0]+" "+c[1]:u=c[1]+" "+c[0],r){const h=c[2]||0;u+=" "+h}si(e,u)}getCoords_(e,n,i){let s="enu";n&&(s=Ae(n).getAxisOrientation());let r=s.substr(0,2)==="en"?e[0]+" "+e[1]:e[1]+" "+e[0];if(i){const o=e[2]||0;r+=" "+o}return r}writePosList_(e,n,i){const s=i[i.length-1],r=s.hasZ,o=r?"3":"2";e.setAttribute("srsDimension",o);const a=s.srsName,l=n.getCoordinates(),c=l.length,u=new Array(c);let h;for(let d=0;d<c;++d)h=l[d],u[d]=this.getCoords_(h,a,r);si(e,u.join(" "))}writePoint(e,n,i){const r=i[i.length-1].srsName;r&&e.setAttribute("srsName",r);const o=it(e.namespaceURI,"pos");e.appendChild(o),this.writePos_(o,n,i)}writeEnvelope(e,n,i){const r=i[i.length-1].srsName;r&&e.setAttribute("srsName",r);const o=["lowerCorner","upperCorner"],a=[n[0]+" "+n[1],n[2]+" "+n[3]];Ht({node:e},this.ENVELOPE_SERIALIZERS,By,a,i,o,this)}writeLinearRing(e,n,i){const r=i[i.length-1].srsName;r&&e.setAttribute("srsName",r);const o=it(e.namespaceURI,"posList");e.appendChild(o),this.writePosList_(o,n,i)}RING_NODE_FACTORY_(e,n,i){const s=n[n.length-1],r=s.node,o=s.exteriorWritten;return o===void 0&&(s.exteriorWritten=!0),it(r.namespaceURI,o!==void 0?"interior":"exterior")}writeSurfaceOrPolygon(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName;if(e.nodeName!=="PolygonPatch"&&o&&e.setAttribute("srsName",o),e.nodeName==="Polygon"||e.nodeName==="PolygonPatch"){const a=n.getLinearRings();Ht({node:e,hasZ:r,srsName:o},this.RING_SERIALIZERS,this.RING_NODE_FACTORY_,a,i,void 0,this)}else if(e.nodeName==="Surface"){const a=it(e.namespaceURI,"patches");e.appendChild(a),this.writeSurfacePatches_(a,n,i)}}writeCurveOrLineString(e,n,i){const r=i[i.length-1].srsName;if(e.nodeName!=="LineStringSegment"&&r&&e.setAttribute("srsName",r),e.nodeName==="LineString"||e.nodeName==="LineStringSegment"){const o=it(e.namespaceURI,"posList");e.appendChild(o),this.writePosList_(o,n,i)}else if(e.nodeName==="Curve"){const o=it(e.namespaceURI,"segments");e.appendChild(o),this.writeCurveSegments_(o,n,i)}}writeMultiSurfaceOrPolygon(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName,a=s.surface;o&&e.setAttribute("srsName",o);const l=n.getPolygons();Ht({node:e,hasZ:r,srsName:o,surface:a},this.SURFACEORPOLYGONMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,i,void 0,this)}writeMultiPoint(e,n,i){const s=i[i.length-1],r=s.srsName,o=s.hasZ;r&&e.setAttribute("srsName",r);const a=n.getPoints();Ht({node:e,hasZ:o,srsName:r},this.POINTMEMBER_SERIALIZERS,Pr("pointMember"),a,i,void 0,this)}writeMultiCurveOrLineString(e,n,i){const s=i[i.length-1],r=s.hasZ,o=s.srsName,a=s.curve;o&&e.setAttribute("srsName",o);const l=n.getLineStrings();Ht({node:e,hasZ:r,srsName:o,curve:a},this.LINESTRINGORCURVEMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,l,i,void 0,this)}writeRing(e,n,i){const s=it(e.namespaceURI,"LinearRing");e.appendChild(s),this.writeLinearRing(s,n,i)}writeSurfaceOrPolygonMember(e,n,i){const s=this.GEOMETRY_NODE_FACTORY_(n,i);s&&(e.appendChild(s),this.writeSurfaceOrPolygon(s,n,i))}writePointMember(e,n,i){const s=it(e.namespaceURI,"Point");e.appendChild(s),this.writePoint(s,n,i)}writeLineStringOrCurveMember(e,n,i){const s=this.GEOMETRY_NODE_FACTORY_(n,i);s&&(e.appendChild(s),this.writeCurveOrLineString(s,n,i))}writeSurfacePatches_(e,n,i){const s=it(e.namespaceURI,"PolygonPatch");e.appendChild(s),this.writeSurfaceOrPolygon(s,n,i)}writeCurveSegments_(e,n,i){const s=it(e.namespaceURI,"LineStringSegment");e.appendChild(s),this.writeCurveOrLineString(s,n,i)}writeGeometryElement(e,n,i){const s=i[i.length-1],r=Object.assign({},s);r.node=e;let o;Array.isArray(n)?o=Qd(n,s):o=to(n,!0,s),Ht(r,this.GEOMETRY_SERIALIZERS,this.GEOMETRY_NODE_FACTORY_,[o],i,void 0,this)}writeFeatureElement(e,n,i){const s=n.getId();s&&e.setAttribute("fid",s);const r=i[i.length-1],o=r.featureNS,a=n.getGeometryName();r.serializers||(r.serializers={},r.serializers[o]={});const l=[],c=[];if(n.hasProperties()){const h=n.getProperties();for(const d in h){const f=h[d];f!==null&&(l.push(d),c.push(f),d==a||typeof f.getSimplifiedGeometry=="function"?d in r.serializers[o]||(r.serializers[o][d]=_e(this.writeGeometryElement,this)):d in r.serializers[o]||(r.serializers[o][d]=_e(si)))}}const u=Object.assign({},r);u.node=e,Ht(u,r.serializers,Pr(void 0,o),c,i,l)}writeFeatureMembers_(e,n,i){const s=i[i.length-1],r=s.featureType,o=s.featureNS,a={};a[o]={},a[o][r]=_e(this.writeFeatureElement,this);const l=Object.assign({},s);l.node=e,Ht(l,a,Pr(r,o),n,i)}MULTIGEOMETRY_MEMBER_NODE_FACTORY_(e,n,i){const s=n[n.length-1].node;return it(this.namespace,XT[s.nodeName])}GEOMETRY_NODE_FACTORY_(e,n,i){const s=n[n.length-1],r=s.multiSurface,o=s.surface,a=s.curve,l=s.multiCurve;return Array.isArray(e)?i="Envelope":(i=e.getType(),i==="MultiPolygon"&&r===!0?i="MultiSurface":i==="Polygon"&&o===!0?i="Surface":i==="LineString"&&a===!0?i="Curve":i==="MultiLineString"&&l===!0&&(i="MultiCurve")),it(this.namespace,i)}writeGeometryNode(e,n){n=this.adaptOptions(n);const i=it(this.namespace,"geom"),s={node:i,hasZ:this.hasZ,srsName:this.srsName,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_};return n&&Object.assign(s,n),this.writeGeometryElement(i,e,[s]),i}writeFeaturesNode(e,n){n=this.adaptOptions(n);const i=it(this.namespace,"featureMembers");i.setAttributeNS(BT,"xsi:schemaLocation",this.schemaLocation);const s={srsName:this.srsName,hasZ:this.hasZ,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_,featureNS:this.featureNS,featureType:this.featureType};return n&&Object.assign(s,n),this.writeFeatureMembers_(i,e,[s]),i}}ae.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{pos:Ge(ae.prototype.readFlatPos),posList:Ge(ae.prototype.readFlatPosList),coordinates:Ge(Te.prototype.readFlatCoordinates)}};ae.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{interior:ae.prototype.interiorParser,exterior:ae.prototype.exteriorParser}};ae.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{Point:Ge(Ee.prototype.readPoint),MultiPoint:Ge(Ee.prototype.readMultiPoint),LineString:Ge(Ee.prototype.readLineString),MultiLineString:Ge(Ee.prototype.readMultiLineString),LinearRing:Ge(Ee.prototype.readLinearRing),Polygon:Ge(Ee.prototype.readPolygon),MultiPolygon:Ge(Ee.prototype.readMultiPolygon),Surface:Ge(ae.prototype.readSurface),MultiSurface:Ge(ae.prototype.readMultiSurface),Curve:Ge(ae.prototype.readCurve),MultiCurve:Ge(ae.prototype.readMultiCurve),Envelope:Ge(ae.prototype.readEnvelope)}};ae.prototype.MULTICURVE_PARSERS={"http://www.opengis.net/gml":{curveMember:lt(ae.prototype.curveMemberParser),curveMembers:lt(ae.prototype.curveMemberParser)}};ae.prototype.MULTISURFACE_PARSERS={"http://www.opengis.net/gml":{surfaceMember:lt(ae.prototype.surfaceMemberParser),surfaceMembers:lt(ae.prototype.surfaceMemberParser)}};ae.prototype.CURVEMEMBER_PARSERS={"http://www.opengis.net/gml":{LineString:lt(Ee.prototype.readLineString),Curve:lt(ae.prototype.readCurve)}};ae.prototype.SURFACEMEMBER_PARSERS={"http://www.opengis.net/gml":{Polygon:lt(Ee.prototype.readPolygon),Surface:lt(ae.prototype.readSurface)}};ae.prototype.SURFACE_PARSERS={"http://www.opengis.net/gml":{patches:Ge(ae.prototype.readPatch)}};ae.prototype.CURVE_PARSERS={"http://www.opengis.net/gml":{segments:Ge(ae.prototype.readSegment)}};ae.prototype.ENVELOPE_PARSERS={"http://www.opengis.net/gml":{lowerCorner:lt(ae.prototype.readFlatPosList),upperCorner:lt(ae.prototype.readFlatPosList)}};ae.prototype.PATCHES_PARSERS={"http://www.opengis.net/gml":{PolygonPatch:Ge(ae.prototype.readPolygonPatch)}};ae.prototype.SEGMENTS_PARSERS={"http://www.opengis.net/gml":{LineStringSegment:WT(ae.prototype.readLineStringSegment)}};Ee.prototype.RING_PARSERS={"http://www.opengis.net/gml":{LinearRing:Ge(Ee.prototype.readFlatLinearRing),Ring:Ge(ae.prototype.readFlatCurveRing)}};ae.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml":{exterior:_e(ae.prototype.writeRing),interior:_e(ae.prototype.writeRing)}};ae.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml":{lowerCorner:_e(si),upperCorner:_e(si)}};ae.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{surfaceMember:_e(ae.prototype.writeSurfaceOrPolygonMember),polygonMember:_e(ae.prototype.writeSurfaceOrPolygonMember)}};ae.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{pointMember:_e(ae.prototype.writePointMember)}};ae.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{lineStringMember:_e(ae.prototype.writeLineStringOrCurveMember),curveMember:_e(ae.prototype.writeLineStringOrCurveMember)}};ae.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml":{Curve:_e(ae.prototype.writeCurveOrLineString),MultiCurve:_e(ae.prototype.writeMultiCurveOrLineString),Point:_e(ae.prototype.writePoint),MultiPoint:_e(ae.prototype.writeMultiPoint),LineString:_e(ae.prototype.writeCurveOrLineString),MultiLineString:_e(ae.prototype.writeMultiCurveOrLineString),LinearRing:_e(ae.prototype.writeLinearRing),Polygon:_e(ae.prototype.writeSurfaceOrPolygon),MultiPolygon:_e(ae.prototype.writeMultiSurfaceOrPolygon),Surface:_e(ae.prototype.writeSurfaceOrPolygon),MultiSurface:_e(ae.prototype.writeMultiSurfaceOrPolygon),Envelope:_e(ae.prototype.writeEnvelope)}};const YT={type:"wms",title:"WMS: Sentinel-2 Satellitenbilder",description:"Web Map Service mit hochauflösenden Satellitenbildern vom BKG. Zeigt Hamburg aus dem Copernicus Sentinel-2 Deutschlandmosaik.",url:"https://sgx.geodatenzentrum.de/wms_sentinel2_de",params:{LAYERS:"rgb",FORMAT:"image/png",VERSION:"1.3.0",TRANSPARENT:!1},center:[9.993,53.551],zoom:12},JT={type:"osm",title:"Projektions-Playground",description:"Interaktive Karte zum Erkunden von Projektionen. Nutze map.getView().getCenter() in der DevTools-Console.",center:[9.993,53.551],zoom:12},QT={wms_basic:YT,projection_demo:JT},eR={type:"wfs",title:"WFS: Deutsche Städte",description:"Web Feature Service mit Vektordaten. Zeigt Städte in Deutschland aus Natural Earth Daten. Klicke auf Features für Details.",url:"https://ahocevar.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=ne:ne_10m_populated_places&outputFormat=application/json&bbox=5.5,47.0,15.5,55.5,EPSG:4326&maxFeatures=100",center:[10.5,51],zoom:6},tR={wfs_basic:eR},nR={key:0,class:"map-playground"},iR={class:"map-playground__info"},sR={class:"muted"},rR={key:0,class:"feature-info"},oR={class:"feature-properties"},aR={class:"property-key"},lR={class:"property-value"},cR={key:1,class:"muted"},uR={__name:"MapPlayground",props:{configId:{type:String,required:!0}},setup(t){const e=t,n=Tt(null),i=Tt(null),s=Tt(!0);let r,o,a=null;const l=ne(()=>QT[e.configId]||tR[e.configId]),c=()=>{var d,f;n.value&&(r=new aP({target:n.value,layers:[new ym({source:new hT})],view:new Hn({center:jg(((d=l.value)==null?void 0:d.center)||[10,51]),zoom:((f=l.value)==null?void 0:f.zoom)||5})}),window.map=r,r.on("singleclick",g=>{var m;i.value=null,a&&(a.setStyle(void 0),a=null),((m=l.value)==null?void 0:m.type)==="wfs"&&o&&r.forEachFeatureAtPixel(g.pixel,p=>{a=p;const _=new Ri({image:new Ur({radius:12,fill:new xi({color:"rgba(255, 140, 0, 0.8)"}),stroke:new es({color:"#1e5945",width:3})}),stroke:new es({color:"#1e5945",width:4}),fill:new xi({color:"rgba(255, 140, 0, 0.4)"})});p.setStyle(_);const y={...p.getProperties()};delete y.geometry;const w=["NAME","NAMEASCII","name","FEATURECLA","TYPE","type","POP_MAX","GN_POP","population","LATITUDE","LONGITUDE","lat","lon","ADM0NAME","SOV0NAME","country","ADM1NAME","state","TIMEZONE","timezone"],b={};for(const[E,P]of Object.entries(y))if(w.includes(E)){let k=E;E==="NAMEASCII"?k="Name (ASCII)":E==="FEATURECLA"?k="Type":E==="POP_MAX"||E==="GN_POP"?k="Population":E==="ADM0NAME"||E==="SOV0NAME"?k="Country":E==="ADM1NAME"?k="State/Region":E==="TIMEZONE"?k="Timezone":E==="LATITUDE"?k="Latitude":E==="LONGITUDE"&&(k="Longitude"),b[k]=P}i.value=Object.keys(b).length>0?b:y})}),u())},u=async()=>{if(!(!l.value||!r)){if(o&&r.removeLayer(o),s.value=!0,l.value.center&&r.getView().animate({center:jg(l.value.center),zoom:l.value.zoom||5,duration:500}),l.value.type==="wms")o=new ym({source:new gT({url:l.value.url,params:l.value.params,crossOrigin:"anonymous"})}),r.addLayer(o);else if(l.value.type==="wfs"){const d=new wT,f=new Ri({image:new Ur({radius:8,fill:new xi({color:"rgba(255, 140, 0, 0.8)"}),stroke:new es({color:"#ff6600",width:2})}),stroke:new es({color:"#ff6600",width:3}),fill:new xi({color:"rgba(255, 140, 0, 0.3)"})});o=new HP({source:d,style:f}),r.addLayer(o);try{const g=await fetch(l.value.url),m=g.headers.get("content-type");let p;if(m&&m.includes("application/json")){const _=await g.json();p=new MT().readFeatures(_,{featureProjection:r.getView().getProjection()})}else{const _=await g.text();p=new ae({featureNS:"http://inspire.ec.europa.eu/schemas/cp/4.0",featureType:"CadastralParcel"}).readFeatures(_,{dataProjection:"EPSG:25832",featureProjection:r.getView().getProjection()})}if(d.addFeatures(p),p.length>0){const _=d.getExtent();r.getView().fit(_,{padding:[50,50,50,50],duration:500})}}catch{}}}},h=()=>{s.value=!s.value,o&&o.setVisible(s.value)};return gc(c),Tn(()=>e.configId,()=>{u()}),$h(()=>{r&&(r.setTarget(void 0),window.map=void 0)}),(d,f)=>l.value?(F(),B("div",nR,[S("div",iR,[S("p",sR,X(l.value.description),1),l.value.type==="wms"||l.value.type==="wfs"?(F(),B("button",{key:0,class:"ghost-btn",onClick:h},X(s.value?"Hide":"Show")+" layer",1)):Ye("",!0)]),S("div",{ref_key:"mapTarget",ref:n,class:"map-container"},null,512),i.value?(F(),B("div",rR,[f[0]||(f[0]=S("h4",null,"Feature Properties",-1)),S("div",oR,[(F(!0),B(Re,null,gt(i.value,(g,m)=>(F(),B("div",{key:m,class:"property-row"},[S("span",aR,X(m),1),S("span",lR,X(g),1)]))),128))])])):Ye("",!0)])):(F(),B("p",cR,"Configuration not found."))}},Im=wt(uR,[["__scopeId","data-v-0f36587f"]]);function hR(t){const e=Object.keys(t.defs),n=e.length;let i,s;for(i=0;i<n;++i){const r=e[i];if(!Ae(r)){const o=t.defs(r);let a=o.units;!a&&o.projName==="longlat"&&(a="degrees"),k_(new vd({code:r,axisOrientation:o.axis,metersPerUnit:o.to_meter,units:a}))}}for(i=0;i<n;++i){const r=e[i],o=Ae(r);for(s=0;s<n;++s){const a=e[s],l=Ae(a);if(!f_(r,a))if(t.defs[r]===t.defs[a])lh([o,l]);else{const c=t(r,a);A2(o,l,Wg(o,l,c.forward),Wg(l,o,c.inverse))}}}}function dR(t){t("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),t("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),t("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var e=1;e<=60;++e)t("EPSG:"+(32600+e),"+proj=utm +zone="+e+" +datum=WGS84 +units=m"),t("EPSG:"+(32700+e),"+proj=utm +zone="+e+" +south +datum=WGS84 +units=m");t("EPSG:5041","+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),t("EPSG:5042","+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),t.WGS84=t["EPSG:4326"],t["EPSG:3785"]=t["EPSG:3857"],t.GOOGLE=t["EPSG:3857"],t["EPSG:900913"]=t["EPSG:3857"],t["EPSG:102113"]=t["EPSG:3857"]}var Gs=1,zs=2,Rr=3,fR=4,xh=5,Lm=6378137,gR=6356752314e-3,Om=.0066943799901413165,Bo=484813681109536e-20,G=Math.PI/2,mR=.16666666666666666,pR=.04722222222222222,_R=.022156084656084655,K=1e-10,ft=.017453292519943295,an=57.29577951308232,Ue=Math.PI/4,ma=Math.PI*2,_t=3.14159265359,un={};un.greenwich=0;un.lisbon=-9.131906111111;un.paris=2.337229166667;un.bogota=-74.080916666667;un.madrid=-3.687938888889;un.rome=12.452333333333;un.bern=7.439583333333;un.jakarta=106.807719444444;un.ferro=-17.666666666667;un.brussels=4.367975;un.stockholm=18.058277777778;un.athens=23.7163375;un.oslo=10.722916666667;const yR={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var Fm=/[\s_\-\/\(\)]/g;function fs(t,e){if(t[e])return t[e];for(var n=Object.keys(t),i=e.toLowerCase().replace(Fm,""),s=-1,r,o;++s<n.length;)if(r=n[s],o=r.toLowerCase().replace(Fm,""),o===i)return t[r]}function Ch(t){var e={},n=t.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,l){var c=l.split("=");return c.push(!0),a[c[0].toLowerCase()]=c[1],a},{}),i,s,r,o={proj:"projName",datum:"datumCode",rf:function(a){e.rf=parseFloat(a)},lat_0:function(a){e.lat0=a*ft},lat_1:function(a){e.lat1=a*ft},lat_2:function(a){e.lat2=a*ft},lat_ts:function(a){e.lat_ts=a*ft},lon_0:function(a){e.long0=a*ft},lon_1:function(a){e.long1=a*ft},lon_2:function(a){e.long2=a*ft},alpha:function(a){e.alpha=parseFloat(a)*ft},gamma:function(a){e.rectified_grid_angle=parseFloat(a)*ft},lonc:function(a){e.longc=a*ft},x_0:function(a){e.x0=parseFloat(a)},y_0:function(a){e.y0=parseFloat(a)},k_0:function(a){e.k0=parseFloat(a)},k:function(a){e.k0=parseFloat(a)},a:function(a){e.a=parseFloat(a)},b:function(a){e.b=parseFloat(a)},r:function(a){e.a=e.b=parseFloat(a)},r_a:function(){e.R_A=!0},zone:function(a){e.zone=parseInt(a,10)},south:function(){e.utmSouth=!0},towgs84:function(a){e.datum_params=a.split(",").map(function(l){return parseFloat(l)})},to_meter:function(a){e.to_meter=parseFloat(a)},units:function(a){e.units=a;var l=fs(yR,a);l&&(e.to_meter=l.to_meter)},from_greenwich:function(a){e.from_greenwich=a*ft},pm:function(a){var l=fs(un,a);e.from_greenwich=(l||parseFloat(a))*ft},nadgrids:function(a){a==="@null"?e.datumCode="none":e.nadgrids=a},axis:function(a){var l="ewnsud";a.length===3&&l.indexOf(a.substr(0,1))!==-1&&l.indexOf(a.substr(1,1))!==-1&&l.indexOf(a.substr(2,1))!==-1&&(e.axis=a)},approx:function(){e.approx=!0},over:function(){e.over=!0}};for(i in n)s=n[i],i in o?(r=o[i],typeof r=="function"?r(s):e[r]=s):e[i]=s;return typeof e.datumCode=="string"&&e.datumCode!=="WGS84"&&(e.datumCode=e.datumCode.toLowerCase()),e.projStr=t,e}class Wy{static getId(e){const n=e.find(i=>Array.isArray(i)&&i[0]==="ID");return n&&n.length>=3?{authority:n[1],code:parseInt(n[2],10)}:null}static convertUnit(e,n="unit"){if(!e||e.length<3)return{type:n,name:"unknown",conversion_factor:null};const i=e[1],s=parseFloat(e[2])||null,r=e.find(a=>Array.isArray(a)&&a[0]==="ID"),o=r?{authority:r[1],code:parseInt(r[2],10)}:null;return{type:n,name:i,conversion_factor:s,id:o}}static convertAxis(e){const n=e[1]||"Unknown";let i;const s=n.match(/^\((.)\)$/);if(s){const c=s[1].toUpperCase();if(c==="E")i="east";else if(c==="N")i="north";else if(c==="U")i="up";else throw new Error(`Unknown axis abbreviation: ${c}`)}else i=e[2]?e[2].toLowerCase():"unknown";const r=e.find(c=>Array.isArray(c)&&c[0]==="ORDER"),o=r?parseInt(r[1],10):null,a=e.find(c=>Array.isArray(c)&&(c[0]==="LENGTHUNIT"||c[0]==="ANGLEUNIT"||c[0]==="SCALEUNIT")),l=this.convertUnit(a);return{name:n,direction:i,unit:l,order:o}}static extractAxes(e){return e.filter(n=>Array.isArray(n)&&n[0]==="AXIS").map(n=>this.convertAxis(n)).sort((n,i)=>(n.order||0)-(i.order||0))}static convert(e,n={}){switch(e[0]){case"PROJCRS":n.type="ProjectedCRS",n.name=e[1],n.base_crs=e.find(d=>Array.isArray(d)&&d[0]==="BASEGEOGCRS")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="BASEGEOGCRS")):null,n.conversion=e.find(d=>Array.isArray(d)&&d[0]==="CONVERSION")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="CONVERSION")):null;const i=e.find(d=>Array.isArray(d)&&d[0]==="CS");i&&(n.coordinate_system={type:i[1],axis:this.extractAxes(e)});const s=e.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT");if(s){const d=this.convertUnit(s);n.coordinate_system.unit=d}n.id=this.getId(e);break;case"BASEGEOGCRS":case"GEOGCRS":n.type="GeographicCRS",n.name=e[1];const r=e.find(d=>Array.isArray(d)&&(d[0]==="DATUM"||d[0]==="ENSEMBLE"));if(r){const d=this.convert(r);r[0]==="ENSEMBLE"?n.datum_ensemble=d:n.datum=d;const f=e.find(g=>Array.isArray(g)&&g[0]==="PRIMEM");f&&f[1]!=="Greenwich"&&(d.prime_meridian={name:f[1],longitude:parseFloat(f[2])})}n.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(e)},n.id=this.getId(e);break;case"DATUM":n.type="GeodeticReferenceFrame",n.name=e[1],n.ellipsoid=e.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":n.type="DatumEnsemble",n.name=e[1],n.members=e.filter(d=>Array.isArray(d)&&d[0]==="MEMBER").map(d=>({type:"DatumEnsembleMember",name:d[1],id:this.getId(d)}));const o=e.find(d=>Array.isArray(d)&&d[0]==="ENSEMBLEACCURACY");o&&(n.accuracy=parseFloat(o[1]));const a=e.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID");a&&(n.ellipsoid=this.convert(a)),n.id=this.getId(e);break;case"ELLIPSOID":n.type="Ellipsoid",n.name=e[1],n.semi_major_axis=parseFloat(e[2]),n.inverse_flattening=parseFloat(e[3]),e.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT")&&this.convert(e.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT"),n);break;case"CONVERSION":n.type="Conversion",n.name=e[1],n.method=e.find(d=>Array.isArray(d)&&d[0]==="METHOD")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="METHOD")):null,n.parameters=e.filter(d=>Array.isArray(d)&&d[0]==="PARAMETER").map(d=>this.convert(d));break;case"METHOD":n.type="Method",n.name=e[1],n.id=this.getId(e);break;case"PARAMETER":n.type="Parameter",n.name=e[1],n.value=parseFloat(e[2]),n.unit=this.convertUnit(e.find(d=>Array.isArray(d)&&(d[0]==="LENGTHUNIT"||d[0]==="ANGLEUNIT"||d[0]==="SCALEUNIT"))),n.id=this.getId(e);break;case"BOUNDCRS":n.type="BoundCRS";const l=e.find(d=>Array.isArray(d)&&d[0]==="SOURCECRS");if(l){const d=l.find(f=>Array.isArray(f));n.source_crs=d?this.convert(d):null}const c=e.find(d=>Array.isArray(d)&&d[0]==="TARGETCRS");if(c){const d=c.find(f=>Array.isArray(f));n.target_crs=d?this.convert(d):null}const u=e.find(d=>Array.isArray(d)&&d[0]==="ABRIDGEDTRANSFORMATION");u?n.transformation=this.convert(u):n.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(n.type="Transformation",n.name=e[1],n.method=e.find(d=>Array.isArray(d)&&d[0]==="METHOD")?this.convert(e.find(d=>Array.isArray(d)&&d[0]==="METHOD")):null,n.parameters=e.filter(d=>Array.isArray(d)&&(d[0]==="PARAMETER"||d[0]==="PARAMETERFILE")).map(d=>{if(d[0]==="PARAMETER")return this.convert(d);if(d[0]==="PARAMETERFILE")return{name:d[1],value:d[2],id:{authority:"EPSG",code:8656}}}),n.parameters.length===7){const d=n.parameters[6];d.name==="Scale difference"&&(d.value=Math.round((d.value-1)*1e12)/1e6)}n.id=this.getId(e);break;case"AXIS":n.coordinate_system||(n.coordinate_system={type:"unspecified",axis:[]}),n.coordinate_system.axis.push(this.convertAxis(e));break;case"LENGTHUNIT":const h=this.convertUnit(e,"LinearUnit");n.coordinate_system&&n.coordinate_system.axis&&n.coordinate_system.axis.forEach(d=>{d.unit||(d.unit=h)}),h.conversion_factor&&h.conversion_factor!==1&&n.semi_major_axis&&(n.semi_major_axis={value:n.semi_major_axis,unit:h});break;default:n.keyword=e[0];break}return n}}class vR extends Wy{static convert(e,n={}){return super.convert(e,n),n.coordinate_system&&n.coordinate_system.subtype==="Cartesian"&&delete n.coordinate_system,n.usage&&delete n.usage,n}}class wR extends Wy{static convert(e,n={}){super.convert(e,n);const i=e.find(r=>Array.isArray(r)&&r[0]==="CS");i&&(n.coordinate_system={subtype:i[1],axis:this.extractAxes(e)});const s=e.find(r=>Array.isArray(r)&&r[0]==="USAGE");if(s){const r=s.find(l=>Array.isArray(l)&&l[0]==="SCOPE"),o=s.find(l=>Array.isArray(l)&&l[0]==="AREA"),a=s.find(l=>Array.isArray(l)&&l[0]==="BBOX");n.usage={},r&&(n.usage.scope=r[1]),o&&(n.usage.area=o[1]),a&&(n.usage.bbox=a.slice(1))}return n}}function SR(t){return t.find(e=>Array.isArray(e)&&e[0]==="USAGE")?"2019":(t.find(e=>Array.isArray(e)&&e[0]==="CS")||t[0]==="BOUNDCRS"||t[0]==="PROJCRS"||t[0]==="GEOGCRS","2015")}function bR(t){return(SR(t)==="2019"?wR:vR).convert(t)}function ER(t){const e=t.toUpperCase();return e.includes("PROJCRS")||e.includes("GEOGCRS")||e.includes("BOUNDCRS")||e.includes("VERTCRS")||e.includes("LENGTHUNIT")||e.includes("ANGLEUNIT")||e.includes("SCALEUNIT")?"WKT2":(e.includes("PROJCS")||e.includes("GEOGCS")||e.includes("LOCAL_CS")||e.includes("VERT_CS")||e.includes("UNIT"),"WKT1")}var pa=1,Vy=2,Uy=3,Yl=4,Ky=5,nf=-1,MR=/\s/,xR=/[A-Za-z]/,CR=/[A-Za-z84_]/,Kc=/[,\]]/,$y=/[\d\.E\-\+]/;function Di(t){if(typeof t!="string")throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=pa}Di.prototype.readCharicter=function(){var t=this.text[this.place++];if(this.state!==Yl)for(;MR.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case pa:return this.neutral(t);case Vy:return this.keyword(t);case Yl:return this.quoted(t);case Ky:return this.afterquote(t);case Uy:return this.number(t);case nf:return}};Di.prototype.afterquote=function(t){if(t==='"'){this.word+='"',this.state=Yl;return}if(Kc.test(t)){this.word=this.word.trim(),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in afterquote yet, index '+this.place)};Di.prototype.afterItem=function(t){if(t===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=pa;return}if(t==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=pa,this.currentObject=this.stack.pop(),this.currentObject||(this.state=nf);return}};Di.prototype.number=function(t){if($y.test(t)){this.word+=t;return}if(Kc.test(t)){this.word=parseFloat(this.word),this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in number yet, index '+this.place)};Di.prototype.quoted=function(t){if(t==='"'){this.state=Ky;return}this.word+=t};Di.prototype.keyword=function(t){if(CR.test(t)){this.word+=t;return}if(t==="["){var e=[];e.push(this.word),this.level++,this.root===null?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,this.state=pa;return}if(Kc.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in keyword yet, index '+this.place)};Di.prototype.neutral=function(t){if(xR.test(t)){this.word=t,this.state=Vy;return}if(t==='"'){this.word="",this.state=Yl;return}if($y.test(t)){this.word=t,this.state=Uy;return}if(Kc.test(t)){this.afterItem(t);return}throw new Error(`havn't handled "`+t+'" in neutral yet, index '+this.place)};Di.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===nf)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function kR(t){var e=new Di(t);return e.output()}function Ru(t,e,n){Array.isArray(e)&&(n.unshift(e),e=null);var i=e?{}:t,s=n.reduce(function(r,o){return mr(o,r),r},i);e&&(t[e]=s)}function mr(t,e){if(!Array.isArray(t)){e[t]=!0;return}var n=t.shift();if(n==="PARAMETER"&&(n=t.shift()),t.length===1){if(Array.isArray(t[0])){e[n]={},mr(t[0],e[n]);return}e[n]=t[0];return}if(!t.length){e[n]=!0;return}if(n==="TOWGS84"){e[n]=t;return}if(n==="AXIS"){n in e||(e[n]=[]),e[n].push(t);return}Array.isArray(n)||(e[n]={});var i;switch(n){case"UNIT":case"PRIMEM":case"VERT_DATUM":e[n]={name:t[0].toLowerCase(),convert:t[1]},t.length===3&&mr(t[2],e[n]);return;case"SPHEROID":case"ELLIPSOID":e[n]={name:t[0],a:t[1],rf:t[2]},t.length===4&&mr(t[3],e[n]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":t[0]=["name",t[0]],Ru(e,n,t);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":t[0]=["name",t[0]],Ru(e,n,t),e[n].type=n;return;default:for(i=-1;++i<t.length;)if(!Array.isArray(t[i]))return mr(t,e[n]);return Ru(e,n,t)}}var PR=.017453292519943295;function Ln(t){return t*PR}function qy(t){const e=(t.projName||"").toLowerCase().replace(/_/g," ");!t.long0&&t.longc&&(e==="albers conic equal area"||e==="lambert azimuthal equal area")&&(t.long0=t.longc),!t.lat_ts&&t.lat1&&(e==="stereographic south pole"||e==="polar stereographic (variant b)")?(t.lat0=Ln(t.lat1>0?90:-90),t.lat_ts=t.lat1,delete t.lat1):!t.lat_ts&&t.lat0&&(e==="polar stereographic"||e==="polar stereographic (variant a)")&&(t.lat_ts=t.lat0,t.lat0=Ln(t.lat0>0?90:-90),delete t.lat1)}function Nm(t){let e={units:null,to_meter:void 0};return typeof t=="string"?(e.units=t.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.units==="meter"&&(e.to_meter=1)):t&&t.name&&(e.units=t.name.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.to_meter=t.conversion_factor),e}function Dm(t){return typeof t=="object"?t.value*t.unit.conversion_factor:t}function Gm(t,e){t.ellipsoid.radius?(e.a=t.ellipsoid.radius,e.rf=0):(e.a=Dm(t.ellipsoid.semi_major_axis),t.ellipsoid.inverse_flattening!==void 0?e.rf=t.ellipsoid.inverse_flattening:t.ellipsoid.semi_major_axis!==void 0&&t.ellipsoid.semi_minor_axis!==void 0&&(e.rf=e.a/(e.a-Dm(t.ellipsoid.semi_minor_axis))))}function Jl(t,e={}){return!t||typeof t!="object"?t:t.type==="BoundCRS"?(Jl(t.source_crs,e),t.transformation&&(t.transformation.method&&t.transformation.method.name==="NTv2"?e.nadgrids=t.transformation.parameters[0].value:e.datum_params=t.transformation.parameters.map(n=>n.value)),e):(Object.keys(t).forEach(n=>{const i=t[n];if(i!==null)switch(n){case"name":if(e.srsCode)break;e.name=i,e.srsCode=i;break;case"type":i==="GeographicCRS"?e.projName="longlat":i==="ProjectedCRS"&&t.conversion&&t.conversion.method&&(e.projName=t.conversion.method.name);break;case"datum":case"datum_ensemble":i.ellipsoid&&(e.ellps=i.ellipsoid.name,Gm(i,e)),i.prime_meridian&&(e.from_greenwich=i.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":e.ellps=i.name,Gm(i,e);break;case"prime_meridian":e.long0=(i.longitude||0)*Math.PI/180;break;case"coordinate_system":if(i.axis){if(e.axis=i.axis.map(s=>{const r=s.direction;if(r==="east")return"e";if(r==="north")return"n";if(r==="west")return"w";if(r==="south")return"s";throw new Error(`Unknown axis direction: ${r}`)}).join("")+"u",i.unit){const{units:s,to_meter:r}=Nm(i.unit);e.units=s,e.to_meter=r}else if(i.axis[0]&&i.axis[0].unit){const{units:s,to_meter:r}=Nm(i.axis[0].unit);e.units=s,e.to_meter=r}}break;case"id":i.authority&&i.code&&(e.title=i.authority+":"+i.code);break;case"conversion":i.method&&i.method.name&&(e.projName=i.method.name),i.parameters&&i.parameters.forEach(s=>{const r=s.name.toLowerCase().replace(/\s+/g,"_"),o=s.value;s.unit&&s.unit.conversion_factor?e[r]=o*s.unit.conversion_factor:s.unit==="degree"?e[r]=o*Math.PI/180:e[r]=o});break;case"unit":i.name&&(e.units=i.name.toLowerCase(),e.units==="metre"&&(e.units="meter")),i.conversion_factor&&(e.to_meter=i.conversion_factor);break;case"base_crs":Jl(i,e),e.datumCode=i.id?i.id.authority+"_"+i.id.code:i.name;break}}),e.latitude_of_false_origin!==void 0&&(e.lat0=e.latitude_of_false_origin),e.longitude_of_false_origin!==void 0&&(e.long0=e.longitude_of_false_origin),e.latitude_of_standard_parallel!==void 0&&(e.lat0=e.latitude_of_standard_parallel,e.lat1=e.latitude_of_standard_parallel),e.latitude_of_1st_standard_parallel!==void 0&&(e.lat1=e.latitude_of_1st_standard_parallel),e.latitude_of_2nd_standard_parallel!==void 0&&(e.lat2=e.latitude_of_2nd_standard_parallel),e.latitude_of_projection_centre!==void 0&&(e.lat0=e.latitude_of_projection_centre),e.longitude_of_projection_centre!==void 0&&(e.longc=e.longitude_of_projection_centre),e.easting_at_false_origin!==void 0&&(e.x0=e.easting_at_false_origin),e.northing_at_false_origin!==void 0&&(e.y0=e.northing_at_false_origin),e.latitude_of_natural_origin!==void 0&&(e.lat0=e.latitude_of_natural_origin),e.longitude_of_natural_origin!==void 0&&(e.long0=e.longitude_of_natural_origin),e.longitude_of_origin!==void 0&&(e.long0=e.longitude_of_origin),e.false_easting!==void 0&&(e.x0=e.false_easting),e.easting_at_projection_centre&&(e.x0=e.easting_at_projection_centre),e.false_northing!==void 0&&(e.y0=e.false_northing),e.northing_at_projection_centre&&(e.y0=e.northing_at_projection_centre),e.standard_parallel_1!==void 0&&(e.lat1=e.standard_parallel_1),e.standard_parallel_2!==void 0&&(e.lat2=e.standard_parallel_2),e.scale_factor_at_natural_origin!==void 0&&(e.k0=e.scale_factor_at_natural_origin),e.scale_factor_at_projection_centre!==void 0&&(e.k0=e.scale_factor_at_projection_centre),e.scale_factor_on_pseudo_standard_parallel!==void 0&&(e.k0=e.scale_factor_on_pseudo_standard_parallel),e.azimuth!==void 0&&(e.alpha=e.azimuth),e.azimuth_at_projection_centre!==void 0&&(e.alpha=e.azimuth_at_projection_centre),e.angle_from_rectified_to_skew_grid&&(e.rectified_grid_angle=e.angle_from_rectified_to_skew_grid),qy(e),e)}var TR=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function RR(t,e){var n=e[0],i=e[1];!(n in t)&&i in t&&(t[n]=t[i],e.length===3&&(t[n]=e[2](t[n])))}function Hy(t){for(var e=Object.keys(t),n=0,i=e.length;n<i;++n){var s=e[n];TR.indexOf(s)!==-1&&AR(t[s]),typeof t[s]=="object"&&Hy(t[s])}}function AR(t){if(t.AUTHORITY){var e=Object.keys(t.AUTHORITY)[0];e&&e in t.AUTHORITY&&(t.title=e+":"+t.AUTHORITY[e])}if(t.type==="GEOGCS"?t.projName="longlat":t.type==="LOCAL_CS"?(t.projName="identity",t.local=!0):typeof t.PROJECTION=="object"?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.AXIS){for(var n="",i=0,s=t.AXIS.length;i<s;++i){var r=[t.AXIS[i][0].toLowerCase(),t.AXIS[i][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?n+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?n+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?n+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(n+="w")}n.length===2&&(n+="u"),n.length===3&&(t.axis=n)}t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.UNIT.convert&&(t.type==="GEOGCS"?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var o=t.GEOGCS;t.type==="GEOGCS"&&(o=t),o&&(o.DATUM?t.datumCode=o.DATUM.name.toLowerCase():t.datumCode=o.name.toLowerCase(),t.datumCode.slice(0,2)==="d_"&&(t.datumCode=t.datumCode.slice(2)),t.datumCode==="new_zealand_1949"&&(t.datumCode="nzgd49"),(t.datumCode==="wgs_1984"||t.datumCode==="world_geodetic_system_1984")&&(t.PROJECTION==="Mercator_Auxiliary_Sphere"&&(t.sphere=!0),t.datumCode="wgs84"),t.datumCode==="belge_1972"&&(t.datumCode="rnb72"),o.DATUM&&o.DATUM.SPHEROID&&(t.ellps=o.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),t.ellps.toLowerCase().slice(0,13)==="international"&&(t.ellps="intl"),t.a=o.DATUM.SPHEROID.a,t.rf=parseFloat(o.DATUM.SPHEROID.rf,10)),o.DATUM&&o.DATUM.TOWGS84&&(t.datum_params=o.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),t.datumCode==="ch1903+"&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a),t.rectified_grid_angle&&(t.rectified_grid_angle=Ln(t.rectified_grid_angle));function a(u){var h=t.to_meter||1;return u*h}var l=function(u){return RR(t,u)},c=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Ln],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Ln],["x0","false_easting",a],["y0","false_northing",a],["long0","central_meridian",Ln],["lat0","latitude_of_origin",Ln],["lat0","standard_parallel_1",Ln],["lat1","standard_parallel_1",Ln],["lat2","standard_parallel_2",Ln],["azimuth","Azimuth"],["alpha","azimuth",Ln],["srsCode","name"]];c.forEach(l),qy(t)}function Ql(t){if(typeof t=="object")return Jl(t);const e=ER(t);var n=kR(t);if(e==="WKT2"){const r=bR(n);return Jl(r)}var i=n[0],s={};return mr(n,s),Hy(s),s[i]}function xt(t){var e=this;if(arguments.length===2){var n=arguments[1];typeof n=="string"?n.charAt(0)==="+"?xt[t]=Ch(arguments[1]):xt[t]=Ql(arguments[1]):n&&typeof n=="object"&&!("projName"in n)?xt[t]=Ql(arguments[1]):(xt[t]=n,n||delete xt[t])}else if(arguments.length===1){if(Array.isArray(t))return t.map(function(i){return Array.isArray(i)?xt.apply(e,i):xt(i)});if(typeof t=="string"){if(t in xt)return xt[t]}else"EPSG"in t?xt["EPSG:"+t.EPSG]=t:"ESRI"in t?xt["ESRI:"+t.ESRI]=t:"IAU2000"in t?xt["IAU2000:"+t.IAU2000]=t:console.log(t);return}}dR(xt);function IR(t){return typeof t=="string"}function LR(t){return t in xt}function OR(t){return t.indexOf("+")!==0&&t.indexOf("[")!==-1||typeof t=="object"&&!("srsCode"in t)}var FR=["3857","900913","3785","102113"];function NR(t){var e=fs(t,"authority");if(e){var n=fs(e,"epsg");return n&&FR.indexOf(n)>-1}}function DR(t){var e=fs(t,"extension");if(e)return fs(e,"proj4")}function GR(t){return t[0]==="+"}function zR(t){if(IR(t)){if(LR(t))return xt[t];if(OR(t)){var e=Ql(t);if(NR(e))return xt["EPSG:3857"];var n=DR(e);return n?Ch(n):e}if(GR(t))return Ch(t)}else return"projName"in t?t:Ql(t)}function zm(t,e){t=t||{};var n,i;if(!e)return t;for(i in e)n=e[i],n!==void 0&&(t[i]=n);return t}function ai(t,e,n){var i=t*e;return n/Math.sqrt(1-i*i)}function Fa(t){return t<0?-1:1}function Q(t,e){return e||Math.abs(t)<=_t?t:t-Fa(t)*ma}function Dn(t,e,n){var i=t*n,s=.5*t;return i=Math.pow((1-i)/(1+i),s),Math.tan(.5*(G-e))/i}function _a(t,e){for(var n=.5*t,i,s,r=G-2*Math.atan(e),o=0;o<=15;o++)if(i=t*Math.sin(r),s=G-2*Math.atan(e*Math.pow((1-i)/(1+i),n))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function BR(){var t=this.b/this.a;this.es=1-t*t,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=ai(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function jR(t){var e=t.x,n=t.y;if(n*an>90&&n*an<-90&&e*an>180&&e*an<-180)return null;var i,s;if(Math.abs(Math.abs(n)-G)<=K)return null;if(this.sphere)i=this.x0+this.a*this.k0*Q(e-this.long0,this.over),s=this.y0+this.a*this.k0*Math.log(Math.tan(Ue+.5*n));else{var r=Math.sin(n),o=Dn(this.e,n,r);i=this.x0+this.a*this.k0*Q(e-this.long0,this.over),s=this.y0-this.a*this.k0*Math.log(o)}return t.x=i,t.y=s,t}function WR(t){var e=t.x-this.x0,n=t.y-this.y0,i,s;if(this.sphere)s=G-2*Math.atan(Math.exp(-n/(this.a*this.k0)));else{var r=Math.exp(-n/(this.a*this.k0));if(s=_a(this.e,r),s===-9999)return null}return i=Q(this.long0+e/(this.a*this.k0),this.over),t.x=i,t.y=s,t}var VR=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"];const UR={init:BR,forward:jR,inverse:WR,names:VR};function KR(){}function Bm(t){return t}var Zy=["longlat","identity"];const $R={init:KR,forward:Bm,inverse:Bm,names:Zy};var qR=[UR,$R],Cs={},pr=[];function Xy(t,e){var n=pr.length;return t.names?(pr[n]=t,t.names.forEach(function(i){Cs[i.toLowerCase()]=n}),this):(console.log(e),!0)}function Yy(t){return t.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}function HR(t){if(!t)return!1;var e=t.toLowerCase();if(typeof Cs[e]<"u"&&pr[Cs[e]]||(e=Yy(e),e in Cs&&pr[Cs[e]]))return pr[Cs[e]]}function ZR(){qR.forEach(Xy)}const XR={start:ZR,add:Xy,get:HR};var Jy={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"},andrae:{a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"},clrk80:{a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:63558348467e-4,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};const YR=Jy.WGS84;function JR(t,e,n,i){var s=t*t,r=e*e,o=(s-r)/s,a=0;i?(t*=1-o*(mR+o*(pR+o*_R)),s=t*t,o=0):a=Math.sqrt(o);var l=(s-r)/r;return{es:o,e:a,ep2:l}}function QR(t,e,n,i,s){if(!t){var r=fs(Jy,i);r||(r=YR),t=r.a,e=r.b,n=r.rf}return n&&!e&&(e=(1-1/n)*t),(n===0||Math.abs(t-e)<K)&&(s=!0,e=t),{a:t,b:e,rf:n,sphere:s}}var vl={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-8.393,0.749,-10.276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"374,150,588"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"}};for(var eA in vl){var Au=vl[eA];Au.datumName&&(vl[Au.datumName]=Au)}function tA(t,e,n,i,s,r,o){var a={};return t===void 0||t==="none"?a.datum_type=xh:a.datum_type=fR,e&&(a.datum_params=e.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=Gs),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=zs,a.datum_params[3]*=Bo,a.datum_params[4]*=Bo,a.datum_params[5]*=Bo,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=Rr,a.grids=o),a.a=n,a.b=i,a.es=s,a.ep2=r,a}var sf={};function nA(t,e,n){return e instanceof ArrayBuffer?iA(t,e,n):{ready:sA(t,e)}}function iA(t,e,n){var i=!0;n!==void 0&&n.includeErrorFields===!1&&(i=!1);var s=new DataView(e),r=aA(s),o=lA(s,r),a=cA(s,o,r,i),l={header:o,subgrids:a};return sf[t]=l,l}async function sA(t,e){for(var n=[],i=await e.getImageCount(),s=i-1;s>=0;s--){var r=await e.getImage(s),o=await r.readRasters(),a=o,l=[r.getWidth(),r.getHeight()],c=r.getBoundingBox().map(jm),u=[r.fileDirectory.ModelPixelScale[0],r.fileDirectory.ModelPixelScale[1]].map(jm),h=c[0]+(l[0]-1)*u[0],d=c[3]-(l[1]-1)*u[1],f=a[0],g=a[1],m=[];for(let y=l[1]-1;y>=0;y--)for(let w=l[0]-1;w>=0;w--){var p=y*l[0]+w;m.push([-is(g[p]),is(f[p])])}n.push({del:u,lim:l,ll:[-h,d],cvs:m})}var _={header:{nSubgrids:i},subgrids:n};return sf[t]=_,_}function rA(t){if(t===void 0)return null;var e=t.split(",");return e.map(oA)}function oA(t){if(t.length===0)return null;var e=t[0]==="@";return e&&(t=t.slice(1)),t==="null"?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:t,mandatory:!e,grid:sf[t]||null,isNull:!1}}function jm(t){return t*Math.PI/180}function is(t){return t/3600*Math.PI/180}function aA(t){var e=t.getInt32(8,!1);return e===11?!1:(e=t.getInt32(8,!0),e!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function lA(t,e){return{nFields:t.getInt32(8,e),nSubgridFields:t.getInt32(24,e),nSubgrids:t.getInt32(40,e),shiftType:kh(t,56,64).trim(),fromSemiMajorAxis:t.getFloat64(120,e),fromSemiMinorAxis:t.getFloat64(136,e),toSemiMajorAxis:t.getFloat64(152,e),toSemiMinorAxis:t.getFloat64(168,e)}}function kh(t,e,n){return String.fromCharCode.apply(null,new Uint8Array(t.buffer.slice(e,n)))}function cA(t,e,n,i){for(var s=176,r=[],o=0;o<e.nSubgrids;o++){var a=hA(t,s,n),l=dA(t,s,a,n,i),c=Math.round(1+(a.upperLongitude-a.lowerLongitude)/a.longitudeInterval),u=Math.round(1+(a.upperLatitude-a.lowerLatitude)/a.latitudeInterval);r.push({ll:[is(a.lowerLongitude),is(a.lowerLatitude)],del:[is(a.longitudeInterval),is(a.latitudeInterval)],lim:[c,u],count:a.gridNodeCount,cvs:uA(l)});var h=16;i===!1&&(h=8),s+=176+a.gridNodeCount*h}return r}function uA(t){return t.map(function(e){return[is(e.longitudeShift),is(e.latitudeShift)]})}function hA(t,e,n){return{name:kh(t,e+8,e+16).trim(),parent:kh(t,e+24,e+24+8).trim(),lowerLatitude:t.getFloat64(e+72,n),upperLatitude:t.getFloat64(e+88,n),lowerLongitude:t.getFloat64(e+104,n),upperLongitude:t.getFloat64(e+120,n),latitudeInterval:t.getFloat64(e+136,n),longitudeInterval:t.getFloat64(e+152,n),gridNodeCount:t.getInt32(e+168,n)}}function dA(t,e,n,i,s){var r=e+176,o=16;s===!1&&(o=8);for(var a=[],l=0;l<n.gridNodeCount;l++){var c={latitudeShift:t.getFloat32(r+l*o,i),longitudeShift:t.getFloat32(r+l*o+4,i)};s!==!1&&(c.latitudeAccuracy=t.getFloat32(r+l*o+8,i),c.longitudeAccuracy=t.getFloat32(r+l*o+12,i)),a.push(c)}return a}function Rn(t,e){if(!(this instanceof Rn))return new Rn(t);this.forward=null,this.inverse=null,this.init=null,this.name,this.names=null,this.title,e=e||function(c){if(c)throw c};var n=zR(t);if(typeof n!="object"){e("Could not parse to valid json: "+t);return}var i=Rn.projections.get(n.projName);if(!i){e("Could not get projection name from: "+t);return}if(n.datumCode&&n.datumCode!=="none"){var s=fs(vl,n.datumCode);s&&(n.datum_params=n.datum_params||(s.towgs84?s.towgs84.split(","):null),n.ellps=s.ellipse,n.datumName=s.datumName?s.datumName:n.datumCode)}n.k0=n.k0||1,n.axis=n.axis||"enu",n.ellps=n.ellps||"wgs84",n.lat1=n.lat1||n.lat0;var r=QR(n.a,n.b,n.rf,n.ellps,n.sphere),o=JR(r.a,r.b,r.rf,n.R_A),a=rA(n.nadgrids),l=n.datum||tA(n.datumCode,n.datum_params,r.a,r.b,o.es,o.ep2,a);zm(this,n),zm(this,i),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,"init"in this&&typeof this.init=="function"&&this.init(),e(null,this)}Rn.projections=XR;Rn.projections.start();function fA(t,e){return t.datum_type!==e.datum_type||t.a!==e.a||Math.abs(t.es-e.es)>5e-11?!1:t.datum_type===Gs?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]:t.datum_type===zs?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]&&t.datum_params[3]===e.datum_params[3]&&t.datum_params[4]===e.datum_params[4]&&t.datum_params[5]===e.datum_params[5]&&t.datum_params[6]===e.datum_params[6]:!0}function Qy(t,e,n){var i=t.x,s=t.y,r=t.z?t.z:0,o,a,l,c;if(s<-G&&s>-1.001*G)s=-G;else if(s>G&&s<1.001*G)s=G;else{if(s<-G)return{x:-1/0,y:-1/0,z:t.z};if(s>G)return{x:1/0,y:1/0,z:t.z}}return i>Math.PI&&(i-=2*Math.PI),a=Math.sin(s),c=Math.cos(s),l=a*a,o=n/Math.sqrt(1-e*l),{x:(o+r)*c*Math.cos(i),y:(o+r)*c*Math.sin(i),z:(o*(1-e)+r)*a}}function e1(t,e,n,i){var s=1e-12,r=s*s,o=30,a,l,c,u,h,d,f,g,m,p,_,y,w,b=t.x,E=t.y,P=t.z?t.z:0,k,R,C;if(a=Math.sqrt(b*b+E*E),l=Math.sqrt(b*b+E*E+P*P),a/n<s){if(k=0,l/n<s)return R=G,C=-i,{x:t.x,y:t.y,z:t.z}}else k=Math.atan2(E,b);c=P/l,u=a/l,h=1/Math.sqrt(1-e*(2-e)*u*u),g=u*(1-e)*h,m=c*h,w=0;do w++,f=n/Math.sqrt(1-e*m*m),C=a*g+P*m-f*(1-e*m*m),d=e*f/(f+C),h=1/Math.sqrt(1-d*(2-d)*u*u),p=u*(1-d)*h,_=c*h,y=_*g-p*m,g=p,m=_;while(y*y>r&&w<o);return R=Math.atan(_/Math.abs(p)),{x:k,y:R,z:C}}function gA(t,e,n){if(e===Gs)return{x:t.x+n[0],y:t.y+n[1],z:t.z+n[2]};if(e===zs){var i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],c=n[6];return{x:c*(t.x-l*t.y+a*t.z)+i,y:c*(l*t.x+t.y-o*t.z)+s,z:c*(-a*t.x+o*t.y+t.z)+r}}}function mA(t,e,n){if(e===Gs)return{x:t.x-n[0],y:t.y-n[1],z:t.z-n[2]};if(e===zs){var i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],c=n[6],u=(t.x-i)/c,h=(t.y-s)/c,d=(t.z-r)/c;return{x:u+l*h-a*d,y:-l*u+h+o*d,z:a*u-o*h+d}}}function ul(t){return t===Gs||t===zs}function pA(t,e,n){if(fA(t,e)||t.datum_type===xh||e.datum_type===xh)return n;var i=t.a,s=t.es;if(t.datum_type===Rr){var r=Wm(t,!1,n);if(r!==0)return;i=Lm,s=Om}var o=e.a,a=e.b,l=e.es;if(e.datum_type===Rr&&(o=Lm,a=gR,l=Om),s===l&&i===o&&!ul(t.datum_type)&&!ul(e.datum_type))return n;if(n=Qy(n,s,i),ul(t.datum_type)&&(n=gA(n,t.datum_type,t.datum_params)),ul(e.datum_type)&&(n=mA(n,e.datum_type,e.datum_params)),n=e1(n,l,o,a),e.datum_type===Rr){var c=Wm(e,!0,n);if(c!==0)return}return n}function Wm(t,e,n){if(t.grids===null||t.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-n.x,y:n.y},s={x:Number.NaN,y:Number.NaN},r=[];e:for(var o=0;o<t.grids.length;o++){var a=t.grids[o];if(r.push(a.name),a.isNull){s=i;break}if(a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var l=a.grid.subgrids,c=0,u=l.length;c<u;c++){var h=l[c],d=(Math.abs(h.del[1])+Math.abs(h.del[0]))/1e4,f=h.ll[0]-d,g=h.ll[1]-d,m=h.ll[0]+(h.lim[0]-1)*h.del[0]+d,p=h.ll[1]+(h.lim[1]-1)*h.del[1]+d;if(!(g>i.y||f>i.x||p<i.y||m<i.x)&&(s=_A(i,e,h),!isNaN(s.x)))break e}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*an+" "+i.y*an+" tried: '"+r+"'"),-1):(n.x=-s.x,n.y=s.y,0)}function _A(t,e,n){var i={x:Number.NaN,y:Number.NaN};if(isNaN(t.x))return i;var s={x:t.x,y:t.y};s.x-=n.ll[0],s.y-=n.ll[1],s.x=Q(s.x-Math.PI)+Math.PI;var r=Vm(s,n);if(e){if(isNaN(r.x))return i;r.x=s.x-r.x,r.y=s.y-r.y;var o=9,a=1e-12,l,c;do{if(c=Vm(r,n),isNaN(c.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:s.x-(c.x+r.x),y:s.y-(c.y+r.y)},r.x+=l.x,r.y+=l.y}while(o--&&Math.abs(l.x)>a&&Math.abs(l.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=Q(r.x+n.ll[0]),i.y=r.y+n.ll[1]}else isNaN(r.x)||(i.x=t.x+r.x,i.y=t.y+r.y);return i}function Vm(t,e){var n={x:t.x/e.del[0],y:t.y/e.del[1]},i={x:Math.floor(n.x),y:Math.floor(n.y)},s={x:n.x-1*i.x,y:n.y-1*i.y},r={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=e.lim[0]||i.y<0||i.y>=e.lim[1])return r;o=i.y*e.lim[0]+i.x;var a={x:e.cvs[o][0],y:e.cvs[o][1]};o++;var l={x:e.cvs[o][0],y:e.cvs[o][1]};o+=e.lim[0];var c={x:e.cvs[o][0],y:e.cvs[o][1]};o--;var u={x:e.cvs[o][0],y:e.cvs[o][1]},h=s.x*s.y,d=s.x*(1-s.y),f=(1-s.x)*(1-s.y),g=(1-s.x)*s.y;return r.x=f*a.x+d*l.x+g*u.x+h*c.x,r.y=f*a.y+d*l.y+g*u.y+h*c.y,r}function Um(t,e,n){var i=n.x,s=n.y,r=n.z||0,o,a,l,c={};for(l=0;l<3;l++)if(!(e&&l===2&&n.z===void 0))switch(l===0?(o=i,"ew".indexOf(t.axis[l])!==-1?a="x":a="y"):l===1?(o=s,"ns".indexOf(t.axis[l])!==-1?a="y":a="x"):(o=r,a="z"),t.axis[l]){case"e":c[a]=o;break;case"w":c[a]=-o;break;case"n":c[a]=o;break;case"s":c[a]=-o;break;case"u":n[a]!==void 0&&(c.z=o);break;case"d":n[a]!==void 0&&(c.z=-o);break;default:return null}return c}function t1(t){var e={x:t[0],y:t[1]};return t.length>2&&(e.z=t[2]),t.length>3&&(e.m=t[3]),e}function yA(t){Km(t.x),Km(t.y)}function Km(t){if(typeof Number.isFinite=="function"){if(Number.isFinite(t))return;throw new TypeError("coordinates must be finite numbers")}if(typeof t!="number"||t!==t||!isFinite(t))throw new TypeError("coordinates must be finite numbers")}function vA(t,e){return(t.datum.datum_type===Gs||t.datum.datum_type===zs||t.datum.datum_type===Rr)&&e.datumCode!=="WGS84"||(e.datum.datum_type===Gs||e.datum.datum_type===zs||e.datum.datum_type===Rr)&&t.datumCode!=="WGS84"}function ec(t,e,n,i){var s;Array.isArray(n)?n=t1(n):n={x:n.x,y:n.y,z:n.z,m:n.m};var r=n.z!==void 0;if(yA(n),t.datum&&e.datum&&vA(t,e)&&(s=new Rn("WGS84"),n=ec(t,s,n,i),t=s),i&&t.axis!=="enu"&&(n=Um(t,!1,n)),t.projName==="longlat")n={x:n.x*ft,y:n.y*ft,z:n.z||0};else if(t.to_meter&&(n={x:n.x*t.to_meter,y:n.y*t.to_meter,z:n.z||0}),n=t.inverse(n),!n)return;if(t.from_greenwich&&(n.x+=t.from_greenwich),n=pA(t.datum,e.datum,n),!!n)return n=n,e.from_greenwich&&(n={x:n.x-e.from_greenwich,y:n.y,z:n.z||0}),e.projName==="longlat"?n={x:n.x*an,y:n.y*an,z:n.z||0}:(n=e.forward(n),e.to_meter&&(n={x:n.x/e.to_meter,y:n.y/e.to_meter,z:n.z||0})),i&&e.axis!=="enu"?Um(e,!0,n):(n&&!r&&delete n.z,n)}var $m=Rn("WGS84");function Iu(t,e,n,i){var s,r,o;return Array.isArray(n)?(s=ec(t,e,n,i)||{x:NaN,y:NaN},n.length>2?typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(n.slice(3)):[s.x,s.y,n[2]].concat(n.slice(3)):[s.x,s.y].concat(n.slice(2)):[s.x,s.y]):(r=ec(t,e,n,i),o=Object.keys(n),o.length===2||o.forEach(function(a){if(typeof t.name<"u"&&t.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;r[a]=n[a]}),r)}function hl(t){return t instanceof Rn?t:typeof t=="object"&&"oProj"in t?t.oProj:Rn(t)}function wA(t,e,n){var i,s,r=!1,o;return typeof e>"u"?(s=hl(t),i=$m,r=!0):(typeof e.x<"u"||Array.isArray(e))&&(n=e,s=hl(t),i=$m,r=!0),i||(i=hl(t)),s||(s=hl(e)),n?Iu(i,s,n):(o={forward:function(a,l){return Iu(i,s,a,l)},inverse:function(a,l){return Iu(s,i,a,l)}},r&&(o.oProj=s),o)}var qm=6,n1="AJSAJS",i1="AFAFAF",_r=65,Jt=73,xn=79,Mo=86,xo=90;const SA={forward:s1,inverse:bA,toPoint:r1};function s1(t,e){return e=e||5,xA(EA({lat:t[1],lon:t[0]}),e)}function bA(t){var e=rf(a1(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function r1(t){var e=rf(a1(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function Lu(t){return t*(Math.PI/180)}function Hm(t){return 180*(t/Math.PI)}function EA(t){var e=t.lat,n=t.lon,i=6378137,s=.00669438,r=.9996,o,a,l,c,u,h,d,f=Lu(e),g=Lu(n),m,p;p=Math.floor((n+180)/6)+1,n===180&&(p=60),e>=56&&e<64&&n>=3&&n<12&&(p=32),e>=72&&e<84&&(n>=0&&n<9?p=31:n>=9&&n<21?p=33:n>=21&&n<33?p=35:n>=33&&n<42&&(p=37)),o=(p-1)*6-180+3,m=Lu(o),a=s/(1-s),l=i/Math.sqrt(1-s*Math.sin(f)*Math.sin(f)),c=Math.tan(f)*Math.tan(f),u=a*Math.cos(f)*Math.cos(f),h=Math.cos(f)*(g-m),d=i*((1-s/4-3*s*s/64-5*s*s*s/256)*f-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*f)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*f)-35*s*s*s/3072*Math.sin(6*f));var _=r*l*(h+(1-c+u)*h*h*h/6+(5-18*c+c*c+72*u-58*a)*h*h*h*h*h/120)+5e5,y=r*(d+l*Math.tan(f)*(h*h/2+(5-c+9*u+4*u*u)*h*h*h*h/24+(61-58*c+c*c+600*u-330*a)*h*h*h*h*h*h/720));return e<0&&(y+=1e7),{northing:Math.round(y),easting:Math.round(_),zoneNumber:p,zoneLetter:MA(e)}}function rf(t){var e=t.northing,n=t.easting,i=t.zoneLetter,s=t.zoneNumber;if(s<0||s>60)return null;var r=.9996,o=6378137,a=.00669438,l,c=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),u,h,d,f,g,m,p,_,y,w=n-5e5,b=e;i<"N"&&(b-=1e7),p=(s-1)*6-180+3,l=a/(1-a),m=b/r,_=m/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),y=_+(3*c/2-27*c*c*c/32)*Math.sin(2*_)+(21*c*c/16-55*c*c*c*c/32)*Math.sin(4*_)+151*c*c*c/96*Math.sin(6*_),u=o/Math.sqrt(1-a*Math.sin(y)*Math.sin(y)),h=Math.tan(y)*Math.tan(y),d=l*Math.cos(y)*Math.cos(y),f=o*(1-a)/Math.pow(1-a*Math.sin(y)*Math.sin(y),1.5),g=w/(u*r);var E=y-u*Math.tan(y)/f*(g*g/2-(5+3*h+10*d-4*d*d-9*l)*g*g*g*g/24+(61+90*h+298*d+45*h*h-252*l-3*d*d)*g*g*g*g*g*g/720);E=Hm(E);var P=(g-(1+2*h+d)*g*g*g/6+(5-2*d+28*h-3*d*d+8*l+24*h*h)*g*g*g*g*g/120)/Math.cos(y);P=p+Hm(P);var k;if(t.accuracy){var R=rf({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});k={top:R.lat,right:R.lon,bottom:E,left:P}}else k={lat:E,lon:P};return k}function MA(t){var e="Z";return 84>=t&&t>=72?e="X":72>t&&t>=64?e="W":64>t&&t>=56?e="V":56>t&&t>=48?e="U":48>t&&t>=40?e="T":40>t&&t>=32?e="S":32>t&&t>=24?e="R":24>t&&t>=16?e="Q":16>t&&t>=8?e="P":8>t&&t>=0?e="N":0>t&&t>=-8?e="M":-8>t&&t>=-16?e="L":-16>t&&t>=-24?e="K":-24>t&&t>=-32?e="J":-32>t&&t>=-40?e="H":-40>t&&t>=-48?e="G":-48>t&&t>=-56?e="F":-56>t&&t>=-64?e="E":-64>t&&t>=-72?e="D":-72>t&&t>=-80&&(e="C"),e}function xA(t,e){var n="00000"+t.easting,i="00000"+t.northing;return t.zoneNumber+t.zoneLetter+CA(t.easting,t.northing,t.zoneNumber)+n.substr(n.length-5,e)+i.substr(i.length-5,e)}function CA(t,e,n){var i=o1(n),s=Math.floor(t/1e5),r=Math.floor(e/1e5)%20;return kA(s,r,i)}function o1(t){var e=t%qm;return e===0&&(e=qm),e}function kA(t,e,n){var i=n-1,s=n1.charCodeAt(i),r=i1.charCodeAt(i),o=s+t-1,a=r+e,l=!1;o>xo&&(o=o-xo+_r-1,l=!0),(o===Jt||s<Jt&&o>Jt||(o>Jt||s<Jt)&&l)&&o++,(o===xn||s<xn&&o>xn||(o>xn||s<xn)&&l)&&(o++,o===Jt&&o++),o>xo&&(o=o-xo+_r-1),a>Mo?(a=a-Mo+_r-1,l=!0):l=!1,(a===Jt||r<Jt&&a>Jt||(a>Jt||r<Jt)&&l)&&a++,(a===xn||r<xn&&a>xn||(a>xn||r<xn)&&l)&&(a++,a===Jt&&a++),a>Mo&&(a=a-Mo+_r-1);var c=String.fromCharCode(o)+String.fromCharCode(a);return c}function a1(t){if(t&&t.length===0)throw"MGRSPoint coverting from nothing";for(var e=t.length,n=null,i="",s,r=0;!/[A-Z]/.test(s=t.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+t;i+=s,r++}var o=parseInt(i,10);if(r===0||r+3>e)throw"MGRSPoint bad conversion from: "+t;var a=t.charAt(r++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+t;n=t.substring(r,r+=2);for(var l=o1(o),c=PA(n.charAt(0),l),u=TA(n.charAt(1),l);u<RA(a);)u+=2e6;var h=e-r;if(h%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+t;var d=h/2,f=0,g=0,m,p,_,y,w;return d>0&&(m=1e5/Math.pow(10,d),p=t.substring(r,r+d),f=parseFloat(p)*m,_=t.substring(r+d),g=parseFloat(_)*m),y=f+c,w=g+u,{easting:y,northing:w,zoneLetter:a,zoneNumber:o,accuracy:m}}function PA(t,e){for(var n=n1.charCodeAt(e-1),i=1e5,s=!1;n!==t.charCodeAt(0);){if(n++,n===Jt&&n++,n===xn&&n++,n>xo){if(s)throw"Bad character: "+t;n=_r,s=!0}i+=1e5}return i}function TA(t,e){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var n=i1.charCodeAt(e-1),i=0,s=!1;n!==t.charCodeAt(0);){if(n++,n===Jt&&n++,n===xn&&n++,n>Mo){if(s)throw"Bad character: "+t;n=_r,s=!0}i+=1e5}return i}function RA(t){var e;switch(t){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+t}function qr(t,e,n){if(!(this instanceof qr))return new qr(t,e,n);if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2]||0;else if(typeof t=="object")this.x=t.x,this.y=t.y,this.z=t.z||0;else if(typeof t=="string"&&typeof e>"u"){var i=t.split(",");this.x=parseFloat(i[0]),this.y=parseFloat(i[1]),this.z=parseFloat(i[2])||0}else this.x=t,this.y=e,this.z=n||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}qr.fromMGRS=function(t){return new qr(r1(t))};qr.prototype.toMGRS=function(t){return s1([this.x,this.y],t)};var AA=1,IA=.25,Zm=.046875,Xm=.01953125,Ym=.01068115234375,LA=.75,OA=.46875,FA=.013020833333333334,NA=.007120768229166667,DA=.3645833333333333,GA=.005696614583333333,zA=.3076171875;function of(t){var e=[];e[0]=AA-t*(IA+t*(Zm+t*(Xm+t*Ym))),e[1]=t*(LA-t*(Zm+t*(Xm+t*Ym)));var n=t*t;return e[2]=n*(OA-t*(FA+t*NA)),n*=t,e[3]=n*(DA-t*GA),e[4]=n*t*zA,e}function no(t,e,n,i){return n*=e,e*=e,i[0]*t-n*(i[1]+e*(i[2]+e*(i[3]+e*i[4])))}var BA=20;function af(t,e,n){for(var i=1/(1-e),s=t,r=BA;r;--r){var o=Math.sin(s),a=1-e*o*o;if(a=(no(s,o,Math.cos(s),n)-t)*(a*Math.sqrt(a))*i,s-=a,Math.abs(a)<K)return s}return s}function jA(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=of(this.es),this.ml0=no(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function WA(t){var e=t.x,n=t.y,i=Q(e-this.long0,this.over),s,r,o,a=Math.sin(n),l=Math.cos(n);if(this.es){var u=l*i,h=Math.pow(u,2),d=this.ep2*Math.pow(l,2),f=Math.pow(d,2),g=Math.abs(l)>K?Math.tan(n):0,m=Math.pow(g,2),p=Math.pow(m,2);s=1-this.es*Math.pow(a,2),u=u/Math.sqrt(s);var _=no(n,a,l,this.en);r=this.a*(this.k0*u*(1+h/6*(1-m+d+h/20*(5-18*m+p+14*d-58*m*d+h/42*(61+179*p-p*m-479*m)))))+this.x0,o=this.a*(this.k0*(_-this.ml0+a*i*u/2*(1+h/12*(5-m+9*d+4*f+h/30*(61+p-58*m+270*d-330*m*d+h/56*(1385+543*p-p*m-3111*m))))))+this.y0}else{var c=l*Math.sin(i);if(Math.abs(Math.abs(c)-1)<K)return 93;if(r=.5*this.a*this.k0*Math.log((1+c)/(1-c))+this.x0,o=l*Math.cos(i)/Math.sqrt(1-Math.pow(c,2)),c=Math.abs(o),c>=1){if(c-1>K)return 93;o=0}else o=Math.acos(o);n<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return t.x=r,t.y=o,t}function VA(t){var e,n,i,s,r=(t.x-this.x0)*(1/this.a),o=(t.y-this.y0)*(1/this.a);if(this.es)if(e=this.ml0+o/this.k0,n=af(e,this.es,this.en),Math.abs(n)<G){var h=Math.sin(n),d=Math.cos(n),f=Math.abs(d)>K?Math.tan(n):0,g=this.ep2*Math.pow(d,2),m=Math.pow(g,2),p=Math.pow(f,2),_=Math.pow(p,2);e=1-this.es*Math.pow(h,2);var y=r*Math.sqrt(e)/this.k0,w=Math.pow(y,2);e=e*f,i=n-e*w/(1-this.es)*.5*(1-w/12*(5+3*p-9*g*p+g-4*m-w/30*(61+90*p-252*g*p+45*_+46*g-w/56*(1385+3633*p+4095*_+1574*_*p)))),s=Q(this.long0+y*(1-w/6*(1+2*p+g-w/20*(5+28*p+24*_+8*g*p+6*g-w/42*(61+662*p+1320*_+720*_*p))))/d,this.over)}else i=G*Fa(o),s=0;else{var a=Math.exp(r/this.k0),l=.5*(a-1/a),c=this.lat0+o/this.k0,u=Math.cos(c);e=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(l,2))),i=Math.asin(e),o<0&&(i=-i),l===0&&u===0?s=0:s=Q(Math.atan2(l,u)+this.long0,this.over)}return t.x=s,t.y=i,t}var UA=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const wl={init:jA,forward:WA,inverse:VA,names:UA};function l1(t){var e=Math.exp(t);return e=(e-1/e)/2,e}function on(t,e){t=Math.abs(t),e=Math.abs(e);var n=Math.max(t,e),i=Math.min(t,e)/(n||1);return n*Math.sqrt(1+Math.pow(i,2))}function KA(t){var e=1+t,n=e-1;return n===0?t:t*Math.log(e)/n}function $A(t){var e=Math.abs(t);return e=KA(e*(1+e/(on(1,e)+1))),t<0?-e:e}function lf(t,e){for(var n=2*Math.cos(2*e),i=t.length-1,s=t[i],r=0,o;--i>=0;)o=-r+n*s+t[i],r=s,s=o;return e+o*Math.sin(2*e)}function qA(t,e){for(var n=2*Math.cos(e),i=t.length-1,s=t[i],r=0,o;--i>=0;)o=-r+n*s+t[i],r=s,s=o;return Math.sin(e)*o}function HA(t){var e=Math.exp(t);return e=(e+1/e)/2,e}function c1(t,e,n){for(var i=Math.sin(e),s=Math.cos(e),r=l1(n),o=HA(n),a=2*s*o,l=-2*i*r,c=t.length-1,u=t[c],h=0,d=0,f=0,g,m;--c>=0;)g=d,m=h,d=u,h=f,u=-g+a*d-l*h+t[c],f=-m+l*d+a*h;return a=i*o,l=s*r,[a*u-l*f,a*f+l*u]}function ZA(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(wl.init.apply(this),this.forward=wl.forward,this.inverse=wl.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),e=t/(2-t),n=e;this.cgb[0]=e*(2+e*(-2/3+e*(-2+e*(116/45+e*(26/45+e*(-2854/675)))))),this.cbg[0]=e*(-2+e*(2/3+e*(4/3+e*(-82/45+e*(32/45+e*(4642/4725)))))),n=n*e,this.cgb[1]=n*(7/3+e*(-8/5+e*(-227/45+e*(2704/315+e*(2323/945))))),this.cbg[1]=n*(5/3+e*(-16/15+e*(-13/9+e*(904/315+e*(-1522/945))))),n=n*e,this.cgb[2]=n*(56/15+e*(-136/35+e*(-1262/105+e*(73814/2835)))),this.cbg[2]=n*(-26/15+e*(34/21+e*(8/5+e*(-12686/2835)))),n=n*e,this.cgb[3]=n*(4279/630+e*(-332/35+e*(-399572/14175))),this.cbg[3]=n*(1237/630+e*(-12/5+e*(-24832/14175))),n=n*e,this.cgb[4]=n*(4174/315+e*(-144838/6237)),this.cbg[4]=n*(-734/315+e*(109598/31185)),n=n*e,this.cgb[5]=n*(601676/22275),this.cbg[5]=n*(444337/155925),n=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+n*(1/4+n*(1/64+n/256))),this.utg[0]=e*(-.5+e*(2/3+e*(-37/96+e*(1/360+e*(81/512+e*(-96199/604800)))))),this.gtu[0]=e*(.5+e*(-2/3+e*(5/16+e*(41/180+e*(-127/288+e*(7891/37800)))))),this.utg[1]=n*(-1/48+e*(-1/15+e*(437/1440+e*(-46/105+e*(1118711/3870720))))),this.gtu[1]=n*(13/48+e*(-3/5+e*(557/1440+e*(281/630+e*(-1983433/1935360))))),n=n*e,this.utg[2]=n*(-17/480+e*(37/840+e*(209/4480+e*(-5569/90720)))),this.gtu[2]=n*(61/240+e*(-103/140+e*(15061/26880+e*(167603/181440)))),n=n*e,this.utg[3]=n*(-4397/161280+e*(11/504+e*(830251/7257600))),this.gtu[3]=n*(49561/161280+e*(-179/168+e*(6601661/7257600))),n=n*e,this.utg[4]=n*(-4583/161280+e*(108847/3991680)),this.gtu[4]=n*(34729/80640+e*(-3418889/1995840)),n=n*e,this.utg[5]=n*(-20648693/638668800),this.gtu[5]=n*(212378941/319334400);var i=lf(this.cbg,this.lat0);this.Zb=-this.Qn*(i+qA(this.gtu,2*i))}function XA(t){var e=Q(t.x-this.long0,this.over),n=t.y;n=lf(this.cbg,n);var i=Math.sin(n),s=Math.cos(n),r=Math.sin(e),o=Math.cos(e);n=Math.atan2(i,o*s),e=Math.atan2(r*s,on(i,s*o)),e=$A(Math.tan(e));var a=c1(this.gtu,2*n,2*e);n=n+a[0],e=e+a[1];var l,c;return Math.abs(e)<=2.623395162778?(l=this.a*(this.Qn*e)+this.x0,c=this.a*(this.Qn*n+this.Zb)+this.y0):(l=1/0,c=1/0),t.x=l,t.y=c,t}function YA(t){var e=(t.x-this.x0)*(1/this.a),n=(t.y-this.y0)*(1/this.a);n=(n-this.Zb)/this.Qn,e=e/this.Qn;var i,s;if(Math.abs(e)<=2.623395162778){var r=c1(this.utg,2*n,2*e);n=n+r[0],e=e+r[1],e=Math.atan(l1(e));var o=Math.sin(n),a=Math.cos(n),l=Math.sin(e),c=Math.cos(e);n=Math.atan2(o*c,on(l,c*a)),e=Math.atan2(l,c*a),i=Q(e+this.long0,this.over),s=lf(this.cgb,n)}else i=1/0,s=1/0;return t.x=i,t.y=s,t}var JA=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Sl={init:ZA,forward:XA,inverse:YA,names:JA};function QA(t,e){if(t===void 0){if(t=Math.floor((Q(e)+Math.PI)*30/Math.PI)+1,t<0)return 0;if(t>60)return 60}return t}var eI="etmerc";function tI(){var t=QA(this.zone,this.long0);if(t===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(t)-183)*ft,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Sl.init.apply(this),this.forward=Sl.forward,this.inverse=Sl.inverse}var nI=["Universal Transverse Mercator System","utm"];const iI={init:tI,names:nI,dependsOn:eI};function cf(t,e){return Math.pow((1-t)/(1+t),e)}var sI=20;function rI(){var t=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*t*t),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(t/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Ue)/(Math.pow(Math.tan(.5*this.lat0+Ue),this.C)*cf(this.e*t,this.ratexp))}function oI(t){var e=t.x,n=t.y;return t.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*n+Ue),this.C)*cf(this.e*Math.sin(n),this.ratexp))-G,t.x=this.C*e,t}function aI(t){for(var e=1e-14,n=t.x/this.C,i=t.y,s=Math.pow(Math.tan(.5*i+Ue)/this.K,1/this.C),r=sI;r>0&&(i=2*Math.atan(s*cf(this.e*Math.sin(t.y),-.5*this.e))-G,!(Math.abs(i-t.y)<e));--r)t.y=i;return r?(t.x=n,t.y=i,t):null}const uf={init:rI,forward:oI,inverse:aI};function lI(){uf.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function cI(t){var e,n,i,s;return t.x=Q(t.x-this.long0,this.over),uf.forward.apply(this,[t]),e=Math.sin(t.y),n=Math.cos(t.y),i=Math.cos(t.x),s=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*n*i),t.x=s*n*Math.sin(t.x),t.y=s*(this.cosc0*e-this.sinc0*n*i),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function uI(t){var e,n,i,s,r;if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,r=on(t.x,t.y)){var o=2*Math.atan2(r,this.R2);e=Math.sin(o),n=Math.cos(o),s=Math.asin(n*this.sinc0+t.y*e*this.cosc0/r),i=Math.atan2(t.x*e,r*this.cosc0*n-t.y*this.sinc0*e)}else s=this.phic0,i=0;return t.x=i,t.y=s,uf.inverse.apply(this,[t]),t.x=Q(t.x+this.long0,this.over),t}var hI=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const dI={init:lI,forward:cI,inverse:uI,names:hI};function hf(t,e,n){return e*=n,Math.tan(.5*(G+t))*Math.pow((1-e)/(1+e),.5*n)}function fI(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=K&&(this.k0=.5*(1+Fa(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=K&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=K&&Math.abs(Math.cos(this.lat_ts))>K&&(this.k0=.5*this.cons*ai(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/Dn(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=ai(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(hf(this.lat0,this.sinlat0,this.e))-G,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function gI(t){var e=t.x,n=t.y,i=Math.sin(n),s=Math.cos(n),r,o,a,l,c,u,h=Q(e-this.long0,this.over);return Math.abs(Math.abs(e-this.long0)-Math.PI)<=K&&Math.abs(n+this.lat0)<=K?(t.x=NaN,t.y=NaN,t):this.sphere?(r=2*this.k0/(1+this.sinlat0*i+this.coslat0*s*Math.cos(h)),t.x=this.a*r*s*Math.sin(h)+this.x0,t.y=this.a*r*(this.coslat0*i-this.sinlat0*s*Math.cos(h))+this.y0,t):(o=2*Math.atan(hf(n,i,this.e))-G,l=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=K?(c=Dn(this.e,n*this.con,this.con*i),u=2*this.a*this.k0*c/this.cons,t.x=this.x0+u*Math.sin(e-this.long0),t.y=this.y0-this.con*u*Math.cos(e-this.long0),t):(Math.abs(this.sinlat0)<K?(r=2*this.a*this.k0/(1+l*Math.cos(h)),t.y=r*a):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*l*Math.cos(h))),t.y=r*(this.cosX0*a-this.sinX0*l*Math.cos(h))+this.y0),t.x=r*l*Math.sin(h)+this.x0,t))}function mI(t){t.x-=this.x0,t.y-=this.y0;var e,n,i,s,r,o=Math.sqrt(t.x*t.x+t.y*t.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return e=this.long0,n=this.lat0,o<=K?(t.x=e,t.y=n,t):(n=Math.asin(Math.cos(a)*this.sinlat0+t.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<K?this.lat0>0?e=Q(this.long0+Math.atan2(t.x,-1*t.y),this.over):e=Q(this.long0+Math.atan2(t.x,t.y),this.over):e=Q(this.long0+Math.atan2(t.x*Math.sin(a),o*this.coslat0*Math.cos(a)-t.y*this.sinlat0*Math.sin(a)),this.over),t.x=e,t.y=n,t)}else if(Math.abs(this.coslat0)<=K){if(o<=K)return n=this.lat0,e=this.long0,t.x=e,t.y=n,t;t.x*=this.con,t.y*=this.con,i=o*this.cons/(2*this.a*this.k0),n=this.con*_a(this.e,i),e=this.con*Q(this.con*this.long0+Math.atan2(t.x,-1*t.y),this.over)}else s=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,o<=K?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+t.y*Math.sin(s)*this.cosX0/o),e=Q(this.long0+Math.atan2(t.x*Math.sin(s),o*this.cosX0*Math.cos(s)-t.y*this.sinX0*Math.sin(s)),this.over)),n=-1*_a(this.e,Math.tan(.5*(G+r)));return t.x=e,t.y=n,t}var pI=["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"];const _I={init:fI,forward:gI,inverse:mI,names:pI,ssfn_:hf};function yI(){var t=this.lat0;this.lambda0=this.long0;var e=Math.sin(t),n=this.a,i=this.rf,s=1/i,r=2*s-Math.pow(s,2),o=this.e=Math.sqrt(r);this.R=this.k0*n*Math.sqrt(1-r)/(1-r*Math.pow(e,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(t),4)),this.b0=Math.asin(e/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+t/2)),c=Math.log((1+o*e)/(1-o*e));this.K=a-this.alpha*l+this.alpha*o/2*c}function vI(t){var e=Math.log(Math.tan(Math.PI/4-t.y/2)),n=this.e/2*Math.log((1+this.e*Math.sin(t.y))/(1-this.e*Math.sin(t.y))),i=-this.alpha*(e+n)+this.K,s=2*(Math.atan(Math.exp(i))-Math.PI/4),r=this.alpha*(t.x-this.lambda0),o=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),a=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return t.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,t.x=this.R*o+this.x0,t}function wI(t){for(var e=t.x-this.x0,n=t.y-this.y0,i=e/this.R,s=2*(Math.atan(Math.exp(n/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(s))),a=this.lambda0+o/this.alpha,l=0,c=r,u=-1e3,h=0;Math.abs(c-u)>1e-7;){if(++h>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(c))/2)),u=c,c=2*Math.atan(Math.exp(l))-Math.PI/2}return t.x=a,t.y=c,t}var SI=["somerc"];const bI={init:yI,forward:vI,inverse:wI,names:SI};var hr=1e-7;function EI(t){var e=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],n=typeof t.projName=="object"?Object.keys(t.projName)[0]:t.projName;return"no_uoff"in t||"no_off"in t||e.indexOf(n)!==-1||e.indexOf(Yy(n))!==-1}function MI(){var t,e,n,i,s,r,o,a,l,c,u=0,h,d=0,f=0,g=0,m=0,p=0,_=0;this.no_off=EI(this),this.no_rot="no_rot"in this;var y=!1;"alpha"in this&&(y=!0);var w=!1;if("rectified_grid_angle"in this&&(w=!0),y&&(_=this.alpha),w&&(u=this.rectified_grid_angle),y||w)d=this.longc;else if(f=this.long1,m=this.lat1,g=this.long2,p=this.lat2,Math.abs(m-p)<=hr||(t=Math.abs(m))<=hr||Math.abs(t-G)<=hr||Math.abs(Math.abs(this.lat0)-G)<=hr||Math.abs(Math.abs(p)-G)<=hr)throw new Error;var b=1-this.es;e=Math.sqrt(b),Math.abs(this.lat0)>K?(a=Math.sin(this.lat0),n=Math.cos(this.lat0),t=1-this.es*a*a,this.B=n*n,this.B=Math.sqrt(1+this.es*this.B*this.B/b),this.A=this.B*this.k0*e/t,i=this.B*e/(n*Math.sqrt(t)),s=i*i-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=i,this.E*=Math.pow(Dn(this.e,this.lat0,a),this.B)):(this.B=1/e,this.A=this.k0,this.E=i=s=1),y||w?(y?(h=Math.asin(Math.sin(_)/i),w||(u=_)):(h=u,_=Math.asin(i*Math.sin(h))),this.lam0=d-Math.asin(.5*(s-1/s)*Math.tan(h))/this.B):(r=Math.pow(Dn(this.e,m,Math.sin(m)),this.B),o=Math.pow(Dn(this.e,p,Math.sin(p)),this.B),s=this.E/r,l=(o-r)/(o+r),c=this.E*this.E,c=(c-o*r)/(c+o*r),t=f-g,t<-Math.PI?g-=ma:t>Math.PI&&(g+=ma),this.lam0=Q(.5*(f+g)-Math.atan(c*Math.tan(.5*this.B*(f-g))/l)/this.B,this.over),h=Math.atan(2*Math.sin(this.B*Q(f-this.lam0,this.over))/(s-1/s)),u=_=Math.asin(i*Math.sin(h))),this.singam=Math.sin(h),this.cosgam=Math.cos(h),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*h,this.v_pole_n=this.ArB*Math.log(Math.tan(Ue-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(Ue+s))}function xI(t){var e={},n,i,s,r,o,a,l,c;if(t.x=t.x-this.lam0,Math.abs(Math.abs(t.y)-G)>K){if(o=this.E/Math.pow(Dn(this.e,t.y,Math.sin(t.y)),this.B),a=1/o,n=.5*(o-a),i=.5*(o+a),r=Math.sin(this.B*t.x),s=(n*this.singam-r*this.cosgam)/i,Math.abs(Math.abs(s)-1)<K)throw new Error;c=.5*this.ArB*Math.log((1-s)/(1+s)),a=Math.cos(this.B*t.x),Math.abs(a)<hr?l=this.A*t.x:l=this.ArB*Math.atan2(n*this.cosgam+r*this.singam,a)}else c=t.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*t.y;return this.no_rot?(e.x=l,e.y=c):(l-=this.u_0,e.x=c*this.cosrot+l*this.sinrot,e.y=l*this.cosrot-c*this.sinrot),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function CI(t){var e,n,i,s,r,o,a,l={};if(t.x=(t.x-this.x0)*(1/this.a),t.y=(t.y-this.y0)*(1/this.a),this.no_rot?(n=t.y,e=t.x):(n=t.x*this.cosrot-t.y*this.sinrot,e=t.y*this.cosrot+t.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*n),s=.5*(i-1/i),r=.5*(i+1/i),o=Math.sin(this.BrA*e),a=(o*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(a)-1)<K)l.x=0,l.y=a<0?-G:G;else{if(l.y=this.E/Math.sqrt((1+a)/(1-a)),l.y=_a(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(s*this.cosgam-o*this.singam,Math.cos(this.BrA*e))}return l.x+=this.lam0,l}var kI=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const PI={init:MI,forward:xI,inverse:CI,names:kI};function TI(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<K)){var t=this.b/this.a;this.e=Math.sqrt(1-t*t);var e=Math.sin(this.lat1),n=Math.cos(this.lat1),i=ai(this.e,e,n),s=Dn(this.e,this.lat1,e),r=Math.sin(this.lat2),o=Math.cos(this.lat2),a=ai(this.e,r,o),l=Dn(this.e,this.lat2,r),c=Math.abs(Math.abs(this.lat0)-G)<K?0:Dn(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>K?this.ns=Math.log(i/a)/Math.log(s/l):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=i/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(c,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function RI(t){var e=t.x,n=t.y;Math.abs(2*Math.abs(n)-Math.PI)<=K&&(n=Fa(n)*(G-2*K));var i=Math.abs(Math.abs(n)-G),s,r;if(i>K)s=Dn(this.e,n,Math.sin(n)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(i=n*this.ns,i<=0)return null;r=0}var o=this.ns*Q(e-this.long0,this.over);return t.x=this.k0*(r*Math.sin(o))+this.x0,t.y=this.k0*(this.rh-r*Math.cos(o))+this.y0,t}function AI(t){var e,n,i,s,r,o=(t.x-this.x0)/this.k0,a=this.rh-(t.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(o*o+a*a),n=1):(e=-Math.sqrt(o*o+a*a),n=-1);var l=0;if(e!==0&&(l=Math.atan2(n*o,n*a)),e!==0||this.ns>0){if(n=1/this.ns,i=Math.pow(e/(this.a*this.f0),n),s=_a(this.e,i),s===-9999)return null}else s=-G;return r=Q(l/this.ns+this.long0,this.over),t.x=r,t.y=s,t}var II=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const LI={init:TI,forward:RI,inverse:AI,names:II};function OI(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function FI(t){var e,n,i,s,r,o,a,l=t.x,c=t.y,u=Q(l-this.long0,this.over);return e=Math.pow((1+this.e*Math.sin(c))/(1-this.e*Math.sin(c)),this.alfa*this.e/2),n=2*(Math.atan(this.k*Math.pow(Math.tan(c/2+this.s45),this.alfa)/e)-this.s45),i=-u*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(n)+Math.sin(this.ad)*Math.cos(n)*Math.cos(i)),r=Math.asin(Math.cos(n)*Math.sin(i)/Math.cos(s)),o=this.n*r,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),t.y=a*Math.cos(o)/1,t.x=a*Math.sin(o)/1,this.czech||(t.y*=-1,t.x*=-1),t}function NI(t){var e,n,i,s,r,o,a,l,c=t.x;t.x=t.y,t.y=c,this.czech||(t.y*=-1,t.x*=-1),o=Math.sqrt(t.x*t.x+t.y*t.y),r=Math.atan2(t.y,t.x),s=r/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(s)),n=Math.asin(Math.cos(i)*Math.sin(s)/Math.cos(e)),t.x=this.long0-n/this.alfa,a=e,l=0;var u=0;do t.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-t.y)<1e-10&&(l=1),a=t.y,u+=1;while(l===0&&u<15);return u>=15?null:t}var DI=["Krovak","krovak"];const GI={init:OI,forward:FI,inverse:NI,names:DI};function Xt(t,e,n,i,s){return t*s-e*Math.sin(2*s)+n*Math.sin(4*s)-i*Math.sin(6*s)}function Na(t){return 1-.25*t*(1+t/16*(3+1.25*t))}function Da(t){return .375*t*(1+.25*t*(1+.46875*t))}function Ga(t){return .05859375*t*t*(1+.75*t)}function za(t){return t*t*t*(35/3072)}function df(t,e,n){var i=e*n;return t/Math.sqrt(1-i*i)}function ps(t){return Math.abs(t)<G?t:t-Fa(t)*Math.PI}function tc(t,e,n,i,s){var r,o;r=t/e;for(var a=0;a<15;a++)if(o=(t-(e*r-n*Math.sin(2*r)+i*Math.sin(4*r)-s*Math.sin(6*r)))/(e-2*n*Math.cos(2*r)+4*i*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=o,Math.abs(o)<=1e-10)return r;return NaN}function zI(){this.sphere||(this.e0=Na(this.es),this.e1=Da(this.es),this.e2=Ga(this.es),this.e3=za(this.es),this.ml0=this.a*Xt(this.e0,this.e1,this.e2,this.e3,this.lat0))}function BI(t){var e,n,i=t.x,s=t.y;if(i=Q(i-this.long0,this.over),this.sphere)e=this.a*Math.asin(Math.cos(s)*Math.sin(i)),n=this.a*(Math.atan2(Math.tan(s),Math.cos(i))-this.lat0);else{var r=Math.sin(s),o=Math.cos(s),a=df(this.a,this.e,r),l=Math.tan(s)*Math.tan(s),c=i*Math.cos(s),u=c*c,h=this.es*o*o/(1-this.es),d=this.a*Xt(this.e0,this.e1,this.e2,this.e3,s);e=a*c*(1-u*l*(1/6-(8-l+8*h)*u/120)),n=d-this.ml0+a*r/o*u*(.5+(5-l+6*h)*u/24)}return t.x=e+this.x0,t.y=n+this.y0,t}function jI(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,n=t.y/this.a,i,s;if(this.sphere){var r=n+this.lat0;i=Math.asin(Math.sin(r)*Math.cos(e)),s=Math.atan2(Math.tan(e),Math.cos(r))}else{var o=this.ml0/this.a+n,a=tc(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-G)<=K)return t.x=this.long0,t.y=G,n<0&&(t.y*=-1),t;var l=df(this.a,this.e,Math.sin(a)),c=l*l*l/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(a),2),h=e*this.a/l,d=h*h;i=a-l*Math.tan(a)/c*h*h*(.5-(1+3*u)*h*h/24),s=h*(1-d*(u/3+(1+3*u)*u*d/15))/Math.cos(a)}return t.x=Q(s+this.long0,this.over),t.y=ps(i),t}var WI=["Cassini","Cassini_Soldner","cass"];const VI={init:zI,forward:BI,inverse:jI,names:WI};function os(t,e){var n;return t>1e-7?(n=t*e,(1-t*t)*(e/(1-n*n)-.5/t*Math.log((1-n)/(1+n)))):2*e}var Ph=1,Th=2,Rh=3,bl=4;function UI(){var t=Math.abs(this.lat0);if(Math.abs(t-G)<K?this.mode=this.lat0<0?Ph:Th:Math.abs(t)<K?this.mode=Rh:this.mode=bl,this.es>0){var e;switch(this.qp=os(this.e,1),this.mmf=.5/(1-this.es),this.apa=QI(this.es),this.mode){case Th:this.dd=1;break;case Ph:this.dd=1;break;case Rh:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case bl:this.rq=Math.sqrt(.5*this.qp),e=Math.sin(this.lat0),this.sinb1=os(this.e,e)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*e*e)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===bl&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function KI(t){var e,n,i,s,r,o,a,l,c,u,h=t.x,d=t.y;if(h=Q(h-this.long0,this.over),this.sphere){if(r=Math.sin(d),u=Math.cos(d),i=Math.cos(h),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(n=this.mode===this.EQUIT?1+u*i:1+this.sinph0*r+this.cosph0*u*i,n<=K)return null;n=Math.sqrt(2/n),e=n*u*Math.sin(h),n*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*u*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(d+this.lat0)<K)return null;n=Ue-d*.5,n=2*(this.mode===this.S_POLE?Math.cos(n):Math.sin(n)),e=n*Math.sin(h),n*=i}}else{switch(a=0,l=0,c=0,i=Math.cos(h),s=Math.sin(h),r=Math.sin(d),o=os(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,l=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:c=1+this.sinb1*a+this.cosb1*l*i;break;case this.EQUIT:c=1+l*i;break;case this.N_POLE:c=G+d,o=this.qp-o;break;case this.S_POLE:c=d-G,o=this.qp+o;break}if(Math.abs(c)<K)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:c=Math.sqrt(2/c),this.mode===this.OBLIQ?n=this.ymf*c*(this.cosb1*a-this.sinb1*l*i):n=(c=Math.sqrt(2/(1+l*i)))*a*this.ymf,e=this.xmf*c*l*s;break;case this.N_POLE:case this.S_POLE:o>=0?(e=(c=Math.sqrt(o))*s,n=i*(this.mode===this.S_POLE?c:-c)):e=n=0;break}}return t.x=this.a*e+this.x0,t.y=this.a*n+this.y0,t}function $I(t){t.x-=this.x0,t.y-=this.y0;var e=t.x/this.a,n=t.y/this.a,i,s,r,o,a,l,c;if(this.sphere){var u=0,h,d=0;if(h=Math.sqrt(e*e+n*n),s=h*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(d=Math.sin(s),u=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(h)<=K?0:Math.asin(n*d/h),e*=d,n=u*h;break;case this.OBLIQ:s=Math.abs(h)<=K?this.lat0:Math.asin(u*this.sinph0+n*d*this.cosph0/h),e*=d*this.cosph0,n=(u-Math.sin(s)*this.sinph0)*h;break;case this.N_POLE:n=-n,s=G-s;break;case this.S_POLE:s-=G;break}i=n===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(e,n)}else{if(c=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e/=this.dd,n*=this.dd,l=Math.sqrt(e*e+n*n),l<K)return t.x=this.long0,t.y=this.lat0,t;o=2*Math.asin(.5*l/this.rq),r=Math.cos(o),e*=o=Math.sin(o),this.mode===this.OBLIQ?(c=r*this.sinb1+n*o*this.cosb1/l,a=this.qp*c,n=l*this.cosb1*r-n*this.sinb1*o):(c=n*o/l,a=this.qp*c,n=l*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),a=e*e+n*n,!a)return t.x=this.long0,t.y=this.lat0,t;c=1-a/this.qp,this.mode===this.S_POLE&&(c=-c)}i=Math.atan2(e,n),s=e4(Math.asin(c),this.apa)}return t.x=Q(this.long0+i,this.over),t.y=s,t}var qI=.3333333333333333,HI=.17222222222222222,ZI=.10257936507936508,XI=.06388888888888888,YI=.0664021164021164,JI=.016415012942191543;function QI(t){var e,n=[];return n[0]=t*qI,e=t*t,n[0]+=e*HI,n[1]=e*XI,e*=t,n[0]+=e*ZI,n[1]+=e*YI,n[2]=e*JI,n}function e4(t,e){var n=t+t;return t+e[0]*Math.sin(n)+e[1]*Math.sin(n+n)+e[2]*Math.sin(n+n+n)}var t4=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const n4={init:UI,forward:KI,inverse:$I,names:t4,S_POLE:Ph,N_POLE:Th,EQUIT:Rh,OBLIQ:bl};function gs(t){return Math.abs(t)>1&&(t=t>1?1:-1),Math.asin(t)}function i4(){Math.abs(this.lat1+this.lat2)<K||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=ai(this.e3,this.sin_po,this.cos_po),this.qs1=os(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=ai(this.e3,this.sin_po,this.cos_po),this.qs2=os(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=os(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>K?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function s4(t){var e=t.x,n=t.y;this.sin_phi=Math.sin(n),this.cos_phi=Math.cos(n);var i=os(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,r=this.ns0*Q(e-this.long0,this.over),o=s*Math.sin(r)+this.x0,a=this.rh-s*Math.cos(r)+this.y0;return t.x=o,t.y=a,t}function r4(t){var e,n,i,s,r,o;return t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns0>=0?(e=Math.sqrt(t.x*t.x+t.y*t.y),i=1):(e=-Math.sqrt(t.x*t.x+t.y*t.y),i=-1),s=0,e!==0&&(s=Math.atan2(i*t.x,i*t.y)),i=e*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(n=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,n)),r=Q(s/this.ns0+this.long0,this.over),t.x=r,t.y=o,t}function o4(t,e){var n,i,s,r,o,a=gs(.5*e);if(t<K)return a;for(var l=t*t,c=1;c<=25;c++)if(n=Math.sin(a),i=Math.cos(a),s=t*n,r=1-s*s,o=.5*r*r/i*(e/(1-l)-n/r+.5/t*Math.log((1-s)/(1+s))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var a4=["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"];const l4={init:i4,forward:s4,inverse:r4,names:a4,phi1z:o4};function c4(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function u4(t){var e,n,i,s,r,o,a,l,c=t.x,u=t.y;return i=Q(c-this.long0,this.over),e=Math.sin(u),n=Math.cos(u),s=Math.cos(i),o=this.sin_p14*e+this.cos_p14*n*s,r=1,o>0||Math.abs(o)<=K?(a=this.x0+this.a*r*n*Math.sin(i)/o,l=this.y0+this.a*r*(this.cos_p14*e-this.sin_p14*n*s)/o):(a=this.x0+this.infinity_dist*n*Math.sin(i),l=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*n*s)),t.x=a,t.y=l,t}function h4(t){var e,n,i,s,r,o;return t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,(e=Math.sqrt(t.x*t.x+t.y*t.y))?(s=Math.atan2(e,this.rc),n=Math.sin(s),i=Math.cos(s),o=gs(i*this.sin_p14+t.y*n*this.cos_p14/e),r=Math.atan2(t.x*n,e*this.cos_p14*i-t.y*this.sin_p14*n),r=Q(this.long0+r,this.over)):(o=this.phic0,r=0),t.x=r,t.y=o,t}var d4=["gnom"];const f4={init:c4,forward:u4,inverse:h4,names:d4};function g4(t,e){var n=1-(1-t*t)/(2*t)*Math.log((1-t)/(1+t));if(Math.abs(Math.abs(e)-n)<1e-6)return e<0?-1*G:G;for(var i=Math.asin(.5*e),s,r,o,a,l=0;l<30;l++)if(r=Math.sin(i),o=Math.cos(i),a=t*r,s=Math.pow(1-a*a,2)/(2*o)*(e/(1-t*t)-r/(1-a*a)+.5/t*Math.log((1-a)/(1+a))),i+=s,Math.abs(s)<=1e-10)return i;return NaN}function m4(){this.sphere||(this.k0=ai(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function p4(t){var e=t.x,n=t.y,i,s,r=Q(e-this.long0,this.over);if(this.sphere)i=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(n)/Math.cos(this.lat_ts);else{var o=os(this.e,Math.sin(n));i=this.x0+this.a*this.k0*r,s=this.y0+this.a*o*.5/this.k0}return t.x=i,t.y=s,t}function _4(t){t.x-=this.x0,t.y-=this.y0;var e,n;return this.sphere?(e=Q(this.long0+t.x/this.a/Math.cos(this.lat_ts),this.over),n=Math.asin(t.y/this.a*Math.cos(this.lat_ts))):(n=g4(this.e,2*t.y*this.k0/this.a),e=Q(this.long0+t.x/(this.a*this.k0),this.over)),t.x=e,t.y=n,t}var y4=["cea"];const v4={init:m4,forward:p4,inverse:_4,names:y4};function w4(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function S4(t){var e=t.x,n=t.y,i=Q(e-this.long0,this.over),s=ps(n-this.lat0);return t.x=this.x0+this.a*i*this.rc,t.y=this.y0+this.a*s,t}function b4(t){var e=t.x,n=t.y;return t.x=Q(this.long0+(e-this.x0)/(this.a*this.rc),this.over),t.y=ps(this.lat0+(n-this.y0)/this.a),t}var E4=["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"];const M4={init:w4,forward:S4,inverse:b4,names:E4};var Jm=20;function x4(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Na(this.es),this.e1=Da(this.es),this.e2=Ga(this.es),this.e3=za(this.es),this.ml0=this.a*Xt(this.e0,this.e1,this.e2,this.e3,this.lat0)}function C4(t){var e=t.x,n=t.y,i,s,r,o=Q(e-this.long0,this.over);if(r=o*Math.sin(n),this.sphere)Math.abs(n)<=K?(i=this.a*o,s=-1*this.a*this.lat0):(i=this.a*Math.sin(r)/Math.tan(n),s=this.a*(ps(n-this.lat0)+(1-Math.cos(r))/Math.tan(n)));else if(Math.abs(n)<=K)i=this.a*o,s=-1*this.ml0;else{var a=df(this.a,this.e,Math.sin(n))/Math.tan(n);i=a*Math.sin(r),s=this.a*Xt(this.e0,this.e1,this.e2,this.e3,n)-this.ml0+a*(1-Math.cos(r))}return t.x=i+this.x0,t.y=s+this.y0,t}function k4(t){var e,n,i,s,r,o,a,l,c;if(i=t.x-this.x0,s=t.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=K)e=Q(i/this.a+this.long0,this.over),n=0;else{o=this.lat0+s/this.a,a=i*i/this.a/this.a+o*o,l=o;var u;for(r=Jm;r;--r)if(u=Math.tan(l),c=-1*(o*(l*u+1)-l-.5*(l*l+a)*u)/((l-o)/u-1),l+=c,Math.abs(c)<=K){n=l;break}e=Q(this.long0+Math.asin(i*Math.tan(l)/this.a)/Math.sin(n),this.over)}else if(Math.abs(s+this.ml0)<=K)n=0,e=Q(this.long0+i/this.a,this.over);else{o=(this.ml0+s)/this.a,a=i*i/this.a/this.a+o*o,l=o;var h,d,f,g,m;for(r=Jm;r;--r)if(m=this.e*Math.sin(l),h=Math.sqrt(1-m*m)*Math.tan(l),d=this.a*Xt(this.e0,this.e1,this.e2,this.e3,l),f=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),g=d/this.a,c=(o*(h*g+1)-g-.5*h*(g*g+a))/(this.es*Math.sin(2*l)*(g*g+a-2*o*g)/(4*h)+(o-g)*(h*f-2/Math.sin(2*l))-f),l-=c,Math.abs(c)<=K){n=l;break}h=Math.sqrt(1-this.es*Math.pow(Math.sin(n),2))*Math.tan(n),e=Q(this.long0+Math.asin(i*h/this.a)/Math.sin(n),this.over)}return t.x=e,t.y=n,t}var P4=["Polyconic","American_Polyconic","poly"];const T4={init:x4,forward:C4,inverse:k4,names:P4};function R4(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function A4(t){var e,n=t.x,i=t.y,s=i-this.lat0,r=n-this.long0,o=s/Bo*1e-5,a=r,l=1,c=0;for(e=1;e<=10;e++)l=l*o,c=c+this.A[e]*l;var u=c,h=a,d=1,f=0,g,m,p=0,_=0;for(e=1;e<=6;e++)g=d*u-f*h,m=f*u+d*h,d=g,f=m,p=p+this.B_re[e]*d-this.B_im[e]*f,_=_+this.B_im[e]*d+this.B_re[e]*f;return t.x=_*this.a+this.x0,t.y=p*this.a+this.y0,t}function I4(t){var e,n=t.x,i=t.y,s=n-this.x0,r=i-this.y0,o=r/this.a,a=s/this.a,l=1,c=0,u,h,d=0,f=0;for(e=1;e<=6;e++)u=l*o-c*a,h=c*o+l*a,l=u,c=h,d=d+this.C_re[e]*l-this.C_im[e]*c,f=f+this.C_im[e]*l+this.C_re[e]*c;for(var g=0;g<this.iterations;g++){var m=d,p=f,_,y,w=o,b=a;for(e=2;e<=6;e++)_=m*d-p*f,y=p*d+m*f,m=_,p=y,w=w+(e-1)*(this.B_re[e]*m-this.B_im[e]*p),b=b+(e-1)*(this.B_im[e]*m+this.B_re[e]*p);m=1,p=0;var E=this.B_re[1],P=this.B_im[1];for(e=2;e<=6;e++)_=m*d-p*f,y=p*d+m*f,m=_,p=y,E=E+e*(this.B_re[e]*m-this.B_im[e]*p),P=P+e*(this.B_im[e]*m+this.B_re[e]*p);var k=E*E+P*P;d=(w*E+b*P)/k,f=(b*E-w*P)/k}var R=d,C=f,V=1,W=0;for(e=1;e<=9;e++)V=V*R,W=W+this.D[e]*V;var A=this.lat0+W*Bo*1e5,q=this.long0+C;return t.x=q,t.y=A,t}var L4=["New_Zealand_Map_Grid","nzmg"];const O4={init:R4,forward:A4,inverse:I4,names:L4};function F4(){}function N4(t){var e=t.x,n=t.y,i=Q(e-this.long0,this.over),s=this.x0+this.a*i,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+n/2.5))*1.25;return t.x=s,t.y=r,t}function D4(t){t.x-=this.x0,t.y-=this.y0;var e=Q(this.long0+t.x/this.a,this.over),n=2.5*(Math.atan(Math.exp(.8*t.y/this.a))-Math.PI/4);return t.x=e,t.y=n,t}var G4=["Miller_Cylindrical","mill"];const z4={init:F4,forward:N4,inverse:D4,names:G4};var B4=20;function j4(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=of(this.es)}function W4(t){var e,n,i=t.x,s=t.y;if(i=Q(i-this.long0,this.over),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),o=B4;o;--o){var a=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=a,Math.abs(a)<K)break}e=this.a*this.C_x*i*(this.m+Math.cos(s)),n=this.a*this.C_y*s}else{var l=Math.sin(s),c=Math.cos(s);n=this.a*no(s,l,c,this.en),e=this.a*i*c/Math.sqrt(1-this.es*l*l)}return t.x=e,t.y=n,t}function V4(t){var e,n,i,s;return t.x-=this.x0,i=t.x/this.a,t.y-=this.y0,e=t.y/this.a,this.sphere?(e/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(e))),this.m?e=gs((this.m*e+Math.sin(e))/this.n):this.n!==1&&(e=gs(Math.sin(e)/this.n)),i=Q(i+this.long0,this.over),e=ps(e)):(e=af(t.y/this.a,this.es,this.en),s=Math.abs(e),s<G?(s=Math.sin(e),n=this.long0+t.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(e)),i=Q(n,this.over)):s-K<G&&(i=this.long0)),t.x=i,t.y=e,t}var U4=["Sinusoidal","sinu"];const K4={init:j4,forward:W4,inverse:V4,names:U4};function $4(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0}function q4(t){for(var e=t.x,n=t.y,i=Q(e-this.long0,this.over),s=n,r=Math.PI*Math.sin(n);;){var o=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=o,Math.abs(o)<K)break}s/=2,Math.PI/2-Math.abs(n)<K&&(i=0);var a=.900316316158*this.a*i*Math.cos(s)+this.x0,l=1.4142135623731*this.a*Math.sin(s)+this.y0;return t.x=a,t.y=l,t}function H4(t){var e,n;t.x-=this.x0,t.y-=this.y0,n=t.y/(1.4142135623731*this.a),Math.abs(n)>.999999999999&&(n=.999999999999),e=Math.asin(n);var i=Q(this.long0+t.x/(.900316316158*this.a*Math.cos(e)),this.over);i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),n=(2*e+Math.sin(2*e))/Math.PI,Math.abs(n)>1&&(n=1);var s=Math.asin(n);return t.x=i,t.y=s,t}var Z4=["Mollweide","moll"];const X4={init:$4,forward:q4,inverse:H4,names:Z4};function Y4(){Math.abs(this.lat1+this.lat2)<K||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Na(this.es),this.e1=Da(this.es),this.e2=Ga(this.es),this.e3=za(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=ai(this.e,this.sin_phi,this.cos_phi),this.ml1=Xt(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<K?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=ai(this.e,this.sin_phi,this.cos_phi),this.ml2=Xt(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Xt(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function J4(t){var e=t.x,n=t.y,i;if(this.sphere)i=this.a*(this.g-n);else{var s=Xt(this.e0,this.e1,this.e2,this.e3,n);i=this.a*(this.g-s)}var r=this.ns*Q(e-this.long0,this.over),o=this.x0+i*Math.sin(r),a=this.y0+this.rh-i*Math.cos(r);return t.x=o,t.y=a,t}function Q4(t){t.x-=this.x0,t.y=this.rh-t.y+this.y0;var e,n,i,s;this.ns>=0?(n=Math.sqrt(t.x*t.x+t.y*t.y),e=1):(n=-Math.sqrt(t.x*t.x+t.y*t.y),e=-1);var r=0;if(n!==0&&(r=Math.atan2(e*t.x,e*t.y)),this.sphere)return s=Q(this.long0+r/this.ns,this.over),i=ps(this.g-n/this.a),t.x=s,t.y=i,t;var o=this.g-n/this.a;return i=tc(o,this.e0,this.e1,this.e2,this.e3),s=Q(this.long0+r/this.ns,this.over),t.x=s,t.y=i,t}var eL=["Equidistant_Conic","eqdc"];const tL={init:Y4,forward:J4,inverse:Q4,names:eL};function nL(){this.R=this.a}function iL(t){var e=t.x,n=t.y,i=Q(e-this.long0,this.over),s,r;Math.abs(n)<=K&&(s=this.x0+this.R*i,r=this.y0);var o=gs(2*Math.abs(n/Math.PI));(Math.abs(i)<=K||Math.abs(Math.abs(n)-G)<=K)&&(s=this.x0,n>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*o):r=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/i-i/Math.PI),l=a*a,c=Math.sin(o),u=Math.cos(o),h=u/(c+u-1),d=h*h,f=h*(2/c-1),g=f*f,m=Math.PI*this.R*(a*(h-g)+Math.sqrt(l*(h-g)*(h-g)-(g+l)*(d-g)))/(g+l);i<0&&(m=-m),s=this.x0+m;var p=l+h;return m=Math.PI*this.R*(f*p-a*Math.sqrt((g+l)*(l+1)-p*p))/(g+l),n>=0?r=this.y0+m:r=this.y0-m,t.x=s,t.y=r,t}function sL(t){var e,n,i,s,r,o,a,l,c,u,h,d,f;return t.x-=this.x0,t.y-=this.y0,h=Math.PI*this.R,i=t.x/h,s=t.y/h,r=i*i+s*s,o=-Math.abs(s)*(1+r),a=o-2*s*s+i*i,l=-2*o+1+2*s*s+r*r,f=s*s/l+(2*a*a*a/l/l/l-9*o*a/l/l)/27,c=(o-a*a/3/l)/l,u=2*Math.sqrt(-c/3),h=3*f/c/u,Math.abs(h)>1&&(h>=0?h=1:h=-1),d=Math.acos(h)/3,t.y>=0?n=(-u*Math.cos(d+Math.PI/3)-a/3/l)*Math.PI:n=-(-u*Math.cos(d+Math.PI/3)-a/3/l)*Math.PI,Math.abs(i)<K?e=this.long0:e=Q(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(i*i-s*s)+r*r))/2/i,this.over),t.x=e,t.y=n,t}var rL=["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"];const oL={init:nL,forward:iL,inverse:sL,names:rL};function aL(t,e,n,i,s,r){const o=i-e,a=Math.atan((1-r)*Math.tan(t)),l=Math.atan((1-r)*Math.tan(n)),c=Math.sin(a),u=Math.cos(a),h=Math.sin(l),d=Math.cos(l);let f=o,g,m=100,p,_,y,w,b,E,P,k,R,C,V,W,A,q;do{if(p=Math.sin(f),_=Math.cos(f),y=Math.sqrt(d*p*(d*p)+(u*h-c*d*_)*(u*h-c*d*_)),y===0)return{azi1:0,s12:0};w=c*h+u*d*_,b=Math.atan2(y,w),E=u*d*p/y,P=1-E*E,k=P!==0?w-2*c*h/P:0,R=r/16*P*(4+r*(4-3*P)),g=f,f=o+(1-R)*r*E*(b+R*y*(k+R*w*(-1+2*k*k)))}while(Math.abs(f-g)>1e-12&&--m>0);return m===0?{azi1:NaN,s12:NaN}:(C=P*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),V=1+C/16384*(4096+C*(-768+C*(320-175*C))),W=C/1024*(256+C*(-128+C*(74-47*C))),A=W*y*(k+W/4*(w*(-1+2*k*k)-W/6*k*(-3+4*y*y)*(-3+4*k*k))),q=s*(1-r)*V*(b-A),{azi1:Math.atan2(d*p,u*h-c*d*_),s12:q})}function lL(t,e,n,i,s,r){const o=Math.atan((1-r)*Math.tan(t)),a=Math.sin(o),l=Math.cos(o),c=Math.sin(n),u=Math.cos(n),h=Math.atan2(a,l*u),d=l*c,f=1-d*d,g=f*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),m=1+g/16384*(4096+g*(-768+g*(320-175*g))),p=g/1024*(256+g*(-128+g*(74-47*g)));let _=i/(s*(1-r)*m),y,w=100,b,E,P,k;do b=Math.cos(2*h+_),E=Math.sin(_),P=Math.cos(_),k=p*E*(b+p/4*(P*(-1+2*b*b)-p/6*b*(-3+4*E*E)*(-3+4*b*b))),y=_,_=i/(s*(1-r)*m)+k;while(Math.abs(_-y)>1e-12&&--w>0);if(w===0)return{lat2:NaN,lon2:NaN};const R=a*E-l*P*u,C=Math.atan2(a*P+l*E*u,(1-r)*Math.sqrt(d*d+R*R)),V=Math.atan2(E*c,l*P-a*E*u),W=r/16*f*(4+r*(4-3*f)),A=V-(1-W)*r*d*(_+W*E*(b+W*P*(-1+2*b*b))),q=e+A;return{lat2:C,lon2:q}}function cL(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))}function uL(t){var e=t.x,n=t.y,i=Math.sin(t.y),s=Math.cos(t.y),r=Q(e-this.long0,this.over),o,a,l,c,u,h,d,f,g,m,p;return this.sphere?Math.abs(this.sin_p12-1)<=K?(t.x=this.x0+this.a*(G-n)*Math.sin(r),t.y=this.y0-this.a*(G-n)*Math.cos(r),t):Math.abs(this.sin_p12+1)<=K?(t.x=this.x0+this.a*(G+n)*Math.sin(r),t.y=this.y0+this.a*(G+n)*Math.cos(r),t):(g=this.sin_p12*i+this.cos_p12*s*Math.cos(r),d=Math.acos(g),f=d?d/Math.sin(d):1,t.x=this.x0+this.a*f*s*Math.sin(r),t.y=this.y0+this.a*f*(this.cos_p12*i-this.sin_p12*s*Math.cos(r)),t):(o=Na(this.es),a=Da(this.es),l=Ga(this.es),c=za(this.es),Math.abs(this.sin_p12-1)<=K?(u=this.a*Xt(o,a,l,c,G),h=this.a*Xt(o,a,l,c,n),t.x=this.x0+(u-h)*Math.sin(r),t.y=this.y0-(u-h)*Math.cos(r),t):Math.abs(this.sin_p12+1)<=K?(u=this.a*Xt(o,a,l,c,G),h=this.a*Xt(o,a,l,c,n),t.x=this.x0+(u+h)*Math.sin(r),t.y=this.y0+(u+h)*Math.cos(r),t):Math.abs(e)<K&&Math.abs(n-this.lat0)<K?(t.x=t.y=0,t):(m=aL(this.lat0,this.long0,n,e,this.a,this.f),p=m.azi1,t.x=m.s12*Math.sin(p),t.y=m.s12*Math.cos(p),t))}function hL(t){t.x-=this.x0,t.y-=this.y0;var e,n,i,s,r,o,a,l,c,u,h,d,f,g,m,p;return this.sphere?(e=Math.sqrt(t.x*t.x+t.y*t.y),e>2*G*this.a?void 0:(n=e/this.a,i=Math.sin(n),s=Math.cos(n),r=this.long0,Math.abs(e)<=K?o=this.lat0:(o=gs(s*this.sin_p12+t.y*i*this.cos_p12/e),a=Math.abs(this.lat0)-G,Math.abs(a)<=K?this.lat0>=0?r=Q(this.long0+Math.atan2(t.x,-t.y),this.over):r=Q(this.long0-Math.atan2(-t.x,t.y),this.over):r=Q(this.long0+Math.atan2(t.x*i,e*this.cos_p12*s-t.y*this.sin_p12*i),this.over)),t.x=r,t.y=o,t)):(l=Na(this.es),c=Da(this.es),u=Ga(this.es),h=za(this.es),Math.abs(this.sin_p12-1)<=K?(d=this.a*Xt(l,c,u,h,G),e=Math.sqrt(t.x*t.x+t.y*t.y),f=d-e,o=tc(f/this.a,l,c,u,h),r=Q(this.long0+Math.atan2(t.x,-1*t.y),this.over),t.x=r,t.y=o,t):Math.abs(this.sin_p12+1)<=K?(d=this.a*Xt(l,c,u,h,G),e=Math.sqrt(t.x*t.x+t.y*t.y),f=e-d,o=tc(f/this.a,l,c,u,h),r=Q(this.long0+Math.atan2(t.x,t.y),this.over),t.x=r,t.y=o,t):(g=Math.atan2(t.x,t.y),m=Math.sqrt(t.x*t.x+t.y*t.y),p=lL(this.lat0,this.long0,g,m,this.a,this.f),t.x=p.lon2,t.y=p.lat2,t))}var dL=["Azimuthal_Equidistant","aeqd"];const fL={init:cL,forward:uL,inverse:hL,names:dL};function gL(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function mL(t){var e,n,i,s,r,o,a,l,c=t.x,u=t.y;return i=Q(c-this.long0,this.over),e=Math.sin(u),n=Math.cos(u),s=Math.cos(i),o=this.sin_p14*e+this.cos_p14*n*s,r=1,(o>0||Math.abs(o)<=K)&&(a=this.a*r*n*Math.sin(i),l=this.y0+this.a*r*(this.cos_p14*e-this.sin_p14*n*s)),t.x=a,t.y=l,t}function pL(t){var e,n,i,s,r,o,a;return t.x-=this.x0,t.y-=this.y0,e=Math.sqrt(t.x*t.x+t.y*t.y),n=gs(e/this.a),i=Math.sin(n),s=Math.cos(n),o=this.long0,Math.abs(e)<=K?(a=this.lat0,t.x=o,t.y=a,t):(a=gs(s*this.sin_p14+t.y*i*this.cos_p14/e),r=Math.abs(this.lat0)-G,Math.abs(r)<=K?(this.lat0>=0?o=Q(this.long0+Math.atan2(t.x,-t.y),this.over):o=Q(this.long0-Math.atan2(-t.x,t.y),this.over),t.x=o,t.y=a,t):(o=Q(this.long0+Math.atan2(t.x*i,e*this.cos_p14*s-t.y*this.sin_p14*i),this.over),t.x=o,t.y=a,t))}var _L=["ortho"];const yL={init:gL,forward:mL,inverse:pL,names:_L};var at={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},Ke={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function vL(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=G-Ue/2?this.face=at.TOP:this.lat0<=-(G-Ue/2)?this.face=at.BOTTOM:Math.abs(this.long0)<=Ue?this.face=at.FRONT:Math.abs(this.long0)<=G+Ue?this.face=this.long0>0?at.RIGHT:at.LEFT:this.face=at.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function wL(t){var e={x:0,y:0},n,i,s,r,o,a,l={value:0};if(t.x-=this.long0,this.es!==0?n=Math.atan(this.one_minus_f_squared*Math.tan(t.y)):n=t.y,i=t.x,this.face===at.TOP)r=G-n,i>=Ue&&i<=G+Ue?(l.value=Ke.AREA_0,s=i-G):i>G+Ue||i<=-(G+Ue)?(l.value=Ke.AREA_1,s=i>0?i-_t:i+_t):i>-(G+Ue)&&i<=-Ue?(l.value=Ke.AREA_2,s=i+G):(l.value=Ke.AREA_3,s=i);else if(this.face===at.BOTTOM)r=G+n,i>=Ue&&i<=G+Ue?(l.value=Ke.AREA_0,s=-i+G):i<Ue&&i>=-Ue?(l.value=Ke.AREA_1,s=-i):i<-Ue&&i>=-(G+Ue)?(l.value=Ke.AREA_2,s=-i-G):(l.value=Ke.AREA_3,s=i>0?-i+_t:-i-_t);else{var c,u,h,d,f,g,m;this.face===at.RIGHT?i=Ar(i,+G):this.face===at.BACK?i=Ar(i,+_t):this.face===at.LEFT&&(i=Ar(i,-G)),d=Math.sin(n),f=Math.cos(n),g=Math.sin(i),m=Math.cos(i),c=f*m,u=f*g,h=d,this.face===at.FRONT?(r=Math.acos(c),s=dl(r,h,u,l)):this.face===at.RIGHT?(r=Math.acos(u),s=dl(r,h,-c,l)):this.face===at.BACK?(r=Math.acos(-c),s=dl(r,h,-u,l)):this.face===at.LEFT?(r=Math.acos(-u),s=dl(r,h,c,l)):(r=s=0,l.value=Ke.AREA_0)}return a=Math.atan(12/_t*(s+Math.acos(Math.sin(s)*Math.cos(Ue))-G)),o=Math.sqrt((1-Math.cos(r))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(s))))),l.value===Ke.AREA_1?a+=G:l.value===Ke.AREA_2?a+=_t:l.value===Ke.AREA_3&&(a+=1.5*_t),e.x=o*Math.cos(a),e.y=o*Math.sin(a),e.x=e.x*this.a+this.x0,e.y=e.y*this.a+this.y0,t.x=e.x,t.y=e.y,t}function SL(t){var e={lam:0,phi:0},n,i,s,r,o,a,l,c,u,h={value:0};if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,i=Math.atan(Math.sqrt(t.x*t.x+t.y*t.y)),n=Math.atan2(t.y,t.x),t.x>=0&&t.x>=Math.abs(t.y)?h.value=Ke.AREA_0:t.y>=0&&t.y>=Math.abs(t.x)?(h.value=Ke.AREA_1,n-=G):t.x<0&&-t.x>=Math.abs(t.y)?(h.value=Ke.AREA_2,n=n<0?n+_t:n-_t):(h.value=Ke.AREA_3,n+=G),u=_t/12*Math.tan(n),o=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),a=Math.atan(o),s=Math.cos(n),r=Math.tan(i),l=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(a)))),l<-1?l=-1:l>1&&(l=1),this.face===at.TOP)c=Math.acos(l),e.phi=G-c,h.value===Ke.AREA_0?e.lam=a+G:h.value===Ke.AREA_1?e.lam=a<0?a+_t:a-_t:h.value===Ke.AREA_2?e.lam=a-G:e.lam=a;else if(this.face===at.BOTTOM)c=Math.acos(l),e.phi=c-G,h.value===Ke.AREA_0?e.lam=-a+G:h.value===Ke.AREA_1?e.lam=-a:h.value===Ke.AREA_2?e.lam=-a-G:e.lam=a<0?-a-_t:-a+_t;else{var d,f,g;d=l,u=d*d,u>=1?g=0:g=Math.sqrt(1-u)*Math.sin(a),u+=g*g,u>=1?f=0:f=Math.sqrt(1-u),h.value===Ke.AREA_1?(u=f,f=-g,g=u):h.value===Ke.AREA_2?(f=-f,g=-g):h.value===Ke.AREA_3&&(u=f,f=g,g=-u),this.face===at.RIGHT?(u=d,d=-f,f=u):this.face===at.BACK?(d=-d,f=-f):this.face===at.LEFT&&(u=d,d=f,f=-u),e.phi=Math.acos(-g)-G,e.lam=Math.atan2(f,d),this.face===at.RIGHT?e.lam=Ar(e.lam,-G):this.face===at.BACK?e.lam=Ar(e.lam,-_t):this.face===at.LEFT&&(e.lam=Ar(e.lam,+G))}if(this.es!==0){var m,p,_;m=e.phi<0?1:0,p=Math.tan(e.phi),_=this.b/Math.sqrt(p*p+this.one_minus_f_squared),e.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),m&&(e.phi=-e.phi)}return e.lam+=this.long0,t.x=e.lam,t.y=e.phi,t}function dl(t,e,n,i){var s;return t<K?(i.value=Ke.AREA_0,s=0):(s=Math.atan2(e,n),Math.abs(s)<=Ue?i.value=Ke.AREA_0:s>Ue&&s<=G+Ue?(i.value=Ke.AREA_1,s-=G):s>G+Ue||s<=-(G+Ue)?(i.value=Ke.AREA_2,s=s>=0?s-_t:s+_t):(i.value=Ke.AREA_3,s+=G)),s}function Ar(t,e){var n=t+e;return n<-_t?n+=ma:n>+_t&&(n-=ma),n}var bL=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const EL={init:vL,forward:wL,inverse:SL,names:bL};var Ah=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Co=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],u1=.8487,h1=1.3523,d1=an/5,ML=1/d1,yr=18,nc=function(t,e){return t[0]+e*(t[1]+e*(t[2]+e*t[3]))},xL=function(t,e){return t[1]+e*(2*t[2]+e*3*t[3])};function CL(t,e,n,i){for(var s=e;i;--i){var r=t(s);if(s-=r,Math.abs(r)<n)break}return s}function kL(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function PL(t){var e=Q(t.x-this.long0,this.over),n=Math.abs(t.y),i=Math.floor(n*d1);i<0?i=0:i>=yr&&(i=yr-1),n=an*(n-ML*i);var s={x:nc(Ah[i],n)*e,y:nc(Co[i],n)};return t.y<0&&(s.y=-s.y),s.x=s.x*this.a*u1+this.x0,s.y=s.y*this.a*h1+this.y0,s}function TL(t){var e={x:(t.x-this.x0)/(this.a*u1),y:Math.abs(t.y-this.y0)/(this.a*h1)};if(e.y>=1)e.x/=Ah[yr][0],e.y=t.y<0?-G:G;else{var n=Math.floor(e.y*yr);for(n<0?n=0:n>=yr&&(n=yr-1);;)if(Co[n][0]>e.y)--n;else if(Co[n+1][0]<=e.y)++n;else break;var i=Co[n],s=5*(e.y-i[0])/(Co[n+1][0]-i[0]);s=CL(function(r){return(nc(i,r)-e.y)/xL(i,r)},s,K,100),e.x/=nc(Ah[n],s),e.y=(5*n+s)*ft,t.y<0&&(e.y=-e.y)}return e.x=Q(e.x+this.long0,this.over),e}var RL=["Robinson","robin"];const AL={init:kL,forward:PL,inverse:TL,names:RL};function IL(){this.name="geocent"}function LL(t){var e=Qy(t,this.es,this.a);return e}function OL(t){var e=e1(t,this.es,this.a,this.b);return e}var FL=["Geocentric","geocentric","geocent","Geocent"];const NL={init:IL,forward:LL,inverse:OL,names:FL};var Ft={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},yo={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function DL(){if(Object.keys(yo).forEach((function(n){if(typeof this[n]>"u")this[n]=yo[n].def;else{if(yo[n].num&&isNaN(this[n]))throw new Error("Invalid parameter value, must be numeric "+n+" = "+this[n]);yo[n].num&&(this[n]=parseFloat(this[n]))}yo[n].degrees&&(this[n]=this[n]*ft)}).bind(this)),Math.abs(Math.abs(this.lat0)-G)<K?this.mode=this.lat0<0?Ft.S_POLE:Ft.N_POLE:Math.abs(this.lat0)<K?this.mode=Ft.EQUIT:(this.mode=Ft.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var t=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(t),this.sw=Math.sin(t)}function GL(t){t.x-=this.long0;var e=Math.sin(t.y),n=Math.cos(t.y),i=Math.cos(t.x),s,r;switch(this.mode){case Ft.OBLIQ:r=this.sinph0*e+this.cosph0*n*i;break;case Ft.EQUIT:r=n*i;break;case Ft.S_POLE:r=-e;break;case Ft.N_POLE:r=e;break}switch(r=this.pn1/(this.p-r),s=r*n*Math.sin(t.x),this.mode){case Ft.OBLIQ:r*=this.cosph0*e-this.sinph0*n*i;break;case Ft.EQUIT:r*=e;break;case Ft.N_POLE:r*=-(n*i);break;case Ft.S_POLE:r*=n*i;break}var o,a;return o=r*this.cg+s*this.sg,a=1/(o*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*a,r=o*a,t.x=s*this.a,t.y=r*this.a,t}function zL(t){t.x/=this.a,t.y/=this.a;var e={x:t.x,y:t.y},n,i,s;s=1/(this.pn1-t.y*this.sw),n=this.pn1*t.x*s,i=this.pn1*t.y*this.cw*s,t.x=n*this.cg+i*this.sg,t.y=i*this.cg-n*this.sg;var r=on(t.x,t.y);if(Math.abs(r)<K)e.x=0,e.y=t.y;else{var o,a;switch(a=1-r*r*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/r+r/this.pn1),o=Math.sqrt(1-a*a),this.mode){case Ft.OBLIQ:e.y=Math.asin(o*this.sinph0+t.y*a*this.cosph0/r),t.y=(o-this.sinph0*Math.sin(e.y))*r,t.x*=a*this.cosph0;break;case Ft.EQUIT:e.y=Math.asin(t.y*a/r),t.y=o*r,t.x*=a;break;case Ft.N_POLE:e.y=Math.asin(o),t.y=-t.y;break;case Ft.S_POLE:e.y=-Math.asin(o);break}e.x=Math.atan2(t.x,t.y)}return t.x=e.x+this.long0,t.y=e.y,t}var BL=["Tilted_Perspective","tpers"];const jL={init:DL,forward:GL,inverse:zL,names:BL};function WL(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var t=1-this.es,e=1/t;this.radius_p=Math.sqrt(t),this.radius_p2=t,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function VL(t){var e=t.x,n=t.y,i,s,r,o;if(e=e-this.long0,this.shape==="ellipse"){n=Math.atan(this.radius_p2*Math.tan(n));var a=this.radius_p/on(this.radius_p*Math.cos(n),Math.sin(n));if(s=a*Math.cos(e)*Math.cos(n),r=a*Math.sin(e)*Math.cos(n),o=a*Math.sin(n),(this.radius_g-s)*s-r*r-o*o*this.radius_p_inv2<0)return t.x=Number.NaN,t.y=Number.NaN,t;i=this.radius_g-s,this.flip_axis?(t.x=this.radius_g_1*Math.atan(r/on(o,i)),t.y=this.radius_g_1*Math.atan(o/i)):(t.x=this.radius_g_1*Math.atan(r/i),t.y=this.radius_g_1*Math.atan(o/on(r,i)))}else this.shape==="sphere"&&(i=Math.cos(n),s=Math.cos(e)*i,r=Math.sin(e)*i,o=Math.sin(n),i=this.radius_g-s,this.flip_axis?(t.x=this.radius_g_1*Math.atan(r/on(o,i)),t.y=this.radius_g_1*Math.atan(o/i)):(t.x=this.radius_g_1*Math.atan(r/i),t.y=this.radius_g_1*Math.atan(o/on(r,i))));return t.x=t.x*this.a,t.y=t.y*this.a,t}function UL(t){var e=-1,n=0,i=0,s,r,o,a;if(t.x=t.x/this.a,t.y=t.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(t.y/this.radius_g_1),n=Math.tan(t.x/this.radius_g_1)*on(1,i)):(n=Math.tan(t.x/this.radius_g_1),i=Math.tan(t.y/this.radius_g_1)*on(1,n));var l=i/this.radius_p;if(s=n*n+l*l+e*e,r=2*this.radius_g*e,o=r*r-4*s*this.C,o<0)return t.x=Number.NaN,t.y=Number.NaN,t;a=(-r-Math.sqrt(o))/(2*s),e=this.radius_g+a*e,n*=a,i*=a,t.x=Math.atan2(n,e),t.y=Math.atan(i*Math.cos(t.x)/e),t.y=Math.atan(this.radius_p_inv2*Math.tan(t.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(t.y/this.radius_g_1),n=Math.tan(t.x/this.radius_g_1)*Math.sqrt(1+i*i)):(n=Math.tan(t.x/this.radius_g_1),i=Math.tan(t.y/this.radius_g_1)*Math.sqrt(1+n*n)),s=n*n+i*i+e*e,r=2*this.radius_g*e,o=r*r-4*s*this.C,o<0)return t.x=Number.NaN,t.y=Number.NaN,t;a=(-r-Math.sqrt(o))/(2*s),e=this.radius_g+a*e,n*=a,i*=a,t.x=Math.atan2(n,e),t.y=Math.atan(i*Math.cos(t.x)/e)}return t.x=t.x+this.long0,t}var KL=["Geostationary Satellite View","Geostationary_Satellite","geos"];const $L={init:WL,forward:VL,inverse:UL,names:KL};var jo=1.340264,Wo=-.081106,Vo=893e-6,Uo=.003796,ic=Math.sqrt(3)/2;function qL(){this.es=0,this.long0=this.long0!==void 0?this.long0:0,this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0}function HL(t){var e=Q(t.x-this.long0,this.over),n=t.y,i=Math.asin(ic*Math.sin(n)),s=i*i,r=s*s*s;return t.x=e*Math.cos(i)/(ic*(jo+3*Wo*s+r*(7*Vo+9*Uo*s))),t.y=i*(jo+Wo*s+r*(Vo+Uo*s)),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function ZL(t){t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a;var e=1e-9,n=12,i=t.y,s,r,o,a,l,c;for(c=0;c<n&&(s=i*i,r=s*s*s,o=i*(jo+Wo*s+r*(Vo+Uo*s))-t.y,a=jo+3*Wo*s+r*(7*Vo+9*Uo*s),i-=l=o/a,!(Math.abs(l)<e));++c);return s=i*i,r=s*s*s,t.x=ic*t.x*(jo+3*Wo*s+r*(7*Vo+9*Uo*s))/Math.cos(i),t.y=Math.asin(Math.sin(i)/ic),t.x=Q(t.x+this.long0,this.over),t}var XL=["eqearth","Equal Earth","Equal_Earth"];const YL={init:qL,forward:HL,inverse:ZL,names:XL};var ya=1e-10;function JL(){var t;if(this.phi1=this.lat1,Math.abs(this.phi1)<ya)throw new Error;this.es?(this.en=of(this.es),this.m1=no(this.phi1,this.am1=Math.sin(this.phi1),t=Math.cos(this.phi1),this.en),this.am1=t/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=e3,this.forward=QL):(Math.abs(this.phi1)+ya>=G?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=n3,this.forward=t3)}function QL(t){var e=Q(t.x-(this.long0||0),this.over),n=t.y,i,s,r;return i=this.am1+this.m1-no(n,s=Math.sin(n),r=Math.cos(n),this.en),s=r*e/(i*Math.sqrt(1-this.es*s*s)),t.x=i*Math.sin(s),t.y=this.am1-i*Math.cos(s),t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function e3(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,n,i,s;if(n=on(t.x,t.y=this.am1-t.y),s=af(this.am1+this.m1-n,this.es,this.en),(e=Math.abs(s))<G)e=Math.sin(s),i=n*Math.atan2(t.x,t.y)*Math.sqrt(1-this.es*e*e)/Math.cos(s);else if(Math.abs(e-G)<=ya)i=0;else throw new Error;return t.x=Q(i+(this.long0||0),this.over),t.y=ps(s),t}function t3(t){var e=Q(t.x-(this.long0||0),this.over),n=t.y,i,s;return s=this.cphi1+this.phi1-n,Math.abs(s)>ya?(t.x=s*Math.sin(i=e*Math.cos(n)/s),t.y=this.cphi1-s*Math.cos(i)):t.x=t.y=0,t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function n3(t){t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var e,n,i=on(t.x,t.y=this.cphi1-t.y);if(n=this.cphi1+this.phi1-i,Math.abs(n)>G)throw new Error;return Math.abs(Math.abs(n)-G)<=ya?e=0:e=i*Math.atan2(t.x,t.y)/Math.cos(n),t.x=Q(e+(this.long0||0),this.over),t.y=ps(n),t}var i3=["bonne","Bonne (Werner lat_1=90)"];const s3={init:JL,names:i3},Qm={OBLIQUE:{forward:c3,inverse:h3},TRANSVERSE:{forward:u3,inverse:d3}},sc={ROTATE:{o_alpha:"oAlpha",o_lon_c:"oLongC",o_lat_c:"oLatC"},NEW_POLE:{o_lat_p:"oLatP",o_lon_p:"oLongP"},NEW_EQUATOR:{o_lon_1:"oLong1",o_lat_1:"oLat1",o_lon_2:"oLong2",o_lat_2:"oLat2"}};function r3(){if(this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.title=this.title||"General Oblique Transformation",this.isIdentity=Zy.includes(this.o_proj),!this.o_proj)throw new Error("Missing parameter: o_proj");if(this.o_proj==="ob_tran")throw new Error("Invalid value for o_proj: "+this.o_proj);const t=this.projStr.replace("+proj=ob_tran","").replace("+o_proj=","+proj=").trim(),e=Rn(t);if(!e)throw new Error("Invalid parameter: o_proj. Unknown projection "+this.o_proj);e.long0=0,this.obliqueProjection=e;let n;const i=Object.keys(sc),s=a=>{if(typeof this[a]>"u")return;const l=parseFloat(this[a])*ft;if(isNaN(l))throw new Error("Invalid value for "+a+": "+this[a]);return l};for(let a=0;a<i.length;a++){const l=i[a],c=sc[l],u=Object.entries(c);if(u.some(([d])=>typeof this[d]<"u")){n=c;for(let d=0;d<u.length;d++){const[f,g]=u[d],m=s(f);if(typeof m>"u")throw new Error("Missing parameter: "+f+".");this[g]=m}break}}if(!n)throw new Error("No valid parameters provided for ob_tran projection.");const{lamp:r,phip:o}=l3(this,n);this.lamp=r,Math.abs(o)>K?(this.cphip=Math.cos(o),this.sphip=Math.sin(o),this.projectionType=Qm.OBLIQUE):this.projectionType=Qm.TRANSVERSE}function o3(t){return this.projectionType.forward(this,t)}function a3(t){return this.projectionType.inverse(this,t)}function l3(t,e){let n,i;if(e===sc.ROTATE){let s=t.oLongC,r=t.oLatC,o=t.oAlpha;if(Math.abs(Math.abs(r)-G)<=K)throw new Error("Invalid value for o_lat_c: "+t.o_lat_c+" should be < 90°");i=s+Math.atan2(-1*Math.cos(o),-1*Math.sin(o)*Math.sin(r)),n=Math.asin(Math.cos(r)*Math.sin(o))}else if(e===sc.NEW_POLE)i=t.oLongP,n=t.oLatP;else{let s=t.oLong1,r=t.oLat1,o=t.oLong2,a=t.oLat2,l=Math.abs(r);if(Math.abs(r)>G-K)throw new Error("Invalid value for o_lat_1: "+t.o_lat_1+" should be < 90°");if(Math.abs(a)>G-K)throw new Error("Invalid value for o_lat_2: "+t.o_lat_2+" should be < 90°");if(Math.abs(r-a)<K)throw new Error("Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2");if(l<K)throw new Error("Invalid value for o_lat_1: o_lat_1 should be different from zero");i=Math.atan2(Math.cos(r)*Math.sin(a)*Math.cos(s)-Math.sin(r)*Math.cos(a)*Math.cos(o),Math.sin(r)*Math.cos(a)*Math.sin(o)-Math.cos(r)*Math.sin(a)*Math.sin(s)),n=Math.atan(-1*Math.cos(i-s)/Math.tan(r))}return{lamp:i,phip:n}}function c3(t,e){let{x:n,y:i}=e;n+=t.long0;const s=Math.cos(n),r=Math.sin(i),o=Math.cos(i);e.x=Q(Math.atan2(o*Math.sin(n),t.sphip*o*s+t.cphip*r)+t.lamp),e.y=Math.asin(t.sphip*r-t.cphip*o*s);const a=t.obliqueProjection.forward(e);return t.isIdentity&&(a.x*=an,a.y*=an),a}function u3(t,e){let{x:n,y:i}=e;n+=t.long0;const s=Math.cos(i),r=Math.cos(n);e.x=Q(Math.atan2(s*Math.sin(n),Math.sin(i))+t.lamp),e.y=Math.asin(-1*s*r);const o=t.obliqueProjection.forward(e);return t.isIdentity&&(o.x*=an,o.y*=an),o}function h3(t,e){t.isIdentity&&(e.x*=ft,e.y*=ft);const n=t.obliqueProjection.inverse(e);let{x:i,y:s}=n;if(i<Number.MAX_VALUE){i-=t.lamp;const r=Math.cos(i),o=Math.sin(s),a=Math.cos(s);e.x=Math.atan2(a*Math.sin(i),t.sphip*a*r-t.cphip*o),e.y=Math.asin(t.sphip*o+t.cphip*a*r)}return e.x=Q(e.x+t.long0),e}function d3(t,e){t.isIdentity&&(e.x*=ft,e.y*=ft);const n=t.obliqueProjection.inverse(e);let{x:i,y:s}=n;if(i<Number.MAX_VALUE){const r=Math.cos(s);i-=t.lamp,e.x=Math.atan2(r*Math.sin(i),-1*Math.sin(s)),e.y=Math.asin(r*Math.cos(i))}return e.x=Q(e.x+t.long0),e}var f3=["General Oblique Transformation","General_Oblique_Transformation","ob_tran"];const g3={init:r3,forward:o3,inverse:a3,names:f3};function m3(t){t.Proj.projections.add(wl),t.Proj.projections.add(Sl),t.Proj.projections.add(iI),t.Proj.projections.add(dI),t.Proj.projections.add(_I),t.Proj.projections.add(bI),t.Proj.projections.add(PI),t.Proj.projections.add(LI),t.Proj.projections.add(GI),t.Proj.projections.add(VI),t.Proj.projections.add(n4),t.Proj.projections.add(l4),t.Proj.projections.add(f4),t.Proj.projections.add(v4),t.Proj.projections.add(M4),t.Proj.projections.add(T4),t.Proj.projections.add(O4),t.Proj.projections.add(z4),t.Proj.projections.add(K4),t.Proj.projections.add(X4),t.Proj.projections.add(tL),t.Proj.projections.add(oL),t.Proj.projections.add(fL),t.Proj.projections.add(yL),t.Proj.projections.add(EL),t.Proj.projections.add(AL),t.Proj.projections.add(NL),t.Proj.projections.add(jL),t.Proj.projections.add($L),t.Proj.projections.add(YL),t.Proj.projections.add(s3),t.Proj.projections.add(g3)}const Ih=Object.assign(wA,{defaultDatum:"WGS84",Proj:Rn,WGS84:new Rn("WGS84"),Point:qr,toPoint:t1,defs:xt,nadgrid:nA,transform:ec,mgrs:SA,version:"__VERSION__"});m3(Ih);const p3={class:"coordinate-transformer"},_3={class:"transformer__controls"},y3={class:"control-group"},v3=["value"],w3={class:"control-group"},S3=["value"],b3={class:"transformer__result"},E3={class:"result__header"},M3={class:"result__format"},x3={class:"result__coordinates"},C3={class:"result__description"},k3={class:"transformer__all-systems"},P3={class:"eyebrow"},T3={class:"all-systems__grid"},R3={class:"system-card"},A3={class:"system-card__value"},I3={class:"system-card"},L3={class:"system-card__value"},O3={class:"system-card"},F3={class:"system-card__value"},N3={class:"system-card"},D3={class:"system-card__value"},G3={__name:"CoordinateTransformer",setup(t){Ih.defs("EPSG:25832","+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),hR(Ih);const e=[{id:"epsg25832",label:"EPSG:25832 (UTM 32N)",description:"Projizierte Koordinaten in Metern",code:"EPSG:25832"},{id:"epsg3857",label:"EPSG:3857 (Web Mercator)",description:"Standard-Projektion für Web-Mapping (OpenLayers, Google Maps)",code:"EPSG:3857"},{id:"wgs84-decimal",label:"WGS84 Decimal",description:"Längengrad, Breitengrad in Dezimalgrad",code:"EPSG:4326"},{id:"wgs84-latlon",label:"WGS84 Lat/Lon",description:"Breitengrad, Längengrad (traditionelle Reihenfolge)",code:"EPSG:4326"}],n=[{name:"Hamburg Rathaus (City Hall)",epsg25832:[569e3,5935e3]},{name:"Hamburg Airport",epsg25832:[568500,5940500]},{name:"Hamburg Port",epsg25832:[565e3,5931e3]},{name:"Alster Lake",epsg25832:[569500,5936e3]}],i=Tt("epsg25832"),s=Tt(n[0]),r=ne(()=>{const l=s.value.epsg25832;switch(i.value){case"epsg25832":return{display:`${l[0].toFixed(0)}, ${l[1].toFixed(0)}`,unit:"m",format:"Easting, Northing"};case"epsg3857":{const c=Ji(l,"EPSG:25832","EPSG:3857");return{display:`${c[0].toFixed(2)}, ${c[1].toFixed(2)}`,unit:"m",format:"X, Y"}}case"wgs84-decimal":{const c=Ji(l,"EPSG:25832","EPSG:4326");return{display:`${c[0].toFixed(6)}, ${c[1].toFixed(6)}`,unit:"°",format:"Longitude, Latitude"}}case"wgs84-latlon":{const c=Ji(l,"EPSG:25832","EPSG:4326"),u=c[1]>=0?"N":"S",h=c[0]>=0?"E":"W";return{display:`${Math.abs(c[1]).toFixed(6)}°${u}, ${Math.abs(c[0]).toFixed(6)}°${h}`,unit:"",format:"Latitude, Longitude"}}default:return{display:"Unknown projection",unit:"",format:""}}}),o=ne(()=>{const l=s.value.epsg25832,c=Ji(l,"EPSG:25832","EPSG:4326"),u=Ji(l,"EPSG:25832","EPSG:3857");return{epsg25832:`${l[0].toFixed(0)}, ${l[1].toFixed(0)} m`,epsg3857:`${u[0].toFixed(2)}, ${u[1].toFixed(2)} m`,wgs84Decimal:`${c[0].toFixed(6)}°, ${c[1].toFixed(6)}°`,wgs84LatLon:`${Math.abs(c[1]).toFixed(6)}°${c[1]>=0?"N":"S"}, ${Math.abs(c[0]).toFixed(6)}°${c[0]>=0?"E":"W"}`}}),a=ne(()=>e.find(l=>l.id===i.value));return(l,c)=>{var u,h;return F(),B("div",p3,[c[8]||(c[8]=S("h3",null,"Interaktiver Koordinaten-Transformer",-1)),c[9]||(c[9]=S("p",{class:"muted"},"Wähle einen Ort und ein Projektionssystem aus, um zu sehen, wie Koordinaten dargestellt werden.",-1)),S("div",_3,[S("div",y3,[c[2]||(c[2]=S("label",{class:"control-label"},"Ort",-1)),kl(S("select",{"onUpdate:modelValue":c[0]||(c[0]=d=>s.value=d),class:"transformer__select"},[(F(),B(Re,null,gt(n,d=>S("option",{key:d.name,value:d},X(d.name),9,v3)),64))],512),[[ng,s.value]])]),S("div",w3,[c[3]||(c[3]=S("label",{class:"control-label"},"Koordinatensystem",-1)),kl(S("select",{"onUpdate:modelValue":c[1]||(c[1]=d=>i.value=d),class:"transformer__select"},[(F(),B(Re,null,gt(e,d=>S("option",{key:d.id,value:d.id},X(d.label),9,S3)),64))],512),[[ng,i.value]])])]),S("div",b3,[S("div",E3,[S("h4",null,X((u=a.value)==null?void 0:u.label),1),S("span",M3,X(r.value.format),1)]),S("div",x3,X(r.value.display),1),S("p",C3,X((h=a.value)==null?void 0:h.description),1)]),S("div",k3,[S("p",P3,"Alle Koordinatensysteme für "+X(s.value.name),1),S("div",T3,[S("div",R3,[c[4]||(c[4]=S("div",{class:"system-card__label"},"EPSG:25832",-1)),S("div",A3,X(o.value.epsg25832),1)]),S("div",I3,[c[5]||(c[5]=S("div",{class:"system-card__label"},"EPSG:3857",-1)),S("div",L3,X(o.value.epsg3857),1)]),S("div",O3,[c[6]||(c[6]=S("div",{class:"system-card__label"},"WGS84 Decimal",-1)),S("div",F3,X(o.value.wgs84Decimal),1)]),S("div",N3,[c[7]||(c[7]=S("div",{class:"system-card__label"},"WGS84 Lat/Lon",-1)),S("div",D3,X(o.value.wgs84LatLon),1)])])])])}}},z3=wt(G3,[["__scopeId","data-v-2a27b216"]]),B3={class:"lesson"},j3={class:"lesson__header"},W3={key:0,class:"lesson__body"},V3=["innerHTML"],U3={key:1,class:"lesson__body"},K3=["href"],$3={key:5,class:"lesson__body"},q3=["disabled"],H3={__name:"LessonRenderer",props:{lesson:{type:Object,required:!0},moduleId:{type:String,required:!0}},emits:["complete"],setup(t,{emit:e}){const n=t,i=e,s=ln(),r=ne(()=>s.getters["progress/isLessonCompleted"](n.moduleId,n.lesson.id)),o=Object.assign({"../data/content/capstone/brief.md":oM,"../data/content/dev_environment.md":aM,"../data/content/geo_basics/projections.md":lM,"../data/content/geo_basics/wms_vs_wfs.md":cM,"../data/content/js_fundamentals/intro.md":uM,"../data/content/masterportal/architecture.md":hM,"../data/content/masterportal/config.md":dM,"../data/content/masterportal/config_structure.md":fM,"../data/content/masterportal/installation.md":gM,"../data/content/masterportal/overview.md":mM,"../data/content/masterportal/portal_setup.md":pM,"../data/content/masterportal/tool_development.md":_M,"../data/content/polar/capstone_brief.md":yM,"../data/content/polar/evidence_mapping.md":vM,"../data/content/polar/overview.md":wM,"../data/content/polar/quick_start.md":SM,"../data/content/polar/week1_architecture.md":bM,"../data/content/polar/week2_plugin_anatomy.md":EM,"../data/content/polar/week3_client_development.md":MM,"../data/content/polar/week4_testing.md":xM,"../data/content/polar/week5_release.md":CM,"../data/content/testing/stack.md":kM,"../data/content/vue_basics/intro.md":PM,"../data/content/vue_basics/vuex.md":TM});je.setOptions({breaks:!0,gfm:!0});const a=ne(()=>{if(n.lesson.type!=="markdown")return"";const f=`../data/content/${n.lesson.content}`,g=o[f];return g?je.parse(g):"Content coming soon."}),l=["markdown","external-link","geo-playground"],c=ne(()=>l.includes(n.lesson.type)),u=ne(()=>n.lesson.id==="projections-theory"),h=ne(()=>n.lesson.id==="projections-theory"),d=()=>{r.value||i("complete")};return(f,g)=>(F(),B("div",B3,[S("header",j3,[g[0]||(g[0]=S("p",{class:"eyebrow"},"Lektion",-1)),S("h2",null,X(t.lesson.title),1)]),t.lesson.type==="markdown"?(F(),B("div",W3,[S("div",{innerHTML:a.value},null,8,V3),u.value?(F(),yt(z3,{key:0})):Ye("",!0),h.value?(F(),yt(Im,{key:1,"config-id":"projection_demo"})):Ye("",!0)])):t.lesson.type==="external-link"?(F(),B("div",U3,[g[1]||(g[1]=S("p",{class:"muted"},"Schaue dir die externe Ressource an und mache Notizen in deinem Journal.",-1)),S("a",{href:t.lesson.url,class:"primary-btn",target:"_blank",rel:"noreferrer"},"Ressource öffnen ↗",8,K3)])):t.lesson.type==="quiz"?(F(),yt(Fx,{key:2,"quiz-id":t.lesson.quizId,"module-id":t.moduleId,"lesson-id":t.lesson.id,onPassed:d},null,8,["quiz-id","module-id","lesson-id"])):t.lesson.type==="geo-playground"?(F(),yt(Im,{key:3,"config-id":t.lesson.configId},null,8,["config-id"])):t.lesson.type==="task-list"?(F(),yt(n2,{key:4,"tasks-id":t.lesson.tasksId,onCompleted:d},null,8,["tasks-id"])):(F(),B("div",$3,[...g[2]||(g[2]=[S("p",null,"Lektionstyp noch nicht unterstützt.",-1)])])),c.value?(F(),B("button",{key:6,class:vt(["ghost-btn",{"ghost-btn--completed":r.value}]),onClick:d,disabled:r.value},X(r.value?"✓ Abgeschlossen":"Als abgeschlossen markieren"),11,q3)):Ye("",!0)]))}},Z3=wt(H3,[["__scopeId","data-v-50d7c8ff"]]),X3={key:0,class:"module-view"},Y3={class:"module-view__sidebar card"},J3={class:"module-view__header"},Q3={class:"lesson-list"},eO=["onClick"],tO={class:"lesson-title"},nO={class:"lesson-type"},iO={key:0,class:"module-view__content card"},sO={key:1,class:"module-view__content card"},rO={key:1,class:"card"},oO={key:0},aO={key:1},lO={__name:"ModuleView",setup(t){const e=wc(),n=ab(),i=ln(),s=ne(()=>bc(i.state.tracks.enabled)),r=ne(()=>s.value.find(g=>g.id===e.params.id)),o=ne(()=>!r.value&&Ec(e.params.id)),a=ne(()=>{var g;return((g=r.value)==null?void 0:g.lessons)||[]}),l=ne(()=>{var g;return e.query.lesson||((g=a.value[0])==null?void 0:g.id)}),c=ne(()=>a.value.find(g=>g.id===l.value)),u=g=>{n.replace({name:"module",params:{id:e.params.id},query:{lesson:g}})},h=ne(()=>i.getters["progress/moduleProgress"](e.params.id)),d=g=>i.getters["progress/isLessonCompleted"](e.params.id,g),f=()=>{c.value&&i.commit("progress/completeLesson",{moduleId:e.params.id,lessonId:c.value.id})};return Tn(h,g=>{if(g===100){const m=od(e.params.id);m&&!i.getters["badges/hasBadge"](m.id)&&i.commit("badges/earnBadge",m.id)}}),(g,m)=>r.value?(F(),B("div",X3,[S("aside",Y3,[S("div",J3,[S("h2",null,X(r.value.title),1),Xe(ad,{value:h.value},null,8,["value"])]),S("ul",Q3,[(F(!0),B(Re,null,gt(a.value,p=>(F(),B("li",{key:p.id,class:vt(["lesson-list__item",{"lesson-list__item--active":p.id===l.value}]),onClick:_=>u(p.id)},[S("div",null,[S("p",tO,X(p.title),1),S("p",nO,X(p.type),1)]),S("span",{class:vt(["lesson-status",{"lesson-status--done":d(p.id)}])},X(d(p.id)?"✓":""),3)],10,eO))),128))])]),c.value?(F(),B("section",iO,[Xe(Z3,{lesson:c.value,"module-id":r.value.id,onComplete:f},null,8,["lesson","module-id"])])):(F(),B("section",sO,[...m[0]||(m[0]=[S("p",null,"Wähle eine Lektion, um zu starten.",-1)])]))])):(F(),B("div",rO,[o.value?(F(),B("p",oO,"Dieses Modul ist Teil eines anderen Tracks. Wechsle den Track vom Dashboard aus, um darauf zuzugreifen.")):(F(),B("p",aO,"Modul nicht gefunden."))]))}},cO=wt(lO,[["__scopeId","data-v-e91eff37"]]),uO={class:"team"},hO={class:"team__grid"},dO=["onMouseenter"],fO=["src","alt"],gO={key:1},mO={class:"team-card__info"},pO={class:"team-card__name"},_O={class:"team-card__role"},yO=["onClick","title"],vO={key:0,class:"email-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},wO={key:1,class:"email-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},SO={class:"email-text"},bO={class:"card meetings-section"},EO={class:"meetings-grid"},MO={class:"meeting-card__header"},xO={class:"meeting-card__icon"},CO={class:"meeting-card__title-group"},kO={class:"meeting-card__title"},PO={class:"meeting-card__frequency"},TO={class:"meeting-card__description"},RO={class:"meeting-card__footer"},AO={key:0,class:"meeting-card__time"},IO={class:"meeting-card__location"},LO={__name:"TeamView",setup(t){const e=[{name:"Dr. Christian Zirkelbach",role:"Gruppenleiter",initials:"CZ",image:"/src/data/img/zirkelbach.png",email:"christian.zirkelbach@dataport.de"},{name:"Carina Brühl",role:"Entwicklerin",initials:"CB",email:"carina.bruehl@dataport.de"},{name:"Finn-Rasmus Darge",role:"Entwickler",initials:"FD",image:"/src/data/img/darge.png",email:"finn-rasmus.darge@dataport.de"},{name:"Leonard Dietrich",role:"Softwaretester",initials:"LD",email:"leonard.dietrich@dataport.de"},{name:"Konstantin Holm",role:"Entwickler",initials:"KH",image:"/src/data/img/holm.png",email:"konstantin.holm@dataport.de"},{name:"Melanie Michaela Klamp",role:"Entwicklerin",initials:"MK",email:"melaniemichaela.klamp@dataport.de"},{name:"Martina Niese",role:"Entwicklerin",initials:"MN",email:"martina.niese@dataport.de"},{name:"Hendrik Oenings",role:"Entwickler",initials:"HO",email:"hendrik.oenings@dataport.de"},{name:"Michel René Ptak",role:"Entwickler",initials:"MP",email:""},{name:"Judith Rasch",role:"Entwicklerin (Vertretung von Christian)",initials:"JR",email:"judith.rasch@dataport.de"},{name:"Markus Rullkötter",role:"Entwickler",initials:"MR",email:"markus.rullkoetter@dataport.de"},{name:"Pascal Röhling",role:"Entwickler",initials:"PR",image:"/src/data/img/röhling.png",email:"pascal.roehling@dataport.de"},{name:"Dennis Sen",role:"Entwickler",initials:"DS",image:"/src/data/img/sen.png",email:"dennis.sen@dataport.de"}],n=[{title:"Daily",icon:"💬",frequency:"Täglich",time:"11:30 - 12:00 Uhr",description:"Täglicher Austausch in unserer Gruppe per Skype, jeder berichtet woran er gerade arbeitet oder es wird Smalltalk (privat) gehalten.",location:"Skype",color:"blue"},{title:"Extended Daily",icon:"📋",frequency:"Wöchentlich (im Wechsel)",time:"10:00 - 11:00 Uhr",description:"Längerer Daily per Skype bei dem die laufenden Projekte tiefergehend besprochen werden und Christian organisatorische Themen aus Führungsrunden behandelt oder wir Teamevents etc. planen. Findet im Wechsel mit dem Bi-Weekly statt.",location:"Skype",color:"purple"},{title:"Bi-Weekly",icon:"🏢",frequency:"Wöchentlich (im Wechsel)",time:"10:00 - 12:00 Uhr",description:"Das gleiche wie Extended Daily aber vor Ort meist in Flintbek oder alternativ in Altenholz. Findet im Wechsel mit dem Extended Daily statt.",location:"Flintbek / Altenholz",color:"green"},{title:"Geo JourFixe",icon:"🌍",frequency:"Donnerstags",time:"10:00 - 11:00 Uhr",description:"Austausch mit unseren Kollegen bei DA um über laufende oder neue Projekte zu sprechen.",location:"Skype",color:"orange"}],i=Tt(null),s=Tt(null),r=async o=>{try{await navigator.clipboard.writeText(o),s.value=o,setTimeout(()=>{s.value=null},2e3)}catch(a){console.error("Fehler beim Kopieren:",a)}};return(o,a)=>(F(),B("div",uO,[a[6]||(a[6]=S("section",{class:"card team__header"},[S("div",null,[S("p",{class:"eyebrow"},"Lerne das Team kennen 👥"),S("h1",null,"Deine Kolleg:innen"),S("p",{class:"muted"}," Lerne die Menschen kennen, mit denen du zusammenarbeiten wirst. Unser Team vereint Entwickler:innen, Tester:innen und Führungskräfte, um innovative Geo-Anwendungen zu entwickeln. Zögere nicht, dich zu melden — alle sind hier, um dir zum Erfolg zu verhelfen. ")])],-1)),S("section",hO,[(F(),B(Re,null,gt(e,(l,c)=>S("div",{key:l.name,class:"team-card card",style:Ir({animationDelay:`${c*.05}s`}),onMouseenter:u=>i.value=l.name,onMouseleave:a[0]||(a[0]=u=>i.value=null)},[S("div",{class:vt(["team-card__avatar",{"team-card__avatar--image":l.image}])},[l.image?(F(),B("img",{key:0,src:l.image,alt:l.name},null,8,fO)):(F(),B("span",gO,X(l.initials),1))],2),S("div",mO,[S("h3",pO,X(l.name),1),S("p",_O,X(l.role),1),l.email?(F(),B("button",{key:0,onClick:u=>r(l.email),class:vt(["team-card__email",{"team-card__email--visible":i.value===l.name}]),title:s.value===l.email?"Kopiert!":"Klicken zum Kopieren"},[s.value===l.email?(F(),B("svg",vO,[...a[1]||(a[1]=[S("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):(F(),B("svg",wO,[...a[2]||(a[2]=[S("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},null,-1),S("polyline",{points:"22,6 12,13 2,6"},null,-1)])])),S("span",SO,X(s.value===l.email?"Kopiert!":l.email),1)],10,yO)):Ye("",!0)])],44,dO)),64))]),S("section",bO,[a[5]||(a[5]=S("div",{class:"meetings-header"},[S("p",{class:"eyebrow"},"Wichtige Termine 📅"),S("h2",null,"Team-Meetings & Austausch"),S("p",{class:"muted"}," Unsere regelmäßigen Meetings halten dich auf dem Laufenden und bieten Raum für Austausch und Zusammenarbeit. ")],-1)),S("div",EO,[(F(),B(Re,null,gt(n,(l,c)=>S("div",{key:l.title,class:vt(["meeting-card",`meeting-card--${l.color}`]),style:Ir({animationDelay:`${c*.1}s`})},[S("div",MO,[S("div",xO,X(l.icon),1),S("div",CO,[S("h3",kO,X(l.title),1),S("span",PO,X(l.frequency),1)])]),S("p",TO,X(l.description),1),S("div",RO,[l.time?(F(),B("span",AO,[a[3]||(a[3]=S("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[S("circle",{cx:"12",cy:"12",r:"10"}),S("polyline",{points:"12 6 12 12 16 14"})],-1)),On(" "+X(l.time),1)])):Ye("",!0),S("span",IO,[a[4]||(a[4]=S("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[S("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),S("circle",{cx:"12",cy:"10",r:"3"})],-1)),On(" "+X(l.location),1)])])],6)),64))])])]))}},OO=wt(LO,[["__scopeId","data-v-7a3f6e3d"]]),FO={class:"badge-card__image-wrapper"},NO=["src","alt"],DO={key:0,class:"badge-card__lock"},GO={class:"badge-card__info"},zO={class:"badge-card__name"},BO={class:"badge-card__description"},jO={__name:"BadgeCard",props:{badge:{type:Object,required:!0},earned:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)}},setup(t){const e=t,n=ne(()=>({"badge-card--small":e.size==="small","badge-card--medium":e.size==="medium","badge-card--large":e.size==="large"}));return(i,s)=>(F(),B("div",{class:vt(["badge-card",[n.value,{"badge-card--locked":!t.earned}]])},[S("div",FO,[S("img",{src:t.badge.image,alt:t.badge.name,class:"badge-card__image"},null,8,NO),t.earned?Ye("",!0):(F(),B("div",DO,"🔒"))]),S("div",GO,[S("h4",zO,X(t.badge.name),1),S("p",BO,X(t.badge.description),1)])],2))}},vo=wt(jO,[["__scopeId","data-v-3e210b05"]]),WO={class:"badge-showcase"},VO={class:"badge-showcase__header"},UO={class:"badge-showcase__stats"},KO={class:"badge-showcase__progress-ring"},$O={width:"60",height:"60",viewBox:"0 0 60 60"},qO=["stroke-dasharray"],HO={x:"30",y:"35","text-anchor":"middle","font-size":"14","font-weight":"700",fill:"var(--color-text)"},ZO={key:0,class:"badge-showcase__groups"},XO={key:0,class:"badge-group"},YO={class:"badge-showcase__grid"},JO={key:1,class:"badge-group"},QO={class:"badge-showcase__grid"},eF={key:2,class:"badge-group"},tF={class:"badge-showcase__grid"},nF={key:3,class:"badge-group"},iF={class:"badge-showcase__grid badge-showcase__grid--large"},sF={key:1,class:"badge-showcase__grid"},rF={key:2,class:"badge-showcase__empty"},oF={__name:"BadgeShowcase",props:{filter:{type:String,default:"all",validator:t=>["all","earned","locked"].includes(t)},size:{type:String,default:"medium"},groupByTrack:{type:Boolean,default:!0}},setup(t){const e=ln(),n=t,i=rd(),s=ne(()=>e.getters["badges/earnedBadges"]),r=g=>g.map(m=>({...m,earned:s.value.includes(m.id)})),o=g=>n.filter==="earned"?g.filter(m=>m.earned):n.filter==="locked"?g.filter(m=>!m.earned):g,a=ne(()=>{const g=r(uu().filter(m=>m.track==="common"));return o(g)}),l=ne(()=>{const g=r(uu().filter(m=>m.track==="masterportal"));return o(g)}),c=ne(()=>{const g=r(uu().filter(m=>m.track==="polar"));return o(g)}),u=ne(()=>{const g=r(Lb());return o(g)}),h=ne(()=>{const g=r(i);return o(g)}),d=ne(()=>s.value.length),f=ne(()=>i.length);return(g,m)=>(F(),B("div",WO,[S("div",VO,[S("div",null,[m[0]||(m[0]=S("h3",{class:"badge-showcase__title"},"Deine Erfolge",-1)),S("p",UO,X(d.value)+" / "+X(f.value)+" Abzeichen erhalten ",1)]),S("div",KO,[(F(),B("svg",$O,[m[1]||(m[1]=S("circle",{cx:"30",cy:"30",r:"25",fill:"none",stroke:"rgba(255, 255, 255, 0.1)","stroke-width":"6"},null,-1)),S("circle",{cx:"30",cy:"30",r:"25",fill:"none",stroke:"var(--color-accent)","stroke-width":"6","stroke-linecap":"round","stroke-dasharray":`${d.value/f.value*157} 157`,transform:"rotate(-90 30 30)"},null,8,qO),S("text",HO,X(Math.round(d.value/f.value*100))+"% ",1)]))])]),t.groupByTrack?(F(),B("div",ZO,[a.value.length>0?(F(),B("div",XO,[m[2]||(m[2]=S("h4",{class:"badge-group__title"},"Grundlagen",-1)),S("div",YO,[(F(!0),B(Re,null,gt(a.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])])):Ye("",!0),l.value.length>0?(F(),B("div",JO,[m[3]||(m[3]=S("h4",{class:"badge-group__title"},"🏛️ Masterportal-Spezialisierung",-1)),S("div",QO,[(F(!0),B(Re,null,gt(l.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])])):Ye("",!0),c.value.length>0?(F(),B("div",eF,[m[4]||(m[4]=S("h4",{class:"badge-group__title"},"🗺️ POLAR-Spezialisierung",-1)),S("div",tF,[(F(!0),B(Re,null,gt(c.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])])):Ye("",!0),u.value.length>0?(F(),B("div",nF,[m[5]||(m[5]=S("h4",{class:"badge-group__title"},"🏆 Track-Meisterschaft",-1)),S("div",iF,[(F(!0),B(Re,null,gt(u.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:"large"},null,8,["badge","earned"]))),128))])])):Ye("",!0)])):(F(),B("div",sF,[(F(!0),B(Re,null,gt(h.value,p=>(F(),yt(vo,{key:p.id,badge:p,earned:p.earned,size:t.size},null,8,["badge","earned","size"]))),128))])),h.value.length===0&&!t.groupByTrack?(F(),B("p",rF," Noch keine Abzeichen in dieser Kategorie. Lerne weiter, um Erfolge freizuschalten! ")):Ye("",!0)]))}},aF=wt(oF,[["__scopeId","data-v-680e4d9c"]]),lF={class:"achievements"},cF={class:"card"},uF={__name:"AchievementsView",setup(t){const e=ln();return ne(()=>e.getters["user/name"]||e.state.user.name),(n,i)=>(F(),B("div",lF,[i[0]||(i[0]=S("section",{class:"card achievements__hero"},[S("div",null,[S("p",{class:"eyebrow"},"Deine Reise 🏆"),S("h1",null,"Erfolge & Abzeichen"),S("p",{class:"muted"}," Verfolge deinen Fortschritt und zeige deine Errungenschaften. Jedes Abzeichen repräsentiert einen Meilenstein in deiner Lernreise durch JavaScript, Vue und Geo-Entwicklung. ")])],-1)),S("section",cF,[Xe(aF,{size:"medium",filter:"all","group-by-track":!0})])]))}},hF=wt(uF,[["__scopeId","data-v-e3fc42d2"]]),dF={class:"faq-view"},fF={class:"faq-content"},gF={class:"category-title"},mF={class:"faq-list"},pF=["onClick"],_F={class:"question-text"},yF={class:"faq-answer"},vF=["innerHTML"],wF={class:"faq-footer"},SF={class:"callout-box"},bF={class:"contact-info"},EF={__name:"FAQView",setup(t){const e=Tt([{id:"config-errors",category:"Konfiguration",question:"Mein Portal lädt nicht, ich sehe nur eine leere Seite. Was ist falsch?",answer:`Die häufigste Ursache sind **Fehler in der config.json**. Selbst ein fehlendes Komma oder ein falsches Anführungszeichen kann das gesamte Portal unbenutzbar machen.

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
✅ Frage bei Unklarheiten im Team nach`}]),n=Tt(null),i=o=>{n.value=n.value===o?null:o},s=[...new Set(e.value.map(o=>o.category))],r=o=>je(o,{breaks:!0});return(o,a)=>{const l=Hr("router-link");return F(),B("div",dF,[a[7]||(a[7]=S("div",{class:"faq-hero"},[S("h1",null,"Häufig gestellte Fragen"),S("p",{class:"subtitle"}," Antworten auf die häufigsten Fragen beim Onboarding und der täglichen Arbeit mit dem Masterportal. ")],-1)),S("div",fF,[(F(),B(Re,null,gt(s,c=>S("div",{key:c,class:"faq-category"},[S("h2",gF,X(c),1),S("div",mF,[(F(!0),B(Re,null,gt(e.value.filter(u=>u.category===c),u=>(F(),B("div",{key:u.id,class:vt(["faq-item",{"is-open":n.value===u.id}])},[S("button",{class:"faq-question",onClick:h=>i(u.id)},[S("span",_F,X(u.question),1),S("span",{class:vt(["chevron",{"chevron--open":n.value===u.id}])},"▼",2)],8,pF),kl(S("div",yF,[S("div",{class:"answer-content",innerHTML:r(u.answer)},null,8,vF)],512),[[xw,n.value===u.id]])],2))),128))])])),64)),S("div",wF,[S("div",SF,[a[5]||(a[5]=S("h3",null,"📬 Deine Frage ist nicht dabei?",-1)),a[6]||(a[6]=S("p",null,[On(" Stelle deine Frage im "),S("strong",null,"Team-Chat"),On(" oder sprich deinen "),S("strong",null,"Mentor"),On(" an. Häufig gestellte Fragen werden hier ergänzt! ")],-1)),S("p",bF,[a[1]||(a[1]=On(" 💬 Daily Standups: ",-1)),a[2]||(a[2]=S("strong",null,"11:30 Uhr via Skype",-1)),a[3]||(a[3]=S("br",null,null,-1)),a[4]||(a[4]=On(" 👥 Siehe auch: ",-1)),Xe(l,{to:"/team"},{default:ri(()=>[...a[0]||(a[0]=[On("Team-Kontakte",-1)])]),_:1})])])])])])}}},MF=wt(EF,[["__scopeId","data-v-3bad4e20"]]),xF=ob({history:GS(),routes:[{path:"/",name:"dashboard",component:rM},{path:"/module/:id",name:"module",component:cO,props:!0},{path:"/team",name:"team",component:OO},{path:"/achievements",name:"achievements",component:hF},{path:"/faq",name:"faq",component:MF}]}),f1="onboarding-academy-state",Bs=(()=>{if(typeof window>"u")return{};try{return JSON.parse(localStorage.getItem(f1))||{}}catch{return{}}})(),CF={namespaced:!0,state:()=>{var t,e;return{name:((t=Bs.user)==null?void 0:t.name)||"Nachwuchskraft",hasSeenIntro:((e=Bs.user)==null?void 0:e.hasSeenIntro)||!1}},mutations:{setName(t,e){t.name=e},markIntroSeen(t){t.hasSeenIntro=!0}},getters:{name:t=>t.name,hasSeenIntro:t=>t.hasSeenIntro}},kF={namespaced:!0,state:()=>{var t;return{completedLessons:((t=Bs.progress)==null?void 0:t.completedLessons)||[]}},mutations:{completeLesson(t,{moduleId:e,lessonId:n}){const i=`${e}:${n}`;t.completedLessons.includes(i)||t.completedLessons.push(i)},resetProgress(t){t.completedLessons=[]}},getters:{isLessonCompleted:t=>(e,n)=>t.completedLessons.includes(`${e}:${n}`),moduleProgress:t=>e=>{const n=Ec(e);if(!n)return 0;const i=n.lessons.length;if(!i)return 0;const s=n.lessons.filter(r=>t.completedLessons.includes(`${e}:${r.id}`)).length;return Math.round(s/i*100)},overallProgress:(t,e,n)=>{const i=bc(n.tracks.enabled),s=i.reduce((o,a)=>o+a.lessons.length,0);if(!s)return 0;const r=i.reduce((o,a)=>{const l=a.lessons.filter(c=>t.completedLessons.includes(`${a.id}:${c.id}`)).length;return o+l},0);return Math.round(r/s*100)}}},PF={namespaced:!0,state:()=>{var t;return{enabled:((t=Bs.tracks)==null?void 0:t.enabled)||[]}},mutations:{toggleTrack(t,e){const n=t.enabled.indexOf(e);n>-1?t.enabled.splice(n,1):t.enabled.push(e)},resetTrack(t){t.enabled=[]}},getters:{enabledTracks:t=>t.enabled,isTrackEnabled:t=>e=>t.enabled.includes(e),hasEnabledTracks:t=>t.enabled.length>0,isModuleActive:t=>e=>{const n=Ec(e);return n?n.track==="common"||t.enabled.includes(n.track):!1}}},TF={namespaced:!0,state:()=>{var t;return{results:((t=Bs.quiz)==null?void 0:t.results)||{}}},mutations:{saveResult(t,{quizId:e,score:n,total:i}){t.results[e]={score:n,total:i}},resetQuizResults(t){t.results={}}}},RF={namespaced:!0,state:()=>{var t,e;return{earned:((t=Bs.badges)==null?void 0:t.earned)||[],lastEarned:null,viewedBadges:((e=Bs.badges)==null?void 0:e.viewedBadges)||[]}},mutations:{earnBadge(t,e){t.earned.includes(e)||(t.earned.push(e),t.lastEarned=e)},markBadgeViewed(t,e){t.viewedBadges.includes(e)||t.viewedBadges.push(e),t.lastEarned===e&&(t.lastEarned=null)},resetBadges(t){t.earned=[],t.lastEarned=null,t.viewedBadges=[]}},getters:{hasBadge:t=>e=>t.earned.includes(e),earnedBadges:t=>t.earned,unviewedBadges:t=>t.earned.filter(e=>!t.viewedBadges.includes(e)),unviewedCount:(t,e)=>e.unviewedBadges.length,lastEarnedBadge:t=>t.lastEarned}},AF=t=>{t.subscribe((e,n)=>{if(typeof window>"u")return;const i={user:n.user,progress:n.progress,quiz:n.quiz,tracks:n.tracks,badges:n.badges};localStorage.setItem(f1,JSON.stringify(i))})},IF=Mb({modules:{user:CF,progress:kF,quiz:TF,tracks:PF,badges:RF},plugins:[AF]}),ff=Uw(_E);ff.use(IF);ff.use(xF);ff.mount("#app");
