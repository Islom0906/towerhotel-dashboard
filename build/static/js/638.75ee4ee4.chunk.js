(self.webpackChunkthetower=self.webpackChunkthetower||[]).push([[638],{42229:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(50419),o=n(83099),a=n(66106),i=n(30914),c=n(87309),l=n(37083),s=n(79286),d=n(57689),u=n(27169),f=n(91933),m=n(77221),v=n(16030),p=n(50390),y=n(92883),h=n(31752),Z=n(80184);const b=e=>{let{data:t}=e;const n=(0,v.I0)(),r=(0,d.s0)(),a=[{title:"Title Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,Z.jsx)("p",{children:e})},{title:"Title Uz",dataIndex:"title_uz",id:"title_uz",render:e=>(0,Z.jsx)("p",{children:e})},{title:"Title En",dataIndex:"title_en",id:"title_en",render:e=>(0,Z.jsx)("p",{children:e})},{title:"Image",dataIndex:"header_image",id:"header_image",render:e=>(0,Z.jsx)(p.Z,{width:50,src:e})},{title:"Action",id:"action",render:(e,t)=>(0,Z.jsx)(o.Z,{size:20,children:(0,Z.jsx)(c.Z,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),n({type:m.Pb,payload:e}),void r("/rooms-banner/add");var e},type:"primary",icon:(0,Z.jsx)(h.Z,{}),children:"Edit"})})}];return(0,Z.jsx)("div",{children:t[0]&&(0,Z.jsx)(y.Z,{columns:a,dataSource:t,rowKey:e=>null===e||void 0===e?void 0:e.id})})},x=()=>{const e=(0,d.s0)(),t=(0,v.I0)(),{data:n,isLoading:p}=(0,f.useQuery)("rooms-banner-get",(()=>u.Z.getData("/roompage/")),{onError:e=>{r.ZP.error(e)}});return(0,Z.jsx)("div",{className:"site-space-compact-wrapper",children:(0,Z.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,Z.jsx)(a.Z,{gutter:20,children:(0,Z.jsx)(i.Z,{span:8,offset:16,children:(0,Z.jsx)(c.Z,{disabled:null===n||void 0===n?void 0:n.title_ru,type:"primary",icon:(0,Z.jsx)(s.Z,{}),style:{width:"100%"},onClick:()=>{t({type:m.Pb,payload:""}),e("/rooms-banner/add")},children:"Add"})})}),(0,Z.jsx)(l.Z,{size:"medium",spinning:p,children:(0,Z.jsx)(b,{data:[n]})})]})})}},30914:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(89752).Z},96196:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(87462),o=n(29439),a=n(72791),i=n.t(a,2),c=n(32925),l=n(1413),s=n(81694),d=n.n(s),u=n(11354);var f=0;var m=(0,l.Z)({},i).useId;const v=m?function(e){var t=m();return e||t}:function(e){var t=a.useState("ssr-id"),n=(0,o.Z)(t,2),r=n[0],i=n[1];return a.useEffect((function(){var e=f;f+=1,i("rc_unique_".concat(e))}),[]),e||r};var p=n(80520),y=n(54170),h=n(98568);function Z(e){var t=e.prefixCls,n=e.style,o=e.visible,i=e.maskProps,c=e.motionName;return a.createElement(h.ZP,{key:"mask",visible:o,motionName:c,leavedClassName:"".concat(t,"-mask-hidden")},(function(e,o){var c=e.className,s=e.style;return a.createElement("div",(0,r.Z)({ref:o,style:(0,l.Z)((0,l.Z)({},s),n),className:d()("".concat(t,"-mask"),c)},i))}))}function b(e,t,n){var r=t;return!r&&n&&(r="".concat(e,"-").concat(n)),r}function x(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if("number"!==typeof n){var o=e.document;"number"!==typeof(n=o.documentElement[r])&&(n=o.body[r])}return n}const C=a.memo((function(e){return e.children}),(function(e,t){return!t.shouldUpdate}));var g={width:0,height:0,overflow:"hidden",outline:"none"};const E=a.forwardRef((function(e,t){var n=e.prefixCls,o=e.className,i=e.style,c=e.title,s=e.ariaId,u=e.footer,f=e.closable,m=e.closeIcon,v=e.onClose,p=e.children,y=e.bodyStyle,h=e.bodyProps,Z=e.modalRender,b=e.onMouseDown,x=e.onMouseUp,E=e.holderRef,N=e.visible,k=e.forceRender,w=e.width,j=e.height,I=(0,a.useRef)(),R=(0,a.useRef)();a.useImperativeHandle(t,(function(){return{focus:function(){var e;null===(e=I.current)||void 0===e||e.focus()},changeActive:function(e){var t=document.activeElement;e&&t===R.current?I.current.focus():e||t!==I.current||R.current.focus()}}}));var P,S,_,O={};void 0!==w&&(O.width=w),void 0!==j&&(O.height=j),u&&(P=a.createElement("div",{className:"".concat(n,"-footer")},u)),c&&(S=a.createElement("div",{className:"".concat(n,"-header")},a.createElement("div",{className:"".concat(n,"-title"),id:s},c))),f&&(_=a.createElement("button",{type:"button",onClick:v,"aria-label":"Close",className:"".concat(n,"-close")},m||a.createElement("span",{className:"".concat(n,"-close-x")})));var T=a.createElement("div",{className:"".concat(n,"-content")},_,S,a.createElement("div",(0,r.Z)({className:"".concat(n,"-body"),style:y},h),p),P);return a.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":c?s:null,"aria-modal":"true",ref:E,style:(0,l.Z)((0,l.Z)({},i),O),className:d()(n,o),onMouseDown:b,onMouseUp:x},a.createElement("div",{tabIndex:0,ref:I,style:g,"aria-hidden":"true"}),a.createElement(C,{shouldUpdate:N||k},Z?Z(T):T),a.createElement("div",{tabIndex:0,ref:R,style:g,"aria-hidden":"true"}))}));var N=a.forwardRef((function(e,t){var n=e.prefixCls,i=e.title,c=e.style,s=e.className,u=e.visible,f=e.forceRender,m=e.destroyOnClose,v=e.motionName,p=e.ariaId,y=e.onVisibleChanged,Z=e.mousePosition,b=(0,a.useRef)(),C=a.useState(),g=(0,o.Z)(C,2),N=g[0],k=g[1],w={};function j(){var e=function(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},r=e.ownerDocument,o=r.defaultView||r.parentWindow;return n.left+=x(o),n.top+=x(o,!0),n}(b.current);k(Z?"".concat(Z.x-e.left,"px ").concat(Z.y-e.top,"px"):"")}return N&&(w.transformOrigin=N),a.createElement(h.ZP,{visible:u,onVisibleChanged:y,onAppearPrepare:j,onEnterPrepare:j,forceRender:f,motionName:v,removeOnLeave:m,ref:b},(function(o,u){var f=o.className,m=o.style;return a.createElement(E,(0,r.Z)({},e,{ref:t,title:i,ariaId:p,prefixCls:n,holderRef:u,style:(0,l.Z)((0,l.Z)((0,l.Z)({},m),c),w),className:d()(s,f)}))}))}));N.displayName="Content";const k=N;function w(e){var t=e.prefixCls,n=void 0===t?"rc-dialog":t,i=e.zIndex,c=e.visible,s=void 0!==c&&c,f=e.keyboard,m=void 0===f||f,h=e.focusTriggerAfterClose,x=void 0===h||h,C=e.wrapStyle,g=e.wrapClassName,E=e.wrapProps,N=e.onClose,w=e.afterClose,j=e.transitionName,I=e.animation,R=e.closable,P=void 0===R||R,S=e.mask,_=void 0===S||S,O=e.maskTransitionName,T=e.maskAnimation,D=e.maskClosable,z=void 0===D||D,A=e.maskStyle,M=e.maskProps,U=e.rootClassName,L=(0,a.useRef)(),V=(0,a.useRef)(),K=(0,a.useRef)(),B=a.useState(s),q=(0,o.Z)(B,2),H=q[0],Q=q[1],W=v();function X(e){null===N||void 0===N||N(e)}var Y=(0,a.useRef)(!1),F=(0,a.useRef)(),G=null;return z&&(G=function(e){Y.current?Y.current=!1:V.current===e.target&&X(e)}),(0,a.useEffect)((function(){s&&(Q(!0),(0,p.Z)(V.current,document.activeElement)||(L.current=document.activeElement))}),[s]),(0,a.useEffect)((function(){return function(){clearTimeout(F.current)}}),[]),a.createElement("div",(0,r.Z)({className:d()("".concat(n,"-root"),U)},(0,y.Z)(e,{data:!0})),a.createElement(Z,{prefixCls:n,visible:_&&s,motionName:b(n,O,T),style:(0,l.Z)({zIndex:i},A),maskProps:M}),a.createElement("div",(0,r.Z)({tabIndex:-1,onKeyDown:function(e){if(m&&e.keyCode===u.Z.ESC)return e.stopPropagation(),void X(e);s&&e.keyCode===u.Z.TAB&&K.current.changeActive(!e.shiftKey)},className:d()("".concat(n,"-wrap"),g),ref:V,onClick:G,style:(0,l.Z)((0,l.Z)({zIndex:i},C),{},{display:H?null:"none"})},E),a.createElement(k,(0,r.Z)({},e,{onMouseDown:function(){clearTimeout(F.current),Y.current=!0},onMouseUp:function(){F.current=setTimeout((function(){Y.current=!1}))},ref:K,closable:P,ariaId:W,prefixCls:n,visible:s&&H,onClose:X,onVisibleChanged:function(e){if(e)!function(){var e;(0,p.Z)(V.current,document.activeElement)||null===(e=K.current)||void 0===e||e.focus()}();else{if(Q(!1),_&&L.current&&x){try{L.current.focus({preventScroll:!0})}catch(t){}L.current=null}H&&(null===w||void 0===w||w())}},motionName:b(n,j,I)}))))}var j=function(e){var t=e.visible,n=e.getContainer,i=e.forceRender,l=e.destroyOnClose,s=void 0!==l&&l,d=e.afterClose,u=a.useState(t),f=(0,o.Z)(u,2),m=f[0],v=f[1];return a.useEffect((function(){t&&v(!0)}),[t]),i||!s||m?a.createElement(c.Z,{open:t||i||m,autoDestroy:!1,getContainer:n,autoLock:t||m},a.createElement(w,(0,r.Z)({},e,{destroyOnClose:s,afterClose:function(){null===d||void 0===d||d(),v(!1)}}))):null};j.displayName="Dialog";const I=j},79613:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var s=a[l];if(!c(s))return!1;var d=e[s],u=t[s];if(!1===(o=n?n.call(r,d,u,s):void 0)||void 0===o&&d!==u)return!1}return!0}}}]);
//# sourceMappingURL=638.75ee4ee4.chunk.js.map