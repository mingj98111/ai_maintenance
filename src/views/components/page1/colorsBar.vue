<template>
    <div class="behaviorBar"></div>
</template>

<script>
export default {
    name: 'BarChart',
    methods: {
        setChart() {
            let option = {
                title: {
                    text: '年龄分布',
                    textStyle: {
                        color: '#75deef',
                        fontSize: 12,
                        fontWeight: 'normal'
                    },
                    top: '20%',
                    left: '40%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },
                grid: {
                    top: '25%',
                    left: '1%',
                    right: '4%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        interval: 0,
                        color: '#75deef',
                        fontSize: 9,
                        showMinLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#1a3c58',
                            width: 2
                        }
                    },
                    axisTick: { show: false },
                    data: ['25-30', '30-35', '35-40']
                },
                yAxis: [
                    {
                        type: 'value',
                        min: 0,
                        max: 10,
                        axisLabel: {
                            color: '#75deef',
                            fontSize: 12,
                            showMaxLabel: false,
                        },
                        name: '人数',
                        nameGap: -5,
                        nameTextStyle: {
                            color: '#75deef',
                            fontSize: 9,
                            align: 'right',
                            padding: [0, 0, 0, 0]
                        },
                        axisTick: {
                            length: 3
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        splitLine: { show: false }
                    }
                ],
                series: [
                    {
                        name: '人数',
                        type: 'bar',
                        barWidth: 25,
                        barGap: '-150%',
                        data: [
                            {
                                value: 2,
                                label: { show: true, position: 'top', color: '#75deef', fontSize: 10 },
                                itemStyle: { color: '#FF5733' } // 红色
                            },
                            {
                                value: 4,
                                label: { show: true, position: 'top', color: '#75deef', fontSize: 10 },
                                itemStyle: { color: '#33FF57' } // 绿色
                            },
                            {
                                value: 4,
                                label: { show: true, position: 'top', color: '#75deef', fontSize: 10 },
                                itemStyle: { color: '#3357FF' } // 蓝色
                            }
                        ]
                    },
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
    }
};
</script>

<style lang="less" scoped>
.behaviorBar {
    height: 80%;
}
</style>
