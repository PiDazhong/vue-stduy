import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sync from '@/sync/index'
import Slot from '@/slot/index'
import Keepalive from '@/keepalive/index'
import Grand from '@/provideAndinject/Grand'
import Echarts from '@/echarts/index'
import Dialog from '@/dialog/index'
import ClickEvent from '@/nativeAndselfAndstop/index'
import VirtualList from '@/virtualList/index'
import SetInterval from '@/setInterval/index'
import BeforeRouteEnter from '@/beforeRouteEnter/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sync',
      name: 'Sync',
      component: Sync
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot,
      meta: ['测试', 'meta']
    },
    {
      path: '/keepalive',
      name: 'Keepalive',
      component: Keepalive
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/grand',
      name: 'Grand',
      component: Grand
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/click',
      name: 'ClickEvent',
      component: ClickEvent
    },
    {
      path: '/virtualList',
      name: 'VirtualList',
      component: VirtualList
    },
    {
      path: '/setInterval',
      name: 'SetInterval',
      component: SetInterval
    },
    {
      path: '/beforeRouteEnter',
      name: 'BeforeRouteEnter',
      component: BeforeRouteEnter
    }
  ]
})
