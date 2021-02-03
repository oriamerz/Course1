(this.webpackJsonpcourse1=this.webpackJsonpcourse1||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__2pDZ-",infected:"Cards_infected__1iGfl",recovered:"Cards_recovered__1wHp9",deaths:"Cards_deaths__3wC5C",card:"Cards_card__3Qwq-"}},207:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a.n(n),o=a(71),s=a.n(o),i=a(6),u=a.n(i),d=a(11),l=a(72),h=a(73),f=a(80),p=a(79),j=a(225),b=a(229),v=a(226),x=a(227),O=a(31),m=a.n(O),g=a(32),y=a.n(g),C=a(14),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?Object(r.jsx)("div",{className:_.a.container,children:Object(r.jsxs)(j.a,{container:!0,spacing:3,justify:"center",children:[Object(r.jsx)(j.a,{item:!0,component:b.a,xs:12,md:3,className:y()(_.a.test,_.a.infected),children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(r.jsx)(x.a,{variant:"h5",children:Object(r.jsx)(m.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(r.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(x.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(r.jsx)(j.a,{item:!0,component:b.a,xs:12,md:3,className:y()(_.a.test,_.a.recovered),children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(r.jsx)(x.a,{variant:"h5",children:Object(r.jsx)(m.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(r.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(x.a,{variant:"body2",children:"Number of recovered cases of COVID-19"})]})}),Object(r.jsx)(j.a,{item:!0,component:b.a,xs:12,md:3,className:y()(_.a.test,_.a.deaths),children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(r.jsx)(x.a,{variant:"h5",children:Object(r.jsx)(m.a,{start:0,end:c.value,duration:2.5,separator:","})}),Object(r.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(x.a,{variant:"body2",children:"Number of deaths cases of COVID-19"})]})})]})}):"Loading..."},D=a(30),S=a(230),k=a(228),N=a(33),I=a.n(N),A="https://covid19.mathdro.id/api",B=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(A,"/daily")).catch((function(e){if(e.response)throw e}));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=A,t&&(a="".concat(A,"/countries/").concat(t)),e.next=5,I.a.get(a);case 5:return r=e.sent,n=r.data,c={confirmed:n.confirmed,recovered:n.recovered,deaths:n.deaths,lastUpdate:n.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(A,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.handleCoutryChange,a=Object(n.useState)([]),c=Object(D.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,L();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(r.jsx)(S.a,{children:Object(r.jsxs)(k.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))]})})},J=a(78),U=a.n(J),q=a(46),G=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(D.a)(c,2),s=o[0],i=o[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=void 0===s.response?"Loading chart":"Sorry, can't get data for the chart because has error at the database of API covid (status of the response: "+s.response.status+").",h=void 0!==s.length&&s.length?Object(r.jsx)(q.Line,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:s.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):l,f=void 0!==s.length&&s.length?Object(r.jsx)(q.Bar,{data:{labels:["Recovered","Confirmed","Deaths"],datasets:[{label:"# of Votes",data:[t.recovered.value,t.confirmed.value,t.deaths.value],backgroundColor:["rgba(0, 255, 0, 0.5);","rgba(0, 0, 255, 0.5)","rgba(255, 0, 0, 0.5)"],borderColor:["rgba(0, 255, 0, 0.5);","rgba(0, 0, 255, 0.5)","rgba(255, 0, 0, 0.5)"],borderWidth:1}]}}):l;return Object(r.jsx)("div",{className:U.a.container,children:a.length?f:h})},H=a.p+"static/media/covid.94f9c98b.png",Q=a(34),R=a.n(Q),W=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCoutryChange=function(){var t=Object(d.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,V(a);case 3:r=t.sent,e.setState({data:r,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,this.setState({data:t}),console.log(this.state.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(r.jsxs)("div",{className:R.a.container,children:[Object(r.jsx)("img",{className:R.a.image,src:H,alt:"require function fllails"}),Object(r.jsx)(w,{className:R.a.cards,data:t}),Object(r.jsx)(E,{handleCoutryChange:this.handleCoutryChange}),Object(r.jsx)(G,{data:t,country:a})]})}}]),a}(c.a.Component);s.a.render(Object(r.jsx)(W,{}),document.getElementById("root"))},34:function(e,t,a){e.exports={container:"App_container__2LWJH",image:"App_image__2CbC3",cards:"App_cards__2DdpQ"}},78:function(e,t,a){e.exports={container:"Charts_container__1l5Nx"}}},[[207,1,2]]]);
//# sourceMappingURL=main.3fee6ade.chunk.js.map