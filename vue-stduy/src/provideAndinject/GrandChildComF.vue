<template>
  <span :style="{ color: theme.grandColor }">This is ChildComA</span>
</template>

<script>
  export default {
    name: "GrandChildComF",
    inject: {
      theme: {
        default: () => ({})
      }
    }
  }
</script>

<style scoped>

</style>
