import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import Todo from './Components/Todo';
import './stylings/App.css';

var doEdit = null;
class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.edit = this.edit.bind(this);
    this.deletee = this.deletee.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.clearCheck = this.clearCheck.bind(this);

    this.state = {
      todos: [{
        id : uuid(),
        title: "Do something",
        completed : false
      }]
    }
  }
  addTodo(text) {
    this.state.todos.push({
      id: uuid(),
      title: text,
      completed: false,
      editing: false
    })
    this.setState({todos: this.state.todos})
  }
  toggleEditing(n) {
    return n ? false : true  
  }

  edit(idGot) {
    doEdit = idGot
    this.setState({
      todos: [...this.state.todos.map((t) => {
        if (t.id === doEdit) {
          var t2 = t
          t2.editing = this.toggleEditing(t2.editing)
          return t2
        } else {
          return t
        }
      })]
    })
  }

  toggleCheck(idd) {
    this.setState({
      todos: [...this.state.todos.map((t) => {
        if(t.id === idd){
          var tnew = t
          tnew.completed = this.toggleEditing(tnew.completed)
          return tnew
        } else {
          return t
        }
      })]
    })
  }

  editTodo(todoID,text) {
    this.setState({
      todos: [...this.state.todos.map(t => {
        if (t.id === todoID) {
          var tnew = t
          tnew.title = text;
          tnew.editing = this.toggleEditing(tnew.editing)
          return tnew
        } else {
          return t
        }
      })]
    })
  }

  deletee(idd) {
    this.setState({
      todos : [...this.state.todos.filter((t) => t.id !== idd)]
    })
  }

  clearAll(e) {
    this.setState({ todos : [] })
  }

  clearCheck(e) {
    this.setState({
      todos: [...this.state.todos.filter(t => t.completed ? false : true )]
    })
  }

  render() {
    return (
      <div className="App">
        <Todo clearAll={this.clearAll} clearCheck={this.clearCheck} editTodo={this.editTodo} toggleCheck={this.toggleCheck} todos={this.state.todos} addTodo={this.addTodo} edit={this.edit} deletee={this.deletee} />
      </div>
    )
  }
}

export default App;
