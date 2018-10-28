(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e0b8952c"],{"0ae9":function(t,e,o){},"7b3d":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"lHh Lpr fff"}},[o("q-layout-header",[o("q-toolbar",{attrs:{color:"blue-grey-7"}},[o("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[o("q-icon",{attrs:{name:"menu"}})],1),o("q-toolbar-title",[t._v("\n        Gordon UI\n      ")]),o("q-tabs",{attrs:{align:"justify",color:"blue-grey-7"}},[o("q-route-tab",{attrs:{slot:"title",default:"",icon:"home",label:"Home",to:"/",exact:""},slot:"title"}),o("q-route-tab",{attrs:{slot:"title",icon:"cast connected",label:"Live Gekkos",to:"/live-gekkos",exact:"",count:t.stratrunners.length},slot:"title"}),o("q-route-tab",{attrs:{slot:"title",icon:"timeline",label:"Backtest",to:"/backtest",exact:""},slot:"title"}),o("q-route-tab",{attrs:{slot:"title",icon:"storage",label:"Data",to:"/data",exact:""},slot:"title"}),o("q-route-tab",{attrs:{slot:"title",icon:"import export",label:"Importer",to:"/data/importer",exact:"",count:t.activeImports},slot:"title"}),o("q-route-tab",{attrs:{slot:"title",icon:"settings",label:"Config",to:"/config",exact:""},slot:"title"}),o("q-route-tab",{attrs:{slot:"title",icon:"help",label:"Documentation",to:"/help"},slot:"title"})],1)],1),t.currentWatchers.length>0?o("q-toolbar",{attrs:{color:"blue-grey-8"}},[t.currentWatchers.length>0?o("q-toolbar-title",{staticClass:"text-right",attrs:{shrink:""}},[t._v("Prices: "),o("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("(from Watchers)")])]):t._e(),t._l(t.currentWatchers,function(e,a){return e.events.latest.candle?o("q-toolbar-title",{key:e.id,attrs:{shrink:""}},[t._v("\n        "+t._s(e.events.latest.candle.close)+"\n        "),o("img",{staticClass:"crypto-icon-16",attrs:{src:"statics/crypto_icons/white/"+e.config.watch.currency.toLowerCase()+".svg",alt:e.config.watch.currency,title:e.config.watch.currency}}),o("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[o("img",{staticClass:"crypto-icon-16 q-icon q-mr-xs",attrs:{src:"statics/crypto_icons/white/"+e.config.watch.asset.toLowerCase()+".svg",alt:e.config.watch.asset,title:e.config.watch.asset}}),t._v("\n          "+t._s(e.config.watch.exchange)+"\n          ")])]):t._e()})],2):t._e()],1),o("q-layout-drawer",{attrs:{"content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[o("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[o("q-list-header",[t._v("Essential Links")]),o("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/h256/gekko-quasar-ui")}}},[o("q-item-side",{attrs:{icon:"code"}}),o("q-item-main",{attrs:{label:"Gekko-Quasar-UI on Github",sublabel:"github.com/h256/gekko-quasar-ui"}})],1),o("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/askmike/gekko")}}},[o("q-item-side",{attrs:{icon:"code"}}),o("q-item-main",{attrs:{label:"Gekko on GitHub",sublabel:"github.com/askmike/gekko"}})],1),o("q-item",{nativeOn:{click:function(e){t.openURL("https://discord.gg/26wMygt")}}},[o("q-item-side",{attrs:{icon:"chat"}}),o("q-item-main",{attrs:{label:"Gekko Discord Channel",sublabel:"https://discord.gg/26wMygt"}})],1),o("q-item",{nativeOn:{click:function(e){t.openURL("https://forum.gekko.wizb.it/")}}},[o("q-item-side",{attrs:{icon:"record_voice_over"}}),o("q-item-main",{attrs:{label:"Gekko Forum",sublabel:"https://forum.gekko.wizb.it/"}})],1),o("q-item-separator"),o("q-list-header",[t._v("Unofficial resources (use at own risk!)")]),o("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/gekkowarez/gekkoga")}}},[o("q-item-side",{attrs:{icon:"code"}}),o("q-item-main",{attrs:{label:"Gekko-GA ",sublabel:"Genetic algorithm for gekko"}})],1),o("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/Gab0/japonicus")}}},[o("q-item-side",{attrs:{icon:"code"}}),o("q-item-main",{attrs:{label:"Japonicus",sublabel:"Genetic algorithm backtester for gekko"}})],1),o("q-item-separator"),o("q-list-header",[t._v("Other resources")]),o("q-item",{nativeOn:{click:function(e){t.openURL("http://cryptoicons.co/")}}},[o("q-item-side",{attrs:{icon:"face"}}),o("q-item-main",{attrs:{label:"Atomiclabs' Cryptocurrency Icons",sublabel:"http://cryptoicons.co/"}})],1),o("q-item-separator"),o("q-list-header",[t._v("Quasar Framework resources")]),o("q-item",{nativeOn:{click:function(e){t.openURL("http://quasar-framework.org")}}},[o("q-item-side",{attrs:{icon:"school"}}),o("q-item-main",{attrs:{label:"Quasar Framework",sublabel:"quasar-framework.org"}})],1)],1)],1),o("q-page-container",[o("router-view")],1),o("q-layout-footer",[o("q-toolbar",{attrs:{color:"blue-grey-7"}},[o("q-toolbar-title",[t._v("\n        Gordon UI v "+t._s(t.version.ui)+"\n        "),o("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])]),o("q-toolbar-title",[o("em",[t._v("Use Gekko and Gordon UI at your own risk!")]),t.version.gekko?o("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Using Gekko v "+t._s(t.version.gekko))]):t._e()]),o("q-toolbar-title",[o("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Icons by "),o("a",{attrs:{href:"http://cryptoicons.co/"}},[t._v("crypticons.co")])])])],1)],1)],1)},r=[];a._withStripped=!0;o("ac6a"),o("cadf"),o("96cf");var s=o("c973"),i=o.n(s),n=o("a60d"),c=function(t,e){if(n["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var o=window.open(t,"_blank");if(o)return o.focus(),o;e()},l=o("2ef0"),u=o.n(l),p=o("9224"),g={name:"MainLayoutPage",data:function(){return{leftDrawerOpen:!1,version:{gekko:null,ui:p.version}}},created:function(){var t=i()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("".concat(this.$store.state.config.apiBaseUrl,"info"));case 3:e=t.sent,u.a.has(e.data,"version")&&(this.version.gekko=u.a.get(e.data,"version")),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("Error while getting gekko's version info.",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),computed:{stratrunners:function(){return u.a.values(this.$store.getters["gekkos/list"]).concat(u.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"papertrader"===t.logType||"tradebot"===t.logType})},watchers:function(){return u.a.values(this.$store.getters["gekkos/list"]).concat(u.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"watcher"===t.logType})},activeImports:function(){return u.a.filter(this.$store.state.imports.imports,function(t){return!t.done}).length},currentWatchers:function(){return u.a.slice(this.watchers,0,10)}},methods:{openURL:c}},k=g,b=(o("f70f"),o("2877")),h=Object(b["a"])(k,a,r,!1,null,null,null);h.options.__file="default.vue";e["default"]=h.exports},9224:function(t){t.exports={name:"gordonui",version:"0.6.6",description:"Quasar Frontend for Gekko Trading Bot",productName:"Gordon UI",cordovaId:"org.cordova.quasar.app",author:"H256 <hansi256@web.de>",scripts:{test:'echo "No test specified" && exit 0'},dependencies:{axios:"^0.18.0",echarts:"^4.1.0","humanize-duration":"^3.15.1",moment:"^2.22.2","vue-echarts":"^3.1.1","vue-i18n":"^8.0.0","vue-json-excel":"^0.2.83"},devDependencies:{marked:"^0.3.19","quasar-cli":"^0.17.13","strip-ansi":"^3.0.1",superagent:"^3.8.3","superagent-no-cache":"^0.1.1"},engines:{node:">= 8.9.0",npm:">= 5.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}},f70f:function(t,e,o){"use strict";var a=o("0ae9"),r=o.n(a);r.a}}]);