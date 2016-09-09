import Vue from 'vue'
import App from './App'

import Vuetable from 'vuetable/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable/src/components/VuetablePagination.vue'
import VuetablePaginationDropdown from 'vuetable/src/components/VuetablePaginationDropdown.vue'

Vue.component('vuetable', Vuetable)
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
