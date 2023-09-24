import{E as e}from"./el-button-2439abc8.js";import{c as o,E as n,O as t,w as l,F as r}from"./el-popper-988e2eb3.js";import{V as a,a2 as i,af as s,$ as d,d as u,r as c,a5 as p,x as f,ag as m,c2 as v,bi as g,a as b,M as w,by as h,Z as y,z as I,o as E,i as k,w as F,e as C,bw as R,bx as x,N as T,E as _,H as S,b6 as B,a4 as $,X as D,b1 as P,Y as M,as as K,c as L,aW as G,P as z,n as O,Q as A,f as H,aw as j,aV as N,F as U,a8 as V,a1 as W,aq as Y}from"./index-0f2f4131.js";import{c as J,E as q,d as Q,a as X,C as Z,b as ee,e as oe,f as ne,g as te,F as le,L as re}from"./dropdown-552f1355.js";import{u as ae}from"./constants-d2900520.js";import{u as ie}from"./use-form-common-props-8f4d7aa8.js";import{c as se}from"./tsxHelper-0603e3f3.js";import{c as de}from"./refs-a293ed11.js";const ue=a({style:{type:i([String,Array,Object])},currentTabId:{type:i(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:i(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:ce,ElCollectionItem:pe,COLLECTION_INJECTION_KEY:fe,COLLECTION_ITEM_INJECTION_KEY:me}=J("RovingFocusGroup"),ve=Symbol("elRovingFocusGroup"),ge=Symbol("elRovingFocusGroupItem"),be={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},we=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case s.right:return s.left;case s.left:return s.right;default:return e}})(e.key,n);if(!("vertical"===o&&[s.left,s.right].includes(t)||"horizontal"===o&&[s.up,s.down].includes(t)))return be[t]},he=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},ye="currentTabIdChange",Ie="rovingFocusGroup.entryFocus",Ee={bubbles:!1,cancelable:!0},ke=u({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:ue,emits:[ye,"entryFocus"],setup(e,{emit:n}){var t;const l=c(null!=(t=e.currentTabId||e.defaultCurrentTabId)?t:null),r=c(!1),a=c(!1),i=c(null),{getItems:s}=p(fe,void 0),d=f((()=>[{outline:"none"},e.style])),u=o((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{a.value=!0})),y=o((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!b(a),{target:n,currentTarget:t}=e;if(n===t&&o&&!b(r)){const e=new Event(Ie,Ee);if(null==t||t.dispatchEvent(e),!e.defaultPrevented){const e=s().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===b(l))),...e].filter(Boolean).map((e=>e.ref));he(o)}}a.value=!1})),I=o((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{r.value=!1}));m(ve,{currentTabbedId:v(l),loop:g(e,"loop"),tabIndex:f((()=>b(r)?-1:0)),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:d,orientation:g(e,"orientation"),dir:g(e,"dir"),onItemFocus:e=>{n(ye,e)},onItemShiftTab:()=>{r.value=!0},onBlur:I,onFocus:y,onMousedown:u}),w((()=>e.currentTabId),(e=>{l.value=null!=e?e:null})),h(i,Ie,((...e)=>{n("entryFocus",...e)}))}});var Fe=d(u({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:ce,ElRovingFocusGroupImpl:d(ke,[["render",function(e,o,n,t,l,r){return y(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,l,r){const a=I("el-roving-focus-group-impl"),i=I("el-focus-group-collection");return E(),k(i,null,{default:F((()=>[C(a,R(x(e.$attrs)),{default:F((()=>[y(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Ce=d(u({components:{ElRovingFocusCollectionItem:pe},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:n}){const{currentTabbedId:t,loop:l,onItemFocus:r,onItemShiftTab:a}=p(ve,void 0),{getItems:i}=p(fe,void 0),d=ae(),u=c(null),v=o((e=>{n("mousedown",e)}),(o=>{e.focusable?r(b(d)):o.preventDefault()})),g=o((e=>{n("focus",e)}),(()=>{r(b(d))})),w=o((e=>{n("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:t,currentTarget:r}=e;if(o===s.tab&&n)return void a();if(t!==r)return;const d=we(e);if(d){e.preventDefault();let o=i().filter((e=>e.focusable)).map((e=>e.ref));switch(d){case"last":o.reverse();break;case"prev":case"next":{"prev"===d&&o.reverse();const e=o.indexOf(r);o=l.value?(c=e+1,(u=o).map(((e,o)=>u[(o+c)%u.length]))):o.slice(e+1);break}}T((()=>{he(o)}))}var u,c})),h=f((()=>t.value===b(d)));return m(ge,{rovingFocusGroupItemRef:u,tabIndex:f((()=>b(h)?0:-1)),handleMousedown:v,handleFocus:g,handleKeydown:w}),{id:d,handleKeydown:w,handleFocus:g,handleMousedown:v}}}),[["render",function(e,o,n,t,l,r){const a=I("el-roving-focus-collection-item");return E(),k(a,{id:e.id,focusable:e.focusable,active:e.active},{default:F((()=>[y(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Re=Symbol("elDropdown"),{ButtonGroup:xe}=e;var Te=d(u({name:"ElDropdown",components:{ElButton:e,ElButtonGroup:xe,ElScrollbar:_,ElDropdownCollection:q,ElTooltip:n,ElRovingFocusGroup:Fe,ElOnlyChild:t,ElIcon:S,ArrowDown:B},props:Q,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=$(),t=D("dropdown"),{t:l}=P(),r=c(),a=c(),i=c(null),d=c(null),u=c(null),p=c(null),v=c(!1),h=[s.enter,s.space,s.down],y=f((()=>({maxHeight:M(e.maxHeight)}))),I=f((()=>[t.m(R.value)])),E=f((()=>se(e.trigger))),k=ae().value,F=f((()=>e.id||k));function C(){var e;null==(e=i.value)||e.onClose()}w([r,E],(([e,o],[n])=>{var t,l,r;(null==(t=null==n?void 0:n.$el)?void 0:t.removeEventListener)&&n.$el.removeEventListener("pointerenter",x),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",x),(null==(r=null==e?void 0:e.$el)?void 0:r.addEventListener)&&o.includes("hover")&&e.$el.addEventListener("pointerenter",x)}),{immediate:!0}),K((()=>{var e,o;(null==(o=null==(e=r.value)?void 0:e.$el)?void 0:o.removeEventListener)&&r.value.$el.removeEventListener("pointerenter",x)}));const R=ie();function x(){var e,o;null==(o=null==(e=r.value)?void 0:e.$el)||o.focus()}m(Re,{contentRef:d,role:f((()=>e.role)),triggerId:F,isUsingKeyboard:v,onItemEnter:function(){},onItemLeave:function(){const e=b(d);E.value.includes("hover")&&(null==e||e.focus()),p.value=null}}),m("elDropdown",{instance:n,dropdownSize:R,handleClick:function(){C()},commandHandler:function(...e){o("command",...e)},trigger:g(e,"trigger"),hideOnClick:g(e,"hideOnClick")});return{t:l,ns:t,scrollbar:u,wrapStyle:y,dropdownTriggerKls:I,dropdownSize:R,triggerId:F,triggerKeys:h,currentTabId:p,handleCurrentTabIdChange:function(e){p.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){v.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:C,handleOpen:function(){var e;null==(e=i.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&d.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=d.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:i,contentRef:d,triggeringElementRef:r,referenceElementRef:a}}}),[["render",function(e,o,n,t,l,r){var a;const i=I("el-dropdown-collection"),s=I("el-roving-focus-group"),d=I("el-scrollbar"),u=I("el-only-child"),c=I("el-tooltip"),p=I("el-button"),f=I("arrow-down"),m=I("el-icon"),v=I("el-button-group");return E(),L("div",{class:O([e.ns.b(),e.ns.is("disabled",e.disabled)])},[C(c,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(a=e.referenceElementRef)?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},G({content:F((()=>[C(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:F((()=>[C(s,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:F((()=>[C(i,null,{default:F((()=>[y(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:F((()=>[C(u,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:F((()=>[y(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(E(),k(v,{key:0},{default:F((()=>[C(p,z({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:F((()=>[y(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),C(p,z({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:F((()=>[C(m,{class:O(e.ns.e("icon"))},{default:F((()=>[C(f)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):A("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const _e=u({name:"DropdownItemImpl",components:{ElIcon:S},props:X,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n}){const t=D("dropdown"),{role:l}=p(Re,void 0),{collectionItemRef:r}=p(Z,void 0),{collectionItemRef:a}=p(me,void 0),{rovingFocusGroupItemRef:i,tabIndex:d,handleFocus:u,handleKeydown:c,handleMousedown:m}=p(ge,void 0),v=de(r,a,i),g=f((()=>"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button")),b=o((e=>{const{code:o}=e;if(o===s.enter||o===s.space)return e.preventDefault(),e.stopImmediatePropagation(),n("clickimpl",e),!0}),c);return{ns:t,itemRef:v,dataset:{[ee]:""},role:g,tabIndex:d,handleFocus:u,handleKeydown:b,handleMousedown:m}}}),Se=["aria-disabled","tabindex","role"];const Be=()=>{const e=p("elDropdown",{}),o=f((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var $e=d(u({name:"ElDropdownItem",components:{ElDropdownCollectionItem:oe,ElRovingFocusItem:Ce,ElDropdownItemImpl:d(_e,[["render",function(e,o,n,t,l,r){const a=I("el-icon");return E(),L(U,null,[e.divided?(E(),L("li",z({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):A("v-if",!0),H("li",z({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=N(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(E(),k(a,{key:0},{default:F((()=>[(E(),k(j(e.icon)))])),_:1})):A("v-if",!0),y(e.$slots,"default")],16,Se)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:X,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:t}){const{elDropdown:r}=Be(),a=$(),i=c(null),s=f((()=>{var e,o;return null!=(o=null==(e=b(i))?void 0:e.textContent)?o:""})),{onItemEnter:d,onItemLeave:u}=p(Re,void 0),m=o((e=>(n("pointermove",e),e.defaultPrevented)),l((o=>{if(e.disabled)return void u(o);const n=o.currentTarget;n===document.activeElement||n.contains(document.activeElement)||(d(o),o.defaultPrevented||null==n||n.focus())}))),v=o((e=>(n("pointerleave",e),e.defaultPrevented)),l((e=>{u(e)})));return{handleClick:o((o=>{if(!e.disabled)return n("click",o),"keydown"!==o.type&&o.defaultPrevented}),(o=>{var n,t,l;e.disabled?o.stopImmediatePropagation():((null==(n=null==r?void 0:r.hideOnClick)?void 0:n.value)&&(null==(t=r.handleClick)||t.call(r)),null==(l=r.commandHandler)||l.call(r,e.command,a,o))})),handlePointerMove:m,handlePointerLeave:v,textContent:s,propsAndAttrs:f((()=>({...e,...t})))}}}),[["render",function(e,o,n,t,l,r){var a;const i=I("el-dropdown-item-impl"),s=I("el-roving-focus-item"),d=I("el-dropdown-collection-item");return E(),k(d,{disabled:e.disabled,"text-value":null!=(a=e.textValue)?a:e.textContent},{default:F((()=>[C(s,{focusable:!e.disabled},{default:F((()=>[C(i,z(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:F((()=>[y(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const De=u({name:"ElDropdownMenu",props:ne,setup(e){const n=D("dropdown"),{_elDropdownSize:t}=Be(),l=t.value,{focusTrapRef:a,onKeydown:i}=p(r,void 0),{contentRef:d,role:u,triggerId:c}=p(Re,void 0),{collectionRef:m,getItems:v}=p(te,void 0),{rovingFocusGroupRef:g,rovingFocusGroupRootStyle:w,tabIndex:h,onBlur:y,onFocus:I,onMousedown:E}=p(ve,void 0),{collectionRef:k}=p(fe,void 0),F=f((()=>[n.b("menu"),n.bm("menu",null==l?void 0:l.value)])),C=de(d,m,a,g,k),R=o((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),s.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==b(d))return;if(!le.includes(n))return;const l=v().filter((e=>!e.disabled)).map((e=>e.ref));re.includes(n)&&l.reverse(),he(l)}));return{size:l,rovingFocusGroupRootStyle:w,tabIndex:h,dropdownKls:F,role:u,triggerId:c,dropdownListWrapperRef:C,handleKeydown:e=>{R(e),i(e)},onBlur:y,onFocus:I,onMousedown:E}}}),Pe=["role","aria-labelledby"];var Me=d(De,[["render",function(e,o,n,t,l,r){return E(),L("ul",{ref:e.dropdownListWrapperRef,class:O(e.dropdownKls),style:V(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=N(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=N(((...o)=>e.onMousedown&&e.onMousedown(...o)),["self"]))},[y(e.$slots,"default")],46,Pe)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Ke=W(Te,{DropdownItem:$e,DropdownMenu:Me}),Le=Y($e),Ge=Y(Me);export{Le as E,Ge as a,Ke as b};
