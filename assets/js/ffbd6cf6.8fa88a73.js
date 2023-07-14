"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[33221],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},75681:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const r={sidebar:"HowWeDidSidebar"},i="Chatbots",s={unversionedId:"How we did/Chatbots",id:"How we did/Chatbots",title:"Chatbots",description:"Chatbase and other chatbots",source:"@site/docs/How we did/Chatbots.md",sourceDirName:"How we did",slug:"/How we did/Chatbots",permalink:"/WOT-terms/docs/How we did/Chatbots",draft:!1,tags:[],version:"current",frontMatter:{sidebar:"HowWeDidSidebar"},sidebar:"tutorialSidebar",previous:{title:"Q&A about KERI",permalink:"/WOT-terms/docs/Education/Q-and-A"},next:{title:"Create search index",permalink:"/WOT-terms/docs/How we did/Create-search-index"}},l={},c=[{value:"Chatbase and other chatbots",id:"chatbase-and-other-chatbots",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chatbots"},"Chatbots"),(0,n.kt)("h2",{id:"chatbase-and-other-chatbots"},"Chatbase and other chatbots"),(0,n.kt)("p",null,"Chatbase only used the sources uploaded to it. However, it is built on chatGPT's gpt model and it has been known to sometimes break out of character and act as ChatGPT."),(0,n.kt)("p",null,"Therefore, it has to be explicitly instructed in the base prompt to only respond with answers from the data it was trained on, and to never break character."),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@chatbase.co"},"support@chatbase.co")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The overall problem with these chatbots is the way how the bot is trained. Take a look on official documentation of OpenAPI (since chatbase claims to use GPT3.5 and 4): ",(0,n.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/fine-tuning"},"https://platform.openai.com/docs/guides/fine-tuning")),(0,n.kt)("p",null,"This is limited to specific models: davinci, curie, babbage, and ada. You can't actually train/ fine tune  GPT3.5 and 4 as you need it, you need to pick models which can be fine tuned. More info here: ",(0,n.kt)("a",{parentName:"p",href:"https://openai.com/blog/how-should-ai-systems-behave"},"https://openai.com/blog/how-should-ai-systems-behave"),"\nBasically those models are already pre-trained and the process is not easy (cheap)."),(0,n.kt)("p",null,"You could use Bloom or other models which allows you to fine tune it but the UI around it you would need to build on your own (so basically what chatbase provides)."),(0,n.kt)("p",null,"Keep in mind that with simple queries you can run out of funds relatively quickly as GPT3.5 and 4 is quite expensive and since you can't pre-train it it feeds the document each time when someone ask query."),(0,n.kt)("p",null,"For this site it would be worth to take a look what PaLM2 offers since it can be fine tuned and you can use smaller models for that."),(0,n.kt)("p",null,"Bart says:"),(0,n.kt)("p",null,"\u201cThere are a few ways to train or fine-tune the PaLM2 model with the content of your documents for a specific case."),(0,n.kt)("p",null,"Google Cloud Platform: You can use the Google Cloud Platform to train or fine-tune the PaLM2 model on your own data. This requires some technical expertise, but it gives you the most control over the training process.\nColaboratory: You can use Google Colaboratory to train or fine-tune the PaLM2 model on your own data. This is a more user-friendly option than the Google Cloud Platform, but you have less control over the training process.\nHugging Face: You can use the Hugging Face Transformers library to train or fine-tune the PaLM2 model on your own data. This is a more flexible option than the Google Cloud Platform or Colaboratory, but it requires some knowledge of the Transformers library.\nHere are some specific examples of how you can train or fine-tune the PaLM2 model with the content of your documents:"),(0,n.kt)("p",null,"You can train the PaLM2 model on a dataset of documents that are similar to the documents you want to use the model on. This will help the model to learn the patterns and vocabulary that are specific to your documents.\nYou can fine-tune the PaLM2 model on a dataset of documents that contain the specific terms or phrases that you want the model to be able to recognize. This will help the model to learn to identify these terms or phrases in new documents.\nI hope this helps!\u201d"),(0,n.kt)("p",null,"Keep in mind that Bart and PaLM2 are not available in EU zone/ Canada."),(0,n.kt)("p",null,"Source: Robert Mitwicki"))}h.isMDXComponent=!0}}]);