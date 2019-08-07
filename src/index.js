import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import App from './App';
import reducers from './store/reducers';
import watchers from './store/sagas';

import './assets/style/style1.css';
import './assets/style/style2.css';
// import './assets/style/style3.css';
import './assets/style/style4.css';
import './assets/style/style5.css';
import './assets/style/font-awesome.min.css';
import './assets/style/style8.css';
import './assets/style/bootstrap.css';
import './assets/style/style10.css';
import './assets/style/style13.css';
import './assets/style/style14.css';
import './assets/style/style15.css';
import './assets/style/style16.css';
import './assets/style/myStyleForCarusel.css';


const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
