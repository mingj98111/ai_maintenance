<template>
    <div class='deviceSafeRisk'></div>
</template>

<script>
export default {
    name: 'deviceSafeRisk',
    data() {
        return {}
    },
    methods: {
        // 设备安全性风险
        setDeviceSafe() {
            let option = {
                title: [
                    {
                        text: '个人业务方向经验值',
                        textStyle: {
                            color: "#00CCFF",
                            fontSize: 13
                        },
                        top: '8%',
                        left: '4%'
                    },
                    {
                        text: "团队业务经验雷达图",
                        textStyle: {
                            color: "#00CCFF",
                            fontSize: 13
                        },
                        top: '9%',
                        left: '60%'
                    },
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: [
                        {name: '人数', icon: 'circle'},
                        {name: '业务', icon: 'circle'},

                    ],
                    gridIndex: 3,
                    orient: 'vertical',
                    right: "44%",
                    bottom: "8%",
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: '#00CCFF',
                        fontSize: 12
                    }
                },
                grid: {
                    top: '15%',
                    left: '3%',
                    right: '50%',
                    bottom: '15%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false}
                },
                yAxis: {
                    type: 'category',
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        color: '#fff',
                        backgroundColor: '#A34FFA',
                        borderRadius: 3,
                        margin: 0,
                        padding: [1, 3, 1, 3]
                    },
                    inverse: true,
                    data: ["范杰", "李宇飞", "杨乐", "王储", "刘孟萌","沙治宇", "梁健彬", "杨铭", "马利媛",  '沈明京']
                },
                angleAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#172E6E'
                        }
                    },
                    startAngle: 135,
                    axisLabel: {
                        color: '#04E8EB',
                        fontSize: 10
                    },
                    axisTick: {show: false},
                    data: ['航线','定检', '航材','技术管理', '可靠性管理', '发动机管理','附件监控'],
                    z: 10
                },
                radiusAxis: {
                    splitLine: {
                        lineStyle: {
                            color: '#172E6E'
                        }
                    },
                    axisTick: {show: false},
                    axisLabel: {show: false},
                    axisLine: {
                        show: false
                    }
                },
                polar: {
                    center: ['75%', '55%'],
                    radius: "65%",
                },
                series: [
                    {
                        name: '航线',
                        type: 'bar',
                        stack: '经验值',
                        barWidth: 8,
                        itemStyle: {
                            color: '#5304EC',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,

                                position: 'insideRight'
                            }
                        },
                        data: [10,20,20,0,0,0,0,20,0,10]
                    },
                    {
                        name: '定检',
                        type: 'bar',
                        stack: '经验值',
                        barWidth: 8,
                        itemStyle: {
                            color: '#6829EE',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [0,0,0,20,20,20,0,0,0,0]
                    },
                    {
                        name: '航材',
                        type: 'bar',
                        stack: '经验值',
                        barWidth: 8,
                        itemStyle: {
                            color: '#8040ED',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [0,0,0,0,0,0,20,0,0,0]
                    },
                    {
                        name: '技术管理',
                        type: 'bar',
                        barWidth: 8,
                        stack: '经验值',
                        itemStyle: {
                            color: '#9D50EC',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [20,20,20,20,30,0,0,20,0,0]
                    },
                    {
                        name: '可靠性管理',
                        type: 'bar',
                        barWidth: 8,
                        stack: '经验值',
                        itemStyle: {
                            color: '#A77BDE',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [0,0,0,0,0,0,0,0,20,0]
                    },
                    {
                        name: '发动机管理',
                        type: 'bar',
                        barWidth: 8,
                        stack: '经验值',
                        itemStyle: {
                            color: '#A77BDE',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [0,0,0,0,0,0,20,0,0,0]
                    },
                    {
                        name: '附件监控',
                        type: 'bar',
                        barWidth: 8,
                        stack: '经验值',
                        itemStyle: {
                            color: '#A77BDE',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [0,0,20,0,0,0,0,0,0,0]
                    },
                    {
                        type: 'bar',
                        data: [5,4,2,6,2,2,2],
                        coordinateSystem: 'polar',
                        name: '经验值',
                        itemStyle: {
                            color: '#0AB9FE'
                        },
                        stack: 'a'
                    }, 
                    {
                        type: 'bar',
                        data: [5,4,2,6,2,2,2],
                        coordinateSystem: 'polar',
                        name: '人数',
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(104,18,147,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#1D2584' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        stack: 'a'
                    }

                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize()
            myChart.setOption(option);
        },
    },
    mounted() {
        this.setDeviceSafe();
    },
}
</script>

<style lang="less" scoped>
.deviceSafeRisk {
    height: 240%;
}
</style>
