import React, { Component } from 'react';
import '../stylings/Todo.css'
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import TodoEdit from './TodoEdit';
import ClearTodo from './ClearTodo';

class Todo extends Component{
    render() {
        const todoElm = this.props.todos.map(todo => {
            if (!todo.editing) {
                return <TodoList toggleCheck = {this.props.toggleCheck} key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} edit={this.props.edit} deletee={this.props.deletee} />               
            } else {
                return <TodoEdit editTodo={this.props.editTodo} key={todo.id} keyToIdentify={todo.id} />
            }
        })
        return (
            <div className="Todo">
                <header>
                    <h1 className="Todo-header">REACT TODO</h1>
                </header>
                <main>
                    <ul>
                        {todoElm}
                    </ul>
                    <NewTodo addTodo={this.props.addTodo} />
                    <ClearTodo clearAll = {this.props.clearAll} clearCheck = {this.props.clearCheck} />
                </main>
            </div>
        )
    }
}

export default Todo;