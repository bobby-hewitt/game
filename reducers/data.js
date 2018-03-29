
const initialState = []

export default (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case 'UPDATE_IMAGE_DATA':

      return action.payload
    default:
      return state
  }
}

