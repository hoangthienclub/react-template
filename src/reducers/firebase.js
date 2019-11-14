import { handleActions } from 'redux-actions';
import types from '../actions/firebase/types';
import defaultStates from './defaultStates';

const firebaseReducer = handleActions({
  [types.UPDATE_FIREBASE_TOKEN]: (state, {token}) => {
    return { ...state, token };
  },
  [types.FIREBASE_RECEIVERD_MESSAGE]: (state, {message}) => {
    return { ...state, message };
  },
}, defaultStates.firebaseState);

export default firebaseReducer;
