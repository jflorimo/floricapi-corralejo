import axios from 'axios'

const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST
const LOGIN_URL = MILAGRO_URL + "auth/token/login"
const LOGOUT_URL = MILAGRO_URL + "auth/token/logout"
const REGISTER_URL = MILAGRO_URL + "auth/users/"
const USER_ME = MILAGRO_URL + "auth/users/me"
const NOTIFY_ME_CRYPTO_URL = MILAGRO_URL + "api/me/notify/crypto"

/*
login
data = { email: email, password: password }
 */
export const login = (data) => {
    return axios.post(LOGIN_URL, data)
}

/*
logout
 */
export const logout = (token) => {
    const headers = {headers: {"Authorization": `Token ${token}`}}
    return axios.post(LOGOUT_URL,{}, headers)
}

/*
Register
data = { email: email, password: password }
 */
export const register = (data) => {
    return axios.post(REGISTER_URL, data)
}

/*
/me
 */
export const me = (token) => {
    const headers = {headers: {"Authorization": `Token ${token}`}}
    return axios.get(USER_ME, headers)
}

/*
Notify me crypto updates
data = {email: email}
 */
export const notifyMeCrypto = (data) => {
    return axios.post(NOTIFY_ME_CRYPTO_URL, data)
}


