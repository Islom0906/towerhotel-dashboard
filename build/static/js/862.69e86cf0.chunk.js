"use strict";(self.webpackChunkthetower=self.webpackChunkthetower||[]).push([[862],{82862:(e,n,t)=>{t.d(n,{Z:()=>J});var o,r=t(93433),c=t(87462),a=t(68944),l=t(11532),i=t(35796),s=t(29966),u=t(14699),f=t(72791),m=t(26485),d=t(4942),p=t(81694),C=t.n(p),v=t(41783),x=t(29464),y=t(60732),k=t(96196),Z=t(87309),g=t(2571),b=t(71929),E=t(91940),T=t(93486),w=t(70011),P=t(96096),h=t(72073),N=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};(0,P.jD)()&&document.documentElement.addEventListener("click",(function(e){o={x:e.pageX,y:e.pageY},setTimeout((function(){o=null}),100)}),!0);const O=function(e){var n,t=f.useContext(b.E_),r=t.getPopupContainer,a=t.getPrefixCls,l=t.direction,i=function(n){var t=e.onCancel;null===t||void 0===t||t(n)},s=function(n){var t=e.onOk;null===t||void 0===t||t(n)},u=e.prefixCls,m=e.footer,p=e.visible,v=e.open,P=void 0!==v&&v,O=e.wrapClassName,I=e.centered,S=e.getContainer,j=e.closeIcon,A=e.focusTriggerAfterClose,F=void 0===A||A,L=e.width,B=void 0===L?520:L,R=N(e,["prefixCls","footer","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose","width"]),M=a("modal",u),z=a(),D=f.createElement(T.Z,{componentName:"Modal",defaultLocale:(0,h.A)()},(function(n){var t=e.okText,o=e.okType,r=void 0===o?"primary":o,a=e.cancelText,l=e.confirmLoading,u=void 0!==l&&l;return f.createElement(f.Fragment,null,f.createElement(Z.Z,(0,c.Z)({onClick:i},e.cancelButtonProps),a||n.cancelText),f.createElement(Z.Z,(0,c.Z)({},(0,g.n)(r),{loading:u,onClick:s},e.okButtonProps),null!==t&&void 0!==t?t:n.okText))})),H=f.createElement("span",{className:"".concat(M,"-close-x")},j||f.createElement(y.Z,{className:"".concat(M,"-close-icon")})),_=C()(O,(0,d.Z)((0,d.Z)({},"".concat(M,"-centered"),!!I),"".concat(M,"-wrap-rtl"),"rtl"===l));return f.createElement(w.BR,null,f.createElement(E.Ux,{status:!0,override:!0},f.createElement(k.Z,(0,c.Z)({width:B},R,{getContainer:void 0===S?r:S,prefixCls:M,wrapClassName:_,footer:void 0===m?D:m,visible:P||p,mousePosition:null!==(n=R.mousePosition)&&void 0!==n?n:o,onClose:i,closeIcon:H,focusTriggerAfterClose:F,transitionName:(0,x.mL)(z,"zoom",e.transitionName),maskTransitionName:(0,x.mL)(z,"fade",e.maskTransitionName)}))))};const I=function(e){var n=e.icon,t=e.onCancel,o=e.onOk,r=e.close,c=e.zIndex,a=e.afterClose,l=e.visible,i=e.open,s=e.keyboard,u=e.centered,p=e.getContainer,y=e.maskStyle,k=e.okText,Z=e.okButtonProps,g=e.cancelText,b=e.cancelButtonProps,E=e.direction,T=e.prefixCls,w=e.wrapClassName,P=e.rootPrefixCls,h=e.iconPrefixCls,N=e.bodyStyle,I=e.closable,S=void 0!==I&&I,j=e.closeIcon,A=e.modalRender,F=e.focusTriggerAfterClose;var L=e.okType||"primary",B="".concat(T,"-confirm"),R=!("okCancel"in e)||e.okCancel,M=e.width||416,z=e.style||{},D=void 0===e.mask||e.mask,H=void 0!==e.maskClosable&&e.maskClosable,_=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),U=C()(B,"".concat(B,"-").concat(e.type),(0,d.Z)({},"".concat(B,"-rtl"),"rtl"===E),e.className),X=R&&f.createElement(v.Z,{actionFn:t,close:r,autoFocus:"cancel"===_,buttonProps:b,prefixCls:"".concat(P,"-btn")},g);return f.createElement(m.ZP,{prefixCls:P,iconPrefixCls:h,direction:E},f.createElement(O,{prefixCls:T,className:U,wrapClassName:C()((0,d.Z)({},"".concat(B,"-centered"),!!e.centered),w),onCancel:function(){return null===r||void 0===r?void 0:r({triggerCancel:!0})},open:i||l,title:"",footer:"",transitionName:(0,x.mL)(P,"zoom",e.transitionName),maskTransitionName:(0,x.mL)(P,"fade",e.maskTransitionName),mask:D,maskClosable:H,maskStyle:y,style:z,bodyStyle:N,width:M,zIndex:c,afterClose:a,keyboard:s,centered:u,getContainer:p,closable:S,closeIcon:j,modalRender:A,focusTriggerAfterClose:F},f.createElement("div",{className:"".concat(B,"-body-wrapper")},f.createElement("div",{className:"".concat(B,"-body")},n,void 0===e.title?null:f.createElement("span",{className:"".concat(B,"-title")},e.title),f.createElement("div",{className:"".concat(B,"-content")},e.content)),f.createElement("div",{className:"".concat(B,"-btns")},X,f.createElement(v.Z,{type:L,actionFn:o,close:r,autoFocus:"ok"===_,buttonProps:Z,prefixCls:"".concat(P,"-btn")},k)))))};const S=[];var j=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},A="";function F(e){var n,t=document.createDocumentFragment(),o=(0,c.Z)((0,c.Z)({},e),{close:i,open:!0});function a(){for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];var a=o.some((function(e){return e&&e.triggerCancel}));e.onCancel&&a&&e.onCancel.apply(e,[function(){}].concat((0,r.Z)(o.slice(1))));for(var l=0;l<S.length;l++){if(S[l]===i){S.splice(l,1);break}}(0,u.v)(t)}function l(e){var o=e.okText,r=e.cancelText,a=e.prefixCls,l=j(e,["okText","cancelText","prefixCls"]);clearTimeout(n),n=setTimeout((function(){var e=(0,h.A)(),n=(0,m.w6)(),i=n.getPrefixCls,s=n.getIconPrefixCls,d=i(void 0,A),p=a||"".concat(d,"-modal"),C=s();(0,u.s)(f.createElement(I,(0,c.Z)({},l,{prefixCls:p,rootPrefixCls:d,iconPrefixCls:C,okText:o||(l.okCancel?e.okText:e.justOkText),cancelText:r||e.cancelText})),t)}))}function i(){for(var n=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];(o=(0,c.Z)((0,c.Z)({},o),{open:!1,afterClose:function(){"function"===typeof e.afterClose&&e.afterClose(),a.apply(n,r)}})).visible&&delete o.visible,l(o)}return l(o),S.push(i),{destroy:i,update:function(e){l(o="function"===typeof e?e(o):(0,c.Z)((0,c.Z)({},o),e))}}}function L(e){return(0,c.Z)((0,c.Z)({icon:f.createElement(i.Z,null),okCancel:!1},e),{type:"warning"})}function B(e){return(0,c.Z)((0,c.Z)({icon:f.createElement(s.Z,null),okCancel:!1},e),{type:"info"})}function R(e){return(0,c.Z)((0,c.Z)({icon:f.createElement(a.Z,null),okCancel:!1},e),{type:"success"})}function M(e){return(0,c.Z)((0,c.Z)({icon:f.createElement(l.Z,null),okCancel:!1},e),{type:"error"})}function z(e){return(0,c.Z)((0,c.Z)({icon:f.createElement(i.Z,null),okCancel:!0},e),{type:"confirm"})}var D=t(29439);var H=t(70454),_=function(e,n){var t=e.afterClose,o=e.config,a=f.useState(!0),l=(0,D.Z)(a,2),i=l[0],s=l[1],u=f.useState(o),m=(0,D.Z)(u,2),d=m[0],p=m[1],C=f.useContext(b.E_),v=C.direction,x=C.getPrefixCls,y=x("modal"),k=x(),Z=function(){s(!1);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=n.some((function(e){return e&&e.triggerCancel}));d.onCancel&&o&&d.onCancel.apply(d,[function(){}].concat((0,r.Z)(n.slice(1))))};return f.useImperativeHandle(n,(function(){return{destroy:Z,update:function(e){p((function(n){return(0,c.Z)((0,c.Z)({},n),e)}))}}})),f.createElement(T.Z,{componentName:"Modal",defaultLocale:H.Z.Modal},(function(e){return f.createElement(I,(0,c.Z)({prefixCls:y,rootPrefixCls:k},d,{close:Z,open:i,afterClose:t,okText:d.okText||(d.okCancel?e.okText:e.justOkText),direction:v,cancelText:d.cancelText||e.cancelText}))}))};const U=f.forwardRef(_);var X=0,Y=f.memo(f.forwardRef((function(e,n){var t=function(){var e=f.useState([]),n=(0,D.Z)(e,2),t=n[0],o=n[1];return[t,f.useCallback((function(e){return o((function(n){return[].concat((0,r.Z)(n),[e])})),function(){o((function(n){return n.filter((function(n){return n!==e}))}))}}),[])]}(),o=(0,D.Z)(t,2),c=o[0],a=o[1];return f.useImperativeHandle(n,(function(){return{patchElement:a}}),[]),f.createElement(f.Fragment,null,c)})));function q(e){return F(L(e))}var G=O;G.useModal=function(){var e=f.useRef(null),n=f.useState([]),t=(0,D.Z)(n,2),o=t[0],c=t[1];f.useEffect((function(){o.length&&((0,r.Z)(o).forEach((function(e){e()})),c([]))}),[o]);var a=f.useCallback((function(n){return function(t){var o;X+=1;var a,l=f.createRef(),i=f.createElement(U,{key:"modal-".concat(X),config:n(t),ref:l,afterClose:function(){null===a||void 0===a||a()}});return a=null===(o=e.current)||void 0===o?void 0:o.patchElement(i),{destroy:function(){function e(){var e;null===(e=l.current)||void 0===e||e.destroy()}l.current?e():c((function(n){return[].concat((0,r.Z)(n),[e])}))},update:function(e){function n(){var n;null===(n=l.current)||void 0===n||n.update(e)}l.current?n():c((function(e){return[].concat((0,r.Z)(e),[n])}))}}}}),[]);return[f.useMemo((function(){return{info:a(B),success:a(R),error:a(M),warning:a(L),confirm:a(z)}}),[]),f.createElement(Y,{ref:e})]},G.info=function(e){return F(B(e))},G.success=function(e){return F(R(e))},G.error=function(e){return F(M(e))},G.warning=q,G.warn=q,G.confirm=function(e){return F(z(e))},G.destroyAll=function(){for(;S.length;){var e=S.pop();e&&e()}},G.config=function(e){var n=e.rootPrefixCls;A=n};const J=G}}]);
//# sourceMappingURL=862.69e86cf0.chunk.js.map