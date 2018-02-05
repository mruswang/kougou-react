import * as actionTypes from './reducer-type.js'

export function setPlayer(data) {
    return {
        type: actionTypes.SET_PLAYER,
        data
    }
}