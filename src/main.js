// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/vuex/store"
import axios from "@/api/http"


//初始化css样式
import "@/assets/css/normalize.css"

// 引入饿了么UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入全局的指令和过滤器
import directives from "@/directives.js"
import "@/filters.js"
// 引入公共方法
import utils from "@/utils/utils.js"
Vue.prototype.$utils = utils

Vue.use(ElementUI);

Vue.config.productionTip = false

// 引入封装过的axios
import * as Allhttp from "@/api/Allhttp"
Vue.prototype.$http = Allhttp
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
