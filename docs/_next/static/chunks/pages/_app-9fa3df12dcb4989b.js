(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return i}});var r=n(1720),a=n(9008),o=(0,r.createContext)({setTheme:function(e){},themes:[]}),i=function(){return(0,r.useContext)(o)},l=["light","dark"],c="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,i=e.enableSystem,s=void 0===i||i,h=e.enableColorScheme,v=void 0===h||h,p=e.storageKey,g=void 0===p?"theme":p,y=e.themes,w=void 0===y?["light","dark"]:y,b=e.defaultTheme,x=void 0===b?s?"system":"light":b,_=e.attribute,k=void 0===_?"data-theme":_,T=e.value,Z=e.children,E=(0,r.useState)((function(){return f(g,x)})),O=E[0],j=E[1],C=(0,r.useState)((function(){return f(g)})),M=C[0],z=C[1],S=T?Object.values(T):w,I=(0,r.useCallback)((function(e){var n=m(e);z(n),"system"!==O||t||L(n,!1)}),[O,t]),N=(0,r.useRef)(I);N.current=I;var L=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==T?void 0:T[e])||e,o=a&&n?d():null;if(t)try{localStorage.setItem(g,e)}catch(e){}if("system"===e&&s){var i=m();r=(null==T?void 0:T[i])||i}if(n){var l,c=document.documentElement;"class"===k?((l=c.classList).remove.apply(l,S),c.classList.add(r)):c.setAttribute(k,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return N.current.apply(N,[].slice.call(arguments))},t=window.matchMedia(c);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var B=(0,r.useCallback)((function(e){t?L(e,!0,!1):L(e),j(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===g&&B(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[B]),(0,r.useEffect)((function(){if(v){var e=t&&l.includes(t)?t:O&&l.includes(O)?O:"system"===O&&M||null;document.documentElement.style.setProperty("color-scheme",e)}}),[v,O,M,t]),r.default.createElement(o.Provider,{value:{theme:O,setTheme:B,forcedTheme:t,resolvedTheme:"system"===O?M:O,themes:s?[].concat(w,["system"]):w,systemTheme:s?M:void 0}},r.default.createElement(u,{forcedTheme:t,storageKey:g,attribute:k,value:T,enableSystem:s,defaultTheme:x,attrs:S}),Z)},u=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,o=e.attribute,i=e.enableSystem,l=e.defaultTheme,s=e.value,u="class"===o?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==s?void 0:s[e])||e;var n=t?e:"'"+e+"'";return"class"===o?"d.add("+n+")":"d.setAttribute('"+o+"', "+n+")"},d="system"===l;return r.default.createElement(a.default,null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+u+f(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+u+"var e=localStorage.getItem('"+n+"');"+(d?"":f(l)+";")+'if("system"===e||(!e&&'+d+')){var t="'+c+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+f(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+u+'var e=localStorage.getItem("'+n+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+f(s?"x[e]":"e",!0)+"}else{"+f(l)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),f=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},d=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},m=function(e){return e||(e=window.matchMedia(c)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(a=n.g.process)||void 0===a?void 0:a.env)?n.g.process:n(7663)},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3495)}])},7966:function(e,t,n){"use strict";var r=n(6690),a=n(1664);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.href,n=l(e,["href"]),o=t&&t.startsWith("/"),c=t&&t.startsWith("#");return o?(0,r.tZ)(a.default,{href:t,children:(0,r.tZ)("a",i({},n))}):c?(0,r.tZ)("a",i({href:t},n)):(0,r.tZ)("a",i({target:"_blank",rel:"noopener noreferrer",href:t},n))}},1536:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(6690);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},4273:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,a,o=n(6690),i=n(1720);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c;function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var d;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var h;function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var p;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",s({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),u||(u=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),d||(d=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",v({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),p||(p=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},w=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=y[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},1576:function(e,t,n){"use strict";var r=n(3454),a={title:"Seonghyeon Kim",author:"Seonghyeon Kim",headerTitle:"Seonghyeon Kim",description:"Develop to solve problems and for fun",language:"ko-kr",theme:"system",siteUrl:"https://seonghyeonkimm.github.io/",siteRepo:"https://github.com/seonghyeonkimm/seonghyeonkimm.github.io",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/og-card.png",email:"impressor7@gmail.com",github:"https://github.com/seonghyeonkimm",twitter:"https://twitter.com/seonghyeon___",facebook:"",youtube:"",linkedin:"https://www.linkedin.com/in/seonghyeon-kim-328757b7/",locale:"ko-KR",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:"",googleTagManagerId:"GTM-KJNTQFR"},newsletter:{provider:""},comment:{provider:"giscus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:"",lang:"ko",inputPosition:"top",loading:"lazy"},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=n(1720))&&o.__esModule?o:{default:o},l=n(1003),c=n(880),s=n(9246);var u={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,m=o.as,h=e.children,v=e.replace,p=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var w=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,b=a(s.useIntersection({rootMargin:"200px"}),2),x=b[0],_=b[1],k=i.default.useCallback((function(e){x(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,x]);i.default.useEffect((function(){var e=_&&n&&l.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,a=u[d+"%"+m+(t?"%"+t:"")];e&&!a&&f(r,d,m,{locale:t})}),[m,d,_,y,n,r]);var T={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:i}))}(e,r,d,m,v,p,g,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof y?y:r&&r.locale,E=r&&r.isLocaleDomain&&l.getDomainLocale(m,Z,r&&r.locales,r&&r.domainLocales);T.href=E||l.addBasePath(l.addLocale(m,Z,r&&r.defaultLocale))}return i.default.cloneElement(t,T)};t.default=d},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],m=f[1],h=a(o.useState(t?t.current:null),2),v=h[0],p=h[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),s.push(n));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:a}),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(a);var t=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:v,rootMargin:n}))}),[r,v,n,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&p(t.current)}),[t]),[g,d]};var o=n(1720),i=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},3495:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(6690),a=(n(2604),n(7661),n(3941),n(8102),n(425)),o=n(9008),i=n(1576),l=n.n(i),c=n(4298),s=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(c.default,{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(l().analytics.googleAnalyticsId)}),(0,r.tZ)(c.default,{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(l().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})},u=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(c.default,{id:"gtm-script",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer', '".concat(l().analytics.googleTagManagerId,"');\n")}}),(0,r.tZ)("noscript",{children:(0,r.tZ)("iframe",{title:"gtm-iframe",height:"0",width:"0",style:{display:"none",visibility:"hidden"},src:"https://www.googletagmanager.com/ns.html?id=".concat(l().analytics.googleTagManagerId)})})]})};var f,d,m=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(c.default,{strategy:"lazyOnload","data-domain":l().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,r.tZ)(c.default,{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},h=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(c.default,{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,r.tZ)(c.default,{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},v=function(){return(0,r.tZ)(r.HY,{children:(0,r.tZ)(c.default,{async:!0,defer:!0,"data-website-id":l().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},p=function(){return(0,r.BX)(r.HY,{children:[l().analytics.plausibleDataDomain&&(0,r.tZ)(m,{}),l().analytics.simpleAnalytics&&(0,r.tZ)(h,{}),l().analytics.umamiWebsiteId&&(0,r.tZ)(v,{}),l().analytics.googleAnalyticsId&&(0,r.tZ)(s,{}),l().analytics.googleTagManagerId&&(0,r.tZ)(u,{})]})},g=[{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/about",title:"About"}],y=n(1720);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var b=function(e){return y.createElement("svg",w({id:"logo_svg__Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 500 500",style:{enableBackground:"new 0 0 500 500"},xmlSpace:"preserve"},e),f||(f=y.createElement("style",null,".logo_svg__st0{fill:#fddf7f}")),d||(d=y.createElement("path",{className:"logo_svg__st0",d:"M198.709 105.373c-17.072-14.62-38.245-23.682-60.489-26.019-13.531 18.706-20.964 41.345-21.033 64.58 18.434 3.538 36.401 10.112 53.087 19.749 5.726-21.38 15.5-41.1 28.435-58.31zM382.812 143.934c-.069-23.235-7.501-45.874-21.032-64.58-22.243 2.337-43.417 11.399-60.489 26.019 12.935 17.21 22.709 36.93 28.435 58.31 16.686-9.636 34.652-16.211 53.086-19.749z"})),y.createElement("path",{d:"M495 348.043c-17.119-17.913-44.733-31.678-77.75-38.222-.668.69-1.32 1.39-2.002 2.072-44.773 44.773-108.176 59.496-165.248 44.266-57.072 15.23-120.475.508-165.248-44.265-.682-.682-1.335-1.381-2.002-2.072C49.733 316.365 22.118 330.13 5 348.043c18.346 19.199 48.743 33.641 84.931 39.527l.003-.003c-18.748 19.667-23.392 42.912-13.942 64.358 36.183 5.848 75.468 2.785 108.382-9.195 9.478 22.282 33.522 41.018 65.627 52.269 32.103-11.251 56.146-29.987 65.625-52.269 32.914 11.98 72.199 15.042 108.382 9.195 9.45-21.445 4.806-44.689-13.939-64.355 36.187-5.886 66.585-20.328 84.931-39.527z",style:{fill:"#83e1e5"}}),y.createElement("path",{d:"M459.514 146.645c-43.251-11.542-90.13-5.865-129.788 17.038-11.847-44.238-40.982-81.4-79.726-103.822-38.744 22.421-67.878 59.584-79.726 103.822-39.659-22.904-86.537-28.58-129.788-17.038-15.23 57.072-.507 120.476 44.266 165.249C129.525 356.667 192.928 371.39 250 356.159c57.073 15.23 120.475.508 165.248-44.265 44.773-44.774 59.496-108.177 44.266-165.249z",style:{fill:"#ecf4f7"}}),y.createElement("path",{d:"M234.025 15.975a5 5 0 0 1 5-5H245V5a5 5 0 1 1 10 0v5.975h5.975a5 5 0 1 1 0 10H255v5.975a5 5 0 1 1-10 0v-5.975h-5.975a5 5 0 0 1-5-5zM410.067 101h5.975v5.975a5 5 0 1 0 10 0V101h5.975a5 5 0 1 0 0-10h-5.975v-5.975a5 5 0 1 0-10 0V91h-5.975a5 5 0 1 0 0 10zm-342.084 0h5.975v5.975a5 5 0 1 0 10 0V101h5.975a5 5 0 1 0 0-10h-5.975v-5.975a5 5 0 1 0-10 0V91h-5.975a5 5 0 1 0 0 10zm430.632 243.589c-12.936-13.536-31.514-24.768-53.727-32.479a5 5 0 1 0-3.279 9.447c18.763 6.514 34.649 15.62 46.278 26.486-17.569 16.395-44.874 28.68-76.082 34.16a101.977 101.977 0 0 0-5.846-5.353l-.12-.101a110.401 110.401 0 0 0-2.707-2.215l-.37-.285a114.661 114.661 0 0 0-2.603-1.99c-.162-.12-.328-.239-.495-.357l-.291-.209a129.206 129.206 0 0 0-2.33-1.666c-.33-.228-.669-.453-1.007-.678l-.951-.638c-.435-.293-.868-.587-1.312-.874a132.33 132.33 0 0 0-3.43-2.149 5 5 0 1 0-5.179 8.554c1.08.654 2.137 1.317 3.175 1.99.389.251.765.506 1.142.761l1.025.688c.285.189.57.378.846.568.729.504 1.433 1.016 2.133 1.525l.727.522c.809.599 1.597 1.205 2.373 1.815l.34.262c.842.666 1.661 1.338 2.432 1.988l.142.119c2.479 2.1 4.818 4.3 6.952 6.538 16.455 17.264 21.374 37.193 14.01 56.395-33.207 4.92-68.602 2.104-98.38-7.753 3.429-10.789 3.701-22.676.694-34.022-2.705-10.212-8.027-19.674-15.39-27.363a5 5 0 0 0-7.222 6.916c6.196 6.47 10.673 14.426 12.946 23.008 2.914 10.999 2.174 22.566-2.083 32.572-8.596 20.203-30.787 37.971-61.024 48.919-11.477-4.153-21.839-9.284-30.822-15.263-11.502-7.656-20.311-16.372-26.18-25.905-7.568-12.292-9.81-26.277-6.311-39.377 2.301-8.616 6.985-16.999 13.548-24.243a5.001 5.001 0 0 0-7.411-6.714c-7.627 8.418-13.09 18.23-15.8 28.377-2.91 10.899-2.544 22.265.931 33.082-29.787 9.867-65.199 12.687-98.417 7.766-7.364-19.204-2.444-39.134 14.014-56.398a90.16 90.16 0 0 1 6.942-6.53c.023-.019.102-.083.124-.103.8-.675 1.617-1.346 2.458-2.011l.337-.26c.776-.61 1.564-1.216 2.374-1.815l.722-.518c.704-.513 1.408-1.024 2.135-1.527.277-.192.563-.381.848-.57l1.025-.688c.377-.255.753-.51 1.145-.763 1.035-.67 2.092-1.333 3.172-1.988a5 5 0 1 0-5.179-8.554 132.424 132.424 0 0 0-3.427 2.147c-.446.289-.88.582-1.314.875l-.951.638c-.338.225-.677.45-1.009.68-.793.549-1.562 1.106-2.332 1.667l-.287.206c-.167.118-.333.237-.494.356-.889.657-1.753 1.322-2.604 1.991l-.368.284a106.82 106.82 0 0 0-2.688 2.2l-.145.121a101.933 101.933 0 0 0-5.841 5.349c-31.21-5.48-58.514-17.764-76.083-34.16 11.688-10.923 27.661-20.065 46.529-26.587a5 5 0 0 0-3.267-9.451c-22.323 7.717-40.992 18.985-53.989 32.585a5 5 0 0 0 0 6.909c17.971 18.805 45.835 32.639 79.096 39.418-14.979 19.419-18.338 41.978-9.063 63.025a5 5 0 0 0 3.777 2.92c12.103 1.956 24.518 2.918 36.901 2.918 24.243 0 48.354-3.692 69.695-10.851a66.464 66.464 0 0 0 2.693 4.838c6.632 10.772 16.44 20.524 29.154 28.987 10.108 6.728 21.786 12.435 34.71 16.964a4.984 4.984 0 0 0 3.306 0c31.649-11.092 55.604-29.436 66.577-50.783 21.336 7.154 45.436 10.844 69.673 10.844 12.382 0 24.802-.963 36.901-2.918a4.997 4.997 0 0 0 3.777-2.92c9.276-21.05 5.915-43.612-9.069-63.033 32.908-6.767 61.408-20.896 79.102-39.41a5 5 0 0 0-.002-6.908zm-337.38-111.442a5 5 0 1 0 9.898-1.419 161.813 161.813 0 0 1-.504-3.841 5.001 5.001 0 0 0-9.93 1.186c.164 1.364.342 2.721.536 4.074zM35.276 235.13c-7.582-29.39-7.451-60.434.379-89.775a5.002 5.002 0 0 1 3.542-3.542c23.935-6.387 48.959-7.543 73.177-3.723 1.208-22.049 8.832-43.748 21.794-61.666a4.993 4.993 0 0 1 4.573-2.042c21.717 2.282 42.056 10.519 59.154 23.884 13.698-17.139 30.524-31.693 49.6-42.732a5.001 5.001 0 0 1 5.008 0c19.076 11.039 35.901 25.593 49.6 42.732 17.099-13.365 37.438-21.602 59.154-23.884a4.997 4.997 0 0 1 4.573 2.042c12.962 17.918 20.587 39.617 21.794 61.666 24.218-3.82 49.242-2.664 73.177 3.724a5.002 5.002 0 0 1 3.542 3.542c7.83 29.341 7.961 60.385.379 89.775-7.814 30.292-23.701 58.06-45.94 80.299s-50.006 38.125-80.298 45.939a176.8 176.8 0 0 1-44.155 5.592c-14.912 0-29.82-1.895-44.33-5.649a177.056 177.056 0 0 1-44.33 5.649 176.794 176.794 0 0 1-44.155-5.592c-30.292-7.814-58.059-23.7-80.298-45.939s-38.125-50.007-45.94-80.3zm300.226-68.955a176.425 176.425 0 0 1 5.046 41.835c0 31.451-8.401 62.318-24.295 89.264-13.342 22.619-31.648 42.021-53.363 56.695 53.774 10.277 109.868-6.657 148.823-45.611 41.08-41.08 57.683-101.227 43.695-157.607-40.309-9.99-83.636-4.407-119.906 15.424zm-27.378-59.925c2.875 4.047 5.6 8.207 8.129 12.495a174.86 174.86 0 0 1 16.542 37.543c14.175-7.498 29.323-12.967 44.927-16.34-.823-19.629-7.241-39.018-18.317-55.277-18.809 2.494-36.395 9.906-51.281 21.579zm-185.845 33.699c15.604 3.373 30.751 8.842 44.927 16.34a174.86 174.86 0 0 1 16.542-37.543 175.826 175.826 0 0 1 8.129-12.495c-14.887-11.673-32.472-19.086-51.281-21.579-11.076 16.259-17.494 35.648-18.317 55.277zM88.287 308.358c38.957 38.955 95.05 55.889 148.825 45.61-36.532-24.701-62.853-62.517-72.971-105.442a5 5 0 1 1 9.733-2.294c10.204 43.286 37.877 81.077 76.126 104.12 49.758-29.976 80.548-84.246 80.548-142.342 0-58.096-30.79-112.366-80.548-142.342-49.758 29.976-80.548 84.246-80.548 142.342a5 5 0 1 1-10 0c0-14.167 1.72-28.211 5.046-41.835-36.271-19.831-79.594-25.414-119.906-15.424-13.988 56.38 2.615 116.527 43.695 157.607z",style:{fill:"#1c1d21"}}))},x=n(7966),_=n(1536),k=n(4273);function T(){return(0,r.tZ)("footer",{children:(0,r.BX)("div",{className:"mt-16 flex flex-col items-center",children:[(0,r.BX)("div",{className:"mb-3 flex space-x-4",children:[l().email&&(0,r.tZ)(k.Z,{kind:"mail",href:"mailto:".concat(l().email),size:6}),l().github&&(0,r.tZ)(k.Z,{kind:"github",href:l().github,size:6}),l().facebook&&(0,r.tZ)(k.Z,{kind:"facebook",href:l().facebook,size:6}),l().youtube&&(0,r.tZ)(k.Z,{kind:"youtube",href:l().youtube,size:6}),l().linkedin&&(0,r.tZ)(k.Z,{kind:"linkedin",href:l().linkedin,size:6}),l().twitter&&(0,r.tZ)(k.Z,{kind:"twitter",href:l().twitter,size:6})]}),(0,r.BX)("div",{className:"mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,r.tZ)("div",{children:l().author}),(0,r.tZ)("div",{children:" \u2022 "}),(0,r.tZ)("div",{children:"\xa9 ".concat((new Date).getFullYear())})]}),(0,r.tZ)("div",{className:"mb-8 text-sm text-gray-500 dark:text-gray-400",children:(0,r.tZ)(x.Z,{href:"https://github.com/timlrx/tailwind-nextjs-starter-blog",children:"Tailwind Nextjs Theme"})})]})})}var Z=function(){var e=(0,y.useState)(!1),t=e[0],n=e[1],a=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,r.BX)("div",{className:"sm:hidden",children:[(0,r.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:a,children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?(0,r.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,r.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,r.BX)("div",{className:"fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,r.tZ)("button",{type:"button","aria-label":"toggle modal",className:"fixed h-full w-full cursor-auto focus:outline-none",onClick:a}),(0,r.tZ)("nav",{className:"fixed mt-8 h-full",children:g.map((function(e){return(0,r.tZ)("div",{className:"px-12 py-4",children:(0,r.tZ)(x.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:a,children:e.title})},e.title)}))})]})]})},E=function(){var e=(0,y.useState)(!1),t=e[0],n=e[1],o=(0,a.F)(),i=o.theme,l=o.setTheme,c=o.resolvedTheme;return(0,y.useEffect)((function(){return n(!0)}),[]),(0,r.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return l("dark"===i||"dark"===c?"light":"dark")},children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==i&&"dark"!==c?(0,r.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,r.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},O=function(e){var t=e.children;return(0,r.tZ)(_.Z,{children:(0,r.BX)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,r.tZ)("div",{children:(0,r.tZ)(x.Z,{href:"/","aria-label":l().headerTitle,children:(0,r.BX)("div",{className:"flex items-center justify-between",children:[(0,r.tZ)("div",{className:"mr-3",children:(0,r.tZ)(b,{style:{width:40}})}),"string"===typeof l().headerTitle?(0,r.tZ)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:l().headerTitle}):l().headerTitle]})})}),(0,r.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,r.tZ)("div",{className:"hidden sm:block",children:g.map((function(e){return(0,r.tZ)(x.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,r.tZ)(E,{}),(0,r.tZ)(Z,{})]})]}),(0,r.tZ)("main",{className:"mb-auto",children:t}),(0,r.tZ)(T,{})]})})};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function M(e){var t=e.Component,n=e.pageProps;return(0,r.BX)(a.f,{attribute:"class",defaultTheme:l().theme,children:[(0,r.tZ)(o.default,{children:(0,r.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,r.tZ)(p,{}),(0,r.tZ)(O,{children:(0,r.tZ)(t,C({},n))})]})}},8102:function(){},3941:function(){},7661:function(){},2604:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,c=[],s=!1,u=-1;function f(){s&&l&&(s=!1,l.length?c=l.concat(c):u=-1,c.length&&d())}function d(){if(!s){var e=i(f);s=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||s||i(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(162);e.exports=a}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},4298:function(e,t,n){e.exports=n(3573)},6690:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.Fragment},tZ:function(){return r.jsx},BX:function(){return r.jsxs}});var r=n(6584)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxs:function(){return o},jsxDEV:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i){var l,c,s={};for(c in t)"ref"==c?l=t[c]:s[c]=t[c];var u={type:e,props:s,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:o,__self:i};if("function"==typeof e&&(l=e.defaultProps))for(c in l)void 0===s[c]&&(s[c]=l[c]);return r.YM.vnode&&r.YM.vnode(u),u}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(6363),t(880)}));var n=e.O();_N_E=n}]);