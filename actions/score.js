export const increaseScore = (payload) => {
  return dispatch => {
    dispatch({
      type: 'INCREASE_SCORE',
      payload
    })
  }
}

export const resetArrays = () => {
  return dispatch => {
    dispatch({
      type: 'RESET_ARRAYS',
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

export const setHighScore = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_HIGH_SCORE',
      payload
    })
  }
}

export const loseLife = (payload) => {
  return dispatch => {
    dispatch({
      type: 'LOSE_LIFE'
    })
  }
}

export const addLife = (payload) => {
  return dispatch => {
    dispatch({
      type: 'ADD_LIFE'
    })
  }
}


export const resetNewLives = (payload) => {
  return dispatch => {
    dispatch({
      type: 'RESET_NEW_LIVES'
    })
  }
}

export const setDifficulty = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_DIFFICULTY',
      payload
    })
  }
}

export const resetLives = (payload) => {
  return dispatch => {
    dispatch({
      type: 'RESET_LIVES'
    })
  }
}

export const setGameType = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_GAME_TYPE',
      payload
    })
  }
}

export const addPoints = (payload) => {
  return dispatch => {
    dispatch({
      type: 'ADD_POINTS',
      payload
    })
  }
}

export const resetPoints = () => {
  return dispatch => {
    dispatch({
      type: 'RESET_POINTS',
    })
  }
}

export const removePoints = (payload) => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_POINTS',
    })
  }
}

export const setStreak = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_STREAK',
      payload
    })
  }
}
