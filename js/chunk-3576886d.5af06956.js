(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3576886d"],{"1fdd":function(e,t,r){e.exports=r.p+"img/Student.b2d2814e.jpg"},"43f8":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-login"},[s("div",{staticClass:"login-wrapper"},[e._m(0),s("div",{staticClass:"login-form"},[s("div",{staticClass:"user-select"},[s("van-grid",{attrs:{"column-num":2,gutter:30}},e._l(e.userType,(function(t,n){return s("van-grid-item",{key:n,class:t==e.currentUserType?"active":null,attrs:{text:t},on:{click:function(t){return e.selectUser(n)}}},[s("van-image",{attrs:{width:"100px",height:"100px",fit:"contain",src:r("710a")("./"+t+".jpg")}}),s("span",[e._v(e._s(t))])],1)})),1)],1),s("van-form",{on:{submit:function(t){return e.login()}}},[s("van-field",{attrs:{name:"Username",label:"Account ID",placeholder:"Enter Account ID",rules:[{required:!0,message:"Username is required"}]},model:{value:e.userDetails.userID,callback:function(t){e.$set(e.userDetails,"userID",t)},expression:"userDetails.userID"}}),s("van-field",{attrs:{type:"password",name:"Password",label:"Password",placeholder:"Enter password",rules:[{required:!0,message:"Password is required"}]},model:{value:e.userDetails.password,callback:function(t){e.$set(e.userDetails,"password",t)},expression:"userDetails.password"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" Login ")])],1)],1),s("div",{staticClass:"other-options"},[s("div",{staticStyle:{"margin-top":"40px","text-align":"center",padding:"0px 16px"},on:{click:function(t){return e.goPage("Register")}}},[e._v(" Register ")])])],1)])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-banner"},[r("h2",[e._v("STUDENT PORTAL")]),r("h3",[e._v("MOBILE APP")])])}],a=(r("96cf"),r("1da1")),i=r("d399"),o={name:"UserLogin",components:{},data:function(){return{username:"",password:"",activeUser:0,userType:["Student","Parent"],userDetails:{username:"",userID:"",password:""}}},methods:{selectUser:function(e){this.activeUser=e,this.$store.dispatch("setUserType",this.userType[this.activeUser])},login:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={request:2,data:{AccountID:e.userDetails.userID,AccountPassword:e.userDetails.password}},t.next=3,e.http.post("Student"==e.currentUserType?e.api.StudentService:e.api.ParentService,r).then((function(t){t.data.length>0?(e.$store.dispatch("setUserDetails",t.data[0]),localStorage.setItem("user",JSON.stringify(t.data[0])),e.$store.dispatch("setLogin",!0),e.goPage("UserHome")):Object(i["a"])("Invalid Account")})).catch((function(e){Object(i["a"])("Connection Error"),console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},goPage:function(e){this.$router.push({name:e})}},computed:{currentUserType:function(){return this.$store.state.userType}}},u=o,c=r("2877"),l=Object(c["a"])(u,s,n,!1,null,null,null);t["default"]=l.exports},"69fb":function(e,t,r){e.exports=r.p+"img/Parent.1f9b78e8.jpg"},"710a":function(e,t,r){var s={"./Parent.jpg":"69fb","./Student.jpg":"1fdd"};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id="710a"}}]);
//# sourceMappingURL=chunk-3576886d.5af06956.js.map