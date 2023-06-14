"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{1510:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(9439),a=n(1087),i=n(2791),s=n(6355),c="MovieList_container__sSMe5",o="MovieList_list__yjDCC",u="MovieList_item__tDivI",l="MovieList_link__+cn-g",p="MovieList_movieTitle__RhENm",v="MovieList_title__QyMtJ",f="MovieList_buttonContainer__1R15t",d="MovieList_arrowButton__GrJYo",_="MovieList_filmCardWrapper__Rr4nz",m="MovieList_imgFilm__YMw9p",h="MovieList_descriptioWrapper__rKAhA",x="MovieList_description__buin+",g=n(7689),w=n(9571),j=n(184),k=function(t){var e=t.movies,n=(0,g.TH)(),k=(0,i.useState)(0),Z=(0,r.Z)(k,2),b=Z[0],y=Z[1],M=e.slice(b,b+3);return(0,j.jsxs)("div",{className:c,children:[(0,j.jsxs)("div",{className:f,children:[b>0&&(0,j.jsx)("button",{className:d,onClick:function(){y((function(t){return t-3}))},children:(0,j.jsx)(s.x_l,{})}),(0,j.jsx)("h2",{className:v,children:"Trending today"}),b+3<e.length&&(0,j.jsx)("button",{className:d,onClick:function(){y((function(t){return t+3}))},children:(0,j.jsx)(s.Z1Y,{})})]}),(0,j.jsx)("ul",{className:o,children:M.map((function(t,e){var r=null!==t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):w;return(0,j.jsx)("li",{className:u,children:(0,j.jsx)(a.rU,{to:"/goit-react-hw-05-movies/movies/".concat(t.id),state:{from:n},className:l,children:(0,j.jsxs)("div",{className:_,children:[(0,j.jsx)("img",{className:m,src:r,alt:"poster",width:75}),(0,j.jsx)("div",{className:h,children:(0,j.jsxs)("div",{className:x,children:[(0,j.jsxs)("p",{className:p,children:[e+1,". ",t.title]}),(0,j.jsxs)("p",{children:["Rating: ",t.vote_average.toFixed(1)]})]})})]})})},t.id)}))})]})}},4936:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(5861),a=n(9439),i=n(7757),s=n.n(i),c=n(1840),o=n(2791),u=n(1510),l="Home_wrapper__iZIsl",p=n(184),v=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.Df)();case 3:e=t.sent,console.log(e),i(e.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)("div",{className:l,children:(0,p.jsx)(u.Z,{movies:n})})}},1840:function(t,e,n){n.d(e,{Df:function(){return o},M1:function(){return l},TP:function(){return u},tx:function(){return p},z8:function(){return v}});var r=n(5861),a=n(7757),i=n.n(a),s=n(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="87c43400ca83c97437451ae2477008e7",o=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?query=".concat(encodeURIComponent(e),"&api_key=").concat(c));case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},9571:function(t,e,n){t.exports=n.p+"static/media/loadming.ac8427b3d777dd0b3649.jpg"}}]);
//# sourceMappingURL=936.eec6864c.chunk.js.map