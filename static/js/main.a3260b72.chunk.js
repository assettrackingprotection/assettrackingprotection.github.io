(this["webpackJsonppersonal-asset-tracker"]=this["webpackJsonppersonal-asset-tracker"]||[]).push([[0],{281:function(e,t,a){e.exports=a.p+"static/media/profile_icon.6d691fab.jpg"},291:function(e,t,a){e.exports=a.p+"static/media/ethan.92696b41.jpg"},292:function(e,t,a){e.exports=a.p+"static/media/tyler.7a7f678c.JPG"},293:function(e,t,a){e.exports=a.p+"static/media/jason.f1834fff.JPG"},297:function(e,t,a){e.exports=a(631)},322:function(e,t){},324:function(e,t){},361:function(e,t){},362:function(e,t){},422:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/ATPLogo.87bdb1c9.png"},625:function(e,t,a){},626:function(e,t,a){},627:function(e,t,a){},628:function(e,t,a){},629:function(e,t,a){},630:function(e,t,a){},631:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(71),c=a.n(l),s=a(3),o=a.n(s),u=a(6),i=a(9),m=a(91),p=a(640),d=a(635),f=a(12),h=a(41),E=a(42),g=a(32),b=a.n(g);var v="".concat("https","://").concat("assettrackingprotection.azurewebsites.net"),y=new(function(){function e(){Object(h.a)(this,e)}return Object(E.a)(e,[{key:"register",value:function(){return"".concat(this.baseRoute,"/register")}},{key:"login",value:function(){return"".concat(this.baseRoute,"/login")}},{key:"refresh",value:function(){return"".concat(this.baseRoute,"/refresh")}},{key:"isLoggedIn",value:function(){return"".concat(this.baseRoute,"/isLoggedIn")}},{key:"userDetails",value:function(){return"".concat(this.baseRoute,"/userDetails")}},{key:"baseRoute",get:function(){return"".concat(v,"/auth")}}]),e}()),w=new(function(){function e(){Object(h.a)(this,e),this.baseKey="ATP"}return Object(E.a)(e,[{key:"save",value:function(e,t){localStorage.setItem("".concat(this.baseKey,".").concat(e),JSON.stringify(t))}},{key:"load",value:function(e){return JSON.parse(localStorage.getItem("".concat(this.baseKey,".").concat(e)))}},{key:"logout",value:function(){this.delete("accessToken"),this.delete("refreshToken")}},{key:"delete",value:function(e){localStorage.removeItem("".concat(this.baseKey,".").concat(e))}},{key:"accessToken",get:function(){return this.load("accessToken")},set:function(e){this.save("accessToken",e)}},{key:"refreshToken",get:function(){return this.load("refreshToken")},set:function(e){this.save("refreshToken",e)}},{key:"assetViewMode",get:function(){var e=this.load("assetViewMode");return null==e?"card":e},set:function(e){this.save("assetViewMode",e)}}]),e}()),k=a(280),N=a.n(k),x=new(function(){function e(){Object(h.a)(this,e)}return Object(E.a)(e,[{key:"register",value:function(){var e=Object(u.a)(o.a.mark((function e(t,a,n,r,l){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(y.register(),{email:t,password:a,firstName:n,lastName:r,phone:l});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,n,r,l){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.logout();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(y.login(),{email:t,password:a});case 3:return n=e.sent,this.accessToken=n.data.token,this.refreshToken=n.data.refresh,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(y.refresh(),{refresh:this.refreshToken});case 3:return t=e.sent,this.accessToken=t.data.token,this.refreshToken=t.data.refresh,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"isLoggedIn",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(a.length>0&&void 0!==a[0])||a[0],e.prev=1,e.next=4,b.a.get(y.isLoggedIn(),{headers:{Authorization:"Bearer ".concat(this.accessToken)}});case 4:return e.abrupt("return",!0);case 7:if(e.prev=7,e.t0=e.catch(1),!t){e.next=22;break}return e.next=12,this.refresh();case 12:if(!e.sent){e.next=19;break}return e.next=16,this.isLoggedIn(!1);case 16:return e.abrupt("return",e.sent);case 19:return e.abrupt("return",!1);case 20:e.next=23;break;case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"userDetails",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(y.userDetails(),{headers:this.authHeaders});case 3:return t=e.sent,e.abrupt("return",{email:t.data.email,firstName:t.data.firstName,lastName:t.data.lastName,phone:t.data.phone});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"accessToken",get:function(){return w.accessToken},set:function(e){w.accessToken=e}},{key:"isAccessTokenExpired",get:function(){if(this.accessToken){var e=N.a.decode(this.accessToken).exp;return new Date(1e3*e)-new Date<=0}return!0}},{key:"refreshToken",get:function(){return w.refreshToken},set:function(e){w.refreshToken=e}},{key:"authHeaders",get:function(){return{Authorization:"Bearer ".concat(this.accessToken)}}}]),e}()),j=a(52),O=a(633),A=a(634),S=a(285),T=a(166),L=a(281),P=a.n(L);var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/login",a=Object(j.f)();Object(n.useEffect)((function(){function n(){return(n=Object(u.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.isLoggedIn();case 2:n.sent?e():a.push(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}x.isAccessTokenExpired?function(){n.apply(this,arguments)}():e()}),[])},I=new(function(){function e(){Object(h.a)(this,e)}return Object(E.a)(e,[{key:"singleAsset",value:function(e){return"".concat(this.baseRoute,"/").concat(e)}},{key:"assetImage",value:function(e){return"".concat(this.baseRoute,"/").concat(e,"/image")}},{key:"baseRoute",get:function(){return"".concat(v,"/asset")}}]),e}()),C=new(function(){function e(){Object(h.a)(this,e)}return Object(E.a)(e,[{key:"getAllAssets",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(I.baseRoute,{headers:x.authHeaders});case 3:return t=e.sent,e.abrupt("return",t.data.assets);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSingleAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(I.singleAsset(t),{headers:x.authHeaders});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"createAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t,a,n,r){var l,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(I.baseRoute,{name:t,value:a,description:n},{headers:x.authHeaders});case 3:return l=e.sent,c=l.data.id,(s=new FormData).append("image",r),e.next=9,b.a.post(I.assetImage(c),s,{headers:x.authHeaders});case 9:return e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"updateAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:null,n=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:null,e.prev=3,e.next=6,b.a.patch(I.singleAsset(t),{name:a,value:n,description:r},{headers:x.authHeaders});case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteAsset",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete(I.singleAsset(t),{headers:x.authHeaders});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}());a(422);var F=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),m=s[0],p=s[1],d=Object(n.useState)([]),f=Object(i.a)(d,2),h=f[0],E=f[1];return D((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAllAssets();case 2:t=e.sent,a=0,t.forEach((function(e){a+=e.value})),E(a),p(t),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.userDetails();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.userDetails();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()})),r.a.createElement(O.a,null,r.a.createElement("br",null),r.a.createElement("h1",{className:"text-center display-4"},"My Profile"),r.a.createElement(A.a,null,r.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-6"},r.a.createElement("div",{class:"well well-sm"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(A.a,null,r.a.createElement(S.a,null,r.a.createElement(T.a,{src:P.a,width:"200",height:"auto",roundedCircle:!0})),r.a.createElement(S.a,null,r.a.createElement("h4",null,a.firstName," ",a.lastName),r.a.createElement("small",null,r.a.createElement("cite",{title:"San Francisco, USA"},"San Francisco, USA ",r.a.createElement("i",{class:"glyphicon glyphicon-map-marker"}))),r.a.createElement("p",null,r.a.createElement("i",{class:"glyphicon glyphicon-envelope"}),a.email,r.a.createElement("br",null),r.a.createElement("i",{class:"glyphicon glyphicon-gift"}),a.phone,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{class:"glyphicon glyphicon-gift"}),"Assets value: $",h,r.a.createElement("br",null),r.a.createElement("i",{class:"glyphicon glyphicon-gift"}),"# of assets: ",m.length),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-primary"},"Social"),r.a.createElement("button",{type:"button",class:"btn btn-primary dropdown-toggle","data-toggle":"dropdown"},r.a.createElement("span",{class:"caret"}),r.a.createElement("span",{class:"sr-only"},"Social")),r.a.createElement("ul",{class:"dropdown-menu",role:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://plus.google.com/+Jquery2dotnet/posts"},"Google +")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/jquery2dotnet"},"Facebook")),r.a.createElement("li",{class:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Github"))))))))))},U=a(50),G=a.n(U);var M=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(j.f)();return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.isLoggedIn();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement("div",{className:"container"},r.a.createElement(m.a.Brand,{as:f.b,to:"/"},r.a.createElement("img",{className:"logo mx-3",src:G.a,style:{width:50}})),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{as:f.b,to:"/"},"Home"),r.a.createElement(p.a.Link,{as:f.b,to:"/assets"},"Assets"),r.a.createElement((function(){if(a)return r.a.createElement(p.a.Link,{as:f.b,to:"/statistics"},"Stats");return null}),null),r.a.createElement(p.a.Link,{as:f.b,to:"/contact"},"Contact"),r.a.createElement((function(){if(a)return r.a.createElement(p.a.Link,{as:f.b,to:"/profile"},"Profile");return null}),null)),r.a.createElement((function(){return a?r.a.createElement(d.a,{className:"ml-2",variant:"outline-primary",onClick:function(){x.logout(),c.push("/")}},"Logout"):r.a.createElement(d.a,{className:"ml-2",variant:"outline-primary",as:f.b,to:"/login"},"Login")}),null))))},V=a(641);var R=function(e,t){var a=e.substr(0,t);return a.length<e.length&&(a+="..."),a};a(424);var H=function(e){var t=e.asset,a=t.description?R(t.description,40):"No description provided",n=t.imageUrl?t.imageUrl:"https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png",l="/asset/"+t.id;return r.a.createElement(S.a,{md:"6",lg:"4",className:"asset-card"},r.a.createElement(V.a,null,r.a.createElement(V.a.Img,{src:n,width:"320",height:"170"}),r.a.createElement(V.a.Title,null,"".concat(t.name,": $").concat(t.value)),r.a.createElement(V.a.Text,null,a),r.a.createElement(d.a,{as:f.b,to:l},"View Details")))};a(425);var q=function(e){var t=e.asset,a=t.description?R(t.description,33):"No description provided",n="/asset/"+t.id;return r.a.createElement("div",{className:"asset-entry"},r.a.createElement(S.a,null,t.name),r.a.createElement(S.a,null,"$".concat(t.value)),r.a.createElement(S.a,null,a),r.a.createElement(S.a,null,r.a.createElement(d.a,{as:f.b,to:n,variant:"primary"},"View Details")))},$=a(636);a(426);var z=function(e){var t=e.isLoading,a=e.children;return t?r.a.createElement(A.a,null,r.a.createElement(S.a,{xs:"12",className:"d-flex justify-content-center"},r.a.createElement($.a,{className:"loading-spinner",animation:"border",variant:"primary",role:"status"}))):r.a.createElement(r.a.Fragment,null,a)};a(427);function B(){return r.a.createElement(A.a,null,r.a.createElement(S.a,{xs:"12",className:"no-assets-notice"},r.a.createElement("h3",null,"You have not added any assets.")))}function J(e){var t=e.assets;return t.length>0?r.a.createElement(A.a,null,t.map((function(e){return r.a.createElement(H,{key:e.id,asset:e})}))):r.a.createElement(B,null)}function W(e){var t=e.assets;return t.length>0?r.a.createElement("div",{className:"asset-spreadsheet"},r.a.createElement("div",{className:"asset-spreadsheet-header"},r.a.createElement(S.a,null,"Name"),r.a.createElement(S.a,null,"Value"),r.a.createElement(S.a,null,"Description"),r.a.createElement(S.a,null,"Details")),t.map((function(e){return r.a.createElement(q,{key:e.id,asset:e})}))):r.a.createElement(B,null)}var Y=function(e){var t=e.viewMode,a=Object(n.useState)([]),l=Object(i.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(!0),p=Object(i.a)(m,2),d=p[0],f=p[1];return D((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAllAssets();case 2:t=e.sent,s(t),f(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement(z,{isLoading:d},"spreadsheet"===t?r.a.createElement(W,{assets:c}):r.a.createElement(J,{assets:c}))},_=a(637),K=a(290),Z=a(76);a(428);function X(e){var t=e.viewMode,a=e.setViewMode,n=function(e){w.assetViewMode=e.target.value,a(e.target.value)};return r.a.createElement(S.a,null,r.a.createElement(_.a,null,r.a.createElement(K.a,{className:"view-mode-toggle"},r.a.createElement(Z.a,{type:"radio",value:"card",checked:"card"===t,onChange:n}),"Card View"),r.a.createElement(K.a,{className:"view-mode-toggle"},r.a.createElement(Z.a,{type:"radio",value:"spreadsheet",checked:"spreadsheet"===t,onChange:n}),"Spreadsheet View")))}var Q=function(){var e=Object(n.useState)(w.assetViewMode),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement("br",null),r.a.createElement(A.a,null,r.a.createElement(S.a,null,r.a.createElement("h1",null,"Your Assets:")),r.a.createElement(S.a,null,r.a.createElement(d.a,{variant:"success btn-lg float-right",as:f.b,to:"/add_asset"},"New"))),r.a.createElement(A.a,null,r.a.createElement(X,{viewMode:a,setViewMode:l})),r.a.createElement(Y,{viewMode:a})))},ee=a(90),te=a(638),ae=a(73);a(429);var ne=function(e){var t=e.imageSrc,a=e.firstName,n=e.lastName,l=e.role,c=e.email,s=e.github,o=e.phone,u=e.children;return r.a.createElement(S.a,{xs:6,md:4,className:"shadow-sm"},r.a.createElement(T.a,{style:{marginTop:12},src:t,thumbnail:!0}),r.a.createElement("h3",{className:"text-center"},"".concat(a," ").concat(n)),r.a.createElement("h5",{className:"text-center"},l),r.a.createElement("div",{className:"p-3"},r.a.createElement(A.a,null,r.a.createElement(S.a,{className:"text-right"},r.a.createElement(ae.a,{size:32})),r.a.createElement(S.a,{xs:8,className:"text-left"},r.a.createElement("p",{className:"lead"},r.a.createElement("a",{href:"mailto:".concat(c)},"Email ",a)))),r.a.createElement(A.a,null,r.a.createElement(S.a,{className:"text-right"},r.a.createElement(ae.b,{size:32})),r.a.createElement(S.a,{xs:8,className:"text-left"},r.a.createElement("p",{className:"lead"},r.a.createElement("a",{target:"_blank",href:"https://github.com/".concat(s)},a,"'s Github")))),r.a.createElement(A.a,null,r.a.createElement(S.a,{className:"text-right"},r.a.createElement(ae.c,{size:32})),r.a.createElement(S.a,{xs:8,className:"text-left"},r.a.createElement("p",{className:"lead"},o)))),r.a.createElement("h4",{className:"p-2"},"About ",a),r.a.createElement("hr",null),r.a.createElement("p",null,u))},re=a(291),le=a.n(re),ce=a(292),se=a.n(ce),oe=a(293),ue=a.n(oe);var ie=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(te.a,null,r.a.createElement("h1",{className:"display-3 text-center"},"Asset Tracking & Protection")),r.a.createElement(ee.a,{className:"shadow mb-5"},r.a.createElement(ee.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://oregonshar.files.wordpress.com/2014/04/1404-mustangs_088-line-of-pony-cars.jpg?w=848",alt:"Second slide"})),r.a.createElement(ee.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://www.bunchandbrocklaw.com/wp-content/uploads/2018/12/chapter-7-exemptions-1072x425.jpg",alt:"First slide"})),r.a.createElement(ee.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://images.macrumors.com/t/0dAUvf2F-YHP97tMDCDAnEwMSok=/800x0/article-new/2018/12/appleproductlineup-800x313.jpg",alt:"Third slide"}))),r.a.createElement("div",{className:"shadow m-4 p-4"},r.a.createElement("h4",null,"About ATP"),r.a.createElement("br",null),r.a.createElement("p",null,"ATP is a direct response to the chance of losing your precious belongings. In an age where we have more physical possessions than ever, keeping track of what is most important has never been more paramount. The company originally started as a business idea in an internet commerce class at Utah State University in Logan, Utah. Three talented computer science majors with experience in all aspects of development came together and are currently developing this web application for service.")),r.a.createElement("h3",{className:"display-4 text-center mt-5"},"The ATP Team"),r.a.createElement("hr",null),r.a.createElement(A.a,null,r.a.createElement(ne,{imageSrc:ue.a,firstName:"Jason",lastName:"Boyd",role:"CEO",email:"jasonboyd99@gmail.com",github:"itsjaboyd",phone:"801 - 529 - 0853"},"Jason is currently a senior studying computer science at Utah State Univeristy in Logan, Utah. His interests include mobile application development, producing music, and exploring the outdoors."),r.a.createElement(ne,{imageSrc:se.a,firstName:"Tyler",lastName:"Green",role:"CTO",email:"tyler.tgreen@yahoo.com",github:"tgreen24",phone:"385 - 405 - 5637"},"Tyler is a senior at Utah State University studying computer science. He currently works part time as a mobile developer at a local company called iFit. His interests include snowboarding, wakeboarding, and basketball and other sports."),r.a.createElement(ne,{imageSrc:le.a,firstName:"Ethan",lastName:"Watson",role:"CIO",email:"ethanswatson@aggiemail.usu.edu",github:"ethanswatson",phone:"949 - 922 - 7677"},"Ethan is a senior at Utah State Univeristy studying computer science. He has a passion for web development, and game development.")))},me=a(89),pe=a(124);var de=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("form",{id:"contact-form",onSubmit:function(e){var t=a.name+"\n"+a.email+"\n"+a.message;alert("STATE DATA:\n"+t)},method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",value:a.name,onChange:function(e){return l(Object(pe.a)({},a,{name:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",value:a.email,onChange:function(e){return l(Object(pe.a)({},a,{email:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form-control",rows:"5",value:a.message,onChange:function(e){return l(Object(pe.a)({},a,{message:e.target.value}))}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"))};a(625);var fe=function(){var e=Object(me.withScriptjs)(Object(me.withGoogleMap)((function(e){return r.a.createElement(me.GoogleMap,{defaultZoom:10,defaultCenter:{lat:41.7355556,lng:-111.8336111}},r.a.createElement(me.Marker,{position:{lat:41.7355556,lng:-111.8336111}}))})));return r.a.createElement(O.a,null,r.a.createElement("div",{className:"jumbotron text-center background shadow"},r.a.createElement("h1",{className:"display-2"},"Contact Us!"),r.a.createElement("div",null,r.a.createElement("p",{className:"lead description"},"Although we may not be a fully fledged service yet, we value your feedback and any questions you may have!"))),r.a.createElement(A.a,null,r.a.createElement(S.a,{className:"px-5"},r.a.createElement(de,null)),r.a.createElement(S.a,{className:"text-center"},r.a.createElement("h2",null,"Our Location"),r.a.createElement("p",null,"We are currently based in Logan, Utah."),r.a.createElement("div",{className:"shadow"},r.a.createElement(e,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBOBXN_Ul3kEatVYTHOUzf_-Zr1WBBNljA&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"320px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})})))))},he=a(60),Ee=(a(626),function(e){return new Promise((function(t){return setTimeout(t,e)}))});function ge(e){var t=e.setPage,a=Object(he.a)(),l=a.register,c=a.handleSubmit,s=Object(n.useState)(!1),m=Object(i.a)(s,2),p=m[0],d=m[1],f=Object(j.f)(),h=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,x.login(t.email,t.password);case 3:e.sent?f.push("/assets"):alert("login error"),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(z,{isLoading:p},r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"logo mx-3",src:G.a,style:{width:200}}),r.a.createElement("h4",null,"Please login")),r.a.createElement("form",{className:"login-form",onSubmit:c(h)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form-control form-control-lg",name:"email",placeholder:"example@email.com",type:"email",ref:l({required:!0})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"form-control form-control-lg",name:"password",placeholder:"password",type:"password",ref:l({required:!0})})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("input",{type:"checkbox",name:"remember",ref:l}),r.a.createElement("label",{className:"mx-2",htmlFor:"remember"},"Remember Me")),r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(S.a,null,r.a.createElement("button",{className:"btn btn-outline-success btn-block",type:"submit",onClick:function(){t(!1)}},"Register")),r.a.createElement(S.a,null,r.a.createElement("button",{className:"btn btn-outline-primary btn-block",type:"submit"},"Login")))))))}function be(){var e=Object(he.a)(),t=e.register,a=e.handleSubmit,l=e.clearError,c=e.setError,s=e.errors,m=Object(n.useState)(!1),p=Object(i.a)(m,2),d=p[0],f=p[1],h=Object(j.f)(),E=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,x.register(t.email,t.password,t.firstName,t.lastName,t.phone);case 3:if(!e.sent){e.next=11;break}return e.next=7,x.login(t.email,t.password);case 7:e.sent?h.push("/assets"):alert("login error"),e.next=12;break;case 11:alert("register error");case 12:f(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(z,{isLoading:d},r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"logo mx-3",src:G.a,style:{width:200}}),r.a.createElement("h4",null,"Registration")),r.a.createElement("div",null,r.a.createElement("form",{className:"register-form",onSubmit:a(E)},r.a.createElement("div",{className:"form-group"},r.a.createElement(A.a,null,r.a.createElement(S.a,null,r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"First Name",name:"firstName",ref:t({required:!0})})),r.a.createElement(S.a,null,r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Last Name",name:"lastName",ref:t({required:!0})}))),r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{className:"form-control",type:"email",placeholder:"example@email.com",name:"email",ref:t({required:!0})}),r.a.createElement("label",{htmlFor:"phone"},"Phone Number"),r.a.createElement("input",{className:"form-control",type:"tel",placeholder:"123-456-7890",name:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",ref:t}),r.a.createElement(A.a,null,r.a.createElement(S.a,null,r.a.createElement("label",{htmlFor:"password"},"New Password"),r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",ref:t({required:!0,validate:{correct:function(e){return!0===/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(e)}}}),onChange:function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,e.next=3,Ee(1e3);case 3:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(a)?l("Password"):c("Password","notMatch","Password must be 8 characters long, contain one digit, upper, lower and special case character.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))),r.a.createElement("div",{className:"text-center"},s.Password&&r.a.createElement("p",{className:"error-message"},s.Password.message)),r.a.createElement("button",{className:"btn btn-outline-success btn-block my-4",type:"submit"},"Register"))))))}var ve=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1];return a?r.a.createElement(ge,{setPage:l}):r.a.createElement(be,null)},ye=a(11);var we=function(){var e=Object(j.f)(),t=Object(he.a)(),a=t.handleSubmit,l=t.register,c=Object(n.useState)(!1),s=Object(i.a)(c,2),m=s[0],p=s[1],f=Object(n.useState)(null),h=Object(i.a)(f,2),E=h[0],g=h[1];D((function(){}));var b=function(){var t=Object(u.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),console.log(a.image),t.next=4,C.createAsset(a.name,a.value,a.description,a.image[0]);case 4:t.sent?e.push("/assets"):console.error("Error creating asset"),g(null),p(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(z,{isLoading:m},r.a.createElement(O.a,null,r.a.createElement("br",null),r.a.createElement("h1",null,"Add Asset"),r.a.createElement("br",null),r.a.createElement(ye.a,{onSubmit:a(b)},r.a.createElement(ye.a.Group,{controlId:"formGroupName"},r.a.createElement(ye.a.Label,null,"Name"),r.a.createElement(ye.a.Control,{type:"name",name:"name",placeholder:"Enter name",ref:l({required:!0})})),r.a.createElement(ye.a.Group,{controlId:"formGroupPrice"},r.a.createElement(ye.a.Label,null,"Price"),r.a.createElement(_.a,null,r.a.createElement(_.a.Prepend,null,r.a.createElement(_.a.Text,{id:"inputGroupPrepend"},"$")),r.a.createElement(ye.a.Control,{type:"number",step:"any",name:"value",placeholder:"Enter price",ref:l({required:!0})}))),r.a.createElement(ye.a.Group,{controlId:"formGroupDescription"},r.a.createElement(ye.a.Label,null,"Description"),r.a.createElement(ye.a.Control,{type:"description",placeholder:"Enter description",name:"description",ref:l})),r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Image (optional)"),r.a.createElement(ye.a.File,{id:"custom-file",label:E||"File upload",name:"image",accept:"image/png, image/jpeg",ref:l,custom:!0,onChange:function(e){return g(e.target.files[0].name)}})),r.a.createElement(d.a,{variant:"success",type:"submit"},"Create"))))};a(627);var ke=function(){var e=Object(n.useMemo)((function(){return(new Date).getFullYear()}),[]);return r.a.createElement("footer",{className:"global-footer bg-dark"},r.a.createElement(O.a,null,r.a.createElement(A.a,null,r.a.createElement(S.a,null,r.a.createElement("span",{className:"text-white"},"\xa9 ",e,r.a.createElement("img",{className:"logo mx-3",src:G.a,style:{width:40}}),"Asset Tracking & Protection")))))};var Ne=function(){var e=Object(j.g)().id,t=Object(j.f)(),a=Object(n.useState)([]),l=Object(i.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(!0),p=Object(i.a)(m,2),f=p[0],h=p[1],E=Object(n.useState)(!1),g=Object(i.a)(E,2),b=g[0],v=g[1],y=Object(he.a)(),w=y.handleSubmit,k=y.register;D((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getSingleAsset(e);case 2:a=t.sent,s(a),h(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}));var N=c.imageUrl?c.imageUrl:"https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png";function x(){return(x=Object(u.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.deleteAsset(e);case 2:a.sent?t.push("/assets"):alert("Error Deleting Asset");case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var A=function(){var a=Object(u.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return h(!0),a.next=3,C.updateAsset(e,n.name,n.value,n.description);case 3:a.sent?t.push("/assets"):console.error("Error creating asset"),h(!1);case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(z,{isLoading:f},r.a.createElement(O.a,null,r.a.createElement("br",null),r.a.createElement("h1",null,"Edit Asset Page"),r.a.createElement("br",null),r.a.createElement("h2",null,c.name),r.a.createElement(T.a,{src:N,width:"auto",height:"250"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,"Value: $",c.value),r.a.createElement("h5",null,"Description:"),r.a.createElement("p",null,c.description),r.a.createElement(d.a,{className:"mr-2",onClick:function(){v(!b)}},"Edit"),r.a.createElement(d.a,{className:"btn-danger",onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&function(){x.apply(this,arguments)}()}},"Delete"),b?r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",null,"Edit Asset"),r.a.createElement(ye.a,{onSubmit:w(A)},r.a.createElement(ye.a.Group,{controlId:"formGroupName"},r.a.createElement(ye.a.Label,null,"Name"),r.a.createElement(ye.a.Control,{type:"name",defaultValue:c.name,name:"name",placeholder:"Enter name",ref:k({required:!0})})),r.a.createElement(ye.a.Group,{controlId:"formGroupPrice"},r.a.createElement(ye.a.Label,null,"Price"),r.a.createElement(_.a,null,r.a.createElement(_.a.Prepend,null,r.a.createElement(_.a.Text,{id:"inputGroupPrepend"},"$")),r.a.createElement(ye.a.Control,{type:"number",defaultValue:c.value,step:"any",name:"value",placeholder:"Enter price",ref:k({required:!0})}))),r.a.createElement(ye.a.Group,{controlId:"formGroupDescription"},r.a.createElement(ye.a.Label,null,"Description"),r.a.createElement(ye.a.Control,{type:"description",defaultValue:c.description,placeholder:"Enter description",name:"description",ref:k})),r.a.createElement(d.a,{variant:"success",type:"submit"},"Submit")))}),null):null))},xe=a(639);a(628);var je=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),m=s[0],p=s[1],h=Object(n.useState)(!0),E=Object(i.a)(h,2),g=E[0],b=E[1];if(D((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAllAssets();case 2:t=e.sent,a=0,t.forEach((function(e){a+=e.value})),p(a),l(t),b(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),0===a.length)return r.a.createElement(O.a,null,r.a.createElement(te.a,{className:"text-center"},r.a.createElement("h3",{className:"mt-5"},"You have not added any assets."),r.a.createElement("p",{className:"lead mx-5"},"In order to display any statistics regarding your assets, you must have at least one asset recorded. You can add a new asset by navigating to the assets page, or by clicking the button below."),r.a.createElement(d.a,{variant:"info btn-lg",as:f.b,to:"/assets"},"Assets")));var v=function(e){var t,a,n,r,l=e.assets,c=0,s=0,o=!1;l.forEach((function(e){c+=e.value,t||(a||(o=!0),t=e),a||(a=e),n||(n=e),r||(r=e),e.value>=t.value&&(t=e),e.value<a.value&&(a=e),e.description.length>=n.description.length&&(n=e),e.description.length<r.description.length&&(r=e)})),c/=l.length,o&&(s=t.value-a.value);return{averageValue:c,assetRange:s,biggestAsset:t,smallestAsset:a,longestDescription:n,shortestDescription:r}}({assets:a});console.log({assets:a}),console.log(v);var y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return r.a.createElement(z,{isLoading:g},r.a.createElement(O.a,null,r.a.createElement(te.a,null,r.a.createElement("h1",{className:"text-center display-3"},"Statistics"),r.a.createElement("p",{className:"lead text-center"},"Here you will find useful information about your asset list.")),r.a.createElement(xe.a,{striped:!0,hover:!0,responsive:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total Assets"),r.a.createElement("td",null,a.length)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Worth"),r.a.createElement("td",{className:"money"},y.format(m))),r.a.createElement("tr",null,r.a.createElement("td",null,"Average Asset Worth"),r.a.createElement("td",{className:"money"},y.format(v.averageValue))),r.a.createElement("tr",null,r.a.createElement("td",null,"Value Range"),r.a.createElement("td",{className:"money"},y.format(v.assetRange))))),r.a.createElement("h4",{className:"mt-4"},"Largest & Smallest Assets"),r.a.createElement(A.a,null,r.a.createElement(H,{asset:v.biggestAsset}),r.a.createElement(H,{asset:v.smallestAsset})),r.a.createElement("h4",{className:"mt-4"},"Longest & Shortest Descriptions"),r.a.createElement(A.a,null,r.a.createElement(H,{asset:v.longestDescription}),r.a.createElement(H,{asset:v.shortestDescription})),r.a.createElement("h4",{className:"mt-4"},"Other useful statistics")))};a(629);function Oe(){return r.a.createElement(ie,null)}function Ae(){return r.a.createElement(Q,null)}function Se(){return r.a.createElement("h2",null,"Page1")}function Te(){return r.a.createElement("h2",null,"Page2")}function Le(){return r.a.createElement("h2",null,"Page3")}function Pe(){return r.a.createElement(fe,null)}var De=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f.a,null,r.a.createElement(M,null),r.a.createElement("main",{className:"content"},r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/assets"},r.a.createElement(Ae,null)),r.a.createElement(j.a,{path:"/statistics"},r.a.createElement(je,null)),r.a.createElement(j.a,{path:"/add_asset"},r.a.createElement(we,null)),r.a.createElement(j.a,{path:"/page1"},r.a.createElement(Se,null)),r.a.createElement(j.a,{path:"/page2"},r.a.createElement(Te,null)),r.a.createElement(j.a,{path:"/page3"},r.a.createElement(Le,null)),r.a.createElement(j.a,{path:"/contact"},r.a.createElement(Pe,null)),r.a.createElement(j.a,{path:"/login"},r.a.createElement(ve,null)),r.a.createElement(j.a,{path:"/profile"},r.a.createElement(F,null)),r.a.createElement(j.a,{path:"/asset/:id"},r.a.createElement(Ne,null)),r.a.createElement(j.a,{path:"/"},r.a.createElement(Oe,null)))),r.a.createElement(ke,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(630);c.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[297,1,2]]]);
//# sourceMappingURL=main.a3260b72.chunk.js.map