"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{7047:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,u=t(168),c=t(6444),i=t(1087),o=c.ZP.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px 5px;\n"]))),s=(0,c.ZP)(i.OL)(a||(a=(0,u.Z)(["\n  color: #00008b;\n"]))),p=t(7689),f=t(184),l=function(n){var e=n.results,t=(0,p.TH)(),r=e.map((function(n){var e=n.id,r=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"/movies/".concat(e),state:{from:t},children:(0,f.jsx)("p",{children:r})})},e)}));return(0,f.jsx)(o,{children:r})},d=l;l.defaultProps={results:[]}},3485:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a=t(5861),u=t(9439),c=t(7757),i=t.n(c),o=t(2791),s=t(1087),p=t(1887),f=t(3166),l=t(168),d=t(6444).ZP.main(r||(r=(0,l.Z)(["\n    padding:0 16px;\n"]))),v=t(7047),g=t(9861),x=t(184),h=function(){var n=(0,o.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],c=(0,o.useState)(1),l=(0,u.Z)(c,2),h=l[0],m=l[1],b=(0,s.lr)(),w=(0,u.Z)(b,2),Z=w[0],k=w[1],y=(0,o.useState)(!1),j=(0,u.Z)(y,2),P=j[0],_=j[1],C=Number(Z.get("page"))?Number(Z.get("page")):1;(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(e){var t,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,_(!0),n.next=4,(0,p.Tg)(e);case 4:t=n.sent,a=t.results,u=t.total_pages,r(a),m(u),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.message);case 14:return n.prev=14,_(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();n(C)}),[C]);return(0,x.jsxs)(d,{children:[(0,x.jsx)("h1",{children:"Trending today"}),(0,x.jsx)(v.Z,{results:t}),P&&(0,x.jsx)(g.Z,{}),h>1&&(0,x.jsx)(f.T,{breakLabel:"...",nextLabel:">",onPageChange:function(n){k({page:n.selected+1})},pageRangeDisplayed:3,pageCount:h,previousLabel:"<",renderOnZeroPageCount:null,disabledLinkClassName:"disabled",activeClassName:"activePage",forcePage:C-1})]})}},3166:function(n,e,t){t.d(e,{T:function(){return o}});var r,a=t(168),u=t(6444),c=t(6048),i=t.n(c),o=(0,u.ZP)(i())(r||(r=(0,a.Z)(["\n  display: flex;\n  list-style: none;\n  justify-content: flex-start;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  font-size: 16px;\n  font-weight: 700;\n\n  @media (max-width: 500px) {\n    flex-wrap: wrap;\n  }\n\n  & li {\n    color: ",";\n\n    transition: color 250ms linear;\n\n    :hover:not(.disabled) {\n      color: ",";\n    }\n  }\n\n  & .activePage {\n    color: ",";\n  }\n\n  & a {\n    padding: 0 8px;\n    cursor: pointer;\n  }\n\n  & a.disabled {\n    cursor: default;\n  }\n"])),(function(n){return"black"}),(function(n){return"#333652"}),(function(n){return"#FAD02C"}))},1887:function(n,e,t){t.d(e,{Bt:function(){return f},Mc:function(){return s},Tg:function(){return i},d5:function(){return p},vw:function(){return o}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ac91775ba29254b7e75060011bf34a90"}}),i=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"movie","week",n.next=4,c.get("/trending/".concat("movie","/").concat("week","?page=").concat(e));case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?page=".concat(e,"&query=").concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.8cda8112.chunk.js.map