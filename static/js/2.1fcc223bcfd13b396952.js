webpackJsonp([2],{lhLg:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"page2",props:["selectRangeDate"],components:{areaChart:function(){return e.e(5).then(e.bind(null,"wyww"))},radarChart:function(){return e.e(6).then(e.bind(null,"8WCb"))},barChart:function(){return e.e(37).then(e.bind(null,"oi+k"))},doubleBarChart:function(){return e.e(16).then(e.bind(null,"7rmn"))},singleAreaChart:function(){return e.e(36).then(e.bind(null,"25lh"))},doubleLine:function(){return e.e(26).then(e.bind(null,"BlSo"))},threeBarChart:function(){return e.e(27).then(e.bind(null,"Xnjf"))},pieChart:function(){return e.e(31).then(e.bind(null,"ShzH"))},doubleBars:function(){return e.e(25).then(e.bind(null,"yQLT"))}},data:function(){return{everyPer:0,xOffset:0,circle:{x:250,y:250,radius:218},title:["累计话术违规个数:456,789","累计办公次数:123,12","累计办公时长:134,23","累计服务好友次数:234,234","累计服务好友数量:123,123","累计设备违规个数:678,123"],cnfigData1:{color:"#5CB1C1",name:["（次）","（人）"],data:[{name:"聊天次数",color:["#9e70ff","#6e5eff"],data:[200,12,21,54,260,130,210]},{name:"聊天人数",color:["#48cefd","#5356f1"],data:[50,182,234,191,190,30,10]}]},configData2:{data:[213,190,137,99,63,196,248,212,248,112]},chatRadarData:{title:"各部门聊天对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"聊天次数",color:"#0DF5F8",value:[100,8,.4,-80,2e3,332]},{name:"聊天人数",color:"#7921AD",value:[60,5,.3,-100,1500,221]}]},officeRadarData:{title:"各部门办公时长对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"办公时长",color:"#55D35B",value:[100,8,.4,-80,2e3,332]}]},friendRadarData:{title:"各部门好友数量对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"好友总数",color:"#FA8486",value:[100,8,.4,-80,2e3,332]}]},momentsRadarData:{title:"各部门朋友圈数量对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"朋友圈个数",color:"#D91748",value:[100,8,.4,-80,2e3,332]}]},warea:{x:250,y:250,max:700},dots:[],resizeFn:null,animationFrame1:null,animationFrame2:null,centerBox:{width:0,height:0}}},methods:{drawDot:function(){var t=this,a=document.getElementById("dot");a.width=document.querySelector("#circlePie").offsetWidth,a.height=document.querySelector("#circlePie").offsetHeight;var e=a.getContext("2d");e.clearRect(0,0,a.width,a.height);var s=[this.warea].concat(this.dots);this.dots.forEach(function(i){i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a.width||i.x<0?-1:1,i.ya*=i.y>a.height||i.y<0?-1:1,e.fillStyle="#ffffff",e.beginPath(),e.arc(i.x-.5,i.y-.5,2,0,2*Math.PI,!0),e.closePath(),e.fill();for(var r=0;r<s.length;r++){var l=s[r];if(i!==l&&null!==l.x&&null!==l.y){var n=i.x-l.x,c=i.y-l.y,o=Math.sqrt(n*n+c*c),h=void 0;o<l.max&&(h=(l.max-o)/l.max,e.beginPath(),e.lineWidth=h/2,l===t.warea?e.strokeStyle="rgba(255,255,255,0)":e.strokeStyle="rgba(255,255,255,"+(h+.2)+")",e.moveTo(i.x,i.y),e.lineTo(l.x,l.y),e.stroke())}}s.splice(s.indexOf(i),1)}),this.animationFrame1=window.requestAnimationFrame(this.drawDot)},rads:function(t){return Math.PI*t/180},act:function(){var t=document.querySelector("#main");t.style.width=this.centerBox.height+"px",t.style.height=this.centerBox.height+"px";var a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),this.drawPie(this.everyPer,a),this.animationFrame2=window.requestAnimationFrame(this.act),this.everyPer+=Math.PI/180;this.xOffset+=.07},drawPie:function(t,a){a.save(),a.fillStyle="rgba(18,55,88,.2)",a.beginPath(),a.arc(this.circle.x,this.circle.y,245,0,2*Math.PI,!0),a.closePath(),a.fill(),a.restore(),a.save(),a.shadowBlur=50,a.shadowColor="#123959",a.fillStyle="#080D27",a.beginPath(),a.arc(this.circle.x,this.circle.y,235,0,2*Math.PI,!0),a.closePath(),a.fill(),a.restore();for(var e=0;e<this.title.length;e++)a.save(),this.drawCircularText(this.circle,this.title[e],this.rads(60*e-110),this.rads(60*e-65),e,a),a.restore();var s=240*Math.cos(t),i=240*Math.sin(t);a.save(),a.fillStyle="rgb(56,252,253)",a.shadowBlur=80,a.shadowColor="#39E9EE",a.translate(this.circle.x,this.circle.y),a.beginPath(),a.arc(s,i,5,0,2*Math.PI),a.arc(-s,-i,5,0,2*Math.PI),a.closePath(),a.fill(),a.restore(),a.save(),a.fillStyle="#153776",a.beginPath(),a.arc(this.circle.x,this.circle.y,200,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="#121535",a.beginPath(),a.arc(this.circle.x,this.circle.y,190,0,2*Math.PI,!0),a.closePath(),a.fill();a.save(),this.drawCircle(a),this.drawSin(this.xOffset,a,36),this.drawText(a,36),a.restore();for(var r=0;r<6;r++)a.save(),a.translate(this.circle.x,this.circle.y),a.rotate(-Math.PI/2+Math.PI/6+r*Math.PI/3),a.beginPath(),a.moveTo(190,0),a.lineTo(200,0),a.lineWidth=4,a.strokeStyle="#0A122D",a.stroke(),a.closePath(),a.restore()},drawCircle:function(t){t.beginPath(),t.fillStyle="#209ADF",t.arc(this.circle.x,this.circle.y,120,0,2*Math.PI),t.fill(),t.beginPath(),t.arc(this.circle.x,this.circle.y,120,0,2*Math.PI),t.clip()},drawSin:function(t,a,e){a.save(),a.translate(130,130);var s=[];a.beginPath();for(var i=0;i<240;i+=20/240){var r=-Math.sin(.04*(0+i)+t),l=240*(1-e/100);s.push([i,l,l+12*r]),a.lineTo(i,l+12*r)}a.lineTo(240,240),a.lineTo(0,240),a.lineTo(s[0][0],s[0][1]),a.fillStyle="#2C50B1",a.fill(),a.restore()},drawText:function(t,a){t.save(),t.translate(130,130);var e=50;t.font=e+"px Microsoft Yahei",t.textAlign="center",t.fillStyle="#95EFFF",t.fillText(a+"%",120,120-e/2),t.restore(),t.save(),e=25,t.translate(130,130),t.font=e+"px Microsoft Yahei",t.textAlign="center",t.fillStyle="#95EFFF",t.fillText("平均营销质量指数",120,120+e),t.restore()},drawCircularText:function(t,a,e,s,i,r){var l=t.radius,n=void 0,c=parseFloat(e),o=0,h=void 0,d=a.split(":");if(r.save(),r.fillStyle="#fff",r.font="12px 微软雅黑 ",r.textAlign="center",r.textBaseline="middle",i<2||5===i)for(;o<a.length;)h=a.charAt(o),n=d[0].indexOf(h)>=0?d[0].length>6?(e-s)/(a.length-3):(e-s)/(a.length-1):(e-s)/(a.length+6),r.save(),r.beginPath(),r.translate(t.x+Math.cos(c)*l,t.y+Math.sin(c)*l),r.rotate(Math.PI/2+c),r.fillText(h,0,0),c-=n,o++,r.restore();else for(;o<a.length;)h=a.split("").reverse().join("").charAt(o),n=d[1].indexOf(h)>=0?(e-s)/(a.length+6):d[0].length>6?(e-s)/(a.length-3):(e-s)/(a.length-1),r.save(),r.beginPath(),r.translate(t.x+Math.cos(c)*l,t.y+Math.sin(c)*l),r.rotate(-Math.PI/2+c),r.fillText(h,0,0),c-=n,o++,r.restore();r.restore()}},mounted:function(){var t=this;this.centerBox={width:document.querySelector("#circlePie").offsetWidth,height:document.querySelector("#circlePie").offsetHeight};for(var a=0;a<200;a++){var e=Math.random()*this.centerBox.width,s=Math.random()*this.centerBox.height,i=2*Math.random()-1,r=2*Math.random()-1;this.dots.push({x:e,y:s,xa:i,ya:r,max:40})}this.act(),this.drawDot(),this.resizeFn=this.$debounce(function(){t.centerBox={width:document.querySelector("#circlePie").offsetWidth,height:document.querySelector("#circlePie").offsetHeight};for(var a=1;a<13;a++)t.$refs["chart"+a].setChart()},500),window.addEventListener("resize",this.resizeFn)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeFn),window.cancelAnimationFrame(this.animationFrame1),window.cancelAnimationFrame(this.animationFrame2)}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page2"},[e("Row",{staticClass:"content"},[e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"left"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-4"},[t._v("聊天分析")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("div",{staticClass:"chart-68"},[e("area-chart",{ref:"chart1",attrs:{id:"left_1","select-range-date":t.selectRangeDate,config:t.cnfigData1}})],1),t._v(" "),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart2",attrs:{id:"left_2",data:t.chatRadarData}})],1)])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"left"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-8"},[t._v("办公时长分析")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("div",{staticClass:"chart-68"},[e("bar-chart",{ref:"chart3",attrs:{id:"left_3",config:t.configData2}})],1),t._v(" "),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart4",attrs:{id:"left_4",data:t.officeRadarData}})],1)])])]),t._v(" "),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"circlePie",attrs:{id:"circlePie"}},[e("canvas",{attrs:{id:"main",width:"500",height:"500"}}),t._v(" "),e("canvas",{attrs:{id:"dot"}})])]),t._v(" "),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"right"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-4"},[t._v("好友分析")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart5",attrs:{id:"right_1",data:t.friendRadarData}})],1),t._v(" "),e("div",{staticClass:"chart-68"},[e("double-bar-chart",{ref:"chart6"})],1)])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"right"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-8"},[t._v("微信朋友圈分析")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart7",attrs:{id:"right_3",data:t.momentsRadarData}})],1),t._v(" "),e("div",{staticClass:"chart-68"},[e("single-area-chart",{ref:"chart8",attrs:{selectRangeDate:t.selectRangeDate,id:"right_4"}})],1)])])])],1),t._v(" "),e("Row",{staticClass:"bottom-list"},[e("Col",{attrs:{span:"16"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"bottom"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("违规话术分布趋势")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("double-line",{ref:"chart9",attrs:{id:"bottom_1"}})],1)]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"bottom"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("各部门违规话术对比")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("double-bars",{ref:"chart10",attrs:{id:"bottom_2"}})],1)]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"bottom"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("红包转账分布趋势")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("three-bar-chart",{ref:"chart11",attrs:{id:"bottom_3"}})],1)])]),t._v(" "),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"list right-bottom"},[e("div",{staticClass:"bottom bottom1"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("各部门红包转账对比")])]),t._v(" "),e("span",{staticClass:"angle1"}),t._v(" "),e("span",{staticClass:"angle2"}),t._v(" "),e("span",{staticClass:"angle3"}),t._v(" "),e("span",{staticClass:"angle4"}),t._v(" "),e("pie-chart",{ref:"chart12",attrs:{id:"bottom_4"}})],1)])])],1)],1)},staticRenderFns:[]};var r=e("VU/8")(s,i,!1,function(t){e("ovvE")},"data-v-1e103a3f",null);a.default=r.exports},ovvE:function(t,a){}});