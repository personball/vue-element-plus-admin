import{r as a,a as e,N as t}from"./index-dd501c4d.js";const s=()=>{const s=a(),n=a(),o=async()=>{await t();const a=e(s);return a};return{formRegister:(a,e)=>{s.value=a,n.value=e},formMethods:{setProps:async(a={})=>{const e=await o();null==e||e.setProps(a),a.model&&(null==e||e.setValues(a.model))},setValues:async a=>{const e=await o();null==e||e.setValues(a)},setSchema:async a=>{const e=await o();null==e||e.setSchema(a)},addSchema:async(a,e)=>{const t=await o();null==t||t.addSchema(a,e)},delSchema:async a=>{const e=await o();null==e||e.delSchema(a)},getFormData:async()=>{const a=await o();return null==a?void 0:a.formModel},getComponentExpose:async a=>{const e=await o();return null==e?void 0:e.getComponentExpose(a)},getFormItemExpose:async a=>{const e=await o();return null==e?void 0:e.getFormItemExpose(a)},getElFormExpose:async()=>(await o(),e(n)),getFormExpose:async()=>(await o(),e(s))}}};export{s as u};
