import { handleActions } from 'redux-actions';
import types from '../actions/auth/types';
import defaultStates from './defaultStates';

const authReducer = handleActions({
  [types.UPDATE_USER]: (state, {user}) => {
    return { ...state, user: {...user} };
  },
  [types.CLEAR_USER]: (state) => {
    return { ...state, user: {} };
  },
  [types.UPDATE_ANONYMOUS_USER]: (state, {user: anonymousUser}) => {
    return { ...state, anonymousUser };
  },
  [types.UPDATE_USER_TOKEN]: (state, {token}) => {
    return { ...state, user: {...state.user, ...token} };
  },
  [types.UPDATE_ANONYMOUS_USER_TOKEN]: (state, {token}) => {
    return { ...state, anonymousUser: {...state.anonymousUser, ...token} };
  },
  [types.UPDATE_SETTINGS]: (state, {settings}) => {
    return { ...state, settings: {...settings} };
  },
}, defaultStates.authState);

export default authReducer;
