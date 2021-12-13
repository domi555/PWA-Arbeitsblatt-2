(function(e){function t(t){for(var r,s,c=t[0],i=t[1],l=t[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"252f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"networkAddress",(function(){return A}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    container\n    d-flex\n    flex-column\n    justify-content-center\n    align-items-center\n    mt-5\n  ",attrs:{id:"app"}},[n("ButtonGet",{on:{get:e.fetchData}}),n("CardView",{attrs:{serverAddress:e.serverAddress,employees:e.employees},on:{del:e.delEmployee}})],1)},a=[],s=n("1da1"),c=(n("99af"),n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary",on:{click:function(t){return e.$emit("get")}}},[e._v("Get Employees")])])}),i=[],l={},u=l,d=n("2877"),p=Object(d["a"])(u,c,i,!1,null,"d62479b4",null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.employees.length>0,expression:"employees.length > 0"}]},[n("div",{staticClass:"row justify-content-center mt-4"},e._l(e.employees,(function(t){return n("div",{key:t.email,staticClass:"card p-2 m-2 bg-light",staticStyle:{width:"22rem"}},[n("img",{staticClass:"mx-auto d-block",attrs:{src:e.serverAddress+"/"+t.picture.large,alt:"picture of employee"}}),n("div",{staticClass:"mx-auto d-block mt-2"},[n("h4",[e._v(" Name: "+e._s(t.name.title)+" "+e._s(t.name.first)+" "+e._s(t.name.last)+" ")]),n("p",{staticClass:"card-text"},[e._v("Email: "+e._s(t.email))]),n("p",{staticClass:"card-text"},[e._v("Phone: "+e._s(t.phone))])]),n("button",{staticClass:"btn btn-outline-danger mx-auto d-block mt-3",on:{click:function(n){return e.$emit("del",t)}}},[e._v(" Delete ")])])})),0)])])},v=[],h={props:{employees:{type:Array},serverAddress:{type:String}}},b=h,g=(n("95d8"),Object(d["a"])(b,m,v,!1,null,"3b1d61ce",null)),y=g.exports,w=n("bc3a"),_=n.n(w),x={name:"app",components:{ButtonGet:f,CardView:y},data:function(){return{employees:[],serverAddress:""}},created:function(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0})},methods:{fetchData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_()({url:"".concat(e.serverAddress,"/employees"),method:"GET"});case 2:n=t.sent,e.employees=n.data;case 4:case"end":return t.stop()}}),t)})))()},delEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,_()({url:"".concat(t.serverAddress,"/employees/").concat(e.id),method:"DELETE"});case 2:t.fetchData(),console.log("delEmployee called");case 4:case"end":return n.stop()}}),n)})))()},updateAvailable:function(){alert("Update vorhanden, bitte App neu starten!")}}},j=x,k=Object(d["a"])(j,o,a,!1,null,null,null),O=k.exports,E=n("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("ab8b");r["a"].config.productionTip=!1;var A="http://127.0.0.1:3000";new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"95d8":function(e,t,n){"use strict";n("252f")}});
//# sourceMappingURL=app.34835e51.js.map