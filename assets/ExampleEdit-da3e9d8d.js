import{_ as e}from"./Write.vue_vue_type_script_setup_true_lang-733589a0.js";import{_ as t}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-236feeb3.js";import{d as s,u as r,ay as a,r as o,o as i,i as p,w as m,e as l,A as u,t as n,a as _,k as j}from"./index-dd501c4d.js";import{E as c}from"./el-button-7de8ba58.js";import{b as d,s as f}from"./index-aeb318a4.js";import{u as v}from"./useEmitt-13a9462a.js";import"./Form-9ebda4e3.js";import"./el-col-2874e106.js";import"./el-input-2f5701dc.js";import"./use-form-item-daf07b5d.js";import"./constants-6c13ff2f.js";import"./use-form-common-props-a09ad7cf.js";import"./el-popper-15af447a.js";import"./el-tag-bb891d1c.js";import"./tsxHelper-2651a5da.js";import"./el-select-52cd7507.js";import"./index-be10301b.js";import"./debounce-caff1234.js";import"./el-input-number-b3f34566.js";import"./el-divider-7aeef66b.js";import"./InputPassword-272ca291.js";import"./style.css_vue_type_style_index_0_src_true_lang-fc56fa8a.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-a6bb5f47.js";import"./aria-ecee1d93.js";import"./index-62c272a1.js";import"./useForm-d5be2563.js";import"./useValidator-fac11462.js";import"./el-card-94b5b26d.js";import"./index-620b62cf.js";const x=s({__name:"ExampleEdit",setup(s){const{emitter:x}=v(),{push:y,go:g}=r(),{query:w}=a(),{t:b}=j(),k=o(null);(async()=>{const e=await d(w.id);e&&(k.value=e.data)})();const E=o(),h=o(!1),C=async()=>{const e=_(E),t=await(null==e?void 0:e.submit());if(t){h.value=!0;await f(t).catch((()=>{})).finally((()=>{h.value=!1}))&&(x.emit("getList","editor"),y("/example/example-page"))}};return(s,r)=>(i(),p(_(t),{title:_(b)("exampleDemo.edit"),onBack:r[1]||(r[1]=e=>_(y)("/example/example-page"))},{header:m((()=>[l(_(c),{onClick:r[0]||(r[0]=e=>_(g)(-1))},{default:m((()=>[u(n(_(b)("common.back")),1)])),_:1}),l(_(c),{type:"primary",loading:h.value,onClick:C},{default:m((()=>[u(n(_(b)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:m((()=>[l(e,{ref_key:"writeRef",ref:E,"current-row":k.value},null,8,["current-row"])])),_:1},8,["title"]))}});export{x as default};
