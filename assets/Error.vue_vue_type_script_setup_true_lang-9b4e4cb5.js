import{d as e,O as r,o as s,c as t,f as o,t as a,e as i,w as n,a as l,k as c,A as m}from"./index-0f2f4131.js";import{E as u}from"./el-button-2439abc8.js";const p={class:"flex justify-center"},f={class:"text-center"},d=["src"],x={class:"text-14px text-[var(--el-color-info)]"},g={class:"mt-20px"},v=e({__name:"Error",props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const v=e,{t:y}=c(),T={404:{url:"/assets/404-1759fece.svg",message:y("error.pageError"),buttonText:y("error.returnToHome")},500:{url:"/assets/500-8fda557c.svg",message:y("error.networkError"),buttonText:y("error.returnToHome")},403:{url:"/assets/403-af24f6bf.svg",message:y("error.noPermission"),buttonText:y("error.returnToHome")}},b=()=>{r("errorClick",v.type)};return(r,c)=>(s(),t("div",p,[o("div",f,[o("img",{width:"350",src:T[e.type].url,alt:""},null,8,d),o("div",x,a(T[e.type].message),1),o("div",g,[i(l(u),{type:"primary",onClick:b},{default:n((()=>[m(a(T[e.type].buttonText),1)])),_:1})])])]))}});export{v as _};
