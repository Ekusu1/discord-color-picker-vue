(function(t){function e(e){for(var n,i,a=e[0],c=e[1],l=e[2],d=0,h=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1526:function(t,e,o){},2687:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=o("ecee"),s=o("c074"),i=o("ad3d");r["c"].add(s["a"]),n["a"].component("font-awesome-icon",i["a"]);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container p-2",attrs:{id:"app"}},[o("AppHeader"),o("ColorsList"),o("import-export")],1)},c=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"row no-gutters justify-content-center",attrs:{id:"app-header"}},[o("div",{staticClass:"card col bg-dark text-light mb-2"},[o("div",{staticClass:"card-header p-1"},[o("div",{staticClass:"row no-gutters align-items-center"},[o("div",{staticClass:"col h h3-sm h2-md pr-2"},[t._v(" Discord Role Color Picker ")]),o("div",{staticClass:"col-auto align-self-start"},[o("button",{staticClass:"btn btn-sm btn-square border-light text-info",attrs:{title:"show/hide instructions",type:"button"},on:{click:t.toggleInstructions}},[o("font-awesome-icon",{attrs:{icon:"info","fixed-width":!0}})],1)])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showInstructions,expression:"showInstructions"}],staticClass:"card-body p-1",attrs:{id:"instructions"}},[o("div",[t._m(0),o("p",[t._v("Its pretty self explanatory but anyway^^")]),o("ul",[t._m(1),t._m(2),o("li",{staticClass:"mb-2"},[t._v(" Click "),o("button",{staticClass:"btn btn-square btn-sm border-light btn-info",attrs:{type:"button",title:"copy color in HEX"}},[o("font-awesome-icon",{attrs:{icon:"copy","fixed-width":!0}})],1),t._v(" to copy the color to your clipboard. "),o("br"),t._v(' Format will be in hexadecimal aka "#FFFFFF". ')]),o("li",{staticClass:"mb-2"},[t._v(" Click "),o("button",{staticClass:"btn btn-square btn-sm border-light btn-success",attrs:{title:"clone color"}},[o("font-awesome-icon",{attrs:{icon:"clone","fixed-width":!0}})],1),t._v(" to duplicated the row. ")]),o("li",{staticClass:"mb-2"},[t._v(" Click "),o("button",{staticClass:"btn btn-square btn-sm border-light btn-danger",attrs:{title:"remove color"}},[o("font-awesome-icon",{attrs:{icon:"times","fixed-width":!0}})],1),t._v(" to delete the row. You can't delete the last one. ")]),o("li",{staticClass:"mb-2"},[t._v(" Click "),o("button",{staticClass:"btn btn-square border-light btn-primary btn-sm",attrs:{title:"add new color"}},[o("font-awesome-icon",{attrs:{icon:"plus","fixed-width":!0}})],1),t._v(" (the big one... kinda hard to miss) to add a new row. ")]),o("li",[t._v(" Click "),o("button",{staticClass:"btn btn-square border-light text-info btn-sm",attrs:{type:"button",title:"show/hide instructions"}},[o("font-awesome-icon",{attrs:{icon:"info","fixed-width":!0}})],1),t._v(" at the top right to hide/show the instructions (the ones you are reading right now). ")])]),o("p",[t._v("BTW this site remembers your changes if you want to reset use those buttons:")])]),o("AppSettings")],1)])])},u=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" This is supposed to help you pick the best role colors, it also shows a preview for the light, dark and AMOLED themes of Discord."),o("br"),t._v(' The only thing difference is the font, the one Discord uses is called "Whitney",'),o("br"),t._v(" it will be used if you have it installed but I don't bundle it with this app."),o("br"),t._v(" The main reason I don't have it is because it costs money, and it's expensive (like really expensive)... "),o("br"),t._v(" the second reason is because it's weird, some specific colors really bleed over into the background -_- ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"mb-2"},[t._v(" Click on the username to change it, both in the row will be changed. "),o("br"),t._v(" (That on isn't as obvious as the others...) ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"mb-2"},[t._v(" Click "),o("input",{staticClass:"btn btn-square btn-sm border-light btn-dark",attrs:{id:"spectrum-example",type:"text"}}),t._v(" to change the color...")])}],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("hr",{staticClass:"border-light"}),o("div",[o("button",{staticClass:"btn btn-sm btn-danger mr-1 mb-1",attrs:{type:"button"},on:{reset:t.resetPallet}},[t._v("reset color palette")]),o("button",{staticClass:"btn btn-sm btn-danger mr-1 mb-1",attrs:{type:"button"},on:{reset:t.resetColors}},[t._v("reset user colors")]),o("button",{staticClass:"btn btn-sm btn-danger mr-1 mb-1",attrs:{type:"button"},on:{reset:t.resetAll}},[t._v("reset all")])]),o("div",[o("label",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.showAmoled,expression:"showAmoled"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showAmoled)?t._i(t.showAmoled,null)>-1:t.showAmoled},on:{change:function(e){var o=t.showAmoled,n=e.target,r=!!n.checked;if(Array.isArray(o)){var s=null,i=t._i(o,s);n.checked?i<0&&(t.showAmoled=o.concat([s])):i>-1&&(t.showAmoled=o.slice(0,i).concat(o.slice(i+1)))}else t.showAmoled=r}}}),t._v(" "),o("span",{staticClass:"custom-control-label"},[t._v("show AMOLED preview")])])]),o("div",[o("label",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.useWhitneyFont,expression:"useWhitneyFont"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.useWhitneyFont)?t._i(t.useWhitneyFont,null)>-1:t.useWhitneyFont},on:{change:function(e){var o=t.useWhitneyFont,n=e.target,r=!!n.checked;if(Array.isArray(o)){var s=null,i=t._i(o,s);n.checked?i<0&&(t.useWhitneyFont=o.concat([s])):i>-1&&(t.useWhitneyFont=o.slice(0,i).concat(o.slice(i+1)))}else t.useWhitneyFont=r}}}),t._v(" "),o("span",{staticClass:"custom-control-label"},[t._v("use Whitney Font in preview")])])]),o("div",[o("label",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.hideInstructionsInitial,expression:"hideInstructionsInitial"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.hideInstructionsInitial)?t._i(t.hideInstructionsInitial,null)>-1:t.hideInstructionsInitial},on:{change:function(e){var o=t.hideInstructionsInitial,n=e.target,r=!!n.checked;if(Array.isArray(o)){var s=null,i=t._i(o,s);n.checked?i<0&&(t.hideInstructionsInitial=o.concat([s])):i>-1&&(t.hideInstructionsInitial=o.slice(0,i).concat(o.slice(i+1)))}else t.hideInstructionsInitial=r}}}),t._v(" "),o("span",{staticClass:"custom-control-label"},[t._v("hide the instructions next time?")])])])])},h=[],m={name:"AppSettings",data:function(){return{useWhitneyFont:this.$store.getters["useWhitneyFont"],showAmoled:this.$store.getters["showAmoled"],hideInstructionsInitial:this.$store.getters["hideInstructionsInitial"]}},watch:{useWhitneyFont:function(t,e){this.$store.commit("useWhitneyFont",t)},showAmoled:function(t,e){this.$store.commit("showAmoled",t)},hideInstructionsInitial:function(t,e){this.$store.commit("hideInstructionsInitial",t)}},methods:{resetPallet:function(){this.$store.commit("resetPallet")},resetColors:function(){this.$store.commit("resetColors")},resetAll:function(){this.resetPallet(),this.resetColors()}}},p=m,b=o("2877"),f=Object(b["a"])(p,d,h,!1,null,"237a0d31",null),v=f.exports,g={name:"AppHeader",components:{AppSettings:v},data:function(){return{showInstructions:!this.$store.getters["hideInstructionsInitial"]}},methods:{toggleInstructions:function(){this.showInstructions=!this.showInstructions}}},w=g,C=Object(b["a"])(w,l,u,!1,null,"7897650a",null),x=C.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"color-list"}},[o("div",{staticClass:"row no-gutters justify-content-center"},[o("div",{staticClass:"col"},[o("draggable",{attrs:{draggable:".color-row",handle:".drag-handle",ghostClass:"drag-ghost",chosenClass:"drag-chosen",animation:"250",removeCloneOnHide:"false",direction:"vertical"},model:{value:t.colorsList,callback:function(e){t.colorsList=e},expression:"colorsList"}},t._l(t.colors,(function(t,e){return o("ColorRow",{key:e,attrs:{index:e,color:t}})})),1)],1)]),o("div",{staticClass:"row no-gutters mt-1"},[o("div",{staticClass:"btn-group btn-block"},[o("button",{staticClass:"btn btn-primary border-light col",attrs:{type:"button",title:"add new color"},on:{click:t.addColor}},[o("font-awesome-icon",{attrs:{icon:"plus","fixed-width":!0}})],1),o("button",{staticClass:"btn btn-danger border-light col-auto",attrs:{type:"button",title:"reset user colors"},on:{click:t.resetColors}},[o("font-awesome-icon",{attrs:{icon:"trash-alt","fixed-width":!0}})],1)])])])},_=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row no-gutters color-row"},[o("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.color.name,expression:"color.name"}],staticClass:"col username discord-theme-light",attrs:{type:"text"},domProps:{value:t.color.name},on:{input:function(e){e.target.composing||t.$set(t.color,"name",e.target.value)}}},"input",t.textBind,!1)),o("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.color.name,expression:"color.name"}],staticClass:"col username discord-theme-dark",attrs:{type:"text"},domProps:{value:t.color.name},on:{input:function(e){e.target.composing||t.$set(t.color,"name",e.target.value)}}},"input",t.textBind,!1)),t.showAmoled?o("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.color.name,expression:"color.name"}],staticClass:"col username discord-theme-amoled",attrs:{type:"text"},domProps:{value:t.color.name},on:{input:function(e){e.target.composing||t.$set(t.color,"name",e.target.value)}}},"input",t.textBind,!1)):t._e(),o("div",{staticClass:"col-auto py-1 pl-1"},[o("div",{staticClass:"btn-group btn-group-sm"},[o("TempColorPicker",{attrs:{color:t.hexColor},on:{updateColor:t.updateColor}}),t._m(0),o("div",{staticClass:"btn-group d-none d-sm-inline-block"},[o("button",{staticClass:"btn btn-height btn-info border-light",attrs:{type:"button",title:"copy color in HEX"},on:{click:t.copy}},[o("font-awesome-icon",{attrs:{icon:"copy","fixed-width":!0}})],1),o("button",{staticClass:"btn btn-height btn-success border-light ",attrs:{type:"button",title:"clone color"},on:{click:t.clone}},[o("font-awesome-icon",{attrs:{icon:"clone","fixed-width":!0}})],1),o("button",{staticClass:"btn btn-height btn-danger border-light",attrs:{type:"button",title:"remove color",disabled:t.disableRemove},on:{click:t.remove}},[o("font-awesome-icon",{attrs:{icon:"times","fixed-width":!0}})],1)]),o("div",{staticClass:"btn btn-height btn-light border-light drag-handle",attrs:{title:"drag row"}},[o("font-awesome-icon",{attrs:{icon:"sort","fixed-width":!0}})],1)],1)])])},I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btn-group d-inline-block d-sm-none"},[o("button",{staticClass:"btn btn-height btn-info border-light dropdown-toggle dropdown-toggle-split",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[o("span",{staticClass:"sr-only"},[t._v("Toggle Dropdown")])]),o("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[o("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Dropdown link")]),o("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Dropdown link")])])])}],A=(o("a9e3"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btn-group"},[o("button",{staticClass:"btn btn-square btn-light border-light",style:{background:t.color},attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.togglePicker(e)}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.pickerOpen,expression:"pickerOpen"}],staticClass:"picker-wrap"},[o("color-picker",{attrs:{theme:"dark",color:t.color,"sucker-hide":!0,"colors-default":t.palette},on:{changeColor:t.changeColor}})],1)])}),$=[],O=o("fc84"),E={name:"TempColorPicker",props:{color:String},data:function(){return{pickerOpen:!1}},components:{colorPicker:O["a"]},computed:{palette:function(){return this.$store.getters["palette"]}},methods:{togglePicker:function(){this.pickerOpen=!this.pickerOpen},changeColor:function(t){var e=t.hex;this.$emit("updateColor",e)}}},F=E,S=Object(b["a"])(F,A,$,!1,null,null,null),j=S.exports,P={name:"ColorRow",components:{TempColorPicker:j},props:{index:Number,color:Object},computed:{useWhitneyFont:function(){return this.$store.getters["useWhitneyFont"]},showAmoled:function(){return this.$store.getters["showAmoled"]},disableRemove:function(){return this.$store.getters["colors"]<2},textBind:function(){return{style:{color:this.color.hexColor},class:{"use-whitney-font":this.useWhitneyFont}}},hexColor:function(){return this.color.hexColor}},methods:{updateColor:function(t){this.$store.commit("rowColor",{index:this.index,hexColor:t})},copy:function(){var t=document.createElement("textarea");t.value=this.color.hexColor.toUpperCase(),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},clone:function(){this.$store.commit("cloneColor",this.index)},remove:function(){this.$store.commit("removeColor",this.index)}}},W=P,M=Object(b["a"])(W,k,I,!1,null,null,null),N=M.exports,T=o("2ef0"),D=o.n(T),R=o("310e"),L=o.n(R),q={name:"ColorsList",components:{ColorRow:N,draggable:L.a},computed:{colors:function(){return this.$store.getters["colors"]},colorsList:{get:function(){return this.$store.getters["colors"]},set:function(t){this.$store.commit("colors",t)}}},methods:{addColor:function(){this.$store.commit("addColor")},resetColors:function(){this.$store.commit("resetColors")}}},J=q,H=Object(b["a"])(J,y,_,!1,null,null,null),B=H.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"import-export"}},[o("div",{staticClass:"row no-gutters my-1"},[o("div",{staticClass:"col btn-group btn-block"},[o("button",{staticClass:"col btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.openModal("import")}}},[o("font-awesome-icon",{attrs:{icon:"upload","fixed-width":!0}}),t._v(" Import ")],1),o("button",{staticClass:"col btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.openModal("export")}}},[o("font-awesome-icon",{attrs:{icon:"download","fixed-width":!0}}),t._v(" Export ")],1)])]),o("div",{staticClass:"modal fade",class:t.modalOpenClass,attrs:{tabindex:"-1"}},[o("div",{staticClass:"modal-backdrop fade show"}),o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content bg-dark"},[o("div",{staticClass:"modal-header p-2 justify-content-end"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.closeModal}},[o("font-awesome-icon",{attrs:{icon:"times","fixed-width":!0}})],1)]),o("div",{staticClass:"modal-body p-2"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.importExportString,expression:"importExportString"}],ref:"textarea",staticClass:"form-control",attrs:{rows:"10",readonly:t.modeExport},domProps:{value:t.importExportString},on:{input:function(e){e.target.composing||(t.importExportString=e.target.value)}}}),t._v(" "),t.message?o("div",{staticClass:"alert alert-danger mt-1 mb-0"},[t._v(" "+t._s(t.message)+" ")]):t._e()]),o("div",{staticClass:"modal-footer p-2"},[t.modeImport?o("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.disableAction},on:{click:t.importData}},[o("font-awesome-icon",{attrs:{icon:"upload","fixed-width":!0}}),t._v(" Import ")],1):t._e(),t.modeExport?o("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.disableAction},on:{click:t.exportData}},[o("font-awesome-icon",{attrs:{icon:"copy","fixed-width":!0}}),t._v(" Copy to clipboard ")],1):t._e()])])])])])},X=[],G=(o("498a"),o("96cf"),o("1da1"));function Y(t){try{var e=document.createElement("textarea");return e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),!0}catch(e){return!1}}function z(t){try{return JSON.parse(t)}catch(e){throw"not a valid json string"}}var K={name:"ImportExport",data:function(){return{showModal:!1,modeImport:!1,modeExport:!1,importExportString:"",message:!1}},computed:{modalOpenClass:function(){return{show:this.showModal,"d-block":this.showModal}},disableAction:function(){return!this.importExportString.trim()}},methods:{openModal:function(t){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n={import:function(){var t=Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.modeImport=!0,t.abrupt("return",e.importExportString);case 2:case"end":return t.stop()}}),t)})));function o(){return t.apply(this,arguments)}return o}(),export:function(){var t=Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.modeExport=!0,t.next=3,e.$store.dispatch("exportColors");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));function o(){return t.apply(this,arguments)}return o}()},o.next=3,n[t]();case 3:e.importExportString=o.sent,e.showModal=!0,e.$nextTick((function(){var t=e.$refs.textarea;t.focus(),e.modeExport&&t.select()}));case 6:case"end":return o.stop()}}),o)})))()},closeModal:function(){this.modeExport&&(this.importExportString=""),this.showModal=this.modeImport=this.modeExport=this.message=!1},importData:function(){try{var t=this.importExportString.trim();t&&this.$store.dispatch("importColors",t)&&this.closeModal()}catch(e){this.message=e}},exportData:function(){var t=this.importExportString.trim();t&&Y(t)&&this.closeModal()}}},Q=K,V=Object(b["a"])(Q,U,X,!1,null,null,null),Z=V.exports,tt={components:{AppHeader:x,ColorsList:B,ImportExport:Z}},et=tt,ot=Object(b["a"])(et,a,c,!1,null,null,null),nt=ot.exports,rt=(o("99af"),o("d81d"),o("45fc"),o("a434"),o("b0c0"),o("07ac"),o("ac1f"),o("466d"),o("5319"),o("ade3")),st=o("5530"),it=o("2f62");n["a"].use(it["a"]);var at="ex-discord-color-picker",ct=[{name:"username",hexColor:"#99aab5"}],lt=["#99aab5","#ffffff","#808080","#000000","#1abc9c","#2ecc71","#3498db","#9b59b6","#e91e63","#f1c40f","#e74c3c","#95a5a6","#607d8b","#11806a","#1f8b4c","#206694","#71368a","#ad1457","#c27c0e","#992d22","#979c9f","#546e7a"],ut=new it["a"].Store({state:{showAmoled:!0,useWhitneyFont:!0,hideInstructionsInitial:!1,colors:[].concat(ct),palette:[].concat(lt)},getters:{showAmoled:function(t){return t.showAmoled},useWhitneyFont:function(t){return t.useWhitneyFont},hideInstructionsInitial:function(t){return t.hideInstructionsInitial},colors:function(t){return t.colors},colorsRemovable:function(t){return t.colors.length>1},palette:function(t){return t.palette}},mutations:{showAmoled:function(t,e){t.showAmoled=e},useWhitneyFont:function(t,e){t.useWhitneyFont=e},hideInstructionsInitial:function(t,e){t.hideInstructionsInitial=e},colors:function(t,e){t.colors=e},rowColor:function(t,e){var o=e.index,n=e.hexColor;t.colors[o].hexColor=n.toUpperCase()},resetColors:function(t){t.colors=[].concat(ct)},addColor:function(t){t.colors.push(Object(st["a"])({},ct[0]))},cloneColor:function(t,e){t.colors.splice(e,0,JSON.parse(JSON.stringify(t.colors[e])))},removeColor:function(t,e){t.colors.splice(e,1)},palette:function(t,e){t.palette=e},resetPalette:function(t){t.palette=[].concat(lt)}},actions:{importColors:function(t,e){t.state;var o=t.commit;try{var n={hex3:/^#[A-F0-9]{3}$/,hex3a:/^#[A-F0-9]{4}$/,hex6:/^#[A-F0-9]{6}$/,hex6a:/^#[A-F0-9]{8}$/},r=0,s=z(e).map((function(t){var e,o=t.name,s=t.hexColor;if(!o)throw"name not provided on index ".concat(r);if(!s)throw"hexColor not provided for '".concat(o,"' on index ").concat(r);if(s=s.toUpperCase(),!Object.values(n).some((function(t){return!!s.match(t)})))throw"color not in hex format for '".concat(o,"' on index ").concat(r);return s=(e={},Object(rt["a"])(e,!!s.match(n.hex3a),s.substring(0,4)),Object(rt["a"])(e,!!s.match(n.hex6a),s.substring(0,7)),e)[!0]||s,r++,{name:o,hexColor:s}}));o("colors",s)}catch(i){throw console.log(i),i}},exportColors:function(t){var e=t.state;return JSON.stringify(e.colors,null,"\t").replace(/\t\{\n\t+(".*?,)\n\t+(".*?)\n\t}/gm,"\t{ $1 $2 }")}}});function dt(t){console.log("saved state"),localStorage.setItem(at,JSON.stringify(t))}function ht(){var t=JSON.parse(localStorage.getItem(at));t&&D.a.each(t,(function(e,o){return D.a.has(ut.state,o)?ut.commit(o,e):D.a.unset(t,o)})),!D.a.isMatch(ut.state,t)&&dt(ut.state)}ht(),ut.subscribe((function(t,e){dt(e)}));var mt=ut;o("1526"),o("2687"),o("fb98");n["a"].config.productionTip=!1,new n["a"]({store:mt,render:function(t){return t(nt)}}).$mount("#app")},fb98:function(t,e,o){}});
//# sourceMappingURL=app.28f60543.js.map