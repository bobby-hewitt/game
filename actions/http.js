export const updateImages = (payload) => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_IMAGE_DATA',
      payload: payload
    })
  }
}