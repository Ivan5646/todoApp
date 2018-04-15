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

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDueDateChange = this.handleDueDateChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    handleNameChange(e) {
       this.setState({name: e.target.value});
    }
    handleDescriptionChange(e) {
       this.setState({description: e.target.value});
    }
    handlePriorityChange(e) {
       this.setState({priority: e.target.value});
    }
    handleDueDateChange(e) {
       this.setState({due_date: e.target.value});
    }

    addItem() {
        
    }

    render() {
        return (
            <form>
                <div> 
                    <label>Name</label>
                    <input placeholder="enter the name of the task..." onChange={this.handleNameChange} />
                </div>
                <div> 
                    <label>Description</label>
                    <input placeholder="enter task description..." onChange={this.handleDescriptionChange} />
                </div>
                <div> 
                    <select name="priority" onChange={this.handlePriorityChange}>
                        <option value="normal">normal</option>
                        <option value="high">high</option>
                        <option value="urgent">urgent</option>
                    </select>
                </div>
                <div> 
                    <label>Due Date</label>
                    <input placeholder="enter the due date of the task..." onChange={this.handleDueDateChange} />
                </div>
                <button type="button">Add Task</button>

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
       
    };
}

export default connect(mapStateToProps)(AddTodo); // this is now a contanier