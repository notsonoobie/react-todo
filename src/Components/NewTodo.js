import React, { Component } from 'react';

class NewTodo extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault()
        let text = document.getElementById('input').value
        if (text) {
            this.props.addTodo(text)
            document.getElementById('input').value = ''
        }
    }
    render() {
        return (
            <div>
                <input id="input" type="text" />
                <button type="submit" onClick={this.handleClick}>AddTodo</button>
            </div>
        )
    }
}

export default NewTodo;
