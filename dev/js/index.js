import 'babel-polyfill'; 
import React from 'react';
import logger from 'redux-logger'; 
import thunk from 'redux-thunk'; 
import {applyMiddleware} from 'redux';
import ReactDOM from "react-dom"; 
import {Provider} from 'react-redux';
import {createStore} from "redux"; // {} means import a var or function from package
import allReducers from "./reducers";
import App from './components/app';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger()) // createLogger throwing error
}

// const store = createStore(allReducers);
const store = createStore(
  allReducers,
  applyMiddleware(...middleware, logger())
)

// here <Provider store={store}>  every component has access to store data now  
ReactDOM.render(
    <Provider store={store}>   
        <App/>
    </Provider>,
    document.getElementById('root')
);
