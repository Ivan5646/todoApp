import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from './TodoList';
import {editItem} from '../actions/index';

class EditItem extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.currentTarget.value
         })
    }

    onEditItem() {
        this.props.EditItem1({
            id: this.nameInput.value, 
            name: this.nameInput.value, 
            description: this.description.value,
            priority: this.priority.value,
            due_date: this.due_date.value,
            complete_date: this.complete_date
        });
    }

    render() {
        return (
            <form>
                <div> 
                    <label>Name</label>
                    <input type="text" placeholder="enter the name of the task..." defaultValue={this.props.name} onChange={ this.handleChange }  ref={(input) => {this.nameInput = input}} />
                </div>
                <div> 
                    <label>Description</label>
                    <input placeholder="enter task description..." defaultValue={this.props.description}  ref={(input) => {this.description = input}} />
                </div>
                <div> 
                    <select name="priority" defaultValue={this.props.priority}  ref={(input) => {this.priority = input}}>
                        <option value="normal">normal</option>
                        <option value="high">high</option>
                        <option value="urgent">urgent</option>
                    </select>
                </div>
                <div> 
                    <label>Due Date</label>
                    <input placeholder="enter the due date of the task..." defaultValue={this.props.due_date}   ref={(input) => {this.due_date = input}}/>
                </div>
                <div> 
                    <label>Complete Date</label>
                    <input placeholder="enter the complete date of the task..." defaultValue={this.props.complete_date}   ref={(input) => {this.due_date = input}}/>
                </div>
                <button type="button" onClick={this.onEditItem}>Done</button>
            </form>
        )
    }
}

// function mapStateToProps(state){ 
//     return {
//         todoList: state.todoList 
//     };
// }

function matchDispathToProps(dispatch){
    return bindActionCreators({EditItem1: editItem}, dispatch)
}

export default connect(matchDispathToProps)(EditItem); // this is now a contanier