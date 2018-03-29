
const initialState = {
	letters: [],
	word: '',
  lastLetter: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LETTERS':
      return {
      	...state,
      	letters: action.payload
      }
     case 'SET_WORD':
      return {
      	...state,
      	word: action.payload
      }
    case 'SET_LAST_LETTER':
      return {
        ...state,
        lastLetter: action.payload
      }
    default:
      return state
  }
}

