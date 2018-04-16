import {combineReducers} from "redux";
import TodoListReducer from "./reducer-todolist";

const allReducers = combineReducers({ // that will be thrown to the Store
    todoList: TodoListReducer
});

export default allReducers;