!function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);for(l&&l(e);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={2:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([1,0]),n()}({"0ape":function(t,e){},1:function(t,e,n){n("n0Vy"),n("IWDL"),t.exports=n("oU6K")},CQBj:function(t,e){},E9jF:function(t,e){},Txr8:function(t,e){},aRKJ:function(t,e,n){"use strict";var s=n("quke"),i=n.n(s),a={install:function(t){}};var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:140,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:105,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=t;if(i){var a=(i.match(/(\?.*$)/)||[""])[0];a&&(i=i.replace(a,""))}return i+"?w="+e+"&h="+n+"&crop="+s},r={install:function(t){t.filter("imageFormatUrl",o)}},c=n("Q2cO"),u=n.n(c),l=n("omC7"),d=n.n(l),p=n("cLjf"),h=n.n(p),f=n("Asgo"),m=n.n(f),b=n("EPZ6"),v=n.n(b),g=n("bS4n"),y=n.n(g),C=n("hDQ3"),k=n.n(C),I=n("6ato"),L=n.n(I),_=n("2dj7"),w=n.n(_),x=new(function(){function t(){L()(this,t),this.defaultOptions={credentials:"include",mode:"cors"},this.timeout=3e3}return w()(t,[{key:"get",value:function(){var t=k()(h.a.mark(function t(e,n){var s,i,a,o;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=y()({},this.defaultOptions,{method:"GET"}),i=n&&v()(n).length>1?e+"?"+this.parseParams(n):e,t.next=4,m.a.race([fetch(i,s),this.timeoutPromise()]);case 4:return a=t.sent,t.next=7,this.checkStatus(a);case 7:return o=t.sent,t.next=10,o.json();case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"postForm",value:function(){var t=k()(h.a.mark(function t(e,n){var s,i,a,o;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=this.parseParams(n),(i=y()({},this.defaultOptions,{body:s,method:"POST"})).headers=y()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},i.headers),t.next=5,m.a.race([fetch(e,i),this.timeoutPromise()]);case 5:return a=t.sent,t.next=8,this.checkStatus(a);case 8:return o=t.sent,t.next=11,o.json();case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"postJson",value:function(){var t=k()(h.a.mark(function t(e,n){var s,i,a,o;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=d()(n),(i=y()({},this.defaultOptions,{body:s,method:"POST"})).headers=y()({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},i.headers),t.next=5,m.a.race([fetch(e,i),this.timeoutPromise()]);case 5:return a=t.sent,t.next=8,this.checkStatus(a);case 8:return o=t.sent,t.next=11,o.json();case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"timeoutPromise",value:function(){var t=this;return new m.a(function(e,n){setTimeout(function(){n(new Error("fetch timeout"))},t.timeout)})}},{key:"checkStatus",value:function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}},{key:"parseParams",value:function(t){var e=[];if("object"===(void 0===t?"undefined":u()(t)))return v()(t).forEach(function(n){t[n]instanceof Array&&(t[n]="["+t[n]+"]"),e.push(n+"="+t[n])}),e.join("&")}}]),t}());var S={apiPageIndex:"/intelligentapp/toindex",apiPageAddPlan:"/intelligentapp/toaddplan",apiPlanDetail:"/intelligentapp/toplandetail",apiPageSuccess:"/intelligentapp/toputsuccess",apiDemoList:"/api_demo_list",apiGetCateList:"/intelligentapp/getCateList",apiCateList:"/intelligentapp/getCateList",apiGetSubregionVppvRank:"/intelligentapp/getSubregionVppvRank",apiGetPromotionAndHouseKeeperInfo:"/intelligentapp/getPromotionAndHouseKeeperInfo",apiGetMainBusiness:"/intelligentapp/getMainBusiness",apiGetCityList:"/intelligentapp/getCityList",apiGetAreaList:"/intelligentapp/getAreaList",apiGetBusinessList:"/intelligentapp/getBusList",apiSaveMainBusiness:"/intelligentapp/saveMainBusiness",apiCreateCombo:"/intelligentapp/createCombo",apiUpdateComboPlan:"/intelligentapp/updateComboPlan",apiGetHouseRecomList:"/intelligentapp/getHouseRecomList",apiGetJGHouseRecomList:"/intelligentapp/getJGHouseRecomList",apiGetIsCanDelivery:"/intelligentapp/isCanDelivery",apiGetCalOptimizedCouponCombination:"/intelligentapp/calOptimizedCouponCombination",apiGetAccountBalance:"/intelligentapp/queryAccountBalance",apiSaveDeliveryComboPlan:"/intelligentapp/deliveryComboPlan"},B={install:function(t){Object.defineProperty(t.prototype,"$api",{value:S}),Object.defineProperty(t.prototype,"$http",{value:x})}};var T=function(t){return t[Math.floor(Math.random()*t.length)]};var j=function t(e,n,s){s||(e=e.sort(),n=n.sort());if(!e||!n)return!1;if(e.length!=n.length)return!1;for(var i=0,a=e.length;i<a;i++)if(e[i]instanceof Array&&n[i]instanceof Array){if(!t(e[i],n[i]))return!1}else if(e[i]!==n[i])return!1;return!0};var O=function(){return/iphone/gi.test(window.navigator.userAgent)&&812==window.screen.height&&375==window.screen.width};var P=function(t){for(var e=document.cookie.replace(/\s/g,"").split(";"),n=0;n<e.length;n++){var s=e[n].split("=");if(s[0]==t)return decodeURIComponent(s[1])}return""};var A=function(){return P("PPU").match(/UID=(\d*)&/)?RegExp.$1:""};var $=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURIComponent(n[2]):""};var N=function(t){var e=(t=null==t?window.location.href:t).substring(t.lastIndexOf("?")+1);return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}};var D=function(t){if(!t)return"";var e=[];for(var n in t){var s=t[n];if(s instanceof Array)for(var i=0;i<s.length;++i)e.push(encodeURIComponent(n+"["+i+"]")+"="+encodeURIComponent(s[i]));else e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]))}return e.join("&")},R=n("oHiX");var G=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="fixed")};var H=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="relative")},E={install:function(t){Object.defineProperty(t.prototype,"$utils",{value:{arrayRandom:T,getCookie:P,getCookieUserId:A,getUrlParam:$,imageFormatUrl:o,isPhoneX:O,stopScrollOn:G,stopScrollOff:H,urlParseSearch:N,urlStringfySearch:D,arrayEqual:j,fixModalScroll:R.a}})}},M=(n("6ZY3"),n("+NHb"),{data:function(){return{show:!1,timer:0}},props:{title:{type:String,default:""},content:{type:String,default:""},duration:{type:Number,default:3e3}},watch:{content:function(t,e){t&&this.durationFade()}},methods:{durationFade:function(){var t=this;this.show=!0,window.clearTimeout(this.timer),this.duration>0&&(this.timer=window.setTimeout(function(){t.show=!1,"function"==typeof t.clear&&t.clear()},this.duration))}}}),U=n("pvBj");var F=function(t){n("CQBj")};Object(U.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"toast-wrap"},[t.title?n("div",{staticClass:"toast-title"},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"toast-content",domProps:{innerHTML:t._s(t.content)}})]):t._e()},[],!1,F,null,null).exports;e.a={install:function(t,e){t.use(i.a),t.use(r),t.use(a),t.use(E),t.use(B)}}},hTHA:function(t,e,n){"use strict";var s={name:"stickyBtn",props:{size:String,loading:Boolean,disabled:Boolean},computed:{buttonSize:function(){return this.size},buttonDisabled:function(){return this.disabled}},methods:{handleClick:function(){this.$emit("handleClick")}}},i=n("pvBj");var a=function(t){n("0ape")},o=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.buttonSize?"sticky-footer-btn-"+t.buttonSize:"sticky-footer-btn",{"is-disabled":t.buttonDisabled,"is-loading":t.loading}],on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"icon-jiazaizhong loading-btn"}):t._e(),t._t("default")],2)},[],!1,a,null,null);e.a=o.exports},oHiX:function(t,e,n){"use strict";var s=function(t){var e;return{afterOpen:function(){e=document.scrollingElement?document.scrollingElement.scrollTop:document.body.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-e+"px"},beforeClose:function(){document.scrollingElement?(document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=e):(document.body.classList.remove("modal-open"),document.body.scrollTop=e)}}}();e.a=s},oU6K:function(t,e,n){"use strict";n.r(e);var s=n("+NHb"),i=n("aRKJ"),a=n("Zgo5"),o=n("EPZ6"),r=n.n(o);n("oHiX");var c=function(t){var e;for(e in t)return!1;return!0},u="",l=!1,d=!1,p={name:"SelectLink",data:function(){return{brokerId:this.$utils.getUrlParam("brokerId"),cityList:[],areaList:[],businessList:[],selectedCityId:-1,selectedAreaId:"",selectedBusinessId:"",selectedCityName:"",selectedAreaName:"",selectedBusinessName:""}},props:{cateId:[String,Number],mainBusinessList:Array},created:function(){this.fetchCityData(this.brokerId,this.cateId)},destroyed:function(){},computed:{},methods:{checkIds:function(t){return this.businessIds().filter(function(e,n){return e===t}).length>0},handleCancel:function(){this.$emit("showHideLink",!1)},handleConfirm:function(){return this.selectedCityId<0?(this.$toast("请选择城市!"),!1):this.selectedAreaId<0?(this.$toast("请选择区域!"),!1):this.businessList.length>0&&this.selectedBusinessId<0?(this.$toast("请选择商圈!"),!1):this.checkIds()?(this.$toast("不能选择重复商圈"),!1):(u=l||d?this.selectedCityName+"-"+this.selectedAreaName:this.selectedAreaName+"-"+this.selectedBusinessName,this.$emit("addBusiness",this.selectedBusinessId,u),void this.$emit("showHideLink",!1))},fetchCityData:function(t,e){var n=this;this.$http.postForm(this.$api.apiGetCityList,{cateId:e}).then(function(t){if(0==t.code&&t.data){var e=t.data;c(e)?(n.cityList=[],n.$toast("没有查询到开通城市")):n.cityList=r()(e).map(function(t,n){var s={};return s.cityId=t,s.cityName=e[t],s})}else n.$toast(t.msg)}).catch(function(t){n.$toast(t)})},selectCity:function(t,e){this.selectedCityId=t,this.selectedCityName=e,this.selectedAreaId=this.selectedBusinessId=-1,this.fetchAreaData(t,e)},fetchAreaData:function(t,e){var n=this;this.$http.postForm(this.$api.apiGetAreaList,{cityId:t,cityName:e}).then(function(s){if(0==s.code&&s.data){var i=s.data;c(i)?(l=!0,n.areaList=[{areaId:t,areaName:e}]):(n.areaList=r()(i).map(function(t,e){var n={};return n.areaId=t,n.areaName=i[t],n}),l=d=!1),n.businessList=[]}else n.$toast(s.msg)}).catch(function(t){n.$toast(t)})},selectArea:function(t,e){this.selectedAreaId=t,this.selectedAreaName=e,this.selectedBusinessId=-1,l?this.businessList=[{businessId:t,businessName:e}]:this.fetchBusinessData(t,e)},fetchBusinessData:function(t,e){var n=this;this.$http.postForm(this.$api.apiGetBusinessList,{areaId:t,areaName:e}).then(function(s){if(0==s.code&&s.data){var i=s.data;c(i)?(d=!0,n.businessList=[{businessId:t,businessName:e}]):(n.businessList=r()(i).map(function(t,e){var n={};return n.businessId=t,n.businessName=i[t],n}),l=d=!1)}else n.$toast(s.msg)}).catch(function(t){n.$toast(t)})},selectBusiness:function(t,e){this.selectedBusinessId=t,this.selectedBusinessName=e},businessStyle:function(t){return this.businessIds().filter(function(e,n){return e===t}).length>0?"business-disable":this.selectedBusinessId===t?"tab-selected":"tab-li-item"},businessIds:function(){var t=[];return this.mainBusinessList.map(function(e,n){t.push(e.businessId)}),t}}},h=n("pvBj");var f=function(t){n("Txr8")},m=["//img.58cdn.com.cn/fangrs/img/8e977675bdef6f689b55694655c61fc5.png","//img.58cdn.com.cn/fangrs/img/aaa5ecd067ce1e4ee93e429fb1fdaa54.png","//pic1.58cdn.com.cn/nowater/fangfe/n_v2e3b79152b99c40a98234672bda6c460a.png","//pic6.58cdn.com.cn/nowater/fangfe/n_v29faa9c277b32473c8f9aff8ce6723bc5.png"],b={0:"//img.58cdn.com.cn/fangrs/img/f8e5ac3311c1f7726a7a504ea5a62e37.png",1:"//img.58cdn.com.cn/fangrs/img/6ee7db95e2783077fc2c41ec4a3f51f3.png"},v={components:{SelectLink:Object(h.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-link-wrapper"},[n("div",{staticClass:"select-link-container"},[n("div",{staticClass:"select-link-header"},[n("div",{staticClass:"header-cancel header-tab",on:{click:t.handleCancel}},[t._v("取消")]),n("div",{staticClass:"header-confirm header-tab",on:{click:t.handleConfirm}},[t._v("确定")])]),n("div",{staticClass:"select-link-content"},[n("ul",{staticClass:"select-item"},t._l(t.cityList,function(e,s){return n("li",{key:e.cityId+s,class:t.selectedCityId===e.cityId?"tab-selected":"tab-li-item",on:{click:function(n){t.selectCity(e.cityId,e.cityName)}}},[t._v("\n                "+t._s(e.cityName)+"\n            ")])})),n("ul",{staticClass:"select-item"},t._l(t.areaList,function(e,s){return n("li",{key:e.areaId+s,class:t.selectedAreaId===e.areaId?"tab-selected":"tab-li-item",on:{click:function(n){t.selectArea(e.areaId,e.areaName)}}},[t._v("\n                "+t._s(e.areaName)+"\n            ")])})),n("ul",{staticClass:"select-item"},t._l(t.businessList,function(e,s){return n("li",{key:e.businessId+s,class:t.businessStyle(+e.businessId),on:{click:function(n){t.selectBusiness(+e.businessId,e.businessName)}}},[t._v("\n                "+t._s(e.businessName)+"\n            ")])}))])])])},[],!1,f,null,null).exports,StickyBtn:n("hTHA").a},data:function(){return{tabIndex:12,tabList:[],rank:"",allRank:"",noRankDes:"",analysisList:[],businessSetText:"设置",businessOldHouseText:"设置",businessRentHouseText:"设置",defaultMainBusiList:[],mainBusinessList:[],linkShow:!1}},created:function(){this.fetchGetCateListData()},methods:{fetchGetCateListData:function(){var t=this;this.$http.get("/api_cate_list.json",{}).then(function(e){if(e&&0==e.code&&e.data){var n=e.data;n instanceof Array&&n.length>0?(n.length>1?(t.tabIndex=12,t.tabList=[{val:"二手房",id:12},{val:"租房",id:1}]):1===n.length&&(1==n[0]?(t.tabIndex=1,t.tabList=[{val:"租房",id:1}]):12==n[0]&&(t.tabIndex=12,t.tabList=[{val:"二手房",id:12}])),t.fetchGetSubregionVppvRankData(t.tabList[0].id),t.fetchGetPromotionAndHouseKeeperInfoData(t.tabList[0].id),t.fetchGetMainBusinessData(t.tabList[0].id)):n instanceof Array&&0==n.length&&Object(a.Toast)("请购买58二手房/租房端口")}else Object(a.Toast)(e.msg)}).catch(function(t){Object(a.Toast)(t)})},fetchGetSubregionVppvRankData:function(t){var e=this;this.$http.get("/api_get_subregion_vppvrank.json",{cateId:t}).then(function(t){if(t&&0==t.code&&t.data){var n=t.data;e.allRank=n.subregionSum,e.rank=n.subregionVppvRank,e.noRankDes=n.defautCopywriter}else Object(a.Toast)(t.data.msg)}).catch(function(t){Object(a.Toast)(t)})},fetchGetPromotionAndHouseKeeperInfoData:function(t){var e=this;this.$http.get("/api_get_promotion_and_house_keeper_info.json",{cateId:t}).then(function(t){if(t&&0==t.code&&t.data){var n=t.data;e.analysisList=n.map(function(t,e){return t.imgSrc=m[e],t})}else e.analysisList=[],Object(a.Toast)("当前没有推广数据，多推广多获客哦")}).catch(function(t){Object(a.Toast)(t)})},handleAnalysisiLink:function(t,e){},fetchGetMainBusinessData:function(t){var e=this;this.$http.get("/api_get_main_business.json",{cateId:t}).then(function(t){t&&0==t.code&&t.data?(e.defaultMainBusiList=t.data,e.mainBusinessList=t.data):(e.defaultMainBusiList=[],e.mainBusinessList=[],Object(a.Toast)("请设置主营商圈"))}).catch(function(t){Object(a.Toast)(t)})},segmentClass:function(t){return b[t]},switchTab:function(t){this.tabList.length>1&&(12==this.tabIndex?this.businessOldHouseText=this.businessSetText:this.businessRentHouseText=this.businessSetText,this.businessSetText=12==t?this.businessOldHouseText:this.businessRentHouseText,this.tabIndex=t,this.fetchGetSubregionVppvRankData(this.tabIndex),this.fetchGetPromotionAndHouseKeeperInfoData(this.tabIndex),this.fetchGetMainBusinessData(this.tabIndex))},handleBusinessSet:function(){var t=this;if("设置"==this.businessSetText)this.businessSetText="完成";else{var e=this.mainBusinessList.map(function(t,e){return t.businessId});this.$http.postForm(this.$api.apiSaveMainBusiness,{cateId:this.tabIndex,businessIds:e}).then(function(e){e&&0==e.code?(Object(a.Toast)({message:e.msg}),t.businessSetText="设置"):Object(a.Toast)({message:e.msg})}).catch(function(t){Object(a.Toast)(t)})}},handleDeleteBus:function(t){if(this.mainBusinessList.length<=1)return Object(a.Toast)("至少设置一个主营商圈"),!1;this.mainBusinessList=this.mainBusinessList.filter(function(e,n){return e.businessId!==t})},handleShowSelectLink:function(){if(this.mainBusinessList.length>=8)return Object(a.Toast)("最多只能设置8个主营商圈"),!1;this.linkShow=!0},showHideLink:function(t){this.linkShow=t},addBusiness:function(t,e){var n={};n.businessId=t,n.businessName=e,this.mainBusinessList.push(n)},handleInstallApp:function(){window.location.href="./views/addPlan.html"},handleCancelSub:function(){window.unsubscribe()}}};var g=function(t){n("E9jF")},y=Object(h.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tab-container"},t._l(t.tabList,function(e,s){return n("span",{key:s,class:["font-tab-span",t.tabIndex==e.id?"selected-tab":""],attrs:{id:e.id},on:{click:function(n){t.switchTab(e.id)}}},[t._v("\n          "+t._s(e.val)+"\n      ")])})),n("div",{staticClass:"tab-swiper"},[n("div",{staticClass:"summary-container"},[n("div",{staticClass:"summary-rank"},[t.rank&&t.allRank?n("span",[t._v("您在竞争对手中排"),n("span",{staticClass:"rank-num"},[t._v(t._s(t.rank))]),t._v("名/总数"+t._s(t.allRank)+"名")]):n("span",{staticStyle:{display:"inline-block","padding-top":"15px"}},[t._v(t._s(t.noRankDes))])])]),n("div",{staticClass:"analysis-container"},[t._m(0),n("div",{staticClass:"analysis-content"},t._l(t.analysisList,function(e,s){return n("div",{key:s,staticClass:"analysis-item",on:{click:function(n){t.handleAnalysisiLink(e.buttonJumpType,s)}}},[n("img",{staticClass:"analysis-img",attrs:{src:e.imgSrc,alt:""}}),n("span",{staticClass:"analysis-result"},[n("img",{staticClass:"analysis-icon",attrs:{src:t.segmentClass(e.status)}}),n("span",{staticClass:"analysis-text"},[t._v(t._s(e.copyWriterContent))])])])}))]),n("div",{staticClass:"main-business-container"},[n("div",{staticClass:"main-business-header"},[n("div",{staticClass:"header-title"},[t._v("主营商圈")]),n("div",{staticClass:"header-set",on:{click:t.handleBusinessSet}},[t._v(t._s(t.businessSetText))])]),n("div",{staticClass:"main-business-des"},[t._v("\n                这是您的重点经营商圈，系统会为您量身定制该商圈推广方案并进行数据分析\n            ")]),n("div",{staticClass:"main-business-content"},t._l(t.mainBusinessList,function(e){return n("div",{key:e.businessId,staticClass:"main-business-item ballOnepx"},[n("span",{staticClass:"business-name"},[t._v(t._s(e.businessName))]),"完成"==t.businessSetText?n("span",{staticClass:"business-delte",on:{click:function(n){t.handleDeleteBus(e.businessId)}}},[t._v("×")]):t._e()])})),n("div",{directives:[{name:"show",rawName:"v-show",value:"完成"==t.businessSetText,expression:"businessSetText=='完成'"}],class:t.mainBusinessList.length>=8?"add-business-container disabled-bus":"add-business-container",on:{click:t.handleShowSelectLink}},[n("span",{staticClass:"add-business-test"},[t._v("添加商圈")]),n("span",{staticClass:"add-business-mark"},[t._v("+")])])]),t.linkShow?n("SelectLink",{attrs:{cateId:t.tabIndex,mainBusinessList:t.mainBusinessList},on:{showHideLink:t.showHideLink,addBusiness:t.addBusiness}}):t._e(),n("sticky-btn",{staticClass:"optimization-btn-add",on:{handleClick:t.handleInstallApp}},[t._v("一键优化")]),n("sticky-btn",{staticClass:"optimization-btn",on:{handleClick:t.handleCancelSub}},[t._v("取消推送订阅")])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"analysis-title"},[e("div",{staticClass:"analysis-title-text bbOnepx"},[this._v("推广管家帮您分析")])])}],!1,g,null,null).exports;s.default.config.productionTip=!1,s.default.use(i.a),new s.default({el:"#app",render:function(t){return t(y)},mounted:function(){window._vue=this}})}});