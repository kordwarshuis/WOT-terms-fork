"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[9772],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(i),u=r,m=f["".concat(l,".").concat(u)]||f[u]||p[u]||a;return i?n.createElement(m,o(o({ref:t},d),{},{components:i})):n.createElement(m,o({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},95736:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={},o=void 0,s={unversionedId:"glossary/identifier-system",id:"glossary/identifier-system",title:"identifier-system",description:"Definition",source:"@site/docs/glossary/identifier-system.md",sourceDirName:"glossary",slug:"/glossary/identifier-system",permalink:"/WOT-terms/docs/glossary/identifier-system",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"hio",permalink:"/WOT-terms/docs/glossary/hio"},next:{title:"identifier",permalink:"/WOT-terms/docs/glossary/identifier"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Example identifier system",id:"example-identifier-system",level:3},{value:"The properties of an identifier system:",id:"the-properties-of-an-identifier-system",level:3},{value:"Relationship with KERI / ACDC plus example vLEI",id:"relationship-with-keri--acdc-plus-example-vlei",level:3},{value:"A first implementation of KERI and ACDC has been at GLEIF (.org)",id:"a-first-implementation-of-keri-and-acdc-has-been-at-gleif-org",level:4}],d={toc:c},f="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(f,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"a system for uniquely identifying (public) identities"),(0,r.kt)("h3",{id:"example-identifier-system"},"Example identifier system"),(0,r.kt)("p",null,"The International Standard Name Identifier (ISNI) is an identifier system for uniquely identifying the public identities of contributors to media content such as books, television programmes, and newspaper articles. Such an identifier consists of 16 digits. It can optionally be displayed as divided into four blocks.\nMore info on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/International_Standard_Name_Identifier"},"Wikipedia page")),(0,r.kt)("h3",{id:"the-properties-of-an-identifier-system"},"The properties of an identifier system:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Completeness. Every unique object must be assigned an identifier."),(0,r.kt)("li",{parentName:"ol"},"Uniqueness. Each identifier is a unique sequence."),(0,r.kt)("li",{parentName:"ol"},"Exclusivity. Each identifier is assigned to a unique object, and to no other object."),(0,r.kt)("li",{parentName:"ol"},"Authenticity. The objects that receive identification must be verified as the objects that they are intended to be."),(0,r.kt)("li",{parentName:"ol"},"Aggregation. There must be a mechanism to aggregate all of the data, and only that data, that is properly associated with the identifier (i.e., to bundle all of the data that belong to the uniquely identified object)."),(0,r.kt)("li",{parentName:"ol"},"Permanence. The identifiers and the associated data must be permanent."),(0,r.kt)("li",{parentName:"ol"},"Reconciliation. There should be a mechanism whereby the data associated with a unique, identified object in one resource can be merged with the data held in another resource, for the same unique object. This process, which requires comparison, authentication, and merging, is known as reconciliation."),(0,r.kt)("li",{parentName:"ol"},"Immutability. In addition to being permanent (i.e., never destroyed or lost), the identifier must never change ("),(0,r.kt)("li",{parentName:"ol"},"Security. The identifier system should be as little vulnerable to malicious attack as possible."),(0,r.kt)("li",{parentName:"ol"},"Documentation and quality assurance. Protocols must be written for establishing the identifier system, for assigning identifiers, for protecting the system, and for monitoring the system. "),(0,r.kt)("li",{parentName:"ol"},'Centrality. The subject\'s identifier is the central "key" to which every event for the subject is attached.'),(0,r.kt)("li",{parentName:"ol"},"Autonomy. An identifier system has a life of its own.\\\nBy (",(0,r.kt)("em",{parentName:"li"},"@henkvancann"),") based on this ",(0,r.kt)("a",{parentName:"li",href:"https://www.sciencedirect.com/topics/computer-science/identifier-system"},"source"))),(0,r.kt)("h3",{id:"relationship-with-keri--acdc-plus-example-vlei"},"Relationship with KERI / ACDC plus example vLEI"),(0,r.kt)("p",null,"KERI is an thin-layered identifier system generator, offering globally portable identifiers, secure attribution to their root-of-trust, and chained verifiable credential containers (ACDC) to them."),(0,r.kt)("h4",{id:"a-first-implementation-of-keri-and-acdc-has-been-at-gleif-org"},"A first implementation of KERI and ACDC has been at GLEIF (.org)"),(0,r.kt)("p",null,"Verifiable Credentials (VCs) and the emerging role of the LEI: Verifiable Credentials are digitally signed credentials that are not only tamper-resistant but capable of being verified in decentralized manner. vLEIs are based on the Trust over IP Authentic Chained Data Container (ACDC) specification (based on the Key Event Receipt Infrastructure (KERI) protocol (",(0,r.kt)("a",{parentName:"p",href:"http://github.com/WebOfTrust/keri"},"github.com/WebOfTrust/keri"),"), both Internet Engineering Task Force (IETF) draft specifications).\nVerifiable Credentials are digitally signed credentials that are not only tamper-resistant but capable of being verified in decentralized manner. vLEIs are based on the Trust over IP Authentic Chained Data Container (ACDC) specification (based on the Key Event Receipt Infrastructure (KERI) protocol (",(0,r.kt)("a",{parentName:"p",href:"http://github.com/WebOfTrust/keri"},"github.com/WebOfTrust/keri"),"), both Internet Engineering Task Force (IETF) draft specifications).\nMore info on ",(0,r.kt)("a",{parentName:"p",href:"https://www.gleif.org/en/vlei/introducing-the-verifiable-lei-vlei"},"GLEIF site")))}p.isMDXComponent=!0}}]);