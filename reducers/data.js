
const initialState = {
	images: [],
	updateId: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGE_DATA':
      return {
      	images: action.payload.images,
      	updateId: action.payload.id
      }
    default:
      return state
  }
}

