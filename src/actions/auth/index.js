import types from './types';
import userApi from '../../api/user';
import { guid } from '../../scripts/helpers';
import * as appAction from '../app';

// import {} from api;

export function updateUser(user) {
  return dispatch => {
    dispatch({ type: types.UPDATE_USER, user });
  };
}


export function signIn(email, password) {
  return async (dispatch, getState) => {
    dispatch(appAction.showLoading());
    const { auth, firebase } = getState();
    const deviceId = guid();
    const deviceToken = firebase.token;
    try {
      const user = await userApi.signInTablet(null, { email, password }, deviceId, deviceToken);
      dispatch(updateUser(user));
    } catch (error) {
      dispatch(appAction.openPopup({ title: 'Error', message: error.message }));
    }
    dispatch(appAction.hideLoading());
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
