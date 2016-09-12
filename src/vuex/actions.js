export const getUserInfo = function ({ dispatch, state }) {
  dispatch('GETUSERINFO')
}

export const getTopics = function ({ dispatch, state }) {
  dispatch('GETTOPICS')
}

export const setCurrentPage = function ({ dispatch, state }, currentPage) {
  dispatch('SETCURRENTPAGE', currentPage)
}

export const setCurrentId = function ({ dispatch, state }, currentId) {
  dispatch('SETCURRENTID', currentId)
}

export const getDetailById = function ({ dispatch, state }, currentId) {
  dispatch('GETDETAILBYID', currentId)
}

export const updateForm = function ({ dispatch, state }, data) {
  console.log(data.name) // TODO
}
