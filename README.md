# demo-vuex

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Learning vue

## Reference

* [Vue](https://vuejs.org.cn/)
* [Vuex tutorial](http://vuex.vuejs.org/zh-cn/tutorial.html)
* [Vue plugins](https://vuejs.org.cn/guide/plugins.html)
* [vue-cli: A simple CLI for scaffolding Vue.js projects.](https://github.com/vuejs/vue-cli)
* [vuetable - data table simplify!](https://github.com/ratiw/vue-table)
* [Vux: Be Cool with Vue and WeUI.](https://github.com/airyland/vux)
* [关于前端技术栈](https://annatarhe.github.io/2016/01/10/)

## A really easy setup

You'll need [git](https://git-scm.com), [nodejs](https://nodejs.org/en/) and [npm](https://docs.npmjs.com) installed. Then you'll need to perform these steps.

```sh
git clone git@github.com:yumewang/demo-vuex.git
cd demo-vuex
npm install
npm run dev
```

if you want to create this from zero, you can do below first:

```sh
npm install -g vue-cli
vue init webpack demo-vuex
```
# Handled Questions
## 1. How to create breadcrumbs
When define route with params, and use [vue-breadcrumbs](https://github.com/samturrell/vue-breadcrumbs) to define breadcrumbs can not create corretly. Moreover, If I want to change breadcrumbs value, that's can not be done.
When I was implementing frontend of Backend, I defined routes like this:
```javascript
  router.map({
    '/app': {
      name: 'app',
      component: function (resolve) {
        require(['./components/layout'], resolve)
      },
      subRoutes: {
        '/:page': {
          name: 'List',
          breadcrumb: 'List',
          component: Vue.extend({
            template: '<router-view></router-view>'
          }),
          subRoutes: {
            '/': {
              name: 'List',
              title: 'List',
              component: function (resolve) {
                require(['./components/Hello'], resolve)
              }
            },
            '/:id/edit': {
              name: 'Edit',
              title: 'Edit',
              breadcrumb: '编辑',
              component: function (resolve) {
                require(['./components/Hello'], resolve)
              }
            },
            '/:id': {
              name: 'Show',
              title: 'Show',
              breadcrumb: '查看',
              component: function (resolve) {
                require(['./components/Hello'], resolve)
              }
            }
          }
        }
      }
    }
  })
```
If I use [vue-breadcrumbs](https://github.com/samturrell/vue-breadcrumbs) to define breadcrumbs directly, I can not change value of breadcrumb at define routes use tableColumns.
```javascript
const tableColumns = {
  title: {
    issues: '期号',
    subjects: '话题',
    sessions: '专家解密',
    'recommend_articles': '相关推荐',
    comments: '评论'
  }
}
```
So I change vue-breadcrumbs definitions, like below:
```javascript
// Vue Breadcrumbs source code, from: https://github.com/samturrell/vue-breadcrumbs
export default function VueBreadcrumbs (Vue, options = {}) {
  Object.defineProperties(Vue.prototype, {
    $breadcrumbs: {
      get: function () {
        var crumbs = []
        for (var i = 0; i < this.$route.matched.length; i++) {
          if (this.$route.matched[i].handler && this.$route.matched[i].handler.breadcrumb) {
            let currentBread = this.$route.matched[i].handler.breadcrumb
            if (currentBread === 'List' || /全部/.test(currentBread)) {
              let currentPage = this.$route.params.page
              // Use vuex state to keep current page
              // let currentPage = store.state.currentPage
              // You can change value of breadcrumb before create crumbs.
              this.$route.matched[i].handler.breadcrumb = '全部' + tableColumns.title[currentPage]
            }
            crumbs.push(this.$route.matched[i])
          }
        }
        return crumbs
      }
    }
  })
  Vue.component('breadcrumbs', {
    template: '<nav v-if="$breadcrumbs.length"> <ul class="breadcrumb"> <li v-for="(i, crumb) in $breadcrumbs"> <a v-link="crumb.handler">{{ crumb.handler.breadcrumb }}</a> </li> </ul> </nav>'
  })
}

Vue.use(VueBreadcrumbs)
```
and then result will be like this:
![Breadcrumbs demo](https://github.com/yumewang/demo-vuex/blob/master/static/images/breadcrumbs%20%20.png)