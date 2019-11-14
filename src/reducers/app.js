import { handleActions } from 'redux-actions';
import types from '../actions/app/types';
import defaultStates from './defaultStates';

const appReducer = handleActions(
    {
        [types.SHOW_LOADING]: state => {
            return { ...state, loading: true };
        },
        [types.HIDE_LOADING]: state => {
            return { ...state, loading: false };
        },
        [types.HIDE_TUTORIAL]: state => {
            return { ...state, hideTutorial: true };
        },
        [types.OPEN_POPUP_ERROR]: (state, { title, message, okAction }) => {
            return { ...state, notification: { open: true, title, message, okAction } };
        },
        [types.CLOSE_POPUP_ERROR]: state => {
            return {
                ...state,
                notification: { open: false, title: '', message: '', okAction: null },
            };
        },
        [types.ADD_STACK]: (state, { number }) => {
            return { ...state, stack: state.stack + number >= 0 ? state.stack + number : 0 };
        },
        [types.TOGGLE_PHONE_CODE_PICKER]: (state, { status }) => {
            return { ...state, showCountryCodePicker: status };
        },
    },
    defaultStates.appState,
);

export default appReducer;
