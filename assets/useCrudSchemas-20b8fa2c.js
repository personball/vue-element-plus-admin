import{t as e,f as l,e as n}from"./tree-b59d36bb.js";import{q as o}from"./index-0f2f4131.js";const d=e=>{const l=o({searchSchema:[],tableColumns:[],formSchema:[],detailSchema:[]}),n=t(e);l.searchSchema=n||[];const d=i(e);l.tableColumns=d||[];const c=a(e);l.formSchema=c;const s=r(e);return l.detailSchema=s,{allSchemas:l}},t=e=>{var l,n,o;const d=[],t=e.length;for(let i=0;i<t;i++){const t=e[i];if(!(null==(l=null==t?void 0:t.search)?void 0:l.hidden)){const e={component:(null==(n=null==t?void 0:t.search)?void 0:n.component)||"Input",...t.search,field:t.field,label:(null==(o=t.search)?void 0:o.label)||t.label};delete e.hidden,d.push(e)}}return d},i=n=>{const o=e(n,{conversion:e=>{var l;if(!(null==(l=null==e?void 0:e.table)?void 0:l.hidden))return{...e,...e.table}}});return l(o,(e=>(void 0===e.children&&delete e.children,!!e.field)))},a=e=>{var l,n,o;const d=[],t=e.length;for(let i=0;i<t;i++){const t=e[i];if(!(null==(l=null==t?void 0:t.form)?void 0:l.hidden)){const e={component:(null==(n=null==t?void 0:t.form)?void 0:n.component)||"Input",...t.form,field:t.field,label:(null==(o=t.form)?void 0:o.label)||t.label};delete e.hidden,d.push(e)}}return d},r=e=>{const l=[];return n(e,(e=>{var n,o;if(!(null==(n=null==e?void 0:e.detail)?void 0:n.hidden)){const n={...e.detail,field:e.field,label:(null==(o=e.detail)?void 0:o.label)||e.label};delete n.hidden,l.push(n)}})),l};export{d as u};
