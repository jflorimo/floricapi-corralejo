import { SET_NOTIFY_ME_CRYPTO_SENT, SET_REGISTER_DATA, SET_IS_LOGGED } from './types'

export default {
    [SET_NOTIFY_ME_CRYPTO_SENT] (state, boolValue) {
        state.isNotifyMeCryptoSent = boolValue
    },
    [SET_REGISTER_DATA] (state, [userId, userEmail]) {
        state.userId = userId
        state.userEmail = userEmail
    },
    [SET_IS_LOGGED] (state, boolValue) {
        state.isLogged = boolValue
    }
}
