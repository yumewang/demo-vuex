<template>
  <div>
    <button @click="itemAction('view-item', rowData)"><i class="glyphicon glyphicon-zoom-in"></i>查看</button>
    <button @click="itemAction('edit-item', rowData)"><i class="glyphicon glyphicon-pencil"></i>编辑</button>
    <button @click="itemAction('delete-item', rowData)"><i class="glyphicon glyphicon-remove"></i>删除</button>
  </div>
</template>
<script>
  import { setCurrentId, getDetailById } from '../vuex/actions'
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      }
    },
    vuex: {
      getters: {
        currentPage: ({ currentPage }) => currentPage
      },
      actions: {
        setCurrentId,
        getDetailById
      }
    },
    methods: {
      itemAction: function (action, data) {
        switch (action) {
          case 'view-item':
            this.$router.go({
              path: `/app/${this.currentPage}/1`
            })
            break
          case 'edit-item':
            this.$router.go({
              path: `/app/${this.currentPage}/1/edit`
            })
            break
          case 'delete-item':
            break
          default:
            console.log('TODO')
        }
      },
      onClick: function (event) {
        console.log('custom-action: on-click', event.target)
      },
      onDoubleClick: function (event) {
        console.log('custom-action: on-dblclick', event.target)
      }
    }
  }
</script>