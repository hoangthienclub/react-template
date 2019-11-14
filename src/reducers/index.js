import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import throttle from 'lodash/throttle';
import logger from 'redux-logger';
import app from './app';
import firebase from './firebase';
import auth from './auth';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

const loadState = () => {
    try {
        const serialisedState = localStorage.getItem('state');
        if (serialisedState === null) {
            return undefined;
        }
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};
const persistedState = loadState();
const store = createStoreWithMiddleware(
    combineReducers({
        app,
        auth,
        firebase
    }),
    persistedState,
);
const saveState = state => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('state', serialisedState);
    } catch (err) {
        // Need to log these
    }
};

store.subscribe(
    throttle(() => {
        const { auth, app } = store.getState();
        saveState({
            app,
            auth
        });
    }, 1000),
);
export default store;
