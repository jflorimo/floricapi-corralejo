import axios from 'axios'
import { status } from './const.js'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const ADD_NOTIFY_ME_CRYPTO = MILAGRO_URL + "me/notify/crypto"

const state = {
  isNotifyMeSent: false,
}

const mutations = {
  set (state, [variable, value]) {
    state[variable] = value
  },
}

const getters = {

}

const actions = {
  post_notify_me_crypto ({commit}, email) {
    return axios.post(ADD_NOTIFY_ME_CRYPTO, { email: email }).then(
        r => {
          const bla = Boolean(r.status === status.HTTP_201_CREATED)
          console.log("THEN")
          console.log(bla)
          commit("set", ["isNotifyMeSent", (r.status === status.HTTP_201_CREATED)])
        }
    ).catch(() => {
        console.log("CATCH")
        commit("set", ["isNotifyMeSent", false])
    });
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
