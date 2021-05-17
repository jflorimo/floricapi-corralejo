import axios from 'axios'
import { status } from '../const.js'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const LOGIN_URL = MILAGRO_URL + "auth/token/login"

const state = {
    login_errored: true,
}

const mutations = {
    set (state, [variable, value]) {
        state[variable] = value
    },
}

const getters = {

}

const actions = {
    login ({commit}, payload) {
        let email = payload["email"]
        let password = payload["password"]

        return axios.post(LOGIN_URL, { email: email, password: password }).then(
            r => {
                if (r.status === status.HTTP_200_OK) {
                    commit("set", ["login_errored", false])
                    let token = r.data["auth_token"]
                    window.$cookies.set("pooclinket", token)
                }
                else
                    commit("set", ["login_errored", true])
            }
        ).catch(() => {
            commit("set", ["login_errored", true])
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
