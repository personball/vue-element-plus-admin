import{_ as e}from"./Write.vue_vue_type_script_setup_true_lang-733589a0.js";import{_ as t}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-236feeb3.js";import{d as s,u as r,r as o,o as i,i as a,w as p,e as m,A as l,t as u,a as n,k as _}from"./index-dd501c4d.js";import{E as j}from"./el-button-7de8ba58.js";import{s as d}from"./index-aeb318a4.js";import{u as c}from"./useEmitt-13a9462a.js";import"./Form-9ebda4e3.js";import"./el-col-2874e106.js";import"./el-input-2f5701dc.js";import"./use-form-item-daf07b5d.js";import"./constants-6c13ff2f.js";import"./use-form-common-props-a09ad7cf.js";import"./el-popper-15af447a.js";import"./el-tag-bb891d1c.js";import"./tsxHelper-2651a5da.js";import"./el-select-52cd7507.js";import"./index-be10301b.js";import"./debounce-caff1234.js";import"./el-input-number-b3f34566.js";import"./el-divider-7aeef66b.js";import"./InputPassword-272ca291.js";import"./style.css_vue_type_style_index_0_src_true_lang-fc56fa8a.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-a6bb5f47.js";import"./aria-ecee1d93.js";import"./index-62c272a1.js";import"./useForm-d5be2563.js";import"./useValidator-fac11462.js";import"./el-card-94b5b26d.js";import"./index-620b62cf.js";const f=s({__name:"ExampleAdd",setup(s){const{emitter:f}=c(),{push:x,go:v}=r(),{t:g}=_(),y=o(),k=o(!1),b=async()=>{const e=n(y),t=await(null==e?void 0:e.submit());if(t){k.value=!0;await d(t).catch((()=>{})).finally((()=>{k.value=!1}))&&(f.emit("getList","add"),x("/example/example-page"))}};return(s,r)=>(i(),a(n(t),{title:n(g)("exampleDemo.add"),onBack:r[1]||(r[1]=e=>n(x)("/example/example-page"))},{header:p((()=>[m(n(j),{onClick:r[0]||(r[0]=e=>n(v)(-1))},{default:p((()=>[l(u(n(g)("common.back")),1)])),_:1}),m(n(j),{type:"primary",loading:k.value,onClick:b},{default:p((()=>[l(u(n(g)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:p((()=>[m(e,{ref_key:"writeRef",ref:y},null,512)])),_:1},8,["title"]))}});export{f as default};
