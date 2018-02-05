import * as actionTypes from './reducer-type.js'

export function updata(data) {
    return {
        type: actionTypes.SET_PLAYER,
        data
    }
}