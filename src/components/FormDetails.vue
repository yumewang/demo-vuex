<template>
  <div class="">
    {{currentPage}}{{currentId}}{{details.name}}
    <div v-for="item in fields" class="form-group">
      <!-- Text input -->
      <div v-if="item.type == 'input'">
        <label for={{item.name}}>{{item.name}}</label>
        <input v-model="details[item.name]" id={{item.name}} class="form-control" placeholder={{item.name}} />
      </div>

      <!-- Radio -->
      <div v-if="item.type == 'radio'">
        <label for={{item.name}}>{{item.name}}</label>
        <label class="radio-inline" v-for="(key, val) in item.data">
          <!-- {{key}} - {{val}} -->
          <input v-model="details[item.name]" type="radio" name="form-control inlineRadioOptions" value={{key}}>{{val}}
        </label>
      </div>

      <!-- Select -->
      <div v-if="item.type == 'select'">
        <label for={{item.name}}>{{item.name}}</label>
        <select v-model="selected" class="form-control">
          <option v-for="(key, val) in item.data" name="form-control" value={{key}}>{{val}}</option>
        </select>
      </div>

      <!-- Textarea -->
      <div v-if="item.type == 'textarea'">
        <label for={{item.name}}>{{item.name}}</label>
        <textarea v-model="details[item.name]" id={{item.name}} class="form-control" rows="3"></textarea>
      </div>
    </div>
    <button @click="updateForm(details)" class="btn btn-default">Save</button>
  </div>
</template>
<script>
  import { formColumns } from '../form-column-config'
  import { updateForm } from '../vuex/actions'
  export default {
    // props: ['fields', 'currentPage', 'currentId'],
    vuex: {
      getters: {
        currentPage: ({ currentPage }) => currentPage,
        currentId: ({ currentId }) => currentId,
        details: ({ formDetail }) => formDetail,
        fields: function (state) {
          return formColumns[state.currentPage]
        }
      },
      actions: {
        updateForm
      }
    },
    methods: {
      updateForm: function (details) {
        let self = this
        self.updateForm(details)
      }
    }
  }
</script>