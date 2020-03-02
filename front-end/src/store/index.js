import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import user from './modules/user'
Vue.use(Vuex);
export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    user
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})
/*
export default function (/!* { ssrContext } *!/) {
  const Store = new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
      user
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });
  return Store
}*/
