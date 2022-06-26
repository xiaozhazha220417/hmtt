// 项目初始化包
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vant 组件包
import Vant from 'vant'
import 'vant/lib/index.css'
// 响应式第三方包
import 'amfe-flexible'
// 导入字体图标
import '@/styles/icon.less'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
