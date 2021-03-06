import Vue from 'vue'
import Router from 'vue-router'


const _import = file => () => import('@/views/' + file + '.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  
      name: 'index',
      component: _import('index'),
      children:[
        {
          path: 'highSeaUser',
          alias:'/', //重命名，让进来加载默认为orderList
          component: _import('pages/user/highSeaUser')
        },
        {
          path: 'effectDistribution',
          component: _import('pages/user/effectDistribution')
        },
        {
          path: 'effectUndistribution',
          component: _import('pages/user/effectUndistribution')
        },
        {
          path: 'uneffect',
          component: _import('pages/user/uneffect')
        },

      ]
      
    }
  ]
})
