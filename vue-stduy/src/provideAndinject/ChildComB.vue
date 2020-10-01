<template>
  <div>
    <span :style="{ color: color.grandColor }">This is ChildComB</span>
    <router-link to="/solt/:id=1111">to solt</router-link>
    <router-link to="/keepalive?name=xiaoming&nums=999">to keepalive</router-link>
  </div>
</template>

<script>
  export default {
    name: "ChildComB",
    inject: {
      color: {
        default: () => ({})
      }
    },
    mounted() {
      console.log('childB' + this.color)
    }
  }
</script>

<style scoped>

</style>
