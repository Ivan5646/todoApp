import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "default name",
            description: "default description",
            priority: "normal",
            due_date: "no due date"
        };

        this.addItem = this.addItem.bind(this);
        this.logOut = this.logOut.bind(this);
    }


    addItem() {
        console.log("addItem", this.nameInput.value);
        this.props.onAddItem({name: this.nameInput.value, description: this.description.value});
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
                    <select name="priority">
                        <option value="normal">normal</option>
                        <option value="high">high</option>
                        <option value="urgent">urgent</option>
                    </select>
                </div>
                <div> 
                    <label>Due Date</label>
                    <input placeholder="enter the due date of the task..."  />
                </div>
                <button type="button" onClick={this.addItem}>Add Task</button>

                <div>{this.state.name}</div>
                <div>{this.state.description}</div>
                <div>{this.state.priority}</div>
                <div>{this.state.due_date}</div>
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
    onAddItem: (itemName) => {
        dispatch({type: 'ADD_NAME', payload: itemName});
    }
})
)(AddTodo); // this is now a contanier