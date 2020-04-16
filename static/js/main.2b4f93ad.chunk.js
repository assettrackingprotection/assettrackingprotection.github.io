(this["webpackJsonppersonal-asset-tracker"]=this["webpackJsonppersonal-asset-tracker"]||[]).push([[0],{231:function(e,t,a){e.exports=a(457)},243:function(e,t,a){},456:function(e,t,a){},457:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(52),c=a.n(l),s=a(85),o=a(467),u=a(466),i=a(29),m=a(225),p=a(224),h=a(27);var f=function(){return n.a.createElement(s.a,{bg:"dark",variant:"dark",expand:"lg"},n.a.createElement("div",{className:"container"},n.a.createElement(s.a.Brand,{as:h.b,to:"/"},"ATP"),n.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(o.a,{className:"mr-auto"},n.a.createElement(o.a.Link,{as:h.b,to:"/"},"Home"),n.a.createElement(o.a.Link,{as:h.b,to:"/assets"},"Assets"),n.a.createElement(u.a,{className:"mr-auto",title:"Pages",id:"basic-nav-dropdown"},n.a.createElement(u.a.Item,{as:h.b,to:"/contact"},"Contact"),n.a.createElement(u.a.Item,{as:h.b,to:"/page2"},"Page 2"),n.a.createElement(u.a.Item,{as:h.b,to:"/page3"},"Page 3"))),n.a.createElement(i.a,{inline:!0},n.a.createElement(m.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),n.a.createElement(p.a,{variant:"outline-success"},"Search")),n.a.createElement(p.a,{className:"ml-2",variant:"outline-primary",as:h.b,to:"/login"},"Login"))))},E=a(6),d=a.n(E),b=a(8),g=a(20),v=a(226),y=a(468);a(243);var k=function(e){var t=e.asset;return n.a.createElement(v.a,{md:"6",lg:"4",className:"asset-card"},n.a.createElement(y.a,null,n.a.createElement(y.a.Title,null,"".concat(t.name,": $").concat(t.value)),n.a.createElement(y.a.Text,null,t.description),n.a.createElement(p.a,null,"View Details")))},w=a(463),N=a(54),x=a(42),j=a(43),O=a(35),T=a.n(O);var A="".concat("https","://").concat("example.com"),P=new(function(){function e(){Object(x.a)(this,e)}return Object(j.a)(e,[{key:"register",value:function(){return"".concat(this.baseRoute,"/register")}},{key:"login",value:function(){return"".concat(this.baseRoute,"/login")}},{key:"refresh",value:function(){return"".concat(this.baseRoute,"/refresh")}},{key:"isLoggedIn",value:function(){return"".concat(this.baseRoute,"/isLoggedIn")}},{key:"userDetails",value:function(){return"".concat(this.baseRoute,"/userDetails")}},{key:"baseRoute",get:function(){return"".concat(A,"/auth")}}]),e}()),S=new(function(){function e(){Object(x.a)(this,e),this.baseKey="ATP"}return Object(j.a)(e,[{key:"save",value:function(e,t){localStorage.setItem("".concat(this.baseKey,".").concat(e),JSON.stringify(t))}},{key:"load",value:function(e){return JSON.parse(localStorage.getItem("".concat(this.baseKey,".").concat(e)))}},{key:"accessToken",get:function(){return this.load("accessToken")},set:function(e){this.save("accessToken",e)}},{key:"refreshToken",get:function(){return this.load("refreshToken")},set:function(e){this.save("refreshToken",e)}}]),e}()),I=new(function(){function e(){Object(x.a)(this,e)}return Object(j.a)(e,[{key:"register",value:function(){var e=Object(b.a)(d.a.mark((function e(t,a,r,n,l){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post(P.register(),{email:t,password:a,firstName:r,lastName:n,phone:l});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,r,n,l){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(b.a)(d.a.mark((function e(t,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post(P.login(),{email:t,password:a});case 3:return r=e.sent,this.accessToken=r.data.token,this.refreshToken=r.data.refresh,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post(P.refresh(),{refresh:this.refreshToken});case 3:return t=e.sent,this.accessToken=t.data.token,this.refreshToken=t.data.refresh,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"isLoggedIn",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t,a=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(a.length>0&&void 0!==a[0])||a[0],e.prev=1,e.next=4,T.a.get(P.isLoggedIn(),{headers:{Authorization:"Bearer ".concat(this.accessToken)}});case 4:return e.abrupt("return",!0);case 7:if(e.prev=7,e.t0=e.catch(1),!t){e.next=22;break}return e.next=12,this.refresh();case 12:if(!e.sent){e.next=19;break}return e.next=16,this.isLoggedIn(!1);case 16:return e.abrupt("return",e.sent);case 19:return e.abrupt("return",!1);case 20:e.next=23;break;case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"userDetails",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(P.userDetails(),{headers:this.authorizationHeader});case 3:return t=e.sent,e.abrupt("return",{email:t.data.email,firstName:t.data.firstName,lastName:t.data.lastName,phone:t.data.phone});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"accessToken",get:function(){return S.accessToken},set:function(e){S.accessToken=e}},{key:"refreshToken",get:function(){return S.refreshToken},set:function(e){S.refreshToken=e}},{key:"authHeaders",get:function(){return{Authorization:"Bearer ".concat(this.accessToken)}}}]),e}());var L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",a=Object(N.f)();Object(r.useEffect)((function(){function r(){return(r=Object(b.a)(d.a.mark((function r(){return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I.isLoggedIn();case 2:r.sent?e():a.push(t);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[])},C=new(function(){function e(){Object(x.a)(this,e)}return Object(j.a)(e,[{key:"singleAsset",value:function(e){return"".concat(this.baseRoute,"/").concat(e)}},{key:"baseRoute",get:function(){return"".concat(A,"/asset")}}]),e}()),F=new(function(){function e(){Object(x.a)(this,e)}return Object(j.a)(e,[{key:"getAllAssets",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(C.baseRoute,{headers:I.authHeaders});case 3:return t=e.sent,e.abrupt("return",t.data.assets);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSingleAsset",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(C.singleAsset(t),{headers:I.authHeaders});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"createAsset",value:function(){var e=Object(b.a)(d.a.mark((function e(t,a,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post(C.baseRoute,{name:t,value:a,description:r},{headers:I.authHeaders});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"updateAsset",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var a,r,n,l=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:null,r=l.length>2&&void 0!==l[2]?l[2]:null,n=l.length>3&&void 0!==l[3]?l[3]:null,e.prev=3,e.next=6,T.a.patch(C.singleAsset(t),{name:a,value:r,description:n},{headers:I.authHeaders});case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteAsset",value:function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.delete(C.singleAsset(t),{headers:I.authHeaders});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}());var R=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1];return L((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getAllAssets();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),n.a.createElement(w.a,null,a.map((function(e){return n.a.createElement(k,{key:e.id,asset:e})})))},G=a(464);var H=function(){return n.a.createElement("div",null,n.a.createElement(G.a,null,n.a.createElement("br",null),n.a.createElement(w.a,null,n.a.createElement(v.a,null,n.a.createElement("h1",null,"Your Assets:")),n.a.createElement(v.a,null,n.a.createElement(p.a,{variant:"success btn-lg float-right",as:h.b,to:"/add_asset"},"New"))),n.a.createElement(R,null)))},z=a(84),B=a(119),D=a(80);var q=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement("h1",null,"ATP - Asset Tracking & Protection"),n.a.createElement("br",null),n.a.createElement(z.a,null,n.a.createElement(z.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:"https://www.bunchandbrocklaw.com/wp-content/uploads/2018/12/chapter-7-exemptions-1072x425.jpg",alt:"First slide"})),n.a.createElement(z.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:"https://oregonshar.files.wordpress.com/2014/04/1404-mustangs_088-line-of-pony-cars.jpg?w=848",alt:"Second slide"})),n.a.createElement(z.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:"https://images.macrumors.com/t/0dAUvf2F-YHP97tMDCDAnEwMSok=/800x0/article-new/2018/12/appleproductlineup-800x313.jpg",alt:"Third slide"}))),n.a.createElement("br",null),n.a.createElement("h3",null,"About ATP"),n.a.createElement("br",null),n.a.createElement("p",null,"We should come up with a paragraph here about the company's history and what our slogan is or something like that."),n.a.createElement("br",null),n.a.createElement("h3",null,"ATP Team"),n.a.createElement(w.a,null,n.a.createElement(v.a,{xs:6,md:4},n.a.createElement(B.a,{src:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?w968h681",thumbnail:!0}),n.a.createElement("h4",null,"Tyler Green"),n.a.createElement("br",null),n.a.createElement("p",null,"about Tyler")),n.a.createElement(v.a,{xs:6,md:4},n.a.createElement(B.a,{src:"https://s.hdnux.com/photos/51/23/24/10827008/3/920x920.jpg",thumbnail:!0}),n.a.createElement("h4",null,"Ethan Watson"),n.a.createElement("br",null),n.a.createElement("p",null,"about Ethan")),n.a.createElement(v.a,{xs:6,md:4,className:"shadow-lg"},n.a.createElement(B.a,{style:{marginTop:12},src:"https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",thumbnail:!0}),n.a.createElement("h3",{className:"text-center"},"Jason Boyd"),n.a.createElement("div",{className:"p-3"},n.a.createElement(w.a,null,n.a.createElement(v.a,{className:"text-right"},n.a.createElement(D.a,{size:32})),n.a.createElement(v.a,{xs:8,className:"text-left"},n.a.createElement("p",{className:"lead"},n.a.createElement("a",{href:"mailto:jasonboyd99@gmail.com?"},"Email Jason")))),n.a.createElement(w.a,null,n.a.createElement(v.a,{className:"text-right"},n.a.createElement(D.b,{size:32})),n.a.createElement(v.a,{xs:8,className:"text-left"},n.a.createElement("p",{className:"lead"},n.a.createElement("a",{target:"_blank",href:"https://github.com/itsjaboyd"},"Jason's Github")))),n.a.createElement(w.a,null,n.a.createElement(v.a,{className:"text-right"},n.a.createElement(D.c,{size:32})),n.a.createElement(v.a,{xs:8,className:"text-left"},n.a.createElement("p",{className:"lead"},"801 - 529 - 0853")))),n.a.createElement("h4",{className:"p-2"},"About Jason"),n.a.createElement("hr",null),n.a.createElement("p",null,"Jason is currently a senior studying computer science at Utah State Univeristy in Logan, Utah. His interests include mobile application development, producing music, and exploring the outdoors."))))},J=a(83),M=a(121);var U=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(g.a)(e,2),a=t[0],l=t[1];return n.a.createElement("form",{id:"contact-form",onSubmit:function(e){var t=a.name+"\n"+a.email+"\n"+a.message;alert("STATE DATA:\n"+t)},method:"POST"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",value:a.name,onChange:function(e){return l(Object(M.a)({},a,{name:e.target.value}))}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",value:a.email,onChange:function(e){return l(Object(M.a)({},a,{email:e.target.value}))}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"message"},"Message"),n.a.createElement("textarea",{className:"form-control",rows:"5",value:a.message,onChange:function(e){return l(Object(M.a)({},a,{message:e.target.value}))}})),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"))};var $=function(){var e=Object(J.withScriptjs)(Object(J.withGoogleMap)((function(e){return n.a.createElement(J.GoogleMap,{defaultZoom:10,defaultCenter:{lat:41.7355556,lng:-111.8336111}},n.a.createElement(J.Marker,{position:{lat:41.7355556,lng:-111.8336111}}))})));return n.a.createElement("div",null,n.a.createElement(G.a,null,n.a.createElement("div",{className:"jumbotron text-center"},n.a.createElement("h1",{className:"display-2"},"Contact ATP!"),n.a.createElement("div",{style:{heading:{color:"white",backgroundColor:"black"},personalImage:{margin:24}}.description},n.a.createElement("p",{className:"lead"},"Although we may not be a fully fledged service yet, we value your feedback and any questions you may have!"))),n.a.createElement(w.a,null,n.a.createElement(v.a,{className:"px-5"},n.a.createElement(U,null)),n.a.createElement(v.a,{className:"text-center"},n.a.createElement("h2",null,"Our Location"),n.a.createElement("p",null,"We are currently based in Logan, Utah."),n.a.createElement("div",{className:"shadow"},n.a.createElement(e,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBOBXN_Ul3kEatVYTHOUzf_-Zr1WBBNljA&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"320px"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}})})))),n.a.createElement("hr",{className:"my-5"})))},W=a(81),_=(a(456),function(e){return new Promise((function(t){return setTimeout(t,e)}))});function Z(e){var t=e.setPage,a=Object(W.a)(),r=a.register,l=a.handleSubmit,c=(a.unregister,a.clearError,a.setError,a.errors,Object(N.f)()),s=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.login(t.email,t.password);case 2:e.sent?c.push("/assets"):alert("login error");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"login-page"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"display-2"},"ATP"),n.a.createElement("h4",null,"Please login")),n.a.createElement("form",{className:"login-form",onSubmit:l(s)},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{className:"form-control form-control-lg",name:"email",placeholder:"example@email.com",type:"email",ref:r({required:!0})}),n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{className:"form-control form-control-lg",name:"password",placeholder:"password",type:"password",ref:r({required:!0})})),n.a.createElement("div",{className:"form-group text-center"},n.a.createElement("input",{type:"checkbox",name:"remember",ref:r}),n.a.createElement("label",{className:"mx-2",htmlFor:"remember"},"Remember Me")),n.a.createElement("div",null,n.a.createElement(w.a,null,n.a.createElement(v.a,null,n.a.createElement("button",{className:"btn btn-outline-primary btn-block",type:"submit"},"Login")),n.a.createElement(v.a,null,n.a.createElement("button",{className:"btn btn-outline-success btn-block",type:"submit",onClick:function(){t(!1)}},"Register"))))))}function K(){var e=Object(W.a)(),t=e.register,a=e.handleSubmit,r=(e.unregister,e.clearError),l=e.setError,c=e.errors,s=Object(N.f)(),o=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.register(t.email,t.password,t.firstName,t.lastName,t.phone);case 2:if(!e.sent){e.next=10;break}return e.next=6,I.login(t.email,t.password);case 6:e.sent?s.push("/assets"):alert("login error"),e.next=11;break;case 10:alert("register error");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"login-page"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"display-2"},"ATP"),n.a.createElement("h4",null,"Registration")),n.a.createElement("div",null,n.a.createElement("form",{className:"register-form",onSubmit:a(o)},n.a.createElement("div",{className:"form-group"},n.a.createElement(w.a,null,n.a.createElement(v.a,null,n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{className:"form-control",type:"text",placeholder:"First Name",name:"firstName",ref:t({required:!0})})),n.a.createElement(v.a,null,n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Last Name",name:"lastName",ref:t({required:!0})}))),n.a.createElement("label",{htmlFor:"email"},"Email Address"),n.a.createElement("input",{className:"form-control",type:"email",placeholder:"example@email.com",name:"email",ref:t({required:!0})}),n.a.createElement("label",{htmlFor:"phone"},"Phone Number"),n.a.createElement("input",{className:"form-control",type:"tel",placeholder:"123-456-7890",name:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",ref:t}),n.a.createElement(w.a,null,n.a.createElement(v.a,null,n.a.createElement("label",{htmlFor:"password"},"New Password"),n.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",ref:t({required:!0,validate:{correct:function(e){return!0===/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(e)}}}),onChange:function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,e.next=3,_(1e3);case 3:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(a)?r("Password"):l("Password","notMatch","Password must be 8 characters long, contain one digit, upper, lower and special case character.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))),n.a.createElement("div",{className:"text-center"},c.Password&&n.a.createElement("p",{className:"error-message"},c.Password.message)),n.a.createElement("button",{className:"btn btn-outline-success btn-block my-4",type:"submit"},"Register")))))}var Y=function(){var e=Object(r.useState)(!0),t=Object(g.a)(e,2),a=t[0],l=t[1];return a?n.a.createElement(Z,{setPage:l}):n.a.createElement(K,null)},V=a(465);var X=function(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),a=(t[0],t[1]),l=Object(N.f)(),c=Object(W.a)(),s=c.handleSubmit,o=c.register;c.errors,L((function(){a(!0)}));var u=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.createAsset(t.name,t.value,t.description);case 2:e.sent?l.push("/assets"):console.error("Error creating asset");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(G.a,null,n.a.createElement("br",null),n.a.createElement("h1",null,"Add Asset"),n.a.createElement("br",null),n.a.createElement(i.a,{onSubmit:s(u)},n.a.createElement(i.a.Group,{controlId:"formGroupName"},n.a.createElement(i.a.Label,null,"Name"),n.a.createElement(i.a.Control,{type:"name",name:"name",placeholder:"Enter name",ref:o({required:!0})})),n.a.createElement(i.a.Group,{controlId:"formGroupPrice"},n.a.createElement(i.a.Label,null,"Price"),n.a.createElement(V.a,null,n.a.createElement(V.a.Prepend,null,n.a.createElement(V.a.Text,{id:"inputGroupPrepend"},"$")),n.a.createElement(i.a.Control,{type:"number",step:"any",name:"value",placeholder:"Enter price",ref:o({required:!0})}))),n.a.createElement(i.a.Group,{controlId:"formGroupDescription"},n.a.createElement(i.a.Label,null,"Description"),n.a.createElement(i.a.Control,{type:"description",placeholder:"Enter description",name:"description",ref:o})),n.a.createElement(i.a.Group,null,n.a.createElement(i.a.Label,null,"Picture"),n.a.createElement(i.a.File,{id:"custom-file",label:"Custom file input",name:"picture",ref:o,custom:!0})),n.a.createElement(p.a,{variant:"success",type:"submit"},"Create")))};function Q(){return n.a.createElement(q,null)}function ee(){return n.a.createElement(H,null)}function te(){return n.a.createElement("h2",null,"Page1")}function ae(){return n.a.createElement("h2",null,"Page2")}function re(){return n.a.createElement("h2",null,"Page3")}function ne(){return n.a.createElement($,null)}var le=function(){return n.a.createElement("div",null,n.a.createElement(h.a,null,n.a.createElement(f,null),n.a.createElement(N.c,null,n.a.createElement(N.a,{path:"/assets"},n.a.createElement(ee,null)),n.a.createElement(N.a,{path:"/add_asset"},n.a.createElement(X,null)),n.a.createElement(N.a,{path:"/page1"},n.a.createElement(te,null)),n.a.createElement(N.a,{path:"/page2"},n.a.createElement(ae,null)),n.a.createElement(N.a,{path:"/page3"},n.a.createElement(re,null)),n.a.createElement(N.a,{path:"/contact"},n.a.createElement(ne,null)),n.a.createElement(N.a,{path:"/login"},n.a.createElement(Y,null)),n.a.createElement(N.a,{path:"/"},n.a.createElement(Q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[231,1,2]]]);
//# sourceMappingURL=main.2b4f93ad.chunk.js.map