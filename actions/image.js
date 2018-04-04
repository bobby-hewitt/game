export const nextImage = () => {
  return dispatch => {
    dispatch({
      type: 'NEXT_IMAGE'
    })
  }
}

export const prevImage = () => {
  return dispatch => {
    dispatch({
      type: 'PREV_IMAGE'
    })
  }
}

export const setImageIndex = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_IMAGE_INDEX',
      payload
    })
  }
}

export const setSoloImageIndex = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_SOLO_IMAGE_INDEX',
      payload
    })
  }
}


export const setLabelIndex = (payload) => {
  console.log('setting Label index', payload)
  return dispatch => {
    dispatch({
      type: 'SET_LABEL_INDEX',
      payload
    })
  }
}



export const nextLabel = () => {
  return dispatch => {
    dispatch({
      type: 'NEXT_LABEL'
    })
  }
}

export const prevLabel = () => {
  return dispatch => {
    dispatch({
      type: 'PREV_LABEL'
    })
  }
}

