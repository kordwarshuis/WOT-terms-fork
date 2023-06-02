"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[2362],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(d,s(s({ref:r},p),{},{components:t})):n.createElement(d,s({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},28902:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={},s="Create search index",i={unversionedId:"howto/Create-search-index",id:"howto/Create-search-index",title:"Create search index",description:"",source:"@site/docs/howto/Create-search-index.md",sourceDirName:"howto",slug:"/howto/Create-search-index",permalink:"/WOT-terms/docs/howto/Create-search-index",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WOT Howto's",permalink:"/WOT-terms/docs/howto/intro"},next:{title:"Algolia search install and configuration",permalink:"/WOT-terms/docs/howto/algolia-search-install-config"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-search-index"},"Create search index"),(0,o.kt)("mermaid",{value:'\ngraph TD\n    Start --\x3e\n\n    Scraper["Scraper\\n(Node.js)"]\n    \n    Scraper --\x3e|Multiple domains synchronously|N{"Site 1: \\n remote sitemap.xml exists?"}\n    \n    Scraper --\x3e |Multiple domains synchronously|M{"Site 2: \\n remote sitemap.xml exists?"} --\x3e ...\n    \n    N --\x3e |Yes| B[Scrape using remote sitemap]\n    \n    N --\x3e |No| O{"List of urls on a page exists?"} \n    \n    O --\x3e |Yes| P[Scrape using list of urls on a page]\n\n    O --\x3e |No| sdf["Create sitemap.xml manually or via WGET"]\n\n    sdf --\x3e fgkwiw["Scrape using manually created sitemap.xml"]\n\n    assignKeys["Assign scrape results to keys in array"]\n    \n    B --\x3e assignKeys\n    fgkwiw --\x3e assignKeys\n    P --\x3e assignKeys\n    \n    assignKeys --\x3e storeJson["Store in JSON file"]\n    storeJson --\x3e storeJsonl["Convert to JSONL file"]\n    storeJsonl --\x3e Import["Import in TypeSense index (via Curl)"]\n    \n\n\n'}))}m.isMDXComponent=!0}}]);