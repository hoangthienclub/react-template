import types from "./types"

export function updateFirebaseToken(token) {
    return (dispatch) => {
        dispatch({ type: types.UPDATE_FIREBASE_TOKEN, token })
    }
}

export function receivedMessage(message) {
    return (dispatch) => {
        dispatch({ type: types.FIREBASE_RECEIVERD_MESSAGE, message})
    }
}
