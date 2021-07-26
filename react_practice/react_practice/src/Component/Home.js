
import Todos from './Todos'
import AddTodo from './AddTodo';
import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component{

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res)
                this.setState({
                    posts:res.data.slice(0,10)
                })
            })
    }

    state = {
        todos:[
          {id:1,content:'buy some milk'},
          {id:2,content:'play mario kart'}
        ],
        posts:[]
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
        
        const postList = this.state.posts.length ? (
            this.state.posts.map(post=>{
                return (<div className="post card" key={post.id}>
                            <div className="card-content">
                                <span clasName="card-title">
                                    {post.title}
                                </span>
                                <p>
                                    {post.body}
                                </p>
                            </div>
                        </div>)

            })
        ):(
            <div className="center">
                No posts yet
            </div>
        )
        return(
            <div className="todo-app container">
            <h1 className='center blue-text' >ToDo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo  addTodo={this.addTodo}/>
                {postList}
            </div>
        )
    }
}

export default Home