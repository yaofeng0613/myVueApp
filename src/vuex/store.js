import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 20 
}

const mutations = {
  mutationsAddCount(state, n = 0 ) {
    console.log("reducer")
    return (state.count += n)
  },
  mutationsReduceCount(state, n = 0 ){
    return (state.count -= n)
  }
}

const actions = {
  actionAddCount(context, n = 0 ) {
    console.log("action")
    return context.commit('mutationsAddCount', n )
  },
  actionReduceCount( { commit }, n = 0 ) {
    return commit('mutationsReduceCount', n )
  }
}

const getters = {
  // getterCount( state ) {
  //   return (state.count += 10)
  // }
  done:(state) => {
    return state.count +=50
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})