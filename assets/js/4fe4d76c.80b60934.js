"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[66872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,s={unversionedId:"glossary/direct-mode",id:"glossary/direct-mode",title:"direct-mode",description:"Definition",source:"@site/docs/04_glossary/direct-mode.md",sourceDirName:"04_glossary",slug:"/glossary/direct-mode",permalink:"/WOT-terms/docs/glossary/direct-mode",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dip",permalink:"/WOT-terms/docs/glossary/dip"},next:{title:"directed-acyclic-graph",permalink:"/WOT-terms/docs/glossary/directed-acyclic-graph"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Operational mode",id:"operational-mode",level:2},{value:"Security concerns",id:"security-concerns",level:2},{value:"Also see",id:"also-see",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Two primary trust modalities motivated the KERI design, One of these is the ",(0,o.kt)("em",{parentName:"p"},"direct")," (one-to-one) mode, in which the identity controller establishes control via verified signatures of the controlling key-pair. The direct mode doesn't use witnesses nor ",(0,o.kt)("a",{parentName:"p",href:"key-event-receipt-log"},"KERL"),"s, but has direct (albeit intermittent) network contact with the validator."),(0,o.kt)("h2",{id:"operational-mode"},"Operational mode"),(0,o.kt)("p",null,"To protect a ",(0,o.kt)("a",{parentName:"p",href:"validator"},"validator")," when engaging with some other controller\u2019s identifier, be it ",(0,o.kt)("a",{parentName:"p",href:"verification"},"verification"),", control authority establishment, or ",(0,o.kt)("a",{parentName:"p",href:"duplicity"},"duplicity")," detection, are based on an ability to ",(0,o.kt)("em",{parentName:"p"},"replay")," the sequence of key events (key event history or log) of that identifier. There are two main operational modes for providing replay capability that are distinguished by the degree of availability of the identifier\u2019s controller when creating and promulgating the key events.",(0,o.kt)("br",{parentName:"p"}),"\n","With direct mode, the promulgation of events to a validator does not happen unless the controller is attached to the network and able to communicate directly with a validator.",(0,o.kt)("br",{parentName:"p"}),"\n","Direct mode assumes that the controller may have intermittent network availability, it also assumes that these mechanism may not be trusted in any persistent sense to promulgate key events. Nonetheless, direct mode is important as it is compatible with the use of mobile internet devices such as cell phones. A single direct mode identifier may be re-used in multiple one-to-one relationships as part of a select group.",(0,o.kt)("br",{parentName:"p"}),"\n","More in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf"},"Source: chapter Protocol Operational Modes in KERI white paper")),(0,o.kt)("h2",{id:"security-concerns"},"Security concerns"),(0,o.kt)("p",null,"The protocol may operate in two basic modes, called direct and indirect. The availability and consistency attack surfaces are different for the two modes and hence the mitigation properties of the protocol are likewise mode specific."),(0,o.kt)("h2",{id:"also-see"},"Also see"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"indirect-mode"},"Indirect mode")))}m.isMDXComponent=!0}}]);