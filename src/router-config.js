import Vue from 'vue'
import { setCurrentPage } from './vuex/actions'
import store from './vuex/store'
export function configRouter (router) {
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
            },
            '/new': {
              name: 'New',
              title: 'New',
              breadcrumb: '新增',
              component: function (resolve) {
                require(['./components/Hello'], resolve)
              }
            }
          }
        }
      }
    }
  })

  // Redirect
  router.redirect({
    '*': '/topics'
  })

  router.beforeEach(({ to, next }) => {
    // console.log(to.path.split('/')[1])
    setCurrentPage(store, to.path.split('/')[2])
    next()
  })

  router.afterEach(function ({ to }) {
  })
}
