import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from './TodoList';
import {editItem, getEditFormId} from '../actions/index'; 

class EditItem extends Component {

    constructor(props) {
        super(props);
        this.onEditItem = this.onEditItem.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    onEditItem(event) {
        event.preventDefault();


        this.props.editItem1({
            id: this.props.id, 
            name: this.nameInput.value, 
            description: this.description.value,
            due_date: new Date(this.due_date.value),
            complete_date: this.complete_date.value,
            priority: this.priority.value
        });

        this.props.getEditFormId1({
            id: null
        })

        //console.log(this.props.todoList);
    }

    getDate() {
        var date = new Date(this.props.due_date);
        var convertedDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + "T" + ("0" + (date.getHours())).slice(-2) + ":" + ("0" + (date.getMinutes())).slice(-2) + ":" + "00";
        //console.log(convertedDate);
        return convertedDate;
    }

    render() {
        return (
            <form className="editForm" onSubmit={this.onEditItem}>
                <div> 
                    <label>Name</label>
                    <input type="text" placeholder="enter the name of the task..." defaultValue={this.props.name} ref={(input) => {this.nameInput = input}} />
                </div>
                <div> 
                    <label>Description</label>
                    <input placeholder="enter task description..." defaultValue={this.props.description} ref={(input) => {this.description = input}} />
                </div>
                <div> 
                    <select name="priority" defaultValue={this.props.priority} ref={(input) => {this.priority = input}}>
                        <option value="normal">normal</option>
                        <option value="high">high</option>
                        <option value="urgent">urgent</option>
                    </select>
                </div>
                <div> 
                    <label>Due Date</label>
                    <input type="datetime-local" placeholder="date..." defaultValue={this.getDate()} ref={(input) => {this.due_date = input}} />
                </div>
                <div> 
                    <label>Complete Date</label>
                    <input placeholder="enter the complete date of the task..." defaultValue={this.props.complete_date} ref={(input) => {this.complete_date = input}} />
                </div>
                <button type="submit">Done</button>
            </form>
        )
    }
}

function mapStateToProps(state){ 
    return {
        todoList: state.todoList,
        editForm: state.editForm
    };
}

function matchDispathToProps(dispatch){
    return bindActionCreators({editItem1: editItem, getEditFormId1: getEditFormId}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(EditItem); // this is now a contanier