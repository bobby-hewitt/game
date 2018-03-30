
const initialState = {
  showLetters: true,
  showImage: true,
  imageIsLoaded:true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LETTERS':
      return {
      	...state,
      	showLetters: action.payload
      }
    case 'SHOW_IMAGE':
      const imageIsLoaded = action.payload === false ? false : state.imageIsLoaded
      return {
        ...state,
        showImage: action.payload,
        imageIsLoaded
      }
    
     case 'IMAGE_IS_LOADED':
      return {
        ...state,
        imageIsLoaded: true
      }
    default:
      return state
  }
}

