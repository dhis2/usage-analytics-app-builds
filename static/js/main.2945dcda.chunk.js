(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e){e.exports={"Usage Analytics":"",Values:"","Please use the format yyyy-mm-dd":"","End date is before start date":"","Start date is after end date":"","Start Date":"","End date":"",Category:"",Interval:"","Aggregation Level":"","Chart Type":"","Event Type":"","Page Size":"","Sort Order":"","There was an error retrieving the usage analytics data":"","Error loading application.":"",Sum:"",Average:"","Favorite views":"","Number of times users looked at analysis favorites":"","Favorites saved":"","Number of analysis favorites created by users":"",Users:"","Number of users in the system":"","Top favorites":"","Data values":"","Number of data values saved in the system":"",All:"",Total:"",Chart:"",Map:"","Report table":"","Event report":"","Event chart":"",Dashboard:"","Data set report":"",Day:"",Week:"",Month:"",Year:"",Date:"","Pivot Table":"","Event Report":"","Event Chart":"","Data Set Report":"","Average Map":"","Average Chart":"","Average Pivot Table":"","Average Event Report":"","Average Event Chart":"","Average Dashboard":"",Maps:"",Charts:"","Pivot Tables":"","Event Reports":"","Event Charts":"",Dashboards:"",Indicators:"","Active Users":"","Total Users":"",Position:"",Name:"",Views:"",ID:"",Created:"","Data Values":"",Ascending:"",Descending:""}},141:function(e){e.exports={"Usage Analytics":"\u0627\u0633\u062a\u0645\u0627\u0644 \u0627\u0639\u062f\u0627\u0648\u0634\u0645\u0627\u0631",Values:"","Please use the format yyyy-mm-dd":"","End date is before start date":"","Start date is after end date":"","Start Date":"","End date":"\u0627\u0653\u062e\u0631\u06cc \u062a\u0627\u0631\u06cc\u062e",Category:"\u0642\u0633\u0645",Interval:"","Aggregation Level":"","Chart Type":"","Event Type":"","Page Size":"","Sort Order":"","There was an error retrieving the usage analytics data":"","Error loading application.":"",Sum:"\u062c\u0645\u0639",Average:"\u0627\u0648\u0633\u0637","Favorite views":"","Number of times users looked at analysis favorites":"","Favorites saved":"","Number of analysis favorites created by users":"",Users:"\u0635\u0627\u0631\u0641","Number of users in the system":"","Top favorites":"","Data values":"\u0688\u06cc\u0679\u0627 \u0627\u0642\u062f\u0627\u0631","Number of data values saved in the system":"",All:"\u062a\u0645\u0627\u0645",Total:"\u06a9\u064f\u0644",Chart:"\u0686\u0627\u0631\u0679",Map:"\u0646\u0642\u0634\u06c1","Report table":"","Event report":"","Event chart":"",Dashboard:"\u0688\u06cc\u0634\u0628\u0648\u0631\u0688","Data set report":"",Day:"\u062f\u0646",Week:"\u06c1\u0641\u062a\u06c1",Month:"\u0645\u06c1\u06cc\u0646\u06c1",Year:"\u0633\u0627\u0644",Date:"\u062a\u0627\u0631\u06cc\u062e","Pivot Table":"\u067e\u0626\u0648\u0679 \u0679\u06cc\u0628\u0644","Event Report":"","Event Chart":"","Data Set Report":"","Average Map":"","Average Chart":"","Average Pivot Table":"","Average Event Report":"","Average Event Chart":"","Average Dashboard":"",Maps:"\u0646\u0642\u0633\u06d2",Charts:"\u0686\u0627\u0631\u0679\u0633","Pivot Tables":"\u0645\u062d\u0648\u0631 \u0645\u06cc\u0632\u06cc\u06ba","Event Reports":"\u0627\u06cc\u0648\u0646\u0679 \u0631\u06cc\u067e\u0648\u0631\u0679","Event Charts":"",Dashboards:"\u0688\u06cc\u0634\u0628\u0648\u0631\u0688\u0632",Indicators:"\u0627\u0634\u0627\u0631\u06d2","Active Users":"","Total Users":"",Position:"",Name:"\xd9\x86\xd8\xa7\xd9",Views:"\u0645\u0646\u0627\u0638\u0631",ID:"\u0634\u0646\u0627\u062e\u062a",Created:"\u062a\u062e\u0644\u06cc\u0642","Data Values":"",Ascending:"",Descending:""}},146:function(e,a,t){e.exports=t(345)},235:function(e,a,t){},243:function(e,a,t){},244:function(e,a,t){},249:function(e,a,t){},250:function(e,a,t){},342:function(e,a,t){},343:function(e,a,t){},345:function(e,a,t){"use strict";t.r(a);t(147),t(153),t(154),t(155),t(109),t(163),t(165),t(167),t(168),t(169),t(170),t(171),t(173),t(175),t(176),t(177),t(178),t(179),t(180),t(181),t(182),t(183),t(184),t(185),t(186),t(187),t(188),t(189),t(190),t(191),t(192);var r=t(0),n=t.n(r),l=t(67),s=t.n(l),o=(t(235),t(4)),c=t.n(o),i=t(10),u=t(39),v=t(139),d=(t(240),"LOADING"),b="READY",m="ERROR",g="APP_LOAD_SUCCESS",E="APP_LOAD_ERROR",p="USAGE_DATA_REQUESTED",h="USAGE_DATA_RECEIVED",y="USAGE_DATA_ERRORED",f="FILTER_UPDATED";var D,A=t(5),O=t(28),T="FAVORITE_VIEWS",k="TOP_FAVORITES",S=(D={},Object(A.a)(D,T,{value:T,label:c.a.t("Favorite views"),subtitle:c.a.t("Number of times users looked at analysis favorites")}),Object(A.a)(D,"FAVORITES_SAVED",{value:"FAVORITES_SAVED",label:c.a.t("Favorites saved"),subtitle:c.a.t("Number of analysis favorites created by users")}),Object(A.a)(D,"USERS",{value:"USERS",label:c.a.t("Users"),subtitle:c.a.t("Number of users in the system")}),Object(A.a)(D,k,{value:k,label:c.a.t("Top favorites")}),Object(A.a)(D,"DATA_VALUES",{value:"DATA_VALUES",label:c.a.t("Data values"),subtitle:c.a.t("Number of data values saved in the system")}),D),C=[S.FAVORITE_VIEWS,S.FAVORITES_SAVED,S.USERS,S.TOP_FAVORITES,S.DATA_VALUES],w="DAY",j="WEEK",R="MONTH",V="YEAR",N=[{value:w,label:c.a.t("Day")},{value:j,label:c.a.t("Week")},{value:R,label:c.a.t("Month")},{value:V,label:c.a.t("Year")}],U="SUM",_=[{value:U,label:c.a.t("Sum")},{value:"AVERAGE",label:c.a.t("Average")}],F="ALL",I=[{value:F,label:c.a.t("All")},{value:"TOTAL",label:c.a.t("Total")}],P="CHART_VIEW",L=[{value:P,label:c.a.t("Chart")},{value:"MAP_VIEW",label:c.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:c.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:c.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:c.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:c.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:c.a.t("Data set report")}],M="ASC",x=[{value:M,label:c.a.t("Ascending")},{value:"DESC",label:c.a.t("Descending")}];function W(e){var a=e.getFullYear(),t=""+(e.getMonth()+1),r=""+e.getDate();return t.length<2&&(t="0"+t),r.length<2&&(r="0"+r),[a,t,r].join("-")}var z=[v.a];var G=Object(u.c)({appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case g:return b;case E:return m;default:return e}},locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case g:return r.locale;default:return e}},usageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case p:return d;case g:return r.usageData;case h:return r;case y:return m;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var a=new Date(e.valueOf());return a.setMonth(a.getMonth()-4),{category:T,startDate:W(a),endDate:W(e),interval:j,aggregationLevel:U,chartType:F,eventType:P,pageSize:25,sortOrder:M}}(new Date),a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case f:return Object(O.a)({},e,Object(A.a)({},r.key,r.value));default:return e}}}),Y=Object(u.d)(G,u.a.apply(void 0,z)),H=t(11),B=t(16),J=t(13),K=t(9),Q=t(12),$=t(353),q=t(18),X=t.n(q),Z=t(33),ee=t(70),ae=t(68),te=t.n(ae),re=(t(242),t(140)),ne=t(141),le="usage-analytics-app";te.a.locale("en"),c.a.addResources("en",le,re),c.a.addResources("ur",le,ne),c.a.setDefaultNamespace(le),c.a.changeLanguage("en");var se=c.a;var oe="".concat("..","/api"),ce={method:"GET",credentials:"include"};function ie(e){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce;return e?fetch("".concat(oe,"/").concat(e),a).then(function(e){if(e.ok)return e;throw new Error(e.statusText)}):Promise.reject(new Error("A path must be passed"))}(e).then(function(e){return e.json()}).then(function(e){if("ERROR"===e.status)throw new Error(e.message);return e})}function ue(e){return e.category===k?function(e){var a=e.eventType,t=e.pageSize,r=e.sortOrder,n="eventType=".concat(a,"&pageSize=").concat(t,"&sortOrder=").concat(r,"&_=").concat(Date.now());return ie("dataStatistics/favorites?".concat(n))}(e):function(e){var a=e.startDate,t=e.endDate,r=e.interval,n="startDate=".concat(a,"&endDate=").concat(t,"&interval=").concat(r,"&_=").concat(Date.now());return ie("dataStatistics?".concat(n))}(e)}function ve(e){var a=e.filter;return Promise.all([ie("userSettings").then(function(e){return e.keyUiLocale}),ue(a)]).then(function(e){var a=Object(ee.a)(e,2),t=a[0],r=a[1];return function(e){se.changeLanguage(e)}(t),{usageData:r,locale:t}})}var de=function(e){return function(a,t){return a(be(e.target.name,e.target.value)),me(t().filter,a)}},be=function(e,a){return Ee(f,{key:e,value:a})};function me(e,a){return ge.apply(this,arguments)}function ge(){return(ge=Object(Z.a)(X.a.mark(function e(a,t){var r;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ee(p)),e.prev=1,e.next=4,ue(a);case 4:r=e.sent,t(Ee(h,r)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t(Ee(y,e.t0));case 12:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}function Ee(e,a){return{type:e,payload:a}}t(243);var pe=function(e){var a=e.message;return n.a.createElement("div",{className:"uaa-error"},a)},he=t(352);t(244);var ye,fe=[{value:5,label:"5"},{value:10,label:"10"},{value:15,label:"15"},{value:20,label:"20"},{value:25,label:"25"}],De=function(e){return Object(O.a)({},e,Object(A.a)({},"filled",!0))},Ae=(ye=he.a,function(e){return n.a.createElement("div",{className:"uaa-fieldwrap"},n.a.createElement(ye,e))}),Oe=t(145),Te=t(7),ke=t(142),Se=t.n(ke),Ce=(t(249),c.a.t("Please use the format yyyy-mm-dd")),we=c.a.t("End date is before start date"),je=c.a.t("Start date is after end date"),Re=function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(J.a)(this,Object(K.a)(a).call(this,e))).state={startDateError:null,endDateError:null},t.onStartDateChange=t.onStartDateChange.bind(Object(Te.a)(t)),t.onEndDateChange=t.onEndDateChange.bind(Object(Te.a)(t)),t.updateUsageData=Se()(e.updateUsageData,250),t}return Object(Q.a)(a,e),Object(B.a)(a,[{key:"onStartDateChange",value:function(e){this.onChange("startDate",e.target.value)}},{key:"onEndDateChange",value:function(e){this.onChange("endDate",e.target.value)}},{key:"onChange",value:function(e,a){var t,r=this.props,n=r.updateFilter,l=(r.updateUsageData,Object(Oe.a)(r,["updateFilter","updateUsageData"])),s="".concat(e,"Error"),o="".concat("startDate"===e?"endDate":"startDate","Error"),c=this.getError(Object(O.a)({},l,Object(A.a)({},e,a)),e),i=this.state[o]===Ce?Ce:null;this.state[s]!==c&&this.setState((t={},Object(A.a)(t,s,c),Object(A.a)(t,o,i),t));n(e,a),c||this.updateUsageData()}},{key:"getError",value:function(e,a){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(e[a])?e.endDate<e.startDate?"startDate"===a?je:we:null:Ce}},{key:"render",value:function(){var e=this.props,a=e.startDate,t=e.endDate,r=this.state,l=r.startDateError,s=r.endDateError;return n.a.createElement("div",{className:"uaa-date-range"},n.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},n.a.createElement("label",null,c.a.t("Start Date")),n.a.createElement("input",{className:"startDate",type:"date",value:a,onChange:this.onStartDateChange}),l&&n.a.createElement("span",{className:"uaa-date-input-error ".concat("startDate")},l)),n.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},n.a.createElement("label",null,c.a.t("End date")),n.a.createElement("input",{className:"endDate",type:"date",value:t,onChange:this.onEndDateChange}),s&&n.a.createElement("span",{className:"uaa-date-input-error ".concat("endDate")},s)))}}]),a}(r.Component),Ve=Object(i.b)(Me("category"),{onChange:function(e){return function(a,t){var r=t().filter,n=r.category;if(a(be(e.target.name,e.target.value)),function(e,a){return e!==a&&(a===k&&e!==k||e===k&&a!==k)}(n,e.target.value))return me(Object(O.a)({},r,{category:e.target.value}),a)}}})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"category",label:c.a.t("Category")}),C.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Ne=Object(i.b)(function(e){return{startDate:e.filter.startDate,endDate:e.filter.endDate}},{updateFilter:be,updateUsageData:function(){return function(e,a){return me(a().filter,e)}}})(Re),Ue=Object(i.b)(Me("interval"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"interval",label:c.a.t("Interval")}),N.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),_e=Object(i.b)(Me("aggregationLevel"),{onChange:be})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"aggregationLevel",label:c.a.t("Aggregation Level")}),_.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Fe=Object(i.b)(Me("chartType"),{onChange:be})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"chartType",label:c.a.t("Chart Type")}),I.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Ie=Object(i.b)(Me("eventType"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"eventType",label:c.a.t("Event Type")}),L.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Pe=Object(i.b)(Me("pageSize"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"pageSize",label:c.a.t("Page Size")}),fe.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Le=Object(i.b)(Me("sortOrder"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"sortOrder",label:c.a.t("Sort Order")}),x.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))});function Me(e){return function(a){return{value:a.filter[e]}}}t(250);var xe,We,ze,Ge,Ye,He,Be=Object(i.b)(function(e){var a=e.filter.category;return{showDateFields:a!==k,showTopFavoritesFields:a===k,showFavoriteViewsFields:a===T}})(function(e){var a=e.showDateFields,t=e.showFavoriteViewsFields,l=e.showTopFavoritesFields;return n.a.createElement("aside",{className:"uaa-filter-sidebar"},n.a.createElement("h1",{className:"uaa-app-header"},c.a.t("Usage Analytics")),n.a.createElement(Ve,null),a&&n.a.createElement(r.Fragment,null,n.a.createElement(Ne,null),n.a.createElement(Ue,null)),t&&n.a.createElement(r.Fragment,null,n.a.createElement(_e,null),n.a.createElement(Fe,null)),l&&n.a.createElement(r.Fragment,null,n.a.createElement(Ie,null),n.a.createElement(Pe,null),n.a.createElement(Le,null)))}),Je=t(143),Ke={key:"date",label:c.a.t("Date")},Qe={key:"mapViews",label:c.a.t("Map")},$e={key:"chartViews",label:c.a.t("Chart")},qe={key:"pivotTableViews",label:c.a.t("Pivot Table")},Xe={key:"eventReportViews",label:c.a.t("Event Report")},Ze={key:"eventChartViews",label:c.a.t("Event Chart")},ea={key:"dashboardViews",label:c.a.t("Dashboard")},aa={key:"dataSetReportViews",label:c.a.t("Data Set Report")},ta={key:"totalViews",label:c.a.t("Total")},ra={key:"averageMapViews",label:c.a.t("Average Map")},na={key:"averageChartViews",label:c.a.t("Average Chart")},la={key:"averagePivotTableViews",label:c.a.t("Average Pivot Table")},sa={key:"averageEventReportViews",label:c.a.t("Average Event Report")},oa={key:"averageEventChartViews",label:c.a.t("Average Event Chart")},ca={key:"averageDashboardViews",label:c.a.t("Average Dashboard")},ia={key:"averageViews",label:c.a.t("Average")},ua={key:"savedMaps",label:c.a.t("Maps")},va={key:"savedCharts",label:c.a.t("Charts")},da={key:"savedPivotTables",label:c.a.t("Pivot Tables")},ba={key:"savedEventReports",label:c.a.t("Event Reports")},ma={key:"savedEventCharts",label:c.a.t("Event Charts")},ga={key:"savedDashboards",label:c.a.t("Dashboards")},Ea={key:"savedIndicators",label:c.a.t("Indicators")},pa={key:"activeUsers",label:c.a.t("Active Users")},ha={key:"users",label:c.a.t("Total Users")},ya={key:"position",label:c.a.t("Position")},fa={key:"name",label:c.a.t("Name")},Da={key:"views",label:c.a.t("Views")},Aa={key:"id",label:c.a.t("ID")},Oa={key:"created",label:c.a.t("Created")},Ta={key:"savedDataValues",label:c.a.t("Data Values")},ka=[Qe,$e,qe,Xe,Ze,ea,aa],Sa=[ra,na,la,sa,oa,ca],Ca=[ua,va,da,ba,ma,ga,Ea],wa=[pa,ha],ja=(We={},Object(A.a)(We,T,(xe={},Object(A.a)(xe,U,[Ke].concat(ka,[ta])),Object(A.a)(xe,"AVERAGE",[Ke].concat(Sa,[ia])),xe)),Object(A.a)(We,"FAVORITES_SAVED",[Ke].concat(Ca)),Object(A.a)(We,"USERS",[Ke].concat(wa)),Object(A.a)(We,k,[ya,fa,Da,Aa,Oa]),Object(A.a)(We,"DATA_VALUES",[Ke,Ta]),We),Ra=(He={},Object(A.a)(He,T,(Ye={},Object(A.a)(Ye,U,(ze={},Object(A.a)(ze,F,ka),Object(A.a)(ze,"TOTAL",[ta]),ze)),Object(A.a)(Ye,"AVERAGE",(Ge={},Object(A.a)(Ge,F,Sa),Object(A.a)(Ge,"TOTAL",[ia]),Ge)),Ye)),Object(A.a)(He,"FAVORITES_SAVED",Ca),Object(A.a)(He,"USERS",wa),Object(A.a)(He,"DATA_VALUES",[Ta]),He),Va={yyyymmdd:{day:"numeric",month:"short",year:"numeric"},yyyymm:{month:"short",year:"numeric"}},Na=c.a.t("Week");function Ua(e,a){var t=e.year,r=e.month,n=e.week,l=e.day;switch(a){case V:return t;case R:return _a(t,r);case j:return"".concat(Na," ").concat(n," / ").concat(t);case w:default:return _a(t,r,l)}}function _a(e,a,t){return Fa(t?new Date(e,a-1,t):new Date(e,a-1),t?Va.yyyymmdd:Va.yyyymm)}function Fa(e,a){var t=Y.getState().locale||"en";return new Intl.DateTimeFormat(t,a).format(e)}var Ia=["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC"],Pa={animation:{duration:180},legend:{position:"bottom"},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"nearest"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},ticks:{maxRotation:45,minRotation:45}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:c.a.t("Values")},ticks:{suggestedMin:0,precision:0}}]}},La={backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0},Ma=1;function xa(e,a){for(var t=e.aggregationLevel,r=e.category,n=e.chartType,l=e.interval,s=[],o=[],c=S[r].label,i=S[r].subtitle,u=Ma,v=null,d=r===T?Ra[r][t][n]:Ra[r],b=a.length,m=d.length,g=0;g<b;g++){var E=a[g];s.push(Ua(E,l));for(var p=0;p<m;p++){var h=d[p];0===g&&o.push(Object(O.a)({},La,{label:h.label,data:[],borderColor:Ia[p]}));var y=E[h.key];y>u&&(u=y),(null===v||y<v)&&(v=y),o[p].data.push(y)}}return Pa.scales.yAxes[0].ticks.suggestedMax=u,Pa.scales.yAxes[0].ticks.suggestedMin=v,Pa.onResize=Wa,{data:{labels:s,datasets:o},options:Pa,title:c,subtitle:i}}function Wa(e){e.resize()}t(342);var za="uua-data-container uua-chart-container",Ga=" uua-data-container--loading";var Ya=Object(i.b)(function(e){var a=e.usageData,t=e.filter,r=t.category===k||a===m,n=a===d;return{shouldHide:r,loading:n,chartConfig:r||n?null:xa(t,a)}})(function(e){var a,t=e.shouldHide,l=e.loading,s=e.chartConfig;if(t)return null;if(l)a=n.a.createElement($.a,{overlay:!0});else{var o=s.options,c=s.data,i=s.title,u=s.subtitle;a=n.a.createElement(r.Fragment,null,n.a.createElement("h4",{className:"uaa-chart-title"},i),n.a.createElement("h6",{className:"uaa-chart-subtitle"},u),n.a.createElement("div",{className:"uaa-chart-wrap"},n.a.createElement(Je.a,{data:c,options:o})))}var v=l?za+Ga:za;return n.a.createElement("div",{className:v},a)}),Ha=(t(343),"uua-data-container"),Ba=" uua-data-container--loading",Ja=function(e){var a=e.headers;return n.a.createElement("thead",null,n.a.createElement("tr",null,a.map(function(e,a){return n.a.createElement("th",{key:"h-".concat(a)},e)})))},Ka=function(e){var a=e.rows;return n.a.createElement("tbody",null,a.map(function(e,a){return n.a.createElement(Qa,{key:"row-".concat(a),cells:e})}))},Qa=function(e){var a=e.cells;return n.a.createElement("tr",null,a.map(function(e,a){return n.a.createElement("td",{key:"cell-".concat(a)},e)}))};function $a(e,a){var t=e.aggregationLevel,r=e.category,n=e.interval,l=r===T?ja[r][t]:ja[r];return{headers:l.map(function(e){return e.label}),rows:a.map(function(e){return l.map(function(a){return a.key===Ke.key?Ua(e,n):a.key===Oa.key?(t=e[a.key],Fa(new Date(t),Va.yyyymmdd)):e[a.key];var t})})}}var qa=Object(i.b)(function(e){var a=e.usageData,t=e.filter,r=a===m,n=a===d;return{error:r,loading:n,tableData:n||r?null:$a(t,a)}})(function(e){var a,t=e.error,r=e.loading,l=e.tableData;if(t)a=n.a.createElement(pe,{message:c.a.t("There was an error retrieving the usage analytics data")});else if(r)a=n.a.createElement($.a,{overlay:!0});else{var s=l.headers,o=l.rows;a=n.a.createElement("table",{className:"uaa-data-table"},n.a.createElement(Ja,{headers:s}),n.a.createElement(Ka,{rows:o}))}var i=r?Ha+Ba:Ha;return n.a.createElement("div",{className:i},a)}),Xa=function(e){function a(){return Object(H.a)(this,a),Object(J.a)(this,Object(K.a)(a).apply(this,arguments))}return Object(Q.a)(a,e),Object(B.a)(a,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){var e=this.props.appStatus;return e===d?n.a.createElement($.a,{overlay:!0,size:"large"}):e===m?n.a.createElement(pe,{message:c.a.t("Error loading application.")}):n.a.createElement("main",{className:"uaa-container"},n.a.createElement(Be,null),n.a.createElement("section",{className:"uaa-content"},n.a.createElement(Ya,null),n.a.createElement(qa,null)))}}]),a}(r.Component),Za=Object(i.b)(function(e){return{appStatus:e.appStatus}},{initApp:function(){return function(){var e=Object(Z.a)(X.a.mark(function e(a,t){var r;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve(t());case 3:r=e.sent,a(Ee(g,r)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a(Ee(E,e.t0));case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}()}})(Xa),et=(t(344),t(350)),at=t(351),tt=t(69),rt="..";var nt=function(){return n.a.createElement(tt.a,{baseUrl:rt,apiVersion:""},n.a.createElement(i.a,{store:Y},n.a.createElement(et.a,null),n.a.createElement(at.a,{appName:c.a.t("Usage Analytics")}),n.a.createElement(Za,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(nt,null),document.getElementById("uaa-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.2945dcda.chunk.js.map