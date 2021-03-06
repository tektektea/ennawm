import{Q as S,a as Q}from"./QBreadcrumbs.6cda40f6.js";import{i as x,$ as q,y as L,D as y,E as b,F as s,o as c,H as a,b as l,aC as N,I as n,an as M,Q as u,aB as P,c as j,G as E,L as $,ar as k,aq as p,J as f}from"./main.6f4cccc6.js";import{h as z,g as A,f as m,e as _}from"./QBtnDropdown.50f28dc8.js";import{Q as F}from"./QPagination.0b7f8d64.js";import{Q as U}from"./QPage.3c983cdf.js";import{u as G}from"./use-quasar.ab735963.js";import{B as H}from"./BackendLayout.fcc7f5c9.js";import"./QExpansionItem.0b09619b.js";import"./touch.70a9dd44.js";import"./AuthenticatedToolbar.5f82720e.js";import"./plugin-vue_export-helper.21dcd24c.js";const J={class:"flex justify-between items-center"},K=l("div",null,[l("div",{class:"text-lg font-semibold"},"Videos"),l("div",{class:"text-caption"},"List of uploaded videos")],-1),O={class:"flex justify-between items-center q-my-md"},R={class:"col-12"},T=["src"],W={class:"flex flex-inline justify-center q-gutter-sm"},ie={setup(X){const V=G(),d=x(()=>y().props.value.list),o=q({selected:null,search:"",listData:{per_page:15,data:[],current_page:1,total:1}}),C=t=>{V.dialog({title:"Confirm",message:"Would you like to delete?",cancel:!0,persistent:!0}).onOk(()=>{k.Inertia.delete(route("video.destroy",t.id))}).onCancel(()=>{}).onDismiss(()=>{})},D=t=>{o.selected=t},B=t=>{o.search=t.target.value,t.keyCode===13&&g(1)},w=t=>{g(t)},g=t=>{k.Inertia.get(route("faq.index"),{page:t,search:o.search},{preserveState:!0,replace:!0})};L(()=>{var v;const t=y(),{current_page:r,total:e,per_page:h,data:i}=(v=t.props.value)==null?void 0:v.list;o.listData.current_page=r,o.listData.data=i,o.listData.total=e,o.listData.per_page=h});const I=x(()=>Math.ceil(d.value.total/d.value.per_page));return(t,r)=>(c(),b(H,null,{content:s(()=>[a(U,{padding:""},{default:s(()=>[l("div",J,[K,a(S,{"active-color":"primary",class:"text-gray-500 text-sm"},{default:s(()=>[a(Q,{icon:"dashboard",label:"Dashboard"}),a(Q,{icon:"movie",label:"Videos"})]),_:1})]),l("div",O,[a(N,{modelValue:n(o).search,"onUpdate:modelValue":r[0]||(r[0]=e=>n(o).search=e),dense:"",outlined:"",placeholder:"Search",rounded:"",onKeyup:B},{append:s(()=>[a(M,{name:"search"})]),_:1},8,["modelValue"]),a(u,{href:t.route("video.create"),color:"primary",label:"New Video",rounded:""},null,8,["href"])]),a(P,{class:"full-width q-my-sm"}),l("div",R,[a(z,{separator:"",class:"bg-white shadow-sm rounded-borders"},{default:s(()=>[(c(!0),j($,null,E(n(d).data,(e,h)=>(c(),b(A,{key:e.id,onClick:i=>D(e)},{default:s(()=>[a(m,{avatar:""},{default:s(()=>[l("img",{width:"120",src:e.poster_url},null,8,T)]),_:2},1024),a(m,null,{default:s(()=>[a(_,null,{default:s(()=>[p(f(e==null?void 0:e.title),1)]),_:2},1024),a(_,{caption:""},{default:s(()=>[p("RS."+f((e==null?void 0:e.price)||"NA"),1)]),_:2},1024),a(_,{caption:""},{default:s(()=>[p(f((e==null?void 0:e.description)||"NA"),1)]),_:2},1024)]),_:2},1024),a(m,{side:""},{default:s(()=>[l("div",W,[a(u,{href:t.route("video.edit",e.id),icon:"edit",outline:"",round:"",size:"12px"},null,8,["href"]),a(u,{color:"negative",icon:"delete",outline:"",round:"",size:"12px",onClick:i=>C(e)},null,8,["onClick"])])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),a(F,{modelValue:n(d).current_page,"onUpdate:modelValue":[r[1]||(r[1]=e=>n(d).current_page=e),w],max:n(I),input:""},null,8,["modelValue","max"])]),_:1})]),_:1}))}};export{ie as default};
