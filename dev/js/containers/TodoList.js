import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem, checkCompleted, recordDate, getItem} from '../actions/index';
import EditItem from './EditItem';

class TodoList extends Component {

        constructor(props) {
        super(props);

        this.state = {
          showId: null
      };

        this.deleteItem = this.deleteItem.bind(this);
        this.toogleEditForm = this.toogleEditForm.bind(this);
        this.checkCompleted = this.checkCompleted.bind(this);
        this.compareCurrentDateDueDate = this.compareCurrentDateDueDate.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    deleteItem(itemId) {
        this.props.deleteItem1(itemId);
    }

    toogleEditForm(itemId) {
        this.props.getItem1({
            id: itemId
        })

        console.log(this.props.todoList);

        const showId = (itemId === this.state.showId) ? null : itemId;
        this.setState({showId});
    }

    showEditForm(id, name, description, due_date, complete_date, priority) {
        if(this.state.showId === id) {
            return (<EditItem id={id} name={name} description={description} due_date={due_date} complete_date={complete_date} priority={priority} />);
        }
    }

    checkCompleted(itemId, itemCompleted) {
        this.props.checkCompleted1(itemId);

        // if the task is not completed, check its checkbox and record the completion date
        if(!itemCompleted) {        
            // record the complete date and time
            var date = new Date(); 
            this.props.recordDate1(date, itemId);
        }else {
            this.props.recordDate1("", itemId);
        }
    }

    compareCurrentDateDueDate(dueDate, completed) {
        // if (completeDate != "" && dueDate < completeDate) { 
        //     return  "grey";
        // }

        var currentDate = new Date(); 
        if (completed == false && dueDate < currentDate) {
            return "red";
        }
    }

    createList() {
        return this.props.todoList.map((item) => { 
            return (
                <li key={item.id} className="task" className={this.compareCurrentDateDueDate(item.due_date, item.completed)}> 
                    <input type="checkbox" defaultChecked={item.completed} onClick={() => this.checkCompleted(item.id, item.completed)} />
                    <div>Name: {item.name}</div>
                    <div>Description: {item.description}</div>
                    <div>Priority: {item.priority}</div>
                    <div>Due Date: {item.due_date instanceof Date && !isNaN(item.due_date.valueOf()) && item.due_date.toString()}</div>
                    <div>Complete Date: {
                        item.complete_date=="" ? "" : (item.complete_date.toString())
                    }</div>
                    <button onClick={() => this.deleteItem(item.id)} >Delete Task</button>
                    <button onClick={() => this.toogleEditForm(item.id)}>Edit Task</button>
                    {this.showEditForm(item.id, item.name, item.description, item.due_date, item.complete_date, item.priority)}
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

const getVisibleTodos = (todos, filter) => { // filter - state.visibilityFilter
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_NORMAL':
      return todos.filter(t => t.priority==="normal") 
    case 'SHOW_HIGH':
      return todos.filter(t => t.priority==="high")
    case 'SHOW_URGENT':
      return todos.filter(t => t.priority==="urgent")
  }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
        todoList: getVisibleTodos(state.todoList, state.visibilityFilter, state.editForm) // state.visibilityFilter - reducers/visibilityFilter.js
    };
}

function matchDispathToProps(dispatch){
    return bindActionCreators({deleteItem1: deleteItem, checkCompleted1: checkCompleted, recordDate1: recordDate, getItem1: getItem}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(TodoList); // this is now a contanier