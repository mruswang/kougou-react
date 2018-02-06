import * as actionTypes from './reducer-type.js'

export function updata(data) {
    return {
        type: actionTypes.SET_PLAYER,
        data
    }
}

export function setList(data) {
    return {
        type: actionTypes.SET_LIST,
        data
    }
}

export function playState(data) {
    return {
        type: actionTypes.SET_PLAYSTATE,
        data
    }
}

export function changeFull(data) {
    return {
        type: actionTypes.SET_FULLSCREEN,
        data
    }
}