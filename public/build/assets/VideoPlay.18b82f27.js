import{Q as d}from"./QPage.991008bb.js";import{_ as l}from"./FrontLayout.05912ab4.js";import{u as m}from"./use-quasar.3ac9b4a3.js";import{y as p,D as u,i as b,E as g,F as n,o as f,H as y,b as c,J as h,aW as _,I as x}from"./main.e2e7f622.js";import"./selection.71fa7cd7.js";import"./QList.9f8486b2.js";import"./QItem.b1c502a2.js";import"./QBtnDropdown.357cb2c4.js";const S={class:"font-semibold text-lg text-gray-100"},q={props:{video:Object,otp:String,playbackInfo:String},setup(a){const s=a,e=m();p(()=>{var o;const t=(o=u().props.value)==null?void 0:o.error;t&&e.notify({type:"negative",message:t||"Something went wrong"}),new VdoPlayer({otp:s.otp,playbackInfo:s.playbackInfo,theme:"9ae8bbe8dd964ddc9bdb932cca1cb59a",container:document.querySelector("#embedBox")})});const i=b(()=>({width:e.screen.width,height:e.screen.height}));return(t,o)=>(f(),g(l,null,{content:n(()=>[y(d,{class:"bg-secondary"},{default:n(()=>{var r;return[c("div",S,h((r=a.video)==null?void 0:r.title),1),c("div",{style:_(x(i)),id:"embedBox"},null,4)]}),_:1})]),_:1}))}};export{q as default};