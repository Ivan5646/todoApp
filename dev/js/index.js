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


// function test(state=[], action) {
//     if (action.type === "ADD_TRACK") {
//         return [
//             ...state,
//             action.payload
//         ]
//     }
//     return state;
// }

store.subscribe(() => {
    console.log("subscribe", store.getState());
})

// store.dispatch({type: "ADD_TRACK", payload: "smells like teen spirit"})