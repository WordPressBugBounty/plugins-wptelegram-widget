import{j as e,_ as o,a as D,u as A}from"./use-plugin-data-CEVveJse.js";const y=(t,n,s)=>{const i=n.filter(l=>t==null?void 0:t[l]).map(l=>`${l}="${t[l]}"`),c=i.length?` ${i.join(" ")}`:"";return`[${s} ${c}]`},U=["widget_width","widget_height","username"],z="wptelegram-ajax-widget",v=({attributes:t})=>e.jsx(e.Fragment,{children:y(t,U,z)});var k;const f=((k=window.wptelegram_widget)==null?void 0:k.savedSettings)||{},O=({attributes:t,setAttributes:n,className:s})=>{const{widget_width:i,widget_height:c,username:l}=t,m=wp.element.useCallback(r=>n({widget_width:r}),[n]),p=wp.element.useCallback(r=>n({widget_height:r}),[n]),u=wp.element.useCallback(r=>n({username:r==null?void 0:r.replace("@","")}),[n]);return e.jsxs(e.Fragment,{children:[e.jsx(wp.blockEditor.InspectorControls,{children:e.jsx(wp.components.PanelBody,{title:o("Widget Options"),children:e.jsxs(wp.components.Flex,{direction:"column",gap:4,children:[e.jsx(wp.components.TextControl,{label:o("Username"),value:l,onChange:u,help:D("%s %s",o("Channel username."),o("Leave empty for default.")),placeholder:(f==null?void 0:f.username)||"WPTelegram",__nextHasNoMarginBottom:!0}),e.jsx(wp.components.TextControl,{label:o("Widget Width"),value:i,onChange:m,__nextHasNoMarginBottom:!0}),e.jsx(wp.components.TextControl,{label:o("Widget Height"),value:c,onChange:p,__nextHasNoMarginBottom:!0})]})})}),e.jsxs("div",{className:s,children:[e.jsxs("label",{children:[e.jsx(wp.components.Dashicon,{icon:"shortcode"}),e.jsx("span",{children:o("Telegram Channel Ajax Feed")})]}),e.jsx("code",{className:"widget-shortcode",children:e.jsx(v,{attributes:t})})]})]})},R={username:{type:"string",default:""},widget_width:{type:"string",default:"100%"},widget_height:{type:"string",default:"600"}};wp.blocks.registerBlockType("wptelegram/widget-ajax-channel-feed",{title:o("Telegram Channel Ajax Feed"),icon:"format-aside",category:"wptelegram",attributes:R,edit:O,save:({attributes:t})=>e.jsx("div",{children:e.jsx(v,{attributes:t})})});const G=["author_photo","num_messages","widget_width"],Y="wptelegram-widget",B=({attributes:t})=>e.jsx(e.Fragment,{children:y(t,G,Y)}),J=()=>[{label:"Auto",value:"auto"},{label:"Always show",value:"always_show"},{label:"Always hide",value:"always_hide"}],K=({attributes:t,setAttributes:n,className:s})=>{const{widget_width:i,author_photo:c,num_messages:l}=t,m=wp.element.useCallback(r=>n({author_photo:r}),[n]),p=wp.element.useCallback(r=>n({widget_width:r}),[n]),u=wp.element.useCallback(r=>n({num_messages:Number.parseInt(r)||5}),[n]);return e.jsxs(e.Fragment,{children:[e.jsx(wp.blockEditor.InspectorControls,{children:e.jsx(wp.components.PanelBody,{title:o("Widget Options"),children:e.jsxs(wp.components.Flex,{direction:"column",gap:4,children:[e.jsx(wp.components.TextControl,{label:o("Widget Width"),value:i,onChange:p,type:"number",min:"10",max:"100",__nextHasNoMarginBottom:!0}),e.jsx(wp.components.RadioControl,{label:o("Author Photo"),selected:c,onChange:m,options:J()}),e.jsx(wp.components.TextControl,{label:o("Number of Messages"),value:l,onChange:u,type:"number",min:"1",max:"50",__nextHasNoMarginBottom:!0})]})})}),e.jsxs("div",{className:s,children:[e.jsxs("label",{children:[e.jsx(wp.components.Dashicon,{icon:"shortcode"}),e.jsx("span",{children:o("Telegram Channel Feed")})]}),e.jsx("code",{className:"widget-shortcode",children:e.jsx(B,{attributes:t})})]},"shortcode")]})},Q={widget_width:{type:"string",default:"100"},author_photo:{type:"string",default:"auto"},num_messages:{type:"string",default:"5"}};wp.blocks.registerBlockType("wptelegram/widget-channel-feed",{title:o("Telegram Channel Feed"),icon:"format-aside",category:"wptelegram",attributes:Q,edit:K,save:({attributes:t})=>e.jsx("div",{children:e.jsx(B,{attributes:t})})});const V=t=>A("wptelegram_widget",t),Z=({setAttributes:t,attributes:n})=>{const{alignment:s,link:i,text:c}=n,{join_link_text:l,join_link_url:m}=V("uiData");wp.element.useEffect(()=>{i||t({link:m}),c||t({text:l})},[]);const p=wp.element.useCallback(h=>t({link:h}),[t]),u=wp.element.useCallback(h=>t({text:h}),[t]),r=wp.element.useCallback(h=>t({alignment:h}),[t]);return e.jsxs(wp.element.Fragment,{children:[e.jsx(wp.blockEditor.InspectorControls,{children:e.jsx(wp.components.PanelBody,{title:o("Button details"),children:e.jsxs(wp.components.Flex,{direction:"column",gap:4,children:[e.jsx(wp.components.TextControl,{label:o("Channel Link"),value:i||"",onChange:p,type:"url",__nextHasNoMarginBottom:!0}),e.jsx(wp.components.TextControl,{label:o("Button text"),value:c||"",onChange:u,__nextHasNoMarginBottom:!0})]})})},"controls"),e.jsx(wp.blockEditor.BlockControls,{children:e.jsx(wp.blockEditor.BlockAlignmentToolbar,{value:s,onChange:r})})]})},T=({fill:t="#ffffff"})=>e.jsx(wp.components.SVG,{width:"19px",height:"16px",viewBox:"0 0 19 16",children:e.jsx(wp.components.G,{fill:"none",children:e.jsx(wp.components.Path,{fill:t,d:"M0.465,6.638 L17.511,0.073 C18.078,-0.145 18.714,0.137 18.932,0.704 C19.009,0.903 19.026,1.121 18.981,1.33 L16.042,15.001 C15.896,15.679 15.228,16.111 14.549,15.965 C14.375,15.928 14.211,15.854 14.068,15.748 L8.223,11.443 C7.874,11.185 7.799,10.694 8.057,10.345 C8.082,10.311 8.109,10.279 8.139,10.249 L14.191,4.322 C14.315,4.201 14.317,4.002 14.195,3.878 C14.091,3.771 13.926,3.753 13.8,3.834 L5.602,9.138 C5.112,9.456 4.502,9.528 3.952,9.333 L0.486,8.112 C0.077,7.967 -0.138,7.519 0.007,7.11 C0.083,6.893 0.25,6.721 0.465,6.638 Z"})})}),q=({link:t,text:n,isEditing:s})=>e.jsx(wp.components.Button,{href:t,className:"join-link",icon:e.jsx(T,{}),target:s?"_blank":void 0,rel:"noopener noreferrer",children:n}),C={link:{type:"string"},text:{type:"string"},alignment:{type:"string",default:"center"}};wp.blocks.registerBlockType("wptelegram/widget-join-channel",{apiVersion:3,title:o("Join Telegram Channel"),icon:e.jsx(T,{fill:"#555d66"}),category:"wptelegram",attributes:C,getEditWrapperProps:t=>{const{alignment:n}=t;return["left","center","right","wide","full"].includes(n)?{"data-align":n}:{"data-align":""}},edit:({attributes:t,setAttributes:n})=>{const s=wp.blockEditor.useBlockProps({className:`align${t.alignment}`});return e.jsxs("div",{...s,children:[e.jsx(Z,{attributes:t,setAttributes:n}),e.jsx(q,{...t,isEditing:!0})]})},deprecated:[{attributes:C,save(){return null}}]});const X=({userpic:t,toggleUserPic:n,showEditButton:s,switchBackToURLInput:i,alignment:c,changeAlignment:l})=>e.jsxs(wp.element.Fragment,{children:[e.jsx(wp.blockEditor.InspectorControls,{children:e.jsx(wp.components.PanelBody,{title:o("Options"),children:e.jsx(wp.components.ToggleControl,{label:o("Author Photo"),checked:t,onChange:n,__nextHasNoMarginBottom:!0})})}),e.jsxs(wp.blockEditor.BlockControls,{children:[e.jsx(wp.blockEditor.BlockAlignmentToolbar,{value:c,onChange:l}),e.jsx(wp.components.ToolbarGroup,{children:s&&e.jsx(wp.components.ToolbarButton,{className:"components-toolbar__control",title:o("Edit URL"),icon:"edit",onClick:i})})]})]}),ee={border:"2px solid #f71717"},te=({error:t,label:n,onChangeURL:s,onSubmit:i,url:c})=>{const l=t?ee:void 0;return e.jsx(wp.components.Placeholder,{icon:"wordpress-alt",label:n,className:"wp-block-embed-telegram",children:e.jsxs("form",{onSubmit:i,children:[e.jsx("input",{"aria-label":n,className:"components-placeholder__input",onChange:s,placeholder:"https://t.me/WPTelegram/102",style:l,type:"url",value:c||""}),e.jsx(wp.components.Button,{type:"submit",children:o("Embed")})]})})},{message_view_url:ne}=window.wptelegram_widget.assets;function oe(t){const[n,s]=wp.element.useState("loading"),[i,c]=wp.element.useState(!1),[l,m]=wp.element.useState(t.attributes.url||""),[p,u]=wp.element.useState(t.attributes.userpic??!0),[r,h]=wp.element.useState(0),{className:N}=t,{alignment:E,iframe_src:_}=t.attributes,P=o("Telegram post URL");function $(a){m(a.target.value)}function L(a){a&&a.preventDefault();const g=/^(?:https?:\/\/)?t\.me\/(?<username>[a-z][a-z0-9_]{3,30}[a-z0-9])\/(?<message_id>\d+)$/i,w=l.match(g);if(w===null)s("error");else{const j=S(w.groups),{setAttributes:M}=t;s("loading"),c(!1),M({url:l,iframe_src:j})}}function S(a){return ne.replace("%username%",a.username).replace("%message_id%",a.message_id).replace("%userpic%",`${p}`)}function F(a){s("loading");let{iframe_src:g}=t.attributes;g=wp.url.addQueryArgs(g,{userpic:a}),t.setAttributes({userpic:a,iframe_src:g}),u(a)}function W(a){x(),t.setAttributes({alignment:a})}const d=wp.element.useRef(),H=wp.compose.useMergeRefs([d,wp.compose.useFocusableIframe()]);function x(){var g,w,j;if((d==null?void 0:d.current)===null||typeof((g=d==null?void 0:d.current)==null?void 0:g.contentWindow)>"u")return;const a=(j=(w=d==null?void 0:d.current)==null?void 0:w.contentWindow)==null?void 0:j.document.body.scrollHeight;a!==r&&h(a||0)}if(wp.element.useEffect(()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[]),i||!_)return e.jsx(te,{label:P,error:n==="error",url:l,onChangeURL:$,onSubmit:L});const I=n==="loading"?0:r;return e.jsxs(wp.element.Fragment,{children:[e.jsx(X,{userpic:p,toggleUserPic:F,showEditButton:!0,switchBackToURLInput:()=>c(!0),alignment:E,changeAlignment:W}),n==="loading"&&e.jsxs("div",{className:"wp-block-embed is-loading",children:[e.jsx(wp.components.Spinner,{}),e.jsx("p",{children:o("Loading…")})]}),e.jsx("div",{className:`${N} wptelegram-widget-message`,children:e.jsx("div",{className:"wp-block-embed__content-wrapper",children:e.jsx("iframe",{ref:H,src:_,onLoad:()=>{s("idle"),x()},height:I,title:o("Telegram post"),children:"Your Browser Does Not Support iframes!"})})})]})}const b={url:{type:"string",default:""},iframe_src:{type:"string",default:""},userpic:{type:"boolean",default:!0},alignment:{type:"string",default:"center"}};wp.blocks.registerBlockType("wptelegram/widget-single-post",{title:o("Telegram Single Post"),icon:"format-aside",category:"wptelegram",getEditWrapperProps:t=>{const{alignment:n}=t;return["left","center","right","wide","full"].includes(n)?{"data-align":n.toString()}:{"data-align":""}},attributes:b,edit:oe,save:({attributes:t})=>{const{alignment:n,iframe_src:s}=t;return e.jsx("div",{className:`wp-block-wptelegram-widget-single-post wptelegram-widget-message align${n}`,children:e.jsx("iframe",{title:o("Telegram post"),src:s,children:"Your Browser Does Not Support iframes!"})})},deprecated:[{attributes:b,save:({attributes:t})=>{const{alignment:n,iframe_src:s}=t;return e.jsx("div",{className:`wp-block-wptelegram-widget-single-post wptelegram-widget-message align${n}`,children:e.jsx("iframe",{src:s,title:o("Telegram post"),children:"Your Browser Does Not Support iframes!"})})}}]});
//# sourceMappingURL=blocks-npxzp4cM.js.map
