<template>
  <div>
    <button @click="itemAction('view-item', rowData)"><i class="glyphicon glyphicon-zoom-in"></i></button>
      <button @click="itemAction('edit-item', rowData)"><i class="glyphicon glyphicon-pencil"></i></button>
    <button @click="itemAction('delete-item', rowData)"><i class="glyphicon glyphicon-remove"></i></button>
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
      actions: {
        setCurrentId,
        getDetailById
      }
    },
    methods: {
      itemAction: function (action, data) {
        this.setCurrentId(data.id)
        this.getDetailById(data.id)
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