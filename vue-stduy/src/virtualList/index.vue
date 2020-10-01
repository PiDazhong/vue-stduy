<template>
  <div>
    <button @click="createListData">生成消息列表</button>
    <virtual-list :data="listData" :item-height="40"></virtual-list>
  </div>
</template>

<script>
  import api from '../common/api/index'
  import test from "pi-test"
  const {install, VirtualList} = test
  // import VirtualList from "VirtualList"
  // import VirtualList from "./VirtualList";
  export default {
    name: "index",
    components: {VirtualList},
    data() {
      return {
        count: 1,
        listData:[]
      }
    },
    mounted() {
      this.getVirtualList(this.count)
    },
    methods: {
      async getVirtualList(id) {
        let res = await api.virtualList.getVirtualList(id)
        console.log(res.data)
        this.createListData(res.data)
      },
      getMoreData() {
        this.count++
        console.log(this.count)
        this.getVirtualList(this.count)
      },
      createListData(n) {
        for(let i = 1000 * (n-1); i < n * 1000; i++){
          this.listData.push({
            id: i,
            text: `这是第${i}条消息`,
            marginTop: 5,
            height: i % 3 === 0 ?
              60 : i % 5 === 0 ? 50 : 40
          })
        }
      }
    }
  }
</script>

<style scoped>
button {
  margin-bottom: 50px;
}
</style>
