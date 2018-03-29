
const initialState = {
  imageIndex: 0,
  labelIndex: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_IMAGE':
      return {
        ...state,
        labelIndex: 0,
        imageIndex: state.imageIndex + 1,
      }
    case 'PREV_IMAGE':
      return {
        ...state,
        count: state.imageIndex - 1,
      }
    case 'NEXT_LABEL':
      return {
        ...state,
        labelIndex: state.labelIndex + 1,
      }
    case 'PREV_LABEL':
      return {
        ...state,
        labelIndex: state.labelIndex - 1,
      }
    case 'SET_LABEL_INDEX':
      return {
        ...state,
        labelIndex: 0,
      }
     case 'SET_IMAGE_INDEX':
      return {
        ...state,
        imageIndex: 0,
      }
    default:
      return state
  }
}

