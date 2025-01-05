<template>
    <div class="chart"></div>
</template>

<style lang="less" scoped>
.chart {
    height: 100%;
}
</style>

<script>
export default {
    name: '',
    props: {
        data: Object
    },
    data() {
        return {}
    },
    methods: {
    setChart() {
        let seriesData = [];
        this.data.data.forEach(item => {
            seriesData.push({
                value: item.value,
                name: item.name,
                symbol: 'none',
                symbolSize: 5,
                itemStyle: {
                    color: item.color
                },
                lineStyle: {
                    normal: {
                        color: item.color,
                        width: 1,
                    },
                    emphasis: {
                        width: 2,
                    }
                }
            });
        });

        let option = {
            tooltip: {
                trigger: 'item',
                axisPointer: { type: 'shadow' },
            },
            title: {
                text: this.data.title,
                top: "10%",
                left: 20,
                textStyle: {
                    color: '#67C3D6',
                    fontSize: 18,
                }
            },
            legend: {
                data: this.data.data.map(item => {
                    return { name: item.name, icon: 'circle' };
                }),
                left: "center",
                top: this.data.position[1],
                itemWidth: 7,
                itemHeight: 7,
                textStyle: {
                    color: '#67C3D6',
                    fontSize: 15
                }
            },
            radar: {
                indicator: this.data.indicator,
                center: this.data.center,
                radius: "78%",
                startAngle: 90,
                splitNumber: 6,
                shape: 'circle',
                name: {
                    textStyle: {
                        color: '#0DECF0',
                        fontSize: 15,
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
            series: {
                name: '雷达图',
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
                    fontSize: 12,
                    formatter: function (params) {
                        return params.value;
                    }
                },
                data: seriesData
            }
        };

        let myChart = this.$echarts(this.$el);

        myChart.clear();
        myChart.resize({
            width: this.$el.offsetWidth,
            height: this.$el.offsetHeight
        });
        myChart.setOption(option);
    }
},

    mounted() {
        this.setChart();
    },
}
</script>

