(this["webpackJsonpshopify-chal"]=this["webpackJsonpshopify-chal"]||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(0),i=n(10),a=n.n(i),s=n(49),o=n(24),l=n.n(o),j=n(39),u=n(27),d=n(104),h=n(68),b=n(106),p=n(105),O=n(108),f=n(101),x=n(102),m=n(103);function y(e){var t=e.title,n=e.children,c=e.open,i=e.setOpen;return Object(r.jsxs)(O.a,{fullWidth:!0,style:{width:800},open:c,onClose:function(){return i(!1)},"aria-labelledby":"confirm-dialog",maxWidth:!1,children:[Object(r.jsx)(f.a,{id:"confirm-dialog",children:t}),Object(r.jsx)(x.a,{children:n}),Object(r.jsx)(m.a,{children:Object(r.jsx)(b.a,{variant:"contained",onClick:function(){return i(!1)},color:"default",children:"Close"})})]})}var w=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),o=Object(u.a)(a,2),O=o[0],f=o[1],x=Object(c.useState)({}),m=Object(u.a)(x,2),w=m[0],v=m[1],g=Object(c.useState)([]),k=Object(u.a)(g,2),S=k[0],C=k[1],T=Object(c.useState)([]),J=Object(u.a)(T,2),P=J[0],I=J[1];function N(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://stormy-wildwood-04842.herokuapp.com/search",t).then(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,console.log(n),t.ok){e.next=7;break}return r=n&&n.message||t.status,e.abrupt("return",Promise.reject(r));case 7:i(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}function W(e,t){return Object(r.jsxs)(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",children:[Object(r.jsx)(d.a,{item:!0,xs:1,children:Object(r.jsx)("img",{src:e.url,height:200,width:200,style:{objectFit:"cover"}})}),Object(r.jsxs)(d.a,{item:!0,container:!0,direction:"column",xs:6,children:[Object(r.jsx)(d.a,{item:!0,children:Object(r.jsxs)(h.a,{variant:"body1",display:"inline",children:[Object(r.jsx)("b",{children:"Labels: "})," ",e.labels.join(", ")]})}),Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(b.a,{onClick:function(){v(e),f(!0)},children:"View info"})})]}),Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(b.a,{style:{color:"red"},onClick:function(){!function(e,t){var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})};fetch("https://stormy-wildwood-04842.herokuapp.com/delete",r).then(function(){var e=Object(j.a)(l.a.mark((function e(r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.ok){e.next=3;break}return c=r.status,e.abrupt("return",Promise.reject(c));case 3:(a=Object(s.a)(n)).splice(t,1),i(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}(e.id,t)},children:"Delete"})})]},e+t)}return Object(c.useEffect)((function(){N({field:"context",value:null,op:"=="})}),[]),Object(r.jsxs)(d.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(r.jsx)(y,{title:"Info",open:O,setOpen:f,children:Object(r.jsx)(d.a,{container:!0,direction:"column",children:Object.entries(w).map((function(e,t){return Object(r.jsxs)(d.a,{container:!0,direction:"row",justify:"center",spacing:2,children:[Object(r.jsx)(d.a,{item:!0,xs:5,children:Object(r.jsx)(h.a,{variant:"body2",align:"right",children:e[0]})}),Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(h.a,{children:":"})}),Object(r.jsx)(d.a,{item:!0,xs:5,children:Object(r.jsx)(h.a,{variant:"body2",paragraph:!0,style:{whiteSpace:"pre-line"},children:JSON.stringify(e[1],null,2)})})]},e+t)}))})}),Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(h.a,{variant:"h5",children:"Images"})}),Object(r.jsxs)(d.a,{item:!0,container:!0,direction:"row",alignItems:"center",justify:"space-between",children:[Object(r.jsx)(d.a,{item:!0,xs:3,children:Object(r.jsx)(p.a,{label:"search by labels (separated by newline)",fullWidth:!0,rows:5,multiline:!0,onChange:function(e){var t=e.target.value.split("\n");console.log(t),I(t)}})}),Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(b.a,{onClick:function(){N({field:"labels",value:P,op:"array-contains-any"})},children:"Search"})}),Object(r.jsx)(d.a,{item:!0,xs:6,children:Object(r.jsx)(p.a,{label:"img URLS (separated by newline)",fullWidth:!0,multiline:!0,rows:5,onChange:function(e){var t=e.target.value.split("\n");console.log(t),C(t)}})}),Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(b.a,{onClick:function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({urls:S})};fetch("https://stormy-wildwood-04842.herokuapp.com/upload",e).then(function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=3;break}return n=t.status,e.abrupt("return",Promise.reject(n));case 3:N({field:"context",value:null,op:"=="});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))},children:"Upload"})})]}),Object(r.jsx)(d.a,{item:!0}),n.map((function(e,t){return W(e,t)}))]})};a.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.07fb7acf.chunk.js.map