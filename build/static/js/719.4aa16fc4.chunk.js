"use strict";(self.webpackChunkthetower=self.webpackChunkthetower||[]).push([[719],{64719:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(72791),i=n(50419),o=n(83099),a=n(66106),r=n(30914),s=n(49389),c=n(87309),d=n(37083),u=n(79286),p=n(57689),m=n(27169),v=n(91933),f=n(77221),x=n(16030),C=n(50390),h=n(34571),g=n(92883),y=n(31752),Z=n(82622),w=n(80184);const j=e=>{let{data:t,deleteHandle:n}=e;const l=(0,x.I0)(),i=(0,p.s0)(),a=[{title:"Title Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,w.jsx)("p",{children:e})},{title:"Title Uz",dataIndex:"title_uz",id:"title_uz",render:e=>(0,w.jsx)("p",{children:e})},{title:"Title En",dataIndex:"title_en",id:"title_en",render:e=>(0,w.jsx)("p",{children:e})},{title:"Image",dataIndex:"main_image",id:"main_image",render:e=>(0,w.jsx)(C.Z,{width:50,src:e})},{title:"Action",id:"action",render:(e,t)=>(0,w.jsxs)(o.Z,{size:20,children:[(0,w.jsx)(c.Z,{onClick:()=>{return e=t.slug,localStorage.setItem("editDataId",e),l({type:f.Pb,payload:e}),void i("/news/add");var e},type:"primary",icon:(0,w.jsx)(y.Z,{}),children:"Edit"}),(0,w.jsx)(h.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/pages/news",e)})(t.slug),children:(0,w.jsx)(c.Z,{type:"danger",icon:(0,w.jsx)(Z.Z,{}),children:"Delete"})})]})}];return(0,w.jsx)("div",{children:(0,w.jsx)(g.Z,{columns:a,dataSource:t,rowKey:e=>e.id})})},E=()=>{const e=(0,p.s0)(),t=(0,x.I0)(),{mutate:n,isSuccess:C,isLoading:h}=(0,v.useMutation)((e=>{let{url:t,id:n}=e;return m.Z.deleteData(t,n)})),{data:g,isLoading:y,refetch:Z}=(0,v.useQuery)("news-get",(()=>m.Z.getData("/pages/news/")),{onError:e=>{i.ZP.error(e)}}),[E,b]=(0,l.useState)([]),[k,O]=(0,l.useState)(!1);(0,l.useEffect)((()=>{C&&Z()}),[C]);return(0,w.jsx)("div",{className:"site-space-compact-wrapper",children:(0,w.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,w.jsxs)(a.Z,{gutter:20,children:[(0,w.jsx)(r.Z,{span:16,children:(0,w.jsx)(s.default,{onChange:e=>(e=>{var t;O(""!==e);const n=null===g||void 0===g||null===(t=g.results)||void 0===t?void 0:t.filter((t=>t.title_ru.toLowerCase().includes(e.toLowerCase())||t.title_uz.toLowerCase().includes(e.toLowerCase())||t.title_en.toLowerCase().includes(e.toLowerCase())));b(n)})(e.target.value)})}),(0,w.jsx)(r.Z,{span:8,children:(0,w.jsx)(c.Z,{type:"primary",icon:(0,w.jsx)(u.Z,{}),style:{width:"100%"},onClick:()=>{t({type:f.Pb,payload:""}),e("/news/add")},children:"Add"})})]}),(0,w.jsx)(d.Z,{size:"medium",spinning:y||h,children:(0,w.jsx)(j,{data:k?E:null===g||void 0===g?void 0:g.results,deleteHandle:(e,t)=>{n({url:e,id:t})}})})]})})}},34571:(e,t,n)=>{n.d(t,{Z:()=>j});var l=n(87462),i=n(29439),o=n(10187),a=n(81694),r=n.n(a),s=n(75179),c=n(11354),d=n(72791),u=n(71929),p=n(69228),m=n(61113),v=n(87309),f=n(2571),x=n(41783),C=n(93486),h=n(70454),g=n(57924),y=function(e){var t=e.prefixCls,n=e.okButtonProps,i=e.cancelButtonProps,o=e.title,a=e.cancelText,r=e.okText,s=e.okType,c=e.icon,p=e.showCancel,m=void 0===p||p,y=e.close,Z=e.onConfirm,w=e.onCancel,j=d.useContext(u.E_).getPrefixCls;return d.createElement(C.Z,{componentName:"Popconfirm",defaultLocale:h.Z.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,g.Z)(o))),d.createElement("div",{className:"".concat(t,"-buttons")},m&&d.createElement(v.Z,(0,l.Z)({onClick:w,size:"small"},i),null!==a&&void 0!==a?a:e.cancelText),d.createElement(x.Z,{buttonProps:(0,l.Z)((0,l.Z)({size:"small"},(0,f.n)(s)),n),actionFn:Z,close:y,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==r&&void 0!==r?r:e.okText)))}))},Z=void 0,w=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(e);i<l.length;i++)t.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(n[l[i]]=e[l[i]])}return n};const j=d.forwardRef((function(e,t){var n=e.prefixCls,a=e.placement,v=void 0===a?"top":a,f=e.trigger,x=void 0===f?"click":f,C=e.okType,h=void 0===C?"primary":C,g=e.icon,j=void 0===g?d.createElement(o.Z,null):g,E=e.children,b=e.overlayClassName,k=e.onOpenChange,O=e.onVisibleChange,_=w(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),P=d.useContext(u.E_).getPrefixCls,T=(0,s.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),N=(0,i.Z)(T,2),I=N[0],L=N[1],z=function(e,t){L(e,!0),null===O||void 0===O||O(e,t),null===k||void 0===k||k(e,t)},S=P("popover",n),D=P("popconfirm",n),V=r()(D,b);return d.createElement(p.Z,(0,l.Z)({},_,{trigger:x,prefixCls:S,placement:v,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||z(t)},open:I,ref:t,overlayClassName:V,_overlay:d.createElement(y,(0,l.Z)({okType:h,icon:j},e,{prefixCls:S,close:function(e){z(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(Z,t)},onCancel:function(t){var n;z(!1,t),null===(n=e.onCancel)||void 0===n||n.call(Z,t)}}))}),(0,m.Tm)(E,{onKeyDown:function(e){var t,n;d.isValidElement(E)&&(null===(n=null===E||void 0===E?void 0:(t=E.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===c.Z.ESC&&I&&z(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=719.4aa16fc4.chunk.js.map