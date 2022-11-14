import{b as c,u as m,j as t,a as e,H as h,L as u}from"./app.749493fd.js";import{A as b}from"./AuthenticatedLayout.8d976c52.js";import"./ApplicationLogo.4a6d3efd.js";function f(d){const{post:l}=c().props,{data:r,setData:i,put:n,errors:s}=m({title:l.title||"",body:l.body||""});function o(a){a.preventDefault(),n(route("posts.update",l.id))}return t(b,{auth:d.auth,errors:d.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit Post"}),children:[e(h,{title:"Posts"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:t("div",{className:"p-6 bg-white border-b border-gray-200",children:[e("div",{className:"flex items-center justify-between mb-6",children:e(u,{className:"px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none",href:route("posts.index"),children:"Back"})}),t("form",{name:"createForm",onSubmit:o,children:[t("div",{className:"flex flex-col",children:[t("div",{className:"mb-4",children:[e("label",{className:"",children:"Title"}),e("input",{type:"text",className:"w-full px-4 py-2",label:"Title",name:"title",value:r.title,onChange:a=>i("title",a.target.value)}),e("span",{className:"text-red-600",children:s.title})]}),t("div",{className:"mb-0",children:[e("label",{className:"",children:"Body"}),e("textarea",{type:"text",className:"w-full rounded",label:"body",name:"body",errors:s.body,value:r.body,onChange:a=>i("body",a.target.value)}),e("span",{className:"text-red-600",children:s.body})]})]}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"px-6 py-2 font-bold text-white bg-green-500 rounded",children:"Update"})})]})]})})})})]})}export{f as default};
