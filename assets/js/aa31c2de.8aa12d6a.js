"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6170],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7622:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"getting_started",title:"Getting started",sidebar_label:"Getting started"},l=void 0,c={unversionedId:"getting_started",id:"version-1.x.x/getting_started",isDocsHomePage:!1,title:"Getting started",description:"Before you get started you should definitely familiarize yourself with the original Animated API. It will do you well to be comfortable with how animations are generally done in Animated. (Fun Fact: Reanimated is also backwards compatible with the Animated API. \ud83d\ude4c)",source:"@site/versioned_docs/version-1.x.x/getting-started.md",sourceDirName:".",slug:"/getting_started",permalink:"/react-native-reanimated/docs/1.x.x/getting_started",version:"1.x.x",frontMatter:{id:"getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-1.x.x/docs",previous:{title:"About",permalink:"/react-native-reanimated/docs/1.x.x/"},next:{title:"Declarative Animation API",permalink:"/react-native-reanimated/docs/1.x.x/declarative"}},d=[{value:"Installation",id:"installation",children:[]},{value:"Testing",id:"testing",children:[]}],s={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before you get started you should definitely familiarize yourself with the original ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/animated.html"},"Animated API"),". It will do you well to be comfortable with how animations are generally done in ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated"),". (Fun Fact: Reanimated is also backwards compatible with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated API"),". \ud83d\ude4c)"),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/#motivation"},"Motivation")," section to understand why this library exists"),(0,i.kt)("p",null,"NOTE: Throughout this document when we refer to classes or methods prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," we are referring to them being imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," package instead of plain ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native"),", unless otherwise stated."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"I. First install the library from npm repository using ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  yarn add react-native-reanimated\n")),(0,i.kt)("p",null,"II. For iOS, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"ios")," folder and run ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  cd ios\n  pod install\n")),(0,i.kt)("p",null,'III. When you want to use "reanimated" in your project import it from the ',(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated from 'react-native-reanimated';\n")),(0,i.kt)("p",null,"Similarly when you need ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing")," import it from the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," package instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, { Easing } from 'react-native-reanimated';\n")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"In order to use ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," with Jest, you need to add the following mock implementation at the top of your test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('react-native-reanimated', () =>\n  require('react-native-reanimated/mock')\n);\n")))}p.isMDXComponent=!0}}]);