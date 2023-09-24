import{F as e}from"./Form-9ebda4e3.js";import{d as o,q as s,e as l,F as r,r as a,o as t,i as n,a as i,K as d,k as p}from"./index-dd501c4d.js";import{u as c}from"./useForm-d5be2563.js";import{E as m}from"./el-button-7de8ba58.js";import{E as u}from"./el-input-2f5701dc.js";import{u as f}from"./useValidator-fac11462.js";function g(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)}const h=o({__name:"RegisterForm",emits:["to-login"],setup(o,{emit:d}){const{formRegister:h,formMethods:w}=c(),{getElFormExpose:P}=w,{t:b}=p(),{required:v}=f(),k=s([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>l("h2",{class:"text-2xl font-bold text-center w-[100%]"},[b("login.register")])}}},{field:"username",label:b("login.username"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:b("login.usernamePlaceholder")}},{field:"password",label:b("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:b("login.passwordPlaceholder")}},{field:"check_password",label:b("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:b("login.passwordPlaceholder")}},{field:"code",label:b("login.code"),colProps:{span:24},formItemProps:{slots:{default:e=>l("div",{class:"w-[100%] flex"},[l(u,{modelValue:e.code,"onUpdate:modelValue":o=>e.code=o,placeholder:b("login.codePlaceholder")},null)])}}},{field:"register",colProps:{span:24},formItemProps:{slots:{default:()=>{let e,o;return l(r,null,[l("div",{class:"w-[100%]"},[l(m,{type:"primary",class:"w-[100%]",loading:x.value,onClick:F},g(e=b("login.register"))?e:{default:()=>[e]})]),l("div",{class:"w-[100%] mt-15px"},[l(m,{class:"w-[100%]",onClick:j},g(o=b("login.hasUser"))?o:{default:()=>[o]})])])}}}}]),y={username:[v()],password:[v()],check_password:[v()],code:[v()]},j=()=>{d("to-login")},x=a(!1),F=async()=>{const e=await P();null==e||e.validate((async e=>{if(e)try{x.value=!0,j()}finally{x.value=!1}}))};return(o,s)=>(t(),n(i(e),{schema:k,rules:y,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:i(h)},null,8,["schema","onRegister"]))}});export{h as _};
