import{V as e,bo as o,d as l,b1 as a,a5 as s,x as t,o as n,c as r,f as i,Z as c,n as u,a as d,t as f,e as p,w as m,i as v,aw as y,H as g,Q as b,a8 as h,$ as C,d8 as x,a2 as k,W as $,a4 as A,ca as w,r as F,bN as I,Y as R,M as B,N as D,D as _,d9 as S,da as L,ba as E,al as M,X as O,ag as j,ao as H,P as z,aW as N,ap as P,h as T,cb as V,a1 as q,O as U,cD as W,z as Z,aR as K,A as Q,E as X}from"./index-dd501c4d.js";import{u as Y,a as G,E as J,b as ee}from"./el-overlay-7e710004.js";import{F as oe,d as le}from"./el-popper-15af447a.js";import{c as ae}from"./refs-1216ce2d.js";import{U as se}from"./el-input-2f5701dc.js";import{u as te}from"./constants-6c13ff2f.js";import{u as ne}from"./index-be10301b.js";const re=Symbol("dialogInjectionKey"),ie=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ce=["aria-level"],ue=["aria-label"],de=["id"],fe=l({name:"ElDialogContent"});var pe=C(l({...fe,props:ie,emits:{close:()=>!0},setup(e){const o=e,{t:l}=a(),{Close:C}=x,{dialogRef:k,headerRef:$,bodyId:A,ns:w,style:F}=s(re),{focusTrapRef:I}=s(oe),R=t((()=>[w.b(),w.is("fullscreen",o.fullscreen),w.is("draggable",o.draggable),w.is("align-center",o.alignCenter),{[w.m("center")]:o.center},o.customClass])),B=ae(I,k),D=t((()=>o.draggable));return Y(k,$,D),(e,o)=>(n(),r("div",{ref:d(B),class:u(d(R)),style:h(d(F)),tabindex:"-1"},[i("header",{ref_key:"headerRef",ref:$,class:u(d(w).e("header"))},[c(e.$slots,"header",{},(()=>[i("span",{role:"heading","aria-level":e.ariaLevel,class:u(d(w).e("title"))},f(e.title),11,ce)])),e.showClose?(n(),r("button",{key:0,"aria-label":d(l)("el.dialog.close"),class:u(d(w).e("headerbtn")),type:"button",onClick:o[0]||(o[0]=o=>e.$emit("close"))},[p(d(g),{class:u(d(w).e("close"))},{default:m((()=>[(n(),v(y(e.closeIcon||d(C))))])),_:1},8,["class"])],10,ue)):b("v-if",!0)],2),i("div",{id:d(A),class:u(d(w).e("body"))},[c(e.$slots,"default")],10,de),e.$slots.footer?(n(),r("footer",{key:0,class:u(d(w).e("footer"))},[c(e.$slots,"footer")],2)):b("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const me=e({...ie,appendToBody:Boolean,beforeClose:{type:k(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),ve={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[se]:e=>$(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ye=(e,o)=>{const l=A().emit,{nextZIndex:a}=w();let s="";const n=te(),r=te(),i=F(!1),c=F(!1),u=F(!1),d=F(e.zIndex||a());let f,p;const m=I("namespace",S),v=t((()=>{const o={},l=`--${m.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=R(e.width))),o})),y=t((()=>e.alignCenter?{display:"flex"}:{}));function g(){null==p||p(),null==f||f(),e.openDelay&&e.openDelay>0?({stop:f}=L((()=>C()),e.openDelay)):C()}function b(){null==f||f(),null==p||p(),e.closeDelay&&e.closeDelay>0?({stop:p}=L((()=>x()),e.closeDelay)):x()}function h(){e.beforeClose?e.beforeClose((function(e){e||(c.value=!0,i.value=!1)})):b()}function C(){E&&(i.value=!0)}function x(){i.value=!1}return e.lockScroll&&G(i),B((()=>e.modelValue),(s=>{s?(c.value=!1,g(),u.value=!0,d.value=e.zIndex?d.value++:a(),D((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):i.value&&b()})),B((()=>e.fullscreen),(e=>{o.value&&(e?(s=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=s)})),_((()=>{e.modelValue&&(i.value=!0,u.value=!0,g())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(se,!1),e.destroyOnClose&&(u.value=!1)},beforeLeave:function(){l("close")},handleClose:h,onModalClick:function(){e.closeOnClickModal&&h()},close:b,doClose:x,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&h()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:n,bodyId:r,closed:c,style:v,overlayDialogStyle:y,rendered:u,visible:i,zIndex:d}},ge=["aria-label","aria-labelledby","aria-describedby"],be=l({name:"ElDialog",inheritAttrs:!1});const he=q(C(l({...be,props:me,emits:ve,setup(e,{expose:o}){const l=e,a=M();ne({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},t((()=>!!a.title))),ne({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},t((()=>!!l.customClass)));const s=O("dialog"),r=F(),f=F(),y=F(),{visible:g,titleId:C,bodyId:x,style:k,overlayDialogStyle:$,rendered:A,zIndex:w,afterEnter:I,afterLeave:R,beforeLeave:B,handleClose:D,onModalClick:_,onOpenAutoFocus:S,onCloseAutoFocus:L,onCloseRequested:E,onFocusoutPrevented:q}=ye(l,r);j(re,{dialogRef:r,headerRef:f,bodyId:x,ns:s,rendered:A,style:k});const U=ee(_),W=t((()=>l.draggable&&!l.fullscreen));return o({visible:g,dialogContentRef:y}),(e,o)=>(n(),v(V,{to:"body",disabled:!e.appendToBody},[p(T,{name:"dialog-fade",onAfterEnter:d(I),onAfterLeave:d(R),onBeforeLeave:d(B),persisted:""},{default:m((()=>[H(p(d(J),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":d(w)},{default:m((()=>[i("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:d(C),"aria-describedby":d(x),class:u(`${d(s).namespace.value}-overlay-dialog`),style:h(d($)),onClick:o[0]||(o[0]=(...e)=>d(U).onClick&&d(U).onClick(...e)),onMousedown:o[1]||(o[1]=(...e)=>d(U).onMousedown&&d(U).onMousedown(...e)),onMouseup:o[2]||(o[2]=(...e)=>d(U).onMouseup&&d(U).onMouseup(...e))},[p(d(le),{loop:"",trapped:d(g),"focus-start-el":"container",onFocusAfterTrapped:d(S),onFocusAfterReleased:d(L),onFocusoutPrevented:d(q),onReleaseRequested:d(E)},{default:m((()=>[d(A)?(n(),v(pe,z({key:0,ref_key:"dialogContentRef",ref:y},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:d(W),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:d(D)}),N({header:m((()=>[e.$slots.title?c(e.$slots,"title",{key:1}):c(e.$slots,"header",{key:0,close:d(D),titleId:d(C),titleClass:d(s).e("title")})])),default:m((()=>[c(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:m((()=>[c(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):b("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,ge)])),_:3},8,["mask","overlay-class","z-index"]),[[P,d(g)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]])),Ce={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},xe={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},ke=l({__name:"Dialog",props:{modelValue:U.bool.def(!1),title:U.string.def("Dialog"),fullscreen:U.bool.def(!0),maxHeight:U.oneOfType([String,Number]).def("400px")},setup(e){const o=e,l=M(),a=t((()=>{const e=["fullscreen","title","maxHeight"],l={...K(),...o};for(const o in l)-1!==e.indexOf(o)&&delete l[o];return l})),s=F(!1),r=()=>{s.value=!d(s)},u=F(W(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight);B((()=>s.value),(async e=>{if(await D(),e){const e=document.documentElement.offsetHeight;u.value=e-55-60-(l.footer?63:0)+"px"}else u.value=W(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight}),{immediate:!0});const y=t((()=>({height:d(u)})));return(o,t)=>{const u=Z("Icon");return n(),v(d(he),z(a.value,{fullscreen:s.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),N({header:m((({close:l})=>[i("div",Ce,[c(o.$slots,"title",{},(()=>[Q(f(e.title),1)])),i("div",xe,[e.fullscreen?(n(),v(u,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:s.value?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:r},null,8,["icon"])):b("",!0),p(u,{class:"cursor-pointer is-hover !h-54px",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:l},null,8,["onClick"])])])])),default:m((()=>[p(d(X),{style:h(y.value)},{default:m((()=>[c(o.$slots,"default")])),_:3},8,["style"])])),_:2},[d(l).footer?{name:"footer",fn:m((()=>[c(o.$slots,"footer")])),key:"0"}:void 0]),1040,["fullscreen"])}}});export{ke as _,ve as a,me as d,ye as u};
