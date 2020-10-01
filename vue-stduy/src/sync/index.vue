<template>
  <div>
    <child-com :real-data.sync="realData" style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;"></child-com>
    <button @click="changeRealData">改变</button>
  </div>
</template>

<script>
  import Vue from 'vue'

  Vue.component('child-com', {
    template:
      `
      <div>
        <p>默认值是{{realData}}</p>
        <button @click.stop="change">change</button>
      </div>
    `,
    props: ['realData'],
    methods: {
      change() {
        this.$emit('update:real-data',1)
      }
    }
  })
  export default {
    name: "index",
    data() {
      return {
        realData: 0,
      }
    },
    methods: {
      changeRealData() {
        this.realData = this.realData == 0 ? 100 : 0;
      }
    }
  }
</script>

<style scoped>

</style>
