(self.webpackChunkthetower=self.webpackChunkthetower||[]).push([[102],{31752:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(1413),a=n(72791);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var i=n(54291),c=function(e,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};c.displayName="EditOutlined";const l=a.forwardRef(c)},68747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(1413),a=n(72791);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};var i=n(54291),c=function(e,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};c.displayName="MinusCircleOutlined";const l=a.forwardRef(c)},13344:(e,t,n)=>{"use strict";n.d(t,{Z:()=>X});var r=n(87462),a=n(4942),o=n(71002),i=n(29439),c=n(37295),l=n(1413),u=n(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};var f=n(54291),d=function(e,t){return u.createElement(f.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};d.displayName="UpOutlined";const p=u.forwardRef(d);var v=n(81694),m=n.n(v),g=n(44925),y=n(11354),b=n(71605),h=n(88834),E=n(15671),w=n(43144);function Z(){return"function"===typeof BigInt}function S(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),(t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(t="0".concat(t));var r=t||"0",a=r.split("."),o=a[0]||"0",i=a[1]||"0";"0"===o&&"0"===i&&(n=!1);var c=n?"-":"";return{negative:n,negativeStr:c,trimStr:r,integerStr:o,decimalStr:i,fullStr:"".concat(c).concat(r)}}function N(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function x(e){var t=String(e);if(N(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return(null===r||void 0===r?void 0:r[1])&&(n+=r[1].length),n}return t.includes(".")&&C(t)?t.length-t.indexOf(".")-1:0}function O(e){var t=String(e);if(N(e)){if(e>Number.MAX_SAFE_INTEGER)return String(Z()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(Z()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(x(t))}return S(t).fullStr}function C(e){return"number"===typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}function k(e){var t="number"===typeof e?O(e):S(e).fullStr;return t.includes(".")?S(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var I=function(){function e(t){(0,E.Z)(this,e),this.origin="",this.number=void 0,this.empty=void 0,(t||0===t)&&String(t).trim()?(this.origin=String(t),this.number=Number(t)):this.empty=!0}return(0,w.Z)(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=Number(t);if(Number.isNaN(n))return this;var r=this.number+n;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var a=Math.max(x(this.number),x(n));return new e(r.toFixed(a))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null===e||void 0===e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?this.isInvalidate()?"":O(this.number):this.origin}}]),e}(),R=function(){function e(t){if((0,E.Z)(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,(t||0===t)&&String(t).trim())if(this.origin=String(t),"-"!==t){var n=t;if(N(n)&&(n=Number(n)),C(n="string"===typeof n?n:O(n))){var r=S(n);this.negative=r.negative;var a=r.trimStr.split(".");this.integer=BigInt(a[0]);var o=a[1]||"0";this.decimal=BigInt(o),this.decimalLen=o.length}else this.nan=!0}else this.nan=!0;else this.empty=!0}return(0,w.Z)(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var t="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(t)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=new e(t);if(n.isInvalidate())return this;var r=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),a=S((this.alignDecimal(r)+n.alignDecimal(r)).toString()),o=a.negativeStr,i=a.trimStr,c="".concat(o).concat(i.padStart(r+1,"0"));return new e("".concat(c.slice(0,-r),".").concat(c.slice(-r)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null===e||void 0===e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?this.isInvalidate()?"":S("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function M(e){return Z()?new R(e):new I(e)}function D(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var a=S(e),o=a.negativeStr,i=a.integerStr,c=a.decimalStr,l="".concat(t).concat(c),u="".concat(o).concat(i);if(n>=0){var s=Number(c[n]);return s>=5&&!r?D(M(e).add("".concat(o,"0.").concat("0".repeat(n)).concat(10-s)).toString(),t,n,r):0===n?u:"".concat(u).concat(t).concat(c.padEnd(n,"0").slice(0,n))}return".0"===l?u:"".concat(u).concat(l)}var P=n(33786);function T(e){var t=e.prefixCls,n=e.upNode,o=e.downNode,i=e.upDisabled,c=e.downDisabled,l=e.onStep,s=u.useRef(),f=u.useRef();f.current=l;var d=function(e,t){e.preventDefault(),f.current(t),s.current=setTimeout((function e(){f.current(t),s.current=setTimeout(e,200)}),600)},p=function(){clearTimeout(s.current)};if(u.useEffect((function(){return p}),[]),(0,P.Z)())return null;var v="".concat(t,"-handler"),g=m()(v,"".concat(v,"-up"),(0,a.Z)({},"".concat(v,"-up-disabled"),i)),y=m()(v,"".concat(v,"-down"),(0,a.Z)({},"".concat(v,"-down-disabled"),c)),b={unselectable:"on",role:"button",onMouseUp:p,onMouseLeave:p};return u.createElement("div",{className:"".concat(v,"-wrap")},u.createElement("span",(0,r.Z)({},b,{onMouseDown:function(e){d(e,!0)},"aria-label":"Increase Value","aria-disabled":i,className:g}),n||u.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),u.createElement("span",(0,r.Z)({},b,{onMouseDown:function(e){d(e,!1)},"aria-label":"Decrease Value","aria-disabled":c,className:y}),o||u.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}var j=n(60632);var A=n(75314);var z=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],H=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},B=function(e){var t=M(e);return t.isInvalidate()?null:t},L=u.forwardRef((function(e,t){var n,c=e.prefixCls,l=void 0===c?"rc-input-number":c,s=e.className,f=e.style,d=e.min,p=e.max,v=e.step,E=void 0===v?1:v,w=e.defaultValue,Z=e.value,S=e.disabled,N=e.readOnly,I=e.upHandler,R=e.downHandler,P=e.keyboard,L=e.controls,_=void 0===L||L,F=e.stringMode,U=e.parser,G=e.formatter,K=e.precision,q=e.decimalSeparator,V=e.onChange,W=e.onInput,$=e.onPressEnter,X=e.onStep,Q=(0,g.Z)(e,z),J="".concat(l,"-input"),Y=u.useRef(null),ee=u.useState(!1),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],ae=u.useRef(!1),oe=u.useRef(!1),ie=u.useRef(!1),ce=u.useState((function(){return M(null!==Z&&void 0!==Z?Z:w)})),le=(0,i.Z)(ce,2),ue=le[0],se=le[1];var fe=u.useCallback((function(e,t){if(!t)return K>=0?K:Math.max(x(e),x(E))}),[K,E]),de=u.useCallback((function(e){var t=String(e);if(U)return U(t);var n=t;return q&&(n=n.replace(q,".")),n.replace(/[^\w.-]+/g,"")}),[U,q]),pe=u.useRef(""),ve=u.useCallback((function(e,t){if(G)return G(e,{userTyping:t,input:String(pe.current)});var n="number"===typeof e?O(e):e;if(!t){var r=fe(n,t);if(C(n)&&(q||r>=0))n=D(n,q||".",r)}return n}),[G,fe,q]),me=u.useState((function(){var e=null!==w&&void 0!==w?w:Z;return ue.isInvalidate()&&["string","number"].includes((0,o.Z)(e))?Number.isNaN(e)?"":e:ve(ue.toString(),!1)})),ge=(0,i.Z)(me,2),ye=ge[0],be=ge[1];function he(e,t){be(ve(e.isInvalidate()?e.toString(!1):e.toString(!t),t))}pe.current=ye;var Ee=u.useMemo((function(){return B(p)}),[p,K]),we=u.useMemo((function(){return B(d)}),[d,K]),Ze=u.useMemo((function(){return!(!Ee||!ue||ue.isInvalidate())&&Ee.lessEquals(ue)}),[Ee,ue]),Se=u.useMemo((function(){return!(!we||!ue||ue.isInvalidate())&&ue.lessEquals(we)}),[we,ue]),Ne=function(e,t){var n=(0,u.useRef)(null);return[function(){try{var t=e.selectionStart,r=e.selectionEnd,a=e.value,o=a.substring(0,t),i=a.substring(r);n.current={start:t,end:r,value:a,beforeTxt:o,afterTxt:i}}catch(c){}},function(){if(e&&n.current&&t)try{var r=e.value,a=n.current,o=a.beforeTxt,i=a.afterTxt,c=a.start,l=r.length;if(r.endsWith(i))l=r.length-n.current.afterTxt.length;else if(r.startsWith(o))l=o.length;else{var u=o[c-1],s=r.indexOf(u,c-1);-1!==s&&(l=s+1)}e.setSelectionRange(l,l)}catch(f){(0,j.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(f.message))}}]}(Y.current,ne),xe=(0,i.Z)(Ne,2),Oe=xe[0],Ce=xe[1],ke=function(e){return Ee&&!e.lessEquals(Ee)?Ee:we&&!we.lessEquals(e)?we:null},Ie=function(e){return!ke(e)},Re=function(e,t){var n,r=e,a=Ie(r)||r.isEmpty();if(r.isEmpty()||t||(r=ke(r)||r,a=!0),!N&&!S&&a){var o=r.toString(),i=fe(o,t);return i>=0&&(r=M(D(o,".",i)),Ie(r)||(r=M(D(o,".",i,!0)))),r.equals(ue)||(n=r,void 0===Z&&se(n),null===V||void 0===V||V(r.isEmpty()?null:H(F,r)),void 0===Z&&he(r,t)),r}return ue},Me=function(){var e=(0,u.useRef)(0),t=function(){A.Z.cancel(e.current)};return(0,u.useEffect)((function(){return t}),[]),function(n){t(),e.current=(0,A.Z)((function(){n()}))}}(),De=function e(t){if(Oe(),be(t),!oe.current){var n=M(de(t));n.isNaN()||Re(n,!0)}null===W||void 0===W||W(t),Me((function(){var n=t;U||(n=t.replace(/\u3002/g,".")),n!==t&&e(n)}))},Pe=function(e){var t;if(!(e&&Ze||!e&&Se)){ae.current=!1;var n=M(ie.current?k(E):E);e||(n=n.negate());var r=(ue||M(0)).add(n.toString()),a=Re(r,!1);null===X||void 0===X||X(H(F,a),{offset:ie.current?k(E):E,type:e?"up":"down"}),null===(t=Y.current)||void 0===t||t.focus()}},Te=function(e){var t=M(de(ye)),n=t;n=t.isNaN()?ue:Re(t,e),void 0!==Z?he(ue,!1):n.isNaN()||he(n,!1)};return(0,b.o)((function(){ue.isInvalidate()||he(ue,!1)}),[K]),(0,b.o)((function(){var e=M(Z);se(e);var t=M(de(ye));e.equals(t)&&ae.current&&!G||he(e,ae.current)}),[Z]),(0,b.o)((function(){G&&Ce()}),[ye]),u.createElement("div",{className:m()(l,s,(n={},(0,a.Z)(n,"".concat(l,"-focused"),ne),(0,a.Z)(n,"".concat(l,"-disabled"),S),(0,a.Z)(n,"".concat(l,"-readonly"),N),(0,a.Z)(n,"".concat(l,"-not-a-number"),ue.isNaN()),(0,a.Z)(n,"".concat(l,"-out-of-range"),!ue.isInvalidate()&&!Ie(ue)),n)),style:f,onFocus:function(){re(!0)},onBlur:function(){Te(!1),re(!1),ae.current=!1},onKeyDown:function(e){var t=e.which,n=e.shiftKey;ae.current=!0,ie.current=!!n,t===y.Z.ENTER&&(oe.current||(ae.current=!1),Te(!1),null===$||void 0===$||$(e)),!1!==P&&!oe.current&&[y.Z.UP,y.Z.DOWN].includes(t)&&(Pe(y.Z.UP===t),e.preventDefault())},onKeyUp:function(){ae.current=!1,ie.current=!1},onCompositionStart:function(){oe.current=!0},onCompositionEnd:function(){oe.current=!1,De(Y.current.value)},onBeforeInput:function(){ae.current=!0}},_&&u.createElement(T,{prefixCls:l,upNode:I,downNode:R,upDisabled:Ze,downDisabled:Se,onStep:Pe}),u.createElement("div",{className:"".concat(J,"-wrap")},u.createElement("input",(0,r.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":p,"aria-valuenow":ue.isInvalidate()?null:ue.toString(),step:E},Q,{ref:(0,h.sQ)(Y,t),className:J,value:ye,onChange:function(e){De(e.target.value)},disabled:S,readOnly:N}))))}));L.displayName="InputNumber";const _=L;var F=n(71929),U=n(19125),G=n(1815),K=n(91940),q=n(70011),V=n(61113),W=n(72866),$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const X=u.forwardRef((function(e,t){var n=u.useContext(F.E_),l=n.getPrefixCls,s=n.direction,f=u.useContext(G.Z),d=u.useState(!1),v=(0,i.Z)(d,2),g=v[0],y=v[1],b=u.useRef(null);u.useImperativeHandle(t,(function(){return b.current}));var h=e.className,E=e.size,w=e.disabled,Z=e.prefixCls,S=e.addonBefore,N=e.addonAfter,x=e.prefix,O=e.bordered,C=void 0===O||O,k=e.readOnly,I=e.status,R=e.controls,M=$(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),D=l("input-number",Z),P=(0,q.ri)(D,s),T=P.compactSize,j=P.compactItemClassnames,A=u.createElement(p,{className:"".concat(D,"-handler-up-inner")}),z=u.createElement(c.Z,{className:"".concat(D,"-handler-down-inner")}),H="boolean"===typeof R?R:void 0;"object"===(0,o.Z)(R)&&(A="undefined"===typeof R.upIcon?A:u.createElement("span",{className:"".concat(D,"-handler-up-inner")},R.upIcon),z="undefined"===typeof R.downIcon?z:u.createElement("span",{className:"".concat(D,"-handler-down-inner")},R.downIcon));var B=(0,u.useContext)(K.aM),L=B.hasFeedback,X=B.status,Q=B.isFormItemInput,J=B.feedbackIcon,Y=(0,W.F)(X,I),ee=T||E||f,te=u.useContext(U.Z),ne=null!==w&&void 0!==w?w:te,re=m()((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(D,"-lg"),"large"===ee),"".concat(D,"-sm"),"small"===ee),"".concat(D,"-rtl"),"rtl"===s),"".concat(D,"-borderless"),!C),"".concat(D,"-in-form-item"),Q),(0,W.Z)(D,Y),j,h),ae=u.createElement(_,(0,r.Z)({ref:b,disabled:ne,className:re,upHandler:A,downHandler:z,prefixCls:D,readOnly:k,controls:H},M));if(null!=x||L){var oe=m()("".concat(D,"-affix-wrapper"),(0,W.Z)("".concat(D,"-affix-wrapper"),Y,L),(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(D,"-affix-wrapper-focused"),g),"".concat(D,"-affix-wrapper-disabled"),e.disabled),"".concat(D,"-affix-wrapper-sm"),"small"===f),"".concat(D,"-affix-wrapper-lg"),"large"===f),"".concat(D,"-affix-wrapper-rtl"),"rtl"===s),"".concat(D,"-affix-wrapper-readonly"),k),"".concat(D,"-affix-wrapper-borderless"),!C),"".concat(h),!(S||N)&&h));ae=u.createElement("div",{className:oe,style:e.style,onMouseUp:function(){return b.current.focus()}},x&&u.createElement("span",{className:"".concat(D,"-prefix")},x),(0,V.Tm)(ae,{style:null,value:e.value,onFocus:function(t){var n;y(!0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:function(t){var n;y(!1),null===(n=e.onBlur)||void 0===n||n.call(e,t)}}),L&&u.createElement("span",{className:"".concat(D,"-suffix")},J))}if(null!=S||null!=N){var ie="".concat(D,"-group"),ce="".concat(ie,"-addon"),le=S?u.createElement("div",{className:ce},S):null,ue=N?u.createElement("div",{className:ce},N):null,se=m()("".concat(D,"-wrapper"),ie,(0,a.Z)({},"".concat(ie,"-rtl"),"rtl"===s)),fe=m()("".concat(D,"-group-wrapper"),(0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(D,"-group-wrapper-sm"),"small"===f),"".concat(D,"-group-wrapper-lg"),"large"===f),"".concat(D,"-group-wrapper-rtl"),"rtl"===s),(0,W.Z)("".concat(D,"-group-wrapper"),Y,L),h);ae=u.createElement("div",{className:fe,style:e.style},u.createElement("div",{className:se},le&&u.createElement(q.BR,null,u.createElement(K.Ux,{status:!0,override:!0},le)),(0,V.Tm)(ae,{style:null,disabled:ne}),ue&&u.createElement(q.BR,null,u.createElement(K.Ux,{status:!0,override:!0},ue))))}return ae}))},521:(e,t,n)=>{"use strict";n.d(t,{default:()=>ue});var r=n(87462),a=n(72791),o=n(4942),i=n(71002),c=n(29439),l=n(67575),u=n(1413);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};var f=n(54291),d=function(e,t){return a.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:s}))};d.displayName="CopyOutlined";const p=a.forwardRef(d);var v=n(31752),m=n(81694),g=n.n(m),y=n(76998),b=n.n(y),h=n(88829),E=n(85501),w=n(71605),Z=n(75179),S=n(41818),N=n(88834),x=n(71929),O=n(93486),C=n(11354),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},I={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};const R=a.forwardRef((function(e,t){var n=e.style,o=e.noStyle,i=e.disabled,c=k(e,["style","noStyle","disabled"]),l={};return o||(l=(0,r.Z)({},I)),i&&(l.pointerEvents="none"),l=(0,r.Z)((0,r.Z)({},l),n),a.createElement("div",(0,r.Z)({role:"button",tabIndex:0,ref:t},c,{onKeyDown:function(e){e.keyCode===C.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===C.Z.ENTER&&r&&r()},style:l}))}));var M=n(42748),D=n(35945);const P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};var T=function(e,t){return a.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:P}))};T.displayName="EnterOutlined";const j=a.forwardRef(T);var A=n(66920),z=n(61113);const H=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,i=e.style,l=e.direction,u=e.maxLength,s=e.autoSize,f=void 0===s||s,d=e.value,p=e.onSave,v=e.onCancel,m=e.onEnd,y=e.component,b=e.enterIcon,h=void 0===b?a.createElement(j,null):b,E=a.useRef(null),w=a.useRef(!1),Z=a.useRef(),S=a.useState(d),N=(0,c.Z)(S,2),x=N[0],O=N[1];a.useEffect((function(){O(d)}),[d]),a.useEffect((function(){if(E.current&&E.current.resizableTextArea){var e=E.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var k=function(){p(x.trim())},I=y?"".concat(t,"-").concat(y):"",R=g()(t,"".concat(t,"-edit-content"),(0,o.Z)({},"".concat(t,"-rtl"),"rtl"===l),r,I);return a.createElement("div",{className:R,style:i},a.createElement(A.Z,{ref:E,maxLength:u,value:x,onChange:function(e){var t=e.target;O(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;w.current||(Z.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,a=e.metaKey,o=e.shiftKey;Z.current!==t||w.current||n||r||a||o||(t===C.Z.ENTER?(k(),null===m||void 0===m||m()):t===C.Z.ESC&&v())},onCompositionStart:function(){w.current=!0},onCompositionEnd:function(){w.current=!1},onBlur:function(){k()},"aria-label":n,rows:1,autoSize:f}),null!==h?(0,z.Tm)(h,{className:"".concat(t,"-edit-content-confirm")}):null)};function B(e,t){return a.useMemo((function(){var n=!!e;return[n,(0,r.Z)((0,r.Z)({},t),n&&"object"===(0,i.Z)(e)?e:null)]}),[e])}const L=function(e,t){var n=a.useRef(!1);a.useEffect((function(){n.current?e():n.current=!0}),t)};var _=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const F=a.forwardRef((function(e,t){var n=e.prefixCls,i=e.component,c=void 0===i?"article":i,l=e.className,u=e.setContentRef,s=e.children,f=e.direction,d=_(e,["prefixCls","component","className","setContentRef","children","direction"]),p=a.useContext(x.E_),v=p.getPrefixCls,m=p.direction,y=null!==f&&void 0!==f?f:m,b=t;u&&(b=(0,N.sQ)(t,u));var h=v("typography",n),E=g()(h,(0,o.Z)({},"".concat(h,"-rtl"),"rtl"===y),l);return a.createElement(c,(0,r.Z)({className:E,ref:b},d),s)}));function U(e){var t=(0,i.Z)(e);return"string"===t||"number"===t}function G(e,t){for(var n=0,r=[],a=0;a<e.length;a+=1){if(n===t)return r;var o=e[a],i=n+(U(o)?String(o).length:1);if(i>t){var c=t-n;return r.push(String(o).slice(0,c)),r}r.push(o),n=i}return e}const K=function(e){var t=e.enabledMeasure,n=e.children,o=e.text,i=e.width,l=e.fontSize,u=e.rows,s=e.onEllipsis,f=a.useState([0,0,0]),d=(0,c.Z)(f,2),p=(0,c.Z)(d[0],3),v=p[0],m=p[1],g=p[2],y=d[1],b=a.useState(0),h=(0,c.Z)(b,2),Z=h[0],S=h[1],N=a.useState(0),x=(0,c.Z)(N,2),O=x[0],C=x[1],k=a.useRef(null),I=a.useRef(null),R=a.useMemo((function(){return(0,E.Z)(o)}),[o]),M=a.useMemo((function(){return function(e){var t=0;return e.forEach((function(e){U(e)?t+=String(e).length:t+=1})),t}(R)}),[R]),D=a.useMemo((function(){return t&&3===Z?n(G(R,m),m<M):n(R,!1)}),[t,Z,n,R,m,M]);(0,w.Z)((function(){t&&i&&l&&M&&(S(1),y([0,Math.ceil(M/2),M]))}),[t,i,l,o,M,u]),(0,w.Z)((function(){var e;1===Z&&C((null===(e=k.current)||void 0===e?void 0:e.offsetHeight)||0)}),[Z]),(0,w.Z)((function(){var e,t;if(O)if(1===Z)((null===(e=I.current)||void 0===e?void 0:e.offsetHeight)||0)<=u*O?(S(4),s(!1)):S(2);else if(2===Z)if(v!==g){var n=(null===(t=I.current)||void 0===t?void 0:t.offsetHeight)||0,r=v,a=g;v===g-1?a=v:n<=u*O?r=m:a=m;var o=Math.ceil((r+a)/2);y([r,o,a])}else S(3),s(!0)}),[Z,v,g,u,O]);var P={width:i,whiteSpace:"normal",margin:0,padding:0},T=function(e,t,n){return a.createElement("span",{"aria-hidden":!0,ref:t,style:(0,r.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(l/2)},n)},e)};return a.createElement(a.Fragment,null,D,t&&3!==Z&&4!==Z&&a.createElement(a.Fragment,null,T("lg",k,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===Z?T(n(R,!1),I,P):function(e,t){var r=G(R,e);return T(n(r,!0),t,P)}(m,I)))};const q=function(e){var t=e.enabledEllipsis,n=e.isEllipsis,o=e.children,i=e.tooltipProps;return(null===i||void 0===i?void 0:i.title)&&t?a.createElement(D.Z,(0,r.Z)({open:!!n&&void 0},i),o):o};var V=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function W(e,t,n){return!0===e||void 0===e?t:e||n&&t}function $(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}var X=a.forwardRef((function(e,t){var n,u,s,f=e.prefixCls,d=e.className,m=e.style,y=e.type,C=e.disabled,k=e.children,I=e.ellipsis,P=e.editable,T=e.copyable,j=e.component,A=e.title,z=V(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),_=a.useContext(x.E_),U=_.getPrefixCls,G=_.direction,X=(0,O.E)("Text")[0],Q=a.useRef(null),J=a.useRef(null),Y=U("typography",f),ee=(0,S.Z)(z,["mark","code","delete","underline","strong","keyboard","italic"]),te=B(P),ne=(0,c.Z)(te,2),re=ne[0],ae=ne[1],oe=(0,Z.Z)(!1,{value:ae.editing}),ie=(0,c.Z)(oe,2),ce=ie[0],le=ie[1],ue=ae.triggerType,se=void 0===ue?["icon"]:ue,fe=function(e){var t;e&&(null===(t=ae.onStart)||void 0===t||t.call(ae)),le(e)};L((function(){var e;ce||null===(e=J.current)||void 0===e||e.focus()}),[ce]);var de=function(e){null===e||void 0===e||e.preventDefault(),fe(!0)},pe=B(T),ve=(0,c.Z)(pe,2),me=ve[0],ge=ve[1],ye=a.useState(!1),be=(0,c.Z)(ye,2),he=be[0],Ee=be[1],we=a.useRef(),Ze={};ge.format&&(Ze.format=ge.format);var Se=function(){window.clearTimeout(we.current)},Ne=function(e){var t;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),b()(ge.text||String(k)||"",Ze),Ee(!0),Se(),we.current=window.setTimeout((function(){Ee(!1)}),3e3),null===(t=ge.onCopy)||void 0===t||t.call(ge,e)};a.useEffect((function(){return Se}),[]);var xe=a.useState(!1),Oe=(0,c.Z)(xe,2),Ce=Oe[0],ke=Oe[1],Ie=a.useState(!1),Re=(0,c.Z)(Ie,2),Me=Re[0],De=Re[1],Pe=a.useState(!1),Te=(0,c.Z)(Pe,2),je=Te[0],Ae=Te[1],ze=a.useState(!1),He=(0,c.Z)(ze,2),Be=He[0],Le=He[1],_e=a.useState(!1),Fe=(0,c.Z)(_e,2),Ue=Fe[0],Ge=Fe[1],Ke=a.useState(!0),qe=(0,c.Z)(Ke,2),Ve=qe[0],We=qe[1],$e=B(I,{expandable:!1}),Xe=(0,c.Z)($e,2),Qe=Xe[0],Je=Xe[1],Ye=Qe&&!je,et=Je.rows,tt=void 0===et?1:et,nt=a.useMemo((function(){return!Ye||void 0!==Je.suffix||Je.onEllipsis||Je.expandable||re||me}),[Ye,Je,re,me]);(0,w.Z)((function(){Qe&&!nt&&(ke((0,M.G)("webkitLineClamp")),De((0,M.G)("textOverflow")))}),[nt,Qe]);var rt=a.useMemo((function(){return!nt&&(1===tt?Me:Ce)}),[nt,Me,Ce]),at=Ye&&(rt?Ue:Be),ot=Ye&&1===tt&&rt,it=Ye&&tt>1&&rt,ct=function(e){var t;Ae(!0),null===(t=Je.onExpand)||void 0===t||t.call(Je,e)},lt=a.useState(0),ut=(0,c.Z)(lt,2),st=ut[0],ft=ut[1],dt=a.useState(0),pt=(0,c.Z)(dt,2),vt=pt[0],mt=pt[1],gt=function(e){var t;Le(e),Be!==e&&(null===(t=Je.onEllipsis)||void 0===t||t.call(Je,e))};a.useEffect((function(){var e=Q.current;if(Qe&&rt&&e){var t=it?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;Ue!==t&&Ge(t)}}),[Qe,rt,k,it,Ve]),a.useEffect((function(){var e=Q.current;if("undefined"!==typeof IntersectionObserver&&e&&rt&&Ye){var t=new IntersectionObserver((function(){We(!!e.offsetParent)}));return t.observe(e),function(){t.disconnect()}}}),[rt,Ye]);var yt={};yt=!0===Je.tooltip?{title:null!==(n=ae.text)&&void 0!==n?n:k}:a.isValidElement(Je.tooltip)?{title:Je.tooltip}:"object"===(0,i.Z)(Je.tooltip)?(0,r.Z)({title:null!==(u=ae.text)&&void 0!==u?u:k},Je.tooltip):{title:Je.tooltip};var bt=a.useMemo((function(){var e=function(e){return["string","number"].includes((0,i.Z)(e))};if(Qe&&!rt)return e(ae.text)?ae.text:e(k)?k:e(A)?A:e(yt.title)?yt.title:void 0}),[Qe,rt,A,yt.title,at]);if(ce)return a.createElement(H,{value:null!==(s=ae.text)&&void 0!==s?s:"string"===typeof k?k:"",onSave:function(e){var t;null===(t=ae.onChange)||void 0===t||t.call(ae,e),fe(!1)},onCancel:function(){var e;null===(e=ae.onCancel)||void 0===e||e.call(ae),fe(!1)},onEnd:ae.onEnd,prefixCls:Y,className:d,style:m,direction:G,component:j,maxLength:ae.maxLength,autoSize:ae.autoSize,enterIcon:ae.enterIcon});var ht=function(){var e,t=Je.expandable,n=Je.symbol;return t?(e=n||X.expand,a.createElement("a",{key:"expand",className:"".concat(Y,"-expand"),onClick:ct,"aria-label":X.expand},e)):null},Et=function(){if(re){var e=ae.icon,t=ae.tooltip,n=(0,E.Z)(t)[0]||X.edit,r="string"===typeof n?n:"";return se.includes("icon")?a.createElement(D.Z,{key:"edit",title:!1===t?"":n},a.createElement(R,{ref:J,className:"".concat(Y,"-edit"),onClick:de,"aria-label":r},e||a.createElement(v.Z,{role:"button"}))):null}},wt=function(){if(me){var e=ge.tooltips,t=ge.icon,n=$(e),r=$(t),o=he?W(n[1],X.copied):W(n[0],X.copy),i=he?X.copied:X.copy,c="string"===typeof o?o:i;return a.createElement(D.Z,{key:"copy",title:o},a.createElement(R,{className:g()("".concat(Y,"-copy"),he&&"".concat(Y,"-copy-success")),onClick:Ne,"aria-label":c},he?W(r[1],a.createElement(l.Z,null),!0):W(r[0],a.createElement(p,null),!0)))}};return a.createElement(h.Z,{onResize:function(e,t){var n,r=e.offsetWidth;ft(r),mt(parseInt(null===(n=window.getComputedStyle)||void 0===n?void 0:n.call(window,t).fontSize,10)||0)},disabled:!Ye||rt},(function(n){return a.createElement(q,{tooltipProps:yt,enabledEllipsis:Ye,isEllipsis:at},a.createElement(F,(0,r.Z)({className:g()((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(Y,"-").concat(y),y),"".concat(Y,"-disabled"),C),"".concat(Y,"-ellipsis"),Qe),"".concat(Y,"-single-line"),Ye&&1===tt),"".concat(Y,"-ellipsis-single-line"),ot),"".concat(Y,"-ellipsis-multiple-line"),it),d),prefixCls:f,style:(0,r.Z)((0,r.Z)({},m),{WebkitLineClamp:it?tt:void 0}),component:j,ref:(0,N.sQ)(n,Q,t),direction:G,onClick:se.includes("text")?de:void 0,"aria-label":null===bt||void 0===bt?void 0:bt.toString(),title:A},ee),a.createElement(K,{enabledMeasure:Ye&&!rt,text:k,rows:tt,width:st,fontSize:vt,onEllipsis:gt},(function(t,n){var r=t;t.length&&n&&bt&&(r=a.createElement("span",{key:"show-content","aria-hidden":!0},r));var o=function(e,t){var n=e.mark,r=e.code,o=e.underline,i=e.delete,c=e.strong,l=e.keyboard,u=e.italic,s=t;function f(e,t){e&&(s=a.createElement(t,{},s))}return f(c,"strong"),f(o,"u"),f(i,"del"),f(r,"code"),f(n,"mark"),f(l,"kbd"),f(u,"i"),s}(e,a.createElement(a.Fragment,null,r,function(e){return[e&&a.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),Je.suffix,(t=e,[t&&ht(),Et(),wt()])];var t}(n)));return o}))))}))}));const Q=X;var J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const Y=a.forwardRef((function(e,t){var n=e.ellipsis,o=e.rel,i=J(e,["ellipsis","rel"]),c=(0,r.Z)((0,r.Z)({},i),{rel:void 0===o&&"_blank"===i.target?"noopener noreferrer":o});return delete c.navigate,a.createElement(Q,(0,r.Z)({},c,{ref:t,ellipsis:!!n,component:"a"}))}));const ee=a.forwardRef((function(e,t){return a.createElement(Q,(0,r.Z)({ref:t},e,{component:"div"}))}));var te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ne=function(e,t){var n=e.ellipsis,o=te(e,["ellipsis"]),c=a.useMemo((function(){return n&&"object"===(0,i.Z)(n)?(0,S.Z)(n,["expandable","rows"]):n}),[n]);return a.createElement(Q,(0,r.Z)({ref:t},o,{ellipsis:c,component:"span"}))};const re=a.forwardRef(ne);var ae=n(79393),oe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ie=(0,ae.a)(1,2,3,4,5);const ce=a.forwardRef((function(e,t){var n,o=e.level,i=void 0===o?1:o,c=oe(e,["level"]);return n=ie.includes(i)?"h".concat(i):"h1",a.createElement(Q,(0,r.Z)({ref:t},c,{component:n}))}));var le=F;le.Text=re,le.Link=Y,le.Title=ce,le.Paragraph=ee;const ue=le},76998:(e,t,n)=>{"use strict";var r=n(42458),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,i,c,l,u,s=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),c.selectNodeContents(u),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),u&&document.body.removeChild(u),i()}return s}},42748:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var r=n(14937),a=function(e){if((0,r.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},o=function(e,t){if(!a(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r};function i(e,t){return Array.isArray(e)||void 0===t?a(e):o(e,t)}},42458:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=102.df50d71f.chunk.js.map