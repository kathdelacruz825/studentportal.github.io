(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-245ab7f4"],{"08d4":function(e,t,a){},"1dae":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-home"},[a("Nav",{attrs:{title:e.pageTitle,isLeftArrow:!0,isRightText:!1}}),a("div",{staticClass:"content"},[a("van-form",{on:{submit:e.register}},[a("van-divider",[e._v("Login Details")]),a("van-field",{attrs:{name:"radio",label:"Account Type"},scopedSlots:e._u([{key:"input",fn:function(){return[a("van-radio-group",{attrs:{direction:"horizontal"},model:{value:e.accountType,callback:function(t){e.accountType=t},expression:"accountType"}},[a("van-radio",{attrs:{name:"Student"},on:{click:function(t){return e.selectAccountType("Student")}}},[e._v("Student")]),a("van-radio",{attrs:{name:"Parent"},on:{click:function(t){return e.selectAccountType("Parent")}}},[e._v("Parent")])],1)]},proxy:!0}])}),"Student"==e.accountType?a("div",[a("van-field",{attrs:{name:"Account ID",label:"Account ID",type:"text",placeholder:"Enter account ID",rules:[{required:!0,message:"Account ID is required"}]},model:{value:e.studentDetails.accountID,callback:function(t){e.$set(e.studentDetails,"accountID",t)},expression:"studentDetails.accountID"}}),a("van-field",{attrs:{type:"password",name:"Password",label:"Password",placeholder:"Enter password",rules:[{required:!0,message:"Password is required"}]},model:{value:e.studentDetails.AccountPassword,callback:function(t){e.$set(e.studentDetails,"AccountPassword",t)},expression:"studentDetails.AccountPassword"}}),a("van-field",{attrs:{type:"password",name:"Confirm Password",label:"Confirm Password",placeholder:"Enter confirm password",rules:[{required:!0,message:"Confirm password is required"}]},model:{value:e.studentConfirmPassword,callback:function(t){e.studentConfirmPassword=t},expression:"studentConfirmPassword"}}),a("van-divider",[e._v("Personal Details")]),a("van-field",{attrs:{name:"Last Name",label:"Last Name",type:"text",placeholder:"Enter last name",rules:[{required:!0,message:"Last name is required"}]},model:{value:e.studentDetails.LastName,callback:function(t){e.$set(e.studentDetails,"LastName",t)},expression:"studentDetails.LastName"}}),a("van-field",{attrs:{name:"First Name",label:"First Name",type:"text",placeholder:"Enter first name",rules:[{required:!0,message:"First name is required"}]},model:{value:e.studentDetails.FirstName,callback:function(t){e.$set(e.studentDetails,"FirstName",t)},expression:"studentDetails.FirstName"}}),a("van-field",{attrs:{name:"Middle Name",label:"Middle Name",type:"text",placeholder:"Enter middle name",rules:[{required:!0,message:"Middle name is required"}]},model:{value:e.studentDetails.MiddleName,callback:function(t){e.$set(e.studentDetails,"MiddleName",t)},expression:"studentDetails.MiddleName"}}),a("van-field",{attrs:{name:"Extension Name",label:"Extension Name",type:"text",placeholder:"Enter extension name",rules:[{required:!1}]},model:{value:e.studentDetails.ExtName,callback:function(t){e.$set(e.studentDetails,"ExtName",t)},expression:"studentDetails.ExtName"}}),a("van-field",{attrs:{name:"Phone Number",label:"Phone Number",type:"number",placeholder:"Enter phone number",rules:[{required:!1}]},model:{value:e.studentDetails.PhoneNumber,callback:function(t){e.$set(e.studentDetails,"PhoneNumber",t)},expression:"studentDetails.PhoneNumber"}}),a("van-field",{attrs:{name:"Email",label:"Email",type:"email",placeholder:"Enter email",rules:[{required:!1}]},model:{value:e.studentDetails.Email,callback:function(t){e.$set(e.studentDetails,"Email",t)},expression:"studentDetails.Email"}}),a("van-divider",[e._v("School Details")]),a("van-cell",{attrs:{title:"Course","is-link":"",value:e.currentCourse},on:{click:function(t){e.showCourse=!0}}}),a("van-cell",{attrs:{title:"Year Level","is-link":"",value:e.currentYearLevel},on:{click:function(t){e.show=!0}}}),a("van-action-sheet",{attrs:{actions:e.courseActions,"cancel-text":"Cancel",description:"Select Course","close-on-click-action":""},on:{select:e.selectCourse},model:{value:e.showCourse,callback:function(t){e.showCourse=t},expression:"showCourse"}}),a("van-action-sheet",{attrs:{actions:e.yearLevelActions,"cancel-text":"Cancel",description:"Select Year Level","close-on-click-action":""},on:{select:e.selectYearLevel},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1):e._e(),"Parent"==e.accountType?a("div",[a("van-field",{attrs:{name:"Account ID",label:"Account ID",type:"text",placeholder:"Enter account ID",rules:[{required:!0,message:"Account ID is required"}]},model:{value:e.parentDetails.accountID,callback:function(t){e.$set(e.parentDetails,"accountID",t)},expression:"parentDetails.accountID"}}),a("van-field",{attrs:{type:"password",name:"Password",label:"Password",placeholder:"Enter password",rules:[{required:!0,message:"Password is required"}]},model:{value:e.parentDetails.AccountPassword,callback:function(t){e.$set(e.parentDetails,"AccountPassword",t)},expression:"parentDetails.AccountPassword"}}),a("van-field",{attrs:{type:"password",name:"Confirm Password",label:"Confirm Password",placeholder:"Enter confirm password",rules:[{required:!0,message:"Confirm password is required"}]},model:{value:e.parentConfirmPassword,callback:function(t){e.parentConfirmPassword=t},expression:"parentConfirmPassword"}}),a("van-divider",[e._v("Personal Details")]),a("van-field",{attrs:{name:"Last Name",label:"Last Name",type:"text",placeholder:"Enter last name",rules:[{required:!0,message:"Last name is required"}]},model:{value:e.parentDetails.LastName,callback:function(t){e.$set(e.parentDetails,"LastName",t)},expression:"parentDetails.LastName"}}),a("van-field",{attrs:{name:"First Name",label:"First Name",type:"text",placeholder:"Enter first name",rules:[{required:!0,message:"First name is required"}]},model:{value:e.parentDetails.FirstName,callback:function(t){e.$set(e.parentDetails,"FirstName",t)},expression:"parentDetails.FirstName"}}),a("van-field",{attrs:{name:"Middle Name",label:"Middle Name",type:"text",placeholder:"Enter middle name",rules:[{required:!0,message:"Middle name is required"}]},model:{value:e.parentDetails.MiddleName,callback:function(t){e.$set(e.parentDetails,"MiddleName",t)},expression:"parentDetails.MiddleName"}}),a("van-field",{attrs:{name:"Extension Name",label:"Extension Name",type:"text",placeholder:"Enter extension name",rules:[{required:!1}]},model:{value:e.parentDetails.ExtName,callback:function(t){e.$set(e.parentDetails,"ExtName",t)},expression:"parentDetails.ExtName"}}),a("van-field",{attrs:{name:"Phone Number",label:"Phone Number",type:"number",placeholder:"Enter phone number",rules:[{required:!1}]},model:{value:e.parentDetails.PhoneNumber,callback:function(t){e.$set(e.parentDetails,"PhoneNumber",t)},expression:"parentDetails.PhoneNumber"}}),a("van-field",{attrs:{name:"Email",label:"Email",type:"email",placeholder:"Enter email",rules:[{required:!1}]},model:{value:e.parentDetails.Email,callback:function(t){e.$set(e.parentDetails,"Email",t)},expression:"parentDetails.Email"}}),a("van-divider",[e._v("School Details")]),a("van-field",{attrs:{name:"Student ID",label:"Student ID",type:"text",placeholder:"Enter child school ID",rules:[{required:!0,message:"Child schoold ID is required"}]},model:{value:e.parentDetails.studentID,callback:function(t){e.$set(e.parentDetails,"studentID",t)},expression:"parentDetails.studentID"}})],1):e._e(),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" Register ")])],1)],1)],1)],1)},n=[],i=(a("d81d"),a("b0c0"),a("71a8")),r=a("d399"),l={name:"Register",components:{Nav:i["a"]},data:function(){return{pageTitle:"Register",studentConfirmPassword:"",parentConfirmPassword:"",accountType:"Student",studentDetails:{AccountType:"",accountID:"",AccountPassword:"",LastName:"",FirstName:"",MiddleName:"",ExtName:"",PhoneNumber:"",Email:"",Icon:"",YearLevel:"",Course:"",ParentID:""},parentDetails:{AccountType:"",accountID:"",AccountPassword:"",LastName:"",FirstName:"",MiddleName:"",ExtName:"",PhoneNumber:"",Email:"",studentID:""},show:!1,showCourse:!1,yearLevelActions:[],currentYearLevel:"",courseActions:[],currentCourse:""}},methods:{selectAccountType:function(e){"Student"==this.accountType?this.studentDetails.AccountType=e:this.parentDetails.AccountType=e},selectYearLevel:function(e){this.currentYearLevel=e.name,this.studentDetails.YearLevel=e.id},selectCourse:function(e){this.currentCourse=e.name,this.studentDetails.Course=e.id},register:function(){var e=this;if("Student"==this.accountType)if(this.studentDetails.AccountPassword==this.studentConfirmPassword){var t={request:3,data:{AccountType:"Student"==this.studentDetails.AccountType?0:1,AccountStatus:1,AccountPending:0,AccountOnlineState:0,AccountID:this.studentDetails.accountID,AccountPassword:this.studentDetails.AccountPassword,LastName:this.studentDetails.LastName,FirstName:this.studentDetails.FirstName,MiddleName:this.studentDetails.MiddleName,ExtName:this.studentDetails.ExtName,PhoneNumber:this.studentDetails.PhoneNumber,Email:this.studentDetails.Email,Icon:this.studentDetails.Icon,YearLevel:this.studentDetails.YearLevel,Course:this.studentDetails.Course,ParentID:this.studentDetails.ParentID}};this.http.post(this.api.StudentService,t).then((function(t){1==t.data[0].State?(e.resetFields(),Object(r["a"])("Successfully registered!")):Object(r["a"])("Register Error!")})).catch((function(e){Object(r["a"])("Connection Error!"),console.log(e)}))}else Object(r["a"])("Password not matched");else console.log(this.parentDetails)},getAllCourse:function(){var e=this,t={request:1,data:{}};this.http.post(this.api.CourseService,t).then((function(t){t.data.map((function(t){var a={};a.id=t.ID,a.name=t.CourseID,a.nameDescription=t.CourseDescription,a.status=t.CourseStatus,e.courseActions.push(a)})),e.studentDetails.Course=e.courseActions[0].name,e.currentCourse=e.courseActions[0].name})).catch((function(e){console.log(e)}))},getAllYearLevel:function(){var e=this,t={request:1,data:{}};this.http.post(this.api.YearLevelService,t).then((function(t){t.data.map((function(t){var a={};a.id=t.ID,a.name=t.YearLevel,a.status=t.YearLevelStatus,e.yearLevelActions.push(a)})),e.studentDetails.YearLevel=e.yearLevelActions[0].name,e.currentYearLevel=e.yearLevelActions[0].name})).catch((function(e){console.log(e)}))},resetFields:function(){this.studentDetails.accountID="",this.studentDetails.AccountPassword="",this.studentDetails.LastName="",this.studentDetails.FirstName="",this.studentDetails.MiddleName="",this.studentDetails.ExtName="",this.studentDetails.PhoneNumber="",this.studentDetails.Email="",this.studentDetails.Icon="",this.studentDetails.YearLevel="",this.studentDetails.Course="",this.studentDetails.ParentID="",this.currentCourse=this.courseActions[0].name,this.studentDetails.Course=this.courseActions[0].name,this.studentDetails.YearLevel=this.yearLevelActions[0].name,this.currentYearLevel=this.yearLevelActions[0].name,this.studentConfirmPassword="",this.parentDetails.AccountType="",this.parentDetailsaccountID="",this.parentDetailsAccountPassword="",this.parentDetailsLastName="",this.parentDetailsFirstName="",this.parentDetailsMiddleName="",this.parentDetailsExtName="",this.parentDetailsPhoneNumber="",this.parentDetailsEmail="",this.parentDetailsstudentID="",this.parentConfirmPassword=""}},created:function(){this.getAllCourse(),this.getAllYearLevel()},mounted:function(){"Student"==this.accountType?this.studentDetails.AccountType="Student":this.parentDetails.AccountType="Parent"}},o=l,u=(a("56da"),a("2877")),c=Object(u["a"])(o,s,n,!1,null,null,null);t["default"]=c.exports},"1dde":function(e,t,a){var s=a("d039"),n=a("b622"),i=a("2d00"),r=n("species");e.exports=function(e){return i>=51||!s((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"56da":function(e,t,a){"use strict";a("edfd")},"71a8":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav"},[a("van-nav-bar",{attrs:{title:e.title,"left-text":e.isLeftArrow?"Back":"","right-text":e.isRightText?"Logout":"","left-arrow":e.isLeftArrow},on:{"click-left":e.onClickLeft,"click-right":e.logout}})],1)},n=[],i={name:"Nav",components:{},data:function(){return{}},props:{title:{type:String,default:""},isLeftArrow:{type:Boolean,default:!1},isRightText:{type:Boolean,default:!1}},methods:{onClickLeft:function(){this.$router.go(-1)},logout:function(){this.$router.push({name:"UserLogin"})}}},r=i,l=(a("dcff"),a("2877")),o=Object(l["a"])(r,s,n,!1,null,null,null);t["a"]=o.exports},d81d:function(e,t,a){"use strict";var s=a("23e7"),n=a("b727").map,i=a("1dde"),r=a("ae40"),l=i("map"),o=r("map");s({target:"Array",proto:!0,forced:!l||!o},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},dcff:function(e,t,a){"use strict";a("08d4")},edfd:function(e,t,a){}}]);
//# sourceMappingURL=chunk-245ab7f4.b0bbc594.js.map