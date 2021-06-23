import Vuex from 'vuex'
import Vue from 'vue'
import authModuel from './auth'
import hotelsModule from './hotels'

Vue.use(Vuex)
export const store = new Vuex.Store({ module: { authModuel, hotelsModule } })
