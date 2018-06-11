//redux store state has form of:
http://joxi.ru/4Akq6obtyyl8Km
{todoList: Array(3), visibilityFilter: "SHOW_ALL", editForm: {…}}
editForm
:
id
:
null
__proto__
:
Object
todoList
:
Array(3)
0
:
complete_date
:
""
description
:
"lllllmm"
due_date
:
" "
id
:
1526510908000
name
:
"oooooooooooo"
priority
:
"high"
__proto__
:
Object
1
:
{id: 1526511552000, name: "xzcv", description: "", due_date: "2018-05-29T17:00:00.000Z", complete_date: 1526511712093, …}
2
:
{id: 1528716547000, name: "ffdb", description: "fdb", due_date: Moment, complete_date: "", …}
length
:
3
__proto__
:
Array(0)
visibilityFilter
:
"SHOW_ALL"
__proto__
:
Object




                        value={this.state.dueDate}
                        onChange={(data) => this.setState({dueDate: Datetime.moment(data).format("DD/MM/YY hh:mm  A")})}



1527613200
1527613200 event
1527613200  due_date
1527440400  due_date
1527440400000 event.get()
1526066508278  Date.now() ; myDate = new Date() +(new Date(myDate ))






<div>
    <span>All</span> <span>Normal</span> <span>Important</span> <span>Urgent</span>
</div>

// filter items. https://egghead.io/lessons/react-redux-react-todo-list-example-filtering-todos 03:48 finished
// component. it should be a funciton of TodoList with action inside of the function
const FilterLink = ({
    filter,
    children
}) => {
    return (
        <a href='#'
            onClick = {e => {
                e.preventDefault();
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }}
        >
            {children}
        </a>
    )
}

// in render method
<p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
</p>

// this is should be action creators
const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
}

// in render methfo 
const visibleTodos = getVisibleTodos(
    this.props.todos,
    this.props.visibilityFilter
);
