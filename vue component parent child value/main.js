import Vue from 'vue'
import App from './App.vue'
import Serve from './serve.vue'

Vue.config.productionTip = false
Vue.component("app-serve", Serve)    //注册全局组件

new Vue({
  render: h => h(App),
}).$mount('#app')
