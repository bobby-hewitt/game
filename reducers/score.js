
const initialState = {
	score: 0,
	gameType: null,
	incorrectToggle: true,
  points:[],
  streak: false,
  lives: 20,
  highScore: 0,
  newLives:[],
  difficulty: false
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
    case 'ADD_LIFE':
      var newLives = Object.assign([], state.newLives)
      newLives.push('')
      console.log('adddddding')
      return {
        ...state,
        lives:state.lives +1,
        newLives: newLives
      }
    case 'RESET_NEW_LIVES':
      return {
        ...state,
        lives:state.lives +1,
        newLives: []
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
        newLives:[],
        lives:20,
        score:0,
        streak: false,
        difficulty:false,

      }
    case 'RESET_ARRAYS':
      return {
        ...state,
        newLives: [],
        points:[]
      }
    case 'REMOVE_POINTS':
      return {
        ...state,
        points: state.points.splice(0,1)
      }
    case 'SET_HIGH_SCORE':
      return {
        ...state,
        highScore: action.payload
      }
     case 'SET_STREAK':
      return {
        ...state,
        streak:action.payload
      }
     case 'SELECT_DIFFICULTY':
      return {
        ...state,
        difficulty:action.payload.difficulty,
      }
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty:action.payload
      }
    default:
      return state
  }
}

