"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6456],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),p=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(g.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,g=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),k=p(n),u=r,N=k["".concat(g,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var g in e)hasOwnProperty.call(e,g)&&(d[g]=e[g]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},402:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return g},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],d={title:"All Triggers",sidebar_position:5},g=void 0,p={unversionedId:"effects/all-triggers",id:"effects/all-triggers",title:"All Triggers",description:"Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active",source:"@site/docs/effects/all-triggers.md",sourceDirName:"effects",slug:"/effects/all-triggers",permalink:"/effects/all-triggers",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-triggers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"All Triggers",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"within_radius_of",permalink:"/effects/all-conditions/within_radius_of"},next:{title:"The Points System",permalink:"/effects/points"}},o={},m=[],k={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Triggered effects require a trigger, permanent effects do not support triggers and instead always apply when the effect is active"),(0,l.kt)("p",null,"Triggered effects also produce a value, which is used in EcoPets for levelling."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Provided"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alt_click")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when using Right Click on most items, Left Click on those that have a default right click functionality"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bite")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a fish bites on your rod"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"block_item_drop")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a mined block drops loot"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bow_attack")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when shooting an entity with a bow and arrow (or crossbow)"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage dealt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cast_rod")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when casting a fishing line"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"consume")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on item consumption"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"craft")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when crafting an item"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"damage_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when damaging an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"death")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on death from any sources"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enchant_item")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when ehcnahting an item"),(0,l.kt)("td",{parentName:"tr",align:null},"The xp cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enchant_special")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when enchanting an item with a special enchantment ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoEnchants")),(0,l.kt)("td",{parentName:"tr",align:null},"The xp cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity_item_drop")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a killed entity drops loot"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fall_damage")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when taking fall damage"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_hunger")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining hunger points"),(0,l.kt)("td",{parentName:"tr",align:null},"The hunger gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_pet_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining pet experience points ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoPets")),(0,l.kt)("td",{parentName:"tr",align:null},"The experience gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_skill_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining skill experience points ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoSkills")),(0,l.kt)("td",{parentName:"tr",align:null},"The experience gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gain_xp")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining experience points"),(0,l.kt)("td",{parentName:"tr",align:null},"The xp gained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heal")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when regaining health"),(0,l.kt)("td",{parentName:"tr",align:null},"The health regained")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"item_break")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when breaking any item in your inventory (durability)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jump")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when Jumping (pressing space)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kill")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a player kills a player or entity"),(0,l.kt)("td",{parentName:"tr",align:null},"The victim's max health")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kill_boss")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when killing a boss ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoBosses")),(0,l.kt)("td",{parentName:"tr",align:null},"The bosses max health")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level_up_pet")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up a pet ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoPets")),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level_up_skill")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoSkills")),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lose_hunger")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when losing hunger"),(0,l.kt)("td",{parentName:"tr",align:null},"The hunger lost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lose_potion_effect")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when losing a potion effect"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"melee_attack")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when injuring an entity with a melee attack"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage dealt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mine_block")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when mining a block"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mine_block_progress")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when damaging a block"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"move")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on all movement: looking around, walking"),(0,l.kt)("td",{parentName:"tr",align:null},"The distance moved")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"potion_effect")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when gaining a potion effect"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectile_hit")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when hitting a block or an entity with a projectile (arrow, trident, splash potion, egg, snowball)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectile_launch")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when launching a projectile (arrow, trident, splash potion, egg, snowball)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shield_block")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when blocking an attack with a shield"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage blocked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spawn_boss")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when spawning a boss ",(0,l.kt)("strong",{parentName:"td"},"Requires EcoBosses")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"static_%interval%")),(0,l.kt)("td",{parentName:"tr",align:null},"Run every x ticks, eg ",(0,l.kt)("inlineCode",{parentName:"td"},"static_20")," would run every second"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swap_hands")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when swapping items in hands (F by default)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swing")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when swining an item, hand or weapon ",(0,l.kt)("strong",{parentName:"td"},"Requires Paper")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"take_damage")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when taking damage from any source"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"take_entity_damage")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when taking damage from an entity or player"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle_flight")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when chainging the flight state"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle_sneak")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when chainging the sneak state"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggle_sprint")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when chainging the sprint state"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trident_attack")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered on injuring an entity with a thrown trident"),(0,l.kt)("td",{parentName:"tr",align:null},"The damage dealt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"win_raid")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when a player wins a raid"),(0,l.kt)("td",{parentName:"tr",align:null},"The level of bad omen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jobs_level_up")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when levelling up a job ",(0,l.kt)("strong",{parentName:"td"},"Requires Jobs")),(0,l.kt)("td",{parentName:"tr",align:null},"The new level")))))}u.isMDXComponent=!0}}]);