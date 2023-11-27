"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[25030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"glossary/cooperative-delegation",id:"glossary/cooperative-delegation",title:"cooperative-delegation",description:"Definition",source:"@site/docs/04_glossary/cooperative-delegation.md",sourceDirName:"04_glossary",slug:"/glossary/cooperative-delegation",permalink:"/WOT-terms/docs/glossary/cooperative-delegation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"controller",permalink:"/WOT-terms/docs/glossary/controller"},next:{title:"coroutines",permalink:"/WOT-terms/docs/glossary/coroutines"}},c={},s=[{value:"Definition",id:"definition",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"The way KERI addresses the ",(0,n.kt)("a",{parentName:"p",href:"security-cost-performance-architecture-trade-off"},"security-cost-performance architecture trade-off")," is via ",(0,n.kt)("a",{parentName:"p",href:"delegation"},"delegation")," of identifier prefixes. Delegation includes a delegator and a delegate. For this reason we may call this a cooperative delegation. This is a somewhat ",(0,n.kt)("strong",{parentName:"p"},"novel form of delegation"),". A major advantage of cooperative delegation is the delegator\u2019s key management protects the delegate\u2019s via recovery by the delegator. With cooperative delegation, any exploiter that compromises only the delegate\u2019s authoritative keys may not capture control authority of the delegate. Any exploit of the delegate only is recoverable by the delegator. "),(0,n.kt)("p",null,"Source ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/IdentifierTheory_web.pdf"},"Universal Identifier Theory")," by Samuel Smith"))}d.isMDXComponent=!0}}]);