import{Q as d}from"./QEditor.41e487c1.js";import{r as u,E as m,F as f,o as y,b as o,H as r,Q as b,S as v,D as i}from"./main.e2e7f622.js";import{u as _}from"./use-quasar.3ac9b4a3.js";import{B as g}from"./BackendLayout.185d51f3.js";import"./QBtnDropdown.357cb2c4.js";import"./selection.71fa7cd7.js";import"./QItem.b1c502a2.js";import"./use-fullscreen.be8760eb.js";import"./QDrawer.12765640.js";import"./touch.70a9dd44.js";import"./plugin-vue_export-helper.21dcd24c.js";const B={class:"q-pa-md"},h=o("p",{class:"my-title"},"Edit Term and Conditions",-1),w={class:"w-full mt-4"},j={props:{data:Object},setup(l){const s=l,a=_(),e=u(s.data.content),n=p=>{v.Inertia.put(route("web-resource.update",s.data.type),{content:e.value},{onSuccess:()=>a.notify({type:"positive",message:i().props.value.flash.success||"Success"}),onError:()=>{var t;return a.notify({type:"negative",message:((t=i().props.value.flash)==null?void 0:t.error)||"Something went wrong! Please try again"})}})};return(p,t)=>(y(),m(g,null,{page:f(()=>[o("div",B,[h,r(d,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=c=>e.value=c),definitions:{bold:{label:"Bold",icon:null,tip:"My bold tooltip"}},class:"w-full"},null,8,["modelValue"]),o("div",w,[r(b,{class:"sized-btn",color:"primary",label:"Update",rounded:"",onClick:n})])])]),_:1}))}};export{j as default};
