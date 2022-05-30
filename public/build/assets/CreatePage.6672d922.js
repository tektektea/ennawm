import{Q as $,a as p}from"./QBreadcrumbs.5e35a128.js";import{aA as B,a3 as w,E as x,F as u,o as P,H as r,b as t,aG as Q,aB as i,I as l,Q as U,D as S}from"./main.b34b4712.js";import{Q as D}from"./QForm.220d8a84.js";import{Q as h}from"./QPage.2d86947d.js";import{u as F}from"./use-quasar.37be5784.js";import{B as I}from"./BackendLayout.3582d047.js";import"./selection.ee13bcf1.js";import"./QDrawer.ce190e8f.js";import"./touch.70a9dd44.js";import"./plugin-vue_export-helper.21dcd24c.js";const L={class:"flex justify-between items-center"},N=t("div",{class:"text-lg font-bold"},"New Faq",-1),R={class:"col-xs-12"},T={class:"col-xs-12"},k={class:"col-xs-12"},E={class:"col-xs-12"},z={class:"col-xs-12"},j={class:"col-xs-12"},A={class:"col-xs-12"},C={class:"col-xs-12 q-gutter-md"},re={setup(G){const n=F(),s=B({uid:"",title:"",poster_url:"",trailer_url:"",price:0,description:""});w({});const q=a=>{s.post(route("video.store"),{preserveState:!0,onSuccess:o=>{var d;return n.notify({type:"positive",message:(d=S().props.value)==null?void 0:d.success})},onError:o=>n.notify({type:"negative",message:"Something went wrong"})})};return(a,o)=>(P(),x(I,null,{content:u(()=>[r(h,{padding:""},{default:u(()=>[t("div",L,[N,r($,{"active-color":"primary",class:"text-gray-500 text-xs"},{default:u(()=>[r(p,{label:"Dashboard",icon:"dashboard"}),r(p,{label:"Videos",icon:"feed"}),r(p,{label:"New Video",icon:"save"})]),_:1})]),r(Q,{class:"full-width q-my-md"}),r(D,{onSubmit:q,class:"row q-col-gutter-sm"},{default:u(()=>{var d,m,c,g,b,V,f,v,_,y;return[t("div",R,[r(i,{modelValue:l(s).uid,"onUpdate:modelValue":o[0]||(o[0]=e=>l(s).uid=e),outlined:"",label:"UID",error:!!((d=a.$page.props.errors)!=null&&d.uid),"error-message":(m=a.$page.props.errors)==null?void 0:m.uid,rules:[e=>!!e||"UID is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",T,[r(i,{modelValue:l(s).title,"onUpdate:modelValue":o[1]||(o[1]=e=>l(s).title=e),outlined:"",label:"Title",error:!!((c=a.$page.props.errors)!=null&&c.title),"error-message":(g=a.$page.props.errors)==null?void 0:g.title,rules:[e=>!!e||"Title is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",k,[r(i,{modelValue:l(s).poster_url,"onUpdate:modelValue":o[2]||(o[2]=e=>l(s).poster_url=e),outlined:"",label:"Poster URL",error:!!((b=a.$page.props.errors)!=null&&b.poster_url),"error-message":(V=a.$page.props.errors)==null?void 0:V.poster_url,rules:[e=>!!e||"Poster URL is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",E,[r(i,{modelValue:l(s).trailer_url,"onUpdate:modelValue":o[3]||(o[3]=e=>l(s).trailer_url=e),outlined:"",error:!!((f=a.$page.props.errors)!=null&&f.trailer_url),"error-message":(v=a.$page.props.errors)==null?void 0:v.trailer_url,label:"Trailer Url",rules:[e=>!!e||"Trailer URL is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",z,[r(i,{modelValue:l(s).description,"onUpdate:modelValue":o[4]||(o[4]=e=>l(s).description=e),type:"textarea",outlined:"",label:"Description"},null,8,["modelValue"])]),t("div",j,[r(i,{modelValue:l(s).price,"onUpdate:modelValue":o[5]||(o[5]=e=>l(s).price=e),outlined:"",error:!!((_=a.$page.props.errors)!=null&&_.price),"error-message":(y=a.$page.props.errors)==null?void 0:y.price,label:"Price",rules:[e=>!!e||"Price is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",A,[r(Q)]),t("div",C,[r(U,{disable:l(s).processing,class:"sized-btn",type:"submit",rounded:"",color:"primary",label:"Save"},null,8,["disable"]),r(U,{class:"sized-btn",type:"reset",rounded:"",color:"negative",label:"Reset"})])]}),_:1})]),_:1})]),_:1}))}};export{re as default};