import axios from 'axios'

// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.xsrfCookieName = 'csrftoken'
const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST

const state = {
  stock_list: [],
  indice_list: [],
  stock_last_7_days_close: {}
}

const mutations = {
  set (state, [variable, value]) {
    state[variable] = value
  },
  setStockLast7DaysClose(state, [stock_id, values, min, max]) {
    state['stock_last_7_days_close'][stock_id] = {}
    state['stock_last_7_days_close'][stock_id]['price_list'] = values
    state['stock_last_7_days_close'][stock_id]['min'] = min
    state['stock_last_7_days_close'][stock_id]['max'] = max
  }
}

const getters = {}

const actions = {
  fetch_stocks ({ commit }) {
    return axios.get(MILAGRO_URL + 'stock/summary/')
      .then(r => {
        commit('set', ['stock_list', r.data])
        return r.data
      })
  },
  fetch_indices ({ commit }) {
    return axios.get(MILAGRO_URL + 'indice/summary/')
      .then(r => {
        commit('set', ['indice_list', r.data])
        return r.data
      })
  },
  fetch_graph({ commit }, stock_id) {
    const params = new URLSearchParams();
    params.append('stock_id', stock_id);
    params.append('aggregation', '_15m');
    return axios.get(MILAGRO_URL + 'graph/', {params})
      .then(r => {
        commit('setStockLast7DaysClose', [stock_id, r.data['price_list'], r.data["min"], r.data["max"]])
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
