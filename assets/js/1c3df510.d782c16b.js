"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5459],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(a,".").concat(m)]||p[m]||s[m]||i;return r?n.createElement(d,l(l({ref:t},f),{},{components:r})):n.createElement(d,l({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3243:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],c={},a="mob_coins_multiplier",u={unversionedId:"effects/all-effects/mob_coins_multiplier",id:"effects/all-effects/mob_coins_multiplier",title:"mob_coins_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/mob_coins_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/mob_coins_multiplier",permalink:"/effects/all-effects/mob_coins_multiplier",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/mob_coins_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mine_radius_one_deep",permalink:"/effects/all-effects/mine_radius_one_deep"},next:{title:"movement_speed_multiplier",permalink:"/effects/all-effects/movement_speed_multiplier"}},f={},s=[{value:"Permanent Effect",id:"permanent-effect",level:4}],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mob_coins_multiplier"},(0,i.kt)("inlineCode",{parentName:"h1"},"mob_coins_multiplier")),(0,i.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,i.kt)("p",null,"Multiplies mob coin drops"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires TMMobCoins")),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: mob_coins_multiplier\n  args:\n    multiplier: 1.5 # The multiplier\n")))}m.isMDXComponent=!0}}]);