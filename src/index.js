import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers';
import AppContainer from './App'
import './i18n';
if (!global._babelPolyfill) {
	require('babel-polyfill');
}
require("babel-core/register");

window.React2 = require('react');
console.log('lll',window.React1 === window.React2, window.React1, window.React2);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}

ReactDOM.render( <App/>, document.getElementById('root') );
