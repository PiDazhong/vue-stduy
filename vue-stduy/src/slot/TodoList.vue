<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
        <slot name="todo" :todo="todo">
          {{todo.age}}
        </slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        todoList: [
          {
            age: 24,
            text: 'xiaoming',
            id: 0
          },
          {
            age: 28,
            text: 'xiaojie',
            id: 1
          },
          {
            age: 38,
            text: 'xiaohong',
            id: 2
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
