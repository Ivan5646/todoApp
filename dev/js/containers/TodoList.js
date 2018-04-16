import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {

    createList() {
        return this.props.todoList.map((item) => { 
            return (
                <li key={item.id}> 
                    <div>Name: {item.name}</div>
                    <div>Description: {item.description}</div>
                    <div>Priority: {item.priority}</div>
                    <div>Due Date: {item.due_date}</div>
                    <div>Complete Date: {item.complete_date}</div>
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
        todoList: state.todoList //todoList.items
    };
}

export default connect(mapStateToProps)(TodoList); // this is now a contanier