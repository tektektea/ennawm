import{Q as b,a as i}from"./QBreadcrumbs.b89e7196.js";import{aA as f,E as _,F as r,o as y,H as e,b as l,aK as Q,aB as n,I as a,aL as v,Q as d,D as m}from"./main.e2e7f622.js";import{Q as q}from"./QForm.b1b0c096.js";import{Q as h}from"./QPage.991008bb.js";import{u as w}from"./use-quasar.3ac9b4a3.js";import{B as g}from"./BackendLayout.185d51f3.js";import"./selection.71fa7cd7.js";import"./QDrawer.12765640.js";import"./touch.70a9dd44.js";import"./plugin-vue_export-helper.21dcd24c.js";const x={class:"flex justify-between items-center"},V=l("div",{class:"my-title"},"New Faq",-1),B={class:"col-xs-12"},F={class:"col-xs-12"},k={class:"col-xs-12"},N={class:"col-xs-12 q-gutter-md"},H={setup(S){const u=w(),o=f({question:"",answer:"",published:!1}),c=p=>{o.post(route("faq.store"),{onSuccess:()=>u.notify({type:"positive",message:m().props.value.flash.success}),onError:()=>u.notify({type:"negative",message:m().props.value.flash.error})})};return(p,t)=>(y(),_(g,null,{content:r(()=>[e(h,{padding:""},{default:r(()=>[l("div",x,[V,e(b,{"active-color":"primary",class:"text-gray-500",style:{"font-size":"16px"}},{default:r(()=>[e(i,{label:"Dashboard",icon:"dashboard"}),e(i,{label:"Faq",icon:"feed"}),e(i,{label:"New Faq",icon:"save"})]),_:1})]),e(Q,{class:"full-width q-my-md"}),e(q,{onSubmit:c,class:"row q-col-gutter-sm"},{default:r(()=>[l("div",B,[e(n,{modelValue:a(o).question,"onUpdate:modelValue":t[0]||(t[0]=s=>a(o).question=s),outlined:"",label:"Question",rules:[s=>!!s||"Question is required"]},null,8,["modelValue","rules"])]),l("div",F,[e(n,{modelValue:a(o).answer,"onUpdate:modelValue":t[1]||(t[1]=s=>a(o).answer=s),outlined:"",label:"Answer",rules:[s=>!!s||"Answer is required"]},null,8,["modelValue","rules"])]),l("div",k,[e(v,{modelValue:a(o).published,"onUpdate:modelValue":t[2]||(t[2]=s=>a(o).published=s),label:"Do you want to published?"},null,8,["modelValue"])]),l("div",N,[e(d,{disable:a(o).processing,class:"sized-btn",type:"submit",rounded:"",color:"primary",label:"Save"},null,8,["disable"]),e(d,{class:"sized-btn",type:"reset",rounded:"",color:"negative",label:"Reset"})])]),_:1})]),_:1})]),_:1}))}};export{H as default};