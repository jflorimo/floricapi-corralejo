import axios from 'axios'
import { status } from './const.js'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const ADD_NOTIFY_ME_CRYPTO = MILAGRO_URL + "me/notify/crypto"

const state = {}

const mutations = {
  set (state, [variable, value]) {
    state[variable] = value
  },
}

const getters = {}

const actions = {
  post_notify_me_crypto (email) {
    const data = { email: email }
    axios.post(ADD_NOTIFY_ME_CRYPTO, data)
      .then(r => {return r.status === status.HTTP_201_CREATED});
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
