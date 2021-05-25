import axios from 'axios'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const LOGIN_URL = MILAGRO_URL + "auth/token/login"
const REGISTER_URL = MILAGRO_URL + "auth/users/"
const NOTIFY_ME_CRYPTO_URL = MILAGRO_URL + "api/me/notify/crypto"

/*
login
data = { email: email, password: password }
 */
export const login = (data) => {
    return axios.post(LOGIN_URL, data)
}

/*
Register
data = { email: email, password: password }
 */
export const register = (data) => {
    return axios.post(REGISTER_URL, data)
}

/*
Notify me crypto updates
data = {email: email}
 */
export const notifyMeCrypto = (data) => {
    return axios.post(NOTIFY_ME_CRYPTO_URL, data)
}
