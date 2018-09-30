import Vue from 'vue'
import VueExt from '@/plugins'
import IndexView from './index.vue'

import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

Vue.use(VueExt);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(IndexView),
  mounted () {
    window._vue = this
  }
})

