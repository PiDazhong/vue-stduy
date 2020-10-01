<template>
  <div>
    <div ref="container" class="list-view"
         @scroll="throttleTest">
      <div class="list-view-phantom" :style="{ height: contentHeight + 'px' }">
      </div>
      <div ref="content" class="list-view-content">
        <div class="list-view-item" :style="{ height: item.height + 'px',
          'margin-top' : item.marginTop + 'px' }"
             v-for="item in visibleData">
          {{item.text}}
        </div>
      </div>
    </div>
    <button @click="getMoreData">加一</button>
  </div>
</template>

<script>
  export default {
    name: "VirtualList",
    props: {
      data: {
        type: Array,
        required: true
      },
      itemHeight: {
        type: Number,
        default: 30
      }
    },
    data() {
      return {
        visibleData: []
      }
    },
    computed: {
      contentHeight() {
        let sum = this.data.reduce((prev, cur) => {
          return prev + cur.height + cur.marginTop
        }, 0)
        return sum
        // return this.data.length * this.itemHeight + 'px'
      }
    },
    mounted() {
      this.updateVisibleData()
      // this.$refs.container.addEventListener('scroll', this.handleScroll, false)
    },
    watch: {
      'data' : {
        deep: true,
        handler(newV, oldV) {
          this.updateVisibleData()
        }
      }
    },
    methods: {
      getMoreData() {
        this.$emit('get-more-data')
      },
      updateVisibleData(scrollTop) {
        /*scrollTop = scrollTop || 0
        const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight)
        const start = Math.floor(scrollTop / this.itemHeight)
        const end = start + visibleCount
        console.log(scrollTop, start, end)
        this.visibleData = this.data.slice(start, end)
        this.$refs.content.style.webkitTransform =
          `translate3d(0, ${start * this.itemHeight}px, 0)`*/

        scrollTop = scrollTop || 0
        const start = this.findNearestItemIndex(scrollTop)
        const end = this.findNearestItemIndex(scrollTop + this.$el.clientHeight)
        this.visibleData = this.data.slice(start, Math.min(end + 1, this.data.length))
        this.$refs.content.style.webkitTransform =
          `translate3d(0, ${this.getItemSizeAndOffset(start)}px, 0)`

        // this.getMoreData()
      },
      debounceTest(e) {
        this.debounce(this.handleScroll(e), 2000)
      },
      debounce(func, wait, immediate){
        let timeout;
        return function() {
          let context = this, args = arguments;
          let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          let callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      },
      throttleTest(e){
        this.throttle(this.handleScroll(e), 500, 2000)
      },
      throttle(func, wait, mustRun) {
        let timeout,
          startTime = new Date();

        return function() {
          let context = this,
            args = arguments,
            curTime = new Date();

          clearTimeout(timeout);
          // 如果达到了规定的触发时间间隔，触发 handler
          if(curTime - startTime >= mustRun){
            func.apply(context,args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
          }else{
            timeout = setTimeout(func, wait);
          }
        };
      },
      handleScroll(e) {
        const scrollTop = e.target.scrollTop
        this.updateVisibleData(scrollTop)
      },
      findNearestItemIndex(scrollTop){
        let total = 0
        for(let i = 0, j = this.data.length; i < j; i++){
          total += (this.data[i].height + this.data[i].marginTop)
          if(total >= scrollTop || i === j - 1){
            return i
          }
        }
        return 0
      },
      getItemSizeAndOffset(index){
        let total = 0
        for(let i = 0, j = Math.min(index, this.data.length-1); i <= j; i++){
          if(i === j){
            return total
          }
          total += (this.data[i].height + this.data[i].marginTop)
        }
        return 0
      }
    }
  }
</script>

<style scoped>
  .list-view {
    height: 400px;
    overflow: auto;
    position: relative;
    border: 1px solid blueviolet;
    margin-bottom: 30px;
  }

  .list-view-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .list-view-content {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
  }

  .list-view-item {
    padding: 5px;
    color: #a8dbff;
    line-height: 30px;
    box-sizing: border-box;
    border: 1px solid pink;
  }
</style>
