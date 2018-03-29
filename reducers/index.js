import { combineReducers } from 'redux'
import image from './image'
import score from './score'
import data from './data'
import letters from './letters'
import ui from './ui'


export default combineReducers({
  image,
  score,
  data,
  letters,
  ui
}) 