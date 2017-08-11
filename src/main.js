import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.css'
import './css/material-icons.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
