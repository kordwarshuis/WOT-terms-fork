"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[38541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},s=void 0,o={unversionedId:"glossary/interleaved-serialisation",id:"glossary/interleaved-serialisation",title:"interleaved-serialisation",description:"Definition",source:"@site/docs/04_glossary/interleaved-serialisation.md",sourceDirName:"04_glossary",slug:"/glossary/interleaved-serialisation",permalink:"/WOT-terms/docs/glossary/interleaved-serialisation",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/interleaved-serialisation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"interceptor",permalink:"/WOT-terms/docs/glossary/interceptor"},next:{title:"internal-inconsistency",permalink:"/WOT-terms/docs/glossary/internal-inconsistency"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"CESR related",id:"cesr-related",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Serializations of different types interleaved in an overarching format"),(0,a.kt)("h2",{id:"cesr-related"},"CESR related"),(0,a.kt)("p",null,"One extremely useful property of CESR is that special ",(0,a.kt)("strong",{parentName:"p"},"count codes")," enable CESR to be interleaved with other serializations. For example, Many applications use ",(0,a.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#JSON"},"JSON")," ",(0,a.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#RFC4627"},"RFC4627"),", ",(0,a.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#CBOR"},"CBOR")," ",(0,a.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#RFC8949"},"RFC8949"),", or MsgPack (",(0,a.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#MGPK"},"MGPK"),") to serialize flexible self-describing data structures based on field maps, also known as ",(0,a.kt)("em",{parentName:"p"},"dictionaries")," or ",(0,a.kt)("a",{parentName:"p",href:"distributed-hash-table"},"hash tables"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#section-3.5"},"Source IETF-CESR")))}f.isMDXComponent=!0}}]);