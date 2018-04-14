import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {

    createList() {
        return this.props.todoList.map((item) => { 
            return (
                <li key={todoList.id}> 
                {todoList.name} {todoList.description} 
                </li>
                );
        });
    }

    render() {
        return (
            <ul>
                {this.createList()}
            </ul>
        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
        todoList: todoList.items
    };
}

export default connect(mapStateToProps)(TodoList); // this is now a contanier