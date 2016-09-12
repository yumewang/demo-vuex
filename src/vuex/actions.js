export const getUserInfo = function ({ dispatch, state }) {
  dispatch('GETUSERINFO')
}

export const getTopics = function ({ dispatch, state }) {
  dispatch('GETTOPICS')
}

export const setCurrentPage = function ({ dispatch, state }, currentPage) {
  dispatch('SETCURRENTPAGE', currentPage)
}
