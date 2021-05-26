import { SET_NOTIFY_ME_CRYPTO_SENT, SET_REGISTER_DATA } from './types'

export default {
    [SET_NOTIFY_ME_CRYPTO_SENT] (state, boolValue) {
        state.isNotifyMeCryptoSent = boolValue
    },
    [SET_REGISTER_DATA] (state, [userId, userEmail]) {
        state.userId = userId
        state.userEmail = userEmail
    }
}
