import{Q as d}from"./QPage.1c79b059.js";import{_ as l}from"./FrontLayout.5db4d785.js";import{u as m}from"./use-quasar.bfc9da49.js";import{y as p,D as u,i as b,E as g,F as n,o as f,H as y,b as i,J as h,aX as w,I as _}from"./main.bd436081.js";import"./selection.87615b6d.js";import"./QList.a036169b.js";import"./QItem.0b45c483.js";import"./QBtnDropdown.8ba807d3.js";const x={class:"font-semibold text-lg text-gray-100"},q={props:{video:Object,otp:String,playbackInfo:String},setup(a){const s=a,e=m();p(()=>{var o;const t=(o=u().props.value)==null?void 0:o.error;t&&e.notify({type:"negative",message:t||"Something went wrong"}),new VdoPlayer({otp:s.otp,playbackInfo:s.playbackInfo,theme:"9ae8bbe8dd964ddc9bdb932cca1cb59a",container:document.querySelector("#embedBox")}),window.location=route("video.show")});const c=b(()=>({width:e.screen.width,height:e.screen.height}));return(t,o)=>(f(),g(l,null,{content:n(()=>[y(d,{class:"bg-secondary"},{default:n(()=>{var r;return[i("div",x,h((r=a.video)==null?void 0:r.title),1),i("div",{style:w(_(c)),id:"embedBox"},null,4)]}),_:1})]),_:1}))}};export{q as default};