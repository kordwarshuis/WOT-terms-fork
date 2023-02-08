"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"terms/glossary/integrity",id:"terms/glossary/integrity",title:"integrity",description:"Definition",source:"@site/docs/terms/glossary/integrity.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/integrity",permalink:"/WOT-terms/docs/terms/glossary/integrity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inquisitor",permalink:"/WOT-terms/docs/terms/glossary/inquisitor"},next:{title:"interaction-event",permalink:"/WOT-terms/docs/terms/glossary/interaction-event"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"KERI suite criteria",id:"keri-suite-criteria",level:2},{value:"ToIP related",id:"toip-related",level:2},{value:"See also",id:"see-also",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Integrity (of a message or data) means that the information is whole, sound, and unimpaired (not necessarily correct). It means nothing is missing from the information; it is complete and in intended good order. (Source: Neil Thomson)"),(0,i.kt)("h2",{id:"keri-suite-criteria"},"KERI suite criteria"),(0,i.kt)("p",null,'In KERI\'s "security first" approach Authenticity includes ',(0,i.kt)("em",{parentName:"p"},"technical integrity")," of data involved. This includes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"internal-inconsistency"},"internal consistency")),(0,i.kt)("li",{parentName:"ol"},"external consistency or ",(0,i.kt)("a",{parentName:"li",href:"duplicity"},"duplicity")," evident")),(0,i.kt)("p",null,'Integrity in ACDCs is "self-verifying": the ',(0,i.kt)("a",{parentName:"p",href:"self-adressing-identifier"},"SAID")," that is contained in the data is also the of hash of the data."),(0,i.kt)("p",null,"The integrity of streaming data in ",(0,i.kt)("a",{parentName:"p",href:"composable-event-streaming-representation"},"CESR")," and ",(0,i.kt)("a",{parentName:"p",href:"cesr-proof-signature"},"CESR proof signatures")," is established by code tables and verifiable by the mere (killer-)feature: round-robin ",(0,i.kt)("a",{parentName:"p",href:"composability"},"composability"),". If you can toggle between the text - and binary representation, ",(0,i.kt)("em",{parentName:"p"},"then that's the integrity proof"),", if not, then it's provably lacking integrity."),(0,i.kt)("p",null,"A side-benefit of how integrity is implemented in KERI is ",(0,i.kt)("a",{parentName:"p",href:"non-repudiable"},"non-repudiation")," - done via a crypto-hash verification via the signer's public key - is not inherent in the meaning of integrity."),(0,i.kt)("p",null,"Furthermore for KERI integrity, as an assessment of the substance or the content itself, does not fall within its narrow definition.\n",(0,i.kt)("strong",{parentName:"p"},"Our criterium is cryptographic verifiability"),". Once you can't verify, for KERI this type of non-technical integrity is not included in ",(0,i.kt)("inlineCode",{parentName:"p"},"integrity"),". For the same reason we wouldn't use ",(0,i.kt)("a",{parentName:"p",href:"validate"},"validation"),"* as a mechanism to prove integrity."),(0,i.kt)("h2",{id:"toip-related"},"ToIP related"),(0,i.kt)("p",null,"On today's Technology Architecture TF call,..., we defined authenticity to include integrity.\\\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/TechArch/issues/10"},"Source ToIP issue 10")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/TechArch/issues/10"},"message integrity")," seems to be included in ",(0,i.kt)("inlineCode",{parentName:"p"},"technical integrity"),"."),(0,i.kt)("p",null,"The further separation of Authenticity and Integrity in the ToIP glossary can be largely adopted by KERI? {TBW}"),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"verified-integrity"},"verified integrity"),"\\\n",(0,i.kt)("a",{parentName:"p",href:"complementary-integrity-verification"},"(complementary) integrity verification")),(0,i.kt)("p",null,"*Validation in relation to integrity, in KERI's view would be an assessment of what's been verified before; in a certain context from a certain angle. And this mechanism is too close to ",(0,i.kt)("em",{parentName:"p"},"veracity judgement"),", to be an objective verdict over integrity of data."))}d.isMDXComponent=!0}}]);