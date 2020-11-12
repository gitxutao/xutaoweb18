<template>
    <Layout>
        <Content>
            <Card :style="{minHeight:'300px'}">
                <div id="myChart"></div>
            </Card>
        </Content>
    </Layout>
</template>

<script>
    export default {
        mounted () {
            // 调用绘制图表的方法
            this.draw();
        },
        methods: {
            draw () {
                // 实例化echarts对象
                let myChartDrawer = this.$echarts.init(document.getElementById('myChart'))

                // 绘制条形图
                var option = {
                    title: {
                        text: '地区点位、设备核对进度',
                        top: 5,
                        left: 'center'
                    },
                    legend: {
                        data: ['衣服', '帽子'],
                        top: 30
                    },
                    // X轴
                    xAxis: {
                        data: [
                            '一月', '二月', '三月', '四月', '五月'
                        ]
                    },
                    // Y轴
                    yAxis: {},
                    // 数据
                    series: [
                        {
                            name: '衣服',
                            type: 'bar',
                            data: [120, 100, 440, 320, 150]
                        },
                        {
                            name: '帽子',
                            type: 'bar',
                            data: [200, 120, 240, 330, 170]
                        }
                        /*{
                            name: 'bar',
                            type: 'line',
                            data: [120, 200, 240, 260, 300]
                        },
                        {
                            name: 'bar',
                            type: 'line',
                            data: [120, 200, 300, 140, 260]
                        }*/
                    ]
                };

                myChartDrawer.setOption(option);
            }
        }
    }
</script>

<style scoped>
    #myChart {
        width: 70%;
        min-height: 300px;
        clear: both;
        box-sizing: border-box;
        margin: 30px auto;
    }
</style>