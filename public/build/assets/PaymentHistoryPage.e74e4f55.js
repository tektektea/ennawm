import{h as m,g as p,f as u,e as l}from"./QBtnDropdown.50f28dc8.js";import{Q as c}from"./QChip.ae3b28af.js";import{Q as _}from"./QPage.3c983cdf.js";import{_ as f}from"./FrontLayout.90b84878.js";import{E as r,F as a,o as s,H as t,c as i,G as y,L as x,b,aq as o,J as n}from"./main.6f4cccc6.js";import"./AuthenticatedToolbar.5f82720e.js";import"./use-quasar.ab735963.js";const Q=b("p",{class:"text-2xl text-gray-50"},"Payment history",-1),w={props:{payments:Array},setup(d){return(g,h)=>(s(),r(f,null,{content:a(()=>[t(_,{class:"container mx-auto"},{default:a(()=>[Q,t(m,{class:"bg-primary shadow-md text-gray-50 rounded-borders",dark:"",separator:""},{default:a(()=>[(s(!0),i(x,null,y(d.payments,e=>(s(),r(p,{class:"p-8",key:e.id},{default:a(()=>[t(u,null,{default:a(()=>[t(l,null,{default:a(()=>[o("Order ID: "+n(e.order_id),1)]),_:2},1024),t(l,null,{default:a(()=>[o("Amount: "+n(e.amount),1)]),_:2},1024),t(l,null,{default:a(()=>[o("Date: "+n(e.created_at),1)]),_:2},1024)]),_:2},1024),t(u,{side:""},{default:a(()=>[e.status==="success"?(s(),r(c,{key:0,color:"success",label:e.status},null,8,["label"])):(s(),r(c,{key:1,label:e.status},null,8,["label"]))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}};export{w as default};
