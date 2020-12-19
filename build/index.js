!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=window.wp.blocks},function(e,t,n){"use strict";n.r(t);var l=n(3),o=n.n(l),r=n(0),a=n(4),c=n(1),i=n(2),u=["core/button"];Object(a.registerBlockType)("csh/cta",{title:"CSH - CTA",description:"Call To Action",icon:"format-image",category:"design",attributes:{title:{type:"string",source:"html",selector:"h2"},titleColor:{type:" string",default:"black"},body:{type:"string",source:"html",selector:"p"},alignment:{type:"string",default:"center"},backgroundImage:{type:"string",default:null},overlayColor:{type:"string",default:"rgba(0, 0, 0, .5)"},overlayOpacity:{type:"number",default:.3}},edit:function(e){var t=e.attributes,n=e.setAttributes,l=function(e){return function(t){return n(o()({},e,t))}},a=l("title"),b=l("body"),s=l("titleColor"),m=l("overlayColor"),d=l("overlayOpacity");return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.InspectorControls,null,Object(r.createElement)(i.PanelBody,{title:"Font color settings"},Object(r.createElement)("p",null,Object(r.createElement)("strong",null,"Select a title color:")),Object(r.createElement)(c.ColorPalette,{value:t.titleColor,onChange:s})),Object(r.createElement)(i.PanelBody,{title:"Background image settings"},Object(r.createElement)("p",null,Object(r.createElement)("strong",null,"Select a background image:")),Object(r.createElement)(c.MediaUpload,{type:"image",value:t.backgroundImage,onSelect:function(e){return n({backgroundImage:e.sizes.full.url})},render:function(e){var t=e.open;return Object(r.createElement)(i.Button,{className:"components-button block-editor-media-placeholder__button block-editor-media-placeholder__upload-button",icon:"upload",onClick:t},"Background image")}}),Object(r.createElement)("div",{style:{marginTop:"20px",marginBottom:"40px"},className:"overlay"},Object(r.createElement)("p",null,Object(r.createElement)("strong",null,"Overlay settings:")),Object(r.createElement)(c.ColorPalette,{value:t.overlayColor,onChange:m}),Object(r.createElement)(i.RangeControl,{label:"Overlay opacity",value:t.overlayOpacity,onChange:d,min:0,max:1,step:.01})))),Object(r.createElement)("div",{className:"cta-editor"},Object(r.createElement)(c.BlockControls,null,Object(r.createElement)(c.AlignmentToolbar,{value:t.alignment,onChange:l("alignment")})),Object(r.createElement)("div",{className:"cta",style:{backgroundImage:"url(".concat(t.backgroundImage,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},Object(r.createElement)("div",{className:"overlay",style:{backgroundColor:t.overlayColor,opacity:t.overlayOpacity}}),Object(r.createElement)(c.RichText,{key:"editable",style:{color:t.titleColor,textAlign:t.alignment},tagName:"h2",placeholder:"Title",value:t.title,onChange:a}),Object(r.createElement)(c.RichText,{key:"editable",style:{textAlign:t.alignment},tagName:"p",placeholder:"Body",value:t.body,onChange:b}),Object(r.createElement)(c.InnerBlocks,{allowedBlocks:u}))))},save:function(e){var t=e.attributes;return Object(r.createElement)("div",{className:"cta",style:{backgroundImage:"url(".concat(t.backgroundImage,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},Object(r.createElement)("div",{className:"overlay",style:{backgroundColor:t.overlayColor,opacity:t.overlayOpacity}}),Object(r.createElement)("h2",{style:{color:t.titleColor,textAlign:t.alignment}},t.title),Object(r.createElement)(c.RichText.Content,{style:{textAlign:t.alignment},tagName:"p",value:t.body}),Object(r.createElement)(c.InnerBlocks.Content,null))}})}]);