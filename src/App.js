import React from 'react';
import { Component } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import ListComponent from './listElementComponent';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      text: '',
      todoItems: [],
    }
  }

  newTodoItem = event => {
    this.setState({ text: event.target.value })
  }

  addTodoItem = event => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      name: this.state.text,
    }
    this.setState({
      todoItems: [...this.state.todoItems, newTodo],
      text: '',
      isClicked: true,
    })
  }

  removeItem = (id) => {
    console.log('Deleted item.');
    const deleteTodo = this.state.todoItems.filter(item => item.id !== id);
    this.setState({
      todoItems: deleteTodo
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>List of To-dos</h1>
          <form onSubmit={this.addTodoItem}>
            <input value={this.state.text} placeholder="Add to-do item" onChange={this.newTodoItem} />
            <button onClick={this.addTodoItem}>Submit</button>
          </form>
          <ListComponent todoItems={this.state.todoItems} removeItem={this.removeItem} />

        </header>
      </div>
    );
  }
}
export default App;
