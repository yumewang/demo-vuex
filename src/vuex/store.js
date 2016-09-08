import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.options.root = 'http://123.57.6.211:8080/api'
Vue.http.options.emulateJSON = true

const state = {
  user: {
    name: 'Yume Wang'
  }
}

const mutations = {
  GETUSERINFO (state) {
    Vue.http.post('users', {
      user_id: 3,
      access_token: 'DqFOaIfyzE5KtFPBc7A/ERIZhMAHqesJNMNw47Nef3HMlVwk9+FS5wL23+EYW5gtVGtJ0zx9yvW4qwu1OVl6GQ=='
    }).then(response => {
      if (response.ok) {
        window.sessionStorage.setItem('children', JSON.stringify(response.data.children[0]))
        state.user = response.data.children[0]
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
