(()=>{"use strict";var e,t={241:(e,t,o)=>{const n=window.wp.element,i=window.wp.blockEditor,s=window.wp.components,r=window.wp.compose,a=window.wp.data,l=window.wp.hooks,m=window.wp.api;var c=o.n(m);const d=()=>{const{createNotice:e}=(0,a.dispatch)("core/notices"),[t,o]=(0,n.useState)({}),[i,s]=(0,n.useState)("loading"),r=()=>{c().loadPromise.then((async()=>{try{const e=new(c().models.Settings),t=await e.fetch();o(t)}catch(e){s("error")}finally{s("loaded")}}))};return(0,n.useEffect)((()=>{r()}),[]),[e=>t?.[e],function(t,o){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Settings saved.";s("saving");const i=new(c().models.Settings)({[t]:o}).save();i.success(((t,o)=>{"success"===o&&(s("loaded"),e("success",n,{isDismissible:!0,type:"snackbar"})),"error"===o&&(s("error"),e("error","An unknown error occurred.",{isDismissible:!0,type:"snackbar"})),r()})),i.error((t=>{s("error"),e("error",t.responseJSON.message?t.responseJSON.message:"An unknown error occurred.",{isDismissible:!0,type:"snackbar"})}))},i]},p=e=>new Promise((t=>{wp.updates.ajax("install-plugin",{slug:e,success:()=>{t({success:!0})},error:e=>{t({success:!1,code:e.errorCode})}})})),u=e=>new Promise((t=>{jQuery.get(e).done((()=>{t({success:!0})})).fail((()=>{t({success:!1})}))})),h=(e,t)=>{const o={};return Object.keys(t).forEach((function(e){"innerBlocks"!==e&&(o[e]=t[e])})),e.push(o),Array.isArray(t.innerBlocks)?(o.innerBlocks=t.innerBlocks.map((e=>e.id)),t.innerBlocks.reduce(h,e)):e},w={button:{display:"flex",justifyContent:"center",width:"100%"},image:{padding:"20px 0"},skip:{container:{display:"flex",flexDirection:"column",alignItems:"center"},button:{fontSize:"9px"},poweredby:{fontSize:"9px",textTransform:"uppercase"}}},g={"blocks-css":{title:"Custom CSS",description:"Enable Otter Blocks to add Custom CSS for this block.",image:"css.jpg"},"blocks-animation":{title:"Animations",description:"Enable Otter Blocks to add Animations for this block.",image:"animation.jpg"},"blocks-conditions":{title:"Visibility Conditions",description:"Enable Otter Blocks to add Visibility Conditions for this block.",image:"conditions.jpg"}},y=e=>{let{onClick:t}=e;return(0,n.createElement)("div",{style:w.skip.container},(0,n.createElement)(s.Button,{style:w.skip.button,variant:"tertiary",onClick:t},"Skip for now"),(0,n.createElement)("span",{style:w.skip.poweredby},"Recommended by ",window.themeisleSDKPromotions.product))},f=(0,r.createHigherOrderComponent)((e=>t=>{if(t.isSelected&&Boolean(window.themeisleSDKPromotions.showPromotion)){const[o,r]=(0,n.useState)(!1),[a,l]=(0,n.useState)("default"),[m,c]=(0,n.useState)(!1),[h,f,E]=d(),k=async()=>{r(!0),await p("otter-blocks"),f("themeisle_sdk_promotions_otter_installed",!Boolean(h("themeisle_sdk_promotions_otter_installed"))),await u(window.themeisleSDKPromotions.otterActivationUrl),r(!1),l("installed")},b=()=>"installed"===a?(0,n.createElement)("p",null,(0,n.createElement)("strong",null,"Awesome! Refresh the page to see Otter Blocks in action.")):(0,n.createElement)(s.Button,{variant:"secondary",onClick:k,isBusy:o,style:w.button},"Install & Activate Otter Blocks"),v=()=>{const e={...window.themeisleSDKPromotions.option};e[window.themeisleSDKPromotions.showPromotion]=(new Date).getTime()/1e3|0,f("themeisle_sdk_promotions",JSON.stringify(e)),window.themeisleSDKPromotions.showPromotion=!1};return(0,n.useEffect)((()=>{m&&v()}),[m]),m?(0,n.createElement)(e,t):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),(0,n.createElement)(i.InspectorControls,null,Object.keys(g).map((e=>{if(e===window.themeisleSDKPromotions.showPromotion){const t=g[e];return(0,n.createElement)(s.PanelBody,{key:e,title:t.title,initialOpen:!1},(0,n.createElement)("p",null,t.description),(0,n.createElement)(b,null),(0,n.createElement)("img",{style:w.image,src:window.themeisleSDKPromotions.assets+t.image}),(0,n.createElement)(y,{onClick:()=>c(!0)}))}}))))}return(0,n.createElement)(e,t)}),"withInspectorControl");(0,a.select)("core/edit-site")||(0,l.addFilter)("editor.BlockEdit","themeisle-sdk/with-inspector-controls",f);const E=window.wp.plugins,k=window.wp.editPost;function b(e){let{stacked:t=!1,noImage:o=!1,type:i,onDismiss:r}=e;const{assets:a,title:l,email:m,option:c,optionKey:h,optimoleActivationUrl:w,optimoleApi:g,optimoleDash:y,nonce:f}=window.themeisleSDKPromotions,[E,k]=(0,n.useState)(!1),[b,v]=(0,n.useState)(m||""),[P,S]=(0,n.useState)(!1),[O,A]=(0,n.useState)(null),[D,_]=d(),B=async()=>{S(!0);const e={...c};e[i]=(new Date).getTime()/1e3|0,window.themeisleSDKPromotions.option=e,await _(h,JSON.stringify(e)),r&&r()},N=()=>{k(!E)},C=e=>{v(e.target.value)},K=async e=>{e.preventDefault(),A("installing"),await p("optimole-wp"),A("activating"),await u(w),_("themeisle_sdk_promotions_optimole_installed",!Boolean(D("themeisle_sdk_promotions_optimole_installed"))),A("connecting");try{await fetch(g,{method:"POST",headers:{"X-WP-Nonce":f,"Content-Type":"application/json"},body:JSON.stringify({email:b})}),A("done")}catch(e){A("done")}};if(P)return null;const x=()=>"done"===O?(0,n.createElement)("div",{className:"done"},(0,n.createElement)("p",null,"Awesome! You are all set!"),(0,n.createElement)(s.Button,{icon:"external",isPrimary:!0,href:y,target:"_blank"},"Go to Optimole dashboard")):O?(0,n.createElement)("p",{className:"om-progress"},(0,n.createElement)("span",{className:"dashicons dashicons-update spin"}),(0,n.createElement)("span",null,"installing"===O&&"Installing","activating"===O&&"Activating","connecting"===O&&"Connecting to API","…")):(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",null,"Enter your email address to create & connect your account"),(0,n.createElement)("form",{onSubmit:K},(0,n.createElement)("input",{defaultValue:b,type:"email",onChange:C,placeholder:"Email address"}),(0,n.createElement)(s.Button,{isPrimary:!0,type:"submit"},"Start using Optimole"))),j=()=>(0,n.createElement)(s.Button,{disabled:O&&"done"!==O,onClick:B,isLink:!0,className:"om-notice-dismiss"},(0,n.createElement)("span",{className:"dashicons-no-alt dashicons"}),(0,n.createElement)("span",{className:"screen-reader-text"},"Dismiss this notice."));return t?(0,n.createElement)("div",{className:"ti-om-stack-wrap"},(0,n.createElement)("div",{className:"om-stack-notice"},j(),(0,n.createElement)("img",{src:a+"/optimole-logo.svg",alt:"Optimole logo"}),(0,n.createElement)("h2",null,"Get more with Optimole"),(0,n.createElement)("p",null,"om-editor"===i?"Increase this page speed and SEO ranking by optimizing images with Optimole.":"Leverage Optimole's full integration with Elementor to automatically lazyload, resize, compress to AVIF/WebP and deliver from 400 locations around the globe!"),!E&&(0,n.createElement)(s.Button,{isPrimary:!0,onClick:N,className:"cta"},"Get Started Free"),E&&x(),(0,n.createElement)("i",null,l))):(0,n.createElement)(n.Fragment,null,j(),(0,n.createElement)("div",{className:"content"},!o&&(0,n.createElement)("img",{src:a+"/optimole-logo.svg",alt:"Optimole logo"}),(0,n.createElement)("div",null,(0,n.createElement)("p",null,l),(0,n.createElement)("p",{className:"description"},"om-media"===i?"Save your server space by storing images to Optimole and deliver them optimized from 400 locations around the globe. Unlimited images, Unlimited traffic.":"This image looks to be too large and would affect your site speed, we recommend you to install Optimole to optimize your images."),!E&&(0,n.createElement)("div",{className:"actions"},(0,n.createElement)(s.Button,{isPrimary:!0,onClick:N},"Get Started Free"),(0,n.createElement)(s.Button,{isLink:!0,target:"_blank",href:"https://wordpress.org/plugins/optimole-wp"},(0,n.createElement)("span",{className:"dashicons dashicons-external"}),(0,n.createElement)("span",null,"Learn more"))),E&&(0,n.createElement)("div",{className:"form-wrap"},x()))))}const v=()=>{const[e,t]=(0,n.useState)(!0),{getBlocks:o}=(0,a.useSelect)((e=>{const{getBlocks:t}=e("core/block-editor");return{getBlocks:t}}));var i;if((i=o(),"core/image",i.reduce(h,[]).filter((e=>"core/image"===e.name))).length<2)return null;const s="ti-sdk-optimole-post-publish "+(e?"":"hidden");return(0,n.createElement)(k.PluginPostPublishPanel,{className:s},(0,n.createElement)(b,{stacked:!0,type:"om-editor",onDismiss:()=>{t(!1)}}))};new class{constructor(){const{showPromotion:e,debug:t}=window.themeisleSDKPromotions;this.promo=e,this.debug="1"===t,this.domRef=null,this.run()}run(){if(this.debug)this.runAll();else switch(this.promo){case"om-attachment":this.runAttachmentPromo();break;case"om-media":this.runMediaPromo();break;case"om-editor":this.runEditorPromo();break;case"om-elementor":this.runElementorPromo()}}runAttachmentPromo(){wp.media.view.Attachment.Details.prototype.on("ready",(()=>{setTimeout((()=>{this.removeAttachmentPromo(),this.addAttachmentPromo()}),100)})),wp.media.view.Modal.prototype.on("close",(()=>{setTimeout(this.removeAttachmentPromo,100)}))}runMediaPromo(){if(window.themeisleSDKPromotions.option["om-media"])return;const e=document.querySelector("#ti-optml-notice");e&&(0,n.render)((0,n.createElement)(b,{type:"om-media",onDismiss:()=>{e.style.opacity=0}}),e)}runEditorPromo(){window.themeisleSDKPromotions.option["om-editor"]||(0,E.registerPlugin)("post-publish-panel-test",{render:v})}runElementorPromo(){if(!window.elementor)return;const e=this;elementor.on("preview:loaded",(()=>{elementor.panel.currentView.on("set:page:editor",(t=>{e.domRef&&(0,n.unmountComponentAtNode)(e.domRef),t.activeSection&&"section_image"===t.activeSection&&e.runElementorActions(e)}))}))}addAttachmentPromo(){if(this.domRef&&(0,n.unmountComponentAtNode)(this.domRef),window.themeisleSDKPromotions.option["om-attachment"])return;const e=document.querySelector("#ti-optml-notice-helper");e&&(this.domRef=e,(0,n.render)((0,n.createElement)("div",{className:"notice notice-info ti-sdk-om-notice",style:{margin:0}},(0,n.createElement)(b,{noImage:!0,type:"om-attachment",onDismiss:()=>{e.style.opacity=0}})),e))}removeAttachmentPromo(){const e=document.querySelector("#ti-optml-notice-helper");e&&(0,n.unmountComponentAtNode)(e)}runElementorActions(e){if(window.themeisleSDKPromotions.option["om-elementor"])return;const t=document.querySelector("#elementor-panel__editor__help"),o=document.createElement("div");o.id="ti-optml-notice",e.domRef=o,t&&(t.parentNode.insertBefore(o,t),(0,n.render)((0,n.createElement)(b,{stacked:!0,type:"om-elementor",onDismiss:()=>{o.style.opacity=0}}),o))}runAll(){this.runAttachmentPromo(),this.runMediaPromo(),this.runEditorPromo(),this.runElementorPromo()}}}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,o,i,s)=>{if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],s=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(c--,1);var m=i();void 0!==m&&(t=m)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,i,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,s,r=o[0],a=o[1],l=o[2],m=0;if(r.some((t=>0!==e[t]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(o);m<r.length;m++)s=r[m],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},o=self.webpackChunkthemeisle_sdk=self.webpackChunkthemeisle_sdk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=n.O(void 0,[431],(()=>n(241)));i=n.O(i)})();