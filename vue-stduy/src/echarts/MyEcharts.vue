<template>
    <div ref="chart" style="height: 300px;width: 400px"></div>
</template>

<script>
  import echarts from "echarts";
  export default {
    name: "MyEcharts",
    props:['chartData'],
    data() {
      return {
        dom: null
      }
    },
    computed: {

    },
    mounted() {
      this.$nextTick(() => {
        this.drawPie('echarts', this.chartData)
      })
    },
    watch: {
      'chartData': {
        deep: true,
        handler(newV, oldV){
          console.log(JSON.stringify(newV))
          this.drawPie('echarts', newV)
        }
      }
    },
    methods: {
      drawPie(id, data) {
        this.dom = this.$refs.chart
        this.charts = echarts.init(this.dom)
        this.charts.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: data.opinion
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'blod'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: data.opinionData
            }
          ]
        })
      },
      closeEchart() {
        this.charts.dispose()
        console.log(this.charts)
      },
    },
    beforeDestroy() {
      this.closeEchart()
    }
  }
</script>

<style scoped>

</style>
