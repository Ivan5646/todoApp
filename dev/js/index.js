import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux"; 
import {loadState, saveState} from './localStorage';
import App from './components/App';
import allReducers from "./reducers";

const persistedState = loadState();
const store = createStore(allReducers, persistedState);

// here <Provider store={store}>  every component has access to store data now  
ReactDOM.render(
    <Provider store={store}>   
        <App/>
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => {
    saveState(store.getState());
});

// store.subscribe(() => {
//      console.log("subscribe", store.getState());
// })
