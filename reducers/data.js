
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGE_DATA':

      return action.payload
    default:
      return state
  }
}

