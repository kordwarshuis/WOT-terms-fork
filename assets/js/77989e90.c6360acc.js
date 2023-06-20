"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"Terms/glossary/byzantine-agreement",id:"Terms/glossary/byzantine-agreement",title:"byzantine-agreement",description:"Definition",source:"@site/docs/Terms/glossary/byzantine-agreement.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/byzantine-agreement",permalink:"/WOT-terms/docs/Terms/glossary/byzantine-agreement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"branch",permalink:"/WOT-terms/docs/Terms/glossary/branch"},next:{title:"byzantine-fault-tolerance",permalink:"/WOT-terms/docs/Terms/glossary/byzantine-fault-tolerance"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Stellar",id:"stellar",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"(non PoW) Byzantine Agreement is Byzantine fault tolerance of distributed computing systems that enable them to come to consensus despite arbitrary behavior from a fraction of the nodes in the network. BA consensus makes no assumptions about the behavior of nodes in the system. Practical Byzantine Fault Tolerance (pBFT) is the prototypical model for Byzantine agreement, and it can reach consensus fast and efficiently while concurrently decoupling consensus from resources (i.e., financial stake in PoS or electricity in PoW)."),(0,a.kt)("h2",{id:"stellar"},"Stellar"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blockonomi.com/stellar-consensus-protocol/"},"More")," about the Stellar consensus protocol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"What if PBFT and Stellar had a baby?\nthat was missing liveness and total ordering \nbut had safety and was completely decentralized, portable, and permission-less? \nIt would be named KERI."\nSamMSmith\n')))}m.isMDXComponent=!0}}]);