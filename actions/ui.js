export const setShowLetters = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SHOW_LETTERS',
      payload
    })
  }
}

export const setShowImage = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SHOW_IMAGE',
      payload
    })
  }
}


