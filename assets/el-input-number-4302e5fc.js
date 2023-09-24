import{aM as e,V as a,b0 as t,ak as n,d as l,b1 as r,X as u,r as s,q as o,x as i,ai as m,M as d,D as c,ab as p,o as b,c as v,ao as f,a as N,n as y,aU as h,e as I,w as V,i as g,b6 as x,ch as S,H as w,Q as E,b5 as k,ah as A,aV as F,$ as K,a6 as M,aj as _,aK as j,a1 as B}from"./index-0f2f4131.js";import{C as T,I as O,U as C,E as $}from"./el-input-67df89d4.js";import{i as z}from"./el-popper-988e2eb3.js";import{u as P}from"./use-form-item-0c8a537a.js";import{u as D,a as L}from"./use-form-common-props-8f4d7aa8.js";const U=100,Y=600,q={beforeMount(a,t){const n=t.value,{interval:l=U,delay:r=Y}=e(n)?{}:n;let u,s;const o=()=>e(n)?n():n.handler(),i=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(i(),o(),document.addEventListener("mouseup",(()=>i()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{o()}),l)}),r))}))}},G=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:t,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||n(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),H={[T]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[O]:e=>n(e)||z(e),[C]:e=>n(e)||z(e)},Q=["aria-label","onKeydown"],W=["aria-label","onKeydown"],X=l({name:"ElInputNumber"});const J=B(K(l({...X,props:G,emits:H,setup(e,{expose:a,emit:t}){const l=e,{t:K}=r(),B=u("input-number"),U=s(),Y=o({currentValue:l.modelValue,userInput:null}),{formItem:G}=P(),H=i((()=>n(l.modelValue)&&l.modelValue<=l.min)),X=i((()=>n(l.modelValue)&&l.modelValue>=l.max)),J=i((()=>{const e=ne(l.step);return m(l.precision)?Math.max(ne(l.modelValue),e):(l.precision,l.precision)})),R=i((()=>l.controls&&"right"===l.controlsPosition)),Z=D(),ee=L(),ae=i((()=>{if(null!==Y.userInput)return Y.userInput;let e=Y.currentValue;if(z(e))return"";if(n(e)){if(Number.isNaN(e))return"";m(l.precision)||(e=e.toFixed(l.precision))}return e})),te=(e,a)=>{if(m(a)&&(a=J.value),0===a)return Math.round(e);let t=String(e);const n=t.indexOf(".");if(-1===n)return e;if(!t.replace(".","").split("")[n+a])return e;const l=t.length;return"5"===t.charAt(l-1)&&(t=`${t.slice(0,Math.max(0,l-1))}6`),Number.parseFloat(Number(t).toFixed(a))},ne=e=>{if(z(e))return 0;const a=e.toString(),t=a.indexOf(".");let n=0;return-1!==t&&(n=a.length-t-1),n},le=(e,a=1)=>n(e)?te(e+l.step*a):Y.currentValue,re=()=>{if(l.readonly||ee.value||X.value)return;const e=Number(ae.value)||0,a=le(e);oe(a),t(O,Y.currentValue)},ue=()=>{if(l.readonly||ee.value||H.value)return;const e=Number(ae.value)||0,a=le(e,-1);oe(a),t(O,Y.currentValue)},se=(e,a)=>{const{max:n,min:r,step:u,precision:s,stepStrictly:o,valueOnClear:i}=l;n<r&&M("InputNumber","min should not be greater than max.");let d=Number(e);if(z(e)||Number.isNaN(d))return null;if(""===e){if(null===i)return null;d=_(i)?{min:r,max:n}[i]:i}return o&&(d=te(Math.round(d/u)*u,s)),m(s)||(d=te(d,s)),(d>n||d<r)&&(d=d>n?n:r,a&&t(C,d)),d},oe=(e,a=!0)=>{var n;const r=Y.currentValue,u=se(e);a?r!==u&&(Y.userInput=null,t(C,u),t(T,u,r),l.validateEvent&&(null==(n=null==G?void 0:G.validate)||n.call(G,"change").catch((e=>j()))),Y.currentValue=u):t(C,u)},ie=e=>{Y.userInput=e;const a=""===e?null:Number(e);t(O,a),oe(a,!1)},me=e=>{const a=""!==e?Number(e):"";(n(a)&&!Number.isNaN(a)||""===e)&&oe(a),Y.userInput=null},de=e=>{t("focus",e)},ce=e=>{var a;t("blur",e),l.validateEvent&&(null==(a=null==G?void 0:G.validate)||a.call(G,"blur").catch((e=>j())))};return d((()=>l.modelValue),(e=>{const a=se(Y.userInput),t=se(e,!0);n(a)||a&&a===t||(Y.currentValue=t,Y.userInput=null)}),{immediate:!0}),c((()=>{var e;const{min:a,max:r,modelValue:u}=l,s=null==(e=U.value)?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(r)?s.setAttribute("aria-valuemax",String(r)):s.removeAttribute("aria-valuemax"),Number.isFinite(a)?s.setAttribute("aria-valuemin",String(a)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",Y.currentValue||0===Y.currentValue?String(Y.currentValue):""),s.setAttribute("aria-disabled",String(ee.value)),!n(u)&&null!=u){let e=Number(u);Number.isNaN(e)&&(e=null),t(C,e)}})),p((()=>{var e,a;const t=null==(e=U.value)?void 0:e.input;null==t||t.setAttribute("aria-valuenow",`${null!=(a=Y.currentValue)?a:""}`)})),a({focus:()=>{var e,a;null==(a=null==(e=U.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=U.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(b(),v("div",{class:y([N(B).b(),N(B).m(N(Z)),N(B).is("disabled",N(ee)),N(B).is("without-controls",!e.controls),N(B).is("controls-right",N(R))]),onDragstart:a[1]||(a[1]=F((()=>{}),["prevent"]))},[e.controls?f((b(),v("span",{key:0,role:"button","aria-label":N(K)("el.inputNumber.decrease"),class:y([N(B).e("decrease"),N(B).is("disabled",N(H))]),onKeydown:h(ue,["enter"])},[I(N(w),null,{default:V((()=>[N(R)?(b(),g(N(x),{key:0})):(b(),g(N(S),{key:1}))])),_:1})],42,Q)),[[N(q),ue]]):E("v-if",!0),e.controls?f((b(),v("span",{key:1,role:"button","aria-label":N(K)("el.inputNumber.increase"),class:y([N(B).e("increase"),N(B).is("disabled",N(X))]),onKeydown:h(re,["enter"])},[I(N(w),null,{default:V((()=>[N(R)?(b(),g(N(k),{key:0})):(b(),g(N(A),{key:1}))])),_:1})],42,W)),[[N(q),re]]):E("v-if",!0),I(N($),{id:e.id,ref_key:"input",ref:U,type:"number",step:e.step,"model-value":N(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:N(ee),size:N(Z),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=F((()=>{}),["prevent"])),onKeydown:[h(F(re,["prevent"]),["up"]),h(F(ue,["prevent"]),["down"])],onBlur:ce,onFocus:de,onInput:ie,onChange:me},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{J as E,q as v};
