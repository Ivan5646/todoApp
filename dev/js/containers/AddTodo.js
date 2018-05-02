import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onAddItem} from '../actions/index';

class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.logOut = this.logOut.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    getDate() {
        var date = new Date();
        date.setDate(date.getDate() + 1);
        var convertedDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + "T" + ("0" + (date.getHours())).slice(-2) + ":" + ("0" + (date.getMinutes())).slice(-2) + ":" + "00";
        //console.log(convertedDate);
        return convertedDate;
    }

    addItem(event) {
        //console.log("addItem", this.nameInput.value);
        event.preventDefault();
        var date = new Date();
        var due_date_obj = new Date(this.due_date.value);
        this.props.onAddItem1({
            id: Date.parse(date), 
            name: this.nameInput.value, 
            description: this.description.value,
            due_date: due_date_obj,
            complete_date: "", // fix this
            priority: this.priority.value,
            completed: false
            
        });
        // reset inputs
        this.nameInput.value = "";
        this.description.value = "";
        this.priority.value = "normal";
        this.due_date.value = this.getDate();

        //console.log("props", this.props.todoList[0].due_date); // getting the value of the state example
    }

    render() {
        return (
            <form  onSubmit={this.addItem}>
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
                    <input type="datetime-local" placeholder="enter the due date of the task..." defaultValue={this.getDate()} ref={(input) => {this.due_date = input}}/>
                </div>
                <button type="submit">Add Task</button>
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

function matchDispathToProps(dispatch){
    return bindActionCreators({onAddItem1: onAddItem}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(AddTodo); // this is now a contanier