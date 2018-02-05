import {combineReducers} from 'redux'
import initState from './state'
import * as actionTypes from './reducer-type.js'

function tab_player(state = initState, action) {
  switch (action.type) {
    case actionTypes.SET_PLAYER:
      return Object.assign({},state,action.data)
    default:
      return state
  }
}

function tab_players(state = initState, action) {
  switch (action.type) {
    case actionTypes.SET_PLAYER:
      return Object.assign({},state,action.data)
    default:
      return state
  }
}
export default combineReducers({
  tab_player,tab_players
})