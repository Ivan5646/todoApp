import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component {


        render() {
        return (
            <form>
            <div> 
                <label>Name</label>
                <input placeholder="enter the name of the task..." />
            </div>
            <div> 
                <label>Description</label>
                <input placeholder="enter task description..." />
            </div>
            <select name="priority" >
                <option value="normal">normal</option>
                <option value="sahighab">high</option>
                <option value="urgent">urgent</option>
            </select>
            <div> 
                <label>Due Date</label>
                <input placeholder="enter the due date of the task..." />
            </div>
            <button>Add Task</button>
            </form>
        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
       
    };
}

export default connect(mapStateToProps)(AddTodo); // this is now a contanier