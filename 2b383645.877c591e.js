(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(1069)),i={id:"classic-guides-routes",title:"Routes",original_id:"classic-guides-routes"},s={unversionedId:"classic-guides-routes",id:"version-classic/classic-guides-routes",isDocsHomePage:!1,title:"Routes",description:"Routes are responsible for defining the entry points into a Relay application. But in order to understand why routes are necessary, we must first understand the difference between GraphQL queries and fragments.",source:"@site/versioned_docs/version-classic/Classic-Guides-Routes.md",slug:"/classic-guides-routes",permalink:"/docs/classic/classic-guides-routes",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Guides-Routes.md",version:"classic",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1614377954,sidebar:"version-classic/docs",previous:{title:"Containers",permalink:"/docs/classic/classic-guides-containers"},next:{title:"Root Container",permalink:"/docs/classic/classic-guides-root-container"}},u=[{value:"Queries vs. Fragments",id:"queries-vs-fragments",children:[]},{value:"Routes and Queries",id:"routes-and-queries",children:[]}],c={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Routes are responsible for defining the entry points into a Relay application. But in order to understand why routes are necessary, we must first understand the difference between GraphQL queries and fragments."),Object(o.b)("blockquote",null,"Note",Object(o.b)("p",null,"Relay routes don't really implement any URL routing specific logic or work with History API. In the future we will maybe rename RelayRoute to be something more like RelayQueryRoots or RelayQueryConfig. For more information around why Relay doesn't provide URL-routing features, and suggestions for such solutions, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@cpojer/relay-and-routing-36b5439bad9"}),"this post"),".")),Object(o.b)("h2",{id:"queries-vs-fragments"},"Queries vs. Fragments"),Object(o.b)("p",null,"In GraphQL, ",Object(o.b)("strong",{parentName:"p"},"queries")," declare fields that exist on the root query type. For example, the following query might fetch the name of the user with an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of ",Object(o.b)("inlineCode",{parentName:"p"},"123"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'\nquery UserQuery {\n  user(id: "123") {\n    name,\n  },\n}\n\n')),Object(o.b)("p",null,"On the other hand, GraphQL ",Object(o.b)("strong",{parentName:"p"},"fragments")," declare fields that exist on any arbitrary type. For example, the following fragment fetches the profile picture URI for ",Object(o.b)("em",{parentName:"p"},"some")," ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nfragment UserProfilePhoto on User {\n  profilePhoto(size: $size) {\n    uri,\n  },\n}\n\n")),Object(o.b)("p",null,"Fragments can be embedded within other fragments or queries. For example, the above fragment could be used to fetch user ",Object(o.b)("inlineCode",{parentName:"p"},"123"),"'s profile photo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'\nquery UserQuery {\n  user(id: "123") {\n    ...UserProfilePhoto,\n  },\n}\n\n')),Object(o.b)("p",null,"However, the fragment could also fetch each of user ",Object(o.b)("inlineCode",{parentName:"p"},"123"),"'s friends' profile photos:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'\nquery UserQuery {\n  user(id: "123") {\n    friends(first: 10) {\n      edges {\n        node {\n          ...UserProfilePhoto,\n        },\n      },\n    },\n  },\n}\n\n')),Object(o.b)("p",null,"Since Relay containers define fragments and not queries, they can be easily embedded in multiple contexts. Like React components, Relay containers are highly reusable."),Object(o.b)("h2",{id:"routes-and-queries"},"Routes and Queries"),Object(o.b)("p",null,"Routes are objects that define a set of root queries and input parameters. Here is a simple route that might be used to render user ",Object(o.b)("inlineCode",{parentName:"p"},"123"),"'s profile:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar profileRoute = {\n  queries: {\n    // Routes declare queries using functions that return a query root. Relay\n    // will automatically compose the `user` fragment from the Relay container\n    // paired with this route on a Relay.RootContainer\n    user: () => Relay.QL`\n      # In Relay, the GraphQL query name can be optionally omitted.\n      query { user(id: $userID) }\n    `,\n  },\n  params: {\n    // This `userID` parameter will populate the `$userID` variable above.\n    userID: '123',\n  },\n  // Routes must also define a string name.\n  name: 'ProfileRoute',\n};\n\n")),Object(o.b)("p",null,"If we wanted to create an instance of this route for arbitrary users, we can subclass the ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Route")," abstract class. ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Route")," makes it easy to define a set of queries and required parameters to be re-used multiple times:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nclass ProfileRoute extends Relay.Route {\n  static queries = {\n    user: () => Relay.QL`\n      query { user(id: $userID) }\n    `,\n  };\n  static paramDefinitions = {\n    // By setting `required` to true, `ProfileRoute` will throw if a `userID`\n    // is not supplied when instantiated.\n    userID: {required: true},\n  };\n  static routeName = 'ProfileRoute';\n}\n\n")),Object(o.b)("p",null,"Now we can instantiate a ",Object(o.b)("inlineCode",{parentName:"p"},"ProfileRoute")," that fetches data for user ",Object(o.b)("inlineCode",{parentName:"p"},"123"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\n// Equivalent to the object literal we created above.\nvar profileRoute = new ProfileRoute({userID: '123'});\n\n")),Object(o.b)("p",null,"But now, we can also create routes for arbitrary user IDs. For example, if we wanted to construct a route that fetched data for a user defined by the ",Object(o.b)("inlineCode",{parentName:"p"},"userID")," query parameter, we might use:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nwindow.addEventListener('popstate', () => {\n  var userID = getQueryParamFromURI('userID', document.location.href);\n  var profileRoute = new ProfileRoute({userID: userID});\n  ReactDOM.render(\n    <Relay.RootContainer\n      Component={UserProfile}\n      route={profileRoute}\n    />,\n    document.getElementById('app')\n  );\n});\n\n")))}l.isMDXComponent=!0}}]);