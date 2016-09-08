<template>
  <div class="user-info">
    <h1>{{user.name}}</h1>
  </div>
</template>

<script>
import { getUserInfo } from '../vuex/actions'
export default {
  vuex: {
    getters: {
      user: ({user}) => user
    },
    actions: {
      getUserInfo
    }
  },
  ready () {
    this.getUserInfo()
  }
}
</script>