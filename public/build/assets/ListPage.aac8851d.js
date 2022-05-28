import{Q as I,a as Q}from"./QBreadcrumbs.b89e7196.js";import{i as x,a3 as L,y as N,D as y,E as b,F as s,o as c,H as a,b as l,aB as q,I as n,P,Q as u,aK as M,c as j,G as E,L as z,S as k,R as p,J as f}from"./main.e2e7f622.js";import{a as A,Q as m}from"./QItem.b1c502a2.js";import{a as F,Q as _}from"./QList.9f8486b2.js";import{Q as K}from"./QPagination.d6e93303.js";import{Q as R}from"./QPage.991008bb.js";import{u as U}from"./use-quasar.3ac9b4a3.js";import{B as $}from"./BackendLayout.185d51f3.js";import"./selection.71fa7cd7.js";import"./QDrawer.12765640.js";import"./touch.70a9dd44.js";import"./plugin-vue_export-helper.21dcd24c.js";const G={class:"flex justify-between items-center"},H=l("div",null,[l("div",{class:"text-lg font-semibold"},"Videos"),l("div",{class:"text-caption"},"List of uploaded videos")],-1),J={class:"flex justify-between items-center q-my-md"},O={class:"col-12"},T=["src"],W={class:"flex flex-inline justify-center q-gutter-sm"},ce={setup(X){const V=U(),d=x(()=>y().props.value.list),o=L({selected:null,search:"",listData:{per_page:15,data:[],current_page:1,total:1}}),D=t=>{V.dialog({title:"Confirm",message:"Would you like to delete?",cancel:!0,persistent:!0}).onOk(()=>{k.Inertia.delete(route("video.destroy",t.id))}).onCancel(()=>{}).onDismiss(()=>{})},B=t=>{o.selected=t},C=t=>{o.search=t.target.value,t.keyCode===13&&g(1)},S=t=>{g(t)},g=t=>{k.Inertia.get(route("faq.index"),{page:t,search:o.search},{preserveState:!0,replace:!0})};N(()=>{var v;const t=y(),{current_page:r,total:e,per_page:h,data:i}=(v=t.props.value)==null?void 0:v.list;o.listData.current_page=r,o.listData.data=i,o.listData.total=e,o.listData.per_page=h});const w=x(()=>Math.ceil(d.value.total/d.value.per_page));return(t,r)=>(c(),b($,null,{content:s(()=>[a(R,{padding:""},{default:s(()=>[l("div",G,[H,a(I,{"active-color":"primary",class:"text-gray-500 text-sm"},{default:s(()=>[a(Q,{icon:"dashboard",label:"Dashboard"}),a(Q,{icon:"movie",label:"Videos"})]),_:1})]),l("div",J,[a(q,{modelValue:n(o).search,"onUpdate:modelValue":r[0]||(r[0]=e=>n(o).search=e),dense:"",outlined:"",placeholder:"Search",rounded:"",onKeyup:C},{append:s(()=>[a(P,{name:"search"})]),_:1},8,["modelValue"]),a(u,{href:t.route("video.create"),color:"primary",label:"New Video",rounded:""},null,8,["href"])]),a(M,{class:"full-width q-my-sm"}),l("div",O,[a(F,{separator:"",class:"bg-white shadow-sm rounded-borders"},{default:s(()=>[(c(!0),j(z,null,E(n(d).data,(e,h)=>(c(),b(A,{key:e.id,onClick:i=>B(e)},{default:s(()=>[a(m,{avatar:""},{default:s(()=>[l("img",{width:"120",src:e.poster_url},null,8,T)]),_:2},1024),a(m,null,{default:s(()=>[a(_,null,{default:s(()=>[p(f(e==null?void 0:e.title),1)]),_:2},1024),a(_,{caption:""},{default:s(()=>[p("RS."+f((e==null?void 0:e.price)||"NA"),1)]),_:2},1024),a(_,{caption:""},{default:s(()=>[p(f((e==null?void 0:e.description)||"NA"),1)]),_:2},1024)]),_:2},1024),a(m,{side:""},{default:s(()=>[l("div",W,[a(u,{href:t.route("video.edit",e.id),icon:"edit",outline:"",round:"",size:"12px"},null,8,["href"]),a(u,{color:"negative",icon:"delete",outline:"",round:"",size:"12px",onClick:i=>D(e)},null,8,["onClick"])])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),a(K,{modelValue:n(d).current_page,"onUpdate:modelValue":[r[1]||(r[1]=e=>n(d).current_page=e),S],max:n(w),input:""},null,8,["modelValue","max"])]),_:1})]),_:1}))}};export{ce as default};
