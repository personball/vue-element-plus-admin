import{_ as e}from"./Write.vue_vue_type_script_setup_true_lang-2352dcc2.js";import{_ as t}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-c3a2f48b.js";import{d as s,u as r,ay as a,r as o,o as i,i as p,w as m,e as l,A as u,t as n,a as _,k as j}from"./index-0f2f4131.js";import{E as c}from"./el-button-2439abc8.js";import{b as d,s as f}from"./index-5f80b863.js";import{u as v}from"./useEmitt-3a031520.js";import"./Form-baf5d56a.js";import"./el-col-e573d83e.js";import"./el-input-67df89d4.js";import"./use-form-item-0c8a537a.js";import"./constants-d2900520.js";import"./use-form-common-props-8f4d7aa8.js";import"./el-popper-988e2eb3.js";import"./el-tag-da1c3460.js";import"./tsxHelper-0603e3f3.js";import"./el-select-6b72a57b.js";import"./index-6f0a8630.js";import"./debounce-f9e067c0.js";import"./el-input-number-4302e5fc.js";import"./el-divider-06c47061.js";import"./InputPassword-30095de5.js";import"./style.css_vue_type_style_index_0_src_true_lang-a2f9e27c.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-dbaeb234.js";import"./aria-ecee1d93.js";import"./index-537ccfe7.js";import"./useForm-215219a6.js";import"./useValidator-a1dbd3fd.js";import"./el-card-a4dbbdba.js";import"./index-090de5ab.js";const x=s({__name:"ExampleEdit",setup(s){const{emitter:x}=v(),{push:y,go:g}=r(),{query:w}=a(),{t:b}=j(),k=o(null);(async()=>{const e=await d(w.id);e&&(k.value=e.data)})();const E=o(),h=o(!1),C=async()=>{const e=_(E),t=await(null==e?void 0:e.submit());if(t){h.value=!0;await f(t).catch((()=>{})).finally((()=>{h.value=!1}))&&(x.emit("getList","editor"),y("/example/example-page"))}};return(s,r)=>(i(),p(_(t),{title:_(b)("exampleDemo.edit"),onBack:r[1]||(r[1]=e=>_(y)("/example/example-page"))},{header:m((()=>[l(_(c),{onClick:r[0]||(r[0]=e=>_(g)(-1))},{default:m((()=>[u(n(_(b)("common.back")),1)])),_:1}),l(_(c),{type:"primary",loading:h.value,onClick:C},{default:m((()=>[u(n(_(b)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:m((()=>[l(e,{ref_key:"writeRef",ref:E,"current-row":k.value},null,8,["current-row"])])),_:1},8,["title"]))}});export{x as default};
