const state = {
  sideDrawerOpen: false
}

const getters = {
  sideDrawerOpenState: state => state.sideDrawerOpen
}

const mutations = {
  'TOGGLE_SIDE_DRAWER' (state) {
    state.sideDrawerOpen = !state.sideDrawerOpen
  },
  'SET_SIDE_DRAWER_STATE' (state, value) {
    state.sideDrawerOpen = value
  }
}

const actions = {
  toggleSideDrawer ({ commit }) {
    commit('TOGGLE_SIDE_DRAWER')
  },
  setSideDrawerState ({ commit }, value) {
    commit('SET_SIDE_DRAWER_STATE', value)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
