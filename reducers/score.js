
const initialState = {
	score: 0,
	gameType: null,
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
     case 'SET_GAME_TYPE':
      return {
      	...state,
      	gameType:action.payload
      }
    default:
      return state
  }
}

