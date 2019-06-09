import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer  from './reducers';

import './index.scss';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(rootReducer, composeEnhancers);

import { App } from './App';

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));
