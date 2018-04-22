import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem, checkCompleted, recordDate} from '../actions/index';
import EditItem from './EditItem';

class TodoList extends Component {

        constructor(props) {
        super(props);

        this.state = {
          showForm: false
          // checked: this.props.todoList[0].completed
      };

        this.deleteItem = this.deleteItem.bind(this);
        this.toogleEditForm = this.toogleEditForm.bind(this);
        this.checkCompleted = this.checkCompleted.bind(this);
    }

    deleteItem(itemId) {
        this.props.deleteItem1(itemId);
    }

    toogleEditForm(itemId) {
        this.setState({
          showForm: !this.state.showForm,
          showId: itemId
        })
    }

    checkCompleted(itemId, itemCompleted) {
        this.props.checkCompleted1(itemId);

        // check if the task is completed, if it is not then the completion date should be recorded
        if(!itemCompleted) {        
            // record the complete date
            var date = new Date();       
            this.props.recordDate1(date, itemId);
        }
    }

    createList() {
        return this.props.todoList.map((item) => { 
            return (
                <li key={item.id} className="task" > 
                    <input type="checkbox" defaultChecked={item.completed} onClick={() => this.checkCompleted(item.id, item.completed)} />
                    <div>Name: {item.name}</div>
                    <div>Description: {item.description}</div>
                    <div>Priority: {item.priority}</div>
                    <div type="date">Due Date: {item.due_date}</div>
                    <div>Complete Date: {
                        item.complete_date=="" ? "" : ( item.complete_date.getHours(), item.complete_date.getMinutes(), item.complete_date.toDateString() )
                    }</div>
                    <button onClick={() => this.deleteItem(item.id)} >Delete Task</button>
                    <button onClick={() => this.toogleEditForm(item.id)}>Edit Task</button>
                    {this.state.showForm && this.state.showId==item.id && <EditItem id={item.id} name={item.name} description={item.description} due_date={item.due_date} complete_date={item.complete_date} priority={item.priority} />}
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

function matchDispathToProps(dispatch){
    return bindActionCreators({deleteItem1: deleteItem, checkCompleted1: checkCompleted, recordDate1: recordDate}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(TodoList); // this is now a contanier