import fakeData from '../fakedata/data.json'

const state = () => ({
  hotels: [],
})

const getters = {
  hotlesGetter: (state) => {
    return state.hotels
  },
}

const actions = {
  async getHotels({ commit }) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      if (response.status === 200) {
        commit('getHotelsMutation', fakeData.hotel)
      }
    } catch (error) {}
  },
}

const mutations = {
  getHotelsMutation: (state, data) => {
    state.hotels = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
