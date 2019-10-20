import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './store/reducers';
import { Provider } from 'react-redux';
// Thunk gives ud the ability to return a function inside 
// our action creators to interact with our database
import thunk from 'redux-thunk';
// This will give us the ability to interact with the Firebase API
// inside our action creators and sync up with our Firebase store
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig'

const store = createStore(
    allReducers,
    // With compose we can add multiple Redux store enhancers
    compose(
        // withExtraArgument gives us the ability to
        // pass in an extra argument to to our function 
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebaseConfig),
        reduxFirestore(firebaseConfig)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
