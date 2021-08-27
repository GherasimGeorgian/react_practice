
import Todos from './Todos'
import AddTodo from './AddTodo';
import React, { Component } from 'react';
// import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'
class Home extends Component{

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res =>{
    //             console.log(res)
    //             this.setState({
    //                 posts:res.data.slice(0,10)
    //             })
    //         })
    // }

    state = {
        todos:[
          {id:1,content:'buy some milk'},
          {id:2,content:'play mario kart'}
        ],
        //posts:[]
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
         //console.log(this.props)
        const {posts } = this.props;
        const postList = posts.length ? (
            posts.map(post=>{
                return (<div className="post card" key={post.id}>
                            <img src={Pokeball} alt="a pokeball"/>
                            <div className="card-content">
                                <Link to={'/' + post.id}>
                                    <span clasName="card-title">
                                        {post.title}
                                    </span>
                                </Link>
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
            <div className="todo-app-home container">
            <h1 className='center blue-text' >ToDo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo  addTodo={this.addTodo}/>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
         posts:state.postR.posts
    }
}

export default connect(mapStateToProps)(Home)