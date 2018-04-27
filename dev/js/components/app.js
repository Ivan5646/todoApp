import React from 'react';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

require('../../scss/style.scss');

const App = () => (
    <div>
        <AddTodo />
        {/*<TodoList />*/}
        <VisibleTodoList />
    </div>
);

export default App;