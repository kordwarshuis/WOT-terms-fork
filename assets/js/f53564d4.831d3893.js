"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[84400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"glossary/blinded-revocation-registry",id:"glossary/blinded-revocation-registry",title:"blinded-revocation-registry",description:"Definition",source:"@site/docs/04_glossary/blinded-revocation-registry.md",sourceDirName:"04_glossary",slug:"/glossary/blinded-revocation-registry",permalink:"/WOT-terms/docs/glossary/blinded-revocation-registry",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"blind-oobi",permalink:"/WOT-terms/docs/glossary/blind-oobi"},next:{title:"bran",permalink:"/WOT-terms/docs/glossary/bran"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Important observation",id:"important-observation",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The current state of a ",(0,a.kt)("a",{parentName:"p",href:"transaction-event-log"},"transaction event log")," (TEL) ",(0,a.kt)("strong",{parentName:"p"},"may be hidden or blinded")," such that ",(0,a.kt)("em",{parentName:"p"},"the only way")," for a potential verifier of the state to observe that state is ",(0,a.kt)("em",{parentName:"p"},"when the controller of a designated AID discloses it")," at the time of presentation."),(0,a.kt)("p",null,"| TBW: BE CAREFUL WITH THE REST, JUST TEXT SNIPPETS TYPED IN FROM A CONVERSATION |"),(0,a.kt)("p",null,"No information can be obtained via a ",(0,a.kt)("a",{parentName:"p",href:"rainbow-table-attack"},"rainbow table attack")," because the hash has enough ",(0,a.kt)("a",{parentName:"p",href:"entropy"},"entropy")," added to it."),(0,a.kt)("p",null,"| TBW  | on the basis of the last half hour of the recording ACDC meetup Dec 6 }"),(0,a.kt)("p",null,"The issuer creates and signs the bulk issuance set of credentials and shares a salt with the presenters.\nThe shared salt correlates between the issuer and the issuee, but that is the worst problem we have to consider, which is acceptable."),(0,a.kt)("p",null,"See more in the section ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/tswg-acdc-specification/blob/main/draft-ssmith-acdc.md#blindable-state-tel"},"blindable state tel")),(0,a.kt)("h2",{id:"important-observation"},"Important observation"),(0,a.kt)("p",null,'The presenter does the decomposition in a way that allows a verifier to conclude: "Yes that was an approved schema issued by the issuer!"'))}d.isMDXComponent=!0}}]);