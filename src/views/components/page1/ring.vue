<template>
    <div class="ring"></div>
</template>

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
            let option = {
                title: {
                    text: '【' + this.data.title + '】',
                    top: 15,
                    x: 'center',
                    textStyle: {
                        color: '#75deef',
                        fontSize: 14,
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c}",
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },
                series: [
                    {
                        name: this.data.title,
                        type: 'pie',
                        radius: ['40%', '60%'],
                        center: ['50%', '55%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                position: 'outside',
                                fontSize: 10,
                                color: '#75deef'
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                                length: 0,
                                length2: 0,
                                lineStyle: {
                                    color: '#303851'
                                }
                            }
                        },
                        data: this.data.data
                    }
                ]
            };
            let myChart = this.$echarts(this.$el);
            myChart.clear();
            myChart.resize()
            myChart.setOption(option);

        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.ring {
    width: 200%;
    height: 100%;
}
</style>