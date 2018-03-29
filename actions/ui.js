export const setShowLetters = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SHOW_LETTERS',
      payload
    })
  }
}


