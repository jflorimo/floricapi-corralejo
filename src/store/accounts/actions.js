import {login, register, notifyMeCrypto} from '@/services/accounts.js'

export default {
    async login({commit}, data) {
        const {data: login_data} = await login(data)
        return login_data
    },
    async register({commit}, data) {
        const {data: register_data} = await register(data)
        return register_data
    },
    async notifyMeCrypto({commit}, data) {
        console.log("notify_me_crypto")
        const response = await notifyMeCrypto(data)
        return response
    }
}
