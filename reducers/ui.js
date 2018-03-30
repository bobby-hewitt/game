
const initialState = {
  showLetters: true,
  showImage: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LETTERS':
      return {
      	...state,
      	showLetters: action.payload
      }
    case 'SHOW_IMAGE':
      return {
        ...state,
        showImage: action.payload
      }
    default:
      return state
  }
}

