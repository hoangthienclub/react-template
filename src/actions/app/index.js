import types from './types';

export function hideTutorial() {
    return dispatch => {
        dispatch({ type: types.HIDE_TUTORIAL, data: {} });
    };
}

export function openPopup({ title, message, okAction }) {
    return dispatch => {
        dispatch({ type: types.OPEN_POPUP_ERROR, title, message, okAction });
    };
}

export function closePopup() {
    return dispatch => {
        dispatch({ type: types.CLOSE_POPUP_ERROR });
    };
}

export function showLoading() {
    return dispatch => {
        dispatch({ type: types.SHOW_LOADING });
    };
}

export function hideLoading() {
    return dispatch => {
        dispatch({ type: types.HIDE_LOADING });
    };
}

export function addStack(number) {
    return dispatch => {
        dispatch({ type: types.ADD_STACK, number });
    };
}

export const togglePhoneCountryCodePicker = status => {
    return dispatch => {
        dispatch({ type: types.TOGGLE_PHONE_CODE_PICKER, status });
    };
};
