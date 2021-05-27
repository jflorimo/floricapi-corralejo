import {login, notifyMeCrypto, register, me} from '@/services/accounts.js'
import {SET_NOTIFY_ME_CRYPTO_SENT, SET_REGISTER_DATA, SET_IS_LOGGED} from "./types";
import {status} from "@/store/const";

export default {
    async login({commit, getters}, data) {
        const response = await login(data).then((r) => {
            console.log("POST LOGIN: " + r.status)
            const token = r.data["auth_token"]
            window.$cookies.set("pooclinket", token)
        })
        return response
    },
    async register({commit, getters}, data) {
        return await register(data)
    },
    async me({commit, getters}) {
        const token = window.$cookies.get("pooclinket")
        const response = await me(token)
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
        const token = window.$cookies.get("pooclinket")
        if (!token)
            commit(SET_IS_LOGGED, false)
        else {
            dispatch("me").then((r) => {
                if (r.status === status.HTTP_200_OK) {
                    commit(SET_IS_LOGGED, true)
                    commit(SET_REGISTER_DATA, [r.data["id"], r.data["email"]])
                }
                else
                    return commit(SET_IS_LOGGED, false)
            }).catch(
                () => {commit(SET_IS_LOGGED, false)}
            )
        }
    }
}
