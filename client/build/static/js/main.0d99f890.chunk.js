(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=a(33),s=a(3),i=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"font-weight-light display-1 text-center"},"Doctor DataB"))},u=a(4),m=a.n(u),p=a(9),d=a(2),v=a(32),E=a.n(v);console.log("This is process.env.NODE_ENV"),console.log("production");var b=E.a.create({baseURL:"api/v1/doctors"}),f=a(14),g=Object(n.createContext)(),h=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1];return r.a.createElement(g.Provider,{value:{doctors:c,setDoctors:l,addDoctors:function(e){l([e].concat(Object(f.a)(c)))}}},e.children)},N=function(){var e=Object(n.useContext)(g).addDoctors,t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),i=s[0],u=s[1],v=Object(n.useState)("Price Range"),E=Object(d.a)(v,2),f=E[0],h=E[1],N=function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,b.post("/",{name:c,company:i,price_range:f});case 4:n=t.sent,console.log(n.data.data),e(n.data.data.doctor),l(""),u(""),h("Price Range"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"mb-4"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",placeholder:"name"})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{value:i,onChange:function(e){return u(e.target.value)},className:"form-control",type:"text",placeholder:"Company"})),r.a.createElement("div",{className:"col"},r.a.createElement("select",{value:f,onChange:function(e){return h(e.target.value)},className:"custom-select my-1 mr-sm-2"},r.a.createElement("option",{disabled:!0},"Price Range"),r.a.createElement("option",{value:"1"},"$"),r.a.createElement("option",{value:"2"},"$$"),r.a.createElement("option",{value:"3"},"$$$"),r.a.createElement("option",{value:"4"},"$$$$"),r.a.createElement("option",{value:"5"},"$$$$$"))),r.a.createElement("button",{onClick:N,type:"submit",className:"btn btn-primary"},"Add"))))},j=function(e){for(var t=e.rating,a=[],n=1;n<=5;n++)n<=t?a.push(r.a.createElement("i",{key:n,className:"fas fa-star text-warning"})):n!==Math.ceil(t)||Number.isInteger(t)?a.push(r.a.createElement("i",{key:n,className:"far fa-star text-warning"})):a.push(r.a.createElement("i",{key:n,className:"fas fa-star-half-alt text-warning"}));return r.a.createElement(r.a.Fragment,null,a)},O=function(e){var t=e.count,a=e.averageRating;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{rating:a}),r.a.createElement("span",{className:"text-warning ml-1"},"(",t,")")):r.a.createElement("span",{className:"text-warning"},"0 reviews")},w=a(17),y=function(e){var t=e.isUpdateSeen,a=e.setIsUpdateSeen,c=e.doctor,l=Object(n.useState)(c.name),o=Object(d.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(c.company),v=Object(d.a)(u,2),E=v[0],f=v[1],g=Object(n.useState)(c.price_range),h=Object(d.a)(g,2),N=h[0],j=h[1],O=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),e.next=4,b.put("/".concat(c.id),{name:s,company:E,price_range:N});case 4:n=e.sent,c.name=n.data.data.doctor.name,c.company=n.data.data.doctor.company,c.price_range=n.data.data.doctor.price_range,a(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{onClick:function(e){return e.stopPropagation()}},r.a.createElement(w.a,{show:t,fullscreen:!0,onHide:function(e){a(!1)}},r.a.createElement(w.a.Header,null,r.a.createElement(w.a.Title,null,"Update Doctor"),r.a.createElement("button",{onClick:function(e){e.stopPropagation(),a(!1)},type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(w.a.Body,null,r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:s,onChange:function(e){return i(e.target.value)},id:"name",className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"company"},"Company"),r.a.createElement("input",{value:E,onChange:function(e){return f(e.target.value)},id:"company",className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group col-4"},r.a.createElement("label",{htmlFor:"rating"},"Price Range"),r.a.createElement("select",{value:N,onChange:function(e){return j(e.target.value)},id:"price_range",className:"custom-select"},r.a.createElement("option",{disabled:!0},"Price Range"),r.a.createElement("option",{value:"1"},"$"),r.a.createElement("option",{value:"2"},"$$"),r.a.createElement("option",{value:"3"},"$$$"),r.a.createElement("option",{value:"4"},"$$$$"),r.a.createElement("option",{value:"5"},"$$$$$"))),r.a.createElement("button",{type:"submit",onClick:O,className:"btn btn-primary"},"Submit")))))},x=function(e){var t=e.reviews;return r.a.createElement("div",{className:"row row-cols-3 mb-2"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"card text-white bg-primary mb-3 mr-4",style:{maxWidth:"30%"}},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,r.a.createElement(j,{rating:e.rating}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.review)))})))},$=function(e){var t=e.doctor,a=e.reviews,c=e.setIsReviewSeen,l=e.setReviews,o=e.count,s=e.setCount,i=e.averageRating,u=e.setAverageRating,v=Object(n.useState)(""),E=Object(d.a)(v,2),g=E[0],h=E[1],N=Object(n.useState)(""),O=Object(d.a)(N,2),w=O[0],y=O[1],$=Object(n.useState)("Rating"),k=Object(d.a)($,2),C=k[0],R=k[1],S=function(){var e=Object(p.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,b.post("/".concat(t.id,"/addReview"),{name:g,review:w,rating:C});case 4:n=e.sent,o++,s(o),l((function(e){return[].concat(Object(f.a)(e),[n.data.data.review])})),u((function(e){return e*(o-1)/o+Number(C)*(1/o)})),h(""),R("Rating"),y(""),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",backgroundColor:"grey",padding:"20px",overflowY:"auto"}},r.a.createElement("button",{onClick:function(e){e.stopPropagation(),c(!1)}},"X"),r.a.createElement("h1",{className:"text-center display-1"},t.name),r.a.createElement("div",{className:"text-center"},r.a.createElement(j,{rating:i}),r.a.createElement("span",{className:"text-warning ml-1"},"(".concat(o||0,")"))),r.a.createElement("div",{className:"mt-3"},r.a.createElement(x,{reviews:a})),r.a.createElement("div",{className:"mb-2"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-8"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:g,onChange:function(e){return h(e.target.value)},id:"name",placeholder:"name",type:"text",className:"form-control"})),r.a.createElement("div",{className:"form-group col-4"},r.a.createElement("label",{htmlFor:"rating"},"Rating"),r.a.createElement("select",{value:C,onChange:function(e){return R(e.target.value)},id:"rating",className:"custom-select"},r.a.createElement("option",{disabled:!0},"Rating"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"Review"},"Review"),r.a.createElement("textarea",{value:w,onChange:function(e){return y(e.target.value)},id:"Review",className:"form-control"})),r.a.createElement("button",{type:"submit",onClick:S,className:"btn btn-primary"},"Submit"))))};var k=function(e){var t=e.doctor,a=(e.setDoctors,Object(n.useState)(!1)),c=Object(d.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(null),i=Object(d.a)(s,2),u=i[0],v=i[1],E=Object(n.useState)(!0),f=Object(d.a)(E,2),g=f[0],h=f[1],N=Object(n.useState)(!1),j=Object(d.a)(N,2),w=j[0],x=j[1],k=Object(n.useState)(!1),C=Object(d.a)(k,2),R=C[0],S=C[1],D=Object(n.useState)([]),P=Object(d.a)(D,2),_=P[0],F=P[1];t.count=t.count||0;var U=Object(n.useState)(Number(t.count)),I=Object(d.a)(U,2),A=I[0],B=I[1];t.average_rating=t.average_rating||0;var H=Object(n.useState)(Number(t.average_rating)),L=Object(d.a)(H,2),T=L[0],J=L[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("/".concat(t.id));case 3:a=e.sent,F(a.data.data.reviews),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0);case 10:return e.prev=10,o(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var M=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,h(!1),e.next=5,b.delete("/".concat(a));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}();return console.log("individual rendered"),u?r.a.createElement("div",null,"Error: ",u.message):l?g&&r.a.createElement("tr",{id:t.id,style:{cursor:"pointer"},onClick:function(e){S(!0)},key:t.id},R&&r.a.createElement($,{setIsReviewSeen:S,doctor:t,reviews:_,setReviews:F,count:A,setCount:B,averageRating:T,setAverageRating:J}),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.company),r.a.createElement("td",null,"$".repeat(t.price_range)),r.a.createElement("td",null,r.a.createElement(O,{count:A,averageRating:T})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(e){return function(e){e.stopPropagation(),x(!0)}(e)},className:"btn btn-warning"},"Update"),w&&r.a.createElement(y,{isUpdateSeen:w,setIsUpdateSeen:x,doctor:t})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(e){return M(e,t.id)},className:"btn btn-danger"},"Delete"))):r.a.createElement("h4",null,"Loading...")},C=function(){var e=Object(n.useContext)(g),t=e.doctors,a=e.setDoctors,c=Object(n.useRef)(!1),l=Object(n.useRef)(0);console.log("doctor list rendered"),Object(n.useEffect)((function(){window.addEventListener("scroll",o),s()}),[]);var o=function(){document.documentElement.scrollTop>document.documentElement.scrollHeight-1500&&!c.current&&s()},s=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.current=!0,e.prev=1,e.next=4,b.get("/name/".concat(l.current,"/ASC"));case 4:0!==(t=e.sent).data.results&&(c.current=!1,a((function(e){return[].concat(Object(f.a)(e),Object(f.a)(t.data.data.doctors))}))),l.current+=40,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"list-group"},r.a.createElement("table",{className:"table table-hover table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"bg-primary"},r.a.createElement("th",{scope:"col"},"Doctor"),r.a.createElement("th",{scope:"col"},"Company"),r.a.createElement("th",{scope:"col"},"Price Range"),r.a.createElement("th",{scope:"col"},"Ratings"),r.a.createElement("th",{scope:"col"},"Edit"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(k,{key:e.id,doctor:e,setDoctors:a})})))))},R=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(N,null),r.a.createElement(C,null))},S=function(){return r.a.createElement(h,null,r.a.createElement("div",{className:"container"},r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:R})))))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0d99f890.chunk.js.map