import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
    isNotifyMeCryptoSent: false,
    userId: null,
    userEmail: null,
})

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
