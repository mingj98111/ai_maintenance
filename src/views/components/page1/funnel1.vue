<template>
    <div class="pieChart"></div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    methods: {
        setChart() {
            let option = {
                title: [
                    {
                        text: "【学历】",
                        left: '8%',
                        bottom: '6%',
                        textStyle: {
                            color: "#00ccff", // 中性字体颜色
                            fontSize: 14
                        }
                    },
                    {
                        text: "【专业情况】",
                        right: '7%',
                        bottom: '20%',
                        textStyle: {
                            color: "#00ccff", // 中性字体颜色
                            fontSize: 14
                        }
                    }
                ],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c}人 ({d}%)"
                },
                legend: {
                    data: [
                        { name: '本科', icon: 'circle' },
                        { name: '硕士', icon: 'circle' },
                        { name: '电子类', icon: 'circle' },
                        { name: '电气类', icon: 'circle' },
                        { name: '机电类', icon: 'circle' },
                    ],
                    left: "8%",
                    top: "10%",
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: '#00ccff', // 清晰的浅灰色
                        fontSize: 12
                    }
                },
                series: [
                    {
                        name: '【学历】',
                        type: 'pie',
                        radius: '35%',
                        center: ['20%', '60%'],
                        data: [
                            { value: 5, name: '本科' },
                            { value: 5, name: '硕士' },
                        ],
                        label: {
                            fontSize: 10,
                            color: '#00ccff' // 深灰色标签
                        },
                        labelLine: {
                            length: 15,
                            length2: 10,
                            lineStyle: {
                                color: '#00ccff' // 中性灰
                            }
                        },
                        itemStyle: {
                            color: function (params) {
                                const colorList = ['#AEDFF7', '#FFB3B3']; // 分别使用蓝和粉红
                                return colorList[params.dataIndex];
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    {
                        name: '【专业情况】',
                        type: 'pie',
                        radius: '25%',
                        center: ['75%', '50%'],
                        data: [
                            { value: 4, name: '电子类' },
                            { value: 1, name: '电气类' },
                            { value: 5, name: '机电类' },
                        ],
                        label: {
                            fontSize: 10,
                            color: '#00ccff' // 深灰色标签
                        },
                        labelLine: {
                            length: 15,
                            length2: 10,
                            lineStyle: {
                                color: '#00ccff' // 中性灰
                            }
                        },
                        itemStyle: {
                            color: function (params) {
                                const colorList = ['#FFC107', '#FF6F61', '#AED581']; // 分别使用亮黄、亮橙、淡绿
                                return colorList[params.dataIndex];
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize();
            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart();
    },
}
</script>

<style lang="less" scoped>
.pieChart {
    height: 100%;
    width: 100%;
    padding: 0 20px;
}
</style>
