import{r as a}from"./index.WFquGv8Z.js";var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function h(){if(f)return o;f=1;var e=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function t(i,r,n){var l=null;if(n!==void 0&&(l=""+n),r.key!==void 0&&(l=""+r.key),"key"in r){n={};for(var c in r)c!=="key"&&(n[c]=r[c])}else n=r;return r=n.ref,{$$typeof:e,type:i,key:l,ref:r!==void 0?r:null,props:n}}return o.Fragment=u,o.jsx=t,o.jsxs=t,o}var x;function p(){return x||(x=1,d.exports=h()),d.exports}var s=p();function m(e,{maxHeight:u=100,scrollThreshold:t=50}={}){if(!e)return;const i=()=>{e.style.height="auto";const r=Math.min(e.scrollHeight,u);e.style.height=`${r}px`,e.style.overflowY=e.scrollHeight>t?"auto":"hidden"};return e.addEventListener("input",i),i(),()=>{e.removeEventListener("input",i)}}function E(){const[e,u]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>t.current?m(t.current,{maxHeight:100,scrollThreshold:50}):void 0,[]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex gap-2 w-full justify-center items-center flex-row",children:[s.jsx("textarea",{ref:t,name:"primeInput",placeholder:"Enter a number to check if it's prime",className:"w-full p-2 rounded-2xl resize-none max-h-25 overflow-y-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"}),s.jsx("button",{onClick:()=>u(!e),className:"px-4 py-2 bg-blue-500 text-white rounded",children:"→"})]}),e&&s.jsx(v,{})]})}function v(){return s.jsx("div",{children:"Contenido dinámico"})}export{E as default};
