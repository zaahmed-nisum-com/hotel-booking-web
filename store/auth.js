const state = () => ({
  auth: { isLogin: false, token: '', refreshToken: '' },
})

const getter = () => {}

const actions = {
  async login({ commit, data }) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      if (response.status === 200) {
        commit('loginMutation', {
          isLogin: true,
          token: 'token',
          refreshToken: 'refreshToken',
        })
      }
    } catch (error) {}
  },

  // registration action
  async registration({ commit, data }) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      if (response.status === 200) {
        commit('authMutation', {
          isLogin: true,
          token: 'token',
          refreshToken: 'refreshToken',
        })
        this.$router.push('/home')
      }
    } catch (error) {}
  },
}

const mutations = {
  authMutation: (state, data) => {
    state.auth = { isLogin: true, token: 'token', refreshToken: 'refreshToken' }
    console.log(state)
    console.log(data)
  },
}

export default {
  state,
  getter,
  actions,
  mutations,
}
