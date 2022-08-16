"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[8739],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return t?o.createElement(m,a(a({ref:n},f),{},{components:t})):o.createElement(m,a({ref:n},f))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4940:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Configuring a Condition",sidebar_position:2},s=void 0,l={unversionedId:"effects/configuring-a-condition",id:"effects/configuring-a-condition",title:"Configuring a Condition",description:"Like effects, mutators, and entity goals, conditions consist of an ID and arguments.",source:"@site/docs/effects/configuring-a-condition.md",sourceDirName:"effects",slug:"/effects/configuring-a-condition",permalink:"/effects/configuring-a-condition",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/configuring-a-condition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring a Condition",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuring an Effect",permalink:"/effects/configuring-an-effect"},next:{title:"add_holder",permalink:"/effects/all-effects/add_holder"}},f={},u=[{value:"Example Condition Config",id:"example-condition-config",level:2},{value:"Not met Effects",id:"not-met-effects",level:2}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Like effects, mutators, and entity goals, conditions consist of an ID and arguments."),(0,i.kt)("h2",{id:"example-condition-config"},"Example Condition Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: has_permission\n  args:\n    permission: "ecomc.rank.mvp" # The required permission\n    inverse: true # If the player should *not* have the permission\n')),(0,i.kt)("p",null,"As shown in the above example, all conditions additionally have an inverse argument, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: on_fire\n  args:\n    inverse: true\n")),(0,i.kt)("p",null,"This will negate the condition, i.e. only be true when the base condition is false."),(0,i.kt)("p",null,"If this condition is for a plugin for items (EcoEnchants, EcoItems, Reforges, Talismans, and EcoArmor) you can also add lore lines to be shown to the player if they don't meet the condition, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: has_permission\n  args:\n    permission: "ecomc.rank.mvp"\n    not-met-lines:\n      - "&cYou need &bMVP&c rank to use &7Crystal Finder"\n      - "&cBuy it at &astore.ecomc.net"\n')),(0,i.kt)("h2",{id:"not-met-effects"},"Not met Effects"),(0,i.kt)("p",null,"If your condition is effect-specific (i.e. in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conditions: []")," section of an effect rather than on the main holder conditions), you can specify not-met-effects."),(0,i.kt)("p",null,"These are effects ran when the condition is not met but a player tries to activate the effect (invoke the trigger)."),(0,i.kt)("p",null,"In config, they look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'effects:\n  - id: give_money\n    args:\n      amount: 100\n    conditions:\n      - id: has_permission\n        args:\n          permission: "ecomc.rank.mvp"\n        not-met-effects;\n          - id: send_message\n            args:\n              message: "&cYou need &bMVP&c rank to use &7Crystal Finder&c, buy it at &astore.ecomc.net&c!"\n    triggers:\n      - break_block\n')),(0,i.kt)("p",null,"So here, MVP players would get $100 for breaking a block, whereas non-MVP players would be told to buy the rank to get the perk when they try to break a block. This functions as an alternative to not-met-lines."))}d.isMDXComponent=!0}}]);