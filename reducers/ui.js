
const initialState = {
  showLetters: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LETTERS':
      return {
      	...state,
      	showLetters: action.payload
      }
    default:
      return state
  }
}

