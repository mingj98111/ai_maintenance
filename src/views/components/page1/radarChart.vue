<template>
    <div class="container">
        <!-- 人员列表 -->
        <div class="personList">
            <ul>
                <!-- 遍历人员列表 -->
                <li v-for="(person, index) in persons" :key="index" @click="setPersonDetails(person)">
                    {{ person.name }}
                </li>
            </ul>
        </div>

        <!-- 雷达图展示区域 -->
        <div class="chart" ref="chart"></div>

        <!-- 选中人员的详细信息展示 -->
        <div v-if="selectedPerson" class="personDetails">
            <div class="details">
                <p><strong>学历:</strong> {{ selectedPerson.resume.engineeringQualification }}</p>
                <p><strong>职级职称:</strong> {{ selectedPerson.resume.professionalSkills }}</p>
                <p><strong>专业技能:</strong> {{ selectedPerson.resume.certifications }}</p>
                <p><strong>工程资质:</strong> {{ selectedPerson.resume.projectExperience }}</p>
                <p><strong>相关认证:</strong> {{ selectedPerson.resume.businessExperience }}</p>
                <p><strong>业务经验:</strong> {{ selectedPerson.resume.frontlineMaintenance }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeviceSafeRisk',
    data() {
        return {
            // 人员列表数据，每个人都有雷达图数据和简历信息
            persons: [
                { 
                    name: '范杰', 
                    data: [80, 90, 90, 90, 60, 40],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#67C3D6',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "硕士，中国民航大学",
                        professionalSkills: "P4.1 中级 党员",
                        certifications: "C# python java",
                        projectExperience: "执照 737机型 兼职教员",
                        businessExperience: "科创专家 青年工匠 数据认证",
                        frontlineMaintenance: "航线 技术管理"
                    }
                },
                { 
                    name: '李宇飞', 
                    data: [95, 90, 80, 90, 80, 80],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#FF69B4',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "硕士，清华大学",
                        professionalSkills: "P3.1 初级 群众",
                        certifications: "C# python 前端 工程制图 企业架构",
                        projectExperience: "执照 320,737机型,兼职教员",
                        businessExperience: "科创专家 青年工匠",
                        frontlineMaintenance: "航线 技术管理"
                    }
                },
                { 
                    name: '王储', 
                    data: [40, 95, 40, 90, 60, 60],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#32CD32',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "本科，中国民航大学",
                        professionalSkills: "P2.1 初级 群众",
                        certifications: "python 前端 数学 机器学习",
                        projectExperience: "兼职教员",
                        businessExperience: "科创专家",
                        frontlineMaintenance: "定检"
                    }
                },
                { 
                    name: '杨乐', 
                    data: [85, 95, 80, 90, 80, 80],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#FFD700',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "本科，中国民航大学",
                        professionalSkills: "P4.1 初级 群众",
                        certifications: "python 前后端 架构开发 嵌入式开发",
                        projectExperience: "执照",
                        businessExperience: "数据专业认证",
                        frontlineMaintenance: "航线 定检 附件 技术管理"
                    }
                },
                { 
                    name: '刘孟萌', 
                    data: [60, 80, 50, 80, 70, 70],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#FF6347',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "硕士，中国民航大学",
                        professionalSkills: "P2.2 中级 群众",
                        certifications: "C# python java 图像识别",
                        projectExperience: "执照",
                        businessExperience: "科创专家",
                        frontlineMaintenance: "定检 技术管理"
                    }
                },
                { 
                    name: '沙治宇', 
                    data: [60, 90, 60, 80, 70, 70],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#FFA500',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "硕士，中国民航大学",
                        professionalSkills: "P3.2 中级 硕士",
                        certifications: "C# python java 机器学习",
                        projectExperience: "执照",
                        businessExperience: "科创专家",
                        frontlineMaintenance: "定检"
                    }
                },
                { 
                    name: '梁健彬', 
                    data: [90, 80, 80, 80, 80, 70],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#32CD32',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "本科，南京航空航天大学",
                        professionalSkills: "P3.2 中级 党员",
                        certifications: "python 数据分析",
                        projectExperience: "执照 320,737机型 兼职教员",
                        businessExperience: "SCMP认证",
                        frontlineMaintenance: "航线 航材"
                    }
                },
                { 
                    name: '杨铭', 
                    data: [90, 85, 85, 90, 80, 80],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#20B2AA',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "本科，中国民航大学",
                        professionalSkills: "P4.1 中级 党员",
                        certifications: "python 前端 机器学习 数据可视化",
                        projectExperience: "执照 737机型 发动机监控 TTT教员",
                        businessExperience: "科创专家 青年工匠 安全研究员",
                        frontlineMaintenance: "航线 发动机管理"
                    }
                },
                { 
                    name: '马利媛', 
                    data: [80, 88, 60, 80, 70, 70],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#DC143C',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "硕士，新疆大学",
                        professionalSkills: "P2.2 初级 群众",
                        certifications: "python matlab 数据分析",
                        projectExperience: "执照 787机型",
                        businessExperience: "科创专家",
                        frontlineMaintenance: "航线 可靠性管理"
                    }
                },
                { 
                    name: '沈明京', 
                    data: [50, 95, 50, 80, 60, 60],
                    indicator: [
                        { name: '工程资质', max: 100 },
                        { name: '专业技能', max: 100 },
                        { name: '相关认证', max: 100 },
                        { name: '项目经历', max: 100 },
                        { name: '业务经验', max: 100 },
                        { name: '一线维修', max: 100 }
                    ],
                    color: '#FF4500',
                    position: ['center', '40%'],
                    resume: {
                        engineeringQualification: "硕士，北京交通大学",
                        professionalSkills: "P1.2 初级 团员",
                        certifications: "python 机器学习 图像识别 大模型",
                        projectExperience: "/",
                        businessExperience: "科创专家 数据库工程师",
                        frontlineMaintenance: "航线 信息应用管理"
                    }
                },
                
                // 其他人员数据...
            ],
            selectedPerson: null, // 当前选中的人员信息
            isRadarVisible: true,  // 用于控制雷达图和简历的切换
        };
    },
    methods: {
        // 设置雷达图
        setChart(person) {
            let seriesData = [{
                value: person.data,
                name: person.name,
                symbol: 'none',
                symbolSize: 5,
                itemStyle: {
                    color: person.color
                },
                lineStyle: {
                    normal: {
                        color: person.color,
                        width: 4,
                    },
                    emphasis: {
                        width: 5,
                    }
                }
            }];
            
            let option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: { type: 'shadow' },
                },
                title: {
                    text: `${person.name} 的人员画像`,
                    top: "5%",
                    left: 20,
                    textStyle: {
                        color: '#67C3D6',
                        fontSize: 12,
                    }
                },
                legend: {
                    data: [person.name],
                    left: "center",
                    top: person.position[1],
                    itemWidth: 5,
                    itemHeight: 7,
                    textStyle: {
                        color: '#67C3D6',
                        fontSize: 12
                    }
                },
                radar: {
                    indicator: person.indicator,
                    center: person.position,
                    radius: "55%",  // 缩小雷达图的大小
                    startAngle: 90,
                    splitNumber: 6,
                    shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#0DECF0',
                            fontSize: 12,
                        }
                    },
                    nameGap: 3,
                    splitArea: {
                        areaStyle: {
                            color: ['#1166C4', '#0C52A4', '#102F7D', '#13216B'],
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#163794'
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#163794'
                        }
                    }
                },
                series: [{
                    name: `${person.name} 雷达图`,
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 10,
                        formatter: function (params) {
                            return params.value;
                        }
                    },
                    data: seriesData
                }]
            };

            let myChart = this.$echarts(this.$refs.chart);
            myChart.clear();
            myChart.resize({
                width: this.$refs.chart.offsetWidth,
                height: this.$refs.chart.offsetHeight
            });
            myChart.setOption(option);
        },
        
        // 设置当前选中的人员并展示详细信息
        setPersonDetails(person) {
            // 更新当前选中的人员
            this.selectedPerson = person;

            // 调用雷达图绘制函数
            this.setChart(person);
        },

        // 切换视图：雷达图或简历
        toggleView() {
            this.isRadarVisible = !this.isRadarVisible;
        }
    },
    mounted() {
        // 默认显示第一个人的雷达图和简历
        this.selectedPerson = this.persons[0];
        this.setChart(this.selectedPerson);
    },
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.personList {
    width: 12%;
    margin-right: 10px;
}

.personList ul {
    list-style: none;
    padding: 1;
}

.personList li {
    cursor: pointer;
    color: #67C3D6;
    font-size: 12px;
    margin: 3px 0;
    padding: 1px;
    border-radius: 1px;
}

.personList li:hover {
    background-color: #275ab8;
    text-decoration: underline;
}

.chart {
    width: 50%;
    height: 300px;
}

.personDetails {
    width: 50%;
    margin-left: 10px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    color: #09d0db;
    overflow-y: auto;
}

.personDetails h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #4d92e0;
}

.details p {
    margin: 8px 0;
    line-height: 1.6;
}

.details strong {
    color: #4A90E2;
}

button {
    margin-top: 15px;
    padding: 8px 15px;
    background-color: #4d92e0;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #3b7bbf;
}
</style>
