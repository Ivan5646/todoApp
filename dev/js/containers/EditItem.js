import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditItem extends Component {


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
                <button type="button" onClick={() => <EditItem/>}>Done</button>
            </form>
        )
    }
}

function mapStateToProps(state){ 
    return {
        todoList: state.todoList 
    };
}

export default connect(mapStateToProps)(EditItem); // this is now a contanier