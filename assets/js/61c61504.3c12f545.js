"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[53273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,i={unversionedId:"glossary/contractually-protected-disclosure",id:"glossary/contractually-protected-disclosure",title:"contractually-protected-disclosure",description:"Definition",source:"@site/docs/04_glossary/contractually-protected-disclosure.md",sourceDirName:"04_glossary",slug:"/glossary/contractually-protected-disclosure",permalink:"/WOT-terms/docs/glossary/contractually-protected-disclosure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"contingent-disclosure",permalink:"/WOT-terms/docs/glossary/contingent-disclosure"},next:{title:"control-authority",permalink:"/WOT-terms/docs/glossary/control-authority"}},l={},s=[{value:"Definition",id:"definition",level:2},{value:"Relation",id:"relation",level:2},{value:"Rule",id:"rule",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Usage of schema-based and contract-based controls to limit the exchange of information to provide both mechanical and legal protection on the sharing of data. "),(0,a.kt)("p",null,"Mechanical protection is composed of sharing the schema of the data to be shared prior to sharing the actual data contents. This mechanical protection is then combined through the IPEX protocol with disclosures of legal contracts to be agreed to prior to sharing the desired data contents."),(0,a.kt)("p",null,"Once the legal agreements have been met then the disclosure mechanism exchanges the desired data contents."),(0,a.kt)("p",null,"This is also the most elaborate form of disclosure by an ",(0,a.kt)("a",{parentName:"p",href:"IPEX"},"IPEX"),". Contractually protected disclosure includes both ",(0,a.kt)("a",{parentName:"p",href:"chain-link-confidentiality"},"chain-link confidential")," and ",(0,a.kt)("a",{parentName:"p",href:"contingent-disclosure"},"contingent disclosure"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Paraphrased by @henkvancann based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-ipex/blob/main/draft-ssmith-ipex.md#discussion"},"source")),(0,a.kt)("h2",{id:"relation"},"Relation"),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"IPEX"},"IPEX")," protocol leverages important features of ",(0,a.kt)("a",{parentName:"p",href:"ACDC"},"ACDC"),"s and ancillary protocols such as ",(0,a.kt)("a",{parentName:"p",href:"CESR"},"CESR"),", ",(0,a.kt)("a",{parentName:"p",href:"SAID"},"SAID"),"s, and ",(0,a.kt)("a",{parentName:"p",href:"cesr-proof-signatures"},"CESR-Proofs")," as well as ",(0,a.kt)("a",{parentName:"p",href:"ricardian-contract"},"Ricardian contract"),"s and graduated disclosure (partial, selective, full) to enable contractually protected disclosure. Contractually protected disclosure includes both ","[chain-link confidential]","(chain-link confidential) and ","[contingent disclosure]","(contingent disclosure)."),(0,a.kt)("h2",{id:"rule"},"Rule"),(0,a.kt)("p",null,"The disclosure performed by a presentation exchange MAY be ",(0,a.kt)("a",{parentName:"p",href:"graduated-disclosure"},"graduated")," and MAY be ",(0,a.kt)("a",{parentName:"p",href:"contractually-protected-disclosure"},"contractually")," protected."))}d.isMDXComponent=!0}}]);