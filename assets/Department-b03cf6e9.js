import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-9001c7c7.js";import{_ as t}from"./Search.vue_vue_type_script_setup_true_lang-ccf0603c.js";import{_ as a}from"./Dialog.vue_vue_type_style_index_0_lang-1f82cced.js";import{d as l,r as o,q as s,e as r,F as i,a as n,o as m,c as u,w as p,f as d,A as c,t as f,L as _,i as v,Q as g,K as j,k as y}from"./index-0f2f4131.js";import{E as b}from"./el-button-2439abc8.js";import{E as h}from"./el-tag-da1c3460.js";import{_ as D}from"./Table.vue_vue_type_script_lang-7214dc8a.js";import{g as x,a as w,d as S,s as k}from"./index-f05fa6ad.js";import{u as P}from"./useTable-6de26a90.js";import{_ as C}from"./Write.vue_vue_type_script_setup_true_lang-8654a205.js";import{_ as R}from"./Detail.vue_vue_type_script_setup_true_lang-55114121.js";import{u as z}from"./useCrudSchemas-20b8fa2c.js";import"./el-card-a4dbbdba.js";import"./el-popper-988e2eb3.js";import"./constants-d2900520.js";import"./Form-baf5d56a.js";import"./el-col-e573d83e.js";import"./el-input-67df89d4.js";import"./use-form-item-0c8a537a.js";import"./use-form-common-props-8f4d7aa8.js";import"./tsxHelper-0603e3f3.js";import"./el-select-6b72a57b.js";import"./index-6f0a8630.js";import"./debounce-f9e067c0.js";import"./el-input-number-4302e5fc.js";import"./el-divider-06c47061.js";import"./InputPassword-30095de5.js";import"./style.css_vue_type_style_index_0_src_true_lang-a2f9e27c.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-dbaeb234.js";import"./aria-ecee1d93.js";import"./index-537ccfe7.js";import"./useForm-215219a6.js";import"./useIcon-bb7e183b.js";import"./el-overlay-85ac7b9c.js";import"./vnode-57aa8841.js";import"./refs-a293ed11.js";import"./el-pagination-4c9d35b5.js";import"./el-image-viewer-f4dbaec7.js";import"./el-dropdown-item-2b377c1f.js";import"./dropdown-552f1355.js";import"./index-090de5ab.js";import"./el-message-box-7e295404.js";import"./useValidator-a1dbd3fd.js";import"./Descriptions-59098111.js";import"./tree-b59d36bb.js";const T={class:"mb-10px"};function A(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const E=l({__name:"Department",setup(l){const j=o([]),{tableRegister:E,tableState:I,tableMethods:L}=P({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=I,a=await w({pageIndex:n(e),pageSize:n(t),...n(U)});return{list:a.data.list,total:a.data.total}},fetchDelApi:async()=>!!(await S(n(j)))}),{loading:N,dataList:V,total:F,currentPage:H,pageSize:Y}=I,{getList:K,getElTableExpose:M,delList:O}=L,U=o({}),W=e=>{U.value=e,K()},{t:Q}=y(),q=s([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:Q("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"id",label:Q("userDemo.departmentName"),table:{slots:{default:e=>r(i,null,[e.row.departmentName])}},form:{component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"departmentName"}},optionApi:async()=>(await x()).data.list},detail:{slots:{default:e=>r(i,null,[e.departmentName])}}},{field:"status",label:Q("userDemo.status"),search:{hidden:!0},table:{slots:{default:e=>{const t=e.row.status;return r(i,null,[r(h,{type:0===t?"danger":"success"},{default:()=>[Q(1===t?"userDemo.enable":"userDemo.disable")]})])}}},form:{component:"Select",componentProps:{options:[{value:0,label:Q("userDemo.disable")},{value:1,label:Q("userDemo.enable")}]}},detail:{slots:{default:e=>r(i,null,[r(h,{type:0===e.status?"danger":"success"},{default:()=>[1===e.status?Q("userDemo.enable"):Q("userDemo.disable")]})])}}},{field:"createTime",label:Q("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"remark",label:Q("userDemo.remark"),search:{hidden:!0},form:{component:"Input",componentProps:{type:"textarea",rows:5},colProps:{span:24}},detail:{slots:{default:e=>r(i,null,[e.remark])}}},{field:"action",width:"260px",label:Q("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let t,a,l;return r(i,null,[r(b,{type:"primary",onClick:()=>ae(e.row,"edit")},A(t=Q("exampleDemo.edit"))?t:{default:()=>[t]}),r(b,{type:"success",onClick:()=>ae(e.row,"detail")},A(a=Q("exampleDemo.detail"))?a:{default:()=>[a]}),r(b,{type:"danger",onClick:()=>te(e.row)},A(l=Q("exampleDemo.del"))?l:{default:()=>[l]})])}}}}]),{allSchemas:G}=z(q),J=o(!1),B=o(""),X=o(null),Z=o(""),$=()=>{B.value=Q("exampleDemo.add"),X.value=null,J.value=!0,Z.value=""},ee=o(!1),te=async e=>{const t=await M();j.value=e?[e.id]:(null==t?void 0:t.getSelectionRows().map((e=>e.id)))||[],ee.value=!0,await O(n(j).length).finally((()=>{ee.value=!1}))},ae=(e,t)=>{B.value=Q("edit"===t?"exampleDemo.edit":"exampleDemo.detail"),Z.value=t,X.value=e,J.value=!0},le=o(),oe=o(!1),se=async()=>{const e=n(le),t=await(null==e?void 0:e.submit());if(t){oe.value=!0;await k(t).catch((()=>{})).finally((()=>{oe.value=!1}))&&(J.value=!1,H.value=1,K())}};return(l,o)=>(m(),u(i,null,[r(n(e),null,{default:p((()=>[r(n(t),{schema:n(G).searchSchema,onSearch:W,onReset:W},null,8,["schema"]),d("div",T,[r(n(b),{type:"primary",onClick:$},{default:p((()=>[c(f(n(Q)("exampleDemo.add")),1)])),_:1}),r(n(b),{loading:ee.value,type:"danger",onClick:o[0]||(o[0]=e=>te(null))},{default:p((()=>[c(f(n(Q)("exampleDemo.del")),1)])),_:1},8,["loading"])]),r(n(D),{pageSize:n(Y),"onUpdate:pageSize":o[1]||(o[1]=e=>_(Y)?Y.value=e:null),currentPage:n(H),"onUpdate:currentPage":o[2]||(o[2]=e=>_(H)?H.value=e:null),columns:n(G).tableColumns,data:n(V),loading:n(N),pagination:{total:n(F)},onRegister:n(E)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),r(n(a),{modelValue:J.value,"onUpdate:modelValue":o[4]||(o[4]=e=>J.value=e),title:B.value},{footer:p((()=>["detail"!==Z.value?(m(),v(n(b),{key:0,type:"primary",loading:oe.value,onClick:se},{default:p((()=>[c(f(n(Q)("exampleDemo.save")),1)])),_:1},8,["loading"])):g("",!0),r(n(b),{onClick:o[3]||(o[3]=e=>J.value=!1)},{default:p((()=>[c(f(n(Q)("dialogDemo.close")),1)])),_:1})])),default:p((()=>["detail"!==Z.value?(m(),v(C,{key:0,ref_key:"writeRef",ref:le,"form-schema":n(G).formSchema,"current-row":X.value},null,8,["form-schema","current-row"])):g("",!0),"detail"===Z.value?(m(),v(R,{key:1,"detail-schema":n(G).detailSchema,"current-row":X.value},null,8,["detail-schema","current-row"])):g("",!0)])),_:1},8,["modelValue","title"])],64))}});export{E as default};
