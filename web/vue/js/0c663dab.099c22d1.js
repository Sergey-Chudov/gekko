(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0c663dab"],{"0ba0":function(n,t,e){"use strict";var r=e("d293"),o=e.n(r);o.a},"21be":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("q-page",{attrs:{padding:""}},[e("list-gekkos")],1)},o=[];r._withStripped=!0;var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._m(0),e("div",{staticClass:"group q-mb-md"},[e("h4",[n._v("Market watchers")]),n.watchers.length?n._e():e("p",[n._v("You are currently not watching any markets.")]),n.watchers.length?e("q-table",{attrs:{columns:n.watchColumns,"row-key":"id",data:n.watchers,pagination:{rowsPerPage:0},color:"primary",separator:"horizontal","hide-bottom":""},scopedSlots:n._u([{key:"body",fn:function(t){return e("q-tr",{attrs:{props:t}},[e("q-td",{key:"exchange",attrs:{props:t}},[n._v("\n          "+n._s(t.row.config.watch.exchange)+"\n        ")]),e("q-td",{key:"pair",attrs:{props:t}},[e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+t.row.config.watch.currency.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[n._v(n._s(t.row.config.watch.currency)+"\n          ")]),n._v("\n          -\n          "),e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+t.row.config.watch.asset.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[n._v(n._s(t.row.config.watch.asset)+"\n          ")])],1),e("q-td",{key:"startedat",attrs:{props:t}},[n._v("\n          "+n._s(n._f("formatDate")(t.row.start?t.row.start:""))+"\n        ")]),e("q-td",{key:"lastupdate",attrs:{props:t}},[n._v("\n          "+n._s(n._f("formatDate")(t.row.latestUpdate?t.row.latestUpdate:""))+"\n        ")]),e("q-td",{key:"duration",attrs:{props:t}},[n._v("\n          "+n._s(t.row.start&&t.row.latestUpdate?n.timespan(t.row.start,t.row.latestUpdate):"")+"\n        ")]),e("q-td",{key:"price",attrs:{props:t}},[n._v("\n          "+n._s(t.row.events.latest.candle?t.row.events.latest.candle.close+" "+t.row.config.watch.currency:"")+"\n        ")]),e("q-td",{key:"actions",attrs:{props:t}},[e("q-btn",{attrs:{size:"sm",color:"secondary",icon:"visibility",label:"view"},on:{click:function(e){n.$router.push("live-gekkos/"+t.row.id)}}})],1)],1)}}])}):n._e()],1),e("div",{staticClass:"group q-mb-md"},[e("h4",[n._v("Strategy Runners")]),n.stratrunners.length?n._e():e("p",[n._v("You are currently not running any strategies.")]),n.stratrunners.length?e("q-table",{attrs:{columns:n.stratColumns,"row-key":"id",data:n.stratrunners,pagination:{rowsPerPage:0},color:"primary",separator:"horizontal","hide-bottom":""},scopedSlots:n._u([{key:"body",fn:function(t){return e("q-tr",{class:{"bg-green-11":t.row.events.latest.performanceReport&&t.row.events.latest.performanceReport.profit>0,"bg-red-11":t.row.events.latest.performanceReport&&t.row.events.latest.performanceReport.profit<0},attrs:{props:t}},[e("q-td",{key:"type",attrs:{props:t}},[n._v("\n          "+n._s(t.row.logType)+"\n        ")]),e("q-td",{key:"exchange",attrs:{props:t}},[n._v("\n          "+n._s(t.row.config.watch.exchange.toUpperCase())+"\n        ")]),e("q-td",{key:"pair",attrs:{props:t}},[e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+t.row.config.watch.currency.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[n._v(n._s(t.row.config.watch.currency)+"\n          ")]),n._v("\n          -\n          "),e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+t.row.config.watch.asset.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[n._v(n._s(t.row.config.watch.asset)+"\n          ")])],1),e("q-td",{key:"status",attrs:{props:t}},[t.row.stopped?e("q-chip",{attrs:{square:"",dense:"",icon:"stop",color:"orange"}},[n._v("Stopped")]):n._e(),t.row.errored?e("q-chip",{attrs:{square:"",dense:"",icon:"error",color:"negative"}},[n._v("Error")]):n._e(),t.row.active?e("q-chip",{attrs:{square:"",dense:"",icon:"play_arrow",color:"positive"}},[n._v("Running")]):n._e()],1),e("q-td",{key:"lastupdate",attrs:{props:t}},[n._v("\n          "+n._s(n._f("formatDate")(t.row.events.latest.candle?t.row.events.latest.candle.start:""))+"\n        ")]),e("q-td",{key:"duration",attrs:{props:t}},[n._v("\n          "+n._s(t.row.events.initial.candle&&t.row.events.latest.candle?n.timespan(t.row.events.latest.candle.start,t.row.events.initial.candle.start):"")+"\n        ")]),e("q-td",{key:"strategy",attrs:{props:t}},[n._v("\n          "+n._s(t.row.config.tradingAdvisor?t.row.config.tradingAdvisor.method:"")+"\n        ")]),e("q-td",{key:"trades_rt",attrs:{props:t}},[n._v("\n          "+n._s((t.row.events.tradeCompleted?t.row.events.tradeCompleted.length:0)+" / "+(t.row.events.roundtrip?t.row.events.roundtrip.length:0))+"\n        ")]),e("q-td",{key:"success",attrs:{props:t}},[n._v("\n          "+n._s(t.row.events.roundtrip?n.successRate(t.row.events.roundtrip):"0.00 %")+"\n        ")]),e("q-td",{key:"profit",attrs:{props:t}},[n._v(n._s(t.row.events.latest.performanceReport?n.round(t.row.events.latest.performanceReport.profit):"N/A")+"\n          "+n._s(t.row.events.latest.performanceReport?t.row.config.watch.currency:"")+"\n        ")]),e("q-td",{key:"actions",staticClass:"bg-white",attrs:{props:t}},[e("q-btn",{attrs:{size:"sm",color:"secondary",icon:"visibility",label:"view"},on:{click:function(e){n.$router.push("live-gekkos/"+t.row.id)}}})],1)],1)}}])}):n._e()],1),e("div",{staticClass:"group q-mb-md"},[e("h3",[n._v("Start a new live Gekko")]),e("q-btn",{attrs:{color:"amber-8"},on:{click:function(t){t.preventDefault(),n.$router.push("/live-gekkos/new")}}},[n._v("Start a new live Gekko!")])],1)])},a=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"group q-mb-md"},[e("h3",[n._v("Live Gekko")]),e("p",[n._v("Run your strategy against a live market!")])])}];i._withStripped=!0;e("20d6"),e("ac6a"),e("cadf");var u=e("c1df"),s=e.n(u),c=e("8f14"),m=e.n(c),l=e("c49e"),d={mixins:[l["a"]],data:function(){return{timer:!1,now:s()(),watchColumns:[{name:"exchange",label:"Exchange"},{name:"pair",label:"Pair"},{name:"startedat",label:"Started at"},{name:"lastupdate",label:"Last update"},{name:"duration",label:"running since"},{name:"price",label:"Price"},{name:"actions",label:"Actions"}],stratColumns:[{name:"type",label:"Type"},{name:"exchange",label:"Exchange"},{name:"pair",label:"Pair"},{name:"status",label:"Status"},{name:"lastupdate",label:"Last update"},{name:"duration",label:"Duration"},{name:"strategy",label:"Strategy"},{name:"trades_rt",label:"Trades/RT"},{name:"success",label:"Successful"},{name:"profit",label:"Profit"},{name:"actions",label:"Actions"}]}},created:function(){var n=this;this.timer=setInterval(function(){n.now=s()()},1e3)},destroyed:function(){clearTimeout(this.timer)},computed:{stratrunners:function(){return _.values(this.$store.getters["gekkos/list"]).concat(_.values(this.$store.getters["gekkos/archive"])).filter(function(n){return"papertrader"===n.logType||"tradebot"===n.logType})},watchers:function(){return _.values(this.$store.getters["gekkos/list"]).concat(_.values(this.$store.getters["gekkos/archive"])).filter(function(n){return"watcher"===n.logType})}},methods:{stopGekko:function(n){var t=this;if(n){var e=_.findIndex(this.stratrunners,function(t){return t.id==n}),r=-1,o={};if(e>=0){o=this.stratrunners[e].watch;var i=_.filter(this.stratrunners,function(n){var t=o.asset+o.currency+o.exchange,e=n.watch.asset+n.watch.currency+n.watch.exchange;return t==e});i.length>1?this.$q.dialog({title:"Stop Live Gekko",color:"warning",message:"Do you really want to stop the Stratrunner for [".concat(o.exchange," ").concat(o.currency,"-").concat(o.asset,"] ?"),ok:"Ok",cancel:"Cancel"}).then(function(){var e=n;t.$axios.post(t.$store.state.config.apiBaseUrl+"killGekko",{id:e}).then(function(e){t.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+n+")"}),t.$store.dispatch("stratrunners/removeRunner",n)}).catch(function(e){t.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+n+")",detail:e})})}):this.$q.dialog({title:"Stop Live Gekko and market watcher",color:"info",message:"The selected stratrunner\n            for [".concat(o.exchange," ").concat(o.currency,"-").concat(o.asset,"]\n            has a dependant market-watcher. What do you want to do?"),options:{type:"radio",model:"1",items:[{label:"Stop only strategy-runner",value:"1",color:"primary"},{label:"Stop strategy-runner AND market-watcher",value:"2",color:"secondary"}]},ok:"Ok",cancel:"Cancel"}).then(function(e){var r=[];if(r.push(n),"2"==e){var i=_.findIndex(t.watchers,function(n){return n.watch==o});i>=0&&r.push(t.watchers[i].id)}var a=t;r.forEach(function(n){a.$axios.post(a.$store.state.config.apiBaseUrl+"killGekko",{id:n}).then(function(t){a.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+n+")"}),a.$store.dispatch("stratrunners/removeRunner",n),a.$store.dispatch("watchers/removeWatcher",n)}).catch(function(t){a.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+n+")",detail:t})})})})}else if(r=_.findIndex(this.watchers,function(t){return t.id==n}),r>=0){var a=this.watchers[r].watch,u=_.filter(this.stratrunners,function(n){var t=a.asset+a.currency+a.exchange,e=n.watch.asset+n.watch.currency+n.watch.exchange;return t==e});u.length>0?this.$q.dialog({title:"This market watcher has dependant runners!",color:"warning",message:"The market watcher for [".concat(a.exchange," ").concat(a.currency,"-").concat(a.asset,"]\n              has ").concat(u.length," dependant strategy-runner(s).\n              Do you want to close ALL of them?"),ok:"Yes, close all!",cancel:"No, do nothing!"}).then(function(){var e=[];e.push(n),u.forEach(function(n){e.push(n.id)});var r=t;e.forEach(function(n){r.$axios.post(r.$store.state.config.apiBaseUrl+"killGekko",{id:n}).then(function(t){r.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+n+")"}),r.$store.dispatch("stratrunners/removeRunner",n),r.$store.dispatch("watchers/removeWatcher",n)}).catch(function(t){r.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+n+")",detail:t})})})}):this.$q.dialog({title:"Stop market watcher",message:"Do you really want to stop the market watcher for [".concat(a.exchange," ").concat(a.currency,"-").concat(a.asset,"] ?"),ok:"Ok",cancel:"Cancel"}).then(function(){t.$axios.post(t.$store.state.config.apiBaseUrl+"killGekko",{id:n}).then(function(e){t.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+n+")"}),t.$store.dispatch("watchers/removeWatcher",gekkkoId)}).catch(function(e){t.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+n+")",detail:e})})})}}},status:function(n){return n.errored?"errored":n.stopped?"stopped":n.active?"running":void console.log("unknown state:",n)},report:function(n){return _.get(n,"events.latest.performanceReport")},moment:function(n){return s.a.utc(n)},round:function(n){return(+n).toFixed(3)},timespan:function(n,t){return m()(this.moment(n).diff(this.moment(t)))},successRate:function(n){if(!n||!n.length)return(0).toFixed(2)+" %";var t=n.filter(function(n){return n.pnl>0});return(+t.length/n.length*100).toFixed(2)+" %"}}},f=d,h=e("2877"),p=Object(h["a"])(f,i,a,!1,null,null,null);p.options.__file="list.vue";var g=p.exports,k={name:"LiveGekkosPage",components:{listGekkos:g}},y=k,v=(e("0ba0"),Object(h["a"])(y,r,o,!1,null,null,null));v.options.__file="live-gekkos.vue";t["default"]=v.exports},"8f14":function(n,t,e){var r;(function(){var o={y:function(n){return 1===n?"χρόνος":"χρόνια"},mo:function(n){return 1===n?"μήνας":"μήνες"},w:function(n){return 1===n?"εβδομάδα":"εβδομάδες"},d:function(n){return 1===n?"μέρα":"μέρες"},h:function(n){return 1===n?"ώρα":"ώρες"},m:function(n){return 1===n?"λεπτό":"λεπτά"},s:function(n){return 1===n?"δευτερόλεπτο":"δευτερόλεπτα"},ms:function(n){return 1===n?"χιλιοστό του δευτερολέπτου":"χιλιοστά του δευτερολέπτου"},decimal:","},i={ar:{y:function(n){return 1===n?"سنة":"سنوات"},mo:function(n){return 1===n?"شهر":"أشهر"},w:function(n){return 1===n?"أسبوع":"أسابيع"},d:function(n){return 1===n?"يوم":"أيام"},h:function(n){return 1===n?"ساعة":"ساعات"},m:function(n){return["دقيقة","دقائق"][p(n)]},s:function(n){return 1===n?"ثانية":"ثواني"},ms:function(n){return 1===n?"جزء من الثانية":"أجزاء من الثانية"},decimal:","},bg:{y:function(n){return["години","година","години"][d(n)]},mo:function(n){return["месеца","месец","месеца"][d(n)]},w:function(n){return["седмици","седмица","седмици"][d(n)]},d:function(n){return["дни","ден","дни"][d(n)]},h:function(n){return["часа","час","часа"][d(n)]},m:function(n){return["минути","минута","минути"][d(n)]},s:function(n){return["секунди","секунда","секунди"][d(n)]},ms:function(n){return["милисекунди","милисекунда","милисекунди"][d(n)]},decimal:","},ca:{y:function(n){return"any"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"os")},w:function(n){return"setman"+(1===n?"a":"es")},d:function(n){return"di"+(1===n?"a":"es")},h:function(n){return"hor"+(1===n?"a":"es")},m:function(n){return"minut"+(1===n?"":"s")},s:function(n){return"segon"+(1===n?"":"s")},ms:function(n){return"milisegon"+(1===n?"":"s")},decimal:","},cs:{y:function(n){return["rok","roku","roky","let"][f(n)]},mo:function(n){return["měsíc","měsíce","měsíce","měsíců"][f(n)]},w:function(n){return["týden","týdne","týdny","týdnů"][f(n)]},d:function(n){return["den","dne","dny","dní"][f(n)]},h:function(n){return["hodina","hodiny","hodiny","hodin"][f(n)]},m:function(n){return["minuta","minuty","minuty","minut"][f(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][f(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][f(n)]},decimal:","},da:{y:"år",mo:function(n){return"måned"+(1===n?"":"er")},w:function(n){return"uge"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"e")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minut"+(1===n?"":"ter")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},de:{y:function(n){return"Jahr"+(1===n?"":"e")},mo:function(n){return"Monat"+(1===n?"":"e")},w:function(n){return"Woche"+(1===n?"":"n")},d:function(n){return"Tag"+(1===n?"":"e")},h:function(n){return"Stunde"+(1===n?"":"n")},m:function(n){return"Minute"+(1===n?"":"n")},s:function(n){return"Sekunde"+(1===n?"":"n")},ms:function(n){return"Millisekunde"+(1===n?"":"n")},decimal:","},el:o,en:{y:function(n){return"year"+(1===n?"":"s")},mo:function(n){return"month"+(1===n?"":"s")},w:function(n){return"week"+(1===n?"":"s")},d:function(n){return"day"+(1===n?"":"s")},h:function(n){return"hour"+(1===n?"":"s")},m:function(n){return"minute"+(1===n?"":"s")},s:function(n){return"second"+(1===n?"":"s")},ms:function(n){return"millisecond"+(1===n?"":"s")},decimal:"."},es:{y:function(n){return"año"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"es")},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"día"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milisegundo"+(1===n?"":"s")},decimal:","},fa:{y:"سال",mo:"ماه",w:"هفته",d:"روز",h:"ساعت",m:"دقیقه",s:"ثانیه",ms:"میلی ثانیه",decimal:"."},fi:{y:function(n){return 1===n?"vuosi":"vuotta"},mo:function(n){return 1===n?"kuukausi":"kuukautta"},w:function(n){return"viikko"+(1===n?"":"a")},d:function(n){return"päivä"+(1===n?"":"ä")},h:function(n){return"tunti"+(1===n?"":"a")},m:function(n){return"minuutti"+(1===n?"":"a")},s:function(n){return"sekunti"+(1===n?"":"a")},ms:function(n){return"millisekunti"+(1===n?"":"a")},decimal:","},fr:{y:function(n){return"an"+(n>=2?"s":"")},mo:"mois",w:function(n){return"semaine"+(n>=2?"s":"")},d:function(n){return"jour"+(n>=2?"s":"")},h:function(n){return"heure"+(n>=2?"s":"")},m:function(n){return"minute"+(n>=2?"s":"")},s:function(n){return"seconde"+(n>=2?"s":"")},ms:function(n){return"milliseconde"+(n>=2?"s":"")},decimal:","},gr:o,hr:{y:function(n){return n%10===2||n%10===3||n%10===4?"godine":"godina"},mo:function(n){return 1===n?"mjesec":2===n||3===n||4===n?"mjeseca":"mjeseci"},w:function(n){return n%10===1&&11!==n?"tjedan":"tjedna"},d:function(n){return 1===n?"dan":"dana"},h:function(n){return 1===n?"sat":2===n||3===n||4===n?"sata":"sati"},m:function(n){var t=n%10;return 2!==t&&3!==t&&4!==t||!(n<10||n>14)?"minuta":"minute"},s:function(n){return 10===n||11===n||12===n||13===n||14===n||16===n||17===n||18===n||19===n||n%10===5?"sekundi":n%10===1?"sekunda":n%10===2||n%10===3||n%10===4?"sekunde":"sekundi"},ms:function(n){return 1===n?"milisekunda":n%10===2||n%10===3||n%10===4?"milisekunde":"milisekundi"},decimal:","},hu:{y:"év",mo:"hónap",w:"hét",d:"nap",h:"óra",m:"perc",s:"másodperc",ms:"ezredmásodperc",decimal:","},id:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"menit",s:"detik",ms:"milidetik",decimal:"."},is:{y:"ár",mo:function(n){return"mánuð"+(1===n?"ur":"ir")},w:function(n){return"vik"+(1===n?"a":"ur")},d:function(n){return"dag"+(1===n?"ur":"ar")},h:function(n){return"klukkutím"+(1===n?"i":"ar")},m:function(n){return"mínút"+(1===n?"a":"ur")},s:function(n){return"sekúnd"+(1===n?"a":"ur")},ms:function(n){return"millisekúnd"+(1===n?"a":"ur")},decimal:"."},it:{y:function(n){return"ann"+(1===n?"o":"i")},mo:function(n){return"mes"+(1===n?"e":"i")},w:function(n){return"settiman"+(1===n?"a":"e")},d:function(n){return"giorn"+(1===n?"o":"i")},h:function(n){return"or"+(1===n?"a":"e")},m:function(n){return"minut"+(1===n?"o":"i")},s:function(n){return"second"+(1===n?"o":"i")},ms:function(n){return"millisecond"+(1===n?"o":"i")},decimal:","},ja:{y:"年",mo:"月",w:"週",d:"日",h:"時間",m:"分",s:"秒",ms:"ミリ秒",decimal:"."},ko:{y:"년",mo:"개월",w:"주일",d:"일",h:"시간",m:"분",s:"초",ms:"밀리 초",decimal:"."},lo:{y:"ປີ",mo:"ເດືອນ",w:"ອາທິດ",d:"ມື້",h:"ຊົ່ວໂມງ",m:"ນາທີ",s:"ວິນາທີ",ms:"ມິນລິວິນາທີ",decimal:","},lt:{y:function(n){return n%10===0||n%100>=10&&n%100<=20?"metų":"metai"},mo:function(n){return["mėnuo","mėnesiai","mėnesių"][h(n)]},w:function(n){return["savaitė","savaitės","savaičių"][h(n)]},d:function(n){return["diena","dienos","dienų"][h(n)]},h:function(n){return["valanda","valandos","valandų"][h(n)]},m:function(n){return["minutė","minutės","minučių"][h(n)]},s:function(n){return["sekundė","sekundės","sekundžių"][h(n)]},ms:function(n){return["milisekundė","milisekundės","milisekundžių"][h(n)]},decimal:","},ms:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"minit",s:"saat",ms:"milisaat",decimal:"."},nl:{y:"jaar",mo:function(n){return 1===n?"maand":"maanden"},w:function(n){return 1===n?"week":"weken"},d:function(n){return 1===n?"dag":"dagen"},h:"uur",m:function(n){return 1===n?"minuut":"minuten"},s:function(n){return 1===n?"seconde":"seconden"},ms:function(n){return 1===n?"milliseconde":"milliseconden"},decimal:","},no:{y:"år",mo:function(n){return"måned"+(1===n?"":"er")},w:function(n){return"uke"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"er")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minutt"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},pl:{y:function(n){return["rok","roku","lata","lat"][l(n)]},mo:function(n){return["miesiąc","miesiąca","miesiące","miesięcy"][l(n)]},w:function(n){return["tydzień","tygodnia","tygodnie","tygodni"][l(n)]},d:function(n){return["dzień","dnia","dni","dni"][l(n)]},h:function(n){return["godzina","godziny","godziny","godzin"][l(n)]},m:function(n){return["minuta","minuty","minuty","minut"][l(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][l(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][l(n)]},decimal:","},pt:{y:function(n){return"ano"+(1===n?"":"s")},mo:function(n){return 1===n?"mês":"meses"},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"dia"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milissegundo"+(1===n?"":"s")},decimal:","},ru:{y:function(n){return["лет","год","года"][d(n)]},mo:function(n){return["месяцев","месяц","месяца"][d(n)]},w:function(n){return["недель","неделя","недели"][d(n)]},d:function(n){return["дней","день","дня"][d(n)]},h:function(n){return["часов","час","часа"][d(n)]},m:function(n){return["минут","минута","минуты"][d(n)]},s:function(n){return["секунд","секунда","секунды"][d(n)]},ms:function(n){return["миллисекунд","миллисекунда","миллисекунды"][d(n)]},decimal:","},uk:{y:function(n){return["років","рік","роки"][d(n)]},mo:function(n){return["місяців","місяць","місяці"][d(n)]},w:function(n){return["тижнів","тиждень","тижні"][d(n)]},d:function(n){return["днів","день","дні"][d(n)]},h:function(n){return["годин","година","години"][d(n)]},m:function(n){return["хвилин","хвилина","хвилини"][d(n)]},s:function(n){return["секунд","секунда","секунди"][d(n)]},ms:function(n){return["мілісекунд","мілісекунда","мілісекунди"][d(n)]},decimal:","},ur:{y:"سال",mo:function(n){return 1===n?"مہینہ":"مہینے"},w:function(n){return 1===n?"ہفتہ":"ہفتے"},d:"دن",h:function(n){return 1===n?"گھنٹہ":"گھنٹے"},m:"منٹ",s:"سیکنڈ",ms:"ملی سیکنڈ",decimal:"."},sk:{y:function(n){return["rok","roky","roky","rokov"][f(n)]},mo:function(n){return["mesiac","mesiace","mesiace","mesiacov"][f(n)]},w:function(n){return["týždeň","týždne","týždne","týždňov"][f(n)]},d:function(n){return["deň","dni","dni","dní"][f(n)]},h:function(n){return["hodina","hodiny","hodiny","hodín"][f(n)]},m:function(n){return["minúta","minúty","minúty","minút"][f(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekúnd"][f(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekúnd"][f(n)]},decimal:","},sv:{y:"år",mo:function(n){return"månad"+(1===n?"":"er")},w:function(n){return"veck"+(1===n?"a":"or")},d:function(n){return"dag"+(1===n?"":"ar")},h:function(n){return"timm"+(1===n?"e":"ar")},m:function(n){return"minut"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},tr:{y:"yıl",mo:"ay",w:"hafta",d:"gün",h:"saat",m:"dakika",s:"saniye",ms:"milisaniye",decimal:","},vi:{y:"năm",mo:"tháng",w:"tuần",d:"ngày",h:"giờ",m:"phút",s:"giây",ms:"mili giây",decimal:","},zh_CN:{y:"年",mo:"个月",w:"周",d:"天",h:"小时",m:"分钟",s:"秒",ms:"毫秒",decimal:"."},zh_TW:{y:"年",mo:"個月",w:"周",d:"天",h:"小時",m:"分鐘",s:"秒",ms:"毫秒",decimal:"."}};function a(n){var t=function(n,e){var r=m({},t,e||{});return s(n,r)};return m(t,{language:"en",delimiter:", ",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},n)}var u=a({});function s(n,t){var e,r,o;n=Math.abs(n);var a=t.languages[t.language]||i[t.language];if(!a)throw new Error("No language "+a+".");var u,s,m,l=[];for(e=0,r=t.units.length;e<r;e++)u=t.units[e],s=t.unitMeasures[u],m=e+1===r?n/s:Math.floor(n/s),l.push({unitCount:m,unitName:u}),n-=m*s;var d,f,h=0;for(e=0;e<l.length;e++)if(l[e].unitCount){h=e;break}if(t.round)for(e=l.length-1;e>=0;e--){if(o=l[e],o.unitCount=Math.round(o.unitCount),0===e)break;f=l[e-1],d=t.unitMeasures[f.unitName]/t.unitMeasures[o.unitName],(o.unitCount%d===0||t.largest&&t.largest-1<e-h)&&(f.unitCount+=o.unitCount/d,o.unitCount=0)}var p=[];for(e=0,l.length;e<r;e++)if(o=l[e],o.unitCount&&p.push(c(o.unitCount,o.unitName,a,t)),p.length===t.largest)break;return p.length?t.conjunction&&1!==p.length?2===p.length?p.join(t.conjunction):p.length>2?p.slice(0,-1).join(t.delimiter)+(t.serialComma?",":"")+t.conjunction+p.slice(-1):void 0:p.join(t.delimiter):c(0,t.units[t.units.length-1],a,t)}function c(n,t,e,r){var o;o=void 0===r.decimal?e.decimal:r.decimal;var i,a=n.toString().replace(".",o),u=e[t];return i="function"===typeof u?u(n):u,a+r.spacer+i}function m(n){for(var t,e=1;e<arguments.length;e++)for(var r in t=arguments[e],t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}function l(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3}function d(n){return Math.floor(n)!==n?2:n%100>=5&&n%100<=20||n%10>=5&&n%10<=9||n%10===0?0:n%10===1?1:n>1?2:0}function f(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3}function h(n){return 1===n||n%10===1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2}function p(n){return n<=2?0:n>2&&n<11?1:0}u.getSupportedLanguages=function(){var n=[];for(var t in i)i.hasOwnProperty(t)&&"gr"!==t&&n.push(t);return n},u.humanizer=a,r=function(){return u}.call(t,e,t,n),void 0===r||(n.exports=r)})()},c49e:function(n,t,e){"use strict";e("6b54");var r=e("c1df"),o=e.n(r),i=e("8f14"),a=e.n(i);t["a"]={filters:{formatDate:function(n){return""===n?"":o.a.utc(n).format("YYYY-MM-DD HH:mm")},formatFromUnix:function(n){return""===n?"":"NaN"===parseInt(n).toString()||parseInt(n)<1e4?o.a.utc(n).format("YYYY-MM-DD HH:mm"):o.a.unix(n).utc().format("YYYY-MM-DD HH:mm")},humanizeMoment:function(n){return o.a.duration(n).humanize()},durationHumanized:function(n){return a()(n,{largest:4})},timespan:function(n,t){return a()(o()(n).diff(o()(t)))}}}},d293:function(n,t,e){}}]);