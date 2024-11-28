/*! For license information please see link-format-block.js.LICENSE.txt */
(()=>{var e={184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=o.apply(null,n);l&&e.push(l)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,r=window.wp.components,o=window.wp.richText,i=window.wp.url,l=window.wp.blockEditor,s=window.wp.htmlEntities,a=window.wp.primitives,c=(0,e.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(a.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),u=(0,e.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(a.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),d=window.lodash,p=(e,t,n)=>{let r,o=0;const i={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},l=function(e){return(e=(e=(""+e).replace(/[_\-+]/g,".")).replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,".")).length?e.split("."):[-8]},s=function(e){return e?isNaN(e)?i[e]||-7:parseInt(e,10):0};e=l(e),t=l(t);const a=Math.max(e.length,t.length);for(r=0;r<a;r++)if(e[r]!==t[r]){if(e[r]=s(e[r]),t[r]=s(t[r]),e[r]<t[r]){o=-1;break}if(e[r]>t[r]){o=1;break}}if(!n)return o;switch(n){case">":case"gt":return 0<o;case">=":case"ge":return 0<=o;case"<=":case"le":return 0>=o;case"===":case"=":case"eq":return 0===o;case"<>":case"!==":case"ne":return 0!==o;case"":case"<":case"lt":return 0>o;default:return null}};var m=n(184),h=n.n(m);const g=window.wp.compose,k=window.wp.data,f=window.wp.dom,w=window.wp.hooks,b=[{id:"opensInNewTab",title:(0,t.__)("Open in new tab"),type:"ToggleControl"},{id:"nofollow",title:(0,t.__)('Add "nofollow" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"sponsored",title:(0,t.__)('Add "sponsored" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"ugc",title:(0,t.__)('Add "ugc" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"title",title:(0,t.__)("Add title attribute to link","all-in-one-seo-pack"),type:"TextControl"}];class v extends e.Component{constructor(e){super(e),this.state={textValue:e.value.title}}componentDidUpdate(e,t){t.textValue===this.state.textValue&&e.value.title===this.props.value.title&&e.value.title!==t.textValue&&this.setState({textValue:e.value.title})}componentWillUnmount(){this.state.textValue&&this.state.textValue!==this.props.value.title&&this.props.onChange({...this.props.value,title:this.state.textValue})}render(){const{value:n,onChange:o}=this.props,i=b;if(!i||!i.length)return null;const l=e=>t=>{o({...n,[e.id]:t})},s=(e,t)=>{n.url?o({...n,[t.id]:e.target.value}):this.setState({textValue:e.target.value})},a=i.map((t=>"TextControl"===t.type?(0,e.createElement)(r.TextControl,{"data-aioseop":"true",className:"block-editor-link-control__setting aioseo-link-title",key:t.id,label:t.title,onChange:e=>{this.setState({textValue:e})},onBlur:e=>{s(e,t)},onKeyDown:e=>{13===e.keyCode&&(s(e,t),e.preventDefault(),e.stopPropagation())},value:this.state.textValue}):"ToggleControl"===t.type?(0,e.createElement)(r.ToggleControl,{className:"block-editor-link-control__setting",key:t.id,label:t.title,onChange:l(t),checked:!!n&&!!n[t.id]}):null));return(0,e.createElement)("fieldset",{className:"block-editor-link-control__settings"},(0,e.createElement)(r.VisuallyHidden,{as:"legend"},(0,t.__)("Currently selected link settings")),a)}}const _=v;function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function E(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const x=function(t){var n=t.icon,r=t.size,o=void 0===r?24:r,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["icon","size"]);return(0,e.cloneElement)(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:o,height:o},i))},C=(0,e.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,e.createElement)(a.Path,{d:"M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"})),N=({itemProps:n,suggestion:o,isSelected:l=!1,onClick:s,isURL:a=!1,searchTerm:c=""})=>(0,e.createElement)(r.Button,{...n,onClick:s,className:h()("block-editor-link-control__search-item",{"is-selected":l,"is-url":a,"is-entity":!a})},a&&(0,e.createElement)(x,{className:"block-editor-link-control__search-item-icon",icon:C}),(0,e.createElement)("span",{className:"block-editor-link-control__search-item-header"},(0,e.createElement)("span",{className:"block-editor-link-control__search-item-title"},(0,e.createElement)(r.TextHighlight,{text:o.title,highlight:c})),(0,e.createElement)("span",{"aria-hidden":!a,className:"block-editor-link-control__search-item-info"},!a&&((0,i.safeDecodeURI)(o.url)||""),a&&(0,t.__)("Press ENTER to add this link"))),o.type&&(0,e.createElement)("span",{className:"block-editor-link-control__search-item-type"},o.type)),P=(0,e.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,e.createElement)(a.Path,{d:"M16 4h2v9H7v3l-5-4 5-4v3h9V4z"})),L=window.wp,T=L.blockEditor?.URLInput||L.editor.URLInput,R=({value:n,onChange:o,onSelect:i,renderSuggestions:l,fetchSuggestions:s,showInitialSuggestions:a,errorMessage:c})=>{const[u,d]=(0,e.useState)();return(0,e.createElement)("form",{onSubmit:function(e){e.preventDefault(),i(u||{url:n})}},(0,e.createElement)("div",{className:"block-editor-link-control__search-input-wrapper"},(0,e.createElement)(T,{className:"block-editor-link-control__search-input",value:n,onChange:(e,t)=>{o(e),d(t)},placeholder:(0,t.__)("Search or type url"),__experimentalRenderSuggestions:l,__experimentalFetchLinkSuggestions:s,__experimentalHandleURLSuggestions:!0,__experimentalShowInitialSuggestions:a,onSubmit:()=>i(u||{url:n})}),(0,e.createElement)("div",{className:"block-editor-link-control__search-actions"},(0,e.createElement)(r.Button,{type:"submit",label:(0,t.__)("Submit"),icon:P,className:"block-editor-link-control__search-submit"}))),c&&(0,e.createElement)(r.Notice,{className:"block-editor-link-control__search-error",status:"error",isDismissible:!1},c))},O=({searchTerm:n,onClick:o,itemProps:i,isSelected:l})=>n?(0,e.createElement)(r.Button,{...i,className:h()("block-editor-link-control__search-create block-editor-link-control__search-item",{"is-selected":l}),onClick:o},(0,e.createElement)(r.Icon,{className:"block-editor-link-control__search-item-icon",icon:"insert"}),(0,e.createElement)("span",{className:"block-editor-link-control__search-item-header"},(0,e.createElement)("span",{className:"block-editor-link-control__search-item-title"},(0,e.createInterpolateElement)((0,t.sprintf)((0,t.__)("New page: <mark>%1$s</mark>"),n),{mark:(0,e.createElement)("mark",null)})))):null,{Slot:H,Fill:A}=(0,r.createSlotFill)("BlockEditorLinkControlViewer"),V="__CREATE__";function I({value:n,settings:o,selectedText:l,onChange:s=d.noop,showSuggestions:a=!0,showInitialSuggestions:c,forceIsEditingLink:u,createSuggestion:p}){const m=(0,e.useRef)(),b=(0,e.useRef)(),v=(0,e.useRef)(),y=(0,g.useInstanceId)(I),[E,S]=(0,e.useState)(n&&n.url||""),[x,C]=(0,e.useState)(void 0!==u?u:!n||!n.url),[P,L]=(0,e.useState)(!1),[T,A]=(0,e.useState)(null),F=(0,e.useRef)(!1),{fetchSearchSuggestions:z}=(0,k.useSelect)((e=>{const{getSettings:t}=e("core/block-editor");return{fetchSearchSuggestions:t().__experimentalFetchLinkSuggestions}}),[]),j=n&&(0,i.filterURLForDisplay)((0,i.safeDecodeURI)(n.url))||"";(0,e.useEffect)((()=>{void 0!==u&&u!==x&&C(u)}),[u]),(0,e.useEffect)((()=>{F.current&&v.current&&!v.current.contains(document.activeElement)&&(f.focus.focusable.find(v.current)[0]||v.current).focus(),F.current=!1}),[x]),(0,e.useEffect)((()=>()=>{m.current&&m.current.cancel(),b.current&&b.current.cancel()}),[]);const M=e=>{let t="URL";const n=(0,i.getProtocol)(e)||"";return n.includes("mailto")&&(t="mailto"),n.includes("tel")&&(t="tel"),(0,d.startsWith)(e,"#")&&(t="internal"),Promise.resolve([{id:e,title:e,url:"URL"===t?(0,i.prependHTTP)(e):e,type:t}])};function U(){F.current=!!v.current&&v.current.contains(document.activeElement),C(!1)}function D(e){const t=(0,d.startsWith)(e,"#");return(0,i.isURL)(e)||e&&e.includes("www.")||t}const B=(0,e.useCallback)(((e,t)=>a?D(e)?M(e):(async(e,t)=>{let n=await Promise.all([z(e,{...t.isInitialSuggestions?{perPage:3}:{}}),M(e)]);return n=e.includes(" ")||t.isInitialSuggestions?n[0]:n[0].concat(n[1]),D(e)?n:n.concat({title:e,url:e,type:V})})(e,t):Promise.resolve([])),[M,z]),W=async e=>{L(!0),A(null);try{b.current=(e=>{let t=!1;return{promise:new Promise(((n,r)=>{e.then((e=>t?r({isCanceled:!0}):n(e)),(e=>r(t?{isCanceled:!0}:e)))})),cancel(){t=!0}}})(Promise.resolve(p(e)));const t=await b.current.promise;L(!1),t?(s(t),U()):C(!0)}catch(e){if(e&&e.isCanceled)return;A(e.message||(0,t.__)("An unknown error occurred during creation. Please try again.")),L(!1),C(!0)}},$=(0,e.useMemo)((()=>({url:n&&n.url})),[n&&n.url]);return(0,e.createElement)("div",{tabIndex:-1,ref:v,className:"block-editor-link-control aioseo-link-format"},P&&(0,e.createElement)("div",{className:"block-editor-link-control__loading"},(0,e.createElement)(r.Spinner,null)," ",(0,t.__)("Creating"),"…"),(x||!n)&&!P&&(0,e.createElement)(R,{value:E,onChange:(e="")=>{S(e)},onSelect:async e=>{V===e.type?await W(E):(((e,t={})=>{C(!1),s({...t,...e}),(0,w.doAction)("aioseo-link-format-link-added",{...n,...e,title:null})})(e,n),U())},renderSuggestions:a?({suggestionsListProps:o,buildSuggestionItemProps:i,suggestions:a,selectedSuggestion:c,isLoading:u,isInitialSuggestions:d})=>{const m=h()("block-editor-link-control__search-results",{"is-loading":u}),g=["url","mailto","tel","internal"],k=1===a.length&&g.includes(a[0].type.toLowerCase()),f=p&&!k&&!d,b=`block-editor-link-control-search-results-label-${y}`,v=d?(0,t.__)("Recently updated"):(0,t.sprintf)((0,t.__)('Search results for "%1$s"'),E),_=(0,e.createElement)(d?e.Fragment:r.VisuallyHidden,{},(0,e.createElement)("span",{className:"block-editor-link-control__search-results-label",id:b},v));return(0,e.createElement)("div",{className:"block-editor-link-control__search-results-wrapper"},_,(0,e.createElement)("div",{...o,className:m,"aria-labelledby":b},a.map(((t,r)=>f&&V===t.type?(0,e.createElement)(O,{searchTerm:E,onClick:async()=>{await W(t.title)},key:t.type,itemProps:i(t,r),isSelected:r===c}):V===t.type?null:(0,e.createElement)(N,{key:`${t.id}-${t.type}`,itemProps:i(t,r),suggestion:t,index:r,onClick:()=>{let e=t.title;isNaN(parseInt(t.id))&&(e=l),U(),s({...n,...t,title:e}),(0,w.doAction)("aioseo-link-format-link-added",{...n,...t,title:e})},isSelected:r===c,isURL:g.includes(t.type.toLowerCase()),searchTerm:E})))))}:null,fetchSuggestions:B,showInitialSuggestions:c,errorMessage:T}),n&&!x&&!P&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{"aria-label":(0,t.__)("Currently selected"),"aria-selected":"true",className:h()("block-editor-link-control__search-item",{"is-current":!0})},(0,e.createElement)("span",{className:"block-editor-link-control__search-item-header"},(0,e.createElement)(r.ExternalLink,{className:"block-editor-link-control__search-item-title",href:n.url},n&&n.title||j),n&&n.title&&(0,e.createElement)("span",{className:"block-editor-link-control__search-item-info"},j)),(0,e.createElement)(r.Button,{isSecondary:!0,onClick:()=>C(!0),className:"block-editor-link-control__search-item-action"},(0,t.__)("Edit")),(0,e.createElement)(H,{fillProps:$}))),(0,e.createElement)(_,{key:"aioseop-settings-drawer",value:n,settings:o,onChange:s,selectedText:l}),(0,e.createElement)("div",{id:"aioseo-link-assistant-education"},(0,e.createElement)("div",{id:"aioseo-link-assistant-education-mount"}),(0,e.createElement)("input",{type:"hidden",value:JSON.stringify(n)})))}I.ViewerFill=A;const F=I,z=(0,r.withSpokenMessages)((function({isActive:n,activeAttributes:l,addingLink:s,value:a,onChange:c,speak:u,stopAddingLink:m,contentRef:h}){const g=(0,e.useMemo)(d.uniqueId,[s]),[k,f]=(0,e.useState)(),w=a.text.substring(a.start,a.end);let b=null;o.useAnchor&&(b=(0,o.useAnchor)({editableContentElement:h.current,settings:{...U,isActive:n}}));const v=(0,e.useMemo)((()=>{const e=window.getSelection();if(!e.rangeCount)return;const t=e.getRangeAt(0);if(s&&!n)return t;let r=t.startContainer;for(r=r.nextElementSibling||r;r.nodeType!==window.Node.ELEMENT_NODE;)r=r.parentNode;return r.closest("a")}),[s,a.start,a.end]),_={url:l.url,opensInNewTab:"_blank"===l.target,nofollow:!!l.rel&&l.rel.includes("nofollow"),sponsored:!!l.rel&&l.rel.includes("sponsored"),ugc:!!l.rel&&l.rel.includes("ugc"),title:l.title||"",isAddingLink:!l.url,...k};let y;return p(window.aioseo.wpVersion,"6.1",">=")&&(y=v),p(window.aioseo.wpVersion,"6.6",">=")&&(y=b),(0,e.createElement)(r.Popover,{key:g,anchor:y,focusOnMount:!!s&&"firstElement",onClose:m},(0,e.createElement)(F,{value:_,onChange:function(e){e={...k,...e};const r=(_.opensInNewTab!==e.opensInNewTab||_.sponsored!==e.sponsored||_.nofollow!==e.nofollow||_.ugc!==e.ugc)&&_.url===e.url,l=r&&void 0===e.url;if(f(l?e:void 0),l)return;const s=(0,i.prependHTTP)(e.url),p=function({url:e,opensInNewWindow:t,nofollow:n,sponsored:r,ugc:o,title:i}){const l={type:"core/link",attributes:{url:e}},s=[];return t&&(l.attributes.target="_blank",s.push("noopener")),n&&s.push("nofollow"),r&&s.push("sponsored"),o&&s.push("ugc"),0<s.length&&(l.attributes.rel=s.join(" ")),void 0!==i&&(l.attributes.title=i),l}({url:s,opensInNewWindow:e.opensInNewTab,nofollow:e.nofollow,sponsored:e.sponsored,ugc:e.ugc,title:e.title});if((0,o.isCollapsed)(a)&&!n){const t=e.title||s,n=(0,o.applyFormat)((0,o.create)({text:t}),p,0,t.length);c((0,o.insert)(a,n))}else c((0,o.applyFormat)(a,p));r||m(),function(e){if(!e)return!1;const t=e.trim();if(!t)return!1;if(/^\S+:/.test(t)){const e=(0,i.getProtocol)(t);if(!(0,i.isValidProtocol)(e))return!1;if((0,d.startsWith)(e,"http")&&!/^https?:\/\/[^/\s]/i.test(t))return!1;const n=(0,i.getAuthority)(t);if(!(0,i.isValidAuthority)(n))return!1;const r=(0,i.getPath)(t);if(r&&!(0,i.isValidPath)(r))return!1;const o=(0,i.getQueryString)(t);if(o&&!(0,i.isValidQueryString)(o))return!1;const l=(0,i.getFragment)(t);if(l&&!(0,i.isValidFragment)(l))return!1}return!((0,d.startsWith)(t,"#")&&!(0,i.isValidFragment)(t))}(s)?u(n?(0,t.__)("Link edited.","all-in-one-seo-pack"):(0,t.__)("Link inserted.","all-in-one-seo-pack"),"assertive"):u((0,t.__)("Warning: the link has been inserted but may have errors. Please test it.","all-in-one-seo-pack"),"assertive")},forceIsEditingLink:s,selectedText:w}))})),j="core/link",M=(0,t.__)("Link","all-in-one-seo-pack"),U={name:j,title:M,tagName:"a",className:null,attributes:{url:"href",target:"target",rel:"rel",title:"title"},__unstablePasteRule(e,{html:t,plainText:n}){if((0,o.isCollapsed)(e))return e;const r=(t||n).replace(/<[^>]+>/g,"").trim();return(0,i.isURL)(r)?(0,o.applyFormat)(e,{type:j,attributes:{url:(0,s.decodeEntities)(r)}}):e},edit:(0,r.withSpokenMessages)(class extends e.Component{constructor(){super(...arguments),this.addLink=this.addLink.bind(this),this.stopAddingLink=this.stopAddingLink.bind(this),this.onRemoveFormat=this.onRemoveFormat.bind(this),this.state={addingLink:!1}}addLink(){const{value:e,onChange:t}=this.props,n=(0,o.getTextContent)((0,o.slice)(e));n&&(0,i.isURL)(n)?t((0,o.applyFormat)(e,{type:j,attributes:{url:n}})):n&&(0,i.isEmail)(n)?t((0,o.applyFormat)(e,{type:j,attributes:{url:`mailto:${n}`}})):this.setState({addingLink:!0})}stopAddingLink(){this.setState({addingLink:!1}),this.props.onFocus()}onRemoveFormat(){const{value:e,onChange:n,speak:r}=this.props;n((0,o.removeFormat)(e,j)),r((0,t.__)("Link removed.","all-in-one-seo-pack"),"assertive")}render(){const{isActive:n,activeAttributes:r,value:o,onChange:i,contentRef:s}=this.props;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),(0,e.createElement)(l.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),n&&(0,e.createElement)(l.RichTextToolbarButton,{name:"link",icon:c,title:(0,t.__)("Unlink","all-in-one-seo-pack"),onClick:this.onRemoveFormat,isActive:n,shortcutType:"primaryShift",shortcutCharacter:"k"}),!n&&(0,e.createElement)(l.RichTextToolbarButton,{name:"link",icon:u,title:M,onClick:this.addLink,isActive:n,shortcutType:"primary",shortcutCharacter:"k"}),(this.state.addingLink||n)&&(0,e.createElement)(z,{key:"aioseop-inline-link-ui",addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:n,activeAttributes:r,value:o,onChange:i,contentRef:s}))}})},{registerFormatType:D,unregisterFormatType:B}=wp.richText;[U].forEach((({name:e,...t})=>{e&&(B("core/link"),D(e,t))}))})()})();