import{ba as e,x as a,a4 as t,b$ as o,r as l,U as n,M as s,by as r,ak as i,V as u,b0 as p,a2 as d,bo as c,a3 as f,aj as v,d as m,aR as y,al as x,X as b,bv as g,c0 as h,c1 as w,a7 as S,N as k,aK as z,D as C,bi as I,ao as $,ap as F,o as E,c as P,Q as B,F as V,n as j,a as M,Z as R,f as _,i as N,w as A,aw as H,H as T,P as O,e as K,a$ as W,aV as L,aP as D,t as Q,a8 as U,$ as Z,aQ as X,a1 as Y}from"./index-dd501c4d.js";import{u as q,a as G}from"./use-form-item-daf07b5d.js";import{u as J,a as ee}from"./use-form-common-props-a09ad7cf.js";import{i as ae}from"./el-popper-15af447a.js";const te=()=>e&&/firefox/i.test(window.navigator.userAgent),oe="update:modelValue",le="change",ne="input",se=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),re=["class","style"],ie=/^on[A-Z]/,ue=(e={})=>{const{excludeListeners:l=!1,excludeKeys:n}=e,s=a((()=>((null==n?void 0:n.value)||[]).concat(re))),r=t();return a(r?()=>{var e;return o(Object.entries(null==(e=r.proxy)?void 0:e.$attrs).filter((([e])=>!(s.value.includes(e)||l&&ie.test(e)))))}:()=>({}))};let pe;const de=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${te()?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,ce=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function fe(e,a=1,t){var o;pe||(pe=document.createElement("textarea"),document.body.appendChild(pe));const{paddingSize:l,borderSize:n,boxSizing:s,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),l=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:ce.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:l,boxSizing:t}}(e);pe.setAttribute("style",`${r};${de}`),pe.value=e.value||e.placeholder||"";let u=pe.scrollHeight;const p={};"border-box"===s?u+=n:"content-box"===s&&(u-=l),pe.value="";const d=pe.scrollHeight-l;if(i(a)){let e=d*a;"border-box"===s&&(e=e+l+n),u=Math.max(e,u),p.minHeight=`${e}px`}if(i(t)){let e=d*t;"border-box"===s&&(e=e+l+n),u=Math.min(e,u)}return p.height=`${u}px`,null==(o=pe.parentNode)||o.removeChild(pe),pe=void 0,p}const ve=u({id:{type:String,default:void 0},size:p,disabled:Boolean,modelValue:{type:d([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:d([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:c},prefixIcon:{type:c},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:d([Object,Array,String]),default:()=>f({})},autofocus:{type:Boolean,default:!1}}),me={[oe]:e=>v(e),input:e=>v(e),change:e=>v(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ye=["role"],xe=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],be=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],ge=m({name:"ElInput",inheritAttrs:!1});const he=Y(Z(m({...ge,props:ve,emits:me,setup(o,{expose:i,emit:u}){const p=o,d=y(),c=x(),f=a((()=>{const e={};return"combobox"===p.containerRole&&(e["aria-haspopup"]=d["aria-haspopup"],e["aria-owns"]=d["aria-owns"],e["aria-expanded"]=d["aria-expanded"]),e})),v=a((()=>["textarea"===p.type?pe.b():ie.b(),ie.m(ne.value),ie.is("disabled",re.value),ie.is("exceed",Ae.value),{[ie.b("group")]:c.prepend||c.append,[ie.bm("group","append")]:c.append,[ie.bm("group","prepend")]:c.prepend,[ie.m("prefix")]:c.prefix||p.prefixIcon,[ie.m("suffix")]:c.suffix||p.suffixIcon||p.clearable||p.showPassword,[ie.bm("suffix","password-clear")]:Me.value&&Re.value},d.class])),m=a((()=>[ie.e("wrapper"),ie.is("focus",ze.value)])),Z=ue({excludeKeys:a((()=>Object.keys(f.value)))}),{form:Y,formItem:te}=q(),{inputId:le}=G(p,{formItemContext:te}),ne=J(),re=ee(),ie=b("input"),pe=b("textarea"),de=n(),ce=n(),ve=l(!1),me=l(!1),ge=l(!1),he=l(),we=n(p.inputStyle),Se=a((()=>de.value||ce.value)),{wrapperRef:ke,isFocused:ze,handleFocus:Ce,handleBlur:Ie}=function(e,{afterFocus:a,afterBlur:o}={}){const i=t(),{emit:u}=i,p=n(),d=l(!1);return s(p,(e=>{e&&e.setAttribute("tabindex","-1")})),r(p,"click",(()=>{var a;null==(a=e.value)||a.focus()})),{wrapperRef:p,isFocused:d,handleFocus:e=>{d.value||(d.value=!0,u("focus",e),null==a||a())},handleBlur:e=>{var a;e.relatedTarget&&(null==(a=p.value)?void 0:a.contains(e.relatedTarget))||(d.value=!1,u("blur",e),null==o||o())}}}(Se,{afterBlur(){var e;p.validateEvent&&(null==(e=null==te?void 0:te.validate)||e.call(te,"blur").catch((e=>z())))}}),$e=a((()=>{var e;return null!=(e=null==Y?void 0:Y.statusIcon)&&e})),Fe=a((()=>(null==te?void 0:te.validateState)||"")),Ee=a((()=>Fe.value&&g[Fe.value])),Pe=a((()=>ge.value?h:w)),Be=a((()=>[d.style,p.inputStyle])),Ve=a((()=>[p.inputStyle,we.value,{resize:p.resize}])),je=a((()=>ae(p.modelValue)?"":String(p.modelValue))),Me=a((()=>p.clearable&&!re.value&&!p.readonly&&!!je.value&&(ze.value||ve.value))),Re=a((()=>p.showPassword&&!re.value&&!p.readonly&&!!je.value&&(!!je.value||ze.value))),_e=a((()=>p.showWordLimit&&!!Z.value.maxlength&&("text"===p.type||"textarea"===p.type)&&!re.value&&!p.readonly&&!p.showPassword)),Ne=a((()=>je.value.length)),Ae=a((()=>!!_e.value&&Ne.value>Number(Z.value.maxlength))),He=a((()=>!!c.suffix||!!p.suffixIcon||Me.value||p.showPassword||_e.value||!!Fe.value&&$e.value)),[Te,Oe]=function(e){const a=l();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:l}=e.value;if(null==t||null==o)return;const n=l.slice(0,Math.max(0,t)),s=l.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:l,beforeTxt:n,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:l,selectionStart:n}=a.value;if(null==o||null==l||null==n)return;let s=t.length;if(t.endsWith(l))s=t.length-l.length;else if(t.startsWith(o))s=o.length;else{const e=o[n-1],a=t.indexOf(e,n-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(de);S(ce,(e=>{if(We(),!_e.value||"both"!==p.resize)return;const a=e[0],{width:t}=a.contentRect;he.value={right:`calc(100% - ${t+15+6}px)`}}));const Ke=()=>{const{type:a,autosize:t}=p;if(e&&"textarea"===a&&ce.value)if(t){const e=X(t)?t.minRows:void 0,a=X(t)?t.maxRows:void 0,o=fe(ce.value,e,a);we.value={overflowY:"hidden",...o},k((()=>{ce.value.offsetHeight,we.value=o}))}else we.value={minHeight:fe(ce.value).minHeight}},We=(e=>{let a=!1;return()=>{var t;if(a||!p.autosize)return;null===(null==(t=ce.value)?void 0:t.offsetParent)||(e(),a=!0)}})(Ke),Le=()=>{const e=Se.value,a=p.formatter?p.formatter(je.value):je.value;e&&e.value!==a&&(e.value=a)},De=async e=>{Te();let{value:a}=e.target;p.formatter&&(a=p.parser?p.parser(a):a),me.value||(a!==je.value?(u(oe,a),u("input",a),await k(),Le(),Oe()):Le())},Qe=e=>{u("change",e.target.value)},Ue=e=>{u("compositionstart",e),me.value=!0},Ze=e=>{var a;u("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,o=t[t.length-1]||"";me.value=!se(o)},Xe=e=>{u("compositionend",e),me.value&&(me.value=!1,De(e))},Ye=()=>{ge.value=!ge.value,qe()},qe=async()=>{var e;await k(),null==(e=Se.value)||e.focus()},Ge=e=>{ve.value=!1,u("mouseleave",e)},Je=e=>{ve.value=!0,u("mouseenter",e)},ea=e=>{u("keydown",e)},aa=()=>{u(oe,""),u("change",""),u("clear"),u("input","")};return s((()=>p.modelValue),(()=>{var e;k((()=>Ke())),p.validateEvent&&(null==(e=null==te?void 0:te.validate)||e.call(te,"change").catch((e=>z())))})),s(je,(()=>Le())),s((()=>p.type),(async()=>{await k(),Le(),Ke()})),C((()=>{!p.formatter&&p.parser,Le(),k(Ke)})),i({input:de,textarea:ce,ref:Se,textareaStyle:Ve,autosize:I(p,"autosize"),focus:qe,blur:()=>{var e;return null==(e=Se.value)?void 0:e.blur()},select:()=>{var e;null==(e=Se.value)||e.select()},clear:aa,resizeTextarea:Ke}),(e,a)=>$((E(),P("div",O(M(f),{class:M(v),style:M(Be),role:e.containerRole,onMouseenter:Je,onMouseleave:Ge}),[B(" input "),"textarea"!==e.type?(E(),P(V,{key:0},[B(" prepend slot "),e.$slots.prepend?(E(),P("div",{key:0,class:j(M(ie).be("group","prepend"))},[R(e.$slots,"prepend")],2)):B("v-if",!0),_("div",{ref_key:"wrapperRef",ref:ke,class:j(M(m))},[B(" prefix slot "),e.$slots.prefix||e.prefixIcon?(E(),P("span",{key:0,class:j(M(ie).e("prefix"))},[_("span",{class:j(M(ie).e("prefix-inner"))},[R(e.$slots,"prefix"),e.prefixIcon?(E(),N(M(T),{key:0,class:j(M(ie).e("icon"))},{default:A((()=>[(E(),N(H(e.prefixIcon)))])),_:1},8,["class"])):B("v-if",!0)],2)],2)):B("v-if",!0),_("input",O({id:M(le),ref_key:"input",ref:de,class:M(ie).e("inner")},M(Z),{type:e.showPassword?ge.value?"text":"password":e.type,disabled:M(re),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:p.form,autofocus:p.autofocus,onCompositionstart:Ue,onCompositionupdate:Ze,onCompositionend:Xe,onInput:De,onFocus:a[0]||(a[0]=(...e)=>M(Ce)&&M(Ce)(...e)),onBlur:a[1]||(a[1]=(...e)=>M(Ie)&&M(Ie)(...e)),onChange:Qe,onKeydown:ea}),null,16,xe),B(" suffix slot "),M(He)?(E(),P("span",{key:1,class:j(M(ie).e("suffix"))},[_("span",{class:j(M(ie).e("suffix-inner"))},[M(Me)&&M(Re)&&M(_e)?B("v-if",!0):(E(),P(V,{key:0},[R(e.$slots,"suffix"),e.suffixIcon?(E(),N(M(T),{key:0,class:j(M(ie).e("icon"))},{default:A((()=>[(E(),N(H(e.suffixIcon)))])),_:1},8,["class"])):B("v-if",!0)],64)),M(Me)?(E(),N(M(T),{key:1,class:j([M(ie).e("icon"),M(ie).e("clear")]),onMousedown:L(M(D),["prevent"]),onClick:aa},{default:A((()=>[K(M(W))])),_:1},8,["class","onMousedown"])):B("v-if",!0),M(Re)?(E(),N(M(T),{key:2,class:j([M(ie).e("icon"),M(ie).e("password")]),onClick:Ye},{default:A((()=>[(E(),N(H(M(Pe))))])),_:1},8,["class"])):B("v-if",!0),M(_e)?(E(),P("span",{key:3,class:j(M(ie).e("count"))},[_("span",{class:j(M(ie).e("count-inner"))},Q(M(Ne))+" / "+Q(M(Z).maxlength),3)],2)):B("v-if",!0),M(Fe)&&M(Ee)&&M($e)?(E(),N(M(T),{key:4,class:j([M(ie).e("icon"),M(ie).e("validateIcon"),M(ie).is("loading","validating"===M(Fe))])},{default:A((()=>[(E(),N(H(M(Ee))))])),_:1},8,["class"])):B("v-if",!0)],2)],2)):B("v-if",!0)],2),B(" append slot "),e.$slots.append?(E(),P("div",{key:1,class:j(M(ie).be("group","append"))},[R(e.$slots,"append")],2)):B("v-if",!0)],64)):(E(),P(V,{key:1},[B(" textarea "),_("textarea",O({id:M(le),ref_key:"textarea",ref:ce,class:M(pe).e("inner")},M(Z),{tabindex:e.tabindex,disabled:M(re),readonly:e.readonly,autocomplete:e.autocomplete,style:M(Ve),"aria-label":e.label,placeholder:e.placeholder,form:p.form,autofocus:p.autofocus,onCompositionstart:Ue,onCompositionupdate:Ze,onCompositionend:Xe,onInput:De,onFocus:a[2]||(a[2]=(...e)=>M(Ce)&&M(Ce)(...e)),onBlur:a[3]||(a[3]=(...e)=>M(Ie)&&M(Ie)(...e)),onChange:Qe,onKeydown:ea}),null,16,be),M(_e)?(E(),P("span",{key:0,style:U(he.value),class:j(M(ie).e("count"))},Q(M(Ne))+" / "+Q(M(Z).maxlength),7)):B("v-if",!0)],64))],16,ye)),[[F,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{le as C,he as E,ne as I,oe as U,te as a,se as i,ue as u};
