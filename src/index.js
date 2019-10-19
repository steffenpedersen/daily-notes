import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Thunk gives ud the ability to return a function inside 
// our action creators to interact with our database
const store = createStore(
    allReducers,
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
