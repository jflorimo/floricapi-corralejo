import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from "vue-axios"



import coreui from "./modules/coreui"
import capi_get from "./modules/capi_get"
import accounts from "@/store/accounts"

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  modules: {
    coreui,
    capi_get,
    accounts
  }
})

export default store
