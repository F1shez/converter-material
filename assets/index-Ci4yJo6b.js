(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const Al=(i,t)=>i===t,Er={equals:Al};let wl=Do;const Vn=1,yr=2,wo={owned:null,cleanups:null,context:null,owner:null};var Ee=null;let Vr=null,Cl=null,re=null,ve=null,zn=null,Ur=0;function Rl(i,t){const e=re,n=Ee,r=i.length===0,a=t===void 0?n:t,o=r?wo:{owned:null,cleanups:null,context:a?a.context:null,owner:a},s=r?i:()=>i(()=>ts(()=>Nr(o)));Ee=o,re=null;try{return Oi(s,!0)}finally{re=e,Ee=n}}function We(i,t){t=t?Object.assign({},Er,t):Er;const e={value:i,observers:null,observerSlots:null,comparator:t.equals||void 0},n=r=>(typeof r=="function"&&(r=r(e.value)),Ro(e,r));return[Co.bind(e),n]}function Bn(i,t,e){const n=Po(i,t,!1,Vn);Ir(n)}function Ne(i,t,e){e=e?Object.assign({},Er,e):Er;const n=Po(i,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=e.equals||void 0,Ir(n),Co.bind(n)}function ts(i){if(re===null)return i();const t=re;re=null;try{return i()}finally{re=t}}function Co(){if(this.sources&&this.state)if(this.state===Vn)Ir(this);else{const i=ve;ve=null,Oi(()=>Tr(this),!1),ve=i}if(re){const i=this.observers?this.observers.length:0;re.sources?(re.sources.push(this),re.sourceSlots.push(i)):(re.sources=[this],re.sourceSlots=[i]),this.observers?(this.observers.push(re),this.observerSlots.push(re.sources.length-1)):(this.observers=[re],this.observerSlots=[re.sources.length-1])}return this.value}function Ro(i,t,e){let n=i.value;return(!i.comparator||!i.comparator(n,t))&&(i.value=t,i.observers&&i.observers.length&&Oi(()=>{for(let r=0;r<i.observers.length;r+=1){const a=i.observers[r],o=Vr&&Vr.running;o&&Vr.disposed.has(a),(o?!a.tState:!a.state)&&(a.pure?ve.push(a):zn.push(a),a.observers&&Uo(a)),o||(a.state=Vn)}if(ve.length>1e6)throw ve=[],new Error},!1)),t}function Ir(i){if(!i.fn)return;Nr(i);const t=Ur;Pl(i,i.value,t)}function Pl(i,t,e){let n;const r=Ee,a=re;re=Ee=i;try{n=i.fn(t)}catch(o){return i.pure&&(i.state=Vn,i.owned&&i.owned.forEach(Nr),i.owned=null),i.updatedAt=e+1,Io(o)}finally{re=a,Ee=r}(!i.updatedAt||i.updatedAt<=e)&&(i.updatedAt!=null&&"observers"in i?Ro(i,n):i.value=n,i.updatedAt=e)}function Po(i,t,e,n=Vn,r){const a={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Ee,context:Ee?Ee.context:null,pure:e};return Ee===null||Ee!==wo&&(Ee.owned?Ee.owned.push(a):Ee.owned=[a]),a}function Lo(i){if(i.state===0)return;if(i.state===yr)return Tr(i);if(i.suspense&&ts(i.suspense.inFallback))return i.suspense.effects.push(i);const t=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<Ur);)i.state&&t.push(i);for(let e=t.length-1;e>=0;e--)if(i=t[e],i.state===Vn)Ir(i);else if(i.state===yr){const n=ve;ve=null,Oi(()=>Tr(i,t[0]),!1),ve=n}}function Oi(i,t){if(ve)return i();let e=!1;t||(ve=[]),zn?e=!0:zn=[],Ur++;try{const n=i();return Ll(e),n}catch(n){e||(zn=null),ve=null,Io(n)}}function Ll(i){if(ve&&(Do(ve),ve=null),i)return;const t=zn;zn=null,t.length&&Oi(()=>wl(t),!1)}function Do(i){for(let t=0;t<i.length;t++)Lo(i[t])}function Tr(i,t){i.state=0;for(let e=0;e<i.sources.length;e+=1){const n=i.sources[e];if(n.sources){const r=n.state;r===Vn?n!==t&&(!n.updatedAt||n.updatedAt<Ur)&&Lo(n):r===yr&&Tr(n,t)}}}function Uo(i){for(let t=0;t<i.observers.length;t+=1){const e=i.observers[t];e.state||(e.state=yr,e.pure?ve.push(e):zn.push(e),e.observers&&Uo(e))}}function Nr(i){let t;if(i.sources)for(;i.sources.length;){const e=i.sources.pop(),n=i.sourceSlots.pop(),r=e.observers;if(r&&r.length){const a=r.pop(),o=e.observerSlots.pop();n<r.length&&(a.sourceSlots[o]=n,r[n]=a,e.observerSlots[n]=o)}}if(i.owned){for(t=i.owned.length-1;t>=0;t--)Nr(i.owned[t]);i.owned=null}if(i.cleanups){for(t=i.cleanups.length-1;t>=0;t--)i.cleanups[t]();i.cleanups=null}i.state=0}function Dl(i){return i instanceof Error?i:new Error(typeof i=="string"?i:"Unknown error",{cause:i})}function Io(i,t=Ee){throw Dl(i)}let Ul=!1;function xa(i,t){return ts(()=>i(t||{}))}function Il(i,t,e){let n=e.length,r=t.length,a=n,o=0,s=0,l=t[r-1].nextSibling,c=null;for(;o<r||s<a;){if(t[o]===e[s]){o++,s++;continue}for(;t[r-1]===e[a-1];)r--,a--;if(r===o){const f=a<n?s?e[s-1].nextSibling:e[a-s]:l;for(;s<a;)i.insertBefore(e[s++],f)}else if(a===s)for(;o<r;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[a-1]&&e[s]===t[r-1]){const f=t[--r].nextSibling;i.insertBefore(e[s++],t[o++].nextSibling),i.insertBefore(e[--a],f),t[r]=e[a]}else{if(!c){c=new Map;let p=s;for(;p<a;)c.set(e[p],p++)}const f=c.get(t[o]);if(f!=null)if(s<f&&f<a){let p=o,m=1,u;for(;++p<r&&p<a&&!((u=c.get(t[p]))==null||u!==f+m);)m++;if(m>f-s){const g=t[o];for(;s<f;)i.insertBefore(e[s++],g)}else i.replaceChild(e[s++],t[o++])}else o++;else t[o++].remove()}}}const xs="_$DX_DELEGATE";function Nl(i,t,e,n={}){let r;return Rl(a=>{r=a,t===document?i():Pi(t,i(),t.firstChild?null:void 0,e)},n.owner),()=>{r(),t.textContent=""}}function An(i,t,e){let n;const r=()=>{const o=document.createElement("template");return o.innerHTML=i,o.content.firstChild},a=()=>(n||(n=r())).cloneNode(!0);return a.cloneNode=a,a}function es(i,t=window.document){const e=t[xs]||(t[xs]=new Set);for(let n=0,r=i.length;n<r;n++){const a=i[n];e.has(a)||(e.add(a),t.addEventListener(a,Ol))}}function Wr(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)}function Ss(i,t){t==null?i.removeAttribute("class"):i.className=t}function Pi(i,t,e,n){if(e!==void 0&&!n&&(n=[]),typeof t!="function")return br(i,t,n,e);Bn(r=>br(i,t(),r,e),n)}function Ol(i){const t=`$$${i.type}`;let e=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==e&&Object.defineProperty(i,"target",{configurable:!0,value:e}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}});e;){const n=e[t];if(n&&!e.disabled){const r=e[`${t}Data`];if(r!==void 0?n.call(e,r,i):n.call(e,i),i.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function br(i,t,e,n,r){for(;typeof e=="function";)e=e();if(t===e)return e;const a=typeof t,o=n!==void 0;if(i=o&&e[0]&&e[0].parentNode||i,a==="string"||a==="number"){if(a==="number"&&(t=t.toString(),t===e))return e;if(o){let s=e[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),e=Yn(i,e,n,s)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||a==="boolean")e=Yn(i,e,n);else{if(a==="function")return Bn(()=>{let s=t();for(;typeof s=="function";)s=s();e=br(i,s,e,n)}),()=>e;if(Array.isArray(t)){const s=[],l=e&&Array.isArray(e);if(Sa(s,t,e,r))return Bn(()=>e=br(i,s,e,n,!0)),()=>e;if(s.length===0){if(e=Yn(i,e,n),o)return e}else l?e.length===0?Ms(i,s,n):Il(i,e,s):(e&&Yn(i),Ms(i,s));e=s}else if(t.nodeType){if(Array.isArray(e)){if(o)return e=Yn(i,e,n,t);Yn(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}}return e}function Sa(i,t,e,n){let r=!1;for(let a=0,o=t.length;a<o;a++){let s=t[a],l=e&&e[i.length],c;if(!(s==null||s===!0||s===!1))if((c=typeof s)=="object"&&s.nodeType)i.push(s);else if(Array.isArray(s))r=Sa(i,s,l)||r;else if(c==="function")if(n){for(;typeof s=="function";)s=s();r=Sa(i,Array.isArray(s)?s:[s],Array.isArray(l)?l:[l])||r}else i.push(s),r=!0;else{const f=String(s);l&&l.nodeType===3&&l.data===f?i.push(l):i.push(document.createTextNode(f))}}return r}function Ms(i,t,e=null){for(let n=0,r=t.length;n<r;n++)i.insertBefore(t[n],e)}function Yn(i,t,e,n){if(e===void 0)return i.textContent="";const r=n||document.createTextNode("");if(t.length){let a=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(r!==s){const l=s.parentNode===i;!a&&!o?l?i.replaceChild(r,s):i.insertBefore(r,e):l&&s.remove()}else a=!0}}else i.insertBefore(r,e);return[r]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ns="166",qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fl=0,Es=1,Bl=2,No=1,zl=2,nn=3,bn=0,Te=1,rn=2,yn=0,pi=1,ys=2,Ts=3,bs=4,kl=5,On=100,Hl=101,Gl=102,Vl=103,Wl=104,Xl=200,Yl=201,ql=202,jl=203,Ma=204,Ea=205,Zl=206,Kl=207,$l=208,Jl=209,Ql=210,tc=211,ec=212,nc=213,ic=214,rc=0,ac=1,sc=2,Ar=3,oc=4,lc=5,cc=6,dc=7,Oo=0,fc=1,hc=2,Tn=0,Fo=1,uc=2,pc=3,mc=4,_c=5,Bo=6,gc=7,zo=300,gi=301,vi=302,ya=303,Ta=304,Or=306,Re=1e3,sn=1001,ba=1002,ye=1003,vc=1004,Vi=1005,ge=1006,Xr=1007,En=1008,cn=1009,ko=1010,Ho=1011,Ui=1012,is=1013,kn=1014,Oe=1015,on=1016,rs=1017,as=1018,xi=1020,Go=35902,Vo=1021,Wo=1022,He=1023,Xo=1024,Yo=1025,mi=1026,Si=1027,qo=1028,ss=1029,jo=1030,os=1031,ls=1033,_r=33776,gr=33777,vr=33778,xr=33779,Aa=35840,wa=35841,Ca=35842,Ra=35843,Pa=36196,La=37492,Da=37496,Ua=37808,Ia=37809,Na=37810,Oa=37811,Fa=37812,Ba=37813,za=37814,ka=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,Ya=37821,Sr=36492,qa=36494,ja=36495,Zo=36283,Za=36284,Ka=36285,$a=36286,xc=3200,Sc=3201,Ko=0,Mc=1,Mn="",Pe="srgb",fn="srgb-linear",cs="display-p3",Fr="display-p3-linear",wr="linear",$t="srgb",Cr="rec709",Rr="p3",Zn=7680,As=519,Ec=512,yc=513,Tc=514,$o=515,bc=516,Ac=517,wc=518,Cc=519,ws=35044,Cs="300 es",ln=2e3,Pr=2001;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rs=1234567;const Li=Math.PI/180,Ii=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function ds(i,t){return(i%t+t)%t}function Rc(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Pc(i,t,e){return i!==t?(e-i)/(t-i):0}function Di(i,t,e){return(1-e)*i+e*t}function Lc(i,t,e,n){return Di(i,t,1-Math.exp(-e*n))}function Dc(i,t=1){return t-Math.abs(ds(i,t*2)-t)}function Uc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ic(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Oc(i,t){return i+Math.random()*(t-i)}function Fc(i){return i*(.5-Math.random())}function Bc(i){i!==void 0&&(Rs=i);let t=Rs+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zc(i){return i*Li}function kc(i){return i*Ii}function Hc(i){return(i&i-1)===0&&i!==0}function Gc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wc(i,t,e,n,r){const a=Math.cos,o=Math.sin,s=a(e/2),l=o(e/2),c=a((t+n)/2),f=o((t+n)/2),p=a((t-n)/2),m=o((t-n)/2),u=a((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(s*f,l*p,l*m,s*c);break;case"YZY":i.set(l*m,s*f,l*p,s*c);break;case"ZXZ":i.set(l*p,l*m,s*f,s*c);break;case"XZX":i.set(s*f,l*g,l*u,s*c);break;case"YXY":i.set(l*u,s*f,l*g,s*c);break;case"ZYZ":i.set(l*g,l*u,s*f,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xc={DEG2RAD:Li,RAD2DEG:Ii,generateUUID:Ei,clamp:fe,euclideanModulo:ds,mapLinear:Rc,inverseLerp:Pc,lerp:Di,damp:Lc,pingpong:Dc,smoothstep:Uc,smootherstep:Ic,randInt:Nc,randFloat:Oc,randFloatSpread:Fc,seededRandom:Bc,degToRad:zc,radToDeg:kc,isPowerOfTwo:Hc,ceilPowerOfTwo:Gc,floorPowerOfTwo:Vc,setQuaternionFromProperEuler:Wc,normalize:Se,denormalize:hi};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*r+t.x,this.y=a*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,r,a,o,s,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,o,s,l,c)}set(t,e,n,r,a,o,s,l,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=s,f[3]=e,f[4]=a,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],f=n[4],p=n[7],m=n[2],u=n[5],g=n[8],_=r[0],h=r[3],d=r[6],x=r[1],S=r[4],b=r[7],P=r[2],L=r[5],C=r[8];return a[0]=o*_+s*x+l*P,a[3]=o*h+s*S+l*L,a[6]=o*d+s*b+l*C,a[1]=c*_+f*x+p*P,a[4]=c*h+f*S+p*L,a[7]=c*d+f*b+p*C,a[2]=m*_+u*x+g*P,a[5]=m*h+u*S+g*L,a[8]=m*d+u*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],o=t[4],s=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*s*c-n*a*f+n*s*l+r*a*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],o=t[4],s=t[5],l=t[6],c=t[7],f=t[8],p=f*o-s*c,m=s*l-f*a,u=c*a-o*l,g=e*p+n*m+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=p*_,t[1]=(r*c-f*n)*_,t[2]=(s*n-r*o)*_,t[3]=m*_,t[4]=(f*e-r*l)*_,t[5]=(r*a-s*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*s)+o+t,-r*c,r*l,-r*(-c*o+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Gt;function Jo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ni(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yc(){const i=Ni("canvas");return i.style.display="block",i}const Ps={};function Qo(i){i in Ps||(Ps[i]=!0,console.warn(i))}function qc(i,t,e){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const Ls=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ds=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[fn]:{transfer:wr,primaries:Cr,toReference:i=>i,fromReference:i=>i},[Pe]:{transfer:$t,primaries:Cr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fr]:{transfer:wr,primaries:Rr,toReference:i=>i.applyMatrix3(Ds),fromReference:i=>i.applyMatrix3(Ls)},[cs]:{transfer:$t,primaries:Rr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ds),fromReference:i=>i.applyMatrix3(Ls).convertLinearToSRGB()}},jc=new Set([fn,Fr]),Zt={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wi[t].toReference,r=Wi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wi[i].primaries},getTransfer:function(i){return i===Mn?wr:Wi[i].transfer}};function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kn;class Zc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kn===void 0&&(Kn=Ni("canvas")),Kn.width=t.width,Kn.height=t.height;const n=Kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ni("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=_i(a[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kc=0;class tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(jr(r[o].image)):a.push(jr(r[o]))}else a=jr(r);n.url=a}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class xe extends Wn{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=sn,r=sn,a=ge,o=En,s=He,l=cn,c=xe.DEFAULT_ANISOTROPY,f=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ei(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Re:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Re:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=zo;xe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a;const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],u=l[5],g=l[9],_=l[2],h=l[6],d=l[10];if(Math.abs(f-m)<.01&&Math.abs(p-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+_)<.1&&Math.abs(g+h)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,b=(u+1)/2,P=(d+1)/2,L=(f+m)/4,C=(p+_)/4,N=(g+h)/4;return S>b&&S>P?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=L/n,a=C/n):b>P?b<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),n=L/r,a=N/r):P<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),n=C/a,r=N/a),this.set(n,r,a,e),this}let x=Math.sqrt((h-g)*(h-g)+(p-_)*(p-_)+(m-f)*(m-f));return Math.abs(x)<.001&&(x=1),this.x=(h-g)/x,this.y=(p-_)/x,this.z=(m-f)/x,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jc extends Wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new xe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class el extends xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ye,this.minFilter=ye,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qc extends xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ye,this.minFilter=ye,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,o,s){let l=n[r+0],c=n[r+1],f=n[r+2],p=n[r+3];const m=a[o+0],u=a[o+1],g=a[o+2],_=a[o+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=p;return}if(s===1){t[e+0]=m,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==m||c!==u||f!==g){let h=1-s;const d=l*m+c*u+f*g+p*_,x=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const P=Math.sqrt(S),L=Math.atan2(P,d*x);h=Math.sin(h*L)/P,s=Math.sin(s*L)/P}const b=s*x;if(l=l*h+m*b,c=c*h+u*b,f=f*h+g*b,p=p*h+_*b,h===1-s){const P=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=P,c*=P,f*=P,p*=P}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,a,o){const s=n[r],l=n[r+1],c=n[r+2],f=n[r+3],p=a[o],m=a[o+1],u=a[o+2],g=a[o+3];return t[e]=s*g+f*p+l*u-c*m,t[e+1]=l*g+f*m+c*p-s*u,t[e+2]=c*g+f*u+s*m-l*p,t[e+3]=f*g-s*p-l*m-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,a=t._z,o=t._order,s=Math.cos,l=Math.sin,c=s(n/2),f=s(r/2),p=s(a/2),m=l(n/2),u=l(r/2),g=l(a/2);switch(o){case"XYZ":this._x=m*f*p+c*u*g,this._y=c*u*p-m*f*g,this._z=c*f*g+m*u*p,this._w=c*f*p-m*u*g;break;case"YXZ":this._x=m*f*p+c*u*g,this._y=c*u*p-m*f*g,this._z=c*f*g-m*u*p,this._w=c*f*p+m*u*g;break;case"ZXY":this._x=m*f*p-c*u*g,this._y=c*u*p+m*f*g,this._z=c*f*g+m*u*p,this._w=c*f*p-m*u*g;break;case"ZYX":this._x=m*f*p-c*u*g,this._y=c*u*p+m*f*g,this._z=c*f*g-m*u*p,this._w=c*f*p+m*u*g;break;case"YZX":this._x=m*f*p+c*u*g,this._y=c*u*p+m*f*g,this._z=c*f*g-m*u*p,this._w=c*f*p-m*u*g;break;case"XZY":this._x=m*f*p-c*u*g,this._y=c*u*p-m*f*g,this._z=c*f*g+m*u*p,this._w=c*f*p+m*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],a=e[8],o=e[1],s=e[5],l=e[9],c=e[2],f=e[6],p=e[10],m=n+s+p;if(m>0){const u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(f-l)*u,this._y=(a-c)*u,this._z=(o-r)*u}else if(n>s&&n>p){const u=2*Math.sqrt(1+n-s-p);this._w=(f-l)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(a+c)/u}else if(s>p){const u=2*Math.sqrt(1+s-n-p);this._w=(a-c)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+p-n-s);this._w=(o-r)/u,this._x=(a+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,a=t._z,o=t._w,s=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*s+r*c-a*l,this._y=r*f+o*l+a*s-n*c,this._z=a*f+o*c+n*l-r*s,this._w=o*f-n*s-r*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*t._w+n*t._x+r*t._y+a*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,s),p=Math.sin((1-e)*f)/c,m=Math.sin(e*f)/c;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=a*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,n=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Us.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Us.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,a=t.x,o=t.y,s=t.z,l=t.w,c=2*(o*r-s*n),f=2*(s*e-a*r),p=2*(a*n-o*e);return this.x=e+l*c+o*p-s*f,this.y=n+l*f+s*c-a*p,this.z=r+l*p+a*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,a=t.z,o=e.x,s=e.y,l=e.z;return this.x=r*l-a*s,this.y=a*o-n*l,this.z=n*s-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new it,Us=new Gn;class Fi{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)t.isMesh===!0?t.getVertexPosition(o,Be):Be.fromBufferAttribute(a,o),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const r=t.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),Yi.subVectors(this.max,bi),$n.subVectors(t.a,bi),Jn.subVectors(t.b,bi),Qn.subVectors(t.c,bi),pn.subVectors(Jn,$n),mn.subVectors(Qn,Jn),Rn.subVectors($n,Qn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Rn.z,Rn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Rn.z,0,-Rn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Rn.y,Rn.x,0];return!Kr(e,$n,Jn,Qn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,$n,Jn,Qn,Yi))?!1:(qi.crossVectors(pn,mn),e=[qi.x,qi.y,qi.z],Kr(e,$n,Jn,Qn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new it,new it,new it,new it,new it,new it,new it,new it],Be=new it,Xi=new Fi,$n=new it,Jn=new it,Qn=new it,pn=new it,mn=new it,Rn=new it,bi=new it,Yi=new it,qi=new it,Pn=new it;function Kr(i,t,e,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){Pn.fromArray(i,a);const s=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),f=n.dot(Pn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>s)return!1}return!0}const td=new Fi,Ai=new it,$r=new it;class fs{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):td.setFromPoints(t).getCenter(n);let r=0;for(let a=0,o=t.length;a<o;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ai,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add($r)),this.expandByPoint(Ai.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new it,Jr=new it,ji=new it,_n=new it,Qr=new it,Zi=new it,ta=new it;class nl{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Jr.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Jr);const a=t.distanceTo(e)*.5,o=-this.direction.dot(ji),s=_n.dot(this.direction),l=-_n.dot(ji),c=_n.lengthSq(),f=Math.abs(1-o*o);let p,m,u,g;if(f>0)if(p=o*l-s,m=o*s-l,g=a*f,p>=0)if(m>=-g)if(m<=g){const _=1/f;p*=_,m*=_,u=p*(p+o*m+2*s)+m*(o*p+m+2*l)+c}else m=a,p=Math.max(0,-(o*m+s)),u=-p*p+m*(m+2*l)+c;else m=-a,p=Math.max(0,-(o*m+s)),u=-p*p+m*(m+2*l)+c;else m<=-g?(p=Math.max(0,-(-o*a+s)),m=p>0?-a:Math.min(Math.max(-a,-l),a),u=-p*p+m*(m+2*l)+c):m<=g?(p=0,m=Math.min(Math.max(-a,-l),a),u=m*(m+2*l)+c):(p=Math.max(0,-(o*a+s)),m=p>0?a:Math.min(Math.max(-a,-l),a),u=-p*p+m*(m+2*l)+c);else m=o>0?-a:a,p=Math.max(0,-(o*m+s)),u=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Jr).addScaledVector(ji,m),u}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),r=$e.dot($e)-n*n,a=t.radius*t.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,o,s,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,r=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,r=(t.min.x-m.x)*c),f>=0?(a=(t.min.y-m.y)*f,o=(t.max.y-m.y)*f):(a=(t.max.y-m.y)*f,o=(t.min.y-m.y)*f),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),p>=0?(s=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(s=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,r,a){Qr.subVectors(e,t),Zi.subVectors(n,t),ta.crossVectors(Qr,Zi);let o=this.direction.dot(ta),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;_n.subVectors(this.origin,t);const l=s*this.direction.dot(Zi.crossVectors(_n,Zi));if(l<0)return null;const c=s*this.direction.dot(Qr.cross(_n));if(c<0||l+c>o)return null;const f=-s*_n.dot(ta);return f<0?null:this.at(f/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,r,a,o,s,l,c,f,p,m,u,g,_,h){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,o,s,l,c,f,p,m,u,g,_,h)}set(t,e,n,r,a,o,s,l,c,f,p,m,u,g,_,h){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=f,d[10]=p,d[14]=m,d[3]=u,d[7]=g,d[11]=_,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ti.setFromMatrixColumn(t,0).length(),a=1/ti.setFromMatrixColumn(t,1).length(),o=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,a=t.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){const m=o*f,u=o*p,g=s*f,_=s*p;e[0]=l*f,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=m-_*c,e[9]=-s*l,e[2]=_-m*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*f,u=l*p,g=c*f,_=c*p;e[0]=m+_*s,e[4]=g*s-u,e[8]=o*c,e[1]=o*p,e[5]=o*f,e[9]=-s,e[2]=u*s-g,e[6]=_+m*s,e[10]=o*l}else if(t.order==="ZXY"){const m=l*f,u=l*p,g=c*f,_=c*p;e[0]=m-_*s,e[4]=-o*p,e[8]=g+u*s,e[1]=u+g*s,e[5]=o*f,e[9]=_-m*s,e[2]=-o*c,e[6]=s,e[10]=o*l}else if(t.order==="ZYX"){const m=o*f,u=o*p,g=s*f,_=s*p;e[0]=l*f,e[4]=g*c-u,e[8]=m*c+_,e[1]=l*p,e[5]=_*c+m,e[9]=u*c-g,e[2]=-c,e[6]=s*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,u=o*c,g=s*l,_=s*c;e[0]=l*f,e[4]=_-m*p,e[8]=g*p+u,e[1]=p,e[5]=o*f,e[9]=-s*f,e[2]=-c*f,e[6]=u*p+g,e[10]=m-_*p}else if(t.order==="XZY"){const m=o*l,u=o*c,g=s*l,_=s*c;e[0]=l*f,e[4]=-p,e[8]=c*f,e[1]=m*p+_,e[5]=o*f,e[9]=u*p-g,e[2]=g*p-u,e[6]=s*f,e[10]=_*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ed,t,nd)}lookAt(t,e,n){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),gn.crossVectors(n,we),gn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),gn.crossVectors(n,we)),gn.normalize(),Ki.crossVectors(we,gn),r[0]=gn.x,r[4]=Ki.x,r[8]=we.x,r[1]=gn.y,r[5]=Ki.y,r[9]=we.y,r[2]=gn.z,r[6]=Ki.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],f=n[1],p=n[5],m=n[9],u=n[13],g=n[2],_=n[6],h=n[10],d=n[14],x=n[3],S=n[7],b=n[11],P=n[15],L=r[0],C=r[4],N=r[8],y=r[12],T=r[1],B=r[5],w=r[9],O=r[13],v=r[2],z=r[6],V=r[10],k=r[14],$=r[3],tt=r[7],ct=r[11],W=r[15];return a[0]=o*L+s*T+l*v+c*$,a[4]=o*C+s*B+l*z+c*tt,a[8]=o*N+s*w+l*V+c*ct,a[12]=o*y+s*O+l*k+c*W,a[1]=f*L+p*T+m*v+u*$,a[5]=f*C+p*B+m*z+u*tt,a[9]=f*N+p*w+m*V+u*ct,a[13]=f*y+p*O+m*k+u*W,a[2]=g*L+_*T+h*v+d*$,a[6]=g*C+_*B+h*z+d*tt,a[10]=g*N+_*w+h*V+d*ct,a[14]=g*y+_*O+h*k+d*W,a[3]=x*L+S*T+b*v+P*$,a[7]=x*C+S*B+b*z+P*tt,a[11]=x*N+S*w+b*V+P*ct,a[15]=x*y+S*O+b*k+P*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],o=t[1],s=t[5],l=t[9],c=t[13],f=t[2],p=t[6],m=t[10],u=t[14],g=t[3],_=t[7],h=t[11],d=t[15];return g*(+a*l*p-r*c*p-a*s*m+n*c*m+r*s*u-n*l*u)+_*(+e*l*u-e*c*m+a*o*m-r*o*u+r*c*f-a*l*f)+h*(+e*c*p-e*s*u-a*o*p+n*o*u+a*s*f-n*c*f)+d*(-r*s*f-e*l*p+e*s*m+r*o*p-n*o*m+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],o=t[4],s=t[5],l=t[6],c=t[7],f=t[8],p=t[9],m=t[10],u=t[11],g=t[12],_=t[13],h=t[14],d=t[15],x=p*h*c-_*m*c+_*l*u-s*h*u-p*l*d+s*m*d,S=g*m*c-f*h*c-g*l*u+o*h*u+f*l*d-o*m*d,b=f*_*c-g*p*c+g*s*u-o*_*u-f*s*d+o*p*d,P=g*p*l-f*_*l-g*s*m+o*_*m+f*s*h-o*p*h,L=e*x+n*S+r*b+a*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return t[0]=x*C,t[1]=(_*m*a-p*h*a-_*r*u+n*h*u+p*r*d-n*m*d)*C,t[2]=(s*h*a-_*l*a+_*r*c-n*h*c-s*r*d+n*l*d)*C,t[3]=(p*l*a-s*m*a-p*r*c+n*m*c+s*r*u-n*l*u)*C,t[4]=S*C,t[5]=(f*h*a-g*m*a+g*r*u-e*h*u-f*r*d+e*m*d)*C,t[6]=(g*l*a-o*h*a-g*r*c+e*h*c+o*r*d-e*l*d)*C,t[7]=(o*m*a-f*l*a+f*r*c-e*m*c-o*r*u+e*l*u)*C,t[8]=b*C,t[9]=(g*p*a-f*_*a-g*n*u+e*_*u+f*n*d-e*p*d)*C,t[10]=(o*_*a-g*s*a+g*n*c-e*_*c-o*n*d+e*s*d)*C,t[11]=(f*s*a-o*p*a-f*n*c+e*p*c+o*n*u-e*s*u)*C,t[12]=P*C,t[13]=(f*_*r-g*p*r+g*n*m-e*_*m-f*n*h+e*p*h)*C,t[14]=(g*s*r-o*_*r-g*n*l+e*_*l+o*n*h-e*s*h)*C,t[15]=(o*p*r-f*s*r+f*n*l-e*p*l-o*n*m+e*s*m)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),a=1-n,o=t.x,s=t.y,l=t.z,c=a*o,f=a*s;return this.set(c*o+n,c*s-r*l,c*l+r*s,0,c*s+r*l,f*s+n,f*l-r*o,0,c*l-r*s,f*l+r*o,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,o){return this.set(1,n,a,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,a=e._x,o=e._y,s=e._z,l=e._w,c=a+a,f=o+o,p=s+s,m=a*c,u=a*f,g=a*p,_=o*f,h=o*p,d=s*p,x=l*c,S=l*f,b=l*p,P=n.x,L=n.y,C=n.z;return r[0]=(1-(_+d))*P,r[1]=(u+b)*P,r[2]=(g-S)*P,r[3]=0,r[4]=(u-b)*L,r[5]=(1-(m+d))*L,r[6]=(h+x)*L,r[7]=0,r[8]=(g+S)*C,r[9]=(h-x)*C,r[10]=(1-(m+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let a=ti.set(r[0],r[1],r[2]).length();const o=ti.set(r[4],r[5],r[6]).length(),s=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],ze.copy(this);const c=1/a,f=1/o,p=1/s;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=f,ze.elements[5]*=f,ze.elements[6]*=f,ze.elements[8]*=p,ze.elements[9]*=p,ze.elements[10]*=p,e.setFromRotationMatrix(ze),n.x=a,n.y=o,n.z=s,this}makePerspective(t,e,n,r,a,o,s=ln){const l=this.elements,c=2*a/(e-t),f=2*a/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let u,g;if(s===ln)u=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===Pr)u=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,a,o,s=ln){const l=this.elements,c=1/(e-t),f=1/(n-r),p=1/(o-a),m=(e+t)*c,u=(n+r)*f;let g,_;if(s===ln)g=(o+a)*p,_=-2*p;else if(s===Pr)g=a*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ti=new it,ze=new oe,ed=new it(0,0,0),nd=new it(1,1,1),gn=new it,Ki=new it,we=new it,Is=new oe,Ns=new Gn;class je{constructor(t=0,e=0,n=0,r=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],f=r[9],p=r[2],m=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(fe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-fe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(s,u));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Is.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Is,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ns.setFromEuler(this),this.setFromQuaternion(Ns,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let id=0;const Os=new it,ei=new Gn,Je=new oe,$i=new it,wi=new it,rd=new it,ad=new Gn,Fs=new it(1,0,0),Bs=new it(0,1,0),zs=new it(0,0,1),ks={type:"added"},sd={type:"removed"},ni={type:"childadded",child:null},ea={type:"childremoved",child:null};class De extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new it,e=new je,n=new Gn,r=new it(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new Gt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(Fs,t)}rotateY(t){return this.rotateOnAxis(Bs,t)}rotateZ(t){return this.rotateOnAxis(zs,t)}translateOnAxis(t,e){return Os.copy(t).applyQuaternion(this.quaternion),this.position.add(Os.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fs,t)}translateY(t){return this.translateOnAxis(Bs,t)}translateZ(t){return this.translateOnAxis(zs,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$i.copy(t):$i.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(wi,$i,this.up):Je.lookAt($i,wi,this.up),this.quaternion.setFromRotationMatrix(Je),r&&(Je.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(Je),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ks),ni.child=t,this.dispatchEvent(ni),ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sd),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ks),ni.child=t,this.dispatchEvent(ni),ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(t.materials,this.material[l]));r.material=s}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(t.animations,l))}}if(e){const s=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),p=o(t.shapes),m=o(t.skeletons),u=o(t.animations),g=o(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(s){const l=[];for(const c in s){const f=s[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}De.DEFAULT_UP=new it(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new it,Qe=new it,na=new it,tn=new it,ii=new it,ri=new it,Hs=new it,ia=new it,ra=new it,aa=new it;class Xe{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ke.subVectors(t,e),r.cross(ke);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){ke.subVectors(r,e),Qe.subVectors(n,e),na.subVectors(t,e);const o=ke.dot(ke),s=ke.dot(Qe),l=ke.dot(na),c=Qe.dot(Qe),f=Qe.dot(na),p=o*c-s*s;if(p===0)return a.set(0,0,0),null;const m=1/p,u=(c*l-s*f)*m,g=(o*f-s*l)*m;return a.set(1-u-g,g,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,r,a,o,s,l){return this.getBarycoord(t,e,n,r,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(s,tn.z),l)}static isFrontFacing(t,e,n,r){return ke.subVectors(n,e),Qe.subVectors(t,e),ke.cross(Qe).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),ke.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,a){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,a=this.c;let o,s;ii.subVectors(r,n),ri.subVectors(a,n),ia.subVectors(t,n);const l=ii.dot(ia),c=ri.dot(ia);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,r);const f=ii.dot(ra),p=ri.dot(ra);if(f>=0&&p<=f)return e.copy(r);const m=l*p-f*c;if(m<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(ii,o);aa.subVectors(t,a);const u=ii.dot(aa),g=ri.dot(aa);if(g>=0&&u<=g)return e.copy(a);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),e.copy(n).addScaledVector(ri,s);const h=f*g-u*p;if(h<=0&&p-f>=0&&u-g>=0)return Hs.subVectors(a,r),s=(p-f)/(p-f+(u-g)),e.copy(r).addScaledVector(Hs,s);const d=1/(h+_+m);return o=_*d,s=m*d,e.copy(n).addScaledVector(ii,o).addScaledVector(ri,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=ds(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=sa(o,a,t+1/3),this.g=sa(o,a,t),this.b=sa(o,a,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=Pe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Zt.fromWorkingColorSpace(_e.copy(this),t),Math.round(fe(_e.r*255,0,255))*65536+Math.round(fe(_e.g*255,0,255))*256+Math.round(fe(_e.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,r=_e.g,a=_e.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let l,c;const f=(s+o)/2;if(s===o)l=0,c=0;else{const p=o-s;switch(c=f<=.5?p/(o+s):p/(2-o-s),o){case n:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-n)/p+2;break;case a:l=(n-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Pe){Zt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,r=_e.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Ji);const n=Di(vn.h,Ji.h,e),r=Di(vn.s,Ji.s,e),a=Di(vn.l,Ji.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Xt;Xt.NAMES=rl;let od=0;class Bi extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=pi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Ea,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=As,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==As&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(e){const a=r(t.textures),o=r(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class al extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=ld();function ld(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,f=0;for(;!(c&8388608);)c<<=1,f-=8388608;c&=-8388609,f+=947912704,a[l]=c|f}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(s[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:a,exponentTable:o,offsetTable:s}}function cd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=fe(i,-65504,65504),an.floatView[0]=i;const t=an.uint32View[0],e=t>>23&511;return an.baseTable[e]+((t&8388607)>>an.shiftTable[e])}function dd(i){const t=i>>10;return an.uint32View[0]=an.mantissaTable[an.offsetTable[t]+(i&1023)]+an.exponentTable[t],an.floatView[0]}const Qi={toHalfFloat:cd,fromHalfFloat:dd},ie=new it,tr=new zt;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ws,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Qo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),a=Se(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ws&&(t.usage=this.usage),t}}class sl extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ol extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qe extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fd=0;const Ie=new oe,oa=new De,ai=new it,Ce=new Fi,Ci=new Fi,de=new it;class wn extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jo(t)?ol:sl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Gt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ie.makeRotationFromQuaternion(t),this.applyMatrix4(Ie),this}rotateX(t){return Ie.makeRotationX(t),this.applyMatrix4(Ie),this}rotateY(t){return Ie.makeRotationY(t),this.applyMatrix4(Ie),this}rotateZ(t){return Ie.makeRotationZ(t),this.applyMatrix4(Ie),this}translate(t,e,n){return Ie.makeTranslation(t,e,n),this.applyMatrix4(Ie),this}scale(t,e,n){return Ie.makeScale(t,e,n),this.applyMatrix4(Ie),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];Ce.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const s=e[a];Ci.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(Ce.min,Ci.min),Ce.expandByPoint(de),de.addVectors(Ce.max,Ci.max),Ce.expandByPoint(de)):(Ce.expandByPoint(Ci.min),Ce.expandByPoint(Ci.max))}Ce.getCenter(n);let r=0;for(let a=0,o=t.count;a<o;a++)de.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(de));if(e)for(let a=0,o=e.length;a<o;a++){const s=e[a],l=this.morphTargetsRelative;for(let c=0,f=s.count;c<f;c++)de.fromBufferAttribute(s,c),l&&(ai.fromBufferAttribute(t,c),de.add(ai)),r=Math.max(r,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let N=0;N<n.count;N++)s[N]=new it,l[N]=new it;const c=new it,f=new it,p=new it,m=new zt,u=new zt,g=new zt,_=new it,h=new it;function d(N,y,T){c.fromBufferAttribute(n,N),f.fromBufferAttribute(n,y),p.fromBufferAttribute(n,T),m.fromBufferAttribute(a,N),u.fromBufferAttribute(a,y),g.fromBufferAttribute(a,T),f.sub(c),p.sub(c),u.sub(m),g.sub(m);const B=1/(u.x*g.y-g.x*u.y);isFinite(B)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(p,-u.y).multiplyScalar(B),h.copy(p).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(B),s[N].add(_),s[y].add(_),s[T].add(_),l[N].add(h),l[y].add(h),l[T].add(h))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let N=0,y=x.length;N<y;++N){const T=x[N],B=T.start,w=T.count;for(let O=B,v=B+w;O<v;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new it,b=new it,P=new it,L=new it;function C(N){P.fromBufferAttribute(r,N),L.copy(P);const y=s[N];S.copy(y),S.sub(P.multiplyScalar(P.dot(y))).normalize(),b.crossVectors(L,y);const B=b.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,B)}for(let N=0,y=x.length;N<y;++N){const T=x[N],B=T.start,w=T.count;for(let O=B,v=B+w;O<v;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);const r=new it,a=new it,o=new it,s=new it,l=new it,c=new it,f=new it,p=new it;if(t)for(let m=0,u=t.count;m<u;m+=3){const g=t.getX(m+0),_=t.getX(m+1),h=t.getX(m+2);r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),o.fromBufferAttribute(e,h),f.subVectors(o,a),p.subVectors(r,a),f.cross(p),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,h),s.add(f),l.add(f),c.add(f),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let m=0,u=e.count;m<u;m+=3)r.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),f.subVectors(o,a),p.subVectors(r,a),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(s,l){const c=s.array,f=s.itemSize,p=s.normalized,m=new c.constructor(l.length*f);let u=0,g=0;for(let _=0,h=l.length;_<h;_++){s.isInterleavedBufferAttribute?u=l[_]*s.data.stride+s.offset:u=l[_]*f;for(let d=0;d<f;d++)m[g++]=c[u++]}return new Ye(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wn,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=t(l,n);e.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let f=0,p=c.length;f<p;f++){const m=c[f],u=t(m,n);l.push(u)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,m=c.length;p<m;p++){const u=c[p];f.push(u.toJSON(t.data))}f.length>0&&(r[l]=f,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const a=t.morphAttributes;for(const c in a){const f=[],p=a[c];for(let m=0,u=p.length;m<u;m++)f.push(p[m].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gs=new oe,Ln=new nl,er=new fs,Vs=new it,si=new it,oi=new it,li=new it,la=new it,nr=new it,ir=new zt,rr=new zt,ar=new zt,Ws=new it,Xs=new it,Ys=new it,sr=new it,or=new it;class Ge extends De{constructor(t=new wn,e=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const s=this.morphTargetInfluences;if(a&&s){nr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const f=s[l],p=a[l];f!==0&&(la.fromBufferAttribute(p,t),o?nr.addScaledVector(la,f):nr.addScaledVector(la.sub(e),f))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(a),Ln.copy(t.ray).recast(t.near),!(er.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(er,Vs)===null||Ln.origin.distanceToSquared(Vs)>(t.far-t.near)**2))&&(Gs.copy(a).invert(),Ln.copy(t.ray).applyMatrix4(Gs),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,m=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const h=m[g],d=o[h.materialIndex],x=Math.max(h.start,u.start),S=Math.min(s.count,Math.min(h.start+h.count,u.start+u.count));for(let b=x,P=S;b<P;b+=3){const L=s.getX(b),C=s.getX(b+1),N=s.getX(b+2);r=lr(this,d,t,n,c,f,p,L,C,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(s.count,u.start+u.count);for(let h=g,d=_;h<d;h+=3){const x=s.getX(h),S=s.getX(h+1),b=s.getX(h+2);r=lr(this,o,t,n,c,f,p,x,S,b),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const h=m[g],d=o[h.materialIndex],x=Math.max(h.start,u.start),S=Math.min(l.count,Math.min(h.start+h.count,u.start+u.count));for(let b=x,P=S;b<P;b+=3){const L=b,C=b+1,N=b+2;r=lr(this,d,t,n,c,f,p,L,C,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let h=g,d=_;h<d;h+=3){const x=h,S=h+1,b=h+2;r=lr(this,o,t,n,c,f,p,x,S,b),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}}}function hd(i,t,e,n,r,a,o,s){let l;if(t.side===Te?l=n.intersectTriangle(o,a,r,!0,s):l=n.intersectTriangle(r,a,o,t.side===bn,s),l===null)return null;or.copy(s),or.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(or);return c<e.near||c>e.far?null:{distance:c,point:or.clone(),object:i}}function lr(i,t,e,n,r,a,o,s,l,c){i.getVertexPosition(s,si),i.getVertexPosition(l,oi),i.getVertexPosition(c,li);const f=hd(i,t,e,n,si,oi,li,sr);if(f){r&&(ir.fromBufferAttribute(r,s),rr.fromBufferAttribute(r,l),ar.fromBufferAttribute(r,c),f.uv=Xe.getInterpolation(sr,si,oi,li,ir,rr,ar,new zt)),a&&(ir.fromBufferAttribute(a,s),rr.fromBufferAttribute(a,l),ar.fromBufferAttribute(a,c),f.uv1=Xe.getInterpolation(sr,si,oi,li,ir,rr,ar,new zt)),o&&(Ws.fromBufferAttribute(o,s),Xs.fromBufferAttribute(o,l),Ys.fromBufferAttribute(o,c),f.normal=Xe.getInterpolation(sr,si,oi,li,Ws,Xs,Ys,new it),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:s,b:l,c,normal:new it,materialIndex:0};Xe.getNormal(si,oi,li,p.normal),f.face=p}return f}class zi extends wn{constructor(t=1,e=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],f=[],p=[];let m=0,u=0;g("z","y","x",-1,-1,n,e,t,o,a,0),g("z","y","x",1,-1,n,e,-t,o,a,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,a,4),g("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(p,2));function g(_,h,d,x,S,b,P,L,C,N,y){const T=b/C,B=P/N,w=b/2,O=P/2,v=L/2,z=C+1,V=N+1;let k=0,$=0;const tt=new it;for(let ct=0;ct<V;ct++){const W=ct*B-O;for(let X=0;X<z;X++){const pt=X*T-w;tt[_]=pt*x,tt[h]=W*S,tt[d]=v,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[h]=0,tt[d]=L>0?1:-1,f.push(tt.x,tt.y,tt.z),p.push(X/C),p.push(1-ct/N),k+=1}}for(let ct=0;ct<N;ct++)for(let W=0;W<C;W++){const X=m+W+z*ct,pt=m+W+z*(ct+1),q=m+(W+1)+z*(ct+1),Q=m+(W+1)+z*ct;l.push(X,pt,Q),l.push(pt,q,Q),$+=6}s.addGroup(u,$,y),u+=$,m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=Mi(i[e]);for(const r in n)t[r]=n[r]}return t}function ud(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const cl={clone:Mi,merge:Me};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dl extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new it,qs=new zt,js=new zt;class Le extends dl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,qs,js),e.subVectors(js,qs)}setViewOffset(t,e,n,r,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Li*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(a+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,di=1;class _d extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(ci,di,t,e);r.layers=this.layers,this.add(r);const a=new Le(ci,di,t,e);a.layers=this.layers,this.add(a);const o=new Le(ci,di,t,e);o.layers=this.layers,this.add(o);const s=new Le(ci,di,t,e);s.layers=this.layers,this.add(s);const l=new Le(ci,di,t,e);l.layers=this.layers,this.add(l);const c=new Le(ci,di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,a,o,s,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,f]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,a),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,s),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(p,m,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fl extends xe{constructor(t,e,n,r,a,o,s,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,r,a,o,s,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gd extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new fl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zi(5,5,5),a=new dn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:yn});a.uniforms.tEquirect.value=e;const o=new Ge(r,a),s=e.minFilter;return e.minFilter===En&&(e.minFilter=ge),new _d(1,10,this).update(t,o),e.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(a)}}const ca=new it,vd=new it,xd=new Gt;class Sn{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ca.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xd.getNormalMatrix(t),r=this.coplanarPoint(ca).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new fs,cr=new it;class hl{constructor(t=new Sn,e=new Sn,n=new Sn,r=new Sn,a=new Sn,o=new Sn){this.planes=[t,e,n,r,a,o]}set(t,e,n,r,a,o){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,r=t.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],f=r[5],p=r[6],m=r[7],u=r[8],g=r[9],_=r[10],h=r[11],d=r[12],x=r[13],S=r[14],b=r[15];if(n[0].setComponents(l-a,m-c,h-u,b-d).normalize(),n[1].setComponents(l+a,m+c,h+u,b+d).normalize(),n[2].setComponents(l+o,m+f,h+g,b+x).normalize(),n[3].setComponents(l-o,m-f,h-g,b-x).normalize(),n[4].setComponents(l-s,m-p,h-_,b-S).normalize(),e===ln)n[5].setComponents(l+s,m+p,h+_,b+S).normalize();else if(e===Pr)n[5].setComponents(s,p,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(cr.x=r.normal.x>0?t.max.x:t.min.x,cr.y=r.normal.y>0?t.max.y:t.min.y,cr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ul(){let i=null,t=!1,e=null,n=null;function r(a,o){e(a,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Sd(i){const t=new WeakMap;function e(s,l){const c=s.array,f=s.usage,p=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,f),s.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:p}}function n(s,l,c){const f=l.array,p=l._updateRange,m=l.updateRanges;if(i.bindBuffer(c,s),p.count===-1&&m.length===0&&i.bufferSubData(c,0,f),m.length!==0){for(let u=0,g=m.length;u<g;u++){const _=m[u];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}p.count!==-1&&(i.bufferSubData(c,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=t.get(s);l&&(i.deleteBuffer(l.buffer),t.delete(s))}function o(s,l){if(s.isGLBufferAttribute){const f=t.get(s);(!f||f.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=t.get(s);if(c===void 0)t.set(s,e(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}class Br extends wn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const a=t/2,o=e/2,s=Math.floor(n),l=Math.floor(r),c=s+1,f=l+1,p=t/s,m=e/l,u=[],g=[],_=[],h=[];for(let d=0;d<f;d++){const x=d*m-o;for(let S=0;S<c;S++){const b=S*p-a;g.push(b,-x,0),_.push(0,0,1),h.push(S/s),h.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<s;x++){const S=x+c*d,b=x+c*(d+1),P=x+1+c*(d+1),L=x+1+c*d;u.push(S,b,L),u.push(b,P,L)}this.setIndex(u),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,th=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ah=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_h=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ah=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ch=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ph=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Md,alphahash_pars_fragment:Ed,alphamap_fragment:yd,alphamap_pars_fragment:Td,alphatest_fragment:bd,alphatest_pars_fragment:Ad,aomap_fragment:wd,aomap_pars_fragment:Cd,batching_pars_vertex:Rd,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Ud,iridescence_fragment:Id,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:zd,color_fragment:kd,color_pars_fragment:Hd,color_pars_vertex:Gd,color_vertex:Vd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:qd,displacementmap_vertex:jd,emissivemap_fragment:Zd,emissivemap_pars_fragment:Kd,colorspace_fragment:$d,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:tf,envmap_pars_fragment:ef,envmap_pars_vertex:nf,envmap_physical_pars_fragment:pf,envmap_vertex:rf,fog_vertex:af,fog_pars_vertex:sf,fog_fragment:of,fog_pars_fragment:lf,gradientmap_pars_fragment:cf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:mf,lights_toon_pars_fragment:_f,lights_phong_fragment:gf,lights_phong_pars_fragment:vf,lights_physical_fragment:xf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Mf,lights_fragment_maps:Ef,lights_fragment_end:yf,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:wf,map_fragment:Cf,map_pars_fragment:Rf,map_particle_fragment:Pf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:Uf,morphinstance_vertex:If,morphcolor_vertex:Nf,morphnormal_vertex:Of,morphtarget_pars_vertex:Ff,morphtarget_vertex:Bf,normal_fragment_begin:zf,normal_fragment_maps:kf,normal_pars_fragment:Hf,normal_pars_vertex:Gf,normal_vertex:Vf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Xf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:jf,opaque_fragment:Zf,packing:Kf,premultiplied_alpha_fragment:$f,project_vertex:Jf,dithering_fragment:Qf,dithering_pars_fragment:th,roughnessmap_fragment:eh,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:ah,shadowmask_pars_fragment:sh,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:dh,specularmap_fragment:fh,specularmap_pars_fragment:hh,tonemapping_fragment:uh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:_h,uv_pars_fragment:gh,uv_pars_vertex:vh,uv_vertex:xh,worldpos_vertex:Sh,background_vert:Mh,background_frag:Eh,backgroundCube_vert:yh,backgroundCube_frag:Th,cube_vert:bh,cube_frag:Ah,depth_vert:wh,depth_frag:Ch,distanceRGBA_vert:Rh,distanceRGBA_frag:Ph,equirect_vert:Lh,equirect_frag:Dh,linedashed_vert:Uh,linedashed_frag:Ih,meshbasic_vert:Nh,meshbasic_frag:Oh,meshlambert_vert:Fh,meshlambert_frag:Bh,meshmatcap_vert:zh,meshmatcap_frag:kh,meshnormal_vert:Hh,meshnormal_frag:Gh,meshphong_vert:Vh,meshphong_frag:Wh,meshphysical_vert:Xh,meshphysical_frag:Yh,meshtoon_vert:qh,meshtoon_frag:jh,points_vert:Zh,points_frag:Kh,shadow_vert:$h,shadow_frag:Jh,sprite_vert:Qh,sprite_frag:tu},_t={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Ve={basic:{uniforms:Me([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Me([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Me([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Me([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Me([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Me([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Me([_t.points,_t.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Me([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Me([_t.common,_t.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Me([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Me([_t.sprite,_t.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Me([_t.common,_t.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Me([_t.lights,_t.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ve.physical={uniforms:Me([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const dr={r:0,b:0,g:0},Un=new je,eu=new oe;function nu(i,t,e,n,r,a,o){const s=new Xt(0);let l=a===!0?0:1,c,f,p=null,m=0,u=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?e:t).get(S)),S}function _(x){let S=!1;const b=g(x);b===null?d(s,l):b&&b.isColor&&(d(b,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(x,S){const b=g(S);b&&(b.isCubeTexture||b.mapping===Or)?(f===void 0&&(f=new Ge(new zi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Mi(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Un.copy(S.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(eu.makeRotationFromEuler(Un)),f.material.toneMapped=Zt.getTransfer(b.colorSpace)!==$t,(p!==b||m!==b.version||u!==i.toneMapping)&&(f.material.needsUpdate=!0,p=b,m=b.version,u=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ge(new Br(2,2),new dn({name:"BackgroundMaterial",uniforms:Mi(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==$t,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||m!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,p=b,m=b.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,S){x.getRGB(dr,ll(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,S,o)}return{getClearColor:function(){return s},setClearColor:function(x,S=1){s.set(x),l=S,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(s,l)},render:_,addToRenderList:h}}function iu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let a=r,o=!1;function s(T,B,w,O,v){let z=!1;const V=p(O,w,B);a!==V&&(a=V,c(a.object)),z=u(T,O,w,v),z&&g(T,O,w,v),v!==null&&t.update(v,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(T,B,w,O),v!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(v).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function f(T){return i.deleteVertexArray(T)}function p(T,B,w){const O=w.wireframe===!0;let v=n[T.id];v===void 0&&(v={},n[T.id]=v);let z=v[B.id];z===void 0&&(z={},v[B.id]=z);let V=z[O];return V===void 0&&(V=m(l()),z[O]=V),V}function m(T){const B=[],w=[],O=[];for(let v=0;v<e;v++)B[v]=0,w[v]=0,O[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:w,attributeDivisors:O,object:T,attributes:{},index:null}}function u(T,B,w,O){const v=a.attributes,z=B.attributes;let V=0;const k=w.getAttributes();for(const $ in k)if(k[$].location>=0){const ct=v[$];let W=z[$];if(W===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(W=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(W=T.instanceColor)),ct===void 0||ct.attribute!==W||W&&ct.data!==W.data)return!0;V++}return a.attributesNum!==V||a.index!==O}function g(T,B,w,O){const v={},z=B.attributes;let V=0;const k=w.getAttributes();for(const $ in k)if(k[$].location>=0){let ct=z[$];ct===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(ct=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(ct=T.instanceColor));const W={};W.attribute=ct,ct&&ct.data&&(W.data=ct.data),v[$]=W,V++}a.attributes=v,a.attributesNum=V,a.index=O}function _(){const T=a.newAttributes;for(let B=0,w=T.length;B<w;B++)T[B]=0}function h(T){d(T,0)}function d(T,B){const w=a.newAttributes,O=a.enabledAttributes,v=a.attributeDivisors;w[T]=1,O[T]===0&&(i.enableVertexAttribArray(T),O[T]=1),v[T]!==B&&(i.vertexAttribDivisor(T,B),v[T]=B)}function x(){const T=a.newAttributes,B=a.enabledAttributes;for(let w=0,O=B.length;w<O;w++)B[w]!==T[w]&&(i.disableVertexAttribArray(w),B[w]=0)}function S(T,B,w,O,v,z,V){V===!0?i.vertexAttribIPointer(T,B,w,v,z):i.vertexAttribPointer(T,B,w,O,v,z)}function b(T,B,w,O){_();const v=O.attributes,z=w.getAttributes(),V=B.defaultAttributeValues;for(const k in z){const $=z[k];if($.location>=0){let tt=v[k];if(tt===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor)),tt!==void 0){const ct=tt.normalized,W=tt.itemSize,X=t.get(tt);if(X===void 0)continue;const pt=X.buffer,q=X.type,Q=X.bytesPerElement,gt=q===i.INT||q===i.UNSIGNED_INT||tt.gpuType===is;if(tt.isInterleavedBufferAttribute){const vt=tt.data,Mt=vt.stride,Et=tt.offset;if(vt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<$.locationSize;Rt++)d($.location+Rt,vt.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Rt=0;Rt<$.locationSize;Rt++)h($.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Rt=0;Rt<$.locationSize;Rt++)S($.location+Rt,W/$.locationSize,q,ct,Mt*Q,(Et+W/$.locationSize*Rt)*Q,gt)}else{if(tt.isInstancedBufferAttribute){for(let vt=0;vt<$.locationSize;vt++)d($.location+vt,tt.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let vt=0;vt<$.locationSize;vt++)h($.location+vt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let vt=0;vt<$.locationSize;vt++)S($.location+vt,W/$.locationSize,q,ct,W*Q,W/$.locationSize*vt*Q,gt)}}else if(V!==void 0){const ct=V[k];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv($.location,ct);break;case 3:i.vertexAttrib3fv($.location,ct);break;case 4:i.vertexAttrib4fv($.location,ct);break;default:i.vertexAttrib1fv($.location,ct)}}}}x()}function P(){N();for(const T in n){const B=n[T];for(const w in B){const O=B[w];for(const v in O)f(O[v].object),delete O[v];delete B[w]}delete n[T]}}function L(T){if(n[T.id]===void 0)return;const B=n[T.id];for(const w in B){const O=B[w];for(const v in O)f(O[v].object),delete O[v];delete B[w]}delete n[T.id]}function C(T){for(const B in n){const w=n[B];if(w[T.id]===void 0)continue;const O=w[T.id];for(const v in O)f(O[v].object),delete O[v];delete w[T.id]}}function N(){y(),o=!0,a!==r&&(a=r,c(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:N,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:h,disableUnusedAttributes:x}}function ru(i,t,e){let n;function r(c){n=c}function a(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function o(c,f,p){p!==0&&(i.drawArraysInstanced(n,c,f,p),e.update(f,n,p))}function s(c,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,p);let u=0;for(let g=0;g<p;g++)u+=f[g];e.update(u,n,1)}function l(c,f,p,m){if(p===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],f[g],m[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,f,0,m,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];for(let _=0;_<m.length;_++)e.update(g,n,m[_])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function au(i,t,e,n){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==He&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(L){const C=L===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==cn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Oe&&!C)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=e.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=u>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:b,maxSamples:P}}function su(i){const t=this;let e=null,n=0,r=!1,a=!1;const o=new Sn,s=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const u=p.length!==0||m||n!==0||r;return r=m,n=p.length,u},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,m){e=f(p,m,0)},this.setState=function(p,m,u){const g=p.clippingPlanes,_=p.clipIntersection,h=p.clipShadows,d=i.get(p);if(!r||g===null||g.length===0||a&&!h)a?f(null):c();else{const x=a?0:n,S=x*4;let b=d.clippingState||null;l.value=b,b=f(g,m,S,u);for(let P=0;P!==S;++P)b[P]=e[P];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,m,u,g){const _=p!==null?p.length:0;let h=null;if(_!==0){if(h=l.value,g!==!0||h===null){const d=u+_*4,x=m.matrixWorldInverse;s.getNormalMatrix(x),(h===null||h.length<d)&&(h=new Float32Array(d));for(let S=0,b=u;S!==_;++S,b+=4)o.copy(p[S]).applyMatrix4(x,s),o.normal.toArray(h,b),h[b+3]=o.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,h}}function ou(i){let t=new WeakMap;function e(o,s){return s===ya?o.mapping=gi:s===Ta&&(o.mapping=vi),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===ya||s===Ta)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class lu extends dl{constructor(t=-1,e=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-t,o=n+t,s=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=f*this.view.offsetY,l=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ui=4,Zs=[.125,.215,.35,.446,.526,.582],Fn=20,da=new lu,Ks=new Xt;let fa=null,ha=0,ua=0,pa=!1;const Nn=(1+Math.sqrt(5))/2,fi=1/Nn,$s=[new it(-Nn,fi,0),new it(Nn,fi,0),new it(-fi,0,Nn),new it(fi,0,Nn),new it(0,Nn,-fi),new it(0,Nn,fi),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)];class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){fa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=to(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,ha,ua),this._renderer.xr.enabled=pa,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:on,format:He,colorSpace:fn,depthBuffer:!1},r=Js(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Js(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cu(a)),this._blurMaterial=du(a,t,e)}return r}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,r){const s=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Ks),f.toneMapping=Tn,f.autoClear=!1;const u=new al({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Ge(new zi,u);let _=!1;const h=t.background;h?h.isColor&&(u.color.copy(h),t.background=null,_=!0):(u.color.copy(Ks),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(s.up.set(0,l[d],0),s.lookAt(c[d],0,0)):x===1?(s.up.set(0,0,l[d]),s.lookAt(0,c[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,c[d]));const S=this._cubeSize;fr(r,x*S,d>2?S:0,S,S),f.setRenderTarget(r),_&&f.render(g,s),f.render(t,s)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=p,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===gi||t.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=to()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qs());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=t;const l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=$s[(r-a-1)%$s.length];this._blur(t,a-1,a,o,s)}e.autoClear=n}_blur(t,e,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",a),this._halfBlur(o,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Ge(this._lodPlanes[r],c),m=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*Fn-1),_=a/g,h=isFinite(a)?1+Math.floor(f*_):Fn;h>Fn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Fn}`);const d=[];let x=0;for(let C=0;C<Fn;++C){const N=C/_,y=Math.exp(-N*N/2);d.push(y),C===0?x+=y:C<h&&(x+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/x;m.envMap.value=t.texture,m.samples.value=h,m.weights.value=d,m.latitudinal.value=o==="latitudinal",s&&(m.poleAxis.value=s);const{_lodMax:S}=this;m.dTheta.value=g,m.mipInt.value=S-n;const b=this._sizeLods[r],P=3*b*(r>S-ui?r-S+ui:0),L=4*(this._cubeSize-b);fr(e,P,L,3*b,2*b),l.setRenderTarget(e),l.render(p,da)}}function cu(i){const t=[],e=[],n=[];let r=i;const a=i-ui+1+Zs.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);e.push(s);let l=1/s;o>i-ui?l=Zs[o-i+ui-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),f=-c,p=1+c,m=[f,f,p,f,p,p,f,f,p,p,f,p],u=6,g=6,_=3,h=2,d=1,x=new Float32Array(_*g*u),S=new Float32Array(h*g*u),b=new Float32Array(d*g*u);for(let L=0;L<u;L++){const C=L%3*2/3-1,N=L>2?0:-1,y=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];x.set(y,_*g*L),S.set(m,h*g*L);const T=[L,L,L,L,L,L];b.set(T,d*g*L)}const P=new wn;P.setAttribute("position",new Ye(x,_)),P.setAttribute("uv",new Ye(S,h)),P.setAttribute("faceIndex",new Ye(b,d)),t.push(P),r>ui&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Js(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function du(i,t,e){const n=new Float32Array(Fn),r=new it(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Qs(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function to(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function hs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fu(i){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ya||l===Ta,f=l===gi||l===vi;if(c||f){let p=t.get(s);const m=p!==void 0?p.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==m)return e===null&&(e=new Ja(i)),p=c?e.fromEquirectangular(s,p):e.fromCubemap(s,p),p.texture.pmremVersion=s.pmremVersion,t.set(s,p),p.texture;if(p!==void 0)return p.texture;{const u=s.image;return c&&u&&u.height>0||f&&u&&r(u)?(e===null&&(e=new Ja(i)),p=c?e.fromEquirectangular(s):e.fromCubemap(s),p.texture.pmremVersion=s.pmremVersion,t.set(s,p),s.addEventListener("dispose",a),p.texture):null}}}return s}function r(s){let l=0;const c=6;for(let f=0;f<c;f++)s[f]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Qo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function uu(i,t,e,n){const r={},a=new WeakMap;function o(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const _=m.morphAttributes[g];for(let h=0,d=_.length;h<d;h++)t.remove(_[h])}m.removeEventListener("dispose",o),delete r[m.id];const u=a.get(m);u&&(t.remove(u),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function s(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)t.update(m[g],i.ARRAY_BUFFER);const u=p.morphAttributes;for(const g in u){const _=u[g];for(let h=0,d=_.length;h<d;h++)t.update(_[h],i.ARRAY_BUFFER)}}function c(p){const m=[],u=p.index,g=p.attributes.position;let _=0;if(u!==null){const x=u.array;_=u.version;for(let S=0,b=x.length;S<b;S+=3){const P=x[S+0],L=x[S+1],C=x[S+2];m.push(P,L,L,C,C,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let S=0,b=x.length/3-1;S<b;S+=3){const P=S+0,L=S+1,C=S+2;m.push(P,L,L,C,C,P)}}else return;const h=new(Jo(m)?ol:sl)(m,1);h.version=_;const d=a.get(p);d&&t.remove(d),a.set(p,h)}function f(p){const m=a.get(p);if(m){const u=p.index;u!==null&&m.version<u.version&&c(p)}else c(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:f}}function pu(i,t,e){let n;function r(m){n=m}let a,o;function s(m){a=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,a,m*o),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,a,m*o,g),e.update(u,n,g))}function f(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,m,0,g);let h=0;for(let d=0;d<g;d++)h+=u[d];e.update(h,n,1)}function p(m,u,g,_){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<m.length;d++)c(m[d]/o,u[d],_[d]);else{h.multiDrawElementsInstancedWEBGL(n,u,0,a,m,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=u[x];for(let x=0;x<_.length;x++)e.update(d,n,_[x])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function mu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=s*(a/3);break;case i.LINES:e.lines+=s*(a/2);break;case i.LINE_STRIP:e.lines+=s*(a-1);break;case i.LINE_LOOP:e.lines+=s*a;break;case i.POINTS:e.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _u(i,t,e){const n=new WeakMap,r=new he;function a(o,s,l){const c=o.morphTargetInfluences,f=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(s);if(m===void 0||m.count!==p){let T=function(){N.dispose(),n.delete(s),s.removeEventListener("dispose",T)};var u=T;m!==void 0&&m.texture.dispose();const g=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,h=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],x=s.morphAttributes.normal||[],S=s.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),h===!0&&(b=3);let P=s.attributes.position.count*b,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*L*4*p),N=new el(C,P,L,p);N.type=Oe,N.needsUpdate=!0;const y=b*4;for(let B=0;B<p;B++){const w=d[B],O=x[B],v=S[B],z=P*L*4*B;for(let V=0;V<w.count;V++){const k=V*y;g===!0&&(r.fromBufferAttribute(w,V),C[z+k+0]=r.x,C[z+k+1]=r.y,C[z+k+2]=r.z,C[z+k+3]=0),_===!0&&(r.fromBufferAttribute(O,V),C[z+k+4]=r.x,C[z+k+5]=r.y,C[z+k+6]=r.z,C[z+k+7]=0),h===!0&&(r.fromBufferAttribute(v,V),C[z+k+8]=r.x,C[z+k+9]=r.y,C[z+k+10]=r.z,C[z+k+11]=v.itemSize===4?r.w:1)}}m={count:p,texture:N,size:new zt(P,L)},n.set(s,m),s.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let h=0;h<c.length;h++)g+=c[h];const _=s.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:a}}function gu(i,t,e,n){let r=new WeakMap;function a(l){const c=n.render.frame,f=l.geometry,p=t.get(l,f);if(r.get(p)!==c&&(t.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}class pl extends xe{constructor(t,e,n,r,a,o,s,l,c,f=mi){if(f!==mi&&f!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===mi&&(n=kn),n===void 0&&f===Si&&(n=xi),super(null,r,a,o,s,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:ye,this.minFilter=l!==void 0?l:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ml=new xe,eo=new pl(1,1),_l=new el,gl=new Qc,vl=new fl,no=[],io=[],ro=new Float32Array(16),ao=new Float32Array(9),so=new Float32Array(4);function yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let a=no[r];if(a===void 0&&(a=new Float32Array(r),no[r]=a),t!==0){n.toArray(a,0);for(let o=1,s=0;o!==t;++o)s+=e,i[o].toArray(a,s)}return a}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=io[t];e===void 0&&(e=new Int32Array(t),io[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Su(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Mu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function Eu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;so.set(n),i.uniformMatrix2fv(this.addr,!1,so),ce(e,n)}}function yu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;ao.set(n),i.uniformMatrix3fv(this.addr,!1,ao),ce(e,n)}}function Tu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;ro.set(n),i.uniformMatrix4fv(this.addr,!1,ro),ce(e,n)}}function bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Au(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function wu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Cu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function Ru(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Lu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function Du(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function Uu(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(eo.compareFunction=$o,a=eo):a=ml,e.setTexture2D(t||a,r)}function Iu(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||gl,r)}function Nu(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||vl,r)}function Ou(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||_l,r)}function Fu(i){switch(i){case 5126:return vu;case 35664:return xu;case 35665:return Su;case 35666:return Mu;case 35674:return Eu;case 35675:return yu;case 35676:return Tu;case 5124:case 35670:return bu;case 35667:case 35671:return Au;case 35668:case 35672:return wu;case 35669:case 35673:return Cu;case 5125:return Ru;case 36294:return Pu;case 36295:return Lu;case 36296:return Du;case 35678:case 36198:case 36298:case 36306:case 35682:return Uu;case 35679:case 36299:case 36307:return Iu;case 35680:case 36300:case 36308:case 36293:return Nu;case 36289:case 36303:case 36311:case 36292:return Ou}}function Bu(i,t){i.uniform1fv(this.addr,t)}function zu(i,t){const e=yi(t,this.size,2);i.uniform2fv(this.addr,e)}function ku(i,t){const e=yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hu(i,t){const e=yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Gu(i,t){const e=yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vu(i,t){const e=yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wu(i,t){const e=yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xu(i,t){i.uniform1iv(this.addr,t)}function Yu(i,t){i.uniform2iv(this.addr,t)}function qu(i,t){i.uniform3iv(this.addr,t)}function ju(i,t){i.uniform4iv(this.addr,t)}function Zu(i,t){i.uniform1uiv(this.addr,t)}function Ku(i,t){i.uniform2uiv(this.addr,t)}function $u(i,t){i.uniform3uiv(this.addr,t)}function Ju(i,t){i.uniform4uiv(this.addr,t)}function Qu(i,t,e){const n=this.cache,r=t.length,a=zr(e,r);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ml,a[o])}function tp(i,t,e){const n=this.cache,r=t.length,a=zr(e,r);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||gl,a[o])}function ep(i,t,e){const n=this.cache,r=t.length,a=zr(e,r);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||vl,a[o])}function np(i,t,e){const n=this.cache,r=t.length,a=zr(e,r);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||_l,a[o])}function ip(i){switch(i){case 5126:return Bu;case 35664:return zu;case 35665:return ku;case 35666:return Hu;case 35674:return Gu;case 35675:return Vu;case 35676:return Wu;case 5124:case 35670:return Xu;case 35667:case 35671:return Yu;case 35668:case 35672:return qu;case 35669:case 35673:return ju;case 5125:return Zu;case 36294:return Ku;case 36295:return $u;case 36296:return Ju;case 35678:case 36198:case 36298:case 36306:case 35682:return Qu;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}class rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fu(e.type)}}class ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ip(e.type)}}class sp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(t,e[s.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function oo(i,t){i.seq.push(t),i.map[t.id]=t}function op(i,t,e){const n=i.name,r=n.length;for(ma.lastIndex=0;;){const a=ma.exec(n),o=ma.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){oo(e,c===void 0?new rp(s,i,t):new ap(s,i,t));break}else{let p=e.map[s];p===void 0&&(p=new sp(s),oo(e,p)),e=p}}}class Mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);op(a,o,this)}}setValue(t,e,n,r){const a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,o=e.length;a!==o;++a){const s=e[a],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,a=t.length;r!==a;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function lo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lp=37297;let cp=0;function dp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===t?">":" "} ${s}: ${e[o]}`)}return n.join(`
`)}function fp(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===Rr&&e===Cr?n="LinearDisplayP3ToLinearSRGB":t===Cr&&e===Rr&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case Fr:return[n,"LinearTransferOETF"];case Pe:case cs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function co(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dp(i.getShaderSource(t),o)}else return r}function hp(i,t){const e=fp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function up(i,t){let e;switch(t){case Fo:e="Linear";break;case uc:e="Reinhard";break;case pc:e="OptimizedCineon";break;case mc:e="ACESFilmic";break;case Bo:e="AgX";break;case gc:e="Neutral";break;case _c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function pp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function mp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _p(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(t,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:s}}return e}function Ri(i){return i!==""}function fo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ho(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(gp,xp)}const vp=new Map;function xp(i,t){let e=Ht[t];if(e===void 0){const n=vp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uo(i){return i.replace(Sp,Mp)}function Mp(i,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function po(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ep(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===No?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function yp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case vi:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function bp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case fc:t="ENVMAP_BLENDING_MIX";break;case hc:t="ENVMAP_BLENDING_ADD";break}return t}function Ap(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wp(i,t,e,n){const r=i.getContext(),a=e.defines;let o=e.vertexShader,s=e.fragmentShader;const l=Ep(e),c=yp(e),f=Tp(e),p=bp(e),m=Ap(e),u=pp(e),g=mp(a),_=r.createProgram();let h,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),h.length>0&&(h+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),d.length>0&&(d+=`
`)):(h=[po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),d=[po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Tn?up("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,hp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),o=Qa(o),o=fo(o,e),o=ho(o,e),s=Qa(s),s=fo(s,e),s=ho(s,e),o=uo(o),s=uo(s),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,d=["#define varying in",e.glslVersion===Cs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=x+h+o,b=x+d+s,P=lo(r,r.VERTEX_SHADER,S),L=lo(r,r.FRAGMENT_SHADER,b);r.attachShader(_,P),r.attachShader(_,L),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(B){if(i.debug.checkShaderErrors){const w=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(P).trim(),v=r.getShaderInfoLog(L).trim();let z=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,L);else{const k=co(r,P,"vertex"),$=co(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+w+`
`+k+`
`+$)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(O===""||v==="")&&(V=!1);V&&(B.diagnostics={runnable:z,programLog:w,vertexShader:{log:O,prefix:h},fragmentShader:{log:v,prefix:d}})}r.deleteShader(P),r.deleteShader(L),N=new Mr(r,_),y=_p(r,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,lp)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=L,this}let Cp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pp(t),e.set(t,n)),n}}class Pp{constructor(t){this.id=Cp++,this.code=t,this.usedTimes=0}}function Lp(i,t,e,n,r,a,o){const s=new il,l=new Rp,c=new Set,f=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let u=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,T,B,w,O){const v=w.fog,z=O.geometry,V=y.isMeshStandardMaterial?w.environment:null,k=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),$=k&&k.mapping===Or?k.image.height:null,tt=g[y.type];y.precision!==null&&(u=r.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,W=ct!==void 0?ct.length:0;let X=0;z.morphAttributes.position!==void 0&&(X=1),z.morphAttributes.normal!==void 0&&(X=2),z.morphAttributes.color!==void 0&&(X=3);let pt,q,Q,gt;if(tt){const Wt=Ve[tt];pt=Wt.vertexShader,q=Wt.fragmentShader}else pt=y.vertexShader,q=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);const vt=i.getRenderTarget(),Mt=O.isInstancedMesh===!0,Et=O.isBatchedMesh===!0,Rt=!!y.map,Nt=!!y.matcap,H=!!k,Vt=!!y.aoMap,M=!!y.lightMap,at=!!y.bumpMap,Y=!!y.normalMap,F=!!y.displacementMap,D=!!y.emissiveMap,G=!!y.metalnessMap,R=!!y.roughnessMap,E=y.anisotropy>0,I=y.clearcoat>0,Z=y.dispersion>0,et=y.iridescence>0,j=y.sheen>0,dt=y.transmission>0,ht=E&&!!y.anisotropyMap,ft=I&&!!y.clearcoatMap,Pt=I&&!!y.clearcoatNormalMap,mt=I&&!!y.clearcoatRoughnessMap,St=et&&!!y.iridescenceMap,kt=et&&!!y.iridescenceThicknessMap,Tt=j&&!!y.sheenColorMap,yt=j&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,Lt=!!y.specularColorMap,Kt=!!y.specularIntensityMap,A=dt&&!!y.transmissionMap,nt=dt&&!!y.thicknessMap,rt=!!y.gradientMap,lt=!!y.alphaMap,ut=y.alphaTest>0,At=!!y.alphaHash,Ft=!!y.extensions;let te=Tn;y.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(te=i.toneMapping);const ae={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:q,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Et,batchingColor:Et&&O._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&O.instanceColor!==null,instancingMorph:Mt&&O.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:fn,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:Nt,envMap:H,envMapMode:H&&k.mapping,envMapCubeUVHeight:$,aoMap:Vt,lightMap:M,bumpMap:at,normalMap:Y,displacementMap:m&&F,emissiveMap:D,normalMapObjectSpace:Y&&y.normalMapType===Mc,normalMapTangentSpace:Y&&y.normalMapType===Ko,metalnessMap:G,roughnessMap:R,anisotropy:E,anisotropyMap:ht,clearcoat:I,clearcoatMap:ft,clearcoatNormalMap:Pt,clearcoatRoughnessMap:mt,dispersion:Z,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:kt,sheen:j,sheenColorMap:Tt,sheenRoughnessMap:yt,specularMap:Ut,specularColorMap:Lt,specularIntensityMap:Kt,transmission:dt,transmissionMap:A,thicknessMap:nt,gradientMap:rt,opaque:y.transparent===!1&&y.blending===pi&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:At,combine:y.combine,mapUv:Rt&&_(y.map.channel),aoMapUv:Vt&&_(y.aoMap.channel),lightMapUv:M&&_(y.lightMap.channel),bumpMapUv:at&&_(y.bumpMap.channel),normalMapUv:Y&&_(y.normalMap.channel),displacementMapUv:F&&_(y.displacementMap.channel),emissiveMapUv:D&&_(y.emissiveMap.channel),metalnessMapUv:G&&_(y.metalnessMap.channel),roughnessMapUv:R&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:ft&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(y.sheenRoughnessMap.channel),specularMapUv:Ut&&_(y.specularMap.channel),specularColorMapUv:Lt&&_(y.specularColorMap.channel),specularIntensityMapUv:Kt&&_(y.specularIntensityMap.channel),transmissionMapUv:A&&_(y.transmissionMap.channel),thicknessMapUv:nt&&_(y.thicknessMap.channel),alphaMapUv:lt&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Y||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Rt||lt),fog:!!v,useFog:y.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:X,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===Te,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&y.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function d(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)T.push(B),T.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){s.disableAll(),T.supportsVertexTextures&&s.enable(0),T.instancing&&s.enable(1),T.instancingColor&&s.enable(2),T.instancingMorph&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),T.alphaHash&&s.enable(18),T.batching&&s.enable(19),T.dispersion&&s.enable(20),T.batchingColor&&s.enable(21),y.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.doubleSided&&s.enable(10),T.flipSided&&s.enable(11),T.useDepthPacking&&s.enable(12),T.dithering&&s.enable(13),T.transmission&&s.enable(14),T.sheen&&s.enable(15),T.opaque&&s.enable(16),T.pointsUvs&&s.enable(17),T.decodeVideoTexture&&s.enable(18),T.alphaToCoverage&&s.enable(19),y.push(s.mask)}function b(y){const T=g[y.type];let B;if(T){const w=Ve[T];B=cl.clone(w.uniforms)}else B=y.uniforms;return B}function P(y,T){let B;for(let w=0,O=f.length;w<O;w++){const v=f[w];if(v.cacheKey===T){B=v,++B.usedTimes;break}}return B===void 0&&(B=new wp(i,T,y,a),f.push(B)),B}function L(y){if(--y.usedTimes===0){const T=f.indexOf(y);f[T]=f[f.length-1],f.pop(),y.destroy()}}function C(y){l.remove(y)}function N(){l.dispose()}return{getParameters:h,getProgramCacheKey:d,getUniforms:b,acquireProgram:P,releaseProgram:L,releaseShaderCache:C,programs:f,dispose:N}}function Dp(){let i=new WeakMap;function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function e(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Up(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _o(){const i=[];let t=0;const e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function o(p,m,u,g,_,h){let d=i[t];return d===void 0?(d={id:p.id,object:p,geometry:m,material:u,groupOrder:g,renderOrder:p.renderOrder,z:_,group:h},i[t]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=u,d.groupOrder=g,d.renderOrder=p.renderOrder,d.z=_,d.group=h),t++,d}function s(p,m,u,g,_,h){const d=o(p,m,u,g,_,h);u.transmission>0?n.push(d):u.transparent===!0?r.push(d):e.push(d)}function l(p,m,u,g,_,h){const d=o(p,m,u,g,_,h);u.transmission>0?n.unshift(d):u.transparent===!0?r.unshift(d):e.unshift(d)}function c(p,m){e.length>1&&e.sort(p||Up),n.length>1&&n.sort(m||mo),r.length>1&&r.sort(m||mo)}function f(){for(let p=t,m=i.length;p<m;p++){const u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:s,unshift:l,finish:f,sort:c}}function Ip(){let i=new WeakMap;function t(n,r){const a=i.get(n);let o;return a===void 0?(o=new _o,i.set(n,[o])):r>=a.length?(o=new _o,a.push(o)):o=a[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Np(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new Xt};break;case"SpotLight":e={position:new it,direction:new it,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new it,halfWidth:new it,halfHeight:new it};break}return i[t.id]=e,e}}}function Op(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Fp=0;function Bp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zp(i){const t=new Np,e=Op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new it);const r=new it,a=new oe,o=new oe;function s(c){let f=0,p=0,m=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,g=0,_=0,h=0,d=0,x=0,S=0,b=0,P=0,L=0,C=0;c.sort(Bp);for(let y=0,T=c.length;y<T;y++){const B=c[y],w=B.color,O=B.intensity,v=B.distance,z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=w.r*O,p+=w.g*O,m+=w.b*O;else if(B.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(B.sh.coefficients[V],O);C++}else if(B.isDirectionalLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const k=B.shadow,$=e.get(B);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[u]=$,n.directionalShadowMap[u]=z,n.directionalShadowMatrix[u]=B.shadow.matrix,x++}n.directional[u]=V,u++}else if(B.isSpotLight){const V=t.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(w).multiplyScalar(O),V.distance=v,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,n.spot[_]=V;const k=B.shadow;if(B.map&&(n.spotLightMap[P]=B.map,P++,k.updateMatrices(B),B.castShadow&&L++),n.spotLightMatrix[_]=k.matrix,B.castShadow){const $=e.get(B);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=z,b++}_++}else if(B.isRectAreaLight){const V=t.get(B);V.color.copy(w).multiplyScalar(O),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),n.rectArea[h]=V,h++}else if(B.isPointLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),V.distance=B.distance,V.decay=B.decay,B.castShadow){const k=B.shadow,$=e.get(B);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=B.shadow.matrix,S++}n.point[g]=V,g++}else if(B.isHemisphereLight){const V=t.get(B);V.skyColor.copy(B.color).multiplyScalar(O),V.groundColor.copy(B.groundColor).multiplyScalar(O),n.hemi[d]=V,d++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const N=n.hash;(N.directionalLength!==u||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==h||N.hemiLength!==d||N.numDirectionalShadows!==x||N.numPointShadows!==S||N.numSpotShadows!==b||N.numSpotMaps!==P||N.numLightProbes!==C)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=h,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+P-L,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,N.directionalLength=u,N.pointLength=g,N.spotLength=_,N.rectAreaLength=h,N.hemiLength=d,N.numDirectionalShadows=x,N.numPointShadows=S,N.numSpotShadows=b,N.numSpotMaps=P,N.numLightProbes=C,n.version=Fp++)}function l(c,f){let p=0,m=0,u=0,g=0,_=0;const h=f.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const S=c[d];if(S.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),p++}else if(S.isSpotLight){const b=n.spot[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),u++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),o.identity(),a.copy(S.matrixWorld),a.premultiply(h),o.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),m++}else if(S.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),_++}}}return{setup:s,setupView:l,state:n}}function go(i){const t=new zp(i),e=[],n=[];function r(f){c.camera=f,e.length=0,n.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function s(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function kp(i){let t=new WeakMap;function e(r,a=0){const o=t.get(r);let s;return o===void 0?(s=new go(i),t.set(r,[s])):a>=o.length?(s=new go(i),o.push(s)):s=o[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}class Hp extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gp extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xp(i,t,e){let n=new hl;const r=new zt,a=new zt,o=new he,s=new Hp({depthPacking:Sc}),l=new Gp,c={},f=e.maxTextureSize,p={[bn]:Te,[Te]:bn,[rn]:rn},m=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Vp,fragmentShader:Wp}),u=m.clone();u.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ge(g,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let d=this.type;this.render=function(L,C,N){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||L.length===0)return;const y=i.getRenderTarget(),T=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),w=i.state;w.setBlending(yn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const O=d!==nn&&this.type===nn,v=d===nn&&this.type!==nn;for(let z=0,V=L.length;z<V;z++){const k=L[z],$=k.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const tt=$.getFrameExtents();if(r.multiply(tt),a.copy($.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/tt.x),r.x=a.x*tt.x,$.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/tt.y),r.y=a.y*tt.y,$.mapSize.y=a.y)),$.map===null||O===!0||v===!0){const W=this.type!==nn?{minFilter:ye,magFilter:ye}:{};$.map!==null&&$.map.dispose(),$.map=new Hn(r.x,r.y,W),$.map.texture.name=k.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ct=$.getViewportCount();for(let W=0;W<ct;W++){const X=$.getViewport(W);o.set(a.x*X.x,a.y*X.y,a.x*X.z,a.y*X.w),w.viewport(o),$.updateMatrices(k,W),n=$.getFrustum(),b(C,N,$.camera,k,this.type)}$.isPointLightShadow!==!0&&this.type===nn&&x($,N),$.needsUpdate=!1}d=this.type,h.needsUpdate=!1,i.setRenderTarget(y,T,B)};function x(L,C){const N=t.update(_);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hn(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,N,m,_,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,N,u,_,null)}function S(L,C,N,y){let T=null;const B=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)T=B;else if(T=N.isPointLight===!0?l:s,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const w=T.uuid,O=C.uuid;let v=c[w];v===void 0&&(v={},c[w]=v);let z=v[O];z===void 0&&(z=T.clone(),v[O]=z,C.addEventListener("dispose",P)),T=z}if(T.visible=C.visible,T.wireframe=C.wireframe,y===nn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:p[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const w=i.properties.get(T);w.light=N}return T}function b(L,C,N,y,T){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===nn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const O=t.update(L),v=L.material;if(Array.isArray(v)){const z=O.groups;for(let V=0,k=z.length;V<k;V++){const $=z[V],tt=v[$.materialIndex];if(tt&&tt.visible){const ct=S(L,tt,y,T);L.onBeforeShadow(i,L,C,N,O,ct,$),i.renderBufferDirect(N,null,O,ct,L,$),L.onAfterShadow(i,L,C,N,O,ct,$)}}}else if(v.visible){const z=S(L,v,y,T);L.onBeforeShadow(i,L,C,N,O,z,null),i.renderBufferDirect(N,null,O,z,L,null),L.onAfterShadow(i,L,C,N,O,z,null)}}const w=L.children;for(let O=0,v=w.length;O<v;O++)b(w[O],C,N,y,T)}function P(L){L.target.removeEventListener("dispose",P);for(const N in c){const y=c[N],T=L.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Yp(i){function t(){let A=!1;const nt=new he;let rt=null;const lt=new he(0,0,0,0);return{setMask:function(ut){rt!==ut&&!A&&(i.colorMask(ut,ut,ut,ut),rt=ut)},setLocked:function(ut){A=ut},setClear:function(ut,At,Ft,te,ae){ae===!0&&(ut*=te,At*=te,Ft*=te),nt.set(ut,At,Ft,te),lt.equals(nt)===!1&&(i.clearColor(ut,At,Ft,te),lt.copy(nt))},reset:function(){A=!1,rt=null,lt.set(-1,0,0,0)}}}function e(){let A=!1,nt=null,rt=null,lt=null;return{setTest:function(ut){ut?gt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(ut){nt!==ut&&!A&&(i.depthMask(ut),nt=ut)},setFunc:function(ut){if(rt!==ut){switch(ut){case rc:i.depthFunc(i.NEVER);break;case ac:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case oc:i.depthFunc(i.EQUAL);break;case lc:i.depthFunc(i.GEQUAL);break;case cc:i.depthFunc(i.GREATER);break;case dc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=ut}},setLocked:function(ut){A=ut},setClear:function(ut){lt!==ut&&(i.clearDepth(ut),lt=ut)},reset:function(){A=!1,nt=null,rt=null,lt=null}}}function n(){let A=!1,nt=null,rt=null,lt=null,ut=null,At=null,Ft=null,te=null,ae=null;return{setTest:function(Wt){A||(Wt?gt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Wt){nt!==Wt&&!A&&(i.stencilMask(Wt),nt=Wt)},setFunc:function(Wt,se,ee){(rt!==Wt||lt!==se||ut!==ee)&&(i.stencilFunc(Wt,se,ee),rt=Wt,lt=se,ut=ee)},setOp:function(Wt,se,ee){(At!==Wt||Ft!==se||te!==ee)&&(i.stencilOp(Wt,se,ee),At=Wt,Ft=se,te=ee)},setLocked:function(Wt){A=Wt},setClear:function(Wt){ae!==Wt&&(i.clearStencil(Wt),ae=Wt)},reset:function(){A=!1,nt=null,rt=null,lt=null,ut=null,At=null,Ft=null,te=null,ae=null}}}const r=new t,a=new e,o=new n,s=new WeakMap,l=new WeakMap;let c={},f={},p=new WeakMap,m=[],u=null,g=!1,_=null,h=null,d=null,x=null,S=null,b=null,P=null,L=new Xt(0,0,0),C=0,N=!1,y=null,T=null,B=null,w=null,O=null;const v=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=V>=2);let $=null,tt={};const ct=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),X=new he().fromArray(ct),pt=new he().fromArray(W);function q(A,nt,rt,lt){const ut=new Uint8Array(4),At=i.createTexture();i.bindTexture(A,At),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<rt;Ft++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(nt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return At}const Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(Ar),at(!1),Y(Es),gt(i.CULL_FACE),Vt(yn);function gt(A){c[A]!==!0&&(i.enable(A),c[A]=!0)}function vt(A){c[A]!==!1&&(i.disable(A),c[A]=!1)}function Mt(A,nt){return f[A]!==nt?(i.bindFramebuffer(A,nt),f[A]=nt,A===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),A===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Et(A,nt){let rt=m,lt=!1;if(A){rt=p.get(nt),rt===void 0&&(rt=[],p.set(nt,rt));const ut=A.textures;if(rt.length!==ut.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Ft=ut.length;At<Ft;At++)rt[At]=i.COLOR_ATTACHMENT0+At;rt.length=ut.length,lt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,lt=!0);lt&&i.drawBuffers(rt)}function Rt(A){return u!==A?(i.useProgram(A),u=A,!0):!1}const Nt={[On]:i.FUNC_ADD,[Hl]:i.FUNC_SUBTRACT,[Gl]:i.FUNC_REVERSE_SUBTRACT};Nt[Vl]=i.MIN,Nt[Wl]=i.MAX;const H={[Xl]:i.ZERO,[Yl]:i.ONE,[ql]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[Ql]:i.SRC_ALPHA_SATURATE,[$l]:i.DST_COLOR,[Zl]:i.DST_ALPHA,[jl]:i.ONE_MINUS_SRC_COLOR,[Ea]:i.ONE_MINUS_SRC_ALPHA,[Jl]:i.ONE_MINUS_DST_COLOR,[Kl]:i.ONE_MINUS_DST_ALPHA,[tc]:i.CONSTANT_COLOR,[ec]:i.ONE_MINUS_CONSTANT_COLOR,[nc]:i.CONSTANT_ALPHA,[ic]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(A,nt,rt,lt,ut,At,Ft,te,ae,Wt){if(A===yn){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(gt(i.BLEND),g=!0),A!==kl){if(A!==_||Wt!==N){if((h!==On||S!==On)&&(i.blendEquation(i.FUNC_ADD),h=On,S=On),Wt)switch(A){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}d=null,x=null,b=null,P=null,L.set(0,0,0),C=0,_=A,N=Wt}return}ut=ut||nt,At=At||rt,Ft=Ft||lt,(nt!==h||ut!==S)&&(i.blendEquationSeparate(Nt[nt],Nt[ut]),h=nt,S=ut),(rt!==d||lt!==x||At!==b||Ft!==P)&&(i.blendFuncSeparate(H[rt],H[lt],H[At],H[Ft]),d=rt,x=lt,b=At,P=Ft),(te.equals(L)===!1||ae!==C)&&(i.blendColor(te.r,te.g,te.b,ae),L.copy(te),C=ae),_=A,N=!1}function M(A,nt){A.side===rn?vt(i.CULL_FACE):gt(i.CULL_FACE);let rt=A.side===Te;nt&&(rt=!rt),at(rt),A.blending===pi&&A.transparent===!1?Vt(yn):Vt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);const lt=A.stencilWrite;o.setTest(lt),lt&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),D(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(A){y!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),y=A)}function Y(A){A!==Fl?(gt(i.CULL_FACE),A!==T&&(A===Es?i.cullFace(i.BACK):A===Bl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),T=A}function F(A){A!==B&&(z&&i.lineWidth(A),B=A)}function D(A,nt,rt){A?(gt(i.POLYGON_OFFSET_FILL),(w!==nt||O!==rt)&&(i.polygonOffset(nt,rt),w=nt,O=rt)):vt(i.POLYGON_OFFSET_FILL)}function G(A){A?gt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function R(A){A===void 0&&(A=i.TEXTURE0+v-1),$!==A&&(i.activeTexture(A),$=A)}function E(A,nt,rt){rt===void 0&&($===null?rt=i.TEXTURE0+v-1:rt=$);let lt=tt[rt];lt===void 0&&(lt={type:void 0,texture:void 0},tt[rt]=lt),(lt.type!==A||lt.texture!==nt)&&($!==rt&&(i.activeTexture(rt),$=rt),i.bindTexture(A,nt||Q[A]),lt.type=A,lt.texture=nt)}function I(){const A=tt[$];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function dt(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Tt(A){X.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),X.copy(A))}function yt(A){pt.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),pt.copy(A))}function Ut(A,nt){let rt=l.get(nt);rt===void 0&&(rt=new WeakMap,l.set(nt,rt));let lt=rt.get(A);lt===void 0&&(lt=i.getUniformBlockIndex(nt,A.name),rt.set(A,lt))}function Lt(A,nt){const lt=l.get(nt).get(A);s.get(nt)!==lt&&(i.uniformBlockBinding(nt,lt,A.__bindingPointIndex),s.set(nt,lt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},$=null,tt={},f={},p=new WeakMap,m=[],u=null,g=!1,_=null,h=null,d=null,x=null,S=null,b=null,P=null,L=new Xt(0,0,0),C=0,N=!1,y=null,T=null,B=null,w=null,O=null,X.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:vt,bindFramebuffer:Mt,drawBuffers:Et,useProgram:Rt,setBlending:Vt,setMaterial:M,setFlipSided:at,setCullFace:Y,setLineWidth:F,setPolygonOffset:D,setScissorTest:G,activeTexture:R,bindTexture:E,unbindTexture:I,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:St,texImage3D:kt,updateUBOMapping:Ut,uniformBlockBinding:Lt,texStorage2D:Pt,texStorage3D:mt,texSubImage2D:j,texSubImage3D:dt,compressedTexSubImage2D:ht,compressedTexSubImage3D:ft,scissor:Tt,viewport:yt,reset:Kt}}function vo(i,t,e,n){const r=qp(n);switch(e){case Vo:return i*t;case Xo:return i*t;case Yo:return i*t*2;case qo:return i*t/r.components*r.byteLength;case ss:return i*t/r.components*r.byteLength;case jo:return i*t*2/r.components*r.byteLength;case os:return i*t*2/r.components*r.byteLength;case Wo:return i*t*3/r.components*r.byteLength;case He:return i*t*4/r.components*r.byteLength;case ls:return i*t*4/r.components*r.byteLength;case _r:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sr:case qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zo:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(i){switch(i){case cn:case ko:return{byteLength:1,components:1};case Ui:case Ho:case on:return{byteLength:2,components:1};case rs:case as:return{byteLength:2,components:4};case kn:case is:case Oe:return{byteLength:4,components:1};case Go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jp(i,t,e,n,r,a,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,f=new WeakMap;let p;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return u?new OffscreenCanvas(R,E):Ni("canvas")}function _(R,E,I){let Z=1;const et=G(R);if((et.width>I||et.height>I)&&(Z=I/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Z*et.width),dt=Math.floor(Z*et.height);p===void 0&&(p=g(j,dt));const ht=E?g(j,dt):p;return ht.width=j,ht.height=dt,ht.getContext("2d").drawImage(R,0,0,j,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+dt+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function h(R){return R.generateMipmaps&&R.minFilter!==ye&&R.minFilter!==ge}function d(R){i.generateMipmap(R)}function x(R,E,I,Z,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=E;if(E===i.RED&&(I===i.FLOAT&&(j=i.R32F),I===i.HALF_FLOAT&&(j=i.R16F),I===i.UNSIGNED_BYTE&&(j=i.R8)),E===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.R8UI),I===i.UNSIGNED_SHORT&&(j=i.R16UI),I===i.UNSIGNED_INT&&(j=i.R32UI),I===i.BYTE&&(j=i.R8I),I===i.SHORT&&(j=i.R16I),I===i.INT&&(j=i.R32I)),E===i.RG&&(I===i.FLOAT&&(j=i.RG32F),I===i.HALF_FLOAT&&(j=i.RG16F),I===i.UNSIGNED_BYTE&&(j=i.RG8)),E===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RG8UI),I===i.UNSIGNED_SHORT&&(j=i.RG16UI),I===i.UNSIGNED_INT&&(j=i.RG32UI),I===i.BYTE&&(j=i.RG8I),I===i.SHORT&&(j=i.RG16I),I===i.INT&&(j=i.RG32I)),E===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),E===i.RGBA){const dt=et?wr:Zt.getTransfer(Z);I===i.FLOAT&&(j=i.RGBA32F),I===i.HALF_FLOAT&&(j=i.RGBA16F),I===i.UNSIGNED_BYTE&&(j=dt===$t?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(R,E){let I;return R?E===null||E===kn||E===xi?I=i.DEPTH24_STENCIL8:E===Oe?I=i.DEPTH32F_STENCIL8:E===Ui&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===kn||E===xi?I=i.DEPTH_COMPONENT24:E===Oe?I=i.DEPTH_COMPONENT32F:E===Ui&&(I=i.DEPTH_COMPONENT16),I}function b(R,E){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==ye&&R.minFilter!==ge?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){const E=R.target;E.removeEventListener("dispose",P),C(E),E.isVideoTexture&&f.delete(E)}function L(R){const E=R.target;E.removeEventListener("dispose",L),y(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const I=R.source,Z=m.get(I);if(Z){const et=Z[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&N(R),Object.keys(Z).length===0&&m.delete(I)}n.remove(R)}function N(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const I=R.source,Z=m.get(I);delete Z[E.__cacheKey],o.memory.textures--}function y(R){const E=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let et=0;et<E.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const I=R.textures;for(let Z=0,et=I.length;Z<et;Z++){const j=n.get(I[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(I[Z])}n.remove(R)}let T=0;function B(){T=0}function w(){const R=T;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),T+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function v(R,E){const I=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(I,R,E);return}}e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+E)}function z(R,E){const I=n.get(R);if(R.version>0&&I.__version!==R.version){pt(I,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+E)}function V(R,E){const I=n.get(R);if(R.version>0&&I.__version!==R.version){pt(I,R,E);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+E)}function k(R,E){const I=n.get(R);if(R.version>0&&I.__version!==R.version){q(I,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+E)}const $={[Re]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},tt={[ye]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[ge]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},ct={[Ec]:i.NEVER,[Cc]:i.ALWAYS,[yc]:i.LESS,[$o]:i.LEQUAL,[Tc]:i.EQUAL,[wc]:i.GEQUAL,[bc]:i.GREATER,[Ac]:i.NOTEQUAL};function W(R,E){if(E.type===Oe&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ge||E.magFilter===Xr||E.magFilter===Vi||E.magFilter===En||E.minFilter===ge||E.minFilter===Xr||E.minFilter===Vi||E.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,$[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ye||E.minFilter!==Vi&&E.minFilter!==En||E.type===Oe&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function X(R,E){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));const Z=E.source;let et=m.get(Z);et===void 0&&(et={},m.set(Z,et));const j=O(E);if(j!==R.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),et[j].usedTimes++;const dt=et[R.__cacheKey];dt!==void 0&&(et[R.__cacheKey].usedTimes--,dt.usedTimes===0&&N(E)),R.__cacheKey=j,R.__webglTexture=et[j].texture}return I}function pt(R,E,I){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);const et=X(R,E),j=E.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+I);const dt=n.get(j);if(j.version!==dt.__version||et===!0){e.activeTexture(i.TEXTURE0+I);const ht=Zt.getPrimaries(Zt.workingColorSpace),ft=E.colorSpace===Mn?null:Zt.getPrimaries(E.colorSpace),Pt=E.colorSpace===Mn||ht===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let mt=_(E.image,!1,r.maxTextureSize);mt=D(E,mt);const St=a.convert(E.format,E.colorSpace),kt=a.convert(E.type);let Tt=x(E.internalFormat,St,kt,E.colorSpace,E.isVideoTexture);W(Z,E);let yt;const Ut=E.mipmaps,Lt=E.isVideoTexture!==!0,Kt=dt.__version===void 0||et===!0,A=j.dataReady,nt=b(E,mt);if(E.isDepthTexture)Tt=S(E.format===Si,E.type),Kt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Tt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,mt.width,mt.height,0,St,kt,null));else if(E.isDataTexture)if(Ut.length>0){Lt&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Ut[0].width,Ut[0].height);for(let rt=0,lt=Ut.length;rt<lt;rt++)yt=Ut[rt],Lt?A&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,yt.width,yt.height,St,kt,yt.data):e.texImage2D(i.TEXTURE_2D,rt,Tt,yt.width,yt.height,0,St,kt,yt.data);E.generateMipmaps=!1}else Lt?(Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,mt.width,mt.height),A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,St,kt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,mt.width,mt.height,0,St,kt,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Lt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,Ut[0].width,Ut[0].height,mt.depth);for(let rt=0,lt=Ut.length;rt<lt;rt++)if(yt=Ut[rt],E.format!==He)if(St!==null)if(Lt){if(A)if(E.layerUpdates.size>0){const ut=vo(yt.width,yt.height,E.format,E.type);for(const At of E.layerUpdates){const Ft=yt.data.subarray(At*ut/yt.data.BYTES_PER_ELEMENT,(At+1)*ut/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,At,yt.width,yt.height,1,St,Ft,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,yt.width,yt.height,mt.depth,St,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Tt,yt.width,yt.height,mt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?A&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,yt.width,yt.height,mt.depth,St,kt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Tt,yt.width,yt.height,mt.depth,0,St,kt,yt.data)}else{Lt&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Ut[0].width,Ut[0].height);for(let rt=0,lt=Ut.length;rt<lt;rt++)yt=Ut[rt],E.format!==He?St!==null?Lt?A&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Tt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?A&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,yt.width,yt.height,St,kt,yt.data):e.texImage2D(i.TEXTURE_2D,rt,Tt,yt.width,yt.height,0,St,kt,yt.data)}else if(E.isDataArrayTexture)if(Lt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,mt.width,mt.height,mt.depth),A)if(E.layerUpdates.size>0){const rt=vo(mt.width,mt.height,E.format,E.type);for(const lt of E.layerUpdates){const ut=mt.data.subarray(lt*rt/mt.data.BYTES_PER_ELEMENT,(lt+1)*rt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,mt.width,mt.height,1,St,kt,ut)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,kt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,mt.width,mt.height,mt.depth,0,St,kt,mt.data);else if(E.isData3DTexture)Lt?(Kt&&e.texStorage3D(i.TEXTURE_3D,nt,Tt,mt.width,mt.height,mt.depth),A&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,kt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,mt.width,mt.height,mt.depth,0,St,kt,mt.data);else if(E.isFramebufferTexture){if(Kt)if(Lt)e.texStorage2D(i.TEXTURE_2D,nt,Tt,mt.width,mt.height);else{let rt=mt.width,lt=mt.height;for(let ut=0;ut<nt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Tt,rt,lt,0,St,kt,null),rt>>=1,lt>>=1}}else if(Ut.length>0){if(Lt&&Kt){const rt=G(Ut[0]);e.texStorage2D(i.TEXTURE_2D,nt,Tt,rt.width,rt.height)}for(let rt=0,lt=Ut.length;rt<lt;rt++)yt=Ut[rt],Lt?A&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St,kt,yt):e.texImage2D(i.TEXTURE_2D,rt,Tt,St,kt,yt);E.generateMipmaps=!1}else if(Lt){if(Kt){const rt=G(mt);e.texStorage2D(i.TEXTURE_2D,nt,Tt,rt.width,rt.height)}A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,kt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,St,kt,mt);h(E)&&d(Z),dt.__version=j.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function q(R,E,I){if(E.image.length!==6)return;const Z=X(R,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+I);const j=n.get(et);if(et.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+I);const dt=Zt.getPrimaries(Zt.workingColorSpace),ht=E.colorSpace===Mn?null:Zt.getPrimaries(E.colorSpace),ft=E.colorSpace===Mn||dt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let lt=0;lt<6;lt++)!Pt&&!mt?St[lt]=_(E.image[lt],!0,r.maxCubemapSize):St[lt]=mt?E.image[lt].image:E.image[lt],St[lt]=D(E,St[lt]);const kt=St[0],Tt=a.convert(E.format,E.colorSpace),yt=a.convert(E.type),Ut=x(E.internalFormat,Tt,yt,E.colorSpace),Lt=E.isVideoTexture!==!0,Kt=j.__version===void 0||Z===!0,A=et.dataReady;let nt=b(E,kt);W(i.TEXTURE_CUBE_MAP,E);let rt;if(Pt){Lt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ut,kt.width,kt.height);for(let lt=0;lt<6;lt++){rt=St[lt].mipmaps;for(let ut=0;ut<rt.length;ut++){const At=rt[ut];E.format!==He?Tt!==null?Lt?A&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut,Ut,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut,0,0,At.width,At.height,Tt,yt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut,Ut,At.width,At.height,0,Tt,yt,At.data)}}}else{if(rt=E.mipmaps,Lt&&Kt){rt.length>0&&nt++;const lt=G(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ut,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(mt){Lt?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,St[lt].width,St[lt].height,Tt,yt,St[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Ut,St[lt].width,St[lt].height,0,Tt,yt,St[lt].data);for(let ut=0;ut<rt.length;ut++){const Ft=rt[ut].image[lt].image;Lt?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut+1,0,0,Ft.width,Ft.height,Tt,yt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut+1,Ut,Ft.width,Ft.height,0,Tt,yt,Ft.data)}}else{Lt?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Tt,yt,St[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Ut,Tt,yt,St[lt]);for(let ut=0;ut<rt.length;ut++){const At=rt[ut];Lt?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut+1,0,0,Tt,yt,At.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut+1,Ut,Tt,yt,At.image[lt])}}}h(E)&&d(i.TEXTURE_CUBE_MAP),j.__version=et.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Q(R,E,I,Z,et,j){const dt=a.convert(I.format,I.colorSpace),ht=a.convert(I.type),ft=x(I.internalFormat,dt,ht,I.colorSpace);if(!n.get(E).__hasExternalTextures){const mt=Math.max(1,E.width>>j),St=Math.max(1,E.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,ft,mt,St,E.depth,0,dt,ht,null):e.texImage2D(et,j,ft,mt,St,0,dt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Y(E)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,n.get(I).__webglTexture,0,at(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,n.get(I).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(R,E,I){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const Z=E.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,j=S(E.stencilBuffer,et),dt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=at(E);Y(E)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,j,E.width,E.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,R)}else{const Z=E.textures;for(let et=0;et<Z.length;et++){const j=Z[et],dt=a.convert(j.format,j.colorSpace),ht=a.convert(j.type),ft=x(j.internalFormat,dt,ht,j.colorSpace),Pt=at(E);I&&Y(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,ft,E.width,E.height):Y(E)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,ft,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ft,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),v(E.depthTexture,0);const Z=n.get(E.depthTexture).__webglTexture,et=at(E);if(E.depthTexture.format===mi)Y(E)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Si)Y(E)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Mt(R){const E=n.get(R),I=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,R)}else if(I){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]=i.createRenderbuffer(),gt(E.__webglDepthbuffer[Z],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),gt(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,E,I){const Z=n.get(R);E!==void 0&&Q(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Mt(R)}function Rt(R){const E=R.texture,I=n.get(R),Z=n.get(E);R.addEventListener("dispose",L);const et=R.textures,j=R.isWebGLCubeRenderTarget===!0,dt=et.length>1;if(dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer[ht]=[];for(let ft=0;ft<E.mipmaps.length;ft++)I.__webglFramebuffer[ht][ft]=i.createFramebuffer()}else I.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)I.__webglFramebuffer[ht]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(dt)for(let ht=0,ft=et.length;ht<ft;ht++){const Pt=n.get(et[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Y(R)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const ft=et[ht];I.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ht]);const Pt=a.convert(ft.format,ft.colorSpace),mt=a.convert(ft.type),St=x(ft.internalFormat,Pt,mt,ft.colorSpace,R.isXRRenderTarget===!0),kt=at(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,St,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,I.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(I.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),W(i.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Q(I.__webglFramebuffer[ht][ft],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ft);else Q(I.__webglFramebuffer[ht],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);h(E)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ht=0,ft=et.length;ht<ft;ht++){const Pt=et[ht],mt=n.get(Pt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),W(i.TEXTURE_2D,Pt),Q(I.__webglFramebuffer,R,Pt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),h(Pt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),W(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Q(I.__webglFramebuffer[ft],R,E,i.COLOR_ATTACHMENT0,ht,ft);else Q(I.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,ht,0);h(E)&&d(ht),e.unbindTexture()}R.depthBuffer&&Mt(R)}function Nt(R){const E=R.textures;for(let I=0,Z=E.length;I<Z;I++){const et=E[I];if(h(et)){const j=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(et).__webglTexture;e.bindTexture(j,dt),d(j),e.unbindTexture()}}}const H=[],Vt=[];function M(R){if(R.samples>0){if(Y(R)===!1){const E=R.textures,I=R.width,Z=R.height;let et=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(R),ht=E.length>1;if(ht)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Pt=n.get(E[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,I,Z,0,0,I,Z,et,i.NEAREST),l===!0&&(H.length=0,Vt.length=0,H.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(H.push(j),Vt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Pt=n.get(E[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function at(R){return Math.min(r.maxSamples,R.samples)}function Y(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function F(R){const E=o.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function D(R,E){const I=R.colorSpace,Z=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==fn&&I!==Mn&&(Zt.getTransfer(I)===$t?(Z!==He||et!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),E}function G(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=w,this.resetTextureUnits=B,this.setTexture2D=v,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Et,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=M,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Y}function Zp(i,t){function e(n,r=Mn){let a;const o=Zt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===rs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===as)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Go)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ko)return i.BYTE;if(n===Ho)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===is)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Oe)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Vo)return i.ALPHA;if(n===Wo)return i.RGB;if(n===He)return i.RGBA;if(n===Xo)return i.LUMINANCE;if(n===Yo)return i.LUMINANCE_ALPHA;if(n===mi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===ss)return i.RED_INTEGER;if(n===jo)return i.RG;if(n===os)return i.RG_INTEGER;if(n===ls)return i.RGBA_INTEGER;if(n===_r||n===gr||n===vr||n===xr)if(o===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===_r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===_r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===wa||n===Ca||n===Ra)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Aa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Da)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Pa||n===La)return o===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Da)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Ia||n===Na||n===Oa||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ua)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===qa||n===ja)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Sr)return o===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Za||n===Ka||n===$a)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Sr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Kp extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hr extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const h=e.getJointPose(_,n),d=this._getHandJoint(c,_);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=f.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&m>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent($p)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new xe,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new dn({vertexShader:Jp,fragmentShader:Qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class em extends Wn{constructor(t,e){super();const n=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,f=null,p=null,m=null,u=null,g=null;const _=new tm,h=e.getContextAttributes();let d=null,x=null;const S=[],b=[],P=new zt;let L=null;const C=new Le;C.layers.enable(1),C.viewport=new he;const N=new Le;N.layers.enable(2),N.viewport=new he;const y=[C,N],T=new Kp;T.layers.enable(1),T.layers.enable(2);let B=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=S[q];return Q===void 0&&(Q=new _a,S[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=S[q];return Q===void 0&&(Q=new _a,S[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=S[q];return Q===void 0&&(Q=new _a,S[q]=Q),Q.getHandSpace()};function O(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const gt=S[Q];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function v(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",v),r.removeEventListener("inputsourceschange",z);for(let q=0;q<S.length;q++){const Q=b[q];Q!==null&&(b[q]=null,S[q].disconnect(Q))}B=null,w=null,_.reset(),t.setRenderTarget(d),u=null,m=null,p=null,r=null,x=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",v),r.addEventListener("inputsourceschange",z),h.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const Q={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Hn(u.framebufferWidth,u.framebufferHeight,{format:He,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}else{let Q=null,gt=null,vt=null;h.depth&&(vt=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=h.stencil?Si:mi,gt=h.stencil?xi:kn);const Mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:a};p=new XRWebGLBinding(r,e),m=p.createProjectionLayer(Mt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),x=new Hn(m.textureWidth,m.textureHeight,{format:He,type:cn,depthTexture:new pl(m.textureWidth,m.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),pt.setContext(r),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let Q=0;Q<q.removed.length;Q++){const gt=q.removed[Q],vt=b.indexOf(gt);vt>=0&&(b[vt]=null,S[vt].disconnect(gt))}for(let Q=0;Q<q.added.length;Q++){const gt=q.added[Q];let vt=b.indexOf(gt);if(vt===-1){for(let Et=0;Et<S.length;Et++)if(Et>=b.length){b.push(gt),vt=Et;break}else if(b[Et]===null){b[Et]=gt,vt=Et;break}if(vt===-1)break}const Mt=S[vt];Mt&&Mt.connect(gt)}}const V=new it,k=new it;function $(q,Q,gt){V.setFromMatrixPosition(Q.matrixWorld),k.setFromMatrixPosition(gt.matrixWorld);const vt=V.distanceTo(k),Mt=Q.projectionMatrix.elements,Et=gt.projectionMatrix.elements,Rt=Mt[14]/(Mt[10]-1),Nt=Mt[14]/(Mt[10]+1),H=(Mt[9]+1)/Mt[5],Vt=(Mt[9]-1)/Mt[5],M=(Mt[8]-1)/Mt[0],at=(Et[8]+1)/Et[0],Y=Rt*M,F=Rt*at,D=vt/(-M+at),G=D*-M;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(G),q.translateZ(D),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const R=Rt+D,E=Nt+D,I=Y-G,Z=F+(vt-G),et=H*Nt/E*R,j=Vt*Nt/E*R;q.projectionMatrix.makePerspective(I,Z,et,j,R,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function tt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),T.near=N.near=C.near=q.near,T.far=N.far=C.far=q.far,(B!==T.near||w!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,w=T.far,C.near=B,C.far=w,N.near=B,N.far=w,C.updateProjectionMatrix(),N.updateProjectionMatrix(),q.updateProjectionMatrix());const Q=q.parent,gt=T.cameras;tt(T,Q);for(let vt=0;vt<gt.length;vt++)tt(gt[vt],Q);gt.length===2?$(T,C,N):T.projectionMatrix.copy(C.projectionMatrix),ct(q,T,Q)};function ct(q,Q,gt){gt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ii*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(q){l=q,m!==null&&(m.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let W=null;function X(q,Q){if(f=Q.getViewerPose(c||o),g=Q,f!==null){const gt=f.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let vt=!1;gt.length!==T.cameras.length&&(T.cameras.length=0,vt=!0);for(let Et=0;Et<gt.length;Et++){const Rt=gt[Et];let Nt=null;if(u!==null)Nt=u.getViewport(Rt);else{const Vt=p.getViewSubImage(m,Rt);Nt=Vt.viewport,Et===0&&(t.setRenderTargetTextures(x,Vt.colorTexture,m.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(x))}let H=y[Et];H===void 0&&(H=new Le,H.layers.enable(Et),H.viewport=new he,y[Et]=H),H.matrix.fromArray(Rt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Rt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Et===0&&(T.matrix.copy(H.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),vt===!0&&T.cameras.push(H)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Et=p.getDepthInformation(gt[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,r.renderState)}}for(let gt=0;gt<S.length;gt++){const vt=b[gt],Mt=S[gt];vt!==null&&Mt!==void 0&&Mt.update(vt,Q,c||o)}W&&W(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const pt=new ul;pt.setAnimationLoop(X),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}}const In=new je,nm=new oe;function im(i,t){function e(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function n(h,d){d.color.getRGB(h.fogColor.value,ll(i)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function r(h,d,x,S,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(h,d):d.isMeshToonMaterial?(a(h,d),p(h,d)):d.isMeshPhongMaterial?(a(h,d),f(h,d)):d.isMeshStandardMaterial?(a(h,d),m(h,d),d.isMeshPhysicalMaterial&&u(h,d,b)):d.isMeshMatcapMaterial?(a(h,d),g(h,d)):d.isMeshDepthMaterial?a(h,d):d.isMeshDistanceMaterial?(a(h,d),_(h,d)):d.isMeshNormalMaterial?a(h,d):d.isLineBasicMaterial?(o(h,d),d.isLineDashedMaterial&&s(h,d)):d.isPointsMaterial?l(h,d,x,S):d.isSpriteMaterial?c(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,e(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Te&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,e(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Te&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,e(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,e(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const x=t.get(d),S=x.envMap,b=x.envMapRotation;S&&(h.envMap.value=S,In.copy(b),In.x*=-1,In.y*=-1,In.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),h.envMapRotation.value.setFromMatrix4(nm.makeRotationFromEuler(In)),h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap&&(h.lightMap.value=d.lightMap,h.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,h.lightMapTransform)),d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,h.aoMapTransform))}function o(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform))}function s(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function l(h,d,x,S){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*x,h.scale.value=S*.5,d.map&&(h.map.value=d.map,e(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function c(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function f(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function p(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function m(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,h.roughnessMapTransform)),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function u(h,d,x){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Te&&h.clearcoatNormalScale.value.negate())),d.dispersion>0&&(h.dispersion.value=d.dispersion),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,d){d.matcap&&(h.matcap.value=d.matcap)}function _(h,d){const x=t.get(d).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rm(i,t,e,n){let r={},a={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=r[x.id];b===void 0&&(g(x),b=f(x),r[x.id]=b,x.addEventListener("dispose",h));const P=S.program;n.updateUBOMapping(x,P);const L=t.render.frame;a[x.id]!==L&&(m(x),a[x.id]=L)}function f(x){const S=p();x.__bindingPointIndex=S;const b=i.createBuffer(),P=x.__size,L=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function p(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){const S=r[x.id],b=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let L=0,C=b.length;L<C;L++){const N=Array.isArray(b[L])?b[L]:[b[L]];for(let y=0,T=N.length;y<T;y++){const B=N[y];if(u(B,L,y,P)===!0){const w=B.__offset,O=Array.isArray(B.value)?B.value:[B.value];let v=0;for(let z=0;z<O.length;z++){const V=O[z],k=_(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,w+v,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,v),v+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,S,b,P){const L=x.value,C=S+"_"+b;if(P[C]===void 0)return typeof L=="number"||typeof L=="boolean"?P[C]=L:P[C]=L.clone(),!0;{const N=P[C];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return P[C]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function g(x){const S=x.uniforms;let b=0;const P=16;for(let C=0,N=S.length;C<N;C++){const y=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,B=y.length;T<B;T++){const w=y[T],O=Array.isArray(w.value)?w.value:[w.value];for(let v=0,z=O.length;v<z;v++){const V=O[v],k=_(V),$=b%P;$!==0&&P-$<k.boundary&&(b+=P-$),w.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,b+=k.storage}}}const L=b%P;return L>0&&(b+=P-L),x.__size=b,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function h(x){const S=x.target;S.removeEventListener("dispose",h);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},a={}}return{bind:l,update:c,dispose:d}}class am{constructor(t={}){const{canvas:e=Yc(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Tn,this.toneMappingExposure=1;const S=this;let b=!1,P=0,L=0,C=null,N=-1,y=null;const T=new he,B=new he;let w=null;const O=new Xt(0);let v=0,z=e.width,V=e.height,k=1,$=null,tt=null;const ct=new he(0,0,z,V),W=new he(0,0,z,V);let X=!1;const pt=new hl;let q=!1,Q=!1;const gt=new oe,vt=new it,Mt=new he,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Nt(){return C===null?k:1}let H=n;function Vt(U,K){return e.getContext(U,K)}try{const U={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ns}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),H===null){const K="webgl2";if(H=Vt(K,U),H===null)throw Vt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let M,at,Y,F,D,G,R,E,I,Z,et,j,dt,ht,ft,Pt,mt,St,kt,Tt,yt,Ut,Lt,Kt;function A(){M=new hu(H),M.init(),Ut=new Zp(H,M),at=new au(H,M,t,Ut),Y=new Yp(H),F=new mu(H),D=new Dp,G=new jp(H,M,Y,D,at,Ut,F),R=new ou(S),E=new fu(S),I=new Sd(H),Lt=new iu(H,I),Z=new uu(H,I,F,Lt),et=new gu(H,Z,I,F),kt=new _u(H,at,G),Pt=new su(D),j=new Lp(S,R,E,M,at,Lt,Pt),dt=new im(S,D),ht=new Ip,ft=new kp(M),St=new nu(S,R,E,Y,et,m,l),mt=new Xp(S,et,at),Kt=new rm(H,F,at,Y),Tt=new ru(H,M,F),yt=new pu(H,M,F),F.programs=j.programs,S.capabilities=at,S.extensions=M,S.properties=D,S.renderLists=ht,S.shadowMap=mt,S.state=Y,S.info=F}A();const nt=new em(S,H);this.xr=nt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const U=M.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=M.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(U){U!==void 0&&(k=U,this.setSize(z,V,!1))},this.getSize=function(U){return U.set(z,V)},this.setSize=function(U,K,st=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,V=K,e.width=Math.floor(U*k),e.height=Math.floor(K*k),st===!0&&(e.style.width=U+"px",e.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(z*k,V*k).floor()},this.setDrawingBufferSize=function(U,K,st){z=U,V=K,k=st,e.width=Math.floor(U*st),e.height=Math.floor(K*st),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(T)},this.getViewport=function(U){return U.copy(ct)},this.setViewport=function(U,K,st,ot){U.isVector4?ct.set(U.x,U.y,U.z,U.w):ct.set(U,K,st,ot),Y.viewport(T.copy(ct).multiplyScalar(k).round())},this.getScissor=function(U){return U.copy(W)},this.setScissor=function(U,K,st,ot){U.isVector4?W.set(U.x,U.y,U.z,U.w):W.set(U,K,st,ot),Y.scissor(B.copy(W).multiplyScalar(k).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(U){Y.setScissorTest(X=U)},this.setOpaqueSort=function(U){$=U},this.setTransparentSort=function(U){tt=U},this.getClearColor=function(U){return U.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(U=!0,K=!0,st=!0){let ot=0;if(U){let J=!1;if(C!==null){const xt=C.texture.format;J=xt===ls||xt===os||xt===ss}if(J){const xt=C.texture.type,bt=xt===cn||xt===kn||xt===Ui||xt===xi||xt===rs||xt===as,wt=St.getClearColor(),Ct=St.getClearAlpha(),Ot=wt.r,Bt=wt.g,It=wt.b;bt?(u[0]=Ot,u[1]=Bt,u[2]=It,u[3]=Ct,H.clearBufferuiv(H.COLOR,0,u)):(g[0]=Ot,g[1]=Bt,g[2]=It,g[3]=Ct,H.clearBufferiv(H.COLOR,0,g))}else ot|=H.COLOR_BUFFER_BIT}K&&(ot|=H.DEPTH_BUFFER_BIT),st&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ht.dispose(),ft.dispose(),D.dispose(),R.dispose(),E.dispose(),et.dispose(),Lt.dispose(),Kt.dispose(),j.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ee),nt.removeEventListener("sessionend",hn),ue.stop()};function rt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const U=F.autoReset,K=mt.enabled,st=mt.autoUpdate,ot=mt.needsUpdate,J=mt.type;A(),F.autoReset=U,mt.enabled=K,mt.autoUpdate=st,mt.needsUpdate=ot,mt.type=J}function ut(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function At(U){const K=U.target;K.removeEventListener("dispose",At),Ft(K)}function Ft(U){te(U),D.remove(U)}function te(U){const K=D.get(U).programs;K!==void 0&&(K.forEach(function(st){j.releaseProgram(st)}),U.isShaderMaterial&&j.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,st,ot,J,xt){K===null&&(K=Et);const bt=J.isMesh&&J.matrixWorld.determinant()<0,wt=El(U,K,st,ot,J);Y.setMaterial(ot,bt);let Ct=st.index,Ot=1;if(ot.wireframe===!0){if(Ct=Z.getWireframeAttribute(st),Ct===void 0)return;Ot=2}const Bt=st.drawRange,It=st.attributes.position;let Yt=Bt.start*Ot,Jt=(Bt.start+Bt.count)*Ot;xt!==null&&(Yt=Math.max(Yt,xt.start*Ot),Jt=Math.min(Jt,(xt.start+xt.count)*Ot)),Ct!==null?(Yt=Math.max(Yt,0),Jt=Math.min(Jt,Ct.count)):It!=null&&(Yt=Math.max(Yt,0),Jt=Math.min(Jt,It.count));const Qt=Jt-Yt;if(Qt<0||Qt===1/0)return;Lt.setup(J,ot,wt,st,Ct);let be,qt=Tt;if(Ct!==null&&(be=I.get(Ct),qt=yt,qt.setIndex(be)),J.isMesh)ot.wireframe===!0?(Y.setLineWidth(ot.wireframeLinewidth*Nt()),qt.setMode(H.LINES)):qt.setMode(H.TRIANGLES);else if(J.isLine){let Dt=ot.linewidth;Dt===void 0&&(Dt=1),Y.setLineWidth(Dt*Nt()),J.isLineSegments?qt.setMode(H.LINES):J.isLineLoop?qt.setMode(H.LINE_LOOP):qt.setMode(H.LINE_STRIP)}else J.isPoints?qt.setMode(H.POINTS):J.isSprite&&qt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)qt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(M.get("WEBGL_multi_draw"))qt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Dt=J._multiDrawStarts,pe=J._multiDrawCounts,jt=J._multiDrawCount,Fe=Ct?I.get(Ct).bytesPerElement:1,Xn=D.get(ot).currentProgram.getUniforms();for(let Ae=0;Ae<jt;Ae++)Xn.setValue(H,"_gl_DrawID",Ae),qt.render(Dt[Ae]/Fe,pe[Ae])}else if(J.isInstancedMesh)qt.renderInstances(Yt,Qt,J.count);else if(st.isInstancedBufferGeometry){const Dt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,pe=Math.min(st.instanceCount,Dt);qt.renderInstances(Yt,Qt,pe)}else qt.render(Yt,Qt)};function ae(U,K,st){U.transparent===!0&&U.side===rn&&U.forceSinglePass===!1?(U.side=Te,U.needsUpdate=!0,Gi(U,K,st),U.side=bn,U.needsUpdate=!0,Gi(U,K,st),U.side=rn):Gi(U,K,st)}this.compile=function(U,K,st=null){st===null&&(st=U),h=ft.get(st),h.init(K),x.push(h),st.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),U!==st&&U.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights();const ot=new Set;return U.traverse(function(J){const xt=J.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){const wt=xt[bt];ae(wt,st,J),ot.add(wt)}else ae(xt,st,J),ot.add(xt)}),x.pop(),h=null,ot},this.compileAsync=function(U,K,st=null){const ot=this.compile(U,K,st);return new Promise(J=>{function xt(){if(ot.forEach(function(bt){D.get(bt).currentProgram.isReady()&&ot.delete(bt)}),ot.size===0){J(U);return}setTimeout(xt,10)}M.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Wt=null;function se(U){Wt&&Wt(U)}function ee(){ue.stop()}function hn(){ue.start()}const ue=new ul;ue.setAnimationLoop(se),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(U){Wt=U,nt.setAnimationLoop(U),U===null?ue.stop():ue.start()},nt.addEventListener("sessionstart",ee),nt.addEventListener("sessionend",hn),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(K),K=nt.getCamera()),U.isScene===!0&&U.onBeforeRender(S,U,K,C),h=ft.get(U,x.length),h.init(K),x.push(h),gt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),pt.setFromProjectionMatrix(gt),Q=this.localClippingEnabled,q=Pt.init(this.clippingPlanes,Q),_=ht.get(U,d.length),_.init(),d.push(_),nt.enabled===!0&&nt.isPresenting===!0){const xt=S.xr.getDepthSensingMesh();xt!==null&&Ze(xt,K,-1/0,S.sortObjects)}Ze(U,K,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort($,tt),Rt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Rt&&St.addToRenderList(_,U),this.info.render.frame++,q===!0&&Pt.beginShadows();const st=h.state.shadowsArray;mt.render(st,U,K),q===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=_.opaque,J=_.transmissive;if(h.setupLights(),K.isArrayCamera){const xt=K.cameras;if(J.length>0)for(let bt=0,wt=xt.length;bt<wt;bt++){const Ct=xt[bt];Ti(ot,J,U,Ct)}Rt&&St.render(U);for(let bt=0,wt=xt.length;bt<wt;bt++){const Ct=xt[bt];Cn(_,U,Ct,Ct.viewport)}}else J.length>0&&Ti(ot,J,U,K),Rt&&St.render(U),Cn(_,U,K);C!==null&&(G.updateMultisampleRenderTarget(C),G.updateRenderTargetMipmap(C)),U.isScene===!0&&U.onAfterRender(S,U,K),Lt.resetDefaultState(),N=-1,y=null,x.pop(),x.length>0?(h=x[x.length-1],q===!0&&Pt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ze(U,K,st,ot){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)st=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)h.pushLight(U),U.castShadow&&h.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||pt.intersectsSprite(U)){ot&&Mt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(gt);const bt=et.update(U),wt=U.material;wt.visible&&_.push(U,bt,wt,st,Mt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||pt.intersectsObject(U))){const bt=et.update(U),wt=U.material;if(ot&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Mt.copy(U.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Mt.copy(bt.boundingSphere.center)),Mt.applyMatrix4(U.matrixWorld).applyMatrix4(gt)),Array.isArray(wt)){const Ct=bt.groups;for(let Ot=0,Bt=Ct.length;Ot<Bt;Ot++){const It=Ct[Ot],Yt=wt[It.materialIndex];Yt&&Yt.visible&&_.push(U,bt,Yt,st,Mt.z,It)}}else wt.visible&&_.push(U,bt,wt,st,Mt.z,null)}}const xt=U.children;for(let bt=0,wt=xt.length;bt<wt;bt++)Ze(xt[bt],K,st,ot)}function Cn(U,K,st,ot){const J=U.opaque,xt=U.transmissive,bt=U.transparent;h.setupLightsView(st),q===!0&&Pt.setGlobalState(S.clippingPlanes,st),ot&&Y.viewport(T.copy(ot)),J.length>0&&Hi(J,K,st),xt.length>0&&Hi(xt,K,st),bt.length>0&&Hi(bt,K,st),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Ti(U,K,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ot.id]===void 0&&(h.state.transmissionRenderTarget[ot.id]=new Hn(1,1,{generateMipmaps:!0,type:M.has("EXT_color_buffer_half_float")||M.has("EXT_color_buffer_float")?on:cn,minFilter:En,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const xt=h.state.transmissionRenderTarget[ot.id],bt=ot.viewport||T;xt.setSize(bt.z,bt.w);const wt=S.getRenderTarget();S.setRenderTarget(xt),S.getClearColor(O),v=S.getClearAlpha(),v<1&&S.setClearColor(16777215,.5),Rt?St.render(st):S.clear();const Ct=S.toneMapping;S.toneMapping=Tn;const Ot=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),h.setupLightsView(ot),q===!0&&Pt.setGlobalState(S.clippingPlanes,ot),Hi(U,st,ot),G.updateMultisampleRenderTarget(xt),G.updateRenderTargetMipmap(xt),M.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let It=0,Yt=K.length;It<Yt;It++){const Jt=K[It],Qt=Jt.object,be=Jt.geometry,qt=Jt.material,Dt=Jt.group;if(qt.side===rn&&Qt.layers.test(ot.layers)){const pe=qt.side;qt.side=Te,qt.needsUpdate=!0,ms(Qt,st,ot,be,qt,Dt),qt.side=pe,qt.needsUpdate=!0,Bt=!0}}Bt===!0&&(G.updateMultisampleRenderTarget(xt),G.updateRenderTargetMipmap(xt))}S.setRenderTarget(wt),S.setClearColor(O,v),Ot!==void 0&&(ot.viewport=Ot),S.toneMapping=Ct}function Hi(U,K,st){const ot=K.isScene===!0?K.overrideMaterial:null;for(let J=0,xt=U.length;J<xt;J++){const bt=U[J],wt=bt.object,Ct=bt.geometry,Ot=ot===null?bt.material:ot,Bt=bt.group;wt.layers.test(st.layers)&&ms(wt,K,st,Ct,Ot,Bt)}}function ms(U,K,st,ot,J,xt){U.onBeforeRender(S,K,st,ot,J,xt),U.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),J.transparent===!0&&J.side===rn&&J.forceSinglePass===!1?(J.side=Te,J.needsUpdate=!0,S.renderBufferDirect(st,K,ot,J,U,xt),J.side=bn,J.needsUpdate=!0,S.renderBufferDirect(st,K,ot,J,U,xt),J.side=rn):S.renderBufferDirect(st,K,ot,J,U,xt),U.onAfterRender(S,K,st,ot,J,xt)}function Gi(U,K,st){K.isScene!==!0&&(K=Et);const ot=D.get(U),J=h.state.lights,xt=h.state.shadowsArray,bt=J.state.version,wt=j.getParameters(U,J.state,xt,K,st),Ct=j.getProgramCacheKey(wt);let Ot=ot.programs;ot.environment=U.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(U.isMeshStandardMaterial?E:R).get(U.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,Ot===void 0&&(U.addEventListener("dispose",At),Ot=new Map,ot.programs=Ot);let Bt=Ot.get(Ct);if(Bt!==void 0){if(ot.currentProgram===Bt&&ot.lightsStateVersion===bt)return gs(U,wt),Bt}else wt.uniforms=j.getUniforms(U),U.onBeforeCompile(wt,S),Bt=j.acquireProgram(wt,Ct),Ot.set(Ct,Bt),ot.uniforms=wt.uniforms;const It=ot.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(It.clippingPlanes=Pt.uniform),gs(U,wt),ot.needsLights=Tl(U),ot.lightsStateVersion=bt,ot.needsLights&&(It.ambientLightColor.value=J.state.ambient,It.lightProbe.value=J.state.probe,It.directionalLights.value=J.state.directional,It.directionalLightShadows.value=J.state.directionalShadow,It.spotLights.value=J.state.spot,It.spotLightShadows.value=J.state.spotShadow,It.rectAreaLights.value=J.state.rectArea,It.ltc_1.value=J.state.rectAreaLTC1,It.ltc_2.value=J.state.rectAreaLTC2,It.pointLights.value=J.state.point,It.pointLightShadows.value=J.state.pointShadow,It.hemisphereLights.value=J.state.hemi,It.directionalShadowMap.value=J.state.directionalShadowMap,It.directionalShadowMatrix.value=J.state.directionalShadowMatrix,It.spotShadowMap.value=J.state.spotShadowMap,It.spotLightMatrix.value=J.state.spotLightMatrix,It.spotLightMap.value=J.state.spotLightMap,It.pointShadowMap.value=J.state.pointShadowMap,It.pointShadowMatrix.value=J.state.pointShadowMatrix),ot.currentProgram=Bt,ot.uniformsList=null,Bt}function _s(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=Mr.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function gs(U,K){const st=D.get(U);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function El(U,K,st,ot,J){K.isScene!==!0&&(K=Et),G.resetTextureUnits();const xt=K.fog,bt=ot.isMeshStandardMaterial?K.environment:null,wt=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fn,Ct=(ot.isMeshStandardMaterial?E:R).get(ot.envMap||bt),Ot=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Bt=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),It=!!st.morphAttributes.position,Yt=!!st.morphAttributes.normal,Jt=!!st.morphAttributes.color;let Qt=Tn;ot.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Qt=S.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,qt=be!==void 0?be.length:0,Dt=D.get(ot),pe=h.state.lights;if(q===!0&&(Q===!0||U!==y)){const Ue=U===y&&ot.id===N;Pt.setState(ot,U,Ue)}let jt=!1;ot.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==pe.state.version||Dt.outputColorSpace!==wt||J.isBatchedMesh&&Dt.batching===!1||!J.isBatchedMesh&&Dt.batching===!0||J.isBatchedMesh&&Dt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Dt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Dt.instancing===!1||!J.isInstancedMesh&&Dt.instancing===!0||J.isSkinnedMesh&&Dt.skinning===!1||!J.isSkinnedMesh&&Dt.skinning===!0||J.isInstancedMesh&&Dt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Dt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Dt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Dt.instancingMorph===!1&&J.morphTexture!==null||Dt.envMap!==Ct||ot.fog===!0&&Dt.fog!==xt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Pt.numPlanes||Dt.numIntersection!==Pt.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==Bt||Dt.morphTargets!==It||Dt.morphNormals!==Yt||Dt.morphColors!==Jt||Dt.toneMapping!==Qt||Dt.morphTargetsCount!==qt)&&(jt=!0):(jt=!0,Dt.__version=ot.version);let Fe=Dt.currentProgram;jt===!0&&(Fe=Gi(ot,K,J));let Xn=!1,Ae=!1,kr=!1;const ne=Fe.getUniforms(),un=Dt.uniforms;if(Y.useProgram(Fe.program)&&(Xn=!0,Ae=!0,kr=!0),ot.id!==N&&(N=ot.id,Ae=!0),Xn||y!==U){ne.setValue(H,"projectionMatrix",U.projectionMatrix),ne.setValue(H,"viewMatrix",U.matrixWorldInverse);const Ue=ne.map.cameraPosition;Ue!==void 0&&Ue.setValue(H,vt.setFromMatrixPosition(U.matrixWorld)),at.logarithmicDepthBuffer&&ne.setValue(H,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ne.setValue(H,"isOrthographic",U.isOrthographicCamera===!0),y!==U&&(y=U,Ae=!0,kr=!0)}if(J.isSkinnedMesh){ne.setOptional(H,J,"bindMatrix"),ne.setOptional(H,J,"bindMatrixInverse");const Ue=J.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ne.setValue(H,"boneTexture",Ue.boneTexture,G))}J.isBatchedMesh&&(ne.setOptional(H,J,"batchingTexture"),ne.setValue(H,"batchingTexture",J._matricesTexture,G),ne.setOptional(H,J,"batchingIdTexture"),ne.setValue(H,"batchingIdTexture",J._indirectTexture,G),ne.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&ne.setValue(H,"batchingColorTexture",J._colorsTexture,G));const Hr=st.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&kt.update(J,st,Fe),(Ae||Dt.receiveShadow!==J.receiveShadow)&&(Dt.receiveShadow=J.receiveShadow,ne.setValue(H,"receiveShadow",J.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(un.envMap.value=Ct,un.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(un.envMapIntensity.value=K.environmentIntensity),Ae&&(ne.setValue(H,"toneMappingExposure",S.toneMappingExposure),Dt.needsLights&&yl(un,kr),xt&&ot.fog===!0&&dt.refreshFogUniforms(un,xt),dt.refreshMaterialUniforms(un,ot,k,V,h.state.transmissionRenderTarget[U.id]),Mr.upload(H,_s(Dt),un,G)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Mr.upload(H,_s(Dt),un,G),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ne.setValue(H,"center",J.center),ne.setValue(H,"modelViewMatrix",J.modelViewMatrix),ne.setValue(H,"normalMatrix",J.normalMatrix),ne.setValue(H,"modelMatrix",J.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Ue=ot.uniformsGroups;for(let Gr=0,bl=Ue.length;Gr<bl;Gr++){const vs=Ue[Gr];Kt.update(vs,Fe),Kt.bind(vs,Fe)}}return Fe}function yl(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function Tl(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(U,K,st){D.get(U.texture).__webglTexture=K,D.get(U.depthTexture).__webglTexture=st;const ot=D.get(U);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=st===void 0,ot.__autoAllocateDepthBuffer||M.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,K){const st=D.get(U);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(U,K=0,st=0){C=U,P=K,L=st;let ot=!0,J=null,xt=!1,bt=!1;if(U){const Ct=D.get(U);Ct.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1):Ct.__webglFramebuffer===void 0?G.setupRenderTarget(U):Ct.__hasExternalTextures&&G.rebindTextures(U,D.get(U.texture).__webglTexture,D.get(U.depthTexture).__webglTexture);const Ot=U.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Bt=D.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Bt[K])?J=Bt[K][st]:J=Bt[K],xt=!0):U.samples>0&&G.useMultisampledRTT(U)===!1?J=D.get(U).__webglMultisampledFramebuffer:Array.isArray(Bt)?J=Bt[st]:J=Bt,T.copy(U.viewport),B.copy(U.scissor),w=U.scissorTest}else T.copy(ct).multiplyScalar(k).floor(),B.copy(W).multiplyScalar(k).floor(),w=X;if(Y.bindFramebuffer(H.FRAMEBUFFER,J)&&ot&&Y.drawBuffers(U,J),Y.viewport(T),Y.scissor(B),Y.setScissorTest(w),xt){const Ct=D.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,st)}else if(bt){const Ct=D.get(U.texture),Ot=K||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ct.__webglTexture,st||0,Ot)}N=-1},this.readRenderTargetPixels=function(U,K,st,ot,J,xt,bt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=D.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){Y.bindFramebuffer(H.FRAMEBUFFER,wt);try{const Ct=U.texture,Ot=Ct.format,Bt=Ct.type;if(!at.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-ot&&st>=0&&st<=U.height-J&&H.readPixels(K,st,ot,J,Ut.convert(Ot),Ut.convert(Bt),xt)}finally{const Ct=C!==null?D.get(C).__webglFramebuffer:null;Y.bindFramebuffer(H.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(U,K,st,ot,J,xt,bt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=D.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){Y.bindFramebuffer(H.FRAMEBUFFER,wt);try{const Ct=U.texture,Ot=Ct.format,Bt=Ct.type;if(!at.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=U.width-ot&&st>=0&&st<=U.height-J){const It=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.bufferData(H.PIXEL_PACK_BUFFER,xt.byteLength,H.STREAM_READ),H.readPixels(K,st,ot,J,Ut.convert(Ot),Ut.convert(Bt),0),H.flush();const Yt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await qc(H,Yt,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xt)}finally{H.deleteBuffer(It),H.deleteSync(Yt)}return xt}}finally{const Ct=C!==null?D.get(C).__webglFramebuffer:null;Y.bindFramebuffer(H.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(U,K=null,st=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,U=arguments[1]);const ot=Math.pow(2,-st),J=Math.floor(U.image.width*ot),xt=Math.floor(U.image.height*ot),bt=K!==null?K.x:0,wt=K!==null?K.y:0;G.setTexture2D(U,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,bt,wt,J,xt),Y.unbindTexture()},this.copyTextureToTexture=function(U,K,st=null,ot=null,J=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,U=arguments[1],K=arguments[2],J=arguments[3]||0,st=null);let xt,bt,wt,Ct,Ot,Bt;st!==null?(xt=st.max.x-st.min.x,bt=st.max.y-st.min.y,wt=st.min.x,Ct=st.min.y):(xt=U.image.width,bt=U.image.height,wt=0,Ct=0),ot!==null?(Ot=ot.x,Bt=ot.y):(Ot=0,Bt=0);const It=Ut.convert(K.format),Yt=Ut.convert(K.type);G.setTexture2D(K,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const Jt=H.getParameter(H.UNPACK_ROW_LENGTH),Qt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),be=H.getParameter(H.UNPACK_SKIP_PIXELS),qt=H.getParameter(H.UNPACK_SKIP_ROWS),Dt=H.getParameter(H.UNPACK_SKIP_IMAGES),pe=U.isCompressedTexture?U.mipmaps[J]:U.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,wt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ct),U.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,J,Ot,Bt,xt,bt,It,Yt,pe.data):U.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,J,Ot,Bt,pe.width,pe.height,It,pe.data):H.texSubImage2D(H.TEXTURE_2D,J,Ot,Bt,xt,bt,It,Yt,pe),H.pixelStorei(H.UNPACK_ROW_LENGTH,Jt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,be),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Dt),J===0&&K.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(U,K,st=null,ot=null,J=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,ot=arguments[1]||null,U=arguments[2],K=arguments[3],J=arguments[4]||0);let xt,bt,wt,Ct,Ot,Bt,It,Yt,Jt;const Qt=U.isCompressedTexture?U.mipmaps[J]:U.image;st!==null?(xt=st.max.x-st.min.x,bt=st.max.y-st.min.y,wt=st.max.z-st.min.z,Ct=st.min.x,Ot=st.min.y,Bt=st.min.z):(xt=Qt.width,bt=Qt.height,wt=Qt.depth,Ct=0,Ot=0,Bt=0),ot!==null?(It=ot.x,Yt=ot.y,Jt=ot.z):(It=0,Yt=0,Jt=0);const be=Ut.convert(K.format),qt=Ut.convert(K.type);let Dt;if(K.isData3DTexture)G.setTexture3D(K,0),Dt=H.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)G.setTexture2DArray(K,0),Dt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const pe=H.getParameter(H.UNPACK_ROW_LENGTH),jt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Fe=H.getParameter(H.UNPACK_SKIP_PIXELS),Xn=H.getParameter(H.UNPACK_SKIP_ROWS),Ae=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Qt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ct),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ot),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Bt),U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Dt,J,It,Yt,Jt,xt,bt,wt,be,qt,Qt.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Dt,J,It,Yt,Jt,xt,bt,wt,be,Qt.data):H.texSubImage3D(Dt,J,It,Yt,Jt,xt,bt,wt,be,qt,Qt),H.pixelStorei(H.UNPACK_ROW_LENGTH,pe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,jt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Fe),H.pixelStorei(H.UNPACK_SKIP_ROWS,Xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ae),J===0&&K.generateMipmaps&&H.generateMipmap(Dt),Y.unbindTexture()},this.initRenderTarget=function(U){D.get(U).__webglFramebuffer===void 0&&G.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?G.setTextureCube(U,0):U.isData3DTexture?G.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?G.setTexture2DArray(U,0):G.setTexture2D(U,0),Y.unbindTexture()},this.resetState=function(){P=0,L=0,C=null,Y.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===cs?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Fr?"display-p3":"srgb"}}class xo extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sm extends xe{constructor(t=null,e=1,n=1,r,a,o,s,l,c=ye,f=ye,p,m){super(null,o,s,l,c,f,r,a,p,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr extends wn{constructor(t=1,e=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const f=[],p=new it,m=new it,u=[],g=[],_=[],h=[];for(let d=0;d<=n;d++){const x=[],S=d/n;let b=0;d===0&&o===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const L=P/e;p.x=-t*Math.cos(r+L*a)*Math.sin(o+S*s),p.y=t*Math.cos(o+S*s),p.z=t*Math.sin(r+L*a)*Math.sin(o+S*s),g.push(p.x,p.y,p.z),m.copy(p).normalize(),_.push(m.x,m.y,m.z),h.push(L+b,1-S),x.push(c++)}f.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const S=f[d][x+1],b=f[d][x],P=f[d+1][x],L=f[d+1][x+1];(d!==0||o>0)&&u.push(S,b,L),(d!==n-1||l<Math.PI)&&u.push(b,P,L)}this.setIndex(u),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class om extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lm extends om{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Dr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cm{constructor(t,e,n){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){s++,a===!1&&r.onStart!==void 0&&r.onStart(f,o,s),a=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){const p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=c.length;p<m;p+=2){const u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(f))return g}return null}}}const dm=new cm;class ki{constructor(t){this.manager=t!==void 0?t:dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,a){n.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const en={};class fm extends Error{constructor(t,e){super(t),this.response=e}}class hm extends ki{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Dr.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(en[t]!==void 0){en[t].push({onLoad:e,onProgress:n,onError:r});return}en[t]=[],en[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=en[t],p=c.body.getReader(),m=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=m?parseInt(m):0,g=u!==0;let _=0;const h=new ReadableStream({start(d){x();function x(){p.read().then(({done:S,value:b})=>{if(S)d.close();else{_+=b.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:u});for(let L=0,C=f.length;L<C;L++){const N=f[L];N.onProgress&&N.onProgress(P)}d.enqueue(b),x()}},S=>{d.error(S)})}}});return new Response(h)}else throw new fm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,s));case"json":return c.json();default:if(s===void 0)return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(s),m=p&&p[1]?p[1].toLowerCase():void 0,u=new TextDecoder(m);return c.arrayBuffer().then(g=>u.decode(g))}}}).then(c=>{Dr.add(t,c);const f=en[t];delete en[t];for(let p=0,m=f.length;p<m;p++){const u=f[p];u.onLoad&&u.onLoad(c)}}).catch(c=>{const f=en[t];if(f===void 0)throw this.manager.itemError(t),c;delete en[t];for(let p=0,m=f.length;p<m;p++){const u=f[p];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class um extends ki{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,o=Dr.get(t);if(o!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o;const s=Ni("img");function l(){f(),Dr.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(p){f(),r&&r(p),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(t),s.src=t,s}}class pm extends ki{constructor(t){super(t)}load(t,e,n,r){const a=this,o=new sm,s=new hm(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(a.withCredentials),s.load(t,function(l){let c;try{c=a.parse(l)}catch(f){if(r!==void 0)r(f);else{console.error(f);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:sn,o.wrapT=c.wrapT!==void 0?c.wrapT:sn,o.magFilter=c.magFilter!==void 0?c.magFilter:ge,o.minFilter=c.minFilter!==void 0?c.minFilter:ge,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=En),c.mipmapCount===1&&(o.minFilter=ge),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,r),o}}class xl extends ki{constructor(t){super(t)}load(t,e,n,r){const a=new xe,o=new um(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(s){a.image=s,a.needsUpdate=!0,e!==void 0&&e(a)},n,r),a}}class So{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ns}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ns);const Mo={type:"change"},ga={type:"start"},Eo={type:"end"},ur=new nl,yo=new Sn,mm=Math.cos(70*Xc.DEG2RAD);class _m extends Wn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qn.ROTATE,MIDDLE:qn.DOLLY,RIGHT:qn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ft),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ft),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mo),n.update(),a=r.NONE},this.update=function(){const A=new it,nt=new Gn().setFromUnitVectors(t.up,new it(0,1,0)),rt=nt.clone().invert(),lt=new it,ut=new Gn,At=new it,Ft=2*Math.PI;return function(ae=null){const Wt=n.object.position;A.copy(Wt).sub(n.target),A.applyQuaternion(nt),s.setFromVector3(A),n.autoRotate&&a===r.NONE&&w(T(ae)),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let se=n.minAzimuthAngle,ee=n.maxAzimuthAngle;isFinite(se)&&isFinite(ee)&&(se<-Math.PI?se+=Ft:se>Math.PI&&(se-=Ft),ee<-Math.PI?ee+=Ft:ee>Math.PI&&(ee-=Ft),se<=ee?s.theta=Math.max(se,Math.min(ee,s.theta)):s.theta=s.theta>(se+ee)/2?Math.max(se,s.theta):Math.min(ee,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let hn=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)s.radius=ct(s.radius);else{const ue=s.radius;s.radius=ct(s.radius*c),hn=ue!=s.radius}if(A.setFromSpherical(s),A.applyQuaternion(rt),Wt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),n.zoomToCursor&&L){let ue=null;if(n.object.isPerspectiveCamera){const Ze=A.length();ue=ct(Ze*c);const Cn=Ze-ue;n.object.position.addScaledVector(b,Cn),n.object.updateMatrixWorld(),hn=!!Cn}else if(n.object.isOrthographicCamera){const Ze=new it(P.x,P.y,0);Ze.unproject(n.object);const Cn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),hn=Cn!==n.object.zoom;const Ti=new it(P.x,P.y,0);Ti.unproject(n.object),n.object.position.sub(Ti).add(Ze),n.object.updateMatrixWorld(),ue=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ue).add(n.object.position):(ur.origin.copy(n.object.position),ur.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ur.direction))<mm?t.lookAt(n.target):(yo.setFromNormalAndCoplanarPoint(n.object.up,n.target),ur.intersectPlane(yo,n.target))))}else if(n.object.isOrthographicCamera){const ue=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ue!==n.object.zoom&&(n.object.updateProjectionMatrix(),hn=!0)}return c=1,L=!1,hn||lt.distanceToSquared(n.object.position)>o||8*(1-ut.dot(n.object.quaternion))>o||At.distanceToSquared(n.target)>o?(n.dispatchEvent(Mo),lt.copy(n.object.position),ut.copy(n.object.quaternion),At.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",St),n.domElement.removeEventListener("pointerdown",G),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E),n.domElement.getRootNode().removeEventListener("keydown",dt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ft),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new So,l=new So;let c=1;const f=new it,p=new zt,m=new zt,u=new zt,g=new zt,_=new zt,h=new zt,d=new zt,x=new zt,S=new zt,b=new it,P=new zt;let L=!1;const C=[],N={};let y=!1;function T(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function B(A){const nt=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*nt)}function w(A){l.theta-=A}function O(A){l.phi-=A}const v=function(){const A=new it;return function(rt,lt){A.setFromMatrixColumn(lt,0),A.multiplyScalar(-rt),f.add(A)}}(),z=function(){const A=new it;return function(rt,lt){n.screenSpacePanning===!0?A.setFromMatrixColumn(lt,1):(A.setFromMatrixColumn(lt,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(rt),f.add(A)}}(),V=function(){const A=new it;return function(rt,lt){const ut=n.domElement;if(n.object.isPerspectiveCamera){const At=n.object.position;A.copy(At).sub(n.target);let Ft=A.length();Ft*=Math.tan(n.object.fov/2*Math.PI/180),v(2*rt*Ft/ut.clientHeight,n.object.matrix),z(2*lt*Ft/ut.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(v(rt*(n.object.right-n.object.left)/n.object.zoom/ut.clientWidth,n.object.matrix),z(lt*(n.object.top-n.object.bottom)/n.object.zoom/ut.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(A,nt){if(!n.zoomToCursor)return;L=!0;const rt=n.domElement.getBoundingClientRect(),lt=A-rt.left,ut=nt-rt.top,At=rt.width,Ft=rt.height;P.x=lt/At*2-1,P.y=-(ut/Ft)*2+1,b.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function ct(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function W(A){p.set(A.clientX,A.clientY)}function X(A){tt(A.clientX,A.clientX),d.set(A.clientX,A.clientY)}function pt(A){g.set(A.clientX,A.clientY)}function q(A){m.set(A.clientX,A.clientY),u.subVectors(m,p).multiplyScalar(n.rotateSpeed);const nt=n.domElement;w(2*Math.PI*u.x/nt.clientHeight),O(2*Math.PI*u.y/nt.clientHeight),p.copy(m),n.update()}function Q(A){x.set(A.clientX,A.clientY),S.subVectors(x,d),S.y>0?k(B(S.y)):S.y<0&&$(B(S.y)),d.copy(x),n.update()}function gt(A){_.set(A.clientX,A.clientY),h.subVectors(_,g).multiplyScalar(n.panSpeed),V(h.x,h.y),g.copy(_),n.update()}function vt(A){tt(A.clientX,A.clientY),A.deltaY<0?$(B(A.deltaY)):A.deltaY>0&&k(B(A.deltaY)),n.update()}function Mt(A){let nt=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),nt=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),nt=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),nt=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),nt=!0;break}nt&&(A.preventDefault(),n.update())}function Et(A){if(C.length===1)p.set(A.pageX,A.pageY);else{const nt=Lt(A),rt=.5*(A.pageX+nt.x),lt=.5*(A.pageY+nt.y);p.set(rt,lt)}}function Rt(A){if(C.length===1)g.set(A.pageX,A.pageY);else{const nt=Lt(A),rt=.5*(A.pageX+nt.x),lt=.5*(A.pageY+nt.y);g.set(rt,lt)}}function Nt(A){const nt=Lt(A),rt=A.pageX-nt.x,lt=A.pageY-nt.y,ut=Math.sqrt(rt*rt+lt*lt);d.set(0,ut)}function H(A){n.enableZoom&&Nt(A),n.enablePan&&Rt(A)}function Vt(A){n.enableZoom&&Nt(A),n.enableRotate&&Et(A)}function M(A){if(C.length==1)m.set(A.pageX,A.pageY);else{const rt=Lt(A),lt=.5*(A.pageX+rt.x),ut=.5*(A.pageY+rt.y);m.set(lt,ut)}u.subVectors(m,p).multiplyScalar(n.rotateSpeed);const nt=n.domElement;w(2*Math.PI*u.x/nt.clientHeight),O(2*Math.PI*u.y/nt.clientHeight),p.copy(m)}function at(A){if(C.length===1)_.set(A.pageX,A.pageY);else{const nt=Lt(A),rt=.5*(A.pageX+nt.x),lt=.5*(A.pageY+nt.y);_.set(rt,lt)}h.subVectors(_,g).multiplyScalar(n.panSpeed),V(h.x,h.y),g.copy(_)}function Y(A){const nt=Lt(A),rt=A.pageX-nt.x,lt=A.pageY-nt.y,ut=Math.sqrt(rt*rt+lt*lt);x.set(0,ut),S.set(0,Math.pow(x.y/d.y,n.zoomSpeed)),k(S.y),d.copy(x);const At=(A.pageX+nt.x)*.5,Ft=(A.pageY+nt.y)*.5;tt(At,Ft)}function F(A){n.enableZoom&&Y(A),n.enablePan&&at(A)}function D(A){n.enableZoom&&Y(A),n.enableRotate&&M(A)}function G(A){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",E)),!yt(A)&&(kt(A),A.pointerType==="touch"?Pt(A):I(A)))}function R(A){n.enabled!==!1&&(A.pointerType==="touch"?mt(A):Z(A))}function E(A){switch(Tt(A),C.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E),n.dispatchEvent(Eo),a=r.NONE;break;case 1:const nt=C[0],rt=N[nt];Pt({pointerId:nt,pageX:rt.x,pageY:rt.y});break}}function I(A){let nt;switch(A.button){case 0:nt=n.mouseButtons.LEFT;break;case 1:nt=n.mouseButtons.MIDDLE;break;case 2:nt=n.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case qn.DOLLY:if(n.enableZoom===!1)return;X(A),a=r.DOLLY;break;case qn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;pt(A),a=r.PAN}else{if(n.enableRotate===!1)return;W(A),a=r.ROTATE}break;case qn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;W(A),a=r.ROTATE}else{if(n.enablePan===!1)return;pt(A),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(ga)}function Z(A){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;q(A);break;case r.DOLLY:if(n.enableZoom===!1)return;Q(A);break;case r.PAN:if(n.enablePan===!1)return;gt(A);break}}function et(A){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(A.preventDefault(),n.dispatchEvent(ga),vt(j(A)),n.dispatchEvent(Eo))}function j(A){const nt=A.deltaMode,rt={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(nt){case 1:rt.deltaY*=16;break;case 2:rt.deltaY*=100;break}return A.ctrlKey&&!y&&(rt.deltaY*=10),rt}function dt(A){A.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",ht,{passive:!0,capture:!0}))}function ht(A){A.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",ht,{passive:!0,capture:!0}))}function ft(A){n.enabled===!1||n.enablePan===!1||Mt(A)}function Pt(A){switch(Ut(A),C.length){case 1:switch(n.touches.ONE){case jn.ROTATE:if(n.enableRotate===!1)return;Et(A),a=r.TOUCH_ROTATE;break;case jn.PAN:if(n.enablePan===!1)return;Rt(A),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(A),a=r.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Vt(A),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(ga)}function mt(A){switch(Ut(A),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;M(A),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;at(A),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(A),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(A),n.update();break;default:a=r.NONE}}function St(A){n.enabled!==!1&&A.preventDefault()}function kt(A){C.push(A.pointerId)}function Tt(A){delete N[A.pointerId];for(let nt=0;nt<C.length;nt++)if(C[nt]==A.pointerId){C.splice(nt,1);return}}function yt(A){for(let nt=0;nt<C.length;nt++)if(C[nt]==A.pointerId)return!0;return!1}function Ut(A){let nt=N[A.pointerId];nt===void 0&&(nt=new zt,N[A.pointerId]=nt),nt.set(A.pageX,A.pageY)}function Lt(A){const nt=A.pointerId===C[0]?C[1]:C[0];return N[nt]}n.domElement.addEventListener("contextmenu",St),n.domElement.addEventListener("pointerdown",G),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",et,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}class gm extends pm{constructor(t){super(t),this.type=on}parse(t){const o=function(N,y){switch(N){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},f=`
`,p=function(N,y,T){y=y||1024;let w=N.pos,O=-1,v=0,z="",V=String.fromCharCode.apply(null,new Uint16Array(N.subarray(w,w+128)));for(;0>(O=V.indexOf(f))&&v<y&&w<N.byteLength;)z+=V,v+=V.length,w+=128,V+=String.fromCharCode.apply(null,new Uint16Array(N.subarray(w,w+128)));return-1<O?(N.pos+=v+O+1,z+V.slice(0,O)):!1},m=function(N){const y=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,v={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,V;for((N.pos>=N.byteLength||!(z=p(N)))&&o(1,"no header found"),(V=z.match(y))||o(3,"bad initial token"),v.valid|=1,v.programtype=V[1],v.string+=z+`
`;z=p(N),z!==!1;){if(v.string+=z+`
`,z.charAt(0)==="#"){v.comments+=z+`
`;continue}if((V=z.match(T))&&(v.gamma=parseFloat(V[1])),(V=z.match(B))&&(v.exposure=parseFloat(V[1])),(V=z.match(w))&&(v.valid|=2,v.format=V[1]),(V=z.match(O))&&(v.valid|=4,v.height=parseInt(V[1],10),v.width=parseInt(V[2],10)),v.valid&2&&v.valid&4)break}return v.valid&2||o(3,"missing format specifier"),v.valid&4||o(3,"missing image size specifier"),v},u=function(N,y,T){const B=y;if(B<8||B>32767||N[0]!==2||N[1]!==2||N[2]&128)return new Uint8Array(N);B!==(N[2]<<8|N[3])&&o(3,"wrong scanline width");const w=new Uint8Array(4*y*T);w.length||o(4,"unable to allocate buffer space");let O=0,v=0;const z=4*B,V=new Uint8Array(4),k=new Uint8Array(z);let $=T;for(;$>0&&v<N.byteLength;){v+4>N.byteLength&&o(1),V[0]=N[v++],V[1]=N[v++],V[2]=N[v++],V[3]=N[v++],(V[0]!=2||V[1]!=2||(V[2]<<8|V[3])!=B)&&o(3,"bad rgbe scanline format");let tt=0,ct;for(;tt<z&&v<N.byteLength;){ct=N[v++];const X=ct>128;if(X&&(ct-=128),(ct===0||tt+ct>z)&&o(3,"bad scanline data"),X){const pt=N[v++];for(let q=0;q<ct;q++)k[tt++]=pt}else k.set(N.subarray(v,v+ct),tt),tt+=ct,v+=ct}const W=B;for(let X=0;X<W;X++){let pt=0;w[O]=k[X+pt],pt+=B,w[O+1]=k[X+pt],pt+=B,w[O+2]=k[X+pt],pt+=B,w[O+3]=k[X+pt],O+=4}$--}return w},g=function(N,y,T,B){const w=N[y+3],O=Math.pow(2,w-128)/255;T[B+0]=N[y+0]*O,T[B+1]=N[y+1]*O,T[B+2]=N[y+2]*O,T[B+3]=1},_=function(N,y,T,B){const w=N[y+3],O=Math.pow(2,w-128)/255;T[B+0]=Qi.toHalfFloat(Math.min(N[y+0]*O,65504)),T[B+1]=Qi.toHalfFloat(Math.min(N[y+1]*O,65504)),T[B+2]=Qi.toHalfFloat(Math.min(N[y+2]*O,65504)),T[B+3]=Qi.toHalfFloat(1)},h=new Uint8Array(t);h.pos=0;const d=m(h),x=d.width,S=d.height,b=u(h.subarray(h.pos),x,S);let P,L,C;switch(this.type){case Oe:C=b.length/4;const N=new Float32Array(C*4);for(let T=0;T<C;T++)g(b,T*4,N,T*4);P=N,L=Oe;break;case on:C=b.length/4;const y=new Uint16Array(C*4);for(let T=0;T<C;T++)_(b,T*4,y,T*4);P=y,L=on;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:S,data:P,header:d.string,gamma:d.gamma,exposure:d.exposure,type:L}}setDataType(t){return this.type=t,this}load(t,e,n,r){function a(o,s){switch(o.type){case Oe:case on:o.colorSpace=fn,o.minFilter=ge,o.magFilter=ge,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,s)}return super.load(t,a,n,r)}}const vm=`#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif
#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif
#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif
#ifdef USE_FOG
	varying float vFogDepth;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif
#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif
#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif
#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif

void main() {

	#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif
	#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif
	#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif
	#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif
	#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif

	vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif
	#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif
	#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif
	#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif
	vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif
	#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif

	vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif
	#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif
	#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif
	#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif
	vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;
	#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif
	#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif

	vViewPosition = - mvPosition.xyz;

	#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif
	#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif
	#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}`,xm=`
#define STANDARD
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float specularValue;
uniform float opacity;

varying vec3 vViewPosition;

#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
	#define saturate(a) clamp(a, 0.0, 1.0)
#endif

#define whiteComplement(a) (1.0 - saturate(a))
float pow2(const in float x) { return x * x; }
vec3 pow2(const in vec3 x) { return x * x; }
float pow3(const in float x) { return x * x * x; }
float pow4(const in float x)
{
	float x2 = x * x;
	return x2 * x2;
}
float max3(const in vec3 v) { return max(max(v.x, v.y), v.z); }
float average(const in vec3 v) { return dot(v, vec3(0.3333333)); }
highp float rand(const in vec2 uv)
{
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength(vec3 v) { return length(v); }
#else
	float precisionSafeLength(vec3 v)
	{
		float maxComponent = max3(abs(v));
		return length(v / maxComponent) * maxComponent;
	}
#endif
struct IncidentLight
{
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight
{
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection(in vec3 dir, in mat4 matrix)
{
	return normalize((matrix * vec4(dir, 0.0)).xyz);
}
vec3 inverseTransformDirection(in vec3 dir, in mat4 matrix)
{
	return normalize((vec4(dir, 0.0) * matrix).xyz);
}
mat3 transposeMat3(const in mat3 m)
{
	mat3 tmp;
	tmp[0] = vec3(m[0].x, m[1].x, m[2].x);
	tmp[1] = vec3(m[0].y, m[1].y, m[2].y);
	tmp[2] = vec3(m[0].z, m[1].z, m[2].z);
	return tmp;
}
float luminance(const in vec3 rgb)
{
	const vec3 weights = vec3(0.2126729, 0.7151522, 0.0721750);
	return dot(weights, rgb);
}
bool isPerspectiveMatrix(mat4 m)
{
	return m[2][3] == -1.0;
}
vec2 equirectUv(in vec3 dir)
{
	float u = atan(dir.z, dir.x) * RECIPROCAL_PI2 + 0.5;
	float v = asin(clamp(dir.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;
	return vec2(u, v);
}
vec3 BRDF_Lambert(const in vec3 diffuseColor)
{
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick(const in vec3 f0, const in float f90, const in float dotVH)
{
	float fresnel = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
	return f0 * (1.0 - fresnel) + (f90 * fresnel);
}
float F_Schlick(const in float f0, const in float f90, const in float dotVH)
{
	float fresnel = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
	return f0 * (1.0 - fresnel) + (f90 * fresnel);
} // validated
vec3 packNormalToRGB(const in vec3 normal)
{
	return normalize(normal) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal(const in vec3 rgb)
{
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;
const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3(256. * 256. * 256., 256. * 256., 256.);
const vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.);
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA(const in float v)
{
	vec4 r = vec4(fract(v * PackFactors), v);
	r.yzw -= r.xyz * ShiftRight8;
	return r * PackUpscale;
}
float unpackRGBAToDepth(const in vec4 v)
{
	return dot(v, UnpackFactors);
}
vec2 packDepthToRG(in highp float v)
{
	return packDepthToRGBA(v).yx;
}
float unpackRGToDepth(const in highp vec2 v)
{
	return unpackRGBAToDepth(vec4(v.xy, 0.0, 0.0));
}
vec4 pack2HalfToRGBA(vec2 v)
{
	vec4 r = vec4(v.x, fract(v.x * 255.0), v.y, fract(v.y * 255.0));
	return vec4(r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half(vec4 v)
{
	return vec2(v.x + (v.y / 255.0), v.z + (v.w / 255.0));
}
float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far)
{
	return (viewZ + near) / (near - far);
}
float orthographicDepthToViewZ(const in float depth, const in float near, const in float far)
{
	return depth * (near - far) - near;
}
float viewZToPerspectiveDepth(const in float viewZ, const in float near, const in float far)
{
	return ((near + viewZ) * far) / ((far - near) * viewZ);
}
float perspectiveDepthToViewZ(const in float depth, const in float near, const in float far)
{
	return (near * far) / ((far - near) * depth - far);
}
#ifdef DITHERING
	vec3 dithering(vec3 color)
	{
		float grid_position = rand(gl_FragCoord.xy);
		vec3 dither_shift_RGB = vec3(0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0);
		dither_shift_RGB = mix(2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position);
		return color + dither_shift_RGB;
	}
#endif
#if defined(USE_COLOR_ALPHA)
	varying vec4 vColor;
#elif defined(USE_COLOR)
	varying vec3 vColor;
#endif
#if defined(USE_UV) || defined(USE_ANISOTROPY)
	varying vec2 vUv;
#endif

#ifdef USE_MAP
	varying vec2 vMapUv;
#endif

#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif

#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif

#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif

#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif

varying vec2 vNormalMapUv;

#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif

varying vec2 vRoughnessMapUv;

uniform sampler2D specularMap;

uniform sampler2D glossinessMap;

uniform sampler2D map;

#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D(vec2 value)
	{
		return fract(1.0e4 * sin(17.0 * value.x + 0.1 * value.y) * (0.1 + abs(sin(13.0 * value.y + value.x))));
	}
	float hash3D(vec3 value)
	{
		return hash2D(vec2(hash2D(value.xy), value.z));
	}
	float getAlphaHashThreshold(vec3 position)
	{
		float maxDeriv = max(
		length(dFdx(position.xyz)),
		length(dFdy(position.xyz)));
		float pixScale = 1.0 / (ALPHA_HASH_SCALE * maxDeriv);
		vec2 pixScales = vec2(
		exp2(floor(log2(pixScale))),
		exp2(ceil(log2(pixScale))));
		vec2 alpha = vec2(
		hash3D(floor(pixScales.x * position.xyz)),
		hash3D(floor(pixScales.y * position.xyz)));
		float lerpFactor = fract(log2(pixScale));
		float x = (1.0 - lerpFactor) * alpha.x + lerpFactor * alpha.y;
		float a = min(lerpFactor, 1.0 - lerpFactor);
		vec3 cases = vec3(
		x * x / (2.0 * a * (1.0 - a)),
		(x - 0.5 * a) / (1.0 - a),
		1.0 - ((1.0 - x) * (1.0 - x) / (2.0 * a * (1.0 - a))));
		float threshold = (x < (1.0 - a))
		? ((x < a) ? cases.x : cases.y)
		: cases.z;
		return clamp(threshold, 1.0e-6, 1.0);
	}
#endif
#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif
#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif
#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif

#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace(vec3 direction)
	{
		vec3 absDirection = abs(direction);
		float face = -1.0;
		if (absDirection.x > absDirection.z)
		{
			if (absDirection.x > absDirection.y)
			face = direction.x > 0.0 ? 0.0 : 3.0;
			else
			face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		else
		{
			if (absDirection.z > absDirection.y)
			face = direction.z > 0.0 ? 2.0 : 5.0;
			else
			face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV(vec3 direction, float face)
	{
		vec2 uv;
		if (face == 0.0)
		{
			uv = vec2(direction.z, direction.y) / abs(direction.x);
		}
		else if (face == 1.0)
		{
			uv = vec2(-direction.x, -direction.z) / abs(direction.y);
		}
		else if (face == 2.0)
		{
			uv = vec2(-direction.x, direction.y) / abs(direction.z);
		}
		else if (face == 3.0)
		{
			uv = vec2(-direction.z, direction.y) / abs(direction.x);
		}
		else if (face == 4.0)
		{
			uv = vec2(-direction.x, direction.z) / abs(direction.y);
		}
		else
		{
			uv = vec2(direction.x, direction.y) / abs(direction.z);
		}
		return 0.5 * (uv + 1.0);
	}
	vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt)
	{
		float face = getFace(direction);
		float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
		mipInt = max(mipInt, cubeUV_minMipLevel);
		float faceSize = exp2(mipInt);
		highp vec2 uv = getUV(direction, face) * (faceSize - 2.0) + 1.0;
		if (face > 2.0)
		{
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * (exp2(CUBEUV_MAX_MIP) - faceSize);
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT(envMap, uv, vec2(0.0), vec2(0.0)).rgb;
		#else
			return texture2D(envMap, uv).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 -2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 -1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip(float roughness)
	{
		float mip = 0.0;
		if (roughness >= cubeUV_r1)
		{
			mip = (cubeUV_r0 - roughness) * (cubeUV_m1 - cubeUV_m0) / (cubeUV_r0 - cubeUV_r1) + cubeUV_m0;
		}
		else if (roughness >= cubeUV_r4)
		{
			mip = (cubeUV_r1 - roughness) * (cubeUV_m4 - cubeUV_m1) / (cubeUV_r1 - cubeUV_r4) + cubeUV_m1;
		}
		else if (roughness >= cubeUV_r5)
		{
			mip = (cubeUV_r4 - roughness) * (cubeUV_m5 - cubeUV_m4) / (cubeUV_r4 - cubeUV_r5) + cubeUV_m4;
		}
		else if (roughness >= cubeUV_r6)
		{
			mip = (cubeUV_r5 - roughness) * (cubeUV_m6 - cubeUV_m5) / (cubeUV_r5 - cubeUV_r6) + cubeUV_m5;
		}
		else
		{
			mip = -2.0 * log2(1.16 * roughness);
		}
		return mip;
	}
	vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness)
	{
		float mip = clamp(roughnessToMip(roughness), cubeUV_m0, CUBEUV_MAX_MIP);
		float mipF = fract(mip);
		float mipInt = floor(mip);
		vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
		if (mipF == 0.0)
		{
			return vec4(color0, 1.0);
		}
		else
		{
			vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
			return vec4(mix(color0, color1, mipF), 1.0);
		}
	}
#endif
#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif
#ifdef USE_ENVMAP
	vec3 getIBLIrradiance(const in vec3 normal)
	{
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
			vec4 envMapColor = textureCubeUV(envMap, envMapRotation * worldNormal, 1.0);
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3(0.0);
		#endif
	}
	vec3 getIBLRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness)
	{
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect(-viewDir, normal);
			reflectVec = normalize(mix(reflectVec, normal, roughness * roughness));
			reflectVec = inverseTransformDirection(reflectVec, viewMatrix);
			vec4 envMapColor = textureCubeUV(envMap, envMapRotation * reflectVec, roughness);
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3(0.0);
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy)
		{
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross(bitangent, viewDir);
				bentNormal = normalize(cross(bentNormal, bitangent));
				bentNormal = normalize(mix(bentNormal, normal, pow2(pow2(1.0 - anisotropy * (1.0 - roughness)))));
				return getIBLRadiance(viewDir, bentNormal, roughness);
			#else
				return vec3(0.0);
			#endif
		}
	#endif
#endif
#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined(USE_LIGHT_PROBES)
	uniform vec3 lightProbe[9];
#endif
vec3 shGetIrradianceAt(in vec3 normal, in vec3 shCoefficients[9])
{
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[0] * 0.886227;
	result += shCoefficients[1] * 2.0 * 0.511664 * y;
	result += shCoefficients[2] * 2.0 * 0.511664 * z;
	result += shCoefficients[3] * 2.0 * 0.511664 * x;
	result += shCoefficients[4] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[5] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[6] * (0.743125 * z * z - 0.247708);
	result += shCoefficients[7] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[8] * 0.429043 * (x * x - y * y);
	return result;
}
vec3 getLightProbeIrradiance(const in vec3 lightProbe[9], const in vec3 normal)
{
	vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
	vec3 irradiance = shGetIrradianceAt(worldNormal, lightProbe);
	return irradiance;
}
vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor)
{
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation(const in float lightDistance, const in float cutoffDistance, const in float decayExponent)
{
	float distanceFalloff = 1.0 / max(pow(lightDistance, decayExponent), 0.01);
	if (cutoffDistance > 0.0)
	{
		distanceFalloff *= pow2(saturate(1.0 - pow4(lightDistance / cutoffDistance)));
	}
	return distanceFalloff;
}
float getSpotAttenuation(const in float coneCosine, const in float penumbraCosine, const in float angleCosine)
{
	return smoothstep(coneCosine, penumbraCosine, angleCosine);
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight
	{
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];
	void getDirectionalLightInfo(const in DirectionalLight directionalLight, out IncidentLight light)
	{
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight
	{
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[NUM_POINT_LIGHTS];
	void getPointLightInfo(const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light)
	{
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize(lVector);
		float lightDistance = length(lVector);
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation(lightDistance, pointLight.distance, pointLight.decay);
		light.visible = (light.color != vec3(0.0));
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight
	{
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[NUM_SPOT_LIGHTS];
	void getSpotLightInfo(const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light)
	{
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize(lVector);
		float angleCos = dot(light.direction, spotLight.direction);
		float spotAttenuation = getSpotAttenuation(spotLight.coneCos, spotLight.penumbraCos, angleCos);
		if (spotAttenuation > 0.0)
		{
			float lightDistance = length(lVector);
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation(lightDistance, spotLight.distance, spotLight.decay);
			light.visible = (light.color != vec3(0.0));
		}
		else
		{
			light.color = vec3(0.0);
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight
	{
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;
	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight
	{
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];
	vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight, const in vec3 normal)
	{
		float dotNL = dot(normal, hemiLight.direction);
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix(hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight);
		return irradiance;
	}
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
struct CustomSpecularMaterial
{
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
};
vec3 clearcoatSpecularDirect = vec3(0.0);
vec3 clearcoatSpecularIndirect = vec3(0.0);
vec3 sheenSpecularDirect = vec3(0.0);
vec3 sheenSpecularIndirect = vec3(0.0);
vec3 Schlick_to_F0(const in vec3 f, const in float f90, const in float dotVH)
{
	float x = clamp(1.0 - dotVH, 0.0, 1.0);
	float x2 = x * x;
	float x5 = clamp(x * x2 * x2, 0.0, 0.9999);
	return (f - vec3(f90) * x5) / (1.0 - x5);
}
float V_GGX_SmithCorrelated(const in float alpha, const in float dotNL, const in float dotNV)
{
	float a2 = pow2(alpha);
	float gv = dotNL * sqrt(a2 + (1.0 - a2) * pow2(dotNV));
	float gl = dotNV * sqrt(a2 + (1.0 - a2) * pow2(dotNL));
	return 0.5 / max(gv + gl, EPSILON);
}
float D_GGX(const in float alpha, const in float dotNH)
{
	float a2 = pow2(alpha);
	float denom = pow2(dotNH) * (a2 - 1.0) + 1.0;
	return RECIPROCAL_PI * a2 / pow2(denom);
}
vec3 BRDF_GGX(const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in CustomSpecularMaterial material)
{
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2(roughness);
	vec3 halfDir = normalize(lightDir + viewDir);
	float dotNL = saturate(dot(normal, lightDir));
	float dotNV = saturate(dot(normal, viewDir));
	float dotNH = saturate(dot(normal, halfDir));
	float dotVH = saturate(dot(viewDir, halfDir));
	vec3 F = F_Schlick(f0, f90, dotVH);
	#ifdef USE_IRIDESCENCE
		F = mix(F, material.iridescenceFresnel, material.iridescence);
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot(material.anisotropyT, lightDir);
		float dotTV = dot(material.anisotropyT, viewDir);
		float dotTH = dot(material.anisotropyT, halfDir);
		float dotBL = dot(material.anisotropyB, lightDir);
		float dotBV = dot(material.anisotropyB, viewDir);
		float dotBH = dot(material.anisotropyB, halfDir);
		float V = V_GGX_SmithCorrelated_Anisotropic(material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL);
		float D = D_GGX_Anisotropic(material.alphaT, alpha, dotNH, dotTH, dotBH);
	#else
		float V = V_GGX_SmithCorrelated(alpha, dotNL, dotNV);
		float D = D_GGX(alpha, dotNH);
	#endif
	return F * (V * D);
}
vec2 LTC_Uv(const in vec3 N, const in vec3 V, const in float roughness)
{
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = (LUT_SIZE - 1.0) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate(dot(N, V));
	vec2 uv = vec2(roughness, sqrt(1.0 - dotNV));
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor(const in vec3 f)
{
	float l = length(f);
	return max((l * l + f.z) / (l + 1.0), 0.0);
}
vec3 LTC_EdgeVectorFormFactor(const in vec3 v1, const in vec3 v2)
{
	float x = dot(v1, v2);
	float y = abs(x);
	float a = 0.8543985 + (0.4965155 + 0.0145206 * y) * y;
	float b = 3.4175940 + (4.1616724 + y) * y;
	float v = a / b;
	float theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt(max(1.0 - x * x, 1e-7)) - v;
	return cross(v1, v2) * theta_sintheta;
}
vec3 LTC_Evaluate(const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[4])
{
	vec3 v1 = rectCoords[1] - rectCoords[0];
	vec3 v2 = rectCoords[3] - rectCoords[0];
	vec3 lightNormal = cross(v1, v2);
	if (dot(lightNormal, P - rectCoords[0]) < 0.0)
	return vec3(0.0);
	vec3 T1, T2;
	T1 = normalize(V - N * dot(V, N));
	T2 = -cross(N, T1);
	mat3 mat = mInv * transposeMat3(mat3(T1, T2, N));
	vec3 coords[4];
	coords[0] = mat * (rectCoords[0] - P);
	coords[1] = mat * (rectCoords[1] - P);
	coords[2] = mat * (rectCoords[2] - P);
	coords[3] = mat * (rectCoords[3] - P);
	coords[0] = normalize(coords[0]);
	coords[1] = normalize(coords[1]);
	coords[2] = normalize(coords[2]);
	coords[3] = normalize(coords[3]);
	vec3 vectorFormFactor = vec3(0.0);
	vectorFormFactor += LTC_EdgeVectorFormFactor(coords[0], coords[1]);
	vectorFormFactor += LTC_EdgeVectorFormFactor(coords[1], coords[2]);
	vectorFormFactor += LTC_EdgeVectorFormFactor(coords[2], coords[3]);
	vectorFormFactor += LTC_EdgeVectorFormFactor(coords[3], coords[0]);
	float result = LTC_ClippedSphereFormFactor(vectorFormFactor);
	return vec3(result);
}
float IBLSheenBRDF(const in vec3 normal, const in vec3 viewDir, const in float roughness)
{
	float dotNV = saturate(dot(normal, viewDir));
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp(a * dotNV + b) + (roughness < 0.25 ? 0.0 : 0.1 * (roughness - 0.25));
	return saturate(DG * RECIPROCAL_PI);
}
vec2 DFGApprox(const in vec3 normal, const in vec3 viewDir, const in float roughness)
{
	float dotNV = saturate(dot(normal, viewDir));
	const vec4 c0 = vec4(-1, -0.0275, -0.572, 0.022);
	const vec4 c1 = vec4(1, 0.0425, 1.04, -0.04);
	vec4 r = roughness * c0 + c1;
	float a004 = min(r.x * r.x, exp2(-9.28 * dotNV)) * r.x + r.y;
	vec2 fab = vec2(-1.04, 1.04) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness)
{
	vec2 fab = DFGApprox(normal, viewDir, roughness);
	return specularColor * fab.x + specularF90 * fab.y;
}

void computeMultiscattering(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter)
{
	vec2 fab = DFGApprox(normal, viewDir, roughness);
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix(specularColor, iridescenceF0, iridescence);
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + (1.0 - Fr) * 0.047619;
	vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in CustomSpecularMaterial material, inout ReflectedLight reflectedLight)
	{
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[4];
		rectCoords[0] = lightPos + halfWidth - halfHeight;
		rectCoords[1] = lightPos - halfWidth - halfHeight;
		rectCoords[2] = lightPos - halfWidth + halfHeight;
		rectCoords[3] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv(normal, viewDir, roughness);
		vec4 t1 = texture2D(ltc_1, uv);
		vec4 t2 = texture2D(ltc_2, uv);
		mat3 mInv = mat3(
		vec3(t1.x, 0, t1.y),
		vec3(0, 1, 0),
		vec3(t1.z, 0, t1.w));
		vec3 fresnel = (material.specularColor * t2.x + (vec3(1.0) - material.specularColor) * t2.y);
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate(normal, viewDir, position, mInv, rectCoords);
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate(normal, viewDir, position, mat3(1.0), rectCoords);
	}
#endif
void RE_Direct_Physical(const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in CustomSpecularMaterial material, inout ReflectedLight reflectedLight)
{
	float dotNL = saturate(dot(geometryNormal, directLight.direction));
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate(dot(geometryClearcoatNormal, directLight.direction));
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat(directLight.direction, geometryViewDir, geometryClearcoatNormal, material);
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen(directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness);
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX(directLight.direction, geometryViewDir, geometryNormal, material);
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}
void RE_IndirectDiffuse_Physical(const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in CustomSpecularMaterial material, inout ReflectedLight reflectedLight)
{
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}
void RE_IndirectSpecular_Physical(const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in CustomSpecularMaterial material, inout ReflectedLight reflectedLight)
{
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF(geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness);
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF(geometryNormal, geometryViewDir, material.sheenRoughness);
	#endif
	vec3 singleScattering = vec3(0.0);
	vec3 multiScattering = vec3(0.0);
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence(geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering);
	#else
		computeMultiscattering(geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering);
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * (1.0 - max(max(totalScattering.r, totalScattering.g), totalScattering.b));
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct RE_Direct_Physical
#define RE_Direct_RectArea RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular RE_IndirectSpecular_Physical
float computeSpecularOcclusion(const in float dotNV, const in float ambientOcclusion, const in float roughness)
{
	return saturate(pow(dotNV + ambientOcclusion, exp2(-16.0 * roughness - 1.0)) - 1.0 + ambientOcclusion);
}
#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[NUM_SPOT_LIGHT_MAPS];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];
		varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];
		struct DirectionalLightShadow
		{
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];
		struct SpotLightShadow
		{
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[NUM_POINT_LIGHT_SHADOWS];
		varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];
		struct PointLightShadow
		{
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];
	#endif
	float texture2DCompare(sampler2D depths, vec2 uv, float compare)
	{
		return step(compare, unpackRGBAToDepth(texture2D(depths, uv)));
	}
	vec2 texture2DDistribution(sampler2D shadow, vec2 uv)
	{
		return unpackRGBATo2Half(texture2D(shadow, uv));
	}
	float VSMShadow(sampler2D shadow, vec2 uv, float compare)
	{
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution(shadow, uv);
		float hard_shadow = step(compare, distribution.x);
		if (hard_shadow != 1.0)
		{
			float distance = compare - distribution.x;
			float variance = max(0.00000, distribution.y * distribution.y);
			float softness_probability = variance / (variance + distance * distance);
			softness_probability = clamp((softness_probability - 0.3) / (0.95 - 0.3), 0.0, 1.0);
			occlusion = clamp(max(hard_shadow, softness_probability), 0.0, 1.0);
		}
		return occlusion;
	}
	float getShadow(sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord)
	{
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if (frustumTest)
		{
			#if defined(SHADOWMAP_TYPE_PCF)
				vec2 texelSize = vec2(1.0) / shadowMapSize;
				float dx0 = -texelSize.x * shadowRadius;
				float dy0 = -texelSize.y * shadowRadius;
				float dx1 = +texelSize.x * shadowRadius;
				float dy1 = +texelSize.y * shadowRadius;
				float dx2 = dx0 / 2.0;
				float dy2 = dy0 / 2.0;
				float dx3 = dx1 / 2.0;
				float dy3 = dy1 / 2.0;
				shadow = (texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx0, dy0), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(0.0, dy0), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx1, dy0), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx2, dy2), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(0.0, dy2), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx3, dy2), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx0, 0.0), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx2, 0.0), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy, shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx3, 0.0), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx1, 0.0), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx2, dy3), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(0.0, dy3), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx3, dy3), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx0, dy1), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(0.0, dy1), shadowCoord.z) +
				texture2DCompare(shadowMap, shadowCoord.xy + vec2(dx1, dy1), shadowCoord.z)) *
				(1.0 / 17.0);
			#elif defined(SHADOWMAP_TYPE_PCF_SOFT)
				vec2 texelSize = vec2(1.0) / shadowMapSize;
				float dx = texelSize.x;
				float dy = texelSize.y;
				vec2 uv = shadowCoord.xy;
				vec2 f = fract(uv * shadowMapSize + 0.5);
				uv -= f * texelSize;
				shadow = (texture2DCompare(shadowMap, uv, shadowCoord.z) +
				texture2DCompare(shadowMap, uv + vec2(dx, 0.0), shadowCoord.z) +
				texture2DCompare(shadowMap, uv + vec2(0.0, dy), shadowCoord.z) +
				texture2DCompare(shadowMap, uv + texelSize, shadowCoord.z) +
				mix(texture2DCompare(shadowMap, uv + vec2(-dx, 0.0), shadowCoord.z),
				texture2DCompare(shadowMap, uv + vec2(2.0 * dx, 0.0), shadowCoord.z),
				f.x) +
				mix(texture2DCompare(shadowMap, uv + vec2(-dx, dy), shadowCoord.z),
				texture2DCompare(shadowMap, uv + vec2(2.0 * dx, dy), shadowCoord.z),
				f.x) +
				mix(texture2DCompare(shadowMap, uv + vec2(0.0, -dy), shadowCoord.z),
				texture2DCompare(shadowMap, uv + vec2(0.0, 2.0 * dy), shadowCoord.z),
				f.y) +
				mix(texture2DCompare(shadowMap, uv + vec2(dx, -dy), shadowCoord.z),
				texture2DCompare(shadowMap, uv + vec2(dx, 2.0 * dy), shadowCoord.z),
				f.y) +
				mix(mix(texture2DCompare(shadowMap, uv + vec2(-dx, -dy), shadowCoord.z),
				texture2DCompare(shadowMap, uv + vec2(2.0 * dx, -dy), shadowCoord.z),
				f.x),
				mix(texture2DCompare(shadowMap, uv + vec2(-dx, 2.0 * dy), shadowCoord.z),
				texture2DCompare(shadowMap, uv + vec2(2.0 * dx, 2.0 * dy), shadowCoord.z),
				f.x),
				f.y)) *
				(1.0 / 9.0);
			#elif defined(SHADOWMAP_TYPE_VSM)
				shadow = VSMShadow(shadowMap, shadowCoord.xy, shadowCoord.z);
			#else
				shadow = texture2DCompare(shadowMap, shadowCoord.xy, shadowCoord.z);
			#endif
		}
		return mix(1.0, shadow, shadowIntensity);
	}
	vec2 cubeToUV(vec3 v, float texelSizeY)
	{
		vec3 absV = abs(v);
		float scaleToCube = 1.0 / max(absV.x, max(absV.y, absV.z));
		absV *= scaleToCube;
		v *= scaleToCube * (1.0 - 2.0 * texelSizeY);
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if (absV.z >= almostOne)
		{
			if (v.z > 0.0)
			planar.x = 4.0 - v.x;
		}
		else if (absV.x >= almostOne)
		{
			float signX = sign(v.x);
			planar.x = v.z * signX + 2.0 * signX;
		}
		else if (absV.y >= almostOne)
		{
			float signY = sign(v.y);
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2(0.125, 0.25) * planar + vec2(0.375, 0.75);
	}
	float getPointShadow(sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar)
	{
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length(lightToPosition);
		if (lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0)
		{
			float dp = (lightToPositionLength - shadowCameraNear) / (shadowCameraFar - shadowCameraNear);
			dp += shadowBias;
			vec3 bd3D = normalize(lightToPosition);
			vec2 texelSize = vec2(1.0) / (shadowMapSize * vec2(4.0, 2.0));
			#if defined(SHADOWMAP_TYPE_PCF) || defined(SHADOWMAP_TYPE_PCF_SOFT) || defined(SHADOWMAP_TYPE_VSM)
				vec2 offset = vec2(-1, 1) * shadowRadius * texelSize.y;
				shadow = (texture2DCompare(shadowMap, cubeToUV(bd3D + offset.xyy, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D + offset.yyy, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D + offset.xyx, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D + offset.yyx, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D + offset.xxy, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D + offset.yxy, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D + offset.xxx, texelSize.y), dp) +
				texture2DCompare(shadowMap, cubeToUV(bd3D + offset.yxx, texelSize.y), dp)) *
				(1.0 / 9.0);
			#else
				shadow = texture2DCompare(shadowMap, cubeToUV(bd3D, texelSize.y), dp);
			#endif
		}
		return mix(1.0, shadow, shadowIntensity);
	}
#endif

#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd()
	{
		vec2 dSTdx = dFdx(vBumpMapUv);
		vec2 dSTdy = dFdy(vBumpMapUv);
		float Hll = bumpScale * texture2D(bumpMap, vBumpMapUv).x;
		float dBx = bumpScale * texture2D(bumpMap, vBumpMapUv + dSTdx).x - Hll;
		float dBy = bumpScale * texture2D(bumpMap, vBumpMapUv + dSTdy).x - Hll;
		return vec2(dBx, dBy);
	}
	vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection)
	{
		vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
		vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
		vec3 vN = surf_norm;
		vec3 R1 = cross(vSigmaY, vN);
		vec3 R2 = cross(vN, vSigmaX);
		float fDet = dot(vSigmaX, R1) * faceDirection;
		vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
		return normalize(abs(fDet) * surf_norm - vGrad);
	}
#endif
#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if !defined(USE_TANGENT) && (defined(USE_NORMALMAP_TANGENTSPACE) || defined(USE_CLEARCOAT_NORMALMAP) || defined(USE_ANISOTROPY))
	mat3 getTangentFrame(vec3 eye_pos, vec3 surf_norm, vec2 uv)
	{
		vec3 q0 = dFdx(eye_pos.xyz);
		vec3 q1 = dFdy(eye_pos.xyz);
		vec2 st0 = dFdx(uv.st);
		vec2 st1 = dFdy(uv.st);
		vec3 N = surf_norm;
		vec3 q1perp = cross(q1, N);
		vec3 q0perp = cross(N, q0);
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max(dot(T, T), dot(B, B));
		float scale = (det == 0.0) ? 0.0 : inversesqrt(det);
		return mat3(T * scale, B * scale, N);
	}
#endif

#if defined(USE_LOGDEPTHBUF)
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif

#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];
#endif

void main()
{

	vec4 diffuseColor = vec4(diffuse, opacity);
	#if NUM_CLIPPING_PLANES > 0
		vec4 plane;
		#ifdef ALPHA_TO_COVERAGE
			float distanceToPlane, distanceGradient;
			float clipOpacity = 1.0;
			#pragma unroll_loop_start
			for (int i = 0; i < UNION_CLIPPING_PLANES; i++)
			{
				plane = clippingPlanes[i];
				distanceToPlane = -dot(vClipPosition, plane.xyz) + plane.w;
				distanceGradient = fwidth(distanceToPlane) / 2.0;
				clipOpacity *= smoothstep(-distanceGradient, distanceGradient, distanceToPlane);
				if (clipOpacity == 0.0)
				discard;
			}
			#pragma unroll_loop_end
			#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
				float unionClipOpacity = 1.0;
				#pragma unroll_loop_start
				for (int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i++)
				{
					plane = clippingPlanes[i];
					distanceToPlane = -dot(vClipPosition, plane.xyz) + plane.w;
					distanceGradient = fwidth(distanceToPlane) / 2.0;
					unionClipOpacity *= 1.0 - smoothstep(-distanceGradient, distanceGradient, distanceToPlane);
				}
				#pragma unroll_loop_end
				clipOpacity *= 1.0 - unionClipOpacity;
			#endif
			diffuseColor.a *= clipOpacity;
			if (diffuseColor.a == 0.0)
			discard;
		#else
			#pragma unroll_loop_start
			for (int i = 0; i < UNION_CLIPPING_PLANES; i++)
			{
				plane = clippingPlanes[i];
				if (dot(vClipPosition, plane.xyz) > plane.w)
				discard;
			}
			#pragma unroll_loop_end
			#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
				bool clipped = true;
				#pragma unroll_loop_start
				for (int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i++)
				{
					plane = clippingPlanes[i];
					clipped = (dot(vClipPosition, plane.xyz) > plane.w) && clipped;
				}
				#pragma unroll_loop_end
				if (clipped)
				discard;
			#endif
		#endif
	#endif

	ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
	vec3 totalEmissiveRadiance = emissive;

	#if defined(USE_LOGDEPTHBUF)
		gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2(vFragDepth) * logDepthBufFC * 0.5;
	#endif
	#ifdef USE_MAP
		vec4 sampledDiffuseColor = texture2D(map, vMapUv);
		#ifdef DECODE_VIDEO_TEXTURE
			sampledDiffuseColor = vec4(mix(pow(sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(sampledDiffuseColor.rgb, vec3(0.04045)))), sampledDiffuseColor.w);

		#endif
		diffuseColor *= sampledDiffuseColor;
	#endif
	#if defined(USE_COLOR_ALPHA)
		diffuseColor *= vColor;
	#elif defined(USE_COLOR)
		diffuseColor.rgb *= vColor;
	#endif
	#ifdef USE_ALPHAMAP
		diffuseColor.a *= texture2D(alphaMap, vAlphaMapUv).g;
	#endif
	#ifdef USE_ALPHATEST
		#ifdef ALPHA_TO_COVERAGE
			diffuseColor.a = smoothstep(alphaTest, alphaTest + fwidth(diffuseColor.a), diffuseColor.a);
			if (diffuseColor.a == 0.0)
			discard;
		#else
			if (diffuseColor.a < alphaTest)
			discard;
		#endif
	#endif
	#ifdef USE_ALPHAHASH
		if (diffuseColor.a < getAlphaHashThreshold(vPosition))
		discard;
	#endif
	float roughnessFactor = roughness;

	vec4 texelRoughness = vec4(1.0) - texture2D(glossinessMap, vRoughnessMapUv);
	roughnessFactor *= texelRoughness.g;

	float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

	float reflectionFactor = specularValue;
	vec3 reflectionColor = texture2D(specularMap, vUv).rgb; // Карта REFLECTION
	reflectionFactor *= reflectionColor.b;

	#ifdef FLAT_SHADED
		vec3 fdx = dFdx(vViewPosition);
		vec3 fdy = dFdy(vViewPosition);
		vec3 normal = normalize(cross(fdx, fdy));
	#else
		vec3 normal = normalize(vNormal);
		#ifdef DOUBLE_SIDED
			normal *= faceDirection;
		#endif
	#endif

	#if defined(USE_NORMALMAP_TANGENTSPACE) || defined(USE_CLEARCOAT_NORMALMAP) || defined(USE_ANISOTROPY)
		#ifdef USE_TANGENT
			mat3 tbn = mat3(normalize(vTangent), normalize(vBitangent), normal);
		#else
			mat3 tbn = getTangentFrame(-vViewPosition, normal,
			#if defined(USE_NORMALMAP)
				vNormalMapUv
			#elif defined(USE_CLEARCOAT_NORMALMAP)
				vClearcoatNormalMapUv
			#else
				vUv
			#endif
			);
		#endif
		#if defined(DOUBLE_SIDED) && !defined(FLAT_SHADED)
			tbn[0] *= faceDirection;
			tbn[1] *= faceDirection;
		#endif
	#endif

	vec3 nonPerturbedNormal = normal;
	#ifdef USE_NORMALMAP_OBJECTSPACE
		normal = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
		#ifdef FLIP_SIDED
			normal = -normal;
		#endif
		#ifdef DOUBLE_SIDED
			normal = normal * faceDirection;
		#endif
		normal = normalize(normalMatrix * normal);
	#elif defined(USE_NORMALMAP_TANGENTSPACE)
		vec3 mapN = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
		mapN.xy *= normalScale;
		normal = normalize(tbn * mapN);
	#elif defined(USE_BUMPMAP)
		normal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(), faceDirection);
	#endif

	#ifdef USE_EMISSIVEMAP
		vec4 emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
		totalEmissiveRadiance *= emissiveColor.rgb;
	#endif

	// accumulation
	CustomSpecularMaterial material;
	material.diffuseColor = diffuseColor.rgb * (1.0-reflectionFactor);
	// material.diffuseColor = diffuseColor.rgb;
	vec3 dxy = max(abs(dFdx(nonPerturbedNormal)), abs(dFdy(nonPerturbedNormal)));
	float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);
	material.roughness = max(roughnessFactor, 0.0525);
	material.roughness += geometryRoughness;
	material.roughness = min(material.roughness, 1.0);

	// material.specularColor = mix(vec3(0.04), diffuseColor.rgb, metalnessFactor);
	// material.specularColor = mix(vec3(0.04), diffuseColor.rgb, texelRoughness.rgb);
	material.specularColor = reflectionColor.rgb;
	material.specularF90 = 1.0;

	vec3 geometryPosition = -vViewPosition;
	vec3 geometryNormal = normal;
	vec3 geometryViewDir = (isOrthographic) ? vec3(0, 0, 1) : normalize(vViewPosition);
	vec3 geometryClearcoatNormal = vec3(0.0);

	IncidentLight directLight;
	#if (NUM_POINT_LIGHTS > 0) && defined(RE_Direct)
		PointLight pointLight;
		#if defined(USE_SHADOWMAP) && NUM_POINT_LIGHT_SHADOWS > 0
			PointLightShadow pointLightShadow;
		#endif
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_POINT_LIGHTS; i++)
		{
			pointLight = pointLights[i];
			getPointLightInfo(pointLight, geometryPosition, directLight);
			#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
				pointLightShadow = pointLightShadows[i];
				directLight.color *= (directLight.visible && receiveShadow) ? getPointShadow(pointShadowMap[i], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[i], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar) : 1.0;
			#endif
			RE_Direct(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
		}
		#pragma unroll_loop_end
	#endif
	#if (NUM_SPOT_LIGHTS > 0) && defined(RE_Direct)
		SpotLight spotLight;
		vec4 spotColor;
		vec3 spotLightCoord;
		bool inSpotLightMap;
		#if defined(USE_SHADOWMAP) && NUM_SPOT_LIGHT_SHADOWS > 0
			SpotLightShadow spotLightShadow;
		#endif
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_SPOT_LIGHTS; i++)
		{
			spotLight = spotLights[i];
			getSpotLightInfo(spotLight, geometryPosition, directLight);
			#if (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)
				#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
			#elif (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
				#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
			#else
				#define SPOT_LIGHT_MAP_INDEX (UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)
			#endif
			#if (SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS)
				spotLightCoord = vSpotLightCoord[i].xyz / vSpotLightCoord[i].w;
				inSpotLightMap = all(lessThan(abs(spotLightCoord * 2. - 1.), vec3(1.0)));
				spotColor = texture2D(spotLightMap[SPOT_LIGHT_MAP_INDEX], spotLightCoord.xy);
				directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
			#endif
			#undef SPOT_LIGHT_MAP_INDEX
			#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
				spotLightShadow = spotLightShadows[i];
				directLight.color *= (directLight.visible && receiveShadow) ? getShadow(spotShadowMap[i], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[i]) : 1.0;
			#endif
			RE_Direct(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
		}
		#pragma unroll_loop_end
	#endif
	#if (NUM_DIR_LIGHTS > 0) && defined(RE_Direct)
		DirectionalLight directionalLight;
		#if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
			DirectionalLightShadow directionalLightShadow;
		#endif
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_DIR_LIGHTS; i++)
		{
			directionalLight = directionalLights[i];
			getDirectionalLightInfo(directionalLight, directLight);
			#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
				directionalLightShadow = directionalLightShadows[i];
				directLight.color *= (directLight.visible && receiveShadow) ? getShadow(directionalShadowMap[i], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[i]) : 1.0;
			#endif
			RE_Direct(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
		}
		#pragma unroll_loop_end
	#endif
	#if (NUM_RECT_AREA_LIGHTS > 0) && defined(RE_Direct_RectArea)
		RectAreaLight rectAreaLight;
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_RECT_AREA_LIGHTS; i++)
		{
			rectAreaLight = rectAreaLights[i];
			RE_Direct_RectArea(rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
		}
		#pragma unroll_loop_end
	#endif
	#if defined(RE_IndirectDiffuse)
		vec3 iblIrradiance = vec3(0.0);
		vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);
		#if defined(USE_LIGHT_PROBES)
			irradiance += getLightProbeIrradiance(lightProbe, geometryNormal);
		#endif
		#if (NUM_HEMI_LIGHTS > 0)
			#pragma unroll_loop_start
			for (int i = 0; i < NUM_HEMI_LIGHTS; i++)
			{
				irradiance += getHemisphereLightIrradiance(hemisphereLights[i], geometryNormal);
			}
			#pragma unroll_loop_end
		#endif
	#endif
	#if defined(RE_IndirectSpecular)
		vec3 radiance = vec3(0.0);
		vec3 clearcoatRadiance = vec3(0.0);
	#endif
	#if defined(RE_IndirectDiffuse)
		#ifdef USE_LIGHTMAP
			vec4 lightMapTexel = texture2D(lightMap, vLightMapUv);
			vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
			irradiance += lightMapIrradiance;
		#endif
		#if defined(USE_ENVMAP) && defined(STANDARD) && defined(ENVMAP_TYPE_CUBE_UV)
			iblIrradiance += getIBLIrradiance(geometryNormal);
		#endif
	#endif
	#if defined(USE_ENVMAP) && defined(RE_IndirectSpecular)
		#ifdef USE_ANISOTROPY
			radiance += getIBLAnisotropyRadiance(geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy);
		#else
			radiance += getIBLRadiance(geometryViewDir, geometryNormal, material.roughness);
		#endif
		#ifdef USE_CLEARCOAT
			clearcoatRadiance += getIBLRadiance(geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness);
		#endif
	#endif
	#if defined(RE_IndirectDiffuse)
		RE_IndirectDiffuse(irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
	#endif
	#if defined(RE_IndirectSpecular)
		RE_IndirectSpecular(radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
	#endif

	// modulation
	#ifdef USE_AOMAP
		float ambientOcclusion = (texture2D(aoMap, vAoMapUv).r - 1.0) * aoMapIntensity + 1.0;
		reflectedLight.indirectDiffuse *= ambientOcclusion;
		#if defined(USE_CLEARCOAT)
			clearcoatSpecularIndirect *= ambientOcclusion;
		#endif
		#if defined(USE_SHEEN)
			sheenSpecularIndirect *= ambientOcclusion;
		#endif
		#if defined(USE_ENVMAP) && defined(STANDARD)
			float dotNV = saturate(dot(geometryNormal, geometryViewDir));
			reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, ambientOcclusion, material.roughness);
		#endif
	#endif

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef OPAQUE
		diffuseColor.a = 1.0;
	#endif
	gl_FragColor = vec4(outgoingLight, diffuseColor.a);
	#if defined(TONE_MAPPING)
		gl_FragColor.rgb = toneMapping(gl_FragColor.rgb);
	#endif
	gl_FragColor = linearToOutputTexel(gl_FragColor);
	#ifdef USE_FOG
		#ifdef FOG_EXP2
			float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
		#else
			float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
		#endif
		gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
	#endif
	#ifdef PREMULTIPLIED_ALPHA
		gl_FragColor.rgb *= gl_FragColor.a;
	#endif
	#ifdef DITHERING
		gl_FragColor.rgb = dithering(gl_FragColor.rgb);
	#endif

	// vec4 diffuseColor = texture2D(map, vUv); // Карта COL
	// vec3 reflectionColor = texture2D(specularMap, vUv).rgb; // Карта REFLECTION
	// float glossiness = texture2D(glossinessMap, vUv).r; // Карта GLOSSINESS
	// vec3 finalColor = diffuseColor.rgb + reflectionColor * glossiness;
	// gl_FragColor = vec4(finalColor, 1.0);
}`;class Sm{scenes=[];renderer;scene=new xo;camera=new Le(75,window.innerWidth/window.innerHeight,.1,1e3);materialSpecGloss;materialPbr=new lm({metalness:1,roughness:1,transparent:!0});contentElement=document.getElementById("content");constructor(){this.contentElement.className="absolute w-full z-10 md:pt-6 md:mt-52 flex flex-col md:flex-row items-center justify-center",setTimeout(()=>{console.log(this.materialPbr.defines)},1e4);const t=document.getElementById("c");this.renderer=new am({antialias:!0,canvas:t,alpha:!0}),this.renderer.toneMapping=Fo,this.setStyleCanvas(this.renderer.domElement);var e=cl.merge([_t.common,_t.envmap,_t.aomap,_t.specularmap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{envMap:{value:null},roughness:{value:1},specularValue:{value:0},envMapIntensity:{value:1},glossinessMap:{value:null}}]);this.materialSpecGloss=new dn({uniforms:e,vertexShader:vm,fragmentShader:xm,transparent:!0,lights:!0,defines:{USE_MAP:"",USE_UV:"",MAP_UV:"vUv",NORMALMAP_UV:"vUv",USE_SPECULAR:"",USE_SPECULARMAP:"",SPECULARMAP_UV:"vUv",USE_ROUGHNESSMAP:"",ROUGHNESSMAP_UV:"vUv",USE_LIGHTMAP:"",LIGHTMAP_UV:"vUv",USE_FOG:"",USE_SHADOWMAP:"",USE_ENVMAP:"",STANDARD:""}}),this.materialSpecGloss.needsUpdate=!0;const n=new Lr(.5,32,16),r=new Ge(n,this.materialSpecGloss),a=new Lr(.5,32,16),o=new Ge(a,this.materialPbr);this.scene.add(r,o),this.createScene("Specular/glossiness workflow",r),this.createScene("Converted to Metalness/roughness workflow",o),this.camera.position.z=100,this.renderer.toneMapping=Bo,this.renderer.toneMappingExposure=1,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",()=>this.updateSize()),this.updateSize(),this.renderer.setAnimationLoop(()=>this.animate())}setStyleCanvas(t){t.style.position="absolute",t.style.left="0",t.style.width="100%",t.style.height="100%"}createScene(t,e){const n=new xo,r=document.createElement("div");r.className="md:inline-block";const a=document.createElement("div");a.className="w-80 h-80 md:w-96 md:h-96",r.appendChild(a);const o=document.createElement("div");o.innerText=t,r.appendChild(o),n.userData.element=a,this.contentElement.appendChild(r);const s=new Le(50,1,1,10);s.position.z=2,n.userData.camera=s;const l=new _m(n.userData.camera,n.userData.element);l.minDistance=2,l.maxDistance=5,l.enablePan=!1,l.enableZoom=!1,n.userData.controls=l,n.add(e);const c=this;new gm().load("https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr",function(f){const p=new Ja(c.renderer);p.compileEquirectangularShader();const m=p.fromEquirectangular(f).texture;c.materialSpecGloss.uniforms.envMap.value=m,c.materialSpecGloss.envMap=m,c.materialSpecGloss.needsUpdate=!0,n.environment=m,p.dispose(),f.dispose()}),this.scenes.push(n)}updateSize(){const t=this.renderer.domElement,e=t.clientWidth,n=t.clientHeight;(t.width!==e||t.height!==n)&&(t.style.width="100%",t.style.height="100%",this.renderer.setSize(e,n,!1))}convertMaterial(){}setSpecularValue(){}setDiffuseTexture(t){this.materialSpecGloss.uniforms.map.value=t,this.materialSpecGloss.needsUpdate=!0}setGlossinesValue(){}setReflectionTexture(t){this.materialSpecGloss.uniforms.specularMap.value=t,this.materialSpecGloss.uniforms.specularValue.value=1,this.materialSpecGloss.needsUpdate=!0}setGlossinesinesTexture(t){this.materialSpecGloss.uniforms.glossinessMap.value=t,this.materialSpecGloss.needsUpdate=!0}setAlbdeoTexturePBR(t){this.materialPbr.map=t,this.materialPbr.needsUpdate=!0}setMetalnessTexturePBR(t){this.materialPbr.metalnessMap=t,this.materialPbr.metalness=1,this.materialPbr.needsUpdate=!0}setRoughnessTexturePBR(t){this.materialPbr.roughnessMap=t,this.materialPbr.roughness=1,this.materialPbr.needsUpdate=!0}animate(){this.renderer.domElement.style.transform=`translateY(${window.scrollY}px)`,this.renderer.setClearColor(15857145),this.renderer.setScissorTest(!1),this.renderer.clear(),this.renderer.setClearColor(15857145),this.renderer.setScissorTest(!0);const t=this;this.scenes.forEach(function(e){const r=e.userData.element.getBoundingClientRect();if(r.bottom<0||r.top>t.renderer.domElement.clientHeight||r.right<0||r.left>t.renderer.domElement.clientWidth)return;const a=r.right-r.left,o=r.bottom-r.top,s=r.left,l=t.renderer.domElement.clientHeight-r.bottom;t.renderer.setViewport(s,l,a,o),t.renderer.setScissor(s,l,a,o);const c=e.userData.camera;t.renderer.render(e,c)})}}var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function mr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Sl={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,a){function o(c,f){if(!r[c]){if(!n[c]){var p=typeof mr=="function"&&mr;if(!f&&p)return p(c,!0);if(s)return s(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var u=r[c]={exports:{}};n[c][0].call(u.exports,function(g){var _=n[c][1][g];return o(_||g)},u,u.exports,e,n,r,a)}return r[c].exports}for(var s=typeof mr=="function"&&mr,l=0;l<a.length;l++)o(a[l]);return o}({1:[function(e,n,r){var a=e("./utils"),o=e("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,f,p,m,u,g,_,h=[],d=0,x=l.length,S=x,b=a.getTypeOf(l)!=="string";d<l.length;)S=x-d,p=b?(c=l[d++],f=d<x?l[d++]:0,d<x?l[d++]:0):(c=l.charCodeAt(d++),f=d<x?l.charCodeAt(d++):0,d<x?l.charCodeAt(d++):0),m=c>>2,u=(3&c)<<4|f>>4,g=1<S?(15&f)<<2|p>>6:64,_=2<S?63&p:64,h.push(s.charAt(m)+s.charAt(u)+s.charAt(g)+s.charAt(_));return h.join("")},r.decode=function(l){var c,f,p,m,u,g,_=0,h=0,d="data:";if(l.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var x,S=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===s.charAt(64)&&S--,l.charAt(l.length-2)===s.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|S):new Array(0|S);_<l.length;)c=s.indexOf(l.charAt(_++))<<2|(m=s.indexOf(l.charAt(_++)))>>4,f=(15&m)<<4|(u=s.indexOf(l.charAt(_++)))>>2,p=(3&u)<<6|(g=s.indexOf(l.charAt(_++))),x[h++]=c,u!==64&&(x[h++]=f),g!==64&&(x[h++]=p);return x}},{"./support":30,"./utils":32}],2:[function(e,n,r){var a=e("./external"),o=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(f,p,m,u,g){this.compressedSize=f,this.uncompressedSize=p,this.crc32=m,this.compression=u,this.compressedContent=g}c.prototype={getContentWorker:function(){var f=new o(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return f.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new o(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,p,m){return f.pipe(new s).pipe(new l("uncompressedSize")).pipe(p.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var a=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var a=e("./utils"),o=function(){for(var s,l=[],c=0;c<256;c++){s=c;for(var f=0;f<8;f++)s=1&s?3988292384^s>>>1:s>>>1;l[c]=s}return l}();n.exports=function(s,l){return s!==void 0&&s.length?a.getTypeOf(s)!=="string"?function(c,f,p,m){var u=o,g=m+p;c^=-1;for(var _=m;_<g;_++)c=c>>>8^u[255&(c^f[_])];return-1^c}(0|l,s,s.length,0):function(c,f,p,m){var u=o,g=m+p;c^=-1;for(var _=m;_<g;_++)c=c>>>8^u[255&(c^f.charCodeAt(_))];return-1^c}(0|l,s,s.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var a=null;a=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:a}},{lie:37}],7:[function(e,n,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),s=e("./utils"),l=e("./stream/GenericWorker"),c=a?"uint8array":"array";function f(p,m){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=m,this.meta={}}r.magic="\b\0",s.inherits(f,l),f.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(c,p.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(m){p.push({data:m,meta:p.meta})}},r.compressWorker=function(p){return new f("Deflate",p)},r.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function a(u,g){var _,h="";for(_=0;_<g;_++)h+=String.fromCharCode(255&u),u>>>=8;return h}function o(u,g,_,h,d,x){var S,b,P=u.file,L=u.compression,C=x!==c.utf8encode,N=s.transformTo("string",x(P.name)),y=s.transformTo("string",c.utf8encode(P.name)),T=P.comment,B=s.transformTo("string",x(T)),w=s.transformTo("string",c.utf8encode(T)),O=y.length!==P.name.length,v=w.length!==T.length,z="",V="",k="",$=P.dir,tt=P.date,ct={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(ct.crc32=u.crc32,ct.compressedSize=u.compressedSize,ct.uncompressedSize=u.uncompressedSize);var W=0;g&&(W|=8),C||!O&&!v||(W|=2048);var X=0,pt=0;$&&(X|=16),d==="UNIX"?(pt=798,X|=function(Q,gt){var vt=Q;return Q||(vt=gt?16893:33204),(65535&vt)<<16}(P.unixPermissions,$)):(pt=20,X|=function(Q){return 63&(Q||0)}(P.dosPermissions)),S=tt.getUTCHours(),S<<=6,S|=tt.getUTCMinutes(),S<<=5,S|=tt.getUTCSeconds()/2,b=tt.getUTCFullYear()-1980,b<<=4,b|=tt.getUTCMonth()+1,b<<=5,b|=tt.getUTCDate(),O&&(V=a(1,1)+a(f(N),4)+y,z+="up"+a(V.length,2)+V),v&&(k=a(1,1)+a(f(B),4)+w,z+="uc"+a(k.length,2)+k);var q="";return q+=`
\0`,q+=a(W,2),q+=L.magic,q+=a(S,2),q+=a(b,2),q+=a(ct.crc32,4),q+=a(ct.compressedSize,4),q+=a(ct.uncompressedSize,4),q+=a(N.length,2),q+=a(z.length,2),{fileRecord:p.LOCAL_FILE_HEADER+q+N+z,dirRecord:p.CENTRAL_FILE_HEADER+a(pt,2)+q+a(B.length,2)+"\0\0\0\0"+a(X,4)+a(h,4)+N+z+B}}var s=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),f=e("../crc32"),p=e("../signature");function m(u,g,_,h){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=h,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(m,l),m.prototype.push=function(u){var g=u.meta.percent||0,_=this.entriesCount,h=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-h-1))/_:100}}))},m.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var g=this.streamFiles&&!u.file.dir;if(g){var _=o(u,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(u){this.accumulate=!1;var g=this.streamFiles&&!u.file.dir,_=o(u,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:function(h){return p.DATA_DESCRIPTOR+a(h.crc32,4)+a(h.compressedSize,4)+a(h.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var u=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-u,h=function(d,x,S,b,P){var L=s.transformTo("string",P(b));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+a(d,2)+a(d,2)+a(x,4)+a(S,4)+a(L.length,2)+L}(this.dirRecords.length,_,u,this.zipComment,this.encodeFileName);this.push({data:h,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(u){this._sources.push(u);var g=this;return u.on("data",function(_){g.processChunk(_)}),u.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),u.on("error",function(_){g.error(_)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(u){var g=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var _=0;_<g.length;_++)try{g[_].error(u)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,g=0;g<u.length;g++)u[g].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var a=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(s,l,c){var f=new o(l.streamFiles,c,l.platform,l.encodeFileName),p=0;try{s.forEach(function(m,u){p++;var g=function(x,S){var b=x||S,P=a[b];if(!P)throw new Error(b+" is not a valid compression method !");return P}(u.options.compression,l.compression),_=u.options.compressionOptions||l.compressionOptions||{},h=u.dir,d=u.date;u._compressWorker(g,_).withStreamInfo("file",{name:m,dir:h,date:d,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(f)}),f.entriesCount=p}catch(m){f.error(m)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new a;for(var s in this)typeof this[s]!="function"&&(o[s]=this[s]);return o}}(a.prototype=e("./object")).loadAsync=e("./load"),a.support=e("./support"),a.defaults=e("./defaults"),a.version="3.10.1",a.loadAsync=function(o,s){return new a().loadAsync(o,s)},a.external=e("./external"),n.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var a=e("./utils"),o=e("./external"),s=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),f=e("./nodejsUtils");function p(m){return new o.Promise(function(u,g){var _=m.decompressed.getContentWorker().pipe(new c);_.on("error",function(h){g(h)}).on("end",function(){_.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(m,u){var g=this;return u=a.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),f.isNode&&f.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",m,!0,u.optimizedBinaryString,u.base64).then(function(_){var h=new l(u);return h.load(_),h}).then(function(_){var h=[o.Promise.resolve(_)],d=_.files;if(u.checkCRC32)for(var x=0;x<d.length;x++)h.push(p(d[x]));return o.Promise.all(h)}).then(function(_){for(var h=_.shift(),d=h.files,x=0;x<d.length;x++){var S=d[x],b=S.fileNameStr,P=a.resolve(S.fileNameStr);g.file(P,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:u.createFolders}),S.dir||(g.file(P).unsafeOriginalName=b)}return h.zipComment.length&&(g.comment=h.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var a=e("../utils"),o=e("../stream/GenericWorker");function s(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}a.inherits(s,o),s.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},s.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var a=e("readable-stream").Readable;function o(s,l,c){a.call(this,l),this._helper=s;var f=this;s.on("data",function(p,m){f.push(p)||f._helper.pause(),c&&c(m)}).on("error",function(p){f.emit("error",p)}).on("end",function(){f.push(null)})}e("../utils").inherits(o,a),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,o);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,o)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var o=new Buffer(a);return o.fill(0),o},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(e,n,r){function a(P,L,C){var N,y=s.getTypeOf(L),T=s.extend(C||{},f);T.date=T.date||new Date,T.compression!==null&&(T.compression=T.compression.toUpperCase()),typeof T.unixPermissions=="string"&&(T.unixPermissions=parseInt(T.unixPermissions,8)),T.unixPermissions&&16384&T.unixPermissions&&(T.dir=!0),T.dosPermissions&&16&T.dosPermissions&&(T.dir=!0),T.dir&&(P=d(P)),T.createFolders&&(N=h(P))&&x.call(this,N,!0);var B=y==="string"&&T.binary===!1&&T.base64===!1;C&&C.binary!==void 0||(T.binary=!B),(L instanceof p&&L.uncompressedSize===0||T.dir||!L||L.length===0)&&(T.base64=!1,T.binary=!0,L="",T.compression="STORE",y="string");var w=null;w=L instanceof p||L instanceof l?L:g.isNode&&g.isStream(L)?new _(P,L):s.prepareContent(P,L,T.binary,T.optimizedBinaryString,T.base64);var O=new m(P,w,T);this.files[P]=O}var o=e("./utf8"),s=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),f=e("./defaults"),p=e("./compressedObject"),m=e("./zipObject"),u=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),h=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var L=P.lastIndexOf("/");return 0<L?P.substring(0,L):""},d=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},x=function(P,L){return L=L!==void 0?L:f.createFolders,P=d(P),this.files[P]||a.call(this,P,null,{dir:!0,createFolders:L}),this.files[P]};function S(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var b={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var L,C,N;for(L in this.files)N=this.files[L],(C=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&P(C,N)},filter:function(P){var L=[];return this.forEach(function(C,N){P(C,N)&&L.push(N)}),L},file:function(P,L,C){if(arguments.length!==1)return P=this.root+P,a.call(this,P,L,C),this;if(S(P)){var N=P;return this.filter(function(T,B){return!B.dir&&N.test(T)})}var y=this.files[this.root+P];return y&&!y.dir?y:null},folder:function(P){if(!P)return this;if(S(P))return this.filter(function(y,T){return T.dir&&P.test(y)});var L=this.root+P,C=x.call(this,L),N=this.clone();return N.root=C.name,N},remove:function(P){P=this.root+P;var L=this.files[P];if(L||(P.slice(-1)!=="/"&&(P+="/"),L=this.files[P]),L&&!L.dir)delete this.files[P];else for(var C=this.filter(function(y,T){return T.name.slice(0,P.length)===P}),N=0;N<C.length;N++)delete this.files[C[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var L,C={};try{if((C=s.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=C.type.toLowerCase(),C.compression=C.compression.toUpperCase(),C.type==="binarystring"&&(C.type="string"),!C.type)throw new Error("No output type specified.");s.checkSupport(C.type),C.platform!=="darwin"&&C.platform!=="freebsd"&&C.platform!=="linux"&&C.platform!=="sunos"||(C.platform="UNIX"),C.platform==="win32"&&(C.platform="DOS");var N=C.comment||this.comment||"";L=u.generateWorker(this,C,N)}catch(y){(L=new l("error")).error(y)}return new c(L,C.type||"string",C.mimeType)},generateAsync:function(P,L){return this.generateInternalStream(P).accumulate(L)},generateNodeStream:function(P,L){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(L)}};n.exports=b},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var a=e("./DataReader");function o(s){a.call(this,s);for(var l=0;l<this.data.length;l++)s[l]=255&s[l]}e("../utils").inherits(o,a),o.prototype.byteAt=function(s){return this.data[this.zero+s]},o.prototype.lastIndexOfSignature=function(s){for(var l=s.charCodeAt(0),c=s.charCodeAt(1),f=s.charCodeAt(2),p=s.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===f&&this.data[m+3]===p)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(s){var l=s.charCodeAt(0),c=s.charCodeAt(1),f=s.charCodeAt(2),p=s.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&f===m[2]&&p===m[3]},o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var a=e("../utils");function o(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var l,c=0;for(this.checkOffset(s),l=this.index+s-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=s,c},readString:function(s){return a.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var a=e("./Uint8ArrayReader");function o(s){a.call(this,s)}e("../utils").inherits(o,a),o.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var a=e("./DataReader");function o(s){a.call(this,s)}e("../utils").inherits(o,a),o.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},o.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},o.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},o.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var a=e("./ArrayReader");function o(s){a.call(this,s)}e("../utils").inherits(o,a),o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var a=e("../utils"),o=e("../support"),s=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),f=e("./Uint8ArrayReader");n.exports=function(p){var m=a.getTypeOf(p);return a.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new c(p):o.uint8array?new f(a.transformTo("uint8array",p)):new s(a.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var a=e("./GenericWorker"),o=e("../utils");function s(l){a.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(s,a),s.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var a=e("./GenericWorker"),o=e("../crc32");function s(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,a),s.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var a=e("../utils"),o=e("./GenericWorker");function s(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}a.inherits(s,o),s.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var a=e("../utils"),o=e("./GenericWorker");function s(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=a.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}a.inherits(s,o),s.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function a(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,s){return this._listeners[o].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,s){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,s)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var s=this;return o.on("data",function(l){s.processChunk(l)}),o.on("end",function(){s.end()}),o.on("error",function(l){s.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,s){return this.extraStreamInfo[o]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=a},{}],29:[function(e,n,r){var a=e("../utils"),o=e("./ConvertWorker"),s=e("./GenericWorker"),l=e("../base64"),c=e("../support"),f=e("../external"),p=null;if(c.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,_){return new f.Promise(function(h,d){var x=[],S=g._internalType,b=g._outputType,P=g._mimeType;g.on("data",function(L,C){x.push(L),_&&_(C)}).on("error",function(L){x=[],d(L)}).on("end",function(){try{var L=function(C,N,y){switch(C){case"blob":return a.newBlob(a.transformTo("arraybuffer",N),y);case"base64":return l.encode(N);default:return a.transformTo(C,N)}}(b,function(C,N){var y,T=0,B=null,w=0;for(y=0;y<N.length;y++)w+=N[y].length;switch(C){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(B=new Uint8Array(w),y=0;y<N.length;y++)B.set(N[y],T),T+=N[y].length;return B;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+C+"'")}}(S,x),P);h(L)}catch(C){d(C)}x=[]}).resume()})}function u(g,_,h){var d=_;switch(_){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=_,this._mimeType=h,a.checkSupport(d),this._worker=g.pipe(new o(d)),g.lock()}catch(x){this._worker=new s("error"),this._worker.error(x)}}u.prototype={accumulate:function(g){return m(this,g)},on:function(g,_){var h=this;return g==="data"?this._worker.on(g,function(d){_.call(h,d.data,d.meta)}):this._worker.on(g,function(){a.delay(_,arguments,h)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var a=new ArrayBuffer(0);try{r.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(a),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var a=e("./utils"),o=e("./support"),s=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(u){return o.nodebuffer?s.newBufferFrom(u,"utf-8"):function(g){var _,h,d,x,S,b=g.length,P=0;for(x=0;x<b;x++)(64512&(h=g.charCodeAt(x)))==55296&&x+1<b&&(64512&(d=g.charCodeAt(x+1)))==56320&&(h=65536+(h-55296<<10)+(d-56320),x++),P+=h<128?1:h<2048?2:h<65536?3:4;for(_=o.uint8array?new Uint8Array(P):new Array(P),x=S=0;S<P;x++)(64512&(h=g.charCodeAt(x)))==55296&&x+1<b&&(64512&(d=g.charCodeAt(x+1)))==56320&&(h=65536+(h-55296<<10)+(d-56320),x++),h<128?_[S++]=h:(h<2048?_[S++]=192|h>>>6:(h<65536?_[S++]=224|h>>>12:(_[S++]=240|h>>>18,_[S++]=128|h>>>12&63),_[S++]=128|h>>>6&63),_[S++]=128|63&h);return _}(u)},r.utf8decode=function(u){return o.nodebuffer?a.transformTo("nodebuffer",u).toString("utf-8"):function(g){var _,h,d,x,S=g.length,b=new Array(2*S);for(_=h=0;_<S;)if((d=g[_++])<128)b[h++]=d;else if(4<(x=c[d]))b[h++]=65533,_+=x-1;else{for(d&=x===2?31:x===3?15:7;1<x&&_<S;)d=d<<6|63&g[_++],x--;1<x?b[h++]=65533:d<65536?b[h++]=d:(d-=65536,b[h++]=55296|d>>10&1023,b[h++]=56320|1023&d)}return b.length!==h&&(b.subarray?b=b.subarray(0,h):b.length=h),a.applyFromCharCode(b)}(u=a.transformTo(o.uint8array?"uint8array":"array",u))},a.inherits(p,l),p.prototype.processChunk=function(u){var g=a.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var h=function(x,S){var b;for((S=S||x.length)>x.length&&(S=x.length),b=S-1;0<=b&&(192&x[b])==128;)b--;return b<0||b===0?S:b+c[x[b]]>S?b:S}(g),d=g;h!==g.length&&(o.uint8array?(d=g.subarray(0,h),this.leftOver=g.subarray(h,g.length)):(d=g.slice(0,h),this.leftOver=g.slice(h,g.length))),this.push({data:r.utf8decode(d),meta:u.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,a.inherits(m,l),m.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var a=e("./support"),o=e("./base64"),s=e("./nodejsUtils"),l=e("./external");function c(_){return _}function f(_,h){for(var d=0;d<_.length;++d)h[d]=255&_.charCodeAt(d);return h}e("setimmediate"),r.newBlob=function(_,h){r.checkSupport("blob");try{return new Blob([_],{type:h})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(_),d.getBlob(h)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(_,h,d){var x=[],S=0,b=_.length;if(b<=d)return String.fromCharCode.apply(null,_);for(;S<b;)h==="array"||h==="nodebuffer"?x.push(String.fromCharCode.apply(null,_.slice(S,Math.min(S+d,b)))):x.push(String.fromCharCode.apply(null,_.subarray(S,Math.min(S+d,b)))),S+=d;return x.join("")},stringifyByChar:function(_){for(var h="",d=0;d<_.length;d++)h+=String.fromCharCode(_[d]);return h},applyCanBeUsed:{uint8array:function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}}()}};function m(_){var h=65536,d=r.getTypeOf(_),x=!0;if(d==="uint8array"?x=p.applyCanBeUsed.uint8array:d==="nodebuffer"&&(x=p.applyCanBeUsed.nodebuffer),x)for(;1<h;)try{return p.stringifyByChunk(_,d,h)}catch{h=Math.floor(h/2)}return p.stringifyByChar(_)}function u(_,h){for(var d=0;d<_.length;d++)h[d]=_[d];return h}r.applyFromCharCode=m;var g={};g.string={string:c,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return f(_,new Uint8Array(_.length))},nodebuffer:function(_){return f(_,s.allocBuffer(_.length))}},g.array={string:m,array:c,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return s.newBufferFrom(_)}},g.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return u(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:c,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return s.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:c,nodebuffer:function(_){return s.newBufferFrom(_)}},g.nodebuffer={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return u(_,new Uint8Array(_.length))},nodebuffer:c},r.transformTo=function(_,h){if(h=h||"",!_)return h;r.checkSupport(_);var d=r.getTypeOf(h);return g[d][_](h)},r.resolve=function(_){for(var h=_.split("/"),d=[],x=0;x<h.length;x++){var S=h[x];S==="."||S===""&&x!==0&&x!==h.length-1||(S===".."?d.pop():d.push(S))}return d.join("/")},r.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":a.nodebuffer&&s.isBuffer(_)?"nodebuffer":a.uint8array&&_ instanceof Uint8Array?"uint8array":a.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(_){if(!a[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var h,d,x="";for(d=0;d<(_||"").length;d++)x+="\\x"+((h=_.charCodeAt(d))<16?"0":"")+h.toString(16).toUpperCase();return x},r.delay=function(_,h,d){setImmediate(function(){_.apply(d||null,h||[])})},r.inherits=function(_,h){function d(){}d.prototype=h.prototype,_.prototype=new d},r.extend=function(){var _,h,d={};for(_=0;_<arguments.length;_++)for(h in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],h)&&d[h]===void 0&&(d[h]=arguments[_][h]);return d},r.prepareContent=function(_,h,d,x,S){return l.Promise.resolve(h).then(function(b){return a.blob&&(b instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(b))!==-1)&&typeof FileReader<"u"?new l.Promise(function(P,L){var C=new FileReader;C.onload=function(N){P(N.target.result)},C.onerror=function(N){L(N.target.error)},C.readAsArrayBuffer(b)}):b}).then(function(b){var P=r.getTypeOf(b);return P?(P==="arraybuffer"?b=r.transformTo("uint8array",b):P==="string"&&(S?b=o.decode(b):d&&x!==!0&&(b=function(L){return f(L,a.uint8array?new Uint8Array(L.length):new Array(L.length))}(b))),b):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var a=e("./reader/readerFor"),o=e("./utils"),s=e("./signature"),l=e("./zipEntry"),c=e("./support");function f(p){this.files=[],this.loadOptions=p}f.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(p)+")")}},isSignature:function(p,m){var u=this.reader.index;this.reader.setIndex(p);var g=this.reader.readString(4)===m;return this.reader.setIndex(u),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",u=o.transformTo(m,p);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,m,u,g=this.zip64EndOfCentralSize-44;0<g;)p=this.reader.readInt(2),m=this.reader.readInt(4),u=this.reader.readData(m),this.zip64ExtensibleData[p]={id:p,length:m,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,m;for(p=0;p<this.files.length;p++)m=this.files[p],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var m=p;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var g=m-u;if(0<g)this.isSignature(m,s.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(p){this.reader=a(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var a=e("./reader/readerFor"),o=e("./utils"),s=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),f=e("./compressions"),p=e("./support");function m(u,g){this.options=u,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var g,_;if(u.skip(22),this.fileNameLength=u.readInt(2),_=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=function(h){for(var d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&f[d].magic===h)return f[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,g,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var g=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(g),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=a(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var g,_,h,d=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<d;)g=u.readInt(2),_=u.readInt(2),h=u.readData(_),this.extraFields[g]={id:g,length:_,value:h};u.setIndex(d)},handleUTF8:function(){var u=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var h=this.findExtraFieldUnicodeComment();if(h!==null)this.fileCommentStr=h;else{var d=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var g=a(u.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var g=a(u.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function a(g,_,h){this.name=g,this.dir=h.dir,this.date=h.date,this.comment=h.comment,this.unixPermissions=h.unixPermissions,this.dosPermissions=h.dosPermissions,this._data=_,this._dataBinary=h.binary,this.options={compression:h.compression,compressionOptions:h.compressionOptions}}var o=e("./stream/StreamHelper"),s=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),f=e("./stream/GenericWorker");a.prototype={internalStream:function(g){var _=null,h="string";try{if(!g)throw new Error("No output type specified.");var d=(h=g.toLowerCase())==="string"||h==="text";h!=="binarystring"&&h!=="text"||(h="string"),_=this._decompressWorker();var x=!this._dataBinary;x&&!d&&(_=_.pipe(new l.Utf8EncodeWorker)),!x&&d&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(S){(_=new f("error")).error(S)}return new o(_,h,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var h=this._decompressWorker();return this._dataBinary||(h=h.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(h,g,_)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new s(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<p.length;u++)a.prototype[p[u]]=m;n.exports=a},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(a){var o,s,l=a.MutationObserver||a.WebKitMutationObserver;if(l){var c=0,f=new l(g),p=a.document.createTextNode("");f.observe(p,{characterData:!0}),o=function(){p.data=c=++c%2}}else if(a.setImmediate||a.MessageChannel===void 0)o="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var _=a.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},a.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var m=new a.MessageChannel;m.port1.onmessage=g,o=function(){m.port2.postMessage(0)}}var u=[];function g(){var _,h;s=!0;for(var d=u.length;d;){for(h=u,u=[],_=-1;++_<d;)h[_]();d=u.length}s=!1}n.exports=function(_){u.push(_)!==1||s||o()}}).call(this,typeof pr<"u"?pr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var a=e("immediate");function o(){}var s={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function p(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,d!==o&&_(this,d)}function m(d,x,S){this.promise=d,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function u(d,x,S){a(function(){var b;try{b=x(S)}catch(P){return s.reject(d,P)}b===d?s.reject(d,new TypeError("Cannot resolve promise with itself")):s.resolve(d,b)})}function g(d){var x=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof x=="function")return function(){x.apply(d,arguments)}}function _(d,x){var S=!1;function b(C){S||(S=!0,s.reject(d,C))}function P(C){S||(S=!0,s.resolve(d,C))}var L=h(function(){x(P,b)});L.status==="error"&&b(L.value)}function h(d,x){var S={};try{S.value=d(x),S.status="success"}catch(b){S.status="error",S.value=b}return S}(n.exports=p).prototype.finally=function(d){if(typeof d!="function")return this;var x=this.constructor;return this.then(function(S){return x.resolve(d()).then(function(){return S})},function(S){return x.resolve(d()).then(function(){throw S})})},p.prototype.catch=function(d){return this.then(null,d)},p.prototype.then=function(d,x){if(typeof d!="function"&&this.state===c||typeof x!="function"&&this.state===l)return this;var S=new this.constructor(o);return this.state!==f?u(S,this.state===c?d:x,this.outcome):this.queue.push(new m(S,d,x)),S},m.prototype.callFulfilled=function(d){s.resolve(this.promise,d)},m.prototype.otherCallFulfilled=function(d){u(this.promise,this.onFulfilled,d)},m.prototype.callRejected=function(d){s.reject(this.promise,d)},m.prototype.otherCallRejected=function(d){u(this.promise,this.onRejected,d)},s.resolve=function(d,x){var S=h(g,x);if(S.status==="error")return s.reject(d,S.value);var b=S.value;if(b)_(d,b);else{d.state=c,d.outcome=x;for(var P=-1,L=d.queue.length;++P<L;)d.queue[P].callFulfilled(x)}return d},s.reject=function(d,x){d.state=l,d.outcome=x;for(var S=-1,b=d.queue.length;++S<b;)d.queue[S].callRejected(x);return d},p.resolve=function(d){return d instanceof this?d:s.resolve(new this(o),d)},p.reject=function(d){var x=new this(o);return s.reject(x,d)},p.all=function(d){var x=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,b=!1;if(!S)return this.resolve([]);for(var P=new Array(S),L=0,C=-1,N=new this(o);++C<S;)y(d[C],C);return N;function y(T,B){x.resolve(T).then(function(w){P[B]=w,++L!==S||b||(b=!0,s.resolve(N,P))},function(w){b||(b=!0,s.reject(N,w))})}},p.race=function(d){var x=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,b=!1;if(!S)return this.resolve([]);for(var P=-1,L=new this(o);++P<S;)C=d[P],x.resolve(C).then(function(N){b||(b=!0,s.resolve(L,N))},function(N){b||(b=!0,s.reject(L,N))});var C;return L}},{immediate:36}],38:[function(e,n,r){var a={};(0,e("./lib/utils/common").assign)(a,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=a},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var a=e("./zlib/deflate"),o=e("./utils/common"),s=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),f=Object.prototype.toString,p=0,m=-1,u=0,g=8;function _(d){if(!(this instanceof _))return new _(d);this.options=o.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},d||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var S=a.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(S!==p)throw new Error(l[S]);if(x.header&&a.deflateSetHeader(this.strm,x.header),x.dictionary){var b;if(b=typeof x.dictionary=="string"?s.string2buf(x.dictionary):f.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(S=a.deflateSetDictionary(this.strm,b))!==p)throw new Error(l[S]);this._dict_set=!0}}function h(d,x){var S=new _(x);if(S.push(d,!0),S.err)throw S.msg||l[S.err];return S.result}_.prototype.push=function(d,x){var S,b,P=this.strm,L=this.options.chunkSize;if(this.ended)return!1;b=x===~~x?x:x===!0?4:0,typeof d=="string"?P.input=s.string2buf(d):f.call(d)==="[object ArrayBuffer]"?P.input=new Uint8Array(d):P.input=d,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new o.Buf8(L),P.next_out=0,P.avail_out=L),(S=a.deflate(P,b))!==1&&S!==p)return this.onEnd(S),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||b!==4&&b!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(o.shrinkBuf(P.output,P.next_out))):this.onData(o.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&S!==1);return b===4?(S=a.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===p):b!==2||(this.onEnd(p),!(P.avail_out=0))},_.prototype.onData=function(d){this.chunks.push(d)},_.prototype.onEnd=function(d){d===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Deflate=_,r.deflate=h,r.deflateRaw=function(d,x){return(x=x||{}).raw=!0,h(d,x)},r.gzip=function(d,x){return(x=x||{}).gzip=!0,h(d,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var a=e("./zlib/inflate"),o=e("./utils/common"),s=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),f=e("./zlib/zstream"),p=e("./zlib/gzheader"),m=Object.prototype.toString;function u(_){if(!(this instanceof u))return new u(_);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},_||{});var h=this.options;h.raw&&0<=h.windowBits&&h.windowBits<16&&(h.windowBits=-h.windowBits,h.windowBits===0&&(h.windowBits=-15)),!(0<=h.windowBits&&h.windowBits<16)||_&&_.windowBits||(h.windowBits+=32),15<h.windowBits&&h.windowBits<48&&!(15&h.windowBits)&&(h.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var d=a.inflateInit2(this.strm,h.windowBits);if(d!==l.Z_OK)throw new Error(c[d]);this.header=new p,a.inflateGetHeader(this.strm,this.header)}function g(_,h){var d=new u(h);if(d.push(_,!0),d.err)throw d.msg||c[d.err];return d.result}u.prototype.push=function(_,h){var d,x,S,b,P,L,C=this.strm,N=this.options.chunkSize,y=this.options.dictionary,T=!1;if(this.ended)return!1;x=h===~~h?h:h===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?C.input=s.binstring2buf(_):m.call(_)==="[object ArrayBuffer]"?C.input=new Uint8Array(_):C.input=_,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(N),C.next_out=0,C.avail_out=N),(d=a.inflate(C,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&y&&(L=typeof y=="string"?s.string2buf(y):m.call(y)==="[object ArrayBuffer]"?new Uint8Array(y):y,d=a.inflateSetDictionary(this.strm,L)),d===l.Z_BUF_ERROR&&T===!0&&(d=l.Z_OK,T=!1),d!==l.Z_STREAM_END&&d!==l.Z_OK)return this.onEnd(d),!(this.ended=!0);C.next_out&&(C.avail_out!==0&&d!==l.Z_STREAM_END&&(C.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=s.utf8border(C.output,C.next_out),b=C.next_out-S,P=s.buf2string(C.output,S),C.next_out=b,C.avail_out=N-b,b&&o.arraySet(C.output,C.output,S,b,0),this.onData(P)):this.onData(o.shrinkBuf(C.output,C.next_out)))),C.avail_in===0&&C.avail_out===0&&(T=!0)}while((0<C.avail_in||C.avail_out===0)&&d!==l.Z_STREAM_END);return d===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(d=a.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(C.avail_out=0))},u.prototype.onData=function(_){this.chunks.push(_)},u.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=u,r.inflate=g,r.inflateRaw=function(_,h){return(h=h||{}).raw=!0,g(_,h)},r.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var p in f)f.hasOwnProperty(p)&&(l[p]=f[p])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,f,p,m){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+p),m);else for(var u=0;u<p;u++)l[m+u]=c[f+u]},flattenChunks:function(l){var c,f,p,m,u,g;for(c=p=0,f=l.length;c<f;c++)p+=l[c].length;for(g=new Uint8Array(p),c=m=0,f=l.length;c<f;c++)u=l[c],g.set(u,m),m+=u.length;return g}},s={arraySet:function(l,c,f,p,m){for(var u=0;u<p;u++)l[m+u]=c[f+u]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(a)},{}],42:[function(e,n,r){var a=e("./common"),o=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var l=new a.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(p,m){if(m<65537&&(p.subarray&&s||!p.subarray&&o))return String.fromCharCode.apply(null,a.shrinkBuf(p,m));for(var u="",g=0;g<m;g++)u+=String.fromCharCode(p[g]);return u}l[254]=l[254]=1,r.string2buf=function(p){var m,u,g,_,h,d=p.length,x=0;for(_=0;_<d;_++)(64512&(u=p.charCodeAt(_)))==55296&&_+1<d&&(64512&(g=p.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),x+=u<128?1:u<2048?2:u<65536?3:4;for(m=new a.Buf8(x),_=h=0;h<x;_++)(64512&(u=p.charCodeAt(_)))==55296&&_+1<d&&(64512&(g=p.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),u<128?m[h++]=u:(u<2048?m[h++]=192|u>>>6:(u<65536?m[h++]=224|u>>>12:(m[h++]=240|u>>>18,m[h++]=128|u>>>12&63),m[h++]=128|u>>>6&63),m[h++]=128|63&u);return m},r.buf2binstring=function(p){return f(p,p.length)},r.binstring2buf=function(p){for(var m=new a.Buf8(p.length),u=0,g=m.length;u<g;u++)m[u]=p.charCodeAt(u);return m},r.buf2string=function(p,m){var u,g,_,h,d=m||p.length,x=new Array(2*d);for(u=g=0;u<d;)if((_=p[u++])<128)x[g++]=_;else if(4<(h=l[_]))x[g++]=65533,u+=h-1;else{for(_&=h===2?31:h===3?15:7;1<h&&u<d;)_=_<<6|63&p[u++],h--;1<h?x[g++]=65533:_<65536?x[g++]=_:(_-=65536,x[g++]=55296|_>>10&1023,x[g++]=56320|1023&_)}return f(x,g)},r.utf8border=function(p,m){var u;for((m=m||p.length)>p.length&&(m=p.length),u=m-1;0<=u&&(192&p[u])==128;)u--;return u<0||u===0?m:u+l[p[u]]>m?u:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(a,o,s,l){for(var c=65535&a|0,f=a>>>16&65535|0,p=0;s!==0;){for(s-=p=2e3<s?2e3:s;f=f+(c=c+o[l++]|0)|0,--p;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var a=function(){for(var o,s=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;s[l]=o}return s}();n.exports=function(o,s,l,c){var f=a,p=c+l;o^=-1;for(var m=c;m<p;m++)o=o>>>8^f[255&(o^s[m])];return-1^o}},{}],46:[function(e,n,r){var a,o=e("../utils/common"),s=e("./trees"),l=e("./adler32"),c=e("./crc32"),f=e("./messages"),p=0,m=4,u=0,g=-2,_=-1,h=4,d=2,x=8,S=9,b=286,P=30,L=19,C=2*b+1,N=15,y=3,T=258,B=T+y+1,w=42,O=113,v=1,z=2,V=3,k=4;function $(M,at){return M.msg=f[at],at}function tt(M){return(M<<1)-(4<M?9:0)}function ct(M){for(var at=M.length;0<=--at;)M[at]=0}function W(M){var at=M.state,Y=at.pending;Y>M.avail_out&&(Y=M.avail_out),Y!==0&&(o.arraySet(M.output,at.pending_buf,at.pending_out,Y,M.next_out),M.next_out+=Y,at.pending_out+=Y,M.total_out+=Y,M.avail_out-=Y,at.pending-=Y,at.pending===0&&(at.pending_out=0))}function X(M,at){s._tr_flush_block(M,0<=M.block_start?M.block_start:-1,M.strstart-M.block_start,at),M.block_start=M.strstart,W(M.strm)}function pt(M,at){M.pending_buf[M.pending++]=at}function q(M,at){M.pending_buf[M.pending++]=at>>>8&255,M.pending_buf[M.pending++]=255&at}function Q(M,at){var Y,F,D=M.max_chain_length,G=M.strstart,R=M.prev_length,E=M.nice_match,I=M.strstart>M.w_size-B?M.strstart-(M.w_size-B):0,Z=M.window,et=M.w_mask,j=M.prev,dt=M.strstart+T,ht=Z[G+R-1],ft=Z[G+R];M.prev_length>=M.good_match&&(D>>=2),E>M.lookahead&&(E=M.lookahead);do if(Z[(Y=at)+R]===ft&&Z[Y+R-1]===ht&&Z[Y]===Z[G]&&Z[++Y]===Z[G+1]){G+=2,Y++;do;while(Z[++G]===Z[++Y]&&Z[++G]===Z[++Y]&&Z[++G]===Z[++Y]&&Z[++G]===Z[++Y]&&Z[++G]===Z[++Y]&&Z[++G]===Z[++Y]&&Z[++G]===Z[++Y]&&Z[++G]===Z[++Y]&&G<dt);if(F=T-(dt-G),G=dt-T,R<F){if(M.match_start=at,E<=(R=F))break;ht=Z[G+R-1],ft=Z[G+R]}}while((at=j[at&et])>I&&--D!=0);return R<=M.lookahead?R:M.lookahead}function gt(M){var at,Y,F,D,G,R,E,I,Z,et,j=M.w_size;do{if(D=M.window_size-M.lookahead-M.strstart,M.strstart>=j+(j-B)){for(o.arraySet(M.window,M.window,j,j,0),M.match_start-=j,M.strstart-=j,M.block_start-=j,at=Y=M.hash_size;F=M.head[--at],M.head[at]=j<=F?F-j:0,--Y;);for(at=Y=j;F=M.prev[--at],M.prev[at]=j<=F?F-j:0,--Y;);D+=j}if(M.strm.avail_in===0)break;if(R=M.strm,E=M.window,I=M.strstart+M.lookahead,Z=D,et=void 0,et=R.avail_in,Z<et&&(et=Z),Y=et===0?0:(R.avail_in-=et,o.arraySet(E,R.input,R.next_in,et,I),R.state.wrap===1?R.adler=l(R.adler,E,et,I):R.state.wrap===2&&(R.adler=c(R.adler,E,et,I)),R.next_in+=et,R.total_in+=et,et),M.lookahead+=Y,M.lookahead+M.insert>=y)for(G=M.strstart-M.insert,M.ins_h=M.window[G],M.ins_h=(M.ins_h<<M.hash_shift^M.window[G+1])&M.hash_mask;M.insert&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[G+y-1])&M.hash_mask,M.prev[G&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=G,G++,M.insert--,!(M.lookahead+M.insert<y)););}while(M.lookahead<B&&M.strm.avail_in!==0)}function vt(M,at){for(var Y,F;;){if(M.lookahead<B){if(gt(M),M.lookahead<B&&at===p)return v;if(M.lookahead===0)break}if(Y=0,M.lookahead>=y&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+y-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),Y!==0&&M.strstart-Y<=M.w_size-B&&(M.match_length=Q(M,Y)),M.match_length>=y)if(F=s._tr_tally(M,M.strstart-M.match_start,M.match_length-y),M.lookahead-=M.match_length,M.match_length<=M.max_lazy_match&&M.lookahead>=y){for(M.match_length--;M.strstart++,M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+y-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart,--M.match_length!=0;);M.strstart++}else M.strstart+=M.match_length,M.match_length=0,M.ins_h=M.window[M.strstart],M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+1])&M.hash_mask;else F=s._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++;if(F&&(X(M,!1),M.strm.avail_out===0))return v}return M.insert=M.strstart<y-1?M.strstart:y-1,at===m?(X(M,!0),M.strm.avail_out===0?V:k):M.last_lit&&(X(M,!1),M.strm.avail_out===0)?v:z}function Mt(M,at){for(var Y,F,D;;){if(M.lookahead<B){if(gt(M),M.lookahead<B&&at===p)return v;if(M.lookahead===0)break}if(Y=0,M.lookahead>=y&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+y-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),M.prev_length=M.match_length,M.prev_match=M.match_start,M.match_length=y-1,Y!==0&&M.prev_length<M.max_lazy_match&&M.strstart-Y<=M.w_size-B&&(M.match_length=Q(M,Y),M.match_length<=5&&(M.strategy===1||M.match_length===y&&4096<M.strstart-M.match_start)&&(M.match_length=y-1)),M.prev_length>=y&&M.match_length<=M.prev_length){for(D=M.strstart+M.lookahead-y,F=s._tr_tally(M,M.strstart-1-M.prev_match,M.prev_length-y),M.lookahead-=M.prev_length-1,M.prev_length-=2;++M.strstart<=D&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+y-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),--M.prev_length!=0;);if(M.match_available=0,M.match_length=y-1,M.strstart++,F&&(X(M,!1),M.strm.avail_out===0))return v}else if(M.match_available){if((F=s._tr_tally(M,0,M.window[M.strstart-1]))&&X(M,!1),M.strstart++,M.lookahead--,M.strm.avail_out===0)return v}else M.match_available=1,M.strstart++,M.lookahead--}return M.match_available&&(F=s._tr_tally(M,0,M.window[M.strstart-1]),M.match_available=0),M.insert=M.strstart<y-1?M.strstart:y-1,at===m?(X(M,!0),M.strm.avail_out===0?V:k):M.last_lit&&(X(M,!1),M.strm.avail_out===0)?v:z}function Et(M,at,Y,F,D){this.good_length=M,this.max_lazy=at,this.nice_length=Y,this.max_chain=F,this.func=D}function Rt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*C),this.dyn_dtree=new o.Buf16(2*(2*P+1)),this.bl_tree=new o.Buf16(2*(2*L+1)),ct(this.dyn_ltree),ct(this.dyn_dtree),ct(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*b+1),ct(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*b+1),ct(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Nt(M){var at;return M&&M.state?(M.total_in=M.total_out=0,M.data_type=d,(at=M.state).pending=0,at.pending_out=0,at.wrap<0&&(at.wrap=-at.wrap),at.status=at.wrap?w:O,M.adler=at.wrap===2?0:1,at.last_flush=p,s._tr_init(at),u):$(M,g)}function H(M){var at=Nt(M);return at===u&&function(Y){Y.window_size=2*Y.w_size,ct(Y.head),Y.max_lazy_match=a[Y.level].max_lazy,Y.good_match=a[Y.level].good_length,Y.nice_match=a[Y.level].nice_length,Y.max_chain_length=a[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=y-1,Y.match_available=0,Y.ins_h=0}(M.state),at}function Vt(M,at,Y,F,D,G){if(!M)return g;var R=1;if(at===_&&(at=6),F<0?(R=0,F=-F):15<F&&(R=2,F-=16),D<1||S<D||Y!==x||F<8||15<F||at<0||9<at||G<0||h<G)return $(M,g);F===8&&(F=9);var E=new Rt;return(M.state=E).strm=M,E.wrap=R,E.gzhead=null,E.w_bits=F,E.w_size=1<<E.w_bits,E.w_mask=E.w_size-1,E.hash_bits=D+7,E.hash_size=1<<E.hash_bits,E.hash_mask=E.hash_size-1,E.hash_shift=~~((E.hash_bits+y-1)/y),E.window=new o.Buf8(2*E.w_size),E.head=new o.Buf16(E.hash_size),E.prev=new o.Buf16(E.w_size),E.lit_bufsize=1<<D+6,E.pending_buf_size=4*E.lit_bufsize,E.pending_buf=new o.Buf8(E.pending_buf_size),E.d_buf=1*E.lit_bufsize,E.l_buf=3*E.lit_bufsize,E.level=at,E.strategy=G,E.method=Y,H(M)}a=[new Et(0,0,0,0,function(M,at){var Y=65535;for(Y>M.pending_buf_size-5&&(Y=M.pending_buf_size-5);;){if(M.lookahead<=1){if(gt(M),M.lookahead===0&&at===p)return v;if(M.lookahead===0)break}M.strstart+=M.lookahead,M.lookahead=0;var F=M.block_start+Y;if((M.strstart===0||M.strstart>=F)&&(M.lookahead=M.strstart-F,M.strstart=F,X(M,!1),M.strm.avail_out===0)||M.strstart-M.block_start>=M.w_size-B&&(X(M,!1),M.strm.avail_out===0))return v}return M.insert=0,at===m?(X(M,!0),M.strm.avail_out===0?V:k):(M.strstart>M.block_start&&(X(M,!1),M.strm.avail_out),v)}),new Et(4,4,8,4,vt),new Et(4,5,16,8,vt),new Et(4,6,32,32,vt),new Et(4,4,16,16,Mt),new Et(8,16,32,32,Mt),new Et(8,16,128,128,Mt),new Et(8,32,128,256,Mt),new Et(32,128,258,1024,Mt),new Et(32,258,258,4096,Mt)],r.deflateInit=function(M,at){return Vt(M,at,x,15,8,0)},r.deflateInit2=Vt,r.deflateReset=H,r.deflateResetKeep=Nt,r.deflateSetHeader=function(M,at){return M&&M.state?M.state.wrap!==2?g:(M.state.gzhead=at,u):g},r.deflate=function(M,at){var Y,F,D,G;if(!M||!M.state||5<at||at<0)return M?$(M,g):g;if(F=M.state,!M.output||!M.input&&M.avail_in!==0||F.status===666&&at!==m)return $(M,M.avail_out===0?-5:g);if(F.strm=M,Y=F.last_flush,F.last_flush=at,F.status===w)if(F.wrap===2)M.adler=0,pt(F,31),pt(F,139),pt(F,8),F.gzhead?(pt(F,(F.gzhead.text?1:0)+(F.gzhead.hcrc?2:0)+(F.gzhead.extra?4:0)+(F.gzhead.name?8:0)+(F.gzhead.comment?16:0)),pt(F,255&F.gzhead.time),pt(F,F.gzhead.time>>8&255),pt(F,F.gzhead.time>>16&255),pt(F,F.gzhead.time>>24&255),pt(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),pt(F,255&F.gzhead.os),F.gzhead.extra&&F.gzhead.extra.length&&(pt(F,255&F.gzhead.extra.length),pt(F,F.gzhead.extra.length>>8&255)),F.gzhead.hcrc&&(M.adler=c(M.adler,F.pending_buf,F.pending,0)),F.gzindex=0,F.status=69):(pt(F,0),pt(F,0),pt(F,0),pt(F,0),pt(F,0),pt(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),pt(F,3),F.status=O);else{var R=x+(F.w_bits-8<<4)<<8;R|=(2<=F.strategy||F.level<2?0:F.level<6?1:F.level===6?2:3)<<6,F.strstart!==0&&(R|=32),R+=31-R%31,F.status=O,q(F,R),F.strstart!==0&&(q(F,M.adler>>>16),q(F,65535&M.adler)),M.adler=1}if(F.status===69)if(F.gzhead.extra){for(D=F.pending;F.gzindex<(65535&F.gzhead.extra.length)&&(F.pending!==F.pending_buf_size||(F.gzhead.hcrc&&F.pending>D&&(M.adler=c(M.adler,F.pending_buf,F.pending-D,D)),W(M),D=F.pending,F.pending!==F.pending_buf_size));)pt(F,255&F.gzhead.extra[F.gzindex]),F.gzindex++;F.gzhead.hcrc&&F.pending>D&&(M.adler=c(M.adler,F.pending_buf,F.pending-D,D)),F.gzindex===F.gzhead.extra.length&&(F.gzindex=0,F.status=73)}else F.status=73;if(F.status===73)if(F.gzhead.name){D=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>D&&(M.adler=c(M.adler,F.pending_buf,F.pending-D,D)),W(M),D=F.pending,F.pending===F.pending_buf_size)){G=1;break}G=F.gzindex<F.gzhead.name.length?255&F.gzhead.name.charCodeAt(F.gzindex++):0,pt(F,G)}while(G!==0);F.gzhead.hcrc&&F.pending>D&&(M.adler=c(M.adler,F.pending_buf,F.pending-D,D)),G===0&&(F.gzindex=0,F.status=91)}else F.status=91;if(F.status===91)if(F.gzhead.comment){D=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>D&&(M.adler=c(M.adler,F.pending_buf,F.pending-D,D)),W(M),D=F.pending,F.pending===F.pending_buf_size)){G=1;break}G=F.gzindex<F.gzhead.comment.length?255&F.gzhead.comment.charCodeAt(F.gzindex++):0,pt(F,G)}while(G!==0);F.gzhead.hcrc&&F.pending>D&&(M.adler=c(M.adler,F.pending_buf,F.pending-D,D)),G===0&&(F.status=103)}else F.status=103;if(F.status===103&&(F.gzhead.hcrc?(F.pending+2>F.pending_buf_size&&W(M),F.pending+2<=F.pending_buf_size&&(pt(F,255&M.adler),pt(F,M.adler>>8&255),M.adler=0,F.status=O)):F.status=O),F.pending!==0){if(W(M),M.avail_out===0)return F.last_flush=-1,u}else if(M.avail_in===0&&tt(at)<=tt(Y)&&at!==m)return $(M,-5);if(F.status===666&&M.avail_in!==0)return $(M,-5);if(M.avail_in!==0||F.lookahead!==0||at!==p&&F.status!==666){var E=F.strategy===2?function(I,Z){for(var et;;){if(I.lookahead===0&&(gt(I),I.lookahead===0)){if(Z===p)return v;break}if(I.match_length=0,et=s._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++,et&&(X(I,!1),I.strm.avail_out===0))return v}return I.insert=0,Z===m?(X(I,!0),I.strm.avail_out===0?V:k):I.last_lit&&(X(I,!1),I.strm.avail_out===0)?v:z}(F,at):F.strategy===3?function(I,Z){for(var et,j,dt,ht,ft=I.window;;){if(I.lookahead<=T){if(gt(I),I.lookahead<=T&&Z===p)return v;if(I.lookahead===0)break}if(I.match_length=0,I.lookahead>=y&&0<I.strstart&&(j=ft[dt=I.strstart-1])===ft[++dt]&&j===ft[++dt]&&j===ft[++dt]){ht=I.strstart+T;do;while(j===ft[++dt]&&j===ft[++dt]&&j===ft[++dt]&&j===ft[++dt]&&j===ft[++dt]&&j===ft[++dt]&&j===ft[++dt]&&j===ft[++dt]&&dt<ht);I.match_length=T-(ht-dt),I.match_length>I.lookahead&&(I.match_length=I.lookahead)}if(I.match_length>=y?(et=s._tr_tally(I,1,I.match_length-y),I.lookahead-=I.match_length,I.strstart+=I.match_length,I.match_length=0):(et=s._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++),et&&(X(I,!1),I.strm.avail_out===0))return v}return I.insert=0,Z===m?(X(I,!0),I.strm.avail_out===0?V:k):I.last_lit&&(X(I,!1),I.strm.avail_out===0)?v:z}(F,at):a[F.level].func(F,at);if(E!==V&&E!==k||(F.status=666),E===v||E===V)return M.avail_out===0&&(F.last_flush=-1),u;if(E===z&&(at===1?s._tr_align(F):at!==5&&(s._tr_stored_block(F,0,0,!1),at===3&&(ct(F.head),F.lookahead===0&&(F.strstart=0,F.block_start=0,F.insert=0))),W(M),M.avail_out===0))return F.last_flush=-1,u}return at!==m?u:F.wrap<=0?1:(F.wrap===2?(pt(F,255&M.adler),pt(F,M.adler>>8&255),pt(F,M.adler>>16&255),pt(F,M.adler>>24&255),pt(F,255&M.total_in),pt(F,M.total_in>>8&255),pt(F,M.total_in>>16&255),pt(F,M.total_in>>24&255)):(q(F,M.adler>>>16),q(F,65535&M.adler)),W(M),0<F.wrap&&(F.wrap=-F.wrap),F.pending!==0?u:1)},r.deflateEnd=function(M){var at;return M&&M.state?(at=M.state.status)!==w&&at!==69&&at!==73&&at!==91&&at!==103&&at!==O&&at!==666?$(M,g):(M.state=null,at===O?$(M,-3):u):g},r.deflateSetDictionary=function(M,at){var Y,F,D,G,R,E,I,Z,et=at.length;if(!M||!M.state||(G=(Y=M.state).wrap)===2||G===1&&Y.status!==w||Y.lookahead)return g;for(G===1&&(M.adler=l(M.adler,at,et,0)),Y.wrap=0,et>=Y.w_size&&(G===0&&(ct(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),Z=new o.Buf8(Y.w_size),o.arraySet(Z,at,et-Y.w_size,Y.w_size,0),at=Z,et=Y.w_size),R=M.avail_in,E=M.next_in,I=M.input,M.avail_in=et,M.next_in=0,M.input=at,gt(Y);Y.lookahead>=y;){for(F=Y.strstart,D=Y.lookahead-(y-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[F+y-1])&Y.hash_mask,Y.prev[F&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=F,F++,--D;);Y.strstart=F,Y.lookahead=y-1,gt(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=y-1,Y.match_available=0,M.next_in=E,M.input=I,M.avail_in=R,Y.wrap=G,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(a,o){var s,l,c,f,p,m,u,g,_,h,d,x,S,b,P,L,C,N,y,T,B,w,O,v,z;s=a.state,l=a.next_in,v=a.input,c=l+(a.avail_in-5),f=a.next_out,z=a.output,p=f-(o-a.avail_out),m=f+(a.avail_out-257),u=s.dmax,g=s.wsize,_=s.whave,h=s.wnext,d=s.window,x=s.hold,S=s.bits,b=s.lencode,P=s.distcode,L=(1<<s.lenbits)-1,C=(1<<s.distbits)-1;t:do{S<15&&(x+=v[l++]<<S,S+=8,x+=v[l++]<<S,S+=8),N=b[x&L];e:for(;;){if(x>>>=y=N>>>24,S-=y,(y=N>>>16&255)===0)z[f++]=65535&N;else{if(!(16&y)){if(!(64&y)){N=b[(65535&N)+(x&(1<<y)-1)];continue e}if(32&y){s.mode=12;break t}a.msg="invalid literal/length code",s.mode=30;break t}T=65535&N,(y&=15)&&(S<y&&(x+=v[l++]<<S,S+=8),T+=x&(1<<y)-1,x>>>=y,S-=y),S<15&&(x+=v[l++]<<S,S+=8,x+=v[l++]<<S,S+=8),N=P[x&C];n:for(;;){if(x>>>=y=N>>>24,S-=y,!(16&(y=N>>>16&255))){if(!(64&y)){N=P[(65535&N)+(x&(1<<y)-1)];continue n}a.msg="invalid distance code",s.mode=30;break t}if(B=65535&N,S<(y&=15)&&(x+=v[l++]<<S,(S+=8)<y&&(x+=v[l++]<<S,S+=8)),u<(B+=x&(1<<y)-1)){a.msg="invalid distance too far back",s.mode=30;break t}if(x>>>=y,S-=y,(y=f-p)<B){if(_<(y=B-y)&&s.sane){a.msg="invalid distance too far back",s.mode=30;break t}if(O=d,(w=0)===h){if(w+=g-y,y<T){for(T-=y;z[f++]=d[w++],--y;);w=f-B,O=z}}else if(h<y){if(w+=g+h-y,(y-=h)<T){for(T-=y;z[f++]=d[w++],--y;);if(w=0,h<T){for(T-=y=h;z[f++]=d[w++],--y;);w=f-B,O=z}}}else if(w+=h-y,y<T){for(T-=y;z[f++]=d[w++],--y;);w=f-B,O=z}for(;2<T;)z[f++]=O[w++],z[f++]=O[w++],z[f++]=O[w++],T-=3;T&&(z[f++]=O[w++],1<T&&(z[f++]=O[w++]))}else{for(w=f-B;z[f++]=z[w++],z[f++]=z[w++],z[f++]=z[w++],2<(T-=3););T&&(z[f++]=z[w++],1<T&&(z[f++]=z[w++]))}break}}break}}while(l<c&&f<m);l-=T=S>>3,x&=(1<<(S-=T<<3))-1,a.next_in=l,a.next_out=f,a.avail_in=l<c?c-l+5:5-(l-c),a.avail_out=f<m?m-f+257:257-(f-m),s.hold=x,s.bits=S}},{}],49:[function(e,n,r){var a=e("../utils/common"),o=e("./adler32"),s=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),f=1,p=2,m=0,u=-2,g=1,_=852,h=592;function d(w){return(w>>>24&255)+(w>>>8&65280)+((65280&w)<<8)+((255&w)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(w){var O;return w&&w.state?(O=w.state,w.total_in=w.total_out=O.total=0,w.msg="",O.wrap&&(w.adler=1&O.wrap),O.mode=g,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new a.Buf32(_),O.distcode=O.distdyn=new a.Buf32(h),O.sane=1,O.back=-1,m):u}function b(w){var O;return w&&w.state?((O=w.state).wsize=0,O.whave=0,O.wnext=0,S(w)):u}function P(w,O){var v,z;return w&&w.state?(z=w.state,O<0?(v=0,O=-O):(v=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?u:(z.window!==null&&z.wbits!==O&&(z.window=null),z.wrap=v,z.wbits=O,b(w))):u}function L(w,O){var v,z;return w?(z=new x,(w.state=z).window=null,(v=P(w,O))!==m&&(w.state=null),v):u}var C,N,y=!0;function T(w){if(y){var O;for(C=new a.Buf32(512),N=new a.Buf32(32),O=0;O<144;)w.lens[O++]=8;for(;O<256;)w.lens[O++]=9;for(;O<280;)w.lens[O++]=7;for(;O<288;)w.lens[O++]=8;for(c(f,w.lens,0,288,C,0,w.work,{bits:9}),O=0;O<32;)w.lens[O++]=5;c(p,w.lens,0,32,N,0,w.work,{bits:5}),y=!1}w.lencode=C,w.lenbits=9,w.distcode=N,w.distbits=5}function B(w,O,v,z){var V,k=w.state;return k.window===null&&(k.wsize=1<<k.wbits,k.wnext=0,k.whave=0,k.window=new a.Buf8(k.wsize)),z>=k.wsize?(a.arraySet(k.window,O,v-k.wsize,k.wsize,0),k.wnext=0,k.whave=k.wsize):(z<(V=k.wsize-k.wnext)&&(V=z),a.arraySet(k.window,O,v-z,V,k.wnext),(z-=V)?(a.arraySet(k.window,O,v-z,z,0),k.wnext=z,k.whave=k.wsize):(k.wnext+=V,k.wnext===k.wsize&&(k.wnext=0),k.whave<k.wsize&&(k.whave+=V))),0}r.inflateReset=b,r.inflateReset2=P,r.inflateResetKeep=S,r.inflateInit=function(w){return L(w,15)},r.inflateInit2=L,r.inflate=function(w,O){var v,z,V,k,$,tt,ct,W,X,pt,q,Q,gt,vt,Mt,Et,Rt,Nt,H,Vt,M,at,Y,F,D=0,G=new a.Buf8(4),R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!w||!w.state||!w.output||!w.input&&w.avail_in!==0)return u;(v=w.state).mode===12&&(v.mode=13),$=w.next_out,V=w.output,ct=w.avail_out,k=w.next_in,z=w.input,tt=w.avail_in,W=v.hold,X=v.bits,pt=tt,q=ct,at=m;t:for(;;)switch(v.mode){case g:if(v.wrap===0){v.mode=13;break}for(;X<16;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(2&v.wrap&&W===35615){G[v.check=0]=255&W,G[1]=W>>>8&255,v.check=s(v.check,G,2,0),X=W=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&W)<<8)+(W>>8))%31){w.msg="incorrect header check",v.mode=30;break}if((15&W)!=8){w.msg="unknown compression method",v.mode=30;break}if(X-=4,M=8+(15&(W>>>=4)),v.wbits===0)v.wbits=M;else if(M>v.wbits){w.msg="invalid window size",v.mode=30;break}v.dmax=1<<M,w.adler=v.check=1,v.mode=512&W?10:12,X=W=0;break;case 2:for(;X<16;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(v.flags=W,(255&v.flags)!=8){w.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){w.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=W>>8&1),512&v.flags&&(G[0]=255&W,G[1]=W>>>8&255,v.check=s(v.check,G,2,0)),X=W=0,v.mode=3;case 3:for(;X<32;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}v.head&&(v.head.time=W),512&v.flags&&(G[0]=255&W,G[1]=W>>>8&255,G[2]=W>>>16&255,G[3]=W>>>24&255,v.check=s(v.check,G,4,0)),X=W=0,v.mode=4;case 4:for(;X<16;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}v.head&&(v.head.xflags=255&W,v.head.os=W>>8),512&v.flags&&(G[0]=255&W,G[1]=W>>>8&255,v.check=s(v.check,G,2,0)),X=W=0,v.mode=5;case 5:if(1024&v.flags){for(;X<16;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}v.length=W,v.head&&(v.head.extra_len=W),512&v.flags&&(G[0]=255&W,G[1]=W>>>8&255,v.check=s(v.check,G,2,0)),X=W=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(tt<(Q=v.length)&&(Q=tt),Q&&(v.head&&(M=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),a.arraySet(v.head.extra,z,k,Q,M)),512&v.flags&&(v.check=s(v.check,z,Q,k)),tt-=Q,k+=Q,v.length-=Q),v.length))break t;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(tt===0)break t;for(Q=0;M=z[k+Q++],v.head&&M&&v.length<65536&&(v.head.name+=String.fromCharCode(M)),M&&Q<tt;);if(512&v.flags&&(v.check=s(v.check,z,Q,k)),tt-=Q,k+=Q,M)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(tt===0)break t;for(Q=0;M=z[k+Q++],v.head&&M&&v.length<65536&&(v.head.comment+=String.fromCharCode(M)),M&&Q<tt;);if(512&v.flags&&(v.check=s(v.check,z,Q,k)),tt-=Q,k+=Q,M)break t}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;X<16;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(W!==(65535&v.check)){w.msg="header crc mismatch",v.mode=30;break}X=W=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),w.adler=v.check=0,v.mode=12;break;case 10:for(;X<32;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}w.adler=v.check=d(W),X=W=0,v.mode=11;case 11:if(v.havedict===0)return w.next_out=$,w.avail_out=ct,w.next_in=k,w.avail_in=tt,v.hold=W,v.bits=X,2;w.adler=v.check=1,v.mode=12;case 12:if(O===5||O===6)break t;case 13:if(v.last){W>>>=7&X,X-=7&X,v.mode=27;break}for(;X<3;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}switch(v.last=1&W,X-=1,3&(W>>>=1)){case 0:v.mode=14;break;case 1:if(T(v),v.mode=20,O!==6)break;W>>>=2,X-=2;break t;case 2:v.mode=17;break;case 3:w.msg="invalid block type",v.mode=30}W>>>=2,X-=2;break;case 14:for(W>>>=7&X,X-=7&X;X<32;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if((65535&W)!=(W>>>16^65535)){w.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&W,X=W=0,v.mode=15,O===6)break t;case 15:v.mode=16;case 16:if(Q=v.length){if(tt<Q&&(Q=tt),ct<Q&&(Q=ct),Q===0)break t;a.arraySet(V,z,k,Q,$),tt-=Q,k+=Q,ct-=Q,$+=Q,v.length-=Q;break}v.mode=12;break;case 17:for(;X<14;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(v.nlen=257+(31&W),W>>>=5,X-=5,v.ndist=1+(31&W),W>>>=5,X-=5,v.ncode=4+(15&W),W>>>=4,X-=4,286<v.nlen||30<v.ndist){w.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;X<3;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}v.lens[R[v.have++]]=7&W,W>>>=3,X-=3}for(;v.have<19;)v.lens[R[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,Y={bits:v.lenbits},at=c(0,v.lens,0,19,v.lencode,0,v.work,Y),v.lenbits=Y.bits,at){w.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;Et=(D=v.lencode[W&(1<<v.lenbits)-1])>>>16&255,Rt=65535&D,!((Mt=D>>>24)<=X);){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(Rt<16)W>>>=Mt,X-=Mt,v.lens[v.have++]=Rt;else{if(Rt===16){for(F=Mt+2;X<F;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(W>>>=Mt,X-=Mt,v.have===0){w.msg="invalid bit length repeat",v.mode=30;break}M=v.lens[v.have-1],Q=3+(3&W),W>>>=2,X-=2}else if(Rt===17){for(F=Mt+3;X<F;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}X-=Mt,M=0,Q=3+(7&(W>>>=Mt)),W>>>=3,X-=3}else{for(F=Mt+7;X<F;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}X-=Mt,M=0,Q=11+(127&(W>>>=Mt)),W>>>=7,X-=7}if(v.have+Q>v.nlen+v.ndist){w.msg="invalid bit length repeat",v.mode=30;break}for(;Q--;)v.lens[v.have++]=M}}if(v.mode===30)break;if(v.lens[256]===0){w.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,Y={bits:v.lenbits},at=c(f,v.lens,0,v.nlen,v.lencode,0,v.work,Y),v.lenbits=Y.bits,at){w.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,Y={bits:v.distbits},at=c(p,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,Y),v.distbits=Y.bits,at){w.msg="invalid distances set",v.mode=30;break}if(v.mode=20,O===6)break t;case 20:v.mode=21;case 21:if(6<=tt&&258<=ct){w.next_out=$,w.avail_out=ct,w.next_in=k,w.avail_in=tt,v.hold=W,v.bits=X,l(w,q),$=w.next_out,V=w.output,ct=w.avail_out,k=w.next_in,z=w.input,tt=w.avail_in,W=v.hold,X=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;Et=(D=v.lencode[W&(1<<v.lenbits)-1])>>>16&255,Rt=65535&D,!((Mt=D>>>24)<=X);){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(Et&&!(240&Et)){for(Nt=Mt,H=Et,Vt=Rt;Et=(D=v.lencode[Vt+((W&(1<<Nt+H)-1)>>Nt)])>>>16&255,Rt=65535&D,!(Nt+(Mt=D>>>24)<=X);){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}W>>>=Nt,X-=Nt,v.back+=Nt}if(W>>>=Mt,X-=Mt,v.back+=Mt,v.length=Rt,Et===0){v.mode=26;break}if(32&Et){v.back=-1,v.mode=12;break}if(64&Et){w.msg="invalid literal/length code",v.mode=30;break}v.extra=15&Et,v.mode=22;case 22:if(v.extra){for(F=v.extra;X<F;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}v.length+=W&(1<<v.extra)-1,W>>>=v.extra,X-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;Et=(D=v.distcode[W&(1<<v.distbits)-1])>>>16&255,Rt=65535&D,!((Mt=D>>>24)<=X);){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(!(240&Et)){for(Nt=Mt,H=Et,Vt=Rt;Et=(D=v.distcode[Vt+((W&(1<<Nt+H)-1)>>Nt)])>>>16&255,Rt=65535&D,!(Nt+(Mt=D>>>24)<=X);){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}W>>>=Nt,X-=Nt,v.back+=Nt}if(W>>>=Mt,X-=Mt,v.back+=Mt,64&Et){w.msg="invalid distance code",v.mode=30;break}v.offset=Rt,v.extra=15&Et,v.mode=24;case 24:if(v.extra){for(F=v.extra;X<F;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}v.offset+=W&(1<<v.extra)-1,W>>>=v.extra,X-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){w.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(ct===0)break t;if(Q=q-ct,v.offset>Q){if((Q=v.offset-Q)>v.whave&&v.sane){w.msg="invalid distance too far back",v.mode=30;break}gt=Q>v.wnext?(Q-=v.wnext,v.wsize-Q):v.wnext-Q,Q>v.length&&(Q=v.length),vt=v.window}else vt=V,gt=$-v.offset,Q=v.length;for(ct<Q&&(Q=ct),ct-=Q,v.length-=Q;V[$++]=vt[gt++],--Q;);v.length===0&&(v.mode=21);break;case 26:if(ct===0)break t;V[$++]=v.length,ct--,v.mode=21;break;case 27:if(v.wrap){for(;X<32;){if(tt===0)break t;tt--,W|=z[k++]<<X,X+=8}if(q-=ct,w.total_out+=q,v.total+=q,q&&(w.adler=v.check=v.flags?s(v.check,V,q,$-q):o(v.check,V,q,$-q)),q=ct,(v.flags?W:d(W))!==v.check){w.msg="incorrect data check",v.mode=30;break}X=W=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;X<32;){if(tt===0)break t;tt--,W+=z[k++]<<X,X+=8}if(W!==(4294967295&v.total)){w.msg="incorrect length check",v.mode=30;break}X=W=0}v.mode=29;case 29:at=1;break t;case 30:at=-3;break t;case 31:return-4;case 32:default:return u}return w.next_out=$,w.avail_out=ct,w.next_in=k,w.avail_in=tt,v.hold=W,v.bits=X,(v.wsize||q!==w.avail_out&&v.mode<30&&(v.mode<27||O!==4))&&B(w,w.output,w.next_out,q-w.avail_out)?(v.mode=31,-4):(pt-=w.avail_in,q-=w.avail_out,w.total_in+=pt,w.total_out+=q,v.total+=q,v.wrap&&q&&(w.adler=v.check=v.flags?s(v.check,V,q,w.next_out-q):o(v.check,V,q,w.next_out-q)),w.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(pt==0&&q===0||O===4)&&at===m&&(at=-5),at)},r.inflateEnd=function(w){if(!w||!w.state)return u;var O=w.state;return O.window&&(O.window=null),w.state=null,m},r.inflateGetHeader=function(w,O){var v;return w&&w.state&&2&(v=w.state).wrap?((v.head=O).done=!1,m):u},r.inflateSetDictionary=function(w,O){var v,z=O.length;return w&&w.state?(v=w.state).wrap!==0&&v.mode!==11?u:v.mode===11&&o(1,O,z,0)!==v.check?-3:B(w,O,z,z)?(v.mode=31,-4):(v.havedict=1,m):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var a=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(f,p,m,u,g,_,h,d){var x,S,b,P,L,C,N,y,T,B=d.bits,w=0,O=0,v=0,z=0,V=0,k=0,$=0,tt=0,ct=0,W=0,X=null,pt=0,q=new a.Buf16(16),Q=new a.Buf16(16),gt=null,vt=0;for(w=0;w<=15;w++)q[w]=0;for(O=0;O<u;O++)q[p[m+O]]++;for(V=B,z=15;1<=z&&q[z]===0;z--);if(z<V&&(V=z),z===0)return g[_++]=20971520,g[_++]=20971520,d.bits=1,0;for(v=1;v<z&&q[v]===0;v++);for(V<v&&(V=v),w=tt=1;w<=15;w++)if(tt<<=1,(tt-=q[w])<0)return-1;if(0<tt&&(f===0||z!==1))return-1;for(Q[1]=0,w=1;w<15;w++)Q[w+1]=Q[w]+q[w];for(O=0;O<u;O++)p[m+O]!==0&&(h[Q[p[m+O]]++]=O);if(C=f===0?(X=gt=h,19):f===1?(X=o,pt-=257,gt=s,vt-=257,256):(X=l,gt=c,-1),w=v,L=_,$=O=W=0,b=-1,P=(ct=1<<(k=V))-1,f===1&&852<ct||f===2&&592<ct)return 1;for(;;){for(N=w-$,T=h[O]<C?(y=0,h[O]):h[O]>C?(y=gt[vt+h[O]],X[pt+h[O]]):(y=96,0),x=1<<w-$,v=S=1<<k;g[L+(W>>$)+(S-=x)]=N<<24|y<<16|T|0,S!==0;);for(x=1<<w-1;W&x;)x>>=1;if(x!==0?(W&=x-1,W+=x):W=0,O++,--q[w]==0){if(w===z)break;w=p[m+h[O]]}if(V<w&&(W&P)!==b){for($===0&&($=V),L+=v,tt=1<<(k=w-$);k+$<z&&!((tt-=q[k+$])<=0);)k++,tt<<=1;if(ct+=1<<k,f===1&&852<ct||f===2&&592<ct)return 1;g[b=W&P]=V<<24|k<<16|L-_|0}}return W!==0&&(g[L+W]=w-$<<24|64<<16|0),d.bits=V,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var a=e("../utils/common"),o=0,s=1;function l(D){for(var G=D.length;0<=--G;)D[G]=0}var c=0,f=29,p=256,m=p+1+f,u=30,g=19,_=2*m+1,h=15,d=16,x=7,S=256,b=16,P=17,L=18,C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(m+2));l(B);var w=new Array(2*u);l(w);var O=new Array(512);l(O);var v=new Array(256);l(v);var z=new Array(f);l(z);var V,k,$,tt=new Array(u);function ct(D,G,R,E,I){this.static_tree=D,this.extra_bits=G,this.extra_base=R,this.elems=E,this.max_length=I,this.has_stree=D&&D.length}function W(D,G){this.dyn_tree=D,this.max_code=0,this.stat_desc=G}function X(D){return D<256?O[D]:O[256+(D>>>7)]}function pt(D,G){D.pending_buf[D.pending++]=255&G,D.pending_buf[D.pending++]=G>>>8&255}function q(D,G,R){D.bi_valid>d-R?(D.bi_buf|=G<<D.bi_valid&65535,pt(D,D.bi_buf),D.bi_buf=G>>d-D.bi_valid,D.bi_valid+=R-d):(D.bi_buf|=G<<D.bi_valid&65535,D.bi_valid+=R)}function Q(D,G,R){q(D,R[2*G],R[2*G+1])}function gt(D,G){for(var R=0;R|=1&D,D>>>=1,R<<=1,0<--G;);return R>>>1}function vt(D,G,R){var E,I,Z=new Array(h+1),et=0;for(E=1;E<=h;E++)Z[E]=et=et+R[E-1]<<1;for(I=0;I<=G;I++){var j=D[2*I+1];j!==0&&(D[2*I]=gt(Z[j]++,j))}}function Mt(D){var G;for(G=0;G<m;G++)D.dyn_ltree[2*G]=0;for(G=0;G<u;G++)D.dyn_dtree[2*G]=0;for(G=0;G<g;G++)D.bl_tree[2*G]=0;D.dyn_ltree[2*S]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function Et(D){8<D.bi_valid?pt(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function Rt(D,G,R,E){var I=2*G,Z=2*R;return D[I]<D[Z]||D[I]===D[Z]&&E[G]<=E[R]}function Nt(D,G,R){for(var E=D.heap[R],I=R<<1;I<=D.heap_len&&(I<D.heap_len&&Rt(G,D.heap[I+1],D.heap[I],D.depth)&&I++,!Rt(G,E,D.heap[I],D.depth));)D.heap[R]=D.heap[I],R=I,I<<=1;D.heap[R]=E}function H(D,G,R){var E,I,Z,et,j=0;if(D.last_lit!==0)for(;E=D.pending_buf[D.d_buf+2*j]<<8|D.pending_buf[D.d_buf+2*j+1],I=D.pending_buf[D.l_buf+j],j++,E===0?Q(D,I,G):(Q(D,(Z=v[I])+p+1,G),(et=C[Z])!==0&&q(D,I-=z[Z],et),Q(D,Z=X(--E),R),(et=N[Z])!==0&&q(D,E-=tt[Z],et)),j<D.last_lit;);Q(D,S,G)}function Vt(D,G){var R,E,I,Z=G.dyn_tree,et=G.stat_desc.static_tree,j=G.stat_desc.has_stree,dt=G.stat_desc.elems,ht=-1;for(D.heap_len=0,D.heap_max=_,R=0;R<dt;R++)Z[2*R]!==0?(D.heap[++D.heap_len]=ht=R,D.depth[R]=0):Z[2*R+1]=0;for(;D.heap_len<2;)Z[2*(I=D.heap[++D.heap_len]=ht<2?++ht:0)]=1,D.depth[I]=0,D.opt_len--,j&&(D.static_len-=et[2*I+1]);for(G.max_code=ht,R=D.heap_len>>1;1<=R;R--)Nt(D,Z,R);for(I=dt;R=D.heap[1],D.heap[1]=D.heap[D.heap_len--],Nt(D,Z,1),E=D.heap[1],D.heap[--D.heap_max]=R,D.heap[--D.heap_max]=E,Z[2*I]=Z[2*R]+Z[2*E],D.depth[I]=(D.depth[R]>=D.depth[E]?D.depth[R]:D.depth[E])+1,Z[2*R+1]=Z[2*E+1]=I,D.heap[1]=I++,Nt(D,Z,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],function(ft,Pt){var mt,St,kt,Tt,yt,Ut,Lt=Pt.dyn_tree,Kt=Pt.max_code,A=Pt.stat_desc.static_tree,nt=Pt.stat_desc.has_stree,rt=Pt.stat_desc.extra_bits,lt=Pt.stat_desc.extra_base,ut=Pt.stat_desc.max_length,At=0;for(Tt=0;Tt<=h;Tt++)ft.bl_count[Tt]=0;for(Lt[2*ft.heap[ft.heap_max]+1]=0,mt=ft.heap_max+1;mt<_;mt++)ut<(Tt=Lt[2*Lt[2*(St=ft.heap[mt])+1]+1]+1)&&(Tt=ut,At++),Lt[2*St+1]=Tt,Kt<St||(ft.bl_count[Tt]++,yt=0,lt<=St&&(yt=rt[St-lt]),Ut=Lt[2*St],ft.opt_len+=Ut*(Tt+yt),nt&&(ft.static_len+=Ut*(A[2*St+1]+yt)));if(At!==0){do{for(Tt=ut-1;ft.bl_count[Tt]===0;)Tt--;ft.bl_count[Tt]--,ft.bl_count[Tt+1]+=2,ft.bl_count[ut]--,At-=2}while(0<At);for(Tt=ut;Tt!==0;Tt--)for(St=ft.bl_count[Tt];St!==0;)Kt<(kt=ft.heap[--mt])||(Lt[2*kt+1]!==Tt&&(ft.opt_len+=(Tt-Lt[2*kt+1])*Lt[2*kt],Lt[2*kt+1]=Tt),St--)}}(D,G),vt(Z,ht,D.bl_count)}function M(D,G,R){var E,I,Z=-1,et=G[1],j=0,dt=7,ht=4;for(et===0&&(dt=138,ht=3),G[2*(R+1)+1]=65535,E=0;E<=R;E++)I=et,et=G[2*(E+1)+1],++j<dt&&I===et||(j<ht?D.bl_tree[2*I]+=j:I!==0?(I!==Z&&D.bl_tree[2*I]++,D.bl_tree[2*b]++):j<=10?D.bl_tree[2*P]++:D.bl_tree[2*L]++,Z=I,ht=(j=0)===et?(dt=138,3):I===et?(dt=6,3):(dt=7,4))}function at(D,G,R){var E,I,Z=-1,et=G[1],j=0,dt=7,ht=4;for(et===0&&(dt=138,ht=3),E=0;E<=R;E++)if(I=et,et=G[2*(E+1)+1],!(++j<dt&&I===et)){if(j<ht)for(;Q(D,I,D.bl_tree),--j!=0;);else I!==0?(I!==Z&&(Q(D,I,D.bl_tree),j--),Q(D,b,D.bl_tree),q(D,j-3,2)):j<=10?(Q(D,P,D.bl_tree),q(D,j-3,3)):(Q(D,L,D.bl_tree),q(D,j-11,7));Z=I,ht=(j=0)===et?(dt=138,3):I===et?(dt=6,3):(dt=7,4)}}l(tt);var Y=!1;function F(D,G,R,E){q(D,(c<<1)+(E?1:0),3),function(I,Z,et,j){Et(I),pt(I,et),pt(I,~et),a.arraySet(I.pending_buf,I.window,Z,et,I.pending),I.pending+=et}(D,G,R)}r._tr_init=function(D){Y||(function(){var G,R,E,I,Z,et=new Array(h+1);for(I=E=0;I<f-1;I++)for(z[I]=E,G=0;G<1<<C[I];G++)v[E++]=I;for(v[E-1]=I,I=Z=0;I<16;I++)for(tt[I]=Z,G=0;G<1<<N[I];G++)O[Z++]=I;for(Z>>=7;I<u;I++)for(tt[I]=Z<<7,G=0;G<1<<N[I]-7;G++)O[256+Z++]=I;for(R=0;R<=h;R++)et[R]=0;for(G=0;G<=143;)B[2*G+1]=8,G++,et[8]++;for(;G<=255;)B[2*G+1]=9,G++,et[9]++;for(;G<=279;)B[2*G+1]=7,G++,et[7]++;for(;G<=287;)B[2*G+1]=8,G++,et[8]++;for(vt(B,m+1,et),G=0;G<u;G++)w[2*G+1]=5,w[2*G]=gt(G,5);V=new ct(B,C,p+1,m,h),k=new ct(w,N,0,u,h),$=new ct(new Array(0),y,0,g,x)}(),Y=!0),D.l_desc=new W(D.dyn_ltree,V),D.d_desc=new W(D.dyn_dtree,k),D.bl_desc=new W(D.bl_tree,$),D.bi_buf=0,D.bi_valid=0,Mt(D)},r._tr_stored_block=F,r._tr_flush_block=function(D,G,R,E){var I,Z,et=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=function(j){var dt,ht=4093624447;for(dt=0;dt<=31;dt++,ht>>>=1)if(1&ht&&j.dyn_ltree[2*dt]!==0)return o;if(j.dyn_ltree[18]!==0||j.dyn_ltree[20]!==0||j.dyn_ltree[26]!==0)return s;for(dt=32;dt<p;dt++)if(j.dyn_ltree[2*dt]!==0)return s;return o}(D)),Vt(D,D.l_desc),Vt(D,D.d_desc),et=function(j){var dt;for(M(j,j.dyn_ltree,j.l_desc.max_code),M(j,j.dyn_dtree,j.d_desc.max_code),Vt(j,j.bl_desc),dt=g-1;3<=dt&&j.bl_tree[2*T[dt]+1]===0;dt--);return j.opt_len+=3*(dt+1)+5+5+4,dt}(D),I=D.opt_len+3+7>>>3,(Z=D.static_len+3+7>>>3)<=I&&(I=Z)):I=Z=R+5,R+4<=I&&G!==-1?F(D,G,R,E):D.strategy===4||Z===I?(q(D,2+(E?1:0),3),H(D,B,w)):(q(D,4+(E?1:0),3),function(j,dt,ht,ft){var Pt;for(q(j,dt-257,5),q(j,ht-1,5),q(j,ft-4,4),Pt=0;Pt<ft;Pt++)q(j,j.bl_tree[2*T[Pt]+1],3);at(j,j.dyn_ltree,dt-1),at(j,j.dyn_dtree,ht-1)}(D,D.l_desc.max_code+1,D.d_desc.max_code+1,et+1),H(D,D.dyn_ltree,D.dyn_dtree)),Mt(D),E&&Et(D)},r._tr_tally=function(D,G,R){return D.pending_buf[D.d_buf+2*D.last_lit]=G>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&G,D.pending_buf[D.l_buf+D.last_lit]=255&R,D.last_lit++,G===0?D.dyn_ltree[2*R]++:(D.matches++,G--,D.dyn_ltree[2*(v[R]+p+1)]++,D.dyn_dtree[2*X(G)]++),D.last_lit===D.lit_bufsize-1},r._tr_align=function(D){q(D,2,3),Q(D,S,B),function(G){G.bi_valid===16?(pt(G,G.bi_buf),G.bi_buf=0,G.bi_valid=0):8<=G.bi_valid&&(G.pending_buf[G.pending++]=255&G.bi_buf,G.bi_buf>>=8,G.bi_valid-=8)}(D)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(a){(function(o,s){if(!o.setImmediate){var l,c,f,p,m=1,u={},g=!1,_=o.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(o);h=h&&h.setTimeout?h:o,l={}.toString.call(o.process)==="[object process]"?function(b){process.nextTick(function(){x(b)})}:function(){if(o.postMessage&&!o.importScripts){var b=!0,P=o.onmessage;return o.onmessage=function(){b=!1},o.postMessage("","*"),o.onmessage=P,b}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(b){o.postMessage(p+b,"*")}):o.MessageChannel?((f=new MessageChannel).port1.onmessage=function(b){x(b.data)},function(b){f.port2.postMessage(b)}):_&&"onreadystatechange"in _.createElement("script")?(c=_.documentElement,function(b){var P=_.createElement("script");P.onreadystatechange=function(){x(b),P.onreadystatechange=null,c.removeChild(P),P=null},c.appendChild(P)}):function(b){setTimeout(x,0,b)},h.setImmediate=function(b){typeof b!="function"&&(b=new Function(""+b));for(var P=new Array(arguments.length-1),L=0;L<P.length;L++)P[L]=arguments[L+1];var C={callback:b,args:P};return u[m]=C,l(m),m++},h.clearImmediate=d}function d(b){delete u[b]}function x(b){if(g)setTimeout(x,0,b);else{var P=u[b];if(P){g=!0;try{(function(L){var C=L.callback,N=L.args;switch(N.length){case 0:C();break;case 1:C(N[0]);break;case 2:C(N[0],N[1]);break;case 3:C(N[0],N[1],N[2]);break;default:C.apply(s,N)}})(P)}finally{d(b),g=!1}}}}function S(b){b.source===o&&typeof b.data=="string"&&b.data.indexOf(p)===0&&x(+b.data.slice(p.length))}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,typeof pr<"u"?pr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Sl);var Em=Sl.exports;const ym=Mm(Em),Tm=/ERROR:\s*\d+:(\d+)/gi,bm=["VERTEX_SHADER","FRAGMENT_SHADER"],Ml=(i,t="")=>{const e=[...t.matchAll(Tm)],n=new Map(e.map((r,a)=>{const o=parseInt(r[1]),s=e[a+1],l=s?s.index:t.length,c=t.substring(r.index??0,l);return[o-1,c]}));return i.split(`
`).map((r,a)=>{const o=n.get(a);return`${a+1}: ${r}${o?`

^^^${o}`:""}`})},Am=(i,t)=>{const e=[];return Object.keys(i).forEach(n=>{i[n]===t&&e.push(n)}),e.length?e.join(" | "):t},wm=(i,t,e)=>{const n=i.createShader(e);if(!n)throw new Error("Failed to create shader");if(i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS)){const a=i.getShaderInfoLog(n)??"";throw i.deleteShader(n),new Error(`Failed to compile shader: ${a}
${Ml(t,a)}`)}return n},Cm=(i,t,e,n)=>{const r=i.createProgram();if(!r)throw new Error("Failed to create program");if(t.forEach(o=>{i.attachShader(r,o)}),i.linkProgram(r),!i.getProgramParameter(r,i.LINK_STATUS)){const o=i.getProgramInfoLog(r);throw i.deleteProgram(r),new Error(`Error in program linking: ${o}
${t.map(s=>{const l=Ml(i.getShaderSource(s)??""),c=i.getShaderParameter(s,i.SHADER_TYPE);return`${Am(i,c)}:
${l}`}).join(`
`)}`)}return r},us=(i,t,e,n)=>{const r=[];return t.forEach((a,o)=>{r.push(wm(i,a,i[bm[o]]))}),Cm(i,r)};async function Rm(i,t){return new Promise(e=>{const n=Lm(i,t);n&&(n.onload=()=>{e({baseColor:Dm(i,t,n),metalic:n})})})}function Pm(i){return Um(i)}function Lm(i,t){const e=document.createElement("canvas");e.width=i.width,e.height=i.height;var n=e.getContext("webgl");if(!n)return;var r=us(n,[Ao.vertexShader,Ao.fragmentShader]);n.useProgram(r);var a=n.getAttribLocation(r,"a_position"),o=n.getAttribLocation(r,"a_texCoord"),s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),ps(n,0,0,i.width,i.height);var l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),n.STATIC_DRAW);var c=n.createTexture();n.bindTexture(n.TEXTURE_2D,c),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i);var f=n.createTexture();n.bindTexture(n.TEXTURE_2D,f),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t);var p=n.getUniformLocation(r,"u_resolution"),m=n.getUniformLocation(r,"u_image0"),u=n.getUniformLocation(r,"u_image1");n.viewport(0,0,n.canvas.width,n.canvas.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(r),n.enableVertexAttribArray(a),n.bindBuffer(n.ARRAY_BUFFER,s);var g=2,_=n.FLOAT,h=!1,d=0,x=0;n.vertexAttribPointer(a,g,_,h,d,x),n.enableVertexAttribArray(o),n.bindBuffer(n.ARRAY_BUFFER,l);var g=2,_=n.FLOAT,h=!1,d=0,x=0;n.vertexAttribPointer(o,g,_,h,d,x),n.uniform2f(p,n.canvas.width,n.canvas.height),n.uniform1i(m,0),n.uniform1i(u,1),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,f),n.drawArrays(n.TRIANGLES,0,6);const S=new Image;return S.src=n.canvas.toDataURL(),n.getExtension("WEBGL_lose_context")?.loseContext(),S}function Dm(i,t,e){const n=document.createElement("canvas");n.width=i.width,n.height=i.height;var r=n.getContext("webgl");if(!r)return new Image;var a=us(r,[bo.vertexShader,bo.fragmentShader]);r.useProgram(a);var o=r.getAttribLocation(a,"a_position"),s=r.getAttribLocation(a,"a_texCoord"),l=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,l),ps(r,0,0,i.width,i.height);var c=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,c),r.bufferData(r.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),r.STATIC_DRAW);var f=r.createTexture();r.bindTexture(r.TEXTURE_2D,f),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,i);var p=r.createTexture();r.bindTexture(r.TEXTURE_2D,p),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t);var m=r.createTexture();r.bindTexture(r.TEXTURE_2D,m),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e);var u=r.getUniformLocation(a,"u_resolution"),g=r.getUniformLocation(a,"u_image0"),_=r.getUniformLocation(a,"u_image1"),h=r.getUniformLocation(a,"u_image2");r.viewport(0,0,r.canvas.width,r.canvas.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(a),r.enableVertexAttribArray(o),r.bindBuffer(r.ARRAY_BUFFER,l);var d=2,x=r.FLOAT,S=!1,b=0,P=0;r.vertexAttribPointer(o,d,x,S,b,P),r.enableVertexAttribArray(s),r.bindBuffer(r.ARRAY_BUFFER,c);var d=2,x=r.FLOAT,S=!1,b=0,P=0;r.vertexAttribPointer(s,d,x,S,b,P),r.uniform2f(u,r.canvas.width,r.canvas.height),r.uniform1i(g,0),r.uniform1i(_,1),r.uniform1i(h,2),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,f),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,p),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,m),r.drawArrays(r.TRIANGLES,0,6);const L=new Image;return L.src=r.canvas.toDataURL(),r.getExtension("WEBGL_lose_context")?.loseContext(),L}function Um(i){const t=document.createElement("canvas");t.width=i.width,t.height=i.height;var e=t.getContext("webgl");if(!e)return new Image;var n=us(e,[To.vertexShader,To.fragmentShader]),r=e.getAttribLocation(n,"a_position"),a=e.getAttribLocation(n,"a_texCoord"),o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),ps(e,0,0,i.width,i.height);var s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW);var l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i);var c=e.getUniformLocation(n,"u_resolution");e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n),e.enableVertexAttribArray(r),e.bindBuffer(e.ARRAY_BUFFER,o);var f=2,p=e.FLOAT,m=!1,u=0,_=0;e.vertexAttribPointer(r,f,p,m,u,_),e.enableVertexAttribArray(a),e.bindBuffer(e.ARRAY_BUFFER,s);var f=2,p=e.FLOAT,m=!1,u=0,_=0;e.vertexAttribPointer(a,f,p,m,u,_),e.uniform2f(c,e.canvas.width,e.canvas.height);var g=e.TRIANGLES,_=0,h=6;e.drawArrays(g,_,h);const d=new Image;return d.src=e.canvas.toDataURL(),e.getExtension("WEBGL_lose_context")?.loseContext(),d}function ps(i,t,e,n,r){var a=t,o=t+n,s=e,l=e+r;i.bufferData(i.ARRAY_BUFFER,new Float32Array([a,s,o,s,a,l,a,l,o,s,o,l]),i.STATIC_DRAW)}const To={uniforms:{tGloss:{value:null}},vertexShader:`
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
  
      uniform vec2 u_resolution;
  
      varying vec2 v_texCoord;
  
      void main() {
          // convert the rectangle from pixels to 0.0 to 1.0
          vec2 zeroToOne = a_position / u_resolution;
  
          // convert from 0->1 to 0->2
          vec2 zeroToTwo = zeroToOne * 2.0;
  
          // convert from 0->2 to -1->+1 (clipspace)
          vec2 clipSpace = zeroToTwo - 1.0;
  
          gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
          // pass the texCoord to the fragment shader
          // The GPU will interpolate this value between points.
          v_texCoord = a_texCoord;
      }
      `,fragmentShader:`
          precision mediump float;
   
          // our texture
          uniform sampler2D u_image;
          
          // the texCoords passed in from the vertex shader.
          varying vec2 v_texCoord;
          
          void main() {
              // Look up a color from the texture.
              gl_FragColor = vec4(vec3(1.0 - texture2D(u_image, v_texCoord).g), 1);
            
          } 
      `},bo={uniforms:{tGloss:{value:null}},vertexShader:`
      attribute vec2 a_position;
  attribute vec2 a_texCoord;
  
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
     // convert the rectangle from pixels to 0.0 to 1.0
     vec2 zeroToOne = a_position / u_resolution;
  
     // convert from 0->1 to 0->2
     vec2 zeroToTwo = zeroToOne * 2.0;
  
     // convert from 0->2 to -1->+1 (clipspace)
     vec2 clipSpace = zeroToTwo - 1.0;
  
     gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
     // pass the texCoord to the fragment shader
     // The GPU will interpolate this value between points.
     v_texCoord = a_texCoord;
  }
      `,fragmentShader:`
      precision mediump float;
  
  // our textures
  uniform sampler2D u_image0;
  uniform sampler2D u_image1;
  uniform sampler2D u_image2;
  
  // the texCoords passed in from the vertex shader.
  varying vec2 v_texCoord;
  
  vec3 lerp(vec3 a, vec3 b, vec3 w)
  {
    return a + w*(b-a);
  }
  
  float brightness(float r, float g, float b)
  {
       return sqrt(
       r * r * 0.299 +
       g * g * 0.587 +
       b * b * 0.114);
  }
  
  float solveMetallic(float dif, float spec, float strengthSpec)
  {
      if (spec < 0.04){
        return 0.0;
      }
  
      float a = 0.04;
      float b = dif * strengthSpec / (1.0 - 0.04) + spec - 2.0 * 0.04;
      float c = 0.04 - spec;
      float D = max(b * b - 4.0 * a * c, 0.0);
      return clamp((-b + sqrt(D)) / (2.0 * a), 0.0, 1.0);
  }
  
  void main() {
    float epsilon = 1e-6;
    vec4 diffCol = texture2D(u_image0, v_texCoord);//diffuse
    vec4 specCol = texture2D(u_image1, v_texCoord);//metall
    vec3 metCol = texture2D(u_image2, v_texCoord).rgb;//metall
  
    float oneMinusSpecularStrength = 1.0 - max(specCol.r, max(specCol.g, specCol.b));
    // vec3 metCol = vec3(solveMetallic(brightness(diffCol.r, diffCol.g, diffCol.b), brightness(specCol.r, specCol.g, specCol.b), oneMinusSpecularStrength));
  
    vec3 baseColorFromDiffuse = (diffCol * (oneMinusSpecularStrength / (1.0 - 0.04) / max(1.0 - metCol.r, epsilon))).rgb;
    vec3 baseColorFromSpecular = (specCol - ((0.04 * (1.0 / max(metCol.r, epsilon))) * (1.0 - metCol.r))).rgb;
    baseColorFromSpecular = clamp(baseColorFromSpecular, 0.0, 1.0);
    
     gl_FragColor = vec4(lerp(baseColorFromDiffuse, baseColorFromSpecular, metCol), 1.0);
  }
      `},Ao={uniforms:{tGloss:{value:null}},vertexShader:`
      attribute vec2 a_position;
  attribute vec2 a_texCoord;
  
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
     // convert the rectangle from pixels to 0.0 to 1.0
     vec2 zeroToOne = a_position / u_resolution;
  
     // convert from 0->1 to 0->2
     vec2 zeroToTwo = zeroToOne * 2.0;
  
     // convert from 0->2 to -1->+1 (clipspace)
     vec2 clipSpace = zeroToTwo - 1.0;
  
     gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
     // pass the texCoord to the fragment shader
     // The GPU will interpolate this value between points.
     v_texCoord = a_texCoord;
  }
      `,fragmentShader:`
      precision mediump float;
  
  // our textures
  uniform sampler2D u_image0;
  uniform sampler2D u_image1;
  
  // the texCoords passed in from the vertex shader.
  varying vec2 v_texCoord;
  
  vec4 lerp(vec4 a, vec4 b, vec4 w)
  {
    return a + w*(b-a);
  }
  
  float brightness(float r, float g, float b)
  {
       return sqrt(
       r * r * 0.299 +
       g * g * 0.587 +
       b * b * 0.114);
  }
  
  float solveMetallic(float dif, float spec, float strengthSpec)
  {
      if (spec < 0.04){
        return 0.0;
      }
      float a = 0.04;
      float b = dif * strengthSpec / (1.0 - 0.04) + spec - 2.0 * 0.04;
      float c = 0.04 - spec;
      float D = max(b * b - 4.0 * a * c, 0.0);
      return clamp((-b + sqrt(D)) / (2.0 * a), 0.0, 1.0);
  }
  
  void main() {
    float epsilon = 1e-6;
    vec4 diffCol = texture2D(u_image0, v_texCoord);//diffuse
    vec4 specCol = texture2D(u_image1, v_texCoord);//metall
  
    float oneMinusSpecularStrength = 1.0 - max(specCol.r, max(specCol.g, specCol.b));
    float testtt = brightness(specCol.r, specCol.g, specCol.b);
    vec3 metCol = vec3(solveMetallic(brightness(diffCol.r, diffCol.g, diffCol.b), brightness(specCol.r, specCol.g, specCol.b), oneMinusSpecularStrength));  
     gl_FragColor = vec4(metCol, 1.0);
  }
      `};var Im=An('<div class="bg-slate-100 flex flex-col pt-4 md:pt-0 md:h-screen w-screen justify-center items-center relative z-10"><div class="flex flex-col md:flex-row md:space-x-48 justify-center items-center"><div class="flex flex-col justify-center items-center"><h2 class=flex>Diffuse Texture</h2><div class="w-48 h-48 bg-slate-200 rounded-md overflow-hidden cursor-pointer hover:bg-slate-300"><input id=albedoFileInput class=hidden type=file accept=".jpeg, .jpg, .png"><div class="flex items-center justify-center h-full"><svg xmlns=http://www.w3.org/2000/svg width=36 height=36 viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path></svg></div></div></div><div class="flex flex-col justify-center items-center mt-2 md:mt-0"><h2 class=flex>Specular Texture</h2><div class="w-48 h-48 bg-slate-200 rounded-md overflow-hidden cursor-pointer hover:bg-slate-300"><input id=reflectionFileInput class=hidden type=file accept=".jpeg, .jpg, .png"><div class="flex items-center justify-center h-full"><svg xmlns=http://www.w3.org/2000/svg width=36 height=36 viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path></svg></div></div></div><div class="flex flex-col justify-center items-center mt-2 md:mt-0"><div class=inline-flex><h2>Glossiness Texture</h2><div class="ml-2 relative inline-block w-8 h-5"><input id=switch-component type=checkbox class="peer appearance-none w-8 h-5 bg-slate-300 rounded-full cursor-pointer transition-colors duration-300"><label for=switch-component class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-3 cursor-pointer"></label></div><h2>Roughness Texture</h2></div><button></button><div class="w-48 h-48 bg-slate-200 rounded-md overflow-hidden cursor-pointer hover:bg-slate-300"><input id=glossinessFileInput class=hidden type=file accept=".jpeg, .jpg, .png"><div class="flex items-center justify-center h-full"><svg xmlns=http://www.w3.org/2000/svg width=36 height=36 viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path></svg></div></div></div></div><div class="flex w-full justify-center mt-4 md:mt-16"><button class="bg-slate-600 text-white p-2 rounded-md">Convert Maps to Metalness/Roughness PBR'),va=An('<img class="w-48 h-48"alt="">');function Nm(i){const[t,e]=We(),[n,r]=We(),[a,o]=We(),[s,l]=We(!0),c=new xl;async function f(p){return new Promise((m,u)=>{const _=p.currentTarget.files;if(console.log("change texture"),FileReader&&_&&_.length>0){new FileReader().readAsDataURL(_[0]);var h=new FileReader;h.onload=function(){h.result&&c.load(h.result,x=>{x.flipY=!0,x.wrapS=Re,x.wrapT=Re,m(x)})},h.readAsDataURL(_[0])}})}return(()=>{var p=Im(),m=p.firstChild,u=m.firstChild,g=u.firstChild,_=g.nextSibling,h=_.firstChild,d=u.nextSibling,x=d.firstChild,S=x.nextSibling,b=S.firstChild,P=d.nextSibling,L=P.firstChild,C=L.firstChild,N=C.nextSibling,y=N.firstChild,T=N.nextSibling,B=L.nextSibling,w=B.nextSibling,O=w.firstChild,v=m.nextSibling,z=v.firstChild;return _.$$click=()=>document.getElementById("albedoFileInput")?.click(),Pi(_,(()=>{var V=Ne(()=>!!t()?.image?.src);return()=>V()&&(()=>{var k=va();return Bn(()=>Wr(k,"src",t()?.image?.src)),k})()})(),h),h.addEventListener("change",V=>{f(V).then(k=>{e(k),k.colorSpace=Pe,i.viewer.setDiffuseTexture(k)})}),S.$$click=()=>document.getElementById("reflectionFileInput")?.click(),Pi(S,(()=>{var V=Ne(()=>!!n()?.image.src);return()=>V()&&(()=>{var k=va();return Bn(()=>Wr(k,"src",n()?.image.src)),k})()})(),b),b.addEventListener("change",V=>{f(V).then(k=>{r(k),k.colorSpace=Pe,i.viewer.setReflectionTexture(k)})}),y.addEventListener("change",()=>l(!s())),w.$$click=()=>document.getElementById("glossinessFileInput")?.click(),Pi(w,(()=>{var V=Ne(()=>!!a()?.image.src);return()=>V()&&(()=>{var k=va();return Bn(()=>Wr(k,"src",a()?.image.src)),k})()})(),O),O.addEventListener("change",V=>{f(V).then(k=>{o(k),i.viewer.setGlossinesinesTexture(k)})}),z.$$click=()=>{const V=t(),k=n(),$=a();V&&k&&$&&i.onConvert(V,k,$,s())},Bn(V=>{var k=s()?"text-gray-900":"text-gray-300 ",$=s()?"ml-2 text-gray-300 ":"ml-2 text-gray-900";return k!==V.e&&Ss(C,V.e=k),$!==V.t&&Ss(T,V.t=$),V},{e:void 0,t:void 0}),p})()}es(["click"]);var Om=An('<div class="fixed bottom-0 w-full z-50 md:right-12 md:w-56 justify-center items-center"><div class="flex items-center justify-center w-full"><svg class="fill-slate-900 w-20"viewBox="0 0 159.70549 81.158867"version=1.1 id=svg1 xmlns=http://www.w3.org/2000/svg><g id=layer1 transform=translate(-24.901585,-100.69789)><path id=path d="m 152.76613,100.69789 c 0.1383,0.87592 1.18548,7.55248 -3.04477,13.12736 -2.96563,3.90829 -6.2216,5.59032 -7.7463,6.21254 a 79.992861,72.742897 0 0 0 -37.28971,-8.51214 79.992861,72.742897 0 0 0 -37.93774,8.85992 c -1.052116,-0.35534 -4.886069,-1.89375 -8.331792,-6.43475 -4.230253,-5.57488 -3.183595,-12.25092 -3.045292,-13.12684 0,0 -3.69118,2.49591 -7.059,8.42739 -2.818524,4.96404 -3.415164,10.2102 -3.438033,13.02711 -0.05234,6.44779 2.086956,11.47876 2.237589,11.82512 A 79.992861,72.742897 0 0 0 24.901585,181.85676 H 184.60708 a 79.992861,72.742897 0 0 0 -23.23269,-48.77377 c 0.65384,-1.79806 1.9297,-5.9522 1.88929,-10.93008 -0.0229,-2.81691 -0.62003,-8.06307 -3.43855,-13.02711 -3.36782,-5.93148 -7.059,-8.42791 -7.059,-8.42791 z m -24.29309,58.53441 a 5.3982387,5.3982387 0 0 1 5.39812,5.39812 5.3982387,5.3982387 0 0 1 -5.39812,5.39812 5.3982387,5.3982387 0 0 1 -5.39812,-5.39812 5.3982387,5.3982387 0 0 1 5.39812,-5.39812 z m -46.773888,0.19172 a 5.3982387,5.3982387 0 0 1 5.398637,5.39812 5.3982387,5.3982387 0 0 1 -5.398637,5.39812 5.3982387,5.3982387 0 0 1 -5.39812,-5.39812 5.3982387,5.3982387 0 0 1 5.39812,-5.39812 z"></path></g></svg></div><div class="bg-slate-200 rounded-t-lg"><h1 class="text-center pt-2 pl-1.5 pr-1.5">Hello, im notahero, if you want donate click here👈!</h1><div class="bg-slate-300 m-2 rounded-lg text-center mt-2 pt-2 pb-2"><p class="">My github is: <a href=https://github.com/F1shez target=_blank>@F1shez'),Fm=An('<div class="fixed w-screen h-screen top-0 left-0 z-40">'),Bm=An('<div class="bg-slate-300 m-2 rounded-lg text-center mt-2 pt-2 pb-2"><div class="flex items-center justify-center w-full"><svg class="absolute h-6"xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 40 40"><rect width=40 height=40 fill=#009393 rx=20></rect><path fill=#fff fill-rule=evenodd d="M20.024 21.43c3.44 0 6.314-.582 7.017-1.359-.596-.659-2.754-1.178-5.494-1.32v1.641q-.737.039-1.523.038-.786 0-1.524-.038v-1.641c-2.739.142-4.898.661-5.494 1.32.704.777 3.578 1.358 7.018 1.358zm6.111-7.727v2.26h-4.588v1.568c3.223.168 5.642.857 5.66 1.681v1.719c-.018.825-2.437 1.512-5.66 1.68v3.847H18.5v-3.847c-3.223-.168-5.64-.855-5.658-1.68v-1.719c.018-.825 2.435-1.514 5.658-1.681v-1.567h-4.588v-2.261zm-14.028-3.598h16.108c.386 0 .74.203.932.532l4.693 8.058c.242.418.17.945-.177 1.284L20.747 32.588a1.083 1.083 0 0 1-1.51 0L6.335 19.996a1.05 1.05 0 0 1-.16-1.31l5.016-8.074a1.08 1.08 0 0 1 .916-.506z"clip-rule=evenodd></path></svg><img class=h-32 src="./qr_code_usdt_trc20 1.png"alt=""></div><p class="text-center ml-1.5 mr-1.5">Scan QR-code for send USDT (only USDT TRC20).'),zm=An('<div class="text-center bg-slate-300 m-2 rounded-lg mt-2 pt-2 pb-2"><h1>Adress USDT TRC20</h1><p class="text-sm break-all cursor-pointer z-50 hover:bg-slate-400">TJptwvU3tEJwALpnPK11udq6b3mmMhkCas');function km(){const[i,t]=We(!1);function e(n){navigator.clipboard.writeText(n.target.innerText)}return[Ne(()=>Ne(()=>!!i())()&&(()=>{var n=Fm();return n.$$click=()=>{t(!1)},n})()),(()=>{var n=Om(),r=n.firstChild,a=r.nextSibling,o=a.firstChild;return o.nextSibling,a.$$click=()=>{t(!0)},Pi(a,(()=>{var s=Ne(()=>!!i());return()=>s()&&[Bm(),(()=>{var l=zm(),c=l.firstChild,f=c.nextSibling;return f.$$click=e,l})()]})(),null),n})()]}es(["click"]);var Hm=An('<div class="absolute opacity-75 w-full h-full z-50 bg-slate-100 flex items-center justify-center"><svg aria-hidden=true class="inline w-56 h-56 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"viewBox="0 0 100 101"fill=none xmlns=http://www.w3.org/2000/svg><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"fill=currentColor></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"fill=currentFill></path></svg><div class="absolute w-full h-full flex items-center justify-center text-center"><span>Converting...'),Gm=An('<div class="flex absolute w-full mt-4 md:bottom-8 justify-center items-center"><button class=" bg-slate-500 z-40 p-2 text-center rounded-md text-white">Download maps');function Vm(){let i=new Sm;const t=new xl,[e,n]=We(!1),[r,a]=We(),[o,s]=We(),[l,c]=We(),[f,p]=We(!1);function m(h,d,x,S=!0){p(!0),Rm(h?.image,d?.image).then(b=>{if(console.log(b),t.load(b.baseColor.src,P=>{P.colorSpace=Pe,P.wrapS=Re,P.wrapT=Re,a(P),i.setAlbdeoTexturePBR(P)}),t.load(b.metalic.src,P=>{P.wrapS=Re,P.wrapT=Re,c(P),i.setMetalnessTexturePBR(P)}),S){const P=Pm(x?.image);t.load(P.src,L=>{L.wrapS=Re,L.wrapT=Re,s(L),i.setRoughnessTexturePBR(L)})}else{const P=x?.image;t.load(P.src,L=>{L.wrapS=Re,L.wrapT=Re,s(L),i.setRoughnessTexturePBR(L)})}p(!1),n(!0)})}function u(){g([r()?.image,l()?.image,o()?.image])}async function g(h){const d=await _(h),x=URL.createObjectURL(d),S=document.createElement("a");S.href=x,S.download="images.zip",S.click(),URL.revokeObjectURL(x)}async function _(h){const d=new ym;for(let S=0;S<h.length;S++){const b=document.createElement("canvas");b.width=h[S].width,b.height=h[S].height;const P=b.getContext("2d");P&&(P.drawImage(h[S],0,0),d.file(`image${S+1}.png`,await Promise.resolve(new Promise((L,C)=>{b.toBlob(N=>L(N),"image/png",1)})),{binary:!0}))}return await d.generateAsync({type:"blob"})}return[xa(km,{}),Ne(()=>Ne(()=>!!f())()&&Hm()),Ne(()=>Ne(()=>!e())()&&xa(Nm,{viewer:i,onConvert:m})),Ne(()=>Ne(()=>!!e())()&&(()=>{var h=Gm(),d=h.firstChild;return d.$$click=u,h})())]}es(["click"]);const Wm=document.getElementById("root");Nl(()=>xa(Vm,{}),Wm);
