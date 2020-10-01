<template>
  <div>
    <button v-for="tab in tabs" :key="tab"
            :class="['tab-button', {active: currentTab === tab}]"
            @click.stop="btnClick(tab)">
      {{tab}}
    </button>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
  import TabDataList from "./TabDataList";
  import TabNoData from "./TabNoData";
  export default {
    name: "index",
    components: {TabDataList,TabNoData},
    data() {
      return {
        currentTab: 'data-list',
        tabs: ['data-list','no-data']
      }
    },
    computed: {
      currentTabComponent() {
        return `tab-${this.currentTab}`
      }
    },
    methods: {
      btnClick(tab) {
        console.log(this.$route.query)
        console.log(this.$route)
        console.log(this.$router)
        this.currentTab = tab
      }
    }
  }
</script>

<style scoped>
.active {
  background: #a8dbff;
}
</style>
