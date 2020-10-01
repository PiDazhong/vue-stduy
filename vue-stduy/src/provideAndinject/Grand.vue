<template>
  <div>
    <span :style="{ color: grandColor}" @click="changeColor">this is grand</span>
    <child-com-a></child-com-a>
    <child-com-b></child-com-b>
  </div>
</template>

<script>
  import ChildComA from "./ChildComA";
  import ChildComB from "./ChildComB";
  export default {
    name: "Grand",
    components: {ChildComA, ChildComB},
    provide() {
      return {
        theme: this,      // 这种是响应式的
        color: {
          grandColor: this.grandColor   // 这种不是响应式的
        }
      }
    },
    data() {
      return {
        grandColor: '#52ff75'
      }
    },
    methods: {
      changeColor() {
        this.grandColor = this.grandColor === '#ff4a54' ?
                      '#52ff75' : '#ff4a54'
      }
    }
  }
</script>

<style scoped>

</style>
