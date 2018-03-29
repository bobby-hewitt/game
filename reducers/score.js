
const initialState = {
	score: 0,
	gameType: null,
	incorrectToggle: true,
  points:[],
  streak: false,
  lives: 20,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return {
      	...state,
      	score:state.score + action.payload
      }
    case 'LOSE_LIFE':
      return {
        ...state,
        lives:state.lives -1
      }
    case 'RESET_LIVES':
      return {
        ...state,
        lives:20
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
    case 'ADD_POINTS':
      var newPoints = Object.assign([], state.points)
      newPoints.push(action.payload)
      return {
        ...state,
        points: newPoints
      }
       case 'RESET_POINTS':
      return {
        ...state,
        points: [],
        lives:20,
        streak: false,

      }
    case 'REMOVE_POINTS':
      return {
        ...state,
        points: state.points.splice(0,1)
      }
     case 'SET_STREAK':
      return {
        ...state,
        streak:action.payload
      }
    default:
      return state
  }
}

