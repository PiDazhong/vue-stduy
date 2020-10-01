<template>
  <div>
    <div v-for="item in dataList" :key="item.id">
      {{item.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        dataList: []
      }
    },
    mounted() {
      let num = 1
      this.addData(num)
      let timer = setInterval(() => {
        this.addData(++num)
      }, 2 * 1000)
      this.$once('hook:beforeDestroy',function () {
        clearInterval(timer)
        console.log('清除timer')
      })
    },
    methods: {
      addData(num) {
        let obj = {
          text: `这是第${num}条信息`,
          id: num
        }
        console.log(num)
        this.dataList.push(obj)
      }
    }
  }
</script>

<style scoped>

</style>
