<template>
  <div>
    <span :style="{ color: theme.grandColor }">This is ChildComA</span>
    <grand-child-com-e></grand-child-com-e>
    <grand-child-com-f></grand-child-com-f>
  </div>
</template>

<script>
  import GrandChildComE from "./GrandChildComE";
  import GrandChildComF from "./GrandChildComF";
  export default {
    name: "ChildComA",
    components: {GrandChildComE, GrandChildComF},
    inject: {
      theme: {
        default: () => ({})
      }
    }
  }
</script>

<style scoped>

</style>
