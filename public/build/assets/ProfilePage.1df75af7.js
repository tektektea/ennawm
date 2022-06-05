import{aA as c,E as g,F as u,o as y,b as m,H as r,aB as V,aC as n,I as t,Q as d}from"./main.6f4cccc6.js";import{Q as _}from"./QForm.ecbd4c5e.js";import{_ as w}from"./FrontLayout.90b84878.js";import{u as x}from"./use-quasar.ab735963.js";import"./QBtnDropdown.50f28dc8.js";import"./AuthenticatedToolbar.5f82720e.js";const h={class:"w-full flex items-center justify-center"},Q=m("p",{class:"text-gray-100 text-3xl w-full text-center font-bold font-sans"},"Profile",-1),B=m("label",{class:"text-gray-100 font-semibold mb-2",for:"name"},"Full Name",-1),F=m("label",{class:"text-gray-100 font-semibold mb-2",for:"mobile"},"Mobile",-1),$=m("label",{class:"text-gray-100 font-semibold mb-2",for:"email"},"Email",-1),q={class:"flex gap-2"},j={props:{user:Object},setup(p){const s=p,i=x(),o=c({name:s.user.name,mobile:s.user.mobile,email:s.user.email}),b=l=>{o.put(route("profile.update"),{onStart:()=>i.loading.show(),onFinish:()=>i.loading.hide(),onSuccess:()=>i.notify({type:"positive",message:"Profile updated successfully"})})},f=l=>{o.name=s.user.name,o.mobile=s.user.mobile,o.email=s.user.email};return(l,a)=>(y(),g(w,null,{content:u(()=>[m("div",h,[r(_,{onSubmit:b,onReset:f,class:"p-8 shadow-md rounded w-full bg-primary flex flex-col md:w-2/6"},{default:u(()=>[Q,r(V,{class:"my-2"}),B,r(n,{modelValue:t(o).name,"onUpdate:modelValue":a[0]||(a[0]=e=>t(o).name=e),name:"name",dense:"",outlined:"","bg-color":"white",rounded:"",rules:[e=>!!e||"Name is required"]},null,8,["modelValue","rules"]),F,r(n,{modelValue:t(o).mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>t(o).mobile=e),name:"mobile",dense:"",mask:"##########",outlined:"","bg-color":"white",rounded:"",error:!!l.$page.props.errors.mobile,"error-message":l.$page.props.errors.mobile,rules:[e=>!!e||"Mobile is required"]},null,8,["modelValue","error","error-message","rules"]),$,r(n,{modelValue:t(o).email,"onUpdate:modelValue":a[2]||(a[2]=e=>t(o).email=e),type:"email",name:"email",dense:"",outlined:"","bg-color":"white",error:!!l.$page.props.errors.email,"error-message":l.$page.props.errors.email,rounded:"",rules:[e=>!!e||"Email is required"]},null,8,["modelValue","error","error-message","rules"]),m("div",q,[r(d,{type:"submit",rounded:"",color:"primary",label:"Update"}),r(d,{type:"reset",rounded:"",color:"negative",label:"Reset"})])]),_:1})])]),_:1}))}};export{j as default};
