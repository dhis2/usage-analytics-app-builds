(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e){e.exports={"Usage Analytics":"",Values:"","Please use the format yyyy-mm-dd":"","End date is before start date":"","Start date is after end date":"","Start Date":"","End date":"",Category:"",Interval:"","Aggregation Level":"","Chart Type":"","Event Type":"","Page Size":"","Sort Order":"","There was an error retrieving the usage analytics data":"","Error loading application.":"",Sum:"",Average:"","Favorite views":"","Number of times users looked at analysis favorites":"","Favorites saved":"","Number of analysis favorites created by users":"",Users:"","Number of users in the system":"","Top favorites":"","Data values":"","Number of data values saved in the system":"",All:"",Total:"",Chart:"",Map:"","Report table":"","Event report":"","Event chart":"",Dashboard:"","Data set report":"",Day:"",Week:"",Month:"",Year:"",Date:"","Pivot Table":"","Event Report":"","Event Chart":"","Data Set Report":"","Average Map":"","Average Chart":"","Average Pivot Table":"","Average Event Report":"","Average Event Chart":"","Average Dashboard":"",Maps:"",Charts:"","Pivot Tables":"","Event Reports":"","Event Charts":"",Dashboards:"",Indicators:"","Active Users":"","Total Users":"",Position:"",Name:"",Views:"",ID:"",Created:"","Data Values":"",Ascending:"",Descending:""}},143:function(e,a,t){e.exports=t(341)},232:function(e,a,t){},239:function(e,a,t){},240:function(e,a,t){},245:function(e,a,t){},246:function(e,a,t){},338:function(e,a,t){},339:function(e,a,t){},341:function(e,a,t){"use strict";t.r(a);t(144),t(150),t(151),t(152),t(108),t(160),t(162),t(164),t(165),t(166),t(167),t(168),t(170),t(172),t(173),t(174),t(175),t(176),t(177),t(178),t(179),t(180),t(181),t(182),t(183),t(184),t(185),t(186),t(187),t(188),t(189);var n=t(0),r=t.n(n),l=t(50),o=t.n(l),s=(t(232),t(3)),c=t.n(s),i=t(10),u=t(38),v=t(137),d=(t(237),"LOADING"),b="READY",m="ERROR",E="APP_LOAD_SUCCESS",p="APP_LOAD_ERROR",g="USAGE_DATA_REQUESTED",f="USAGE_DATA_RECEIVED",h="USAGE_DATA_ERRORED",y="FILTER_UPDATED";var D,O=t(6),A=t(31),k="FAVORITE_VIEWS",T="TOP_FAVORITES",w=(D={},Object(O.a)(D,k,{value:k,label:c.a.t("Favorite views"),subtitle:c.a.t("Number of times users looked at analysis favorites")}),Object(O.a)(D,"FAVORITES_SAVED",{value:"FAVORITES_SAVED",label:c.a.t("Favorites saved"),subtitle:c.a.t("Number of analysis favorites created by users")}),Object(O.a)(D,"USERS",{value:"USERS",label:c.a.t("Users"),subtitle:c.a.t("Number of users in the system")}),Object(O.a)(D,T,{value:T,label:c.a.t("Top favorites")}),Object(O.a)(D,"DATA_VALUES",{value:"DATA_VALUES",label:c.a.t("Data values"),subtitle:c.a.t("Number of data values saved in the system")}),D),S=[w.FAVORITE_VIEWS,w.FAVORITES_SAVED,w.USERS,w.TOP_FAVORITES,w.DATA_VALUES],j="DAY",C="WEEK",R="MONTH",V="YEAR",_=[{value:j,label:c.a.t("Day")},{value:C,label:c.a.t("Week")},{value:R,label:c.a.t("Month")},{value:V,label:c.a.t("Year")}],N="SUM",U=[{value:N,label:c.a.t("Sum")},{value:"AVERAGE",label:c.a.t("Average")}],F="ALL",I=[{value:F,label:c.a.t("All")},{value:"TOTAL",label:c.a.t("Total")}],L="CHART_VIEW",P=[{value:L,label:c.a.t("Chart")},{value:"MAP_VIEW",label:c.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:c.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:c.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:c.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:c.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:c.a.t("Data set report")}],M="ASC",x=[{value:M,label:c.a.t("Ascending")},{value:"DESC",label:c.a.t("Descending")}];function W(e){var a=e.getFullYear(),t=""+(e.getMonth()+1),n=""+e.getDate();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[a,t,n].join("-")}var z=[v.a];var G=Object(u.c)({appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case E:return b;case p:return m;default:return e}},locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case E:return n.locale;default:return e}},usageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case g:return d;case E:return n.usageData;case f:return n;case h:return m;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var a=new Date(e.valueOf());return a.setMonth(a.getMonth()-4),{category:k,startDate:W(a),endDate:W(e),interval:C,aggregationLevel:N,chartType:F,eventType:L,pageSize:25,sortOrder:M}}(new Date),a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case y:return Object(A.a)({},e,Object(O.a)({},n.key,n.value));default:return e}}}),H=Object(u.d)(G,u.a.apply(void 0,z)),Y=t(11),B=t(16),J=t(13),K=t(9),Q=t(12),$=t(350),q=t(18),X=t.n(q),Z=t(32),ee=t(68),ae=t(97),te=t.n(ae),ne=t(138);te.a.locale("en"),c.a.addResources("en","usage-analytics-app",ne),c.a.setDefaultNamespace("usage-analytics-app"),c.a.changeLanguage("en");var re=c.a;var le="".concat("..","/api"),oe={method:"GET",credentials:"include"};function se(e){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe;return e?fetch("".concat(le,"/").concat(e),a).then(function(e){if(e.ok)return e;throw new Error(e.statusText)}):Promise.reject(new Error("A path must be passed"))}(e).then(function(e){return e.json()}).then(function(e){if("ERROR"===e.status)throw new Error(e.message);return e})}function ce(e){return e.category===T?function(e){var a=e.eventType,t=e.pageSize,n=e.sortOrder,r="eventType=".concat(a,"&pageSize=").concat(t,"&sortOrder=").concat(n,"&_=").concat(Date.now());return se("dataStatistics/favorites?".concat(r))}(e):function(e){var a=e.startDate,t=e.endDate,n=e.interval,r="startDate=".concat(a,"&endDate=").concat(t,"&interval=").concat(n,"&_=").concat(Date.now());return se("dataStatistics?".concat(r))}(e)}function ie(e){var a=e.filter;return Promise.all([se("userSettings").then(function(e){return e.keyUiLocale}),ce(a)]).then(function(e){var a=Object(ee.a)(e,2),t=a[0],n=a[1];return function(e){re.changeLanguage(e)}(t),{usageData:n,locale:t}})}var ue=function(e){return function(a,t){return a(ve(e.target.name,e.target.value)),de(t().filter,a)}},ve=function(e,a){return me(y,{key:e,value:a})};function de(e,a){return be.apply(this,arguments)}function be(){return(be=Object(Z.a)(X.a.mark(function e(a,t){var n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(me(g)),e.prev=1,e.next=4,ce(a);case 4:n=e.sent,t(me(f,n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t(me(h,e.t0));case 12:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}function me(e,a){return{type:e,payload:a}}t(239);var Ee=function(e){var a=e.message;return r.a.createElement("div",{className:"uaa-error"},a)},pe=t(349);t(240);var ge,fe=[{value:5,label:"5"},{value:10,label:"10"},{value:15,label:"15"},{value:20,label:"20"},{value:25,label:"25"}],he=(ge=pe.a,function(e){return r.a.createElement("div",{className:"uaa-fieldwrap"},r.a.createElement(ge,e))}),ye=t(142),De=t(7),Oe=t(139),Ae=t.n(Oe),ke=(t(245),c.a.t("Please use the format yyyy-mm-dd")),Te=c.a.t("End date is before start date"),we=c.a.t("Start date is after end date"),Se=function(e){function a(e){var t;return Object(Y.a)(this,a),(t=Object(J.a)(this,Object(K.a)(a).call(this,e))).state={startDateError:null,endDateError:null},t.onStartDateChange=t.onStartDateChange.bind(Object(De.a)(t)),t.onEndDateChange=t.onEndDateChange.bind(Object(De.a)(t)),t.updateUsageData=Ae()(e.updateUsageData,250),t}return Object(Q.a)(a,e),Object(B.a)(a,[{key:"onStartDateChange",value:function(e){this.onChange("startDate",e.target.value)}},{key:"onEndDateChange",value:function(e){this.onChange("endDate",e.target.value)}},{key:"onChange",value:function(e,a){var t,n=this.props,r=n.updateFilter,l=(n.updateUsageData,Object(ye.a)(n,["updateFilter","updateUsageData"])),o="".concat(e,"Error"),s="".concat("startDate"===e?"endDate":"startDate","Error"),c=this.getError(Object(A.a)({},l,Object(O.a)({},e,a)),e),i=this.state[s]===ke?ke:null;this.state[o]!==c&&this.setState((t={},Object(O.a)(t,o,c),Object(O.a)(t,s,i),t));r(e,a),c||this.updateUsageData()}},{key:"getError",value:function(e,a){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(e[a])?e.endDate<e.startDate?"startDate"===a?we:Te:null:ke}},{key:"render",value:function(){var e=this.props,a=e.startDate,t=e.endDate,n=this.state,l=n.startDateError,o=n.endDateError;return r.a.createElement("div",{className:"uaa-date-range"},r.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},r.a.createElement("label",null,c.a.t("Start Date")),r.a.createElement("input",{className:"startDate",type:"date",value:a,onChange:this.onStartDateChange}),l&&r.a.createElement("span",{className:"uaa-date-input-error ".concat("startDate")},l)),r.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},r.a.createElement("label",null,c.a.t("End date")),r.a.createElement("input",{className:"endDate",type:"date",value:t,onChange:this.onEndDateChange}),o&&r.a.createElement("span",{className:"uaa-date-input-error ".concat("endDate")},o)))}}]),a}(n.Component),je=Object(i.b)(Ie("category"),{onChange:function(e){return function(a,t){var n=t().filter,r=n.category;if(a(ve(e.target.name,e.target.value)),function(e,a){return e!==a&&(a===T&&e!==T||e===T&&a!==T)}(r,e.target.value))return de(Object(A.a)({},n,{category:e.target.value}),a)}}})(function(e){return r.a.createElement(he,Object.assign({},e,{name:"category",label:c.a.t("Category"),kind:"filled"}),S.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Ce=Object(i.b)(function(e){return{startDate:e.filter.startDate,endDate:e.filter.endDate}},{updateFilter:ve,updateUsageData:function(){return function(e,a){return de(a().filter,e)}}})(Se),Re=Object(i.b)(Ie("interval"),{onChange:ue})(function(e){return r.a.createElement(he,Object.assign({},e,{name:"interval",label:c.a.t("Interval"),kind:"filled"}),_.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Ve=Object(i.b)(Ie("aggregationLevel"),{onChange:ve})(function(e){return r.a.createElement(he,Object.assign({},e,{name:"aggregationLevel",label:c.a.t("Aggregation Level"),kind:"filled"}),U.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),_e=Object(i.b)(Ie("chartType"),{onChange:ve})(function(e){return r.a.createElement(he,Object.assign({},e,{name:"chartType",label:c.a.t("Chart Type"),kind:"filled"}),I.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Ne=Object(i.b)(Ie("eventType"),{onChange:ue})(function(e){return r.a.createElement(he,Object.assign({},e,{name:"eventType",label:c.a.t("Event Type"),kind:"filled"}),P.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Ue=Object(i.b)(Ie("pageSize"),{onChange:ue})(function(e){return r.a.createElement(he,Object.assign({},e,{name:"pageSize",label:c.a.t("Page Size"),kind:"filled"}),fe.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))}),Fe=Object(i.b)(Ie("sortOrder"),{onChange:ue})(function(e){return r.a.createElement(he,Object.assign({},e,{name:"sortOrder",label:c.a.t("Sort Order"),kind:"filled"}),x.map(function(e){return r.a.createElement("option",{value:e.value},e.label)}))});function Ie(e){return function(a){return{value:a.filter[e]}}}t(246);var Le,Pe,Me,xe,We,ze,Ge=Object(i.b)(function(e){var a=e.filter.category;return{showDateFields:a!==T,showTopFavoritesFields:a===T,showFavoriteViewsFields:a===k}})(function(e){var a=e.showDateFields,t=e.showFavoriteViewsFields,l=e.showTopFavoritesFields;return r.a.createElement("aside",{className:"uaa-filter-sidebar"},r.a.createElement("h1",{className:"uaa-app-header"},c.a.t("Usage Analytics")),r.a.createElement(je,null),a&&r.a.createElement(n.Fragment,null,r.a.createElement(Ce,null),r.a.createElement(Re,null)),t&&r.a.createElement(n.Fragment,null,r.a.createElement(Ve,null),r.a.createElement(_e,null)),l&&r.a.createElement(n.Fragment,null,r.a.createElement(Ne,null),r.a.createElement(Ue,null),r.a.createElement(Fe,null)))}),He=t(140),Ye={key:"date",label:c.a.t("Date")},Be={key:"mapViews",label:c.a.t("Map")},Je={key:"chartViews",label:c.a.t("Chart")},Ke={key:"pivotTableViews",label:c.a.t("Pivot Table")},Qe={key:"eventReportViews",label:c.a.t("Event Report")},$e={key:"eventChartViews",label:c.a.t("Event Chart")},qe={key:"dashboardViews",label:c.a.t("Dashboard")},Xe={key:"dataSetReportViews",label:c.a.t("Data Set Report")},Ze={key:"totalViews",label:c.a.t("Total")},ea={key:"averageMapViews",label:c.a.t("Average Map")},aa={key:"averageChartViews",label:c.a.t("Average Chart")},ta={key:"averagePivotTableViews",label:c.a.t("Average Pivot Table")},na={key:"averageEventReportViews",label:c.a.t("Average Event Report")},ra={key:"averageEventChartViews",label:c.a.t("Average Event Chart")},la={key:"averageDashboardViews",label:c.a.t("Average Dashboard")},oa={key:"averageViews",label:c.a.t("Average")},sa={key:"savedMaps",label:c.a.t("Maps")},ca={key:"savedCharts",label:c.a.t("Charts")},ia={key:"savedPivotTables",label:c.a.t("Pivot Tables")},ua={key:"savedEventReports",label:c.a.t("Event Reports")},va={key:"savedEventCharts",label:c.a.t("Event Charts")},da={key:"savedDashboards",label:c.a.t("Dashboards")},ba={key:"savedIndicators",label:c.a.t("Indicators")},ma={key:"activeUsers",label:c.a.t("Active Users")},Ea={key:"users",label:c.a.t("Total Users")},pa={key:"position",label:c.a.t("Position")},ga={key:"name",label:c.a.t("Name")},fa={key:"views",label:c.a.t("Views")},ha={key:"id",label:c.a.t("ID")},ya={key:"created",label:c.a.t("Created")},Da={key:"savedDataValues",label:c.a.t("Data Values")},Oa=[Be,Je,Ke,Qe,$e,qe,Xe],Aa=[ea,aa,ta,na,ra,la],ka=[sa,ca,ia,ua,va,da,ba],Ta=[ma,Ea],wa=(Pe={},Object(O.a)(Pe,k,(Le={},Object(O.a)(Le,N,[Ye].concat(Oa,[Ze])),Object(O.a)(Le,"AVERAGE",[Ye].concat(Aa,[oa])),Le)),Object(O.a)(Pe,"FAVORITES_SAVED",[Ye].concat(ka)),Object(O.a)(Pe,"USERS",[Ye].concat(Ta)),Object(O.a)(Pe,T,[pa,ga,fa,ha,ya]),Object(O.a)(Pe,"DATA_VALUES",[Ye,Da]),Pe),Sa=(ze={},Object(O.a)(ze,k,(We={},Object(O.a)(We,N,(Me={},Object(O.a)(Me,F,Oa),Object(O.a)(Me,"TOTAL",[Ze]),Me)),Object(O.a)(We,"AVERAGE",(xe={},Object(O.a)(xe,F,Aa),Object(O.a)(xe,"TOTAL",[oa]),xe)),We)),Object(O.a)(ze,"FAVORITES_SAVED",ka),Object(O.a)(ze,"USERS",Ta),Object(O.a)(ze,"DATA_VALUES",[Da]),ze),ja={yyyymmdd:{day:"numeric",month:"short",year:"numeric"},yyyymm:{month:"short",year:"numeric"}},Ca=c.a.t("Week");function Ra(e,a){var t=e.year,n=e.month,r=e.week,l=e.day;switch(a){case V:return t;case R:return Va(t,n);case C:return"".concat(Ca," ").concat(r," / ").concat(t);case j:default:return Va(t,n,l)}}function Va(e,a,t){return _a(t?new Date(e,a-1,t):new Date(e,a-1),t?ja.yyyymmdd:ja.yyyymm)}function _a(e,a){var t=H.getState().locale||"en";return new Intl.DateTimeFormat(t,a).format(e)}var Na=["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC"],Ua={animation:{duration:180},legend:{position:"bottom"},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"nearest"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},ticks:{maxRotation:45,minRotation:45}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:c.a.t("Values")},ticks:{suggestedMin:0,precision:0}}]}},Fa={backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0},Ia=1;function La(e,a){for(var t=e.aggregationLevel,n=e.category,r=e.chartType,l=e.interval,o=[],s=[],c=w[n].label,i=w[n].subtitle,u=Ia,v=null,d=n===k?Sa[n][t][r]:Sa[n],b=a.length,m=d.length,E=0;E<b;E++){var p=a[E];o.push(Ra(p,l));for(var g=0;g<m;g++){var f=d[g];0===E&&s.push(Object(A.a)({},Fa,{label:f.label,data:[],borderColor:Na[g]}));var h=p[f.key];h>u&&(u=h),(null===v||h<v)&&(v=h),s[g].data.push(h)}}return Ua.scales.yAxes[0].ticks.suggestedMax=u,Ua.scales.yAxes[0].ticks.suggestedMin=v,Ua.onResize=Pa,{data:{labels:o,datasets:s},options:Ua,title:c,subtitle:i}}function Pa(e){e.resize()}t(338);var Ma="uua-data-container uua-chart-container",xa=" uua-data-container--loading";var Wa=Object(i.b)(function(e){var a=e.usageData,t=e.filter,n=t.category===T||a===m,r=a===d;return{shouldHide:n,loading:r,chartConfig:n||r?null:La(t,a)}})(function(e){var a,t=e.shouldHide,l=e.loading,o=e.chartConfig;if(t)return null;if(l)a=r.a.createElement($.a,{overlay:!0});else{var s=o.options,c=o.data,i=o.title,u=o.subtitle;a=r.a.createElement(n.Fragment,null,r.a.createElement("h4",{className:"uaa-chart-title"},i),r.a.createElement("h6",{className:"uaa-chart-subtitle"},u),r.a.createElement("div",{className:"uaa-chart-wrap"},r.a.createElement(He.a,{data:c,options:s})))}var v=l?Ma+xa:Ma;return r.a.createElement("div",{className:v},a)}),za=(t(339),"uua-data-container"),Ga=" uua-data-container--loading",Ha=function(e){var a=e.headers;return r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e,a){return r.a.createElement("th",{key:"h-".concat(a)},e)})))},Ya=function(e){var a=e.rows;return r.a.createElement("tbody",null,a.map(function(e,a){return r.a.createElement(Ba,{key:"row-".concat(a),cells:e})}))},Ba=function(e){var a=e.cells;return r.a.createElement("tr",null,a.map(function(e,a){return r.a.createElement("td",{key:"cell-".concat(a)},e)}))};function Ja(e,a){var t=e.aggregationLevel,n=e.category,r=e.interval,l=n===k?wa[n][t]:wa[n];return{headers:l.map(function(e){return e.label}),rows:a.map(function(e){return l.map(function(a){return a.key===Ye.key?Ra(e,r):a.key===ya.key?(t=e[a.key],_a(new Date(t),ja.yyyymmdd)):e[a.key];var t})})}}var Ka=Object(i.b)(function(e){var a=e.usageData,t=e.filter,n=a===m,r=a===d;return{error:n,loading:r,tableData:r||n?null:Ja(t,a)}})(function(e){var a,t=e.error,n=e.loading,l=e.tableData;if(t)a=r.a.createElement(Ee,{message:c.a.t("There was an error retrieving the usage analytics data")});else if(n)a=r.a.createElement($.a,{overlay:!0});else{var o=l.headers,s=l.rows;a=r.a.createElement("table",{className:"uaa-data-table"},r.a.createElement(Ha,{headers:o}),r.a.createElement(Ya,{rows:s}))}var i=n?za+Ga:za;return r.a.createElement("div",{className:i},a)}),Qa=function(e){function a(){return Object(Y.a)(this,a),Object(J.a)(this,Object(K.a)(a).apply(this,arguments))}return Object(Q.a)(a,e),Object(B.a)(a,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){var e=this.props.appStatus;return e===d?r.a.createElement($.a,{overlay:!0,size:"large"}):e===m?r.a.createElement(Ee,{message:c.a.t("Error loading application.")}):r.a.createElement("main",{className:"uaa-container"},r.a.createElement(Ge,null),r.a.createElement("section",{className:"uaa-content"},r.a.createElement(Wa,null),r.a.createElement(Ka,null)))}}]),a}(n.Component),$a=Object(i.b)(function(e){return{appStatus:e.appStatus}},{initApp:function(){return function(){var e=Object(Z.a)(X.a.mark(function e(a,t){var n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie(t());case 3:n=e.sent,a(me(E,n)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a(me(p,e.t0));case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}()}})(Qa),qa=(t(340),t(347)),Xa=t(348),Za=t(67),et="..";var at=function(){return r.a.createElement(Za.a,{baseUrl:et,apiVersion:""},r.a.createElement(i.a,{store:H},r.a.createElement(qa.a,null),r.a.createElement(Xa.a,{appName:c.a.t("Usage Analytics")}),r.a.createElement($a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(at,null),document.getElementById("uaa-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,1,2]]]);
//# sourceMappingURL=main.9cafa6c5.chunk.js.map