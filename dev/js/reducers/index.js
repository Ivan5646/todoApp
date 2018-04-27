import {combineReducers} from "redux";
import TodoListReducer from "./reducer-todolist";
import visibilityFilter from './visibilityFilter'

const allReducers = combineReducers({ // that will be thrown to the Store
    todoList: TodoListReducer,
    visibilityFilter: visibilityFilter,
});

export default allReducers;