(this["webpackJsonptypescript-todo-list"]=this["webpackJsonptypescript-todo-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(8),r=n.n(s),a=(n(14),n(5)),m=(n(15),n(9)),j=n(4),o=n(7),b=n(0),u=function(e){var t=e.form,n=e.setForm,i=Object(c.useState)({name:"",time:"",comment:""}),s=Object(a.a)(i,2),r=s[0],u=s[1],d=function(e){u(Object(o.a)(Object(o.a)({},r),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"",children:[Object(b.jsxs)("div",{className:"first formDiv",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Add A task"}),Object(b.jsx)("input",{className:"inputBox",type:"text",name:"name",value:r.name,onChange:function(e){return d(e)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Add a time"}),Object(b.jsx)("input",{className:"inputBox rating",type:"number",name:"time",value:r.time,onChange:function(e){return d(e)}})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Enter your comment"}),Object(b.jsx)("textarea",{className:"inputBox",name:"comment",value:r.comment,onChange:function(e){return d(e)}})]}),Object(b.jsx)("button",{className:"button",type:"submit",onClick:function(e){return function(e){e.preventDefault(),r.name&&r.time&&(n([].concat(Object(m.a)(t),[{name:r.name,time:parseInt(r.time),comment:r.comment}])),u({name:"",time:"",comment:""}))}(e)},children:"Submit"})]})})},d=function(e){var t=e.form;return Object(b.jsx)("div",{className:"tableDiv",children:Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Todo"}),Object(b.jsxs)("th",{children:["Time ",Object(b.jsx)("br",{})," 24 hours "]}),Object(b.jsx)("th",{children:"Comments"})]}),t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.time}),Object(b.jsx)("td",{children:e.comment})]})}))]})})};var l=function(){var e=Object(c.useState)([{name:"Break-fast",time:9,comment:"Healthy Food"},{name:"Learn Typescript",time:10,comment:"10 pm - 12 pm"}]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("main",{children:[Object(b.jsx)(d,{form:n}),Object(b.jsx)(u,{form:n,setForm:i})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.95226c6d.chunk.js.map