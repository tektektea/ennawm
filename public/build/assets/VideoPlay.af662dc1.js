import{Q as d}from"./QPage.3c983cdf.js";import{_ as l}from"./FrontLayout.90b84878.js";import{u as m}from"./use-quasar.ab735963.js";import{y as p,D as u,i as b,E as g,F as r,o as f,H as y,b as c,J as h,a_ as _,I as w}from"./main.6f4cccc6.js";import"./QBtnDropdown.50f28dc8.js";import"./AuthenticatedToolbar.5f82720e.js";const x={class:"font-semibold text-lg text-gray-100"},Q={props:{video:Object,otp:String,playbackInfo:String},setup(a){const s=a,e=m();p(()=>{var o;const t=(o=u().props.value)==null?void 0:o.error;t&&e.notify({type:"negative",message:t||"Something went wrong"}),new VdoPlayer({otp:s.otp,playbackInfo:s.playbackInfo,theme:"9ae8bbe8dd964ddc9bdb932cca1cb59a",container:document.querySelector("#embedBox")}),window.location=route("video.show")});const i=b(()=>({width:e.screen.width,height:e.screen.height}));return(t,o)=>(f(),g(l,null,{content:r(()=>[y(d,{class:"bg-secondary"},{default:r(()=>{var n;return[c("div",x,h((n=a.video)==null?void 0:n.title),1),c("div",{style:_(w(i)),id:"embedBox"},null,4)]}),_:1})]),_:1}))}};export{Q as default};
