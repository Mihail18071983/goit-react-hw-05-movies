"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247,224],{1247:function(t,e,r){r.r(e);var n=r(5861),a=r(9439),c=r(7757),u=r.n(c),s=r(2791),i=r(7689),o=r(2224),p=r(1887),f=r(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],h=(0,s.useState)(!1),v=(0,a.Z)(h,2),d=v[0],l=v[1],x=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e,r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.d5)(x);case 3:e=t.sent,r=e.cast,c(r),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),n=t.t0.response,l(!0),console.log(n.data.message);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t(x)}),[x]),(0,f.jsxs)("div",{children:[d&&(0,f.jsx)(o.default,{}),(0,f.jsx)("h2",{children:"Cast"}),r.length?(0,f.jsx)("ul",{children:r.slice(0,12).map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):"https://via.placeholder.com/200",alt:"".concat(t.name)}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:t.name}),(0,f.jsxs)("p",{children:["Character: ",(0,f.jsx)("br",{}),(0,f.jsx)("span",{children:t.character})]})]})]},t.cast_id)}))}):(0,f.jsx)("p",{children:"No results"})]})}},2224:function(t,e,r){r.r(e);var n=r(184);e.default=function(){return(0,n.jsx)("h1",{children:"Not found page"})}},1887:function(t,e,r){r.d(e,{Bt:function(){return f},Mc:function(){return o},Tg:function(){return s},d5:function(){return p},vw:function(){return i}});var n=r(5861),a=r(7757),c=r.n(a),u=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ac91775ba29254b7e75060011bf34a90"}}),s=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"movie","week",t.next=4,u.get("/trending/".concat("movie","/").concat("week","?page=").concat(e));case 4:return r=t.sent,n=r.data,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie?page=".concat(e,"&query=").concat(r));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.2179551a.chunk.js.map