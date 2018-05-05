import {combineReducers} from "redux";
import TodoListReducer from "./reducer-todolist";
import visibilityFilter from './visibilityFilter';
import editForm from './editForm'

const allReducers = combineReducers({ // that will be thrown to the Store
    todoList: TodoListReducer,
    visibilityFilter: visibilityFilter,
    editForm: editForm
});

export default allReducers;