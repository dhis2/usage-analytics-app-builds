(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e){e.exports={"Usage Analytics":"",Values:"","Please use the format yyyy-mm-dd":"","End date is before start date":"","Start date is after end date":"","Start Date":"","End date":"",Category:"",Interval:"","Aggregation Level":"","Chart Type":"","Event Type":"","Page Size":"","Sort Order":"","There was an error retrieving the usage analytics data":"","Error loading application.":"",Sum:"",Average:"","Favorite views":"","Number of times users looked at analysis favorites":"","Favorites saved":"","Number of analysis favorites created by users":"",Users:"","Number of users in the system":"","Top favorites":"","Data values":"","Number of data values saved in the system":"",All:"",Total:"",Chart:"",Map:"","Report table":"","Event report":"","Event chart":"",Dashboard:"","Data set report":"",Day:"",Week:"",Month:"",Year:"",Date:"","Pivot Table":"","Event Report":"","Event Chart":"","Data Set Report":"","Average Map":"","Average Chart":"","Average Pivot Table":"","Average Event Report":"","Average Event Chart":"","Average Dashboard":"",Maps:"",Charts:"","Pivot Tables":"","Event Reports":"","Event Charts":"",Dashboards:"",Indicators:"","Active Users":"","Total Users":"",Position:"",Name:"",Views:"",ID:"",Created:"","Data Values":"",Ascending:"",Descending:""}},141:function(e){e.exports={"Usage Analytics":"",Values:"","Please use the format yyyy-mm-dd":"","End date is before start date":"","Start date is after end date":"","Start Date":"","End date":"Date de fin",Category:"Cat\xe9gorie",Interval:"","Aggregation Level":"","Chart Type":"","Event Type":"","Page Size":"","Sort Order":"","There was an error retrieving the usage analytics data":"","Error loading application.":"",Sum:"Somme",Average:"Moyenne","Favorite views":"","Number of times users looked at analysis favorites":"","Favorites saved":"","Number of analysis favorites created by users":"",Users:"Utilisateurs","Number of users in the system":"","Top favorites":"","Data values":"Valeurs de donn\xe9es","Number of data values saved in the system":"",All:"Tout",Total:"Total",Chart:"Graphique",Map:"Carte","Report table":"","Event report":"","Event chart":"",Dashboard:"Tableau de bord","Data set report":"",Day:"",Week:"Semaine",Month:"Mois",Year:"Ann\xe9e",Date:"Date","Pivot Table":"Tableau crois\xe9 dynamique","Event Report":"","Event Chart":"","Data Set Report":"Rapport bas\xe9 sur le formulaire","Average Map":"","Average Chart":"","Average Pivot Table":"","Average Event Report":"","Average Event Chart":"","Average Dashboard":"",Maps:"Cartes",Charts:"Graphiques","Pivot Tables":"Les Tableaux Crois\xe9s Dynamiques","Event Reports":"Rapports d'\xe9v\xe8nements","Event Charts":"",Dashboards:"Tableaux de bord",Indicators:"Indicateurs","Active Users":"","Total Users":"",Position:"",Name:"Nom",Views:"Vues",ID:"Id",Created:"Cr\xe9\xe9 le","Data Values":"",Ascending:"",Descending:""}},146:function(e,a,t){e.exports=t(345)},235:function(e,a,t){},243:function(e,a,t){},244:function(e,a,t){},249:function(e,a,t){},250:function(e,a,t){},342:function(e,a,t){},343:function(e,a,t){},345:function(e,a,t){"use strict";t.r(a);t(147),t(153),t(154),t(155),t(109),t(163),t(165),t(167),t(168),t(169),t(170),t(171),t(173),t(175),t(176),t(177),t(178),t(179),t(180),t(181),t(182),t(183),t(184),t(185),t(186),t(187),t(188),t(189),t(190),t(191),t(192);var r=t(0),n=t.n(r),l=t(67),s=t.n(l),o=(t(235),t(4)),i=t.n(o),c=t(10),u=t(39),v=t(139),d=(t(240),"LOADING"),b="READY",m="ERROR",p="APP_LOAD_SUCCESS",g="APP_LOAD_ERROR",E="USAGE_DATA_REQUESTED",h="USAGE_DATA_RECEIVED",y="USAGE_DATA_ERRORED",f="FILTER_UPDATED";var D,A=t(5),O=t(28),T="FAVORITE_VIEWS",C="TOP_FAVORITES",S=(D={},Object(A.a)(D,T,{value:T,label:i.a.t("Favorite views"),subtitle:i.a.t("Number of times users looked at analysis favorites")}),Object(A.a)(D,"FAVORITES_SAVED",{value:"FAVORITES_SAVED",label:i.a.t("Favorites saved"),subtitle:i.a.t("Number of analysis favorites created by users")}),Object(A.a)(D,"USERS",{value:"USERS",label:i.a.t("Users"),subtitle:i.a.t("Number of users in the system")}),Object(A.a)(D,C,{value:C,label:i.a.t("Top favorites")}),Object(A.a)(D,"DATA_VALUES",{value:"DATA_VALUES",label:i.a.t("Data values"),subtitle:i.a.t("Number of data values saved in the system")}),D),k=[S.FAVORITE_VIEWS,S.FAVORITES_SAVED,S.USERS,S.TOP_FAVORITES,S.DATA_VALUES],w="DAY",j="WEEK",R="MONTH",V="YEAR",N=[{value:w,label:i.a.t("Day")},{value:j,label:i.a.t("Week")},{value:R,label:i.a.t("Month")},{value:V,label:i.a.t("Year")}],U="SUM",_=[{value:U,label:i.a.t("Sum")},{value:"AVERAGE",label:i.a.t("Average")}],F="ALL",I=[{value:F,label:i.a.t("All")},{value:"TOTAL",label:i.a.t("Total")}],P="CHART_VIEW",L=[{value:P,label:i.a.t("Chart")},{value:"MAP_VIEW",label:i.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:i.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:i.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:i.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:i.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:i.a.t("Data set report")}],M="ASC",x=[{value:M,label:i.a.t("Ascending")},{value:"DESC",label:i.a.t("Descending")}];function W(e){var a=e.getFullYear(),t=""+(e.getMonth()+1),r=""+e.getDate();return t.length<2&&(t="0"+t),r.length<2&&(r="0"+r),[a,t,r].join("-")}var z=[v.a];var G=Object(u.c)({appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case p:return b;case g:return m;default:return e}},locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case p:return r.locale;default:return e}},usageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case E:return d;case p:return r.usageData;case h:return r;case y:return m;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var a=new Date(e.valueOf());return a.setMonth(a.getMonth()-4),{category:T,startDate:W(a),endDate:W(e),interval:j,aggregationLevel:U,chartType:F,eventType:P,pageSize:25,sortOrder:M}}(new Date),a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case f:return Object(O.a)({},e,Object(A.a)({},r.key,r.value));default:return e}}}),Y=Object(u.d)(G,u.a.apply(void 0,z)),H=t(11),q=t(16),B=t(13),J=t(9),K=t(12),Q=t(353),$=t(18),X=t.n($),Z=t(33),ee=t(70),ae=t(68),te=t.n(ae),re=(t(242),t(140)),ne=t(141),le="usage-analytics-app";te.a.locale("en"),i.a.addResources("en",le,re),i.a.addResources("fr",le,ne),i.a.setDefaultNamespace(le),i.a.changeLanguage("en");var se=i.a;var oe="".concat("..","/api"),ie={method:"GET",credentials:"include"};function ce(e){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ie;return e?fetch("".concat(oe,"/").concat(e),a).then(function(e){if(e.ok)return e;throw new Error(e.statusText)}):Promise.reject(new Error("A path must be passed"))}(e).then(function(e){return e.json()}).then(function(e){if("ERROR"===e.status)throw new Error(e.message);return e})}function ue(e){return e.category===C?function(e){var a=e.eventType,t=e.pageSize,r=e.sortOrder,n="eventType=".concat(a,"&pageSize=").concat(t,"&sortOrder=").concat(r,"&_=").concat(Date.now());return ce("dataStatistics/favorites?".concat(n))}(e):function(e){var a=e.startDate,t=e.endDate,r=e.interval,n="startDate=".concat(a,"&endDate=").concat(t,"&interval=").concat(r,"&_=").concat(Date.now());return ce("dataStatistics?".concat(n))}(e)}function ve(e){var a=e.filter;return Promise.all([ce("userSettings").then(function(e){return e.keyUiLocale}),ue(a)]).then(function(e){var a=Object(ee.a)(e,2),t=a[0],r=a[1];return function(e){se.changeLanguage(e)}(t),{usageData:r,locale:t}})}var de=function(e){return function(a,t){return a(be(e.target.name,e.target.value)),me(t().filter,a)}},be=function(e,a){return ge(f,{key:e,value:a})};function me(e,a){return pe.apply(this,arguments)}function pe(){return(pe=Object(Z.a)(X.a.mark(function e(a,t){var r;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ge(E)),e.prev=1,e.next=4,ue(a);case 4:r=e.sent,t(ge(h,r)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t(ge(y,e.t0));case 12:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}function ge(e,a){return{type:e,payload:a}}t(243);var Ee=function(e){var a=e.message;return n.a.createElement("div",{className:"uaa-error"},a)},he=t(352);t(244);var ye,fe=[{value:5,label:"5"},{value:10,label:"10"},{value:15,label:"15"},{value:20,label:"20"},{value:25,label:"25"}],De=function(e){return Object(O.a)({},e,Object(A.a)({},"filled",!0))},Ae=(ye=he.a,function(e){return n.a.createElement("div",{className:"uaa-fieldwrap"},n.a.createElement(ye,e))}),Oe=t(145),Te=t(7),Ce=t(142),Se=t.n(Ce),ke=(t(249),i.a.t("Please use the format yyyy-mm-dd")),we=i.a.t("End date is before start date"),je=i.a.t("Start date is after end date"),Re=function(e){function a(e){var t;return Object(H.a)(this,a),(t=Object(B.a)(this,Object(J.a)(a).call(this,e))).state={startDateError:null,endDateError:null},t.onStartDateChange=t.onStartDateChange.bind(Object(Te.a)(t)),t.onEndDateChange=t.onEndDateChange.bind(Object(Te.a)(t)),t.updateUsageData=Se()(e.updateUsageData,250),t}return Object(K.a)(a,e),Object(q.a)(a,[{key:"onStartDateChange",value:function(e){this.onChange("startDate",e.target.value)}},{key:"onEndDateChange",value:function(e){this.onChange("endDate",e.target.value)}},{key:"onChange",value:function(e,a){var t,r=this.props,n=r.updateFilter,l=(r.updateUsageData,Object(Oe.a)(r,["updateFilter","updateUsageData"])),s="".concat(e,"Error"),o="".concat("startDate"===e?"endDate":"startDate","Error"),i=this.getError(Object(O.a)({},l,Object(A.a)({},e,a)),e),c=this.state[o]===ke?ke:null;this.state[s]!==i&&this.setState((t={},Object(A.a)(t,s,i),Object(A.a)(t,o,c),t));n(e,a),i||this.updateUsageData()}},{key:"getError",value:function(e,a){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(e[a])?e.endDate<e.startDate?"startDate"===a?je:we:null:ke}},{key:"render",value:function(){var e=this.props,a=e.startDate,t=e.endDate,r=this.state,l=r.startDateError,s=r.endDateError;return n.a.createElement("div",{className:"uaa-date-range"},n.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},n.a.createElement("label",null,i.a.t("Start Date")),n.a.createElement("input",{className:"startDate",type:"date",value:a,onChange:this.onStartDateChange}),l&&n.a.createElement("span",{className:"uaa-date-input-error ".concat("startDate")},l)),n.a.createElement("div",{className:"uaa-date-field uaa-fieldwrap"},n.a.createElement("label",null,i.a.t("End date")),n.a.createElement("input",{className:"endDate",type:"date",value:t,onChange:this.onEndDateChange}),s&&n.a.createElement("span",{className:"uaa-date-input-error ".concat("endDate")},s)))}}]),a}(r.Component),Ve=Object(c.b)(Me("category"),{onChange:function(e){return function(a,t){var r=t().filter,n=r.category;if(a(be(e.target.name,e.target.value)),function(e,a){return e!==a&&(a===C&&e!==C||e===C&&a!==C)}(n,e.target.value))return me(Object(O.a)({},r,{category:e.target.value}),a)}}})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"category",label:i.a.t("Category")}),k.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Ne=Object(c.b)(function(e){return{startDate:e.filter.startDate,endDate:e.filter.endDate}},{updateFilter:be,updateUsageData:function(){return function(e,a){return me(a().filter,e)}}})(Re),Ue=Object(c.b)(Me("interval"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"interval",label:i.a.t("Interval")}),N.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),_e=Object(c.b)(Me("aggregationLevel"),{onChange:be})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"aggregationLevel",label:i.a.t("Aggregation Level")}),_.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Fe=Object(c.b)(Me("chartType"),{onChange:be})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"chartType",label:i.a.t("Chart Type")}),I.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Ie=Object(c.b)(Me("eventType"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"eventType",label:i.a.t("Event Type")}),L.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Pe=Object(c.b)(Me("pageSize"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"pageSize",label:i.a.t("Page Size")}),fe.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))}),Le=Object(c.b)(Me("sortOrder"),{onChange:de})(function(e){return n.a.createElement(Ae,Object.assign({},De(e),{name:"sortOrder",label:i.a.t("Sort Order")}),x.map(function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))});function Me(e){return function(a){return{value:a.filter[e]}}}t(250);var xe,We,ze,Ge,Ye,He,qe=Object(c.b)(function(e){var a=e.filter.category;return{showDateFields:a!==C,showTopFavoritesFields:a===C,showFavoriteViewsFields:a===T}})(function(e){var a=e.showDateFields,t=e.showFavoriteViewsFields,l=e.showTopFavoritesFields;return n.a.createElement("aside",{className:"uaa-filter-sidebar"},n.a.createElement("h1",{className:"uaa-app-header"},i.a.t("Usage Analytics")),n.a.createElement(Ve,null),a&&n.a.createElement(r.Fragment,null,n.a.createElement(Ne,null),n.a.createElement(Ue,null)),t&&n.a.createElement(r.Fragment,null,n.a.createElement(_e,null),n.a.createElement(Fe,null)),l&&n.a.createElement(r.Fragment,null,n.a.createElement(Ie,null),n.a.createElement(Pe,null),n.a.createElement(Le,null)))}),Be=t(143),Je={key:"date",label:i.a.t("Date")},Ke={key:"mapViews",label:i.a.t("Map")},Qe={key:"chartViews",label:i.a.t("Chart")},$e={key:"pivotTableViews",label:i.a.t("Pivot Table")},Xe={key:"eventReportViews",label:i.a.t("Event Report")},Ze={key:"eventChartViews",label:i.a.t("Event Chart")},ea={key:"dashboardViews",label:i.a.t("Dashboard")},aa={key:"dataSetReportViews",label:i.a.t("Data Set Report")},ta={key:"totalViews",label:i.a.t("Total")},ra={key:"averageMapViews",label:i.a.t("Average Map")},na={key:"averageChartViews",label:i.a.t("Average Chart")},la={key:"averagePivotTableViews",label:i.a.t("Average Pivot Table")},sa={key:"averageEventReportViews",label:i.a.t("Average Event Report")},oa={key:"averageEventChartViews",label:i.a.t("Average Event Chart")},ia={key:"averageDashboardViews",label:i.a.t("Average Dashboard")},ca={key:"averageViews",label:i.a.t("Average")},ua={key:"savedMaps",label:i.a.t("Maps")},va={key:"savedCharts",label:i.a.t("Charts")},da={key:"savedPivotTables",label:i.a.t("Pivot Tables")},ba={key:"savedEventReports",label:i.a.t("Event Reports")},ma={key:"savedEventCharts",label:i.a.t("Event Charts")},pa={key:"savedDashboards",label:i.a.t("Dashboards")},ga={key:"savedIndicators",label:i.a.t("Indicators")},Ea={key:"activeUsers",label:i.a.t("Active Users")},ha={key:"users",label:i.a.t("Total Users")},ya={key:"position",label:i.a.t("Position")},fa={key:"name",label:i.a.t("Name")},Da={key:"views",label:i.a.t("Views")},Aa={key:"id",label:i.a.t("ID")},Oa={key:"created",label:i.a.t("Created")},Ta={key:"savedDataValues",label:i.a.t("Data Values")},Ca=[Ke,Qe,$e,Xe,Ze,ea,aa],Sa=[ra,na,la,sa,oa,ia],ka=[ua,va,da,ba,ma,pa,ga],wa=[Ea,ha],ja=(We={},Object(A.a)(We,T,(xe={},Object(A.a)(xe,U,[Je].concat(Ca,[ta])),Object(A.a)(xe,"AVERAGE",[Je].concat(Sa,[ca])),xe)),Object(A.a)(We,"FAVORITES_SAVED",[Je].concat(ka)),Object(A.a)(We,"USERS",[Je].concat(wa)),Object(A.a)(We,C,[ya,fa,Da,Aa,Oa]),Object(A.a)(We,"DATA_VALUES",[Je,Ta]),We),Ra=(He={},Object(A.a)(He,T,(Ye={},Object(A.a)(Ye,U,(ze={},Object(A.a)(ze,F,Ca),Object(A.a)(ze,"TOTAL",[ta]),ze)),Object(A.a)(Ye,"AVERAGE",(Ge={},Object(A.a)(Ge,F,Sa),Object(A.a)(Ge,"TOTAL",[ca]),Ge)),Ye)),Object(A.a)(He,"FAVORITES_SAVED",ka),Object(A.a)(He,"USERS",wa),Object(A.a)(He,"DATA_VALUES",[Ta]),He),Va={yyyymmdd:{day:"numeric",month:"short",year:"numeric"},yyyymm:{month:"short",year:"numeric"}},Na=i.a.t("Week");function Ua(e,a){var t=e.year,r=e.month,n=e.week,l=e.day;switch(a){case V:return t;case R:return _a(t,r);case j:return"".concat(Na," ").concat(n," / ").concat(t);case w:default:return _a(t,r,l)}}function _a(e,a,t){return Fa(t?new Date(e,a-1,t):new Date(e,a-1),t?Va.yyyymmdd:Va.yyyymm)}function Fa(e,a){var t=Y.getState().locale||"en";return new Intl.DateTimeFormat(t,a).format(e)}var Ia=["#7cb5ec","#CC6600","#CCCC00","#66CC00","#ff0066","#000000","#00CCCC"],Pa={animation:{duration:180},legend:{position:"bottom"},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"nearest"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},ticks:{maxRotation:45,minRotation:45}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:i.a.t("Values")},ticks:{suggestedMin:0,precision:0}}]}},La={backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0},Ma=1;function xa(e,a){for(var t=e.aggregationLevel,r=e.category,n=e.chartType,l=e.interval,s=[],o=[],i=S[r].label,c=S[r].subtitle,u=Ma,v=null,d=r===T?Ra[r][t][n]:Ra[r],b=a.length,m=d.length,p=0;p<b;p++){var g=a[p];s.push(Ua(g,l));for(var E=0;E<m;E++){var h=d[E];0===p&&o.push(Object(O.a)({},La,{label:h.label,data:[],borderColor:Ia[E]}));var y=g[h.key];y>u&&(u=y),(null===v||y<v)&&(v=y),o[E].data.push(y)}}return Pa.scales.yAxes[0].ticks.suggestedMax=u,Pa.scales.yAxes[0].ticks.suggestedMin=v,Pa.onResize=Wa,{data:{labels:s,datasets:o},options:Pa,title:i,subtitle:c}}function Wa(e){e.resize()}t(342);var za="uua-data-container uua-chart-container",Ga=" uua-data-container--loading";var Ya=Object(c.b)(function(e){var a=e.usageData,t=e.filter,r=t.category===C||a===m,n=a===d;return{shouldHide:r,loading:n,chartConfig:r||n?null:xa(t,a)}})(function(e){var a,t=e.shouldHide,l=e.loading,s=e.chartConfig;if(t)return null;if(l)a=n.a.createElement(Q.a,{overlay:!0});else{var o=s.options,i=s.data,c=s.title,u=s.subtitle;a=n.a.createElement(r.Fragment,null,n.a.createElement("h4",{className:"uaa-chart-title"},c),n.a.createElement("h6",{className:"uaa-chart-subtitle"},u),n.a.createElement("div",{className:"uaa-chart-wrap"},n.a.createElement(Be.a,{data:i,options:o})))}var v=l?za+Ga:za;return n.a.createElement("div",{className:v},a)}),Ha=(t(343),"uua-data-container"),qa=" uua-data-container--loading",Ba=function(e){var a=e.headers;return n.a.createElement("thead",null,n.a.createElement("tr",null,a.map(function(e,a){return n.a.createElement("th",{key:"h-".concat(a)},e)})))},Ja=function(e){var a=e.rows;return n.a.createElement("tbody",null,a.map(function(e,a){return n.a.createElement(Ka,{key:"row-".concat(a),cells:e})}))},Ka=function(e){var a=e.cells;return n.a.createElement("tr",null,a.map(function(e,a){return n.a.createElement("td",{key:"cell-".concat(a)},e)}))};function Qa(e,a){var t=e.aggregationLevel,r=e.category,n=e.interval,l=r===T?ja[r][t]:ja[r];return{headers:l.map(function(e){return e.label}),rows:a.map(function(e){return l.map(function(a){return a.key===Je.key?Ua(e,n):a.key===Oa.key?(t=e[a.key],Fa(new Date(t),Va.yyyymmdd)):e[a.key];var t})})}}var $a=Object(c.b)(function(e){var a=e.usageData,t=e.filter,r=a===m,n=a===d;return{error:r,loading:n,tableData:n||r?null:Qa(t,a)}})(function(e){var a,t=e.error,r=e.loading,l=e.tableData;if(t)a=n.a.createElement(Ee,{message:i.a.t("There was an error retrieving the usage analytics data")});else if(r)a=n.a.createElement(Q.a,{overlay:!0});else{var s=l.headers,o=l.rows;a=n.a.createElement("table",{className:"uaa-data-table"},n.a.createElement(Ba,{headers:s}),n.a.createElement(Ja,{rows:o}))}var c=r?Ha+qa:Ha;return n.a.createElement("div",{className:c},a)}),Xa=function(e){function a(){return Object(H.a)(this,a),Object(B.a)(this,Object(J.a)(a).apply(this,arguments))}return Object(K.a)(a,e),Object(q.a)(a,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){var e=this.props.appStatus;return e===d?n.a.createElement(Q.a,{overlay:!0,size:"large"}):e===m?n.a.createElement(Ee,{message:i.a.t("Error loading application.")}):n.a.createElement("main",{className:"uaa-container"},n.a.createElement(qe,null),n.a.createElement("section",{className:"uaa-content"},n.a.createElement(Ya,null),n.a.createElement($a,null)))}}]),a}(r.Component),Za=Object(c.b)(function(e){return{appStatus:e.appStatus}},{initApp:function(){return function(){var e=Object(Z.a)(X.a.mark(function e(a,t){var r;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve(t());case 3:r=e.sent,a(ge(p,r)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a(ge(g,e.t0));case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}()}})(Xa),et=(t(344),t(350)),at=t(351),tt=t(69),rt="..";var nt=function(){return n.a.createElement(tt.a,{baseUrl:rt,apiVersion:""},n.a.createElement(c.a,{store:Y},n.a.createElement(et.a,null),n.a.createElement(at.a,{appName:i.a.t("Usage Analytics")}),n.a.createElement(Za,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(nt,null),document.getElementById("uaa-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.0fc0aa12.chunk.js.map