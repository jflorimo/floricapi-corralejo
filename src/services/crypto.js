import axios from 'axios'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const CRYPTO_SUMMARY = MILAGRO_URL + "api/crypto/summary/"
const CRYPTO_DETAIL = MILAGRO_URL + "api/crypto/detail/"

/*
get_crypto_list_summary
 */
export const get_crypto_list_summary = () => {
    return axios.get(CRYPTO_SUMMARY)
}

/*
get_crypto_detail
 */
export const get_crypto_detail = (fcid) => {
    const url = `${CRYPTO_DETAIL}${fcid}/`
    return axios.get(url)
}
