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
    }
  })

  // Redirect
  router.redirect({
    '*': '/topics'
  })

  router.beforeEach(({ to, next }) => {
    setCurrentPage(store, to.name)
    next()
  })

  router.afterEach(function ({ to }) {
  })
}
