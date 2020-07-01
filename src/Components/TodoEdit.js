import React, { Component } from 'react';
import '../stylings/TodoEdit.css'

class TodoEdit extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            let text = document.getElementById('editInput').value
            if (text) {
                this.props.editTodo(this.props.keyToIdentify,text);
            }
        }
    }

    render() {
        return (
            <input className="TodoEdit" type="text" onKeyUp={this.handleKeyUp} id="editInput" />
        )
    }
}

export default TodoEdit;