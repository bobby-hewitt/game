export const setLetters = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_LETTERS',
      payload
    })
  }
}
export const setLastLetter = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_LAST_LETTER',
      payload
    })
  }
}
export const setWord = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_WORD',
      payload
    })
  }
}


