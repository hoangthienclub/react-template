import types from './types';
import userApi from '../../api/user';
import { guid } from '../../scripts/helpers';
import * as authAction from '../app';

// import {} from api;

export function updateUser(user) {
  return dispatch => {
    dispatch({ type: types.UPDATE_USER, user });
  };
}

export function updateSettings(settings) {
  return dispatch => {
    dispatch({ type: types.UPDATE_SETTINGS, settings });
  };
}

export function updateUserToken(token) {
  return dispatch => {
    dispatch({ type: types.UPDATE_USER_TOKEN, token });
  };
}

export function updateAnonymousUserToken(token) {
  return dispatch => {
    dispatch({ type: types.UPDATE_ANONYMOUS_USER_TOKEN, token });
  };
}

export function clearUser() {
  return dispatch => {
    dispatch({ type: types.CLEAR_USER });
  };
}

export function updateAnonymousUser(user) {
  return dispatch => {
    dispatch({ type: types.UPDATE_ANONYMOUS_USER, user });
  };
}

export function signInAsAnonymous(token) {
  return async (dispatch, getState) => {
    const { auth, firebase } = getState();
    const deviceId = guid();
    const deviceToken = token || firebase.token;
    const user = await userApi.signInAsAnonymous(auth, deviceId, deviceToken);
    dispatch(updateAnonymousUser(user));
  };
}

export function signIn(email, password) {
  return async (dispatch, getState) => {
    dispatch(authAction.showLoading());
    const { auth, firebase } = getState();
    const deviceId = guid();
    const deviceToken = firebase.token;
    try {
      const user = await userApi.signIn(auth, { email, password }, deviceId, deviceToken);
      dispatch(updateUser(user));
      dispatch(orderAction.updateCurrentOrders(user.currentOrders));
    } catch (error) {
      dispatch(appAction.openPopup({ title: 'Error', message: err.message }));
    }
    dispatch(authAction.hideLoading());
  };
}

export function signOut() {
  return async (dispatch, getState) => {
    const { auth, firebase } = getState();
    const deviceId = guid();
    userApi.signOut(auth, deviceId);
    dispatch(clearUser());
    dispatch(orderAction.clearOrder());
  };
}

export function refreshToken(authState, dispatch) {
  return async () => {
    let newToken;
    const { user, anonymousUser } = authState;
    if (user && user.RefreshToken) {
      newToken = await userApi.refreshToken(user.RefreshToken);
      dispatch(updateUserToken(newToken));
    } else {
      newToken = await userApi.refreshToken(anonymousUser.RefreshToken);
      dispatch(updateAnonymousUserToken(newToken));
    }
    console.log('refreshToken', newToken);
    return {
      Authorization: newToken.IdToken,
      AccessToken: newToken.AccessToken,
      isTabletUser: false,
      'Content-Type': 'application/json',
    };
  };
}
