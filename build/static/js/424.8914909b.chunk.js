"use strict";(self.webpackChunkthetower=self.webpackChunkthetower||[]).push([[424],{53016:(e,t,i)=>{i.d(t,{Z:()=>r});i(72791);var s=i(2409),l=i(49389),a=i(80184);const r=e=>{let{label:t,name:i,required:r,required_text:n,warning:u}=e;return(0,a.jsx)(s.Z.Item,{label:u?(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:t}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:u})]}):(0,a.jsx)("div",{children:t}),name:i,rules:[{required:r,message:n}],children:(0,a.jsx)(l.default,{})})}},83386:(e,t,i)=>{i.d(t,{Z:()=>r});i(72791);var s=i(2409),l=i(66920),a=i(80184);const r=e=>{let{label:t,name:i,required:r,required_text:n}=e;return(0,a.jsx)(s.Z.Item,{label:t,name:i,rules:[{required:r,message:n}],children:(0,a.jsx)(l.Z,{rows:4})})}},30424:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var s=i(72791),l=i(2409),a=i(50419),r=i(66106),n=i(30914),u=i(93086),o=i(87309),d=i(91933),c=i(27169),m=i(7866),_=i(57689),g=i(16030),h=i(46273),p=i(77221),b=i(53016),v=i(83386),x=i(80184);const Z={image_ids:[],title_uz:"",title_ru:"",title_en:"",sub_title_ru:"",sub_title_uz:"",sub_title_en:""},f=()=>{const[e]=l.Z.useForm(),t=(0,_.s0)(),{editId:i}=(0,g.v9)((e=>e.editData)),f=(0,g.I0)(),[j,S]=(0,s.useState)([]),{mutate:q,data:w,isLoading:F,isSuccess:y}=(0,d.useMutation)((e=>{let{url:t,formData:i}=e;return c.Z.postData(t,i)}),{onSuccess:()=>{a.ZP.success("Success")},onError:e=>{for(let t in e.response.data)a.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:z,data:E,isLoading:I,isSuccess:P}=(0,d.useMutation)((e=>{let{url:t,data:i}=e;return c.Z.postData(t,i)}),{onSuccess:()=>{a.ZP.success("Success")},onError:e=>{for(let t in e.response.data)a.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:D,data:L,refetch:V,isSuccess:k}=(0,d.useQuery)(["edit-about-info",i],(()=>c.Z.getDataByID("/pages/about/info",i)),{enabled:!1}),{mutate:C,isLoading:T,data:M,isSuccess:R}=(0,d.useMutation)((e=>{let{url:t,data:i,id:s}=e;return c.Z.editData(t,i,s)}),{onSuccess:()=>{a.ZP.success("Success")},onError:e=>{for(let t in e.response.data)a.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:U}=(0,d.useMutation)((e=>{let{url:t,ids:i}=e;return c.Z.deleteImages(t,i)}),{onSuccess:()=>a.ZP.success("Success"),onError:e=>a.ZP.error(e.message)});(0,s.useEffect)((()=>{R&&f({type:p.Pb,payload:""}),(P||R)&&t("/about-info")}),[E,M]),(0,s.useEffect)((()=>{""!==i&&V()}),[i]),(0,s.useEffect)((()=>{""===i&&e.setFieldsValue(Z)}),[]),(0,s.useEffect)((()=>{const t=[];if(void 0!==L&&(console.log(L.images),L.images.map((e=>{const i={uid:e.id,name:e.id,status:"done",url:e.image};t.push(i)}))),k){const i={title_uz:null===L||void 0===L?void 0:L.title_uz,title_ru:null===L||void 0===L?void 0:L.title_ru,title_en:null===L||void 0===L?void 0:L.title_en,sub_title_ru:null===L||void 0===L?void 0:L.sub_title_ru,sub_title_uz:null===L||void 0===L?void 0:L.sub_title_uz,sub_title_en:null===L||void 0===L?void 0:L.sub_title_en,image_ids:t};S(t),e.setFieldsValue(i)}}),[L]);(0,s.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const i=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",i),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",i)}}),[]),(0,s.useEffect)((()=>{if(y){var t,i,s;const l=[...j],a={uid:null===w||void 0===w||null===(t=w.images[0])||void 0===t?void 0:t.id,name:null===w||void 0===w||null===(i=w.images[0])||void 0===i?void 0:i.id,status:"done",url:null===w||void 0===w||null===(s=w.images[0])||void 0===s?void 0:s.url};l.push(a),e.setFieldsValue({image_ids:[a]}),S(l)}}),[w]);return(0,x.jsx)("div",{children:I||D||T||F?(0,x.jsx)(m.QP,{}):(0,x.jsxs)(l.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:Z,onFinish:e=>{const t=[];j.map((e=>{console.log(e),t.push(e.uid)})),console.log(t);const s={image_ids:t,title_uz:e.title_uz,title_ru:e.title_ru,title_en:e.title_en,sub_title_ru:e.sub_title_ru,sub_title_uz:e.sub_title_uz,sub_title_en:e.sub_title_en};k?C({url:"/pages/about/info",data:s,id:i}):z({url:"/pages/about/info/",data:s})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,x.jsxs)(r.Z,{gutter:20,children:[(0,x.jsx)(n.Z,{span:24,children:(0,x.jsx)(b.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"title_ru"})}),(0,x.jsx)(n.Z,{span:24,children:(0,x.jsx)(b.Z,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Sarlavha Uz",name:"title_uz"})}),(0,x.jsx)(n.Z,{span:24,children:(0,x.jsx)(b.Z,{required:!0,required_text:"A title is required",label:"Title En",name:"title_en"})})]}),(0,x.jsxs)(r.Z,{gutter:20,children:[(0,x.jsx)(n.Z,{span:24,children:(0,x.jsx)(v.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"sub_title_ru"})}),(0,x.jsx)(n.Z,{span:24,children:(0,x.jsx)(v.Z,{required:!0,required_text:"Qo'shimcha sarlavha talab qilinadi",label:"Qo'shimcha Sarlavha Uz",name:"sub_title_uz"})}),(0,x.jsx)(n.Z,{span:24,children:(0,x.jsx)(v.Z,{required:!0,required_text:"An additional title is required",label:"Sub Title En",name:"sub_title_en"})})]}),(0,x.jsx)(r.Z,{gutter:20,children:(0,x.jsx)(n.Z,{span:12,children:(0,x.jsx)(l.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image_ids",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,x.jsx)(h.Z,{children:(0,x.jsx)(u.Z,{maxCount:3,fileList:j,listType:"picture-card",onChange:e=>{let{fileList:t}=e;if(t.length<j.length)return;const i=new FormData;0!==t.length&&(i.append("uploaded_images",t[t.length-1].originFileObj),q({url:"/images/",formData:i}))},onPreview:async e=>{let t=e.url;t||(t=await new Promise((t=>{const i=new FileReader;i.readAsDataURL(e.originFileObj),i.onload=()=>t(i.result)})));const i=new Image;i.src=t;const s=window.open(t);null===s||void 0===s||s.document.write(i.outerHTML)},onRemove:t=>{const i=[];j.map((e=>{(null===e||void 0===e?void 0:e.uid)!==(null===t||void 0===t?void 0:t.uid)&&i.push(e)})),!i.length>0&&e.setFieldsValue({image_ids:[]});const s={image_ids:[null===t||void 0===t?void 0:t.uid]};U({url:"/images/delete",ids:s}),S(i)},beforeUpload:()=>!1,children:j.length>2?"":"Upload"})})})})}),(0,x.jsx)(o.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:k?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"})]})})}}}]);
//# sourceMappingURL=424.8914909b.chunk.js.map