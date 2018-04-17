import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {

        constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(itemId) {
        //get the item.id and delete the item
        //todoList.item.id

        //console.log(itemId);

        function checkItemId(item) {
            if (item.id != itemId) {
                return true;
            }
            return false;
        }

        //this.props.todoList.filter(checkItemId);
        console.log(this.props.todoList.filter(checkItemId));

    }

    createList() {
        return this.props.todoList.map((item) => { 
            return (
                <li key={item.id}> 
                    <div>Name: {item.name}</div>
                    <div>Description: {item.description}</div>
                    <div>Priority: {item.priority}</div>
                    <div>Due Date: {item.due_date}</div>
                    <div>Complete Date: {item.complete_date}</div>
                    <button onClick={() => this.deleteItem(item.id)} >Delete Task</button>
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