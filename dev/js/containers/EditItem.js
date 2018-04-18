import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';

class EditItem extends Component {


    render() {
        return (
            <form>
                <div> 
                    <label>Name</label>
                    <input type="text" placeholder="enter the name of the task..." value={this.props.name}  ref={(input) => {this.nameInput = input}} />
                </div>
                <div> 
                    <label>Description</label>
                    <input placeholder="enter task description..." value={this.props.description}  ref={(input) => {this.description = input}} />
                </div>
                <div> 
                    <select name="priority" value={this.props.priority}  ref={(input) => {this.priority = input}}>
                        <option value="normal">normal</option>
                        <option value="high">high</option>
                        <option value="urgent">urgent</option>
                    </select>
                </div>
                <div> 
                    <label>Due Date</label>
                    <input placeholder="enter the due date of the task..." value={this.props.due_date}   ref={(input) => {this.due_date = input}}/>
                </div>
                <button type="button" onClick={() => <EditItem/>}>Done</button>
            </form>
        )
    }
}

// function mapStateToProps(state){ 
//     return {
//         todoList: state.todoList 
//     };
// }

export default connect()(EditItem); // this is now a contanier