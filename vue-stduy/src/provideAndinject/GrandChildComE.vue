<template>
  <span :style="{ color: theme.grandColor }">This is ChildComA</span>
</template>

<script>
  export default {
    name: "GrandChildComE",
    inject: {
      theme: {
        default: () => ({})
      }
    }
  }
</script>

<style scoped>

</style>
