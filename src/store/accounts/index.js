import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
    userId: null,
    userEmail: null,

    isLogged: false,

    isNotifyMeCryptoSent: false,
})

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
