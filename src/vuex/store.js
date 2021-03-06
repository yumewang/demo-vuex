import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.options.root = 'https://cnodejs.org'
Vue.http.options.emulateJSON = true

const state = {
  currentPage: null,
  currentId: null,
  formDetail: {},
  user: {
    name: 'Yume Wang'
  },
  topics: []
}

const mutations = {
  SETCURRENTPAGE (state, currentPage) {
    state.currentPage = currentPage
  },
  SETCURRENTID (state, currentId) {
    console.log(currentId)
    state.currentId = currentId
  },
  GETDETAILBYID (state, currentId) {
    Vue.http.get('http://vuetable.ratiw.net/api/users?sort=&page=1&per_page=10').then(response => {
      if (response.ok) {
        state.formDetail = response.body.data[Math.floor((Math.random() * 10) + 1)]
      }
    })
  },
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
  },
  GETTOPICS (state) {
    Vue.http.get('api/v1/topics').then(response => {
      if (response.ok) {
        state.topics = response.body.data
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
