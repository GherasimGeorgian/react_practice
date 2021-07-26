import logo from './logo.svg';
import './App.css';
import Welcome from './Component/AppX'
import Ninjas from './Component/Ninjas';
import NinjasList from './Component/NinjasList'
import AddNinja from './Component/AddNinja';
import React, { Component } from 'react';
import Todos from './Component/Todos'
import AddTodo from './Component/AddTodo';
class App extends Component {
 
  state = {
    todos:[
      {id:1,content:'buy some milk'},
      {id:2,content:'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render(){
  return (
    <div className="todo-app container">
      <h1 className='center blue-text' >ToDo's</h1>

      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo  addTodo={this.addTodo}/>
    </div>
  );
 }
}

export default App;
