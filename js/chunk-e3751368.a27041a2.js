(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3751368"],{"08d4":function(t,e,n){},"196d":function(t,e,n){},"1b56":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exam-view"},[n("Nav",{attrs:{title:t.pageTitle,isLeftArrow:!0,isRightText:!1}}),n("div",{staticClass:"exam-view-content"},[n("div",{staticClass:"exam-list"},t._l(t.examData,(function(e,a){return n("div",{key:a,staticClass:"exam-item"},[n("div",{staticClass:"left"},[n("van-tag",{staticClass:"tag",attrs:{color:"#7232dd",type:"danger"}}),t._v(t._s(e.subjectName)+" ")],1),n("div",{staticClass:"right"},[t._v(t._s(e.score))])])})),0)]),n("Footer",{attrs:{activeItem:1}})],1)},i=[],s=n("71a8"),o=n("2f35"),r={name:"ExamView",components:{Nav:s["a"],Footer:o["a"]},data:function(){return{pageTitle:"",examData:[{subjectName:"Science",score:"50/50"},{subjectName:"English",score:"50/50"},{subjectName:"Filipino",score:"50/50"},{subjectName:"Mathematics",score:"50/50"},{subjectName:"Mapeh",score:"50/50"}]}},methods:{},mounted:function(){this.pageTitle=this.$route.params.pageTitle}},c=r,u=(n("efa2"),n("2877")),l=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=l.exports},"1be43":function(t,e,n){"use strict";n("196d")},"2f35":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.footerItems[t.userDetails.AccountType],(function(e,a){return n("van-tabbar-item",{key:a,attrs:{icon:e.icon},on:{click:function(n){return t.goPage(e.link)}}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)},i=[],s=(n("a9e3"),{name:"Footer",components:{},data:function(){return{active:0,userDetails:{},footerItems:{0:[],1:[{name:"Home",icon:"home-o",link:"UserHome"},{name:"Class",icon:"notes-o",link:"Class"},{name:"Settings",icon:"setting-o",link:"Settings"}],2:[{name:"Home",icon:"home-o",link:"UserHome"},{name:"Class",icon:"notes-o",link:"Class"},{name:"Message",icon:"comment-o",link:"MessageList"},{name:"Settings",icon:"setting-o",link:"Settings"}]}}},props:{activeItem:{type:Number,default:0}},methods:{goPage:function(t){this.$router.push({name:t})}},computed:{},mounted:function(){this.userDetails=JSON.parse(localStorage.getItem("user")),this.active=this.activeItem}}),o=s,r=(n("1be43"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),i=n("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),c=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7027:function(t,e,n){},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var s,o;return i&&"function"==typeof(s=e.constructor)&&s!==n&&a(o=s.prototype)&&o!==n.prototype&&i(t,o),t}},"71a8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("van-nav-bar",{attrs:{title:t.title,"left-text":t.isLeftArrow?"Back":"","right-text":t.isRightText?"Logout":"","left-arrow":t.isLeftArrow},on:{"click-left":t.onClickLeft,"click-right":t.logout}})],1)},i=[],s={name:"Nav",components:{},data:function(){return{}},props:{title:{type:String,default:""},isLeftArrow:{type:Boolean,default:!1},isRightText:{type:Boolean,default:!1}},methods:{onClickLeft:function(){this.$router.go(-1)},logout:function(){this.$router.push({name:"UserLogin"})}}},o=s,r=(n("dcff"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),s=n("94ca"),o=n("6eeb"),r=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),m=n("7c73"),p=n("241c").f,v=n("06cf").f,d=n("9bf2").f,g=n("58a8").trim,h="Number",b=i[h],N=b.prototype,I=c(m(N))==h,k=function(t){var e,n,a,i,s,o,r,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(s=u.slice(2),o=s.length,r=0;r<o;r++)if(c=s.charCodeAt(r),c<48||c>i)return NaN;return parseInt(s,a)}return+u};if(s(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(I?f((function(){N.valueOf.call(n)})):c(n)!=h)?u(new b(k(e)),n,_):k(e)},C=a?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;C.length>E;E++)r(b,x=C[E])&&!r(_,x)&&d(_,x,v(b,x));_.prototype=N,N.constructor=_,o(i,h,_)}},dcff:function(t,e,n){"use strict";n("08d4")},efa2:function(t,e,n){"use strict";n("7027")}}]);
//# sourceMappingURL=chunk-e3751368.a27041a2.js.map