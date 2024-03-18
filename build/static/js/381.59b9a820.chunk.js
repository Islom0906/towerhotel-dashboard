"use strict";(self.webpackChunkthetower=self.webpackChunkthetower||[]).push([[381],{13381:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(72791),i=n(50419),o=n(83099),r=n(66106),a=n(30914),c=n(49389),s=n(87309),d=n(37083),u=n(79286),v=n(57689),p=n(27169),m=n(91933),f=n(77221),h=n(16030),x=n(50390),C=n(34571),Z=n(92883),y=n(31752),g=n(82622),j=n(80184);const w=e=>{let{data:t,deleteHandle:n}=e;const l=(0,h.I0)(),i=(0,v.s0)(),r=[{title:"Title Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,j.jsx)("p",{children:e})},{title:"Title Uz",dataIndex:"title_uz",id:"title_uz",render:e=>(0,j.jsx)("p",{children:e})},{title:"Title En",dataIndex:"title_en",id:"title_en",render:e=>(0,j.jsx)("p",{children:e})},{title:"Image",dataIndex:"image",id:"image",render:e=>(0,j.jsx)(x.Z,{width:50,src:null===e||void 0===e?void 0:e.image})},{title:"Action",id:"action",render:(e,t)=>(0,j.jsxs)(o.Z,{size:20,children:[(0,j.jsx)(s.Z,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),l({type:f.Pb,payload:e}),void i("/service/add");var e},type:"primary",icon:(0,j.jsx)(y.Z,{}),children:"Edit"}),(0,j.jsx)(C.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/services",e)})(t.id),children:(0,j.jsx)(s.Z,{type:"danger",icon:(0,j.jsx)(g.Z,{}),children:"Delete"})})]})}];return(0,j.jsx)("div",{children:(0,j.jsx)(Z.Z,{columns:r,dataSource:t,rowKey:e=>e.id})})},E=()=>{const e=(0,v.s0)(),t=(0,h.I0)(),{mutate:n,isSuccess:x,isLoading:C}=(0,m.useMutation)((e=>{let{url:t,id:n}=e;return p.Z.deleteData(t,n)})),{data:Z,isLoading:y,refetch:g}=(0,m.useQuery)("service-get",(()=>p.Z.getData("/services/")),{onError:e=>{i.ZP.error(e)}}),[E,b]=(0,l.useState)([]),[k,O]=(0,l.useState)(!1);(0,l.useEffect)((()=>{x&&g()}),[x]);return(0,j.jsx)("div",{className:"site-space-compact-wrapper",children:(0,j.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,j.jsxs)(r.Z,{gutter:20,children:[(0,j.jsx)(a.Z,{span:16,children:(0,j.jsx)(c.default,{onChange:e=>(e=>{var t;O(""!==e);const n=null===Z||void 0===Z||null===(t=Z.results)||void 0===t?void 0:t.filter((t=>t.title_ru.toLowerCase().includes(e.toLowerCase())||t.title_uz.toLowerCase().includes(e.toLowerCase())||t.title_en.toLowerCase().includes(e.toLowerCase())));b(n)})(e.target.value)})}),(0,j.jsx)(a.Z,{span:8,children:(0,j.jsx)(s.Z,{type:"primary",icon:(0,j.jsx)(u.Z,{}),style:{width:"100%"},onClick:()=>{t({type:f.Pb,payload:""}),e("/service/add")},children:"Add"})})]}),(0,j.jsx)(d.Z,{size:"medium",spinning:y||C,children:(0,j.jsx)(w,{data:k?E:null===Z||void 0===Z?void 0:Z.results,deleteHandle:(e,t)=>{n({url:e,id:t})}})})]})})}},82622:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(1413),i=n(72791);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var r=n(54291),a=function(e,t){return i.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:o}))};a.displayName="DeleteOutlined";const c=i.forwardRef(a)},34571:(e,t,n)=>{n.d(t,{Z:()=>w});var l=n(87462),i=n(29439),o=n(10187),r=n(81694),a=n.n(r),c=n(75179),s=n(11354),d=n(72791),u=n(71929),v=n(69228),p=n(61113),m=n(87309),f=n(2571),h=n(41783),x=n(93486),C=n(70454),Z=n(57924),y=function(e){var t=e.prefixCls,n=e.okButtonProps,i=e.cancelButtonProps,o=e.title,r=e.cancelText,a=e.okText,c=e.okType,s=e.icon,v=e.showCancel,p=void 0===v||v,y=e.close,g=e.onConfirm,j=e.onCancel,w=d.useContext(u.E_).getPrefixCls;return d.createElement(x.Z,{componentName:"Popconfirm",defaultLocale:C.Z.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},s&&d.createElement("span",{className:"".concat(t,"-message-icon")},s),d.createElement("div",{className:"".concat(t,"-message-title")},(0,Z.Z)(o))),d.createElement("div",{className:"".concat(t,"-buttons")},p&&d.createElement(m.Z,(0,l.Z)({onClick:j,size:"small"},i),null!==r&&void 0!==r?r:e.cancelText),d.createElement(h.Z,{buttonProps:(0,l.Z)((0,l.Z)({size:"small"},(0,f.n)(c)),n),actionFn:g,close:y,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==a&&void 0!==a?a:e.okText)))}))},g=void 0,j=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(e);i<l.length;i++)t.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(n[l[i]]=e[l[i]])}return n};const w=d.forwardRef((function(e,t){var n=e.prefixCls,r=e.placement,m=void 0===r?"top":r,f=e.trigger,h=void 0===f?"click":f,x=e.okType,C=void 0===x?"primary":x,Z=e.icon,w=void 0===Z?d.createElement(o.Z,null):Z,E=e.children,b=e.overlayClassName,k=e.onOpenChange,O=e.onVisibleChange,P=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.E_).getPrefixCls,T=(0,c.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),_=(0,i.Z)(T,2),z=_[0],I=_[1],L=function(e,t){I(e,!0),null===O||void 0===O||O(e,t),null===k||void 0===k||k(e,t)},D=N("popover",n),S=N("popconfirm",n),H=a()(S,b);return d.createElement(v.Z,(0,l.Z)({},P,{trigger:h,prefixCls:D,placement:m,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||L(t)},open:z,ref:t,overlayClassName:H,_overlay:d.createElement(y,(0,l.Z)({okType:C,icon:w},e,{prefixCls:D,close:function(e){L(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(g,t)},onCancel:function(t){var n;L(!1,t),null===(n=e.onCancel)||void 0===n||n.call(g,t)}}))}),(0,p.Tm)(E,{onKeyDown:function(e){var t,n;d.isValidElement(E)&&(null===(n=null===E||void 0===E?void 0:(t=E.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===s.Z.ESC&&z&&L(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=381.59b9a820.chunk.js.map