(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{1069:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},682:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(1069)),l={id:"classic-guides-ready-state",title:"Ready State",original_id:"classic-guides-ready-state"},o={unversionedId:"classic-guides-ready-state",id:"version-classic/classic-guides-ready-state",isDocsHomePage:!1,title:"Ready State",description:"Whenever Relay is fulfilling data requirements, it can be useful to know when certain events occur. For example, we might want to record how long it takes for data to be available, or we might want to log errors to the server. These events are available on most Relay APIs via the onReadyStateChange callback.",source:"@site/versioned_docs/version-classic/Classic-Guides-ReadyState.md",slug:"/classic-guides-ready-state",permalink:"/docs/classic/classic-guides-ready-state",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Guides-ReadyState.md",version:"classic",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1614377954,sidebar:"version-classic/docs",previous:{title:"Root Container",permalink:"/docs/classic/classic-guides-root-container"},next:{title:"Mutations",permalink:"/docs/classic/classic-guides-mutations"}},c=[{value:"<code>onReadyStateChange</code>",id:"onreadystatechange",children:[]},{value:"<code>ReadyStateEvent</code>",id:"readystateevent",children:[]},{value:"Examples",id:"examples",children:[{value:"Fetching Data from the Server",id:"fetching-data-from-the-server",children:[]},{value:"Resolving Data from the Client",id:"resolving-data-from-the-client",children:[]},{value:"Server Error",id:"server-error",children:[]},{value:"Force Fetching with Data from the Client",id:"force-fetching-with-data-from-the-client",children:[]}]}],b={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Whenever Relay is fulfilling data requirements, it can be useful to know when certain events occur. For example, we might want to record how long it takes for data to be available, or we might want to log errors to the server. These events are available on most Relay APIs via the ",Object(i.b)("inlineCode",{parentName:"p"},"onReadyStateChange")," callback."),Object(i.b)("h2",{id:"onreadystatechange"},Object(i.b)("inlineCode",{parentName:"h2"},"onReadyStateChange")),Object(i.b)("p",null,"When Relay fulfills data, the ",Object(i.b)("inlineCode",{parentName:"p"},"onReadyStateChange"),' callback is called one or more times with an object that describes the current "ready state". This object has the following properties:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ready: boolean")),Object(i.b)("p",{parentName:"li"},"This is true when the subset of data required for rendering is ready.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"done: boolean")),Object(i.b)("p",{parentName:"li"},"This is true when ",Object(i.b)("em",{parentName:"p"},"all")," data requirements are ready for rendering.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"error: ?Error")),Object(i.b)("p",{parentName:"li"},"This is an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," if there is a failure. Otherwise, this is\n",Object(i.b)("inlineCode",{parentName:"p"},"null"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"events: Array<ReadyStateEvent>")),Object(i.b)("p",{parentName:"li"},"This is an array of events received so far (see ",Object(i.b)("inlineCode",{parentName:"p"},"ReadyStateEvent")," below).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"stale: boolean")),Object(i.b)("p",{parentName:"li"},'When "force fetching", this is true if ',Object(i.b)("inlineCode",{parentName:"p"},"ready")," is true as a result of data being available on the client before the server request has completed.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"aborted: boolean")),Object(i.b)("p",{parentName:"li"},"Whether the request was aborted."))),Object(i.b)("h2",{id:"readystateevent"},Object(i.b)("inlineCode",{parentName:"h2"},"ReadyStateEvent")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ABORT")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CACHE_RESTORED_REQUIRED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CACHE_RESTORE_FAILED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CACHE_RESTORE_START")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NETWORK_QUERY_ERROR")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NETWORK_QUERY_RECEIVED_ALL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NETWORK_QUERY_RECEIVED_REQUIRED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NETWORK_QUERY_START")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"STORE_FOUND_ALL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"STORE_FOUND_REQUIRED"))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"fetching-data-from-the-server"},"Fetching Data from the Server"),Object(i.b)("p",null,"If insufficient data on the client leads Relay to send a server request for more data, we can expect the following behavior:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Once with ",Object(i.b)("inlineCode",{parentName:"li"},"ready")," set to false."),Object(i.b)("li",{parentName:"ol"},"Once with ",Object(i.b)("inlineCode",{parentName:"li"},"ready")," and ",Object(i.b)("inlineCode",{parentName:"li"},"done")," set to true.")),Object(i.b)("h3",{id:"resolving-data-from-the-client"},"Resolving Data from the Client"),Object(i.b)("p",null,"If sufficient data is available on the client such that Relay does not need to send a server request, we can expect the following behavior:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Once with ",Object(i.b)("inlineCode",{parentName:"li"},"ready")," and ",Object(i.b)("inlineCode",{parentName:"li"},"done")," set to true.")),Object(i.b)("h3",{id:"server-error"},"Server Error"),Object(i.b)("p",null,"If a server request results in a failure to load data, we can expect the following behavior:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Once with ",Object(i.b)("inlineCode",{parentName:"li"},"ready")," set to false."),Object(i.b)("li",{parentName:"ol"},"Once with ",Object(i.b)("inlineCode",{parentName:"li"},"error")," set to an ",Object(i.b)("inlineCode",{parentName:"li"},"Error")," object.")),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"ready")," and ",Object(i.b)("inlineCode",{parentName:"p"},"done")," will continue to be false."),Object(i.b)("h3",{id:"force-fetching-with-data-from-the-client"},"Force Fetching with Data from the Client"),Object(i.b)("p",null,'If a "force fetch" occurs and there is insufficient data on the client, the same behavior as ',Object(i.b)("strong",{parentName:"p"},"Fetching Data from the Server"),' can be expected. However, if a "force fetch" occurs and there ',Object(i.b)("em",{parentName:"p"},"is")," sufficient data on the client to render, we can expect the following behavior:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Once with ",Object(i.b)("inlineCode",{parentName:"li"},"ready"),", ",Object(i.b)("inlineCode",{parentName:"li"},"done"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"stale")," set to true."),Object(i.b)("li",{parentName:"ol"},"Once with ",Object(i.b)("inlineCode",{parentName:"li"},"ready")," and ",Object(i.b)("inlineCode",{parentName:"li"},"done")," set to true, but ",Object(i.b)("inlineCode",{parentName:"li"},"stale")," set to false.")))}s.isMDXComponent=!0}}]);