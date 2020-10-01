<template>
  <div style="color: red">-----------</div>
</template>

<script>
  export default {
    name: "ProgressBar",
    props:{
      options: {
        type: Object,
        default() {
          return {
            succColor: 'rgb(76, 164, 214)',
            failColor: 'rgb(218, 26, 101)',
            position: 'top',
            transition: {
              widthSpeed: 200,
              opacitySpeed: 400,
              duration: 300  // 定义消失时间 ms
            },
            inverse: false,  // 进度条的加载方向
            thickness: 2  // 进度条的高度
          }
        }
      }
    },
    data() {
      return {
        procent: 0,
        show: false,
        canSuccess: true
      }
    },
    computed: {
      style() {
        const {succColor, failColor, location, transition, inverse, thickness}
          = this.options
        const {widthSpeed, opacitySpeed} = transition
        const {canSuccess, preset, show} = this

        const style = {
          backgroundColor : canSuccess ? succColor: failColor,
          opacity: show ? 1: 0
        }

        /*if(position !== 'top' || position !== 'bottom'){
          throw new Error('the wrong config of position')
        }

        style[position] = 0*/

        if(inverse){
          style.left = 0
        }else {
          style.right = 0
        }
        style.width = preset + '%'
        style.height = thickness + 'px'
        style.transition = `width ${widthSpeed}ms, opacity ${opacitySpeed}ms`

        return style
      }
    }
  }
</script>

<style scoped>
  .bar {
    position: fixed;
    z-index: 9999;
    opacity: 1;
  }
</style>

