import {login, register, notifyMeCrypto} from '@/services/accounts.js'
import {SET_NOTIFY_ME_CRYPTO_SENT} from "./types";

export default {
    async login({commit}, data) {
        const {data: login_data} = await login(data)
        return login_data
    },
    async register({commit}, data) {
        const {data: register_data} = await register(data)
        return register_data
    },
    async notifyMeCrypto({commit, getters}, data) {
        const response = await notifyMeCrypto(data)
        return response
    },
    setNotifyMeCryptoSent ({ commit }, boolValue) {
        commit(SET_NOTIFY_ME_CRYPTO_SENT, boolValue)
    },
}
