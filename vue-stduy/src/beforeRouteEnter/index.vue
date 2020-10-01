<template>
  <div>
    <button @click="click">点击我</button>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        num: 1000
      }
    },
    beforeRouteEnter(to, from, next){
      console.log(to)
      console.log(from)
      console.log(next)
      next( vm => {
        vm.num = -100
        console.log(vm.num)
      })
      // next(false)  这句话会导致无法进入路由
    },
    methods: {
      click() {
        alert(this.num)
      }
    }
  }

</script>

<style scoped>

</style>
