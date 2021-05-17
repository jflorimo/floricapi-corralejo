import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from "vue-axios"



import coreui from "./modules/coreui"
import capi_get from "./modules/capi_get"
import notify_me from "./accounts/notify_me"
import register from "./accounts/register"
import login from "./accounts/login"

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  modules: {
    coreui,
    capi_get,
    notify_me,
    register,
    login
  }
})
