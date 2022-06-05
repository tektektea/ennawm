import{Q as b,a as i}from"./QBreadcrumbs.0766b80d.js";import{aB as f,E as _,F as r,o as y,H as e,b as l,aC as Q,aD as n,I as a,aH as v,Q as d,D as m}from"./main.7e8ab29c.js";import{Q as q}from"./QForm.b13d03b0.js";import{Q as h}from"./QPage.8b6dd9f4.js";import{u as w}from"./use-quasar.9d177eec.js";import{B as g}from"./BackendLayout.fb659864.js";import"./selection.462aeae3.js";import"./QDrawer.01eee9de.js";import"./touch.70a9dd44.js";import"./plugin-vue_export-helper.21dcd24c.js";const x={class:"flex justify-between items-center"},V=l("div",{class:"my-title"},"New Faq",-1),B={class:"col-xs-12"},F={class:"col-xs-12"},k={class:"col-xs-12"},D={class:"col-xs-12 q-gutter-md"},L={setup(N){const u=w(),o=f({question:"",answer:"",published:!1}),c=p=>{o.post(route("faq.store"),{onSuccess:()=>u.notify({type:"positive",message:m().props.value.flash.success}),onError:()=>u.notify({type:"negative",message:m().props.value.flash.error})})};return(p,t)=>(y(),_(g,null,{content:r(()=>[e(h,{padding:""},{default:r(()=>[l("div",x,[V,e(b,{"active-color":"primary",class:"text-gray-500",style:{"font-size":"16px"}},{default:r(()=>[e(i,{label:"Dashboard",icon:"dashboard"}),e(i,{label:"Faq",icon:"feed"}),e(i,{label:"New Faq",icon:"save"})]),_:1})]),e(Q,{class:"full-width q-my-md"}),e(q,{onSubmit:c,class:"row q-col-gutter-sm"},{default:r(()=>[l("div",B,[e(n,{modelValue:a(o).question,"onUpdate:modelValue":t[0]||(t[0]=s=>a(o).question=s),outlined:"",label:"Question",rules:[s=>!!s||"Question is required"]},null,8,["modelValue","rules"])]),l("div",F,[e(n,{modelValue:a(o).answer,"onUpdate:modelValue":t[1]||(t[1]=s=>a(o).answer=s),outlined:"",label:"Answer",rules:[s=>!!s||"Answer is required"]},null,8,["modelValue","rules"])]),l("div",k,[e(v,{modelValue:a(o).published,"onUpdate:modelValue":t[2]||(t[2]=s=>a(o).published=s),label:"Do you want to published?"},null,8,["modelValue"])]),l("div",D,[e(d,{disable:a(o).processing,class:"sized-btn",type:"submit",rounded:"",color:"primary",label:"Save"},null,8,["disable"]),e(d,{class:"sized-btn",type:"reset",rounded:"",color:"negative",label:"Reset"})])]),_:1})]),_:1})]),_:1}))}};export{L as default};