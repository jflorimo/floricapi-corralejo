import axios from 'axios'

// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.xsrfCookieName = 'csrftoken'
const URL = 'http://192.168.1.46/api/'

const state = {
  market_list: [],
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
  fetch_markets ({ commit }) {
    return axios.get(URL + 'market/summary/')
      .then(r => {
        commit('set', ['market_list', r.data])
        return r.data
      })
  },
  fetch_daily_market_points({ commit }, market_id) {
    const params = new URLSearchParams();
    params.append('market_id', market_id);
    params.append('aggregation', 'daily');
    params.append('start', '2020-09-08');
    params.append('end', '2020-11-08')
    return axios.get(URL + 'market/price/', {params}).then(r => {
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
