(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var _x={exports:{}},ed={},gx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),UE=Symbol.for("react.portal"),IE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),FE=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),BE=Symbol.for("react.forward_ref"),HE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),VE=Symbol.for("react.lazy"),J_=Symbol.iterator;function WE(n){return n===null||typeof n!="object"?null:(n=J_&&n[J_]||n["@@iterator"],typeof n=="function"?n:null)}var vx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xx=Object.assign,yx={};function nl(n,e,t){this.props=n,this.context=e,this.refs=yx,this.updater=t||vx}nl.prototype.isReactComponent={};nl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};nl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Sx(){}Sx.prototype=nl.prototype;function wm(n,e,t){this.props=n,this.context=e,this.refs=yx,this.updater=t||vx}var Am=wm.prototype=new Sx;Am.constructor=wm;xx(Am,nl.prototype);Am.isPureReactComponent=!0;var eg=Array.isArray,Mx=Object.prototype.hasOwnProperty,Cm={current:null},Ex={key:!0,ref:!0,__self:!0,__source:!0};function Tx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mx.call(e,i)&&!Ex.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Du,type:n,key:s,ref:o,props:r,_owner:Cm.current}}function XE(n,e){return{$$typeof:Du,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Rm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Du}function jE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var tg=/\/+/g;function bd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jE(""+n.key):e.toString(36)}function Wc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Du:case UE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+bd(o,0):i,eg(r)?(t="",n!=null&&(t=n.replace(tg,"$&/")+"/"),Wc(r,e,t,"",function(u){return u})):r!=null&&(Rm(r)&&(r=XE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",eg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+bd(s,a);o+=Wc(s,e,t,l,r)}else if(l=WE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+bd(s,a++),o+=Wc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vu(n,e,t){if(n==null)return n;var i=[],r=0;return Wc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function YE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Wn={current:null},Xc={transition:null},qE={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:Xc,ReactCurrentOwner:Cm};function wx(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Vu,forEach:function(n,e,t){Vu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Vu(n,function(){e++}),e},toArray:function(n){return Vu(n,function(e){return e})||[]},only:function(n){if(!Rm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=nl;st.Fragment=IE;st.Profiler=FE;st.PureComponent=wm;st.StrictMode=OE;st.Suspense=HE;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;st.act=wx;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=xx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Mx.call(e,l)&&!Ex.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Du,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:zE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:kE,_context:n},n.Consumer=n};st.createElement=Tx;st.createFactory=function(n){var e=Tx.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:BE,render:n}};st.isValidElement=Rm;st.lazy=function(n){return{$$typeof:VE,_payload:{_status:-1,_result:n},_init:YE}};st.memo=function(n,e){return{$$typeof:GE,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Xc.transition;Xc.transition={};try{n()}finally{Xc.transition=e}};st.unstable_act=wx;st.useCallback=function(n,e){return Wn.current.useCallback(n,e)};st.useContext=function(n){return Wn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Wn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Wn.current.useEffect(n,e)};st.useId=function(){return Wn.current.useId()};st.useImperativeHandle=function(n,e,t){return Wn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Wn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Wn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Wn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Wn.current.useReducer(n,e,t)};st.useRef=function(n){return Wn.current.useRef(n)};st.useState=function(n){return Wn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Wn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Wn.current.useTransition()};st.version="18.3.1";gx.exports=st;var bn=gx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E=bn,KE=Symbol.for("react.element"),QE=Symbol.for("react.fragment"),ZE=Object.prototype.hasOwnProperty,JE=$E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e1={key:!0,ref:!0,__self:!0,__source:!0};function Ax(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ZE.call(e,i)&&!e1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:KE,type:n,key:s,ref:o,props:r,_owner:JE.current}}ed.Fragment=QE;ed.jsx=Ax;ed.jsxs=Ax;_x.exports=ed;var Y=_x.exports,Cx={exports:{}},Ri={},Rx={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,F){var R=N.length;N.push(F);e:for(;0<R;){var K=R-1>>>1,J=N[K];if(0<r(J,F))N[K]=F,N[R]=J,R=K;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],R=N.pop();if(R!==F){N[0]=R;e:for(var K=0,J=N.length,q=J>>>1;K<q;){var Q=2*(K+1)-1,se=N[Q],me=Q+1,de=N[me];if(0>r(se,R))me<J&&0>r(de,se)?(N[K]=de,N[me]=R,K=me):(N[K]=se,N[Q]=R,K=Q);else if(me<J&&0>r(de,R))N[K]=de,N[me]=R,K=me;else break e}}return F}function r(N,F){var R=N.sortIndex-F.sortIndex;return R!==0?R:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=N)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function y(N){if(_=!1,x(N),!g)if(t(l)!==null)g=!0,G(T);else{var F=t(u);F!==null&&W(y,F.startTime-N)}}function T(N,F){g=!1,_&&(_=!1,h(b),b=-1),p=!0;var R=f;try{for(x(F),d=t(l);d!==null&&(!(d.expirationTime>F)||N&&!O());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var J=K(d.expirationTime<=F);F=n.unstable_now(),typeof J=="function"?d.callback=J:d===t(l)&&i(l),x(F)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var Q=t(u);Q!==null&&W(y,Q.startTime-F),q=!1}return q}finally{d=null,f=R,p=!1}}var w=!1,M=null,b=-1,S=5,E=-1;function O(){return!(n.unstable_now()-E<S)}function U(){if(M!==null){var N=n.unstable_now();E=N;var F=!0;try{F=M(!0,N)}finally{F?Z():(w=!1,M=null)}}else w=!1}var Z;if(typeof v=="function")Z=function(){v(U)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,k=L.port2;L.port1.onmessage=U,Z=function(){k.postMessage(null)}}else Z=function(){m(U,0)};function G(N){M=N,w||(w=!0,Z())}function W(N,F){b=m(function(){N(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,G(T))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var R=f;f=F;try{return N()}finally{f=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=f;f=N;try{return F()}finally{f=R}},n.unstable_scheduleCallback=function(N,F,R){var K=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,N={id:c++,callback:F,priorityLevel:N,startTime:R,expirationTime:J,sortIndex:-1},R>K?(N.sortIndex=R,e(u,N),t(l)===null&&N===t(u)&&(_?(h(b),b=-1):_=!0,W(y,R-K))):(N.sortIndex=J,e(l,N),g||p||(g=!0,G(T))),N},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(N){var F=f;return function(){var R=f;f=F;try{return N.apply(this,arguments)}finally{f=R}}}})(Px);Rx.exports=Px;var t1=Rx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=bn,wi=t1;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bx=new Set,iu={};function Uo(n,e){za(n,e),za(n+"Capture",e)}function za(n,e){for(iu[n]=e,n=0;n<e.length;n++)bx.add(e[n])}var zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,i1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ng={},ig={};function r1(n){return $h.call(ig,n)?!0:$h.call(ng,n)?!1:i1.test(n)?ig[n]=!0:(ng[n]=!0,!1)}function s1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function o1(n,e,t,i){if(e===null||typeof e>"u"||s1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xn[n]=new Xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xn[e]=new Xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xn[n]=new Xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xn[n]=new Xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xn[n]=new Xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xn[n]=new Xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xn[n]=new Xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xn[n]=new Xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xn[n]=new Xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Pm=/[\-:]([a-z])/g;function bm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Pm,bm);xn[e]=new Xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Pm,bm);xn[e]=new Xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Pm,bm);xn[e]=new Xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!1,!1)});xn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Lm(n,e,t,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o1(e,t,r,i)&&(t=null),i||r===null?r1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var jr=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wu=Symbol.for("react.element"),oa=Symbol.for("react.portal"),aa=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),Qh=Symbol.for("react.suspense"),Zh=Symbol.for("react.suspense_list"),Um=Symbol.for("react.memo"),ts=Symbol.for("react.lazy"),Nx=Symbol.for("react.offscreen"),rg=Symbol.iterator;function ll(n){return n===null||typeof n!="object"?null:(n=rg&&n[rg]||n["@@iterator"],typeof n=="function"?n:null)}var Bt=Object.assign,Ld;function Tl(n){if(Ld===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ld=e&&e[1]||""}return`
`+Ld+n}var Dd=!1;function Nd(n,e){if(!n||Dd)return"";Dd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Dd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Tl(n):""}function a1(n){switch(n.tag){case 5:return Tl(n.type);case 16:return Tl("Lazy");case 13:return Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 2:case 15:return n=Nd(n.type,!1),n;case 11:return n=Nd(n.type.render,!1),n;case 1:return n=Nd(n.type,!0),n;default:return""}}function Jh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case aa:return"Fragment";case oa:return"Portal";case Kh:return"Profiler";case Dm:return"StrictMode";case Qh:return"Suspense";case Zh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Dx:return(n.displayName||"Context")+".Consumer";case Lx:return(n._context.displayName||"Context")+".Provider";case Nm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Um:return e=n.displayName||null,e!==null?e:Jh(n.type)||"Memo";case ts:e=n._payload,n=n._init;try{return Jh(n(e))}catch{}}return null}function l1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ux(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u1(n){var e=Ux(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Xu(n){n._valueTracker||(n._valueTracker=u1(n))}function Ix(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ux(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function hf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ep(n,e){var t=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function sg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=bs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ox(n,e){e=e.checked,e!=null&&Lm(n,"checked",e,!1)}function tp(n,e){Ox(n,e);var t=bs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?np(n,e.type,t):e.hasOwnProperty("defaultValue")&&np(n,e.type,bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function og(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function np(n,e,t){(e!=="number"||hf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var wl=Array.isArray;function Ea(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+bs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ip(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ag(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(wl(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:bs(t)}}function Fx(n,e){var t=bs(e.value),i=bs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function lg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function kx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?kx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ju,zx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ru(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Il={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(Il).forEach(function(n){c1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Il[e]=Il[n]})});function Bx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Il.hasOwnProperty(n)&&Il[n]?(""+e).trim():e+"px"}function Hx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Bx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var f1=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sp(n,e){if(e){if(f1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function op(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=null;function Im(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lp=null,Ta=null,wa=null;function ug(n){if(n=Iu(n)){if(typeof lp!="function")throw Error(re(280));var e=n.stateNode;e&&(e=sd(e),lp(n.stateNode,n.type,e))}}function Gx(n){Ta?wa?wa.push(n):wa=[n]:Ta=n}function Vx(){if(Ta){var n=Ta,e=wa;if(wa=Ta=null,ug(n),e)for(n=0;n<e.length;n++)ug(e[n])}}function Wx(n,e){return n(e)}function Xx(){}var Ud=!1;function jx(n,e,t){if(Ud)return n(e,t);Ud=!0;try{return Wx(n,e,t)}finally{Ud=!1,(Ta!==null||wa!==null)&&(Xx(),Vx())}}function su(n,e){var t=n.stateNode;if(t===null)return null;var i=sd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var up=!1;if(zr)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){up=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{up=!1}function d1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ol=!1,pf=null,mf=!1,cp=null,h1={onError:function(n){Ol=!0,pf=n}};function p1(n,e,t,i,r,s,o,a,l){Ol=!1,pf=null,d1.apply(h1,arguments)}function m1(n,e,t,i,r,s,o,a,l){if(p1.apply(this,arguments),Ol){if(Ol){var u=pf;Ol=!1,pf=null}else throw Error(re(198));mf||(mf=!0,cp=u)}}function Io(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Yx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function cg(n){if(Io(n)!==n)throw Error(re(188))}function _1(n){var e=n.alternate;if(!e){if(e=Io(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return cg(r),n;if(s===i)return cg(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function qx(n){return n=_1(n),n!==null?$x(n):null}function $x(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$x(n);if(e!==null)return e;n=n.sibling}return null}var Kx=wi.unstable_scheduleCallback,fg=wi.unstable_cancelCallback,g1=wi.unstable_shouldYield,v1=wi.unstable_requestPaint,Xt=wi.unstable_now,x1=wi.unstable_getCurrentPriorityLevel,Om=wi.unstable_ImmediatePriority,Qx=wi.unstable_UserBlockingPriority,_f=wi.unstable_NormalPriority,y1=wi.unstable_LowPriority,Zx=wi.unstable_IdlePriority,td=null,gr=null;function S1(n){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(td,n,void 0,(n.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:T1,M1=Math.log,E1=Math.LN2;function T1(n){return n>>>=0,n===0?32:31-(M1(n)/E1|0)|0}var Yu=64,qu=4194304;function Al(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Al(a):(s&=o,s!==0&&(i=Al(s)))}else o=t&~r,o!==0?i=Al(o):s!==0&&(i=Al(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-rr(e),r=1<<t,i|=n[t],e&=~r;return i}function w1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-rr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=w1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function fp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Jx(){var n=Yu;return Yu<<=1,!(Yu&4194240)&&(Yu=64),n}function Id(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-rr(e),n[e]=t}function C1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-rr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Fm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-rr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var gt=0;function ey(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ty,km,ny,iy,ry,dp=!1,$u=[],_s=null,gs=null,vs=null,ou=new Map,au=new Map,rs=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(n,e){switch(n){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":ou.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":au.delete(e.pointerId)}}function cl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Iu(e),e!==null&&km(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function P1(n,e,t,i,r){switch(e){case"focusin":return _s=cl(_s,n,e,t,i,r),!0;case"dragenter":return gs=cl(gs,n,e,t,i,r),!0;case"mouseover":return vs=cl(vs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ou.set(s,cl(ou.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,au.set(s,cl(au.get(s)||null,n,e,t,i,r)),!0}return!1}function sy(n){var e=so(n.target);if(e!==null){var t=Io(e);if(t!==null){if(e=t.tag,e===13){if(e=Yx(t),e!==null){n.blockedOn=e,ry(n.priority,function(){ny(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ap=i,t.target.dispatchEvent(i),ap=null}else return e=Iu(t),e!==null&&km(e),n.blockedOn=t,!1;e.shift()}return!0}function hg(n,e,t){jc(n)&&t.delete(e)}function b1(){dp=!1,_s!==null&&jc(_s)&&(_s=null),gs!==null&&jc(gs)&&(gs=null),vs!==null&&jc(vs)&&(vs=null),ou.forEach(hg),au.forEach(hg)}function fl(n,e){n.blockedOn===e&&(n.blockedOn=null,dp||(dp=!0,wi.unstable_scheduleCallback(wi.unstable_NormalPriority,b1)))}function lu(n){function e(r){return fl(r,n)}if(0<$u.length){fl($u[0],n);for(var t=1;t<$u.length;t++){var i=$u[t];i.blockedOn===n&&(i.blockedOn=null)}}for(_s!==null&&fl(_s,n),gs!==null&&fl(gs,n),vs!==null&&fl(vs,n),ou.forEach(e),au.forEach(e),t=0;t<rs.length;t++)i=rs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rs.length&&(t=rs[0],t.blockedOn===null);)sy(t),t.blockedOn===null&&rs.shift()}var Aa=jr.ReactCurrentBatchConfig,vf=!0;function L1(n,e,t,i){var r=gt,s=Aa.transition;Aa.transition=null;try{gt=1,zm(n,e,t,i)}finally{gt=r,Aa.transition=s}}function D1(n,e,t,i){var r=gt,s=Aa.transition;Aa.transition=null;try{gt=4,zm(n,e,t,i)}finally{gt=r,Aa.transition=s}}function zm(n,e,t,i){if(vf){var r=hp(n,e,t,i);if(r===null)Xd(n,e,i,xf,t),dg(n,i);else if(P1(r,n,e,t,i))i.stopPropagation();else if(dg(n,i),e&4&&-1<R1.indexOf(n)){for(;r!==null;){var s=Iu(r);if(s!==null&&ty(s),s=hp(n,e,t,i),s===null&&Xd(n,e,i,xf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xd(n,e,i,null,t)}}var xf=null;function hp(n,e,t,i){if(xf=null,n=Im(i),n=so(n),n!==null)if(e=Io(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Yx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return xf=n,null}function oy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case Om:return 1;case Qx:return 4;case _f:case y1:return 16;case Zx:return 536870912;default:return 16}default:return 16}}var os=null,Bm=null,Yc=null;function ay(){if(Yc)return Yc;var n,e=Bm,t=e.length,i,r="value"in os?os.value:os.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Yc=r.slice(n,1<i?1-i:void 0)}function qc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ku(){return!0}function pg(){return!1}function Pi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ku:pg,this.isPropagationStopped=pg,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ku)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ku)},persist:function(){},isPersistent:Ku}),e}var il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hm=Pi(il),Uu=Bt({},il,{view:0,detail:0}),N1=Pi(Uu),Od,Fd,dl,nd=Bt({},Uu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==dl&&(dl&&n.type==="mousemove"?(Od=n.screenX-dl.screenX,Fd=n.screenY-dl.screenY):Fd=Od=0,dl=n),Od)},movementY:function(n){return"movementY"in n?n.movementY:Fd}}),mg=Pi(nd),U1=Bt({},nd,{dataTransfer:0}),I1=Pi(U1),O1=Bt({},Uu,{relatedTarget:0}),kd=Pi(O1),F1=Bt({},il,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=Pi(F1),z1=Bt({},il,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),B1=Pi(z1),H1=Bt({},il,{data:0}),_g=Pi(H1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=W1[n])?!!e[n]:!1}function Gm(){return X1}var j1=Bt({},Uu,{key:function(n){if(n.key){var e=G1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=qc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?V1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gm,charCode:function(n){return n.type==="keypress"?qc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Y1=Pi(j1),q1=Bt({},nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Pi(q1),$1=Bt({},Uu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gm}),K1=Pi($1),Q1=Bt({},il,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z1=Pi(Q1),J1=Bt({},nd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eT=Pi(J1),tT=[9,13,27,32],Vm=zr&&"CompositionEvent"in window,Fl=null;zr&&"documentMode"in document&&(Fl=document.documentMode);var nT=zr&&"TextEvent"in window&&!Fl,ly=zr&&(!Vm||Fl&&8<Fl&&11>=Fl),vg=" ",xg=!1;function uy(n,e){switch(n){case"keyup":return tT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var la=!1;function iT(n,e){switch(n){case"compositionend":return cy(e);case"keypress":return e.which!==32?null:(xg=!0,vg);case"textInput":return n=e.data,n===vg&&xg?null:n;default:return null}}function rT(n,e){if(la)return n==="compositionend"||!Vm&&uy(n,e)?(n=ay(),Yc=Bm=os=null,la=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ly&&e.locale!=="ko"?null:e.data;default:return null}}var sT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!sT[n.type]:e==="textarea"}function fy(n,e,t,i){Gx(i),e=yf(e,"onChange"),0<e.length&&(t=new Hm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var kl=null,uu=null;function oT(n){My(n,0)}function id(n){var e=fa(n);if(Ix(e))return n}function aT(n,e){if(n==="change")return e}var dy=!1;if(zr){var zd;if(zr){var Bd="oninput"in document;if(!Bd){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),Bd=typeof Sg.oninput=="function"}zd=Bd}else zd=!1;dy=zd&&(!document.documentMode||9<document.documentMode)}function Mg(){kl&&(kl.detachEvent("onpropertychange",hy),uu=kl=null)}function hy(n){if(n.propertyName==="value"&&id(uu)){var e=[];fy(e,uu,n,Im(n)),jx(oT,e)}}function lT(n,e,t){n==="focusin"?(Mg(),kl=e,uu=t,kl.attachEvent("onpropertychange",hy)):n==="focusout"&&Mg()}function uT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return id(uu)}function cT(n,e){if(n==="click")return id(e)}function fT(n,e){if(n==="input"||n==="change")return id(e)}function dT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ar=typeof Object.is=="function"?Object.is:dT;function cu(n,e){if(ar(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$h.call(e,r)||!ar(n[r],e[r]))return!1}return!0}function Eg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Tg(n,e){var t=Eg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Eg(t)}}function py(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?py(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function my(){for(var n=window,e=hf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=hf(n.document)}return e}function Wm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hT(n){var e=my(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&py(t.ownerDocument.documentElement,t)){if(i!==null&&Wm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Tg(t,s);var o=Tg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pT=zr&&"documentMode"in document&&11>=document.documentMode,ua=null,pp=null,zl=null,mp=!1;function wg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mp||ua==null||ua!==hf(i)||(i=ua,"selectionStart"in i&&Wm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zl&&cu(zl,i)||(zl=i,i=yf(pp,"onSelect"),0<i.length&&(e=new Hm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ua)))}function Qu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ca={animationend:Qu("Animation","AnimationEnd"),animationiteration:Qu("Animation","AnimationIteration"),animationstart:Qu("Animation","AnimationStart"),transitionend:Qu("Transition","TransitionEnd")},Hd={},_y={};zr&&(_y=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function rd(n){if(Hd[n])return Hd[n];if(!ca[n])return n;var e=ca[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in _y)return Hd[n]=e[t];return n}var gy=rd("animationend"),vy=rd("animationiteration"),xy=rd("animationstart"),yy=rd("transitionend"),Sy=new Map,Ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fs(n,e){Sy.set(n,e),Uo(e,[n])}for(var Gd=0;Gd<Ag.length;Gd++){var Vd=Ag[Gd],mT=Vd.toLowerCase(),_T=Vd[0].toUpperCase()+Vd.slice(1);Fs(mT,"on"+_T)}Fs(gy,"onAnimationEnd");Fs(vy,"onAnimationIteration");Fs(xy,"onAnimationStart");Fs("dblclick","onDoubleClick");Fs("focusin","onFocus");Fs("focusout","onBlur");Fs(yy,"onTransitionEnd");za("onMouseEnter",["mouseout","mouseover"]);za("onMouseLeave",["mouseout","mouseover"]);za("onPointerEnter",["pointerout","pointerover"]);za("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cl));function Cg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,m1(i,e,void 0,n),n.currentTarget=null}function My(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Cg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Cg(r,a,u),s=l}}}if(mf)throw n=cp,mf=!1,cp=null,n}function Ct(n,e){var t=e[yp];t===void 0&&(t=e[yp]=new Set);var i=n+"__bubble";t.has(i)||(Ey(e,n,2,!1),t.add(i))}function Wd(n,e,t){var i=0;e&&(i|=4),Ey(t,n,i,e)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function fu(n){if(!n[Zu]){n[Zu]=!0,bx.forEach(function(t){t!=="selectionchange"&&(gT.has(t)||Wd(t,!1,n),Wd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Zu]||(e[Zu]=!0,Wd("selectionchange",!1,e))}}function Ey(n,e,t,i){switch(oy(e)){case 1:var r=L1;break;case 4:r=D1;break;default:r=zm}t=r.bind(null,e,t,n),r=void 0,!up||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Xd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=so(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jx(function(){var u=s,c=Im(t),d=[];e:{var f=Sy.get(n);if(f!==void 0){var p=Hm,g=n;switch(n){case"keypress":if(qc(t)===0)break e;case"keydown":case"keyup":p=Y1;break;case"focusin":g="focus",p=kd;break;case"focusout":g="blur",p=kd;break;case"beforeblur":case"afterblur":p=kd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=I1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=K1;break;case gy:case vy:case xy:p=k1;break;case yy:p=Z1;break;case"scroll":p=N1;break;case"wheel":p=eT;break;case"copy":case"cut":case"paste":p=B1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gg}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=su(v,h),y!=null&&_.push(du(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==ap&&(g=t.relatedTarget||t.fromElement)&&(so(g)||g[Br]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?so(g):null,g!==null&&(m=Io(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=mg,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=gg,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:fa(p),x=g==null?f:fa(g),f=new _(y,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,so(c)===u&&(_=new _(h,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,h=g,v=0,x=_;x;x=Fo(x))v++;for(x=0,y=h;y;y=Fo(y))x++;for(;0<v-x;)_=Fo(_),v--;for(;0<x-v;)h=Fo(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Fo(_),h=Fo(h)}_=null}else _=null;p!==null&&Rg(d,f,p,_,!1),g!==null&&m!==null&&Rg(d,m,g,_,!0)}}e:{if(f=u?fa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=aT;else if(yg(f))if(dy)T=fT;else{T=uT;var w=lT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=cT);if(T&&(T=T(n,u))){fy(d,T,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&np(f,"number",f.value)}switch(w=u?fa(u):window,n){case"focusin":(yg(w)||w.contentEditable==="true")&&(ua=w,pp=u,zl=null);break;case"focusout":zl=pp=ua=null;break;case"mousedown":mp=!0;break;case"contextmenu":case"mouseup":case"dragend":mp=!1,wg(d,t,c);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":wg(d,t,c)}var M;if(Vm)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else la?uy(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(ly&&t.locale!=="ko"&&(la||b!=="onCompositionStart"?b==="onCompositionEnd"&&la&&(M=ay()):(os=c,Bm="value"in os?os.value:os.textContent,la=!0)),w=yf(u,b),0<w.length&&(b=new _g(b,n,null,t,c),d.push({event:b,listeners:w}),M?b.data=M:(M=cy(t),M!==null&&(b.data=M)))),(M=nT?iT(n,t):rT(n,t))&&(u=yf(u,"onBeforeInput"),0<u.length&&(c=new _g("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}My(d,e)})}function du(n,e,t){return{instance:n,listener:e,currentTarget:t}}function yf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=su(n,t),s!=null&&i.unshift(du(n,s,r)),s=su(n,e),s!=null&&i.push(du(n,s,r))),n=n.return}return i}function Fo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=su(t,s),l!=null&&o.unshift(du(t,l,a))):r||(l=su(t,s),l!=null&&o.push(du(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var vT=/\r\n?/g,xT=/\u0000|\uFFFD/g;function Pg(n){return(typeof n=="string"?n:""+n).replace(vT,`
`).replace(xT,"")}function Ju(n,e,t){if(e=Pg(e),Pg(n)!==e&&t)throw Error(re(425))}function Sf(){}var _p=null,gp=null;function vp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,yT=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,ST=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(n){return bg.resolve(null).then(n).catch(MT)}:xp;function MT(n){setTimeout(function(){throw n})}function jd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),lu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);lu(e)}function xs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Lg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var rl=Math.random().toString(36).slice(2),hr="__reactFiber$"+rl,hu="__reactProps$"+rl,Br="__reactContainer$"+rl,yp="__reactEvents$"+rl,ET="__reactListeners$"+rl,TT="__reactHandles$"+rl;function so(n){var e=n[hr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Br]||t[hr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Lg(n);n!==null;){if(t=n[hr])return t;n=Lg(n)}return e}n=t,t=n.parentNode}return null}function Iu(n){return n=n[hr]||n[Br],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function sd(n){return n[hu]||null}var Sp=[],da=-1;function ks(n){return{current:n}}function Pt(n){0>da||(n.current=Sp[da],Sp[da]=null,da--)}function wt(n,e){da++,Sp[da]=n.current,n.current=e}var Ls={},Dn=ks(Ls),Zn=ks(!1),To=Ls;function Ba(n,e){var t=n.type.contextTypes;if(!t)return Ls;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Jn(n){return n=n.childContextTypes,n!=null}function Mf(){Pt(Zn),Pt(Dn)}function Dg(n,e,t){if(Dn.current!==Ls)throw Error(re(168));wt(Dn,e),wt(Zn,t)}function Ty(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,l1(n)||"Unknown",r));return Bt({},t,i)}function Ef(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ls,To=Dn.current,wt(Dn,n),wt(Zn,Zn.current),!0}function Ng(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=Ty(n,e,To),i.__reactInternalMemoizedMergedChildContext=n,Pt(Zn),Pt(Dn),wt(Dn,n)):Pt(Zn),wt(Zn,t)}var Pr=null,od=!1,Yd=!1;function wy(n){Pr===null?Pr=[n]:Pr.push(n)}function wT(n){od=!0,wy(n)}function zs(){if(!Yd&&Pr!==null){Yd=!0;var n=0,e=gt;try{var t=Pr;for(gt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pr=null,od=!1}catch(r){throw Pr!==null&&(Pr=Pr.slice(n+1)),Kx(Om,zs),r}finally{gt=e,Yd=!1}}return null}var ha=[],pa=0,Tf=null,wf=0,Ni=[],Ui=0,wo=null,Nr=1,Ur="";function Ks(n,e){ha[pa++]=wf,ha[pa++]=Tf,Tf=n,wf=e}function Ay(n,e,t){Ni[Ui++]=Nr,Ni[Ui++]=Ur,Ni[Ui++]=wo,wo=n;var i=Nr;n=Ur;var r=32-rr(i)-1;i&=~(1<<r),t+=1;var s=32-rr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Nr=1<<32-rr(e)+r|t<<r|i,Ur=s+n}else Nr=1<<s|t<<r|i,Ur=n}function Xm(n){n.return!==null&&(Ks(n,1),Ay(n,1,0))}function jm(n){for(;n===Tf;)Tf=ha[--pa],ha[pa]=null,wf=ha[--pa],ha[pa]=null;for(;n===wo;)wo=Ni[--Ui],Ni[Ui]=null,Ur=Ni[--Ui],Ni[Ui]=null,Nr=Ni[--Ui],Ni[Ui]=null}var Ei=null,yi=null,Lt=!1,Ji=null;function Cy(n,e){var t=zi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ug(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ei=n,yi=xs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ei=n,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=wo!==null?{id:Nr,overflow:Ur}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=zi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ei=n,yi=null,!0):!1;default:return!1}}function Mp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ep(n){if(Lt){var e=yi;if(e){var t=e;if(!Ug(n,e)){if(Mp(n))throw Error(re(418));e=xs(t.nextSibling);var i=Ei;e&&Ug(n,e)?Cy(i,t):(n.flags=n.flags&-4097|2,Lt=!1,Ei=n)}}else{if(Mp(n))throw Error(re(418));n.flags=n.flags&-4097|2,Lt=!1,Ei=n}}}function Ig(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ei=n}function ec(n){if(n!==Ei)return!1;if(!Lt)return Ig(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vp(n.type,n.memoizedProps)),e&&(e=yi)){if(Mp(n))throw Ry(),Error(re(418));for(;e;)Cy(n,e),e=xs(e.nextSibling)}if(Ig(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yi=xs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yi=null}}else yi=Ei?xs(n.stateNode.nextSibling):null;return!0}function Ry(){for(var n=yi;n;)n=xs(n.nextSibling)}function Ha(){yi=Ei=null,Lt=!1}function Ym(n){Ji===null?Ji=[n]:Ji.push(n)}var AT=jr.ReactCurrentBatchConfig;function hl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function tc(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Og(n){var e=n._init;return e(n._payload)}function Py(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Es(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=eh(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var T=x.type;return T===aa?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ts&&Og(T)===v.type)?(y=r(v,x.props),y.ref=hl(h,v,x),y.return=h,y):(y=tf(x.type,x.key,x.props,null,h.mode,y),y.ref=hl(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=th(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,T){return v===null||v.tag!==7?(v=fo(x,h.mode,y,T),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=eh(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wu:return x=tf(v.type,v.key,v.props,null,h.mode,x),x.ref=hl(h,null,v),x.return=h,x;case oa:return v=th(v,h.mode,x),v.return=h,v;case ts:var y=v._init;return d(h,y(v._payload),x)}if(wl(v)||ll(v))return v=fo(v,h.mode,x,null),v.return=h,v;tc(h,v)}return null}function f(h,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wu:return x.key===T?l(h,v,x,y):null;case oa:return x.key===T?u(h,v,x,y):null;case ts:return T=x._init,f(h,v,T(x._payload),y)}if(wl(x)||ll(x))return T!==null?null:c(h,v,x,y,null);tc(h,x)}return null}function p(h,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wu:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,T);case oa:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,T);case ts:var w=y._init;return p(h,v,x,w(y._payload),T)}if(wl(y)||ll(y))return h=h.get(x)||null,c(v,h,y,T,null);tc(v,y)}return null}function g(h,v,x,y){for(var T=null,w=null,M=v,b=v=0,S=null;M!==null&&b<x.length;b++){M.index>b?(S=M,M=null):S=M.sibling;var E=f(h,M,x[b],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(h,M),v=s(E,v,b),w===null?T=E:w.sibling=E,w=E,M=S}if(b===x.length)return t(h,M),Lt&&Ks(h,b),T;if(M===null){for(;b<x.length;b++)M=d(h,x[b],y),M!==null&&(v=s(M,v,b),w===null?T=M:w.sibling=M,w=M);return Lt&&Ks(h,b),T}for(M=i(h,M);b<x.length;b++)S=p(M,h,b,x[b],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?b:S.key),v=s(S,v,b),w===null?T=S:w.sibling=S,w=S);return n&&M.forEach(function(O){return e(h,O)}),Lt&&Ks(h,b),T}function _(h,v,x,y){var T=ll(x);if(typeof T!="function")throw Error(re(150));if(x=T.call(x),x==null)throw Error(re(151));for(var w=T=null,M=v,b=v=0,S=null,E=x.next();M!==null&&!E.done;b++,E=x.next()){M.index>b?(S=M,M=null):S=M.sibling;var O=f(h,M,E.value,y);if(O===null){M===null&&(M=S);break}n&&M&&O.alternate===null&&e(h,M),v=s(O,v,b),w===null?T=O:w.sibling=O,w=O,M=S}if(E.done)return t(h,M),Lt&&Ks(h,b),T;if(M===null){for(;!E.done;b++,E=x.next())E=d(h,E.value,y),E!==null&&(v=s(E,v,b),w===null?T=E:w.sibling=E,w=E);return Lt&&Ks(h,b),T}for(M=i(h,M);!E.done;b++,E=x.next())E=p(M,h,b,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?b:E.key),v=s(E,v,b),w===null?T=E:w.sibling=E,w=E);return n&&M.forEach(function(U){return e(h,U)}),Lt&&Ks(h,b),T}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===aa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wu:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===aa){if(w.tag===7){t(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ts&&Og(T)===w.type){t(h,w.sibling),v=r(w,x.props),v.ref=hl(h,w,x),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}x.type===aa?(v=fo(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=tf(x.type,x.key,x.props,null,h.mode,y),y.ref=hl(h,v,x),y.return=h,h=y)}return o(h);case oa:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=th(x,h.mode,y),v.return=h,h=v}return o(h);case ts:return w=x._init,m(h,v,w(x._payload),y)}if(wl(x))return g(h,v,x,y);if(ll(x))return _(h,v,x,y);tc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=eh(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var Ga=Py(!0),by=Py(!1),Af=ks(null),Cf=null,ma=null,qm=null;function $m(){qm=ma=Cf=null}function Km(n){var e=Af.current;Pt(Af),n._currentValue=e}function Tp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ca(n,e){Cf=n,qm=ma=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Wi(n){var e=n._currentValue;if(qm!==n)if(n={context:n,memoizedValue:e,next:null},ma===null){if(Cf===null)throw Error(re(308));ma=n,Cf.dependencies={lanes:0,firstContext:n}}else ma=ma.next=n;return e}var oo=null;function Qm(n){oo===null?oo=[n]:oo.push(n)}function Ly(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Qm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Hr(n,i)}function Hr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ns=!1;function Zm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ys(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hr(n,t)}return r=i.interleaved,r===null?(e.next=e,Qm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hr(n,t)}function $c(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Fm(n,t)}}function Fg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Rf(n,e,t,i){var r=n.updateQueue;ns=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Bt({},d,f);break e;case 2:ns=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Co|=o,n.lanes=o,n.memoizedState=d}}function kg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ou={},vr=ks(Ou),pu=ks(Ou),mu=ks(Ou);function ao(n){if(n===Ou)throw Error(re(174));return n}function Jm(n,e){switch(wt(mu,e),wt(pu,n),wt(vr,Ou),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=rp(e,n)}Pt(vr),wt(vr,e)}function Va(){Pt(vr),Pt(pu),Pt(mu)}function Ny(n){ao(mu.current);var e=ao(vr.current),t=rp(e,n.type);e!==t&&(wt(pu,n),wt(vr,t))}function e_(n){pu.current===n&&(Pt(vr),Pt(pu))}var It=ks(0);function Pf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qd=[];function t_(){for(var n=0;n<qd.length;n++)qd[n]._workInProgressVersionPrimary=null;qd.length=0}var Kc=jr.ReactCurrentDispatcher,$d=jr.ReactCurrentBatchConfig,Ao=0,zt=null,en=null,un=null,bf=!1,Bl=!1,_u=0,CT=0;function Sn(){throw Error(re(321))}function n_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ar(n[t],e[t]))return!1;return!0}function i_(n,e,t,i,r,s){if(Ao=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kc.current=n===null||n.memoizedState===null?LT:DT,n=t(i,r),Bl){s=0;do{if(Bl=!1,_u=0,25<=s)throw Error(re(301));s+=1,un=en=null,e.updateQueue=null,Kc.current=NT,n=t(i,r)}while(Bl)}if(Kc.current=Lf,e=en!==null&&en.next!==null,Ao=0,un=en=zt=null,bf=!1,e)throw Error(re(300));return n}function r_(){var n=_u!==0;return _u=0,n}function ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?zt.memoizedState=un=n:un=un.next=n,un}function Xi(){if(en===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var e=un===null?zt.memoizedState:un.next;if(e!==null)un=e,en=n;else{if(n===null)throw Error(re(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},un===null?zt.memoizedState=un=n:un=un.next=n}return un}function gu(n,e){return typeof e=="function"?e(n):e}function Kd(n){var e=Xi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=en,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ao&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,zt.lanes|=c,Co|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ar(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,zt.lanes|=s,Co|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Qd(n){var e=Xi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ar(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Uy(){}function Iy(n,e){var t=zt,i=Xi(),r=e(),s=!ar(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,s_(ky.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||un!==null&&un.memoizedState.tag&1){if(t.flags|=2048,vu(9,Fy.bind(null,t,i,r,e),void 0,null),cn===null)throw Error(re(349));Ao&30||Oy(t,e,r)}return r}function Oy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Fy(n,e,t,i){e.value=t,e.getSnapshot=i,zy(e)&&By(n)}function ky(n,e,t){return t(function(){zy(e)&&By(n)})}function zy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ar(n,t)}catch{return!0}}function By(n){var e=Hr(n,1);e!==null&&sr(e,n,1,-1)}function zg(n){var e=ur();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gu,lastRenderedState:n},e.queue=n,n=n.dispatch=bT.bind(null,zt,n),[e.memoizedState,n]}function vu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Hy(){return Xi().memoizedState}function Qc(n,e,t,i){var r=ur();zt.flags|=n,r.memoizedState=vu(1|e,t,void 0,i===void 0?null:i)}function ad(n,e,t,i){var r=Xi();i=i===void 0?null:i;var s=void 0;if(en!==null){var o=en.memoizedState;if(s=o.destroy,i!==null&&n_(i,o.deps)){r.memoizedState=vu(e,t,s,i);return}}zt.flags|=n,r.memoizedState=vu(1|e,t,s,i)}function Bg(n,e){return Qc(8390656,8,n,e)}function s_(n,e){return ad(2048,8,n,e)}function Gy(n,e){return ad(4,2,n,e)}function Vy(n,e){return ad(4,4,n,e)}function Wy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Xy(n,e,t){return t=t!=null?t.concat([n]):null,ad(4,4,Wy.bind(null,e,n),t)}function o_(){}function jy(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&n_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Yy(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&n_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function qy(n,e,t){return Ao&21?(ar(t,e)||(t=Jx(),zt.lanes|=t,Co|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function RT(n,e){var t=gt;gt=t!==0&&4>t?t:4,n(!0);var i=$d.transition;$d.transition={};try{n(!1),e()}finally{gt=t,$d.transition=i}}function $y(){return Xi().memoizedState}function PT(n,e,t){var i=Ms(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Ky(n))Qy(e,t);else if(t=Ly(n,e,t,i),t!==null){var r=Vn();sr(t,n,i,r),Zy(t,e,i)}}function bT(n,e,t){var i=Ms(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ky(n))Qy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ar(a,o)){var l=e.interleaved;l===null?(r.next=r,Qm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ly(n,e,r,i),t!==null&&(r=Vn(),sr(t,n,i,r),Zy(t,e,i))}}function Ky(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function Qy(n,e){Bl=bf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Zy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Fm(n,t)}}var Lf={readContext:Wi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},LT={readContext:Wi,useCallback:function(n,e){return ur().memoizedState=[n,e===void 0?null:e],n},useContext:Wi,useEffect:Bg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Qc(4194308,4,Wy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Qc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Qc(4,2,n,e)},useMemo:function(n,e){var t=ur();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ur();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=PT.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=ur();return n={current:n},e.memoizedState=n},useState:zg,useDebugValue:o_,useDeferredValue:function(n){return ur().memoizedState=n},useTransition:function(){var n=zg(!1),e=n[0];return n=RT.bind(null,n[1]),ur().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=ur();if(Lt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),cn===null)throw Error(re(349));Ao&30||Oy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Bg(ky.bind(null,i,s,n),[n]),i.flags|=2048,vu(9,Fy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ur(),e=cn.identifierPrefix;if(Lt){var t=Ur,i=Nr;t=(i&~(1<<32-rr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=_u++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=CT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},DT={readContext:Wi,useCallback:jy,useContext:Wi,useEffect:s_,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Vy,useMemo:Yy,useReducer:Kd,useRef:Hy,useState:function(){return Kd(gu)},useDebugValue:o_,useDeferredValue:function(n){var e=Xi();return qy(e,en.memoizedState,n)},useTransition:function(){var n=Kd(gu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Uy,useSyncExternalStore:Iy,useId:$y,unstable_isNewReconciler:!1},NT={readContext:Wi,useCallback:jy,useContext:Wi,useEffect:s_,useImperativeHandle:Xy,useInsertionEffect:Gy,useLayoutEffect:Vy,useMemo:Yy,useReducer:Qd,useRef:Hy,useState:function(){return Qd(gu)},useDebugValue:o_,useDeferredValue:function(n){var e=Xi();return en===null?e.memoizedState=n:qy(e,en.memoizedState,n)},useTransition:function(){var n=Qd(gu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Uy,useSyncExternalStore:Iy,useId:$y,unstable_isNewReconciler:!1};function Qi(n,e){if(n&&n.defaultProps){e=Bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function wp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ld={isMounted:function(n){return(n=n._reactInternals)?Io(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Ms(n),s=Fr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ys(n,s,r),e!==null&&(sr(e,n,r,i),$c(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Ms(n),s=Fr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ys(n,s,r),e!==null&&(sr(e,n,r,i),$c(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=Ms(n),r=Fr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ys(n,r,i),e!==null&&(sr(e,n,i,t),$c(e,n,i))}};function Hg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!cu(t,i)||!cu(r,s):!0}function Jy(n,e,t){var i=!1,r=Ls,s=e.contextType;return typeof s=="object"&&s!==null?s=Wi(s):(r=Jn(e)?To:Dn.current,i=e.contextTypes,s=(i=i!=null)?Ba(n,r):Ls),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ld,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Gg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ld.enqueueReplaceState(e,e.state,null)}function Ap(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Zm(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wi(s):(s=Jn(e)?To:Dn.current,r.context=Ba(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ld.enqueueReplaceState(r,r.state,null),Rf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Wa(n,e){try{var t="",i=e;do t+=a1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Zd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Cp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function eS(n,e,t){t=Fr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Nf||(Nf=!0,Fp=i),Cp(n,e)},t}function tS(n,e,t){t=Fr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Cp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Cp(n,e),typeof i!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Vg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new UT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=qT.bind(null,n,e,t),e.then(n,n))}function Wg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Xg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Fr(-1,1),e.tag=2,ys(t,e,1))),t.lanes|=1),n)}var IT=jr.ReactCurrentOwner,Qn=!1;function kn(n,e,t,i){e.child=n===null?by(e,null,t,i):Ga(e,n.child,t,i)}function jg(n,e,t,i,r){t=t.render;var s=e.ref;return Ca(e,r),i=i_(n,e,t,i,s,r),t=r_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gr(n,e,r)):(Lt&&t&&Xm(e),e.flags|=1,kn(n,e,i,r),e.child)}function Yg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!p_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,nS(n,e,s,i,r)):(n=tf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:cu,t(o,i)&&n.ref===e.ref)return Gr(n,e,r)}return e.flags|=1,n=Es(s,i),n.ref=e.ref,n.return=e,e.child=n}function nS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(cu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,Gr(n,e,r)}return Rp(n,e,t,i,r)}function iS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(ga,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(ga,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(ga,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(ga,pi),pi|=i;return kn(n,e,r,t),e.child}function rS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Rp(n,e,t,i,r){var s=Jn(t)?To:Dn.current;return s=Ba(e,s),Ca(e,r),t=i_(n,e,t,i,s,r),i=r_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gr(n,e,r)):(Lt&&i&&Xm(e),e.flags|=1,kn(n,e,t,r),e.child)}function qg(n,e,t,i,r){if(Jn(t)){var s=!0;Ef(e)}else s=!1;if(Ca(e,r),e.stateNode===null)Zc(n,e),Jy(e,t,i),Ap(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Wi(u):(u=Jn(t)?To:Dn.current,u=Ba(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Gg(e,o,i,u),ns=!1;var f=e.memoizedState;o.state=f,Rf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zn.current||ns?(typeof c=="function"&&(wp(e,t,c,i),l=e.memoizedState),(a=ns||Hg(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Wi(l):(l=Jn(t)?To:Dn.current,l=Ba(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Gg(e,o,i,l),ns=!1,f=e.memoizedState,o.state=f,Rf(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Zn.current||ns?(typeof p=="function"&&(wp(e,t,p,i),g=e.memoizedState),(u=ns||Hg(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Pp(n,e,t,i,s,r)}function Pp(n,e,t,i,r,s){rS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ng(e,t,!1),Gr(n,e,s);i=e.stateNode,IT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ga(e,n.child,null,s),e.child=Ga(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&Ng(e,t,!0),e.child}function sS(n){var e=n.stateNode;e.pendingContext?Dg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Dg(n,e.context,!1),Jm(n,e.containerInfo)}function $g(n,e,t,i,r){return Ha(),Ym(r),e.flags|=256,kn(n,e,t,i),e.child}var bp={dehydrated:null,treeContext:null,retryLane:0};function Lp(n){return{baseLanes:n,cachePool:null,transitions:null}}function oS(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Ep(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fd(o,i,0,null),n=fo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lp(t),e.memoizedState=bp,n):a_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return OT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Es(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Es(a,s):(s=fo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Lp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=bp,i}return s=n.child,n=s.sibling,i=Es(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function a_(n,e){return e=fd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function nc(n,e,t,i){return i!==null&&Ym(i),Ga(e,n.child,null,t),n=a_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function OT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Zd(Error(re(422))),nc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fd({mode:"visible",children:i.children},r,0,null),s=fo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ga(e,n.child,null,o),e.child.memoizedState=Lp(o),e.memoizedState=bp,s);if(!(e.mode&1))return nc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Zd(s,i,void 0),nc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=cn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hr(n,r),sr(i,n,r,-1))}return h_(),i=Zd(Error(re(421))),nc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=$T.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yi=xs(r.nextSibling),Ei=e,Lt=!0,Ji=null,n!==null&&(Ni[Ui++]=Nr,Ni[Ui++]=Ur,Ni[Ui++]=wo,Nr=n.id,Ur=n.overflow,wo=e),e=a_(e,i.children),e.flags|=4096,e)}function Kg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Tp(n.return,e,t)}function Jd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function aS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kg(n,t,e);else if(n.tag===19)Kg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Pf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Jd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Pf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Jd(e,!0,t,null,s);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Gr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Co|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Es(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Es(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function FT(n,e,t){switch(e.tag){case 3:sS(e),Ha();break;case 5:Ny(e);break;case 1:Jn(e.type)&&Ef(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(Af,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?oS(n,e,t):(wt(It,It.current&1),n=Gr(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return aS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,iS(n,e,t)}return Gr(n,e,t)}var lS,Dp,uS,cS;lS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Dp=function(){};uS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ao(vr.current);var s=null;switch(t){case"input":r=ep(n,r),i=ep(n,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=ip(n,r),i=ip(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Sf)}sp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(iu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(iu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};cS=function(n,e,t,i){t!==i&&(e.flags|=4)};function pl(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function kT(n,e,t){var i=e.pendingProps;switch(jm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return Jn(e.type)&&Mf(),Mn(e),null;case 3:return i=e.stateNode,Va(),Pt(Zn),Pt(Dn),t_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ec(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(Bp(Ji),Ji=null))),Dp(n,e),Mn(e),null;case 5:e_(e);var r=ao(mu.current);if(t=e.type,n!==null&&e.stateNode!=null)uS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Mn(e),null}if(n=ao(vr.current),ec(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hr]=e,i[hu]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Cl.length;r++)Ct(Cl[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":sg(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":ag(i,s),Ct("invalid",i)}sp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ju(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ju(i.textContent,a,n),r=["children",""+a]):iu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":Xu(i),og(i,s,!0);break;case"textarea":Xu(i),lg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=kx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[hr]=e,n[hu]=i,lS(n,e,!1,!1),e.stateNode=n;e:{switch(o=op(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Cl.length;r++)Ct(Cl[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":sg(n,i),r=ep(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":ag(n,i),r=ip(n,i),Ct("invalid",n);break;default:r=i}sp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ru(n,l):typeof l=="number"&&ru(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(iu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Lm(n,s,l,o))}switch(t){case"input":Xu(n),og(n,i,!1);break;case"textarea":Xu(n),lg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+bs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ea(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ea(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Sf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)cS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=ao(mu.current),ao(vr.current),ec(e)){if(i=e.stateNode,t=e.memoizedProps,i[hr]=e,(s=i.nodeValue!==t)&&(n=Ei,n!==null))switch(n.tag){case 3:Ju(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ju(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hr]=e,e.stateNode=i}return Mn(e),null;case 13:if(Pt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&yi!==null&&e.mode&1&&!(e.flags&128))Ry(),Ha(),e.flags|=98560,s=!1;else if(s=ec(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[hr]=e}else Ha(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else Ji!==null&&(Bp(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?nn===0&&(nn=3):h_())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return Va(),Dp(n,e),n===null&&fu(e.stateNode.containerInfo),Mn(e),null;case 10:return Km(e.type._context),Mn(e),null;case 17:return Jn(e.type)&&Mf(),Mn(e),null;case 19:if(Pt(It),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)pl(s,!1);else{if(nn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Pf(n),o!==null){for(e.flags|=128,pl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>Xa&&(e.flags|=128,i=!0,pl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Pf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),pl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Mn(e),null}else 2*Xt()-s.renderingStartTime>Xa&&t!==1073741824&&(e.flags|=128,i=!0,pl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return d_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function zT(n,e){switch(jm(e),e.tag){case 1:return Jn(e.type)&&Mf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Va(),Pt(Zn),Pt(Dn),t_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return e_(e),null;case 13:if(Pt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ha()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Pt(It),null;case 4:return Va(),null;case 10:return Km(e.type._context),null;case 22:case 23:return d_(),null;case 24:return null;default:return null}}var ic=!1,Cn=!1,BT=typeof WeakSet=="function"?WeakSet:Set,Se=null;function _a(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function Np(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var Qg=!1;function HT(n,e){if(_p=vf,n=my(),Wm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gp={focusedElem:n,selectionRange:t},vf=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Qi(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Gt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return g=Qg,Qg=!1,g}function Hl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Np(e,t,s)}r=r.next}while(r!==i)}}function ud(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Up(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function fS(n){var e=n.alternate;e!==null&&(n.alternate=null,fS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hr],delete e[hu],delete e[yp],delete e[ET],delete e[TT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dS(n){return n.tag===5||n.tag===3||n.tag===4}function Zg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ip(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Sf));else if(i!==4&&(n=n.child,n!==null))for(Ip(n,e,t),n=n.sibling;n!==null;)Ip(n,e,t),n=n.sibling}function Op(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Op(n,e,t),n=n.sibling;n!==null;)Op(n,e,t),n=n.sibling}var hn=null,Zi=!1;function qr(n,e,t){for(t=t.child;t!==null;)hS(n,e,t),t=t.sibling}function hS(n,e,t){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(td,t)}catch{}switch(t.tag){case 5:Cn||_a(t,e);case 6:var i=hn,r=Zi;hn=null,qr(n,e,t),hn=i,Zi=r,hn!==null&&(Zi?(n=hn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):hn.removeChild(t.stateNode));break;case 18:hn!==null&&(Zi?(n=hn,t=t.stateNode,n.nodeType===8?jd(n.parentNode,t):n.nodeType===1&&jd(n,t),lu(n)):jd(hn,t.stateNode));break;case 4:i=hn,r=Zi,hn=t.stateNode.containerInfo,Zi=!0,qr(n,e,t),hn=i,Zi=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Np(t,e,o),r=r.next}while(r!==i)}qr(n,e,t);break;case 1:if(!Cn&&(_a(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}qr(n,e,t);break;case 21:qr(n,e,t);break;case 22:t.mode&1?(Cn=(i=Cn)||t.memoizedState!==null,qr(n,e,t),Cn=i):qr(n,e,t);break;default:qr(n,e,t)}}function Jg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new BT),e.forEach(function(i){var r=KT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:hn=a.stateNode,Zi=!1;break e;case 3:hn=a.stateNode.containerInfo,Zi=!0;break e;case 4:hn=a.stateNode.containerInfo,Zi=!0;break e}a=a.return}if(hn===null)throw Error(re(160));hS(s,o,r),hn=null,Zi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pS(e,n),e=e.sibling}function pS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ji(e,n),lr(n),i&4){try{Hl(3,n,n.return),ud(3,n)}catch(_){Gt(n,n.return,_)}try{Hl(5,n,n.return)}catch(_){Gt(n,n.return,_)}}break;case 1:ji(e,n),lr(n),i&512&&t!==null&&_a(t,t.return);break;case 5:if(ji(e,n),lr(n),i&512&&t!==null&&_a(t,t.return),n.flags&32){var r=n.stateNode;try{ru(r,"")}catch(_){Gt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ox(r,s),op(a,o);var u=op(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Hx(r,d):c==="dangerouslySetInnerHTML"?zx(r,d):c==="children"?ru(r,d):Lm(r,c,d,u)}switch(a){case"input":tp(r,s);break;case"textarea":Fx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ea(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ea(r,!!s.multiple,s.defaultValue,!0):Ea(r,!!s.multiple,s.multiple?[]:"",!1))}r[hu]=s}catch(_){Gt(n,n.return,_)}}break;case 6:if(ji(e,n),lr(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Gt(n,n.return,_)}}break;case 3:if(ji(e,n),lr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{lu(e.containerInfo)}catch(_){Gt(n,n.return,_)}break;case 4:ji(e,n),lr(n);break;case 13:ji(e,n),lr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(c_=Xt())),i&4&&Jg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Cn=(u=Cn)||c,ji(e,n),Cn=u):ji(e,n),lr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Se=n,c=n.child;c!==null;){for(d=Se=c;Se!==null;){switch(f=Se,p=f.child,f.tag){case 0:case 11:case 14:case 15:Hl(4,f,f.return);break;case 1:_a(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Gt(i,t,_)}}break;case 5:_a(f,f.return);break;case 22:if(f.memoizedState!==null){t0(d);continue}}p!==null?(p.return=f,Se=p):t0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bx("display",o))}catch(_){Gt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Gt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ji(e,n),lr(n),i&4&&Jg(n);break;case 21:break;default:ji(e,n),lr(n)}}function lr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(dS(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ru(r,""),i.flags&=-33);var s=Zg(n);Op(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zg(n);Ip(n,a,o);break;default:throw Error(re(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function GT(n,e,t){Se=n,mS(n)}function mS(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ic;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=ic;var u=Cn;if(ic=o,(Cn=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?n0(r):l!==null?(l.return=o,Se=l):n0(r);for(;s!==null;)Se=s,mS(s),s=s.sibling;Se=r,ic=a,Cn=u}e0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):e0(n)}}function e0(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||ud(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}kg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&lu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Cn||e.flags&512&&Up(e)}catch(f){Gt(e,e.return,f)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function t0(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function n0(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ud(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Up(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Up(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var VT=Math.ceil,Df=jr.ReactCurrentDispatcher,l_=jr.ReactCurrentOwner,Gi=jr.ReactCurrentBatchConfig,ut=0,cn=null,Kt=null,gn=0,pi=0,ga=ks(0),nn=0,xu=null,Co=0,cd=0,u_=0,Gl=null,qn=null,c_=0,Xa=1/0,Cr=null,Nf=!1,Fp=null,Ss=null,rc=!1,as=null,Uf=0,Vl=0,kp=null,Jc=-1,ef=0;function Vn(){return ut&6?Xt():Jc!==-1?Jc:Jc=Xt()}function Ms(n){return n.mode&1?ut&2&&gn!==0?gn&-gn:AT.transition!==null?(ef===0&&(ef=Jx()),ef):(n=gt,n!==0||(n=window.event,n=n===void 0?16:oy(n.type)),n):1}function sr(n,e,t,i){if(50<Vl)throw Vl=0,kp=null,Error(re(185));Nu(n,t,i),(!(ut&2)||n!==cn)&&(n===cn&&(!(ut&2)&&(cd|=t),nn===4&&ss(n,gn)),ei(n,i),t===1&&ut===0&&!(e.mode&1)&&(Xa=Xt()+500,od&&zs()))}function ei(n,e){var t=n.callbackNode;A1(n,e);var i=gf(n,n===cn?gn:0);if(i===0)t!==null&&fg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&fg(t),e===1)n.tag===0?wT(i0.bind(null,n)):wy(i0.bind(null,n)),ST(function(){!(ut&6)&&zs()}),t=null;else{switch(ey(i)){case 1:t=Om;break;case 4:t=Qx;break;case 16:t=_f;break;case 536870912:t=Zx;break;default:t=_f}t=ES(t,_S.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function _S(n,e){if(Jc=-1,ef=0,ut&6)throw Error(re(327));var t=n.callbackNode;if(Ra()&&n.callbackNode!==t)return null;var i=gf(n,n===cn?gn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=If(n,i);else{e=i;var r=ut;ut|=2;var s=vS();(cn!==n||gn!==e)&&(Cr=null,Xa=Xt()+500,co(n,e));do try{jT();break}catch(a){gS(n,a)}while(!0);$m(),Df.current=s,ut=r,Kt!==null?e=0:(cn=null,gn=0,e=nn)}if(e!==0){if(e===2&&(r=fp(n),r!==0&&(i=r,e=zp(n,r))),e===1)throw t=xu,co(n,0),ss(n,i),ei(n,Xt()),t;if(e===6)ss(n,i);else{if(r=n.current.alternate,!(i&30)&&!WT(r)&&(e=If(n,i),e===2&&(s=fp(n),s!==0&&(i=s,e=zp(n,s))),e===1))throw t=xu,co(n,0),ss(n,i),ei(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Qs(n,qn,Cr);break;case 3:if(ss(n,i),(i&130023424)===i&&(e=c_+500-Xt(),10<e)){if(gf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=xp(Qs.bind(null,n,qn,Cr),e);break}Qs(n,qn,Cr);break;case 4:if(ss(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-rr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*VT(i/1960))-i,10<i){n.timeoutHandle=xp(Qs.bind(null,n,qn,Cr),i);break}Qs(n,qn,Cr);break;case 5:Qs(n,qn,Cr);break;default:throw Error(re(329))}}}return ei(n,Xt()),n.callbackNode===t?_S.bind(null,n):null}function zp(n,e){var t=Gl;return n.current.memoizedState.isDehydrated&&(co(n,e).flags|=256),n=If(n,e),n!==2&&(e=qn,qn=t,e!==null&&Bp(e)),n}function Bp(n){qn===null?qn=n:qn.push.apply(qn,n)}function WT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ar(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ss(n,e){for(e&=~u_,e&=~cd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-rr(e),i=1<<t;n[t]=-1,e&=~i}}function i0(n){if(ut&6)throw Error(re(327));Ra();var e=gf(n,0);if(!(e&1))return ei(n,Xt()),null;var t=If(n,e);if(n.tag!==0&&t===2){var i=fp(n);i!==0&&(e=i,t=zp(n,i))}if(t===1)throw t=xu,co(n,0),ss(n,e),ei(n,Xt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qs(n,qn,Cr),ei(n,Xt()),null}function f_(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(Xa=Xt()+500,od&&zs())}}function Ro(n){as!==null&&as.tag===0&&!(ut&6)&&Ra();var e=ut;ut|=1;var t=Gi.transition,i=gt;try{if(Gi.transition=null,gt=1,n)return n()}finally{gt=i,Gi.transition=t,ut=e,!(ut&6)&&zs()}}function d_(){pi=ga.current,Pt(ga)}function co(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,yT(t)),Kt!==null)for(t=Kt.return;t!==null;){var i=t;switch(jm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mf();break;case 3:Va(),Pt(Zn),Pt(Dn),t_();break;case 5:e_(i);break;case 4:Va();break;case 13:Pt(It);break;case 19:Pt(It);break;case 10:Km(i.type._context);break;case 22:case 23:d_()}t=t.return}if(cn=n,Kt=n=Es(n.current,null),gn=pi=e,nn=0,xu=null,u_=cd=Co=0,qn=Gl=null,oo!==null){for(e=0;e<oo.length;e++)if(t=oo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}oo=null}return n}function gS(n,e){do{var t=Kt;try{if($m(),Kc.current=Lf,bf){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bf=!1}if(Ao=0,un=en=zt=null,Bl=!1,_u=0,l_.current=null,t===null||t.return===null){nn=1,xu=e,Kt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=gn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Wg(o);if(p!==null){p.flags&=-257,Xg(p,o,a,s,e),p.mode&1&&Vg(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Vg(s,u,e),h_();break e}l=Error(re(426))}}else if(Lt&&a.mode&1){var m=Wg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Xg(m,o,a,s,e),Ym(Wa(l,a));break e}}s=l=Wa(l,a),nn!==4&&(nn=2),Gl===null?Gl=[s]:Gl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=eS(s,l,e);Fg(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ss===null||!Ss.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=tS(s,a,e);Fg(s,y);break e}}s=s.return}while(s!==null)}yS(t)}catch(T){e=T,Kt===t&&t!==null&&(Kt=t=t.return);continue}break}while(!0)}function vS(){var n=Df.current;return Df.current=Lf,n===null?Lf:n}function h_(){(nn===0||nn===3||nn===2)&&(nn=4),cn===null||!(Co&268435455)&&!(cd&268435455)||ss(cn,gn)}function If(n,e){var t=ut;ut|=2;var i=vS();(cn!==n||gn!==e)&&(Cr=null,co(n,e));do try{XT();break}catch(r){gS(n,r)}while(!0);if($m(),ut=t,Df.current=i,Kt!==null)throw Error(re(261));return cn=null,gn=0,nn}function XT(){for(;Kt!==null;)xS(Kt)}function jT(){for(;Kt!==null&&!g1();)xS(Kt)}function xS(n){var e=MS(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?yS(n):Kt=e,l_.current=null}function yS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zT(t,e),t!==null){t.flags&=32767,Kt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Kt=null;return}}else if(t=kT(t,e,pi),t!==null){Kt=t;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=n}while(e!==null);nn===0&&(nn=5)}function Qs(n,e,t){var i=gt,r=Gi.transition;try{Gi.transition=null,gt=1,YT(n,e,t,i)}finally{Gi.transition=r,gt=i}return null}function YT(n,e,t,i){do Ra();while(as!==null);if(ut&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(C1(n,s),n===cn&&(Kt=cn=null,gn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||rc||(rc=!0,ES(_f,function(){return Ra(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Gi.transition,Gi.transition=null;var o=gt;gt=1;var a=ut;ut|=4,l_.current=null,HT(n,t),pS(t,n),hT(gp),vf=!!_p,gp=_p=null,n.current=t,GT(t),v1(),ut=a,gt=o,Gi.transition=s}else n.current=t;if(rc&&(rc=!1,as=n,Uf=r),s=n.pendingLanes,s===0&&(Ss=null),S1(t.stateNode),ei(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nf)throw Nf=!1,n=Fp,Fp=null,n;return Uf&1&&n.tag!==0&&Ra(),s=n.pendingLanes,s&1?n===kp?Vl++:(Vl=0,kp=n):Vl=0,zs(),null}function Ra(){if(as!==null){var n=ey(Uf),e=Gi.transition,t=gt;try{if(Gi.transition=null,gt=16>n?16:n,as===null)var i=!1;else{if(n=as,as=null,Uf=0,ut&6)throw Error(re(331));var r=ut;for(ut|=4,Se=n.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:Hl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Se=d;else for(;Se!==null;){c=Se;var f=c.sibling,p=c.return;if(fS(c),c===u){Se=null;break}if(f!==null){f.return=p,Se=f;break}Se=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var v=n.current;for(Se=v;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ud(9,a)}}catch(T){Gt(a,a.return,T)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(ut=r,zs(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(td,n)}catch{}i=!0}return i}finally{gt=t,Gi.transition=e}}return!1}function r0(n,e,t){e=Wa(t,e),e=eS(n,e,1),n=ys(n,e,1),e=Vn(),n!==null&&(Nu(n,1,e),ei(n,e))}function Gt(n,e,t){if(n.tag===3)r0(n,n,t);else for(;e!==null;){if(e.tag===3){r0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ss===null||!Ss.has(i))){n=Wa(t,n),n=tS(e,n,1),e=ys(e,n,1),n=Vn(),e!==null&&(Nu(e,1,n),ei(e,n));break}}e=e.return}}function qT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,cn===n&&(gn&t)===t&&(nn===4||nn===3&&(gn&130023424)===gn&&500>Xt()-c_?co(n,0):u_|=t),ei(n,e)}function SS(n,e){e===0&&(n.mode&1?(e=qu,qu<<=1,!(qu&130023424)&&(qu=4194304)):e=1);var t=Vn();n=Hr(n,e),n!==null&&(Nu(n,e,t),ei(n,t))}function $T(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),SS(n,t)}function KT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),SS(n,t)}var MS;MS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Zn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,FT(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Lt&&e.flags&1048576&&Ay(e,wf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zc(n,e),n=e.pendingProps;var r=Ba(e,Dn.current);Ca(e,t),r=i_(null,e,i,n,r,t);var s=r_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jn(i)?(s=!0,Ef(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zm(e),r.updater=ld,e.stateNode=r,r._reactInternals=e,Ap(e,i,n,t),e=Pp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&Xm(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Zc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ZT(i),n=Qi(i,n),r){case 0:e=Rp(null,e,i,n,t);break e;case 1:e=qg(null,e,i,n,t);break e;case 11:e=jg(null,e,i,n,t);break e;case 14:e=Yg(null,e,i,Qi(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Rp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),qg(n,e,i,r,t);case 3:e:{if(sS(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dy(n,e),Rf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Wa(Error(re(423)),e),e=$g(n,e,i,t,r);break e}else if(i!==r){r=Wa(Error(re(424)),e),e=$g(n,e,i,t,r);break e}else for(yi=xs(e.stateNode.containerInfo.firstChild),Ei=e,Lt=!0,Ji=null,t=by(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ha(),i===r){e=Gr(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return Ny(e),n===null&&Ep(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vp(i,r)?o=null:s!==null&&vp(i,s)&&(e.flags|=32),rS(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&Ep(e),null;case 13:return oS(n,e,t);case 4:return Jm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ga(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),jg(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(Af,i._currentValue),i._currentValue=o,s!==null)if(ar(s.value,o)){if(s.children===r.children&&!Zn.current){e=Gr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Tp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Tp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ca(e,t),r=Wi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Qi(i,e.pendingProps),r=Qi(i.type,r),Yg(n,e,i,r,t);case 15:return nS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Zc(n,e),e.tag=1,Jn(i)?(n=!0,Ef(e)):n=!1,Ca(e,t),Jy(e,i,r),Ap(e,i,r,t),Pp(null,e,i,!0,n,t);case 19:return aS(n,e,t);case 22:return iS(n,e,t)}throw Error(re(156,e.tag))};function ES(n,e){return Kx(n,e)}function QT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(n,e,t,i){return new QT(n,e,t,i)}function p_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ZT(n){if(typeof n=="function")return p_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Nm)return 11;if(n===Um)return 14}return 2}function Es(n,e){var t=n.alternate;return t===null?(t=zi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function tf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")p_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case aa:return fo(t.children,r,s,e);case Dm:o=8,r|=8;break;case Kh:return n=zi(12,t,e,r|2),n.elementType=Kh,n.lanes=s,n;case Qh:return n=zi(13,t,e,r),n.elementType=Qh,n.lanes=s,n;case Zh:return n=zi(19,t,e,r),n.elementType=Zh,n.lanes=s,n;case Nx:return fd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Lx:o=10;break e;case Dx:o=9;break e;case Nm:o=11;break e;case Um:o=14;break e;case ts:o=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=zi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function fo(n,e,t,i){return n=zi(7,n,i,e),n.lanes=t,n}function fd(n,e,t,i){return n=zi(22,n,i,e),n.elementType=Nx,n.lanes=t,n.stateNode={isHidden:!1},n}function eh(n,e,t){return n=zi(6,n,null,e),n.lanes=t,n}function th(n,e,t){return e=zi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function JT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function m_(n,e,t,i,r,s,o,a,l){return n=new JT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),n}function ew(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function TS(n){if(!n)return Ls;n=n._reactInternals;e:{if(Io(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(Jn(t))return Ty(n,t,e)}return e}function wS(n,e,t,i,r,s,o,a,l){return n=m_(t,i,!0,n,r,s,o,a,l),n.context=TS(null),t=n.current,i=Vn(),r=Ms(t),s=Fr(i,r),s.callback=e??null,ys(t,s,r),n.current.lanes=r,Nu(n,r,i),ei(n,i),n}function dd(n,e,t,i){var r=e.current,s=Vn(),o=Ms(r);return t=TS(t),e.context===null?e.context=t:e.pendingContext=t,e=Fr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ys(r,e,o),n!==null&&(sr(n,r,o,s),$c(n,r,o)),o}function Of(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function s0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function __(n,e){s0(n,e),(n=n.alternate)&&s0(n,e)}function tw(){return null}var AS=typeof reportError=="function"?reportError:function(n){console.error(n)};function g_(n){this._internalRoot=n}hd.prototype.render=g_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));dd(n,e,null,null)};hd.prototype.unmount=g_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ro(function(){dd(null,n,null,null)}),e[Br]=null}};function hd(n){this._internalRoot=n}hd.prototype.unstable_scheduleHydration=function(n){if(n){var e=iy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rs.length&&e!==0&&e<rs[t].priority;t++);rs.splice(t,0,n),t===0&&sy(n)}};function v_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function o0(){}function nw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Of(o);s.call(u)}}var o=wS(e,i,n,0,null,!1,!1,"",o0);return n._reactRootContainer=o,n[Br]=o.current,fu(n.nodeType===8?n.parentNode:n),Ro(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Of(l);a.call(u)}}var l=m_(n,0,!1,null,null,!1,!1,"",o0);return n._reactRootContainer=l,n[Br]=l.current,fu(n.nodeType===8?n.parentNode:n),Ro(function(){dd(e,l,t,i)}),l}function md(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Of(o);a.call(l)}}dd(e,o,n,r)}else o=nw(t,e,n,r,i);return Of(o)}ty=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Al(e.pendingLanes);t!==0&&(Fm(e,t|1),ei(e,Xt()),!(ut&6)&&(Xa=Xt()+500,zs()))}break;case 13:Ro(function(){var i=Hr(n,1);if(i!==null){var r=Vn();sr(i,n,1,r)}}),__(n,1)}};km=function(n){if(n.tag===13){var e=Hr(n,134217728);if(e!==null){var t=Vn();sr(e,n,134217728,t)}__(n,134217728)}};ny=function(n){if(n.tag===13){var e=Ms(n),t=Hr(n,e);if(t!==null){var i=Vn();sr(t,n,e,i)}__(n,e)}};iy=function(){return gt};ry=function(n,e){var t=gt;try{return gt=n,e()}finally{gt=t}};lp=function(n,e,t){switch(e){case"input":if(tp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=sd(i);if(!r)throw Error(re(90));Ix(i),tp(i,r)}}}break;case"textarea":Fx(n,t);break;case"select":e=t.value,e!=null&&Ea(n,!!t.multiple,e,!1)}};Wx=f_;Xx=Ro;var iw={usingClientEntryPoint:!1,Events:[Iu,fa,sd,Gx,Vx,f_]},ml={findFiberByHostInstance:so,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:ml.bundleType,version:ml.version,rendererPackageName:ml.rendererPackageName,rendererConfig:ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qx(n),n===null?null:n.stateNode},findFiberByHostInstance:ml.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{td=sc.inject(rw),gr=sc}catch{}}Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;Ri.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v_(e))throw Error(re(200));return ew(n,e,null,t)};Ri.createRoot=function(n,e){if(!v_(n))throw Error(re(299));var t=!1,i="",r=AS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=m_(n,1,!1,null,null,t,!1,i,r),n[Br]=e.current,fu(n.nodeType===8?n.parentNode:n),new g_(e)};Ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=qx(e),n=n===null?null:n.stateNode,n};Ri.flushSync=function(n){return Ro(n)};Ri.hydrate=function(n,e,t){if(!pd(e))throw Error(re(200));return md(null,n,e,!0,t)};Ri.hydrateRoot=function(n,e,t){if(!v_(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=AS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=wS(e,null,n,1,t??null,r,!1,s,o),n[Br]=e.current,fu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new hd(e)};Ri.render=function(n,e,t){if(!pd(e))throw Error(re(200));return md(null,n,e,!1,t)};Ri.unmountComponentAtNode=function(n){if(!pd(n))throw Error(re(40));return n._reactRootContainer?(Ro(function(){md(null,null,n,!1,function(){n._reactRootContainer=null,n[Br]=null})}),!0):!1};Ri.unstable_batchedUpdates=f_;Ri.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!pd(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return md(n,e,t,!1,i)};Ri.version="18.3.1-next-f1338f8080-20240426";function CS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(CS)}catch(n){console.error(n)}}CS(),Cx.exports=Ri;var sw=Cx.exports,RS,a0=sw;RS=a0.createRoot,a0.hydrateRoot;function Rr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function PS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yu={duration:.5,overwrite:!1,delay:0},x_,vn,Dt,Bi=1e8,Mt=1/Bi,Hp=Math.PI*2,ow=Hp/4,aw=0,bS=Math.sqrt,lw=Math.cos,uw=Math.sin,dn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Vr=function(e){return typeof e=="number"},y_=function(e){return typeof e>"u"},yr=function(e){return typeof e=="object"},ti=function(e){return e!==!1},S_=function(){return typeof window<"u"},oc=function(e){return Vt(e)||dn(e)},LS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,cw=/random\([^)]+\)/g,fw=/,\s*/g,l0=/(?:-?\.?\d|\.)+/gi,DS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,va=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,NS=/[+-]=-?[.\d]+/,dw=/[^,'"\[\]\s]+/gi,hw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,cr,Gp,M_,Ai={},Ff={},US,IS=function(e){return(Ff=ja(e,Ai))&&li},E_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Su=function(e,t){return!t&&console.warn(e)},OS=function(e,t){return e&&(Ai[e]=t)&&Ff&&(Ff[e]=t)||Ai},Mu=function(){return 0},pw={suppressEvents:!0,isStart:!0,kill:!1},nf={suppressEvents:!0,kill:!1},mw={suppressEvents:!0},T_={},Ts=[],Vp={},FS,_i={},ih={},u0=30,rf=[],w_="",A_=function(e){var t=e[0],i,r;if(yr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=rf.length;r--&&!rf[r].targetTest(t););i=rf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new sM(e[r],i)))||e.splice(r,1);return e},ho=function(e){return e._gsap||A_(Hi(e))[0]._gsap},kS=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():y_(i)&&e.getAttribute&&e.getAttribute(t)||i},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},Pa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},_w=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},kf=function(){var e=Ts.length,t=Ts.slice(0),i,r;for(Vp={},Ts.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},C_=function(e){return!!(e._initted||e._startAt||e.add)},zS=function(e,t,i,r){Ts.length&&!vn&&kf(),e.render(t,i,!!(vn&&t<0&&C_(e))),Ts.length&&!vn&&kf()},BS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dw).length<2?t:dn(e)?e.trim():e},HS=function(e){return e},Ci=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},gw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ja=function(e,t){for(var i in t)e[i]=t[i];return e},c0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=yr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},zf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Wl=function(e){var t=e.parent||Ot,i=e.keyframes?gw(Ln(e.keyframes)):Ci;if(ti(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},vw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},GS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},_d=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ds=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},po=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},xw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wp=function(e,t,i,r){return e._startAt&&(vn?e._startAt.revert(nf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},yw=function n(e){return!e||e._ts&&n(e.parent)},f0=function(e){return e._repeat?Ya(e._tTime,e=e.duration()+e._rDelay)*e:0},Ya=function(e,t){var i=Math.floor(e=Ut(e/t));return e&&i===e?i-1:i},Bf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gd=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},vd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ut(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gd(e),i._dirty||po(i,e)),e},VS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bf(e.rawTime(),t),(!t._dur||Fu(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),po(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},pr=function(e,t,i,r){return t.parent&&Ds(t),t._start=Ut((Vr(i)?i:i||e!==Ot?Di(e,i,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),GS(e,t,"_first","_last",e._sort?"_start":0),Xp(t)||(e._recent=t),r||VS(e,t),e._ts<0&&vd(e,e._tTime),e},WS=function(e,t){return(Ai.ScrollTrigger||E_("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},XS=function(e,t,i,r,s){if(P_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&FS!==vi.frame)return Ts.push(e),e._lazy=[s,r],1},Sw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Mw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Sw(e)&&!(!e._initted&&Xp(e))||(e._ts<0||e._dp._ts<0)&&!Xp(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Fu(0,e._tDur,t),c=Ya(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ya(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||vn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&XS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Wp(e,t,i,!0),e._onUpdate&&!i&&Si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ds(e,1),!i&&!vn&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ew=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},qa=function(e,t,i,r){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!r&&vd(e,e._tTime=e._tDur*a),e.parent&&gd(e),i||po(e.parent,e),e},d0=function(e){return e instanceof Kn?po(e):qa(e,e._dur)},Tw={_start:0,endTime:Mu,totalDuration:Mu},Di=function n(e,t,i){var r=e.labels,s=e._recent||Tw,o=e.duration()>=Bi?s.endTime(!1):e._dur,a,l,u;return dn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Ln(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Xl=function(e,t,i){var r=Vr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;o.immediateRender=ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},Bs=function(e,t){return e||e===0?t(e):t},Fu=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!dn(e)||!(t=hw.exec(e))?"":t[1]},ww=function(e,t,i){return Bs(i,function(r){return Fu(e,t,r)})},jp=[].slice,jS=function(e,t){return e&&yr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yr(e[0]))&&!e.nodeType&&e!==cr},Aw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return dn(r)&&!t||jS(r,1)?(s=i).push.apply(s,Hi(r)):i.push(r)})||i},Hi=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):dn(e)&&!i&&(Gp||!$a())?jp.call((t||M_).querySelectorAll(e),0):Ln(e)?Aw(e,i):jS(e)?jp.call(e,0):e?[e]:[]},Yp=function(e){return e=Hi(e)[0]||Su("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Hi(t,i.querySelectorAll?i:i===e?Su("Invalid scope")||M_.createElement("div"):e)}},YS=function(e){return e.sort(function(){return .5-Math.random()})},qS=function(e){if(Vt(e))return e;var t=yr(e)?e:{each:e},i=mo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return dn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],h,v,x,y,T,w,M,b,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Bi])[1],!S){for(M=-Bi;M<(M=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],h=l?Math.min(S,_)*c-.5:r%S,v=S===Bi?0:l?_*d/S-.5:r/S|0,M=0,b=Bi,w=0;w<_;w++)x=w%S-h,y=v-(w/S|0),m[w]=T=u?Math.abs(u==="y"?y:x):bS(x*x+y*y),T>M&&(M=T),T<b&&(b=T);r==="random"&&YS(m),m.max=M-b,m.min=b,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Rn(t.amount||t.each)||0,i=i&&_<0?zw(i):i}return _=(m[f]-m.min)/m.max||0,Ut(m.b+(i?i(_):_)*m.v)+m.u}},qp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ut(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Vr(i)?0:Rn(i))}},$S=function(e,t){var i=Ln(e),r,s;return!i&&yr(e)&&(r=i=e.radius||Bi,e.values?(e=Hi(e.values),(s=!Vr(e[0]))&&(r*=r)):e=qp(e.increment)),Bs(t,i?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Bi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Vr(o)?c:c+Rn(o)}:qp(e))},KS=function(e,t,i,r){return Bs(Ln(e)?!t:i===!0?!!(i=0):!r,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Cw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Rw=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},Pw=function(e,t,i){return ZS(e,t,0,1,i)},QS=function(e,t,i){return Bs(i,function(r){return e[~~t(r)]})},bw=function n(e,t,i){var r=t-e;return Ln(e)?QS(e,n(0,e.length),t):Bs(i,function(s){return(r+(s-e)%r)%r+e})},Lw=function n(e,t,i){var r=t-e,s=r*2;return Ln(e)?QS(e,n(0,e.length-1),t):Bs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Eu=function(e){return e.replace(cw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(fw);return KS(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ZS=function(e,t,i,r,s){var o=t-e,a=r-i;return Bs(s,function(l){return i+((l-e)/o*a||0)})},Dw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=dn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=ja(Ln(e)?[]:{},e));if(!c){for(l in t)R_.call(a,e,l,"get",t[l]);s=function(g){return D_(g,a)||(o?e.p:e)}}}return Bs(i,s)},h0=function(e,t,i){var r=e.labels,s=Bi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ts.length&&kf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Rl=function(e){return Ds(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&Si(e,"onInterrupt"),e},xa,JS=[],eM=function(e){if(e)if(e=!e.name&&e.default||e,S_()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Mu,render:D_,add:R_,kill:$w,modifier:qw,rawVars:0},o={targetTest:0,get:0,getSetter:L_,aliases:{},register:0};if($a(),e!==r){if(_i[t])return;Ci(r,Ci(zf(e,s),o)),ja(r.prototype,ja(s,zf(e,o))),_i[r.prop=t]=r,e.targetTest&&(rf.push(r),T_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}OS(t,r),e.register&&e.register(li,r,ii)}else JS.push(e)},St=255,Pl={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},rh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},tM=function(e,t,i){var r=e?Vr(e)?[e>>16,e>>8&St,e&St]:0:Pl.black,s,o,a,l,u,c,d,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pl[e])r=Pl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(l0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=rh(l+1/3,s,o),r[1]=rh(l,s,o),r[2]=rh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(DS),i&&r.length<4&&(r[3]=1),r}else r=e.match(l0)||Pl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},nM=function(e){var t=[],i=[],r=-1;return e.split(ws).forEach(function(s){var o=s.match(va)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},p0=function(e,t,i){var r="",s=(e+r).match(ws),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=tM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=nM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(ws,"1").split(va),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(ws),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},ws=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Nw=/hsl[a]?\(/,iM=function(e){var t=e.join(" "),i;if(ws.lastIndex=0,ws.test(t))return i=Nw.test(t),e[1]=p0(e[1],i),e[0]=p0(e[0],i,nM(e[1])),!0},Tu,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,g=function _(m){var h=n()-r,v=m===!0,x,y,T,w;if((h>e||h<0)&&(i+=h-t),r+=h,T=r-i,x=T-o,(x>0||v)&&(w=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](T,f,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){US&&(!Gp&&S_()&&(cr=Gp=window,M_=cr.document||{},Ai.gsap=li,(cr.gsapVersions||(cr.gsapVersions=[])).push(li.version),IS(Ff||cr.GreenSockGlobals||!cr.gsap&&cr||{}),JS.forEach(eM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Tu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Tu=0,u=Mu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(y,T,w,M){m(y,T,w,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),$a(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),$a=function(){return!Tu&&vi.wake()},at={},Uw=/^[\d.\-M][\d.\-,\s]/,Iw=/["']/g,Ow=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Iw,"").trim():+u,r=l.substr(a+1).trim();return t},Fw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},kw=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Ow(t[1])]:Fw(e).split(",").map(BS)):at._CE&&Uw.test(e)?at._CE("",e):i},zw=function(e){return function(t){return 1-e(1-t)}},mo=function(e,t){return e&&(Vt(e)?e:at[e]||kw(e))||t},Oo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ni(e,function(a){at[a]=Ai[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},rM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Hp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*uw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:rM(a);return s=Hp/s,l.config=function(u,c){return n(e,u,c)},l},oh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:rM(i);return r.config=function(s){return n(e,s)},r};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Oo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Oo("Elastic",sh("in"),sh("out"),sh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Oo("Circ",function(n){return-(bS(1-n*n)-1)});Oo("Sine",function(n){return n===1?1:-lw(n*ow)+1});Oo("Back",oh("in"),oh("out"),oh());at.SteppedEase=at.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Fu(0,o,a)|0)+s)*i}}};yu.ease=at["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return w_+=n+","+n+"Params,"});var sM=function(e,t){this.id=aw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kS,this.set=t?t.getSetter:L_},wu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qa(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Tu||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,qa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if($a(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vd(this,i),!s._dp||s.parent||VS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+f0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+f0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ya(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Bf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Fu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),gd(this),xw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($a(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ut(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ti(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=mw);var r=vn;return vn=i,C_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,d0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,d0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Di(this,i),ti(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ti(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Vt(i)?i:HS,l=function(){var c=r.then;r.then=null,s&&s(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Rl(this)},n}();Ci(wu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Kn=function(n){PS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ti(i.sortChildren),Ot&&pr(i.parent||Ot,Rr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&WS(Rr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Xl(0,arguments,this),this},t.from=function(r,s,o){return Xl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Xl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Wl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(r,s,Di(this,o),1),this},t.call=function(r,s,o){return pr(this,$t.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new $t(r,o,Di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Wl(o).immediateRender=ti(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Wl(a).immediateRender=ti(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ut(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,h,v,x,y,T,w,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ut(c%m),c===l?(_=this._repeat,f=u):(T=Ut(c/m),_=~~T,_&&_===T&&(f=u,_--),f>u&&(f=u)),T=Ya(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(f=u-f,M=1),_!==T&&!this._lock){var b=w&&T&1,S=b===(w&&_&1);if(_<T&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ut(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Ew(this,Ut(a),Ut(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(Si(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-Mt);break}}p=g}else{p=this._last;for(var E=r<0?r:f;p;){if(g=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||vn&&C_(p)),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=E?-Mt:Mt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Mt)._zTime=f>=a?1:-1,this._ts))return this._start=y,gd(this),this.render(r,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ds(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Vr(s)||(s=Di(this,s,r)),!(r instanceof wu)){if(Ln(r))return r.forEach(function(a){return o.add(a,s)}),this;if(dn(r))return this.addLabel(r,s);if(Vt(r))r=$t.delayedCall(0,r);else return this}return this!==r?pr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof $t?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return dn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&_d(this,r),r===this._recent&&(this._recent=this._last),po(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=$t.delayedCall(0,s||Mu,o);return a.data="isPause",this._hasPause=1,pr(this,a,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Ds(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ls!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Hi(r),l=this._first,u=Vr(s),c;l;)l instanceof $t?_w(l._targets,a)&&(u?(!ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,g=$t.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&qa(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ci({startAt:{time:Di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),h0(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),h0(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ut(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return po(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),po(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Bi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ut(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;qa(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(zS(Ot,Bf(r,Ot)),FS=vi.frame),vi.frame>=u0){u0+=Ti.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Ti.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(wu);Ci(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bw=function(e,t,i,r,s,o,a){var l=new ii(this._pt,e,t,0,1,fM,null,s),u=0,c=0,d,f,p,g,_,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Eu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(nh)||[];d=nh.exec(r);)g=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Pa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=nh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(NS.test(r)||h)&&(l.e=0),this._pt=l,l},R_=function(e,t,i,r,s,o,a,l,u,c){Vt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Vt(d)?u?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Vt(d)?u?Xw:uM:b_,g;if(dn(r)&&(~r.indexOf("random(")&&(r=Eu(r)),r.charAt(1)==="="&&(g=Pa(f,r)+(Rn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||$p)return!isNaN(f*r)&&r!==""?(g=new ii(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?Yw:cM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&E_(t,r),Bw.call(this,e,t,f,r,p,l||Ti.stringFilter,u))},Hw=function(e,t,i,r,s){if(Vt(e)&&(e=jl(e,s,t,i,r)),!yr(e)||e.style&&e.nodeType||Ln(e)||LS(e))return dn(e)?jl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=jl(e[a],s,t,i,r);return o},oM=function(e,t,i,r,s,o){var a,l,u,c;if(_i[e]&&(a=new _i[e]).init(s,a.rawVars?t[e]:Hw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ii(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==xa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ls,$p,P_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!x_,y=e.timeline,T=r.easeReverse||d,w,M,b,S,E,O,U,Z,L,k,G,W,N;if(y&&(!f||!s)&&(s="none"),e._ease=mo(s,yu.ease),e._rEase=T&&(mo(T)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(Z=m[0]?ho(m[0]).harness:0,W=Z&&r[Z.prop],w=zf(r,T_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?nf:pw),_._lazy=0),o){if(Ds(e._startAt=$t.set(m,Ci({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&ti(l),startAt:null,delay:0,onUpdate:u&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!a&&!p)&&e._startAt.revert(nf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),b=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ti(l),immediateRender:a,stagger:0,parent:h},w),W&&(b[Z.prop]=W),Ds(e._startAt=$t.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(nf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ti(l)||l&&!g,M=0;M<m.length;M++){if(E=m[M],U=E._gsap||A_(m)[M]._gsap,e._ptLookup[M]=k={},Vp[U.id]&&Ts.length&&kf(),G=v===m?M:v.indexOf(E),Z&&(L=new Z).init(E,W||w,e,G,v)!==!1&&(e._pt=S=new ii(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(F){k[F]=S}),L.priority&&(O=1)),!Z||W)for(b in w)_i[b]&&(L=oM(b,w,e,G,E,v))?L.priority&&(O=1):k[b]=S=R_.call(e,E,b,"get",w[b],G,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(ls=e,Ot.killTweensOf(E,k,e.globalTime(t)),N=!e.parent,ls=0),e._pt&&l&&(Vp[U.id]=1)}O&&dM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,f&&t<=0&&y.render(Bi,!0,!0)},Gw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return $p=1,e.vars[t]="+=0",P_(e,a),$p=0,l?Su(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Wt(i)+Rn(d.e)),d.b&&(d.b=c.s+Rn(d.b))},Vw=function(e,t){var i=e[0]?ho(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ja({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ww=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Ln(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},jl=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):dn(e)&&~e.indexOf("random(")?Eu(e):e},aM=w_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",lM={};ni(aM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return lM[n]=1});var $t=function(n){PS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Wl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=r.parent||Ot,v=(Ln(i)||LS(i)?Vr(i[0]):"length"in r)?[i]:Hi(i),x,y,T,w,M,b,S,E;if(a._targets=v.length?A_(v):Su("GSAP target "+i+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||oc(u)||oc(c)){r=a.vars;var O=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Kn({data:"nested",defaults:_||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Rr(a),x._start=0,f||oc(u)||oc(c)){if(w=v.length,S=f&&qS(f),yr(f))for(M in f)~aM.indexOf(M)&&(E||(E={}),E[M]=f[M]);for(y=0;y<w;y++)T=zf(r,lM),T.stagger=0,O&&(T.easeReverse=O),E&&ja(T,E),b=v[y],T.duration=+jl(u,Rr(a),y,b,v),T.delay=(+jl(c,Rr(a),y,b,v)||0)-a._delay,!f&&w===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(b,T,S?S(y,b,v):0),x._ease=at.none;x.duration()?u=c=0:a.timeline=0}else if(g){Wl(Ci(x.vars.defaults,{ease:"none"})),x._ease=mo(g.ease||r.ease||"none");var U=0,Z,L,k;if(Ln(g))g.forEach(function(G){return x.to(v,G,">")}),x.duration();else{T={};for(M in g)M==="ease"||M==="easeEach"||Ww(M,g[M],T,g.easeEach);for(M in T)for(Z=T[M].sort(function(G,W){return G.t-W.t}),U=0,y=0;y<Z.length;y++)L=Z[y],k={ease:L.e,duration:(L.t-(y?Z[y-1].t:0))/100*u},k[M]=L.v,x.to(v,k,U),U+=k.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!x_&&(ls=Rr(a),Ot.killTweensOf(v),ls=0),pr(h,Rr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===Ut(h._time)&&ti(d)&&yw(Rr(a))&&h.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&WS(Rr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Mt&&!c?l:r<Mt?0:r,f,p,g,_,m,h,v,x;if(!u)Mw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Ut(d%_),d===l?(g=this._repeat,f=u):(m=Ut(d/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),h=this._yoyo&&g&1,h&&(f=u-f),m=Ya(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(XS(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Si(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Wp(this,r,s,o),Si(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Wp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ds(this,1),!s&&!(c&&!a)&&(d||a||h)&&(Si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Tu||vi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||P_(this,u),c=this._ease(u/this._dur),Gw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(vd(this,0),this.parent||GS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Rl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ls&&ls.vars.overwrite!==!0)._first||Rl(this),this.parent&&o!==this.timeline.totalDuration()&&qa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Hi(r):a,u=this._ptLookup,c=this._pt,d,f,p,g,_,m,h;if((!s||s==="all")&&vw(a,l))return s==="all"&&(this._pt=0),Rl(this);for(d=this._op=this._op||[],s!=="all"&&(dn(s)&&(_={},ni(s,function(v){return _[v]=1}),s=_),s=Vw(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,g=f,p={}):(p=d[h]=d[h]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&_d(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Rl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Xl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Xl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(wu);Ci($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(n){$t[n]=function(){var e=new Kn,t=jp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var b_=function(e,t,i){return e[t]=i},uM=function(e,t,i){return e[t](i)},Xw=function(e,t,i,r){return e[t](r.fp,i)},jw=function(e,t,i){return e.setAttribute(t,i)},L_=function(e,t){return Vt(e[t])?uM:y_(e[t])&&e.setAttribute?jw:b_},cM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},fM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},D_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},qw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},$w=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?_d(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Kw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},dM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ii=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||cM,this.d=l||this,this.set=u||b_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Kw,this.m=i,this.mt=s,this.tween=r},n}();ni(w_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return T_[n]=1});Ai.TweenMax=Ai.TweenLite=$t;Ai.TimelineLite=Ai.TimelineMax=Kn;Ot=new Kn({sortChildren:!1,defaults:yu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=iM;var _o=[],sf={},Qw=[],m0=0,Zw=0,ah=function(e){return(sf[e]||Qw).map(function(t){return t()})},Kp=function(){var e=Date.now(),t=[];e-m0>2&&(ah("matchMediaInit"),_o.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=cr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),ah("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),m0=e,ah("matchMedia"))},hM=function(){function n(t,i){this.selector=i&&Yp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Zw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var o=this,a=function(){var u=Dt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Yp(s)),Dt=o,d=r.apply(o,arguments),Vt(d)&&o._r.push(d),Dt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof $t&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Kn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof $t)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=_o.length;o--;)_o[o].id===this.id&&_o.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Jw=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){yr(i)||(i={matches:i});var o=new hM(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=cr.matchMedia(i[u]),l&&(_o.indexOf(o)<0&&_o.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Kp):l.addEventListener("change",Kp)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Hf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return eM(r)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){dn(e)&&(e=Hi(e)[0]);var s=ho(e||{}).get,o=i?HS:BS;return i==="native"&&(i=""),e&&(t?o((_i[t]&&_i[t].get||s)(e,t,i,r)):function(a,l,u){return o((_i[a]&&_i[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Hi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=_i[t],a=ho(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;xa._pt=0,d.init(e,i?c+i:c,xa,0,[e]),d.render(1,d),xa._pt&&D_(1,xa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mo(e.ease,yu.ease)),c0(yu,e||{})},config:function(e){return c0(Ti,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_i[a]&&!Ai[a]&&Su(t+" effect requires "+a+" plugin.")}),ih[t]=function(a,l,u){return i(Hi(a),Ci(l||{},s),u)},o&&(Kn.prototype[t]=function(a,l,u){return this.add(ih[t](a,yr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=mo(t)},parseEase:function(e,t){return arguments.length?mo(e,t):at},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Kn(e),r,s;for(i.smoothChildTiming=ti(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]))&&pr(i,r,r._start-r._delay),r=s;return pr(Ot,i,0),i},context:function(e,t){return e?new hM(e,t):Dt},matchMedia:function(e){return new Jw(e)},matchMediaRefresh:function(){return _o.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kp()},addEventListener:function(e,t){var i=sf[e]||(sf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=sf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:bw,wrapYoyo:Lw,distribute:qS,random:KS,snap:$S,normalize:Pw,getUnit:Rn,clamp:ww,splitColor:tM,toArray:Hi,selector:Yp,mapRange:ZS,pipe:Cw,unitize:Rw,interpolate:Dw,shuffle:YS},install:IS,effects:ih,ticker:vi,updateRoot:Kn.updateRoot,plugins:_i,globalTimeline:Ot,core:{PropTween:ii,globals:OS,Tween:$t,Timeline:Kn,Animation:wu,getCache:ho,_removeLinkedListItem:_d,reverting:function(){return vn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return x_=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Hf[n]=$t[n]});vi.add(Kn.updateRoot);xa=Hf.to({},{duration:0});var eA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},tA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=eA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},lh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(dn(s)&&(l={},ni(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}tA(a,s)}}}},li=Hf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)vn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},lh("roundProps",qp),lh("modifiers"),lh("snap",$S))||Hf;$t.version=Kn.version=li.version="3.15.0";US=1;S_()&&$a();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _0,us,ba,N_,lo,g0,U_,nA=function(){return typeof window<"u"},Wr={},Zs=180/Math.PI,La=Math.PI/180,ko=Math.atan2,v0=1e8,I_=/([A-Z])/g,iA=/(left|right|width|margin|padding|x)/i,rA=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},pM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},uA=function(e,t,i){return e.style[t]=i},cA=function(e,t,i){return e.style.setProperty(t,i)},fA=function(e,t,i){return e._gsap[t]=i},dA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},hA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},pA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",ri=Ft+"Origin",mA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Wr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=br(r,a)}):this.tfm[e]=o.x?o[e]:br(r,e),e===ri&&(this.tfm.zOrigin=o.zOrigin);else return mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},_M=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_A=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(I_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=U_(),(!s||!s.isStart)&&!i[Ft]&&(_M(i),r.zOrigin&&i[ri]&&(i[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},gM=function(e,t){var i={target:e,props:[],revert:_A,save:mA};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},vM,Zp=function(e,t){var i=us.createElementNS?us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):us.createElement(e);return i&&i.style?i:us.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(I_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ka(t)||t,1)||""},x0="O,Moz,ms,Ms,Webkit".split(","),Ka=function(e,t,i){var r=t||lo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(x0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?x0[o]:"")+e},Jp=function(){nA()&&window.document&&(_0=window,us=_0.document,ba=us.documentElement,lo=Zp("div")||{style:{}},Zp("div"),Ft=Ka(Ft),ri=Ft+"Origin",lo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vM=!!Ka("perspective"),U_=li.core.reverting,N_=1)},y0=function(e){var t=e.ownerSVGElement,i=Zp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ba.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ba.removeChild(i),s},S0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},xM=function(e){var t,i;try{t=e.getBBox()}catch{t=y0(e),i=1}return t&&(t.width||t.height)||i||(t=y0(e)),t&&!t.width&&!t.x&&!t.y?{x:+S0(e,["x","cx","x1"])||0,y:+S0(e,["y","cy","y1"])||0,width:0,height:0}:t},yM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xM(e))},Ns=function(e,t){if(t){var i=e.style,r;t in Wr&&t!==ri&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(I_,"-$1").toLowerCase())):i.removeAttribute(t)}},cs=function(e,t,i,r,s,o){var a=new ii(e._pt,t,i,0,1,o?mM:pM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},M0={deg:1,rad:1,turn:1},gA={grid:1,flex:1},Us=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=lo.style,l=iA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",g,_,m,h;if(r===o||!s||M0[r]||M0[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&yM(e),(p||o==="%")&&(Wr[t]||~t.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],Wt(p?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===us||!_.appendChild)&&(_=us.body),m=_._gsap,m&&p&&m.width&&l&&m.time===vi.time&&!m.uncache)return Wt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[c],v?e.style[t]=v:Ns(e,t)}else(p||o==="%")&&!gA[Mi(_,"display")]&&(a.position=Mi(e,"position")),_===e&&(a.position="static"),_.appendChild(lo),g=lo[c],_.removeChild(lo),a.position="absolute";return l&&p&&(m=ho(_),m.time=vi.time,m.width=_[c]),Wt(f?g*s/d:g&&s?d/g*s:0)},br=function(e,t,i,r){var s;return N_||Jp(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wr[t]&&t!=="transform"?(s=Cu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vf(Mi(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Gf[t]&&Gf[t](e,t,i)||Mi(e,t)||kS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Us(e,t,s,i)+i:s},vA=function(e,t,i,r){if(!i||i==="none"){var s=Ka(t,e,1),o=s&&Mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var a=new ii(this._pt,e.style,t,0,1,fM),l=0,u=0,c,d,f,p,g,_,m,h,v,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Mi(e,t)||r,_?e.style[t]=_:Ns(e,t)),c=[i,r],iM(c),i=c[0],r=c[1],f=i.match(va)||[],T=r.match(va)||[],T.length){for(;d=va.exec(r);)m=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Pa(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=va.lastIndex-x.length,x||(x=x||Ti.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Us(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?mM:pM;return NS.test(r)&&(a.e=0),this._pt=a,a},E0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=E0[i]||i,t[1]=E0[r]||r,t.join(" ")},yA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Wr[a]&&(l=1,a=a==="transformOrigin"?ri:Ft),Ns(i,a);l&&(Ns(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Cu(i,1),o.uncache=1,_M(r)))}},Gf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ii(e._pt,t,i,0,0,yA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Au=[1,0,0,1,0,0],SM={},MM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},T0=function(e){var t=Mi(e,Ft);return MM(t)?Au:t.substr(7).match(DS).map(Wt)},O_=function(e,t){var i=e._gsap||ho(e),r=e.style,s=T0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Au:s):(s===Au&&!e.offsetParent&&e!==ba&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ba.appendChild(e)),s=T0(e),l?r.display=l:Ns(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ba.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},em=function(e,t,i,r,s,o){var a=e._gsap,l=s||O_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,M,b,S;i?l!==Au&&(M=p*m-g*_)&&(b=y*(m/M)+T*(-_/M)+(_*v-m*h)/M,S=y*(-g/M)+T*(p/M)-(p*v-g*h)/M,y=b,T=S):(w=xM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(h=y-u,v=T-c,a.xOffset=d+(h*p+v*_)-h,a.yOffset=f+(h*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ri]="0px 0px",o&&(cs(o,a,"xOrigin",u,y),cs(o,a,"yOrigin",c,T),cs(o,a,"xOffset",d,a.xOffset),cs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Cu=function(e,t){var i=e._gsap||new sM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Mi(e,ri)||"0",c,d,f,p,g,_,m,h,v,x,y,T,w,M,b,S,E,O,U,Z,L,k,G,W,N,F,R,K,J,q,Q,se;return c=d=f=_=m=h=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&yM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=O_(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),em(e,W||u,!!W||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,w=i.yOrigin||0,M!==Au&&(O=M[0],U=M[1],Z=M[2],L=M[3],c=k=M[4],d=G=M[5],M.length===6?(p=Math.sqrt(O*O+U*U),g=Math.sqrt(L*L+Z*Z),_=O||U?ko(U,O)*Zs:0,v=Z||L?ko(Z,L)*Zs+_:0,v&&(g*=Math.abs(Math.cos(v*La))),i.svg&&(c-=T-(T*O+w*Z),d-=w-(T*U+w*L))):(se=M[6],q=M[7],R=M[8],K=M[9],J=M[10],Q=M[11],c=M[12],d=M[13],f=M[14],b=ko(se,J),m=b*Zs,b&&(S=Math.cos(-b),E=Math.sin(-b),W=k*S+R*E,N=G*S+K*E,F=se*S+J*E,R=k*-E+R*S,K=G*-E+K*S,J=se*-E+J*S,Q=q*-E+Q*S,k=W,G=N,se=F),b=ko(-Z,J),h=b*Zs,b&&(S=Math.cos(-b),E=Math.sin(-b),W=O*S-R*E,N=U*S-K*E,F=Z*S-J*E,Q=L*E+Q*S,O=W,U=N,Z=F),b=ko(U,O),_=b*Zs,b&&(S=Math.cos(b),E=Math.sin(b),W=O*S+U*E,N=k*S+G*E,U=U*S-O*E,G=G*S-k*E,O=W,k=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=Wt(Math.sqrt(O*O+U*U+Z*Z)),g=Wt(Math.sqrt(G*G+se*se)),b=ko(k,G),v=Math.abs(b)>2e-4?b*Zs:0,y=Q?1/(Q<0?-Q:Q):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!MM(Mi(e,Ft)),W&&e.setAttribute("transform",W))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Wt(p),i.scaleY=Wt(g),i.rotation=Wt(_)+a,i.rotationX=Wt(m)+a,i.rotationY=Wt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ri]=Vf(u)),i.xOffset=i.yOffset=0,i.force3D=Ti.force3D,i.renderTransform=i.svg?MA:vM?EM:SA,i.uncache=0,i},Vf=function(e){return(e=e.split(" "))[0]+" "+e[1]},uh=function(e,t,i){var r=Rn(t);return Wt(parseFloat(t)+parseFloat(Us(e,"x",i+"px",r)))+r},SA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,EM(e,t)},Vs="0deg",_l="0px",Ws=") ",EM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",T=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Vs||c!==Vs)){var w=parseFloat(c)*La,M=Math.sin(w),b=Math.cos(w),S;w=parseFloat(d)*La,S=Math.cos(w),o=uh(v,o,M*S*-x),a=uh(v,a,-Math.sin(w)*-x),l=uh(v,l,b*S*-x+x)}m!==_l&&(y+="perspective("+m+Ws),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==_l||a!==_l||l!==_l)&&(y+=l!==_l||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ws),u!==Vs&&(y+="rotate("+u+Ws),c!==Vs&&(y+="rotateY("+c+Ws),d!==Vs&&(y+="rotateX("+d+Ws),(f!==Vs||p!==Vs)&&(y+="skew("+f+", "+p+Ws),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ws),v.style[Ft]=y||"translate(0, 0)"},MA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,w,M,b,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=La,u*=La,T=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-f,b=Math.cos(l-u)*f,u&&(c*=La,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,b*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Wt(T),w=Wt(w),M=Wt(M),b=Wt(b)):(T=d,b=f,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Us(p,"x",o,"px"),y=Us(p,"y",a,"px")),(g||_||m||h)&&(x=Wt(x+g-(g*T+_*M)+m),y=Wt(y+_-(g*w+_*b)+h)),(r||s)&&(S=p.getBBox(),x=Wt(x+r/100*S.width),y=Wt(y+s/100*S.height)),S="matrix("+T+","+w+","+M+","+b+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ft]=S)},EA=function(e,t,i,r,s){var o=360,a=dn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zs:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*v0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*v0)%o-~~(u/o)*o)),e._pt=f=new ii(e._pt,t,i,r,u,sA),f.e=c,f.u="deg",e._props.push(i),f},w0=function(e,t){for(var i in t)e[i]=t[i];return e},TA=function(e,t,i){var r=w0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Cu(i,1),Ns(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Cu(i,1),o[Ft]=u);for(l in Wr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),g=Rn(c),d=p!==g?Us(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new ii(e._pt,a,l,d,f-d,Qp),e._pt.u=g||0,e._props.push(l));w0(a,r)};ni("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Gf[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(g){return br(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,d)}});var TM={name:"css",register:Jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,g,_,m,h,v,x,y,T,w,M,b,S;N_||Jp(),this.styles=this.styles||gM(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(_i[_]&&oM(_,t,i,r,e,s)))){if(p=typeof c,g=Gf[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Eu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",ws.lastIndex=0,ws.test(u)||(m=Rn(u),h=Rn(c),h?m!==h&&(u=Us(e,_,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],dn(u)&&~u.indexOf("random(")&&(u=Eu(u)),Rn(u+"")||u==="auto"||(u+=Ti.units[_]||Rn(br(e,_))||""),(u+"").charAt(1)==="="&&(u=br(e,_))):u=br(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in mr&&(_==="autoAlpha"&&(f===1&&br(e,"visibility")==="hidden"&&d&&(f=0),b.push("visibility",0,a.visibility),cs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Wr,x){if(this.styles.save(_),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Mi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=Mi(e,"perspective"),E?e.style.perspective=E:Ns(e,"perspective")}d=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Cu(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new ii(this._pt,a,Ft,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new ii(this._pt,T,"scaleY",T.scaleY,(v?Pa(T.scaleY,v+d):d)-T.scaleY||0,Qp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(ri,0,a[ri]),c=xA(c),T.svg?em(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==T.zOrigin&&cs(this,T,"zOrigin",T.zOrigin,h),cs(this,a,_,Vf(u),Vf(c)));continue}else if(_==="svgOrigin"){em(e,c,1,w,0,this);continue}else if(_ in SM){EA(this,T,_,f,v?Pa(f,v+c):c);continue}else if(_==="smoothOrigin"){cs(this,T,"smooth",T.smooth,c);continue}else if(_==="force3D"){T[_]=c;continue}else if(_==="transform"){TA(this,c,e);continue}}else _ in a||(_=Ka(_)||_);if(x||(d||d===0)&&(f||f===0)&&!rA.test(c)&&_ in a)m=(u+"").substr((f+"").length),d||(d=0),h=Rn(c)||(_ in Ti.units?Ti.units[_]:m),m!==h&&(f=Us(e,_,u,h)),this._pt=new ii(this._pt,x?T:a,_,f,(v?Pa(f,v+d):d)-f,!x&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?lA:Qp),this._pt.u=h||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=aA):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=oA);else if(_ in a)vA.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){E_(_,c);continue}x||(_ in a?b.push(_,0,a[_]):typeof e[_]=="function"?b.push(_,2,e[_]()):b.push(_,1,u||e[_])),o.push(_)}}M&&dM(this)},render:function(e,t){if(t.tween._time||!U_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:br,aliases:mr,getSetter:function(e,t,i){var r=mr[t];return r&&r.indexOf(",")<0&&(t=r),t in Wr&&t!==ri&&(e._gsap.x||br(e,"x"))?i&&g0===i?t==="scale"?dA:fA:(g0=i||{})&&(t==="scale"?hA:pA):e.style&&!y_(e.style[t])?uA:~t.indexOf("-")?cA:L_(e,t)},core:{_removeProperty:Ns,_getMatrix:O_}};li.utils.checkPrefix=Ka;li.core.getStyleSaver=gM;(function(n,e,t,i){var r=ni(n+","+e+","+t,function(s){Wr[s]=1});ni(e,function(s){Ti.units[s]="deg",SM[s]=1}),mr[r[13]]=n+","+e,ni(i,function(s){var o=s.split(":");mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ti.units[n]="px"});li.registerPlugin(TM);var kt=li.registerPlugin(TM)||li;kt.core.Tween;function wA(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function AA(n,e,t){return e&&wA(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn,of,xi,fs,ds,Da,wM,Js,Na,AM,Ir,Ki,CM,RM=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},PM=1,ya=[],rt=[],xr=[],Yl=Date.now,tm=function(e,t){return t},CA=function(){var e=Na.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,xr),rt=i,xr=r,tm=function(o,a){return t[o](a)}},As=function(e,t){return~xr.indexOf(e)&&xr[xr.indexOf(e)+1][t]},ql=function(e){return!!~AM.indexOf(e)},In=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},ac="scrollLeft",lc="scrollTop",nm=function(){return Ir&&Ir.isPressed||rt.cache++},Wf=function(e,t){var i=function r(s){if(s||s===0){PM&&(xi.history.scrollRestoration="manual");var o=Ir&&Ir.isPressed;s=r.v=Math.round(s)||(Ir&&Ir.iOS?1:0),e(s),r.cacheID=rt.cache,o&&tm("ss",s)}else(t||rt.cache!==r.cacheID||tm("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Gn={s:ac,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wf(function(n){return arguments.length?xi.scrollTo(n,tn.sc()):xi.pageXOffset||fs[ac]||ds[ac]||Da[ac]||0})},tn={s:lc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:Wf(function(n){return arguments.length?xi.scrollTo(Gn.sc(),n):xi.pageYOffset||fs[lc]||ds[lc]||Da[lc]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},RA=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Is=function(e,t){var i=t.s,r=t.sc;ql(e)&&(e=fs.scrollingElement||ds);var s=rt.indexOf(e),o=r===tn.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||In(e,"scroll",nm);var a=rt[s+o],l=a||(rt[s+o]=Wf(As(e,i),!0)||(ql(e)?r:Wf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},im=function(e,t,i){var r=e,s=e,o=Yl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=Yl();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,h=Yl();return(g||g===0)&&g!==r&&c(g),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-_)*1e3};return{update:c,reset:d,getVelocity:f}},gl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},A0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},bM=function(){Na=mn.core.globals().ScrollTrigger,Na&&Na.core&&CA()},LM=function(e){return mn=e||RM(),!of&&mn&&typeof document<"u"&&document.body&&(xi=window,fs=document,ds=fs.documentElement,Da=fs.body,AM=[xi,fs,ds,Da],mn.utils.clamp,CM=mn.core.context||function(){},Js="onpointerenter"in Da?"pointer":"mouse",wM=jt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ki=jt.eventTypes=("ontouchstart"in ds?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ds?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return PM=0},500),of=1),Na||bM(),of};Gn.op=tn;rt.cache=0;var jt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){of||LM(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Na||bM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,T=i.onRight,w=i.onLeft,M=i.onUp,b=i.onDown,S=i.onChangeX,E=i.onChangeY,O=i.onChange,U=i.onToggleX,Z=i.onToggleY,L=i.onHover,k=i.onHoverEnd,G=i.onMove,W=i.ignoreCheck,N=i.isNormalizer,F=i.onGestureStart,R=i.onGestureEnd,K=i.onWheel,J=i.onEnable,q=i.onDisable,Q=i.onClick,se=i.scrollSpeed,me=i.capture,de=i.allowClicks,De=i.lockAxis,Ne=i.onLockAxis;this.target=a=Yn(a)||ds,this.vars=i,p&&(p=mn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(xi.getComputedStyle(Da).lineHeight)||22);var Oe,We,H,Xe,ve,Ue,xe,V=this,Be=0,P=0,A=i.passive||!c&&i.passive!==!1,z=Is(a,Gn),ne=Is(a,tn),te=z(),ie=ne(),ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ki[0]==="pointerdown",he=ql(a),fe=a.ownerDocument||fs,Re=[0,0,0],Ve=[0,0,0],ee=0,lt=function(){return ee=Yl()},be=function(Me,Le){return(V.event=Me)&&p&&RA(Me.target,p)||Le&&ge&&Me.pointerType!=="touch"||W&&W(Me,Le)},je=function(){V._vx.reset(),V._vy.reset(),We.pause(),d&&d(V)},Ae=function(){var Me=V.deltaX=A0(Re),Le=V.deltaY=A0(Ve),oe=Math.abs(Me)>=r,ze=Math.abs(Le)>=r;O&&(oe||ze)&&O(V,Me,Le,Re,Ve),oe&&(T&&V.deltaX>0&&T(V),w&&V.deltaX<0&&w(V),S&&S(V),U&&V.deltaX<0!=Be<0&&U(V),Be=V.deltaX,Re[0]=Re[1]=Re[2]=0),ze&&(b&&V.deltaY>0&&b(V),M&&V.deltaY<0&&M(V),E&&E(V),Z&&V.deltaY<0!=P<0&&Z(V),P=V.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(Xe||H)&&(G&&G(V),H&&(m&&H===1&&m(V),v&&v(V),H=0),Xe=!1),Ue&&!(Ue=!1)&&Ne&&Ne(V),ve&&(K(V),ve=!1),Oe=0},ye=function(Me,Le,oe){Re[oe]+=Me,Ve[oe]+=Le,V._vx.update(Me),V._vy.update(Le),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},Ye=function(Me,Le){De&&!xe&&(V.axis=xe=Math.abs(Me)>Math.abs(Le)?"x":"y",Ue=!0),xe!=="y"&&(Re[2]+=Me,V._vx.update(Me,!0)),xe!=="x"&&(Ve[2]+=Le,V._vy.update(Le,!0)),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},et=function(Me){if(!be(Me,1)){Me=gl(Me,c);var Le=Me.clientX,oe=Me.clientY,ze=Le-V.x,Fe=oe-V.y,$e=V.isDragging;V.x=Le,V.y=oe,($e||(ze||Fe)&&(Math.abs(V.startX-Le)>=s||Math.abs(V.startY-oe)>=s))&&(H||(H=$e?2:1),$e||(V.isDragging=!0),Ye(ze,Fe))}},ft=V.onPress=function(Ce){be(Ce,1)||Ce&&Ce.button||(V.axis=xe=null,We.pause(),V.isPressed=!0,Ce=gl(Ce),Be=P=0,V.startX=V.x=Ce.clientX,V.startY=V.y=Ce.clientY,V._vx.reset(),V._vy.reset(),In(N?a:fe,Ki[1],et,A,!0),V.deltaX=V.deltaY=0,x&&x(V))},_e=V.onRelease=function(Ce){if(!be(Ce,1)){Un(N?a:fe,Ki[1],et,!0);var Me=!isNaN(V.y-V.startY),Le=V.isDragging,oe=Le&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),ze=gl(Ce);!oe&&Me&&(V._vx.reset(),V._vy.reset(),c&&de&&mn.delayedCall(.08,function(){if(Yl()-ee>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(fe.createEvent){var Fe=fe.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,xi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Fe)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Le&&!N&&We.restart(!0),H&&Ae(),h&&Le&&h(V),y&&y(V,oe)}},ae=function(Me){return Me.touches&&Me.touches.length>1&&(V.isGesturing=!0)&&F(Me,V.isDragging)},D=function(){return(V.isGesturing=!1)||R(V)},le=function(Me){if(!be(Me)){var Le=z(),oe=ne();ye((Le-te)*se,(oe-ie)*se,1),te=Le,ie=oe,d&&We.restart(!0)}},ue=function(Me){if(!be(Me)){Me=gl(Me,c),K&&(ve=!0);var Le=(Me.deltaMode===1?l:Me.deltaMode===2?xi.innerHeight:1)*g;ye(Me.deltaX*Le,Me.deltaY*Le,0),d&&!N&&We.restart(!0)}},ke=function(Me){if(!be(Me)){var Le=Me.clientX,oe=Me.clientY,ze=Le-V.x,Fe=oe-V.y;V.x=Le,V.y=oe,Xe=!0,d&&We.restart(!0),(ze||Fe)&&Ye(ze,Fe)}},Ie=function(Me){V.event=Me,L(V)},ot=function(Me){V.event=Me,k(V)},ct=function(Me){return be(Me)||gl(Me,c)&&Q(V)};We=V._dc=mn.delayedCall(f||.25,je).pause(),V.deltaX=V.deltaY=0,V._vx=im(0,50,!0),V._vy=im(0,50,!0),V.scrollX=z,V.scrollY=ne,V.isDragging=V.isGesturing=V.isPressed=!1,CM(this),V.enable=function(Ce){return V.isEnabled||(In(he?fe:a,"scroll",nm),o.indexOf("scroll")>=0&&In(he?fe:a,"scroll",le,A,me),o.indexOf("wheel")>=0&&In(a,"wheel",ue,A,me),(o.indexOf("touch")>=0&&wM||o.indexOf("pointer")>=0)&&(In(a,Ki[0],ft,A,me),In(fe,Ki[2],_e),In(fe,Ki[3],_e),de&&In(a,"click",lt,!0,!0),Q&&In(a,"click",ct),F&&In(fe,"gesturestart",ae),R&&In(fe,"gestureend",D),L&&In(a,Js+"enter",Ie),k&&In(a,Js+"leave",ot),G&&In(a,Js+"move",ke)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Xe=H=!1,V._vx.reset(),V._vy.reset(),te=z(),ie=ne(),Ce&&Ce.type&&ft(Ce),J&&J(V)),V},V.disable=function(){V.isEnabled&&(ya.filter(function(Ce){return Ce!==V&&ql(Ce.target)}).length||Un(he?fe:a,"scroll",nm),V.isPressed&&(V._vx.reset(),V._vy.reset(),Un(N?a:fe,Ki[1],et,!0)),Un(he?fe:a,"scroll",le,me),Un(a,"wheel",ue,me),Un(a,Ki[0],ft,me),Un(fe,Ki[2],_e),Un(fe,Ki[3],_e),Un(a,"click",lt,!0),Un(a,"click",ct),Un(fe,"gesturestart",ae),Un(fe,"gestureend",D),Un(a,Js+"enter",Ie),Un(a,Js+"leave",ot),Un(a,Js+"move",ke),V.isEnabled=V.isPressed=V.isDragging=!1,q&&q(V))},V.kill=V.revert=function(){V.disable();var Ce=ya.indexOf(V);Ce>=0&&ya.splice(Ce,1),Ir===V&&(Ir=0)},ya.push(V),N&&ql(a)&&(Ir=V),V.enable(_)},AA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();jt.version="3.15.0";jt.create=function(n){return new jt(n)};jt.register=LM;jt.getAll=function(){return ya.slice()};jt.getById=function(n){return ya.filter(function(e){return e.vars.id===n})[0]};RM()&&mn.registerPlugin(jt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,ra,nt,mt,gi,dt,F_,Xf,Ru,$l,bl,uc,wn,xd,rm,zn,C0,R0,sa,DM,ch,NM,Fn,sm,UM,IM,es,om,k_,Ua,z_,Kl,am,fh,cc=1,An=Date.now,dh=An(),Vi=0,Ll=0,P0=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},b0=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},PA=function n(){return Ll&&requestAnimationFrame(n)},L0=function(){return xd=1},D0=function(){return xd=0},fr=function(e){return e},Dl=function(e){return Math.round(e*1e5)/1e5||0},OM=function(){return typeof window<"u"},FM=function(){return Ee||OM()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Po=function(e){return!!~F_.indexOf(e)},kM=function(e){return(e==="Height"?z_:nt["inner"+e])||gi["client"+e]||dt["client"+e]},zM=function(e){return As(e,"getBoundingClientRect")||(Po(e)?function(){return ff.width=nt.innerWidth,ff.height=z_,ff}:function(){return Lr(e)})},bA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=As(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?kM(s):e["client"+s])||0}},LA=function(e,t){return!t||~xr.indexOf(e)?zM(e):function(){return ff}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=As(e,i))?o()-zM(e)()[s]:Po(e)?(gi[i]||dt[i])-kM(r):e[i]-e["offset"+r])},fc=function(e,t){for(var i=0;i<sa.length;i+=3)(!t||~t.indexOf(sa[i+1]))&&e(sa[i],sa[i+1],sa[i+2])},mi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Nl=function(e){return typeof e=="number"},eo=function(e){return typeof e=="object"},vl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},zo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Bo=Math.abs,BM="left",HM="top",B_="right",H_="bottom",go="width",vo="height",Ql="Right",Zl="Left",Jl="Top",eu="Bottom",qt="padding",Ii="margin",Qa="Width",G_="Height",Jt="px",Oi=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},DA=function(e){var t=Oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},N0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Lr=function(e,t){var i=t&&Oi(e)[rm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},jf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},GM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},NA=function(e){return function(t){return Ee.utils.snap(GM(e),t)}},V_=function(e){var t=Ee.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},UA=function(e){return function(t,i){return V_(GM(e))(t,i.direction)}},dc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},ln=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},an=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},hc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},U0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},pc={toggleActions:"play",anticipatePin:0},Yf={top:0,left:0,center:.5,bottom:1,right:1},af=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Yf?Yf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},mc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,g=mt.createElement("div"),_=Po(i)||As(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=_?dt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===tn?B_:H_)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(g,h.children[0]):h.appendChild(g),g._offset=g["offset"+r.op.d2],lf(g,0,r,v),g},lf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Qa]=1,s["border"+a+Qa]=0,s[i.p]=t+"px",Ee.set(e,s)},Ze=[],lm={},Pu,I0=function(){return An()-Vi>34&&(Pu||(Pu=requestAnimationFrame(kr)))},Ho=function(){(!Fn||!Fn.isPressed||Fn.startX>dt.clientWidth)&&(rt.cache++,Fn?Pu||(Pu=requestAnimationFrame(kr)):kr(),Vi||Lo("scrollStart"),Vi=An())},hh=function(){IM=nt.innerWidth,UM=nt.innerHeight},Ul=function(e){rt.cache++,(e===!0||!wn&&!NM&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!sm||IM!==nt.innerWidth||Math.abs(nt.innerHeight-UM)>nt.innerHeight*.25))&&Xf.restart(!0)},bo={},IA=[],VM=function n(){return an(Je,"scrollEnd",n)||uo(!0)},Lo=function(e){return bo[e]&&bo[e].map(function(t){return t()})||IA},di=[],WM=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},XM=function(){return rt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},W_=function(e,t){var i;for(zn=0;zn<Ze.length;zn++)i=Ze[zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Kl=!0,t&&WM(t),t||Lo("revert")},jM=function(e,t){rt.cache++,(t||!Bn)&&rt.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(nt.history.scrollRestoration=k_=e)},Bn,xo=0,O0,OA=function(){if(O0!==xo){var e=O0=xo;requestAnimationFrame(function(){return e===xo&&uo(!0)})}},YM=function(){dt.appendChild(Ua),z_=!Fn&&Ua.offsetHeight||nt.innerHeight,dt.removeChild(Ua)},F0=function(e){return Ru(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},uo=function(e,t){if(gi=mt.documentElement,dt=mt.body,F_=[nt,mt,gi,dt],Vi&&!e&&!Kl){ln(Je,"scrollEnd",VM);return}YM(),Bn=Je.isRefreshing=!0,Kl||XM();var i=Lo("refreshInit");DM&&Je.sort(),t||W_(),rt.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ze.slice(0).forEach(function(r){return r.refresh()}),Kl=!1,Ze.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),am=1,F0(!0),Ze.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),F0(!1),am=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),jM(k_,1),Xf.pause(),xo++,Bn=2,kr(2),Ze.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Bn=Je.isRefreshing=!1,Lo("refresh")},um=0,uf=1,tu,kr=function(e){if(e===2||!Bn&&!Kl){Je.isUpdating=!0,tu&&tu.update(0);var t=Ze.length,i=An(),r=i-dh>=50,s=t&&Ze[0].scroll();if(uf=um>s?-1:1,Bn||(um=s),r&&(Vi&&!xd&&i-Vi>200&&(Vi=0,Lo("scrollEnd")),bl=dh,dh=i),uf<0){for(zn=t;zn-- >0;)Ze[zn]&&Ze[zn].update(0,r);uf=1}else for(zn=0;zn<t;zn++)Ze[zn]&&Ze[zn].update(0,r);Je.isUpdating=!1}Pu=0},cm=[BM,HM,H_,B_,Ii+eu,Ii+Ql,Ii+Jl,Ii+Zl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],cf=cm.concat([go,vo,"boxSizing","max"+Qa,"max"+G_,"position",Ii,qt,qt+Jl,qt+Ql,qt+eu,qt+Zl]),FA=function(e,t,i){Ia(i);var r=e._gsap;if(r.spacerIsNative)Ia(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ph=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=cm.length,o=t.style,a=e.style,l;s--;)l=cm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[H_]=a[B_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[go]=jf(e,Gn)+Jt,o[vo]=jf(e,tn)+Jt,o[qt]=a[Ii]=a[HM]=a[BM]="0",Ia(r),a[go]=a["max"+Qa]=i[go],a[vo]=a["max"+G_]=i[vo],a[qt]=i[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},kA=/([A-Z])/g,Ia=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(kA,"-$1").toLowerCase())}},_c=function(e){for(var t=cf.length,i=e.style,r=[],s=0;s<t;s++)r.push(cf[s],i[cf[s]]);return r.t=e,r},zA=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ff={left:0,top:0},k0=function(e,t,i,r,s,o,a,l,u,c,d,f,p,g){Pn(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?af("0"+e.substr(3),i):0));var _=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Nl(e))p&&(e=Ee.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&lf(a,i,r,!0);else{Pn(t)&&(t=t(l));var x=(e||"0").split(" "),y,T,w,M;v=Yn(t,l)||dt,y=Lr(v)||{},(!y||!y.left&&!y.top)&&Oi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Lr(v),M?v.style.display=M:v.style.removeProperty("display")),T=af(x[0],y[r.d]),w=af(x[1]||"0",i),e=y[r.p]-u[r.p]-c+T+s-w,a&&lf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+i,S=o._isStart;m="scroll"+r.d2,lf(o,b,r,S&&b>20||!S&&(d?Math.max(dt[m],gi[m]):o.parentNode[m])<=b+1),d&&(u=Lr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Jt))}return p&&v&&(m=Lr(v),p.seek(f),h=Lr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},BA=/(webkit|moz|length|cssText|inset)/i,z0=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===dt){e._stOrig=s.cssText,a=Oi(e);for(o in a)!+o&&!BA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},qM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},gc=function(e,t,i){var r={};r[t.p]="+="+i,Ee.set(e,r)},B0=function(e,t){var i=Is(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,g={};u=u||i();var _=qM(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&kr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Ee.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",i.wheelHandler),Je.isTouch&&ln(e,"touchmove",i.wheelHandler),s},Je=function(){function n(t,i){ra||n.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),om(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ll){this.update=this.refresh=this.kill=fr;return}i=N0(mi(i)||Nl(i)||i.nodeType?{trigger:i}:i,pc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,b=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gn:tn,O=!d&&d!==0,U=Yn(i.scroller||nt),Z=Ee.core.getCache(U),L=Po(U),k=("pinType"in i?i.pinType:As(U,"pinType")||L&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],W=O&&i.toggleActions.split(" "),N="markers"in i?i.markers:pc.markers,F=L?0:parseFloat(Oi(U)["border"+E.p2+Qa])||0,R=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(R)},J=bA(U,L,E),q=LA(U,L),Q=0,se=0,me=0,de=Is(U,E),De,Ne,Oe,We,H,Xe,ve,Ue,xe,V,Be,P,A,z,ne,te,ie,ge,he,fe,Re,Ve,ee,lt,be,je,Ae,ye,Ye,et,ft,_e,ae,D,le,ue,ke,Ie,ot;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=U,R.scroll=M?M.time.bind(M):de,We=de(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(DM=1,i.refreshPriority===-9999&&(tu=R)),Z.tweenScroll=Z.tweenScroll||{top:B0(U,tn),left:B0(U,Gn)},R.tweenTo=De=Z.tweenScroll[E.p],R.scrubDuration=function(oe){ae=Nl(oe)&&oe,ae?_e?_e.duration(oe):_e=Ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return h&&h(R)}}):(_e&&_e.progress(1).kill(),_e=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),et=0,l||(l=r.vars.id)),y&&((!eo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in dt.style&&Ee.set(L?[dt,gi]:U,{scrollBehavior:"auto"}),rt.forEach(function(oe){return Pn(oe)&&oe.target===(L?mt.scrollingElement||gi:U)&&(oe.smooth=!1)}),Oe=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?NA(r):y.snapTo==="labelsDirectional"?UA(r):y.directional!==!1?function(oe,ze){return V_(y.snapTo)(oe,An()-se<500?0:ze.direction)}:Ee.utils.snap(y.snapTo),D=y.duration||{min:.1,max:2},D=eo(D)?$l(D.min,D.max):$l(D,D),le=Ee.delayedCall(y.delay||ae/2||.1,function(){var oe=de(),ze=An()-se<500,Fe=De.tween;if((ze||Math.abs(R.getVelocity())<10)&&!Fe&&!xd&&Q!==oe){var $e=(oe-Xe)/z,Nt=r&&!O?r.totalProgress():$e,tt=ze?0:(Nt-ft)/(An()-bl)*1e3||0,Et=Ee.utils.clamp(-$e,1-$e,Bo(tt/2)*tt/.185),Qt=$e+(y.inertia===!1?0:Et),At,Tt,ht=y,ui=ht.onStart,C=ht.onInterrupt,I=ht.onComplete;if(At=Oe(Qt,R),Nl(At)||(At=Qt),Tt=Math.max(0,Math.round(Xe+At*z)),oe<=ve&&oe>=Xe&&Tt!==oe){if(Fe&&!Fe._initted&&Fe.data<=Bo(Tt-oe))return;y.inertia===!1&&(Et=At-$e),De(Tt,{duration:D(Bo(Math.max(Bo(Qt-Nt),Bo(At-Nt))*.185/tt/.05||0)),ease:y.ease||"power3",data:Bo(Tt-oe),onInterrupt:function(){return le.restart(!0)&&C&&zo(R,C)},onComplete:function(){R.update(),Q=de(),r&&!O&&(_e?_e.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),et=ft=r&&!O?r.totalProgress():R.progress,v&&v(R),I&&zo(R,I)}},oe,Et*z,Tt-oe-Et*z),ui&&zo(R,ui,De.tween)}}else R.isActive&&Q!==oe&&le.restart(!0)}).pause()),l&&(lm[l]=R),f=R.trigger=Yn(f||p!==!0&&p),ot=f&&f._gsap&&f._gsap.stRevert,ot&&(ot=ot(R)),p=p===!0?f:Yn(p),mi(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Ii||(g=!g&&p.parentNode&&p.parentNode.style&&Oi(p.parentNode).display==="flex"?!1:qt),R.pin=p,Ne=Ee.core.getCache(p),Ne.spacer?ne=Ne.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ne.spacerIsNative=!!w,w&&(Ne.spacerState=_c(w))),Ne.spacer=ge=w||mt.createElement("div"),ge.classList.add("pin-spacer"),l&&ge.classList.add("pin-spacer-"+l),Ne.pinState=ne=_c(p)),i.force3D!==!1&&Ee.set(p,{force3D:!0}),R.spacer=ge=Ne.spacer,Ye=Oi(p),lt=Ye[g+E.os2],fe=Ee.getProperty(p),Re=Ee.quickSetter(p,E.a,Jt),ph(p,ge,Ye),ie=_c(p)),N){P=eo(N)?N0(N,U0):U0,V=mc("scroller-start",l,U,E,P,0),Be=mc("scroller-end",l,U,E,P,0,V),he=V["offset"+E.op.d2];var ct=Yn(As(U,"content")||U);Ue=this.markerStart=mc("start",l,ct,E,P,he,0,M),xe=this.markerEnd=mc("end",l,ct,E,P,he,0,M),M&&(Ie=Ee.quickSetter([Ue,xe],E.a,Jt)),!k&&!(xr.length&&As(U,"fixedMarkers")===!0)&&(DA(L?dt:U),Ee.set([V,Be],{force3D:!0}),je=Ee.quickSetter(V,E.a,Jt),ye=Ee.quickSetter(Be,E.a,Jt))}if(M){var Ce=M.vars.onUpdate,Me=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Ce&&Ce.apply(M,Me||[])})}if(R.previous=function(){return Ze[Ze.indexOf(R)-1]},R.next=function(){return Ze[Ze.indexOf(R)+1]},R.revert=function(oe,ze){if(!ze)return R.kill(!0);var Fe=oe!==!1||!R.enabled,$e=wn;Fe!==R.isReverted&&(Fe&&(ue=Math.max(de(),R.scroll.rec||0),me=R.progress,ke=r&&r.progress()),Ue&&[Ue,xe,V,Be].forEach(function(Nt){return Nt.style.display=Fe?"none":"block"}),Fe&&(wn=R,R.update(Fe)),p&&(!T||!R.isActive)&&(Fe?FA(p,ge,ne):ph(p,ge,Oi(p),be)),Fe||R.update(Fe),wn=$e,R.isReverted=Fe)},R.refresh=function(oe,ze,Fe,$e){if(!((wn||!R.enabled)&&!ze)){if(p&&oe&&Vi){ln(n,"scrollEnd",VM);return}!Bn&&K&&K(R),wn=R,De.tween&&!Fe&&(De.tween.kill(),De.tween=0),_e&&_e.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Nt=J(),tt=q(),Et=M?M.duration():_r(U,E),Qt=z<=.01||!z,At=0,Tt=$e||0,ht=eo(Fe)?Fe.end:i.end,ui=i.endTrigger||f,C=eo(Fe)?Fe.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),I=R.pinnedContainer=i.pinnedContainer&&Yn(i.pinnedContainer,R),j=f&&Math.max(0,Ze.indexOf(R))||0,X=j,B,ce,Te,He,we,Pe,Ge,Ke,bt,Zt,pt,Nn,vt;for(N&&eo(Fe)&&(Nn=Ee.getProperty(V,E.p),vt=Ee.getProperty(Be,E.p));X-- >0;)Pe=Ze[X],Pe.end||Pe.refresh(0,1)||(wn=R),Ge=Pe.pin,Ge&&(Ge===f||Ge===p||Ge===I)&&!Pe.isReverted&&(Zt||(Zt=[]),Zt.unshift(Pe),Pe.revert(!0,!0)),Pe!==Ze[X]&&(j--,X--);for(Pn(C)&&(C=C(R)),C=P0(C,"start",R),Xe=k0(C,f,Nt,E,de(),Ue,V,R,tt,F,k,Et,M,R._startClamp&&"_startClamp")||(p?-.001:0),Pn(ht)&&(ht=ht(R)),mi(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(mi(C)?C.split(" ")[0]:"")+ht:(At=af(ht.substr(2),Nt),ht=mi(C)?C:(M?Ee.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Xe):Xe)+At,ui=f)),ht=P0(ht,"end",R),ve=Math.max(Xe,k0(ht||(ui?"100% 0":Et),ui,Nt,E,de()+At,xe,Be,R,tt,F,k,Et,M,R._endClamp&&"_endClamp"))||-.001,At=0,X=j;X--;)Pe=Ze[X]||{},Ge=Pe.pin,Ge&&Pe.start-Pe._pinPush<=Xe&&!M&&Pe.end>0&&(B=Pe.end-(R._startClamp?Math.max(0,Pe.start):Pe.start),(Ge===f&&Pe.start-Pe._pinPush<Xe||Ge===I)&&isNaN(C)&&(At+=B*(1-Pe.progress)),Ge===p&&(Tt+=B));if(Xe+=At,ve+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!Bn&&(R._endClamp=ve||-.001,ve=Math.min(ve,_r(U,E))),z=ve-Xe||(Xe-=.01)&&.001,Qt&&(me=Ee.utils.clamp(0,1,Ee.utils.normalize(Xe,ve,ue))),R._pinPush=Tt,Ue&&At&&(B={},B[E.a]="+="+At,I&&(B[E.p]="-="+de()),Ee.set([Ue,xe],B)),p&&!(am&&R.end>=_r(U,E)))B=Oi(p),He=E===tn,Te=de(),Ve=parseFloat(fe(E.a))+Tt,!Et&&ve>1&&(pt=(L?mt.scrollingElement||gi:U).style,pt={style:pt,value:pt["overflow"+E.a.toUpperCase()]},L&&Oi(dt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(pt.style["overflow"+E.a.toUpperCase()]="scroll")),ph(p,ge,B),ie=_c(p),ce=Lr(p,!0),Ke=k&&Is(U,He?Gn:tn)(),g?(be=[g+E.os2,z+Tt+Jt],be.t=ge,X=g===qt?jf(p,E)+z+Tt:0,X&&(be.push(E.d,X+Jt),ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=X+Jt)),Ia(be),I&&Ze.forEach(function(qe){qe.pin===I&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),k&&de(ue)):(X=jf(p,E),X&&ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=X+Jt)),k&&(we={top:ce.top+(He?Te-Xe:Ke)+Jt,left:ce.left+(He?Ke:Te-Xe)+Jt,boxSizing:"border-box",position:"fixed"},we[go]=we["max"+Qa]=Math.ceil(ce.width)+Jt,we[vo]=we["max"+G_]=Math.ceil(ce.height)+Jt,we[Ii]=we[Ii+Jl]=we[Ii+Ql]=we[Ii+eu]=we[Ii+Zl]="0",we[qt]=B[qt],we[qt+Jl]=B[qt+Jl],we[qt+Ql]=B[qt+Ql],we[qt+eu]=B[qt+eu],we[qt+Zl]=B[qt+Zl],te=zA(ne,we,T),Bn&&de(0)),r?(bt=r._initted,ch(1),r.render(r.duration(),!0,!0),ee=fe(E.a)-Ve+z+Tt,Ae=Math.abs(z-ee)>1,k&&Ae&&te.splice(te.length-2,2),r.render(0,!0,!0),bt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ch(0)):ee=z,pt&&(pt.value?pt.style["overflow"+E.a.toUpperCase()]=pt.value:pt.style.removeProperty("overflow-"+E.a));else if(f&&de()&&!M)for(ce=f.parentNode;ce&&ce!==dt;)ce._pinOffset&&(Xe-=ce._pinOffset,ve-=ce._pinOffset),ce=ce.parentNode;Zt&&Zt.forEach(function(qe){return qe.revert(!1,!0)}),R.start=Xe,R.end=ve,We=H=Bn?ue:de(),!M&&!Bn&&(We<ue&&de(ue),R.scroll.rec=0),R.revert(!1,!0),se=An(),le&&(Q=-1,le.restart(!0)),wn=0,r&&O&&(r._initted||ke)&&r.progress()!==ke&&r.progress(ke||0,!0).render(r.time(),!0,!0),(Qt||me!==R.progress||M||_||r&&!r._initted)&&(r&&!O&&(r._initted||me||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Xe<-.001&&!me?Ee.utils.normalize(Xe,ve,0):me,!0),R.progress=Qt||(We-Xe)/z===me?0:me),p&&g&&(ge._pinOffset=Math.round(R.progress*ee)),_e&&_e.invalidate(),isNaN(Nn)||(Nn-=Ee.getProperty(V,E.p),vt-=Ee.getProperty(Be,E.p),gc(V,E,Nn),gc(Ue,E,Nn-($e||0)),gc(Be,E,vt),gc(xe,E,vt-($e||0))),Qt&&!Bn&&R.update(),c&&!Bn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(de()-H)/(An()-bl)*1e3||0},R.endAnimation=function(){vl(R.callbackAnimation),r&&(_e?_e.progress(1):r.paused()?O||vl(r,R.direction<0,1):vl(r,r.reversed()))},R.labelToScroll=function(oe){return r&&r.labels&&(Xe||R.refresh()||Xe)+r.labels[oe]/r.duration()*z||0},R.getTrailing=function(oe){var ze=Ze.indexOf(R),Fe=R.direction>0?Ze.slice(0,ze).reverse():Ze.slice(ze+1);return(mi(oe)?Fe.filter(function($e){return $e.vars.preventOverlaps===oe}):Fe).filter(function($e){return R.direction>0?$e.end<=Xe:$e.start>=ve})},R.update=function(oe,ze,Fe){if(!(M&&!Fe&&!oe)){var $e=Bn===!0?ue:R.scroll(),Nt=oe?0:($e-Xe)/z,tt=Nt<0?0:Nt>1?1:Nt||0,Et=R.progress,Qt,At,Tt,ht,ui,C,I,j;if(ze&&(H=We,We=M?de():$e,y&&(ft=et,et=r&&!O?r.totalProgress():tt)),m&&p&&!wn&&!cc&&Vi&&(!tt&&Xe<$e+($e-H)/(An()-bl)*m?tt=1e-4:tt===1&&ve>$e+($e-H)/(An()-bl)*m&&(tt=.9999)),tt!==Et&&R.enabled){if(Qt=R.isActive=!!tt&&tt<1,At=!!Et&&Et<1,C=Qt!==At,ui=C||!!tt!=!!Et,R.direction=tt>Et?1:-1,R.progress=tt,ui&&!wn&&(Tt=tt&&!Et?0:tt===1?1:Et===1?2:3,O&&(ht=!C&&W[Tt+1]!=="none"&&W[Tt+1]||W[Tt],j=r&&(ht==="complete"||ht==="reset"||ht in r))),S&&(C||j)&&(j||d||!r)&&(Pn(S)?S(R):R.getTrailing(S).forEach(function(Te){return Te.endAnimation()})),O||(_e&&!wn&&!cc?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",tt,r._tTime/r._tDur):(_e.vars.totalProgress=tt,_e.invalidate().restart())):r&&r.totalProgress(tt,!!(wn&&(se||oe)))),p){if(oe&&g&&(ge.style[g+E.os2]=lt),!k)Re(Dl(Ve+ee*tt));else if(ui){if(I=!oe&&tt>Et&&ve+1>$e&&$e+1>=_r(U,E),T)if(!oe&&(Qt||I)){var X=Lr(p,!0),B=$e-Xe;z0(p,dt,X.top+(E===tn?B:0)+Jt,X.left+(E===tn?0:B)+Jt)}else z0(p,ge);Ia(Qt||I?te:ie),Ae&&tt<1&&Qt||Re(Ve+(tt===1&&!I?ee:0))}}y&&!De.tween&&!wn&&!cc&&le.restart(!0),a&&(C||x&&tt&&(tt<1||!fh))&&Ru(a.targets).forEach(function(Te){return Te.classList[Qt||x?"add":"remove"](a.className)}),o&&!O&&!oe&&o(R),ui&&!wn?(O&&(j&&(ht==="complete"?r.pause().totalProgress(1):ht==="reset"?r.restart(!0).pause():ht==="restart"?r.restart(!0):r[ht]()),o&&o(R)),(C||!fh)&&(u&&C&&zo(R,u),G[Tt]&&zo(R,G[Tt]),x&&(tt===1?R.kill(!1,1):G[Tt]=0),C||(Tt=tt===1?1:3,G[Tt]&&zo(R,G[Tt]))),b&&!Qt&&Math.abs(R.getVelocity())>(Nl(b)?b:2500)&&(vl(R.callbackAnimation),_e?_e.progress(1):vl(r,ht==="reverse"?1:!tt,1))):O&&o&&!wn&&o(R)}if(ye){var ce=M?$e/M.duration()*(M._caScrollDist||0):$e;je(ce+(V._isFlipped?1:0)),ye(ce)}Ie&&Ie(-$e/M.duration()*(M._caScrollDist||0))}},R.enable=function(oe,ze){R.enabled||(R.enabled=!0,ln(U,"resize",Ul),L||ln(U,"scroll",Ho),K&&ln(n,"refreshInit",K),oe!==!1&&(R.progress=me=0,We=H=Q=de()),ze!==!1&&R.refresh())},R.getTween=function(oe){return oe&&De?De.tween:_e},R.setPositions=function(oe,ze,Fe,$e){if(M){var Nt=M.scrollTrigger,tt=M.duration(),Et=Nt.end-Nt.start;oe=Nt.start+Et*oe/tt,ze=Nt.start+Et*ze/tt}R.refresh(!1,!1,{start:b0(oe,Fe&&!!R._startClamp),end:b0(ze,Fe&&!!R._endClamp)},$e),R.update()},R.adjustPinSpacing=function(oe){if(be&&oe){var ze=be.indexOf(E.d)+1;be[ze]=parseFloat(be[ze])+oe+Jt,be[1]=parseFloat(be[1])+oe+Jt,Ia(be)}},R.disable=function(oe,ze){if(oe!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,ze||_e&&_e.pause(),ue=0,Ne&&(Ne.uncache=1),K&&an(n,"refreshInit",K),le&&(le.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!L)){for(var Fe=Ze.length;Fe--;)if(Ze[Fe].scroller===U&&Ze[Fe]!==R)return;an(U,"resize",Ul),L||an(U,"scroll",Ho)}},R.kill=function(oe,ze){R.disable(oe,ze),_e&&!ze&&_e.kill(),l&&delete lm[l];var Fe=Ze.indexOf(R);Fe>=0&&Ze.splice(Fe,1),Fe===zn&&uf>0&&zn--,Fe=0,Ze.forEach(function($e){return $e.scroller===R.scroller&&(Fe=1)}),Fe||Bn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,oe&&r.revert({kill:!1}),ze||r.kill()),Ue&&[Ue,xe,V,Be].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),tu===R&&(tu=0),p&&(Ne&&(Ne.uncache=1),Fe=0,Ze.forEach(function($e){return $e.pin===p&&Fe++}),Fe||(Ne.spacer=0)),i.onKill&&i.onKill(R)},Ze.push(R),R.enable(!1,!1),ot&&ot(R),r&&r.add&&!z){var Le=R.update;R.update=function(){R.update=Le,rt.cache++,Xe||ve||R.refresh()},Ee.delayedCall(.01,R.update),z=.01,Xe=ve=0}else R.refresh();p&&OA()},n.register=function(i){return ra||(Ee=i||FM(),OM()&&window.document&&n.enable(),ra=Ll),ra},n.defaults=function(i){if(i)for(var r in i)pc[r]=i[r];return pc},n.disable=function(i,r){Ll=0,Ze.forEach(function(o){return o[r?"kill":"disable"](i)}),an(nt,"wheel",Ho),an(mt,"scroll",Ho),clearInterval(uc),an(mt,"touchcancel",fr),an(dt,"touchstart",fr),dc(an,mt,"pointerdown,touchstart,mousedown",L0),dc(an,mt,"pointerup,touchend,mouseup",D0),Xf.kill(),fc(an);for(var s=0;s<rt.length;s+=3)hc(an,rt[s],rt[s+1]),hc(an,rt[s],rt[s+2])},n.enable=function(){if(nt=window,mt=document,gi=mt.documentElement,dt=mt.body,Ee){if(Ru=Ee.utils.toArray,$l=Ee.utils.clamp,om=Ee.core.context||fr,ch=Ee.core.suppressOverwrites||fr,k_=nt.history.scrollRestoration||"auto",um=nt.pageYOffset||0,Ee.core.globals("ScrollTrigger",n),dt){Ll=1,Ua=document.createElement("div"),Ua.style.height="100vh",Ua.style.position="absolute",YM(),PA(),jt.register(Ee),n.isTouch=jt.isTouch,es=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sm=jt.isTouch===1,ln(nt,"wheel",Ho),F_=[nt,mt,gi,dt],Ee.matchMedia?(n.matchMedia=function(c){var d=Ee.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Ee.addEventListener("matchMediaInit",function(){XM(),W_()}),Ee.addEventListener("matchMediaRevert",function(){return WM()}),Ee.addEventListener("matchMedia",function(){uo(0,1),Lo("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return hh(),hh})):console.warn("Requires GSAP 3.11.0 or later"),hh(),ln(mt,"scroll",Ho);var i=dt.hasAttribute("style"),r=dt.style,s=r.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Lr(dt),tn.m=Math.round(a.top+tn.sc())||0,Gn.m=Math.round(a.left+Gn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(dt.setAttribute("style",""),dt.removeAttribute("style")),uc=setInterval(I0,250),Ee.delayedCall(.5,function(){return cc=0}),ln(mt,"touchcancel",fr),ln(dt,"touchstart",fr),dc(ln,mt,"pointerdown,touchstart,mousedown",L0),dc(ln,mt,"pointerup,touchend,mouseup",D0),rm=Ee.utils.checkPrefix("transform"),cf.push(rm),ra=An(),Xf=Ee.delayedCall(.2,uo).pause(),sa=[mt,"visibilitychange",function(){var c=nt.innerWidth,d=nt.innerHeight;mt.hidden?(C0=c,R0=d):(C0!==c||R0!==d)&&Ul()},mt,"DOMContentLoaded",uo,nt,"load",uo,nt,"resize",Ul],fc(ln),Ze.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)hc(an,rt[l],rt[l+1]),hc(an,rt[l],rt[l+2])}else if(mt){var u=function c(){n.enable(),mt.removeEventListener("DOMContentLoaded",c)};mt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(fh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(uc)||(uc=r)&&setInterval(I0,r),"ignoreMobileResize"in i&&(sm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(fc(an)||fc(ln,i.autoRefreshEvents||"none"),NM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Yn(i),o=rt.indexOf(s),a=Po(s);~o&&rt.splice(o,a?6:2),r&&(a?xr.unshift(nt,r,dt,r,gi,r):xr.unshift(s,r))},n.clearMatchMedia=function(i){Ze.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?Yn(i):i).getBoundingClientRect(),a=o[s?go:vo]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=Yn(i));var o=i.getBoundingClientRect(),a=o[s?go:vo],l=r==null?a/2:r in Yf?Yf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(Ze.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=bo.killAll||[];bo={},r.forEach(function(s){return s()})}},n}();Je.version="3.15.0";Je.saveStyles=function(n){return n?Ru(n).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),om())}}):di};Je.revert=function(n,e){return W_(!n,e)};Je.create=function(n,e){return new Je(n,e)};Je.refresh=function(n){return n?Ul(!0):(ra||Je.register())&&uo(!0)};Je.update=function(n){return++rt.cache&&kr(n===!0?2:0)};Je.clearScrollMemory=jM;Je.maxScroll=function(n,e){return _r(n,e?Gn:tn)};Je.getScrollFunc=function(n,e){return Is(Yn(n),e?Gn:tn)};Je.getById=function(n){return lm[n]};Je.getAll=function(){return Ze.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Vi};Je.snapDirectional=V_;Je.addEventListener=function(n,e){var t=bo[n]||(bo[n]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(n,e){var t=bo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Je.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=Ee.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),ln(Je,"refresh",function(){return s=e.batchMax()})),Ru(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Je.create(u))}),t};var H0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},mh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===gi&&n(dt,t)},vc={auto:1,scroll:1},HA=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==dt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(vc[(l=Oi(s)).overflowY]||vc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Po(s)&&(vc[(l=Oi(s)).overflowY]||vc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},$M=function(e,t,i,r){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&HA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&ln(mt,jt.eventTypes[0],V0,!1,!0)},onDisable:function(){return an(mt,jt.eventTypes[0],V0,!0)}})},GA=/(input|label|select|textarea)/i,G0,V0=function(e){var t=GA.test(e.target.tagName);(t||G0)&&(e._gsapAllow=!0,G0=t)},VA=function(e){eo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Yn(e.target)||gi,c=Ee.core.globals().ScrollSmoother,d=c&&c.get(),f=es&&(e.content&&Yn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Is(u,tn),g=Is(u,Gn),_=1,m=(jt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,h=0,v=Pn(r)?function(){return r(a)}:function(){return r||2.8},x,y,T=$M(u,e.type,!0,s),w=function(){return y=!1},M=fr,b=fr,S=function(){l=_r(u,tn),b=$l(es?1:0,l),i&&(M=$l(0,_r(u,Gn))),x=xo},E=function(){f._gsap.y=Dl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},O=function(){if(y){requestAnimationFrame(w);var N=Dl(a.deltaY/2),F=b(p.v-N);if(f&&F!==p.v+p.offset){p.offset=F-p.v;var R=Dl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",p.cacheID=rt.cache,kr()}return!0}p.offset&&E(),y=!0},U,Z,L,k,G=function(){S(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&Ee.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return es&&W.type==="touchmove"&&O()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){y=!1;var W=_;_=Dl((nt.visualViewport&&nt.visualViewport.scale||1)/m),U.pause(),W!==_&&mh(u,_>1.01?!0:i?!1:"x"),Z=g(),L=p(),S(),x=xo},e.onRelease=e.onGestureStart=function(W,N){if(p.offset&&E(),!N)k.restart(!0);else{rt.cache++;var F=v(),R,K;i&&(R=g(),K=R+F*.05*-W.velocityX/.227,F*=H0(g,R,K,_r(u,Gn)),U.vars.scrollX=M(K)),R=p(),K=R+F*.05*-W.velocityY/.227,F*=H0(p,R,K,_r(u,tn)),U.vars.scrollY=b(K),U.invalidate().duration(F).play(.01),(es&&U.vars.scrollY>=l||R>=l-1)&&Ee.to({},{onUpdate:G,duration:F})}o&&o(W)},e.onWheel=function(){U._ts&&U.pause(),An()-h>1e3&&(x=0,h=An())},e.onChange=function(W,N,F,R,K){if(xo!==x&&S(),N&&i&&g(M(R[2]===N?Z+(W.startX-W.x):g()+N-R[1])),F){p.offset&&E();var J=K[2]===F,q=J?L+W.startY-W.y:p()+F-K[1],Q=b(q);J&&q!==Q&&(L+=Q-q),p(Q)}(F||N)&&kr()},e.onEnable=function(){mh(u,i?!1:"x"),Je.addEventListener("refresh",G),ln(nt,"resize",G),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){mh(u,!0),an(nt,"resize",G),Je.removeEventListener("refresh",G),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=es,es&&!p()&&p(1),es&&Ee.ticker.add(fr),k=a._dc,U=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qM(p,p(),function(){return U.pause()})},onUpdate:kr,onComplete:k.vars.onComplete}),a};Je.sort=function(n){if(Pn(n))return Ze.sort(n);var e=nt.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),Ze.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Je.observe=function(n){return new jt(n)};Je.normalizeScroll=function(n){if(typeof n>"u")return Fn;if(n===!0&&Fn)return Fn.enable();if(n===!1){Fn&&Fn.kill(),Fn=n;return}var e=n instanceof jt?n:VA(n);return Fn&&Fn.target===e.target&&Fn.kill(),Po(e.target)&&(Fn=e),e};Je.core={_getVelocityProp:im,_inputObserver:$M,_scrollers:rt,_proxies:xr,bridge:{ss:function(){Vi||Lo("scrollStart"),Vi=An()},ref:function(){return wn}}};FM()&&Ee.registerPlugin(Je);const WA="/assets/music-DHUuY_FI.mp3";kt.registerPlugin(Je);Je.config({ignoreMobileResize:!0});kt.ticker.lagSmoothing(500,33);const hi=new Audio(WA);hi.loop=!0;hi.preload="auto";let KM=.3,is=!1;const W0=()=>KM*.7,fm=new Set,X0=()=>fm.forEach(n=>n(is)),_h={sub(n){return fm.add(n),()=>fm.delete(n)},play(){if(!is)return hi.volume=0,hi.play().then(()=>{is=!0,X0(),kt.killTweensOf(hi),kt.to(hi,{volume:W0(),duration:4,ease:"sine.inOut"})}).catch(()=>{})},stop(){is&&(is=!1,X0(),kt.killTweensOf(hi),kt.to(hi,{volume:0,duration:1.2,onComplete:()=>hi.pause()}))},toggle(){is?this.stop():this.play()},vol(n){KM=n/100,is&&(kt.killTweensOf(hi),hi.volume=W0())}};document.addEventListener("visibilitychange",()=>{document.hidden?hi.pause():is&&hi.play().catch(()=>{})});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const X_="160",XA=0,j0=1,jA=2,QM=1,YA=2,Ar=3,Os=0,si=1,Dr=2,Cs=0,Oa=1,dm=2,Y0=3,q0=4,qA=5,io=100,$A=101,KA=102,$0=103,K0=104,QA=200,ZA=201,JA=202,eC=203,hm=204,pm=205,tC=206,nC=207,iC=208,rC=209,sC=210,oC=211,aC=212,lC=213,uC=214,cC=0,fC=1,dC=2,qf=3,hC=4,pC=5,mC=6,_C=7,ZM=0,gC=1,vC=2,Rs=0,xC=1,yC=2,SC=3,MC=4,EC=5,TC=6,JM=300,Za=301,Ja=302,mm=303,_m=304,yd=306,gm=1e3,nr=1001,vm=1002,Hn=1003,Q0=1004,gh=1005,Fi=1006,wC=1007,bu=1008,Ps=1009,AC=1010,CC=1011,j_=1012,eE=1013,hs=1014,ps=1015,Lu=1016,tE=1017,nE=1018,yo=1020,RC=1021,ir=1023,PC=1024,bC=1025,So=1026,el=1027,LC=1028,iE=1029,DC=1030,rE=1031,sE=1033,vh=33776,xh=33777,yh=33778,Sh=33779,Z0=35840,J0=35841,ev=35842,tv=35843,oE=36196,nv=37492,iv=37496,rv=37808,sv=37809,ov=37810,av=37811,lv=37812,uv=37813,cv=37814,fv=37815,dv=37816,hv=37817,pv=37818,mv=37819,_v=37820,gv=37821,Mh=36492,vv=36494,xv=36495,NC=36283,yv=36284,Sv=36285,Mv=36286,aE=3e3,Mo=3001,UC=3200,IC=3201,OC=0,FC=1,ki="",pn="srgb",Xr="srgb-linear",Y_="display-p3",Sd="display-p3-linear",$f="linear",Rt="srgb",Kf="rec709",Qf="p3",Go=7680,Ev=519,kC=512,zC=513,BC=514,lE=515,HC=516,GC=517,VC=518,WC=519,Tv=35044,wv="300 es",xm=1035,Or=2e3,Zf=2001;class sl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=Math.PI/180,ym=180/Math.PI;function ku(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function $n(n,e,t){return Math.max(e,Math.min(t,n))}function XC(n,e){return(n%e+e)%e}function Th(n,e,t){return(1-t)*n+t*e}function Av(n){return(n&n-1)===0&&n!==0}function Sm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],T=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*m+a*x+l*w,s[6]=o*h+a*y+l*M,s[1]=u*_+c*v+d*T,s[4]=u*m+c*x+d*w,s[7]=u*h+c*y+d*M,s[2]=f*_+p*v+g*T,s[5]=f*m+p*x+g*w,s[8]=f*h+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wh.makeScale(e,t)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new it;function uE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jC(){const n=Jf("canvas");return n.style.display="block",n}const Cv={};function nu(n){n in Cv||(Cv[n]=!0,console.warn(n))}const Rv=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pv=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xc={[Xr]:{transfer:$f,primaries:Kf,toReference:n=>n,fromReference:n=>n},[pn]:{transfer:Rt,primaries:Kf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Sd]:{transfer:$f,primaries:Qf,toReference:n=>n.applyMatrix3(Pv),fromReference:n=>n.applyMatrix3(Rv)},[Y_]:{transfer:Rt,primaries:Qf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pv),fromReference:n=>n.applyMatrix3(Rv).convertLinearToSRGB()}},YC=new Set([Xr,Sd]),xt={enabled:!0,_workingColorSpace:Xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xc[e].toReference,r=xc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xc[n].primaries},getTransfer:function(n){return n===ki?$f:xc[n].transfer}};function Fa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ah(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vo;class cE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vo===void 0&&(Vo=Jf("canvas")),Vo.width=e.width,Vo.height=e.height;const i=Vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fa(t[i]/255)*255):t[i]=Fa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qC=0;class fE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=ku(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ch(r[o].image)):s.push(Ch(r[o]))}else s=Ch(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ch(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $C=0;class oi extends sl{constructor(e=oi.DEFAULT_IMAGE,t=oi.DEFAULT_MAPPING,i=nr,r=nr,s=Fi,o=bu,a=ir,l=Ps,u=oi.DEFAULT_ANISOTROPY,c=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$C++}),this.uuid=ku(),this.name="",this.source=new fE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(nu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Mo?pn:ki),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==JM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gm:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case vm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gm:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case vm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pn?Mo:aE}set encoding(e){nu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mo?pn:ki}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=JM;oi.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,t=0,i=0,r=1){_n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,T=(h+1)/2,w=(c+f)/4,M=(d+_)/4,b=(g+m)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KC extends sl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _n(0,0,e,t),this.scissorTest=!1,this.viewport=new _n(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(nu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mo?pn:ki),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new oi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends KC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dE extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QC extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||u!==p||c!==g){let m=1-a;const h=l*f+u*p+c*g+d*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,h*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,c=c*m+g*y,d=d*m+_*y,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=T,u*=T,c*=T,d*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*p-u*f,e[t+1]=l*g+c*f+u*d-a*p,e[t+2]=u*g+c*p+a*f-l*d,e[t+3]=c*g-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"YXZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"ZXY":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"ZYX":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"YZX":this._x=f*c*d+u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d-f*p*g;break;case"XZY":this._x=f*c*d-u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new $,bv=new zu;class Bu{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(s,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yc.copy(i.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),Sc.subVectors(this.max,yl),Wo.subVectors(e.a,yl),Xo.subVectors(e.b,yl),jo.subVectors(e.c,yl),$r.subVectors(Xo,Wo),Kr.subVectors(jo,Xo),Xs.subVectors(Wo,jo);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Xs.z,Xs.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Xs.z,0,-Xs.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Xs.y,Xs.x,0];return!Ph(t,Wo,Xo,jo,Sc)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,Wo,Xo,jo,Sc))?!1:(Mc.crossVectors($r,Kr),t=[Mc.x,Mc.y,Mc.z],Ph(t,Wo,Xo,jo,Sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new $,new $,new $,new $,new $,new $,new $,new $],Yi=new $,yc=new Bu,Wo=new $,Xo=new $,jo=new $,$r=new $,Kr=new $,Xs=new $,yl=new $,Sc=new $,Mc=new $,js=new $;function Ph(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){js.fromArray(n,s);const a=r.x*Math.abs(js.x)+r.y*Math.abs(js.y)+r.z*Math.abs(js.z),l=e.dot(js),u=t.dot(js),c=i.dot(js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ZC=new Bu,Sl=new $,bh=new $;class Md{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ZC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);const t=Sl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(bh)),this.expandByPoint(Sl.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mr=new $,Lh=new $,Ec=new $,Qr=new $,Dh=new $,Tc=new $,Nh=new $;class hE{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lh.copy(e).add(t).multiplyScalar(.5),Ec.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Lh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ec),a=Qr.dot(this.direction),l=-Qr.dot(Ec),u=Qr.lengthSq(),c=Math.abs(1-o*o);let d,f,p,g;if(c>0)if(d=o*l-a,f=o*a-l,g=s*c,d>=0)if(f>=-g)if(f<=g){const _=1/c;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lh).addScaledVector(Ec,f),p}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const i=Mr.dot(this.direction),r=Mr.dot(Mr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,r,s){Dh.subVectors(t,e),Tc.subVectors(i,e),Nh.crossVectors(Dh,Tc);let o=this.direction.dot(Nh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qr.subVectors(this.origin,e);const l=a*this.direction.dot(Tc.crossVectors(Qr,Tc));if(l<0)return null;const u=a*this.direction.dot(Dh.cross(Qr));if(u<0||l+u>o)return null;const c=-a*Qr.dot(Nh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),s=1/Yo.setFromMatrixColumn(e,1).length(),o=1/Yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+_,t[5]=o*c,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*c,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JC,e,eR)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Zr.crossVectors(i,ci),Zr.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Zr.crossVectors(i,ci)),Zr.normalize(),wc.crossVectors(ci,Zr),r[0]=Zr.x,r[4]=wc.x,r[8]=ci.x,r[1]=Zr.y,r[5]=wc.y,r[9]=ci.y,r[2]=Zr.z,r[6]=wc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],T=i[15],w=r[0],M=r[4],b=r[8],S=r[12],E=r[1],O=r[5],U=r[9],Z=r[13],L=r[2],k=r[6],G=r[10],W=r[14],N=r[3],F=r[7],R=r[11],K=r[15];return s[0]=o*w+a*E+l*L+u*N,s[4]=o*M+a*O+l*k+u*F,s[8]=o*b+a*U+l*G+u*R,s[12]=o*S+a*Z+l*W+u*K,s[1]=c*w+d*E+f*L+p*N,s[5]=c*M+d*O+f*k+p*F,s[9]=c*b+d*U+f*G+p*R,s[13]=c*S+d*Z+f*W+p*K,s[2]=g*w+_*E+m*L+h*N,s[6]=g*M+_*O+m*k+h*F,s[10]=g*b+_*U+m*G+h*R,s[14]=g*S+_*Z+m*W+h*K,s[3]=v*w+x*E+y*L+T*N,s[7]=v*M+x*O+y*k+T*F,s[11]=v*b+x*U+y*G+T*R,s[15]=v*S+x*Z+y*W+T*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*u-_*f*u+_*l*p-a*m*p-d*l*h+a*f*h,x=g*f*u-c*m*u-g*l*p+o*m*p+c*l*h-o*f*h,y=c*_*u-g*d*u+g*a*p-o*_*p-c*a*h+o*d*h,T=g*d*l-c*_*l-g*a*f+o*_*f+c*a*m-o*d*m,w=t*v+i*x+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*h+t*f*h)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(g*d*s-c*_*s-g*i*p+t*_*p+c*i*h-t*d*h)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*_*r-g*d*r+g*i*f-t*_*f-c*i*m+t*d*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,g=s*d,_=o*c,m=o*d,h=a*d,v=l*u,x=l*c,y=l*d,T=i.x,w=i.y,M=i.z;return r[0]=(1-(_+h))*T,r[1]=(p+y)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yo.set(r[0],r[1],r[2]).length();const o=Yo.set(r[4],r[5],r[6]).length(),a=Yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qi.copy(this);const u=1/s,c=1/o,d=1/a;return qi.elements[0]*=u,qi.elements[1]*=u,qi.elements[2]*=u,qi.elements[4]*=c,qi.elements[5]*=c,qi.elements[6]*=c,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Or){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Or)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Zf)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Or){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let g,_;if(a===Or)g=(o+s)*d,_=-2*d;else if(a===Zf)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yo=new $,qi=new fn,JC=new $(0,0,0),eR=new $(1,1,1),Zr=new $,wc=new $,ci=new $,Lv=new fn,Dv=new zu;class Ed{constructor(e=0,t=0,i=0,r=Ed.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ed.DEFAULT_ORDER="XYZ";class pE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tR=0;const Nv=new $,qo=new zu,Er=new fn,Ac=new $,Ml=new $,nR=new $,iR=new zu,Uv=new $(1,0,0),Iv=new $(0,1,0),Ov=new $(0,0,1),rR={type:"added"},sR={type:"removed"};class ai extends sl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=ku(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new $,t=new Ed,i=new zu,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fn},normalMatrix:{value:new it}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(Uv,e)}rotateY(e){return this.rotateOnAxis(Iv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,t){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uv,e)}translateY(e){return this.translateOnAxis(Iv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ac.copy(e):Ac.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Ml,Ac,this.up):Er.lookAt(Ac,Ml,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),qo.setFromRotationMatrix(Er),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,nR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,iR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ai.DEFAULT_UP=new $(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new $,Tr=new $,Uh=new $,wr=new $,$o=new $,Ko=new $,Fv=new $,Ih=new $,Oh=new $,Fh=new $;let Cc=!1;class er{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$i.subVectors(e,t),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$i.subVectors(r,t),Tr.subVectors(i,t),Uh.subVectors(e,t);const o=$i.dot($i),a=$i.dot(Tr),l=$i.dot(Uh),u=Tr.dot(Tr),c=Tr.dot(Uh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getUV(e,t,i,r,s,o,a,l){return Cc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wr.x),l.addScaledVector(o,wr.y),l.addScaledVector(a,wr.z),l)}static isFrontFacing(e,t,i,r){return $i.subVectors(i,t),Tr.subVectors(e,t),$i.cross(Tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),$i.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Cc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cc=!0),er.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return er.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$o.subVectors(r,i),Ko.subVectors(s,i),Ih.subVectors(e,i);const l=$o.dot(Ih),u=Ko.dot(Ih);if(l<=0&&u<=0)return t.copy(i);Oh.subVectors(e,r);const c=$o.dot(Oh),d=Ko.dot(Oh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector($o,o);Fh.subVectors(e,s);const p=$o.dot(Fh),g=Ko.dot(Fh);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Ko,a);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Fv.subVectors(s,r),a=(d-c)/(d-c+(p-g)),t.copy(r).addScaledVector(Fv,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector($o,o).addScaledVector(Ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _t{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=XC(e,1),t=$n(t,0,1),i=$n(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=kh(o,s,e+1/3),this.g=kh(o,s,e),this.b=kh(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=mE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=Ah(e.r),this.g=Ah(e.g),this.b=Ah(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return xt.fromWorkingColorSpace(Tn.copy(this),e),Math.round($n(Tn.r*255,0,255))*65536+Math.round($n(Tn.g*255,0,255))*256+Math.round($n(Tn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=pn){xt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(Rc);const i=Th(Jr.h,Rc.h,t),r=Th(Jr.s,Rc.s,t),s=Th(Jr.l,Rc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new _t;_t.NAMES=mE;let oR=0;class Hu extends sl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=ku(),this.name="",this.type="Material",this.blending=Oa,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hm,this.blendDst=pm,this.blendEquation=io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=qf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oa&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hm&&(i.blendSrc=this.blendSrc),this.blendDst!==pm&&(i.blendDst=this.blendDst),this.blendEquation!==io&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ev&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _E extends Hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ZM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new $,Pc=new yt;class or{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ps,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pc.fromBufferAttribute(this,t),Pc.applyMatrix3(e),this.setXY(t,Pc.x,Pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xl(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xl(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xl(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),r=jn(r,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tv&&(e.usage=this.usage),e}}class gE extends or{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vE extends or{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Eo extends or{constructor(e,t,i){super(new Float32Array(e),t,i)}}let aR=0;const Li=new fn,zh=new ai,Qo=new $,fi=new Bu,El=new Bu,on=new $;class Yr extends sl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=ku(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uE(e)?vE:gE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Eo(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Md);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];El.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(fi.min,El.min),fi.expandByPoint(on),on.addVectors(fi.max,El.max),fi.expandByPoint(on)):(fi.expandByPoint(El.min),fi.expandByPoint(El.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)on.fromBufferAttribute(a,u),l&&(Qo.fromBufferAttribute(e,u),on.add(Qo)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new or(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new $,c[E]=new $;const d=new $,f=new $,p=new $,g=new yt,_=new yt,m=new yt,h=new $,v=new $;function x(E,O,U){d.fromArray(r,E*3),f.fromArray(r,O*3),p.fromArray(r,U*3),g.fromArray(o,E*2),_.fromArray(o,O*2),m.fromArray(o,U*2),f.sub(d),p.sub(d),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Z),v.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Z),u[E].add(h),u[O].add(h),u[U].add(h),c[E].add(v),c[O].add(v),c[U].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,O=y.length;E<O;++E){const U=y[E],Z=U.start,L=U.count;for(let k=Z,G=Z+L;k<G;k+=3)x(i[k+0],i[k+1],i[k+2])}const T=new $,w=new $,M=new $,b=new $;function S(E){M.fromArray(s,E*3),b.copy(M);const O=u[E];T.copy(O),T.sub(M.multiplyScalar(M.dot(O))).normalize(),w.crossVectors(b,O);const Z=w.dot(c[E])<0?-1:1;l[E*4]=T.x,l[E*4+1]=T.y,l[E*4+2]=T.z,l[E*4+3]=Z}for(let E=0,O=y.length;E<O;++E){const U=y[E],Z=U.start,L=U.count;for(let k=Z,G=Z+L;k<G;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new or(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,u=new $,c=new $,d=new $;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)f[g++]=u[p++]}return new or(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kv=new fn,Ys=new hE,bc=new Md,zv=new $,Zo=new $,Jo=new $,ea=new $,Bh=new $,Lc=new $,Dc=new yt,Nc=new yt,Uc=new yt,Bv=new $,Hv=new $,Gv=new $,Ic=new $,Oc=new $;class ms extends ai{constructor(e=new Yr,t=new _E){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Lc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Bh.fromBufferAttribute(d,e),o?Lc.addScaledVector(Bh,c):Lc.addScaledVector(Bh.sub(t),c))}t.add(Lc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(bc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(bc,zv)===null||Ys.origin.distanceToSquared(zv)>(e.far-e.near)**2))&&(kv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(kv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=a.getX(y),M=a.getX(y+1),b=a.getX(y+2);r=Fc(this,h,e,i,u,c,d,w,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Fc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=y,M=y+1,b=y+2;r=Fc(this,h,e,i,u,c,d,w,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,x=m+1,y=m+2;r=Fc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function lR(n,e,t,i,r,s,o,a){let l;if(e.side===si?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Os,a),l===null)return null;Oc.copy(a),Oc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Oc);return u<t.near||u>t.far?null:{distance:u,point:Oc.clone(),object:n}}function Fc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zo),n.getVertexPosition(l,Jo),n.getVertexPosition(u,ea);const c=lR(n,e,t,i,Zo,Jo,ea,Ic);if(c){r&&(Dc.fromBufferAttribute(r,a),Nc.fromBufferAttribute(r,l),Uc.fromBufferAttribute(r,u),c.uv=er.getInterpolation(Ic,Zo,Jo,ea,Dc,Nc,Uc,new yt)),s&&(Dc.fromBufferAttribute(s,a),Nc.fromBufferAttribute(s,l),Uc.fromBufferAttribute(s,u),c.uv1=er.getInterpolation(Ic,Zo,Jo,ea,Dc,Nc,Uc,new yt),c.uv2=c.uv1),o&&(Bv.fromBufferAttribute(o,a),Hv.fromBufferAttribute(o,l),Gv.fromBufferAttribute(o,u),c.normal=er.getInterpolation(Ic,Zo,Jo,ea,Bv,Hv,Gv,new $),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new $,materialIndex:0};er.getNormal(Zo,Jo,ea,d.normal),c.face=d}return c}class Gu extends Yr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Eo(u,3)),this.setAttribute("normal",new Eo(c,3)),this.setAttribute("uv",new Eo(d,2));function g(_,m,h,v,x,y,T,w,M,b,S){const E=y/M,O=T/b,U=y/2,Z=T/2,L=w/2,k=M+1,G=b+1;let W=0,N=0;const F=new $;for(let R=0;R<G;R++){const K=R*O-Z;for(let J=0;J<k;J++){const q=J*E-U;F[_]=q*v,F[m]=K*x,F[h]=L,u.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[h]=w>0?1:-1,c.push(F.x,F.y,F.z),d.push(J/M),d.push(1-R/b),W+=1}}for(let R=0;R<b;R++)for(let K=0;K<M;K++){const J=f+K+k*R,q=f+K+k*(R+1),Q=f+(K+1)+k*(R+1),se=f+(K+1)+k*R;l.push(J,q,se),l.push(q,Q,se),N+=6}a.addGroup(p,N,S),p+=N,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=tl(n[t]);for(const r in i)e[r]=i[r]}return e}function uR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xE(n){return n.getRenderTarget()===null?n.outputColorSpace:xt.workingColorSpace}const cR={clone:tl,merge:On};var fR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class No extends Hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fR,this.fragmentShader=dR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tl(e.uniforms),this.uniformsGroups=uR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yE extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tr extends yE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ym*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ym*2*Math.atan(Math.tan(Eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ta=-90,na=1;class hR extends ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tr(ta,na,e,t);r.layers=this.layers,this.add(r);const s=new tr(ta,na,e,t);s.layers=this.layers,this.add(s);const o=new tr(ta,na,e,t);o.layers=this.layers,this.add(o);const a=new tr(ta,na,e,t);a.layers=this.layers,this.add(a);const l=new tr(ta,na,e,t);l.layers=this.layers,this.add(l);const u=new tr(ta,na,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Or)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class SE extends oi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Za,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pR extends Do{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(nu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mo?pn:ki),this.texture=new SE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gu(5,5,5),s=new No({name:"CubemapFromEquirect",uniforms:tl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:Cs});s.uniforms.tEquirect.value=t;const o=new ms(r,s),a=t.minFilter;return t.minFilter===bu&&(t.minFilter=Fi),new hR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Hh=new $,mR=new $,_R=new it;class to{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hh.subVectors(i,t).cross(mR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_R.getNormalMatrix(e),r=this.coplanarPoint(Hh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Md,kc=new $;class ME{constructor(e=new to,t=new to,i=new to,r=new to,s=new to,o=new to){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Or){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-h).normalize(),i[1].setComponents(l+s,f+u,m+p,y+h).normalize(),i[2].setComponents(l+o,f+c,m+g,y+v).normalize(),i[3].setComponents(l-o,f-c,m-g,y-v).normalize(),i[4].setComponents(l-a,f-d,m-_,y-x).normalize(),t===Or)i[5].setComponents(l+a,f+d,m+_,y+x).normalize();else if(t===Zf)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(kc.x=r.normal.x>0?e.max.x:e.min.x,kc.y=r.normal.y>0?e.max.y:e.min.y,kc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function EE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gR(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const f=c.array,p=c._updateRange,g=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const h=g[_];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class q_ extends Yr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const y=x*d-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),T=v+1+u*(h+1),w=v+1+u*h;p.push(x,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Eo(g,3)),this.setAttribute("normal",new Eo(_,3)),this.setAttribute("uv",new Eo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new q_(e.width,e.height,e.widthSegments,e.heightSegments)}}var vR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xR=`#ifdef USE_ALPHAHASH
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
#endif`,yR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ER=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TR=`#ifdef USE_AOMAP
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
#endif`,wR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,CR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,RR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LR=`#ifdef USE_IRIDESCENCE
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
#endif`,DR=`#ifdef USE_BUMPMAP
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
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HR=`#define PI 3.141592653589793
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
} // validated`,GR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VR=`vec3 transformedNormal = objectNormal;
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
#endif`,WR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qR="gl_FragColor = linearToOutputTexel( gl_FragColor );",$R=`
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
}`,KR=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,QR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eP=`#ifdef USE_ENVMAP
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
#endif`,tP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sP=`#ifdef USE_GRADIENTMAP
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
}`,oP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cP=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,fP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,dP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_P=`PhysicalMaterial material;
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
#endif`,gP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,vP=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,xP=`#if defined( RE_IndirectDiffuse )
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
#endif`,yP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RP=`#if defined( USE_POINTS_UV )
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
#endif`,PP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,NP=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,UP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,IP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BP=`#ifdef USE_NORMALMAP
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
#endif`,HP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$P=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r2=`#ifdef USE_SKINNING
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
#endif`,s2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o2=`#ifdef USE_SKINNING
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
#endif`,a2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c2=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f2=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d2=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v2=`uniform sampler2D t2D;
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`#include <common>
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
}`,T2=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,w2=`#define DISTANCE
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
}`,A2=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L2=`#include <common>
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
}`,D2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,N2=`#define LAMBERT
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
}`,U2=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,I2=`#define MATCAP
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
}`,O2=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,F2=`#define NORMAL
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
}`,k2=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z2=`#define PHONG
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
}`,B2=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,H2=`#define STANDARD
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
}`,G2=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,V2=`#define TOON
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
}`,W2=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,X2=`uniform float size;
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
}`,j2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Y2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,q2=`uniform vec3 color;
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
}`,$2=`uniform float rotation;
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
}`,K2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qe={alphahash_fragment:vR,alphahash_pars_fragment:xR,alphamap_fragment:yR,alphamap_pars_fragment:SR,alphatest_fragment:MR,alphatest_pars_fragment:ER,aomap_fragment:TR,aomap_pars_fragment:wR,batching_pars_vertex:AR,batching_vertex:CR,begin_vertex:RR,beginnormal_vertex:PR,bsdfs:bR,iridescence_fragment:LR,bumpmap_pars_fragment:DR,clipping_planes_fragment:NR,clipping_planes_pars_fragment:UR,clipping_planes_pars_vertex:IR,clipping_planes_vertex:OR,color_fragment:FR,color_pars_fragment:kR,color_pars_vertex:zR,color_vertex:BR,common:HR,cube_uv_reflection_fragment:GR,defaultnormal_vertex:VR,displacementmap_pars_vertex:WR,displacementmap_vertex:XR,emissivemap_fragment:jR,emissivemap_pars_fragment:YR,colorspace_fragment:qR,colorspace_pars_fragment:$R,envmap_fragment:KR,envmap_common_pars_fragment:QR,envmap_pars_fragment:ZR,envmap_pars_vertex:JR,envmap_physical_pars_fragment:fP,envmap_vertex:eP,fog_vertex:tP,fog_pars_vertex:nP,fog_fragment:iP,fog_pars_fragment:rP,gradientmap_pars_fragment:sP,lightmap_fragment:oP,lightmap_pars_fragment:aP,lights_lambert_fragment:lP,lights_lambert_pars_fragment:uP,lights_pars_begin:cP,lights_toon_fragment:dP,lights_toon_pars_fragment:hP,lights_phong_fragment:pP,lights_phong_pars_fragment:mP,lights_physical_fragment:_P,lights_physical_pars_fragment:gP,lights_fragment_begin:vP,lights_fragment_maps:xP,lights_fragment_end:yP,logdepthbuf_fragment:SP,logdepthbuf_pars_fragment:MP,logdepthbuf_pars_vertex:EP,logdepthbuf_vertex:TP,map_fragment:wP,map_pars_fragment:AP,map_particle_fragment:CP,map_particle_pars_fragment:RP,metalnessmap_fragment:PP,metalnessmap_pars_fragment:bP,morphcolor_vertex:LP,morphnormal_vertex:DP,morphtarget_pars_vertex:NP,morphtarget_vertex:UP,normal_fragment_begin:IP,normal_fragment_maps:OP,normal_pars_fragment:FP,normal_pars_vertex:kP,normal_vertex:zP,normalmap_pars_fragment:BP,clearcoat_normal_fragment_begin:HP,clearcoat_normal_fragment_maps:GP,clearcoat_pars_fragment:VP,iridescence_pars_fragment:WP,opaque_fragment:XP,packing:jP,premultiplied_alpha_fragment:YP,project_vertex:qP,dithering_fragment:$P,dithering_pars_fragment:KP,roughnessmap_fragment:QP,roughnessmap_pars_fragment:ZP,shadowmap_pars_fragment:JP,shadowmap_pars_vertex:e2,shadowmap_vertex:t2,shadowmask_pars_fragment:n2,skinbase_vertex:i2,skinning_pars_vertex:r2,skinning_vertex:s2,skinnormal_vertex:o2,specularmap_fragment:a2,specularmap_pars_fragment:l2,tonemapping_fragment:u2,tonemapping_pars_fragment:c2,transmission_fragment:f2,transmission_pars_fragment:d2,uv_pars_fragment:h2,uv_pars_vertex:p2,uv_vertex:m2,worldpos_vertex:_2,background_vert:g2,background_frag:v2,backgroundCube_vert:x2,backgroundCube_frag:y2,cube_vert:S2,cube_frag:M2,depth_vert:E2,depth_frag:T2,distanceRGBA_vert:w2,distanceRGBA_frag:A2,equirect_vert:C2,equirect_frag:R2,linedashed_vert:P2,linedashed_frag:b2,meshbasic_vert:L2,meshbasic_frag:D2,meshlambert_vert:N2,meshlambert_frag:U2,meshmatcap_vert:I2,meshmatcap_frag:O2,meshnormal_vert:F2,meshnormal_frag:k2,meshphong_vert:z2,meshphong_frag:B2,meshphysical_vert:H2,meshphysical_frag:G2,meshtoon_vert:V2,meshtoon_frag:W2,points_vert:X2,points_frag:j2,shadow_vert:Y2,shadow_frag:q2,sprite_vert:$2,sprite_frag:K2},pe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},dr={basic:{uniforms:On([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:On([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:On([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:On([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:On([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:On([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:On([pe.points,pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:On([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:On([pe.common,pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:On([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:On([pe.sprite,pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:On([pe.common,pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:On([pe.lights,pe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};dr.physical={uniforms:On([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const zc={r:0,b:0,g:0};function Q2(n,e,t,i,r,s,o){const a=new _t(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function g(m,h){let v=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===yd)?(c===void 0&&(c=new ms(new Gu(1,1,1),new No({name:"BackgroundCubeMaterial",uniforms:tl(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=xt.getTransfer(x.colorSpace)!==Rt,(d!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ms(new q_(2,2),new No({name:"BackgroundMaterial",uniforms:tl(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=xt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,h){m.getRGB(zc,xE(n)),i.buffers.color.setClear(zc.r,zc.g,zc.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Z2(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(L,k,G,W,N){let F=!1;if(o){const R=_(W,G,k);u!==R&&(u=R,p(u.object)),F=h(L,W,G,N),F&&v(L,W,G,N)}else{const R=k.wireframe===!0;(u.geometry!==W.id||u.program!==G.id||u.wireframe!==R)&&(u.geometry=W.id,u.program=G.id,u.wireframe=R,F=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,b(L,k,G,W),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,k,G){const W=G.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let F=N[k.id];F===void 0&&(F={},N[k.id]=F);let R=F[W];return R===void 0&&(R=m(f()),F[W]=R),R}function m(L){const k=[],G=[],W=[];for(let N=0;N<r;N++)k[N]=0,G[N]=0,W[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:W,object:L,attributes:{},index:null}}function h(L,k,G,W){const N=u.attributes,F=k.attributes;let R=0;const K=G.getAttributes();for(const J in K)if(K[J].location>=0){const Q=N[J];let se=F[J];if(se===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;R++}return u.attributesNum!==R||u.index!==W}function v(L,k,G,W){const N={},F=k.attributes;let R=0;const K=G.getAttributes();for(const J in K)if(K[J].location>=0){let Q=F[J];Q===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),N[J]=se,R++}u.attributes=N,u.attributesNum=R,u.index=W}function x(){const L=u.newAttributes;for(let k=0,G=L.length;k<G;k++)L[k]=0}function y(L){T(L,0)}function T(L,k){const G=u.newAttributes,W=u.enabledAttributes,N=u.attributeDivisors;G[L]=1,W[L]===0&&(n.enableVertexAttribArray(L),W[L]=1),N[L]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),N[L]=k)}function w(){const L=u.newAttributes,k=u.enabledAttributes;for(let G=0,W=k.length;G<W;G++)k[G]!==L[G]&&(n.disableVertexAttribArray(G),k[G]=0)}function M(L,k,G,W,N,F,R){R===!0?n.vertexAttribIPointer(L,k,G,N,F):n.vertexAttribPointer(L,k,G,W,N,F)}function b(L,k,G,W){if(i.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=W.attributes,F=G.getAttributes(),R=k.defaultAttributeValues;for(const K in F){const J=F[K];if(J.location>=0){let q=N[K];if(q===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const Q=q.normalized,se=q.itemSize,me=t.get(q);if(me===void 0)continue;const de=me.buffer,De=me.type,Ne=me.bytesPerElement,Oe=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||q.gpuType===eE);if(q.isInterleavedBufferAttribute){const We=q.data,H=We.stride,Xe=q.offset;if(We.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)T(J.location+ve,We.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ve=0;ve<J.locationSize;ve++)y(J.location+ve);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ve=0;ve<J.locationSize;ve++)M(J.location+ve,se/J.locationSize,De,Q,H*Ne,(Xe+se/J.locationSize*ve)*Ne,Oe)}else{if(q.isInstancedBufferAttribute){for(let We=0;We<J.locationSize;We++)T(J.location+We,q.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let We=0;We<J.locationSize;We++)y(J.location+We);n.bindBuffer(n.ARRAY_BUFFER,de);for(let We=0;We<J.locationSize;We++)M(J.location+We,se/J.locationSize,De,Q,se*Ne,se/J.locationSize*We*Ne,Oe)}}else if(R!==void 0){const Q=R[K];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(J.location,Q);break;case 3:n.vertexAttrib3fv(J.location,Q);break;case 4:n.vertexAttrib4fv(J.location,Q);break;default:n.vertexAttrib1fv(J.location,Q)}}}}w()}function S(){U();for(const L in a){const k=a[L];for(const G in k){const W=k[G];for(const N in W)g(W[N].object),delete W[N];delete k[G]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const G in k){const W=k[G];for(const N in W)g(W[N].object),delete W[N];delete k[G]}delete a[L.id]}function O(L){for(const k in a){const G=a[k];if(G[L.id]===void 0)continue;const W=G[L.id];for(const N in W)g(W[N].object),delete W[N];delete G[L.id]}}function U(){Z(),c=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function J2(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,d,f),t.update(d,s,f)}function u(c,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(c[g],d[g]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function eb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),T=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function tb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new to,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(g,f,x,p);for(let T=0;T!==x;++T)y[T]=t[T];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function nb(n){let e=new WeakMap;function t(o,a){return a===mm?o.mapping=Za:a===_m&&(o.mapping=Ja),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mm||a===_m)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new pR(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class TE extends yE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sa=4,Vv=[.125,.215,.35,.446,.526,.582],ro=20,Gh=new TE,Wv=new _t;let Vh=null,Wh=0,Xh=0;const no=(1+Math.sqrt(5))/2,ia=1/no,Xv=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,no,ia),new $(0,no,-ia),new $(ia,0,no),new $(-ia,0,no),new $(no,ia,0),new $(-no,ia,0)];class jv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Wh,Xh),e.scissorTest=!1,Bc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Za||e.mapping===Ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Lu,format:ir,colorSpace:Xr,depthBuffer:!1},r=Yv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ib(s)),this._blurMaterial=rb(s,e,t)}return r}_compileMaterial(e){const t=new ms(this._lodPlanes[0],e);this._renderer.compile(t,Gh)}_sceneToCubeUV(e,t,i,r){const a=new tr(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Wv),c.toneMapping=Rs,c.autoClear=!1;const p=new _E({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),g=new ms(new Gu,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Wv),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Bc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Za||e.mapping===Ja;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ms(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xv[(r-1)%Xv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ms(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ro-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):ro;m>ro&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ro}`);const h=[];let v=0;for(let M=0;M<ro;++M){const b=M/_,S=Math.exp(-b*b/2);h.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-Sa?r-x+Sa:0),w=4*(this._cubeSize-y);Bc(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Gh)}}function ib(n){const e=[],t=[],i=[];let r=n;const s=n-Sa+1+Vv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Sa?l=Vv[o-n+Sa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,b=w>2?0:-1,S=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];v.set(S,_*g*w),x.set(f,m*g*w);const E=[w,w,w,w,w,w];y.set(E,h*g*w)}const T=new Yr;T.setAttribute("position",new or(v,_)),T.setAttribute("uv",new or(x,m)),T.setAttribute("faceIndex",new or(y,h)),e.push(T),r>Sa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yv(n,e,t){const i=new Do(n,e,t);return i.texture.mapping=yd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rb(n,e,t){const i=new Float32Array(ro),r=new $(0,1,0);return new No({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$_(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function qv(){return new No({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$_(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function $v(){return new No({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function $_(){return`

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
	`}function sb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===mm||l===_m,c=l===Za||l===Ja;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new jv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new jv(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ob(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ab(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],M=v[x+2];f.push(T,w,w,M,M,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,M=x+2;f.push(T,w,w,M,M,T)}}else return;const m=new(uE(f)?vE:gE)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function lb(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function d(p,g,_){if(_===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,_),t.update(g,s,_)}function f(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<_;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let h=0;for(let v=0;v<_;v++)h+=g[v];t.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function ub(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cb(n,e){return n[0]-e[0]}function fb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function db(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _n,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let k=function(){Z.dispose(),s.delete(c),c.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let E=c.attributes.position.count*S,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*O*4*_),Z=new dE(U,E,O,_);Z.type=ps,Z.needsUpdate=!0;const L=S*4;for(let G=0;G<_;G++){const W=w[G],N=M[G],F=b[G],R=E*O*4*G;for(let K=0;K<W.count;K++){const J=K*L;x===!0&&(o.fromBufferAttribute(W,K),U[R+J+0]=o.x,U[R+J+1]=o.y,U[R+J+2]=o.z,U[R+J+3]=0),y===!0&&(o.fromBufferAttribute(N,K),U[R+J+4]=o.x,U[R+J+5]=o.y,U[R+J+6]=o.z,U[R+J+7]=0),T===!0&&(o.fromBufferAttribute(F,K),U[R+J+8]=o.x,U[R+J+9]=o.y,U[R+J+10]=o.z,U[R+J+11]=F.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new yt(E,O)},s.set(c,m),c.addEventListener("dispose",k)}let h=0;for(let x=0;x<f.length;x++)h+=f[x];const v=c.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[c.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<g;y++){const T=_[y];T[0]=y,T[1]=f[y]}_.sort(fb);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(cb);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],M=T[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),h&&c.getAttribute("morphNormal"+y)!==h[w]&&c.setAttribute("morphNormal"+y,h[w]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),h&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function hb(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class wE extends oi{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:So,c!==So&&c!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===So&&(i=hs),i===void 0&&c===el&&(i=yo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const AE=new oi,CE=new wE(1,1);CE.compareFunction=lE;const RE=new dE,PE=new QC,bE=new SE,Kv=[],Qv=[],Zv=new Float32Array(16),Jv=new Float32Array(9),ex=new Float32Array(4);function ol(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Kv[r];if(s===void 0&&(s=new Float32Array(r),Kv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Td(n,e){let t=Qv[e];t===void 0&&(t=new Int32Array(e),Qv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;ex.set(i),n.uniformMatrix2fv(this.addr,!1,ex),sn(t,i)}}function xb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Jv.set(i),n.uniformMatrix3fv(this.addr,!1,Jv),sn(t,i)}}function yb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Zv.set(i),n.uniformMatrix4fv(this.addr,!1,Zv),sn(t,i)}}function Sb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function Cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function Pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?CE:AE;t.setTexture2D(e||s,r)}function bb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||PE,r)}function Lb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bE,r)}function Db(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||RE,r)}function Nb(n){switch(n){case 5126:return pb;case 35664:return mb;case 35665:return _b;case 35666:return gb;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return wb;case 36294:return Ab;case 36295:return Cb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}function Ub(n,e){n.uniform1fv(this.addr,e)}function Ib(n,e){const t=ol(e,this.size,2);n.uniform2fv(this.addr,t)}function Ob(n,e){const t=ol(e,this.size,3);n.uniform3fv(this.addr,t)}function Fb(n,e){const t=ol(e,this.size,4);n.uniform4fv(this.addr,t)}function kb(n,e){const t=ol(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zb(n,e){const t=ol(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bb(n,e){const t=ol(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hb(n,e){n.uniform1iv(this.addr,e)}function Gb(n,e){n.uniform2iv(this.addr,e)}function Vb(n,e){n.uniform3iv(this.addr,e)}function Wb(n,e){n.uniform4iv(this.addr,e)}function Xb(n,e){n.uniform1uiv(this.addr,e)}function jb(n,e){n.uniform2uiv(this.addr,e)}function Yb(n,e){n.uniform3uiv(this.addr,e)}function qb(n,e){n.uniform4uiv(this.addr,e)}function $b(n,e,t){const i=this.cache,r=e.length,s=Td(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||AE,s[o])}function Kb(n,e,t){const i=this.cache,r=e.length,s=Td(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||PE,s[o])}function Qb(n,e,t){const i=this.cache,r=e.length,s=Td(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bE,s[o])}function Zb(n,e,t){const i=this.cache,r=e.length,s=Td(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||RE,s[o])}function Jb(n){switch(n){case 5126:return Ub;case 35664:return Ib;case 35665:return Ob;case 35666:return Fb;case 35674:return kb;case 35675:return zb;case 35676:return Bb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Vb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return jb;case 36295:return Yb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return Zb}}class eL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}}class tL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class nL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function tx(n,e){n.seq.push(e),n.map[e.id]=e}function iL(n,e,t){const i=n.name,r=i.length;for(jh.lastIndex=0;;){const s=jh.exec(i),o=jh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){tx(t,u===void 0?new eL(a,n,e):new tL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new nL(a),tx(t,d)),t=d}}}class df{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function nx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rL=37297;let sL=0;function oL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function aL(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===Qf&&t===Kf?i="LinearDisplayP3ToLinearSRGB":e===Kf&&t===Qf&&(i="LinearSRGBToLinearDisplayP3"),n){case Xr:case Sd:return[i,"LinearTransferOETF"];case pn:case Y_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ix(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oL(n.getShaderSource(e),o)}else return r}function lL(n,e){const t=aL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uL(n,e){let t;switch(e){case xC:t="Linear";break;case yC:t="Reinhard";break;case SC:t="OptimizedCineon";break;case MC:t="ACESFilmic";break;case TC:t="AgX";break;case EC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ma).join(`
`)}function fL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ma).join(`
`)}function dL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ma(n){return n!==""}function rx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mm(n){return n.replace(pL,_L)}const mL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _L(n,e){let t=Qe[e];if(t===void 0){const i=mL.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mm(t)}const gL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(n){return n.replace(gL,vL)}function vL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ax(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===QM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===YA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function yL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Za:case Ja:e="ENVMAP_TYPE_CUBE";break;case yd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ja:e="ENVMAP_MODE_REFRACTION";break}return e}function ML(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ZM:e="ENVMAP_BLENDING_MULTIPLY";break;case gC:e="ENVMAP_BLENDING_MIX";break;case vC:e="ENVMAP_BLENDING_ADD";break}return e}function EL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xL(t),u=yL(t),c=SL(t),d=ML(t),f=EL(t),p=t.isWebGL2?"":cL(t),g=fL(t),_=dL(s),m=r.createProgram();let h,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),v.length>0&&(v+=`
`)):(h=[ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),v=[p,ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Rs?uL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,lL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),o=Mm(o),o=rx(o,t),o=sx(o,t),a=Mm(a),a=rx(a,t),a=sx(a,t),o=ox(o),a=ox(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+h+o,T=x+v+a,w=nx(r,r.VERTEX_SHADER,y),M=nx(r,r.FRAGMENT_SHADER,T);r.attachShader(m,w),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function b(U){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),k=r.getShaderInfoLog(M).trim();let G=!0,W=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,M);else{const N=ix(r,w,"vertex"),F=ix(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+N+`
`+F)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||k==="")&&(W=!1);W&&(U.diagnostics={runnable:G,programLog:Z,vertexShader:{log:L,prefix:h},fragmentShader:{log:k,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new df(r,m),E=hL(r,m)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,rL)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sL++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}let wL=0;class AL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CL(e),t.set(e,i)),i}}class CL{constructor(e){this.id=wL++,this.code=e,this.usedTimes=0}}function RL(n,e,t,i,r,s,o){const a=new pE,l=new AL,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,E,O,U,Z){const L=U.fog,k=Z.geometry,G=S.isMeshStandardMaterial?U.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),N=W&&W.mapping===yd?W.image.height:null,F=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,K=R!==void 0?R.length:0;let J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let q,Q,se,me;if(F){const Me=dr[F];q=Me.vertexShader,Q=Me.fragmentShader}else q=S.vertexShader,Q=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const de=n.getRenderTarget(),De=Z.isInstancedMesh===!0,Ne=Z.isBatchedMesh===!0,Oe=!!S.map,We=!!S.matcap,H=!!W,Xe=!!S.aoMap,ve=!!S.lightMap,Ue=!!S.bumpMap,xe=!!S.normalMap,V=!!S.displacementMap,Be=!!S.emissiveMap,P=!!S.metalnessMap,A=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,ie=S.sheen>0,ge=S.transmission>0,he=z&&!!S.anisotropyMap,fe=ne&&!!S.clearcoatMap,Re=ne&&!!S.clearcoatNormalMap,Ve=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,lt=te&&!!S.iridescenceThicknessMap,be=ie&&!!S.sheenColorMap,je=ie&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ye=!!S.specularColorMap,Ye=!!S.specularIntensityMap,et=ge&&!!S.transmissionMap,ft=ge&&!!S.thicknessMap,_e=!!S.gradientMap,ae=!!S.alphaMap,D=S.alphaTest>0,le=!!S.alphaHash,ue=!!S.extensions,ke=!!k.attributes.uv1,Ie=!!k.attributes.uv2,ot=!!k.attributes.uv3;let ct=Rs;return S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ct=n.toneMapping),{isWebGL2:c,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:Q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,instancing:De,instancingColor:De&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Xr,map:Oe,matcap:We,envMap:H,envMapMode:H&&W.mapping,envMapCubeUVHeight:N,aoMap:Xe,lightMap:ve,bumpMap:Ue,normalMap:xe,displacementMap:f&&V,emissiveMap:Be,normalMapObjectSpace:xe&&S.normalMapType===FC,normalMapTangentSpace:xe&&S.normalMapType===OC,metalnessMap:P,roughnessMap:A,anisotropy:z,anisotropyMap:he,clearcoat:ne,clearcoatMap:fe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ve,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:lt,sheen:ie,sheenColorMap:be,sheenRoughnessMap:je,specularMap:Ae,specularColorMap:ye,specularIntensityMap:Ye,transmission:ge,transmissionMap:et,thicknessMap:ft,gradientMap:_e,opaque:S.transparent===!1&&S.blending===Oa,alphaMap:ae,alphaTest:D,alphaHash:le,combine:S.combine,mapUv:Oe&&_(S.map.channel),aoMapUv:Xe&&_(S.aoMap.channel),lightMapUv:ve&&_(S.lightMap.channel),bumpMapUv:Ue&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:V&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:P&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:he&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&_(S.sheenRoughnessMap.channel),specularMapUv:Ae&&_(S.specularMap.channel),specularColorMapUv:ye&&_(S.specularColorMap.channel),specularIntensityMapUv:Ye&&_(S.specularIntensityMap.channel),transmissionMapUv:et&&_(S.transmissionMap.channel),thicknessMapUv:ft&&_(S.thicknessMap.channel),alphaMapUv:ae&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xe||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Ie,vertexUv3s:ot,pointsUvs:Z.isPoints===!0&&!!k.attributes.uv&&(Oe||ae),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dr,flipSided:S.side===si,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)E.push(O),E.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=g[S.type];let O;if(E){const U=dr[E];O=cR.clone(U.uniforms)}else O=S.uniforms;return O}function T(S,E){let O;for(let U=0,Z=u.length;U<Z;U++){const L=u[U];if(L.cacheKey===E){O=L,++O.usedTimes;break}}return O===void 0&&(O=new TL(n,E,S,s),u.push(O)),O}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:b}}function PL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ux(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||bL),i.length>1&&i.sort(f||lx),r.length>1&&r.sort(f||lx)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function LL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ux,n.set(i,[o])):r>=s.length?(o=new ux,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new _t};break;case"SpotLight":t={position:new $,direction:new $,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function NL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UL=0;function IL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OL(n,e){const t=new DL,i=NL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new $);const s=new $,o=new fn,a=new fn;function l(c,d){let f=0,p=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,m=0,h=0,v=0,x=0,y=0,T=0,w=0,M=0,b=0,S=0;c.sort(IL);const E=d===!0?Math.PI:1;for(let U=0,Z=c.length;U<Z;U++){const L=c[U],k=L.color,G=L.intensity,W=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=k.r*G*E,p+=k.g*G*E,g+=k.b*G*E;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],G);S++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const R=L.shadow,K=i.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=F,_++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(k).multiplyScalar(G*E),F.distance=W,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[h]=F;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&b++),r.spotLightMatrix[h]=R.matrix,L.castShadow){const K=i.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.spotShadow[h]=K,r.spotShadowMap[h]=N,w++}h++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(k).multiplyScalar(G),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=F,v++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const R=L.shadow,K=i.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=L.shadow.matrix,T++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(G*E),F.groundColor.copy(L.groundColor).multiplyScalar(G*E),r.hemi[x]=F,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==h||O.rectAreaLength!==v||O.hemiLength!==x||O.numDirectionalShadows!==y||O.numPointShadows!==T||O.numSpotShadows!==w||O.numSpotMaps!==M||O.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+M-b,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=S,O.directionalLength=_,O.pointLength=m,O.spotLength=h,O.rectAreaLength=v,O.hemiLength=x,O.numDirectionalShadows=y,O.numPointShadows=T,O.numSpotShadows=w,O.numSpotMaps=M,O.numLightProbes=S,r.version=UL++)}function u(c,d){let f=0,p=0,g=0,_=0,m=0;const h=d.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),f++}else if(y.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function cx(n,e){const t=new OL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function FL(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new cx(n,e),t.set(s,[l])):o>=a.length?(l=new cx(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class kL extends Hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zL extends Hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HL=`uniform sampler2D shadow_pass;
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
}`;function GL(n,e,t){let i=new ME;const r=new yt,s=new yt,o=new _n,a=new kL({depthPacking:IC}),l=new zL,u={},c=t.maxTextureSize,d={[Os]:si,[si]:Os,[Dr]:Dr},f=new No({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:BL,fragmentShader:HL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yr;g.setAttribute("position",new or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ms(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=QM;let h=this.type;this.render=function(w,M,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Cs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Z=h!==Ar&&this.type===Ar,L=h===Ar&&this.type!==Ar;for(let k=0,G=w.length;k<G;k++){const W=w[k],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();if(r.multiply(F),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,N.mapSize.y=s.y)),N.map===null||Z===!0||L===!0){const K=this.type!==Ar?{minFilter:Hn,magFilter:Hn}:{};N.map!==null&&N.map.dispose(),N.map=new Do(r.x,r.y,K),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const R=N.getViewportCount();for(let K=0;K<R;K++){const J=N.getViewport(K);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),U.viewport(o),N.updateMatrices(W,K),i=N.getFrustum(),y(M,b,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===Ar&&v(N,b),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,O)};function v(w,M){const b=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Do(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,b,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,b,p,_,null)}function x(w,M,b,S){let E=null;const O=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)E=O;else if(E=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=E.uuid,Z=M.uuid;let L=u[U];L===void 0&&(L={},u[U]=L);let k=L[Z];k===void 0&&(k=E.clone(),L[Z]=k,M.addEventListener("dispose",T)),E=k}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Ar?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:d[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=b}return E}function y(w,M,b,S,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Ar)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const k=Z.groups;for(let G=0,W=k.length;G<W;G++){const N=k[G],F=L[N.materialIndex];if(F&&F.visible){const R=x(w,F,S,E);w.onBeforeShadow(n,w,M,b,Z,R,N),n.renderBufferDirect(b,null,Z,R,w,N),w.onAfterShadow(n,w,M,b,Z,R,N)}}}else if(L.visible){const k=x(w,L,S,E);w.onBeforeShadow(n,w,M,b,Z,k,null),n.renderBufferDirect(b,null,Z,k,w,null),w.onAfterShadow(n,w,M,b,Z,k,null)}}const U=w.children;for(let Z=0,L=U.length;Z<L;Z++)y(U[Z],M,b,S,E)}function T(w){w.target.removeEventListener("dispose",T);for(const b in u){const S=u[b],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function VL(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const le=new _n;let ue=null;const ke=new _n(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!D&&(n.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){D=Ie},setClear:function(Ie,ot,ct,Ce,Me){Me===!0&&(Ie*=Ce,ot*=Ce,ct*=Ce),le.set(Ie,ot,ct,Ce),ke.equals(le)===!1&&(n.clearColor(Ie,ot,ct,Ce),ke.copy(le))},reset:function(){D=!1,ue=null,ke.set(-1,0,0,0)}}}function s(){let D=!1,le=null,ue=null,ke=null;return{setTest:function(Ie){Ie?Ne(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ie){le!==Ie&&!D&&(n.depthMask(Ie),le=Ie)},setFunc:function(Ie){if(ue!==Ie){switch(Ie){case cC:n.depthFunc(n.NEVER);break;case fC:n.depthFunc(n.ALWAYS);break;case dC:n.depthFunc(n.LESS);break;case qf:n.depthFunc(n.LEQUAL);break;case hC:n.depthFunc(n.EQUAL);break;case pC:n.depthFunc(n.GEQUAL);break;case mC:n.depthFunc(n.GREATER);break;case _C:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ie}},setLocked:function(Ie){D=Ie},setClear:function(Ie){ke!==Ie&&(n.clearDepth(Ie),ke=Ie)},reset:function(){D=!1,le=null,ue=null,ke=null}}}function o(){let D=!1,le=null,ue=null,ke=null,Ie=null,ot=null,ct=null,Ce=null,Me=null;return{setTest:function(Le){D||(Le?Ne(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Le){le!==Le&&!D&&(n.stencilMask(Le),le=Le)},setFunc:function(Le,oe,ze){(ue!==Le||ke!==oe||Ie!==ze)&&(n.stencilFunc(Le,oe,ze),ue=Le,ke=oe,Ie=ze)},setOp:function(Le,oe,ze){(ot!==Le||ct!==oe||Ce!==ze)&&(n.stencilOp(Le,oe,ze),ot=Le,ct=oe,Ce=ze)},setLocked:function(Le){D=Le},setClear:function(Le){Me!==Le&&(n.clearStencil(Le),Me=Le)},reset:function(){D=!1,le=null,ue=null,ke=null,Ie=null,ot=null,ct=null,Ce=null,Me=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,x=null,y=null,T=null,w=null,M=null,b=null,S=new _t(0,0,0),E=0,O=!1,U=null,Z=null,L=null,k=null,G=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(R)[1]),N=F>=1):R.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),N=F>=2);let K=null,J={};const q=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),se=new _n().fromArray(q),me=new _n().fromArray(Q);function de(D,le,ue,ke){const Ie=new Uint8Array(4),ot=n.createTexture();n.bindTexture(D,ot),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<ue;ct++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(le+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return ot}const De={};De[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(qf),Be(!1),P(j0),Ne(n.CULL_FACE),xe(Cs);function Ne(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function Oe(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function We(D,le){return p[D]!==le?(n.bindFramebuffer(D,le),p[D]=le,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function H(D,le){let ue=_,ke=!1;if(D)if(ue=g.get(le),ue===void 0&&(ue=[],g.set(le,ue)),D.isWebGLMultipleRenderTargets){const Ie=D.texture;if(ue.length!==Ie.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,ct=Ie.length;ot<ct;ot++)ue[ot]=n.COLOR_ATTACHMENT0+ot;ue.length=Ie.length,ke=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,ke=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,ke=!0);ke&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Xe(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const ve={[io]:n.FUNC_ADD,[$A]:n.FUNC_SUBTRACT,[KA]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[$0]=n.MIN,ve[K0]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ve[$0]=D.MIN_EXT,ve[K0]=D.MAX_EXT)}const Ue={[QA]:n.ZERO,[ZA]:n.ONE,[JA]:n.SRC_COLOR,[hm]:n.SRC_ALPHA,[sC]:n.SRC_ALPHA_SATURATE,[iC]:n.DST_COLOR,[tC]:n.DST_ALPHA,[eC]:n.ONE_MINUS_SRC_COLOR,[pm]:n.ONE_MINUS_SRC_ALPHA,[rC]:n.ONE_MINUS_DST_COLOR,[nC]:n.ONE_MINUS_DST_ALPHA,[oC]:n.CONSTANT_COLOR,[aC]:n.ONE_MINUS_CONSTANT_COLOR,[lC]:n.CONSTANT_ALPHA,[uC]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(D,le,ue,ke,Ie,ot,ct,Ce,Me,Le){if(D===Cs){h===!0&&(Oe(n.BLEND),h=!1);return}if(h===!1&&(Ne(n.BLEND),h=!0),D!==qA){if(D!==v||Le!==O){if((x!==io||w!==io)&&(n.blendEquation(n.FUNC_ADD),x=io,w=io),Le)switch(D){case Oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dm:n.blendFunc(n.ONE,n.ONE);break;case Y0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case q0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Y0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case q0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,M=null,b=null,S.set(0,0,0),E=0,v=D,O=Le}return}Ie=Ie||le,ot=ot||ue,ct=ct||ke,(le!==x||Ie!==w)&&(n.blendEquationSeparate(ve[le],ve[Ie]),x=le,w=Ie),(ue!==y||ke!==T||ot!==M||ct!==b)&&(n.blendFuncSeparate(Ue[ue],Ue[ke],Ue[ot],Ue[ct]),y=ue,T=ke,M=ot,b=ct),(Ce.equals(S)===!1||Me!==E)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Me),S.copy(Ce),E=Me),v=D,O=!1}function V(D,le){D.side===Dr?Oe(n.CULL_FACE):Ne(n.CULL_FACE);let ue=D.side===si;le&&(ue=!ue),Be(ue),D.blending===Oa&&D.transparent===!1?xe(Cs):xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ke=D.stencilWrite;u.setTest(ke),ke&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function P(D){D!==XA?(Ne(n.CULL_FACE),D!==Z&&(D===j0?n.cullFace(n.BACK):D===jA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),Z=D}function A(D){D!==L&&(N&&n.lineWidth(D),L=D)}function z(D,le,ue){D?(Ne(n.POLYGON_OFFSET_FILL),(k!==le||G!==ue)&&(n.polygonOffset(le,ue),k=le,G=ue)):Oe(n.POLYGON_OFFSET_FILL)}function ne(D){D?Ne(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function te(D){D===void 0&&(D=n.TEXTURE0+W-1),K!==D&&(n.activeTexture(D),K=D)}function ie(D,le,ue){ue===void 0&&(K===null?ue=n.TEXTURE0+W-1:ue=K);let ke=J[ue];ke===void 0&&(ke={type:void 0,texture:void 0},J[ue]=ke),(ke.type!==D||ke.texture!==le)&&(K!==ue&&(n.activeTexture(ue),K=ue),n.bindTexture(D,le||De[D]),ke.type=D,ke.texture=le)}function ge(){const D=J[K];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(D){se.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function et(D){me.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),me.copy(D))}function ft(D,le){let ue=d.get(le);ue===void 0&&(ue=new WeakMap,d.set(le,ue));let ke=ue.get(D);ke===void 0&&(ke=n.getUniformBlockIndex(le,D.name),ue.set(D,ke))}function _e(D,le){const ke=d.get(le).get(D);c.get(le)!==ke&&(n.uniformBlockBinding(le,ke,D.__bindingPointIndex),c.set(le,ke))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},K=null,J={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,x=null,y=null,T=null,w=null,M=null,b=null,S=new _t(0,0,0),E=0,O=!1,U=null,Z=null,L=null,k=null,G=null,se.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ne,disable:Oe,bindFramebuffer:We,drawBuffers:H,useProgram:Xe,setBlending:xe,setMaterial:V,setFlipSided:Be,setCullFace:P,setLineWidth:A,setPolygonOffset:z,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:ge,compressedTexImage2D:he,compressedTexImage3D:fe,texImage2D:Ae,texImage3D:ye,updateUBOMapping:ft,uniformBlockBinding:_e,texStorage2D:be,texStorage3D:je,texSubImage2D:Re,texSubImage3D:Ve,compressedTexSubImage2D:ee,compressedTexSubImage3D:lt,scissor:Ye,viewport:et,reset:ae}}function WL(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):Jf("canvas")}function _(P,A,z,ne){let te=1;if((P.width>ne||P.height>ne)&&(te=ne/Math.max(P.width,P.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ie=A?Sm:Math.floor,ge=ie(te*P.width),he=ie(te*P.height);d===void 0&&(d=g(ge,he));const fe=z?g(ge,he):d;return fe.width=ge,fe.height=he,fe.getContext("2d").drawImage(P,0,0,ge,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ge+"x"+he+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return Av(P.width)&&Av(P.height)}function h(P){return a?!1:P.wrapS!==nr||P.wrapT!==nr||P.minFilter!==Hn&&P.minFilter!==Fi}function v(P,A){return P.generateMipmaps&&A&&P.minFilter!==Hn&&P.minFilter!==Fi}function x(P){n.generateMipmap(P)}function y(P,A,z,ne,te=!1){if(a===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=A;if(A===n.RED&&(z===n.FLOAT&&(ie=n.R32F),z===n.HALF_FLOAT&&(ie=n.R16F),z===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.R8UI),z===n.UNSIGNED_SHORT&&(ie=n.R16UI),z===n.UNSIGNED_INT&&(ie=n.R32UI),z===n.BYTE&&(ie=n.R8I),z===n.SHORT&&(ie=n.R16I),z===n.INT&&(ie=n.R32I)),A===n.RG&&(z===n.FLOAT&&(ie=n.RG32F),z===n.HALF_FLOAT&&(ie=n.RG16F),z===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RGBA){const ge=te?$f:xt.getTransfer(ne);z===n.FLOAT&&(ie=n.RGBA32F),z===n.HALF_FLOAT&&(ie=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ie=ge===Rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(P,A,z){return v(P,z)===!0||P.isFramebufferTexture&&P.minFilter!==Hn&&P.minFilter!==Fi?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){return P===Hn||P===Q0||P===gh?n.NEAREST:n.LINEAR}function M(P){const A=P.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function b(P){const A=P.target;A.removeEventListener("dispose",b),O(A)}function S(P){const A=i.get(P);if(A.__webglInit===void 0)return;const z=P.source,ne=f.get(z);if(ne){const te=ne[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(P),Object.keys(ne).length===0&&f.delete(z)}i.remove(P)}function E(P){const A=i.get(P);n.deleteTexture(A.__webglTexture);const z=P.source,ne=f.get(z);delete ne[A.__cacheKey],o.memory.textures--}function O(P){const A=P.texture,z=i.get(P),ne=i.get(A);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let ie=0;ie<z.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(z.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)n.deleteFramebuffer(z.__webglFramebuffer[te]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let te=0,ie=A.length;te<ie;te++){const ge=i.get(A[te]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(P)}let U=0;function Z(){U=0}function L(){const P=U;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function k(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function G(P,A){const z=i.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,P,A);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+A)}function W(P,A){const z=i.get(P);if(P.version>0&&z.__version!==P.version){se(z,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+A)}function N(P,A){const z=i.get(P);if(P.version>0&&z.__version!==P.version){se(z,P,A);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+A)}function F(P,A){const z=i.get(P);if(P.version>0&&z.__version!==P.version){me(z,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+A)}const R={[gm]:n.REPEAT,[nr]:n.CLAMP_TO_EDGE,[vm]:n.MIRRORED_REPEAT},K={[Hn]:n.NEAREST,[Q0]:n.NEAREST_MIPMAP_NEAREST,[gh]:n.NEAREST_MIPMAP_LINEAR,[Fi]:n.LINEAR,[wC]:n.LINEAR_MIPMAP_NEAREST,[bu]:n.LINEAR_MIPMAP_LINEAR},J={[kC]:n.NEVER,[WC]:n.ALWAYS,[zC]:n.LESS,[lE]:n.LEQUAL,[BC]:n.EQUAL,[VC]:n.GEQUAL,[HC]:n.GREATER,[GC]:n.NOTEQUAL};function q(P,A,z){if(z?(n.texParameteri(P,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,R[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,K[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,K[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==nr||A.wrapT!==nr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Hn&&A.minFilter!==Fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Hn||A.minFilter!==gh&&A.minFilter!==bu||A.type===ps&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Lu&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Q(P,A){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",M));const ne=A.source;let te=f.get(ne);te===void 0&&(te={},f.set(ne,te));const ie=k(A);if(ie!==P.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[ie].usedTimes++;const ge=te[P.__cacheKey];ge!==void 0&&(te[P.__cacheKey].usedTimes--,ge.usedTimes===0&&E(A)),P.__cacheKey=ie,P.__webglTexture=te[ie].texture}return z}function se(P,A,z){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);const te=Q(P,A),ie=A.source;t.bindTexture(ne,P.__webglTexture,n.TEXTURE0+z);const ge=i.get(ie);if(ie.version!==ge.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const he=xt.getPrimaries(xt.workingColorSpace),fe=A.colorSpace===ki?null:xt.getPrimaries(A.colorSpace),Re=A.colorSpace===ki||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ve=h(A)&&m(A.image)===!1;let ee=_(A.image,Ve,!1,r.maxTextureSize);ee=Be(A,ee);const lt=m(ee)||a,be=s.convert(A.format,A.colorSpace);let je=s.convert(A.type),Ae=y(A.internalFormat,be,je,A.colorSpace,A.isVideoTexture);q(ne,A,lt);let ye;const Ye=A.mipmaps,et=a&&A.isVideoTexture!==!0&&Ae!==oE,ft=ge.__version===void 0||te===!0,_e=T(A,ee,lt);if(A.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?A.type===ps?Ae=n.DEPTH_COMPONENT32F:A.type===hs?Ae=n.DEPTH_COMPONENT24:A.type===yo?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:A.type===ps&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===So&&Ae===n.DEPTH_COMPONENT&&A.type!==j_&&A.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=hs,je=s.convert(A.type)),A.format===el&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,A.type!==yo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=yo,je=s.convert(A.type))),ft&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,be,je,null));else if(A.isDataTexture)if(Ye.length>0&&lt){et&&ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,Ye[0].width,Ye[0].height);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],et?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,je,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,be,je,ye.data);A.generateMipmaps=!1}else et?(ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,be,je,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,be,je,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ae,Ye[0].width,Ye[0].height,ee.depth);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],A.format!==ir?be!==null?et?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,be,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,ye.width,ye.height,ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,be,je,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,ye.width,ye.height,ee.depth,0,be,je,ye.data)}else{et&&ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,Ye[0].width,Ye[0].height);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],A.format!==ir?be!==null?et?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,je,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,be,je,ye.data)}else if(A.isDataArrayTexture)et?(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,be,je,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,be,je,ee.data);else if(A.isData3DTexture)et?(ft&&t.texStorage3D(n.TEXTURE_3D,_e,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,be,je,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,be,je,ee.data);else if(A.isFramebufferTexture){if(ft)if(et)t.texStorage2D(n.TEXTURE_2D,_e,Ae,ee.width,ee.height);else{let ae=ee.width,D=ee.height;for(let le=0;le<_e;le++)t.texImage2D(n.TEXTURE_2D,le,Ae,ae,D,0,be,je,null),ae>>=1,D>>=1}}else if(Ye.length>0&&lt){et&&ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,Ye[0].width,Ye[0].height);for(let ae=0,D=Ye.length;ae<D;ae++)ye=Ye[ae],et?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,be,je,ye):t.texImage2D(n.TEXTURE_2D,ae,Ae,be,je,ye);A.generateMipmaps=!1}else et?(ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,je,ee)):t.texImage2D(n.TEXTURE_2D,0,Ae,be,je,ee);v(A,lt)&&x(ne),ge.__version=ie.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function me(P,A,z){if(A.image.length!==6)return;const ne=Q(P,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const ge=xt.getPrimaries(xt.workingColorSpace),he=A.colorSpace===ki?null:xt.getPrimaries(A.colorSpace),fe=A.colorSpace===ki||ge===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Re=A.isCompressedTexture||A.image[0].isCompressedTexture,Ve=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!Re&&!Ve?ee[ae]=_(A.image[ae],!1,!0,r.maxCubemapSize):ee[ae]=Ve?A.image[ae].image:A.image[ae],ee[ae]=Be(A,ee[ae]);const lt=ee[0],be=m(lt)||a,je=s.convert(A.format,A.colorSpace),Ae=s.convert(A.type),ye=y(A.internalFormat,je,Ae,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,et=ie.__version===void 0||ne===!0;let ft=T(A,lt,be);q(n.TEXTURE_CUBE_MAP,A,be);let _e;if(Re){Ye&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ye,lt.width,lt.height);for(let ae=0;ae<6;ae++){_e=ee[ae].mipmaps;for(let D=0;D<_e.length;D++){const le=_e[D];A.format!==ir?je!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,le.width,le.height,je,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,le.width,le.height,je,Ae,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,ye,le.width,le.height,0,je,Ae,le.data)}}}else{_e=A.mipmaps,Ye&&et&&(_e.length>0&&ft++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ye,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(Ve){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,je,Ae,ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,ee[ae].width,ee[ae].height,0,je,Ae,ee[ae].data);for(let D=0;D<_e.length;D++){const ue=_e[D].image[ae].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,ue.width,ue.height,je,Ae,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,ye,ue.width,ue.height,0,je,Ae,ue.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,je,Ae,ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,je,Ae,ee[ae]);for(let D=0;D<_e.length;D++){const le=_e[D];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,je,Ae,le.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,ye,je,Ae,le.image[ae])}}}v(A,be)&&x(n.TEXTURE_CUBE_MAP),ie.__version=te.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function de(P,A,z,ne,te,ie){const ge=s.convert(z.format,z.colorSpace),he=s.convert(z.type),fe=y(z.internalFormat,ge,he,z.colorSpace);if(!i.get(A).__hasExternalTextures){const Ve=Math.max(1,A.width>>ie),ee=Math.max(1,A.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,fe,Ve,ee,A.depth,0,ge,he,null):t.texImage2D(te,ie,fe,Ve,ee,0,ge,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,0,Ue(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(P,A,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||xe(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===ps?ne=n.DEPTH_COMPONENT32F:te.type===hs&&(ne=n.DEPTH_COMPONENT24));const ie=Ue(A);xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ne=Ue(A);z&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],ge=s.convert(ie.format,ie.colorSpace),he=s.convert(ie.type),fe=y(ie.internalFormat,ge,he,ie.colorSpace),Re=Ue(A);z&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,fe,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const ne=i.get(A.depthTexture).__webglTexture,te=Ue(A);if(A.depthTexture.format===So)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(A.depthTexture.format===el)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const A=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,P)}else if(z){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=n.createRenderbuffer(),De(A.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),De(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(P,A,z){const ne=i.get(P);A!==void 0&&de(ne.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Oe(P)}function H(P){const A=P.texture,z=i.get(P),ne=i.get(A);P.addEventListener("dispose",b),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++);const te=P.isWebGLCubeRenderTarget===!0,ie=P.isWebGLMultipleRenderTargets===!0,ge=m(P)||a;if(te){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let fe=0;fe<A.mipmaps.length;fe++)z.__webglFramebuffer[he][fe]=n.createFramebuffer()}else z.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)z.__webglFramebuffer[he]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const he=P.texture;for(let fe=0,Re=he.length;fe<Re;fe++){const Ve=i.get(he[fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&xe(P)===!1){const he=ie?A:[A];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const Re=he[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Ve=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),lt=y(Re.internalFormat,Ve,ee,Re.colorSpace,P.isXRRenderTarget===!0),be=Ue(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,lt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),De(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,ge);for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(z.__webglFramebuffer[he][fe],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else de(z.__webglFramebuffer[he],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(A,ge)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const he=P.texture;for(let fe=0,Re=he.length;fe<Re;fe++){const Ve=he[fe],ee=i.get(Ve);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,Ve,ge),de(z.__webglFramebuffer,P,Ve,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),v(Ve,ge)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),q(he,A,ge),a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(z.__webglFramebuffer[fe],P,A,n.COLOR_ATTACHMENT0,he,fe);else de(z.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,he,0);v(A,ge)&&x(he),t.unbindTexture()}P.depthBuffer&&Oe(P)}function Xe(P){const A=m(P)||a,z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,te=z.length;ne<te;ne++){const ie=z[ne];if(v(ie,A)){const ge=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ie).__webglTexture;t.bindTexture(ge,he),x(ge),t.unbindTexture()}}}function ve(P){if(a&&P.samples>0&&xe(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],z=P.width,ne=P.height;let te=n.COLOR_BUFFER_BIT;const ie=[],ge=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(P),fe=P.isWebGLMultipleRenderTargets===!0;if(fe)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){ie.push(n.COLOR_ATTACHMENT0+Re),P.depthBuffer&&ie.push(ge);const Ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ve===!1&&(P.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),fe){const ee=i.get(A[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);const Ve=i.get(A[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ue(P){return Math.min(r.maxSamples,P.samples)}function xe(P){const A=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function V(P){const A=o.render.frame;c.get(P)!==A&&(c.set(P,A),P.update())}function Be(P,A){const z=P.colorSpace,ne=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===xm||z!==Xr&&z!==ki&&(xt.getTransfer(z)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ne===ir?(P.format=xm,P.minFilter=Fi,P.generateMipmaps=!1):A=cE.sRGBToLinear(A):(ne!==ir||te!==Ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),A}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=N,this.setTextureCube=F,this.rebindTextures=We,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe}function XL(n,e,t){const i=t.isWebGL2;function r(s,o=ki){let a;const l=xt.getTransfer(o);if(s===Ps)return n.UNSIGNED_BYTE;if(s===tE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===nE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===AC)return n.BYTE;if(s===CC)return n.SHORT;if(s===j_)return n.UNSIGNED_SHORT;if(s===eE)return n.INT;if(s===hs)return n.UNSIGNED_INT;if(s===ps)return n.FLOAT;if(s===Lu)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===RC)return n.ALPHA;if(s===ir)return n.RGBA;if(s===PC)return n.LUMINANCE;if(s===bC)return n.LUMINANCE_ALPHA;if(s===So)return n.DEPTH_COMPONENT;if(s===el)return n.DEPTH_STENCIL;if(s===xm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===LC)return n.RED;if(s===iE)return n.RED_INTEGER;if(s===DC)return n.RG;if(s===rE)return n.RG_INTEGER;if(s===sE)return n.RGBA_INTEGER;if(s===vh||s===xh||s===yh||s===Sh)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Z0||s===J0||s===ev||s===tv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Z0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===J0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ev)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nv||s===iv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===nv)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===iv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rv||s===sv||s===ov||s===av||s===lv||s===uv||s===cv||s===fv||s===dv||s===hv||s===pv||s===mv||s===_v||s===gv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ov)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===av)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_v)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mh||s===vv||s===xv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Mh)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===NC||s===yv||s===Sv||s===Mv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Mh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===yv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class jL extends tr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hc extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YL={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qL extends sl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,h=null;const v=[],x=[],y=new yt;let T=null;const w=new tr;w.layers.enable(1),w.viewport=new _n;const M=new tr;M.layers.enable(2),M.viewport=new _n;const b=[w,M],S=new jL;S.layers.enable(1),S.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new Yh,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new Yh,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new Yh,v[q]=Q),Q.getHandSpace()};function U(q){const Q=x.indexOf(q.inputSource);if(Q===-1)return;const se=v[Q];se!==void 0&&(se.update(q.inputSource,q.frame,u||o),se.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let q=0;q<v.length;q++){const Q=x[q];Q!==null&&(x[q]=null,v[q].disconnect(Q))}E=null,O=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,h=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Do(p.framebufferWidth,p.framebufferHeight,{format:ir,type:Ps,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,se=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?el:So,se=_.stencil?yo:hs);const de={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(de),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Do(f.textureWidth,f.textureHeight,{format:ir,type:Ps,depthTexture:new wE(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let Q=0;Q<q.removed.length;Q++){const se=q.removed[Q],me=x.indexOf(se);me>=0&&(x[me]=null,v[me].disconnect(se))}for(let Q=0;Q<q.added.length;Q++){const se=q.added[Q];let me=x.indexOf(se);if(me===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(se),me=De;break}else if(x[De]===null){x[De]=se,me=De;break}if(me===-1)break}const de=v[me];de&&de.connect(se)}}const k=new $,G=new $;function W(q,Q,se){k.setFromMatrixPosition(Q.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const me=k.distanceTo(G),de=Q.projectionMatrix.elements,De=se.projectionMatrix.elements,Ne=de[14]/(de[10]-1),Oe=de[14]/(de[10]+1),We=(de[9]+1)/de[5],H=(de[9]-1)/de[5],Xe=(de[8]-1)/de[0],ve=(De[8]+1)/De[0],Ue=Ne*Xe,xe=Ne*ve,V=me/(-Xe+ve),Be=V*-Xe;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(V),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const P=Ne+V,A=Oe+V,z=Ue-Be,ne=xe+(me-Be),te=We*Oe/A*P,ie=H*Oe/A*P;q.projectionMatrix.makePerspective(z,ne,te,ie,P,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=w.near=q.near,S.far=M.far=w.far=q.far,(E!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,O=S.far);const Q=q.parent,se=S.cameras;N(S,Q);for(let me=0;me<se.length;me++)N(se[me],Q);se.length===2?W(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),F(q,S,Q)};function F(q,Q,se){se===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ym*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let R=null;function K(q,Q){if(c=Q.getViewerPose(u||o),g=Q,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let me=!1;se.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let de=0;de<se.length;de++){const De=se[de];let Ne=null;if(p!==null)Ne=p.getViewport(De);else{const We=d.getViewSubImage(f,De);Ne=We.viewport,de===0&&(e.setRenderTargetTextures(h,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(h))}let Oe=b[de];Oe===void 0&&(Oe=new tr,Oe.layers.enable(de),Oe.viewport=new _n,b[de]=Oe),Oe.matrix.fromArray(De.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(De.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),de===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(Oe)}}for(let se=0;se<v.length;se++){const me=x[se],de=v[se];me!==null&&de!==void 0&&de.update(me,Q,u||o)}R&&R(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const J=new EE;J.setAnimationLoop(K),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function $L(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,xE(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===si&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===si&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===si&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KL(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=b.length;S<E;S++){const O=b[S];if(p(O,w,S,T)===!0){const U=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let k=0;k<Z.length;k++){const G=Z[k],W=_(G);typeof G=="number"||typeof G=="boolean"?(O.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+L,O.__data)):G.isMatrix3?(O.__data[0]=G.elements[0],O.__data[1]=G.elements[1],O.__data[2]=G.elements[2],O.__data[3]=0,O.__data[4]=G.elements[3],O.__data[5]=G.elements[4],O.__data[6]=G.elements[5],O.__data[7]=0,O.__data[8]=G.elements[6],O.__data[9]=G.elements[7],O.__data[10]=G.elements[8],O.__data[11]=0):(G.toArray(O.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,T){const w=v.value,M=x+"_"+y;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const b=T[M];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return T[M]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const T=16;for(let M=0,b=x.length;M<b;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,O=S.length;E<O;E++){const U=S[E],Z=Array.isArray(U.value)?U.value:[U.value];for(let L=0,k=Z.length;L<k;L++){const G=Z[L],W=_(G),N=y%T;N!==0&&T-N<W.boundary&&(y+=T-N),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=W.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class LE{constructor(e={}){const{canvas:t=jC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=Rs,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,M=null,b=-1,S=null;const E=new _n,O=new _n;let U=null;const Z=new _t(0);let L=0,k=t.width,G=t.height,W=1,N=null,F=null;const R=new _n(0,0,k,G),K=new _n(0,0,k,G);let J=!1;const q=new ME;let Q=!1,se=!1,me=null;const de=new fn,De=new yt,Ne=new $,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?W:1}let H=i;function Xe(C,I){for(let j=0;j<C.length;j++){const X=C[j],B=t.getContext(X,I);if(B!==null)return B}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${X_}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",le,!1),H===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),H=Xe(I,C),H===null)throw Xe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Ue,xe,V,Be,P,A,z,ne,te,ie,ge,he,fe,Re,Ve,ee,lt,be,je,Ae,ye,Ye,et;function ft(){ve=new ob(H),Ue=new eb(H,ve,e),ve.init(Ue),ye=new XL(H,ve,Ue),xe=new VL(H,ve,Ue),V=new ub(H),Be=new PL,P=new WL(H,ve,xe,Be,Ue,ye,V),A=new nb(x),z=new sb(x),ne=new gR(H,Ue),Ye=new Z2(H,ve,ne,Ue),te=new ab(H,ne,V,Ye),ie=new hb(H,te,ne,V),be=new db(H,Ue,P),Ve=new tb(Be),ge=new RL(x,A,z,ve,Ue,Ye,Ve),he=new $L(x,Be),fe=new LL,Re=new FL(ve,Ue),lt=new Q2(x,A,z,xe,ie,f,l),ee=new GL(x,ie,Ue),et=new KL(H,V,Ue,xe),je=new J2(H,ve,V,Ue),Ae=new lb(H,ve,V,Ue),V.programs=ge.programs,x.capabilities=Ue,x.extensions=ve,x.properties=Be,x.renderLists=fe,x.shadowMap=ee,x.state=xe,x.info=V}ft();const _e=new qL(x,H);this.xr=_e,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(k,G,!1))},this.getSize=function(C){return C.set(k,G)},this.setSize=function(C,I,j=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,G=I,t.width=Math.floor(C*W),t.height=Math.floor(I*W),j===!0&&(t.style.width=C+"px",t.style.height=I+"px"),this.setViewport(0,0,C,I)},this.getDrawingBufferSize=function(C){return C.set(k*W,G*W).floor()},this.setDrawingBufferSize=function(C,I,j){k=C,G=I,W=j,t.width=Math.floor(C*j),t.height=Math.floor(I*j),this.setViewport(0,0,C,I)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,I,j,X){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,I,j,X),xe.viewport(E.copy(R).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,I,j,X){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,I,j,X),xe.scissor(O.copy(K).multiplyScalar(W).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){xe.setScissorTest(J=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(C=!0,I=!0,j=!0){let X=0;if(C){let B=!1;if(M!==null){const ce=M.texture.format;B=ce===sE||ce===rE||ce===iE}if(B){const ce=M.texture.type,Te=ce===Ps||ce===hs||ce===j_||ce===yo||ce===tE||ce===nE,He=lt.getClearColor(),we=lt.getClearAlpha(),Pe=He.r,Ge=He.g,Ke=He.b;Te?(p[0]=Pe,p[1]=Ge,p[2]=Ke,p[3]=we,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=Pe,g[1]=Ge,g[2]=Ke,g[3]=we,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}I&&(X|=H.DEPTH_BUFFER_BIT),j&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Re.dispose(),Be.dispose(),A.dispose(),z.dispose(),ie.dispose(),Ye.dispose(),et.dispose(),ge.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Me),_e.removeEventListener("sessionend",Le),me&&(me.dispose(),me=null),oe.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=V.autoReset,I=ee.enabled,j=ee.autoUpdate,X=ee.needsUpdate,B=ee.type;ft(),V.autoReset=C,ee.enabled=I,ee.autoUpdate=j,ee.needsUpdate=X,ee.type=B}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const I=C.target;I.removeEventListener("dispose",ue),ke(I)}function ke(C){Ie(C),Be.remove(C)}function Ie(C){const I=Be.get(C).programs;I!==void 0&&(I.forEach(function(j){ge.releaseProgram(j)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,I,j,X,B,ce){I===null&&(I=Oe);const Te=B.isMesh&&B.matrixWorld.determinant()<0,He=Tt(C,I,j,X,B);xe.setMaterial(X,Te);let we=j.index,Pe=1;if(X.wireframe===!0){if(we=te.getWireframeAttribute(j),we===void 0)return;Pe=2}const Ge=j.drawRange,Ke=j.attributes.position;let bt=Ge.start*Pe,Zt=(Ge.start+Ge.count)*Pe;ce!==null&&(bt=Math.max(bt,ce.start*Pe),Zt=Math.min(Zt,(ce.start+ce.count)*Pe)),we!==null?(bt=Math.max(bt,0),Zt=Math.min(Zt,we.count)):Ke!=null&&(bt=Math.max(bt,0),Zt=Math.min(Zt,Ke.count));const pt=Zt-bt;if(pt<0||pt===1/0)return;Ye.setup(B,X,He,j,we);let Nn,vt=je;if(we!==null&&(Nn=ne.get(we),vt=Ae,vt.setIndex(Nn)),B.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*We()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(B.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),xe.setLineWidth(qe*We()),B.isLineSegments?vt.setMode(H.LINES):B.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else B.isPoints?vt.setMode(H.POINTS):B.isSprite&&vt.setMode(H.TRIANGLES);if(B.isBatchedMesh)vt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)vt.renderInstances(bt,pt,B.count);else if(j.isInstancedBufferGeometry){const qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ad=Math.min(j.instanceCount,qe);vt.renderInstances(bt,pt,Ad)}else vt.render(bt,pt)};function ot(C,I,j){C.transparent===!0&&C.side===Dr&&C.forceSinglePass===!1?(C.side=si,C.needsUpdate=!0,Et(C,I,j),C.side=Os,C.needsUpdate=!0,Et(C,I,j),C.side=Dr):Et(C,I,j)}this.compile=function(C,I,j=null){j===null&&(j=C),m=Re.get(j),m.init(),v.push(m),j.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),C!==j&&C.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const X=new Set;return C.traverse(function(B){const ce=B.material;if(ce)if(Array.isArray(ce))for(let Te=0;Te<ce.length;Te++){const He=ce[Te];ot(He,j,B),X.add(He)}else ot(ce,j,B),X.add(ce)}),v.pop(),m=null,X},this.compileAsync=function(C,I,j=null){const X=this.compile(C,I,j);return new Promise(B=>{function ce(){if(X.forEach(function(Te){Be.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){B(C);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ct=null;function Ce(C){ct&&ct(C)}function Me(){oe.stop()}function Le(){oe.start()}const oe=new EE;oe.setAnimationLoop(Ce),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(C){ct=C,_e.setAnimationLoop(C),C===null?oe.stop():oe.start()},_e.addEventListener("sessionstart",Me),_e.addEventListener("sessionend",Le),this.render=function(C,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(I),I=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,I,M),m=Re.get(C,v.length),m.init(),v.push(m),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(de),se=this.localClippingEnabled,Q=Ve.init(this.clippingPlanes,se),_=fe.get(C,h.length),_.init(),h.push(_),ze(C,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,F),this.info.render.frame++,Q===!0&&Ve.beginShadows();const j=m.state.shadowsArray;if(ee.render(j,C,I),Q===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(_,C),m.setupLights(x._useLegacyLights),I.isArrayCamera){const X=I.cameras;for(let B=0,ce=X.length;B<ce;B++){const Te=X[B];Fe(_,C,Te,Te.viewport)}}else Fe(_,C,I);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,I),Ye.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ze(C,I,j,X){if(C.visible===!1)return;if(C.layers.test(I.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(I);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){X&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const Te=ie.update(C),He=C.material;He.visible&&_.push(C,Te,He,j,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Te=ie.update(C),He=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(He)){const we=Te.groups;for(let Pe=0,Ge=we.length;Pe<Ge;Pe++){const Ke=we[Pe],bt=He[Ke.materialIndex];bt&&bt.visible&&_.push(C,Te,bt,j,Ne.z,Ke)}}else He.visible&&_.push(C,Te,He,j,Ne.z,null)}}const ce=C.children;for(let Te=0,He=ce.length;Te<He;Te++)ze(ce[Te],I,j,X)}function Fe(C,I,j,X){const B=C.opaque,ce=C.transmissive,Te=C.transparent;m.setupLightsView(j),Q===!0&&Ve.setGlobalState(x.clippingPlanes,j),ce.length>0&&$e(B,ce,I,j),X&&xe.viewport(E.copy(X)),B.length>0&&Nt(B,I,j),ce.length>0&&Nt(ce,I,j),Te.length>0&&Nt(Te,I,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function $e(C,I,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const ce=Ue.isWebGL2;me===null&&(me=new Do(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Lu:Ps,minFilter:bu,samples:ce?4:0})),x.getDrawingBufferSize(De),ce?me.setSize(De.x,De.y):me.setSize(Sm(De.x),Sm(De.y));const Te=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const He=x.toneMapping;x.toneMapping=Rs,Nt(C,j,X),P.updateMultisampleRenderTarget(me),P.updateRenderTargetMipmap(me);let we=!1;for(let Pe=0,Ge=I.length;Pe<Ge;Pe++){const Ke=I[Pe],bt=Ke.object,Zt=Ke.geometry,pt=Ke.material,Nn=Ke.group;if(pt.side===Dr&&bt.layers.test(X.layers)){const vt=pt.side;pt.side=si,pt.needsUpdate=!0,tt(bt,j,X,Zt,pt,Nn),pt.side=vt,pt.needsUpdate=!0,we=!0}}we===!0&&(P.updateMultisampleRenderTarget(me),P.updateRenderTargetMipmap(me)),x.setRenderTarget(Te),x.setClearColor(Z,L),x.toneMapping=He}function Nt(C,I,j){const X=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ce=C.length;B<ce;B++){const Te=C[B],He=Te.object,we=Te.geometry,Pe=X===null?Te.material:X,Ge=Te.group;He.layers.test(j.layers)&&tt(He,I,j,we,Pe,Ge)}}function tt(C,I,j,X,B,ce){C.onBeforeRender(x,I,j,X,B,ce),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(x,I,j,X,C,ce),B.transparent===!0&&B.side===Dr&&B.forceSinglePass===!1?(B.side=si,B.needsUpdate=!0,x.renderBufferDirect(j,I,X,B,C,ce),B.side=Os,B.needsUpdate=!0,x.renderBufferDirect(j,I,X,B,C,ce),B.side=Dr):x.renderBufferDirect(j,I,X,B,C,ce),C.onAfterRender(x,I,j,X,B,ce)}function Et(C,I,j){I.isScene!==!0&&(I=Oe);const X=Be.get(C),B=m.state.lights,ce=m.state.shadowsArray,Te=B.state.version,He=ge.getParameters(C,B.state,ce,I,j),we=ge.getProgramCacheKey(He);let Pe=X.programs;X.environment=C.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(C.isMeshStandardMaterial?z:A).get(C.envMap||X.environment),Pe===void 0&&(C.addEventListener("dispose",ue),Pe=new Map,X.programs=Pe);let Ge=Pe.get(we);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Te)return At(C,He),Ge}else He.uniforms=ge.getUniforms(C),C.onBuild(j,He,x),C.onBeforeCompile(He,x),Ge=ge.acquireProgram(He,we),Pe.set(we,Ge),X.uniforms=He.uniforms;const Ke=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ve.uniform),At(C,He),X.needsLights=ui(C),X.lightsStateVersion=Te,X.needsLights&&(Ke.ambientLightColor.value=B.state.ambient,Ke.lightProbe.value=B.state.probe,Ke.directionalLights.value=B.state.directional,Ke.directionalLightShadows.value=B.state.directionalShadow,Ke.spotLights.value=B.state.spot,Ke.spotLightShadows.value=B.state.spotShadow,Ke.rectAreaLights.value=B.state.rectArea,Ke.ltc_1.value=B.state.rectAreaLTC1,Ke.ltc_2.value=B.state.rectAreaLTC2,Ke.pointLights.value=B.state.point,Ke.pointLightShadows.value=B.state.pointShadow,Ke.hemisphereLights.value=B.state.hemi,Ke.directionalShadowMap.value=B.state.directionalShadowMap,Ke.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ke.spotShadowMap.value=B.state.spotShadowMap,Ke.spotLightMatrix.value=B.state.spotLightMatrix,Ke.spotLightMap.value=B.state.spotLightMap,Ke.pointShadowMap.value=B.state.pointShadowMap,Ke.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function Qt(C){if(C.uniformsList===null){const I=C.currentProgram.getUniforms();C.uniformsList=df.seqWithValue(I.seq,C.uniforms)}return C.uniformsList}function At(C,I){const j=Be.get(C);j.outputColorSpace=I.outputColorSpace,j.batching=I.batching,j.instancing=I.instancing,j.instancingColor=I.instancingColor,j.skinning=I.skinning,j.morphTargets=I.morphTargets,j.morphNormals=I.morphNormals,j.morphColors=I.morphColors,j.morphTargetsCount=I.morphTargetsCount,j.numClippingPlanes=I.numClippingPlanes,j.numIntersection=I.numClipIntersection,j.vertexAlphas=I.vertexAlphas,j.vertexTangents=I.vertexTangents,j.toneMapping=I.toneMapping}function Tt(C,I,j,X,B){I.isScene!==!0&&(I=Oe),P.resetTextureUnits();const ce=I.fog,Te=X.isMeshStandardMaterial?I.environment:null,He=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Xr,we=(X.isMeshStandardMaterial?z:A).get(X.envMap||Te),Pe=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ke=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,Zt=!!j.morphAttributes.color;let pt=Rs;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(pt=x.toneMapping);const Nn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=Nn!==void 0?Nn.length:0,qe=Be.get(X),Ad=m.state.lights;if(Q===!0&&(se===!0||C!==S)){const bi=C===S&&X.id===b;Ve.setState(X,C,bi)}let Ht=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ad.state.version||qe.outputColorSpace!==He||B.isBatchedMesh&&qe.batching===!1||!B.isBatchedMesh&&qe.batching===!0||B.isInstancedMesh&&qe.instancing===!1||!B.isInstancedMesh&&qe.instancing===!0||B.isSkinnedMesh&&qe.skinning===!1||!B.isSkinnedMesh&&qe.skinning===!0||B.isInstancedMesh&&qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&qe.instancingColor===!1&&B.instanceColor!==null||qe.envMap!==we||X.fog===!0&&qe.fog!==ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==Pe||qe.vertexTangents!==Ge||qe.morphTargets!==Ke||qe.morphNormals!==bt||qe.morphColors!==Zt||qe.toneMapping!==pt||Ue.isWebGL2===!0&&qe.morphTargetsCount!==vt)&&(Ht=!0):(Ht=!0,qe.__version=X.version);let Hs=qe.currentProgram;Ht===!0&&(Hs=Et(X,I,B));let Q_=!1,al=!1,Cd=!1;const yn=Hs.getUniforms(),Gs=qe.uniforms;if(xe.useProgram(Hs.program)&&(Q_=!0,al=!0,Cd=!0),X.id!==b&&(b=X.id,al=!0),Q_||S!==C){yn.setValue(H,"projectionMatrix",C.projectionMatrix),yn.setValue(H,"viewMatrix",C.matrixWorldInverse);const bi=yn.map.cameraPosition;bi!==void 0&&bi.setValue(H,Ne.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&yn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,al=!0,Cd=!0)}if(B.isSkinnedMesh){yn.setOptional(H,B,"bindMatrix"),yn.setOptional(H,B,"bindMatrixInverse");const bi=B.skeleton;bi&&(Ue.floatVertexTextures?(bi.boneTexture===null&&bi.computeBoneTexture(),yn.setValue(H,"boneTexture",bi.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(yn.setOptional(H,B,"batchingTexture"),yn.setValue(H,"batchingTexture",B._matricesTexture,P));const Rd=j.morphAttributes;if((Rd.position!==void 0||Rd.normal!==void 0||Rd.color!==void 0&&Ue.isWebGL2===!0)&&be.update(B,j,Hs),(al||qe.receiveShadow!==B.receiveShadow)&&(qe.receiveShadow=B.receiveShadow,yn.setValue(H,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Gs.envMap.value=we,Gs.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),al&&(yn.setValue(H,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&ht(Gs,Cd),ce&&X.fog===!0&&he.refreshFogUniforms(Gs,ce),he.refreshMaterialUniforms(Gs,X,W,G,me),df.upload(H,Qt(qe),Gs,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(df.upload(H,Qt(qe),Gs,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yn.setValue(H,"center",B.center),yn.setValue(H,"modelViewMatrix",B.modelViewMatrix),yn.setValue(H,"normalMatrix",B.normalMatrix),yn.setValue(H,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const bi=X.uniformsGroups;for(let Pd=0,NE=bi.length;Pd<NE;Pd++)if(Ue.isWebGL2){const Z_=bi[Pd];et.update(Z_,Hs),et.bind(Z_,Hs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hs}function ht(C,I){C.ambientLightColor.needsUpdate=I,C.lightProbe.needsUpdate=I,C.directionalLights.needsUpdate=I,C.directionalLightShadows.needsUpdate=I,C.pointLights.needsUpdate=I,C.pointLightShadows.needsUpdate=I,C.spotLights.needsUpdate=I,C.spotLightShadows.needsUpdate=I,C.rectAreaLights.needsUpdate=I,C.hemisphereLights.needsUpdate=I}function ui(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,I,j){Be.get(C.texture).__webglTexture=I,Be.get(C.depthTexture).__webglTexture=j;const X=Be.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,I){const j=Be.get(C);j.__webglFramebuffer=I,j.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(C,I=0,j=0){M=C,T=I,w=j;let X=!0,B=null,ce=!1,Te=!1;if(C){const we=Be.get(C);we.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):we.__webglFramebuffer===void 0?P.setupRenderTarget(C):we.__hasExternalTextures&&P.rebindTextures(C,Be.get(C.texture).__webglTexture,Be.get(C.depthTexture).__webglTexture);const Pe=C.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);const Ge=Be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[I])?B=Ge[I][j]:B=Ge[I],ce=!0):Ue.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?B=Be.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[j]:B=Ge,E.copy(C.viewport),O.copy(C.scissor),U=C.scissorTest}else E.copy(R).multiplyScalar(W).floor(),O.copy(K).multiplyScalar(W).floor(),U=J;if(xe.bindFramebuffer(H.FRAMEBUFFER,B)&&Ue.drawBuffers&&X&&xe.drawBuffers(C,B),xe.viewport(E),xe.scissor(O),xe.setScissorTest(U),ce){const we=Be.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,j)}else if(Te){const we=Be.get(C.texture),Pe=I||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,we.__webglTexture,j||0,Pe)}b=-1},this.readRenderTargetPixels=function(C,I,j,X,B,ce,Te){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(He=He[Te]),He){xe.bindFramebuffer(H.FRAMEBUFFER,He);try{const we=C.texture,Pe=we.format,Ge=we.type;if(Pe!==ir&&ye.convert(Pe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ge===Lu&&(ve.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==Ps&&ye.convert(Ge)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ps&&(Ue.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=C.width-X&&j>=0&&j<=C.height-B&&H.readPixels(I,j,X,B,ye.convert(Pe),ye.convert(Ge),ce)}finally{const we=M!==null?Be.get(M).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(C,I,j=0){const X=Math.pow(2,-j),B=Math.floor(I.image.width*X),ce=Math.floor(I.image.height*X);P.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,C.x,C.y,B,ce),xe.unbindTexture()},this.copyTextureToTexture=function(C,I,j,X=0){const B=I.image.width,ce=I.image.height,Te=ye.convert(j.format),He=ye.convert(j.type);P.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,B,ce,Te,He,I.image.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,C.x,C.y,I.mipmaps[0].width,I.mipmaps[0].height,Te,I.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,Te,He,I.image),X===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,I,j,X,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=C.max.x-C.min.x+1,Te=C.max.y-C.min.y+1,He=C.max.z-C.min.z+1,we=ye.convert(X.format),Pe=ye.convert(X.type);let Ge;if(X.isData3DTexture)P.setTexture3D(X,0),Ge=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)P.setTexture2DArray(X,0),Ge=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Ke=H.getParameter(H.UNPACK_ROW_LENGTH),bt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Zt=H.getParameter(H.UNPACK_SKIP_PIXELS),pt=H.getParameter(H.UNPACK_SKIP_ROWS),Nn=H.getParameter(H.UNPACK_SKIP_IMAGES),vt=j.isCompressedTexture?j.mipmaps[B]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(Ge,B,I.x,I.y,I.z,ce,Te,He,we,Pe,vt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ge,B,I.x,I.y,I.z,ce,Te,He,we,vt.data)):H.texSubImage3D(Ge,B,I.x,I.y,I.z,ce,Te,He,we,Pe,vt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zt),H.pixelStorei(H.UNPACK_SKIP_ROWS,pt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Nn),B===0&&X.generateMipmaps&&H.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,xe.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Y_?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Sd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pn?Mo:aE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mo?pn:Xr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class QL extends LE{}QL.prototype.isWebGL1Renderer=!0;class ZL extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class DE extends Hu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fx=new fn,Em=new hE,Gc=new Md,Vc=new $;class JL extends ai{constructor(e=new Yr,t=new DE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gc.copy(i.boundingSphere),Gc.applyMatrix4(r),Gc.radius+=s,e.ray.intersectsSphere(Gc)===!1)return;fx.copy(r).invert(),Em.copy(e.ray).applyMatrix4(fx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);Vc.fromBufferAttribute(d,m),dx(Vc,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Vc.fromBufferAttribute(d,g),dx(Vc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function dx(n,e,t,i,r,s,o){const a=Em.distanceSqToPoint(n);if(a<t){const l=new $;Em.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class e3 extends oi{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:X_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=X_);function t3(){const n=bn.useRef();return bn.useEffect(()=>{const e=n.current;let t;try{t=new LE({canvas:e,alpha:!0,antialias:!1,powerPreference:"low-power"})}catch{return}const i=(navigator.hardwareConcurrency||4)<=4,r=i?50:100;t.setPixelRatio(Math.min(devicePixelRatio,i?1:1.5));const s=new ZL,o=new TE(0,1,1,0,-1,1);let a=1,l=1;const u=()=>{a=e.clientWidth,l=e.clientHeight,t.setSize(a,l,!1),o.right=a,o.top=l,o.updateProjectionMatrix()};u();const c=new Float32Array(r*3),d=new Float32Array(r),f=new Float32Array(r);for(let b=0;b<r;b++)c[b*3]=Math.random()*a,c[b*3+1]=Math.random()*l,d[b]=8+Math.random()*22,f[b]=Math.random()*6.28;const p=new Yr;p.setAttribute("position",new or(c,3));const g=document.createElement("canvas");g.width=g.height=32;const _=g.getContext("2d"),m=_.createRadialGradient(16,16,0,16,16,16);m.addColorStop(0,"#fff"),m.addColorStop(.4,"rgba(255,255,255,.5)"),m.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=m,_.fillRect(0,0,32,32);const h=new e3(g),v=new DE({size:6,sizeAttenuation:!1,map:h,color:15847274,transparent:!0,opacity:.75,blending:dm,depthWrite:!1});s.add(new JL(p,v));let x=performance.now(),y=scrollY,T=0,w;const M=b=>{w=requestAnimationFrame(M);const S=(b-x)/1e3;if(S<(i?.03:.014))return;x=b;const E=scrollY-y;y=scrollY,T+=(E/S-T)*.1;const O=Math.max(-300,Math.min(300,T))*.5;for(let U=0;U<r;U++){let Z=c[U*3+1]+(d[U]+O)*S;Z>l+10?Z-=l+20:Z<-10&&(Z+=l+20),c[U*3+1]=Z,c[U*3]+=Math.sin(b/1500+f[U])*6*S}p.attributes.position.needsUpdate=!0,t.render(s,o)};return w=requestAnimationFrame(M),addEventListener("resize",u),()=>{cancelAnimationFrame(w),removeEventListener("resize",u),p.dispose(),v.dispose(),h.dispose(),t.dispose()}},[]),Y.jsx("canvas",{ref:n,className:"pc","aria-hidden":"true"})}function n3(){return Y.jsxs("svg",{viewBox:"0 0 100 100",role:"img","aria-label":"श्री गणेश",children:[" ",Y.jsxs("g",{fill:"none",stroke:"#7b1e2b",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round",children:[" ",Y.jsx("path",{d:"M38 28 L32 17 L43 21 L50 10 L57 21 L68 17 L62 28",fill:"#d9a441"})," ",Y.jsx("path",{d:"M38 28 Q50 23 62 28 L65 36 Q71 40 70 49 Q69 56 61 59"})," ",Y.jsx("path",{d:"M38 28 Q29 34 30 44 Q30 53 39 58"})," ",Y.jsx("path",{d:"M34 39 Q20 32 18 45 Q17 56 33 58",fill:"#f4dfb1"})," ",Y.jsx("path",{d:"M66 39 Q80 32 82 45 Q83 56 67 58",fill:"#f4dfb1"})," ",Y.jsx("path",{d:"M37 36 Q50 30 63 36 Q68 43 62 52 Q58 57 53 57 Q51 62 56 67 Q62 73 57 80 Q52 86 45 80 Q41 76 46 70 Q50 65 47 60 Q36 57 34 48 Q32 41 37 36 Z",fill:"#fff4d7"})," ",Y.jsx("path",{d:"M43 43 Q46 46 48 43 M55 43 Q58 46 60 43"})," ",Y.jsx("path",{d:"M51 48 Q48 56 53 60 Q58 63 55 69",stroke:"#b8872b",strokeWidth:"3.5"})," ",Y.jsx("path",{d:"M41 34 Q50 38 59 34",stroke:"#b8872b"})," ",Y.jsx("path",{d:"M50 31 L50 37",stroke:"#c63b32",strokeWidth:"3.5"})," ",Y.jsx("path",{d:"M35 61 Q25 65 27 76 Q31 83 43 84 M65 61 Q75 65 73 76 Q69 83 57 84"})," ",Y.jsx("path",{d:"M38 66 Q50 73 62 66",stroke:"#b8872b"})," ",Y.jsx("circle",{cx:"37",cy:"58",r:"2.2",fill:"#d9a441",stroke:"none"})," ",Y.jsx("circle",{cx:"63",cy:"58",r:"2.2",fill:"#d9a441",stroke:"none"})," "]})," ",Y.jsx("circle",{cx:"50",cy:"50",r:"46",fill:"none",stroke:"#d9a441",strokeWidth:"1.5"})," ",Y.jsx("path",{d:"M15 30 Q9 50 15 70 M85 30 Q91 50 85 70",fill:"none",stroke:"#d9a441",strokeWidth:"1.5",strokeLinecap:"round"})," "]})}const i3=[...Array(24)].map((n,e)=>Y.jsx("path",{transform:`rotate(${e*15})`,d:"M0-96C10-82 10-72 0-62C-10-72-10-82 0-96M0-62C8-50 8-44 0-36C-8-44-8-50 0-62"},e));function wd({className:n=""}){return Y.jsxs("svg",{className:n,viewBox:"-100 -100 200 200",fill:"none",stroke:"#d4af37",strokeWidth:".5","aria-hidden":"true",children:[Y.jsx("circle",{r:"96"}),Y.jsx("circle",{r:"70"}),Y.jsx("circle",{r:"40"}),i3]})}const r3="/assets/photo-BLuzUHwN.jpg";function s3(){const t=document.createElement("canvas");t.width=400,t.height=800;const i=t.getContext("2d");i.font="200px 'Rozha One'",i.textAlign="center",i.fillText("AK",200,470);const r=i.getImageData(0,0,400,800).data,s=new Float32Array(400*800);for(let c=0;c<400*800;c++)s[c]=r[c*4+3]>127?9999:0;for(let c=1;c<800;c++)for(let d=1;d<399;d++){const f=c*400+d;s[f]=Math.min(s[f],s[f-1]+1,s[f-400]+1,s[f-400-1]+1.41,s[f-400+1]+1.41)}for(let c=798;c>=0;c--)for(let d=398;d>=1;d--){const f=c*400+d;s[f]=Math.min(s[f],s[f+1]+1,s[f+400]+1,s[f+400+1]+1.41,s[f+400-1]+1.41)}let o=0;for(let c=250;c<520;c++)for(let d=200;d<236;d++)o=Math.max(o,s[c*400+d]);let a=0,l=0,u=0;for(let c=250;c<520;c++)for(let d=200;d<236;d++)s[c*400+d]>=o-.6&&(a+=d,l+=c,u++);return u?{x:a/u,y:l/u,hw:o}:{x:215,y:400,hw:10}}function o3(){const n=bn.useRef();bn.useLayoutEffect(()=>{const t=kt.context(()=>{const i=s3(),r=`${i.x} ${i.y}`,s=Math.max(34,Math.min(90,Math.ceil(270/i.hw)));kt.set(".aks",{svgOrigin:r}),kt.timeline({scrollTrigger:{trigger:n.current,start:"top top",end:"+=260%",pin:!0,scrub:.6,anticipatePin:1}}).to(".akhint",{autoAlpha:0,y:-20,duration:.1},0).to(".aks",{scale:s,ease:"power3.in",duration:.8},0).to(".akline",{autoAlpha:0,duration:.3},0).to(".akov",{autoAlpha:0,duration:.15},.8).fromTo(".home",{scale:1.2,opacity:.15},{scale:1,opacity:1,duration:1,ease:"power2.out"},.1).to({},{duration:.35})},n);return()=>t.revert()},[]);const e=t=>Y.jsx("text",{className:t,x:"200",y:"470",textAnchor:"middle",fontSize:"200",fontFamily:"'Rozha One',serif",...t==="aks akline"?{fill:"none",stroke:"#d4af37",strokeWidth:1.4}:{fill:"#000"},children:"AK"});return Y.jsxs("section",{ref:n,className:"intro",children:[Y.jsxs("div",{className:"home",children:[Y.jsx(wd,{className:"mn spin"}),Y.jsx("div",{className:"gn",children:Y.jsx(n3,{})}),Y.jsx("h2",{className:"gh",children:"॥ श्री गणेशाय नमः ॥"}),Y.jsx("div",{className:"pill",children:"॥ शुभ परिणय ॥"}),Y.jsx("div",{className:"arch",children:Y.jsx("div",{children:Y.jsx("img",{src:r3,alt:"अपूर्वा संग कुणाल",decoding:"async"})})}),Y.jsx("p",{className:"cp",children:"॥ वैवाहिक मंगल परिणय ॥"}),Y.jsx("div",{className:"nm sh",children:"सौ. कां. अपूर्वा"}),Y.jsx("div",{className:"and",children:"एवं"}),Y.jsx("div",{className:"nm sh",children:"चि. कुणाल"}),Y.jsxs("div",{className:"meta",children:[Y.jsx("span",{children:"1 व 2 दिसंबर 2026"}),Y.jsx("span",{children:"❦"}),Y.jsx("span",{children:"हरदा (म.प्र.)"})]})]}),Y.jsxs("div",{className:"akwrap",children:[Y.jsxs("svg",{className:"akov",viewBox:"0 0 400 800",preserveAspectRatio:"xMidYMid slice",children:[Y.jsxs("defs",{children:[Y.jsxs("radialGradient",{id:"ab",cx:".5",cy:".45",r:".75",children:[Y.jsx("stop",{offset:"0",stopColor:"#6b0f27"}),Y.jsx("stop",{offset:"1",stopColor:"#1a0207"})]}),Y.jsxs("mask",{id:"akm",maskUnits:"userSpaceOnUse",x:"-3000",y:"-3000",width:"6400",height:"6800",children:[Y.jsx("rect",{x:"-3000",y:"-3000",width:"6400",height:"6800",fill:"#fff"}),e("aks")]})]}),Y.jsx("rect",{x:"-3000",y:"-3000",width:"6400",height:"6800",fill:"url(#ab)",mask:"url(#akm)"}),e("aks akline")]}),Y.jsxs("p",{className:"akhint",children:[Y.jsx("span",{children:"सौ. कां. अपूर्वा ❖ चि. कुणाल"}),Y.jsx("span",{className:"dn",children:"↓"})]})]})]})}const a3={start:"2026-12-01T08:00:00+05:30"},hx=["मान्यवर,","परमपिता परमेश्वर की असीम अनुकम्पा से हमारे परिवार के इस मांगलिक अवसर पर आप सपरिवार सादर आमंत्रित हैं।"],l3=[{tag:"वधु पक्ष",name:"सौ. कां. अपूर्वा",rows:[["सुपौत्री:","स्व. श्री रविशंकर जी नुनिहार"],["सुपुत्री:","श्री आनंद नुनिहार एवं श्रीमती संगीता नुनिहार"]],place:"हरदा, मध्य प्रदेश"},{tag:"वर पक्ष",name:"चि. कुणाल",rows:[["सुपौत्रः","स्व. श्री दीनानाथ जी वलेचा"],["सुपुत्र:","श्री हरीश वलेचा एवं श्रीमती कांता वलेचा"]],place:"तिरुपुर, तमिलनाडु"}],$s="स्थानः कच्छ कड़वा पाटीदार भवन, हरदा",u3=[{label:"मांगलिक कार्यक्रम - प्रथम दिवस",title:"मंगलवार, 1 दिसंबर 2026",items:[{t:"श्री माता पूजन",time:"प्रातः 8:00 बजे",v:"“सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके । शरण्ये त्र्यम्बके गौरी नारायणि नमोऽस्तुते ॥”",p:"स्थानः निज निवास से शीतला माता मंदिर"},{t:"श्री गणेश पूजन",time:"प्रातः 11:00 बजे",v:"“वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥”",p:$s},{t:"मण्डप",time:"दोपहर 1:00 बजे",v:"“मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः। मङ्गलम् पुण्डरीकाक्षः मंगलायतना हरिः ॥”",p:$s},{t:"मामेरा - पेरावनी",time:"शाम 5:00 बजे",p:$s},{t:"संगीत निशा",time:"शाम 7:30 बजे",v:"“सुर तो महज़ बहाना हैं, असल संगीत तो अपनो का साथ निभाना हैं”",p:$s,hl:1}]},{label:"मांगलिक कार्यक्रम - द्वितीय दिवस",title:"बुधवार, 2 दिसंबर 2026",items:[{t:"फलदान / सगाई",time:"प्रातः 10:00 बजे",p:$s},{t:"पाणिग्रहण संस्कार",time:"शाम 6:30 बजे",x:"(गोधूली बेला)",p:$s,hl:1},{t:"माधुर्य भोज",time:"शाम 7:30 बजे",p:$s}]}],c3="https://maps.google.com/?q=Kutch+Kadva+Patidar+Bhawan+Harda+Madhya+Pradesh",f3=[{t:"विनीत",l:["श्री आनंद जी - संगीता नुनिहार","श्री राजेन्द्र जी - अनीता नुनिहार","आशिर्वाद नुनिहार, रजत नुनिहार, कनक नुनिहार","स्व. रविशंकर जी - स्व. पार्वती नुनिहार","स्व. किशोरीलाल जी नुनिहार"]},{t:"स्वागतकर्ता",l:["श्रीमती उमा पाटिल (स्व. श्री प्रहलाद प्रसाद पाटिल)","स्व. रमा कुमरावत - श्री भगवती प्रसाद कुमरावत","श्रीमती तुलसी भारतीय (स्व. श्री राजेश कुमार भारतीय)","गोविंद प्रसाद जी - सौ. निर्मला सूर्यवंशी","नंदकिशोर जी - सौ. माधुरी सूर्यवंशी","विष्णुप्रसाद जी - सौ. सुनीता सूर्यवंशी","संतोष जी - सौ. शोभा ताम्बुलकर","स्व. दिनेश - श्रीमती रंजीता ताम्बुलकर","संजय जी - सौ. गायत्री ताम्बुलकर","विमल जी - सौ. प्रिया सूर्यवंशी","विक्रम जी - सौ. अनामिका सूर्यवंशी","शुभम जी - सौ. रीना सूर्यवंशी","गगन जी - सौ. मोनिका ताम्बूलकर"]},{t:"ननिहाल पक्ष (सनावद)",l:["स्व. सुकलाल जी - शांता बारी","मधुकर जी - ललिता बारी","स्व. संजय जी - जयश्री बारी","प्रशांत जी - जयमाला बारी","गौरव जी - रागिनी बारी","मिलिंद, प्रणय, अनुज, राम्या"]},{t:"दर्शनाभिलाषी",l:["अंशुल, अनुज, हिमांशु, भूमि","एवं समस्त नुनिहार परिवार"]},{t:"निहारते नयन",l:["कृति, हार्दिक, पलक, दिशु","हर्षित, प्रफुल्ल, सान्वी, मिष्ठी","नित्या, गार्गी, मिशिका, त्रिशांक"]},{t:"संपर्क सूत्र",tel:[["आशीर्वाद नुनिहार","9977999592"],["रजत नुनिहार","8462859808"],["कनक नुनिहार","7999861630"]]}],d3="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent("अपूर्वा एवं कुणाल - शुभ विवाह")+"&details="+encodeURIComponent("कच्छ कड़वा पाटीदार भवन, हरदा में पाणिग्रहण संस्कार एवं मांगलिक कार्यक्रम")+"&location="+encodeURIComponent("Kutch Kadva Patidar Bhawan, Harda, Madhya Pradesh")+"&dates=20261201T023000Z/20261202T183000Z",Tm=46,px=2*Math.PI*Tm,qh=[["d","दिन",365],["h","घंटे",24],["n","मिनट",60],["s","सेकंड",60]];function h3(){const n=bn.useRef();return bn.useLayoutEffect(()=>{const e=kt.context(()=>{let t;const i=new Date(a3.start).getTime(),r={d:0,h:0,n:0,s:0},s={},o=u=>n.current.querySelector(u),a=u=>{o(".pr-"+u).style.strokeDashoffset=px*(1-r[u]),o(".dt-"+u).style.transform=`rotate(${r[u]*360}deg)`},l=u=>{const c=Math.max(0,i-Date.now()),d={d:Math.floor(c/864e5),h:Math.floor(c%864e5/36e5),n:Math.floor(c%36e5/6e4),s:Math.floor(c%6e4/1e3)};for(const f of"dhns"){const[,,p]=qh.find(_=>_[0]===f),g=Math.min(1,d[f]/p);if(s[f]!==d[f]){const _=o(".t-"+f);_.textContent=String(d[f]).padStart(2,"0"),u||kt.fromTo(_,{y:-8,opacity:0},{y:0,opacity:1,duration:.35}),!u&&g>r[f]+.01?(r[f]=g,a(f)):kt.to(r,{[f]:g,duration:u?1.8:.95,ease:u?"power3.out":"none",overwrite:"auto",onUpdate:()=>a(f)}),s[f]=d[f]}}c||(o(".ct").textContent="✨ पावन मांगलिक उत्सव प्रारंभ! ✨")};return kt.from(".rg",{scale:.8,autoAlpha:0,stagger:.12,duration:.9,ease:"back.out(1.6)",scrollTrigger:{trigger:n.current,start:"top 65%",once:!0},onStart:()=>{l(!0),t=setInterval(()=>l(!1),1e3)}}),qh.forEach(([u])=>a(u)),()=>clearInterval(t)},n);return()=>e.revert()},[]),Y.jsxs("section",{ref:n,className:"cdw",children:[Y.jsx(wd,{className:"bgm"}),Y.jsx("p",{className:"ct",children:"⏳ पावन विवाह उत्सव प्रारंभ होने में शेष ⏳"}),Y.jsx("div",{className:"rings",children:qh.map(([e,t])=>Y.jsxs("div",{className:"rg",children:[Y.jsxs("svg",{viewBox:"0 0 100 100",children:[Y.jsx("circle",{cx:"50",cy:"50",r:Tm,fill:"none",stroke:"rgba(212,175,55,.2)",strokeWidth:"3"}),Y.jsx("circle",{className:"pr-"+e,cx:"50",cy:"50",r:Tm,fill:"none",stroke:"#d4af37",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:px,transform:"rotate(-90 50 50)"}),Y.jsx("g",{className:"dt-"+e,style:{transformOrigin:"50px 50px"},children:Y.jsx("circle",{cx:"50",cy:"4",r:"3",fill:"#fff3d6"})})]}),Y.jsxs("div",{className:"rc",children:[Y.jsx("b",{className:"t-"+e,children:"00"}),Y.jsx("span",{children:t})]})]},e))}),Y.jsx("a",{className:"btn",href:d3,target:"_blank",rel:"noreferrer",children:"कैलेंडर में जोड़ें"})]})}function K_({items:n,per:e=90}){const t=bn.useRef();return bn.useLayoutEffect(()=>{const i=kt.context(()=>{const r=kt.utils.toArray(".sl",t.current),s=r.length,o=kt.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:t.current,start:"top top",end:`+=${s*e}%`,pin:!0,scrub:.5,anticipatePin:1}});r.forEach((a,l)=>{l&&(kt.set(a,{autoAlpha:0}),o.fromTo(a,{autoAlpha:0,y:70,scale:.94},{autoAlpha:1,y:0,scale:1,duration:.35,ease:"power2.out"},l).fromTo(a.querySelectorAll(".sx"),{autoAlpha:0,y:26},{autoAlpha:1,y:0,stagger:.03,duration:.25,ease:"power2.out"},l+.1)),l<s-1&&o.to(a,{autoAlpha:0,y:-70,scale:1.05,duration:.3,ease:"power2.in"},l+.7)}),o.to(".bgm",{rotation:120,duration:s},0)},t);return()=>i.revert()},[]),Y.jsxs("section",{ref:t,className:"pn",children:[Y.jsx(wd,{className:"bgm"}),n.map((i,r)=>Y.jsx("div",{className:"sl",children:i},r))]})}const ka=()=>Y.jsxs("div",{className:"sx dv",children:[Y.jsx("i",{}),"❖",Y.jsx("i",{})]}),p3=()=>Y.jsx(K_,{per:100,items:[Y.jsxs(Y.Fragment,{children:[Y.jsx("small",{className:"sx tg",children:"॥ वर वधु परिचय ॥"}),Y.jsx(ka,{}),Y.jsx("p",{className:"sx hd",children:hx[0]}),Y.jsx("p",{className:"sx big",children:hx[1]})]}),...l3.map(n=>Y.jsxs(Y.Fragment,{children:[Y.jsx("small",{className:"sx tg",children:n.tag}),Y.jsx("h3",{className:"sx hd nm sh",children:n.name}),Y.jsx(ka,{}),n.rows.map(([e,t])=>Y.jsxs("p",{className:"sx",children:[Y.jsx("em",{children:e}),Y.jsx("br",{}),t]},e)),Y.jsxs("p",{className:"sx pl",children:["📍 ",n.place]})]}))]}),m3=()=>Y.jsx(K_,{per:85,items:u3.flatMap((n,e)=>[Y.jsxs(Y.Fragment,{children:[Y.jsx("small",{className:"sx tg",children:n.label}),Y.jsx(ka,{}),Y.jsx("h3",{className:"sx hd",children:n.title})]}),...n.items.map(t=>Y.jsxs("div",{className:t.hl?"hl":"",children:[Y.jsx("h3",{className:"sx hd",children:t.t}),t.x&&Y.jsx("p",{className:"sx tg",children:t.x}),Y.jsx("time",{className:"sx",children:t.time}),t.v&&Y.jsx("p",{className:"sx v",children:t.v}),Y.jsxs("p",{className:"sx pl",children:["📍 ",t.p]}),e===1&&t.hl&&Y.jsx("a",{className:"sx btn",href:c3,target:"_blank",rel:"noreferrer",children:"विवाह स्थल का गूगल मैप्स दिशा-निर्देश"})]}))])}),_3=()=>Y.jsx(K_,{per:95,items:[Y.jsxs(Y.Fragment,{children:[Y.jsx(ka,{}),Y.jsx("h3",{className:"hd",children:"॥ स्वागतकर्ता एवं विनीत ॥"}),Y.jsx(ka,{})]}),...f3.map(n=>Y.jsxs(Y.Fragment,{children:[Y.jsx("h3",{className:"sx hd",children:n.t}),Y.jsx(ka,{}),n.l&&n.l.map(e=>Y.jsx("p",{className:"sx nmz",children:e},e)),n.tel&&n.tel.map(([e,t])=>Y.jsxs("p",{className:"sx nmz",children:[e,": ",Y.jsx("a",{href:"tel:"+t,children:t})]},t))]}))]});function g3(){const n=bn.useRef();return bn.useLayoutEffect(()=>{const e=kt.context(()=>{const t={trigger:n.current,start:"top 65%",once:!0};kt.from(".fx",{y:40,autoAlpha:0,stagger:.15,duration:1,ease:"power3.out",scrollTrigger:t}),kt.from(".ak2",{scale:.6,autoAlpha:0,duration:1.4,ease:"power4.out",scrollTrigger:t}),kt.from(".fl",{scaleX:0,duration:1.4,ease:"power3.out",scrollTrigger:t})},n);return()=>e.revert()},[]),Y.jsxs("footer",{ref:n,className:"ft",children:[Y.jsx(wd,{className:"bgm spin"}),Y.jsx("div",{className:"ak2",children:"AK"}),Y.jsx("i",{className:"fl"}),Y.jsx("p",{className:"fx hd",children:"॥ बाल मनुहार ॥"}),Y.jsx("p",{className:"fx big",children:"“हमारी बुआ / मौसी / दीदी की शादी में जरूर-जरूर आना...”"}),Y.jsxs("p",{className:"fx meta",children:[Y.jsx("span",{children:"1 व 2 दिसंबर 2026"}),Y.jsx("span",{children:"❦"}),Y.jsx("span",{children:"हरदा (मध्य प्रदेश)"})]}),Y.jsx("button",{className:"fx btn",onClick:()=>scrollTo({top:0,behavior:"smooth"}),children:"↑"})]})}function v3(){const[n,e]=bn.useState(!1);return bn.useEffect(()=>_h.sub(e),[]),bn.useEffect(()=>{const t=i=>{i.target.closest(".mus")||_h.play(),removeEventListener("pointerup",t)};return addEventListener("pointerup",t),()=>removeEventListener("pointerup",t)},[]),Y.jsx("button",{className:"mus",onClick:()=>_h.toggle(),"aria-label":"संगीत चालू या बंद करें",children:Y.jsxs("span",{className:"eq"+(n?" on":""),children:[Y.jsx("i",{}),Y.jsx("i",{}),Y.jsx("i",{})]})})}function x3(){return bn.useEffect(()=>{const n=()=>Je.refresh();return addEventListener("load",n),setTimeout(n,600),()=>removeEventListener("load",n)},[]),Y.jsxs("div",{className:"shell",children:[Y.jsx(t3,{}),Y.jsx(o3,{}),Y.jsx(h3,{}),Y.jsx(p3,{}),Y.jsx(m3,{}),Y.jsx(_3,{}),Y.jsx(g3,{}),Y.jsx(v3,{})]})}const mx=()=>RS(document.getElementById("root")).render(Y.jsx(x3,{}));Promise.race([Promise.all([document.fonts.load("200px 'Rozha One'"),document.fonts.load("16px 'Tiro Devanagari Hindi'","अ")]),new Promise(n=>setTimeout(n,2500))]).then(mx,mx);
