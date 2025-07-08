// @ts-nocheck
import * as Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {}
  },
  // mutations: {


  //   setAuth(state, auth) {
  //     state.auth = auth;
  //   }

  // },
  getters: {
    auth: state => { return state.auth }
  },
  actions: {
  },
  modules: {
  }
})
