import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import coreui from './modules/coreui'
import capi from './modules/capi'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  modules: {
    coreui,
    capi
  }
})
