import React from 'react';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';

require('../../scss/style.scss');

const App = () => (
    <div>
        <AddTodo />
        <TodoList />
    </div>
);

export default App;