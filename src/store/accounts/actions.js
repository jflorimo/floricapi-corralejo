import {login, notifyMeCrypto, register} from '@/services/accounts.js'
import {SET_NOTIFY_ME_CRYPTO_SENT, SET_REGISTER_DATA} from "./types";

export default {
    async login({commit, getters}, data) {
        const response = await login(data).then((r) => {
            let token = r.data["auth_token"]
            window.$cookies.set("pooclinket", token)
        })
        return response
    },
    async register({commit, getters}, data) {
        return await register(data)
    },
    async notifyMeCrypto({commit, getters}, data) {
        return await notifyMeCrypto(data)
    },
    setNotifyMeCryptoSent ({ commit }, boolValue) {
        commit(SET_NOTIFY_ME_CRYPTO_SENT, boolValue)
    },
    setRegisterData({commit}, data) {
        commit(SET_REGISTER_DATA, data)
    }
}
