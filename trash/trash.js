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
