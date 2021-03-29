(this["webpackJsonpcanvas-community"]=this["webpackJsonpcanvas-community"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(18),s=c.n(r),o=(c(24),c(2)),i=(c(25),c(0));function l(e){return Object(i.jsxs)("header",{children:[Object(i.jsxs)("h3",{children:[" ",e.name," "]}),Object(i.jsxs)("button",{onClick:function(){return e.newProject(!0)},children:[Object(i.jsx)("i",{className:"fas fa-plus"})," New Project "]})]})}c(27);var j="https://pixels-api.herokuapp.com";function u(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(i.jsx)("div",{className:"new-project-overlay",onClick:function(t){t.target.classList.contains("new-project-overlay")&&(t.stopPropagation(),e.setActive(!1))},children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:" Create a new project "}),Object(i.jsxs)("form",{method:"POST",onSubmit:function(t){t.preventDefault(),fetch(j+"/project",{method:"POST",headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({projectName:a})}).then((function(e){return e.json()})).then((function(t){t.error?console.log(t.error):e.setProject(t)}))},children:[Object(i.jsx)("label",{htmlFor:"project_name",children:" Project Name "}),Object(i.jsx)("input",{type:"text",name:"project_name",placeholder:"",value:a,required:!0,onChange:function(e){r(e.target.value)}}),Object(i.jsx)("button",{type:"submit",children:" Create "})]})]})})}c(28),c(29);function d(e){var t=e.project,c=e.setProjectId,n=e.active;return Object(i.jsxs)("div",{onClick:function(){return c(t._id)},className:"project ".concat(n?"active":null),children:[Object(i.jsx)("i",{class:"fab fa-buromobelexperte ".concat(n?"rotate":null)}),Object(i.jsxs)("h4",{children:[" ",t.name," "]})]})}function b(e){return Object(i.jsxs)("div",{className:"projects-container",children:[Object(i.jsx)("h2",{children:" Projects "}),e.projects.map((function(t){return Object(i.jsx)(d,{active:e.currentProject===t._id,project:t,setProjectId:e.setProjectId},t._id)}))]})}c(30);function O(e){return Object(i.jsxs)("div",{id:"settings",className:"colors-container",children:[Object(i.jsx)("label",{htmlFor:"color",children:" Color "}),Object(i.jsx)("input",{name:"color",type:"text",placeholder:"black...",onChange:function(t){e.setColor(t.target.value)}})]})}function h(){return Object(i.jsx)("button",{onClick:function(){localStorage.clear(),window.location.reload()},children:"Sign out"})}function m(e){return Object(i.jsxs)("aside",{className:"menu-left-side",children:[Object(i.jsx)(b,{projects:e.projects,currentProject:e.currentProject,setProjectId:e.setProjectId}),Object(i.jsx)(O,{setColor:e.setColor}),!e.saved&&Object(i.jsx)("button",{onClick:function(){return e.save(!0)},children:" Save "}),Object(i.jsx)("div",{className:"signout-container",children:Object(i.jsx)(h,{})})]})}var f=c(19);c(31);function p(e){var t=e.color,c=e.projectId,a=e.save,r=e.setSaved,s=e.setSaving,l=Object(n.useState)([]),u=Object(o.a)(l,2),d=u[0],b=u[1],O=Object(n.useState)([]),h=Object(o.a)(O,2),m=h[0],p=h[1],x=Object(n.useState)(!1),v=Object(o.a)(x,2),g=v[0],S=v[1];function w(e){var t=document.getElementById("canvas").getContext("2d");t.fillStyle=e.color,t.fillRect(e.x,e.y,10,10),t.fillStyle="black"}return Object(n.useEffect)((function(){!function(){for(var e=document.getElementById("canvas"),t=0,c=0,n=0;n<1e4;n++)w({x:t,y:c,color:"#eee"}),(t+=11)>=e.width&&(c+=11,t=0)}(),S(!0),fetch(j+"/pixels?id=".concat(c),{headers:{Authorization:"".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){e.error?console.log("not available"):(p([]),b(e),S(!1))})).catch((function(e){return console.log("Errors:",e)})),r(!0)}),[c]),Object(n.useEffect)((function(){a&&(s(!0),fetch(j+"/pixels",{method:"POST",headers:{Authorization:"".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify({_id:c,pixels:m})}).then((function(e){return e.json()})).then((function(e){r(!0),s(!1)})))}),[a]),Object(n.useEffect)((function(){d.forEach((function(e){w(e)}))}),[d]),Object(i.jsxs)("div",{children:[Object(i.jsx)("canvas",{onClick:function(e){return function(e){var c={x:e.offsetX%11===0?e.offsetX:e.offsetX-e.offsetX%11,y:e.offsetXY%11===0?e.offsetY:e.offsetY-e.offsetY%11,color:t};w(c),p([].concat(Object(f.a)(m),[c])),r(!1)}(e.nativeEvent)},id:"canvas",width:"1000",height:"1000"}),g&&Object(i.jsxs)("div",{className:"saving-pixels-container",children:[Object(i.jsx)("div",{className:"saving",children:" Fetching... "}),Object(i.jsx)("div",{className:"loader"})]}),a&&Object(i.jsxs)("div",{className:"saving-pixels-container",children:[Object(i.jsx)("div",{className:"saving",children:" Saving... "}),Object(i.jsx)("div",{className:"loader"})]})]})}c(32);function x(e){var t=e.user,c=Object(n.useState)(!1),a=Object(o.a)(c,2),r=a[0],s=a[1],j=Object(n.useState)(null),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(n.useState)("black"),f=Object(o.a)(h,2),x=f[0],v=f[1],g=Object(n.useState)(!0),S=Object(o.a)(g,2),w=S[0],y=S[1],N=Object(n.useState)(!1),P=Object(o.a)(N,2),C=P[0],k=P[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{name:t.first_name,newProject:s}),Object(i.jsxs)("div",{className:"dashboard-container",children:[Object(i.jsx)("div",{className:"menu-container",children:Object(i.jsx)(m,{saved:w,save:k,projects:t.projects||[],setProjectId:O,currentProject:b,setColor:v})}),Object(i.jsx)("div",{className:"canvas-container",children:b?Object(i.jsx)(p,{projectId:b,color:x,save:C,saved:w,setSaved:y,setSaving:k}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:" Welcome to Pixel Community. "}),Object(i.jsx)("p",{children:" Click on a project or create a new one to get started! "}),Object(i.jsx)("p",{children:" Don't forget to save your work! "})]})})]}),r&&Object(i.jsx)(u,{isSaved:w,setProject:function(e){t.projects.push(e),O(e._id),s(!1),y(!0),k(!1)},setActive:s})]})}var v=c(7),g=c(9),S=c(5),w=c.n(S);function y(e){var t=Object(n.useState)({email:"",password:""}),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),l=Object(o.a)(s,2),u=l[0],d=l[1],b=Object(n.useState)(!1),O=Object(o.a)(b,2),h=O[0],m=O[1];function f(e){var t=e.target,c=t.name,n=t.value;r((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(v.a)({},c,n))}))}return Object(n.useEffect)((function(){var t=localStorage.getItem("token");t&&w.a.post(j+"/login",{},{headers:{Authorization:"".concat(t)}}).then((function(t){204!==t.status&&e.login(t.data.user)}))}),[e]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:" Log in to your account "}),u?Object(i.jsxs)("p",{className:"error",children:[" ",u," "]}):null,Object(i.jsx)("div",{className:h?"loader":null}),Object(i.jsxs)("form",{method:"POST",onSubmit:function(t){t.preventDefault(),m(!0),w.a.post(j+"/login",a).then((function(t){t.data.error?(d(t.data.error),m(!1)):(e.login(t.data.user),localStorage.setItem("token",t.data.jwt))}))},children:[Object(i.jsx)("label",{htmlFor:"email",children:" Email "}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"",required:!0,onChange:f}),Object(i.jsx)("label",{htmlFor:"password",children:" Password "}),Object(i.jsx)("input",{type:"password",name:"password",placeholder:"",required:!0,onChange:f}),Object(i.jsx)("button",{type:"submit",children:" Sign In "})]})]})}function N(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),l=Object(o.a)(s,2),u=l[0],d=l[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:" Create your account "}),a&&Object(i.jsxs)("p",{className:"error",children:[" ",a," "]}),Object(i.jsx)("div",{className:u?"loader":null}),Object(i.jsxs)("form",{method:"POST",onSubmit:function(t){t.preventDefault();var c=t.target.first_name.value,n=t.target.last_name.value,a=t.target.email.value,s=t.target.password.value;s!==t.target.repeat_password.value?r("Passwords must match!"):s.length<8?r("Password must be 8 or more characters!"):(d(!0),w.a.post(j+"/signup",{first_name:c,last_name:n,email:a,password:s}).then((function(t){t.data.error?(r(t.data.error),d(!1)):(e.login(t.data.user),localStorage.setItem("token",t.data.jwt))})))},children:[Object(i.jsx)("label",{htmlFor:"first_name",children:" First Name "}),Object(i.jsx)("input",{type:"text",name:"first_name",placeholder:"",required:!0}),Object(i.jsx)("label",{htmlFor:"last_name",children:" Last Name "}),Object(i.jsx)("input",{type:"text",name:"last_name",placeholder:"",required:!0}),Object(i.jsx)("label",{htmlFor:"email",children:" Email "}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"",required:!0}),Object(i.jsx)("label",{htmlFor:"password",children:" Password "}),Object(i.jsx)("input",{type:"password",name:"password",placeholder:"",required:!0}),Object(i.jsx)("label",{htmlFor:"repeat_password",children:" Repeat Password "}),Object(i.jsx)("input",{type:"password",name:"repeat_password",placeholder:"",required:!0}),Object(i.jsx)("button",{type:"submit",children:" Sign Up "})]})]})}c(51);function P(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(i.jsx)("div",{className:"login-container",children:a?Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(N,{login:e.setUser}),Object(i.jsxs)("p",{children:[" Have an account? ",Object(i.jsx)("span",{className:"button",onClick:function(){return r(!1)},children:" Log in now "})]})]}):Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(y,{login:e.setUser}),Object(i.jsxs)("p",{children:[" Don't have an account? ",Object(i.jsx)("span",{className:"button",onClick:function(){return r(!0)},children:" Sign Up "})]})]})})}c(52);var C=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(i.jsx)("div",{className:"App",children:c?Object(i.jsx)(x,{user:c}):Object(i.jsx)(P,{setUser:a})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.d99509b1.chunk.js.map