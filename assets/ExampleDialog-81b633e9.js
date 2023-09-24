import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-9001c7c7.js";import{_ as t}from"./Search.vue_vue_type_script_setup_true_lang-ccf0603c.js";import{_ as a}from"./Dialog.vue_vue_type_style_index_0_lang-1f82cced.js";import{d as l,r as o,q as i,e as s,F as r,a as n,o as m,c as p,w as d,f as u,A as c,t as _,L as f,i as v,Q as g,K as j,k as h}from"./index-0f2f4131.js";import{E as b}from"./el-button-2439abc8.js";import{E as y}from"./el-tag-da1c3460.js";import{_ as D}from"./Table.vue_vue_type_script_lang-7214dc8a.js";import{g as x,d as w,s as S}from"./index-5f80b863.js";import{u as k}from"./useTable-6de26a90.js";import{_ as P}from"./Write.vue_vue_type_script_setup_true_lang-191689e2.js";import{_ as C}from"./Detail.vue_vue_type_script_setup_true_lang-428a3adc.js";import{u as E}from"./useCrudSchemas-20b8fa2c.js";import"./el-card-a4dbbdba.js";import"./el-popper-988e2eb3.js";import"./constants-d2900520.js";import"./Form-baf5d56a.js";import"./el-col-e573d83e.js";import"./el-input-67df89d4.js";import"./use-form-item-0c8a537a.js";import"./use-form-common-props-8f4d7aa8.js";import"./tsxHelper-0603e3f3.js";import"./el-select-6b72a57b.js";import"./index-6f0a8630.js";import"./debounce-f9e067c0.js";import"./el-input-number-4302e5fc.js";import"./el-divider-06c47061.js";import"./InputPassword-30095de5.js";import"./style.css_vue_type_style_index_0_src_true_lang-a2f9e27c.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-dbaeb234.js";import"./aria-ecee1d93.js";import"./index-537ccfe7.js";import"./useForm-215219a6.js";import"./useIcon-bb7e183b.js";import"./el-overlay-85ac7b9c.js";import"./vnode-57aa8841.js";import"./refs-a293ed11.js";import"./el-pagination-4c9d35b5.js";import"./el-image-viewer-f4dbaec7.js";import"./el-dropdown-item-2b377c1f.js";import"./dropdown-552f1355.js";import"./index-090de5ab.js";import"./el-message-box-7e295404.js";import"./useValidator-a1dbd3fd.js";import"./Descriptions-59098111.js";import"./tree-b59d36bb.js";const I={class:"mb-10px"};function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const z=l({__name:"ExampleDialog",setup(l){const j=o([]),{tableRegister:z,tableState:L,tableMethods:H}=k({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=L,a=await x({pageIndex:n(e),pageSize:n(t),...n(W)});return{list:a.data.list,total:a.data.total}},fetchDelApi:async()=>!!(await w(n(j)))}),{loading:M,dataList:T,total:V,currentPage:Y,pageSize:A}=L,{getList:F,getElTableExpose:O,delList:U}=H,W=o({}),K=e=>{W.value=e,F()},{t:N}=h(),Q=i([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:N("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:N("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:N("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:N("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:N("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:e=>s(y,{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:()=>[1===e.importance?N("tableDemo.important"):2===e.importance?N("tableDemo.good"):N("tableDemo.commonly")]})}}},{field:"pageviews",label:N("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:N("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:e=>s("div",{innerHTML:e.content},null)}}},{field:"action",width:"260px",label:N("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let t,a,l;return s(r,null,[s(b,{type:"primary",onClick:()=>te(e.row,"edit")},R(t=N("exampleDemo.edit"))?t:{default:()=>[t]}),s(b,{type:"success",onClick:()=>te(e.row,"detail")},R(a=N("exampleDemo.detail"))?a:{default:()=>[a]}),s(b,{type:"danger",onClick:()=>ee(e.row)},R(l=N("exampleDemo.del"))?l:{default:()=>[l]})])}}}}]),{allSchemas:q}=E(Q),G=o(!1),J=o(""),X=o(null),B=o(""),Z=()=>{J.value=N("exampleDemo.add"),X.value=null,G.value=!0,B.value=""},$=o(!1),ee=async e=>{const t=await O();j.value=e?[e.id]:(null==t?void 0:t.getSelectionRows().map((e=>e.id)))||[],$.value=!0,await U(n(j).length).finally((()=>{$.value=!1}))},te=(e,t)=>{J.value=N("edit"===t?"exampleDemo.edit":"exampleDemo.detail"),B.value=t,X.value=e,G.value=!0},ae=o(),le=o(!1),oe=async()=>{const e=n(ae),t=await(null==e?void 0:e.submit());if(t){le.value=!0;await S(t).catch((()=>{})).finally((()=>{le.value=!1}))&&(G.value=!1,Y.value=1,F())}};return(l,o)=>(m(),p(r,null,[s(n(e),null,{default:d((()=>[s(n(t),{schema:n(q).searchSchema,onSearch:K,onReset:K},null,8,["schema"]),u("div",I,[s(n(b),{type:"primary",onClick:Z},{default:d((()=>[c(_(n(N)("exampleDemo.add")),1)])),_:1}),s(n(b),{loading:$.value,type:"danger",onClick:o[0]||(o[0]=e=>ee(null))},{default:d((()=>[c(_(n(N)("exampleDemo.del")),1)])),_:1},8,["loading"])]),s(n(D),{pageSize:n(A),"onUpdate:pageSize":o[1]||(o[1]=e=>f(A)?A.value=e:null),currentPage:n(Y),"onUpdate:currentPage":o[2]||(o[2]=e=>f(Y)?Y.value=e:null),columns:n(q).tableColumns,data:n(T),loading:n(M),pagination:{total:n(V)},onRegister:n(z)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),s(n(a),{modelValue:G.value,"onUpdate:modelValue":o[4]||(o[4]=e=>G.value=e),title:J.value},{footer:d((()=>["detail"!==B.value?(m(),v(n(b),{key:0,type:"primary",loading:le.value,onClick:oe},{default:d((()=>[c(_(n(N)("exampleDemo.save")),1)])),_:1},8,["loading"])):g("",!0),s(n(b),{onClick:o[3]||(o[3]=e=>G.value=!1)},{default:d((()=>[c(_(n(N)("dialogDemo.close")),1)])),_:1})])),default:d((()=>["detail"!==B.value?(m(),v(P,{key:0,ref_key:"writeRef",ref:ae,"form-schema":n(q).formSchema,"current-row":X.value},null,8,["form-schema","current-row"])):g("",!0),"detail"===B.value?(m(),v(C,{key:1,"detail-schema":n(q).detailSchema,"current-row":X.value},null,8,["detail-schema","current-row"])):g("",!0)])),_:1},8,["modelValue","title"])],64))}});export{z as default};
