(this["webpackJsonppersonal-asset-tracker"]=this["webpackJsonppersonal-asset-tracker"]||[]).push([[0],{293:function(e,t,a){e.exports=a.p+"static/media/profile_icon.6d691fab.jpg"},294:function(e,t,a){e.exports=a(625)},319:function(e,t){},321:function(e,t){},358:function(e,t){},359:function(e,t){},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},620:function(e,t,a){},621:function(e,t,a){},622:function(e,t,a){},623:function(e,t,a){},624:function(e,t,a){},625:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),c=a.n(l),s=a(3),o=a.n(s),u=a(7),i=a(9),m=a(90),p=a(632),E=a(11),h=a(287),d=a(627),f=a(16),b=a(41),g=a(42),v=a(31),w=a.n(v);var y="".concat("https","://").concat("assettrackingprotection.azurewebsites.net"),k=new(function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,[{key:"register",value:function(){return"".concat(this.baseRoute,"/register")}},{key:"login",value:function(){return"".concat(this.baseRoute,"/login")}},{key:"refresh",value:function(){return"".concat(this.baseRoute,"/refresh")}},{key:"isLoggedIn",value:function(){return"".concat(this.baseRoute,"/isLoggedIn")}},{key:"userDetails",value:function(){return"".concat(this.baseRoute,"/userDetails")}},{key:"baseRoute",get:function(){return"".concat(y,"/auth")}}]),e}()),x=new(function(){function e(){Object(b.a)(this,e),this.baseKey="ATP"}return Object(g.a)(e,[{key:"save",value:function(e,t){localStorage.setItem("".concat(this.baseKey,".").concat(e),JSON.stringify(t))}},{key:"load",value:function(e){return JSON.parse(localStorage.getItem("".concat(this.baseKey,".").concat(e)))}},{key:"accessToken",get:function(){return this.load("accessToken")},set:function(e){this.save("accessToken",e)}},{key:"refreshToken",get:function(){return this.load("refreshToken")},set:function(e){this.save("refreshToken",e)}},{key:"assetViewMode",get:function(){var e=this.load("assetViewMode");return null==e?"card":e},set:function(e){this.save("assetViewMode",e)}}]),e}()),N=a(279),j=a.n(N),O=new(function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,[{key:"register",value:function(){var e=Object(u.a)(o.a.mark((function e(t,a,n,r,l){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post(k.register(),{email:t,password:a,firstName:n,lastName:r,phone:l});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,n,r,l){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post(k.login(),{email:t,password:a});case 3:return n=e.sent,this.accessToken=n.data.token,this.refreshToken=n.data.refresh,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post(k.refresh(),{refresh:this.refreshToken});case 3:return t=e.sent,this.accessToken=t.data.token,this.refreshToken=t.data.refresh,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"isLoggedIn",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(a.length>0&&void 0!==a[0])||a[0],e.prev=1,e.next=4,w.a.get(k.isLoggedIn(),{headers:{Authorization:"Bearer ".concat(this.accessToken)}});case 4:return e.abrupt("return",!0);case 7:if(e.prev=7,e.t0=e.catch(1),!t){e.next=22;break}return e.next=12,this.refresh();case 12:if(!e.sent){e.next=19;break}return e.next=16,this.isLoggedIn(!1);case 16:return e.abrupt("return",e.sent);case 19:return e.abrupt("return",!1);case 20:e.next=23;break;case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"userDetails",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(k.userDetails(),{headers:this.authHeaders});case 3:return t=e.sent,e.abrupt("return",{email:t.data.email,firstName:t.data.firstName,lastName:t.data.lastName,phone:t.data.phone});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"accessToken",get:function(){return x.accessToken},set:function(e){x.accessToken=e}},{key:"isAccessTokenExpired",get:function(){if(this.accessToken){var e=j.a.decode(this.accessToken).exp;return new Date(1e3*e)-new Date<=0}return!0}},{key:"refreshToken",get:function(){return x.refreshToken},set:function(e){x.refreshToken=e}},{key:"authHeaders",get:function(){return{Authorization:"Bearer ".concat(this.accessToken)}}}]),e}());var A=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.isLoggedIn();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement("div",{className:"container"},r.a.createElement(m.a.Brand,{as:f.b,to:"/"},"ATP"),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{as:f.b,to:"/"},"Home"),r.a.createElement(p.a.Link,{as:f.b,to:"/assets"},"Assets"),r.a.createElement(p.a.Link,{as:f.b,to:"/contact"},"Contact")),r.a.createElement(E.a,{inline:!0},r.a.createElement(h.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(d.a,{variant:"outline-success"},"Search")),r.a.createElement((function(){return a?r.a.createElement(d.a,{className:"ml-2",variant:"outline-primary",as:f.b,to:"/profile"},"Profile"):r.a.createElement(d.a,{className:"ml-2",variant:"outline-primary",as:f.b,to:"/login"},"Login")}),null))))},T=a(289),S=a(633);var P=function(e,t){var a=e.substr(0,t);return a.length<e.length&&(a+="..."),a};a(420);var L=function(e){var t=e.asset,a=t.description?P(t.description,40):"No description provided",n=t.imageUrl?t.imageUrl:"https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png",l="/asset/"+t.id;return r.a.createElement(T.a,{md:"6",lg:"4",className:"asset-card"},r.a.createElement(S.a,null,r.a.createElement(S.a.Img,{src:n,width:"320",height:"170"}),r.a.createElement(S.a.Title,null,"".concat(t.name,": $").concat(t.value)),r.a.createElement(S.a.Text,null,a),r.a.createElement(d.a,{as:f.b,to:l},"View Details")))};a(421);var C=function(e){var t=e.asset,a=t.description?P(t.description,33):"No description provided",n="/asset/"+t.id;return r.a.createElement("div",{className:"asset-entry"},r.a.createElement(T.a,null,t.name),r.a.createElement(T.a,null,"$".concat(t.value)),r.a.createElement(T.a,null,a),r.a.createElement(T.a,null,r.a.createElement(d.a,{as:f.b,to:n,variant:"primary"},"View Details")))},I=a(628),D=a(51);var F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",a=Object(D.f)();Object(n.useEffect)((function(){function n(){return(n=Object(u.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.isLoggedIn();case 2:n.sent?e():a.push(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}O.isAccessTokenExpired?function(){n.apply(this,arguments)}():e()}),[])},M=new(function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,[{key:"singleAsset",value:function(e){return"".concat(this.baseRoute,"/").concat(e)}},{key:"assetImage",value:function(e){return"".concat(this.baseRoute,"/").concat(e,"/image")}},{key:"baseRoute",get:function(){return"".concat(y,"/asset")}}]),e}()),G=new(function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,[{key:"getAllAssets",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(M.baseRoute,{headers:O.authHeaders});case 3:return t=e.sent,e.abrupt("return",t.data.assets);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSingleAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(M.singleAsset(t),{headers:O.authHeaders});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"createAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t,a,n,r){var l,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post(M.baseRoute,{name:t,value:a,description:n},{headers:O.authHeaders});case 3:return l=e.sent,c=l.data.id,(s=new FormData).append("image",r),e.next=9,w.a.post(M.assetImage(c),s,{headers:O.authHeaders});case 9:return e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"updateAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:null,n=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:null,e.prev=3,e.next=6,w.a.patch(M.singleAsset(t),{name:a,value:n,description:r},{headers:O.authHeaders});case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.delete(M.singleAsset(t),{headers:O.authHeaders});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),V=a(629);a(422);var R=function(e){var t=e.isLoading,a=e.children;return t?r.a.createElement(I.a,null,r.a.createElement(T.a,{xs:"12",className:"d-flex justify-content-center"},r.a.createElement(V.a,{className:"loading-spinner",animation:"border",variant:"primary",role:"status"}))):r.a.createElement(r.a.Fragment,null,a)};a(423);function U(){return r.a.createElement(I.a,null,r.a.createElement(T.a,{xs:"12",className:"no-assets-notice"},r.a.createElement("h3",null,"You have not added any assets.")))}function q(e){var t=e.assets;return t.length>0?r.a.createElement(I.a,null,t.map((function(e){return r.a.createElement(L,{key:e.id,asset:e})}))):r.a.createElement(U,null)}function H(e){var t=e.assets;return t.length>0?r.a.createElement("div",{className:"asset-spreadsheet"},r.a.createElement("div",{className:"asset-spreadsheet-header"},r.a.createElement(T.a,null,"Name"),r.a.createElement(T.a,null,"Value"),r.a.createElement(T.a,null,"Description"),r.a.createElement(T.a,null,"Details")),t.map((function(e){return r.a.createElement(C,{key:e.id,asset:e})}))):r.a.createElement(U,null)}var $=function(e){var t=e.viewMode,a=Object(n.useState)([]),l=Object(i.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(!0),p=Object(i.a)(m,2),E=p[0],h=p[1];return F((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllAssets();case 2:t=e.sent,s(t),h(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement(R,{isLoading:E},"spreadsheet"===t?r.a.createElement(H,{assets:c}):r.a.createElement(q,{assets:c}))},z=a(630),B=a(288),J=a(74),_=a(631);a(424);function W(e){var t=e.viewMode,a=e.setViewMode,n=function(e){x.assetViewMode=e.target.value,a(e.target.value)};return r.a.createElement(T.a,null,r.a.createElement(z.a,null,r.a.createElement(B.a,{className:"view-mode-toggle"},r.a.createElement(J.a,{type:"radio",value:"card",checked:"card"===t,onChange:n}),"Card View"),r.a.createElement(B.a,{className:"view-mode-toggle"},r.a.createElement(J.a,{type:"radio",value:"spreadsheet",checked:"spreadsheet"===t,onChange:n}),"Spreadsheet View")))}var Y=function(){var e=Object(n.useState)(x.assetViewMode),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement("h1",null,"Your Assets:")),r.a.createElement(T.a,null,r.a.createElement(d.a,{variant:"success btn-lg float-right",as:f.b,to:"/add_asset"},"New"))),r.a.createElement(I.a,null,r.a.createElement(W,{viewMode:a,setViewMode:l})),r.a.createElement($,{viewMode:a})))},Z=a(89),K=a(122),X=a(87);var Q=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("h1",null,"ATP - Asset Tracking & Protection"),r.a.createElement("br",null),r.a.createElement(Z.a,null,r.a.createElement(Z.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://www.bunchandbrocklaw.com/wp-content/uploads/2018/12/chapter-7-exemptions-1072x425.jpg",alt:"First slide"})),r.a.createElement(Z.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://oregonshar.files.wordpress.com/2014/04/1404-mustangs_088-line-of-pony-cars.jpg?w=848",alt:"Second slide"})),r.a.createElement(Z.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://images.macrumors.com/t/0dAUvf2F-YHP97tMDCDAnEwMSok=/800x0/article-new/2018/12/appleproductlineup-800x313.jpg",alt:"Third slide"}))),r.a.createElement("br",null),r.a.createElement("h3",null,"About ATP"),r.a.createElement("br",null),r.a.createElement("p",null,"We should come up with a paragraph here about the company's history and what our slogan is or something like that."),r.a.createElement("br",null),r.a.createElement("h3",null,"ATP Team"),r.a.createElement(I.a,null,r.a.createElement(T.a,{xs:6,md:4},r.a.createElement(K.a,{src:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?w968h681",thumbnail:!0}),r.a.createElement("h4",null,"Tyler Green"),r.a.createElement("br",null),r.a.createElement("p",null,"about Tyler")),r.a.createElement(T.a,{xs:6,md:4},r.a.createElement(K.a,{src:"https://s.hdnux.com/photos/51/23/24/10827008/3/920x920.jpg",thumbnail:!0}),r.a.createElement("h4",null,"Ethan Watson"),r.a.createElement("br",null),r.a.createElement("p",null,"about Ethan")),r.a.createElement(T.a,{xs:6,md:4,className:"shadow-lg"},r.a.createElement(K.a,{style:{marginTop:12},src:"https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",thumbnail:!0}),r.a.createElement("h3",{className:"text-center"},"Jason Boyd"),r.a.createElement("div",{className:"p-3"},r.a.createElement(I.a,null,r.a.createElement(T.a,{className:"text-right"},r.a.createElement(X.a,{size:32})),r.a.createElement(T.a,{xs:8,className:"text-left"},r.a.createElement("p",{className:"lead"},r.a.createElement("a",{href:"mailto:jasonboyd99@gmail.com?"},"Email Jason")))),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:"text-right"},r.a.createElement(X.b,{size:32})),r.a.createElement(T.a,{xs:8,className:"text-left"},r.a.createElement("p",{className:"lead"},r.a.createElement("a",{target:"_blank",href:"https://github.com/itsjaboyd"},"Jason's Github")))),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:"text-right"},r.a.createElement(X.c,{size:32})),r.a.createElement(T.a,{xs:8,className:"text-left"},r.a.createElement("p",{className:"lead"},"801 - 529 - 0853")))),r.a.createElement("h4",{className:"p-2"},"About Jason"),r.a.createElement("hr",null),r.a.createElement("p",null,"Jason is currently a senior studying computer science at Utah State Univeristy in Logan, Utah. His interests include mobile application development, producing music, and exploring the outdoors."))))},ee=a(88),te=a(124);var ae=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("form",{id:"contact-form",onSubmit:function(e){var t=a.name+"\n"+a.email+"\n"+a.message;alert("STATE DATA:\n"+t)},method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",value:a.name,onChange:function(e){return l(Object(te.a)({},a,{name:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",value:a.email,onChange:function(e){return l(Object(te.a)({},a,{email:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form-control",rows:"5",value:a.message,onChange:function(e){return l(Object(te.a)({},a,{message:e.target.value}))}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"))};var ne=function(){var e=Object(ee.withScriptjs)(Object(ee.withGoogleMap)((function(e){return r.a.createElement(ee.GoogleMap,{defaultZoom:10,defaultCenter:{lat:41.7355556,lng:-111.8336111}},r.a.createElement(ee.Marker,{position:{lat:41.7355556,lng:-111.8336111}}))})));return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-2"},"Contact ATP!"),r.a.createElement("div",{style:{heading:{color:"white",backgroundColor:"black"},personalImage:{margin:24}}.description},r.a.createElement("p",{className:"lead"},"Although we may not be a fully fledged service yet, we value your feedback and any questions you may have!"))),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:"px-5"},r.a.createElement(ae,null)),r.a.createElement(T.a,{className:"text-center"},r.a.createElement("h2",null,"Our Location"),r.a.createElement("p",null,"We are currently based in Logan, Utah."),r.a.createElement("div",{className:"shadow"},r.a.createElement(e,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBOBXN_Ul3kEatVYTHOUzf_-Zr1WBBNljA&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"320px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))))))},re=a(59),le=(a(620),function(e){return new Promise((function(t){return setTimeout(t,e)}))});function ce(e){var t=e.setPage,a=Object(re.a)(),l=a.register,c=a.handleSubmit,s=Object(n.useState)(!1),m=Object(i.a)(s,2),p=m[0],E=m[1],h=Object(D.f)(),d=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,O.login(t.email,t.password);case 3:e.sent?h.push("/assets"):alert("login error"),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(R,{isLoading:p},r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"display-2"},"ATP"),r.a.createElement("h4",null,"Please login")),r.a.createElement("form",{className:"login-form",onSubmit:c(d)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form-control form-control-lg",name:"email",placeholder:"example@email.com",type:"email",ref:l({required:!0})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"form-control form-control-lg",name:"password",placeholder:"password",type:"password",ref:l({required:!0})})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("input",{type:"checkbox",name:"remember",ref:l}),r.a.createElement("label",{className:"mx-2",htmlFor:"remember"},"Remember Me")),r.a.createElement("div",null,r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement("button",{className:"btn btn-outline-primary btn-block",type:"submit"},"Login")),r.a.createElement(T.a,null,r.a.createElement("button",{className:"btn btn-outline-success btn-block",type:"submit",onClick:function(){t(!1)}},"Register")))))))}function se(){var e=Object(re.a)(),t=e.register,a=e.handleSubmit,l=e.clearError,c=e.setError,s=e.errors,m=Object(n.useState)(!1),p=Object(i.a)(m,2),E=p[0],h=p[1],d=Object(D.f)(),f=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,O.register(t.email,t.password,t.firstName,t.lastName,t.phone);case 3:if(!e.sent){e.next=11;break}return e.next=7,O.login(t.email,t.password);case 7:e.sent?d.push("/assets"):alert("login error"),e.next=12;break;case 11:alert("register error");case 12:h(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(R,{isLoading:E},r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"display-2"},"ATP"),r.a.createElement("h4",null,"Registration")),r.a.createElement("div",null,r.a.createElement("form",{className:"register-form",onSubmit:a(f)},r.a.createElement("div",{className:"form-group"},r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"First Name",name:"firstName",ref:t({required:!0})})),r.a.createElement(T.a,null,r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Last Name",name:"lastName",ref:t({required:!0})}))),r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{className:"form-control",type:"email",placeholder:"example@email.com",name:"email",ref:t({required:!0})}),r.a.createElement("label",{htmlFor:"phone"},"Phone Number"),r.a.createElement("input",{className:"form-control",type:"tel",placeholder:"123-456-7890",name:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",ref:t}),r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement("label",{htmlFor:"password"},"New Password"),r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",ref:t({required:!0,validate:{correct:function(e){return!0===/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(e)}}}),onChange:function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,e.next=3,le(1e3);case 3:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(a)?l("Password"):c("Password","notMatch","Password must be 8 characters long, contain one digit, upper, lower and special case character.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))),r.a.createElement("div",{className:"text-center"},s.Password&&r.a.createElement("p",{className:"error-message"},s.Password.message)),r.a.createElement("button",{className:"btn btn-outline-success btn-block my-4",type:"submit"},"Register"))))))}var oe=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1];return a?r.a.createElement(ce,{setPage:l}):r.a.createElement(se,null)},ue=a(293),ie=a.n(ue);a(621);var me=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),m=s[0],p=s[1],E=Object(n.useState)([]),h=Object(i.a)(E,2),d=h[0],f=h[1];return F((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllAssets();case 2:t=e.sent,a=0,t.forEach((function(e){a+=e.value})),f(a),p(t),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.userDetails();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.userDetails();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()})),r.a.createElement(_.a,null,r.a.createElement("br",null),r.a.createElement("h1",{className:"text-center"},"My Profile"),r.a.createElement(I.a,null,r.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-6"},r.a.createElement("div",{class:"well well-sm"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement(K.a,{src:ie.a,width:"200",height:"auto",roundedCircle:!0})),r.a.createElement(T.a,null,r.a.createElement("h4",null,a.firstName," ",a.lastName),r.a.createElement("small",null,r.a.createElement("cite",{title:"San Francisco, USA"},"San Francisco, USA ",r.a.createElement("i",{class:"glyphicon glyphicon-map-marker"}))),r.a.createElement("p",null,r.a.createElement("i",{class:"glyphicon glyphicon-envelope"}),a.email,r.a.createElement("br",null),r.a.createElement("i",{class:"glyphicon glyphicon-gift"}),a.phone,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{class:"glyphicon glyphicon-gift"}),"Assets value: $",d,r.a.createElement("br",null),r.a.createElement("i",{class:"glyphicon glyphicon-gift"}),"# of assets: ",m.length),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-primary"},"Social"),r.a.createElement("button",{type:"button",class:"btn btn-primary dropdown-toggle","data-toggle":"dropdown"},r.a.createElement("span",{class:"caret"}),r.a.createElement("span",{class:"sr-only"},"Social")),r.a.createElement("ul",{class:"dropdown-menu",role:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://plus.google.com/+Jquery2dotnet/posts"},"Google +")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/jquery2dotnet"},"Facebook")),r.a.createElement("li",{class:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Github"))))))))))};var pe=function(){var e=Object(D.f)(),t=Object(re.a)(),a=t.handleSubmit,l=t.register,c=Object(n.useState)(!1),s=Object(i.a)(c,2),m=s[0],p=s[1],h=Object(n.useState)(null),f=Object(i.a)(h,2),b=f[0],g=f[1];F((function(){}));var v=function(){var t=Object(u.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),console.log(a.image),t.next=4,G.createAsset(a.name,a.value,a.description,a.image[0]);case 4:t.sent?e.push("/assets"):console.error("Error creating asset"),g(null),p(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(R,{isLoading:m},r.a.createElement(_.a,null,r.a.createElement("br",null),r.a.createElement("h1",null,"Add Asset"),r.a.createElement("br",null),r.a.createElement(E.a,{onSubmit:a(v)},r.a.createElement(E.a.Group,{controlId:"formGroupName"},r.a.createElement(E.a.Label,null,"Name"),r.a.createElement(E.a.Control,{type:"name",name:"name",placeholder:"Enter name",ref:l({required:!0})})),r.a.createElement(E.a.Group,{controlId:"formGroupPrice"},r.a.createElement(E.a.Label,null,"Price"),r.a.createElement(z.a,null,r.a.createElement(z.a.Prepend,null,r.a.createElement(z.a.Text,{id:"inputGroupPrepend"},"$")),r.a.createElement(E.a.Control,{type:"number",step:"any",name:"value",placeholder:"Enter price",ref:l({required:!0})}))),r.a.createElement(E.a.Group,{controlId:"formGroupDescription"},r.a.createElement(E.a.Label,null,"Description"),r.a.createElement(E.a.Control,{type:"description",placeholder:"Enter description",name:"description",ref:l})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Image (optional)"),r.a.createElement(E.a.File,{id:"custom-file",label:b||"File upload",name:"image",accept:"image/png, image/jpeg",ref:l,custom:!0,onChange:function(e){return g(e.target.files[0].name)}})),r.a.createElement(d.a,{variant:"success",type:"submit"},"Create"))))};a(622);var Ee=function(){var e=Object(n.useMemo)((function(){return(new Date).getFullYear()}),[]);return r.a.createElement("footer",{className:"global-footer bg-dark"},r.a.createElement(_.a,null,r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement("span",{className:"text-white"},"\xa9 ",e," Asset Tracking & Protection")))))};var he=function(){var e=Object(D.g)().id,t=Object(D.f)(),a=Object(n.useState)([]),l=Object(i.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(!0),p=Object(i.a)(m,2),h=p[0],f=p[1],b=Object(n.useState)(!1),g=Object(i.a)(b,2),v=g[0],w=g[1],y=Object(re.a)(),k=y.handleSubmit,x=y.register;F((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getSingleAsset(e);case 2:a=t.sent,s(a),f(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}));var N=c.imageUrl?c.imageUrl:"https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png";function j(){return(j=Object(u.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,G.deleteAsset(e);case 2:a.sent?t.push("/assets"):alert("Error Deleting Asset");case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var O=function(){var a=Object(u.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return f(!0),a.next=3,G.updateAsset(e,n.name,n.value,n.description);case 3:a.sent?t.push("/assets"):console.error("Error creating asset"),f(!1);case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(R,{isLoading:h},r.a.createElement(_.a,null,r.a.createElement("br",null),r.a.createElement("h1",null,"Edit Asset Page"),r.a.createElement("br",null),r.a.createElement("h2",null,c.name),r.a.createElement(K.a,{src:N,width:"auto",height:"250"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,"Value: $",c.value),r.a.createElement("h5",null,"Description:"),r.a.createElement("p",null,c.description),r.a.createElement(d.a,{className:"mr-2",onClick:function(){w(!v)}},"Edit"),r.a.createElement(d.a,{className:"btn-danger",onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&function(){j.apply(this,arguments)}()}},"Delete"),v?r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",null,"Edit Asset"),r.a.createElement(E.a,{onSubmit:k(O)},r.a.createElement(E.a.Group,{controlId:"formGroupName"},r.a.createElement(E.a.Label,null,"Name"),r.a.createElement(E.a.Control,{type:"name",defaultValue:c.name,name:"name",placeholder:"Enter name",ref:x({required:!0})})),r.a.createElement(E.a.Group,{controlId:"formGroupPrice"},r.a.createElement(E.a.Label,null,"Price"),r.a.createElement(z.a,null,r.a.createElement(z.a.Prepend,null,r.a.createElement(z.a.Text,{id:"inputGroupPrepend"},"$")),r.a.createElement(E.a.Control,{type:"number",defaultValue:c.value,step:"any",name:"value",placeholder:"Enter price",ref:x({required:!0})}))),r.a.createElement(E.a.Group,{controlId:"formGroupDescription"},r.a.createElement(E.a.Label,null,"Description"),r.a.createElement(E.a.Control,{type:"description",defaultValue:c.description,placeholder:"Enter description",name:"description",ref:x})),r.a.createElement(d.a,{variant:"success",type:"submit"},"Submit")))}),null):null))};a(623);function de(){return r.a.createElement(Q,null)}function fe(){return r.a.createElement(Y,null)}function be(){return r.a.createElement("h2",null,"Page1")}function ge(){return r.a.createElement("h2",null,"Page2")}function ve(){return r.a.createElement("h2",null,"Page3")}function we(){return r.a.createElement(ne,null)}var ye=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f.a,null,r.a.createElement(A,null),r.a.createElement("main",{className:"content"},r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/assets"},r.a.createElement(fe,null)),r.a.createElement(D.a,{path:"/add_asset"},r.a.createElement(pe,null)),r.a.createElement(D.a,{path:"/page1"},r.a.createElement(be,null)),r.a.createElement(D.a,{path:"/page2"},r.a.createElement(ge,null)),r.a.createElement(D.a,{path:"/page3"},r.a.createElement(ve,null)),r.a.createElement(D.a,{path:"/contact"},r.a.createElement(we,null)),r.a.createElement(D.a,{path:"/login"},r.a.createElement(oe,null)),r.a.createElement(D.a,{path:"/profile"},r.a.createElement(me,null)),r.a.createElement(D.a,{path:"/asset/:id"},r.a.createElement(he,null)),r.a.createElement(D.a,{path:"/"},r.a.createElement(de,null)))),r.a.createElement(Ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(624);c.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[294,1,2]]]);
//# sourceMappingURL=main.2be42539.chunk.js.map