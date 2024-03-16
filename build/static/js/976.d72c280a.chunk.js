"use strict";(self.webpackChunkthetower=self.webpackChunkthetower||[]).push([[976],{53016:(e,t,i)=>{i.d(t,{Z:()=>r});i(72791);var a=i(2409),s=i(49389),l=i(80184);const r=e=>{let{label:t,name:i,required:r,required_text:n,warning:u}=e;return(0,l.jsx)(a.Z.Item,{label:u?(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:t}),(0,l.jsx)("br",{}),(0,l.jsx)("p",{children:u})]}):(0,l.jsx)("div",{children:t}),name:i,rules:[{required:r,message:n}],children:(0,l.jsx)(s.default,{})})}},83386:(e,t,i)=>{i.d(t,{Z:()=>r});i(72791);var a=i(2409),s=i(66920),l=i(80184);const r=e=>{let{label:t,name:i,required:r,required_text:n}=e;return(0,l.jsx)(a.Z.Item,{label:t,name:i,rules:[{required:r,message:n}],children:(0,l.jsx)(s.Z,{rows:4})})}},19976:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var a=i(72791),s=i(2409),l=i(50419),r=i(66106),n=i(30914),u=i(93086),d=i(87309),o=i(91933),c=i(27169),_=i(94533),m=i(57689),p=i(16030),b=i(77221),x=i(68117),h=i(53016),g=i(83386),j=i(80184);const Z={image_1:[],image_2:[],title_ru:"",title_uz:"",title_en:"",sub_title_ru:"",sub_title_uz:"",sub_title_en:""},f=()=>{const[e]=s.Z.useForm(),t=(0,m.s0)(),{editId:i}=(0,p.v9)((e=>e.editData)),f=(0,p.I0)(),[v,q]=(0,a.useState)([]),[w,F]=(0,a.useState)([]),{mutate:S,data:y,isLoading:z,isSuccess:I}=(0,o.useMutation)((e=>{let{url:t,data:i}=e;return c.Z.postData(t,i)}),{onSuccess:()=>{l.ZP.success("Success")},onError:e=>{for(let t in e.response.data)l.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:E,data:L,refetch:V,isSuccess:C}=(0,o.useQuery)(["edit-about-index",i],(()=>c.Z.getDataByID("/pages/about/index",i)),{enabled:!1}),{mutate:P,isLoading:T,data:D,isSuccess:k}=(0,o.useMutation)((e=>{let{url:t,data:i,id:a}=e;return c.Z.editData(t,i,a)}),{onSuccess:()=>{l.ZP.success("Success")},onError:e=>{for(let t in e.response.data)l.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}});(0,a.useEffect)((()=>{k&&f({type:b.Pb,payload:""}),(I||k)&&t("/about-index")}),[y,D]),(0,a.useEffect)((()=>{""!==i&&V()}),[i]),(0,a.useEffect)((()=>{""===i&&e.setFieldsValue(Z)}),[]),(0,a.useEffect)((()=>{if(C){const t=[{uid:L.id,name:L.id,status:"done",url:L.image_1}],i=[{uid:L.id,name:L.id,status:"done",url:L.image_2}],a={image_1:t,image_2:i,title_ru:L.title_ru,title_uz:L.title_uz,title_en:L.title_en,sub_title_ru:L.sub_title_ru,sub_title_uz:L.sub_title_uz,sub_title_en:L.sub_title_en};q(t),F(i),e.setFieldsValue(a)}}),[L]);(0,a.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const i=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",i),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",i)}}),[]);const O=async e=>{let t=e.url;t||(t=await new Promise((t=>{const i=new FileReader;i.readAsDataURL(e.originFileObj),i.onload=()=>t(i.result)})));const i=new Image;i.src=t;const a=window.open(t);null===a||void 0===a||a.document.write(i.outerHTML)};return(0,j.jsx)("div",{children:z||E||T?(0,j.jsx)(_.QP,{}):(0,j.jsxs)(s.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:Z,onFinish:e=>{var t,a;const s=new FormData;var l,r;(s.append("title_ru",e.title_ru),s.append("title_uz",e.title_uz),s.append("title_en",e.title_en),s.append("sub_title_ru",e.sub_title_ru),s.append("sub_title_uz",e.sub_title_uz),s.append("sub_title_en",e.sub_title_en),null!==(t=v[0])&&void 0!==t&&t.originFileObj)&&s.append("image_1",null===(l=v[0])||void 0===l?void 0:l.originFileObj);null!==(a=w[0])&&void 0!==a&&a.originFileObj&&s.append("image_2",null===(r=w[0])||void 0===r?void 0:r.originFileObj);L?P({url:"/pages/about/index",data:s,id:i}):S({url:"/pages/about/index/",data:s})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,j.jsxs)(r.Z,{gutter:20,children:[(0,j.jsx)(n.Z,{span:8,children:(0,j.jsx)(h.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"Title Ru",name:"title_ru"})}),(0,j.jsx)(n.Z,{span:8,children:(0,j.jsx)(h.Z,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Title Uz",name:"title_uz"})}),(0,j.jsx)(n.Z,{span:8,children:(0,j.jsx)(h.Z,{required:!0,required_text:"A title must be entered",label:"Title En",name:"title_en"})})]}),(0,j.jsxs)(r.Z,{gutter:20,children:[(0,j.jsx)(n.Z,{span:24,children:(0,j.jsx)(g.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"sub_title_ru"})}),(0,j.jsx)(n.Z,{span:24,children:(0,j.jsx)(g.Z,{required:!0,required_text:"Qo'shimcha sarlavha talab qilinadi",label:"Qo'shimcha Sarlavha Uz",name:"sub_title_uz"})}),(0,j.jsx)(n.Z,{span:24,children:(0,j.jsx)(g.Z,{required:!0,required_text:"An additional title is required",label:"Sub Title En",name:"sub_title_en"})})]}),(0,j.jsx)(r.Z,{gutter:20,children:(0,j.jsx)(n.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image_1",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435."}],children:(0,j.jsx)(x.Z,{rotationSlider:!0,children:(0,j.jsx)(u.Z,{maxCount:1,fileList:v,listType:"picture-card",onChange:t=>{let{fileList:i}=t;q(i),e.setFieldsValue({image_1:i})},onPreview:O,beforeUpload:()=>!1,children:v.length>0?"":"Upload"})})})})}),(0,j.jsx)(r.Z,{gutter:20,children:(0,j.jsx)(n.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0430\u043d\u043d\u0435\u0440\u0430",name:"image_2",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0430\u043d\u043d\u0435\u0440\u0430."}],children:(0,j.jsx)(x.Z,{rotationSlider:!0,children:(0,j.jsx)(u.Z,{maxCount:1,fileList:w,listType:"picture-card",onChange:t=>{let{fileList:i}=t;F(i),e.setFieldsValue({image_2:i})},onPreview:O,beforeUpload:()=>!1,children:w.length>0?"":"Upload"})})})})}),(0,j.jsx)(d.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:C?"Edit":"Add"})]})})}}}]);
//# sourceMappingURL=976.d72c280a.chunk.js.map