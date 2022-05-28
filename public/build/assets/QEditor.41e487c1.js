var qe=Object.defineProperty,Le=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var ae=(e,t,o)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,T=(e,t)=>{for(var o in t||(t={}))Ee.call(t,o)&&ae(e,o,t[o]);if(re)for(var o of re(t))$e.call(t,o)&&ae(e,o,t[o]);return e},z=(e,t)=>Le(e,Oe(t));import{n as He,u as ve,af as Be,ag as Ne,ah as _e,r as R,i as y,ai as Re,aj as je,ak as Fe,al as Ae,am as De,w as ne,z as se,h as ue,f as ce,$ as Ue,k as u,T as Me,j as ye,q as ke,s as be,Q as ie,av as Qe,aT as Te,ad as de,P as Ie,v as Ke,x as We,aU as Ge,y as Xe,aV as Je,t as Ye,aq as Ze}from"./main.e2e7f622.js";import{u as Ve,v as fe,a as et,b as tt,c as ot,r as he,s as nt,p as pe,d as it,Q as lt}from"./QBtnDropdown.357cb2c4.js";import{c as ge}from"./selection.71fa7cd7.js";import{Q as me,a as rt}from"./QItem.b1c502a2.js";import{u as at,a as st,b as ut}from"./use-fullscreen.be8760eb.js";function Ce(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const l=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,r=l.display;return r==="block"||r==="table"?e:Ce(e.parentNode)}function oe(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Se(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let l=0;t.count!==0&&l<e.childNodes.length;l++)o=Se(e.childNodes[l],t,o);return o}const ct=/^https?:\/\//;class dt{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(oe(t.anchorNode,this.el,!0)&&oe(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length>0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?Ce(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),l=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),l.removeAllRanges(),l.addRange(o)):(l.selectAllChildren(this.el),l.collapseToEnd())}savePosition(){let t=-1,o;const l=document.getSelection(),r=this.el.parentNode;if(l.focusNode&&oe(l.focusNode,r))for(o=l.focusNode,t=l.focusOffset;o&&o!==r;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),l=Se(this.el,{count:this.savedPos});l&&(l.collapse(!1),o.removeAllRanges(),o.addRange(l))}}hasParent(t,o){const l=o?this.parent:this.blockParent;return l!==null?l.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,l=this.parent){return l===null?!1:t.includes(l.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,l.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const l=document.queryCommandValue(t);return l===`"${o}"`||l===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const r=document.queryCommandState(t);return o!==void 0?r===o:r}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,l=He){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){l();const r=window.open();r.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),r.print(),r.close();return}else if(t==="link"){const r=this.getParentAttribute("href");if(r===null){const c=this.selectWord(this.selection),s=c?c.toString():"";if(!s.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=ct.test(s)?s:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(c.getRangeAt(0))}else this.eVm.editLinkUrl.value=r,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),l();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),l();return}document.execCommand(t,!1,o),l()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const l=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const r=t.focusNode,c=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",l[0],"character"),t.modify("move",l[1],"word"),t.extend(r,c),t.modify("extend",l[1],"character"),t.modify("extend",l[0],"word"),t}}var ft=ve({name:"QTooltip",inheritAttrs:!1,props:z(T(T(T({},Ve),Be),Ne),{maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:fe},self:{type:String,default:"top middle",validator:fe},offset:{type:Array,default:()=>[14,14],validator:et},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}}),emits:[..._e],setup(e,{slots:t,emit:o,attrs:l}){let r,c;const s=ye(),{proxy:{$q:h}}=s,v=R(null),x=R(!1),k=y(()=>pe(e.anchor,h.lang.rtl)),C=y(()=>pe(e.self,h.lang.rtl)),d=y(()=>e.persistent!==!0),{registerTick:f,removeTick:P}=Re(),{registerTimeout:S,removeTimeout:O}=je(),{transition:q,transitionStyle:j}=Fe(e,x),{localScrollTarget:B,changeScrollEvent:I,unconfigureScrollTarget:N}=tt(e,Q),{anchorEl:b,canShow:g,anchorEvents:$}=ot({showing:x,configureAnchorEl:Z}),{show:K,hide:F}=Ae({showing:x,canShow:g,handleShow:G,handleHide:X,hideOnRouteChange:d,processOnMount:!0});Object.assign($,{delayShow:J,delayHide:Y});const{showPortal:D,hidePortal:U,renderPortal:W}=De(s,v,ee);if(h.platform.is.mobile===!0){const p={anchorEl:b,innerRef:v,onClickOutside(w){return F(w),w.target.classList.contains("q-dialog__backdrop")&&be(w),!0}},A=y(()=>e.modelValue===null&&e.persistent!==!0&&x.value===!0);ne(A,w=>{(w===!0?it:he)(p)}),se(()=>{he(p)})}function G(p){P(),O(),D(),f(()=>{c=new MutationObserver(()=>H()),c.observe(v.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),H(),Q()}),r===void 0&&(r=ne(()=>h.screen.width+"|"+h.screen.height+"|"+e.self+"|"+e.anchor+"|"+h.lang.rtl,H)),S(()=>{D(!0),o("show",p)},e.transitionDuration)}function X(p){P(),O(),U(),M(),S(()=>{U(!0),o("hide",p)},e.transitionDuration)}function M(){c!==void 0&&(c.disconnect(),c=void 0),r!==void 0&&(r(),r=void 0),N(),ue($,"tooltipTemp")}function H(){const p=v.value;b.value===null||!p||nt({el:p,offset:e.offset,anchorEl:b.value,anchorOrigin:k.value,selfOrigin:C.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(p){if(h.platform.is.mobile===!0){ge(),document.body.classList.add("non-selectable");const A=b.value,w=["touchmove","touchcancel","touchend","click"].map(_=>[A,_,"delayHide","passiveCapture"]);ce($,"tooltipTemp",w)}S(()=>{K(p)},e.delay)}function Y(p){O(),h.platform.is.mobile===!0&&(ue($,"tooltipTemp"),ge(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),S(()=>{F(p)},e.hideDelay)}function Z(){if(e.noParentEvent===!0||b.value===null)return;const p=h.platform.is.mobile===!0?[[b.value,"touchstart","delayShow","passive"]]:[[b.value,"mouseenter","delayShow","passive"],[b.value,"mouseleave","delayHide","passive"]];ce($,"anchor",p)}function Q(){if(b.value!==null||e.scrollTarget!==void 0){B.value=Ue(b.value,e.scrollTarget);const p=e.noParentEvent===!0?H:F;I(B.value,p)}}function V(){return x.value===!0?u("div",z(T({},l),{ref:v,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",l.class],style:[l.style,j.value],role:"complementary"}),ke(t.default)):null}function ee(){return u(Me,{name:q.value,appear:!0},V)}return se(M),Object.assign(s.proxy,{updatePosition:H}),W}});function we(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function le(e){return u("div",{class:"q-editor__toolbar-group"},e)}function xe(e,t,o,l=!1){const r=l||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),c=[];if(t.tip&&e.$q.platform.is.desktop){const s=t.key?u("div",[u("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;c.push(u(ft,{delay:1e3},()=>[u("div",{innerHTML:t.tip}),s]))}return u(ie,z(T({},e.buttonProps.value),{icon:t.icon!==null?t.icon:void 0,color:r?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:r&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(s){o&&o(),we(s,t,e)}}),()=>c)}function ht(e,t){const o=t.list==="only-icons";let l=t.label,r=t.icon!==null?t.icon:void 0,c,s;function h(){x.component.proxy.hide()}if(o)s=t.options.map(k=>{const C=k.type===void 0?e.caret.is(k.cmd,k.param):!1;return C&&(l=k.tip,r=k.icon!==null?k.icon:void 0),xe(e,k,h,C)}),c=e.toolbarBackgroundClass.value,s=[le(s)];else{const k=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,C=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,d=t.list==="no-icons";s=t.options.map(f=>{const P=f.disable?f.disable(e):!1,S=f.type===void 0?e.caret.is(f.cmd,f.param):!1;S&&(l=f.tip,r=f.icon!==null?f.icon:void 0);const O=f.htmlTip;return u(rt,{active:S,activeClass:k,clickable:!0,disable:P,dense:!0,onClick(q){h(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),we(q,f,e)}},()=>[d===!0?null:u(me,{class:S?k:C,side:!0},()=>u(Ie,{name:f.icon!==null?f.icon:void 0})),u(me,O?()=>u("div",{class:"text-no-wrap",innerHTML:f.htmlTip}):f.tip?()=>u("div",{class:"text-no-wrap"},f.tip):void 0)])}),c=[e.toolbarBackgroundClass.value,C]}const v=t.highlight&&l!==t.label,x=u(lt,z(T({},e.buttonProps.value),{noCaps:!0,noWrap:!0,color:v?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:v&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:l,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:r,contentClass:c}),()=>s);return x}function pt(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>le(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?ke(e.slots[o.slot]):o.type==="dropdown"?ht(e,o):xe(e,o))))}function gt(e,t,o,l={}){const r=Object.keys(l);if(r.length===0)return{};const c={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return r.forEach(s=>{const h=l[s];c[s]={cmd:"fontName",param:h,icon:o,tip:h,htmlTip:`<font face="${h}">${h}</font>`}}),c}function mt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const l=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[u("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),u("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:r=>{Qe(r),o=r.target.value},onKeydown:r=>{if(Te(r)!==!0)switch(r.keyCode){case 13:return de(r),l();case 27:de(r),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),le([u(ie,z(T({key:"qedt_btm_rem",tabindex:-1},e.buttonProps.value),{label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}})),u(ie,z(T({key:"qedt_btm_upd"},e.buttonProps.value),{label:e.$q.lang.label.update,noCaps:!0,onClick:l}))])]}}var St=ve({name:"QEditor",props:z(T(T({},Ke),at),{modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean}),emits:[...st,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur"],setup(e,{slots:t,emit:o,attrs:l}){const{proxy:r,vnode:c}=ye(),{$q:s}=r,h=We(e,s),{inFullscreen:v,toggleFullscreen:x}=ut(),k=Ge(l,c),C=R(null),d=R(null),f=R(null),P=R(!1),S=y(()=>!e.readonly&&!e.disable);let O,q,j=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),O=window.getComputedStyle(document.body).fontFamily;const B=y(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),I=y(()=>{const n=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!S.value,size:"sm"}}),N=y(()=>{const n=s.lang.editor,i=s.iconSet.editor;return{bold:{cmd:"bold",icon:i.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:i.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:i.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:i.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:i.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:i.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:i.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:i.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:a=>a.caret&&!a.caret.can("link"),icon:i.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:i.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:i.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:i.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:i.left,tip:n.left},center:{cmd:"justifyCenter",icon:i.center,tip:n.center},right:{cmd:"justifyRight",icon:i.right,tip:n.right},justify:{cmd:"justifyFull",icon:i.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:i.print,tip:n.print,key:80},outdent:{type:"no-state",disable:a=>a.caret&&!a.caret.can("outdent"),cmd:"outdent",icon:i.outdent,tip:n.outdent},indent:{type:"no-state",disable:a=>a.caret&&!a.caret.can("indent"),cmd:"indent",icon:i.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:i.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:i.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:i.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:i.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:i.heading1||i.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:i.heading2||i.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:i.heading3||i.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:i.heading4||i.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:i.heading5||i.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:i.heading6||i.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:i.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:i.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:i.size1||i.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:i.size2||i.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:i.size3||i.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:i.size4||i.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:i.size5||i.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:i.size6||i.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:i.size7||i.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),b=y(()=>{const n=e.definitions||{},i=e.definitions||e.fonts?Je(!0,{},N.value,n,gt(O,s.lang.editor.defaultFont,s.iconSet.editor.font,e.fonts)):N.value;return e.toolbar.map(a=>a.map(m=>{if(m.options)return{type:"dropdown",icon:m.icon,label:m.label,size:"sm",dense:!0,fixedLabel:m.fixedLabel,fixedIcon:m.fixedIcon,highlight:m.highlight,list:m.list,options:m.options.map(ze=>i[ze])};const L=i[m];return L?L.type==="no-state"||n[m]&&(L.cmd===void 0||N.value[L.cmd]&&N.value[L.cmd].type==="no-state")?L:Object.assign({type:"toggle"},L):{type:"slot",slot:m}}))}),g={$q:s,props:e,slots:t,inFullscreen:v,toggleFullscreen:x,runCmd:_,isViewingSource:P,editLinkUrl:f,toolbarBackgroundClass:B,buttonProps:I,contentRef:d,buttons:b,setContent:w};ne(()=>e.modelValue,n=>{j!==n&&(j=n,w(n,!0))});const $=y(()=>e.toolbar&&e.toolbar.length>0),K=y(()=>{const n={},i=a=>{a.key&&(n[a.key]={cmd:a.cmd,param:a.param})};return b.value.forEach(a=>{a.forEach(m=>{m.options?m.options.forEach(i):i(m)})}),n}),F=y(()=>v.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),D=y(()=>`q-editor q-editor--${P.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(v.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(h.value===!0?" q-editor--dark q-dark":"")),U=y(()=>[e.contentClass,"q-editor__content",{col:v.value,"overflow-auto":v.value||e.maxHeight}]),W=y(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function G(){if(d.value!==null){const n=`inner${P.value===!0?"Text":"HTML"}`,i=d.value[n];i!==e.modelValue&&(j=i,o("update:modelValue",i))}}function X(n){if(o("keydown",n),n.ctrlKey!==!0||Te(n)===!0){E();return}const i=n.keyCode,a=K.value[i];if(a!==void 0){const{cmd:m,param:L}=a;be(n),_(m,L,!1)}}function M(n){E(),o("click",n)}function H(n){if(d.value!==null){const{scrollTop:i,scrollHeight:a}=d.value;q=a-i}g.caret.save(),o("blur",n)}function J(n){Ye(()=>{d.value!==null&&q!==void 0&&(d.value.scrollTop=d.value.scrollHeight-q)}),o("focus",n)}function Y(n){const i=C.value;if(i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)){const a=`inner${P.value===!0?"Text":"HTML"}`;g.caret.restorePosition(d.value[a].length),E()}}function Z(n){const i=C.value;i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)&&(g.caret.savePosition(),E())}function Q(){q=void 0}function V(n){g.caret.save(),o("mouseup",n)}function ee(){q=void 0}function p(n){g.caret.save(),o("keyup",n)}function A(n){g.caret.save(),o("touchend",n)}function w(n,i){if(d.value!==null){i===!0&&g.caret.savePosition();const a=`inner${P.value===!0?"Text":"HTML"}`;d.value[a]=n,i===!0&&(g.caret.restorePosition(d.value[a].length),E())}}function _(n,i,a=!0){te(),g.caret.restore(),g.caret.apply(n,i,()=>{te(),g.caret.save(),a&&E()})}function E(){setTimeout(()=>{f.value=null,r.$forceUpdate()},1)}function te(){Ze(()=>{d.value!==null&&d.value.focus({preventScroll:!0})})}function Pe(){return d.value}return Object.assign(r,{runCmd:_,refreshToolbar:E,focus:te,getContentEl:Pe}),Xe(()=>{g.caret=r.caret=new dt(d.value,g),w(e.modelValue),E()}),()=>{let n;if($.value){const i=[u("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+B.value},pt(g))];f.value!==null&&i.push(u("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+B.value},mt(g))),n=u("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},i)}return u("div",z(T({ref:C,class:D.value,style:{height:v.value===!0?"100%":null}},W.value),{onFocusin:Y,onFocusout:Z}),[n,u("div",z(T({ref:d,style:F.value,class:U.value,contenteditable:S.value,placeholder:e.placeholder},k.listeners.value),{onInput:G,onKeydown:X,onClick:M,onBlur:H,onFocus:J,onMousedown:Q,onTouchstartPassive:ee,onMouseup:V,onKeyup:p,onTouchend:A}))])}}});export{St as Q};
