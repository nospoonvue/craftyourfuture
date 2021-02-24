import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios'
import router from './router'
import store from './store'
import VueMarkdown from 'vue-markdown'
//import vueConfig from '../vue.config'

Vue.config.productionTip = false
//Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbzFu9XjeWN1BKMEYe6kNv16jQhiatpqBTFj0mlEfg/exec"
//Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbwML4WonnuCnyHdCw2egjIBnvllhJH9Sb4PLapuGe73qwHcv6MQ4etu8g/exec"
Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbx5GLrXhpdBh2avqiQLvHYSs5TmPTPbK_tAGu5zeUoL2GdJ3hKbsKLs/exec"
Vue.prototype.$appName = "CraftYourFuture"


new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    VueMarkdown
  },
  created()
  {
    

 
  },
  mounted()
  {

   
  }
}).$mount('#app')
