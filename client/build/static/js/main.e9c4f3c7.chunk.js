(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=a(33),s=a(3),u=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"font-weight-light display-1 text-center"},"Doctor DB"))},i=a(4),m=a.n(i),p=a(9),d=a(2),v=a(32),E=a.n(v).a.create({baseURL:"/api/v1/doctors"}),b=a(14),f=Object(n.createContext)(),g=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1];return r.a.createElement(f.Provider,{value:{doctors:c,setDoctors:l,addDoctors:function(e){l([e].concat(Object(b.a)(c)))}}},e.children)},h=function(){var e=Object(n.useContext)(f).addDoctors,t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),u=s[0],i=s[1],v=Object(n.useState)("Price Range"),b=Object(d.a)(v,2),g=b[0],h=b[1],j=function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,E.post("/",{name:c,company:u,price_range:g});case 4:n=t.sent,console.log(n.data.data),e(n.data.data.doctor),l(""),i(""),h("Price Range"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"mb-4"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",placeholder:"name"})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{value:u,onChange:function(e){return i(e.target.value)},className:"form-control",type:"text",placeholder:"Company"})),r.a.createElement("div",{className:"col"},r.a.createElement("select",{value:g,onChange:function(e){return h(e.target.value)},className:"custom-select my-1 mr-sm-2"},r.a.createElement("option",{disabled:!0},"Price Range"),r.a.createElement("option",{value:"1"},"$"),r.a.createElement("option",{value:"2"},"$$"),r.a.createElement("option",{value:"3"},"$$$"),r.a.createElement("option",{value:"4"},"$$$$"),r.a.createElement("option",{value:"5"},"$$$$$"))),r.a.createElement("button",{onClick:j,type:"submit",className:"btn btn-primary"},"Add"))))},j=function(e){for(var t=e.rating,a=[],n=1;n<=5;n++)n<=t?a.push(r.a.createElement("i",{key:n,className:"fas fa-star text-warning"})):n!==Math.ceil(t)||Number.isInteger(t)?a.push(r.a.createElement("i",{key:n,className:"far fa-star text-warning"})):a.push(r.a.createElement("i",{key:n,className:"fas fa-star-half-alt text-warning"}));return r.a.createElement(r.a.Fragment,null,a)},N=function(e){var t=e.count,a=e.averageRating;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{rating:a}),r.a.createElement("span",{className:"text-warning ml-1"},"(",t,")")):r.a.createElement("span",{className:"text-warning"},"0 reviews")},O=a(17),w=function(e){var t=e.isUpdateSeen,a=e.setIsUpdateSeen,c=e.doctor,l=Object(n.useState)(c.name),o=Object(d.a)(l,2),s=o[0],u=o[1],i=Object(n.useState)(c.company),v=Object(d.a)(i,2),b=v[0],f=v[1],g=Object(n.useState)(c.price_range),h=Object(d.a)(g,2),j=h[0],N=h[1],w=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),e.next=4,E.put("/".concat(c.id),{name:s,company:b,price_range:j});case 4:n=e.sent,c.name=n.data.data.doctor.name,c.company=n.data.data.doctor.company,c.price_range=n.data.data.doctor.price_range,a(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{onClick:function(e){return e.stopPropagation()}},r.a.createElement(O.a,{show:t,fullscreen:!0,onHide:function(e){a(!1)}},r.a.createElement(O.a.Header,null,r.a.createElement(O.a.Title,null,"Update Doctor"),r.a.createElement("button",{onClick:function(e){e.stopPropagation(),a(!1)},type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(O.a.Body,null,r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)},id:"name",className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"company"},"Company"),r.a.createElement("input",{value:b,onChange:function(e){return f(e.target.value)},id:"company",className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group col-4"},r.a.createElement("label",{htmlFor:"rating"},"Price Range"),r.a.createElement("select",{value:j,onChange:function(e){return N(e.target.value)},id:"price_range",className:"custom-select"},r.a.createElement("option",{disabled:!0},"Price Range"),r.a.createElement("option",{value:"1"},"$"),r.a.createElement("option",{value:"2"},"$$"),r.a.createElement("option",{value:"3"},"$$$"),r.a.createElement("option",{value:"4"},"$$$$"),r.a.createElement("option",{value:"5"},"$$$$$"))),r.a.createElement("button",{type:"submit",onClick:w,className:"btn btn-primary"},"Submit")))))},y=function(e){var t=e.reviews;return r.a.createElement("div",{className:"row row-cols-3 mb-2"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"card text-white bg-primary mb-3 mr-4",style:{maxWidth:"30%"}},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,r.a.createElement(j,{rating:e.rating}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.review)))})))},x=function(e){var t=e.doctor,a=e.reviews,c=e.setIsReviewSeen,l=e.setReviews,o=e.count,s=e.setCount,u=e.averageRating,i=e.setAverageRating,v=Object(n.useState)(""),f=Object(d.a)(v,2),g=f[0],h=f[1],N=Object(n.useState)(""),O=Object(d.a)(N,2),w=O[0],x=O[1],$=Object(n.useState)("Rating"),k=Object(d.a)($,2),C=k[0],R=k[1],S=function(){var e=Object(p.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,E.post("/".concat(t.id,"/addReview"),{name:g,review:w,rating:C});case 4:n=e.sent,o++,s(o),l((function(e){return[].concat(Object(b.a)(e),[n.data.data.review])})),i((function(e){return e*(o-1)/o+Number(C)*(1/o)})),h(""),R("Rating"),x(""),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",backgroundColor:"grey",padding:"20px",overflowY:"auto"}},r.a.createElement("button",{onClick:function(e){e.stopPropagation(),c(!1)}},"X"),r.a.createElement("h1",{className:"text-center display-1"},t.name),r.a.createElement("div",{className:"text-center"},r.a.createElement(j,{rating:u}),r.a.createElement("span",{className:"text-warning ml-1"},"(".concat(o||0,")"))),r.a.createElement("div",{className:"mt-3"},r.a.createElement(y,{reviews:a})),r.a.createElement("div",{className:"mb-2"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-8"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:g,onChange:function(e){return h(e.target.value)},id:"name",placeholder:"name",type:"text",className:"form-control"})),r.a.createElement("div",{className:"form-group col-4"},r.a.createElement("label",{htmlFor:"rating"},"Rating"),r.a.createElement("select",{value:C,onChange:function(e){return R(e.target.value)},id:"rating",className:"custom-select"},r.a.createElement("option",{disabled:!0},"Rating"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"Review"},"Review"),r.a.createElement("textarea",{value:w,onChange:function(e){return x(e.target.value)},id:"Review",className:"form-control"})),r.a.createElement("button",{type:"submit",onClick:S,className:"btn btn-primary"},"Submit"))))};var $=function(e){var t=e.doctor,a=(e.setDoctors,Object(n.useState)(!1)),c=Object(d.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(null),u=Object(d.a)(s,2),i=u[0],v=u[1],b=Object(n.useState)(!0),f=Object(d.a)(b,2),g=f[0],h=f[1],j=Object(n.useState)(!1),O=Object(d.a)(j,2),y=O[0],$=O[1],k=Object(n.useState)(!1),C=Object(d.a)(k,2),R=C[0],S=C[1],D=Object(n.useState)([]),P=Object(d.a)(D,2),_=P[0],F=P[1];t.count=t.count||0;var U=Object(n.useState)(Number(t.count)),I=Object(d.a)(U,2),A=I[0],B=I[1];t.average_rating=t.average_rating||0;var H=Object(n.useState)(Number(t.average_rating)),L=Object(d.a)(H,2),J=L[0],T=L[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/".concat(t.id));case 3:a=e.sent,F(a.data.data.reviews),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0);case 10:return e.prev=10,o(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var M=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,h(!1),e.next=5,E.delete("/".concat(a));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}();return console.log("individual rendered"),i?r.a.createElement("div",null,"Error: ",i.message):l?g&&r.a.createElement("tr",{id:t.id,style:{cursor:"pointer"},onClick:function(e){S(!0)},key:t.id},R&&r.a.createElement(x,{setIsReviewSeen:S,doctor:t,reviews:_,setReviews:F,count:A,setCount:B,averageRating:J,setAverageRating:T}),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.company),r.a.createElement("td",null,"$".repeat(t.price_range)),r.a.createElement("td",null,r.a.createElement(N,{count:A,averageRating:J})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(e){return function(e){e.stopPropagation(),$(!0)}(e)},className:"btn btn-warning"},"Update"),y&&r.a.createElement(w,{isUpdateSeen:y,setIsUpdateSeen:$,doctor:t})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(e){return M(e,t.id)},className:"btn btn-danger"},"Delete"))):r.a.createElement("h4",null,"Loading...")},k=function(){var e=Object(n.useContext)(f),t=e.doctors,a=e.setDoctors,c=Object(n.useRef)(!1),l=Object(n.useRef)(0);console.log("doctor list rendered"),Object(n.useEffect)((function(){window.addEventListener("scroll",o),s()}),[]);var o=function(){document.documentElement.scrollTop>document.documentElement.scrollHeight-1500&&!c.current&&s()},s=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.current=!0,e.prev=1,e.next=4,E.get("/name/".concat(l.current,"/ASC"));case 4:0!==(t=e.sent).data.results&&(c.current=!1,a((function(e){return[].concat(Object(b.a)(e),Object(b.a)(t.data.data.doctors))}))),l.current+=40,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"list-group"},r.a.createElement("table",{className:"table table-hover table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"bg-primary"},r.a.createElement("th",{scope:"col"},"Doctor"),r.a.createElement("th",{scope:"col"},"Company"),r.a.createElement("th",{scope:"col"},"Price Range"),r.a.createElement("th",{scope:"col"},"Ratings"),r.a.createElement("th",{scope:"col"},"Edit"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement($,{key:e.id,doctor:e,setDoctors:a})})))))},C=function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement(k,null))},R=function(){return r.a.createElement(g,null,r.a.createElement("div",{className:"container"},r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:C})))))};l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e9c4f3c7.chunk.js.map