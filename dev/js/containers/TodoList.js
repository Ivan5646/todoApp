import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem, checkCompleted, recordDate, getEditFormId, updateOverdue} from '../actions/index';
import EditItem from './EditItem';

class TodoList extends Component {

        constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.toogleEditForm = this.toogleEditForm.bind(this);
        this.checkCompleted = this.checkCompleted.bind(this);
        // this.compareCurrentDateDueDate = this.compareCurrentDateDueDate.bind(this);
        this.timestampToDate = this.timestampToDate.bind(this);
        this.markTodo = this.markTodo.bind(this);
    }

    // compareCurrentDateDueDate(dueDate, completed) {
    //     var currentDate = new Date(); 
    //     if (completed == false && dueDate < currentDate) {
    //         return "red";
    //     }
    // }

    componentDidMount() {
        this.overdueTimer = setInterval(() => { 
            this.props.todos
                .filter(item => !item.overdue && typeof(item.due_date)==="object" && (item.due_date < Date.now())) // filter overdue tasks           
                .forEach(item => this.props.updateOverdue1(item.id)) // update overdue in store
        }, 1000);
       
        // this.completedTimer = setInterval(() => { 
        //     this.props.todos.filter(item => item.completed)
        // }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.overdueTimer);
    }

    deleteItem(itemId) {
        this.props.deleteItem1(itemId);
    }

    toogleEditForm(itemId) {        
        if (itemId === this.props.editForm.id) {
            this.props.getEditFormId1({ // supposed to change redux store
                id: null
            })
        } else {
            this.props.getEditFormId1({
                id: itemId
            })
        }
        // console.log(this.props.editForm.id);

        //const showId = (itemId === this.state.showId) ? null : itemId;
        //this.setState({showId});
    }

    showEditForm(id, name, description, due_date, complete_date, priority) {
        if(this.props.editForm.id === id) {
            return (<EditItem id={id} name={name} description={description} due_date={due_date} complete_date={complete_date} priority={priority} />);
        }
    }

    checkCompleted(itemId, itemCompleted) {
        this.props.checkCompleted1(itemId);

        // if the task is not completed, check its checkbox and record the completion date
        if(!itemCompleted) {        
            // record the complete date and time
            var date = new Date(); 
            date = +(new Date(date));
            this.props.recordDate1(date, itemId);
        }else {
            this.props.recordDate1("", itemId);
        }
    }

    markTodo(overdue, completed) {
        var style;
        if (overdue===true) {
            style = "red";
        } 
        // else if (completed != "") {
        //     style = "grey";
        // }
        return style;
    }

    timestampToDate(date) {
        var date = new Date(date);
        var convertedDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " Time: " + ("0" + (date.getHours())).slice(-2) + ":" + ("0" + (date.getMinutes())).slice(-2) + ":" + "00";
        //console.log(convertedDate);
        return convertedDate;
    }

    createList() {
        return this.props.todoList.map((item) => { 
            return (
                <li key={item.id} className="task" className={this.markTodo(item.overdue, item.complete_date)}> 
                    <input type="checkbox" defaultChecked={item.completed} onClick={() => this.checkCompleted(item.id, item.completed)} />
                    <div>Name: {item.name}</div>
                    <div>Description: {item.description}</div>
                    <div>Priority: {item.priority}</div>
                    <div>Due Date: {(item.due_date.length>1 || typeof(item.due_date)==="object") ? this.timestampToDate(item.due_date) : ""}</div>
                    <div>Complete Date: {
                        item.complete_date=="" ? "" : (this.timestampToDate(item.complete_date))
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
        todoList: getVisibleTodos(state.todoList, state.visibilityFilter), // state.visibilityFilter - reducers/visibilityFilter.js
        editForm: state.editForm,
        todos: state.todoList
    };
}

function matchDispathToProps(dispatch){
    return bindActionCreators({deleteItem1: deleteItem, checkCompleted1: checkCompleted, recordDate1: recordDate, getEditFormId1: getEditFormId, updateOverdue1: updateOverdue}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(TodoList); // this is now a contanier