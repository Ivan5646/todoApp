import {combineReducers} from "redux";
import TodoListReducer from "./reducer-todolist";
import AddTooReducer from "./reducer-addTodo";

const allReducers = combineReducers({ // that will be thrown to the Store
    todoList: TodoListReducer,
    addTooReducer: AddTooReducer
});

export default allReducers;