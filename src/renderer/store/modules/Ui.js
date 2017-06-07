const state = {
  layoutStyle: {
    pageLayout: 'default',
    changed: false
  }
}

const getters = {
  pageLayoutStyle: state => state.layoutStyle.pageLayout,
  changedLayoutStyle: state => state.layoutStyle.changed
}

const mutations = {
  CHANGE_LAYOUT (state, value) {
    state.layoutStyle.layout = value
    state.layoutStyle.changed = true
  },
  SET_DEFAULT_LAYOUT (state) {
    state.layoutStyle.layout = 'default'
    state.layoutStyle.changed = false
  }
}

export default {
  state,
  getters,
  mutations
}
