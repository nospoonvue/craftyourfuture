
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'ENG',
    labels: null
  },
  mutations: {
    setLanguage(state, lang)
      {
        this.state.language = lang;
      }
  },
  actions: {
  },
  modules: {
  }
})

/*
import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'dutch'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
*/