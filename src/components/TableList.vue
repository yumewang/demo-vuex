<template>
  <div class="table-list">
    {{data}}
    <table class="table">
      <tbody>
        <tr v-for="item in data" track-by="id">
          <td v-for="value in item">
            {{ $key }} : {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props: ['data']
  }
</script>
