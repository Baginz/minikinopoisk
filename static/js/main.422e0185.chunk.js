(this["webpackJsonpmy-app-minikinopoisk"]=this["webpackJsonpmy-app-minikinopoisk"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(22),i=n.n(s),l=n(4),r=(n(27),n(3)),j=n(2),o=Object(c.createContext)(null),u=(n(28),n(0)),b=function(){return Object(u.jsxs)("div",{className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})},d=n.p+"static/media/404.9e770dd5.jpg",O=function(){return Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h1",{style:{color:"red"},children:"\u0412\u044b \u043f\u0435\u0440\u0435\u0448\u043b\u0438 \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!"}),Object(u.jsx)("img",{src:d,alt:"",srcset:""})]})},h=function(){var e=Object(j.f)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"KEKW"}),Object(u.jsx)("p",{children:"\u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \u043b\u0438\u0447\u0438\u043d\u043a\u043e\u0439 Web \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"}),Object(u.jsx)("button",{className:"back-button",onClick:function(){return e(-1)},children:"Go back"}),Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("button",{className:"back-button",children:"Go home"})})]})},v=function(){var e=Object(c.useContext)(o),t=(e.isAuth,e.setIsAuth);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(!0),localStorage.setItem("auth","true")},children:[Object(u.jsxs)("div",{className:"login-container ",children:[Object(u.jsx)("label",{for:"uname",children:Object(u.jsx)("b",{children:"\u041b\u043e\u0433\u0438\u043d"})}),Object(u.jsx)("input",{type:"text",placeholder:"Enter Username",name:"uname",required:!0}),Object(u.jsx)("label",{for:"psw",children:Object(u.jsx)("b",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),Object(u.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",required:!0}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",name:"remember"})," \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"]}),Object(u.jsx)("button",{className:"login-button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(u.jsx)("p",{children:"\u0412\u0432\u043e\u0434\u0438\u0442\u0435 \u043b\u044e\u0431\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435(\u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043d\u0430 \u0431\u044d\u043a\u0435)"})]})]})},x=n(7),m=n.n(x),A=n(8),p=n(11),g=n.n(p),f=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),l=Object(r.a)(i,2),j=l[0],o=l[1],u=function(){var t=Object(A.a)(m.a.mark((function t(){var n=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e.apply(void 0,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),o(t.t0.message);case 9:return t.prev=9,setTimeout((function(){return s(!1)}),700),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[u,a,j]},w=(n(49),function(e){var t=e.options,n=(e.defaultValue,e.value),c=e.onChange;return Object(u.jsx)("select",{className:"select-css",value:n,onChange:function(e){return c(e.target.value)},children:t.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.name},e.value)}))})}),k=(n(50),function(e){var t=e.setQuery,n=e.setPage,a=e.setLanguage,s=e.year,i=e.setYear,l=e.adult,j=e.setAdult,o=Object(c.useState)("ru"),b=Object(r.a)(o,2),d=b[0],O=b[1],h=Object(c.useRef)();Object(c.useRef)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"example",onSubmit:function(e){e.preventDefault(),h.current.value&&(t(h.current.value),n(1))},style:{textAlign:"center",marginBottom:"30px"},children:[Object(u.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",name:"search",ref:h}),Object(u.jsx)("button",{type:"submit",children:"\u041f\u043e\u0438\u0441\u043a "})]}),Object(u.jsxs)("div",{className:"filter",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{style:{textAlign:"center",marginBottom:"13px"},children:"\u042f\u0437\u044b\u043a"}),Object(u.jsxs)("label",{className:"input-container",children:["Ru",Object(u.jsx)("input",{name:"type",type:"radio","data-type":"Ru",onChange:function(){O("ru"),a("ru")},checked:"ru"===d}),Object(u.jsx)("span",{class:"checkmark"})]}),Object(u.jsxs)("label",{className:"input-container",children:["En",Object(u.jsx)("input",{name:"type",type:"radio","data-type":"en-US",onChange:function(){O("en-US"),a("en-US")},checked:"en-US"===d}),Object(u.jsx)("span",{class:"checkmark"})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{style:{textAlign:"center",marginBottom:"23px"},children:"\u0414\u043b\u044f \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0445"}),Object(u.jsx)(w,{value:l,onChange:j,options:[{value:!0,name:"\u0414\u0430"},{value:!1,name:"\u041d\u0435\u0442"}]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{style:{textAlign:"center",marginBottom:"23px"},children:"\u0413\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430"}),Object(u.jsx)(w,{value:s,onChange:i,options:[{value:"",name:"\u041b\u044e\u0431\u043e\u0439"},{value:2020,name:"2020"},{value:2019,name:"2019"},{value:2018,name:"2018"},{value:2017,name:"2017"},{value:2016,name:"2016"},{value:2015,name:"2015"},{value:2014,name:"2014"},{value:2013,name:"2013"},{value:2012,name:"2012"},{value:2011,name:"2011"},{value:2010,name:"2010"},{value:2009,name:"2009"},{value:2008,name:"2008"},{value:2007,name:"2007"},{value:2006,name:"2006"},{value:2005,name:"2005"},{value:2004,name:"2004"},{value:2003,name:"2003"},{value:2002,name:"2002"},{value:2001,name:"2001"},{value:2e3,name:"2000"}]})]})]})]})}),y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADDCAMAAACxkIT5AAAASFBMVEVUVFSoqKhOTk5RUVGrq6tzc3OZmZmFhYWwsLBMTEyXl5etra1vb29+fn6Li4uTk5NiYmJnZ2dbW1uhoaGAgIBeXl5ycnJsbGwxLNHVAAAEr0lEQVR4nO2cDZeiIBSG4V4ElQSVJv//P13ATPuY2Wlqzy7u+5wzk0l2uk9cQEOEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAaTO+H/3ZQz8GTfj9TWRK4svLd2Ko0B+rtDhQcwAEcwAEcwAEcwAEcwAEcwMGuHahuiYLMXbly9OXBcLBDBwwHcCDgIJfDARyI/9tBwzPNIweXwj07kK1Z0PeF+lLo9+xAqoWnC/fj4BXgAA7gAA7gAA7gAA7gAA7gAA7gAA7gAA7g4P90kK6a2ZnPL6Dt10EMXgbvuuowDcMwHarO+SDt1yL25CDG77tepMn4K/GZ6DsfPezfgbLBDCn6RwdFE4MJn2nYiQNl/dQ8jP9yIDeTf2xhFw6UcuM3bkZhGt2jlmEPDqwf6fdHZmj09/eAlO/A6v7GwNwSnm9Vug2Pen1roXQHSlZXWRCjF0N1dL7VWrfeHavYUfD1Kyqp9uTAtuPm8zOJg8vDgXPa59GS1GbirSgeW7sfB7Zr1iKi0yfDgDRwOGwtNN1WQskOlFxbgtjmmy/HQVaaTd9B/SYfCnagtNjE5H97YhDHEBtnQq9vVKwD6y8BpR7vO6eTatuL0qWXLNaBdUtTwGS+cXJ4DleZS0I0zpbtQJlFAQ3hmUsKKgxLVVjmLhXrYAmEzLM3/1pzObZwB/PHZvFUJViqwnlQwXtwcNXFPSFBzvmwBwd0+OnFRXVKEnbggF5YB8BWtAcHryhIw2wq38FrCnJNKN0BTa8uiGGn0vvGj9d/a1neo1QHP+oT7yTIsh28ETiAAziAAziAAziAAziAAzjYiwOsIclTePtSoqGwtUSxpiwAAABwQ5p8lx7m31wpTzjj607u/DRv8byT55/b0/a6gx9OYPz34aH1KWrXsWDhggyG+aDbjB5yeNP85EPQSUvZDhSP0ulg8h2za0+clm2n+FZt683tDM9/Hz5YeWRBMXQxqlBNnQw8GGNCMMb1+SWVTeu/uJFM7aaDryvmU51KKDimEGR0cKobPtTHo9O1L01CdFApkR2QDrEm06hcfGhav8xbj6dVnO9gGOqqSasF2TGGm0ryUaGTsTacbHIQs6GZ1nkphRAdNNJQjIbGOp/rkJEpy1u/WQkqZTqTC/OcJdvRlYNOLQ7yzs7+lUh+TnJQ1SmaGNeY90zp8cqB9ZFDE+ZdMQOaKwckj7Q6EGN9KKtdjA4oBRUdVHMIscr3tw6cc8nBvEgYaX/joLKbeiBEXdq5c3SQPrw2NNUf8567enDOhbUeXOdC/DPT6uCjHspzIOI3HB2IOq8UR+6uPZgTPBbkXaOtaMh5E5MgO4i1oLo4aIwqS8HsgAebvlEvx/ht9/XxsQPua5P6BS/jE3tsOJqYsoMoMahzv0BdaamQan6OuI7jAxGU6VzdpuBj0t86iC1+rbtjsLGq87F2nUlTnEmm0dVkcz3wvs0Tkwqjd5z/p7acu1b7ah47d+u3OZjzBvVOazPO0/i8blPu8DFdOaNjdNinoVQlCqsFifNAKD/weiFsO+6/bG7Ll01e/+ebQP/8JwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/gFh35K7dZjp9sAAAAASUVORK5CYII=",N=(n(51),function(e){var t=e.movie,n=Object(j.f)();return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:y,alt:"",className:"src",onClick:function(){return n("/".concat(null===t||void 0===t?void 0:t.id,"/"))}}),Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("h2",{onClick:function(){return n("/".concat(null===t||void 0===t?void 0:t.id,"/"))},style:{cursor:"pointer",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:null===t||void 0===t?void 0:t.title}),Object(u.jsx)("p",{children:null===t||void 0===t?void 0:t.release_date}),Object(u.jsxs)("h3",{children:["\u041e\u0446\u0435\u043d\u043a\u0430  ",null===t||void 0===t?void 0:t.vote_average,"  ",Object(u.jsx)("span",{style:{fontWeight:"300",fontSize:"12px"},children:null===t||void 0===t?void 0:t.vote_count})]})]})]})}),S=(n(52),function(e){var t,n,c=e.isLoading,a=e.movies;return 0===(null===a||void 0===a||null===(t=a.results)||void 0===t?void 0:t.length)?Object(u.jsx)("h1",{style:{textAlign:"center"},children:"\u0424\u0438\u043b\u044c\u043c\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b "}):Object(u.jsx)("div",{style:{padding:"30px"},children:c?Object(u.jsx)(b,{}):Object(u.jsx)("div",{className:"movie-grid",children:null===a||void 0===a||null===(n=a.results)||void 0===n?void 0:n.map((function(e){return Object(u.jsx)(N,{movie:e},e.id)}))})})}),B=function(e){var t=e.totalPages,n=e.page,c=e.changePage,a=Array.from({length:t},(function(e,t){return t+1}));return Object(u.jsx)("div",{className:"page__wrapper",children:a.map((function(e){return Object(u.jsx)("span",{onClick:function(){return c(e)},className:n===e?"page page__current":"page",children:e},e)}))})},G=function(){var e,t=Object(c.useState)({}),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)("Iron"),l=Object(r.a)(i,2),j=l[0],o=l[1],b=Object(c.useState)(),d=Object(r.a)(b,2),O=d[0],h=d[1],v=Object(c.useState)(""),x=Object(r.a)(v,2),p=x[0],w=x[1],y=Object(c.useState)(1),N=Object(r.a)(y,2),G=N[0],E=N[1],D=Object(c.useState)(!1),C=Object(r.a)(D,2),P=C[0],Q=C[1],T=f(function(){var e=Object(A.a)(m.a.mark((function e(t){var n,c,a,i,l,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,c=r.length>2&&void 0!==r[2]?r[2]:"ru",a=r.length>3?r[3]:void 0,i=r.length>4?r[4]:void 0,e.next=6,g.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"ad2b38c3623133c5e9dd093465546d14",language:c,query:t,page:n,year:a,include_adult:i}});case 6:l=e.sent,s(l.data),console.log(l.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(r.a)(T,3),z=I[0],F=I[1];I[2];Object(c.useEffect)((function(){console.log(j),z(j,G,O,p,P)}),[j,G,O,p,P]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{textAlign:"center",marginBottom:"50px"},children:"\u041a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a"}),Object(u.jsx)(k,{setQuery:o,setPage:E,setLanguage:h,year:p,setYear:w,adult:P,setAdult:Q}),Object(u.jsx)(S,{isLoading:F,movies:a}),0===Object.keys(a).length||0===(null===a||void 0===a||null===(e=a.results)||void 0===e?void 0:e.length)?"":Object(u.jsx)(B,{totalPages:null===a||void 0===a?void 0:a.total_pages,page:G,changePage:function(e){E(e)}})]})},E=function(){var e=Object(j.f)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"News"}),Object(u.jsx)("p",{children:"News"}),Object(u.jsx)("button",{className:"back-button",onClick:function(){return e(-1)},children:"Go back"}),Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("button",{className:"back-button",children:"Go home"})})]})},D=function(){var e=Object(j.f)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Contact"}),Object(u.jsx)("p",{children:"Contact"}),Object(u.jsx)("button",{className:"back-button",onClick:function(){return e(-1)},children:"Go back"}),Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("button",{className:"back-button",children:"Go home"})})]})},C=function(){var e=Object(j.g)().id,t=Object(j.f)();console.log(Object(j.e)());var n=Object(c.useState)({}),a=Object(r.a)(n,2),s=a[0],i=a[1],o=f(Object(A.a)(m.a.mark((function t(){var n,c,a=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"ru",t.next=3,g.a.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:"ad2b38c3623133c5e9dd093465546d14",language:n}});case 3:c=t.sent,i(c.data),console.log(c.data);case 6:case"end":return t.stop()}}),t)})))),d=Object(r.a)(o,3),O=d[0],h=d[1];d[2];return Object(c.useEffect)((function(){O()}),[e]),Object(u.jsx)(u.Fragment,{children:h?Object(u.jsx)(b,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w500"+s.poster_path:y,alt:"",className:"src"}),Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("h2",{style:{cursor:"pointer",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:null===s||void 0===s?void 0:s.title}),Object(u.jsx)("p",{children:null===s||void 0===s?void 0:s.release_date}),Object(u.jsxs)("h3",{children:["\u041e\u0446\u0435\u043d\u043a\u0430  ",null===s||void 0===s?void 0:s.vote_average,"  ",Object(u.jsx)("span",{style:{fontWeight:"300",fontSize:"12px"},children:null===s||void 0===s?void 0:s.vote_count})]})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"movie-info",children:[Object(u.jsx)("h1",{children:"\u041e \u0444\u0438\u043b\u044c\u043c\u0435"}),Object(u.jsx)("h2",{children:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 "}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.original_title]}),Object(u.jsx)("h2",{children:"Id "}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.id]}),Object(u.jsx)("h2",{children:"IMDB Id"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.imdb_id]}),Object(u.jsx)("h2",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.status]}),Object(u.jsx)("h2",{children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.release_date]}),Object(u.jsx)("h2",{children:"\u0421\u0430\u0439\u0442"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.homepage]}),Object(u.jsx)("h2",{children:"\u0412\u0440\u0435\u043c\u044f"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.runtime," \u043c\u0438\u043d."]}),Object(u.jsx)("h2",{children:"\u0411\u044e\u0434\u0436\u0435\u0442"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.budget," $"]}),Object(u.jsx)("h2",{children:"\u0421\u0431\u043e\u0440\u044b \u0432 \u043c\u0438\u0440\u0435"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.revenue]}),Object(u.jsx)("h2",{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.popularity]}),Object(u.jsx)("h2",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(u.jsxs)("p",{children:["  ",null===s||void 0===s?void 0:s.overview]})]})]}),Object(u.jsx)("button",{className:"back-button",onClick:function(){return t(-1)},children:"Go back"}),Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("button",{className:"back-button",children:"Go home"})})]})})},P=function(){var e=Object(c.useContext)(o),t=e.isAuth,n=e.isLoading;return console.log(t),n?Object(u.jsx)(b,{}):t?Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",element:Object(u.jsx)(G,{})}),Object(u.jsx)(j.a,{path:"/home",element:Object(u.jsx)(G,{})}),Object(u.jsx)(j.a,{path:"/news",element:Object(u.jsx)(E,{})}),Object(u.jsx)(j.a,{path:"/contact",element:Object(u.jsx)(D,{})}),Object(u.jsx)(j.a,{path:"/about",element:Object(u.jsx)(h,{})}),Object(u.jsx)(j.a,{path:"/:id",element:Object(u.jsx)(C,{})}),Object(u.jsx)(j.a,{path:"*",element:Object(u.jsx)(O,{})})]}):Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/login",element:Object(u.jsx)(v,{})}),Object(u.jsx)(j.a,{path:"*",element:Object(u.jsx)(v,{})})]})},Q=(n(53),n(54),function(){var e=Object(c.useContext)(o),t=e.isAuth,n=e.setIsAuth;return Object(u.jsx)("div",{className:"header",children:Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.c,{to:"/",className:"subnav_link",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.c,{to:"/news",className:"subnav_link",children:"News"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.c,{to:"/contact",className:"subnav_link",children:"Contact"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.c,{to:"/about",className:"subnav_link",children:"About"})})]}),Object(u.jsx)(l.c,{to:"/",onClick:function(){n(!1),localStorage.removeItem("auth"),console.log(t)},className:function(e){e.isActive;return"subnav_link"},children:"Logout"})]})})});var T=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),i=Object(r.a)(s,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){localStorage.getItem("auth")&&a(!0),j(!1)}),[]),Object(u.jsxs)(o.Provider,{value:{isAuth:n,setIsAuth:a,isLoading:l},children:[Object(u.jsx)(Q,{}),Object(u.jsx)("main",{children:Object(u.jsx)(P,{})}),Object(u.jsx)("footer",{children:"\xa9 \u041c\u0438\u043d\u0438\u041a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a 2021"})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l.a,{basename:"/minikinopoisk",children:Object(u.jsx)(T,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.422e0185.chunk.js.map