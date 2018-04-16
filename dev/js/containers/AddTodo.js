import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    addItem() {
        console.log("addItem", this.nameInput.value);
        this.props.onAddItem({
            id: this.nameInput.value, 
            name: this.nameInput.value, 
            description: this.description.value,
            priority: this.priority.value,
            due_date: this.due_date.value,
        });
    }

    render() {
        return (
            <form>
                <div> 
                    <label>Name</label>
                    <input type="text" placeholder="enter the name of the task..." ref={(input) => {this.nameInput = input}} />
                </div>
                <div> 
                    <label>Description</label>
                    <input placeholder="enter task description..." ref={(input) => {this.description = input}} />
                </div>
                <div> 
                    <select name="priority" ref={(input) => {this.priority = input}}>
                        <option value="normal">normal</option>
                        <option value="high">high</option>
                        <option value="urgent">urgent</option>
                    </select>
                </div>
                <div> 
                    <label>Due Date</label>
                    <input placeholder="enter the due date of the task..."  ref={(input) => {this.due_date = input}}/>
                </div>
                <button type="button" onClick={this.addItem}>Add Task</button>
            </form>
        )
    }

    logOut() {
        console.log(this.state.name);
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
       todoList: state.todoList
    };
}

export default connect(
    mapStateToProps,
    dispatch => ({
    onAddItem: (item) => {
        dispatch({type: 'ADD_NAME', payload: item});
    }
})
)(AddTodo); // this is now a contanier