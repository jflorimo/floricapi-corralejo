import {get_crypto_list_summary, get_crypto_detail} from '@/services/crypto.js'
import {SET_CRYPTO_LIST} from "./types";


export default {
    async fetch_crypto_summary({commit, getters}) {
        return await get_crypto_list_summary().then((r) => {
            commit(SET_CRYPTO_LIST, r.data)
        })
    },
    async fetch_crypto_detail({commit, getters}, fcid){
        return await get_crypto_detail(fcid)
    },
}

