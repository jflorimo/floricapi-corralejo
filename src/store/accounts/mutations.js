import { SET_NOTIFY_ME_CRYPTO_SENT } from './types'

export default {
    [SET_NOTIFY_ME_CRYPTO_SENT] (state, boolValue) {
        state.isNotifyMeCryptoSent = boolValue
    }
}
