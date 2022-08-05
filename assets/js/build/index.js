(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,s=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,i=window.wp.compose,l=window.wp.data,r=window.wp.hooks,a=window.wp.api;var c=e.n(a);const d={button:{display:"flex",justifyContent:"center",width:"100%"},image:{padding:"20px 0"},skip:{container:{display:"flex",flexDirection:"column",alignItems:"center"},button:{fontSize:"9px"},poweredby:{fontSize:"9px",textTransform:"uppercase"}}},p={"blocks-css":{title:(0,s.__)("Custom CSS","otter-blocks"),description:(0,s.__)("Enable Otter and add your Custom CSS for this block."),image:"css.jpg"},"blocks-animation":{title:(0,s.__)("Animations","otter-blocks"),description:(0,s.__)("Enable Otter to add Animations to this block."),image:"animation.jpg"},"blocks-conditions":{title:(0,s.__)("Visibility Conditions","otter-blocks"),description:(0,s.__)("Enable Otter to add Visibility Conditions to this block."),image:"conditions.jpg"}},m=e=>{let{onClick:n}=e;return(0,t.createElement)("div",{style:d.skip.container},(0,t.createElement)(o.Button,{style:d.skip.button,variant:"tertiary",onClick:n},(0,s.__)("Skip for now")),(0,t.createElement)("span",{style:d.skip.poweredby},(0,s.__)("Recommended by ")+window.themeisleSDKUpsells.product))},w=(0,i.createHigherOrderComponent)((e=>i=>{if(i.isSelected&&Boolean(window.themeisleSDKUpsells.showUpsell)){const[r,a]=(0,t.useState)(!1),[w,u]=(0,t.useState)("default"),[b,_]=(0,t.useState)(!1),[k,y,h]=(()=>{const{createNotice:e}=(0,l.dispatch)("core/notices"),[n,o]=(0,t.useState)({}),[i,r]=(0,t.useState)("loading"),a=()=>{c().loadPromise.then((async()=>{try{const e=new(c().models.Settings),t=await e.fetch();o(t)}catch(e){r("error")}finally{r("loaded")}}))};return(0,t.useEffect)((()=>{a()}),[]),[e=>null==n?void 0:n[e],function(t,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,s.__)("Settings saved.","textdomain");r("saving");const i=new(c().models.Settings)({[t]:n}).save();i.success(((t,n)=>{"success"===n&&(r("loaded"),e("success",o,{isDismissible:!0,type:"snackbar"})),"error"===n&&(r("error"),e("error",(0,s.__)("An unknown error occurred.","textdomain"),{isDismissible:!0,type:"snackbar"})),a()})),i.error((t=>{r("error"),e("error",t.responseJSON.message?t.responseJSON.message:(0,s.__)("An unknown error occurred.","textdomain"),{isDismissible:!0,type:"snackbar"})}))},i]})(),g=async()=>{var e;a(!0),await("otter-blocks",new Promise((e=>{wp.updates.ajax("install-plugin",{slug:"otter-blocks",success:()=>{e({success:!0})},error:t=>{e({success:!1,code:t.errorCode})}})}))),await(e=window.themeisleSDKUpsells.activationUrl,new Promise((t=>{jQuery.get(e).done((()=>{t({success:!0})})).fail((()=>{t({success:!1})}))}))),a(!1),u("installed")},S=()=>"installed"===w?(0,t.createElement)("p",null,(0,s.__)("Awesome! Refresh the page to see Otter in action.")):(0,t.createElement)(o.Button,{variant:"secondary",onClick:g,isBusy:r,style:d.button},(0,s.__)("Install & Activate Otter")),f=()=>{const e=JSON.parse(window.themeisleSDKUpsells.upsells_otter);e[window.themeisleSDKUpsells.showUpsell]=(new Date).getTime()/1e3|0,y("themeisle_sdk_upsells_otter",JSON.stringify(e)),window.themeisleSDKUpsells.showUpsell=!1};return(0,t.useEffect)((()=>{b&&f()}),[b]),b?(0,t.createElement)(e,i):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,i),(0,t.createElement)(n.InspectorControls,null,Object.keys(p).map((e=>{if(e===window.themeisleSDKUpsells.showUpsell){const s=p[e];return(0,t.createElement)(o.PanelBody,{title:s.title,initialOpen:!1},(0,t.createElement)("p",null,s.description),(0,t.createElement)(S,null),(0,t.createElement)("img",{style:d.image,src:window.themeisleSDKUpsells.assets+s.image}),(0,t.createElement)(m,{onClick:()=>_(!0)}))}}))))}return(0,t.createElement)(e,i)}),"withInspectorControl");(0,l.select)("core/edit-site")||(0,r.addFilter)("editor.BlockEdit","themeisle-sdk/with-inspector-controls",w)})();