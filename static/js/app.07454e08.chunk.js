(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{211:function(e,t,a){e.exports={container:"LayoutContainer_container__2gt-1"}},212:function(e,t,a){e.exports={sidebar:"LayoutSidebar_sidebar__38x-X"}},213:function(e,t,a){e.exports={content:"LayoutContent_content__3pEdj"}},214:function(e,t,a){e.exports={title:"AppTitle_title__mjsfQ"}},309:function(e,t,a){e.exports={title:"ChartHeader_title__ff7A2",subtitle:"ChartHeader_subtitle__2JAVZ"}},310:function(e,t,a){e.exports={outerContainer:"ChartWrapper_outerContainer__2BU2T",innerContainer:"ChartWrapper_innerContainer__5ZEsg",chartContainer:"ChartWrapper_chartContainer__jt1gD"}},311:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(1),l=a.n(r),c=a(6),u=a.n(c),i=[{value:"FAVORITE_VIEWS",label:u.a.t("Favorite views"),subtitle:u.a.t("Number of times users looked at analysis favorites")},{value:"FAVORITES_SAVED",label:u.a.t("Favorites saved"),subtitle:u.a.t("Number of analysis favorites created by users")},{value:"USERS",label:u.a.t("Users"),subtitle:u.a.t("Number of users in the system")},{value:"TOP_FAVORITES",label:u.a.t("Top favorites")},{value:"DATA_VALUES",label:u.a.t("Data values"),subtitle:u.a.t("Number of data values saved in the system")}],s=[{value:"DAY",label:u.a.t("Day")},{value:"WEEK",label:u.a.t("Week")},{value:"MONTH",label:u.a.t("Month")},{value:"YEAR",label:u.a.t("Year")}],o=[{value:"SUM",label:u.a.t("Sum")},{value:"AVERAGE",label:u.a.t("Average")}],v=[{value:"ALL",label:u.a.t("All")},{value:"TOTAL",label:u.a.t("Total")}],E=[{value:"CHART_VIEW",label:u.a.t("Chart")},{value:"MAP_VIEW",label:u.a.t("Map")},{value:"REPORT_TABLE_VIEW",label:u.a.t("Report table")},{value:"EVENT_REPORT_VIEW",label:u.a.t("Event report")},{value:"EVENT_CHART_VIEW",label:u.a.t("Event chart")},{value:"DASHBOARD_VIEW",label:u.a.t("Dashboard")},{value:"DATA_SET_REPORT_VIEW",label:u.a.t("Data set report")}],m=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"25",label:"25"}],d=[{value:"ASC",label:u.a.t("Ascending")},{value:"DESC",label:u.a.t("Descending")}],b=a(14),f=function(e){var t=e.startDate,a=e.setStartDate,n=e.endDate,r=e.setEndDate;return l.a.createElement("div",{className:"uaa-date-range"},l.a.createElement(b.h,{label:u.a.t("Start Date"),type:"date",value:t,onChange:function(e){var t=e.value;return a(t)}}),l.a.createElement(b.h,{label:u.a.t("End Date"),type:"date",value:n,onChange:function(e){var t=e.value;return r(t)}}))},g=function(e){var t=e.interval,a=e.setInterval;return l.a.createElement(b.n,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Interval")},s.map((function(e){var t=e.label,a=e.value;return l.a.createElement(b.o,{label:t,key:a,value:a})})))},p=function(e){var t=e.aggregation,a=e.setAggregation;return l.a.createElement(b.n,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Aggregation level")},o.map((function(e){var t=e.label,a=e.value;return l.a.createElement(b.o,{label:t,key:a,value:a})})))},y=function(e){var t=e.chartType,a=e.setChartType;return l.a.createElement(b.n,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Chart type")},v.map((function(e){var t=e.label,a=e.value;return l.a.createElement(b.o,{label:t,key:a,value:a})})))},S=function(e){var t=e.eventType,a=e.setEventType;return l.a.createElement(b.n,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Event type")},E.map((function(e){var t=e.label,a=e.value;return l.a.createElement(b.o,{label:t,key:a,value:a})})))},h=function(e){var t=e.pageSize,a=e.setPageSize;return l.a.createElement(b.n,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Page size")},m.map((function(e){var t=e.label,a=e.value;return l.a.createElement(b.o,{label:t,key:a,value:a})})))},D=function(e){var t=e.sortOrder,a=e.setSortOrder;return l.a.createElement(b.n,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Sort order")},d.map((function(e){var t=e.label,a=e.value;return l.a.createElement(b.o,{label:t,key:a,value:a})})))},T=function(e){var t=e.category,a=e.startDate,n=e.setStartDate,r=e.endDate,c=e.setEndDate,u=e.interval,i=e.setInterval,s=e.aggregation,o=e.setAggregation,v=e.chartType,E=e.setChartType,m=e.eventType,d=e.setEventType,b=e.pageSize,T=e.setPageSize,O=e.sortOrder,_=e.setSortOrder,A="TOP_FAVORITES"===t,C="FAVORITE_VIEWS"===t;return l.a.createElement(l.a.Fragment,null,!A&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{startDate:a,setStartDate:n,endDate:r,setEndDate:c}),l.a.createElement(g,{interval:u,setInterval:i})),C&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{aggregation:s,setAggregation:o}),l.a.createElement(y,{chartType:v,setChartType:E})),A&&l.a.createElement(l.a.Fragment,null,l.a.createElement(S,{eventType:m,setEventType:d}),l.a.createElement(h,{pageSize:b,setPageSize:T}),l.a.createElement(D,{sortOrder:O,setSortOrder:_})))},O=a(211),_=a.n(O),A=function(e){var t=e.children;return l.a.createElement("main",{className:_.a.container},t)},C=a(212),V=a.n(C),Y=function(e){var t=e.children;return l.a.createElement("aside",{className:V.a.sidebar},t)},j=a(213),I=a.n(j),R=function(e){var t=e.children;return l.a.createElement("section",{className:I.a.content},t)},k=function(e){var t=e.category,a=e.setCategory;return l.a.createElement(b.n,{selected:t,onChange:function(e){var t=e.selected;a(t)},label:u.a.t("Category")},i.map((function(e){var t=e.label,a=e.value;return l.a.createElement(b.o,{label:t,key:a,value:a})})))},z=a(214),N=a.n(z),W=function(){return l.a.createElement("h1",{className:N.a.title},u.a.t("Usage Analytics"))},M=a(21),F=a.n(M),L=function(e,t){var a=e.year,n=e.month,r=e.week,l=e.day;switch(t){case"YEAR":return F()({year:a}).format("YYYY");case"MONTH":var c=n-1;return F()({year:a,month:c}).format("MMM YYYY");case"WEEK":var i="[".concat(u.a.t("Week"),"] [").concat(r,"] / YYYY");return F()({year:a}).format(i);case"DAY":var s=n-1;return F()({year:a,month:s,day:l}).format("MMM D, YYYY")}},P=function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement(b.b,null,t))},w=function(e){var t=e.data,a=e.interval;return l.a.createElement(P,null,l.a.createElement(b.p,null,l.a.createElement(b.t,null,l.a.createElement(b.v,null,l.a.createElement(b.s,null,u.a.t("Date")),l.a.createElement(b.s,null,u.a.t("Data Values")))),l.a.createElement(b.q,null,t.map((function(e){var t=e.year,n=e.month,r=e.week,c=e.day,u=e.savedDataValues,i=L({year:t,month:n,week:r,day:c},a);return l.a.createElement(b.u,{key:i},l.a.createElement(b.r,null,i),l.a.createElement(b.r,null,u))})))))},x=a(215),H=a(309),U=a.n(H),J=function(e){var t=e.title,a=e.subtitle;return l.a.createElement("header",null,l.a.createElement("h4",{className:U.a.title},t),l.a.createElement("h6",{className:U.a.subtitle},a))},B=a(310),K=a.n(B),Z=function(e){var t=e.children,a=e.title,n=e.subtitle;return l.a.createElement("div",{className:K.a.outerContainer},l.a.createElement(b.b,null,l.a.createElement("div",{className:K.a.innerContainer},l.a.createElement(J,{title:a,subtitle:n}),l.a.createElement("div",{className:K.a.chartContainer},t))))},q={animation:{duration:180},legend:{position:"bottom"},maintainAspectRatio:!1,elements:{line:{tension:0,fill:!1,backgroundColor:"rgba(0, 0, 0, 0)"}},scales:{yAxes:[{scaleLabel:{display:!0,labelString:u.a.t("Values")}}]}},G=function(e){var t=e.data,a=e.category,n=e.interval,r=function(e){var t=i.find((function(t){return t.value===e}));return{title:t.label,subtitle:t.subtitle}}(a),c=r.title,s=r.subtitle,o=function(e,t){return e.map((function(e){var a=e.year,n=e.month,r=e.week,l=e.day;return L({year:a,month:n,week:r,day:l},t)}))}(t,n),v=function(e){return[{label:u.a.t("Data Values"),data:e.map((function(e){return e.savedDataValues})),borderColor:"#7cb5ec"}]}(t);return l.a.createElement(Z,{title:c,subtitle:s},l.a.createElement(x.a,{data:{labels:o,datasets:v},options:q}))},Q=a(16),X={favorites:{resource:"dataStatistics/favorites",params:function(e){return{eventType:e.eventType,pageSize:e.pageSize,sortOrder:e.sortOrder}}}},$=function(e){var t=e.eventType,a=e.pageSize,n=e.sortOrder,c=e.children,u=Object(Q.c)(X,{lazy:!0,variables:{eventType:t,pageSize:a,sortOrder:n}}),i=u.loading,s=u.error,o=u.data,v=u.called,E=u.refetch;if(Object(r.useEffect)((function(){E({eventType:t,pageSize:a,sortOrder:n})}),[t,a,n]),!v||i)return l.a.createElement(b.e,null,l.a.createElement(b.c,null,l.a.createElement(b.d,null)));if(s)throw s;return c(o.favorites)},ee={dataStatistics:{resource:"dataStatistics",params:function(e){return{startDate:e.startDate,endDate:e.endDate,interval:e.interval}}}},te=function(e){var t=e.startDate,a=e.endDate,n=e.interval,c=e.stale,u=e.setStale,i=e.children,s=function(){return u(!1)},o=Object(Q.c)(ee,{lazy:!0,variables:{startDate:t,endDate:a,interval:n},onComplete:s,onError:s}),v=o.loading,E=o.error,m=o.data,d=o.called,f=o.refetch;if(Object(r.useEffect)((function(){f({startDate:t,endDate:a,interval:n})}),[t,a,n]),!d||v||c)return l.a.createElement(b.e,null,l.a.createElement(b.c,null,l.a.createElement(b.d,null)));if(E)throw E;return i(m.dataStatistics)},ae=function(e){var t=e.aggregation,a=e.category,n=e.chartType,c=e.endDate,u=e.eventType,i=e.interval,s=e.isTopFavorites,o=e.pageSize,v=e.setStale,E=e.sortOrder,m=e.stale,d=e.startDate;return s?l.a.createElement($,{eventType:u,pageSize:o,sortOrder:E},(function(e){return l.a.createElement("pre",null,JSON.stringify(e,null,2))})):l.a.createElement(te,{startDate:d,endDate:c,interval:i,setStale:v,stale:m},(function(e){return"DATA_VALUES"===a?l.a.createElement(r.Fragment,null,l.a.createElement(G,{data:e,interval:i,aggregation:t,category:a,chartType:n}),l.a.createElement(w,{data:e,interval:i})):null}))},ne=(a(311),function(){return{initialStartDate:F()().subtract(4,"months").format("YYYY-MM-DD"),initialEndDate:F()().format("YYYY-MM-DD")}}),re=function(){var e=ne(),t=e.initialStartDate,a=e.initialEndDate,c=Object(r.useState)("FAVORITE_VIEWS"),u=Object(n.a)(c,2),i=u[0],s=u[1],o=Object(r.useState)(t),v=Object(n.a)(o,2),E=v[0],m=v[1],d=Object(r.useState)(a),b=Object(n.a)(d,2),f=b[0],g=b[1],p=Object(r.useState)("WEEK"),y=Object(n.a)(p,2),S=y[0],h=y[1],D=Object(r.useState)("SUM"),O=Object(n.a)(D,2),_=O[0],C=O[1],V=Object(r.useState)("ALL"),j=Object(n.a)(V,2),I=j[0],z=j[1],N=Object(r.useState)("CHART_VIEW"),M=Object(n.a)(N,2),F=M[0],L=M[1],P=Object(r.useState)("25"),w=Object(n.a)(P,2),x=w[0],H=w[1],U=Object(r.useState)("ASC"),J=Object(n.a)(U,2),B=J[0],K=J[1],Z=Object(r.useState)(!1),q=Object(n.a)(Z,2),G=q[0],Q=q[1],X="TOP_FAVORITES"===i;return l.a.createElement(A,null,l.a.createElement(Y,null,l.a.createElement(W,null),l.a.createElement(k,{category:i,setCategory:s}),l.a.createElement(T,{aggregation:_,category:i,chartType:I,endDate:f,eventType:F,interval:S,pageSize:x,setAggregation:C,setChartType:z,setEndDate:g,setEventType:L,setInterval:function(e){Q(!0),h(e)},setPageSize:H,setSortOrder:K,setStartDate:m,sortOrder:B,startDate:E})),l.a.createElement(R,null,l.a.createElement(ae,{aggregation:_,category:i,chartType:I,endDate:f,eventType:F,interval:S,isTopFavorites:X,pageSize:x,setStale:Q,sortOrder:B,stale:G,startDate:E})))};a.d(t,"default",(function(){return re}))}}]);
//# sourceMappingURL=app.07454e08.chunk.js.map