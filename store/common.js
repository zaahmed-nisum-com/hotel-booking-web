const state = () => ({
  theme: 'dark',
})

const getters = {
  commonGetter: (state) => {
    return state
  },
}

const actions = {
  async switchTheme({ commit, theme }) {
    try {
      await commit('switchThemeMutation', theme)
    } catch (error) {}
  },
}

const mutations = {
  switchThemeMutation: (state, data) => {
    state.theme = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
