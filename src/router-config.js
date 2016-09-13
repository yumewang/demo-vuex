import { setCurrentPage } from './vuex/actions'
import store from './vuex/store'
export function configRouter (router) {
  router.map({
    '/topics': {
      name: 'topics',
      title: 'topics',
      component: function (resolve) {
        require(['./components/Topics'], resolve)
      }
    },
    '/comments': {
      name: 'comments',
      title: 'comments',
      component: function (resolve) {
        require(['./components/Topics'], resolve)
      }
    },
    '/:page/:id/edit': {
      name: 'Edit',
      title: 'Edit',
      component: function (resolve) {
        require(['./components/edit'], resolve)
      }
    },
    '/:page/new': {
      name: 'New',
      title: 'New',
      component: function (resolve) {
        require(['./components/New'], resolve)
      }
    }
  })

  // Redirect
  router.redirect({
    '*': '/topics'
  })

  router.beforeEach(({ to, next }) => {
    // console.log(to.path.split('/')[1])
    setCurrentPage(store, to.path.split('/')[1])
    next()
  })

  router.afterEach(function ({ to }) {
  })
}
