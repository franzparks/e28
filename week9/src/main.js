import Vue from 'vue'
import App from './App.vue'

Vue.config.recipeionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
