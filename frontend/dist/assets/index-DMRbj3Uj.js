(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function wA(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Fm={exports:{}},au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ES;function DA(){if(ES)return au;ES=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:i,key:u,ref:r!==void 0?r:null,props:l}}return au.Fragment=e,au.jsx=n,au.jsxs=n,au}var TS;function NA(){return TS||(TS=1,Fm.exports=DA()),Fm.exports}var X=NA(),Bm={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AS;function UA(){if(AS)return gt;AS=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function S(z,J,be){this.props=z,this.context=J,this.refs=y,this.updater=be||M}S.prototype.isReactComponent={},S.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=S.prototype;function P(z,J,be){this.props=z,this.context=J,this.refs=y,this.updater=be||M}var R=P.prototype=new U;R.constructor=P,b(R,S.prototype),R.isPureReactComponent=!0;var D=Array.isArray;function O(){}var C={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(z,J,be){var Re=be.ref;return{$$typeof:o,type:z,key:J,ref:Re!==void 0?Re:null,props:be}}function I(z,J){return N(z.type,J,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function G(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(be){return J[be]})}var ie=/\/+/g;function re(z,J){return typeof z=="object"&&z!==null&&z.key!=null?G(""+z.key):J.toString(36)}function Z(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,J,be,Re,Pe){var te=typeof z;(te==="undefined"||te==="boolean")&&(z=null);var xe=!1;if(z===null)xe=!0;else switch(te){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(z.$$typeof){case o:case e:xe=!0;break;case _:return xe=z._init,B(xe(z._payload),J,be,Re,Pe)}}if(xe)return Pe=Pe(z),xe=Re===""?"."+re(z,0):Re,D(Pe)?(be="",xe!=null&&(be=xe.replace(ie,"$&/")+"/"),B(Pe,J,be,"",function(at){return at})):Pe!=null&&(H(Pe)&&(Pe=I(Pe,be+(Pe.key==null||z&&z.key===Pe.key?"":(""+Pe.key).replace(ie,"$&/")+"/")+xe)),J.push(Pe)),1;xe=0;var Se=Re===""?".":Re+":";if(D(z))for(var Be=0;Be<z.length;Be++)Re=z[Be],te=Se+re(Re,Be),xe+=B(Re,J,be,te,Pe);else if(Be=v(z),typeof Be=="function")for(z=Be.call(z),Be=0;!(Re=z.next()).done;)Re=Re.value,te=Se+re(Re,Be++),xe+=B(Re,J,be,te,Pe);else if(te==="object"){if(typeof z.then=="function")return B(Z(z),J,be,Re,Pe);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return xe}function V(z,J,be){if(z==null)return z;var Re=[],Pe=0;return B(z,Re,"","",function(te){return J.call(be,te,Pe++)}),Re}function Q(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(be){(z._status===0||z._status===-1)&&(z._status=1,z._result=be)},function(be){(z._status===0||z._status===-1)&&(z._status=2,z._result=be)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var de=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},k={map:V,forEach:function(z,J,be){V(z,function(){J.apply(this,arguments)},be)},count:function(z){var J=0;return V(z,function(){J++}),J},toArray:function(z){return V(z,function(J){return J})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return gt.Activity=x,gt.Children=k,gt.Component=S,gt.Fragment=n,gt.Profiler=r,gt.PureComponent=P,gt.StrictMode=i,gt.Suspense=p,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,gt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return C.H.useMemoCache(z)}},gt.cache=function(z){return function(){return z.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(z,J,be){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Re=b({},z.props),Pe=z.key;if(J!=null)for(te in J.key!==void 0&&(Pe=""+J.key),J)!T.call(J,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&J.ref===void 0||(Re[te]=J[te]);var te=arguments.length-2;if(te===1)Re.children=be;else if(1<te){for(var xe=Array(te),Se=0;Se<te;Se++)xe[Se]=arguments[Se+2];Re.children=xe}return N(z.type,Pe,Re)},gt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},gt.createElement=function(z,J,be){var Re,Pe={},te=null;if(J!=null)for(Re in J.key!==void 0&&(te=""+J.key),J)T.call(J,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Pe[Re]=J[Re]);var xe=arguments.length-2;if(xe===1)Pe.children=be;else if(1<xe){for(var Se=Array(xe),Be=0;Be<xe;Be++)Se[Be]=arguments[Be+2];Pe.children=Se}if(z&&z.defaultProps)for(Re in xe=z.defaultProps,xe)Pe[Re]===void 0&&(Pe[Re]=xe[Re]);return N(z,te,Pe)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(z){return{$$typeof:f,render:z}},gt.isValidElement=H,gt.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:Q}},gt.memo=function(z,J){return{$$typeof:d,type:z,compare:J===void 0?null:J}},gt.startTransition=function(z){var J=C.T,be={};C.T=be;try{var Re=z(),Pe=C.S;Pe!==null&&Pe(be,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(O,de)}catch(te){de(te)}finally{J!==null&&be.types!==null&&(J.types=be.types),C.T=J}},gt.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},gt.use=function(z){return C.H.use(z)},gt.useActionState=function(z,J,be){return C.H.useActionState(z,J,be)},gt.useCallback=function(z,J){return C.H.useCallback(z,J)},gt.useContext=function(z){return C.H.useContext(z)},gt.useDebugValue=function(){},gt.useDeferredValue=function(z,J){return C.H.useDeferredValue(z,J)},gt.useEffect=function(z,J){return C.H.useEffect(z,J)},gt.useEffectEvent=function(z){return C.H.useEffectEvent(z)},gt.useId=function(){return C.H.useId()},gt.useImperativeHandle=function(z,J,be){return C.H.useImperativeHandle(z,J,be)},gt.useInsertionEffect=function(z,J){return C.H.useInsertionEffect(z,J)},gt.useLayoutEffect=function(z,J){return C.H.useLayoutEffect(z,J)},gt.useMemo=function(z,J){return C.H.useMemo(z,J)},gt.useOptimistic=function(z,J){return C.H.useOptimistic(z,J)},gt.useReducer=function(z,J,be){return C.H.useReducer(z,J,be)},gt.useRef=function(z){return C.H.useRef(z)},gt.useState=function(z){return C.H.useState(z)},gt.useSyncExternalStore=function(z,J,be){return C.H.useSyncExternalStore(z,J,be)},gt.useTransition=function(){return C.H.useTransition()},gt.version="19.2.7",gt}var RS;function e0(){return RS||(RS=1,Bm.exports=UA()),Bm.exports}var Qt=e0();const LA=wA(Qt);var Hm={exports:{}},ru={},Gm={exports:{}},Vm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS;function OA(){return CS||(CS=1,(function(o){function e(B,V){var Q=B.length;B.push(V);e:for(;0<Q;){var de=Q-1>>>1,k=B[de];if(0<r(k,V))B[de]=V,B[Q]=k,Q=de;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var V=B[0],Q=B.pop();if(Q!==V){B[0]=Q;e:for(var de=0,k=B.length,z=k>>>1;de<z;){var J=2*(de+1)-1,be=B[J],Re=J+1,Pe=B[Re];if(0>r(be,Q))Re<k&&0>r(Pe,be)?(B[de]=Pe,B[Re]=Q,de=Re):(B[de]=be,B[J]=Q,de=J);else if(Re<k&&0>r(Pe,Q))B[de]=Pe,B[Re]=Q,de=Re;else break e}}return V}function r(B,V){var Q=B.sortIndex-V.sortIndex;return Q!==0?Q:B.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var p=[],d=[],_=1,x=null,g=3,v=!1,M=!1,b=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var V=n(d);V!==null;){if(V.callback===null)i(d);else if(V.startTime<=B)i(d),V.sortIndex=V.expirationTime,e(p,V);else break;V=n(d)}}function D(B){if(b=!1,R(B),!M)if(n(p)!==null)M=!0,O||(O=!0,G());else{var V=n(d);V!==null&&Z(D,V.startTime-B)}}var O=!1,C=-1,T=5,N=-1;function I(){return y?!0:!(o.unstable_now()-N<T)}function H(){if(y=!1,O){var B=o.unstable_now();N=B;var V=!0;try{e:{M=!1,b&&(b=!1,U(C),C=-1),v=!0;var Q=g;try{t:{for(R(B),x=n(p);x!==null&&!(x.expirationTime>B&&I());){var de=x.callback;if(typeof de=="function"){x.callback=null,g=x.priorityLevel;var k=de(x.expirationTime<=B);if(B=o.unstable_now(),typeof k=="function"){x.callback=k,R(B),V=!0;break t}x===n(p)&&i(p),R(B)}else i(p);x=n(p)}if(x!==null)V=!0;else{var z=n(d);z!==null&&Z(D,z.startTime-B),V=!1}}break e}finally{x=null,g=Q,v=!1}V=void 0}}finally{V?G():O=!1}}}var G;if(typeof P=="function")G=function(){P(H)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,re=ie.port2;ie.port1.onmessage=H,G=function(){re.postMessage(null)}}else G=function(){S(H,0)};function Z(B,V){C=S(function(){B(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var Q=g;g=V;try{return B()}finally{g=Q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=g;g=B;try{return V()}finally{g=Q}},o.unstable_scheduleCallback=function(B,V,Q){var de=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,B){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=Q+k,B={id:_++,callback:V,priorityLevel:B,startTime:Q,expirationTime:k,sortIndex:-1},Q>de?(B.sortIndex=Q,e(d,B),n(p)===null&&B===n(d)&&(b?(U(C),C=-1):b=!0,Z(D,Q-de))):(B.sortIndex=k,e(p,B),M||v||(M=!0,O||(O=!0,G()))),B},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(B){var V=g;return function(){var Q=g;g=V;try{return B.apply(this,arguments)}finally{g=Q}}}})(Vm)),Vm}var wS;function PA(){return wS||(wS=1,Gm.exports=OA()),Gm.exports}var km={exports:{}},yi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS;function IA(){if(DS)return yi;DS=1;var o=e0();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:x==null?null:""+x,children:p,containerInfo:d,implementation:_}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return yi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,yi.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(p,d,null,_)},yi.flushSync=function(p){var d=u.T,_=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=d,i.p=_,i.d.f()}},yi.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,i.d.C(p,d))},yi.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},yi.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,x=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?i.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:v}):_==="script"&&i.d.X(p,{crossOrigin:x,integrity:g,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},yi.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);i.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&i.d.M(p)},yi.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=f(_,d.crossOrigin);i.d.L(p,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},yi.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);i.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else i.d.m(p)},yi.requestFormReset=function(p){i.d.r(p)},yi.unstable_batchedUpdates=function(p,d){return p(d)},yi.useFormState=function(p,d,_){return u.H.useFormState(p,d,_)},yi.useFormStatus=function(){return u.H.useHostTransitionStatus()},yi.version="19.2.7",yi}var NS;function zA(){if(NS)return km.exports;NS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),km.exports=IA(),km.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var US;function FA(){if(US)return ru;US=1;var o=PA(),e=e0(),n=zA();function i(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var a=t,s=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(s=a.return),t=a.return;while(t)}return a.tag===3?s:null}function u(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function f(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function p(t){if(l(t)!==t)throw Error(i(188))}function d(t){var a=t.alternate;if(!a){if(a=l(t),a===null)throw Error(i(188));return a!==t?null:t}for(var s=t,c=a;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),t;if(m===c)return p(h),a;m=m.sibling}throw Error(i(188))}if(s.return!==c.return)s=h,c=m;else{for(var E=!1,L=h.child;L;){if(L===s){E=!0,s=h,c=m;break}if(L===c){E=!0,c=h,s=m;break}L=L.sibling}if(!E){for(L=m.child;L;){if(L===s){E=!0,s=m,c=h;break}if(L===c){E=!0,c=m,s=h;break}L=L.sibling}if(!E)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?t:a}function _(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=_(t),a!==null)return a;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),P=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Symbol.for("react.client.reference");function re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ie?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case D:return"Suspense";case O:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case P:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case R:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return a=t.displayName||null,a!==null?a:re(t.type)||"Memo";case T:a=t._payload,t=t._init;try{return re(t(a))}catch{}}return null}var Z=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},de=[],k=-1;function z(t){return{current:t}}function J(t){0>k||(t.current=de[k],de[k]=null,k--)}function be(t,a){k++,de[k]=t.current,t.current=a}var Re=z(null),Pe=z(null),te=z(null),xe=z(null);function Se(t,a){switch(be(te,a),be(Pe,t),be(Re,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?qy(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=qy(a),t=Zy(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Re),be(Re,t)}function Be(){J(Re),J(Pe),J(te)}function at(t){t.memoizedState!==null&&be(xe,t);var a=Re.current,s=Zy(a,t.type);a!==s&&(be(Pe,t),be(Re,s))}function qe(t){Pe.current===t&&(J(Re),J(Pe)),xe.current===t&&(J(xe),eu._currentValue=Q)}var Et,Ye;function rt(t){if(Et===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);Et=a&&a[1]||"",Ye=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+Ye}var ht=!1;function ut(t,a){if(!t||ht)return"";ht=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(_e){var he=_e}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(_e){he=_e}t.call(Te.prototype)}}else{try{throw Error()}catch(_e){he=_e}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(_e){if(_e&&he&&typeof _e.stack=="string")return[_e.stack,he.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),E=m[0],L=m[1];if(E&&L){var W=E.split(`
`),ue=L.split(`
`);for(h=c=0;c<W.length&&!W[c].includes("DetermineComponentFrameRoot");)c++;for(;h<ue.length&&!ue[h].includes("DetermineComponentFrameRoot");)h++;if(c===W.length||h===ue.length)for(c=W.length-1,h=ue.length-1;1<=c&&0<=h&&W[c]!==ue[h];)h--;for(;1<=c&&0<=h;c--,h--)if(W[c]!==ue[h]){if(c!==1||h!==1)do if(c--,h--,0>h||W[c]!==ue[h]){var ye=`
`+W[c].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=c&&0<=h);break}}}finally{ht=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?rt(s):""}function fe(t,a){switch(t.tag){case 26:case 27:case 5:return rt(t.type);case 16:return rt("Lazy");case 13:return t.child!==a&&a!==null?rt("Suspense Fallback"):rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return rt("Activity");default:return""}}function It(t){try{var a="",s=null;do a+=fe(t,s),s=t,t=t.return;while(t);return a}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Yt=Object.prototype.hasOwnProperty,en=o.unstable_scheduleCallback,pt=o.unstable_cancelCallback,qt=o.unstable_shouldYield,j=o.unstable_requestPaint,zt=o.unstable_now,dt=o.unstable_getCurrentPriorityLevel,F=o.unstable_ImmediatePriority,A=o.unstable_UserBlockingPriority,$=o.unstable_NormalPriority,ae=o.unstable_LowPriority,pe=o.unstable_IdlePriority,Le=o.log,De=o.unstable_setDisableYieldValue,ge=null,me=null;function Oe(t){if(typeof Le=="function"&&De(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(ge,t)}catch{}}var ke=Math.clz32?Math.clz32:Ue,Fe=Math.log,ze=Math.LN2;function Ue(t){return t>>>=0,t===0?32:31-(Fe(t)/ze|0)|0}var et=256,nt=262144,Y=4194304;function Ne(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,a,s){var c=t.pendingLanes;if(c===0)return 0;var h=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var L=c&134217727;return L!==0?(c=L&~m,c!==0?h=Ne(c):(E&=L,E!==0?h=Ne(E):s||(s=L&~t,s!==0&&(h=Ne(s))))):(L=c&~m,L!==0?h=Ne(L):E!==0?h=Ne(E):s||(s=c&~t,s!==0&&(h=Ne(s)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:h}function Ie(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function He(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Ce(t){for(var a=[],s=0;31>s;s++)a.push(t);return a}function Ee(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ot(t,a,s,c,h,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var L=t.entanglements,W=t.expirationTimes,ue=t.hiddenUpdates;for(s=E&~s;0<s;){var ye=31-ke(s),Te=1<<ye;L[ye]=0,W[ye]=-1;var he=ue[ye];if(he!==null)for(ue[ye]=null,ye=0;ye<he.length;ye++){var _e=he[ye];_e!==null&&(_e.lane&=-536870913)}s&=~Te}c!==0&&we(t,c,0),m!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~a))}function we(t,a,s){t.pendingLanes|=a,t.suspendedLanes&=~a;var c=31-ke(a);t.entangledLanes|=a,t.entanglements[c]=t.entanglements[c]|1073741824|s&261930}function st(t,a){var s=t.entangledLanes|=a;for(t=t.entanglements;s;){var c=31-ke(s),h=1<<c;h&a|t[c]&a&&(t[c]|=a),s&=~h}}function Ke(t,a){var s=a&-a;return s=(s&42)!==0?1:mt(s),(s&(t.suspendedLanes|a))!==0?0:s}function mt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:gS(t.type))}function fn(t,a){var s=V.p;try{return V.p=t,a()}finally{V.p=s}}var _n=Math.random().toString(36).slice(2),xt="__reactFiber$"+_n,yt="__reactProps$"+_n,St="__reactContainer$"+_n,Qn="__reactEvents$"+_n,hn="__reactListeners$"+_n,ai="__reactHandles$"+_n,ri="__reactResources$"+_n,Sn="__reactMarker$"+_n;function Mn(t){delete t[xt],delete t[yt],delete t[Qn],delete t[hn],delete t[ai]}function bn(t){var a=t[xt];if(a)return a;for(var s=t.parentNode;s;){if(a=s[St]||s[xt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(t=tS(t);t!==null;){if(s=t[xt])return s;t=tS(t)}return a}t=s,s=t.parentNode}return null}function fi(t){if(t=t[xt]||t[St]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Ea(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(i(33))}function En(t){var a=t[ri];return a||(a=t[ri]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Rt(t){t[Sn]=!0}var Di=new Set,w={};function K(t,a){ce(t,a),ce(t+"Capture",a)}function ce(t,a){for(w[t]=a,t=0;t<a.length;t++)Di.add(a[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Ge={};function Xe(t){return Yt.call(Ge,t)?!0:Yt.call(se,t)?!1:ne.test(t)?Ge[t]=!0:(se[t]=!0,!1)}function Ve(t,a,s){if(Xe(a))if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+s)}}function Qe(t,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+s)}}function je(t,a,s,c){if(c===null)t.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(a,s,""+c)}}function lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mt(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function it(t,a,s){var c=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var h=c.get,m=c.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return h.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(t,a,{enumerable:c.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Zt(t){if(!t._valueTracker){var a=Mt(t)?"checked":"value";t._valueTracker=it(t,a,""+t[a])}}function Cn(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return t&&(c=Mt(t)?t.checked?"true":"false":t.value),t=c,t!==s?(a.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var an=/[\n"\\]/g;function rn(t){return t.replace(an,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ze(t,a,s,c,h,m,E,L){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),a!=null?E==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+lt(a)):t.value!==""+lt(a)&&(t.value=""+lt(a)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),a!=null?Ut(t,E,lt(a)):s!=null?Ut(t,E,lt(s)):c!=null&&t.removeAttribute("value"),h==null&&m!=null&&(t.defaultChecked=!!m),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?t.name=""+lt(L):t.removeAttribute("name")}function xi(t,a,s,c,h,m,E,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){Zt(t);return}s=s!=null?""+lt(s):"",a=a!=null?""+lt(a):s,L||a===t.value||(t.value=a),t.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,t.checked=L?t.checked:!!c,t.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Zt(t)}function Ut(t,a,s){a==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Jn(t,a,s,c){if(t=t.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=a.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&c&&(t[s].defaultSelected=!0)}else{for(s=""+lt(s),a=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,c&&(t[h].defaultSelected=!0);return}a!==null||t[h].disabled||(a=t[h])}a!==null&&(a.selected=!0)}}function na(t,a,s){if(a!=null&&(a=""+lt(a),a!==t.value&&(t.value=a),s==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=s!=null?""+lt(s):""}function Ya(t,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(i(92));if(Z(c)){if(1<c.length)throw Error(i(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=lt(a),t.defaultValue=s,c=t.textContent,c===s&&c!==""&&c!==null&&(t.value=c),Zt(t)}function ia(t,a){if(a){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=a;return}}t.textContent=a}var sn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(t,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":c?t.setProperty(a,s):typeof s!="number"||s===0||sn.has(a)?a==="float"?t.cssFloat=s:t[a]=(""+s).trim():t[a]=s+"px"}function qa(t,a,s){if(a!=null&&typeof a!="object")throw Error(i(62));if(t=t.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?t.setProperty(c,""):c==="float"?t.cssFloat="":t[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&wn(t,h,c)}else for(var m in a)a.hasOwnProperty(m)&&wn(t,m,a[m])}function tn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ir=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ss=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eo(t){return ss.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Tr(){}var Pd=null;function Id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jo=null,Ko=null;function Y0(t){var a=fi(t);if(a&&(t=a.stateNode)){var s=t[yt]||null;e:switch(t=a.stateNode,a.type){case"input":if(Ze(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+rn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==t&&c.form===t.form){var h=c[yt]||null;if(!h)throw Error(i(90));Ze(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===t.form&&Cn(c)}break e;case"textarea":na(t,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&Jn(t,!!s.multiple,a,!1)}}}var zd=!1;function q0(t,a,s){if(zd)return t(a,s);zd=!0;try{var c=t(a);return c}finally{if(zd=!1,(jo!==null||Ko!==null)&&(Gf(),jo&&(a=jo,t=Ko,Ko=jo=null,Y0(a),t)))for(a=0;a<t.length;a++)Y0(t[a])}}function gc(t,a){var s=t.stateNode;if(s===null)return null;var c=s[yt]||null;if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(i(231,a,typeof s));return s}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=!1;if(Ar)try{var vc={};Object.defineProperty(vc,"passive",{get:function(){Fd=!0}}),window.addEventListener("test",vc,vc),window.removeEventListener("test",vc,vc)}catch{Fd=!1}var os=null,Bd=null,ef=null;function Z0(){if(ef)return ef;var t,a=Bd,s=a.length,c,h="value"in os?os.value:os.textContent,m=h.length;for(t=0;t<s&&a[t]===h[t];t++);var E=s-t;for(c=1;c<=E&&a[s-c]===h[m-c];c++);return ef=h.slice(t,1<c?1-c:void 0)}function tf(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function nf(){return!0}function j0(){return!1}function Hi(t){function a(s,c,h,m,E){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?nf:j0,this.isPropagationStopped=j0,this}return x(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=nf)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=nf)},persist:function(){},isPersistent:nf}),a}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Hi(to),xc=x({},to,{view:0,detail:0}),RE=Hi(xc),Hd,Gd,yc,rf=x({},xc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yc&&(yc&&t.type==="mousemove"?(Hd=t.screenX-yc.screenX,Gd=t.screenY-yc.screenY):Gd=Hd=0,yc=t),Hd)},movementY:function(t){return"movementY"in t?t.movementY:Gd}}),K0=Hi(rf),CE=x({},rf,{dataTransfer:0}),wE=Hi(CE),DE=x({},xc,{relatedTarget:0}),Vd=Hi(DE),NE=x({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),UE=Hi(NE),LE=x({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OE=Hi(LE),PE=x({},to,{data:0}),Q0=Hi(PE),IE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BE(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=FE[t])?!!a[t]:!1}function kd(){return BE}var HE=x({},xc,{key:function(t){if(t.key){var a=IE[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=tf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?tf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GE=Hi(HE),VE=x({},rf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J0=Hi(VE),kE=x({},xc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),XE=Hi(kE),WE=x({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),YE=Hi(WE),qE=x({},rf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=Hi(qE),jE=x({},to,{newState:0,oldState:0}),KE=Hi(jE),QE=[9,13,27,32],Xd=Ar&&"CompositionEvent"in window,Sc=null;Ar&&"documentMode"in document&&(Sc=document.documentMode);var JE=Ar&&"TextEvent"in window&&!Sc,$0=Ar&&(!Xd||Sc&&8<Sc&&11>=Sc),ev=" ",tv=!1;function nv(t,a){switch(t){case"keyup":return QE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qo=!1;function $E(t,a){switch(t){case"compositionend":return iv(a);case"keypress":return a.which!==32?null:(tv=!0,ev);case"textInput":return t=a.data,t===ev&&tv?null:t;default:return null}}function eT(t,a){if(Qo)return t==="compositionend"||!Xd&&nv(t,a)?(t=Z0(),ef=Bd=os=null,Qo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return $0&&a.locale!=="ko"?null:a.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!tT[t.type]:a==="textarea"}function rv(t,a,s,c){jo?Ko?Ko.push(c):Ko=[c]:jo=c,a=Zf(a,"onChange"),0<a.length&&(s=new af("onChange","change",null,s,c),t.push({event:s,listeners:a}))}var Mc=null,bc=null;function nT(t){Gy(t,0)}function sf(t){var a=Ea(t);if(Cn(a))return t}function sv(t,a){if(t==="change")return a}var ov=!1;if(Ar){var Wd;if(Ar){var Yd="oninput"in document;if(!Yd){var lv=document.createElement("div");lv.setAttribute("oninput","return;"),Yd=typeof lv.oninput=="function"}Wd=Yd}else Wd=!1;ov=Wd&&(!document.documentMode||9<document.documentMode)}function cv(){Mc&&(Mc.detachEvent("onpropertychange",uv),bc=Mc=null)}function uv(t){if(t.propertyName==="value"&&sf(bc)){var a=[];rv(a,bc,t,Id(t)),q0(nT,a)}}function iT(t,a,s){t==="focusin"?(cv(),Mc=a,bc=s,Mc.attachEvent("onpropertychange",uv)):t==="focusout"&&cv()}function aT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sf(bc)}function rT(t,a){if(t==="click")return sf(a)}function sT(t,a){if(t==="input"||t==="change")return sf(a)}function oT(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var aa=typeof Object.is=="function"?Object.is:oT;function Ec(t,a){if(aa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var s=Object.keys(t),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!Yt.call(a,h)||!aa(t[h],a[h]))return!1}return!0}function fv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hv(t,a){var s=fv(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=a&&c>=a)return{node:s,offset:a-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=fv(s)}}function dv(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?dv(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function pv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=gn(t.document);a instanceof t.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)t=a.contentWindow;else break;a=gn(t.document)}return a}function qd(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var lT=Ar&&"documentMode"in document&&11>=document.documentMode,Jo=null,Zd=null,Tc=null,jd=!1;function mv(t,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jd||Jo==null||Jo!==gn(c)||(c=Jo,"selectionStart"in c&&qd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Tc&&Ec(Tc,c)||(Tc=c,c=Zf(Zd,"onSelect"),0<c.length&&(a=new af("onSelect","select",null,a,s),t.push({event:a,listeners:c}),a.target=Jo)))}function no(t,a){var s={};return s[t.toLowerCase()]=a.toLowerCase(),s["Webkit"+t]="webkit"+a,s["Moz"+t]="moz"+a,s}var $o={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionrun:no("Transition","TransitionRun"),transitionstart:no("Transition","TransitionStart"),transitioncancel:no("Transition","TransitionCancel"),transitionend:no("Transition","TransitionEnd")},Kd={},_v={};Ar&&(_v=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function io(t){if(Kd[t])return Kd[t];if(!$o[t])return t;var a=$o[t],s;for(s in a)if(a.hasOwnProperty(s)&&s in _v)return Kd[t]=a[s];return t}var gv=io("animationend"),vv=io("animationiteration"),xv=io("animationstart"),cT=io("transitionrun"),uT=io("transitionstart"),fT=io("transitioncancel"),yv=io("transitionend"),Sv=new Map,Qd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qd.push("scrollEnd");function Za(t,a){Sv.set(t,a),K(a,[t])}var of=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ta=[],el=0,Jd=0;function lf(){for(var t=el,a=Jd=el=0;a<t;){var s=Ta[a];Ta[a++]=null;var c=Ta[a];Ta[a++]=null;var h=Ta[a];Ta[a++]=null;var m=Ta[a];if(Ta[a++]=null,c!==null&&h!==null){var E=c.pending;E===null?h.next=h:(h.next=E.next,E.next=h),c.pending=h}m!==0&&Mv(s,h,m)}}function cf(t,a,s,c){Ta[el++]=t,Ta[el++]=a,Ta[el++]=s,Ta[el++]=c,Jd|=c,t.lanes|=c,t=t.alternate,t!==null&&(t.lanes|=c)}function $d(t,a,s,c){return cf(t,a,s,c),uf(t)}function ao(t,a){return cf(t,null,null,a),uf(t)}function Mv(t,a,s){t.lanes|=s;var c=t.alternate;c!==null&&(c.lanes|=s);for(var h=!1,m=t.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(h=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,h&&a!==null&&(h=31-ke(s),t=m.hiddenUpdates,c=t[h],c===null?t[h]=[a]:c.push(a),a.lane=s|536870912),m):null}function uf(t){if(50<qc)throw qc=0,lm=null,Error(i(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var tl={};function hT(t,a,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(t,a,s,c){return new hT(t,a,s,c)}function ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rr(t,a){var s=t.alternate;return s===null?(s=ra(t.tag,a,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=a,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,a=t.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function bv(t,a){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,a=s.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function ff(t,a,s,c,h,m){var E=0;if(c=t,typeof t=="function")ep(t)&&(E=1);else if(typeof t=="string")E=gA(t,s,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ra(31,s,a,h),t.elementType=N,t.lanes=m,t;case b:return ro(s.children,h,m,a);case y:E=8,h|=24;break;case S:return t=ra(12,s,a,h|2),t.elementType=S,t.lanes=m,t;case D:return t=ra(13,s,a,h),t.elementType=D,t.lanes=m,t;case O:return t=ra(19,s,a,h),t.elementType=O,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:E=10;break e;case U:E=9;break e;case R:E=11;break e;case C:E=14;break e;case T:E=16,c=null;break e}E=29,s=Error(i(130,t===null?"null":typeof t,"")),c=null}return a=ra(E,s,a,h),a.elementType=t,a.type=c,a.lanes=m,a}function ro(t,a,s,c){return t=ra(7,t,c,a),t.lanes=s,t}function tp(t,a,s){return t=ra(6,t,null,a),t.lanes=s,t}function Ev(t){var a=ra(18,null,null,0);return a.stateNode=t,a}function np(t,a,s){return a=ra(4,t.children!==null?t.children:[],t.key,a),a.lanes=s,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Tv=new WeakMap;function Aa(t,a){if(typeof t=="object"&&t!==null){var s=Tv.get(t);return s!==void 0?s:(a={value:t,source:a,stack:It(a)},Tv.set(t,a),a)}return{value:t,source:a,stack:It(a)}}var nl=[],il=0,hf=null,Ac=0,Ra=[],Ca=0,ls=null,ar=1,rr="";function Cr(t,a){nl[il++]=Ac,nl[il++]=hf,hf=t,Ac=a}function Av(t,a,s){Ra[Ca++]=ar,Ra[Ca++]=rr,Ra[Ca++]=ls,ls=t;var c=ar;t=rr;var h=32-ke(c)-1;c&=~(1<<h),s+=1;var m=32-ke(a)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,ar=1<<32-ke(a)+h|s<<h|c,rr=m+t}else ar=1<<m|s<<h|c,rr=t}function ip(t){t.return!==null&&(Cr(t,1),Av(t,1,0))}function ap(t){for(;t===hf;)hf=nl[--il],nl[il]=null,Ac=nl[--il],nl[il]=null;for(;t===ls;)ls=Ra[--Ca],Ra[Ca]=null,rr=Ra[--Ca],Ra[Ca]=null,ar=Ra[--Ca],Ra[Ca]=null}function Rv(t,a){Ra[Ca++]=ar,Ra[Ca++]=rr,Ra[Ca++]=ls,ar=a.id,rr=a.overflow,ls=t}var hi=null,Tn=null,Ht=!1,cs=null,wa=!1,rp=Error(i(519));function us(t){var a=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Rc(Aa(a,t)),rp}function Cv(t){var a=t.stateNode,s=t.type,c=t.memoizedProps;switch(a[xt]=t,a[yt]=c,s){case"dialog":Ot("cancel",a),Ot("close",a);break;case"iframe":case"object":case"embed":Ot("load",a);break;case"video":case"audio":for(s=0;s<jc.length;s++)Ot(jc[s],a);break;case"source":Ot("error",a);break;case"img":case"image":case"link":Ot("error",a),Ot("load",a);break;case"details":Ot("toggle",a);break;case"input":Ot("invalid",a),xi(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ot("invalid",a);break;case"textarea":Ot("invalid",a),Ya(a,c.value,c.defaultValue,c.children)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||Wy(a.textContent,s)?(c.popover!=null&&(Ot("beforetoggle",a),Ot("toggle",a)),c.onScroll!=null&&Ot("scroll",a),c.onScrollEnd!=null&&Ot("scrollend",a),c.onClick!=null&&(a.onclick=Tr),a=!0):a=!1,a||us(t,!0)}function wv(t){for(hi=t.return;hi;)switch(hi.tag){case 5:case 31:case 13:wa=!1;return;case 27:case 3:wa=!0;return;default:hi=hi.return}}function al(t){if(t!==hi)return!1;if(!Ht)return wv(t),Ht=!0,!1;var a=t.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||bm(t.type,t.memoizedProps)),s=!s),s&&Tn&&us(t),wv(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));Tn=eS(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));Tn=eS(t)}else a===27?(a=Tn,Es(t.type)?(t=Cm,Cm=null,Tn=t):Tn=a):Tn=hi?Na(t.stateNode.nextSibling):null;return!0}function so(){Tn=hi=null,Ht=!1}function sp(){var t=cs;return t!==null&&(Xi===null?Xi=t:Xi.push.apply(Xi,t),cs=null),t}function Rc(t){cs===null?cs=[t]:cs.push(t)}var op=z(null),oo=null,wr=null;function fs(t,a,s){be(op,a._currentValue),a._currentValue=s}function Dr(t){t._currentValue=op.current,J(op)}function lp(t,a,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),t===s)break;t=t.return}}function cp(t,a,s,c){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;e:for(;m!==null;){var L=m;m=h;for(var W=0;W<a.length;W++)if(L.context===a[W]){m.lanes|=s,L=m.alternate,L!==null&&(L.lanes|=s),lp(m.return,s,t),c||(E=null);break e}m=L.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(i(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),lp(E,s,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function rl(t,a,s,c){t=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var L=h.type;aa(h.pendingProps.value,E.value)||(t!==null?t.push(L):t=[L])}}else if(h===xe.current){if(E=h.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(eu):t=[eu])}h=h.return}t!==null&&cp(a,t,s,c),a.flags|=262144}function df(t){for(t=t.firstContext;t!==null;){if(!aa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lo(t){oo=t,wr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function di(t){return Dv(oo,t)}function pf(t,a){return oo===null&&lo(t),Dv(t,a)}function Dv(t,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},wr===null){if(t===null)throw Error(i(308));wr=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else wr=wr.next=a;return s}var dT=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(s,c){t.push(c)}};this.abort=function(){a.aborted=!0,t.forEach(function(s){return s()})}},pT=o.unstable_scheduleCallback,mT=o.unstable_NormalPriority,Xn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function up(){return{controller:new dT,data:new Map,refCount:0}}function Cc(t){t.refCount--,t.refCount===0&&pT(mT,function(){t.controller.abort()})}var wc=null,fp=0,sl=0,ol=null;function _T(t,a){if(wc===null){var s=wc=[];fp=0,sl=pm(),ol={status:"pending",value:void 0,then:function(c){s.push(c)}}}return fp++,a.then(Nv,Nv),a}function Nv(){if(--fp===0&&wc!==null){ol!==null&&(ol.status="fulfilled");var t=wc;wc=null,sl=0,ol=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function gT(t,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var Uv=B.S;B.S=function(t,a){my=zt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&_T(t,a),Uv!==null&&Uv(t,a)};var co=z(null);function hp(){var t=co.current;return t!==null?t:vn.pooledCache}function mf(t,a){a===null?be(co,co.current):be(co,a.pool)}function Lv(){var t=hp();return t===null?null:{parent:Xn._currentValue,pool:t}}var ll=Error(i(460)),dp=Error(i(474)),_f=Error(i(542)),gf={then:function(){}};function Ov(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pv(t,a,s){switch(s=t[s],s===void 0?t.push(a):s!==a&&(a.then(Tr,Tr),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,zv(t),t;default:if(typeof a.status=="string")a.then(Tr,Tr);else{if(t=vn,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=a,t.status="pending",t.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,zv(t),t}throw fo=a,ll}}function uo(t){try{var a=t._init;return a(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(fo=s,ll):s}}var fo=null;function Iv(){if(fo===null)throw Error(i(459));var t=fo;return fo=null,t}function zv(t){if(t===ll||t===_f)throw Error(i(483))}var cl=null,Dc=0;function vf(t){var a=Dc;return Dc+=1,cl===null&&(cl=[]),Pv(cl,t,a)}function Nc(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function xf(t,a){throw a.$$typeof===g?Error(i(525)):(t=Object.prototype.toString.call(a),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Fv(t){function a(ee,q){if(t){var oe=ee.deletions;oe===null?(ee.deletions=[q],ee.flags|=16):oe.push(q)}}function s(ee,q){if(!t)return null;for(;q!==null;)a(ee,q),q=q.sibling;return null}function c(ee){for(var q=new Map;ee!==null;)ee.key!==null?q.set(ee.key,ee):q.set(ee.index,ee),ee=ee.sibling;return q}function h(ee,q){return ee=Rr(ee,q),ee.index=0,ee.sibling=null,ee}function m(ee,q,oe){return ee.index=oe,t?(oe=ee.alternate,oe!==null?(oe=oe.index,oe<q?(ee.flags|=67108866,q):oe):(ee.flags|=67108866,q)):(ee.flags|=1048576,q)}function E(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function L(ee,q,oe,Me){return q===null||q.tag!==6?(q=tp(oe,ee.mode,Me),q.return=ee,q):(q=h(q,oe),q.return=ee,q)}function W(ee,q,oe,Me){var ct=oe.type;return ct===b?ye(ee,q,oe.props.children,Me,oe.key):q!==null&&(q.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===T&&uo(ct)===q.type)?(q=h(q,oe.props),Nc(q,oe),q.return=ee,q):(q=ff(oe.type,oe.key,oe.props,null,ee.mode,Me),Nc(q,oe),q.return=ee,q)}function ue(ee,q,oe,Me){return q===null||q.tag!==4||q.stateNode.containerInfo!==oe.containerInfo||q.stateNode.implementation!==oe.implementation?(q=np(oe,ee.mode,Me),q.return=ee,q):(q=h(q,oe.children||[]),q.return=ee,q)}function ye(ee,q,oe,Me,ct){return q===null||q.tag!==7?(q=ro(oe,ee.mode,Me,ct),q.return=ee,q):(q=h(q,oe),q.return=ee,q)}function Te(ee,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=tp(""+q,ee.mode,oe),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case v:return oe=ff(q.type,q.key,q.props,null,ee.mode,oe),Nc(oe,q),oe.return=ee,oe;case M:return q=np(q,ee.mode,oe),q.return=ee,q;case T:return q=uo(q),Te(ee,q,oe)}if(Z(q)||G(q))return q=ro(q,ee.mode,oe,null),q.return=ee,q;if(typeof q.then=="function")return Te(ee,vf(q),oe);if(q.$$typeof===P)return Te(ee,pf(ee,q),oe);xf(ee,q)}return null}function he(ee,q,oe,Me){var ct=q!==null?q.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return ct!==null?null:L(ee,q,""+oe,Me);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case v:return oe.key===ct?W(ee,q,oe,Me):null;case M:return oe.key===ct?ue(ee,q,oe,Me):null;case T:return oe=uo(oe),he(ee,q,oe,Me)}if(Z(oe)||G(oe))return ct!==null?null:ye(ee,q,oe,Me,null);if(typeof oe.then=="function")return he(ee,q,vf(oe),Me);if(oe.$$typeof===P)return he(ee,q,pf(ee,oe),Me);xf(ee,oe)}return null}function _e(ee,q,oe,Me,ct){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ee=ee.get(oe)||null,L(q,ee,""+Me,ct);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case v:return ee=ee.get(Me.key===null?oe:Me.key)||null,W(q,ee,Me,ct);case M:return ee=ee.get(Me.key===null?oe:Me.key)||null,ue(q,ee,Me,ct);case T:return Me=uo(Me),_e(ee,q,oe,Me,ct)}if(Z(Me)||G(Me))return ee=ee.get(oe)||null,ye(q,ee,Me,ct,null);if(typeof Me.then=="function")return _e(ee,q,oe,vf(Me),ct);if(Me.$$typeof===P)return _e(ee,q,oe,pf(q,Me),ct);xf(q,Me)}return null}function Je(ee,q,oe,Me){for(var ct=null,jt=null,tt=q,At=q=0,Bt=null;tt!==null&&At<oe.length;At++){tt.index>At?(Bt=tt,tt=null):Bt=tt.sibling;var Kt=he(ee,tt,oe[At],Me);if(Kt===null){tt===null&&(tt=Bt);break}t&&tt&&Kt.alternate===null&&a(ee,tt),q=m(Kt,q,At),jt===null?ct=Kt:jt.sibling=Kt,jt=Kt,tt=Bt}if(At===oe.length)return s(ee,tt),Ht&&Cr(ee,At),ct;if(tt===null){for(;At<oe.length;At++)tt=Te(ee,oe[At],Me),tt!==null&&(q=m(tt,q,At),jt===null?ct=tt:jt.sibling=tt,jt=tt);return Ht&&Cr(ee,At),ct}for(tt=c(tt);At<oe.length;At++)Bt=_e(tt,ee,At,oe[At],Me),Bt!==null&&(t&&Bt.alternate!==null&&tt.delete(Bt.key===null?At:Bt.key),q=m(Bt,q,At),jt===null?ct=Bt:jt.sibling=Bt,jt=Bt);return t&&tt.forEach(function(ws){return a(ee,ws)}),Ht&&Cr(ee,At),ct}function ft(ee,q,oe,Me){if(oe==null)throw Error(i(151));for(var ct=null,jt=null,tt=q,At=q=0,Bt=null,Kt=oe.next();tt!==null&&!Kt.done;At++,Kt=oe.next()){tt.index>At?(Bt=tt,tt=null):Bt=tt.sibling;var ws=he(ee,tt,Kt.value,Me);if(ws===null){tt===null&&(tt=Bt);break}t&&tt&&ws.alternate===null&&a(ee,tt),q=m(ws,q,At),jt===null?ct=ws:jt.sibling=ws,jt=ws,tt=Bt}if(Kt.done)return s(ee,tt),Ht&&Cr(ee,At),ct;if(tt===null){for(;!Kt.done;At++,Kt=oe.next())Kt=Te(ee,Kt.value,Me),Kt!==null&&(q=m(Kt,q,At),jt===null?ct=Kt:jt.sibling=Kt,jt=Kt);return Ht&&Cr(ee,At),ct}for(tt=c(tt);!Kt.done;At++,Kt=oe.next())Kt=_e(tt,ee,At,Kt.value,Me),Kt!==null&&(t&&Kt.alternate!==null&&tt.delete(Kt.key===null?At:Kt.key),q=m(Kt,q,At),jt===null?ct=Kt:jt.sibling=Kt,jt=Kt);return t&&tt.forEach(function(CA){return a(ee,CA)}),Ht&&Cr(ee,At),ct}function mn(ee,q,oe,Me){if(typeof oe=="object"&&oe!==null&&oe.type===b&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case v:e:{for(var ct=oe.key;q!==null;){if(q.key===ct){if(ct=oe.type,ct===b){if(q.tag===7){s(ee,q.sibling),Me=h(q,oe.props.children),Me.return=ee,ee=Me;break e}}else if(q.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===T&&uo(ct)===q.type){s(ee,q.sibling),Me=h(q,oe.props),Nc(Me,oe),Me.return=ee,ee=Me;break e}s(ee,q);break}else a(ee,q);q=q.sibling}oe.type===b?(Me=ro(oe.props.children,ee.mode,Me,oe.key),Me.return=ee,ee=Me):(Me=ff(oe.type,oe.key,oe.props,null,ee.mode,Me),Nc(Me,oe),Me.return=ee,ee=Me)}return E(ee);case M:e:{for(ct=oe.key;q!==null;){if(q.key===ct)if(q.tag===4&&q.stateNode.containerInfo===oe.containerInfo&&q.stateNode.implementation===oe.implementation){s(ee,q.sibling),Me=h(q,oe.children||[]),Me.return=ee,ee=Me;break e}else{s(ee,q);break}else a(ee,q);q=q.sibling}Me=np(oe,ee.mode,Me),Me.return=ee,ee=Me}return E(ee);case T:return oe=uo(oe),mn(ee,q,oe,Me)}if(Z(oe))return Je(ee,q,oe,Me);if(G(oe)){if(ct=G(oe),typeof ct!="function")throw Error(i(150));return oe=ct.call(oe),ft(ee,q,oe,Me)}if(typeof oe.then=="function")return mn(ee,q,vf(oe),Me);if(oe.$$typeof===P)return mn(ee,q,pf(ee,oe),Me);xf(ee,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,q!==null&&q.tag===6?(s(ee,q.sibling),Me=h(q,oe),Me.return=ee,ee=Me):(s(ee,q),Me=tp(oe,ee.mode,Me),Me.return=ee,ee=Me),E(ee)):s(ee,q)}return function(ee,q,oe,Me){try{Dc=0;var ct=mn(ee,q,oe,Me);return cl=null,ct}catch(tt){if(tt===ll||tt===_f)throw tt;var jt=ra(29,tt,null,ee.mode);return jt.lanes=Me,jt.return=ee,jt}finally{}}}var ho=Fv(!0),Bv=Fv(!1),hs=!1;function pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mp(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ds(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ps(t,a,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Jt&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=uf(t),Mv(t,null,s),a}return cf(t,c,a,s),uf(t)}function Uc(t,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=t.pendingLanes,s|=c,a.lanes=s,st(t,s)}}function _p(t,a){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=a:m=m.next=a}else h=m=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=a:t.next=a,s.lastBaseUpdate=a}var gp=!1;function Lc(){if(gp){var t=ol;if(t!==null)throw t}}function Oc(t,a,s,c){gp=!1;var h=t.updateQueue;hs=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var W=L,ue=W.next;W.next=null,E===null?m=ue:E.next=ue,E=W;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,L=ye.lastBaseUpdate,L!==E&&(L===null?ye.firstBaseUpdate=ue:L.next=ue,ye.lastBaseUpdate=W))}if(m!==null){var Te=h.baseState;E=0,ye=ue=W=null,L=m;do{var he=L.lane&-536870913,_e=he!==L.lane;if(_e?(Ft&he)===he:(c&he)===he){he!==0&&he===sl&&(gp=!0),ye!==null&&(ye=ye.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});e:{var Je=t,ft=L;he=a;var mn=s;switch(ft.tag){case 1:if(Je=ft.payload,typeof Je=="function"){Te=Je.call(mn,Te,he);break e}Te=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=ft.payload,he=typeof Je=="function"?Je.call(mn,Te,he):Je,he==null)break e;Te=x({},Te,he);break e;case 2:hs=!0}}he=L.callback,he!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=h.callbacks,_e===null?h.callbacks=[he]:_e.push(he))}else _e={lane:he,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ye===null?(ue=ye=_e,W=Te):ye=ye.next=_e,E|=he;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;_e=L,L=_e.next,_e.next=null,h.lastBaseUpdate=_e,h.shared.pending=null}}while(!0);ye===null&&(W=Te),h.baseState=W,h.firstBaseUpdate=ue,h.lastBaseUpdate=ye,m===null&&(h.shared.lanes=0),xs|=E,t.lanes=E,t.memoizedState=Te}}function Hv(t,a){if(typeof t!="function")throw Error(i(191,t));t.call(a)}function Gv(t,a){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Hv(s[t],a)}var ul=z(null),yf=z(0);function Vv(t,a){t=Br,be(yf,t),be(ul,a),Br=t|a.baseLanes}function vp(){be(yf,Br),be(ul,ul.current)}function xp(){Br=yf.current,J(ul),J(yf)}var sa=z(null),Da=null;function ms(t){var a=t.alternate;be(Bn,Bn.current&1),be(sa,t),Da===null&&(a===null||ul.current!==null||a.memoizedState!==null)&&(Da=t)}function yp(t){be(Bn,Bn.current),be(sa,t),Da===null&&(Da=t)}function kv(t){t.tag===22?(be(Bn,Bn.current),be(sa,t),Da===null&&(Da=t)):_s()}function _s(){be(Bn,Bn.current),be(sa,sa.current)}function oa(t){J(sa),Da===t&&(Da=null),J(Bn)}var Bn=z(0);function Sf(t){for(var a=t;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Am(s)||Rm(s)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Nr=0,bt=null,dn=null,Wn=null,Mf=!1,fl=!1,po=!1,bf=0,Pc=0,hl=null,vT=0;function Pn(){throw Error(i(321))}function Sp(t,a){if(a===null)return!1;for(var s=0;s<a.length&&s<t.length;s++)if(!aa(t[s],a[s]))return!1;return!0}function Mp(t,a,s,c,h,m){return Nr=m,bt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=t===null||t.memoizedState===null?Ax:zp,po=!1,m=s(c,h),po=!1,fl&&(m=Wv(a,s,c,h)),Xv(t),m}function Xv(t){B.H=Fc;var a=dn!==null&&dn.next!==null;if(Nr=0,Wn=dn=bt=null,Mf=!1,Pc=0,hl=null,a)throw Error(i(300));t===null||Yn||(t=t.dependencies,t!==null&&df(t)&&(Yn=!0))}function Wv(t,a,s,c){bt=t;var h=0;do{if(fl&&(hl=null),Pc=0,fl=!1,25<=h)throw Error(i(301));if(h+=1,Wn=dn=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=Rx,m=a(s,c)}while(fl);return m}function xT(){var t=B.H,a=t.useState()[0];return a=typeof a.then=="function"?Ic(a):a,t=t.useState()[0],(dn!==null?dn.memoizedState:null)!==t&&(bt.flags|=1024),a}function bp(){var t=bf!==0;return bf=0,t}function Ep(t,a,s){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~s}function Tp(t){if(Mf){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Mf=!1}Nr=0,Wn=dn=bt=null,fl=!1,Pc=bf=0,hl=null}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?bt.memoizedState=Wn=t:Wn=Wn.next=t,Wn}function Hn(){if(dn===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=dn.next;var a=Wn===null?bt.memoizedState:Wn.next;if(a!==null)Wn=a,dn=t;else{if(t===null)throw bt.alternate===null?Error(i(467)):Error(i(310));dn=t,t={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},Wn===null?bt.memoizedState=Wn=t:Wn=Wn.next=t}return Wn}function Ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ic(t){var a=Pc;return Pc+=1,hl===null&&(hl=[]),t=Pv(hl,t,a),a=bt,(Wn===null?a.memoizedState:Wn.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?Ax:zp),t}function Tf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ic(t);if(t.$$typeof===P)return di(t)}throw Error(i(438,String(t)))}function Ap(t){var a=null,s=bt.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=bt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Ef(),bt.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(t),c=0;c<t;c++)s[c]=I;return a.index++,s}function Ur(t,a){return typeof a=="function"?a(t):a}function Af(t){var a=Hn();return Rp(a,dn,t)}function Rp(t,a,s){var c=t.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=s;var h=t.baseQueue,m=c.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}a.baseQueue=h=m,c.pending=null}if(m=t.baseState,h===null)t.memoizedState=m;else{a=h.next;var L=E=null,W=null,ue=a,ye=!1;do{var Te=ue.lane&-536870913;if(Te!==ue.lane?(Ft&Te)===Te:(Nr&Te)===Te){var he=ue.revertLane;if(he===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),Te===sl&&(ye=!0);else if((Nr&he)===he){ue=ue.next,he===sl&&(ye=!0);continue}else Te={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},W===null?(L=W=Te,E=m):W=W.next=Te,bt.lanes|=he,xs|=he;Te=ue.action,po&&s(m,Te),m=ue.hasEagerState?ue.eagerState:s(m,Te)}else he={lane:Te,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},W===null?(L=W=he,E=m):W=W.next=he,bt.lanes|=Te,xs|=Te;ue=ue.next}while(ue!==null&&ue!==a);if(W===null?E=m:W.next=L,!aa(m,t.memoizedState)&&(Yn=!0,ye&&(s=ol,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=W,c.lastRenderedState=m}return h===null&&(c.lanes=0),[t.memoizedState,c.dispatch]}function Cp(t){var a=Hn(),s=a.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var c=s.dispatch,h=s.pending,m=a.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=t(m,E.action),E=E.next;while(E!==h);aa(m,a.memoizedState)||(Yn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,c]}function Yv(t,a,s){var c=bt,h=Hn(),m=Ht;if(m){if(s===void 0)throw Error(i(407));s=s()}else s=a();var E=!aa((dn||h).memoizedState,s);if(E&&(h.memoizedState=s,Yn=!0),h=h.queue,Np(jv.bind(null,c,h,t),[t]),h.getSnapshot!==a||E||Wn!==null&&Wn.memoizedState.tag&1){if(c.flags|=2048,dl(9,{destroy:void 0},Zv.bind(null,c,h,s,a),null),vn===null)throw Error(i(349));m||(Nr&127)!==0||qv(c,a,s)}return s}function qv(t,a,s){t.flags|=16384,t={getSnapshot:a,value:s},a=bt.updateQueue,a===null?(a=Ef(),bt.updateQueue=a,a.stores=[t]):(s=a.stores,s===null?a.stores=[t]:s.push(t))}function Zv(t,a,s,c){a.value=s,a.getSnapshot=c,Kv(a)&&Qv(t)}function jv(t,a,s){return s(function(){Kv(a)&&Qv(t)})}function Kv(t){var a=t.getSnapshot;t=t.value;try{var s=a();return!aa(t,s)}catch{return!0}}function Qv(t){var a=ao(t,2);a!==null&&Wi(a,t,2)}function wp(t){var a=Ni();if(typeof t=="function"){var s=t;if(t=s(),po){Oe(!0);try{s()}finally{Oe(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:t},a}function Jv(t,a,s,c){return t.baseState=s,Rp(t,dn,typeof c=="function"?c:Ur)}function yT(t,a,s,c,h){if(wf(t))throw Error(i(485));if(t=a.action,t!==null){var m={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,c(m),s=a.pending,s===null?(m.next=a.pending=m,$v(a,m)):(m.next=s.next,a.pending=s.next=m)}}function $v(t,a){var s=a.action,c=a.payload,h=t.state;if(a.isTransition){var m=B.T,E={};B.T=E;try{var L=s(h,c),W=B.S;W!==null&&W(E,L),ex(t,a,L)}catch(ue){Dp(t,a,ue)}finally{m!==null&&E.types!==null&&(m.types=E.types),B.T=m}}else try{m=s(h,c),ex(t,a,m)}catch(ue){Dp(t,a,ue)}}function ex(t,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){tx(t,a,c)},function(c){return Dp(t,a,c)}):tx(t,a,s)}function tx(t,a,s){a.status="fulfilled",a.value=s,nx(a),t.state=s,a=t.pending,a!==null&&(s=a.next,s===a?t.pending=null:(s=s.next,a.next=s,$v(t,s)))}function Dp(t,a,s){var c=t.pending;if(t.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,nx(a),a=a.next;while(a!==c)}t.action=null}function nx(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function ix(t,a){return a}function ax(t,a){if(Ht){var s=vn.formState;if(s!==null){e:{var c=bt;if(Ht){if(Tn){t:{for(var h=Tn,m=wa;h.nodeType!==8;){if(!m){h=null;break t}if(h=Na(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Tn=Na(h.nextSibling),c=h.data==="F!";break e}}us(c)}c=!1}c&&(a=s[0])}}return s=Ni(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ix,lastRenderedState:a},s.queue=c,s=bx.bind(null,bt,c),c.dispatch=s,c=wp(!1),m=Ip.bind(null,bt,!1,c.queue),c=Ni(),h={state:a,dispatch:null,action:t,pending:null},c.queue=h,s=yT.bind(null,bt,h,m,s),h.dispatch=s,c.memoizedState=t,[a,s,!1]}function rx(t){var a=Hn();return sx(a,dn,t)}function sx(t,a,s){if(a=Rp(t,a,ix)[0],t=Af(Ur)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=Ic(a)}catch(E){throw E===ll?_f:E}else c=a;a=Hn();var h=a.queue,m=h.dispatch;return s!==a.memoizedState&&(bt.flags|=2048,dl(9,{destroy:void 0},ST.bind(null,h,s),null)),[c,m,t]}function ST(t,a){t.action=a}function ox(t){var a=Hn(),s=dn;if(s!==null)return sx(a,s,t);Hn(),a=a.memoizedState,s=Hn();var c=s.queue.dispatch;return s.memoizedState=t,[a,c,!1]}function dl(t,a,s,c){return t={tag:t,create:s,deps:c,inst:a,next:null},a=bt.updateQueue,a===null&&(a=Ef(),bt.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,a.lastEffect=t),t}function lx(){return Hn().memoizedState}function Rf(t,a,s,c){var h=Ni();bt.flags|=t,h.memoizedState=dl(1|a,{destroy:void 0},s,c===void 0?null:c)}function Cf(t,a,s,c){var h=Hn();c=c===void 0?null:c;var m=h.memoizedState.inst;dn!==null&&c!==null&&Sp(c,dn.memoizedState.deps)?h.memoizedState=dl(a,m,s,c):(bt.flags|=t,h.memoizedState=dl(1|a,m,s,c))}function cx(t,a){Rf(8390656,8,t,a)}function Np(t,a){Cf(2048,8,t,a)}function MT(t){bt.flags|=4;var a=bt.updateQueue;if(a===null)a=Ef(),bt.updateQueue=a,a.events=[t];else{var s=a.events;s===null?a.events=[t]:s.push(t)}}function ux(t){var a=Hn().memoizedState;return MT({ref:a,nextImpl:t}),function(){if((Jt&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}function fx(t,a){return Cf(4,2,t,a)}function hx(t,a){return Cf(4,4,t,a)}function dx(t,a){if(typeof a=="function"){t=t();var s=a(t);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function px(t,a,s){s=s!=null?s.concat([t]):null,Cf(4,4,dx.bind(null,a,t),s)}function Up(){}function mx(t,a){var s=Hn();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&Sp(a,c[1])?c[0]:(s.memoizedState=[t,a],t)}function _x(t,a){var s=Hn();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&Sp(a,c[1]))return c[0];if(c=t(),po){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[c,a],c}function Lp(t,a,s){return s===void 0||(Nr&1073741824)!==0&&(Ft&261930)===0?t.memoizedState=a:(t.memoizedState=s,t=gy(),bt.lanes|=t,xs|=t,s)}function gx(t,a,s,c){return aa(s,a)?s:ul.current!==null?(t=Lp(t,s,c),aa(t,a)||(Yn=!0),t):(Nr&42)===0||(Nr&1073741824)!==0&&(Ft&261930)===0?(Yn=!0,t.memoizedState=s):(t=gy(),bt.lanes|=t,xs|=t,a)}function vx(t,a,s,c,h){var m=V.p;V.p=m!==0&&8>m?m:8;var E=B.T,L={};B.T=L,Ip(t,!1,a,s);try{var W=h(),ue=B.S;if(ue!==null&&ue(L,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var ye=gT(W,c);zc(t,a,ye,ua(t))}else zc(t,a,c,ua(t))}catch(Te){zc(t,a,{then:function(){},status:"rejected",reason:Te},ua())}finally{V.p=m,E!==null&&L.types!==null&&(E.types=L.types),B.T=E}}function bT(){}function Op(t,a,s,c){if(t.tag!==5)throw Error(i(476));var h=xx(t).queue;vx(t,h,a,Q,s===null?bT:function(){return yx(t),s(c)})}function xx(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:Q},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:s},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function yx(t){var a=xx(t);a.next===null&&(a=t.alternate.memoizedState),zc(t,a.next.queue,{},ua())}function Pp(){return di(eu)}function Sx(){return Hn().memoizedState}function Mx(){return Hn().memoizedState}function ET(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var s=ua();t=ds(s);var c=ps(a,t,s);c!==null&&(Wi(c,a,s),Uc(c,a,s)),a={cache:up()},t.payload=a;return}a=a.return}}function TT(t,a,s){var c=ua();s={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wf(t)?Ex(a,s):(s=$d(t,a,s,c),s!==null&&(Wi(s,t,c),Tx(s,a,c)))}function bx(t,a,s){var c=ua();zc(t,a,s,c)}function zc(t,a,s,c){var h={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(wf(t))Ex(a,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var E=a.lastRenderedState,L=m(E,s);if(h.hasEagerState=!0,h.eagerState=L,aa(L,E))return cf(t,a,h,0),vn===null&&lf(),!1}catch{}finally{}if(s=$d(t,a,h,c),s!==null)return Wi(s,t,c),Tx(s,a,c),!0}return!1}function Ip(t,a,s,c){if(c={lane:2,revertLane:pm(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},wf(t)){if(a)throw Error(i(479))}else a=$d(t,s,c,2),a!==null&&Wi(a,t,2)}function wf(t){var a=t.alternate;return t===bt||a!==null&&a===bt}function Ex(t,a){fl=Mf=!0;var s=t.pending;s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a}function Tx(t,a,s){if((s&4194048)!==0){var c=a.lanes;c&=t.pendingLanes,s|=c,a.lanes=s,st(t,s)}}var Fc={readContext:di,use:Tf,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useLayoutEffect:Pn,useInsertionEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useSyncExternalStore:Pn,useId:Pn,useHostTransitionStatus:Pn,useFormState:Pn,useActionState:Pn,useOptimistic:Pn,useMemoCache:Pn,useCacheRefresh:Pn};Fc.useEffectEvent=Pn;var Ax={readContext:di,use:Tf,useCallback:function(t,a){return Ni().memoizedState=[t,a===void 0?null:a],t},useContext:di,useEffect:cx,useImperativeHandle:function(t,a,s){s=s!=null?s.concat([t]):null,Rf(4194308,4,dx.bind(null,a,t),s)},useLayoutEffect:function(t,a){return Rf(4194308,4,t,a)},useInsertionEffect:function(t,a){Rf(4,2,t,a)},useMemo:function(t,a){var s=Ni();a=a===void 0?null:a;var c=t();if(po){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[c,a],c},useReducer:function(t,a,s){var c=Ni();if(s!==void 0){var h=s(a);if(po){Oe(!0);try{s(a)}finally{Oe(!1)}}}else h=a;return c.memoizedState=c.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},c.queue=t,t=t.dispatch=TT.bind(null,bt,t),[c.memoizedState,t]},useRef:function(t){var a=Ni();return t={current:t},a.memoizedState=t},useState:function(t){t=wp(t);var a=t.queue,s=bx.bind(null,bt,a);return a.dispatch=s,[t.memoizedState,s]},useDebugValue:Up,useDeferredValue:function(t,a){var s=Ni();return Lp(s,t,a)},useTransition:function(){var t=wp(!1);return t=vx.bind(null,bt,t.queue,!0,!1),Ni().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,s){var c=bt,h=Ni();if(Ht){if(s===void 0)throw Error(i(407));s=s()}else{if(s=a(),vn===null)throw Error(i(349));(Ft&127)!==0||qv(c,a,s)}h.memoizedState=s;var m={value:s,getSnapshot:a};return h.queue=m,cx(jv.bind(null,c,m,t),[t]),c.flags|=2048,dl(9,{destroy:void 0},Zv.bind(null,c,m,s,a),null),s},useId:function(){var t=Ni(),a=vn.identifierPrefix;if(Ht){var s=rr,c=ar;s=(c&~(1<<32-ke(c)-1)).toString(32)+s,a="_"+a+"R_"+s,s=bf++,0<s&&(a+="H"+s.toString(32)),a+="_"}else s=vT++,a="_"+a+"r_"+s.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Pp,useFormState:ax,useActionState:ax,useOptimistic:function(t){var a=Ni();a.memoizedState=a.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Ip.bind(null,bt,!0,s),s.dispatch=a,[t,a]},useMemoCache:Ap,useCacheRefresh:function(){return Ni().memoizedState=ET.bind(null,bt)},useEffectEvent:function(t){var a=Ni(),s={impl:t};return a.memoizedState=s,function(){if((Jt&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}},zp={readContext:di,use:Tf,useCallback:mx,useContext:di,useEffect:Np,useImperativeHandle:px,useInsertionEffect:fx,useLayoutEffect:hx,useMemo:_x,useReducer:Af,useRef:lx,useState:function(){return Af(Ur)},useDebugValue:Up,useDeferredValue:function(t,a){var s=Hn();return gx(s,dn.memoizedState,t,a)},useTransition:function(){var t=Af(Ur)[0],a=Hn().memoizedState;return[typeof t=="boolean"?t:Ic(t),a]},useSyncExternalStore:Yv,useId:Sx,useHostTransitionStatus:Pp,useFormState:rx,useActionState:rx,useOptimistic:function(t,a){var s=Hn();return Jv(s,dn,t,a)},useMemoCache:Ap,useCacheRefresh:Mx};zp.useEffectEvent=ux;var Rx={readContext:di,use:Tf,useCallback:mx,useContext:di,useEffect:Np,useImperativeHandle:px,useInsertionEffect:fx,useLayoutEffect:hx,useMemo:_x,useReducer:Cp,useRef:lx,useState:function(){return Cp(Ur)},useDebugValue:Up,useDeferredValue:function(t,a){var s=Hn();return dn===null?Lp(s,t,a):gx(s,dn.memoizedState,t,a)},useTransition:function(){var t=Cp(Ur)[0],a=Hn().memoizedState;return[typeof t=="boolean"?t:Ic(t),a]},useSyncExternalStore:Yv,useId:Sx,useHostTransitionStatus:Pp,useFormState:ox,useActionState:ox,useOptimistic:function(t,a){var s=Hn();return dn!==null?Jv(s,dn,t,a):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Ap,useCacheRefresh:Mx};Rx.useEffectEvent=ux;function Fp(t,a,s,c){a=t.memoizedState,s=s(c,a),s=s==null?a:x({},a,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Bp={enqueueSetState:function(t,a,s){t=t._reactInternals;var c=ua(),h=ds(c);h.payload=a,s!=null&&(h.callback=s),a=ps(t,h,c),a!==null&&(Wi(a,t,c),Uc(a,t,c))},enqueueReplaceState:function(t,a,s){t=t._reactInternals;var c=ua(),h=ds(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=ps(t,h,c),a!==null&&(Wi(a,t,c),Uc(a,t,c))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var s=ua(),c=ds(s);c.tag=2,a!=null&&(c.callback=a),a=ps(t,c,s),a!==null&&(Wi(a,t,s),Uc(a,t,s))}};function Cx(t,a,s,c,h,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,E):a.prototype&&a.prototype.isPureReactComponent?!Ec(s,c)||!Ec(h,m):!0}function wx(t,a,s,c){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==t&&Bp.enqueueReplaceState(a,a.state,null)}function mo(t,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(t=t.defaultProps){s===a&&(s=x({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}function Dx(t){of(t)}function Nx(t){console.error(t)}function Ux(t){of(t)}function Df(t,a){try{var s=t.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Lx(t,a,s){try{var c=t.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Hp(t,a,s){return s=ds(s),s.tag=3,s.payload={element:null},s.callback=function(){Df(t,a)},s}function Ox(t){return t=ds(t),t.tag=3,t}function Px(t,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;t.payload=function(){return h(m)},t.callback=function(){Lx(a,s,c)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Lx(a,s,c),typeof h!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var L=c.stack;this.componentDidCatch(c.value,{componentStack:L!==null?L:""})})}function AT(t,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&rl(a,s,h,!0),s=sa.current,s!==null){switch(s.tag){case 31:case 13:return Da===null?Vf():s.alternate===null&&In===0&&(In=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===gf?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),fm(t,c,h)),!1;case 22:return s.flags|=65536,c===gf?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),fm(t,c,h)),!1}throw Error(i(435,s.tag))}return fm(t,c,h),Vf(),!1}if(Ht)return a=sa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==rp&&(t=Error(i(422),{cause:c}),Rc(Aa(t,s)))):(c!==rp&&(a=Error(i(423),{cause:c}),Rc(Aa(a,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,c=Aa(c,s),h=Hp(t.stateNode,c,h),_p(t,h),In!==4&&(In=2)),!1;var m=Error(i(520),{cause:c});if(m=Aa(m,s),Yc===null?Yc=[m]:Yc.push(m),In!==4&&(In=2),a===null)return!0;c=Aa(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=Hp(s.stateNode,c,t),_p(s,t),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ys===null||!ys.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Ox(h),Px(h,t,s,c),_p(s,h),!1}s=s.return}while(s!==null);return!1}var Gp=Error(i(461)),Yn=!1;function pi(t,a,s,c){a.child=t===null?Bv(a,null,s,c):ho(a,t.child,s,c)}function Ix(t,a,s,c,h){s=s.render;var m=a.ref;if("ref"in c){var E={};for(var L in c)L!=="ref"&&(E[L]=c[L])}else E=c;return lo(a),c=Mp(t,a,s,E,m,h),L=bp(),t!==null&&!Yn?(Ep(t,a,h),Lr(t,a,h)):(Ht&&L&&ip(a),a.flags|=1,pi(t,a,c,h),a.child)}function zx(t,a,s,c,h){if(t===null){var m=s.type;return typeof m=="function"&&!ep(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,Fx(t,a,m,c,h)):(t=ff(s.type,null,c,a,a.mode,h),t.ref=a.ref,t.return=a,a.child=t)}if(m=t.child,!jp(t,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ec,s(E,c)&&t.ref===a.ref)return Lr(t,a,h)}return a.flags|=1,t=Rr(m,c),t.ref=a.ref,t.return=a,a.child=t}function Fx(t,a,s,c,h){if(t!==null){var m=t.memoizedProps;if(Ec(m,c)&&t.ref===a.ref)if(Yn=!1,a.pendingProps=c=m,jp(t,h))(t.flags&131072)!==0&&(Yn=!0);else return a.lanes=t.lanes,Lr(t,a,h)}return Vp(t,a,s,c,h)}function Bx(t,a,s,c){var h=c.children,m=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(c=a.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;c=h&~m}else c=0,a.child=null;return Hx(t,a,m,s,c)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&mf(a,m!==null?m.cachePool:null),m!==null?Vv(a,m):vp(),kv(a);else return c=a.lanes=536870912,Hx(t,a,m!==null?m.baseLanes|s:s,s,c)}else m!==null?(mf(a,m.cachePool),Vv(a,m),_s(),a.memoizedState=null):(t!==null&&mf(a,null),vp(),_s());return pi(t,a,h,s),a.child}function Bc(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Hx(t,a,s,c,h){var m=hp();return m=m===null?null:{parent:Xn._currentValue,pool:m},a.memoizedState={baseLanes:s,cachePool:m},t!==null&&mf(a,null),vp(),kv(a),t!==null&&rl(t,a,c,!0),a.childLanes=h,null}function Nf(t,a){return a=Lf({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Gx(t,a,s){return ho(a,t.child,null,s),t=Nf(a,a.pendingProps),t.flags|=2,oa(a),a.memoizedState=null,t}function RT(t,a,s){var c=a.pendingProps,h=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Ht){if(c.mode==="hidden")return t=Nf(a,c),a.lanes=536870912,Bc(null,t);if(yp(a),(t=Tn)?(t=$y(t,wa),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ar,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},s=Ev(t),s.return=a,a.child=s,hi=a,Tn=null)):t=null,t===null)throw us(a);return a.lanes=536870912,null}return Nf(a,c)}var m=t.memoizedState;if(m!==null){var E=m.dehydrated;if(yp(a),h)if(a.flags&256)a.flags&=-257,a=Gx(t,a,s);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(i(558));else if(Yn||rl(t,a,s,!1),h=(s&t.childLanes)!==0,Yn||h){if(c=vn,c!==null&&(E=Ke(c,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,ao(t,E),Wi(c,t,E),Gp;Vf(),a=Gx(t,a,s)}else t=m.treeContext,Tn=Na(E.nextSibling),hi=a,Ht=!0,cs=null,wa=!1,t!==null&&Rv(a,t),a=Nf(a,c),a.flags|=4096;return a}return t=Rr(t.child,{mode:c.mode,children:c.children}),t.ref=a.ref,a.child=t,t.return=a,t}function Uf(t,a){var s=a.ref;if(s===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(t===null||t.ref!==s)&&(a.flags|=4194816)}}function Vp(t,a,s,c,h){return lo(a),s=Mp(t,a,s,c,void 0,h),c=bp(),t!==null&&!Yn?(Ep(t,a,h),Lr(t,a,h)):(Ht&&c&&ip(a),a.flags|=1,pi(t,a,s,h),a.child)}function Vx(t,a,s,c,h,m){return lo(a),a.updateQueue=null,s=Wv(a,c,s,h),Xv(t),c=bp(),t!==null&&!Yn?(Ep(t,a,m),Lr(t,a,m)):(Ht&&c&&ip(a),a.flags|=1,pi(t,a,s,m),a.child)}function kx(t,a,s,c,h){if(lo(a),a.stateNode===null){var m=tl,E=s.contextType;typeof E=="object"&&E!==null&&(m=di(E)),m=new s(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Bp,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},pp(a),E=s.contextType,m.context=typeof E=="object"&&E!==null?di(E):tl,m.state=a.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Fp(a,s,E,c),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Bp.enqueueReplaceState(m,m.state,null),Oc(a,c,m,h),Lc(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(t===null){m=a.stateNode;var L=a.memoizedProps,W=mo(s,L);m.props=W;var ue=m.context,ye=s.contextType;E=tl,typeof ye=="object"&&ye!==null&&(E=di(ye));var Te=s.getDerivedStateFromProps;ye=typeof Te=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=a.pendingProps!==L,ye||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||ue!==E)&&wx(a,m,c,E),hs=!1;var he=a.memoizedState;m.state=he,Oc(a,c,m,h),Lc(),ue=a.memoizedState,L||he!==ue||hs?(typeof Te=="function"&&(Fp(a,s,Te,c),ue=a.memoizedState),(W=hs||Cx(a,s,W,c,he,ue,E))?(ye||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=ue),m.props=c,m.state=ue,m.context=E,c=W):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,mp(t,a),E=a.memoizedProps,ye=mo(s,E),m.props=ye,Te=a.pendingProps,he=m.context,ue=s.contextType,W=tl,typeof ue=="object"&&ue!==null&&(W=di(ue)),L=s.getDerivedStateFromProps,(ue=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Te||he!==W)&&wx(a,m,c,W),hs=!1,he=a.memoizedState,m.state=he,Oc(a,c,m,h),Lc();var _e=a.memoizedState;E!==Te||he!==_e||hs||t!==null&&t.dependencies!==null&&df(t.dependencies)?(typeof L=="function"&&(Fp(a,s,L,c),_e=a.memoizedState),(ye=hs||Cx(a,s,ye,c,he,_e,W)||t!==null&&t.dependencies!==null&&df(t.dependencies))?(ue||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,_e,W),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,_e,W)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&he===t.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&he===t.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=_e),m.props=c,m.state=_e,m.context=W,c=ye):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&he===t.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&he===t.memoizedState||(a.flags|=1024),c=!1)}return m=c,Uf(t,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,t!==null&&c?(a.child=ho(a,t.child,null,h),a.child=ho(a,null,s,h)):pi(t,a,s,h),a.memoizedState=m.state,t=a.child):t=Lr(t,a,h),t}function Xx(t,a,s,c){return so(),a.flags|=256,pi(t,a,s,c),a.child}var kp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xp(t){return{baseLanes:t,cachePool:Lv()}}function Wp(t,a,s){return t=t!==null?t.childLanes&~s:0,a&&(t|=ca),t}function Wx(t,a,s){var c=a.pendingProps,h=!1,m=(a.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(Bn.current&2)!==0),E&&(h=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,t===null){if(Ht){if(h?ms(a):_s(),(t=Tn)?(t=$y(t,wa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ar,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},s=Ev(t),s.return=a,a.child=s,hi=a,Tn=null)):t=null,t===null)throw us(a);return Rm(t)?a.lanes=32:a.lanes=536870912,null}var L=c.children;return c=c.fallback,h?(_s(),h=a.mode,L=Lf({mode:"hidden",children:L},h),c=ro(c,h,s,null),L.return=a,c.return=a,L.sibling=c,a.child=L,c=a.child,c.memoizedState=Xp(s),c.childLanes=Wp(t,E,s),a.memoizedState=kp,Bc(null,c)):(ms(a),Yp(a,L))}var W=t.memoizedState;if(W!==null&&(L=W.dehydrated,L!==null)){if(m)a.flags&256?(ms(a),a.flags&=-257,a=qp(t,a,s)):a.memoizedState!==null?(_s(),a.child=t.child,a.flags|=128,a=null):(_s(),L=c.fallback,h=a.mode,c=Lf({mode:"visible",children:c.children},h),L=ro(L,h,s,null),L.flags|=2,c.return=a,L.return=a,c.sibling=L,a.child=c,ho(a,t.child,null,s),c=a.child,c.memoizedState=Xp(s),c.childLanes=Wp(t,E,s),a.memoizedState=kp,a=Bc(null,c));else if(ms(a),Rm(L)){if(E=L.nextSibling&&L.nextSibling.dataset,E)var ue=E.dgst;E=ue,c=Error(i(419)),c.stack="",c.digest=E,Rc({value:c,source:null,stack:null}),a=qp(t,a,s)}else if(Yn||rl(t,a,s,!1),E=(s&t.childLanes)!==0,Yn||E){if(E=vn,E!==null&&(c=Ke(E,s),c!==0&&c!==W.retryLane))throw W.retryLane=c,ao(t,c),Wi(E,t,c),Gp;Am(L)||Vf(),a=qp(t,a,s)}else Am(L)?(a.flags|=192,a.child=t.child,a=null):(t=W.treeContext,Tn=Na(L.nextSibling),hi=a,Ht=!0,cs=null,wa=!1,t!==null&&Rv(a,t),a=Yp(a,c.children),a.flags|=4096);return a}return h?(_s(),L=c.fallback,h=a.mode,W=t.child,ue=W.sibling,c=Rr(W,{mode:"hidden",children:c.children}),c.subtreeFlags=W.subtreeFlags&65011712,ue!==null?L=Rr(ue,L):(L=ro(L,h,s,null),L.flags|=2),L.return=a,c.return=a,c.sibling=L,a.child=c,Bc(null,c),c=a.child,L=t.child.memoizedState,L===null?L=Xp(s):(h=L.cachePool,h!==null?(W=Xn._currentValue,h=h.parent!==W?{parent:W,pool:W}:h):h=Lv(),L={baseLanes:L.baseLanes|s,cachePool:h}),c.memoizedState=L,c.childLanes=Wp(t,E,s),a.memoizedState=kp,Bc(t.child,c)):(ms(a),s=t.child,t=s.sibling,s=Rr(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,t!==null&&(E=a.deletions,E===null?(a.deletions=[t],a.flags|=16):E.push(t)),a.child=s,a.memoizedState=null,s)}function Yp(t,a){return a=Lf({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Lf(t,a){return t=ra(22,t,null,a),t.lanes=0,t}function qp(t,a,s){return ho(a,t.child,null,s),t=Yp(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Yx(t,a,s){t.lanes|=a;var c=t.alternate;c!==null&&(c.lanes|=a),lp(t.return,a,s)}function Zp(t,a,s,c,h,m){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h,treeForkCount:m}:(E.isBackwards=a,E.rendering=null,E.renderingStartTime=0,E.last=c,E.tail=s,E.tailMode=h,E.treeForkCount=m)}function qx(t,a,s){var c=a.pendingProps,h=c.revealOrder,m=c.tail;c=c.children;var E=Bn.current,L=(E&2)!==0;if(L?(E=E&1|2,a.flags|=128):E&=1,be(Bn,E),pi(t,a,c,s),c=Ht?Ac:0,!L&&t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yx(t,s,a);else if(t.tag===19)Yx(t,s,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(s=a.child,h=null;s!==null;)t=s.alternate,t!==null&&Sf(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),Zp(a,!1,h,s,m,c);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(t=h.alternate,t!==null&&Sf(t)===null){a.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}Zp(a,!0,s,null,m,c);break;case"together":Zp(a,!1,null,null,void 0,c);break;default:a.memoizedState=null}return a.child}function Lr(t,a,s){if(t!==null&&(a.dependencies=t.dependencies),xs|=a.lanes,(s&a.childLanes)===0)if(t!==null){if(rl(t,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(i(153));if(a.child!==null){for(t=a.child,s=Rr(t,t.pendingProps),a.child=s,s.return=a;t.sibling!==null;)t=t.sibling,s=s.sibling=Rr(t,t.pendingProps),s.return=a;s.sibling=null}return a.child}function jp(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&df(t)))}function CT(t,a,s){switch(a.tag){case 3:Se(a,a.stateNode.containerInfo),fs(a,Xn,t.memoizedState.cache),so();break;case 27:case 5:at(a);break;case 4:Se(a,a.stateNode.containerInfo);break;case 10:fs(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,yp(a),null;break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(ms(a),a.flags|=128,null):(s&a.child.childLanes)!==0?Wx(t,a,s):(ms(a),t=Lr(t,a,s),t!==null?t.sibling:null);ms(a);break;case 19:var h=(t.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(rl(t,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return qx(t,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),be(Bn,Bn.current),c)break;return null;case 22:return a.lanes=0,Bx(t,a,s,a.pendingProps);case 24:fs(a,Xn,t.memoizedState.cache)}return Lr(t,a,s)}function Zx(t,a,s){if(t!==null)if(t.memoizedProps!==a.pendingProps)Yn=!0;else{if(!jp(t,s)&&(a.flags&128)===0)return Yn=!1,CT(t,a,s);Yn=(t.flags&131072)!==0}else Yn=!1,Ht&&(a.flags&1048576)!==0&&Av(a,Ac,a.index);switch(a.lanes=0,a.tag){case 16:e:{var c=a.pendingProps;if(t=uo(a.elementType),a.type=t,typeof t=="function")ep(t)?(c=mo(t,c),a.tag=1,a=kx(null,a,t,c,s)):(a.tag=0,a=Vp(null,a,t,c,s));else{if(t!=null){var h=t.$$typeof;if(h===R){a.tag=11,a=Ix(null,a,t,c,s);break e}else if(h===C){a.tag=14,a=zx(null,a,t,c,s);break e}}throw a=re(t)||t,Error(i(306,a,""))}}return a;case 0:return Vp(t,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=mo(c,a.pendingProps),kx(t,a,c,h,s);case 3:e:{if(Se(a,a.stateNode.containerInfo),t===null)throw Error(i(387));c=a.pendingProps;var m=a.memoizedState;h=m.element,mp(t,a),Oc(a,c,null,s);var E=a.memoizedState;if(c=E.cache,fs(a,Xn,c),c!==m.cache&&cp(a,[Xn],s,!0),Lc(),c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=Xx(t,a,c,s);break e}else if(c!==h){h=Aa(Error(i(424)),a),Rc(h),a=Xx(t,a,c,s);break e}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Tn=Na(t.firstChild),hi=a,Ht=!0,cs=null,wa=!0,s=Bv(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(so(),c===h){a=Lr(t,a,s);break e}pi(t,a,c,s)}a=a.child}return a;case 26:return Uf(t,a),t===null?(s=rS(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ht||(s=a.type,t=a.pendingProps,c=jf(te.current).createElement(s),c[xt]=a,c[yt]=t,mi(c,s,t),Rt(c),a.stateNode=c):a.memoizedState=rS(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return at(a),t===null&&Ht&&(c=a.stateNode=nS(a.type,a.pendingProps,te.current),hi=a,wa=!0,h=Tn,Es(a.type)?(Cm=h,Tn=Na(c.firstChild)):Tn=h),pi(t,a,a.pendingProps.children,s),Uf(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Ht&&((h=c=Tn)&&(c=aA(c,a.type,a.pendingProps,wa),c!==null?(a.stateNode=c,hi=a,Tn=Na(c.firstChild),wa=!1,h=!0):h=!1),h||us(a)),at(a),h=a.type,m=a.pendingProps,E=t!==null?t.memoizedProps:null,c=m.children,bm(h,m)?c=null:E!==null&&bm(h,E)&&(a.flags|=32),a.memoizedState!==null&&(h=Mp(t,a,xT,null,null,s),eu._currentValue=h),Uf(t,a),pi(t,a,c,s),a.child;case 6:return t===null&&Ht&&((t=s=Tn)&&(s=rA(s,a.pendingProps,wa),s!==null?(a.stateNode=s,hi=a,Tn=null,t=!0):t=!1),t||us(a)),null;case 13:return Wx(t,a,s);case 4:return Se(a,a.stateNode.containerInfo),c=a.pendingProps,t===null?a.child=ho(a,null,c,s):pi(t,a,c,s),a.child;case 11:return Ix(t,a,a.type,a.pendingProps,s);case 7:return pi(t,a,a.pendingProps,s),a.child;case 8:return pi(t,a,a.pendingProps.children,s),a.child;case 12:return pi(t,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,fs(a,a.type,c.value),pi(t,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,lo(a),h=di(h),c=c(h),a.flags|=1,pi(t,a,c,s),a.child;case 14:return zx(t,a,a.type,a.pendingProps,s);case 15:return Fx(t,a,a.type,a.pendingProps,s);case 19:return qx(t,a,s);case 31:return RT(t,a,s);case 22:return Bx(t,a,s,a.pendingProps);case 24:return lo(a),c=di(Xn),t===null?(h=hp(),h===null&&(h=vn,m=up(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),a.memoizedState={parent:c,cache:h},pp(a),fs(a,Xn,h)):((t.lanes&s)!==0&&(mp(t,a),Oc(a,null,null,s),Lc()),h=t.memoizedState,m=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),fs(a,Xn,c)):(c=m.cache,fs(a,Xn,c),c!==h.cache&&cp(a,[Xn],s,!0))),pi(t,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Or(t){t.flags|=4}function Kp(t,a,s,c,h){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(Sy())t.flags|=8192;else throw fo=gf,dp}else t.flags&=-16777217}function jx(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!uS(a))if(Sy())t.flags|=8192;else throw fo=gf,dp}function Of(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Ae():536870912,t.lanes|=a,gl|=a)}function Hc(t,a){if(!Ht)switch(t.tailMode){case"hidden":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function An(t){var a=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(a)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=c,t.childLanes=s,a}function wT(t,a,s){var c=a.pendingProps;switch(ap(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(a),null;case 1:return An(a),null;case 3:return s=a.stateNode,c=null,t!==null&&(c=t.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Dr(Xn),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(al(a)?Or(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,sp())),An(a),null;case 26:var h=a.type,m=a.memoizedState;return t===null?(Or(a),m!==null?(An(a),jx(a,m)):(An(a),Kp(a,h,null,c,s))):m?m!==t.memoizedState?(Or(a),An(a),jx(a,m)):(An(a),a.flags&=-16777217):(t=t.memoizedProps,t!==c&&Or(a),An(a),Kp(a,h,t,c,s)),null;case 27:if(qe(a),s=te.current,h=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==c&&Or(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return An(a),null}t=Re.current,al(a)?Cv(a):(t=nS(h,c,s),a.stateNode=t,Or(a))}return An(a),null;case 5:if(qe(a),h=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==c&&Or(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return An(a),null}if(m=Re.current,al(a))Cv(a);else{var E=jf(te.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?E.createElement("select",{is:c.is}):E.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?E.createElement(h,{is:c.is}):E.createElement(h)}}m[xt]=a,m[yt]=c;e:for(E=a.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===a)break e;for(;E.sibling===null;){if(E.return===null||E.return===a)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}a.stateNode=m;e:switch(mi(m,h,c),h){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Or(a)}}return An(a),Kp(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,s),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==c&&Or(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(t=te.current,al(a)){if(t=a.stateNode,s=a.memoizedProps,c=null,h=hi,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}t[xt]=a,t=!!(t.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||Wy(t.nodeValue,s)),t||us(a,!0)}else t=jf(t).createTextNode(c),t[xt]=a,a.stateNode=t}return An(a),null;case 31:if(s=a.memoizedState,t===null||t.memoizedState!==null){if(c=al(a),s!==null){if(t===null){if(!c)throw Error(i(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(557));t[xt]=a}else so(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;An(a),t=!1}else s=sp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return a.flags&256?(oa(a),a):(oa(a),null);if((a.flags&128)!==0)throw Error(i(558))}return An(a),null;case 13:if(c=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=al(a),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[xt]=a}else so(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;An(a),h=!1}else h=sp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(oa(a),a):(oa(a),null)}return oa(a),(a.flags&128)!==0?(a.lanes=s,a):(s=c!==null,t=t!==null&&t.memoizedState!==null,s&&(c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)),s!==t&&s&&(a.child.flags|=8192),Of(a,a.updateQueue),An(a),null);case 4:return Be(),t===null&&vm(a.stateNode.containerInfo),An(a),null;case 10:return Dr(a.type),An(a),null;case 19:if(J(Bn),c=a.memoizedState,c===null)return An(a),null;if(h=(a.flags&128)!==0,m=c.rendering,m===null)if(h)Hc(c,!1);else{if(In!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(m=Sf(t),m!==null){for(a.flags|=128,Hc(c,!1),t=m.updateQueue,a.updateQueue=t,Of(a,t),a.subtreeFlags=0,t=s,s=a.child;s!==null;)bv(s,t),s=s.sibling;return be(Bn,Bn.current&1|2),Ht&&Cr(a,c.treeForkCount),a.child}t=t.sibling}c.tail!==null&&zt()>Bf&&(a.flags|=128,h=!0,Hc(c,!1),a.lanes=4194304)}else{if(!h)if(t=Sf(m),t!==null){if(a.flags|=128,h=!0,t=t.updateQueue,a.updateQueue=t,Of(a,t),Hc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Ht)return An(a),null}else 2*zt()-c.renderingStartTime>Bf&&s!==536870912&&(a.flags|=128,h=!0,Hc(c,!1),a.lanes=4194304);c.isBackwards?(m.sibling=a.child,a.child=m):(t=c.last,t!==null?t.sibling=m:a.child=m,c.last=m)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=zt(),t.sibling=null,s=Bn.current,be(Bn,h?s&1|2:s&1),Ht&&Cr(a,c.treeForkCount),t):(An(a),null);case 22:case 23:return oa(a),xp(),c=a.memoizedState!==null,t!==null?t.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(An(a),a.subtreeFlags&6&&(a.flags|=8192)):An(a),s=a.updateQueue,s!==null&&Of(a,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),t!==null&&J(co),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Dr(Xn),An(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function DT(t,a){switch(ap(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Dr(Xn),Be(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return qe(a),null;case 31:if(a.memoizedState!==null){if(oa(a),a.alternate===null)throw Error(i(340));so()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(oa(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(i(340));so()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return J(Bn),null;case 4:return Be(),null;case 10:return Dr(a.type),null;case 22:case 23:return oa(a),xp(),t!==null&&J(co),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Dr(Xn),null;case 25:return null;default:return null}}function Kx(t,a){switch(ap(a),a.tag){case 3:Dr(Xn),Be();break;case 26:case 27:case 5:qe(a);break;case 4:Be();break;case 31:a.memoizedState!==null&&oa(a);break;case 13:oa(a);break;case 19:J(Bn);break;case 10:Dr(a.type);break;case 22:case 23:oa(a),xp(),t!==null&&J(co);break;case 24:Dr(Xn)}}function Gc(t,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&t)===t){c=void 0;var m=s.create,E=s.inst;c=m(),E.destroy=c}s=s.next}while(s!==h)}}catch(L){ln(a,a.return,L)}}function gs(t,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&t)===t){var E=c.inst,L=E.destroy;if(L!==void 0){E.destroy=void 0,h=a;var W=s,ue=L;try{ue()}catch(ye){ln(h,W,ye)}}}c=c.next}while(c!==m)}}catch(ye){ln(a,a.return,ye)}}function Qx(t){var a=t.updateQueue;if(a!==null){var s=t.stateNode;try{Gv(a,s)}catch(c){ln(t,t.return,c)}}}function Jx(t,a,s){s.props=mo(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(c){ln(t,a,c)}}function Vc(t,a){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var c=t.stateNode;break;case 30:c=t.stateNode;break;default:c=t.stateNode}typeof s=="function"?t.refCleanup=s(c):s.current=c}}catch(h){ln(t,a,h)}}function sr(t,a){var s=t.ref,c=t.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){ln(t,a,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ln(t,a,h)}else s.current=null}function $x(t){var a=t.type,s=t.memoizedProps,c=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){ln(t,t.return,h)}}function Qp(t,a,s){try{var c=t.stateNode;JT(c,t.type,s,a),c[yt]=a}catch(h){ln(t,t.return,h)}}function ey(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Es(t.type)||t.tag===4}function Jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ey(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Es(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $p(t,a,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(t),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Tr));else if(c!==4&&(c===27&&Es(t.type)&&(s=t.stateNode,a=null),t=t.child,t!==null))for($p(t,a,s),t=t.sibling;t!==null;)$p(t,a,s),t=t.sibling}function Pf(t,a,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,a?s.insertBefore(t,a):s.appendChild(t);else if(c!==4&&(c===27&&Es(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Pf(t,a,s),t=t.sibling;t!==null;)Pf(t,a,s),t=t.sibling}function ty(t){var a=t.stateNode,s=t.memoizedProps;try{for(var c=t.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);mi(a,c,s),a[xt]=t,a[yt]=s}catch(m){ln(t,t.return,m)}}var Pr=!1,qn=!1,em=!1,ny=typeof WeakSet=="function"?WeakSet:Set,si=null;function NT(t,a){if(t=t.containerInfo,Sm=nh,t=pv(t),qd(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,L=-1,W=-1,ue=0,ye=0,Te=t,he=null;t:for(;;){for(var _e;Te!==s||h!==0&&Te.nodeType!==3||(L=E+h),Te!==m||c!==0&&Te.nodeType!==3||(W=E+c),Te.nodeType===3&&(E+=Te.nodeValue.length),(_e=Te.firstChild)!==null;)he=Te,Te=_e;for(;;){if(Te===t)break t;if(he===s&&++ue===h&&(L=E),he===m&&++ye===c&&(W=E),(_e=Te.nextSibling)!==null)break;Te=he,he=Te.parentNode}Te=_e}s=L===-1||W===-1?null:{start:L,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mm={focusedElem:t,selectionRange:s},nh=!1,si=a;si!==null;)if(a=si,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,si=t;else for(;si!==null;){switch(a=si,m=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)h=t[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=a,h=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var Je=mo(s.type,h);t=c.getSnapshotBeforeUpdate(Je,m),c.__reactInternalSnapshotBeforeUpdate=t}catch(ft){ln(s,s.return,ft)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,s=t.nodeType,s===9)Tm(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=a.sibling,t!==null){t.return=a.return,si=t;break}si=a.return}}function iy(t,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:zr(t,s),c&4&&Gc(5,s);break;case 1:if(zr(t,s),c&4)if(t=s.stateNode,a===null)try{t.componentDidMount()}catch(E){ln(s,s.return,E)}else{var h=mo(s.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(h,a,t.__reactInternalSnapshotBeforeUpdate)}catch(E){ln(s,s.return,E)}}c&64&&Qx(s),c&512&&Vc(s,s.return);break;case 3:if(zr(t,s),c&64&&(t=s.updateQueue,t!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Gv(t,a)}catch(E){ln(s,s.return,E)}}break;case 27:a===null&&c&4&&ty(s);case 26:case 5:zr(t,s),a===null&&c&4&&$x(s),c&512&&Vc(s,s.return);break;case 12:zr(t,s);break;case 31:zr(t,s),c&4&&sy(t,s);break;case 13:zr(t,s),c&4&&oy(t,s),c&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=HT.bind(null,s),sA(t,s))));break;case 22:if(c=s.memoizedState!==null||Pr,!c){a=a!==null&&a.memoizedState!==null||qn,h=Pr;var m=qn;Pr=c,(qn=a)&&!m?Fr(t,s,(s.subtreeFlags&8772)!==0):zr(t,s),Pr=h,qn=m}break;case 30:break;default:zr(t,s)}}function ay(t){var a=t.alternate;a!==null&&(t.alternate=null,ay(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Mn(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dn=null,Gi=!1;function Ir(t,a,s){for(s=s.child;s!==null;)ry(t,a,s),s=s.sibling}function ry(t,a,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:qn||sr(s,a),Ir(t,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:qn||sr(s,a);var c=Dn,h=Gi;Es(s.type)&&(Dn=s.stateNode,Gi=!1),Ir(t,a,s),Qc(s.stateNode),Dn=c,Gi=h;break;case 5:qn||sr(s,a);case 6:if(c=Dn,h=Gi,Dn=null,Ir(t,a,s),Dn=c,Gi=h,Dn!==null)if(Gi)try{(Dn.nodeType===9?Dn.body:Dn.nodeName==="HTML"?Dn.ownerDocument.body:Dn).removeChild(s.stateNode)}catch(m){ln(s,a,m)}else try{Dn.removeChild(s.stateNode)}catch(m){ln(s,a,m)}break;case 18:Dn!==null&&(Gi?(t=Dn,Qy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Tl(t)):Qy(Dn,s.stateNode));break;case 4:c=Dn,h=Gi,Dn=s.stateNode.containerInfo,Gi=!0,Ir(t,a,s),Dn=c,Gi=h;break;case 0:case 11:case 14:case 15:gs(2,s,a),qn||gs(4,s,a),Ir(t,a,s);break;case 1:qn||(sr(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Jx(s,a,c)),Ir(t,a,s);break;case 21:Ir(t,a,s);break;case 22:qn=(c=qn)||s.memoizedState!==null,Ir(t,a,s),qn=c;break;default:Ir(t,a,s)}}function sy(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tl(t)}catch(s){ln(a,a.return,s)}}}function oy(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tl(t)}catch(s){ln(a,a.return,s)}}function UT(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new ny),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new ny),a;default:throw Error(i(435,t.tag))}}function If(t,a){var s=UT(t);a.forEach(function(c){if(!s.has(c)){s.add(c);var h=GT.bind(null,t,c);c.then(h,h)}})}function Vi(t,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],m=t,E=a,L=E;e:for(;L!==null;){switch(L.tag){case 27:if(Es(L.type)){Dn=L.stateNode,Gi=!1;break e}break;case 5:Dn=L.stateNode,Gi=!1;break e;case 3:case 4:Dn=L.stateNode.containerInfo,Gi=!0;break e}L=L.return}if(Dn===null)throw Error(i(160));ry(m,E,h),Dn=null,Gi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)ly(a,t),a=a.sibling}var ja=null;function ly(t,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vi(a,t),ki(t),c&4&&(gs(3,t,t.return),Gc(3,t),gs(5,t,t.return));break;case 1:Vi(a,t),ki(t),c&512&&(qn||s===null||sr(s,s.return)),c&64&&Pr&&(t=t.updateQueue,t!==null&&(c=t.callbacks,c!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=ja;if(Vi(a,t),ki(t),c&512&&(qn||s===null||sr(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=t.memoizedState,s===null)if(c===null)if(t.stateNode===null){e:{c=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Sn]||m[xt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),mi(m,c,s),m[xt]=t,Rt(m),c=m;break e;case"link":var E=lS("link","href",h).get(c+(s.href||""));if(E){for(var L=0;L<E.length;L++)if(m=E[L],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(L,1);break t}}m=h.createElement(c),mi(m,c,s),h.head.appendChild(m);break;case"meta":if(E=lS("meta","content",h).get(c+(s.content||""))){for(L=0;L<E.length;L++)if(m=E[L],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(L,1);break t}}m=h.createElement(c),mi(m,c,s),h.head.appendChild(m);break;default:throw Error(i(468,c))}m[xt]=t,Rt(m),c=m}t.stateNode=c}else cS(h,t.type,t.stateNode);else t.stateNode=oS(h,c,t.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?cS(h,t.type,t.stateNode):oS(h,c,t.memoizedProps)):c===null&&t.stateNode!==null&&Qp(t,t.memoizedProps,s.memoizedProps)}break;case 27:Vi(a,t),ki(t),c&512&&(qn||s===null||sr(s,s.return)),s!==null&&c&4&&Qp(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Vi(a,t),ki(t),c&512&&(qn||s===null||sr(s,s.return)),t.flags&32){h=t.stateNode;try{ia(h,"")}catch(Je){ln(t,t.return,Je)}}c&4&&t.stateNode!=null&&(h=t.memoizedProps,Qp(t,h,s!==null?s.memoizedProps:h)),c&1024&&(em=!0);break;case 6:if(Vi(a,t),ki(t),c&4){if(t.stateNode===null)throw Error(i(162));c=t.memoizedProps,s=t.stateNode;try{s.nodeValue=c}catch(Je){ln(t,t.return,Je)}}break;case 3:if(Jf=null,h=ja,ja=Kf(a.containerInfo),Vi(a,t),ja=h,ki(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Tl(a.containerInfo)}catch(Je){ln(t,t.return,Je)}em&&(em=!1,cy(t));break;case 4:c=ja,ja=Kf(t.stateNode.containerInfo),Vi(a,t),ki(t),ja=c;break;case 12:Vi(a,t),ki(t);break;case 31:Vi(a,t),ki(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,If(t,c)));break;case 13:Vi(a,t),ki(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ff=zt()),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,If(t,c)));break;case 22:h=t.memoizedState!==null;var W=s!==null&&s.memoizedState!==null,ue=Pr,ye=qn;if(Pr=ue||h,qn=ye||W,Vi(a,t),qn=ye,Pr=ue,ki(t),c&8192)e:for(a=t.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(s===null||W||Pr||qn||_o(t)),s=null,a=t;;){if(a.tag===5||a.tag===26){if(s===null){W=s=a;try{if(m=W.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{L=W.stateNode;var Te=W.memoizedProps.style,he=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;L.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(Je){ln(W,W.return,Je)}}}else if(a.tag===6){if(s===null){W=a;try{W.stateNode.nodeValue=h?"":W.memoizedProps}catch(Je){ln(W,W.return,Je)}}}else if(a.tag===18){if(s===null){W=a;try{var _e=W.stateNode;h?Jy(_e,!0):Jy(W.stateNode,!1)}catch(Je){ln(W,W.return,Je)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=t.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,If(t,s))));break;case 19:Vi(a,t),ki(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,If(t,c)));break;case 30:break;case 21:break;default:Vi(a,t),ki(t)}}function ki(t){var a=t.flags;if(a&2){try{for(var s,c=t.return;c!==null;){if(ey(c)){s=c;break}c=c.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var h=s.stateNode,m=Jp(t);Pf(t,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(ia(E,""),s.flags&=-33);var L=Jp(t);Pf(t,L,E);break;case 3:case 4:var W=s.stateNode.containerInfo,ue=Jp(t);$p(t,ue,W);break;default:throw Error(i(161))}}catch(ye){ln(t,t.return,ye)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function cy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;cy(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function zr(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)iy(t,a.alternate,a),a=a.sibling}function _o(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:gs(4,a,a.return),_o(a);break;case 1:sr(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Jx(a,a.return,s),_o(a);break;case 27:Qc(a.stateNode);case 26:case 5:sr(a,a.return),_o(a);break;case 22:a.memoizedState===null&&_o(a);break;case 30:_o(a);break;default:_o(a)}t=t.sibling}}function Fr(t,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=t,m=a,E=m.flags;switch(m.tag){case 0:case 11:case 15:Fr(h,m,s),Gc(4,m);break;case 1:if(Fr(h,m,s),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(ue){ln(c,c.return,ue)}if(c=m,h=c.updateQueue,h!==null){var L=c.stateNode;try{var W=h.shared.hiddenCallbacks;if(W!==null)for(h.shared.hiddenCallbacks=null,h=0;h<W.length;h++)Hv(W[h],L)}catch(ue){ln(c,c.return,ue)}}s&&E&64&&Qx(m),Vc(m,m.return);break;case 27:ty(m);case 26:case 5:Fr(h,m,s),s&&c===null&&E&4&&$x(m),Vc(m,m.return);break;case 12:Fr(h,m,s);break;case 31:Fr(h,m,s),s&&E&4&&sy(h,m);break;case 13:Fr(h,m,s),s&&E&4&&oy(h,m);break;case 22:m.memoizedState===null&&Fr(h,m,s),Vc(m,m.return);break;case 30:break;default:Fr(h,m,s)}a=a.sibling}}function tm(t,a){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Cc(s))}function nm(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Cc(t))}function Ka(t,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)uy(t,a,s,c),a=a.sibling}function uy(t,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Ka(t,a,s,c),h&2048&&Gc(9,a);break;case 1:Ka(t,a,s,c);break;case 3:Ka(t,a,s,c),h&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Cc(t)));break;case 12:if(h&2048){Ka(t,a,s,c),t=a.stateNode;try{var m=a.memoizedProps,E=m.id,L=m.onPostCommit;typeof L=="function"&&L(E,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){ln(a,a.return,W)}}else Ka(t,a,s,c);break;case 31:Ka(t,a,s,c);break;case 13:Ka(t,a,s,c);break;case 23:break;case 22:m=a.stateNode,E=a.alternate,a.memoizedState!==null?m._visibility&2?Ka(t,a,s,c):kc(t,a):m._visibility&2?Ka(t,a,s,c):(m._visibility|=2,pl(t,a,s,c,(a.subtreeFlags&10256)!==0||!1)),h&2048&&tm(E,a);break;case 24:Ka(t,a,s,c),h&2048&&nm(a.alternate,a);break;default:Ka(t,a,s,c)}}function pl(t,a,s,c,h){for(h=h&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=t,E=a,L=s,W=c,ue=E.flags;switch(E.tag){case 0:case 11:case 15:pl(m,E,L,W,h),Gc(8,E);break;case 23:break;case 22:var ye=E.stateNode;E.memoizedState!==null?ye._visibility&2?pl(m,E,L,W,h):kc(m,E):(ye._visibility|=2,pl(m,E,L,W,h)),h&&ue&2048&&tm(E.alternate,E);break;case 24:pl(m,E,L,W,h),h&&ue&2048&&nm(E.alternate,E);break;default:pl(m,E,L,W,h)}a=a.sibling}}function kc(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=t,c=a,h=c.flags;switch(c.tag){case 22:kc(s,c),h&2048&&tm(c.alternate,c);break;case 24:kc(s,c),h&2048&&nm(c.alternate,c);break;default:kc(s,c)}a=a.sibling}}var Xc=8192;function ml(t,a,s){if(t.subtreeFlags&Xc)for(t=t.child;t!==null;)fy(t,a,s),t=t.sibling}function fy(t,a,s){switch(t.tag){case 26:ml(t,a,s),t.flags&Xc&&t.memoizedState!==null&&vA(s,ja,t.memoizedState,t.memoizedProps);break;case 5:ml(t,a,s);break;case 3:case 4:var c=ja;ja=Kf(t.stateNode.containerInfo),ml(t,a,s),ja=c;break;case 22:t.memoizedState===null&&(c=t.alternate,c!==null&&c.memoizedState!==null?(c=Xc,Xc=16777216,ml(t,a,s),Xc=c):ml(t,a,s));break;default:ml(t,a,s)}}function hy(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Wc(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];si=c,py(c,t)}hy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dy(t),t=t.sibling}function dy(t){switch(t.tag){case 0:case 11:case 15:Wc(t),t.flags&2048&&gs(9,t,t.return);break;case 3:Wc(t);break;case 12:Wc(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,zf(t)):Wc(t);break;default:Wc(t)}}function zf(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];si=c,py(c,t)}hy(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:gs(8,a,a.return),zf(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,zf(a));break;default:zf(a)}t=t.sibling}}function py(t,a){for(;si!==null;){var s=si;switch(s.tag){case 0:case 11:case 15:gs(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Cc(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,si=c;else e:for(s=t;si!==null;){c=si;var h=c.sibling,m=c.return;if(ay(c),c===s){si=null;break e}if(h!==null){h.return=m,si=h;break e}si=m}}}var LT={getCacheForType:function(t){var a=di(Xn),s=a.data.get(t);return s===void 0&&(s=t(),a.data.set(t,s)),s},cacheSignal:function(){return di(Xn).controller.signal}},OT=typeof WeakMap=="function"?WeakMap:Map,Jt=0,vn=null,Lt=null,Ft=0,on=0,la=null,vs=!1,_l=!1,im=!1,Br=0,In=0,xs=0,go=0,am=0,ca=0,gl=0,Yc=null,Xi=null,rm=!1,Ff=0,my=0,Bf=1/0,Hf=null,ys=null,$n=0,Ss=null,vl=null,Hr=0,sm=0,om=null,_y=null,qc=0,lm=null;function ua(){return(Jt&2)!==0&&Ft!==0?Ft&-Ft:B.T!==null?pm():Tt()}function gy(){if(ca===0)if((Ft&536870912)===0||Ht){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),ca=t}else ca=536870912;return t=sa.current,t!==null&&(t.flags|=32),ca}function Wi(t,a,s){(t===vn&&(on===2||on===9)||t.cancelPendingCommit!==null)&&(xl(t,0),Ms(t,Ft,ca,!1)),Ee(t,s),((Jt&2)===0||t!==vn)&&(t===vn&&((Jt&2)===0&&(go|=s),In===4&&Ms(t,Ft,ca,!1)),or(t))}function vy(t,a,s){if((Jt&6)!==0)throw Error(i(327));var c=!s&&(a&127)===0&&(a&t.expiredLanes)===0||Ie(t,a),h=c?zT(t,a):um(t,a,!0),m=c;do{if(h===0){_l&&!c&&Ms(t,a,0,!1);break}else{if(s=t.current.alternate,m&&!PT(s)){h=um(t,a,!1),m=!1;continue}if(h===2){if(m=a,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var L=t;h=Yc;var W=L.current.memoizedState.isDehydrated;if(W&&(xl(L,E).flags|=256),E=um(L,E,!1),E!==2){if(im&&!W){L.errorRecoveryDisabledLanes|=m,go|=m,h=4;break e}m=Xi,Xi=h,m!==null&&(Xi===null?Xi=m:Xi.push.apply(Xi,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){xl(t,0),Ms(t,a,0,!0);break}e:{switch(c=t,m=h,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Ms(c,a,ca,!vs);break e;case 2:Xi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(h=Ff+300-zt(),10<h)){if(Ms(c,a,ca,!vs),ve(c,0,!0)!==0)break e;Hr=a,c.timeoutHandle=jy(xy.bind(null,c,s,Xi,Hf,rm,a,ca,go,gl,vs,m,"Throttled",-0,0),h);break e}xy(c,s,Xi,Hf,rm,a,ca,go,gl,vs,m,null,-0,0)}}break}while(!0);or(t)}function xy(t,a,s,c,h,m,E,L,W,ue,ye,Te,he,_e){if(t.timeoutHandle=-1,Te=a.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tr},fy(a,m,Te);var Je=(m&62914560)===m?Ff-zt():(m&4194048)===m?my-zt():0;if(Je=xA(Te,Je),Je!==null){Hr=m,t.cancelPendingCommit=Je(Ry.bind(null,t,a,m,s,c,h,E,L,W,ye,Te,null,he,_e)),Ms(t,m,E,!ue);return}}Ry(t,a,m,s,c,h,E,L,W)}function PT(t){for(var a=t;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],m=h.getSnapshot;h=h.value;try{if(!aa(m(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ms(t,a,s,c){a&=~am,a&=~go,t.suspendedLanes|=a,t.pingedLanes&=~a,c&&(t.warmLanes|=a),c=t.expirationTimes;for(var h=a;0<h;){var m=31-ke(h),E=1<<m;c[m]=-1,h&=~E}s!==0&&we(t,s,a)}function Gf(){return(Jt&6)===0?(Zc(0),!1):!0}function cm(){if(Lt!==null){if(on===0)var t=Lt.return;else t=Lt,wr=oo=null,Tp(t),cl=null,Dc=0,t=Lt;for(;t!==null;)Kx(t.alternate,t),t=t.return;Lt=null}}function xl(t,a){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,tA(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Hr=0,cm(),vn=t,Lt=s=Rr(t.current,null),Ft=a,on=0,la=null,vs=!1,_l=Ie(t,a),im=!1,gl=ca=am=go=xs=In=0,Xi=Yc=null,rm=!1,(a&8)!==0&&(a|=a&32);var c=t.entangledLanes;if(c!==0)for(t=t.entanglements,c&=a;0<c;){var h=31-ke(c),m=1<<h;a|=t[h],c&=~m}return Br=a,lf(),s}function yy(t,a){bt=null,B.H=Fc,a===ll||a===_f?(a=Iv(),on=3):a===dp?(a=Iv(),on=4):on=a===Gp?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,Lt===null&&(In=1,Df(t,Aa(a,t.current)))}function Sy(){var t=sa.current;return t===null?!0:(Ft&4194048)===Ft?Da===null:(Ft&62914560)===Ft||(Ft&536870912)!==0?t===Da:!1}function My(){var t=B.H;return B.H=Fc,t===null?Fc:t}function by(){var t=B.A;return B.A=LT,t}function Vf(){In=4,vs||(Ft&4194048)!==Ft&&sa.current!==null||(_l=!0),(xs&134217727)===0&&(go&134217727)===0||vn===null||Ms(vn,Ft,ca,!1)}function um(t,a,s){var c=Jt;Jt|=2;var h=My(),m=by();(vn!==t||Ft!==a)&&(Hf=null,xl(t,a)),a=!1;var E=In;e:do try{if(on!==0&&Lt!==null){var L=Lt,W=la;switch(on){case 8:cm(),E=6;break e;case 3:case 2:case 9:case 6:sa.current===null&&(a=!0);var ue=on;if(on=0,la=null,yl(t,L,W,ue),s&&_l){E=0;break e}break;default:ue=on,on=0,la=null,yl(t,L,W,ue)}}IT(),E=In;break}catch(ye){yy(t,ye)}while(!0);return a&&t.shellSuspendCounter++,wr=oo=null,Jt=c,B.H=h,B.A=m,Lt===null&&(vn=null,Ft=0,lf()),E}function IT(){for(;Lt!==null;)Ey(Lt)}function zT(t,a){var s=Jt;Jt|=2;var c=My(),h=by();vn!==t||Ft!==a?(Hf=null,Bf=zt()+500,xl(t,a)):_l=Ie(t,a);e:do try{if(on!==0&&Lt!==null){a=Lt;var m=la;t:switch(on){case 1:on=0,la=null,yl(t,a,m,1);break;case 2:case 9:if(Ov(m)){on=0,la=null,Ty(a);break}a=function(){on!==2&&on!==9||vn!==t||(on=7),or(t)},m.then(a,a);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:Ov(m)?(on=0,la=null,Ty(a)):(on=0,la=null,yl(t,a,m,7));break;case 5:var E=null;switch(Lt.tag){case 26:E=Lt.memoizedState;case 5:case 27:var L=Lt;if(E?uS(E):L.stateNode.complete){on=0,la=null;var W=L.sibling;if(W!==null)Lt=W;else{var ue=L.return;ue!==null?(Lt=ue,kf(ue)):Lt=null}break t}}on=0,la=null,yl(t,a,m,5);break;case 6:on=0,la=null,yl(t,a,m,6);break;case 8:cm(),In=6;break e;default:throw Error(i(462))}}FT();break}catch(ye){yy(t,ye)}while(!0);return wr=oo=null,B.H=c,B.A=h,Jt=s,Lt!==null?0:(vn=null,Ft=0,lf(),In)}function FT(){for(;Lt!==null&&!qt();)Ey(Lt)}function Ey(t){var a=Zx(t.alternate,t,Br);t.memoizedProps=t.pendingProps,a===null?kf(t):Lt=a}function Ty(t){var a=t,s=a.alternate;switch(a.tag){case 15:case 0:a=Vx(s,a,a.pendingProps,a.type,void 0,Ft);break;case 11:a=Vx(s,a,a.pendingProps,a.type.render,a.ref,Ft);break;case 5:Tp(a);default:Kx(s,a),a=Lt=bv(a,Br),a=Zx(s,a,Br)}t.memoizedProps=t.pendingProps,a===null?kf(t):Lt=a}function yl(t,a,s,c){wr=oo=null,Tp(a),cl=null,Dc=0;var h=a.return;try{if(AT(t,h,a,s,Ft)){In=1,Df(t,Aa(s,t.current)),Lt=null;return}}catch(m){if(h!==null)throw Lt=h,m;In=1,Df(t,Aa(s,t.current)),Lt=null;return}a.flags&32768?(Ht||c===1?t=!0:_l||(Ft&536870912)!==0?t=!1:(vs=t=!0,(c===2||c===9||c===3||c===6)&&(c=sa.current,c!==null&&c.tag===13&&(c.flags|=16384))),Ay(a,t)):kf(a)}function kf(t){var a=t;do{if((a.flags&32768)!==0){Ay(a,vs);return}t=a.return;var s=wT(a.alternate,a,Br);if(s!==null){Lt=s;return}if(a=a.sibling,a!==null){Lt=a;return}Lt=a=t}while(a!==null);In===0&&(In=5)}function Ay(t,a){do{var s=DT(t.alternate,t);if(s!==null){s.flags&=32767,Lt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(t=t.sibling,t!==null)){Lt=t;return}Lt=t=s}while(t!==null);In=6,Lt=null}function Ry(t,a,s,c,h,m,E,L,W){t.cancelPendingCommit=null;do Xf();while($n!==0);if((Jt&6)!==0)throw Error(i(327));if(a!==null){if(a===t.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=Jd,ot(t,s,m,E,L,W),t===vn&&(Lt=vn=null,Ft=0),vl=a,Ss=t,Hr=s,sm=m,om=h,_y=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,VT($,function(){return Uy(),null})):(t.callbackNode=null,t.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,h=V.p,V.p=2,E=Jt,Jt|=4;try{NT(t,a,s)}finally{Jt=E,V.p=h,B.T=c}}$n=1,Cy(),wy(),Dy()}}function Cy(){if($n===1){$n=0;var t=Ss,a=vl,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=V.p;V.p=2;var h=Jt;Jt|=4;try{ly(a,t);var m=Mm,E=pv(t.containerInfo),L=m.focusedElem,W=m.selectionRange;if(E!==L&&L&&L.ownerDocument&&dv(L.ownerDocument.documentElement,L)){if(W!==null&&qd(L)){var ue=W.start,ye=W.end;if(ye===void 0&&(ye=ue),"selectionStart"in L)L.selectionStart=ue,L.selectionEnd=Math.min(ye,L.value.length);else{var Te=L.ownerDocument||document,he=Te&&Te.defaultView||window;if(he.getSelection){var _e=he.getSelection(),Je=L.textContent.length,ft=Math.min(W.start,Je),mn=W.end===void 0?ft:Math.min(W.end,Je);!_e.extend&&ft>mn&&(E=mn,mn=ft,ft=E);var ee=hv(L,ft),q=hv(L,mn);if(ee&&q&&(_e.rangeCount!==1||_e.anchorNode!==ee.node||_e.anchorOffset!==ee.offset||_e.focusNode!==q.node||_e.focusOffset!==q.offset)){var oe=Te.createRange();oe.setStart(ee.node,ee.offset),_e.removeAllRanges(),ft>mn?(_e.addRange(oe),_e.extend(q.node,q.offset)):(oe.setEnd(q.node,q.offset),_e.addRange(oe))}}}}for(Te=[],_e=L;_e=_e.parentNode;)_e.nodeType===1&&Te.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Te.length;L++){var Me=Te[L];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}nh=!!Sm,Mm=Sm=null}finally{Jt=h,V.p=c,B.T=s}}t.current=a,$n=2}}function wy(){if($n===2){$n=0;var t=Ss,a=vl,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=V.p;V.p=2;var h=Jt;Jt|=4;try{iy(t,a.alternate,a)}finally{Jt=h,V.p=c,B.T=s}}$n=3}}function Dy(){if($n===4||$n===3){$n=0,j();var t=Ss,a=vl,s=Hr,c=_y;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?$n=5:($n=0,vl=Ss=null,Ny(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(ys=null),Rn(s),a=a.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(ge,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=B.T,h=V.p,V.p=2,B.T=null;try{for(var m=t.onRecoverableError,E=0;E<c.length;E++){var L=c[E];m(L.value,{componentStack:L.stack})}}finally{B.T=a,V.p=h}}(Hr&3)!==0&&Xf(),or(t),h=t.pendingLanes,(s&261930)!==0&&(h&42)!==0?t===lm?qc++:(qc=0,lm=t):qc=0,Zc(0)}}function Ny(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Cc(a)))}function Xf(){return Cy(),wy(),Dy(),Uy()}function Uy(){if($n!==5)return!1;var t=Ss,a=sm;sm=0;var s=Rn(Hr),c=B.T,h=V.p;try{V.p=32>s?32:s,B.T=null,s=om,om=null;var m=Ss,E=Hr;if($n=0,vl=Ss=null,Hr=0,(Jt&6)!==0)throw Error(i(331));var L=Jt;if(Jt|=4,dy(m.current),uy(m,m.current,E,s),Jt=L,Zc(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(ge,m)}catch{}return!0}finally{V.p=h,B.T=c,Ny(t,a)}}function Ly(t,a,s){a=Aa(s,a),a=Hp(t.stateNode,a,2),t=ps(t,a,2),t!==null&&(Ee(t,2),or(t))}function ln(t,a,s){if(t.tag===3)Ly(t,t,s);else for(;a!==null;){if(a.tag===3){Ly(a,t,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ys===null||!ys.has(c))){t=Aa(s,t),s=Ox(2),c=ps(a,s,2),c!==null&&(Px(s,c,a,t),Ee(c,2),or(c));break}}a=a.return}}function fm(t,a,s){var c=t.pingCache;if(c===null){c=t.pingCache=new OT;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||(im=!0,h.add(s),t=BT.bind(null,t,a,s),a.then(t,t))}function BT(t,a,s){var c=t.pingCache;c!==null&&c.delete(a),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,vn===t&&(Ft&s)===s&&(In===4||In===3&&(Ft&62914560)===Ft&&300>zt()-Ff?(Jt&2)===0&&xl(t,0):am|=s,gl===Ft&&(gl=0)),or(t)}function Oy(t,a){a===0&&(a=Ae()),t=ao(t,a),t!==null&&(Ee(t,a),or(t))}function HT(t){var a=t.memoizedState,s=0;a!==null&&(s=a.retryLane),Oy(t,s)}function GT(t,a){var s=0;switch(t.tag){case 31:case 13:var c=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=t.stateNode;break;case 22:c=t.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Oy(t,s)}function VT(t,a){return en(t,a)}var Wf=null,Sl=null,hm=!1,Yf=!1,dm=!1,bs=0;function or(t){t!==Sl&&t.next===null&&(Sl===null?Wf=Sl=t:Sl=Sl.next=t),Yf=!0,hm||(hm=!0,XT())}function Zc(t,a){if(!dm&&Yf){dm=!0;do for(var s=!1,c=Wf;c!==null;){if(t!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var E=c.suspendedLanes,L=c.pingedLanes;m=(1<<31-ke(42|t)+1)-1,m&=h&~(E&~L),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Fy(c,m))}else m=Ft,m=ve(c,c===vn?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Ie(c,m)||(s=!0,Fy(c,m));c=c.next}while(s);dm=!1}}function kT(){Py()}function Py(){Yf=hm=!1;var t=0;bs!==0&&eA()&&(t=bs);for(var a=zt(),s=null,c=Wf;c!==null;){var h=c.next,m=Iy(c,a);m===0?(c.next=null,s===null?Wf=h:s.next=h,h===null&&(Sl=s)):(s=c,(t!==0||(m&3)!==0)&&(Yf=!0)),c=h}$n!==0&&$n!==5||Zc(t),bs!==0&&(bs=0)}function Iy(t,a){for(var s=t.suspendedLanes,c=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-ke(m),L=1<<E,W=h[E];W===-1?((L&s)===0||(L&c)!==0)&&(h[E]=He(L,a)):W<=a&&(t.expiredLanes|=L),m&=~L}if(a=vn,s=Ft,s=ve(t,t===a?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c=t.callbackNode,s===0||t===a&&(on===2||on===9)||t.cancelPendingCommit!==null)return c!==null&&c!==null&&pt(c),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(a=s&-s,a===t.callbackPriority)return a;switch(c!==null&&pt(c),Rn(s)){case 2:case 8:s=A;break;case 32:s=$;break;case 268435456:s=pe;break;default:s=$}return c=zy.bind(null,t),s=en(s,c),t.callbackPriority=a,t.callbackNode=s,a}return c!==null&&c!==null&&pt(c),t.callbackPriority=2,t.callbackNode=null,2}function zy(t,a){if($n!==0&&$n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Xf()&&t.callbackNode!==s)return null;var c=Ft;return c=ve(t,t===vn?c:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c===0?null:(vy(t,c,a),Iy(t,zt()),t.callbackNode!=null&&t.callbackNode===s?zy.bind(null,t):null)}function Fy(t,a){if(Xf())return null;vy(t,a,!0)}function XT(){nA(function(){(Jt&6)!==0?en(F,kT):Py()})}function pm(){if(bs===0){var t=sl;t===0&&(t=et,et<<=1,(et&261888)===0&&(et=256)),bs=t}return bs}function By(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:eo(""+t)}function Hy(t,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,t.id&&s.setAttribute("form",t.id),a.parentNode.insertBefore(s,a),t=new FormData(t),s.parentNode.removeChild(s),t}function WT(t,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var m=By((h[yt]||null).action),E=c.submitter;E&&(a=(a=E[yt]||null)?By(a.formAction):E.getAttribute("formAction"),a!==null&&(m=a,E=null));var L=new af("action","action",null,c,h);t.push({event:L,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(bs!==0){var W=E?Hy(h,E):new FormData(h);Op(s,{pending:!0,data:W,method:h.method,action:m},null,W)}}else typeof m=="function"&&(L.preventDefault(),W=E?Hy(h,E):new FormData(h),Op(s,{pending:!0,data:W,method:h.method,action:m},m,W))},currentTarget:h}]})}}for(var mm=0;mm<Qd.length;mm++){var _m=Qd[mm],YT=_m.toLowerCase(),qT=_m[0].toUpperCase()+_m.slice(1);Za(YT,"on"+qT)}Za(gv,"onAnimationEnd"),Za(vv,"onAnimationIteration"),Za(xv,"onAnimationStart"),Za("dblclick","onDoubleClick"),Za("focusin","onFocus"),Za("focusout","onBlur"),Za(cT,"onTransitionRun"),Za(uT,"onTransitionStart"),Za(fT,"onTransitionCancel"),Za(yv,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jc));function Gy(t,a){a=(a&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],h=c.event;c=c.listeners;e:{var m=void 0;if(a)for(var E=c.length-1;0<=E;E--){var L=c[E],W=L.instance,ue=L.currentTarget;if(L=L.listener,W!==m&&h.isPropagationStopped())break e;m=L,h.currentTarget=ue;try{m(h)}catch(ye){of(ye)}h.currentTarget=null,m=W}else for(E=0;E<c.length;E++){if(L=c[E],W=L.instance,ue=L.currentTarget,L=L.listener,W!==m&&h.isPropagationStopped())break e;m=L,h.currentTarget=ue;try{m(h)}catch(ye){of(ye)}h.currentTarget=null,m=W}}}}function Ot(t,a){var s=a[Qn];s===void 0&&(s=a[Qn]=new Set);var c=t+"__bubble";s.has(c)||(Vy(a,t,2,!1),s.add(c))}function gm(t,a,s){var c=0;a&&(c|=4),Vy(s,t,c,a)}var qf="_reactListening"+Math.random().toString(36).slice(2);function vm(t){if(!t[qf]){t[qf]=!0,Di.forEach(function(s){s!=="selectionchange"&&(ZT.has(s)||gm(s,!1,t),gm(s,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[qf]||(a[qf]=!0,gm("selectionchange",!1,a))}}function Vy(t,a,s,c){switch(gS(a)){case 2:var h=MA;break;case 8:h=bA;break;default:h=Lm}s=h.bind(null,a,s,t),h=void 0,!Fd||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?t.addEventListener(a,s,{capture:!0,passive:h}):t.addEventListener(a,s,!0):h!==void 0?t.addEventListener(a,s,{passive:h}):t.addEventListener(a,s,!1)}function xm(t,a,s,c,h){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var L=c.stateNode.containerInfo;if(L===h)break;if(E===4)for(E=c.return;E!==null;){var W=E.tag;if((W===3||W===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;L!==null;){if(E=bn(L),E===null)return;if(W=E.tag,W===5||W===6||W===26||W===27){c=m=E;continue e}L=L.parentNode}}c=c.return}q0(function(){var ue=m,ye=Id(s),Te=[];e:{var he=Sv.get(t);if(he!==void 0){var _e=af,Je=t;switch(t){case"keypress":if(tf(s)===0)break e;case"keydown":case"keyup":_e=GE;break;case"focusin":Je="focus",_e=Vd;break;case"focusout":Je="blur",_e=Vd;break;case"beforeblur":case"afterblur":_e=Vd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=K0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=wE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=XE;break;case gv:case vv:case xv:_e=UE;break;case yv:_e=YE;break;case"scroll":case"scrollend":_e=RE;break;case"wheel":_e=ZE;break;case"copy":case"cut":case"paste":_e=OE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=J0;break;case"toggle":case"beforetoggle":_e=KE}var ft=(a&4)!==0,mn=!ft&&(t==="scroll"||t==="scrollend"),ee=ft?he!==null?he+"Capture":null:he;ft=[];for(var q=ue,oe;q!==null;){var Me=q;if(oe=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||oe===null||ee===null||(Me=gc(q,ee),Me!=null&&ft.push(Kc(q,Me,oe))),mn)break;q=q.return}0<ft.length&&(he=new _e(he,Je,null,s,ye),Te.push({event:he,listeners:ft}))}}if((a&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",he&&s!==Pd&&(Je=s.relatedTarget||s.fromElement)&&(bn(Je)||Je[St]))break e;if((_e||he)&&(he=ye.window===ye?ye:(he=ye.ownerDocument)?he.defaultView||he.parentWindow:window,_e?(Je=s.relatedTarget||s.toElement,_e=ue,Je=Je?bn(Je):null,Je!==null&&(mn=l(Je),ft=Je.tag,Je!==mn||ft!==5&&ft!==27&&ft!==6)&&(Je=null)):(_e=null,Je=ue),_e!==Je)){if(ft=K0,Me="onMouseLeave",ee="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ft=J0,Me="onPointerLeave",ee="onPointerEnter",q="pointer"),mn=_e==null?he:Ea(_e),oe=Je==null?he:Ea(Je),he=new ft(Me,q+"leave",_e,s,ye),he.target=mn,he.relatedTarget=oe,Me=null,bn(ye)===ue&&(ft=new ft(ee,q+"enter",Je,s,ye),ft.target=oe,ft.relatedTarget=mn,Me=ft),mn=Me,_e&&Je)t:{for(ft=jT,ee=_e,q=Je,oe=0,Me=ee;Me;Me=ft(Me))oe++;Me=0;for(var ct=q;ct;ct=ft(ct))Me++;for(;0<oe-Me;)ee=ft(ee),oe--;for(;0<Me-oe;)q=ft(q),Me--;for(;oe--;){if(ee===q||q!==null&&ee===q.alternate){ft=ee;break t}ee=ft(ee),q=ft(q)}ft=null}else ft=null;_e!==null&&ky(Te,he,_e,ft,!1),Je!==null&&mn!==null&&ky(Te,mn,Je,ft,!0)}}e:{if(he=ue?Ea(ue):window,_e=he.nodeName&&he.nodeName.toLowerCase(),_e==="select"||_e==="input"&&he.type==="file")var jt=sv;else if(av(he))if(ov)jt=sT;else{jt=aT;var tt=iT}else _e=he.nodeName,!_e||_e.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?ue&&tn(ue.elementType)&&(jt=sv):jt=rT;if(jt&&(jt=jt(t,ue))){rv(Te,jt,s,ye);break e}tt&&tt(t,he,ue),t==="focusout"&&ue&&he.type==="number"&&ue.memoizedProps.value!=null&&Ut(he,"number",he.value)}switch(tt=ue?Ea(ue):window,t){case"focusin":(av(tt)||tt.contentEditable==="true")&&(Jo=tt,Zd=ue,Tc=null);break;case"focusout":Tc=Zd=Jo=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,mv(Te,s,ye);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":mv(Te,s,ye)}var At;if(Xd)e:{switch(t){case"compositionstart":var Bt="onCompositionStart";break e;case"compositionend":Bt="onCompositionEnd";break e;case"compositionupdate":Bt="onCompositionUpdate";break e}Bt=void 0}else Qo?nv(t,s)&&(Bt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Bt="onCompositionStart");Bt&&($0&&s.locale!=="ko"&&(Qo||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&Qo&&(At=Z0()):(os=ye,Bd="value"in os?os.value:os.textContent,Qo=!0)),tt=Zf(ue,Bt),0<tt.length&&(Bt=new Q0(Bt,t,null,s,ye),Te.push({event:Bt,listeners:tt}),At?Bt.data=At:(At=iv(s),At!==null&&(Bt.data=At)))),(At=JE?$E(t,s):eT(t,s))&&(Bt=Zf(ue,"onBeforeInput"),0<Bt.length&&(tt=new Q0("onBeforeInput","beforeinput",null,s,ye),Te.push({event:tt,listeners:Bt}),tt.data=At)),WT(Te,t,ue,s,ye)}Gy(Te,a)})}function Kc(t,a,s){return{instance:t,listener:a,currentTarget:s}}function Zf(t,a){for(var s=a+"Capture",c=[];t!==null;){var h=t,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=gc(t,s),h!=null&&c.unshift(Kc(t,h,m)),h=gc(t,a),h!=null&&c.push(Kc(t,h,m))),t.tag===3)return c;t=t.return}return[]}function jT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ky(t,a,s,c,h){for(var m=a._reactName,E=[];s!==null&&s!==c;){var L=s,W=L.alternate,ue=L.stateNode;if(L=L.tag,W!==null&&W===c)break;L!==5&&L!==26&&L!==27||ue===null||(W=ue,h?(ue=gc(s,m),ue!=null&&E.unshift(Kc(s,ue,W))):h||(ue=gc(s,m),ue!=null&&E.push(Kc(s,ue,W)))),s=s.return}E.length!==0&&t.push({event:a,listeners:E})}var KT=/\r\n?/g,QT=/\u0000|\uFFFD/g;function Xy(t){return(typeof t=="string"?t:""+t).replace(KT,`
`).replace(QT,"")}function Wy(t,a){return a=Xy(a),Xy(t)===a}function pn(t,a,s,c,h,m){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||ia(t,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&ia(t,""+c);break;case"className":Qe(t,"class",c);break;case"tabIndex":Qe(t,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Qe(t,s,c);break;case"style":qa(t,c,m);break;case"data":if(a!=="object"){Qe(t,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){t.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=eo(""+c),t.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&pn(t,a,"name",h.name,h,null),pn(t,a,"formEncType",h.formEncType,h,null),pn(t,a,"formMethod",h.formMethod,h,null),pn(t,a,"formTarget",h.formTarget,h,null)):(pn(t,a,"encType",h.encType,h,null),pn(t,a,"method",h.method,h,null),pn(t,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=eo(""+c),t.setAttribute(s,c);break;case"onClick":c!=null&&(t.onclick=Tr);break;case"onScroll":c!=null&&Ot("scroll",t);break;case"onScrollEnd":c!=null&&Ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));t.innerHTML=s}}break;case"multiple":t.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":t.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){t.removeAttribute("xlink:href");break}s=eo(""+c),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""+c):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":c===!0?t.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,c):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?t.setAttribute(s,c):t.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?t.removeAttribute(s):t.setAttribute(s,c);break;case"popover":Ot("beforetoggle",t),Ot("toggle",t),Ve(t,"popover",c);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ve(t,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ir.get(s)||s,Ve(t,s,c))}}function ym(t,a,s,c,h,m){switch(s){case"style":qa(t,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));t.innerHTML=s}}break;case"children":typeof c=="string"?ia(t,c):(typeof c=="number"||typeof c=="bigint")&&ia(t,""+c);break;case"onScroll":c!=null&&Ot("scroll",t);break;case"onScrollEnd":c!=null&&Ot("scrollend",t);break;case"onClick":c!=null&&(t.onclick=Tr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),m=t[yt]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(a,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(a,c,h);break e}s in t?t[s]=c:c===!0?t.setAttribute(s,""):Ve(t,s,c)}}}function mi(t,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",t),Ot("load",t);var c=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:pn(t,a,m,E,s,null)}}h&&pn(t,a,"srcSet",s.srcSet,s,null),c&&pn(t,a,"src",s.src,s,null);return;case"input":Ot("invalid",t);var L=m=E=h=null,W=null,ue=null;for(c in s)if(s.hasOwnProperty(c)){var ye=s[c];if(ye!=null)switch(c){case"name":h=ye;break;case"type":E=ye;break;case"checked":W=ye;break;case"defaultChecked":ue=ye;break;case"value":m=ye;break;case"defaultValue":L=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(i(137,a));break;default:pn(t,a,c,ye,s,null)}}xi(t,m,L,W,ue,E,h,!1);return;case"select":Ot("invalid",t),c=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(L=s[h],L!=null))switch(h){case"value":m=L;break;case"defaultValue":E=L;break;case"multiple":c=L;default:pn(t,a,h,L,s,null)}a=m,s=E,t.multiple=!!c,a!=null?Jn(t,!!c,a,!1):s!=null&&Jn(t,!!c,s,!0);return;case"textarea":Ot("invalid",t),m=h=c=null;for(E in s)if(s.hasOwnProperty(E)&&(L=s[E],L!=null))switch(E){case"value":c=L;break;case"defaultValue":h=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(i(91));break;default:pn(t,a,E,L,s,null)}Ya(t,c,h,m);return;case"option":for(W in s)if(s.hasOwnProperty(W)&&(c=s[W],c!=null))switch(W){case"selected":t.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:pn(t,a,W,c,s,null)}return;case"dialog":Ot("beforetoggle",t),Ot("toggle",t),Ot("cancel",t),Ot("close",t);break;case"iframe":case"object":Ot("load",t);break;case"video":case"audio":for(c=0;c<jc.length;c++)Ot(jc[c],t);break;case"image":Ot("error",t),Ot("load",t);break;case"details":Ot("toggle",t);break;case"embed":case"source":case"link":Ot("error",t),Ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in s)if(s.hasOwnProperty(ue)&&(c=s[ue],c!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:pn(t,a,ue,c,s,null)}return;default:if(tn(a)){for(ye in s)s.hasOwnProperty(ye)&&(c=s[ye],c!==void 0&&ym(t,a,ye,c,s,void 0));return}}for(L in s)s.hasOwnProperty(L)&&(c=s[L],c!=null&&pn(t,a,L,c,s,null))}function JT(t,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,L=null,W=null,ue=null,ye=null;for(_e in s){var Te=s[_e];if(s.hasOwnProperty(_e)&&Te!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":W=Te;default:c.hasOwnProperty(_e)||pn(t,a,_e,null,c,Te)}}for(var he in c){var _e=c[he];if(Te=s[he],c.hasOwnProperty(he)&&(_e!=null||Te!=null))switch(he){case"type":m=_e;break;case"name":h=_e;break;case"checked":ue=_e;break;case"defaultChecked":ye=_e;break;case"value":E=_e;break;case"defaultValue":L=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(i(137,a));break;default:_e!==Te&&pn(t,a,he,_e,c,Te)}}Ze(t,E,L,W,ue,ye,m,h);return;case"select":_e=E=L=he=null;for(m in s)if(W=s[m],s.hasOwnProperty(m)&&W!=null)switch(m){case"value":break;case"multiple":_e=W;default:c.hasOwnProperty(m)||pn(t,a,m,null,c,W)}for(h in c)if(m=c[h],W=s[h],c.hasOwnProperty(h)&&(m!=null||W!=null))switch(h){case"value":he=m;break;case"defaultValue":L=m;break;case"multiple":E=m;default:m!==W&&pn(t,a,h,m,c,W)}a=L,s=E,c=_e,he!=null?Jn(t,!!s,he,!1):!!c!=!!s&&(a!=null?Jn(t,!!s,a,!0):Jn(t,!!s,s?[]:"",!1));return;case"textarea":_e=he=null;for(L in s)if(h=s[L],s.hasOwnProperty(L)&&h!=null&&!c.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:pn(t,a,L,null,c,h)}for(E in c)if(h=c[E],m=s[E],c.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":he=h;break;case"defaultValue":_e=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==m&&pn(t,a,E,h,c,m)}na(t,he,_e);return;case"option":for(var Je in s)if(he=s[Je],s.hasOwnProperty(Je)&&he!=null&&!c.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:pn(t,a,Je,null,c,he)}for(W in c)if(he=c[W],_e=s[W],c.hasOwnProperty(W)&&he!==_e&&(he!=null||_e!=null))switch(W){case"selected":t.selected=he&&typeof he!="function"&&typeof he!="symbol";break;default:pn(t,a,W,he,c,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in s)he=s[ft],s.hasOwnProperty(ft)&&he!=null&&!c.hasOwnProperty(ft)&&pn(t,a,ft,null,c,he);for(ue in c)if(he=c[ue],_e=s[ue],c.hasOwnProperty(ue)&&he!==_e&&(he!=null||_e!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(i(137,a));break;default:pn(t,a,ue,he,c,_e)}return;default:if(tn(a)){for(var mn in s)he=s[mn],s.hasOwnProperty(mn)&&he!==void 0&&!c.hasOwnProperty(mn)&&ym(t,a,mn,void 0,c,he);for(ye in c)he=c[ye],_e=s[ye],!c.hasOwnProperty(ye)||he===_e||he===void 0&&_e===void 0||ym(t,a,ye,he,c,_e);return}}for(var ee in s)he=s[ee],s.hasOwnProperty(ee)&&he!=null&&!c.hasOwnProperty(ee)&&pn(t,a,ee,null,c,he);for(Te in c)he=c[Te],_e=s[Te],!c.hasOwnProperty(Te)||he===_e||he==null&&_e==null||pn(t,a,Te,he,c,_e)}function Yy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $T(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,s=performance.getEntriesByType("resource"),c=0;c<s.length;c++){var h=s[c],m=h.transferSize,E=h.initiatorType,L=h.duration;if(m&&L&&Yy(E)){for(E=0,L=h.responseEnd,c+=1;c<s.length;c++){var W=s[c],ue=W.startTime;if(ue>L)break;var ye=W.transferSize,Te=W.initiatorType;ye&&Yy(Te)&&(W=W.responseEnd,E+=ye*(W<L?1:(L-ue)/(W-ue)))}if(--c,a+=8*(m+E)/(h.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Sm=null,Mm=null;function jf(t){return t.nodeType===9?t:t.ownerDocument}function qy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zy(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function bm(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Em=null;function eA(){var t=window.event;return t&&t.type==="popstate"?t===Em?!1:(Em=t,!0):(Em=null,!1)}var jy=typeof setTimeout=="function"?setTimeout:void 0,tA=typeof clearTimeout=="function"?clearTimeout:void 0,Ky=typeof Promise=="function"?Promise:void 0,nA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ky<"u"?function(t){return Ky.resolve(null).then(t).catch(iA)}:jy;function iA(t){setTimeout(function(){throw t})}function Es(t){return t==="head"}function Qy(t,a){var s=a,c=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(c===0){t.removeChild(h),Tl(a);return}c--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")c++;else if(s==="html")Qc(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Qc(s);for(var m=s.firstChild;m;){var E=m.nextSibling,L=m.nodeName;m[Sn]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&Qc(t.ownerDocument.body);s=h}while(s);Tl(a)}function Jy(t,a){var s=t;t=0;do{var c=s.nextSibling;if(s.nodeType===1?a?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(a?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=c}while(s)}function Tm(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Tm(s),Mn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function aA(t,a,s,c){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(c){if(!t[Sn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Na(t.nextSibling),t===null)break}return null}function rA(t,a,s){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Na(t.nextSibling),t===null))return null;return t}function $y(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Na(t.nextSibling),t===null))return null;return t}function Am(t){return t.data==="$?"||t.data==="$~"}function Rm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sA(t,a){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||s.readyState!=="loading")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),t._reactRetry=c}}function Na(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var Cm=null;function eS(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(a===0)return Na(t.nextSibling);a--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||a++}t=t.nextSibling}return null}function tS(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(a===0)return t;a--}else s!=="/$"&&s!=="/&"||a++}t=t.previousSibling}return null}function nS(t,a,s){switch(a=jf(s),t){case"html":if(t=a.documentElement,!t)throw Error(i(452));return t;case"head":if(t=a.head,!t)throw Error(i(453));return t;case"body":if(t=a.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}function Qc(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Mn(t)}var Ua=new Map,iS=new Set;function Kf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gr=V.d;V.d={f:oA,r:lA,D:cA,C:uA,L:fA,m:hA,X:pA,S:dA,M:mA};function oA(){var t=Gr.f(),a=Gf();return t||a}function lA(t){var a=fi(t);a!==null&&a.tag===5&&a.type==="form"?yx(a):Gr.r(t)}var Ml=typeof document>"u"?null:document;function aS(t,a,s){var c=Ml;if(c&&typeof a=="string"&&a){var h=rn(a);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),iS.has(h)||(iS.add(h),t={rel:t,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),mi(a,"link",t),Rt(a),c.head.appendChild(a)))}}function cA(t){Gr.D(t),aS("dns-prefetch",t,null)}function uA(t,a){Gr.C(t,a),aS("preconnect",t,a)}function fA(t,a,s){Gr.L(t,a,s);var c=Ml;if(c&&t&&a){var h='link[rel="preload"][as="'+rn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+rn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+rn(s.imageSizes)+'"]')):h+='[href="'+rn(t)+'"]';var m=h;switch(a){case"style":m=bl(t);break;case"script":m=El(t)}Ua.has(m)||(t=x({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:t,as:a},s),Ua.set(m,t),c.querySelector(h)!==null||a==="style"&&c.querySelector(Jc(m))||a==="script"&&c.querySelector($c(m))||(a=c.createElement("link"),mi(a,"link",t),Rt(a),c.head.appendChild(a)))}}function hA(t,a){Gr.m(t,a);var s=Ml;if(s&&t){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+rn(c)+'"][href="'+rn(t)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=El(t)}if(!Ua.has(m)&&(t=x({rel:"modulepreload",href:t},a),Ua.set(m,t),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector($c(m)))return}c=s.createElement("link"),mi(c,"link",t),Rt(c),s.head.appendChild(c)}}}function dA(t,a,s){Gr.S(t,a,s);var c=Ml;if(c&&t){var h=En(c).hoistableStyles,m=bl(t);a=a||"default";var E=h.get(m);if(!E){var L={loading:0,preload:null};if(E=c.querySelector(Jc(m)))L.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":a},s),(s=Ua.get(m))&&wm(t,s);var W=E=c.createElement("link");Rt(W),mi(W,"link",t),W._p=new Promise(function(ue,ye){W.onload=ue,W.onerror=ye}),W.addEventListener("load",function(){L.loading|=1}),W.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Qf(E,a,c)}E={type:"stylesheet",instance:E,count:1,state:L},h.set(m,E)}}}function pA(t,a){Gr.X(t,a);var s=Ml;if(s&&t){var c=En(s).hoistableScripts,h=El(t),m=c.get(h);m||(m=s.querySelector($c(h)),m||(t=x({src:t,async:!0},a),(a=Ua.get(h))&&Dm(t,a),m=s.createElement("script"),Rt(m),mi(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function mA(t,a){Gr.M(t,a);var s=Ml;if(s&&t){var c=En(s).hoistableScripts,h=El(t),m=c.get(h);m||(m=s.querySelector($c(h)),m||(t=x({src:t,async:!0,type:"module"},a),(a=Ua.get(h))&&Dm(t,a),m=s.createElement("script"),Rt(m),mi(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function rS(t,a,s,c){var h=(h=te.current)?Kf(h):null;if(!h)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=bl(s.href),s=En(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=bl(s.href);var m=En(h).hoistableStyles,E=m.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=h.querySelector(Jc(t)))&&!m._p&&(E.instance=m,E.state.loading=5),Ua.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ua.set(t,s),m||_A(h,t,s,E.state))),a&&c===null)throw Error(i(528,""));return E}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=El(s),s=En(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function bl(t){return'href="'+rn(t)+'"'}function Jc(t){return'link[rel="stylesheet"]['+t+"]"}function sS(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function _A(t,a,s,c){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=t.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),mi(a,"link",s),Rt(a),t.head.appendChild(a))}function El(t){return'[src="'+rn(t)+'"]'}function $c(t){return"script[async]"+t}function oS(t,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=t.querySelector('style[data-href~="'+rn(s.href)+'"]');if(c)return a.instance=c,Rt(c),c;var h=x({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(t.ownerDocument||t).createElement("style"),Rt(c),mi(c,"style",h),Qf(c,s.precedence,t),a.instance=c;case"stylesheet":h=bl(s.href);var m=t.querySelector(Jc(h));if(m)return a.state.loading|=4,a.instance=m,Rt(m),m;c=sS(s),(h=Ua.get(h))&&wm(c,h),m=(t.ownerDocument||t).createElement("link"),Rt(m);var E=m;return E._p=new Promise(function(L,W){E.onload=L,E.onerror=W}),mi(m,"link",c),a.state.loading|=4,Qf(m,s.precedence,t),a.instance=m;case"script":return m=El(s.src),(h=t.querySelector($c(m)))?(a.instance=h,Rt(h),h):(c=s,(h=Ua.get(m))&&(c=x({},s),Dm(c,h)),t=t.ownerDocument||t,h=t.createElement("script"),Rt(h),mi(h,"link",c),t.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Qf(c,s.precedence,t));return a.instance}function Qf(t,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,E=0;E<c.length;E++){var L=c[E];if(L.dataset.precedence===a)m=L;else if(m!==h)break}m?m.parentNode.insertBefore(t,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(t,a.firstChild))}function wm(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Dm(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Jf=null;function lS(t,a,s){if(Jf===null){var c=new Map,h=Jf=new Map;h.set(s,c)}else h=Jf,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(t))return c;for(c.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var m=s[h];if(!(m[Sn]||m[xt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(a)||"";E=t+E;var L=c.get(E);L?L.push(m):c.set(E,[m])}}return c}function cS(t,a,s){t=t.ownerDocument||t,t.head.insertBefore(s,a==="title"?t.querySelector("head > title"):null)}function gA(t,a,s){if(s===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function uS(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vA(t,a,s,c){if(s.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=bl(c.href),m=a.querySelector(Jc(h));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=$f.bind(t),a.then(t,t)),s.state.loading|=4,s.instance=m,Rt(m);return}m=a.ownerDocument||a,c=sS(c),(h=Ua.get(h))&&wm(c,h),m=m.createElement("link"),Rt(m);var E=m;E._p=new Promise(function(L,W){E.onload=L,E.onerror=W}),mi(m,"link",c),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,a),(a=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=$f.bind(t),a.addEventListener("load",s),a.addEventListener("error",s))}}var Nm=0;function xA(t,a){return t.stylesheets&&t.count===0&&th(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var c=setTimeout(function(){if(t.stylesheets&&th(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+a);0<t.imgBytes&&Nm===0&&(Nm=62500*$T());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&th(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Nm?50:800)+a);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(c),clearTimeout(h)}}:null}function $f(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)th(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var eh=null;function th(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,eh=new Map,a.forEach(yA,t),eh=null,$f.call(t))}function yA(t,a){if(!(a.state.loading&4)){var s=eh.get(t);if(s)var c=s.get(null);else{s=new Map,eh.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),c=E)}c&&s.set(null,c)}h=a.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||c,m===c&&s.set(null,h),s.set(E,h),this.count++,c=$f.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),a.state.loading|=4}}var eu={$$typeof:P,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function SA(t,a,s,c,h,m,E,L,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function fS(t,a,s,c,h,m,E,L,W,ue,ye,Te){return t=new SA(t,a,s,E,W,ue,ye,Te,L),a=1,m===!0&&(a|=24),m=ra(3,null,null,a),t.current=m,m.stateNode=t,a=up(),a.refCount++,t.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:a},pp(m),t}function hS(t){return t?(t=tl,t):tl}function dS(t,a,s,c,h,m){h=hS(h),c.context===null?c.context=h:c.pendingContext=h,c=ds(a),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=ps(t,c,a),s!==null&&(Wi(s,t,a),Uc(s,t,a))}function pS(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<a?s:a}}function Um(t,a){pS(t,a),(t=t.alternate)&&pS(t,a)}function mS(t){if(t.tag===13||t.tag===31){var a=ao(t,67108864);a!==null&&Wi(a,t,67108864),Um(t,67108864)}}function _S(t){if(t.tag===13||t.tag===31){var a=ua();a=mt(a);var s=ao(t,a);s!==null&&Wi(s,t,a),Um(t,a)}}var nh=!0;function MA(t,a,s,c){var h=B.T;B.T=null;var m=V.p;try{V.p=2,Lm(t,a,s,c)}finally{V.p=m,B.T=h}}function bA(t,a,s,c){var h=B.T;B.T=null;var m=V.p;try{V.p=8,Lm(t,a,s,c)}finally{V.p=m,B.T=h}}function Lm(t,a,s,c){if(nh){var h=Om(c);if(h===null)xm(t,a,c,ih,s),vS(t,c);else if(TA(h,t,a,s,c))c.stopPropagation();else if(vS(t,c),a&4&&-1<EA.indexOf(t)){for(;h!==null;){var m=fi(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ne(m.pendingLanes);if(E!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;E;){var W=1<<31-ke(E);L.entanglements[1]|=W,E&=~W}or(m),(Jt&6)===0&&(Bf=zt()+500,Zc(0))}}break;case 31:case 13:L=ao(m,2),L!==null&&Wi(L,m,2),Gf(),Um(m,2)}if(m=Om(c),m===null&&xm(t,a,c,ih,s),m===h)break;h=m}h!==null&&c.stopPropagation()}else xm(t,a,c,null,s)}}function Om(t){return t=Id(t),Pm(t)}var ih=null;function Pm(t){if(ih=null,t=bn(t),t!==null){var a=l(t);if(a===null)t=null;else{var s=a.tag;if(s===13){if(t=u(a),t!==null)return t;t=null}else if(s===31){if(t=f(a),t!==null)return t;t=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return ih=t,null}function gS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case F:return 2;case A:return 8;case $:case ae:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Im=!1,Ts=null,As=null,Rs=null,tu=new Map,nu=new Map,Cs=[],EA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vS(t,a){switch(t){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":tu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":nu.delete(a.pointerId)}}function iu(t,a,s,c,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},a!==null&&(a=fi(a),a!==null&&mS(a)),t):(t.eventSystemFlags|=c,a=t.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),t)}function TA(t,a,s,c,h){switch(a){case"focusin":return Ts=iu(Ts,t,a,s,c,h),!0;case"dragenter":return As=iu(As,t,a,s,c,h),!0;case"mouseover":return Rs=iu(Rs,t,a,s,c,h),!0;case"pointerover":var m=h.pointerId;return tu.set(m,iu(tu.get(m)||null,t,a,s,c,h)),!0;case"gotpointercapture":return m=h.pointerId,nu.set(m,iu(nu.get(m)||null,t,a,s,c,h)),!0}return!1}function xS(t){var a=bn(t.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){t.blockedOn=a,fn(t.priority,function(){_S(s)});return}}else if(a===31){if(a=f(s),a!==null){t.blockedOn=a,fn(t.priority,function(){_S(s)});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ah(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var s=Om(t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);Pd=c,s.target.dispatchEvent(c),Pd=null}else return a=fi(s),a!==null&&mS(a),t.blockedOn=s,!1;a.shift()}return!0}function yS(t,a,s){ah(t)&&s.delete(a)}function AA(){Im=!1,Ts!==null&&ah(Ts)&&(Ts=null),As!==null&&ah(As)&&(As=null),Rs!==null&&ah(Rs)&&(Rs=null),tu.forEach(yS),nu.forEach(yS)}function rh(t,a){t.blockedOn===a&&(t.blockedOn=null,Im||(Im=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,AA)))}var sh=null;function SS(t){sh!==t&&(sh=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sh===t&&(sh=null);for(var a=0;a<t.length;a+=3){var s=t[a],c=t[a+1],h=t[a+2];if(typeof c!="function"){if(Pm(c||s)===null)continue;break}var m=fi(s);m!==null&&(t.splice(a,3),a-=3,Op(m,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function Tl(t){function a(W){return rh(W,t)}Ts!==null&&rh(Ts,t),As!==null&&rh(As,t),Rs!==null&&rh(Rs,t),tu.forEach(a),nu.forEach(a);for(var s=0;s<Cs.length;s++){var c=Cs[s];c.blockedOn===t&&(c.blockedOn=null)}for(;0<Cs.length&&(s=Cs[0],s.blockedOn===null);)xS(s),s.blockedOn===null&&Cs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],m=s[c+1],E=h[yt]||null;if(typeof m=="function")E||SS(s);else if(E){var L=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[yt]||null)L=E.formAction;else if(Pm(h)!==null)continue}else L=E.action;typeof L=="function"?s[c+1]=L:(s.splice(c,3),c-=3),SS(s)}}}function MS(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function a(){h!==null&&(h(),h=null),c||setTimeout(s,20)}function s(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(s,100),function(){c=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),h!==null&&(h(),h=null)}}}function zm(t){this._internalRoot=t}oh.prototype.render=zm.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(i(409));var s=a.current,c=ua();dS(s,c,t,a,null,null)},oh.prototype.unmount=zm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;dS(t.current,2,null,t,null,null),Gf(),a[St]=null}};function oh(t){this._internalRoot=t}oh.prototype.unstable_scheduleHydration=function(t){if(t){var a=Tt();t={blockedOn:null,target:t,priority:a};for(var s=0;s<Cs.length&&a!==0&&a<Cs[s].priority;s++);Cs.splice(s,0,t),s===0&&xS(t)}};var bS=e.version;if(bS!=="19.2.7")throw Error(i(527,bS,"19.2.7"));V.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=d(a),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var RA={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lh.isDisabled&&lh.supportsFiber)try{ge=lh.inject(RA),me=lh}catch{}}return ru.createRoot=function(t,a){if(!r(t))throw Error(i(299));var s=!1,c="",h=Dx,m=Nx,E=Ux;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),a=fS(t,1,!1,null,null,s,c,null,h,m,E,MS),t[St]=a.current,vm(t),new zm(a)},ru.hydrateRoot=function(t,a,s){if(!r(t))throw Error(i(299));var c=!1,h="",m=Dx,E=Nx,L=Ux,W=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(L=s.onRecoverableError),s.formState!==void 0&&(W=s.formState)),a=fS(t,1,!0,a,s??null,c,h,W,m,E,L,MS),a.context=hS(null),s=a.current,c=ua(),c=mt(c),h=ds(c),h.callback=null,ps(s,h,c),s=c,a.current.lanes=s,Ee(a,s),or(a),t[St]=a.current,vm(t),new oh(a)},ru.version="19.2.7",ru}var LS;function BA(){if(LS)return Hm.exports;LS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Hm.exports=FA(),Hm.exports}var HA=BA();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y1=(...o)=>o.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=Qt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:l,iconNode:u,...f},p)=>Qt.createElement("svg",{ref:p,...VA,width:e,height:e,stroke:o,strokeWidth:i?Number(n)*24/Number(e):n,className:y1("lucide",r),...f},[...u.map(([d,_])=>Qt.createElement(d,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=(o,e)=>{const n=Qt.forwardRef(({className:i,...r},l)=>Qt.createElement(kA,{ref:l,iconNode:e,className:y1(`lucide-${GA(o)}`,i),...r}));return n.displayName=`${o}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=wi("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=wi("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=wi("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=wi("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=wi("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=wi("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=wi("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=wi("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=wi("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=wi("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=wi("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=wi("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=wi("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=wi("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=wi("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=wi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),$A={name:"Panduga Maheswar Reddy",shortName:"PMR",role:"AI/GenAI Engineer",location:"Trivandrum, India",email:"panduga.maheswarreddy12@gmail.com",phone:"+91 83748 49909",image:"/assets/profile-cutout-ai.png",originalImage:"/assets/profile-original.jpeg",summary:"AI/GenAI Engineer specialized in building production-grade intelligence systems, fine-tuned LLMs, robust RAG pipelines, and scalable full-stack enterprise applications.",availability:"Available for AI/ML roles and GenAI engagements"},eR=[{value:"95.23%",label:"complaint classification accuracy"},{value:"4x",label:"faster CUDA training speed"},{value:"400+",label:"coding problems solved"},{value:"4+",label:"shipped AI/ML projects"}],tR=[{category:"Civic AI / LLM Classification",title:"Next-Gen Governance",description:"Complaint management platform for urban and rural governance. Fine-tuned LLaMA 3.1, custom LLM flows, and BERT classifiers to prioritize citizen issues with 95.23% classification accuracy. Leveraged CUDA GPUs for 4x faster training and built React-based real-time tracking interface.",metrics:["95.23% accuracy","4x CUDA speed"],tech:["LLaMA 3.1","BERT","Python","React","CUDA","JS"]},{category:"Speech AI / Real-time NLP",title:"Multi-Lingual Audio Translation",description:"Real-time ASR to NLU to translation pipeline across 15+ languages and dialects with Dockerized FastAPI microservices, health check metrics, speech recognition, and Streamlit-based interactive demo.",metrics:["82.63 BLEU","<1.5s latency"],tech:["LLaMA 3.1","FastAPI","Streamlit","Docker","Python","NLP"]},{category:"Knowledge Graph / Disaster Response",title:"Flood Emergency Knowledge Graph",description:"Ontology-driven emergency knowledge graph that turns unstructured reports, news, and social content into queryable Neo4j intelligence using LoRA-assisted extraction and custom Q&A pipelines.",metrics:["Neo4j engine","LoRA extraction"],tech:["Neo4j","Python","LLMs","LoRA","NLP"]},{category:"Full Stack / Role-based Workflows",title:"Campus-Concern",description:"Complaint workflow platform with Admin, Technician, Verifier, and User roles. Developed secure APIs, MongoDB data modeling, authentication, and responsive React + Vite frontend, reducing response latency by 30%.",metrics:["30% lower latency","4 role tiers"],tech:["React","Node.js","Express.js","MongoDB","Vite","Axios"]},{category:"Full Stack / API Operations",title:"Splitr",description:"Expense splitting platform enabling group creation, balance calculation, secure authentication, event-driven workflows, and database operations using Convex queries and Next.js.",metrics:["Convex DB","Event-driven"],tech:["React","Next.js","Convex","Clerk","Inngest","CSS"]},{category:"Data Science / Regression",title:"Food Delivery Time Prediction",description:"XGBoost regression model with feature engineering to predict food delivery times. Built a Streamlit app for real-time ETA predictions and model evaluation.",metrics:["0.82 R2 score","Streamlit ETA"],tech:["XGBoost","Python","Streamlit","Scikit-learn","Pandas"]},{category:"Data Science / Regression",title:"Restaurant Ratings Analysis",description:"Exploratory data analysis and feature engineering on restaurant datasets to uncover dining trends and preferences. Built Random Forest and XGBoost predictive models and Power BI dashboard.",metrics:["Random Forest","XGBoost","Power BI"],tech:["Python","Pandas","Scikit-learn","Matplotlib","Seaborn","Power BI","SQL"]},{category:"Analytics / Business Intelligence",title:"Workforce Analytics",description:"Power BI dashboard suite surfacing employee attrition patterns across demographics, roles, and departments to derive actionable HR strategies.",metrics:["16.2% attrition insights"],tech:["Power BI","DAX","Excel","Power Query"]},{category:"Full Stack / Microservices",title:"Retail Management Platform",description:"Deployed inventory and billing management system with Docker, JUnit, Selenium, and CI/CD pipelines, improving operational efficiency by 35%.",metrics:["35% efficiency","90%+ code coverage"],tech:["React","Node.js","MongoDB","Docker","JUnit","Selenium","CI/CD"]}],nR=[["Languages",["Python","SQL","Java","C","C++","R","JavaScript","HTML/CSS","Tailwind CSS","Bootstrap"]],["LLM & GenAI",["Generative AI","LLaMA 3.1","BERT","Text Classification","Sentiment Analysis","RAG","Agentic AI","LangChain","Prompt Engineering","LoRA","Vertex AI","Gemini"]],["AI / ML Frameworks",["PyTorch","TensorFlow","Scikit-learn","Transformers","OpenCV","CUDA","NLP"]],["Backend & Databases",["FastAPI","Flask","Node.js","Express.js","REST APIs","Microservices","Spring Boot","Convex","MongoDB","MySQL","Neo4j","Redis","NoSQL","Firestore"]],["Testing & QA",["Selenium","JUnit","Postman","Usability Testing"]],["Cloud & DevOps",["GCP","AWS","Azure","Docker","Kubernetes","Linux","Git","GitHub Actions","WebSockets","JIRA","Trello","Notion"]]],iR=[{period:"March 2026 - Present / Trivandrum",title:"Junior Software Engineer - AI",org:"Klystron Global",bullets:["Developed and maintained enterprise-grade AI/GenAI solutions for OCR, intelligent document processing, and automated data extraction using Gemini models, Vertex AI, FastAPI, Flask, and GCP services.","Built and optimized multi-tenant AI backoffice workflows integrating OCR pipelines, LLM-based extraction, validation, and analytics, improving processing efficiency and reducing manual verification effort.","Worked on production deployment and cloud infrastructure using Docker, Cloud Run, Artifact Registry, Firestore, Redis, and CI/CD pipelines, while implementing secure API management, monitoring, and scalable backend architectures on GCP."]},{period:"November 2022 - May 2026 / Kottayam",title:"B.Tech, Computer Science & Engineering",org:"Indian Institute of Information Technology Kottayam",bullets:["Qualified for Smart India Hackathon at college level while leading a technical team.","Completed professional certification in Data Science and Machine Learning.","Solved 400+ coding problems across platforms including LeetCode."]}];function qr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function M1(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sa={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zu={duration:.5,overwrite:!1,delay:0},n0,vi,Nn,Ha=1e8,yn=1/Ha,F_=Math.PI*2,aR=F_/4,rR=0,b1=Math.sqrt,sR=Math.cos,oR=Math.sin,ui=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},ns=function(e){return typeof e=="number"},i0=function(e){return typeof e>"u"},Sr=function(e){return typeof e=="object"},ji=function(e){return e!==!1},a0=function(){return typeof window<"u"},ch=function(e){return Fn(e)||ui(e)},E1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ci=Array.isArray,lR=/random\([^)]+\)/g,cR=/,\s*/g,FS=/(?:-?\.?\d|\.)+/gi,T1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wm=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,A1=/[+-]=-?[.\d]+/,uR=/[^,'"\[\]\s]+/gi,fR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ln,ur,B_,r0,Ma={},ld={},R1,C1=function(e){return(ld=rc(e,Ma))&&ta},s0=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Fu=function(e,n){return!n&&console.warn(e)},w1=function(e,n){return e&&(Ma[e]=n)&&ld&&(ld[e]=n)||Ma},Bu=function(){return 0},hR={suppressEvents:!0,isStart:!0,kill:!1},qh={suppressEvents:!0,kill:!1},dR={suppressEvents:!0},o0={},Ws=[],H_={},D1,ma={},Ym={},BS=30,Zh=[],l0="",c0=function(e){var n=e[0],i,r;if(Sr(n)||Fn(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Zh.length;r--&&!Zh[r].targetTest(n););i=Zh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new J1(e[r],i)))||e.splice(r,1);return e},Oo=function(e){return e._gsap||c0(Ga(e))[0]._gsap},N1=function(e,n,i){return(i=e[n])&&Fn(i)?e[n]():i0(i)&&e.getAttribute&&e.getAttribute(n)||i},Ki=function(e,n){return(e=e.split(",")).forEach(n)||e},Gn=function(e){return Math.round(e*1e5)/1e5||0},Un=function(e){return Math.round(e*1e7)/1e7||0},jl=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},pR=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},cd=function(){var e=Ws.length,n=Ws.slice(0),i,r;for(H_={},Ws.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},u0=function(e){return!!(e._initted||e._startAt||e.add)},U1=function(e,n,i,r){Ws.length&&!vi&&cd(),e.render(n,i,!!(vi&&n<0&&u0(e))),Ws.length&&!vi&&cd()},L1=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(uR).length<2?n:ui(e)?e.trim():e},O1=function(e){return e},ba=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},mR=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},rc=function(e,n){for(var i in n)e[i]=n[i];return e},HS=function o(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Sr(n[i])?o(e[i]||(e[i]={}),n[i]):n[i]);return e},ud=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},Tu=function(e){var n=e.parent||Ln,i=e.keyframes?mR(Ci(e.keyframes)):ba;if(ji(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},_R=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},P1=function(e,n,i,r,l){var u=e[r],f;if(l)for(f=n[l];u&&u[l]>f;)u=u._prev;return u?(n._next=u._next,u._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=u,n.parent=n._dp=e,n},Ad=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var l=n._prev,u=n._next;l?l._next=u:e[i]===n&&(e[i]=u),u?u._prev=l:e[r]===n&&(e[r]=l),n._next=n._prev=n.parent=null},Zs=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Po=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},gR=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},G_=function(e,n,i,r){return e._startAt&&(vi?e._startAt.revert(qh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},vR=function o(e){return!e||e._ts&&o(e.parent)},GS=function(e){return e._repeat?sc(e._tTime,e=e.duration()+e._rDelay)*e:0},sc=function(e,n){var i=Math.floor(e=Un(e/n));return e&&i===e?i-1:i},fd=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Rd=function(e){return e._end=Un(e._start+(e._tDur/Math.abs(e._ts||e._rts||yn)||0))},Cd=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Un(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Rd(e),i._dirty||Po(i,e)),e},I1=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=fd(e.rawTime(),n),(!n._dur||ju(0,n.totalDuration(),i)-n._tTime>yn)&&n.render(i,!0)),Po(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-yn}},dr=function(e,n,i,r){return n.parent&&Zs(n),n._start=Un((ns(i)?i:i||e!==Ln?Oa(e,i,n):e._time)+n._delay),n._end=Un(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),P1(e,n,"_first","_last",e._sort?"_start":0),V_(n)||(e._recent=n),r||I1(e,n),e._ts<0&&Cd(e,e._tTime),e},z1=function(e,n){return(Ma.ScrollTrigger||s0("scrollTrigger",n))&&Ma.ScrollTrigger.create(n,e)},F1=function(e,n,i,r,l){if(h0(e,n,l),!e._initted)return 1;if(!i&&e._pt&&!vi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&D1!==ga.frame)return Ws.push(e),e._lazy=[l,r],1},xR=function o(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},V_=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},yR=function(e,n,i,r){var l=e.ratio,u=n<0||!n&&(!e._start&&xR(e)&&!(!e._initted&&V_(e))||(e._ts<0||e._dp._ts<0)&&!V_(e))?0:1,f=e._rDelay,p=0,d,_,x;if(f&&e._repeat&&(p=ju(0,e._tDur,n),_=sc(p,f),e._yoyo&&_&1&&(u=1-u),_!==sc(e._tTime,f)&&(l=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==l||vi||r||e._zTime===yn||!n&&e._zTime){if(!e._initted&&F1(e,n,r,i,p))return;for(x=e._zTime,e._zTime=n||(i?yn:0),i||(i=n&&!x),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=p,d=e._pt;d;)d.r(u,d.d),d=d._next;n<0&&G_(e,n,i,!0),e._onUpdate&&!i&&xa(e,"onUpdate"),p&&e._repeat&&!i&&e.parent&&xa(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===u&&(u&&Zs(e,1),!i&&!vi&&(xa(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},SR=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},oc=function(e,n,i,r){var l=e._repeat,u=Un(n)||0,f=e._tTime/e._tDur;return f&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=l?l<0?1e10:Un(u*(l+1)+e._rDelay*l):u,f>0&&!r&&Cd(e,e._tTime=e._tDur*f),e.parent&&Rd(e),i||Po(e.parent,e),e},VS=function(e){return e instanceof Zi?Po(e):oc(e,e._dur)},MR={_start:0,endTime:Bu,totalDuration:Bu},Oa=function o(e,n,i){var r=e.labels,l=e._recent||MR,u=e.duration()>=Ha?l.endTime(!1):e._dur,f,p,d;return ui(n)&&(isNaN(n)||n in r)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:i).totalDuration()/100:1)):f<0?(n in r||(r[n]=u),r[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&i&&(p=p/100*(Ci(i)?i[0]:i).totalDuration()),f>1?o(e,n.substr(0,f-1),i)+p:u+p)):n==null?u:+n},Au=function(e,n,i){var r=ns(n[1]),l=(r?2:1)+(e<2?0:1),u=n[l],f,p;if(r&&(u.duration=n[1]),u.parent=i,e){for(f=u,p=i;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ji(p.vars.inherit)&&p.parent;u.immediateRender=ji(f.immediateRender),e<2?u.runBackwards=1:u.startAt=n[l-1]}return new Kn(n[0],u,n[l+1])},$s=function(e,n){return e||e===0?n(e):n},ju=function(e,n,i){return i<e?e:i>n?n:i},Ti=function(e,n){return!ui(e)||!(n=fR.exec(e))?"":n[1]},bR=function(e,n,i){return $s(i,function(r){return ju(e,n,r)})},k_=[].slice,B1=function(e,n){return e&&Sr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Sr(e[0]))&&!e.nodeType&&e!==ur},ER=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var l;return ui(r)&&!n||B1(r,1)?(l=i).push.apply(l,Ga(r)):i.push(r)})||i},Ga=function(e,n,i){return Nn&&!n&&Nn.selector?Nn.selector(e):ui(e)&&!i&&(B_||!lc())?k_.call((n||r0).querySelectorAll(e),0):Ci(e)?ER(e,i):B1(e)?k_.call(e,0):e?[e]:[]},X_=function(e){return e=Ga(e)[0]||Fu("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return Ga(n,i.querySelectorAll?i:i===e?Fu("Invalid scope")||r0.createElement("div"):e)}},H1=function(e){return e.sort(function(){return .5-Math.random()})},G1=function(e){if(Fn(e))return e;var n=Sr(e)?e:{each:e},i=Io(n.ease),r=n.from||0,l=parseFloat(n.base)||0,u={},f=r>0&&r<1,p=isNaN(r)||f,d=n.axis,_=r,x=r;return ui(r)?_=x={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(_=r[0],x=r[1]),function(g,v,M){var b=(M||n).length,y=u[b],S,U,P,R,D,O,C,T,N;if(!y){if(N=n.grid==="auto"?0:(n.grid||[1,Ha])[1],!N){for(C=-Ha;C<(C=M[N++].getBoundingClientRect().left)&&N<b;);N<b&&N--}for(y=u[b]=[],S=p?Math.min(N,b)*_-.5:r%N,U=N===Ha?0:p?b*x/N-.5:r/N|0,C=0,T=Ha,O=0;O<b;O++)P=O%N-S,R=U-(O/N|0),y[O]=D=d?Math.abs(d==="y"?R:P):b1(P*P+R*R),D>C&&(C=D),D<T&&(T=D);r==="random"&&H1(y),y.max=C-T,y.min=T,y.v=b=(parseFloat(n.amount)||parseFloat(n.each)*(N>b?b-1:d?d==="y"?b/N:N:Math.max(N,b/N))||0)*(r==="edges"?-1:1),y.b=b<0?l-b:l,y.u=Ti(n.amount||n.each)||0,i=i&&b<0?zR(i):i}return b=(y[g]-y.min)/y.max||0,Un(y.b+(i?i(b):b)*y.v)+y.u}},W_=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Un(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(ns(i)?0:Ti(i))}},V1=function(e,n){var i=Ci(e),r,l;return!i&&Sr(e)&&(r=i=e.radius||Ha,e.values?(e=Ga(e.values),(l=!ns(e[0]))&&(r*=r)):e=W_(e.increment)),$s(n,i?Fn(e)?function(u){return l=e(u),Math.abs(l-u)<=r?l:u}:function(u){for(var f=parseFloat(l?u.x:u),p=parseFloat(l?u.y:0),d=Ha,_=0,x=e.length,g,v;x--;)l?(g=e[x].x-f,v=e[x].y-p,g=g*g+v*v):g=Math.abs(e[x]-f),g<d&&(d=g,_=x);return _=!r||d<=r?e[_]:u,l||_===u||ns(u)?_:_+Ti(u)}:W_(e))},k1=function(e,n,i,r){return $s(Ci(e)?!n:i===!0?!!(i=0):!r,function(){return Ci(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},TR=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(l,u){return u(l)},r)}},AR=function(e,n){return function(i){return e(parseFloat(i))+(n||Ti(i))}},RR=function(e,n,i){return W1(e,n,0,1,i)},X1=function(e,n,i){return $s(i,function(r){return e[~~n(r)]})},CR=function o(e,n,i){var r=n-e;return Ci(e)?X1(e,o(0,e.length),n):$s(i,function(l){return(r+(l-e)%r)%r+e})},wR=function o(e,n,i){var r=n-e,l=r*2;return Ci(e)?X1(e,o(0,e.length-1),n):$s(i,function(u){return u=(l+(u-e)%l)%l||0,e+(u>r?l-u:u)})},Hu=function(e){return e.replace(lR,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(cR);return k1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},W1=function(e,n,i,r,l){var u=n-e,f=r-i;return $s(l,function(p){return i+((p-e)/u*f||0)})},DR=function o(e,n,i,r){var l=isNaN(e+n)?0:function(v){return(1-v)*e+v*n};if(!l){var u=ui(e),f={},p,d,_,x,g;if(i===!0&&(r=1)&&(i=null),u)e={p:e},n={p:n};else if(Ci(e)&&!Ci(n)){for(_=[],x=e.length,g=x-2,d=1;d<x;d++)_.push(o(e[d-1],e[d]));x--,l=function(M){M*=x;var b=Math.min(g,~~M);return _[b](M-b)},i=n}else r||(e=rc(Ci(e)?[]:{},e));if(!_){for(p in n)f0.call(f,e,p,"get",n[p]);l=function(M){return m0(M,f)||(u?e.p:e)}}}return $s(i,l)},kS=function(e,n,i){var r=e.labels,l=Ha,u,f,p;for(u in r)f=r[u]-n,f<0==!!i&&f&&l>(f=Math.abs(f))&&(p=u,l=f);return p},xa=function(e,n,i){var r=e.vars,l=r[n],u=Nn,f=e._ctx,p,d,_;if(l)return p=r[n+"Params"],d=r.callbackScope||e,i&&Ws.length&&cd(),f&&(Nn=f),_=p?l.apply(d,p):l.call(d),Nn=u,_},_u=function(e){return Zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vi),e.progress()<1&&xa(e,"onInterrupt"),e},ql,Y1=[],q1=function(e){if(e)if(e=!e.name&&e.default||e,a0()||e.headless){var n=e.name,i=Fn(e),r=n&&!i&&e.init?function(){this._props=[]}:e,l={init:Bu,render:m0,add:f0,kill:qR,modifier:YR,rawVars:0},u={targetTest:0,get:0,getSetter:p0,aliases:{},register:0};if(lc(),e!==r){if(ma[n])return;ba(r,ba(ud(e,l),u)),rc(r.prototype,rc(l,ud(e,u))),ma[r.prop=n]=r,e.targetTest&&(Zh.push(r),o0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}w1(n,r),e.register&&e.register(ta,r,Qi)}else Y1.push(e)},xn=255,gu={aqua:[0,xn,xn],lime:[0,xn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xn],navy:[0,0,128],white:[xn,xn,xn],olive:[128,128,0],yellow:[xn,xn,0],orange:[xn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xn,0,0],pink:[xn,192,203],cyan:[0,xn,xn],transparent:[xn,xn,xn,0]},qm=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*xn+.5|0},Z1=function(e,n,i){var r=e?ns(e)?[e>>16,e>>8&xn,e&xn]:0:gu.black,l,u,f,p,d,_,x,g,v,M;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gu[e])r=gu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),u=e.charAt(2),f=e.charAt(3),e="#"+l+l+u+u+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&xn,r&xn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&xn,e&xn]}else if(e.substr(0,3)==="hsl"){if(r=M=e.match(FS),!n)p=+r[0]%360/360,d=+r[1]/100,_=+r[2]/100,u=_<=.5?_*(d+1):_+d-_*d,l=_*2-u,r.length>3&&(r[3]*=1),r[0]=qm(p+1/3,l,u),r[1]=qm(p,l,u),r[2]=qm(p-1/3,l,u);else if(~e.indexOf("="))return r=e.match(T1),i&&r.length<4&&(r[3]=1),r}else r=e.match(FS)||gu.transparent;r=r.map(Number)}return n&&!M&&(l=r[0]/xn,u=r[1]/xn,f=r[2]/xn,x=Math.max(l,u,f),g=Math.min(l,u,f),_=(x+g)/2,x===g?p=d=0:(v=x-g,d=_>.5?v/(2-x-g):v/(x+g),p=x===l?(u-f)/v+(u<f?6:0):x===u?(f-l)/v+2:(l-u)/v+4,p*=60),r[0]=~~(p+.5),r[1]=~~(d*100+.5),r[2]=~~(_*100+.5)),i&&r.length<4&&(r[3]=1),r},j1=function(e){var n=[],i=[],r=-1;return e.split(Ys).forEach(function(l){var u=l.match(Yl)||[];n.push.apply(n,u),i.push(r+=u.length+1)}),n.c=i,n},XS=function(e,n,i){var r="",l=(e+r).match(Ys),u=n?"hsla(":"rgba(",f=0,p,d,_,x;if(!l)return e;if(l=l.map(function(g){return(g=Z1(g,n,1))&&u+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(_=j1(e),p=i.c,p.join(r)!==_.c.join(r)))for(d=e.replace(Ys,"1").split(Yl),x=d.length-1;f<x;f++)r+=d[f]+(~p.indexOf(f)?l.shift()||u+"0,0,0,0)":(_.length?_:l.length?l:i).shift());if(!d)for(d=e.split(Ys),x=d.length-1;f<x;f++)r+=d[f]+l[f];return r+d[x]},Ys=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gu)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),NR=/hsl[a]?\(/,K1=function(e){var n=e.join(" "),i;if(Ys.lastIndex=0,Ys.test(n))return i=NR.test(n),e[1]=XS(e[1],i),e[0]=XS(e[0],i,j1(e[1])),!0},Gu,ga=(function(){var o=Date.now,e=500,n=33,i=o(),r=i,l=1e3/240,u=l,f=[],p,d,_,x,g,v,M=function b(y){var S=o()-r,U=y===!0,P,R,D,O;if((S>e||S<0)&&(i+=S-n),r+=S,D=r-i,P=D-u,(P>0||U)&&(O=++x.frame,g=D-x.time*1e3,x.time=D=D/1e3,u+=P+(P>=l?4:l-P),R=1),U||(p=d(b)),R)for(v=0;v<f.length;v++)f[v](D,g,O,y)};return x={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){R1&&(!B_&&a0()&&(ur=B_=window,r0=ur.document||{},Ma.gsap=ta,(ur.gsapVersions||(ur.gsapVersions=[])).push(ta.version),C1(ld||ur.GreenSockGlobals||!ur.gsap&&ur||{}),Y1.forEach(q1)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&x.sleep(),d=_||function(y){return setTimeout(y,u-x.time*1e3+1|0)},Gu=1,M(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Gu=0,d=Bu},lagSmoothing:function(y,S){e=y||1/0,n=Math.min(S||33,e)},fps:function(y){l=1e3/(y||240),u=x.time*1e3+l},add:function(y,S,U){var P=S?function(R,D,O,C){y(R,D,O,C),x.remove(P)}:y;return x.remove(y),f[U?"unshift":"push"](P),lc(),P},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&v>=S&&v--},_listeners:f},x})(),lc=function(){return!Gu&&ga.wake()},kt={},UR=/^[\d.\-M][\d.\-,\s]/,LR=/["']/g,OR=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],l=1,u=i.length,f,p,d;l<u;l++)p=i[l],f=l!==u-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[r]=isNaN(d)?d.replace(LR,"").trim():+d,r=p.substr(f+1).trim();return n},PR=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},IR=function(e){var n=(e+"").split("("),i=kt[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[OR(n[1])]:PR(e).split(",").map(L1)):kt._CE&&UR.test(e)?kt._CE("",e):i},zR=function(e){return function(n){return 1-e(1-n)}},Io=function(e,n){return e&&(Fn(e)?e:kt[e]||IR(e))||n},qo=function(e,n,i,r){i===void 0&&(i=function(p){return 1-n(1-p)}),r===void 0&&(r=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:i,easeInOut:r},u;return Ki(e,function(f){kt[f]=Ma[f]=l,kt[u=f.toLowerCase()]=i;for(var p in l)kt[u+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=kt[f+"."+p]=l[p]}),l},Q1=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Zm=function o(e,n,i){var r=n>=1?n:1,l=(i||(e?.3:.45))/(n<1?n:1),u=l/F_*(Math.asin(1/r)||0),f=function(_){return _===1?1:r*Math.pow(2,-10*_)*oR((_-u)*l)+1},p=e==="out"?f:e==="in"?function(d){return 1-f(1-d)}:Q1(f);return l=F_/l,p.config=function(d,_){return o(e,d,_)},p},jm=function o(e,n){n===void 0&&(n=1.70158);var i=function(u){return u?--u*u*((n+1)*u+n)+1:0},r=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:Q1(i);return r.config=function(l){return o(e,l)},r};Ki("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var n=e<5?e+1:e;qo(o+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;qo("Elastic",Zm("in"),Zm("out"),Zm());(function(o,e){var n=1/e,i=2*n,r=2.5*n,l=function(f){return f<n?o*f*f:f<i?o*Math.pow(f-1.5/e,2)+.75:f<r?o*(f-=2.25/e)*f+.9375:o*Math.pow(f-2.625/e,2)+.984375};qo("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);qo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});qo("Circ",function(o){return-(b1(1-o*o)-1)});qo("Sine",function(o){return o===1?1:-sR(o*aR)+1});qo("Back",jm("in"),jm("out"),jm());kt.SteppedEase=kt.steps=Ma.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),l=n?1:0,u=1-yn;return function(f){return((r*ju(0,u,f)|0)+l)*i}}};zu.ease=kt["quad.out"];Ki("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return l0+=o+","+o+"Params,"});var J1=function(e,n){this.id=rR++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:N1,this.set=n?n.getSetter:p0},Vu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,oc(this,+n.duration,1,1),this.data=n.data,Nn&&(this._ctx=Nn,Nn.data.push(this)),Gu||ga.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,oc(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(lc(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Cd(this,i),!l._dp||l.parent||I1(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&dr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===yn||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),U1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+GS(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+GS(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,r):this._repeat?sc(this._tTime,l)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-yn?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?fd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-yn?0:this._rts,this.totalTime(ju(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),Rd(this),gR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(lc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yn&&(this._tTime-=yn)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Un(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&dr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ji(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=dR);var r=vi;return vi=i,u0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vi=r,this},e.globalTime=function(i){for(var r=this,l=arguments.length?i:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,VS(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,VS(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Oa(this,i),ji(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ji(r)),this._dur||(this._zTime=-yn),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-yn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yn,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=r&&l<this.endTime(!0)-yn)},e.eventCallback=function(i,r,l){var u=this.vars;return arguments.length>1?(r?(u[i]=r,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=r)):delete u[i],this):u[i]},e.then=function(i){var r=this,l=r._prom;return new Promise(function(u){var f=Fn(i)?i:O1,p=function(){var _=r.then;r.then=null,l&&l(),Fn(f)&&(f=f(r))&&(f.then||f===r)&&(r.then=_),u(f),r.then=_};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?p():r._prom=p})},e.kill=function(){_u(this)},o})();ba(Vu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yn,_prom:0,_ps:!1,_rts:1});var Zi=(function(o){M1(e,o);function e(i,r){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=ji(i.sortChildren),Ln&&dr(i.parent||Ln,qr(l),r),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&z1(qr(l),i.scrollTrigger),l}var n=e.prototype;return n.to=function(r,l,u){return Au(0,arguments,this),this},n.from=function(r,l,u){return Au(1,arguments,this),this},n.fromTo=function(r,l,u,f){return Au(2,arguments,this),this},n.set=function(r,l,u){return l.duration=0,l.parent=this,Tu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Kn(r,l,Oa(this,u),1),this},n.call=function(r,l,u){return dr(this,Kn.delayedCall(0,r,l),u)},n.staggerTo=function(r,l,u,f,p,d,_){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=d,u.onCompleteParams=_,u.parent=this,new Kn(r,u,Oa(this,p)),this},n.staggerFrom=function(r,l,u,f,p,d,_){return u.runBackwards=1,Tu(u).immediateRender=ji(u.immediateRender),this.staggerTo(r,l,u,f,p,d,_)},n.staggerFromTo=function(r,l,u,f,p,d,_,x){return f.startAt=u,Tu(f).immediateRender=ji(f.immediateRender),this.staggerTo(r,l,f,p,d,_,x)},n.render=function(r,l,u){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=r<=0?0:Un(r),x=this._zTime<0!=r<0&&(this._initted||!d),g,v,M,b,y,S,U,P,R,D,O,C;if(this!==Ln&&_>p&&r>=0&&(_=p),_!==this._tTime||u||x){if(f!==this._time&&d&&(_+=this._time-f,r+=this._time-f),g=_,R=this._start,P=this._ts,S=!P,x&&(d||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(O=this._yoyo,y=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,l,u);if(g=Un(_%y),_===p?(b=this._repeat,g=d):(D=Un(_/y),b=~~D,b&&b===D&&(g=d,b--),g>d&&(g=d)),D=sc(this._tTime,y),!f&&this._tTime&&D!==b&&this._tTime-D*y-this._dur<=0&&(D=b),O&&b&1&&(g=d-g,C=1),b!==D&&!this._lock){var T=O&&D&1,N=T===(O&&b&1);if(b<D&&(T=!T),f=T?0:_%d?d:_,this._lock=1,this.render(f||(C?0:Un(b*y)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&xa(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,D=b),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,N&&(this._lock=2,f=T?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!S)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=SR(this,Un(f),Un(g)),U&&(_-=g-(g=U._start))),this._tTime=_,this._time=g,this._act=!!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&_&&d&&!l&&!D&&(xa(this,"onStart"),this._tTime!==_))return this;if(g>=f&&r>=0)for(v=this._first;v;){if(M=v._next,(v._act||g>=v._start)&&v._ts&&U!==v){if(v.parent!==this)return this.render(r,l,u);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,l,u),g!==this._time||!this._ts&&!S){U=0,M&&(_+=this._zTime=-yn);break}}v=M}else{v=this._last;for(var I=r<0?r:g;v;){if(M=v._prev,(v._act||I<=v._end)&&v._ts&&U!==v){if(v.parent!==this)return this.render(r,l,u);if(v.render(v._ts>0?(I-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(I-v._start)*v._ts,l,u||vi&&u0(v)),g!==this._time||!this._ts&&!S){U=0,M&&(_+=this._zTime=I?-yn:yn);break}}v=M}}if(U&&!l&&(this.pause(),U.render(g>=f?0:-yn)._zTime=g>=f?1:-1,this._ts))return this._start=R,Rd(this),this.render(r,l,u);this._onUpdate&&!l&&xa(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Zs(this,1),!l&&!(r<0&&!f)&&(_||f||!p)&&(xa(this,_===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,l){var u=this;if(ns(l)||(l=Oa(this,l,r)),!(r instanceof Vu)){if(Ci(r))return r.forEach(function(f){return u.add(f,l)}),this;if(ui(r))return this.addLabel(r,l);if(Fn(r))r=Kn.delayedCall(0,r);else return this}return this!==r?dr(this,r,l):this},n.getChildren=function(r,l,u,f){r===void 0&&(r=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-Ha);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Kn?l&&p.push(d):(u&&p.push(d),r&&p.push.apply(p,d.getChildren(!0,l,u)))),d=d._next;return p},n.getById=function(r){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===r)return l[u]},n.remove=function(r){return ui(r)?this.removeLabel(r):Fn(r)?this.killTweensOf(r):(r.parent===this&&Ad(this,r),r===this._recent&&(this._recent=this._last),Po(this))},n.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Un(ga.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},n.addLabel=function(r,l){return this.labels[r]=Oa(this,l),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,l,u){var f=Kn.delayedCall(0,l||Bu,u);return f.data="isPause",this._hasPause=1,dr(this,f,Oa(this,r))},n.removePause=function(r){var l=this._first;for(r=Oa(this,r);l;)l._start===r&&l.data==="isPause"&&Zs(l),l=l._next},n.killTweensOf=function(r,l,u){for(var f=this.getTweensOf(r,u),p=f.length;p--;)Bs!==f[p]&&f[p].kill(r,l);return this},n.getTweensOf=function(r,l){for(var u=[],f=Ga(r),p=this._first,d=ns(l),_;p;)p instanceof Kn?pR(p._targets,f)&&(d?(!Bs||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&u.push(p):(_=p.getTweensOf(f,l)).length&&u.push.apply(u,_),p=p._next;return u},n.tweenTo=function(r,l){l=l||{};var u=this,f=Oa(u,r),p=l,d=p.startAt,_=p.onStart,x=p.onStartParams,g=p.immediateRender,v,M=Kn.to(u,ba({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:u._time))/u.timeScale())||yn,onStart:function(){if(u.pause(),!v){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:u._time))/u.timeScale());M._dur!==y&&oc(M,y,0,1).render(M._time,!0,!0),v=1}_&&_.apply(M,x||[])}},l));return g?M.render(0):M},n.tweenFromTo=function(r,l,u){return this.tweenTo(l,ba({startAt:{time:Oa(this,r)}},u))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),kS(this,Oa(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),kS(this,Oa(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+yn)},n.shiftChildren=function(r,l,u){u===void 0&&(u=0);var f=this._first,p=this.labels,d;for(r=Un(r);f;)f._start>=u&&(f._start+=r,f._end+=r),f=f._next;if(l)for(d in p)p[d]>=u&&(p[d]+=r);return Po(this)},n.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Po(this)},n.totalDuration=function(r){var l=0,u=this,f=u._last,p=Ha,d,_,x;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(x=u.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&u._sort&&f._ts&&!u._lock?(u._lock=1,dr(u,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!x&&!u._dp||x&&x.smoothChildTiming)&&(u._start+=Un(_/u._ts),u._time-=_,u._tTime-=_),u.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;oc(u,u===Ln&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(Ln._ts&&(U1(Ln,fd(r,Ln)),D1=ga.frame),ga.frame>=BS){BS+=Sa.autoSleep||120;var l=Ln._first;if((!l||!l._ts)&&Sa.autoSleep&&ga._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||ga.sleep()}}},e})(Vu);ba(Zi.prototype,{_lock:0,_hasPause:0,_forcing:0});var FR=function(e,n,i,r,l,u,f){var p=new Qi(this._pt,e,n,0,1,ab,null,l),d=0,_=0,x,g,v,M,b,y,S,U;for(p.b=i,p.e=r,i+="",r+="",(S=~r.indexOf("random("))&&(r=Hu(r)),u&&(U=[i,r],u(U,e,n),i=U[0],r=U[1]),g=i.match(Wm)||[];x=Wm.exec(r);)M=x[0],b=r.substring(d,x.index),v?v=(v+1)%5:b.substr(-5)==="rgba("&&(v=1),M!==g[_++]&&(y=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:b||_===1?b:",",s:y,c:M.charAt(1)==="="?jl(y,M)-y:parseFloat(M)-y,m:v&&v<4?Math.round:0},d=Wm.lastIndex);return p.c=d<r.length?r.substring(d,r.length):"",p.fp=f,(A1.test(r)||S)&&(p.e=0),this._pt=p,p},f0=function(e,n,i,r,l,u,f,p,d,_){Fn(r)&&(r=r(l||0,e,u));var x=e[n],g=i!=="get"?i:Fn(x)?d?e[n.indexOf("set")||!Fn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](d):e[n]():x,v=Fn(x)?d?kR:nb:d0,M;if(ui(r)&&(~r.indexOf("random(")&&(r=Hu(r)),r.charAt(1)==="="&&(M=jl(g,r)+(Ti(g)||0),(M||M===0)&&(r=M))),!_||g!==r||Y_)return!isNaN(g*r)&&r!==""?(M=new Qi(this._pt,e,n,+g||0,r-(g||0),typeof x=="boolean"?WR:ib,0,v),d&&(M.fp=d),f&&M.modifier(f,this,e),this._pt=M):(!x&&!(n in e)&&s0(n,r),FR.call(this,e,n,g,r,v,p||Sa.stringFilter,d))},BR=function(e,n,i,r,l){if(Fn(e)&&(e=Ru(e,l,n,i,r)),!Sr(e)||e.style&&e.nodeType||Ci(e)||E1(e))return ui(e)?Ru(e,l,n,i,r):e;var u={},f;for(f in e)u[f]=Ru(e[f],l,n,i,r);return u},$1=function(e,n,i,r,l,u){var f,p,d,_;if(ma[e]&&(f=new ma[e]).init(l,f.rawVars?n[e]:BR(n[e],r,l,u,i),i,r,u)!==!1&&(i._pt=p=new Qi(i._pt,l,e,0,1,f.render,f,0,f.priority),i!==ql))for(d=i._ptLookup[i._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Bs,Y_,h0=function o(e,n,i){var r=e.vars,l=r.ease,u=r.startAt,f=r.immediateRender,p=r.lazy,d=r.onUpdate,_=r.runBackwards,x=r.yoyoEase,g=r.keyframes,v=r.autoRevert,M=e._dur,b=e._startAt,y=e._targets,S=e.parent,U=S&&S.data==="nested"?S.vars.targets:y,P=e._overwrite==="auto"&&!n0,R=e.timeline,D=r.easeReverse||x,O,C,T,N,I,H,G,ie,re,Z,B,V,Q;if(R&&(!g||!l)&&(l="none"),e._ease=Io(l,zu.ease),e._rEase=D&&(Io(D)||e._ease),e._from=!R&&!!r.runBackwards,e._from&&(e.ratio=1),!R||g&&!r.stagger){if(ie=y[0]?Oo(y[0]).harness:0,V=ie&&r[ie.prop],O=ud(r,o0),b&&(b._zTime<0&&b.progress(1),n<0&&_&&f&&!v?b.render(-1,!0):b.revert(_&&M?qh:hR),b._lazy=0),u){if(Zs(e._startAt=Kn.set(y,ba({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!b&&ji(p),startAt:null,delay:0,onUpdate:d&&function(){return xa(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(vi||!f&&!v)&&e._startAt.revert(qh),f&&M&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(_&&M&&!b){if(n&&(f=!1),T=ba({overwrite:!1,data:"isFromStart",lazy:f&&!b&&ji(p),immediateRender:f,stagger:0,parent:S},O),V&&(T[ie.prop]=V),Zs(e._startAt=Kn.set(y,T)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(vi?e._startAt.revert(qh):e._startAt.render(-1,!0)),e._zTime=n,!f)o(e._startAt,yn,yn);else if(!n)return}for(e._pt=e._ptCache=0,p=M&&ji(p)||p&&!M,C=0;C<y.length;C++){if(I=y[C],G=I._gsap||c0(y)[C]._gsap,e._ptLookup[C]=Z={},H_[G.id]&&Ws.length&&cd(),B=U===y?C:U.indexOf(I),ie&&(re=new ie).init(I,V||O,e,B,U)!==!1&&(e._pt=N=new Qi(e._pt,I,re.name,0,1,re.render,re,0,re.priority),re._props.forEach(function(de){Z[de]=N}),re.priority&&(H=1)),!ie||V)for(T in O)ma[T]&&(re=$1(T,O,e,B,I,U))?re.priority&&(H=1):Z[T]=N=f0.call(e,I,T,"get",O[T],B,U,0,r.stringFilter);e._op&&e._op[C]&&e.kill(I,e._op[C]),P&&e._pt&&(Bs=e,Ln.killTweensOf(I,Z,e.globalTime(n)),Q=!e.parent,Bs=0),e._pt&&p&&(H_[G.id]=1)}H&&rb(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!Q,g&&n<=0&&R.render(Ha,!0,!0)},HR=function(e,n,i,r,l,u,f,p){var d=(e._pt&&e._ptCache||(e._ptCache={}))[n],_,x,g,v;if(!d)for(d=e._ptCache[n]=[],g=e._ptLookup,v=e._targets.length;v--;){if(_=g[v][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Y_=1,e.vars[n]="+=0",h0(e,f),Y_=0,p?Fu(n+" not eligible for reset. Try splitting into individual properties"):1;d.push(_)}for(v=d.length;v--;)x=d[v],_=x._pt||x,_.s=(r||r===0)&&!l?r:_.s+(r||0)+u*_.c,_.c=i-_.s,x.e&&(x.e=Gn(i)+Ti(x.e)),x.b&&(x.b=_.s+Ti(x.b))},GR=function(e,n){var i=e[0]?Oo(e[0]).harness:0,r=i&&i.aliases,l,u,f,p;if(!r)return n;l=rc({},n);for(u in r)if(u in l)for(p=r[u].split(","),f=p.length;f--;)l[p[f]]=l[u];return l},VR=function(e,n,i,r){var l=n.ease||r||"power1.inOut",u,f;if(Ci(n))f=i[e]||(i[e]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(u in n)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(e),v:n[u],e:l})},Ru=function(e,n,i,r,l){return Fn(e)?e.call(n,i,r,l):ui(e)&&~e.indexOf("random(")?Hu(e):e},eb=l0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",tb={};Ki(eb+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return tb[o]=1});var Kn=(function(o){M1(e,o);function e(i,r,l,u){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,u?r:Tu(r))||this;var p=f.vars,d=p.duration,_=p.delay,x=p.immediateRender,g=p.stagger,v=p.overwrite,M=p.keyframes,b=p.defaults,y=p.scrollTrigger,S=r.parent||Ln,U=(Ci(i)||E1(i)?ns(i[0]):"length"in r)?[i]:Ga(i),P,R,D,O,C,T,N,I;if(f._targets=U.length?c0(U):Fu("GSAP target "+i+" not found. https://gsap.com",!Sa.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,M||g||ch(d)||ch(_)){r=f.vars;var H=r.easeReverse||r.yoyoEase;if(P=f.timeline=new Zi({data:"nested",defaults:b||{},targets:S&&S.data==="nested"?S.vars.targets:U}),P.kill(),P.parent=P._dp=qr(f),P._start=0,g||ch(d)||ch(_)){if(O=U.length,N=g&&G1(g),Sr(g))for(C in g)~eb.indexOf(C)&&(I||(I={}),I[C]=g[C]);for(R=0;R<O;R++)D=ud(r,tb),D.stagger=0,H&&(D.easeReverse=H),I&&rc(D,I),T=U[R],D.duration=+Ru(d,qr(f),R,T,U),D.delay=(+Ru(_,qr(f),R,T,U)||0)-f._delay,!g&&O===1&&D.delay&&(f._delay=_=D.delay,f._start+=_,D.delay=0),P.to(T,D,N?N(R,T,U):0),P._ease=kt.none;P.duration()?d=_=0:f.timeline=0}else if(M){Tu(ba(P.vars.defaults,{ease:"none"})),P._ease=Io(M.ease||r.ease||"none");var G=0,ie,re,Z;if(Ci(M))M.forEach(function(B){return P.to(U,B,">")}),P.duration();else{D={};for(C in M)C==="ease"||C==="easeEach"||VR(C,M[C],D,M.easeEach);for(C in D)for(ie=D[C].sort(function(B,V){return B.t-V.t}),G=0,R=0;R<ie.length;R++)re=ie[R],Z={ease:re.e,duration:(re.t-(R?ie[R-1].t:0))/100*d},Z[C]=re.v,P.to(U,Z,G),G+=Z.duration;P.duration()<d&&P.to({},{duration:d-P.duration()})}}d||f.duration(d=P.duration())}else f.timeline=0;return v===!0&&!n0&&(Bs=qr(f),Ln.killTweensOf(U),Bs=0),dr(S,qr(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(x||!d&&!M&&f._start===Un(S._time)&&ji(x)&&vR(qr(f))&&S.data!=="nested")&&(f._tTime=-yn,f.render(Math.max(0,-_)||0)),y&&z1(qr(f),y),f}var n=e.prototype;return n.render=function(r,l,u){var f=this._time,p=this._tDur,d=this._dur,_=r<0,x=r>p-yn&&!_?p:r<yn?0:r,g,v,M,b,y,S,U,P;if(!d)yR(this,r,l,u);else if(x!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=x,P=this.timeline,this._repeat){if(b=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(b*100+r,l,u);if(g=Un(x%b),x===p?(M=this._repeat,g=d):(y=Un(x/b),M=~~y,M&&M===y?(g=d,M--):g>d&&(g=d)),S=this._yoyo&&M&1,S&&(g=d-g),y=sc(this._tTime,b),g===f&&!u&&this._initted&&M===y)return this._tTime=x,this;M!==y&&this.vars.repeatRefresh&&!S&&!this._lock&&g!==b&&this._initted&&(this._lock=u=1,this.render(Un(b*M),!0).invalidate()._lock=0)}if(!this._initted){if(F1(this,_?r:g,u,l,x))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&M!==y))return this;if(d!==this._dur)return this.render(r,l,u)}if(this._rEase){var R=g<f;if(R!==this._inv){var D=R?f:d-f;this._inv=R,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=D?(R?-1:1)/D:0,this._invScale=R?-this.ratio:1-this.ratio,this._invEase=R?this._rEase:this._ease}this.ratio=U=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=U=this._ease(g/d);if(this._from&&(this.ratio=U=1-U),this._tTime=x,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&x&&!l&&!y&&(xa(this,"onStart"),this._tTime!==x))return this;for(v=this._pt;v;)v.r(U,v.d),v=v._next;P&&P.render(r<0?r:P._dur*P._ease(g/this._dur),l,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(_&&G_(this,r,l,u),xa(this,"onUpdate")),this._repeat&&M!==y&&this.vars.onRepeat&&!l&&this.parent&&xa(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(_&&!this._onUpdate&&G_(this,r,!0,!0),(r||!d)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&Zs(this,1),!l&&!(_&&!f)&&(x||f||S)&&(xa(this,x===p?"onComplete":"onReverseComplete",!0),this._prom&&!(x<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},n.resetTo=function(r,l,u,f,p){Gu||ga.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||h0(this,d),_=this._ease(d/this._dur),HR(this,r,l,u,f,_,d,p)?this.resetTo(r,l,u,f,1):(Cd(this,0),this.parent||P1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?_u(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vi),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Bs&&Bs.vars.overwrite!==!0)._first||_u(this),this.parent&&u!==this.timeline.totalDuration()&&oc(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,p=r?Ga(r):f,d=this._ptLookup,_=this._pt,x,g,v,M,b,y,S;if((!l||l==="all")&&_R(f,p))return l==="all"&&(this._pt=0),_u(this);for(x=this._op=this._op||[],l!=="all"&&(ui(l)&&(b={},Ki(l,function(U){return b[U]=1}),l=b),l=GR(f,l)),S=f.length;S--;)if(~p.indexOf(f[S])){g=d[S],l==="all"?(x[S]=l,M=g,v={}):(v=x[S]=x[S]||{},M=l);for(b in M)y=g&&g[b],y&&((!("kill"in y.d)||y.d.kill(b)===!0)&&Ad(this,y,"_pt"),delete g[b]),v!=="all"&&(v[b]=1)}return this._initted&&!this._pt&&_&&_u(this),this},e.to=function(r,l){return new e(r,l,arguments[2])},e.from=function(r,l){return Au(1,arguments)},e.delayedCall=function(r,l,u,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},e.fromTo=function(r,l,u){return Au(2,arguments)},e.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(r,l)},e.killTweensOf=function(r,l,u){return Ln.killTweensOf(r,l,u)},e})(Vu);ba(Kn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ki("staggerTo,staggerFrom,staggerFromTo",function(o){Kn[o]=function(){var e=new Zi,n=k_.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,n)}});var d0=function(e,n,i){return e[n]=i},nb=function(e,n,i){return e[n](i)},kR=function(e,n,i,r){return e[n](r.fp,i)},XR=function(e,n,i){return e.setAttribute(n,i)},p0=function(e,n){return Fn(e[n])?nb:i0(e[n])&&e.setAttribute?XR:d0},ib=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},WR=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},ab=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},m0=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},YR=function(e,n,i,r){for(var l=this._pt,u;l;)u=l._next,l.p===r&&l.modifier(e,n,i),l=u},qR=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?Ad(this,n,"_pt"):n.dep||(i=1),n=r;return!i},ZR=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},rb=function(e){for(var n=e._pt,i,r,l,u;n;){for(i=n._next,r=l;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:u)?n._prev._next=n:l=n,(n._next=r)?r._prev=n:u=n,n=i}e._pt=l},Qi=(function(){function o(n,i,r,l,u,f,p,d,_){this.t=i,this.s=l,this.c=u,this.p=r,this.r=f||ib,this.d=p||this,this.set=d||d0,this.pr=_||0,this._next=n,n&&(n._prev=this)}var e=o.prototype;return e.modifier=function(i,r,l){this.mSet=this.mSet||this.set,this.set=ZR,this.m=i,this.mt=l,this.tween=r},o})();Ki(l0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return o0[o]=1});Ma.TweenMax=Ma.TweenLite=Kn;Ma.TimelineLite=Ma.TimelineMax=Zi;Ln=new Zi({sortChildren:!1,defaults:zu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sa.stringFilter=K1;var zo=[],jh={},jR=[],WS=0,KR=0,Km=function(e){return(jh[e]||jR).map(function(n){return n()})},q_=function(){var e=Date.now(),n=[];e-WS>2&&(Km("matchMediaInit"),zo.forEach(function(i){var r=i.queries,l=i.conditions,u,f,p,d;for(f in r)u=ur.matchMedia(r[f]).matches,u&&(p=1),u!==l[f]&&(l[f]=u,d=1);d&&(i.revert(),p&&n.push(i))}),Km("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),WS=e,Km("matchMedia"))},sb=(function(){function o(n,i){this.selector=i&&X_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=KR++,n&&this.add(n)}var e=o.prototype;return e.add=function(i,r,l){Fn(i)&&(l=r,r=i,i=Fn);var u=this,f=function(){var d=Nn,_=u.selector,x;return d&&d!==u&&d.data.push(u),l&&(u.selector=X_(l)),Nn=u,x=r.apply(u,arguments),Fn(x)&&u._r.push(x),Nn=d,u.selector=_,u.isReverted=!1,x};return u.last=f,i===Fn?f(u,function(p){return u.add(null,p)}):i?u[i]=f:f},e.ignore=function(i){var r=Nn;Nn=null,i(this),Nn=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof o?i.push.apply(i,r.getTweens()):r instanceof Kn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var l=this;if(i?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,x){return x.g-_.g||-1/0}).forEach(function(_){return _.t.revert(i)}),p=l.data.length;p--;)d=l.data[p],d instanceof Zi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Kn)&&d.revert&&d.revert(i);l._r.forEach(function(_){return _(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var u=zo.length;u--;)zo[u].id===this.id&&zo.splice(u,1)},e.revert=function(i){this.kill(i||{})},o})(),QR=(function(){function o(n){this.contexts=[],this.scope=n,Nn&&Nn.data.push(this)}var e=o.prototype;return e.add=function(i,r,l){Sr(i)||(i={matches:i});var u=new sb(0,l||this.scope),f=u.conditions={},p,d,_;Nn&&!u.selector&&(u.selector=Nn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=i;for(d in i)d==="all"?_=1:(p=ur.matchMedia(i[d]),p&&(zo.indexOf(u)<0&&zo.push(u),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(q_):p.addEventListener("change",q_)));return _&&r(u,function(x){return u.add(null,x)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},o})(),hd={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return q1(r)})},timeline:function(e){return new Zi(e)},getTweensOf:function(e,n){return Ln.getTweensOf(e,n)},getProperty:function(e,n,i,r){ui(e)&&(e=Ga(e)[0]);var l=Oo(e||{}).get,u=i?O1:L1;return i==="native"&&(i=""),e&&(n?u((ma[n]&&ma[n].get||l)(e,n,i,r)):function(f,p,d){return u((ma[f]&&ma[f].get||l)(e,f,p,d))})},quickSetter:function(e,n,i){if(e=Ga(e),e.length>1){var r=e.map(function(_){return ta.quickSetter(_,n,i)}),l=r.length;return function(_){for(var x=l;x--;)r[x](_)}}e=e[0]||{};var u=ma[n],f=Oo(e),p=f.harness&&(f.harness.aliases||{})[n]||n,d=u?function(_){var x=new u;ql._pt=0,x.init(e,i?_+i:_,ql,0,[e]),x.render(1,x),ql._pt&&m0(1,ql)}:f.set(e,p);return u?d:function(_){return d(e,p,i?_+i:_,f,1)}},quickTo:function(e,n,i){var r,l=ta.to(e,ba((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),u=function(p,d,_){return l.resetTo(n,p,d,_)};return u.tween=l,u},isTweening:function(e){return Ln.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Io(e.ease,zu.ease)),HS(zu,e||{})},config:function(e){return HS(Sa,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,l=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!ma[f]&&!Ma[f]&&Fu(n+" effect requires "+f+" plugin.")}),Ym[n]=function(f,p,d){return i(Ga(f),ba(p||{},l),d)},u&&(Zi.prototype[n]=function(f,p,d){return this.add(Ym[n](f,Sr(p)?p:(d=p)&&{},this),d)})},registerEase:function(e,n){kt[e]=Io(n)},parseEase:function(e,n){return arguments.length?Io(e,n):kt},getById:function(e){return Ln.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Zi(e),r,l;for(i.smoothChildTiming=ji(e.smoothChildTiming),Ln.remove(i),i._dp=0,i._time=i._tTime=Ln._time,r=Ln._first;r;)l=r._next,(n||!(!r._dur&&r instanceof Kn&&r.vars.onComplete===r._targets[0]))&&dr(i,r,r._start-r._delay),r=l;return dr(Ln,i,0),i},context:function(e,n){return e?new sb(e,n):Nn},matchMedia:function(e){return new QR(e)},matchMediaRefresh:function(){return zo.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||q_()},addEventListener:function(e,n){var i=jh[e]||(jh[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=jh[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:CR,wrapYoyo:wR,distribute:G1,random:k1,snap:V1,normalize:RR,getUnit:Ti,clamp:bR,splitColor:Z1,toArray:Ga,selector:X_,mapRange:W1,pipe:TR,unitize:AR,interpolate:DR,shuffle:H1},install:C1,effects:Ym,ticker:ga,updateRoot:Zi.updateRoot,plugins:ma,globalTimeline:Ln,core:{PropTween:Qi,globals:w1,Tween:Kn,Timeline:Zi,Animation:Vu,getCache:Oo,_removeLinkedListItem:Ad,reverting:function(){return vi},context:function(e){return e&&Nn&&(Nn.data.push(e),e._ctx=Nn),Nn},suppressOverwrites:function(e){return n0=e}}};Ki("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return hd[o]=Kn[o]});ga.add(Zi.updateRoot);ql=hd.to({},{duration:0});var JR=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},$R=function(e,n){var i=e._targets,r,l,u;for(r in n)for(l=i.length;l--;)u=e._ptLookup[l][r],u&&(u=u.d)&&(u._pt&&(u=JR(u,r)),u&&u.modifier&&u.modifier(n[r],e,i[l],r))},Qm=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,l,u){u._onInit=function(f){var p,d;if(ui(l)&&(p={},Ki(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}$R(f,l)}}}},ta=hd.registerPlugin({name:"attr",init:function(e,n,i,r,l){var u,f,p;this.tween=i;for(u in n)p=e.getAttribute(u)||"",f=this.add(e,"setAttribute",(p||0)+"",n[u],r,l,0,0,u),f.op=u,f.b=p,this._props.push(u)},render:function(e,n){for(var i=n._pt;i;)vi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Qm("roundProps",W_),Qm("modifiers"),Qm("snap",V1))||hd;Kn.version=Zi.version=ta.version="3.15.0";R1=1;a0()&&lc();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var YS,Hs,Kl,_0,Do,qS,g0,eC=function(){return typeof window<"u"},is={},Eo=180/Math.PI,Ql=Math.PI/180,Al=Math.atan2,ZS=1e8,v0=/([A-Z])/g,tC=/(left|right|width|margin|padding|x)/i,nC=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Z_=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},iC=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},aC=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},rC=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},sC=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},ob=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},lb=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},oC=function(e,n,i){return e.style[n]=i},lC=function(e,n,i){return e.style.setProperty(n,i)},cC=function(e,n,i){return e._gsap[n]=i},uC=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},fC=function(e,n,i,r,l){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},hC=function(e,n,i,r,l){var u=e._gsap;u[n]=i,u.renderTransform(l,u)},On="transform",Ji=On+"Origin",dC=function o(e,n){var i=this,r=this.target,l=r.style,u=r._gsap;if(e in is&&l){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return i.tfm[f]=Zr(r,f)}):this.tfm[e]=u.x?u[e]:Zr(r,e),e===Ji&&(this.tfm.zOrigin=u.zOrigin);else return pr.transform.split(",").forEach(function(f){return o.call(i,f,n)});if(this.props.indexOf(On)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ji,n,"")),e=On}(l||n)&&this.props.push(e,n,l[e])},cb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pC=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,l,u;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?n[e[l]](e[l+2]):n[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(v0,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=g0(),(!l||!l.isStart)&&!i[On]&&(cb(i),r.zOrigin&&i[Ji]&&(i[Ji]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ub=function(e,n){var i={target:e,props:[],revert:pC,save:dC};return e._gsap||ta.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},fb,j_=function(e,n){var i=Hs.createElementNS?Hs.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hs.createElement(e);return i&&i.style?i:Hs.createElement(e)},ya=function o(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(v0,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&o(e,cc(n)||n,1)||""},jS="O,Moz,ms,Ms,Webkit".split(","),cc=function(e,n,i){var r=n||Do,l=r.style,u=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(jS[u]+e in l););return u<0?null:(u===3?"ms":u>=0?jS[u]:"")+e},K_=function(){eC()&&window.document&&(YS=window,Hs=YS.document,Kl=Hs.documentElement,Do=j_("div")||{style:{}},j_("div"),On=cc(On),Ji=On+"Origin",Do.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fb=!!cc("perspective"),g0=ta.core.reverting,_0=1)},KS=function(e){var n=e.ownerSVGElement,i=j_("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),l;r.style.display="block",i.appendChild(r),Kl.appendChild(i);try{l=r.getBBox()}catch{}return i.removeChild(r),Kl.removeChild(i),l},QS=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},hb=function(e){var n,i;try{n=e.getBBox()}catch{n=KS(e),i=1}return n&&(n.width||n.height)||i||(n=KS(e)),n&&!n.width&&!n.x&&!n.y?{x:+QS(e,["x","cx","x1"])||0,y:+QS(e,["y","cy","y1"])||0,width:0,height:0}:n},db=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hb(e))},js=function(e,n){if(n){var i=e.style,r;n in is&&n!==Ji&&(n=On),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(v0,"-$1").toLowerCase())):i.removeAttribute(n)}},Gs=function(e,n,i,r,l,u){var f=new Qi(e._pt,n,i,0,1,u?lb:ob);return e._pt=f,f.b=r,f.e=l,e._props.push(i),f},JS={deg:1,rad:1,turn:1},mC={grid:1,flex:1},Ks=function o(e,n,i,r){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",f=Do.style,p=tC.test(n),d=e.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),x=100,g=r==="px",v=r==="%",M,b,y,S;if(r===u||!l||JS[r]||JS[u])return l;if(u!=="px"&&!g&&(l=o(e,n,i,"px")),S=e.getCTM&&db(e),(v||u==="%")&&(is[n]||~n.indexOf("adius")))return M=S?e.getBBox()[p?"width":"height"]:e[_],Gn(v?l/M*x:l/100*M);if(f[p?"width":"height"]=x+(g?u:r),b=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,S&&(b=(e.ownerSVGElement||{}).parentNode),(!b||b===Hs||!b.appendChild)&&(b=Hs.body),y=b._gsap,y&&v&&y.width&&p&&y.time===ga.time&&!y.uncache)return Gn(l/y.width*x);if(v&&(n==="height"||n==="width")){var U=e.style[n];e.style[n]=x+r,M=e[_],U?e.style[n]=U:js(e,n)}else(v||u==="%")&&!mC[ya(b,"display")]&&(f.position=ya(e,"position")),b===e&&(f.position="static"),b.appendChild(Do),M=Do[_],b.removeChild(Do),f.position="absolute";return p&&v&&(y=Oo(b),y.time=ga.time,y.width=b[_]),Gn(g?M*l/x:M&&l?x/M*l:0)},Zr=function(e,n,i,r){var l;return _0||K_(),n in pr&&n!=="transform"&&(n=pr[n],~n.indexOf(",")&&(n=n.split(",")[0])),is[n]&&n!=="transform"?(l=Xu(e,r),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:pd(ya(e,Ji))+" "+l.zOrigin+"px"):(l=e.style[n],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=dd[n]&&dd[n](e,n,i)||ya(e,n)||N1(e,n)||(n==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Ks(e,n,l,i)+i:l},_C=function(e,n,i,r){if(!i||i==="none"){var l=cc(n,e,1),u=l&&ya(e,l,1);u&&u!==i?(n=l,i=u):n==="borderColor"&&(i=ya(e,"borderTopColor"))}var f=new Qi(this._pt,e.style,n,0,1,ab),p=0,d=0,_,x,g,v,M,b,y,S,U,P,R,D;if(f.b=i,f.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ya(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(b=e.style[n],e.style[n]=r,r=ya(e,n)||r,b?e.style[n]=b:js(e,n)),_=[i,r],K1(_),i=_[0],r=_[1],g=i.match(Yl)||[],D=r.match(Yl)||[],D.length){for(;x=Yl.exec(r);)y=x[0],U=r.substring(p,x.index),M?M=(M+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(M=1),y!==(b=g[d++]||"")&&(v=parseFloat(b)||0,R=b.substr((v+"").length),y.charAt(1)==="="&&(y=jl(v,y)+R),S=parseFloat(y),P=y.substr((S+"").length),p=Yl.lastIndex-P.length,P||(P=P||Sa.units[n]||R,p===r.length&&(r+=P,f.e+=P)),R!==P&&(v=Ks(e,n,b,P)||0),f._pt={_next:f._pt,p:U||d===1?U:",",s:v,c:S-v,m:M&&M<4||n==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=n==="display"&&r==="none"?lb:ob;return A1.test(r)&&(f.e=0),this._pt=f,f},$S={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gC=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=$S[i]||i,n[1]=$S[r]||r,n.join(" ")},vC=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,l=n.u,u=i._gsap,f,p,d;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],is[f]&&(p=1,f=f==="transformOrigin"?Ji:On),js(i,f);p&&(js(i,On),u&&(u.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Xu(i,1),u.uncache=1,cb(r)))}},dd={clearProps:function(e,n,i,r,l){if(l.data!=="isFromStart"){var u=e._pt=new Qi(e._pt,n,i,0,0,vC);return u.u=r,u.pr=-10,u.tween=l,e._props.push(i),1}}},ku=[1,0,0,1,0,0],pb={},mb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},eM=function(e){var n=ya(e,On);return mb(n)?ku:n.substr(7).match(T1).map(Gn)},x0=function(e,n){var i=e._gsap||Oo(e),r=e.style,l=eM(e),u,f,p,d;return i.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?ku:l):(l===ku&&!e.offsetParent&&e!==Kl&&!i.svg&&(p=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,f=e.nextElementSibling,Kl.appendChild(e)),l=eM(e),p?r.display=p:js(e,"display"),d&&(f?u.insertBefore(e,f):u?u.appendChild(e):Kl.removeChild(e))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Q_=function(e,n,i,r,l,u){var f=e._gsap,p=l||x0(e,!0),d=f.xOrigin||0,_=f.yOrigin||0,x=f.xOffset||0,g=f.yOffset||0,v=p[0],M=p[1],b=p[2],y=p[3],S=p[4],U=p[5],P=n.split(" "),R=parseFloat(P[0])||0,D=parseFloat(P[1])||0,O,C,T,N;i?p!==ku&&(C=v*y-M*b)&&(T=R*(y/C)+D*(-b/C)+(b*U-y*S)/C,N=R*(-M/C)+D*(v/C)-(v*U-M*S)/C,R=T,D=N):(O=hb(e),R=O.x+(~P[0].indexOf("%")?R/100*O.width:R),D=O.y+(~(P[1]||P[0]).indexOf("%")?D/100*O.height:D)),r||r!==!1&&f.smooth?(S=R-d,U=D-_,f.xOffset=x+(S*v+U*b)-S,f.yOffset=g+(S*M+U*y)-U):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=D,f.smooth=!!r,f.origin=n,f.originIsAbsolute=!!i,e.style[Ji]="0px 0px",u&&(Gs(u,f,"xOrigin",d,R),Gs(u,f,"yOrigin",_,D),Gs(u,f,"xOffset",x,f.xOffset),Gs(u,f,"yOffset",g,f.yOffset)),e.setAttribute("data-svg-origin",R+" "+D)},Xu=function(e,n){var i=e._gsap||new J1(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,l=i.scaleX<0,u="px",f="deg",p=getComputedStyle(e),d=ya(e,Ji)||"0",_,x,g,v,M,b,y,S,U,P,R,D,O,C,T,N,I,H,G,ie,re,Z,B,V,Q,de,k,z,J,be,Re,Pe;return _=x=g=b=y=S=U=P=R=0,v=M=1,i.svg=!!(e.getCTM&&db(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[On]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[On]!=="none"?p[On]:"")),r.scale=r.rotate=r.translate="none"),C=x0(e,i.svg),i.svg&&(i.uncache?(Q=e.getBBox(),d=i.xOrigin-Q.x+"px "+(i.yOrigin-Q.y)+"px",V=""):V=!n&&e.getAttribute("data-svg-origin"),Q_(e,V||d,!!V||i.originIsAbsolute,i.smooth!==!1,C)),D=i.xOrigin||0,O=i.yOrigin||0,C!==ku&&(H=C[0],G=C[1],ie=C[2],re=C[3],_=Z=C[4],x=B=C[5],C.length===6?(v=Math.sqrt(H*H+G*G),M=Math.sqrt(re*re+ie*ie),b=H||G?Al(G,H)*Eo:0,U=ie||re?Al(ie,re)*Eo+b:0,U&&(M*=Math.abs(Math.cos(U*Ql))),i.svg&&(_-=D-(D*H+O*ie),x-=O-(D*G+O*re))):(Pe=C[6],be=C[7],k=C[8],z=C[9],J=C[10],Re=C[11],_=C[12],x=C[13],g=C[14],T=Al(Pe,J),y=T*Eo,T&&(N=Math.cos(-T),I=Math.sin(-T),V=Z*N+k*I,Q=B*N+z*I,de=Pe*N+J*I,k=Z*-I+k*N,z=B*-I+z*N,J=Pe*-I+J*N,Re=be*-I+Re*N,Z=V,B=Q,Pe=de),T=Al(-ie,J),S=T*Eo,T&&(N=Math.cos(-T),I=Math.sin(-T),V=H*N-k*I,Q=G*N-z*I,de=ie*N-J*I,Re=re*I+Re*N,H=V,G=Q,ie=de),T=Al(G,H),b=T*Eo,T&&(N=Math.cos(T),I=Math.sin(T),V=H*N+G*I,Q=Z*N+B*I,G=G*N-H*I,B=B*N-Z*I,H=V,Z=Q),y&&Math.abs(y)+Math.abs(b)>359.9&&(y=b=0,S=180-S),v=Gn(Math.sqrt(H*H+G*G+ie*ie)),M=Gn(Math.sqrt(B*B+Pe*Pe)),T=Al(Z,B),U=Math.abs(T)>2e-4?T*Eo:0,R=Re?1/(Re<0?-Re:Re):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!mb(ya(e,On)),V&&e.setAttribute("transform",V))),Math.abs(U)>90&&Math.abs(U)<270&&(l?(v*=-1,U+=b<=0?180:-180,b+=b<=0?180:-180):(M*=-1,U+=U<=0?180:-180)),n=n||i.uncache,i.x=_-((i.xPercent=_&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-_)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=x-((i.yPercent=x&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-x)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=g+u,i.scaleX=Gn(v),i.scaleY=Gn(M),i.rotation=Gn(b)+f,i.rotationX=Gn(y)+f,i.rotationY=Gn(S)+f,i.skewX=U+f,i.skewY=P+f,i.transformPerspective=R+u,(i.zOrigin=parseFloat(d.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Ji]=pd(d)),i.xOffset=i.yOffset=0,i.force3D=Sa.force3D,i.renderTransform=i.svg?yC:fb?_b:xC,i.uncache=0,i},pd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jm=function(e,n,i){var r=Ti(n);return Gn(parseFloat(n)+parseFloat(Ks(e,"x",i+"px",r)))+r},xC=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,_b(e,n)},vo="0deg",su="0px",xo=") ",_b=function(e,n){var i=n||this,r=i.xPercent,l=i.yPercent,u=i.x,f=i.y,p=i.z,d=i.rotation,_=i.rotationY,x=i.rotationX,g=i.skewX,v=i.skewY,M=i.scaleX,b=i.scaleY,y=i.transformPerspective,S=i.force3D,U=i.target,P=i.zOrigin,R="",D=S==="auto"&&e&&e!==1||S===!0;if(P&&(x!==vo||_!==vo)){var O=parseFloat(_)*Ql,C=Math.sin(O),T=Math.cos(O),N;O=parseFloat(x)*Ql,N=Math.cos(O),u=Jm(U,u,C*N*-P),f=Jm(U,f,-Math.sin(O)*-P),p=Jm(U,p,T*N*-P+P)}y!==su&&(R+="perspective("+y+xo),(r||l)&&(R+="translate("+r+"%, "+l+"%) "),(D||u!==su||f!==su||p!==su)&&(R+=p!==su||D?"translate3d("+u+", "+f+", "+p+") ":"translate("+u+", "+f+xo),d!==vo&&(R+="rotate("+d+xo),_!==vo&&(R+="rotateY("+_+xo),x!==vo&&(R+="rotateX("+x+xo),(g!==vo||v!==vo)&&(R+="skew("+g+", "+v+xo),(M!==1||b!==1)&&(R+="scale("+M+", "+b+xo),U.style[On]=R||"translate(0, 0)"},yC=function(e,n){var i=n||this,r=i.xPercent,l=i.yPercent,u=i.x,f=i.y,p=i.rotation,d=i.skewX,_=i.skewY,x=i.scaleX,g=i.scaleY,v=i.target,M=i.xOrigin,b=i.yOrigin,y=i.xOffset,S=i.yOffset,U=i.forceCSS,P=parseFloat(u),R=parseFloat(f),D,O,C,T,N;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Ql,d*=Ql,D=Math.cos(p)*x,O=Math.sin(p)*x,C=Math.sin(p-d)*-g,T=Math.cos(p-d)*g,d&&(_*=Ql,N=Math.tan(d-_),N=Math.sqrt(1+N*N),C*=N,T*=N,_&&(N=Math.tan(_),N=Math.sqrt(1+N*N),D*=N,O*=N)),D=Gn(D),O=Gn(O),C=Gn(C),T=Gn(T)):(D=x,T=g,O=C=0),(P&&!~(u+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(P=Ks(v,"x",u,"px"),R=Ks(v,"y",f,"px")),(M||b||y||S)&&(P=Gn(P+M-(M*D+b*C)+y),R=Gn(R+b-(M*O+b*T)+S)),(r||l)&&(N=v.getBBox(),P=Gn(P+r/100*N.width),R=Gn(R+l/100*N.height)),N="matrix("+D+","+O+","+C+","+T+","+P+","+R+")",v.setAttribute("transform",N),U&&(v.style[On]=N)},SC=function(e,n,i,r,l){var u=360,f=ui(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?Eo:1),d=p-r,_=r+d+"deg",x,g;return f&&(x=l.split("_")[1],x==="short"&&(d%=u,d!==d%(u/2)&&(d+=d<0?u:-u)),x==="cw"&&d<0?d=(d+u*ZS)%u-~~(d/u)*u:x==="ccw"&&d>0&&(d=(d-u*ZS)%u-~~(d/u)*u)),e._pt=g=new Qi(e._pt,n,i,r,d,iC),g.e=_,g.u="deg",e._props.push(i),g},tM=function(e,n){for(var i in n)e[i]=n[i];return e},MC=function(e,n,i){var r=tM({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,p,d,_,x,g,v,M;r.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),u[On]=n,f=Xu(i,1),js(i,On),i.setAttribute("transform",d)):(d=getComputedStyle(i)[On],u[On]=n,f=Xu(i,1),u[On]=d);for(p in is)d=r[p],_=f[p],d!==_&&l.indexOf(p)<0&&(v=Ti(d),M=Ti(_),x=v!==M?Ks(i,p,d,M):parseFloat(d),g=parseFloat(_),e._pt=new Qi(e._pt,f,p,x,g-x,Z_),e._pt.u=M||0,e._props.push(p));tM(f,r)};Ki("padding,margin,Width,Radius",function(o,e){var n="Top",i="Right",r="Bottom",l="Left",u=(e<3?[n,i,r,l]:[n+l,n+i,r+i,r+l]).map(function(f){return e<2?o+f:"border"+f+o});dd[e>1?"border"+o:o]=function(f,p,d,_,x){var g,v;if(arguments.length<4)return g=u.map(function(M){return Zr(f,M,d)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(_+"").split(" "),v={},u.forEach(function(M,b){return v[M]=g[b]=g[b]||g[(b-1)/2|0]}),f.init(p,v,x)}});var gb={name:"css",register:K_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,l){var u=this._props,f=e.style,p=i.vars.startAt,d,_,x,g,v,M,b,y,S,U,P,R,D,O,C,T,N;_0||K_(),this.styles=this.styles||ub(e),T=this.styles.props,this.tween=i;for(b in n)if(b!=="autoRound"&&(_=n[b],!(ma[b]&&$1(b,n,i,r,e,l)))){if(v=typeof _,M=dd[b],v==="function"&&(_=_.call(i,r,e,l),v=typeof _),v==="string"&&~_.indexOf("random(")&&(_=Hu(_)),M)M(this,e,b,_,i)&&(C=1);else if(b.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(b)+"").trim(),_+="",Ys.lastIndex=0,Ys.test(d)||(y=Ti(d),S=Ti(_),S?y!==S&&(d=Ks(e,b,d,S)+S):y&&(_+=y)),this.add(f,"setProperty",d,_,r,l,0,0,b),u.push(b),T.push(b,0,f[b]);else if(v!=="undefined"){if(p&&b in p?(d=typeof p[b]=="function"?p[b].call(i,r,e,l):p[b],ui(d)&&~d.indexOf("random(")&&(d=Hu(d)),Ti(d+"")||d==="auto"||(d+=Sa.units[b]||Ti(Zr(e,b))||""),(d+"").charAt(1)==="="&&(d=Zr(e,b))):d=Zr(e,b),g=parseFloat(d),U=v==="string"&&_.charAt(1)==="="&&_.substr(0,2),U&&(_=_.substr(2)),x=parseFloat(_),b in pr&&(b==="autoAlpha"&&(g===1&&Zr(e,"visibility")==="hidden"&&x&&(g=0),T.push("visibility",0,f.visibility),Gs(this,f,"visibility",g?"inherit":"hidden",x?"inherit":"hidden",!x)),b!=="scale"&&b!=="transform"&&(b=pr[b],~b.indexOf(",")&&(b=b.split(",")[0]))),P=b in is,P){if(this.styles.save(b),N=_,v==="string"&&_.substring(0,6)==="var(--"){if(_=ya(e,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=_,_=ya(e,"perspective"),I?e.style.perspective=I:js(e,"perspective")}x=parseFloat(_)}if(R||(D=e._gsap,D.renderTransform&&!n.parseTransform||Xu(e,n.parseTransform),O=n.smoothOrigin!==!1&&D.smooth,R=this._pt=new Qi(this._pt,f,On,0,1,D.renderTransform,D,0,-1),R.dep=1),b==="scale")this._pt=new Qi(this._pt,D,"scaleY",D.scaleY,(U?jl(D.scaleY,U+x):x)-D.scaleY||0,Z_),this._pt.u=0,u.push("scaleY",b),b+="X";else if(b==="transformOrigin"){T.push(Ji,0,f[Ji]),_=gC(_),D.svg?Q_(e,_,0,O,0,this):(S=parseFloat(_.split(" ")[2])||0,S!==D.zOrigin&&Gs(this,D,"zOrigin",D.zOrigin,S),Gs(this,f,b,pd(d),pd(_)));continue}else if(b==="svgOrigin"){Q_(e,_,1,O,0,this);continue}else if(b in pb){SC(this,D,b,g,U?jl(g,U+_):_);continue}else if(b==="smoothOrigin"){Gs(this,D,"smooth",D.smooth,_);continue}else if(b==="force3D"){D[b]=_;continue}else if(b==="transform"){MC(this,_,e);continue}}else b in f||(b=cc(b)||b);if(P||(x||x===0)&&(g||g===0)&&!nC.test(_)&&b in f)y=(d+"").substr((g+"").length),x||(x=0),S=Ti(_)||(b in Sa.units?Sa.units[b]:y),y!==S&&(g=Ks(e,b,d,S)),this._pt=new Qi(this._pt,P?D:f,b,g,(U?jl(g,U+x):x)-g,!P&&(S==="px"||b==="zIndex")&&n.autoRound!==!1?sC:Z_),this._pt.u=S||0,P&&N!==_?(this._pt.b=d,this._pt.e=N,this._pt.r=rC):y!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=aC);else if(b in f)_C.call(this,e,b,d,U?U+_:_);else if(b in e)this.add(e,b,d||e[b],U?U+_:_,r,l);else if(b!=="parseTransform"){s0(b,_);continue}P||(b in f?T.push(b,0,f[b]):typeof e[b]=="function"?T.push(b,2,e[b]()):T.push(b,1,d||e[b])),u.push(b)}}C&&rb(this)},render:function(e,n){if(n.tween._time||!g0())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:Zr,aliases:pr,getSetter:function(e,n,i){var r=pr[n];return r&&r.indexOf(",")<0&&(n=r),n in is&&n!==Ji&&(e._gsap.x||Zr(e,"x"))?i&&qS===i?n==="scale"?uC:cC:(qS=i||{})&&(n==="scale"?fC:hC):e.style&&!i0(e.style[n])?oC:~n.indexOf("-")?lC:p0(e,n)},core:{_removeProperty:js,_getMatrix:x0}};ta.utils.checkPrefix=cc;ta.core.getStyleSaver=ub;(function(o,e,n,i){var r=Ki(o+","+e+","+n,function(l){is[l]=1});Ki(e,function(l){Sa.units[l]="deg",pb[l]=1}),pr[r[13]]=o+","+e,Ki(i,function(l){var u=l.split(":");pr[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ki("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Sa.units[o]="px"});ta.registerPlugin(gb);var zs=ta.registerPlugin(gb)||ta;zs.core.Tween;function bC(o,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}function EC(o,e,n){return e&&bC(o.prototype,e),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _i,Kh,va,Vs,ks,Jl,vb,To,$l,xb,Qr,er,yb,Sb=function(){return _i||typeof window<"u"&&(_i=window.gsap)&&_i.registerPlugin&&_i},Mb=1,Zl=[],Nt=[],vr=[],Cu=Date.now,J_=function(e,n){return n},TC=function(){var e=$l.core,n=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,Nt),r.push.apply(r,vr),Nt=i,vr=r,J_=function(u,f){return n[u](f)}},qs=function(e,n){return~vr.indexOf(e)&&vr[vr.indexOf(e)+1][n]},wu=function(e){return!!~xb.indexOf(e)},Li=function(e,n,i,r,l){return e.addEventListener(n,i,{passive:r!==!1,capture:!!l})},Ui=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},uh="scrollLeft",fh="scrollTop",$_=function(){return Qr&&Qr.isPressed||Nt.cache++},md=function(e,n){var i=function r(l){if(l||l===0){Mb&&(va.history.scrollRestoration="manual");var u=Qr&&Qr.isPressed;l=r.v=Math.round(l)||(Qr&&Qr.iOS?1:0),e(l),r.cacheID=Nt.cache,u&&J_("ss",l)}else(n||Nt.cache!==r.cacheID||J_("ref"))&&(r.cacheID=Nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Fi={s:uh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:md(function(o){return arguments.length?va.scrollTo(o,ti.sc()):va.pageXOffset||Vs[uh]||ks[uh]||Jl[uh]||0})},ti={s:fh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fi,sc:md(function(o){return arguments.length?va.scrollTo(Fi.sc(),o):va.pageYOffset||Vs[fh]||ks[fh]||Jl[fh]||0})},qi=function(e,n){return(n&&n._ctx&&n._ctx.selector||_i.utils.toArray)(e)[0]||(typeof e=="string"&&_i.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},AC=function(e,n){for(var i=n.length;i--;)if(n[i]===e||n[i].contains(e))return!0;return!1},Qs=function(e,n){var i=n.s,r=n.sc;wu(e)&&(e=Vs.scrollingElement||ks);var l=Nt.indexOf(e),u=r===ti.sc?1:2;!~l&&(l=Nt.push(e)-1),Nt[l+u]||Li(e,"scroll",$_);var f=Nt[l+u],p=f||(Nt[l+u]=md(qs(e,i),!0)||(wu(e)?r:md(function(d){return arguments.length?e[i]=d:e[i]})));return p.target=e,f||(p.smooth=_i.getProperty(e,"scrollBehavior")==="smooth"),p},eg=function(e,n,i){var r=e,l=e,u=Cu(),f=u,p=n||50,d=Math.max(500,p*3),_=function(M,b){var y=Cu();b||y-u>p?(l=r,r=M,f=u,u=y):i?r+=M:r=l+(M-l)/(y-f)*(u-f)},x=function(){l=r=i?0:r,f=u=0},g=function(M){var b=f,y=l,S=Cu();return(M||M===0)&&M!==r&&_(M),u===f||S-f>d?0:(r+(i?y:-y))/((i?S:u)-b)*1e3};return{update:_,reset:x,getVelocity:g}},ou=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},nM=function(e){var n=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(i)?n:i},bb=function(){$l=_i.core.globals().ScrollTrigger,$l&&$l.core&&TC()},Eb=function(e){return _i=e||Sb(),!Kh&&_i&&typeof document<"u"&&document.body&&(va=window,Vs=document,ks=Vs.documentElement,Jl=Vs.body,xb=[va,Vs,ks,Jl],_i.utils.clamp,yb=_i.core.context||function(){},To="onpointerenter"in Jl?"pointer":"mouse",vb=Vn.isTouch=va.matchMedia&&va.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in va||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=Vn.eventTypes=("ontouchstart"in ks?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ks?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mb=0},500),Kh=1),$l||bb(),Kh};Fi.op=ti;Nt.cache=0;var Vn=(function(){function o(n){this.init(n)}var e=o.prototype;return e.init=function(i){Kh||Eb(_i)||console.warn("Please gsap.registerPlugin(Observer)"),$l||bb();var r=i.tolerance,l=i.dragMinimum,u=i.type,f=i.target,p=i.lineHeight,d=i.debounce,_=i.preventDefault,x=i.onStop,g=i.onStopDelay,v=i.ignore,M=i.wheelSpeed,b=i.event,y=i.onDragStart,S=i.onDragEnd,U=i.onDrag,P=i.onPress,R=i.onRelease,D=i.onRight,O=i.onLeft,C=i.onUp,T=i.onDown,N=i.onChangeX,I=i.onChangeY,H=i.onChange,G=i.onToggleX,ie=i.onToggleY,re=i.onHover,Z=i.onHoverEnd,B=i.onMove,V=i.ignoreCheck,Q=i.isNormalizer,de=i.onGestureStart,k=i.onGestureEnd,z=i.onWheel,J=i.onEnable,be=i.onDisable,Re=i.onClick,Pe=i.scrollSpeed,te=i.capture,xe=i.allowClicks,Se=i.lockAxis,Be=i.onLockAxis;this.target=f=qi(f)||ks,this.vars=i,v&&(v=_i.utils.toArray(v)),r=r||1e-9,l=l||0,M=M||1,Pe=Pe||1,u=u||"wheel,touch,pointer",d=d!==!1,p||(p=parseFloat(va.getComputedStyle(Jl).lineHeight)||22);var at,qe,Et,Ye,rt,ht,ut,fe=this,It=0,Yt=0,en=i.passive||!_&&i.passive!==!1,pt=Qs(f,Fi),qt=Qs(f,ti),j=pt(),zt=qt(),dt=~u.indexOf("touch")&&!~u.indexOf("pointer")&&er[0]==="pointerdown",F=wu(f),A=f.ownerDocument||Vs,$=[0,0,0],ae=[0,0,0],pe=0,Le=function(){return pe=Cu()},De=function(Ee,ot){return(fe.event=Ee)&&v&&AC(Ee.target,v)||ot&&dt&&Ee.pointerType!=="touch"||V&&V(Ee,ot)},ge=function(){fe._vx.reset(),fe._vy.reset(),qe.pause(),x&&x(fe)},me=function(){var Ee=fe.deltaX=nM($),ot=fe.deltaY=nM(ae),we=Math.abs(Ee)>=r,st=Math.abs(ot)>=r;H&&(we||st)&&H(fe,Ee,ot,$,ae),we&&(D&&fe.deltaX>0&&D(fe),O&&fe.deltaX<0&&O(fe),N&&N(fe),G&&fe.deltaX<0!=It<0&&G(fe),It=fe.deltaX,$[0]=$[1]=$[2]=0),st&&(T&&fe.deltaY>0&&T(fe),C&&fe.deltaY<0&&C(fe),I&&I(fe),ie&&fe.deltaY<0!=Yt<0&&ie(fe),Yt=fe.deltaY,ae[0]=ae[1]=ae[2]=0),(Ye||Et)&&(B&&B(fe),Et&&(y&&Et===1&&y(fe),U&&U(fe),Et=0),Ye=!1),ht&&!(ht=!1)&&Be&&Be(fe),rt&&(z(fe),rt=!1),at=0},Oe=function(Ee,ot,we){$[we]+=Ee,ae[we]+=ot,fe._vx.update(Ee),fe._vy.update(ot),d?at||(at=requestAnimationFrame(me)):me()},ke=function(Ee,ot){Se&&!ut&&(fe.axis=ut=Math.abs(Ee)>Math.abs(ot)?"x":"y",ht=!0),ut!=="y"&&($[2]+=Ee,fe._vx.update(Ee,!0)),ut!=="x"&&(ae[2]+=ot,fe._vy.update(ot,!0)),d?at||(at=requestAnimationFrame(me)):me()},Fe=function(Ee){if(!De(Ee,1)){Ee=ou(Ee,_);var ot=Ee.clientX,we=Ee.clientY,st=ot-fe.x,Ke=we-fe.y,mt=fe.isDragging;fe.x=ot,fe.y=we,(mt||(st||Ke)&&(Math.abs(fe.startX-ot)>=l||Math.abs(fe.startY-we)>=l))&&(Et||(Et=mt?2:1),mt||(fe.isDragging=!0),ke(st,Ke))}},ze=fe.onPress=function(Ce){De(Ce,1)||Ce&&Ce.button||(fe.axis=ut=null,qe.pause(),fe.isPressed=!0,Ce=ou(Ce),It=Yt=0,fe.startX=fe.x=Ce.clientX,fe.startY=fe.y=Ce.clientY,fe._vx.reset(),fe._vy.reset(),Li(Q?f:A,er[1],Fe,en,!0),fe.deltaX=fe.deltaY=0,P&&P(fe))},Ue=fe.onRelease=function(Ce){if(!De(Ce,1)){Ui(Q?f:A,er[1],Fe,!0);var Ee=!isNaN(fe.y-fe.startY),ot=fe.isDragging,we=ot&&(Math.abs(fe.x-fe.startX)>3||Math.abs(fe.y-fe.startY)>3),st=ou(Ce);!we&&Ee&&(fe._vx.reset(),fe._vy.reset(),_&&xe&&_i.delayedCall(.08,function(){if(Cu()-pe>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(A.createEvent){var Ke=A.createEvent("MouseEvents");Ke.initMouseEvent("click",!0,!0,va,1,st.screenX,st.screenY,st.clientX,st.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Ke)}}})),fe.isDragging=fe.isGesturing=fe.isPressed=!1,x&&ot&&!Q&&qe.restart(!0),Et&&me(),S&&ot&&S(fe),R&&R(fe,we)}},et=function(Ee){return Ee.touches&&Ee.touches.length>1&&(fe.isGesturing=!0)&&de(Ee,fe.isDragging)},nt=function(){return(fe.isGesturing=!1)||k(fe)},Y=function(Ee){if(!De(Ee)){var ot=pt(),we=qt();Oe((ot-j)*Pe,(we-zt)*Pe,1),j=ot,zt=we,x&&qe.restart(!0)}},Ne=function(Ee){if(!De(Ee)){Ee=ou(Ee,_),z&&(rt=!0);var ot=(Ee.deltaMode===1?p:Ee.deltaMode===2?va.innerHeight:1)*M;Oe(Ee.deltaX*ot,Ee.deltaY*ot,0),x&&!Q&&qe.restart(!0)}},ve=function(Ee){if(!De(Ee)){var ot=Ee.clientX,we=Ee.clientY,st=ot-fe.x,Ke=we-fe.y;fe.x=ot,fe.y=we,Ye=!0,x&&qe.restart(!0),(st||Ke)&&ke(st,Ke)}},Ie=function(Ee){fe.event=Ee,re(fe)},He=function(Ee){fe.event=Ee,Z(fe)},Ae=function(Ee){return De(Ee)||ou(Ee,_)&&Re(fe)};qe=fe._dc=_i.delayedCall(g||.25,ge).pause(),fe.deltaX=fe.deltaY=0,fe._vx=eg(0,50,!0),fe._vy=eg(0,50,!0),fe.scrollX=pt,fe.scrollY=qt,fe.isDragging=fe.isGesturing=fe.isPressed=!1,yb(this),fe.enable=function(Ce){return fe.isEnabled||(Li(F?A:f,"scroll",$_),u.indexOf("scroll")>=0&&Li(F?A:f,"scroll",Y,en,te),u.indexOf("wheel")>=0&&Li(f,"wheel",Ne,en,te),(u.indexOf("touch")>=0&&vb||u.indexOf("pointer")>=0)&&(Li(f,er[0],ze,en,te),Li(A,er[2],Ue),Li(A,er[3],Ue),xe&&Li(f,"click",Le,!0,!0),Re&&Li(f,"click",Ae),de&&Li(A,"gesturestart",et),k&&Li(A,"gestureend",nt),re&&Li(f,To+"enter",Ie),Z&&Li(f,To+"leave",He),B&&Li(f,To+"move",ve)),fe.isEnabled=!0,fe.isDragging=fe.isGesturing=fe.isPressed=Ye=Et=!1,fe._vx.reset(),fe._vy.reset(),j=pt(),zt=qt(),Ce&&Ce.type&&ze(Ce),J&&J(fe)),fe},fe.disable=function(){fe.isEnabled&&(Zl.filter(function(Ce){return Ce!==fe&&wu(Ce.target)}).length||Ui(F?A:f,"scroll",$_),fe.isPressed&&(fe._vx.reset(),fe._vy.reset(),Ui(Q?f:A,er[1],Fe,!0)),Ui(F?A:f,"scroll",Y,te),Ui(f,"wheel",Ne,te),Ui(f,er[0],ze,te),Ui(A,er[2],Ue),Ui(A,er[3],Ue),Ui(f,"click",Le,!0),Ui(f,"click",Ae),Ui(A,"gesturestart",et),Ui(A,"gestureend",nt),Ui(f,To+"enter",Ie),Ui(f,To+"leave",He),Ui(f,To+"move",ve),fe.isEnabled=fe.isPressed=fe.isDragging=!1,be&&be(fe))},fe.kill=fe.revert=function(){fe.disable();var Ce=Zl.indexOf(fe);Ce>=0&&Zl.splice(Ce,1),Qr===fe&&(Qr=0)},Zl.push(fe),Q&&wu(f)&&(Qr=fe),fe.enable(b)},EC(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Vn.version="3.15.0";Vn.create=function(o){return new Vn(o)};Vn.register=Eb;Vn.getAll=function(){return Zl.slice()};Vn.getById=function(o){return Zl.filter(function(e){return e.vars.id===o})[0]};Sb()&&_i.registerPlugin(Vn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $e,Xl,Dt,cn,_a,nn,y0,_d,Wu,Du,vu,hh,bi,wd,tg,Ii,iM,aM,Wl,Tb,$m,Ab,Pi,ng,Rb,Cb,Is,ig,S0,ec,M0,Nu,ag,e_,dh=1,Ei=Date.now,t_=Ei(),Va=0,xu=0,rM=function(e,n,i){var r=pa(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+n+"Clamp"]=r,r?e.substr(6,e.length-7):e},sM=function(e,n){return n&&(!pa(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},RC=function o(){return xu&&requestAnimationFrame(o)},oM=function(){return wd=1},lM=function(){return wd=0},fr=function(e){return e},yu=function(e){return Math.round(e*1e5)/1e5||0},wb=function(){return typeof window<"u"},Db=function(){return $e||wb()&&($e=window.gsap)&&$e.registerPlugin&&$e},Go=function(e){return!!~y0.indexOf(e)},Nb=function(e){return(e==="Height"?M0:Dt["inner"+e])||_a["client"+e]||nn["client"+e]},Ub=function(e){return qs(e,"getBoundingClientRect")||(Go(e)?function(){return td.width=Dt.innerWidth,td.height=M0,td}:function(){return jr(e)})},CC=function(e,n,i){var r=i.d,l=i.d2,u=i.a;return(u=qs(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(n?Nb(l):e["client"+l])||0}},wC=function(e,n){return!n||~vr.indexOf(e)?Ub(e):function(){return td}},mr=function(e,n){var i=n.s,r=n.d2,l=n.d,u=n.a;return Math.max(0,(i="scroll"+r)&&(u=qs(e,i))?u()-Ub(e)()[l]:Go(e)?(_a[i]||nn[i])-Nb(r):e[i]-e["offset"+r])},ph=function(e,n){for(var i=0;i<Wl.length;i+=3)(!n||~n.indexOf(Wl[i+1]))&&e(Wl[i],Wl[i+1],Wl[i+2])},pa=function(e){return typeof e=="string"},Ai=function(e){return typeof e=="function"},Su=function(e){return typeof e=="number"},Ao=function(e){return typeof e=="object"},lu=function(e,n,i){return e&&e.progress(n?0:1)&&i&&e.pause()},Rl=function(e,n,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e,i)}):n(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Cl=Math.abs,Lb="left",Ob="top",b0="right",E0="bottom",Fo="width",Bo="height",Uu="Right",Lu="Left",Ou="Top",Pu="Bottom",jn="padding",Ia="margin",uc="Width",T0="Height",ei="px",za=function(e){return Dt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},DC=function(e){var n=za(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},cM=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},jr=function(e,n){var i=n&&za(e)[tg]!=="matrix(1, 0, 0, 1, 0, 0)"&&$e.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},gd=function(e,n){var i=n.d2;return e["offset"+i]||e["client"+i]||0},Pb=function(e){var n=[],i=e.labels,r=e.duration(),l;for(l in i)n.push(i[l]/r);return n},NC=function(e){return function(n){return $e.utils.snap(Pb(e),n)}},A0=function(e){var n=$e.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,l){return r-l});return i?function(r,l,u){u===void 0&&(u=.001);var f;if(!l)return n(r);if(l>0){for(r-=u,f=0;f<i.length;f++)if(i[f]>=r)return i[f];return i[f-1]}else for(f=i.length,r+=u;f--;)if(i[f]<=r)return i[f];return i[0]}:function(r,l,u){u===void 0&&(u=.001);var f=n(r);return!l||Math.abs(f-r)<u||f-r<0==l<0?f:n(l<0?r-e:r+e)}},UC=function(e){return function(n,i){return A0(Pb(e))(n,i.direction)}},mh=function(e,n,i,r){return i.split(",").forEach(function(l){return e(n,l,r)})},ci=function(e,n,i,r,l){return e.addEventListener(n,i,{passive:!r,capture:!!l})},li=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},_h=function(e,n,i){i=i&&i.wheelHandler,i&&(e(n,"wheel",i),e(n,"touchmove",i))},uM={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},gh={toggleActions:"play",anticipatePin:0},vd={top:0,left:0,center:.5,bottom:1,right:1},Qh=function(e,n){if(pa(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=n/100),e=e.substr(0,i-1)),e=r+(e in vd?vd[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},vh=function(e,n,i,r,l,u,f,p){var d=l.startColor,_=l.endColor,x=l.fontSize,g=l.indent,v=l.fontWeight,M=cn.createElement("div"),b=Go(i)||qs(i,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,S=b?nn:i.tagName==="IFRAME"?i.contentDocument.body:i,U=e.indexOf("start")!==-1,P=U?d:_,R="border-color:"+P+";font-size:"+x+";color:"+P+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return R+="position:"+((y||p)&&b?"fixed;":"absolute;"),(y||p||!b)&&(R+=(r===ti?b0:E0)+":"+(u+parseFloat(g))+"px;"),f&&(R+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),M._isStart=U,M.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),M.style.cssText=R,M.innerText=n||n===0?e+"-"+n:e,S.children[0]?S.insertBefore(M,S.children[0]):S.appendChild(M),M._offset=M["offset"+r.op.d2],Jh(M,0,r,U),M},Jh=function(e,n,i,r){var l={display:"block"},u=i[r?"os2":"p2"],f=i[r?"p2":"os2"];e._isFlipped=r,l[i.a+"Percent"]=r?-100:0,l[i.a]=r?"1px":0,l["border"+u+uc]=1,l["border"+f+uc]=0,l[i.p]=n+"px",$e.set(e,l)},wt=[],rg={},Yu,fM=function(){return Ei()-Va>34&&(Yu||(Yu=requestAnimationFrame($r)))},wl=function(){(!Pi||!Pi.isPressed||Pi.startX>nn.clientWidth)&&(Nt.cache++,Pi?Yu||(Yu=requestAnimationFrame($r)):$r(),Va||ko("scrollStart"),Va=Ei())},n_=function(){Cb=Dt.innerWidth,Rb=Dt.innerHeight},Mu=function(e){Nt.cache++,(e===!0||!bi&&!Ab&&!cn.fullscreenElement&&!cn.webkitFullscreenElement&&(!ng||Cb!==Dt.innerWidth||Math.abs(Dt.innerHeight-Rb)>Dt.innerHeight*.25))&&_d.restart(!0)},Vo={},LC=[],Ib=function o(){return li(Pt,"scrollEnd",o)||No(!0)},ko=function(e){return Vo[e]&&Vo[e].map(function(n){return n()})||LC},da=[],zb=function(e){for(var n=0;n<da.length;n+=5)(!e||da[n+4]&&da[n+4].query===e)&&(da[n].style.cssText=da[n+1],da[n].getBBox&&da[n].setAttribute("transform",da[n+2]||""),da[n+3].uncache=1)},Fb=function(){return Nt.forEach(function(e){return Ai(e)&&++e.cacheID&&(e.rec=e())})},R0=function(e,n){var i;for(Ii=0;Ii<wt.length;Ii++)i=wt[Ii],i&&(!n||i._ctx===n)&&(e?i.kill(1):i.revert(!0,!0));Nu=!0,n&&zb(n),n||ko("revert")},Bb=function(e,n){Nt.cache++,(n||!zi)&&Nt.forEach(function(i){return Ai(i)&&i.cacheID++&&(i.rec=0)}),pa(e)&&(Dt.history.scrollRestoration=S0=e)},zi,Ho=0,hM,OC=function(){if(hM!==Ho){var e=hM=Ho;requestAnimationFrame(function(){return e===Ho&&No(!0)})}},Hb=function(){nn.appendChild(ec),M0=!Pi&&ec.offsetHeight||Dt.innerHeight,nn.removeChild(ec)},dM=function(e){return Wu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},No=function(e,n){if(_a=cn.documentElement,nn=cn.body,y0=[Dt,cn,_a,nn],Va&&!e&&!Nu){ci(Pt,"scrollEnd",Ib);return}Hb(),zi=Pt.isRefreshing=!0,Nu||Fb();var i=ko("refreshInit");Tb&&Pt.sort(),n||R0(),Nt.forEach(function(r){Ai(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),wt.slice(0).forEach(function(r){return r.refresh()}),Nu=!1,wt.forEach(function(r){if(r._subPinOffset&&r.pin){var l=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[l];r.revert(!0,1),r.adjustPinSpacing(r.pin[l]-u),r.refresh()}}),ag=1,dM(!0),wt.forEach(function(r){var l=mr(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>l,f=r._startClamp&&r.start>=l;(u||f)&&r.setPositions(f?l-1:r.start,u?Math.max(f?l:r.start+1,l):r.end,!0)}),dM(!1),ag=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),Nt.forEach(function(r){Ai(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Bb(S0,1),_d.pause(),Ho++,zi=2,$r(2),wt.forEach(function(r){return Ai(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zi=Pt.isRefreshing=!1,ko("refresh")},sg=0,$h=1,Iu,$r=function(e){if(e===2||!zi&&!Nu){Pt.isUpdating=!0,Iu&&Iu.update(0);var n=wt.length,i=Ei(),r=i-t_>=50,l=n&&wt[0].scroll();if($h=sg>l?-1:1,zi||(sg=l),r&&(Va&&!wd&&i-Va>200&&(Va=0,ko("scrollEnd")),vu=t_,t_=i),$h<0){for(Ii=n;Ii-- >0;)wt[Ii]&&wt[Ii].update(0,r);$h=1}else for(Ii=0;Ii<n;Ii++)wt[Ii]&&wt[Ii].update(0,r);Pt.isUpdating=!1}Yu=0},og=[Lb,Ob,E0,b0,Ia+Pu,Ia+Uu,Ia+Ou,Ia+Lu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ed=og.concat([Fo,Bo,"boxSizing","max"+uc,"max"+T0,"position",Ia,jn,jn+Ou,jn+Uu,jn+Pu,jn+Lu]),PC=function(e,n,i){tc(i);var r=e._gsap;if(r.spacerIsNative)tc(r.spacerState);else if(e._gsap.swappedIn){var l=n.parentNode;l&&(l.insertBefore(e,n),l.removeChild(n))}e._gsap.swappedIn=!1},i_=function(e,n,i,r){if(!e._gsap.swappedIn){for(var l=og.length,u=n.style,f=e.style,p;l--;)p=og[l],u[p]=i[p];u.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(u.display="inline-block"),f[E0]=f[b0]="auto",u.flexBasis=i.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[Fo]=gd(e,Fi)+ei,u[Bo]=gd(e,ti)+ei,u[jn]=f[Ia]=f[Ob]=f[Lb]="0",tc(r),f[Fo]=f["max"+uc]=i[Fo],f[Bo]=f["max"+T0]=i[Bo],f[jn]=i[jn],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},IC=/([A-Z])/g,tc=function(e){if(e){var n=e.t.style,i=e.length,r=0,l,u;for((e.t._gsap||$e.core.getCache(e.t)).uncache=1;r<i;r+=2)u=e[r+1],l=e[r],u?n[l]=u:n[l]&&n.removeProperty(l.replace(IC,"-$1").toLowerCase())}},xh=function(e){for(var n=ed.length,i=e.style,r=[],l=0;l<n;l++)r.push(ed[l],i[ed[l]]);return r.t=e,r},zC=function(e,n,i){for(var r=[],l=e.length,u=i?8:0,f;u<l;u+=2)f=e[u],r.push(f,f in n?n[f]:e[u+1]);return r.t=e.t,r},td={left:0,top:0},pM=function(e,n,i,r,l,u,f,p,d,_,x,g,v,M){Ai(e)&&(e=e(p)),pa(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Qh("0"+e.substr(3),i):0));var b=v?v.time():0,y,S,U;if(v&&v.seek(0),isNaN(e)||(e=+e),Su(e))v&&(e=$e.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,g,e)),f&&Jh(f,i,r,!0);else{Ai(n)&&(n=n(p));var P=(e||"0").split(" "),R,D,O,C;U=qi(n,p)||nn,R=jr(U)||{},(!R||!R.left&&!R.top)&&za(U).display==="none"&&(C=U.style.display,U.style.display="block",R=jr(U),C?U.style.display=C:U.style.removeProperty("display")),D=Qh(P[0],R[r.d]),O=Qh(P[1]||"0",i),e=R[r.p]-d[r.p]-_+D+l-O,f&&Jh(f,O,r,i-O<20||f._isStart&&O>20),i-=i-O}if(M&&(p[M]=e||-.001,e<0&&(e=0)),u){var T=e+i,N=u._isStart;y="scroll"+r.d2,Jh(u,T,r,N&&T>20||!N&&(x?Math.max(nn[y],_a[y]):u.parentNode[y])<=T+1),x&&(d=jr(f),x&&(u.style[r.op.p]=d[r.op.p]-r.op.m-u._offset+ei))}return v&&U&&(y=jr(U),v.seek(g),S=jr(U),v._caScrollDist=y[r.p]-S[r.p],e=e/v._caScrollDist*g),v&&v.seek(b),v?e:Math.round(e)},FC=/(webkit|moz|length|cssText|inset)/i,mM=function(e,n,i,r){if(e.parentNode!==n){var l=e.style,u,f;if(n===nn){e._stOrig=l.cssText,f=za(e);for(u in f)!+u&&!FC.test(u)&&f[u]&&typeof l[u]=="string"&&u!=="0"&&(l[u]=f[u]);l.top=i,l.left=r}else l.cssText=e._stOrig;$e.core.getCache(e).uncache=1,n.appendChild(e)}},Gb=function(e,n,i){var r=n,l=r;return function(u){var f=Math.round(e());return f!==r&&f!==l&&Math.abs(f-r)>3&&Math.abs(f-l)>3&&(u=f,i&&i()),l=r,r=Math.round(u),r}},yh=function(e,n,i){var r={};r[n.p]="+="+i,$e.set(e,r)},_M=function(e,n){var i=Qs(e,n),r="_scroll"+n.p2,l=function u(f,p,d,_,x){var g=u.tween,v=p.onComplete,M={};d=d||i();var b=Gb(i,d,function(){g.kill(),u.tween=0});return x=_&&x||0,_=_||f-d,g&&g.kill(),p[r]=f,p.inherit=!1,p.modifiers=M,M[r]=function(){return b(d+_*g.ratio+x*g.ratio*g.ratio)},p.onUpdate=function(){Nt.cache++,u.tween&&$r()},p.onComplete=function(){u.tween=0,v&&v.call(g)},g=u.tween=$e.to(e,p),g};return e[r]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},ci(e,"wheel",i.wheelHandler),Pt.isTouch&&ci(e,"touchmove",i.wheelHandler),l},Pt=(function(){function o(n,i){Xl||o.register($e)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ig(this),this.init(n,i)}var e=o.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xu){this.update=this.refresh=this.kill=fr;return}i=cM(pa(i)||Su(i)||i.nodeType?{trigger:i}:i,gh);var l=i,u=l.onUpdate,f=l.toggleClass,p=l.id,d=l.onToggle,_=l.onRefresh,x=l.scrub,g=l.trigger,v=l.pin,M=l.pinSpacing,b=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,U=l.onSnapComplete,P=l.once,R=l.snap,D=l.pinReparent,O=l.pinSpacer,C=l.containerAnimation,T=l.fastScrollEnd,N=l.preventOverlaps,I=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Fi:ti,H=!x&&x!==0,G=qi(i.scroller||Dt),ie=$e.core.getCache(G),re=Go(G),Z=("pinType"in i?i.pinType:qs(G,"pinType")||re&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],V=H&&i.toggleActions.split(" "),Q="markers"in i?i.markers:gh.markers,de=re?0:parseFloat(za(G)["border"+I.p2+uc])||0,k=this,z=i.onRefreshInit&&function(){return i.onRefreshInit(k)},J=CC(G,re,I),be=wC(G,re),Re=0,Pe=0,te=0,xe=Qs(G,I),Se,Be,at,qe,Et,Ye,rt,ht,ut,fe,It,Yt,en,pt,qt,j,zt,dt,F,A,$,ae,pe,Le,De,ge,me,Oe,ke,Fe,ze,Ue,et,nt,Y,Ne,ve,Ie,He;if(k._startClamp=k._endClamp=!1,k._dir=I,y*=45,k.scroller=G,k.scroll=C?C.time.bind(C):xe,qe=xe(),k.vars=i,r=r||i.animation,"refreshPriority"in i&&(Tb=1,i.refreshPriority===-9999&&(Iu=k)),ie.tweenScroll=ie.tweenScroll||{top:_M(G,ti),left:_M(G,Fi)},k.tweenTo=Se=ie.tweenScroll[I.p],k.scrubDuration=function(we){et=Su(we)&&we,et?Ue?Ue.duration(we):Ue=$e.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return S&&S(k)}}):(Ue&&Ue.progress(1).kill(),Ue=0)},r&&(r.vars.lazy=!1,r._initted&&!k.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),k.animation=r.pause(),r.scrollTrigger=k,k.scrubDuration(x),Fe=0,p||(p=r.vars.id)),R&&((!Ao(R)||R.push)&&(R={snapTo:R}),"scrollBehavior"in nn.style&&$e.set(re?[nn,_a]:G,{scrollBehavior:"auto"}),Nt.forEach(function(we){return Ai(we)&&we.target===(re?cn.scrollingElement||_a:G)&&(we.smooth=!1)}),at=Ai(R.snapTo)?R.snapTo:R.snapTo==="labels"?NC(r):R.snapTo==="labelsDirectional"?UC(r):R.directional!==!1?function(we,st){return A0(R.snapTo)(we,Ei()-Pe<500?0:st.direction)}:$e.utils.snap(R.snapTo),nt=R.duration||{min:.1,max:2},nt=Ao(nt)?Du(nt.min,nt.max):Du(nt,nt),Y=$e.delayedCall(R.delay||et/2||.1,function(){var we=xe(),st=Ei()-Pe<500,Ke=Se.tween;if((st||Math.abs(k.getVelocity())<10)&&!Ke&&!wd&&Re!==we){var mt=(we-Ye)/pt,Rn=r&&!H?r.totalProgress():mt,Tt=st?0:(Rn-ze)/(Ei()-vu)*1e3||0,fn=$e.utils.clamp(-mt,1-mt,Cl(Tt/2)*Tt/.185),_n=mt+(R.inertia===!1?0:fn),xt,yt,St=R,Qn=St.onStart,hn=St.onInterrupt,ai=St.onComplete;if(xt=at(_n,k),Su(xt)||(xt=_n),yt=Math.max(0,Math.round(Ye+xt*pt)),we<=rt&&we>=Ye&&yt!==we){if(Ke&&!Ke._initted&&Ke.data<=Cl(yt-we))return;R.inertia===!1&&(fn=xt-mt),Se(yt,{duration:nt(Cl(Math.max(Cl(_n-Rn),Cl(xt-Rn))*.185/Tt/.05||0)),ease:R.ease||"power3",data:Cl(yt-we),onInterrupt:function(){return Y.restart(!0)&&hn&&Rl(k,hn)},onComplete:function(){k.update(),Re=xe(),r&&!H&&(Ue?Ue.resetTo("totalProgress",xt,r._tTime/r._tDur):r.progress(xt)),Fe=ze=r&&!H?r.totalProgress():k.progress,U&&U(k),ai&&Rl(k,ai)}},we,fn*pt,yt-we-fn*pt),Qn&&Rl(k,Qn,Se.tween)}}else k.isActive&&Re!==we&&Y.restart(!0)}).pause()),p&&(rg[p]=k),g=k.trigger=qi(g||v!==!0&&v),He=g&&g._gsap&&g._gsap.stRevert,He&&(He=He(k)),v=v===!0?g:qi(v),pa(f)&&(f={targets:g,className:f}),v&&(M===!1||M===Ia||(M=!M&&v.parentNode&&v.parentNode.style&&za(v.parentNode).display==="flex"?!1:jn),k.pin=v,Be=$e.core.getCache(v),Be.spacer?qt=Be.pinState:(O&&(O=qi(O),O&&!O.nodeType&&(O=O.current||O.nativeElement),Be.spacerIsNative=!!O,O&&(Be.spacerState=xh(O))),Be.spacer=dt=O||cn.createElement("div"),dt.classList.add("pin-spacer"),p&&dt.classList.add("pin-spacer-"+p),Be.pinState=qt=xh(v)),i.force3D!==!1&&$e.set(v,{force3D:!0}),k.spacer=dt=Be.spacer,ke=za(v),Le=ke[M+I.os2],A=$e.getProperty(v),$=$e.quickSetter(v,I.a,ei),i_(v,dt,ke),zt=xh(v)),Q){Yt=Ao(Q)?cM(Q,uM):uM,fe=vh("scroller-start",p,G,I,Yt,0),It=vh("scroller-end",p,G,I,Yt,0,fe),F=fe["offset"+I.op.d2];var Ae=qi(qs(G,"content")||G);ht=this.markerStart=vh("start",p,Ae,I,Yt,F,0,C),ut=this.markerEnd=vh("end",p,Ae,I,Yt,F,0,C),C&&(Ie=$e.quickSetter([ht,ut],I.a,ei)),!Z&&!(vr.length&&qs(G,"fixedMarkers")===!0)&&(DC(re?nn:G),$e.set([fe,It],{force3D:!0}),ge=$e.quickSetter(fe,I.a,ei),Oe=$e.quickSetter(It,I.a,ei))}if(C){var Ce=C.vars.onUpdate,Ee=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){k.update(0,0,1),Ce&&Ce.apply(C,Ee||[])})}if(k.previous=function(){return wt[wt.indexOf(k)-1]},k.next=function(){return wt[wt.indexOf(k)+1]},k.revert=function(we,st){if(!st)return k.kill(!0);var Ke=we!==!1||!k.enabled,mt=bi;Ke!==k.isReverted&&(Ke&&(Ne=Math.max(xe(),k.scroll.rec||0),te=k.progress,ve=r&&r.progress()),ht&&[ht,ut,fe,It].forEach(function(Rn){return Rn.style.display=Ke?"none":"block"}),Ke&&(bi=k,k.update(Ke)),v&&(!D||!k.isActive)&&(Ke?PC(v,dt,qt):i_(v,dt,za(v),De)),Ke||k.update(Ke),bi=mt,k.isReverted=Ke)},k.refresh=function(we,st,Ke,mt){if(!((bi||!k.enabled)&&!st)){if(v&&we&&Va){ci(o,"scrollEnd",Ib);return}!zi&&z&&z(k),bi=k,Se.tween&&!Ke&&(Se.tween.kill(),Se.tween=0),Ue&&Ue.pause(),b&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Xe){return Xe.vars.immediateRender&&Xe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),k.isReverted||k.revert(!0,!0),k._subPinOffset=!1;var Rn=J(),Tt=be(),fn=C?C.duration():mr(G,I),_n=pt<=.01||!pt,xt=0,yt=mt||0,St=Ao(Ke)?Ke.end:i.end,Qn=i.endTrigger||g,hn=Ao(Ke)?Ke.start:i.start||(i.start===0||!g?0:v?"0 0":"0 100%"),ai=k.pinnedContainer=i.pinnedContainer&&qi(i.pinnedContainer,k),ri=g&&Math.max(0,wt.indexOf(k))||0,Sn=ri,Mn,bn,fi,Ea,En,Rt,Di,w,K,ce,ne,se,Ge;for(Q&&Ao(Ke)&&(se=$e.getProperty(fe,I.p),Ge=$e.getProperty(It,I.p));Sn-- >0;)Rt=wt[Sn],Rt.end||Rt.refresh(0,1)||(bi=k),Di=Rt.pin,Di&&(Di===g||Di===v||Di===ai)&&!Rt.isReverted&&(ce||(ce=[]),ce.unshift(Rt),Rt.revert(!0,!0)),Rt!==wt[Sn]&&(ri--,Sn--);for(Ai(hn)&&(hn=hn(k)),hn=rM(hn,"start",k),Ye=pM(hn,g,Rn,I,xe(),ht,fe,k,Tt,de,Z,fn,C,k._startClamp&&"_startClamp")||(v?-.001:0),Ai(St)&&(St=St(k)),pa(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(pa(hn)?hn.split(" ")[0]:"")+St:(xt=Qh(St.substr(2),Rn),St=pa(hn)?hn:(C?$e.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,Ye):Ye)+xt,Qn=g)),St=rM(St,"end",k),rt=Math.max(Ye,pM(St||(Qn?"100% 0":fn),Qn,Rn,I,xe()+xt,ut,It,k,Tt,de,Z,fn,C,k._endClamp&&"_endClamp"))||-.001,xt=0,Sn=ri;Sn--;)Rt=wt[Sn]||{},Di=Rt.pin,Di&&Rt.start-Rt._pinPush<=Ye&&!C&&Rt.end>0&&(Mn=Rt.end-(k._startClamp?Math.max(0,Rt.start):Rt.start),(Di===g&&Rt.start-Rt._pinPush<Ye||Di===ai)&&isNaN(hn)&&(xt+=Mn*(1-Rt.progress)),Di===v&&(yt+=Mn));if(Ye+=xt,rt+=xt,k._startClamp&&(k._startClamp+=xt),k._endClamp&&!zi&&(k._endClamp=rt||-.001,rt=Math.min(rt,mr(G,I))),pt=rt-Ye||(Ye-=.01)&&.001,_n&&(te=$e.utils.clamp(0,1,$e.utils.normalize(Ye,rt,Ne))),k._pinPush=yt,ht&&xt&&(Mn={},Mn[I.a]="+="+xt,ai&&(Mn[I.p]="-="+xe()),$e.set([ht,ut],Mn)),v&&!(ag&&k.end>=mr(G,I)))Mn=za(v),Ea=I===ti,fi=xe(),ae=parseFloat(A(I.a))+yt,!fn&&rt>1&&(ne=(re?cn.scrollingElement||_a:G).style,ne={style:ne,value:ne["overflow"+I.a.toUpperCase()]},re&&za(nn)["overflow"+I.a.toUpperCase()]!=="scroll"&&(ne.style["overflow"+I.a.toUpperCase()]="scroll")),i_(v,dt,Mn),zt=xh(v),bn=jr(v,!0),w=Z&&Qs(G,Ea?Fi:ti)(),M?(De=[M+I.os2,pt+yt+ei],De.t=dt,Sn=M===jn?gd(v,I)+pt+yt:0,Sn&&(De.push(I.d,Sn+ei),dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Sn+ei)),tc(De),ai&&wt.forEach(function(Xe){Xe.pin===ai&&Xe.vars.pinSpacing!==!1&&(Xe._subPinOffset=!0)}),Z&&xe(Ne)):(Sn=gd(v,I),Sn&&dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Sn+ei)),Z&&(En={top:bn.top+(Ea?fi-Ye:w)+ei,left:bn.left+(Ea?w:fi-Ye)+ei,boxSizing:"border-box",position:"fixed"},En[Fo]=En["max"+uc]=Math.ceil(bn.width)+ei,En[Bo]=En["max"+T0]=Math.ceil(bn.height)+ei,En[Ia]=En[Ia+Ou]=En[Ia+Uu]=En[Ia+Pu]=En[Ia+Lu]="0",En[jn]=Mn[jn],En[jn+Ou]=Mn[jn+Ou],En[jn+Uu]=Mn[jn+Uu],En[jn+Pu]=Mn[jn+Pu],En[jn+Lu]=Mn[jn+Lu],j=zC(qt,En,D),zi&&xe(0)),r?(K=r._initted,$m(1),r.render(r.duration(),!0,!0),pe=A(I.a)-ae+pt+yt,me=Math.abs(pt-pe)>1,Z&&me&&j.splice(j.length-2,2),r.render(0,!0,!0),K||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),$m(0)):pe=pt,ne&&(ne.value?ne.style["overflow"+I.a.toUpperCase()]=ne.value:ne.style.removeProperty("overflow-"+I.a));else if(g&&xe()&&!C)for(bn=g.parentNode;bn&&bn!==nn;)bn._pinOffset&&(Ye-=bn._pinOffset,rt-=bn._pinOffset),bn=bn.parentNode;ce&&ce.forEach(function(Xe){return Xe.revert(!1,!0)}),k.start=Ye,k.end=rt,qe=Et=zi?Ne:xe(),!C&&!zi&&(qe<Ne&&xe(Ne),k.scroll.rec=0),k.revert(!1,!0),Pe=Ei(),Y&&(Re=-1,Y.restart(!0)),bi=0,r&&H&&(r._initted||ve)&&r.progress()!==ve&&r.progress(ve||0,!0).render(r.time(),!0,!0),(_n||te!==k.progress||C||b||r&&!r._initted)&&(r&&!H&&(r._initted||te||r.vars.immediateRender!==!1)&&r.totalProgress(C&&Ye<-.001&&!te?$e.utils.normalize(Ye,rt,0):te,!0),k.progress=_n||(qe-Ye)/pt===te?0:te),v&&M&&(dt._pinOffset=Math.round(k.progress*pe)),Ue&&Ue.invalidate(),isNaN(se)||(se-=$e.getProperty(fe,I.p),Ge-=$e.getProperty(It,I.p),yh(fe,I,se),yh(ht,I,se-(mt||0)),yh(It,I,Ge),yh(ut,I,Ge-(mt||0))),_n&&!zi&&k.update(),_&&!zi&&!en&&(en=!0,_(k),en=!1)}},k.getVelocity=function(){return(xe()-Et)/(Ei()-vu)*1e3||0},k.endAnimation=function(){lu(k.callbackAnimation),r&&(Ue?Ue.progress(1):r.paused()?H||lu(r,k.direction<0,1):lu(r,r.reversed()))},k.labelToScroll=function(we){return r&&r.labels&&(Ye||k.refresh()||Ye)+r.labels[we]/r.duration()*pt||0},k.getTrailing=function(we){var st=wt.indexOf(k),Ke=k.direction>0?wt.slice(0,st).reverse():wt.slice(st+1);return(pa(we)?Ke.filter(function(mt){return mt.vars.preventOverlaps===we}):Ke).filter(function(mt){return k.direction>0?mt.end<=Ye:mt.start>=rt})},k.update=function(we,st,Ke){if(!(C&&!Ke&&!we)){var mt=zi===!0?Ne:k.scroll(),Rn=we?0:(mt-Ye)/pt,Tt=Rn<0?0:Rn>1?1:Rn||0,fn=k.progress,_n,xt,yt,St,Qn,hn,ai,ri;if(st&&(Et=qe,qe=C?xe():mt,R&&(ze=Fe,Fe=r&&!H?r.totalProgress():Tt)),y&&v&&!bi&&!dh&&Va&&(!Tt&&Ye<mt+(mt-Et)/(Ei()-vu)*y?Tt=1e-4:Tt===1&&rt>mt+(mt-Et)/(Ei()-vu)*y&&(Tt=.9999)),Tt!==fn&&k.enabled){if(_n=k.isActive=!!Tt&&Tt<1,xt=!!fn&&fn<1,hn=_n!==xt,Qn=hn||!!Tt!=!!fn,k.direction=Tt>fn?1:-1,k.progress=Tt,Qn&&!bi&&(yt=Tt&&!fn?0:Tt===1?1:fn===1?2:3,H&&(St=!hn&&V[yt+1]!=="none"&&V[yt+1]||V[yt],ri=r&&(St==="complete"||St==="reset"||St in r))),N&&(hn||ri)&&(ri||x||!r)&&(Ai(N)?N(k):k.getTrailing(N).forEach(function(fi){return fi.endAnimation()})),H||(Ue&&!bi&&!dh?(Ue._dp._time-Ue._start!==Ue._time&&Ue.render(Ue._dp._time-Ue._start),Ue.resetTo?Ue.resetTo("totalProgress",Tt,r._tTime/r._tDur):(Ue.vars.totalProgress=Tt,Ue.invalidate().restart())):r&&r.totalProgress(Tt,!!(bi&&(Pe||we)))),v){if(we&&M&&(dt.style[M+I.os2]=Le),!Z)$(yu(ae+pe*Tt));else if(Qn){if(ai=!we&&Tt>fn&&rt+1>mt&&mt+1>=mr(G,I),D)if(!we&&(_n||ai)){var Sn=jr(v,!0),Mn=mt-Ye;mM(v,nn,Sn.top+(I===ti?Mn:0)+ei,Sn.left+(I===ti?0:Mn)+ei)}else mM(v,dt);tc(_n||ai?j:zt),me&&Tt<1&&_n||$(ae+(Tt===1&&!ai?pe:0))}}R&&!Se.tween&&!bi&&!dh&&Y.restart(!0),f&&(hn||P&&Tt&&(Tt<1||!e_))&&Wu(f.targets).forEach(function(fi){return fi.classList[_n||P?"add":"remove"](f.className)}),u&&!H&&!we&&u(k),Qn&&!bi?(H&&(ri&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),u&&u(k)),(hn||!e_)&&(d&&hn&&Rl(k,d),B[yt]&&Rl(k,B[yt]),P&&(Tt===1?k.kill(!1,1):B[yt]=0),hn||(yt=Tt===1?1:3,B[yt]&&Rl(k,B[yt]))),T&&!_n&&Math.abs(k.getVelocity())>(Su(T)?T:2500)&&(lu(k.callbackAnimation),Ue?Ue.progress(1):lu(r,St==="reverse"?1:!Tt,1))):H&&u&&!bi&&u(k)}if(Oe){var bn=C?mt/C.duration()*(C._caScrollDist||0):mt;ge(bn+(fe._isFlipped?1:0)),Oe(bn)}Ie&&Ie(-mt/C.duration()*(C._caScrollDist||0))}},k.enable=function(we,st){k.enabled||(k.enabled=!0,ci(G,"resize",Mu),re||ci(G,"scroll",wl),z&&ci(o,"refreshInit",z),we!==!1&&(k.progress=te=0,qe=Et=Re=xe()),st!==!1&&k.refresh())},k.getTween=function(we){return we&&Se?Se.tween:Ue},k.setPositions=function(we,st,Ke,mt){if(C){var Rn=C.scrollTrigger,Tt=C.duration(),fn=Rn.end-Rn.start;we=Rn.start+fn*we/Tt,st=Rn.start+fn*st/Tt}k.refresh(!1,!1,{start:sM(we,Ke&&!!k._startClamp),end:sM(st,Ke&&!!k._endClamp)},mt),k.update()},k.adjustPinSpacing=function(we){if(De&&we){var st=De.indexOf(I.d)+1;De[st]=parseFloat(De[st])+we+ei,De[1]=parseFloat(De[1])+we+ei,tc(De)}},k.disable=function(we,st){if(we!==!1&&k.revert(!0,!0),k.enabled&&(k.enabled=k.isActive=!1,st||Ue&&Ue.pause(),Ne=0,Be&&(Be.uncache=1),z&&li(o,"refreshInit",z),Y&&(Y.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!re)){for(var Ke=wt.length;Ke--;)if(wt[Ke].scroller===G&&wt[Ke]!==k)return;li(G,"resize",Mu),re||li(G,"scroll",wl)}},k.kill=function(we,st){k.disable(we,st),Ue&&!st&&Ue.kill(),p&&delete rg[p];var Ke=wt.indexOf(k);Ke>=0&&wt.splice(Ke,1),Ke===Ii&&$h>0&&Ii--,Ke=0,wt.forEach(function(mt){return mt.scroller===k.scroller&&(Ke=1)}),Ke||zi||(k.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),st||r.kill()),ht&&[ht,ut,fe,It].forEach(function(mt){return mt.parentNode&&mt.parentNode.removeChild(mt)}),Iu===k&&(Iu=0),v&&(Be&&(Be.uncache=1),Ke=0,wt.forEach(function(mt){return mt.pin===v&&Ke++}),Ke||(Be.spacer=0)),i.onKill&&i.onKill(k)},wt.push(k),k.enable(!1,!1),He&&He(k),r&&r.add&&!pt){var ot=k.update;k.update=function(){k.update=ot,Nt.cache++,Ye||rt||k.refresh()},$e.delayedCall(.01,k.update),pt=.01,Ye=rt=0}else k.refresh();v&&OC()},o.register=function(i){return Xl||($e=i||Db(),wb()&&window.document&&o.enable(),Xl=xu),Xl},o.defaults=function(i){if(i)for(var r in i)gh[r]=i[r];return gh},o.disable=function(i,r){xu=0,wt.forEach(function(u){return u[r?"kill":"disable"](i)}),li(Dt,"wheel",wl),li(cn,"scroll",wl),clearInterval(hh),li(cn,"touchcancel",fr),li(nn,"touchstart",fr),mh(li,cn,"pointerdown,touchstart,mousedown",oM),mh(li,cn,"pointerup,touchend,mouseup",lM),_d.kill(),ph(li);for(var l=0;l<Nt.length;l+=3)_h(li,Nt[l],Nt[l+1]),_h(li,Nt[l],Nt[l+2])},o.enable=function(){if(Dt=window,cn=document,_a=cn.documentElement,nn=cn.body,$e){if(Wu=$e.utils.toArray,Du=$e.utils.clamp,ig=$e.core.context||fr,$m=$e.core.suppressOverwrites||fr,S0=Dt.history.scrollRestoration||"auto",sg=Dt.pageYOffset||0,$e.core.globals("ScrollTrigger",o),nn){xu=1,ec=document.createElement("div"),ec.style.height="100vh",ec.style.position="absolute",Hb(),RC(),Vn.register($e),o.isTouch=Vn.isTouch,Is=Vn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ng=Vn.isTouch===1,ci(Dt,"wheel",wl),y0=[Dt,cn,_a,nn],$e.matchMedia?(o.matchMedia=function(_){var x=$e.matchMedia(),g;for(g in _)x.add(g,_[g]);return x},$e.addEventListener("matchMediaInit",function(){Fb(),R0()}),$e.addEventListener("matchMediaRevert",function(){return zb()}),$e.addEventListener("matchMedia",function(){No(0,1),ko("matchMedia")}),$e.matchMedia().add("(orientation: portrait)",function(){return n_(),n_})):console.warn("Requires GSAP 3.11.0 or later"),n_(),ci(cn,"scroll",wl);var i=nn.hasAttribute("style"),r=nn.style,l=r.borderTopStyle,u=$e.core.Animation.prototype,f,p;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",f=jr(nn),ti.m=Math.round(f.top+ti.sc())||0,Fi.m=Math.round(f.left+Fi.sc())||0,l?r.borderTopStyle=l:r.removeProperty("border-top-style"),i||(nn.setAttribute("style",""),nn.removeAttribute("style")),hh=setInterval(fM,250),$e.delayedCall(.5,function(){return dh=0}),ci(cn,"touchcancel",fr),ci(nn,"touchstart",fr),mh(ci,cn,"pointerdown,touchstart,mousedown",oM),mh(ci,cn,"pointerup,touchend,mouseup",lM),tg=$e.utils.checkPrefix("transform"),ed.push(tg),Xl=Ei(),_d=$e.delayedCall(.2,No).pause(),Wl=[cn,"visibilitychange",function(){var _=Dt.innerWidth,x=Dt.innerHeight;cn.hidden?(iM=_,aM=x):(iM!==_||aM!==x)&&Mu()},cn,"DOMContentLoaded",No,Dt,"load",No,Dt,"resize",Mu],ph(ci),wt.forEach(function(_){return _.enable(0,1)}),p=0;p<Nt.length;p+=3)_h(li,Nt[p],Nt[p+1]),_h(li,Nt[p],Nt[p+2])}else if(cn){var d=function _(){o.enable(),cn.removeEventListener("DOMContentLoaded",_)};cn.addEventListener("DOMContentLoaded",d)}}},o.config=function(i){"limitCallbacks"in i&&(e_=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(hh)||(hh=r)&&setInterval(fM,r),"ignoreMobileResize"in i&&(ng=o.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(ph(li)||ph(ci,i.autoRefreshEvents||"none"),Ab=(i.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(i,r){var l=qi(i),u=Nt.indexOf(l),f=Go(l);~u&&Nt.splice(u,f?6:2),r&&(f?vr.unshift(Dt,r,nn,r,_a,r):vr.unshift(l,r))},o.clearMatchMedia=function(i){wt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},o.isInViewport=function(i,r,l){var u=(pa(i)?qi(i):i).getBoundingClientRect(),f=u[l?Fo:Bo]*r||0;return l?u.right-f>0&&u.left+f<Dt.innerWidth:u.bottom-f>0&&u.top+f<Dt.innerHeight},o.positionInViewport=function(i,r,l){pa(i)&&(i=qi(i));var u=i.getBoundingClientRect(),f=u[l?Fo:Bo],p=r==null?f/2:r in vd?vd[r]*f:~r.indexOf("%")?parseFloat(r)*f/100:parseFloat(r)||0;return l?(u.left+p)/Dt.innerWidth:(u.top+p)/Dt.innerHeight},o.killAll=function(i){if(wt.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var r=Vo.killAll||[];Vo={},r.forEach(function(l){return l()})}},o})();Pt.version="3.15.0";Pt.saveStyles=function(o){return o?Wu(o).forEach(function(e){if(e&&e.style){var n=da.indexOf(e);n>=0&&da.splice(n,5),da.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),$e.core.getCache(e),ig())}}):da};Pt.revert=function(o,e){return R0(!o,e)};Pt.create=function(o,e){return new Pt(o,e)};Pt.refresh=function(o){return o?Mu(!0):(Xl||Pt.register())&&No(!0)};Pt.update=function(o){return++Nt.cache&&$r(o===!0?2:0)};Pt.clearScrollMemory=Bb;Pt.maxScroll=function(o,e){return mr(o,e?Fi:ti)};Pt.getScrollFunc=function(o,e){return Qs(qi(o),e?Fi:ti)};Pt.getById=function(o){return rg[o]};Pt.getAll=function(){return wt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Pt.isScrolling=function(){return!!Va};Pt.snapDirectional=A0;Pt.addEventListener=function(o,e){var n=Vo[o]||(Vo[o]=[]);~n.indexOf(e)||n.push(e)};Pt.removeEventListener=function(o,e){var n=Vo[o],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)};Pt.batch=function(o,e){var n=[],i={},r=e.interval||.016,l=e.batchMax||1e9,u=function(d,_){var x=[],g=[],v=$e.delayedCall(r,function(){_(x,g),x=[],g=[]}).pause();return function(M){x.length||v.restart(!0),x.push(M.trigger),g.push(M),l<=x.length&&v.progress(1)}},f;for(f in e)i[f]=f.substr(0,2)==="on"&&Ai(e[f])&&f!=="onRefreshInit"?u(f,e[f]):e[f];return Ai(l)&&(l=l(),ci(Pt,"refresh",function(){return l=e.batchMax()})),Wu(o).forEach(function(p){var d={};for(f in i)d[f]=i[f];d.trigger=p,n.push(Pt.create(d))}),n};var gM=function(e,n,i,r){return n>r?e(r):n<0&&e(0),i>r?(r-n)/(i-n):i<0?n/(n-i):1},a_=function o(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Vn.isTouch?" pinch-zoom":""):"none",e===_a&&o(nn,n)},Sh={auto:1,scroll:1},BC=function(e){var n=e.event,i=e.target,r=e.axis,l=(n.changedTouches?n.changedTouches[0]:n).target,u=l._gsap||$e.core.getCache(l),f=Ei(),p;if(!u._isScrollT||f-u._isScrollT>2e3){for(;l&&l!==nn&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(Sh[(p=za(l)).overflowY]||Sh[p.overflowX]));)l=l.parentNode;u._isScroll=l&&l!==i&&!Go(l)&&(Sh[(p=za(l)).overflowY]||Sh[p.overflowX]),u._isScrollT=f}(u._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},Vb=function(e,n,i,r){return Vn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&BC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&ci(cn,Vn.eventTypes[0],xM,!1,!0)},onDisable:function(){return li(cn,Vn.eventTypes[0],xM,!0)}})},HC=/(input|label|select|textarea)/i,vM,xM=function(e){var n=HC.test(e.target.tagName);(n||vM)&&(e._gsapAllow=!0,vM=n)},GC=function(e){Ao(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,i=n.normalizeScrollX,r=n.momentum,l=n.allowNestedScroll,u=n.onRelease,f,p,d=qi(e.target)||_a,_=$e.core.globals().ScrollSmoother,x=_&&_.get(),g=Is&&(e.content&&qi(e.content)||x&&e.content!==!1&&!x.smooth()&&x.content()),v=Qs(d,ti),M=Qs(d,Fi),b=1,y=(Vn.isTouch&&Dt.visualViewport?Dt.visualViewport.scale*Dt.visualViewport.width:Dt.outerWidth)/Dt.innerWidth,S=0,U=Ai(r)?function(){return r(f)}:function(){return r||2.8},P,R,D=Vb(d,e.type,!0,l),O=function(){return R=!1},C=fr,T=fr,N=function(){p=mr(d,ti),T=Du(Is?1:0,p),i&&(C=Du(0,mr(d,Fi))),P=Ho},I=function(){g._gsap.y=yu(parseFloat(g._gsap.y)+v.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},H=function(){if(R){requestAnimationFrame(O);var Q=yu(f.deltaY/2),de=T(v.v-Q);if(g&&de!==v.v+v.offset){v.offset=de-v.v;var k=yu((parseFloat(g&&g._gsap.y)||0)-v.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+k+", 0, 1)",g._gsap.y=k+"px",v.cacheID=Nt.cache,$r()}return!0}v.offset&&I(),R=!0},G,ie,re,Z,B=function(){N(),G.isActive()&&G.vars.scrollY>p&&(v()>p?G.progress(1)&&v(p):G.resetTo("scrollY",p))};return g&&$e.set(g,{y:"+=0"}),e.ignoreCheck=function(V){return Is&&V.type==="touchmove"&&H()||b>1.05&&V.type!=="touchstart"||f.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){R=!1;var V=b;b=yu((Dt.visualViewport&&Dt.visualViewport.scale||1)/y),G.pause(),V!==b&&a_(d,b>1.01?!0:i?!1:"x"),ie=M(),re=v(),N(),P=Ho},e.onRelease=e.onGestureStart=function(V,Q){if(v.offset&&I(),!Q)Z.restart(!0);else{Nt.cache++;var de=U(),k,z;i&&(k=M(),z=k+de*.05*-V.velocityX/.227,de*=gM(M,k,z,mr(d,Fi)),G.vars.scrollX=C(z)),k=v(),z=k+de*.05*-V.velocityY/.227,de*=gM(v,k,z,mr(d,ti)),G.vars.scrollY=T(z),G.invalidate().duration(de).play(.01),(Is&&G.vars.scrollY>=p||k>=p-1)&&$e.to({},{onUpdate:B,duration:de})}u&&u(V)},e.onWheel=function(){G._ts&&G.pause(),Ei()-S>1e3&&(P=0,S=Ei())},e.onChange=function(V,Q,de,k,z){if(Ho!==P&&N(),Q&&i&&M(C(k[2]===Q?ie+(V.startX-V.x):M()+Q-k[1])),de){v.offset&&I();var J=z[2]===de,be=J?re+V.startY-V.y:v()+de-z[1],Re=T(be);J&&be!==Re&&(re+=Re-be),v(Re)}(de||Q)&&$r()},e.onEnable=function(){a_(d,i?!1:"x"),Pt.addEventListener("refresh",B),ci(Dt,"resize",B),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=M.smooth=!1),D.enable()},e.onDisable=function(){a_(d,!0),li(Dt,"resize",B),Pt.removeEventListener("refresh",B),D.kill()},e.lockAxis=e.lockAxis!==!1,f=new Vn(e),f.iOS=Is,Is&&!v()&&v(1),Is&&$e.ticker.add(fr),Z=f._dc,G=$e.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gb(v,v(),function(){return G.pause()})},onUpdate:$r,onComplete:Z.vars.onComplete}),f};Pt.sort=function(o){if(Ai(o))return wt.sort(o);var e=Dt.pageYOffset||0;return Pt.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+Dt.innerHeight}),wt.sort(o||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Pt.observe=function(o){return new Vn(o)};Pt.normalizeScroll=function(o){if(typeof o>"u")return Pi;if(o===!0&&Pi)return Pi.enable();if(o===!1){Pi&&Pi.kill(),Pi=o;return}var e=o instanceof Vn?o:GC(o);return Pi&&Pi.target===e.target&&Pi.kill(),Go(e.target)&&(Pi=e),e};Pt.core={_getVelocityProp:eg,_inputObserver:Vb,_scrollers:Nt,_proxies:vr,bridge:{ss:function(){Va||ko("scrollStart"),Va=Ei()},ref:function(){return bi}}};Db()&&$e.registerPlugin(Pt);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const C0="185",VC=0,yM=1,kC=2,nd=1,XC=2,bu=3,Js=0,$i=1,Kr=2,es=0,nc=1,lg=2,SM=3,MM=4,WC=5,Co=100,YC=101,qC=102,ZC=103,jC=104,KC=200,QC=201,JC=202,$C=203,cg=204,ug=205,e2=206,t2=207,n2=208,i2=209,a2=210,r2=211,s2=212,o2=213,l2=214,fg=0,hg=1,dg=2,fc=3,pg=4,mg=5,_g=6,gg=7,kb=0,c2=1,u2=2,xr=0,Xb=1,Wb=2,Yb=3,qb=4,Zb=5,jb=6,Kb=7,Qb=300,Xo=301,hc=302,r_=303,s_=304,Dd=306,vg=1e3,Jr=1001,xg=1002,gi=1003,f2=1004,Mh=1005,Ri=1006,o_=1007,Uo=1008,Ba=1009,Jb=1010,$b=1011,qu=1012,w0=1013,Mr=1014,_r=1015,as=1016,D0=1017,N0=1018,Zu=1020,eE=35902,tE=35899,nE=1021,iE=1022,nr=1023,rs=1026,Lo=1027,aE=1028,U0=1029,Wo=1030,L0=1031,O0=1033,id=33776,ad=33777,rd=33778,sd=33779,yg=35840,Sg=35841,Mg=35842,bg=35843,Eg=36196,Tg=37492,Ag=37496,Rg=37488,Cg=37489,xd=37490,wg=37491,Dg=37808,Ng=37809,Ug=37810,Lg=37811,Og=37812,Pg=37813,Ig=37814,zg=37815,Fg=37816,Bg=37817,Hg=37818,Gg=37819,Vg=37820,kg=37821,Xg=36492,Wg=36494,Yg=36495,qg=36283,Zg=36284,yd=36285,jg=36286,h2=3200,bM=0,d2=1,Fs="",Pa="srgb",Sd="srgb-linear",Md="linear",un="srgb",Dl=7680,EM=519,p2=512,m2=513,_2=514,P0=515,g2=516,v2=517,I0=518,x2=519,TM=35044,AM="300 es",gr=2e3,bd=2001;function y2(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ed(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function S2(){const o=Ed("canvas");return o.style.display="block",o}const RM={};function CM(...o){const e="THREE."+o.shift();console.log(e,...o)}function rE(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function _t(...o){o=rE(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...o)}}function Wt(...o){o=rE(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...o)}}function ic(...o){const e=o.join(" ");e in RM||(RM[e]=!0,_t(...o))}function M2(o,e,n){return new Promise(function(i,r){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:i()}}setTimeout(l,n)})}const b2={[fg]:hg,[dg]:_g,[pg]:gg,[fc]:mg,[hg]:fg,[_g]:dg,[gg]:pg,[mg]:fc};class Zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,e);e.target=null}}}const Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],l_=Math.PI/180,Kg=180/Math.PI;function Ku(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Si[o&255]+Si[o>>8&255]+Si[o>>16&255]+Si[o>>24&255]+"-"+Si[e&255]+Si[e>>8&255]+"-"+Si[e>>16&15|64]+Si[e>>24&255]+"-"+Si[n&63|128]+Si[n>>8&255]+"-"+Si[n>>16&255]+Si[n>>24&255]+Si[i&255]+Si[i>>8&255]+Si[i>>16&255]+Si[i>>24&255]).toLowerCase()}function Vt(o,e,n){return Math.max(e,Math.min(n,o))}function E2(o,e){return(o%e+e)%e}function c_(o,e,n){return(1-n)*o+n*e}function cu(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const G0=class G0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Vt(this.x,e.x,n.x),this.y=Vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Vt(this.x,e,n),this.y=Vt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*r+e.x,this.y=l*r+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};G0.prototype.isVector2=!0;let $t=G0;class mc{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,l,u,f){let p=i[r+0],d=i[r+1],_=i[r+2],x=i[r+3],g=l[u+0],v=l[u+1],M=l[u+2],b=l[u+3];if(x!==b||p!==g||d!==v||_!==M){let y=p*g+d*v+_*M+x*b;y<0&&(g=-g,v=-v,M=-M,b=-b,y=-y);let S=1-f;if(y<.9995){const U=Math.acos(y),P=Math.sin(U);S=Math.sin(S*U)/P,f=Math.sin(f*U)/P,p=p*S+g*f,d=d*S+v*f,_=_*S+M*f,x=x*S+b*f}else{p=p*S+g*f,d=d*S+v*f,_=_*S+M*f,x=x*S+b*f;const U=1/Math.sqrt(p*p+d*d+_*_+x*x);p*=U,d*=U,_*=U,x*=U}}e[n]=p,e[n+1]=d,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,i,r,l,u){const f=i[r],p=i[r+1],d=i[r+2],_=i[r+3],x=l[u],g=l[u+1],v=l[u+2],M=l[u+3];return e[n]=f*M+_*x+p*v-d*g,e[n+1]=p*M+_*g+d*x-f*v,e[n+2]=d*M+_*v+f*g-p*x,e[n+3]=_*M-f*x-p*g-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,d=f(i/2),_=f(r/2),x=f(l/2),g=p(i/2),v=p(r/2),M=p(l/2);switch(u){case"XYZ":this._x=g*_*x+d*v*M,this._y=d*v*x-g*_*M,this._z=d*_*M+g*v*x,this._w=d*_*x-g*v*M;break;case"YXZ":this._x=g*_*x+d*v*M,this._y=d*v*x-g*_*M,this._z=d*_*M-g*v*x,this._w=d*_*x+g*v*M;break;case"ZXY":this._x=g*_*x-d*v*M,this._y=d*v*x+g*_*M,this._z=d*_*M+g*v*x,this._w=d*_*x-g*v*M;break;case"ZYX":this._x=g*_*x-d*v*M,this._y=d*v*x+g*_*M,this._z=d*_*M-g*v*x,this._w=d*_*x+g*v*M;break;case"YZX":this._x=g*_*x+d*v*M,this._y=d*v*x+g*_*M,this._z=d*_*M-g*v*x,this._w=d*_*x-g*v*M;break;case"XZY":this._x=g*_*x-d*v*M,this._y=d*v*x-g*_*M,this._z=d*_*M+g*v*x,this._w=d*_*x+g*v*M;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],l=n[8],u=n[1],f=n[5],p=n[9],d=n[2],_=n[6],x=n[10],g=i+f+x;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(_-p)*v,this._y=(l-d)*v,this._z=(u-r)*v}else if(i>f&&i>x){const v=2*Math.sqrt(1+i-f-x);this._w=(_-p)/v,this._x=.25*v,this._y=(r+u)/v,this._z=(l+d)/v}else if(f>x){const v=2*Math.sqrt(1+f-i-x);this._w=(l-d)/v,this._x=(r+u)/v,this._y=.25*v,this._z=(p+_)/v}else{const v=2*Math.sqrt(1+x-i-f);this._w=(u-r)/v,this._x=(l+d)/v,this._y=(p+_)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,l=e._z,u=e._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=i*_+u*f+r*d-l*p,this._y=r*_+u*p+l*f-i*d,this._z=l*_+u*d+i*p-r*f,this._w=u*_-i*f-r*p-l*d,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(i=-i,r=-r,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+i*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+i*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const V0=class V0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wM.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wM.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[3]*i+l[6]*r,this.y=l[1]*n+l[4]*i+l[7]*r,this.z=l[2]*n+l[5]*i+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,l=e.elements,u=1/(l[3]*n+l[7]*i+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*i+l[8]*r+l[12])*u,this.y=(l[1]*n+l[5]*i+l[9]*r+l[13])*u,this.z=(l[2]*n+l[6]*i+l[10]*r+l[14])*u,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,l=e.x,u=e.y,f=e.z,p=e.w,d=2*(u*r-f*i),_=2*(f*n-l*r),x=2*(l*i-u*n);return this.x=n+p*d+u*x-f*_,this.y=i+p*_+f*d-l*x,this.z=r+p*x+l*_-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r,this.y=l[1]*n+l[5]*i+l[9]*r,this.z=l[2]*n+l[6]*i+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Vt(this.x,e.x,n.x),this.y=Vt(this.y,e.y,n.y),this.z=Vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Vt(this.x,e,n),this.y=Vt(this.y,e,n),this.z=Vt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=r*p-l*f,this.y=l*u-i*p,this.z=i*f-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return u_.copy(this).projectOnVector(e),this.sub(u_)}reflect(e){return this.sub(u_.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};V0.prototype.isVector3=!0;let le=V0;const u_=new le,wM=new mc,k0=class k0{constructor(e,n,i,r,l,u,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,l,u,f,p,d)}set(e,n,i,r,l,u,f,p,d){const _=this.elements;return _[0]=e,_[1]=r,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=i,_[7]=u,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,l=this.elements,u=i[0],f=i[3],p=i[6],d=i[1],_=i[4],x=i[7],g=i[2],v=i[5],M=i[8],b=r[0],y=r[3],S=r[6],U=r[1],P=r[4],R=r[7],D=r[2],O=r[5],C=r[8];return l[0]=u*b+f*U+p*D,l[3]=u*y+f*P+p*O,l[6]=u*S+f*R+p*C,l[1]=d*b+_*U+x*D,l[4]=d*y+_*P+x*O,l[7]=d*S+_*R+x*C,l[2]=g*b+v*U+M*D,l[5]=g*y+v*P+M*O,l[8]=g*S+v*R+M*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],l=e[3],u=e[4],f=e[5],p=e[6],d=e[7],_=e[8];return n*u*_-n*f*d-i*l*_+i*f*p+r*l*d-r*u*p}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],l=e[3],u=e[4],f=e[5],p=e[6],d=e[7],_=e[8],x=_*u-f*d,g=f*p-_*l,v=d*l-u*p,M=n*x+i*g+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=x*b,e[1]=(r*d-_*i)*b,e[2]=(f*i-r*u)*b,e[3]=g*b,e[4]=(_*n-r*p)*b,e[5]=(r*l-f*n)*b,e[6]=v*b,e[7]=(i*p-d*n)*b,e[8]=(u*n-i*l)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,l,u,f){const p=Math.cos(l),d=Math.sin(l);return this.set(i*p,i*d,-i*(p*u+d*f)+u+e,-r*d,r*p,-r*(-d*u+p*f)+f+n,0,0,1),this}scale(e,n){return ic("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(f_.makeScale(e,n)),this}rotate(e){return ic("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(f_.makeRotation(-e)),this}translate(e,n){return ic("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(f_.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};k0.prototype.isMatrix3=!0;let vt=k0;const f_=new vt,DM=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),NM=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T2(){const o={enabled:!0,workingColorSpace:Sd,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===un&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===un&&(r.r=ac(r.r),r.g=ac(r.g),r.b=ac(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fs?Md:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return ic("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return ic("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Sd]:{primaries:e,whitePoint:i,transfer:Md,toXYZ:DM,fromXYZ:NM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pa},outputColorSpaceConfig:{drawingBufferColorSpace:Pa}},[Pa]:{primaries:e,whitePoint:i,transfer:un,toXYZ:DM,fromXYZ:NM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pa}}}),o}const Gt=T2();function ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ac(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Nl;class A2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nl===void 0&&(Nl=Ed("canvas")),Nl.width=e.width,Nl.height=e.height;const r=Nl.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Nl}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ed("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=ts(l[u]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R2=0;class z0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=Ku(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(h_(r[u].image)):l.push(h_(r[u]))}else l=h_(r);i.url=l}return n||(e.images[this.uuid]=i),i}}function h_(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?A2.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let C2=0;const d_=new le;class Bi extends Zo{constructor(e=Bi.DEFAULT_IMAGE,n=Bi.DEFAULT_MAPPING,i=Jr,r=Jr,l=Ri,u=Uo,f=nr,p=Ba,d=Bi.DEFAULT_ANISOTROPY,_=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=Ku(),this.name="",this.source=new z0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(d_).x}get height(){return this.source.getSize(d_).y}get depth(){return this.source.getSize(d_).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){_t(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){_t(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vg:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case xg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vg:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case xg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bi.DEFAULT_IMAGE=null;Bi.DEFAULT_MAPPING=Qb;Bi.DEFAULT_ANISOTROPY=1;const X0=class X0{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*i+u[8]*r+u[12]*l,this.y=u[1]*n+u[5]*i+u[9]*r+u[13]*l,this.z=u[2]*n+u[6]*i+u[10]*r+u[14]*l,this.w=u[3]*n+u[7]*i+u[11]*r+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,l;const p=e.elements,d=p[0],_=p[4],x=p[8],g=p[1],v=p[5],M=p[9],b=p[2],y=p[6],S=p[10];if(Math.abs(_-g)<.01&&Math.abs(x-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+b)<.1&&Math.abs(M+y)<.1&&Math.abs(d+v+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(d+1)/2,R=(v+1)/2,D=(S+1)/2,O=(_+g)/4,C=(x+b)/4,T=(M+y)/4;return P>R&&P>D?P<.01?(i=0,r=.707106781,l=.707106781):(i=Math.sqrt(P),r=O/i,l=C/i):R>D?R<.01?(i=.707106781,r=0,l=.707106781):(r=Math.sqrt(R),i=O/r,l=T/r):D<.01?(i=.707106781,r=.707106781,l=0):(l=Math.sqrt(D),i=C/l,r=T/l),this.set(i,r,l,n),this}let U=Math.sqrt((y-M)*(y-M)+(x-b)*(x-b)+(g-_)*(g-_));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(x-b)/U,this.z=(g-_)/U,this.w=Math.acos((d+v+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Vt(this.x,e.x,n.x),this.y=Vt(this.y,e.y,n.y),this.z=Vt(this.z,e.z,n.z),this.w=Vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Vt(this.x,e,n),this.y=Vt(this.y,e,n),this.z=Vt(this.z,e,n),this.w=Vt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};X0.prototype.isVector4=!0;let zn=X0;class w2 extends Zo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zn(0,0,e,n),this.scissorTest=!1,this.viewport=new zn(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},l=new Bi(r),u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new z0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends w2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class sE extends Bi{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D2 extends Bi{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=class Td{constructor(e,n,i,r,l,u,f,p,d,_,x,g,v,M,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,l,u,f,p,d,_,x,g,v,M,b,y)}set(e,n,i,r,l,u,f,p,d,_,x,g,v,M,b,y){const S=this.elements;return S[0]=e,S[4]=n,S[8]=i,S[12]=r,S[1]=l,S[5]=u,S[9]=f,S[13]=p,S[2]=d,S[6]=_,S[10]=x,S[14]=g,S[3]=v,S[7]=M,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Td().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ul.setFromMatrixColumn(e,0).length(),l=1/Ul.setFromMatrixColumn(e,1).length(),u=1/Ul.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*l,n[5]=i[5]*l,n[6]=i[6]*l,n[7]=0,n[8]=i[8]*u,n[9]=i[9]*u,n[10]=i[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,l=e.z,u=Math.cos(i),f=Math.sin(i),p=Math.cos(r),d=Math.sin(r),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=u*_,v=u*x,M=f*_,b=f*x;n[0]=p*_,n[4]=-p*x,n[8]=d,n[1]=v+M*d,n[5]=g-b*d,n[9]=-f*p,n[2]=b-g*d,n[6]=M+v*d,n[10]=u*p}else if(e.order==="YXZ"){const g=p*_,v=p*x,M=d*_,b=d*x;n[0]=g+b*f,n[4]=M*f-v,n[8]=u*d,n[1]=u*x,n[5]=u*_,n[9]=-f,n[2]=v*f-M,n[6]=b+g*f,n[10]=u*p}else if(e.order==="ZXY"){const g=p*_,v=p*x,M=d*_,b=d*x;n[0]=g-b*f,n[4]=-u*x,n[8]=M+v*f,n[1]=v+M*f,n[5]=u*_,n[9]=b-g*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const g=u*_,v=u*x,M=f*_,b=f*x;n[0]=p*_,n[4]=M*d-v,n[8]=g*d+b,n[1]=p*x,n[5]=b*d+g,n[9]=v*d-M,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,v=u*d,M=f*p,b=f*d;n[0]=p*_,n[4]=b-g*x,n[8]=M*x+v,n[1]=x,n[5]=u*_,n[9]=-f*_,n[2]=-d*_,n[6]=v*x+M,n[10]=g-b*x}else if(e.order==="XZY"){const g=u*p,v=u*d,M=f*p,b=f*d;n[0]=p*_,n[4]=-x,n[8]=d*_,n[1]=g*x+b,n[5]=u*_,n[9]=v*x-M,n[2]=M*x-v,n[6]=f*_,n[10]=b*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N2,e,U2)}lookAt(e,n,i){const r=this.elements;return fa.subVectors(e,n),fa.lengthSq()===0&&(fa.z=1),fa.normalize(),Ds.crossVectors(i,fa),Ds.lengthSq()===0&&(Math.abs(i.z)===1?fa.x+=1e-4:fa.z+=1e-4,fa.normalize(),Ds.crossVectors(i,fa)),Ds.normalize(),bh.crossVectors(fa,Ds),r[0]=Ds.x,r[4]=bh.x,r[8]=fa.x,r[1]=Ds.y,r[5]=bh.y,r[9]=fa.y,r[2]=Ds.z,r[6]=bh.z,r[10]=fa.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,l=this.elements,u=i[0],f=i[4],p=i[8],d=i[12],_=i[1],x=i[5],g=i[9],v=i[13],M=i[2],b=i[6],y=i[10],S=i[14],U=i[3],P=i[7],R=i[11],D=i[15],O=r[0],C=r[4],T=r[8],N=r[12],I=r[1],H=r[5],G=r[9],ie=r[13],re=r[2],Z=r[6],B=r[10],V=r[14],Q=r[3],de=r[7],k=r[11],z=r[15];return l[0]=u*O+f*I+p*re+d*Q,l[4]=u*C+f*H+p*Z+d*de,l[8]=u*T+f*G+p*B+d*k,l[12]=u*N+f*ie+p*V+d*z,l[1]=_*O+x*I+g*re+v*Q,l[5]=_*C+x*H+g*Z+v*de,l[9]=_*T+x*G+g*B+v*k,l[13]=_*N+x*ie+g*V+v*z,l[2]=M*O+b*I+y*re+S*Q,l[6]=M*C+b*H+y*Z+S*de,l[10]=M*T+b*G+y*B+S*k,l[14]=M*N+b*ie+y*V+S*z,l[3]=U*O+P*I+R*re+D*Q,l[7]=U*C+P*H+R*Z+D*de,l[11]=U*T+P*G+R*B+D*k,l[15]=U*N+P*ie+R*V+D*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],l=e[12],u=e[1],f=e[5],p=e[9],d=e[13],_=e[2],x=e[6],g=e[10],v=e[14],M=e[3],b=e[7],y=e[11],S=e[15],U=p*v-d*g,P=f*v-d*x,R=f*g-p*x,D=u*v-d*_,O=u*g-p*_,C=u*x-f*_;return n*(b*U-y*P+S*R)-i*(M*U-y*D+S*O)+r*(M*P-b*D+S*C)-l*(M*R-b*O+y*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],l=e[1],u=e[5],f=e[9],p=e[2],d=e[6],_=e[10];return n*(u*_-f*d)-i*(l*_-f*p)+r*(l*d-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],l=e[3],u=e[4],f=e[5],p=e[6],d=e[7],_=e[8],x=e[9],g=e[10],v=e[11],M=e[12],b=e[13],y=e[14],S=e[15],U=n*f-i*u,P=n*p-r*u,R=n*d-l*u,D=i*p-r*f,O=i*d-l*f,C=r*d-l*p,T=_*b-x*M,N=_*y-g*M,I=_*S-v*M,H=x*y-g*b,G=x*S-v*b,ie=g*S-v*y,re=U*ie-P*G+R*H+D*I-O*N+C*T;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/re;return e[0]=(f*ie-p*G+d*H)*Z,e[1]=(r*G-i*ie-l*H)*Z,e[2]=(b*C-y*O+S*D)*Z,e[3]=(g*O-x*C-v*D)*Z,e[4]=(p*I-u*ie-d*N)*Z,e[5]=(n*ie-r*I+l*N)*Z,e[6]=(y*R-M*C-S*P)*Z,e[7]=(_*C-g*R+v*P)*Z,e[8]=(u*G-f*I+d*T)*Z,e[9]=(i*I-n*G-l*T)*Z,e[10]=(M*O-b*R+S*U)*Z,e[11]=(x*R-_*O-v*U)*Z,e[12]=(f*N-u*H-p*T)*Z,e[13]=(n*H-i*N+r*T)*Z,e[14]=(b*P-M*D-y*U)*Z,e[15]=(_*D-x*P+g*U)*Z,this}scale(e){const n=this.elements,i=e.x,r=e.y,l=e.z;return n[0]*=i,n[4]*=r,n[8]*=l,n[1]*=i,n[5]*=r,n[9]*=l,n[2]*=i,n[6]*=r,n[10]*=l,n[3]*=i,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),l=1-i,u=e.x,f=e.y,p=e.z,d=l*u,_=l*f;return this.set(d*u+i,d*f-r*p,d*p+r*f,0,d*f+r*p,_*f+i,_*p-r*u,0,d*p-r*f,_*p+r*u,l*p*p+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,l,u){return this.set(1,i,l,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,d=l+l,_=u+u,x=f+f,g=l*d,v=l*_,M=l*x,b=u*_,y=u*x,S=f*x,U=p*d,P=p*_,R=p*x,D=i.x,O=i.y,C=i.z;return r[0]=(1-(b+S))*D,r[1]=(v+R)*D,r[2]=(M-P)*D,r[3]=0,r[4]=(v-R)*O,r[5]=(1-(g+S))*O,r[6]=(y+U)*O,r[7]=0,r[8]=(M+P)*C,r[9]=(y-U)*C,r[10]=(1-(g+b))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const l=this.determinantAffine();if(l===0)return i.set(1,1,1),n.identity(),this;let u=Ul.set(r[0],r[1],r[2]).length();const f=Ul.set(r[4],r[5],r[6]).length(),p=Ul.set(r[8],r[9],r[10]).length();l<0&&(u=-u),Qa.copy(this);const d=1/u,_=1/f,x=1/p;return Qa.elements[0]*=d,Qa.elements[1]*=d,Qa.elements[2]*=d,Qa.elements[4]*=_,Qa.elements[5]*=_,Qa.elements[6]*=_,Qa.elements[8]*=x,Qa.elements[9]*=x,Qa.elements[10]*=x,n.setFromRotationMatrix(Qa),i.x=u,i.y=f,i.z=p,this}makePerspective(e,n,i,r,l,u,f=gr,p=!1){const d=this.elements,_=2*l/(n-e),x=2*l/(i-r),g=(n+e)/(n-e),v=(i+r)/(i-r);let M,b;if(p)M=l/(u-l),b=u*l/(u-l);else if(f===gr)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===bd)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,i,r,l,u,f=gr,p=!1){const d=this.elements,_=2/(n-e),x=2/(i-r),g=-(n+e)/(n-e),v=-(i+r)/(i-r);let M,b;if(p)M=1/(u-l),b=u/(u-l);else if(f===gr)M=-2/(u-l),b=-(u+l)/(u-l);else if(f===bd)M=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Td.prototype.isMatrix4=!0;let kn=Td;const Ul=new le,Qa=new kn,N2=new le(0,0,0),U2=new le(1,1,1),Ds=new le,bh=new le,fa=new le,UM=new kn,LM=new mc;class Yo{constructor(e=0,n=0,i=0,r=Yo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,l=r[0],u=r[4],f=r[8],p=r[1],d=r[5],_=r[9],x=r[2],g=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,v),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Vt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,v),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return UM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(UM,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return LM.setFromEuler(this),this.setFromQuaternion(LM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yo.DEFAULT_ORDER="XYZ";class oE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L2=0;const OM=new le,Ll=new mc,Vr=new kn,Eh=new le,uu=new le,O2=new le,P2=new mc,PM=new le(1,0,0),IM=new le(0,1,0),zM=new le(0,0,1),FM={type:"added"},I2={type:"removed"},Ol={type:"childadded",child:null},p_={type:"childremoved",child:null};class ea extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L2++}),this.uuid=Ku(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ea.DEFAULT_UP.clone();const e=new le,n=new Yo,i=new mc,r=new le(1,1,1);function l(){i.setFromEuler(n,!1)}function u(){n.setFromQuaternion(i,void 0,!1)}n._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kn},normalMatrix:{value:new vt}}),this.matrix=new kn,this.matrixWorld=new kn,this.matrixAutoUpdate=ea.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ea.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ll.setFromAxisAngle(e,n),this.quaternion.multiply(Ll),this}rotateOnWorldAxis(e,n){return Ll.setFromAxisAngle(e,n),this.quaternion.premultiply(Ll),this}rotateX(e){return this.rotateOnAxis(PM,e)}rotateY(e){return this.rotateOnAxis(IM,e)}rotateZ(e){return this.rotateOnAxis(zM,e)}translateOnAxis(e,n){return OM.copy(e).applyQuaternion(this.quaternion),this.position.add(OM.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(PM,e)}translateY(e){return this.translateOnAxis(IM,e)}translateZ(e){return this.translateOnAxis(zM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Eh.copy(e):Eh.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(uu,Eh,this.up):Vr.lookAt(Eh,uu,this.up),this.quaternion.setFromRotationMatrix(Vr),r&&(Vr.extractRotation(r.matrixWorld),Ll.setFromRotationMatrix(Vr),this.quaternion.premultiply(Ll.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(FM),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I2),p_.child=e,this.dispatchEvent(p_),p_.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(FM),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const u=this.children[i].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uu,e,O2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uu,P2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*i-l[8]*r,l[13]+=i-l[1]*n-l[5]*i-l[9]*r,l[14]+=r-l[2]*n-l[6]*i-l[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const x=p[d];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(e.materials,this.material[p]));r.material=f}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),d=u(e.textures),_=u(e.images),x=u(e.shapes),g=u(e.skeletons),v=u(e.animations),M=u(e.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),d.length>0&&(i.textures=d),_.length>0&&(i.images=_),x.length>0&&(i.shapes=x),g.length>0&&(i.skeletons=g),v.length>0&&(i.animations=v),M.length>0&&(i.nodes=M)}return i.object=r,i;function u(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ea.DEFAULT_UP=new le(0,1,0);ea.DEFAULT_MATRIX_AUTO_UPDATE=!0;ea.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Th extends ea{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z2={type:"move"};class m_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Th,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Th,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Th,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,l=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,i),S=this._getHandJoint(d,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),v=.02,M=.005;d.inputState.pinching&&g>v+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=v-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(z2)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Th;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},Ah={h:0,s:0,l:0};function __(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Xt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Gt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Gt.workingColorSpace){if(e=E2(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+n):i+n-i*n,u=2*i-l;this.r=__(u,l,e+1/3),this.g=__(u,l,e),this.b=__(u,l,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,n=Pa){function i(l){l!==void 0&&parseFloat(l)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:_t("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pa){const i=lE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=ac(e.r),this.g=ac(e.g),this.b=ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pa){return Gt.workingToColorSpace(Mi.copy(this),e),Math.round(Vt(Mi.r*255,0,255))*65536+Math.round(Vt(Mi.g*255,0,255))*256+Math.round(Vt(Mi.b*255,0,255))}getHexString(e=Pa){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Gt.workingColorSpace){Gt.workingToColorSpace(Mi.copy(this),n);const i=Mi.r,r=Mi.g,l=Mi.b,u=Math.max(i,r,l),f=Math.min(i,r,l);let p,d;const _=(f+u)/2;if(f===u)p=0,d=0;else{const x=u-f;switch(d=_<=.5?x/(u+f):x/(2-u-f),u){case i:p=(r-l)/x+(r<l?6:0);break;case r:p=(l-i)/x+2;break;case l:p=(i-r)/x+4;break}p/=6}return e.h=p,e.s=d,e.l=_,e}getRGB(e,n=Gt.workingColorSpace){return Gt.workingToColorSpace(Mi.copy(this),n),e.r=Mi.r,e.g=Mi.g,e.b=Mi.b,e}getStyle(e=Pa){Gt.workingToColorSpace(Mi.copy(this),e);const n=Mi.r,i=Mi.g,r=Mi.b;return e!==Pa?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ns),this.setHSL(Ns.h+e,Ns.s+n,Ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ns),e.getHSL(Ah);const i=c_(Ns.h,Ah.h,n),r=c_(Ns.s,Ah.s,n),l=c_(Ns.l,Ah.l,n);return this.setHSL(i,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,l=e.elements;return this.r=l[0]*n+l[3]*i+l[6]*r,this.g=l[1]*n+l[4]*i+l[7]*r,this.b=l[2]*n+l[5]*i+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mi=new Xt;Xt.NAMES=lE;class F0{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(e),this.density=n}clone(){return new F0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class F2 extends ea{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yo,this.environmentIntensity=1,this.environmentRotation=new Yo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ja=new le,kr=new le,g_=new le,Xr=new le,Pl=new le,Il=new le,BM=new le,v_=new le,x_=new le,y_=new le,S_=new zn,M_=new zn,b_=new zn;class tr{constructor(e=new le,n=new le,i=new le){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ja.subVectors(e,n),r.cross(Ja);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,n,i,r,l){Ja.subVectors(r,n),kr.subVectors(i,n),g_.subVectors(e,n);const u=Ja.dot(Ja),f=Ja.dot(kr),p=Ja.dot(g_),d=kr.dot(kr),_=kr.dot(g_),x=u*d-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,v=(d*p-f*_)*g,M=(u*_-f*p)*g;return l.set(1-v-M,M,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xr)===null?!1:Xr.x>=0&&Xr.y>=0&&Xr.x+Xr.y<=1}static getInterpolation(e,n,i,r,l,u,f,p){return this.getBarycoord(e,n,i,r,Xr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Xr.x),p.addScaledVector(u,Xr.y),p.addScaledVector(f,Xr.z),p)}static getInterpolatedAttribute(e,n,i,r,l,u){return S_.setScalar(0),M_.setScalar(0),b_.setScalar(0),S_.fromBufferAttribute(e,n),M_.fromBufferAttribute(e,i),b_.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(S_,l.x),u.addScaledVector(M_,l.y),u.addScaledVector(b_,l.z),u}static isFrontFacing(e,n,i,r){return Ja.subVectors(i,n),kr.subVectors(e,n),Ja.cross(kr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ja.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),Ja.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return tr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,l){return tr.getInterpolation(e,this.a,this.b,this.c,n,i,r,l)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,l=this.c;let u,f;Pl.subVectors(r,i),Il.subVectors(l,i),v_.subVectors(e,i);const p=Pl.dot(v_),d=Il.dot(v_);if(p<=0&&d<=0)return n.copy(i);x_.subVectors(e,r);const _=Pl.dot(x_),x=Il.dot(x_);if(_>=0&&x<=_)return n.copy(r);const g=p*x-_*d;if(g<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(i).addScaledVector(Pl,u);y_.subVectors(e,l);const v=Pl.dot(y_),M=Il.dot(y_);if(M>=0&&v<=M)return n.copy(l);const b=v*d-p*M;if(b<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(i).addScaledVector(Il,f);const y=_*M-v*x;if(y<=0&&x-_>=0&&v-M>=0)return BM.subVectors(l,r),f=(x-_)/(x-_+(v-M)),n.copy(r).addScaledVector(BM,f);const S=1/(y+b+g);return u=b*S,f=g*S,n.copy(i).addScaledVector(Pl,u).addScaledVector(Il,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qu{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($a.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($a.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$a.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,$a):$a.fromBufferAttribute(l,u),$a.applyMatrix4(e.matrixWorld),this.expandByPoint($a);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rh.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rh.copy(i.boundingBox)),Rh.applyMatrix4(e.matrixWorld),this.union(Rh)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$a),$a.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fu),Ch.subVectors(this.max,fu),zl.subVectors(e.a,fu),Fl.subVectors(e.b,fu),Bl.subVectors(e.c,fu),Us.subVectors(Fl,zl),Ls.subVectors(Bl,Fl),yo.subVectors(zl,Bl);let n=[0,-Us.z,Us.y,0,-Ls.z,Ls.y,0,-yo.z,yo.y,Us.z,0,-Us.x,Ls.z,0,-Ls.x,yo.z,0,-yo.x,-Us.y,Us.x,0,-Ls.y,Ls.x,0,-yo.y,yo.x,0];return!E_(n,zl,Fl,Bl,Ch)||(n=[1,0,0,0,1,0,0,0,1],!E_(n,zl,Fl,Bl,Ch))?!1:(wh.crossVectors(Us,Ls),n=[wh.x,wh.y,wh.z],E_(n,zl,Fl,Bl,Ch))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$a).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($a).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wr=[new le,new le,new le,new le,new le,new le,new le,new le],$a=new le,Rh=new Qu,zl=new le,Fl=new le,Bl=new le,Us=new le,Ls=new le,yo=new le,fu=new le,Ch=new le,wh=new le,So=new le;function E_(o,e,n,i,r){for(let l=0,u=o.length-3;l<=u;l+=3){So.fromArray(o,l);const f=r.x*Math.abs(So.x)+r.y*Math.abs(So.y)+r.z*Math.abs(So.z),p=e.dot(So),d=n.dot(So),_=i.dot(So);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const Zn=new le,Dh=new $t;let B2=0;class ka extends Zo{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=TM,this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dh.fromBufferAttribute(this,n),Dh.applyMatrix3(e),this.setXY(n,Dh.x,Dh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.applyMatrix3(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.applyMatrix4(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.applyNormalMatrix(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.transformDirection(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=cu(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yi(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=cu(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=cu(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=cu(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=cu(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yi(n,this.array),i=Yi(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yi(n,this.array),i=Yi(i,this.array),r=Yi(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,l){return e*=this.itemSize,this.normalized&&(n=Yi(n,this.array),i=Yi(i,this.array),r=Yi(r,this.array),l=Yi(l,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==TM&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class cE extends ka{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uE extends ka{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xa extends ka{constructor(e,n,i){super(new Float32Array(e),n,i)}}const H2=new Qu,hu=new le,T_=new le;class Nd{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):H2.setFromPoints(e).getCenter(i);let r=0;for(let l=0,u=e.length;l<u;l++)r=Math.max(r,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hu.subVectors(e,this.center);const n=hu.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(hu,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(T_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hu.copy(e.center).add(T_)),this.expandByPoint(hu.copy(e.center).sub(T_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let G2=0;const La=new kn,A_=new ea,Hl=new le,ha=new Qu,du=new Qu,oi=new le;class Wa extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=Ku(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y2(e)?uE:cE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new vt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return La.makeRotationFromQuaternion(e),this.applyMatrix4(La),this}rotateX(e){return La.makeRotationX(e),this.applyMatrix4(La),this}rotateY(e){return La.makeRotationY(e),this.applyMatrix4(La),this}rotateZ(e){return La.makeRotationZ(e),this.applyMatrix4(La),this}translate(e,n,i){return La.makeTranslation(e,n,i),this.applyMatrix4(La),this}scale(e,n,i){return La.makeScale(e,n,i),this.applyMatrix4(La),this}lookAt(e){return A_.lookAt(e),A_.updateMatrix(),this.applyMatrix4(A_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hl).negate(),this.translate(Hl.x,Hl.y,Hl.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xa(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const l=n[i];ha.setFromBufferAttribute(l),this.morphTargetsRelative?(oi.addVectors(this.boundingBox.min,ha.min),this.boundingBox.expandByPoint(oi),oi.addVectors(this.boundingBox.max,ha.max),this.boundingBox.expandByPoint(oi)):(this.boundingBox.expandByPoint(ha.min),this.boundingBox.expandByPoint(ha.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(ha.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];du.setFromBufferAttribute(f),this.morphTargetsRelative?(oi.addVectors(ha.min,du.min),ha.expandByPoint(oi),oi.addVectors(ha.max,du.max),ha.expandByPoint(oi)):(ha.expandByPoint(du.min),ha.expandByPoint(du.max))}ha.getCenter(i);let r=0;for(let l=0,u=e.count;l<u;l++)oi.fromBufferAttribute(e,l),r=Math.max(r,i.distanceToSquared(oi));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)oi.fromBufferAttribute(f,d),p&&(Hl.fromBufferAttribute(e,d),oi.add(Hl)),r=Math.max(r,i.distanceToSquared(oi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==i.count)&&(u=new ka(new Float32Array(4*i.count),4),this.setAttribute("tangent",u));const f=[],p=[];for(let T=0;T<i.count;T++)f[T]=new le,p[T]=new le;const d=new le,_=new le,x=new le,g=new $t,v=new $t,M=new $t,b=new le,y=new le;function S(T,N,I){d.fromBufferAttribute(i,T),_.fromBufferAttribute(i,N),x.fromBufferAttribute(i,I),g.fromBufferAttribute(l,T),v.fromBufferAttribute(l,N),M.fromBufferAttribute(l,I),_.sub(d),x.sub(d),v.sub(g),M.sub(g);const H=1/(v.x*M.y-M.x*v.y);isFinite(H)&&(b.copy(_).multiplyScalar(M.y).addScaledVector(x,-v.y).multiplyScalar(H),y.copy(x).multiplyScalar(v.x).addScaledVector(_,-M.x).multiplyScalar(H),f[T].add(b),f[N].add(b),f[I].add(b),p[T].add(y),p[N].add(y),p[I].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let T=0,N=U.length;T<N;++T){const I=U[T],H=I.start,G=I.count;for(let ie=H,re=H+G;ie<re;ie+=3)S(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const P=new le,R=new le,D=new le,O=new le;function C(T){D.fromBufferAttribute(r,T),O.copy(D);const N=f[T];P.copy(N),P.sub(D.multiplyScalar(D.dot(N))).normalize(),R.crossVectors(O,N);const H=R.dot(p[T])<0?-1:1;u.setXYZW(T,P.x,P.y,P.z,H)}for(let T=0,N=U.length;T<N;++T){const I=U[T],H=I.start,G=I.count;for(let ie=H,re=H+G;ie<re;ie+=3)C(e.getX(ie+0)),C(e.getX(ie+1)),C(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ka(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);const r=new le,l=new le,u=new le,f=new le,p=new le,d=new le,_=new le,x=new le;if(e)for(let g=0,v=e.count;g<v;g+=3){const M=e.getX(g+0),b=e.getX(g+1),y=e.getX(g+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),_.subVectors(u,l),x.subVectors(r,l),_.cross(x),f.fromBufferAttribute(i,M),p.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),f.add(_),p.add(_),d.add(_),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(b,p.x,p.y,p.z),i.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,v=n.count;g<v;g+=3)r.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,l),x.subVectors(r,l),_.cross(x),i.setXYZ(g+0,_.x,_.y,_.z),i.setXYZ(g+1,_.x,_.y,_.z),i.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)oi.fromBufferAttribute(e,n),oi.normalize(),e.setXYZ(n,oi.x,oi.y,oi.z)}toNonIndexed(){function e(f,p){const d=f.array,_=f.itemSize,x=f.normalized,g=new d.constructor(p.length*_);let v=0,M=0;for(let b=0,y=p.length;b<y;b++){f.isInterleavedBufferAttribute?v=p[b]*f.data.stride+f.offset:v=p[b]*_;for(let S=0;S<_;S++)g[M++]=d[v++]}return new ka(g,_,x)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wa,i=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=e(p,i);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,x=d.length;_<x;_++){const g=d[_],v=e(g,i);p.push(v)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const p in i){const d=i[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let x=0,g=d.length;x<g;x++){const v=d[x];_.push(v.toJSON(e.data))}_.length>0&&(r[p]=_,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(n))}const l=e.morphAttributes;for(const d in l){const _=[],x=l[d];for(let g=0,v=x.length;g<v;g++)_.push(x[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,_=u.length;d<_;d++){const x=u[d];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let V2=0;class Ju extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V2++}),this.uuid=Ku(),this.name="",this.type="Material",this.blending=nc,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cg,this.blendDst=ug,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=EM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){_t(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){_t(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nc&&(i.blending=this.blending),this.side!==Js&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cg&&(i.blendSrc=this.blendSrc),this.blendDst!==ug&&(i.blendDst=this.blendDst),this.blendEquation!==Co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==EM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=r(e.textures),u=r(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $t().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let l=0;l!==r;++l)i[l]=n[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yr=new le,R_=new le,Nh=new le,Os=new le,C_=new le,Uh=new le,w_=new le;class fE{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,n),Yr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){R_.copy(e).add(n).multiplyScalar(.5),Nh.copy(n).sub(e).normalize(),Os.copy(this.origin).sub(R_);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Nh),f=Os.dot(this.direction),p=-Os.dot(Nh),d=Os.lengthSq(),_=Math.abs(1-u*u);let x,g,v,M;if(_>0)if(x=u*p-f,g=u*f-p,M=l*_,x>=0)if(g>=-M)if(g<=M){const b=1/_;x*=b,g*=b,v=x*(x+u*g+2*f)+g*(u*x+g+2*p)+d}else g=l,x=Math.max(0,-(u*g+f)),v=-x*x+g*(g+2*p)+d;else g=-l,x=Math.max(0,-(u*g+f)),v=-x*x+g*(g+2*p)+d;else g<=-M?(x=Math.max(0,-(-u*l+f)),g=x>0?-l:Math.min(Math.max(-l,-p),l),v=-x*x+g*(g+2*p)+d):g<=M?(x=0,g=Math.min(Math.max(-l,-p),l),v=g*(g+2*p)+d):(x=Math.max(0,-(u*l+f)),g=x>0?l:Math.min(Math.max(-l,-p),l),v=-x*x+g*(g+2*p)+d);else g=u>0?-l:l,x=Math.max(0,-(u*g+f)),v=-x*x+g*(g+2*p)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,x),r&&r.copy(R_).addScaledVector(Nh,g),v}intersectSphere(e,n){Yr.subVectors(e.center,this.origin);const i=Yr.dot(this.direction),r=Yr.dot(Yr)-i*i,l=e.radius*e.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=i-u,p=i+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,l,u,f,p;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(i=(e.min.x-g.x)*d,r=(e.max.x-g.x)*d):(i=(e.max.x-g.x)*d,r=(e.min.x-g.x)*d),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),i>u||l>r||((l>i||isNaN(i))&&(i=l),(u<r||isNaN(r))&&(r=u),x>=0?(f=(e.min.z-g.z)*x,p=(e.max.z-g.z)*x):(f=(e.max.z-g.z)*x,p=(e.min.z-g.z)*x),i>p||f>r)||((f>i||i!==i)&&(i=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,n,i,r,l){C_.subVectors(n,e),Uh.subVectors(i,e),w_.crossVectors(C_,Uh);let u=this.direction.dot(w_),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Os.subVectors(this.origin,e);const p=f*this.direction.dot(Uh.crossVectors(Os,Uh));if(p<0)return null;const d=f*this.direction.dot(C_.cross(Os));if(d<0||p+d>u)return null;const _=-f*Os.dot(w_);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class B0 extends Ju{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yo,this.combine=kb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const HM=new kn,Mo=new fE,Lh=new Nd,GM=new le,Oh=new le,Ph=new le,Ih=new le,D_=new le,zh=new le,VM=new le,Fh=new le;class br extends ea{constructor(e=new Wa,n=new B0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(l&&f){zh.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],x=l[p];_!==0&&(D_.fromBufferAttribute(x,e),u?zh.addScaledVector(D_,_):zh.addScaledVector(D_.sub(n),_))}n.add(zh)}return n}raycast(e,n){const i=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lh.copy(i.boundingSphere),Lh.applyMatrix4(l),Mo.copy(e.ray).recast(e.near),!(Lh.containsPoint(Mo.origin)===!1&&(Mo.intersectSphere(Lh,GM)===null||Mo.origin.distanceToSquared(GM)>(e.far-e.near)**2))&&(HM.copy(l).invert(),Mo.copy(e.ray).applyMatrix4(HM),!(i.boundingBox!==null&&Mo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mo)))}_computeIntersections(e,n,i){let r;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,g=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=g.length;M<b;M++){const y=g[M],S=u[y.materialIndex],U=Math.max(y.start,v.start),P=Math.min(f.count,Math.min(y.start+y.count,v.start+v.count));for(let R=U,D=P;R<D;R+=3){const O=f.getX(R),C=f.getX(R+1),T=f.getX(R+2);r=Bh(this,S,e,i,d,_,x,O,C,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const M=Math.max(0,v.start),b=Math.min(f.count,v.start+v.count);for(let y=M,S=b;y<S;y+=3){const U=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);r=Bh(this,u,e,i,d,_,x,U,P,R),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,b=g.length;M<b;M++){const y=g[M],S=u[y.materialIndex],U=Math.max(y.start,v.start),P=Math.min(p.count,Math.min(y.start+y.count,v.start+v.count));for(let R=U,D=P;R<D;R+=3){const O=R,C=R+1,T=R+2;r=Bh(this,S,e,i,d,_,x,O,C,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const M=Math.max(0,v.start),b=Math.min(p.count,v.start+v.count);for(let y=M,S=b;y<S;y+=3){const U=y,P=y+1,R=y+2;r=Bh(this,u,e,i,d,_,x,U,P,R),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}}function k2(o,e,n,i,r,l,u,f){let p;if(e.side===$i?p=i.intersectTriangle(u,l,r,!0,f):p=i.intersectTriangle(r,l,u,e.side===Js,f),p===null)return null;Fh.copy(f),Fh.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Fh);return d<n.near||d>n.far?null:{distance:d,point:Fh.clone(),object:o}}function Bh(o,e,n,i,r,l,u,f,p,d){o.getVertexPosition(f,Oh),o.getVertexPosition(p,Ph),o.getVertexPosition(d,Ih);const _=k2(o,e,n,i,Oh,Ph,Ih,VM);if(_){const x=new le;tr.getBarycoord(VM,Oh,Ph,Ih,x),r&&(_.uv=tr.getInterpolatedAttribute(r,f,p,d,x,new $t)),l&&(_.uv1=tr.getInterpolatedAttribute(l,f,p,d,x,new $t)),u&&(_.normal=tr.getInterpolatedAttribute(u,f,p,d,x,new le),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new le,materialIndex:0};tr.getNormal(Oh,Ph,Ih,g.normal),_.face=g,_.barycoord=x}return _}class X2 extends Bi{constructor(e=null,n=1,i=1,r,l,u,f,p,d=gi,_=gi,x,g){super(null,u,f,p,d,_,r,l,x,g),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const N_=new le,W2=new le,Y2=new vt;class Ro{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=N_.subVectors(i,n).cross(W2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(N_),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return i===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Y2.getNormalMatrix(e),r=this.coplanarPoint(N_).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bo=new Nd,q2=new $t(.5,.5),Hh=new le;class hE{constructor(e=new Ro,n=new Ro,i=new Ro,r=new Ro,l=new Ro,u=new Ro){this.planes=[e,n,i,r,l,u]}set(e,n,i,r,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(i),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gr,i=!1){const r=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],d=l[3],_=l[4],x=l[5],g=l[6],v=l[7],M=l[8],b=l[9],y=l[10],S=l[11],U=l[12],P=l[13],R=l[14],D=l[15];if(r[0].setComponents(d-u,v-_,S-M,D-U).normalize(),r[1].setComponents(d+u,v+_,S+M,D+U).normalize(),r[2].setComponents(d+f,v+x,S+b,D+P).normalize(),r[3].setComponents(d-f,v-x,S-b,D-P).normalize(),i)r[4].setComponents(p,g,y,R).normalize(),r[5].setComponents(d-p,v-g,S-y,D-R).normalize();else if(r[4].setComponents(d-p,v-g,S-y,D-R).normalize(),n===gr)r[5].setComponents(d+p,v+g,S+y,D+R).normalize();else if(n===bd)r[5].setComponents(p,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bo)}intersectsSprite(e){bo.center.set(0,0,0);const n=q2.distanceTo(e.center);return bo.radius=.7071067811865476+n,bo.applyMatrix4(e.matrixWorld),this.intersectsSphere(bo)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Hh.x=r.normal.x>0?e.max.x:e.min.x,Hh.y=r.normal.y>0?e.max.y:e.min.y,Hh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hh)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dE extends Ju{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kM=new kn,Qg=new fE,Gh=new Nd,Vh=new le;class Z2 extends ea{constructor(e=new Wa,n=new dE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,l=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gh.copy(i.boundingSphere),Gh.applyMatrix4(r),Gh.radius+=l,e.ray.intersectsSphere(Gh)===!1)return;kM.copy(r).invert(),Qg.copy(e.ray).applyMatrix4(kM);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=i.index,x=i.attributes.position;if(d!==null){const g=Math.max(0,u.start),v=Math.min(d.count,u.start+u.count);for(let M=g,b=v;M<b;M++){const y=d.getX(M);Vh.fromBufferAttribute(x,y),XM(Vh,y,p,r,e,n,this)}}else{const g=Math.max(0,u.start),v=Math.min(x.count,u.start+u.count);for(let M=g,b=v;M<b;M++)Vh.fromBufferAttribute(x,M),XM(Vh,M,p,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function XM(o,e,n,i,r,l,u){const f=Qg.distanceSqToPoint(o);if(f<n){const p=new le;Qg.closestPointToPoint(o,p),p.applyMatrix4(i);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class pE extends Bi{constructor(e=[],n=Xo,i,r,l,u,f,p,d,_){super(e,n,i,r,l,u,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dc extends Bi{constructor(e,n,i=Mr,r,l,u,f=gi,p=gi,d,_=rs,x=1){if(_!==rs&&_!==Lo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:x};super(g,r,l,u,f,p,_,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new z0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class j2 extends dc{constructor(e,n=Mr,i=Xo,r,l,u=gi,f=gi,p,d=rs){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,n,i,r,l,u,f,p,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mE extends Bi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $u extends Wa{constructor(e=1,n=1,i=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],_=[],x=[];let g=0,v=0;M("z","y","x",-1,-1,i,n,e,u,l,0),M("z","y","x",1,-1,i,n,-e,u,l,1),M("x","z","y",1,1,e,i,n,r,u,2),M("x","z","y",1,-1,e,i,-n,r,u,3),M("x","y","z",1,-1,e,n,i,r,l,4),M("x","y","z",-1,-1,e,n,-i,r,l,5),this.setIndex(p),this.setAttribute("position",new Xa(d,3)),this.setAttribute("normal",new Xa(_,3)),this.setAttribute("uv",new Xa(x,2));function M(b,y,S,U,P,R,D,O,C,T,N){const I=R/C,H=D/T,G=R/2,ie=D/2,re=O/2,Z=C+1,B=T+1;let V=0,Q=0;const de=new le;for(let k=0;k<B;k++){const z=k*H-ie;for(let J=0;J<Z;J++){const be=J*I-G;de[b]=be*U,de[y]=z*P,de[S]=re,d.push(de.x,de.y,de.z),de[b]=0,de[y]=0,de[S]=O>0?1:-1,_.push(de.x,de.y,de.z),x.push(J/C),x.push(1-k/T),V+=1}}for(let k=0;k<T;k++)for(let z=0;z<C;z++){const J=g+z+Z*k,be=g+z+Z*(k+1),Re=g+(z+1)+Z*(k+1),Pe=g+(z+1)+Z*k;p.push(J,be,Pe),p.push(be,Re,Pe),Q+=6}f.addGroup(v,Q,N),v+=Q,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ud extends Wa{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const l=e/2,u=n/2,f=Math.floor(i),p=Math.floor(r),d=f+1,_=p+1,x=e/f,g=n/p,v=[],M=[],b=[],y=[];for(let S=0;S<_;S++){const U=S*g-u;for(let P=0;P<d;P++){const R=P*x-l;M.push(R,-U,0),b.push(0,0,1),y.push(P/f),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let U=0;U<f;U++){const P=U+d*S,R=U+d*(S+1),D=U+1+d*(S+1),O=U+1+d*S;v.push(P,R,O),v.push(R,D,O)}this.setIndex(v),this.setAttribute("position",new Xa(M,3)),this.setAttribute("normal",new Xa(b,3)),this.setAttribute("uv",new Xa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.width,e.height,e.widthSegments,e.heightSegments)}}class H0 extends Wa{constructor(e=1,n=.4,i=64,r=8,l=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:l,q:u},i=Math.floor(i),r=Math.floor(r);const f=[],p=[],d=[],_=[],x=new le,g=new le,v=new le,M=new le,b=new le,y=new le,S=new le;for(let P=0;P<=i;++P){const R=P/i*l*Math.PI*2;U(R,l,u,e,v),U(R+.01,l,u,e,M),y.subVectors(M,v),S.addVectors(M,v),b.crossVectors(y,S),S.crossVectors(b,y),b.normalize(),S.normalize();for(let D=0;D<=r;++D){const O=D/r*Math.PI*2,C=-n*Math.cos(O),T=n*Math.sin(O);x.x=v.x+(C*S.x+T*b.x),x.y=v.y+(C*S.y+T*b.y),x.z=v.z+(C*S.z+T*b.z),p.push(x.x,x.y,x.z),g.subVectors(x,v).normalize(),d.push(g.x,g.y,g.z),_.push(P/i),_.push(D/r)}}for(let P=1;P<=i;P++)for(let R=1;R<=r;R++){const D=(r+1)*(P-1)+(R-1),O=(r+1)*P+(R-1),C=(r+1)*P+R,T=(r+1)*(P-1)+R;f.push(D,O,T),f.push(O,C,T)}this.setIndex(f),this.setAttribute("position",new Xa(p,3)),this.setAttribute("normal",new Xa(d,3)),this.setAttribute("uv",new Xa(_,2));function U(P,R,D,O,C){const T=Math.cos(P),N=Math.sin(P),I=D/R*P,H=Math.cos(I);C.x=O*(2+H)*.5*T,C.y=O*(2+H)*N*.5,C.z=O*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new H0(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function pc(o){const e={};for(const n in o){e[n]={};for(const i in o[n]){const r=o[n][i];if(WM(r))r.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(WM(r[0])){const l=[];for(let u=0,f=r.length;u<f;u++)l[u]=r[u].clone();e[n][i]=l}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Oi(o){const e={};for(let n=0;n<o.length;n++){const i=pc(o[n]);for(const r in i)e[r]=i[r]}return e}function WM(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function K2(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function _E(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const Q2={clone:pc,merge:Oi};var J2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Ju{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J2,this.fragmentShader=$2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pc(e.uniforms),this.uniformsGroups=K2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Xt().setHex(r.value);break;case"v2":this.uniforms[i].value=new $t().fromArray(r.value);break;case"v3":this.uniforms[i].value=new le().fromArray(r.value);break;case"v4":this.uniforms[i].value=new zn().fromArray(r.value);break;case"m3":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new kn().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ew extends Er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tw extends Ju{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nw extends Ju{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kh=new le,Xh=new mc,lr=new le;class gE extends ea{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kn,this.projectionMatrix=new kn,this.projectionMatrixInverse=new kn,this.coordinateSystem=gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kh,Xh,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kh,Xh,lr.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(kh,Xh,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kh,Xh,lr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new le,YM=new $t,qM=new $t;class Fa extends gE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(l_*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kg*2*Math.atan(Math.tan(l_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,n){return this.getViewBounds(e,YM,qM),n.subVectors(qM,YM)}setViewOffset(e,n,i,r,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(l_*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*r/p,n-=u.offsetY*i/d,r*=u.width/p,i*=u.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vE extends gE{constructor(e=-1,n=1,i=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=i-e,u=i+e,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gl=-90,Vl=1;class iw extends ea{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fa(Gl,Vl,e,n);r.layers=this.layers,this.add(r);const l=new Fa(Gl,Vl,e,n);l.layers=this.layers,this.add(l);const u=new Fa(Gl,Vl,e,n);u.layers=this.layers,this.add(u);const f=new Fa(Gl,Vl,e,n);f.layers=this.layers,this.add(f);const p=new Fa(Gl,Vl,e,n);p.layers=this.layers,this.add(p);const d=new Fa(Gl,Vl,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,l,u,f,p]=n;for(const d of n)this.remove(d);if(e===gr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===bd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,d,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(x,g,v),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class aw extends Fa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const W0=class W0{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const l=this.elements;return l[0]=e,l[2]=n,l[1]=i,l[3]=r,this}};W0.prototype.isMatrix2=!0;let ZM=W0;function jM(o,e,n,i){const r=rw(i);switch(n){case nE:return o*e;case aE:return o*e/r.components*r.byteLength;case U0:return o*e/r.components*r.byteLength;case Wo:return o*e*2/r.components*r.byteLength;case L0:return o*e*2/r.components*r.byteLength;case iE:return o*e*3/r.components*r.byteLength;case nr:return o*e*4/r.components*r.byteLength;case O0:return o*e*4/r.components*r.byteLength;case id:case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case rd:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sg:case bg:return Math.max(o,16)*Math.max(e,8)/4;case yg:case Mg:return Math.max(o,8)*Math.max(e,8)/2;case Eg:case Tg:case Rg:case Cg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ag:case xd:case wg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ng:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ug:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Lg:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Og:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Pg:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ig:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case zg:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Fg:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Bg:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hg:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Gg:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Vg:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kg:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Xg:case Wg:case Yg:return Math.ceil(o/4)*Math.ceil(e/4)*16;case qg:case Zg:return Math.ceil(o/4)*Math.ceil(e/4)*8;case yd:case jg:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rw(o){switch(o){case Ba:case Jb:return{byteLength:1,components:1};case qu:case $b:case as:return{byteLength:2,components:1};case D0:case N0:return{byteLength:2,components:4};case Mr:case w0:case _r:return{byteLength:4,components:1};case eE:case tE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:C0}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=C0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xE(){let o=null,e=!1,n=null,i=null;function r(l,u){n(l,u),i=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&o!==null&&(i=o.requestAnimationFrame(r),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function sw(o){const e=new WeakMap;function n(f,p){const d=f.array,_=f.usage,x=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let v;if(d instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=o.SHORT;else if(d instanceof Uint32Array)v=o.UNSIGNED_INT;else if(d instanceof Int32Array)v=o.INT;else if(d instanceof Int8Array)v=o.BYTE;else if(d instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:x}}function i(f,p,d){const _=p.array,x=p.updateRanges;if(o.bindBuffer(d,f),x.length===0)o.bufferSubData(d,0,_);else{x.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<x.length;v++){const M=x[g],b=x[v];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,x[g]=b)}x.length=g+1;for(let v=0,M=x.length;v<M;v++){const b=x[v];o.bufferSubData(d,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(o.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,f,p),d.version=f.version}}return{get:r,remove:l,update:u}}var ow=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lw=`#ifdef USE_ALPHAHASH
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
#endif`,cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dw=`#ifdef USE_AOMAP
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
#endif`,pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mw=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_w=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yw=`#ifdef USE_IRIDESCENCE
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
#endif`,Sw=`#ifdef USE_BUMPMAP
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
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Aw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ww=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dw=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Nw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uw=`vec3 transformedNormal = objectNormal;
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
#endif`,Lw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
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
#endif`,Vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zw=`#ifdef USE_GRADIENTMAP
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
}`,jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jw=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,$w=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,e3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,r3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s3=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,l3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g3=`#if defined( USE_POINTS_UV )
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
#endif`,v3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b3=`#ifdef USE_MORPHTARGETS
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
#endif`,E3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D3=`#ifdef USE_NORMALMAP
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
#endif`,N3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,z3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,X3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Y3=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,q3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z3=`#ifdef USE_SKINNING
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
#endif`,j3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K3=`#ifdef USE_SKINNING
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
#endif`,Q3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eD=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tD=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nD=`#ifdef USE_TRANSMISSION
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
#endif`,iD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lD=`uniform sampler2D t2D;
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
}`,cD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dD=`#include <common>
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
}`,pD=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mD=`#define DISTANCE
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
}`,_D=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xD=`uniform float scale;
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
}`,yD=`uniform vec3 diffuse;
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
}`,SD=`#include <common>
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
}`,MD=`uniform vec3 diffuse;
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
}`,bD=`#define LAMBERT
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
}`,ED=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,TD=`#define MATCAP
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
}`,AD=`#define MATCAP
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
}`,RD=`#define NORMAL
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
}`,CD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wD=`#define PHONG
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
}`,DD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ND=`#define STANDARD
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
}`,UD=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,LD=`#define TOON
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
}`,OD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,PD=`uniform float size;
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
}`,ID=`uniform vec3 diffuse;
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
}`,zD=`#include <common>
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
}`,FD=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,BD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,HD=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:ow,alphahash_pars_fragment:lw,alphamap_fragment:cw,alphamap_pars_fragment:uw,alphatest_fragment:fw,alphatest_pars_fragment:hw,aomap_fragment:dw,aomap_pars_fragment:pw,batching_pars_vertex:mw,batching_vertex:_w,begin_vertex:gw,beginnormal_vertex:vw,bsdfs:xw,iridescence_fragment:yw,bumpmap_pars_fragment:Sw,clipping_planes_fragment:Mw,clipping_planes_pars_fragment:bw,clipping_planes_pars_vertex:Ew,clipping_planes_vertex:Tw,color_fragment:Aw,color_pars_fragment:Rw,color_pars_vertex:Cw,color_vertex:ww,common:Dw,cube_uv_reflection_fragment:Nw,defaultnormal_vertex:Uw,displacementmap_pars_vertex:Lw,displacementmap_vertex:Ow,emissivemap_fragment:Pw,emissivemap_pars_fragment:Iw,colorspace_fragment:zw,colorspace_pars_fragment:Fw,envmap_fragment:Bw,envmap_common_pars_fragment:Hw,envmap_pars_fragment:Gw,envmap_pars_vertex:Vw,envmap_physical_pars_fragment:$w,envmap_vertex:kw,fog_vertex:Xw,fog_pars_vertex:Ww,fog_fragment:Yw,fog_pars_fragment:qw,gradientmap_pars_fragment:Zw,lightmap_pars_fragment:jw,lights_lambert_fragment:Kw,lights_lambert_pars_fragment:Qw,lights_pars_begin:Jw,lights_toon_fragment:e3,lights_toon_pars_fragment:t3,lights_phong_fragment:n3,lights_phong_pars_fragment:i3,lights_physical_fragment:a3,lights_physical_pars_fragment:r3,lights_fragment_begin:s3,lights_fragment_maps:o3,lights_fragment_end:l3,lightprobes_pars_fragment:c3,logdepthbuf_fragment:u3,logdepthbuf_pars_fragment:f3,logdepthbuf_pars_vertex:h3,logdepthbuf_vertex:d3,map_fragment:p3,map_pars_fragment:m3,map_particle_fragment:_3,map_particle_pars_fragment:g3,metalnessmap_fragment:v3,metalnessmap_pars_fragment:x3,morphinstance_vertex:y3,morphcolor_vertex:S3,morphnormal_vertex:M3,morphtarget_pars_vertex:b3,morphtarget_vertex:E3,normal_fragment_begin:T3,normal_fragment_maps:A3,normal_pars_fragment:R3,normal_pars_vertex:C3,normal_vertex:w3,normalmap_pars_fragment:D3,clearcoat_normal_fragment_begin:N3,clearcoat_normal_fragment_maps:U3,clearcoat_pars_fragment:L3,iridescence_pars_fragment:O3,opaque_fragment:P3,packing:I3,premultiplied_alpha_fragment:z3,project_vertex:F3,dithering_fragment:B3,dithering_pars_fragment:H3,roughnessmap_fragment:G3,roughnessmap_pars_fragment:V3,shadowmap_pars_fragment:k3,shadowmap_pars_vertex:X3,shadowmap_vertex:W3,shadowmask_pars_fragment:Y3,skinbase_vertex:q3,skinning_pars_vertex:Z3,skinning_vertex:j3,skinnormal_vertex:K3,specularmap_fragment:Q3,specularmap_pars_fragment:J3,tonemapping_fragment:$3,tonemapping_pars_fragment:eD,transmission_fragment:tD,transmission_pars_fragment:nD,uv_pars_fragment:iD,uv_pars_vertex:aD,uv_vertex:rD,worldpos_vertex:sD,background_vert:oD,background_frag:lD,backgroundCube_vert:cD,backgroundCube_frag:uD,cube_vert:fD,cube_frag:hD,depth_vert:dD,depth_frag:pD,distance_vert:mD,distance_frag:_D,equirect_vert:gD,equirect_frag:vD,linedashed_vert:xD,linedashed_frag:yD,meshbasic_vert:SD,meshbasic_frag:MD,meshlambert_vert:bD,meshlambert_frag:ED,meshmatcap_vert:TD,meshmatcap_frag:AD,meshnormal_vert:RD,meshnormal_frag:CD,meshphong_vert:wD,meshphong_frag:DD,meshphysical_vert:ND,meshphysical_frag:UD,meshtoon_vert:LD,meshtoon_frag:OD,points_vert:PD,points_frag:ID,shadow_vert:zD,shadow_frag:FD,sprite_vert:BD,sprite_frag:HD},We={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},hr={basic:{uniforms:Oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Oi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Oi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Oi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Oi([We.points,We.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Oi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Oi([We.common,We.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Oi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Oi([We.sprite,We.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Oi([We.common,We.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Oi([We.lights,We.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};hr.physical={uniforms:Oi([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Wh={r:0,b:0,g:0},GD=new kn,yE=new vt;yE.set(-1,0,0,0,1,0,0,0,1);function VD(o,e,n,i,r,l){const u=new Xt(0);let f=r===!0?0:1,p,d,_=null,x=0,g=null;function v(U){let P=U.isScene===!0?U.background:null;if(P&&P.isTexture){const R=U.backgroundBlurriness>0;P=e.get(P,R)}return P}function M(U){let P=!1;const R=v(U);R===null?y(u,f):R&&R.isColor&&(y(R,1),P=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(o.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(U,P){const R=v(P);R&&(R.isCubeTexture||R.mapping===Dd)?(d===void 0&&(d=new br(new $u(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:pc(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,O,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(GD.makeRotationFromEuler(P.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(yE),d.material.toneMapped=Gt.getTransfer(R.colorSpace)!==un,(_!==R||x!==R.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=R,x=R.version,g=o.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new br(new Ud(2,2),new Er({name:"BackgroundMaterial",uniforms:pc(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Gt.getTransfer(R.colorSpace)!==un,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=R,x=R.version,g=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,P){U.getRGB(Wh,_E(o)),n.buffers.color.setClear(Wh.r,Wh.g,Wh.b,P,l)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,P=1){u.set(U),f=P,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,y(u,f)},render:M,addToRenderList:b,dispose:S}}function kD(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},r=g(null);let l=r,u=!1;function f(H,G,ie,re,Z){let B=!1;const V=x(H,re,ie,G);l!==V&&(l=V,d(l.object)),B=v(H,re,ie,Z),B&&M(H,re,ie,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,R(H,G,ie,re),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function _(H){return o.deleteVertexArray(H)}function x(H,G,ie,re){const Z=re.wireframe===!0;let B=i[G.id];B===void 0&&(B={},i[G.id]=B);const V=H.isInstancedMesh===!0?H.id:0;let Q=B[V];Q===void 0&&(Q={},B[V]=Q);let de=Q[ie.id];de===void 0&&(de={},Q[ie.id]=de);let k=de[Z];return k===void 0&&(k=g(p()),de[Z]=k),k}function g(H){const G=[],ie=[],re=[];for(let Z=0;Z<n;Z++)G[Z]=0,ie[Z]=0,re[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ie,attributeDivisors:re,object:H,attributes:{},index:null}}function v(H,G,ie,re){const Z=l.attributes,B=G.attributes;let V=0;const Q=ie.getAttributes();for(const de in Q)if(Q[de].location>=0){const z=Z[de];let J=B[de];if(J===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(J=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(J=H.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;V++}return l.attributesNum!==V||l.index!==re}function M(H,G,ie,re){const Z={},B=G.attributes;let V=0;const Q=ie.getAttributes();for(const de in Q)if(Q[de].location>=0){let z=B[de];z===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(z=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(z=H.instanceColor));const J={};J.attribute=z,z&&z.data&&(J.data=z.data),Z[de]=J,V++}l.attributes=Z,l.attributesNum=V,l.index=re}function b(){const H=l.newAttributes;for(let G=0,ie=H.length;G<ie;G++)H[G]=0}function y(H){S(H,0)}function S(H,G){const ie=l.newAttributes,re=l.enabledAttributes,Z=l.attributeDivisors;ie[H]=1,re[H]===0&&(o.enableVertexAttribArray(H),re[H]=1),Z[H]!==G&&(o.vertexAttribDivisor(H,G),Z[H]=G)}function U(){const H=l.newAttributes,G=l.enabledAttributes;for(let ie=0,re=G.length;ie<re;ie++)G[ie]!==H[ie]&&(o.disableVertexAttribArray(ie),G[ie]=0)}function P(H,G,ie,re,Z,B,V){V===!0?o.vertexAttribIPointer(H,G,ie,Z,B):o.vertexAttribPointer(H,G,ie,re,Z,B)}function R(H,G,ie,re){b();const Z=re.attributes,B=ie.getAttributes(),V=G.defaultAttributeValues;for(const Q in B){const de=B[Q];if(de.location>=0){let k=Z[Q];if(k===void 0&&(Q==="instanceMatrix"&&H.instanceMatrix&&(k=H.instanceMatrix),Q==="instanceColor"&&H.instanceColor&&(k=H.instanceColor)),k!==void 0){const z=k.normalized,J=k.itemSize,be=e.get(k);if(be===void 0)continue;const Re=be.buffer,Pe=be.type,te=be.bytesPerElement,xe=Pe===o.INT||Pe===o.UNSIGNED_INT||k.gpuType===w0;if(k.isInterleavedBufferAttribute){const Se=k.data,Be=Se.stride,at=k.offset;if(Se.isInstancedInterleavedBuffer){for(let qe=0;qe<de.locationSize;qe++)S(de.location+qe,Se.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let qe=0;qe<de.locationSize;qe++)y(de.location+qe);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let qe=0;qe<de.locationSize;qe++)P(de.location+qe,J/de.locationSize,Pe,z,Be*te,(at+J/de.locationSize*qe)*te,xe)}else{if(k.isInstancedBufferAttribute){for(let Se=0;Se<de.locationSize;Se++)S(de.location+Se,k.meshPerAttribute);H.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Se=0;Se<de.locationSize;Se++)y(de.location+Se);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let Se=0;Se<de.locationSize;Se++)P(de.location+Se,J/de.locationSize,Pe,z,J*te,J/de.locationSize*Se*te,xe)}}else if(V!==void 0){const z=V[Q];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(de.location,z);break;case 3:o.vertexAttrib3fv(de.location,z);break;case 4:o.vertexAttrib4fv(de.location,z);break;default:o.vertexAttrib1fv(de.location,z)}}}}U()}function D(){N();for(const H in i){const G=i[H];for(const ie in G){const re=G[ie];for(const Z in re){const B=re[Z];for(const V in B)_(B[V].object),delete B[V];delete re[Z]}}delete i[H]}}function O(H){if(i[H.id]===void 0)return;const G=i[H.id];for(const ie in G){const re=G[ie];for(const Z in re){const B=re[Z];for(const V in B)_(B[V].object),delete B[V];delete re[Z]}}delete i[H.id]}function C(H){for(const G in i){const ie=i[G];for(const re in ie){const Z=ie[re];if(Z[H.id]===void 0)continue;const B=Z[H.id];for(const V in B)_(B[V].object),delete B[V];delete Z[H.id]}}}function T(H){for(const G in i){const ie=i[G],re=H.isInstancedMesh===!0?H.id:0,Z=ie[re];if(Z!==void 0){for(const B in Z){const V=Z[B];for(const Q in V)_(V[Q].object),delete V[Q];delete Z[B]}delete ie[re],Object.keys(ie).length===0&&delete i[G]}}}function N(){I(),u=!0,l!==r&&(l=r,d(l.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:N,resetDefaultState:I,dispose:D,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:y,disableUnusedAttributes:U}}function XD(o,e,n){let i;function r(p){i=p}function l(p,d){o.drawArrays(i,p,d),n.update(d,i,1)}function u(p,d,_){_!==0&&(o.drawArraysInstanced(i,p,d,_),n.update(d,i,_))}function f(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,d,0,_);let g=0;for(let v=0;v<_;v++)g+=d[v];n.update(g,i,1)}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function WD(o,e,n,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(C){return!(C!==nr&&i.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(C){const T=C===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ba&&i.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_r&&!T)}function p(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(_t("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&_t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:R,maxSamples:D,samples:O}}function YD(o){const e=this;let n=null,i=0,r=!1,l=!1;const u=new Ro,f=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const v=x.length!==0||g||i!==0||r;return r=g,i=x.length,v},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){n=_(x,g,0)},this.setState=function(x,g,v){const M=x.clippingPlanes,b=x.clipIntersection,y=x.clipShadows,S=o.get(x);if(!r||M===null||M.length===0||l&&!y)l?_(null):d();else{const U=l?0:i,P=U*4;let R=S.clippingState||null;p.value=R,R=_(M,g,P,v);for(let D=0;D!==P;++D)R[D]=n[D];S.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function _(x,g,v,M){const b=x!==null?x.length:0;let y=null;if(b!==0){if(y=p.value,M!==!0||y===null){const S=v+b*4,U=g.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,R=v;P!==b;++P,R+=4)u.copy(x[P]).applyMatrix4(U,f),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Xs=4,KM=[.125,.215,.35,.446,.526,.582],wo=20,qD=256,pu=new vE,QM=new Xt;let U_=null,L_=0,O_=0,P_=!1;const ZD=new le;class JM{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,l={}){const{size:u=256,position:f=ZD}=l;U_=this._renderer.getRenderTarget(),L_=this._renderer.getActiveCubeFace(),O_=this._renderer.getActiveMipmapLevel(),P_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,i,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(U_,L_,O_),this._renderer.xr.enabled=P_,e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xo||e.mapping===hc?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),U_=this._renderer.getRenderTarget(),L_=this._renderer.getActiveCubeFace(),O_=this._renderer.getActiveMipmapLevel(),P_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:as,format:nr,colorSpace:Sd,depthBuffer:!1},r=$M(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$M(e,n,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jD(l)),this._blurMaterial=QD(l,e,n),this._ggxMaterial=KD(l,e,n)}return r}_compileMaterial(e){const n=new br(new Wa,e);this._renderer.compile(n,pu)}_sceneToCubeUV(e,n,i,r,l){const p=new Fa(90,1,n,i),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,v=x.toneMapping;x.getClearColor(QM),x.toneMapping=xr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(r),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new br(new $u,new B0({name:"PMREM.Background",side:$i,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,S=!0):(y.color.copy(QM),S=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(p.up.set(0,d[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[P],l.y,l.z)):R===1?(p.up.set(0,0,d[P]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[P],l.z)):(p.up.set(0,d[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[P]));const D=this._cubeSize;kl(r,R*D,P>2?D:0,D,D),x.setRenderTarget(r),S&&x.render(b,p),x.render(e,p)}x.toneMapping=v,x.autoClear=g,e.background=U}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xo||e.mapping===hc;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=t1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e1());const l=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;kl(n,0,0,3*p,2*p),i.setRenderTarget(n),i.render(u,pu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[i];f.material=u;const p=u.uniforms,d=i/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,v=x*g,{_lodMax:M}=this,b=this._sizeLods[i],y=3*b*(i>M-Xs?i-M+Xs:0),S=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=v,p.mipInt.value=M-n,kl(l,y,S,3*b,2*b),r.setRenderTarget(l),r.render(f,pu),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-i,kl(e,y,S,3*b,2*b),r.setRenderTarget(e),r.render(f,pu)}_blur(e,n,i,r,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,i,r,"latitudinal",l),this._halfBlur(u,e,i,i,r,"longitudinal",l)}_halfBlur(e,n,i,r,l,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[r];x.material=d;const g=d.uniforms,v=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*wo-1),b=l/M,y=isFinite(l)?1+Math.floor(_*b):wo;y>wo&&_t(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${wo}`);const S=[];let U=0;for(let C=0;C<wo;++C){const T=C/b,N=Math.exp(-T*T/2);S.push(N),C===0?U+=N:C<y&&(U+=2*N)}for(let C=0;C<S.length;C++)S[C]=S[C]/U;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:P}=this;g.dTheta.value=M,g.mipInt.value=P-i;const R=this._sizeLods[r],D=3*R*(r>P-Xs?r-P+Xs:0),O=4*(this._cubeSize-R);kl(n,D,O,3*R,2*R),p.setRenderTarget(n),p.render(x,pu)}}function jD(o){const e=[],n=[],i=[];let r=o;const l=o-Xs+1+KM.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);e.push(f);let p=1/f;u>o-Xs?p=KM[u-o+Xs-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],v=6,M=6,b=3,y=2,S=1,U=new Float32Array(b*M*v),P=new Float32Array(y*M*v),R=new Float32Array(S*M*v);for(let O=0;O<v;O++){const C=O%3*2/3-1,T=O>2?0:-1,N=[C,T,0,C+2/3,T,0,C+2/3,T+1,0,C,T,0,C+2/3,T+1,0,C,T+1,0];U.set(N,b*M*O),P.set(g,y*M*O);const I=[O,O,O,O,O,O];R.set(I,S*M*O)}const D=new Wa;D.setAttribute("position",new ka(U,b)),D.setAttribute("uv",new ka(P,y)),D.setAttribute("faceIndex",new ka(R,S)),i.push(new br(D,null)),r>Xs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $M(o,e,n){const i=new yr(o,e,n);return i.texture.mapping=Dd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(o,e,n,i,r){o.viewport.set(e,n,i,r),o.scissor.set(e,n,i,r)}function KD(o,e,n){return new Er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ld(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function QD(o,e,n){const i=new Float32Array(wo),r=new le(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function e1(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function t1(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}class SE extends yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $u(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:pc(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$i,blending:es});l.uniforms.tEquirect.value=n;const u=new br(r,l),f=n.minFilter;return n.minFilter===Uo&&(n.minFilter=Ri),new iw(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,i,r);e.setRenderTarget(l)}}function JD(o){let e=new WeakMap,n=new WeakMap,i=null;function r(g,v=!1){return g==null?null:v?u(g):l(g)}function l(g){if(g&&g.isTexture){const v=g.mapping;if(v===r_||v===s_)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const b=new SE(M.height);return b.fromEquirectangularTexture(o,g),e.set(g,b),g.addEventListener("dispose",d),f(b.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const v=g.mapping,M=v===r_||v===s_,b=v===Xo||v===hc;if(M||b){let y=n.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return i===null&&(i=new JM(o)),y=M?i.fromEquirectangular(g,y):i.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const U=g.image;return M&&U&&U.height>0||b&&U&&p(U)?(i===null&&(i=new JM(o)),y=M?i.fromEquirectangular(g):i.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function f(g,v){return v===r_?g.mapping=Xo:v===s_&&(g.mapping=hc),g}function p(g){let v=0;const M=6;for(let b=0;b<M;b++)g[b]!==void 0&&v++;return v===M}function d(g){const v=g.target;v.removeEventListener("dispose",d);const M=e.get(v);M!==void 0&&(e.delete(v),M.dispose())}function _(g){const v=g.target;v.removeEventListener("dispose",_);const M=n.get(v);M!==void 0&&(n.delete(v),M.dispose())}function x(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:x}}function $D(o){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=o.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ic("WebGLRenderer: "+i+" extension not supported."),r}}}function eN(o,e,n,i){const r={},l=new WeakMap;function u(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete r[g.id];const v=l.get(g);v&&(e.remove(v),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(x,g){return r[g.id]===!0||(g.addEventListener("dispose",u),r[g.id]=!0,n.memory.geometries++),g}function p(x){const g=x.attributes;for(const v in g)e.update(g[v],o.ARRAY_BUFFER)}function d(x){const g=[],v=x.index,M=x.attributes.position;let b=0;if(M===void 0)return;if(v!==null){const U=v.array;b=v.version;for(let P=0,R=U.length;P<R;P+=3){const D=U[P+0],O=U[P+1],C=U[P+2];g.push(D,O,O,C,C,D)}}else{const U=M.array;b=M.version;for(let P=0,R=U.length/3-1;P<R;P+=3){const D=P+0,O=P+1,C=P+2;g.push(D,O,O,C,C,D)}}const y=new(M.count>=65535?uE:cE)(g,1);y.version=b;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function _(x){const g=l.get(x);if(g){const v=x.index;v!==null&&g.version<v.version&&d(x)}else d(x);return l.get(x)}return{get:f,update:p,getWireframeAttribute:_}}function tN(o,e,n){let i;function r(x){i=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function p(x,g){o.drawElements(i,g,l,x*u),n.update(g,i,1)}function d(x,g,v){v!==0&&(o.drawElementsInstanced(i,g,l,x*u,v),n.update(g,i,v))}function _(x,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,l,x,0,v);let b=0;for(let y=0;y<v;y++)b+=g[y];n.update(b,i,1)}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function nN(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:Wt("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function iN(o,e,n){const i=new WeakMap,r=new zn;function l(u,f,p){const d=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let g=i.get(f);if(g===void 0||g.count!==x){let I=function(){T.dispose(),i.delete(f),f.removeEventListener("dispose",I)};var v=I;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),b===!0&&(R=2),y===!0&&(R=3);let D=f.attributes.position.count*R,O=1;D>e.maxTextureSize&&(O=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const C=new Float32Array(D*O*4*x),T=new sE(C,D,O,x);T.type=_r,T.needsUpdate=!0;const N=R*4;for(let H=0;H<x;H++){const G=S[H],ie=U[H],re=P[H],Z=D*O*4*H;for(let B=0;B<G.count;B++){const V=B*N;M===!0&&(r.fromBufferAttribute(G,B),C[Z+V+0]=r.x,C[Z+V+1]=r.y,C[Z+V+2]=r.z,C[Z+V+3]=0),b===!0&&(r.fromBufferAttribute(ie,B),C[Z+V+4]=r.x,C[Z+V+5]=r.y,C[Z+V+6]=r.z,C[Z+V+7]=0),y===!0&&(r.fromBufferAttribute(re,B),C[Z+V+8]=r.x,C[Z+V+9]=r.y,C[Z+V+10]=r.z,C[Z+V+11]=re.itemSize===4?r.w:1)}}g={count:x,texture:T,size:new $t(D,O)},i.set(f,g),f.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<d.length;y++)M+=d[y];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function aN(o,e,n,i,r){let l=new WeakMap;function u(d){const _=r.render.frame,x=d.geometry,g=e.get(d,x);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==_&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,_))),d.isSkinnedMesh){const v=d.skeleton;l.get(v)!==_&&(v.update(),l.set(v,_))}return g}function f(){l=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),i.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:f}}const rN={[Xb]:"LINEAR_TONE_MAPPING",[Wb]:"REINHARD_TONE_MAPPING",[Yb]:"CINEON_TONE_MAPPING",[qb]:"ACES_FILMIC_TONE_MAPPING",[jb]:"AGX_TONE_MAPPING",[Kb]:"NEUTRAL_TONE_MAPPING",[Zb]:"CUSTOM_TONE_MAPPING"};function sN(o,e,n,i,r,l){const u=new yr(e,n,{type:o,depthBuffer:r,stencilBuffer:l,samples:i?4:0,depthTexture:r?new dc(e,n):void 0}),f=new yr(e,n,{type:as,depthBuffer:!1,stencilBuffer:!1}),p=new Wa;p.setAttribute("position",new Xa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Xa([0,2,0,0,2,0],2));const d=new ew({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new br(p,d),x=new vE(-1,1,1,-1,0,1);let g=null,v=null,M=!1,b,y=null,S=[],U=!1;this.setSize=function(P,R){u.setSize(P,R),f.setSize(P,R);for(let D=0;D<S.length;D++){const O=S[D];O.setSize&&O.setSize(P,R)}},this.setEffects=function(P){S=P,U=S.length>0&&S[0].isRenderPass===!0;const R=u.width,D=u.height;for(let O=0;O<S.length;O++){const C=S[O];C.setSize&&C.setSize(R,D)}},this.begin=function(P,R){if(M||P.toneMapping===xr&&S.length===0)return!1;if(y=R,R!==null){const D=R.width,O=R.height;(u.width!==D||u.height!==O)&&this.setSize(D,O)}return U===!1&&P.setRenderTarget(u),b=P.toneMapping,P.toneMapping=xr,!0},this.hasRenderPass=function(){return U},this.end=function(P,R){P.toneMapping=b,M=!0;let D=u,O=f;for(let C=0;C<S.length;C++){const T=S[C];if(T.enabled!==!1&&(T.render(P,O,D,R),T.needsSwap!==!1)){const N=D;D=O,O=N}}if(g!==P.outputColorSpace||v!==P.toneMapping){g=P.outputColorSpace,v=P.toneMapping,d.defines={},Gt.getTransfer(g)===un&&(d.defines.SRGB_TRANSFER="");const C=rN[v];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(y),P.render(_,x),y=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),p.dispose(),d.dispose()}}const ME=new Bi,Jg=new dc(1,1),bE=new sE,EE=new D2,TE=new pE,n1=[],i1=[],a1=new Float32Array(16),r1=new Float32Array(9),s1=new Float32Array(4);function _c(o,e,n){const i=o[0];if(i<=0||i>0)return o;const r=e*n;let l=n1[r];if(l===void 0&&(l=new Float32Array(r),n1[r]=l),e!==0){i.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,o[u].toArray(l,f)}return l}function ni(o,e){if(o.length!==e.length)return!1;for(let n=0,i=o.length;n<i;n++)if(o[n]!==e[n])return!1;return!0}function ii(o,e){for(let n=0,i=e.length;n<i;n++)o[n]=e[n]}function Od(o,e){let n=i1[e];n===void 0&&(n=new Int32Array(e),i1[e]=n);for(let i=0;i!==e;++i)n[i]=o.allocateTextureUnit();return n}function oN(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function lN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ni(n,e))return;o.uniform2fv(this.addr,e),ii(n,e)}}function cN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ni(n,e))return;o.uniform3fv(this.addr,e),ii(n,e)}}function uN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ni(n,e))return;o.uniform4fv(this.addr,e),ii(n,e)}}function fN(o,e){const n=this.cache,i=e.elements;if(i===void 0){if(ni(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),ii(n,e)}else{if(ni(n,i))return;s1.set(i),o.uniformMatrix2fv(this.addr,!1,s1),ii(n,i)}}function hN(o,e){const n=this.cache,i=e.elements;if(i===void 0){if(ni(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),ii(n,e)}else{if(ni(n,i))return;r1.set(i),o.uniformMatrix3fv(this.addr,!1,r1),ii(n,i)}}function dN(o,e){const n=this.cache,i=e.elements;if(i===void 0){if(ni(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),ii(n,e)}else{if(ni(n,i))return;a1.set(i),o.uniformMatrix4fv(this.addr,!1,a1),ii(n,i)}}function pN(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function mN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ni(n,e))return;o.uniform2iv(this.addr,e),ii(n,e)}}function _N(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ni(n,e))return;o.uniform3iv(this.addr,e),ii(n,e)}}function gN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ni(n,e))return;o.uniform4iv(this.addr,e),ii(n,e)}}function vN(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function xN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ni(n,e))return;o.uniform2uiv(this.addr,e),ii(n,e)}}function yN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ni(n,e))return;o.uniform3uiv(this.addr,e),ii(n,e)}}function SN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ni(n,e))return;o.uniform4uiv(this.addr,e),ii(n,e)}}function MN(o,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Jg.compareFunction=n.isReversedDepthBuffer()?I0:P0,l=Jg):l=ME,n.setTexture2D(e||l,r)}function bN(o,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||EE,r)}function EN(o,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||TE,r)}function TN(o,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bE,r)}function AN(o){switch(o){case 5126:return oN;case 35664:return lN;case 35665:return cN;case 35666:return uN;case 35674:return fN;case 35675:return hN;case 35676:return dN;case 5124:case 35670:return pN;case 35667:case 35671:return mN;case 35668:case 35672:return _N;case 35669:case 35673:return gN;case 5125:return vN;case 36294:return xN;case 36295:return yN;case 36296:return SN;case 35678:case 36198:case 36298:case 36306:case 35682:return MN;case 35679:case 36299:case 36307:return bN;case 35680:case 36300:case 36308:case 36293:return EN;case 36289:case 36303:case 36311:case 36292:return TN}}function RN(o,e){o.uniform1fv(this.addr,e)}function CN(o,e){const n=_c(e,this.size,2);o.uniform2fv(this.addr,n)}function wN(o,e){const n=_c(e,this.size,3);o.uniform3fv(this.addr,n)}function DN(o,e){const n=_c(e,this.size,4);o.uniform4fv(this.addr,n)}function NN(o,e){const n=_c(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function UN(o,e){const n=_c(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function LN(o,e){const n=_c(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function ON(o,e){o.uniform1iv(this.addr,e)}function PN(o,e){o.uniform2iv(this.addr,e)}function IN(o,e){o.uniform3iv(this.addr,e)}function zN(o,e){o.uniform4iv(this.addr,e)}function FN(o,e){o.uniform1uiv(this.addr,e)}function BN(o,e){o.uniform2uiv(this.addr,e)}function HN(o,e){o.uniform3uiv(this.addr,e)}function GN(o,e){o.uniform4uiv(this.addr,e)}function VN(o,e,n){const i=this.cache,r=e.length,l=Od(n,r);ni(i,l)||(o.uniform1iv(this.addr,l),ii(i,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Jg:u=ME;for(let f=0;f!==r;++f)n.setTexture2D(e[f]||u,l[f])}function kN(o,e,n){const i=this.cache,r=e.length,l=Od(n,r);ni(i,l)||(o.uniform1iv(this.addr,l),ii(i,l));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||EE,l[u])}function XN(o,e,n){const i=this.cache,r=e.length,l=Od(n,r);ni(i,l)||(o.uniform1iv(this.addr,l),ii(i,l));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||TE,l[u])}function WN(o,e,n){const i=this.cache,r=e.length,l=Od(n,r);ni(i,l)||(o.uniform1iv(this.addr,l),ii(i,l));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||bE,l[u])}function YN(o){switch(o){case 5126:return RN;case 35664:return CN;case 35665:return wN;case 35666:return DN;case 35674:return NN;case 35675:return UN;case 35676:return LN;case 5124:case 35670:return ON;case 35667:case 35671:return PN;case 35668:case 35672:return IN;case 35669:case 35673:return zN;case 5125:return FN;case 36294:return BN;case 36295:return HN;case 36296:return GN;case 35678:case 36198:case 36298:case 36306:case 35682:return VN;case 35679:case 36299:case 36307:return kN;case 35680:case 36300:case 36308:case 36293:return XN;case 36289:case 36303:case 36311:case 36292:return WN}}class qN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AN(n.type)}}class ZN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YN(n.type)}}class jN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(e,n[f.id],i)}}}const I_=/(\w+)(\])?(\[|\.)?/g;function o1(o,e){o.seq.push(e),o.map[e.id]=e}function KN(o,e,n){const i=o.name,r=i.length;for(I_.lastIndex=0;;){const l=I_.exec(i),u=I_.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===r){o1(n,d===void 0?new qN(f,o,e):new ZN(f,o,e));break}else{let x=n.map[f];x===void 0&&(x=new jN(f),o1(n,x)),n=x}}}class od{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);KN(f,p,this)}const r=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):l.push(u);r.length>0&&(this.seq=r.concat(l))}setValue(e,n,i,r){const l=this.map[n];l!==void 0&&l.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,l=e.length;r!==l;++r){const u=e[r];u.id in n&&i.push(u)}return i}}function l1(o,e,n){const i=o.createShader(e);return o.shaderSource(i,n),o.compileShader(i),i}const QN=37297;let JN=0;function $N(o,e){const n=o.split(`
`),i=[],r=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=r;u<l;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return i.join(`
`)}const c1=new vt;function eU(o){Gt._getMatrix(c1,Gt.workingColorSpace,o);const e=`mat3( ${c1.elements.map(n=>n.toFixed(4))} )`;switch(Gt.getTransfer(o)){case Md:return[e,"LinearTransferOETF"];case un:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function u1(o,e,n){const i=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+$N(o.getShaderSource(e),f)}else return l}function tU(o,e){const n=eU(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const nU={[Xb]:"Linear",[Wb]:"Reinhard",[Yb]:"Cineon",[qb]:"ACESFilmic",[jb]:"AgX",[Kb]:"Neutral",[Zb]:"Custom"};function iU(o,e){const n=nU[e];return n===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yh=new le;function aU(){Gt.getLuminanceCoefficients(Yh);const o=Yh.x.toFixed(4),e=Yh.y.toFixed(4),n=Yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rU(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eu).join(`
`)}function sU(o){const e=[];for(const n in o){const i=o[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oU(o,e){const n={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const l=o.getActiveAttrib(e,r),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return n}function Eu(o){return o!==""}function f1(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h1(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lU=/^[ \t]*#include +<([\w\d./]+)>/gm;function $g(o){return o.replace(lU,uU)}const cU=new Map;function uU(o,e){let n=Ct[e];if(n===void 0){const i=cU.get(e);if(i!==void 0)n=Ct[i],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $g(n)}const fU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d1(o){return o.replace(fU,hU)}function hU(o,e,n,i){let r="";for(let l=parseInt(e);l<parseInt(n);l++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function p1(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dU={[nd]:"SHADOWMAP_TYPE_PCF",[bu]:"SHADOWMAP_TYPE_VSM"};function pU(o){return dU[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mU={[Xo]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE",[Dd]:"ENVMAP_TYPE_CUBE_UV"};function _U(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":mU[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const gU={[hc]:"ENVMAP_MODE_REFRACTION"};function vU(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":gU[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xU={[kb]:"ENVMAP_BLENDING_MULTIPLY",[c2]:"ENVMAP_BLENDING_MIX",[u2]:"ENVMAP_BLENDING_ADD"};function yU(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":xU[o.combine]||"ENVMAP_BLENDING_NONE"}function SU(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function MU(o,e,n,i){const r=o.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=pU(n),d=_U(n),_=vU(n),x=yU(n),g=SU(n),v=rU(n),M=sU(l),b=r.createProgram();let y,S,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Eu).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Eu).join(`
`),S.length>0&&(S+=`
`)):(y=[p1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eu).join(`
`),S=[p1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?Ct.tonemapping_pars_fragment:"",n.toneMapping!==xr?iU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,tU("linearToOutputTexel",n.outputColorSpace),aU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eu).join(`
`)),u=$g(u),u=f1(u,n),u=h1(u,n),f=$g(f),f=f1(f,n),f=h1(f,n),u=d1(u),f=d1(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===AM?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===AM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=U+y+u,R=U+S+f,D=l1(r,r.VERTEX_SHADER,P),O=l1(r,r.FRAGMENT_SHADER,R);r.attachShader(b,D),r.attachShader(b,O),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(H){if(o.debug.checkShaderErrors){const G=r.getProgramInfoLog(b)||"",ie=r.getShaderInfoLog(D)||"",re=r.getShaderInfoLog(O)||"",Z=G.trim(),B=ie.trim(),V=re.trim();let Q=!0,de=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,b,D,O);else{const k=u1(r,D,"vertex"),z=u1(r,O,"fragment");Wt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+k+`
`+z)}else Z!==""?_t("WebGLProgram: Program Info Log:",Z):(B===""||V==="")&&(de=!1);de&&(H.diagnostics={runnable:Q,programLog:Z,vertexShader:{log:B,prefix:y},fragmentShader:{log:V,prefix:S}})}r.deleteShader(D),r.deleteShader(O),T=new od(r,b),N=oU(r,b)}let T;this.getUniforms=function(){return T===void 0&&C(this),T};let N;this.getAttributes=function(){return N===void 0&&C(this),N};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(b,QN)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JN++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=O,this}let bU=0;class EU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TU(e),n.set(e,i)),i}}class TU{constructor(e){this.id=bU++,this.code=e,this.usedTimes=0}}function AU(o){return o===Wo||o===xd||o===yd}function RU(o,e,n,i,r,l){const u=new oE,f=new EU,p=new Set,d=[],_=new Map,x=i.logarithmicDepthBuffer;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,N,I,H,G,ie){const re=H.fog,Z=G.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Q=e.get(T.envMap||B,V),de=Q&&Q.mapping===Dd?Q.image.height:null,k=v[T.type];T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&_t("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const z=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,J=z!==void 0?z.length:0;let be=0;Z.morphAttributes.position!==void 0&&(be=1),Z.morphAttributes.normal!==void 0&&(be=2),Z.morphAttributes.color!==void 0&&(be=3);let Re,Pe,te,xe;if(k){const Ee=hr[k];Re=Ee.vertexShader,Pe=Ee.fragmentShader}else{Re=T.vertexShader,Pe=T.fragmentShader;const Ee=f.getVertexShaderStage(T),ot=f.getFragmentShaderStage(T);f.update(T,Ee,ot),te=Ee.id,xe=ot.id}const Se=o.getRenderTarget(),Be=o.state.buffers.depth.getReversed(),at=G.isInstancedMesh===!0,qe=G.isBatchedMesh===!0,Et=!!T.map,Ye=!!T.matcap,rt=!!Q,ht=!!T.aoMap,ut=!!T.lightMap,fe=!!T.bumpMap&&T.wireframe===!1,It=!!T.normalMap,Yt=!!T.displacementMap,en=!!T.emissiveMap,pt=!!T.metalnessMap,qt=!!T.roughnessMap,j=T.anisotropy>0,zt=T.clearcoat>0,dt=T.dispersion>0,F=T.iridescence>0,A=T.sheen>0,$=T.transmission>0,ae=j&&!!T.anisotropyMap,pe=zt&&!!T.clearcoatMap,Le=zt&&!!T.clearcoatNormalMap,De=zt&&!!T.clearcoatRoughnessMap,ge=F&&!!T.iridescenceMap,me=F&&!!T.iridescenceThicknessMap,Oe=A&&!!T.sheenColorMap,ke=A&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,ze=!!T.specularColorMap,Ue=!!T.specularIntensityMap,et=$&&!!T.transmissionMap,nt=$&&!!T.thicknessMap,Y=!!T.gradientMap,Ne=!!T.alphaMap,ve=T.alphaTest>0,Ie=!!T.alphaHash,He=!!T.extensions;let Ae=xr;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ae=o.toneMapping);const Ce={shaderID:k,shaderType:T.type,shaderName:T.name,vertexShader:Re,fragmentShader:Pe,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:qe,batchingColor:qe&&G._colorsTexture!==null,instancing:at,instancingColor:at&&G.instanceColor!==null,instancingMorph:at&&G.morphTexture!==null,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Et,matcap:Ye,envMap:rt,envMapMode:rt&&Q.mapping,envMapCubeUVHeight:de,aoMap:ht,lightMap:ut,bumpMap:fe,normalMap:It,displacementMap:Yt,emissiveMap:en,normalMapObjectSpace:It&&T.normalMapType===d2,normalMapTangentSpace:It&&T.normalMapType===bM,packedNormalMap:It&&T.normalMapType===bM&&AU(T.normalMap.format),metalnessMap:pt,roughnessMap:qt,anisotropy:j,anisotropyMap:ae,clearcoat:zt,clearcoatMap:pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:De,dispersion:dt,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:me,sheen:A,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:ze,specularIntensityMap:Ue,transmission:$,transmissionMap:et,thicknessMap:nt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===nc&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:Ie,combine:T.combine,mapUv:Et&&M(T.map.channel),aoMapUv:ht&&M(T.aoMap.channel),lightMapUv:ut&&M(T.lightMap.channel),bumpMapUv:fe&&M(T.bumpMap.channel),normalMapUv:It&&M(T.normalMap.channel),displacementMapUv:Yt&&M(T.displacementMap.channel),emissiveMapUv:en&&M(T.emissiveMap.channel),metalnessMapUv:pt&&M(T.metalnessMap.channel),roughnessMapUv:qt&&M(T.roughnessMap.channel),anisotropyMapUv:ae&&M(T.anisotropyMap.channel),clearcoatMapUv:pe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(T.sheenRoughnessMap.channel),specularMapUv:Fe&&M(T.specularMap.channel),specularColorMapUv:ze&&M(T.specularColorMap.channel),specularIntensityMapUv:Ue&&M(T.specularIntensityMap.channel),transmissionMapUv:et&&M(T.transmissionMap.channel),thicknessMapUv:nt&&M(T.thicknessMap.channel),alphaMapUv:Ne&&M(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(It||j),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(Et||Ne),fog:!!re,useFog:T.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&It===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Be,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:be,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Et&&T.map.isVideoTexture===!0&&Gt.getTransfer(T.map.colorSpace)===un,decodeVideoTextureEmissive:en&&T.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(T.emissiveMap.colorSpace)===un,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Kr,flipSided:T.side===$i,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)N.push(I),N.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(S(N,T),U(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function U(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function P(T){const N=v[T.type];let I;if(N){const H=hr[N];I=Q2.clone(H.uniforms)}else I=T.uniforms;return I}function R(T,N){let I=_.get(N);return I!==void 0?++I.usedTimes:(I=new MU(o,N,T,r),d.push(I),_.set(N,I)),I}function D(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){f.remove(T)}function C(){f.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:D,releaseShaderCache:O,programs:d,dispose:C}}function CU(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function i(u){o.delete(u)}function r(u,f,p){o.get(u)[f]=p}function l(){o=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:l}}function wU(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function m1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _1(){const o=[];let e=0;const n=[],i=[],r=[];function l(){e=0,n.length=0,i.length=0,r.length=0}function u(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function f(g,v,M,b,y,S){let U=o[e];return U===void 0?(U={id:g.id,object:g,geometry:v,material:M,materialVariant:u(g),groupOrder:b,renderOrder:g.renderOrder,z:y,group:S},o[e]=U):(U.id=g.id,U.object=g,U.geometry=v,U.material=M,U.materialVariant=u(g),U.groupOrder=b,U.renderOrder=g.renderOrder,U.z=y,U.group=S),e++,U}function p(g,v,M,b,y,S){const U=f(g,v,M,b,y,S);M.transmission>0?i.push(U):M.transparent===!0?r.push(U):n.push(U)}function d(g,v,M,b,y,S){const U=f(g,v,M,b,y,S);M.transmission>0?i.unshift(U):M.transparent===!0?r.unshift(U):n.unshift(U)}function _(g,v,M){n.length>1&&n.sort(g||wU),i.length>1&&i.sort(v||m1),r.length>1&&r.sort(v||m1),M&&(n.reverse(),i.reverse(),r.reverse())}function x(){for(let g=e,v=o.length;g<v;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:i,transparent:r,init:l,push:p,unshift:d,finish:x,sort:_}}function DU(){let o=new WeakMap;function e(i,r){const l=o.get(i);let u;return l===void 0?(u=new _1,o.set(i,[u])):r>=l.length?(u=new _1,l.push(u)):u=l[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function NU(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new Xt};break;case"SpotLight":n={position:new le,direction:new le,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":n={color:new Xt,position:new le,halfWidth:new le,halfHeight:new le};break}return o[e.id]=n,n}}}function UU(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let LU=0;function OU(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function PU(o){const e=new NU,n=UU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new le);const r=new le,l=new kn,u=new kn;function f(d){let _=0,x=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,M=0,b=0,y=0,S=0,U=0,P=0,R=0,D=0,O=0,C=0;d.sort(OU);for(let N=0,I=d.length;N<I;N++){const H=d[N],G=H.color,ie=H.intensity,re=H.distance;let Z=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Wo?Z=H.shadow.map.texture:Z=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=G.r*ie,x+=G.g*ie,g+=G.b*ie;else if(H.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(H.sh.coefficients[B],ie);C++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,Q=n.get(H);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=Z,i.directionalShadowMatrix[v]=H.shadow.matrix,U++}i.directional[v]=B,v++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(G).multiplyScalar(ie),B.distance=re,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,i.spot[b]=B;const V=H.shadow;if(H.map&&(i.spotLightMap[D]=H.map,D++,V.updateMatrices(H),H.castShadow&&O++),i.spotLightMatrix[b]=V.matrix,H.castShadow){const Q=n.get(H);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.spotShadow[b]=Q,i.spotShadowMap[b]=Z,R++}b++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(G).multiplyScalar(ie),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=B,y++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const V=H.shadow,Q=n.get(H);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,i.pointShadow[M]=Q,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=H.shadow.matrix,P++}i.point[M]=B,M++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(ie),B.groundColor.copy(H.groundColor).multiplyScalar(ie),i.hemi[S]=B,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=x,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==v||T.pointLength!==M||T.spotLength!==b||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==U||T.numPointShadows!==P||T.numSpotShadows!==R||T.numSpotMaps!==D||T.numLightProbes!==C)&&(i.directional.length=v,i.spot.length=b,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=R+D-O,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=C,T.directionalLength=v,T.pointLength=M,T.spotLength=b,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=U,T.numPointShadows=P,T.numSpotShadows=R,T.numSpotMaps=D,T.numLightProbes=C,i.version=LU++)}function p(d,_){let x=0,g=0,v=0,M=0,b=0;const y=_.matrixWorldInverse;for(let S=0,U=d.length;S<U;S++){const P=d[S];if(P.isDirectionalLight){const R=i.directional[x];R.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),x++}else if(P.isSpotLight){const R=i.spot[v];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),v++}else if(P.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const R=i.hemi[b];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),b++}}}return{setup:f,setupView:p,state:i}}function g1(o){const e=new PU(o),n=[],i=[],r=[];function l(g){x.camera=g,n.length=0,i.length=0,r.length=0}function u(g){n.push(g)}function f(g){i.push(g)}function p(g){r.push(g)}function d(){e.setup(n)}function _(g){e.setupView(n,g)}const x={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:d,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function IU(o){let e=new WeakMap;function n(r,l=0){const u=e.get(r);let f;return u===void 0?(f=new g1(o),e.set(r,[f])):l>=u.length?(f=new g1(o),u.push(f)):f=u[l],f}function i(){e=new WeakMap}return{get:n,dispose:i}}const zU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BU=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],HU=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],v1=new kn,mu=new le,z_=new le;function GU(o,e,n){let i=new hE;const r=new $t,l=new $t,u=new zn,f=new tw,p=new nw,d={},_=n.maxTextureSize,x={[Js]:$i,[$i]:Js,[Kr]:Kr},g=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:zU,fragmentShader:FU}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new Wa;M.setAttribute("position",new ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new br(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let S=this.type;this.render=function(O,C,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===XC&&(_t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nd);const N=o.getRenderTarget(),I=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),G=o.state;G.setBlending(es),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ie=S!==this.type;ie&&C.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(Z=>Z.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,Z=O.length;re<Z;re++){const B=O[re],V=B.shadow;if(V===void 0){_t("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Q=V.getFrameExtents();r.multiply(Q),l.copy(V.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/Q.x),r.x=l.x*Q.x,V.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/Q.y),r.y=l.y*Q.y,V.mapSize.y=l.y));const de=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=de,V.map===null||ie===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===bu){if(B.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new yr(r.x,r.y,{format:Wo,type:as,minFilter:Ri,magFilter:Ri,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new dc(r.x,r.y,_r),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=rs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gi,V.map.depthTexture.magFilter=gi}else B.isPointLight?(V.map=new SE(r.x),V.map.depthTexture=new j2(r.x,Mr)):(V.map=new yr(r.x,r.y),V.map.depthTexture=new dc(r.x,r.y,Mr)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=rs,this.type===nd?(V.map.depthTexture.compareFunction=de?I0:P0,V.map.depthTexture.minFilter=Ri,V.map.depthTexture.magFilter=Ri):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gi,V.map.depthTexture.magFilter=gi);V.camera.updateProjectionMatrix()}const k=V.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<k;z++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,z),o.clear();else{z===0&&(o.setRenderTarget(V.map),o.clear());const J=V.getViewport(z);u.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),G.viewport(u)}if(B.isPointLight){const J=V.camera,be=V.matrix,Re=B.distance||J.far;Re!==J.far&&(J.far=Re,J.updateProjectionMatrix()),mu.setFromMatrixPosition(B.matrixWorld),J.position.copy(mu),z_.copy(J.position),z_.add(BU[z]),J.up.copy(HU[z]),J.lookAt(z_),J.updateMatrixWorld(),be.makeTranslation(-mu.x,-mu.y,-mu.z),v1.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(v1,J.coordinateSystem,J.reversedDepth)}else V.updateMatrices(B);i=V.getFrustum(),R(C,T,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===bu&&U(V,T),V.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(N,I,H)};function U(O,C){const T=e.update(b);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,v.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new yr(r.x,r.y,{format:Wo,type:as})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(C,null,T,g,b,null),v.uniforms.shadow_pass.value=O.mapPass.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(C,null,T,v,b,null)}function P(O,C,T,N){let I=null;const H=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)I=H;else if(I=T.isPointLight===!0?p:f,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=I.uuid,ie=C.uuid;let re=d[G];re===void 0&&(re={},d[G]=re);let Z=re[ie];Z===void 0&&(Z=I.clone(),re[ie]=Z,C.addEventListener("dispose",D)),I=Z}if(I.visible=C.visible,I.wireframe=C.wireframe,N===bu?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:x[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const G=o.properties.get(I);G.light=T}return I}function R(O,C,T,N,I){if(O.visible===!1)return;if(O.layers.test(C.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&I===bu)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const ie=e.update(O),re=O.material;if(Array.isArray(re)){const Z=ie.groups;for(let B=0,V=Z.length;B<V;B++){const Q=Z[B],de=re[Q.materialIndex];if(de&&de.visible){const k=P(O,de,N,I);O.onBeforeShadow(o,O,C,T,ie,k,Q),o.renderBufferDirect(T,null,ie,k,O,Q),O.onAfterShadow(o,O,C,T,ie,k,Q)}}}else if(re.visible){const Z=P(O,re,N,I);O.onBeforeShadow(o,O,C,T,ie,Z,null),o.renderBufferDirect(T,null,ie,Z,O,null),O.onAfterShadow(o,O,C,T,ie,Z,null)}}const G=O.children;for(let ie=0,re=G.length;ie<re;ie++)R(G[ie],C,T,N,I)}function D(O){O.target.removeEventListener("dispose",D);for(const T in d){const N=d[T],I=O.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}}function VU(o,e){function n(){let Y=!1;const Ne=new zn;let ve=null;const Ie=new zn(0,0,0,0);return{setMask:function(He){ve!==He&&!Y&&(o.colorMask(He,He,He,He),ve=He)},setLocked:function(He){Y=He},setClear:function(He,Ae,Ce,Ee,ot){ot===!0&&(He*=Ee,Ae*=Ee,Ce*=Ee),Ne.set(He,Ae,Ce,Ee),Ie.equals(Ne)===!1&&(o.clearColor(He,Ae,Ce,Ee),Ie.copy(Ne))},reset:function(){Y=!1,ve=null,Ie.set(-1,0,0,0)}}}function i(){let Y=!1,Ne=!1,ve=null,Ie=null,He=null;return{setReversed:function(Ae){if(Ne!==Ae){const Ce=e.get("EXT_clip_control");Ae?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ae;const Ee=He;He=null,this.setClear(Ee)}},getReversed:function(){return Ne},setTest:function(Ae){Ae?Se(o.DEPTH_TEST):Be(o.DEPTH_TEST)},setMask:function(Ae){ve!==Ae&&!Y&&(o.depthMask(Ae),ve=Ae)},setFunc:function(Ae){if(Ne&&(Ae=b2[Ae]),Ie!==Ae){switch(Ae){case fg:o.depthFunc(o.NEVER);break;case hg:o.depthFunc(o.ALWAYS);break;case dg:o.depthFunc(o.LESS);break;case fc:o.depthFunc(o.LEQUAL);break;case pg:o.depthFunc(o.EQUAL);break;case mg:o.depthFunc(o.GEQUAL);break;case _g:o.depthFunc(o.GREATER);break;case gg:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=Ae}},setLocked:function(Ae){Y=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,Ne&&(Ae=1-Ae),o.clearDepth(Ae))},reset:function(){Y=!1,ve=null,Ie=null,He=null,Ne=!1}}}function r(){let Y=!1,Ne=null,ve=null,Ie=null,He=null,Ae=null,Ce=null,Ee=null,ot=null;return{setTest:function(we){Y||(we?Se(o.STENCIL_TEST):Be(o.STENCIL_TEST))},setMask:function(we){Ne!==we&&!Y&&(o.stencilMask(we),Ne=we)},setFunc:function(we,st,Ke){(ve!==we||Ie!==st||He!==Ke)&&(o.stencilFunc(we,st,Ke),ve=we,Ie=st,He=Ke)},setOp:function(we,st,Ke){(Ae!==we||Ce!==st||Ee!==Ke)&&(o.stencilOp(we,st,Ke),Ae=we,Ce=st,Ee=Ke)},setLocked:function(we){Y=we},setClear:function(we){ot!==we&&(o.clearStencil(we),ot=we)},reset:function(){Y=!1,Ne=null,ve=null,Ie=null,He=null,Ae=null,Ce=null,Ee=null,ot=null}}}const l=new n,u=new i,f=new r,p=new WeakMap,d=new WeakMap;let _={},x={},g={},v=new WeakMap,M=[],b=null,y=!1,S=null,U=null,P=null,R=null,D=null,O=null,C=null,T=new Xt(0,0,0),N=0,I=!1,H=null,G=null,ie=null,re=null,Z=null;const B=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const de=o.getParameter(o.VERSION);de.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(de)[1]),V=Q>=1):de.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),V=Q>=2);let k=null,z={};const J=o.getParameter(o.SCISSOR_BOX),be=o.getParameter(o.VIEWPORT),Re=new zn().fromArray(J),Pe=new zn().fromArray(be);function te(Y,Ne,ve,Ie){const He=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(Y,Ae),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ce=0;Ce<ve;Ce++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,He):o.texImage2D(Ne+Ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,He);return Ae}const xe={};xe[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),xe[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xe[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Se(o.DEPTH_TEST),u.setFunc(fc),fe(!1),It(yM),Se(o.CULL_FACE),ht(es);function Se(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function Be(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function at(Y,Ne){return g[Y]!==Ne?(o.bindFramebuffer(Y,Ne),g[Y]=Ne,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ne),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function qe(Y,Ne){let ve=M,Ie=!1;if(Y){ve=v.get(Ne),ve===void 0&&(ve=[],v.set(Ne,ve));const He=Y.textures;if(ve.length!==He.length||ve[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,Ce=He.length;Ae<Ce;Ae++)ve[Ae]=o.COLOR_ATTACHMENT0+Ae;ve.length=He.length,Ie=!0}}else ve[0]!==o.BACK&&(ve[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(ve)}function Et(Y){return b!==Y?(o.useProgram(Y),b=Y,!0):!1}const Ye={[Co]:o.FUNC_ADD,[YC]:o.FUNC_SUBTRACT,[qC]:o.FUNC_REVERSE_SUBTRACT};Ye[ZC]=o.MIN,Ye[jC]=o.MAX;const rt={[KC]:o.ZERO,[QC]:o.ONE,[JC]:o.SRC_COLOR,[cg]:o.SRC_ALPHA,[a2]:o.SRC_ALPHA_SATURATE,[n2]:o.DST_COLOR,[e2]:o.DST_ALPHA,[$C]:o.ONE_MINUS_SRC_COLOR,[ug]:o.ONE_MINUS_SRC_ALPHA,[i2]:o.ONE_MINUS_DST_COLOR,[t2]:o.ONE_MINUS_DST_ALPHA,[r2]:o.CONSTANT_COLOR,[s2]:o.ONE_MINUS_CONSTANT_COLOR,[o2]:o.CONSTANT_ALPHA,[l2]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(Y,Ne,ve,Ie,He,Ae,Ce,Ee,ot,we){if(Y===es){y===!0&&(Be(o.BLEND),y=!1);return}if(y===!1&&(Se(o.BLEND),y=!0),Y!==WC){if(Y!==S||we!==I){if((U!==Co||D!==Co)&&(o.blendEquation(o.FUNC_ADD),U=Co,D=Co),we)switch(Y){case nc:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lg:o.blendFunc(o.ONE,o.ONE);break;case SM:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case MM:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Wt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case nc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case SM:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MM:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",Y);break}P=null,R=null,O=null,C=null,T.set(0,0,0),N=0,S=Y,I=we}return}He=He||Ne,Ae=Ae||ve,Ce=Ce||Ie,(Ne!==U||He!==D)&&(o.blendEquationSeparate(Ye[Ne],Ye[He]),U=Ne,D=He),(ve!==P||Ie!==R||Ae!==O||Ce!==C)&&(o.blendFuncSeparate(rt[ve],rt[Ie],rt[Ae],rt[Ce]),P=ve,R=Ie,O=Ae,C=Ce),(Ee.equals(T)===!1||ot!==N)&&(o.blendColor(Ee.r,Ee.g,Ee.b,ot),T.copy(Ee),N=ot),S=Y,I=!1}function ut(Y,Ne){Y.side===Kr?Be(o.CULL_FACE):Se(o.CULL_FACE);let ve=Y.side===$i;Ne&&(ve=!ve),fe(ve),Y.blending===nc&&Y.transparent===!1?ht(es):ht(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Ie=Y.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),en(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):Be(o.SAMPLE_ALPHA_TO_COVERAGE)}function fe(Y){H!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),H=Y)}function It(Y){Y!==VC?(Se(o.CULL_FACE),Y!==G&&(Y===yM?o.cullFace(o.BACK):Y===kC?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Be(o.CULL_FACE),G=Y}function Yt(Y){Y!==ie&&(V&&o.lineWidth(Y),ie=Y)}function en(Y,Ne,ve){Y?(Se(o.POLYGON_OFFSET_FILL),(re!==Ne||Z!==ve)&&(re=Ne,Z=ve,u.getReversed()&&(Ne=-Ne),o.polygonOffset(Ne,ve))):Be(o.POLYGON_OFFSET_FILL)}function pt(Y){Y?Se(o.SCISSOR_TEST):Be(o.SCISSOR_TEST)}function qt(Y){Y===void 0&&(Y=o.TEXTURE0+B-1),k!==Y&&(o.activeTexture(Y),k=Y)}function j(Y,Ne,ve){ve===void 0&&(k===null?ve=o.TEXTURE0+B-1:ve=k);let Ie=z[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},z[ve]=Ie),(Ie.type!==Y||Ie.texture!==Ne)&&(k!==ve&&(o.activeTexture(ve),k=ve),o.bindTexture(Y,Ne||xe[Y]),Ie.type=Y,Ie.texture=Ne)}function zt(){const Y=z[k];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function dt(){try{o.compressedTexImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function F(){try{o.compressedTexImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function A(){try{o.texSubImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function $(){try{o.texSubImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function ae(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function pe(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Le(){try{o.texStorage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function De(){try{o.texStorage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function ge(){try{o.texImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function me(){try{o.texImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Oe(Y){return x[Y]!==void 0?x[Y]:o.getParameter(Y)}function ke(Y,Ne){x[Y]!==Ne&&(o.pixelStorei(Y,Ne),x[Y]=Ne)}function Fe(Y){Re.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),Re.copy(Y))}function ze(Y){Pe.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),Pe.copy(Y))}function Ue(Y,Ne){let ve=d.get(Ne);ve===void 0&&(ve=new WeakMap,d.set(Ne,ve));let Ie=ve.get(Y);Ie===void 0&&(Ie=o.getUniformBlockIndex(Ne,Y.name),ve.set(Y,Ie))}function et(Y,Ne){const Ie=d.get(Ne).get(Y);p.get(Ne)!==Ie&&(o.uniformBlockBinding(Ne,Ie,Y.__bindingPointIndex),p.set(Ne,Ie))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},x={},k=null,z={},g={},v=new WeakMap,M=[],b=null,y=!1,S=null,U=null,P=null,R=null,D=null,O=null,C=null,T=new Xt(0,0,0),N=0,I=!1,H=null,G=null,ie=null,re=null,Z=null,Re.set(0,0,o.canvas.width,o.canvas.height),Pe.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Se,disable:Be,bindFramebuffer:at,drawBuffers:qe,useProgram:Et,setBlending:ht,setMaterial:ut,setFlipSided:fe,setCullFace:It,setLineWidth:Yt,setPolygonOffset:en,setScissorTest:pt,activeTexture:qt,bindTexture:j,unbindTexture:zt,compressedTexImage2D:dt,compressedTexImage3D:F,texImage2D:ge,texImage3D:me,pixelStorei:ke,getParameter:Oe,updateUBOMapping:Ue,uniformBlockBinding:et,texStorage2D:Le,texStorage3D:De,texSubImage2D:A,texSubImage3D:$,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Fe,viewport:ze,reset:nt}}function kU(o,e,n,i,r,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $t,_=new WeakMap,x=new Set;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,A){return M?new OffscreenCanvas(F,A):Ed("canvas")}function y(F,A,$){let ae=1;const pe=dt(F);if((pe.width>$||pe.height>$)&&(ae=$/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Le=Math.floor(ae*pe.width),De=Math.floor(ae*pe.height);g===void 0&&(g=b(Le,De));const ge=A?b(Le,De):g;return ge.width=Le,ge.height=De,ge.getContext("2d").drawImage(F,0,0,Le,De),_t("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Le+"x"+De+")."),ge}else return"data"in F&&_t("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),F;return F}function S(F){return F.generateMipmaps}function U(F){o.generateMipmap(F)}function P(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(F,A,$,ae,pe,Le=!1){if(F!==null){if(o[F]!==void 0)return o[F];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let De;ae&&(De=e.get("EXT_texture_norm16"),De||_t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=A;if(A===o.RED&&($===o.FLOAT&&(ge=o.R32F),$===o.HALF_FLOAT&&(ge=o.R16F),$===o.UNSIGNED_BYTE&&(ge=o.R8),$===o.UNSIGNED_SHORT&&De&&(ge=De.R16_EXT),$===o.SHORT&&De&&(ge=De.R16_SNORM_EXT)),A===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ge=o.R8UI),$===o.UNSIGNED_SHORT&&(ge=o.R16UI),$===o.UNSIGNED_INT&&(ge=o.R32UI),$===o.BYTE&&(ge=o.R8I),$===o.SHORT&&(ge=o.R16I),$===o.INT&&(ge=o.R32I)),A===o.RG&&($===o.FLOAT&&(ge=o.RG32F),$===o.HALF_FLOAT&&(ge=o.RG16F),$===o.UNSIGNED_BYTE&&(ge=o.RG8),$===o.UNSIGNED_SHORT&&De&&(ge=De.RG16_EXT),$===o.SHORT&&De&&(ge=De.RG16_SNORM_EXT)),A===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ge=o.RG8UI),$===o.UNSIGNED_SHORT&&(ge=o.RG16UI),$===o.UNSIGNED_INT&&(ge=o.RG32UI),$===o.BYTE&&(ge=o.RG8I),$===o.SHORT&&(ge=o.RG16I),$===o.INT&&(ge=o.RG32I)),A===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),$===o.UNSIGNED_INT&&(ge=o.RGB32UI),$===o.BYTE&&(ge=o.RGB8I),$===o.SHORT&&(ge=o.RGB16I),$===o.INT&&(ge=o.RGB32I)),A===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),$===o.UNSIGNED_INT&&(ge=o.RGBA32UI),$===o.BYTE&&(ge=o.RGBA8I),$===o.SHORT&&(ge=o.RGBA16I),$===o.INT&&(ge=o.RGBA32I)),A===o.RGB&&($===o.UNSIGNED_SHORT&&De&&(ge=De.RGB16_EXT),$===o.SHORT&&De&&(ge=De.RGB16_SNORM_EXT),$===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ge=o.R11F_G11F_B10F)),A===o.RGBA){const me=Le?Md:Gt.getTransfer(pe);$===o.FLOAT&&(ge=o.RGBA32F),$===o.HALF_FLOAT&&(ge=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ge=me===un?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT&&De&&(ge=De.RGBA16_EXT),$===o.SHORT&&De&&(ge=De.RGBA16_SNORM_EXT),$===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function D(F,A){let $;return F?A===null||A===Mr||A===Zu?$=o.DEPTH24_STENCIL8:A===_r?$=o.DEPTH32F_STENCIL8:A===qu&&($=o.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Mr||A===Zu?$=o.DEPTH_COMPONENT24:A===_r?$=o.DEPTH_COMPONENT32F:A===qu&&($=o.DEPTH_COMPONENT16),$}function O(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==gi&&F.minFilter!==Ri?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function C(F){const A=F.target;A.removeEventListener("dispose",C),N(A),A.isVideoTexture&&_.delete(A),A.isHTMLTexture&&x.delete(A)}function T(F){const A=F.target;A.removeEventListener("dispose",T),H(A)}function N(F){const A=i.get(F);if(A.__webglInit===void 0)return;const $=F.source,ae=v.get($);if(ae){const pe=ae[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(F),Object.keys(ae).length===0&&v.delete($)}i.remove(F)}function I(F){const A=i.get(F);o.deleteTexture(A.__webglTexture);const $=F.source,ae=v.get($);delete ae[A.__cacheKey],u.memory.textures--}function H(F){const A=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let pe=0;pe<A.__webglFramebuffer[ae].length;pe++)o.deleteFramebuffer(A.__webglFramebuffer[ae][pe]);else o.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)o.deleteFramebuffer(A.__webglFramebuffer[ae]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=F.textures;for(let ae=0,pe=$.length;ae<pe;ae++){const Le=i.get($[ae]);Le.__webglTexture&&(o.deleteTexture(Le.__webglTexture),u.memory.textures--),i.remove($[ae])}i.remove(F)}let G=0;function ie(){G=0}function re(){return G}function Z(F){G=F}function B(){const F=G;return F>=r.maxTextures&&_t("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),G+=1,F}function V(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function Q(F,A){const $=i.get(F);if(F.isVideoTexture&&j(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&$.__version!==F.version){const ae=F.image;if(ae===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{Be($,F,A);return}}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+A)}function de(F,A){const $=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Be($,F,A);return}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+A)}function k(F,A){const $=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Be($,F,A);return}n.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+A)}function z(F,A){const $=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&$.__version!==F.version){at($,F,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+A)}const J={[vg]:o.REPEAT,[Jr]:o.CLAMP_TO_EDGE,[xg]:o.MIRRORED_REPEAT},be={[gi]:o.NEAREST,[f2]:o.NEAREST_MIPMAP_NEAREST,[Mh]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[o_]:o.LINEAR_MIPMAP_NEAREST,[Uo]:o.LINEAR_MIPMAP_LINEAR},Re={[p2]:o.NEVER,[x2]:o.ALWAYS,[m2]:o.LESS,[P0]:o.LEQUAL,[_2]:o.EQUAL,[I0]:o.GEQUAL,[g2]:o.GREATER,[v2]:o.NOTEQUAL};function Pe(F,A){if(A.type===_r&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ri||A.magFilter===o_||A.magFilter===Mh||A.magFilter===Uo||A.minFilter===Ri||A.minFilter===o_||A.minFilter===Mh||A.minFilter===Uo)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,J[A.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,J[A.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,J[A.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,be[A.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,be[A.minFilter]),A.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,Re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gi||A.minFilter!==Mh&&A.minFilter!==Uo||A.type===_r&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(F,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function te(F,A){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",C));const ae=A.source;let pe=v.get(ae);pe===void 0&&(pe={},v.set(ae,pe));const Le=V(A);if(Le!==F.__cacheKey){pe[Le]===void 0&&(pe[Le]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,$=!0),pe[Le].usedTimes++;const De=pe[F.__cacheKey];De!==void 0&&(pe[F.__cacheKey].usedTimes--,De.usedTimes===0&&I(A)),F.__cacheKey=Le,F.__webglTexture=pe[Le].texture}return $}function xe(F,A,$){return Math.floor(Math.floor(F/$)/A)}function Se(F,A,$,ae){const Le=F.updateRanges;if(Le.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,$,ae,A.data);else{Le.sort((ke,Fe)=>ke.start-Fe.start);let De=0;for(let ke=1;ke<Le.length;ke++){const Fe=Le[De],ze=Le[ke],Ue=Fe.start+Fe.count,et=xe(ze.start,A.width,4),nt=xe(Fe.start,A.width,4);ze.start<=Ue+1&&et===nt&&xe(ze.start+ze.count-1,A.width,4)===et?Fe.count=Math.max(Fe.count,ze.start+ze.count-Fe.start):(++De,Le[De]=ze)}Le.length=De+1;const ge=n.getParameter(o.UNPACK_ROW_LENGTH),me=n.getParameter(o.UNPACK_SKIP_PIXELS),Oe=n.getParameter(o.UNPACK_SKIP_ROWS);n.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let ke=0,Fe=Le.length;ke<Fe;ke++){const ze=Le[ke],Ue=Math.floor(ze.start/4),et=Math.ceil(ze.count/4),nt=Ue%A.width,Y=Math.floor(Ue/A.width),Ne=et,ve=1;n.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(o.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(o.TEXTURE_2D,0,nt,Y,Ne,ve,$,ae,A.data)}F.clearUpdateRanges(),n.pixelStorei(o.UNPACK_ROW_LENGTH,ge),n.pixelStorei(o.UNPACK_SKIP_PIXELS,me),n.pixelStorei(o.UNPACK_SKIP_ROWS,Oe)}}function Be(F,A,$){let ae=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=o.TEXTURE_3D);const pe=te(F,A),Le=A.source;n.bindTexture(ae,F.__webglTexture,o.TEXTURE0+$);const De=i.get(Le);if(Le.version!==De.__version||pe===!0){if(n.activeTexture(o.TEXTURE0+$),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ve=Gt.getPrimaries(Gt.workingColorSpace),Ie=A.colorSpace===Fs?null:Gt.getPrimaries(A.colorSpace),He=A.colorSpace===Fs||ve===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment);let me=y(A.image,!1,r.maxTextureSize);me=zt(A,me);const Oe=l.convert(A.format,A.colorSpace),ke=l.convert(A.type);let Fe=R(A.internalFormat,Oe,ke,A.normalized,A.colorSpace,A.isVideoTexture);Pe(ae,A);let ze;const Ue=A.mipmaps,et=A.isVideoTexture!==!0,nt=De.__version===void 0||pe===!0,Y=Le.dataReady,Ne=O(A,me);if(A.isDepthTexture)Fe=D(A.format===Lo,A.type),nt&&(et?n.texStorage2D(o.TEXTURE_2D,1,Fe,me.width,me.height):n.texImage2D(o.TEXTURE_2D,0,Fe,me.width,me.height,0,Oe,ke,null));else if(A.isDataTexture)if(Ue.length>0){et&&nt&&n.texStorage2D(o.TEXTURE_2D,Ne,Fe,Ue[0].width,Ue[0].height);for(let ve=0,Ie=Ue.length;ve<Ie;ve++)ze=Ue[ve],et?Y&&n.texSubImage2D(o.TEXTURE_2D,ve,0,0,ze.width,ze.height,Oe,ke,ze.data):n.texImage2D(o.TEXTURE_2D,ve,Fe,ze.width,ze.height,0,Oe,ke,ze.data);A.generateMipmaps=!1}else et?(nt&&n.texStorage2D(o.TEXTURE_2D,Ne,Fe,me.width,me.height),Y&&Se(A,me,Oe,ke)):n.texImage2D(o.TEXTURE_2D,0,Fe,me.width,me.height,0,Oe,ke,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&nt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Fe,Ue[0].width,Ue[0].height,me.depth);for(let ve=0,Ie=Ue.length;ve<Ie;ve++)if(ze=Ue[ve],A.format!==nr)if(Oe!==null)if(et){if(Y)if(A.layerUpdates.size>0){const He=jM(ze.width,ze.height,A.format,A.type);for(const Ae of A.layerUpdates){const Ce=ze.data.subarray(Ae*He/ze.data.BYTES_PER_ELEMENT,(Ae+1)*He/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,Ae,ze.width,ze.height,1,Oe,Ce)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,me.depth,Oe,ze.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ve,Fe,ze.width,ze.height,me.depth,0,ze.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Y&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,me.depth,Oe,ke,ze.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ve,Fe,ze.width,ze.height,me.depth,0,Oe,ke,ze.data)}else{et&&nt&&n.texStorage2D(o.TEXTURE_2D,Ne,Fe,Ue[0].width,Ue[0].height);for(let ve=0,Ie=Ue.length;ve<Ie;ve++)ze=Ue[ve],A.format!==nr?Oe!==null?et?Y&&n.compressedTexSubImage2D(o.TEXTURE_2D,ve,0,0,ze.width,ze.height,Oe,ze.data):n.compressedTexImage2D(o.TEXTURE_2D,ve,Fe,ze.width,ze.height,0,ze.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Y&&n.texSubImage2D(o.TEXTURE_2D,ve,0,0,ze.width,ze.height,Oe,ke,ze.data):n.texImage2D(o.TEXTURE_2D,ve,Fe,ze.width,ze.height,0,Oe,ke,ze.data)}else if(A.isDataArrayTexture)if(et){if(nt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Fe,me.width,me.height,me.depth),Y)if(A.layerUpdates.size>0){const ve=jM(me.width,me.height,A.format,A.type);for(const Ie of A.layerUpdates){const He=me.data.subarray(Ie*ve/me.data.BYTES_PER_ELEMENT,(Ie+1)*ve/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ie,me.width,me.height,1,Oe,ke,He)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Oe,ke,me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,me.width,me.height,me.depth,0,Oe,ke,me.data);else if(A.isData3DTexture)et?(nt&&n.texStorage3D(o.TEXTURE_3D,Ne,Fe,me.width,me.height,me.depth),Y&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Oe,ke,me.data)):n.texImage3D(o.TEXTURE_3D,0,Fe,me.width,me.height,me.depth,0,Oe,ke,me.data);else if(A.isFramebufferTexture){if(nt)if(et)n.texStorage2D(o.TEXTURE_2D,Ne,Fe,me.width,me.height);else{let ve=me.width,Ie=me.height;for(let He=0;He<Ne;He++)n.texImage2D(o.TEXTURE_2D,He,Fe,ve,Ie,0,Oe,ke,null),ve>>=1,Ie>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in o){const ve=o.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),me.parentNode!==ve){ve.appendChild(me),x.add(A),ve.onpaint=Ie=>{const He=Ie.changedElements;for(const Ae of x)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},ve.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,me);else{const He=o.RGBA,Ae=o.RGBA,Ce=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,He,Ae,Ce,me)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(et&&nt){const ve=dt(Ue[0]);n.texStorage2D(o.TEXTURE_2D,Ne,Fe,ve.width,ve.height)}for(let ve=0,Ie=Ue.length;ve<Ie;ve++)ze=Ue[ve],et?Y&&n.texSubImage2D(o.TEXTURE_2D,ve,0,0,Oe,ke,ze):n.texImage2D(o.TEXTURE_2D,ve,Fe,Oe,ke,ze);A.generateMipmaps=!1}else if(et){if(nt){const ve=dt(me);n.texStorage2D(o.TEXTURE_2D,Ne,Fe,ve.width,ve.height)}Y&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,ke,me)}else n.texImage2D(o.TEXTURE_2D,0,Fe,Oe,ke,me);S(A)&&U(ae),De.__version=Le.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function at(F,A,$){if(A.image.length!==6)return;const ae=te(F,A),pe=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+$);const Le=i.get(pe);if(pe.version!==Le.__version||ae===!0){n.activeTexture(o.TEXTURE0+$);const De=Gt.getPrimaries(Gt.workingColorSpace),ge=A.colorSpace===Fs?null:Gt.getPrimaries(A.colorSpace),me=A.colorSpace===Fs||De===ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Oe=A.isCompressedTexture||A.image[0].isCompressedTexture,ke=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let Ae=0;Ae<6;Ae++)!Oe&&!ke?Fe[Ae]=y(A.image[Ae],!0,r.maxCubemapSize):Fe[Ae]=ke?A.image[Ae].image:A.image[Ae],Fe[Ae]=zt(A,Fe[Ae]);const ze=Fe[0],Ue=l.convert(A.format,A.colorSpace),et=l.convert(A.type),nt=R(A.internalFormat,Ue,et,A.normalized,A.colorSpace),Y=A.isVideoTexture!==!0,Ne=Le.__version===void 0||ae===!0,ve=pe.dataReady;let Ie=O(A,ze);Pe(o.TEXTURE_CUBE_MAP,A);let He;if(Oe){Y&&Ne&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,nt,ze.width,ze.height);for(let Ae=0;Ae<6;Ae++){He=Fe[Ae].mipmaps;for(let Ce=0;Ce<He.length;Ce++){const Ee=He[Ce];A.format!==nr?Ue!==null?Y?ve&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce,0,0,Ee.width,Ee.height,Ue,Ee.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce,nt,Ee.width,Ee.height,0,Ee.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ve&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce,0,0,Ee.width,Ee.height,Ue,et,Ee.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce,nt,Ee.width,Ee.height,0,Ue,et,Ee.data)}}}else{if(He=A.mipmaps,Y&&Ne){He.length>0&&Ie++;const Ae=dt(Fe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,nt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ke){Y?ve&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Fe[Ae].width,Fe[Ae].height,Ue,et,Fe[Ae].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,nt,Fe[Ae].width,Fe[Ae].height,0,Ue,et,Fe[Ae].data);for(let Ce=0;Ce<He.length;Ce++){const ot=He[Ce].image[Ae].image;Y?ve&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce+1,0,0,ot.width,ot.height,Ue,et,ot.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce+1,nt,ot.width,ot.height,0,Ue,et,ot.data)}}else{Y?ve&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ue,et,Fe[Ae]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,nt,Ue,et,Fe[Ae]);for(let Ce=0;Ce<He.length;Ce++){const Ee=He[Ce];Y?ve&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce+1,0,0,Ue,et,Ee.image[Ae]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ce+1,nt,Ue,et,Ee.image[Ae])}}}S(A)&&U(o.TEXTURE_CUBE_MAP),Le.__version=pe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function qe(F,A,$,ae,pe,Le){const De=l.convert($.format,$.colorSpace),ge=l.convert($.type),me=R($.internalFormat,De,ge,$.normalized,$.colorSpace),Oe=i.get(A),ke=i.get($);if(ke.__renderTarget=A,!Oe.__hasExternalTextures){const Fe=Math.max(1,A.width>>Le),ze=Math.max(1,A.height>>Le);pe===o.TEXTURE_3D||pe===o.TEXTURE_2D_ARRAY?n.texImage3D(pe,Le,me,Fe,ze,A.depth,0,De,ge,null):n.texImage2D(pe,Le,me,Fe,ze,0,De,ge,null)}n.bindFramebuffer(o.FRAMEBUFFER,F),qt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ae,pe,ke.__webglTexture,0,pt(A)):(pe===o.TEXTURE_2D||pe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ae,pe,ke.__webglTexture,Le),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(F,A,$){if(o.bindRenderbuffer(o.RENDERBUFFER,F),A.depthBuffer){const ae=A.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,Le=D(A.stencilBuffer,pe),De=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt(A),Le,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt(A),Le,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Le,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,De,o.RENDERBUFFER,F)}else{const ae=A.textures;for(let pe=0;pe<ae.length;pe++){const Le=ae[pe],De=l.convert(Le.format,Le.colorSpace),ge=l.convert(Le.type),me=R(Le.internalFormat,De,ge,Le.normalized,Le.colorSpace);qt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt(A),me,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt(A),me,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,me,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ye(F,A,$){const ae=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=i.get(A.depthTexture);if(pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ae){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,A.depthTexture.addEventListener("dispose",C)),pe.__webglTexture===void 0){pe.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),Pe(o.TEXTURE_CUBE_MAP,A.depthTexture);const Oe=l.convert(A.depthTexture.format),ke=l.convert(A.depthTexture.type);let Fe;A.depthTexture.format===rs?Fe=o.DEPTH_COMPONENT24:A.depthTexture.format===Lo&&(Fe=o.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Fe,A.width,A.height,0,Oe,ke,null)}}else Q(A.depthTexture,0);const Le=pe.__webglTexture,De=pt(A),ge=ae?o.TEXTURE_CUBE_MAP_POSITIVE_X+$:o.TEXTURE_2D,me=A.depthTexture.format===Lo?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===rs)qt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,ge,Le,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,me,ge,Le,0);else if(A.depthTexture.format===Lo)qt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,ge,Le,0,De):o.framebufferTexture2D(o.FRAMEBUFFER,me,ge,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(F){const A=i.get(F),$=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const ae=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ae){const pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),A.__depthDisposeCallback=pe}A.__boundDepthTexture=ae}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if($)for(let ae=0;ae<6;ae++)Ye(A.__webglFramebuffer[ae],F,ae);else{const ae=F.texture.mipmaps;ae&&ae.length>0?Ye(A.__webglFramebuffer[0],F,0):Ye(A.__webglFramebuffer,F,0)}else if($){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]===void 0)A.__webglDepthbuffer[ae]=o.createRenderbuffer(),Et(A.__webglDepthbuffer[ae],F,!1);else{const pe=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=A.__webglDepthbuffer[ae];o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,Le)}}else{const ae=F.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Et(A.__webglDepthbuffer,F,!1);else{const pe=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,Le)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function ht(F,A,$){const ae=i.get(F);A!==void 0&&qe(ae.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&rt(F)}function ut(F){const A=F.texture,$=i.get(F),ae=i.get(A);F.addEventListener("dispose",T);const pe=F.textures,Le=F.isWebGLCubeRenderTarget===!0,De=pe.length>1;if(De||(ae.__webglTexture===void 0&&(ae.__webglTexture=o.createTexture()),ae.__version=A.version,u.memory.textures++),Le){$.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[ge]=[];for(let me=0;me<A.mipmaps.length;me++)$.__webglFramebuffer[ge][me]=o.createFramebuffer()}else $.__webglFramebuffer[ge]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)$.__webglFramebuffer[ge]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(De)for(let ge=0,me=pe.length;ge<me;ge++){const Oe=i.get(pe[ge]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),u.memory.textures++)}if(F.samples>0&&qt(F)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const me=pe[ge];$.__webglColorRenderbuffer[ge]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[ge]);const Oe=l.convert(me.format,me.colorSpace),ke=l.convert(me.type),Fe=R(me.internalFormat,Oe,ke,me.normalized,me.colorSpace,F.isXRRenderTarget===!0),ze=pt(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,ze,Fe,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ge,o.RENDERBUFFER,$.__webglColorRenderbuffer[ge])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Et($.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Le){n.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture),Pe(o.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)qe($.__webglFramebuffer[ge][me],F,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,me);else qe($.__webglFramebuffer[ge],F,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(A)&&U(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let ge=0,me=pe.length;ge<me;ge++){const Oe=pe[ge],ke=i.get(Oe);let Fe=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Fe=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Fe,ke.__webglTexture),Pe(Fe,Oe),qe($.__webglFramebuffer,F,Oe,o.COLOR_ATTACHMENT0+ge,Fe,0),S(Oe)&&U(Fe)}n.unbindTexture()}else{let ge=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ge=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ge,ae.__webglTexture),Pe(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)qe($.__webglFramebuffer[me],F,A,o.COLOR_ATTACHMENT0,ge,me);else qe($.__webglFramebuffer,F,A,o.COLOR_ATTACHMENT0,ge,0);S(A)&&U(ge),n.unbindTexture()}F.depthBuffer&&rt(F)}function fe(F){const A=F.textures;for(let $=0,ae=A.length;$<ae;$++){const pe=A[$];if(S(pe)){const Le=P(F),De=i.get(pe).__webglTexture;n.bindTexture(Le,De),U(Le),n.unbindTexture()}}}const It=[],Yt=[];function en(F){if(F.samples>0){if(qt(F)===!1){const A=F.textures,$=F.width,ae=F.height;let pe=o.COLOR_BUFFER_BIT;const Le=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=i.get(F),ge=A.length>1;if(ge)for(let Oe=0;Oe<A.length;Oe++)n.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const me=F.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(pe|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(pe|=o.STENCIL_BUFFER_BIT)),ge){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,De.__webglColorRenderbuffer[Oe]);const ke=i.get(A[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ke,0)}o.blitFramebuffer(0,0,$,ae,0,0,$,ae,pe,o.NEAREST),p===!0&&(It.length=0,Yt.length=0,It.push(o.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(It.push(Le),Yt.push(Le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Yt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ge)for(let Oe=0;Oe<A.length;Oe++){n.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,De.__webglColorRenderbuffer[Oe]);const ke=i.get(A[Oe]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,ke,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function pt(F){return Math.min(r.maxSamples,F.samples)}function qt(F){const A=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function j(F){const A=u.render.frame;_.get(F)!==A&&(_.set(F,A),F.update())}function zt(F,A){const $=F.colorSpace,ae=F.format,pe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||$!==Sd&&$!==Fs&&(Gt.getTransfer($)===un?(ae!==nr||pe!==Ba)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",$)),A}function dt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=ie,this.getTextureUnits=re,this.setTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=de,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=ht,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function XU(o,e){function n(i,r=Fs){let l;const u=Gt.getTransfer(r);if(i===Ba)return o.UNSIGNED_BYTE;if(i===D0)return o.UNSIGNED_SHORT_4_4_4_4;if(i===N0)return o.UNSIGNED_SHORT_5_5_5_1;if(i===eE)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===tE)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jb)return o.BYTE;if(i===$b)return o.SHORT;if(i===qu)return o.UNSIGNED_SHORT;if(i===w0)return o.INT;if(i===Mr)return o.UNSIGNED_INT;if(i===_r)return o.FLOAT;if(i===as)return o.HALF_FLOAT;if(i===nE)return o.ALPHA;if(i===iE)return o.RGB;if(i===nr)return o.RGBA;if(i===rs)return o.DEPTH_COMPONENT;if(i===Lo)return o.DEPTH_STENCIL;if(i===aE)return o.RED;if(i===U0)return o.RED_INTEGER;if(i===Wo)return o.RG;if(i===L0)return o.RG_INTEGER;if(i===O0)return o.RGBA_INTEGER;if(i===id||i===ad||i===rd||i===sd)if(u===un)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===id)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ad)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===id)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ad)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sd)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yg||i===Sg||i===Mg||i===bg)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===yg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sg)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eg||i===Tg||i===Ag||i===Rg||i===Cg||i===xd||i===wg)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Eg||i===Tg)return u===un?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Ag)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rg)return l.COMPRESSED_R11_EAC;if(i===Cg)return l.COMPRESSED_SIGNED_R11_EAC;if(i===xd)return l.COMPRESSED_RG11_EAC;if(i===wg)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dg||i===Ng||i===Ug||i===Lg||i===Og||i===Pg||i===Ig||i===zg||i===Fg||i===Bg||i===Hg||i===Gg||i===Vg||i===kg)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Dg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ng)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ug)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Og)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ig)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kg)return u===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xg||i===Wg||i===Yg)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Xg)return u===un?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wg)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qg||i===Zg||i===yd||i===jg)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===qg)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Zg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zu?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:n}}const WU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YU=`
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

}`;class qU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new mE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Er({vertexShader:WU,fragmentShader:YU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new br(new Ud(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZU extends Zo{constructor(e,n){super();const i=this;let r=null,l=1,u=null,f="local-floor",p=1,d=null,_=null,x=null,g=null,v=null,M=null;const b=typeof XRWebGLBinding<"u",y=new qU,S={},U=n.getContextAttributes();let P=null,R=null;const D=[],O=[],C=new $t;let T=null;const N=new Fa;N.viewport=new zn;const I=new Fa;I.viewport=new zn;const H=[N,I],G=new aw;let ie=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let xe=D[te];return xe===void 0&&(xe=new m_,D[te]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(te){let xe=D[te];return xe===void 0&&(xe=new m_,D[te]=xe),xe.getGripSpace()},this.getHand=function(te){let xe=D[te];return xe===void 0&&(xe=new m_,D[te]=xe),xe.getHandSpace()};function Z(te){const xe=O.indexOf(te.inputSource);if(xe===-1)return;const Se=D[xe];Se!==void 0&&(Se.update(te.inputSource,te.frame,d||u),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",V);for(let te=0;te<D.length;te++){const xe=O[te];xe!==null&&(O[te]=null,D[te].disconnect(xe))}ie=null,re=null,y.reset();for(const te in S)delete S[te];e.setRenderTarget(P),v=null,g=null,x=null,r=null,R=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,i.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,i.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(r,n)),x},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",B),r.addEventListener("inputsourceschange",V),U.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,at=null;U.depth&&(at=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=U.stencil?Lo:rs,Be=U.stencil?Zu:Mr);const qe={colorFormat:n.RGBA8,depthFormat:at,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(qe),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new yr(g.textureWidth,g.textureHeight,{format:nr,type:Ba,depthTexture:new dc(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new yr(v.framebufferWidth,v.framebufferHeight,{format:nr,type:Ba,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(f),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(te){for(let xe=0;xe<te.removed.length;xe++){const Se=te.removed[xe],Be=O.indexOf(Se);Be>=0&&(O[Be]=null,D[Be].disconnect(Se))}for(let xe=0;xe<te.added.length;xe++){const Se=te.added[xe];let Be=O.indexOf(Se);if(Be===-1){for(let qe=0;qe<D.length;qe++)if(qe>=O.length){O.push(Se),Be=qe;break}else if(O[qe]===null){O[qe]=Se,Be=qe;break}if(Be===-1)break}const at=D[Be];at&&at.connect(Se)}}const Q=new le,de=new le;function k(te,xe,Se){Q.setFromMatrixPosition(xe.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const Be=Q.distanceTo(de),at=xe.projectionMatrix.elements,qe=Se.projectionMatrix.elements,Et=at[14]/(at[10]-1),Ye=at[14]/(at[10]+1),rt=(at[9]+1)/at[5],ht=(at[9]-1)/at[5],ut=(at[8]-1)/at[0],fe=(qe[8]+1)/qe[0],It=Et*ut,Yt=Et*fe,en=Be/(-ut+fe),pt=en*-ut;if(xe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(pt),te.translateZ(en),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),at[10]===-1)te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const qt=Et+en,j=Ye+en,zt=It-pt,dt=Yt+(Be-pt),F=rt*Ye/j*qt,A=ht*Ye/j*qt;te.projectionMatrix.makePerspective(zt,dt,F,A,qt,j),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function z(te,xe){xe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(xe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let xe=te.near,Se=te.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),G.near=I.near=N.near=xe,G.far=I.far=N.far=Se,(ie!==G.near||re!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),ie=G.near,re=G.far),G.layers.mask=te.layers.mask|6,N.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const Be=te.parent,at=G.cameras;z(G,Be);for(let qe=0;qe<at.length;qe++)z(at[qe],Be);at.length===2?k(G,N,I):G.projectionMatrix.copy(N.projectionMatrix),J(te,G,Be)};function J(te,xe,Se){Se===null?te.matrix.copy(xe.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(xe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Kg*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&v===null))return p},this.setFoveation=function(te){p=te,g!==null&&(g.fixedFoveation=te),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(G)},this.getCameraTexture=function(te){return S[te]};let be=null;function Re(te,xe){if(_=xe.getViewerPose(d||u),M=xe,_!==null){const Se=_.views;v!==null&&(e.setRenderTargetFramebuffer(R,v.framebuffer),e.setRenderTarget(R));let Be=!1;Se.length!==G.cameras.length&&(G.cameras.length=0,Be=!0);for(let Ye=0;Ye<Se.length;Ye++){const rt=Se[Ye];let ht=null;if(v!==null)ht=v.getViewport(rt);else{const fe=x.getViewSubImage(g,rt);ht=fe.viewport,Ye===0&&(e.setRenderTargetTextures(R,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(R))}let ut=H[Ye];ut===void 0&&(ut=new Fa,ut.layers.enable(Ye),ut.viewport=new zn,H[Ye]=ut),ut.matrix.fromArray(rt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(rt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),Ye===0&&(G.matrix.copy(ut.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Be===!0&&G.cameras.push(ut)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){x=i.getBinding();const Ye=x.getDepthInformation(Se[0]);Ye&&Ye.isValid&&Ye.texture&&y.init(Ye,r.renderState)}if(at&&at.includes("camera-access")&&b){e.state.unbindTexture(),x=i.getBinding();for(let Ye=0;Ye<Se.length;Ye++){const rt=Se[Ye].camera;if(rt){let ht=S[rt];ht||(ht=new mE,S[rt]=ht);const ut=x.getCameraImage(rt);ht.sourceTexture=ut}}}}for(let Se=0;Se<D.length;Se++){const Be=O[Se],at=D[Se];Be!==null&&at!==void 0&&at.update(Be,xe,d||u)}be&&be(te,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Pe=new xE;Pe.setAnimationLoop(Re),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}}const jU=new kn,AE=new vt;AE.set(-1,0,0,0,1,0,0,0,1);function KU(o,e){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,_E(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function r(y,S,U,P,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),g(y,S),S.isMeshPhysicalMaterial&&v(y,S,R)):S.isMeshMatcapMaterial?(l(y,S),M(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?p(y,S,U,P):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===$i&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===$i&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const U=e.get(S),P=U.envMap,R=U.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(jU.makeRotationFromEuler(R)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(AE),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,U,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*U,y.scale.value=P*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function v(y,S,U){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===$i&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const U=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QU(o,e,n,i){let r={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,D){const O=D.program;i.uniformBlockBinding(R,O)}function d(R,D){let O=r[R.id];O===void 0&&(y(R),O=_(R),r[R.id]=O,R.addEventListener("dispose",U));const C=D.program;i.updateUBOMapping(R,C);const T=e.render.frame;l[R.id]!==T&&(g(R),l[R.id]=T)}function _(R){const D=x();R.__bindingPointIndex=D;const O=o.createBuffer(),C=R.__size,T=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,C,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,O),O}function x(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const D=r[R.id],O=R.uniforms,C=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let T=0,N=O.length;T<N;T++){const I=O[T];if(Array.isArray(I))for(let H=0,G=I.length;H<G;H++)v(I[H],T,H,C);else v(I,T,0,C)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(R,D,O,C){if(b(R,D,O,C)===!0){const T=R.__offset,N=R.value;if(Array.isArray(N)){let I=0;for(let H=0;H<N.length;H++){const G=N[H],ie=S(G);M(G,R.__data,I),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(I+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,R.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,R.__data)}}function M(R,D,O){typeof R=="number"||typeof R=="boolean"?D[0]=R:R.isMatrix3?(D[0]=R.elements[0],D[1]=R.elements[1],D[2]=R.elements[2],D[3]=0,D[4]=R.elements[3],D[5]=R.elements[4],D[6]=R.elements[5],D[7]=0,D[8]=R.elements[6],D[9]=R.elements[7],D[10]=R.elements[8],D[11]=0):ArrayBuffer.isView(R)?D.set(new R.constructor(R.buffer,R.byteOffset,D.length)):R.toArray(D,O)}function b(R,D,O,C){const T=R.value,N=D+"_"+O;if(C[N]===void 0)return typeof T=="number"||typeof T=="boolean"?C[N]=T:ArrayBuffer.isView(T)?C[N]=T.slice():C[N]=T.clone(),!0;{const I=C[N];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(I.equals(T)===!1)return I.copy(T),!0}}return!1}function y(R){const D=R.uniforms;let O=0;const C=16;for(let N=0,I=D.length;N<I;N++){const H=Array.isArray(D[N])?D[N]:[D[N]];for(let G=0,ie=H.length;G<ie;G++){const re=H[G],Z=Array.isArray(re.value)?re.value:[re.value];for(let B=0,V=Z.length;B<V;B++){const Q=Z[B],de=S(Q),k=O%C,z=k%de.boundary,J=k+z;O+=z,J!==0&&C-J<de.storage&&(O+=C-J),re.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=O,O+=de.storage}}}const T=O%C;return T>0&&(O+=C-T),R.__size=O,R.__cache={},this}function S(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):_t("WebGLRenderer: Unsupported uniform value type.",R),D}function U(R){const D=R.target;D.removeEventListener("dispose",U);const O=u.indexOf(D.__bindingPointIndex);u.splice(O,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete l[D.id]}function P(){for(const R in r)o.deleteBuffer(r[R]);u=[],r={},l={}}return{bind:p,update:d,dispose:P}}const JU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cr=null;function $U(){return cr===null&&(cr=new X2(JU,16,16,Wo,as),cr.name="DFG_LUT",cr.minFilter=Ri,cr.magFilter=Ri,cr.wrapS=Jr,cr.wrapT=Jr,cr.generateMipmaps=!1,cr.needsUpdate=!0),cr}class eL{constructor(e={}){const{canvas:n=S2(),context:i=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Ba}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=u;const b=v,y=new Set([O0,L0,U0]),S=new Set([Ba,Mr,qu,Zu,D0,N0]),U=new Uint32Array(4),P=new Int32Array(4),R=new le;let D=null,O=null;const C=[],T=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let H=!1,G=null,ie=null,re=null,Z=null;this._outputColorSpace=Pa;let B=0,V=0,Q=null,de=-1,k=null;const z=new zn,J=new zn;let be=null;const Re=new Xt(0);let Pe=0,te=n.width,xe=n.height,Se=1,Be=null,at=null;const qe=new zn(0,0,te,xe),Et=new zn(0,0,te,xe);let Ye=!1;const rt=new hE;let ht=!1,ut=!1;const fe=new kn,It=new le,Yt=new zn,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function qt(){return Q===null?Se:1}let j=i;function zt(w,K){return n.getContext(w,K)}try{const w={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${C0}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",st,!1),j===null){const K="webgl2";if(j=zt(K,w),j===null)throw zt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Wt("WebGLRenderer: "+w.message),w}let dt,F,A,$,ae,pe,Le,De,ge,me,Oe,ke,Fe,ze,Ue,et,nt,Y,Ne,ve,Ie,He,Ae;function Ce(){dt=new $D(j),dt.init(),Ie=new XU(j,dt),F=new WD(j,dt,e,Ie),A=new VU(j,dt),F.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),ie=j.createFramebuffer(),re=j.createFramebuffer(),Z=j.createFramebuffer(),$=new nN(j),ae=new CU,pe=new kU(j,dt,A,ae,F,Ie,$),Le=new JD(I),De=new sw(j),He=new kD(j,De),ge=new eN(j,De,$,He),me=new aN(j,ge,De,He,$),Y=new iN(j,F,pe),Ue=new YD(ae),Oe=new RU(I,Le,dt,F,He,Ue),ke=new KU(I,ae),Fe=new DU,ze=new IU(dt),nt=new VD(I,Le,A,me,M,p),et=new GU(I,me,F),Ae=new QU(j,$,F,A),Ne=new XD(j,dt,$),ve=new tN(j,dt,$),$.programs=Oe.programs,I.capabilities=F,I.extensions=dt,I.properties=ae,I.renderLists=Fe,I.shadowMap=et,I.state=A,I.info=$}Ce(),b!==Ba&&(N=new sN(b,n.width,n.height,f,r,l));const Ee=new ZU(I,j);this.xr=Ee,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(w){w!==void 0&&(Se=w,this.setSize(te,xe,!1))},this.getSize=function(w){return w.set(te,xe)},this.setSize=function(w,K,ce=!0){if(Ee.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,xe=K,n.width=Math.floor(w*Se),n.height=Math.floor(K*Se),ce===!0&&(n.style.width=w+"px",n.style.height=K+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(te*Se,xe*Se).floor()},this.setDrawingBufferSize=function(w,K,ce){te=w,xe=K,Se=ce,n.width=Math.floor(w*ce),n.height=Math.floor(K*ce),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(b===Ba){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){_t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(qe)},this.setViewport=function(w,K,ce,ne){w.isVector4?qe.set(w.x,w.y,w.z,w.w):qe.set(w,K,ce,ne),A.viewport(z.copy(qe).multiplyScalar(Se).round())},this.getScissor=function(w){return w.copy(Et)},this.setScissor=function(w,K,ce,ne){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,K,ce,ne),A.scissor(J.copy(Et).multiplyScalar(Se).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(w){A.setScissorTest(Ye=w)},this.setOpaqueSort=function(w){Be=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,ce=!0){let ne=0;if(w){let se=!1;if(Q!==null){const Ge=Q.texture.format;se=y.has(Ge)}if(se){const Ge=Q.texture.type,Xe=S.has(Ge),Ve=nt.getClearColor(),Qe=nt.getClearAlpha(),je=Ve.r,lt=Ve.g,Mt=Ve.b;Xe?(U[0]=je,U[1]=lt,U[2]=Mt,U[3]=Qe,j.clearBufferuiv(j.COLOR,0,U)):(P[0]=je,P[1]=lt,P[2]=Mt,P[3]=Qe,j.clearBufferiv(j.COLOR,0,P))}else ne|=j.COLOR_BUFFER_BIT}K&&(ne|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),G=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",st,!1),nt.dispose(),Fe.dispose(),ze.dispose(),ae.dispose(),Le.dispose(),me.dispose(),He.dispose(),Ae.dispose(),Oe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",xt),Ee.removeEventListener("sessionend",yt),St.stop()};function ot(w){w.preventDefault(),CM("WebGLRenderer: Context Lost."),H=!0}function we(){CM("WebGLRenderer: Context Restored."),H=!1;const w=$.autoReset,K=et.enabled,ce=et.autoUpdate,ne=et.needsUpdate,se=et.type;Ce(),$.autoReset=w,et.enabled=K,et.autoUpdate=ce,et.needsUpdate=ne,et.type=se}function st(w){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const K=w.target;K.removeEventListener("dispose",Ke),mt(K)}function mt(w){Rn(w),ae.remove(w)}function Rn(w){const K=ae.get(w).programs;K!==void 0&&(K.forEach(function(ce){Oe.releaseProgram(ce)}),w.isShaderMaterial&&Oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,ce,ne,se,Ge){K===null&&(K=en);const Xe=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ve=En(w,K,ce,ne,se);A.setMaterial(ne,Xe);let Qe=ce.index,je=1;if(ne.wireframe===!0){if(Qe=ge.getWireframeAttribute(ce),Qe===void 0)return;je=2}const lt=ce.drawRange,Mt=ce.attributes.position;let it=lt.start*je,Zt=(lt.start+lt.count)*je;Ge!==null&&(it=Math.max(it,Ge.start*je),Zt=Math.min(Zt,(Ge.start+Ge.count)*je)),Qe!==null?(it=Math.max(it,0),Zt=Math.min(Zt,Qe.count)):Mt!=null&&(it=Math.max(it,0),Zt=Math.min(Zt,Mt.count));const Cn=Zt-it;if(Cn<0||Cn===1/0)return;He.setup(se,ne,Ve,ce,Qe);let gn,an=Ne;if(Qe!==null&&(gn=De.get(Qe),an=ve,an.setIndex(gn)),se.isMesh)ne.wireframe===!0?(A.setLineWidth(ne.wireframeLinewidth*qt()),an.setMode(j.LINES)):an.setMode(j.TRIANGLES);else if(se.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),A.setLineWidth(rn*qt()),se.isLineSegments?an.setMode(j.LINES):se.isLineLoop?an.setMode(j.LINE_LOOP):an.setMode(j.LINE_STRIP)}else se.isPoints?an.setMode(j.POINTS):se.isSprite&&an.setMode(j.TRIANGLES);if(se.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))an.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const rn=se._multiDrawStarts,Ze=se._multiDrawCounts,xi=se._multiDrawCount,Ut=Qe?De.get(Qe).bytesPerElement:1,Jn=ae.get(ne).currentProgram.getUniforms();for(let na=0;na<xi;na++)Jn.setValue(j,"_gl_DrawID",na),an.render(rn[na]/Ut,Ze[na])}else if(se.isInstancedMesh)an.renderInstances(it,Cn,se.count);else if(ce.isInstancedBufferGeometry){const rn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ze=Math.min(ce.instanceCount,rn);an.renderInstances(it,Cn,Ze)}else an.render(it,Cn)};function Tt(w,K,ce){w.transparent===!0&&w.side===Kr&&w.forceSinglePass===!1?(w.side=$i,w.needsUpdate=!0,Mn(w,K,ce),w.side=Js,w.needsUpdate=!0,Mn(w,K,ce),w.side=Kr):Mn(w,K,ce)}this.compile=function(w,K,ce=null){ce===null&&(ce=w),O=ze.get(ce),O.init(K),T.push(O),ce.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(O.pushLight(se),se.castShadow&&O.pushShadow(se))}),w!==ce&&w.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(O.pushLight(se),se.castShadow&&O.pushShadow(se))}),O.setupLights();const ne=new Set;return w.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ge=se.material;if(Ge)if(Array.isArray(Ge))for(let Xe=0;Xe<Ge.length;Xe++){const Ve=Ge[Xe];Tt(Ve,ce,se),ne.add(Ve)}else Tt(Ge,ce,se),ne.add(Ge)}),O=T.pop(),ne},this.compileAsync=function(w,K,ce=null){const ne=this.compile(w,K,ce);return new Promise(se=>{function Ge(){if(ne.forEach(function(Xe){ae.get(Xe).currentProgram.isReady()&&ne.delete(Xe)}),ne.size===0){se(w);return}setTimeout(Ge,10)}dt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let fn=null;function _n(w){fn&&fn(w)}function xt(){St.stop()}function yt(){St.start()}const St=new xE;St.setAnimationLoop(_n),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(w){fn=w,Ee.setAnimationLoop(w),w===null?St.stop():St.start()},Ee.addEventListener("sessionstart",xt),Ee.addEventListener("sessionend",yt),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;G!==null&&G.renderStart(w,K);const ce=Ee.enabled===!0&&Ee.isPresenting===!0,ne=N!==null&&(Q===null||ce)&&N.begin(I,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(K),K=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,K,Q),O=ze.get(w,T.length),O.init(K),O.state.textureUnits=pe.getTextureUnits(),T.push(O),fe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),rt.setFromProjectionMatrix(fe,gr,K.reversedDepth),ut=this.localClippingEnabled,ht=Ue.init(this.clippingPlanes,ut),D=Fe.get(w,C.length),D.init(),C.push(D),Ee.enabled===!0&&Ee.isPresenting===!0){const Xe=I.xr.getDepthSensingMesh();Xe!==null&&Qn(Xe,K,-1/0,I.sortObjects)}Qn(w,K,0,I.sortObjects),D.finish(),I.sortObjects===!0&&D.sort(Be,at,K.reversedDepth),pt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,pt&&nt.addToRenderList(D,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ue.beginShadows();const se=O.state.shadowsArray;if(et.render(se,w,K),ht===!0&&Ue.endShadows(),(ne&&N.hasRenderPass())===!1){const Xe=D.opaque,Ve=D.transmissive;if(O.setupLights(),K.isArrayCamera){const Qe=K.cameras;if(Ve.length>0)for(let je=0,lt=Qe.length;je<lt;je++){const Mt=Qe[je];ai(Xe,Ve,w,Mt)}pt&&nt.render(w);for(let je=0,lt=Qe.length;je<lt;je++){const Mt=Qe[je];hn(D,w,Mt,Mt.viewport)}}else Ve.length>0&&ai(Xe,Ve,w,K),pt&&nt.render(w),hn(D,w,K)}Q!==null&&V===0&&(pe.updateMultisampleRenderTarget(Q),pe.updateRenderTargetMipmap(Q)),ne&&N.end(I),w.isScene===!0&&w.onAfterRender(I,w,K),He.resetDefaultState(),de=-1,k=null,T.pop(),T.length>0?(O=T[T.length-1],pe.setTextureUnits(O.state.textureUnits),ht===!0&&Ue.setGlobalState(I.clippingPlanes,O.state.camera)):O=null,C.pop(),C.length>0?D=C[C.length-1]:D=null,G!==null&&G.renderEnd()};function Qn(w,K,ce,ne){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)ce=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLightProbeGrid)O.pushLightProbeGrid(w);else if(w.isLight)O.pushLight(w),w.castShadow&&O.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||rt.intersectsSprite(w)){ne&&Yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const Xe=me.update(w),Ve=w.material;Ve.visible&&D.push(w,Xe,Ve,ce,Yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||rt.intersectsObject(w))){const Xe=me.update(w),Ve=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Yt.copy(w.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Yt.copy(Xe.boundingSphere.center)),Yt.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ve)){const Qe=Xe.groups;for(let je=0,lt=Qe.length;je<lt;je++){const Mt=Qe[je],it=Ve[Mt.materialIndex];it&&it.visible&&D.push(w,Xe,it,ce,Yt.z,Mt)}}else Ve.visible&&D.push(w,Xe,Ve,ce,Yt.z,null)}}const Ge=w.children;for(let Xe=0,Ve=Ge.length;Xe<Ve;Xe++)Qn(Ge[Xe],K,ce,ne)}function hn(w,K,ce,ne){const{opaque:se,transmissive:Ge,transparent:Xe}=w;O.setupLightsView(ce),ht===!0&&Ue.setGlobalState(I.clippingPlanes,ce),ne&&A.viewport(z.copy(ne)),se.length>0&&ri(se,K,ce),Ge.length>0&&ri(Ge,K,ce),Xe.length>0&&ri(Xe,K,ce),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function ai(w,K,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ne.id]===void 0){const it=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ne.id]=new yr(1,1,{generateMipmaps:!0,type:it?as:Ba,minFilter:Uo,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const Ge=O.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||z;Ge.setSize(Xe.z*I.transmissionResolutionScale,Xe.w*I.transmissionResolutionScale);const Ve=I.getRenderTarget(),Qe=I.getActiveCubeFace(),je=I.getActiveMipmapLevel();I.setRenderTarget(Ge),I.getClearColor(Re),Pe=I.getClearAlpha(),Pe<1&&I.setClearColor(16777215,.5),I.clear(),pt&&nt.render(ce);const lt=I.toneMapping;I.toneMapping=xr;const Mt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),O.setupLightsView(ne),ht===!0&&Ue.setGlobalState(I.clippingPlanes,ne),ri(w,ce,ne),pe.updateMultisampleRenderTarget(Ge),pe.updateRenderTargetMipmap(Ge),dt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Zt=0,Cn=K.length;Zt<Cn;Zt++){const gn=K[Zt],{object:an,geometry:rn,material:Ze,group:xi}=gn;if(Ze.side===Kr&&an.layers.test(ne.layers)){const Ut=Ze.side;Ze.side=$i,Ze.needsUpdate=!0,Sn(an,ce,ne,rn,Ze,xi),Ze.side=Ut,Ze.needsUpdate=!0,it=!0}}it===!0&&(pe.updateMultisampleRenderTarget(Ge),pe.updateRenderTargetMipmap(Ge))}I.setRenderTarget(Ve,Qe,je),I.setClearColor(Re,Pe),Mt!==void 0&&(ne.viewport=Mt),I.toneMapping=lt}function ri(w,K,ce){const ne=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Ge=w.length;se<Ge;se++){const Xe=w[se],{object:Ve,geometry:Qe,group:je}=Xe;let lt=Xe.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),Ve.layers.test(ce.layers)&&Sn(Ve,K,ce,Qe,lt,je)}}function Sn(w,K,ce,ne,se,Ge){w.onBeforeRender(I,K,ce,ne,se,Ge),w.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),se.onBeforeRender(I,K,ce,ne,w,Ge),se.transparent===!0&&se.side===Kr&&se.forceSinglePass===!1?(se.side=$i,se.needsUpdate=!0,I.renderBufferDirect(ce,K,ne,se,w,Ge),se.side=Js,se.needsUpdate=!0,I.renderBufferDirect(ce,K,ne,se,w,Ge),se.side=Kr):I.renderBufferDirect(ce,K,ne,se,w,Ge),w.onAfterRender(I,K,ce,ne,se,Ge)}function Mn(w,K,ce){K.isScene!==!0&&(K=en);const ne=ae.get(w),se=O.state.lights,Ge=O.state.shadowsArray,Xe=se.state.version,Ve=Oe.getParameters(w,se.state,Ge,K,ce,O.state.lightProbeGridArray),Qe=Oe.getProgramCacheKey(Ve);let je=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?K.environment:null,ne.fog=K.fog;const lt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=Le.get(w.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",Ke),je=new Map,ne.programs=je);let Mt=je.get(Qe);if(Mt!==void 0){if(ne.currentProgram===Mt&&ne.lightsStateVersion===Xe)return fi(w,Ve),Mt}else Ve.uniforms=Oe.getUniforms(w),G!==null&&w.isNodeMaterial&&G.build(w,ce,Ve),w.onBeforeCompile(Ve,I),Mt=Oe.acquireProgram(Ve,Qe),je.set(Qe,Mt),ne.uniforms=Ve.uniforms;const it=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(it.clippingPlanes=Ue.uniform),fi(w,Ve),ne.needsLights=Di(w),ne.lightsStateVersion=Xe,ne.needsLights&&(it.ambientLightColor.value=se.state.ambient,it.lightProbe.value=se.state.probe,it.directionalLights.value=se.state.directional,it.directionalLightShadows.value=se.state.directionalShadow,it.spotLights.value=se.state.spot,it.spotLightShadows.value=se.state.spotShadow,it.rectAreaLights.value=se.state.rectArea,it.ltc_1.value=se.state.rectAreaLTC1,it.ltc_2.value=se.state.rectAreaLTC2,it.pointLights.value=se.state.point,it.pointLightShadows.value=se.state.pointShadow,it.hemisphereLights.value=se.state.hemi,it.directionalShadowMatrix.value=se.state.directionalShadowMatrix,it.spotLightMatrix.value=se.state.spotLightMatrix,it.spotLightMap.value=se.state.spotLightMap,it.pointShadowMatrix.value=se.state.pointShadowMatrix),ne.lightProbeGrid=O.state.lightProbeGridArray.length>0,ne.currentProgram=Mt,ne.uniformsList=null,Mt}function bn(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=od.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function fi(w,K){const ce=ae.get(w);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function Ea(w,K){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;R.setFromMatrixPosition(K.matrixWorld);for(let ce=0,ne=w.length;ce<ne;ce++){const se=w[ce];if(se.texture!==null&&se.boundingBox.containsPoint(R))return se}return null}function En(w,K,ce,ne,se){K.isScene!==!0&&(K=en),pe.resetTextureUnits();const Ge=K.fog,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?K.environment:null,Ve=Q===null?I.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Gt.workingColorSpace,Qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,je=Le.get(ne.envMap||Xe,Qe),lt=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Mt=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),it=!!ce.morphAttributes.position,Zt=!!ce.morphAttributes.normal,Cn=!!ce.morphAttributes.color;let gn=xr;ne.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(gn=I.toneMapping);const an=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,rn=an!==void 0?an.length:0,Ze=ae.get(ne),xi=O.state.lights;if(ht===!0&&(ut===!0||w!==k)){const tn=w===k&&ne.id===de;Ue.setState(ne,w,tn)}let Ut=!1;ne.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==xi.state.version||Ze.outputColorSpace!==Ve||se.isBatchedMesh&&Ze.batching===!1||!se.isBatchedMesh&&Ze.batching===!0||se.isBatchedMesh&&Ze.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ze.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ze.instancing===!1||!se.isInstancedMesh&&Ze.instancing===!0||se.isSkinnedMesh&&Ze.skinning===!1||!se.isSkinnedMesh&&Ze.skinning===!0||se.isInstancedMesh&&Ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ze.instancingMorph===!1&&se.morphTexture!==null||Ze.envMap!==je||ne.fog===!0&&Ze.fog!==Ge||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ue.numPlanes||Ze.numIntersection!==Ue.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==Mt||Ze.morphTargets!==it||Ze.morphNormals!==Zt||Ze.morphColors!==Cn||Ze.toneMapping!==gn||Ze.morphTargetsCount!==rn||!!Ze.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Ut=!0):(Ut=!0,Ze.__version=ne.version);let Jn=Ze.currentProgram;Ut===!0&&(Jn=Mn(ne,K,se),G&&ne.isNodeMaterial&&G.onUpdateProgram(ne,Jn,Ze));let na=!1,Ya=!1,ia=!1;const sn=Jn.getUniforms(),wn=Ze.uniforms;if(A.useProgram(Jn.program)&&(na=!0,Ya=!0,ia=!0),ne.id!==de&&(de=ne.id,Ya=!0),Ze.needsLights){const tn=Ea(O.state.lightProbeGridArray,se);Ze.lightProbeGrid!==tn&&(Ze.lightProbeGrid=tn,Ya=!0)}if(na||k!==w){A.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),sn.setValue(j,"projectionMatrix",w.projectionMatrix),sn.setValue(j,"viewMatrix",w.matrixWorldInverse);const ir=sn.map.cameraPosition;ir!==void 0&&ir.setValue(j,It.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&sn.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&sn.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,Ya=!0,ia=!0)}if(Ze.needsLights&&(xi.state.directionalShadowMap.length>0&&sn.setValue(j,"directionalShadowMap",xi.state.directionalShadowMap,pe),xi.state.spotShadowMap.length>0&&sn.setValue(j,"spotShadowMap",xi.state.spotShadowMap,pe),xi.state.pointShadowMap.length>0&&sn.setValue(j,"pointShadowMap",xi.state.pointShadowMap,pe)),se.isSkinnedMesh){sn.setOptional(j,se,"bindMatrix"),sn.setOptional(j,se,"bindMatrixInverse");const tn=se.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),sn.setValue(j,"boneTexture",tn.boneTexture,pe))}se.isBatchedMesh&&(sn.setOptional(j,se,"batchingTexture"),sn.setValue(j,"batchingTexture",se._matricesTexture,pe),sn.setOptional(j,se,"batchingIdTexture"),sn.setValue(j,"batchingIdTexture",se._indirectTexture,pe),sn.setOptional(j,se,"batchingColorTexture"),se._colorsTexture!==null&&sn.setValue(j,"batchingColorTexture",se._colorsTexture,pe));const qa=ce.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&Y.update(se,ce,Jn),(Ya||Ze.receiveShadow!==se.receiveShadow)&&(Ze.receiveShadow=se.receiveShadow,sn.setValue(j,"receiveShadow",se.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&K.environment!==null&&(wn.envMapIntensity.value=K.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=$U()),Ya){if(sn.setValue(j,"toneMappingExposure",I.toneMappingExposure),Ze.needsLights&&Rt(wn,ia),Ge&&ne.fog===!0&&ke.refreshFogUniforms(wn,Ge),ke.refreshMaterialUniforms(wn,ne,Se,xe,O.state.transmissionRenderTarget[w.id]),Ze.needsLights&&Ze.lightProbeGrid){const tn=Ze.lightProbeGrid;wn.probesSH.value=tn.texture,wn.probesMin.value.copy(tn.boundingBox.min),wn.probesMax.value.copy(tn.boundingBox.max),wn.probesResolution.value.copy(tn.resolution)}od.upload(j,bn(Ze),wn,pe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(od.upload(j,bn(Ze),wn,pe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&sn.setValue(j,"center",se.center),sn.setValue(j,"modelViewMatrix",se.modelViewMatrix),sn.setValue(j,"normalMatrix",se.normalMatrix),sn.setValue(j,"modelMatrix",se.matrixWorld),ne.uniformsGroups!==void 0){const tn=ne.uniformsGroups;for(let ir=0,ss=tn.length;ir<ss;ir++){const eo=tn[ir];Ae.update(eo,Jn),Ae.bind(eo,Jn)}}return Jn}function Rt(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Di(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,K,ce){const ne=ae.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ae.get(w.texture).__webglTexture=K,ae.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const ce=ae.get(w);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(w,K=0,ce=0){Q=w,B=K,V=ce;let ne=null,se=!1,Ge=!1;if(w){const Ve=ae.get(w);if(Ve.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(j.FRAMEBUFFER,Ve.__webglFramebuffer),z.copy(w.viewport),J.copy(w.scissor),be=w.scissorTest,A.viewport(z),A.scissor(J),A.setScissorTest(be),de=-1;return}else if(Ve.__webglFramebuffer===void 0)pe.setupRenderTarget(w);else if(Ve.__hasExternalTextures)pe.rebindTextures(w,ae.get(w.texture).__webglTexture,ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const lt=w.depthTexture;if(Ve.__boundDepthTexture!==lt){if(lt!==null&&ae.has(lt)&&(w.width!==lt.image.width||w.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(w)}}const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ge=!0);const je=ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[K])?ne=je[K][ce]:ne=je[K],se=!0):w.samples>0&&pe.useMultisampledRTT(w)===!1?ne=ae.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?ne=je[ce]:ne=je,z.copy(w.viewport),J.copy(w.scissor),be=w.scissorTest}else z.copy(qe).multiplyScalar(Se).floor(),J.copy(Et).multiplyScalar(Se).floor(),be=Ye;if(ce!==0&&(ne=ie),A.bindFramebuffer(j.FRAMEBUFFER,ne)&&A.drawBuffers(w,ne),A.viewport(z),A.scissor(J),A.setScissorTest(be),se){const Ve=ae.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,ce)}else if(Ge){const Ve=K;for(let Qe=0;Qe<w.textures.length;Qe++){const je=ae.get(w.textures[Qe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Qe,je.__webglTexture,ce,Ve)}}else if(w!==null&&ce!==0){const Ve=ae.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ve.__webglTexture,ce)}de=-1},this.readRenderTargetPixels=function(w,K,ce,ne,se,Ge,Xe,Ve=0){if(!(w&&w.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(Qe=Qe[Xe]),Qe){A.bindFramebuffer(j.FRAMEBUFFER,Qe);try{const je=w.textures[Ve],lt=je.format,Mt=je.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ve),!F.textureFormatReadable(lt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Mt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ne&&ce>=0&&ce<=w.height-se&&j.readPixels(K,ce,ne,se,Ie.convert(lt),Ie.convert(Mt),Ge)}finally{const je=Q!==null?ae.get(Q).__webglFramebuffer:null;A.bindFramebuffer(j.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(w,K,ce,ne,se,Ge,Xe,Ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(Qe=Qe[Xe]),Qe)if(K>=0&&K<=w.width-ne&&ce>=0&&ce<=w.height-se){A.bindFramebuffer(j.FRAMEBUFFER,Qe);const je=w.textures[Ve],lt=je.format,Mt=je.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ve),!F.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,it),j.bufferData(j.PIXEL_PACK_BUFFER,Ge.byteLength,j.STREAM_READ),j.readPixels(K,ce,ne,se,Ie.convert(lt),Ie.convert(Mt),0);const Zt=Q!==null?ae.get(Q).__webglFramebuffer:null;A.bindFramebuffer(j.FRAMEBUFFER,Zt);const Cn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await M2(j,Cn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,it),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ge),j.deleteBuffer(it),j.deleteSync(Cn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,ce=0){const ne=Math.pow(2,-ce),se=Math.floor(w.image.width*ne),Ge=Math.floor(w.image.height*ne),Xe=K!==null?K.x:0,Ve=K!==null?K.y:0;pe.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,Xe,Ve,se,Ge),A.unbindTexture()},this.copyTextureToTexture=function(w,K,ce=null,ne=null,se=0,Ge=0){let Xe,Ve,Qe,je,lt,Mt,it,Zt,Cn;const gn=w.isCompressedTexture?w.mipmaps[Ge]:w.image;if(ce!==null)Xe=ce.max.x-ce.min.x,Ve=ce.max.y-ce.min.y,Qe=ce.isBox3?ce.max.z-ce.min.z:1,je=ce.min.x,lt=ce.min.y,Mt=ce.isBox3?ce.min.z:0;else{const wn=Math.pow(2,-se);Xe=Math.floor(gn.width*wn),Ve=Math.floor(gn.height*wn),w.isDataArrayTexture?Qe=gn.depth:w.isData3DTexture?Qe=Math.floor(gn.depth*wn):Qe=1,je=0,lt=0,Mt=0}ne!==null?(it=ne.x,Zt=ne.y,Cn=ne.z):(it=0,Zt=0,Cn=0);const an=Ie.convert(K.format),rn=Ie.convert(K.type);let Ze;K.isData3DTexture?(pe.setTexture3D(K,0),Ze=j.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(pe.setTexture2DArray(K,0),Ze=j.TEXTURE_2D_ARRAY):(pe.setTexture2D(K,0),Ze=j.TEXTURE_2D),A.activeTexture(j.TEXTURE0),A.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),A.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),A.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const xi=A.getParameter(j.UNPACK_ROW_LENGTH),Ut=A.getParameter(j.UNPACK_IMAGE_HEIGHT),Jn=A.getParameter(j.UNPACK_SKIP_PIXELS),na=A.getParameter(j.UNPACK_SKIP_ROWS),Ya=A.getParameter(j.UNPACK_SKIP_IMAGES);A.pixelStorei(j.UNPACK_ROW_LENGTH,gn.width),A.pixelStorei(j.UNPACK_IMAGE_HEIGHT,gn.height),A.pixelStorei(j.UNPACK_SKIP_PIXELS,je),A.pixelStorei(j.UNPACK_SKIP_ROWS,lt),A.pixelStorei(j.UNPACK_SKIP_IMAGES,Mt);const ia=w.isDataArrayTexture||w.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const wn=ae.get(w),qa=ae.get(K),tn=ae.get(wn.__renderTarget),ir=ae.get(qa.__renderTarget);A.bindFramebuffer(j.READ_FRAMEBUFFER,tn.__webglFramebuffer),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let ss=0;ss<Qe;ss++)ia&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ae.get(w).__webglTexture,se,Mt+ss),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ae.get(K).__webglTexture,Ge,Cn+ss)),j.blitFramebuffer(je,lt,Xe,Ve,it,Zt,Xe,Ve,j.DEPTH_BUFFER_BIT,j.NEAREST);A.bindFramebuffer(j.READ_FRAMEBUFFER,null),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(se!==0||w.isRenderTargetTexture||ae.has(w)){const wn=ae.get(w),qa=ae.get(K);A.bindFramebuffer(j.READ_FRAMEBUFFER,re),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,Z);for(let tn=0;tn<Qe;tn++)ia?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,wn.__webglTexture,se,Mt+tn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,wn.__webglTexture,se),sn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,qa.__webglTexture,Ge,Cn+tn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,qa.__webglTexture,Ge),se!==0?j.blitFramebuffer(je,lt,Xe,Ve,it,Zt,Xe,Ve,j.COLOR_BUFFER_BIT,j.NEAREST):sn?j.copyTexSubImage3D(Ze,Ge,it,Zt,Cn+tn,je,lt,Xe,Ve):j.copyTexSubImage2D(Ze,Ge,it,Zt,je,lt,Xe,Ve);A.bindFramebuffer(j.READ_FRAMEBUFFER,null),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else sn?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Ze,Ge,it,Zt,Cn,Xe,Ve,Qe,an,rn,gn.data):K.isCompressedArrayTexture?j.compressedTexSubImage3D(Ze,Ge,it,Zt,Cn,Xe,Ve,Qe,an,gn.data):j.texSubImage3D(Ze,Ge,it,Zt,Cn,Xe,Ve,Qe,an,rn,gn):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ge,it,Zt,Xe,Ve,an,rn,gn.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ge,it,Zt,gn.width,gn.height,an,gn.data):j.texSubImage2D(j.TEXTURE_2D,Ge,it,Zt,Xe,Ve,an,rn,gn);A.pixelStorei(j.UNPACK_ROW_LENGTH,xi),A.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ut),A.pixelStorei(j.UNPACK_SKIP_PIXELS,Jn),A.pixelStorei(j.UNPACK_SKIP_ROWS,na),A.pixelStorei(j.UNPACK_SKIP_IMAGES,Ya),Ge===0&&K.generateMipmaps&&j.generateMipmap(Ze),A.unbindTexture()},this.initRenderTarget=function(w){ae.get(w).__webglFramebuffer===void 0&&pe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?pe.setTextureCube(w,0):w.isData3DTexture?pe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?pe.setTexture2DArray(w,0):pe.setTexture2D(w,0),A.unbindTexture()},this.resetState=function(){B=0,V=0,Q=null,A.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Gt._getUnpackColorSpace()}}function tL(){const o=Qt.useRef(null);return Qt.useEffect(()=>{const e=o.current;if(!e)return;const n=new F2;n.fog=new F0(197898,.0015);const i=new Fa(60,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=400;const r=new eL({alpha:!0,antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(window.innerWidth,window.innerHeight),e.appendChild(r.domElement);const l=280,u=new Wa,f=new Float32Array(l*3),p=new Float32Array(l*3),d=new Xt(61644),_=new Xt(8150271);for(let T=0;T<l;T++){f[T*3]=(Math.random()-.5)*1200,f[T*3+1]=(Math.random()-.5)*1200,f[T*3+2]=(Math.random()-.5)*800;const N=Math.random()>.5?d:_;p[T*3]=N.r,p[T*3+1]=N.g,p[T*3+2]=N.b}u.setAttribute("position",new ka(f,3)),u.setAttribute("color",new ka(p,3));const x=new dE({size:3.5,vertexColors:!0,transparent:!0,opacity:.75,blending:lg}),g=new Z2(u,x);n.add(g);const v=new H0(80,22,120,16),M=new B0({color:61644,wireframe:!0,transparent:!0,opacity:.12}),b=new br(v,M);b.position.set(250,50,-150),n.add(b);let y=0,S=0,U=0,P=0;const R=T=>{y=(T.clientX-window.innerWidth/2)*.15,S=(T.clientY-window.innerHeight/2)*.15},D=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",R,{passive:!0}),window.addEventListener("resize",D);let O;const C=()=>{O=requestAnimationFrame(C),U+=(y-U)*.05,P+=(S-P)*.05,g.rotation.y+=8e-4,g.rotation.x+=4e-4,b.rotation.x+=.003,b.rotation.y+=.005,i.position.x=U,i.position.y=-P,i.lookAt(n.position),r.render(n,i)};return C(),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("resize",D),cancelAnimationFrame(O),e&&r.domElement&&e.removeChild(r.domElement),u.dispose(),x.dispose(),v.dispose(),M.dispose(),r.dispose()}},[]),X.jsx("div",{ref:o,className:"cyber-3d-canvas"})}function nL({profile:o,onExplore:e}){const[n,i]=Qt.useState(0),r=Qt.useRef(null),l=Qt.useRef(null);Qt.useEffect(()=>{const d=setInterval(()=>{i(_=>_>=100?(clearInterval(d),100):_+Math.floor(Math.random()*15)+5)},80);return()=>clearInterval(d)},[]);const u=d=>{if(!l.current)return;const _=l.current,x=_.getBoundingClientRect(),g=d.clientX-x.left-x.width/2,v=d.clientY-x.top-x.height/2;_.style.transform=`perspective(1000px) rotateX(${-v/12}deg) rotateY(${g/12}deg) scale3d(1.03, 1.03, 1.03)`},f=()=>{l.current&&(l.current.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")},p=()=>{if(!r.current){e();return}zs.to(r.current,{opacity:0,scale:1.15,filter:"blur(20px)",duration:.75,ease:"power3.inOut",onComplete:()=>{e()}})};return X.jsxs("div",{ref:r,className:"cyber-gateway-overlay",children:[X.jsx("div",{className:"gateway-bg-glow"}),X.jsxs("div",{ref:l,className:"gateway-card holographic-card",onMouseMove:u,onMouseLeave:f,children:[X.jsx("div",{className:"scan-line"}),X.jsxs("div",{className:"gateway-portrait-shell",children:[X.jsx("div",{className:"portrait-orbit orbit-spin"}),X.jsx("div",{className:"portrait-orbit orbit-spin-reverse"}),X.jsx("img",{src:o.image,alt:o.name,className:"gateway-portrait-img"})]}),X.jsxs("div",{className:"gateway-info",children:[X.jsxs("div",{className:"gateway-eyebrow",children:[X.jsx(S1,{size:15})," BIOMETRIC_ID // VERIFIED"]}),X.jsxs("h1",{className:"gateway-title",children:["Panduga Maheswar ",X.jsx("span",{className:"cyber-gradient-text",children:"Reddy"})]}),X.jsxs("p",{className:"gateway-subtitle",children:[X.jsx(t0,{size:16,className:"cyan-glow-icon"})," ",o.role]}),X.jsxs("div",{className:"gateway-status-bar",children:[X.jsx("div",{className:"status-progress-track",children:X.jsx("div",{className:"status-progress-fill",style:{width:`${Math.min(n,100)}%`}})}),X.jsxs("div",{className:"status-labels",children:[X.jsx("span",{children:"INITIALIZING MATRIX..."}),X.jsxs("span",{children:[Math.min(n,100),"%"]})]})]}),X.jsxs("button",{className:`btn primary cyber-btn gateway-cta ${n<100?"disabled-btn":""}`,onClick:p,disabled:n<100,children:[X.jsx("span",{children:"LET'S EXPLORE PORTFOLIO"})," ",X.jsx(XA,{size:20})]})]})]}),X.jsx("div",{className:"gateway-footer-text",children:`CLICK "LET'S EXPLORE PORTFOLIO" TO ENTER FULL SYSTEM INTERFACE`})]})}function iL({profile:o,projects:e,stack:n,setCurrentView:i}){const[r,l]=Qt.useState([{text:'Type "help" to view all available commands.',type:"info"}]),[u,f]=Qt.useState(""),p=Qt.useRef(null);Qt.useEffect(()=>{var _;(_=p.current)==null||_.scrollIntoView({behavior:"smooth"})},[r]);const d=async _=>{_.preventDefault();const x=u.trim();if(!x)return;const g=x.toLowerCase();f(""),l(M=>[...M,{text:`pmr-user@matrix:~$ ${x}`,type:"input"}]);let v=[];switch(g){case"help":v.push({text:"AVAILABLE COMMANDS:",type:"system"}),v.push({text:"  about      - Display background summary",type:"info"}),v.push({text:"  skills     - List technical stack highlights",type:"info"}),v.push({text:"  projects   - Show all deployed enterprise solutions",type:"info"}),v.push({text:"  contact    - Scroll to secure communication panel",type:"info"}),v.push({text:"  clear      - Clear console terminal logs",type:"info"}),l(M=>[...M,...v]);break;case"about":v.push({text:`NAME: ${o.name}`,type:"success"}),v.push({text:`ROLE: ${o.role}`,type:"success"}),v.push({text:`LOCATION: ${o.location}`,type:"info"}),v.push({text:`SUMMARY: ${o.summary}`,type:"info"}),l(M=>[...M,...v]);break;case"skills":v.push({text:"TECH STACK DOMAINS:",type:"system"}),n.forEach(([M,b])=>{v.push({text:`  [${M}]: ${b.slice(0,6).join(", ")}...`,type:"success"})}),l(M=>[...M,...v]);break;case"projects":v.push({text:"DEPLOYED ENTERPRISE SOLUTIONS:",type:"system"}),e.forEach((M,b)=>{v.push({text:`  0${b+1}. ${M.title} - ${M.category} (${M.metrics[0]})`,type:"success"})}),l(M=>[...M,...v]);break;case"contact":v.push({text:"Redirecting payload to contact terminal...",type:"info"}),l(M=>[...M,...v]),setTimeout(()=>{if(i)i("contact"),window.scrollTo(0,0);else{const M=document.getElementById("contact");M==null||M.scrollIntoView({behavior:"smooth"})}},600);break;case"clear":l([]);break;default:try{l(S=>[...S,{text:"Thinking...",type:"info",id:"loading-line"}]);const y=await(await fetch("http://localhost:5000/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:x})})).json();l(S=>[...S.filter(P=>P.id!=="loading-line"),{text:y.reply||"No response received from system AI.",type:"success"}])}catch(M){console.error(M),l(b=>[...b.filter(S=>S.id!=="loading-line"),{text:"System offline: unable to establish connection to AI core.",type:"error"}])}}};return X.jsxs("div",{className:"terminal-console-wrapper cyber-card",children:[X.jsxs("div",{className:"terminal-header",children:[X.jsxs("div",{className:"terminal-dots",children:[X.jsx("span",{className:"dot red"}),X.jsx("span",{className:"dot yellow"}),X.jsx("span",{className:"dot green"})]}),X.jsxs("div",{className:"terminal-title",children:[X.jsx(t0,{size:14})," interactive_matrix_console.sh"]}),X.jsxs("div",{className:"terminal-status-badge",children:[X.jsx(QA,{size:12})," SECURE_TLS_256"]})]}),X.jsxs("div",{className:"terminal-body",children:[r.map((_,x)=>X.jsx("div",{className:`terminal-line ${_.type}`,children:_.text},x)),X.jsxs("form",{onSubmit:d,className:"terminal-input-row",children:[X.jsx("span",{className:"terminal-prompt",children:"pmr-user@matrix:~$"}),X.jsx("input",{type:"text",value:u,onChange:_=>f(_.target.value),placeholder:"Type a command...",className:"terminal-input-box",autoFocus:!0}),X.jsx("button",{type:"submit",className:"terminal-submit-btn","aria-label":"Submit command",children:X.jsx(WA,{size:12})})]}),X.jsx("div",{ref:p})]})]})}const x1="http://localhost:5000";function aL(){const[o,e]=Qt.useState("--:--:--");return Qt.useEffect(()=>{const n=()=>{e(new Intl.DateTimeFormat("en-IN",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date))};n();const i=setInterval(n,1e3);return()=>clearInterval(i)},[]),o}function rL(){const o=aL(),[e,n]=Qt.useState($A),[i,r]=Qt.useState(eR),[l,u]=Qt.useState(tR),[f,p]=Qt.useState(nR),[d,_]=Qt.useState(iR),[x,g]=Qt.useState(!1),[v,M]=Qt.useState(!1),[b,y]=Qt.useState(""),[S,U]=Qt.useState(!1),[P,R]=Qt.useState("home"),D=v?l:l.slice(0,4);Qt.useEffect(()=>{async function I(){try{const H=await fetch(`${x1}/api/profile`);if(!H.ok)throw new Error("Failed to fetch profile");const G=await H.json();G.profile&&n(G.profile),G.stats&&r(G.stats),G.projects&&u(G.projects),G.stack&&p(G.stack),G.experience&&_(G.experience)}catch(H){console.warn("Could not fetch dynamic profile from backend, using local static data fallback:",H)}}I()},[]);const O=Qt.useMemo(()=>["⚡ AI/GENAI ENGINEER","🧬 LLAMA 3.1 FINE-TUNING","🚀 PRODUCTION-READY","☁️ GCP / AWS / AZURE","🔍 RAG PIPELINES","🤖 AGENTIC AI","🕸️ NEO4J KNOWLEDGE GRAPHS","📦 DOCKER / CLOUD RUN","💻 MERN STACK"],[]);Qt.useEffect(()=>{if(!x||P!=="home"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;zs.registerPlugin(Pt);const I=zs.context(()=>{zs.fromTo(".hero-copy",{opacity:0,x:-160},{opacity:1,x:0,duration:1.4,ease:"power4.out"}),zs.fromTo(".portrait-shell",{opacity:0,x:160},{opacity:1,x:0,duration:1.4,ease:"power4.out"}),zs.utils.toArray(".reveal").forEach(H=>{zs.fromTo(H,{opacity:0,y:42},{opacity:1,y:0,duration:.75,ease:"power3.out",scrollTrigger:{trigger:H,start:"top 86%",once:!0}})})});return()=>I.revert()},[x,P]),Qt.useEffect(()=>{const I=H=>{document.documentElement.style.setProperty("--mx",`${H.clientX}px`),document.documentElement.style.setProperty("--my",`${H.clientY}px`)};return window.addEventListener("pointermove",I,{passive:!0}),()=>window.removeEventListener("pointermove",I)},[]);const C=I=>{const H=I.currentTarget,G=H.getBoundingClientRect(),ie=I.clientX-G.left-G.width/2,re=I.clientY-G.top-G.height/2;H.style.transform=`perspective(1000px) rotateX(${-re/18}deg) rotateY(${ie/18}deg) scale3d(1.02, 1.02, 1.02)`,H.style.setProperty("--cx",`${I.clientX-G.left}px`),H.style.setProperty("--cy",`${I.clientY-G.top}px`)},T=I=>{const H=I.currentTarget;H.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"};async function N(I){I.preventDefault();const H=I.currentTarget;U(!0),y("");const G=Object.fromEntries(new FormData(H));try{const ie=await fetch(`${x1}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)}),re=await ie.json();if(!ie.ok)throw new Error(re.message||"Could not send message");y(re.message),H.reset()}catch(ie){y(`${ie.message}. You can email me directly at ${e.email}.`)}finally{U(!1)}}return X.jsxs("main",{children:[X.jsx(tL,{}),X.jsx("div",{className:"grain"}),X.jsx("div",{className:"cursor-glow"}),X.jsx("div",{className:"cyber-grid-overlay"}),!x&&X.jsx(nL,{profile:e,onExplore:()=>g(!0)}),X.jsxs("nav",{className:"nav",children:[X.jsxs("a",{className:"brand",href:"#top",onClick:I=>{I.preventDefault(),R("home")},children:[X.jsx("span",{className:"brand-dot"}),"PortFolio"]}),X.jsxs("div",{className:"nav-links",children:[X.jsxs("button",{className:"gateway-reset-btn",onClick:()=>g(!1),title:"Re-initialize Gateway Screen",children:[X.jsx(jA,{size:13})," Gateway"]}),X.jsx("a",{href:"#top",onClick:()=>R("home"),children:"Home"}),X.jsx("a",{href:"#work",onClick:()=>R("home"),children:"Work"}),X.jsx("a",{href:"#stack",onClick:()=>R("home"),children:"Stack"}),X.jsx("a",{href:"#experience",onClick:()=>R("home"),children:"Experience"}),X.jsx("a",{href:"#synapse",onClick:()=>R("home"),children:"Synapse"}),X.jsxs("a",{className:"nav-cta",href:"#contact",onClick:I=>{I.preventDefault(),R("contact")},children:[X.jsx(JA,{size:14})," Contact"]})]})]}),P==="home"?X.jsxs(X.Fragment,{children:[X.jsxs("section",{className:"hero",id:"top",children:[X.jsxs("div",{className:"hero-copy",children:[X.jsxs("div",{className:"eyebrow glow-pill",children:[X.jsx(S1,{size:15})," ",e.availability]}),X.jsxs("h1",{children:[e.name.split(" ").slice(0,2).join(" "),X.jsx("span",{className:"cyber-gradient-text",children:e.name.split(" ").slice(2).join(" ")})]}),X.jsxs("p",{className:"role-line",children:[X.jsx(t0,{size:16,className:"cyan-glow-icon"})," ",e.role," - ",X.jsx("span",{className:"highlight-text",children:e.location})]}),X.jsx("p",{className:"hero-summary",children:e.summary}),X.jsxs("div",{className:"hero-actions",children:[X.jsxs("a",{className:"btn primary cyber-btn",href:"#work",children:["View projects ",X.jsx(Xm,{size:18})]}),X.jsx("a",{className:"btn ghost cyber-btn-ghost",href:"#contact",onClick:I=>{I.preventDefault(),R("contact")},children:"Let's talk"})]})]}),X.jsxs("div",{className:"portrait-shell holographic-card","aria-label":`${e.name} portrait`,onMouseMove:C,onMouseLeave:T,children:[X.jsx("div",{className:"portrait-hud top",children:"PROFILE_READY // 3D_MATRIX"}),X.jsx("div",{className:"scan-line"}),X.jsx("div",{className:"portrait-orbit orbit-spin"}),X.jsx("div",{className:"portrait-orbit orbit-spin-reverse"}),X.jsx("img",{src:e.image,alt:e.name}),X.jsxs("div",{className:"portrait-base glass-hud",children:[X.jsxs("div",{children:[X.jsx("strong",{children:e.shortName}),X.jsx("span",{className:"hud-status",children:"● LIVE SYSTEM"})]}),X.jsx("span",{children:"Production AI Systems"})]})]}),X.jsxs("div",{className:"hero-strip",children:[i.map(I=>X.jsxs("div",{className:"stat cyber-stat",onMouseMove:C,onMouseLeave:T,children:[X.jsx("strong",{children:I.value}),X.jsx("span",{children:I.label})]},I.label)),X.jsxs("div",{className:"stat live cyber-stat",onMouseMove:C,onMouseLeave:T,children:[X.jsx("strong",{children:o}),X.jsx("span",{children:"IST live // Kolkata"})]})]})]}),X.jsxs("section",{className:"section terminal-section",id:"synapse",children:[X.jsxs("div",{className:"section-head reveal",children:[X.jsx("p",{className:"eyebrow glow-pill",children:"Interactive Command Deck"}),X.jsxs("h2",{children:[" Synapse ",X.jsx("span",{className:"cyber-gradient-text"})]})]}),X.jsx(iL,{profile:e,projects:l,stack:f,setCurrentView:R})]}),X.jsx("section",{className:"marquee","aria-hidden":"true",children:X.jsx("div",{children:[...O,...O].map((I,H)=>X.jsx("span",{children:I},`${I}-${H}`))})}),X.jsxs("section",{className:"section projects",id:"work",children:[X.jsxs("div",{className:"section-head reveal",children:[X.jsx("p",{className:"eyebrow glow-pill",children:"Selected Work"}),X.jsxs("h2",{children:["Projects built around ",X.jsx("span",{className:"cyber-gradient-text",children:"measurable outcomes."})]})]}),X.jsx("div",{className:"project-list",children:D.map((I,H)=>X.jsxs("article",{className:"project-card reveal cyber-card",onMouseMove:C,onMouseLeave:T,children:[X.jsx("div",{className:"project-index",children:String(H+1).padStart(2,"0")}),X.jsxs("div",{children:[X.jsx("p",{className:"project-category",children:I.category}),X.jsx("h3",{children:I.title}),X.jsx("p",{children:I.description}),X.jsx("div",{className:"metrics",children:I.metrics.map(G=>X.jsx("span",{className:"metric-badge",children:G},G))}),X.jsx("div",{className:"tags",children:I.tech.map(G=>X.jsx("span",{children:G},G))})]}),X.jsx(Xm,{className:"project-arrow"})]},I.title))}),X.jsx("button",{className:"more-btn reveal cyber-btn",onClick:()=>M(I=>!I),children:v?"Show less":"⚡ Show more projects"})]}),X.jsxs("section",{className:"section principles",children:[X.jsxs("div",{className:"section-head reveal",children:[X.jsx("p",{className:"eyebrow glow-pill",children:"Operating Principles"}),X.jsxs("h2",{children:["I care about systems that work ",X.jsx("span",{className:"cyber-gradient-text",children:"after the demo."})]})]}),X.jsx("div",{className:"principle-grid",children:[["Accuracy over hype","I benchmark, validate, and communicate real numbers instead of hiding behind best-case screenshots."],["Architecture first","Modular APIs, clean data contracts, and observability make AI workflows easier to maintain and scale."],["Ship, measure, iterate","I like notebooks, but I trust deployed systems with logs, health checks, and feedback loops."]].map(([I,H],G)=>X.jsxs("article",{className:"principle reveal cyber-card",onMouseMove:C,onMouseLeave:T,children:[X.jsxs("span",{children:["0",G+1]}),X.jsx("h3",{children:I}),X.jsx("p",{children:H})]},I))})]}),X.jsxs("section",{className:"section stack",id:"stack",children:[X.jsxs("div",{className:"section-head reveal",children:[X.jsx("p",{className:"eyebrow glow-pill",children:"Technical Stack"}),X.jsx("h2",{children:"Tools I reach for in production."})]}),X.jsx("div",{className:"stack-table reveal",children:f.map(([I,H])=>X.jsxs("div",{className:"stack-row cyber-row",children:[X.jsx("strong",{children:I}),X.jsx("div",{children:H.map(G=>X.jsx("span",{className:"stack-chip",children:G},G))})]},I))})]}),X.jsxs("section",{className:"section experience",id:"experience",children:[X.jsxs("div",{className:"section-head reveal",children:[X.jsx("p",{className:"eyebrow glow-pill",children:"Career Path"}),X.jsx("h2",{children:"Experience and education."})]}),X.jsx("div",{className:"timeline",children:d.map((I,H)=>X.jsxs("article",{className:"timeline-item reveal cyber-card",onMouseMove:C,onMouseLeave:T,children:[X.jsxs("div",{className:"timeline-num",children:["0",H+1]}),X.jsxs("div",{children:[X.jsx("p",{className:"period-badge",children:I.period}),X.jsx("h3",{children:I.title}),X.jsx("strong",{className:"org-text",children:I.org}),X.jsx("ul",{children:I.bullets.map(G=>X.jsx("li",{children:G},G))})]})]},I.title))})]}),X.jsx("section",{className:"section wave-divider-section",children:X.jsxs("div",{className:"wave-divider-inner",children:[X.jsx("div",{className:"wave-line wave-left",children:X.jsxs("svg",{viewBox:"0 0 200 40",preserveAspectRatio:"none",className:"wave-svg",children:[X.jsx("path",{d:"M0,20 Q50,0 100,20 T200,20",fill:"none",stroke:"url(#wave-glow-gradient)",strokeWidth:"3"}),X.jsx("defs",{children:X.jsxs("linearGradient",{id:"wave-glow-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[X.jsx("stop",{offset:"0%",stopColor:"rgba(0, 240, 204, 0)"}),X.jsx("stop",{offset:"100%",stopColor:"rgba(0, 240, 204, 1)"})]})})]})}),X.jsxs("div",{className:"wave-content",children:[X.jsx("span",{className:"wave-sub",children:"READY TO COLLABORATE?"}),X.jsxs("button",{className:"btn primary cyber-btn wave-cta-btn",onClick:()=>{R("contact"),window.scrollTo(0,0)},children:["Contact Me ",X.jsx(Xm,{size:18})]})]}),X.jsx("div",{className:"wave-line wave-right",children:X.jsxs("svg",{viewBox:"0 0 200 40",preserveAspectRatio:"none",className:"wave-svg",children:[X.jsx("path",{d:"M0,20 Q50,40 100,20 T200,20",fill:"none",stroke:"url(#wave-glow-gradient-rev)",strokeWidth:"3"}),X.jsx("defs",{children:X.jsxs("linearGradient",{id:"wave-glow-gradient-rev",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[X.jsx("stop",{offset:"0%",stopColor:"rgba(0, 240, 204, 1)"}),X.jsx("stop",{offset:"100%",stopColor:"rgba(0, 240, 204, 0)"})]})})]})})]})})]}):X.jsxs("section",{className:"section contact-page-section",id:"contact",children:[X.jsx("div",{className:"section-head reveal",children:X.jsx("p",{className:"eyebrow glow-pill",children:"Secure Channel"})}),X.jsxs("div",{className:"contact-panel reveal cyber-panel",children:[X.jsxs("div",{children:[X.jsxs("h2",{children:["Let's build something that ",X.jsx("span",{className:"cyber-gradient-text",children:"actually ships."})]}),X.jsx("p",{className:"contact-copy",children:"Open to full-time AI/GenAI roles, freelance engineering, and practical product collaborations."}),X.jsxs("div",{className:"contact-links",children:[X.jsxs("a",{href:`mailto:${e.email}`,className:"cyber-link",children:[X.jsx(YA,{size:18}),e.email]}),X.jsxs("a",{href:`tel:${e.phone.replace(/\s/g,"")}`,className:"cyber-link",children:[X.jsx(ZA,{size:18}),e.phone]}),X.jsxs("span",{className:"cyber-link-static",children:[X.jsx(qA,{size:18}),"Kurnool, Andhra Pradesh / Trivandrum, Kerala"]})]}),X.jsxs("div",{className:"socials",children:[X.jsx("a",{href:"https://github.com/PMaheshwarreddy",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"social-icon",children:X.jsx(OS,{})}),X.jsx("a",{href:"https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"social-icon",children:X.jsx(IS,{})}),X.jsx("a",{href:"https://www.instagram.com/maheswar_reddy_12?igsh=MTlyMXlxZW1sbnNmOA==",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"social-icon",children:X.jsx(PS,{})}),X.jsx("a",{href:"https://x.com/PMaheswar43013",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",className:"social-icon",children:X.jsx(zS,{})})]}),X.jsx("button",{className:"btn ghost cyber-btn-ghost back-home-btn",onClick:()=>R("home"),style:{marginTop:"2rem"},children:"← Back to Home"})]}),X.jsxs("form",{onSubmit:N,className:"cyber-form",children:[X.jsxs("label",{children:["Name",X.jsx("input",{name:"name",required:!0,placeholder:"Jane Cooper",className:"cyber-input"})]}),X.jsxs("label",{children:["Email",X.jsx("input",{name:"email",type:"email",required:!0,placeholder:"jane@company.com",className:"cyber-input"})]}),X.jsxs("label",{children:["Subject",X.jsx("input",{name:"subject",required:!0,placeholder:"AI project opportunity",className:"cyber-input"})]}),X.jsxs("label",{children:["Message",X.jsx("textarea",{name:"message",required:!0,placeholder:"Tell me what you are building...",className:"cyber-input"})]}),X.jsx("button",{disabled:S,className:"btn primary cyber-btn full-btn",children:S?"Sending...":X.jsxs(X.Fragment,{children:[X.jsx(KA,{size:17})," Send message"]})}),b&&X.jsx("p",{className:"form-status",children:b})]})]})]}),X.jsxs("footer",{className:"footer cyber-footer",children:[X.jsxs("div",{className:"footer-grid",children:[X.jsxs("div",{className:"footer-branding",children:[X.jsx("span",{className:"brand-dot"}),X.jsx("span",{className:"footer-brand-title",children:"PortFolio"}),X.jsx("p",{children:"Production-grade AI systems, fine-tuned LLMs, and intelligent document workflows."})]}),X.jsxs("div",{className:"footer-links-section",children:[X.jsx("h4",{children:"System Nav"}),X.jsxs("div",{className:"footer-links-grid",children:[X.jsx("a",{href:"#top",onClick:I=>{I.preventDefault(),R("home")},children:"Hero Deck"}),X.jsx("a",{href:"#work",onClick:I=>{I.preventDefault(),R("home")},children:"Projects"}),X.jsx("a",{href:"#stack",onClick:I=>{I.preventDefault(),R("home")},children:"Tech Stack"}),X.jsx("a",{href:"#experience",onClick:I=>{I.preventDefault(),R("home")},children:"Timeline"})]})]}),X.jsxs("div",{className:"footer-socials-section",children:[X.jsx("h4",{children:"Social Profiles"}),X.jsxs("div",{className:"socials footer-socials",children:[X.jsx("a",{href:"https://github.com/PMaheshwarreddy",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"social-icon",children:X.jsx(OS,{})}),X.jsx("a",{href:"https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"social-icon",children:X.jsx(IS,{})}),X.jsx("a",{href:"https://www.instagram.com/maheswar_reddy_12?igsh=MTlyMXlxZW1sbnNmOA==",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"social-icon",children:X.jsx(PS,{})}),X.jsx("a",{href:"https://x.com/PMaheswar43013",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",className:"social-icon",children:X.jsx(zS,{})})]})]})]}),X.jsxs("div",{className:"footer-bottom",children:[X.jsxs("span",{children:["© ",new Date().getFullYear()," ",e.name,". All systems operational."]}),X.jsx("a",{href:"#top",className:"back-top",onClick:I=>{I.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"Warp to Top ↑"})]})]})]})}HA.createRoot(document.getElementById("root")).render(X.jsx(LA.StrictMode,{children:X.jsx(rL,{})}));
