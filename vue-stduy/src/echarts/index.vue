<template>
  <div>
    <div>
      <p>这是用来显示echarts图表的</p>
      <button @click="changeChart">改变</button>
      <button @click="closeChart">关闭</button>
    </div>
    <my-echarts ref="myChart" :chart-data="chartData"></my-echarts>
  </div>
</template>

<script>
  import MyEcharts from "./MyEcharts";
  export default {
    name: "index",
    components: {MyEcharts},
    data() {
      return {
        change: true,
        chartData: {},
        changeChartDataBefore: {
          opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
          opinionData:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ]
        },
        changeChartData: {
          opinion:['小明','小芳','小红','小张','小李'],
          opinionData:[
            {value:1000, name:'小明'},
            {value:320, name:'小芳'},
            {value:490, name:'小红'},
            {value:100, name:'小张'},
            {value:800, name:'小李'}
          ]
        }
      }
    },
    mounted() {
      this.chartData = this.changeChartDataBefore
    },
    methods: {
      changeChart() {
        this.chartData = this.change ?
          this.changeChartData : this.changeChartDataBefore
        this.change = !this.change
      },
      closeChart() {
        this.$refs.myChart.closeEchart()
      }
    }
  }
</script>

<style scoped>

</style>
