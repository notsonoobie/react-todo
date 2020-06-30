import React, { Component } from 'react';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    handleEdit(e) {
        e.preventDefault()
        this.props.edit(this.props.id)
    }
    handleDelete(e) {
        e.preventDefault()
        this.props.deletee(this.props.id)
    }
    handleOnChange(e) {
        this.props.toggleCheck(this.props.id)
    }

    render() {
        return (
            <li><input onChange={this.handleOnChange} type="checkbox" checked={this.props.completed ? "checked" : false} /> {this.props.title} : {this.props.completed ? 'Done' : 'Not Done'} <button onClick={this.handleEdit}>EDIT</button><button onClick={this.handleDelete}>DELETE</button></li>
    )
}
}

export default TodoList;