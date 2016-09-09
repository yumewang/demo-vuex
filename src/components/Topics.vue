<template>
  <div class="topics-list table-responsive container">
    <div id="content" class="ui basic segment">
      <h3 class="ui header">List of Users</h3>
      <vuetable v-ref:vuetable
        api-url="http://vuetable.ratiw.net/api/users"
        pagination-path=""
        :fields="fields"
        :sort-order="sortOrder"
        :multi-sort="multiSort"
        table-class="table table-bordered table-striped table-hover"
        ascending-icon="glyphicon glyphicon-chevron-up"
        descending-icon="glyphicon glyphicon-chevron-down"
        pagination-class=""
        pagination-info-class=""
        pagination-component-class=""
        :pagination-component="paginationComponent"
        :item-actions="itemActions"
        :append-params="moreParams"
        :per-page="perPage"
        wrapper-class="vuetable-wrapper"
        table-wrapper=".vuetable-wrapper"
        loading-class="loading"
        detail-row-id="id"
        detail-row-transition="expand"
        row-class-callback="rowClassCB"
      ></vuetable>
    </div>
  </div>
</template>
<script>
let tableColumns = [
  {
    name: 'name',
    sortField: 'name'
  },
  {
    name: 'email',
    sortField: 'email'
  },
  {
    name: 'nickname',
    sortField: 'nickname',
    callback: 'allCap'
  },
  {
    name: 'birthdate',
    sortField: 'birthdate',
    callback: 'formatDate|D/MM/Y'
  },
  {
    name: 'gender',
    sortField: 'gender',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'created_at',
    title: 'Created',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'formatDate|D/MM/Y'
  },
  {
    name: '__actions',
    title: '',
    titleClass: 'text-center',
    dataClass: 'text-center'
  }
]
export default {
  data () {
    return {
      searchFor: '',
      fields: tableColumns,
      perPage: 10,
      paginationComponent: 'vuetable-pagination',
      paginationInfoTemplate: 'แสดง {from} ถึง {to} จากทั้งหมด {total} รายการ',
      moreParams: []
    }
  },
  methods: {
    /**
     * Callback functions
     */
    allCap: function (value) {
      return value.toUpperCase()
    },
    formatDate: function (value, fmt) {
      if (value === null) return ''
      fmt = (typeof fmt === 'undefined') ? 'D MMM YYYY' : fmt
      // return moment(value, 'YYYY-MM-DD').format(fmt)
      return value
    },
    viewProfile: function (id) {
      console.log('view profile with id:', id)
    },
    paginationConfig: function (componentName) {
      console.log('paginationConfig: ', componentName)
      if (componentName === 'vuetable-pagination') {
        this.$broadcast('vuetable-pagination:set-options', {
          wrapperClass: 'pagination',
          icons: { first: '', prev: '', next: '', last: '' },
          activeClass: 'active',
          linkClass: 'btn btn-default',
          pageClass: 'btn btn-default'
        })
      }
      if (componentName === 'vuetable-pagination-dropdown') {
        this.$broadcast('vuetable-pagination:set-options', {
          wrapperClass: 'form-inline',
          icons: { prev: 'glyphicon glyphicon-chevron-left', next: 'glyphicon glyphicon-chevron-right' },
          dropdownClass: 'form-control'
        })
      }
    }
  },
  events: {
    'vuetable:action': function (action, data) {
      console.log('vuetable:action', action, data)
      if (action === 'view-item') {
        this.viewProfile(data.id)
      }
    },
    'vuetable:load-error': function (response) {
      console.log('Load Error: ', response)
    }
  }
}
</script>