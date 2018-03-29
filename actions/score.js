export const increaseScore = (payload) => {
  return dispatch => {
    dispatch({
      type: 'INCREASE_SCORE',
      payload
    })
  }
}

export const isIncorrect = (payload) => {
  return dispatch => {
    dispatch({
      type: 'IS_INCORRECT'
    })
  }
}
