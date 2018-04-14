import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {

    render() {
        return (
            <div>static list</div>
        )
    }
}

export default connect()(TodoList); // this is now a contanier