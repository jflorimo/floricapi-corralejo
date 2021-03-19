import axios from 'axios'

// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.xsrfCookieName = 'csrftoken'
const MILAGRO_URL = process.env.VUE_APP_MILAGRO_HOST

const state = {
  stock_list: [],
  indice_list: [],
  market_last_7_points: {}
}

const mutations = {
  set (state, [variable, value]) {
    state[variable] = value
  },
  setMarketLast7Points(state, [market_id, dates, values]) {
    state['market_last_7_points'][market_id] = {}
    state['market_last_7_points'][market_id]['date'] = dates
    state['market_last_7_points'][market_id]['value'] = values
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
  fetch_daily_market_points({ commit }, market_id) {
    const params = new URLSearchParams();
    params.append('market_id', market_id);
    params.append('aggregation', 'daily');
    params.append('start', '2020-09-08');
    params.append('end', '2020-11-08')
    return axios.get(MILAGRO_URL + 'market/price/', {params}).then(r => {
        commit('setMarketLast7Points', [market_id, r.data['date_list'], r.data['price_list']])
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
