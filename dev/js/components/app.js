import React from 'react';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

require('../../scss/style.scss');

const App = () => (
    <div>
        <AddTodo />
        {/*<TodoList />*/}
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;