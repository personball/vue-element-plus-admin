import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-2ff20b46.js";import{d as t,J as a,e as o,r as l,o as s,i,w as r,a as m,K as p,k as n}from"./index-dd501c4d.js";import{_ as d}from"./Table.vue_vue_type_script_lang-64e305c1.js";import{g as c}from"./index-aeb318a4.js";import{E as b}from"./el-tag-bb891d1c.js";import{E as u}from"./el-button-7de8ba58.js";import"./el-card-94b5b26d.js";import"./el-popper-15af447a.js";import"./constants-6c13ff2f.js";import"./tsxHelper-2651a5da.js";import"./el-input-2f5701dc.js";import"./use-form-item-daf07b5d.js";import"./use-form-common-props-a09ad7cf.js";import"./el-select-52cd7507.js";import"./index-be10301b.js";import"./debounce-caff1234.js";import"./el-pagination-e1525dd1.js";import"./el-image-viewer-cd9b10de.js";import"./el-dropdown-item-ea8006f6.js";import"./dropdown-f79622c1.js";import"./refs-1216ce2d.js";import"./index-620b62cf.js";const f=t({__name:"DefaultTable",setup(t){const{t:f}=n(),j=[{field:"title",label:f("tableDemo.title")},{field:"author",label:f("tableDemo.author")},{field:"display_time",label:f("tableDemo.displayTime"),sortable:!0},{field:"importance",label:f("tableDemo.importance"),formatter:(e,t,o)=>a(b,{type:1===o?"success":2===o?"warning":"danger"},(()=>f(1===o?"tableDemo.important":2===o?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:f("tableDemo.pageviews")},{field:"action",label:f("tableDemo.action"),slots:{default:e=>{let t;return o(u,{type:"primary",onClick:()=>y(e)},"function"==typeof(a=t=f("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!p(a)?t:{default:()=>[t]});var a}}}],g=l(!0);let _=l([]);(async e=>{const t=await c(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(_.value=t.data.list)})();const y=e=>{};return(t,a)=>(s(),i(m(e),{title:m(f)("tableDemo.table"),message:m(f)("tableDemo.tableDes")},{default:r((()=>[o(m(d),{columns:j,data:m(_),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{f as default};
