import {combineReducers} from 'redux'
import initState from './state'
import * as actionTypes from './reducer-type.js'

function changePlayer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SET_PLAYER:
      return Object.assign({},state,action.data)
    case actionTypes.SET_LIST:
      return Object.assign({},state,action.data)
    case actionTypes.SET_PLAYSTATE:
      return Object.assign({},state,action.data)
    case actionTypes.SET_FULLSCREEN:
      return Object.assign({},state,action.data)
    case actionTypes.SET_SMALL:
      return Object.assign({},state,action.data)
    default:
      return state
  }
}

export default combineReducers({
  changePlayer
})