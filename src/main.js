import Vue from 'vue'
import App from './App'

import Vuetable from 'vuetable/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable/src/components/VuetablePagination.vue'
import VuetablePaginationDropdown from 'vuetable/src/components/VuetablePaginationDropdown.vue'
import CustomAction from './components/CustomAction'

Vue.component('vuetable', Vuetable)
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown)
Vue.component('custom-action', CustomAction)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
