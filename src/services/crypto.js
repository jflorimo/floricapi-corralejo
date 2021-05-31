import axios from 'axios'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const CRYPTO_SUMMARY = MILAGRO_URL + "api/crypto/summary/"

/*
get_crypto_list_summary
 */
export const get_crypto_list_summary = () => {
    return axios.get(CRYPTO_SUMMARY)
}
