
const initialState = {
	score: 0,
	incorrectToggle: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return {
      	...state,
      	score:state.score + action.payload
      }
    case 'IS_INCORRECT':
      return {
      	...state,
      	incorrectToggle:!state.incorrectToggle
      }
    default:
      return state
  }
}

