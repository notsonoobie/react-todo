import React, { Component } from 'react';

class ClearTodo extends Component{
    constructor(props) {
        super(props);
        this.handleClearAllClick = this.handleClearAllClick.bind(this);
        this.handleClearCheckClick = this.handleClearCheckClick.bind(this);
    }

    handleClearAllClick(e) {
        e.preventDefault()
        this.props.clearAll(e)
    }

    handleClearCheckClick(e) {
        e.preventDefault()
        this.props.clearCheck(e)
    }

    render() {
        return (
            <div className="ClearTodo">
                <button onClick={this.handleClearAllClick}>CLEAR ALL</button><button onClick={this.handleClearCheckClick}>CLEAR CHECKED</button>
            </div>
        )
    }
}

export default ClearTodo;