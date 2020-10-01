<template>
  <div>
    <progress-bar></progress-bar>
    <tooltip></tooltip>
    <input v-focus></input>
    <div v-has="['another','admin']">测试权限控制</div>
    <childcom>
      {{user.name}}
    </childcom>
    <base-layout>
      <template v-slot:header>
        <h1>this is header</h1>
      </template>
      <p>this is main</p>
      <p>this is main two</p>
      <!--<template v-slot>
        <p>this is main default</p>
      </template>-->
      <template v-slot:footer>
        <h1>this is footer</h1>
      </template>
    </base-layout>
    <slot-prop>
      <template v-slot:default="slotProps">
        这是用来 父组件拿到子组件的数据：
        {{slotProps.slotData.name}}
      </template>
    </slot-prop>
    <slot-prop>
      <template v-slot:default="{slotData = { undefinedKey : 'nothing' }}">
        这是用来 父组件拿到子组件的数据：(只有slotData = null时，undefinedKey才会生效)
        {{slotData.age}} + {{slotData.undefinedKey}}
      </template>
    </slot-prop>
    <slot-prop>
      <template v-slot:default="{slotData : user}">
        这是用来 父组件拿到子组件的数据：
        {{user.nums}}
      </template>
    </slot-prop>
    <slot-prop>
      <template #default="{slotData : user}">
        这是用来 父组件拿到子组件的数据：现在可用 # 来代替 v-solt:
        {{user.nums}}
      </template>
    </slot-prop>
    <todo-list>
      <template v-slot:todo="{ todo }">
        <span v-if="todo.id > 0">√</span>
        {{todo.text}}
      </template>
    </todo-list>
  </div>
</template>

<script>
  import childcom from './childcom'
  import BaseLayout from './BaseLayout'
  import SlotProp from './SlotProp'
  import TodoList from './TodoList'
  export default {
    name: "index",
    components: {childcom, BaseLayout, SlotProp, TodoList},
    data() {
      return {
        user: {
          name: 'xiaoming',
          age: 24,
          nums: 999
        },
      }
    },
    mounted() {
      console.log(this.$route.meta)
    }
  }
</script>

<style scoped>

</style>
