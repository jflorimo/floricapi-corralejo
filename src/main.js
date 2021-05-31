import 'core-js/stable'
import '@/plugins/buefy.js'
import babelPolyfill from 'babel-polyfill'

import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from '@/assets/icons/icons'
import i18n from '@/plugins/i18n'

import '@/plugins/vue_cookies'
import '@/plugins/cryptoicon'



Vue.use(babelPolyfill)
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  i18n,
  components: {
    App
  }
})

