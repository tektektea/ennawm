import{Q as h,a as u}from"./QBreadcrumbs.37f4ea98.js";import{aA as w,y as _,E as V,F as i,aL as B,o as x,H as e,b as t,aG as F,aB as f,I as r,aC as k,Q as g,D as y}from"./main.087cf1d2.js";import{Q as E}from"./QForm.a6ddb699.js";import{Q as C}from"./QPage.7eea7e37.js";import"./selection.de0b0969.js";import"./QDrawer.b9c13ef7.js";import{u as S}from"./use-quasar.2fb135be.js";import"./touch.70a9dd44.js";const $={class:"flex justify-between items-center"},j=t("div",{class:"my-title"},"Edit Faq",-1),z={class:"col-xs-12"},A={class:"col-xs-12"},D={class:"col-xs-12"},L={class:"col-xs-12 q-gutter-md"},J={props:{data:Object,errors:Object},setup(q){const{data:l,errors:U}=q,d=S(),s=w({id:l.id,question:l.question,answer:l.answer,published:l.published});_(()=>{console.log("mu data ",l)});const Q=n=>{s.put(route("faq.update",s.id),{onSuccess:()=>d.notify({type:"positive",message:y().props.value.flash.success}),onError:()=>d.notify({type:"negative",message:y().props.value.flash.error})})};return(n,a)=>{const v=B("BackLayout");return x(),V(v,null,{content:i(()=>[e(C,{padding:""},{default:i(()=>[t("div",$,[j,e(h,{"active-color":"primary",class:"text-gray-500 text-sm",style:{"font-size":"16px"}},{default:i(()=>[e(u,{label:"Dashboard",icon:"dashboard"}),e(u,{label:"Faq",icon:"feed"}),e(u,{label:"Edit Faq",icon:"edit"})]),_:1})]),e(F,{class:"full-width q-my-md"}),e(E,{onSubmit:Q,class:"row q-col-gutter-sm"},{default:i(()=>{var p,m,c,b;return[t("div",z,[e(f,{modelValue:r(s).question,"onUpdate:modelValue":a[0]||(a[0]=o=>r(s).question=o),outlined:"",error:!!((p=n.$page.props.errors)!=null&&p.question),"error-message":(m=n.$page.props.errors)==null?void 0:m.question,label:"Question",rules:[o=>!!o||"Question is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",A,[e(f,{modelValue:r(s).answer,"onUpdate:modelValue":a[1]||(a[1]=o=>r(s).answer=o),outlined:"",error:!!((c=n.$page.props.errors)!=null&&c.answer),"error-message":(b=n.$page.props.errors)==null?void 0:b.answer,label:"Answer",rules:[o=>!!o||"Answer is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",D,[e(k,{modelValue:r(s).published,"onUpdate:modelValue":a[2]||(a[2]=o=>r(s).published=o),label:"Do you want to published?"},null,8,["modelValue"])]),t("div",L,[e(g,{disable:r(s).processing,class:"sized-btn",type:"submit",rounded:"",color:"primary",label:"Save"},null,8,["disable"]),e(g,{class:"sized-btn",type:"reset",rounded:"",color:"negative",label:"Reset"})])]}),_:1})]),_:1})]),_:1})}}};export{J as default};