"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[49231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={},i=void 0,o={unversionedId:"glossary/graduated-disclosure",id:"glossary/graduated-disclosure",title:"graduated-disclosure",description:"Definition",source:"@site/docs/glossary/graduated-disclosure.md",sourceDirName:"glossary",slug:"/glossary/graduated-disclosure",permalink:"/WOT-terms/docs/glossary/graduated-disclosure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"governance-framework",permalink:"/WOT-terms/docs/glossary/governance-framework"},next:{title:"graph-fragment",permalink:"/WOT-terms/docs/glossary/graph-fragment"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Reuse",id:"reuse",level:2},{value:"Rule",id:"rule",level:2},{value:"Related terms",id:"related-terms",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"selectively disclosing more data as time and/or necessity progresses."),(0,n.kt)("p",null,"Disclosure performed by a presentation exchange that has cross-variant (see ",(0,n.kt)("a",{parentName:"p",href:"compact-variant"},"compact variant"),") Issuer commitment verifiability as an essential property. It supports graduated disclosure by the ",(0,n.kt)("a",{parentName:"p",href:"disclosee"},"Disclosee")," of any or all variants wether it be full, compact, metadata, partial, selective, bulk issued, or contractually protected.\\\nParaphrased by @henkvancann based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-ipex/blob/main/draft-ssmith-ipex.md#discussion"},"source")),(0,n.kt)("h2",{id:"reuse"},"Reuse"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"SAID"},"SAID")," of a given variant is useful even when it is not the SAID of the variant the ",(0,n.kt)("a",{parentName:"p",href:"issuer"},"Issuer")," signed because during graduated disclosure the ",(0,n.kt)("a",{parentName:"p",href:"discloser"},"Discloser")," MAY choose to sign that given variant to fulfil a given step in an IPEX graduated disclosure transaction. "),(0,n.kt)("h2",{id:"rule"},"Rule"),(0,n.kt)("p",null,"The disclosure performed by a presentation exchange MAY be ",(0,n.kt)("a",{parentName:"p",href:"graduated-disclosure"},"graduated")," and MAY be ",(0,n.kt)("a",{parentName:"p",href:"contractually-protected-disclosure"},"contractually")," protected."),(0,n.kt)("h2",{id:"related-terms"},"Related terms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/acdc/wiki/partial-disclosure"},"Partial Disclosure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/acdc/wiki/selective-disclosure"},"Selective Disclosure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/acdc/wiki/full-disclosure"},"Full Disclosure"))),(0,n.kt)("p",null,"{TBW check prio 1}"))}d.isMDXComponent=!0}}]);