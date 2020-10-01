<template>
  <div>
    <div style="float: left;width: 30%;line-height: 40px">
      <div v-for="temp in dataList"
           :key="temp.id"
           :class="{selected: selected === temp}"
           @click="selected = temp"
      >
        {{temp.title}}
      </div>
    </div>
    <div style="float:right;width:65%;border-left: aliceblue solid 2px">
      <div v-if="selected">
        <h1>{{selected.title}}</h1>
        <div v-html="selected.text"></div>
      </div>
      <div else>
        Click on a blog title to the left to view it.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DataList",
    data() {
      return {
        selected: {},
        dataList: [
          {
            id: 0,
            title: 'I am title one',
            text: 'I am Text one, I am Text one, I am Text one, I am Text one, I am Text one, I am Text one.'
          },
          {
            id: 1,
            title: 'I am title two',
            text: 'I am Text two, I am Text one, I am Text one, I am Text one, I am Text one, I am Text one.'
          },
          {
            id: 2,
            title: 'I am title three',
            text: 'I am Text three, I am Text one, I am Text one, I am Text one, I am Text one, I am Text one.'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.selected {
  color: #a8dbff;
}
</style>
