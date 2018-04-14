import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux"; 
import App from './components/App';
import allReducers from "./reducers";

const store = createStore(allReducers);

// here <Provider store={store}>  every component has access to store data now  
ReactDOM.render(
    <Provider store={store}>   
        <App/>
    </Provider>,
    document.getElementById('root')
);
