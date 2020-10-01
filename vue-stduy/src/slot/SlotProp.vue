<template>
  <div>
    <slot v-bind:slot-data="slotData">
      {{slotData.nums}}
    </slot>
  </div>
</template>

<script>
  export default {
    name: "SlotProp",
    data() {
      return {
        slotData: {
          name: 'xiaojie',
          age: 28,
          nums: 999
        }
      }
    }
  }
</script>

<style scoped>

</style>
