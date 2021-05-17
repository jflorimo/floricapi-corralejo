import axios from 'axios'
import { status } from '../const.js'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const REGISTER = MILAGRO_URL + "auth/users/"

const state = {
    userId: null,
    email: null,

    register_errored: false,
    email_already_exists: false

}

const mutations = {
    set (state, [variable, value]) {
        state[variable] = value
    },
    set_user_data(state, [id, email]){
        state["userId"] = id
        state["email"] = email
        state["register_errored"] = false
        state["email_already_exists"] = false
    },
    set_email_already_exists(state, value){ state["email_already_exists"] = value }
}

const getters = {

}

const actions = {
    register ({commit}, payload) {
        let email = payload["email"]
        let password = payload["password"]

        return axios.post(REGISTER, { email: email, password: password }).then(
            r => {
                if (r.status === status.HTTP_201_CREATED) {
                    commit("set_user_data", [r.data["id"], r.data["email"]])
                }
                else {
                    commit("set", ["register_errored", true])
                }
            }
        ).catch(error => {
            if ("email" in error.response.data) {
                if (error.response.data["email"][0] === "user with this email address already exists.") {
                    commit("set", ["email_already_exists", true])
                }
            }
            commit("set", ["register_errored", true])
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
