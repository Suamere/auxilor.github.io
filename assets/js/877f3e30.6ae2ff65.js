"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[768],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return n?i.createElement(d,r(r({ref:t},p),{},{components:n})):i.createElement(d,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={title:"The Item Lookup System",sidebar_position:3},s=void 0,u={unversionedId:"all-plugins/the-item-lookup-system",id:"all-plugins/the-item-lookup-system",title:"The Item Lookup System",description:"What is the Item Lookup System?",source:"@site/docs/all-plugins/the-item-lookup-system.md",sourceDirName:"all-plugins",slug:"/all-plugins/the-item-lookup-system",permalink:"/all-plugins/the-item-lookup-system",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/all-plugins/the-item-lookup-system.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"The Item Lookup System",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What plugins do you support?",permalink:"/all-plugins/what-plugins-do-you-support"},next:{title:"The Entity Lookup System",permalink:"/all-plugins/the-entity-lookup-system"}},p={},m=[{value:"What is the Item Lookup System?",id:"what-is-the-item-lookup-system",level:2},{value:"Crafting Recipes",id:"crafting-recipes",level:2},{value:"Keys Explained",id:"keys-explained",level:2},{value:"Modifiers",id:"modifiers",level:2},{value:"Using items in ShopGUIPlus",id:"using-items-in-shopguiplus",level:2}],c={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-item-lookup-system"},"What is the Item Lookup System?"),(0,o.kt)("p",null,"A lot of my plugins have crafting recipes in them and/or add custom items to the server. The Item Lookup system was designed to create a simple, powerful system to have custom item crafting and share items between plugins."),(0,o.kt)("h2",{id:"crafting-recipes"},"Crafting Recipes"),(0,o.kt)("p",null,"If you've ever seen a crafting recipe in a plugin of mine, there's a decent chance that it looked something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'recipe:\n    - ""\n    - "ecoitems:toughened_string 8 ? string 64"\n    - ""\n    - ""\n    - "netherite_chestplate || diamond_chestplate"\n    - ""\n    - "ecoitems:arachnid_oculus ? nether_star 2"\n    - ""\n    - "ecoitems:arachnid_oculus ? nether_star 2"\n')),(0,o.kt)("p",null,"This looks completely meaningless, but it's actually really simple. A crafting recipe is shown as a list of 9 strings, the first three being the top row (left to right), the second three being the middle row (left to right), and the last three being the last row (left to right)."),(0,o.kt)("h2",{id:"keys-explained"},"Keys Explained"),(0,o.kt)("p",null,"In each string is the key for an item. A key looks one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A vanilla minecraft material: (eg ",(0,o.kt)("inlineCode",{parentName:"li"},"golden_apple"),")"),(0,o.kt)("li",{parentName:"ul"},"An item from another plugin: (eg ",(0,o.kt)("inlineCode",{parentName:"li"},"ecoitems:packmaster_tear"),")")),(0,o.kt)("p",null,"You may also have noticed the ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," in some of the items. This means 'try to use the first item, but if it doesn't exist, use the second item' You can chain these together, but they're actually only useful for me to provide integrations in default configs without breaking things for people who don't use all my plugins together."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"||")," to group two items together. This means 'allow the the first item and the second item'. You can chain these together in order to allow many different items."),(0,o.kt)("p",null,"You can specify the amount of any item by having a space and then a number (the stack size). For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"string 64")," would mean a full stack of string."),(0,o.kt)("h2",{id:"modifiers"},"Modifiers"),(0,o.kt)("p",null,"Items can have modifiers applied to them in the key. For example, lets say you're configuring the GUI for EcoSkills. You want it to be a player head with a texture, but you're not sure how to do that, because it looks like you have to just specify a material. Actually, in all of my plugins, wherever it asks for a material, it's actually doing a lookup. You can specify any of the following modifiers to it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enchantments: You specify an enchantment by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"<enchantment>:<level>")," to the key, and you can chain these together"),(0,o.kt)("li",{parentName:"ul"},"Skull Texture: If the material is a player head, you can specify the texture with ",(0,o.kt)("inlineCode",{parentName:"li"},"texture:<base64>"),". A list of skulls and textures can be found ",(0,o.kt)("a",{parentName:"li",href:"https://minecraft-heads.com/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Reforge: If you have reforges installed, you can specify the reforge by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"reforge:<id>")," to the key."),(0,o.kt)("li",{parentName:"ul"},"Name: You can specify the display name of an item with ",(0,o.kt)("inlineCode",{parentName:"li"},"name:<name>"),". You can have multiple words by surrounding the name with quotes: ",(0,o.kt)("inlineCode",{parentName:"li"},'name:"Long Name"')),(0,o.kt)("li",{parentName:"ul"},"Item Flags: You can specify flags for the item to have, by dropping in any of ",(0,o.kt)("a",{parentName:"li",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html"},"these values")," (not case sensitive) "),(0,o.kt)("li",{parentName:"ul"},"Unbreakable: You can make an item unbreakable by having the word ",(0,o.kt)("inlineCode",{parentName:"li"},"unbreakable")," in the flags"),(0,o.kt)("li",{parentName:"ul"},"Custom Model Data: You can specify custom model data with ",(0,o.kt)("inlineCode",{parentName:"li"},"custom-model-data:<id>"))),(0,o.kt)("p",null,"So, lets say you have an EcoBosses boss, and you want it to drop a rare custom weapon with extra modifiers already applied. Without the Item Lookup system, this wouldn't be possible, but thanks to it, you can just do this: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecoitems:enlightened_blade razor:4 unbreaking:3 criticals:2 fire_aspect:2 reforge:mighty unbreakable hide_attributes custom-model-data:2")),(0,o.kt)("h2",{id:"using-items-in-shopguiplus"},"Using items in ShopGUIPlus"),(0,o.kt)("p",null,"If you want to use a lookup item in ShopGUIPlus, just do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'type: item\nitem:\n  eco: "ecoitems:holy_flesh"\n  quantity: 1\nsellPrice: 7500\nslot: 27\n')))}h.isMDXComponent=!0}}]);