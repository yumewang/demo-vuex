<template>
  <div class="">
    <button @click="goBack" class="btn btn-default">Back</button>
    <h3>{{currentPage}}</h3>
    <div v-for="item in fields" class="form-group">
      <!-- Text input -->
      <div v-if="item.type == 'input'">
        <label for={{item.name}}>{{item.name}}</label>
        <input v-model="data[item.name]" id={{item.name}} class="form-control" placeholder={{item.name}} />
      </div>

      <!-- Radio -->
      <div v-if="item.type == 'radio'">
        <label for={{item.name}}>{{item.name}}</label>
        <label class="radio-inline" v-for="(key, val) in item.data">
          <!-- {{key}} - {{val}} -->
          <input v-model="data[item.name]" type="radio" name="form-control inlineRadioOptions" value={{key}}>{{val}}
        </label>
      </div>

      <!-- Select -->
      <div v-if="item.type == 'select'">
        <label for={{item.name}}>{{item.name}}</label>
        <select v-model="data[item.name]" class="form-control">
          <option v-for="(key, val) in item.data" name="form-control" value={{key}}>{{val}}</option>
        </select>
      </div>

      <!-- Textarea -->
      <div v-if="item.type == 'textarea'">
        <label for={{item.name}}>{{item.name}}</label>
        <textarea v-model="data[item.name]" id={{item.name}} class="form-control" rows="3"></textarea>
      </div>
    </div>
    <button @click="updateForm2(data)" class="btn btn-default">Save</button>
  </div>
</template>
<script>
  import { formColumns } from '../form-column-config'
  import { getDetailById, updateForm } from '../vuex/actions'
  export default {
    // props: ['fields', 'currentPage', 'currentId'],
    vuex: {
      getters: {
        currentPage: ({ currentPage }) => currentPage,
        fields: ({ currentPage }) => formColumns[currentPage],
        data: function ({ currentPage }) {
          let fields = formColumns[currentPage]
          let obj = Object.assign(...fields.map(d => {
            return { [d.name]: null }
          }))
          return obj
        }
      },
      actions: {
        getDetailById,
        updateForm
      }
    },
    methods: {
      goBack: function () {
        this.$router.go({
          path: `/${this.currentPage}`
        })
      },
      updateForm2: function (data) {
        console.log('1')
        console.log(data)
        this.updateForm(data)
      }
    }
  }
</script>