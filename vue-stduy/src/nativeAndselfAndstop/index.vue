<template>
  <div>
    <div @click.self="div1" class="div--1">
      最外层
      <div @click="div2" class="div--2">
        倒数第二层
        <div @click.stop="div3" class="div--3">
          最里层
          <native @click.native.stop="nativeClick"></native>
        </div>
      </div>
    </div>
    <div class="div--content">
      <div>vue @click.native 原生点击事件：</div>
      <div>
        1，给vue组件绑定事件时候，必须加上native ，不然不会生效（监听根元素的原生事件，使用 .native 修饰符）
      </div>
      <div>
        2，等同于在自组件中：子组件内部处理click事件然后向外发送click事件：$emit("click".fn)
      </div><br>
      <div>
        提交事件不再重载页面 <\form v-on:submit.prevent="onSubmit"><\/form>
      </div><br>
      <div>
        <div>添加事件监听器时使用事件捕获模式</div>
        <div>即元素自身触发的事件先在此处理，然后才交由内部元素进行处理</div>
        <\div v-on:click.capture="doThis">...<\/div>
      </div><br>
      <div>
        <div>只当在 event.target 是当前元素自身时触发处理函数</div>
        <div>即事件不是从内部元素触发的</div>
        <\div v-on:click.self="doThat">...<\/div>
      </div><br>
      <div>
        <div>滚动事件的默认行为 (即滚动行为) 将会立即触发</div>
        <div>而不会等待 `onScroll` 完成</div>
        <div>这其中包含 `event.preventDefault()` 的情况</div>
        <\div v-on:scroll.passive="onScroll">...<\/div>
      </div>

    </div>
  </div>

</template>

<script>
  import native from "./native";
  export default {
    name: "index",
    components: {native},
    methods: {
      clickStop() {

      },
      div1() {
        alert('div1')
      },
      div2() {
        alert('div2')
      },
      div3() {
        alert('div3')
      },
      nativeClick() {
        alert('nativeClick')
      }
    }
  }
</script>

<style scoped>
  .div--1 {
    width: 600px;
    height: 400px;
    background-color: #a8dbff;
  }

  .div--2 {
    width: 400px;
    height: 300px;
    background-color: #ff23e8;
  }

  .div--3 {
    width: 300px;
    height: 200px;
    background-color: #29ff73;
  }

  .div--content {
    margin-top: 100px;
    text-align: left;
  }
</style>
