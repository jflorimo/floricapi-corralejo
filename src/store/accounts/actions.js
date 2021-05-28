import {login, logout, notifyMeCrypto, register, me} from '@/services/accounts.js'
import {SET_NOTIFY_ME_CRYPTO_SENT, SET_REGISTER_DATA, SET_IS_LOGGED} from "./types";
import {status} from "@/store/const";

const TOKEN_ID = "pooclinket"

export default {
    async login({commit, getters, dispatch}, data) {
        const response = await login(data).then((r) => {
            const token = r.data["auth_token"]
            window.$cookies.set(TOKEN_ID, token)
            dispatch("updateTokenValidity")
        })
        return response
    },
    async logout({commit, getters, dispatch}) {
        const token = window.$cookies.get(TOKEN_ID)
        await logout(token)
        window.$cookies.remove(TOKEN_ID)
        commit(SET_IS_LOGGED, false)
        commit(SET_REGISTER_DATA, [null, null])
    },
    async register({commit, getters}, data) {
        return await register(data)
    },
    async me({commit, getters}) {
        const token = window.$cookies.get(TOKEN_ID)
        const response = await me(token).then((r) => {
            if (r.status === status.HTTP_200_OK) {
                commit(SET_IS_LOGGED, true)
                commit(SET_REGISTER_DATA, [r.data["id"], r.data["email"]])
            }
            else
                return commit(SET_IS_LOGGED, false)
        }).catch(
            () => {commit(SET_IS_LOGGED, false)}
        )
        return response
    },
    async notifyMeCrypto({commit, getters}, data) {
        return await notifyMeCrypto(data)
    },
    setNotifyMeCryptoSent ({ commit }, boolValue) {
        commit(SET_NOTIFY_ME_CRYPTO_SENT, boolValue)
    },
    setRegisterData({commit}, data) {
        commit(SET_REGISTER_DATA, data)
    },
    updateTokenValidity({commit, getters, dispatch}){
        const token = window.$cookies.get(TOKEN_ID)
        if (!token)
            commit(SET_IS_LOGGED, false)
        else {
            dispatch("me")
        }
    }
}
