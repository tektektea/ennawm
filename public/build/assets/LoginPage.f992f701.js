import{a3 as p,aA as g,c as b,b as e,H as l,F as d,R as u,S as f,o as h,aB as c,I as s,P as _,aC as x}from"./main.087cf1d2.js";import{Q as w}from"./QForm.a6ddb699.js";import{u as y}from"./use-quasar.2fb135be.js";const v={class:"bg-white grid md:grid-cols-5 h-screen w-screen dark:bg-gray-900"},V={class:"flex col-span-5 md:col-span-2 justify-center h-screen"},k={class:"flex items-center w-full px-6 mx-auto lg:w-4/6"},S={class:"flex-1"},Q=e("div",{class:"text-center"},[e("h2",{class:"text-4xl font-bold text-center text-gray-700 dark:text-white"},"ENNAWM.tv"),e("p",{class:"mt-3 text-gray-500 dark:text-gray-300"},"Sign in to access your account")],-1),T={class:"mt-8"},E=e("label",{for:"email",class:"block mb-2 text-sm text-gray-600 dark:text-gray-200"},"Email Address",-1),F={class:"mt-2"},N={class:"flex justify-between mb-2"},B=e("label",{for:"password",class:"text-sm text-gray-600 dark:text-gray-200"},"Password",-1),C=["href"],I={class:"mt-2"},P={class:"mt-6"},q=["disabled"],A={class:"mt-6 text-sm text-center text-gray-400"},U=u("Don't have an account yet? "),$=["href"],j=u("."),R=e("div",{class:"bg-primary col-span-5 md:col-span-3"},null,-1),z={setup(D){const n=p({passwordType:"password"}),i=y(),o=g({email:"",password:"",remember:!1}),m=a=>{o.post(route("login"),{onStart:()=>i.loading.show(),onError:t=>console.log(t),onSuccess:()=>{console.log("success"),f.Inertia.get(route("home"))},onFinish:()=>i.loading.hide()})};return(a,t)=>(h(),b("div",v,[e("div",V,[e("div",k,[e("div",S,[Q,e("div",T,[l(w,{onSubmit:m},{default:d(()=>[e("div",null,[E,l(c,{type:"email",outlined:"",placeholder:"Email",dense:"",error:!!a.$page.props.errors.email,"error-message":a.$page.props.errors.email,modelValue:s(o).email,"onUpdate:modelValue":t[0]||(t[0]=r=>s(o).email=r),id:"email"},null,8,["error","error-message","modelValue"])]),e("div",F,[e("div",N,[B,e("a",{href:a.route("password.request"),class:"text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"},"Forgot password?",8,C)]),l(c,{type:s(n).passwordType,outlined:"",placeholder:"Password",dense:"",modelValue:s(o).password,"onUpdate:modelValue":t[2]||(t[2]=r=>s(o).password=r),rules:[r=>!!r||"Password is required"],id:"password"},{append:d(()=>[l(_,{name:s(n).passwordType==="text"?"visibility":"visibility_off",onClick:t[1]||(t[1]=r=>s(n).passwordType=s(n).passwordType==="text"?"password":"text")},null,8,["name"])]),_:1},8,["type","modelValue","rules"])]),e("div",I,[l(x,{modelValue:s(o).remember,"onUpdate:modelValue":t[3]||(t[3]=r=>s(o).remember=r),label:"Remember me?"},null,8,["modelValue"])]),e("div",P,[e("button",{type:"submit",disabled:s(o).processing,class:"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"}," Sign in ",8,q)])]),_:1}),e("p",A,[U,e("a",{href:a.route("register"),class:"text-blue-500 focus:outline-none focus:underline hover:underline"},"Sign up",8,$),j])])])])]),R]))}};export{z as default};