webpackJsonp([0],{"4DTH":function(t,e){},H6wa:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={name:"ElBadge",props:{value:{},max:Number,isDot:Boolean,hidden:Boolean},computed:{content:function(){if(!this.isDot){var t=this.value,e=this.max;return"number"==typeof t&&"number"==typeof e?e<t?e+"+":t:void 0}}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-badge"},[t._t("default"),t._v(" "),n("transition",{attrs:{name:"el-zoom-in-center"}},[n("sup",{directives:[{name:"show",rawName:"v-show",value:!t.hidden&&(t.content||t.isDot),expression:"!hidden&&(content||isDot)"}],staticClass:"el-badge__content",class:{"iS-fixed":!0,"is-dot":t.isDot},domProps:{textContent:t._s(t.content)}})])],2)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("H6wa")},null,null).exports,l={props:{disabled:Boolean,nativeType:{type:String,default:"button"},size:String,type:{type:String,default:"default"}},computed:{buttonSize:function(){return this.size}},methods:{handleClick:function(t){this.$emit("click",t)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.disabled}],attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.handleClick}},[t.$slots.default?n("span",[t._t("default")],2):t._e()])},staticRenderFns:[]};var c={name:"app",data:function(){return{saveDisabled:!0}},methods:{addComment:function(){console.log("添加评论")},doSave:function(){console.log("发布")}},mounted:function(){var t=this;setTimeout(function(){t.saveDisabled=!1},5e3)},components:{ElButton:n("VU/8")(l,u,!1,function(t){n("l3cF")},null,null).exports,ElBadge:o}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-badge",{staticClass:"item",attrs:{value:1,max:9}},[n("el-button",{attrs:{nativeType:"submit",size:"medium"},on:{click:t.addComment}},[t._v("评论")])],1),t._v(" "),n("el-badge",{staticClass:"item",attrs:{isDot:"",value:1,max:9}},[n("el-button",{attrs:{disabled:t.saveDisabled,size:"small",type:"primary"},on:{click:function(e){t.doSave()}}},[t._v("发布")])],1),t._v(" "),n("el-badge",{staticClass:"item",attrs:{value:99,max:10}},[n("el-button",{attrs:{size:"mini",type:"text"}},[t._v("前往")])],1)],1)},staticRenderFns:[]};var d=n("VU/8")(c,r,!1,function(t){n("4DTH")},null,null).exports;n("tvR6");a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:d}})},l3cF:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e3056c7f0ede6014a974.js.map