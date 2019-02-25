import Vue from 'vue'
import App from './App.vue'
import parent from './components/parent-vue.vue'

Vue.config.productionTip = false
Vue.component("parent-vue", parent)

export const EventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
