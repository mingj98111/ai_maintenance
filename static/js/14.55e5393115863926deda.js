webpackJsonp([14],{"2zTy":function(e,n){},Y2VA:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"personList"},[a("ul",e._l(e.persons,function(n,i){return a("li",{key:i,on:{click:function(a){return e.setPersonDetails(n)}}},[e._v("\n                "+e._s(n.name)+"\n            ")])}),0)]),e._v(" "),a("div",{ref:"chart",staticClass:"chart"}),e._v(" "),e.selectedPerson?a("div",{staticClass:"personDetails"},[a("div",{staticClass:"details"},[a("p",[a("strong",[e._v("学历:")]),e._v(" "+e._s(e.selectedPerson.resume.engineeringQualification))]),e._v(" "),a("p",[a("strong",[e._v("职级职称:")]),e._v(" "+e._s(e.selectedPerson.resume.professionalSkills))]),e._v(" "),a("p",[a("strong",[e._v("专业技能:")]),e._v(" "+e._s(e.selectedPerson.resume.certifications))]),e._v(" "),a("p",[a("strong",[e._v("工程资质:")]),e._v(" "+e._s(e.selectedPerson.resume.projectExperience))]),e._v(" "),a("p",[a("strong",[e._v("相关认证:")]),e._v(" "+e._s(e.selectedPerson.resume.businessExperience))]),e._v(" "),a("p",[a("strong",[e._v("业务经验:")]),e._v(" "+e._s(e.selectedPerson.resume.frontlineMaintenance))])])]):e._e()])},staticRenderFns:[]};var t=a("VU/8")({name:"DeviceSafeRisk",data:function(){return{persons:[{name:"范杰",data:[80,90,90,90,60,40],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#67C3D6",position:["center","40%"],resume:{engineeringQualification:"硕士，中国民航大学",professionalSkills:"P4.1 中级 党员",certifications:"C# python java",projectExperience:"执照 737机型 兼职教员",businessExperience:"科创专家 青年工匠 数据认证",frontlineMaintenance:"航线 技术管理"}},{name:"李宇飞",data:[95,90,80,90,80,80],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#FF69B4",position:["center","40%"],resume:{engineeringQualification:"硕士，清华大学",professionalSkills:"P3.1 初级 群众",certifications:"C# python 前端 工程制图 企业架构",projectExperience:"执照 320,737机型,兼职教员",businessExperience:"科创专家 青年工匠",frontlineMaintenance:"航线 技术管理"}},{name:"王储",data:[40,95,40,90,60,60],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#32CD32",position:["center","40%"],resume:{engineeringQualification:"本科，中国民航大学",professionalSkills:"P2.1 初级 群众",certifications:"python 前端 数学 机器学习",projectExperience:"兼职教员",businessExperience:"科创专家",frontlineMaintenance:"定检"}},{name:"杨乐",data:[85,95,80,90,80,80],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#FFD700",position:["center","40%"],resume:{engineeringQualification:"本科，中国民航大学",professionalSkills:"P4.1 初级 群众",certifications:"python 前后端 架构开发 嵌入式开发",projectExperience:"执照",businessExperience:"数据专业认证",frontlineMaintenance:"航线 定检 附件 技术管理"}},{name:"刘孟萌",data:[60,80,50,80,70,70],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#FF6347",position:["center","40%"],resume:{engineeringQualification:"硕士，中国民航大学",professionalSkills:"P2.2 中级 群众",certifications:"C# python java 图像识别",projectExperience:"执照",businessExperience:"科创专家",frontlineMaintenance:"定检 技术管理"}},{name:"沙治宇",data:[60,90,60,80,70,70],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#FFA500",position:["center","40%"],resume:{engineeringQualification:"硕士，中国民航大学",professionalSkills:"P3.2 中级 硕士",certifications:"C# python java 机器学习",projectExperience:"执照",businessExperience:"科创专家",frontlineMaintenance:"定检"}},{name:"梁健彬",data:[90,80,80,80,80,70],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#32CD32",position:["center","40%"],resume:{engineeringQualification:"本科，南京航空航天大学",professionalSkills:"P3.2 中级 党员",certifications:"python 数据分析",projectExperience:"执照 320,737机型 兼职教员",businessExperience:"SCMP认证",frontlineMaintenance:"航线 航材"}},{name:"杨铭",data:[90,85,85,90,80,80],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#20B2AA",position:["center","40%"],resume:{engineeringQualification:"本科，中国民航大学",professionalSkills:"P4.1 中级 党员",certifications:"python 前端 机器学习 数据可视化",projectExperience:"执照 737机型 发动机监控 TTT教员",businessExperience:"科创专家 青年工匠 安全研究员",frontlineMaintenance:"航线 发动机管理"}},{name:"马利媛",data:[80,88,60,80,70,70],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#DC143C",position:["center","40%"],resume:{engineeringQualification:"硕士，新疆大学",professionalSkills:"P2.2 初级 群众",certifications:"python matlab 数据分析",projectExperience:"执照 787机型",businessExperience:"科创专家",frontlineMaintenance:"航线 可靠性管理"}},{name:"沈明京",data:[50,95,50,80,60,60],indicator:[{name:"工程资质",max:100},{name:"专业技能",max:100},{name:"相关认证",max:100},{name:"项目经历",max:100},{name:"业务经验",max:100},{name:"一线维修",max:100}],color:"#FF4500",position:["center","40%"],resume:{engineeringQualification:"硕士，北京交通大学",professionalSkills:"P1.2 初级 团员",certifications:"python 机器学习 图像识别 大模型",projectExperience:"/",businessExperience:"科创专家 数据库工程师",frontlineMaintenance:"航线 信息应用管理"}}],selectedPerson:null,isRadarVisible:!0}},methods:{setChart:function(e){var n=[{value:e.data,name:e.name,symbol:"none",symbolSize:5,itemStyle:{color:e.color},lineStyle:{normal:{color:e.color,width:4},emphasis:{width:5}}}],a={tooltip:{trigger:"item",axisPointer:{type:"shadow"}},title:{text:e.name+" 的人员画像",top:"5%",left:20,textStyle:{color:"#67C3D6",fontSize:12}},legend:{data:[e.name],left:"center",top:e.position[1],itemWidth:5,itemHeight:7,textStyle:{color:"#67C3D6",fontSize:12}},radar:{indicator:e.indicator,center:e.position,radius:"55%",startAngle:90,splitNumber:6,shape:"circle",name:{textStyle:{color:"#0DECF0",fontSize:12}},nameGap:3,splitArea:{areaStyle:{color:["#1166C4","#0C52A4","#102F7D","#13216B"]}},axisLine:{lineStyle:{color:"#163794"}},splitLine:{show:!1,lineStyle:{color:"#163794"}}},series:[{name:e.name+" 雷达图",type:"radar",itemStyle:{emphasis:{lineStyle:{width:4}}},label:{show:!0,color:"#fff",fontSize:10,formatter:function(e){return e.value}},data:n}]},i=this.$echarts(this.$refs.chart);i.clear(),i.resize({width:this.$refs.chart.offsetWidth,height:this.$refs.chart.offsetHeight}),i.setOption(a)},setPersonDetails:function(e){this.selectedPerson=e,this.setChart(e)},toggleView:function(){this.isRadarVisible=!this.isRadarVisible}},mounted:function(){this.selectedPerson=this.persons[0],this.setChart(this.selectedPerson)}},i,!1,function(e){a("2zTy")},"data-v-ab6846e4",null);n.default=t.exports}});