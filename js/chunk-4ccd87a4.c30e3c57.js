(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ccd87a4"],{"042e":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home admin-theme-main"},[t("div",{staticClass:"home-wrapper"},[t("el-container",[t("el-header",[t("Header")],1),t("el-container",[t("el-aside",{attrs:{width:"200px"}},[t("Aside",{on:{selectTabContent:n.selectTabContent}})],1),t("el-container",[t("el-main",[t("Main",{attrs:{tabContent:n.currTabContent}})],1)],1)],1)],1)],1)])},o=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"header"},[n._m(0),t("div",{staticClass:"header-right"},[t("el-dropdown",[t("span",{staticClass:"el-dropdown-link"},[t("el-avatar",{attrs:{size:40,src:"https://empty"},on:{error:n.errorHandler}},[t("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})]),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})],1),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[n._v("Notifications")]),t("el-dropdown-item",[n._v("Edit Profile")]),t("el-dropdown-item",[n._v("Log out")])],1)],1)],1)])},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"header-left"},[t("h3",[n._v("Student Portal Administrator")])])}],s={name:"Header",components:{},methods:{errorHandler:function(){return!0}}},l=s,r=(t("0b6c"),t("2877")),u=Object(r["a"])(l,c,i,!1,null,null,null),d=u.exports,f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("el-col",[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":""+n.activeTab,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:n.handleOpen,close:n.handleClose}},n._l(n.tabItems,(function(e,a){return t("el-menu-item",{key:a,attrs:{index:""+a},on:{click:function(t){return n.selectTabContent(e.name)}}},[t("i",{class:e.icon}),t("span",[n._v(n._s(e.name))])])})),1)],1)},h=[],m={name:"Aside",components:{},data:function(){return{activeTab:"0",tabItems:[{name:"Dashboard",icon:"el-icon-data-analysis"},{name:"Students",icon:"el-icon-user"},{name:"Parents",icon:"el-icon-s-custom"},{name:"Schedule",icon:"el-icon-date"},{name:"Grades",icon:"el-icon-medal-1"},{name:"Messages",icon:"el-icon-message"},{name:"Settings",icon:"el-icon-setting"}]}},methods:{handleOpen:function(n,e){console.log(n,e)},handleClose:function(n,e){console.log(n,e)},selectTabContent:function(n){this.$emit("selectTabContent",n)}}},p=m,b=(t("ed8f"),Object(r["a"])(p,f,h,!1,null,null,null)),v=b.exports,C=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"main"},[t(n.tabContent,{tag:"component"})],1)},g=[],w={components:{Dashboard:function(n){t.e("chunk-293355d6").then(function(){var e=[t("6bfd")];n.apply(null,e)}.bind(this)).catch(t.oe)},Students:function(n){t.e("chunk-076a3932").then(function(){var e=[t("e94d")];n.apply(null,e)}.bind(this)).catch(t.oe)},Parents:function(n){t.e("chunk-2d2228e6").then(function(){var e=[t("ceb0")];n.apply(null,e)}.bind(this)).catch(t.oe)},Schedule:function(n){t.e("chunk-2d20f6d8").then(function(){var e=[t("b41a")];n.apply(null,e)}.bind(this)).catch(t.oe)},Grades:function(n){t.e("chunk-2d0b3030").then(function(){var e=[t("270e")];n.apply(null,e)}.bind(this)).catch(t.oe)},Messages:function(n){t.e("chunk-2d0e5b58").then(function(){var e=[t("9649")];n.apply(null,e)}.bind(this)).catch(t.oe)},Settings:function(n){t.e("chunk-2d21dca0").then(function(){var e=[t("d394")];n.apply(null,e)}.bind(this)).catch(t.oe)}},data:function(){return{}},methods:{},props:{tabContent:{type:String,default:"Dashboard"}},created:function(){}},_=w,k=(t("c115"),Object(r["a"])(_,C,g,!1,null,null,null)),y=k.exports,T={name:"Home",components:{Header:d,Aside:v,Main:y},data:function(){return{currTabContent:"Dashboard"}},methods:{selectTabContent:function(n){console.log(n),this.currTabContent=n}}},x=T,S=(t("b835"),Object(r["a"])(x,a,o,!1,null,null,null));e["default"]=S.exports},"0b6c":function(n,e,t){"use strict";t("11fa")},"11fa":function(n,e,t){},"252a":function(n,e,t){},"2a75":function(n,e,t){},b835:function(n,e,t){"use strict";t("fc17")},c115:function(n,e,t){"use strict";t("252a")},ed8f:function(n,e,t){"use strict";t("2a75")},fc17:function(n,e,t){}}]);
//# sourceMappingURL=chunk-4ccd87a4.c30e3c57.js.map