import './App.css';
import Todo from './todo.js'
import React from 'react';
import AddTodo from './AddTodo'

class App extends React.Component {

  state = {
    todos: [
      {
        id:1,
        content: "book reading"
      },
      {
        id:2,
        content: "watching"
      }
    ]
  }
  deletetodo = (id) =>{
    const  temp =this.state.todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({
      todos:temp
    })
    console.log(id)
  }

  addtodo = (todo) =>{
    
    console.log(todo)
    todo.id =Math.random()
    let temp = [...this.state.todos,todo]
    
    this.setState({
      todos:temp
    })

  }

  render = () =>{
    return (
      <div className="App-content">
        <h1>ToDo App</h1>
        <Todo todo={this.state.todos} deletetodo={this.deletetodo}/>

        <AddTodo addtodo = {this.addtodo}/>

      </div>
    )
  }





}

export default App;
