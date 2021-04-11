
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: '',
    language: 'ENG',
    labels: null,
    loading: null,
    assignments:[],
    keId:1
  },
  mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},    
    setLanguage(state, lang)
      {
        this.state.language = lang;
        this.state.keId++;
      },
    addAssignment(state, cardId)
    {
      var cardIdFound = false;
      this.state.assignments.forEach(element => {
          if(element == cardId) 
          {
              cardIdFound = true;               
          }     

      });
      if(!cardIdFound)
      {
          this.state.assignments[this.state.assignments.length]= cardId;
          this.state.keId++;
      }
    },
    removeAssignment(state, cardId)
    {
      for (var i = this.state.assignments.length - 1; i >= 0; i--) {
        if (this.state.assignments[i] === cardId) {
          this.state.assignments.splice(i, 1);
        }
       }
       this.state.keId++;
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