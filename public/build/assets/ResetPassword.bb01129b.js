import{u as f,r as h,j as a,a as s,H as v}from"./app.749493fd.js";import{G as g,P as N}from"./PrimaryButton.2442467a.js";import{T as m,I as n}from"./TextInput.372f8cc7.js";import{I as l}from"./InputLabel.96a30c55.js";import"./ApplicationLogo.4a6d3efd.js";function y({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:t,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const o=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.update"))},children:[a("div",{children:[s(l,{forInput:"email",value:"Email"}),s(m,{type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:o}),s(n,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password",value:"Password"}),s(m,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:o}),s(n,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password_confirmation",value:"Confirm Password"}),s(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:o}),s(n,{message:t.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{y as default};
