import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux"; 
// import App from './components/App';
// import allReducers from "./reducers";

const store = createStore(test);

// here <Provider store={store}>  every component has access to store data now  
ReactDOM.render(
    <Provider store={store}>   
        <div></div>
    </Provider>,
    document.getElementById('root')
);

// testing redux
function test(state=[], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

store.subscribe(() => {
    console.log("subscribe", store.getState());
})

store.dispatch({type: 'ADD_TRACK', payload: 'smells like teen spirit'});
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'});