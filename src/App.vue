<template>
  <div>
    <div class="navbar navbar-static-top">
      <ul class="nav navbar-nav">
        <li v-for="(key, item) in menu">
          <a v-link="'/app/' + key">{{item}}
          </a>
          <!-- <ul v-if="item.subMenu" class="nav" :class="{ 'collapse': item.subMenu }">
            <li v-for="subItem in item.subMenu">
              <a v-link="{ name: subItem.link }">
                <span class="title">{{ subItem.label }}</span>
              </a>
            </li>
          </ul> -->
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  data () {
    return {
      menu: {
        list1: '数据1',
        list2: '数据2',
        list3: '数据3',
        list4: '数据4',
        list5: '数据5'
      }
    }
  },
  store
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
