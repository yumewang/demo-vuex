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

const tableColumns = {
  title: {
    issues: '期号',
    subjects: '话题',
    sessions: '专家解密',
    'recommend_articles': '相关推荐',
    comments: '评论'
  }
}
// Vue Breadcrumbs source code, from: https://github.com/samturrell/vue-breadcrumbs
export default function VueBreadcrumbs (Vue, options = {}) {
  Object.defineProperties(Vue.prototype, {
    $breadcrumbs: {
      get: function () {
        var crumbs = []
        for (var i = 0; i < this.$route.matched.length; i++) {
          if (this.$route.matched[i].handler && this.$route.matched[i].handler.breadcrumb) {
            let currentBread = this.$route.matched[i].handler.breadcrumb
            if (currentBread === 'List' || /全部/.test(currentBread)) {
              this.$route.matched[i].handler.breadcrumb = '全部' + tableColumns.title[store.state.currentPage]
            }
            crumbs.push(this.$route.matched[i])
          }
        }
        return crumbs
      }
    }
  })
  Vue.component('breadcrumbs', {
    template: '<nav v-if="$breadcrumbs.length"> <ul class="breadcrumb"> <li v-for="(i, crumb) in $breadcrumbs"> <a v-link="crumb.handler">{{ crumb.handler.breadcrumb }}</a> </li> </ul> </nav>'
  })
}

Vue.use(VueRouter)
Vue.use(VueBreadcrumbs)

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
