import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'



import coreui from './modules/coreui'
import capi_get from './modules/capi_get'
import capi_post from './modules/capi_post'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  modules: {
    coreui,
    capi_get,
    capi_post,
  }
})
