import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import { configRouter } from './router-config'
import App from './App'
import store from './vuex/store'

import Vuetable from 'vuetable/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable/src/components/VuetablePagination.vue'
import VuetablePaginationDropdown from 'vuetable/src/components/VuetablePaginationDropdown.vue'
import CustomAction from './components/CustomAction'

Vue.use(VueRouter)

Vue.config.debug = true
Vue.config.devtools = true
Vue.config.warnExpressionErrors = false

Vue.component('vuetable', Vuetable)
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown)
Vue.component('custom-action', CustomAction)

// Create Router
const router = new VueRouter({
  saveScrollPosition: true,
  transitionOnLoad: true
})

sync(store, router)

configRouter(router)

router.start(App, 'app')

window.router = router

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
