import {SET_CRYPTO_LIST} from './types'

export default {
    [SET_CRYPTO_LIST] (state, data) {
        state.crypto_list = data
    },
}
